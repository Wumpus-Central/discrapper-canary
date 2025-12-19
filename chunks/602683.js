n.d(t, { Z: () => l }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060);
let l = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: l, title: s } = e,
        [o, c] = r.useState("");
    return (
        r.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, a.jsx)(i.oil, {
            label: s,
            value: o,
            onChange: function (e) {
                c(e), l(t, e);
            },
        })
    );
};
