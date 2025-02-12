s.d(t, { default: () => S }), s(47120);
var n = s(200651),
    a = s(192379),
    o = s(120356),
    i = s.n(o),
    r = s(990547),
    l = s(442837),
    c = s(481060),
    d = s(393238),
    _ = s(600164),
    u = s(313201),
    m = s(215292),
    p = s(382086),
    f = s(996453),
    b = s(446706),
    h = s(594174),
    x = s(626135),
    N = s(179645),
    E = s(436046),
    C = s(963209),
    T = s(436457),
    I = s(877758),
    j = s(701476),
    v = s(785997),
    A = s(981631),
    g = s(834891),
    F = s(675999),
    L = s(388032),
    O = s(822910);
function S(e) {
    let t = (0, u.Dt)(),
        { onSlideChange: s, ...o } = e,
        { onClose: S } = o,
        [G, k] = a.useState(!1),
        D = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        Z = null != D && null == D.nsfwAllowed,
        [M, B] = a.useState(Z ? v.F.AGE_GATE : v.F.CHOOSE_TEMPLATE),
        [R, w] = a.useState(null);
    a.useEffect(() => {
        s(G ? v.F.COMPLETE : M);
    }, [s, M, G]);
    let [U, y] = a.useState(null),
        [P, z] = a.useState(null),
        [H, W] = a.useState(!1),
        J = (0, l.e7)([N.Z], () => N.Z.getType() === j.M5.INVITE_UNCLAIMED),
        Y = a.useCallback(
            (e) => {
                z(e),
                    B(v.F.CREATION_INTENT),
                    x.default.track(A.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [z, B]
        ),
        { content: V, footer: K } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
                z(null), B(v.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                W(e === F.lr.COMMUNITY), B(v.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: q, footer: X } = (0, f.G)({
            guildTemplate: P,
            titleClassName: O.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                y(e), (null == P ? void 0 : P.id) === g.l.CREATE ? B(v.F.CHANNEL_PROMPT) : k(!0);
            },
            onBack: () => {
                B(v.F.CREATION_INTENT);
            },
            isSlideReady: R === v.F.CUSTOMIZE_GUILD,
            isCommunity: H
        }),
        { content: Q, footer: $ } = (0, m.F)({
            createdGuildId: U,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                k(!0);
            },
            isSlideReady: R === v.F.CHANNEL_PROMPT
        }),
        { content: ee, footer: et } = (0, T.Z)({
            onBack: () => B(v.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: R === v.F.JOIN_GUILD
        }),
        es = null;
    switch (M) {
        case v.F.CUSTOMIZE_GUILD:
            es = X;
            break;
        case v.F.CHANNEL_PROMPT:
            es = $;
            break;
        case v.F.JOIN_GUILD:
            es = et;
            break;
        case v.F.CREATION_INTENT:
            es = K;
    }
    let { ref: en, width: ea } = (0, d.Z)();
    if (G)
        return (0, n.jsx)(c.Y0X, {
            ...o,
            size: c.CgR.MEDIUM,
            className: i()(O.modal, O.completed),
            'aria-labelledby': t,
            children: (0, n.jsx)(C.Z, { onComplete: S })
        });
    let eo = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, n.jsxs)(c.Y0X, {
        ...o,
        size: c.CgR.MEDIUM,
        className: O.modal,
        'aria-labelledby': t,
        children: [
            (0, n.jsx)('div', {
                className: O.sidebar,
                children: (0, n.jsx)(I.Z, { step: M })
            }),
            (0, n.jsx)(c.f6W, {
                theme: A.BRd.LIGHT,
                children: (e) =>
                    (0, n.jsxs)('div', {
                        className: i()(O.content, e),
                        ref: en,
                        children: [
                            (0, n.jsx)('div', {
                                className: O.slidesContainer,
                                children: (0, n.jsxs)(c.MyZ, {
                                    activeSlide: M,
                                    onSlideReady: (e) => w(e),
                                    centered: !1,
                                    width: ea,
                                    children: [
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.AGE_GATE,
                                            children: (0, n.jsx)('div', {
                                                className: O.container,
                                                children: (0, n.jsx)(E.Z, {
                                                    onComplete: () => {
                                                        J ? S() : B(v.F.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: S
                                                })
                                            })
                                        }),
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.CHOOSE_TEMPLATE,
                                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eo,
                                            children: (0, n.jsx)('div', {
                                                className: i()(O.container, O.shortFooter),
                                                children: (0, n.jsx)(b.Z, {
                                                    className: O.templates,
                                                    onChooseTemplate: Y,
                                                    isNewUser: !0
                                                })
                                            })
                                        }),
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.CREATION_INTENT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eo,
                                            children: (0, n.jsx)('div', {
                                                className: i()(O.container, O.standardFooter),
                                                children: V
                                            })
                                        }),
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.CUSTOMIZE_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eo,
                                            children: (0, n.jsx)('div', {
                                                className: i()(O.container, O.standardFooter),
                                                children: q
                                            })
                                        }),
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.CHANNEL_PROMPT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eo,
                                            children: (0, n.jsx)('div', {
                                                className: i()(O.container, O.standardFooter),
                                                children: Q
                                            })
                                        }),
                                        (0, n.jsx)(c.Mi4, {
                                            id: v.F.JOIN_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eo,
                                            children: (0, n.jsx)('div', {
                                                className: i()(O.container, O.standardFooter),
                                                children: ee
                                            })
                                        })
                                    ]
                                })
                            }),
                            M !== v.F.AGE_GATE
                                ? (0, n.jsx)(c.olH, {
                                      onClick: S,
                                      className: O.closeButton
                                  })
                                : null,
                            M === v.F.CHOOSE_TEMPLATE
                                ? (0, n.jsx)(c.mzw, {
                                      justify: _.Z.Justify.BETWEEN,
                                      className: i()(O.footer, O.join),
                                      children: (0, n.jsx)(c.eee, {
                                          className: O.joinCTA,
                                          onClick: () => {
                                              B(v.F.JOIN_GUILD);
                                          },
                                          children: (0, n.jsxs)(c.Text, {
                                              variant: 'text-sm/medium',
                                              className: O.joinCTA,
                                              children: [L.intl.string(L.t['N+Mi/f']), ' ', L.intl.string(L.t.yRjK4u)]
                                          })
                                      })
                                  })
                                : null,
                            null != es
                                ? (0, n.jsx)(c.mzw, {
                                      justify: _.Z.Justify.BETWEEN,
                                      className: O.footer,
                                      children: es
                                  })
                                : null
                        ]
                    })
            })
        ]
    });
}
