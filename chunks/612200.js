n.d(t, {
    IO: () => l,
    MP: () => u,
    Nk: () => c,
    yO: () => o,
});
var r = n(73153);
n(830215), n(976860);
var i = n(954571),
    a = n(204925),
    s = n(652215);
function o(e) {
    i.default.track(s.HAw.OPEN_MODAL, {
        type: "Enter Your Birthday",
        source: { section: e },
    }),
        r.h.dispatch({
            type: "AGE_GATE_MODAL_OPEN",
            source: e,
        });
}
function l(e) {
    r.h.wait(() => r.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e &&
            i.default.track(s.HAw.AGE_GATE_ACTION, {
                source: e,
                action: a.AM.AGE_GATE_CLOSE,
            });
}
function c(e) {
    r.h.wait(() => {
        r.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        i.default.track(s.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_SUCCESS,
        });
}
function u(e, t) {
    r.h.wait(() => {
        r.h.dispatch({
            type: "AGE_GATE_FAILURE_MODAL_OPEN",
            underageMessage: t,
        });
    }),
        i.default.track(s.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_FAILURE,
        });
}
