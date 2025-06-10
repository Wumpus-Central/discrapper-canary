a.d(r, { default: () => h });
var s = a(255367);
a(73800);
var t = a(524979),
    n = a(692547),
    l = a(481060),
    i = a(118012),
    o = a(313201),
    d = a(388032),
    c = a(388145);
let m = (e) => {
        let { currentNumber: r, thresholdNumber: a, currentLabel: o, isPercent: m = !1 } = e,
            h = null != a ? Math.floor((r / a) * 100) : 0,
            x = d.intl.formatToPlainString(d.t.YMor7u, { count: r }),
            u = null != a ? d.intl.formatToPlainString(d.t.YMor7u, { count: a }) : '--',
            g = (0, l.dQu)(n.Z.unsafe_rawColors.RED_400).hex(),
            p = (0, l.dQu)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: c.progressWrapper,
                    children: [
                        (0, s.jsx)('div', { className: c.progressBackground }),
                        (0, s.jsx)(l.AMe, {
                            from: { width: 0 },
                            to: { width: h },
                            config: {
                                tension: 200,
                                friction: 20,
                                mass: 50,
                                clamp: !0
                            },
                            shouldAnimate: 'animate-always',
                            children: (e) => {
                                let { width: r } = e;
                                return (0, s.jsx)(t.animated.div, {
                                    className: c.progressBar,
                                    style: {
                                        width: r.interpolate((e) => ''.concat(e, '%')),
                                        backgroundColor: r.interpolate((e) => (e < 33 ? g : p))
                                    }
                                });
                            }
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: c.labelWrapper,
                    children: [
                        (0, s.jsxs)('div', {
                            className: c.__invalid_current,
                            children: [
                                (0, s.jsx)(i.Z, {
                                    color: h < 33 ? i.Z.Colors.ERROR : i.Z.Colors.STATUS_YELLOW,
                                    className: c.bold,
                                    children: m ? ''.concat(x, '%') : x
                                }),
                                (0, s.jsxs)(l.Text, {
                                    'aria-describedby': 'health-score-details-score-explain',
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: [
                                        o,
                                        (0, s.jsx)('sup', {
                                            'aria-hidden': !0,
                                            children: '1'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: c.requirement,
                            children: [
                                (0, s.jsx)(l.Text, {
                                    className: c.bold,
                                    variant: 'text-sm/semibold',
                                    children: m ? ''.concat(u, '%') : u
                                }),
                                (0, s.jsx)(l.Text, {
                                    'aria-describedby': 'health-score-details-requirement-explain',
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: d.intl.string(d.t['A+mTPj'])
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    h = (e) => {
        let r,
            a,
            t,
            { guildChecklist: n, transitionState: i, onClose: h } = e,
            x = (0, o.Dt)(),
            { retentionHealthy: u, engagementHealthy: g, healthScore: p } = n,
            { avg_nonnew_participators: _, avg_nonnew_communicators: j, perc_ret_w1_intentful: b } = p;
        if (
            (!g &&
                null != _ &&
                _ < 40 &&
                (a = (0, s.jsxs)('div', {
                    className: c.failingBlock,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            className: c.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.intl.string(d.t.sEzDIS)
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.zNp3Ki)
                        }),
                        (0, s.jsx)(m, {
                            currentNumber: _,
                            thresholdNumber: 40,
                            currentLabel: d.intl.string(d.t.BtTX9P)
                        })
                    ]
                })),
            !g &&
                null != j &&
                j < 20 &&
                (t = (0, s.jsxs)('div', {
                    className: c.failingBlock,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            className: c.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.intl.string(d.t.fWQTbm)
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.Tl8MR0)
                        }),
                        (0, s.jsx)(m, {
                            currentNumber: j,
                            thresholdNumber: 20,
                            currentLabel: d.intl.string(d.t.PFQI7u)
                        })
                    ]
                })),
            !u && null != b)
        ) {
            let e = Math.floor(100 * b);
            r = (0, s.jsxs)('div', {
                className: c.failingBlock,
                children: [
                    (0, s.jsx)(l.X6q, {
                        className: c.marginAfter,
                        variant: 'heading-md/semibold',
                        children: d.intl.string(d.t.YF6x29)
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: d.intl.format(d.t.kMBzFh, {})
                    }),
                    (0, s.jsx)(m, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.intl.string(d.t.WpwyIi),
                        isPercent: !0
                    })
                ]
            });
        }
        return (0, s.jsxs)(l.Y0X, {
            transitionState: i,
            size: l.CgR.MEDIUM,
            className: c.__invalid_modal,
            'aria-labelledby': x,
            parentComponent: 'HealthScoreDetailsModal',
            children: [
                (0, s.jsxs)(l.hzk, {
                    className: c.content,
                    children: [
                        (0, s.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            className: c.modalHeader,
                            id: x,
                            children: d.intl.string(d.t['+GHxPz'])
                        }),
                        (0, s.jsx)(l.Text, {
                            className: c.marginAfter,
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.QOs3XF)
                        }),
                        (0, s.jsx)('div', { className: c.separator }),
                        a,
                        t,
                        r,
                        (0, s.jsx)('div', { className: c.separator }),
                        (0, s.jsxs)(l.Text, {
                            className: c.marginAfter,
                            color: 'header-secondary',
                            id: 'health-score-details-score-explain',
                            variant: 'text-sm/normal',
                            children: [
                                (0, s.jsx)('sup', {
                                    'aria-hidden': !0,
                                    children: '1 '
                                }),
                                d.intl.string(d.t.tN5kb2)
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(l.olH, {
                    onClick: h,
                    className: c.closeButton
                })
            ]
        });
    };
