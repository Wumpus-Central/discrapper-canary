n.d(t, { N: () => d });
var r = n(627968);
n(64700);
var l = n(534514),
    i = n(834730),
    a = n(573435),
    s = n(548118),
    o = n(860689),
    u = n(985018),
    c = n(831985);
let d = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let d = o.DY(t),
        { name: _, description: h } = d;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: c.CT,
                children: u.intl.string(u.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: c.EB,
                children: [
                    (0, r.jsx)(a.Ay, {
                        mask: a.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, r.jsx)(s.Ay, { guild: d, size: s.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.OA,
                        children: [
                            (0, r.jsx)(l.D, { variant: "heading-sm/semibold", children: _ }),
                            (0, r.jsxs)("div", {
                                className: c.aH,
                                children: [
                                    (0, r.jsx)("div", { className: c.Om }),
                                    null != n && n > 0
                                        ? (0, r.jsx)(i.E, {
                                              variant: "text-sm/normal",
                                              children: u.intl.format(u.t["LC+S+m"], { membersOnline: n }),
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
                (0, r.jsx)(i.E, { color: "text-default", className: c.CT, variant: "text-sm/normal", children: h }),
        ],
    });
};
