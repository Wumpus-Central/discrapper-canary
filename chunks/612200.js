n.d(t, { IO: () => s, MP: () => _, Nk: () => u, yO: () => l });
var o = n(228366);
n(830215), n(976860);
var r = n(954571),
    i = n(204925),
    a = n(652215);
function l(e) {
    r.default.track(a.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        o.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function s(e) {
    o.h.wait(() => o.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_CLOSE });
}
function u(e) {
    o.h.wait(() => {
        o.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_SUCCESS });
}
function _(e, t) {
    o.h.wait(() => {
        o.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: i.AM.AGE_GATE_FAILURE });
}
