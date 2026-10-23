n.d(t, { w: () => u });
var i = n(477900);
n(582128);
var r = n(821609),
    a = n(815021),
    s = n(512950),
    l = n(460890),
    o = n(292825),
    d = n(331322),
    c = n(834730);
function u(e) {
    let {
            type: t,
            hidden: n,
            iconAlign: u,
            children: _,
            message: E,
            messageList: A,
            role: h,
            title: f,
            action: I,
            onDismiss: p,
        } = e,
        { i18n: T, experiments: m } = (0, l.G9)();
    if (m?.enabledExperiments?.includes("mana-notification-components"))
        return (0, i.jsx)(o.a, {
            type: "success" === t ? "positive" : t,
            hidden: n,
            message: E ?? _,
            messageList: A,
            role: h ?? "none",
            title: f,
            action: I,
            onDismiss: p,
        });
    let g = null != A ? (0, i.jsx)(o.g, { intro: E, items: A }) : E;
    return (0, i.jsx)(s.p, {
        messageType: (function (e) {
            switch (e) {
                case "critical":
                    return s.Y.ERROR;
                case "warning":
                    return s.Y.WARNING;
                case "info":
                    return s.Y.INFO;
                case "success":
                    return s.Y.POSITIVE;
            }
        })(t),
        hidden: n,
        iconAlign: u,
        action:
            null != I || null != p
                ? (0, i.jsxs)(d.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          null != I
                              ? (0, i.jsx)(r.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: I.text,
                                    onClick: I.onClick,
                                    loading: I.loading,
                                })
                              : null,
                          null != p
                              ? (0, i.jsx)(a.J, { "aria-label": T.DISMISS_BUTTON_LABEL, size: "sm", onClick: p })
                              : null,
                      ],
                  })
                : void 0,
        children:
            null != f
                ? (0, i.jsxs)(d.B, {
                      gap: 4,
                      children: [
                          (0, i.jsx)(c.E, { tag: "div", variant: "heading-md/medium", children: f }),
                          (0, i.jsx)(c.E, { variant: "text-sm/normal", children: g }),
                      ],
                  })
                : (_ ?? g),
    });
}
