r.d(t, { default: () => _ }), r(47120);
var n = r(200651);
r(192379);
var i = r(435935),
    o = r(481060),
    s = r(259756),
    c = r(785681),
    a = r(880257),
    l = r(863552),
    d = r(292352),
    h = r(388032),
    C = r(21052),
    x = r(128216);
let m = {
        [d.MY.USER_INTERACTION]: (0, n.jsx)(l.Z, {
            width: 18,
            height: 18
        }),
        [d.MY.USER_CALLED]: (0, n.jsx)(o.Csw, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.USER_ADD]: (0, n.jsx)(o.iFz, {
            size: 'custom',
            color: 'currentColor',
            className: C.personWavingIcon,
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_ADD]: (0, n.jsx)(o.dRF, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_INTERACTION]: (0, n.jsx)(o.VL1, {
            size: 'custom',
            color: 'currentColor',
            className: C.threadIcon,
            width: 22,
            height: 22
        })
    },
    u = (e) => {
        let { header: t, description: r, icon: s } = e;
        return (0, n.jsxs)(i.k, {
            className: C.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: C.iconContainer,
                    children: s
                }),
                (0, n.jsxs)('div', {
                    className: C.rowContent,
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: C.__invalid_rowHeader,
                            variant: 'text-sm/bold',
                            children: t
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            children: r
                        })
                    ]
                })
            ]
        });
    },
    _ = (e) => {
        let { transitionState: t, onClose: r } = e,
            l = (0, c.o)(h.intl.string(h.t.q3IRam), h.intl.string(h.t.JNLpDQ)),
            _ = (0, a.Z)(),
            j = Array.from(d.tx.entries()),
            p = (0, s.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsxs)(o.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsx)('img', {
                    className: C.art,
                    src: x,
                    alt: h.intl.string(h.t.ffg6xc)
                }),
                (0, n.jsx)(o.hzk, {
                    className: C.content,
                    children: (0, n.jsxs)(i.k, {
                        direction: i.k.Direction.VERTICAL,
                        align: i.k.Align.CENTER,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                className: C.header,
                                color: 'header-primary',
                                variant: 'heading-lg/semibold',
                                children: (0, n.jsx)(o.y5t, { children: l })
                            }),
                            j.map((e) => {
                                let [t, r] = e;
                                return (0, n.jsx)(
                                    u,
                                    {
                                        icon: m[t],
                                        header: r.tooltipHeader(),
                                        description: r.tooltipDescription(null != _ ? _ : void 0, p)
                                    },
                                    t
                                );
                            })
                        ]
                    })
                }),
                (0, n.jsx)(o.mzw, {
                    children: (0, n.jsx)(o.zxk, {
                        className: C.__invalid_button,
                        type: 'button',
                        color: o.zxk.Colors.BRAND,
                        onClick: r,
                        children: h.intl.string(h.t['NX+WJC'])
                    })
                })
            ]
        });
    };
