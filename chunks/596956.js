n.d(t, {
    S: () => a,
    T: () => r
});
var i = n(476326);
function r(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === i.ow.REACT_NATIVE) {
        let { item: i } = t,
            { filename: r } = e;
        if (i.originalUri === e.uri) return !0;
        if (null != r) {
            var n;
            if (null === (n = i.originalUri) || void 0 === n ? void 0 : n.includes(r)) return !0;
        }
    }
    return !1;
}
function a(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
