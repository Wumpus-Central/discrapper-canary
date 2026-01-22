n.d(t, {
    A: () => f,
    b: () => d,
}),
    n(896048);
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(587895),
    o = n(429913),
    l = n(616356),
    c = n(15285);
function u(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function d() {
    let e = l.A.getStreamerActiveStreamMetadata(),
        t = c.Ay.getVisibleGame(),
        n = null != t ? c.Ay.getGameOrTransformedSubgameForPID(t.pid) : null,
        r = u(e, n),
        i = s.A.getApplication(r);
    return {
        runningGame: null != n ? n : void 0,
        runningGameApplication: null != i ? i : void 0,
    };
}
function f() {
    let e = (0, a.bG)([l.A], () => l.A.getStreamerActiveStreamMetadata()),
        t = (0, a.bG)(
            [c.Ay],
            () => {
                let e = c.Ay.getVisibleGame();
                return null != e ? c.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i(),
        ),
        [n] = (0, o.A)([u(e, t)]);
    return {
        runningGame: null != t ? t : void 0,
        runningGameApplication: null != n ? n : void 0,
    };
}
