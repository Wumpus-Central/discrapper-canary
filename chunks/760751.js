"use strict";
let i;
n.d(t, { A: () => F }), n(321073);
var r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(155718),
    l = n(194862),
    _ = n(223273),
    d = n(253932),
    u = n(395671),
    c = n(954571),
    E = n(927813),
    h = n(403362),
    m = n(723702),
    f = n(935208),
    g = n(652215),
    A = n(705751);
let I = "GameStoreReportedGames",
    p = E.A.Millis.DAY,
    T = new l.A(),
    S = Object.create(null),
    N = Object.create(null),
    O = s.w.get(I) ?? Object.create(null),
    R = "",
    C = null,
    y = !1,
    D = null,
    L = !1,
    v = "",
    w = [],
    P = [],
    b = new Map(),
    k = E.A.Millis.HOUR,
    U = new Set();
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
function G(e, t) {
    null == S[t] && (S[t] = []), S[t].push(e);
}
function x(e) {
    let t = e instanceof _.xg ? M(e) : e;
    for (let n of (T.set(e.id, t), G(t.id, t.name.toLowerCase()), e.aliases)) G(t.id, n.toLowerCase());
    if ((0, m.isDesktop)()) for (let n of e.executables) N[n.name] = t.id;
}
class V extends r.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => M(new _.xg(e))) ?? [],
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
            null != e.blocklistEtag && (v = e.blocklistEtag),
            null != e.blocklistExecutables && (w = e.blocklistExecutables),
            null != e.blocklistPatterns && (P = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => x(e)));
    }
    getState() {
        return (0, m.isDesktop)()
            ? {
                  detectableGamesEtag: R,
                  detectableGames: T.values(),
                  blocklistEtag: v,
                  blocklistExecutables: w,
                  blocklistPatterns: P.map((e) => e.source),
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
            null == (t = e.type === A.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === o.Mh.OFFICIAL)?.id)
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
        return R;
    }
    get blocklistEtag() {
        return v;
    }
    get lastFetched() {
        return C;
    }
    get hasAttemptedFetch() {
        return y;
    }
    get detectableGamesTtl() {
        return p;
    }
    canFetchDetectableGames() {
        return !0 !== i && (null == C || Date.now() >= C + p);
    }
    canFetchExecutableBlocklist() {
        return !L && (null == D || Date.now() >= D + p);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = N[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase(),
            n = w.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let i = P.find((t) => t.test(e.exePath));
        return null != i && (this.maybeTrackBlock(e, "pattern_match", i.source), !0);
    }
    maybeTrackApplicationLookupFallthrough(e, t, n) {
        let i = e.id;
        U.has(i) ||
            (U.add(i),
            c.default.track(g.HAw.GAME_APPLICATION_LOOKUP_FALLTHROUGH, {
                application_id: i,
                application_name: e.name ?? null,
                match_type: t,
                matched_game_id: n?.id ?? null,
                matched_game_name: n?.name ?? null,
            }));
    }
    maybeTrackBlock(e, t, n) {
        let i = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            r = b.get(i),
            s = Date.now();
        (null == r || s - r >= k) &&
            (b.set(i, s),
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
            n = null != e.name && null != O[e.name];
        return d.tz.getSetting() && !i && !(t || n);
    }
    markGameReported(e) {
        (O[e] = !0), s.w.set(I, O);
    }
}
let F = new V(a.h, {
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
        (i = void 0), (C = Date.now()), (y = !0);
    },
    GAMES_BLOCKLIST_FETCH: function () {
        L = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        L = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: i } = e;
        null != i && v !== i && ((v = i), (w = t.map((e) => e.toLowerCase())), (P = n.map((e) => RegExp(e, "i")))),
            (L = !1),
            (D = Date.now());
    },
});
