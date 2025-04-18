n.d(e, {
    D0: () => c,
    kY: () => r,
    lE: () => i
});
var l = n(570140);
function r() {
    l.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function c(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function i(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
