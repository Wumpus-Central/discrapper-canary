i.d(t, { Z: () => x });
var n = i(200651),
    s = i(192379),
    l = i(481060),
    a = i(600164),
    r = i(109983),
    o = i(120298),
    c = i(486527),
    d = i(388032),
    u = i(403750);
function m(e) {
    let { guildTemplate: t, onClick: i, autoFocus: l } = e,
        a = s.useCallback(() => {
            i(t);
        }, [t, i]);
    return (0, n.jsx)(r.Z, {
        icon: o.M[t.id],
        message: t.label,
        onClick: a,
        autoFocus: l
    });
}
function x(e) {
    let { onClose: t, onBack: i, onChooseTemplate: s, directoryGuildName: r } = e,
        o = (0, c.Pp)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                direction: a.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.format(d.t.T7aLYW, { guildName: r })
                    }),
                    (0, n.jsx)(l.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['RA+St7'])
                    }),
                    null != t &&
                        (0, n.jsx)(l.olH, {
                            className: u.closeButton,
                            onClick: t
                        })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: u.templatesList,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(m, {
                        guildTemplate: {
                            ...o[c.sE.CREATE],
                            label: d.intl.string(d.t.WqJbLi)
                        },
                        onClick: s
                    }),
                    (0, n.jsx)(l.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: d.intl.string(d.t.JGDkfn)
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_STUDY],
                        onClick: s
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_SCHOOL_CLUB],
                        onClick: s
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_CLASS],
                        onClick: s
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_SOCIAL],
                        onClick: s
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_MAJOR],
                        onClick: s
                    }),
                    (0, n.jsx)(m, {
                        guildTemplate: o[c.sE.HUB_DORM],
                        onClick: s
                    })
                ]
            }),
            (0, n.jsx)(l.mzw, {
                className: u.footer,
                children: (0, n.jsx)(l.zxk, {
                    className: u.backButton,
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    onClick: i,
                    children: d.intl.string(d.t['13/7kZ'])
                })
            })
        ]
    });
}
