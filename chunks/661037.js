i.d(t, {
    default: () => C,
}),
    i(228524),
    i(896048);
var n = i(627968),
    l = i(64700),
    r = i(284009),
    a = i.n(r),
    s = i(421380),
    d = i(397927),
    o = i(915089),
    u = i(272613),
    c = i(544199),
    b = i(448564),
    p = i(997509),
    G = i(71393),
    g = i(751394),
    S = i(720619),
    A = i(985018),
    h = i(857161);

function m(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: r } = e,
        { options: a } = (0, S.A)({
            isGuildIncluded: r,
        });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.ZiE, {
            onSelectionChange: l,
            value: i,
            options: a,
            placeholder: A.intl.string(A.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}

function C(e) {
    let { transitionState: t, onClose: i, feature: r, section: S, subsection: A } = e,
        C = (0, o.GV)(),
        {
            canCreateGuild: v,
            createGuildCta: f,
            createGuildDescription: E,
            selectGuildCta: O,
            title: x,
            description: M,
            isGuildSupported: j,
        } = (0, g.q)(r),
        [I, y] = l.useState(),
        [F, N] = l.useState(!1),
        w = async () => {
            N(!0);
            let e = await new Promise((e) => {
                u.A.openCreateGuildModal({
                    onSuccess: e,
                });
            });
            await new Promise((t) => {
                G.A.addChangeListener(function i() {
                    null != G.A.getGuild(e) && (G.A.removeChangeListener(i), t());
                });
            }),
                p.A.open(e, S, void 0, A),
                null == i || i();
        };
    return (0, n.jsxs)(d.EOs, {
        transitionState: t,
        "aria-labelledby": C,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(d.rQ0, {
                className: h.Hc,
                separator: !1,
                children: [
                    (0, n.jsx)(d.Heading, {
                        id: C,
                        variant: "heading-lg/medium",
                        children: x,
                    }),
                    (0, n.jsx)(d.s_y, {
                        onClick: i,
                    }),
                ],
            }),
            (0, n.jsxs)(d.$mQ, {
                className: h.jE,
                children: [
                    (0, n.jsxs)(d.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(d.Text, {
                                variant: "text-md/medium",
                                children: M,
                            }),
                            (0, n.jsxs)("div", {
                                className: h.ce,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: h.oN,
                                        children: (0, n.jsx)(m, {
                                            guildId: I,
                                            onChange: y,
                                            isGuildIncluded: j,
                                        }),
                                    }),
                                    (0, n.jsx)(d.Button, {
                                        variant: "primary",
                                        text: O,
                                        onClick: () => {
                                            a()(null != I, "Guild ID must not be null on click"),
                                                b.A.hasSeenCreatorOnboardingForGuild(I) || (0, c.G)(I),
                                                p.A.open(I, S, void 0, A),
                                                null == i || i();
                                        },
                                        disabled: null == I,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    v &&
                        (0, n.jsxs)(d.BJc, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    children: E,
                                }),
                                (0, n.jsx)(s.$n, {
                                    onClick: w,
                                    submitting: F,
                                    className: h.qo,
                                    children: f,
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
