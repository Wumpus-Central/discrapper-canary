t.d(e, { B: () => u });
var n = t(627968),
    r = t(64700),
    s = t(311907),
    i = t(397927),
    l = t(235986),
    c = t(962173),
    o = t(141241),
    d = t(365840),
    x = t(985018),
    m = t(974651);
function u(a) {
    let {
            platformType: e,
            onContinue: t,
            onClose: u,
            img: N,
            headerConnect: h,
            headerReconnect: p,
            body: j,
            learnMoreLink: C,
            valueProps: g,
        } = a,
        b = (0, s.bG)([c.A], () => {
            let a = c.A.getAccount(null, e);
            return a?.twoWayLink === !1;
        });
    return (0, n.jsxs)(o.A, {
        children: [
            (0, n.jsxs)(i.rQ0, {
                "data-migration-pending": !0,
                direction: l.A.Direction.VERTICAL,
                className: m.wx,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", { className: m.bm, children: [N, " "] }),
                    (0, n.jsx)(i.Heading, {
                        className: m.DD,
                        variant: "heading-xl/extrabold",
                        children: b && null != p ? p : h,
                    }),
                    (0, n.jsx)(i.s_y, { className: m.b, onClick: u }),
                ],
            }),
            (0, n.jsxs)(i.$mQ, {
                "data-migration-pending": !0,
                className: m.rf,
                children: [
                    (0, n.jsx)(i.Text, { tag: "p", variant: "text-md/normal", color: "text-default", children: j }),
                    (0, n.jsx)("div", {
                        className: m.Mh,
                        children: g.map((a, e) => {
                            let { label: t, subLabel: s, icon: i } = a;
                            return (0, n.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, n.jsx)(d.A, { label: t, subLabel: s, icon: i }, t),
                                        e !== g.length - 1 && (0, n.jsx)("div", { className: m.Cs }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                    null != C
                        ? (0, n.jsx)(i.Text, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: x.intl.format(x.t["/l3n+1"], { helpCenterLink: C }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(i.jlY, {
                "data-migration-pending": !0,
                className: m.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: m.wC,
                    children: (0, n.jsx)(i.Button, {
                        variant: "primary",
                        text: x.intl.string(x.t["3PatSz"]),
                        onClick: t,
                    }),
                }),
            }),
        ],
    });
}
