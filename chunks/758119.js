n.d(t, {
    C8: () => d,
    mN: () => s,
    qV: () => o,
    qq: () => c
});
var i = n(570140);
n(893776), n(703656);
var l = n(626135),
    a = n(723359),
    r = n(981631);
function s(e) {
    l.default.track(r.rMx.OPEN_MODAL, {
        type: 'Enter Your Birthday',
        source: { section: e }
    }),
        i.Z.dispatch({
            type: 'AGE_GATE_MODAL_OPEN',
            source: e
        });
}
function o(e) {
    i.Z.wait(() => i.Z.dispatch({ type: 'AGE_GATE_MODAL_CLOSE' })),
        void 0 !== e &&
            l.default.track(r.rMx.AGE_GATE_ACTION, {
                source: e,
                action: a.Al.AGE_GATE_CLOSE
            });
}
function c(e) {
    i.Z.wait(() => {
        i.Z.dispatch({ type: 'AGE_GATE_SUCCESS_MODAL_OPEN' });
    }),
        l.default.track(r.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_SUCCESS
        });
}
function d(e, t) {
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'AGE_GATE_FAILURE_MODAL_OPEN',
            underageMessage: t
        });
    }),
        l.default.track(r.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_FAILURE
        });
}
