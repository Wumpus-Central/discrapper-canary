(i.d(t, { default: () => b }), i(953529), i(388685));
var n = i(255367),
    l = i(73800),
    r = i(512722),
    a = i.n(r),
    u = i(481060),
    s = i(313201),
    d = i(560067),
    o = i(434404),
    c = i(430824),
    p = i(313741),
    g = i(526079),
    G = i(388032),
    C = i(352897);
function m(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, g.Z)({ isGuildIncluded: r });
    return (0, n.jsx)(u.VcW, {
        className: t,
        onChange: l,
        value: i,
        options: a,
        placeholder: G.intl.string(G.t.etZ9tb)
    });
}
function b(e) {
    let { transitionState: t, onClose: i, feature: r, section: g, subsection: G } = e,
        b = (0, s.Dt)(),
        { canCreateGuild: h, createGuildCta: S, createGuildDescription: v, selectGuildCta: f, title: Z, description: x, isGuildSupported: j } = (0, p.K)(r),
        [O, I] = l.useState(),
        [k, _] = l.useState(!1),
        w = async () => {
            _(!0);
            let e = await new Promise((e) => {
                d.Z.openCreateGuildModal({ onSuccess: e });
            });
            (await new Promise((t) => {
                c.Z.addChangeListener(function i() {
                    null != c.Z.getGuild(e) && (c.Z.removeChangeListener(i), t());
                });
            }),
                o.Z.open(e, g, void 0, G),
                null == i || i());
        };
    return (0, n.jsxs)(u.Y0X, {
        transitionState: t,
        'aria-labelledby': b,
        parentComponent: 'GuildSettingsPickerModal',
        children: [
            (0, n.jsxs)(u.xBx, {
                className: C.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(u.X6q, {
                        id: b,
                        variant: 'heading-lg/medium',
                        children: Z
                    }),
                    (0, n.jsx)(u.olH, { onClick: i })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: C.modalContent,
                children: [
                    (0, n.jsxs)(u.Kqy, {
                        direction: 'vertical',
                        gap: 8,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                children: x
                            }),
                            (0, n.jsxs)('div', {
                                className: C.guildSelection,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: C.guildSelectorContainer,
                                        children: (0, n.jsx)(m, {
                                            guildId: O,
                                            onChange: I,
                                            isGuildIncluded: j
                                        })
                                    }),
                                    (0, n.jsx)(u.zxk, {
                                        onClick: () => {
                                            (a()(null != O, 'Guild ID must not be null on click'), o.Z.open(O, g, void 0, G), null == i || i());
                                        },
                                        disabled: null == O,
                                        children: f
                                    })
                                ]
                            })
                        ]
                    }),
                    h &&
                        (0, n.jsxs)(u.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    children: v
                                }),
                                (0, n.jsx)(u.zxk, {
                                    onClick: w,
                                    submitting: k,
                                    className: C.createGuildButton,
                                    children: S
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
