n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    s = n(647438),
    a = n(481060);
let o = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: o, title: i } = e,
        [l, c] = s.useState("");
    return (
        s.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, r.jsx)(a.oil, {
            label: i,
            value: l,
            onChange: function (e) {
                c(e), o(t, e);
            },
        })
    );
};
