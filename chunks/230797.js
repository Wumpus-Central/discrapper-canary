(n.d(t, { iV: () => cl, OC: () => cr, Ay: () => cs }), n(938796));
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
    k = n(625180),
    R = n(25451),
    L = n(205184),
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
    J = n(660183),
    X = n(852575);
function Z(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: X.i,
        children: [
            (0, s.jsx)(K.Ay, { guildId: n, users: t, max: 6, size: K.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var q = n(354287),
    $ = n(138175),
    Q = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(165610),
    ei = n(113732);
function el(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, $.b)(t)),
        m = c?.id,
        h = (0, E.Z$)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = (0, Q.f)(t),
        v = (0, u.bG)([M.default], () => l ?? M.default.getId(), [l]),
        { analyticsLocations: C } = (0, I.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: b } = (0, V.w)(t.id),
        L = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        P = null != m && h && L,
        O = b && h,
        U = (0, R.X)(t),
        G = (0, ee.F)(t),
        B = (0, ee.t)(t),
        F = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? U
                        ? e.push({
                              label: J.intl.string(J.t.RscU7I),
                              trackingArea: q.kY.PLAY,
                              onClick() {
                                  k.A.launchFrame({
                                      applicationId: t.id,
                                      surface: en.sd,
                                      analyticsContext: { isStart: !0, analyticsLocations: C },
                                  });
                              },
                          })
                        : (O &&
                              e.push({
                                  label:
                                      null == j
                                          ? J.intl.string(J.t.RscU7I)
                                          : N
                                            ? J.intl.string(J.t.DPfdsq)
                                            : J.intl.string(J.t.sqe0hj),
                                  trackingArea: q.kY.PLAY,
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
                          !O &&
                              P &&
                              e.push({
                                  label: J.intl.string(J.t.JeK1Wg),
                                  trackingArea: q.kY.PLAY,
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
                    : null != B && e.push(B),
                e
            );
        }, [h, B, U, t.id, O, P, j, N, _, i, v, C, m]),
        z = h ? (0, s.jsx)(er, { app: t }) : (0, s.jsx)(es, { app: t });
    return (0, s.jsx)(H.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: G,
        bannerAspectRatio: x,
        iconSrc: g,
        info: z,
        actions: F,
        onClickContent: G,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: v,
            activityCustomId: i,
            onView: o,
            guildId: D.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function es(e) {
    let { app: t } = e,
        n =
            (0, B.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([P.default], () => P.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : J.intl.format(J.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(A.E, { variant: "text-xs/medium", className: ei.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: ei.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function er(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        a = (0, L.s)(t.id),
        o = (0, u.yK)(
            [G.default, O.A],
            () => {
                let e = [];
                for (let [t, n] of a.entries()) {
                    if (t >= 5) break;
                    let i = G.default.getUser(n.author_id),
                        l = O.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [a],
        ),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(Z, {
                    activityUsers: o,
                    guildId: l,
                    activityText: J.intl.formatToPlainString(J.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j.FireIcon, { size: "xxs", color: "currentColor" }),
                        J.intl.string(J.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? J.intl.format(J.t.z8EAJW, { count: i }) : J.intl.string(J.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: ei.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: ei.Tc, children: e }, t)),
                }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: ei.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var ea = n(582388),
    eo = n(257269);
let ed = (0, u.UT)(ea.A, {
    getQueryId: W.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : ea.A.getOne(e, t)),
    load: (e, t) => (0, eo.Py)(e, t),
});
var ec = n(309010),
    eu = n(933958),
    em = n(782091);
function eh(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Z$)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, I.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ec.Ay], () => ec.Ay.getChannelId()),
        g = (0, em.et)(h),
        p = (0, u.bG)([eu.Ay], () => {
            if (null == h) return;
            let e = eu.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([eu.Ay], () => eu.Ay.getCurrentEmbeddedActivity()),
        x = g === em.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        C = null != n ? n : i.customId,
        _ = [];
    (0, R.X)(t)
        ? _.push({
              label: J.intl.string(J.t.RscU7I),
              trackingArea: q.kY.PLAY,
              onClick() {
                  k.A.launchFrame({
                      applicationId: t.id,
                      surface: en.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: m, channelId: h },
                  });
              },
          })
        : (x &&
              _.push({
                  label:
                      null == p ? J.intl.string(J.t.RscU7I) : v ? J.intl.string(J.t.DPfdsq) : J.intl.string(J.t.sqe0hj),
                  trackingArea: q.kY.PLAY,
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
                  label: J.intl.string(J.t.JeK1Wg),
                  trackingArea: q.kY.PLAY,
                  onClick() {
                      (0, T.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: C, referrerId: l });
                  },
              }));
    let j = (0, ee.F)(t);
    return (0, s.jsx)(H.h, {
        actions: _,
        onClickContent: j,
        header: t.name,
        iconSrc: w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: et.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: C,
            guildId: D.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eg(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, I.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = ed(t.id, r);
    return (0, E.Z$)(t)
        ? null != r && null == c && null != d
            ? (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(eh, { application: t, customId: a, customLink: d, referrerId: l, message: n }),
              })
            : (0, s.jsx)(I.f5, {
                  value: o,
                  children: (0, s.jsx)(el, {
                      app: t,
                      linkType: et.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var ep = n(36149),
    eA = n(821609),
    ex = n(379257),
    ef = n(306537);
function eI(e) {
    let { channelId: t } = e,
        n = (0, ep.i2)(),
        i = r.useCallback(() => {
            (ex.A.showAgeVerificationGetStartedModal({ entryPoint: ef.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ef.UT)(ef.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(eA.$, { variant: "primary", text: J.intl.string(J.t["/nicWo"]), onClick: i, disabled: !n });
}
var eE = n(107766),
    ev = n(780964),
    eC = n(766075);
function e_(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            ((0, eE.nk)() || (0, eC.openUserSettings)(ev.X.FAMILY_CENTER_PANEL), (0, ef.UT)(ef.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(eA.$, { variant: "primary", text: J.intl.string(J.t.n8a49k), onClick: n });
}
var ej = n(277861),
    eN = n(78637);
function ey(e) {
    let { channelId: t } = e,
        n = (0, ep.i2)(),
        i = r.useCallback(() => {
            ((0, ej.Vq)(), (0, ef.UT)(ef.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(eA.$, { variant: "secondary", text: J.intl.string(eN.default.Z61nkt), onClick: i, disabled: !n });
}
var eT = n(284009),
    eS = n.n(eT),
    eb = n(664121),
    ek = n(34188),
    eR = n(408278),
    eL = n(173936),
    eP = n(739187),
    eM = n(857250),
    eD = n(97483),
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
        getQueryId: W.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eF.A.get(e),
                n = ez.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eV.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (eS()(null != e, "skuId is null"), await (0, eG.QB)(e));
        },
    }),
    e0 = (0, u.UT)([eF.A], {
        getQueryId: W.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eF.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (eS()(null != e && null != t, "appId is null"), await (0, eG.JI)(t));
        },
    });
function e1(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eX.G)(l),
        [o, d, c, m] = (0, u.yK)(
            [eH.A, D.A],
            () => {
                let e = (0, eW.A)(t, 45),
                    n = D.A.getBasicChannel(i.channel_id)?.guild_id;
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
                    ? J.intl.formatToPlainString(J.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? J.intl.formatToPlainString(J.t.GSfibA, { count: h })
                      : p > 0
                        ? J.intl.formatToPlainString(J.t.j7Go5A, { count: p })
                        : J.intl.string(J.t.rMA98g),
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
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eJ.K)(l, eJ.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eY.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: e$.mZ,
            children: (0, s.jsx)(eA.$, {
                onClick: function () {
                    (x(),
                        eY.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: J.intl.string(J.t.kRvlKJ),
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
        m = (0, u.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eW.A)(t, 45), [t]),
        p = (0, eX.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eB.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === W.Puh.SUBSCRIPTION,
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
                          J.intl.string(J.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eb.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    function _() {
        null != o &&
            eY.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
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
            link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, eJ.K)(t.id, eJ.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (E(),
                    eY.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, s.jsxs)("div", {
                className: e$.w,
                children: [
                    (0, s.jsx)(eA.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (v(),
                                eY.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: J.intl.string(J.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, s.jsx)(eZ.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: I ? "user" : "guild",
                                  skuId: o.id,
                                  icon: ek.U,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, s.jsx)(eA.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: v })
                        : (0, s.jsx)(eZ.$P, { appId: t.id, sku: o, icon: ek.U, onHasClicked: _ }),
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
                            (0, s.jsx)(ek.U, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eK.p5 &&
                        (0, s.jsx)(eR.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, s.jsx)(eL.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eK.C)(l, () => {
                                    ((0, eP.P)((0, eM.o)(J.intl.string(J.t["L/PwZf"]), eD.Ck.SUCCESS)), o());
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
    e6 = n(562708),
    e4 = n(139286);
function e9(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e4.x)({
                type: e6.ImpressionTypes.VIEW,
                name: e6.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, B.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(I.f5, {
              value: i,
              children: (0, s.jsx)(el, { app: t, linkType: et.J.OAUTH, onView: l, message: n }),
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
        (this.waitFor(M.default, D.A, tl.A, G.default), (ta = new Set(tn.w.get(tr))));
    }
    shouldShowBump(e) {
        return to.has(e);
    }
}
let tc = new td(ti.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || ta.has(t)) return !1;
        let l = D.A.getChannel(t),
            s = G.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === W.rbe.GUILD_ANNOUNCEMENT &&
                (0, ts.A)(n) &&
                tl.A.can(W.xBc.SEND_MESSAGES, l) &&
                (r || tl.A.can(W.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), W.pr7.CROSSPOSTED)
            )
        )
            return !1;
        to.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        to.has(t.id) && c.Lt(Number(t.flags), W.pr7.CROSSPOSTED) && to.delete(t.id);
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
                              children: J.intl.string(J.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: tm.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eO.D, { onClick: l, children: J.intl.string(J.t.MFGE51) }),
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
                      children: (0, s.jsx)(eO.D, { onClick: o, children: J.intl.string(J.t.efSkDm) }),
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
    tT = n(153469),
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
                  (0, s.jsx)(eA.$, {
                      text: J.intl.string(J.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eY.default.track(W.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
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
                    (0, e4.x)({ type: e6.ImpressionTypes.VIEW, name: tx.IJ.CUSTOM_THEME_SHARE, properties: {} });
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
                              children: [J.intl.string(tS.default.KSBBpC), " ", (0, s.jsx)(tf.t, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tb.Tb,
                              children:
                                  ((t = `${J.intl.format(tS.default.fQPSEf, { username: "__USERNAME__" })}`),
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
var tP = n(892768),
    tM = n(167189),
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
    t6 = n(993408),
    t4 = n(682301),
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
function nP(e) {
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
        ? J.intl.format(J.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tV.C, { className: nk.fN, size: "sm", color: "currentColor" }),
          })
        : J.intl.formatToPlainString(J.t["cNSL/j"], { price: (0, t0.$g)(o.amount, o.currency) });
    return (0, s.jsx)(eA.$, { variant: "primary", onClick: c, text: u, fullWidth: !0 });
}
function nM(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        d = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
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
        b = (0, u.bG)([G.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = G.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (G.default.getUser(t) ?? void 0) : void 0;
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
        P = r.useCallback(
            (e) => {
                (e.stopPropagation(), L());
            },
            [L],
        ),
        M = r.useCallback(() => {
            (0, no.B)({ skuId: j, tab: i, analyticsLocations: a });
        }, [j, i, a]),
        D = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: M }), [M]),
        O = r.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        U = null != d && tQ.Ay.canUseShopDiscounts(d),
        w = T && !S && !(0, t6.G0)(_),
        B = (0, s.jsx)(eA.$, { variant: "secondary", onClick: M, text: J.intl.string(J.t.KLBTgF), fullWidth: !0 }),
        V = w ? (0, s.jsx)(nP, { product: _, hasShopDiscount: U, analyticsLocations: a }) : null,
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
                            onClick: M,
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
                                                    text: J.intl.string(J.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eO.D, {
                                                        "aria-label": J.intl.string(J.t.Ej3B3Y),
                                                        onClick: P,
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
                            (0, s.jsxs)(tz.e, { wrap: !1, fullWidth: !0, children: [B, V, H] }),
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
        } = (0, t4.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
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
          ? (0, s.jsx)(t2.R9, { newValue: a, children: (0, s.jsx)(nM, { ...e, product: t }) })
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
            (eY.default.track(W.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nB.H$)(t) }),
                await (0, nF.A)(W.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, e4.A)(
        { type: e6.ImpressionTypes.VIEW, name: e6.ImpressionNames.GUILD_SHOP_EMBED },
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
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nw.h, { size: 16 }),
                    (0, s.jsx)(e7.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
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
                                            children: J.intl.format(J.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
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
                                className: nX.$h,
                                children: (0, s.jsx)(eA.$, { onClick: c, icon: nJ.A, text: J.intl.string(J.t.jXx1CC) }),
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
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: n1.m, children: J.intl.string(J.t["2aXnfa"]) }),
        ],
    });
}
var n3 = n(974875),
    n5 = n(900019);
function n6(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([n5.A], () => n5.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, n3.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(eA.$, { variant: "secondary", text: J.intl.string(J.t["4q1Elf"]), onClick: l, disabled: !i });
}
var n4 = n(320448),
    n9 = n(958340),
    n8 = n(384231),
    n7 = n(959698),
    ie = n(438729),
    it = n(439762),
    ii = n(886737),
    il = n(699352),
    is = n(885386),
    ir = n(540999),
    ia = n(47167),
    io = n(58703),
    id = n(935208),
    ic = n(427930);
function iu(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class im {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        ((this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tl.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nY.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : n9.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, ic.A)(a) ? a.messageReference?.message_id : void 0,
            c = (0, io.Fe)(null != d ? new Date(id.default.extractTimestamp(d)) : o.message.timestamp),
            u = e.getChannel(this.parentMessage.channel_id);
        if (null != u && u.guild_id === a.messageReference?.guild_id) {
            var m;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(u.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: iu(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (m = (0, ia.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: m, timestamp: c }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let h = a.messageReference?.guild_id;
        if (null == h) return { snapshotIndex: r };
        let g = l.getGuild(h) ?? s.getGuild(h);
        return null == g ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: iu(g, c) };
    }
}
var ih = n(66834),
    ig = n(449054);
async function ip(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nY.A.getGuild(t))
        try {
            (await (0, ig.Z2)(t, { object: W.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, ih.k)(t),
                (l = D.A.getChannel(n)));
        } catch {}
    eY.default.track(W.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nF.A)(W.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var iA = n(387408),
    ix = n(352106);
function iI() {
    return (0, s.jsxs)("div", {
        className: ix.N1,
        children: [
            (0, s.jsx)(tJ.A, { size: "xs", className: ix.nr, color: nG.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: ix.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function iE(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new im(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, tl.A, nY.A, n9.A],
            () => l.getForwardInfo(D.A, G.default, O.A, tl.A, nY.A, n9.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            ip(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eO.D, {
              className: ix.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: ix.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: ix.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n4._, { size: "xxs", color: nG.A.colors.TEXT_MUTED }),
              ],
          });
}
function iv(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: l, onMediaItemContextMenu: a } = e,
        o = r.useMemo(() => (0, iA.A)(t, n), [t, n]),
        d = is.hD.useSetting(),
        c = is.rs.useSetting(),
        m = (0, u.bG)([ir.A], () => ir.A.isDeveloper),
        h = (0, n7.U)(),
        g = (0, n8.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: p,
            hasSpoilerEmbeds: A,
            hasBailedAst: x,
        } = (0, it.A)(o, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
            postProcessor: h ? ii.A : void 0,
        }),
        f = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        I = is.hH.useSetting();
    return null == f
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: ix.kL,
                  children: [
                      (0, s.jsx)("div", { className: ix.hD }),
                      (0, s.jsxs)("div", {
                          className: ix.Qs,
                          children: [
                              (0, s.jsx)(iI, {}),
                              (0, s.jsx)(ie.Ay, { message: o, content: p, compact: I }),
                              (0, il.A)({
                                  channelMessageProps: { message: o, channel: f, compact: I },
                                  hasSpoilerEmbeds: A,
                                  hasBailedAst: x,
                                  handleContextMenu: a,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: l,
                              }),
                              !h && (0, s.jsx)(iE, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function iC(e) {
    let { message: t, disableComponentInteractivity: n, onMediaItemContextMenu: i } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, l) =>
            (0, s.jsx)(
                iv,
                { message: t, snapshot: e, index: l, disableComponentInteractivity: n, onMediaItemContextMenu: i },
                l,
            ),
        ),
    });
}
var i_ = n(109112),
    ij = n(508770),
    iN = n(369606),
    iy = n(409626),
    iT = n(49491),
    iS = n(692969),
    ib = n(738250),
    ik = n(575568);
function iR(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: r,
            openGameProfile: a,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, ib.A)({ gameId: t }),
                r = (0, iS.A)({ gameId: t, source: iy.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                a = (0, iT.A)(l),
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
              className: ik.E6,
              onClick: a,
              "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: ik.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: ik.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: ik.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: ik.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: ik.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: ik.EU,
                                    children: (0, s.jsx)(i_._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: ik.Qs,
                              children: [
                                  (0, s.jsx)(e7.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: ik.k3,
                                          children: (0, s.jsx)(ij.E, {
                                              variant: "default",
                                              type: {
                                                  text: J.intl.formatToPlainString(J.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: iN.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eR.K, {
                              icon: n4._,
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
var iL = n(281445),
    iP = n(554146),
    iM = n(933832),
    iD = n(624479),
    iO = n(780907),
    iU = n(131607),
    iG = n(569926),
    iw = n(95035),
    iB = n(403362),
    iV = n(196736),
    iH = n(614393),
    iF = n(143407),
    iz = n(685743),
    iY = n(349085),
    iK = n(581453),
    iW = n(342942),
    iJ = n(174861),
    iX = n(49999),
    iZ = n(344045),
    iq = n(116947);
function i$(e) {
    let { code: t } = e,
        n = r.useMemo(() => (0, iJ.GF)(t), [t]);
    r.useEffect(() => {
        iO.Ay.getDetectableGames();
    }, []);
    let i = (0, iY.A)(n?.game_id, "cover"),
        { data: l } = (0, iG.I)(n?.game_id),
        a = (0, iV.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [d, c] = (0, iU.kn)([iP.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = d !== iP.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iL.X.SHOCKBYTE,
        h = M.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: x } = (0, iz.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
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
                    ? (0, iK.A)(h, E)
                    : (0, iW.A)({
                          provider: m,
                          onAccept: () => {
                              (c(iX.i.TAKE_ACTION), (0, iK.A)(h, E));
                          },
                      }));
        }, [E, u, m, c, h]),
        C = r.useCallback(() => {
            (0, iW.A)({
                provider: m,
                onAccept: () => {
                    (c(iX.i.TAKE_ACTION), p());
                },
            });
        }, [m, c, p]);
    if (null == n) return null;
    let _ = [l?.name, n.plan_name].filter(iB.Vq).join("  \u2022  ");
    return (0, s.jsxs)("div", {
        className: iq.E6,
        children: [
            (0, s.jsxs)("div", {
                className: iq.FG,
                children: [
                    (0, s.jsxs)("div", {
                        className: iq.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iq.oL,
                                children: [
                                    "" !== o
                                        ? (0, s.jsx)("img", { className: iq.vT, src: o, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: iq.iv,
                                              children: (0, s.jsx)(A.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: iq.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: iq.TK,
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
                                    className: iq.xG,
                                    children: (0, s.jsx)(eR.K, {
                                        variant: "secondary",
                                        icon: ek.U,
                                        "aria-label": J.intl.string(iZ.default.F5W36W),
                                        onClick: I,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: iq.$D,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iq.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: J.intl.string(iZ.default.mJlz3T),
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
                                className: iq.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: J.intl.string(iZ.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(A.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: iq.qy,
                                                children: [
                                                    (0, s.jsx)(A.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eO.D, {
                                                        className: iq.cL,
                                                        "aria-label": J.intl.string(J.t.OpuAlK),
                                                        onClick: p,
                                                        children: x
                                                            ? (0, s.jsx)(iM.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(iD.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(iw.A, {
                                                onClick: C,
                                                children: J.intl.string(iZ.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, s.jsx)("div", { className: iq.PD, children: (0, s.jsx)(iF.l5, { onClick: v }) }),
                ],
            }),
            (0, s.jsx)("div", { className: iq.uV, children: (0, s.jsx)(iH.T, { imageUrl: o }) }),
        ],
    });
}
class iQ extends r.Component {
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
function i0(e) {
    let { code: t } = e;
    return (0, s.jsx)(iQ, { children: (0, s.jsx)(i$, { code: t }) });
}
var i1 = n(643612),
    i2 = n(607399),
    i3 = n(702841),
    i5 = n(529200),
    i6 = n(395671),
    i4 = n(993748),
    i9 = n(212534),
    i8 = n(820496);
function i7(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, i3.yK)(
            [i9.A],
            () => [i9.A.getApplication(t), i9.A.isInvalidApplication(t), i9.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i3.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tG.K)(u),
        h = r.useCallback(() => {
            eY.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i2.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, i4.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === i9.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eY.default.track(W.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i2.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(i5.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, s.jsx)(i5.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: i8.k,
                          children: [
                              (0, s.jsx)(i5.A.Icon, { expired: !0 }),
                              (0, s.jsx)(i5.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === i9.e.FETCHING
          ? (0, s.jsxs)(i5.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, s.jsx)(i5.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(el, { app: i6.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var le = n(229527),
    lt = n(870136),
    ln = n(330075),
    li = n(412728);
function ll(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nH.Qi)(n, i),
        r = (0, i3.bG)([U.A], () => U.A.getGuildId());
    return ((0, e4.A)(
        {
            type: li.z.VIEW,
            name: e6.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(ln.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var ls = n(484724),
    lr = n(953727);
function la(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, lr.A)(l),
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
var lo = n(122906),
    ld = n(401755),
    lc = n(313977),
    lu = n(508557);
function lm(e) {
    let { code: t } = e,
        i = (0, u.bG)([lo.A], () => lo.A.getGuildTemplate(t));
    if (null == i || i.state === ld.QB.RESOLVING)
        return (0, s.jsxs)(i5.A, {
            children: [
                (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, s.jsx)(i5.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === ld.QB.EXPIRED)
        return (0, s.jsxs)(i5.A, {
            children: [
                (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, s.jsxs)(i5.A.Body, {
                    children: [
                        (0, s.jsx)(i5.A.Icon, { expired: !0 }),
                        (0, s.jsx)(i5.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eA.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, s.jsx)(eA.$, {
              onClick: function () {
                  null != i &&
                      i.state !== ld.QB.RESOLVING &&
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
              loading: i.state === ld.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(i5.A, {
        children: [
            (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, s.jsxs)(i5.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lu.iH,
                        children: [
                            (0, s.jsx)(la, { className: lc.K }),
                            (0, s.jsx)(i5.A.Info, {
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
var lh = n(21599),
    lg = n(681154),
    lp = n(155718);
let lA = new Set([
    lg.ContentInventoryEntryType.TOP_ARTIST,
    lg.ContentInventoryEntryType.TOP_GAME,
    lg.ContentInventoryEntryType.PLAYED_GAME,
    lg.ContentInventoryEntryType.WATCHED_MEDIA,
    lg.ContentInventoryEntryType.LISTENED_SESSION,
    lg.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lx = n(429987),
    lf = n(857071),
    lI = n(46054),
    lE = n(731068),
    lv = n(619517),
    lC = n(207133),
    l_ = n(844222),
    lj = n(463930),
    lN = n(251391),
    ly = n(601255),
    lT = n(562819),
    lS = n(234914),
    lb = n(59318),
    lk = n(837528),
    lR = n(754459),
    lL = n(967144),
    lP = n(342296),
    lM = n(696451),
    lD = n(218394);
function lO(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, lr.A)(l),
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
var lU = n(717125),
    lG = n(376943),
    lw = n(36491),
    lB = n(752755),
    lV = n(461715),
    lH = n(381941),
    lF = n(966101);
function lz(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lV.CI)(e),
                i = (0, i3.bG)(
                    [lM.Ay, M.default],
                    () => {
                        let e = M.default.getId();
                        return lM.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, i3.bG)(
                    [lU.A],
                    () => null != n && n?.channelId != null && lU.A.isChannelGated(n.guildId, n.channelId),
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
                } = (0, i3.cf)(
                    [lB.A, nY.A, D.A, G.default, U.A],
                    () => {
                        let e = lB.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = nY.A.getGuild(n?.guildId),
                            i = D.A.getChannel(n?.channelId),
                            l = G.default.getUser(e?.author_id),
                            s = U.A.getGuildId(),
                            r = null != i && (0, lG.nc)(i);
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
                    let e = (0, lV.tU)({
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
                        (lB.A.getEmbedFetchState(n.threadId) !== lB.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lw.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, lR.A)(n.id, lH.Fd),
        u = (0, lk.VL)(n, i, c, !0),
        m = is.kt.useSetting(),
        h = (0, lD.j)(),
        [g, p] = r.useState(!1),
        [x, I] = r.useState(d?.coverImage == null),
        E = (0, i3.bG)([lM.Ay, G.default], () => lM.Ay.isMember(d?.guildId, G.default.getCurrentUser()?.id), [d]),
        v = (0, i3.bG)([lM.Ay], () => (d?.authorId != null ? lM.Ay.getMember(d.guildId, d.authorId) : null)),
        C = (0, ly.A)(v?.avatarDecoration != null ? v?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [v?.colorString ?? "inherit", v?.colorStrings ?? null, v?.colorRoleId], [v]),
        y = (0, lL.gn)(v?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: T } = r.useContext(l_.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        R = r.useCallback(() => {
            p(!1);
        }, [p]),
        L = r.useCallback(async () => {
            null != d &&
                ((0, nB.zV)(W.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: E,
                }),
                d.canAccess
                    ? (0, nF.A)(W.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : E
                      ? (0, nF.A)(W.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await ig.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, E]);
    if (null == d) return null;
    let P = (0, w.F_)({ avatarDecoration: C, size: (0, lT.Te)(tE._3.SIZE_40), canAnimate: S }),
        O = d.user?.getAvatarURL(d.guildId, 40, S);
    function B() {
        T.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, lb.ge)(V);
    return (0, s.jsxs)("div", {
        className: lF.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lF.iT,
                onMouseEnter: k,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: o()(lF.xn, { [lF.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })
                            : (0, s.jsx)(lS.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lF.xn, { [lF.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lF.q_,
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eO.D, {
                            onClick: L,
                            children: (0, s.jsx)("div", {
                                className: lF.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lF.BS,
                                    children: [
                                        (0, s.jsx)(lO, { color: nG.A.colors.WHITE.css }),
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
                className: lF.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lF.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lF.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lF.hF, lF.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lF._5,
                        children: [
                            null != d.authorId &&
                                null != O &&
                                (0, s.jsx)(lP.A, {
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
                                            onMouseEnter: B,
                                            onMouseLeave: B,
                                            children: (0, s.jsx)(tI.eu, {
                                                ...e,
                                                ref: a,
                                                size: tE._3.SIZE_40,
                                                src: O,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: P,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lF.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lF.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(lN.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lF.Xg,
                                                }),
                                            (0, s.jsx)(eO.D, {
                                                onClick: L,
                                                className: lF.HA,
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
                                            className: lF.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, s.jsx)(lj.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: y,
                                                                className: lF.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                lP.A,
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
                                                                        (0, s.jsx)(lj.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: y,
                                                                            className: lF.fh,
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
                                ? (0, s.jsx)(eA.$, { variant: "primary", onClick: L, text: d.ctaText })
                                : (0, s.jsx)(eA.$, { onClick: L, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lY = n(492230),
    lK = n(378058),
    lW = n(704413),
    lJ = n(537039),
    lX = n(711038),
    lZ = n(892340),
    lq = n(803306),
    l$ = n(491182),
    lQ = n(622868),
    l0 = n(10364),
    l1 = n(378570),
    l2 = n(138298),
    l3 = n(761640),
    l5 = n(536637),
    l6 = n.n(l5),
    l4 = n(606049),
    l9 = n(943815),
    l8 = n(447215),
    l7 = n(256416),
    se = n(832038),
    st = n(318626),
    sn = n(513653);
let si = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = G.default.getUser(t),
        u = r.useMemo(() => (i ? (0, l9.A)((0, io.i$)(l6()(), "LT")) : null), [i]),
        m = (0, l8.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, t_.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tE.FT)(tE._3.SIZE_16)) : sn,
        g =
            null != c
                ? J.intl.format(l7.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(l7.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(st.NB, st.JZ, u),
        children: [
            (0, s.jsx)(tI.eu, { src: h, size: tE._3.SIZE_16, className: se.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: se.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: se.Ek, children: "\u2022" }),
                    (0, s.jsx)(l4.A, { timestamp: d, className: se.vE }),
                ],
            }),
        ],
    });
};
var sl = n(942925);
function ss(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new im(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, tl.A, nY.A, n9.A],
            () => l.getForwardInfo(D.A, G.default, O.A, tl.A, nY.A, n9.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = nY.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ec.Ay.getCurrentlySelectedChannelId(),
                s = l3.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (l2.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l1.iN)(i),
                eY.default.track(W.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eO.D, {
              className: sl.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: sl.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: sl.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n4._, { size: "xxs", color: nG.A.colors.TEXT_MUTED }),
              ],
          });
}
function sr(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, t_.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lR.A)(e.id, lH.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, lk.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, lk.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(l$.A, {
        childrenExecutedCommand: (0, s.jsx)(si, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(lQ.Ay, {
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
            renderPopout: l0.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(ie.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: sl.iU,
        author: o,
    });
}
function sa(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lq.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, iA.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = is.hD.useSetting(),
        c = is.rs.useSetting(),
        m = (0, u.bG)([ir.A], () => ir.A.isDeveloper),
        h = (0, n8.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, it.A)(o, {
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
                  className: sl.kL,
                  children: (0, s.jsxs)("div", {
                      className: sl.Qs,
                      children: [
                          (0, s.jsx)(sr, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, il.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: sl.Mf,
                          }),
                          (0, s.jsx)(ss, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function so(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(sa, { message: t, snapshot: e, index: n }, n)),
    });
}
var sd = n(302031),
    sc = n(738188),
    su = n(123292),
    sm = n(239093),
    sh = n(798362);
function sg(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === sm.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === sm.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eO.D, {
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
                                  source: sm.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sh.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sh.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sh.U1,
                              children: [
                                  (0, s.jsx)(sc.WarningIcon, {
                                      className: sh.QW,
                                      color: nG.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sh.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: l6()().diff(l6().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sh.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: sh.xQ,
                      children: (0, s.jsx)(su.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sp = n(28863),
    sA = n(393033),
    sx = n(975430);
function sf(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sp.Anchor, {
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
                        source: sm.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sx.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function sI(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sp.Anchor, { className: sx.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function sE(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sm.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(sf, { classificationId: n });
        case sm.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(sI, { learnMoreLink: i });
        default:
            return null;
    }
}
function sv(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e8.k, { size: "xs", color: nG.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(sc.WarningIcon, { color: nG.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: sx.Kk, children: n[t] }) : null;
}
function sC(e) {
    let { children: t, theme: n } = e,
        i = { default: sx._y, danger: sx.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function s_(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sA.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eO.D, {
              className: sx.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sx.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sx.U1,
                              children: [
                                  (0, s.jsx)(sv, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sx.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l6()().diff(l6().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sx.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(sC, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              sE,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var sj = n(44724),
    sN = n(227327),
    sy = n(638495),
    sT = n(43990),
    sS = n(429913),
    sb = n(976860),
    sk = n(371794),
    sR = n(871123),
    sL = n(439303),
    sP = n(353281),
    sM = n(832163),
    sD = n(637893),
    sO = n(376680),
    sU = n(317560),
    sG = n(467884),
    sw = n(661070);
function sB(e) {
    let t,
        { guildOrApplication: n, skuIds: i, destinationGuildId: l, channelId: a, messageId: d } = e,
        c = (0, sy.k)(),
        m = (0, sD._)("SocialLayerStorefrontEmbed"),
        h = "guild" === n.type ? n.guildId : void 0,
        g = "application" === n.type ? n.applicationId : void 0,
        p = (0, sO.A)({ applicationId: g, guildId: h }),
        A = p?.storefront,
        x = g ?? A?.applicationId,
        E = (0, sS.h)(x),
        v = A?.application?.name ?? E?.name ?? null,
        C = "guild" === n.type ? n.guildId : ((0, sR.n5)(x) ?? null),
        _ = (0, u.yK)([eF.A], () => (null == x ? [] : i.filter((e) => eF.A.get(e)?.applicationId === x)), [i, x]),
        { analyticsLocations: j } = (0, I.Ay)(f.A.SLAYER_STOREFRONT_EMBED),
        N = r.useMemo(() => ({ pageSection: "storefront_embed", placement: sL.Ye.MULTI_SKU_EMBED }), []),
        y = r.useCallback(() => {
            (null != x &&
                eY.default.track(W.HAw.SLAYER_STOREFRONT_EMBED_SHOP_ALL_CLICKED, {
                    application_id: x,
                    application_name: v,
                    guild_id: C,
                    destination_guild_id: l,
                    channel_id: a,
                    message_id: d,
                    sku_ids: _,
                    sku_count: _.length,
                }),
                (0, sj.default)("guild" === n.type ? { guildId: n.guildId } : { applicationId: n.applicationId }));
        }, [x, v, a, l, n, d, C, _]),
        T = r.useCallback(
            (e, t) => {
                let { skuId: n, applicationId: i } = t;
                (0, sU.R)({ skuId: n, applicationId: i, isStorefront: !1, analyticsLocations: j, contextKey: c });
            },
            [j, c],
        ),
        S = r.useCallback(
            (e, t, n) => {
                if (null == x) return;
                let i = sM.A.getStorefrontState(x)?.activePage ?? 0;
                (0, sb.bG)(W.BVt.COLLECTIBLES_SHOP_GAME_SHOP(x, i, e, n));
            },
            [x],
        );
    if (!m) return null;
    if (p?.state === "loading")
        return (0, s.jsx)("div", { className: o()(sw.kL, sw.g4), children: (0, s.jsx)(tY.y, {}) });
    if (null == A || null == x || 0 === _.length) return null;
    let b =
            null !=
            (t = A.pages.find((e) => e.leaderboard?.backgroundImageAssetId != null)?.leaderboard
                ?.backgroundImageAssetId)
                ? (0, sk.YE)(A.applicationId, t, 1024, sR.pV)
                : null,
        k = A.logoAssetId ?? A.lightThemeLogoAssetId,
        R = null != k ? (0, sk.YE)(x, k, 128) : null;
    return (0, s.jsx)(sT.N, {
        theme: W.NJ8.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: o()(sw.kL, e),
                children: [
                    (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: sw.Tp,
                        children:
                            null != b &&
                            (0, s.jsx)("div", { className: sw.iL, style: { backgroundImage: `url(${b})` } }),
                    }),
                    (0, s.jsx)("div", {
                        className: sw.wx,
                        children: (0, s.jsxs)("div", {
                            className: sw.VW,
                            children: [
                                null != R && (0, s.jsx)("img", { className: sw.wm, src: R, alt: "" }),
                                (0, s.jsx)(e7.D, {
                                    className: sw.DD,
                                    variant: "heading-md/semibold",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.title,
                                }),
                                (0, s.jsx)(eA.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    icon: ek.U,
                                    text: J.intl.string(J.t.RSyoZu),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(sL.E9, {
                        newValue: N,
                        children: (0, s.jsx)(sP.J, {
                            viewProductDetails: S,
                            children: (0, s.jsx)("div", {
                                className: o()(sw.Vg, { [sw.Me]: _.length % 2 == 1 }),
                                children: _.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: o()(sw.ux, { [sw.Xv]: 0 === t && _.length % 2 == 1 }),
                                            children: (0, s.jsx)(sG.Ay, {
                                                className: sw.Nr,
                                                skuId: e,
                                                positionInSection: t,
                                                variant: sG.s6.SMALL,
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
var sV = n(50777),
    sH = n(288254),
    sF = n(319060),
    sz = n(812282),
    sY = n(922016),
    sK = n(684519),
    sW = n(188645),
    sJ = n(240248),
    sX = n(256449),
    sZ = n(194004),
    sq = n(148355),
    s$ = n(3026),
    sQ = n(862482),
    s0 = n(305866),
    s1 = n(847374),
    s2 = n(964486),
    s3 = n(235986),
    s5 = n(624793),
    s6 = n(636537),
    s4 = n(639245),
    s9 = n(87719),
    s8 = n(725807),
    s7 = n(750385),
    re = n(850992),
    rt = n(625494),
    rn = n(698279),
    ri = n(665055),
    rl = n(844749);
function rs(e) {
    (eY.default.track(W.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
        location_section: W.JJy.STICKER_POPOUT,
    }),
        (0, s9.e)());
}
function rr(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(s3.A, {
        children: [
            (0, s.jsx)(sq.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(s3.A, {
                direction: s3.A.Direction.VERTICAL,
                justify: s3.A.Justify.CENTER,
                className: rl.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "text-md/semibold", children: (0, s.jsx)(s$.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function ra(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [a, o, d] = (0, u.yK)(
            [s7.A],
            () => [s7.A.getStickerPack(n.pack_id), !s7.A.hasLoadedStickerPacks, s7.A.isPremiumPack(n.pack_id)],
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
    (0, sX.Sr)(n.pack_id);
    let m = (0, sX.pD)(i),
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
        eY.default.track(W.HAw.OPEN_POPOUT, {
            type: W.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nB.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, s.jsx)(sW.Y0, { className: ri.v0 })
        : (0, s.jsx)(s0.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sW.Uq, {
                  className: ri.Bm,
                  children: [
                      (0, s.jsx)(e7.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                              : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: ri.pQ,
                          children: c.map((e) => (0, s.jsx)(sq.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: ri.j0,
                              children: (0, s.jsx)(
                                  eA.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: J.intl.string(J.t.GPy3Ar),
                                      autoFocus: !0,
                                      onClick: function () {
                                          null != a &&
                                              (d &&
                                                  (function (e) {
                                                      let { stickerPack: t, stickerPickerCategories: n } = e;
                                                      rt._.dispatchToLastSubscribed(W.jej.OPEN_EXPRESSION_PICKER, {
                                                          activeView: rn.kx.STICKER,
                                                      });
                                                      let i = n.findIndex((e) => e.id === t.id);
                                                      -1 !== i && re.bM.setActiveCategoryIndex(i);
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
function ro(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
        [d, c] = r.useState(null),
        [m, h] = r.useState(!1),
        g = G.default.getCurrentUser(),
        p = tQ.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([nY.A], () => nY.A.getGuild(n.guild_id)),
        f = null != x,
        [I, E] = r.useState(!1),
        [v, C] = r.useState(null),
        _ = r.useMemo(
            () => ({
                page: null != i.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
                section: W.JJy.STICKER_POPOUT,
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
                if (null == e || e.features.has(W.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    c(
                        await ((t = n.id),
                        s6.Bo.get({ url: W.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ig.jE)(e.body) : null))
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
                  ? J.intl.string(J.t.fZ0DiG)
                  : J.intl.string(J.t["1f6D9m"])
              : S
                ? J.intl.string(J.t.yHmoR9)
                : J.intl.string(J.t.vZaScH))
        : f
          ? ((t = T ? J.intl.string(J.t.jNphpt) : J.intl.string(J.t.lyD5ZW)),
            (b = !0),
            (k = "Custom Sticker Popout (Upsell)"))
          : S
            ? ((t = J.intl.string(J.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
            : ((t = J.intl.format(J.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (rs(i), l());
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let R = !b && !f && S && p;
    return (r.useEffect(() => {
        let { refreshPositionKey: e } = y.current;
        e();
    }, [m, d]),
    (0, s2.Ay)(() => {
        eY.default.track(W.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, s.jsx)(s0.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sW.Uq, {
                  className: rl.Bm,
                  children: [
                      (function () {
                          async function e() {
                              if (null == d || f) return;
                              l();
                              let e = d.id;
                              try {
                                  (await ih.A.joinGuild(e), ih.A.transitionToGuildSync(e));
                              } catch {}
                          }
                          return (0, s.jsxs)("div", {
                              className: rl.gH,
                              children: [
                                  (0, s.jsx)(rr, { description: t, sticker: n }),
                                  b &&
                                      (0, s.jsx)(s8.A, {
                                          className: rl.lI,
                                          subscriptionTier: nb.pe.TIER_2,
                                          size: sQ.$n.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                          onSubscribeModalClose: (t) => (t ? e() : l()),
                                          postSuccessGuild: f || null == d ? void 0 : d,
                                          premiumModalAnalyticsLocation: _,
                                      }),
                                  R &&
                                      (0, s.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: rl.lI,
                                          children: (0, s.jsx)(eA.$, {
                                              variant: "primary",
                                              size: "sm",
                                              text: J.intl.string(J.t.riu2R5),
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
                                  t = null != d ? s5.GO.createFromDiscoverableGuild(d) : s5.GO.createFromGuildRecord(x);
                              return (0, s.jsxs)("div", {
                                  className: rl.tl,
                                  children: [
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: rl.YW,
                                          children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
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
                                                      className: rl.wK,
                                                      children: (0, s.jsxs)(s3.A, {
                                                          children: [
                                                              (0, s.jsx)(A.E, {
                                                                  className: rl.__invalid_showMoreEmojisLabel,
                                                                  variant: "text-xs/normal",
                                                                  color: "none",
                                                                  children: J.intl.string(J.t.vtH5hn),
                                                              }),
                                                              (0, s.jsx)(s1.a, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: o()(rl.ZB, { [rl.cP]: !I }),
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  I &&
                                                      (0, s.jsx)(s3.A, {
                                                          wrap: s3.A.Wrap.WRAP,
                                                          align: s3.A.Align.START,
                                                          justify: s3.A.Justify.START,
                                                          className: rl.LX,
                                                          children: e.map((e) =>
                                                              (0, s.jsx)(
                                                                  tF.m,
                                                                  {
                                                                      text: e.name,
                                                                      ...sW.Uk,
                                                                      children: (0, s.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: o()(rl.Th, {
                                                                                  [ri.vT]: null != v && v !== e.id,
                                                                              }),
                                                                              onMouseEnter: () => {
                                                                                  C(e.id);
                                                                              },
                                                                              onMouseLeave: () => {
                                                                                  C(null);
                                                                              },
                                                                              children: (0, s.jsx)(sq.A, {
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
        : (0, s.jsx)(sW.Y0, { className: ri.v0 });
}
function rd(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(s0.l, {
        "aria-label": i.name,
        children: (0, s.jsx)(sW.Uq, {
            className: ri.Bm,
            children: (0, s.jsx)(rr, {
                sticker: i,
                description: J.intl.format(J.t.hGWuxU, {
                    openPremiumSettings: () => {
                        (n(), rs(t));
                    },
                }),
            }),
        }),
    });
}
let rc = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, sX.Zq)(t, !0);
    return null != r && (0, lK.FD)(r)
        ? (0, s.jsx)(ra, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lK.Xw)(r)
          ? (0, s.jsx)(ro, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? (0, s.jsx)(rd, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(sW.Y0, {});
};
var ru = n(751686);
let rm = (0, sJ.xI)(sF.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    rh = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, sX.Zq)(t, i),
            { analyticsLocations: m } = (0, I.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: ru.Zl,
                children: [(0, s.jsx)(sz.s, { size: "xs", color: "currentColor", className: ru.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: ru.be,
                children: (0, s.jsx)(sY.Y, {
                    align: "center",
                    animation: sY.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(rc, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tF.m, {
                            ...sW.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, sK.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nB.Ay.trackWithMetadata(W.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nb.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sZ.Tw)(e.format_type),
                                        is_custom: (0, sZ.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eO.D, {
                                innerRef: l,
                                className: ru.q7,
                                onClick: (e) => {
                                    (o(!a), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(sq.A, { isInteracting: i, size: rm, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var rg = n(406704),
    rp = n(531142),
    rA = n(140735),
    rx = n(442433),
    rf = n(143413),
    rI = n(321045),
    rE = n(456874),
    rv = n(707539),
    rC = n(80682),
    r_ = n(521981),
    rj = n(448368),
    rN = n(943220),
    ry = n(838541);
function rT(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [O.A],
            () => ({ isBlocked: O.A.isBlockedForMessage(t), isIgnored: O.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, rC.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, r_.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        d = (0, sH.IL)(n);
    return (0, s.jsxs)("div", {
        className: st.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: st.FJ }),
            (0, s.jsx)(rN.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: st.Au,
                children: d
                    ? (0, s.jsx)("span", { className: st.dp, children: J.intl.string(J.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, rj.o)(e, t, n, i, st.tP, {
                              trailingIconClass: st._v,
                              leadingIconClass: st.a5,
                              iconSize: ry.eJ,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [a, r ?? (0, s.jsx)("span", { className: st.dp, children: l }), o],
                          });
                      })(t, o, i, l),
            }),
        ],
    });
}
var rS = n(747926),
    rb = n(650583),
    rk = n(77462);
function rR(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([D.A], () => D.A.getChannel(id.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(rL, { channel: i, compact: n, isSystemMessage: (0, rf.A)(t) });
}
function rL(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, ia.Ay)(a),
        h = (0, u.bG)([rE.A], () => rE.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([rE.A], () => rE.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([rE.A], () => rE.A.getCount(t.id))),
            (r = (0, rv.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == l || 0 === l
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: rk.vE, children: (0, rv.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(rT, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: rk.vE, children: (0, rv.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(rk.GI, { [rk.E]: !d, [rk.E_]: c }) }),
            (0, s.jsx)(eO.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, rS.JA)(a, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === rb.dh.SPACE || e.key === rb.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, rS.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, rx.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("947502"),
                            n.e("603998"),
                            n.e("343266"),
                            n.e("965789"),
                            n.e("691671"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("896804"),
                            n.e("21106"),
                            n.e("400744"),
                            n.e("421060"),
                            n.e("65200"),
                            n.e("699011"),
                            n.e("285802"),
                            n.e("703869"),
                            n.e("51212"),
                            n.e("584615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": J.intl.string(J.t["8ipxiY"]),
                className: o()(rk.kL, { [rk.og]: c }),
                children: (0, s.jsxs)(rp.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rk.kq,
                            children: [
                                (0, s.jsx)(rA.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: rk.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: rk.lO,
                                    "aria-hidden": !p,
                                    children: (0, rI.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: rk.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var rP = n(168543),
    rM = n(321191),
    rD = n(215530),
    rO = n(331322),
    rU = n(562153),
    rG = n(183555),
    rw = n(999291),
    rB = n(391210),
    rV = n(249790),
    rH = n(254828),
    rF = n(783123),
    rz = n(213994),
    rY = n(753504);
function rK(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: r } = e,
        a = (0, u.bG)([G.default], () => G.default.getUser(t)),
        o = (0, u.bG)([O.A], () => O.A.isBlocked(t)),
        d = rU.Ay.useName(n, i, a),
        c = (0, rw.Ay)(t, n),
        [m, h] = (0, rB.A)(),
        { analyticsLocations: g } = (0, I.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        p = (0, rG.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == a
        ? null
        : (0, s.jsx)(I.f5, {
              value: g,
              children: (0, s.jsx)(rG.of, {
                  value: p,
                  fetchStartedAt: c?.fetchStartedAt,
                  fetchEndedAt: c?.fetchEndedAt,
                  isLoaded: c?.isLoaded === !0 && m,
                  children: (0, s.jsx)(rz.A, {
                      user: a,
                      displayProfile: null,
                      size: "sm",
                      className: rY.k,
                      containerRef: h,
                      headingText: J.intl.formatToPlainString(J.t["8yRya1"], { name: d }),
                      children: (0, s.jsxs)(rO.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(rO.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rV.A, { user: a, guildId: n }),
                                      (0, s.jsx)(e7.D, {
                                          variant: "heading-lg/bold",
                                          children: J.intl.string(J.t.b33pLD),
                                      }),
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          children: J.intl.format(o ? J.t["8F+WNz"] : J.t["/cZp5s"], { username: d }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(rO.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rF.A, { isBlocked: o, onClick: r }),
                                      (0, s.jsx)(rH.A, { userId: t, onClick: r }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var rW = n(273147),
    rJ = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function rX(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    nB.Ay.trackWithMetadata(W.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function rZ(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [a, o] = (0, rD.A)(t),
        d = r.useRef(!1),
        c = (0, u.bG)(
            [G.default, rM.A],
            () => {
                if (rM.A.isFetchingProfile(t, n ?? void 0) || null != G.default.getUser(t)) return null;
                let e = rM.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? rJ.NO_USER_RECORD : null;
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
                rX({
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
        ? (0, s.jsx)(rK, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(rW.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class rq extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (ns.A.captureException(e),
            rX({
                userId: this.props.userId,
                reason: rJ.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function r$(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, rP.c)("UserProfileEmbed")
        ? (0, s.jsx)(rq, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(rZ, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var rQ = n(383233),
    r0 = n(834942),
    r1 = n(644447),
    r2 = n(659674),
    r3 = n(998218),
    r5 = n(5095),
    r6 = n(294520),
    r4 = n(320095),
    r9 = n(863439),
    r8 = n(707985),
    r7 = n(730852),
    ae = n(265422),
    at = n(537547);
function an(e) {
    let { guild: t, channel: n, message: i } = e,
        l = U.A.getGuildId(),
        a = ec.Ay.getChannelId(l),
        o = r.useCallback(() => {
            (eY.default.track(W.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, ae.i)(t.id, n.id),
                r7.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(i5.A.Channel, { channel: n });
    return (0, s.jsx)(i5.A, {
        children: (0, s.jsxs)(i5.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: lu.iH,
                    children: [
                        (0, s.jsx)(i5.A.Icon, { guild: t }),
                        (0, s.jsx)(i5.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: lu.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: lu.E3,
                                        children: (0, s.jsx)(at.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: lu.UD,
                    children: (0, s.jsx)(eA.$, {
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
function ai(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = D.A.getChannel(l),
        a = nY.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && tl.A.can(W.xBc.VIEW_CHANNEL, r) && tl.A.can(W.xBc.CONNECT, r)
        ? (0, s.jsx)(an, { guild: a, channel: r, message: n })
        : null;
}
var al = n(789645),
    as = n(298236),
    ar = n(953756),
    aa = n(564107),
    ao = n(216763),
    ad = n(359886);
function ac(e) {
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
        [m, h] = (0, ar.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(aa.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(as.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(ar.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(ar.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(ao.O0, ad.k, ad.z, { [ao.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eO.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: ao.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, s.jsx)(al.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, lx.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var au = n(451988),
    am = n(261958),
    ah = n(212245),
    ag = n(775602),
    ap = n(62583),
    aA = n(956549),
    ax = n(550151),
    af = n(392054),
    aI = n(853390),
    aE = n(290863),
    av = n(811024),
    aC = n(818023),
    a_ = n(555375);
let aj = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, lD.j)(),
        s = (0, u.bG)([ag.Ay], () => ag.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new au.IX();
            return (
                e.start(a ? 15 * nx.A.Millis.SECOND : nx.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nx.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, aI.fU)(n)
    );
});
aj.displayName = "ActivityRuntimeCounter";
let aN = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, ah.p)(),
        m = (0, u.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([M.default], () => M.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: E,
        } = (0, u.cf)(
            [eu.Ay],
            () => ({
                embeddedActivity: eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: eu.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eu.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        v = p?.userIds,
        C = (0, u.yK)(
            [G.default],
            () =>
                Array.from(v ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(iB.Vq),
            [v],
        ),
        _ = (0, u.bG)(
            [aE.A],
            () => {
                if (null == v) return null;
                for (let e of v) {
                    let t = aE.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, v],
        ),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new i6.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = aC.Gl), e);
        }, [n]),
        y = (0, ax.vG)({ userId: g, channelId: i, application: N }),
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
                                text: s ? J.intl.string(J.t.RscU7I) : J.intl.string(J.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, av.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== ax.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case ax.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case ax.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case ax.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case ax.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case ax.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case ax.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case ax.Gy.NO_CHANNEL:
                                case ax.Gy.NO_GUILD:
                                case ax.Gy.NO_USER:
                                case ax.Gy.IS_AFK_CHANNEL:
                                    e = J.intl.string(J.t.Etp6uI);
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
        (eY.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: T,
            cta: "Play",
        }),
            T
                ? await (0, aA.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                      commandOrigin: af.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, ap.A)({
                      applicationId: p.applicationId,
                      activityChannelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: b,
                  }));
    }
    let L = S.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        P = (0, ee.F)(N, () => {
            eY.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        O = w.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let U = C.length,
        B = _?.timestamps?.start ?? _?.created_at,
        V = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case W.$pd.STREAMING:
                    return { text: J.intl.formatToPlainString(J.t.tyCw2q, { count: n }), Icon: F.o };
                case W.$pd.LISTENING:
                    return { text: J.intl.formatToPlainString(J.t["2l8yka"], { count: n }), Icon: z.T };
                default:
                    return { text: J.intl.formatToPlainString(J.t.yJj035, { count: n }), Icon: Y.GameControllerIcon };
            }
        })({ activity: _, activityUsersCount: U }),
        K = [
            {
                label: S.text,
                trackingArea: q.kY.PLAY,
                onClick: R,
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
            className: a_.QR,
            children: T
                ? (0, s.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: L })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: a_.oL,
                                  children: [
                                      null != B &&
                                          (0, s.jsxs)("div", {
                                              className: a_.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: a_.y9,
                                                      children: (0, s.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(aj, { start: B }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(a_.DT, a_.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(am.u, { size: "xxs", color: "currentColor" }),
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
                          U > 0 && (0, s.jsx)(Z, { activityUsers: C, guildId: l, activityText: V.text }),
                      ],
                  }),
        }),
        actions: K,
        onClickContent: P,
        trackingConfig: {
            id: n.id,
            linkType: et.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: T,
        },
    });
});
var ay = n(164664),
    aT = n(439401),
    aS = n(657044),
    ab = n(863574),
    ak = n(707606),
    aR = n(456412),
    aL = n(242874),
    aP = n(499454),
    aM = n(180522),
    aD = n(928550),
    aO = n(30793),
    aU = n(189081);
function aG(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, lr.A)(i),
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
var aw = n(738533),
    aB = n(45938),
    aV = n(615396),
    aH = n(427262),
    aF = n(561028),
    az = n(820284),
    aY = n(674378),
    aK = n(598429),
    aW = n(979604);
function aJ(e) {
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
        A = (0, u.bG)([aU.A], () => aU.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        I = (0, u.bG)([eF.A], () => null != f && !eF.A.didFetchingSkuFail(f));
    return null != A && (0, aY.XZ)(A)
        ? (0, s.jsx)(aW.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : I
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(aK.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function aX(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t0.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var aZ = n(176140),
    aq =
        (((l = aq || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function a$(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(aZ.nM, t),
        children: [
            (0, s.jsx)(aS._, { size: "md", color: "currentColor", className: aZ.Kk }),
            J.intl.string(J.t["7eicAO"]),
        ],
    });
}
function aQ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(aZ.nM, n),
        children: [(0, s.jsx)(tf.t, { size: "md", color: "currentColor", className: aZ.Kk }), aX(t)],
    });
}
function a0(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(aZ.EQ, n), children: t.getDisplaySalePercentage() });
}
function a1(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(aZ.I8, n), children: aX(t, !1) });
}
function a2(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: aX(t) });
}
function a3(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(aZ.nM, n),
        children: [(0, s.jsx)(a0, { sku: t }), (0, s.jsx)(a1, { sku: t }), (0, s.jsx)(a2, { sku: t })],
    });
}
function a5(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
}
class a6 extends r.PureComponent {
    static Types = aq;
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
                return (0, s.jsx)(a5, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(a$, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(aQ, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(a3, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(a2, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(a5, { className: t });
            case 3:
                return (0, s.jsx)(aQ, { sku: n, className: o()(aZ.OB, t) });
            case 2:
                return (0, s.jsx)(a3, { sku: n, className: o()(aZ.dk, t) });
            default:
                return (0, s.jsx)(a2, { className: o()(aZ.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(a5, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: aZ.nM,
                            children: [(0, s.jsx)(a2, { sku: i }), (0, s.jsx)(a0, { sku: i })],
                        }),
                        (0, s.jsx)(a1, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(a2, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(aZ.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, aZ.Pl);
            case 3:
                return this.renderGeneric(e, aZ.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, aZ.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var a4 = n(301568);
let a9 = {
    [W.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, lr.A)(r),
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
                ...(0, lr.A)(r),
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
                ...(0, lr.A)(r),
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
function a8(e) {
    let { operatingSystem: t, className: n } = e,
        i = a9[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tF.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function a7(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(a4.I, n),
        children: t.map((e) => (0, s.jsx)(a8, { operatingSystem: e, className: o()(a4.A, i) }, e)),
    });
}
var oe = n(198985);
let ot = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(oe.T, t),
        children: (0, s.jsx)("span", { className: oe.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var on = n(992856);
let oi = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(on.T, t),
        children: (0, s.jsx)("span", { className: on.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var ol = n(615300),
    os = n(868285),
    or = n(358618),
    oa = n(983851),
    oo = n(133296),
    od = n(607470),
    oc = n(856328);
class ou extends r.Component {
    _animatedValue = new ol.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), ol.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        ol.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(ol.A.img, {
            className: o()({ [oc.YC]: i }, t),
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
            ? (0, s.jsx)(ol.A.div, { className: o()(oc.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(ol.A.div, {
                  className: o()(l ? oc.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tY.y, {
                                className: oc.u1,
                                itemClassName: oc.$N,
                                type: tY.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class om extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new au.Ep();
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
            m = a ? or._ : oa.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                i2.Fr
                    ? null
                    : (0, s.jsx)(od.A, {
                          className: o()(oc.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(os.F, {
                    children: l && e ? null : (0, s.jsx)(ou, { className: o()(oc.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eO.D, {
                    className: o()(oc.b4, { [oc.HY]: l && e, [oc.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: oc.i2 }) : null,
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
            ? (0, s.jsx)(ou, { className: o()(oc.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(ou, { className: o()(oc.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(ou, { className: o()(oc.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(oo.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: oc.mZ,
                  disable: !e,
                  children: (0, s.jsx)(os.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(oc.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var oh = n(366523),
    og = n(622413),
    op = n(435919);
class oA extends r.PureComponent {
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
                  className: op.ED,
                  children: [
                      (0, s.jsx)(a6, {
                          type: a6.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? op.ae : op.Ek,
                      }),
                      (0, s.jsx)(a7, { systems: [W.uje.WINDOWS], className: op.iD }),
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
        return (0, sR.bF)(l)
            ? (0, s.jsx)(oh.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: op.A$,
                  backgroundImageClassName: op.iZ,
                  foregroundImageClassName: op.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(om, {
                          className: o()(op.H1, { [op.ZC]: a }),
                          video: null != d.previewVideo ? (0, sk.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, sk.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: op.ZI,
                          splashPlaceholderClassName: op.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(oi, { className: o()(op.LJ, { [op.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(ot, { className: o()(op.LJ, { [op.V9]: e }) })
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
            d = o ? ab.ug : og.A;
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
var ox = n(587895),
    of = n(976150);
class oI extends r.Component {
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
            className: of.h,
            children: (0, s.jsx)(eA.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, sb.pX)(W.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > ab.Tm;
        return (0, s.jsx)(oA, {
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
        if (null != r) return (0, s.jsx)("div", { className: of.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(W.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: of.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(aJ, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: of.h,
                          source: W.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(a6, { type: a6.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > ab.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(ab.Wb, { isHorizontal: r })
            : e.productLine === W.EZt.PREMIUM
              ? (0, s.jsx)(az.A, {
                    section: W.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(aF.N_, {
                        onClick: this.handleLinkClick,
                        to: W.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(az.A, { section: W.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let oE = [eF.A, aU.A, ez.A];
function ov(e) {
    let { skuId: t } = e,
        n = eF.A.get(t),
        i = null != n ? ox.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eF.A.didFetchingSkuFail(t),
        inLibrary: null != n && aU.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? ez.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? aU.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let oC = (0, aR.A)((0, ak.A)(oI)),
    o_ = u.Ay.connectStores(oE, ov)(oC),
    oj = (0, ak.A)(u.Ay.connectStores(oE, ov)(oI));
var oN = n(866022);
function oy(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eO.D, {
        className: oN.kP,
        onClick: t,
        children: [
            (0, s.jsx)(aS._, { size: "md", color: "currentColor", className: oN.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class oT extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= ab.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === W.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, eC.openUserSettings)(ev.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? J.intl.string(J.t.mT9B49) : J.intl.string(J.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(eA.$, {
                  variant: "primary",
                  size: "sm",
                  text: J.intl.string(J.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(eA.$, { variant: "primary", size: "sm", text: J.intl.string(J.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? J.intl.string(J.t.QXgO5w)
            : this.props.isSelfGift
              ? J.intl.string(J.t.eEM3dq)
              : J.intl.string(J.t.tB8S6u);
    render() {
        return (0, s.jsx)(ab.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class oS extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: W.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        (e.preventDefault(),
            null != t && t.isHidden()
                ? (0, sb.pX)(W.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, sb.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, eC.openUserSettings)(ev.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eY.default.track(W.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: W.ZSU.BUTTON_CTA },
            }));
        let r = l !== W.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, aP.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eY.default.track(W.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            aw.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, sR.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, sU.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, eC.openUserSettings)(ev.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(W.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(s3.A, {
            justify: s3.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(s3.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(oy, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(s3.A, {
                    align: s3.A.Align.END,
                    justify: s3.A.Justify.END,
                    className: oN.yu,
                    direction: s3.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(l6()(), "h") }),
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
                children: (0, s.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: J.intl.string(J.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tQ.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t6.hU)(e) ? oN.UQ : void 0,
            children: (0, s.jsx)(eA.$, {
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
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: aH.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, sR.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t6.hU)(e) || (0, sR.bF)(i)
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
                    ? J.intl.format(J.t.l3VxgG, { username: aH.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: aH.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nb.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: aH.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nb.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: aH.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nb.Wx.includes(e.giftStyle),
            i = o()(oN.gB, { [oN.El]: n, [oN.by]: t >= ab.Tm }),
            l = o()({ [oN.gc]: n, [oN.Ei]: n && t >= ab.Tm, [oN.ww]: !n, [oN.wy]: !n && t >= ab.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(aG, { className: oN.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(aM.A, {
                        defaultAnimationState: e.redeemed ? aL.oA.LOOP : aL.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(eA.$, {
            variant: "primary",
            size: "sm",
            text: J.intl.string(J.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, sR.bF)(n);
        return (0, s.jsx)(oj, {
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
            return (0, s.jsx)(oj, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: W.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(oT, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(ab.Wb, { isHorizontal: i >= ab.Tm });
        return (0, t6.hU)(e)
            ? (0, s.jsx)("div", { className: oN.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let ob = (0, aR.A)((0, ak.A)(oS)),
    ok = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([aO.A], () => {
                let e = aO.A.getError(t);
                return { giftCode: aO.A.get(t), resolved: aO.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eF.A], () => (null != i ? eF.A.get(i.skuId) : null)),
            d = (0, u.bG)([aU.A], () =>
                null != o && i?.entitlementBranches != null ? aB.YI(i.entitlementBranches, o, aU.A) : null,
            ),
            c = (0, sS.h)(o?.applicationId),
            m = null != o && (0, sR.bF)(o) && i?.redeemed === !0,
            [h] = (0, aD.L_)(m ? c?.id : null),
            g = (0, aV.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([M.default], () => (null != i ? M.default.getId() === i.userId : M.default.getId() === n.id));
        return (0, s.jsx)(ob, {
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
var oR = n(376728),
    oL = n(107123),
    oP = n(698441),
    oM = n(427080),
    oD = n(346542),
    oO = n(800772),
    oU = n(95701),
    oG = n(299091),
    ow = n(149790);
let oB = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oV(e) {
    let { guildId: t, location: n } = e;
    return oB.getCurrentConfig({ guildId: t, location: n });
}
var oH = n(713654);
function oF() {
    return (0, s.jsxs)(i5.A, {
        children: [
            (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, s.jsx)(i5.A.Body, { resolving: !0 }),
        ],
    });
}
var oz = n(172799),
    oY = n(624394);
function oK(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: oY.MY,
                        children: [
                            (0, s.jsx)("i", { className: oY.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oY.U9,
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
                        className: oY.MY,
                        children: [
                            (0, s.jsx)("i", { className: oY.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oY.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: oY.rc, children: l })
    );
}
function oW(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, ia.Ay)(t);
    if (null != t && null != n) {
        let e = (0, oH.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(oY.Ix, { [oY.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: oY.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(s$.A, {
                    children: (0, s.jsx)(A.E, {
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
              className: o()(oY.Ix, { [oY.v6]: i }),
              children: (0, s.jsx)(s$.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oJ(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    eS()(l === oz.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([D.A], () => D.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e5.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(oX, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oX(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    eS()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eY.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([nY.A], () => (null != i.guild ? nY.A.getGuild(i.guild.id) : null), [i]),
        A = (0, u.bG)(
            [eu.Ay],
            () => i?.channel != null && eu.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        x = (0, u.bG)([eu.Ay], () =>
            (i.channel?.id != null ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        E = (0, u.bG)([tl.A], () => null != d && tl.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED),
        C = (0, u.yK)(
            [eu.Ay],
            () =>
                null != d
                    ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([G.default], () => C.map((e) => G.default.getUser(e)).filter((e) => null != e), [C]),
        j = r.useCallback(() => {
            ((0, oR.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lh._U)(i.code, l.id),
                },
                v,
            ),
                oR.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                }));
        }, [i, l, v, a]),
        N = i.state === W.elq.ACCEPTING,
        y = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(oF, {});
        p = (0, ow.DY)(i.guild);
    }
    t = y
        ? A
            ? J.intl.string(J.t.DPfdsq)
            : x
              ? J.intl.string(J.t.sqe0hj)
              : J.intl.string(J.t.RscU7I)
        : J.intl.string(J.t["2BP08E"]);
    let T = (y && !E) || (y && A);
    return (E || (n = J.intl.string(J.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(I.f5, {
              value: v,
              children: (0, s.jsx)(oZ, {
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
function oZ(e) {
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
        E = w.Ay.getApplicationIconURL({ id: t.id, icon: I, bot: f }),
        v = (0, ee.F)(t),
        C = (0, Q.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? q.kY.PLAY : q.kY.JOIN_SERVER,
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
        iconSrc: E,
        ...C,
        onClickBanner: v,
        info: (0, s.jsxs)("div", {
            className: oY.QR,
            children: [
                (0, s.jsx)(oW, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(Z, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(oK, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
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
var oq = n(4274);
function o$(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([M.default], () => M.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        l = (0, oq.g)(n?.code);
    return (0, s.jsxs)(i5.A, {
        children: [
            (0, s.jsx)(i5.A.Header, { text: i }),
            (0, s.jsxs)(i5.A.Body, {
                children: [
                    (0, s.jsx)(i5.A.Icon, { expired: !0 }),
                    (0, s.jsx)(i5.A.Info, {
                        expired: !0,
                        title: l?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var oQ = n(308528),
    o0 = n(889227);
function o1(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([M.default], () => M.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === W.elq.ACCEPTING,
        { analyticsLocations: d } = (0, I.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([O.A], () => null != t.inviter && O.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), oQ.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, oR.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lh._U)(t.code, n.id),
                    },
                    d,
                ));
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, oR.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lh._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            oR.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = J.intl.string(J.t.ib7Ng1),
        A = "active";
    c
        ? ((p = J.intl.string(J.t.xhxnPn)), (A = "secondary"))
        : a && ((p = J.intl.string(J.t.ib7Ng1)), (A = "secondary"));
    let x = a ? J.intl.string(J.t.eQyu1F) : J.intl.string(J.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        v = null != t.inviter ? aH.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(i5.A, {
        children: [
            (0, s.jsx)(i5.A.Header, { text: x }),
            (0, s.jsxs)(i5.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lu.iH,
                        children: [
                            (0, s.jsx)(i5.A.Icon, { user: new o0.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(i5.A.Info, { title: E, onClick: c ? g : void 0, children: v }),
                        ],
                    }),
                    (0, s.jsx)(eA.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var o2 = n(342952);
function o3(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === W.elq.ACCEPTING,
        c = (0, u.bG)([D.A], () => (null != t.channel ? D.A.getChannel(t.channel.id) : null), [t]);
    eS()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = null != c,
        g = r.useRef(null),
        p = r.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, oR.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lh._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, a]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, oU.OY)(e.channel),
                    i = (0, ia.Bi)(t);
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
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, ia.Bi)(t),
                    i = G.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, c ?? null);
    if (null == x) return (0, s.jsx)(oF, {});
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
                                    let t = O.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof o0.A ? e : G.default.getUser(e.id);
                                    if (null != n) {
                                        let e = aH.Ay.getName(n);
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
                                ? J.intl.formatToPlainString(J.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
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
        })(x, o, h),
        { channel: j, recipients: N } = x,
        y = N.map((e) =>
            e instanceof o0.A
                ? e
                : (G.default.getUser(e.id) ?? new o0.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        T = null != j.icon,
        S = J.intl.format(J.t.zRl6XR, { count: N.length });
    return (0, s.jsxs)(i5.A, {
        className: lu.TV,
        children: [
            (0, s.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: lu.JO,
                lineClamp: 1,
                children: v,
            }),
            (0, s.jsxs)(i5.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${lu.iH} ${lu.mx}`,
                        children: [
                            T &&
                                (0, s.jsx)(i5.A.Icon, {
                                    channel: j,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tE._3.SIZE_48,
                                }),
                            (0, s.jsx)(i5.A.Info, {
                                title: (0, s.jsx)(s$.A, { children: E }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: lu.er,
                                    children:
                                        y.length > 0
                                            ? (0, s.jsx)(eO.D, {
                                                  className: lu.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: S,
                                              })
                                            : S,
                                }),
                            }),
                            y.length > 0 &&
                                (0, s.jsx)(o2.A, {
                                    ref: g,
                                    className: lu.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tE._3.SIZE_32,
                                    channelId: j.id,
                                    popoutClassName: lu.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(eA.$, { onClick: p, loading: d, disabled: h, variant: _, text: C, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var o5 = n(821418),
    o6 = n(340837);
let o4 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, o6.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, o5.Q.IS_GUEST_INVITE)
    );
};
var o9 = n(517905);
function o8(e) {
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
        _ = m.state === W.elq.ACCEPTING,
        j = null != E ? (0, oU.OY)(E) : null,
        N = null != d,
        y = null != j,
        T = null != j && j.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, o5.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(W.GuildFeatures.HUB) ?? !1,
        R = d?.id,
        { analyticsLocations: L } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e4.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, lh._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [P, M] = r.useState(!1),
        D = r.useCallback(() => M(!1), []),
        O = r.useRef(null),
        U = (0, u.bG)([lM.Ay], () => o4([lM.Ay], m)),
        G = r.useCallback(() => {
            (M(!0), (0, oR.Pq)(R, "show profile", L));
        }, [R, L]),
        w = r.useCallback(() => {
            let e = "noop";
            (N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, oR.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, lh._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(oF, {});
        (d = ow.DY(m.guild)).premiumTier = m.guild.premium_tier ?? W.TVA.NONE;
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
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: S, isHubGuild: k, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: lu.FA,
            children: [
                (0, s.jsx)(o9.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: P,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, s.jsx)(i5.A.GuildName, { guild: d, ref: O }),
                }),
                (0, s.jsx)("span", {
                    className: lu.E3,
                    children: (0, s.jsx)(at.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(tF.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, s.jsx)(n0.CircleInformationIcon, { size: "md", color: "currentColor", className: lu.G }),
            })),
        b
            ? ((i = (0, s.jsx)(i5.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: lu.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: lu.E3,
                          children: (0, s.jsx)(at.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != v && v >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(i5.A.Data, { members: v, membersOnline: C }))
              : y && (t = (0, s.jsx)(i5.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(i5.A, {
            children: [
                (0, s.jsx)(i5.A.GuildSplash, { guild: d }),
                (0, s.jsx)(i5.A.Header, { text: B, extra: l }),
                (0, s.jsxs)(i5.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lu.iH,
                            children: [
                                (0, s.jsx)(i5.A.Icon, { guild: d }),
                                (0, s.jsx)(i5.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: lu.UD,
                            children: (0, s.jsx)(eA.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? T
                                        ? J.intl.string(J.t["7vb2cc"])
                                        : J.intl.string(J.t.gpqgah)
                                    : N
                                      ? J.intl.string(J.t.cEnaWx)
                                      : J.intl.string(J.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(W.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: lu.me }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
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
var o7 = n(9994),
    de = n(461888),
    dt = n(263908),
    dn = n(123213),
    di = n(963402),
    dl = n(42780),
    ds = n(897288),
    dr = n(151101);
function da(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = r.useId(),
        [m, h] = r.useState(!0),
        [g, p] = r.useState(!1),
        A = t.state === W.elq.ACCEPTING,
        x = (0, u.bG)([ag.Ay], () => ag.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, I.Ay)(f.A.INVITE_EMBED);
    ((0, e4.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lh._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]));
    let v = (0, o7.oO)(t),
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
    if (null == v) return (0, s.jsx)(oF, {});
    let N = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: dr.uY,
                ref: d,
                children: [
                    (0, s.jsx)(dl.J$, { profile: v, className: dr.vK }),
                    (0, s.jsx)(dl.CG, { profile: v }),
                    (0, s.jsx)(di.A, { profile: v, disableGuildNameClick: !g, guildNameId: c }),
                    (0, s.jsx)(dt.P, { profile: v, className: dr.rb }),
                    (0, s.jsx)(ds.A, {
                        guild: null != t.guild ? (0, ow.DY)(t.guild) : null,
                        roles: t.roles,
                        className: dr.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: dr.Se,
                      children: (0, s.jsx)(su.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: _,
                          text: J.intl.string(J.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(dr.qr, { [dr.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: dr.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(dr.z8, { [dr.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: dr.UD,
                            children: (0, s.jsx)(dd, {
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
              className: o()(dr.Gg, { [dr.vk]: m }),
              onClick: C,
              style: j,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: N,
          })
        : (0, s.jsx)("div", { className: dr.Gg, role: "group", "aria-labelledby": c, children: N });
}
function dd(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, de.Ay)(n, de.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, oR.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lh._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(dn.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
function dc(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        a = r.useId();
    return (
        (0, u.bG)([M.default], () => M.default.getId()) === i.id
            ? ((n = J.intl.string(J.t.HfUzlI)), (t = J.intl.string(J.t.y7uT5j)))
            : l
              ? ((n = J.intl.string(J.t.OMfs8i)), (t = J.intl.string(J.t["57nBty"])))
              : ((n = J.intl.string(J.t.OMfs8i)), (t = J.intl.string(J.t["p/zTYn"]))),
        (0, s.jsxs)(i5.A, {
            className: lu.TV,
            role: "group",
            "aria-labelledby": a,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lu.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(i5.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: lu.iH,
                        children: [
                            (0, s.jsx)(i5.A.Icon, { expired: !0 }),
                            (0, s.jsx)(i5.A.Info, {
                                expired: !0,
                                title: J.intl.string(J.t["Jhx/ud"]),
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
var du = n(616356);
function dm(e) {
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
            [du.A],
            () => (null != n && null != n.target_user ? du.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [du.A],
            () => (null != n && null != n.target_user ? du.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e4.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lh._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === oz.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eS()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: v } = n;
    eS()(E === oz.yV.STREAM && null != v, "invalid streaming invite");
    let C = i === v.id,
        _ = n.state === W.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            (A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, oR.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, lh._U)(n.code, a.id),
                    },
                    p,
                ));
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(oF, {});
        l = (0, ow.DY)(n.guild);
    }
    let y = null != n.channel ? (0, oU.OY)(n.channel) : null,
        T = aH.Ay.getName(v),
        S = A || (!x && N),
        b = J.intl.string(J.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = C ? J.intl.string(J.t.oBLoZJ) : J.intl.formatToPlainString(J.t["0QJmA+"], { name: T })),
          (b = J.intl.string(J.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = J.intl.string(J.t.Q1W99y)), (k = "secondary")),
          (t = C ? J.intl.string(J.t["4hyaHu"]) : J.intl.formatToPlainString(J.t.QmlLEq, { name: T })));
    let R =
        m === l.id && null != y
            ? (0, s.jsx)(i5.A.Channel, { channel: y })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(i5.A, {
        children: [
            (0, s.jsx)(i5.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, s.jsxs)(i5.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lu.iH,
                        children: [
                            (0, s.jsx)(i5.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(i5.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(eA.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var dh = n(683063),
    dg = n(364522),
    dp = n(952270),
    dA = n(52074),
    dx = n(725613),
    df = n(693879),
    dI = n(145497),
    dE = n(936520),
    dv = n(977997),
    dC = n(607567),
    d_ = n(923710);
function dj(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, ia.Ay)(i),
        o = (0, u.bG)([nY.A], () => nY.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([dv.A], () => dv.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [dC.Ay],
            () => ({ voiceStates: null != i.guild_id ? dC.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([dx.A], () => dx.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || dx.A.hasRequestedStartTimes(i.guild_id) || (0, dA.U)(i.guild_id);
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
        C = (0, lh._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, e4.A)({
        name: e6.ImpressionNames.VOICE_INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
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
            (0, l1.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            (l(),
                (0, oR.he)(
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
        className: d_.kL,
        children: [
            (0, s.jsxs)("div", {
                className: d_.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: d_.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: d_.yW,
                                children: [
                                    (0, s.jsx)(oa.H, {
                                        className: d_.p,
                                        color:
                                            c.length > 0 ? nG.A.colors.TEXT_FEEDBACK_POSITIVE : nG.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(dh.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(dI.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eO.D, {
                                            className: d_.HA,
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
                                ? (0, s.jsx)(df.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: d_.Ao,
                              children: [
                                  (0, s.jsx)(dg.Ip, {
                                      ref: E,
                                      className: d_.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              dE.Ay,
                                              {
                                                  className: d_.Eq,
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
                                  (0, s.jsx)("div", { ref: p, className: d_.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: d_.p$,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: d_.TB,
                        children: (0, s.jsx)(eA.$, {
                            onClick: N,
                            icon: oa.H,
                            variant: "active",
                            fullWidth: !0,
                            text: J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: d_.qr,
                children: [
                    (0, s.jsx)(dp.EyeSlashIcon, { size: "custom", color: "currentColor", className: d_.Dq }),
                    (0, s.jsx)(A.E, {
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
function dN(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)(
            [D.A, tl.A],
            () => {
                let e = D.A.getChannel(r);
                return null != e && tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
            },
            [r],
        ),
        o = (0, u.bG)([nY.A], () => null != nY.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(da, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(dj, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var dy = n(652896),
    dT = n(834757),
    dS = n(427358),
    db = n(323605);
function dk(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, oH.gU)(n, i),
        a = (0, ia.Ay)(n);
    return (0, s.jsxs)(eO.D, {
        onClick: l,
        className: o()(db.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: db.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(s$.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(n4._, { className: db.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var dR = n(202091),
    dL = n(717421),
    dP = n(297413),
    dM = n(528944);
function dD(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(lP.A, {
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
                        children: (0, s.jsx)(dP.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var dO = n(480887);
function dU(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(dG, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(sY.Y, { renderPopout: () => o(i), ...a });
}
function dG(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, tW.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: dO.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(dg.Ip, {
                className: dO.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        dD,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: rU.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var dw = n(768920);
let dB = { mass: 1, tension: 170, friction: 26 };
function dV(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, dL.z)(() => ({ x: 0, y: 0, scale: 1, config: dB }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(dR.animated.div, {
            ref: a,
            className: o()(dw.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, dR.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: dw.my,
                            children: (0, s.jsx)(tF.m, {
                                text: rU.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tI.eu, {
                                    src: (function (e, t, n) {
                                        let i = lM.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, w.xT)(i);
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
                c && (0, s.jsx)(dH, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function dH(e) {
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
    return (0, s.jsx)(dU, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(dw.my, dw.k2),
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
var dF = n(183751);
function dz(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = ow.DY(t.guild));
    let m = null != t.channel ? (0, oU.OY)(t.channel) : null;
    (eS()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eS()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [tl.A, D.A],
            () => {
                let e = D.A.getChannel(m.id);
                return null == e || tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([dC.Ay], () => (h ? dC.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
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
        })({ currentUserId: (0, u.bG)([M.default], () => M.default.getId()), author: n.author, voiceStates: g }),
        E = (0, u.bG)([nY.A], () => null != nY.A.getGuild(c.id), [c.id]),
        v = (0, u.bG)([ec.Ay], () => ec.Ay.getVoiceChannelId() === m.id, [m.id]),
        C = (0, u.bG)([lM.Ay], () => o4([lM.Ay], t), [t]),
        _ = t.state === W.elq.ACCEPTING,
        { analyticsLocations: j } = (0, I.Ay)(f.A.INVITE_EMBED),
        N = (0, lh._U)(t.code, n.id),
        y = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [du.A, dS.A],
                () => {
                    if ((0, oD.G4)(t) && null != t.target_user) {
                        let e = du.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = du.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let r = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === r.length) return null;
                    for (let e of [...r].sort((e, t) => {
                        let n = dS.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (dS.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = du.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        T = (0, dT.AO)(y),
        S = null != y,
        b = r.useCallback(() => {
            let e = E ? "transition" : "accept";
            (E ? l() : a(),
                (0, oR.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: T?.id ?? void 0,
                        stream_key: null != y ? (0, dy._z)(y) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                ));
        }, [t, n, j, N, E, T, y, g.length, l, a]),
        k = r.useCallback(() => {
            (E ? (0, l1.iN)(m.id) : a({ autoJoin: !1 }),
                eY.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: E,
                    application_id: T?.id ?? null,
                    stream_key: null != y ? (0, dy._z)(y) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                }));
        }, [m.id, c.id, t.code, N, E, T, y, g.length, j, a]);
    (0, e4.A)({
        name: e6.ImpressionNames.VOICE_INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([ag.Ay], () => ag.Ay.useReducedMotion),
        L = r.useRef(null),
        [P, O] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)(
            [dS.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = dS.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (dS.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        G = r.useMemo(() => tA().throttle(O, 20), [O]);
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
            (G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 }));
        }, [G]);
    return (0, s.jsxs)("div", {
        className: dF.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: L,
                className: dF.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: dF.ys }),
                    (0, s.jsx)("div", { className: dF.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: dF.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(dF.Qs, { [dF.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(dk, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: dF.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(s$.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: dF.$B,
                                                      children: (0, s.jsx)(s$.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: dF.RE,
                                      children: (0, s.jsx)(dV, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: P,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: dF.xk,
                        children: (0, s.jsx)(eA.$, {
                            onClick: b,
                            loading: _,
                            variant: v ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !C,
                            text: v ? J.intl.string(J.t["3xjX0U"]) : J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dF.qr,
                children: [
                    (0, s.jsx)(dp.EyeSlashIcon, { size: "custom", color: "currentColor", className: dF.Dq }),
                    (0, s.jsx)(A.E, {
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
function dY(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [oG.A],
            () => ({ invite: oG.A.getInvite(t), inviteError: oG.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lh._U)(t, n.id);
    r.useEffect(() => {
        null == l && oR.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, I.Ay)(),
        m = (0, u.bG)([nY.A], () => (l?.guild != null ? nY.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [D.A, tl.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = D.A.getChannel(e);
                return null != t && tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([M.default], () => M.default.getId()),
        p = (0, u.bG)([oP.Ay], () => oP.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && oR.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            oR.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? ow.DY(l.guild) : m;
        (0, oO.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: c,
            onGateConfirm: n,
        }) === oO.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(o8, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case W.elq.RESOLVING:
            f = (0, s.jsx)(oF, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            f = (0, s.jsx)(dc, { banned: d.state === W.elq.BANNED, author: n.author });
            break;
        case W.elq.ERROR:
            f = (0, s.jsx)(o$, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, oD.On)(d)) {
                case oD.Xd.GROUP_DM:
                    f = (0, s.jsx)(o3, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case oD.Xd.FRIEND:
                    f = (0, s.jsx)(o1, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, oD.G4)(d)) {
                        if (null != d.channel && (0, oU.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = oV({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(dN, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(dz, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(dm, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, oD.ly)(d)) {
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
                    if ((0, oD.oK)(d)) {
                        f = (0, s.jsx)(oJ, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, oU.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = oV({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(dN, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(dz, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, oL.v)(d) &&
                        (f = (0, s.jsx)(da, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(az.A, { section: W.JJy.INVITE_LINK, children: f });
}
var dK = n(706403),
    dW = n(860227),
    dJ = n(763899),
    dX = n(280621),
    dZ = n(123791),
    dq = n(627363);
function d$(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, dq.YY)(t);
    return null == i ? null : (0, s.jsx)(dQ, { app: i, guildId: n });
}
function dQ(e) {
    let { app: t, guildId: i } = e;
    (0, dZ.C)(t.id);
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
    return (0, s.jsx)(eA.$, {
        size: "sm",
        onClick: l,
        icon: dX.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var d0 = n(394839),
    d1 = n(96782),
    d2 = n(930390),
    d3 = n(861986),
    d5 = n(87221),
    d6 = n(313433);
function d4(e) {
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
                            (0, s.jsx)(d5.D, { size: "lg", color: nG.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
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
                className: d6.Fj,
                children: [
                    (0, s.jsx)(n0.CircleInformationIcon, { size: "sm", color: nG.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: J.intl.string(J.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var d9 = n(343552),
    d8 = n(581619),
    d7 = n(803931);
let ce = [W.Auw.GIFV],
    ct = 15 * nx.A.Millis.MINUTE,
    cn = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    ci = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, lE.e5.IS_ANIMATED);
        return null != i && null != l && (lv.bp.test(n) || (a && (lv.P8.test(n) || lv.p4.test(n))))
            ? (0, s.jsx)(aT.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: d7.jj })
            : null;
    };
class cl extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, lh._U)(t, i.id) } : {}),
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
            case r5.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(n6, { messageId: e.id, channelId: t.id });
                break;
            case r5.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(eI, { channelId: t.id }),
                        (0, ep.cc)(t.id, e.id) ? (0, s.jsx)(ey, { channelId: t.id }) : null,
                    ],
                });
                break;
            case r5.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(e_, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: d7.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: r } = n;
            if ((0, tP.Yf)(i)) {
                let n = (0, tP.kK)(i, l, r);
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
                                case tM.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(i7, { code: a, message: e });
                                case tM.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eg, { application: t, message: e, params: i });
                                case tM.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e1, { application: t, message: e });
                                case tM.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(e2, { application: t, message: e, skuId: l });
                                case tM.I.APP_OAUTH2_LINK:
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
                case tM.I.INVITE:
                    if (!this.shouldRenderInvite(l)) return null;
                    return (0, s.jsx)(
                        dY,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tM.I.TEMPLATE:
                    return (0, s.jsx)(lm, { code: l }, l);
                case tM.I.EVENT:
                    return (0, s.jsx)(ls.A, { code: l }, l);
                case tM.I.CHANNEL_LINK:
                    return (0, s.jsx)(ai, { code: l, message: e }, l);
                case tM.I.GUILD_PRODUCT:
                    return (0, s.jsx)(ll, { code: l }, l);
                case tM.I.SERVER_SHOP:
                    return (0, s.jsx)(nZ, { guildId: l }, l);
                case tM.I.SOCIAL_LAYER_STOREFRONT: {
                    let n = (0, sN.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sB,
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
                        sV.A,
                        {
                            guildId: i,
                            skuId: r,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, sj.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: i });
                            },
                        },
                        l,
                    );
                }
                case tM.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let n = (0, sN.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sB,
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
                    return (0, s.jsx)(sV.I, { applicationId: i, skuId: r, channel: t }, l);
                }
                case tM.I.QUESTS_EMBED:
                    return (0, s.jsx)(lX.A, { questId: l }, l);
                case tM.I.GAME_PROFILE:
                    return (0, s.jsx)(iR, { gameId: l, sourceUserId: e.author.id }, l);
                case tM.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(i0, { code: l }, l);
                case tM.I.USER_PROFILE:
                    return (0, s.jsx)(r$, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
                case tM.I.COLLECTIBLES_SHOP: {
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
                case tM.I.EXPERIMENT:
                case tM.I.GAME_ORGANIZATION_INVITE:
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
                          className: d7.zv,
                          children: (0, s.jsx)(ok, {
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
            : (0, s.jsx)(d2.A, {
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
        if (0 === d.length || e.isPoll() || (0, rQ._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, W.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, lE.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, W.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: p,
                srcToSeekOverride: A,
            } = (0, lY.o)(h, { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, c.Lt)(u, W.pr7.IS_VOICE_MESSAGE);
        function I(e, n) {
            let i = (0, c.Lt)(e.originalItem.flags ?? 0, W.sbO.IS_SPOILER) || (0, sH.BV)(t);
            return (0, r6.iW)(e.originalItem, n, i);
        }
        let E = m.map((s) => {
            let a = (0, lE.aG)(s),
                o = {
                    message: e,
                    item: (0, d1.rC)(s, l),
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
                    renderAudioComponent: f ? dK.SX : dK.Nj,
                    renderImageComponent: dK.Cr,
                    renderVideoComponent: dK.I1,
                    renderPlaintextFilePreview: dK.R6,
                    renderGenericFileComponent: dK.UB,
                    onPlay: function (n, i, l) {
                        eY.default.track(W.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                d = (0, r1.E)({ proxyURL: s.proxy_url, url: s.url });
            return (d in g && x && ((o.onClick = g[d]), (o.handlePreloadImage = p[d]), (o.onSeekRequest = A[d])), o);
        });
        return (0, s.jsx)(d0.A, { items: E });
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
        if (e.type === W.Auw.GIFT) return null;
        let m = ce.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            i1.G.Provider,
            {
                value: (0, d9.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
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
        e.type !== W.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lI.A.parseEmbedTitleWithoutLinks : lI.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === W.Auw.RICH
            ? lI.A.parse(t, !0, {
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
                      d8.zx.has(t.type) ||
                      (0, r2.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, W.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lp.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lA.has(t.content_type);
                              })
                          )) ||
                      (0, r2.V)(t) ||
                      (0, r2.G8)(t) ||
                      (0, r2.Xk)(t) ||
                      ((0, r2.nL)(t) && (0, rP.l)("MessageAccessories.renderEmbeds"))
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
                          c = (0, r6.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  ac,
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
                                sd.Ay,
                                {
                                    type: sd.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: sK.LL, renderVideoComponent: sK.$o, renderLinkComponent: sK.bU };
                  if (
                      t.type === W.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = r3.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  o_,
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
        return (0, s.jsx)(aa.N, {
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
            children: (0, s.jsx)(lx.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(dJ.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== W.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(th, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, r4.ec)(e)
            ? (0, s.jsx)(ay.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lK.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(rh, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(W.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(rR, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(W.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - id.default.extractTimestamp(e.id) >= ct)
        )
            return (0, s.jsx)("div", { className: d7.xM, children: J.intl.string(J.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: J.intl.string(J.t.VL1KOk),
            confirmText: J.intl.string(J.t.YEHppG),
            cancelText: J.intl.string(J.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: d7.IX,
                    children: J.intl.string(J.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
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
            : (0, s.jsx)(p.M, {
                  dismissable: !0,
                  header: J.intl.string(J.t.CbTIEo),
                  confirmText: J.intl.string(J.t.kFwAsa),
                  cancelText: J.intl.string(J.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: d7.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(d$, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e5.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(aN, {
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
                : (0, s.jsx)(lz, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(sg, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(s_, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, n$.KM)(e)
            ? (0, s.jsx)(n2, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lJ.A, { message: e, poll: t, className: d7.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tR, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lZ.Mn)(e, this.props.channel)) return (0, s.jsx)(so, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lZ.Mn)(e, this.props.channel))
            return (0, s.jsx)(iC, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(d3.A, { message: e, compact: t, location: d3.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, ic.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new im(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lK.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, dW.XL)(e),
                  className: o()(this.props.className, d7.kL),
                  children: (0, s.jsx)(d4, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, dW.XL)(t), className: o()(e, d7.kL), children: n })
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
                  id: (0, dW.XL)(t),
                  className: o()(e, d7.kL),
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
function cs(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: l,
            isMessageSnapshot: r,
            hideInviteEmbedBanner: a,
            hideActivityInvite: o,
        } = e,
        d = (0, u.bG)([M.default], () => M.default.getId()),
        m = is.X6.useSetting(),
        h = is.hD.useSetting(),
        g = is.rs.useSetting() && !(0, rf.A)(e.message),
        p = is.jW.useSetting() && !1 !== e.renderReactions,
        A = is.kt.useSetting(),
        x = (0, u.bG)([r0.A], () => null == n.guild_id || r0.A.canChatInGuild(n.guild_id), [n]),
        f = (0, u.bG)([lf.A], () => null != n.guild_id && lf.A.isLurking(n.guild_id), [n]),
        I = (0, u.bG)([lM.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lM.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: v } = (0, u.cf)(
            [tl.A],
            () => ({
                canAddNewReactions: x && tl.A.can(W.xBc.ADD_REACTIONS, n),
                canManageMessages: tl.A.can(W.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        C = (0, le.ix)(n.guild_id),
        [, _] = (0, lt.c)(n.guild_id),
        j = (0, rg.Id)(n),
        N =
            (d === i.author.id || v) &&
            i.author.id !== W.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, W.pr7.EPHEMERAL) &&
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
        b = (0, r8.A)({
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
        R = (0, lC.A)(n?.id),
        L = (0, lW.A)(i),
        P = (0, nQ.P)(i),
        D = (0, r9.z)(n),
        O = (0, r5._f)(i.id, i.channel_id),
        U = (0, nq._R)(),
        w = (0, n7.U)();
    return (0, s.jsx)(cl, {
        canSuppressEmbeds: N,
        canDeleteAttachments: y,
        ...b,
        disableReactionReads: !!S || b.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
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
        enabledContentHarmTypeFlags: P,
        ctaButtonType: O,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: a,
        hideActivityInvite: o,
        restrictedPreview: w,
    });
}
function cr(e) {
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
        c = is.X6.useSetting(),
        u = is.hD.useSetting(),
        m = is.rs.useSetting(),
        h = is.kt.useSetting(),
        g = (0, n7.U)(),
        p = (0, n8.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, lC.A)(n?.id),
        x = (0, nQ.P)(t),
        f = (0, r5._f)(t.id, t.channel_id),
        I = (0, lW.A)(t);
    return (0, s.jsx)(cl, {
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
