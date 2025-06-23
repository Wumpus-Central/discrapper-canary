n.d(e, {
    D0: () => r,
    kY: () => i,
    lE: () => c
});
var l = n(570140);
function i() {
    l.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function r(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function c(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
