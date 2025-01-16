n.r(e), n(47120);
var r = n(200651);
n(192379);
var o = n(435935),
    i = n(481060),
    a = n(259756),
    c = n(785681),
    s = n(880257),
    l = n(863552),
    d = n(292352),
    h = n(388032),
    C = n(324392),
    x = n(128216);
let u = {
        [d.MY.USER_INTERACTION]: (0, r.jsx)(l.Z, {
            width: 18,
            height: 18
        }),
        [d.MY.USER_CALLED]: (0, r.jsx)(i.PhoneCallIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.USER_ADD]: (0, r.jsx)(i.FriendsIcon, {
            size: 'custom',
            color: 'currentColor',
            className: C.personWavingIcon,
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_ADD]: (0, r.jsx)(i.ServerGridIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_INTERACTION]: (0, r.jsx)(i.TextIcon, {
            size: 'custom',
            color: 'currentColor',
            className: C.threadIcon,
            width: 22,
            height: 22
        })
    },
    m = (t) => {
        let { header: e, description: n, icon: a } = t;
        return (0, r.jsxs)(o.k, {
            className: C.row,
            grow: 0,
            children: [
                (0, r.jsx)('div', {
                    className: C.iconContainer,
                    children: a
                }),
                (0, r.jsxs)('div', {
                    className: C.rowContent,
                    children: [
                        (0, r.jsx)(i.Text, {
                            className: C.__invalid_rowHeader,
                            variant: 'text-sm/bold',
                            children: e
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-xs/medium',
                            children: n
                        })
                    ]
                })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, onClose: n } = t,
        l = (0, c.o)(h.intl.string(h.t.q3IRam), h.intl.string(h.t.JNLpDQ)),
        _ = (0, s.Z)(),
        g = Array.from(d.tx.entries()),
        j = (0, a.Xi)({ location: 'family_center_tooltip_modal_web' });
    return (0, r.jsxs)(i.ModalRoot, {
        transitionState: e,
        children: [
            (0, r.jsx)('img', {
                className: C.art,
                src: x,
                alt: h.intl.string(h.t.ffg6xc)
            }),
            (0, r.jsx)(i.ModalContent, {
                className: C.content,
                children: (0, r.jsxs)(o.k, {
                    direction: o.k.Direction.VERTICAL,
                    align: o.k.Align.CENTER,
                    children: [
                        (0, r.jsx)(i.Heading, {
                            className: C.header,
                            color: 'header-primary',
                            variant: 'heading-lg/semibold',
                            children: (0, r.jsx)(i.HeadingLevel, { children: l })
                        }),
                        g.map((t) => {
                            let [e, n] = t;
                            return (0, r.jsx)(
                                m,
                                {
                                    icon: u[e],
                                    header: n.tooltipHeader(),
                                    description: n.tooltipDescription(null != _ ? _ : void 0, j)
                                },
                                e
                            );
                        })
                    ]
                })
            }),
            (0, r.jsx)(i.ModalFooter, {
                children: (0, r.jsx)(i.Button, {
                    className: C.__invalid_button,
                    type: 'button',
                    color: i.Button.Colors.BRAND,
                    onClick: n,
                    children: h.intl.string(h.t['NX+WJC'])
                })
            })
        ]
    });
};
