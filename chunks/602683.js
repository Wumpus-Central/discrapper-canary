n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060);
let o = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: o, title: s } = e,
        [l, c] = i.useState("");
    function u(e) {
        c(e), o(t, e);
    }
    return (
        i.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, r.jsxs)(a.xJW, {
            children: [
                (0, r.jsx)(a.vwX, { children: s }),
                (0, r.jsx)(a.R94, {
                    children: (0, r.jsx)(a.oil, {
                        value: l,
                        onChange: u,
                    }),
                }),
            ],
        })
    );
};
