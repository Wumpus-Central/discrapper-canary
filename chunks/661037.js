i.d(t, { default: () => M });
var n = i(627968),
    l = i(64700),
    a = i(284009),
    s = i.n(a),
    r = i(862482),
    d = i(783878),
    o = i(935462),
    u = i(534514),
    c = i(331322),
    G = i(834730),
    p = i(821609),
    g = i(915089),
    S = i(272613),
    C = i(544199),
    h = i(448564),
    A = i(997509),
    b = i(71393),
    m = i(751394),
    E = i(720619),
    v = i(985018),
    x = i(553634);
function _(e) {
    let { className: t, guildId: i, onChange: l, isGuildIncluded: a } = e,
        { options: s } = (0, E.A)({ isGuildIncluded: a });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.Z, {
            onSelectionChange: l,
            value: i,
            options: s,
            placeholder: v.intl.string(v.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}
function M(e) {
    let { transitionState: t, onClose: i, feature: a, section: d, subsection: E } = e,
        v = (0, g.GV)(),
        {
            canCreateGuild: M,
            createGuildCta: I,
            createGuildDescription: j,
            selectGuildCta: N,
            title: F,
            description: O,
            isGuildSupported: R,
        } = (0, m.q)(a),
        [T, f] = l.useState(),
        [z, w] = l.useState(!1),
        y = async () => {
            w(!0);
            let e = await new Promise((e) => {
                S.A.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((t) => {
                b.A.addChangeListener(function i() {
                    null != b.A.getGuild(e) && (b.A.removeChangeListener(i), t());
                });
            }),
                A.A.open(e, d, void 0, E),
                i?.();
        };
    return (0, n.jsxs)(o.EO, {
        transitionState: t,
        "aria-labelledby": v,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(o.rQ, {
                className: x.Hc,
                separator: !1,
                children: [
                    (0, n.jsx)(u.D, { id: v, variant: "heading-lg/medium", children: F }),
                    (0, n.jsx)(o.s_, { onClick: i }),
                ],
            }),
            (0, n.jsxs)(o.$m, {
                className: x.jE,
                children: [
                    (0, n.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(G.E, { variant: "text-md/medium", children: O }),
                            (0, n.jsxs)("div", {
                                className: x.ce,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: x.oN,
                                        children: (0, n.jsx)(_, { guildId: T, onChange: f, isGuildIncluded: R }),
                                    }),
                                    (0, n.jsx)(p.$, {
                                        variant: "primary",
                                        text: N,
                                        onClick: () => {
                                            s()(null != T, "Guild ID must not be null on click"),
                                                h.A.hasSeenCreatorOnboardingForGuild(T) || (0, C.G)(T),
                                                A.A.open(T, d, void 0, E),
                                                i?.();
                                        },
                                        disabled: null == T,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    M &&
                        (0, n.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(G.E, { variant: "text-md/medium", children: j }),
                                (0, n.jsx)(r.$n, { onClick: y, submitting: z, className: x.qo, children: I }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
