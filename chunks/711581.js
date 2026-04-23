"use strict";
s.d(e, { NG: () => a, Np: () => r, QZ: () => i });
var n = s(73153);
function r() {
    n.h.dispatch({ type: "SPELLCHECK_TOGGLE" });
}
function a(t) {
    n.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
}
function i(t) {
    n.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
}
