n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(600164),
    o = n(109983),
    r = n(120298),
    c = n(486527),
    d = n(388032),
    u = n(153116);
function m(e) {
    let { guildTemplate: t, onClick: n, autoFocus: s } = e,
        a = l.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(o.Z, {
        icon: r.M[t.id],
        message: t.label,
        onClick: a,
        autoFocus: s
    });
}
function C(e) {
    let { onClose: t, onBack: n, onChooseTemplate: l, directoryGuildName: o } = e,
        r = (0, c.Pp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: a.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.format(d.t.T7aLYW, { guildName: o })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['RA+St7'])
                    }),
                    null != t &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: u.closeButton,
                            onClick: t
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: u.templatesList,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(m, {
                        guildTemplate: {
                            ...r[c.sE.CREATE],
                            label: d.intl.string(d.t.WqJbLi)
                        },
                        onClick: l
                    }),
                    (0, i.jsx)(s.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: d.intl.string(d.t.JGDkfn)
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_STUDY],
                        onClick: l
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_SCHOOL_CLUB],
                        onClick: l
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_CLASS],
                        onClick: l
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_SOCIAL],
                        onClick: l
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_MAJOR],
                        onClick: l
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: r[c.sE.HUB_DORM],
                        onClick: l
                    })
                ]
            }),
            (0, i.jsx)(s.ModalFooter, {
                className: u.footer,
                children: (0, i.jsx)(s.Button, {
                    className: u.backButton,
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: n,
                    children: d.intl.string(d.t['13/7kZ'])
                })
            })
        ]
    });
}
