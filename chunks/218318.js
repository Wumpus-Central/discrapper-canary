a.d(t, { default: () => L });
var n = a(627968),
    s = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(110259),
    o = a(311907),
    c = a(397927),
    _ = a(765671),
    d = a(235986),
    u = a(915089),
    m = a(362311),
    p = a(230801),
    f = a(424912),
    E = a(468820),
    N = a(287809),
    A = a(954571),
    h = a(426620),
    b = a(603738),
    x = a(701077),
    T = a(758384),
    C = a(239763),
    I = a(771016),
    j = a(994277),
    D = a(652215),
    g = a(570465),
    y = a(819638),
    G = a(985018),
    v = a(147732);
function L(e) {
    let t = (0, u.GV)(),
        { onSlideChange: a, ...i } = e,
        { onClose: L } = i,
        [O, U] = s.useState(!1),
        k = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
        S = null != k && null == k.nsfwAllowed,
        [R, M] = s.useState(S ? j.i.AGE_GATE : j.i.CHOOSE_TEMPLATE),
        [w, W] = s.useState(null);
    s.useEffect(() => {
        a(O ? j.i.COMPLETE : R);
    }, [a, R, O]);
    let [P, $] = s.useState(null),
        [H, B] = s.useState(null),
        [V, F] = s.useState(!1),
        q = (0, o.bG)([h.A], () => h.A.getType() === I.zY.INVITE_UNCLAIMED),
        z = s.useCallback(
            (e) => {
                B(e),
                    M(j.i.CREATION_INTENT),
                    A.default.track(D.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.label, template_code: e.code });
            },
            [B, M],
        ),
        { content: J, footer: Y } = (0, p.u)({
            hasFooter: !1,
            onBack: () => {
                B(null), M(j.i.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                F(e === y.IR.COMMUNITY), M(j.i.CUSTOMIZE_GUILD);
            },
        }),
        { content: Z, footer: K } = (0, f.D)({
            guildTemplate: H,
            titleClassName: v.RH,
            hasFooter: !1,
            onGuildCreated: (e) => {
                $(e), H?.id === g.v.CREATE ? M(j.i.CHANNEL_PROMPT) : U(!0);
            },
            onBack: () => {
                M(j.i.CREATION_INTENT);
            },
            isSlideReady: w === j.i.CUSTOMIZE_GUILD,
            isCommunity: V,
        }),
        { content: Q, footer: X } = (0, m.m)({
            createdGuildId: P,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                U(!0);
            },
            isSlideReady: w === j.i.CHANNEL_PROMPT,
        }),
        { content: ee, footer: et } = (0, T.A)({
            onBack: () => M(j.i.CHOOSE_TEMPLATE),
            onComplete: () => {
                L();
            },
            onConnect: L,
            isSlideReady: w === j.i.JOIN_GUILD,
        }),
        ea = null;
    switch (R) {
        case j.i.CUSTOMIZE_GUILD:
            ea = K;
            break;
        case j.i.CHANNEL_PROMPT:
            ea = X;
            break;
        case j.i.JOIN_GUILD:
            ea = et;
            break;
        case j.i.CREATION_INTENT:
            ea = Y;
    }
    let { ref: en, width: es } = (0, _.Ay)();
    if (O)
        return (0, n.jsx)(c.EOs, {
            ...i,
            "data-migration-pending": !0,
            size: c.rIJ.MEDIUM,
            className: l()(v.yl, v.so),
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: (0, n.jsx)(x.A, { onComplete: L }),
        });
    let ei = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, n.jsxs)(c.EOs, {
        ...i,
        "data-migration-pending": !0,
        size: c.rIJ.MEDIUM,
        className: v.yl,
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: [
            (0, n.jsx)("div", { className: v.pz, children: (0, n.jsx)(C.A, { step: R }) }),
            (0, n.jsx)(c.NPJ, {
                theme: D.NJ8.LIGHT,
                children: (e) =>
                    (0, n.jsxs)("div", {
                        className: l()(v.Qs, e),
                        ref: en,
                        children: [
                            (0, n.jsx)("div", {
                                className: v.WT,
                                children: (0, n.jsxs)(c.tN_, {
                                    activeSlide: R,
                                    onSlideReady: (e) => W(e),
                                    centered: !1,
                                    width: es,
                                    children: [
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.AGE_GATE,
                                            children: (0, n.jsx)("div", {
                                                className: v.kL,
                                                children: (0, n.jsx)(b.A, {
                                                    onComplete: () => {
                                                        q ? L() : M(j.i.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: L,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.CHOOSE_TEMPLATE,
                                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: ei,
                                            children: (0, n.jsx)("div", {
                                                className: l()(v.kL, v.yT),
                                                children: (0, n.jsx)(E.A, {
                                                    className: v.kT,
                                                    onChooseTemplate: z,
                                                    isNewUser: !0,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.CREATION_INTENT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: ei,
                                            children: (0, n.jsx)("div", { className: l()(v.kL, v.tn), children: J }),
                                        }),
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.CUSTOMIZE_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: ei,
                                            children: (0, n.jsx)("div", { className: l()(v.kL, v.tn), children: Z }),
                                        }),
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.CHANNEL_PROMPT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: ei,
                                            children: (0, n.jsx)("div", { className: l()(v.kL, v.tn), children: Q }),
                                        }),
                                        (0, n.jsx)(c.q7S, {
                                            id: j.i.JOIN_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: ei,
                                            children: (0, n.jsx)("div", { className: l()(v.kL, v.tn), children: ee }),
                                        }),
                                    ],
                                }),
                            }),
                            R !== j.i.AGE_GATE
                                ? (0, n.jsx)(c.s_y, { "data-migration-pending": !0, onClick: L, className: v.b })
                                : null,
                            R === j.i.CHOOSE_TEMPLATE
                                ? (0, n.jsx)(c.jlY, {
                                      "data-migration-pending": !0,
                                      justify: d.A.Justify.BETWEEN,
                                      className: l()(v.qr, v.fj),
                                      children: (0, n.jsx)(c.MzZ, {
                                          className: v.D3,
                                          onClick: () => {
                                              M(j.i.JOIN_GUILD);
                                          },
                                          children: (0, n.jsxs)(c.Text, {
                                              variant: "text-sm/medium",
                                              className: v.D3,
                                              children: [G.intl.string(G.t["N+Mi/U"]), " ", G.intl.string(G.t.yRjK4p)],
                                          }),
                                      }),
                                  })
                                : null,
                            null != ea
                                ? (0, n.jsx)(c.jlY, {
                                      "data-migration-pending": !0,
                                      justify: d.A.Justify.BETWEEN,
                                      className: v.qr,
                                      children: ea,
                                  })
                                : null,
                        ],
                    }),
            }),
        ],
    });
}
