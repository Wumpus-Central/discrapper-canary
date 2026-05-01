"use strict";
n.d(t, { IO: () => l, MP: () => c, Nk: () => u, yO: () => o });
var i = n(228366);
n(830215), n(976860);
var r = n(174459),
    s = n(204925),
    a = n(652215);
function o(e) {
    r.default.track(a.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
        i.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
}
function l(e) {
    i.h.wait(() => i.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
        void 0 !== e && r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_CLOSE });
}
function u(e) {
    i.h.wait(() => {
        i.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
        r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_SUCCESS });
}
function c(e, t) {
    i.h.wait(() => {
        i.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
        r.default.track(a.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_FAILURE });
}
