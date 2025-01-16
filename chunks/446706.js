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
    o = e(539379),
    c = e(109983),
    u = e(834891),
    C = e(388032),
    m = e(627769);
function p(t) {
    let { guildTemplate: n, onClick: e, autoFocus: a } = t,
        s = l.useCallback(() => {
            e(n);
        }, [n, e]);
    return (0, i.jsx)(c.Z, {
        icon: o.M[n.id],
        message: n.label,
        onClick: s,
        autoFocus: a
    });
}
function g(t) {
    let { className: n, isNewUser: e, onClose: l, onChooseTemplate: a, onJoin: o } = t,
        c = (0, u.E)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                direction: d.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: m.title,
                        variant: 'heading-xl/semibold',
                        children: e ? C.intl.string(C.t['9U0b1t']) : C.intl.string(C.t['5HZu09'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: m.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t['wti/Hx'])
                    }),
                    null != l &&
                        (0, i.jsx)(r.ModalCloseButton, {
                            className: m.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(r.ModalContent, {
                className: s()(m.templatesList, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.CREATE],
                        onClick: a,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(r.Text, {
                        className: m.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: C.intl.string(C.t.JGDkfn)
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.GAMING],
                        onClick: a
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.SCHOOL_CLUB],
                        onClick: a
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.STUDY],
                        onClick: a
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.FRIENDS],
                        onClick: a
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.CREATORS],
                        onClick: a
                    }),
                    (0, i.jsx)(p, {
                        guildTemplate: c[u.l.LOCAL_COMMUNITY],
                        onClick: a
                    })
                ]
            }),
            null != o &&
                (0, i.jsxs)(r.ModalFooter, {
                    className: m.footer,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            className: m.footerTitle,
                            children: C.intl.string(C.t['N+Mi/f'])
                        }),
                        (0, i.jsx)(r.Button, {
                            className: m.footerButton,
                            color: r.Button.Colors.PRIMARY,
                            onClick: o,
                            children: C.intl.string(C.t.riOUtL)
                        })
                    ]
                })
        ]
    });
}
