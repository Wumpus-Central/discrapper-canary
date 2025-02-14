n.d(t, { Z: () => o }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(481060);
let o = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: o, title: i } = e,
        [l, c] = r.useState('');
    return (
        r.useEffect(() => {
            c(null != n ? n : '');
        }, [n]),
        (0, s.jsxs)(a.xJW, {
            children: [
                (0, s.jsx)(a.vwX, {
                    tag: a.RB0.H5,
                    children: i
                }),
                (0, s.jsx)(a.R94, {
                    children: (0, s.jsx)(a.oil, {
                        value: l,
                        onChange: function (e) {
                            c(e), o(t, e);
                        }
                    })
                })
            ]
        })
    );
};
