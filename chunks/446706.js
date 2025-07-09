e.d(n, { Z: () => _ });
var i = e(255367),
    l = e(73800),
    a = e(120356),
    s = e.n(a),
    r = e(481060),
    d = e(600164),
    c = e(539379),
    o = e(109983),
    m = e(834891),
    C = e(388032),
    p = e(867562);
function u(t) {
    let { guildTemplate: n, onClick: e, autoFocus: a } = t,
        s = l.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(o.Z, {
        icon: c.U[n.id],
        message: n.label,
        onClick: s,
        autoFocus: a
    });
}
function _(t) {
    let { className: n, isNewUser: e, onClose: l, onChooseTemplate: a, onJoin: c } = t,
        o = (0, m.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: p.title,
                        variant: 'heading-xl/semibold',
                        children: e ? C.intl.string(C.t['9U0b1t']) : C.intl.string(C.t['5HZu09'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t['wti/Hx'])
                    }),
                    null != l &&
                        (0, i.jsx)(r.olH, {
                            className: p.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: s()(p.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(u, {
                        guildTemplate: o[m.l.CREATE],
                        onClick: a,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: C.intl.string(C.t.JGDkfn)
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
                    className: p.footer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            className: p.footerTitle,
                            children: C.intl.string(C.t['N+Mi/f'])
                        }),
                        (0, i.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: p.footerButton,
                            children: (0, i.jsx)(r.zxk, {
                                variant: 'secondary',
                                fullWidth: !0,
                                text: C.intl.string(C.t.riOUtL),
                                onClick: c
                            })
                        })
                    ]
                })
        ]
    });
}
