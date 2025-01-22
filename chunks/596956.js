r.d(n, {
    S: function () {
        return o;
    },
    T: function () {
        return a;
    }
});
var i = r(476326);
function a(e, n) {
    if (n.id === e.uri || (null != n.id && n.id === e.id)) return !0;
    if (n.item.platform === i.ow.REACT_NATIVE) {
        let { item: i } = n,
            { filename: a } = e;
        if (i.originalUri === e.uri) return !0;
        if (null != a) {
            var r;
            if (null === (r = i.originalUri) || void 0 === r ? void 0 : r.includes(a)) return !0;
        }
    }
    return !1;
}
function o(e, n) {
    return 0 === n ? 0 : Math.min(Math.floor((e / n) * 100), 100);
}
