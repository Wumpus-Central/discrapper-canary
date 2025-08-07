n.d(e, {
    D0: () => i,
    kY: () => a,
    lE: () => r,
});
var l = n(570140);
function a() {
    l.Z.dispatch({ type: "SPELLCHECK_TOGGLE" });
}
function i(t) {
    l.Z.dispatch({
        type: "SPELLCHECK_LEARN_WORD",
        word: t,
    });
}
function r(t) {
    l.Z.dispatch({
        type: "SPELLCHECK_UNLEARN_WORD",
        word: t,
    });
}
