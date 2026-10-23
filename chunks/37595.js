n.d(t, { V: () => r, g: () => s });
var i = n(952818),
    l = n(233741);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = t.getTargetPID(),
        r = n > 0 ? e.getGameOrTransformedSubgameForPID(n) : null;
    if (null != r) return r;
    let s = e.getVisibleGame();
    return null != s ? e.getGameOrTransformedSubgameForPID(s.pid) : null;
}
let s = [i.Ay, l.A];
