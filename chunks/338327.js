n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(639774);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let s = {
    open() {
        (0, i.ZDy)(async () => {
            if (l.f.getConfig({ location: "EnableCommunityModalActionCreators" }).enabled) {
                let { default: e } = await Promise.all([n.e("57486"), n.e("43339")]).then(n.bind(n, 87026));
                return (t) => (0, r.jsx)(e, a({}, t));
            }
            {
                let { default: e } = await n.e("51218").then(n.bind(n, 848972));
                return (t) => (0, r.jsx)(e, a({}, t));
            }
        });
    },
};
