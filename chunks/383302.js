n.d(t, {
    N: () => u,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(573435),
    l = n(263063),
    a = n(860689),
    o = n(985018),
    c = n(936528);
let u = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let u = a.DY(t),
        { name: d, description: h } = u;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: c.CT,
                children: o.intl.string(o.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: c.EB,
                children: [
                    (0, r.jsx)(s.Ay, {
                        mask: s.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, r.jsx)(l.A, {
                            guild: u,
                            size: l.A.Sizes.MEDIUM,
                            active: !0,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.OA,
                        children: [
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-sm/semibold",
                                children: d,
                            }),
                            (0, r.jsxs)("div", {
                                className: c.aH,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: c.Om,
                                    }),
                                    null != n && n > 0
                                        ? (0, r.jsx)(i.Text, {
                                              variant: "text-sm/normal",
                                              children: o.intl.format(o.t["LC+S+m"], {
                                                  membersOnline: n,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != h &&
                "" !== h &&
                (0, r.jsx)(i.Text, {
                    color: "text-default",
                    className: c.CT,
                    variant: "text-sm/normal",
                    children: h,
                }),
        ],
    });
};
