n.d(t, { iV: () => dr, OC: () => dd, Ay: () => da }), n(938796);
var i,
    l,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    o = n.n(a),
    d = n(448761),
    c = n(665260),
    u = n(17928),
    m = n(803805),
    h = n(52133),
    g = n(640238),
    p = n(834730),
    A = n(493336),
    x = n(793574),
    f = n(688810),
    E = n(735991);
n(321073), n(134528), n(947204);
var I = n(485845),
    C = n(379834),
    v = n(836480),
    _ = n(825860),
    j = n(950305),
    N = n(795816),
    T = n(574152),
    y = n(522305),
    S = n(361926),
    b = n(751765),
    k = n(113854),
    L = n(207371),
    R = n(205184),
    M = n(773669),
    P = n(495544),
    D = n(734057),
    O = n(994500),
    U = n(967198),
    G = n(287809),
    w = n(486020),
    B = n(204776),
    V = n(725606),
    H = n(572211),
    F = n(500060),
    Y = n(432017),
    z = n(687966),
    K = n(104171),
    W = n(652215),
    J = n(375708),
    q = n(695320);
function X(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: q.i,
        children: [
            (0, s.jsx)(K.Ay, { guildId: n, users: t, max: 6, size: K.DN.SIZE_16 }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var Z = n(354287),
    $ = n(138175),
    Q = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(734093);
function ei(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, $.b)(t)),
        m = c?.id,
        h = (0, E.Ag)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: I } = (0, Q.f)(t),
        C = (0, u.bG)([P.default], () => l ?? P.default.getId(), [l]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: b, canLaunchInChannel: R } = (0, V.w)(t.id),
        M = (0, T.A)(),
        O = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        U = null != m && h && O,
        G = R && h,
        B = (0, L.x)(t),
        F = (0, ee.F)(t),
        Y = (0, ee.t)(t),
        z = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? B
                        ? e.push({
                              label: J.intl.string(J.t.RscU7I),
                              trackingArea: Z.kY.PLAY,
                              onClick() {
                                  k.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (G &&
                              e.push({
                                  label:
                                      null == j
                                          ? J.intl.string(J.t.RscU7I)
                                          : b
                                            ? J.intl.string(J.t.DPfdsq)
                                            : J.intl.string(J.t.sqe0hj),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      (0, N.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          embeddedActivitiesManager: M,
                                          customId: i,
                                          referrerId: C,
                                          analyticsLocations: v,
                                      });
                                  },
                                  disabled: b,
                              }),
                          !G &&
                              U &&
                              e.push({
                                  label: J.intl.string(J.t.JeK1Wg),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      (0, y.Q)({
                                          appId: t.id,
                                          botId: m,
                                          analyticsLocations: v,
                                          customId: i,
                                          referrerId: C,
                                      });
                                  },
                              }))
                    : null != Y && e.push(Y),
                e
            );
        }, [h, Y, B, t.id, G, U, j, b, _, M, i, C, v, m]),
        K = h ? (0, s.jsx)(es, { app: t }) : (0, s.jsx)(el, { app: t });
    return (0, s.jsx)(H.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: F,
        bannerAspectRatio: I,
        iconSrc: g,
        info: K,
        actions: z,
        onClickContent: F,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: o,
            guildId: D.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function el(e) {
    let { app: t } = e,
        n =
            (0, B.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            I.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([M.default], () => M.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : J.intl.format(J.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(p.E, { variant: "text-xs/medium", className: en.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    className: en.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(v.Q, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function es(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        a = (0, R.s)(t.id),
        o = (0, u.yK)([G.default, O.A], () => {
            let e = [];
            for (let [t, n] of a.entries()) {
                if (t >= 5) break;
                let i = G.default.getUser(n.author_id),
                    l = O.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [a]),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(X, {
                    activityUsers: o,
                    guildId: l,
                    activityText: J.intl.formatToPlainString(J.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(_.Y, { size: "xxs", color: "currentColor" }), J.intl.string(J.t.TsWCdW)],
                });
            let e = i > 0 ? J.intl.format(J.t.z8EAJW, { count: i }) : J.intl.string(J.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(j.n, { size: "xxs", color: "currentColor" }), e] });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(p.E, {
                    variant: "text-xs/medium",
                    className: en.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: en.Tc, children: e }, t)),
                }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: en.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var er = n(582388),
    ea = n(257269);
let eo = (0, u.UT)(er.A, {
    getQueryId: W.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : er.A.getOne(e, t)),
    load: (e, t) => (0, ea.Py)(e, t),
});
var ed = n(309010),
    ec = n(933958),
    eu = n(782091);
function em(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Ag)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, f.Ay)(x.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ed.A], () => ed.A.getChannelId()),
        g = (0, eu.et)(h),
        p = (0, u.bG)([ec.Ay], () => {
            if (null == h) return;
            let e = ec.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([ec.Ay], () => ec.Ay.getCurrentEmbeddedActivity()),
        I = (0, T.A)(),
        C = g === eu.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        _ = null != n ? n : i.customId,
        j = [];
    (0, L.x)(t)
        ? j.push({
              label: J.intl.string(J.t.RscU7I),
              trackingArea: Z.kY.PLAY,
              onClick() {
                  k.A.launchFrame({ applicationId: t.id });
              },
          })
        : (C &&
              j.push({
                  label:
                      null == p ? J.intl.string(J.t.RscU7I) : v ? J.intl.string(J.t.DPfdsq) : J.intl.string(J.t.sqe0hj),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      (0, N.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          embeddedActivitiesManager: I,
                          customId: _,
                          referrerId: l,
                          analyticsLocations: m,
                      });
                  },
                  disabled: v,
              }),
          c &&
              !C &&
              j.push({
                  label: J.intl.string(J.t.JeK1Wg),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      (0, y.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: _, referrerId: l });
                  },
              }));
    let b = (0, ee.F)(t);
    return (0, s.jsx)(H.h, {
        actions: j,
        onClickContent: b,
        header: t.name,
        iconSrc: w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: et.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: _,
            guildId: D.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eh(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, f.Ay)(x.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = eo(t.id, r);
    return (0, E.Ag)(t)
        ? null != r && null == c && null != d
            ? (0, s.jsx)(f.f5, {
                  value: o,
                  children: (0, s.jsx)(em, { application: t, customId: a, customLink: d, referrerId: l, message: n }),
              })
            : (0, s.jsx)(f.f5, {
                  value: o,
                  children: (0, s.jsx)(ei, {
                      app: t,
                      linkType: et.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var eg = n(821609),
    ep = n(379257),
    eA = n(847599),
    ex = n(36149);
function ef(e) {
    let { channelId: t } = e,
        n = (0, ex.b8)(),
        i = (0, ex.i2)(),
        l = J.intl.string(J.t["9KiIz6"]),
        a = J.intl.string(J.t["/nicWo"]),
        o = r.useCallback(() => {
            ep.A.showAgeVerificationGetStartedModal({ entryPoint: eA.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eA.UT)(eA.Im.RETRY, t);
        }, [t]);
    return (0, s.jsx)(eg.$, { variant: "primary", text: n ? l : a, onClick: o, disabled: !i });
}
var eE = n(107766),
    eI = n(780964),
    eC = n(766075);
function ev(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            (0, eE.nk)() || (0, eC.openUserSettings)(eI.X.FAMILY_CENTER_PANEL), (0, eA.UT)(eA.Im.CONNECT_TO_TEEN, t);
        }, [t]);
    return (0, s.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.n8a49k), onClick: n });
}
var e_ = n(284009),
    ej = n.n(e_),
    eN = n(192308),
    eT = n(664121),
    ey = n(34188),
    eS = n(408278),
    eb = n(173936),
    ek = n(691540),
    eL = n(857250),
    eR = n(97483),
    eM = n(939249),
    eP = n(996759),
    eD = n(800342),
    eO = n(163437),
    eU = n(185438),
    eG = n(97352),
    ew = n(652676),
    eB = n(67480),
    eV = n(328968),
    eH = n(174459),
    eF = n(957565),
    eY = n(943775),
    ez = n(997997),
    eK = n(658575),
    eW = n(376374),
    eJ = n(435220),
    eq = n(352883);
let eX = (0, u.UT)([eB.A, eV.A, eG.A], {
        getQueryId: W.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eB.A.get(e),
                n = eV.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eG.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            ej()(null != e, "skuId is null"), await (0, eD.QB)(e);
        },
    }),
    eZ = (0, u.UT)([eB.A], {
        getQueryId: W.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eB.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            ej()(null != e && null != t, "appId is null"), await (0, eD.JI)(t);
        },
    });
function e$(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eK.G)(l),
        [o, d, c, m] = (0, u.yK)([ew.A, D.A], () => {
            let e = (0, eY.A)(t, 45),
                n = D.A.getBasicChannel(i.channel_id)?.guild_id;
            return [ew.A.getStoreLayout(l), ew.A.getFetchStatus(l), n, e];
        }, [t, l, i.channel_id]);
    r.useEffect(() => {
        d === ew.N.NONE && (0, eP.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        g = o.otps.length,
        p = r.useMemo(
            () =>
                h > 0 && g > 0
                    ? J.intl.formatToPlainString(J.t["jA648+"], { subCount: h, itemCount: g })
                    : h > 0
                      ? J.intl.formatToPlainString(J.t.GSfibA, { count: h })
                      : g > 0
                        ? J.intl.formatToPlainString(J.t.j7Go5A, { count: g })
                        : J.intl.string(J.t.rMA98g),
            [g, h],
        );
    if (!a) return null;
    function A() {
        (0, eN.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(e0, {
        appName: t.name,
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: t.name }),
        description: p,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, ez.K)(l, ez.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            A(),
                eH.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: l, area: "app_icon" });
        },
        children: (0, s.jsx)("div", {
            className: eq.mZ,
            children: (0, s.jsx)(eg.$, {
                onClick: function () {
                    A(),
                        eH.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        });
                },
                text: J.intl.string(J.t.kRvlKJ),
            }),
        }),
    });
}
function eQ(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eX(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eZ(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eY.A)(t, 45), [t]),
        g = (0, eK.G)(t.id),
        { openModal: p, subscriptionPurchaseButtonState: A } = (0, eU.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!g || null == o) return null;
    let x = o.type === W.Puh.SUBSCRIPTION,
        f = !!x && (0, eO.bg)(o.flags);
    function E() {
        (0, eN.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let I = () => {
            (0, eN.openModalLazy)(async () => {
                let e = x ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    l = x ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    function r() {
                        n.onClose(), E();
                    }
                    return null != e && null != a
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: f ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: r,
                          })
                        : null != l
                          ? (0, s.jsx)(l, {
                                transitionState: n.transitionState,
                                appId: t.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: r,
                            })
                          : null;
                };
            });
        },
        C = x
            ? f
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eT.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === C && (C = void 0);
    let v = () => {
        eH.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: t.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, s.jsx)(e0, {
        appName: t.name,
        title: o.name,
        description: C,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, ez.K)(t.id, ez.C.SKU_EMBED, i);
        },
        iconSrc: h,
        onIconClick: () => {
            E(),
                eH.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: t.id,
                    sku_id: o.id,
                    area: "app_icon",
                });
        },
        children: (0, s.jsxs)("div", {
            className: eq.w,
            children: [
                (0, s.jsx)(eg.$, {
                    variant: "secondary",
                    onClick: () => {
                        I(),
                            eH.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: t.id,
                                sku_id: o.id,
                                area: "view_details",
                            });
                    },
                    text: J.intl.string(J.t.DXYfjO),
                }),
                x
                    ? null != d
                        ? (0, s.jsx)(eW.rc, {
                              onClick: p,
                              appId: t.id,
                              subscriptionType: f ? "user" : "guild",
                              skuId: o.id,
                              icon: ey.U,
                              onHasClicked: v,
                              subscriptionPlan: d,
                              state: A,
                          })
                        : (0, s.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: I })
                    : (0, s.jsx)(eW.$P, { appId: t.id, sku: o, icon: ey.U, onHasClicked: v }),
            ],
        }),
    });
}
function e0(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: eq.iE,
        children: [
            (0, s.jsxs)("div", {
                className: eq.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: eq.qd,
                        children: [
                            (0, s.jsx)(ey.U, { size: "xxs" }),
                            (0, s.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eF.p5 &&
                        (0, s.jsx)(eS.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, s.jsx)(eb.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eF.C)(l, () => {
                                    (0, ek.P0)((0, eL.o)(J.intl.string(J.t["L/PwZf"]), eR.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eq.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eq.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eM.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: eq.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: eq.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(p.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(p.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eq.h_,
                                            children: i,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    d,
                ],
            }),
        ],
    });
}
var e1 = n(627363),
    e2 = n(853811),
    e3 = n(381438),
    e6 =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i);
function e5(e, t, n) {
    return null == e || (0, e2.U1)({ type: e2.fS.MINIMAL, data: e }) !== e3.Y.ADULT
        ? "display"
        : !0 !== t
          ? "block_underage"
          : n.isPrivate() || n.nsfw
            ? "display"
            : "block_channel_restriction";
}
var e4 = n(690360);
function e9(e) {
    let { visibility: t, variant: n } = e,
        i = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "game_invite":
                            return J.intl.string(J.t.pkq6Vq);
                        case "app_embed":
                            return J.intl.string(J.t.bZBN64);
                        default:
                            return "";
                    }
                })(n),
            [n],
        ),
        l = r.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case "game_invite":
                            return t === e6.BLOCK_UNDERAGE ? J.intl.string(J.t.GhU4yl) : J.intl.string(J.t.B99UMJ);
                        case "app_embed":
                            return t === e6.BLOCK_UNDERAGE ? J.intl.string(J.t.LPOzxB) : J.intl.string(J.t.NIZyKq);
                        default:
                            return "";
                    }
                })(n, t),
            [n, t],
        );
    return (0, s.jsxs)("div", {
        className: e4.E,
        children: [
            (0, s.jsx)(p.E, { variant: "text-xs/semibold", color: "text-default", children: i }),
            (0, s.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
        ],
    });
}
function e7(e) {
    let { applicationId: t, channel: n, children: i } = e,
        { data: l } = (0, e1.YY)(t),
        r = (0, u.bG)([G.default], () => G.default.getCurrentUser()?.nsfwAllowed);
    if (null == l) return null;
    let a = e5(l.contentClassification, r, n);
    switch (a) {
        case e6.DISPLAY:
            return (0, s.jsx)(s.Fragment, { children: i(l) });
        case e6.BLOCK_UNDERAGE:
        case e6.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e9, { visibility: a, variant: "app_embed" });
        default:
            return null;
    }
}
var e8 = n(562708),
    te = n(139286);
function tt(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, te.x)({
                type: e8.ImpressionTypes.VIEW,
                name: e8.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, B.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(f.f5, {
              value: i,
              children: (0, s.jsx)(ei, { app: t, linkType: et.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var tn = n(778492),
    ti = n(534514),
    tl = n(285796),
    ts = n(857182),
    tr = n(506774),
    ta = n(228366),
    to = n(576705),
    td = n(812930);
let tc = "ChannelFollowingBumpChannels",
    tu = new Set(),
    tm = new Set();
class th extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(P.default, D.A, to.A, G.default), (tu = new Set(tr.w.get(tc)));
    }
    shouldShowBump(e) {
        return tm.has(e);
    }
}
let tg = new th(ta.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tu.has(t)) return !1;
        let l = D.A.getChannel(t),
            s = G.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === W.rbe.GUILD_ANNOUNCEMENT &&
                (0, td.A)(n) &&
                to.A.can(W.xBc.SEND_MESSAGES, l) &&
                (r || to.A.can(W.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), W.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tm.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tm.has(t.id) && c.Lt(Number(t.flags), W.pr7.CROSSPOSTED) && tm.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tm.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tm.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        tu.add(t), tr.w.set(tc, tu), tm.clear();
    },
});
var tp = n(419056),
    tA = n(676544);
let tx = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tg], () => tg.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            ts.A.dismissPublishBump(n), (0, tp.A)(t, n);
        }, [t, n]),
        a = r.useCallback(() => {
            ts.A.dismissPublishBump(n);
        }, [n]),
        o = r.useCallback(() => {
            ts.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: tA.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: tA.mp,
                      children: [
                          (0, s.jsx)(tn.k, { size: "xs", color: "currentColor", className: tA.Kk }),
                          (0, s.jsx)(ti.D, {
                              variant: "heading-sm/normal",
                              className: tA.dS,
                              children: J.intl.string(J.t.hasZoU),
                          }),
                          (0, s.jsx)(p.E, {
                              color: "text-brand",
                              className: tA.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eM.D, { onClick: l, children: J.intl.string(J.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eM.D, {
                              onClick: a,
                              children: (0, s.jsx)(tl.a, { size: "xs", color: "currentColor", className: tA.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(p.E, {
                      color: "text-muted",
                      className: tA.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eM.D, { onClick: o, children: J.intl.string(J.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tf = n(175671),
    tE = n(735438),
    tI = n.n(tE),
    tC = n(239947),
    tv = n(403581),
    t_ = n(97808),
    tj = n(778712),
    tN = n(520117),
    tT = n(793943),
    ty = n(763754),
    tS = n(973654),
    tb = n(467135),
    tk = n(644235),
    tL = n(153469),
    tR = n(693227),
    tM = n(312633);
function tP(e) {
    return e.map((e) => `#${e}`);
}
function tD(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tb.ko)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: tM.kL,
              children: [
                  (0, s.jsx)(tO, { message: t }),
                  (0, s.jsx)(eg.$, {
                      text: J.intl.string(J.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eH.default.track(W.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tT.nf)(tT.HP.CUSTOM_THEME, { from: tT.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tP(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tS.GQ)((0, tk.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tO(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: a } = l,
        o = (0, ty.Ay)(l),
        d = r.useMemo(
            () =>
                (0, tE.once)(() => {
                    (0, te.x)({ type: e8.ImpressionTypes.VIEW, name: tC.I.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        c = (0, tN.A)({
            onVisible: () => {
                d();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = r.useMemo(() => (void 0 === a ? "" : (0, tL.V9)(tP(a.colors), a.gradient_angle ?? 0)), [a]);
    return void 0 === a
        ? null
        : (0, s.jsxs)("div", {
              className: tM.pS,
              ref: c,
              children: [
                  (0, s.jsx)("div", { className: tM.sl, style: { background: `${u}` } }),
                  (0, s.jsxs)("div", {
                      className: tM.Ix,
                      children: [
                          (0, s.jsxs)(ti.D, {
                              variant: "heading-md/semibold",
                              className: tM.qP,
                              children: [J.intl.string(tR.default.KSBBpC), " ", (0, s.jsx)(tv.t, {})],
                          }),
                          (0, s.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tM.Tb,
                              children:
                                  ((t = `${J.intl.format(tR.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = l.author),
                                  (i = o.nick),
                                  t
                                      .split(" ")
                                      .map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, s.jsxs)(r.Fragment, { children: [e, " "] }, t)
                                              : (0, s.jsxs)(
                                                    "span",
                                                    {
                                                        className: tM.H,
                                                        children: [
                                                            (0, s.jsx)(t_.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tj._3.SIZE_20,
                                                            }),
                                                            " ",
                                                            i,
                                                            " ",
                                                        ],
                                                    },
                                                    t,
                                                ),
                                      )),
                          }),
                      ],
                  }),
              ],
          });
}
var tU = n(892768),
    tG = n(167189),
    tw = n(758836);
let tB = new Set(Object.values(tw.G2).filter((e) => e !== tw.G2.COLLECTION_INDEX));
var tV = n(172218),
    tH = n(575593),
    tF = n(318254),
    tY = n(825484),
    tz = n(289873),
    tK = n(44120),
    tW = n(821925),
    tJ = n(652165),
    tq = n(428262),
    tX = n(580630),
    tZ = n(427262),
    t$ = n(662388),
    tQ = n(4227),
    t0 = n(298072),
    t1 = n(993408),
    t2 = n(646101),
    t3 = n(841702),
    t6 = n(466459),
    t5 = n(590572),
    t4 = n(623373),
    t9 = n(38405);
class t7 extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        t9.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var t8 = n(878112),
    ne = n(722258),
    nt = n(828614),
    nn = n(561769),
    ni = n(540737),
    nl = n(927813);
let ns = 10 * nl.A.Millis.MINUTE,
    nr = new (class {
        capacity;
        refillTokensPerMs;
        now;
        tokens;
        lastRefillAt;
        constructor({ capacity: e, refillTokensPerMs: t, now: n = Date.now }) {
            (this.capacity = e),
                (this.refillTokensPerMs = t),
                (this.now = n),
                (this.tokens = e),
                (this.lastRefillAt = n());
        }
        refill() {
            let e = this.now(),
                t = e - this.lastRefillAt;
            t <= 0 ||
                ((this.tokens = Math.min(this.capacity, this.tokens + t * this.refillTokensPerMs)),
                (this.lastRefillAt = e));
        }
        tryTake() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return this.refill(), this.tokens >= e && ((this.tokens -= e), !0);
        }
        getMsUntilAvailable() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return (this.refill(), this.tokens >= e) ? 0 : Math.ceil((e - this.tokens) / this.refillTokensPerMs);
        }
    })({ capacity: 10, refillTokensPerMs: 5e-4 }),
    na = new Set(),
    no = new Map(),
    nd = null;
function nc(e) {
    let t = no.get(e);
    return null != t && Date.now() - t < ns;
}
var nu = n(347722),
    nm = n(61750),
    nh = n(788868),
    ng = n(591445);
function np() {
    return (0, t3.b5)(), null;
}
function nA(e) {
    let { product: t, skuId: n, tab: i, channel: l, largeGiftButton: a } = e,
        { analyticsLocations: o } = (0, f.Ay)(),
        d = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = r.useRef(!1);
    r.useEffect(() => {
        if (m.current || !(0, t4.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        e > -1 && (0, t0.n)(t, e), (m.current = !0);
    }, [t, n]);
    let h = (0, t0.Q)(t),
        g = (0, t4.B1)(t) ? (t.variants[h] ?? t) : t,
        p = g.skuId,
        { isPurchased: A } = (0, t6.h)(g),
        x = (0, u.bG)([tQ.A], () => tQ.A.hasPreviouslyFetched || null != tQ.A.fetchError),
        E = !c || x,
        I = c && A,
        C = (0, u.bG)([G.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = G.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (G.default.getUser(t) ?? void 0) : void 0;
        }),
        v = (0, nu.X)(g),
        _ = r.useCallback(() => {
            (0, ne.B)({ skuId: p, tab: i, analyticsLocations: o, showGoToShop: !0 });
        }, [p, i, o]),
        j = (0, t4.Ab)(g),
        N = r.useCallback(() => {
            j
                ? (0, tJ.B4)({
                      skuId: p,
                      analyticsLocations: o,
                      onComplete: (e) => {
                          (0, t$.gB)(),
                              (0, nm.A)({
                                  product: g,
                                  analyticsLocations: o,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tw.gs.ORB,
                              });
                      },
                  })
                : (0, tK.A)({
                      skuId: p,
                      analyticsLocations: o,
                      onClose: (e) => {
                          e && (0, t$.gB)();
                      },
                  });
        }, [g, p, j, o]),
        T = null != d && tq.Ay.canUseShopDiscounts(d),
        y = (0, t1.G0)(g),
        S = (0, t4.$K)({ product: g, hasShopDiscount: T }),
        b = (0, t4.CW)({ product: g, hasShopDiscount: T }),
        k = E && !I && !y && (j ? null != b : null != S),
        L =
            k && j && null != b
                ? J.intl.format(J.t.JC15qj, {
                      orbPrice: b.amount,
                      orbIconHook: () => (0, s.jsx)(tF.C, { className: ng.fN, size: "sm", color: "currentColor" }),
                  })
                : k && null != S
                  ? J.intl.formatToPlainString(J.t["cNSL/j"], { price: (0, tX.$g)(S.amount, S.currency) })
                  : void 0,
        R = (0, s.jsx)(eg.$, { variant: "secondary", onClick: _, text: J.intl.string(J.t.KLBTgF), fullWidth: !0 }),
        M = k ? (0, s.jsx)(eg.$, { variant: a ? "secondary" : "primary", onClick: N, text: L, fullWidth: !0 }) : null,
        P =
            l.isDM() && null != C
                ? J.intl.formatToPlainString(J.t.YwV901, { username: tZ.Ay.getName(C) })
                : l.isGroupDM()
                  ? J.intl.string(J.t.qCmNFr)
                  : void 0,
        D = v
            ? (0, s.jsx)(t8.A, {
                  primary: !0,
                  fullWidth: a,
                  fullWidthLabel: P,
                  product: t,
                  selectedVariantIndex: h,
                  giftRecipient: C,
                  giftingOrigin: nh.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        className: ng.kL,
        children: [
            c && (0, s.jsx)(np, {}),
            (0, s.jsx)("div", {
                className: ng.VH,
                children: (0, s.jsx)(nn.v3.Provider, {
                    value: {
                        productOverride: t,
                        flattenProductVariants: !0,
                        prioritizedCurrency: j ? nn.Hi.ORBS : nn.Hi.FIAT,
                    },
                    children: (0, s.jsx)(nt.A, {
                        skuId: n,
                        cardClassName: ng.Nr,
                        hideWishlistButton: !0,
                        hidePrimaryCTA: !0,
                        hideSecondaryCTA: !0,
                        onClickCard: _,
                    }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: ng.zH,
                children: [(0, s.jsxs)(tY.e, { wrap: !1, fullWidth: !0, children: [R, M, !a && D] }), a && D],
            }),
        ],
    });
}
let nx = { rootMargin: "200px" };
function nf(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t5.A)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tW.A], () => tW.A.getFetchStateForSku(e.skuId)),
        [a, o] = r.useState(!1),
        d = (0, tV.B)(
            r.useCallback((e) => {
                e.isIntersecting && o(!0);
            }, []),
            nx,
            "loading" === i && !a,
        );
    return (r.useEffect(() => {
        var t;
        a &&
            "loading" === i &&
            !("" === (t = e.skuId) || na.has(t) || nc(t)) &&
            !(na.size >= 50) &&
            (0, ni.jn)(t) &&
            (na.add(t),
            (function e(t) {
                null == nd &&
                    (nd = setTimeout(() => {
                        (nd = null),
                            (function () {
                                for (let e of [...na]) (nc(e) || !(0, ni.jn)(e)) && na.delete(e);
                                if (0 === na.size) return;
                                let t = [];
                                for (let e of na) {
                                    if (t.length >= 50 || !nr.tryTake()) break;
                                    t.push(e),
                                        na.delete(e),
                                        (function (e) {
                                            if ((no.set(e, Date.now()), no.size > 2e3)) {
                                                let e = no.keys().next().value;
                                                null != e && no.delete(e);
                                            }
                                        })(e);
                                }
                                t.length > 0 && (0, ni.tu)({ skuIds: t }),
                                    na.size > 0 && e(Math.max(nr.getMsUntilAvailable(), 300));
                            })();
                    }, t));
            })(300));
    }, [a, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nc(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: d,
                  className: ng.kL,
                  children: (0, s.jsx)("div", { className: ng.dc, children: (0, s.jsx)(tz.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            (0, t4.YW)(t) !== tH.R.PROFILE_FRAME &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(nA, { ...e, product: t })
          : null;
}
function nE(e) {
    let { enabled: t, largeGiftButton: n } = (0, t2.i)("CollectiblesShopProductDetailsEmbed");
    return t ? (0, s.jsx)(nf, { ...e, largeGiftButton: n }) : null;
}
function nI(e) {
    return (0, s.jsx)(t7, { children: (0, s.jsx)(nE, { ...e }) });
}
var nC = n(661531),
    nv = n(696986),
    n_ = n(95561),
    nj = n(548118),
    nN = n(250627),
    nT = n(741231),
    ny = n(749314),
    nS = n(71393),
    nb = n(722888),
    nk = n(43136),
    nL = n(575926),
    nR = n(736132);
function nM(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nS.A], () => nS.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nb.G)(t),
        { listingsLoaded: a } = (0, nN.bb)(t),
        d = (0, nN.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            eH.default.track(W.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, n_.H$)(t) }),
                await (0, nT.A)(W.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, te.A)(
        { type: e8.ImpressionTypes.VIEW, name: e8.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(nR.lm, nR.dc), children: (0, s.jsx)(tz.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nR.lm,
                children: [
                    (0, s.jsx)(nk.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nR.qs,
                        children: [
                            (0, s.jsx)(nL.h, {
                                height: "16px",
                                width: "16px",
                                color: nC.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(ti.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nR.Nl,
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsx)(ti.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nv.h, { size: 4 }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsx)(ny.A, {}),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nR.kS,
                        children: [
                            (0, s.jsx)(nj.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nR.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: J.intl.format(J.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: J.intl.format(J.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nR.$h,
                                children: (0, s.jsx)(eg.$, { onClick: c, icon: nL.A, text: J.intl.string(J.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nP = n(390248),
    nD = n(282108),
    nO = n(33358),
    nU = n(885574),
    nG = n(987773);
function nw(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eM.D, {
        onClick: function () {
            (0, eN.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: nG.L,
        children: [
            (0, s.jsx)(nU.m, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: nG.m, children: J.intl.string(J.t["2aXnfa"]) }),
        ],
    });
}
var nB = n(974875),
    nV = n(900019);
function nH(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([nV.A], () => nV.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, nB.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(eg.$, { variant: "secondary", text: J.intl.string(J.t["4q1Elf"]), onClick: l, disabled: !i });
}
var nF = n(320448),
    nY = n(713654),
    nz = n(958340),
    nK = n(384231),
    nW = n(959698),
    nJ = n(438729),
    nq = n(375199),
    nX = n(886737),
    nZ = n(699352),
    n$ = n(8455),
    nQ = n(885386),
    n0 = n(540999),
    n1 = n(47167),
    n2 = n(58703),
    n3 = n(427930);
function n6(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class n5 {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : to.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nS.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nz.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, n2.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: n6(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, n1.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: n6(h, d) };
    }
}
var n4 = n(66834),
    n9 = n(385648);
async function n7(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nS.A.getGuild(t))
        try {
            await (0, n9.Z2)(t, { object: W.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, n4.k)(t),
                (l = D.A.getChannel(n));
        } catch {}
    eH.default.track(W.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nT.A)(W.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var n8 = n(387408),
    ie = n(427209),
    it = n(249847);
function ii() {
    return (0, s.jsxs)("div", {
        className: it.N1,
        children: [
            (0, s.jsx)(ie.A, { size: "xs", className: it.nr, color: nC.A.colors.TEXT_MUTED }),
            (0, s.jsx)(p.E, {
                className: it.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function il(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new n5(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, to.A, nS.A, nz.A],
            () => l.getForwardInfo(D.A, G.default, O.A, to.A, nS.A, nz.A).footerInfo,
            [l],
            h.A,
        ),
        o = (0, u.bG)([D.A], () => D.A.getChannel(t.messageReference?.channel_id)),
        d = r.useCallback(() => {
            n7(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eM.D, {
              className: it.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: it.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, s.jsx)(is, { channel: o }) : null,
                  (0, s.jsx)(p.E, {
                      className: it.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(nF._, { size: "xxs", color: nC.A.colors.TEXT_MUTED }),
              ],
          });
}
function is(e) {
    let { channel: t } = e,
        n = (0, n$.Vp)({ location: "ForwardFooter" }),
        i = r.useMemo(() => (0, nY.gU)(t), [t]);
    return n.enabled && null != i ? (0, s.jsx)(i, { className: it.yl, size: "xs", color: "currentColor" }) : null;
}
function ir(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: l } = e,
        a = r.useMemo(() => (0, n8.A)(t, n), [t, n]),
        o = nQ.hD.useSetting(),
        d = nQ.rs.useSetting(),
        c = (0, u.bG)([n0.A], () => n0.A.isDeveloper),
        m = (0, nW.U)(),
        h = (0, nK.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nq.A)(a, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
            postProcessor: m ? nX.A : void 0,
        }),
        x = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        f = nQ.hH.useSetting();
    return null == x
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: it.kL,
                  children: [
                      (0, s.jsx)("div", { className: it.hD }),
                      (0, s.jsxs)("div", {
                          className: it.Qs,
                          children: [
                              (0, s.jsx)(ii, {}),
                              (0, s.jsx)(nJ.Ay, { message: a, content: g, compact: f }),
                              (0, nZ.A)({
                                  channelMessageProps: { message: a, channel: x, compact: f },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: l,
                              }),
                              !m && (0, s.jsx)(il, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function ia(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(ir, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var io = n(341662),
    id = n(508770),
    ic = n(369606),
    iu = n(409626),
    im = n(49491),
    ih = n(692969),
    ig = n(738250),
    ip = n(314319);
function iA(e) {
    let { gameId: t } = e,
        { enabled: n } = io.A.useConfig({ location: "game_profile_embed" });
    return n ? (0, s.jsx)(ix, { gameId: t }) : null;
}
function ix(e) {
    let { gameId: t } = e,
        { gameRecord: n, isLoading: i } = (0, ig.A)({ gameId: t }),
        l = (0, ih.A)({ gameId: t, source: iu.Ob.Embed }),
        r = (0, im.A)(n);
    if (null == n || null == l || i || r) return null;
    let a = n.getIconURL(80),
        o =
            null != n.bannerHash
                ? w.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 512, keepAspectRatio: !0 })
                : null != n.screenshotUrls && n.screenshotUrls.length > 0
                  ? n.screenshotUrls[0]
                  : null;
    return (0, s.jsxs)(eM.D, {
        className: ip.E6,
        onClick: l,
        "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: n.name }),
        children: [
            (0, s.jsxs)("div", {
                "aria-hidden": !0,
                className: ip.yl,
                children: [
                    null != o && (0, s.jsx)("div", { className: ip.Tp, style: { backgroundImage: `url("${o}")` } }),
                    (0, s.jsx)("div", { className: ip.N4 }),
                ],
            }),
            null != a && (0, s.jsx)("img", { src: a, alt: "", className: ip.Kk, draggable: !1 }),
            (0, s.jsxs)("div", {
                className: ip.Qs,
                children: [
                    (0, s.jsx)(ti.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: n.name,
                    }),
                    null != n.l30Rank &&
                        (0, s.jsx)("div", {
                            className: ip.k3,
                            children: (0, s.jsx)(id.E, {
                                variant: "default",
                                type: { text: J.intl.formatToPlainString(J.t.ehZXlZ, { rank: n.l30Rank }) },
                                icon: ic.O,
                            }),
                        }),
                ],
            }),
            (0, s.jsx)(eS.K, {
                icon: nF._,
                variant: "overlay-secondary",
                size: "sm",
                "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: n.name }),
                onClick: l,
            }),
        ],
    });
}
var iE = n(643612),
    iI = n(607399),
    iC = n(702841),
    iv = n(529200),
    i_ = n(395671),
    ij = n(993748),
    iN = n(212534),
    iT = n(64493);
function iy(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, iC.yK)(
            [iN.A],
            () => [iN.A.getApplication(t), iN.A.isInvalidApplication(t), iN.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, iC.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tV.K)(u),
        h = r.useCallback(() => {
            eH.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: iI.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, ij.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === iN.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eH.default.track(W.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: iI.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(iv.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, s.jsx)(iv.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: iT.k,
                          children: [
                              (0, s.jsx)(iv.A.Icon, { expired: !0 }),
                              (0, s.jsx)(iv.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === iN.e.FETCHING
          ? (0, s.jsxs)(iv.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, s.jsx)(iv.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(ei, { app: i_.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var iS = n(229527),
    ib = n(870136),
    ik = n(330075),
    iL = n(412728);
function iR(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nN.Qi)(n, i),
        r = (0, iC.bG)([U.A], () => U.A.getGuildId());
    return ((0, te.A)(
        {
            type: iL.z.VIEW,
            name: e8.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(ik.i, {
              guildProductListing: l,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var iM = n(484724),
    iP = n(953727);
function iD(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, iP.A)(l),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: i,
            }),
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: i,
            }),
        ],
    });
}
var iO = n(122906),
    iU = n(401755),
    iG = n(195580),
    iw = n(344900);
function iB(e) {
    let { code: t } = e,
        i = (0, u.bG)([iO.A], () => iO.A.getGuildTemplate(t));
    if (null == i || i.state === iU.QB.RESOLVING)
        return (0, s.jsxs)(iv.A, {
            children: [
                (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, s.jsx)(iv.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === iU.QB.EXPIRED)
        return (0, s.jsxs)(iv.A, {
            children: [
                (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, s.jsxs)(iv.A.Body, {
                    children: [
                        (0, s.jsx)(iv.A.Icon, { expired: !0 }),
                        (0, s.jsx)(iv.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eg.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, s.jsx)(eg.$, {
              onClick: () => {
                  (0, eN.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("16227"),
                          n.e("78841"),
                          n.e("60361"),
                          n.e("32048"),
                          n.e("99430"),
                          n.e("79864"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("97199"),
                          n.e("16198"),
                          n.e("69771"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === iU.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(iv.A, {
        children: [
            (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, s.jsxs)(iv.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iw.iH,
                        children: [
                            (0, s.jsx)(iD, { className: iG.K }),
                            (0, s.jsx)(iv.A.Info, {
                                title: i.name,
                                children: J.intl.format(J.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var iV = n(842241),
    iH = n(681154),
    iF = n(155718);
let iY = new Set([
    iH.ContentInventoryEntryType.TOP_ARTIST,
    iH.ContentInventoryEntryType.TOP_GAME,
    iH.ContentInventoryEntryType.PLAYED_GAME,
    iH.ContentInventoryEntryType.WATCHED_MEDIA,
    iH.ContentInventoryEntryType.LISTENED_SESSION,
    iH.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var iz = n(398817),
    iK = n(857071),
    iW = n(46054),
    iJ = n(731068),
    iq = n(619517),
    iX = n(207133),
    iZ = n(835245),
    i$ = n(844222),
    iQ = n(463930),
    i0 = n(251391),
    i1 = n(601255),
    i2 = n(562819),
    i3 = n(234914),
    i6 = n(59318),
    i5 = n(837528),
    i4 = n(754459),
    i9 = n(967144),
    i7 = n(342296),
    i8 = n(696451),
    le = n(218394);
function lt(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, iP.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, s.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: i,
        }),
    });
}
var ln = n(717125),
    li = n(376943),
    ll = n(36491),
    ls = n(752755),
    lr = n(461715),
    la = n(381941),
    lo = n(38208);
function ld(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lr.CI)(e),
                i = (0, iC.bG)([i8.Ay, P.default], () => {
                    let e = P.default.getId();
                    return i8.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, iC.bG)(
                    [ln.A],
                    () => null != n && n?.channelId != null && ln.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(W.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, iC.cf)([ls.A, nS.A, D.A, G.default, U.A], () => {
                    let e = ls.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = nS.A.getGuild(n?.guildId),
                        i = D.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        r = null != i && (0, li.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: r,
                    };
                }, [n]),
                h = r.useMemo(() => {
                    let e = (0, lr.tU)({
                        mediaPostEmbedData: a,
                        guild: o,
                        parentChannel: d,
                        user: c,
                        selectedGuildId: u,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: c };
                }, [a, o, d, c, u, m]);
            return (
                r.useEffect(() => {
                    n?.threadId != null &&
                        (ls.A.getEmbedFetchState(n.threadId) !== ls.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, ll.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, i4.A)(n.id, la.Fd),
        u = (0, i5.VL)(n, i, c, !0),
        m = nQ.kt.useSetting(),
        h = (0, le.j)(),
        [g, A] = r.useState(!1),
        [f, E] = r.useState(d?.coverImage == null),
        I = (0, iC.bG)([i8.Ay, G.default], () => i8.Ay.isMember(d?.guildId, G.default.getCurrentUser()?.id), [d]),
        C = (0, iC.bG)([i8.Ay], () => (d?.authorId != null ? i8.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, i1.A)(C?.avatarDecoration != null ? C?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, i9.gn)(C?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: y } = r.useContext(i$.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            A(!0);
        }, [A]),
        L = r.useCallback(() => {
            A(!1);
        }, [A]),
        R = r.useCallback(async () => {
            null != d &&
                ((0, n_.zV)(W.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: I,
                }),
                d.canAccess
                    ? (0, nT.A)(W.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : I
                      ? (0, nT.A)(W.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await n9.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, I]);
    if (null == d) return null;
    let M = (0, w.F_)({ avatarDecoration: v, size: (0, i2.Te)(tj._3.SIZE_40), canAnimate: S }),
        O = d.user?.getAvatarURL(d.guildId, 40, S);
    function B() {
        y.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, i6.ge)(V);
    return (0, s.jsxs)("div", {
        className: lo.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lo.iT,
                onMouseEnter: k,
                onMouseLeave: L,
                children: [
                    !f &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: o()(lo.xn, { [lo.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(i3.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lo.xn, { [lo.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lo.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eM.D, {
                            onClick: R,
                            children: (0, s.jsx)("div", {
                                className: lo.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lo.BS,
                                    children: [
                                        (0, s.jsx)(lt, { color: nC.A.colors.WHITE.css }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: d.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: lo.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lo.OA,
                        children: [
                            (0, s.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lo.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lo.hF, lo.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lo._5,
                        children: [
                            null != d.authorId &&
                                null != O &&
                                (0, s.jsx)(i7.A, {
                                    targetElementRef: a,
                                    userId: d.authorId,
                                    guildId: d.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: d.avatarUrl,
                                    newAnalyticsLocations: [x.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, s.jsx)("div", {
                                            onMouseEnter: B,
                                            onMouseLeave: B,
                                            children: (0, s.jsx)(t_.eu, {
                                                ...e,
                                                ref: a,
                                                size: tj._3.SIZE_40,
                                                src: O,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lo.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lo.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(i0.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lo.Xg,
                                                }),
                                            (0, s.jsx)(eM.D, {
                                                onClick: R,
                                                className: lo.HA,
                                                children: (0, s.jsx)(ti.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: d.channelName ?? d.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != d.authorName &&
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lo.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: () =>
                                                    null == d.authorId
                                                        ? (0, s.jsx)(iQ.V, {
                                                              name: d.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: lo.fh,
                                                          })
                                                        : (0, s.jsx)(
                                                              i7.A,
                                                              {
                                                                  targetElementRef: l,
                                                                  userId: d.authorId,
                                                                  guildId: d.guildId,
                                                                  channelId: i.id,
                                                                  messageId: n.id,
                                                                  roleId: N,
                                                                  avatarUrl: d.avatarUrl,
                                                                  newAnalyticsLocations: [x.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, s.jsx)(iQ.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: d.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: lo.fh,
                                                                      }),
                                                              },
                                                              (0, iZ.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(eg.$, { variant: "primary", onClick: R, text: d.ctaText })
                                : (0, s.jsx)(eg.$, { onClick: R, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lc = n(492230),
    lu = n(68935),
    lm = n(704413),
    lh = n(537039),
    lg = n(711038),
    lp = n(892340),
    lA = n(803306),
    lx = n(491182),
    lf = n(639288),
    lE = n(10364),
    lI = n(378570),
    lC = n(138298),
    lv = n(761640),
    l_ = n(989349),
    lj = n.n(l_),
    lN = n(606049),
    lT = n(943815),
    ly = n(447215),
    lS = n(221314),
    lb = n(237507),
    lk = n(334211),
    lL = n(513653);
let lR = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = G.default.getUser(t),
        u = r.useMemo(() => (i ? (0, lT.A)((0, n2.i$)(lj()(), "LT")) : null), [i]),
        m = (0, ly.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, ty.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_16)) : lL,
        g =
            null != c
                ? J.intl.format(lS.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(lS.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(lk.NB, lk.JZ, u),
        children: [
            (0, s.jsx)(t_.eu, { src: h, size: tj._3.SIZE_16, className: lb.my, "aria-label": "" }),
            (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: lb.Xh, children: g }),
            (0, s.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: lb.Ek, children: "\u2022" }),
                    (0, s.jsx)(lN.A, { timestamp: d, className: lb.vE }),
                ],
            }),
        ],
    });
};
var lM = n(167684);
function lP(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new n5(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, to.A, nS.A, nz.A],
            () => l.getForwardInfo(D.A, G.default, O.A, to.A, nS.A, nz.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = nS.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.A.getCurrentlySelectedChannelId(),
                s = lv.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (lC.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, lI.iN)(i),
                eH.default.track(W.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eM.D, {
              className: lM.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: lM.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: lM.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(nF._, { size: "xxs", color: nC.A.colors.TEXT_MUTED }),
              ],
          });
}
function lD(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, ty.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, i4.A)(e.id, la.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, i5.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, i5.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(lx.A, {
        childrenExecutedCommand: (0, s.jsx)(lR, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(lf.Ay, {
            message: t,
            channel: i,
            author: o,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
            renderPopout: lE.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(nJ.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: lM.iU,
        author: o,
    });
}
function lO(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lA.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, n8.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nQ.hD.useSetting(),
        c = nQ.rs.useSetting(),
        m = (0, u.bG)([n0.A], () => n0.A.isDeveloper),
        h = (0, nK.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nq.A)(o, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        x = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: lM.kL,
                  children: (0, s.jsxs)("div", {
                      className: lM.Qs,
                      children: [
                          (0, s.jsx)(lD, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nZ.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: lM.Mf,
                          }),
                          (0, s.jsx)(lP, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function lU(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(lO, { message: t, snapshot: e, index: n }, n)),
    });
}
var lG = n(302031),
    lw = n(738188),
    lB = n(123292),
    lV = n(239093),
    lH = n(89453);
function lF(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === lV.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === lV.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eM.D, {
              onClick: () => {
                  (0, eN.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("17207"),
                          n.e("75339"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, s.jsx)(e, {
                              classificationId: l,
                              source: lV.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lH.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lH.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lH.U1,
                              children: [
                                  (0, s.jsx)(lw.i, { className: lH.QW, color: nC.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lH.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: lj()().diff(lj().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lH.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: lH.xQ,
                      children: (0, s.jsx)(lB.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var lY = n(349288),
    lz = n(393033),
    lK = n(903009);
function lW(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(lY.Anchor, {
        onClick: function () {
            (0, eN.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("17207"),
                    n.e("75339"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: lV.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lK.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function lJ(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(lY.Anchor, { className: lK.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function lq(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case lV.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(lW, { classificationId: n });
        case lV.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(lJ, { learnMoreLink: i });
        default:
            return null;
    }
}
function lX(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(tn.k, { size: "xs", color: nC.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(lw.i, { color: nC.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: lK.Kk, children: n[t] }) : null;
}
function lZ(e) {
    let { children: t, theme: n } = e,
        i = { default: lK._y, danger: lK.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function l$(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lz.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eM.D, {
              className: lK.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lK.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lK.U1,
                              children: [
                                  (0, s.jsx)(lX, { iconType: n.icon }),
                                  (0, s.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lK.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), lj()().diff(lj().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lK.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(lZ, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              lq,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lQ = n(44724),
    l0 = n(50777),
    l1 = n(990078),
    l2 = n(319060),
    l3 = n(812282),
    l6 = n(922016),
    l5 = n(34337),
    l4 = n(240248),
    l9 = n(256449),
    l7 = n(194004),
    l8 = n(148355),
    se = n(3026),
    st = n(862482),
    sn = n(847374),
    si = n(964486),
    sl = n(235986),
    ss = n(624793),
    sr = n(636537),
    sa = n(639245),
    so = n(87719),
    sd = n(725807),
    sc = n(750385),
    su = n(850992),
    sm = n(625494),
    sh = n(698279),
    sg = n(631144),
    sp = n(979132);
function sA(e) {
    eH.default.track(W.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
        location_section: W.JJy.STICKER_POPOUT,
    }),
        (0, so.e)();
}
function sx(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(sl.A, {
        children: [
            (0, s.jsx)(l8.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(sl.A, {
                direction: sl.A.Direction.VERTICAL,
                justify: sl.A.Justify.CENTER,
                className: sp.bM,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-md/semibold", children: (0, s.jsx)(se.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let sf = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [a, o, d] = (0, u.yK)(
                [sc.A],
                () => [sc.A.getStickerPack(n.pack_id), !sc.A.hasLoadedStickerPacks, sc.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            c = ((e) => {
                let { sticker: t, stickerPack: n } = e;
                return r.useMemo(
                    () =>
                        null == n
                            ? []
                            : n.stickers
                                  .slice(0, 4)
                                  .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                    [t, n],
                );
            })({ sticker: n, stickerPack: a });
        (0, l9.Sr)(n.pack_id);
        let m = (0, l9.pD)(i),
            h = { refreshPositionKey: l, channel: i },
            g = r.useRef(h);
        return (r.useEffect(() => {
            g.current = h;
        }),
        r.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [o]),
        r.useEffect(() => {
            let { channel: e } = g.current;
            eH.default.track(W.HAw.OPEN_POPOUT, {
                type: W.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, n_.dI)(e),
            });
        }, [n.pack_id]),
        o || null == a)
            ? (0, s.jsx)(l5.Y0, { className: sg.v0 })
            : (0, s.jsxs)(l5.Uq, {
                  className: sg.Bm,
                  children: [
                      (0, s.jsx)(ti.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(p.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                              : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: sg.pQ,
                          children: c.map((e) => (0, s.jsx)(l8.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: sg.j0,
                              children: (0, s.jsx)(
                                  eg.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: J.intl.string(J.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sm._.dispatchToLastSubscribed(W.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sh.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && su.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: a, stickerPickerCategories: m }),
                                              t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    sE = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
            [d, c] = r.useState(null),
            [m, h] = r.useState(!1),
            g = G.default.getCurrentUser(),
            A = tq.Ay.canUseCustomStickersEverywhere(g),
            x = (0, u.bG)([nS.A], () => nS.A.getGuild(n.guild_id)),
            f = null != x,
            [E, I] = r.useState(!1),
            [C, v] = r.useState(null),
            _ = r.useMemo(
                () => ({
                    page: null != i.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
                    section: W.JJy.STICKER_POPOUT,
                }),
                [i.guild_id],
            ),
            { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, n_.dI)(i) }),
            N = { stickerSourceGuild: x, refreshPositionKey: a },
            T = r.useRef(N);
        r.useEffect(() => {
            T.current = N;
        }),
            r.useEffect(() => {
                let { stickerSourceGuild: e } = T.current;
                (async () => {
                    if (null == e || e.features.has(W.GuildFeatures.DISCOVERABLE)) {
                        var t;
                        c(
                            await ((t = n.id),
                            sr.Bo.get({ url: W.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, n9.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    h(!0);
                })();
            }, [n.id, f]);
        let y = n.guild_id === i.getGuildId(),
            S = null != d,
            b = !1,
            k = "Custom Sticker Popout";
        A
            ? (t = f
                  ? y
                      ? J.intl.string(J.t.fZ0DiG)
                      : J.intl.string(J.t["1f6D9m"])
                  : S
                    ? J.intl.string(J.t.yHmoR9)
                    : J.intl.string(J.t.vZaScH))
            : f
              ? ((t = y ? J.intl.string(J.t.jNphpt) : J.intl.string(J.t.lyD5ZW)),
                (b = !0),
                (k = "Custom Sticker Popout (Upsell)"))
              : S
                ? ((t = J.intl.string(J.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
                : ((t = J.intl.format(J.t.hGWuxU, {
                      openPremiumSettings: () => {
                          sA(i), l();
                      },
                  })),
                  (k = "Custom Sticker Popout (Soft Upsell)"));
        let L = !b && !f && S && A;
        if (
            (r.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [m, d]),
            (0, si.Ay)(() => {
                eH.default.track(W.HAw.OPEN_POPOUT, { type: k, ...j });
            }),
            !m)
        )
            return (0, s.jsx)(l5.Y0, { className: sg.v0 });
        {
            let e;
            return (0, s.jsxs)(l5.Uq, {
                className: sp.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || f) return;
                        l();
                        let e = d.id;
                        try {
                            await n4.A.joinGuild(e), n4.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, s.jsxs)("div", {
                        className: sp.gH,
                        children: [
                            (0, s.jsx)(sx, { description: t, sticker: n }),
                            b &&
                                (0, s.jsx)(sd.A, {
                                    className: sp.lI,
                                    subscriptionTier: nh.pe.TIER_2,
                                    size: st.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            L &&
                                (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: sp.lI,
                                    children: (0, s.jsx)(eg.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: J.intl.string(J.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != x || null != d) &&
                        (() => {
                            if (!S && !f) return;
                            let e = (d?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != d ? ss.GO.createFromDiscoverableGuild(d) : ss.GO.createFromGuildRecord(x);
                            return (0, s.jsxs)("div", {
                                className: sp.tl,
                                children: [
                                    (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: sp.YW,
                                        children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
                                    }),
                                    (0, s.jsx)(sa.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: L,
                                    }),
                                    !f &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(eM.D, {
                                                    onClick: function () {
                                                        a(), I(!E);
                                                    },
                                                    className: sp.wK,
                                                    children: (0, s.jsxs)(sl.A, {
                                                        children: [
                                                            (0, s.jsx)(p.E, {
                                                                className: sp.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: J.intl.string(J.t.vtH5hn),
                                                            }),
                                                            (0, s.jsx)(sn.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: o()(sp.ZB, { [sp.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, s.jsx)(sl.A, {
                                                        wrap: sl.A.Wrap.WRAP,
                                                        align: sl.A.Align.START,
                                                        justify: sl.A.Justify.START,
                                                        className: sp.LX,
                                                        children: e.map((e) =>
                                                            (0, s.jsx)(
                                                                l1.m,
                                                                {
                                                                    text: e.name,
                                                                    ...l5.Uk,
                                                                    children: (0, s.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: o()(sp.Th, {
                                                                                [sg.vT]: null != C && C !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, s.jsx)(l8.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: C === e.id,
                                                                                sticker: e,
                                                                            }),
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        }),
                                ],
                            });
                        })(),
                ],
            });
        }
    };
function sI(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(l5.Uq, {
        className: sg.Bm,
        children: (0, s.jsx)(sx, {
            sticker: i,
            description: J.intl.format(J.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sA(t);
                },
            }),
        }),
    });
}
let sC = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, l9.Zq)(t, !0);
    return null != r && (0, lu.FD)(r)
        ? (0, s.jsx)(sf, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lu.Xw)(r)
          ? (0, s.jsx)(sE, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == r
                ? (0, s.jsx)(sI, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, s.jsx)(l5.Y0, {});
};
var sv = n(76513);
let s_ = (0, l4.xI)(l2.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sj = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, l9.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: sv.Zl,
                children: [(0, s.jsx)(l3.s, { size: "xs", color: "currentColor", className: sv.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(f.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: sv.be,
                children: (0, s.jsx)(l6.Y, {
                    align: "center",
                    animation: l6.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(sC, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(l1.m, {
                            ...l5.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, l5.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    n_.Ay.trackWithMetadata(W.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nh.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, l7.Tw)(e.format_type),
                                        is_custom: (0, l7.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eM.D, {
                                innerRef: l,
                                className: sv.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, s.jsx)(l8.A, { isInteracting: i, size: s_, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sN = n(406704),
    sT = n(531142),
    sy = n(140735),
    sS = n(442433),
    sb = n(143413),
    sk = n(935208),
    sL = n(321045),
    sR = n(456874),
    sM = n(707539),
    sP = n(80682),
    sD = n(465364),
    sO = n(805964),
    sU = n(943220),
    sG = n(838541);
function sw(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [O.A],
            () => ({ isBlocked: O.A.isBlockedForMessage(t), isIgnored: O.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sP.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
        () =>
            null != t.content && "" !== t.content
                ? (0, sD.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                : null,
        [t],
    );
    return (0, s.jsxs)("div", {
        className: lk.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: lk.FJ }),
            (0, s.jsx)(sU.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: lk.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: r,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, sO.o)(e, t, n, i, lk.tP, {
                        trailingIconClass: lk._v,
                        leadingIconClass: lk.a5,
                        iconSize: sG.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, r ?? (0, s.jsx)("span", { className: lk.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var sB = n(747926),
    sV = n(650583),
    sH = n(74791);
function sF(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([D.A], () => D.A.getChannel(sk.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(sY, { channel: i, compact: n, isSystemMessage: (0, sb.A)(t) });
}
function sY(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, n1.Ay)(a),
        h = (0, u.bG)([sR.A], () => sR.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([sR.A], () => sR.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([sR.A], () => sR.A.getCount(t.id))),
            (r = (0, sM.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == l || 0 === l
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: sH.vE, children: (0, sM.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(sw, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: sH.vE, children: (0, sM.aK)(r) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(sH.GI, { [sH.E]: !d, [sH.E_]: c }) }),
            (0, s.jsx)(eM.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sB.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sV.dh.SPACE || e.key === sV.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sB.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, sS.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("91763"),
                            n.e("38730"),
                            n.e("34971"),
                            n.e("3998"),
                            n.e("43266"),
                            n.e("91671"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("96804"),
                            n.e("21060"),
                            n.e("21106"),
                            n.e("40175"),
                            n.e("43746"),
                            n.e("90554"),
                            n.e("99011"),
                            n.e("85802"),
                            n.e("65200"),
                            n.e("26250"),
                            n.e("51212"),
                            n.e("84615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": J.intl.string(J.t["8ipxiY"]),
                className: o()(sH.kL, { [sH.og]: c }),
                children: (0, s.jsxs)(sT.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: sH.kq,
                            children: [
                                (0, s.jsx)(sy.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, s.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: sH.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: sH.lO,
                                    "aria-hidden": !A,
                                    children: (0, sL.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sH.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sz = n(383233),
    sK = n(834942),
    sW = n(644447),
    sJ = n(659674),
    sq = n(998218),
    sX = n(5095),
    sZ = n(294520),
    s$ = n(320095),
    sQ = n(863439),
    s0 = n(707985),
    s1 = n(730852),
    s2 = n(265422),
    s3 = n(986268);
function s6(e) {
    let { guild: t, channel: n, message: i } = e,
        l = U.A.getGuildId(),
        a = ed.A.getChannelId(l),
        o = r.useCallback(() => {
            eH.default.track(W.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, s2.i)(t.id, n.id),
                s1.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(iv.A.Channel, { channel: n });
    return (0, s.jsx)(iv.A, {
        children: (0, s.jsxs)(iv.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: iw.iH,
                    children: [
                        (0, s.jsx)(iv.A.Icon, { guild: t }),
                        (0, s.jsx)(iv.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: iw.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: iw.E3,
                                        children: (0, s.jsx)(s3.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: iw.UD,
                    children: (0, s.jsx)(eg.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? J.intl.string(J.t["7vb2cc"]) : J.intl.string(J.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function s5(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = D.A.getChannel(l),
        a = nS.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && to.A.can(W.xBc.VIEW_CHANNEL, r) && to.A.can(W.xBc.CONNECT, r)
        ? (0, s.jsx)(s6, { guild: a, channel: r, message: n })
        : null;
}
var s4 = n(789645),
    s9 = n(298236),
    s7 = n(953756),
    s8 = n(564107),
    re = n(503556),
    rt = n(143517);
function rn(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: l,
            getOnMediaItemContextMenu: r,
            shouldHideMediaOptions: a,
            enabledContentHarmTypeFlags: d,
            onSuppressEmbed: c,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, s7.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(s8.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(s9.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(s7.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(s7.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(re.O0, rt.k, rt.z, { [re.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eM.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: re.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, s.jsx)(s4.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, iz.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ri = n(451988),
    rl = n(261958),
    rs = n(212245),
    rr = n(775602),
    ra = n(62583),
    ro = n(956549),
    rd = n(550151),
    rc = n(392054),
    ru = n(853390),
    rm = n(290863),
    rh = n(403362),
    rg = n(811024),
    rp = n(360469),
    rA = n(212242);
let rx = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, le.j)(),
        s = (0, u.bG)([rr.Ay], () => rr.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new ri.IX();
            return (
                e.start(a ? 15 * nl.A.Millis.SECOND : nl.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nl.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, ru.fU)(n)
    );
});
rx.displayName = "ActivityRuntimeCounter";
let rf = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, rs.p)(),
        m = (0, u.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([P.default], () => P.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: E,
            activityLaunchState: I,
        } = (0, u.cf)(
            [ec.Ay],
            () => ({
                embeddedActivity: ec.Ay.getEmbeddedActivitiesForChannel(h ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: ec.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: ec.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        C = A?.userIds,
        v = (0, u.yK)(
            [G.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(rh.Vq),
            [C],
        ),
        _ = (0, u.bG)([rm.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = rm.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new i_.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rp.Gl), e;
        }, [n]),
        T = (0, rd.vG)({ userId: g, channelId: i, application: N }),
        y = null == A,
        S = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return r.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            r = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? J.intl.string(J.t.RscU7I) : J.intl.string(J.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, rg.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== rd.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case rd.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case rd.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case rd.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case rd.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case rd.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case rd.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case rd.Gy.NO_CHANNEL:
                                case rd.Gy.NO_GUILD:
                                case rd.Gy.NO_USER:
                                case rd.Gy.IS_AFK_CHANNEL:
                                    e = J.intl.string(J.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: A, joinability: T, currentEmbeddedActivity: E, channel: m }),
        b = r.useId(),
        k = null != I && I.isLaunching && I.componentId === b,
        L = async () => {
            eH.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                is_activity_start: y,
                cta: "Play",
            }),
                y
                    ? await (0, ro.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                          commandOrigin: rc.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, ra.A)({
                          applicationId: A.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                      });
        },
        R = S.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        M = (0, ee.F)(N, () => {
            eH.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        O = w.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let U = v.length,
        B = _?.timestamps?.start ?? _?.created_at,
        V = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case W.$pd.STREAMING:
                    return { text: J.intl.formatToPlainString(J.t.tyCw2q, { count: n }), Icon: F.o };
                case W.$pd.LISTENING:
                    return { text: J.intl.formatToPlainString(J.t["2l8yka"], { count: n }), Icon: Y.T };
                default:
                    return { text: J.intl.formatToPlainString(J.t.yJj035, { count: n }), Icon: z._ };
            }
        })({ activity: _, activityUsersCount: U }),
        K = [
            {
                label: S.text,
                trackingArea: Z.kY.PLAY,
                onClick: L,
                disabled: S.disabled,
                disabledReason: t,
                submitting: k,
            },
        ];
    return (0, s.jsx)(H.h, {
        header: J.intl.string(J.t.pkq6Vq),
        title: n.name,
        iconSrc: O,
        info: (0, s.jsx)("div", {
            className: rA.QR,
            children: y
                ? (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: R })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: rA.oL,
                                  children: [
                                      null != B &&
                                          (0, s.jsxs)("div", {
                                              className: rA.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: rA.y9,
                                                      children: (0, s.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(rx, { start: B }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(rA.DT, rA.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(rl.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, s.jsx)(p.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          U > 0 && (0, s.jsx)(X, { activityUsers: v, guildId: l, activityText: V.text }),
                      ],
                  }),
        }),
        actions: K,
        onClickContent: M,
        trackingConfig: {
            id: n.id,
            linkType: et.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: y,
        },
    });
});
var rE = n(164664),
    rI = n(439401),
    rC = n(657044),
    rv = n(863574),
    r_ = n(707606),
    rj = n(456412),
    rN = n(429913),
    rT = n(242874),
    ry = n(499454),
    rS = n(165191),
    rb = n(928550),
    rk = n(976860),
    rL = n(871123),
    rR = n(317560),
    rM = n(30793),
    rP = n(189081);
function rD(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, iP.A)(i),
        viewBox: "0 0 136 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, s.jsxs)("g", {
            className: n,
            fill: t,
            children: [
                (0, s.jsx)("path", {
                    d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
                    fill: t,
                }),
            ],
        }),
    });
}
var rO = n(738533),
    rU = n(45938),
    rG = n(615396),
    rw = n(936504),
    rB = n(820284),
    rV = n(674378),
    rH = n(598429),
    rF = n(979604);
function rY(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: l,
            disabledVariant: r,
            hideNotLaunchable: a,
            tooltipPosition: o,
            onClick: d,
            className: c,
            source: m,
            hover: h,
            innerClassName: g,
        } = e,
        p = {
            fullWidth: n,
            size: i,
            disabledVariant: r,
            tooltipPosition: o,
            onClick: d,
            className: c,
            hover: h,
            innerClassName: g,
        },
        A = (0, u.bG)([rP.A], () => rP.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([eB.A], () => null != f && !eB.A.didFetchingSkuFail(f));
    return null != A && (0, rV.XZ)(A)
        ? (0, s.jsx)(rF.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(rH.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function rz(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, tX.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var rK = n(257727),
    rW =
        (((l = rW || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function rJ(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(rK.nM, t),
        children: [
            (0, s.jsx)(rC._, { size: "md", color: "currentColor", className: rK.Kk }),
            J.intl.string(J.t["7eicAO"]),
        ],
    });
}
function rq(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rK.nM, n),
        children: [(0, s.jsx)(tv.t, { size: "md", color: "currentColor", className: rK.Kk }), rz(t)],
    });
}
function rX(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rK.EQ, n), children: t.getDisplaySalePercentage() });
}
function rZ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rK.I8, n), children: rz(t, !1) });
}
function r$(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: rz(t) });
}
function rQ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rK.nM, n),
        children: [(0, s.jsx)(rX, { sku: t }), (0, s.jsx)(rZ, { sku: t }), (0, s.jsx)(r$, { sku: t })],
    });
}
function r0(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
}
class r1 extends r.PureComponent {
    static Types = rW;
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        if (t.premium) return 3;
        if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(r0, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(rJ, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(rq, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(rQ, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(r$, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(r0, { className: t });
            case 3:
                return (0, s.jsx)(rq, { sku: n, className: o()(rK.OB, t) });
            case 2:
                return (0, s.jsx)(rQ, { sku: n, className: o()(rK.dk, t) });
            default:
                return (0, s.jsx)(r$, { className: o()(rK.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(r0, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rK.nM,
                            children: [(0, s.jsx)(r$, { sku: i }), (0, s.jsx)(rX, { sku: i })],
                        }),
                        (0, s.jsx)(rZ, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(r$, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(rK.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rK.Pl);
            case 3:
                return this.renderGeneric(e, rK.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rK.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var r2 = n(842983);
let r3 = {
    [W.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iP.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t["0/xHFO"]),
    },
    [W.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iP.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t.E4u4n5),
    },
    [W.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iP.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t.tcawo3),
    },
};
function r6(e) {
    let { operatingSystem: t, className: n } = e,
        i = r3[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(l1.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function r5(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(r2.I, n),
        children: t.map((e) => (0, s.jsx)(r6, { operatingSystem: e, className: o()(r2.A, i) }, e)),
    });
}
var r4 = n(111758);
let r9 = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(r4.T, t),
        children: (0, s.jsx)("span", { className: r4.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var r7 = n(246337);
let r8 = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(r7.T, t),
        children: (0, s.jsx)("span", { className: r7.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var ae = n(615300),
    at = n(868285),
    an = n(358618),
    ai = n(983851),
    al = n(133296),
    as = n(607470),
    ar = n(61251);
class aa extends r.Component {
    _animatedValue = new ae.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), ae.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        ae.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
    };
    getImageStyle = () => ({ opacity: this._animatedValue });
    handleImageError = () => {
        this.setState({ imageLoadError: !0, imageLoading: !1 });
    };
    handleImageLoaded = () => {
        this.setState({ imageLoading: !1 });
    };
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, s.jsx)(ae.A.img, {
            className: o()({ [ar.YC]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: l } = this.state;
        return null == n || i
            ? (0, s.jsx)(ae.A.div, { className: o()(ar.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(ae.A.div, {
                  className: o()(l ? ar.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tz.y, {
                                className: ar.u1,
                                itemClassName: ar.$N,
                                type: tz.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ao extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new ri.Ep();
    videoPlaying = !1;
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n)
            if (t && !e.playing) {
                this.videoTimeout.stop(),
                    isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0),
                    (n.volume = 0.3);
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(400, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
    }
    handleToggleMute = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onToggleMute: t } = this.props;
        t?.(e);
    };
    handleVideoError = () => {
        this.setState({ videoLoadError: !0 });
    };
    handleVideoLoaded = () => {
        this.setState({ videoLoaded: !0 });
    };
    renderTypeVideo = () => {
        let { videoLoaded: e } = this.state,
            {
                video: t,
                image: n,
                title: i,
                playing: l,
                muted: a,
                splashClassName: d,
                splashPlaceholderClassName: c,
                renderMediaOverlay: u,
            } = this.props,
            m = a ? an._ : ai.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                iI.Fr
                    ? null
                    : (0, s.jsx)(as.A, {
                          className: o()(ar.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(at.F, {
                    children: l && e ? null : (0, s.jsx)(aa, { className: o()(ar.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eM.D, {
                    className: o()(ar.b4, { [ar.HY]: l && e, [ar.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: ar.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: i, splashClassName: l } = this.props,
            { currentIndex: r } = this.state;
        return i
            ? (0, s.jsx)(aa, { className: o()(ar.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(aa, { className: o()(ar.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(aa, { className: o()(ar.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(al.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: ar.mZ,
                  disable: !e,
                  children: (0, s.jsx)(at.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(ar.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var ad = n(366523),
    ac = n(371794),
    au = n(622413),
    am = n(174264);
class ah extends r.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: l } = this.props,
            r = (l || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, s.jsxs)("div", {
                  className: am.ED,
                  children: [
                      (0, s.jsx)(r1, {
                          type: r1.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? am.ae : am.Ek,
                      }),
                      (0, s.jsx)(r5, { systems: [W.uje.WINDOWS], className: am.iD }),
                      r ? (0, s.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: i,
            sku: l,
            isHorizontal: a,
            storeListing: d,
        } = this.props;
        return (0, rL.bF)(l)
            ? (0, s.jsx)(ad.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: am.A$,
                  backgroundImageClassName: am.iZ,
                  foregroundImageClassName: am.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(ao, {
                          className: o()(am.H1, { [am.ZC]: a }),
                          video: null != d.previewVideo ? (0, ac.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, ac.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: am.ZI,
                          splashPlaceholderClassName: am.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(r8, { className: o()(am.LJ, { [am.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(r9, { className: o()(am.LJ, { [am.V9]: e }) })
                            : null,
                  ],
              });
    };
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: i,
                renderCustomTagline: l,
                renderCustomTitle: r,
                renderCustomMedia: a,
                isEmbed: o,
            } = this.props,
            d = o ? rv.ug : au.A;
        return (0, s.jsx)(d, {
            className: i,
            renderMedia: null != a ? a : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ag = n(587895),
    ap = n(981449);
class aA extends r.Component {
    static defaultProps = { renderFallback: W.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : W.JJy.APPLICATION_EMBED, object: W.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eD.QB)(t);
    }
    handleToggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };
    handleMouseEnter = () => {
        this.setState({ playing: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ playing: !1 });
    };
    handleActionButtonClick = (e) => e.preventDefault();
    handleBuyButtonClick = (e) => e.preventDefault();
    handleLinkClick = (e) => {
        let { onEmbedClick: t } = this.props;
        null != t && t(e);
    };
    renderViewInStoreButton() {
        return (0, s.jsx)("div", {
            className: ap.h,
            children: (0, s.jsx)(eg.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, rk.pX)(W.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > rv.Tm;
        return (0, s.jsx)(ah, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: l,
            renderCustomTagline: r,
            renderCustomMedia: a,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: r } = this.props;
        if (null != r) return (0, s.jsx)("div", { className: ap.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(W.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: ap.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(rY, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ap.h,
                          source: W.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(r1, { type: r1.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > rv.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(rv.Wb, { isHorizontal: r })
            : e.productLine === W.EZt.COLLECTIBLES
              ? (0, s.jsx)(rB.A, { section: W.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, s.jsx)(rB.A, {
                    section: W.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(rw.N_, {
                        onClick: this.handleLinkClick,
                        to: W.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let ax = [eB.A, rP.A, eV.A];
function af(e) {
    let { skuId: t } = e,
        n = eB.A.get(t),
        i = null != n ? ag.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eB.A.didFetchingSkuFail(t),
        inLibrary: null != n && rP.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eV.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rP.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let aE = (0, rj.A)((0, r_.A)(aA)),
    aI = u.Ay.connectStores(ax, af)(aE),
    aC = (0, r_.A)(u.Ay.connectStores(ax, af)(aA));
var av = n(576171);
function a_(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eM.D, {
        className: av.kP,
        onClick: t,
        children: [
            (0, s.jsx)(rC._, { size: "md", color: "currentColor", className: av.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class aj extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rv.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === W.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, eC.openUserSettings)(eI.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? J.intl.string(J.t.mT9B49) : J.intl.string(J.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(eg.$, {
                  variant: "primary",
                  size: "sm",
                  text: J.intl.string(J.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(eg.$, { variant: "primary", size: "sm", text: J.intl.string(J.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? J.intl.string(J.t.QXgO5w)
            : this.props.isSelfGift
              ? J.intl.string(J.t.eEM3dq)
              : J.intl.string(J.t.tB8S6u);
    render() {
        return (0, s.jsx)(rv.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class aN extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: W.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, rk.pX)(W.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rk.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, eC.openUserSettings)(eI.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eH.default.track(W.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: W.ZSU.BUTTON_CTA },
            });
        let r = l !== W.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, ry.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eH.default.track(W.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rO.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rL.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, rR.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, eC.openUserSettings)(eI.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(W.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(sl.A, {
            justify: sl.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(sl.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(a_, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(sl.A, {
                    align: sl.A.Align.END,
                    justify: sl.A.Justify.END,
                    className: av.yu,
                    direction: sl.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(lj()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? J.t["4iHwKT"] : J.t.YeLq88;
        return J.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(eg.$, {
                    variant: "primary",
                    size: "sm",
                    text: J.intl.string(J.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tq.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t1.hU)(e) ? av.UQ : void 0,
            children: (0, s.jsx)(eg.$, {
                variant: "primary",
                size: "sm",
                text: o,
                onClick: this.handleAccept,
                disabled: a,
            }),
        });
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === W.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: tZ.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? J.intl.string(J.t["2PJ1NP"])
                    : J.intl.string(J.t.hrnGng)
                : n
                  ? J.intl.string(J.t.QLEMld)
                  : J.intl.string(J.t.W4DBcy);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: i,
            gifter: l,
            subscriptionPlan: s,
            currentUser: r,
        } = this.props;
        if (null == i) return J.intl.string(J.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rL.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t1.hU)(e) || (0, rL.bF)(i)
                ? J.intl.string(J.t.mVC3Cv)
                : J.intl.format(J.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return J.intl.format(J.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return J.intl.string(J.t.ARWFQX);
        if (!r.verified) return J.intl.format(J.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? J.intl.string(J.t["lQI+cB"])
                : J.intl.formatToPlainString(J.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return J.intl.string(J.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? J.intl.format(J.t.l3VxgG, { username: tZ.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: tZ.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nh.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: tZ.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nh.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: tZ.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nh.Wx.includes(e.giftStyle),
            i = o()(av.gB, { [av.El]: n, [av.by]: t >= rv.Tm }),
            l = o()({ [av.gc]: n, [av.Ei]: n && t >= rv.Tm, [av.ww]: !n, [av.wy]: !n && t >= rv.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(rD, { className: av.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(rS.A, {
                        defaultAnimationState: e.redeemed ? rT.oA.LOOP : rT.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(eg.$, {
            variant: "primary",
            size: "sm",
            text: J.intl.string(J.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rL.bF)(n);
        return (0, s.jsx)(aC, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: W.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: i ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, resolveErrorCode: n, width: i, isSelfGift: l } = this.props;
        if (null != e && null != e.promotion)
            return (0, s.jsx)(aC, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: W.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(aj, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(rv.Wb, { isHorizontal: i >= rv.Tm });
        return (0, t1.hU)(e)
            ? (0, s.jsx)("div", { className: av.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let aT = (0, rj.A)((0, r_.A)(aN)),
    ay = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([rM.A], () => {
                let e = rM.A.getError(t);
                return { giftCode: rM.A.get(t), resolved: rM.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eB.A], () => (null != i ? eB.A.get(i.skuId) : null)),
            d = (0, u.bG)([rP.A], () =>
                null != o && i?.entitlementBranches != null ? rU.YI(i.entitlementBranches, o, rP.A) : null,
            ),
            c = (0, rN.h)(o?.applicationId),
            m = null != o && (0, rL.bF)(o) && i?.redeemed === !0,
            [h] = (0, rb.L)(m ? c?.id : null),
            g = (0, rG.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([P.default], () => (null != i ? P.default.getId() === i.userId : P.default.getId() === n.id));
        return (0, s.jsx)(aT, {
            ...e,
            skuApplication: c,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: l,
            resolveErrorCode: r,
            gifter: a,
            libraryApplication: d,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: p,
        });
    };
var aS = n(376728),
    ab = n(107123),
    ak = n(698441),
    aL = n(427080),
    aR = n(346542),
    aM = n(665066),
    aP = n(95701),
    aD = n(299091),
    aO = n(860689);
let aU = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aG(e) {
    let { guildId: t, location: n } = e;
    return aU.getCurrentConfig({ guildId: t, location: n });
}
function aw() {
    return (0, s.jsxs)(iv.A, {
        children: [
            (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, s.jsx)(iv.A.Body, { resolving: !0 }),
        ],
    });
}
var aB = n(172799),
    aV = n(718223);
function aH(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: aV.MY,
                        children: [
                            (0, s.jsx)("i", { className: aV.QD }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aV.U9,
                                color: i,
                                children: J.intl.format(J.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: aV.MY,
                        children: [
                            (0, s.jsx)("i", { className: aV.o6 }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aV.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: aV.rc, children: l })
    );
}
function aF(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, n1.Ay)(t);
    if (null != t && null != n) {
        let e = (0, nY.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(aV.Ix, { [aV.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: aV.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(se.A, {
                    children: (0, s.jsx)(p.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: J.intl.format(J.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(aV.Ix, { [aV.v6]: i }),
              children: (0, s.jsx)(se.A, {
                  children: (0, s.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aY(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a } = e,
        { approximate_member_count: o, approximate_presence_count: d, target_type: c, target_application: m } = i;
    ej()(c === aB.yV.EMBEDDED_APPLICATION && null != m, "invalid application invite");
    let h = r.useCallback(() => {
            eH.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: m.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, m.id]),
        g = (0, u.bG)([nS.A], () => (null != i.guild ? nS.A.getGuild(i.guild.id) : null), [i]),
        p = (0, rN.A)([m.id])[0],
        A = (0, u.bG)(
            [ec.Ay],
            () => i?.channel != null && ec.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === m.id,
        ),
        E = (0, u.bG)([ec.Ay], () =>
            (i.channel?.id != null ? ec.Ay.getEmbeddedActivitiesForChannel(i.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return m.id === t;
            }),
        ),
        I = D.A.getChannel(i.channel?.id),
        C = (0, u.bG)([to.A], () => null != I && to.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, I), [I]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.INVITE_EMBED),
        _ = (0, u.yK)(
            [ec.Ay],
            () =>
                null != I
                    ? ec.Ay.getEmbeddedActivitiesForChannel(I.id)
                          .filter((e) => e.applicationId === m.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [I, m.id],
        ),
        j = (0, u.yK)([G.default], () => _.map((e) => G.default.getUser(e)).filter((e) => null != e), [_]),
        N = r.useCallback(() => {
            (0, aS.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, iV._U)(i.code, l.id),
                },
                v,
            ),
                aS.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, a]),
        T = i.state === W.elq.ACCEPTING,
        y = null != g;
    if (null == g) {
        if (null == i.guild) return (0, s.jsx)(aw, {});
        g = (0, aO.DY)(i.guild);
    }
    t = y
        ? A
            ? J.intl.string(J.t.DPfdsq)
            : E
              ? J.intl.string(J.t.sqe0hj)
              : J.intl.string(J.t.RscU7I)
        : J.intl.string(J.t["2BP08E"]);
    let S = (y && !C) || (y && A);
    return (C || (n = J.intl.string(J.t.hHGrWz)), null == i.code || "" === i.code || null == p)
        ? null
        : (0, s.jsx)(f.f5, {
              value: v,
              children: (0, s.jsx)(az, {
                  app: p,
                  activityUsers: j,
                  isMember: y,
                  channel: I,
                  guild: g,
                  message: l,
                  members: o,
                  membersOnline: d,
                  isActivityActive: E,
                  submitting: T,
                  buttonLabel: t,
                  disabled: S,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: h,
              }),
          });
}
function az(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: l,
            guild: a,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: m,
            buttonLabel: h,
            disabled: g,
            disabledReason: p,
            handleAcceptInvite: A,
            onView: x,
        } = e,
        { bot: f, icon: E } = t,
        I = w.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        C = (0, ee.F)(t),
        v = (0, Q.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? Z.kY.PLAY : Z.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, s.jsx)(H.h, {
        header: t.name,
        title: J.intl.string(J.t["7vb6nw"]),
        iconSrc: I,
        ...v,
        onClickBanner: C,
        info: (0, s.jsxs)("div", {
            className: aV.QR,
            children: [
                (0, s.jsx)(aF, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(X, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(aH, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: et.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var aK = n(4274);
function aW(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([P.default], () => P.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        l = (0, aK.g)(n?.code);
    return (0, s.jsxs)(iv.A, {
        children: [
            (0, s.jsx)(iv.A.Header, { text: i }),
            (0, s.jsxs)(iv.A.Body, {
                children: [
                    (0, s.jsx)(iv.A.Icon, { expired: !0 }),
                    (0, s.jsx)(iv.A.Info, {
                        expired: !0,
                        title: l?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var aJ = n(308528),
    aq = n(889227);
function aX(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([P.default], () => P.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === W.elq.ACCEPTING,
        { analyticsLocations: d } = (0, f.Ay)(x.A.INVITE_EMBED),
        c = (0, u.bG)([O.A], () => null != t.inviter && O.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), aJ.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aS.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iV._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, aS.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, iV._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aS.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = J.intl.string(J.t.ib7Ng1),
        A = "active";
    c
        ? ((p = J.intl.string(J.t.xhxnPn)), (A = "secondary"))
        : a && ((p = J.intl.string(J.t.ib7Ng1)), (A = "secondary"));
    let E = a ? J.intl.string(J.t.eQyu1F) : J.intl.string(J.t.PYJHW6),
        I = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? tZ.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(iv.A, {
        children: [
            (0, s.jsx)(iv.A.Header, { text: E }),
            (0, s.jsxs)(iv.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iw.iH,
                        children: [
                            (0, s.jsx)(iv.A.Icon, { user: new aq.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(iv.A.Info, { title: I, onClick: c ? g : void 0, children: C }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var aZ = n(342952);
let a$ = (0, n(945810).mj)({
    name: "2026-06-gdm-invite-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function aQ(e) {
    let { location: t } = e;
    return a$.useConfig({ location: t });
}
function a0(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === W.elq.ACCEPTING,
        c = (0, u.bG)([D.A], () => (null != t.channel ? D.A.getChannel(t.channel.id) : null), [t]);
    ej()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        { enabled: h } = aQ({ location: "GroupDMInvite" }),
        g = null != c,
        A = r.useRef(null),
        E = r.useCallback(() => {
            let e = "noop";
            g ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iV._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, g, l, a]),
        I = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, aP.OY)(e.channel),
                    i = (0, n1.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = G.default.getUser(t);
                        return null != n && e.push(n), e;
                    }, []) ?? [];
                let e = (0, n1.Bi)(t),
                    i = G.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, c ?? null);
    if (null == I) return (0, s.jsx)(aw, {});
    let {
            bodyTitle: C,
            headerText: v,
            buttonText: _,
            buttonVariant: j,
        } = h
            ? (function (e, t, n) {
                  let i,
                      { recipients: l, customGroupName: s } = e,
                      r =
                          null != s
                              ? s
                              : 0 ===
                                  (i = l
                                      .map((e) => {
                                          let t = O.A.getNickname(e.id);
                                          if (null != t && "" !== t) return t;
                                          let n = e instanceof aq.A ? e : G.default.getUser(e.id);
                                          if (null != n) {
                                              let e = tZ.Ay.getName(n);
                                              if (null != e) return e;
                                          }
                                          return e.username;
                                      })
                                      .filter((e) => "" !== e)).length
                                ? J.intl.string(J.t.LJpTRF)
                                : 1 === i.length
                                  ? i[0]
                                  : 2 === i.length
                                    ? J.intl.formatToPlainString(J.t.gwRP0Y, { first: i[0], second: i[1] })
                                    : 3 === i.length
                                      ? J.intl.formatToPlainString(J.t["/KSOKY"], {
                                            first: i[0],
                                            second: i[1],
                                            third: i[2],
                                        })
                                      : J.intl.formatToPlainString(J.t.m5uYso, { first: i[0], second: i[1] }),
                      a = J.intl.string(J.t.gVDdRn),
                      o = "active";
                  return (
                      n && ((a = J.intl.string(J.t.cEnaWx)), (o = "secondary")),
                      {
                          bodyTitle: r,
                          headerText: t ? J.intl.string(J.t.Fyamu8) : J.intl.string(J.t["2tr5Qz"]),
                          buttonText: a,
                          buttonVariant: o,
                      }
                  );
              })(I, o, g)
            : (function (e, t, n) {
                  let i,
                      { channel: l, recipients: s, customGroupName: r } = e;
                  null != r
                      ? (i = r)
                      : (null == (i = (0, n1.m1)(l, G.default, O.A)) || "" === i) &&
                        (i =
                            s.length > 0
                                ? s
                                      .filter(rh.Vq)
                                      .map((e) => e.username)
                                      .join(", ")
                                : J.intl.string(J.t.LJpTRF));
                  let a = J.intl.string(J.t.XpeFYr),
                      o = "active";
                  n && ((a = J.intl.string(J.t.cEnaWx)), (o = "secondary"));
                  let d = J.intl.string(J.t["3p3/BK"]);
                  return (
                      t && (d = J.intl.string(J.t.qmtuXE)),
                      { bodyTitle: i, headerText: d, buttonText: a, buttonVariant: o }
                  );
              })(I, o, g),
        { channel: N, recipients: T } = I,
        y = h
            ? T.map((e) =>
                  e instanceof aq.A
                      ? e
                      : (G.default.getUser(e.id) ??
                        new aq.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
              )
            : [],
        S = null != N.icon,
        b = J.intl.format(J.t.zRl6XR, { count: T.length });
    return (0, s.jsxs)(iv.A, {
        className: h ? iw.TV : void 0,
        children: [
            h
                ? (0, s.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: iw.JO,
                      lineClamp: 1,
                      children: v,
                  })
                : (0, s.jsx)(iv.A.Header, { text: v }),
            (0, s.jsxs)(iv.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: h ? `${iw.iH} ${iw.mx}` : iw.iH,
                        children: [
                            (!h || S) &&
                                (0, s.jsx)(iv.A.Icon, {
                                    channel: N,
                                    onClick: g ? E : void 0,
                                    channelIconSize: h ? tj._3.SIZE_48 : void 0,
                                }),
                            (0, s.jsx)(iv.A.Info, {
                                title: h ? (0, s.jsx)(se.A, { children: C }) : C,
                                onClick: g ? E : void 0,
                                titleVariant: h ? "heading-md/medium" : void 0,
                                detailVariant: h ? "text-sm/medium" : void 0,
                                children: h
                                    ? (0, s.jsx)("div", {
                                          className: iw.er,
                                          children:
                                              y.length > 0
                                                  ? (0, s.jsx)(eM.D, {
                                                        className: iw.N_,
                                                        onClick: (e) => {
                                                            A.current?.openUserList(e.currentTarget);
                                                        },
                                                        children: b,
                                                    })
                                                  : b,
                                      })
                                    : (0, s.jsx)(iv.A.Data, { members: T.length }),
                            }),
                            h &&
                                y.length > 0 &&
                                (0, s.jsx)(aZ.A, {
                                    ref: A,
                                    className: iw.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tj._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: iw.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: E, loading: d, disabled: g, variant: j, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var a1 = n(821418),
    a2 = n(340837);
let a3 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, a2.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, a1.Q.IS_GUEST_INVITE)
    );
};
var a6 = n(517905);
function a5(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: a,
            onAcceptInstantInvite: o,
            guild: d,
            invite: m,
            message: h,
            currentUserId: g,
        } = e,
        A = g === h.author.id,
        { channel: E, approximate_member_count: I, approximate_presence_count: C } = m,
        v = m.state === W.elq.ACCEPTING,
        _ = null != E ? (0, aP.OY)(E) : null,
        j = null != d,
        N = null != _,
        T = null != _ && _.isGuildStageVoice(),
        y = (0, c.Lt)(m.flags ?? 0, a1.Q.IS_GUEST_INVITE),
        S = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(W.GuildFeatures.HUB) ?? !1,
        k = d?.id,
        { analyticsLocations: L } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, iV._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [R, M] = r.useState(!1),
        P = r.useCallback(() => M(!1), []),
        D = r.useRef(null),
        O = (0, u.bG)([i8.Ay], () => a3([i8.Ay], m)),
        U = r.useCallback(() => {
            M(!0), (0, aS.Pq)(k, "show profile", L);
        }, [k, L]),
        G = r.useCallback(() => {
            let e = "noop";
            j ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, iV._U)(m.code, h.id),
                    },
                    L,
                );
        }, [m, h, L, j, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(aw, {});
        (d = aO.DY(m.guild)).premiumTier = m.guild.premium_tier ?? W.TVA.NONE;
    }
    let w = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return J.intl.string(J.t.N85DCl);
                else if (s) return J.intl.string(J.t.TJQcNv);
                else if (l) return J.intl.string(J.t.mJyBir);
                else return J.intl.string(J.t.lxTgP9);
            else if (r) return J.intl.string(J.t.Mnvc3C);
            else if (s) return J.intl.string(J.t.FdPNr5);
            else if (l) return J.intl.string(J.t.f4gmrf);
            else return J.intl.string(J.t.H39rEY);
        return n
            ? i
                ? J.intl.string(J.t.UxmnHx)
                : J.intl.string(J.t.sigPEf)
            : i
              ? J.intl.string(J.t["oU/lsl"])
              : J.intl.string(J.t.BoQUFf);
    })({ isVoiceChannel: S, isOwnInvite: A, isGuest: y, isHubGuild: b, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: iw.FA,
            children: [
                (0, s.jsx)(a6.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: R,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, s.jsx)(iv.A.GuildName, { guild: d, ref: D }),
                }),
                (0, s.jsx)("span", {
                    className: iw.E3,
                    children: (0, s.jsx)(s3.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (l = (0, s.jsx)(l1.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, s.jsx)(nU.m, { size: "md", color: "currentColor", className: iw.G }),
            })),
        S
            ? ((i = (0, s.jsx)(iv.A.Channel, { channel: _ })),
              (t = (0, s.jsxs)("span", {
                  className: iw.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: iw.E3,
                          children: (0, s.jsx)(s3.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != I && I >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(iv.A.Data, { members: I, membersOnline: C }))
              : N && (t = (0, s.jsx)(iv.A.Channel, { channel: _, guild: d })),
        (0, s.jsxs)(iv.A, {
            children: [
                (0, s.jsx)(iv.A.GuildSplash, { guild: d }),
                (0, s.jsx)(iv.A.Header, { text: w, extra: l }),
                (0, s.jsxs)(iv.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: iw.iH,
                            children: [
                                (0, s.jsx)(iv.A.Icon, { guild: d }),
                                (0, s.jsx)(iv.A.Info, { title: i, onClick: U, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: iw.UD,
                            children: (0, s.jsx)(eg.$, {
                                onClick: G,
                                loading: v,
                                variant: "active",
                                fullWidth: S,
                                disabled: !O,
                                text: S
                                    ? T
                                        ? J.intl.string(J.t["7vb2cc"])
                                        : J.intl.string(J.t.gpqgah)
                                    : j
                                      ? J.intl.string(J.t.cEnaWx)
                                      : J.intl.string(J.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(W.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: iw.me }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eN.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("7206"),
                                                n.e("97804"),
                                                n.e("7265"),
                                                n.e("97641"),
                                                n.e("90496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var a4 = n(890856),
    a9 = n(9994),
    a7 = n(461888),
    a8 = n(422253),
    oe = n(123213),
    ot = n(86376),
    on = n(42780),
    oi = n(897288),
    ol = n(14712);
function os(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        [c, m] = r.useState(!0),
        [h, g] = r.useState(!1),
        p = t.state === W.elq.ACCEPTING,
        A = (0, u.bG)([rr.Ay], () => rr.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, iV._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let I = (0, a9.oO)(t),
        C = r.useCallback(() => {
            !h || (c && m(!1));
        }, [c, h]),
        v = r.useCallback(() => {
            !h || c || m(!0);
        }, [c, h]),
        _ = r.useMemo(
            () =>
                h && d.current?.clientHeight != null
                    ? {
                          height: c ? 292 : d.current.clientHeight + 36 + 48,
                          transition: A ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [c, h, A],
        );
    return null == I
        ? (0, s.jsx)(aw, {})
        : (0, s.jsxs)(a4.s, {
              className: o()(ol.Gg, { [ol.vk]: h && c }),
              onClick: C,
              style: _,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: [
                  (0, s.jsxs)("div", {
                      className: ol.uY,
                      ref: d,
                      children: [
                          (0, s.jsx)(on.J$, { profile: I, className: ol.vK }),
                          (0, s.jsx)(on.CG, { profile: I }),
                          (0, s.jsx)(ot.A, { profile: I }),
                          (0, s.jsx)(a8.P, { profile: I, className: ol.rb }),
                          (0, s.jsx)(oi.A, {
                              guild: null != t.guild ? (0, aO.DY)(t.guild) : null,
                              roles: t.roles,
                              className: ol.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, s.jsx)("div", {
                            className: ol.Se,
                            children: (0, s.jsx)(lB.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: J.intl.string(J.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, s.jsxs)("div", {
                      className: o()(ol.qr, { [ol.iK]: h }),
                      children: [
                          h && c ? (0, s.jsx)("div", { className: ol.D7 }) : null,
                          (0, s.jsx)("div", {
                              className: o()(ol.z8, { [ol.it]: h && c }),
                              children: (0, s.jsx)("div", {
                                  className: ol.UD,
                                  children: (0, s.jsx)(or, {
                                      invite: t,
                                      profile: I,
                                      isMemberOfGuild: n,
                                      message: i,
                                      submitting: p,
                                      onTransitionToInviteChannel: l,
                                      onAcceptInstantInvite: a,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function or(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, a7.Ay)(n, a7.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aS.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, iV._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(oe.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var oa = n(414798);
function oo(e) {
    let t,
        n,
        i,
        { author: l, banned: r, channelId: a, onMention: o } = e,
        d = (0, u.bG)([P.default], () => P.default.getId()),
        c = tZ.Ay.useName(l),
        m = d === l.id,
        { enabled: h } = aQ({ location: "InvalidInvite" }),
        g = (0, u.bG)([D.A, to.A], () => {
            let e = D.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sN.UJ)(e),
                    n = to.A.can(W.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return to.A.can(W.xBc.SEND_MESSAGES, e);
        });
    return (
        m
            ? ((i = h ? J.intl.string(J.t.HfUzlI) : J.intl.string(J.t.C89OLE)),
              (t = h ? J.intl.string(J.t.y7uT5j) : J.intl.string(J.t["F/OLvL"])))
            : r
              ? ((i = h ? J.intl.string(J.t.OMfs8i) : J.intl.string(J.t.YVub5y)), (t = J.intl.string(J.t["57nBty"])))
              : ((i = h ? J.intl.string(J.t.OMfs8i) : J.intl.string(J.t.YVub5y)),
                (t = h
                    ? J.intl.string(J.t["p/zTYn"])
                    : null != c && g
                      ? J.intl.formatToPlainString(J.t["9Akp1s"], { username: c })
                      : J.intl.string(J.t["SMJr+a"])),
                (n =
                    null != c && g && !h
                        ? (0, s.jsx)(eg.$, {
                              onClick: function () {
                                  o?.();
                                  let { id: e } = l,
                                      t = `@${tZ.Ay.getUserTag(l, { decoration: "never" })}`,
                                      n = `<@${e}>`;
                                  sm._.dispatchToLastSubscribed(W.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                      null != a && oa.A.startTyping(a);
                              },
                              text: J.intl.string(J.t.P8tvKG),
                          })
                        : void 0)),
        (0, s.jsxs)(iv.A, {
            className: h ? iw.TV : void 0,
            children: [
                h
                    ? (0, s.jsx)(p.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: iw.JO,
                          lineClamp: 1,
                          children: i,
                      })
                    : (0, s.jsx)(iv.A.Header, { text: i }),
                (0, s.jsxs)(iv.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: iw.iH,
                            children: [
                                (0, s.jsx)(iv.A.Icon, { expired: !0 }),
                                (0, s.jsx)(iv.A.Info, {
                                    expired: !0,
                                    title: J.intl.string(J.t["Jhx/ud"]),
                                    titleVariant: h ? "heading-md/medium" : void 0,
                                    children: t,
                                }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
var od = n(616356);
function oc(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: l,
            message: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        c = l?.id,
        m = (0, u.bG)([U.A], () => U.A.getGuildId()),
        h = (0, u.bG)(
            [od.A],
            () => (null != n && null != n.target_user ? od.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [od.A],
            () => (null != n && null != n.target_user ? od.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, iV._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aB.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ej()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    ej()(I === aB.yV.STREAM && null != C, "invalid streaming invite");
    let v = i === C.id,
        _ = n.state === W.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, iV._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(aw, {});
        l = (0, aO.DY)(n.guild);
    }
    let T = null != n.channel ? (0, aP.OY)(n.channel) : null,
        y = tZ.Ay.getName(C),
        S = A || (!E && N),
        b = J.intl.string(J.t.I6JG46),
        k = "active";
    N && !E
        ? ((t = v ? J.intl.string(J.t.oBLoZJ) : J.intl.formatToPlainString(J.t["0QJmA+"], { name: y })),
          (b = J.intl.string(J.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = J.intl.string(J.t.Q1W99y)), (k = "secondary")),
          (t = v ? J.intl.string(J.t["4hyaHu"]) : J.intl.formatToPlainString(J.t.QmlLEq, { name: y })));
    let L =
        m === l.id && null != T
            ? (0, s.jsx)(iv.A.Channel, { channel: T })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(iv.A, {
        children: [
            (0, s.jsx)(iv.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, s.jsxs)(iv.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iw.iH,
                        children: [
                            (0, s.jsx)(iv.A.Icon, { guild: l, onClick: N && E ? j : void 0 }),
                            (0, s.jsx)(iv.A.Info, { title: t, onClick: N && E ? j : void 0, children: L }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var ou = n(459192),
    om = n(364522),
    oh = n(952270),
    og = n(52074),
    op = n(725613),
    oA = n(693879),
    ox = n(145497),
    of = n(481947),
    oE = n(977997),
    oI = n(607567),
    oC = n(198183);
function ov(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, n1.Ay)(i),
        o = (0, u.bG)([nS.A], () => nS.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([oE.A], () => oE.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [oI.Ay],
            () => ({ voiceStates: null != i.guild_id ? oI.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([op.A], () => op.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || op.A.hasRequestedStartTimes(i.guild_id) || (0, og.U)(i.guild_id);
    }, [i, h]);
    let g = r.useRef(null),
        A = r.useRef(null),
        E = r.useCallback(() => {
            let e = g.current,
                t = A.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    r.useLayoutEffect(() => {
        E();
    }, [m, E]);
    let I = r.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", E),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", E);
            },
            [E],
        ),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED, x.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        v = (0, iV._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, te.A)({
        name: e8.ImpressionNames.VOICE_INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: v,
            has_active_stream: _,
            location_stack: C,
        },
    });
    let j = r.useCallback(() => {
            (0, lI.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            l(),
                (0, aS.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: v,
                        number_of_users_in_channel: c.length,
                    },
                    C,
                );
        }, [t, n, C, v, c.length, l]);
    return (0, s.jsxs)("div", {
        className: oC.kL,
        children: [
            (0, s.jsxs)("div", {
                className: oC.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: oC.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: oC.yW,
                                children: [
                                    (0, s.jsx)(ai.H, {
                                        className: oC.p,
                                        color:
                                            c.length > 0 ? nC.A.colors.TEXT_FEEDBACK_POSITIVE : nC.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(ou.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(ox.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eM.D, {
                                            className: oC.HA,
                                            onClick: j,
                                            children: (0, s.jsx)(p.E, {
                                                variant: "text-md/normal",
                                                color: d ? "text-default" : "text-muted",
                                                lineClamp: 1,
                                                children: a,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            null != h
                                ? (0, s.jsx)(oA.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: oC.Ao,
                              children: [
                                  (0, s.jsx)(om.Ip, {
                                      ref: I,
                                      className: oC.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              of.Ay,
                                              {
                                                  className: oC.Eq,
                                                  user: e.user,
                                                  guildId: i.guild_id ?? void 0,
                                                  channelId: i.id,
                                                  nick: e.nick,
                                                  isStreaming: e.voiceState.selfStream,
                                              },
                                              e.user.id,
                                          ),
                                      ),
                                  }),
                                  (0, s.jsx)("div", { ref: A, className: oC.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: oC.p$,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: oC.TB,
                        children: (0, s.jsx)(eg.$, {
                            onClick: N,
                            icon: ai.H,
                            variant: "active",
                            fullWidth: !0,
                            text: J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: oC.qr,
                children: [
                    (0, s.jsx)(oh.G, { size: "custom", color: "currentColor", className: oC.Dq }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: J.intl.string(J.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function o_(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)([D.A, to.A], () => {
            let e = D.A.getChannel(r);
            return null != e && to.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, u.bG)([nS.A], () => null != nS.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(os, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(ov, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var oj = n(652896),
    oN = n(834757),
    oT = n(427358),
    oy = n(370714);
function oS(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, nY.gU)(n, i),
        a = (0, n1.Ay)(n);
    return (0, s.jsxs)(eM.D, {
        onClick: l,
        className: o()(oy.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: oy.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(se.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(nF._, { className: oy.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var ob = n(308186),
    ok = n(717421),
    oL = n(562153),
    oR = n(713517),
    oM = n(297413),
    oP = n(155775);
function oD(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(i7.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eM.D, {
                ...r,
                innerRef: a,
                className: oP.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(t_.eu, {
                        src: t.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_24)),
                        className: oP.my,
                        "aria-label": t.username,
                        size: tj._3.SIZE_24,
                    }),
                    (0, s.jsx)(p.E, {
                        className: oP.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(oM.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var oO = n(581448);
function oU(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(oG, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(l6.Y, { renderPopout: () => o(i), ...a });
}
function oG(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, oR.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: oO.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(om.Ip, {
                className: oO.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        oD,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: oL.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var ow = n(531657);
let oB = { mass: 1, tension: 170, friction: 26 };
function oV(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, ok.z)(() => ({ x: 0, y: 0, scale: 1, config: oB }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(ob.animated.div, {
            ref: a,
            className: o()(ow.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, ob.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: ow.my,
                            children: (0, s.jsx)(l1.m, {
                                text: oL.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(t_.eu, {
                                    src: (function (e, t, n) {
                                        let i = i8.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, w.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tj._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tj._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tj._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tj._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tj._3.SIZE_48
                                                    : h > 2
                                                      ? tj._3.SIZE_40
                                                      : tj._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, s.jsx)(oH, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function oH(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, oR.A)(e),
                [n, i] = r.useState(!1),
                l = t || n,
                [s, a] = r.useState(!1),
                o = r.useRef(null);
            return (
                r.useEffect(
                    () => (l || (o.current = setTimeout(() => a(!1), 300)), () => clearTimeout(o.current)),
                    [l],
                ),
                l && !s && a(!0),
                { triggerRef: e, shouldShow: l || s, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, s.jsx)(oU, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(ow.my, ow.k2),
                ref: a,
                ...e,
                children: (0, s.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var oF = n(692236);
function oY(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = aO.DY(t.guild));
    let m = null != t.channel ? (0, aP.OY)(t.channel) : null;
    ej()(null != c, "Voice Invite Embed must be used in context of a guild."),
        ej()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, u.bG)([to.A, D.A], () => {
            let e = D.A.getChannel(m.id);
            return null == e || to.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, u.bG)([oI.Ay], () => (h ? oI.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: A, sublabel: E } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? J.intl.string(J.t.DVDvCD) : J.intl.string(J.t.TY77rq),
                    sublabel: J.intl.string(J.t.wM2WTM),
                };
            let o = r ? J.t["2RWMFV"] : J.t.IWXzHV,
                d = r ? J.t.Da7tZx : J.t["3VbQvv"];
            return { label: l ? J.intl.format(o, { othersCount: a }) : J.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([P.default], () => P.default.getId()), author: n.author, voiceStates: g }),
        I = (0, u.bG)([nS.A], () => null != nS.A.getGuild(c.id), [c.id]),
        C = (0, u.bG)([ed.A], () => ed.A.getVoiceChannelId() === m.id, [m.id]),
        v = (0, u.bG)([i8.Ay], () => a3([i8.Ay], t), [t]),
        _ = t.state === W.elq.ACCEPTING,
        { analyticsLocations: j } = (0, f.Ay)(x.A.INVITE_EMBED),
        N = (0, iV._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)([od.A, oT.A], () => {
                if ((0, aR.G4)(t) && null != t.target_user) {
                    let e = od.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = od.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = oT.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (oT.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = od.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        y = (0, oN.AO)(T),
        S = null != T,
        b = r.useCallback(() => {
            let e = I ? "transition" : "accept";
            I ? l() : a(),
                (0, aS.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, oj._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, I, y, T, g.length, l, a]),
        k = r.useCallback(() => {
            I ? (0, lI.iN)(m.id) : a({ autoJoin: !1 }),
                eH.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: I,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, oj._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, c.id, t.code, N, I, y, T, g.length, j, a]);
    (0, te.A)({
        name: e8.ImpressionNames.VOICE_INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let L = (0, u.bG)([rr.Ay], () => rr.Ay.useReducedMotion),
        R = r.useRef(null),
        [M, O] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)([oT.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = oT.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (oT.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = r.useMemo(() => tI().throttle(O, 20), [O]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
            (e) => {
                if (L) return;
                let t = R.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = d.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        r = e.clientX - n,
                        a = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(r * r + a * a) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                G({ percentX: n, percentY: i, proximity: l });
            },
            [L, G],
        ),
        B = r.useCallback(() => {
            G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, s.jsxs)("div", {
        className: oF.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: R,
                className: oF.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: oF.ys }),
                    (0, s.jsx)("div", { className: oF.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: oF.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(oF.Qs, { [oF.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(oS, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: oF.WD,
                                        children: [
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(se.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != E
                                                ? (0, s.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: oF.$B,
                                                      children: (0, s.jsx)(se.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: oF.RE,
                                      children: (0, s.jsx)(oV, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: M,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: oF.xk,
                        children: (0, s.jsx)(eg.$, {
                            onClick: b,
                            loading: _,
                            variant: C ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !v,
                            text: C ? J.intl.string(J.t["3xjX0U"]) : J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: oF.qr,
                children: [
                    (0, s.jsx)(oh.G, { size: "custom", color: "currentColor", className: oF.Dq }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: J.intl.string(J.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function oz(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [aD.A],
            () => ({ invite: aD.A.getInvite(t), inviteError: aD.A.getInviteError(t) }),
            [t],
        ),
        o = (0, iV._U)(t, n.id);
    r.useEffect(() => {
        null == l && aS.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, f.Ay)(),
        m = (0, u.bG)([nS.A], () => (l?.guild != null ? nS.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)([D.A, to.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = D.A.getChannel(e);
            return null != t && to.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
        }, [l]),
        g = (0, u.bG)([P.default], () => P.default.getId()),
        p = (0, u.bG)([ak.Ay], () => ak.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && aS.Ay.transitionToInviteSync(d);
    }
    let x = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == m && l?.guild != null ? aO.DY(l.guild) : m;
            (0, aM.g)({ guild: n, isMember: null != m, analyticsLocations: c }) === aM.W.PROCEED &&
                aS.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        E = (0, s.jsx)(a5, {
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: x,
            currentUserId: g,
            guild: m,
            invite: d,
            message: n,
        });
    switch (d.state) {
        case W.elq.RESOLVING:
            E = (0, s.jsx)(aw, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            E = (0, s.jsx)(oo, {
                banned: d.state === W.elq.BANNED,
                author: n.author,
                channelId: n.channel_id,
                onMention: () =>
                    (0, aS.he)(
                        {
                            invite: d,
                            action: "mention",
                            inviter_id: n.author.id,
                            invite_message_id: n.id,
                            invite_instance_id: o,
                        },
                        c,
                    ),
            });
            break;
        case W.elq.ERROR:
            E = (0, s.jsx)(aW, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, aR.On)(d)) {
                case aR.Xd.GROUP_DM:
                    E = (0, s.jsx)(a0, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case aR.Xd.FRIEND:
                    E = (0, s.jsx)(aX, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, aR.G4)(d)) {
                        if (null != d.channel && (0, aP.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = aG({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    E = (0, s.jsx)(o_, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    E = (0, s.jsx)(oY, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        E = (0, s.jsx)(oc, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, aR.ly)(d)) {
                        E = (0, s.jsx)(aL.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, aR.oK)(d)) {
                        E = (0, s.jsx)(aY, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, aP.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = aG({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                E = (0, s.jsx)(o_, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                E = (0, s.jsx)(oY, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, ab.v)(d) &&
                        (E = (0, s.jsx)(os, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(rB.A, { section: W.JJy.INVITE_LINK, children: E });
}
var oK = n(266620),
    oW = n(860227),
    oJ = n(568006),
    oq = n(666176),
    oX = n(272984);
let oZ = function (e) {
    let { channel: t, message: n, hideParty: i, hideInviteEmbedBanner: l } = e,
        { analyticsLocations: r } = (0, f.Ay)(x.A.INVITE_EMBED),
        a =
            null != n.application
                ? i_.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, oX.pH)(n.activity.party_id)
                  ? oq.HT
                  : void 0,
        { data: o } = (0, e1.YY)(n.application?.id),
        d = o ?? a,
        c = (0, u.bG)([G.default], () => G.default.getCurrentUser()?.nsfwAllowed),
        m = e5(n.application?.content_classification, c, t);
    switch (m) {
        case e6.DISPLAY:
            if (null == d) return null;
            return (0, s.jsx)(oJ.P0, {
                app: d,
                channel: t,
                message: n,
                hideParty: i,
                hideBanner: l,
                analyticsLocations: r,
            });
        case e6.BLOCK_UNDERAGE:
        case e6.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e9, { visibility: m, variant: "game_invite" });
        default:
            return null;
    }
};
var o$ = n(503002),
    oQ = n(123791);
function o0(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, e1.YY)(t);
    return null == i ? null : (0, s.jsx)(o1, { app: i, guildId: n });
}
function o1(e) {
    let { app: t, guildId: i } = e;
    (0, oQ.C)(t.id);
    let l = r.useCallback(() => {
        (0, eN.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(eg.$, {
        size: "sm",
        onClick: l,
        icon: o$.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var o2 = n(394839),
    o3 = n(96782),
    o6 = n(930390),
    o5 = n(861986),
    o4 = n(87221),
    o9 = n(411472);
function o7(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: o9.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: o9.Yf,
                        children: [
                            (0, s.jsx)(o4.D, { size: "lg", color: nC.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: J.intl.string(J.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: o9.Fj,
                children: [
                    (0, s.jsx)(nU.m, { size: "sm", color: nC.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: J.intl.string(J.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var o8 = n(343552),
    de = n(581619),
    dt = n(416620);
let dn = [W.Auw.GIFV],
    di = 15 * nl.A.Millis.MINUTE,
    dl = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    ds = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, iJ.e5.IS_ANIMATED);
        return null != i && null != l && (iq.bp.test(n) || (a && (iq.P8.test(n) || iq.p4.test(n))))
            ? (0, s.jsx)(rI.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: dt.jj })
            : null;
    };
class dr extends r.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1, hideInviteEmbedBanner: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, iV._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && dl.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, h.A)(this.state, t) ||
            !(0, h.A)(this.props, e, ["message", "channel"]) ||
            l.type !== a.type ||
            d !== r ||
            o.codedLinks !== s.codedLinks ||
            o.flags !== s.flags ||
            o.giftCodes !== s.giftCodes ||
            o.attachments !== s.attachments ||
            o.embeds !== s.embeds ||
            o.components !== s.components ||
            o.activity !== s.activity ||
            ((n = o.reactions) !== (i = s.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: s } = e,
                            { emoji: r, count: a, burst_count: o } = i[t];
                        return s !== o || l !== a || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case sX.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(nH, { messageId: e.id, channelId: t.id });
                break;
            case sX.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(ef, { channelId: t.id });
                break;
            case sX.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(ev, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: dt.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: r } = n;
            if ((0, tU.Yf)(i)) {
                let n = (0, tU.kK)(i, l, r);
                if (null == n) return null;
                let { applicationId: a } = n;
                return (0, s.jsx)(
                    e7,
                    {
                        applicationId: a,
                        channel: t,
                        children: (t) => {
                            switch (n.type) {
                                case tG.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(iy, { code: a, message: e });
                                case tG.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eh, { application: t, message: e, params: i });
                                case tG.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e$, { application: t, message: e });
                                case tG.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(eQ, { application: t, message: e, skuId: l });
                                case tG.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(tt, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    l,
                );
            }
            switch (i) {
                case tG.I.INVITE:
                    if (!this.shouldRenderInvite(l)) return null;
                    return (0, s.jsx)(
                        oz,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tG.I.TEMPLATE:
                    return (0, s.jsx)(iB, { code: l }, l);
                case tG.I.EVENT:
                    return (0, s.jsx)(iM.A, { code: l }, l);
                case tG.I.CHANNEL_LINK:
                    return (0, s.jsx)(s5, { code: l, message: e }, l);
                case tG.I.GUILD_PRODUCT:
                    return (0, s.jsx)(iR, { code: l }, l);
                case tG.I.SERVER_SHOP:
                    return (0, s.jsx)(nM, { guildId: l }, l);
                case tG.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(
                        l0.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, lQ.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        l,
                    );
                }
                case tG.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(l0.I, { applicationId: n, skuId: e, channel: t }, l);
                }
                case tG.I.QUESTS_EMBED:
                    return (0, s.jsx)(lg.A, { questId: l }, l);
                case tG.I.GAME_PROFILE:
                    return (0, s.jsx)(iA, { gameId: l }, l);
                case tG.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tB.has(i) ? i : void 0 };
                    })(l);
                    if (null == e) return null;
                    return (0, s.jsx)(nI, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tG.I.EXPERIMENT:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = G.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: dt.zv,
                          children: (0, s.jsx)(ay, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: r,
                              giftInfo: a,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: i,
            isLurking: l,
            isPendingMember: r,
            channel: a,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(o6.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: r,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || (0, sz._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, W.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, iJ.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, W.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, lc.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, W.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sZ.iW)(e.originalItem, t);
        }
        let E = m.map((s) => {
            let a = (0, iJ.aG)(s),
                o = {
                    message: e,
                    item: (0, o3.rC)(s, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), r(e, a);
                              }
                            : void 0,
                    renderAudioComponent: x ? oK.SX : oK.Nj,
                    renderImageComponent: oK.Cr,
                    renderVideoComponent: oK.I1,
                    renderPlaintextFilePreview: oK.R6,
                    renderGenericFileComponent: oK.UB,
                    onPlay: function (n, i, l) {
                        eH.default.track(W.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: s.content_type,
                            flags: s.flags,
                            size: s.size,
                            attachment_id: s.id,
                            message_id: e.id,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: ds(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sW.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, s.jsx)(o2.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: r,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, sZ.sC)(e, i, o, d);
        if (e.type === W.Auw.GIFT) return null;
        let m = dn.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            iE.G.Provider,
            {
                value: (0, o8.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, s.jsx)(tf.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !r,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: a ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: i,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== W.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? iW.A.parseEmbedTitleWithoutLinks : iW.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === W.Auw.RICH
            ? iW.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? A.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  let i;
                  if (
                      de.z.has(t.type) ||
                      (0, sJ.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, W.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === iF.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !iY.has(t.content_type);
                              })
                          )) ||
                      (0, sJ.V)(t) ||
                      (0, sJ.G8)(t) ||
                      ((0, sJ.Xk)(t) && io.A.getConfig({ location: "MessageAccessories.renderEmbeds" }).enabled)
                  )
                      return null;
                  if (t.type === W.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, sZ.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  rn,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: ds,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), a?.(t, e);
                                                },
                                      shouldHideMediaOptions: r,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, s.jsx)(
                                lG.Ay,
                                {
                                    type: lG.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: l5.LL, renderVideoComponent: l5.$o, renderLinkComponent: l5.bU };
                  if (
                      t.type === W.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sq.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  aI,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, r, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, s.jsx)(s8.N, {
            gifAutoPlay: t,
            getGifFavButton: ds,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(iz.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n } = this.props;
        return (0, s.jsx)(oZ, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== W.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tx, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, s$.ec)(e)
            ? (0, s.jsx)(rE.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lu.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(sj, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(W.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(sF, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(W.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sk.default.extractTimestamp(e.id) >= di)
        )
            return (0, s.jsx)("div", { className: dt.xM, children: J.intl.string(J.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(g.M, {
            dismissable: !0,
            header: J.intl.string(J.t.VL1KOk),
            confirmText: J.intl.string(J.t.YEHppG),
            cancelText: J.intl.string(J.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                A.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: dt.IX,
                    children: J.intl.string(J.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: J.intl.string(J.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, s.jsx)(g.M, {
                  dismissable: !0,
                  header: J.intl.string(J.t.CbTIEo),
                  confirmText: J.intl.string(J.t.kFwAsa),
                  cancelText: J.intl.string(J.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      A.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, s.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: dt.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(o0, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(rf, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== W.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(ld, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(lF, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(l$, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nD.KM)(e)
            ? (0, s.jsx)(nw, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lh.A, { message: e, poll: t, className: dt.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tD, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lp.Mn)(e, this.props.channel)) return (0, s.jsx)(lU, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lp.Mn)(e, this.props.channel))
            return (0, s.jsx)(ia, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(o5.A, { message: e, compact: t, location: o5.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, n3.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new n5(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lu.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, oW.XL)(e),
                  className: o()(this.props.className, dt.kL),
                  children: (0, s.jsx)(o7, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, oW.XL)(t), className: o()(e, dt.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let a = this.renderEditedTag(t, i),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            h = this.renderEmbeds(t),
            g = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            A = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            E = this.renderThreadAccessories(t),
            I = this.renderComponentAccessories(t),
            C = this.renderThreadRoleMentionWarning(t),
            v = this.renderEmbeddedApplicationInstanceEmbed(t),
            _ = this.renderInteractionPremiumUpsell(t),
            j = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            y = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            k = this.renderReportedMessage(t),
            L = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == h &&
            null == g &&
            null == p &&
            null == c &&
            null == A &&
            null == x &&
            null == f &&
            null == E &&
            null == I &&
            null == v &&
            null == C &&
            null == j &&
            null == N &&
            null != _ &&
            null == S &&
            null == b &&
            null == k &&
            null == L
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, oW.XL)(t),
                  className: o()(e, dt.kL),
                  children: [
                      k,
                      b,
                      C,
                      S,
                      L,
                      d,
                      c,
                      j,
                      u,
                      m,
                      h,
                      y,
                      g,
                      f,
                      I,
                      v,
                      _,
                      a,
                      p,
                      A,
                      x,
                      l && this.renderSuppressConfirmModal(),
                      r && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      N,
                      T,
                  ],
              });
    }
}
function da(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r, hideInviteEmbedBanner: a } = e,
        o = (0, u.bG)([P.default], () => P.default.getId()),
        d = nQ.X6.useSetting(),
        m = nQ.hD.useSetting(),
        h = nQ.rs.useSetting() && !(0, sb.A)(e.message),
        g = nQ.jW.useSetting() && !1 !== e.renderReactions,
        p = nQ.kt.useSetting(),
        A = (0, u.bG)([sK.A], () => null == n.guild_id || sK.A.canChatInGuild(n.guild_id), [n]),
        x = (0, u.bG)([iK.A], () => null != n.guild_id && iK.A.isLurking(n.guild_id), [n]),
        f = (0, u.bG)([i8.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? i8.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: I } = (0, u.cf)(
            [to.A],
            () => ({
                canAddNewReactions: A && to.A.can(W.xBc.ADD_REACTIONS, n),
                canManageMessages: to.A.can(W.xBc.MANAGE_MESSAGES, n),
            }),
            [A, n],
        ),
        C = (0, iS.ix)(n.guild_id),
        [, v] = (0, ib.c)(n.guild_id),
        _ = (0, sN.Id)(n),
        j =
            (o === i.author.id || I) &&
            i.author.id !== W.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, W.pr7.EPHEMERAL) &&
            _ &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        N = o === i.author.id && _ && !r,
        T = i.author.id === o,
        y = i.isFirstMessageInForumPost(n),
        S = (0, s0.A)({
            channel: n,
            canChat: A,
            renderReactions: g,
            canAddNewReactions: E,
            isLurking: x,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: C,
        }),
        b = (0, nK.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        k = (0, iX.A)(n?.id),
        L = (0, lm.A)(i),
        R = (0, nO.P)(i),
        M = (0, sQ.z)(n),
        D = (0, sX._f)(i.id, i.channel_id),
        O = (0, nP._R)(),
        U = (0, nW.U)();
    return (0, s.jsx)(dr, {
        canSuppressEmbeds: j,
        canDeleteAttachments: N,
        ...S,
        disableReactionReads: !!y || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && M,
        hasBailedAst: e.hasBailedAst,
        isLurking: x && A,
        isPendingMember: f && A,
        isCurrentUser: T,
        inlineAttachmentMedia: d,
        inlineEmbedMedia: m,
        renderEmbeds: h,
        gifAutoPlay: p,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: b,
        showMaskedLinks: b,
        shouldHideMediaOptions: k,
        enabledContentHarmTypeFlags: R,
        ctaButtonType: D,
        shouldAgeVerify: O,
        hideInviteEmbedBanner: a,
        restrictedPreview: U,
    });
}
function dd(e) {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = nQ.X6.useSetting(),
        u = nQ.hD.useSetting(),
        m = nQ.rs.useSetting(),
        h = nQ.kt.useSetting(),
        g = (0, nW.U)(),
        p = (0, nK.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, iX.A)(n?.id),
        x = (0, nO.P)(t),
        f = (0, sX._f)(t.id, t.channel_id),
        E = (0, lm.A)(t);
    return (0, s.jsx)(dr, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: r,
        disableReactionUpdates: a,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: l,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: h,
        poll: E,
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: A,
        enabledContentHarmTypeFlags: x,
        ctaButtonType: f,
        restrictedPreview: g,
    });
}
