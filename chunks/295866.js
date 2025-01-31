n.d(e, {
    D0: () => c,
    kY: () => i,
    lE: () => s
});
var l = n(570140);
function i() {
    l.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function c(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function s(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
