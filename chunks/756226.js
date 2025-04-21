r.d(t, { default: () => g }), r(953529), r(388685);
var n = r(200651);
r(192379);
var o = r(435935),
    i = r(481060),
    c = r(259756),
    s = r(785681),
    l = r(880257),
    a = r(863552),
    d = r(292352),
    h = r(332495),
    u = r(388032),
    f = r(81718),
    p = r(128216);
let j = {
        [d.MY.USER_INTERACTION]: (0, n.jsx)(a.Z, {
            width: 18,
            height: 18
        }),
        [d.MY.USER_CALLED]: (0, n.jsx)(i.Csw, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.USER_ADD]: (0, n.jsx)(i.iFz, {
            size: 'custom',
            color: 'currentColor',
            className: f.personWavingIcon,
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_ADD]: (0, n.jsx)(i.dRF, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_INTERACTION]: (0, n.jsx)(i.VL1, {
            size: 'custom',
            color: 'currentColor',
            className: f.threadIcon,
            width: 22,
            height: 22
        })
    },
    C = (e) => {
        let { header: t, description: r, icon: c } = e;
        return (0, n.jsxs)(o.k, {
            className: f.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: f.iconContainer,
                    children: c
                }),
                (0, n.jsxs)('div', {
                    className: f.rowContent,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: f.__invalid_rowHeader,
                            variant: 'text-sm/bold',
                            children: t
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/medium',
                            children: r
                        })
                    ]
                })
            ]
        });
    },
    g = (e) => {
        let { transitionState: t, onClose: r } = e,
            a = (0, s.o)(u.intl.string(h.default.q3IRam), u.intl.string(h.default.JNLpDQ)),
            g = (0, l.Z)(),
            b = Array.from(d.tx.entries()),
            x = (0, c.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsx)('img', {
                    className: f.art,
                    src: p,
                    alt: u.intl.string(h.default.ffg6xc)
                }),
                (0, n.jsx)(i.hzk, {
                    className: f.content,
                    children: (0, n.jsxs)(o.k, {
                        direction: o.k.Direction.VERTICAL,
                        align: o.k.Align.CENTER,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                className: f.header,
                                color: 'header-primary',
                                variant: 'heading-lg/semibold',
                                children: (0, n.jsx)(i.y5t, { children: a })
                            }),
                            b.map((e) => {
                                let [t, r] = e;
                                return (0, n.jsx)(
                                    C,
                                    {
                                        icon: j[t],
                                        header: r.tooltipHeader(),
                                        description: r.tooltipDescription(null != g ? g : void 0, x)
                                    },
                                    t
                                );
                            })
                        ]
                    })
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.zxk, {
                        type: 'button',
                        color: i.zxk.Colors.BRAND,
                        onClick: r,
                        children: u.intl.string(u.t['NX+WJC'])
                    })
                })
            ]
        });
    };
