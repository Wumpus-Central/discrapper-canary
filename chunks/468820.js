n.d(e, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    d = n(235986),
    c = n(450565),
    o = n(878314),
    m = n(570465),
    p = n(985018),
    C = n(651614);
function g(t) {
    let { guildTemplate: e, onClick: n, autoFocus: r } = t,
        l = a.useCallback(() => {
            n(e);
        }, [e, n]);
    return (0, i.jsx)(o.A, { icon: c.a[e.id], message: e.label, onClick: l, autoFocus: r });
}
function _(t) {
    let { className: e, isNewUser: n, onClose: a, onChooseTemplate: r, onJoin: c } = t,
        o = (0, m.p)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: C.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: C.DD,
                        variant: "heading-xl/semibold",
                        children: n ? p.intl.string(p.t["9U0b1k"]) : p.intl.string(p.t["5HZu07"]),
                    }),
                    (0, i.jsx)(s.Text, {
                        className: C.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t["wti/H4"]),
                    }),
                    null != a && (0, i.jsx)(s.s_y, { "data-migration-pending": !0, className: C.b, onClick: a }),
                ],
            }),
            (0, i.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: l()(C.KA, e),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(g, { guildTemplate: o[m.v.CREATE], onClick: r, autoFocus: !0 }),
                    (0, i.jsx)(s.Text, {
                        className: C.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: p.intl.string(p.t.JGDkfg),
                    }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.GAMING], onClick: r }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.FRIENDS], onClick: r }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.STUDY], onClick: r }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.SCHOOL_CLUB], onClick: r }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.LOCAL_COMMUNITY], onClick: r }),
                    (0, i.jsx)(g, { guildTemplate: o[m.v.CREATORS], onClick: r }),
                ],
            }),
            null != c &&
                (0, i.jsxs)(s.jlY, {
                    "data-migration-pending": !0,
                    className: C.qr,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            className: C.K8,
                            children: p.intl.string(p.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: C.wC,
                            children: (0, i.jsx)(s.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: p.intl.string(p.t.riOUtB),
                                onClick: c,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
