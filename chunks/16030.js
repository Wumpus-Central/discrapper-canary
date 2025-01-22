r.d(n, {
    G: function () {
        return s;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(390507);
let s = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (r) {
        var i, s, l, u, c;
        let { color: d, ...f } = r,
            p = 'currentColor';
        null != d && (p = 'string' != typeof d && 'css' in d ? d.css : d);
        let h = null !== (i = f.size) && void 0 !== i ? i : 'md',
            _ = (0, o.m)(h),
            m = null !== (l = null !== (s = null == _ ? void 0 : _.width) && void 0 !== s ? s : f.width) && void 0 !== l ? l : 24,
            g = {
                color: p,
                width: m,
                height: null !== (c = null !== (u = null == _ ? void 0 : _.height) && void 0 !== u ? u : f.height) && void 0 !== c ? c : 24,
                foreground: f.colorClass
            };
        for (let [e, r] of Object.entries(n)) null != f[e] && (g[r] = f[e]);
        return (0, a.jsx)(e, {
            ...f,
            ...g
        });
    };
};
