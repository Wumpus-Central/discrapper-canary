(i.d(t, { default: () => h }), i(953529), i(388685));
var n = i(255367),
    l = i(73800),
    r = i(512722),
    a = i.n(r),
    s = i(755721),
    u = i(481060),
    d = i(313201),
    o = i(560067),
    c = i(434404),
    p = i(430824),
    g = i(313741),
    G = i(526079),
    C = i(388032),
    m = i(352897);
function b(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, G.Z)({ isGuildIncluded: r });
    return (0, n.jsx)(u.VcW, {
        className: t,
        onChange: l,
        value: i,
        options: a,
        placeholder: C.intl.string(C.t.etZ9tb)
    });
}
function h(e) {
    let { transitionState: t, onClose: i, feature: r, section: G, subsection: C } = e,
        h = (0, d.Dt)(),
        { canCreateGuild: v, createGuildCta: S, createGuildDescription: f, selectGuildCta: Z, title: x, description: j, isGuildSupported: I } = (0, g.K)(r),
        [O, _] = l.useState(),
        [k, y] = l.useState(!1),
        E = async () => {
            y(!0);
            let e = await new Promise((e) => {
                o.Z.openCreateGuildModal({ onSuccess: e });
            });
            (await new Promise((t) => {
                p.Z.addChangeListener(function i() {
                    null != p.Z.getGuild(e) && (p.Z.removeChangeListener(i), t());
                });
            }),
                c.Z.open(e, G, void 0, C),
                null == i || i());
        };
    return (0, n.jsxs)(u.Y0X, {
        transitionState: t,
        'aria-labelledby': h,
        parentComponent: 'GuildSettingsPickerModal',
        children: [
            (0, n.jsxs)(u.xBx, {
                className: m.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(u.X6q, {
                        id: h,
                        variant: 'heading-lg/medium',
                        children: x
                    }),
                    (0, n.jsx)(u.olH, { onClick: i })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: m.modalContent,
                children: [
                    (0, n.jsxs)(u.Kqy, {
                        direction: 'vertical',
                        gap: 8,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                children: j
                            }),
                            (0, n.jsxs)('div', {
                                className: m.guildSelection,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: m.guildSelectorContainer,
                                        children: (0, n.jsx)(b, {
                                            guildId: O,
                                            onChange: _,
                                            isGuildIncluded: I
                                        })
                                    }),
                                    (0, n.jsx)(u.zxk, {
                                        variant: 'primary',
                                        text: Z,
                                        onClick: () => {
                                            (a()(null != O, 'Guild ID must not be null on click'), c.Z.open(O, G, void 0, C), null == i || i());
                                        },
                                        disabled: null == O
                                    })
                                ]
                            })
                        ]
                    }),
                    v &&
                        (0, n.jsxs)(u.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    children: f
                                }),
                                (0, n.jsx)(s.zx, {
                                    onClick: E,
                                    submitting: k,
                                    className: m.createGuildButton,
                                    children: S
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
