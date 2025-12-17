a.d(n, { default: () => m }), a(388685);
var i = a(54381),
    e = a(473749),
    r = a(793030),
    s = a(481060),
    l = a(460181),
    o = a(388032),
    c = a(858215);
function m(t) {
    let { transitionState: n, onClose: a } = t,
        m = () => (null == a || a(), Promise.resolve());
    e.useEffect(() => {
        (0, l.GN)("success", 0.1);
    }, []);
    let [d] = e.useState(() =>
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
    return (0, i.jsx)(r.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [
            {
                text: o.intl.string(o.t.cpT0Cq),
                onClick: m,
                variant: "primary",
            },
        ],
        onClose: m,
        children: (0, i.jsx)("div", {
            className: c.modalContent,
            children: (0, i.jsxs)(s.Text, {
                className: c.submitText,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, i.jsx)("br", {}), d],
            }),
        }),
    });
}
