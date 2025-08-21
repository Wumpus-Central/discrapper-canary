n.d(t, { Z: () => c }), n(388685);
var r = n(348327),
    i = n.n(r),
    a = n(442837),
    o = n(835473),
    s = n(199902),
    l = n(594190);
function c() {
    let e = (0, a.e7)([s.Z], () => s.Z.getStreamerActiveStreamMetadata()),
        t = (0, a.e7)(
            [l.ZP],
            () => {
                let e = l.ZP.getVisibleGame();
                return null != e ? l.ZP.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i(),
        );
    function n() {
        return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
    }
    let [r] = (0, o.Z)([n()]);
    return {
        runningGame: null != t ? t : void 0,
        runningGameApplication: null != r ? r : void 0,
    };
}
