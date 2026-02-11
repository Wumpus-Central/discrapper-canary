"use strict";
s.d(e, { NG: () => r, Np: () => a, QZ: () => i });
var n = s(73153);
function a() {
    n.h.dispatch({ type: "SPELLCHECK_TOGGLE" });
}
function r(t) {
    n.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
}
function i(t) {
    n.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
}
