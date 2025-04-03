r.d(t, { default: () => g }), r(266796), r(47120);
var n = r(200651);
r(192379);
var o = r(435935),
    i = r(481060),
    c = r(259756),
    s = r(785681),
    a = r(880257),
    l = r(863552),
    h = r(292352),
    d = r(332495),
    u = r(388032),
    p = r(81718),
    f = r(128216);
let j = {
        [h.MY.USER_INTERACTION]: (0, n.jsx)(l.Z, {
            width: 18,
            height: 18
        }),
        [h.MY.USER_CALLED]: (0, n.jsx)(i.Csw, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [h.MY.USER_ADD]: (0, n.jsx)(i.iFz, {
            size: 'custom',
            color: 'currentColor',
            className: p.personWavingIcon,
            width: 22,
            height: 22
        }),
        [h.MY.GUILD_ADD]: (0, n.jsx)(i.dRF, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [h.MY.GUILD_INTERACTION]: (0, n.jsx)(i.VL1, {
            size: 'custom',
            color: 'currentColor',
            className: p.threadIcon,
            width: 22,
            height: 22
        })
    },
    C = (e) => {
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
            l = (0, s.o)(u.NW.string(d.Z.q3IRam), u.NW.string(d.Z.JNLpDQ)),
            g = (0, a.Z)(),
            b = Array.from(h.tx.entries()),
            x = (0, c.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsx)('img', {
                    className: p.art,
                    src: f,
                    alt: u.NW.string(d.Z.ffg6xc)
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
                                children: (0, n.jsx)(i.y5t, { children: l })
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
                        children: u.NW.string(u.t['NX+WJC'])
                    })
                })
            ]
        });
    };
