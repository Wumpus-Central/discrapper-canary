function r(e, t) {
    var n, r;
    if (null == e) return !1;
    let i = null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView;
    if (null == i) return console.warn('Unable to determine render window for element', e), !1;
    let o = null != (r = null == t ? void 0 : t.name) ? r : 'Element',
        a = i[o];
    return null == a ? (console.warn('Unable to find element constructor "'.concat(o, '" in'), i), !1) : e instanceof a;
}
function i(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
n.d(t, {
    M: () => i,
    k: () => r
});
