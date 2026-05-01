n.d(t, { N: () => d });
var l = n(627968);
n(64700);
var r = n(534514),
    a = n(834730),
    i = n(573435),
    s = n(548118),
    o = n(860689),
    u = n(985018),
    c = n(831985);
let d = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let d = o.DY(t),
        { name: h, description: m } = d;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(r.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: c.CT,
                children: u.intl.string(u.t.Eabu1z),
            }),
            (0, l.jsxs)("div", {
                className: c.EB,
                children: [
                    (0, l.jsx)(i.Ay, {
                        mask: i.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, l.jsx)(s.Ay, { guild: d, size: s.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, l.jsxs)("div", {
                        className: c.OA,
                        children: [
                            (0, l.jsx)(r.D, { variant: "heading-sm/semibold", children: h }),
                            (0, l.jsxs)("div", {
                                className: c.aH,
                                children: [
                                    (0, l.jsx)("div", { className: c.Om }),
                                    null != n && n > 0
                                        ? (0, l.jsx)(a.E, {
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
            null != m &&
                "" !== m &&
                (0, l.jsx)(a.E, { color: "text-default", className: c.CT, variant: "text-sm/normal", children: m }),
        ],
    });
};
