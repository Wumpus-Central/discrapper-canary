t.d(e, { B: () => p });
var n = t(477900),
    r = t(582128),
    s = t(17928),
    i = t(935462),
    l = t(534514),
    c = t(834730),
    o = t(821609),
    d = t(235986),
    m = t(30370),
    u = t(936525),
    x = t(844768);
let N = function (a) {
    let { label: e, subLabel: t, icon: r } = a;
    return (0, n.jsxs)("div", {
        className: x.Lw,
        children: [
            (0, n.jsx)("div", { className: x.j3, children: (0, n.jsx)(r, { size: "md", color: "currentColor" }) }),
            (0, n.jsxs)("div", {
                className: x.ET,
                children: [
                    (0, n.jsx)(c.E, { variant: "body-sm/medium", color: "text-default", children: e }),
                    null != t && (0, n.jsx)(c.E, { variant: "body-xs/normal", color: "text-subtle", children: t }),
                ],
            }),
        ],
    });
};
var h = t(105292);
function p(a) {
    let {
            platformType: e,
            onContinue: t,
            onClose: p,
            img: j,
            headerConnect: b,
            headerReconnect: g,
            body: C,
            learnMoreLink: v,
            valueProps: E,
        } = a,
        k = (0, s.bG)([m.A], () => {
            let a = m.A.getAccount(null, e);
            return a?.twoWayLink === !1;
        });
    return (0, n.jsxs)(u.A, {
        children: [
            (0, n.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: x.wx,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", { className: x.bm, children: [j, " "] }),
                    (0, n.jsx)(l.D, {
                        className: x.DD,
                        variant: "heading-xl/semibold",
                        children: k && null != g ? g : b,
                    }),
                    (0, n.jsx)(i.s_, { "data-migration-pending": !0, className: x.b, onClick: p }),
                ],
            }),
            (0, n.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: x.rf,
                children: [
                    (0, n.jsx)(c.E, { tag: "p", variant: "body-md/normal", color: "text-default", children: C }),
                    (0, n.jsx)("div", {
                        className: x.Mh,
                        children: E.map((a, e) => {
                            let { label: t, subLabel: s, icon: i } = a;
                            return (0, n.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, n.jsx)(N, { label: t, subLabel: s, icon: i }, t),
                                        e !== E.length - 1 && (0, n.jsx)("div", { className: x.Cs }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                    null != v
                        ? (0, n.jsx)(c.E, {
                              tag: "p",
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: h.intl.format(h.t["/l3n+1"], { helpCenterLink: v }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(i.jl, {
                "data-migration-pending": !0,
                className: x.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.wC,
                    children: (0, n.jsx)(o.$, { variant: "primary", text: h.intl.string(h.t["3PatSz"]), onClick: t }),
                }),
            }),
        ],
    });
}
