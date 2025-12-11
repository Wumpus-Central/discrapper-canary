n.d(t, { Z: () => W }), n(539854), n(781311), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(658722),
    s = n.n(o),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    b = n(37234),
    p = n(410030),
    m = n(726542),
    f = n(835473),
    g = n(231757),
    h = n(600164),
    x = n(749681),
    j = n(258971),
    v = n(685929),
    O = n(163400),
    y = n(553795),
    C = n(496675),
    N = n(626135),
    S = n(768581),
    I = n(63063),
    w = n(709054),
    E = n(51144),
    P = n(466070),
    T = n(585835),
    Z = n(997787),
    _ = n(981631),
    k = n(49898),
    A = n(388032),
    D = n(256601),
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
            isLoadingWebhooks: V,
            canCreateWebhook: q,
            onManageBuiltIn: Y,
            onManageCustomWebhooks: J,
            onManageFollowedChannels: Q,
            onManageApplication: X,
            onManageLobbiesLinked: $,
        } = e,
        ee = (0, p.ZP)(),
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
            [C.Z],
            () => ({
                canManageWebhooks:
                    (null != W && C.Z.can(_.Plq.MANAGE_WEBHOOKS, W)) ||
                    (null != H && C.Z.can(_.Plq.MANAGE_WEBHOOKS, H)),
                canManageGuild: null != W && null == H && C.Z.can(_.Plq.MANAGE_GUILD, W),
            }),
            [W, H],
        ),
        eo = (0, v.Y)(H),
        es = (0, f.q)(null == H || null == (t = H.linkedLobby) ? void 0 : t.application_id),
        ec = (0, O.F)(null == W ? void 0 : W.id),
        {
            availableTwitchIntegrations: ed,
            availableYoutubeIntegrations: eu,
            guildTwitchIntegrations: eb,
            guildYoutubeIntegrations: ep,
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
        { showTwitchCard: em, showYoutubeCard: ef } = r.useMemo(() => {
            if (ei || !ea)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1,
                };
            let e = null == W ? void 0 : W.features.has(_.GuildFeatures.COMMUNITY),
                t = er.filter((e) => e.type === _.ABu.TWITCH).length > 0,
                n = er.filter((e) => e.type === _.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ed > 0 || (!t && e),
                showYoutubeCard: eu > 0 || (!n && e),
            };
        }, [ei, ea, W, er, ed, eu]),
        eg = Object.values(G).length,
        eh = r.useMemo(() => {
            let e = eg > 100 ? U : s();
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
        }, [G, eg, et]),
        ex = (0, c.e7)([Z.Z], () => {
            if (null != W) return eh.find((e) => Z.Z.canShowOverviewTooltip(W.id, e.integration.id));
        }, [eh, W]),
        ej = r.useMemo(
            () => (void 0 !== ex ? [ex, ...eh.filter((e) => e.integration.id !== ex.integration.id)] : eh),
            [eh, ex],
        ),
        ev = (0, u.s9z)(u.JQI),
        [eO, ey] = r.useState(!1),
        eC = r.useRef(0),
        eN = () => {
            ey(!0),
                clearTimeout(eC.current),
                (eC.current = setTimeout(() => {
                    ey(!1);
                }, 200));
        };
    r.useEffect(() => (window.addEventListener("scroll", eN, !0), () => window.removeEventListener("scroll", eN)));
    let eS = ej.map((e) => {
            let t = !ev && e.integration.id === (null == ex ? void 0 : ex.integration.id),
                { application: n, integration: r } = e,
                l = [];
            return (
                null != r.user
                    ? l.push({
                          icon: u.T39,
                          text: A.intl.formatToPlainString(A.t.Nu9sat, {
                              timestamp: w.default.extractTimestamp(r.id),
                              user: E.ZP.getUserTag(r.user),
                          }),
                      })
                    : l.push({
                          icon: u.T39,
                          text: A.intl.formatToPlainString(A.t.gcdJ8J, { timestamp: w.default.extractTimestamp(r.id) }),
                      }),
                (0, i.jsx)(
                    T.Z,
                    {
                        name: n.name,
                        imageSrc: S.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon,
                            size: 48,
                        }),
                        integration: e,
                        buttonText: A.intl.string(A.t["Z/qRnM"]),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            X(n.id),
                                N.default.track(_.rMx.APP_MANAGE_CTA_CLICKED, {
                                    application_id: n.id,
                                    guild_id: null == W ? void 0 : W.id,
                                    is_admin: null != W ? C.Z.can(_.Plq.ADMINISTRATOR, W) : void 0,
                                });
                        },
                        details: l,
                        guildId: null == W ? void 0 : W.id,
                        isScrolling: eO,
                        canShowMigrationTooltip: t,
                    },
                    "integration-".concat(r.id),
                )
            );
        }),
        eI = (0, i.jsx)("div", { className: D.footerImage });
    0 === eS.length &&
        ea &&
        ((eS = (function (e, t, n) {
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
                                color: "text-default",
                                variant: "heading-xl/bold",
                                children: A.intl.string(A.t.nQQeFM),
                            }),
                            (0, i.jsx)(u.Text, {
                                color: "text-default",
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
                                            (0, b.xf)();
                                    },
                                }),
                            }),
                        ],
                    }),
                });
            return t > 0 ? l : a;
        })(ee, eg, null == W ? void 0 : W.id)),
        (eI = null));
    let ew = I.Z.getArticleURL(_.BhN.INTEGRATIONS),
        eE = null != H ? A.t.YV0vh6 : A.t.FnZEJs,
        eP = [];
    if (el) {
        let e, t, r, a, o;
        eP.push(
            ((n = K.length),
            n > 0 ? (t = (0, i.jsx)(u.LJT, { size: "xs" })) : (e = A.intl.string(A.t.lOQqJK)),
            (0, i.jsx)(
                T.Z,
                {
                    name: A.intl.string(A.t.xOg4SP),
                    icon: u.tYf,
                    buttonText: e,
                    buttonDisabled: !q,
                    trailing: t,
                    onButtonClick: J,
                    hasNextSection: n > 0,
                    details: [{ text: A.intl.formatToPlainString(A.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            (null == H ? void 0 : H.type) === _.d4z.GUILD_VOICE ||
                ((null == H ? void 0 : H.type) != null && _.TPd.GUILD_THREADS_ONLY.has(H.type)) ||
                eP.push(
                    ((l = z.length),
                    l > 0
                        ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })), (a = Q))
                        : ((r = A.intl.string(A.t["ZwSt+T"])),
                          (a = () => open(I.Z.getArticleURL(_.BhN.CHANNEL_FOLLOWING)))),
                    (0, i.jsx)(
                        T.Z,
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
                T.Z,
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
        em &&
            eP.push(
                (function (e, t, n) {
                    let r,
                        l,
                        a,
                        o,
                        s = m.Z.get(_.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })),
                              (l = A.intl.formatToPlainString(A.t.FFpnT8, { count: t })),
                              (a = () => n(_.ABu.TWITCH)))
                            : ((r = A.intl.string(A.t.bkvGkn)),
                              (l = A.intl.string(A.t.Qq3X2M)),
                              (a = () =>
                                  (0, g.Z)({
                                      platformType: _.ABu.TWITCH,
                                      location: "Integration Settings",
                                  }))),
                        (0, i.jsx)(
                            T.Z,
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
                })(ed, eb, Y),
            ),
        ef &&
            eP.push(
                (function (e, t, n) {
                    let r,
                        l,
                        a,
                        o,
                        s = m.Z.get(_.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.LJT, { size: "xs" })),
                              (l = A.intl.formatToPlainString(A.t.b2g5vC, { count: t })),
                              (a = () => n(_.ABu.YOUTUBE)))
                            : ((r = A.intl.string(A.t.xEyQ3X)),
                              (l = A.intl.string(A.t.T0ivgQ)),
                              (a = () =>
                                  (0, g.Z)({
                                      platformType: _.ABu.YOUTUBE,
                                      location: "Integration Settings",
                                  }))),
                        (0, i.jsx)(
                            T.Z,
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
                })(eu, ep, Y),
            );
    let eT = null != H && eo && null != es;
    return (0, i.jsxs)("div", {
        className: a()(null != eI ? D.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: A.intl.format(eE, { helpdeskArticle: ew }),
            }),
            (0, i.jsx)(u.izJ, { className: D.divider }),
            V || ei || null == W
                ? (0, i.jsx)(u.$jN, {
                      className: D.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eP,
                          eT &&
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
                                        eP.length > 0 || eT ? (0, i.jsx)(u.izJ, { className: D.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            className: D.sectionHeader,
                                            children: A.intl.string(A.t.pUBKht),
                                        }),
                                        eg > 4
                                            ? (0, i.jsx)(B, {
                                                  query: et,
                                                  setQuery: en,
                                              })
                                            : null,
                                        eS,
                                    ],
                                })
                              : null,
                          eI,
                      ],
                  }),
        ],
    });
}
