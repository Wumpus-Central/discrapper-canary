e.d(n, { Z: () => u });
var i = e(54381),
    a = e(473749),
    l = e(120356),
    s = e.n(l),
    r = e(481060),
    d = e(600164),
    o = e(539379),
    c = e(109983),
    m = e(834891),
    p = e(388032),
    g = e(797629);
function C(t) {
    let { guildTemplate: n, onClick: e, autoFocus: l } = t,
        s = a.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(c.Z, {
        icon: o.U[n.id],
        message: n.label,
        onClick: s,
        autoFocus: l,
    });
}
function u(t) {
    let { className: n, isNewUser: e, onClose: a, onChooseTemplate: l, onJoin: o } = t,
        c = (0, m.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                "data-migration-pending": !0,
                direction: d.Z.Direction.VERTICAL,
                className: g.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: g.title,
                        variant: "heading-xl/semibold",
                        children: e ? p.intl.string(p.t["9U0b1k"]) : p.intl.string(p.t["5HZu07"]),
                    }),
                    (0, i.jsx)(r.Text, {
                        className: g.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t["wti/H4"]),
                    }),
                    null != a &&
                        (0, i.jsx)(r.olH, {
                            "data-migration-pending": !0,
                            className: g.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, i.jsxs)(r.hzk, {
                "data-migration-pending": !0,
                className: s()(g.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.CREATE],
                        onClick: l,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(r.Text, {
                        className: g.optionHeader,
                        color: "header-secondary",
                        variant: "text-xs/bold",
                        children: p.intl.string(p.t.JGDkfg),
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.GAMING],
                        onClick: l,
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.FRIENDS],
                        onClick: l,
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.STUDY],
                        onClick: l,
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.SCHOOL_CLUB],
                        onClick: l,
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.LOCAL_COMMUNITY],
                        onClick: l,
                    }),
                    (0, i.jsx)(C, {
                        guildTemplate: c[m.l.CREATORS],
                        onClick: l,
                    }),
                ],
            }),
            null != o &&
                (0, i.jsxs)(r.mzw, {
                    "data-migration-pending": !0,
                    className: g.footer,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: g.footerTitle,
                            children: p.intl.string(p.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: g.footerButton,
                            children: (0, i.jsx)(r.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: p.intl.string(p.t.riOUtB),
                                onClick: o,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
