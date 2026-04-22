"use strict";
n.d(t, { N: () => u });
var i = n(627968);
n(64700);
var s = n(534514),
    r = n(834730),
    l = n(573435),
    a = n(263063),
    o = n(860689),
    c = n(985018),
    d = n(831985);
let u = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let u = o.DY(t),
        { name: _, description: h } = u;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: d.CT,
                children: c.intl.string(c.t.Eabu1z),
            }),
            (0, i.jsxs)("div", {
                className: d.EB,
                children: [
                    (0, i.jsx)(l.Ay, {
                        mask: l.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, i.jsx)(a.Ay, { guild: u, size: a.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, i.jsxs)("div", {
                        className: d.OA,
                        children: [
                            (0, i.jsx)(s.D, { variant: "heading-sm/semibold", children: _ }),
                            (0, i.jsxs)("div", {
                                className: d.aH,
                                children: [
                                    (0, i.jsx)("div", { className: d.Om }),
                                    null != n && n > 0
                                        ? (0, i.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              children: c.intl.format(c.t["LC+S+m"], { membersOnline: n }),
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
                (0, i.jsx)(r.E, { color: "text-default", className: d.CT, variant: "text-sm/normal", children: h }),
        ],
    });
};
