n.d(e, { B: () => p });
var t = n(477900),
    r = n(582128),
    s = n(855986),
    i = n(935462),
    l = n(534514),
    c = n(834730),
    o = n(821609),
    d = n(235986),
    m = n(417869),
    u = n(936525),
    x = n(844768);
let N = function (a) {
    let { label: e, subLabel: n, icon: r } = a;
    return (0, t.jsxs)("div", {
        className: x.Lw,
        children: [
            (0, t.jsx)("div", { className: x.j3, children: (0, t.jsx)(r, { size: "md", color: "currentColor" }) }),
            (0, t.jsxs)("div", {
                className: x.ET,
                children: [
                    (0, t.jsx)(c.E, { variant: "body-sm/medium", color: "text-default", children: e }),
                    null != n && (0, t.jsx)(c.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
};
var h = n(792996);
function p(a) {
    let {
            platformType: e,
            onContinue: n,
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
    return (0, t.jsxs)(u.A, {
        children: [
            (0, t.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: x.wx,
                separator: !1,
                children: [
                    (0, t.jsxs)("div", { className: x.bm, children: [j, " "] }),
                    (0, t.jsx)(l.D, {
                        className: x.DD,
                        variant: "heading-xl/semibold",
                        children: k && null != g ? g : b,
                    }),
                    (0, t.jsx)(i.s_, { "data-migration-pending": !0, className: x.b, onClick: p }),
                ],
            }),
            (0, t.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: x.rf,
                children: [
                    (0, t.jsx)(c.E, { tag: "p", variant: "body-md/normal", color: "text-default", children: C }),
                    (0, t.jsx)("div", {
                        className: x.Mh,
                        children: E.map((a, e) => {
                            let { label: n, subLabel: s, icon: i } = a;
                            return (0, t.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, t.jsx)(N, { label: n, subLabel: s, icon: i }, n),
                                        e !== E.length - 1 && (0, t.jsx)("div", { className: x.Cs }),
                                    ],
                                },
                                n,
                            );
                        }),
                    }),
                    null != v
                        ? (0, t.jsx)(c.E, {
                              tag: "p",
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: h.intl.format(h.t["/l3n+1"], { helpCenterLink: v }),
                          })
                        : null,
                ],
            }),
            (0, t.jsx)(i.jl, {
                "data-migration-pending": !0,
                className: x.qr,
                children: (0, t.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.wC,
                    children: (0, t.jsx)(o.$, { variant: "primary", text: h.intl.string(h.t["3PatSz"]), onClick: n }),
                }),
            }),
        ],
    });
}
