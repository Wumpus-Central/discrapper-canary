n.d(t, { Z: () => a }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(481060);
let a = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: a, title: i } = e,
        [l, c] = s.useState("");
    return (
        s.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, r.jsx)(o.oil, {
            label: i,
            value: l,
            onChange: function (e) {
                c(e), a(t, e);
            },
        })
    );
};
