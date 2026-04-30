n.d(t, { IO: () => u, MP: () => _, Nk: () => s, yO: () => l });
var o = n(228366);
n(830215), n(976860);
var r = n(954571),
    a = n(204925),
    i = n(652215);
function l(e) {
    r.default.track(i.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        o.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function u(e) {
    o.h.wait(() => o.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && r.default.track(i.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_CLOSE });
}
function s(e) {
    o.h.wait(() => {
        o.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        r.default.track(i.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_SUCCESS });
}
function _(e, t) {
    o.h.wait(() => {
        o.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        r.default.track(i.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_FAILURE });
}
