s.r(t),
    s.d(t, {
        default: function () {
            return B;
        }
    }),
    s(47120);
var n = s(200651),
    o = s(192379),
    a = s(120356),
    i = s.n(a),
    r = s(990547),
    l = s(442837),
    c = s(481060),
    d = s(393238),
    u = s(600164),
    f = s(313201),
    _ = s(215292),
    p = s(382086),
    m = s(996453),
    h = s(446706),
    N = s(594174),
    x = s(626135),
    C = s(179645),
    E = s(436046),
    T = s(963209),
    b = s(436457),
    I = s(877758),
    j = s(701476),
    v = s(785997),
    A = s(981631),
    F = s(834891),
    g = s(675999),
    S = s(388032),
    L = s(238993);
function B(e) {
    let t = (0, f.Dt)(),
        { onSlideChange: s, ...a } = e,
        { onClose: B } = a,
        [O, G] = o.useState(!1),
        Z = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        D = null != Z && null == Z.nsfwAllowed,
        [M, R] = o.useState(D ? v.F.AGE_GATE : v.F.CHOOSE_TEMPLATE),
        [k, U] = o.useState(null);
    o.useEffect(() => {
        s(O ? v.F.COMPLETE : M);
    }, [s, M, O]);
    let [w, P] = o.useState(null),
        [y, H] = o.useState(null),
        [z, W] = o.useState(!1),
        J = (0, l.e7)([C.Z], () => C.Z.getType() === j.M5.INVITE_UNCLAIMED),
        V = o.useCallback(
            (e) => {
                H(e),
                    R(v.F.CREATION_INTENT),
                    x.default.track(A.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [H, R]
        ),
        { content: K, footer: Y } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), R(v.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                W(e === g.lr.COMMUNITY), R(v.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: q, footer: X } = (0, m.G)({
            guildTemplate: y,
            titleClassName: L.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                P(e), (null == y ? void 0 : y.id) === F.l.CREATE ? R(v.F.CHANNEL_PROMPT) : G(!0);
            },
            onBack: () => {
                R(v.F.CREATION_INTENT);
            },
            isSlideReady: k === v.F.CUSTOMIZE_GUILD,
            isCommunity: z
        }),
        { content: Q, footer: $ } = (0, _.F)({
            createdGuildId: w,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                G(!0);
            },
            isSlideReady: k === v.F.CHANNEL_PROMPT
        }),
        { content: ee, footer: et } = (0, b.Z)({
            onBack: () => R(v.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                B();
            },
            onConnect: B,
            isSlideReady: k === v.F.JOIN_GUILD
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
            es = Y;
    }
    let { ref: en, width: eo } = (0, d.Z)();
    if (O)
        return (0, n.jsx)(c.ModalRoot, {
            ...a,
            size: c.ModalSize.MEDIUM,
            className: i()(L.modal, L.completed),
            'aria-labelledby': t,
            children: (0, n.jsx)(T.Z, { onComplete: B })
        });
    let ea = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, n.jsxs)(c.ModalRoot, {
        ...a,
        size: c.ModalSize.MEDIUM,
        className: L.modal,
        'aria-labelledby': t,
        children: [
            (0, n.jsx)('div', {
                className: L.sidebar,
                children: (0, n.jsx)(I.Z, { step: M })
            }),
            (0, n.jsx)(c.ThemeProvider, {
                theme: A.BRd.LIGHT,
                children: (e) =>
                    (0, n.jsxs)('div', {
                        className: i()(L.content, e),
                        ref: en,
                        children: [
                            (0, n.jsx)('div', {
                                className: L.slidesContainer,
                                children: (0, n.jsxs)(c.Slides, {
                                    activeSlide: M,
                                    onSlideReady: (e) => U(e),
                                    centered: !1,
                                    width: eo,
                                    children: [
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.AGE_GATE,
                                            children: (0, n.jsx)('div', {
                                                className: L.container,
                                                children: (0, n.jsx)(E.Z, {
                                                    onComplete: () => {
                                                        J ? B() : R(v.F.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: B
                                                })
                                            })
                                        }),
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.CHOOSE_TEMPLATE,
                                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: ea,
                                            children: (0, n.jsx)('div', {
                                                className: i()(L.container, L.shortFooter),
                                                children: (0, n.jsx)(h.Z, {
                                                    className: L.templates,
                                                    onChooseTemplate: V,
                                                    isNewUser: !0
                                                })
                                            })
                                        }),
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.CREATION_INTENT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: ea,
                                            children: (0, n.jsx)('div', {
                                                className: i()(L.container, L.standardFooter),
                                                children: K
                                            })
                                        }),
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.CUSTOMIZE_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: ea,
                                            children: (0, n.jsx)('div', {
                                                className: i()(L.container, L.standardFooter),
                                                children: q
                                            })
                                        }),
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.CHANNEL_PROMPT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: ea,
                                            children: (0, n.jsx)('div', {
                                                className: i()(L.container, L.standardFooter),
                                                children: Q
                                            })
                                        }),
                                        (0, n.jsx)(c.Slide, {
                                            id: v.F.JOIN_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: ea,
                                            children: (0, n.jsx)('div', {
                                                className: i()(L.container, L.standardFooter),
                                                children: ee
                                            })
                                        })
                                    ]
                                })
                            }),
                            M !== v.F.AGE_GATE
                                ? (0, n.jsx)(c.ModalCloseButton, {
                                      onClick: B,
                                      className: L.closeButton
                                  })
                                : null,
                            M === v.F.CHOOSE_TEMPLATE
                                ? (0, n.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: i()(L.footer, L.join),
                                      children: (0, n.jsx)(c.Anchor, {
                                          className: L.joinCTA,
                                          onClick: () => {
                                              R(v.F.JOIN_GUILD);
                                          },
                                          children: (0, n.jsxs)(c.Text, {
                                              variant: 'text-sm/medium',
                                              className: L.joinCTA,
                                              children: [S.intl.string(S.t['N+Mi/f']), ' ', S.intl.string(S.t.yRjK4u)]
                                          })
                                      })
                                  })
                                : null,
                            null != es
                                ? (0, n.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: L.footer,
                                      children: es
                                  })
                                : null
                        ]
                    })
            })
        ]
    });
}
