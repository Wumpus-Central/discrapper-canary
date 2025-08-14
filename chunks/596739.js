n.d(t, { W: () => c }), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(388032),
    s = n(582220),
    l = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        f = i.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, r.jsxs)("div", {
        className: s.safetyBanner,
        children: [
            (0, r.jsxs)("div", {
                className: s.shieldAndHeading,
                children: [
                    (0, r.jsx)("img", {
                        className: s.safetyShieldIcon,
                        src: l,
                        alt: "",
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: t,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-primary",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s.buttons,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  o.zxk,
                                  {
                                      text: e.text,
                                      variant: null != (n = e.variant) ? n : "secondary",
                                      onClick: e.onClick,
                                      size: "sm",
                                  },
                                  t,
                              );
                          }),
            }),
            d
                ? (0, r.jsx)(o.P3F, {
                      className: s.closeButton,
                      onClick: f,
                      role: "button",
                      "aria-label": a.intl.string(a.t.WAI6xs),
                      children: (0, r.jsx)(o.Dio, {
                          size: "md",
                          color: "currentColor",
                          className: s.closeButton,
                      }),
                  })
                : null,
        ],
    });
}
