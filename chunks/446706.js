e.d(n, { Z: () => _ });
var i = e(255367),
    l = e(73800),
    s = e(120356),
    a = e.n(s),
    r = e(481060),
    d = e(600164),
    c = e(540059),
    o = e(539379),
    C = e(109983),
    m = e(834891),
    p = e(388032),
    u = e(867562);
function L(t) {
    let { guildTemplate: n, onClick: e, autoFocus: s } = t,
        a = (0, c.Q3)('GuildTemplatesItem'),
        r = l.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(C.Z, {
        icon: a ? o.U[n.id] : o.M[n.id],
        message: n.label,
        onClick: r,
        autoFocus: s
    });
}
function _(t) {
    let { className: n, isNewUser: e, onClose: l, onChooseTemplate: s, onJoin: c } = t,
        o = (0, m.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: e ? p.intl.string(p.t['9U0b1t']) : p.intl.string(p.t['5HZu09'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: p.intl.string(p.t['wti/Hx'])
                    }),
                    null != l &&
                        (0, i.jsx)(r.olH, {
                            className: u.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: a()(u.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.CREATE],
                        onClick: s,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(r.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: p.intl.string(p.t.JGDkfn)
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.GAMING],
                        onClick: s
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.FRIENDS],
                        onClick: s
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.STUDY],
                        onClick: s
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.SCHOOL_CLUB],
                        onClick: s
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.LOCAL_COMMUNITY],
                        onClick: s
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: o[m.l.CREATORS],
                        onClick: s
                    })
                ]
            }),
            null != c &&
                (0, i.jsxs)(r.mzw, {
                    className: u.footer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            className: u.footerTitle,
                            children: p.intl.string(p.t['N+Mi/f'])
                        }),
                        (0, i.jsx)(r.zxk, {
                            className: u.footerButton,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: c,
                            children: p.intl.string(p.t.riOUtL)
                        })
                    ]
                })
        ]
    });
}
