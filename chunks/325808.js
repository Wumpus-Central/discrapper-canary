n.d(t, { Z: () => N });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    g = n(313201),
    p = n(131951),
    h = n(358085),
    f = n(383451),
    b = n(962100),
    _ = n(981631),
    x = n(388032),
    E = n(285425),
    j = n(893354),
    C = n(20493);
let O = !h.isPlatformEmbedded,
    S = (0, g.hQ)();
function v(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), '\xA0ms');
}
function T(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: r, delay: s, pttLatchingEnabled: m } = (0, a.cj)([p.Z], () => p.Z.getModeOptions()),
        { enableLatching: O } = (0, f.H)({ location: 'PTTTools' });
    return (
        (t =
            h.isPlatformEmbedded || n !== _.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: l()(E.pttToolsMessage, C.marginBottom8),
                      children: x.intl.format(x.t.HVvn5e, { onClick: () => d.Z.setSection(_.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: l()(E.pttToolsMessage, E.pttToolsWarning, C.marginBottom8),
                      children: x.intl.format(x.t.zvMPOT, { onDownloadClick: () => (0, b.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: E.pttTools,
            children: [
                (0, i.jsxs)('div', {
                    className: E.pttToolsFlex,
                    children: [
                        (0, i.jsx)('div', {
                            className: E.column,
                            children: (0, i.jsx)(o.xJW, {
                                title: x.intl.string(x.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: r,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: E.column,
                            children: (0, i.jsxs)(o.xJW, {
                                children: [
                                    (0, i.jsx)(o.vwX, {
                                        id: S,
                                        tag: o.RB0.H5,
                                        className: C.marginBottom8,
                                        children: x.intl.string(x.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.iRW, {
                                        initialValue: s,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: v,
                                        maxValue: _.qhL,
                                        'aria-labelledby': S
                                    })
                                ]
                            })
                        })
                    ]
                }),
                O &&
                    (0, i.jsxs)(o.xJW, {
                        className: C.marginTop8,
                        children: [
                            (0, i.jsx)(g.FG, {
                                children: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: l()(j.horizontal, C.marginBottom4),
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: o.RB0.H3,
                                                className: C.marginReset,
                                                children: (0, i.jsx)('label', {
                                                    htmlFor: e,
                                                    children: x.intl.string(x.t.EGn1eH)
                                                })
                                            }),
                                            (0, i.jsx)(o.rsf, {
                                                id: e,
                                                checked: null != m && m,
                                                onChange: (e) => c.Z.setMode(n, { pttLatchingEnabled: e })
                                            })
                                        ]
                                    })
                            }),
                            (0, i.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: C.marginBottom8,
                                children: x.intl.string(x.t.iT257u)
                            })
                        ]
                    }),
                t
            ]
        })
    );
}
function N() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, a.e7)([p.Z], () => p.Z.getMode()),
        s = [
            {
                value: _.pM4.VOICE_ACTIVITY,
                name: x.intl.string(x.t.cHCEOD)
            },
            {
                value: _.pM4.PUSH_TO_TALK,
                name: O ? x.intl.string(x.t['1AINrK']) : x.intl.string(x.t.Q8gkVF)
            }
        ],
        l = r.useCallback(
            (t) => {
                let { value: r } = t;
                (r === _.pM4.PUSH_TO_TALK &&
                    O &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                ((i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i));
                                            }));
                                    }
                                    return e;
                                })(
                                    {
                                        title: x.intl.string(x.t.Kdt0GR),
                                        confirmText: x.intl.string(x.t['1WjMbG']),
                                        cancelText: x.intl.string(x.t.BddRzc),
                                        onConfirm: () => (0, b.y)('PTT Limited Modal'),
                                        body: x.intl.string(x.t.NIozvr)
                                    },
                                    t
                                )
                            );
                    }),
                    c.Z.setMode(r, void 0, void 0, { analyticsLocations: e }));
            },
            [e]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.xJW, {
                title: x.intl.string(x.t['pS+K2N']),
                className: C.marginBottom20,
                children: (0, i.jsx)(o.FXm, {
                    onChange: l,
                    options: s,
                    value: t
                })
            }),
            t === _.pM4.PUSH_TO_TALK && (0, i.jsx)(T, { inputMode: t })
        ]
    });
}
