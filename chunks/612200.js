n.d(t, { IO: () => s, MP: () => u, Nk: () => d, yO: () => l });
var r = n(228366);
n(830215), n(976860);
var a = n(954571),
    i = n(204925),
    o = n(652215);
function l(e) {
    a.default.track(o.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        r.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function s(e) {
    r.h.wait(() => r.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && a.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_CLOSE });
}
function d(e) {
    r.h.wait(() => {
        r.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        a.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_SUCCESS });
}
function u(e, t) {
    r.h.wait(() => {
        r.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        a.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_FAILURE });
}
