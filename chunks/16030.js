n.d(t, { G: () => a }), n(47120);
var i = n(200651);
n(192379);
var r = n(390507);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var a, s, o, l, u;
        let { color: c, ...d } = n,
            f = 'currentColor';
        null != c && (f = 'string' != typeof c && 'css' in c ? c.css : c);
        let _ = null !== (a = d.size) && void 0 !== a ? a : 'md',
            p = (0, r.m)(_),
            h = {
                color: f,
                width: null !== (o = null !== (s = null == p ? void 0 : p.width) && void 0 !== s ? s : d.width) && void 0 !== o ? o : 24,
                height: null !== (u = null !== (l = null == p ? void 0 : p.height) && void 0 !== l ? l : d.height) && void 0 !== u ? u : 24,
                foreground: d.colorClass
            };
        for (let [e, n] of Object.entries(t)) null != d[e] && (h[n] = d[e]);
        return (0, i.jsx)(e, {
            ...d,
            ...h
        });
    };
};
