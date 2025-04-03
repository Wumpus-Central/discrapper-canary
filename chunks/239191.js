s.d(t, { DesktopRefreshOnboardingModal: () => _ }), s(47120), s(653041);
var r = s(200651),
    n = s(192379),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    o = s(524437),
    c = s(481060),
    d = s(153867),
    m = s(131388),
    h = s(514361),
    g = s(47760),
    p = s(210887),
    u = s(740492),
    y = s(695346),
    x = s(874893),
    b = s(231338),
    j = s(388032),
    O = s(294649);
function N(e) {
    let { options: t, selected: s, onSelect: n, showLabels: i, renderOptionContainer: l } = e;
    return (0, r.jsx)(c.Kqy, {
        direction: 'horizontal',
        gap: 8,
        children: t.map((e, t) => {
            var o;
            let d = (0, r.jsx)(
                c.Kqy,
                {
                    gap: 16,
                    children: (0, r.jsx)(c.ua7, {
                        text: e.label,
                        shouldShow: !i && void 0,
                        children: (t) => {
                            var l, o;
                            return (0, r.jsxs)(
                                c.P3F,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var s = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(s);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(s).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = s[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (o = o =
                                    {
                                        'data-selected': e.id === s,
                                        onClick: () => n(e.id),
                                        className: a()(e.className, O.option),
                                        style: e.style,
                                        children: [
                                            i &&
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-primary',
                                                    children: e.label
                                                }),
                                            e.new &&
                                                (0, r.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BG_BRAND.css,
                                                    text: j.NW.string(j.t.y2b7CA),
                                                    className: O.new
                                                })
                                        ]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var s = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              s.push.apply(s, r);
                                          }
                                          return s;
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
let f = [
        {
            id: b.BR.LIGHT,
            label: j.NW.string(j.t.K2sFfn),
            className: a()('theme-light', O.themeOption)
        },
        {
            id: b.BR.DARK,
            label: j.NW.string(j.t.SMPT1t),
            className: a()('theme-dark', O.themeOption)
        },
        {
            id: b.BR.DARKER,
            label: j.NW.string(j.t.b8Cei4),
            className: a()('theme-darker', O.themeOption),
            new: !0
        },
        {
            id: b.BR.MIDNIGHT,
            label: j.NW.string(j.t.Do4ZJy),
            className: a()('theme-midnight', O.themeOption),
            new: !0
        }
    ],
    v = [
        {
            id: 'compact',
            label: j.NW.string(j.t['7iegX1'])
        },
        {
            id: 'default',
            label: j.NW.string(j.t.bBvAEB)
        },
        {
            id: 'cozy',
            label: j.NW.string(j.t['4cuYHx'])
        }
    ];
function _(e) {
    let { transitionState: t, onClose: s } = e,
        [i] = n.useState(() => h.Z.gradientPreset),
        b = (0, l.e7)([p.Z], () => p.Z.theme),
        [_] = n.useState(() => u.ZP.useSystemTheme === x.KW.ON),
        [w, k] = n.useState(() => (_ ? 'system' : null != i ? 'gradient' : b)),
        { density: P } = (0, c.TCT)(),
        C = n.useMemo(() => {
            if (null == i && !_) return f;
            let e = [...f];
            if (null != i) {
                let { colors: t, angle: s, theme: r, getName: n } = i,
                    l = (0, g.VK)({
                        colors: t,
                        angle: s
                    }),
                    o = n();
                e.push({
                    id: 'gradient',
                    label: o,
                    className: a()((0, c.wjy)(r) ? O.darkOverlay : O.lightOverlay, O.themeOption),
                    style: { background: 'var(--bg-overlay), '.concat(l) }
                });
            }
            return (
                _ &&
                    e.push({
                        id: 'system',
                        label: j.NW.string(j.t['7rOU6u']),
                        className: O.themeOption
                    }),
                e
            );
        }, [i, _]),
        K = (0, m.Z)('(max-height: 800px)');
    return (0, r.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: O.root,
        'data-modal-align': 'top',
        children: [
            (0, r.jsx)('div', { className: O.gradient }),
            (0, r.jsx)(c.xBx, {
                className: O.header,
                children: (0, r.jsxs)(c.Kqy, {
                    gap: K ? 4 : 8,
                    children: [
                        (0, r.jsxs)(c.Kqy, {
                            gap: K ? 8 : 16,
                            children: [
                                (0, r.jsx)('div', { className: O.headerImage }),
                                (0, r.jsx)(c.X6q, {
                                    variant: K ? 'heading-lg/semibold' : 'heading-xl/semibold',
                                    color: 'header-primary',
                                    children: j.NW.string(j.t['7+iCGx'])
                                })
                            ]
                        }),
                        (0, r.jsx)(c.X6q, {
                            variant: K ? 'heading-sm/medium' : 'heading-md/medium',
                            color: 'text-secondary',
                            children: j.NW.string(j.t.fZMMqK)
                        })
                    ]
                })
            }),
            (0, r.jsx)(c.hzk, {
                className: O.content,
                children: (0, r.jsxs)(c.Kqy, {
                    gap: K ? 20 : 24,
                    children: [
                        (0, r.jsxs)(c.Kqy, {
                            gap: K ? 8 : 12,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-md/medium',
                                    children: j.NW.string(j.t.Ksh3io)
                                }),
                                (0, r.jsx)(N, {
                                    showLabels: !1,
                                    options: C,
                                    selected: w,
                                    onSelect: (e) => {
                                        k(e),
                                            'gradient' === e
                                                ? null != i &&
                                                  (0, d.ZI)({
                                                      backgroundGradientPresetId: i.id,
                                                      theme: i.theme
                                                  })
                                                : (0, d.ZI)({ theme: e });
                                    },
                                    renderOptionContainer: (e, t) =>
                                        'gradient' === e.id
                                            ? t
                                            : 'system' === e.id
                                              ? (0, r.jsxs)(c.Kqy, {
                                                    className: O.systemOption,
                                                    children: [
                                                        t,
                                                        (0, r.jsx)(c.DuK, {
                                                            size: 'sm',
                                                            className: O.systemIcon
                                                        })
                                                    ]
                                                })
                                              : (0, r.jsx)(c.f6W, {
                                                    theme: e.id,
                                                    disableAdaptiveTheme: !0,
                                                    children: (e) =>
                                                        (0, r.jsx)(c.Kqy, {
                                                            className: e,
                                                            children: t
                                                        })
                                                })
                                })
                            ]
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            gap: K ? 8 : 12,
                            children: [
                                (0, r.jsxs)(c.Kqy, {
                                    gap: 0,
                                    children: [
                                        (0, r.jsxs)(c.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: j.NW.string(j.t['C/5V0N'])
                                                }),
                                                (0, r.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BG_BRAND.css,
                                                    text: j.NW.string(j.t.y2b7CA)
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: j.NW.string(j.t['2w1sEB'])
                                        })
                                    ]
                                }),
                                (0, r.jsx)(N, {
                                    showLabels: !0,
                                    options: v,
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
            (0, r.jsx)(c.mzw, {
                className: O.footer,
                children: (0, r.jsx)(c.zxk, {
                    onClick: s,
                    children: j.NW.string(j.t['1Qm829'])
                })
            })
        ]
    });
}
