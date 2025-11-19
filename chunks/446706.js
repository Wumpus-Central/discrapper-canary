e.d(n, { Z: () => g });
var i = e(54381),
    l = e(473749),
    a = e(120356),
    s = e.n(a),
    r = e(481060),
    d = e(600164),
    c = e(539379),
    o = e(109983),
    C = e(834891),
    m = e(388032),
    p = e(384955);
function u(t) {
    let { guildTemplate: n, onClick: e, autoFocus: a } = t,
        s = l.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(o.Z, {
        icon: c.U[n.id],
        message: n.label,
        onClick: s,
        autoFocus: a,
    });
}
function g(t) {
    let { className: n, isNewUser: e, onClose: l, onChooseTemplate: a, onJoin: c } = t,
        o = (0, C.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: p.title,
                        variant: "heading-xl/semibold",
                        children: e ? m.intl.string(m.t["9U0b1k"]) : m.intl.string(m.t["5HZu07"]),
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: m.intl.string(m.t["wti/H4"]),
                    }),
                    null != l &&
                        (0, i.jsx)(r.olH, {
                            className: p.closeButton,
                            onClick: l,
                        }),
                ],
            }),
            (0, i.jsxs)(r.hzk, {
                className: s()(p.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.CREATE],
                        onClick: a,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.optionHeader,
                        color: "header-secondary",
                        variant: "text-xs/bold",
                        children: m.intl.string(m.t.JGDkfg),
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.GAMING],
                        onClick: a,
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.FRIENDS],
                        onClick: a,
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.STUDY],
                        onClick: a,
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.SCHOOL_CLUB],
                        onClick: a,
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.LOCAL_COMMUNITY],
                        onClick: a,
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[C.l.CREATORS],
                        onClick: a,
                    }),
                ],
            }),
            null != c &&
                (0, i.jsxs)(r.mzw, {
                    className: p.footer,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: p.footerTitle,
                            children: m.intl.string(m.t["N+Mi/U"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.footerButton,
                            children: (0, i.jsx)(r.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: m.intl.string(m.t.riOUtB),
                                onClick: c,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
