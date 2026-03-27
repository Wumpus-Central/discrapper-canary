"use strict";
n.d(t, { N: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(573435),
    l = n(263063),
    a = n(860689),
    o = n(985018),
    d = n(735393);
let c = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let c = a.DY(t),
        { name: u, description: h } = c;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: d.CT,
                children: o.intl.string(o.t.Eabu1z),
            }),
            (0, i.jsxs)("div", {
                className: d.EB,
                children: [
                    (0, i.jsx)(r.Ay, {
                        mask: r.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, i.jsx)(l.Ay, { guild: c, size: l.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, i.jsxs)("div", {
                        className: d.OA,
                        children: [
                            (0, i.jsx)(s.Heading, { variant: "heading-sm/semibold", children: u }),
                            (0, i.jsxs)("div", {
                                className: d.aH,
                                children: [
                                    (0, i.jsx)("div", { className: d.Om }),
                                    null != n && n > 0
                                        ? (0, i.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              children: o.intl.format(o.t["LC+S+m"], { membersOnline: n }),
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
                (0, i.jsx)(s.Text, { color: "text-default", className: d.CT, variant: "text-sm/normal", children: h }),
        ],
    });
};
