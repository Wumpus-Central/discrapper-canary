n.d(t, { Z: () => W }), n(539854), n(781311), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(658722),
    s = n.n(o),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    p = n(37234),
    m = n(410030),
    b = n(726542),
    g = n(835473),
    f = n(231757),
    h = n(600164),
    x = n(749681),
    j = n(258971),
    v = n(685929),
    O = n(163400),
    y = n(553795),
    _ = n(496675),
    C = n(626135),
    N = n(768581),
    S = n(63063),
    E = n(709054),
    I = n(51144),
    P = n(466070),
    w = n(585835),
    T = n(997787),
    Z = n(981631),
    k = n(49898),
    A = n(388032),
    D = n(280219),
    R = n(509399),
    L = n(790904),
    M = n(609182);
function U(e, t) {
    return t.includes(e);
}
function B(e) {
    let { query: t, setQuery: n } = e,
        l = r.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, i.jsx)("div", {
        className: D.searchContainer,
        children: (0, i.jsx)(u.E1j, {
            query: t,
            onChange: l,
            onClear: () => n(""),
            placeholder: A.intl.string(A.t["5prvKe"]),
            "aria-label": A.intl.string(A.t["5prvKe"]),
        }),
    });
}
function W(e) {
    var t, n, l, o;
    let {
            guild: W,
            channel: H,
            applicationIntegrations: G,
            builtInIntegrations: F,
            customWebhooks: K,
            followedChannelWebhooks: z,
            isLoadingWebhooks: q,
            canCreateWebhook: V,
            onManageBuiltIn: Y,
            onManageCustomWebhooks: J,
            onManageFollowedChannels: Q,
            onManageApplication: X,
            onManageLobbiesLinked: $,
        } = e,
        ee = (0, m.ZP)(),
        [et, en] = r.useState(""),
        { isFetchingConnections: ei, accounts: er } = (0, c.cj)(
            [y.Z],
            () => ({
                isFetchingConnections: y.Z.isFetching(),
                accounts: y.Z.getAccounts(),
            }),
            [],
        ),
        { canManageWebhooks: el, canManageGuild: ea } = (0, c.cj)(
            [_.Z],
            () => ({
                canManageWebhooks:
                    (null != W && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, W)) ||
                    (null != H && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, H)),
                canManageGuild: null != W && null == H && _.Z.can(Z.Plq.MANAGE_GUILD, W),
            }),
            [W, H],
        ),
        eo = (0, v.Y)(H),
        es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? void 0 : t.application_id),
        ec = (0, O.F)(null == W ? void 0 : W.id),
        {
            availableTwitchIntegrations: ed,
            availableYoutubeIntegrations: eu,
            guildTwitchIntegrations: ep,
            guildYoutubeIntegrations: em,
        } = r.useMemo(() => {
            var e, t, n, i, r, l, a, o;
            return {
                availableTwitchIntegrations: null != (r = null == (e = F.twitch) ? void 0 : e.length) ? r : 0,
                availableYoutubeIntegrations: null != (l = null == (t = F.youtube) ? void 0 : t.length) ? l : 0,
                guildTwitchIntegrations:
                    null != (a = null == (n = F.twitch) ? void 0 : n.filter((e) => e.enabled).length) ? a : 0,
                guildYoutubeIntegrations:
                    null != (o = null == (i = F.youtube) ? void 0 : i.filter((e) => e.enabled).length) ? o : 0,
            };
        }, [F.twitch, F.youtube]),
        { showTwitchCard: eb, showYoutubeCard: eg } = r.useMemo(() => {
            if (ei || !ea)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1,
                };
            let e = null == W ? void 0 : W.features.has(Z.GuildFeatures.COMMUNITY),
                t = er.filter((e) => e.type === Z.ABu.TWITCH).length > 0,
                n = er.filter((e) => e.type === Z.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ed > 0 || (!t && e),
                showYoutubeCard: eu > 0 || (!n && e),
            };
        }, [ei, ea, W, er, ed, eu]),
        ef = Object.values(G).length,
        eh = r.useMemo(() => {
            let e = ef > 100 ? U : s();
            return Object.values(G).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = et).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [G, ef, et]),
        ex = (0, c.e7)([T.Z], () => {
            if (null != W) return eh.find((e) => T.Z.canShowOverviewTooltip(W.id, e.integration.id));
        }, [eh, W]),
        ej = r.useMemo(
            () => (void 0 !== ex ? [ex, ...eh.filter((e) => e.integration.id !== ex.integration.id)] : eh),
            [eh, ex],
        ),
        ev = (0, u.s9z)(u.JQI),
        [eO, ey] = r.useState(!1),
        e_ = r.useRef(0),
        eC = () => {
            ey(!0),
                clearTimeout(e_.current),
                (e_.current = setTimeout(() => {
                    ey(!1);
                }, 200));
        };
    r.useEffect(() => (window.addEventListener("scroll", eC, !0), () => window.removeEventListener("scroll", eC)));
    let eN = ej.map((e) => {
            var t;
            let n = !ev && e.integration.id === (null == ex ? void 0 : ex.integration.id),
                { application: r, integration: l } = e,
                a = [];
            return (
                null != l.user
                    ? a.push({
                          icon: u.T39,
                          text: A.intl.formatToPlainString(A.t.Nu9sat, {
                              timestamp: E.default.extractTimestamp(l.id),
                              user: I.ZP.getUserTag(l.user),
                          }),
                      })
                    : a.push({
                          icon: u.T39,
                          text: A.intl.formatToPlainString(A.t.gcdJ8J, { timestamp: E.default.extractTimestamp(l.id) }),
                      }),
                (0, i.jsx)(
                    w.Z,
                    {
                        name: r.name,
                        imageSrc: null != (t = r.getIconURL(48)) ? t : N.pK["0"],
                        integration: e,
                        buttonText: A.intl.string(A.t["Z/qRnM"]),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            X(r.id),
                                C.default.track(Z.rMx.APP_MANAGE_CTA_CLICKED, {
                                    application_id: r.id,
                                    guild_id: null == W ? void 0 : W.id,
                                    is_admin: null != W ? _.Z.can(Z.Plq.ADMINISTRATOR, W) : void 0,
                                });
                        },
                        details: a,
                        guildId: null == W ? void 0 : W.id,
                        isScrolling: eO,
                        canShowMigrationTooltip: n,
                    },
                    "integration-".concat(l.id),
                )
            );
        }),
        eS = (0, i.jsx)("div", { className: D.footerImage });
    0 === eN.length &&
        ea &&
        ((eN = (function (e, t, n) {
            let r = (0, d.wj)(e) ? L : M,
                l = (0, i.jsxs)(h.Z, {
                    direction: h.Z.Direction.VERTICAL,
                    align: h.Z.Align.CENTER,
                    className: D.emptyStateWrapper,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: r,
                            className: D.emptyStateSearchImage,
                        }),
                        (0, i.jsx)(u.Zbd, {
                            editable: !0,
                            className: D.emptyStateCard,
                            children: (0, i.jsx)(u.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: A.intl.string(A.t.EVWFNr),
                            }),
                        }),
                    ],
                }),
                a = (0, i.jsx)(u.Zbd, {
                    editable: !0,
                    className: D.emptyStateCard,
                    children: (0, i.jsxs)("div", {
                        className: D.emptyStateText,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: R,
                                className: D.emptyStateImage,
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: "header-secondary",
                                variant: "heading-xl/bold",
                                children: A.intl.string(A.t.nQQeFM),
                            }),
                            (0, i.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: A.intl.format(A.t.snvKU3, {
                                    handleGoToAppDirectory: () => {
                                        (0, x.transitionToGlobalDiscovery)({
                                            tab: k.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                entrypoint: { name: j.xF.GUILD_INTEGRATION_SETTINGS },
                                                guildId: n,
                                            },
                                        }),
                                            (0, p.xf)();
                                    },
                                }),
                            }),
                        ],
                    }),
                });
            return t > 0 ? l : a;
        })(ee, ef, null == W ? void 0 : W.id)),
        (eS = null));
    let eE = S.Z.getArticleURL(Z.BhN.INTEGRATIONS),
        eI = null != H ? A.t.YV0vh6 : A.t.FnZEJs,
        eP = [];
    if (el) {
        let e, t, r, a, o;
        eP.push(
            ((n = K.length),
            n > 0 ? (t = (0, i.jsx)(u.LJT, { size: "xs" })) : (e = A.intl.string(A.t.lOQqJK)),
            (0, i.jsx)(
                w.Z,
                {
                    name: A.intl.string(A.t.xOg4SP),
                    icon: u.tYf,
                    buttonText: e,
                    buttonDisabled: !V,
                    trailing: t,
                    onButtonClick: J,
                    hasNextSection: n > 0,
                    details: [{ text: A.intl.formatToPlainString(A.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            (null == H ? void 0 : H.type) === Z.d4z.GUILD_VOICE ||
                ((null == H ? void 0 : H.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(H.type)) ||
                eP.push(
                    ((l = z.length),
                    l > 0
                        ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })), (a = Q))
                        : ((r = A.intl.string(A.t["ZwSt+T"])),
                          (a = () => open(S.Z.getArticleURL(Z.BhN.CHANNEL_FOLLOWING)))),
                    (0, i.jsx)(
                        w.Z,
                        {
                            name: A.intl.string(A.t.OrV60r),
                            icon: u.AsW,
                            buttonText: r,
                            onButtonClick: a,
                            trailing: o,
                            hasNextSection: l > 0,
                            details: [{ text: A.intl.formatToPlainString(A.t.JUNGIZ, { count: l }) }],
                        },
                        "channels-followed",
                    )),
                );
    }
    null == H &&
        ec.length > 0 &&
        eP.push(
            ((o = ec.length),
            (0, i.jsx)(
                w.Z,
                {
                    name: A.intl.string(A.t.tqtDXC),
                    icon: u.DuK,
                    trailing: (0, i.jsx)(u.LJT, { size: "xs" }),
                    onButtonClick: $,
                    hasNextSection: !0,
                    details: [{ text: A.intl.formatToPlainString(A.t["puxS4+"], { count: o }) }],
                },
                "channels-syncing",
            )),
        ),
        eb &&
            eP.push(
                (function (e, t, n) {
                    let r,
                        l,
                        a,
                        o,
                        s = b.Z.get(Z.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })),
                              (l = A.intl.formatToPlainString(A.t.FFpnT8, { count: t })),
                              (a = () => n(Z.ABu.TWITCH)))
                            : ((r = A.intl.string(A.t.bkvGkn)),
                              (l = A.intl.string(A.t.Qq3X2M)),
                              (a = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.TWITCH,
                                      location: "Integration Settings",
                                  }))),
                        (0, i.jsx)(
                            w.Z,
                            {
                                name: A.intl.string(A.t.q4pBG3),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: D.platformIcon,
                                buttonText: r,
                                onButtonClick: a,
                                trailing: o,
                                hasNextSection: e > 0,
                                details: [{ text: l }],
                            },
                            "integrations-twitch",
                        )
                    );
                })(ed, ep, Y),
            ),
        eg &&
            eP.push(
                (function (e, t, n) {
                    let r,
                        l,
                        a,
                        o,
                        s = b.Z.get(Z.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })),
                              (l = A.intl.formatToPlainString(A.t.b2g5vC, { count: t })),
                              (a = () => n(Z.ABu.YOUTUBE)))
                            : ((r = A.intl.string(A.t.xEyQ3X)),
                              (l = A.intl.string(A.t.T0ivgQ)),
                              (a = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.YOUTUBE,
                                      location: "Integration Settings",
                                  }))),
                        (0, i.jsx)(
                            w.Z,
                            {
                                name: A.intl.string(A.t.aS6cK4),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: D.platformIcon,
                                buttonText: r,
                                onButtonClick: a,
                                trailing: o,
                                hasNextSection: e > 0,
                                details: [{ text: l }],
                            },
                            "integrations-youtube",
                        )
                    );
                })(eu, em, Y),
            );
    let ew = null != H && eo && null != es;
    return (0, i.jsxs)("div", {
        className: a()(null != eS ? D.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: A.intl.format(eI, { helpdeskArticle: eE }),
            }),
            (0, i.jsx)(u.izJ, { className: D.divider }),
            q || ei || null == W
                ? (0, i.jsx)(u.$jN, {
                      className: D.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eP,
                          ew &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eP.length > 0 ? (0, i.jsx)(u.izJ, { className: D.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: "heading-md/semibold",
                                          className: D.sectionHeader,
                                          children: A.intl.string(A.t.oAvIAg),
                                      }),
                                      (0, i.jsx)(P.t, {
                                          channel: H,
                                          application: es,
                                          showApplicationImage: !0,
                                          name: es.name,
                                          hasNextSection: !0,
                                          iconClassName: D.linkedLobbyIcon,
                                          trailing: (0, i.jsx)(u.vdY, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          ea
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eP.length > 0 || ew ? (0, i.jsx)(u.izJ, { className: D.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            className: D.sectionHeader,
                                            children: A.intl.string(A.t.pUBKht),
                                        }),
                                        ef > 4
                                            ? (0, i.jsx)(B, {
                                                  query: et,
                                                  setQuery: en,
                                              })
                                            : null,
                                        eN,
                                    ],
                                })
                              : null,
                          eS,
                      ],
                  }),
        ],
    });
}
