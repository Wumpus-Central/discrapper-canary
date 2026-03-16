"use strict";
let r;
n.d(t, { A: () => q }), n(321073);
var i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(155718),
    l = n(194862),
    u = n(690511),
    c = n(223273),
    d = n(253932),
    _ = n(611010),
    f = n(954571),
    p = n(927813),
    h = n(403362),
    m = n(723702),
    E = n(661191),
    g = n(652215),
    A = n(705751);
let I = "GameStoreReportedGames",
    T = 0x80000000,
    S = p.A.Millis.DAY,
    y = new l.A(),
    v = Object.create(null),
    N = Object.create(null),
    C = s.w.get(I) ?? Object.create(null),
    R = "",
    O = null,
    b = !1,
    D = null,
    L = !1,
    w = "",
    M = [],
    x = [],
    P = new Map(),
    k = p.A.Millis.HOUR;
function U(e) {
    return {
        id: e.id,
        name: e.name,
        executables: (e.executables ?? []).map(_.lg),
        overlay: e.overlay ?? !1,
        overlayWarn: e.overlay_warn ?? !1,
        overlayCompatibilityHook: e.overlay_compatibility_hook ?? !1,
        hook: e.hook ?? !0,
        aliases: e.aliases ?? [],
        supportsOutOfProcessOverlay: _.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: e.themes ?? [],
        icon: e.icon_hash ?? void 0,
        thirdPartySkus: e.third_party_skus ?? [],
        cover_image_hash: e.cover_image_hash ?? void 0,
        content_classification: e.content_classification ?? void 0,
    };
}
function G(e) {
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
function F(e, t) {
    null == v[t] && (v[t] = []), v[t].push(e);
}
function V(e) {
    let t = e instanceof c.xg ? G(e) : e;
    for (let n of (y.set(e.id, t), F(t.id, t.name.toLowerCase()), e.aliases)) F(t.id, n.toLowerCase());
    if ((0, m.isDesktop)()) for (let n of e.executables) N[n.name] = t.id;
}
function B(e) {
    let { detectableApplications: t } = e;
    for (let e of (y.clear(), (v = Object.create(null)), (N = Object.create(null)), t)) V(e);
}
function H() {
    r = !0;
}
function j() {
    (r = !1), (b = !0);
}
function Y(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && R !== n && (y.clear(), (v = Object.create(null)), (N = Object.create(null)), (R = n)),
    t))
        V(U(e));
    (r = void 0), (O = Date.now()), (b = !0);
}
function W() {
    L = !0;
}
function K() {
    L = !1;
}
function $(e) {
    let { executables: t, patterns: n, etag: r } = e;
    null != r && w !== r && ((w = r), (M = t.map((e) => e.toLowerCase())), (x = n.map((e) => RegExp(e, "i")))),
        (L = !1),
        (D = Date.now());
}
class z extends i.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => G(new c.xg(e))) ?? [],
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
            null != e.blocklistEtag && (w = e.blocklistEtag),
            null != e.blocklistExecutables && (M = e.blocklistExecutables),
            null != e.blocklistPatterns && (x = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => V(e)));
    }
    getState() {
        return (0, m.isDesktop)()
            ? {
                  detectableGamesEtag: R,
                  detectableGames: y.values(),
                  blocklistEtag: w,
                  blocklistExecutables: M,
                  blocklistPatterns: x.map((e) => e.source),
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
        return y.values();
    }
    getDetectableGame(e) {
        return y.get(E.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(v, t) ? v[t] : [];
    }
    findGame(e, t) {
        let n,
            r = this.getDetectableGame(e.id);
        if (null != r) return r;
        if (null != e.name)
            for (let r of this.searchGamesByName(e.name)) {
                let i = this.getDetectableGame(r);
                if (null != i) {
                    if (null != t) {
                        t(i);
                        continue;
                    }
                    if (null != e.exePath && null != i.executables) {
                        let t = e.exePath.split("/").filter(h.Vq).pop();
                        if (i.executables.some((e) => e.name === t)) return i;
                    }
                    n = i;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(h.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let r = e.exePath.split("/").filter(h.Vq).slice(-2).join("/"),
                i = this.getGameByExecutable(r);
            if (null != i) return i;
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
            null != this.findGame(e) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & T) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return R;
    }
    get blocklistEtag() {
        return w;
    }
    get lastFetched() {
        return O;
    }
    get hasAttemptedFetch() {
        return b;
    }
    get detectableGamesTtl() {
        return S;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == O || Date.now() >= O + S);
    }
    canFetchExecutableBlocklist() {
        return (
            !!u.n.getConfig({ location: "GameStore.shouldBlock" }).enabled && !L && (null == D || Date.now() >= D + S)
        );
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = N[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (!u.n.getConfig({ location: "GameStore.shouldBlock" }).enabled || null == e.exePath || "" === e.exePath)
            return !1;
        let t = e.exePath.toLowerCase(),
            n = M.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = x.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        let r = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            i = P.get(r),
            s = Date.now();
        (null == i || s - i >= k) &&
            (P.set(r, s),
            f.default.track(g.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: r,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.findGame(e),
            n = null != e.name && null != C[e.name];
        return d.tz.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (C[e] = !0), s.w.set(I, C);
    }
}
let q = new z(a.h, {
    OVERLAY_INITIALIZE: B,
    GAMES_DATABASE_FETCH: H,
    GAMES_DATABASE_FETCH_FAIL: j,
    GAMES_DATABASE_UPDATE: Y,
    GAMES_BLOCKLIST_FETCH: W,
    GAMES_BLOCKLIST_FETCH_FAIL: K,
    GAMES_BLOCKLIST_UPDATE: $,
});
