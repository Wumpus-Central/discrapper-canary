i.d(t, { default: () => v }), i(953529), i(388685);
var n = i(54381),
    l = i(473749),
    r = i(512722),
    a = i.n(r),
    o = i(668339),
    s = i(755721),
    u = i(481060),
    d = i(313201),
    c = i(560067),
    p = i(17079),
    g = i(709246),
    G = i(434404),
    S = i(430824),
    b = i(313741),
    C = i(526079),
    m = i(388032),
    h = i(939964);
function f(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, C.Z)({ isGuildIncluded: r });
    return (0, n.jsx)(o.d, {
        className: t,
        onChange: l,
        value: i,
        options: a,
        placeholder: m.intl.string(m.t.etZ9tX),
    });
}
function v(e) {
    let { transitionState: t, onClose: i, feature: r, section: o, subsection: C } = e,
        m = (0, d.Dt)(),
        {
            canCreateGuild: v,
            createGuildCta: Z,
            createGuildDescription: x,
            selectGuildCta: E,
            title: O,
            description: F,
            isGuildSupported: I,
        } = (0, b.K)(r),
        [_, M] = l.useState(),
        [j, w] = l.useState(!1),
        y = async () => {
            w(!0);
            let e = await new Promise((e) => {
                c.Z.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((t) => {
                S.Z.addChangeListener(function i() {
                    null != S.Z.getGuild(e) && (S.Z.removeChangeListener(i), t());
                });
            }),
                G.Z.open(e, o, void 0, C),
                null == i || i();
        };
    return (0, n.jsxs)(u.Y0X, {
        transitionState: t,
        "aria-labelledby": m,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(u.xBx, {
                className: h.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsx)(u.Heading, {
                        id: m,
                        variant: "heading-lg/medium",
                        children: O,
                    }),
                    (0, n.jsx)(u.olH, { onClick: i }),
                ],
            }),
            (0, n.jsxs)(u.hzk, {
                className: h.modalContent,
                children: [
                    (0, n.jsxs)(u.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: "text-md/medium",
                                children: F,
                            }),
                            (0, n.jsxs)("div", {
                                className: h.guildSelection,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: h.guildSelectorContainer,
                                        children: (0, n.jsx)(f, {
                                            guildId: _,
                                            onChange: M,
                                            isGuildIncluded: I,
                                        }),
                                    }),
                                    (0, n.jsx)(u.Button, {
                                        variant: "primary",
                                        text: E,
                                        onClick: () => {
                                            a()(null != _, "Guild ID must not be null on click"),
                                                g.Z.hasSeenCreatorOnboardingForGuild(_) || (0, p.k)(_),
                                                G.Z.open(_, o, void 0, C),
                                                null == i || i();
                                        },
                                        disabled: null == _,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    v &&
                        (0, n.jsxs)(u.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    children: x,
                                }),
                                (0, n.jsx)(s.zx, {
                                    onClick: y,
                                    submitting: j,
                                    className: h.createGuildButton,
                                    children: Z,
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
