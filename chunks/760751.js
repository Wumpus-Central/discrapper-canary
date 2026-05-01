"use strict";
let i;
n.d(t, { A: () => V }), n(321073);
var r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(155718),
    l = n(194862),
    u = n(223273),
    c = n(885386),
    d = n(395671),
    _ = n(174459),
    f = n(927813),
    h = n(403362),
    p = n(723702),
    E = n(935208),
    m = n(652215),
    g = n(705751);
let A = "GameStoreReportedGames",
    I = f.A.Millis.DAY,
    T = new l.A(),
    S = Object.create(null),
    N = Object.create(null),
    y = s.w.get(A) ?? Object.create(null),
    C = "",
    v = null,
    O = !1,
    R = null,
    b = !1,
    D = "",
    L = [],
    w = [],
    M = new Map(),
    P = f.A.Millis.HOUR,
    x = new Set();
function U(e) {
    return {
        id: e.id,
        name: e.name,
        executables: e.executables,
        overlayWarn: e.overlayWarn,
        overlayCompatibilityHook: e.overlayCompatibilityHook,
        overlay: e.overlay,
        hook: e.hook,
        aliases: e.aliases,
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
        themes: e.themes ?? [],
        icon: e.icon,
        thirdPartySkus: e.thirdPartySkus ?? [],
        cover_image_hash: e.cover_image_hash ?? void 0,
        content_classification: e.content_classification ?? void 0,
    };
}
function k(e, t) {
    null == S[t] && (S[t] = []), S[t].push(e);
}
function G(e) {
    let t = e instanceof u.xg ? U(e) : e;
    for (let n of (T.set(e.id, t), k(t.id, t.name.toLowerCase()), e.aliases)) k(t.id, n.toLowerCase());
    if ((0, p.isDesktop)()) for (let n of e.executables) N[n.name] = t.id;
}
class F extends r.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => U(new u.xg(e))) ?? [],
                  }
                : { detectableGamesEtag: "", detectableGames: [] },
        (e) => ((0, p.isDesktop)() ? e : { detectableGamesEtag: "", detectableGames: [] }),
        () => ({ detectableGamesEtag: "", detectableGames: [] }),
        (e) => ({
            ...e,
            blocklistEtag: e.blocklistEtag ?? "",
            blocklistExecutables: e.blocklistExecutables ?? [],
            blocklistPatterns: e.blocklistPatterns ?? [],
        }),
    ];
    initialize(e) {
        null != e &&
            (null != e.detectableGamesEtag && (C = e.detectableGamesEtag),
            null != e.blocklistEtag && (D = e.blocklistEtag),
            null != e.blocklistExecutables && (L = e.blocklistExecutables),
            null != e.blocklistPatterns && (w = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => G(e)));
    }
    getState() {
        return (0, p.isDesktop)()
            ? {
                  detectableGamesEtag: C,
                  detectableGames: T.values(),
                  blocklistEtag: D,
                  blocklistExecutables: L,
                  blocklistPatterns: w.map((e) => e.source),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
                  blocklistEtag: "",
                  blocklistExecutables: [],
                  blocklistPatterns: [],
              };
    }
    get games() {
        return T.values();
    }
    getDetectableGame(e) {
        return T.get(E.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(S, t) ? S[t] : [];
    }
    findGame(e, t) {
        let n,
            i = this.getDetectableGame(e.id);
        if (null != i) return i;
        if (null != e.name)
            for (let i of this.searchGamesByName(e.name)) {
                let r = this.getDetectableGame(i);
                if (null != r) {
                    if (null != t) {
                        t(r);
                        continue;
                    }
                    if (null != e.exePath && null != r.executables) {
                        let t = e.exePath.split("/").filter(h.Vq).pop();
                        if (r.executables.some((e) => e.name === t)) return r;
                    }
                    n = r;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(h.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let i = e.exePath.split("/").filter(h.Vq).slice(-2).join("/"),
                r = this.getGameByExecutable(i);
            if (null != r) return r;
        }
        return n;
    }
    getOfficialGame(e) {
        let t;
        return null == e ||
            null == (t = e.type === g.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === o.Mh.OFFICIAL)?.id)
            ? null
            : this.getDetectableGame(t);
    }
    getGameByApplication(e) {
        let t,
            n = this.getDetectableGame(e.id);
        if (null != n) return n;
        let i = "none";
        if (null != e.linkedGames)
            for (let n of e.linkedGames) {
                let e = this.getDetectableGame(n.id);
                if (null != e) {
                    (i = "linked_game"), (t = e);
                    break;
                }
            }
        if (null == t) {
            let n = this.searchGamesByName(e.name)
                .map((e) => this.getDetectableGame(e))
                .reverse()[0];
            null != n && ((i = "name"), (t = n));
        }
        return this.maybeTrackApplicationLookupFallthrough(e, i, t), t;
    }
    isGameInDatabase(e) {
        return (
            null != this.findGame(e) ||
            (void 0 !== e.nativeProcessObserverId && (0x80000000 & e.nativeProcessObserverId) == 0)
        );
    }
    get fetching() {
        return !0 === i;
    }
    get detectableGamesEtag() {
        return C;
    }
    get blocklistEtag() {
        return D;
    }
    get lastFetched() {
        return v;
    }
    get hasAttemptedFetch() {
        return O;
    }
    get detectableGamesTtl() {
        return I;
    }
    canFetchDetectableGames() {
        return !0 !== i && (null == v || Date.now() >= v + I);
    }
    canFetchExecutableBlocklist() {
        return !b && (null == R || Date.now() >= R + I);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = N[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase(),
            n = L.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let i = w.find((t) => t.test(e.exePath));
        return null != i && (this.maybeTrackBlock(e, "pattern_match", i.source), !0);
    }
    maybeTrackApplicationLookupFallthrough(e, t, n) {
        let i = e.id;
        x.has(i) ||
            (x.add(i),
            _.default.track(m.HAw.GAME_APPLICATION_LOOKUP_FALLTHROUGH, {
                application_id: i,
                application_name: e.name ?? null,
                match_type: t,
                matched_game_id: n?.id ?? null,
                matched_game_name: n?.name ?? null,
            }));
    }
    maybeTrackBlock(e, t, n) {
        let i = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            r = M.get(i),
            s = Date.now();
        (null == r || s - r >= P) &&
            (M.set(i, s),
            _.default.track(m.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: i,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.findGame(e),
            n = null != e.name && null != y[e.name];
        return c.tz.getSetting() && !i && !(t || n);
    }
    markGameReported(e) {
        (y[e] = !0), s.w.set(A, y);
    }
}
let V = new F(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { detectableApplications: t } = e;
        for (let e of (T.clear(), (S = Object.create(null)), (N = Object.create(null)), t)) G(e);
    },
    GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    GAMES_DATABASE_FETCH_FAIL: function () {
        (i = !1), (O = !0);
    },
    GAMES_DATABASE_UPDATE: function (e) {
        let { games: t, etag: n } = e;
        for (let e of (null != n &&
            C !== n &&
            (T.clear(), (S = Object.create(null)), (N = Object.create(null)), (C = n)),
        t))
            G({
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(d.lg),
                overlay: e.overlay ?? !1,
                overlayWarn: e.overlay_warn ?? !1,
                overlayCompatibilityHook: e.overlay_compatibility_hook ?? !1,
                hook: e.hook ?? !0,
                aliases: e.aliases ?? [],
                supportsOutOfProcessOverlay: d.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
                themes: e.themes ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
                cover_image_hash: e.cover_image_hash ?? void 0,
                content_classification: e.content_classification ?? void 0,
            });
        (i = void 0), (v = Date.now()), (O = !0);
    },
    GAMES_BLOCKLIST_FETCH: function () {
        b = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        b = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: i } = e;
        null != i && D !== i && ((D = i), (L = t.map((e) => e.toLowerCase())), (w = n.map((e) => RegExp(e, "i")))),
            (b = !1),
            (R = Date.now());
    },
});
