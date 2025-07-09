(n.d(t, { default: () => d }), n(35282));
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(536442),
    a = n(13140),
    s = n(487029),
    c = n(388032),
    l = n(771031);
function d(e) {
    let { guildId: t, channel: d, keybind: u, transitionState: h, onClose: y } = e;
    function b() {
        ((0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), y());
    }
    function x() {
        (b(),
            (0, r.ZDy)(async () => {
                let { default: e } = await n.e('5551').then(n.bind(n, 355453));
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
                        })({}, t)
                    );
            }));
    }
    return (0, i.jsxs)(r.Y0X, {
        transitionState: h,
        'aria-label': c.intl.string(c.t['yJeV5+']),
        parentComponent: 'SoundboardChatWheelEducationModal',
        children: [
            (0, i.jsxs)(r.hzk, {
                className: l.content,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: l.header,
                        children: c.intl.string(c.t['yJeV5+'])
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: c.intl.format(c.t.fq3Sw8, {
                            keybind: (0, a.BB)(u.shortcut, !0).split(' + '),
                            keybindHook: (e, t) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        className: l.keybindHintKeys,
                                        children: (0, i.jsx)(r.M2$, {
                                            className: l.keybindShortcut,
                                            shortcut: (0, a.BB)(u.shortcut, !1)
                                        })
                                    },
                                    t
                                ),
                            openSettingsHook: (e, t) =>
                                (0, i.jsx)(
                                    r.eee,
                                    {
                                        onClick: x,
                                        children: e
                                    },
                                    t
                                )
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: l.soundWheel,
                        children: (0, i.jsx)(s.Z, {
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
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsxs)(r.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(r.zxk, {
                            variant: 'primary',
                            text: c.intl.string(c.t.ZwRzIC),
                            onClick: b
                        }),
                        (0, i.jsx)(r.zxk, {
                            variant: 'secondary',
                            text: c.intl.string(c.t['TJ0N9/']),
                            onClick: x
                        })
                    ]
                })
            }),
            (0, i.jsx)(r.olH, {
                className: l.closeButton,
                onClick: b
            })
        ]
    });
}
