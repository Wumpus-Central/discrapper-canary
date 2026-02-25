n.d(t, { Un: () => v, Xm: () => p, qo: () => _, tX: () => y }), n(321073);
var a = n(311907),
    l = n(15285),
    i = n(760751),
    r = n(242286),
    s = n(661191),
    u = n(9302),
    o = n(833551),
    d = n(243612);
let c = new s.SnowflakeSequence(),
    m = {};
function g(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default];
    for (let n of Object.values(t.getClosedTrackedGamesHistory()))
        if (n.applicationId === e.id || n.gameName === e.name) return n;
    return null;
}
function f(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay, o.default],
        a = g(e, [n]),
        i = null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0;
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: i?.pid ?? a?.pid ?? void 0,
        fullscreenType: i?.fullscreenType ?? a?.fullscreenType ?? void 0,
        trackedGame: a ?? void 0,
        persistentGame: e,
        runningGame: i,
    };
}
function p(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay, o.default],
        a = g(e, [n]);
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: a?.pid ?? void 0,
        fullscreenType: a?.fullscreenType ?? void 0,
        trackedGame: a ?? void 0,
        runningGame: null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0,
    };
}
function h(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A];
    if (null != e.gameId) {
        let n = t.getDetectableGame(e.gameId);
        if (null != n) return n;
    }
    let n = e.runningGame ?? e.persistentGame;
    if (null != n) {
        let e = t.findGame(n);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let n = t.searchGamesByName(e.gameName);
        if (1 === n.length) return t.getDetectableGame(n[0]) ?? null;
    }
    if (null == e.gameName) return null;
    let a =
        e.gameId ??
        (function (e) {
            if (null != m[e]) return m[e];
            let t = Date.now(),
                n = null;
            try {
                c.willOverflowNext() && c.reset(), (n = s.default.fromTimestampWithSequence(t, c));
            } catch {
                c.reset(), (n = s.default.fromTimestampWithSequence(t, c));
            }
            if (null == n) throw Error("Failed to generate snowflake id");
            return (m[e] = n), n;
        })(e.gameName);
    return {
        id: s.default.cast(a),
        name: e.gameName,
        description: void 0,
        icon: void 0,
        icon_hash: void 0,
        cover_image_hash: void 0,
        aliases: [],
        executables: [],
        overlay: !1,
        overlayWarn: !1,
        overlayCompatibilityHook: !1,
        hook: !0,
        supportsOutOfProcessOverlay: !1,
        thirdPartySkus: [],
        themes: [],
        linkedApplications: void 0,
    };
}
function v() {
    return (0, a.yK)([i.A, l.Ay, o.default], () => {
        let e = i.A.games,
            t = e.reduce((e, t) => ((e[t.id] = t), e), {});
        return [
            ...e,
            ...l.Ay.getGamesSeen(!1).reduce((e, n) => {
                let a = n.id;
                if (null != a && null != t[a]) return e;
                let r = h(f(n, [l.Ay, o.default]), [i.A]);
                if (null != r) {
                    if (null != t[r.id]) return e;
                    e.push(r);
                }
                return e;
            }, []),
        ];
    }, []);
}
function _(e) {
    return (0, a.bG)([i.A], () => (null == e ? null : h(e, [i.A])), [e]);
}
function y() {
    let e = (0, d.b4)(),
        t = (0, a.bG)([r.default], () => r.default.getFocusedPID()) ?? (0, u.getPID)(),
        n = (0, a.bG)([o.default], () => o.default.getTrackedGameByPid(t), [t]),
        i = (0, a.bG)([l.Ay], () => l.Ay.getVisibleGame()),
        s = (0, a.bG)([l.Ay], () => l.Ay.getGamesSeen(!1)[0]);
    return (0, a.bG)([l.Ay, o.default], () => {
        switch (!0) {
            case null != n:
                return (function (e) {
                    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay];
                    return {
                        gameId: e.applicationId ?? void 0,
                        gameName: e.gameName ?? void 0,
                        gamePid: e.pid,
                        fullscreenType: e.fullscreenType,
                        trackedGame: e,
                        runningGame: null != e.gameName ? (t.getGameForName(e.gameName) ?? void 0) : void 0,
                    };
                })(n, [l.Ay]);
            case null != e:
                return (function (e) {
                    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay, o.default],
                        a = t.getGameForName(e.name),
                        i = a?.pid;
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: a?.pid,
                        fullscreenType: a?.fullscreenType ?? void 0,
                        runningGame: a ?? void 0,
                        trackedGame: null != i ? (n.getTrackedGameByPid(i) ?? void 0) : void 0,
                    };
                })(e, [l.Ay, o.default]);
            case null != i:
                return (function (e) {
                    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default];
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: e.pid,
                        fullscreenType: e.fullscreenType,
                        trackedGame: g(e, [t]) ?? void 0,
                        runningGame: e,
                    };
                })(i, [o.default]);
            case null != s:
                return f(s, [l.Ay, o.default]);
            default:
                return null;
        }
    }, [e, n, i, s]);
}
