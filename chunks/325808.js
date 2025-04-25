n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    p = n(313201),
    g = n(131951),
    h = n(358085),
    f = n(962100),
    b = n(981631),
    _ = n(388032),
    x = n(285425),
    E = n(20493);
let j = !h.isPlatformEmbedded,
    C = (0, p.hQ)();
function O(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function S(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: r, delay: s } = (0, a.cj)([g.Z], () => g.Z.getModeOptions());
    return (
        (t =
            h.isPlatformEmbedded || n !== b.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: l()(x.pttToolsMessage, E.marginBottom8),
                      children: _.intl.format(_.t.HVvn5e, { onClick: () => d.Z.setSection(b.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: l()(x.pttToolsMessage, x.pttToolsWarning, E.marginBottom8),
                      children: _.intl.format(_.t.zvMPOT, { onDownloadClick: () => (0, f.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: x.pttTools,
            children: [
                (0, i.jsxs)('div', {
                    className: x.pttToolsFlex,
                    children: [
                        (0, i.jsx)('div', {
                            className: x.column,
                            children: (0, i.jsx)(o.xJW, {
                                title: _.intl.string(_.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: r,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: x.column,
                            children: (0, i.jsxs)(o.xJW, {
                                children: [
                                    (0, i.jsx)(o.vwX, {
                                        id: C,
                                        tag: o.RB0.H5,
                                        className: E.marginBottom8,
                                        children: _.intl.string(_.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.iRW, {
                                        initialValue: s,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: O,
                                        maxValue: b.qhL,
                                        'aria-labelledby': C
                                    })
                                ]
                            })
                        })
                    ]
                }),
                t
            ]
        })
    );
}
function v() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, a.e7)([g.Z], () => g.Z.getMode()),
        s = [
            {
                value: b.pM4.VOICE_ACTIVITY,
                name: _.intl.string(_.t.cHCEOD)
            },
            {
                value: b.pM4.PUSH_TO_TALK,
                name: j ? _.intl.string(_.t['1AINrK']) : _.intl.string(_.t.Q8gkVF)
            }
        ],
        l = r.useCallback(
            (t) => {
                let { value: r } = t;
                r === b.pM4.PUSH_TO_TALK &&
                    j &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                (function (e) {
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
                                })(
                                    {
                                        title: _.intl.string(_.t.Kdt0GR),
                                        confirmText: _.intl.string(_.t['1WjMbG']),
                                        cancelText: _.intl.string(_.t.BddRzc),
                                        onConfirm: () => (0, f.y)('PTT Limited Modal'),
                                        body: _.intl.string(_.t.NIozvr)
                                    },
                                    t
                                )
                            );
                    }),
                    c.Z.setMode(r, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.xJW, {
                title: _.intl.string(_.t['pS+K2N']),
                className: E.marginBottom20,
                children: (0, i.jsx)(o.FXm, {
                    onChange: l,
                    options: s,
                    value: t
                })
            }),
            t === b.pM4.PUSH_TO_TALK && (0, i.jsx)(S, { inputMode: t })
        ]
    });
}
