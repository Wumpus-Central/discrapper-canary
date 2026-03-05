l.d(e, { NG: () => r, Np: () => i, QZ: () => s });
var n = l(73153);
function i() {
    n.h.dispatch({ type: "SPELLCHECK_TOGGLE" });
}
function r(t) {
    n.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
}
function s(t) {
    n.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
}
