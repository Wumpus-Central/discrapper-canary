n.d(t, { Z: () => i }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(481060);
let i = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: i, title: s } = e,
        [o, c] = r.useState("");
    return (
        r.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, a.jsx)(l.oil, {
            label: s,
            value: o,
            onChange: function (e) {
                c(e), i(t, e);
            },
        })
    );
};
