n.d(t, { Z: () => a }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(481060);
let a = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: a, title: i } = e,
        [l, c] = s.useState('');
    return (
        s.useEffect(() => {
            c(null != n ? n : '');
        }, [n]),
        (0, r.jsxs)(o.xJW, {
            children: [
                (0, r.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    children: i
                }),
                (0, r.jsx)(o.R94, {
                    children: (0, r.jsx)(o.oil, {
                        value: l,
                        onChange: function (e) {
                            c(e), a(t, e);
                        }
                    })
                })
            ]
        })
    );
};
