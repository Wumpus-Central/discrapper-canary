n.d(t, { DesktopRefreshOnboardingModal: () => w }), n(388685), n(539854);
var i = n(255367),
    s = n(73800),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(153867),
    m = n(131388),
    h = n(514361),
    g = n(47760),
    p = n(210887),
    u = n(740492),
    y = n(695346),
    x = n(874893),
    b = n(231338),
    j = n(388032),
    O = n(294649);
function f(e) {
    let { options: t, selected: n, onSelect: s, showLabels: r, renderOptionContainer: l } = e;
    return (0, i.jsx)(c.Kqy, {
        direction: 'horizontal',
        gap: 8,
        children: t.map((e, t) => {
            var o;
            let d = (0, i.jsx)(
                c.Kqy,
                {
                    gap: 16,
                    children: (0, i.jsx)(c.ua7, {
                        text: e.label,
                        shouldShow: !r && void 0,
                        children: (t) => {
                            var l, o;
                            return (0, i.jsxs)(
                                c.P3F,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (o = o =
                                    {
                                        'data-selected': e.id === n,
                                        onClick: () => s(e.id),
                                        className: a()(e.className, O.option),
                                        style: e.style,
                                        children: [
                                            r &&
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-primary',
                                                    children: e.label
                                                }),
                                            e.new &&
                                                (0, i.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BG_BRAND.css,
                                                    text: j.intl.string(j.t.y2b7CA),
                                                    className: O.new
                                                })
                                        ]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                l)
                            );
                        }
                    })
                },
                t
            );
            return null != (o = null == l ? void 0 : l(e, d)) ? o : d;
        })
    });
}
let v = [
        {
            id: b.BR.LIGHT,
            label: j.intl.string(j.t.K2sFfn),
            className: a()('theme-light', O.themeOption)
        },
        {
            id: b.BR.DARK,
            label: j.intl.string(j.t.SMPT1t),
            className: a()('theme-dark', O.themeOption)
        },
        {
            id: b.BR.DARKER,
            label: j.intl.string(j.t.b8Cei4),
            className: a()('theme-darker', O.themeOption),
            new: !0
        },
        {
            id: b.BR.MIDNIGHT,
            label: j.intl.string(j.t.Do4ZJy),
            className: a()('theme-midnight', O.themeOption),
            new: !0
        }
    ],
    _ = [
        {
            id: 'compact',
            label: j.intl.string(j.t['7iegX1'])
        },
        {
            id: 'default',
            label: j.intl.string(j.t.bBvAEB)
        },
        {
            id: 'cozy',
            label: j.intl.string(j.t['4cuYHx'])
        }
    ];
function w(e) {
    let { transitionState: t, onClose: n } = e,
        [r] = s.useState(() => h.Z.gradientPreset),
        b = (0, l.e7)([p.Z], () => p.Z.theme),
        [w] = s.useState(() => u.ZP.useSystemTheme === x.KW.ON),
        [N, k] = s.useState(() => (w ? 'system' : null != r ? 'gradient' : b)),
        { density: P } = (0, c.TCT)(),
        C = s.useMemo(() => {
            if (null == r && !w) return v;
            let e = [...v];
            if (null != r) {
                let { colors: t, angle: n, theme: i, getName: s } = r,
                    l = (0, g.VK)({
                        colors: t,
                        angle: n
                    }),
                    o = s();
                e.push({
                    id: 'gradient',
                    label: o,
                    className: a()((0, c.wjy)(i) ? O.darkOverlay : O.lightOverlay, O.themeOption),
                    style: { background: 'var(--bg-overlay), '.concat(l) }
                });
            }
            return (
                w &&
                    e.push({
                        id: 'system',
                        label: j.intl.string(j.t['7rOU6u']),
                        className: O.themeOption
                    }),
                e
            );
        }, [r, w]),
        K = (0, m.Z)('(max-height: 800px)');
    return (0, i.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: O.root,
        'data-modal-align': 'top',
        children: [
            (0, i.jsx)('div', { className: O.gradient }),
            (0, i.jsx)(c.xBx, {
                className: O.header,
                children: (0, i.jsxs)(c.Kqy, {
                    gap: K ? 4 : 8,
                    children: [
                        (0, i.jsxs)(c.Kqy, {
                            gap: K ? 8 : 16,
                            children: [
                                (0, i.jsx)('div', { className: O.headerImage }),
                                (0, i.jsx)(c.X6q, {
                                    variant: K ? 'heading-lg/semibold' : 'heading-xl/semibold',
                                    color: 'header-primary',
                                    children: j.intl.string(j.t['7+iCGx'])
                                })
                            ]
                        }),
                        (0, i.jsx)(c.X6q, {
                            variant: K ? 'heading-sm/medium' : 'heading-md/medium',
                            color: 'text-secondary',
                            children: j.intl.string(j.t.fZMMqK)
                        })
                    ]
                })
            }),
            (0, i.jsx)(c.hzk, {
                className: O.content,
                children: (0, i.jsxs)(c.Kqy, {
                    gap: K ? 20 : 24,
                    children: [
                        (0, i.jsxs)(c.Kqy, {
                            gap: K ? 8 : 12,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-md/medium',
                                    children: j.intl.string(j.t.Ksh3io)
                                }),
                                (0, i.jsx)(f, {
                                    showLabels: !1,
                                    options: C,
                                    selected: N,
                                    onSelect: (e) => {
                                        k(e),
                                            'gradient' === e
                                                ? null != r &&
                                                  (0, d.ZI)({
                                                      backgroundGradientPresetId: r.id,
                                                      theme: r.theme
                                                  })
                                                : (0, d.ZI)({ theme: e });
                                    },
                                    renderOptionContainer: (e, t) =>
                                        'gradient' === e.id
                                            ? t
                                            : 'system' === e.id
                                              ? (0, i.jsxs)(c.Kqy, {
                                                    className: O.systemOption,
                                                    children: [
                                                        t,
                                                        (0, i.jsx)(c.DuK, {
                                                            size: 'sm',
                                                            className: O.systemIcon
                                                        })
                                                    ]
                                                })
                                              : (0, i.jsx)(c.f6W, {
                                                    theme: e.id,
                                                    disableAdaptiveTheme: !0,
                                                    children: (e) =>
                                                        (0, i.jsx)(c.Kqy, {
                                                            className: e,
                                                            children: t
                                                        })
                                                })
                                })
                            ]
                        }),
                        (0, i.jsxs)(c.Kqy, {
                            gap: K ? 8 : 12,
                            children: [
                                (0, i.jsxs)(c.Kqy, {
                                    gap: 0,
                                    children: [
                                        (0, i.jsxs)(c.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            children: [
                                                (0, i.jsx)(c.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: j.intl.string(j.t['C/5V0N'])
                                                }),
                                                (0, i.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BG_BRAND.css,
                                                    text: j.intl.string(j.t.y2b7CA)
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: j.intl.string(j.t['2w1sEB'])
                                        })
                                    ]
                                }),
                                (0, i.jsx)(f, {
                                    showLabels: !0,
                                    options: _,
                                    selected: P,
                                    onSelect: (e) => {
                                        switch (e) {
                                            case 'default':
                                                y.YC.updateSetting(o.Pi.DEFAULT);
                                                break;
                                            case 'compact':
                                                y.YC.updateSetting(o.Pi.COMPACT);
                                                break;
                                            case 'cozy':
                                                y.YC.updateSetting(o.Pi.COZY);
                                        }
                                    }
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(c.mzw, {
                className: O.footer,
                children: (0, i.jsx)(c.zxk, {
                    onClick: n,
                    children: j.intl.string(j.t['1Qm829'])
                })
            })
        ]
    });
}
