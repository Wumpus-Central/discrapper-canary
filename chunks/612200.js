"use strict";
n.d(t, { IO: () => l, MP: () => c, Nk: () => u, yO: () => o });
var r = n(73153);
n(830215), n(976860);
var i = n(954571),
    s = n(204925),
    a = n(652215);
function o(e) {
    i.default.track(a.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        r.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function l(e) {
    r.h.wait(() => r.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && i.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_CLOSE });
}
function u(e) {
    r.h.wait(() => {
        r.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        i.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_SUCCESS });
}
function c(e, t) {
    r.h.wait(() => {
        r.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        i.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_FAILURE });
}
