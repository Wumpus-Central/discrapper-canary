(n.d(t, { default: () => d }), n(35282));
var o = n(255367);
n(73800);
var i = n(481060),
    r = n(536442),
    s = n(13140),
    c = n(487029),
    l = n(388032),
    a = n(771031);
function d(e) {
    let { guildId: t, channel: d, keybind: u, transitionState: h, onClose: k } = e;
    function b() {
        ((0, r.Kw)(r.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), k());
    }
    function y() {
        (b(),
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e('5551').then(n.bind(n, 355453));
                return (t) =>
                    (0, o.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    o = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (o = o.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    o.forEach(function (t) {
                                        var o;
                                        ((o = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: o,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = o));
                                    }));
                            }
                            return e;
                        })({}, t)
                    );
            }));
    }
    return (0, o.jsxs)(i.Y0X, {
        transitionState: h,
        'aria-label': l.intl.string(l.t['yJeV5+']),
        parentComponent: 'SoundboardChatWheelEducationModal',
        children: [
            (0, o.jsxs)(i.hzk, {
                className: a.content,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: a.header,
                        children: l.intl.string(l.t['yJeV5+'])
                    }),
                    (0, o.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: l.intl.format(l.t.fq3Sw8, {
                            keybind: (0, s.BB)(u.shortcut, !0).split(' + '),
                            keybindHook: (e, t) =>
                                (0, o.jsx)(
                                    'span',
                                    {
                                        className: a.keybindHintKeys,
                                        children: (0, o.jsx)(i.M2$, {
                                            className: a.keybindShortcut,
                                            shortcut: (0, s.BB)(u.shortcut, !1)
                                        })
                                    },
                                    t
                                ),
                            openSettingsHook: (e, t) =>
                                (0, o.jsx)(
                                    i.eee,
                                    {
                                        onClick: y,
                                        children: e
                                    },
                                    t
                                )
                        })
                    }),
                    (0, o.jsx)('div', {
                        className: a.soundWheel,
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
            (0, o.jsxs)(i.mzw, {
                children: [
                    (0, o.jsx)(i.zxk, {
                        onClick: b,
                        children: l.intl.string(l.t.ZwRzIC)
                    }),
                    (0, o.jsx)(i.zxk, {
                        look: i.zxk.Looks.LINK,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: y,
                        children: l.intl.string(l.t['TJ0N9/'])
                    })
                ]
            }),
            (0, o.jsx)(i.olH, {
                className: a.closeButton,
                onClick: b
            })
        ]
    });
}
