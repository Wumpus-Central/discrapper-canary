a.d(t, { default: () => S });
var n = a(627968),
    s = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(110259),
    o = a(311907),
    c = a(935462),
    _ = a(43990),
    d = a(430690),
    u = a(349288),
    m = a(834730),
    p = a(765671),
    f = a(235986),
    E = a(915089),
    A = a(362311),
    h = a(230801),
    N = a(424912),
    b = a(468820),
    x = a(287809),
    T = a(954571),
    D = a(426620),
    j = a(603738),
    C = a(701077),
    I = a(758384),
    g = a(239763),
    y = a(771016),
    G = a(994277),
    v = a(652215),
    L = a(570465),
    U = a(819638),
    k = a(985018),
    O = a(735581);
function S(e) {
    let t = (0, E.GV)(),
        { onSlideChange: a, ...i } = e,
        { onClose: S } = i,
        [R, M] = s.useState(!1),
        w = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        W = null != w && null == w.nsfwAllowed,
        [P, B] = s.useState(W ? G.i.AGE_GATE : G.i.CHOOSE_TEMPLATE),
        [F, V] = s.useState(null);
    s.useEffect(() => {
        a(R ? G.i.COMPLETE : P);
    }, [a, P, R]);
    let [$, H] = s.useState(null),
        [q, z] = s.useState(null),
        [Y, J] = s.useState(!1),
        Z = (0, o.bG)([D.A], () => D.A.getType() === y.zY.INVITE_UNCLAIMED),
        K = s.useCallback(
            (e) => {
                z(e),
                    B(G.i.CREATION_INTENT),
                    T.default.track(v.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.label, template_code: e.code });
            },
            [z, B],
        ),
        { content: Q, footer: X } = (0, h.u)({
            hasFooter: !1,
            onBack: () => {
                z(null), B(G.i.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                J(e === U.IR.COMMUNITY), B(G.i.CUSTOMIZE_GUILD);
            },
        }),
        { content: ee, footer: et } = (0, N.D)({
            guildTemplate: q,
            titleClassName: O.RH,
            hasFooter: !1,
            onGuildCreated: (e) => {
                H(e), q?.id === L.v.CREATE ? B(G.i.CHANNEL_PROMPT) : M(!0);
            },
            onBack: () => {
                B(G.i.CREATION_INTENT);
            },
            isSlideReady: F === G.i.CUSTOMIZE_GUILD,
            isCommunity: Y,
        }),
        { content: ea, footer: en } = (0, A.m)({
            createdGuildId: $,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                M(!0);
            },
            isSlideReady: F === G.i.CHANNEL_PROMPT,
        }),
        { content: es, footer: ei } = (0, I.A)({
            onBack: () => B(G.i.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: F === G.i.JOIN_GUILD,
        }),
        el = null;
    switch (P) {
        case G.i.CUSTOMIZE_GUILD:
            el = et;
            break;
        case G.i.CHANNEL_PROMPT:
            el = en;
            break;
        case G.i.JOIN_GUILD:
            el = ei;
            break;
        case G.i.CREATION_INTENT:
            el = X;
    }
    let { ref: er, width: eo } = (0, p.Ay)();
    if (R)
        return (0, n.jsx)(c.EO, {
            ...i,
            "data-migration-pending": !0,
            size: c.rI.MEDIUM,
            className: l()(O.yl, O.so),
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: (0, n.jsx)(C.A, { onComplete: S }),
        });
    let ec = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, n.jsxs)(c.EO, {
        ...i,
        "data-migration-pending": !0,
        size: c.rI.MEDIUM,
        className: O.yl,
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: [
            (0, n.jsx)("div", { className: O.pz, children: (0, n.jsx)(g.A, { step: P }) }),
            (0, n.jsx)(_.N, {
                theme: v.NJ8.LIGHT,
                children: (e) =>
                    (0, n.jsxs)("div", {
                        className: l()(O.Qs, e),
                        ref: er,
                        children: [
                            (0, n.jsx)("div", {
                                className: O.WT,
                                children: (0, n.jsxs)(d.t, {
                                    activeSlide: P,
                                    onSlideReady: (e) => V(e),
                                    centered: !1,
                                    width: eo,
                                    children: [
                                        (0, n.jsx)(d.q, {
                                            id: G.i.AGE_GATE,
                                            children: (0, n.jsx)("div", {
                                                className: O.kL,
                                                children: (0, n.jsx)(j.A, {
                                                    onComplete: () => {
                                                        Z ? S() : B(G.i.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: S,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)(d.q, {
                                            id: G.i.CHOOSE_TEMPLATE,
                                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: ec,
                                            children: (0, n.jsx)("div", {
                                                className: l()(O.kL, O.yT),
                                                children: (0, n.jsx)(b.A, {
                                                    className: O.kT,
                                                    onChooseTemplate: K,
                                                    isNewUser: !0,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)(d.q, {
                                            id: G.i.CREATION_INTENT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: ec,
                                            children: (0, n.jsx)("div", { className: l()(O.kL, O.tn), children: Q }),
                                        }),
                                        (0, n.jsx)(d.q, {
                                            id: G.i.CUSTOMIZE_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: ec,
                                            children: (0, n.jsx)("div", { className: l()(O.kL, O.tn), children: ee }),
                                        }),
                                        (0, n.jsx)(d.q, {
                                            id: G.i.CHANNEL_PROMPT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: ec,
                                            children: (0, n.jsx)("div", { className: l()(O.kL, O.tn), children: ea }),
                                        }),
                                        (0, n.jsx)(d.q, {
                                            id: G.i.JOIN_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: ec,
                                            children: (0, n.jsx)("div", { className: l()(O.kL, O.tn), children: es }),
                                        }),
                                    ],
                                }),
                            }),
                            P !== G.i.AGE_GATE
                                ? (0, n.jsx)(c.s_, { "data-migration-pending": !0, onClick: S, className: O.b })
                                : null,
                            P === G.i.CHOOSE_TEMPLATE
                                ? (0, n.jsx)(c.jl, {
                                      "data-migration-pending": !0,
                                      justify: f.A.Justify.BETWEEN,
                                      className: l()(O.qr, O.fj),
                                      children: (0, n.jsx)(u.Anchor, {
                                          className: O.D3,
                                          onClick: () => {
                                              B(G.i.JOIN_GUILD);
                                          },
                                          children: (0, n.jsxs)(m.E, {
                                              variant: "text-sm/medium",
                                              className: O.D3,
                                              children: [k.intl.string(k.t["N+Mi/U"]), " ", k.intl.string(k.t.yRjK4p)],
                                          }),
                                      }),
                                  })
                                : null,
                            null != el
                                ? (0, n.jsx)(c.jl, {
                                      "data-migration-pending": !0,
                                      justify: f.A.Justify.BETWEEN,
                                      className: O.qr,
                                      children: el,
                                  })
                                : null,
                        ],
                    }),
            }),
        ],
    });
}
