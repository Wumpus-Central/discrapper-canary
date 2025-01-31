n.d(t, { Z: () => x }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(723047),
    s = n(727843),
    a = n(290348),
    o = n(783454),
    c = n(893729),
    d = n(619326),
    u = n(553204),
    m = n(388032),
    h = n(83701),
    g = n(952134);
function x() {
    let { editStateId: e, guildId: t } = (0, s.N)(),
        [, x] = a.p9(e, t),
        [p, _] = a.Ek(e, t),
        C = a.qs(e, t);
    function f() {
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('22942').then(n.bind(n, 660727));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    guildId: t,
                    onUploadIcon: (e) =>
                        x({
                            icon: e,
                            unicodeEmoji: null
                        }),
                    onSelectUnicodeEmoji: (e) =>
                        x({
                            icon: null,
                            unicodeEmoji: e
                        })
                });
        });
    }
    let v = (0, l.mY)();
    return (0, i.jsxs)(o.Z, {
        title: m.intl.string(m.t['Ah+sQ0']),
        description: m.intl.string(m.t.ixbWiI),
        children: [
            (0, i.jsx)(r.hjN, {
                title: m.intl.string(m.t['6OUqDQ']),
                disabled: v,
                children: (0, i.jsx)(d.Z, {
                    value: p,
                    onChange: _,
                    disabled: v
                })
            }),
            (0, i.jsx)(r.LZC, { size: 24 }),
            (0, i.jsx)('div', {
                className: h.__invalid_iconSection,
                children: (0, i.jsxs)(r.hjN, {
                    title: m.intl.string(m.t['zn8/AQ']),
                    disabled: v,
                    children: [
                        (0, i.jsx)(r.R94, {
                            type: r.R94.Types.DESCRIPTION,
                            className: h.formDescription,
                            disabled: v,
                            children: m.intl.string(m.t.AqHUra)
                        }),
                        (0, i.jsxs)('div', {
                            className: g.iconUploaderContainer,
                            children: [
                                (0, i.jsx)(u.Z, {
                                    role: C,
                                    'aria-label': m.intl.string(m.t.mD1oGB),
                                    onClick: f,
                                    disabled: v
                                }),
                                (0, i.jsx)(r.zxk, {
                                    look: r.zxk.Looks.OUTLINED,
                                    color: r.zxk.Colors.PRIMARY,
                                    className: h.__invalid_imageUploadButtonCTA,
                                    onClick: f,
                                    disabled: v,
                                    children: m.intl.string(m.t.mD1oGB)
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(r.LZC, { size: 24 }),
            (0, i.jsx)(r.Rny, {
                children: (0, i.jsxs)('div', {
                    className: g.previewContainer,
                    'aria-hidden': !0,
                    children: [
                        (0, i.jsx)(c.Z, {
                            guildId: t,
                            role: C,
                            className: g.messageContainer,
                            theme: 'light'
                        }),
                        (0, i.jsx)(c.Z, {
                            guildId: t,
                            role: C,
                            className: g.messageContainer,
                            theme: 'dark'
                        })
                    ]
                })
            })
        ]
    });
}
