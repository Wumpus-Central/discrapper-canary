(r.d(t, { default: () => g }), r(953529), r(388685));
var n = r(255367);
r(73800);
var o = r(435935),
    i = r(481060),
    c = r(259756),
    l = r(785681),
    s = r(880257),
    a = r(863552),
    d = r(292352),
    h = r(916723),
    u = r(388032),
    p = r(81718),
    f = r(128216);
let C = {
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
            className: p.personWavingIcon,
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
            className: p.threadIcon,
            width: 22,
            height: 22
        })
    },
    j = (e) => {
        let { header: t, description: r, icon: c } = e;
        return (0, n.jsxs)(o.k, {
            className: p.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: p.iconContainer,
                    children: c
                }),
                (0, n.jsxs)('div', {
                    className: p.rowContent,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: p.__invalid_rowHeader,
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
            a = (0, l.o)(u.intl.string(h.default.q3IRam), u.intl.string(h.default.JNLpDQ)),
            g = (0, s.Z)(),
            m = Array.from(d.tx.entries()),
            b = (0, c.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            parentComponent: 'FamilyCenterDataTooltipModal',
            children: [
                (0, n.jsx)('img', {
                    className: p.art,
                    src: f,
                    alt: u.intl.string(h.default.ffg6xc)
                }),
                (0, n.jsx)(i.hzk, {
                    className: p.content,
                    children: (0, n.jsxs)(o.k, {
                        direction: o.k.Direction.VERTICAL,
                        align: o.k.Align.CENTER,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                className: p.header,
                                color: 'header-primary',
                                variant: 'heading-lg/semibold',
                                children: (0, n.jsx)(i.y5t, { children: a })
                            }),
                            m.map((e) => {
                                let [t, r] = e;
                                return (0, n.jsx)(
                                    j,
                                    {
                                        icon: C[t],
                                        header: r.tooltipHeader(),
                                        description: r.tooltipDescription(null != g ? g : void 0, b)
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
