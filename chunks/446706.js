e.d(n, {
    Z: function () {
        return g;
    }
});
var i = e(200651),
    l = e(192379),
    a = e(120356),
    s = e.n(a),
    r = e(481060),
    d = e(600164),
    o = e(540059),
    c = e(539379),
    u = e(109983),
    C = e(834891),
    m = e(388032),
    p = e(627769);
function L(t) {
    let { guildTemplate: n, onClick: e, autoFocus: a } = t,
        s = (0, o.Q3)('GuildTemplatesItem'),
        r = l.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(u.Z, {
        icon: s ? c.U[n.id] : c.M[n.id],
        message: n.label,
        onClick: r,
        autoFocus: a
    });
}
function g(t) {
    let { className: n, isNewUser: e, onClose: l, onChooseTemplate: a, onJoin: o } = t,
        c = (0, C.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                direction: d.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: p.title,
                        variant: 'heading-xl/semibold',
                        children: e ? m.intl.string(m.t['9U0b1t']) : m.intl.string(m.t['5HZu09'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t['wti/Hx'])
                    }),
                    null != l &&
                        (0, i.jsx)(r.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(r.ModalContent, {
                className: s()(p.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.CREATE],
                        onClick: a,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: m.intl.string(m.t.JGDkfn)
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.GAMING],
                        onClick: a
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.FRIENDS],
                        onClick: a
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.STUDY],
                        onClick: a
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.SCHOOL_CLUB],
                        onClick: a
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.LOCAL_COMMUNITY],
                        onClick: a
                    }),
                    (0, i.jsx)(L, {
                        guildTemplate: c[C.l.CREATORS],
                        onClick: a
                    })
                ]
            }),
            null != o &&
                (0, i.jsxs)(r.ModalFooter, {
                    className: p.footer,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            className: p.footerTitle,
                            children: m.intl.string(m.t['N+Mi/f'])
                        }),
                        (0, i.jsx)(r.Button, {
                            className: p.footerButton,
                            color: r.Button.Colors.PRIMARY,
                            onClick: o,
                            children: m.intl.string(m.t.riOUtL)
                        })
                    ]
                })
        ]
    });
}
