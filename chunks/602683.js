s.d(t, { Z: () => i }), s(388685);
var n = s(951288),
    r = s(647438),
    a = s(481060);
let i = function (e) {
    let { assetKey: t, initialValue: s, onMessageChange: i, title: l } = e,
        [o, c] = r.useState("");
    return (
        r.useEffect(() => {
            c(null != s ? s : "");
        }, [s]),
        (0, n.jsxs)(a.xJW, {
            children: [
                (0, n.jsx)(a.vwX, { children: l }),
                (0, n.jsx)(a.R94, {
                    children: (0, n.jsx)(a.oil, {
                        value: o,
                        onChange: function (e) {
                            c(e), i(t, e);
                        },
                    }),
                }),
            ],
        })
    );
};
