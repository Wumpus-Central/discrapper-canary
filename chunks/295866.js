n.d(e, {
    D0: () => c,
    kY: () => l,
    lE: () => i
});
var r = n(570140);
function l() {
    r.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function c(t) {
    r.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function i(t) {
    r.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
