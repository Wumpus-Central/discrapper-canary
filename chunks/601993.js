r.d(n, {
    Gb: function () {
        return l;
    },
    RD: function () {
        return m;
    },
    Rs: function () {
        return h;
    },
    WA: function () {
        return p;
    },
    _2: function () {
        return _;
    },
    f5: function () {
        return f;
    },
    fG: function () {
        return d;
    },
    gL: function () {
        return c;
    }
});
var i = r(579806),
    a = r(405826),
    o = r(358085);
function s() {
    return (null === i.Z || void 0 === i.Z ? void 0 : i.Z.spellCheck) != null;
}
function l() {
    return (0, o.isDesktop)() && s();
}
let u = l() ? (0, a.N)() : null;
async function c(e) {
    let n = await u;
    if (null != n) n.enabled = e;
}
async function d(e) {
    let n = await u;
    if (null != n) n.setLearnedWords(e);
}
async function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = await u;
    return null != r && r.isMisspelled(e, n);
}
async function p(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        i = await u;
    return null == i ? [] : i.getCorrectionsForMisspelling(e, n).slice(0, r);
}
async function h(e) {
    let n = await u;
    if (null != n) n.replaceMisspelling(e);
}
async function _(e) {
    let n = await u;
    if (null != n) n.setAppLocale(e);
}
function m(e) {
    if (!s()) return () => {};
    let n = i.Z.spellCheck.on('spellcheck-result', e);
    return null != n ? n : () => {};
}
