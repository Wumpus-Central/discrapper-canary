i.d(n, { default: () => c }), i(388685);
var a = i(54381),
    e = i(473749),
    r = i(793030),
    s = i(481060),
    l = i(460181),
    o = i(388032),
    m = i(842144);
function c(t) {
    let { transitionState: n, onClose: i } = t,
        c = () => (null == i || i(), Promise.resolve());
    e.useEffect(() => {
        (0, l.GN)("success", 0.1);
    }, []);
    let [u] = e.useState(() =>
        (() => {
            let t = [
                o.intl.format(o.t.ZAbzbA, {}),
                o.intl.format(o.t.WXVqdT, {}),
                o.intl.format(o.t.BxG87N, {}),
                o.intl.format(o.t.pWZvZk, {}),
                o.intl.format(o.t["/UhvyQ"], {}),
                o.intl.format(o.t.XrRGpI, {}),
                o.intl.format(o.t.SN3QDR, {}),
            ];
            return t[Math.floor(Math.random() * t.length)];
        })(),
    );
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [
            {
                text: o.intl.string(o.t.cpT0Cq),
                onClick: c,
                variant: "primary",
            },
        ],
        onClose: c,
        children: (0, a.jsx)("div", {
            className: m.modalContent,
            children: (0, a.jsxs)(s.Text, {
                className: m.submitText,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, a.jsx)("br", {}), u],
            }),
        }),
    });
}
