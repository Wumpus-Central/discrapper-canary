"use strict";
s.d(e, { NG: () => r, Np: () => n, QZ: () => i });
var a = s(73153);
function n() {
    a.h.dispatch({ type: "SPELLCHECK_TOGGLE" });
}
function r(t) {
    a.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
}
function i(t) {
    a.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
}
