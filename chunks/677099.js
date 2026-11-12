var i = n(858899),
    r = n(73153),
    l = n(367513),
    s = n(652896),
    a = n(346846),
    o = n(46653),
    u = n(130444),
    c = n(712766);
function d(e, t) {
    r.h.dispatch({
        type: "PASS_THE_CONTROLLER_UPDATE",
        streamKey: (0, s._z)(e),
        isHost: e.ownerId === o.default.getId(),
        host: e.ownerId,
        active: t,
    });
}
n.d(
    t,
    {},
    {
        Bw: function (e) {
            d(e, !c.A.isSelfPassingController((0, s._z)(e)));
        },
        HQ: function (e) {
            r.h.dispatch({ type: "PASS_THE_CONTROLLER_TAKE_BACK", streamKey: (0, s._z)(e) });
        },
        N_: function (e) {
            let t = (0, s._z)(e);
            c.A.isSelfHoldingController(t)
                ? d(e, !1)
                : ((0, a.A)(e),
                  l.A.selectParticipant(e.channelId, t),
                  d(e, !0),
                  null != c.A.getInputGuest(t) && (0, i.P0)({ text: u.Q.PRESS_ESC_TO_EXIT, variant: "default" }));
        },
    },
);
