n.d(t, { w: () => l });
var i = n(477900);
n(582128);
var r = n(512950),
    a = n(460890),
    s = n(292825);
function l(e) {
    let { type: t, hidden: n, iconAlign: l, children: o } = e;
    if ((0, a.G9)().experiments?.enabledExperiments?.includes("mana-notification-components"))
        return (0, i.jsx)(s.a, { type: "success" === t ? "positive" : t, hidden: n, message: o, role: "static" });
    return (0, i.jsx)(r.p, {
        messageType: (function (e) {
            switch (e) {
                case "critical":
                    return r.Y.ERROR;
                case "warning":
                    return r.Y.WARNING;
                case "info":
                    return r.Y.INFO;
                case "success":
                    return r.Y.POSITIVE;
            }
        })(t),
        hidden: n,
        iconAlign: l,
        children: o,
    });
}
