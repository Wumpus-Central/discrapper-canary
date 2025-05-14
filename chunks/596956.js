n.d(t, {
    S: () => o,
    T: () => i
});
var r = n(476326);
function i(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === r.ow.REACT_NATIVE) {
        let { item: r } = t,
            { filename: i } = e;
        if (r.originalUri === e.uri) return !0;
        if (null != i) {
            var n;
            if (null == (n = r.originalUri) ? void 0 : n.includes(i)) return !0;
        }
    }
    return !1;
}
function o(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
