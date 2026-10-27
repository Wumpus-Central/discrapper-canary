let i;
(n.d(t, { A: () => H }), n(321073));
var r = n(17928),
    a = n(73153),
    s = n(155718),
    l = n(194862),
    o = n(223273),
    d = n(395671),
    c = n(174459),
    u = n(927813),
    _ = n(403362),
    E = n(723702),
    A = n(935208),
    h = n(652215),
    f = n(705751);
let I = u.A.Millis.DAY,
    p = new l.A(),
    T = new Map(),
    m = new Map(),
    g = "",
    S = null,
    N = !1,
    C = null,
    O = !1,
    R = "",
    L = [],
    y = [],
    D = new Map(),
    v = u.A.Millis.HOUR,
    b = new Set(),
    P = new Set(),
    M = (0, E.isWindows)() ? "win32" : (0, E.isMac)() ? "darwin" : (0, E.isLinux)() ? "linux" : null,
    U = Object.freeze([]);
function w(e) {
    return null != e && e.length > 0 ? e : U;
}
function G(e) {
    let { executables: t, aliases: n, thirdPartySkus: i } = e;
    return { id: e.id, name: e.name, executables: w(t), aliases: w(n), thirdPartySkus: w(i) };
}
function x(e) {
    return e.split(/[/\\]/).pop();
}
function k(e) {
    return e.trim().toLowerCase();
}
function F(e, t) {
    let n = T.get(t);
    void 0 === n ? T.set(t, e) : Array.isArray(n) ? n.push(e) : T.set(t, [n, e]);
}
function B(e) {
    let t = e instanceof o.xg ? G(e) : e;
    for (let n of (p.set(e.id, t), F(t.id, k(t.name)), e.aliases)) F(t.id, k(n));
    if ((0, E.isDesktop)()) for (let n of e.executables) m.set(n.name, t.id);
}
class V extends r.Ay.PersistedStore {
    static displayName = "GameStore";
    static persistKey = "GameStore";
    static migrations = [
        (e) =>
            null != e
                ? {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: e.detectableGames?.map((e) => G(new o.xg(e))) ?? [],
                  }
                : { detectableGamesEtag: "", detectableGames: [] },
        (e) => ((0, E.isDesktop)() ? e : { detectableGamesEtag: "", detectableGames: [] }),
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
            (null != e.detectableGamesEtag && (g = e.detectableGamesEtag),
            null != e.blocklistEtag && (R = e.blocklistEtag),
            null != e.blocklistExecutables && (L = e.blocklistExecutables),
            null != e.blocklistPatterns && (y = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            e.detectableGames?.forEach((e) => B(e)));
    }
    getState() {
        return (0, E.isDesktop)()
            ? {
                  detectableGamesEtag: g,
                  detectableGames: p.values(),
                  blocklistEtag: R,
                  blocklistExecutables: L,
                  blocklistPatterns: y.map((e) => e.source),
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
        return p.values();
    }
    getDetectableGame(e) {
        return p.get(A.default.cast(e));
    }
    searchGamesByName(e) {
        if (null == e) return [];
        let t = T.get(k(e));
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
                        let t = e.exePath.split("/").filter(_.Vq).pop();
                        if (r.executables.some((e) => e.name === t)) return r;
                    }
                    n = r;
                }
            }
        if (null != e.exePath) {
            let t = e.exePath.split("/").filter(_.Vq).pop(),
                n = this.getGameByExecutable(t);
            if (null != n) return n;
            let i = e.exePath.split("/").filter(_.Vq).slice(-2).join("/"),
                r = this.getGameByExecutable(i);
            if (null != r) return r;
        }
        return (null != n && null != e.name && this.trackNameMatchFallback(e.name, n, e.exePath), n);
    }
    getOfficialGame(e) {
        let t;
        return null == e ||
            null == (t = e.type === f.S7.GAME ? e.id : e.linkedGames?.find((e) => e.type === s.Mh.OFFICIAL)?.id)
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
                    ((i = "linked_game"), (t = e));
                    break;
                }
            }
        if (null == t) {
            let n = this.searchGamesByName(e.name)
                .map((e) => this.getDetectableGame(e))
                .reverse()[0];
            null != n && ((i = "name"), (t = n));
        }
        return (this.maybeTrackApplicationLookupFallthrough(e, i, t), t);
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
        return g;
    }
    get blocklistEtag() {
        return R;
    }
    get lastFetched() {
        return S;
    }
    get hasAttemptedFetch() {
        return N;
    }
    get detectableGamesTtl() {
        return I;
    }
    canFetchDetectableGames() {
        return !0 !== i && (null == S || Date.now() >= S + I);
    }
    canFetchExecutableBlocklist() {
        return !O && (null == C || Date.now() >= C + I);
    }
    getGameByExecutable(e) {
        if (null == e) return;
        let t = m.get(e);
        return this.getDetectableGame(t);
    }
    shouldBlock(e) {
        if (null == e.exePath || "" === e.exePath) return !1;
        let t = e.exePath.toLowerCase();
        if (null != e.id && null != M) {
            let n = this.getDetectableGame(e.id);
            if (null != n && n.executables.some((e) => e.os === M && t.endsWith(e.name.toLowerCase()))) return !1;
        }
        let n = L.find((e) => t.includes(e));
        if (null != n) return (this.maybeTrackBlock(e, "explicit_list", n), !0);
        let i = y.find((t) => t.test(e.exePath));
        return null != i && (this.maybeTrackBlock(e, "pattern_match", i.source), !0);
    }
    getBlockReason(e) {
        if (null == e.exePath || "" === e.exePath) return null;
        let t = e.exePath.toLowerCase(),
            n = L.find((e) => t.includes(e));
        if (null != n) return { matchedExe: n, matchedPattern: null };
        let i = y.find((t) => t.test(e.exePath));
        return null != i ? { matchedExe: null, matchedPattern: i.source } : null;
    }
    maybeTrackApplicationLookupFallthrough(e, t, n) {
        let i = e.id;
        b.has(i) ||
            (b.add(i),
            c.default.track(h.HAw.GAME_APPLICATION_LOOKUP_FALLTHROUGH, {
                application_id: i,
                application_name: e.name ?? null,
                match_type: t,
                matched_game_id: n?.id ?? null,
                matched_game_name: n?.name ?? null,
            }));
    }
    trackNameMatchFallback(e, t, n) {
        let i = e.toLowerCase();
        if (P.has(i)) return;
        P.add(i);
        let r = null != n && "" !== n;
        c.default.track(h.HAw.GAME_NAME_MATCH_FALLBACK, {
            matched_name: e,
            matched_game_id: t.id,
            exe_name: r ? (x(n) ?? null) : null,
            had_exe_path: r,
        });
    }
    maybeTrackBlock(e, t, n) {
        let i = x(e.exePath) ?? "unknown",
            r = D.get(i),
            a = Date.now();
        (null == r || a - r >= v) &&
            (D.set(i, a),
            c.default.track(h.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: e.gameName ?? e.origGameName,
                executable_name: i,
            }));
    }
}
let H = new V(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { detectableApplications: t } = e;
        for (let e of (p.clear(), T.clear(), m.clear(), t)) B(e);
    },
    GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    GAMES_DATABASE_FETCH_FAIL: function () {
        ((i = !1), (N = !0));
    },
    GAMES_DATABASE_UPDATE: function (e) {
        let { games: t, etag: n } = e;
        for (let e of (null != n && g !== n && (p.clear(), T.clear(), m.clear(), (g = n)), t))
            B(
                (function (e) {
                    let { executables: t, aliases: n, third_party_skus: i } = e;
                    return {
                        id: e.id,
                        name: e.name,
                        executables: w(t?.map(d.lg)),
                        aliases: w(n),
                        thirdPartySkus: w(i),
                    };
                })(e),
            );
        ((i = void 0), (S = Date.now()), (N = !0));
    },
    GAMES_BLOCKLIST_FETCH: function () {
        O = !0;
    },
    GAMES_BLOCKLIST_FETCH_FAIL: function () {
        O = !1;
    },
    GAMES_BLOCKLIST_UPDATE: function (e) {
        let { executables: t, patterns: n, etag: i } = e;
        (null != i && R !== i && ((R = i), (L = t.map((e) => e.toLowerCase())), (y = n.map((e) => RegExp(e, "i")))),
            (O = !1),
            (C = Date.now()));
    },
});
