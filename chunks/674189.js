i.r(t),
    i.d(t, {
        default: function () {
            return h;
        }
    }),
    i(47120);
var n = i(200651),
    l = i(192379),
    d = i(512722),
    r = i.n(d),
    s = i(481060),
    a = i(313201),
    u = i(560067),
    o = i(434404),
    c = i(430824),
    p = i(313741),
    g = i(526079),
    C = i(388032),
    G = i(361955);
function S(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: d } = e,
        { options: r } = (0, g.Z)({ isGuildIncluded: d });
    return (0, n.jsx)(s.SearchableSelect, {
        className: t,
        onChange: l,
        value: i,
        options: r,
        placeholder: C.intl.string(C.t.etZ9tb)
    });
}
function h(e) {
    let { transitionState: t, onClose: i, feature: d, section: g, subsection: C } = e,
        h = (0, a.Dt)(),
        { canCreateGuild: m, createGuildCta: f, createGuildDescription: v, selectGuildCta: Z, title: b, description: x, isGuildSupported: j } = (0, p.K)(d),
        [I, F] = l.useState(),
        [M, R] = l.useState(!1),
        E = async () => {
            var e;
            R(!0);
            let t = await new Promise((e) => {
                u.Z.openCreateGuildModal({ onSuccess: e });
            });
            await ((e = t),
            new Promise((t) => {
                c.Z.addChangeListener(function i() {
                    null != c.Z.getGuild(e) && (c.Z.removeChangeListener(i), t());
                });
            })),
                o.Z.open(t, g, void 0, C),
                null == i || i();
        };
    return (0, n.jsxs)(s.ModalRoot, {
        transitionState: t,
        'aria-labelledby': h,
        children: [
            (0, n.jsxs)(s.ModalHeader, {
                className: G.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(s.Heading, {
                        id: h,
                        variant: 'heading-lg/medium',
                        children: b
                    }),
                    (0, n.jsx)(s.ModalCloseButton, { onClick: i })
                ]
            }),
            (0, n.jsxs)(s.ModalContent, {
                className: G.modalContent,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        children: x
                    }),
                    (0, n.jsx)(s.Spacer, { size: 16 }),
                    (0, n.jsxs)('div', {
                        className: G.guildSelection,
                        children: [
                            (0, n.jsx)('div', {
                                className: G.guildSelectorContainer,
                                children: (0, n.jsx)(S, {
                                    guildId: I,
                                    onChange: F,
                                    isGuildIncluded: j
                                })
                            }),
                            (0, n.jsx)(s.Button, {
                                onClick: () => {
                                    r()(null != I, 'Guild ID must not be null on click'), o.Z.open(I, g, void 0, C), null == i || i();
                                },
                                disabled: null == I,
                                children: Z
                            })
                        ]
                    }),
                    m &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.Spacer, { size: 32 }),
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-md/medium',
                                    children: v
                                }),
                                (0, n.jsx)(s.Spacer, { size: 8 }),
                                (0, n.jsx)(s.Button, {
                                    onClick: E,
                                    submitting: M,
                                    children: f
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
