(n.d(t, { default: () => y }), n(35282));
var i = n(255367),
    r = n(73800),
    a = n(82659),
    s = n(481060),
    o = n(536442),
    c = n(13140),
    l = n(487029),
    d = n(388032),
    u = n(771031);
function y(e) {
    let { guildId: t, channel: y, keybind: h, transitionState: b, onClose: k } = e,
        p = r.useCallback(async () => {
            ((0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k());
        }, [k]),
        f = r.useCallback(async () => {
            (await p(),
                (0, s.ZDy)(async () => {
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
        }, [p]),
        j = r.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: d.intl.string(d.t['TJ0N9/']),
                    onClick: f
                },
                {
                    text: d.intl.string(d.t.ZwRzIC),
                    onClick: p,
                    variant: 'primary'
                }
            ],
            [f, p]
        );
    return (0, i.jsxs)(a.Modal, {
        onClose: p,
        actions: j,
        transitionState: b,
        title: d.intl.string(d.t['yJeV5+']),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: d.intl.format(d.t.fq3Sw8, {
                    keybind: (0, c.BB)(h.shortcut, !0).split(' + '),
                    keybindHook: (e, t) =>
                        (0, i.jsx)(
                            'span',
                            {
                                className: u.keybindHintKeys,
                                children: (0, i.jsx)(s.M2$, {
                                    className: u.keybindShortcut,
                                    shortcut: (0, c.BB)(h.shortcut, !1)
                                })
                            },
                            t
                        ),
                    openSettingsHook: (e, t) =>
                        (0, i.jsx)(
                            s.eee,
                            {
                                onClick: f,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, i.jsx)('div', {
                className: u.soundWheel,
                children: (0, i.jsx)(l.Z, {
                    width: 372,
                    height: 316,
                    guildId: t,
                    channel: y,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: 'education modal'
                })
            })
        ]
    });
}
