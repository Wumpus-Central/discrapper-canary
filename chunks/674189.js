i.d(t, { default: () => f }), i(953529), i(388685);
var n = i(951288),
    l = i(647438),
    r = i(512722),
    a = i.n(r),
    o = i(755721),
    s = i(481060),
    u = i(313201),
    d = i(560067),
    c = i(17079),
    p = i(709246),
    g = i(434404),
    G = i(430824),
    S = i(313741),
    b = i(526079),
    C = i(388032),
    m = i(939964);
function h(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, b.Z)({ isGuildIncluded: r });
    return (0, n.jsx)(s.VcW, {
        className: t,
        onChange: l,
        value: i,
        options: a,
        placeholder: C.intl.string(C.t.etZ9tb),
    });
}
function f(e) {
    let { transitionState: t, onClose: i, feature: r, section: b, subsection: C } = e,
        f = (0, u.Dt)(),
        {
            canCreateGuild: v,
            createGuildCta: Z,
            createGuildDescription: x,
            selectGuildCta: E,
            title: O,
            description: I,
            isGuildSupported: _,
        } = (0, S.K)(r),
        [F, M] = l.useState(),
        [j, N] = l.useState(!1),
        w = async () => {
            N(!0);
            let e = await new Promise((e) => {
                d.Z.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((t) => {
                G.Z.addChangeListener(function i() {
                    null != G.Z.getGuild(e) && (G.Z.removeChangeListener(i), t());
                });
            }),
                g.Z.open(e, b, void 0, C),
                null == i || i();
        };
    return (0, n.jsxs)(s.Y0X, {
        transitionState: t,
        "aria-labelledby": f,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(s.xBx, {
                className: m.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(s.X6q, {
                        id: f,
                        variant: "heading-lg/medium",
                        children: O,
                    }),
                    (0, n.jsx)(s.olH, { onClick: i }),
                ],
            }),
            (0, n.jsxs)(s.hzk, {
                className: m.modalContent,
                children: [
                    (0, n.jsxs)(s.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: I,
                            }),
                            (0, n.jsxs)("div", {
                                className: m.guildSelection,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: m.guildSelectorContainer,
                                        children: (0, n.jsx)(h, {
                                            guildId: F,
                                            onChange: M,
                                            isGuildIncluded: _,
                                        }),
                                    }),
                                    (0, n.jsx)(s.zxk, {
                                        variant: "primary",
                                        text: E,
                                        onClick: () => {
                                            a()(null != F, "Guild ID must not be null on click"),
                                                p.Z.hasSeenCreatorOnboardingForGuild(F) || (0, c.k)(F),
                                                g.Z.open(F, b, void 0, C),
                                                null == i || i();
                                        },
                                        disabled: null == F,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    v &&
                        (0, n.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: x,
                                }),
                                (0, n.jsx)(o.zx, {
                                    onClick: w,
                                    submitting: j,
                                    className: m.createGuildButton,
                                    children: Z,
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
