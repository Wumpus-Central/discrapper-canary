"use strict";
let r;
n.d(t, { A: () => z });
var i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(155718),
    l = n(194862),
    u = n(690511),
    c = n(223273),
    d = n(253932),
    _ = n(611010),
    f = n(954571),
    p = n(927813),
    h = n(723702),
    m = n(661191),
    g = n(652215),
    E = n(705751);
let A = "GameStoreReportedGames",
    I = 0x80000000,
    T = p.A.Millis.DAY,
    y = new l.A(),
    S = {},
    v = {},
    C = a.w.get(A) ?? {},
    b = "",
    N = null,
    R = !1,
    O = null,
    D = !1,
    L = "",
    w = [],
    x = [],
    P = new Map(),
    M = p.A.Millis.HOUR;
function k(e) {
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
    };
}
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
    };
}
function G(e) {
    let t = e instanceof c.Ay ? U(e) : e;
    for (let n of (y.set(e.id, t), (S[e.name.toLowerCase()] = t), e.aliases)) S[n.toLowerCase()] = t;
    if ((0, h.isDesktop)()) for (let n of e.executables) v[n.name] = t;
}
function V(e) {
    let { detectableApplications: t } = e;
    for (let e of (y.clear(), (S = {}), (v = {}), t)) G(e);
}
function F() {
    r = !0;
}
function B() {
    (r = !1), (R = !0);
}
function j(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && b !== n && (y.clear(), (S = {}), (v = {}), (b = n)), t)) G(k(e));
    (r = void 0), (N = Date.now()), (R = !0);
}
function H() {
    D = !0;
}
function Y() {
    D = !1;
}
function W(e) {
    let { executables: t, patterns: n, etag: r } = e;
    null != r && L !== r && ((L = r), (w = t.map((e) => e.toLowerCase())), (x = n.map((e) => RegExp(e, "i")))),
        (D = !1),
        (O = Date.now());
}
class K extends i.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => U(new c.Ay(e))) ?? [],
                  }
                : { detectableGamesEtag: "", detectableGames: [] },
        (e) => ((0, h.isDesktop)() ? e : { detectableGamesEtag: "", detectableGames: [] }),
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
            (null != e.detectableGamesEtag && (b = e.detectableGamesEtag),
            null != e.blocklistEtag && (L = e.blocklistEtag),
            null != e.blocklistExecutables && (w = e.blocklistExecutables),
            null != e.blocklistPatterns && (x = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => G(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: b,
                  detectableGames: y.values(),
                  blocklistEtag: L,
                  blocklistExecutables: w,
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
        return y.get(m.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(S, t) ? S[t] : null;
    }
    getOfficialGame(e) {
        let t;
        return null == e ||
            null == (t = e.type === E.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === o.Mh.OFFICIAL)?.id)
            ? null
            : this.getDetectableGame(t);
    }
    getGameByApplication(e) {
        let t = this.getDetectableGame(e.id);
        if (null != t) return t;
        if (null != e.linkedGames) {
            for (let n of e.linkedGames) if (null != (t = this.getDetectableGame(n.id))) return t;
        }
        return this.getGameByName(e.name);
    }
    isGameInDatabase(e) {
        return (
            null != this.getGameByName(e.name) ||
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & I) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return b;
    }
    get blocklistEtag() {
        return L;
    }
    get lastFetched() {
        return N;
    }
    get hasAttemptedFetch() {
        return R;
    }
    get detectableGamesTtl() {
        return T;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == N || Date.now() >= N + T);
    }
    canFetchExecutableBlocklist() {
        return (
            !!u.n.getConfig({ location: "GameStore.shouldBlock" }).enabled && !D && (null == O || Date.now() >= O + T)
        );
    }
    getGameByExecutable(e) {
        return v[e];
    }
    getGameByGameData(e) {
        let t;
        if (null == e.exePath) return null;
        let n = e.exePath.split("/").pop(),
            r = e.exePath.split("/").slice(-2).join("/");
        if (null != e.name) {
            if (null != (t = this.getGameByName(e.name)) && null != t.executables) {
                let e = t.executables.map((e) => e.name);
                if (e.includes(n) || e.includes(r)) return t;
            } else if (null != t) return null;
        }
        return this.getGameByExecutable(n) ?? this.getGameByExecutable(r) ?? t;
    }
    shouldBlock(e) {
        if (!u.n.getConfig({ location: "GameStore.shouldBlock" }).enabled || null == e.exePath || "" === e.exePath)
            return !1;
        let t = e.exePath.toLowerCase(),
            n = w.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = x.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        let r = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            i = P.get(r),
            a = Date.now();
        (null == i || a - i >= M) &&
            (P.set(r, a),
            f.default.track(g.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: r,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.getGameByName(e.name),
            n = null != e.name && null != C[e.name];
        return d.tz.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (C[e] = !0), a.w.set(A, C);
    }
}
let z = new K(s.h, {
    OVERLAY_INITIALIZE: V,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_FETCH_FAIL: B,
    GAMES_DATABASE_UPDATE: j,
    GAMES_BLOCKLIST_FETCH: H,
    GAMES_BLOCKLIST_FETCH_FAIL: Y,
    GAMES_BLOCKLIST_UPDATE: W,
});
