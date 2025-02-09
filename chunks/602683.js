a.d(s, { Z: () => l }), a(47120);
var i = a(200651),
    t = a(192379),
    n = a(481060);
let l = function (e) {
    let { assetKey: s, initialValue: a, onMessageChange: l, title: r } = e,
        [o, d] = t.useState('');
    return (
        t.useEffect(() => {
            d(null != a ? a : '');
        }, [a]),
        (0, i.jsxs)(n.xJW, {
            children: [
                (0, i.jsx)(n.vwX, {
                    tag: n.RB0.H5,
                    children: r
                }),
                (0, i.jsx)(n.R94, {
                    children: (0, i.jsx)(n.oil, {
                        value: o,
                        onChange: function (e) {
                            d(e), l(s, e);
                        }
                    })
                })
            ]
        })
    );
};
