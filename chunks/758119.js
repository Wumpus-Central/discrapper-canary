n.d(t, {
    C8: () => u,
    mN: () => o,
    qV: () => s,
    qq: () => c
});
var r = n(570140);
n(893776), n(703656);
var i = n(626135),
    a = n(723359),
    l = n(981631);
function o(e) {
    i.default.track(l.rMx.OPEN_MODAL, {
        type: 'Enter Your Birthday',
        source: { section: e }
    }),
        r.Z.dispatch({
            type: 'AGE_GATE_MODAL_OPEN',
            source: e
        });
}
function s(e) {
    r.Z.wait(() => r.Z.dispatch({ type: 'AGE_GATE_MODAL_CLOSE' })),
        void 0 !== e &&
            i.default.track(l.rMx.AGE_GATE_ACTION, {
                source: e,
                action: a.Al.AGE_GATE_CLOSE
            });
}
function c(e) {
    r.Z.wait(() => {
        r.Z.dispatch({ type: 'AGE_GATE_SUCCESS_MODAL_OPEN' });
    }),
        i.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_SUCCESS
        });
}
function u(e, t) {
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'AGE_GATE_FAILURE_MODAL_OPEN',
            underageMessage: t
        });
    }),
        i.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_FAILURE
        });
}
