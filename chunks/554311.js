n.d(t, {
    Un: () => p,
    Xm: () => v,
    qo: () => h,
    tX: () => _,
}),
    n(65821),
    n(896048),
    n(321073);
var l = n(311907),
    r = n(15285),
    a = n(760751),
    i = n(242286),
    u = n(661191),
    o = n(9302),
    d = n(833551),
    s = n(243612);
let c = new u.SnowflakeSequence(),
    m = {};

function g(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.default];
    for (let n of Object.values(t.getClosedTrackedGamesHistory()))
        if (n.applicationId === e.id || n.gameName === e.name) return n;
    return null;
}

function f(e) {
    var t, n, l, a, i;
    let [u, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Ay, d.default],
        s = g(e, [o]),
        c = null != e.name && null != (t = u.getGameForName(e.name)) ? t : void 0;
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (n = null != (l = null == c ? void 0 : c.pid) ? l : null == s ? void 0 : s.pid) ? n : void 0,
        fullscreenType:
            null !=
            (a = null != (i = null == c ? void 0 : c.fullscreenType) ? i : null == s ? void 0 : s.fullscreenType)
                ? a
                : void 0,
        trackedGame: null != s ? s : void 0,
        persistentGame: e,
        runningGame: c,
    };
}

function v(e) {
    var t, n, l;
    let [a, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Ay, d.default],
        u = g(e, [i]);
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == u ? void 0 : u.pid) ? t : void 0,
        fullscreenType: null != (n = null == u ? void 0 : u.fullscreenType) ? n : void 0,
        trackedGame: null != u ? u : void 0,
        runningGame: null != e.name && null != (l = a.getGameForName(e.name)) ? l : void 0,
    };
}

function y(e) {
    var t, n;
    let [l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A];
    if (null != e.gameId) {
        let t = l.getDetectableGame(e.gameId);
        if (null != t) return t;
    }
    let r = null != (t = e.runningGame) ? t : e.persistentGame;
    if (null != r) {
        let e = l.getGameByGameData(r);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let t = l.getGameByName(e.gameName);
        if (null != t) return t;
    }
    if (null == e.gameName) return null;
    let i =
        null != (n = e.gameId)
            ? n
            : (function (e) {
                  if (null != m[e]) return m[e];
                  let t = Date.now(),
                      n = null;
                  try {
                      c.willOverflowNext() && c.reset(), (n = u.default.fromTimestampWithSequence(t, c));
                  } catch (e) {
                      c.reset(), (n = u.default.fromTimestampWithSequence(t, c));
                  }
                  if (null == n) throw Error("Failed to generate snowflake id");
                  return (m[e] = n), n;
              })(e.gameName);
    return {
        id: u.default.cast(i),
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

function p() {
    return (0, l.yK)([a.A, r.Ay, d.default], () => {
        let e = a.A.games,
            t = e.reduce((e, t) => ((e[t.id] = t), e), {});
        return [
            ...e,
            ...r.Ay.getGamesSeen(!1).reduce((e, n) => {
                let l = n.id;
                if (null != l && null != t[l]) return e;
                let i = y(f(n, [r.Ay, d.default]), [a.A]);
                if (null != i) {
                    if (null != t[i.id]) return e;
                    e.push(i);
                }
                return e;
            }, []),
        ];
    }, []);
}

function h(e) {
    return (0, l.bG)([a.A], () => (null == e ? null : y(e, [a.A])), [e]);
}

function _() {
    let e = (0, s.b4)(),
        t = (0, l.bG)([i.default], () => i.default.getFocusedPID()),
        n = null != t ? t : (0, o.getPID)(),
        a = (0, l.bG)([d.default], () => d.default.getTrackedGameByPid(n), [n]),
        u = (0, l.bG)([r.Ay], () => r.Ay.getVisibleGame()),
        c = (0, l.bG)([r.Ay], () => r.Ay.getGamesSeen(!1)[0]);
    return (0, l.bG)([r.Ay, d.default], () => {
        switch (!0) {
            case null != a:
                return (function (e) {
                    var t, n, l;
                    let [a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Ay];
                    return {
                        gameId: null != (t = e.applicationId) ? t : void 0,
                        gameName: null != (n = e.gameName) ? n : void 0,
                        gamePid: e.pid,
                        fullscreenType: e.fullscreenType,
                        trackedGame: e,
                        runningGame: null != e.gameName && null != (l = a.getGameForName(e.gameName)) ? l : void 0,
                    };
                })(a, [r.Ay]);
            case null != e:
                return (function (e) {
                    var t, n;
                    let [l, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Ay, d.default],
                        i = l.getGameForName(e.name),
                        u = null == i ? void 0 : i.pid;
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: null == i ? void 0 : i.pid,
                        fullscreenType: null != (t = null == i ? void 0 : i.fullscreenType) ? t : void 0,
                        runningGame: null != i ? i : void 0,
                        trackedGame: null != u && null != (n = a.getTrackedGameByPid(u)) ? n : void 0,
                    };
                })(e, [r.Ay, d.default]);
            case null != u:
                return (function (e) {
                    var t;
                    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.default];
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: e.pid,
                        fullscreenType: e.fullscreenType,
                        trackedGame: null != (t = g(e, [n])) ? t : void 0,
                        runningGame: e,
                    };
                })(u, [d.default]);
            case null != c:
                return f(c, [r.Ay, d.default]);
            default:
                return null;
        }
    }, [e, a, u, c]);
}
