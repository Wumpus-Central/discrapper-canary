"use strict";
let i;
n.d(t, { A: () => Y }), n(321073);
var r = n(17928),
    a = n(506774),
    s = n(228366),
    l = n(155718),
    o = n(194862),
    d = n(223273),
    c = n(885386),
    u = n(395671),
    _ = n(174459),
    E = n(927813),
    A = n(403362),
    h = n(723702),
    I = n(935208),
    f = n(652215),
    p = n(705751);
let T = "GameStoreReportedGames",
    m = E.A.Millis.DAY,
    g = new o.A(),
    S = new Map(),
    N = new Map(),
    C = a.w.get(T) ?? Object.create(null),
    R = "",
    O = null,
    L = !1,
    y = null,
    D = !1,
    v = "",
    b = [],
    M = [],
    P = new Map(),
    U = E.A.Millis.HOUR,
    w = new Set(),
    G = new Set(),
    x = (0, h.isWindows)() ? "win32" : (0, h.isMac)() ? "darwin" : (0, h.isLinux)() ? "linux" : null,
    k = Object.freeze([]);
function F(e) {
    return null != e && e.length > 0 ? e : k;
}
function V(e) {
    let { executables: t, aliases: n, thirdPartySkus: i } = e;
    return { id: e.id, name: e.name, executables: F(t), aliases: F(n), thirdPartySkus: F(i) };
}
function B(e) {
    return e.split(/[/\\]/).pop();
}
function H(e, t) {
    let n = S.get(t);
    void 0 === n ? S.set(t, e) : Array.isArray(n) ? n.push(e) : S.set(t, [n, e]);
}
function j(e) {
    let t = e instanceof d.xg ? V(e) : e;
    for (let n of (g.set(e.id, t), H(t.id, t.name.toLowerCase()), e.aliases)) H(t.id, n.toLowerCase());
    if ((0, h.isDesktop)()) for (let n of e.executables) N.set(n.name, t.id);
}
class W extends r.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => V(new d.xg(e))) ?? [],
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
            (null != e.detectableGamesEtag && (R = e.detectableGamesEtag),
            null != e.blocklistEtag && (v = e.blocklistEtag),
            null != e.blocklistExecutables && (b = e.blocklistExecutables),
            null != e.blocklistPatterns && (M = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => j(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: R,
                  detectableGames: g.values(),
                  blocklistEtag: v,
                  blocklistExecutables: b,
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
        return g.values();
    }
    getDetectableGame(e) {
        return g.get(I.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = S.get(e.toLowerCase());
        return void 0 === t ? [] : Array.isArray(t) ? t : [t];
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
                        let t = e.exePath.split("/").filter(A.Vq).pop();
                        if (r.executables.some((e) => e.name === t)) return r;
                    }
                    n = r;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(A.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let i = e.exePath.split("/").filter(A.Vq).slice(-2).join("/"),
                r = this.getGameByExecutable(i);
            if (null != r) return r;
        }
        return null != n && null != e.name && this.trackNameMatchFallback(e.name, n, e.exePath), n;
    }
    getOfficialGame(e) {
        let t;
        return null == e ||
            null == (t = e.type === p.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === l.Mh.OFFICIAL)?.id)
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
        return O;
    }
    get hasAttemptedFetch() {
        return L;
    }
    get detectableGamesTtl() {
        return m;
    }
    canFetchDetectableGames() {
        return !0 !== i && (null == O || Date.now() >= O + m);
    }
    canFetchExecutableBlocklist() {
        return !D && (null == y || Date.now() >= y + m);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = N.get(e);
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase();
        if (null != e.id && null != x) {
            let n = this.getDetectableGame(e.id);
            if (null != n && n.executables.some((e) => e.os === x && t.endsWith(e.name.toLowerCase()))) return !1;
        }
        let n = b.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let i = M.find((t) => t.test(e.exePath));
        return null != i && (this.maybeTrackBlock(e, "pattern_match", i.source), !0);
    }
    getBlockReason(e) {
        if (null == e.exePath || "" === e.exePath) return null;
        let t = e.exePath.toLowerCase(),
            n = b.find((e) => t.includes(e));
        if (null != n) return { matchedExe: n, matchedPattern: null };
        let i = M.find((t) => t.test(e.exePath));
        return null != i ? { matchedExe: null, matchedPattern: i.source } : null;
    }
    maybeTrackApplicationLookupFallthrough(e, t, n) {
        let i = e.id;
        w.has(i) ||
            (w.add(i),
            _.default.track(f.HAw.GAME_APPLICATION_LOOKUP_FALLTHROUGH, {
                application_id: i,
                application_name: e.name ?? null,
                match_type: t,
                matched_game_id: n?.id ?? null,
                matched_game_name: n?.name ?? null,
            }));
    }
    trackNameMatchFallback(e, t, n) {
        let i = e.toLowerCase();
        if (G.has(i)) return;
        G.add(i);
        let r = null != n && "" !== n;
        _.default.track(f.HAw.GAME_NAME_MATCH_FALLBACK, {
            matched_name: e,
            matched_game_id: t.id,
            exe_name: r ? (B(n) ?? null) : null,
            had_exe_path: r,
        });
    }
    maybeTrackBlock(e, t, n) {
        let i = B(e.exePath) ?? "unknown",
            r = P.get(i),
            a = Date.now();
        (null == r || a - r >= U) &&
            (P.set(i, a),
            _.default.track(f.HAw.GAME_BLOCKLIST_TRIGGERED, {
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
        return c.tz.getSetting() && !i && !(t || n);
    }
    markGameReported(e) {
        (C[e] = !0), a.w.set(T, C);
    }
}
let Y = new W(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { detectableApplications: t } = e;
        for (let e of (g.clear(), S.clear(), N.clear(), t)) j(e);
    },
    GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    GAMES_DATABASE_FETCH_FAIL: function () {
        (i = !1), (L = !0);
    },
    GAMES_DATABASE_UPDATE: function (e) {
        let { games: t, etag: n } = e;
        for (let e of (null != n && R !== n && (g.clear(), S.clear(), N.clear(), (R = n)), t))
            j(
                (function (e) {
                    let { executables: t, aliases: n, third_party_skus: i } = e;
                    return {
                        id: e.id,
                        name: e.name,
                        executables: F(t?.map(u.lg)),
                        aliases: F(n),
                        thirdPartySkus: F(i),
                    };
                })(e),
            );
        (i = void 0), (O = Date.now()), (L = !0);
    },
    GAMES_BLOCKLIST_FETCH: function () {
        D = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        D = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: i } = e;
        null != i && v !== i && ((v = i), (b = t.map((e) => e.toLowerCase())), (M = n.map((e) => RegExp(e, "i")))),
            (D = !1),
            (y = Date.now());
    },
});
