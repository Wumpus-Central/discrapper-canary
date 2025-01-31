t.d(n, { default: () => r });
var i = t(200651);
t(192379);
var s = t(481060),
    o = t(536442),
    l = t(13140),
    c = t(487029),
    d = t(388032),
    a = t(167818);
function r(e) {
    let { guildId: n, channel: r, keybind: h, transitionState: u, onClose: k } = e;
    function x() {
        (0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), k();
    }
    function _() {
        x(),
            (0, s.ZDy)(async () => {
                let { default: e } = await t.e('5551').then(t.bind(t, 355453));
                return (n) => (0, i.jsx)(e, { ...n });
            });
    }
    return (0, i.jsxs)(s.Y0X, {
        transitionState: u,
        'aria-label': d.intl.string(d.t['yJeV5+']),
        children: [
            (0, i.jsxs)(s.hzk, {
                className: a.content,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: a.header,
                        children: d.intl.string(d.t['yJeV5+'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: d.intl.format(d.t.fq3Sw8, {
                            keybind: (0, l.BB)(h.shortcut, !0).split(' + '),
                            keybindHook: (e, n) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        className: a.keybindHintKeys,
                                        children: (0, i.jsx)(s.M2$, {
                                            className: a.keybindShortcut,
                                            shortcut: (0, l.BB)(h.shortcut, !1)
                                        })
                                    },
                                    n
                                ),
                            openSettingsHook: (e, n) =>
                                (0, i.jsx)(
                                    s.eee,
                                    {
                                        onClick: _,
                                        children: e
                                    },
                                    n
                                )
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: a.soundWheel,
                        children: (0, i.jsx)(c.Z, {
                            width: 372,
                            height: 316,
                            guildId: n,
                            channel: r,
                            interactive: !1,
                            keepOpen: !0,
                            onClose: () => {},
                            analyticsSource: 'education modal'
                        })
                    })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: x,
                        children: d.intl.string(d.t.ZwRzIC)
                    }),
                    (0, i.jsx)(s.zxk, {
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: _,
                        children: d.intl.string(d.t['TJ0N9/'])
                    })
                ]
            }),
            (0, i.jsx)(s.olH, {
                className: a.closeButton,
                onClick: x
            })
        ]
    });
}
