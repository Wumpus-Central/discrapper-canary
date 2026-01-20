i.d(t, { default: () => h }), i(953529), i(388685);
var n = i(54381),
    l = i(473749),
    r = i(512722),
    a = i.n(r),
    o = i(755721),
    s = i(481060),
    d = i(313201),
    u = i(560067),
    c = i(17079),
    p = i(709246),
    g = i(434404),
    G = i(430824),
    S = i(313741),
    b = i(526079),
    C = i(388032),
    m = i(10805);
function f(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, b.Z)({ isGuildIncluded: r });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(s.VcW, {
            onSelectionChange: l,
            value: i,
            options: a,
            placeholder: C.intl.string(C.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}
function h(e) {
    let { transitionState: t, onClose: i, feature: r, section: b, subsection: C } = e,
        h = (0, d.Dt)(),
        {
            canCreateGuild: v,
            createGuildCta: Z,
            createGuildDescription: x,
            selectGuildCta: E,
            title: O,
            description: F,
            isGuildSupported: I,
        } = (0, S.K)(r),
        [M, j] = l.useState(),
        [_, w] = l.useState(!1),
        y = async () => {
            w(!0);
            let e = await new Promise((e) => {
                u.Z.openCreateGuildModal({ onSuccess: e });
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
        "aria-labelledby": h,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(s.xBx, {
                className: m.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(s.Heading, {
                        id: h,
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
                                children: F,
                            }),
                            (0, n.jsxs)("div", {
                                className: m.guildSelection,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: m.guildSelectorContainer,
                                        children: (0, n.jsx)(f, {
                                            guildId: M,
                                            onChange: j,
                                            isGuildIncluded: I,
                                        }),
                                    }),
                                    (0, n.jsx)(s.Button, {
                                        variant: "primary",
                                        text: E,
                                        onClick: () => {
                                            a()(null != M, "Guild ID must not be null on click"),
                                                p.Z.hasSeenCreatorOnboardingForGuild(M) || (0, c.k)(M),
                                                g.Z.open(M, b, void 0, C),
                                                null == i || i();
                                        },
                                        disabled: null == M,
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
                                    onClick: y,
                                    submitting: _,
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
