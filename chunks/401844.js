(n.d(t, { iV: () => cs, OC: () => ca, Ay: () => cr }), n(938796));
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    d = n(448761),
    c = n(665260),
    u = n(17928),
    m = n(803805),
    h = n(52133),
    g = n(192308),
    p = n(640238),
    A = n(834730),
    x = n(148494),
    f = n(793574),
    I = n(688810),
    E = n(735991);
(n(321073), n(134528), n(947204));
var v = n(485845),
    C = n(379834),
    _ = n(836480),
    j = n(825860),
    N = n(950305),
    y = n(795816),
    T = n(522305),
    S = n(361926),
    b = n(583846),
    k = n(371169),
    R = n(173912);
async function L(e) {
    let { application: t, analyticsContext: n } = e,
        i = null != t.conjureProjectId && (0, R.m)(t.id) ? (await (0, k.l5)(t.id))[0] : void 0;
    (0, R.A)({
        applicationId: t.id,
        channel: null != i ? { guildId: i.guild_id, channelId: i.channel_id } : null,
        analyticsContext: n,
    });
}
var M = n(25451),
    P = n(205184),
    D = n(773669),
    O = n(280450),
    U = n(734057),
    G = n(994500),
    w = n(967198),
    B = n(287809),
    V = n(486020),
    H = n(204776),
    F = n(725606),
    z = n(572211),
    Y = n(500060),
    K = n(432017),
    W = n(687966),
    J = n(104171),
    X = n(652215),
    Z = n(105292),
    q = n(852575);
function $(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: q.i,
        children: [
            (0, s.jsx)(J.Ay, { guildId: n, users: t, max: 6, size: J.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var Q = n(354287),
    ee = n(138175),
    et = n(112150),
    en = n(574660),
    ei = n(768349),
    el = n(113732);
function es(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, ee.b)(t)),
        m = c?.id,
        h = (0, E.Z$)(t),
        g = V.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = (0, et.f)(t),
        v = (0, u.bG)([O.default], () => l ?? O.default.getId(), [l]),
        { analyticsLocations: C } = (0, I.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: b } = (0, F.w)(t.id),
        k = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        R = null != m && h && k,
        P = b && h,
        D = (0, M.X)(t),
        G = (0, en.F)(t),
        w = (0, en.t)(t),
        B = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? D
                        ? e.push({
                              label: Z.intl.string(Z.t.RscU7I),
                              trackingArea: Q.kY.PLAY,
                              onClick() {
                                  L({ application: t, analyticsContext: { isStart: !0, analyticsLocations: C } });
                              },
                          })
                        : (P &&
                              e.push({
                                  label:
                                      null == j
                                          ? Z.intl.string(Z.t.RscU7I)
                                          : N
                                            ? Z.intl.string(Z.t.DPfdsq)
                                            : Z.intl.string(Z.t.sqe0hj),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, y.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          customId: i,
                                          referrerId: v,
                                          analyticsLocations: C,
                                      });
                                  },
                                  disabled: N,
                              }),
                          !P &&
                              R &&
                              e.push({
                                  label: Z.intl.string(Z.t.JeK1Wg),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, T.Q)({
                                          appId: t.id,
                                          botId: m,
                                          analyticsLocations: C,
                                          customId: i,
                                          referrerId: v,
                                      });
                                  },
                              }))
                    : null != w && e.push(w),
                e
            );
        }, [h, w, D, t, P, R, j, N, _, i, v, C, m]),
        H = h ? (0, s.jsx)(ea, { app: t }) : (0, s.jsx)(er, { app: t });
    return (0, s.jsx)(z.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: G,
        bannerAspectRatio: x,
        iconSrc: g,
        info: H,
        actions: B,
        onClickContent: G,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: v,
            activityCustomId: i,
            onView: o,
            guildId: U.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function er(e) {
    let { app: t } = e,
        n =
            (0, H.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([D.default], () => D.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : Z.intl.format(Z.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(A.E, { variant: "text-xs/medium", className: el.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: el.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function ea(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([w.A], () => w.A.getGuildId() ?? void 0, []),
        a = (0, P.s)(t.id),
        o = (0, u.yK)(
            [B.default, G.A],
            () => {
                let e = [];
                for (let [t, n] of a.entries()) {
                    if (t >= 5) break;
                    let i = B.default.getUser(n.author_id),
                        l = G.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [a],
        ),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)($, {
                    activityUsers: o,
                    guildId: l,
                    activityText: Z.intl.formatToPlainString(Z.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j.FireIcon, { size: "xxs", color: "currentColor" }),
                        Z.intl.string(Z.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? Z.intl.format(Z.t.z8EAJW, { count: i }) : Z.intl.string(Z.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: el.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: el.Tc, children: e }, t)),
                }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: el.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var eo = n(582388),
    ed = n(257269);
let ec = (0, u.UT)(eo.A, {
    getQueryId: X.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : eo.A.getOne(e, t)),
    load: (e, t) => (0, ed.Py)(e, t),
});
var eu = n(309010),
    em = n(933958),
    eh = n(782091);
function eg(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Z$)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, I.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([eu.Ay], () => eu.Ay.getChannelId()),
        g = (0, eh.et)(h),
        p = (0, u.bG)([em.Ay], () => {
            if (null == h) return;
            let e = em.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([em.Ay], () => em.Ay.getCurrentEmbeddedActivity()),
        x = g === eh.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        C = null != n ? n : i.customId,
        _ = [];
    (0, M.X)(t)
        ? _.push({
              label: Z.intl.string(Z.t.RscU7I),
              trackingArea: Q.kY.PLAY,
              onClick() {
                  L({ application: t, analyticsContext: { isStart: !0, analyticsLocations: m, channelId: h } });
              },
          })
        : (x &&
              _.push({
                  label:
                      null == p ? Z.intl.string(Z.t.RscU7I) : v ? Z.intl.string(Z.t.DPfdsq) : Z.intl.string(Z.t.sqe0hj),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, y.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          customId: C,
                          referrerId: l,
                          analyticsLocations: m,
                      });
                  },
                  disabled: v,
              }),
          c &&
              !x &&
              _.push({
                  label: Z.intl.string(Z.t.JeK1Wg),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, T.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: C, referrerId: l });
                  },
              }));
    let j = (0, en.F)(t);
    return (0, s.jsx)(z.h, {
        actions: _,
        onClickContent: j,
        header: t.name,
        iconSrc: V.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: ei.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: C,
            guildId: U.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function ep(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, I.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = ec(t.id, r);
    return (0, E.Z$)(t)
        ? null != r && null == c && null != d
            ? (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(eg, { application: t, customId: a, customLink: d, referrerId: l, message: n }),
              })
            : (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(es, {
                      app: t,
                      linkType: ei.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var eA = n(424743),
    ex = n(821609),
    ef = n(379257),
    eI = n(306537),
    eE = n(36149);
function ev(e) {
    let { channelId: t } = e,
        n = (0, eE.i2)(),
        i = r.useCallback(() => {
            (ef.A.showAgeVerificationGetStartedModal({ entryPoint: eI.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eI.UT)(eI.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "primary", text: Z.intl.string(Z.t["/nicWo"]), onClick: i, disabled: !n });
}
var eC = n(107766),
    e_ = n(780964),
    ej = n(766075);
function eN(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            ((0, eC.nk)() || (0, ej.openUserSettings)(e_.X.FAMILY_CENTER_PANEL), (0, eI.UT)(eI.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "primary", text: Z.intl.string(Z.t.n8a49k), onClick: n });
}
var ey = n(277861),
    eT = n(78637);
function eS(e) {
    let { channelId: t } = e,
        n = (0, eE.i2)(),
        i = r.useCallback(() => {
            ((0, ey.Vq)(), (0, eI.UT)(eI.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "secondary", text: Z.intl.string(eT.default.Z61nkt), onClick: i, disabled: !n });
}
var eb = n(284009),
    ek = n.n(eb),
    eR = n(664121),
    eL = n(34188),
    eM = n(408278),
    eP = n(173936),
    eD = n(858899),
    eO = n(939249),
    eU = n(996759),
    eG = n(800342),
    ew = n(163437),
    eB = n(185438),
    eV = n(97352),
    eH = n(652676),
    eF = n(67480),
    ez = n(328968),
    eY = n(174459),
    eK = n(957565),
    eW = n(943775),
    eJ = n(997997),
    eX = n(658575),
    eZ = n(376374),
    eq = n(435220),
    e$ = n(140046);
let eQ = (0, u.UT)([eF.A, ez.A, eV.A], {
        getQueryId: X.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eF.A.get(e),
                n = ez.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eV.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (ek()(null != e, "skuId is null"), await (0, eG.QB)(e));
        },
    }),
    e0 = (0, u.UT)([eF.A], {
        getQueryId: X.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eF.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (ek()(null != e && null != t, "appId is null"), await (0, eG.JI)(t));
        },
    });
function e1(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eX.G)(l),
        [o, d, c, m] = (0, u.yK)(
            [eH.A, U.A],
            () => {
                let e = (0, eW.A)(t, 45),
                    n = U.A.getBasicChannel(i.channel_id)?.guild_id;
                return [eH.A.getStoreLayout(l), eH.A.getFetchStatus(l), n, e];
            },
            [t, l, i.channel_id],
        );
    r.useEffect(() => {
        d === eH.N.NONE && (0, eU.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        p = o.otps.length,
        A = r.useMemo(
            () =>
                h > 0 && p > 0
                    ? Z.intl.formatToPlainString(Z.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? Z.intl.formatToPlainString(Z.t.GSfibA, { count: h })
                      : p > 0
                        ? Z.intl.formatToPlainString(Z.t.j7Go5A, { count: p })
                        : Z.intl.string(Z.t.rMA98g),
            [p, h],
        );
    if (!a) return null;
    function x() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(e3, {
        appName: t.name,
        title: Z.intl.formatToPlainString(Z.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${X.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eJ.K)(l, eJ.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eY.default.track(X.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: e$.mZ,
            children: (0, s.jsx)(ex.$, {
                onClick: function () {
                    (x(),
                        eY.default.track(X.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: Z.intl.string(Z.t.kRvlKJ),
            }),
        }),
    });
}
function e2(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eQ(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = e0(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([U.A], () => U.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eW.A)(t, 45), [t]),
        p = (0, eX.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eB.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === X.Puh.SUBSCRIPTION,
        I = !!f && (0, ew.bg)(o.flags);
    function E() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let v = () => {
            (0, g.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    l = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    function r() {
                        (n.onClose(), E());
                    }
                    return null != e && null != a
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: I ? "user" : "guild",
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
        C = f
            ? I
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(N.UserIcon, { size: "custom", width: 12, height: 12 }),
                          " ",
                          Z.intl.string(Z.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eR.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          Z.intl.string(Z.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    function _() {
        null != o &&
            eY.default.track(X.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === C && (C = void 0),
        (0, s.jsx)(e3, {
            appName: t.name,
            title: o.name,
            description: C,
            link: `${location.protocol}//${location.host}${X.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, eJ.K)(t.id, eJ.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (E(),
                    eY.default.track(X.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, s.jsxs)("div", {
                className: e$.w,
                children: [
                    (0, s.jsx)(ex.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (v(),
                                eY.default.track(X.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: Z.intl.string(Z.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, s.jsx)(eZ.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: I ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eL.U,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, s.jsx)(ex.$, { variant: "primary", text: Z.intl.string(Z.t.uuzaAK), onClick: v })
                        : (0, s.jsx)(eZ.$P, { appId: t.id, sku: o, icon: eL.U, onHasClicked: _ }),
                ],
            }),
        })
    );
}
function e3(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: e$.iE,
        children: [
            (0, s.jsxs)("div", {
                className: e$.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: e$.qd,
                        children: [
                            (0, s.jsx)(eL.U, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eK.p5 &&
                        (0, s.jsx)(eM.K, {
                            "aria-label": Z.intl.string(Z.t.WqhZss),
                            icon: () => (0, s.jsx)(eP.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eK.C)(l, () => {
                                    ((0, eD.P0)({ text: Z.intl.string(Z.t["L/PwZf"]), variant: "success" }), o());
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: e$.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: e$.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eO.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: e$.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: e$.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(A.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: e$.h_,
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
var e5 = n(401374),
    e4 = n(562708),
    e6 = n(139286);
function e9(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e6.x)({
                type: e4.ImpressionTypes.VIEW,
                name: e4.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, H.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(I.f5, {
              value: i,
              children: (0, s.jsx)(es, { app: t, linkType: ei.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var e8 = n(778492),
    e7 = n(297264),
    te = n(285796),
    tt = n(857182),
    tn = n(506774),
    ti = n(73153),
    tl = n(576705),
    ts = n(812930);
let tr = "ChannelFollowingBumpChannels",
    ta = new Set(),
    to = new Set();
class td extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        (this.waitFor(O.default, U.A, tl.A, B.default), (ta = new Set(tn.w.get(tr))));
    }
    shouldShowBump(e) {
        return to.has(e);
    }
}
let tc = new td(ti.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || ta.has(t)) return !1;
        let l = U.A.getChannel(t),
            s = B.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === X.rbe.GUILD_ANNOUNCEMENT &&
                (0, ts.A)(n) &&
                tl.A.can(X.xBc.SEND_MESSAGES, l) &&
                (r || tl.A.can(X.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), X.pr7.CROSSPOSTED)
            )
        )
            return !1;
        to.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        to.has(t.id) && c.Lt(Number(t.flags), X.pr7.CROSSPOSTED) && to.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        to.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        to.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        (ta.add(t), tn.w.set(tr, ta), to.clear());
    },
});
var tu = n(419056),
    tm = n(732929);
let th = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tc], () => tc.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            (tt.A.dismissPublishBump(n), (0, tu.A)(t, n));
        }, [t, n]),
        a = r.useCallback(() => {
            tt.A.dismissPublishBump(n);
        }, [n]),
        o = r.useCallback(() => {
            tt.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: tm.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: tm.mp,
                      children: [
                          (0, s.jsx)(e8.k, { size: "xs", color: "currentColor", className: tm.Kk }),
                          (0, s.jsx)(e7.D, {
                              variant: "heading-sm/normal",
                              className: tm.dS,
                              children: Z.intl.string(Z.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: tm.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eO.D, { onClick: l, children: Z.intl.string(Z.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eO.D, {
                              onClick: a,
                              children: (0, s.jsx)(te.a, { size: "xs", color: "currentColor", className: tm.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(A.E, {
                      color: "text-muted",
                      className: tm.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eO.D, { onClick: o, children: Z.intl.string(Z.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tg = n(175671),
    tp = n(435558),
    tA = n.n(tp),
    tx = n(239947),
    tf = n(403581),
    tI = n(97808),
    tE = n(778712),
    tv = n(520117),
    tC = n(793943),
    t_ = n(763754),
    tj = n(973654),
    tN = n(467135),
    ty = n(644235),
    tT = n(698387),
    tS = n(328157),
    tb = n(988986);
function tk(e) {
    return e.map((e) => `#${e}`);
}
function tR(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tN.ko)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: tb.kL,
              children: [
                  (0, s.jsx)(tL, { message: t }),
                  (0, s.jsx)(ex.$, {
                      text: Z.intl.string(Z.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eY.default.track(X.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tC.nf)(tC.HP.CUSTOM_THEME, { from: tC.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tk(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tj.GQ)((0, ty.PC)(n.base_theme)));
                      },
                  }),
              ],
          });
}
function tL(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: a } = l,
        o = (0, t_.Ay)(l),
        d = r.useMemo(
            () =>
                (0, tp.once)(() => {
                    (0, e6.x)({ type: e4.ImpressionTypes.VIEW, name: tx.IJ.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        c = (0, tv.A)({
            onVisible: () => {
                d();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = r.useMemo(() => (void 0 === a ? "" : (0, tT.V9)(tk(a.colors), a.gradient_angle ?? 0)), [a]);
    return void 0 === a
        ? null
        : (0, s.jsxs)("div", {
              className: tb.pS,
              ref: c,
              children: [
                  (0, s.jsx)("div", { className: tb.sl, style: { background: `${u}` } }),
                  (0, s.jsxs)("div", {
                      className: tb.Ix,
                      children: [
                          (0, s.jsxs)(e7.D, {
                              variant: "heading-md/semibold",
                              className: tb.qP,
                              children: [Z.intl.string(tS.default.KSBBpC), " ", (0, s.jsx)(tf.t, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tb.Tb,
                              children:
                                  ((t = `${Z.intl.format(tS.default.fQPSEf, { username: "__USERNAME__" })}`),
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
                                                        className: tb.H,
                                                        children: [
                                                            (0, s.jsx)(tI.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tE._3.SIZE_20,
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
var tM = n(892768),
    tP = n(167189),
    tD = n(758836);
let tO = new Set(Object.values(tD.G2).filter((e) => e !== tD.G2.COLLECTION_INDEX));
var tU = n(132500),
    tG = n(172218),
    tw = n(612324),
    tB = n(575593),
    tV = n(318254),
    tH = n(890856),
    tF = n(866665),
    tz = n(825484),
    tY = n(289873),
    tK = n(444927),
    tW = n(713517),
    tJ = n(427209),
    tX = n(44120),
    tZ = n(821925),
    tq = n(309954),
    t$ = n(652165),
    tQ = n(158045),
    t0 = n(580630),
    t1 = n(815996),
    t2 = n(440938),
    t3 = n(4227),
    t5 = n(298072),
    t4 = n(993408),
    t6 = n(682301),
    t9 = n(841702),
    t8 = n(466459),
    t7 = n(777829),
    ne = n(859587),
    nt = n(918838),
    nn = n(623373),
    ni = n(536572),
    nl = n(156248),
    ns = n(38405);
class nr extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        ns.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var na = n(878112),
    no = n(722258),
    nd = n(268959),
    nc = n(387945),
    nu = n(618317),
    nm = n(140877),
    nh = n(561769),
    ng = n(661847),
    np = n(753704),
    nA = n(540737),
    nx = n(927813);
let nf = 10 * nx.A.Millis.MINUTE,
    nI = new (class {
        capacity;
        refillTokensPerMs;
        now;
        tokens;
        lastRefillAt;
        constructor({ capacity: e, refillTokensPerMs: t, now: n = Date.now }) {
            ((this.capacity = e),
                (this.refillTokensPerMs = t),
                (this.now = n),
                (this.tokens = e),
                (this.lastRefillAt = n()));
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
            return (this.refill(), this.tokens >= e && ((this.tokens -= e), !0));
        }
        getMsUntilAvailable() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return (this.refill(), this.tokens >= e) ? 0 : Math.ceil((e - this.tokens) / this.refillTokensPerMs);
        }
    })({ capacity: 10, refillTokensPerMs: 5e-4 }),
    nE = new Set(),
    nv = new Map(),
    nC = null;
function n_(e) {
    let t = nv.get(e);
    return null != t && Date.now() - t < nf;
}
var nj = n(347722),
    nN = n(935094),
    ny = n(57020),
    nT = n(61750),
    nS = n(521e3),
    nb = n(202541),
    nk = n(278324);
function nR() {
    return ((0, t9.b5)(), null);
}
function nL(e) {
    let { disableFetch: t } = e;
    return ((0, tq.W)({ disableFetch: t }), null);
}
function nM(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: l, checkoutEligiblePrices: a } = (0, ny.F)({ product: t, hasShopDiscount: n }),
        o = a[0],
        d = t.skuId,
        c = r.useCallback(() => {
            l
                ? (0, t$.B4)({
                      skuId: d,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          ((0, t1.gB)(),
                              (0, nT.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tD.gs.ORB,
                              }));
                      },
                  })
                : (0, tX.A)({
                      skuId: d,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, t1.gB)();
                      },
                  });
        }, [t, d, l, i]);
    if (null == o) return null;
    let u = l
        ? Z.intl.format(Z.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tV.C, { className: nk.fN, size: "sm", color: "currentColor" }),
          })
        : Z.intl.formatToPlainString(Z.t["cNSL/j"], { price: (0, t0.$g)(o.amount, o.currency) });
    return (0, s.jsx)(ex.$, { variant: "primary", onClick: c, text: u, fullWidth: !0 });
}
function nP(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        d = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = r.useRef(null),
        { isHoveringOrFocusing: h } = (0, tW.A)(m),
        g = r.useRef(null),
        p = (0, nt.U)(t),
        A = (0, tw.A)(g, p);
    (0, ne.x)(h, t);
    let { previewingVariantIndex: x, handleEntering: f, handleLeaving: E } = (0, nN.f)(t),
        v = r.useRef(!1);
    r.useEffect(() => {
        if (v.current || !(0, nn.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        (e > -1 && (0, t5.n)(t, e), (v.current = !0));
    }, [t, n]);
    let C = (0, t5.Q)(t),
        _ = (0, nn.B1)(t) ? (t.variants[C] ?? t) : t,
        j = _.skuId,
        { isPurchased: N } = (0, t8.h)(_),
        y = (0, u.bG)([t3.A], () => t3.A.hasPreviouslyFetched || null != t3.A.fetchError),
        T = !c || y,
        S = c && N,
        b = (0, u.bG)([B.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = B.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (B.default.getUser(t) ?? void 0) : void 0;
        }),
        k = (0, nj.X)(_),
        R = (0, t7.f)({ product: t, analyticsLocations: a }),
        L = (0, nl.G)({
            skuId: j,
            product: _,
            productName: (0, ni.VG)(_),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: R,
        }),
        M = r.useCallback(
            (e) => {
                (e.stopPropagation(), L());
            },
            [L],
        ),
        P = r.useCallback(() => {
            (0, no.B)({ skuId: j, tab: i, analyticsLocations: a });
        }, [j, i, a]),
        D = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: P }), [P]),
        O = r.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        U = null != d && tQ.Ay.canUseShopDiscounts(d),
        G = T && !S && !(0, t4.G0)(_),
        w = (0, s.jsx)(ex.$, { variant: "secondary", onClick: P, text: Z.intl.string(Z.t.KLBTgF), fullWidth: !0 }),
        V = G ? (0, s.jsx)(nM, { product: _, hasShopDiscount: U, analyticsLocations: a }) : null,
        H = k
            ? (0, s.jsx)(na.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: C,
                  giftRecipient: b,
                  giftingOrigin: nb.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        ref: m,
        className: nk.kL,
        children: [
            c && (0, s.jsx)(nR, {}),
            (0, s.jsx)(nL, { disableFetch: !(0, nn.Vx)(_) }),
            (0, s.jsxs)(nh.v3.Provider, {
                value: O,
                children: [
                    (0, s.jsx)(nS.vf.Provider, {
                        value: (0, nS.$c)(t.skuId) ? g : null,
                        children: (0, s.jsxs)(tH.s, {
                            ref: A,
                            onClick: P,
                            "aria-label": (0, ni.s7)(_),
                            className: nk.xX,
                            children: [
                                t.type === tB.R.BUNDLE &&
                                    t.previewAssets?.bgStatic != null &&
                                    (0, s.jsx)("img", { className: nk.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: nk.VH,
                                    children: (0, s.jsx)(nu.A, { skuId: n, isCardHovered: h, overrideVariantIndex: x }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: nk.GJ,
                                    children: [
                                        (0, s.jsx)(nd.A, { skuId: n }),
                                        (0, s.jsxs)("div", {
                                            className: nk.gj,
                                            children: [
                                                (0, s.jsx)(tF.m, {
                                                    text: Z.intl.string(Z.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eO.D, {
                                                        "aria-label": Z.intl.string(Z.t.Ej3B3Y),
                                                        onClick: M,
                                                        className: o()(nk.VD, { [nk.Hk]: !h }),
                                                        children: (0, s.jsx)(tJ.A, {
                                                            size: "refresh_sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(np.R, {
                                                    product: t,
                                                    selectedVariantIndex: C,
                                                    isCardHovered: h,
                                                    onTrackClick: R,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.zH,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nk.pq,
                                children: [
                                    (0, s.jsx)(nc.A, { skuId: n }),
                                    (0, s.jsxs)("div", {
                                        className: nk.y3,
                                        children: [
                                            (0, s.jsx)(nm.A, { skuId: n }),
                                            (0, s.jsx)(ng.A, {
                                                skuId: n,
                                                isCollapsed: !h,
                                                onVariantEnter: f,
                                                onVariantExit: E,
                                                overflowProps: D,
                                                onTrackClick: R,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(tz.e, { wrap: !1, fullWidth: !0, children: [w, V, H] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nD = { rootMargin: "200px" };
function nO(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t6.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tZ.A], () => tZ.A.getFetchStateForSku(e.skuId)),
        a = (0, tK.A)(() => ({ cardId: (0, tU.A)() })),
        [o, d] = r.useState(!1),
        c = (0, tG.B)(
            r.useCallback((e) => {
                e.isIntersecting && d(!0);
            }, []),
            nD,
            "loading" === i && !o,
        );
    return (r.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nE.has(t) || n_(t)) &&
            !(nE.size >= 50) &&
            (0, nA.jn)(t) &&
            (nE.add(t),
            (function e(t) {
                null == nC &&
                    (nC = setTimeout(() => {
                        ((nC = null),
                            (function () {
                                for (let e of [...nE]) (n_(e) || !(0, nA.jn)(e)) && nE.delete(e);
                                if (0 === nE.size) return;
                                let t = [];
                                for (let e of nE) {
                                    if (t.length >= 50 || !nI.tryTake()) break;
                                    (t.push(e),
                                        nE.delete(e),
                                        (function (e) {
                                            if ((nv.set(e, Date.now()), nv.size > 2e3)) {
                                                let e = nv.keys().next().value;
                                                null != e && nv.delete(e);
                                            }
                                        })(e));
                                }
                                (t.length > 0 && (0, nA.tu)({ skuIds: t }),
                                    nE.size > 0 && e(Math.max(nI.getMsUntilAvailable(), 300)));
                            })());
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && n_(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: c,
                  className: nk.kL,
                  children: (0, s.jsx)("div", { className: nk.dc, children: (0, s.jsx)(tY.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(t2.R9, { newValue: a, children: (0, s.jsx)(nP, { ...e, product: t }) })
          : null;
}
function nU(e) {
    return (0, s.jsx)(nr, { children: (0, s.jsx)(nO, { ...e }) });
}
var nG = n(661531),
    nw = n(696986),
    nB = n(666860),
    nV = n(548118),
    nH = n(250627),
    nF = n(741231),
    nz = n(749314),
    nY = n(71393),
    nK = n(722888),
    nW = n(43136),
    nJ = n(575926),
    nX = n(775429);
function nZ(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nY.A], () => nY.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nK.G)(t),
        { listingsLoaded: a } = (0, nH.bb)(t),
        d = (0, nH.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            (eY.default.track(X.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nB.H$)(t) }),
                await (0, nF.A)(X.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, e6.A)(
        { type: e4.ImpressionTypes.VIEW, name: e4.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(nX.lm, nX.dc), children: (0, s.jsx)(tY.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nX.lm,
                children: [
                    (0, s.jsx)(nW.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nw.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nX.qs,
                        children: [
                            (0, s.jsx)(nJ.h, {
                                height: "16px",
                                width: "16px",
                                color: nG.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e7.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nX.Nl,
                                children: Z.intl.string(Z.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nw.h, { size: 16 }),
                    (0, s.jsx)(e7.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: Z.intl.format(Z.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nw.h, { size: 4 }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nw.h, { size: 16 }),
                    (0, s.jsx)(nz.A, {}),
                    (0, s.jsx)(nw.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nX.kS,
                        children: [
                            (0, s.jsx)(nV.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nX.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: Z.intl.format(Z.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: Z.intl.format(Z.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nX.$h,
                                children: (0, s.jsx)(ex.$, { onClick: c, icon: nJ.A, text: Z.intl.string(Z.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nq = n(390248),
    n$ = n(282108),
    nQ = n(33358),
    n0 = n(885574),
    n1 = n(874840);
function n2(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eO.D, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("249629"), n.e("486381"), n.e("635270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: n1.L,
        children: [
            (0, s.jsx)(n0.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: n1.m, children: Z.intl.string(Z.t["2aXnfa"]) }),
        ],
    });
}
var n3 = n(974875),
    n5 = n(900019);
function n4(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([n5.A], () => n5.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, n3.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(ex.$, { variant: "secondary", text: Z.intl.string(Z.t["4q1Elf"]), onClick: l, disabled: !i });
}
var n6 = n(320448),
    n9 = n(958340),
    n8 = n(384231),
    n7 = n(959698),
    ie = n(438729),
    it = n(470964),
    ii = n(886737),
    il = n(885386),
    is = n(540999),
    ir = n(47167),
    ia = n(58703),
    io = n(935208),
    id = n(427930);
function ic(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: V.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: Z.intl.formatToPlainString(Z.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class iu {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        ((this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tl.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nY.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : n9.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, id.A)(a) ? a.messageReference?.message_id : void 0,
            c = (0, ia.Fe)(null != d ? new Date(io.default.extractTimestamp(d)) : o.message.timestamp),
            u = e.getChannel(this.parentMessage.channel_id);
        if (null != u && u.guild_id === a.messageReference?.guild_id) {
            var m;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(u.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ic(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (m = (0, ir.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: Z.intl.formatToPlainString(Z.t["+l04BN"], { origin: m, timestamp: c }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let h = a.messageReference?.guild_id;
        if (null == h) return { snapshotIndex: r };
        let g = l.getGuild(h) ?? s.getGuild(h);
        return null == g ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ic(g, c) };
    }
}
var im = n(66834),
    ih = n(449054);
async function ig(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = U.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nY.A.getGuild(t))
        try {
            (await (0, ih.Z2)(t, { object: X.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, im.k)(t),
                (l = U.A.getChannel(n)));
        } catch {}
    eY.default.track(X.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: U.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nF.A)(X.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var ip = n(387408),
    iA = n(352106);
function ix() {
    return (0, s.jsxs)("div", {
        className: iA.N1,
        children: [
            (0, s.jsx)(tJ.A, { size: "xs", className: iA.nr, color: nG.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: iA.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: Z.intl.string(Z.t.ToyvLk),
            }),
        ],
    });
}
function iI(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new iu(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [U.A, B.default, G.A, tl.A, nY.A, n9.A],
            () => l.getForwardInfo(U.A, B.default, G.A, tl.A, nY.A, n9.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            ig(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eO.D, {
              className: iA.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: iA.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: iA.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n6._, { size: "xxs", color: nG.A.colors.TEXT_MUTED }),
              ],
          });
}
function iE(e) {
    let {
            message: t,
            renderAccessories: n,
            snapshot: i,
            index: l,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: o,
        } = e,
        d = r.useMemo(() => (0, ip.A)(t, i), [t, i]),
        c = il.hD.useSetting(),
        m = il.rs.useSetting(),
        h = (0, u.bG)([is.A], () => is.A.isDeveloper),
        g = (0, n7.U)(),
        p = (0, n8.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: x,
            hasBailedAst: f,
        } = (0, it.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
            postProcessor: g ? ii.A : void 0,
        }),
        I = (0, u.bG)([U.A], () => U.A.getChannel(t.channel_id)),
        E = il.hH.useSetting();
    return null == I
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: iA.kL,
                  children: [
                      (0, s.jsx)("div", { className: iA.hD }),
                      (0, s.jsxs)("div", {
                          className: iA.Qs,
                          children: [
                              (0, s.jsx)(ix, {}),
                              (0, s.jsx)(ie.Ay, { message: d, content: A, compact: E }),
                              n({
                                  channelMessageProps: { message: d, channel: I, compact: E },
                                  hasSpoilerEmbeds: x,
                                  hasBailedAst: f,
                                  handleContextMenu: o,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: a,
                              }),
                              !g && (0, s.jsx)(iI, { message: t, snapshot: i, index: l }),
                          ],
                      }),
                  ],
              },
              l,
          );
}
function iv(e) {
    let { message: t, renderAccessories: n, disableComponentInteractivity: i, onMediaItemContextMenu: l } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, r) =>
            (0, s.jsx)(
                iE,
                {
                    message: t,
                    snapshot: e,
                    index: r,
                    renderAccessories: n,
                    disableComponentInteractivity: i,
                    onMediaItemContextMenu: l,
                },
                r,
            ),
        ),
    });
}
var iC = n(109112),
    i_ = n(62010),
    ij = n(369606),
    iN = n(409626),
    iy = n(49491),
    iT = n(692969),
    iS = n(738250),
    ib = n(575568);
function ik(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: r,
            openGameProfile: a,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, iS.A)({ gameId: t }),
                r = (0, iT.A)({ gameId: t, source: iN.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                a = (0, iy.A)(l),
                o = null != l && null != r && !s && !a,
                d = l?.getIconURL(80) ?? null,
                c = l?.getBannerURL(300) ?? l?.getScreenshotURL(0, 300) ?? null;
            return {
                game: l ?? null,
                resolvedGameId: i,
                iconUrl: d,
                bannerUrl: c,
                openGameProfile: r,
                shouldRender: o,
            };
        })({ gameId: t, sourceUserId: n });
    return o && null != i && null != a
        ? (0, s.jsxs)(tH.s, {
              className: ib.E6,
              onClick: a,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: ib.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: ib.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: ib.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: ib.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: ib.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: ib.EU,
                                    children: (0, s.jsx)(iC._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: ib.Qs,
                              children: [
                                  (0, s.jsx)(e7.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: ib.k3,
                                          children: (0, s.jsx)(i_.E, {
                                              variant: "secondary",
                                              type: {
                                                  text: Z.intl.formatToPlainString(Z.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: ij.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eM.K, {
                              icon: n6._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iR = n(281445),
    iL = n(554146),
    iM = n(933832),
    iP = n(624479),
    iD = n(780907),
    iO = n(131607),
    iU = n(569926),
    iG = n(95035),
    iw = n(403362),
    iB = n(196736),
    iV = n(614393),
    iH = n(143407),
    iF = n(685743),
    iz = n(349085),
    iY = n(581453),
    iK = n(342942),
    iW = n(174861),
    iJ = n(49999),
    iX = n(344045),
    iZ = n(116947);
function iq(e) {
    let { code: t } = e,
        n = r.useMemo(() => (0, iW.GF)(t), [t]);
    r.useEffect(() => {
        iD.Ay.getDetectableGames();
    }, []);
    let i = (0, iz.A)(n?.game_id, "cover"),
        { data: l } = (0, iU.I)(n?.game_id),
        a = (0, iB.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [d, c] = (0, iO.kn)([iL.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = d !== iL.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iR.X.SHOCKBYTE,
        h = O.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: x } = (0, iF.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
        I = r.useCallback(() => {
            (0, t1.Cz)({
                tab: tD.G2.GAME_SERVERS,
                analyticsLocations: [f.A.GAME_SERVER_PAGE],
                analyticsSource: f.A.GAME_SERVER_PAGE,
            });
        }, []),
        E = r.useMemo(
            () =>
                null == n || null == n.sku_id || "" === n.sku_id
                    ? null
                    : {
                          id: "0",
                          gameId: n.game_id,
                          name: n.name,
                          regionId: "",
                          regionName: n.region_name ?? void 0,
                          planId: n.sku_id,
                          planName: n.plan_name ?? "",
                          providerType: m,
                          serverIP: n.ip ?? void 0,
                          port: n.port ?? void 0,
                          entitlementId: "",
                      },
            [n, m],
        ),
        v = r.useCallback(() => {
            null != E &&
                (u
                    ? (0, iY.A)(h, E)
                    : (0, iK.A)({
                          provider: m,
                          onAccept: () => {
                              (c(iJ.i.TAKE_ACTION), (0, iY.A)(h, E));
                          },
                      }));
        }, [E, u, m, c, h]),
        C = r.useCallback(() => {
            (0, iK.A)({
                provider: m,
                onAccept: () => {
                    (c(iJ.i.TAKE_ACTION), p());
                },
            });
        }, [m, c, p]);
    if (null == n) return null;
    let _ = [l?.name, n.plan_name].filter(iw.Vq).join("  \u2022  ");
    return (0, s.jsxs)("div", {
        className: iZ.E6,
        children: [
            (0, s.jsxs)("div", {
                className: iZ.FG,
                children: [
                    (0, s.jsxs)("div", {
                        className: iZ.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iZ.oL,
                                children: [
                                    "" !== o
                                        ? (0, s.jsx)("img", { className: iZ.vT, src: o, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: iZ.iv,
                                              children: (0, s.jsx)(A.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: iZ.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: iZ.TK,
                                children: [
                                    (0, s.jsx)(e7.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== _ &&
                                        (0, s.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                ],
                            }),
                            a &&
                                (0, s.jsx)("div", {
                                    className: iZ.xG,
                                    children: (0, s.jsx)(eM.K, {
                                        variant: "secondary",
                                        icon: eL.U,
                                        "aria-label": Z.intl.string(iX.default.F5W36W),
                                        onClick: I,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: iZ.$D,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iZ.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: Z.intl.string(iX.default.mJlz3T),
                                    }),
                                    (0, s.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children:
                                            null != n.region_name && "" !== n.region_name ? n.region_name : "\u2014",
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: iZ.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: Z.intl.string(iX.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(A.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: iZ.qy,
                                                children: [
                                                    (0, s.jsx)(A.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eO.D, {
                                                        className: iZ.cL,
                                                        "aria-label": Z.intl.string(Z.t.OpuAlK),
                                                        onClick: p,
                                                        children: x
                                                            ? (0, s.jsx)(iM.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(iP.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(iG.A, {
                                                onClick: C,
                                                children: Z.intl.string(iX.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, s.jsx)("div", { className: iZ.PD, children: (0, s.jsx)(iH.l5, { onClick: v }) }),
                ],
            }),
            (0, s.jsx)("div", { className: iZ.uV, children: (0, s.jsx)(iV.T, { imageUrl: o }) }),
        ],
    });
}
class i$ extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        ns.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function iQ(e) {
    let { code: t } = e;
    return (0, s.jsx)(i$, { children: (0, s.jsx)(iq, { code: t }) });
}
var i0 = n(643612),
    i1 = n(607399),
    i2 = n(702841),
    i3 = n(529200),
    i5 = n(395671),
    i4 = n(993748),
    i6 = n(212534),
    i9 = n(820496);
function i8(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, i2.yK)(
            [i6.A],
            () => [i6.A.getApplication(t), i6.A.isInvalidApplication(t), i6.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i2.bG)([w.A], () => w.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tG.K)(u),
        h = r.useCallback(() => {
            eY.default.track(X.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i1.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, i4.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === i6.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eY.default.track(X.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i1.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(i3.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t.j4KtLa) }),
                  (0, s.jsx)(i3.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: i9.k,
                          children: [
                              (0, s.jsx)(i3.A.Icon, { expired: !0 }),
                              (0, s.jsx)(i3.A.Info, {
                                  expired: !0,
                                  title: Z.intl.string(Z.t.NaQLEx),
                                  children: Z.intl.string(Z.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === i6.e.FETCHING
          ? (0, s.jsxs)(i3.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t.m9hXGR) }),
                    (0, s.jsx)(i3.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(es, { app: i5.Ay.createFromServer(i), linkType: ei.J.APP_DISCOVERY, onView: h, message: n });
}
var i7 = n(229527),
    le = n(870136),
    lt = n(330075),
    ln = n(412728);
function li(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nH.Qi)(n, i),
        r = (0, i2.bG)([w.A], () => w.A.getGuildId());
    return ((0, e6.A)(
        {
            type: ln.z.VIEW,
            name: e4.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(lt.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var ll = n(484724),
    ls = n(953727);
function lr(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, ls.A)(l),
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
var la = n(122906),
    lo = n(401755),
    ld = n(313977),
    lc = n(508557);
function lu(e) {
    let { code: t } = e,
        i = (0, u.bG)([la.A], () => la.A.getGuildTemplate(t));
    if (null == i || i.state === lo.QB.RESOLVING)
        return (0, s.jsxs)(i3.A, {
            children: [
                (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t.Xj87Yf) }),
                (0, s.jsx)(i3.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lo.QB.EXPIRED)
        return (0, s.jsxs)(i3.A, {
            children: [
                (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t.C7ZRNw) }),
                (0, s.jsxs)(i3.A.Body, {
                    children: [
                        (0, s.jsx)(i3.A.Icon, { expired: !0 }),
                        (0, s.jsx)(i3.A.Info, { expired: !0, title: Z.intl.string(Z.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(ex.$, { disabled: !0, variant: "secondary", text: Z.intl.string(Z.t.W7NTWm) })
        : (0, s.jsx)(ex.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lo.QB.RESOLVING &&
                      (0, g.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("860350"),
                              n.e("122326"),
                              n.e("562772"),
                              n.e("461123"),
                              n.e("734187"),
                              n.e("978953"),
                              n.e("324866"),
                              n.e("883952"),
                              n.e("582486"),
                              n.e("419580"),
                              n.e("816198"),
                              n.e("592152"),
                          ]).then(n.bind(n, 72715));
                          return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                      });
              },
              loading: i.state === lo.QB.ACCEPTING,
              variant: "active",
              text: Z.intl.string(Z.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(i3.A, {
        children: [
            (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t.kAvFkO) }),
            (0, s.jsxs)(i3.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(lr, { className: ld.K }),
                            (0, s.jsx)(i3.A.Info, {
                                title: i.name,
                                children: Z.intl.format(Z.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var lm = n(21599),
    lh = n(681154),
    lg = n(155718);
let lp = new Set([
    lh.ContentInventoryEntryType.TOP_ARTIST,
    lh.ContentInventoryEntryType.TOP_GAME,
    lh.ContentInventoryEntryType.PLAYED_GAME,
    lh.ContentInventoryEntryType.WATCHED_MEDIA,
    lh.ContentInventoryEntryType.LISTENED_SESSION,
    lh.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lA = n(429987),
    lx = n(857071),
    lf = n(46054),
    lI = n(731068),
    lE = n(619517),
    lv = n(207133),
    lC = n(844222),
    l_ = n(463930),
    lj = n(251391),
    lN = n(601255),
    ly = n(562819),
    lT = n(234914),
    lS = n(59318),
    lb = n(837528),
    lk = n(754459),
    lR = n(967144),
    lL = n(342296),
    lM = n(696451),
    lP = n(218394);
function lD(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, ls.A)(l),
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
var lO = n(717125),
    lU = n(376943),
    lG = n(36491),
    lw = n(752755),
    lB = n(461715),
    lV = n(381941),
    lH = n(966101);
function lF(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lB.CI)(e),
                i = (0, i2.bG)(
                    [lM.Ay, O.default],
                    () => {
                        let e = O.default.getId();
                        return lM.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, i2.bG)(
                    [lO.A],
                    () => null != n && n?.channelId != null && lO.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(X.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, i2.cf)(
                    [lw.A, nY.A, U.A, B.default, w.A],
                    () => {
                        let e = lw.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = nY.A.getGuild(n?.guildId),
                            i = U.A.getChannel(n?.channelId),
                            l = B.default.getUser(e?.author_id),
                            s = w.A.getGuildId(),
                            r = null != i && (0, lU.nc)(i);
                        return {
                            rawMediaPostEmbedData: e,
                            guild: t,
                            parentChannel: i,
                            user: l,
                            selectedGuildId: s,
                            canAccess: r,
                        };
                    },
                    [n],
                ),
                h = r.useMemo(() => {
                    let e = (0, lB.tU)({
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
                        (lw.A.getEmbedFetchState(n.threadId) !== lw.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lG.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, lk.A)(n.id, lV.Fd),
        u = (0, lb.VL)(n, i, c, !0),
        m = il.kt.useSetting(),
        h = (0, lP.j)(),
        [g, p] = r.useState(!1),
        [x, I] = r.useState(d?.coverImage == null),
        E = (0, i2.bG)([lM.Ay, B.default], () => lM.Ay.isMember(d?.guildId, B.default.getCurrentUser()?.id), [d]),
        v = (0, i2.bG)([lM.Ay], () => (d?.authorId != null ? lM.Ay.getMember(d.guildId, d.authorId) : null)),
        C = (0, lN.A)(v?.avatarDecoration != null ? v?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [v?.colorString ?? "inherit", v?.colorStrings ?? null, v?.colorRoleId], [v]),
        y = (0, lR.gn)(v?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: T } = r.useContext(lC.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        R = r.useCallback(() => {
            p(!1);
        }, [p]),
        L = r.useCallback(async () => {
            null != d &&
                ((0, nB.zV)(X.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: E,
                }),
                d.canAccess
                    ? (0, nF.A)(X.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : E
                      ? (0, nF.A)(X.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await ih.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, E]);
    if (null == d) return null;
    let M = (0, V.F_)({ avatarDecoration: C, size: (0, ly.Te)(tE._3.SIZE_40), canAnimate: S }),
        P = d.user?.getAvatarURL(d.guildId, 40, S);
    function D() {
        T.enabled || b((e) => !e);
    }
    let G = d.coverImage,
        H = null != G && (0, lS.ge)(G);
    return (0, s.jsxs)("div", {
        className: lH.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lH.iT,
                onMouseEnter: k,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: Z.intl.string(Z.t.rIbh8H),
                                  className: o()(lH.xn, { [lH.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })
                            : (0, s.jsx)(lT.A, {
                                  src: !(h && (m || g)) && H ? `${G}?format=png` : G,
                                  backgroundSrc: `${G}?format=png`,
                                  alt: Z.intl.string(Z.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lH.xn, { [lH.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lH.q_,
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eO.D, {
                            onClick: L,
                            children: (0, s.jsx)("div", {
                                className: lH.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lH.BS,
                                    children: [
                                        (0, s.jsx)(lD, { color: nG.A.colors.WHITE.css }),
                                        (0, s.jsx)(A.E, {
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
            (0, s.jsxs)("div", {
                className: lH.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lH.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lH.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lH.hF, lH.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lH._5,
                        children: [
                            null != d.authorId &&
                                null != P &&
                                (0, s.jsx)(lL.A, {
                                    targetElementRef: a,
                                    userId: d.authorId,
                                    guildId: d.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: d.avatarUrl,
                                    newAnalyticsLocations: [f.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, s.jsx)("div", {
                                            onMouseEnter: D,
                                            onMouseLeave: D,
                                            children: (0, s.jsx)(tI.eu, {
                                                ...e,
                                                ref: a,
                                                size: tE._3.SIZE_40,
                                                src: P,
                                                "aria-label": Z.intl.string(Z.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lH.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lH.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(lj.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lH.Xg,
                                                }),
                                            (0, s.jsx)(eO.D, {
                                                onClick: L,
                                                className: lH.HA,
                                                children: (0, s.jsx)(e7.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: d.channelName ?? d.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != d.authorName &&
                                        (0, s.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lH.wn,
                                            children: Z.intl.format(Z.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, s.jsx)(l_.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: y,
                                                                className: lH.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                lL.A,
                                                                {
                                                                    targetElementRef: l,
                                                                    userId: d.authorId,
                                                                    guildId: d.guildId,
                                                                    channelId: i.id,
                                                                    messageId: n.id,
                                                                    roleId: N,
                                                                    avatarUrl: d.avatarUrl,
                                                                    newAnalyticsLocations: [f.A.USERNAME],
                                                                    children: (e) =>
                                                                        (0, s.jsx)(l_.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: y,
                                                                            className: lH.fh,
                                                                        }),
                                                                },
                                                                (0, tU.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(ex.$, { variant: "primary", onClick: L, text: d.ctaText })
                                : (0, s.jsx)(ex.$, { onClick: L, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lz = n(492230),
    lY = n(378058),
    lK = n(704413),
    lW = n(537039),
    lJ = n(711038),
    lX = n(892340),
    lZ = n(803306),
    lq = n(491182),
    l$ = n(622868),
    lQ = n(10364),
    l0 = n(378570),
    l1 = n(138298),
    l2 = n(358047),
    l3 = n(536637),
    l5 = n.n(l3),
    l4 = n(606049),
    l6 = n(943815),
    l9 = n(447215),
    l8 = n(256416),
    l7 = n(832038),
    se = n(318626),
    st = n(513653);
let sn = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = B.default.getUser(t),
        u = r.useMemo(() => (i ? (0, l6.A)((0, ia.i$)(l5()(), "LT")) : null), [i]),
        m = (0, l9.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, t_.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tE.FT)(tE._3.SIZE_16)) : st,
        g =
            null != c
                ? Z.intl.format(l8.default["+zqXZs"], { username: c.username, onUserClick: m })
                : Z.intl.string(l8.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(se.NB, se.JZ, u),
        children: [
            (0, s.jsx)(tI.eu, { src: h, size: tE._3.SIZE_16, className: l7.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: l7.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: l7.Ek, children: "\u2022" }),
                    (0, s.jsx)(l4.A, { timestamp: d, className: l7.vE }),
                ],
            }),
        ],
    });
};
var si = n(942925);
function sl(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new iu(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [U.A, B.default, G.A, tl.A, nY.A, n9.A],
            () => l.getForwardInfo(U.A, B.default, G.A, tl.A, nY.A, n9.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = U.A.getChannel(t.channel_id),
                n = nY.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = eu.Ay.getCurrentlySelectedChannelId(),
                s = l2.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (l1.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l0.iN)(i),
                eY.default.track(X.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eO.D, {
              className: si.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: si.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: si.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n6._, { size: "xxs", color: nG.A.colors.TEXT_MUTED }),
              ],
          });
}
function ss(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, t_.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lk.A)(e.id, lV.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, lb.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, lb.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(lq.A, {
        childrenExecutedCommand: (0, s.jsx)(sn, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(l$.Ay, {
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
            renderPopout: lQ.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(ie.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: si.iU,
        author: o,
    });
}
function sr(e) {
    let { message: t, snapshot: n, index: i, renderAccessories: l } = e,
        [a, o] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lZ.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = r.useMemo(() => {
            let e = (0, ip.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = il.hD.useSetting(),
        m = il.rs.useSetting(),
        h = (0, u.bG)([is.A], () => is.A.isDeveloper),
        g = (0, n8.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: p,
            hasSpoilerEmbeds: A,
            hasBailedAst: x,
        } = (0, it.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        f = (0, u.bG)([U.A], () => U.A.getChannel(t.channel_id));
    return null == f
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: si.kL,
                  children: (0, s.jsxs)("div", {
                      className: si.Qs,
                      children: [
                          (0, s.jsx)(ss, {
                              mergedMessageRecord: d,
                              content: p,
                              channel: f,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          l({
                              channelMessageProps: { message: d, channel: f, compact: !1 },
                              hasSpoilerEmbeds: A,
                              hasBailedAst: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: si.Mf,
                          }),
                          (0, s.jsx)(sl, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sa(e) {
    let { message: t, renderAccessories: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(sr, { message: t, snapshot: e, index: i, renderAccessories: n }, i),
        ),
    });
}
var so = n(302031),
    sd = n(738188),
    sc = n(123292),
    su = n(239093),
    sm = n(798362);
function sh(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === su.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === su.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eO.D, {
              onClick: function () {
                  null != l &&
                      (0, g.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("252964"),
                              n.e("726464"),
                              n.e("483518"),
                              n.e("51194"),
                              n.e("292030"),
                              n.e("190255"),
                          ]).then(n.bind(n, 954098));
                          return (t) =>
                              (0, s.jsx)(e, {
                                  classificationId: l,
                                  source: su.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sm.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sm.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sm.U1,
                              children: [
                                  (0, s.jsx)(sd.WarningIcon, {
                                      className: sm.QW,
                                      color: nG.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: Z.intl.string(Z.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sm.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: Z.intl.format(Z.t.eevFb6, { daysAgo: l5()().diff(l5().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sm.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: Z.intl.string(Z.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: sm.xQ,
                      children: (0, s.jsx)(sc.Q, { text: Z.intl.string(Z.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sg = n(28863),
    sp = n(393033),
    sA = n(975430);
function sx(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sg.Anchor, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("252964"),
                    n.e("726464"),
                    n.e("483518"),
                    n.e("51194"),
                    n.e("292030"),
                    n.e("190255"),
                ]).then(n.bind(n, 954098));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: su.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sA.zh,
        children: Z.intl.string(Z.t.QsqdXC),
    });
}
function sf(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sg.Anchor, { className: sA.zh, href: t, children: Z.intl.string(Z.t["8/GdRB"]) });
}
function sI(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case su.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(sx, { classificationId: n });
        case su.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(sf, { learnMoreLink: i });
        default:
            return null;
    }
}
function sE(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e8.k, { size: "xs", color: nG.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(sd.WarningIcon, { color: nG.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: sA.Kk, children: n[t] }) : null;
}
function sv(e) {
    let { children: t, theme: n } = e,
        i = { default: sA._y, danger: sA.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sC(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sp.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eO.D, {
              className: sA.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sA.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sA.U1,
                              children: [
                                  (0, s.jsx)(sE, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sA.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: Z.intl.format(Z.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l5()().diff(l5().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sA.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(sv, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              sI,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var s_ = n(44724),
    sj = n(227327),
    sN = n(638495),
    sy = n(43990),
    sT = n(429913),
    sS = n(976860),
    sb = n(371794),
    sk = n(871123),
    sR = n(439303),
    sL = n(353281),
    sM = n(832163),
    sP = n(637893),
    sD = n(376680),
    sO = n(317560),
    sU = n(467884),
    sG = n(661070);
function sw(e) {
    let t,
        { guildOrApplication: n, skuIds: i, destinationGuildId: l, channelId: a, messageId: d } = e,
        c = (0, sN.k)(),
        m = (0, sP._)("SocialLayerStorefrontEmbed"),
        h = "guild" === n.type ? n.guildId : void 0,
        g = "application" === n.type ? n.applicationId : void 0,
        p = (0, sD.A)({ applicationId: g, guildId: h }),
        A = p?.storefront,
        x = g ?? A?.applicationId,
        E = (0, sT.h)(x),
        v = A?.application?.name ?? E?.name ?? null,
        C = "guild" === n.type ? n.guildId : ((0, sk.n5)(x) ?? null),
        _ = (0, u.yK)([eF.A], () => (null == x ? [] : i.filter((e) => eF.A.get(e)?.applicationId === x)), [i, x]),
        { analyticsLocations: j } = (0, I.Ay)(f.A.SLAYER_STOREFRONT_EMBED),
        N = r.useMemo(() => ({ pageSection: "storefront_embed", placement: sR.Ye.MULTI_SKU_EMBED }), []),
        y = r.useCallback(() => {
            (null != x &&
                eY.default.track(X.HAw.SLAYER_STOREFRONT_EMBED_SHOP_ALL_CLICKED, {
                    application_id: x,
                    application_name: v,
                    guild_id: C,
                    destination_guild_id: l,
                    channel_id: a,
                    message_id: d,
                    sku_ids: _,
                    sku_count: _.length,
                }),
                (0, s_.default)("guild" === n.type ? { guildId: n.guildId } : { applicationId: n.applicationId }));
        }, [x, v, a, l, n, d, C, _]),
        T = r.useCallback(
            (e, t) => {
                let { skuId: n, applicationId: i } = t;
                (0, sO.R)({ skuId: n, applicationId: i, isStorefront: !1, analyticsLocations: j, contextKey: c });
            },
            [j, c],
        ),
        S = r.useCallback(
            (e, t, n) => {
                if (null == x) return;
                let i = sM.A.getStorefrontState(x)?.activePage ?? 0;
                (0, sS.bG)(X.BVt.COLLECTIBLES_SHOP_GAME_SHOP(x, i, e, n));
            },
            [x],
        );
    if (!m) return null;
    if (p?.state === "loading")
        return (0, s.jsx)("div", { className: o()(sG.kL, sG.g4), children: (0, s.jsx)(tY.y, {}) });
    if (null == A || null == x || 0 === _.length) return null;
    let b =
            null !=
            (t = A.pages.find((e) => e.leaderboard?.backgroundImageAssetId != null)?.leaderboard
                ?.backgroundImageAssetId)
                ? (0, sb.YE)(A.applicationId, t, 1024, sk.pV)
                : null,
        k = A.logoAssetId ?? A.lightThemeLogoAssetId,
        R = null != k ? (0, sb.YE)(x, k, 128) : null;
    return (0, s.jsx)(sy.N, {
        theme: X.NJ8.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: o()(sG.kL, e),
                children: [
                    (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: sG.Tp,
                        children:
                            null != b &&
                            (0, s.jsx)("div", { className: sG.iL, style: { backgroundImage: `url(${b})` } }),
                    }),
                    (0, s.jsx)("div", {
                        className: sG.wx,
                        children: (0, s.jsxs)("div", {
                            className: sG.VW,
                            children: [
                                null != R && (0, s.jsx)("img", { className: sG.wm, src: R, alt: "" }),
                                (0, s.jsx)(e7.D, {
                                    className: sG.DD,
                                    variant: "heading-md/semibold",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.title,
                                }),
                                (0, s.jsx)(ex.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    icon: eL.U,
                                    text: Z.intl.string(Z.t.RSyoZu),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(sR.E9, {
                        newValue: N,
                        children: (0, s.jsx)(sL.J, {
                            viewProductDetails: S,
                            children: (0, s.jsx)("div", {
                                className: o()(sG.Vg, { [sG.Me]: _.length % 2 == 1 }),
                                children: _.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: o()(sG.ux, { [sG.Xv]: 0 === t && _.length % 2 == 1 }),
                                            children: (0, s.jsx)(sU.Ay, {
                                                className: sG.Nr,
                                                skuId: e,
                                                positionInSection: t,
                                                variant: sU.s6.SMALL,
                                                onClick: T,
                                                analyticsLocations: j,
                                                disableMultiSelect: !0,
                                            }),
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        }),
                    }),
                ],
            }),
    });
}
var sB = n(50777),
    sV = n(288254),
    sH = n(319060),
    sF = n(812282),
    sz = n(265872),
    sY = n(684519),
    sK = n(188645),
    sW = n(240248),
    sJ = n(256449),
    sX = n(194004),
    sZ = n(148355),
    sq = n(3026),
    s$ = n(862482),
    sQ = n(305866),
    s0 = n(847374),
    s1 = n(964486),
    s2 = n(235986),
    s3 = n(624793),
    s5 = n(636537),
    s4 = n(639245),
    s6 = n(87719),
    s9 = n(725807),
    s8 = n(750385),
    s7 = n(850992),
    re = n(625494),
    rt = n(698279),
    rn = n(665055),
    ri = n(844749);
function rl(e) {
    (eY.default.track(X.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
        location_section: X.JJy.STICKER_POPOUT,
    }),
        (0, s6.e)());
}
function rs(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(s2.A, {
        children: [
            (0, s.jsx)(sZ.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(s2.A, {
                direction: s2.A.Direction.VERTICAL,
                justify: s2.A.Justify.CENTER,
                className: ri.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "text-md/semibold", children: (0, s.jsx)(sq.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function rr(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [a, o, d] = (0, u.yK)(
            [s8.A],
            () => [s8.A.getStickerPack(n.pack_id), !s8.A.hasLoadedStickerPacks, s8.A.isPremiumPack(n.pack_id)],
            [n],
        ),
        c = (function (e) {
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
    (0, sJ.Sr)(n.pack_id);
    let m = (0, sJ.pD)(i),
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
        eY.default.track(X.HAw.OPEN_POPOUT, {
            type: X.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nB.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, s.jsx)(sK.Y0, { className: rn.v0 })
        : (0, s.jsx)(sQ.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sK.Uq, {
                  className: rn.Bm,
                  children: [
                      (0, s.jsx)(e7.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? Z.intl.format(Z.t.auckXz, { stickerPackName: a.name })
                              : Z.intl.format(Z.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: rn.pQ,
                          children: c.map((e) => (0, s.jsx)(sZ.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: rn.j0,
                              children: (0, s.jsx)(
                                  ex.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: Z.intl.string(Z.t.GPy3Ar),
                                      autoFocus: !0,
                                      onClick: function () {
                                          null != a &&
                                              (d &&
                                                  (function (e) {
                                                      let { stickerPack: t, stickerPickerCategories: n } = e;
                                                      re._.dispatchToLastSubscribed(X.jej.OPEN_EXPRESSION_PICKER, {
                                                          activeView: rt.kx.STICKER,
                                                      });
                                                      let i = n.findIndex((e) => e.id === t.id);
                                                      -1 !== i && s7.bM.setActiveCategoryIndex(i);
                                                  })({ stickerPack: a, stickerPickerCategories: m }),
                                              t());
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              }),
          });
}
function ra(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
        [d, c] = r.useState(null),
        [m, h] = r.useState(!1),
        g = B.default.getCurrentUser(),
        p = tQ.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([nY.A], () => nY.A.getGuild(n.guild_id)),
        f = null != x,
        [I, E] = r.useState(!1),
        [v, C] = r.useState(null),
        _ = r.useMemo(
            () => ({
                page: null != i.guild_id ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                section: X.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, nB.dI)(i) }),
        N = { stickerSourceGuild: x, refreshPositionKey: a },
        y = r.useRef(N);
    (r.useEffect(() => {
        y.current = N;
    }),
        r.useEffect(() => {
            let { stickerSourceGuild: e } = y.current;
            !(async function () {
                if (null == e || e.features.has(X.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    c(
                        await ((t = n.id),
                        s5.Bo.get({ url: X.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ih.jE)(e.body) : null))
                            .catch(() => null)),
                    );
                }
                h(!0);
            })();
        }, [n.id, f]));
    let T = n.guild_id === i.getGuildId(),
        S = null != d,
        b = !1,
        k = "Custom Sticker Popout";
    p
        ? (t = f
              ? T
                  ? Z.intl.string(Z.t.fZ0DiG)
                  : Z.intl.string(Z.t["1f6D9m"])
              : S
                ? Z.intl.string(Z.t.yHmoR9)
                : Z.intl.string(Z.t.vZaScH))
        : f
          ? ((t = T ? Z.intl.string(Z.t.jNphpt) : Z.intl.string(Z.t.lyD5ZW)),
            (b = !0),
            (k = "Custom Sticker Popout (Upsell)"))
          : S
            ? ((t = Z.intl.string(Z.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
            : ((t = Z.intl.format(Z.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (rl(i), l());
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let R = !b && !f && S && p;
    return (r.useEffect(() => {
        let { refreshPositionKey: e } = y.current;
        e();
    }, [m, d]),
    (0, s1.Ay)(() => {
        eY.default.track(X.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, s.jsx)(sQ.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sK.Uq, {
                  className: ri.Bm,
                  children: [
                      (function () {
                          async function e() {
                              if (null == d || f) return;
                              l();
                              let e = d.id;
                              try {
                                  (await im.A.joinGuild(e), im.A.transitionToGuildSync(e));
                              } catch {}
                          }
                          return (0, s.jsxs)("div", {
                              className: ri.gH,
                              children: [
                                  (0, s.jsx)(rs, { description: t, sticker: n }),
                                  b &&
                                      (0, s.jsx)(s9.A, {
                                          className: ri.lI,
                                          subscriptionTier: nb.pe.TIER_2,
                                          size: s$.$n.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: Z.intl.string(Z.t["gl/XHJ"]) },
                                          onSubscribeModalClose: (t) => (t ? e() : l()),
                                          postSuccessGuild: f || null == d ? void 0 : d,
                                          premiumModalAnalyticsLocation: _,
                                      }),
                                  R &&
                                      (0, s.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: ri.lI,
                                          children: (0, s.jsx)(ex.$, {
                                              variant: "primary",
                                              size: "sm",
                                              text: Z.intl.string(Z.t.riu2R5),
                                              fullWidth: !0,
                                              autoFocus: !0,
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
                                  t = null != d ? s3.GO.createFromDiscoverableGuild(d) : s3.GO.createFromGuildRecord(x);
                              return (0, s.jsxs)("div", {
                                  className: ri.tl,
                                  children: [
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: ri.YW,
                                          children: f ? Z.intl.string(Z.t.kx6pEG) : Z.intl.string(Z.t.pDE7Gb),
                                      }),
                                      (0, s.jsx)(s4.G7, {
                                          expressionSourceGuild: t,
                                          hasJoinedExpressionSourceGuild: f,
                                          isDisplayingJoinGuildButtonInPopout: R,
                                          closePopout: l,
                                      }),
                                      !f &&
                                          (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(eO.D, {
                                                      onClick: function () {
                                                          (a(), E(!I));
                                                      },
                                                      className: ri.wK,
                                                      children: (0, s.jsxs)(s2.A, {
                                                          children: [
                                                              (0, s.jsx)(A.E, {
                                                                  className: ri.__invalid_showMoreEmojisLabel,
                                                                  variant: "text-xs/normal",
                                                                  color: "none",
                                                                  children: Z.intl.string(Z.t.vtH5hn),
                                                              }),
                                                              (0, s.jsx)(s0.a, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: o()(ri.ZB, { [ri.cP]: !I }),
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  I &&
                                                      (0, s.jsx)(s2.A, {
                                                          wrap: s2.A.Wrap.WRAP,
                                                          align: s2.A.Align.START,
                                                          justify: s2.A.Justify.START,
                                                          className: ri.LX,
                                                          children: e.map((e) =>
                                                              (0, s.jsx)(
                                                                  tF.m,
                                                                  {
                                                                      text: e.name,
                                                                      ...sK.Uk,
                                                                      children: (0, s.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: o()(ri.Th, {
                                                                                  [rn.vT]: null != v && v !== e.id,
                                                                              }),
                                                                              onMouseEnter: () => {
                                                                                  C(e.id);
                                                                              },
                                                                              onMouseLeave: () => {
                                                                                  C(null);
                                                                              },
                                                                              children: (0, s.jsx)(sZ.A, {
                                                                                  size: 32,
                                                                                  enlargeOnInteraction: !0,
                                                                                  enlargeWithName: !1,
                                                                                  enlargeScaleFactor: 2,
                                                                                  isInteracting: v === e.id,
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
              }),
          })
        : (0, s.jsx)(sK.Y0, { className: rn.v0 });
}
function ro(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(sQ.l, {
        "aria-label": i.name,
        children: (0, s.jsx)(sK.Uq, {
            className: rn.Bm,
            children: (0, s.jsx)(rs, {
                sticker: i,
                description: Z.intl.format(Z.t.hGWuxU, {
                    openPremiumSettings: () => {
                        (n(), rl(t));
                    },
                }),
            }),
        }),
    });
}
let rd = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, sJ.Zq)(t, !0);
    return null != r && (0, lY.FD)(r)
        ? (0, s.jsx)(rr, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lY.Xw)(r)
          ? (0, s.jsx)(ra, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? (0, s.jsx)(ro, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(sK.Y0, {});
};
var rc = n(751686);
let ru = (0, sW.xI)(sH.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    rm = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, sJ.Zq)(t, i),
            { analyticsLocations: m } = (0, I.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: rc.Zl,
                children: [(0, s.jsx)(sF.s, { size: "xs", color: "currentColor", className: rc.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: rc.be,
                children: (0, s.jsx)(sz.Y, {
                    align: "center",
                    animation: sz.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(rd, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tF.m, {
                            ...sK.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, sY.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nB.Ay.trackWithMetadata(X.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nb.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sX.Tw)(e.format_type),
                                        is_custom: (0, sX.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eO.D, {
                                innerRef: l,
                                className: rc.q7,
                                onClick: (e) => {
                                    (o(!a), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(sZ.A, { isInteracting: i, size: ru, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var rh = n(406704),
    rg = n(531142),
    rp = n(140735),
    rA = n(442433),
    rx = n(143413),
    rf = n(321045),
    rI = n(456874),
    rE = n(707539),
    rv = n(80682),
    rC = n(521981),
    r_ = n(448368),
    rj = n(943220),
    rN = n(838541);
function ry(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [G.A],
            () => ({ isBlocked: G.A.isBlockedForMessage(t), isIgnored: G.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, rv.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, rC.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        d = (0, sV.IL)(n);
    return (0, s.jsxs)("div", {
        className: se.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: se.FJ }),
            (0, s.jsx)(rj.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: se.Au,
                children: d
                    ? (0, s.jsx)("span", { className: se.dp, children: Z.intl.string(Z.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, r_.o)(e, t, n, i, se.tP, {
                              trailingIconClass: se._v,
                              leadingIconClass: se.a5,
                              iconSize: rN.eJ,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [a, r ?? (0, s.jsx)("span", { className: se.dp, children: l }), o],
                          });
                      })(t, o, i, l),
            }),
        ],
    });
}
var rT = n(747926),
    rS = n(650583),
    rb = n(77462);
function rk(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([U.A], () => U.A.getChannel(io.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(rR, { channel: i, compact: n, isSystemMessage: (0, rx.A)(t) });
}
function rR(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, ir.Ay)(a),
        h = (0, u.bG)([rI.A], () => rI.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([rI.A], () => rI.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([rI.A], () => rI.A.getCount(t.id))),
            (r = (0, rE.JO)(t)),
            t.threadMetadata?.archived
                ? Z.intl.string(Z.t.ZTo4HS)
                : null == l || 0 === l
                  ? Z.intl.string(Z.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: Z.intl.string(Z.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: rb.vE, children: (0, rE.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(ry, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: rb.vE, children: (0, rE.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(rb.GI, { [rb.E]: !d, [rb.E_]: c }) }),
            (0, s.jsx)(eO.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, rT.JA)(a, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === rS.dh.SPACE || e.key === rS.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, rT.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, rA.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("400744"),
                            n.e("947502"),
                            n.e("603998"),
                            n.e("343266"),
                            n.e("965789"),
                            n.e("691671"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("896804"),
                            n.e("21106"),
                            n.e("285802"),
                            n.e("65200"),
                            n.e("421060"),
                            n.e("699011"),
                            n.e("703869"),
                            n.e("51212"),
                            n.e("584615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": Z.intl.string(Z.t["8ipxiY"]),
                className: o()(rb.kL, { [rb.og]: c }),
                children: (0, s.jsxs)(rg.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rb.kq,
                            children: [
                                (0, s.jsx)(rp.A, { children: Z.intl.string(Z.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: rb.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: rb.lO,
                                    "aria-hidden": !p,
                                    children: (0, rf.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: rb.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var rL = n(168543),
    rM = n(321191),
    rP = n(215530),
    rD = n(331322),
    rO = n(562153),
    rU = n(183555),
    rG = n(999291),
    rw = n(391210),
    rB = n(249790),
    rV = n(254828),
    rH = n(783123),
    rF = n(213994),
    rz = n(753504);
function rY(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: r } = e,
        a = (0, u.bG)([B.default], () => B.default.getUser(t)),
        o = (0, u.bG)([G.A], () => G.A.isBlocked(t)),
        d = rO.Ay.useName(n, i, a),
        c = (0, rG.Ay)(t, n),
        [m, h] = (0, rw.A)(),
        { analyticsLocations: g } = (0, I.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        p = (0, rU.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == a
        ? null
        : (0, s.jsx)(I.f5, {
              value: g,
              children: (0, s.jsx)(rU.of, {
                  value: p,
                  fetchStartedAt: c?.fetchStartedAt,
                  fetchEndedAt: c?.fetchEndedAt,
                  isLoaded: c?.isLoaded === !0 && m,
                  children: (0, s.jsx)(rF.A, {
                      user: a,
                      displayProfile: null,
                      size: "sm",
                      className: rz.k,
                      containerRef: h,
                      headingText: Z.intl.formatToPlainString(Z.t["8yRya1"], { name: d }),
                      children: (0, s.jsxs)(rD.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(rD.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rB.A, { user: a, guildId: n }),
                                      (0, s.jsx)(e7.D, {
                                          variant: "heading-lg/bold",
                                          children: Z.intl.string(Z.t.b33pLD),
                                      }),
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          children: Z.intl.format(o ? Z.t["8F+WNz"] : Z.t["/cZp5s"], { username: d }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(rD.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rH.A, { isBlocked: o, onClick: r }),
                                      (0, s.jsx)(rV.A, { userId: t, onClick: r }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var rK = n(273147),
    rW = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function rJ(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    nB.Ay.trackWithMetadata(X.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function rX(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [a, o] = (0, rP.A)(t),
        d = r.useRef(!1),
        c = (0, u.bG)(
            [B.default, rM.A],
            () => {
                if (rM.A.isFetchingProfile(t, n ?? void 0) || null != B.default.getUser(t)) return null;
                let e = rM.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? rW.NO_USER_RECORD : null;
            },
            [t, n],
        ),
        m = r.useRef(!1);
    (r.useEffect(() => {
        m.current = !1;
    }, [t]),
        r.useEffect(() => {
            null == c ||
                m.current ||
                ((m.current = !0),
                rJ({
                    userId: t,
                    reason: c,
                    guildId: n,
                    channelId: i,
                    errorStatus: rM.A.getUserProfile(t)?.fetchError?.status,
                }));
        }, [c, t, n, i]));
    let h = r.useCallback((e) => {
            null != e && d.current && ((d.current = !1), e.focus());
        }, []),
        g = r.useCallback(() => {
            ((d.current = !0), o());
        }, [o]);
    return a
        ? (0, s.jsx)(rY, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(rK.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class rZ extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (ns.A.captureException(e),
            rJ({
                userId: this.props.userId,
                reason: rW.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function rq(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, rL.c)("UserProfileEmbed")
        ? (0, s.jsx)(rZ, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(rX, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var r$ = n(383233),
    rQ = n(834942),
    r0 = n(644447),
    r1 = n(659674),
    r2 = n(998218),
    r3 = n(5095),
    r5 = n(294520),
    r4 = n(320095),
    r6 = n(863439),
    r9 = n(707985),
    r8 = n(730852),
    r7 = n(265422),
    ae = n(537547);
function at(e) {
    let { guild: t, channel: n, message: i } = e,
        l = w.A.getGuildId(),
        a = eu.Ay.getChannelId(l),
        o = r.useCallback(() => {
            (eY.default.track(X.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, r7.i)(t.id, n.id),
                r8.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(i3.A.Channel, { channel: n });
    return (0, s.jsx)(i3.A, {
        children: (0, s.jsxs)(i3.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: lc.iH,
                    children: [
                        (0, s.jsx)(i3.A.Icon, { guild: t }),
                        (0, s.jsx)(i3.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: lc.FA,
                                children: [
                                    Z.intl.format(Z.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: lc.E3,
                                        children: (0, s.jsx)(ae.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: lc.UD,
                    children: (0, s.jsx)(ex.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? Z.intl.string(Z.t["7vb2cc"]) : Z.intl.string(Z.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function an(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = U.A.getChannel(l),
        a = nY.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && tl.A.can(X.xBc.VIEW_CHANNEL, r) && tl.A.can(X.xBc.CONNECT, r)
        ? (0, s.jsx)(at, { guild: a, channel: r, message: n })
        : null;
}
var ai = n(789645),
    al = n(298236),
    as = n(953756),
    ar = n(564107),
    aa = n(216763),
    ao = n(359886);
function ad(e) {
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
        [m, h] = (0, as.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(ar.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(al.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(as.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(as.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(aa.O0, ao.k, ao.z, { [aa.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eO.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: aa.PP,
                                                  onClick: c,
                                                  "aria-label": Z.intl.string(Z.t.GT3fNz),
                                                  children: (0, s.jsx)(ai.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, lA.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ac = n(451988),
    au = n(261958),
    am = n(212245),
    ah = n(775602),
    ag = n(62583),
    ap = n(956549),
    aA = n(550151),
    ax = n(392054),
    af = n(853390),
    aI = n(290863),
    aE = n(811024),
    av = n(818023),
    aC = n(555375);
let a_ = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, lP.j)(),
        s = (0, u.bG)([ah.Ay], () => ah.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new ac.IX();
            return (
                e.start(a ? 15 * nx.A.Millis.SECOND : nx.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nx.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, af.fU)(n)
    );
});
a_.displayName = "ActivityRuntimeCounter";
let aj = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, am.p)(),
        m = (0, u.bG)([U.A], () => U.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([O.default], () => O.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: E,
        } = (0, u.cf)(
            [em.Ay],
            () => ({
                embeddedActivity: em.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: em.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: em.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        v = p?.userIds,
        C = (0, u.yK)(
            [B.default],
            () =>
                Array.from(v ?? [])
                    .map((e) => B.default.getUser(e))
                    .filter(iw.Vq),
            [v],
        ),
        _ = (0, u.bG)(
            [aI.A],
            () => {
                if (null == v) return null;
                for (let e of v) {
                    let t = aI.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, v],
        ),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new i5.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = av.Gl), e);
        }, [n]),
        y = (0, aA.vG)({ userId: g, channelId: i, application: N }),
        T = null == p,
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
                                text: s ? Z.intl.string(Z.t.RscU7I) : Z.intl.string(Z.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, aE.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: Z.intl.string(Z.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : Z.intl.string(Z.t.f41E1g) };
                        if (null != n && n !== aA.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case aA.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = Z.intl.string(Z.t.hHGrWz);
                                    break;
                                case aA.Gy.ACTIVITY_AGE_GATED:
                                    e = Z.intl.string(Z.t["4WuFRE"]);
                                    break;
                                case aA.Gy.CHANNEL_CONTENT_GATED:
                                    e = Z.intl.string(Z.t.pKLV22);
                                    break;
                                case aA.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = Z.intl.string(Z.t.uGDCcw);
                                    break;
                                case aA.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = Z.intl.string(Z.t.UXoQTp);
                                    break;
                                case aA.Gy.CHANNEL_FULL:
                                    e = Z.intl.string(Z.t.rZfiNq);
                                    break;
                                case aA.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = Z.intl.string(Z.t.w5SAps);
                                    break;
                                case aA.Gy.NO_CHANNEL:
                                case aA.Gy.NO_GUILD:
                                case aA.Gy.NO_USER:
                                case aA.Gy.IS_AFK_CHANNEL:
                                    e = Z.intl.string(Z.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: y, currentEmbeddedActivity: x, channel: m }),
        b = r.useId(),
        k = null != E && E.isLaunching && E.componentId === b;
    async function R() {
        (eY.default.track(X.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: T,
            cta: "Play",
        }),
            T
                ? await (0, ap.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                      commandOrigin: ax.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, ag.A)({
                      applicationId: p.applicationId,
                      activityChannelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                  }));
    }
    let L = S.disabled ? Z.intl.string(Z.t.JBnc7N) : Z.intl.string(Z.t.cX9uLZ),
        M = (0, en.F)(N, () => {
            eY.default.track(X.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        P = V.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let D = C.length,
        G = _?.timestamps?.start ?? _?.created_at,
        w = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case X.$pd.STREAMING:
                    return { text: Z.intl.formatToPlainString(Z.t.tyCw2q, { count: n }), Icon: Y.o };
                case X.$pd.LISTENING:
                    return { text: Z.intl.formatToPlainString(Z.t["2l8yka"], { count: n }), Icon: K.T };
                default:
                    return { text: Z.intl.formatToPlainString(Z.t.yJj035, { count: n }), Icon: W.GameControllerIcon };
            }
        })({ activity: _, activityUsersCount: D }),
        H = [
            {
                label: S.text,
                trackingArea: Q.kY.PLAY,
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: k,
            },
        ];
    return (0, s.jsx)(z.h, {
        header: Z.intl.string(Z.t.pkq6Vq),
        title: n.name,
        iconSrc: P,
        info: (0, s.jsx)("div", {
            className: aC.QR,
            children: T
                ? (0, s.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: L })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: aC.oL,
                                  children: [
                                      null != G &&
                                          (0, s.jsxs)("div", {
                                              className: aC.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: aC.y9,
                                                      children: (0, s.jsx)(w.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(a_, { start: G }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(aC.DT, aC.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(au.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, s.jsx)(A.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          D > 0 && (0, s.jsx)($, { activityUsers: C, guildId: l, activityText: w.text }),
                      ],
                  }),
        }),
        actions: H,
        onClickContent: M,
        trackingConfig: {
            id: n.id,
            linkType: ei.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: T,
        },
    });
});
var aN = n(164664),
    ay = n(439401),
    aT = n(657044),
    aS = n(863574),
    ab = n(707606),
    ak = n(456412),
    aR = n(242874),
    aL = n(499454),
    aM = n(180522),
    aP = n(928550),
    aD = n(30793),
    aO = n(189081);
function aU(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, ls.A)(i),
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
var aG = n(339586),
    aw = n(45938),
    aB = n(615396),
    aV = n(427262),
    aH = n(561028),
    aF = n(820284),
    az = n(674378),
    aY = n(598429),
    aK = n(979604);
function aW(e) {
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
        A = (0, u.bG)([aO.A], () => aO.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        I = (0, u.bG)([eF.A], () => null != f && !eF.A.didFetchingSkuFail(f));
    return null != A && (0, az.XZ)(A)
        ? (0, s.jsx)(aK.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : I
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(aY.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function aJ(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return Z.intl.string(Z.t.RWouSQ);
    if (e.premium && !n) return Z.intl.string(Z.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t0.$g)(i.amount, i.currency);
        else return Z.intl.string(Z.t.QQsaCc);
    return Z.intl.string(Z.t.RWouSQ);
}
var aX = n(176140),
    aZ =
        (((l = aZ || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function aq(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(aX.nM, t),
        children: [
            (0, s.jsx)(aT._, { size: "md", color: "currentColor", className: aX.Kk }),
            Z.intl.string(Z.t["7eicAO"]),
        ],
    });
}
function a$(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(aX.nM, n),
        children: [(0, s.jsx)(tf.t, { size: "md", color: "currentColor", className: aX.Kk }), aJ(t)],
    });
}
function aQ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(aX.EQ, n), children: t.getDisplaySalePercentage() });
}
function a0(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(aX.I8, n), children: aJ(t, !1) });
}
function a1(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: aJ(t) });
}
function a2(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(aX.nM, n),
        children: [(0, s.jsx)(aQ, { sku: t }), (0, s.jsx)(a0, { sku: t }), (0, s.jsx)(a1, { sku: t })],
    });
}
function a3(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: Z.intl.string(Z.t.QQsaCc) });
}
class a5 extends r.PureComponent {
    static Types = aZ;
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
                return (0, s.jsx)(a3, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(aq, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(a$, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(a2, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(a1, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(a3, { className: t });
            case 3:
                return (0, s.jsx)(a$, { sku: n, className: o()(aX.OB, t) });
            case 2:
                return (0, s.jsx)(a2, { sku: n, className: o()(aX.dk, t) });
            default:
                return (0, s.jsx)(a1, { className: o()(aX.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(a3, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: aX.nM,
                            children: [(0, s.jsx)(a1, { sku: i }), (0, s.jsx)(aQ, { sku: i })],
                        }),
                        (0, s.jsx)(a0, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(a1, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(aX.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, aX.Pl);
            case 3:
                return this.renderGeneric(e, aX.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, aX.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var a4 = n(301568);
let a6 = {
    [X.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ls.A)(r),
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
        getLabel: () => Z.intl.string(Z.t["0/xHFO"]),
    },
    [X.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ls.A)(r),
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
        getLabel: () => Z.intl.string(Z.t.E4u4n5),
    },
    [X.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ls.A)(r),
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
        getLabel: () => Z.intl.string(Z.t.tcawo3),
    },
};
function a9(e) {
    let { operatingSystem: t, className: n } = e,
        i = a6[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tF.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function a8(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(a4.I, n),
        children: t.map((e) => (0, s.jsx)(a9, { operatingSystem: e, className: o()(a4.A, i) }, e)),
    });
}
var a7 = n(198985);
let oe = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(a7.T, t),
        children: (0, s.jsx)("span", { className: a7.Q, children: Z.intl.string(Z.t["14lP0W"]) }),
    });
};
var ot = n(992856);
let on = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(ot.T, t),
        children: (0, s.jsx)("span", { className: ot.Q, children: Z.intl.string(Z.t["8IfYqa"]) }),
    });
};
var oi = n(615300),
    ol = n(868285),
    os = n(358618),
    or = n(983851),
    oa = n(133296),
    oo = n(607470),
    od = n(856328);
class oc extends r.Component {
    _animatedValue = new oi.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), oi.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        oi.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(oi.A.img, {
            className: o()({ [od.YC]: i }, t),
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
            ? (0, s.jsx)(oi.A.div, { className: o()(od.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(oi.A.div, {
                  className: o()(l ? od.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tY.y, {
                                className: od.u1,
                                itemClassName: od.$N,
                                type: tY.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ou extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new ac.Ep();
    videoPlaying = !1;
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n)
            if (t && !e.playing) {
                (this.videoTimeout.stop(),
                    isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0),
                    (n.volume = 0.3));
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
        (e.stopPropagation(), e.preventDefault());
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
            m = a ? os._ : or.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                i1.Fr
                    ? null
                    : (0, s.jsx)(oo.A, {
                          className: o()(od.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(ol.F, {
                    children: l && e ? null : (0, s.jsx)(oc, { className: o()(od.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eO.D, {
                    className: o()(od.b4, { [od.HY]: l && e, [od.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: od.i2 }) : null,
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
            ? (0, s.jsx)(oc, { className: o()(od.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(oc, { className: o()(od.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(oc, { className: o()(od.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(oa.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: od.mZ,
                  disable: !e,
                  children: (0, s.jsx)(ol.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(od.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var om = n(366523),
    oh = n(622413),
    og = n(435919);
class op extends r.PureComponent {
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
                  className: og.ED,
                  children: [
                      (0, s.jsx)(a5, {
                          type: a5.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? og.ae : og.Ek,
                      }),
                      (0, s.jsx)(a8, { systems: [X.uje.WINDOWS], className: og.iD }),
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
        return (0, sk.bF)(l)
            ? (0, s.jsx)(om.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: og.A$,
                  backgroundImageClassName: og.iZ,
                  foregroundImageClassName: og.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(ou, {
                          className: o()(og.H1, { [og.ZC]: a }),
                          video: null != d.previewVideo ? (0, sb.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, sb.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: og.ZI,
                          splashPlaceholderClassName: og.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(on, { className: o()(og.LJ, { [og.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(oe, { className: o()(og.LJ, { [og.V9]: e }) })
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
            d = o ? aS.ug : oh.A;
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
var oA = n(587895),
    ox = n(976150);
class of extends r.Component {
    static defaultProps = { renderFallback: X.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : X.JJy.APPLICATION_EMBED, object: X.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eG.QB)(t);
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
            className: ox.h,
            children: (0, s.jsx)(ex.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: Z.intl.string(Z.t["W+NB90"]),
                onClick: () => {
                    (0, sS.pX)(X.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > aS.Tm;
        return (0, s.jsx)(op, {
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
        if (null != r) return (0, s.jsx)("div", { className: ox.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(X.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: ox.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(aW, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ox.h,
                          source: X.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(a5, { type: a5.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > aS.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(aS.Wb, { isHorizontal: r })
            : e.productLine === X.EZt.PREMIUM
              ? (0, s.jsx)(aF.A, {
                    section: X.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(aH.N_, {
                        onClick: this.handleLinkClick,
                        to: X.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(aF.A, { section: X.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let oI = [eF.A, aO.A, ez.A];
function oE(e) {
    let { skuId: t } = e,
        n = eF.A.get(t),
        i = null != n ? oA.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eF.A.didFetchingSkuFail(t),
        inLibrary: null != n && aO.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? ez.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? aO.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let ov = (0, ak.A)((0, ab.A)(of)),
    oC = u.Ay.connectStores(oI, oE)(ov),
    o_ = (0, ab.A)(u.Ay.connectStores(oI, oE)(of));
var oj = n(866022);
function oN(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eO.D, {
        className: oj.kP,
        onClick: t,
        children: [
            (0, s.jsx)(aT._, { size: "md", color: "currentColor", className: oj.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? Z.intl.string(Z.t.Wi99Ro) : Z.intl.string(Z.t["+tXad7"]) }),
        ],
    });
}
class oy extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= aS.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === X.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, ej.openUserSettings)(e_.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? Z.intl.string(Z.t.mT9B49) : Z.intl.string(Z.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(ex.$, {
                  variant: "primary",
                  size: "sm",
                  text: Z.intl.string(Z.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(ex.$, { variant: "primary", size: "sm", text: Z.intl.string(Z.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? Z.intl.string(Z.t.QXgO5w)
            : this.props.isSelfGift
              ? Z.intl.string(Z.t.eEM3dq)
              : Z.intl.string(Z.t.tB8S6u);
    render() {
        return (0, s.jsx)(aS.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class oT extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: X.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        (e.preventDefault(),
            null != t && t.isHidden()
                ? (0, sS.pX)(X.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, sS.pX)(X.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, ej.openUserSettings)(e_.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eY.default.track(X.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: X.ZSU.BUTTON_CTA },
            }));
        let r = l !== X.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, aL.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eY.default.track(X.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            aG.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, sk.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, sO.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, ej.openUserSettings)(e_.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(X.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(s2.A, {
            justify: s2.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(s2.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(oN, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(s2.A, {
                    align: s2.A.Align.END,
                    justify: s2.A.Justify.END,
                    className: oj.yu,
                    direction: s2.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: Z.intl.format(Z.t.nZBvUR, { hours: e.expiresAt.diff(l5()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? Z.t["4iHwKT"] : Z.t.YeLq88;
        return Z.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ex.$, {
                    variant: "primary",
                    size: "sm",
                    text: Z.intl.string(Z.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tQ.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? Z.intl.string(Z.t.BTihou)
                : null != e.giftStyle
                  ? Z.intl.string(Z.t.TiZFqX)
                  : Z.intl.string(Z.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t4.hU)(e) ? oj.UQ : void 0,
            children: (0, s.jsx)(ex.$, {
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
        return e === X.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? Z.intl.formatToPlainString(Z.t.t1SOId, { recipientDisplayName: aV.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? Z.intl.string(Z.t["2PJ1NP"])
                    : Z.intl.string(Z.t.hrnGng)
                : n
                  ? Z.intl.string(Z.t.QLEMld)
                  : Z.intl.string(Z.t.W4DBcy);
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
        if (null == i) return Z.intl.string(Z.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, sk.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? Z.intl.formatToPlainString(Z.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t4.hU)(e) || (0, sk.bF)(i)
                ? Z.intl.string(Z.t.mVC3Cv)
                : Z.intl.format(Z.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return Z.intl.format(Z.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return Z.intl.string(Z.t.ARWFQX);
        if (!r.verified) return Z.intl.format(Z.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? Z.intl.string(Z.t["lQI+cB"])
                : Z.intl.formatToPlainString(Z.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return Z.intl.string(Z.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? Z.intl.format(Z.t.l3VxgG, { username: aV.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : Z.intl.format(Z.t["9cYrw5"], {
                          username: aV.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? Z.intl.formatToPlainString(Z.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : Z.intl.formatToPlainString(Z.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return Z.intl.string(Z.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nb.WT.MONTH ? Z.t["/RDIEA"] : Z.t["3CX6Ev"];
                return Z.intl.format(e, { username: aV.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nb.WT.MONTH ? Z.t["2O4lo5"] : Z.t["+XjmsR"];
            return Z.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? Z.intl.format(Z.t["3HsdQ/"], { username: aV.Ay.getUserTag(l) }) : Z.intl.string(Z.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nb.Wx.includes(e.giftStyle),
            i = o()(oj.gB, { [oj.El]: n, [oj.by]: t >= aS.Tm }),
            l = o()({ [oj.gc]: n, [oj.Ei]: n && t >= aS.Tm, [oj.ww]: !n, [oj.wy]: !n && t >= aS.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(aU, { className: oj.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(aM.A, {
                        defaultAnimationState: e.redeemed ? aR.oA.LOOP : aR.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(ex.$, {
            variant: "primary",
            size: "sm",
            text: Z.intl.string(Z.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, sk.bF)(n);
        return (0, s.jsx)(o_, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: X.JJy.GIFT_CODE_EMBED,
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
            return (0, s.jsx)(o_, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: X.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => Z.intl.string(Z.t.X4p5uH),
                renderCustomTagline: () => Z.intl.string(Z.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(oy, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(aS.Wb, { isHorizontal: i >= aS.Tm });
        return (0, t4.hU)(e)
            ? (0, s.jsx)("div", { className: oj.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let oS = (0, ak.A)((0, ab.A)(oT)),
    ob = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([aD.A], () => {
                let e = aD.A.getError(t);
                return { giftCode: aD.A.get(t), resolved: aD.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([B.default], () => (null != i && null != i.userId ? B.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eF.A], () => (null != i ? eF.A.get(i.skuId) : null)),
            d = (0, u.bG)([aO.A], () =>
                null != o && i?.entitlementBranches != null ? aw.YI(i.entitlementBranches, o, aO.A) : null,
            ),
            c = (0, sT.h)(o?.applicationId),
            m = null != o && (0, sk.bF)(o) && i?.redeemed === !0,
            [h] = (0, aP.L_)(m ? c?.id : null),
            g = (0, aB.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([O.default], () => (null != i ? O.default.getId() === i.userId : O.default.getId() === n.id));
        return (0, s.jsx)(oS, {
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
var ok = n(376728),
    oR = n(107123),
    oL = n(698441),
    oM = n(427080),
    oP = n(346542),
    oD = n(800772),
    oO = n(95701),
    oU = n(299091),
    oG = n(149790);
let ow = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oB(e) {
    let { guildId: t, location: n } = e;
    return ow.getCurrentConfig({ guildId: t, location: n });
}
var oV = n(713654);
function oH() {
    return (0, s.jsxs)(i3.A, {
        children: [
            (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t["N/g9Z4"]) }),
            (0, s.jsx)(i3.A.Body, { resolving: !0 }),
        ],
    });
}
var oF = n(172799),
    oz = n(624394);
function oY(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: oz.MY,
                        children: [
                            (0, s.jsx)("i", { className: oz.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oz.U9,
                                color: i,
                                children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n }),
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
                        className: oz.MY,
                        children: [
                            (0, s.jsx)("i", { className: oz.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oz.U9,
                                color: i,
                                children: Z.intl.format(Z.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: oz.rc, children: l })
    );
}
function oK(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, ir.Ay)(t);
    if (null != t && null != n) {
        let e = (0, oV.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(oz.Ix, { [oz.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: oz.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(sq.A, {
                    children: (0, s.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: Z.intl.format(Z.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(oz.Ix, { [oz.v6]: i }),
              children: (0, s.jsx)(sq.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: Z.intl.format(Z.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oW(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    ek()(l === oF.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([U.A], () => U.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e5.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(oJ, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oJ(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    ek()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eY.default.track(X.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([nY.A], () => (null != i.guild ? nY.A.getGuild(i.guild.id) : null), [i]),
        A = (0, u.bG)(
            [em.Ay],
            () => i?.channel != null && em.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        x = (0, u.bG)([em.Ay], () =>
            (i.channel?.id != null ? em.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        E = (0, u.bG)([tl.A], () => null != d && tl.A.can(X.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED),
        C = (0, u.yK)(
            [em.Ay],
            () =>
                null != d
                    ? em.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([B.default], () => C.map((e) => B.default.getUser(e)).filter((e) => null != e), [C]),
        j = r.useCallback(() => {
            ((0, ok.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lm._U)(i.code, l.id),
                },
                v,
            ),
                ok.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                }));
        }, [i, l, v, a]),
        N = i.state === X.elq.ACCEPTING,
        y = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(oH, {});
        p = (0, oG.DY)(i.guild);
    }
    t = y
        ? A
            ? Z.intl.string(Z.t.DPfdsq)
            : x
              ? Z.intl.string(Z.t.sqe0hj)
              : Z.intl.string(Z.t.RscU7I)
        : Z.intl.string(Z.t["2BP08E"]);
    let T = (y && !E) || (y && A);
    return (E || (n = Z.intl.string(Z.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(I.f5, {
              value: v,
              children: (0, s.jsx)(oX, {
                  app: o,
                  activityUsers: _,
                  isMember: y,
                  channel: d,
                  guild: p,
                  message: l,
                  members: c,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: N,
                  buttonLabel: t,
                  disabled: T,
                  disabledReason: n,
                  handleAcceptInvite: j,
                  onView: g,
              }),
          });
}
function oX(e) {
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
        { bot: f, icon: I } = t,
        E = V.Ay.getApplicationIconURL({ id: t.id, icon: I, bot: f }),
        v = (0, en.F)(t),
        C = (0, et.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? Q.kY.PLAY : Q.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, s.jsx)(z.h, {
        header: t.name,
        title: Z.intl.string(Z.t["7vb6nw"]),
        iconSrc: E,
        ...C,
        onClickBanner: v,
        info: (0, s.jsxs)("div", {
            className: oz.QR,
            children: [
                (0, s.jsx)(oK, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)($, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: Z.intl.formatToPlainString(Z.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(oY, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: ei.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var oZ = n(4274);
function oq(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([O.default], () => O.default.getId()) === t.id
                ? Z.intl.string(Z.t.C89OLE)
                : Z.intl.string(Z.t.YVub5y),
        l = (0, oZ.g)(n?.code);
    return (0, s.jsxs)(i3.A, {
        children: [
            (0, s.jsx)(i3.A.Header, { text: i }),
            (0, s.jsxs)(i3.A.Body, {
                children: [
                    (0, s.jsx)(i3.A.Icon, { expired: !0 }),
                    (0, s.jsx)(i3.A.Info, {
                        expired: !0,
                        title: l?.title ?? Z.intl.string(Z.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var o$ = n(308528),
    oQ = n(889227);
function o0(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([O.default], () => O.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === X.elq.ACCEPTING,
        { analyticsLocations: d } = (0, I.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([G.A], () => null != t.inviter && G.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != U.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), o$.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, ok.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lm._U)(t.code, n.id),
                    },
                    d,
                ));
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, ok.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lm._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            ok.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = Z.intl.string(Z.t.ib7Ng1),
        A = "active";
    c
        ? ((p = Z.intl.string(Z.t.xhxnPn)), (A = "secondary"))
        : a && ((p = Z.intl.string(Z.t.ib7Ng1)), (A = "secondary"));
    let x = a ? Z.intl.string(Z.t.eQyu1F) : Z.intl.string(Z.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        v = null != t.inviter ? aV.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(i3.A, {
        children: [
            (0, s.jsx)(i3.A.Header, { text: x }),
            (0, s.jsxs)(i3.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i3.A.Icon, { user: new oQ.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(i3.A.Info, { title: E, onClick: c ? g : void 0, children: v }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var o1 = n(342952);
function o2(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === X.elq.ACCEPTING,
        c = (0, u.bG)([U.A], () => (null != t.channel ? U.A.getChannel(t.channel.id) : null), [t]);
    ek()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = null != c,
        g = r.useRef(null),
        p = r.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, ok.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lm._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, a]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, oO.OY)(e.channel),
                    i = (0, ir.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = B.default.getUser(t);
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, ir.Bi)(t),
                    i = B.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, c ?? null);
    if (null == x) return (0, s.jsx)(oH, {});
    let {
            bodyTitle: E,
            headerText: v,
            buttonText: C,
            buttonVariant: _,
        } = (function (e, t, n) {
            let i,
                { recipients: l, customGroupName: s } = e,
                r =
                    null != s
                        ? s
                        : 0 ===
                            (i = l
                                .map((e) => {
                                    let t = G.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof oQ.A ? e : B.default.getUser(e.id);
                                    if (null != n) {
                                        let e = aV.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? Z.intl.string(Z.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? Z.intl.formatToPlainString(Z.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? Z.intl.formatToPlainString(Z.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
                                : Z.intl.formatToPlainString(Z.t.m5uYso, { first: i[0], second: i[1] }),
                a = Z.intl.string(Z.t.gVDdRn),
                o = "active";
            return (
                n && ((a = Z.intl.string(Z.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: r,
                    headerText: t ? Z.intl.string(Z.t.Fyamu8) : Z.intl.string(Z.t["2tr5Qz"]),
                    buttonText: a,
                    buttonVariant: o,
                }
            );
        })(x, o, h),
        { channel: j, recipients: N } = x,
        y = N.map((e) =>
            e instanceof oQ.A
                ? e
                : (B.default.getUser(e.id) ?? new oQ.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        T = null != j.icon,
        S = Z.intl.format(Z.t.zRl6XR, { count: N.length });
    return (0, s.jsxs)(i3.A, {
        className: lc.TV,
        children: [
            (0, s.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: lc.JO,
                lineClamp: 1,
                children: v,
            }),
            (0, s.jsxs)(i3.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${lc.iH} ${lc.mx}`,
                        children: [
                            T &&
                                (0, s.jsx)(i3.A.Icon, {
                                    channel: j,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tE._3.SIZE_48,
                                }),
                            (0, s.jsx)(i3.A.Info, {
                                title: (0, s.jsx)(sq.A, { children: E }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: lc.er,
                                    children:
                                        y.length > 0
                                            ? (0, s.jsx)(eO.D, {
                                                  className: lc.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: S,
                                              })
                                            : S,
                                }),
                            }),
                            y.length > 0 &&
                                (0, s.jsx)(o1.A, {
                                    ref: g,
                                    className: lc.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tE._3.SIZE_32,
                                    channelId: j.id,
                                    popoutClassName: lc.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: p, loading: d, disabled: h, variant: _, text: C, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var o3 = n(821418),
    o5 = n(340837);
let o4 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, o5.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, o3.Q.IS_GUEST_INVITE)
    );
};
var o6 = n(517905);
function o9(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: a,
            onAcceptInstantInvite: o,
            guild: d,
            invite: m,
            message: h,
            currentUserId: p,
        } = e,
        x = p === h.author.id,
        { channel: E, approximate_member_count: v, approximate_presence_count: C } = m,
        _ = m.state === X.elq.ACCEPTING,
        j = null != E ? (0, oO.OY)(E) : null,
        N = null != d,
        y = null != j,
        T = null != j && j.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, o3.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(X.GuildFeatures.HUB) ?? !1,
        R = d?.id,
        { analyticsLocations: L } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e6.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, lm._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [M, P] = r.useState(!1),
        D = r.useCallback(() => P(!1), []),
        O = r.useRef(null),
        U = (0, u.bG)([lM.Ay], () => o4([lM.Ay], m)),
        G = r.useCallback(() => {
            (P(!0), (0, ok.Pq)(R, "show profile", L));
        }, [R, L]),
        w = r.useCallback(() => {
            let e = "noop";
            (N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, ok.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, lm._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(oH, {});
        (d = oG.DY(m.guild)).premiumTier = m.guild.premium_tier ?? X.TVA.NONE;
    }
    let B = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return Z.intl.string(Z.t.N85DCl);
                else if (s) return Z.intl.string(Z.t.TJQcNv);
                else if (l) return Z.intl.string(Z.t.mJyBir);
                else return Z.intl.string(Z.t.lxTgP9);
            else if (r) return Z.intl.string(Z.t.Mnvc3C);
            else if (s) return Z.intl.string(Z.t.FdPNr5);
            else if (l) return Z.intl.string(Z.t.f4gmrf);
            else return Z.intl.string(Z.t.H39rEY);
        return n
            ? i
                ? Z.intl.string(Z.t.UxmnHx)
                : Z.intl.string(Z.t.sigPEf)
            : i
              ? Z.intl.string(Z.t["oU/lsl"])
              : Z.intl.string(Z.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: S, isHubGuild: k, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: lc.FA,
            children: [
                (0, s.jsx)(o6.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: M,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, s.jsx)(i3.A.GuildName, { guild: d, ref: O }),
                }),
                (0, s.jsx)("span", {
                    className: lc.E3,
                    children: (0, s.jsx)(ae.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(tF.m, {
                asContainer: !0,
                text: Z.intl.string(Z.t["/FeTK6"]),
                children: (0, s.jsx)(n0.CircleInformationIcon, { size: "md", color: "currentColor", className: lc.G }),
            })),
        b
            ? ((i = (0, s.jsx)(i3.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: lc.FA,
                  children: [
                      Z.intl.format(Z.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: lc.E3,
                          children: (0, s.jsx)(ae.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != v && v >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(i3.A.Data, { members: v, membersOnline: C }))
              : y && (t = (0, s.jsx)(i3.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(i3.A, {
            children: [
                (0, s.jsx)(i3.A.GuildSplash, { guild: d }),
                (0, s.jsx)(i3.A.Header, { text: B, extra: l }),
                (0, s.jsxs)(i3.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lc.iH,
                            children: [
                                (0, s.jsx)(i3.A.Icon, { guild: d }),
                                (0, s.jsx)(i3.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: lc.UD,
                            children: (0, s.jsx)(ex.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? T
                                        ? Z.intl.string(Z.t["7vb2cc"])
                                        : Z.intl.string(Z.t.gpqgah)
                                    : N
                                      ? Z.intl.string(Z.t.cEnaWx)
                                      : Z.intl.string(Z.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(X.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: lc.me }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Z.intl.format(Z.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, g.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("638781"),
                                                n.e("197804"),
                                                n.e("807265"),
                                                n.e("797641"),
                                                n.e("890496"),
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
var o8 = n(9994),
    o7 = n(461888),
    de = n(263908),
    dt = n(123213),
    dn = n(86376),
    di = n(42780),
    dl = n(897288),
    ds = n(151101);
function dr(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = r.useId(),
        [m, h] = r.useState(!0),
        [g, p] = r.useState(!1),
        A = t.state === X.elq.ACCEPTING,
        x = (0, u.bG)([ah.Ay], () => ah.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, I.Ay)(f.A.INVITE_EMBED);
    ((0, e6.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lm._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]));
    let v = (0, o8.oO)(t),
        C = r.useCallback(() => {
            !g || (m && h(!1));
        }, [m, g]),
        _ = r.useCallback(() => {
            !g || m || h(!0);
        }, [m, g]),
        j = r.useMemo(
            () =>
                g && d.current?.clientHeight != null
                    ? {
                          height: m ? 292 : d.current.clientHeight + 36 + 48,
                          transition: x ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [m, g, x],
        );
    if (null == v) return (0, s.jsx)(oH, {});
    let N = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: ds.uY,
                ref: d,
                children: [
                    (0, s.jsx)(di.J$, { profile: v, className: ds.vK }),
                    (0, s.jsx)(di.CG, { profile: v }),
                    (0, s.jsx)(dn.A, { profile: v, disableGuildNameClick: !g, guildNameId: c }),
                    (0, s.jsx)(de.P, { profile: v, className: ds.rb }),
                    (0, s.jsx)(dl.A, {
                        guild: null != t.guild ? (0, oG.DY)(t.guild) : null,
                        roles: t.roles,
                        className: ds.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: ds.Se,
                      children: (0, s.jsx)(sc.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: _,
                          text: Z.intl.string(Z.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(ds.qr, { [ds.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: ds.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(ds.z8, { [ds.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: ds.UD,
                            children: (0, s.jsx)(da, {
                                invite: t,
                                profile: v,
                                isMemberOfGuild: n,
                                message: i,
                                submitting: A,
                                onTransitionToInviteChannel: l,
                                onAcceptInstantInvite: a,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
    return g
        ? (0, s.jsx)(tH.s, {
              className: o()(ds.Gg, { [ds.vk]: m }),
              onClick: C,
              style: j,
              "aria-label": Z.intl.string(Z.t.dcl9MQ),
              children: N,
          })
        : (0, s.jsx)("div", { className: ds.Gg, role: "group", "aria-labelledby": c, children: N });
}
function da(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, o7.Ay)(n, o7.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, ok.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lm._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(dt.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
function dd(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        a = r.useId();
    return (
        (0, u.bG)([O.default], () => O.default.getId()) === i.id
            ? ((n = Z.intl.string(Z.t.HfUzlI)), (t = Z.intl.string(Z.t.y7uT5j)))
            : l
              ? ((n = Z.intl.string(Z.t.OMfs8i)), (t = Z.intl.string(Z.t["57nBty"])))
              : ((n = Z.intl.string(Z.t.OMfs8i)), (t = Z.intl.string(Z.t["p/zTYn"]))),
        (0, s.jsxs)(i3.A, {
            className: lc.TV,
            role: "group",
            "aria-labelledby": a,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lc.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(i3.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i3.A.Icon, { expired: !0 }),
                            (0, s.jsx)(i3.A.Info, {
                                expired: !0,
                                title: Z.intl.string(Z.t["Jhx/ud"]),
                                titleId: a,
                                titleVariant: "heading-md/medium",
                                children: t,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var dc = n(616356);
function du(e) {
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
        m = (0, u.bG)([w.A], () => w.A.getGuildId()),
        h = (0, u.bG)(
            [dc.A],
            () => (null != n && null != n.target_user ? dc.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [dc.A],
            () => (null != n && null != n.target_user ? dc.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e6.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lm._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === oF.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ek()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: v } = n;
    ek()(E === oF.yV.STREAM && null != v, "invalid streaming invite");
    let C = i === v.id,
        _ = n.state === X.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            (A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, ok.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, lm._U)(n.code, a.id),
                    },
                    p,
                ));
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(oH, {});
        l = (0, oG.DY)(n.guild);
    }
    let y = null != n.channel ? (0, oO.OY)(n.channel) : null,
        T = aV.Ay.getName(v),
        S = A || (!x && N),
        b = Z.intl.string(Z.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = C ? Z.intl.string(Z.t.oBLoZJ) : Z.intl.formatToPlainString(Z.t["0QJmA+"], { name: T })),
          (b = Z.intl.string(Z.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = Z.intl.string(Z.t.Q1W99y)), (k = "secondary")),
          (t = C ? Z.intl.string(Z.t["4hyaHu"]) : Z.intl.formatToPlainString(Z.t.QmlLEq, { name: T })));
    let R =
        m === l.id && null != y
            ? (0, s.jsx)(i3.A.Channel, { channel: y })
            : Z.intl.formatToPlainString(Z.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(i3.A, {
        children: [
            (0, s.jsx)(i3.A.Header, { text: Z.intl.string(Z.t["wS+5Wb"]) }),
            (0, s.jsxs)(i3.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i3.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(i3.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var dm = n(683063),
    dh = n(364522),
    dg = n(952270),
    dp = n(52074),
    dA = n(725613),
    dx = n(693879),
    df = n(145497),
    dI = n(936520),
    dE = n(977997),
    dv = n(607567),
    dC = n(923710);
function d_(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, ir.Ay)(i),
        o = (0, u.bG)([nY.A], () => nY.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([dE.A], () => dE.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [dv.Ay],
            () => ({ voiceStates: null != i.guild_id ? dv.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([dA.A], () => dA.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || dA.A.hasRequestedStartTimes(i.guild_id) || (0, dp.U)(i.guild_id);
    }, [i, h]);
    let g = r.useRef(null),
        p = r.useRef(null),
        x = r.useCallback(() => {
            let e = g.current,
                t = p.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    r.useLayoutEffect(() => {
        x();
    }, [m, x]);
    let E = r.useCallback(
            (e) => {
                (null != g.current && g.current.removeEventListener("scroll", x),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", x));
            },
            [x],
        ),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED, f.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        C = (0, lm._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, e6.A)({
        name: e4.ImpressionNames.VOICE_INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: C,
            has_active_stream: _,
            location_stack: v,
        },
    });
    let j = r.useCallback(() => {
            (0, l0.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            (l(),
                (0, ok.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: C,
                        number_of_users_in_channel: c.length,
                    },
                    v,
                ));
        }, [t, n, v, C, c.length, l]);
    return (0, s.jsxs)("div", {
        className: dC.kL,
        children: [
            (0, s.jsxs)("div", {
                className: dC.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: dC.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: dC.yW,
                                children: [
                                    (0, s.jsx)(or.H, {
                                        className: dC.p,
                                        color:
                                            c.length > 0 ? nG.A.colors.TEXT_FEEDBACK_POSITIVE : nG.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(dm.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(df.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eO.D, {
                                            className: dC.HA,
                                            onClick: j,
                                            children: (0, s.jsx)(A.E, {
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
                                ? (0, s.jsx)(dx.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: dC.Ao,
                              children: [
                                  (0, s.jsx)(dh.Ip, {
                                      ref: E,
                                      className: dC.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              dI.Ay,
                                              {
                                                  className: dC.Eq,
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
                                  (0, s.jsx)("div", { ref: p, className: dC.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: dC.p$,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: Z.intl.string(Z.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: dC.TB,
                        children: (0, s.jsx)(ex.$, {
                            onClick: N,
                            icon: or.H,
                            variant: "active",
                            fullWidth: !0,
                            text: Z.intl.string(Z.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dC.qr,
                children: [
                    (0, s.jsx)(dg.EyeSlashIcon, { size: "custom", color: "currentColor", className: dC.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: Z.intl.string(Z.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dj(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)(
            [U.A, tl.A],
            () => {
                let e = U.A.getChannel(r);
                return null != e && tl.A.canBasicChannel(X.hVb.VIEW_CHANNEL, e) ? e : null;
            },
            [r],
        ),
        o = (0, u.bG)([nY.A], () => null != nY.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(dr, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(d_, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var dN = n(652896),
    dy = n(834757),
    dT = n(427358),
    dS = n(323605);
function db(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, oV.gU)(n, i),
        a = (0, ir.Ay)(n);
    return (0, s.jsxs)(eO.D, {
        onClick: l,
        className: o()(dS.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: dS.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(sq.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(n6._, { className: dS.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var dk = n(941143),
    dR = n(717421),
    dL = n(297413),
    dM = n(528944);
function dP(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(lL.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eO.D, {
                ...r,
                innerRef: a,
                className: dM.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tI.eu, {
                        src: t.getAvatarURL(n, (0, tE.FT)(tE._3.SIZE_24)),
                        className: dM.my,
                        "aria-label": t.username,
                        size: tE._3.SIZE_24,
                    }),
                    (0, s.jsx)(A.E, {
                        className: dM.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(dL.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var dD = n(480887);
function dO(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(dU, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(sz.Y, { renderPopout: () => o(i), ...a });
}
function dU(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, tW.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: dD.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(dh.Ip, {
                className: dD.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        dP,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: rO.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var dG = n(768920);
let dw = { mass: 1, tension: 170, friction: 26 };
function dB(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, dR.z)(() => ({ x: 0, y: 0, scale: 1, config: dw }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(dk.animated.div, {
            ref: a,
            className: o()(dG.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, dk.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: dG.my,
                            children: (0, s.jsx)(tF.m, {
                                text: rO.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tI.eu, {
                                    src: (function (e, t, n) {
                                        let i = lM.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, V.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tE._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tE._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tE._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tE._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tE._3.SIZE_48
                                                    : h > 2
                                                      ? tE._3.SIZE_40
                                                      : tE._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, s.jsx)(dV, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function dV(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, tW.A)(e),
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
    return (0, s.jsx)(dO, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(dG.my, dG.k2),
                ref: a,
                ...e,
                children: (0, s.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var dH = n(183751);
function dF(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = oG.DY(t.guild));
    let m = null != t.channel ? (0, oO.OY)(t.channel) : null;
    (ek()(null != c, "Voice Invite Embed must be used in context of a guild."),
        ek()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [tl.A, U.A],
            () => {
                let e = U.A.getChannel(m.id);
                return null == e || tl.A.canBasicChannel(X.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([dv.Ay], () => (h ? dv.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? Z.intl.string(Z.t.DVDvCD) : Z.intl.string(Z.t.TY77rq),
                    sublabel: Z.intl.string(Z.t.wM2WTM),
                };
            let o = r ? Z.t["2RWMFV"] : Z.t.IWXzHV,
                d = r ? Z.t.Da7tZx : Z.t["3VbQvv"];
            return { label: l ? Z.intl.format(o, { othersCount: a }) : Z.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([O.default], () => O.default.getId()), author: n.author, voiceStates: g }),
        E = (0, u.bG)([nY.A], () => null != nY.A.getGuild(c.id), [c.id]),
        v = (0, u.bG)([eu.Ay], () => eu.Ay.getVoiceChannelId() === m.id, [m.id]),
        C = (0, u.bG)([lM.Ay], () => o4([lM.Ay], t), [t]),
        _ = t.state === X.elq.ACCEPTING,
        { analyticsLocations: j } = (0, I.Ay)(f.A.INVITE_EMBED),
        N = (0, lm._U)(t.code, n.id),
        y = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [dc.A, dT.A],
                () => {
                    if ((0, oP.G4)(t) && null != t.target_user) {
                        let e = dc.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = dc.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let r = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === r.length) return null;
                    for (let e of [...r].sort((e, t) => {
                        let n = dT.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (dT.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = dc.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        T = (0, dy.AO)(y),
        S = null != y,
        b = r.useCallback(() => {
            let e = E ? "transition" : "accept";
            (E ? l() : a(),
                (0, ok.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: T?.id ?? void 0,
                        stream_key: null != y ? (0, dN._z)(y) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                ));
        }, [t, n, j, N, E, T, y, g.length, l, a]),
        k = r.useCallback(() => {
            (E ? (0, l0.iN)(m.id) : a({ autoJoin: !1 }),
                eY.default.track(X.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: E,
                    application_id: T?.id ?? null,
                    stream_key: null != y ? (0, dN._z)(y) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                }));
        }, [m.id, c.id, t.code, N, E, T, y, g.length, j, a]);
    (0, e6.A)({
        name: e4.ImpressionNames.VOICE_INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([ah.Ay], () => ah.Ay.useReducedMotion),
        L = r.useRef(null),
        [M, P] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        D = (0, u.bG)(
            [dT.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = dT.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (dT.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        G = r.useMemo(() => tA().throttle(P, 20), [P]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
            (e) => {
                if (R) return;
                let t = L.current?.getBoundingClientRect();
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
            [R, G],
        ),
        B = r.useCallback(() => {
            (G.cancel(), P({ percentX: 0, percentY: 0, proximity: 0 }));
        }, [G]);
    return (0, s.jsxs)("div", {
        className: dH.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: L,
                className: dH.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: dH.ys }),
                    (0, s.jsx)("div", { className: dH.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: dH.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(dH.Qs, { [dH.tE]: 0 === D.length }),
                                children: [
                                    (0, s.jsx)(db, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: dH.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(sq.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: dH.$B,
                                                      children: (0, s.jsx)(sq.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            D.length > 0
                                ? (0, s.jsx)("div", {
                                      className: dH.RE,
                                      children: (0, s.jsx)(dB, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: D,
                                          motion: M,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: dH.xk,
                        children: (0, s.jsx)(ex.$, {
                            onClick: b,
                            loading: _,
                            variant: v ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !C,
                            text: v ? Z.intl.string(Z.t["3xjX0U"]) : Z.intl.string(Z.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dH.qr,
                children: [
                    (0, s.jsx)(dg.EyeSlashIcon, { size: "custom", color: "currentColor", className: dH.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: Z.intl.string(Z.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dz(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [oU.A],
            () => ({ invite: oU.A.getInvite(t), inviteError: oU.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lm._U)(t, n.id);
    r.useEffect(() => {
        null == l && ok.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: X.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, I.Ay)(),
        m = (0, u.bG)([nY.A], () => (l?.guild != null ? nY.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [U.A, tl.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = U.A.getChannel(e);
                return null != t && tl.A.canBasicChannel(X.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([O.default], () => O.default.getId()),
        p = (0, u.bG)([oL.Ay], () => oL.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && ok.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            ok.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? oG.DY(l.guild) : m;
        (0, oD.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: c,
            onGateConfirm: n,
        }) === oD.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(o9, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case X.elq.RESOLVING:
            f = (0, s.jsx)(oH, {});
            break;
        case X.elq.EXPIRED:
        case X.elq.BANNED:
            f = (0, s.jsx)(dd, { banned: d.state === X.elq.BANNED, author: n.author });
            break;
        case X.elq.ERROR:
            f = (0, s.jsx)(oq, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, oP.On)(d)) {
                case oP.Xd.GROUP_DM:
                    f = (0, s.jsx)(o2, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case oP.Xd.FRIEND:
                    f = (0, s.jsx)(o0, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, oP.G4)(d)) {
                        if (null != d.channel && (0, oO.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = oB({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(dj, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(dF, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(du, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, oP.ly)(d)) {
                        f = (0, s.jsx)(oM.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, oP.oK)(d)) {
                        f = (0, s.jsx)(oW, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, oO.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = oB({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(dj, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(dF, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, oR.v)(d) &&
                        (f = (0, s.jsx)(dr, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(aF.A, { section: X.JJy.INVITE_LINK, children: f });
}
var dY = n(706403),
    dK = n(860227),
    dW = n(441939),
    dJ = n(280621),
    dX = n(123791),
    dZ = n(627363);
function dq(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, dZ.YY)(t);
    return null == i ? null : (0, s.jsx)(d$, { app: i, guildId: n });
}
function d$(e) {
    let { app: t, guildId: i } = e;
    (0, dX.C)(t.id);
    let l = r.useCallback(() => {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(ex.$, {
        size: "sm",
        onClick: l,
        icon: dJ.U,
        text: Z.intl.format(Z.t.XDRjs5, { appName: t.name }),
    });
}
var dQ = n(394839),
    d0 = n(96782),
    d1 = n(930390),
    d2 = n(861986),
    d3 = n(87221),
    d5 = n(313433);
function d4(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: d5.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: d5.Yf,
                        children: [
                            (0, s.jsx)(d3.D, { size: "lg", color: nG.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: Z.intl.string(Z.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: d5.Fj,
                children: [
                    (0, s.jsx)(n0.CircleInformationIcon, { size: "sm", color: nG.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: Z.intl.string(Z.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var d6 = n(343552),
    d9 = n(581619),
    d8 = n(803931);
function d7(e) {
    return (0, sY.$o)({ ...e, showPlaybackSpeedControl: !0 });
}
let ce = [X.Auw.GIFV],
    ct = 15 * nx.A.Millis.MINUTE,
    cn = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    ci = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, lI.e5.IS_ANIMATED);
        return null != i && null != l && (lE.bp.test(n) || (a && (lE.P8.test(n) || lE.p4.test(n))))
            ? (0, s.jsx)(ay.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: d8.jj })
            : null;
    };
function cl(e) {
    let { url: t, image: n, video: i, thumbnail: l, providerName: a, children: o } = e,
        d = r.useMemo(() => (0, d6.b)(t, n, i, l, a), [t, n, i, l, a]);
    return (0, s.jsx)(i0.G.Provider, { value: d, children: o });
}
class cs extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, lm._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cn.has(e));
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
    renderCtaButtons() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case r3.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(n4, { messageId: e.id, channelId: t.id });
                break;
            case r3.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ev, { channelId: t.id }),
                        (0, eA.cc)(t.id, e.id) ? (0, s.jsx)(eS, { channelId: t.id }) : null,
                    ],
                });
                break;
            case r3.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(eN, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: d8.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: r } = n;
            if ((0, tM.Yf)(i)) {
                let n = (0, tM.kK)(i, l, r);
                if (null == n) return null;
                let { applicationId: a } = n;
                return (0, s.jsx)(
                    e5.O,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tP.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(i8, { code: a, message: e });
                                case tP.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(ep, { application: t, message: e, params: i });
                                case tP.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e1, { application: t, message: e });
                                case tP.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(e2, { application: t, message: e, skuId: l });
                                case tP.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(e9, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    l,
                );
            }
            switch (i) {
                case tP.I.INVITE:
                    if (!this.shouldRenderInvite(l)) return null;
                    return (0, s.jsx)(
                        dz,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tP.I.TEMPLATE:
                    return (0, s.jsx)(lu, { code: l }, l);
                case tP.I.EVENT:
                    return (0, s.jsx)(ll.A, { code: l }, l);
                case tP.I.CHANNEL_LINK:
                    return (0, s.jsx)(an, { code: l, message: e }, l);
                case tP.I.GUILD_PRODUCT:
                    return (0, s.jsx)(li, { code: l }, l);
                case tP.I.SERVER_SHOP:
                    return (0, s.jsx)(nZ, { guildId: l }, l);
                case tP.I.SOCIAL_LAYER_STOREFRONT: {
                    let n = (0, sj.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sw,
                            {
                                guildOrApplication: { type: "guild", guildId: i },
                                skuIds: n.skuIds,
                                destinationGuildId: t.getGuildId() ?? null,
                                channelId: t.id,
                                messageId: e.id,
                            },
                            l,
                        );
                    let [r] = n.skuIds;
                    return (0, s.jsx)(
                        sB.A,
                        {
                            guildId: i,
                            skuId: r,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, s_.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: i });
                            },
                        },
                        l,
                    );
                }
                case tP.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let n = (0, sj.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sw,
                            {
                                guildOrApplication: { type: "application", applicationId: i },
                                skuIds: n.skuIds,
                                destinationGuildId: t.getGuildId() ?? null,
                                channelId: t.id,
                                messageId: e.id,
                            },
                            l,
                        );
                    let [r] = n.skuIds;
                    return (0, s.jsx)(sB.I, { applicationId: i, skuId: r, channel: t }, l);
                }
                case tP.I.QUESTS_EMBED:
                    return (0, s.jsx)(lJ.A, { questId: l }, l);
                case tP.I.GAME_PROFILE:
                    return (0, s.jsx)(ik, { gameId: l, sourceUserId: e.author.id }, l);
                case tP.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(iQ, { code: l }, l);
                case tP.I.USER_PROFILE:
                    return (0, s.jsx)(rq, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
                case tP.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tO.has(i) ? i : void 0 };
                    })(l);
                    if (null == e) return null;
                    return (0, s.jsx)(nU, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tP.I.EXPERIMENT:
                case tP.I.GAME_ORGANIZATION_INVITE:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = B.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: d8.zv,
                          children: (0, s.jsx)(ob, {
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
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(d1.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: r,
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
        if (0 === d.length || e.isPoll() || (0, r$._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, X.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, lI.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, X.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: p,
                srcToSeekOverride: A,
            } = (0, lz.o)(h, { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, c.Lt)(u, X.pr7.IS_VOICE_MESSAGE);
        function I(e, n) {
            let i = (0, c.Lt)(e.originalItem.flags ?? 0, X.sbO.IS_SPOILER) || (0, sV.BV)(t);
            return (0, r5.iW)(e.originalItem, n, i);
        }
        let E = m.map((s) => {
            let a = (0, lI.aG)(s),
                o = {
                    message: e,
                    item: (0, d0.rC)(s, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: I,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), r(e, a));
                              }
                            : void 0,
                    renderAudioComponent: f ? dY.SX : dY.Nj,
                    renderImageComponent: dY.Cr,
                    renderVideoComponent: dY.I1,
                    renderPlaintextFilePreview: dY.R6,
                    renderGenericFileComponent: dY.UB,
                    onPlay: function (n, i, l) {
                        eY.default.track(X.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: ci(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, r0.E)({ proxyURL: s.proxy_url, url: s.url });
            return (d in g && x && ((o.onClick = g[d]), (o.handlePreloadImage = p[d]), (o.onSeekRequest = A[d])), o);
        });
        return (0, s.jsx)(dQ.A, { items: E });
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
            u = (0, r5.sC)(e, i, o, d);
        if (e.type === X.Auw.GIFT) return null;
        let m = ce.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            cl,
            {
                url: m,
                image: e.image,
                video: e.video,
                thumbnail: e.thumbnail,
                providerName: e.provider?.name,
                children: (0, s.jsx)(tg.Ay, {
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
        e.type !== X.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lf.A.parseEmbedTitleWithoutLinks : lf.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === X.Auw.RICH
            ? lf.A.parse(t, !0, {
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
        e.shiftKey ? x.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    handleEditAttachment = (e) => {
        let t = e.originalItem;
        (0, g.openModalLazy)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("865429"), n.e("570698")]).then(
                n.bind(n, 427281),
            );
            return (n) =>
                (0, s.jsx)(i, {
                    ...n,
                    item: e,
                    onSubmit: (e) => {
                        let { description: n, spoiler: i } = e,
                            { channel: l, message: s } = this.props,
                            r = s.attachments.map((e) => ({ id: e.id })),
                            a = r.find((e) => e.id === t.id);
                        null != a &&
                            ((a.description = n), (a.is_spoiler = i), x.A.patchMessageAttachments(l.id, s.id, r));
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
                      d9.zx.has(t.type) ||
                      (0, r1.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, X.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lg.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lp.has(t.content_type);
                              })
                          )) ||
                      (0, r1.V)(t) ||
                      (0, r1.G8)(t) ||
                      (0, r1.Xk)(t) ||
                      ((0, r1.nL)(t) && (0, rL.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === X.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, r5.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  ad,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: ci,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    (t.stopPropagation(), t.preventDefault(), a?.(t, e));
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
                                so.Ay,
                                {
                                    type: so.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: sY.LL, renderVideoComponent: d7, renderLinkComponent: sY.bU };
                  if (
                      t.type === X.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = r2.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  oC,
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
        return (0, s.jsx)(ar.N, {
            gifAutoPlay: t,
            getGifFavButton: ci,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), r?.(t, e));
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(lA.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(dW.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== X.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(th, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, r4.ec)(e)
            ? (0, s.jsx)(aN.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lY.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(rm, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(X.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(rk, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(X.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - io.default.extractTimestamp(e.id) >= ct)
        )
            return (0, s.jsx)("div", { className: d8.xM, children: Z.intl.string(Z.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: Z.intl.string(Z.t.VL1KOk),
            confirmText: Z.intl.string(Z.t.YEHppG),
            cancelText: Z.intl.string(Z.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: d8.IX,
                    children: Z.intl.string(Z.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: Z.intl.string(Z.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, s.jsx)(p.M, {
                  dismissable: !0,
                  header: Z.intl.string(Z.t.CbTIEo),
                  confirmText: Z.intl.string(Z.t.kFwAsa),
                  cancelText: Z.intl.string(Z.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: d8.IX,
                      children: Z.intl.string(Z.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(dq, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e5.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(aj, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== X.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(lF, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === X.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(sh, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === X.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(sC, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, n$.KM)(e)
            ? (0, s.jsx)(n2, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lW.A, { message: e, poll: t, className: d8.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tR, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lX.Mn)(e, this.props.channel))
            return (0, s.jsx)(sa, { message: e, renderAccessories: this.props.renderAccessories });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lX.Mn)(e, this.props.channel))
            return (0, s.jsx)(iv, {
                message: e,
                renderAccessories: this.props.renderAccessories,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(d2.A, { message: e, compact: t, location: d2.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, id.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new iu(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lY.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, dK.XL)(e),
                  className: o()(this.props.className, d8.kL),
                  children: (0, s.jsx)(d4, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, dK.XL)(t), className: o()(e, d8.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let a = this.renderEditedTag(t, i),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButtons(),
            h = this.renderEmbeds(t),
            g = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            A = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            I = this.renderThreadAccessories(t),
            E = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            C = this.renderEmbeddedApplicationInstanceEmbed(t),
            _ = this.renderInteractionPremiumUpsell(t),
            j = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            y = this.renderSafetySystemNotification(t),
            T = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            k = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == h &&
            null == g &&
            null == p &&
            null == c &&
            null == A &&
            null == x &&
            null == f &&
            null == I &&
            null == E &&
            null == C &&
            null == v &&
            null == j &&
            null == N &&
            null != _ &&
            null == S &&
            null == b &&
            null == k &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, dK.XL)(t),
                  className: o()(e, d8.kL),
                  children: [
                      k,
                      b,
                      v,
                      S,
                      R,
                      d,
                      c,
                      j,
                      u,
                      m,
                      h,
                      T,
                      g,
                      f,
                      E,
                      C,
                      _,
                      a,
                      p,
                      A,
                      x,
                      l && this.renderSuppressConfirmModal(),
                      r && this.renderRemoveAttachmentConfirmModal(),
                      I,
                      N,
                      y,
                  ],
              });
    }
}
function cr(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: l,
            isMessageSnapshot: r,
            hideInviteEmbedBanner: a,
            hideActivityInvite: o,
        } = e,
        d = (0, u.bG)([O.default], () => O.default.getId()),
        m = il.X6.useSetting(),
        h = il.hD.useSetting(),
        g = il.rs.useSetting() && !(0, rx.A)(e.message),
        p = il.jW.useSetting() && !1 !== e.renderReactions,
        A = il.kt.useSetting(),
        x = (0, u.bG)([rQ.A], () => null == n.guild_id || rQ.A.canChatInGuild(n.guild_id), [n]),
        f = (0, u.bG)([lx.A], () => null != n.guild_id && lx.A.isLurking(n.guild_id), [n]),
        I = (0, u.bG)([lM.Ay, B.default], () => {
            let e = B.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lM.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: v } = (0, u.cf)(
            [tl.A],
            () => ({
                canAddNewReactions: x && tl.A.can(X.xBc.ADD_REACTIONS, n),
                canManageMessages: tl.A.can(X.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        C = (0, i7.ix)(n.guild_id),
        [, _] = (0, le.c)(n.guild_id),
        j = (0, rh.Id)(n),
        N =
            (d === i.author.id || v) &&
            i.author.id !== X.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, X.pr7.EPHEMERAL) &&
            j &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        y = d === i.author.id && j && !r,
        T = i.author.id === d,
        S = i.isFirstMessageInForumPost(n),
        b = (0, r9.A)({
            channel: n,
            canChat: x,
            renderReactions: p,
            canAddNewReactions: E,
            isLurking: f,
            communicationDisabled: _,
            isActiveChannelOrUnarchivableThread: j,
            isAutomodQuarantined: C,
        }),
        k = (0, n8.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        R = (0, lv.A)(n?.id),
        L = (0, lK.A)(i),
        M = (0, nQ.P)(i),
        P = (0, r6.z)(n),
        D = (0, r3._f)(i.id, i.channel_id),
        U = (0, nq._R)(),
        G = (0, n7.U)();
    return (0, s.jsx)(cs, {
        canSuppressEmbeds: N,
        canDeleteAttachments: y,
        ...b,
        disableReactionReads: !!S || b.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && P,
        hasBailedAst: e.hasBailedAst,
        isLurking: f && x,
        isPendingMember: I && x,
        isCurrentUser: T,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: g,
        gifAutoPlay: A,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: k,
        showMaskedLinks: k,
        shouldHideMediaOptions: R,
        enabledContentHarmTypeFlags: M,
        ctaButtonType: D,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: a,
        hideActivityInvite: o,
        restrictedPreview: G,
    });
}
function ca(e) {
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
        c = il.X6.useSetting(),
        u = il.hD.useSetting(),
        m = il.rs.useSetting(),
        h = il.kt.useSetting(),
        g = (0, n7.U)(),
        p = (0, n8.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, lv.A)(n?.id),
        x = (0, nQ.P)(t),
        f = (0, r3._f)(t.id, t.channel_id),
        I = (0, lK.A)(t);
    return (0, s.jsx)(cs, {
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
        poll: I,
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: A,
        enabledContentHarmTypeFlags: x,
        ctaButtonType: f,
        restrictedPreview: g,
    });
}
