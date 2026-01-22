n.d(e, {
    NG: () => a,
    Np: () => r,
    QZ: () => i,
});
var l = n(73153);

function r() {
    l.h.dispatch({
        type: "SPELLCHECK_TOGGLE",
    });
}

function a(t) {
    l.h.dispatch({
        type: "SPELLCHECK_LEARN_WORD",
        word: t,
    });
}

function i(t) {
    l.h.dispatch({
        type: "SPELLCHECK_UNLEARN_WORD",
        word: t,
    });
}
