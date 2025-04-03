i.d(t, { default: () => m }), i(266796), i(47120);
var n = i(200651),
    l = i(192379),
    r = i(512722),
    s = i.n(r),
    u = i(481060),
    a = i(313201),
    d = i(560067),
    o = i(434404),
    c = i(430824),
    p = i(313741),
    g = i(526079),
    C = i(388032),
    G = i(352897);
function b(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: s } = (0, g.Z)({ isGuildIncluded: r });
    return (0, n.jsx)(u.VcW, {
        className: t,
        onChange: l,
        value: i,
        options: s,
        placeholder: C.NW.string(C.t.etZ9tb)
    });
}
function m(e) {
    let { transitionState: t, onClose: i, feature: r, section: g, subsection: C } = e,
        m = (0, a.Dt)(),
        { canCreateGuild: h, createGuildCta: S, createGuildDescription: Z, selectGuildCta: v, title: f, description: x, isGuildSupported: N } = (0, p.K)(r),
        [j, O] = l.useState(),
        [I, k] = l.useState(!1),
        F = async () => {
            k(!0);
            let e = await new Promise((e) => {
                d.Z.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((t) => {
                c.Z.addChangeListener(function i() {
                    null != c.Z.getGuild(e) && (c.Z.removeChangeListener(i), t());
                });
            }),
                o.Z.open(e, g, void 0, C),
                null == i || i();
        };
    return (0, n.jsxs)(u.Y0X, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, n.jsxs)(u.xBx, {
                className: G.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(u.X6q, {
                        id: m,
                        variant: 'heading-lg/medium',
                        children: f
                    }),
                    (0, n.jsx)(u.olH, { onClick: i })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: G.modalContent,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: 'text-md/medium',
                        children: x
                    }),
                    (0, n.jsx)(u.LZC, { size: 16 }),
                    (0, n.jsxs)('div', {
                        className: G.guildSelection,
                        children: [
                            (0, n.jsx)('div', {
                                className: G.guildSelectorContainer,
                                children: (0, n.jsx)(b, {
                                    guildId: j,
                                    onChange: O,
                                    isGuildIncluded: N
                                })
                            }),
                            (0, n.jsx)(u.zxk, {
                                onClick: () => {
                                    s()(null != j, 'Guild ID must not be null on click'), o.Z.open(j, g, void 0, C), null == i || i();
                                },
                                disabled: null == j,
                                children: v
                            })
                        ]
                    }),
                    h &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(u.LZC, { size: 32 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    children: Z
                                }),
                                (0, n.jsx)(u.LZC, { size: 8 }),
                                (0, n.jsx)(u.zxk, {
                                    onClick: F,
                                    submitting: I,
                                    children: S
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
