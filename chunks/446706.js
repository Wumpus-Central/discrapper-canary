n.d(t, { Z: () => L });
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    d = n(600164),
    c = n(540059),
    o = n(539379),
    C = n(109983),
    m = n(834891),
    p = n(388032),
    N = n(867562);
function u(e) {
    let { guildTemplate: t, onClick: n, autoFocus: a } = e,
        l = (0, c.Q3)('GuildTemplatesItem'),
        r = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(C.Z, {
        icon: l ? o.U[t.id] : o.M[t.id],
        message: t.label,
        onClick: r,
        autoFocus: a
    });
}
function L(e) {
    let { className: t, isNewUser: n, onClose: s, onChooseTemplate: a, onJoin: c } = e,
        o = (0, m.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: n ? p.NW.string(p.t['9U0b1t']) : p.NW.string(p.t['5HZu09'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: p.NW.string(p.t['wti/Hx'])
                    }),
                    null != s &&
                        (0, i.jsx)(r.olH, {
                            className: N.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: l()(N.templatesList, t),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.CREATE],
                        onClick: a,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(r.Text, {
                        className: N.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: p.NW.string(p.t.JGDkfn)
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.GAMING],
                        onClick: a
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.FRIENDS],
                        onClick: a
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.STUDY],
                        onClick: a
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.SCHOOL_CLUB],
                        onClick: a
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.LOCAL_COMMUNITY],
                        onClick: a
                    }),
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.CREATORS],
                        onClick: a
                    })
                ]
            }),
            null != c &&
                (0, i.jsxs)(r.mzw, {
                    className: N.footer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            className: N.footerTitle,
                            children: p.NW.string(p.t['N+Mi/f'])
                        }),
                        (0, i.jsx)(r.zxk, {
                            className: N.footerButton,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: c,
                            children: p.NW.string(p.t.riOUtL)
                        })
                    ]
                })
        ]
    });
}
