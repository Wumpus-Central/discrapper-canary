"use strict";
let r;
n.d(t, { A: () => V }), n(321073);
var i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(155718),
    l = n(194862),
    u = n(223273),
    d = n(253932),
    c = n(611010),
    _ = n(954571),
    f = n(927813),
    E = n(403362),
    h = n(723702),
    p = n(661191),
    m = n(652215),
    g = n(705751);
let A = "GameStoreReportedGames",
    I = f.A.Millis.DAY,
    T = new l.A(),
    S = Object.create(null),
    y = Object.create(null),
    N = s.w.get(A) ?? Object.create(null),
    O = "",
    R = null,
    v = !1,
    C = null,
    b = !1,
    D = "",
    L = [],
    w = [],
    M = new Map(),
    P = f.A.Millis.HOUR;
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
function x(e) {
    let t = e instanceof u.xg ? U(e) : e;
    for (let n of (T.set(e.id, t), k(t.id, t.name.toLowerCase()), e.aliases)) k(t.id, n.toLowerCase());
    if ((0, h.isDesktop)()) for (let n of e.executables) y[n.name] = t.id;
}
class G extends i.Ay.PersistedStore {
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
            (null != e.detectableGamesEtag && (O = e.detectableGamesEtag),
            null != e.blocklistEtag && (D = e.blocklistEtag),
            null != e.blocklistExecutables && (L = e.blocklistExecutables),
            null != e.blocklistPatterns && (w = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => x(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: O,
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
        return T.get(p.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(S, t) ? S[t] : [];
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
                        let t = e.exePath.split("/").filter(E.Vq).pop();
                        if (i.executables.some((e) => e.name === t)) return i;
                    }
                    n = i;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(E.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let r = e.exePath.split("/").filter(E.Vq).slice(-2).join("/"),
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
            null != this.findGame(e) ||
            (void 0 !== e.nativeProcessObserverId && (0x80000000 & e.nativeProcessObserverId) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return O;
    }
    get blocklistEtag() {
        return D;
    }
    get lastFetched() {
        return R;
    }
    get hasAttemptedFetch() {
        return v;
    }
    get detectableGamesTtl() {
        return I;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == R || Date.now() >= R + I);
    }
    canFetchExecutableBlocklist() {
        return !b && (null == C || Date.now() >= C + I);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = y[e];
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase(),
            n = L.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = w.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        let r = e.exePath.split(/[/\\]/).pop() ?? "unknown",
            i = M.get(r),
            s = Date.now();
        (null == i || s - i >= P) &&
            (M.set(r, s),
            _.default.track(m.HAw.GAME_BLOCKLIST_TRIGGERED, {
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
        return d.tz.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (N[e] = !0), s.w.set(A, N);
    }
}
let V = new G(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { detectableApplications: t } = e;
        for (let e of (T.clear(), (S = Object.create(null)), (y = Object.create(null)), t)) x(e);
    },
    GAMES_DATABASE_FETCH: function () {
        r = !0;
    },
    GAMES_DATABASE_FETCH_FAIL: function () {
        (r = !1), (v = !0);
    },
    GAMES_DATABASE_UPDATE: function (e) {
        let { games: t, etag: n } = e;
        for (let e of (null != n &&
            O !== n &&
            (T.clear(), (S = Object.create(null)), (y = Object.create(null)), (O = n)),
        t))
            x({
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(c.lg),
                overlay: e.overlay ?? !1,
                overlayWarn: e.overlay_warn ?? !1,
                overlayCompatibilityHook: e.overlay_compatibility_hook ?? !1,
                hook: e.hook ?? !0,
                aliases: e.aliases ?? [],
                supportsOutOfProcessOverlay: c.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
                themes: e.themes ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
                cover_image_hash: e.cover_image_hash ?? void 0,
                content_classification: e.content_classification ?? void 0,
            });
        (r = void 0), (R = Date.now()), (v = !0);
    },
    GAMES_BLOCKLIST_FETCH: function () {
        b = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        b = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: r } = e;
        null != r && D !== r && ((D = r), (L = t.map((e) => e.toLowerCase())), (w = n.map((e) => RegExp(e, "i")))),
            (b = !1),
            (C = Date.now());
    },
});
