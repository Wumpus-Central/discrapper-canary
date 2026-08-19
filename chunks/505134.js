t.d(e, { B: () => p });
var r = t(477900),
    n = t(582128),
    s = t(17928),
    l = t(935462),
    i = t(297264),
    c = t(834730),
    o = t(821609),
    d = t(235986),
    m = t(30370),
    x = t(936525),
    u = t(952052);
let N = function (a) {
    let { label: e, subLabel: t, icon: n } = a;
    return (0, r.jsxs)("div", {
        className: u.Lw,
        children: [
            (0, r.jsx)("div", { className: u.j3, children: (0, r.jsx)(n, { size: "md", color: "currentColor" }) }),
            (0, r.jsxs)("div", {
                className: u.ET,
                children: [
                    (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: e }),
                    null != t && (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: t }),
                ],
            }),
        ],
    });
};
var h = t(375708);
function p(a) {
    let {
            platformType: e,
            onContinue: t,
            onClose: p,
            img: j,
            headerConnect: g,
            headerReconnect: C,
            body: b,
            learnMoreLink: v,
            valueProps: E,
        } = a,
        k = (0, s.bG)([m.A], () => {
            let a = m.A.getAccount(null, e);
            return a?.twoWayLink === !1;
        });
    return (0, r.jsxs)(x.A, {
        children: [
            (0, r.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: u.wx,
                separator: !1,
                children: [
                    (0, r.jsxs)("div", { className: u.bm, children: [j, " "] }),
                    (0, r.jsx)(i.D, {
                        className: u.DD,
                        variant: "heading-xl/extrabold",
                        children: k && null != C ? C : g,
                    }),
                    (0, r.jsx)(l.s_, { "data-migration-pending": !0, className: u.b, onClick: p }),
                ],
            }),
            (0, r.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: u.rf,
                children: [
                    (0, r.jsx)(c.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: b }),
                    (0, r.jsx)("div", {
                        className: u.Mh,
                        children: E.map((a, e) => {
                            let { label: t, subLabel: s, icon: l } = a;
                            return (0, r.jsxs)(
                                n.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(N, { label: t, subLabel: s, icon: l }, t),
                                        e !== E.length - 1 && (0, r.jsx)("div", { className: u.Cs }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                    null != v
                        ? (0, r.jsx)(c.E, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: h.intl.format(h.t["/l3n+1"], { helpCenterLink: v }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(l.jl, {
                "data-migration-pending": !0,
                className: u.qr,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.wC,
                    children: (0, r.jsx)(o.$, { variant: "primary", text: h.intl.string(h.t["3PatSz"]), onClick: t }),
                }),
            }),
        ],
    });
}
