"use strict";
let r;
n.d(t, { A: () => z }), n(321073);
var i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(155718),
    l = n(194862),
    u = n(223273),
    c = n(253932),
    d = n(611010),
    _ = n(954571),
    f = n(927813),
    p = n(403362),
    h = n(723702),
    m = n(661191),
    E = n(652215),
    g = n(705751);
let A = "GameStoreReportedGames",
    I = 0x80000000,
    T = f.A.Millis.DAY,
    S = new l.A(),
    y = Object.create(null),
    v = Object.create(null),
    N = s.w.get(A) ?? Object.create(null),
    C = "",
    R = null,
    O = !1,
    b = null,
    D = !1,
    L = "",
    w = [],
    M = [],
    x = new Map(),
    P = f.A.Millis.HOUR;
function k(e) {
    return {
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
        content_classification: e.content_classification ?? void 0,
    };
}
function G(e, t) {
    null == y[t] && (y[t] = []), y[t].push(e);
}
function F(e) {
    let t = e instanceof u.xg ? U(e) : e;
    for (let n of (S.set(e.id, t), G(t.id, t.name.toLowerCase()), e.aliases)) G(t.id, n.toLowerCase());
    if ((0, h.isDesktop)()) for (let n of e.executables) v[n.name] = t.id;
}
function V(e) {
    let { detectableApplications: t } = e;
    for (let e of (S.clear(), (y = Object.create(null)), (v = Object.create(null)), t)) F(e);
}
function B() {
    r = !0;
}
function H() {
    (r = !1), (O = !0);
}
function j(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && C !== n && (S.clear(), (y = Object.create(null)), (v = Object.create(null)), (C = n)),
    t))
        F(k(e));
    (r = void 0), (R = Date.now()), (O = !0);
}
function Y() {
    D = !0;
}
function W() {
    D = !1;
}
function K(e) {
    let { executables: t, patterns: n, etag: r } = e;
    null != r && L !== r && ((L = r), (w = t.map((e) => e.toLowerCase())), (M = n.map((e) => RegExp(e, "i")))),
        (D = !1),
        (b = Date.now());
}
class $ extends i.Ay.PersistedStore {
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
            (null != e.detectableGamesEtag && (C = e.detectableGamesEtag),
            null != e.blocklistEtag && (L = e.blocklistEtag),
            null != e.blocklistExecutables && (w = e.blocklistExecutables),
            null != e.blocklistPatterns && (M = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => F(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: C,
                  detectableGames: S.values(),
                  blocklistEtag: L,
                  blocklistExecutables: w,
                  blocklistPatterns: M.map((e) => e.source),
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
        return S.values();
    }
    getDetectableGame(e) {
        return S.get(m.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(y, t) ? y[t] : [];
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
                        let t = e.exePath.split("/").filter(p.Vq).pop();
                        if (i.executables.some((e) => e.name === t)) return i;
                    }
                    n = i;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(p.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let r = e.exePath.split("/").filter(p.Vq).slice(-2).join("/"),
                i = this.getGameByExecutable(r);
            if (null != i) return i;
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
            null != this.findGame(e) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & I) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return C;
    }
    get blocklistEtag() {
        return L;
    }
    get lastFetched() {
        return R;
    }
    get hasAttemptedFetch() {
        return O;
    }
    get detectableGamesTtl() {
        return T;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == R || Date.now() >= R + T);
    }
    canFetchExecutableBlocklist() {
        return !D && (null == b || Date.now() >= b + T);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = v[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase(),
            n = w.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = M.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        let r = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            i = x.get(r),
            s = Date.now();
        (null == i || s - i >= P) &&
            (x.set(r, s),
            _.default.track(E.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: r,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.findGame(e),
            n = null != e.name && null != N[e.name];
        return c.tz.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (N[e] = !0), s.w.set(A, N);
    }
}
let z = new $(a.h, {
    OVERLAY_INITIALIZE: V,
    GAMES_DATABASE_FETCH: B,
    GAMES_DATABASE_FETCH_FAIL: H,
    GAMES_DATABASE_UPDATE: j,
    GAMES_BLOCKLIST_FETCH: Y,
    GAMES_BLOCKLIST_FETCH_FAIL: W,
    GAMES_BLOCKLIST_UPDATE: K,
});
