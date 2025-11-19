n.d(t, { W: () => c }), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(388032),
    o = n(582220),
    s = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        p = r.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, i.jsxs)("div", {
        className: o.safetyBanner,
        children: [
            (0, i.jsxs)("div", {
                className: o.shieldAndHeading,
                children: [
                    (0, i.jsx)("img", {
                        className: o.safetyShieldIcon,
                        src: s,
                        alt: "",
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: t,
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-primary",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: o.buttons,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  l.Button,
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
                ? (0, i.jsx)(l.P3F, {
                      className: o.closeButton,
                      onClick: p,
                      role: "button",
                      "aria-label": a.intl.string(a.t.WAI6xu),
                      children: (0, i.jsx)(l.Dio, {
                          size: "md",
                          color: "currentColor",
                          className: o.closeButton,
                      }),
                  })
                : null,
        ],
    });
}
