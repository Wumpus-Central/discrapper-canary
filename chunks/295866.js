n.d(t, {
    D0: () => l,
    kY: () => c,
    lE: () => i
});
var r = n(570140);
function c() {
    r.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function l(e) {
    r.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: e
    });
}
function i(e) {
    r.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: e
    });
}
