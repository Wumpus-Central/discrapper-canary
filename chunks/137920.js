n.d(t, {
    S: () => d,
    Z: () => f,
}),
    n(388685);
var r = n(348327),
    i = n.n(r),
    a = n(442837),
    o = n(812206),
    s = n(835473),
    l = n(199902),
    c = n(594190);
function u(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function d() {
    let e = l.Z.getStreamerActiveStreamMetadata(),
        t = c.ZP.getVisibleGame(),
        n = null != t ? c.ZP.getGameOrTransformedSubgameForPID(t.pid) : null,
        r = u(e, n),
        i = o.Z.getApplication(r);
    return {
        runningGame: null != n ? n : void 0,
        runningGameApplication: null != i ? i : void 0,
    };
}
function f() {
    let e = (0, a.e7)([l.Z], () => l.Z.getStreamerActiveStreamMetadata()),
        t = (0, a.e7)(
            [c.ZP],
            () => {
                let e = c.ZP.getVisibleGame();
                return null != e ? c.ZP.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i(),
        ),
        [n] = (0, s.Z)([u(e, t)]);
    return {
        runningGame: null != t ? t : void 0,
        runningGameApplication: null != n ? n : void 0,
    };
}
