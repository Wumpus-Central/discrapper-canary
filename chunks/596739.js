n.d(t, { W: () => c }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(970683),
    a = n(481060),
    o = n(388032),
    s = n(37830);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        p = i.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, r.jsxs)("div", {
        className: s.safetyBanner,
        children: [
            (0, r.jsxs)("div", {
                className: s.shieldAndHeading,
                children: [
                    (0, r.jsx)(l.i$7, {
                        alt: "",
                        size: 32,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: t,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-strong",
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
                                  a.Button,
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
                ? (0, r.jsx)(a.P3F, {
                      className: s.closeButton,
                      onClick: p,
                      role: "button",
                      "aria-label": o.intl.string(o.t.WAI6xu),
                      children: (0, r.jsx)(a.Dio, {
                          size: "md",
                          color: "currentColor",
                          className: s.closeButton,
                      }),
                  })
                : null,
        ],
    });
}
