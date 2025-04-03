n.d(t, { default: () => d }), n(301563);
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(536442),
    s = n(13140),
    c = n(487029),
    a = n(388032),
    l = n(771031);
function d(e) {
    let { guildId: t, channel: d, keybind: u, transitionState: h, onClose: k } = e;
    function b() {
        (0, i.Kw)(i.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), k();
    }
    function y() {
        b(),
            (0, r.ZDy)(async () => {
                let { default: e } = await n.e('5551').then(n.bind(n, 355453));
                return (t) =>
                    (0, o.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    o = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (o = o.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    o.forEach(function (t) {
                                        var o;
                                        (o = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: o,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = o);
                                    });
                            }
                            return e;
                        })({}, t)
                    );
            });
    }
    return (0, o.jsxs)(r.Y0X, {
        transitionState: h,
        'aria-label': a.NW.string(a.t['yJeV5+']),
        children: [
            (0, o.jsxs)(r.hzk, {
                className: l.content,
                children: [
                    (0, o.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: l.header,
                        children: a.NW.string(a.t['yJeV5+'])
                    }),
                    (0, o.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: a.NW.format(a.t.fq3Sw8, {
                            keybind: (0, s.BB)(u.shortcut, !0).split(' + '),
                            keybindHook: (e, t) =>
                                (0, o.jsx)(
                                    'span',
                                    {
                                        className: l.keybindHintKeys,
                                        children: (0, o.jsx)(r.M2$, {
                                            className: l.keybindShortcut,
                                            shortcut: (0, s.BB)(u.shortcut, !1)
                                        })
                                    },
                                    t
                                ),
                            openSettingsHook: (e, t) =>
                                (0, o.jsx)(
                                    r.eee,
                                    {
                                        onClick: y,
                                        children: e
                                    },
                                    t
                                )
                        })
                    }),
                    (0, o.jsx)('div', {
                        className: l.soundWheel,
                        children: (0, o.jsx)(c.Z, {
                            width: 372,
                            height: 316,
                            guildId: t,
                            channel: d,
                            interactive: !1,
                            keepOpen: !0,
                            onClose: () => {},
                            analyticsSource: 'education modal'
                        })
                    })
                ]
            }),
            (0, o.jsxs)(r.mzw, {
                children: [
                    (0, o.jsx)(r.zxk, {
                        onClick: b,
                        children: a.NW.string(a.t.ZwRzIC)
                    }),
                    (0, o.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: y,
                        children: a.NW.string(a.t['TJ0N9/'])
                    })
                ]
            }),
            (0, o.jsx)(r.olH, {
                className: l.closeButton,
                onClick: b
            })
        ]
    });
}
