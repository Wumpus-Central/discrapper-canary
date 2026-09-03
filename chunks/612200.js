n.d(t, { IO: () => o, MP: () => c, Nk: () => d, yO: () => l });
var i = n(228366);
n(830215), n(976860);
var r = n(174459),
    a = n(204925),
    s = n(652215);
function l(e) {
    r.default.track(s.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        i.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function o(e) {
    i.h.wait(() => i.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_CLOSE });
}
function d(e) {
    i.h.wait(() => {
        i.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_SUCCESS });
}
function c(e, t) {
    i.h.wait(() => {
        i.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_FAILURE });
}
