(r.d(t, { default: () => j }), r(953529), r(388685));
var n = r(255367);
r(73800);
var o = r(435935),
    i = r(82659),
    c = r(481060),
    s = r(259756),
    l = r(785681),
    a = r(880257),
    u = r(863552),
    h = r(292352),
    p = r(916723),
    d = r(388032),
    f = r(81718);
let C = {
        [h.MY.USER_INTERACTION]: (0, n.jsx)(u.Z, {
            width: 18,
            height: 18
        }),
        [h.MY.USER_CALLED]: (0, n.jsx)(c.Csw, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [h.MY.USER_ADD]: (0, n.jsx)(c.iFz, {
            size: 'custom',
            color: 'currentColor',
            className: f.personWavingIcon,
            width: 22,
            height: 22
        }),
        [h.MY.GUILD_ADD]: (0, n.jsx)(c.dRF, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [h.MY.GUILD_INTERACTION]: (0, n.jsx)(c.VL1, {
            size: 'custom',
            color: 'currentColor',
            className: f.threadIcon,
            width: 22,
            height: 22
        })
    },
    b = (e) => {
        let { header: t, description: r, icon: i } = e;
        return (0, n.jsxs)(o.k, {
            className: f.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: f.iconContainer,
                    children: i
                }),
                (0, n.jsxs)('div', {
                    className: f.rowContent,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'text-sm/bold',
                            children: t
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            children: r
                        })
                    ]
                })
            ]
        });
    },
    j = (e) => {
        let { transitionState: t, onClose: r } = e,
            o = (0, l.o)(d.intl.string(p.default.q3IRam), d.intl.string(p.default.JNLpDQ)),
            c = (0, a.Z)(),
            u = Array.from(h.tx.entries()),
            f = (0, s.Xi)({ location: 'family_center_tooltip_modal_web' });
        return (0, n.jsx)(i.Modal, {
            transitionState: t,
            onClose: r,
            actions: [],
            title: o,
            children: u.map((e) => {
                let [t, r] = e;
                return (0, n.jsx)(
                    b,
                    {
                        icon: C[t],
                        header: r.tooltipHeader(),
                        description: r.tooltipDescription(null != c ? c : void 0, f)
                    },
                    t
                );
            })
        });
    };
