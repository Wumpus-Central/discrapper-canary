"use strict";
a.d(t, { r: () => h });
var s = a(627968),
    r = a(64700),
    n = a(333748),
    i = a(397927),
    l = a(647053),
    o = a(985018),
    c = a(856229),
    d = a(806782),
    u = a(277606);
let h = (e) => {
    let { onComplete: t, data: a } = e,
        h = (0, r.useId)(),
        p = null,
        x = null,
        f = a.scopes.some((e) => (0, l.RM)(e));
    return (
        a.clientId === n.i.PLAYSTATION_APPLICATION_ID || a.clientId === n.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (p = d.A)
            : f && (p = u.A),
        null != a.twoWayLinkCode ? (x = o.intl.string(o.t.QhATl2)) : f && (x = o.intl.string(o.t.vBPvK3)),
        (0, s.jsxs)("div", {
            className: c.Qs,
            children: [
                null != p ? (0, s.jsx)("img", { src: p, className: c.xX, alt: "", "aria-labelledby": h }) : null,
                (0, s.jsxs)("div", {
                    className: c.gx,
                    children: [
                        (0, s.jsx)(i.Heading, {
                            variant: "heading-xl/extrabold",
                            id: h,
                            children: o.intl.string(o.t.qDtJmD),
                        }),
                        null != x
                            ? (0, s.jsx)(i.Text, { variant: "text-md/normal", color: "text-default", children: x })
                            : null,
                    ],
                }),
                (0, s.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: c.wC,
                    children: (0, s.jsx)(i.Button, { variant: "primary", text: o.intl.string(o.t.i4jeWR), onClick: t }),
                }),
            ],
        })
    );
};
