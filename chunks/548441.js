(n.d(t, { iV: () => c$, OC: () => c1, Ay: () => c0 }), n(938796));
var i,
    l,
    s = n(477900),
    a = n(582128),
    r = n(503698),
    o = n.n(r),
    c = n(448761),
    d = n(665260),
    u = n(17928),
    m = n(803805),
    h = n(52133),
    g = n(192308),
    A = n(640238),
    p = n(834730),
    x = n(148494),
    f = n(793574),
    E = n(688810),
    I = n(735991);
(n(321073), n(134528), n(947204));
var C = n(485845),
    _ = n(379834),
    v = n(836480),
    N = n(825860),
    j = n(950305),
    T = n(795816),
    S = n(574152),
    y = n(522305),
    b = n(361926),
    R = n(583846),
    M = n(625180),
    L = n(207371),
    k = n(205184),
    O = n(773669),
    P = n(280450),
    D = n(734057),
    U = n(994500),
    G = n(967198),
    w = n(287809),
    H = n(486020),
    B = n(204776),
    F = n(725606),
    V = n(572211),
    z = n(500060),
    J = n(432017),
    K = n(687966),
    Y = n(104171),
    W = n(652215),
    X = n(375708),
    Z = n(852575);
function q(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: Z.i,
        children: [
            (0, s.jsx)(Y.Ay, { guildId: n, users: t, max: 6, size: Y.DN.SIZE_16 }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var Q = n(354287),
    $ = n(138175),
    ee = n(112150),
    et = n(574660),
    en = n(768349),
    ei = n(165610),
    el = n(113732);
function es(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: r, onView: o } = e,
        { name: c, bot: d } = (t = (0, $.b)(t)),
        m = d?.id,
        h = (0, I.Ag)(t),
        g = H.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: d }),
        { staticBannerSrc: A, videoBannerSrc: p, bannerAspectRatio: x } = (0, ee.f)(t),
        C = (0, u.bG)([P.default], () => l ?? P.default.getId(), [l]),
        { analyticsLocations: _ } = (0, E.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: v, instanceId: N, isCurrentlyInInstance: j, canLaunchInChannel: R } = (0, F.w)(t.id),
        k = (0, S.A)(),
        O = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: d?.id }),
        U = null != m && h && O,
        G = R && h,
        w = (0, L.x)(t),
        B = (0, et.F)(t),
        z = (0, et.t)(t),
        J = a.useMemo(() => {
            let e = [];
            return (
                h
                    ? w
                        ? e.push({
                              label: X.intl.string(X.t.RscU7I),
                              trackingArea: Q.kY.PLAY,
                              onClick() {
                                  M.A.launchFrame({
                                      applicationId: t.id,
                                      surface: ei.sd,
                                      analyticsContext: { isStart: !0, analyticsLocations: _ },
                                  });
                              },
                          })
                        : (G &&
                              e.push({
                                  label:
                                      null == N
                                          ? X.intl.string(X.t.RscU7I)
                                          : j
                                            ? X.intl.string(X.t.DPfdsq)
                                            : X.intl.string(X.t.sqe0hj),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, T.su)({
                                          channelId: v ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == N,
                                          embeddedActivitiesManager: k,
                                          customId: i,
                                          referrerId: C,
                                          analyticsLocations: _,
                                      });
                                  },
                                  disabled: j,
                              }),
                          !G &&
                              U &&
                              e.push({
                                  label: X.intl.string(X.t.JeK1Wg),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, y.Q)({
                                          appId: t.id,
                                          botId: m,
                                          analyticsLocations: _,
                                          customId: i,
                                          referrerId: C,
                                      });
                                  },
                              }))
                    : null != z && e.push(z),
                e
            );
        }, [h, z, w, t.id, G, U, N, j, v, k, i, C, _, m]),
        K = h ? (0, s.jsx)(er, { app: t }) : (0, s.jsx)(ea, { app: t });
    return (0, s.jsx)(V.h, {
        title: c,
        staticBannerSrc: A,
        videoBannerSrc: p,
        onClickBanner: B,
        bannerAspectRatio: x,
        iconSrc: g,
        info: K,
        actions: J,
        onClickContent: B,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: o,
            guildId: D.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function ea(e) {
    let { app: t } = e,
        n =
            (0, B.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            C.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([O.default], () => O.default.locale, []),
        l = a.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : X.intl.format(X.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        r = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != r && (0, s.jsx)(p.E, { variant: "text-xs/medium", className: el.h_, color: "none", children: r }),
            null != l &&
                (0, s.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    className: el.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(v.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function er(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([G.A], () => G.A.getGuildId() ?? void 0, []),
        r = (0, k.s)(t.id),
        o = (0, u.yK)(
            [w.default, U.A],
            () => {
                let e = [];
                for (let [t, n] of r.entries()) {
                    if (t >= 5) break;
                    let i = w.default.getUser(n.author_id),
                        l = U.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [r],
        ),
        c = a.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(q, {
                    activityUsers: o,
                    guildId: l,
                    activityText: X.intl.formatToPlainString(X.t["IJa+46"], { count: o.length }),
                });
            if (r.some((e) => (0, R.CZ)(e) === _.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(N.FireIcon, { size: "xxs", color: "currentColor" }),
                        X.intl.string(X.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? X.intl.format(X.t.z8EAJW, { count: i }) : X.intl.string(X.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(j.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [r, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(p.E, {
                    variant: "text-xs/medium",
                    className: el.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: el.Tc, children: e }, t)),
                }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: el.dS, color: "none", lineClamp: 1, children: c }),
        ],
    });
}
var eo = n(582388),
    ec = n(257269);
let ed = (0, u.UT)(eo.A, {
    getQueryId: W.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : eo.A.getOne(e, t)),
    load: (e, t) => (0, ec.Py)(e, t),
});
var eu = n(309010),
    em = n(933958),
    eh = n(782091);
function eg(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: a } = e,
        r = t?.bot?.id,
        o = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        c = null != t && (0, I.Ag)(t),
        d = null != r && c && o,
        { analyticsLocations: m } = (0, E.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([eu.Ay], () => eu.Ay.getChannelId()),
        g = (0, eh.et)(h),
        A = (0, u.bG)([em.Ay], () => {
            if (null == h) return;
            let e = em.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        p = (0, u.bG)([em.Ay], () => em.Ay.getCurrentEmbeddedActivity()),
        x = (0, S.A)(),
        C = g === eh.xy.CAN_LAUNCH,
        _ = null != A && p?.compositeInstanceId === A,
        v = null != n ? n : i.customId,
        N = [];
    (0, L.x)(t)
        ? N.push({
              label: X.intl.string(X.t.RscU7I),
              trackingArea: Q.kY.PLAY,
              onClick() {
                  M.A.launchFrame({
                      applicationId: t.id,
                      surface: ei.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: m, channelId: h },
                  });
              },
          })
        : (C &&
              N.push({
                  label:
                      null == A ? X.intl.string(X.t.RscU7I) : _ ? X.intl.string(X.t.DPfdsq) : X.intl.string(X.t.sqe0hj),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, T.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == A,
                          embeddedActivitiesManager: x,
                          customId: v,
                          referrerId: l,
                          analyticsLocations: m,
                      });
                  },
                  disabled: _,
              }),
          d &&
              !C &&
              N.push({
                  label: X.intl.string(X.t.JeK1Wg),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, y.Q)({ appId: t.id, botId: r, analyticsLocations: m, customId: v, referrerId: l });
                  },
              }));
    let j = (0, et.F)(t);
    return (0, s.jsx)(V.h, {
        actions: N,
        onClickContent: j,
        header: t.name,
        iconSrc: H.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: en.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: v,
            guildId: D.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function eA(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: a, customId: r } = i,
        { analyticsLocations: o } = (0, E.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: c, error: d } = ed(t.id, a);
    return (0, I.Ag)(t)
        ? null != a && null == d && null != c
            ? (0, s.jsx)(E.f5, {
                  value: o,
                  children: (0, s.jsx)(eg, { application: t, customId: r, customLink: c, referrerId: l, message: n }),
              })
            : (0, s.jsx)(E.f5, {
                  value: o,
                  children: (0, s.jsx)(es, {
                      app: t,
                      linkType: en.J.ACTIVITY,
                      activityCustomId: r,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var ep = n(36149),
    ex = n(821609),
    ef = n(379257),
    eE = n(306537);
function eI(e) {
    let { channelId: t } = e,
        n = (0, ep.b8)(),
        i = (0, ep.i2)(),
        l = X.intl.string(X.t["9KiIz6"]),
        r = X.intl.string(X.t["/nicWo"]),
        o = a.useCallback(() => {
            (ef.A.showAgeVerificationGetStartedModal({ entryPoint: eE.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eE.UT)(eE.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "primary", text: n ? l : r, onClick: o, disabled: !i });
}
var eC = n(107766),
    e_ = n(780964),
    ev = n(766075);
function eN(e) {
    let { channelId: t } = e,
        n = a.useCallback(() => {
            ((0, eC.nk)() || (0, ev.openUserSettings)(e_.X.FAMILY_CENTER_PANEL), (0, eE.UT)(eE.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "primary", text: X.intl.string(X.t.n8a49k), onClick: n });
}
var ej = n(277861),
    eT = n(876891);
function eS(e) {
    let { channelId: t } = e,
        n = (0, ep.i2)(),
        i = a.useCallback(() => {
            ((0, ej.Vq)(), (0, eE.UT)(eE.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(ex.$, { variant: "secondary", text: X.intl.string(eT.default.Z61nkt), onClick: i, disabled: !n });
}
var ey = n(284009),
    eb = n.n(ey),
    eR = n(664121),
    eM = n(34188),
    eL = n(408278),
    ek = n(173936),
    eO = n(691540),
    eP = n(857250),
    eD = n(97483),
    eU = n(939249),
    eG = n(996759),
    ew = n(800342),
    eH = n(163437),
    eB = n(185438),
    eF = n(97352),
    eV = n(652676),
    ez = n(67480),
    eJ = n(328968),
    eK = n(174459),
    eY = n(957565),
    eW = n(943775),
    eX = n(997997),
    eZ = n(658575),
    eq = n(376374),
    eQ = n(435220),
    e$ = n(140046);
let e0 = (0, u.UT)([ez.A, eJ.A, eF.A], {
        getQueryId: W.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = ez.A.get(e),
                n = eJ.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eF.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (eb()(null != e, "skuId is null"), await (0, ew.QB)(e));
        },
    }),
    e1 = (0, u.UT)([ez.A], {
        getQueryId: W.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (ez.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (eb()(null != e && null != t, "appId is null"), await (0, ew.JI)(t));
        },
    });
function e2(e) {
    let { application: t, message: i } = e,
        l = t.id,
        r = (0, eZ.G)(l),
        [o, c, d, m] = (0, u.yK)(
            [eV.A, D.A],
            () => {
                let e = (0, eW.A)(t, 45),
                    n = D.A.getBasicChannel(i.channel_id)?.guild_id;
                return [eV.A.getStoreLayout(l), eV.A.getFetchStatus(l), n, e];
            },
            [t, l, i.channel_id],
        );
    a.useEffect(() => {
        c === eV.N.NONE && (0, eG.V)(l);
    }, [l, c]);
    let h = o.subscriptions.length,
        A = o.otps.length,
        p = a.useMemo(
            () =>
                h > 0 && A > 0
                    ? X.intl.formatToPlainString(X.t["jA648+"], { subCount: h, itemCount: A })
                    : h > 0
                      ? X.intl.formatToPlainString(X.t.GSfibA, { count: h })
                      : A > 0
                        ? X.intl.formatToPlainString(X.t.j7Go5A, { count: A })
                        : X.intl.string(X.t.rMA98g),
            [A, h],
        );
    if (!r) return null;
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
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: d });
        });
    }
    return (0, s.jsx)(e5, {
        appName: t.name,
        title: X.intl.formatToPlainString(X.t.XDRjs5, { appName: t.name }),
        description: p,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eQ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eX.K)(l, eX.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eK.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: e$.mZ,
            children: (0, s.jsx)(ex.$, {
                onClick: function () {
                    (x(),
                        eK.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: X.intl.string(X.t.kRvlKJ),
            }),
        }),
    });
}
function e3(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: r,
            sku: o,
            subscriptionPlan: c,
            storeListing: d,
        } = (function (e, t) {
            let { data: n } = e0(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: a } = e1(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: a, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = a.useMemo(() => (0, eW.A)(t, 45), [t]),
        A = (0, eZ.G)(t.id),
        { openModal: p, subscriptionPurchaseButtonState: x } = (0, eB.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!A || null == o) return null;
    let f = o.type === W.Puh.SUBSCRIPTION,
        E = !!f && (0, eH.bg)(o.flags);
    function I() {
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
    let C = () => {
            (0, g.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    l = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    function a() {
                        (n.onClose(), I());
                    }
                    return null != e && null != r
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: a,
                          })
                        : null != l
                          ? (0, s.jsx)(l, {
                                transitionState: n.transitionState,
                                appId: t.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: a,
                            })
                          : null;
                };
            });
        },
        _ = f
            ? E
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.UserIcon, { size: "custom", width: 12, height: 12 }),
                          " ",
                          X.intl.string(X.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eR.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          X.intl.string(X.t.NRC3ar),
                      ],
                  })
            : d?.description?.trim();
    function v() {
        null != o &&
            eK.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === _ && (_ = void 0),
        (0, s.jsx)(e5, {
            appName: t.name,
            title: o.name,
            description: _,
            link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eQ.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, eX.K)(t.id, eX.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (I(),
                    eK.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
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
                                (C(),
                                eK.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: X.intl.string(X.t.DXYfjO),
                    }),
                    f
                        ? null != c
                            ? (0, s.jsx)(eq.rc, {
                                  onClick: p,
                                  appId: t.id,
                                  subscriptionType: E ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eM.U,
                                  onHasClicked: v,
                                  subscriptionPlan: c,
                                  state: x,
                              })
                            : (0, s.jsx)(ex.$, { variant: "primary", text: X.intl.string(X.t.uuzaAK), onClick: C })
                        : (0, s.jsx)(eq.$P, { appId: t.id, sku: o, icon: eM.U, onHasClicked: v }),
                ],
            }),
        })
    );
}
function e5(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: a, onIconClick: r, onLinkCopy: o, children: c } = e;
    return (0, s.jsxs)("div", {
        className: e$.iE,
        children: [
            (0, s.jsxs)("div", {
                className: e$.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: e$.qd,
                        children: [
                            (0, s.jsx)(eM.U, { size: "xxs" }),
                            (0, s.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eY.p5 &&
                        (0, s.jsx)(eL.K, {
                            "aria-label": X.intl.string(X.t.WqhZss),
                            icon: () => (0, s.jsx)(ek.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eY.C)(l, () => {
                                    ((0, eO.P0)((0, eP.o)(X.intl.string(X.t["L/PwZf"]), eD.Ck.SUCCESS)), o());
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
                            null != a &&
                                (0, s.jsx)(eU.D, {
                                    onClick: r,
                                    children: (0, s.jsx)("img", { src: a.href, alt: "", className: e$.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: e$.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(p.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(p.E, {
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
                    c,
                ],
            }),
        ],
    });
}
var e6 = n(401374),
    e7 = n(562708),
    e4 = n(139286);
function e8(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = a.useCallback(() => {
            (0, e4.x)({
                type: e7.ImpressionTypes.VIEW,
                name: e7.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, B.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(E.f5, {
              value: i,
              children: (0, s.jsx)(es, { app: t, linkType: en.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var e9 = n(778492),
    te = n(297264),
    tt = n(285796),
    tn = n(857182),
    ti = n(506774),
    tl = n(228366),
    ts = n(576705),
    ta = n(812930);
let tr = "ChannelFollowingBumpChannels",
    to = new Set(),
    tc = new Set();
class td extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        (this.waitFor(P.default, D.A, ts.A, w.default), (to = new Set(ti.w.get(tr))));
    }
    shouldShowBump(e) {
        return tc.has(e);
    }
}
let tu = new td(tl.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || to.has(t)) return !1;
        let l = D.A.getChannel(t),
            s = w.default.getCurrentUser(),
            a = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === W.rbe.GUILD_ANNOUNCEMENT &&
                (0, ta.A)(n) &&
                ts.A.can(W.xBc.SEND_MESSAGES, l) &&
                (a || ts.A.can(W.xBc.MANAGE_MESSAGES, l)) &&
                !d.Lt(Number(n.flags), W.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tc.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tc.has(t.id) && d.Lt(Number(t.flags), W.pr7.CROSSPOSTED) && tc.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tc.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tc.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        (to.add(t), ti.w.set(tr, to), tc.clear());
    },
});
var tm = n(419056),
    th = n(732929);
let tg = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tu], () => tu.shouldShowBump(n), [n]),
        l = a.useCallback(() => {
            (tn.A.dismissPublishBump(n), (0, tm.A)(t, n));
        }, [t, n]),
        r = a.useCallback(() => {
            tn.A.dismissPublishBump(n);
        }, [n]),
        o = a.useCallback(() => {
            tn.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: th.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: th.mp,
                      children: [
                          (0, s.jsx)(e9.k, { size: "xs", color: "currentColor", className: th.Kk }),
                          (0, s.jsx)(te.D, {
                              variant: "heading-sm/normal",
                              className: th.dS,
                              children: X.intl.string(X.t.hasZoU),
                          }),
                          (0, s.jsx)(p.E, {
                              color: "text-brand",
                              className: th.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eU.D, { onClick: l, children: X.intl.string(X.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eU.D, {
                              onClick: r,
                              children: (0, s.jsx)(tt.a, { size: "xs", color: "currentColor", className: th.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(p.E, {
                      color: "text-muted",
                      className: th.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eU.D, { onClick: o, children: X.intl.string(X.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tA = n(175671),
    tp = n(435558),
    tx = n.n(tp),
    tf = n(239947),
    tE = n(403581),
    tI = n(97808),
    tC = n(778712),
    t_ = n(520117),
    tv = n(793943),
    tN = n(763754),
    tj = n(973654),
    tT = n(467135),
    tS = n(644235),
    ty = n(153469),
    tb = n(72191),
    tR = n(988986);
function tM(e) {
    return e.map((e) => `#${e}`);
}
function tL(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tT.ko)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, s.jsx)(tk, { message: t }),
                  (0, s.jsx)(ex.$, {
                      text: X.intl.string(X.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eK.default.track(W.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tv.nf)(tv.HP.CUSTOM_THEME, { from: tv.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tM(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tj.GQ)((0, tS.PC)(n.base_theme)));
                      },
                  }),
              ],
          });
}
function tk(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: r } = l,
        o = (0, tN.Ay)(l),
        c = a.useMemo(
            () =>
                (0, tp.once)(() => {
                    (0, e4.x)({ type: e7.ImpressionTypes.VIEW, name: tf.IJ.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        d = (0, t_.A)({
            onVisible: () => {
                c();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = a.useMemo(() => (void 0 === r ? "" : (0, ty.V9)(tM(r.colors), r.gradient_angle ?? 0)), [r]);
    return void 0 === r
        ? null
        : (0, s.jsxs)("div", {
              className: tR.pS,
              ref: d,
              children: [
                  (0, s.jsx)("div", { className: tR.sl, style: { background: `${u}` } }),
                  (0, s.jsxs)("div", {
                      className: tR.Ix,
                      children: [
                          (0, s.jsxs)(te.D, {
                              variant: "heading-md/semibold",
                              className: tR.qP,
                              children: [X.intl.string(tb.default.KSBBpC), " ", (0, s.jsx)(tE.t, {})],
                          }),
                          (0, s.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tR.Tb,
                              children:
                                  ((t = `${X.intl.format(tb.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = l.author),
                                  (i = o.nick),
                                  t
                                      .split(" ")
                                      .map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, s.jsxs)(a.Fragment, { children: [e, " "] }, t)
                                              : (0, s.jsxs)(
                                                    "span",
                                                    {
                                                        className: tR.H,
                                                        children: [
                                                            (0, s.jsx)(tI.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tC._3.SIZE_20,
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
var tO = n(892768),
    tP = n(167189),
    tD = n(758836);
let tU = new Set(Object.values(tD.G2).filter((e) => e !== tD.G2.COLLECTION_INDEX));
var tG = n(132500),
    tw = n(172218),
    tH = n(612324),
    tB = n(575593),
    tF = n(318254),
    tV = n(890856),
    tz = n(866665),
    tJ = n(825484),
    tK = n(289873),
    tY = n(444927),
    tW = n(713517),
    tX = n(427209),
    tZ = n(44120),
    tq = n(821925),
    tQ = n(309954),
    t$ = n(652165),
    t0 = n(158045),
    t1 = n(580630),
    t2 = n(839534),
    t3 = n(440938),
    t5 = n(4227),
    t6 = n(298072),
    t7 = n(993408),
    t4 = n(682301),
    t8 = n(841702),
    t9 = n(466459),
    ne = n(777829),
    nt = n(859587),
    nn = n(918838),
    ni = n(623373),
    nl = n(536572),
    ns = n(156248),
    na = n(38405);
class nr extends a.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        na.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var no = n(878112),
    nc = n(722258),
    nd = n(268959),
    nu = n(387945),
    nm = n(618317),
    nh = n(140877),
    ng = n(561769),
    nA = n(661847),
    np = n(139146),
    nx = n(540737),
    nf = n(927813);
let nE = 10 * nf.A.Millis.MINUTE,
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
    nC = new Set(),
    n_ = new Map(),
    nv = null;
function nN(e) {
    let t = n_.get(e);
    return null != t && Date.now() - t < nE;
}
var nj = n(347722),
    nT = n(935094),
    nS = n(57020),
    ny = n(61750),
    nb = n(521e3),
    nR = n(202541),
    nM = n(278324);
function nL() {
    return ((0, t8.b5)(), null);
}
function nk(e) {
    let { disableFetch: t } = e;
    return ((0, tQ.W)({ disableFetch: t }), null);
}
function nO(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: l, checkoutEligiblePrices: r } = (0, nS.F)({ product: t, hasShopDiscount: n }),
        o = r[0],
        c = t.skuId,
        d = a.useCallback(() => {
            l
                ? (0, t$.B4)({
                      skuId: c,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          ((0, t2.gB)(),
                              (0, ny.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tD.gs.ORB,
                              }));
                      },
                  })
                : (0, tZ.A)({
                      skuId: c,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, t2.gB)();
                      },
                  });
        }, [t, c, l, i]);
    if (null == o) return null;
    let u = l
        ? X.intl.format(X.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tF.C, { className: nM.fN, size: "sm", color: "currentColor" }),
          })
        : X.intl.formatToPlainString(X.t["cNSL/j"], { price: (0, t1.$g)(o.amount, o.currency) });
    return (0, s.jsx)(ex.$, { variant: "primary", onClick: d, text: u, fullWidth: !0 });
}
function nP(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: r } = (0, E.Ay)(),
        c = (0, u.bG)([w.default], () => w.default.getCurrentUser()),
        d = l.isDM() || l.isGroupDM(),
        m = a.useRef(null),
        { isHoveringOrFocusing: h } = (0, tW.A)(m),
        g = a.useRef(null),
        A = (0, nn.U)(t),
        p = (0, tH.A)(g, A);
    (0, nt.x)(h, t);
    let { previewingVariantIndex: x, handleEntering: f, handleLeaving: I } = (0, nT.f)(t),
        C = a.useRef(!1);
    a.useEffect(() => {
        if (C.current || !(0, ni.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        (e > -1 && (0, t6.n)(t, e), (C.current = !0));
    }, [t, n]);
    let _ = (0, t6.Q)(t),
        v = (0, ni.B1)(t) ? (t.variants[_] ?? t) : t,
        N = v.skuId,
        { isPurchased: j } = (0, t9.h)(v),
        T = (0, u.bG)([t5.A], () => t5.A.hasPreviouslyFetched || null != t5.A.fetchError),
        S = !d || T,
        y = d && j,
        b = (0, u.bG)([w.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = w.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (w.default.getUser(t) ?? void 0) : void 0;
        }),
        R = (0, nj.X)(v),
        M = (0, ne.f)({ product: t, analyticsLocations: r }),
        L = (0, ns.G)({
            skuId: N,
            product: v,
            productName: (0, nl.VG)(v),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: M,
        }),
        k = a.useCallback(
            (e) => {
                (e.stopPropagation(), L());
            },
            [L],
        ),
        O = a.useCallback(() => {
            (0, nc.B)({ skuId: N, tab: i, analyticsLocations: r });
        }, [N, i, r]),
        P = a.useMemo(() => ({ maxVariantsToShow: 4, onClick: O }), [O]),
        D = a.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        U = null != c && t0.Ay.canUseShopDiscounts(c),
        G = S && !y && !(0, t7.G0)(v),
        H = (0, s.jsx)(ex.$, { variant: "secondary", onClick: O, text: X.intl.string(X.t.KLBTgF), fullWidth: !0 }),
        B = G ? (0, s.jsx)(nO, { product: v, hasShopDiscount: U, analyticsLocations: r }) : null,
        F = R
            ? (0, s.jsx)(no.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: _,
                  giftRecipient: b,
                  giftingOrigin: nR.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        ref: m,
        className: nM.kL,
        children: [
            d && (0, s.jsx)(nL, {}),
            (0, s.jsx)(nk, { disableFetch: !(0, ni.Vx)(v) }),
            (0, s.jsxs)(ng.v3.Provider, {
                value: D,
                children: [
                    (0, s.jsx)(nb.vf.Provider, {
                        value: (0, nb.$c)(t.skuId) ? g : null,
                        children: (0, s.jsxs)(tV.s, {
                            ref: p,
                            onClick: O,
                            "aria-label": (0, nl.s7)(v),
                            className: nM.xX,
                            children: [
                                t.type === tB.R.BUNDLE &&
                                    t.previewAssets?.bgStatic != null &&
                                    (0, s.jsx)("img", { className: nM.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: nM.VH,
                                    children: (0, s.jsx)(nm.A, { skuId: n, isCardHovered: h, overrideVariantIndex: x }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: nM.GJ,
                                    children: [
                                        (0, s.jsx)(nd.A, { skuId: n }),
                                        (0, s.jsxs)("div", {
                                            className: nM.gj,
                                            children: [
                                                (0, s.jsx)(tz.m, {
                                                    text: X.intl.string(X.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eU.D, {
                                                        "aria-label": X.intl.string(X.t.Ej3B3Y),
                                                        onClick: k,
                                                        className: o()(nM.VD, { [nM.Hk]: !h }),
                                                        children: (0, s.jsx)(tX.A, {
                                                            size: "refresh_sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(np.R, {
                                                    product: t,
                                                    selectedVariantIndex: _,
                                                    isCardHovered: h,
                                                    onTrackClick: M,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: nM.zH,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nM.pq,
                                children: [
                                    (0, s.jsx)(nu.A, { skuId: n }),
                                    (0, s.jsxs)("div", {
                                        className: nM.y3,
                                        children: [
                                            (0, s.jsx)(nh.A, { skuId: n }),
                                            (0, s.jsx)(nA.A, {
                                                skuId: n,
                                                isCollapsed: !h,
                                                onVariantEnter: f,
                                                onVariantExit: I,
                                                overflowProps: P,
                                                onTrackClick: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(tJ.e, { wrap: !1, fullWidth: !0, children: [H, B, F] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nD = { rootMargin: "200px" };
function nU(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t4.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tq.A], () => tq.A.getFetchStateForSku(e.skuId)),
        r = (0, tY.A)(() => ({ cardId: (0, tG.A)() })),
        [o, c] = a.useState(!1),
        d = (0, tw.B)(
            a.useCallback((e) => {
                e.isIntersecting && c(!0);
            }, []),
            nD,
            "loading" === i && !o,
        );
    return (a.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nC.has(t) || nN(t)) &&
            !(nC.size >= 50) &&
            (0, nx.jn)(t) &&
            (nC.add(t),
            (function e(t) {
                null == nv &&
                    (nv = setTimeout(() => {
                        ((nv = null),
                            (function () {
                                for (let e of [...nC]) (nN(e) || !(0, nx.jn)(e)) && nC.delete(e);
                                if (0 === nC.size) return;
                                let t = [];
                                for (let e of nC) {
                                    if (t.length >= 50 || !nI.tryTake()) break;
                                    (t.push(e),
                                        nC.delete(e),
                                        (function (e) {
                                            if ((n_.set(e, Date.now()), n_.size > 2e3)) {
                                                let e = n_.keys().next().value;
                                                null != e && n_.delete(e);
                                            }
                                        })(e));
                                }
                                (t.length > 0 && (0, nx.tu)({ skuIds: t }),
                                    nC.size > 0 && e(Math.max(nI.getMsUntilAvailable(), 300)));
                            })());
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nN(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: d,
                  className: nM.kL,
                  children: (0, s.jsx)("div", { className: nM.dc, children: (0, s.jsx)(tK.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(t3.R9, { newValue: r, children: (0, s.jsx)(nP, { ...e, product: t }) })
          : null;
}
function nG(e) {
    return (0, s.jsx)(nr, { children: (0, s.jsx)(nU, { ...e }) });
}
var nw = n(661531),
    nH = n(696986),
    nB = n(95561),
    nF = n(548118),
    nV = n(250627),
    nz = n(741231),
    nJ = n(749314),
    nK = n(71393),
    nY = n(722888),
    nW = n(43136),
    nX = n(575926),
    nZ = n(775429);
function nq(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nK.A], () => nK.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nY.G)(t),
        { listingsLoaded: r } = (0, nV.bb)(t),
        c = (0, nV.fZ)(t, { publishedOnly: !0 }),
        d = a.useCallback(async () => {
            (eK.default.track(W.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nB.H$)(t) }),
                await (0, nz.A)(W.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, e4.A)(
        { type: e7.ImpressionTypes.VIEW, name: e7.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = c.length > 0 ? new Date(Math.min(...c.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !r
        ? (0, s.jsx)("div", { className: o()(nZ.lm, nZ.dc), children: (0, s.jsx)(tK.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nZ.lm,
                children: [
                    (0, s.jsx)(nW.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nH.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nZ.qs,
                        children: [
                            (0, s.jsx)(nX.h, {
                                height: "16px",
                                width: "16px",
                                color: nw.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(te.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nZ.Nl,
                                children: X.intl.string(X.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nH.h, { size: 16 }),
                    (0, s.jsx)(te.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: X.intl.format(X.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nH.h, { size: 4 }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nH.h, { size: 16 }),
                    (0, s.jsx)(nJ.A, {}),
                    (0, s.jsx)(nH.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nZ.kS,
                        children: [
                            (0, s.jsx)(nF.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nZ.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: X.intl.format(X.t.tKZNlb, { listingCount: c.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: X.intl.format(X.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nZ.$h,
                                children: (0, s.jsx)(ex.$, { onClick: d, icon: nX.A, text: X.intl.string(X.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nQ = n(390248),
    n$ = n(282108),
    n0 = n(33358),
    n1 = n(885574),
    n2 = n(874840);
function n3(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eU.D, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("249629"), n.e("486381"), n.e("635270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: n2.L,
        children: [
            (0, s.jsx)(n1.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: n2.m, children: X.intl.string(X.t["2aXnfa"]) }),
        ],
    });
}
var n5 = n(974875),
    n6 = n(900019);
function n7(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([n6.A], () => n6.A.canSubmitFpReport(t)),
        l = a.useCallback(() => {
            (0, n5.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(ex.$, { variant: "secondary", text: X.intl.string(X.t["4q1Elf"]), onClick: l, disabled: !i });
}
var n4 = n(320448),
    n8 = n(958340),
    n9 = n(384231),
    ie = n(959698),
    it = n(438729),
    ii = n(601280),
    il = n(886737),
    is = n(699352),
    ia = n(885386),
    ir = n(540999),
    io = n(47167),
    ic = n(58703),
    id = n(427930);
function iu(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: H.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: X.intl.formatToPlainString(X.t["+l04BN"], { origin: e.name, timestamp: t }),
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
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ts.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nK.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : n8.A,
            { snapshotIndex: a, parentMessage: r, messageSnapshot: o } = this,
            c = (0, ic.Fe)(o.message.timestamp),
            d = e.getChannel(this.parentMessage.channel_id);
        if (null != d && d.guild_id === r.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(r.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(d.guild_id);
                return null == e ? { snapshotIndex: a } : { snapshotIndex: a, footerInfo: iu(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: a,
                      footerInfo: {
                          originLabel: (u = (0, io.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: X.intl.formatToPlainString(X.t["+l04BN"], { origin: u, timestamp: c }),
                      },
                  }
                : { snapshotIndex: a };
        }
        let m = r.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: a };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: a } : { snapshotIndex: a, footerInfo: iu(h, c) };
    }
}
var ih = n(66834),
    ig = n(449054);
async function iA(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nK.A.getGuild(t))
        try {
            (await (0, ig.Z2)(t, { object: W.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, ih.k)(t),
                (l = D.A.getChannel(n)));
        } catch {}
    eK.default.track(W.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let a = s ? n : void 0;
    (0, nz.A)(W.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: a });
}
var ip = n(387408),
    ix = n(352106);
function iE() {
    return (0, s.jsxs)("div", {
        className: ix.N1,
        children: [
            (0, s.jsx)(tX.A, { size: "xs", className: ix.nr, color: nw.A.colors.TEXT_MUTED }),
            (0, s.jsx)(p.E, {
                className: ix.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: X.intl.string(X.t.ToyvLk),
            }),
        ],
    });
}
function iI(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = a.useMemo(() => new im(t, n, i), [t, n, i]),
        r = (0, u.bG)(
            [D.A, w.default, U.A, ts.A, nK.A, n8.A],
            () => l.getForwardInfo(D.A, w.default, U.A, ts.A, nK.A, n8.A).footerInfo,
            [l],
            h.A,
        ),
        o = a.useCallback(() => {
            iA(t);
        }, [t]);
    return null == r
        ? null
        : (0, s.jsxs)(eU.D, {
              className: ix.xQ,
              onClick: o,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, s.jsx)("img", { className: ix.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: ix.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, s.jsx)(n4._, { size: "xxs", color: nw.A.colors.TEXT_MUTED }),
              ],
          });
}
function iC(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: l, onMediaItemContextMenu: r } = e,
        o = a.useMemo(() => (0, ip.A)(t, n), [t, n]),
        c = ia.hD.useSetting(),
        d = ia.rs.useSetting(),
        m = (0, u.bG)([ir.A], () => ir.A.isDeveloper),
        h = (0, ie.U)(),
        g = (0, n9.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: p,
            hasBailedAst: x,
        } = (0, ii.A)(o, {
            hideSimpleEmbedContent: c && d,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
            postProcessor: h ? il.A : void 0,
        }),
        f = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        E = ia.hH.useSetting();
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
                              (0, s.jsx)(iE, {}),
                              (0, s.jsx)(it.Ay, { message: o, content: A, compact: E }),
                              (0, is.A)({
                                  channelMessageProps: { message: o, channel: f, compact: E },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: x,
                                  handleContextMenu: r,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: l,
                              }),
                              !h && (0, s.jsx)(iI, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function i_(e) {
    let { message: t, disableComponentInteractivity: n, onMediaItemContextMenu: i } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, l) =>
            (0, s.jsx)(
                iC,
                { message: t, snapshot: e, index: l, disableComponentInteractivity: n, onMediaItemContextMenu: i },
                l,
            ),
        ),
    });
}
var iv = n(109112),
    iN = n(508770),
    ij = n(369606),
    iT = n(409626),
    iS = n(49491),
    iy = n(692969),
    ib = n(738250),
    iR = n(575568);
function iM(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: a,
            openGameProfile: r,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, ib.A)({ gameId: t }),
                a = (0, iy.A)({ gameId: t, source: iT.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                r = (0, iS.A)(l),
                o = null != l && null != a && !s && !r,
                c = l?.getIconURL(80) ?? null,
                d = l?.getBannerURL(300) ?? l?.getScreenshotURL(0, 300) ?? null;
            return {
                game: l ?? null,
                resolvedGameId: i,
                iconUrl: c,
                bannerUrl: d,
                openGameProfile: a,
                shouldRender: o,
            };
        })({ gameId: t, sourceUserId: n });
    return o && null != i && null != r
        ? (0, s.jsxs)(tV.s, {
              className: iR.E6,
              onClick: r,
              "aria-label": X.intl.formatToPlainString(X.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iR.yl,
                      children: [
                          null != a &&
                              (0, s.jsx)("div", { className: iR.Tp, style: { backgroundImage: `url("${a}")` } }),
                          (0, s.jsx)("div", { className: iR.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: iR.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: iR.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iR.EU,
                                    children: (0, s.jsx)(iv._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: iR.Qs,
                              children: [
                                  (0, s.jsx)(te.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: iR.k3,
                                          children: (0, s.jsx)(iN.E, {
                                              variant: "default",
                                              type: {
                                                  text: X.intl.formatToPlainString(X.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: ij.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eL.K, {
                              icon: n4._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": X.intl.formatToPlainString(X.t["8QLQB+"], { gameName: i.name }),
                              onClick: r,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iL = n(281445),
    ik = n(554146),
    iO = n(933832),
    iP = n(624479),
    iD = n(780907),
    iU = n(131607),
    iG = n(569926),
    iw = n(95035),
    iH = n(403362),
    iB = n(196736),
    iF = n(614393),
    iV = n(143407),
    iz = n(685743),
    iJ = n(349085),
    iK = n(581453),
    iY = n(342942),
    iW = n(174861),
    iX = n(49999),
    iZ = n(394107),
    iq = n(116947);
function iQ(e) {
    let { code: t } = e,
        n = a.useMemo(() => (0, iW.GF)(t), [t]);
    a.useEffect(() => {
        iD.Ay.getDetectableGames();
    }, []);
    let i = (0, iJ.A)(n?.game_id, "cover"),
        { data: l } = (0, iG.I)(n?.game_id),
        r = (0, iB.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [c, d] = (0, iU.kn)([ik.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = c !== ik.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iL.X.SHOCKBYTE,
        h = P.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: A, animateCopyIcon: x } = (0, iz.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
        E = a.useCallback(() => {
            (0, t2.Cz)({
                tab: tD.G2.GAME_SERVERS,
                analyticsLocations: [f.A.GAME_SERVER_PAGE],
                analyticsSource: f.A.GAME_SERVER_PAGE,
            });
        }, []),
        I = a.useMemo(
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
        C = a.useCallback(() => {
            null != I &&
                (u
                    ? (0, iK.A)(h, I)
                    : (0, iY.A)({
                          provider: m,
                          onAccept: () => {
                              (d(iX.i.TAKE_ACTION), (0, iK.A)(h, I));
                          },
                      }));
        }, [I, u, m, d, h]),
        _ = a.useCallback(() => {
            (0, iY.A)({
                provider: m,
                onAccept: () => {
                    (d(iX.i.TAKE_ACTION), A());
                },
            });
        }, [m, d, A]);
    if (null == n) return null;
    let v = [l?.name, n.plan_name].filter(iH.Vq).join("  \u2022  ");
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
                                              children: (0, s.jsx)(p.E, {
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
                                    (0, s.jsx)(te.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== v &&
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: v,
                                        }),
                                ],
                            }),
                            r &&
                                (0, s.jsx)("div", {
                                    className: iq.xG,
                                    children: (0, s.jsx)(eL.K, {
                                        variant: "secondary",
                                        icon: eM.U,
                                        "aria-label": X.intl.string(iZ.default.F5W36W),
                                        onClick: E,
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
                                    (0, s.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: X.intl.string(iZ.default.mJlz3T),
                                    }),
                                    (0, s.jsx)(p.E, {
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
                                    (0, s.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: X.intl.string(iZ.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(p.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: iq.qy,
                                                children: [
                                                    (0, s.jsx)(p.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eU.D, {
                                                        className: iq.cL,
                                                        "aria-label": X.intl.string(X.t.OpuAlK),
                                                        onClick: A,
                                                        children: x
                                                            ? (0, s.jsx)(iO.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(iP.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(iw.A, {
                                                onClick: _,
                                                children: X.intl.string(iZ.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != I && (0, s.jsx)("div", { className: iq.PD, children: (0, s.jsx)(iV.l5, { onClick: C }) }),
                ],
            }),
            (0, s.jsx)("div", { className: iq.uV, children: (0, s.jsx)(iF.T, { imageUrl: o }) }),
        ],
    });
}
var i$ = n(643612),
    i0 = n(607399),
    i1 = n(702841),
    i2 = n(529200),
    i3 = n(395671),
    i5 = n(993748),
    i6 = n(212534),
    i7 = n(820496);
function i4(e) {
    let { code: t, message: n } = e,
        [i, l, r] = (0, i1.yK)(
            [i6.A],
            () => [i6.A.getApplication(t), i6.A.isInvalidApplication(t), i6.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i1.bG)([G.A], () => G.A.getGuildId() ?? void 0),
        [c, d] = a.useState(!1),
        u = a.useCallback((e) => {
            e && d(!0);
        }, []),
        m = (0, tw.K)(u),
        h = a.useCallback(() => {
            eK.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i0.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (a.useEffect(() => {
        (0, i5.eP)(t);
    }, [t]),
    a.useEffect(() => {
        c && r === i6.e.FETCHED && h();
    }, [c, r, h]),
    a.useEffect(() => {
        c &&
            l &&
            eK.default.track(W.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i0.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [c, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(i2.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t.j4KtLa) }),
                  (0, s.jsx)(i2.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: i7.k,
                          children: [
                              (0, s.jsx)(i2.A.Icon, { expired: !0 }),
                              (0, s.jsx)(i2.A.Info, {
                                  expired: !0,
                                  title: X.intl.string(X.t.NaQLEx),
                                  children: X.intl.string(X.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || r === i6.e.FETCHING
          ? (0, s.jsxs)(i2.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t.m9hXGR) }),
                    (0, s.jsx)(i2.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(es, { app: i3.Ay.createFromServer(i), linkType: en.J.APP_DISCOVERY, onView: h, message: n });
}
var i8 = n(229527),
    i9 = n(870136),
    le = n(330075),
    lt = n(412728);
function ln(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nV.Qi)(n, i),
        a = (0, i1.bG)([G.A], () => G.A.getGuildId());
    return ((0, e4.A)(
        {
            type: lt.z.VIEW,
            name: e7.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || a !== n)
        ? null
        : (0, s.jsx)(le.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var li = n(484724),
    ll = n(953727);
function ls(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, ll.A)(l),
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
    lr = n(401755),
    lo = n(313977),
    lc = n(508557);
function ld(e) {
    let { code: t } = e,
        i = (0, u.bG)([la.A], () => la.A.getGuildTemplate(t));
    if (null == i || i.state === lr.QB.RESOLVING)
        return (0, s.jsxs)(i2.A, {
            children: [
                (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t.Xj87Yf) }),
                (0, s.jsx)(i2.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lr.QB.EXPIRED)
        return (0, s.jsxs)(i2.A, {
            children: [
                (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t.C7ZRNw) }),
                (0, s.jsxs)(i2.A.Body, {
                    children: [
                        (0, s.jsx)(i2.A.Icon, { expired: !0 }),
                        (0, s.jsx)(i2.A.Info, { expired: !0, title: X.intl.string(X.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(ex.$, { disabled: !0, variant: "secondary", text: X.intl.string(X.t.W7NTWm) })
        : (0, s.jsx)(ex.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lr.QB.RESOLVING &&
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
              loading: i.state === lr.QB.ACCEPTING,
              variant: "active",
              text: X.intl.string(X.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(i2.A, {
        children: [
            (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t.kAvFkO) }),
            (0, s.jsxs)(i2.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(ls, { className: lo.K }),
                            (0, s.jsx)(i2.A.Info, {
                                title: i.name,
                                children: X.intl.format(X.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var lu = n(842241),
    lm = n(681154),
    lh = n(155718);
let lg = new Set([
    lm.ContentInventoryEntryType.TOP_ARTIST,
    lm.ContentInventoryEntryType.TOP_GAME,
    lm.ContentInventoryEntryType.PLAYED_GAME,
    lm.ContentInventoryEntryType.WATCHED_MEDIA,
    lm.ContentInventoryEntryType.LISTENED_SESSION,
    lm.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lA = n(844789),
    lp = n(857071),
    lx = n(46054),
    lf = n(731068),
    lE = n(619517),
    lI = n(207133),
    lC = n(844222),
    l_ = n(463930),
    lv = n(251391),
    lN = n(601255),
    lj = n(562819),
    lT = n(234914),
    lS = n(59318),
    ly = n(837528),
    lb = n(754459),
    lR = n(967144),
    lM = n(342296),
    lL = n(696451),
    lk = n(218394);
function lO(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, ll.A)(l),
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
var lP = n(717125),
    lD = n(376943),
    lU = n(36491),
    lG = n(752755),
    lw = n(461715),
    lH = n(381941),
    lB = n(966101);
function lF(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = a.useRef(null),
        r = a.useRef(null),
        c = (function (e, t) {
            let n = (0, lw.CI)(e),
                i = (0, i1.bG)(
                    [lL.Ay, P.default],
                    () => {
                        let e = P.default.getId();
                        return lL.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, i1.bG)(
                    [lP.A],
                    () => null != n && n?.channelId != null && lP.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(W.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: o,
                    parentChannel: c,
                    user: d,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, i1.cf)(
                    [lG.A, nK.A, D.A, w.default, G.A],
                    () => {
                        let e = lG.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = nK.A.getGuild(n?.guildId),
                            i = D.A.getChannel(n?.channelId),
                            l = w.default.getUser(e?.author_id),
                            s = G.A.getGuildId(),
                            a = null != i && (0, lD.nc)(i);
                        return {
                            rawMediaPostEmbedData: e,
                            guild: t,
                            parentChannel: i,
                            user: l,
                            selectedGuildId: s,
                            canAccess: a,
                        };
                    },
                    [n],
                ),
                h = a.useMemo(() => {
                    let e = (0, lw.tU)({
                        mediaPostEmbedData: r,
                        guild: o,
                        parentChannel: c,
                        user: d,
                        selectedGuildId: u,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: d };
                }, [r, o, c, d, u, m]);
            return (
                a.useEffect(() => {
                    n?.threadId != null &&
                        (lG.A.getEmbedFetchState(n.threadId) !== lG.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lU.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: d } = (0, lb.A)(n.id, lH.Fd),
        u = (0, ly.VL)(n, i, d, !0),
        m = ia.kt.useSetting(),
        h = (0, lk.j)(),
        [g, A] = a.useState(!1),
        [x, E] = a.useState(c?.coverImage == null),
        I = (0, i1.bG)([lL.Ay, w.default], () => lL.Ay.isMember(c?.guildId, w.default.getCurrentUser()?.id), [c]),
        C = (0, i1.bG)([lL.Ay], () => (c?.authorId != null ? lL.Ay.getMember(c.guildId, c.authorId) : null)),
        _ = (0, lN.A)(C?.avatarDecoration != null ? C?.avatarDecoration : c?.user?.avatarDecoration),
        [v, N, j] = a.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, lR.gn)(C?.guildId, c?.authorId ?? void 0, N),
        { reducedMotion: S } = a.useContext(lC.C),
        [y, b] = a.useState(!1),
        R = a.useCallback(() => {
            A(!0);
        }, [A]),
        M = a.useCallback(() => {
            A(!1);
        }, [A]),
        L = a.useCallback(async () => {
            null != c &&
                ((0, nB.zV)(W.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: c.threadId,
                    channel_id: i.id,
                    can_access: c.canAccess,
                    is_member: I,
                }),
                c.canAccess
                    ? (0, nz.A)(W.BVt.CHANNEL(c.guildId, c.threadId, c.messageId))
                    : I
                      ? (0, nz.A)(W.BVt.CHANNEL(c.guildId, c.parentChannelId))
                      : await ig.Z2(c.guildId, {}, { channelId: c.parentChannelId }));
        }, [c, i, I]);
    if (null == c) return null;
    let k = (0, H.F_)({ avatarDecoration: _, size: (0, lj.Te)(tC._3.SIZE_40), canAnimate: y }),
        O = c.user?.getAvatarURL(c.guildId, 40, y);
    function U() {
        S.enabled || b((e) => !e);
    }
    let B = c.coverImage,
        F = null != B && (0, lS.ge)(B);
    return (0, s.jsxs)("div", {
        className: lB.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lB.iT,
                onMouseEnter: R,
                onMouseLeave: M,
                children: [
                    !x &&
                        (!0 === c.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: X.intl.string(X.t.rIbh8H),
                                  className: o()(lB.xn, { [lB.p6]: c.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(lT.A, {
                                  src: !(h && (m || g)) && F ? `${B}?format=png` : B,
                                  backgroundSrc: `${B}?format=png`,
                                  alt: X.intl.string(X.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lB.xn, { [lB.p6]: c.shouldSpoiler }),
                                  imageChildClassName: lB.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != c.coverImageOverlayText &&
                        (0, s.jsx)(eU.D, {
                            onClick: L,
                            children: (0, s.jsx)("div", {
                                className: lB.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lB.BS,
                                    children: [
                                        (0, s.jsx)(lO, { color: nw.A.colors.WHITE.css }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-overlay-light",
                                            children: c.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: lB.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lB.OA,
                        children: [
                            (0, s.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lB.hF,
                                children: c.title,
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lB.hF, lB.Fq),
                                children: c.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lB._5,
                        children: [
                            null != c.authorId &&
                                null != O &&
                                (0, s.jsx)(lM.A, {
                                    targetElementRef: r,
                                    userId: c.authorId,
                                    guildId: c.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: j,
                                    avatarUrl: c.avatarUrl,
                                    newAnalyticsLocations: [f.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, s.jsx)("div", {
                                            onMouseEnter: U,
                                            onMouseLeave: U,
                                            children: (0, s.jsx)(tI.eu, {
                                                ...e,
                                                ref: r,
                                                size: tC._3.SIZE_40,
                                                src: O,
                                                "aria-label": X.intl.string(X.t.KXz3XB),
                                                avatarDecoration: k,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lB.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lB.O9,
                                        children: [
                                            null != c.channelName &&
                                                (0, s.jsx)(lv.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lB.Xg,
                                                }),
                                            (0, s.jsx)(eU.D, {
                                                onClick: L,
                                                className: lB.HA,
                                                children: (0, s.jsx)(te.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: c.channelName ?? c.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != c.authorName &&
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lB.wn,
                                            children: X.intl.format(X.t.voIDKa, {
                                                authorName: c.authorName,
                                                authorNameHook: function () {
                                                    return null == c
                                                        ? null
                                                        : null == c.authorId
                                                          ? (0, s.jsx)(l_.V, {
                                                                name: c.authorName,
                                                                colorString: v,
                                                                colorStrings: T,
                                                                className: lB.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                lM.A,
                                                                {
                                                                    targetElementRef: l,
                                                                    userId: c.authorId,
                                                                    guildId: c.guildId,
                                                                    channelId: i.id,
                                                                    messageId: n.id,
                                                                    roleId: j,
                                                                    avatarUrl: c.avatarUrl,
                                                                    newAnalyticsLocations: [f.A.USERNAME],
                                                                    children: (e) =>
                                                                        (0, s.jsx)(l_.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: c.authorName,
                                                                            colorString: v,
                                                                            colorStrings: T,
                                                                            className: lB.fh,
                                                                        }),
                                                                },
                                                                (0, tG.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            c.canAccess
                                ? (0, s.jsx)(ex.$, { variant: "primary", onClick: L, text: c.ctaText })
                                : (0, s.jsx)(ex.$, { onClick: L, variant: "primary", text: c.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lV = n(492230),
    lz = n(68935),
    lJ = n(704413),
    lK = n(537039),
    lY = n(711038),
    lW = n(892340),
    lX = n(803306),
    lZ = n(491182),
    lq = n(622868),
    lQ = n(10364),
    l$ = n(378570),
    l0 = n(138298),
    l1 = n(761640),
    l2 = n(536637),
    l3 = n.n(l2),
    l5 = n(606049),
    l6 = n(943815),
    l7 = n(447215),
    l4 = n(39470),
    l8 = n(832038),
    l9 = n(318626),
    se = n(513653);
let st = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: r, reportedTimestamp: c } = e,
        d = w.default.getUser(t),
        u = a.useMemo(() => (i ? (0, l6.A)((0, ic.i$)(l3()(), "LT")) : null), [i]),
        m = (0, l7.P)({ user: d, channelId: l.id, guildId: n, messageId: r })((0, tN.m2)(d, l)),
        h = null != d ? d.getAvatarURL(n, (0, tC.FT)(tC._3.SIZE_16)) : se,
        g =
            null != d
                ? X.intl.format(l4.default["+zqXZs"], { username: d.username, onUserClick: m })
                : X.intl.string(l4.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(l9.NB, l9.JZ, u),
        children: [
            (0, s.jsx)(tI.eu, { src: h, size: tC._3.SIZE_16, className: l8.my, "aria-label": "" }),
            (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: l8.Xh, children: g }),
            (0, s.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: l8.Ek, children: "\u2022" }),
                    (0, s.jsx)(l5.A, { timestamp: c, className: l8.vE }),
                ],
            }),
        ],
    });
};
var sn = n(942925);
function si(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = a.useMemo(() => new im(t, n, i), [t, n, i]),
        r = (0, u.bG)(
            [D.A, w.default, U.A, ts.A, nK.A, n8.A],
            () => l.getForwardInfo(D.A, w.default, U.A, ts.A, nK.A, n8.A).footerInfo,
            [l],
            h.A,
        ),
        o = a.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = nK.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = eu.Ay.getCurrentlySelectedChannelId(),
                s = l1.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                a = l === i && s === e?.id;
            null == e ||
                null == n ||
                a ||
                null == i ||
                (l0.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l$.iN)(i),
                eK.default.track(W.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == r
        ? null
        : (0, s.jsxs)(eU.D, {
              className: sn.xQ,
              onClick: o,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, s.jsx)("img", { className: sn.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: sn.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, s.jsx)(n4._, { size: "xxs", color: nw.A.colors.TEXT_MUTED }),
              ],
          });
}
function sl(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: r } = e,
        o = (0, tN.m2)(t.author, i),
        {
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lb.A)(e.id, lH.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                r = (0, ly.m)(e, t, l, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, ly.Jo)(s, i),
                onPopoutRequestClose: a.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(lZ.A, {
        childrenExecutedCommand: (0, s.jsx)(st, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: r,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(lq.Ay, {
            message: t,
            channel: i,
            author: o,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
            renderPopout: lQ.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(it.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: sn.iU,
        author: o,
    });
}
function ss(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, r] = a.useState(void 0);
    a.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lX.getUser)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    r(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = a.useMemo(() => {
            let e = (0, ip.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        c = ia.hD.useSetting(),
        d = ia.rs.useSetting(),
        m = (0, u.bG)([ir.A], () => ir.A.isDeveloper),
        h = (0, n9.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: A,
            hasBailedAst: p,
        } = (0, ii.A)(o, {
            hideSimpleEmbedContent: c && d,
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
                  className: sn.kL,
                  children: (0, s.jsxs)("div", {
                      className: sn.Qs,
                      children: [
                          (0, s.jsx)(sl, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, is.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: A,
                              hasBailedAst: p,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: sn.Mf,
                          }),
                          (0, s.jsx)(si, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sa(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(ss, { message: t, snapshot: e, index: n }, n)),
    });
}
var sr = n(302031),
    so = n(738188),
    sc = n(123292),
    sd = n(239093),
    su = n(798362);
function sm(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === sd.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        a = t.fields?.find((e) => e.rawName === sd.AT.INCIDENT_TIMESTAMP) ?? void 0,
        r = null == a || null == a.rawValue ? void 0 : parseFloat(a.rawValue);
    return null == l || null == r
        ? null
        : (0, s.jsxs)(eU.D, {
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
                                  source: sd.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: su.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: su.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: su.U1,
                              children: [
                                  (0, s.jsx)(so.WarningIcon, {
                                      className: su.QW,
                                      color: nw.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: X.intl.string(X.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: su.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: X.intl.format(X.t.eevFb6, { daysAgo: l3()().diff(l3().unix(r), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: su.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: X.intl.string(X.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: su.xQ,
                      children: (0, s.jsx)(sc.Q, { text: X.intl.string(X.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sh = n(28863),
    sg = n(393033),
    sA = n(975430);
function sp(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sh.Anchor, {
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
                        source: sd.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sA.zh,
        children: X.intl.string(X.t.QsqdXC),
    });
}
function sx(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sh.Anchor, { className: sA.zh, href: t, children: X.intl.string(X.t["8/GdRB"]) });
}
function sf(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sd.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(sp, { classificationId: n });
        case sd.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(sx, { learnMoreLink: i });
        default:
            return null;
    }
}
function sE(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e9.k, { size: "xs", color: nw.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(so.WarningIcon, { color: nw.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: sA.Kk, children: n[t] }) : null;
}
function sI(e) {
    let { children: t, theme: n } = e,
        i = { default: sA._y, danger: sA.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sC(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sg.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eU.D, {
              className: sA.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sA.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sA.U1,
                              children: [
                                  (0, s.jsx)(sE, { iconType: n.icon }),
                                  (0, s.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sA.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: X.intl.format(X.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l3()().diff(l3().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sA.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(sI, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              sf,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var s_ = n(44724),
    sv = n(50777),
    sN = n(288254),
    sj = n(319060),
    sT = n(812282),
    sS = n(922016),
    sy = n(85935),
    sb = n(240248),
    sR = n(256449),
    sM = n(194004),
    sL = n(148355),
    sk = n(3026),
    sO = n(862482),
    sP = n(847374),
    sD = n(964486),
    sU = n(235986),
    sG = n(624793),
    sw = n(636537),
    sH = n(639245),
    sB = n(87719),
    sF = n(725807),
    sV = n(750385),
    sz = n(850992),
    sJ = n(625494),
    sK = n(698279),
    sY = n(665055),
    sW = n(844749);
function sX(e) {
    (eK.default.track(W.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
        location_section: W.JJy.STICKER_POPOUT,
    }),
        (0, sB.e)());
}
function sZ(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(sU.A, {
        children: [
            (0, s.jsx)(sL.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(sU.A, {
                direction: sU.A.Direction.VERTICAL,
                justify: sU.A.Justify.CENTER,
                className: sW.bM,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-md/semibold", children: (0, s.jsx)(sk.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function sq(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [r, o, c] = (0, u.yK)(
            [sV.A],
            () => [sV.A.getStickerPack(n.pack_id), !sV.A.hasLoadedStickerPacks, sV.A.isPremiumPack(n.pack_id)],
            [n],
        ),
        d = (function (e) {
            let { sticker: t, stickerPack: n } = e;
            return a.useMemo(
                () =>
                    null == n
                        ? []
                        : n.stickers
                              .slice(0, 4)
                              .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                [t, n],
            );
        })({ sticker: n, stickerPack: r });
    (0, sR.Sr)(n.pack_id);
    let m = (0, sR.pD)(i),
        h = { refreshPositionKey: l, channel: i },
        g = a.useRef(h);
    return (a.useEffect(() => {
        g.current = h;
    }),
    a.useEffect(() => {
        let { refreshPositionKey: e } = g.current;
        e();
    }, [o]),
    a.useEffect(() => {
        let { channel: e } = g.current;
        eK.default.track(W.HAw.OPEN_POPOUT, {
            type: W.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nB.dI)(e),
        });
    }, [n.pack_id]),
    o || null == r)
        ? (0, s.jsx)(sy.Y0, { className: sY.v0 })
        : (0, s.jsxs)(sy.Uq, {
              className: sY.Bm,
              children: [
                  (0, s.jsx)(te.D, { variant: "heading-md/semibold", children: n.name }),
                  (0, s.jsx)(p.E, {
                      variant: "text-sm/normal",
                      children: c
                          ? X.intl.format(X.t.auckXz, { stickerPackName: r.name })
                          : X.intl.format(X.t.OzB6e3, { stickerPackName: r.name }),
                  }),
                  (0, s.jsx)("ul", {
                      className: sY.pQ,
                      children: d.map((e) => (0, s.jsx)(sL.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                  }),
                  c &&
                      (0, s.jsx)("div", {
                          className: sY.j0,
                          children: (0, s.jsx)(
                              ex.$,
                              {
                                  variant: "secondary",
                                  size: "sm",
                                  text: X.intl.string(X.t.GPy3Ar),
                                  onClick: function () {
                                      null != r &&
                                          (c &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sJ._.dispatchToLastSubscribed(W.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sK.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && sz.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: r, stickerPickerCategories: m }),
                                          t());
                                  },
                              },
                              "view-sticker-pack",
                          ),
                      }),
              ],
          });
}
function sQ(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: r } = e,
        [c, d] = a.useState(null),
        [m, h] = a.useState(!1),
        g = w.default.getCurrentUser(),
        A = t0.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([nK.A], () => nK.A.getGuild(n.guild_id)),
        f = null != x,
        [E, I] = a.useState(!1),
        [C, _] = a.useState(null),
        v = a.useMemo(
            () => ({
                page: null != i.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
                section: W.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: N } = a.useRef({ guild_id: i.getGuildId(), ...(0, nB.dI)(i) }),
        j = { stickerSourceGuild: x, refreshPositionKey: r },
        T = a.useRef(j);
    (a.useEffect(() => {
        T.current = j;
    }),
        a.useEffect(() => {
            let { stickerSourceGuild: e } = T.current;
            !(async function () {
                if (null == e || e.features.has(W.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    d(
                        await ((t = n.id),
                        sw.Bo.get({ url: W.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ig.jE)(e.body) : null))
                            .catch(() => null)),
                    );
                }
                h(!0);
            })();
        }, [n.id, f]));
    let S = n.guild_id === i.getGuildId(),
        y = null != c,
        b = !1,
        R = "Custom Sticker Popout";
    A
        ? (t = f
              ? S
                  ? X.intl.string(X.t.fZ0DiG)
                  : X.intl.string(X.t["1f6D9m"])
              : y
                ? X.intl.string(X.t.yHmoR9)
                : X.intl.string(X.t.vZaScH))
        : f
          ? ((t = S ? X.intl.string(X.t.jNphpt) : X.intl.string(X.t.lyD5ZW)),
            (b = !0),
            (R = "Custom Sticker Popout (Upsell)"))
          : y
            ? ((t = X.intl.string(X.t.IuXYch)), (b = !0), (R = "Custom Sticker Popout (Upsell)"))
            : ((t = X.intl.format(X.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (sX(i), l());
                  },
              })),
              (R = "Custom Sticker Popout (Soft Upsell)"));
    let M = !b && !f && y && A;
    return (a.useEffect(() => {
        let { refreshPositionKey: e } = T.current;
        e();
    }, [m, c]),
    (0, sD.Ay)(() => {
        eK.default.track(W.HAw.OPEN_POPOUT, { type: R, ...N });
    }),
    m)
        ? (0, s.jsxs)(sy.Uq, {
              className: sW.Bm,
              children: [
                  (function () {
                      async function e() {
                          if (null == c || f) return;
                          l();
                          let e = c.id;
                          try {
                              (await ih.A.joinGuild(e), ih.A.transitionToGuildSync(e));
                          } catch {}
                      }
                      return (0, s.jsxs)("div", {
                          className: sW.gH,
                          children: [
                              (0, s.jsx)(sZ, { description: t, sticker: n }),
                              b &&
                                  (0, s.jsx)(sF.A, {
                                      className: sW.lI,
                                      subscriptionTier: nR.pe.TIER_2,
                                      size: sO.$n.Sizes.SMALL,
                                      fullWidth: !0,
                                      textOptions: { textOverride: X.intl.string(X.t["gl/XHJ"]) },
                                      onSubscribeModalClose: (t) => (t ? e() : l()),
                                      postSuccessGuild: f || null == c ? void 0 : c,
                                      premiumModalAnalyticsLocation: v,
                                  }),
                              M &&
                                  (0, s.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: sW.lI,
                                      children: (0, s.jsx)(ex.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: X.intl.string(X.t.riu2R5),
                                          fullWidth: !0,
                                          onClick: e,
                                      }),
                                  }),
                          ],
                      });
                  })(),
                  (null != x || null != c) &&
                      (function () {
                          if (!y && !f) return;
                          let e = (c?.stickers ?? [])
                                  .slice(0, 13)
                                  .filter((e) => e.id !== n.id)
                                  .slice(0, 12),
                              t = null != c ? sG.GO.createFromDiscoverableGuild(c) : sG.GO.createFromGuildRecord(x);
                          return (0, s.jsxs)("div", {
                              className: sW.tl,
                              children: [
                                  (0, s.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: sW.YW,
                                      children: f ? X.intl.string(X.t.kx6pEG) : X.intl.string(X.t.pDE7Gb),
                                  }),
                                  (0, s.jsx)(sH.G7, {
                                      expressionSourceGuild: t,
                                      hasJoinedExpressionSourceGuild: f,
                                      isDisplayingJoinGuildButtonInPopout: M,
                                      closePopout: l,
                                  }),
                                  !f &&
                                      (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(eU.D, {
                                                  onClick: function () {
                                                      (r(), I(!E));
                                                  },
                                                  className: sW.wK,
                                                  children: (0, s.jsxs)(sU.A, {
                                                      children: [
                                                          (0, s.jsx)(p.E, {
                                                              className: sW.__invalid_showMoreEmojisLabel,
                                                              variant: "text-xs/normal",
                                                              color: "none",
                                                              children: X.intl.string(X.t.vtH5hn),
                                                          }),
                                                          (0, s.jsx)(sP.a, {
                                                              size: "md",
                                                              color: "currentColor",
                                                              className: o()(sW.ZB, { [sW.cP]: !E }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              E &&
                                                  (0, s.jsx)(sU.A, {
                                                      wrap: sU.A.Wrap.WRAP,
                                                      align: sU.A.Align.START,
                                                      justify: sU.A.Justify.START,
                                                      className: sW.LX,
                                                      children: e.map((e) =>
                                                          (0, s.jsx)(
                                                              tz.m,
                                                              {
                                                                  text: e.name,
                                                                  ...sy.Uk,
                                                                  children: (0, s.jsx)(
                                                                      "div",
                                                                      {
                                                                          className: o()(sW.Th, {
                                                                              [sY.vT]: null != C && C !== e.id,
                                                                          }),
                                                                          onMouseEnter: () => {
                                                                              _(e.id);
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              _(null);
                                                                          },
                                                                          children: (0, s.jsx)(sL.A, {
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
        : (0, s.jsx)(sy.Y0, { className: sY.v0 });
}
function s$(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(sy.Uq, {
        className: sY.Bm,
        children: (0, s.jsx)(sZ, {
            sticker: i,
            description: X.intl.format(X.t.hGWuxU, {
                openPremiumSettings: () => {
                    (n(), sX(t));
                },
            }),
        }),
    });
}
let s0 = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [a, r] = (0, sR.Zq)(t, !0);
    return null != a && (0, lz.FD)(a)
        ? (0, s.jsx)(sq, { sticker: a, closePopout: i, channel: n, refreshPositionKey: l })
        : null != a && (0, lz.Xw)(a)
          ? (0, s.jsx)(sQ, { sticker: a, channel: n, closePopout: i, refreshPositionKey: l })
          : r
            ? (0, s.jsx)(s$, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(sy.Y0, {});
};
var s1 = n(751686);
let s2 = (0, sb.xI)(sj.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    s3 = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = a.useRef(null),
            [r, o] = a.useState(!0),
            [c, d] = a.useState(String(Date.now())),
            [u] = (0, sR.Zq)(t, i),
            { analyticsLocations: m } = (0, E.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: s1.Zl,
                children: [(0, s.jsx)(sT.s, { size: "xs", color: "currentColor", className: s1.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(E.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: s1.be,
                children: (0, s.jsx)(sS.Y, {
                    align: "center",
                    animation: sS.Y.Animation.TRANSLATE,
                    positionKey: c,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(s0, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => d(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tz.m, {
                            ...sy.Uk,
                            shouldShow: r,
                            __unsupportedReactNodeAsText: (0, sy.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nB.Ay.trackWithMetadata(W.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nR.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sM.Tw)(e.format_type),
                                        is_custom: (0, sM.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eU.D, {
                                innerRef: l,
                                className: s1.q7,
                                onClick: (e) => {
                                    (o(!r), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(sL.A, { isInteracting: i, size: s2, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var s5 = n(406704),
    s6 = n(531142),
    s7 = n(140735),
    s4 = n(442433),
    s8 = n(143413),
    s9 = n(935208),
    ae = n(321045),
    at = n(456874),
    an = n(707539),
    ai = n(80682),
    al = n(521981),
    as = n(448368),
    aa = n(943220),
    ar = n(838541);
function ao(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [U.A],
            () => ({ isBlocked: U.A.isBlockedForMessage(t), isIgnored: U.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = a.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, ai.Eq)(r, "ThreadMessageAccessoryMessage");
    let o = a.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, al.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        c = (0, sN.IL)(n);
    return (0, s.jsxs)("div", {
        className: l9.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: l9.FJ }),
            (0, s.jsx)(aa.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: l9.Au,
                children: c
                    ? (0, s.jsx)("span", { className: l9.dp, children: X.intl.string(X.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: a,
                              leadingIcon: r,
                              trailingIcon: o,
                          } = (0, as.o)(e, t, n, i, l9.tP, {
                              trailingIconClass: l9._v,
                              leadingIconClass: l9.a5,
                              iconSize: ar.eJ,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [r, a ?? (0, s.jsx)("span", { className: l9.dp, children: l }), o],
                          });
                      })(t, o, i, l),
            }),
        ],
    });
}
var ac = n(747926),
    ad = n(650583),
    au = n(77462);
function am(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([D.A], () => D.A.getChannel(s9.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(ah, { channel: i, compact: n, isSystemMessage: (0, s8.A)(t) });
}
function ah(e) {
    var t;
    let i,
        l,
        a,
        { channel: r, compact: c, isSystemMessage: d } = e,
        m = (0, io.Ay)(r),
        h = (0, u.bG)([at.A], () => at.A.getCount(r.id)),
        g =
            ((t = r),
            (i = (0, u.bG)([at.A], () => at.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([at.A], () => at.A.getCount(t.id))),
            (a = (0, an.JO)(t)),
            t.threadMetadata?.archived
                ? X.intl.string(X.t.ZTo4HS)
                : null == l || 0 === l
                  ? X.intl.string(X.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: X.intl.string(X.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: au.vE, children: (0, an.aK)(a) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(ao, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: au.vE, children: (0, an.aK)(a) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(au.GI, { [au.E]: !c, [au.E_]: d }) }),
            (0, s.jsx)(eU.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, ac.JA)(r, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === ad.dh.SPACE || e.key === ad.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, ac.JA)(r, n));
                },
                onContextMenu: function (e) {
                    (0, s4.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("603998"),
                            n.e("947502"),
                            n.e("343266"),
                            n.e("965789"),
                            n.e("412255"),
                            n.e("896804"),
                            n.e("63340"),
                            n.e("21106"),
                            n.e("421060"),
                            n.e("368358"),
                            n.e("699011"),
                            n.e("65200"),
                            n.e("285802"),
                            n.e("703869"),
                            n.e("51212"),
                            n.e("584615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: r, ...t });
                    });
                },
                "aria-roledescription": X.intl.string(X.t["8ipxiY"]),
                className: o()(au.kL, { [au.og]: d }),
                children: (0, s.jsxs)(s6.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: au.kq,
                            children: [
                                (0, s.jsx)(s7.A, { children: X.intl.string(X.t["7Xm5QI"]) }),
                                (0, s.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: au.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: au.lO,
                                    "aria-hidden": !A,
                                    children: (0, ae.ub)(h, r.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: au.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ag = n(168543),
    aA = n(321191),
    ap = n(215530),
    ax = n(331322),
    af = n(562153),
    aE = n(183555),
    aI = n(999291),
    aC = n(391210),
    a_ = n(249790),
    av = n(254828),
    aN = n(783123),
    aj = n(213994),
    aT = n(753504);
function aS(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: a } = e,
        r = (0, u.bG)([w.default], () => w.default.getUser(t)),
        o = (0, u.bG)([U.A], () => U.A.isBlocked(t)),
        c = af.Ay.useName(n, i, r),
        d = (0, aI.Ay)(t, n),
        [m, h] = (0, aC.A)(),
        { analyticsLocations: g } = (0, E.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        A = (0, aE.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == r
        ? null
        : (0, s.jsx)(E.f5, {
              value: g,
              children: (0, s.jsx)(aE.of, {
                  value: A,
                  fetchStartedAt: d?.fetchStartedAt,
                  fetchEndedAt: d?.fetchEndedAt,
                  isLoaded: d?.isLoaded === !0 && m,
                  children: (0, s.jsx)(aj.A, {
                      user: r,
                      displayProfile: null,
                      size: "sm",
                      className: aT.k,
                      containerRef: h,
                      headingText: X.intl.formatToPlainString(X.t["8yRya1"], { name: c }),
                      children: (0, s.jsxs)(ax.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(ax.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(a_.A, { user: r, guildId: n }),
                                      (0, s.jsx)(te.D, {
                                          variant: "heading-lg/bold",
                                          children: X.intl.string(X.t.b33pLD),
                                      }),
                                      (0, s.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          children: X.intl.format(o ? X.t["8F+WNz"] : X.t["/cZp5s"], { username: c }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(ax.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(aN.A, { isBlocked: o, onClick: a }),
                                      (0, s.jsx)(av.A, { userId: t, onClick: a }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var ay = n(273147),
    ab = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function aR(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    nB.Ay.trackWithMetadata(W.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function aM(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [r, o] = (0, ap.A)(t),
        c = a.useRef(!1),
        d = (0, u.bG)(
            [w.default, aA.A],
            () => {
                if (aA.A.isFetchingProfile(t, n ?? void 0) || null != w.default.getUser(t)) return null;
                let e = aA.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? ab.NO_USER_RECORD : null;
            },
            [t, n],
        ),
        m = a.useRef(!1);
    (a.useEffect(() => {
        m.current = !1;
    }, [t]),
        a.useEffect(() => {
            null == d ||
                m.current ||
                ((m.current = !0),
                aR({
                    userId: t,
                    reason: d,
                    guildId: n,
                    channelId: i,
                    errorStatus: aA.A.getUserProfile(t)?.fetchError?.status,
                }));
        }, [d, t, n, i]));
    let h = a.useCallback((e) => {
            null != e && c.current && ((c.current = !1), e.focus());
        }, []),
        g = a.useCallback(() => {
            ((c.current = !0), o());
        }, [o]);
    return r
        ? (0, s.jsx)(aS, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(ay.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class aL extends a.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (na.A.captureException(e),
            aR({
                userId: this.props.userId,
                reason: ab.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function ak(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, ag.c)("UserProfileEmbed")
        ? (0, s.jsx)(aL, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(aM, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var aO = n(383233),
    aP = n(834942),
    aD = n(644447),
    aU = n(659674),
    aG = n(998218),
    aw = n(5095),
    aH = n(294520),
    aB = n(320095),
    aF = n(863439),
    aV = n(707985),
    az = n(730852),
    aJ = n(265422),
    aK = n(537547);
function aY(e) {
    let { guild: t, channel: n, message: i } = e,
        l = G.A.getGuildId(),
        r = eu.Ay.getChannelId(l),
        o = a.useCallback(() => {
            (eK.default.track(W.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: r,
            }),
                (0, aJ.i)(t.id, n.id),
                az.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, r]),
        c = (0, s.jsx)(i2.A.Channel, { channel: n });
    return (0, s.jsx)(i2.A, {
        children: (0, s.jsxs)(i2.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: lc.iH,
                    children: [
                        (0, s.jsx)(i2.A.Icon, { guild: t }),
                        (0, s.jsx)(i2.A.Info, {
                            title: c,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: lc.FA,
                                children: [
                                    X.intl.format(X.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: lc.E3,
                                        children: (0, s.jsx)(aK.A, { guild: t, isBannerVisible: !1 }),
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
                        text: n.isGuildStageVoice() ? X.intl.string(X.t["7vb2cc"]) : X.intl.string(X.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function aW(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        a = D.A.getChannel(l),
        r = nK.A.getGuild(i);
    return null != a && a.isGuildVocal() && null != r && ts.A.can(W.xBc.VIEW_CHANNEL, a) && ts.A.can(W.xBc.CONNECT, a)
        ? (0, s.jsx)(aY, { guild: r, channel: a, message: n })
        : null;
}
var aX = n(789645),
    aZ = n(298236),
    aq = n(953756),
    aQ = n(564107),
    a$ = n(216763),
    a0 = n(359886);
function a1(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: l,
            getOnMediaItemContextMenu: a,
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: c,
            onSuppressEmbed: d,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, aq.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(aQ.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: a,
              shouldHideMediaOptions: r,
              enabledContentHarmTypeFlags: c,
              children: (0, s.jsx)(aZ.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(aq.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(aq.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(a$.O0, a0.k, a0.z, { [a$.dK]: u }),
                                      children: [
                                          null != d &&
                                              (0, s.jsx)(eU.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: a$.PP,
                                                  onClick: d,
                                                  "aria-label": X.intl.string(X.t.GT3fNz),
                                                  children: (0, s.jsx)(aX.P, { size: "xs", color: "currentColor" }),
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
var a2 = n(451988),
    a3 = n(261958),
    a5 = n(212245),
    a6 = n(775602),
    a7 = n(62583),
    a4 = n(956549),
    a8 = n(550151),
    a9 = n(392054),
    re = n(853390),
    rt = n(290863),
    rn = n(811024),
    ri = n(360469),
    rl = n(555375);
let rs = a.memo((e) => {
    let { start: t } = e,
        [n, i] = a.useState(0),
        l = (0, lk.j)(),
        s = (0, u.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
        r = !1 === l || s;
    return (
        a.useEffect(() => {
            let e = new a2.IX();
            return (
                e.start(r ? 15 * nf.A.Millis.SECOND : nf.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nf.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [r, t]),
        (0, re.fU)(n)
    );
});
rs.displayName = "ActivityRuntimeCounter";
let ra = a.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: r } = e,
        { analyticsLocations: c } = (0, E.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        d = (0, a5.p)(),
        m = (0, u.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([P.default], () => P.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: x,
            activityLaunchState: I,
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
        C = A?.userIds,
        _ = (0, u.yK)(
            [w.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => w.default.getUser(e))
                    .filter(iH.Vq),
            [C],
        ),
        v = (0, u.bG)(
            [rt.A],
            () => {
                if (null == C) return null;
                for (let e of C) {
                    let t = rt.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, C],
        ),
        N = v?.details,
        j = a.useMemo(() => {
            let e = new i3.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = ri.Gl), e);
        }, [n]),
        T = (0, a8.vG)({ userId: g, channelId: i, application: j }),
        S = null == A,
        y = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return a.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            a = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? X.intl.string(X.t.RscU7I) : X.intl.string(X.t.sqe0hj),
                                tooltip: void 0,
                            },
                            r = (0, rn.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...a, disabled: !0, text: X.intl.string(X.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...a, disabled: !r, tooltip: r ? void 0 : X.intl.string(X.t.f41E1g) };
                        if (null != n && n !== a8.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case a8.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = X.intl.string(X.t.hHGrWz);
                                    break;
                                case a8.Gy.ACTIVITY_AGE_GATED:
                                    e = X.intl.string(X.t["4WuFRE"]);
                                    break;
                                case a8.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = X.intl.string(X.t.uGDCcw);
                                    break;
                                case a8.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = X.intl.string(X.t.UXoQTp);
                                    break;
                                case a8.Gy.CHANNEL_FULL:
                                    e = X.intl.string(X.t.rZfiNq);
                                    break;
                                case a8.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = X.intl.string(X.t.w5SAps);
                                    break;
                                case a8.Gy.NO_CHANNEL:
                                case a8.Gy.NO_GUILD:
                                case a8.Gy.NO_USER:
                                case a8.Gy.IS_AFK_CHANNEL:
                                    e = X.intl.string(X.t.Etp6uI);
                            }
                            return { ...a, disabled: !0, tooltip: e };
                        }
                        return a;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: A, joinability: T, currentEmbeddedActivity: x, channel: m }),
        b = a.useId(),
        R = null != I && I.isLaunching && I.componentId === b;
    async function M() {
        (eK.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: S,
            cta: "Play",
        }),
            S
                ? await (0, a4.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: d.location,
                      analyticsLocations: c,
                      componentId: b,
                      commandOrigin: a9.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, a7.A)({
                      applicationId: A.applicationId,
                      activityChannelId: i,
                      locationObject: d.location,
                      analyticsLocations: c,
                      componentId: b,
                  }));
    }
    let L = y.disabled ? X.intl.string(X.t.JBnc7N) : X.intl.string(X.t.cX9uLZ),
        k = (0, et.F)(j, () => {
            eK.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        O = H.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    y.disabled && (t = y.tooltip);
    let U = _.length,
        G = v?.timestamps?.start ?? v?.created_at,
        B = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case W.$pd.STREAMING:
                    return { text: X.intl.formatToPlainString(X.t.tyCw2q, { count: n }), Icon: z.o };
                case W.$pd.LISTENING:
                    return { text: X.intl.formatToPlainString(X.t["2l8yka"], { count: n }), Icon: J.T };
                default:
                    return { text: X.intl.formatToPlainString(X.t.yJj035, { count: n }), Icon: K.GameControllerIcon };
            }
        })({ activity: v, activityUsersCount: U }),
        F = [
            {
                label: y.text,
                trackingArea: Q.kY.PLAY,
                onClick: M,
                disabled: y.disabled,
                disabledReason: t,
                submitting: R,
            },
        ];
    return (0, s.jsx)(V.h, {
        header: X.intl.string(X.t.pkq6Vq),
        title: n.name,
        iconSrc: O,
        info: (0, s.jsx)("div", {
            className: rl.QR,
            children: S
                ? (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: L })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != N &&
                              (0, s.jsxs)("div", {
                                  className: rl.oL,
                                  children: [
                                      null != G &&
                                          (0, s.jsxs)("div", {
                                              className: rl.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: rl.y9,
                                                      children: (0, s.jsx)(B.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(rs, { start: G }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(rl.DT, rl.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(a3.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, s.jsx)(p.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: N,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          U > 0 && (0, s.jsx)(q, { activityUsers: _, guildId: l, activityText: B.text }),
                      ],
                  }),
        }),
        actions: F,
        onClickContent: k,
        trackingConfig: {
            id: n.id,
            linkType: en.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: r.id,
            isDeadEnd: S,
        },
    });
});
var rr = n(164664),
    ro = n(439401),
    rc = n(657044),
    rd = n(863574),
    ru = n(707606),
    rm = n(456412),
    rh = n(429913),
    rg = n(242874),
    rA = n(499454),
    rp = n(165191),
    rx = n(928550),
    rf = n(976860),
    rE = n(871123),
    rI = n(317560),
    rC = n(30793),
    r_ = n(189081);
function rv(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, ll.A)(i),
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
var rN = n(738533),
    rj = n(45938),
    rT = n(615396),
    rS = n(427262),
    ry = n(561028),
    rb = n(820284),
    rR = n(674378),
    rM = n(598429),
    rL = n(979604);
function rk(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: l,
            disabledVariant: a,
            hideNotLaunchable: r,
            tooltipPosition: o,
            onClick: c,
            className: d,
            source: m,
            hover: h,
            innerClassName: g,
        } = e,
        A = {
            fullWidth: n,
            size: i,
            disabledVariant: a,
            tooltipPosition: o,
            onClick: c,
            className: d,
            hover: h,
            innerClassName: g,
        },
        p = (0, u.bG)([r_.A], () => r_.A.getActiveLibraryApplication(t.id)),
        x = null != p ? p.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([ez.A], () => null != f && !ez.A.didFetchingSkuFail(f));
    return null != p && (0, rR.XZ)(p)
        ? (0, s.jsx)(rL.A, { ...A, playButtonVariant: l, libraryApplication: p, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(rM.A, { ...A, variant: l, hideNotLaunchable: r, applicationId: t.id });
}
function rO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return X.intl.string(X.t.RWouSQ);
    if (e.premium && !n) return X.intl.string(X.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t1.$g)(i.amount, i.currency);
        else return X.intl.string(X.t.QQsaCc);
    return X.intl.string(X.t.RWouSQ);
}
var rP = n(176140),
    rD =
        (((l = rD || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function rU(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(rP.nM, t),
        children: [
            (0, s.jsx)(rc._, { size: "md", color: "currentColor", className: rP.Kk }),
            X.intl.string(X.t["7eicAO"]),
        ],
    });
}
function rG(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rP.nM, n),
        children: [(0, s.jsx)(tE.t, { size: "md", color: "currentColor", className: rP.Kk }), rO(t)],
    });
}
function rw(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rP.EQ, n), children: t.getDisplaySalePercentage() });
}
function rH(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rP.I8, n), children: rO(t, !1) });
}
function rB(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: rO(t) });
}
function rF(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rP.nM, n),
        children: [(0, s.jsx)(rw, { sku: t }), (0, s.jsx)(rH, { sku: t }), (0, s.jsx)(rB, { sku: t })],
    });
}
function rV(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: X.intl.string(X.t.QQsaCc) });
}
class rz extends a.PureComponent {
    static Types = rD;
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
                return (0, s.jsx)(rV, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(rU, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(rG, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(rF, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(rB, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(rV, { className: t });
            case 3:
                return (0, s.jsx)(rG, { sku: n, className: o()(rP.OB, t) });
            case 2:
                return (0, s.jsx)(rF, { sku: n, className: o()(rP.dk, t) });
            default:
                return (0, s.jsx)(rB, { className: o()(rP.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(rV, {});
                break;
            case 2:
                t = (0, s.jsxs)(a.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rP.nM,
                            children: [(0, s.jsx)(rB, { sku: i }), (0, s.jsx)(rw, { sku: i })],
                        }),
                        (0, s.jsx)(rH, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(rB, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(rP.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rP.Pl);
            case 3:
                return this.renderGeneric(e, rP.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rP.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var rJ = n(301568);
let rK = {
    [W.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...a } = e;
            return (0, s.jsx)("svg", {
                ...(0, ll.A)(a),
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
        getLabel: () => X.intl.string(X.t["0/xHFO"]),
    },
    [W.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...a } = e;
            return (0, s.jsx)("svg", {
                ...(0, ll.A)(a),
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
        getLabel: () => X.intl.string(X.t.E4u4n5),
    },
    [W.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...a } = e;
            return (0, s.jsx)("svg", {
                ...(0, ll.A)(a),
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
        getLabel: () => X.intl.string(X.t.tcawo3),
    },
};
function rY(e) {
    let { operatingSystem: t, className: n } = e,
        i = rK[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tz.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function rW(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(rJ.I, n),
        children: t.map((e) => (0, s.jsx)(rY, { operatingSystem: e, className: o()(rJ.A, i) }, e)),
    });
}
var rX = n(198985);
let rZ = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rX.T, t),
        children: (0, s.jsx)("span", { className: rX.Q, children: X.intl.string(X.t["14lP0W"]) }),
    });
};
var rq = n(992856);
let rQ = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rq.T, t),
        children: (0, s.jsx)("span", { className: rq.Q, children: X.intl.string(X.t["8IfYqa"]) }),
    });
};
var r$ = n(615300),
    r0 = n(868285),
    r1 = n(358618),
    r2 = n(983851),
    r3 = n(133296),
    r5 = n(607470),
    r6 = n(856328);
class r7 extends a.Component {
    _animatedValue = new r$.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), r$.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        r$.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(r$.A.img, {
            className: o()({ [r6.YC]: i }, t),
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
            ? (0, s.jsx)(r$.A.div, { className: o()(r6.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(r$.A.div, {
                  className: o()(l ? r6.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tK.y, {
                                className: r6.u1,
                                itemClassName: r6.$N,
                                type: tK.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class r4 extends a.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = a.createRef();
    videoTimeout = new a2.Ep();
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
                muted: r,
                splashClassName: c,
                splashPlaceholderClassName: d,
                renderMediaOverlay: u,
            } = this.props,
            m = r ? r1._ : r2.H;
        return (0, s.jsxs)(a.Fragment, {
            children: [
                i0.Fr
                    ? null
                    : (0, s.jsx)(r5.A, {
                          className: o()(r6.Yi, c),
                          muted: r,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(r0.F, {
                    children: l && e ? null : (0, s.jsx)(r7, { className: o()(r6.NB, d), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eU.D, {
                    className: o()(r6.b4, { [r6.HY]: l && e, [r6.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: r6.i2 }) : null,
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
            { currentIndex: a } = this.state;
        return i
            ? (0, s.jsx)(r7, { className: o()(r6.Yi, l), src: e[a], title: n }, a)
            : (0, s.jsx)(r7, { className: o()(r6.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(r7, { className: o()(r6.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(r3.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: r6.mZ,
                  disable: !e,
                  children: (0, s.jsx)(r0.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: a, videoLoaded: r } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(r6.__invalid_tileMedia, t),
                  children: [null == e || a ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && r)],
              });
    }
}
var r8 = n(366523),
    r9 = n(371794),
    oe = n(622413),
    ot = n(435919);
class on extends a.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: l } = this.props,
            a = (l || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, s.jsxs)("div", {
                  className: ot.ED,
                  children: [
                      (0, s.jsx)(rz, {
                          type: rz.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: a && i ? ot.ae : ot.Ek,
                      }),
                      (0, s.jsx)(rW, { systems: [W.uje.WINDOWS], className: ot.iD }),
                      a ? (0, s.jsx)("div", { children: "deprecated!" }) : null,
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
            isHorizontal: r,
            storeListing: c,
        } = this.props;
        return (0, rE.bF)(l)
            ? (0, s.jsx)(r8.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: ot.A$,
                  backgroundImageClassName: ot.iZ,
                  foregroundImageClassName: ot.O7,
              })
            : (0, s.jsxs)(a.Fragment, {
                  children: [
                      (0, s.jsx)(r4, {
                          className: o()(ot.H1, { [ot.ZC]: r }),
                          video: null != c.previewVideo ? (0, r9.YE)(l.applicationId, c.previewVideo) : void 0,
                          image: null != c.thumbnail ? (0, r9.YE)(l.applicationId, c.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ot.ZI,
                          splashPlaceholderClassName: ot.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(rQ, { className: o()(ot.LJ, { [ot.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(rZ, { className: o()(ot.LJ, { [ot.V9]: e }) })
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
                renderCustomTitle: a,
                renderCustomMedia: r,
                isEmbed: o,
            } = this.props,
            c = o ? rd.ug : oe.A;
        return (0, s.jsx)(c, {
            className: i,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != a ? a : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var oi = n(587895),
    ol = n(976150);
class os extends a.Component {
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
        (null == e || null == n) && (0, ew.QB)(t);
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
            className: ol.h,
            children: (0, s.jsx)(ex.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: X.intl.string(X.t["W+NB90"]),
                onClick: () => {
                    (0, rf.pX)(W.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: a, renderCustomMedia: r } = this.props,
            { playing: o, muted: c } = this.state,
            d = i > rd.Tm;
        return (0, s.jsx)(on, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: c,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: l,
            renderCustomTagline: a,
            renderCustomMedia: r,
            isHorizontal: d,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: a } = this.props;
        if (null != a) return (0, s.jsx)("div", { className: ol.i, children: a() });
        if (null == n) return null;
        let r = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(W.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: ol.i,
            children: [
                !r || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(rk, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ol.h,
                          source: W.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(rz, { type: rz.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            a = n > rd.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(rd.Wb, { isHorizontal: a })
            : e.productLine === W.EZt.PREMIUM
              ? (0, s.jsx)(rb.A, {
                    section: W.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(ry.N_, {
                        onClick: this.handleLinkClick,
                        to: W.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(rb.A, { section: W.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let oa = [ez.A, r_.A, eJ.A];
function or(e) {
    let { skuId: t } = e,
        n = ez.A.get(t),
        i = null != n ? oi.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: ez.A.didFetchingSkuFail(t),
        inLibrary: null != n && r_.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eJ.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? r_.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let oo = (0, rm.A)((0, ru.A)(os)),
    oc = u.Ay.connectStores(oa, or)(oo),
    od = (0, ru.A)(u.Ay.connectStores(oa, or)(os));
var ou = n(866022);
function om(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eU.D, {
        className: ou.kP,
        onClick: t,
        children: [
            (0, s.jsx)(rc._, { size: "md", color: "currentColor", className: ou.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? X.intl.string(X.t.Wi99Ro) : X.intl.string(X.t["+tXad7"]) }),
        ],
    });
}
class oh extends a.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rd.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === W.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, ev.openUserSettings)(e_.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? X.intl.string(X.t.mT9B49) : X.intl.string(X.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(ex.$, {
                  variant: "primary",
                  size: "sm",
                  text: X.intl.string(X.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(ex.$, { variant: "primary", size: "sm", text: X.intl.string(X.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? X.intl.string(X.t.QXgO5w)
            : this.props.isSelfGift
              ? X.intl.string(X.t.eEM3dq)
              : X.intl.string(X.t.tB8S6u);
    render() {
        return (0, s.jsx)(rd.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class og extends a.Component {
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
                ? (0, rf.pX)(W.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rf.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, ev.openUserSettings)(e_.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eK.default.track(W.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: W.ZSU.BUTTON_CTA },
            }));
        let a = l !== W.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rA.h)({ processedCode: n, channelContext: t, customGiftMessage: a, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eK.default.track(W.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rN.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rE.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, rI.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, ev.openUserSettings)(e_.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(W.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(sU.A, {
            justify: sU.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(sU.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(om, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(sU.A, {
                    align: sU.A.Align.END,
                    justify: sU.A.Justify.END,
                    className: ou.yu,
                    direction: sU.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: X.intl.format(X.t.nZBvUR, { hours: e.expiresAt.diff(l3()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? X.t["4iHwKT"] : X.t.YeLq88;
        return X.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ex.$, {
                    variant: "primary",
                    size: "sm",
                    text: X.intl.string(X.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, t0.TW)(n)),
            r = e.redeemed || a || e.isClaimed || !n.verified,
            o = e.redeemed
                ? X.intl.string(X.t.BTihou)
                : null != e.giftStyle
                  ? X.intl.string(X.t.TiZFqX)
                  : X.intl.string(X.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t7.hU)(e) ? ou.UQ : void 0,
            children: (0, s.jsx)(ex.$, {
                variant: "primary",
                size: "sm",
                text: o,
                onClick: this.handleAccept,
                disabled: r,
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
            ? X.intl.formatToPlainString(X.t.t1SOId, { recipientDisplayName: rS.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? X.intl.string(X.t["2PJ1NP"])
                    : X.intl.string(X.t.hrnGng)
                : n
                  ? X.intl.string(X.t.QLEMld)
                  : X.intl.string(X.t.W4DBcy);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: i,
            gifter: l,
            subscriptionPlan: s,
            currentUser: a,
        } = this.props;
        if (null == i) return X.intl.string(X.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rE.bF)(i) ? this.props.content : void 0;
        let r = i.isPreorder() ? X.intl.formatToPlainString(X.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t7.hU)(e) || (0, rE.bF)(i)
                ? X.intl.string(X.t.mVC3Cv)
                : X.intl.format(X.t["ss/L+/"], { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return X.intl.format(X.t.UdXO8P, { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return X.intl.string(X.t.ARWFQX);
        if (!a.verified) return X.intl.format(X.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? X.intl.string(X.t["lQI+cB"])
                : X.intl.formatToPlainString(X.t["A+etHx"], { skuName: r });
        if (e.isExistingPremiumSubscriptionDisallowed) return X.intl.string(X.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? X.intl.format(X.t.l3VxgG, { username: rS.Ay.getUserTag(l), maxUses: e.maxUses, skuName: r })
                    : X.intl.format(X.t["9cYrw5"], {
                          username: rS.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: r,
                      })
                : e.isSubscription
                  ? X.intl.formatToPlainString(X.t.svrO3W, { maxUses: e.maxUses, skuName: r })
                  : X.intl.formatToPlainString(X.t["3AgAn3"], { totalCopies: e.maxUses, skuName: r });
        if (e.isSubscription) {
            if (null == s) return X.intl.string(X.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nR.WT.MONTH ? X.t["/RDIEA"] : X.t["3CX6Ev"];
                return X.intl.format(e, { username: rS.Ay.getUserTag(l), skuName: r, intervalCount: s.intervalCount });
            }
            let e = s.interval === nR.WT.MONTH ? X.t["2O4lo5"] : X.t["+XjmsR"];
            return X.intl.format(e, { skuName: r, intervalCount: s.intervalCount });
        }
        return null != l ? X.intl.format(X.t["3HsdQ/"], { username: rS.Ay.getUserTag(l) }) : X.intl.string(X.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nR.Wx.includes(e.giftStyle),
            i = o()(ou.gB, { [ou.El]: n, [ou.by]: t >= rd.Tm }),
            l = o()({ [ou.gc]: n, [ou.Ei]: n && t >= rd.Tm, [ou.ww]: !n, [ou.wy]: !n && t >= rd.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(rv, { className: ou.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(rp.A, {
                        defaultAnimationState: e.redeemed ? rg.oA.LOOP : rg.oA.IDLE,
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
            text: X.intl.string(X.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rE.bF)(n);
        return (0, s.jsx)(od, {
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
            return (0, s.jsx)(od, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: W.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => X.intl.string(X.t.X4p5uH),
                renderCustomTagline: () => X.intl.string(X.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(oh, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(rd.Wb, { isHorizontal: i >= rd.Tm });
        return (0, t7.hU)(e)
            ? (0, s.jsx)("div", { className: ou.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let oA = (0, rm.A)((0, ru.A)(og)),
    op = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: a,
            } = (0, u.cf)([rC.A], () => {
                let e = rC.A.getError(t);
                return { giftCode: rC.A.get(t), resolved: rC.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            r = (0, u.bG)([w.default], () => (null != i && null != i.userId ? w.default.getUser(i.userId) : null)),
            o = (0, u.bG)([ez.A], () => (null != i ? ez.A.get(i.skuId) : null)),
            c = (0, u.bG)([r_.A], () =>
                null != o && i?.entitlementBranches != null ? rj.YI(i.entitlementBranches, o, r_.A) : null,
            ),
            d = (0, rh.h)(o?.applicationId),
            m = null != o && (0, rE.bF)(o) && i?.redeemed === !0,
            [h] = (0, rx.L_)(m ? d?.id : null),
            g = (0, rT.zz)(i?.subscriptionPlanId),
            A = (0, u.bG)([P.default], () => (null != i ? P.default.getId() === i.userId : P.default.getId() === n.id));
        return (0, s.jsx)(oA, {
            ...e,
            skuApplication: d,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: l,
            resolveErrorCode: a,
            gifter: r,
            libraryApplication: c,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: A,
        });
    };
var ox = n(376728),
    of = n(107123),
    oE = n(698441),
    oI = n(427080),
    oC = n(346542),
    o_ = n(665066),
    ov = n(95701),
    oN = n(299091),
    oj = n(149790);
let oT = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oS(e) {
    let { guildId: t, location: n } = e;
    return oT.getCurrentConfig({ guildId: t, location: n });
}
var oy = n(713654);
function ob() {
    return (0, s.jsxs)(i2.A, {
        children: [
            (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t["N/g9Z4"]) }),
            (0, s.jsx)(i2.A.Body, { resolving: !0 }),
        ],
    });
}
var oR = n(172799),
    oM = n(624394);
function oL(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: oM.MY,
                        children: [
                            (0, s.jsx)("i", { className: oM.QD }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: oM.U9,
                                color: i,
                                children: X.intl.format(X.t["LC+S+m"], { membersOnline: n }),
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
                        className: oM.MY,
                        children: [
                            (0, s.jsx)("i", { className: oM.o6 }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: oM.U9,
                                color: i,
                                children: X.intl.format(X.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: oM.rc, children: l })
    );
}
function ok(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        a = (0, io.Ay)(t);
    if (null != t && null != n) {
        let e = (0, oy.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(oM.Ix, { [oM.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: oM.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(sk.A, {
                    children: (0, s.jsx)(p.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: X.intl.format(X.t["dc+LW4"], { channelName: a ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(oM.Ix, { [oM.v6]: i }),
              children: (0, s.jsx)(sk.A, {
                  children: (0, s.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: X.intl.format(X.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oO(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: a } = t;
    eb()(l === oR.yV.EMBEDDED_APPLICATION && null != a, "invalid application invite");
    let r = t.channel?.id,
        o = (0, u.bG)([D.A], () => D.A.getChannel(r), [r]);
    return null == o
        ? null
        : (0, s.jsx)(e6.O, {
              applicationId: a.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(oP, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oP(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: r, application: o, channel: c } = e,
        { approximate_member_count: d, approximate_presence_count: m, target_application: h } = i;
    eb()(null != h, "invalid application invite");
    let g = a.useCallback(() => {
            eK.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        A = (0, u.bG)([nK.A], () => (null != i.guild ? nK.A.getGuild(i.guild.id) : null), [i]),
        p = (0, u.bG)(
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
        I = (0, u.bG)([ts.A], () => null != c && ts.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, c), [c]),
        { analyticsLocations: C } = (0, E.Ay)(f.A.INVITE_EMBED),
        _ = (0, u.yK)(
            [em.Ay],
            () =>
                null != c
                    ? em.Ay.getEmbeddedActivitiesForChannelIncludingHidden(c.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [c, h.id],
        ),
        v = (0, u.yK)([w.default], () => _.map((e) => w.default.getUser(e)).filter((e) => null != e), [_]),
        N = a.useCallback(() => {
            ((0, ox.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lu._U)(i.code, l.id),
                },
                C,
            ),
                ox.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: r("Invite Button Embed", i.code),
                    analyticsLocations: C,
                }));
        }, [i, l, C, r]),
        j = i.state === W.elq.ACCEPTING,
        T = null != A;
    if (null == A) {
        if (null == i.guild) return (0, s.jsx)(ob, {});
        A = (0, oj.DY)(i.guild);
    }
    t = T
        ? p
            ? X.intl.string(X.t.DPfdsq)
            : x
              ? X.intl.string(X.t.sqe0hj)
              : X.intl.string(X.t.RscU7I)
        : X.intl.string(X.t["2BP08E"]);
    let S = (T && !I) || (T && p);
    return (I || (n = X.intl.string(X.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(E.f5, {
              value: C,
              children: (0, s.jsx)(oD, {
                  app: o,
                  activityUsers: v,
                  isMember: T,
                  channel: c,
                  guild: A,
                  message: l,
                  members: d,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: j,
                  buttonLabel: t,
                  disabled: S,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: g,
              }),
          });
}
function oD(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: l,
            guild: r,
            message: o,
            members: c,
            membersOnline: d,
            isActivityActive: u,
            submitting: m,
            buttonLabel: h,
            disabled: g,
            disabledReason: A,
            handleAcceptInvite: p,
            onView: x,
        } = e,
        { bot: f, icon: E } = t,
        I = H.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        C = (0, et.F)(t),
        _ = (0, ee.f)(t),
        v = n.length,
        N = a.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? Q.kY.PLAY : Q.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != A ? A : void 0,
                    onClick: p,
                },
            ],
            [h, i, m, g, A, p],
        );
    return (0, s.jsx)(V.h, {
        header: t.name,
        title: X.intl.string(X.t["7vb6nw"]),
        iconSrc: I,
        ..._,
        onClickBanner: C,
        info: (0, s.jsxs)("div", {
            className: oM.QR,
            children: [
                (0, s.jsx)(ok, { channel: l, guild: r, hasEnded: !u, textColor: "none" }),
                i
                    ? v > 0 &&
                      (0, s.jsx)(q, {
                          activityUsers: n,
                          guildId: r.id,
                          activityText: X.intl.formatToPlainString(X.t.yJj035, { count: v }),
                      })
                    : (0, s.jsx)(oL, { members: c, membersOnline: d, textColor: "none" }),
            ],
        }),
        actions: N,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: en.J.ACTIVITY_INVITE,
            onView: x,
            guildId: r.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var oU = n(4274);
function oG(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([P.default], () => P.default.getId()) === t.id
                ? X.intl.string(X.t.C89OLE)
                : X.intl.string(X.t.YVub5y),
        l = (0, oU.g)(n?.code);
    return (0, s.jsxs)(i2.A, {
        children: [
            (0, s.jsx)(i2.A.Header, { text: i }),
            (0, s.jsxs)(i2.A.Body, {
                children: [
                    (0, s.jsx)(i2.A.Icon, { expired: !0 }),
                    (0, s.jsx)(i2.A.Info, {
                        expired: !0,
                        title: l?.title ?? X.intl.string(X.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var ow = n(308528),
    oH = n(889227);
function oB(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([P.default], () => P.default.getId()),
        r = t.inviter?.id === l,
        o = t.state === W.elq.ACCEPTING,
        { analyticsLocations: c } = (0, E.Ay)(f.A.INVITE_EMBED),
        d = (0, u.bG)([U.A], () => null != t.inviter && U.A.isFriend(t.inviter?.id)),
        m = a.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), ow.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, ox.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lu._U)(t.code, n.id),
                    },
                    c,
                ));
        }, [t, n, c]),
        h = a.useCallback(() => {
            (0, ox.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lu._U)(t.code, n.id),
                },
                c,
            );
            let e = i("Invite Button Embed", t.code);
            ox.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, c, i]);
    if (null == t.inviter) return null;
    let g = d ? m : h,
        A = X.intl.string(X.t.ib7Ng1),
        p = "active";
    d
        ? ((A = X.intl.string(X.t.xhxnPn)), (p = "secondary"))
        : r && ((A = X.intl.string(X.t.ib7Ng1)), (p = "secondary"));
    let x = r ? X.intl.string(X.t.eQyu1F) : X.intl.string(X.t.PYJHW6),
        I = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? rS.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(i2.A, {
        children: [
            (0, s.jsx)(i2.A.Header, { text: x }),
            (0, s.jsxs)(i2.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i2.A.Icon, { user: new oH.A(t.inviter), onClick: d ? g : void 0 }),
                            (0, s.jsx)(i2.A.Info, { title: I, onClick: d ? g : void 0, children: C }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: g, text: A, loading: o, disabled: r, variant: p }),
                ],
            }),
        ],
    });
}
var oF = n(342952);
function oV(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: r } = e,
        o = i === n.author.id,
        c = t.state === W.elq.ACCEPTING,
        d = (0, u.bG)([D.A], () => (null != t.channel ? D.A.getChannel(t.channel.id) : null), [t]);
    eb()(null == d || d.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, E.Ay)(f.A.INVITE_EMBED),
        h = null != d,
        g = a.useRef(null),
        A = a.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (r(), (e = "accept")),
                (0, ox.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lu._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, r]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, ov.OY)(e.channel),
                    i = (0, io.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = w.default.getUser(t);
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, io.Bi)(t),
                    i = w.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, d ?? null);
    if (null == x) return (0, s.jsx)(ob, {});
    let {
            bodyTitle: I,
            headerText: C,
            buttonText: _,
            buttonVariant: v,
        } = (function (e, t, n) {
            let i,
                { recipients: l, customGroupName: s } = e,
                a =
                    null != s
                        ? s
                        : 0 ===
                            (i = l
                                .map((e) => {
                                    let t = U.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof oH.A ? e : w.default.getUser(e.id);
                                    if (null != n) {
                                        let e = rS.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? X.intl.string(X.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? X.intl.formatToPlainString(X.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? X.intl.formatToPlainString(X.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
                                : X.intl.formatToPlainString(X.t.m5uYso, { first: i[0], second: i[1] }),
                r = X.intl.string(X.t.gVDdRn),
                o = "active";
            return (
                n && ((r = X.intl.string(X.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: a,
                    headerText: t ? X.intl.string(X.t.Fyamu8) : X.intl.string(X.t["2tr5Qz"]),
                    buttonText: r,
                    buttonVariant: o,
                }
            );
        })(x, o, h),
        { channel: N, recipients: j } = x,
        T = j.map((e) =>
            e instanceof oH.A
                ? e
                : (w.default.getUser(e.id) ?? new oH.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        S = null != N.icon,
        y = X.intl.format(X.t.zRl6XR, { count: j.length });
    return (0, s.jsxs)(i2.A, {
        className: lc.TV,
        children: [
            (0, s.jsx)(p.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: lc.JO,
                lineClamp: 1,
                children: C,
            }),
            (0, s.jsxs)(i2.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${lc.iH} ${lc.mx}`,
                        children: [
                            S &&
                                (0, s.jsx)(i2.A.Icon, {
                                    channel: N,
                                    onClick: h ? A : void 0,
                                    channelIconSize: tC._3.SIZE_48,
                                }),
                            (0, s.jsx)(i2.A.Info, {
                                title: (0, s.jsx)(sk.A, { children: I }),
                                onClick: h ? A : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: lc.er,
                                    children:
                                        T.length > 0
                                            ? (0, s.jsx)(eU.D, {
                                                  className: lc.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: y,
                                              })
                                            : y,
                                }),
                            }),
                            T.length > 0 &&
                                (0, s.jsx)(oF.A, {
                                    ref: g,
                                    className: lc.t2,
                                    users: T,
                                    maxUsers: 3,
                                    size: tC._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: lc.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: A, loading: c, disabled: h, variant: v, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var oz = n(821418),
    oJ = n(340837);
let oK = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, d.Lt)(n.getSelfMember(i.id)?.flags ?? 0, oJ.D.IS_GUEST)) ||
        (0, d.Lt)(t.flags ?? 0, oz.Q.IS_GUEST_INVITE)
    );
};
var oY = n(517905);
function oW(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: r,
            onAcceptInstantInvite: o,
            guild: c,
            invite: m,
            message: h,
            currentUserId: A,
        } = e,
        x = A === h.author.id,
        { channel: I, approximate_member_count: C, approximate_presence_count: _ } = m,
        v = m.state === W.elq.ACCEPTING,
        N = null != I ? (0, ov.OY)(I) : null,
        j = null != c,
        T = null != N,
        S = null != N && N.isGuildStageVoice(),
        y = (0, d.Lt)(m.flags ?? 0, oz.Q.IS_GUEST_INVITE),
        b = N?.isGuildVoiceOrThread() ?? !1,
        R = c?.features.has(W.GuildFeatures.HUB) ?? !1,
        M = c?.id,
        { analyticsLocations: L } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, e4.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: I?.id,
            invite_instance_id: (0, lu._U)(m.code, h.id),
            invite_channel_type: I?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [k, O] = a.useState(!1),
        P = a.useCallback(() => O(!1), []),
        D = a.useRef(null),
        U = (0, u.bG)([lL.Ay], () => oK([lL.Ay], m)),
        G = a.useCallback(() => {
            (O(!0), (0, ox.Pq)(M, "show profile", L));
        }, [M, L]),
        w = a.useCallback(() => {
            let e = "noop";
            (j ? (r(), (e = "transition")) : (o(), (e = "accept")),
                (0, ox.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, lu._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, j, r, o]);
    if (null == c) {
        if (null == m.guild) return (0, s.jsx)(ob, {});
        (c = oj.DY(m.guild)).premiumTier = m.guild.premium_tier ?? W.TVA.NONE;
    }
    let H = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: a } = e;
        if (t)
            if (i)
                if (a) return X.intl.string(X.t.N85DCl);
                else if (s) return X.intl.string(X.t.TJQcNv);
                else if (l) return X.intl.string(X.t.mJyBir);
                else return X.intl.string(X.t.lxTgP9);
            else if (a) return X.intl.string(X.t.Mnvc3C);
            else if (s) return X.intl.string(X.t.FdPNr5);
            else if (l) return X.intl.string(X.t.f4gmrf);
            else return X.intl.string(X.t.H39rEY);
        return n
            ? i
                ? X.intl.string(X.t.UxmnHx)
                : X.intl.string(X.t.sigPEf)
            : i
              ? X.intl.string(X.t["oU/lsl"])
              : X.intl.string(X.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: y, isHubGuild: R, isStage: S, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: lc.FA,
            children: [
                (0, s.jsx)(oY.A, {
                    guildId: c.id,
                    name: c.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, s.jsx)(i2.A.GuildName, { guild: c, ref: D }),
                }),
                (0, s.jsx)("span", {
                    className: lc.E3,
                    children: (0, s.jsx)(aK.A, { guild: c, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (l = (0, s.jsx)(tz.m, {
                asContainer: !0,
                text: X.intl.string(X.t["/FeTK6"]),
                children: (0, s.jsx)(n1.CircleInformationIcon, { size: "md", color: "currentColor", className: lc.G }),
            })),
        b
            ? ((i = (0, s.jsx)(i2.A.Channel, { channel: N })),
              (t = (0, s.jsxs)("span", {
                  className: lc.FA,
                  children: [
                      X.intl.format(X.t["2wimj5"], { guildName: c.name }),
                      (0, s.jsx)("span", {
                          className: lc.E3,
                          children: (0, s.jsx)(aK.A, { guild: c, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != _ && _ > 0)
              ? (t = (0, s.jsx)(i2.A.Data, { members: C, membersOnline: _ }))
              : T && (t = (0, s.jsx)(i2.A.Channel, { channel: N, guild: c })),
        (0, s.jsxs)(i2.A, {
            children: [
                (0, s.jsx)(i2.A.GuildSplash, { guild: c }),
                (0, s.jsx)(i2.A.Header, { text: H, extra: l }),
                (0, s.jsxs)(i2.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lc.iH,
                            children: [
                                (0, s.jsx)(i2.A.Icon, { guild: c }),
                                (0, s.jsx)(i2.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: lc.UD,
                            children: (0, s.jsx)(ex.$, {
                                onClick: w,
                                loading: v,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? S
                                        ? X.intl.string(X.t["7vb2cc"])
                                        : X.intl.string(X.t.gpqgah)
                                    : j
                                      ? X.intl.string(X.t.cEnaWx)
                                      : X.intl.string(X.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                c.features.has(W.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: lc.me }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: X.intl.format(X.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, g.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("722514"),
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
var oX = n(9994),
    oZ = n(461888),
    oq = n(263908),
    oQ = n(123213),
    o$ = n(963402),
    o0 = n(42780),
    o1 = n(897288),
    o2 = n(151101);
function o3(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: r } = e,
        c = a.useRef(null),
        d = a.useId(),
        [m, h] = a.useState(!0),
        [g, A] = a.useState(!1),
        p = t.state === W.elq.ACCEPTING,
        x = (0, u.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
        { analyticsLocations: I } = (0, E.Ay)(f.A.INVITE_EMBED);
    ((0, e4.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lu._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: I,
        },
    }),
        a.useLayoutEffect(() => {
            A((c.current?.clientHeight ?? 0) > 292);
        }, [A]));
    let C = (0, oX.oO)(t),
        _ = a.useCallback(() => {
            !g || (m && h(!1));
        }, [m, g]),
        v = a.useCallback(() => {
            !g || m || h(!0);
        }, [m, g]),
        N = a.useMemo(
            () =>
                g && c.current?.clientHeight != null
                    ? {
                          height: m ? 292 : c.current.clientHeight + 36 + 48,
                          transition: x ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [m, g, x],
        );
    if (null == C) return (0, s.jsx)(ob, {});
    let j = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: o2.uY,
                ref: c,
                children: [
                    (0, s.jsx)(o0.J$, { profile: C, className: o2.vK }),
                    (0, s.jsx)(o0.CG, { profile: C }),
                    (0, s.jsx)(o$.A, { profile: C, disableGuildNameClick: !g, guildNameId: d }),
                    (0, s.jsx)(oq.P, { profile: C, className: o2.rb }),
                    (0, s.jsx)(o1.A, {
                        guild: null != t.guild ? (0, oj.DY)(t.guild) : null,
                        roles: t.roles,
                        className: o2.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: o2.Se,
                      children: (0, s.jsx)(sc.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: v,
                          text: X.intl.string(X.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(o2.qr, { [o2.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: o2.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(o2.z8, { [o2.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: o2.UD,
                            children: (0, s.jsx)(o5, {
                                invite: t,
                                profile: C,
                                isMemberOfGuild: n,
                                message: i,
                                submitting: p,
                                onTransitionToInviteChannel: l,
                                onAcceptInstantInvite: r,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
    return g
        ? (0, s.jsx)(tV.s, {
              className: o()(o2.Gg, { [o2.vk]: m }),
              onClick: _,
              style: N,
              "aria-label": X.intl.string(X.t.dcl9MQ),
              children: j,
          })
        : (0, s.jsx)("div", { className: o2.Gg, role: "group", "aria-labelledby": d, children: j });
}
function o5(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        { guildId: d, ctaType: u } = (0, oZ.Ay)(n, oZ.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, E.Ay)(f.A.INVITE_EMBED),
        h = a.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, ox.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lu._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(oQ.Y, {
              guildId: d,
              ctaType: u,
              submitting: r,
              onGoToGuild: o,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: h,
          });
}
function o6(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        r = a.useId();
    return (
        (0, u.bG)([P.default], () => P.default.getId()) === i.id
            ? ((n = X.intl.string(X.t.HfUzlI)), (t = X.intl.string(X.t.y7uT5j)))
            : l
              ? ((n = X.intl.string(X.t.OMfs8i)), (t = X.intl.string(X.t["57nBty"])))
              : ((n = X.intl.string(X.t.OMfs8i)), (t = X.intl.string(X.t["p/zTYn"]))),
        (0, s.jsxs)(i2.A, {
            className: lc.TV,
            role: "group",
            "aria-labelledby": r,
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lc.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(i2.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i2.A.Icon, { expired: !0 }),
                            (0, s.jsx)(i2.A.Info, {
                                expired: !0,
                                title: X.intl.string(X.t["Jhx/ud"]),
                                titleId: r,
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
var o7 = n(616356);
function o4(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: l,
            message: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        d = l?.id,
        m = (0, u.bG)([G.A], () => G.A.getGuildId()),
        h = (0, u.bG)(
            [o7.A],
            () => (null != n && null != n.target_user ? o7.A.getActiveStreamForUser(n.target_user.id, d) : null),
            [n, d],
        ),
        g = (0, u.bG)(
            [o7.A],
            () => (null != n && null != n.target_user ? o7.A.getStreamForUser(n.target_user.id, d) : null),
            [n, d],
        ),
        { analyticsLocations: A } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, e4.A)({
        name: e7.ImpressionNames.INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lu._U)(n.code, r.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: A,
        },
    });
    let p = null != n && n.target_type === oR.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eb()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    eb()(I === oR.yV.STREAM && null != C, "invalid streaming invite");
    let _ = i === C.id,
        v = n.state === W.elq.ACCEPTING,
        N = a.useCallback(() => {
            let e = "noop";
            (p ? (o(), (e = "transition")) : (c(), (e = "accept")),
                (0, ox.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, lu._U)(n.code, r.id),
                    },
                    A,
                ));
        }, [n, r, A, p, o, c]),
        j = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(ob, {});
        l = (0, oj.DY)(n.guild);
    }
    let T = null != n.channel ? (0, ov.OY)(n.channel) : null,
        S = rS.Ay.getName(C),
        y = p || (!x && j),
        b = X.intl.string(X.t.I6JG46),
        R = "active";
    j && !x
        ? ((t = _ ? X.intl.string(X.t.oBLoZJ) : X.intl.formatToPlainString(X.t["0QJmA+"], { name: S })),
          (b = X.intl.string(X.t.Wdi5E1)))
        : ((R = "active"),
          p && ((b = X.intl.string(X.t.Q1W99y)), (R = "secondary")),
          (t = _ ? X.intl.string(X.t["4hyaHu"]) : X.intl.formatToPlainString(X.t.QmlLEq, { name: S })));
    let M =
        m === l.id && null != T
            ? (0, s.jsx)(i2.A.Channel, { channel: T })
            : X.intl.formatToPlainString(X.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(i2.A, {
        children: [
            (0, s.jsx)(i2.A.Header, { text: X.intl.string(X.t["wS+5Wb"]) }),
            (0, s.jsxs)(i2.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lc.iH,
                        children: [
                            (0, s.jsx)(i2.A.Icon, { guild: l, onClick: j && x ? N : void 0 }),
                            (0, s.jsx)(i2.A.Info, { title: t, onClick: j && x ? N : void 0, children: M }),
                        ],
                    }),
                    (0, s.jsx)(ex.$, { onClick: N, loading: v, disabled: y, variant: R, text: b }),
                ],
            }),
        ],
    });
}
var o8 = n(683063),
    o9 = n(364522),
    ce = n(952270),
    ct = n(52074),
    cn = n(725613),
    ci = n(693879),
    cl = n(145497),
    cs = n(481947),
    ca = n(977997),
    cr = n(607567),
    co = n(923710);
function cc(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        r = (0, io.Ay)(i),
        o = (0, u.bG)([nK.A], () => nK.A.getGuild(i.guild_id), [i.guild_id]),
        c = (0, u.bG)([ca.A], () => ca.A.isInChannel(i.id), [i.id]),
        { voiceStates: d } = (0, u.cf)(
            [cr.Ay],
            () => ({ voiceStates: null != i.guild_id ? cr.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = a.useMemo(
            () => [...d.filter((e) => e.voiceState.selfStream), ...d.filter((e) => !e.voiceState.selfStream)],
            [d],
        ),
        h = (0, u.bG)([cn.A], () => cn.A.getStartTime(i), [i]);
    a.useEffect(() => {
        null != h || null == i.guild_id || cn.A.hasRequestedStartTimes(i.guild_id) || (0, ct.U)(i.guild_id);
    }, [i, h]);
    let g = a.useRef(null),
        A = a.useRef(null),
        x = a.useCallback(() => {
            let e = g.current,
                t = A.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    a.useLayoutEffect(() => {
        x();
    }, [m, x]);
    let I = a.useCallback(
            (e) => {
                (null != g.current && g.current.removeEventListener("scroll", x),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", x));
            },
            [x],
        ),
        { analyticsLocations: C } = (0, E.Ay)(f.A.INVITE_EMBED, f.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        _ = (0, lu._U)(t.code, n.id),
        v = d.some((e) => e.voiceState.selfStream);
    (0, e4.A)({
        name: e7.ImpressionNames.VOICE_INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: _,
            has_active_stream: v,
            location_stack: C,
        },
    });
    let N = a.useCallback(() => {
            (0, l$.iN)(i.id);
        }, [i.id]),
        j = a.useCallback(() => {
            (l(),
                (0, ox.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: _,
                        number_of_users_in_channel: d.length,
                    },
                    C,
                ));
        }, [t, n, C, _, d.length, l]);
    return (0, s.jsxs)("div", {
        className: co.kL,
        children: [
            (0, s.jsxs)("div", {
                className: co.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: co.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: co.yW,
                                children: [
                                    (0, s.jsx)(r2.H, {
                                        className: co.p,
                                        color:
                                            d.length > 0 ? nw.A.colors.TEXT_FEEDBACK_POSITIVE : nw.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(o8.u, {
                                        title: `${o?.name} / ${r}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(cl.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eU.D, {
                                            className: co.HA,
                                            onClick: N,
                                            children: (0, s.jsx)(p.E, {
                                                variant: "text-md/normal",
                                                color: c ? "text-default" : "text-muted",
                                                lineClamp: 1,
                                                children: r,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            null != h
                                ? (0, s.jsx)(ci.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: co.Ao,
                              children: [
                                  (0, s.jsx)(o9.Ip, {
                                      ref: I,
                                      className: co.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              cs.Ay,
                                              {
                                                  className: co.Eq,
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
                                  (0, s.jsx)("div", { ref: A, className: co.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: co.p$,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: X.intl.string(X.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: co.TB,
                        children: (0, s.jsx)(ex.$, {
                            onClick: j,
                            icon: r2.H,
                            variant: "active",
                            fullWidth: !0,
                            text: X.intl.string(X.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: co.qr,
                children: [
                    (0, s.jsx)(ce.EyeSlashIcon, { size: "custom", color: "currentColor", className: co.Dq }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: X.intl.string(X.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function cd(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        a = t.channel?.id,
        r = (0, u.bG)(
            [D.A, ts.A],
            () => {
                let e = D.A.getChannel(a);
                return null != e && ts.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
            },
            [a],
        ),
        o = (0, u.bG)([nK.A], () => null != nK.A.getGuild(t.guild?.id), [t.guild]);
    return null == r
        ? (0, s.jsx)(o3, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(cc, { invite: t, message: n, channel: r, onTransitionToInviteChannel: i });
}
var cu = n(652896),
    cm = n(834757),
    ch = n(427358),
    cg = n(323605);
function cA(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        a = (0, oy.gU)(n, i),
        r = (0, io.Ay)(n);
    return (0, s.jsxs)(eU.D, {
        onClick: l,
        className: o()(cg.UP, t),
        children: [
            null != a &&
                (0, s.jsx)(a, { className: cg.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(sk.A, { children: [i.name, " / ", r] }),
            }),
            (0, s.jsx)(n4._, { className: cg.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var cp = n(892437),
    cx = n(717421),
    cf = n(297413),
    cE = n(528944);
function cI(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        r = a.useRef(null);
    return (0, s.jsx)(lM.A, {
        targetElementRef: r,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, s.jsxs)(eU.D, {
                ...a,
                innerRef: r,
                className: cE.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tI.eu, {
                        src: t.getAvatarURL(n, (0, tC.FT)(tC._3.SIZE_24)),
                        className: cE.my,
                        "aria-label": t.username,
                        size: tC._3.SIZE_24,
                    }),
                    (0, s.jsx)(p.E, {
                        className: cE.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(cf.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var cC = n(480887);
function c_(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...r } = e,
        o = a.useCallback((e) => (0, s.jsx)(cv, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(sS.Y, { renderPopout: () => o(i), ...r });
}
function cv(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        r = a.useRef(null),
        { isHoveringOrFocusing: o } = (0, tW.A)(r);
    return (
        a.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: r,
            className: cC.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(o9.Ip, {
                className: cC.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        cI,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: af.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var cN = n(768920);
let cj = { mass: 1, tension: 170, friction: 26 };
function cT(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: r, motion: c } = e,
        d = l.length > 4,
        u = d ? l.slice(0, 3) : l,
        m = d ? l.length - 4 + 1 : 0,
        h = Math.min(d ? u.length + 1 : u.length, 4),
        g = (c?.percentX ?? 0) * 6,
        A = (c?.percentY ?? 0) * 6,
        p = 1 + ((c?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, cx.z)(() => ({ x: 0, y: 0, scale: 1, config: cj }));
    return (
        a.useEffect(() => {
            f({ x: g, y: A, scale: p });
        }, [g, A, p, f]),
        (0, s.jsxs)(cp.animated.div, {
            ref: r,
            className: o()(cN.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, cp.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: cN.my,
                            children: (0, s.jsx)(tz.m, {
                                text: af.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tI.eu, {
                                    src: (function (e, t, n) {
                                        let i = lL.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, H.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tC._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tC._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tC._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tC._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tC._3.SIZE_48
                                                    : h > 2
                                                      ? tC._3.SIZE_40
                                                      : tC._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                d && (0, s.jsx)(cS, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function cS(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: r,
            shouldShow: c,
            onPopoutHoverOrFocus: d,
        } = (function () {
            let e = a.useRef(null),
                { isHoveringOrFocusing: t } = (0, tW.A)(e),
                [n, i] = a.useState(!1),
                l = t || n,
                [s, r] = a.useState(!1),
                o = a.useRef(null);
            return (
                a.useEffect(
                    () => (l || (o.current = setTimeout(() => r(!1), 300)), () => clearTimeout(o.current)),
                    [l],
                ),
                l && !s && r(!0),
                { triggerRef: e, shouldShow: l || s, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, s.jsx)(c_, {
        targetElementRef: r,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: c,
        onHoverOrFocus: d,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(cN.my, cN.k2),
                ref: r,
                ...e,
                children: (0, s.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var cy = n(183751);
function cb(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: r } = e,
        c = a.useRef(null),
        d = i ?? null;
    null == d && null != t.guild && (d = oj.DY(t.guild));
    let m = null != t.channel ? (0, ov.OY)(t.channel) : null;
    (eb()(null != d, "Voice Invite Embed must be used in context of a guild."),
        eb()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [ts.A, D.A],
            () => {
                let e = D.A.getChannel(m.id);
                return null == e || ts.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([cr.Ay], () => (h ? cr.Ay.getVoiceStatesForChannelAlt(m.id, d.id) : []), [m.id, d.id, h]),
        { label: A, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                a = i.some((e) => e.user?.id === n.id),
                r = i.length - !!a;
            if (!s)
                return {
                    label: l ? X.intl.string(X.t.DVDvCD) : X.intl.string(X.t.TY77rq),
                    sublabel: X.intl.string(X.t.wM2WTM),
                };
            let o = a ? X.t["2RWMFV"] : X.t.IWXzHV,
                c = a ? X.t.Da7tZx : X.t["3VbQvv"];
            return { label: l ? X.intl.format(o, { othersCount: r }) : X.intl.format(c, { othersCount: r }) };
        })({ currentUserId: (0, u.bG)([P.default], () => P.default.getId()), author: n.author, voiceStates: g }),
        I = (0, u.bG)([nK.A], () => null != nK.A.getGuild(d.id), [d.id]),
        C = (0, u.bG)([eu.Ay], () => eu.Ay.getVoiceChannelId() === m.id, [m.id]),
        _ = (0, u.bG)([lL.Ay], () => oK([lL.Ay], t), [t]),
        v = t.state === W.elq.ACCEPTING,
        { analyticsLocations: N } = (0, E.Ay)(f.A.INVITE_EMBED),
        j = (0, lu._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [o7.A, ch.A],
                () => {
                    if ((0, oC.G4)(t) && null != t.target_user) {
                        let e = o7.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = o7.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let a = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === a.length) return null;
                    for (let e of [...a].sort((e, t) => {
                        let n = ch.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (ch.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = o7.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: d.id, channelId: m.id }),
        S = (0, cm.AO)(T),
        y = null != T,
        b = a.useCallback(() => {
            let e = I ? "transition" : "accept";
            (I ? l() : r(),
                (0, ox.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: j,
                        application_id: S?.id ?? void 0,
                        stream_key: null != T ? (0, cu._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    N,
                ));
        }, [t, n, N, j, I, S, T, g.length, l, r]),
        R = a.useCallback(() => {
            (I ? (0, l$.iN)(m.id) : r({ autoJoin: !1 }),
                eK.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: d.id,
                    invite_channel_id: m.id,
                    invite_instance_id: j,
                    is_member: I,
                    application_id: S?.id ?? null,
                    stream_key: null != T ? (0, cu._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: N,
                }));
        }, [m.id, d.id, t.code, j, I, S, T, g.length, N, r]);
    (0, e4.A)({
        name: e7.ImpressionNames.VOICE_INVITE_EMBED,
        type: e7.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: d.id,
            invite_channel_id: m.id,
            invite_instance_id: j,
            has_active_stream: y,
            location_stack: N,
        },
    });
    let M = (0, u.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
        L = a.useRef(null),
        [k, O] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)(
            [ch.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = ch.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (ch.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        G = a.useMemo(() => tx().throttle(O, 20), [O]);
    a.useEffect(() => () => G.cancel(), [G]);
    let w = a.useCallback(
            (e) => {
                if (M) return;
                let t = L.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = c.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        a = e.clientX - n,
                        r = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(a * a + r * r) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                G({ percentX: n, percentY: i, proximity: l });
            },
            [M, G],
        ),
        H = a.useCallback(() => {
            (G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 }));
        }, [G]);
    return (0, s.jsxs)("div", {
        className: cy.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: L,
                className: cy.hw,
                onMouseMove: w,
                onMouseLeave: H,
                children: [
                    (0, s.jsx)("div", { className: cy.ys }),
                    (0, s.jsx)("div", { className: cy.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: cy.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(cy.Qs, { [cy.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(cA, { channel: m, guild: d, onClick: R }),
                                    (0, s.jsxs)("div", {
                                        className: cy.WD,
                                        children: [
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(sk.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: cy.$B,
                                                      children: (0, s.jsx)(sk.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: cy.RE,
                                      children: (0, s.jsx)(cT, {
                                          ref: c,
                                          guildId: d.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: k,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: cy.xk,
                        children: (0, s.jsx)(ex.$, {
                            onClick: b,
                            loading: v,
                            variant: C ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !_,
                            text: C ? X.intl.string(X.t["3xjX0U"]) : X.intl.string(X.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: cy.qr,
                children: [
                    (0, s.jsx)(ce.EyeSlashIcon, { size: "custom", color: "currentColor", className: cy.Dq }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: X.intl.string(X.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function cR(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: r } = (0, u.cf)(
            [oN.A],
            () => ({ invite: oN.A.getInvite(t), inviteError: oN.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lu._U)(t, n.id);
    a.useEffect(() => {
        null == l && ox.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let c = l ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: d } = (0, E.Ay)(),
        m = (0, u.bG)([nK.A], () => (l?.guild != null ? nK.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [D.A, ts.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = D.A.getChannel(e);
                return null != t && ts.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([P.default], () => P.default.getId()),
        A = (0, u.bG)([oE.Ay], () => oE.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]);
    function p() {
        null != c.channel && ox.Ay.transitionToInvite(c, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            ox.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? oj.DY(l.guild) : m;
        (0, o_.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: d,
            onGateConfirm: n,
        }) === o_.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(oW, {
        onTransitionToInviteChannel: p,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: c,
        message: n,
    });
    switch (c.state) {
        case W.elq.RESOLVING:
            f = (0, s.jsx)(ob, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            f = (0, s.jsx)(o6, { banned: c.state === W.elq.BANNED, author: n.author });
            break;
        case W.elq.ERROR:
            f = (0, s.jsx)(oG, { author: n.author, inviteError: r });
            break;
        default:
            switch ((0, oC.On)(c)) {
                case oC.Xd.GROUP_DM:
                    f = (0, s.jsx)(oV, {
                        onTransitionToInviteChannel: p,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: c,
                        message: n,
                    });
                    break;
                case oC.Xd.FRIEND:
                    f = (0, s.jsx)(oB, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, oC.G4)(c)) {
                        if (null != c.channel && (0, ov.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = oS({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(cd, {
                                        onTransitionToInviteChannel: p,
                                        onAcceptInstantInvite: x,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(cb, {
                                        onTransitionToInviteChannel: p,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(o4, {
                            onTransitionToInviteChannel: p,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, oC.ly)(c)) {
                        f = (0, s.jsx)(oI.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: p,
                        });
                        break;
                    }
                    if ((0, oC.oK)(c)) {
                        f = (0, s.jsx)(oO, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, ov.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = oS({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(cd, {
                                    onTransitionToInviteChannel: p,
                                    onAcceptInstantInvite: x,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(cb, {
                                    onTransitionToInviteChannel: p,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, of.v)(c) &&
                        (f = (0, s.jsx)(o3, {
                            onTransitionToInviteChannel: p,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(rb.A, { section: W.JJy.INVITE_LINK, children: f });
}
var cM = n(191852),
    cL = n(860227),
    ck = n(763899),
    cO = n(280621),
    cP = n(123791),
    cD = n(627363);
function cU(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, cD.YY)(t);
    return null == i ? null : (0, s.jsx)(cG, { app: i, guildId: n });
}
function cG(e) {
    let { app: t, guildId: i } = e;
    (0, cP.C)(t.id);
    let l = a.useCallback(() => {
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
        icon: cO.U,
        text: X.intl.format(X.t.XDRjs5, { appName: t.name }),
    });
}
var cw = n(394839),
    cH = n(96782),
    cB = n(279182),
    cF = n(861986),
    cV = n(87221),
    cz = n(313433);
function cJ(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: cz.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: cz.Yf,
                        children: [
                            (0, s.jsx)(cV.D, { size: "lg", color: nw.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: X.intl.string(X.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: cz.Fj,
                children: [
                    (0, s.jsx)(n1.CircleInformationIcon, { size: "sm", color: nw.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: X.intl.string(X.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var cK = n(343552),
    cY = n(581619),
    cW = n(803931);
let cX = [W.Auw.GIFV],
    cZ = 15 * nf.A.Millis.MINUTE,
    cq = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cQ = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: a } = e,
            r = (0, d.Lt)(a, lf.e5.IS_ANIMATED);
        return null != i && null != l && (lE.bp.test(n) || (r && (lE.P8.test(n) || lE.p4.test(n))))
            ? (0, s.jsx)(ro.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: cW.jj })
            : null;
    };
class c$ extends a.Component {
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
            ...(null != t ? { invite_instance_id: (0, lu._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cq.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: a } = this.props,
            { channel: r, message: o, poll: c } = e;
        return (
            !(0, h.A)(this.state, t) ||
            !(0, h.A)(this.props, e, ["message", "channel"]) ||
            l.type !== r.type ||
            c !== a ||
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
                            { emoji: a, count: r, burst_count: o } = i[t];
                        return s !== o || l !== r || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButtons() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case aw.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(n7, { messageId: e.id, channelId: t.id });
                break;
            case aw.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(eI, { channelId: t.id }),
                        (0, ep.cc)(t.id, e.id) ? (0, s.jsx)(eS, { channelId: t.id }) : null,
                    ],
                });
                break;
            case aw.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(eN, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: cW.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: a } = n;
            if ((0, tO.Yf)(i)) {
                let n = (0, tO.kK)(i, l, a);
                if (null == n) return null;
                let { applicationId: r } = n;
                return (0, s.jsx)(
                    e6.O,
                    {
                        applicationId: r,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tP.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(i4, { code: r, message: e });
                                case tP.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eA, { application: t, message: e, params: i });
                                case tP.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e2, { application: t, message: e });
                                case tP.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(e3, { application: t, message: e, skuId: l });
                                case tP.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(e8, { application: t, message: e });
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
                        cR,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tP.I.TEMPLATE:
                    return (0, s.jsx)(ld, { code: l }, l);
                case tP.I.EVENT:
                    return (0, s.jsx)(li.A, { code: l }, l);
                case tP.I.CHANNEL_LINK:
                    return (0, s.jsx)(aW, { code: l, message: e }, l);
                case tP.I.GUILD_PRODUCT:
                    return (0, s.jsx)(ln, { code: l }, l);
                case tP.I.SERVER_SHOP:
                    return (0, s.jsx)(nq, { guildId: l }, l);
                case tP.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(
                        sv.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, s_.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        l,
                    );
                }
                case tP.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(sv.I, { applicationId: n, skuId: e, channel: t }, l);
                }
                case tP.I.QUESTS_EMBED:
                    return (0, s.jsx)(lY.A, { questId: l }, l);
                case tP.I.GAME_PROFILE:
                    return (0, s.jsx)(iM, { gameId: l, sourceUserId: e.author.id }, l);
                case tP.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(iQ, { code: l }, l);
                case tP.I.USER_PROFILE:
                    return (0, s.jsx)(ak, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
                case tP.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tU.has(i) ? i : void 0 };
                    })(l);
                    if (null == e) return null;
                    return (0, s.jsx)(nG, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tP.I.EXPERIMENT:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: a, giftInfo: r } = e,
            o = w.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: cW.zv,
                          children: (0, s.jsx)(op, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: a,
                              giftInfo: r,
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
            isPendingMember: a,
            channel: r,
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(cB.A, {
                  message: e,
                  channel: r,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: a,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: r,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, aO._c)(e)) return null;
        let m = c.filter((e) => null == e.flags || !(0, d.Lt)(e.flags, W.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, lf.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, d.Lt)(t.flags ?? 0, W.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: A,
                srcToSeekOverride: p,
            } = (0, lV.o)(h, { enabledContentHarmTypeFlags: r, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, d.Lt)(u, W.pr7.IS_VOICE_MESSAGE);
        function E(e, n) {
            let i = (0, d.Lt)(e.originalItem.flags ?? 0, W.sbO.IS_SPOILER) || (0, sN.BV)(t);
            return (0, aH.iW)(e.originalItem, n, i);
        }
        let I = m.map((s) => {
            let r = (0, lf.aG)(s),
                o = {
                    message: e,
                    item: (0, cH.rC)(s, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: E,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), a(e, r));
                              }
                            : void 0,
                    renderAudioComponent: f ? cM.SX : cM.Nj,
                    renderImageComponent: cM.Cr,
                    renderVideoComponent: cM.I1,
                    renderPlaintextFilePreview: cM.R6,
                    renderGenericFileComponent: cM.UB,
                    onPlay: function (n, i, l) {
                        eK.default.track(W.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: cQ(r),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                c = (0, aD.E)({ proxyURL: s.proxy_url, url: s.url });
            return (c in g && x && ((o.onClick = g[c]), (o.handlePreloadImage = A[c]), (o.onSeekRequest = p[c])), o);
        });
        return (0, s.jsx)(cw.A, { items: I });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: a,
                canSuppressEmbeds: r,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: c,
                shouldAgeVerify: d,
            } = this.props,
            u = (0, aH.sC)(e, i, o, c);
        if (e.type === W.Auw.GIFT) return null;
        let m = cX.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            i$.G.Provider,
            {
                value: (0, cK.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, s.jsx)(tA.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !a,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: i,
                    embedIndex: t,
                    shouldAgeVerify: d ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== W.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lx.A.parseEmbedTitleWithoutLinks : lx.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === W.Auw.RICH
            ? lx.A.parse(t, !0, {
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
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("456506"), n.e("570698")]).then(
                n.bind(n, 427281),
            );
            return (n) =>
                (0, s.jsx)(i, {
                    ...n,
                    item: e,
                    onSubmit: (e) => {
                        let { description: n, spoiler: i } = e,
                            { channel: l, message: s } = this.props,
                            a = s.attachments.map((e) => ({ id: e.id })),
                            r = a.find((e) => e.id === t.id);
                        null != r &&
                            ((r.description = n), (r.is_spoiler = i), x.A.patchMessageAttachments(l.id, s.id, a));
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
                      cY.z.has(t.type) ||
                      (0, aU.p6)(t) ||
                      ((0, d.Lt)(t.flags ?? 0, W.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lh.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lg.has(t.content_type);
                              })
                          )) ||
                      (0, aU.V)(t) ||
                      (0, aU.G8)(t) ||
                      (0, aU.Xk)(t) ||
                      ((0, aU.nL)(t) && (0, ag.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === W.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: a,
                              onMediaItemContextMenu: r,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: c,
                          } = this.props,
                          d = (0, aH.sC)(t, e, c, i),
                          u = function () {
                              let c = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  a1,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cQ,
                                      getOnMediaItemContextMenu:
                                          null == r
                                              ? void 0
                                              : (e) => (t) => {
                                                    (t.stopPropagation(), t.preventDefault(), r?.(t, e));
                                                },
                                      shouldHideMediaOptions: a,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: c,
                                  },
                                  t.id,
                              );
                          };
                      return null != d
                          ? (0, s.jsx)(
                                sr.Ay,
                                {
                                    type: sr.Ay.Types.EMBED,
                                    reason: d,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let a = { renderImageComponent: sy.LL, renderVideoComponent: sy.$o, renderLinkComponent: sy.bU };
                  if (
                      t.type === W.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = aG.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  oc,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, a, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, a, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, s.jsx)(aQ.N, {
            gifAutoPlay: t,
            getGifFavButton: cQ,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), a?.(t, e));
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(lA.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(ck.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== W.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tg, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, aB.ec)(e)
            ? (0, s.jsx)(rr.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lz.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(s3, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(W.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(am, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(W.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - s9.default.extractTimestamp(e.id) >= cZ)
        )
            return (0, s.jsx)("div", { className: cW.xM, children: X.intl.string(X.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(A.M, {
            dismissable: !0,
            header: X.intl.string(X.t.VL1KOk),
            confirmText: X.intl.string(X.t.YEHppG),
            cancelText: X.intl.string(X.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: cW.IX,
                    children: X.intl.string(X.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: X.intl.string(X.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, s.jsx)(A.M, {
                  dismissable: !0,
                  header: X.intl.string(X.t.CbTIEo),
                  confirmText: X.intl.string(X.t.kFwAsa),
                  cancelText: X.intl.string(X.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: cW.IX,
                      children: X.intl.string(X.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== c.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(cU, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e6.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(ra, {
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
                : (0, s.jsx)(lF, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(sm, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(sC, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, n$.KM)(e)
            ? (0, s.jsx)(n3, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lK.A, { message: e, poll: t, className: cW.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tL, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lW.Mn)(e, this.props.channel)) return (0, s.jsx)(sa, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lW.Mn)(e, this.props.channel))
            return (0, s.jsx)(i_, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(cF.A, { message: e, compact: t, location: cF.O.AFTER_ACCESSORIES });
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
                        if (null != t) return new im(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lz.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, cL.XL)(e),
                  className: o()(this.props.className, cW.kL),
                  children: (0, s.jsx)(cJ, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, cL.XL)(t), className: o()(e, cW.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let r = this.renderEditedTag(t, i),
            c = this.renderCodedLinks(t),
            d = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButtons(),
            h = this.renderEmbeds(t),
            g = this.renderActivityInvite(t),
            A = this.renderReactions(t),
            p = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            E = this.renderThreadAccessories(t),
            I = this.renderComponentAccessories(t),
            C = this.renderThreadRoleMentionWarning(t),
            _ = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            N = this.renderMediaPostEmbeds(t),
            j = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            S = this.renderMediaObscureNotice(t),
            y = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            R = this.renderReportedMessage(t),
            M = this.renderShareClientTheme(t);
        return null == c &&
            null == u &&
            null == h &&
            null == g &&
            null == A &&
            null == d &&
            null == p &&
            null == x &&
            null == f &&
            null == E &&
            null == I &&
            null == _ &&
            null == C &&
            null == N &&
            null == j &&
            null != v &&
            null == y &&
            null == b &&
            null == R &&
            null == M
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, cL.XL)(t),
                  className: o()(e, cW.kL),
                  children: [
                      R,
                      b,
                      C,
                      y,
                      M,
                      c,
                      d,
                      N,
                      u,
                      m,
                      h,
                      S,
                      g,
                      f,
                      I,
                      _,
                      v,
                      r,
                      A,
                      p,
                      x,
                      l && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      j,
                      T,
                  ],
              });
    }
}
function c0(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: l,
            isMessageSnapshot: a,
            hideInviteEmbedBanner: r,
            hideActivityInvite: o,
        } = e,
        c = (0, u.bG)([P.default], () => P.default.getId()),
        m = ia.X6.useSetting(),
        h = ia.hD.useSetting(),
        g = ia.rs.useSetting() && !(0, s8.A)(e.message),
        A = ia.jW.useSetting() && !1 !== e.renderReactions,
        p = ia.kt.useSetting(),
        x = (0, u.bG)([aP.A], () => null == n.guild_id || aP.A.canChatInGuild(n.guild_id), [n]),
        f = (0, u.bG)([lp.A], () => null != n.guild_id && lp.A.isLurking(n.guild_id), [n]),
        E = (0, u.bG)([lL.Ay, w.default], () => {
            let e = w.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lL.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: I, canManageMessages: C } = (0, u.cf)(
            [ts.A],
            () => ({
                canAddNewReactions: x && ts.A.can(W.xBc.ADD_REACTIONS, n),
                canManageMessages: ts.A.can(W.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        _ = (0, i8.ix)(n.guild_id),
        [, v] = (0, i9.c)(n.guild_id),
        N = (0, s5.Id)(n),
        j =
            (c === i.author.id || C) &&
            i.author.id !== W.oIV &&
            !1 !== l &&
            !(0, d.Lt)(i.flags, W.pr7.EPHEMERAL) &&
            N &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        T = c === i.author.id && N && !a,
        S = i.author.id === c,
        y = i.isFirstMessageInForumPost(n),
        b = (0, aV.A)({
            channel: n,
            canChat: x,
            renderReactions: A,
            canAddNewReactions: I,
            isLurking: f,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: N,
            isAutomodQuarantined: _,
        }),
        R = (0, n9.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        M = (0, lI.A)(n?.id),
        L = (0, lJ.A)(i),
        k = (0, n0.P)(i),
        O = (0, aF.z)(n),
        D = (0, aw._f)(i.id, i.channel_id),
        U = (0, nQ._R)(),
        G = (0, ie.U)();
    return (0, s.jsx)(c$, {
        canSuppressEmbeds: j,
        canDeleteAttachments: T,
        ...b,
        disableReactionReads: !!y || b.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && O,
        hasBailedAst: e.hasBailedAst,
        isLurking: f && x,
        isPendingMember: E && x,
        isCurrentUser: S,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: g,
        gifAutoPlay: p,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: R,
        showMaskedLinks: R,
        shouldHideMediaOptions: M,
        enabledContentHarmTypeFlags: k,
        ctaButtonType: D,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: r,
        hideActivityInvite: o,
        restrictedPreview: G,
    });
}
function c1(e) {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: a = !0,
            disableReactionUpdates: r = !0,
            disableComponentInteractivity: o = !0,
            ...c
        } = e,
        d = ia.X6.useSetting(),
        u = ia.hD.useSetting(),
        m = ia.rs.useSetting(),
        h = ia.kt.useSetting(),
        g = (0, ie.U)(),
        A = (0, n9.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, lI.A)(n?.id),
        x = (0, n0.P)(t),
        f = (0, aw._f)(t.id, t.channel_id),
        E = (0, lJ.A)(t);
    return (0, s.jsx)(c$, {
        ...c,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: a,
        disableReactionUpdates: r,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: l,
        inlineAttachmentMedia: d,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: h,
        poll: E,
        showListsAndHeaders: A,
        showMaskedLinks: A,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: x,
        ctaButtonType: f,
        restrictedPreview: g,
    });
}
