"use strict";
let i;
n.d(t, { A: () => V }), n(321073);
var r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(155718),
    l = n(194862),
    d = n(223273),
    _ = n(253932),
    u = n(395671),
    c = n(954571),
    E = n(927813),
    h = n(403362),
    m = n(723702),
    f = n(935208),
    g = n(652215),
    p = n(705751);
let A = "GameStoreReportedGames",
    I = E.A.Millis.DAY,
    T = new l.A(),
    S = Object.create(null),
    N = Object.create(null),
    C = s.w.get(A) ?? Object.create(null),
    R = "",
    O = null,
    y = !1,
    v = null,
    D = !1,
    L = "",
    b = [],
    w = [],
    P = new Map(),
    k = E.A.Millis.HOUR;
function M(e) {
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
function U(e, t) {
    null == S[t] && (S[t] = []), S[t].push(e);
}
function x(e) {
    let t = e instanceof d.xg ? M(e) : e;
    for (let n of (T.set(e.id, t), U(t.id, t.name.toLowerCase()), e.aliases)) U(t.id, n.toLowerCase());
    if ((0, m.isDesktop)()) for (let n of e.executables) N[n.name] = t.id;
}
class G extends r.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => M(new d.xg(e))) ?? [],
                  }
                : { detectableGamesEtag: "", detectableGames: [] },
        (e) => ((0, m.isDesktop)() ? e : { detectableGamesEtag: "", detectableGames: [] }),
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
            (null != e.detectableGamesEtag && (R = e.detectableGamesEtag),
            null != e.blocklistEtag && (L = e.blocklistEtag),
            null != e.blocklistExecutables && (b = e.blocklistExecutables),
            null != e.blocklistPatterns && (w = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => x(e)));
    }
    getState() {
        return (0, m.isDesktop)()
            ? {
                  detectableGamesEtag: R,
                  detectableGames: T.values(),
                  blocklistEtag: L,
                  blocklistExecutables: b,
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
        return T.get(f.default.cast(e));
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
            null == (t = e.type === p.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === o.Mh.OFFICIAL)?.id)
            ? null
            : this.getDetectableGame(t);
    }
    getGameByApplication(e) {
        let t = this.getDetectableGame(e.id);
        if (null != t) return t;
        if (null != e.linkedGames) {
            for (let n of e.linkedGames) if (null != (t = this.getDetectableGame(n.id))) return t;
        }
        return this.searchGamesByName(e.name)
            .map((e) => this.getDetectableGame(e))
            .reverse()[0];
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
        return R;
    }
    get blocklistEtag() {
        return L;
    }
    get lastFetched() {
        return O;
    }
    get hasAttemptedFetch() {
        return y;
    }
    get detectableGamesTtl() {
        return I;
    }
    canFetchDetectableGames() {
        return !0 !== i && (null == O || Date.now() >= O + I);
    }
    canFetchExecutableBlocklist() {
        return !D && (null == v || Date.now() >= v + I);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = N[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase(),
            n = b.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let i = w.find((t) => t.test(e.exePath));
        return null != i && (this.maybeTrackBlock(e, "pattern_match", i.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        let i = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            r = P.get(i),
            s = Date.now();
        (null == r || s - r >= k) &&
            (P.set(i, s),
            c.default.track(g.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: i,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.findGame(e),
            n = null != e.name && null != C[e.name];
        return _.tz.getSetting() && !i && !(t || n);
    }
    markGameReported(e) {
        (C[e] = !0), s.w.set(A, C);
    }
}
let V = new G(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { detectableApplications: t } = e;
        for (let e of (T.clear(), (S = Object.create(null)), (N = Object.create(null)), t)) x(e);
    },
    GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    GAMES_DATABASE_FETCH_FAIL: function () {
        (i = !1), (y = !0);
    },
    GAMES_DATABASE_UPDATE: function (e) {
        let { games: t, etag: n } = e;
        for (let e of (null != n &&
            R !== n &&
            (T.clear(), (S = Object.create(null)), (N = Object.create(null)), (R = n)),
        t))
            x({
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(u.lg),
                overlay: e.overlay ?? !1,
                overlayWarn: e.overlay_warn ?? !1,
                overlayCompatibilityHook: e.overlay_compatibility_hook ?? !1,
                hook: e.hook ?? !0,
                aliases: e.aliases ?? [],
                supportsOutOfProcessOverlay: u.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
                themes: e.themes ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
                cover_image_hash: e.cover_image_hash ?? void 0,
                content_classification: e.content_classification ?? void 0,
            });
        (i = void 0), (O = Date.now()), (y = !0);
    },
    GAMES_BLOCKLIST_FETCH: function () {
        D = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        D = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: i } = e;
        null != i && L !== i && ((L = i), (b = t.map((e) => e.toLowerCase())), (w = n.map((e) => RegExp(e, "i")))),
            (D = !1),
            (v = Date.now());
    },
});
