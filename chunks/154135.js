r.d(n, {
    EY: function () {
        return s;
    },
    Vh: function () {
        return o;
    },
    Yh: function () {
        return a;
    }
});
var i = r(406432);
let a = 4;
function o(e) {
    var n, r;
    if (null == e) return;
    let { thumbnail: i, image: a } = e;
    return null != i ? (null !== (n = i.proxy_url) && void 0 !== n ? n : i.url) : null != a ? (null !== (r = a.proxy_url) && void 0 !== r ? r : a.url) : void 0;
}
function s(e) {
    if (null == e) return;
    let { url: n, proxy_url: r } = e;
    return null != n && null != r ? ((0, i.cb)(n) ? ''.concat(r, '?format=webp') : r) : n;
}
