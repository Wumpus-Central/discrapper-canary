n.d(t, { A: () => _, b: () => u });
var i = n(812729),
    s = n.n(i),
    r = n(311907),
    a = n(587895),
    l = n(429913),
    o = n(616356),
    c = n(15285);
function d(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function u() {
    let e = o.A.getStreamerActiveStreamMetadata(),
        t = c.Ay.getVisibleGame(),
        n = null != t ? c.Ay.getGameOrTransformedSubgameForPID(t.pid) : null,
        i = d(e, n);
    return { runningGame: n ?? void 0, runningGameApplication: a.A.getApplication(i) ?? void 0 };
}
function _() {
    let e = (0, r.bG)([o.A], () => o.A.getStreamerActiveStreamMetadata()),
        t = (0, r.bG)(
            [c.Ay],
            () => {
                let e = c.Ay.getVisibleGame();
                return null != e ? c.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            s(),
        ),
        [n] = (0, l.A)([d(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
