n.d(t, { iV: () => de, OC: () => dn, Ay: () => dt }), n(938796);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(448761),
    d = n(665260),
    c = n(17928),
    u = n(803805),
    m = n(52133),
    h = n(192308),
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
    b = n(583846),
    k = n(113854),
    L = n(207371),
    R = n(205184),
    P = n(773669),
    M = n(280450),
    D = n(734057),
    O = n(994500),
    U = n(967198),
    G = n(287809),
    w = n(486020),
    B = n(204776),
    V = n(725606),
    H = n(572211),
    F = n(500060),
    z = n(432017),
    Y = n(687966),
    K = n(104171),
    W = n(652215),
    J = n(375708),
    q = n(154960);
function X(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, l.jsxs)("div", {
        className: q.i,
        children: [
            (0, l.jsx)(K.Ay, { guildId: n, users: t, max: 6, size: K.DN.SIZE_16 }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var Z = n(354287),
    $ = n(138175),
    Q = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(422533);
function ei(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: r, message: a, onView: o } = e,
        { name: d, bot: u } = (t = (0, $.b)(t)),
        m = u?.id,
        h = (0, E.Ag)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: I } = (0, Q.f)(t),
        C = (0, c.bG)([M.default], () => r ?? M.default.getId(), [r]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: b, canLaunchInChannel: R } = (0, V.w)(t.id),
        P = (0, T.A)(),
        O = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        U = null != m && h && O,
        G = R && h,
        B = (0, L.x)(t),
        F = (0, ee.F)(t),
        z = (0, ee.t)(t),
        Y = s.useMemo(() => {
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
                                          embeddedActivitiesManager: P,
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
                    : null != z && e.push(z),
                e
            );
        }, [h, z, B, t.id, G, U, j, b, _, P, i, C, v, m]),
        K = h ? (0, l.jsx)(es, { app: t }) : (0, l.jsx)(el, { app: t });
    return (0, l.jsx)(H.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: F,
        bannerAspectRatio: I,
        iconSrc: g,
        info: K,
        actions: Y,
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
        i = (0, c.bG)([P.default], () => P.default.locale, []),
        r = s.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : J.intl.format(J.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != a && (0, l.jsx)(p.E, { variant: "text-xs/medium", className: en.h_, color: "none", children: a }),
            null != r &&
                (0, l.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    className: en.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, l.jsx)(v.Q, { size: "xxs", color: "currentColor" }), r],
                }),
        ],
    });
}
function es(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        r = (0, c.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        a = (0, R.s)(t.id),
        o = (0, c.yK)([G.default, O.A], () => {
            let e = [];
            for (let [t, n] of a.entries()) {
                if (t >= 5) break;
                let i = G.default.getUser(n.author_id),
                    l = O.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [a]),
        d = s.useMemo(() => {
            if (o.length > 0)
                return (0, l.jsx)(X, {
                    activityUsers: o,
                    guildId: r,
                    activityText: J.intl.formatToPlainString(J.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(_.Y, { size: "xxs", color: "currentColor" }), J.intl.string(J.t.TsWCdW)],
                });
            let e = i > 0 ? J.intl.format(J.t.z8EAJW, { count: i }) : J.intl.string(J.t.RjceQU);
            return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(j.n, { size: "xxs", color: "currentColor" }), e] });
        }, [a, o, r, i]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.length > 0 &&
                (0, l.jsx)(p.E, {
                    variant: "text-xs/medium",
                    className: en.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, l.jsx)("span", { className: en.Tc, children: e }, t)),
                }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", className: en.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var er = n(582388),
    ea = n(257269);
let eo = (0, c.UT)(er.A, {
    getQueryId: W.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : er.A.getOne(e, t)),
    load: (e, t) => (0, ea.Py)(e, t),
});
var ed = n(309010),
    ec = n(933958),
    eu = n(782091);
function em(e) {
    let { application: t, customId: n, customLink: i, referrerId: s, message: r } = e,
        a = t?.bot?.id,
        o = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Ag)(t),
        u = null != a && d && o,
        { analyticsLocations: m } = (0, f.Ay)(x.A.ACTIVITY_CUSTOM_LINK),
        h = (0, c.bG)([ed.Ay], () => ed.Ay.getChannelId()),
        g = (0, eu.et)(h),
        p = (0, c.bG)([ec.Ay], () => {
            if (null == h) return;
            let e = ec.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, c.bG)([ec.Ay], () => ec.Ay.getCurrentEmbeddedActivity()),
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
                          referrerId: s,
                          analyticsLocations: m,
                      });
                  },
                  disabled: v,
              }),
          u &&
              !C &&
              j.push({
                  label: J.intl.string(J.t.JeK1Wg),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      (0, y.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: _, referrerId: s });
                  },
              }));
    let b = (0, ee.F)(t);
    return (0, l.jsx)(H.h, {
        actions: j,
        onClickContent: b,
        header: t.name,
        iconSrc: w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, l.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: et.J.CUSTOM_ACTIVITY_LINK,
            referrerId: s,
            activityCustomId: _,
            guildId: D.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eh(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: s = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, f.Ay)(x.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = eo(t.id, r);
    return (0, E.Ag)(t)
        ? null != r && null == c && null != d
            ? (0, l.jsx)(f.f5, {
                  value: o,
                  children: (0, l.jsx)(em, { application: t, customId: a, customLink: d, referrerId: s, message: n }),
              })
            : (0, l.jsx)(f.f5, {
                  value: o,
                  children: (0, l.jsx)(ei, {
                      app: t,
                      linkType: et.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: s,
                      message: n,
                  }),
              })
        : null;
}
var eg = n(821609),
    ep = n(31720),
    eA = n(847599),
    ex = n(36149);
function ef(e) {
    let { channelId: t } = e,
        n = (0, ex.b8)(),
        i = (0, ex.i2)(),
        r = J.intl.string(J.t["9KiIz6"]),
        a = J.intl.string(J.t["/nicWo"]),
        o = s.useCallback(() => {
            ep.A.showAgeVerificationGetStartedModal({ entryPoint: eA.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eA.UT)(eA.Im.RETRY, t);
        }, [t]);
    return (0, l.jsx)(eg.$, { variant: "primary", text: n ? r : a, onClick: o, disabled: !i });
}
var eE = n(107766),
    eI = n(780964),
    eC = n(766075);
function ev(e) {
    let { channelId: t } = e,
        n = s.useCallback(() => {
            (0, eE.nk)() || (0, eC.openUserSettings)(eI.X.FAMILY_CENTER_PANEL), (0, eA.UT)(eA.Im.CONNECT_TO_TEEN, t);
        }, [t]);
    return (0, l.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.n8a49k), onClick: n });
}
var e_ = n(284009),
    ej = n.n(e_),
    eN = n(664121),
    eT = n(34188),
    ey = n(408278),
    eS = n(173936),
    eb = n(691540),
    ek = n(857250),
    eL = n(97483),
    eR = n(939249),
    eP = n(996759),
    eM = n(800342),
    eD = n(163437),
    eO = n(185438),
    eU = n(97352),
    eG = n(652676),
    ew = n(67480),
    eB = n(328968),
    eV = n(174459),
    eH = n(957565),
    eF = n(943775),
    ez = n(997997),
    eY = n(658575),
    eK = n(376374),
    eW = n(435220),
    eJ = n(457147);
let eq = (0, c.UT)([ew.A, eB.A, eU.A], {
        getQueryId: W.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = ew.A.get(e),
                n = eB.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eU.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            ej()(null != e, "skuId is null"), await (0, eM.QB)(e);
        },
    }),
    eX = (0, c.UT)([ew.A], {
        getQueryId: W.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (ew.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            ej()(null != e && null != t, "appId is null"), await (0, eM.JI)(t);
        },
    });
function eZ(e) {
    let { application: t, message: i } = e,
        r = t.id,
        a = (0, eY.G)(r),
        [o, d, u, m] = (0, c.yK)([eG.A, D.A], () => {
            let e = (0, eF.A)(t, 45),
                n = D.A.getBasicChannel(i.channel_id)?.guild_id;
            return [eG.A.getStoreLayout(r), eG.A.getFetchStatus(r), n, e];
        }, [t, r, i.channel_id]);
    s.useEffect(() => {
        d === eG.N.NONE && (0, eP.V)(r);
    }, [r, d]);
    let g = o.subscriptions.length,
        p = o.otps.length,
        A = s.useMemo(
            () =>
                g > 0 && p > 0
                    ? J.intl.formatToPlainString(J.t["jA648+"], { subCount: g, itemCount: p })
                    : g > 0
                      ? J.intl.formatToPlainString(J.t.GSfibA, { count: g })
                      : p > 0
                        ? J.intl.formatToPlainString(J.t.j7Go5A, { count: p })
                        : J.intl.string(J.t.rMA98g),
            [p, g],
        );
    if (!a) return null;
    function x() {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("52517"),
                n.e("39086"),
                n.e("1087"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, l.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: r, guildId: u });
        });
    }
    return (0, l.jsx)(eQ, {
        appName: t.name,
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, ez.K)(r, ez.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            x(),
                eV.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: r, area: "app_icon" });
        },
        children: (0, l.jsx)("div", {
            className: eJ.mZ,
            children: (0, l.jsx)(eg.$, {
                onClick: function () {
                    x(),
                        eV.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: r,
                            area: "open_store_button",
                        });
                },
                text: J.intl.string(J.t.kRvlKJ),
            }),
        }),
    });
}
function e$(e) {
    let { application: t, skuId: i, message: r } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: u,
        } = (function (e, t) {
            let { data: n } = eq(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eX(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, c.bG)([D.A], () => D.A.getBasicChannel(r.channel_id)?.guild_id, [r]),
        g = s.useMemo(() => (0, eF.A)(t, 45), [t]),
        p = (0, eY.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eO.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === W.Puh.SUBSCRIPTION,
        E = !!f && (0, eD.bg)(o.flags);
    function I() {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("52517"),
                n.e("39086"),
                n.e("1087"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, l.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let C = () => {
            (0, h.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    s = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    function r() {
                        n.onClose(), I();
                    }
                    return null != e && null != a
                        ? (0, l.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: r,
                          })
                        : null != s
                          ? (0, l.jsx)(s, {
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
        v = f
            ? E
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(j.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.wnifjC),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eN.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.NRC3ar),
                      ],
                  })
            : u?.description?.trim();
    function _() {
        null != o &&
            eV.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === v && (v = void 0),
        (0, l.jsx)(eQ, {
            appName: t.name,
            title: o.name,
            description: v,
            link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, ez.K)(t.id, ez.C.SKU_EMBED, i);
            },
            iconSrc: g,
            onIconClick: function () {
                null != o &&
                    (I(),
                    eV.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, l.jsxs)("div", {
                className: eJ.w,
                children: [
                    (0, l.jsx)(eg.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (C(),
                                eV.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: J.intl.string(J.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, l.jsx)(eK.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: E ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eT.U,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, l.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: C })
                        : (0, l.jsx)(eK.$P, { appId: t.id, sku: o, icon: eT.U, onHasClicked: _ }),
                ],
            }),
        })
    );
}
function eQ(e) {
    let { appName: t, title: n, description: i, link: s, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, l.jsxs)("div", {
        className: eJ.iE,
        children: [
            (0, l.jsxs)("div", {
                className: eJ.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: eJ.qd,
                        children: [
                            (0, l.jsx)(eT.U, { size: "xxs" }),
                            (0, l.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eH.p5 &&
                        (0, l.jsx)(ey.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, l.jsx)(eS.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eH.C)(s, () => {
                                    (0, eb.P0)((0, ek.o)(J.intl.string(J.t["L/PwZf"]), eL.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: eJ.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eJ.oB,
                        children: [
                            null != r &&
                                (0, l.jsx)(eR.D, {
                                    onClick: a,
                                    children: (0, l.jsx)("img", { src: r.href, alt: "", className: eJ.Z2 }),
                                }),
                            (0, l.jsxs)("div", {
                                className: eJ.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, l.jsx)(p.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, l.jsx)(p.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eJ.h_,
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
var e0 = n(401374),
    e1 = n(562708),
    e2 = n(139286);
function e3(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        r = s.useCallback(() => {
            (0, e2.x)({
                type: e1.ImpressionTypes.VIEW,
                name: e1.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, B.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, l.jsx)(f.f5, {
              value: i,
              children: (0, l.jsx)(ei, { app: t, linkType: et.J.OAUTH, onView: r, message: n }),
          })
        : null;
}
var e6 = n(778492),
    e5 = n(297264),
    e4 = n(285796),
    e9 = n(857182),
    e7 = n(506774),
    e8 = n(228366),
    te = n(576705),
    tt = n(812930);
let tn = "ChannelFollowingBumpChannels",
    ti = new Set(),
    tl = new Set();
class ts extends c.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(M.default, D.A, te.A, G.default), (ti = new Set(e7.w.get(tn)));
    }
    shouldShowBump(e) {
        return tl.has(e);
    }
}
let tr = new ts(e8.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || ti.has(t)) return !1;
        let l = D.A.getChannel(t),
            s = G.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === W.rbe.GUILD_ANNOUNCEMENT &&
                (0, tt.A)(n) &&
                te.A.can(W.xBc.SEND_MESSAGES, l) &&
                (r || te.A.can(W.xBc.MANAGE_MESSAGES, l)) &&
                !d.Lt(Number(n.flags), W.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tl.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tl.has(t.id) && d.Lt(Number(t.flags), W.pr7.CROSSPOSTED) && tl.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tl.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tl.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        ti.add(t), e7.w.set(tn, ti), tl.clear();
    },
});
var ta = n(419056),
    to = n(8216);
let td = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, c.bG)([tr], () => tr.shouldShowBump(n), [n]),
        r = s.useCallback(() => {
            e9.A.dismissPublishBump(n), (0, ta.A)(t, n);
        }, [t, n]),
        a = s.useCallback(() => {
            e9.A.dismissPublishBump(n);
        }, [n]),
        o = s.useCallback(() => {
            e9.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, l.jsxs)("div", {
              className: to.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: to.mp,
                      children: [
                          (0, l.jsx)(e6.k, { size: "xs", color: "currentColor", className: to.Kk }),
                          (0, l.jsx)(e5.D, {
                              variant: "heading-sm/normal",
                              className: to.dS,
                              children: J.intl.string(J.t.hasZoU),
                          }),
                          (0, l.jsx)(p.E, {
                              color: "text-brand",
                              className: to.mk,
                              variant: "text-sm/normal",
                              children: (0, l.jsx)(eR.D, { onClick: r, children: J.intl.string(J.t.MFGE51) }),
                          }),
                          (0, l.jsx)(eR.D, {
                              onClick: a,
                              children: (0, l.jsx)(e4.a, { size: "xs", color: "currentColor", className: to.ut }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(p.E, {
                      color: "text-muted",
                      className: to.qx,
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(eR.D, { onClick: o, children: J.intl.string(J.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tc = n(175671),
    tu = n(435558),
    tm = n.n(tu),
    th = n(239947),
    tg = n(403581),
    tp = n(97808),
    tA = n(778712),
    tx = n(520117),
    tf = n(793943),
    tE = n(763754),
    tI = n(973654),
    tC = n(467135),
    tv = n(644235),
    t_ = n(153469),
    tj = n(693227),
    tN = n(369025);
function tT(e) {
    return e.map((e) => `#${e}`);
}
function ty(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tC.ko)();
    return void 0 === n
        ? null
        : (0, l.jsxs)("div", {
              className: tN.kL,
              children: [
                  (0, l.jsx)(tS, { message: t }),
                  (0, l.jsx)(eg.$, {
                      text: J.intl.string(J.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eV.default.track(W.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tf.nf)(tf.HP.CUSTOM_THEME, { from: tf.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tT(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tI.GQ)((0, tv.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tS(e) {
    var t, n, i;
    let { message: r } = e,
        { sharedClientTheme: a } = r,
        o = (0, tE.Ay)(r),
        d = s.useMemo(
            () =>
                (0, tu.once)(() => {
                    (0, e2.x)({ type: e1.ImpressionTypes.VIEW, name: th.I.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        c = (0, tx.A)({
            onVisible: () => {
                d();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = s.useMemo(() => (void 0 === a ? "" : (0, t_.V9)(tT(a.colors), a.gradient_angle ?? 0)), [a]);
    return void 0 === a
        ? null
        : (0, l.jsxs)("div", {
              className: tN.pS,
              ref: c,
              children: [
                  (0, l.jsx)("div", { className: tN.sl, style: { background: `${u}` } }),
                  (0, l.jsxs)("div", {
                      className: tN.Ix,
                      children: [
                          (0, l.jsxs)(e5.D, {
                              variant: "heading-md/semibold",
                              className: tN.qP,
                              children: [J.intl.string(tj.default.KSBBpC), " ", (0, l.jsx)(tg.t, {})],
                          }),
                          (0, l.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tN.Tb,
                              children:
                                  ((t = `${J.intl.format(tj.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = r.author),
                                  (i = o.nick),
                                  t
                                      .split(" ")
                                      .map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, l.jsxs)(s.Fragment, { children: [e, " "] }, t)
                                              : (0, l.jsxs)(
                                                    "span",
                                                    {
                                                        className: tN.H,
                                                        children: [
                                                            (0, l.jsx)(tp.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tA._3.SIZE_20,
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
var tb = n(892768),
    tk = n(167189),
    tL = n(758836);
let tR = new Set(Object.values(tL.G2).filter((e) => e !== tL.G2.COLLECTION_INDEX));
var tP = n(172218),
    tM = n(575593),
    tD = n(318254),
    tO = n(825484),
    tU = n(289873),
    tG = n(44120),
    tw = n(821925),
    tB = n(652165),
    tV = n(428262),
    tH = n(580630),
    tF = n(34332),
    tz = n(4227),
    tY = n(298072),
    tK = n(993408),
    tW = n(642160),
    tJ = n(841702),
    tq = n(466459),
    tX = n(623373),
    tZ = n(38405);
class t$ extends s.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        tZ.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var tQ = n(878112),
    t0 = n(722258),
    t1 = n(828614),
    t2 = n(561769),
    t3 = n(540737),
    t6 = n(927813);
let t5 = 10 * t6.A.Millis.MINUTE,
    t4 = new (class {
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
    t9 = new Set(),
    t7 = new Map(),
    t8 = null;
function ne(e) {
    let t = t7.get(e);
    return null != t && Date.now() - t < t5;
}
var nt = n(347722),
    nn = n(61750),
    ni = n(202541),
    nl = n(274237);
function ns() {
    return (0, tJ.b5)(), null;
}
function nr(e) {
    let { product: t, skuId: n, tab: i, channel: r } = e,
        { analyticsLocations: a } = (0, f.Ay)(),
        o = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        d = r.isDM() || r.isGroupDM(),
        u = s.useRef(!1);
    s.useEffect(() => {
        if (u.current || !(0, tX.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        e > -1 && (0, tY.n)(t, e), (u.current = !0);
    }, [t, n]);
    let m = (0, tY.Q)(t),
        h = (0, tX.B1)(t) ? (t.variants[m] ?? t) : t,
        g = h.skuId,
        { isPurchased: p } = (0, tq.h)(h),
        A = (0, c.bG)([tz.A], () => tz.A.hasPreviouslyFetched || null != tz.A.fetchError),
        x = !d || A,
        E = d && p,
        I = (0, c.bG)([G.default], () => {
            if (!r.isDM() || null == r.recipients) return;
            let e = G.default.getCurrentUser()?.id,
                t = r.recipients.find((t) => t !== e) ?? r.recipients[0];
            return null != t ? (G.default.getUser(t) ?? void 0) : void 0;
        }),
        C = (0, nt.X)(h),
        v = s.useCallback(() => {
            (0, t0.B)({ skuId: g, tab: i, analyticsLocations: a });
        }, [g, i, a]),
        _ = (0, tX.Ab)(h),
        j = s.useCallback(() => {
            _
                ? (0, tB.B4)({
                      skuId: g,
                      analyticsLocations: a,
                      onComplete: (e) => {
                          (0, tF.gB)(),
                              (0, nn.A)({
                                  product: h,
                                  analyticsLocations: a,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tL.gs.ORB,
                              });
                      },
                  })
                : (0, tG.A)({
                      skuId: g,
                      analyticsLocations: a,
                      onClose: (e) => {
                          e && (0, tF.gB)();
                      },
                  });
        }, [h, g, _, a]),
        N = null != o && tV.Ay.canUseShopDiscounts(o),
        T = (0, tK.G0)(h),
        y = (0, tX.$K)({ product: h, hasShopDiscount: N }),
        S = (0, tX.CW)({ product: h, hasShopDiscount: N }),
        b = x && !E && !T && (_ ? null != S : null != y),
        k =
            b && _ && null != S
                ? J.intl.format(J.t.JC15qj, {
                      orbPrice: S.amount,
                      orbIconHook: () => (0, l.jsx)(tD.C, { className: nl.fN, size: "sm", color: "currentColor" }),
                  })
                : b && null != y
                  ? J.intl.formatToPlainString(J.t["cNSL/j"], { price: (0, tH.$g)(y.amount, y.currency) })
                  : void 0,
        L = (0, l.jsx)(eg.$, { variant: "secondary", onClick: v, text: J.intl.string(J.t.KLBTgF), fullWidth: !0 }),
        R = b ? (0, l.jsx)(eg.$, { variant: "primary", onClick: j, text: k, fullWidth: !0 }) : null,
        P = C
            ? (0, l.jsx)(tQ.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: m,
                  giftRecipient: I,
                  giftingOrigin: ni.vQ.SHOP_PAGE,
              })
            : null;
    return (0, l.jsxs)("div", {
        className: nl.kL,
        children: [
            d && (0, l.jsx)(ns, {}),
            (0, l.jsx)("div", {
                className: nl.VH,
                children: (0, l.jsx)(t2.v3.Provider, {
                    value: {
                        productOverride: t,
                        flattenProductVariants: !0,
                        prioritizedCurrency: _ ? t2.Hi.ORBS : t2.Hi.FIAT,
                    },
                    children: (0, l.jsx)(t1.A, {
                        skuId: n,
                        cardClassName: nl.Nr,
                        hideWishlistButton: !0,
                        hidePrimaryCTA: !0,
                        hideSecondaryCTA: !0,
                        onClickCard: v,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: nl.zH,
                children: (0, l.jsxs)(tO.e, { wrap: !1, fullWidth: !0, children: [L, R, P] }),
            }),
        ],
    });
}
let na = { rootMargin: "200px" };
function no(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, tW.I)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        r = (0, c.bG)([tw.A], () => tw.A.getFetchStateForSku(e.skuId)),
        [a, o] = s.useState(!1),
        d = (0, tP.B)(
            s.useCallback((e) => {
                e.isIntersecting && o(!0);
            }, []),
            na,
            "loading" === i && !a,
        );
    return (s.useEffect(() => {
        var t;
        a &&
            "loading" === i &&
            !("" === (t = e.skuId) || t9.has(t) || ne(t)) &&
            !(t9.size >= 50) &&
            (0, t3.jn)(t) &&
            (t9.add(t),
            (function e(t) {
                null == t8 &&
                    (t8 = setTimeout(() => {
                        (t8 = null),
                            (function () {
                                for (let e of [...t9]) (ne(e) || !(0, t3.jn)(e)) && t9.delete(e);
                                if (0 === t9.size) return;
                                let t = [];
                                for (let e of t9) {
                                    if (t.length >= 50 || !t4.tryTake()) break;
                                    t.push(e),
                                        t9.delete(e),
                                        (function (e) {
                                            if ((t7.set(e, Date.now()), t7.size > 2e3)) {
                                                let e = t7.keys().next().value;
                                                null != e && t7.delete(e);
                                            }
                                        })(e);
                                }
                                t.length > 0 && (0, t3.tu)({ skuIds: t }),
                                    t9.size > 0 && e(Math.max(t4.getMsUntilAvailable(), 300));
                            })();
                    }, t));
            })(300));
    }, [a, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== r && ne(e.skuId)
            ? null
            : (0, l.jsx)("div", {
                  ref: d,
                  className: nl.kL,
                  children: (0, l.jsx)("div", { className: nl.dc, children: (0, l.jsx)(tU.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            (0, tX.YW)(t) !== tM.R.PROFILE_FRAME &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, l.jsx)(nr, { ...e, product: t })
          : null;
}
function nd(e) {
    return (0, l.jsx)(t$, { children: (0, l.jsx)(no, { ...e }) });
}
var nc = n(661531),
    nu = n(696986),
    nm = n(95561),
    nh = n(548118),
    ng = n(250627),
    np = n(741231),
    nA = n(749314),
    nx = n(71393),
    nf = n(722888),
    nE = n(43136),
    nI = n(575926),
    nC = n(824764);
function nv(e) {
    let { guildId: t } = e,
        n = (0, c.bG)([nx.A], () => nx.A.getGuild(t)),
        { loading: i, subscriptionsSettings: r } = (0, nf.G)(t),
        { listingsLoaded: o } = (0, ng.bb)(t),
        d = (0, ng.fZ)(t, { publishedOnly: !0 }),
        u = s.useCallback(async () => {
            eV.default.track(W.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nm.H$)(t) }),
                await (0, np.A)(W.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e2.A)(
        { type: e1.ImpressionTypes.VIEW, name: e1.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !o
        ? (0, l.jsx)("div", { className: a()(nC.lm, nC.dc), children: (0, l.jsx)(tU.y, {}) })
        : null == n || null == r
          ? null
          : (0, l.jsxs)("div", {
                className: nC.lm,
                children: [
                    (0, l.jsx)(nE.C, { coverImageAsset: r.cover_image_asset ?? null }),
                    (0, l.jsx)(nu.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nC.qs,
                        children: [
                            (0, l.jsx)(nI.h, {
                                height: "16px",
                                width: "16px",
                                color: nc.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, l.jsx)(e5.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nC.Nl,
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nu.h, { size: 16 }),
                    (0, l.jsx)(e5.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, l.jsx)(nu.h, { size: 4 }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: r.description,
                    }),
                    (0, l.jsx)(nu.h, { size: 16 }),
                    (0, l.jsx)(nA.A, {}),
                    (0, l.jsx)(nu.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nC.kS,
                        children: [
                            (0, l.jsx)(nh.Ay, { guild: n }),
                            (0, l.jsxs)("ul", {
                                className: nC.q6,
                                children: [
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: J.intl.format(J.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: J.intl.format(J.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: nC.$h,
                                children: (0, l.jsx)(eg.$, { onClick: u, icon: nI.A, text: J.intl.string(J.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var n_ = n(390248),
    nj = n(282108),
    nN = n(33358),
    nT = n(885574),
    ny = n(743093);
function nS(e) {
    let { message: t } = e;
    return (0, l.jsxs)(eR.D, {
        onClick: function () {
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, l.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: ny.L,
        children: [
            (0, l.jsx)(nT.m, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", className: ny.m, children: J.intl.string(J.t["2aXnfa"]) }),
        ],
    });
}
var nb = n(974875),
    nk = n(900019);
function nL(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, c.bG)([nk.A], () => nk.A.canSubmitFpReport(t)),
        r = s.useCallback(() => {
            (0, nb.Q)(n, t);
        }, [n, t]);
    return (0, l.jsx)(eg.$, { variant: "secondary", text: J.intl.string(J.t["4q1Elf"]), onClick: r, disabled: !i });
}
var nR = n(320448),
    nP = n(713654),
    nM = n(958340),
    nD = n(384231),
    nO = n(959698),
    nU = n(438729),
    nG = n(375199),
    nw = n(886737),
    nB = n(699352),
    nV = n(8455),
    nH = n(885386),
    nF = n(540999),
    nz = n(47167),
    nY = n(58703),
    nK = n(427930);
function nW(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class nJ {
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
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : te.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nx.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nM.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, nY.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nW(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, nz.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nW(h, d) };
    }
}
var nq = n(66834),
    nX = n(385648);
async function nZ(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nx.A.getGuild(t))
        try {
            await (0, nX.Z2)(t, { object: W.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, nq.k)(t),
                (l = D.A.getChannel(n));
        } catch {}
    eV.default.track(W.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, np.A)(W.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var n$ = n(387408),
    nQ = n(427209),
    n0 = n(513679);
function n1() {
    return (0, l.jsxs)("div", {
        className: n0.N1,
        children: [
            (0, l.jsx)(nQ.A, { size: "xs", className: n0.nr, color: nc.A.colors.TEXT_MUTED }),
            (0, l.jsx)(p.E, {
                className: n0.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function n2(e) {
    let { message: t, snapshot: n, index: i } = e,
        r = s.useMemo(() => new nJ(t, n, i), [t, n, i]),
        a = (0, c.bG)(
            [D.A, G.default, O.A, te.A, nx.A, nM.A],
            () => r.getForwardInfo(D.A, G.default, O.A, te.A, nx.A, nM.A).footerInfo,
            [r],
            m.A,
        ),
        o = (0, c.bG)([D.A], () => D.A.getChannel(t.messageReference?.channel_id)),
        d = s.useCallback(() => {
            nZ(t);
        }, [t]);
    return null == a
        ? null
        : (0, l.jsxs)(eR.D, {
              className: n0.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, l.jsx)("img", { className: n0.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, l.jsx)(n3, { channel: o }) : null,
                  (0, l.jsx)(p.E, {
                      className: n0.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, l.jsx)(nR._, { size: "xxs", color: nc.A.colors.TEXT_MUTED }),
              ],
          });
}
function n3(e) {
    let { channel: t } = e,
        n = (0, nV.Vp)({ location: "ForwardFooter" }),
        i = s.useMemo(() => (0, nP.gU)(t), [t]);
    return n.enabled && null != i ? (0, l.jsx)(i, { className: n0.yl, size: "xs", color: "currentColor" }) : null;
}
function n6(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: r } = e,
        a = s.useMemo(() => (0, n$.A)(t, n), [t, n]),
        o = nH.hD.useSetting(),
        d = nH.rs.useSetting(),
        u = (0, c.bG)([nF.A], () => nF.A.isDeveloper),
        m = (0, nO.U)(),
        h = (0, nD.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nG.A)(a, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: u,
            previewLinkTarget: !0,
            postProcessor: m ? nw.A : void 0,
        }),
        x = (0, c.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        f = nH.hH.useSetting();
    return null == x
        ? null
        : (0, l.jsxs)(
              "div",
              {
                  className: n0.kL,
                  children: [
                      (0, l.jsx)("div", { className: n0.hD }),
                      (0, l.jsxs)("div", {
                          className: n0.Qs,
                          children: [
                              (0, l.jsx)(n1, {}),
                              (0, l.jsx)(nU.Ay, { message: a, content: g, compact: f }),
                              (0, nB.A)({
                                  channelMessageProps: { message: a, channel: x, compact: f },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: r,
                              }),
                              !m && (0, l.jsx)(n2, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function n5(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, l.jsx)(n6, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var n4 = n(341662),
    n9 = n(890856),
    n7 = n(109112),
    n8 = n(508770),
    ie = n(369606),
    it = n(866665),
    ii = n(409626),
    il = n(49491),
    is = n(692969),
    ir = n(738250);
function ia(e) {
    let { gameId: t, sourceUserId: n } = e,
        { gameId: i, gameRecord: l, isLoading: s } = (0, ir.A)({ gameId: t }),
        r = (0, is.A)({ gameId: t, source: ii.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
        a = (0, il.A)(l),
        o = null != l && null != r && !s && !a,
        d = l?.getIconURL(80) ?? null,
        c = l?.getBannerURL(512) ?? l?.screenshotUrls?.[0] ?? null;
    return { game: l ?? null, resolvedGameId: i, iconUrl: d, bannerUrl: c, openGameProfile: r, shouldRender: o };
}
var io = n(244292);
function id(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            resolvedGameId: r,
            iconUrl: o,
            bannerUrl: d,
            openGameProfile: c,
            shouldRender: u,
        } = ia({ gameId: t, sourceUserId: n }),
        m = s.useCallback(
            (e) => {
                if ((e.stopPropagation(), null == r || null == i)) return;
                (0, ii.trackGameProfileEmbedAction)({
                    gameName: i.name,
                    gameId: r,
                    action: ii.GameProfileEmbedAction.CopyLink,
                });
                let t = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${W.BVt.GAME_PROFILE(r)}`;
                (0, eH.C)(t, () => (0, eb.P0)((0, ek.o)(J.intl.string(J.t["+5kSoW"]), eL.Ck.SUCCESS)));
            },
            [r, i],
        );
    if (!u || null == i || null == c) return null;
    let h = null != d;
    return (0, l.jsxs)(n9.s, {
        className: io.E6,
        onClick: c,
        "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: i.name }),
        children: [
            h &&
                (0, l.jsxs)("div", {
                    "aria-hidden": !0,
                    className: io.q5,
                    children: [
                        (0, l.jsx)("div", { className: io._e, style: { backgroundImage: `url("${d}")` } }),
                        (0, l.jsx)("div", { className: io.nY }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: a()(io.rf, { [io.F7]: h }),
                children: [
                    null != o
                        ? (0, l.jsx)("img", { src: o, alt: "", className: io.Kk, draggable: !1 })
                        : (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              className: io.EU,
                              children: (0, l.jsx)(n7._, { size: "lg", color: "currentColor" }),
                          }),
                    (0, l.jsxs)("div", {
                        className: io.pq,
                        children: [
                            (0, l.jsx)(e5.D, {
                                variant: "heading-lg/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: i.name,
                            }),
                            null != i.l30Rank &&
                                (0, l.jsx)("div", {
                                    className: io.k3,
                                    children: (0, l.jsx)(n8.E, {
                                        variant: "default",
                                        type: { text: J.intl.formatToPlainString(J.t.ehZXlZ, { rank: i.l30Rank }) },
                                        icon: ie.O,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: io.o1,
                children: [
                    (0, l.jsx)(it.m, {
                        text: J.intl.string(J.t.WqhZss),
                        ariaHidden: !0,
                        children: (0, l.jsx)(ey.K, {
                            icon: eS.q,
                            variant: "secondary",
                            size: "md",
                            "aria-label": J.intl.string(J.t.WqhZss),
                            onClick: m,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: io.jR,
                        children: (0, l.jsx)(eg.$, {
                            text: J.intl.string(J.t.ajHoOr),
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            onClick: c,
                            "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: i.name }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ic = n(397680);
function iu(e) {
    let { gameId: t, sourceUserId: n } = e,
        { game: i, iconUrl: s, bannerUrl: r, openGameProfile: a, shouldRender: o } = ia({ gameId: t, sourceUserId: n });
    return o && null != i && null != a
        ? (0, l.jsxs)(n9.s, {
              className: ic.E6,
              onClick: a,
              "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, l.jsxs)("div", {
                      "aria-hidden": !0,
                      className: ic.yl,
                      children: [
                          null != r &&
                              (0, l.jsx)("div", { className: ic.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, l.jsx)("div", { className: ic.N4 }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: ic.rf,
                      children: [
                          null != s
                              ? (0, l.jsx)("img", { src: s, alt: "", className: ic.Kk, draggable: !1 })
                              : (0, l.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: ic.EU,
                                    children: (0, l.jsx)(n7._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, l.jsxs)("div", {
                              className: ic.Qs,
                              children: [
                                  (0, l.jsx)(e5.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, l.jsx)("div", {
                                          className: ic.k3,
                                          children: (0, l.jsx)(n8.E, {
                                              variant: "default",
                                              type: {
                                                  text: J.intl.formatToPlainString(J.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: ie.O,
                                          }),
                                      }),
                              ],
                          }),
                          (0, l.jsx)(ey.K, {
                              icon: nR._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
function im(e) {
    let { gameId: t, sourceUserId: n } = e,
        { enabled: i, showSmallEmbed: s } = n4.A.useConfig({ location: "game_profile_embed" });
    return i
        ? s
            ? (0, l.jsx)(iu, { gameId: t, sourceUserId: n })
            : (0, l.jsx)(id, { gameId: t, sourceUserId: n })
        : null;
}
var ih = n(643612),
    ig = n(607399),
    ip = n(702841),
    iA = n(529200),
    ix = n(395671),
    iE = n(993748),
    iI = n(212534),
    iC = n(665845);
function iv(e) {
    let { code: t, message: n } = e,
        [i, r, a] = (0, ip.yK)(
            [iI.A],
            () => [iI.A.getApplication(t), iI.A.isInvalidApplication(t), iI.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, ip.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [d, c] = s.useState(!1),
        u = s.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tP.K)(u),
        h = s.useCallback(() => {
            eV.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: ig.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (s.useEffect(() => {
        (0, iE.eP)(t);
    }, [t]),
    s.useEffect(() => {
        d && a === iI.e.FETCHED && h();
    }, [d, a, h]),
    s.useEffect(() => {
        d &&
            r &&
            eV.default.track(W.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: ig.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, r, n.author.id, n.channel_id]),
    r)
        ? (0, l.jsxs)(iA.A, {
              containerRef: m,
              children: [
                  (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, l.jsx)(iA.A.Body, {
                      children: (0, l.jsxs)("div", {
                          className: iC.k,
                          children: [
                              (0, l.jsx)(iA.A.Icon, { expired: !0 }),
                              (0, l.jsx)(iA.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === iI.e.FETCHING
          ? (0, l.jsxs)(iA.A, {
                containerRef: m,
                children: [
                    (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, l.jsx)(iA.A.Body, { resolving: !0 }),
                ],
            })
          : (0, l.jsx)(ei, { app: ix.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var i_ = n(229527),
    ij = n(870136),
    iN = n(330075),
    iT = n(412728);
function iy(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        s = (0, ng.Qi)(n, i),
        r = (0, ip.bG)([U.A], () => U.A.getGuildId());
    return ((0, e2.A)(
        {
            type: iT.z.VIEW,
            name: e1.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: s?.has_entitlement === !0 },
        },
        { disableTrack: null == s },
    ),
    null == s || r !== n)
        ? null
        : (0, l.jsx)(iN.i, {
              guildProductListing: s,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var iS = n(484724),
    ib = n(953727);
function ik(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, ib.A)(s),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: i,
            }),
            (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: i,
            }),
        ],
    });
}
var iL = n(122906),
    iR = n(401755),
    iP = n(702948),
    iM = n(941836);
function iD(e) {
    let { code: t } = e,
        i = (0, c.bG)([iL.A], () => iL.A.getGuildTemplate(t));
    if (null == i || i.state === iR.QB.RESOLVING)
        return (0, l.jsxs)(iA.A, {
            children: [
                (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, l.jsx)(iA.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === iR.QB.EXPIRED)
        return (0, l.jsxs)(iA.A, {
            children: [
                (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, l.jsxs)(iA.A.Body, {
                    children: [
                        (0, l.jsx)(iA.A.Icon, { expired: !0 }),
                        (0, l.jsx)(iA.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let s = __OVERLAY__
        ? (0, l.jsx)(eg.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, l.jsx)(eg.$, {
              onClick: function () {
                  null != i &&
                      i.state !== iR.QB.RESOLVING &&
                      (0, h.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("47899"),
                              n.e("21009"),
                              n.e("53969"),
                              n.e("15064"),
                              n.e("43582"),
                              n.e("94624"),
                              n.e("22633"),
                              n.e("83952"),
                              n.e("82486"),
                              n.e("19580"),
                              n.e("16198"),
                              n.e("69771"),
                          ]).then(n.bind(n, 72715));
                          return (t) => (0, l.jsx)(e, { ...t, guildTemplate: i });
                      });
              },
              loading: i.state === iR.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, l.jsxs)(iA.A, {
        children: [
            (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, l.jsxs)(iA.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: iM.iH,
                        children: [
                            (0, l.jsx)(ik, { className: iP.K }),
                            (0, l.jsx)(iA.A.Info, {
                                title: i.name,
                                children: J.intl.format(J.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    s,
                ],
            }),
        ],
    });
}
var iO = n(842241),
    iU = n(681154),
    iG = n(155718);
let iw = new Set([
    iU.ContentInventoryEntryType.TOP_ARTIST,
    iU.ContentInventoryEntryType.TOP_GAME,
    iU.ContentInventoryEntryType.PLAYED_GAME,
    iU.ContentInventoryEntryType.WATCHED_MEDIA,
    iU.ContentInventoryEntryType.LISTENED_SESSION,
    iU.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var iB = n(844789),
    iV = n(857071),
    iH = n(46054),
    iF = n(731068),
    iz = n(619517),
    iY = n(207133),
    iK = n(132500),
    iW = n(844222),
    iJ = n(463930),
    iq = n(251391),
    iX = n(601255),
    iZ = n(562819),
    i$ = n(234914),
    iQ = n(59318),
    i0 = n(837528),
    i1 = n(754459),
    i2 = n(967144),
    i3 = n(342296),
    i6 = n(696451),
    i5 = n(218394);
function i4(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...s } = e;
    return (0, l.jsx)("svg", {
        ...(0, ib.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, l.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: i,
        }),
    });
}
var i9 = n(717125),
    i7 = n(376943),
    i8 = n(36491),
    le = n(752755),
    lt = n(461715),
    ln = n(381941),
    li = n(531128);
function ll(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        r = s.useRef(null),
        o = s.useRef(null),
        d = (function (e, t) {
            let n = (0, lt.CI)(e),
                i = (0, ip.bG)([i6.Ay, M.default], () => {
                    let e = M.default.getId();
                    return i6.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, ip.bG)(
                    [i9.A],
                    () => null != n && n?.channelId != null && i9.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                r = t.hasFlag(W.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, ip.cf)([le.A, nx.A, D.A, G.default, U.A], () => {
                    let e = le.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = nx.A.getGuild(n?.guildId),
                        i = D.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        r = null != i && (0, i7.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: r,
                    };
                }, [n]),
                h = s.useMemo(() => {
                    let e = (0, lt.tU)({
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
                s.useEffect(() => {
                    n?.threadId != null &&
                        (le.A.getEmbedFetchState(n.threadId) !== le.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && r) ||
                            (0, i8.O0)(n?.threadId));
                }, [n, i, l, r]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, i1.A)(n.id, ln.Fd),
        u = (0, i0.VL)(n, i, c, !0),
        m = nH.kt.useSetting(),
        h = (0, i5.j)(),
        [g, A] = s.useState(!1),
        [f, E] = s.useState(d?.coverImage == null),
        I = (0, ip.bG)([i6.Ay, G.default], () => i6.Ay.isMember(d?.guildId, G.default.getCurrentUser()?.id), [d]),
        C = (0, ip.bG)([i6.Ay], () => (d?.authorId != null ? i6.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, iX.A)(C?.avatarDecoration != null ? C?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = s.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, i2.gn)(C?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: y } = s.useContext(iW.C),
        [S, b] = s.useState(!1),
        k = s.useCallback(() => {
            A(!0);
        }, [A]),
        L = s.useCallback(() => {
            A(!1);
        }, [A]),
        R = s.useCallback(async () => {
            null != d &&
                ((0, nm.zV)(W.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: I,
                }),
                d.canAccess
                    ? (0, np.A)(W.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : I
                      ? (0, np.A)(W.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await nX.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, I]);
    if (null == d) return null;
    let P = (0, w.F_)({ avatarDecoration: v, size: (0, iZ.Te)(tA._3.SIZE_40), canAnimate: S }),
        O = d.user?.getAvatarURL(d.guildId, 40, S);
    function B() {
        y.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, iQ.ge)(V);
    return (0, l.jsxs)("div", {
        className: li.wb,
        children: [
            (0, l.jsxs)("div", {
                className: li.iT,
                onMouseEnter: k,
                onMouseLeave: L,
                children: [
                    !f &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, l.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: a()(li.xn, { [li.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, l.jsx)(i$.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: a()(li.xn, { [li.p6]: d.shouldSpoiler }),
                                  imageChildClassName: li.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, l.jsx)(eR.D, {
                            onClick: R,
                            children: (0, l.jsx)("div", {
                                className: li.nx,
                                children: (0, l.jsxs)("div", {
                                    className: li.BS,
                                    children: [
                                        (0, l.jsx)(i4, { color: nc.A.colors.WHITE.css }),
                                        (0, l.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-overlay-light",
                                            children: d.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: li.iQ,
                children: [
                    (0, l.jsxs)("div", {
                        className: li.OA,
                        children: [
                            (0, l.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: li.hF,
                                children: d.title,
                            }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: a()(li.hF, li.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: li._5,
                        children: [
                            null != d.authorId &&
                                null != O &&
                                (0, l.jsx)(i3.A, {
                                    targetElementRef: o,
                                    userId: d.authorId,
                                    guildId: d.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: d.avatarUrl,
                                    newAnalyticsLocations: [x.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, l.jsx)("div", {
                                            onMouseEnter: B,
                                            onMouseLeave: B,
                                            children: (0, l.jsx)(tp.eu, {
                                                ...e,
                                                ref: o,
                                                size: tA._3.SIZE_40,
                                                src: O,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: P,
                                            }),
                                        }),
                                }),
                            (0, l.jsxs)("div", {
                                className: li.Ny,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: li.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, l.jsx)(iq.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: li.Xg,
                                                }),
                                            (0, l.jsx)(eR.D, {
                                                onClick: R,
                                                className: li.HA,
                                                children: (0, l.jsx)(e5.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: d.channelName ?? d.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != d.authorName &&
                                        (0, l.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: li.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, l.jsx)(iJ.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: T,
                                                                className: li.fh,
                                                            })
                                                          : (0, l.jsx)(
                                                                i3.A,
                                                                {
                                                                    targetElementRef: r,
                                                                    userId: d.authorId,
                                                                    guildId: d.guildId,
                                                                    channelId: i.id,
                                                                    messageId: n.id,
                                                                    roleId: N,
                                                                    avatarUrl: d.avatarUrl,
                                                                    newAnalyticsLocations: [x.A.USERNAME],
                                                                    children: (e) =>
                                                                        (0, l.jsx)(iJ.V, {
                                                                            ...e,
                                                                            ref: r,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: T,
                                                                            className: li.fh,
                                                                        }),
                                                                },
                                                                (0, iK.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, l.jsx)(eg.$, { variant: "primary", onClick: R, text: d.ctaText })
                                : (0, l.jsx)(eg.$, { onClick: R, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ls = n(492230),
    lr = n(68935),
    la = n(704413),
    lo = n(537039),
    ld = n(711038),
    lc = n(892340),
    lu = n(803306),
    lm = n(491182),
    lh = n(639288),
    lg = n(10364),
    lp = n(378570),
    lA = n(138298),
    lx = n(761640),
    lf = n(989349),
    lE = n.n(lf),
    lI = n(606049),
    lC = n(943815),
    lv = n(447215),
    l_ = n(221314),
    lj = n(676043),
    lN = n(281867),
    lT = n(513653);
let ly = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: r, messageId: o, reportedTimestamp: d } = e,
        c = G.default.getUser(t),
        u = s.useMemo(() => (i ? (0, lC.A)((0, nY.i$)(lE()(), "LT")) : null), [i]),
        m = (0, lv.P)({ user: c, channelId: r.id, guildId: n, messageId: o })((0, tE.m2)(c, r)),
        h = null != c ? c.getAvatarURL(n, (0, tA.FT)(tA._3.SIZE_16)) : lT,
        g =
            null != c
                ? J.intl.format(l_.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(l_.default.xpRjfS);
    return (0, l.jsxs)("div", {
        className: a()(lN.NB, lN.JZ, u),
        children: [
            (0, l.jsx)(tp.eu, { src: h, size: tA._3.SIZE_16, className: lj.my, "aria-label": "" }),
            (0, l.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: lj.Xh, children: g }),
            (0, l.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, l.jsx)("span", { className: lj.Ek, children: "\u2022" }),
                    (0, l.jsx)(lI.A, { timestamp: d, className: lj.vE }),
                ],
            }),
        ],
    });
};
var lS = n(204940);
function lb(e) {
    let { message: t, snapshot: n, index: i } = e,
        r = s.useMemo(() => new nJ(t, n, i), [t, n, i]),
        a = (0, c.bG)(
            [D.A, G.default, O.A, te.A, nx.A, nM.A],
            () => r.getForwardInfo(D.A, G.default, O.A, te.A, nx.A, nM.A).footerInfo,
            [r],
            m.A,
        ),
        o = s.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = nx.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.Ay.getCurrentlySelectedChannelId(),
                s = lx.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (lA.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, lp.iN)(i),
                eV.default.track(W.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, l.jsxs)(eR.D, {
              className: lS.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, l.jsx)("img", { className: lS.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, l.jsx)(p.E, {
                      className: lS.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, l.jsx)(nR._, { size: "xxs", color: nc.A.colors.TEXT_MUTED }),
              ],
          });
}
function lk(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: r, reportedTimestamp: a } = e,
        o = (0, tE.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, i1.A)(e.id, ln.Fd),
                { usernameProfile: l, avatarProfile: r } = n,
                a = (0, i0.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, i0.Jo)(r, i),
                onPopoutRequestClose: s.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: r,
            };
        })(t, i);
    return (0, l.jsx)(lm.A, {
        childrenExecutedCommand: (0, l.jsx)(ly, {
            reportingUserId: r,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, l.jsx)(lh.Ay, {
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
            renderPopout: lg.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, l.jsx)(nU.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: lS.iU,
        author: o,
    });
}
function lL(e) {
    let { message: t, snapshot: n, index: i } = e,
        [r, a] = s.useState(void 0);
    s.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lu.getUser)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = s.useMemo(() => {
            let e = (0, n$.A)(t, n);
            return null != r && n?.moderatorReport?.reported_user_id != null ? e.set("author", r) : e;
        }, [t, n, r]),
        d = nH.hD.useSetting(),
        u = nH.rs.useSetting(),
        m = (0, c.bG)([nF.A], () => nF.A.isDeveloper),
        h = (0, nD.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nG.A)(o, {
            hideSimpleEmbedContent: d && u,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        x = (0, c.bG)([D.A], () => D.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, l.jsx)(
              "div",
              {
                  className: lS.kL,
                  children: (0, l.jsxs)("div", {
                      className: lS.Qs,
                      children: [
                          (0, l.jsx)(lk, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nB.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: lS.Mf,
                          }),
                          (0, l.jsx)(lb, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function lR(e) {
    let { message: t } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, l.jsx)(lL, { message: t, snapshot: e, index: n }, n)),
    });
}
var lP = n(302031),
    lM = n(738188),
    lD = n(123292),
    lO = n(239093),
    lU = n(230709);
function lG(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === lO.AT.CLASSIFICATION_ID) ?? void 0,
        s = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === lO.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == s || null == a
        ? null
        : (0, l.jsxs)(eR.D, {
              onClick: function () {
                  null != s &&
                      (0, h.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("19503"),
                              n.e("64643"),
                              n.e("56490"),
                              n.e("61137"),
                              n.e("92030"),
                              n.e("28813"),
                              n.e("29211"),
                          ]).then(n.bind(n, 385430));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  classificationId: s,
                                  source: lO.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: lU.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: lU.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: lU.U1,
                              children: [
                                  (0, l.jsx)(lM.i, { className: lU.QW, color: nc.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, l.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: lU.VU,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: lE()().diff(lE().unix(a), "days") }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: lU.vv,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: lU.xQ,
                      children: (0, l.jsx)(lD.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var lw = n(349288),
    lB = n(393033),
    lV = n(445673);
function lH(e) {
    let { classificationId: t } = e;
    return (0, l.jsx)(lw.Anchor, {
        onClick: function () {
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("19503"),
                    n.e("64643"),
                    n.e("56490"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("28813"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, l.jsx)(e, {
                        classificationId: t,
                        source: lO.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lV.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function lF(e) {
    let { learnMoreLink: t } = e;
    return (0, l.jsx)(lw.Anchor, { className: lV.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function lz(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case lO.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, l.jsx)(lH, { classificationId: n });
        case lO.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, l.jsx)(lF, { learnMoreLink: i });
        default:
            return null;
    }
}
function lY(e) {
    let { iconType: t } = e,
        n = {
            default: (0, l.jsx)(e6.k, { size: "xs", color: nc.A.colors.TEXT_LINK.css }),
            danger: (0, l.jsx)(lM.i, { color: nc.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, l.jsx)("div", { className: lV.Kk, children: n[t] }) : null;
}
function lK(e) {
    let { children: t, theme: n } = e,
        i = { default: lV._y, danger: lV.yk };
    return (0, l.jsx)("div", { className: i[n ?? "default"], children: t });
}
function lW(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lB.f4)(e.embed);
    return null == n
        ? null
        : (0, l.jsxs)(eR.D, {
              className: lV.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: lV.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: lV.U1,
                              children: [
                                  (0, l.jsx)(lY, { iconType: n.icon }),
                                  (0, l.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: lV.VU,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), lE()().diff(lE().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: lV.vv,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(lK, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, l.jsx)(
                              lz,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lJ = n(44724),
    lq = n(50777),
    lX = n(319060),
    lZ = n(812282),
    l$ = n(922016),
    lQ = n(34337),
    l0 = n(240248),
    l1 = n(256449),
    l2 = n(194004),
    l3 = n(148355),
    l6 = n(3026),
    l5 = n(862482),
    l4 = n(847374),
    l9 = n(964486),
    l7 = n(235986),
    l8 = n(624793),
    se = n(562465),
    st = n(639245),
    sn = n(87719),
    si = n(725807),
    sl = n(750385),
    ss = n(850992),
    sr = n(625494),
    sa = n(698279),
    so = n(764112),
    sd = n(241860);
function sc(e) {
    eV.default.track(W.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
        location_section: W.JJy.STICKER_POPOUT,
    }),
        (0, sn.e)();
}
function su(e) {
    let { sticker: t, description: n } = e;
    return (0, l.jsxs)(l7.A, {
        children: [
            (0, l.jsx)(l3.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, l.jsxs)(l7.A, {
                direction: l7.A.Direction.VERTICAL,
                justify: l7.A.Justify.CENTER,
                className: sd.bM,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-md/semibold", children: (0, l.jsx)(l6.A, { children: t.name }) }),
                    null != n && (0, l.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function sm(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: r } = e,
        [a, o, d] = (0, c.yK)(
            [sl.A],
            () => [sl.A.getStickerPack(n.pack_id), !sl.A.hasLoadedStickerPacks, sl.A.isPremiumPack(n.pack_id)],
            [n],
        ),
        u = (function (e) {
            let { sticker: t, stickerPack: n } = e;
            return s.useMemo(
                () =>
                    null == n
                        ? []
                        : n.stickers
                              .slice(0, 4)
                              .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                [t, n],
            );
        })({ sticker: n, stickerPack: a });
    (0, l1.Sr)(n.pack_id);
    let m = (0, l1.pD)(i),
        h = { refreshPositionKey: r, channel: i },
        g = s.useRef(h);
    return (s.useEffect(() => {
        g.current = h;
    }),
    s.useEffect(() => {
        let { refreshPositionKey: e } = g.current;
        e();
    }, [o]),
    s.useEffect(() => {
        let { channel: e } = g.current;
        eV.default.track(W.HAw.OPEN_POPOUT, {
            type: W.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nm.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, l.jsx)(lQ.Y0, { className: so.v0 })
        : (0, l.jsxs)(lQ.Uq, {
              className: so.Bm,
              children: [
                  (0, l.jsx)(e5.D, { variant: "heading-md/semibold", children: n.name }),
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/normal",
                      children: d
                          ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                          : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                  }),
                  (0, l.jsx)("ul", {
                      className: so.pQ,
                      children: u.map((e) => (0, l.jsx)(l3.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                  }),
                  d &&
                      (0, l.jsx)("div", {
                          className: so.j0,
                          children: (0, l.jsx)(
                              eg.$,
                              {
                                  variant: "secondary",
                                  size: "sm",
                                  text: J.intl.string(J.t.GPy3Ar),
                                  onClick: function () {
                                      null != a &&
                                          (d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sr._.dispatchToLastSubscribed(W.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sa.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && ss.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: a, stickerPickerCategories: m }),
                                          t());
                                  },
                              },
                              "view-sticker-pack",
                          ),
                      }),
              ],
          });
}
function sh(e) {
    let t,
        { sticker: n, channel: i, closePopout: r, refreshPositionKey: o } = e,
        [d, u] = s.useState(null),
        [m, h] = s.useState(!1),
        g = G.default.getCurrentUser(),
        A = tV.Ay.canUseCustomStickersEverywhere(g),
        x = (0, c.bG)([nx.A], () => nx.A.getGuild(n.guild_id)),
        f = null != x,
        [E, I] = s.useState(!1),
        [C, v] = s.useState(null),
        _ = s.useMemo(
            () => ({
                page: null != i.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
                section: W.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: j } = s.useRef({ guild_id: i.getGuildId(), ...(0, nm.dI)(i) }),
        N = { stickerSourceGuild: x, refreshPositionKey: o },
        T = s.useRef(N);
    s.useEffect(() => {
        T.current = N;
    }),
        s.useEffect(() => {
            let { stickerSourceGuild: e } = T.current;
            !(async function () {
                if (null == e || e.features.has(W.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    u(
                        await ((t = n.id),
                        se.Bo.get({ url: W.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, nX.jE)(e.body) : null))
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
                      sc(i), r();
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let L = !b && !f && S && A;
    return (s.useEffect(() => {
        let { refreshPositionKey: e } = T.current;
        e();
    }, [m, d]),
    (0, l9.Ay)(() => {
        eV.default.track(W.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, l.jsxs)(lQ.Uq, {
              className: sd.Bm,
              children: [
                  (function () {
                      async function e() {
                          if (null == d || f) return;
                          r();
                          let e = d.id;
                          try {
                              await nq.A.joinGuild(e), nq.A.transitionToGuildSync(e);
                          } catch {}
                      }
                      return (0, l.jsxs)("div", {
                          className: sd.gH,
                          children: [
                              (0, l.jsx)(su, { description: t, sticker: n }),
                              b &&
                                  (0, l.jsx)(si.A, {
                                      className: sd.lI,
                                      subscriptionTier: ni.pe.TIER_2,
                                      size: l5.$n.Sizes.SMALL,
                                      fullWidth: !0,
                                      textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                      onSubscribeModalClose: (t) => (t ? e() : r()),
                                      postSuccessGuild: f || null == d ? void 0 : d,
                                      premiumModalAnalyticsLocation: _,
                                  }),
                              L &&
                                  (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: sd.lI,
                                      children: (0, l.jsx)(eg.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: J.intl.string(J.t.riu2R5),
                                          fullWidth: !0,
                                          onClick: e,
                                      }),
                                  }),
                          ],
                      });
                  })(),
                  (null != x || null != d) &&
                      (function () {
                          if (!S && !f) return;
                          let e = (d?.stickers ?? [])
                                  .slice(0, 13)
                                  .filter((e) => e.id !== n.id)
                                  .slice(0, 12),
                              t = null != d ? l8.GO.createFromDiscoverableGuild(d) : l8.GO.createFromGuildRecord(x);
                          return (0, l.jsxs)("div", {
                              className: sd.tl,
                              children: [
                                  (0, l.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: sd.YW,
                                      children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
                                  }),
                                  (0, l.jsx)(st.G7, {
                                      expressionSourceGuild: t,
                                      hasJoinedExpressionSourceGuild: f,
                                      isDisplayingJoinGuildButtonInPopout: L,
                                      closePopout: r,
                                  }),
                                  !f &&
                                      (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(eR.D, {
                                                  onClick: function () {
                                                      o(), I(!E);
                                                  },
                                                  className: sd.wK,
                                                  children: (0, l.jsxs)(l7.A, {
                                                      children: [
                                                          (0, l.jsx)(p.E, {
                                                              className: sd.__invalid_showMoreEmojisLabel,
                                                              variant: "text-xs/normal",
                                                              color: "none",
                                                              children: J.intl.string(J.t.vtH5hn),
                                                          }),
                                                          (0, l.jsx)(l4.a, {
                                                              size: "md",
                                                              color: "currentColor",
                                                              className: a()(sd.ZB, { [sd.cP]: !E }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              E &&
                                                  (0, l.jsx)(l7.A, {
                                                      wrap: l7.A.Wrap.WRAP,
                                                      align: l7.A.Align.START,
                                                      justify: l7.A.Justify.START,
                                                      className: sd.LX,
                                                      children: e.map((e) =>
                                                          (0, l.jsx)(
                                                              it.m,
                                                              {
                                                                  text: e.name,
                                                                  ...lQ.Uk,
                                                                  children: (0, l.jsx)(
                                                                      "div",
                                                                      {
                                                                          className: a()(sd.Th, {
                                                                              [so.vT]: null != C && C !== e.id,
                                                                          }),
                                                                          onMouseEnter: () => {
                                                                              v(e.id);
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              v(null);
                                                                          },
                                                                          children: (0, l.jsx)(l3.A, {
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
          })
        : (0, l.jsx)(lQ.Y0, { className: so.v0 });
}
function sg(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, l.jsx)(lQ.Uq, {
        className: so.Bm,
        children: (0, l.jsx)(su, {
            sticker: i,
            description: J.intl.format(J.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sc(t);
                },
            }),
        }),
    });
}
let sp = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: s } = e,
        [r, a] = (0, l1.Zq)(t, !0);
    return null != r && (0, lr.FD)(r)
        ? (0, l.jsx)(sm, { sticker: r, closePopout: i, channel: n, refreshPositionKey: s })
        : null != r && (0, lr.Xw)(r)
          ? (0, l.jsx)(sh, { sticker: r, channel: n, closePopout: i, refreshPositionKey: s })
          : a
            ? (0, l.jsx)(sg, { channel: n, closePopout: i, sticker: t })
            : (0, l.jsx)(lQ.Y0, {});
};
var sA = n(677385);
let sx = (0, l0.xI)(lX.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sf = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            r = s.useRef(null),
            [a, o] = s.useState(!0),
            [d, c] = s.useState(String(Date.now())),
            [u] = (0, l1.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, l.jsxs)("span", {
                className: sA.Zl,
                children: [(0, l.jsx)(lZ.s, { size: "xs", color: "currentColor", className: sA.lA }), (u ?? t).name],
            });
        return (0, l.jsx)(f.f5, {
            value: m,
            children: (0, l.jsx)("div", {
                className: sA.be,
                children: (0, l.jsx)(l$.Y, {
                    align: "center",
                    animation: l$.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, l.jsx)(sp, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: r,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, l.jsx)(it.m, {
                            ...lQ.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, lQ.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nm.Ay.trackWithMetadata(W.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: ni.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, l2.Tw)(e.format_type),
                                        is_custom: (0, l2.zN)(e.type),
                                    });
                            },
                            children: (0, l.jsx)(eR.D, {
                                innerRef: r,
                                className: sA.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, l.jsx)(l3.A, { isInteracting: i, size: sx, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sE = n(406704),
    sI = n(531142),
    sC = n(140735),
    sv = n(442433),
    s_ = n(143413),
    sj = n(935208),
    sN = n(321045),
    sT = n(456874),
    sy = n(707539),
    sS = n(80682),
    sb = n(521981),
    sk = n(805964),
    sL = n(943220),
    sR = n(288254),
    sP = n(838541);
function sM(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: r } = (0, c.cf)(
            [O.A],
            () => ({ isBlocked: O.A.isBlockedForMessage(t), isIgnored: O.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = s.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sS.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = s.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, sb.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        d = (0, sR.IL)(n);
    return (0, l.jsxs)("div", {
        className: lN.up,
        children: [
            (0, l.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: lN.FJ }),
            (0, l.jsx)(sL.A, { message: t, channel: n, compact: !0 }),
            (0, l.jsx)("div", {
                className: lN.Au,
                children: d
                    ? (0, l.jsx)("span", { className: lN.dp, children: J.intl.string(J.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: s,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, sk.o)(e, t, n, i, lN.tP, {
                              trailingIconClass: lN._v,
                              leadingIconClass: lN.a5,
                              iconSize: sP.eJ,
                          });
                          return (0, l.jsxs)(l.Fragment, {
                              children: [a, r ?? (0, l.jsx)("span", { className: lN.dp, children: s }), o],
                          });
                      })(t, o, i, r),
            }),
        ],
    });
}
var sD = n(747926),
    sO = n(650583),
    sU = n(519807);
function sG(e) {
    let { message: t, compact: n } = e,
        i = (0, c.bG)([D.A], () => D.A.getChannel(sj.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, l.jsx)(sw, { channel: i, compact: n, isSystemMessage: (0, s_.A)(t) });
}
function sw(e) {
    var t;
    let i,
        s,
        r,
        { channel: o, compact: d, isSystemMessage: u } = e,
        m = (0, nz.Ay)(o),
        h = (0, c.bG)([sT.A], () => sT.A.getCount(o.id)),
        g =
            ((t = o),
            (i = (0, c.bG)([sT.A], () => sT.A.getMostRecentMessage(t.id))),
            (s = (0, c.bG)([sT.A], () => sT.A.getCount(t.id))),
            (r = (0, sy.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == s || 0 === s
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, l.jsx)("span", { className: sU.vE, children: (0, sy.aK)(r) }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(sM, { message: i, channel: t }),
                              (0, l.jsx)("span", { className: sU.vE, children: (0, sy.aK)(r) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: a()(sU.GI, { [sU.E]: !d, [sU.E_]: u }) }),
            (0, l.jsx)(eR.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sD.JA)(o, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sO.dh.SPACE || e.key === sO.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sD.JA)(o, n));
                },
                onContextMenu: function (e) {
                    (0, sv.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("91763"),
                            n.e("38730"),
                            n.e("47502"),
                            n.e("3998"),
                            n.e("43266"),
                            n.e("91671"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("96804"),
                            n.e("21106"),
                            n.e("21060"),
                            n.e("90434"),
                            n.e("99011"),
                            n.e("65200"),
                            n.e("85802"),
                            n.e("26250"),
                            n.e("51212"),
                            n.e("84615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, l.jsx)(e, { channel: o, ...t });
                    });
                },
                "aria-roledescription": J.intl.string(J.t["8ipxiY"]),
                className: a()(sU.kL, { [sU.og]: u }),
                children: (0, l.jsxs)(sI.R, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: sU.kq,
                            children: [
                                (0, l.jsx)(sC.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: sU.UU,
                                    children: m,
                                }),
                                (0, l.jsx)("span", {
                                    className: sU.lO,
                                    "aria-hidden": !A,
                                    children: (0, sN.ub)(h, o.id),
                                }),
                            ],
                        }),
                        (0, l.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sU.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sB = n(383233),
    sV = n(834942),
    sH = n(644447),
    sF = n(659674),
    sz = n(998218),
    sY = n(5095),
    sK = n(294520),
    sW = n(320095),
    sJ = n(863439),
    sq = n(707985),
    sX = n(730852),
    sZ = n(265422),
    s$ = n(986268);
function sQ(e) {
    let { guild: t, channel: n, message: i } = e,
        r = U.A.getGuildId(),
        a = ed.Ay.getChannelId(r),
        o = s.useCallback(() => {
            eV.default.track(W.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: r,
                channel_id: a,
            }),
                (0, sZ.i)(t.id, n.id),
                sX.default.selectVoiceChannel(n.id);
        }, [i, t, n, r, a]),
        d = (0, l.jsx)(iA.A.Channel, { channel: n });
    return (0, l.jsx)(iA.A, {
        children: (0, l.jsxs)(iA.A.Body, {
            children: [
                (0, l.jsxs)("div", {
                    className: iM.iH,
                    children: [
                        (0, l.jsx)(iA.A.Icon, { guild: t }),
                        (0, l.jsx)(iA.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, l.jsxs)("span", {
                                className: iM.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, l.jsx)("span", {
                                        className: iM.E3,
                                        children: (0, l.jsx)(s$.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: iM.UD,
                    children: (0, l.jsx)(eg.$, {
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
function s0(e) {
    let { code: t, message: n } = e,
        [i, s] = t.split("/"),
        r = D.A.getChannel(s),
        a = nx.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && te.A.can(W.xBc.VIEW_CHANNEL, r) && te.A.can(W.xBc.CONNECT, r)
        ? (0, l.jsx)(sQ, { guild: a, channel: r, message: n })
        : null;
}
var s1 = n(789645),
    s2 = n(298236),
    s3 = n(953756),
    s6 = n(564107),
    s5 = n(257212),
    s4 = n(616245);
function s9(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: s,
            getOnMediaItemContextMenu: r,
            shouldHideMediaOptions: o,
            enabledContentHarmTypeFlags: d,
            onSuppressEmbed: c,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, s3.zn)();
    return 0 === t.length
        ? null
        : (0, l.jsx)(s6.N, {
              gifAutoPlay: i,
              getGifFavButton: s,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: o,
              enabledContentHarmTypeFlags: d,
              children: (0, l.jsx)(s2.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, l.jsx)(s3.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, l.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, l.jsx)(s3.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, l.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: a()(s5.O0, s4.k, s4.z, { [s5.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, l.jsx)(eR.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: s5.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, l.jsx)(s1.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, iB.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var s7 = n(451988),
    s8 = n(261958),
    re = n(212245),
    rt = n(775602),
    rn = n(62583),
    ri = n(956549),
    rl = n(550151),
    rs = n(392054),
    rr = n(853390),
    ra = n(290863),
    ro = n(403362),
    rd = n(811024),
    rc = n(360469),
    ru = n(522698);
let rm = s.memo((e) => {
    let { start: t } = e,
        [n, i] = s.useState(0),
        l = (0, i5.j)(),
        r = (0, c.bG)([rt.Ay], () => rt.Ay.useReducedMotion),
        a = !1 === l || r;
    return (
        s.useEffect(() => {
            let e = new s7.IX();
            return (
                e.start(a ? 15 * t6.A.Millis.SECOND : t6.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / t6.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, rr.fU)(n)
    );
});
rm.displayName = "ActivityRuntimeCounter";
let rh = s.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: r, message: o } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        u = (0, re.p)(),
        m = (0, c.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, c.bG)([M.default], () => M.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: E,
            activityLaunchState: I,
        } = (0, c.cf)(
            [ec.Ay],
            () => ({
                embeddedActivity: ec.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: ec.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: ec.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        C = A?.userIds,
        v = (0, c.yK)(
            [G.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(ro.Vq),
            [C],
        ),
        _ = (0, c.bG)([ra.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = ra.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        j = _?.details,
        N = s.useMemo(() => {
            let e = new ix.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rc.Gl), e;
        }, [n]),
        T = (0, rl.vG)({ userId: g, channelId: i, application: N }),
        y = null == A,
        S = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return s.useMemo(
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
                            a = (0, rd.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== rl.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case rl.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case rl.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case rl.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case rl.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case rl.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case rl.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case rl.Gy.NO_CHANNEL:
                                case rl.Gy.NO_GUILD:
                                case rl.Gy.NO_USER:
                                case rl.Gy.IS_AFK_CHANNEL:
                                    e = J.intl.string(J.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: A, joinability: T, currentEmbeddedActivity: E, channel: m }),
        b = s.useId(),
        k = null != I && I.isLaunching && I.componentId === b;
    async function L() {
        eV.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: y,
            cta: "Play",
        }),
            y
                ? await (0, ri.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: u.location,
                      analyticsLocations: d,
                      componentId: b,
                      commandOrigin: rs.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, rn.A)({
                      applicationId: A.applicationId,
                      activityChannelId: i,
                      locationObject: u.location,
                      analyticsLocations: d,
                      componentId: b,
                  });
    }
    let R = S.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        P = (0, ee.F)(N, () => {
            eV.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
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
                    return { text: J.intl.formatToPlainString(J.t["2l8yka"], { count: n }), Icon: z.T };
                default:
                    return { text: J.intl.formatToPlainString(J.t.yJj035, { count: n }), Icon: Y._ };
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
    return (0, l.jsx)(H.h, {
        header: J.intl.string(J.t.pkq6Vq),
        title: n.name,
        iconSrc: O,
        info: (0, l.jsx)("div", {
            className: ru.QR,
            children: y
                ? (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: R })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != j &&
                              (0, l.jsxs)("div", {
                                  className: ru.oL,
                                  children: [
                                      null != B &&
                                          (0, l.jsxs)("div", {
                                              className: ru.DT,
                                              children: [
                                                  (0, l.jsx)("div", {
                                                      className: ru.y9,
                                                      children: (0, l.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, l.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, l.jsx)(rm, { start: B }),
                                                  }),
                                              ],
                                          }),
                                      (0, l.jsxs)("div", {
                                          className: a()(ru.DT, ru.PK),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  children: (0, l.jsx)(s8.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, l.jsx)(p.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          U > 0 && (0, l.jsx)(X, { activityUsers: v, guildId: r, activityText: V.text }),
                      ],
                  }),
        }),
        actions: K,
        onClickContent: P,
        trackingConfig: {
            id: n.id,
            linkType: et.J.ACTIVITY_INSTANCE,
            guildId: r,
            channelId: i,
            messageId: o.id,
            isDeadEnd: y,
        },
    });
});
var rg = n(164664),
    rp = n(439401),
    rA = n(657044),
    rx = n(863574),
    rf = n(707606),
    rE = n(456412),
    rI = n(429913),
    rC = n(242874),
    rv = n(499454),
    r_ = n(165191),
    rj = n(928550),
    rN = n(976860),
    rT = n(871123),
    ry = n(317560),
    rS = n(30793),
    rb = n(189081);
function rk(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, l.jsx)("svg", {
        ...(0, ib.A)(i),
        viewBox: "0 0 136 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsxs)("g", {
            className: n,
            fill: t,
            children: [
                (0, l.jsx)("path", {
                    d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
                    fill: t,
                }),
                (0, l.jsx)("path", {
                    d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
                    fill: t,
                }),
            ],
        }),
    });
}
var rL = n(738533),
    rR = n(45938),
    rP = n(615396),
    rM = n(427262),
    rD = n(936504),
    rO = n(820284),
    rU = n(674378),
    rG = n(598429),
    rw = n(979604);
function rB(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: s,
            disabledVariant: r,
            hideNotLaunchable: a,
            tooltipPosition: o,
            onClick: d,
            className: u,
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
            className: u,
            hover: h,
            innerClassName: g,
        },
        A = (0, c.bG)([rb.A], () => rb.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, c.bG)([ew.A], () => null != f && !ew.A.didFetchingSkuFail(f));
    return null != A && (0, rU.XZ)(A)
        ? (0, l.jsx)(rw.A, { ...p, playButtonVariant: s, libraryApplication: A, source: m })
        : E
          ? (0, l.jsx)("div", { children: "deprecated!" })
          : (0, l.jsx)(rG.A, { ...p, variant: s, hideNotLaunchable: a, applicationId: t.id });
}
function rV(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, tH.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var rH = n(558215),
    rF =
        (((i = rF || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
function rz(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: a()(rH.nM, t),
        children: [
            (0, l.jsx)(rA._, { size: "md", color: "currentColor", className: rH.Kk }),
            J.intl.string(J.t["7eicAO"]),
        ],
    });
}
function rY(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: a()(rH.nM, n),
        children: [(0, l.jsx)(tg.t, { size: "md", color: "currentColor", className: rH.Kk }), rV(t)],
    });
}
function rK(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: a()(rH.EQ, n), children: t.getDisplaySalePercentage() });
}
function rW(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: a()(rH.I8, n), children: rV(t, !1) });
}
function rJ(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: n, children: rV(t) });
}
function rq(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: a()(rH.nM, n),
        children: [(0, l.jsx)(rK, { sku: t }), (0, l.jsx)(rW, { sku: t }), (0, l.jsx)(rJ, { sku: t })],
    });
}
function rX(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
}
class rZ extends s.PureComponent {
    static Types = rF;
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
                return (0, l.jsx)(rX, { className: a()(t, n) });
            case 1:
                return (0, l.jsx)(rz, { className: a()(t, n) });
            case 3:
                return (0, l.jsx)(rY, { sku: i, className: a()(t, n) });
            case 2:
                return (0, l.jsx)(rq, { sku: i, className: a()(t, n) });
            default:
                return (0, l.jsx)(rJ, { className: a()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(rX, { className: t });
            case 3:
                return (0, l.jsx)(rY, { sku: n, className: a()(rH.OB, t) });
            case 2:
                return (0, l.jsx)(rq, { sku: n, className: a()(rH.dk, t) });
            default:
                return (0, l.jsx)(rJ, { className: a()(rH.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(rX, {});
                break;
            case 2:
                t = (0, l.jsxs)(s.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: rH.nM,
                            children: [(0, l.jsx)(rJ, { sku: i }), (0, l.jsx)(rK, { sku: i })],
                        }),
                        (0, l.jsx)(rW, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(rJ, { sku: i });
        }
        return (0, l.jsx)("div", { className: a()(rH.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rH.Pl);
            case 3:
                return this.renderGeneric(e, rH.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rH.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var r$ = n(79231);
let rQ = {
    [W.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, ib.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t["0/xHFO"]),
    },
    [W.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, ib.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t.E4u4n5),
    },
    [W.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, ib.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => J.intl.string(J.t.tcawo3),
    },
};
function r0(e) {
    let { operatingSystem: t, className: n } = e,
        i = rQ[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let s = i.icon;
    return (0, l.jsx)(it.m, { text: i.getLabel(), children: (0, l.jsx)(s, { className: n }) });
}
function r1(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, l.jsx)("div", {
        className: a()(r$.I, n),
        children: t.map((e) => (0, l.jsx)(r0, { operatingSystem: e, className: a()(r$.A, i) }, e)),
    });
}
var r2 = n(916214);
let r3 = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: a()(r2.T, t),
        children: (0, l.jsx)("span", { className: r2.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var r6 = n(752073);
let r5 = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: a()(r6.T, t),
        children: (0, l.jsx)("span", { className: r6.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var r4 = n(615300),
    r9 = n(868285),
    r7 = n(358618),
    r8 = n(983851),
    ae = n(133296),
    at = n(607470),
    an = n(581147);
class ai extends s.Component {
    _animatedValue = new r4.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), r4.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        r4.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, l.jsx)(r4.A.img, {
            className: a()({ [an.YC]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: s } = this.state;
        return null == n || i
            ? (0, l.jsx)(r4.A.div, { className: a()(an.gn, e), style: this.getImageStyle(), children: t })
            : (0, l.jsxs)(r4.A.div, {
                  className: a()(s ? an.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      s
                          ? (0, l.jsx)(tU.y, {
                                className: an.u1,
                                itemClassName: an.$N,
                                type: tU.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class al extends s.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = s.createRef();
    videoTimeout = new s7.Ep();
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
                playing: r,
                muted: o,
                splashClassName: d,
                splashPlaceholderClassName: c,
                renderMediaOverlay: u,
            } = this.props,
            m = o ? r7._ : r8.H;
        return (0, l.jsxs)(s.Fragment, {
            children: [
                ig.Fr
                    ? null
                    : (0, l.jsx)(at.A, {
                          className: a()(an.Yi, d),
                          muted: o,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, l.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, l.jsx)(r9.F, {
                    children: r && e ? null : (0, l.jsx)(ai, { className: a()(an.NB, c), src: n, title: i }, 0),
                }),
                (0, l.jsx)(eR.D, {
                    className: a()(an.b4, { [an.HY]: r && e, [an.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: r && e ? (0, l.jsx)(m, { className: an.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: i, splashClassName: s } = this.props,
            { currentIndex: r } = this.state;
        return i
            ? (0, l.jsx)(ai, { className: a()(an.Yi, s), src: e[r], title: n }, r)
            : (0, l.jsx)(ai, { className: a()(an.Yi, s), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: s } = this.props;
        return null == t
            ? (0, l.jsx)(ai, { className: a()(an.Yi, s), src: n, title: i }, "image")
            : (0, l.jsx)(ae.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: an.mZ,
                  disable: !e,
                  children: (0, l.jsx)(r9.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: s } = this.props,
            { videoLoadError: r, videoLoaded: o } = this.state;
        return n
            ? (0, l.jsx)("div", { className: t })
            : (0, l.jsxs)("figure", {
                  className: a()(an.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(s && o)],
              });
    }
}
var as = n(366523),
    ar = n(371794),
    aa = n(622413),
    ao = n(107120);
class ad extends s.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: s } = this.props,
            r = (s || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, l.jsxs)("div", {
                  className: ao.ED,
                  children: [
                      (0, l.jsx)(rZ, {
                          type: rZ.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? ao.ae : ao.Ek,
                      }),
                      (0, l.jsx)(r1, { systems: [W.uje.WINDOWS], className: ao.iD }),
                      r ? (0, l.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: i,
            sku: r,
            isHorizontal: o,
            storeListing: d,
        } = this.props;
        return (0, rT.bF)(r)
            ? (0, l.jsx)(as.e, {
                  sku: r,
                  shape: "custom",
                  containerClassName: ao.A$,
                  backgroundImageClassName: ao.iZ,
                  foregroundImageClassName: ao.O7,
              })
            : (0, l.jsxs)(s.Fragment, {
                  children: [
                      (0, l.jsx)(al, {
                          className: a()(ao.H1, { [ao.ZC]: o }),
                          video: null != d.previewVideo ? (0, ar.YE)(r.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, ar.YE)(r.applicationId, d.thumbnail, 600) : void 0,
                          title: r.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ao.ZI,
                          splashPlaceholderClassName: ao.NB,
                      }),
                      r.exclusive
                          ? (0, l.jsx)(r5, { className: a()(ao.LJ, { [ao.V9]: e }) })
                          : r.isTheGameAwardsWinner
                            ? (0, l.jsx)(r3, { className: a()(ao.LJ, { [ao.V9]: e }) })
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
                renderCustomTagline: s,
                renderCustomTitle: r,
                renderCustomMedia: a,
                isEmbed: o,
            } = this.props,
            d = o ? rx.ug : aa.A;
        return (0, l.jsx)(d, {
            className: i,
            renderMedia: null != a ? a : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ac = n(587895),
    au = n(549681);
class am extends s.Component {
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
        (null == e || null == n) && (0, eM.QB)(t);
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
        return (0, l.jsx)("div", {
            className: au.h,
            children: (0, l.jsx)(eg.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, rN.pX)(W.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: s, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > rx.Tm;
        return (0, l.jsx)(ad, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: s,
            renderCustomTagline: r,
            renderCustomMedia: a,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: s, renderCustomActions: r } = this.props;
        if (null != r) return (0, l.jsx)("div", { className: au.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != s && s.hasFlag(W.hM6.HIDDEN);
        return (0, l.jsxs)("div", {
            className: au.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, l.jsx)(rB, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: au.h,
                          source: W.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, l.jsx)(rZ, { type: rZ.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: s } = this.props,
            r = n > rx.Tm;
        return null == e || null == t
            ? i
                ? s()
                : (0, l.jsx)(rx.Wb, { isHorizontal: r })
            : e.productLine === W.EZt.PREMIUM
              ? (0, l.jsx)(rO.A, {
                    section: W.JJy.APPLICATION_EMBED,
                    children: (0, l.jsx)(rD.N_, {
                        onClick: this.handleLinkClick,
                        to: W.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, l.jsx)(rO.A, { section: W.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let ah = [ew.A, rb.A, eB.A];
function ag(e) {
    let { skuId: t } = e,
        n = ew.A.get(t),
        i = null != n ? ac.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: ew.A.didFetchingSkuFail(t),
        inLibrary: null != n && rb.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eB.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rb.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let ap = (0, rE.A)((0, rf.A)(am)),
    aA = c.Ay.connectStores(ah, ag)(ap),
    ax = (0, rf.A)(c.Ay.connectStores(ah, ag)(am));
var af = n(362483);
function aE(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, l.jsxs)(eR.D, {
        className: af.kP,
        onClick: t,
        children: [
            (0, l.jsx)(rA._, { size: "md", color: "currentColor", className: af.dy }),
            (0, l.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class aI extends s.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rx.Tm;
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
            ? (0, l.jsx)(eg.$, {
                  variant: "primary",
                  size: "sm",
                  text: J.intl.string(J.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, l.jsx)(eg.$, { variant: "primary", size: "sm", text: J.intl.string(J.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? J.intl.string(J.t.QXgO5w)
            : this.props.isSelfGift
              ? J.intl.string(J.t.eEM3dq)
              : J.intl.string(J.t.tB8S6u);
    render() {
        return (0, l.jsx)(rx.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class aC extends s.Component {
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
                ? (0, rN.pX)(W.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rN.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, eC.openUserSettings)(eI.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eV.default.track(W.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: W.ZSU.BUTTON_CTA },
            });
        let r = l !== W.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rv.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eV.default.track(W.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rL.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rT.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, ry.R)({
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
        return (0, l.jsxs)(l7.A, {
            justify: l7.A.Justify.BETWEEN,
            children: [
                (0, l.jsxs)(l7.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, l.jsx)(aE, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, l.jsxs)(l7.A, {
                    align: l7.A.Align.END,
                    justify: l7.A.Justify.END,
                    className: af.yu,
                    direction: l7.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, l.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, l.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(lE()(), "h") }),
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
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: s } = this.props;
        if (s)
            return (0, l.jsx)("div", {
                children: (0, l.jsx)(eg.$, {
                    variant: "primary",
                    size: "sm",
                    text: J.intl.string(J.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tV.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, l.jsx)("div", {
            className: (0, tK.hU)(e) ? af.UQ : void 0,
            children: (0, l.jsx)(eg.$, {
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
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: rM.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rT.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, tK.hU)(e) || (0, rT.bF)(i)
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
                    ? J.intl.format(J.t.l3VxgG, { username: rM.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: rM.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === ni.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: rM.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === ni.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: rM.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = ni.Wx.includes(e.giftStyle),
            i = a()(af.gB, { [af.El]: n, [af.by]: t >= rx.Tm }),
            s = a()({ [af.gc]: n, [af.Ei]: n && t >= rx.Tm, [af.ww]: !n, [af.wy]: !n && t >= rx.Tm });
        return (0, l.jsxs)("div", {
            className: i,
            children: [
                n && (0, l.jsx)(rk, { className: af.nr }),
                null != e.giftStyle &&
                    (0, l.jsx)(r_.A, {
                        defaultAnimationState: e.redeemed ? rC.oA.LOOP : rC.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: s,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, l.jsx)(eg.$, {
            variant: "primary",
            size: "sm",
            text: J.intl.string(J.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rT.bF)(n);
        return (0, l.jsx)(ax, {
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
        let { giftCode: e, resolved: t, resolveErrorCode: n, width: i, isSelfGift: s } = this.props;
        if (null != e && null != e.promotion)
            return (0, l.jsx)(ax, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: W.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, l.jsx)(aI, { isSelfGift: s, width: i, resolveErrorCode: n });
            else return (0, l.jsx)(rx.Wb, { isHorizontal: i >= rx.Tm });
        return (0, tK.hU)(e)
            ? (0, l.jsx)("div", { className: af.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let av = (0, rE.A)((0, rf.A)(aC)),
    a_ = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: s,
                resolveErrorCode: r,
            } = (0, c.cf)([rS.A], () => {
                let e = rS.A.getError(t);
                return { giftCode: rS.A.get(t), resolved: rS.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, c.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, c.bG)([ew.A], () => (null != i ? ew.A.get(i.skuId) : null)),
            d = (0, c.bG)([rb.A], () =>
                null != o && i?.entitlementBranches != null ? rR.YI(i.entitlementBranches, o, rb.A) : null,
            ),
            u = (0, rI.h)(o?.applicationId),
            m = null != o && (0, rT.bF)(o) && i?.redeemed === !0,
            [h] = (0, rj.L)(m ? u?.id : null),
            g = (0, rP.zz)(i?.subscriptionPlanId),
            p = (0, c.bG)([M.default], () => (null != i ? M.default.getId() === i.userId : M.default.getId() === n.id));
        return (0, l.jsx)(av, {
            ...e,
            skuApplication: u,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: s,
            resolveErrorCode: r,
            gifter: a,
            libraryApplication: d,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: p,
        });
    };
var aj = n(376728),
    aN = n(107123),
    aT = n(698441),
    ay = n(427080),
    aS = n(346542),
    ab = n(665066),
    ak = n(95701),
    aL = n(299091),
    aR = n(860689);
let aP = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aM(e) {
    let { guildId: t, location: n } = e;
    return aP.getCurrentConfig({ guildId: t, location: n });
}
function aD() {
    return (0, l.jsxs)(iA.A, {
        children: [
            (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, l.jsx)(iA.A.Body, { resolving: !0 }),
        ],
    });
}
var aO = n(172799),
    aU = n(666327);
function aG(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, l.jsxs)(
                    "div",
                    {
                        className: aU.MY,
                        children: [
                            (0, l.jsx)("i", { className: aU.QD }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aU.U9,
                                color: i,
                                children: J.intl.format(J.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            s.push(
                (0, l.jsxs)(
                    "div",
                    {
                        className: aU.MY,
                        children: [
                            (0, l.jsx)("i", { className: aU.o6 }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aU.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, l.jsx)("div", { className: aU.rc, children: s })
    );
}
function aw(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: s } = e,
        r = (0, nz.Ay)(t);
    if (null != t && null != n) {
        let e = (0, nP.gU)(t, n);
        return (0, l.jsxs)("div", {
            className: a()(aU.Ix, { [aU.v6]: i }),
            children: [
                null != e ? (0, l.jsx)(e, { className: aU.p, size: "xs", color: "currentColor" }) : null,
                (0, l.jsx)(l6.A, {
                    children: (0, l.jsx)(p.E, {
                        variant: "text-xs/normal",
                        color: s,
                        children: J.intl.format(J.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, l.jsx)("div", {
              className: a()(aU.Ix, { [aU.v6]: i }),
              children: (0, l.jsx)(l6.A, {
                  children: (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: s,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aB(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: s, target_application: r } = t;
    ej()(s === aO.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, c.bG)([D.A], () => D.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, l.jsx)(e0.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, l.jsx)(aV, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function aV(e) {
    let t,
        n,
        { invite: i, message: r, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: u, approximate_presence_count: m, target_application: h } = i;
    ej()(null != h, "invalid application invite");
    let g = s.useCallback(() => {
            eV.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, c.bG)([nx.A], () => (null != i.guild ? nx.A.getGuild(i.guild.id) : null), [i]),
        A = (0, c.bG)(
            [ec.Ay],
            () => i?.channel != null && ec.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        E = (0, c.bG)([ec.Ay], () =>
            (i.channel?.id != null ? ec.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        I = (0, c.bG)([te.A], () => null != d && te.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED),
        v = (0, c.yK)(
            [ec.Ay],
            () =>
                null != d
                    ? ec.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, c.yK)([G.default], () => v.map((e) => G.default.getUser(e)).filter((e) => null != e), [v]),
        j = s.useCallback(() => {
            (0, aj.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: r.author.id,
                    invite_message_id: r.id,
                    invite_instance_id: (0, iO._U)(i.code, r.id),
                },
                C,
            ),
                aj.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: C,
                });
        }, [i, r, C, a]),
        N = i.state === W.elq.ACCEPTING,
        T = null != p;
    if (null == p) {
        if (null == i.guild) return (0, l.jsx)(aD, {});
        p = (0, aR.DY)(i.guild);
    }
    t = T
        ? A
            ? J.intl.string(J.t.DPfdsq)
            : E
              ? J.intl.string(J.t.sqe0hj)
              : J.intl.string(J.t.RscU7I)
        : J.intl.string(J.t["2BP08E"]);
    let y = (T && !I) || (T && A);
    return (I || (n = J.intl.string(J.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, l.jsx)(f.f5, {
              value: C,
              children: (0, l.jsx)(aH, {
                  app: o,
                  activityUsers: _,
                  isMember: T,
                  channel: d,
                  guild: p,
                  message: r,
                  members: u,
                  membersOnline: m,
                  isActivityActive: E,
                  submitting: N,
                  buttonLabel: t,
                  disabled: y,
                  disabledReason: n,
                  handleAcceptInvite: j,
                  onView: g,
              }),
          });
}
function aH(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: r,
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
        j = s.useMemo(
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
    return (0, l.jsx)(H.h, {
        header: t.name,
        title: J.intl.string(J.t["7vb6nw"]),
        iconSrc: I,
        ...v,
        onClickBanner: C,
        info: (0, l.jsxs)("div", {
            className: aU.QR,
            children: [
                (0, l.jsx)(aw, { channel: r, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, l.jsx)(X, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, l.jsx)(aG, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: et.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: r?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var aF = n(4274);
function az(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, c.bG)([M.default], () => M.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        s = (0, aF.g)(n?.code);
    return (0, l.jsxs)(iA.A, {
        children: [
            (0, l.jsx)(iA.A.Header, { text: i }),
            (0, l.jsxs)(iA.A.Body, {
                children: [
                    (0, l.jsx)(iA.A.Icon, { expired: !0 }),
                    (0, l.jsx)(iA.A.Info, {
                        expired: !0,
                        title: s?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: s?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var aY = n(308528),
    aK = n(889227);
function aW(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        r = (0, c.bG)([M.default], () => M.default.getId()),
        a = t.inviter?.id === r,
        o = t.state === W.elq.ACCEPTING,
        { analyticsLocations: d } = (0, f.Ay)(x.A.INVITE_EMBED),
        u = (0, c.bG)([O.A], () => null != t.inviter && O.A.isFriend(t.inviter?.id)),
        m = s.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), aY.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aj.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iO._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = s.useCallback(() => {
            (0, aj.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, iO._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aj.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = u ? m : h,
        p = J.intl.string(J.t.ib7Ng1),
        A = "active";
    u
        ? ((p = J.intl.string(J.t.xhxnPn)), (A = "secondary"))
        : a && ((p = J.intl.string(J.t.ib7Ng1)), (A = "secondary"));
    let E = a ? J.intl.string(J.t.eQyu1F) : J.intl.string(J.t.PYJHW6),
        I = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? rM.Ay.getUserTag(t.inviter) : "";
    return (0, l.jsxs)(iA.A, {
        children: [
            (0, l.jsx)(iA.A.Header, { text: E }),
            (0, l.jsxs)(iA.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: iM.iH,
                        children: [
                            (0, l.jsx)(iA.A.Icon, { user: new aK.A(t.inviter), onClick: u ? g : void 0 }),
                            (0, l.jsx)(iA.A.Info, { title: I, onClick: u ? g : void 0, children: C }),
                        ],
                    }),
                    (0, l.jsx)(eg.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var aJ = n(342952);
let aq = (0, n(945810).mj)({
    name: "2026-06-gdm-invite-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function aX(e) {
    let { location: t } = e;
    return aq.useConfig({ location: t });
}
function aZ(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: r, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === W.elq.ACCEPTING,
        u = (0, c.bG)([D.A], () => (null != t.channel ? D.A.getChannel(t.channel.id) : null), [t]);
    ej()(null == u || u.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        { enabled: h } = aX({ location: "GroupDMInvite" }),
        g = null != u,
        A = s.useRef(null),
        E = s.useCallback(() => {
            let e = "noop";
            g ? (r(), (e = "transition")) : (a(), (e = "accept")),
                (0, aj.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iO._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, g, r, a]),
        I = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, ak.OY)(e.channel),
                    i = (0, nz.Bi)(t);
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
                let e = (0, nz.Bi)(t),
                    i = G.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, u ?? null);
    if (null == I) return (0, l.jsx)(aD, {});
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
                                          let n = e instanceof aK.A ? e : G.default.getUser(e.id);
                                          if (null != n) {
                                              let e = rM.Ay.getName(n);
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
                      : (null == (i = (0, nz.m1)(l, G.default, O.A)) || "" === i) &&
                        (i =
                            s.length > 0
                                ? s
                                      .filter(ro.Vq)
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
                  e instanceof aK.A
                      ? e
                      : (G.default.getUser(e.id) ??
                        new aK.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
              )
            : [],
        S = null != N.icon,
        b = J.intl.format(J.t.zRl6XR, { count: T.length });
    return (0, l.jsxs)(iA.A, {
        className: h ? iM.TV : void 0,
        children: [
            h
                ? (0, l.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: iM.JO,
                      lineClamp: 1,
                      children: v,
                  })
                : (0, l.jsx)(iA.A.Header, { text: v }),
            (0, l.jsxs)(iA.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: h ? `${iM.iH} ${iM.mx}` : iM.iH,
                        children: [
                            (!h || S) &&
                                (0, l.jsx)(iA.A.Icon, {
                                    channel: N,
                                    onClick: g ? E : void 0,
                                    channelIconSize: h ? tA._3.SIZE_48 : void 0,
                                }),
                            (0, l.jsx)(iA.A.Info, {
                                title: h ? (0, l.jsx)(l6.A, { children: C }) : C,
                                onClick: g ? E : void 0,
                                titleVariant: h ? "heading-md/medium" : void 0,
                                detailVariant: h ? "text-sm/medium" : void 0,
                                children: h
                                    ? (0, l.jsx)("div", {
                                          className: iM.er,
                                          children:
                                              y.length > 0
                                                  ? (0, l.jsx)(eR.D, {
                                                        className: iM.N_,
                                                        onClick: (e) => {
                                                            A.current?.openUserList(e.currentTarget);
                                                        },
                                                        children: b,
                                                    })
                                                  : b,
                                      })
                                    : (0, l.jsx)(iA.A.Data, { members: T.length }),
                            }),
                            h &&
                                y.length > 0 &&
                                (0, l.jsx)(aJ.A, {
                                    ref: A,
                                    className: iM.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tA._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: iM.BV,
                                }),
                        ],
                    }),
                    (0, l.jsx)(eg.$, { onClick: E, loading: d, disabled: g, variant: j, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var a$ = n(821418),
    aQ = n(340837);
let a0 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, d.Lt)(n.getSelfMember(i.id)?.flags ?? 0, aQ.D.IS_GUEST)) ||
        (0, d.Lt)(t.flags ?? 0, a$.Q.IS_GUEST_INVITE)
    );
};
var a1 = n(517905);
function a2(e) {
    let t,
        i,
        r,
        {
            onTransitionToInviteChannel: a,
            onAcceptInstantInvite: o,
            guild: u,
            invite: m,
            message: g,
            currentUserId: A,
        } = e,
        E = A === g.author.id,
        { channel: I, approximate_member_count: C, approximate_presence_count: v } = m,
        _ = m.state === W.elq.ACCEPTING,
        j = null != I ? (0, ak.OY)(I) : null,
        N = null != u,
        T = null != j,
        y = null != j && j.isGuildStageVoice(),
        S = (0, d.Lt)(m.flags ?? 0, a$.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = u?.features.has(W.GuildFeatures.HUB) ?? !1,
        L = u?.id,
        { analyticsLocations: R } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: I?.id,
            invite_instance_id: (0, iO._U)(m.code, g.id),
            invite_channel_type: I?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [P, M] = s.useState(!1),
        D = s.useCallback(() => M(!1), []),
        O = s.useRef(null),
        U = (0, c.bG)([i6.Ay], () => a0([i6.Ay], m)),
        G = s.useCallback(() => {
            M(!0), (0, aj.Pq)(L, "show profile", R);
        }, [L, R]),
        w = s.useCallback(() => {
            let e = "noop";
            N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, aj.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: g.author.id,
                        invite_message_id: g.id,
                        invite_instance_id: (0, iO._U)(m.code, g.id),
                    },
                    R,
                );
        }, [m, g, R, N, a, o]);
    if (null == u) {
        if (null == m.guild) return (0, l.jsx)(aD, {});
        (u = aR.DY(m.guild)).premiumTier = m.guild.premium_tier ?? W.TVA.NONE;
    }
    let B = (function (e) {
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
    })({ isVoiceChannel: b, isOwnInvite: E, isGuest: S, isHubGuild: k, isStage: y, isStream: !1 });
    return (
        (i = (0, l.jsxs)("span", {
            className: iM.FA,
            children: [
                (0, l.jsx)(a1.A, {
                    guildId: u.id,
                    name: u.name,
                    shouldShow: P,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, l.jsx)(iA.A.GuildName, { guild: u, ref: O }),
                }),
                (0, l.jsx)("span", {
                    className: iM.E3,
                    children: (0, l.jsx)(s$.A, { guild: u, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (r = (0, l.jsx)(it.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, l.jsx)(nT.m, { size: "md", color: "currentColor", className: iM.G }),
            })),
        b
            ? ((i = (0, l.jsx)(iA.A.Channel, { channel: j })),
              (t = (0, l.jsxs)("span", {
                  className: iM.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: u.name }),
                      (0, l.jsx)("span", {
                          className: iM.E3,
                          children: (0, l.jsx)(s$.A, { guild: u, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != v && v > 0)
              ? (t = (0, l.jsx)(iA.A.Data, { members: C, membersOnline: v }))
              : T && (t = (0, l.jsx)(iA.A.Channel, { channel: j, guild: u })),
        (0, l.jsxs)(iA.A, {
            children: [
                (0, l.jsx)(iA.A.GuildSplash, { guild: u }),
                (0, l.jsx)(iA.A.Header, { text: B, extra: r }),
                (0, l.jsxs)(iA.A.Body, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: iM.iH,
                            children: [
                                (0, l.jsx)(iA.A.Icon, { guild: u }),
                                (0, l.jsx)(iA.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: iM.UD,
                            children: (0, l.jsx)(eg.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? y
                                        ? J.intl.string(J.t["7vb2cc"])
                                        : J.intl.string(J.t.gpqgah)
                                    : N
                                      ? J.intl.string(J.t.cEnaWx)
                                      : J.intl.string(J.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                u.features.has(W.GuildFeatures.HUB) &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", { className: iM.me }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, h.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("7054"),
                                                n.e("97804"),
                                                n.e("7265"),
                                                n.e("97641"),
                                                n.e("90496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, l.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var a3 = n(9994),
    a6 = n(461888),
    a5 = n(422253),
    a4 = n(123213),
    a9 = n(963402),
    a7 = n(42780),
    a8 = n(897288),
    oe = n(34368);
function ot(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: r, onAcceptInstantInvite: o } = e,
        d = s.useRef(null),
        [u, m] = s.useState(!0),
        [h, g] = s.useState(!1),
        p = t.state === W.elq.ACCEPTING,
        A = (0, c.bG)([rt.Ay], () => rt.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, iO._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        s.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let I = (0, a3.oO)(t),
        C = s.useCallback(() => {
            !h || (u && m(!1));
        }, [u, h]),
        v = s.useCallback(() => {
            !h || u || m(!0);
        }, [u, h]),
        _ = s.useMemo(
            () =>
                h && d.current?.clientHeight != null
                    ? {
                          height: u ? 292 : d.current.clientHeight + 36 + 48,
                          transition: A ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [u, h, A],
        );
    return null == I
        ? (0, l.jsx)(aD, {})
        : (0, l.jsxs)(n9.s, {
              className: a()(oe.Gg, { [oe.vk]: h && u }),
              onClick: C,
              style: _,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: [
                  (0, l.jsxs)("div", {
                      className: oe.uY,
                      ref: d,
                      children: [
                          (0, l.jsx)(a7.J$, { profile: I, className: oe.vK }),
                          (0, l.jsx)(a7.CG, { profile: I }),
                          (0, l.jsx)(a9.A, { profile: I }),
                          (0, l.jsx)(a5.P, { profile: I, className: oe.rb }),
                          (0, l.jsx)(a8.A, {
                              guild: null != t.guild ? (0, aR.DY)(t.guild) : null,
                              roles: t.roles,
                              className: oe.Ei,
                          }),
                      ],
                  }),
                  h && !u
                      ? (0, l.jsx)("div", {
                            className: oe.Se,
                            children: (0, l.jsx)(lD.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: J.intl.string(J.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: a()(oe.qr, { [oe.iK]: h }),
                      children: [
                          h && u ? (0, l.jsx)("div", { className: oe.D7 }) : null,
                          (0, l.jsx)("div", {
                              className: a()(oe.z8, { [oe.it]: h && u }),
                              children: (0, l.jsx)("div", {
                                  className: oe.UD,
                                  children: (0, l.jsx)(on, {
                                      invite: t,
                                      profile: I,
                                      isMemberOfGuild: n,
                                      message: i,
                                      submitting: p,
                                      onTransitionToInviteChannel: r,
                                      onAcceptInstantInvite: o,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function on(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: r,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, a6.Ay)(n, a6.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = s.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aj.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: r.author.id,
                    invite_message_id: r.id,
                    invite_instance_id: (0, iO._U)(t.code, r.id),
                },
                m,
            );
        }, [t, r, m, i]);
    return null == u
        ? null
        : (0, l.jsx)(a4.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var oi = n(414798);
function ol(e) {
    let t,
        n,
        i,
        { author: s, banned: r, channelId: a, onMention: o } = e,
        d = (0, c.bG)([M.default], () => M.default.getId()),
        u = rM.Ay.useName(s),
        m = d === s.id,
        { enabled: h } = aX({ location: "InvalidInvite" }),
        g = (0, c.bG)([D.A, te.A], () => {
            let e = D.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sE.UJ)(e),
                    n = te.A.can(W.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return te.A.can(W.xBc.SEND_MESSAGES, e);
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
                    : null != u && g
                      ? J.intl.formatToPlainString(J.t["9Akp1s"], { username: u })
                      : J.intl.string(J.t["SMJr+a"])),
                (n =
                    null != u && g && !h
                        ? (0, l.jsx)(eg.$, {
                              onClick: function () {
                                  o?.();
                                  let { id: e } = s,
                                      t = `@${rM.Ay.getUserTag(s, { decoration: "never" })}`,
                                      n = `<@${e}>`;
                                  sr._.dispatchToLastSubscribed(W.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                      null != a && oi.A.startTyping(a);
                              },
                              text: J.intl.string(J.t.P8tvKG),
                          })
                        : void 0)),
        (0, l.jsxs)(iA.A, {
            className: h ? iM.TV : void 0,
            children: [
                h
                    ? (0, l.jsx)(p.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: iM.JO,
                          lineClamp: 1,
                          children: i,
                      })
                    : (0, l.jsx)(iA.A.Header, { text: i }),
                (0, l.jsxs)(iA.A.Body, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: iM.iH,
                            children: [
                                (0, l.jsx)(iA.A.Icon, { expired: !0 }),
                                (0, l.jsx)(iA.A.Info, {
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
var os = n(616356);
function or(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: r,
            message: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        u = r?.id,
        m = (0, c.bG)([U.A], () => U.A.getGuildId()),
        h = (0, c.bG)(
            [os.A],
            () => (null != n && null != n.target_user ? os.A.getActiveStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        g = (0, c.bG)(
            [os.A],
            () => (null != n && null != n.target_user ? os.A.getStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, iO._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aO.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ej()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    ej()(I === aO.yV.STREAM && null != C, "invalid streaming invite");
    let v = i === C.id,
        _ = n.state === W.elq.ACCEPTING,
        j = s.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aj.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, iO._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != r;
    if (null == r) {
        if (null == n.guild) return (0, l.jsx)(aD, {});
        r = (0, aR.DY)(n.guild);
    }
    let T = null != n.channel ? (0, ak.OY)(n.channel) : null,
        y = rM.Ay.getName(C),
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
        m === r.id && null != T
            ? (0, l.jsx)(iA.A.Channel, { channel: T })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: r.name });
    return (0, l.jsxs)(iA.A, {
        children: [
            (0, l.jsx)(iA.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, l.jsxs)(iA.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: iM.iH,
                        children: [
                            (0, l.jsx)(iA.A.Icon, { guild: r, onClick: N && E ? j : void 0 }),
                            (0, l.jsx)(iA.A.Info, { title: t, onClick: N && E ? j : void 0, children: L }),
                        ],
                    }),
                    (0, l.jsx)(eg.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var oa = n(459192),
    oo = n(364522),
    od = n(952270),
    oc = n(52074),
    ou = n(725613),
    om = n(693879),
    oh = n(145497),
    og = n(481947),
    op = n(977997),
    oA = n(607567),
    ox = n(516111);
function of(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: r } = e,
        a = (0, nz.Ay)(i),
        o = (0, c.bG)([nx.A], () => nx.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, c.bG)([op.A], () => op.A.isInChannel(i.id), [i.id]),
        { voiceStates: u } = (0, c.cf)(
            [oA.Ay],
            () => ({ voiceStates: null != i.guild_id ? oA.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = s.useMemo(
            () => [...u.filter((e) => e.voiceState.selfStream), ...u.filter((e) => !e.voiceState.selfStream)],
            [u],
        ),
        h = (0, c.bG)([ou.A], () => ou.A.getStartTime(i), [i]);
    s.useEffect(() => {
        null != h || null == i.guild_id || ou.A.hasRequestedStartTimes(i.guild_id) || (0, oc.U)(i.guild_id);
    }, [i, h]);
    let g = s.useRef(null),
        A = s.useRef(null),
        E = s.useCallback(() => {
            let e = g.current,
                t = A.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    s.useLayoutEffect(() => {
        E();
    }, [m, E]);
    let I = s.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", E),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", E);
            },
            [E],
        ),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED, x.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        v = (0, iO._U)(t.code, n.id),
        _ = u.some((e) => e.voiceState.selfStream);
    (0, e2.A)({
        name: e1.ImpressionNames.VOICE_INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: v,
            has_active_stream: _,
            location_stack: C,
        },
    });
    let j = s.useCallback(() => {
            (0, lp.iN)(i.id);
        }, [i.id]),
        N = s.useCallback(() => {
            r(),
                (0, aj.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: v,
                        number_of_users_in_channel: u.length,
                    },
                    C,
                );
        }, [t, n, C, v, u.length, r]);
    return (0, l.jsxs)("div", {
        className: ox.kL,
        children: [
            (0, l.jsxs)("div", {
                className: ox.nz,
                children: [
                    (0, l.jsxs)("div", {
                        className: ox.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: ox.yW,
                                children: [
                                    (0, l.jsx)(r8.H, {
                                        className: ox.p,
                                        color:
                                            u.length > 0 ? nc.A.colors.TEXT_FEEDBACK_POSITIVE : nc.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, l.jsx)(oa.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, l.jsx)(oh.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, l.jsx)(eR.D, {
                                            className: ox.HA,
                                            onClick: j,
                                            children: (0, l.jsx)(p.E, {
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
                                ? (0, l.jsx)(om.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, l.jsxs)("div", {
                              className: ox.Ao,
                              children: [
                                  (0, l.jsx)(oo.Ip, {
                                      ref: I,
                                      className: ox.JD,
                                      children: m.map((e) =>
                                          (0, l.jsx)(
                                              og.Ay,
                                              {
                                                  className: ox.Eq,
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
                                  (0, l.jsx)("div", { ref: A, className: ox.wH }),
                              ],
                          })
                        : (0, l.jsx)("div", {
                              className: ox.p$,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t.zSqdrS),
                              }),
                          }),
                    (0, l.jsx)("div", {
                        className: ox.TB,
                        children: (0, l.jsx)(eg.$, {
                            onClick: N,
                            icon: r8.H,
                            variant: "active",
                            fullWidth: !0,
                            text: J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ox.qr,
                children: [
                    (0, l.jsx)(od.G, { size: "custom", color: "currentColor", className: ox.Dq }),
                    (0, l.jsx)(p.E, {
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
function oE(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: s } = e,
        r = t.channel?.id,
        a = (0, c.bG)([D.A, te.A], () => {
            let e = D.A.getChannel(r);
            return null != e && te.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, c.bG)([nx.A], () => null != nx.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, l.jsx)(ot, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: s,
          })
        : (0, l.jsx)(of, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var oI = n(652896),
    oC = n(834757),
    ov = n(427358),
    o_ = n(711682);
function oj(e) {
    let { className: t, channel: n, guild: i, onClick: s } = e,
        r = (0, nP.gU)(n, i),
        o = (0, nz.Ay)(n);
    return (0, l.jsxs)(eR.D, {
        onClick: s,
        className: a()(o_.UP, t),
        children: [
            null != r &&
                (0, l.jsx)(r, { className: o_.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, l.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, l.jsxs)(l6.A, { children: [i.name, " / ", o] }),
            }),
            (0, l.jsx)(nR._, { className: o_.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var oN = n(183812),
    oT = n(717421),
    oy = n(562153),
    oS = n(713517),
    ob = n(297413),
    ok = n(325943);
function oL(e) {
    let { user: t, guildId: n, channelId: i, nick: r } = e,
        a = s.useRef(null);
    return (0, l.jsx)(i3.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, l.jsxs)(eR.D, {
                ...s,
                innerRef: a,
                className: ok.nM,
                onClick: i,
                children: [
                    (0, l.jsx)(tp.eu, {
                        src: t.getAvatarURL(n, (0, tA.FT)(tA._3.SIZE_24)),
                        className: ok.my,
                        "aria-label": t.username,
                        size: tA._3.SIZE_24,
                    }),
                    (0, l.jsx)(p.E, {
                        className: ok.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, l.jsx)(ob.A, { user: t, nick: r, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var oR = n(334240);
function oP(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: r, ...a } = e,
        o = s.useCallback((e) => (0, l.jsx)(oM, { users: e, guildId: t, channelId: n, onHoverOrFocus: r }), [t, n, r]);
    return (0, l.jsx)(l$.Y, { renderPopout: () => o(i), ...a });
}
function oM(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: r } = e,
        a = s.useRef(null),
        { isHoveringOrFocusing: o } = (0, oS.A)(a);
    return (
        s.useEffect(() => {
            r?.(o);
        }, [r, o]),
        (0, l.jsx)("div", {
            ref: a,
            className: oR.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, l.jsx)(oo.Ip, {
                className: oR.G,
                children: t.map((e) =>
                    (0, l.jsx)(
                        oL,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: oy.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oD = n(360801);
let oO = { mass: 1, tension: 170, friction: 26 };
function oU(e) {
    let { className: t, guildId: n, channelId: i, members: r, ref: o, motion: d } = e,
        c = r.length > 4,
        u = c ? r.slice(0, 3) : r,
        m = c ? r.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, oT.z)(() => ({ x: 0, y: 0, scale: 1, config: oO }));
    return (
        s.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, l.jsxs)(oN.animated.div, {
            ref: o,
            className: a()(oD.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, oN.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: oD.my,
                            children: (0, l.jsx)(it.m, {
                                text: oy.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, l.jsx)(tp.eu, {
                                    src: (function (e, t, n) {
                                        let i = i6.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, w.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tA._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tA._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tA._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tA._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tA._3.SIZE_48
                                                    : h > 2
                                                      ? tA._3.SIZE_40
                                                      : tA._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, l.jsx)(oG, { guildId: n, channelId: i, members: r, count: m }, "overflow"),
            ],
        })
    );
}
function oG(e) {
    let { guildId: t, channelId: n, members: i, count: r } = e,
        {
            triggerRef: o,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = s.useRef(null),
                { isHoveringOrFocusing: t } = (0, oS.A)(e),
                [n, i] = s.useState(!1),
                l = t || n,
                [r, a] = s.useState(!1),
                o = s.useRef(null);
            return (
                s.useEffect(
                    () => (l || (o.current = setTimeout(() => a(!1), 300)), () => clearTimeout(o.current)),
                    [l],
                ),
                l && !r && a(!0),
                { triggerRef: e, shouldShow: l || r, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, l.jsx)(oP, {
        targetElementRef: o,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, l.jsx)("div", {
                className: a()(oD.my, oD.k2),
                ref: o,
                ...e,
                children: (0, l.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: r > 99 ? ">99" : `+${r}`,
                }),
            }),
    });
}
var ow = n(816196);
function oB(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: r, onAcceptInstantInvite: o } = e,
        d = s.useRef(null),
        u = i ?? null;
    null == u && null != t.guild && (u = aR.DY(t.guild));
    let m = null != t.channel ? (0, ak.OY)(t.channel) : null;
    ej()(null != u, "Voice Invite Embed must be used in context of a guild."),
        ej()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, c.bG)([te.A, D.A], () => {
            let e = D.A.getChannel(m.id);
            return null == e || te.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, c.bG)([oA.Ay], () => (h ? oA.Ay.getVoiceStatesForChannelAlt(m.id, u.id) : []), [m.id, u.id, h]),
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
        })({ currentUserId: (0, c.bG)([M.default], () => M.default.getId()), author: n.author, voiceStates: g }),
        I = (0, c.bG)([nx.A], () => null != nx.A.getGuild(u.id), [u.id]),
        C = (0, c.bG)([ed.Ay], () => ed.Ay.getVoiceChannelId() === m.id, [m.id]),
        v = (0, c.bG)([i6.Ay], () => a0([i6.Ay], t), [t]),
        _ = t.state === W.elq.ACCEPTING,
        { analyticsLocations: j } = (0, f.Ay)(x.A.INVITE_EMBED),
        N = (0, iO._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, c.bG)([os.A, ov.A], () => {
                if ((0, aS.G4)(t) && null != t.target_user) {
                    let e = os.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = os.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = ov.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (ov.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = os.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: u.id, channelId: m.id }),
        y = (0, oC.AO)(T),
        S = null != T,
        b = s.useCallback(() => {
            let e = I ? "transition" : "accept";
            I ? r() : o(),
                (0, aj.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, oI._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, I, y, T, g.length, r, o]),
        k = s.useCallback(() => {
            I ? (0, lp.iN)(m.id) : o({ autoJoin: !1 }),
                eV.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: u.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: I,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, oI._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, u.id, t.code, N, I, y, T, g.length, j, o]);
    (0, e2.A)({
        name: e1.ImpressionNames.VOICE_INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: u.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let L = (0, c.bG)([rt.Ay], () => rt.Ay.useReducedMotion),
        R = s.useRef(null),
        [P, O] = s.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, c.bG)([ov.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = ov.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (ov.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = s.useMemo(() => tm().throttle(O, 20), [O]);
    s.useEffect(() => () => G.cancel(), [G]);
    let w = s.useCallback(
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
        B = s.useCallback(() => {
            G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, l.jsxs)("div", {
        className: ow.kL,
        children: [
            (0, l.jsxs)("div", {
                ref: R,
                className: ow.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, l.jsx)("div", { className: ow.ys }),
                    (0, l.jsx)("div", { className: ow.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, l.jsxs)("div", {
                        className: ow.rf,
                        children: [
                            (0, l.jsxs)("div", {
                                className: a()(ow.Qs, { [ow.tE]: 0 === U.length }),
                                children: [
                                    (0, l.jsx)(oj, { channel: m, guild: u, onClick: k }),
                                    (0, l.jsxs)("div", {
                                        className: ow.WD,
                                        children: [
                                            (0, l.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, l.jsx)(l6.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != E
                                                ? (0, l.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: ow.$B,
                                                      children: (0, l.jsx)(l6.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, l.jsx)("div", {
                                      className: ow.RE,
                                      children: (0, l.jsx)(oU, {
                                          ref: d,
                                          guildId: u.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: P,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: ow.xk,
                        children: (0, l.jsx)(eg.$, {
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
            (0, l.jsxs)("div", {
                className: ow.qr,
                children: [
                    (0, l.jsx)(od.G, { size: "custom", color: "currentColor", className: ow.Dq }),
                    (0, l.jsx)(p.E, {
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
function oV(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: r, inviteError: a } = (0, c.cf)(
            [aL.A],
            () => ({ invite: aL.A.getInvite(t), inviteError: aL.A.getInviteError(t) }),
            [t],
        ),
        o = (0, iO._U)(t, n.id);
    s.useEffect(() => {
        null == r && aj.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = r ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: u } = (0, f.Ay)(),
        m = (0, c.bG)([nx.A], () => (r?.guild != null ? nx.A.getGuild(r.guild.id) : null), [r]),
        h = (0, c.bG)([D.A, te.A], () => {
            let e = r?.channel?.id;
            if (null == e) return !1;
            let t = D.A.getChannel(e);
            return null != t && te.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
        }, [r]),
        g = (0, c.bG)([M.default], () => M.default.getId()),
        p = (0, c.bG)([aT.Ay], () => aT.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && aj.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == m && r?.guild != null ? aR.DY(r.guild) : m;
        (0, ab.g)({ guild: n, isMember: null != m, analyticsLocations: u }) === ab.W.PROCEED &&
            aj.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
    }
    let E = (0, l.jsx)(a2, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case W.elq.RESOLVING:
            E = (0, l.jsx)(aD, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            E = (0, l.jsx)(ol, {
                banned: d.state === W.elq.BANNED,
                author: n.author,
                channelId: n.channel_id,
                onMention: () =>
                    (0, aj.he)(
                        {
                            invite: d,
                            action: "mention",
                            inviter_id: n.author.id,
                            invite_message_id: n.id,
                            invite_instance_id: o,
                        },
                        u,
                    ),
            });
            break;
        case W.elq.ERROR:
            E = (0, l.jsx)(az, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, aS.On)(d)) {
                case aS.Xd.GROUP_DM:
                    E = (0, l.jsx)(aZ, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case aS.Xd.FRIEND:
                    E = (0, l.jsx)(aW, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, aS.G4)(d)) {
                        if (null != d.channel && (0, ak.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = aM({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    E = (0, l.jsx)(oE, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    E = (0, l.jsx)(oB, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        E = (0, l.jsx)(or, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, aS.ly)(d)) {
                        E = (0, l.jsx)(ay.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, aS.oK)(d)) {
                        E = (0, l.jsx)(aB, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, ak.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = aM({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                E = (0, l.jsx)(oE, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                E = (0, l.jsx)(oB, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, aN.v)(d) &&
                        (E = (0, l.jsx)(ot, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, l.jsx)(rO.A, { section: W.JJy.INVITE_LINK, children: E });
}
var oH = n(266620),
    oF = n(860227),
    oz = n(763899),
    oY = n(503002),
    oK = n(123791),
    oW = n(627363);
function oJ(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, oW.YY)(t);
    return null == i ? null : (0, l.jsx)(oq, { app: i, guildId: n });
}
function oq(e) {
    let { app: t, guildId: i } = e;
    (0, oK.C)(t.id);
    let r = s.useCallback(() => {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("52517"),
                n.e("39086"),
                n.e("1087"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, l.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, l.jsx)(eg.$, {
        size: "sm",
        onClick: r,
        icon: oY.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var oX = n(394839),
    oZ = n(96782),
    o$ = n(930390),
    oQ = n(861986),
    o0 = n(87221),
    o1 = n(576872);
function o2(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: o1.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, l.jsxs)(
                    "div",
                    {
                        className: o1.Yf,
                        children: [
                            (0, l.jsx)(o0.D, { size: "lg", color: nc.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: J.intl.string(J.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, l.jsxs)("div", {
                className: o1.Fj,
                children: [
                    (0, l.jsx)(nT.m, { size: "sm", color: nc.A.colors.TEXT_MUTED }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: J.intl.string(J.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var o3 = n(343552),
    o6 = n(581619),
    o5 = n(406244);
let o4 = [W.Auw.GIFV],
    o9 = 15 * t6.A.Millis.MINUTE,
    o7 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    o8 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s, flags: r } = e,
            a = (0, d.Lt)(r, iF.e5.IS_ANIMATED);
        return null != i && null != s && (iz.bp.test(n) || (a && (iz.P8.test(n) || iz.p4.test(n))))
            ? (0, l.jsx)(rp.A, { width: i, height: s, src: n, url: t, format: u.TL.IMAGE, className: o5.jj })
            : null;
    };
class de extends s.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1, hideInviteEmbedBanner: !1, hideActivityInvite: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, iO._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && o7.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, m.A)(this.state, t) ||
            !(0, m.A)(this.props, e, ["message", "channel"]) ||
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
            case sY.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, l.jsx)(nL, { messageId: e.id, channelId: t.id });
                break;
            case sY.xC.AGE_VERIFICATION_RETRY:
                i = (0, l.jsx)(ef, { channelId: t.id });
                break;
            case sY.xC.CONNECT_TO_TEEN:
                i = (0, l.jsx)(ev, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, l.jsx)("div", { className: o5.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: s, url: r } = n;
            if ((0, tb.Yf)(i)) {
                let n = (0, tb.kK)(i, s, r);
                if (null == n) return null;
                let { applicationId: a } = n;
                return (0, l.jsx)(
                    e0.O,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tk.I.APP_DIRECTORY_PROFILE:
                                    return (0, l.jsx)(iv, { code: a, message: e });
                                case tk.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, l.jsx)(eh, { application: t, message: e, params: i });
                                case tk.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, l.jsx)(eZ, { application: t, message: e });
                                case tk.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: s } = n;
                                    return (0, l.jsx)(e$, { application: t, message: e, skuId: s });
                                case tk.I.APP_OAUTH2_LINK:
                                    return (0, l.jsx)(e3, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    s,
                );
            }
            switch (i) {
                case tk.I.INVITE:
                    if (!this.shouldRenderInvite(s)) return null;
                    return (0, l.jsx)(
                        oV,
                        { code: s, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        s,
                    );
                case tk.I.TEMPLATE:
                    return (0, l.jsx)(iD, { code: s }, s);
                case tk.I.EVENT:
                    return (0, l.jsx)(iS.A, { code: s }, s);
                case tk.I.CHANNEL_LINK:
                    return (0, l.jsx)(s0, { code: s, message: e }, s);
                case tk.I.GUILD_PRODUCT:
                    return (0, l.jsx)(iy, { code: s }, s);
                case tk.I.SERVER_SHOP:
                    return (0, l.jsx)(nv, { guildId: s }, s);
                case tk.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(
                        lq.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, lJ.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        s,
                    );
                }
                case tk.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(lq.I, { applicationId: n, skuId: e, channel: t }, s);
                }
                case tk.I.QUESTS_EMBED:
                    return (0, l.jsx)(ld.A, { questId: s }, s);
                case tk.I.GAME_PROFILE:
                    return (0, l.jsx)(im, { gameId: s, sourceUserId: e.author.id }, s);
                case tk.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tR.has(i) ? i : void 0 };
                    })(s);
                    if (null == e) return null;
                    return (0, l.jsx)(nd, { skuId: e.skuId, tab: e.tab, channel: t }, s);
                }
                case tk.I.EXPERIMENT:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: s, content: r, giftInfo: a } = e,
            o = G.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: o5.zv,
                          children: (0, l.jsx)(a_, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: s,
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
            isLurking: s,
            isPendingMember: r,
            channel: a,
        } = this.props;
        return n
            ? null
            : (0, l.jsx)(o$.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: s,
                  isPendingMember: r,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: s,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, sB._c)(e)) return null;
        let m = c.filter((e) => null == e.flags || !(0, d.Lt)(e.flags, W.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, iF.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, d.Lt)(t.flags ?? 0, W.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, ls.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, d.Lt)(u, W.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sK.iW)(e.originalItem, t);
        }
        let E = m.map((l) => {
            let a = (0, iF.aG)(l),
                o = {
                    message: e,
                    item: (0, oZ.rC)(l, s),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), r(e, a);
                              }
                            : void 0,
                    renderAudioComponent: x ? oH.SX : oH.Nj,
                    renderImageComponent: oH.Cr,
                    renderVideoComponent: oH.I1,
                    renderPlaintextFilePreview: oH.R6,
                    renderGenericFileComponent: oH.UB,
                    onPlay: function (n, i, s) {
                        eV.default.track(W.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: l.content_type,
                            flags: l.flags,
                            size: l.size,
                            attachment_id: l.id,
                            message_id: e.id,
                            duration: s,
                        });
                    },
                    gifFavoriteButton: o8(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sH.E)({ proxyURL: l.proxy_url, url: l.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, l.jsx)(oX.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: s,
                inlineEmbedMedia: r,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, sK.sC)(e, i, o, d);
        if (e.type === W.Auw.GIFT) return null;
        let m = o4.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, l.jsx)(
            ih.G.Provider,
            {
                value: (0, o3.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, l.jsx)(tc.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: s,
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
            : (null != e.url && "" !== e.url ? iH.A.parseEmbedTitleWithoutLinks : iH.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === W.Auw.RICH
            ? iH.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowGameMentions: !0,
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
    handleEditAttachment = (e) => {
        let t = e.originalItem;
        (0, h.openModalLazy)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("69960"), n.e("70698")]).then(
                n.bind(n, 427281),
            );
            return (n) =>
                (0, l.jsx)(i, {
                    ...n,
                    item: e,
                    onSubmit: (e) => {
                        let { description: n, spoiler: i } = e,
                            { channel: l, message: s } = this.props,
                            r = s.attachments.map((e) => ({ id: e.id })),
                            a = r.find((e) => e.id === t.id);
                        null != a &&
                            ((a.description = n), (a.is_spoiler = i), A.A.patchMessageAttachments(l.id, s.id, r));
                    },
                });
        });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  let i;
                  if (
                      o6.z.has(t.type) ||
                      (0, sF.p6)(t) ||
                      ((0, d.Lt)(t.flags ?? 0, W.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === iG.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !iw.has(t.content_type);
                              })
                          )) ||
                      (0, sF.V)(t) ||
                      (0, sF.G8)(t) ||
                      ((0, sF.Xk)(t) && n4.A.getConfig({ location: "MessageAccessories.renderEmbeds" }).enabled)
                  )
                      return null;
                  if (t.type === W.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var s = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, sK.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, l.jsx)(
                                  s9,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: o8,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), a?.(t, e);
                                                },
                                      shouldHideMediaOptions: r,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? s.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, l.jsx)(
                                lP.Ay,
                                {
                                    type: lP.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: lQ.LL, renderVideoComponent: lQ.$o, renderLinkComponent: lQ.bU };
                  if (
                      t.type === W.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sz.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let s = i.pathname.split("/")[3];
                          if (null != s)
                              return (0, l.jsx)(
                                  aA,
                                  { skuId: s, renderFallback: () => this.renderEmbed(t, n, r, e) },
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
            disableComponentInteractivity: s,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, l.jsx)(s6.N, {
            gifAutoPlay: t,
            getGifFavButton: o8,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, l.jsx)(iB.Ay, { message: e, shouldDisableInteractiveComponents: s }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, l.jsx)(oz.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== W.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(td, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, sW.ec)(e)
            ? (0, l.jsx)(rg.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lr.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, l.jsx)(sf, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(W.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(sG, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(W.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sj.default.extractTimestamp(e.id) >= o9)
        )
            return (0, l.jsx)("div", { className: o5.xM, children: J.intl.string(J.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(g.M, {
            dismissable: !0,
            header: J.intl.string(J.t.VL1KOk),
            confirmText: J.intl.string(J.t.YEHppG),
            cancelText: J.intl.string(J.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                A.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: o5.IX,
                    children: J.intl.string(J.t["vXZ+Fo"]),
                }),
                (0, l.jsx)(p.E, {
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
            : (0, l.jsx)(g.M, {
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
                  children: (0, l.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: o5.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(oJ, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(e0.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, l.jsx)(rh, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== W.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(ll, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_POLICY_NOTICE
            ? (0, l.jsx)(lG, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, l.jsx)(lW, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nj.KM)(e)
            ? (0, l.jsx)(nS, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, l.jsx)(lo.A, { message: e, poll: t, className: o5.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, l.jsx)(ty, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lc.Mn)(e, this.props.channel)) return (0, l.jsx)(lR, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lc.Mn)(e, this.props.channel))
            return (0, l.jsx)(n5, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, l.jsx)(oQ.A, { message: e, compact: t, location: oQ.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, nK.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new nJ(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lr.o6)(n).length;
        return 0 === i
            ? null
            : (0, l.jsx)("div", {
                  id: (0, oF.XL)(e),
                  className: a()(this.props.className, o5.kL),
                  children: (0, l.jsx)(o2, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, l.jsx)("div", { id: (0, oF.XL)(t), className: a()(e, o5.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let o = this.renderEditedTag(t, i),
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
            : (0, l.jsxs)("div", {
                  id: (0, oF.XL)(t),
                  className: a()(e, o5.kL),
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
                      o,
                      p,
                      A,
                      x,
                      s && this.renderSuppressConfirmModal(),
                      r && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      N,
                      T,
                  ],
              });
    }
}
function dt(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: s,
            isMessageSnapshot: r,
            hideInviteEmbedBanner: a,
            hideActivityInvite: o,
        } = e,
        u = (0, c.bG)([M.default], () => M.default.getId()),
        m = nH.X6.useSetting(),
        h = nH.hD.useSetting(),
        g = nH.rs.useSetting() && !(0, s_.A)(e.message),
        p = nH.jW.useSetting() && !1 !== e.renderReactions,
        A = nH.kt.useSetting(),
        x = (0, c.bG)([sV.A], () => null == n.guild_id || sV.A.canChatInGuild(n.guild_id), [n]),
        f = (0, c.bG)([iV.A], () => null != n.guild_id && iV.A.isLurking(n.guild_id), [n]),
        E = (0, c.bG)([i6.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? i6.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: I, canManageMessages: C } = (0, c.cf)(
            [te.A],
            () => ({
                canAddNewReactions: x && te.A.can(W.xBc.ADD_REACTIONS, n),
                canManageMessages: te.A.can(W.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        v = (0, i_.ix)(n.guild_id),
        [, _] = (0, ij.c)(n.guild_id),
        j = (0, sE.Id)(n),
        N =
            (u === i.author.id || C) &&
            i.author.id !== W.oIV &&
            !1 !== s &&
            !(0, d.Lt)(i.flags, W.pr7.EPHEMERAL) &&
            j &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        T = u === i.author.id && j && !r,
        y = i.author.id === u,
        S = i.isFirstMessageInForumPost(n),
        b = (0, sq.A)({
            channel: n,
            canChat: x,
            renderReactions: p,
            canAddNewReactions: I,
            isLurking: f,
            communicationDisabled: _,
            isActiveChannelOrUnarchivableThread: j,
            isAutomodQuarantined: v,
        }),
        k = (0, nD.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        L = (0, iY.A)(n?.id),
        R = (0, la.A)(i),
        P = (0, nN.P)(i),
        D = (0, sJ.z)(n),
        O = (0, sY._f)(i.id, i.channel_id),
        U = (0, n_._R)(),
        w = (0, nO.U)();
    return (0, l.jsx)(de, {
        canSuppressEmbeds: N,
        canDeleteAttachments: T,
        ...b,
        disableReactionReads: !!S || b.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
        hasBailedAst: e.hasBailedAst,
        isLurking: f && x,
        isPendingMember: E && x,
        isCurrentUser: y,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: g,
        gifAutoPlay: A,
        canRenderReferralEmbed: n.isDM(),
        poll: R,
        showListsAndHeaders: k,
        showMaskedLinks: k,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: O,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: a,
        hideActivityInvite: o,
        restrictedPreview: w,
    });
}
function dn(e) {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: s = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = nH.X6.useSetting(),
        u = nH.hD.useSetting(),
        m = nH.rs.useSetting(),
        h = nH.kt.useSetting(),
        g = (0, nO.U)(),
        p = (0, nD.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, iY.A)(n?.id),
        x = (0, nN.P)(t),
        f = (0, sY._f)(t.id, t.channel_id),
        E = (0, la.A)(t);
    return (0, l.jsx)(de, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: r,
        disableReactionUpdates: a,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: s,
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
