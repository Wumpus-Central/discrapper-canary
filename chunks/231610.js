n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(723047),
    a = n(727843),
    s = n(290348),
    o = n(783454),
    c = n(893729),
    d = n(619326),
    u = n(553204),
    m = n(388032),
    h = n(83701),
    g = n(952134);
function x() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [, x] = s.p9(e, t),
        [p, f] = s.Ek(e, t),
        C = s.qs(e, t);
    function v() {
        (0, r.openModalLazy)(async () => {
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
    let _ = (0, l.mY)();
    return (0, i.jsxs)(o.Z, {
        title: m.intl.string(m.t['Ah+sQ0']),
        description: m.intl.string(m.t.ixbWiI),
        children: [
            (0, i.jsx)(r.FormSection, {
                title: m.intl.string(m.t['6OUqDQ']),
                disabled: _,
                children: (0, i.jsx)(d.Z, {
                    value: p,
                    onChange: f,
                    disabled: _
                })
            }),
            (0, i.jsx)(r.Spacer, { size: 24 }),
            (0, i.jsx)('div', {
                className: h.__invalid_iconSection,
                children: (0, i.jsxs)(r.FormSection, {
                    title: m.intl.string(m.t['zn8/AQ']),
                    disabled: _,
                    children: [
                        (0, i.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: h.formDescription,
                            disabled: _,
                            children: m.intl.string(m.t.AqHUra)
                        }),
                        (0, i.jsxs)('div', {
                            className: g.iconUploaderContainer,
                            children: [
                                (0, i.jsx)(u.Z, {
                                    role: C,
                                    'aria-label': m.intl.string(m.t.mD1oGB),
                                    onClick: v,
                                    disabled: _
                                }),
                                (0, i.jsx)(r.Button, {
                                    look: r.Button.Looks.OUTLINED,
                                    color: r.Button.Colors.PRIMARY,
                                    className: h.__invalid_imageUploadButtonCTA,
                                    onClick: v,
                                    disabled: _,
                                    children: m.intl.string(m.t.mD1oGB)
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(r.Spacer, { size: 24 }),
            (0, i.jsx)(r.FocusBlock, {
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
