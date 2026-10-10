n.d(t, { w: () => c });
var i = n(477900);
n(582128);
var r = n(821609),
    a = n(512950),
    s = n(460890),
    l = n(292825),
    o = n(331322),
    d = n(834730);
function c(e) {
    let { type: t, hidden: n, iconAlign: c, children: u, message: _, role: E, title: A, action: h, onDismiss: f } = e;
    if ((0, s.G9)().experiments?.enabledExperiments?.includes("mana-notification-components"))
        return (0, i.jsx)(l.a, {
            type: "success" === t ? "positive" : t,
            hidden: n,
            message: _ ?? u,
            role: E ?? "static",
            title: A,
            action: h,
            onDismiss: f,
        });
    return (0, i.jsx)(a.p, {
        messageType: (function (e) {
            switch (e) {
                case "critical":
                    return a.Y.ERROR;
                case "warning":
                    return a.Y.WARNING;
                case "info":
                    return a.Y.INFO;
                case "success":
                    return a.Y.POSITIVE;
            }
        })(t),
        hidden: n,
        iconAlign: c,
        action:
            null != h
                ? (0, i.jsx)(r.$, { variant: "secondary", size: "sm", text: h.text, onClick: h.onClick })
                : void 0,
        children:
            null != A
                ? (0, i.jsxs)(o.B, {
                      gap: 4,
                      children: [A, (0, i.jsx)(d.E, { variant: "text-sm/normal", children: _ })],
                  })
                : (u ?? _),
    });
}
