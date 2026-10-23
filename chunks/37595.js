n.d(t, { V: () => a, g: () => r });
var l = n(952818),
    i = n(233741);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
        n = t.getTargetPID(),
        a = n > 0 ? e.getGameOrTransformedSubgameForPID(n) : null;
    if (null != a) return a;
    let r = e.getVisibleGame();
    return null != r ? e.getGameOrTransformedSubgameForPID(r.pid) : null;
}
let r = [l.Ay, i.A];
