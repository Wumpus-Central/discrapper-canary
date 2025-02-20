r.d(t, { default: () => C }), r(266796), r(47120);
var n = r(200651);
r(192379);
var o = r(435935),
    i = r(481060),
    c = r(259756),
    s = r(785681),
    a = r(880257),
    l = r(863552),
    d = r(292352),
    h = r(388032),
    u = r(461141),
    p = r(128216);
let f = {
        [d.MY.USER_INTERACTION]: (0, n.jsx)(l.Z, {
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
            className: u.personWavingIcon,
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
            className: u.threadIcon,
            width: 22,
            height: 22
        })
    },
    j = (e) => {
        let { header: t, description: r, icon: c } = e;
        return (0, n.jsxs)(o.k, {
            className: u.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: u.iconContainer,
                    children: c
                }),
                (0, n.jsxs)('div', {
                    className: u.rowContent,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: u.__invalid_rowHeader,
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
    C = (e) => {
        let { transitionState: t, onClose: r } = e,
            l = (0, s.o)(h.NW.string(h.t.q3IRam), h.NW.string(h.t.JNLpDQ)),
            C = (0, a.Z)(),
            b = Array.from(d.tx.entries()),
            g = (0, c.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsx)('img', {
                    className: u.art,
                    src: p,
                    alt: h.NW.string(h.t.ffg6xc)
                }),
                (0, n.jsx)(i.hzk, {
                    className: u.content,
                    children: (0, n.jsxs)(o.k, {
                        direction: o.k.Direction.VERTICAL,
                        align: o.k.Align.CENTER,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                className: u.header,
                                color: 'header-primary',
                                variant: 'heading-lg/semibold',
                                children: (0, n.jsx)(i.y5t, { children: l })
                            }),
                            b.map((e) => {
                                let [t, r] = e;
                                return (0, n.jsx)(
                                    j,
                                    {
                                        icon: f[t],
                                        header: r.tooltipHeader(),
                                        description: r.tooltipDescription(null != C ? C : void 0, g)
                                    },
                                    t
                                );
                            })
                        ]
                    })
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.zxk, {
                        className: u.__invalid_button,
                        type: 'button',
                        color: i.zxk.Colors.BRAND,
                        onClick: r,
                        children: h.NW.string(h.t['NX+WJC'])
                    })
                })
            ]
        });
    };
