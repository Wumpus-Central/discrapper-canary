t.d(e, { B: () => p });
var n = t(627968),
    r = t(64700),
    s = t(311907),
    i = t(935462),
    l = t(534514),
    c = t(834730),
    o = t(821609),
    d = t(235986),
    m = t(962173),
    x = t(141241),
    u = t(365840),
    N = t(985018),
    h = t(974651);
function p(a) {
    let {
            platformType: e,
            onContinue: t,
            onClose: p,
            img: j,
            headerConnect: C,
            headerReconnect: g,
            body: b,
            learnMoreLink: v,
            valueProps: E,
        } = a,
        k = (0, s.bG)([m.A], () => {
            let a = m.A.getAccount(null, e);
            return a?.twoWayLink === !1;
        });
    return (0, n.jsxs)(x.A, {
        children: [
            (0, n.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: h.wx,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", { className: h.bm, children: [j, " "] }),
                    (0, n.jsx)(l.D, {
                        className: h.DD,
                        variant: "heading-xl/extrabold",
                        children: k && null != g ? g : C,
                    }),
                    (0, n.jsx)(i.s_, { className: h.b, onClick: p }),
                ],
            }),
            (0, n.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: h.rf,
                children: [
                    (0, n.jsx)(c.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: b }),
                    (0, n.jsx)("div", {
                        className: h.Mh,
                        children: E.map((a, e) => {
                            let { label: t, subLabel: s, icon: i } = a;
                            return (0, n.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, n.jsx)(u.A, { label: t, subLabel: s, icon: i }, t),
                                        e !== E.length - 1 && (0, n.jsx)("div", { className: h.Cs }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                    null != v
                        ? (0, n.jsx)(c.E, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: N.intl.format(N.t["/l3n+1"], { helpCenterLink: v }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(i.jl, {
                "data-migration-pending": !0,
                className: h.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: h.wC,
                    children: (0, n.jsx)(o.$, { variant: "primary", text: N.intl.string(N.t["3PatSz"]), onClick: t }),
                }),
            }),
        ],
    });
}
