n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    g = n(313201),
    p = n(131951),
    h = n(358085),
    f = n(962100),
    b = n(981631),
    N = n(388032),
    x = n(285425),
    _ = n(20493);
let E = !h.isPlatformEmbedded,
    j = (0, g.hQ)();
function O(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function C(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: s } = (0, l.cj)([p.Z], () => p.Z.getModeOptions());
    return (
        (t =
            h.isPlatformEmbedded || n !== b.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: a()(x.pttToolsMessage, _.marginBottom8),
                      children: N.NW.format(N.t.HVvn5e, { onClick: () => d.Z.setSection(b.oAB.KEYBINDS) })
                  })
                : (0, r.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: a()(x.pttToolsMessage, x.pttToolsWarning, _.marginBottom8),
                      children: N.NW.format(N.t.zvMPOT, { onDownloadClick: () => (0, f.y)('Help Text PTT') })
                  })),
        (0, r.jsxs)('div', {
            className: x.pttTools,
            children: [
                (0, r.jsxs)('div', {
                    className: x.pttToolsFlex,
                    children: [
                        (0, r.jsx)('div', {
                            className: x.column,
                            children: (0, r.jsx)(o.xJW, {
                                title: N.NW.string(N.t.YkDjVF),
                                children: (0, r.jsx)(u.Z, {
                                    defaultValue: i,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: x.column,
                            children: (0, r.jsxs)(o.xJW, {
                                children: [
                                    (0, r.jsx)(o.vwX, {
                                        id: j,
                                        tag: o.RB0.H5,
                                        className: _.marginBottom8,
                                        children: N.NW.string(N.t.y0ShVl)
                                    }),
                                    (0, r.jsx)(o.iRW, {
                                        initialValue: s,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: O,
                                        maxValue: b.qhL,
                                        'aria-labelledby': j
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
function S() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, l.e7)([p.Z], () => p.Z.getMode()),
        s = [
            {
                value: b.pM4.VOICE_ACTIVITY,
                name: N.NW.string(N.t.cHCEOD)
            },
            {
                value: b.pM4.PUSH_TO_TALK,
                name: E ? N.NW.string(N.t['1AINrK']) : N.NW.string(N.t.Q8gkVF)
            }
        ],
        a = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === b.pM4.PUSH_TO_TALK &&
                    E &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
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
                                })(
                                    {
                                        title: N.NW.string(N.t.Kdt0GR),
                                        confirmText: N.NW.string(N.t['1WjMbG']),
                                        cancelText: N.NW.string(N.t.BddRzc),
                                        onConfirm: () => (0, f.y)('PTT Limited Modal'),
                                        body: N.NW.string(N.t.NIozvr)
                                    },
                                    t
                                )
                            );
                    }),
                    c.Z.setMode(i, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.xJW, {
                title: N.NW.string(N.t['pS+K2N']),
                className: _.marginBottom20,
                children: (0, r.jsx)(o.FXm, {
                    onChange: a,
                    options: s,
                    value: t
                })
            }),
            t === b.pM4.PUSH_TO_TALK && (0, r.jsx)(C, { inputMode: t })
        ]
    });
}
