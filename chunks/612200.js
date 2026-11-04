var i = n(73153);
(n(830215), n(976860));
var r = n(129230),
    a = n(204925),
    s = n(652215);
n.d(
    t,
    {},
    {
        IO: function (e) {
            (i.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" }),
                void 0 !== e && r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_CLOSE }));
        },
        MP: function (e, t) {
            (i.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t }),
                r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_FAILURE }));
        },
        Nk: function (e) {
            (i.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN", source: e }),
                r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_SUCCESS }));
        },
        yO: function (e, t) {
            (r.default.track(s.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
                i.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e, channelId: t }));
        },
    },
);
