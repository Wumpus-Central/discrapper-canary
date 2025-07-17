n.d(e, {
    D0: () => r,
    kY: () => a,
    lE: () => i
});
var s = n(570140);
function a() {
    s.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function r(t) {
    s.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function i(t) {
    s.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
