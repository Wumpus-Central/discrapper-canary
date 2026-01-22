var r = n(797686),
    i = "LTR",
    a = "RTL",
    s = null;

function o(e) {
    return e === i || e === a;
}

function l(e) {
    return o(e) || r(!1), e === i ? "ltr" : "rtl";
}

function c(e, t) {
    return o(e) || r(!1), o(t) || r(!1), e === t ? null : l(e);
}

function u(e) {
    s = e;
}

function d() {
    u(i);
}
e.exports = {
    NEUTRAL: "NEUTRAL",
    LTR: i,
    RTL: a,
    isStrong: o,
    getHTMLDir: l,
    getHTMLDirIfDifferent: c,
    setGlobalDir: u,
    initGlobalDir: d,
    getGlobalDir: function () {
        return s || this.initGlobalDir(), s || r(!1), s;
    },
};
