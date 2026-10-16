(n.d(t, { iV: () => ca, OC: () => cd, Ay: () => co }), n(938796));
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
    k = n(991690),
    R = n(371169),
    L = n(976860),
    M = n(625180),
    P = n(91242),
    D = n(165610),
    O = n(652215);
async function U(e) {
    var t;
    let { application: n, analyticsContext: i } = e,
        l =
            null != (t = n).conjureProjectId && null == P.A.getFrame((0, D.VA)(t.id, D.sd))
                ? (await (0, R.l5)(n.id))[0]
                : void 0;
    null == l
        ? M.A.launchFrame({ applicationId: n.id, surface: D.sd, analyticsContext: i })
        : (M.A.launchFrame({
              applicationId: n.id,
              surface: { type: k.U.APP_CHANNEL, channelId: l.channel_id, guildId: l.guild_id },
              analyticsContext: i,
              showErrorModal: !1,
          }).catch(() => {}),
          (0, L.pX)(O.BVt.CHANNEL(l.guild_id, l.channel_id)));
}
var G = n(25451),
    w = n(205184),
    B = n(773669),
    V = n(280450),
    H = n(734057),
    F = n(994500),
    z = n(967198),
    Y = n(287809),
    K = n(486020),
    W = n(204776),
    J = n(725606),
    X = n(572211),
    Z = n(500060),
    q = n(432017),
    $ = n(687966),
    Q = n(104171),
    ee = n(105292),
    et = n(852575);
function en(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: et.i,
        children: [
            (0, s.jsx)(Q.Ay, { guildId: n, users: t, max: 6, size: Q.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var ei = n(354287),
    el = n(138175),
    es = n(112150),
    er = n(574660),
    ea = n(768349),
    eo = n(113732);
function ed(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, el.b)(t)),
        m = c?.id,
        h = (0, E.Z$)(t),
        g = K.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = (0, es.f)(t),
        v = (0, u.bG)([V.default], () => l ?? V.default.getId(), [l]),
        { analyticsLocations: C } = (0, I.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: b } = (0, J.w)(t.id),
        k = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        R = null != m && h && k,
        L = b && h,
        M = (0, G.X)(t),
        P = (0, er.F)(t),
        D = (0, er.t)(t),
        O = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? M
                        ? e.push({
                              label: ee.intl.string(ee.t.RscU7I),
                              trackingArea: ei.kY.PLAY,
                              onClick() {
                                  U({ application: t, analyticsContext: { isStart: !0, analyticsLocations: C } });
                              },
                          })
                        : (L &&
                              e.push({
                                  label:
                                      null == j
                                          ? ee.intl.string(ee.t.RscU7I)
                                          : N
                                            ? ee.intl.string(ee.t.DPfdsq)
                                            : ee.intl.string(ee.t.sqe0hj),
                                  trackingArea: ei.kY.PLAY,
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
                          !L &&
                              R &&
                              e.push({
                                  label: ee.intl.string(ee.t.JeK1Wg),
                                  trackingArea: ei.kY.PLAY,
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
                    : null != D && e.push(D),
                e
            );
        }, [h, D, M, t, L, R, j, N, _, i, v, C, m]),
        w = h ? (0, s.jsx)(eu, { app: t }) : (0, s.jsx)(ec, { app: t });
    return (0, s.jsx)(X.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: P,
        bannerAspectRatio: x,
        iconSrc: g,
        info: w,
        actions: O,
        onClickContent: P,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: v,
            activityCustomId: i,
            onView: o,
            guildId: H.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function ec(e) {
    let { app: t } = e,
        n =
            (0, W.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([B.default], () => B.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : ee.intl.format(ee.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(A.E, { variant: "text-xs/medium", className: eo.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: eo.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function eu(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([z.A], () => z.A.getGuildId() ?? void 0, []),
        a = (0, w.s)(t.id),
        o = (0, u.yK)(
            [Y.default, F.A],
            () => {
                let e = [];
                for (let [t, n] of a.entries()) {
                    if (t >= 5) break;
                    let i = Y.default.getUser(n.author_id),
                        l = F.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [a],
        ),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(en, {
                    activityUsers: o,
                    guildId: l,
                    activityText: ee.intl.formatToPlainString(ee.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j.FireIcon, { size: "xxs", color: "currentColor" }),
                        ee.intl.string(ee.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? ee.intl.format(ee.t.z8EAJW, { count: i }) : ee.intl.string(ee.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: eo.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: eo.Tc, children: e }, t)),
                }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: eo.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var em = n(582388),
    eh = n(257269);
let eg = (0, u.UT)(em.A, {
    getQueryId: O.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : em.A.getOne(e, t)),
    load: (e, t) => (0, eh.Py)(e, t),
});
var ep = n(309010),
    eA = n(933958),
    ex = n(782091);
function ef(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Z$)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, I.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ep.Ay], () => ep.Ay.getChannelId()),
        g = (0, ex.et)(h),
        p = (0, u.bG)([eA.Ay], () => {
            if (null == h) return;
            let e = eA.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([eA.Ay], () => eA.Ay.getCurrentEmbeddedActivity()),
        x = g === ex.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        C = null != n ? n : i.customId,
        _ = [];
    (0, G.X)(t)
        ? _.push({
              label: ee.intl.string(ee.t.RscU7I),
              trackingArea: ei.kY.PLAY,
              onClick() {
                  U({ application: t, analyticsContext: { isStart: !0, analyticsLocations: m, channelId: h } });
              },
          })
        : (x &&
              _.push({
                  label:
                      null == p
                          ? ee.intl.string(ee.t.RscU7I)
                          : v
                            ? ee.intl.string(ee.t.DPfdsq)
                            : ee.intl.string(ee.t.sqe0hj),
                  trackingArea: ei.kY.PLAY,
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
                  label: ee.intl.string(ee.t.JeK1Wg),
                  trackingArea: ei.kY.PLAY,
                  onClick() {
                      (0, T.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: C, referrerId: l });
                  },
              }));
    let j = (0, er.F)(t);
    return (0, s.jsx)(X.h, {
        actions: _,
        onClickContent: j,
        header: t.name,
        iconSrc: K.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: ea.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: C,
            guildId: H.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eI(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, I.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = eg(t.id, r);
    return (0, E.Z$)(t)
        ? null != r && null == c && null != d
            ? (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(ef, { application: t, customId: a, customLink: d, referrerId: l, message: n }),
              })
            : (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(ed, {
                      app: t,
                      linkType: ea.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var eE = n(424743),
    ev = n(821609),
    eC = n(379257),
    e_ = n(306537),
    ej = n(36149);
function eN(e) {
    let { channelId: t } = e,
        n = (0, ej.i2)(),
        i = r.useCallback(() => {
            (eC.A.showAgeVerificationGetStartedModal({ entryPoint: e_.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, e_.UT)(e_.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(ev.$, { variant: "primary", text: ee.intl.string(ee.t["/nicWo"]), onClick: i, disabled: !n });
}
var ey = n(107766),
    eT = n(780964),
    eS = n(766075);
function eb(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            ((0, ey.nk)() || (0, eS.openUserSettings)(eT.X.FAMILY_CENTER_PANEL), (0, e_.UT)(e_.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(ev.$, { variant: "primary", text: ee.intl.string(ee.t.n8a49k), onClick: n });
}
var ek = n(277861),
    eR = n(876891);
function eL(e) {
    let { channelId: t } = e,
        n = (0, ej.i2)(),
        i = r.useCallback(() => {
            ((0, ek.Vq)(), (0, e_.UT)(e_.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(ev.$, {
        variant: "secondary",
        text: ee.intl.string(eR.default.Z61nkt),
        onClick: i,
        disabled: !n,
    });
}
var eM = n(284009),
    eP = n.n(eM),
    eD = n(664121),
    eO = n(34188),
    eU = n(408278),
    eG = n(173936),
    ew = n(858899),
    eB = n(939249),
    eV = n(996759),
    eH = n(800342),
    eF = n(163437),
    ez = n(185438),
    eY = n(97352),
    eK = n(652676),
    eW = n(67480),
    eJ = n(328968),
    eX = n(174459),
    eZ = n(957565),
    eq = n(943775),
    e$ = n(997997),
    eQ = n(658575),
    e0 = n(376374),
    e1 = n(435220),
    e2 = n(140046);
let e3 = (0, u.UT)([eW.A, eJ.A, eY.A], {
        getQueryId: O.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eW.A.get(e),
                n = eJ.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eY.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (eP()(null != e, "skuId is null"), await (0, eH.QB)(e));
        },
    }),
    e5 = (0, u.UT)([eW.A], {
        getQueryId: O.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eW.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (eP()(null != e && null != t, "appId is null"), await (0, eH.JI)(t));
        },
    });
function e4(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eQ.G)(l),
        [o, d, c, m] = (0, u.yK)(
            [eK.A, H.A],
            () => {
                let e = (0, eq.A)(t, 45),
                    n = H.A.getBasicChannel(i.channel_id)?.guild_id;
                return [eK.A.getStoreLayout(l), eK.A.getFetchStatus(l), n, e];
            },
            [t, l, i.channel_id],
        );
    r.useEffect(() => {
        d === eK.N.NONE && (0, eV.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        p = o.otps.length,
        A = r.useMemo(
            () =>
                h > 0 && p > 0
                    ? ee.intl.formatToPlainString(ee.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? ee.intl.formatToPlainString(ee.t.GSfibA, { count: h })
                      : p > 0
                        ? ee.intl.formatToPlainString(ee.t.j7Go5A, { count: p })
                        : ee.intl.string(ee.t.rMA98g),
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
    return (0, s.jsx)(e6, {
        appName: t.name,
        title: ee.intl.formatToPlainString(ee.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, e1.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, e$.K)(l, e$.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eX.default.track(O.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: e2.mZ,
            children: (0, s.jsx)(ev.$, {
                onClick: function () {
                    (x(),
                        eX.default.track(O.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: ee.intl.string(ee.t.kRvlKJ),
            }),
        }),
    });
}
function e9(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = e3(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = e5(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([H.A], () => H.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eq.A)(t, 45), [t]),
        p = (0, eQ.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, ez.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === O.Puh.SUBSCRIPTION,
        I = !!f && (0, eF.bg)(o.flags);
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
                          ee.intl.string(ee.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eD.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          ee.intl.string(ee.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    function _() {
        null != o &&
            eX.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === C && (C = void 0),
        (0, s.jsx)(e6, {
            appName: t.name,
            title: o.name,
            description: C,
            link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, e1.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, e$.K)(t.id, e$.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (E(),
                    eX.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, s.jsxs)("div", {
                className: e2.w,
                children: [
                    (0, s.jsx)(ev.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (v(),
                                eX.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: ee.intl.string(ee.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, s.jsx)(e0.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: I ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eO.U,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, s.jsx)(ev.$, { variant: "primary", text: ee.intl.string(ee.t.uuzaAK), onClick: v })
                        : (0, s.jsx)(e0.$P, { appId: t.id, sku: o, icon: eO.U, onHasClicked: _ }),
                ],
            }),
        })
    );
}
function e6(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: e2.iE,
        children: [
            (0, s.jsxs)("div", {
                className: e2.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: e2.qd,
                        children: [
                            (0, s.jsx)(eO.U, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eZ.p5 &&
                        (0, s.jsx)(eU.K, {
                            "aria-label": ee.intl.string(ee.t.WqhZss),
                            icon: () => (0, s.jsx)(eG.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eZ.C)(l, () => {
                                    ((0, ew.P0)({ text: ee.intl.string(ee.t["L/PwZf"]), variant: "success" }), o());
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: e2.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: e2.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eB.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: e2.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: e2.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(A.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: e2.h_,
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
var e8 = n(401374),
    e7 = n(562708),
    te = n(139286);
function tt(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, te.x)({
                type: e7.ImpressionTypes.VIEW,
                name: e7.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, W.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(I.f5, {
              value: i,
              children: (0, s.jsx)(ed, { app: t, linkType: ea.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var tn = n(778492),
    ti = n(297264),
    tl = n(285796),
    ts = n(857182),
    tr = n(506774),
    ta = n(73153),
    to = n(576705),
    td = n(812930);
let tc = "ChannelFollowingBumpChannels",
    tu = new Set(),
    tm = new Set();
class th extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        (this.waitFor(V.default, H.A, to.A, Y.default), (tu = new Set(tr.w.get(tc))));
    }
    shouldShowBump(e) {
        return tm.has(e);
    }
}
let tg = new th(ta.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tu.has(t)) return !1;
        let l = H.A.getChannel(t),
            s = Y.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === O.rbe.GUILD_ANNOUNCEMENT &&
                (0, td.A)(n) &&
                to.A.can(O.xBc.SEND_MESSAGES, l) &&
                (r || to.A.can(O.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), O.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tm.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tm.has(t.id) && c.Lt(Number(t.flags), O.pr7.CROSSPOSTED) && tm.delete(t.id);
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
        (tu.add(t), tr.w.set(tc, tu), tm.clear());
    },
});
var tp = n(419056),
    tA = n(732929);
let tx = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tg], () => tg.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            (ts.A.dismissPublishBump(n), (0, tp.A)(t, n));
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
                              children: ee.intl.string(ee.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: tA.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eB.D, { onClick: l, children: ee.intl.string(ee.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eB.D, {
                              onClick: a,
                              children: (0, s.jsx)(tl.a, { size: "xs", color: "currentColor", className: tA.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(A.E, {
                      color: "text-muted",
                      className: tA.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eB.D, { onClick: o, children: ee.intl.string(ee.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tf = n(175671),
    tI = n(435558),
    tE = n.n(tI),
    tv = n(239947),
    tC = n(403581),
    t_ = n(97808),
    tj = n(778712),
    tN = n(520117),
    ty = n(793943),
    tT = n(763754),
    tS = n(973654),
    tb = n(467135),
    tk = n(644235),
    tR = n(153469),
    tL = n(72191),
    tM = n(988986);
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
                  (0, s.jsx)(ev.$, {
                      text: ee.intl.string(ee.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eX.default.track(O.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, ty.nf)(ty.HP.CUSTOM_THEME, { from: ty.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tP(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tS.GQ)((0, tk.PC)(n.base_theme)));
                      },
                  }),
              ],
          });
}
function tO(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: a } = l,
        o = (0, tT.Ay)(l),
        d = r.useMemo(
            () =>
                (0, tI.once)(() => {
                    (0, te.x)({ type: e7.ImpressionTypes.VIEW, name: tv.IJ.CUSTOM_THEME_SHARE, properties: {} });
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
        u = r.useMemo(() => (void 0 === a ? "" : (0, tR.V9)(tP(a.colors), a.gradient_angle ?? 0)), [a]);
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
                              children: [ee.intl.string(tL.default.KSBBpC), " ", (0, s.jsx)(tC.t, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tM.Tb,
                              children:
                                  ((t = `${ee.intl.format(tL.default.fQPSEf, { username: "__USERNAME__" })}`),
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
var tV = n(132500),
    tH = n(172218),
    tF = n(612324),
    tz = n(575593),
    tY = n(318254),
    tK = n(890856),
    tW = n(866665),
    tJ = n(825484),
    tX = n(289873),
    tZ = n(444927),
    tq = n(713517),
    t$ = n(427209),
    tQ = n(44120),
    t0 = n(821925),
    t1 = n(309954),
    t2 = n(652165),
    t3 = n(158045),
    t5 = n(580630),
    t4 = n(815996),
    t9 = n(440938),
    t6 = n(4227),
    t8 = n(298072),
    t7 = n(993408),
    ne = n(682301),
    nt = n(841702),
    nn = n(466459),
    ni = n(777829),
    nl = n(859587),
    ns = n(918838),
    nr = n(623373),
    na = n(536572),
    no = n(156248),
    nd = n(38405);
class nc extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nd.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var nu = n(878112),
    nm = n(722258),
    nh = n(268959),
    ng = n(387945),
    np = n(618317),
    nA = n(140877),
    nx = n(561769),
    nf = n(661847),
    nI = n(753704),
    nE = n(540737),
    nv = n(927813);
let nC = 10 * nv.A.Millis.MINUTE,
    n_ = new (class {
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
    nj = new Set(),
    nN = new Map(),
    ny = null;
function nT(e) {
    let t = nN.get(e);
    return null != t && Date.now() - t < nC;
}
var nS = n(347722),
    nb = n(935094),
    nk = n(57020),
    nR = n(61750),
    nL = n(521e3),
    nM = n(202541),
    nP = n(278324);
function nD() {
    return ((0, nt.b5)(), null);
}
function nO(e) {
    let { disableFetch: t } = e;
    return ((0, t1.W)({ disableFetch: t }), null);
}
function nU(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: l, checkoutEligiblePrices: a } = (0, nk.F)({ product: t, hasShopDiscount: n }),
        o = a[0],
        d = t.skuId,
        c = r.useCallback(() => {
            l
                ? (0, t2.B4)({
                      skuId: d,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          ((0, t4.gB)(),
                              (0, nR.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tw.gs.ORB,
                              }));
                      },
                  })
                : (0, tQ.A)({
                      skuId: d,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, t4.gB)();
                      },
                  });
        }, [t, d, l, i]);
    if (null == o) return null;
    let u = l
        ? ee.intl.format(ee.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tY.C, { className: nP.fN, size: "sm", color: "currentColor" }),
          })
        : ee.intl.formatToPlainString(ee.t["cNSL/j"], { price: (0, t5.$g)(o.amount, o.currency) });
    return (0, s.jsx)(ev.$, { variant: "primary", onClick: c, text: u, fullWidth: !0 });
}
function nG(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        d = (0, u.bG)([Y.default], () => Y.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = r.useRef(null),
        { isHoveringOrFocusing: h } = (0, tq.A)(m),
        g = r.useRef(null),
        p = (0, ns.U)(t),
        A = (0, tF.A)(g, p);
    (0, nl.x)(h, t);
    let { previewingVariantIndex: x, handleEntering: f, handleLeaving: E } = (0, nb.f)(t),
        v = r.useRef(!1);
    r.useEffect(() => {
        if (v.current || !(0, nr.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        (e > -1 && (0, t8.n)(t, e), (v.current = !0));
    }, [t, n]);
    let C = (0, t8.Q)(t),
        _ = (0, nr.B1)(t) ? (t.variants[C] ?? t) : t,
        j = _.skuId,
        { isPurchased: N } = (0, nn.h)(_),
        y = (0, u.bG)([t6.A], () => t6.A.hasPreviouslyFetched || null != t6.A.fetchError),
        T = !c || y,
        S = c && N,
        b = (0, u.bG)([Y.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = Y.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (Y.default.getUser(t) ?? void 0) : void 0;
        }),
        k = (0, nS.X)(_),
        R = (0, ni.f)({ product: t, analyticsLocations: a }),
        L = (0, no.G)({
            skuId: j,
            product: _,
            productName: (0, na.VG)(_),
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
            (0, nm.B)({ skuId: j, tab: i, analyticsLocations: a });
        }, [j, i, a]),
        D = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: P }), [P]),
        O = r.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        U = null != d && t3.Ay.canUseShopDiscounts(d),
        G = T && !S && !(0, t7.G0)(_),
        w = (0, s.jsx)(ev.$, { variant: "secondary", onClick: P, text: ee.intl.string(ee.t.KLBTgF), fullWidth: !0 }),
        B = G ? (0, s.jsx)(nU, { product: _, hasShopDiscount: U, analyticsLocations: a }) : null,
        V = k
            ? (0, s.jsx)(nu.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: C,
                  giftRecipient: b,
                  giftingOrigin: nM.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        ref: m,
        className: nP.kL,
        children: [
            c && (0, s.jsx)(nD, {}),
            (0, s.jsx)(nO, { disableFetch: !(0, nr.Vx)(_) }),
            (0, s.jsxs)(nx.v3.Provider, {
                value: O,
                children: [
                    (0, s.jsx)(nL.vf.Provider, {
                        value: (0, nL.$c)(t.skuId) ? g : null,
                        children: (0, s.jsxs)(tK.s, {
                            ref: A,
                            onClick: P,
                            "aria-label": (0, na.s7)(_),
                            className: nP.xX,
                            children: [
                                t.type === tz.R.BUNDLE &&
                                    t.previewAssets?.bgStatic != null &&
                                    (0, s.jsx)("img", { className: nP.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: nP.VH,
                                    children: (0, s.jsx)(np.A, { skuId: n, isCardHovered: h, overrideVariantIndex: x }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: nP.GJ,
                                    children: [
                                        (0, s.jsx)(nh.A, { skuId: n }),
                                        (0, s.jsxs)("div", {
                                            className: nP.gj,
                                            children: [
                                                (0, s.jsx)(tW.m, {
                                                    text: ee.intl.string(ee.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eB.D, {
                                                        "aria-label": ee.intl.string(ee.t.Ej3B3Y),
                                                        onClick: M,
                                                        className: o()(nP.VD, { [nP.Hk]: !h }),
                                                        children: (0, s.jsx)(t$.A, {
                                                            size: "refresh_sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(nI.R, {
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
                        className: nP.zH,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nP.pq,
                                children: [
                                    (0, s.jsx)(ng.A, { skuId: n }),
                                    (0, s.jsxs)("div", {
                                        className: nP.y3,
                                        children: [
                                            (0, s.jsx)(nA.A, { skuId: n }),
                                            (0, s.jsx)(nf.A, {
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
                            (0, s.jsxs)(tJ.e, { wrap: !1, fullWidth: !0, children: [w, B, V] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nw = { rootMargin: "200px" };
function nB(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, ne.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([t0.A], () => t0.A.getFetchStateForSku(e.skuId)),
        a = (0, tZ.A)(() => ({ cardId: (0, tV.A)() })),
        [o, d] = r.useState(!1),
        c = (0, tH.B)(
            r.useCallback((e) => {
                e.isIntersecting && d(!0);
            }, []),
            nw,
            "loading" === i && !o,
        );
    return (r.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nj.has(t) || nT(t)) &&
            !(nj.size >= 50) &&
            (0, nE.jn)(t) &&
            (nj.add(t),
            (function e(t) {
                null == ny &&
                    (ny = setTimeout(() => {
                        ((ny = null),
                            (function () {
                                for (let e of [...nj]) (nT(e) || !(0, nE.jn)(e)) && nj.delete(e);
                                if (0 === nj.size) return;
                                let t = [];
                                for (let e of nj) {
                                    if (t.length >= 50 || !n_.tryTake()) break;
                                    (t.push(e),
                                        nj.delete(e),
                                        (function (e) {
                                            if ((nN.set(e, Date.now()), nN.size > 2e3)) {
                                                let e = nN.keys().next().value;
                                                null != e && nN.delete(e);
                                            }
                                        })(e));
                                }
                                (t.length > 0 && (0, nE.tu)({ skuIds: t }),
                                    nj.size > 0 && e(Math.max(n_.getMsUntilAvailable(), 300)));
                            })());
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nT(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: c,
                  className: nP.kL,
                  children: (0, s.jsx)("div", { className: nP.dc, children: (0, s.jsx)(tX.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(t9.R9, { newValue: a, children: (0, s.jsx)(nG, { ...e, product: t }) })
          : null;
}
function nV(e) {
    return (0, s.jsx)(nc, { children: (0, s.jsx)(nB, { ...e }) });
}
var nH = n(661531),
    nF = n(696986),
    nz = n(666860),
    nY = n(548118),
    nK = n(250627),
    nW = n(741231),
    nJ = n(749314),
    nX = n(71393),
    nZ = n(722888),
    nq = n(43136),
    n$ = n(575926),
    nQ = n(775429);
function n0(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nX.A], () => nX.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nZ.G)(t),
        { listingsLoaded: a } = (0, nK.bb)(t),
        d = (0, nK.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            (eX.default.track(O.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nz.H$)(t) }),
                await (0, nW.A)(O.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, te.A)(
        { type: e7.ImpressionTypes.VIEW, name: e7.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(nQ.lm, nQ.dc), children: (0, s.jsx)(tX.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nQ.lm,
                children: [
                    (0, s.jsx)(nq.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nF.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nQ.qs,
                        children: [
                            (0, s.jsx)(n$.h, {
                                height: "16px",
                                width: "16px",
                                color: nH.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(ti.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nQ.Nl,
                                children: ee.intl.string(ee.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nF.h, { size: 16 }),
                    (0, s.jsx)(ti.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ee.intl.format(ee.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nF.h, { size: 4 }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nF.h, { size: 16 }),
                    (0, s.jsx)(nJ.A, {}),
                    (0, s.jsx)(nF.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nQ.kS,
                        children: [
                            (0, s.jsx)(nY.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nQ.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: ee.intl.format(ee.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: ee.intl.format(ee.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nQ.$h,
                                children: (0, s.jsx)(ev.$, {
                                    onClick: c,
                                    icon: n$.A,
                                    text: ee.intl.string(ee.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
var n1 = n(390248),
    n2 = n(282108),
    n3 = n(33358),
    n5 = n(885574),
    n4 = n(874840);
function n9(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eB.D, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("249629"), n.e("486381"), n.e("635270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: n4.L,
        children: [
            (0, s.jsx)(n5.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: n4.m, children: ee.intl.string(ee.t["2aXnfa"]) }),
        ],
    });
}
var n6 = n(974875),
    n8 = n(900019);
function n7(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([n8.A], () => n8.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, n6.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(ev.$, { variant: "secondary", text: ee.intl.string(ee.t["4q1Elf"]), onClick: l, disabled: !i });
}
var ie = n(320448),
    it = n(958340),
    ii = n(384231),
    il = n(959698),
    is = n(438729),
    ir = n(470964),
    ia = n(886737),
    io = n(885386),
    id = n(540999),
    ic = n(47167),
    iu = n(58703),
    im = n(935208),
    ih = n(427930);
function ig(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: K.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: ee.intl.formatToPlainString(ee.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class ip {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        ((this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : to.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nX.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : it.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, ih.A)(a) ? a.messageReference?.message_id : void 0,
            c = (0, iu.Fe)(null != d ? new Date(im.default.extractTimestamp(d)) : o.message.timestamp),
            u = e.getChannel(this.parentMessage.channel_id);
        if (null != u && u.guild_id === a.messageReference?.guild_id) {
            var m;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(u.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ig(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (m = (0, ic.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: ee.intl.formatToPlainString(ee.t["+l04BN"], { origin: m, timestamp: c }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let h = a.messageReference?.guild_id;
        if (null == h) return { snapshotIndex: r };
        let g = l.getGuild(h) ?? s.getGuild(h);
        return null == g ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ig(g, c) };
    }
}
var iA = n(66834),
    ix = n(449054);
async function iI(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = H.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nX.A.getGuild(t))
        try {
            (await (0, ix.Z2)(t, { object: O.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, iA.k)(t),
                (l = H.A.getChannel(n)));
        } catch {}
    eX.default.track(O.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: H.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nW.A)(O.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var iE = n(387408),
    iv = n(352106);
function iC() {
    return (0, s.jsxs)("div", {
        className: iv.N1,
        children: [
            (0, s.jsx)(t$.A, { size: "xs", className: iv.nr, color: nH.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: iv.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: ee.intl.string(ee.t.ToyvLk),
            }),
        ],
    });
}
function i_(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ip(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [H.A, Y.default, F.A, to.A, nX.A, it.A],
            () => l.getForwardInfo(H.A, Y.default, F.A, to.A, nX.A, it.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            iI(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eB.D, {
              className: iv.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: iv.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: iv.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(ie._, { size: "xxs", color: nH.A.colors.TEXT_MUTED }),
              ],
          });
}
function ij(e) {
    let {
            message: t,
            renderAccessories: n,
            snapshot: i,
            index: l,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: o,
        } = e,
        d = r.useMemo(() => (0, iE.A)(t, i), [t, i]),
        c = io.hD.useSetting(),
        m = io.rs.useSetting(),
        h = (0, u.bG)([id.A], () => id.A.isDeveloper),
        g = (0, il.U)(),
        p = (0, ii.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: x,
            hasBailedAst: f,
        } = (0, ir.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
            postProcessor: g ? ia.A : void 0,
        }),
        I = (0, u.bG)([H.A], () => H.A.getChannel(t.channel_id)),
        E = io.hH.useSetting();
    return null == I
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: iv.kL,
                  children: [
                      (0, s.jsx)("div", { className: iv.hD }),
                      (0, s.jsxs)("div", {
                          className: iv.Qs,
                          children: [
                              (0, s.jsx)(iC, {}),
                              (0, s.jsx)(is.Ay, { message: d, content: A, compact: E }),
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
                              !g && (0, s.jsx)(i_, { message: t, snapshot: i, index: l }),
                          ],
                      }),
                  ],
              },
              l,
          );
}
function iN(e) {
    let { message: t, renderAccessories: n, disableComponentInteractivity: i, onMediaItemContextMenu: l } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, r) =>
            (0, s.jsx)(
                ij,
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
var iy = n(109112),
    iT = n(62010),
    iS = n(369606),
    ib = n(409626),
    ik = n(49491),
    iR = n(692969),
    iL = n(738250),
    iM = n(575568);
function iP(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: r,
            openGameProfile: a,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, iL.A)({ gameId: t }),
                r = (0, iR.A)({ gameId: t, source: ib.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                a = (0, ik.A)(l),
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
        ? (0, s.jsxs)(tK.s, {
              className: iM.E6,
              onClick: a,
              "aria-label": ee.intl.formatToPlainString(ee.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iM.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: iM.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: iM.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: iM.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: iM.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iM.EU,
                                    children: (0, s.jsx)(iy._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: iM.Qs,
                              children: [
                                  (0, s.jsx)(ti.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: iM.k3,
                                          children: (0, s.jsx)(iT.E, {
                                              variant: "secondary",
                                              type: {
                                                  text: ee.intl.formatToPlainString(ee.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: iS.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eU.K, {
                              icon: ie._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": ee.intl.formatToPlainString(ee.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iD = n(281445),
    iO = n(554146),
    iU = n(933832),
    iG = n(624479),
    iw = n(780907),
    iB = n(131607),
    iV = n(569926),
    iH = n(95035),
    iF = n(403362),
    iz = n(196736),
    iY = n(614393),
    iK = n(143407),
    iW = n(685743),
    iJ = n(349085),
    iX = n(581453),
    iZ = n(342942),
    iq = n(174861),
    i$ = n(49999),
    iQ = n(394107),
    i0 = n(116947);
function i1(e) {
    let { code: t } = e,
        n = r.useMemo(() => (0, iq.GF)(t), [t]);
    r.useEffect(() => {
        iw.Ay.getDetectableGames();
    }, []);
    let i = (0, iJ.A)(n?.game_id, "cover"),
        { data: l } = (0, iV.I)(n?.game_id),
        a = (0, iz.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [d, c] = (0, iB.kn)([iO.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = d !== iO.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iD.X.SHOCKBYTE,
        h = V.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: x } = (0, iW.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
        I = r.useCallback(() => {
            (0, t4.Cz)({
                tab: tw.G2.GAME_SERVERS,
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
                    ? (0, iX.A)(h, E)
                    : (0, iZ.A)({
                          provider: m,
                          onAccept: () => {
                              (c(i$.i.TAKE_ACTION), (0, iX.A)(h, E));
                          },
                      }));
        }, [E, u, m, c, h]),
        C = r.useCallback(() => {
            (0, iZ.A)({
                provider: m,
                onAccept: () => {
                    (c(i$.i.TAKE_ACTION), p());
                },
            });
        }, [m, c, p]);
    if (null == n) return null;
    let _ = [l?.name, n.plan_name].filter(iF.Vq).join("  \u2022  ");
    return (0, s.jsxs)("div", {
        className: i0.E6,
        children: [
            (0, s.jsxs)("div", {
                className: i0.FG,
                children: [
                    (0, s.jsxs)("div", {
                        className: i0.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: i0.oL,
                                children: [
                                    "" !== o
                                        ? (0, s.jsx)("img", { className: i0.vT, src: o, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: i0.iv,
                                              children: (0, s.jsx)(A.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: i0.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: i0.TK,
                                children: [
                                    (0, s.jsx)(ti.D, {
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
                                    className: i0.xG,
                                    children: (0, s.jsx)(eU.K, {
                                        variant: "secondary",
                                        icon: eO.U,
                                        "aria-label": ee.intl.string(iQ.default.F5W36W),
                                        onClick: I,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: i0.$D,
                        children: [
                            (0, s.jsxs)("div", {
                                className: i0.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: ee.intl.string(iQ.default.mJlz3T),
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
                                className: i0.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: ee.intl.string(iQ.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(A.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: i0.qy,
                                                children: [
                                                    (0, s.jsx)(A.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eB.D, {
                                                        className: i0.cL,
                                                        "aria-label": ee.intl.string(ee.t.OpuAlK),
                                                        onClick: p,
                                                        children: x
                                                            ? (0, s.jsx)(iU.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(iG.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(iH.A, {
                                                onClick: C,
                                                children: ee.intl.string(iQ.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, s.jsx)("div", { className: i0.PD, children: (0, s.jsx)(iK.l5, { onClick: v }) }),
                ],
            }),
            (0, s.jsx)("div", { className: i0.uV, children: (0, s.jsx)(iY.T, { imageUrl: o }) }),
        ],
    });
}
class i2 extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nd.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function i3(e) {
    let { code: t } = e;
    return (0, s.jsx)(i2, { children: (0, s.jsx)(i1, { code: t }) });
}
var i5 = n(643612),
    i4 = n(607399),
    i9 = n(702841),
    i6 = n(529200),
    i8 = n(395671),
    i7 = n(993748),
    le = n(212534),
    lt = n(820496);
function ln(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, i9.yK)(
            [le.A],
            () => [le.A.getApplication(t), le.A.isInvalidApplication(t), le.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i9.bG)([z.A], () => z.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tH.K)(u),
        h = r.useCallback(() => {
            eX.default.track(O.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i4.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, i7.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === le.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eX.default.track(O.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i4.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(i6.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t.j4KtLa) }),
                  (0, s.jsx)(i6.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: lt.k,
                          children: [
                              (0, s.jsx)(i6.A.Icon, { expired: !0 }),
                              (0, s.jsx)(i6.A.Info, {
                                  expired: !0,
                                  title: ee.intl.string(ee.t.NaQLEx),
                                  children: ee.intl.string(ee.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === le.e.FETCHING
          ? (0, s.jsxs)(i6.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t.m9hXGR) }),
                    (0, s.jsx)(i6.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(ed, { app: i8.Ay.createFromServer(i), linkType: ea.J.APP_DISCOVERY, onView: h, message: n });
}
var li = n(229527),
    ll = n(870136),
    ls = n(330075),
    lr = n(412728);
function la(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nK.Qi)(n, i),
        r = (0, i9.bG)([z.A], () => z.A.getGuildId());
    return ((0, te.A)(
        {
            type: lr.z.VIEW,
            name: e7.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(ls.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var lo = n(484724),
    ld = n(953727);
function lc(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, ld.A)(l),
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
var lu = n(122906),
    lm = n(401755),
    lh = n(313977),
    lg = n(508557);
function lp(e) {
    let { code: t } = e,
        i = (0, u.bG)([lu.A], () => lu.A.getGuildTemplate(t));
    if (null == i || i.state === lm.QB.RESOLVING)
        return (0, s.jsxs)(i6.A, {
            children: [
                (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t.Xj87Yf) }),
                (0, s.jsx)(i6.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lm.QB.EXPIRED)
        return (0, s.jsxs)(i6.A, {
            children: [
                (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t.C7ZRNw) }),
                (0, s.jsxs)(i6.A.Body, {
                    children: [
                        (0, s.jsx)(i6.A.Icon, { expired: !0 }),
                        (0, s.jsx)(i6.A.Info, { expired: !0, title: ee.intl.string(ee.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(ev.$, { disabled: !0, variant: "secondary", text: ee.intl.string(ee.t.W7NTWm) })
        : (0, s.jsx)(ev.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lm.QB.RESOLVING &&
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
              loading: i.state === lm.QB.ACCEPTING,
              variant: "active",
              text: ee.intl.string(ee.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(i6.A, {
        children: [
            (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t.kAvFkO) }),
            (0, s.jsxs)(i6.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lg.iH,
                        children: [
                            (0, s.jsx)(lc, { className: lh.K }),
                            (0, s.jsx)(i6.A.Info, {
                                title: i.name,
                                children: ee.intl.format(ee.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var lA = n(21599),
    lx = n(681154),
    lf = n(155718);
let lI = new Set([
    lx.ContentInventoryEntryType.TOP_ARTIST,
    lx.ContentInventoryEntryType.TOP_GAME,
    lx.ContentInventoryEntryType.PLAYED_GAME,
    lx.ContentInventoryEntryType.WATCHED_MEDIA,
    lx.ContentInventoryEntryType.LISTENED_SESSION,
    lx.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lE = n(429987),
    lv = n(857071),
    lC = n(46054),
    l_ = n(731068),
    lj = n(619517),
    lN = n(207133),
    ly = n(844222),
    lT = n(463930),
    lS = n(251391),
    lb = n(601255),
    lk = n(562819),
    lR = n(234914),
    lL = n(59318),
    lM = n(837528),
    lP = n(754459),
    lD = n(967144),
    lO = n(342296),
    lU = n(696451),
    lG = n(218394);
function lw(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, ld.A)(l),
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
var lB = n(717125),
    lV = n(376943),
    lH = n(36491),
    lF = n(752755),
    lz = n(461715),
    lY = n(381941),
    lK = n(966101);
function lW(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lz.CI)(e),
                i = (0, i9.bG)(
                    [lU.Ay, V.default],
                    () => {
                        let e = V.default.getId();
                        return lU.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, i9.bG)(
                    [lB.A],
                    () => null != n && n?.channelId != null && lB.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(O.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, i9.cf)(
                    [lF.A, nX.A, H.A, Y.default, z.A],
                    () => {
                        let e = lF.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = nX.A.getGuild(n?.guildId),
                            i = H.A.getChannel(n?.channelId),
                            l = Y.default.getUser(e?.author_id),
                            s = z.A.getGuildId(),
                            r = null != i && (0, lV.nc)(i);
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
                    let e = (0, lz.tU)({
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
                        (lF.A.getEmbedFetchState(n.threadId) !== lF.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lH.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, lP.A)(n.id, lY.Fd),
        u = (0, lM.VL)(n, i, c, !0),
        m = io.kt.useSetting(),
        h = (0, lG.j)(),
        [g, p] = r.useState(!1),
        [x, I] = r.useState(d?.coverImage == null),
        E = (0, i9.bG)([lU.Ay, Y.default], () => lU.Ay.isMember(d?.guildId, Y.default.getCurrentUser()?.id), [d]),
        v = (0, i9.bG)([lU.Ay], () => (d?.authorId != null ? lU.Ay.getMember(d.guildId, d.authorId) : null)),
        C = (0, lb.A)(v?.avatarDecoration != null ? v?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [v?.colorString ?? "inherit", v?.colorStrings ?? null, v?.colorRoleId], [v]),
        y = (0, lD.gn)(v?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: T } = r.useContext(ly.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        R = r.useCallback(() => {
            p(!1);
        }, [p]),
        L = r.useCallback(async () => {
            null != d &&
                ((0, nz.zV)(O.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: E,
                }),
                d.canAccess
                    ? (0, nW.A)(O.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : E
                      ? (0, nW.A)(O.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await ix.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, E]);
    if (null == d) return null;
    let M = (0, K.F_)({ avatarDecoration: C, size: (0, lk.Te)(tj._3.SIZE_40), canAnimate: S }),
        P = d.user?.getAvatarURL(d.guildId, 40, S);
    function D() {
        T.enabled || b((e) => !e);
    }
    let U = d.coverImage,
        G = null != U && (0, lL.ge)(U);
    return (0, s.jsxs)("div", {
        className: lK.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lK.iT,
                onMouseEnter: k,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: ee.intl.string(ee.t.rIbh8H),
                                  className: o()(lK.xn, { [lK.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })
                            : (0, s.jsx)(lR.A, {
                                  src: !(h && (m || g)) && G ? `${U}?format=png` : U,
                                  backgroundSrc: `${U}?format=png`,
                                  alt: ee.intl.string(ee.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lK.xn, { [lK.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lK.q_,
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eB.D, {
                            onClick: L,
                            children: (0, s.jsx)("div", {
                                className: lK.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lK.BS,
                                    children: [
                                        (0, s.jsx)(lw, { color: nH.A.colors.WHITE.css }),
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
                className: lK.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lK.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lK.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lK.hF, lK.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lK._5,
                        children: [
                            null != d.authorId &&
                                null != P &&
                                (0, s.jsx)(lO.A, {
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
                                            children: (0, s.jsx)(t_.eu, {
                                                ...e,
                                                ref: a,
                                                size: tj._3.SIZE_40,
                                                src: P,
                                                "aria-label": ee.intl.string(ee.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lK.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lK.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(lS.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lK.Xg,
                                                }),
                                            (0, s.jsx)(eB.D, {
                                                onClick: L,
                                                className: lK.HA,
                                                children: (0, s.jsx)(ti.D, {
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
                                            className: lK.wn,
                                            children: ee.intl.format(ee.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, s.jsx)(lT.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: y,
                                                                className: lK.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                lO.A,
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
                                                                        (0, s.jsx)(lT.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: y,
                                                                            className: lK.fh,
                                                                        }),
                                                                },
                                                                (0, tV.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(ev.$, { variant: "primary", onClick: L, text: d.ctaText })
                                : (0, s.jsx)(ev.$, { onClick: L, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lJ = n(492230),
    lX = n(378058),
    lZ = n(704413),
    lq = n(537039),
    l$ = n(711038),
    lQ = n(892340),
    l0 = n(803306),
    l1 = n(491182),
    l2 = n(622868),
    l3 = n(10364),
    l5 = n(378570),
    l4 = n(138298),
    l9 = n(358047),
    l6 = n(536637),
    l8 = n.n(l6),
    l7 = n(606049),
    se = n(943815),
    st = n(447215),
    sn = n(39470),
    si = n(832038),
    sl = n(318626),
    ss = n(513653);
let sr = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = Y.default.getUser(t),
        u = r.useMemo(() => (i ? (0, se.A)((0, iu.i$)(l8()(), "LT")) : null), [i]),
        m = (0, st.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, tT.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_16)) : ss,
        g =
            null != c
                ? ee.intl.format(sn.default["+zqXZs"], { username: c.username, onUserClick: m })
                : ee.intl.string(sn.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(sl.NB, sl.JZ, u),
        children: [
            (0, s.jsx)(t_.eu, { src: h, size: tj._3.SIZE_16, className: si.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: si.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: si.Ek, children: "\u2022" }),
                    (0, s.jsx)(l7.A, { timestamp: d, className: si.vE }),
                ],
            }),
        ],
    });
};
var sa = n(942925);
function so(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ip(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [H.A, Y.default, F.A, to.A, nX.A, it.A],
            () => l.getForwardInfo(H.A, Y.default, F.A, to.A, nX.A, it.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = H.A.getChannel(t.channel_id),
                n = nX.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ep.Ay.getCurrentlySelectedChannelId(),
                s = l9.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (l4.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l5.iN)(i),
                eX.default.track(O.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eB.D, {
              className: sa.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: sa.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: sa.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(ie._, { size: "xxs", color: nH.A.colors.TEXT_MUTED }),
              ],
          });
}
function sd(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, tT.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lP.A)(e.id, lY.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, lM.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, lM.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(l1.A, {
        childrenExecutedCommand: (0, s.jsx)(sr, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(l2.Ay, {
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
            renderPopout: l3.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(is.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: sa.iU,
        author: o,
    });
}
function sc(e) {
    let { message: t, snapshot: n, index: i, renderAccessories: l } = e,
        [a, o] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, l0.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = r.useMemo(() => {
            let e = (0, iE.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = io.hD.useSetting(),
        m = io.rs.useSetting(),
        h = (0, u.bG)([id.A], () => id.A.isDeveloper),
        g = (0, ii.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: p,
            hasSpoilerEmbeds: A,
            hasBailedAst: x,
        } = (0, ir.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        f = (0, u.bG)([H.A], () => H.A.getChannel(t.channel_id));
    return null == f
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: sa.kL,
                  children: (0, s.jsxs)("div", {
                      className: sa.Qs,
                      children: [
                          (0, s.jsx)(sd, {
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
                              className: sa.Mf,
                          }),
                          (0, s.jsx)(so, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function su(e) {
    let { message: t, renderAccessories: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(sc, { message: t, snapshot: e, index: i, renderAccessories: n }, i),
        ),
    });
}
var sm = n(302031),
    sh = n(738188),
    sg = n(123292),
    sp = n(239093),
    sA = n(798362);
function sx(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === sp.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === sp.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eB.D, {
              onClick: function () {
                  null != l &&
                      (0, g.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("742978"),
                              n.e("483518"),
                              n.e("51194"),
                              n.e("292030"),
                              n.e("229211"),
                          ]).then(n.bind(n, 385430));
                          return (t) =>
                              (0, s.jsx)(e, {
                                  classificationId: l,
                                  source: sp.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sA.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sA.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sA.U1,
                              children: [
                                  (0, s.jsx)(sh.WarningIcon, {
                                      className: sA.QW,
                                      color: nH.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: ee.intl.string(ee.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sA.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: ee.intl.format(ee.t.eevFb6, { daysAgo: l8()().diff(l8().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sA.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(ee.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: sA.xQ,
                      children: (0, s.jsx)(sg.Q, { text: ee.intl.string(ee.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sf = n(28863),
    sI = n(393033),
    sE = n(975430);
function sv(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sf.Anchor, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("742978"),
                    n.e("483518"),
                    n.e("51194"),
                    n.e("292030"),
                    n.e("229211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: sp.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sE.zh,
        children: ee.intl.string(ee.t.QsqdXC),
    });
}
function sC(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sf.Anchor, { className: sE.zh, href: t, children: ee.intl.string(ee.t["8/GdRB"]) });
}
function s_(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sp.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(sv, { classificationId: n });
        case sp.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(sC, { learnMoreLink: i });
        default:
            return null;
    }
}
function sj(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(tn.k, { size: "xs", color: nH.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(sh.WarningIcon, { color: nH.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: sE.Kk, children: n[t] }) : null;
}
function sN(e) {
    let { children: t, theme: n } = e,
        i = { default: sE._y, danger: sE.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sy(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sI.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eB.D, {
              className: sE.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sE.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sE.U1,
                              children: [
                                  (0, s.jsx)(sj, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sE.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: ee.intl.format(ee.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l8()().diff(l8().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sE.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(sN, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              s_,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var sT = n(44724),
    sS = n(227327),
    sb = n(638495),
    sk = n(43990),
    sR = n(429913),
    sL = n(371794),
    sM = n(871123),
    sP = n(439303),
    sD = n(353281),
    sO = n(832163),
    sU = n(637893),
    sG = n(376680),
    sw = n(317560),
    sB = n(467884),
    sV = n(661070);
function sH(e) {
    let t,
        { guildOrApplication: n, skuIds: i, destinationGuildId: l, channelId: a, messageId: d } = e,
        c = (0, sb.k)(),
        m = (0, sU._)("SocialLayerStorefrontEmbed"),
        h = "guild" === n.type ? n.guildId : void 0,
        g = "application" === n.type ? n.applicationId : void 0,
        p = (0, sG.A)({ applicationId: g, guildId: h }),
        A = p?.storefront,
        x = g ?? A?.applicationId,
        E = (0, sR.h)(x),
        v = A?.application?.name ?? E?.name ?? null,
        C = "guild" === n.type ? n.guildId : ((0, sM.n5)(x) ?? null),
        _ = (0, u.yK)([eW.A], () => (null == x ? [] : i.filter((e) => eW.A.get(e)?.applicationId === x)), [i, x]),
        { analyticsLocations: j } = (0, I.Ay)(f.A.SLAYER_STOREFRONT_EMBED),
        N = r.useMemo(() => ({ pageSection: "storefront_embed", placement: sP.Ye.MULTI_SKU_EMBED }), []),
        y = r.useCallback(() => {
            (null != x &&
                eX.default.track(O.HAw.SLAYER_STOREFRONT_EMBED_SHOP_ALL_CLICKED, {
                    application_id: x,
                    application_name: v,
                    guild_id: C,
                    destination_guild_id: l,
                    channel_id: a,
                    message_id: d,
                    sku_ids: _,
                    sku_count: _.length,
                }),
                (0, sT.default)("guild" === n.type ? { guildId: n.guildId } : { applicationId: n.applicationId }));
        }, [x, v, a, l, n, d, C, _]),
        T = r.useCallback(
            (e, t) => {
                let { skuId: n, applicationId: i } = t;
                (0, sw.R)({ skuId: n, applicationId: i, isStorefront: !1, analyticsLocations: j, contextKey: c });
            },
            [j, c],
        ),
        S = r.useCallback(
            (e, t, n) => {
                if (null == x) return;
                let i = sO.A.getStorefrontState(x)?.activePage ?? 0;
                (0, L.bG)(O.BVt.COLLECTIBLES_SHOP_GAME_SHOP(x, i, e, n));
            },
            [x],
        );
    if (!m) return null;
    if (p?.state === "loading")
        return (0, s.jsx)("div", { className: o()(sV.kL, sV.g4), children: (0, s.jsx)(tX.y, {}) });
    if (null == A || null == x || 0 === _.length) return null;
    let b =
            null !=
            (t = A.pages.find((e) => e.leaderboard?.backgroundImageAssetId != null)?.leaderboard
                ?.backgroundImageAssetId)
                ? (0, sL.YE)(A.applicationId, t, 1024, sM.pV)
                : null,
        k = A.logoAssetId ?? A.lightThemeLogoAssetId,
        R = null != k ? (0, sL.YE)(x, k, 128) : null;
    return (0, s.jsx)(sk.N, {
        theme: O.NJ8.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: o()(sV.kL, e),
                children: [
                    (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: sV.Tp,
                        children:
                            null != b &&
                            (0, s.jsx)("div", { className: sV.iL, style: { backgroundImage: `url(${b})` } }),
                    }),
                    (0, s.jsx)("div", {
                        className: sV.wx,
                        children: (0, s.jsxs)("div", {
                            className: sV.VW,
                            children: [
                                null != R && (0, s.jsx)("img", { className: sV.wm, src: R, alt: "" }),
                                (0, s.jsx)(ti.D, {
                                    className: sV.DD,
                                    variant: "heading-md/semibold",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.title,
                                }),
                                (0, s.jsx)(ev.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    icon: eO.U,
                                    text: ee.intl.string(ee.t.RSyoZu),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(sP.E9, {
                        newValue: N,
                        children: (0, s.jsx)(sD.J, {
                            viewProductDetails: S,
                            children: (0, s.jsx)("div", {
                                className: o()(sV.Vg, { [sV.Me]: _.length % 2 == 1 }),
                                children: _.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: o()(sV.ux, { [sV.Xv]: 0 === t && _.length % 2 == 1 }),
                                            children: (0, s.jsx)(sB.Ay, {
                                                className: sV.Nr,
                                                skuId: e,
                                                positionInSection: t,
                                                variant: sB.s6.SMALL,
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
var sF = n(50777),
    sz = n(288254),
    sY = n(319060),
    sK = n(812282),
    sW = n(922016),
    sJ = n(684519),
    sX = n(188645),
    sZ = n(240248),
    sq = n(256449),
    s$ = n(194004),
    sQ = n(148355),
    s0 = n(3026),
    s1 = n(862482),
    s2 = n(305866),
    s3 = n(847374),
    s5 = n(964486),
    s4 = n(235986),
    s9 = n(624793),
    s6 = n(636537),
    s8 = n(639245),
    s7 = n(87719),
    re = n(725807),
    rt = n(750385),
    rn = n(850992),
    ri = n(625494),
    rl = n(698279),
    rs = n(665055),
    rr = n(844749);
function ra(e) {
    (eX.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? O.liQ.GUILD_CHANNEL : O.liQ.DM_CHANNEL,
        location_section: O.JJy.STICKER_POPOUT,
    }),
        (0, s7.e)());
}
function ro(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(s4.A, {
        children: [
            (0, s.jsx)(sQ.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(s4.A, {
                direction: s4.A.Direction.VERTICAL,
                justify: s4.A.Justify.CENTER,
                className: rr.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "text-md/semibold", children: (0, s.jsx)(s0.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function rd(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [a, o, d] = (0, u.yK)(
            [rt.A],
            () => [rt.A.getStickerPack(n.pack_id), !rt.A.hasLoadedStickerPacks, rt.A.isPremiumPack(n.pack_id)],
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
    (0, sq.Sr)(n.pack_id);
    let m = (0, sq.pD)(i),
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
        eX.default.track(O.HAw.OPEN_POPOUT, {
            type: O.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nz.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, s.jsx)(sX.Y0, { className: rs.v0 })
        : (0, s.jsx)(s2.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sX.Uq, {
                  className: rs.Bm,
                  children: [
                      (0, s.jsx)(ti.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? ee.intl.format(ee.t.auckXz, { stickerPackName: a.name })
                              : ee.intl.format(ee.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: rs.pQ,
                          children: c.map((e) => (0, s.jsx)(sQ.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: rs.j0,
                              children: (0, s.jsx)(
                                  ev.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ee.intl.string(ee.t.GPy3Ar),
                                      autoFocus: !0,
                                      onClick: function () {
                                          null != a &&
                                              (d &&
                                                  (function (e) {
                                                      let { stickerPack: t, stickerPickerCategories: n } = e;
                                                      ri._.dispatchToLastSubscribed(O.jej.OPEN_EXPRESSION_PICKER, {
                                                          activeView: rl.kx.STICKER,
                                                      });
                                                      let i = n.findIndex((e) => e.id === t.id);
                                                      -1 !== i && rn.bM.setActiveCategoryIndex(i);
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
function rc(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
        [d, c] = r.useState(null),
        [m, h] = r.useState(!1),
        g = Y.default.getCurrentUser(),
        p = t3.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([nX.A], () => nX.A.getGuild(n.guild_id)),
        f = null != x,
        [I, E] = r.useState(!1),
        [v, C] = r.useState(null),
        _ = r.useMemo(
            () => ({
                page: null != i.guild_id ? O.liQ.GUILD_CHANNEL : O.liQ.DM_CHANNEL,
                section: O.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, nz.dI)(i) }),
        N = { stickerSourceGuild: x, refreshPositionKey: a },
        y = r.useRef(N);
    (r.useEffect(() => {
        y.current = N;
    }),
        r.useEffect(() => {
            let { stickerSourceGuild: e } = y.current;
            !(async function () {
                if (null == e || e.features.has(O.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    c(
                        await ((t = n.id),
                        s6.Bo.get({ url: O.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ix.jE)(e.body) : null))
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
                  ? ee.intl.string(ee.t.fZ0DiG)
                  : ee.intl.string(ee.t["1f6D9m"])
              : S
                ? ee.intl.string(ee.t.yHmoR9)
                : ee.intl.string(ee.t.vZaScH))
        : f
          ? ((t = T ? ee.intl.string(ee.t.jNphpt) : ee.intl.string(ee.t.lyD5ZW)),
            (b = !0),
            (k = "Custom Sticker Popout (Upsell)"))
          : S
            ? ((t = ee.intl.string(ee.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
            : ((t = ee.intl.format(ee.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (ra(i), l());
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let R = !b && !f && S && p;
    return (r.useEffect(() => {
        let { refreshPositionKey: e } = y.current;
        e();
    }, [m, d]),
    (0, s5.Ay)(() => {
        eX.default.track(O.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, s.jsx)(s2.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sX.Uq, {
                  className: rr.Bm,
                  children: [
                      (function () {
                          async function e() {
                              if (null == d || f) return;
                              l();
                              let e = d.id;
                              try {
                                  (await iA.A.joinGuild(e), iA.A.transitionToGuildSync(e));
                              } catch {}
                          }
                          return (0, s.jsxs)("div", {
                              className: rr.gH,
                              children: [
                                  (0, s.jsx)(ro, { description: t, sticker: n }),
                                  b &&
                                      (0, s.jsx)(re.A, {
                                          className: rr.lI,
                                          subscriptionTier: nM.pe.TIER_2,
                                          size: s1.$n.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: ee.intl.string(ee.t["gl/XHJ"]) },
                                          onSubscribeModalClose: (t) => (t ? e() : l()),
                                          postSuccessGuild: f || null == d ? void 0 : d,
                                          premiumModalAnalyticsLocation: _,
                                      }),
                                  R &&
                                      (0, s.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: rr.lI,
                                          children: (0, s.jsx)(ev.$, {
                                              variant: "primary",
                                              size: "sm",
                                              text: ee.intl.string(ee.t.riu2R5),
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
                                  t = null != d ? s9.GO.createFromDiscoverableGuild(d) : s9.GO.createFromGuildRecord(x);
                              return (0, s.jsxs)("div", {
                                  className: rr.tl,
                                  children: [
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: rr.YW,
                                          children: f ? ee.intl.string(ee.t.kx6pEG) : ee.intl.string(ee.t.pDE7Gb),
                                      }),
                                      (0, s.jsx)(s8.G7, {
                                          expressionSourceGuild: t,
                                          hasJoinedExpressionSourceGuild: f,
                                          isDisplayingJoinGuildButtonInPopout: R,
                                          closePopout: l,
                                      }),
                                      !f &&
                                          (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(eB.D, {
                                                      onClick: function () {
                                                          (a(), E(!I));
                                                      },
                                                      className: rr.wK,
                                                      children: (0, s.jsxs)(s4.A, {
                                                          children: [
                                                              (0, s.jsx)(A.E, {
                                                                  className: rr.__invalid_showMoreEmojisLabel,
                                                                  variant: "text-xs/normal",
                                                                  color: "none",
                                                                  children: ee.intl.string(ee.t.vtH5hn),
                                                              }),
                                                              (0, s.jsx)(s3.a, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: o()(rr.ZB, { [rr.cP]: !I }),
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  I &&
                                                      (0, s.jsx)(s4.A, {
                                                          wrap: s4.A.Wrap.WRAP,
                                                          align: s4.A.Align.START,
                                                          justify: s4.A.Justify.START,
                                                          className: rr.LX,
                                                          children: e.map((e) =>
                                                              (0, s.jsx)(
                                                                  tW.m,
                                                                  {
                                                                      text: e.name,
                                                                      ...sX.Uk,
                                                                      children: (0, s.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: o()(rr.Th, {
                                                                                  [rs.vT]: null != v && v !== e.id,
                                                                              }),
                                                                              onMouseEnter: () => {
                                                                                  C(e.id);
                                                                              },
                                                                              onMouseLeave: () => {
                                                                                  C(null);
                                                                              },
                                                                              children: (0, s.jsx)(sQ.A, {
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
        : (0, s.jsx)(sX.Y0, { className: rs.v0 });
}
function ru(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(s2.l, {
        "aria-label": i.name,
        children: (0, s.jsx)(sX.Uq, {
            className: rs.Bm,
            children: (0, s.jsx)(ro, {
                sticker: i,
                description: ee.intl.format(ee.t.hGWuxU, {
                    openPremiumSettings: () => {
                        (n(), ra(t));
                    },
                }),
            }),
        }),
    });
}
let rm = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, sq.Zq)(t, !0);
    return null != r && (0, lX.FD)(r)
        ? (0, s.jsx)(rd, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lX.Xw)(r)
          ? (0, s.jsx)(rc, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? (0, s.jsx)(ru, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(sX.Y0, {});
};
var rh = n(751686);
let rg = (0, sZ.xI)(sY.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    rp = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, sq.Zq)(t, i),
            { analyticsLocations: m } = (0, I.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: rh.Zl,
                children: [(0, s.jsx)(sK.s, { size: "xs", color: "currentColor", className: rh.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: rh.be,
                children: (0, s.jsx)(sW.Y, {
                    align: "center",
                    animation: sW.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(rm, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tW.m, {
                            ...sX.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, sJ.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nz.Ay.trackWithMetadata(O.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nM.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, s$.Tw)(e.format_type),
                                        is_custom: (0, s$.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eB.D, {
                                innerRef: l,
                                className: rh.q7,
                                onClick: (e) => {
                                    (o(!a), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(sQ.A, { isInteracting: i, size: rg, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var rA = n(406704),
    rx = n(531142),
    rf = n(140735),
    rI = n(442433),
    rE = n(143413),
    rv = n(321045),
    rC = n(456874),
    r_ = n(707539),
    rj = n(80682),
    rN = n(521981),
    ry = n(448368),
    rT = n(943220),
    rS = n(838541);
function rb(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [F.A],
            () => ({ isBlocked: F.A.isBlockedForMessage(t), isIgnored: F.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, rj.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, rN.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        d = (0, sz.IL)(n);
    return (0, s.jsxs)("div", {
        className: sl.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: sl.FJ }),
            (0, s.jsx)(rT.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: sl.Au,
                children: d
                    ? (0, s.jsx)("span", { className: sl.dp, children: ee.intl.string(ee.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, ry.o)(e, t, n, i, sl.tP, {
                              trailingIconClass: sl._v,
                              leadingIconClass: sl.a5,
                              iconSize: rS.eJ,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [a, r ?? (0, s.jsx)("span", { className: sl.dp, children: l }), o],
                          });
                      })(t, o, i, l),
            }),
        ],
    });
}
var rk = n(747926),
    rR = n(650583),
    rL = n(77462);
function rM(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([H.A], () => H.A.getChannel(im.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(rP, { channel: i, compact: n, isSystemMessage: (0, rE.A)(t) });
}
function rP(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, ic.Ay)(a),
        h = (0, u.bG)([rC.A], () => rC.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([rC.A], () => rC.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([rC.A], () => rC.A.getCount(t.id))),
            (r = (0, r_.JO)(t)),
            t.threadMetadata?.archived
                ? ee.intl.string(ee.t.ZTo4HS)
                : null == l || 0 === l
                  ? ee.intl.string(ee.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: ee.intl.string(ee.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: rL.vE, children: (0, r_.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(rb, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: rL.vE, children: (0, r_.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(rL.GI, { [rL.E]: !d, [rL.E_]: c }) }),
            (0, s.jsx)(eB.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, rk.JA)(a, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === rR.dh.SPACE || e.key === rR.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, rk.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, rI.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("368358"),
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
                "aria-roledescription": ee.intl.string(ee.t["8ipxiY"]),
                className: o()(rL.kL, { [rL.og]: c }),
                children: (0, s.jsxs)(rx.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rL.kq,
                            children: [
                                (0, s.jsx)(rf.A, { children: ee.intl.string(ee.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: rL.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: rL.lO,
                                    "aria-hidden": !p,
                                    children: (0, rv.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: rL.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var rD = n(168543),
    rO = n(321191),
    rU = n(215530),
    rG = n(331322),
    rw = n(562153),
    rB = n(183555),
    rV = n(999291),
    rH = n(391210),
    rF = n(249790),
    rz = n(254828),
    rY = n(783123),
    rK = n(213994),
    rW = n(753504);
function rJ(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: r } = e,
        a = (0, u.bG)([Y.default], () => Y.default.getUser(t)),
        o = (0, u.bG)([F.A], () => F.A.isBlocked(t)),
        d = rw.Ay.useName(n, i, a),
        c = (0, rV.Ay)(t, n),
        [m, h] = (0, rH.A)(),
        { analyticsLocations: g } = (0, I.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        p = (0, rB.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == a
        ? null
        : (0, s.jsx)(I.f5, {
              value: g,
              children: (0, s.jsx)(rB.of, {
                  value: p,
                  fetchStartedAt: c?.fetchStartedAt,
                  fetchEndedAt: c?.fetchEndedAt,
                  isLoaded: c?.isLoaded === !0 && m,
                  children: (0, s.jsx)(rK.A, {
                      user: a,
                      displayProfile: null,
                      size: "sm",
                      className: rW.k,
                      containerRef: h,
                      headingText: ee.intl.formatToPlainString(ee.t["8yRya1"], { name: d }),
                      children: (0, s.jsxs)(rG.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(rG.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rF.A, { user: a, guildId: n }),
                                      (0, s.jsx)(ti.D, {
                                          variant: "heading-lg/bold",
                                          children: ee.intl.string(ee.t.b33pLD),
                                      }),
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          children: ee.intl.format(o ? ee.t["8F+WNz"] : ee.t["/cZp5s"], {
                                              username: d,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(rG.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rY.A, { isBlocked: o, onClick: r }),
                                      (0, s.jsx)(rz.A, { userId: t, onClick: r }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var rX = n(273147),
    rZ = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function rq(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    nz.Ay.trackWithMetadata(O.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function r$(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [a, o] = (0, rU.A)(t),
        d = r.useRef(!1),
        c = (0, u.bG)(
            [Y.default, rO.A],
            () => {
                if (rO.A.isFetchingProfile(t, n ?? void 0) || null != Y.default.getUser(t)) return null;
                let e = rO.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? rZ.NO_USER_RECORD : null;
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
                rq({
                    userId: t,
                    reason: c,
                    guildId: n,
                    channelId: i,
                    errorStatus: rO.A.getUserProfile(t)?.fetchError?.status,
                }));
        }, [c, t, n, i]));
    let h = r.useCallback((e) => {
            null != e && d.current && ((d.current = !1), e.focus());
        }, []),
        g = r.useCallback(() => {
            ((d.current = !0), o());
        }, [o]);
    return a
        ? (0, s.jsx)(rJ, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(rX.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class rQ extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (nd.A.captureException(e),
            rq({
                userId: this.props.userId,
                reason: rZ.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function r0(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, rD.c)("UserProfileEmbed")
        ? (0, s.jsx)(rQ, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(r$, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var r1 = n(383233),
    r2 = n(834942),
    r3 = n(644447),
    r5 = n(659674),
    r4 = n(998218),
    r9 = n(5095),
    r6 = n(294520),
    r8 = n(320095),
    r7 = n(863439),
    ae = n(707985),
    at = n(730852),
    an = n(265422),
    ai = n(537547);
function al(e) {
    let { guild: t, channel: n, message: i } = e,
        l = z.A.getGuildId(),
        a = ep.Ay.getChannelId(l),
        o = r.useCallback(() => {
            (eX.default.track(O.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, an.i)(t.id, n.id),
                at.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(i6.A.Channel, { channel: n });
    return (0, s.jsx)(i6.A, {
        children: (0, s.jsxs)(i6.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: lg.iH,
                    children: [
                        (0, s.jsx)(i6.A.Icon, { guild: t }),
                        (0, s.jsx)(i6.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: lg.FA,
                                children: [
                                    ee.intl.format(ee.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: lg.E3,
                                        children: (0, s.jsx)(ai.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: lg.UD,
                    children: (0, s.jsx)(ev.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? ee.intl.string(ee.t["7vb2cc"]) : ee.intl.string(ee.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function as(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = H.A.getChannel(l),
        a = nX.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && to.A.can(O.xBc.VIEW_CHANNEL, r) && to.A.can(O.xBc.CONNECT, r)
        ? (0, s.jsx)(al, { guild: a, channel: r, message: n })
        : null;
}
var ar = n(789645),
    aa = n(298236),
    ao = n(953756),
    ad = n(564107),
    ac = n(216763),
    au = n(359886);
function am(e) {
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
        [m, h] = (0, ao.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(ad.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(aa.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(ao.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(ao.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(ac.O0, au.k, au.z, { [ac.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eB.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: ac.PP,
                                                  onClick: c,
                                                  "aria-label": ee.intl.string(ee.t.GT3fNz),
                                                  children: (0, s.jsx)(ar.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, lE.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ah = n(451988),
    ag = n(261958),
    ap = n(212245),
    aA = n(775602),
    ax = n(62583),
    af = n(956549),
    aI = n(550151),
    aE = n(392054),
    av = n(853390),
    aC = n(290863),
    a_ = n(811024),
    aj = n(818023),
    aN = n(555375);
let ay = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, lG.j)(),
        s = (0, u.bG)([aA.Ay], () => aA.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new ah.IX();
            return (
                e.start(a ? 15 * nv.A.Millis.SECOND : nv.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nv.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, av.fU)(n)
    );
});
ay.displayName = "ActivityRuntimeCounter";
let aT = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, ap.p)(),
        m = (0, u.bG)([H.A], () => H.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([V.default], () => V.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: E,
        } = (0, u.cf)(
            [eA.Ay],
            () => ({
                embeddedActivity: eA.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: eA.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eA.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        v = p?.userIds,
        C = (0, u.yK)(
            [Y.default],
            () =>
                Array.from(v ?? [])
                    .map((e) => Y.default.getUser(e))
                    .filter(iF.Vq),
            [v],
        ),
        _ = (0, u.bG)(
            [aC.A],
            () => {
                if (null == v) return null;
                for (let e of v) {
                    let t = aC.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, v],
        ),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new i8.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = aj.Gl), e);
        }, [n]),
        y = (0, aI.vG)({ userId: g, channelId: i, application: N }),
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
                                text: s ? ee.intl.string(ee.t.RscU7I) : ee.intl.string(ee.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, a_.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: ee.intl.string(ee.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : ee.intl.string(ee.t.f41E1g) };
                        if (null != n && n !== aI.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case aI.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = ee.intl.string(ee.t.hHGrWz);
                                    break;
                                case aI.Gy.ACTIVITY_AGE_GATED:
                                    e = ee.intl.string(ee.t["4WuFRE"]);
                                    break;
                                case aI.Gy.CHANNEL_CONTENT_GATED:
                                    e = ee.intl.string(ee.t.pKLV22);
                                    break;
                                case aI.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = ee.intl.string(ee.t.uGDCcw);
                                    break;
                                case aI.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = ee.intl.string(ee.t.UXoQTp);
                                    break;
                                case aI.Gy.CHANNEL_FULL:
                                    e = ee.intl.string(ee.t.rZfiNq);
                                    break;
                                case aI.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = ee.intl.string(ee.t.w5SAps);
                                    break;
                                case aI.Gy.NO_CHANNEL:
                                case aI.Gy.NO_GUILD:
                                case aI.Gy.NO_USER:
                                case aI.Gy.IS_AFK_CHANNEL:
                                    e = ee.intl.string(ee.t.Etp6uI);
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
        (eX.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: T,
            cta: "Play",
        }),
            T
                ? await (0, af.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                      commandOrigin: aE.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, ax.A)({
                      applicationId: p.applicationId,
                      activityChannelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                  }));
    }
    let L = S.disabled ? ee.intl.string(ee.t.JBnc7N) : ee.intl.string(ee.t.cX9uLZ),
        M = (0, er.F)(N, () => {
            eX.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        P = K.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let D = C.length,
        U = _?.timestamps?.start ?? _?.created_at,
        G = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case O.$pd.STREAMING:
                    return { text: ee.intl.formatToPlainString(ee.t.tyCw2q, { count: n }), Icon: Z.o };
                case O.$pd.LISTENING:
                    return { text: ee.intl.formatToPlainString(ee.t["2l8yka"], { count: n }), Icon: q.T };
                default:
                    return { text: ee.intl.formatToPlainString(ee.t.yJj035, { count: n }), Icon: $.GameControllerIcon };
            }
        })({ activity: _, activityUsersCount: D }),
        w = [
            {
                label: S.text,
                trackingArea: ei.kY.PLAY,
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: k,
            },
        ];
    return (0, s.jsx)(X.h, {
        header: ee.intl.string(ee.t.pkq6Vq),
        title: n.name,
        iconSrc: P,
        info: (0, s.jsx)("div", {
            className: aN.QR,
            children: T
                ? (0, s.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: L })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: aN.oL,
                                  children: [
                                      null != U &&
                                          (0, s.jsxs)("div", {
                                              className: aN.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: aN.y9,
                                                      children: (0, s.jsx)(G.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(ay, { start: U }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(aN.DT, aN.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(ag.u, { size: "xxs", color: "currentColor" }),
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
                          D > 0 && (0, s.jsx)(en, { activityUsers: C, guildId: l, activityText: G.text }),
                      ],
                  }),
        }),
        actions: w,
        onClickContent: M,
        trackingConfig: {
            id: n.id,
            linkType: ea.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: T,
        },
    });
});
var aS = n(164664),
    ab = n(439401),
    ak = n(657044),
    aR = n(863574),
    aL = n(707606),
    aM = n(456412),
    aP = n(242874),
    aD = n(499454),
    aO = n(180522),
    aU = n(928550),
    aG = n(30793),
    aw = n(189081);
function aB(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, ld.A)(i),
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
var aV = n(738533),
    aH = n(45938),
    aF = n(615396),
    az = n(427262),
    aY = n(561028),
    aK = n(820284),
    aW = n(674378),
    aJ = n(598429),
    aX = n(979604);
function aZ(e) {
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
        A = (0, u.bG)([aw.A], () => aw.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        I = (0, u.bG)([eW.A], () => null != f && !eW.A.didFetchingSkuFail(f));
    return null != A && (0, aW.XZ)(A)
        ? (0, s.jsx)(aX.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : I
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(aJ.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function aq(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return ee.intl.string(ee.t.RWouSQ);
    if (e.premium && !n) return ee.intl.string(ee.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t5.$g)(i.amount, i.currency);
        else return ee.intl.string(ee.t.QQsaCc);
    return ee.intl.string(ee.t.RWouSQ);
}
var a$ = n(176140),
    aQ =
        (((l = aQ || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function a0(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(a$.nM, t),
        children: [
            (0, s.jsx)(ak._, { size: "md", color: "currentColor", className: a$.Kk }),
            ee.intl.string(ee.t["7eicAO"]),
        ],
    });
}
function a1(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(a$.nM, n),
        children: [(0, s.jsx)(tC.t, { size: "md", color: "currentColor", className: a$.Kk }), aq(t)],
    });
}
function a2(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(a$.EQ, n), children: t.getDisplaySalePercentage() });
}
function a3(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(a$.I8, n), children: aq(t, !1) });
}
function a5(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: aq(t) });
}
function a4(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(a$.nM, n),
        children: [(0, s.jsx)(a2, { sku: t }), (0, s.jsx)(a3, { sku: t }), (0, s.jsx)(a5, { sku: t })],
    });
}
function a9(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: ee.intl.string(ee.t.QQsaCc) });
}
class a6 extends r.PureComponent {
    static Types = aQ;
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
                return (0, s.jsx)(a9, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(a0, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(a1, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(a4, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(a5, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(a9, { className: t });
            case 3:
                return (0, s.jsx)(a1, { sku: n, className: o()(a$.OB, t) });
            case 2:
                return (0, s.jsx)(a4, { sku: n, className: o()(a$.dk, t) });
            default:
                return (0, s.jsx)(a5, { className: o()(a$.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(a9, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: a$.nM,
                            children: [(0, s.jsx)(a5, { sku: i }), (0, s.jsx)(a2, { sku: i })],
                        }),
                        (0, s.jsx)(a3, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(a5, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(a$.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, a$.Pl);
            case 3:
                return this.renderGeneric(e, a$.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, a$.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var a8 = n(301568);
let a7 = {
    [O.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ld.A)(r),
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
        getLabel: () => ee.intl.string(ee.t["0/xHFO"]),
    },
    [O.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ld.A)(r),
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
        getLabel: () => ee.intl.string(ee.t.E4u4n5),
    },
    [O.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, ld.A)(r),
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
        getLabel: () => ee.intl.string(ee.t.tcawo3),
    },
};
function oe(e) {
    let { operatingSystem: t, className: n } = e,
        i = a7[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tW.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function ot(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(a8.I, n),
        children: t.map((e) => (0, s.jsx)(oe, { operatingSystem: e, className: o()(a8.A, i) }, e)),
    });
}
var on = n(198985);
let oi = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(on.T, t),
        children: (0, s.jsx)("span", { className: on.Q, children: ee.intl.string(ee.t["14lP0W"]) }),
    });
};
var ol = n(992856);
let os = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(ol.T, t),
        children: (0, s.jsx)("span", { className: ol.Q, children: ee.intl.string(ee.t["8IfYqa"]) }),
    });
};
var or = n(615300),
    oa = n(868285),
    oo = n(358618),
    od = n(983851),
    oc = n(133296),
    ou = n(607470),
    om = n(856328);
class oh extends r.Component {
    _animatedValue = new or.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), or.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        or.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(or.A.img, {
            className: o()({ [om.YC]: i }, t),
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
            ? (0, s.jsx)(or.A.div, { className: o()(om.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(or.A.div, {
                  className: o()(l ? om.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tX.y, {
                                className: om.u1,
                                itemClassName: om.$N,
                                type: tX.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class og extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new ah.Ep();
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
            m = a ? oo._ : od.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                i4.Fr
                    ? null
                    : (0, s.jsx)(ou.A, {
                          className: o()(om.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(oa.F, {
                    children: l && e ? null : (0, s.jsx)(oh, { className: o()(om.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eB.D, {
                    className: o()(om.b4, { [om.HY]: l && e, [om.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: om.i2 }) : null,
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
            ? (0, s.jsx)(oh, { className: o()(om.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(oh, { className: o()(om.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(oh, { className: o()(om.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(oc.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: om.mZ,
                  disable: !e,
                  children: (0, s.jsx)(oa.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(om.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var op = n(366523),
    oA = n(622413),
    ox = n(435919);
class of extends r.PureComponent {
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
                  className: ox.ED,
                  children: [
                      (0, s.jsx)(a6, {
                          type: a6.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? ox.ae : ox.Ek,
                      }),
                      (0, s.jsx)(ot, { systems: [O.uje.WINDOWS], className: ox.iD }),
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
        return (0, sM.bF)(l)
            ? (0, s.jsx)(op.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: ox.A$,
                  backgroundImageClassName: ox.iZ,
                  foregroundImageClassName: ox.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(og, {
                          className: o()(ox.H1, { [ox.ZC]: a }),
                          video: null != d.previewVideo ? (0, sL.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, sL.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ox.ZI,
                          splashPlaceholderClassName: ox.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(os, { className: o()(ox.LJ, { [ox.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(oi, { className: o()(ox.LJ, { [ox.V9]: e }) })
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
            d = o ? aR.ug : oA.A;
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
var oI = n(587895),
    oE = n(976150);
class ov extends r.Component {
    static defaultProps = { renderFallback: O.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : O.JJy.APPLICATION_EMBED, object: O.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eH.QB)(t);
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
            className: oE.h,
            children: (0, s.jsx)(ev.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: ee.intl.string(ee.t["W+NB90"]),
                onClick: () => {
                    (0, L.pX)(O.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > aR.Tm;
        return (0, s.jsx)(of, {
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
        if (null != r) return (0, s.jsx)("div", { className: oE.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(O.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: oE.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(aZ, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: oE.h,
                          source: O.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(a6, { type: a6.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > aR.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(aR.Wb, { isHorizontal: r })
            : e.productLine === O.EZt.PREMIUM
              ? (0, s.jsx)(aK.A, {
                    section: O.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(aY.N_, {
                        onClick: this.handleLinkClick,
                        to: O.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(aK.A, { section: O.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let oC = [eW.A, aw.A, eJ.A];
function o_(e) {
    let { skuId: t } = e,
        n = eW.A.get(t),
        i = null != n ? oI.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eW.A.didFetchingSkuFail(t),
        inLibrary: null != n && aw.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eJ.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? aw.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let oj = (0, aM.A)((0, aL.A)(ov)),
    oN = u.Ay.connectStores(oC, o_)(oj),
    oy = (0, aL.A)(u.Ay.connectStores(oC, o_)(ov));
var oT = n(866022);
function oS(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eB.D, {
        className: oT.kP,
        onClick: t,
        children: [
            (0, s.jsx)(ak._, { size: "md", color: "currentColor", className: oT.dy }),
            (0, s.jsx)("div", {
                children: n.isHidden() ? ee.intl.string(ee.t.Wi99Ro) : ee.intl.string(ee.t["+tXad7"]),
            }),
        ],
    });
}
class ob extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= aR.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === O.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, eS.openUserSettings)(eT.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? ee.intl.string(ee.t.mT9B49) : ee.intl.string(ee.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(ev.$, {
                  variant: "primary",
                  size: "sm",
                  text: ee.intl.string(ee.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(ev.$, { variant: "primary", size: "sm", text: ee.intl.string(ee.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? ee.intl.string(ee.t.QXgO5w)
            : this.props.isSelfGift
              ? ee.intl.string(ee.t.eEM3dq)
              : ee.intl.string(ee.t.tB8S6u);
    render() {
        return (0, s.jsx)(aR.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class ok extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: O.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        (e.preventDefault(),
            null != t && t.isHidden()
                ? (0, L.pX)(O.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, L.pX)(O.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, eS.openUserSettings)(eT.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eX.default.track(O.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: O.ZSU.BUTTON_CTA },
            }));
        let r = l !== O.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, aD.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eX.default.track(O.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            aV.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, sM.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, sw.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, eS.openUserSettings)(eT.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(O.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(s4.A, {
            justify: s4.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(s4.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(oS, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(s4.A, {
                    align: s4.A.Align.END,
                    justify: s4.A.Justify.END,
                    className: oT.yu,
                    direction: s4.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: ee.intl.format(ee.t.nZBvUR, { hours: e.expiresAt.diff(l8()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? ee.t["4iHwKT"] : ee.t.YeLq88;
        return ee.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ev.$, {
                    variant: "primary",
                    size: "sm",
                    text: ee.intl.string(ee.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, t3.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? ee.intl.string(ee.t.BTihou)
                : null != e.giftStyle
                  ? ee.intl.string(ee.t.TiZFqX)
                  : ee.intl.string(ee.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t7.hU)(e) ? oT.UQ : void 0,
            children: (0, s.jsx)(ev.$, {
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
        return e === O.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? ee.intl.formatToPlainString(ee.t.t1SOId, { recipientDisplayName: az.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? ee.intl.string(ee.t["2PJ1NP"])
                    : ee.intl.string(ee.t.hrnGng)
                : n
                  ? ee.intl.string(ee.t.QLEMld)
                  : ee.intl.string(ee.t.W4DBcy);
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
        if (null == i) return ee.intl.string(ee.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, sM.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? ee.intl.formatToPlainString(ee.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t7.hU)(e) || (0, sM.bF)(i)
                ? ee.intl.string(ee.t.mVC3Cv)
                : ee.intl.format(ee.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return ee.intl.format(ee.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return ee.intl.string(ee.t.ARWFQX);
        if (!r.verified) return ee.intl.format(ee.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? ee.intl.string(ee.t["lQI+cB"])
                : ee.intl.formatToPlainString(ee.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return ee.intl.string(ee.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? ee.intl.format(ee.t.l3VxgG, { username: az.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : ee.intl.format(ee.t["9cYrw5"], {
                          username: az.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? ee.intl.formatToPlainString(ee.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : ee.intl.formatToPlainString(ee.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return ee.intl.string(ee.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nM.WT.MONTH ? ee.t["/RDIEA"] : ee.t["3CX6Ev"];
                return ee.intl.format(e, { username: az.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nM.WT.MONTH ? ee.t["2O4lo5"] : ee.t["+XjmsR"];
            return ee.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l
            ? ee.intl.format(ee.t["3HsdQ/"], { username: az.Ay.getUserTag(l) })
            : ee.intl.string(ee.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nM.Wx.includes(e.giftStyle),
            i = o()(oT.gB, { [oT.El]: n, [oT.by]: t >= aR.Tm }),
            l = o()({ [oT.gc]: n, [oT.Ei]: n && t >= aR.Tm, [oT.ww]: !n, [oT.wy]: !n && t >= aR.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(aB, { className: oT.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(aO.A, {
                        defaultAnimationState: e.redeemed ? aP.oA.LOOP : aP.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(ev.$, {
            variant: "primary",
            size: "sm",
            text: ee.intl.string(ee.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, sM.bF)(n);
        return (0, s.jsx)(oy, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: O.JJy.GIFT_CODE_EMBED,
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
            return (0, s.jsx)(oy, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: O.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => ee.intl.string(ee.t.X4p5uH),
                renderCustomTagline: () => ee.intl.string(ee.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(ob, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(aR.Wb, { isHorizontal: i >= aR.Tm });
        return (0, t7.hU)(e)
            ? (0, s.jsx)("div", { className: oT.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let oR = (0, aM.A)((0, aL.A)(ok)),
    oL = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([aG.A], () => {
                let e = aG.A.getError(t);
                return { giftCode: aG.A.get(t), resolved: aG.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([Y.default], () => (null != i && null != i.userId ? Y.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eW.A], () => (null != i ? eW.A.get(i.skuId) : null)),
            d = (0, u.bG)([aw.A], () =>
                null != o && i?.entitlementBranches != null ? aH.YI(i.entitlementBranches, o, aw.A) : null,
            ),
            c = (0, sR.h)(o?.applicationId),
            m = null != o && (0, sM.bF)(o) && i?.redeemed === !0,
            [h] = (0, aU.L_)(m ? c?.id : null),
            g = (0, aF.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([V.default], () => (null != i ? V.default.getId() === i.userId : V.default.getId() === n.id));
        return (0, s.jsx)(oR, {
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
var oM = n(376728),
    oP = n(107123),
    oD = n(698441),
    oO = n(427080),
    oU = n(346542),
    oG = n(800772),
    ow = n(95701),
    oB = n(299091),
    oV = n(149790);
let oH = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oF(e) {
    let { guildId: t, location: n } = e;
    return oH.getCurrentConfig({ guildId: t, location: n });
}
var oz = n(713654);
function oY() {
    return (0, s.jsxs)(i6.A, {
        children: [
            (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t["N/g9Z4"]) }),
            (0, s.jsx)(i6.A.Body, { resolving: !0 }),
        ],
    });
}
var oK = n(172799),
    oW = n(624394);
function oJ(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: oW.MY,
                        children: [
                            (0, s.jsx)("i", { className: oW.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oW.U9,
                                color: i,
                                children: ee.intl.format(ee.t["LC+S+m"], { membersOnline: n }),
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
                        className: oW.MY,
                        children: [
                            (0, s.jsx)("i", { className: oW.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oW.U9,
                                color: i,
                                children: ee.intl.format(ee.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: oW.rc, children: l })
    );
}
function oX(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, ic.Ay)(t);
    if (null != t && null != n) {
        let e = (0, oz.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(oW.Ix, { [oW.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: oW.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(s0.A, {
                    children: (0, s.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: ee.intl.format(ee.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(oW.Ix, { [oW.v6]: i }),
              children: (0, s.jsx)(s0.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: ee.intl.format(ee.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oZ(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    eP()(l === oK.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([H.A], () => H.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e8.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(oq, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oq(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    eP()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eX.default.track(O.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([nX.A], () => (null != i.guild ? nX.A.getGuild(i.guild.id) : null), [i]),
        A = (0, u.bG)(
            [eA.Ay],
            () => i?.channel != null && eA.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        x = (0, u.bG)([eA.Ay], () =>
            (i.channel?.id != null ? eA.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        E = (0, u.bG)([to.A], () => null != d && to.A.can(O.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED),
        C = (0, u.yK)(
            [eA.Ay],
            () =>
                null != d
                    ? eA.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([Y.default], () => C.map((e) => Y.default.getUser(e)).filter((e) => null != e), [C]),
        j = r.useCallback(() => {
            ((0, oM.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lA._U)(i.code, l.id),
                },
                v,
            ),
                oM.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                }));
        }, [i, l, v, a]),
        N = i.state === O.elq.ACCEPTING,
        y = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(oY, {});
        p = (0, oV.DY)(i.guild);
    }
    t = y
        ? A
            ? ee.intl.string(ee.t.DPfdsq)
            : x
              ? ee.intl.string(ee.t.sqe0hj)
              : ee.intl.string(ee.t.RscU7I)
        : ee.intl.string(ee.t["2BP08E"]);
    let T = (y && !E) || (y && A);
    return (E || (n = ee.intl.string(ee.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(I.f5, {
              value: v,
              children: (0, s.jsx)(o$, {
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
function o$(e) {
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
        E = K.Ay.getApplicationIconURL({ id: t.id, icon: I, bot: f }),
        v = (0, er.F)(t),
        C = (0, es.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? ei.kY.PLAY : ei.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, s.jsx)(X.h, {
        header: t.name,
        title: ee.intl.string(ee.t["7vb6nw"]),
        iconSrc: E,
        ...C,
        onClickBanner: v,
        info: (0, s.jsxs)("div", {
            className: oW.QR,
            children: [
                (0, s.jsx)(oX, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(en, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: ee.intl.formatToPlainString(ee.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(oJ, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: ea.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var oQ = n(4274);
function o0(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([V.default], () => V.default.getId()) === t.id
                ? ee.intl.string(ee.t.C89OLE)
                : ee.intl.string(ee.t.YVub5y),
        l = (0, oQ.g)(n?.code);
    return (0, s.jsxs)(i6.A, {
        children: [
            (0, s.jsx)(i6.A.Header, { text: i }),
            (0, s.jsxs)(i6.A.Body, {
                children: [
                    (0, s.jsx)(i6.A.Icon, { expired: !0 }),
                    (0, s.jsx)(i6.A.Info, {
                        expired: !0,
                        title: l?.title ?? ee.intl.string(ee.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var o1 = n(308528),
    o2 = n(889227);
function o3(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([V.default], () => V.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === O.elq.ACCEPTING,
        { analyticsLocations: d } = (0, I.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([F.A], () => null != t.inviter && F.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != H.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), o1.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, oM.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lA._U)(t.code, n.id),
                    },
                    d,
                ));
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, oM.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lA._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            oM.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = ee.intl.string(ee.t.ib7Ng1),
        A = "active";
    c
        ? ((p = ee.intl.string(ee.t.xhxnPn)), (A = "secondary"))
        : a && ((p = ee.intl.string(ee.t.ib7Ng1)), (A = "secondary"));
    let x = a ? ee.intl.string(ee.t.eQyu1F) : ee.intl.string(ee.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        v = null != t.inviter ? az.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(i6.A, {
        children: [
            (0, s.jsx)(i6.A.Header, { text: x }),
            (0, s.jsxs)(i6.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lg.iH,
                        children: [
                            (0, s.jsx)(i6.A.Icon, { user: new o2.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(i6.A.Info, { title: E, onClick: c ? g : void 0, children: v }),
                        ],
                    }),
                    (0, s.jsx)(ev.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var o5 = n(342952);
function o4(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === O.elq.ACCEPTING,
        c = (0, u.bG)([H.A], () => (null != t.channel ? H.A.getChannel(t.channel.id) : null), [t]);
    eP()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = null != c,
        g = r.useRef(null),
        p = r.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, oM.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lA._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, a]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, ow.OY)(e.channel),
                    i = (0, ic.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = Y.default.getUser(t);
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, ic.Bi)(t),
                    i = Y.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, c ?? null);
    if (null == x) return (0, s.jsx)(oY, {});
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
                                    let t = F.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof o2.A ? e : Y.default.getUser(e.id);
                                    if (null != n) {
                                        let e = az.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? ee.intl.string(ee.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? ee.intl.formatToPlainString(ee.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? ee.intl.formatToPlainString(ee.t["/KSOKY"], {
                                      first: i[0],
                                      second: i[1],
                                      third: i[2],
                                  })
                                : ee.intl.formatToPlainString(ee.t.m5uYso, { first: i[0], second: i[1] }),
                a = ee.intl.string(ee.t.gVDdRn),
                o = "active";
            return (
                n && ((a = ee.intl.string(ee.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: r,
                    headerText: t ? ee.intl.string(ee.t.Fyamu8) : ee.intl.string(ee.t["2tr5Qz"]),
                    buttonText: a,
                    buttonVariant: o,
                }
            );
        })(x, o, h),
        { channel: j, recipients: N } = x,
        y = N.map((e) =>
            e instanceof o2.A
                ? e
                : (Y.default.getUser(e.id) ?? new o2.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        T = null != j.icon,
        S = ee.intl.format(ee.t.zRl6XR, { count: N.length });
    return (0, s.jsxs)(i6.A, {
        className: lg.TV,
        children: [
            (0, s.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: lg.JO,
                lineClamp: 1,
                children: v,
            }),
            (0, s.jsxs)(i6.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${lg.iH} ${lg.mx}`,
                        children: [
                            T &&
                                (0, s.jsx)(i6.A.Icon, {
                                    channel: j,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tj._3.SIZE_48,
                                }),
                            (0, s.jsx)(i6.A.Info, {
                                title: (0, s.jsx)(s0.A, { children: E }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: lg.er,
                                    children:
                                        y.length > 0
                                            ? (0, s.jsx)(eB.D, {
                                                  className: lg.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: S,
                                              })
                                            : S,
                                }),
                            }),
                            y.length > 0 &&
                                (0, s.jsx)(o5.A, {
                                    ref: g,
                                    className: lg.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tj._3.SIZE_32,
                                    channelId: j.id,
                                    popoutClassName: lg.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(ev.$, { onClick: p, loading: d, disabled: h, variant: _, text: C, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var o9 = n(821418),
    o6 = n(340837);
let o8 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, o6.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, o9.Q.IS_GUEST_INVITE)
    );
};
var o7 = n(517905);
function de(e) {
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
        _ = m.state === O.elq.ACCEPTING,
        j = null != E ? (0, ow.OY)(E) : null,
        N = null != d,
        y = null != j,
        T = null != j && j.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, o9.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(O.GuildFeatures.HUB) ?? !1,
        R = d?.id,
        { analyticsLocations: L } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, te.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, lA._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [M, P] = r.useState(!1),
        D = r.useCallback(() => P(!1), []),
        U = r.useRef(null),
        G = (0, u.bG)([lU.Ay], () => o8([lU.Ay], m)),
        w = r.useCallback(() => {
            (P(!0), (0, oM.Pq)(R, "show profile", L));
        }, [R, L]),
        B = r.useCallback(() => {
            let e = "noop";
            (N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, oM.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, lA._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(oY, {});
        (d = oV.DY(m.guild)).premiumTier = m.guild.premium_tier ?? O.TVA.NONE;
    }
    let V = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return ee.intl.string(ee.t.N85DCl);
                else if (s) return ee.intl.string(ee.t.TJQcNv);
                else if (l) return ee.intl.string(ee.t.mJyBir);
                else return ee.intl.string(ee.t.lxTgP9);
            else if (r) return ee.intl.string(ee.t.Mnvc3C);
            else if (s) return ee.intl.string(ee.t.FdPNr5);
            else if (l) return ee.intl.string(ee.t.f4gmrf);
            else return ee.intl.string(ee.t.H39rEY);
        return n
            ? i
                ? ee.intl.string(ee.t.UxmnHx)
                : ee.intl.string(ee.t.sigPEf)
            : i
              ? ee.intl.string(ee.t["oU/lsl"])
              : ee.intl.string(ee.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: S, isHubGuild: k, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: lg.FA,
            children: [
                (0, s.jsx)(o7.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: M,
                    onRequestClose: D,
                    targetElementRef: U,
                    children: () => (0, s.jsx)(i6.A.GuildName, { guild: d, ref: U }),
                }),
                (0, s.jsx)("span", {
                    className: lg.E3,
                    children: (0, s.jsx)(ai.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(tW.m, {
                asContainer: !0,
                text: ee.intl.string(ee.t["/FeTK6"]),
                children: (0, s.jsx)(n5.CircleInformationIcon, { size: "md", color: "currentColor", className: lg.G }),
            })),
        b
            ? ((i = (0, s.jsx)(i6.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: lg.FA,
                  children: [
                      ee.intl.format(ee.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: lg.E3,
                          children: (0, s.jsx)(ai.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != v && v >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(i6.A.Data, { members: v, membersOnline: C }))
              : y && (t = (0, s.jsx)(i6.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(i6.A, {
            children: [
                (0, s.jsx)(i6.A.GuildSplash, { guild: d }),
                (0, s.jsx)(i6.A.Header, { text: V, extra: l }),
                (0, s.jsxs)(i6.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lg.iH,
                            children: [
                                (0, s.jsx)(i6.A.Icon, { guild: d }),
                                (0, s.jsx)(i6.A.Info, { title: i, onClick: w, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: lg.UD,
                            children: (0, s.jsx)(ev.$, {
                                onClick: B,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !G,
                                text: b
                                    ? T
                                        ? ee.intl.string(ee.t["7vb2cc"])
                                        : ee.intl.string(ee.t.gpqgah)
                                    : N
                                      ? ee.intl.string(ee.t.cEnaWx)
                                      : ee.intl.string(ee.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(O.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: lg.me }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ee.intl.format(ee.t["/o1IfA"], {
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
var dt = n(9994),
    dn = n(461888),
    di = n(263908),
    dl = n(123213),
    ds = n(86376),
    dr = n(42780),
    da = n(897288),
    dd = n(151101);
function dc(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = r.useId(),
        [m, h] = r.useState(!0),
        [g, p] = r.useState(!1),
        A = t.state === O.elq.ACCEPTING,
        x = (0, u.bG)([aA.Ay], () => aA.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, I.Ay)(f.A.INVITE_EMBED);
    ((0, te.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lA._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]));
    let v = (0, dt.oO)(t),
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
    if (null == v) return (0, s.jsx)(oY, {});
    let N = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: dd.uY,
                ref: d,
                children: [
                    (0, s.jsx)(dr.J$, { profile: v, className: dd.vK }),
                    (0, s.jsx)(dr.CG, { profile: v }),
                    (0, s.jsx)(ds.A, { profile: v, disableGuildNameClick: !g, guildNameId: c }),
                    (0, s.jsx)(di.P, { profile: v, className: dd.rb }),
                    (0, s.jsx)(da.A, {
                        guild: null != t.guild ? (0, oV.DY)(t.guild) : null,
                        roles: t.roles,
                        className: dd.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: dd.Se,
                      children: (0, s.jsx)(sg.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: _,
                          text: ee.intl.string(ee.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(dd.qr, { [dd.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: dd.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(dd.z8, { [dd.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: dd.UD,
                            children: (0, s.jsx)(du, {
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
        ? (0, s.jsx)(tK.s, {
              className: o()(dd.Gg, { [dd.vk]: m }),
              onClick: C,
              style: j,
              "aria-label": ee.intl.string(ee.t.dcl9MQ),
              children: N,
          })
        : (0, s.jsx)("div", { className: dd.Gg, role: "group", "aria-labelledby": c, children: N });
}
function du(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, dn.Ay)(n, dn.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, oM.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lA._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(dl.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
function dm(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        a = r.useId();
    return (
        (0, u.bG)([V.default], () => V.default.getId()) === i.id
            ? ((n = ee.intl.string(ee.t.HfUzlI)), (t = ee.intl.string(ee.t.y7uT5j)))
            : l
              ? ((n = ee.intl.string(ee.t.OMfs8i)), (t = ee.intl.string(ee.t["57nBty"])))
              : ((n = ee.intl.string(ee.t.OMfs8i)), (t = ee.intl.string(ee.t["p/zTYn"]))),
        (0, s.jsxs)(i6.A, {
            className: lg.TV,
            role: "group",
            "aria-labelledby": a,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lg.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(i6.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: lg.iH,
                        children: [
                            (0, s.jsx)(i6.A.Icon, { expired: !0 }),
                            (0, s.jsx)(i6.A.Info, {
                                expired: !0,
                                title: ee.intl.string(ee.t["Jhx/ud"]),
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
var dh = n(616356);
function dg(e) {
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
        m = (0, u.bG)([z.A], () => z.A.getGuildId()),
        h = (0, u.bG)(
            [dh.A],
            () => (null != n && null != n.target_user ? dh.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [dh.A],
            () => (null != n && null != n.target_user ? dh.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, te.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lA._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === oK.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eP()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: v } = n;
    eP()(E === oK.yV.STREAM && null != v, "invalid streaming invite");
    let C = i === v.id,
        _ = n.state === O.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            (A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, oM.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, lA._U)(n.code, a.id),
                    },
                    p,
                ));
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(oY, {});
        l = (0, oV.DY)(n.guild);
    }
    let y = null != n.channel ? (0, ow.OY)(n.channel) : null,
        T = az.Ay.getName(v),
        S = A || (!x && N),
        b = ee.intl.string(ee.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = C ? ee.intl.string(ee.t.oBLoZJ) : ee.intl.formatToPlainString(ee.t["0QJmA+"], { name: T })),
          (b = ee.intl.string(ee.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = ee.intl.string(ee.t.Q1W99y)), (k = "secondary")),
          (t = C ? ee.intl.string(ee.t["4hyaHu"]) : ee.intl.formatToPlainString(ee.t.QmlLEq, { name: T })));
    let R =
        m === l.id && null != y
            ? (0, s.jsx)(i6.A.Channel, { channel: y })
            : ee.intl.formatToPlainString(ee.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(i6.A, {
        children: [
            (0, s.jsx)(i6.A.Header, { text: ee.intl.string(ee.t["wS+5Wb"]) }),
            (0, s.jsxs)(i6.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lg.iH,
                        children: [
                            (0, s.jsx)(i6.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(i6.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(ev.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var dp = n(683063),
    dA = n(364522),
    dx = n(952270),
    df = n(52074),
    dI = n(725613),
    dE = n(693879),
    dv = n(145497),
    dC = n(936520),
    d_ = n(977997),
    dj = n(607567),
    dN = n(923710);
function dy(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, ic.Ay)(i),
        o = (0, u.bG)([nX.A], () => nX.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([d_.A], () => d_.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [dj.Ay],
            () => ({ voiceStates: null != i.guild_id ? dj.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([dI.A], () => dI.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || dI.A.hasRequestedStartTimes(i.guild_id) || (0, df.U)(i.guild_id);
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
        C = (0, lA._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, te.A)({
        name: e7.ImpressionNames.VOICE_INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
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
            (0, l5.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            (l(),
                (0, oM.he)(
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
        className: dN.kL,
        children: [
            (0, s.jsxs)("div", {
                className: dN.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: dN.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: dN.yW,
                                children: [
                                    (0, s.jsx)(od.H, {
                                        className: dN.p,
                                        color:
                                            c.length > 0 ? nH.A.colors.TEXT_FEEDBACK_POSITIVE : nH.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(dp.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(dv.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eB.D, {
                                            className: dN.HA,
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
                                ? (0, s.jsx)(dE.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: dN.Ao,
                              children: [
                                  (0, s.jsx)(dA.Ip, {
                                      ref: E,
                                      className: dN.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              dC.Ay,
                                              {
                                                  className: dN.Eq,
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
                                  (0, s.jsx)("div", { ref: p, className: dN.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: dN.p$,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(ee.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: dN.TB,
                        children: (0, s.jsx)(ev.$, {
                            onClick: N,
                            icon: od.H,
                            variant: "active",
                            fullWidth: !0,
                            text: ee.intl.string(ee.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dN.qr,
                children: [
                    (0, s.jsx)(dx.EyeSlashIcon, { size: "custom", color: "currentColor", className: dN.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: ee.intl.string(ee.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dT(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)(
            [H.A, to.A],
            () => {
                let e = H.A.getChannel(r);
                return null != e && to.A.canBasicChannel(O.hVb.VIEW_CHANNEL, e) ? e : null;
            },
            [r],
        ),
        o = (0, u.bG)([nX.A], () => null != nX.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(dc, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(dy, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var dS = n(652896),
    db = n(834757),
    dk = n(427358),
    dR = n(323605);
function dL(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, oz.gU)(n, i),
        a = (0, ic.Ay)(n);
    return (0, s.jsxs)(eB.D, {
        onClick: l,
        className: o()(dR.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: dR.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(s0.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(ie._, { className: dR.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var dM = n(941143),
    dP = n(717421),
    dD = n(297413),
    dO = n(528944);
function dU(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(lO.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eB.D, {
                ...r,
                innerRef: a,
                className: dO.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(t_.eu, {
                        src: t.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_24)),
                        className: dO.my,
                        "aria-label": t.username,
                        size: tj._3.SIZE_24,
                    }),
                    (0, s.jsx)(A.E, {
                        className: dO.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(dD.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var dG = n(480887);
function dw(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(dB, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(sW.Y, { renderPopout: () => o(i), ...a });
}
function dB(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, tq.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: dG.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(dA.Ip, {
                className: dG.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        dU,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: rw.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var dV = n(768920);
let dH = { mass: 1, tension: 170, friction: 26 };
function dF(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, dP.z)(() => ({ x: 0, y: 0, scale: 1, config: dH }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(dM.animated.div, {
            ref: a,
            className: o()(dV.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, dM.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: dV.my,
                            children: (0, s.jsx)(tW.m, {
                                text: rw.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(t_.eu, {
                                    src: (function (e, t, n) {
                                        let i = lU.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, K.xT)(i);
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
                c && (0, s.jsx)(dz, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function dz(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, tq.A)(e),
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
    return (0, s.jsx)(dw, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(dV.my, dV.k2),
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
var dY = n(183751);
function dK(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = oV.DY(t.guild));
    let m = null != t.channel ? (0, ow.OY)(t.channel) : null;
    (eP()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eP()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [to.A, H.A],
            () => {
                let e = H.A.getChannel(m.id);
                return null == e || to.A.canBasicChannel(O.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([dj.Ay], () => (h ? dj.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? ee.intl.string(ee.t.DVDvCD) : ee.intl.string(ee.t.TY77rq),
                    sublabel: ee.intl.string(ee.t.wM2WTM),
                };
            let o = r ? ee.t["2RWMFV"] : ee.t.IWXzHV,
                d = r ? ee.t.Da7tZx : ee.t["3VbQvv"];
            return { label: l ? ee.intl.format(o, { othersCount: a }) : ee.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([V.default], () => V.default.getId()), author: n.author, voiceStates: g }),
        E = (0, u.bG)([nX.A], () => null != nX.A.getGuild(c.id), [c.id]),
        v = (0, u.bG)([ep.Ay], () => ep.Ay.getVoiceChannelId() === m.id, [m.id]),
        C = (0, u.bG)([lU.Ay], () => o8([lU.Ay], t), [t]),
        _ = t.state === O.elq.ACCEPTING,
        { analyticsLocations: j } = (0, I.Ay)(f.A.INVITE_EMBED),
        N = (0, lA._U)(t.code, n.id),
        y = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [dh.A, dk.A],
                () => {
                    if ((0, oU.G4)(t) && null != t.target_user) {
                        let e = dh.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = dh.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let r = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === r.length) return null;
                    for (let e of [...r].sort((e, t) => {
                        let n = dk.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (dk.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = dh.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        T = (0, db.AO)(y),
        S = null != y,
        b = r.useCallback(() => {
            let e = E ? "transition" : "accept";
            (E ? l() : a(),
                (0, oM.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: T?.id ?? void 0,
                        stream_key: null != y ? (0, dS._z)(y) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                ));
        }, [t, n, j, N, E, T, y, g.length, l, a]),
        k = r.useCallback(() => {
            (E ? (0, l5.iN)(m.id) : a({ autoJoin: !1 }),
                eX.default.track(O.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: E,
                    application_id: T?.id ?? null,
                    stream_key: null != y ? (0, dS._z)(y) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                }));
        }, [m.id, c.id, t.code, N, E, T, y, g.length, j, a]);
    (0, te.A)({
        name: e7.ImpressionNames.VOICE_INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([aA.Ay], () => aA.Ay.useReducedMotion),
        L = r.useRef(null),
        [M, P] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        D = (0, u.bG)(
            [dk.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = dk.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (dk.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        U = r.useMemo(() => tE().throttle(P, 20), [P]);
    r.useEffect(() => () => U.cancel(), [U]);
    let G = r.useCallback(
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
                U({ percentX: n, percentY: i, proximity: l });
            },
            [R, U],
        ),
        w = r.useCallback(() => {
            (U.cancel(), P({ percentX: 0, percentY: 0, proximity: 0 }));
        }, [U]);
    return (0, s.jsxs)("div", {
        className: dY.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: L,
                className: dY.hw,
                onMouseMove: G,
                onMouseLeave: w,
                children: [
                    (0, s.jsx)("div", { className: dY.ys }),
                    (0, s.jsx)("div", { className: dY.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: dY.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(dY.Qs, { [dY.tE]: 0 === D.length }),
                                children: [
                                    (0, s.jsx)(dL, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: dY.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(s0.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: dY.$B,
                                                      children: (0, s.jsx)(s0.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            D.length > 0
                                ? (0, s.jsx)("div", {
                                      className: dY.RE,
                                      children: (0, s.jsx)(dF, {
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
                        className: dY.xk,
                        children: (0, s.jsx)(ev.$, {
                            onClick: b,
                            loading: _,
                            variant: v ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !C,
                            text: v ? ee.intl.string(ee.t["3xjX0U"]) : ee.intl.string(ee.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dY.qr,
                children: [
                    (0, s.jsx)(dx.EyeSlashIcon, { size: "custom", color: "currentColor", className: dY.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: ee.intl.string(ee.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dW(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [oB.A],
            () => ({ invite: oB.A.getInvite(t), inviteError: oB.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lA._U)(t, n.id);
    r.useEffect(() => {
        null == l && oM.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: O.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, I.Ay)(),
        m = (0, u.bG)([nX.A], () => (l?.guild != null ? nX.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [H.A, to.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = H.A.getChannel(e);
                return null != t && to.A.canBasicChannel(O.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([V.default], () => V.default.getId()),
        p = (0, u.bG)([oD.Ay], () => oD.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && oM.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            oM.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? oV.DY(l.guild) : m;
        (0, oG.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: c,
            onGateConfirm: n,
        }) === oG.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(de, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case O.elq.RESOLVING:
            f = (0, s.jsx)(oY, {});
            break;
        case O.elq.EXPIRED:
        case O.elq.BANNED:
            f = (0, s.jsx)(dm, { banned: d.state === O.elq.BANNED, author: n.author });
            break;
        case O.elq.ERROR:
            f = (0, s.jsx)(o0, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, oU.On)(d)) {
                case oU.Xd.GROUP_DM:
                    f = (0, s.jsx)(o4, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case oU.Xd.FRIEND:
                    f = (0, s.jsx)(o3, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, oU.G4)(d)) {
                        if (null != d.channel && (0, ow.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = oF({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(dT, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(dK, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(dg, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, oU.ly)(d)) {
                        f = (0, s.jsx)(oO.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, oU.oK)(d)) {
                        f = (0, s.jsx)(oZ, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, ow.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = oF({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(dT, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(dK, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, oP.v)(d) &&
                        (f = (0, s.jsx)(dc, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(aK.A, { section: O.JJy.INVITE_LINK, children: f });
}
var dJ = n(706403),
    dX = n(860227),
    dZ = n(441939),
    dq = n(280621),
    d$ = n(123791),
    dQ = n(627363);
function d0(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, dQ.YY)(t);
    return null == i ? null : (0, s.jsx)(d1, { app: i, guildId: n });
}
function d1(e) {
    let { app: t, guildId: i } = e;
    (0, d$.C)(t.id);
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
    return (0, s.jsx)(ev.$, {
        size: "sm",
        onClick: l,
        icon: dq.U,
        text: ee.intl.format(ee.t.XDRjs5, { appName: t.name }),
    });
}
var d2 = n(394839),
    d3 = n(96782),
    d5 = n(930390),
    d4 = n(861986),
    d9 = n(87221),
    d6 = n(313433);
function d8(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: d6.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: d6.Yf,
                        children: [
                            (0, s.jsx)(d9.D, { size: "lg", color: nH.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: ee.intl.string(ee.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: d6.Fj,
                children: [
                    (0, s.jsx)(n5.CircleInformationIcon, { size: "sm", color: nH.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ee.intl.string(ee.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var d7 = n(343552),
    ce = n(581619),
    ct = n(803931);
let cn = [O.Auw.GIFV],
    ci = 15 * nv.A.Millis.MINUTE,
    cl = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cs = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, l_.e5.IS_ANIMATED);
        return null != i && null != l && (lj.bp.test(n) || (a && (lj.P8.test(n) || lj.p4.test(n))))
            ? (0, s.jsx)(ab.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: ct.jj })
            : null;
    };
function cr(e) {
    let { url: t, image: n, video: i, thumbnail: l, providerName: a, children: o } = e,
        d = r.useMemo(() => (0, d7.b)(t, n, i, l, a), [t, n, i, l, a]);
    return (0, s.jsx)(i5.G.Provider, { value: d, children: o });
}
class ca extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, lA._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cl.has(e));
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
            case r9.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(n7, { messageId: e.id, channelId: t.id });
                break;
            case r9.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(eN, { channelId: t.id }),
                        (0, eE.cc)(t.id, e.id) ? (0, s.jsx)(eL, { channelId: t.id }) : null,
                    ],
                });
                break;
            case r9.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(eb, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: ct.od, children: i });
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
                    e8.O,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tG.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(ln, { code: a, message: e });
                                case tG.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eI, { application: t, message: e, params: i });
                                case tG.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e4, { application: t, message: e });
                                case tG.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(e9, { application: t, message: e, skuId: l });
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
                        dW,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tG.I.TEMPLATE:
                    return (0, s.jsx)(lp, { code: l }, l);
                case tG.I.EVENT:
                    return (0, s.jsx)(lo.A, { code: l }, l);
                case tG.I.CHANNEL_LINK:
                    return (0, s.jsx)(as, { code: l, message: e }, l);
                case tG.I.GUILD_PRODUCT:
                    return (0, s.jsx)(la, { code: l }, l);
                case tG.I.SERVER_SHOP:
                    return (0, s.jsx)(n0, { guildId: l }, l);
                case tG.I.SOCIAL_LAYER_STOREFRONT: {
                    let n = (0, sS.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sH,
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
                        sF.A,
                        {
                            guildId: i,
                            skuId: r,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, sT.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: i });
                            },
                        },
                        l,
                    );
                }
                case tG.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let n = (0, sS.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sH,
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
                    return (0, s.jsx)(sF.I, { applicationId: i, skuId: r, channel: t }, l);
                }
                case tG.I.QUESTS_EMBED:
                    return (0, s.jsx)(l$.A, { questId: l }, l);
                case tG.I.GAME_PROFILE:
                    return (0, s.jsx)(iP, { gameId: l, sourceUserId: e.author.id }, l);
                case tG.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(i3, { code: l }, l);
                case tG.I.USER_PROFILE:
                    return (0, s.jsx)(r0, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
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
                    return (0, s.jsx)(nV, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tG.I.EXPERIMENT:
                case tG.I.GAME_ORGANIZATION_INVITE:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = Y.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: ct.zv,
                          children: (0, s.jsx)(oL, {
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
            : (0, s.jsx)(d5.A, {
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
        if (0 === d.length || e.isPoll() || (0, r1._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, O.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, l_.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, O.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: p,
                srcToSeekOverride: A,
            } = (0, lJ.o)(h, { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, c.Lt)(u, O.pr7.IS_VOICE_MESSAGE);
        function I(e, n) {
            let i = (0, c.Lt)(e.originalItem.flags ?? 0, O.sbO.IS_SPOILER) || (0, sz.BV)(t);
            return (0, r6.iW)(e.originalItem, n, i);
        }
        let E = m.map((s) => {
            let a = (0, l_.aG)(s),
                o = {
                    message: e,
                    item: (0, d3.rC)(s, l),
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
                    renderAudioComponent: f ? dJ.SX : dJ.Nj,
                    renderImageComponent: dJ.Cr,
                    renderVideoComponent: dJ.I1,
                    renderPlaintextFilePreview: dJ.R6,
                    renderGenericFileComponent: dJ.UB,
                    onPlay: function (n, i, l) {
                        eX.default.track(O.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: cs(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, r3.E)({ proxyURL: s.proxy_url, url: s.url });
            return (d in g && x && ((o.onClick = g[d]), (o.handlePreloadImage = p[d]), (o.onSeekRequest = A[d])), o);
        });
        return (0, s.jsx)(d2.A, { items: E });
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
            u = (0, r6.sC)(e, i, o, d);
        if (e.type === O.Auw.GIFT) return null;
        let m = cn.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            cr,
            {
                url: m,
                image: e.image,
                video: e.video,
                thumbnail: e.thumbnail,
                providerName: e.provider?.name,
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
        e.type !== O.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lC.A.parseEmbedTitleWithoutLinks : lC.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === O.Auw.RICH
            ? lC.A.parse(t, !0, {
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
                      ce.zx.has(t.type) ||
                      (0, r5.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, O.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lf.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lI.has(t.content_type);
                              })
                          )) ||
                      (0, r5.V)(t) ||
                      (0, r5.G8)(t) ||
                      (0, r5.Xk)(t) ||
                      ((0, r5.nL)(t) && (0, rD.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === O.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, r6.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  am,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cs,
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
                                sm.Ay,
                                {
                                    type: sm.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: sJ.LL, renderVideoComponent: sJ.$o, renderLinkComponent: sJ.bU };
                  if (
                      t.type === O.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = r4.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  oN,
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
        return (0, s.jsx)(ad.N, {
            gifAutoPlay: t,
            getGifFavButton: cs,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), r?.(t, e));
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(lE.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(dZ.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== O.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tx, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, r8.ec)(e)
            ? (0, s.jsx)(aS.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lX.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(rp, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(O.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(rM, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(O.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - im.default.extractTimestamp(e.id) >= ci)
        )
            return (0, s.jsx)("div", { className: ct.xM, children: ee.intl.string(ee.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: ee.intl.string(ee.t.VL1KOk),
            confirmText: ee.intl.string(ee.t.YEHppG),
            cancelText: ee.intl.string(ee.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: ct.IX,
                    children: ee.intl.string(ee.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ee.intl.string(ee.t["5j2by3"]),
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
                  header: ee.intl.string(ee.t.CbTIEo),
                  confirmText: ee.intl.string(ee.t.kFwAsa),
                  cancelText: ee.intl.string(ee.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: ct.IX,
                      children: ee.intl.string(ee.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(d0, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e8.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(aT, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== O.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(lW, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === O.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(sx, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === O.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(sy, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, n2.KM)(e)
            ? (0, s.jsx)(n9, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lq.A, { message: e, poll: t, className: ct.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tD, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lQ.Mn)(e, this.props.channel))
            return (0, s.jsx)(su, { message: e, renderAccessories: this.props.renderAccessories });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lQ.Mn)(e, this.props.channel))
            return (0, s.jsx)(iN, {
                message: e,
                renderAccessories: this.props.renderAccessories,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(d4.A, { message: e, compact: t, location: d4.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, ih.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new ip(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lX.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, dX.XL)(e),
                  className: o()(this.props.className, ct.kL),
                  children: (0, s.jsx)(d8, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, dX.XL)(t), className: o()(e, ct.kL), children: n })
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
                  id: (0, dX.XL)(t),
                  className: o()(e, ct.kL),
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
function co(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: l,
            isMessageSnapshot: r,
            hideInviteEmbedBanner: a,
            hideActivityInvite: o,
        } = e,
        d = (0, u.bG)([V.default], () => V.default.getId()),
        m = io.X6.useSetting(),
        h = io.hD.useSetting(),
        g = io.rs.useSetting() && !(0, rE.A)(e.message),
        p = io.jW.useSetting() && !1 !== e.renderReactions,
        A = io.kt.useSetting(),
        x = (0, u.bG)([r2.A], () => null == n.guild_id || r2.A.canChatInGuild(n.guild_id), [n]),
        f = (0, u.bG)([lv.A], () => null != n.guild_id && lv.A.isLurking(n.guild_id), [n]),
        I = (0, u.bG)([lU.Ay, Y.default], () => {
            let e = Y.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lU.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: v } = (0, u.cf)(
            [to.A],
            () => ({
                canAddNewReactions: x && to.A.can(O.xBc.ADD_REACTIONS, n),
                canManageMessages: to.A.can(O.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        C = (0, li.ix)(n.guild_id),
        [, _] = (0, ll.c)(n.guild_id),
        j = (0, rA.Id)(n),
        N =
            (d === i.author.id || v) &&
            i.author.id !== O.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, O.pr7.EPHEMERAL) &&
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
        b = (0, ae.A)({
            channel: n,
            canChat: x,
            renderReactions: p,
            canAddNewReactions: E,
            isLurking: f,
            communicationDisabled: _,
            isActiveChannelOrUnarchivableThread: j,
            isAutomodQuarantined: C,
        }),
        k = (0, ii.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        R = (0, lN.A)(n?.id),
        L = (0, lZ.A)(i),
        M = (0, n3.P)(i),
        P = (0, r7.z)(n),
        D = (0, r9._f)(i.id, i.channel_id),
        U = (0, n1._R)(),
        G = (0, il.U)();
    return (0, s.jsx)(ca, {
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
function cd(e) {
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
        c = io.X6.useSetting(),
        u = io.hD.useSetting(),
        m = io.rs.useSetting(),
        h = io.kt.useSetting(),
        g = (0, il.U)(),
        p = (0, ii.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, lN.A)(n?.id),
        x = (0, n3.P)(t),
        f = (0, r9._f)(t.id, t.channel_id),
        I = (0, lZ.A)(t);
    return (0, s.jsx)(ca, {
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
