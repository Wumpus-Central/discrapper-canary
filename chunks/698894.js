"use strict";
s.d(t, { r: () => x });
var a = s(627968),
    r = s(64700),
    n = s(333748),
    i = s(534514),
    l = s(834730),
    o = s(821609),
    c = s(647053),
    d = s(985018),
    u = s(313338),
    h = s(806782),
    p = s(277606);
let x = (e) => {
    let { onComplete: t, data: s } = e,
        x = (0, r.useId)(),
        f = null,
        _ = null,
        m = s.scopes.some((e) => (0, c.RM)(e));
    return (
        s.clientId === n.i.PLAYSTATION_APPLICATION_ID || s.clientId === n.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (f = h.A)
            : m && (f = p.A),
        null != s.twoWayLinkCode ? (_ = d.intl.string(d.t.QhATl2)) : m && (_ = d.intl.string(d.t.vBPvK3)),
        (0, a.jsxs)("div", {
            className: u.Qs,
            children: [
                null != f ? (0, a.jsx)("img", { src: f, className: u.xX, alt: "", "aria-labelledby": x }) : null,
                (0, a.jsxs)("div", {
                    className: u.gx,
                    children: [
                        (0, a.jsx)(i.D, {
                            variant: "heading-xl/extrabold",
                            id: x,
                            children: d.intl.string(d.t.qDtJmD),
                        }),
                        null != _
                            ? (0, a.jsx)(l.E, { variant: "text-md/normal", color: "text-default", children: _ })
                            : null,
                    ],
                }),
                (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.wC,
                    children: (0, a.jsx)(o.$, { variant: "primary", text: d.intl.string(d.t.i4jeWR), onClick: t }),
                }),
            ],
        })
    );
};
