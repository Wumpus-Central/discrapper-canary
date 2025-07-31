n.d(t, { Z: () => N });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    p = n(313201),
    g = n(131951),
    h = n(358085),
    f = n(383451),
    b = n(962100),
    x = n(981631),
    _ = n(388032),
    j = n(285425),
    E = n(893354),
    O = n(20493);
let C = !h.isPlatformEmbedded,
    v = (0, p.hQ)();
function S(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), '\xA0ms');
}
function T(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: r, delay: s, pttLatchingEnabled: m } = (0, l.cj)([g.Z], () => g.Z.getModeOptions()),
        { enableLatching: C } = (0, f.H)({ location: 'PTTTools' });
    return (
        (t =
            h.isPlatformEmbedded || n !== x.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: a()(j.pttToolsMessage, O.marginBottom8),
                      children: _.intl.format(_.t.HVvn5e, { onClick: () => d.Z.setSection(x.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: a()(j.pttToolsMessage, j.pttToolsWarning, O.marginBottom8),
                      children: _.intl.format(_.t.zvMPOT, { onDownloadClick: () => (0, b.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: j.pttTools,
            children: [
                (0, i.jsxs)('div', {
                    className: j.pttToolsFlex,
                    children: [
                        (0, i.jsx)('div', {
                            className: j.column,
                            children: (0, i.jsx)(o.xJW, {
                                title: _.intl.string(_.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: r,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: j.column,
                            children: (0, i.jsxs)(o.xJW, {
                                children: [
                                    (0, i.jsx)(o.vwX, {
                                        id: v,
                                        tag: o.RB0.H5,
                                        className: O.marginBottom8,
                                        children: _.intl.string(_.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.iRW, {
                                        initialValue: s,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: S,
                                        maxValue: x.qhL,
                                        'aria-labelledby': v
                                    })
                                ]
                            })
                        })
                    ]
                }),
                C &&
                    (0, i.jsxs)(o.xJW, {
                        className: O.marginTop8,
                        children: [
                            (0, i.jsx)(p.FG, {
                                children: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: a()(E.horizontal, O.marginBottom4),
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                tag: o.RB0.H3,
                                                className: O.marginReset,
                                                children: (0, i.jsx)('label', {
                                                    htmlFor: e,
                                                    children: _.intl.string(_.t.EGn1eH)
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
                                className: O.marginBottom8,
                                children: _.intl.string(_.t.iT257u)
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
        t = (0, l.e7)([g.Z], () => g.Z.getMode()),
        s = [
            {
                value: x.pM4.VOICE_ACTIVITY,
                name: _.intl.string(_.t.cHCEOD)
            },
            {
                value: x.pM4.PUSH_TO_TALK,
                name: C ? _.intl.string(_.t['1AINrK']) : _.intl.string(_.t.Q8gkVF)
            }
        ],
        a = r.useCallback(
            (t) => {
                let { value: r } = t;
                (r === x.pM4.PUSH_TO_TALK &&
                    C &&
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
                                        title: _.intl.string(_.t.Kdt0GR),
                                        confirmText: _.intl.string(_.t['1WjMbG']),
                                        cancelText: _.intl.string(_.t.BddRzc),
                                        onConfirm: () => (0, b.y)('PTT Limited Modal'),
                                        body: _.intl.string(_.t.NIozvr)
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
                title: _.intl.string(_.t['pS+K2N']),
                className: O.marginBottom20,
                children: (0, i.jsx)(o.FXm, {
                    onChange: a,
                    options: s,
                    value: t
                })
            }),
            t === x.pM4.PUSH_TO_TALK && (0, i.jsx)(T, { inputMode: t })
        ]
    });
}
