r.d(t, {
    r: () => f,
});
var a = r(627968),
    n = r(64700),
    s = r(333748),
    i = r(397927),
    l = r(647053),
    c = r(985018),
    o = r(856229),
    d = r(806782),
    u = r(277606);
let f = (e) => {
    let { onComplete: t, data: r } = e,
        f = (0, n.useId)(),
        p = null,
        h = null,
        x = r.scopes.some((e) => (0, l.RM)(e));
    return (
        r.clientId === s.i.PLAYSTATION_APPLICATION_ID || r.clientId === s.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (p = d.A)
            : x && (p = u.A),
        null != r.twoWayLinkCode ? (h = c.intl.string(c.t.QhATl2)) : x && (h = c.intl.string(c.t.vBPvK3)),
        (0, a.jsxs)("div", {
            className: o.Qs,
            children: [
                null != p
                    ? (0, a.jsx)("img", {
                          src: p,
                          className: o.xX,
                          alt: "",
                          "aria-labelledby": f,
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: o.gx,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/extrabold",
                            id: f,
                            children: c.intl.string(c.t.qDtJmD),
                        }),
                        null != h
                            ? (0, a.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: "text-default",
                                  children: h,
                              })
                            : null,
                    ],
                }),
                (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.wC,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: c.intl.string(c.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
};
