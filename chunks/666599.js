a.d(r, { default: () => m });
var t = a(255367);
a(73800);
var s = a(778141),
    n = a(692547),
    i = a(481060),
    l = a(313201),
    d = a(388032),
    o = a(388145);
let c = (e) => {
        let { currentNumber: r, thresholdNumber: a, currentLabel: l, isPercent: c = !1 } = e,
            m = null != a ? Math.floor((r / a) * 100) : 0,
            x = d.intl.formatToPlainString(d.t.YMor7u, { count: r }),
            h = null != a ? d.intl.formatToPlainString(d.t.YMor7u, { count: a }) : '--',
            u = (0, i.dQu)(n.Z.unsafe_rawColors.RED_400).hex(),
            g = (0, i.dQu)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)('div', {
                    className: o.progressWrapper,
                    children: [
                        (0, t.jsx)('div', { className: o.progressBackground }),
                        (0, t.jsx)(i.AMe, {
                            from: { width: 0 },
                            to: { width: m },
                            config: {
                                tension: 200,
                                friction: 20,
                                mass: 50,
                                clamp: !0
                            },
                            shouldAnimate: 'animate-always',
                            children: (e) => {
                                let { width: r } = e;
                                return (0, t.jsx)(s.animated.div, {
                                    className: o.progressBar,
                                    style: {
                                        width: r.interpolate((e) => ''.concat(e, '%')),
                                        backgroundColor: r.interpolate((e) => (e < 33 ? u : g))
                                    }
                                });
                            }
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: o.labelWrapper,
                    children: [
                        (0, t.jsxs)('div', {
                            className: o.__invalid_current,
                            children: [
                                (0, t.jsx)(i.Text, {
                                    variant: 'text-md/semibold',
                                    color: m < 33 ? 'text-feedback-critical' : 'text-feedback-warning',
                                    children: c ? ''.concat(x, '%') : x
                                }),
                                (0, t.jsxs)(i.Text, {
                                    'aria-describedby': 'health-score-details-score-explain',
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: [
                                        l,
                                        (0, t.jsx)('sup', {
                                            'aria-hidden': !0,
                                            children: '1'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: o.requirement,
                            children: [
                                (0, t.jsx)(i.Text, {
                                    variant: 'text-sm/semibold',
                                    children: c ? ''.concat(h, '%') : h
                                }),
                                (0, t.jsx)(i.Text, {
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
    m = (e) => {
        let r,
            a,
            s,
            { guildChecklist: n, transitionState: m, onClose: x } = e,
            h = (0, l.Dt)(),
            { retentionHealthy: u, engagementHealthy: g, healthScore: p } = n,
            { avg_nonnew_participators: _, avg_nonnew_communicators: j, perc_ret_w1_intentful: b } = p;
        if (
            (!g &&
                null != _ &&
                _ < 40 &&
                (a = (0, t.jsxs)('div', {
                    className: o.failingBlock,
                    children: [
                        (0, t.jsx)(i.X6q, {
                            className: o.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.intl.string(d.t.sEzDIS)
                        }),
                        (0, t.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.zNp3Ki)
                        }),
                        (0, t.jsx)(c, {
                            currentNumber: _,
                            thresholdNumber: 40,
                            currentLabel: d.intl.string(d.t.BtTX9P)
                        })
                    ]
                })),
            !g &&
                null != j &&
                j < 20 &&
                (s = (0, t.jsxs)('div', {
                    className: o.failingBlock,
                    children: [
                        (0, t.jsx)(i.X6q, {
                            className: o.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.intl.string(d.t.fWQTbm)
                        }),
                        (0, t.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.Tl8MR0)
                        }),
                        (0, t.jsx)(c, {
                            currentNumber: j,
                            thresholdNumber: 20,
                            currentLabel: d.intl.string(d.t.PFQI7u)
                        })
                    ]
                })),
            !u && null != b)
        ) {
            let e = Math.floor(100 * b);
            r = (0, t.jsxs)('div', {
                className: o.failingBlock,
                children: [
                    (0, t.jsx)(i.X6q, {
                        className: o.marginAfter,
                        variant: 'heading-md/semibold',
                        children: d.intl.string(d.t.YF6x29)
                    }),
                    (0, t.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: d.intl.format(d.t.kMBzFh, {})
                    }),
                    (0, t.jsx)(c, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.intl.string(d.t.WpwyIi),
                        isPercent: !0
                    })
                ]
            });
        }
        return (0, t.jsxs)(i.Y0X, {
            transitionState: m,
            size: i.CgR.MEDIUM,
            className: o.__invalid_modal,
            'aria-labelledby': h,
            parentComponent: 'HealthScoreDetailsModal',
            children: [
                (0, t.jsxs)(i.hzk, {
                    className: o.content,
                    children: [
                        (0, t.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: o.modalHeader,
                            id: h,
                            children: d.intl.string(d.t['+GHxPz'])
                        }),
                        (0, t.jsx)(i.Text, {
                            className: o.marginAfter,
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.QOs3XF)
                        }),
                        (0, t.jsx)('div', { className: o.separator }),
                        a,
                        s,
                        r,
                        (0, t.jsx)('div', { className: o.separator }),
                        (0, t.jsxs)(i.Text, {
                            className: o.marginAfter,
                            color: 'header-secondary',
                            id: 'health-score-details-score-explain',
                            variant: 'text-sm/normal',
                            children: [
                                (0, t.jsx)('sup', {
                                    'aria-hidden': !0,
                                    children: '1 '
                                }),
                                d.intl.string(d.t.tN5kb2)
                            ]
                        })
                    ]
                }),
                (0, t.jsx)(i.olH, {
                    onClick: x,
                    className: o.closeButton
                })
            ]
        });
    };
