t.d(i, { default: () => m }), t(47120);
var n = t(200651),
    l = t(192379),
    s = t(512722),
    d = t.n(s),
    r = t(481060),
    u = t(313201),
    a = t(560067),
    o = t(434404),
    c = t(430824),
    p = t(313741),
    g = t(526079),
    C = t(388032),
    G = t(990444);
function h(e) {
    let { className: i, guildId: t, onChange: l, isGuildIncluded: s } = e,
        { options: d } = (0, g.Z)({ isGuildIncluded: s });
    return (0, n.jsx)(r.VcW, {
        className: i,
        onChange: l,
        value: t,
        options: d,
        placeholder: C.intl.string(C.t.etZ9tb)
    });
}
function m(e) {
    let { transitionState: i, onClose: t, feature: s, section: g, subsection: C } = e,
        m = (0, u.Dt)(),
        { canCreateGuild: Z, createGuildCta: S, createGuildDescription: x, selectGuildCta: v, title: b, description: f, isGuildSupported: j } = (0, p.K)(s),
        [I, F] = l.useState(),
        [k, _] = l.useState(!1),
        E = async () => {
            _(!0);
            let e = await new Promise((e) => {
                a.Z.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((i) => {
                c.Z.addChangeListener(function t() {
                    null != c.Z.getGuild(e) && (c.Z.removeChangeListener(t), i());
                });
            }),
                o.Z.open(e, g, void 0, C),
                null == t || t();
        };
    return (0, n.jsxs)(r.Y0X, {
        transitionState: i,
        'aria-labelledby': m,
        children: [
            (0, n.jsxs)(r.xBx, {
                className: G.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(r.X6q, {
                        id: m,
                        variant: 'heading-lg/medium',
                        children: b
                    }),
                    (0, n.jsx)(r.olH, { onClick: t })
                ]
            }),
            (0, n.jsxs)(r.hzk, {
                className: G.modalContent,
                children: [
                    (0, n.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        children: f
                    }),
                    (0, n.jsx)(r.LZC, { size: 16 }),
                    (0, n.jsxs)('div', {
                        className: G.guildSelection,
                        children: [
                            (0, n.jsx)('div', {
                                className: G.guildSelectorContainer,
                                children: (0, n.jsx)(h, {
                                    guildId: I,
                                    onChange: F,
                                    isGuildIncluded: j
                                })
                            }),
                            (0, n.jsx)(r.zxk, {
                                onClick: () => {
                                    d()(null != I, 'Guild ID must not be null on click'), o.Z.open(I, g, void 0, C), null == t || t();
                                },
                                disabled: null == I,
                                children: v
                            })
                        ]
                    }),
                    Z &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(r.LZC, { size: 32 }),
                                (0, n.jsx)(r.Text, {
                                    variant: 'text-md/medium',
                                    children: x
                                }),
                                (0, n.jsx)(r.LZC, { size: 8 }),
                                (0, n.jsx)(r.zxk, {
                                    onClick: E,
                                    submitting: k,
                                    children: S
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
