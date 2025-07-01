n.d(t, {
    C8: () => d,
    mN: () => s,
    qV: () => a,
    qq: () => c
});
var i = n(570140);
(n(893776), n(703656));
var r = n(626135),
    l = n(723359),
    o = n(981631);
function s(e) {
    (r.default.track(o.rMx.OPEN_MODAL, {
        type: 'Enter Your Birthday',
        source: { section: e }
    }),
        i.Z.dispatch({
            type: 'AGE_GATE_MODAL_OPEN',
            source: e
        }));
}
function a(e) {
    (i.Z.wait(() => i.Z.dispatch({ type: 'AGE_GATE_MODAL_CLOSE' })),
        void 0 !== e &&
            r.default.track(o.rMx.AGE_GATE_ACTION, {
                source: e,
                action: l.Al.AGE_GATE_CLOSE
            }));
}
function c(e) {
    (i.Z.wait(() => {
        i.Z.dispatch({ type: 'AGE_GATE_SUCCESS_MODAL_OPEN' });
    }),
        r.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_SUCCESS
        }));
}
function d(e, t) {
    (i.Z.wait(() => {
        i.Z.dispatch({
            type: 'AGE_GATE_FAILURE_MODAL_OPEN',
            underageMessage: t
        });
    }),
        r.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_FAILURE
        }));
}
