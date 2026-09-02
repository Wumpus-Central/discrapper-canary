n.d(t, { iV: () => cZ, OC: () => cQ, Ay: () => cq }), n(938796);
var i,
    l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(448761),
    c = n(665260),
    d = n(17928),
    u = n(803805),
    m = n(52133),
    h = n(192308),
    g = n(640238),
    A = n(834730),
    p = n(148494),
    x = n(793574),
    f = n(688810),
    E = n(735991);
n(321073), n(134528), n(947204);
var I = n(485845),
    C = n(379834),
    _ = n(836480),
    v = n(825860),
    N = n(950305),
    j = n(795816),
    T = n(574152),
    S = n(522305),
    y = n(361926),
    b = n(583846),
    R = n(625180),
    M = n(207371),
    L = n(205184),
    k = n(773669),
    O = n(280450),
    P = n(734057),
    D = n(994500),
    U = n(967198),
    G = n(287809),
    w = n(486020),
    H = n(204776),
    V = n(725606),
    B = n(572211),
    F = n(500060),
    z = n(432017),
    J = n(687966),
    K = n(104171),
    Y = n(652215),
    W = n(375708),
    X = n(852575);
function Z(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, l.jsxs)("div", {
        className: X.i,
        children: [
            (0, l.jsx)(K.Ay, { guildId: n, users: t, max: 6, size: K.DN.SIZE_16 }),
            (0, l.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var q = n(354287),
    Q = n(138175),
    $ = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(165610),
    ei = n(113732);
function el(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: a, message: r, onView: o } = e,
        { name: c, bot: u } = (t = (0, Q.b)(t)),
        m = u?.id,
        h = (0, E.Ag)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: A, videoBannerSrc: p, bannerAspectRatio: I } = (0, $.f)(t),
        C = (0, d.bG)([O.default], () => a ?? O.default.getId(), [a]),
        { analyticsLocations: _ } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: v, instanceId: N, isCurrentlyInInstance: b, canLaunchInChannel: L } = (0, V.w)(t.id),
        k = (0, T.A)(),
        D = (0, y.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        U = null != m && h && D,
        G = L && h,
        H = (0, M.x)(t),
        F = (0, ee.F)(t),
        z = (0, ee.t)(t),
        J = s.useMemo(() => {
            let e = [];
            return (
                h
                    ? H
                        ? e.push({
                              label: W.intl.string(W.t.RscU7I),
                              trackingArea: q.kY.PLAY,
                              onClick() {
                                  R.A.launchFrame({ applicationId: t.id, surface: en.sd });
                              },
                          })
                        : (G &&
                              e.push({
                                  label:
                                      null == N
                                          ? W.intl.string(W.t.RscU7I)
                                          : b
                                            ? W.intl.string(W.t.DPfdsq)
                                            : W.intl.string(W.t.sqe0hj),
                                  trackingArea: q.kY.PLAY,
                                  onClick() {
                                      (0, j.su)({
                                          channelId: v ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == N,
                                          embeddedActivitiesManager: k,
                                          customId: i,
                                          referrerId: C,
                                          analyticsLocations: _,
                                      });
                                  },
                                  disabled: b,
                              }),
                          !G &&
                              U &&
                              e.push({
                                  label: W.intl.string(W.t.JeK1Wg),
                                  trackingArea: q.kY.PLAY,
                                  onClick() {
                                      (0, S.Q)({
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
        }, [h, z, H, t.id, G, U, N, b, v, k, i, C, _, m]),
        K = h ? (0, l.jsx)(ea, { app: t }) : (0, l.jsx)(es, { app: t });
    return (0, l.jsx)(B.h, {
        title: c,
        staticBannerSrc: A,
        videoBannerSrc: p,
        onClickBanner: F,
        bannerAspectRatio: I,
        iconSrc: g,
        info: K,
        actions: J,
        onClickContent: F,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: o,
            guildId: P.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function es(e) {
    let { app: t } = e,
        n =
            (0, H.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            I.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, d.bG)([k.default], () => k.default.locale, []),
        a = s.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : W.intl.format(W.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        r = t.categories?.at(0)?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && (0, l.jsx)(A.E, { variant: "text-xs/medium", className: ei.h_, color: "none", children: r }),
            null != a &&
                (0, l.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: ei.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, l.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), a],
                }),
        ],
    });
}
function ea(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        a = (0, d.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        r = (0, L.s)(t.id),
        o = (0, d.yK)([G.default, D.A], () => {
            let e = [];
            for (let [t, n] of r.entries()) {
                if (t >= 5) break;
                let i = G.default.getUser(n.author_id),
                    l = D.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [r]),
        c = s.useMemo(() => {
            if (o.length > 0)
                return (0, l.jsx)(Z, {
                    activityUsers: o,
                    guildId: a,
                    activityText: W.intl.formatToPlainString(W.t["IJa+46"], { count: o.length }),
                });
            if (r.some((e) => (0, b.CZ)(e) === C.m.GLOBAL))
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(v.FireIcon, { size: "xxs", color: "currentColor" }),
                        W.intl.string(W.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? W.intl.format(W.t.z8EAJW, { count: i }) : W.intl.string(W.t.RjceQU);
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [r, o, a, i]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.length > 0 &&
                (0, l.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: ei.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, l.jsx)("span", { className: ei.Tc, children: e }, t)),
                }),
            (0, l.jsx)(A.E, { variant: "text-xs/normal", className: ei.dS, color: "none", lineClamp: 1, children: c }),
        ],
    });
}
var er = n(582388),
    eo = n(257269);
let ec = (0, d.UT)(er.A, {
    getQueryId: Y.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : er.A.getOne(e, t)),
    load: (e, t) => (0, eo.Py)(e, t),
});
var ed = n(309010),
    eu = n(933958),
    em = n(782091);
function eh(e) {
    let { application: t, customId: n, customLink: i, referrerId: s, message: a } = e,
        r = t?.bot?.id,
        o = (0, y.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        c = null != t && (0, E.Ag)(t),
        u = null != r && c && o,
        { analyticsLocations: m } = (0, f.Ay)(x.A.ACTIVITY_CUSTOM_LINK),
        h = (0, d.bG)([ed.Ay], () => ed.Ay.getChannelId()),
        g = (0, em.et)(h),
        A = (0, d.bG)([eu.Ay], () => {
            if (null == h) return;
            let e = eu.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        p = (0, d.bG)([eu.Ay], () => eu.Ay.getCurrentEmbeddedActivity()),
        I = (0, T.A)(),
        C = g === em.xy.CAN_LAUNCH,
        _ = null != A && p?.compositeInstanceId === A,
        v = null != n ? n : i.customId,
        N = [];
    (0, M.x)(t)
        ? N.push({
              label: W.intl.string(W.t.RscU7I),
              trackingArea: q.kY.PLAY,
              onClick() {
                  R.A.launchFrame({ applicationId: t.id, surface: en.sd });
              },
          })
        : (C &&
              N.push({
                  label:
                      null == A ? W.intl.string(W.t.RscU7I) : _ ? W.intl.string(W.t.DPfdsq) : W.intl.string(W.t.sqe0hj),
                  trackingArea: q.kY.PLAY,
                  onClick() {
                      (0, j.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == A,
                          embeddedActivitiesManager: I,
                          customId: v,
                          referrerId: s,
                          analyticsLocations: m,
                      });
                  },
                  disabled: _,
              }),
          u &&
              !C &&
              N.push({
                  label: W.intl.string(W.t.JeK1Wg),
                  trackingArea: q.kY.PLAY,
                  onClick() {
                      (0, S.Q)({ appId: t.id, botId: r, analyticsLocations: m, customId: v, referrerId: s });
                  },
              }));
    let b = (0, ee.F)(t);
    return (0, l.jsx)(B.h, {
        actions: N,
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
            activityCustomId: v,
            guildId: P.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function eg(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: s = n.author.id, linkId: a, customId: r } = i,
        { analyticsLocations: o } = (0, f.Ay)(x.A.ACTIVITY_BOOKMARK),
        { data: c, error: d } = ec(t.id, a);
    return (0, E.Ag)(t)
        ? null != a && null == d && null != c
            ? (0, l.jsx)(f.f5, {
                  value: o,
                  children: (0, l.jsx)(eh, { application: t, customId: r, customLink: c, referrerId: s, message: n }),
              })
            : (0, l.jsx)(f.f5, {
                  value: o,
                  children: (0, l.jsx)(el, {
                      app: t,
                      linkType: et.J.ACTIVITY,
                      activityCustomId: r,
                      activityReferrerId: s,
                      message: n,
                  }),
              })
        : null;
}
var eA = n(931374),
    ep = n(821609),
    ex = n(379257),
    ef = n(847599);
function eE(e) {
    let { channelId: t } = e,
        n = (0, eA.b8)(),
        i = (0, eA.i2)(),
        a = W.intl.string(W.t["9KiIz6"]),
        r = W.intl.string(W.t["/nicWo"]),
        o = s.useCallback(() => {
            ex.A.showAgeVerificationGetStartedModal({ entryPoint: ef.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ef.UT)(ef.Im.RETRY, t);
        }, [t]);
    return (0, l.jsx)(ep.$, { variant: "primary", text: n ? a : r, onClick: o, disabled: !i });
}
var eI = n(107766),
    eC = n(780964),
    e_ = n(766075);
function ev(e) {
    let { channelId: t } = e,
        n = s.useCallback(() => {
            (0, eI.nk)() || (0, e_.openUserSettings)(eC.X.FAMILY_CENTER_PANEL), (0, ef.UT)(ef.Im.CONNECT_TO_TEEN, t);
        }, [t]);
    return (0, l.jsx)(ep.$, { variant: "primary", text: W.intl.string(W.t.n8a49k), onClick: n });
}
var eN = n(277861),
    ej = n(876891);
function eT(e) {
    let { channelId: t } = e,
        n = (0, eA.i2)(),
        i = s.useCallback(() => {
            (0, eN.Vq)(), (0, ef.UT)(ef.Im.MANUAL_REVIEW, t);
        }, [t]);
    return (0, l.jsx)(ep.$, { variant: "secondary", text: W.intl.string(ej.default.Z61nkt), onClick: i, disabled: !n });
}
var eS = n(284009),
    ey = n.n(eS),
    eb = n(664121),
    eR = n(34188),
    eM = n(408278),
    eL = n(173936),
    ek = n(691540),
    eO = n(857250),
    eP = n(97483),
    eD = n(939249),
    eU = n(996759),
    eG = n(800342),
    ew = n(163437),
    eH = n(185438),
    eV = n(97352),
    eB = n(652676),
    eF = n(67480),
    ez = n(328968),
    eJ = n(174459),
    eK = n(957565),
    eY = n(943775),
    eW = n(997997),
    eX = n(658575),
    eZ = n(376374),
    eq = n(435220),
    eQ = n(140046);
let e$ = (0, d.UT)([eF.A, ez.A, eV.A], {
        getQueryId: Y.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eF.A.get(e),
                n = ez.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eV.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            ey()(null != e, "skuId is null"), await (0, eG.QB)(e);
        },
    }),
    e0 = (0, d.UT)([eF.A], {
        getQueryId: Y.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eF.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            ey()(null != e && null != t, "appId is null"), await (0, eG.JI)(t);
        },
    });
function e1(e) {
    let { application: t, message: i } = e,
        a = t.id,
        r = (0, eX.G)(a),
        [o, c, u, m] = (0, d.yK)([eB.A, P.A], () => {
            let e = (0, eY.A)(t, 45),
                n = P.A.getBasicChannel(i.channel_id)?.guild_id;
            return [eB.A.getStoreLayout(a), eB.A.getFetchStatus(a), n, e];
        }, [t, a, i.channel_id]);
    s.useEffect(() => {
        c === eB.N.NONE && (0, eU.V)(a);
    }, [a, c]);
    let g = o.subscriptions.length,
        A = o.otps.length,
        p = s.useMemo(
            () =>
                g > 0 && A > 0
                    ? W.intl.formatToPlainString(W.t["jA648+"], { subCount: g, itemCount: A })
                    : g > 0
                      ? W.intl.formatToPlainString(W.t.GSfibA, { count: g })
                      : A > 0
                        ? W.intl.formatToPlainString(W.t.j7Go5A, { count: A })
                        : W.intl.string(W.t.rMA98g),
            [A, g],
        );
    if (!r) return null;
    function x() {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, l.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: a, guildId: u });
        });
    }
    return (0, l.jsx)(e3, {
        appName: t.name,
        title: W.intl.formatToPlainString(W.t.XDRjs5, { appName: t.name }),
        description: p,
        link: `${location.protocol}//${location.host}${Y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eW.K)(a, eW.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            x(),
                eJ.default.track(Y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: a, area: "app_icon" });
        },
        children: (0, l.jsx)("div", {
            className: eQ.mZ,
            children: (0, l.jsx)(ep.$, {
                onClick: function () {
                    x(),
                        eJ.default.track(Y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: a,
                            area: "open_store_button",
                        });
                },
                text: W.intl.string(W.t.kRvlKJ),
            }),
        }),
    });
}
function e2(e) {
    let { application: t, skuId: i, message: a } = e,
        {
            parentSku: r,
            sku: o,
            subscriptionPlan: c,
            storeListing: u,
        } = (function (e, t) {
            let { data: n } = e$(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: a } = e0(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: a, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, d.bG)([P.A], () => P.A.getBasicChannel(a.channel_id)?.guild_id, [a]),
        g = s.useMemo(() => (0, eY.A)(t, 45), [t]),
        A = (0, eX.G)(t.id),
        { openModal: p, subscriptionPurchaseButtonState: x } = (0, eH.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!A || null == o) return null;
    let f = o.type === Y.Puh.SUBSCRIPTION,
        E = !!f && (0, ew.bg)(o.flags);
    function I() {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
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
                    function a() {
                        n.onClose(), I();
                    }
                    return null != e && null != r
                        ? (0, l.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: a,
                          })
                        : null != s
                          ? (0, l.jsx)(s, {
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
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(N.UserIcon, { size: "custom", width: 12, height: 12 }),
                          " ",
                          W.intl.string(W.t.wnifjC),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eb.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          W.intl.string(W.t.NRC3ar),
                      ],
                  })
            : u?.description?.trim();
    function v() {
        null != o &&
            eJ.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === _ && (_ = void 0),
        (0, l.jsx)(e3, {
            appName: t.name,
            title: o.name,
            description: _,
            link: `${location.protocol}//${location.host}${Y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eq.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, eW.K)(t.id, eW.C.SKU_EMBED, i);
            },
            iconSrc: g,
            onIconClick: function () {
                null != o &&
                    (I(),
                    eJ.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, l.jsxs)("div", {
                className: eQ.w,
                children: [
                    (0, l.jsx)(ep.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (C(),
                                eJ.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: W.intl.string(W.t.DXYfjO),
                    }),
                    f
                        ? null != c
                            ? (0, l.jsx)(eZ.rc, {
                                  onClick: p,
                                  appId: t.id,
                                  subscriptionType: E ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eR.U,
                                  onHasClicked: v,
                                  subscriptionPlan: c,
                                  state: x,
                              })
                            : (0, l.jsx)(ep.$, { variant: "primary", text: W.intl.string(W.t.uuzaAK), onClick: C })
                        : (0, l.jsx)(eZ.$P, { appId: t.id, sku: o, icon: eR.U, onHasClicked: v }),
                ],
            }),
        })
    );
}
function e3(e) {
    let { appName: t, title: n, description: i, link: s, iconSrc: a, onIconClick: r, onLinkCopy: o, children: c } = e;
    return (0, l.jsxs)("div", {
        className: eQ.iE,
        children: [
            (0, l.jsxs)("div", {
                className: eQ.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: eQ.qd,
                        children: [
                            (0, l.jsx)(eR.U, { size: "xxs" }),
                            (0, l.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eK.p5 &&
                        (0, l.jsx)(eM.K, {
                            "aria-label": W.intl.string(W.t.WqhZss),
                            icon: () => (0, l.jsx)(eL.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eK.C)(s, () => {
                                    (0, ek.P0)((0, eO.o)(W.intl.string(W.t["L/PwZf"]), eP.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: eQ.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eQ.oB,
                        children: [
                            null != a &&
                                (0, l.jsx)(eD.D, {
                                    onClick: r,
                                    children: (0, l.jsx)("img", { src: a.href, alt: "", className: eQ.Z2 }),
                                }),
                            (0, l.jsxs)("div", {
                                className: eQ.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, l.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, l.jsx)(A.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eQ.h_,
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
var e5 = n(401374),
    e6 = n(562708),
    e7 = n(139286);
function e9(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        a = s.useCallback(() => {
            (0, e7.x)({
                type: e6.ImpressionTypes.VIEW,
                name: e6.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, H.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, l.jsx)(f.f5, {
              value: i,
              children: (0, l.jsx)(el, { app: t, linkType: et.J.OAUTH, onView: a, message: n }),
          })
        : null;
}
var e4 = n(778492),
    e8 = n(297264),
    te = n(285796),
    tt = n(857182),
    tn = n(506774),
    ti = n(228366),
    tl = n(576705),
    ts = n(812930);
let ta = "ChannelFollowingBumpChannels",
    tr = new Set(),
    to = new Set();
class tc extends d.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(O.default, P.A, tl.A, G.default), (tr = new Set(tn.w.get(ta)));
    }
    shouldShowBump(e) {
        return to.has(e);
    }
}
let td = new tc(ti.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tr.has(t)) return !1;
        let l = P.A.getChannel(t),
            s = G.default.getCurrentUser(),
            a = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === Y.rbe.GUILD_ANNOUNCEMENT &&
                (0, ts.A)(n) &&
                tl.A.can(Y.xBc.SEND_MESSAGES, l) &&
                (a || tl.A.can(Y.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), Y.pr7.CROSSPOSTED)
            )
        )
            return !1;
        to.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        to.has(t.id) && c.Lt(Number(t.flags), Y.pr7.CROSSPOSTED) && to.delete(t.id);
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
        tr.add(t), tn.w.set(ta, tr), to.clear();
    },
});
var tu = n(419056),
    tm = n(732929);
let th = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, d.bG)([td], () => td.shouldShowBump(n), [n]),
        a = s.useCallback(() => {
            tt.A.dismissPublishBump(n), (0, tu.A)(t, n);
        }, [t, n]),
        r = s.useCallback(() => {
            tt.A.dismissPublishBump(n);
        }, [n]),
        o = s.useCallback(() => {
            tt.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, l.jsxs)("div", {
              className: tm.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: tm.mp,
                      children: [
                          (0, l.jsx)(e4.k, { size: "xs", color: "currentColor", className: tm.Kk }),
                          (0, l.jsx)(e8.D, {
                              variant: "heading-sm/normal",
                              className: tm.dS,
                              children: W.intl.string(W.t.hasZoU),
                          }),
                          (0, l.jsx)(A.E, {
                              color: "text-brand",
                              className: tm.mk,
                              variant: "text-sm/normal",
                              children: (0, l.jsx)(eD.D, { onClick: a, children: W.intl.string(W.t.MFGE51) }),
                          }),
                          (0, l.jsx)(eD.D, {
                              onClick: r,
                              children: (0, l.jsx)(te.a, { size: "xs", color: "currentColor", className: tm.ut }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(A.E, {
                      color: "text-muted",
                      className: tm.qx,
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(eD.D, { onClick: o, children: W.intl.string(W.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tg = n(175671),
    tA = n(435558),
    tp = n.n(tA),
    tx = n(239947),
    tf = n(403581),
    tE = n(97808),
    tI = n(778712),
    tC = n(520117),
    t_ = n(793943),
    tv = n(763754),
    tN = n(973654),
    tj = n(467135),
    tT = n(644235),
    tS = n(153469),
    ty = n(72191),
    tb = n(988986);
function tR(e) {
    return e.map((e) => `#${e}`);
}
function tM(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tj.ko)();
    return void 0 === n
        ? null
        : (0, l.jsxs)("div", {
              className: tb.kL,
              children: [
                  (0, l.jsx)(tL, { message: t }),
                  (0, l.jsx)(ep.$, {
                      text: W.intl.string(W.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eJ.default.track(Y.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, t_.nf)(t_.HP.CUSTOM_THEME, { from: t_.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tR(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tN.GQ)((0, tT.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tL(e) {
    var t, n, i;
    let { message: a } = e,
        { sharedClientTheme: r } = a,
        o = (0, tv.Ay)(a),
        c = s.useMemo(
            () =>
                (0, tA.once)(() => {
                    (0, e7.x)({ type: e6.ImpressionTypes.VIEW, name: tx.IJ.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        d = (0, tC.A)({
            onVisible: () => {
                c();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = s.useMemo(() => (void 0 === r ? "" : (0, tS.V9)(tR(r.colors), r.gradient_angle ?? 0)), [r]);
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: tb.pS,
              ref: d,
              children: [
                  (0, l.jsx)("div", { className: tb.sl, style: { background: `${u}` } }),
                  (0, l.jsxs)("div", {
                      className: tb.Ix,
                      children: [
                          (0, l.jsxs)(e8.D, {
                              variant: "heading-md/semibold",
                              className: tb.qP,
                              children: [W.intl.string(ty.default.KSBBpC), " ", (0, l.jsx)(tf.t, {})],
                          }),
                          (0, l.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tb.Tb,
                              children:
                                  ((t = `${W.intl.format(ty.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = a.author),
                                  (i = o.nick),
                                  t
                                      .split(" ")
                                      .map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, l.jsxs)(s.Fragment, { children: [e, " "] }, t)
                                              : (0, l.jsxs)(
                                                    "span",
                                                    {
                                                        className: tb.H,
                                                        children: [
                                                            (0, l.jsx)(tE.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tI._3.SIZE_20,
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
var tk = n(892768),
    tO = n(167189),
    tP = n(758836);
let tD = new Set(Object.values(tP.G2).filter((e) => e !== tP.G2.COLLECTION_INDEX));
var tU = n(132500),
    tG = n(172218),
    tw = n(612324),
    tH = n(575593),
    tV = n(269115),
    tB = n(318254),
    tF = n(890856),
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
    t9 = n(682301),
    t4 = n(841702),
    t8 = n(466459),
    ne = n(597783),
    nt = n(777829),
    nn = n(859587),
    ni = n(918838),
    nl = n(623373),
    ns = n(536572),
    na = n(156248),
    nr = n(38405);
class no extends s.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nr.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var nc = n(878112),
    nd = n(722258),
    nu = n(268959),
    nm = n(387945),
    nh = n(618317),
    ng = n(140877),
    nA = n(561769),
    np = n(661847),
    nx = n(139146),
    nf = n(540737),
    nE = n(927813);
let nI = 10 * nE.A.Millis.MINUTE,
    nC = new (class {
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
    n_ = new Set(),
    nv = new Map(),
    nN = null;
function nj(e) {
    let t = nv.get(e);
    return null != t && Date.now() - t < nI;
}
var nT = n(347722),
    nS = n(935094),
    ny = n(57020),
    nb = n(61750),
    nR = n(521e3),
    nM = n(202541),
    nL = n(278324);
function nk() {
    return (0, t4.b5)(), null;
}
function nO(e) {
    let { disableFetch: t } = e;
    return (0, tQ.W)({ disableFetch: t }), null;
}
function nP(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: a, checkoutEligiblePrices: r } = (0, ny.F)({ product: t, hasShopDiscount: n }),
        o = r[0],
        c = t.skuId,
        d = s.useCallback(() => {
            a
                ? (0, t$.B4)({
                      skuId: c,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          (0, t2.gB)(),
                              (0, nb.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tP.gs.ORB,
                              });
                      },
                  })
                : (0, tZ.A)({
                      skuId: c,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, t2.gB)();
                      },
                  });
        }, [t, c, a, i]);
    if (null == o) return null;
    let u = a
        ? W.intl.format(W.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, l.jsx)(tB.C, { className: nL.fN, size: "sm", color: "currentColor" }),
          })
        : W.intl.formatToPlainString(W.t["cNSL/j"], { price: (0, t1.$g)(o.amount, o.currency) });
    return (0, l.jsx)(ep.$, { variant: "primary", onClick: d, text: u, fullWidth: !0 });
}
function nD(e) {
    let { product: t, skuId: n, tab: i, channel: a } = e,
        { analyticsLocations: o } = (0, f.Ay)(),
        c = (0, d.bG)([G.default], () => G.default.getCurrentUser()),
        u = a.isDM() || a.isGroupDM(),
        m = s.useRef(null),
        { isHoveringOrFocusing: h } = (0, tW.A)(m),
        g = s.useRef(null),
        A = (0, ni.U)(t),
        p = (0, tw.A)(g, A),
        { handleCardVisibilityChange: x } = (0, ne.Z)(n, i === tP.G2.CATALOG ? "full" : i);
    (0, nn.x)(h, t);
    let { previewingVariantIndex: E, handleEntering: I, handleLeaving: C } = (0, nS.f)(t),
        _ = s.useRef(!1);
    s.useEffect(() => {
        if (_.current || !(0, nl.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        e > -1 && (0, t6.n)(t, e), (_.current = !0);
    }, [t, n]);
    let v = (0, t6.Q)(t),
        N = (0, nl.B1)(t) ? (t.variants[v] ?? t) : t,
        j = N.skuId,
        { isPurchased: T } = (0, t8.h)(N),
        S = (0, d.bG)([t5.A], () => t5.A.hasPreviouslyFetched || null != t5.A.fetchError),
        y = !u || S,
        b = u && T,
        R = (0, d.bG)([G.default], () => {
            if (!a.isDM() || null == a.recipients) return;
            let e = G.default.getCurrentUser()?.id,
                t = a.recipients.find((t) => t !== e) ?? a.recipients[0];
            return null != t ? (G.default.getUser(t) ?? void 0) : void 0;
        }),
        M = (0, nT.X)(N),
        L = (0, nt.f)({ product: t, analyticsLocations: o }),
        k = (0, na.G)({
            skuId: j,
            product: N,
            productName: (0, ns.VG)(N),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: L,
        }),
        O = s.useCallback(
            (e) => {
                e.stopPropagation(), k();
            },
            [k],
        ),
        P = s.useCallback(() => {
            (0, nd.B)({ skuId: j, tab: i, analyticsLocations: o });
        }, [j, i, o]),
        D = s.useMemo(() => ({ maxVariantsToShow: 4, onClick: P }), [P]),
        U = s.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        w = null != c && t0.Ay.canUseShopDiscounts(c),
        H = y && !b && !(0, t7.G0)(N),
        V = (0, l.jsx)(ep.$, { variant: "secondary", onClick: P, text: W.intl.string(W.t.KLBTgF), fullWidth: !0 }),
        B = H ? (0, l.jsx)(nP, { product: N, hasShopDiscount: w, analyticsLocations: o }) : null,
        F = M
            ? (0, l.jsx)(nc.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: v,
                  giftRecipient: R,
                  giftingOrigin: nM.vQ.SHOP_PAGE,
              })
            : null;
    return (0, l.jsxs)("div", {
        ref: m,
        className: nL.kL,
        children: [
            u && (0, l.jsx)(nk, {}),
            (0, l.jsx)(nO, { disableFetch: !(0, nl.Vx)(N) }),
            (0, l.jsxs)(nA.v3.Provider, {
                value: U,
                children: [
                    (0, l.jsx)(tV.L, {
                        innerRef: g,
                        onChange: x,
                        threshold: 0,
                        children: (0, l.jsx)(nR.vf.Provider, {
                            value: (0, nR.$c)(t.skuId) ? g : null,
                            children: (0, l.jsxs)(tF.s, {
                                ref: p,
                                onClick: P,
                                "aria-label": (0, ns.s7)(N),
                                className: nL.xX,
                                children: [
                                    t.type === tH.R.BUNDLE &&
                                        t.previewAssets?.bgStatic != null &&
                                        (0, l.jsx)("img", { className: nL.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                    (0, l.jsx)("div", {
                                        className: nL.VH,
                                        children: (0, l.jsx)(nh.A, {
                                            skuId: n,
                                            isCardHovered: h,
                                            overrideVariantIndex: E,
                                        }),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: nL.GJ,
                                        children: [
                                            (0, l.jsx)(nu.A, { skuId: n }),
                                            (0, l.jsxs)("div", {
                                                className: nL.gj,
                                                children: [
                                                    (0, l.jsx)(tz.m, {
                                                        text: W.intl.string(W.t.RDE0Sc),
                                                        ariaHidden: !0,
                                                        children: (0, l.jsx)(eD.D, {
                                                            "aria-label": W.intl.string(W.t.Ej3B3Y),
                                                            onClick: O,
                                                            className: r()(nL.VD, { [nL.Hk]: !h }),
                                                            children: (0, l.jsx)(tX.A, {
                                                                size: "refresh_sm",
                                                                color: "currentColor",
                                                            }),
                                                        }),
                                                    }),
                                                    (0, l.jsx)(nx.R, {
                                                        product: t,
                                                        selectedVariantIndex: v,
                                                        isCardHovered: h,
                                                        onTrackClick: L,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: nL.zH,
                        children: [
                            (0, l.jsxs)("div", {
                                className: nL.pq,
                                children: [
                                    (0, l.jsx)(nm.A, { skuId: n }),
                                    (0, l.jsxs)("div", {
                                        className: nL.y3,
                                        children: [
                                            (0, l.jsx)(ng.A, { skuId: n }),
                                            (0, l.jsx)(np.A, {
                                                skuId: n,
                                                isCollapsed: !h,
                                                onVariantEnter: I,
                                                onVariantExit: C,
                                                overflowProps: D,
                                                onTrackClick: L,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(tJ.e, { wrap: !1, fullWidth: !0, children: [V, B, F] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nU = { rootMargin: "200px" };
function nG(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t9.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        a = (0, d.bG)([tq.A], () => tq.A.getFetchStateForSku(e.skuId)),
        r = (0, tY.A)(() => ({ cardId: (0, tU.A)() })),
        [o, c] = s.useState(!1),
        u = (0, tG.B)(
            s.useCallback((e) => {
                e.isIntersecting && c(!0);
            }, []),
            nU,
            "loading" === i && !o,
        );
    return (s.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || n_.has(t) || nj(t)) &&
            !(n_.size >= 50) &&
            (0, nf.jn)(t) &&
            (n_.add(t),
            (function e(t) {
                null == nN &&
                    (nN = setTimeout(() => {
                        (nN = null),
                            (function () {
                                for (let e of [...n_]) (nj(e) || !(0, nf.jn)(e)) && n_.delete(e);
                                if (0 === n_.size) return;
                                let t = [];
                                for (let e of n_) {
                                    if (t.length >= 50 || !nC.tryTake()) break;
                                    t.push(e),
                                        n_.delete(e),
                                        (function (e) {
                                            if ((nv.set(e, Date.now()), nv.size > 2e3)) {
                                                let e = nv.keys().next().value;
                                                null != e && nv.delete(e);
                                            }
                                        })(e);
                                }
                                t.length > 0 && (0, nf.tu)({ skuIds: t }),
                                    n_.size > 0 && e(Math.max(nC.getMsUntilAvailable(), 300));
                            })();
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== a && nj(e.skuId)
            ? null
            : (0, l.jsx)("div", {
                  ref: u,
                  className: nL.kL,
                  children: (0, l.jsx)("div", { className: nL.dc, children: (0, l.jsx)(tK.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, l.jsx)(t3.R9, { newValue: r, children: (0, l.jsx)(nD, { ...e, product: t }) })
          : null;
}
function nw(e) {
    return (0, l.jsx)(no, { children: (0, l.jsx)(nG, { ...e }) });
}
var nH = n(661531),
    nV = n(696986),
    nB = n(95561),
    nF = n(548118),
    nz = n(250627),
    nJ = n(741231),
    nK = n(749314),
    nY = n(71393),
    nW = n(722888),
    nX = n(43136),
    nZ = n(575926),
    nq = n(775429);
function nQ(e) {
    let { guildId: t } = e,
        n = (0, d.bG)([nY.A], () => nY.A.getGuild(t)),
        { loading: i, subscriptionsSettings: a } = (0, nW.G)(t),
        { listingsLoaded: o } = (0, nz.bb)(t),
        c = (0, nz.fZ)(t, { publishedOnly: !0 }),
        u = s.useCallback(async () => {
            eJ.default.track(Y.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nB.H$)(t) }),
                await (0, nJ.A)(Y.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e7.A)(
        { type: e6.ImpressionTypes.VIEW, name: e6.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = c.length > 0 ? new Date(Math.min(...c.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !o
        ? (0, l.jsx)("div", { className: r()(nq.lm, nq.dc), children: (0, l.jsx)(tK.y, {}) })
        : null == n || null == a
          ? null
          : (0, l.jsxs)("div", {
                className: nq.lm,
                children: [
                    (0, l.jsx)(nX.C, { coverImageAsset: a.cover_image_asset ?? null }),
                    (0, l.jsx)(nV.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nq.qs,
                        children: [
                            (0, l.jsx)(nZ.h, {
                                height: "16px",
                                width: "16px",
                                color: nH.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, l.jsx)(e8.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nq.Nl,
                                children: W.intl.string(W.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nV.h, { size: 16 }),
                    (0, l.jsx)(e8.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: W.intl.format(W.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, l.jsx)(nV.h, { size: 4 }),
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: a.description,
                    }),
                    (0, l.jsx)(nV.h, { size: 16 }),
                    (0, l.jsx)(nK.A, {}),
                    (0, l.jsx)(nV.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nq.kS,
                        children: [
                            (0, l.jsx)(nF.Ay, { guild: n }),
                            (0, l.jsxs)("ul", {
                                className: nq.q6,
                                children: [
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: W.intl.format(W.t.tKZNlb, { listingCount: c.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: W.intl.format(W.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: nq.$h,
                                children: (0, l.jsx)(ep.$, { onClick: u, icon: nZ.A, text: W.intl.string(W.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var n$ = n(390248),
    n0 = n(282108),
    n1 = n(33358),
    n2 = n(885574),
    n3 = n(874840);
function n5(e) {
    let { message: t } = e;
    return (0, l.jsxs)(eD.D, {
        onClick: function () {
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("249629"), n.e("486381"), n.e("635270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, l.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: n3.L,
        children: [
            (0, l.jsx)(n2.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(A.E, { variant: "text-xs/normal", className: n3.m, children: W.intl.string(W.t["2aXnfa"]) }),
        ],
    });
}
var n6 = n(974875),
    n7 = n(900019);
function n9(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, d.bG)([n7.A], () => n7.A.canSubmitFpReport(t)),
        a = s.useCallback(() => {
            (0, n6.Q)(n, t);
        }, [n, t]);
    return (0, l.jsx)(ep.$, { variant: "secondary", text: W.intl.string(W.t["4q1Elf"]), onClick: a, disabled: !i });
}
var n4 = n(320448),
    n8 = n(713654),
    ie = n(958340),
    it = n(384231),
    ii = n(959698),
    il = n(438729),
    is = n(432433),
    ia = n(886737),
    ir = n(699352),
    io = n(8455),
    ic = n(885386),
    id = n(540999),
    iu = n(47167),
    im = n(58703),
    ih = n(427930);
function ig(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: W.intl.formatToPlainString(W.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class iA {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tl.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nY.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ie.A,
            { snapshotIndex: a, parentMessage: r, messageSnapshot: o } = this,
            c = (0, im.Fe)(o.message.timestamp),
            d = e.getChannel(this.parentMessage.channel_id);
        if (null != d && d.guild_id === r.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(r.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(d.guild_id);
                return null == e ? { snapshotIndex: a } : { snapshotIndex: a, footerInfo: ig(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: a,
                      footerInfo: {
                          originLabel: (u = (0, iu.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: W.intl.formatToPlainString(W.t["+l04BN"], { origin: u, timestamp: c }),
                      },
                  }
                : { snapshotIndex: a };
        }
        let m = r.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: a };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: a } : { snapshotIndex: a, footerInfo: ig(h, c) };
    }
}
var ip = n(66834),
    ix = n(449054);
async function iE(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = P.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nY.A.getGuild(t))
        try {
            await (0, ix.Z2)(t, { object: Y.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, ip.k)(t),
                (l = P.A.getChannel(n));
        } catch {}
    eJ.default.track(Y.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: P.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let a = s ? n : void 0;
    (0, nJ.A)(Y.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: a });
}
var iI = n(387408),
    iC = n(352106);
function i_() {
    return (0, l.jsxs)("div", {
        className: iC.N1,
        children: [
            (0, l.jsx)(tX.A, { size: "xs", className: iC.nr, color: nH.A.colors.TEXT_MUTED }),
            (0, l.jsx)(A.E, {
                className: iC.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: W.intl.string(W.t.ToyvLk),
            }),
        ],
    });
}
function iv(e) {
    let { message: t, snapshot: n, index: i } = e,
        a = s.useMemo(() => new iA(t, n, i), [t, n, i]),
        r = (0, d.bG)(
            [P.A, G.default, D.A, tl.A, nY.A, ie.A],
            () => a.getForwardInfo(P.A, G.default, D.A, tl.A, nY.A, ie.A).footerInfo,
            [a],
            m.A,
        ),
        o = (0, d.bG)([P.A], () => P.A.getChannel(t.messageReference?.channel_id)),
        c = s.useCallback(() => {
            iE(t);
        }, [t]);
    return null == r
        ? null
        : (0, l.jsxs)(eD.D, {
              className: iC.xQ,
              onClick: c,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, l.jsx)("img", { className: iC.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  null == r.originIconUrl && o?.isThread() ? (0, l.jsx)(iN, { channel: o }) : null,
                  (0, l.jsx)(A.E, {
                      className: iC.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, l.jsx)(n4._, { size: "xxs", color: nH.A.colors.TEXT_MUTED }),
              ],
          });
}
function iN(e) {
    let { channel: t } = e,
        n = (0, io.Vp)({ location: "ForwardFooter" }),
        i = s.useMemo(() => (0, n8.gU)(t), [t]);
    return n.enabled && null != i ? (0, l.jsx)(i, { className: iC.yl, size: "xs", color: "currentColor" }) : null;
}
function ij(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: a } = e,
        r = s.useMemo(() => (0, iI.A)(t, n), [t, n]),
        o = ic.hD.useSetting(),
        c = ic.rs.useSetting(),
        u = (0, d.bG)([id.A], () => id.A.isDeveloper),
        m = (0, ii.U)(),
        h = (0, it.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: A,
            hasBailedAst: p,
        } = (0, is.A)(r, {
            hideSimpleEmbedContent: o && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: u,
            previewLinkTarget: !0,
            postProcessor: m ? ia.A : void 0,
        }),
        x = (0, d.bG)([P.A], () => P.A.getChannel(t.channel_id)),
        f = ic.hH.useSetting();
    return null == x
        ? null
        : (0, l.jsxs)(
              "div",
              {
                  className: iC.kL,
                  children: [
                      (0, l.jsx)("div", { className: iC.hD }),
                      (0, l.jsxs)("div", {
                          className: iC.Qs,
                          children: [
                              (0, l.jsx)(i_, {}),
                              (0, l.jsx)(il.Ay, { message: r, content: g, compact: f }),
                              (0, ir.A)({
                                  channelMessageProps: { message: r, channel: x, compact: f },
                                  hasSpoilerEmbeds: A,
                                  hasBailedAst: p,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: a,
                              }),
                              !m && (0, l.jsx)(iv, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function iT(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, l.jsx)(ij, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var iS = n(109112),
    iy = n(508770),
    ib = n(369606),
    iR = n(409626),
    iM = n(49491),
    iL = n(692969),
    ik = n(738250),
    iO = n(575568);
function iP(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: s,
            bannerUrl: a,
            openGameProfile: r,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, ik.A)({ gameId: t }),
                a = (0, iL.A)({ gameId: t, source: iR.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                r = (0, iM.A)(l),
                o = null != l && null != a && !s && !r,
                c = l?.getIconURL(80) ?? null,
                d = l?.getBannerURL(512) ?? l?.screenshotUrls?.[0] ?? null;
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
        ? (0, l.jsxs)(tF.s, {
              className: iO.E6,
              onClick: r,
              "aria-label": W.intl.formatToPlainString(W.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, l.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iO.yl,
                      children: [
                          null != a &&
                              (0, l.jsx)("div", { className: iO.Tp, style: { backgroundImage: `url("${a}")` } }),
                          (0, l.jsx)("div", { className: iO.N4 }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: iO.rf,
                      children: [
                          null != s
                              ? (0, l.jsx)("img", { src: s, alt: "", className: iO.Kk, draggable: !1 })
                              : (0, l.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iO.EU,
                                    children: (0, l.jsx)(iS._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, l.jsxs)("div", {
                              className: iO.Qs,
                              children: [
                                  (0, l.jsx)(e8.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, l.jsx)("div", {
                                          className: iO.k3,
                                          children: (0, l.jsx)(iy.E, {
                                              variant: "default",
                                              type: {
                                                  text: W.intl.formatToPlainString(W.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: ib.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, l.jsx)(eM.K, {
                              icon: n4._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": W.intl.formatToPlainString(W.t["8QLQB+"], { gameName: i.name }),
                              onClick: r,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iD = n(281445),
    iU = n(554146),
    iG = n(933832),
    iw = n(624479),
    iH = n(780907),
    iV = n(131607),
    iB = n(569926),
    iF = n(95035),
    iz = n(403362),
    iJ = n(196736),
    iK = n(614393),
    iY = n(143407),
    iW = n(685743),
    iX = n(349085),
    iZ = n(581453),
    iq = n(342942),
    iQ = n(174861),
    i$ = n(49999),
    i0 = n(394107),
    i1 = n(116947);
function i2(e) {
    let { code: t } = e,
        n = s.useMemo(() => (0, iQ.GF)(t), [t]);
    s.useEffect(() => {
        iH.Ay.getDetectableGames();
    }, []);
    let i = (0, iX.A)(n?.game_id, "cover"),
        { data: a } = (0, iB.I)(n?.game_id),
        r = (0, iJ.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [c, d] = (0, iV.kn)([iU.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = c !== iU.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iD.X.SHOCKBYTE,
        h = O.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: f } = (0, iW.A)(h, "0", x.A.GAME_SERVER_PAGE, g ?? ""),
        E = s.useCallback(() => {
            (0, t2.Cz)({
                tab: tP.G2.GAME_SERVERS,
                analyticsLocations: [x.A.GAME_SERVER_PAGE],
                analyticsSource: x.A.GAME_SERVER_PAGE,
            });
        }, []),
        I = s.useMemo(
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
        C = s.useCallback(() => {
            null != I &&
                (u
                    ? (0, iZ.A)(h, I)
                    : (0, iq.A)({
                          provider: m,
                          onAccept: () => {
                              d(i$.i.TAKE_ACTION), (0, iZ.A)(h, I);
                          },
                      }));
        }, [I, u, m, d, h]),
        _ = s.useCallback(() => {
            (0, iq.A)({
                provider: m,
                onAccept: () => {
                    d(i$.i.TAKE_ACTION), p();
                },
            });
        }, [m, d, p]);
    if (null == n) return null;
    let v = [a?.name, n.plan_name].filter(iz.Vq).join("  \u2022  ");
    return (0, l.jsxs)("div", {
        className: i1.E6,
        children: [
            (0, l.jsxs)("div", {
                className: i1.FG,
                children: [
                    (0, l.jsxs)("div", {
                        className: i1.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: i1.oL,
                                children: [
                                    "" !== o
                                        ? (0, l.jsx)("img", { className: i1.vT, src: o, alt: "" })
                                        : (0, l.jsx)("div", {
                                              className: i1.iv,
                                              children: (0, l.jsx)(A.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, l.jsx)("div", { className: i1.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: i1.TK,
                                children: [
                                    (0, l.jsx)(e8.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== v &&
                                        (0, l.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: v,
                                        }),
                                ],
                            }),
                            r &&
                                (0, l.jsx)("div", {
                                    className: i1.xG,
                                    children: (0, l.jsx)(eM.K, {
                                        variant: "secondary",
                                        icon: eR.U,
                                        "aria-label": W.intl.string(i0.default.F5W36W),
                                        onClick: E,
                                    }),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: i1.$D,
                        children: [
                            (0, l.jsxs)("div", {
                                className: i1.lj,
                                children: [
                                    (0, l.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: W.intl.string(i0.default.mJlz3T),
                                    }),
                                    (0, l.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children:
                                            null != n.region_name && "" !== n.region_name ? n.region_name : "\u2014",
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: i1.lj,
                                children: [
                                    (0, l.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: W.intl.string(i0.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, l.jsx)(A.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, l.jsxs)("div", {
                                                className: i1.qy,
                                                children: [
                                                    (0, l.jsx)(A.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, l.jsx)(eD.D, {
                                                        className: i1.cL,
                                                        "aria-label": W.intl.string(W.t.OpuAlK),
                                                        onClick: p,
                                                        children: f
                                                            ? (0, l.jsx)(iG.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, l.jsx)(iw.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, l.jsx)(iF.A, {
                                                onClick: _,
                                                children: W.intl.string(i0.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != I && (0, l.jsx)("div", { className: i1.PD, children: (0, l.jsx)(iY.l5, { onClick: C }) }),
                ],
            }),
            (0, l.jsx)("div", { className: i1.uV, children: (0, l.jsx)(iK.T, { imageUrl: o }) }),
        ],
    });
}
var i3 = n(643612),
    i5 = n(607399),
    i6 = n(702841),
    i7 = n(529200),
    i9 = n(395671),
    i4 = n(993748),
    i8 = n(212534),
    le = n(820496);
function lt(e) {
    let { code: t, message: n } = e,
        [i, a, r] = (0, i6.yK)(
            [i8.A],
            () => [i8.A.getApplication(t), i8.A.isInvalidApplication(t), i8.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i6.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [c, d] = s.useState(!1),
        u = s.useCallback((e) => {
            e && d(!0);
        }, []),
        m = (0, tG.K)(u),
        h = s.useCallback(() => {
            eJ.default.track(Y.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i5.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (s.useEffect(() => {
        (0, i4.eP)(t);
    }, [t]),
    s.useEffect(() => {
        c && r === i8.e.FETCHED && h();
    }, [c, r, h]),
    s.useEffect(() => {
        c &&
            a &&
            eJ.default.track(Y.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i5.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [c, o, a, n.author.id, n.channel_id]),
    a)
        ? (0, l.jsxs)(i7.A, {
              containerRef: m,
              children: [
                  (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t.j4KtLa) }),
                  (0, l.jsx)(i7.A.Body, {
                      children: (0, l.jsxs)("div", {
                          className: le.k,
                          children: [
                              (0, l.jsx)(i7.A.Icon, { expired: !0 }),
                              (0, l.jsx)(i7.A.Info, {
                                  expired: !0,
                                  title: W.intl.string(W.t.NaQLEx),
                                  children: W.intl.string(W.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || r === i8.e.FETCHING
          ? (0, l.jsxs)(i7.A, {
                containerRef: m,
                children: [
                    (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t.m9hXGR) }),
                    (0, l.jsx)(i7.A.Body, { resolving: !0 }),
                ],
            })
          : (0, l.jsx)(el, { app: i9.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var ln = n(229527),
    li = n(870136),
    ll = n(330075),
    ls = n(412728);
function la(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        s = (0, nz.Qi)(n, i),
        a = (0, i6.bG)([U.A], () => U.A.getGuildId());
    return ((0, e7.A)(
        {
            type: ls.z.VIEW,
            name: e6.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: s?.has_entitlement === !0 },
        },
        { disableTrack: null == s },
    ),
    null == s || a !== n)
        ? null
        : (0, l.jsx)(ll.i, {
              guildProductListing: s,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var lr = n(484724),
    lo = n(953727);
function lc(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, lo.A)(s),
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
var ld = n(122906),
    lu = n(401755),
    lm = n(313977),
    lh = n(508557);
function lg(e) {
    let { code: t } = e,
        i = (0, d.bG)([ld.A], () => ld.A.getGuildTemplate(t));
    if (null == i || i.state === lu.QB.RESOLVING)
        return (0, l.jsxs)(i7.A, {
            children: [
                (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t.Xj87Yf) }),
                (0, l.jsx)(i7.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lu.QB.EXPIRED)
        return (0, l.jsxs)(i7.A, {
            children: [
                (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t.C7ZRNw) }),
                (0, l.jsxs)(i7.A.Body, {
                    children: [
                        (0, l.jsx)(i7.A.Icon, { expired: !0 }),
                        (0, l.jsx)(i7.A.Info, { expired: !0, title: W.intl.string(W.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let s = __OVERLAY__
        ? (0, l.jsx)(ep.$, { disabled: !0, variant: "secondary", text: W.intl.string(W.t.W7NTWm) })
        : (0, l.jsx)(ep.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lu.QB.RESOLVING &&
                      (0, h.openModalLazy)(async () => {
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
                          return (t) => (0, l.jsx)(e, { ...t, guildTemplate: i });
                      });
              },
              loading: i.state === lu.QB.ACCEPTING,
              variant: "active",
              text: W.intl.string(W.t["a3Gl+e"]),
          });
    return (0, l.jsxs)(i7.A, {
        children: [
            (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t.kAvFkO) }),
            (0, l.jsxs)(i7.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: lh.iH,
                        children: [
                            (0, l.jsx)(lc, { className: lm.K }),
                            (0, l.jsx)(i7.A.Info, {
                                title: i.name,
                                children: W.intl.format(W.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    s,
                ],
            }),
        ],
    });
}
var lA = n(842241),
    lp = n(681154),
    lx = n(155718);
let lf = new Set([
    lp.ContentInventoryEntryType.TOP_ARTIST,
    lp.ContentInventoryEntryType.TOP_GAME,
    lp.ContentInventoryEntryType.PLAYED_GAME,
    lp.ContentInventoryEntryType.WATCHED_MEDIA,
    lp.ContentInventoryEntryType.LISTENED_SESSION,
    lp.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lE = n(844789),
    lI = n(857071),
    lC = n(46054),
    l_ = n(731068),
    lv = n(619517),
    lN = n(207133),
    lj = n(844222),
    lT = n(463930),
    lS = n(251391),
    ly = n(601255),
    lb = n(562819),
    lR = n(234914),
    lM = n(59318),
    lL = n(837528),
    lk = n(754459),
    lO = n(967144),
    lP = n(342296),
    lD = n(696451),
    lU = n(218394);
function lG(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...s } = e;
    return (0, l.jsx)("svg", {
        ...(0, lo.A)(s),
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
var lw = n(717125),
    lH = n(376943),
    lV = n(36491),
    lB = n(752755),
    lF = n(461715),
    lz = n(381941),
    lJ = n(966101);
function lK(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        a = s.useRef(null),
        o = s.useRef(null),
        c = (function (e, t) {
            let n = (0, lF.CI)(e),
                i = (0, i6.bG)([lD.Ay, O.default], () => {
                    let e = O.default.getId();
                    return lD.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, i6.bG)(
                    [lw.A],
                    () => null != n && n?.channelId != null && lw.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                a = t.hasFlag(Y.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: o,
                    parentChannel: c,
                    user: d,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, i6.cf)([lB.A, nY.A, P.A, G.default, U.A], () => {
                    let e = lB.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = nY.A.getGuild(n?.guildId),
                        i = P.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        a = null != i && (0, lH.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: a,
                    };
                }, [n]),
                h = s.useMemo(() => {
                    let e = (0, lF.tU)({
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
                s.useEffect(() => {
                    n?.threadId != null &&
                        (lB.A.getEmbedFetchState(n.threadId) !== lB.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && a) ||
                            (0, lV.O0)(n?.threadId));
                }, [n, i, l, a]),
                h
            );
        })(t, n),
        { setPopout: d } = (0, lk.A)(n.id, lz.Fd),
        u = (0, lL.VL)(n, i, d, !0),
        m = ic.kt.useSetting(),
        h = (0, lU.j)(),
        [g, p] = s.useState(!1),
        [f, E] = s.useState(c?.coverImage == null),
        I = (0, i6.bG)([lD.Ay, G.default], () => lD.Ay.isMember(c?.guildId, G.default.getCurrentUser()?.id), [c]),
        C = (0, i6.bG)([lD.Ay], () => (c?.authorId != null ? lD.Ay.getMember(c.guildId, c.authorId) : null)),
        _ = (0, ly.A)(C?.avatarDecoration != null ? C?.avatarDecoration : c?.user?.avatarDecoration),
        [v, N, j] = s.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, lO.gn)(C?.guildId, c?.authorId ?? void 0, N),
        { reducedMotion: S } = s.useContext(lj.C),
        [y, b] = s.useState(!1),
        R = s.useCallback(() => {
            p(!0);
        }, [p]),
        M = s.useCallback(() => {
            p(!1);
        }, [p]),
        L = s.useCallback(async () => {
            null != c &&
                ((0, nB.zV)(Y.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: c.threadId,
                    channel_id: i.id,
                    can_access: c.canAccess,
                    is_member: I,
                }),
                c.canAccess
                    ? (0, nJ.A)(Y.BVt.CHANNEL(c.guildId, c.threadId, c.messageId))
                    : I
                      ? (0, nJ.A)(Y.BVt.CHANNEL(c.guildId, c.parentChannelId))
                      : await ix.Z2(c.guildId, {}, { channelId: c.parentChannelId }));
        }, [c, i, I]);
    if (null == c) return null;
    let k = (0, w.F_)({ avatarDecoration: _, size: (0, lb.Te)(tI._3.SIZE_40), canAnimate: y }),
        D = c.user?.getAvatarURL(c.guildId, 40, y);
    function H() {
        S.enabled || b((e) => !e);
    }
    let V = c.coverImage,
        B = null != V && (0, lM.ge)(V);
    return (0, l.jsxs)("div", {
        className: lJ.wb,
        children: [
            (0, l.jsxs)("div", {
                className: lJ.iT,
                onMouseEnter: R,
                onMouseLeave: M,
                children: [
                    !f &&
                        (!0 === c.shouldShowBlurredThumbnailImage
                            ? (0, l.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: W.intl.string(W.t.rIbh8H),
                                  className: r()(lJ.xn, { [lJ.p6]: c.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, l.jsx)(lR.A, {
                                  src: !(h && (m || g)) && B ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: W.intl.string(W.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(lJ.xn, { [lJ.p6]: c.shouldSpoiler }),
                                  imageChildClassName: lJ.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != c.coverImageOverlayText &&
                        (0, l.jsx)(eD.D, {
                            onClick: L,
                            children: (0, l.jsx)("div", {
                                className: lJ.nx,
                                children: (0, l.jsxs)("div", {
                                    className: lJ.BS,
                                    children: [
                                        (0, l.jsx)(lG, { color: nH.A.colors.WHITE.css }),
                                        (0, l.jsx)(A.E, {
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
            (0, l.jsxs)("div", {
                className: lJ.iQ,
                children: [
                    (0, l.jsxs)("div", {
                        className: lJ.OA,
                        children: [
                            (0, l.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lJ.hF,
                                children: c.title,
                            }),
                            (0, l.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(lJ.hF, lJ.Fq),
                                children: c.subtitle,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: lJ._5,
                        children: [
                            null != c.authorId &&
                                null != D &&
                                (0, l.jsx)(lP.A, {
                                    targetElementRef: o,
                                    userId: c.authorId,
                                    guildId: c.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: j,
                                    avatarUrl: c.avatarUrl,
                                    newAnalyticsLocations: [x.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, l.jsx)("div", {
                                            onMouseEnter: H,
                                            onMouseLeave: H,
                                            children: (0, l.jsx)(tE.eu, {
                                                ...e,
                                                ref: o,
                                                size: tI._3.SIZE_40,
                                                src: D,
                                                "aria-label": W.intl.string(W.t.KXz3XB),
                                                avatarDecoration: k,
                                            }),
                                        }),
                                }),
                            (0, l.jsxs)("div", {
                                className: lJ.Ny,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: lJ.O9,
                                        children: [
                                            null != c.channelName &&
                                                (0, l.jsx)(lS.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lJ.Xg,
                                                }),
                                            (0, l.jsx)(eD.D, {
                                                onClick: L,
                                                className: lJ.HA,
                                                children: (0, l.jsx)(e8.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: c.channelName ?? c.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != c.authorName &&
                                        (0, l.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lJ.wn,
                                            children: W.intl.format(W.t.voIDKa, {
                                                authorName: c.authorName,
                                                authorNameHook: function () {
                                                    return null == c
                                                        ? null
                                                        : null == c.authorId
                                                          ? (0, l.jsx)(lT.V, {
                                                                name: c.authorName,
                                                                colorString: v,
                                                                colorStrings: T,
                                                                className: lJ.fh,
                                                            })
                                                          : (0, l.jsx)(
                                                                lP.A,
                                                                {
                                                                    targetElementRef: a,
                                                                    userId: c.authorId,
                                                                    guildId: c.guildId,
                                                                    channelId: i.id,
                                                                    messageId: n.id,
                                                                    roleId: j,
                                                                    avatarUrl: c.avatarUrl,
                                                                    newAnalyticsLocations: [x.A.USERNAME],
                                                                    children: (e) =>
                                                                        (0, l.jsx)(lT.V, {
                                                                            ...e,
                                                                            ref: a,
                                                                            name: c.authorName,
                                                                            colorString: v,
                                                                            colorStrings: T,
                                                                            className: lJ.fh,
                                                                        }),
                                                                },
                                                                (0, tU.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            c.canAccess
                                ? (0, l.jsx)(ep.$, { variant: "primary", onClick: L, text: c.ctaText })
                                : (0, l.jsx)(ep.$, { onClick: L, variant: "primary", text: c.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lY = n(492230),
    lW = n(68935),
    lX = n(704413),
    lZ = n(537039),
    lq = n(711038),
    lQ = n(892340),
    l$ = n(803306),
    l0 = n(491182),
    l1 = n(622868),
    l2 = n(10364),
    l3 = n(378570),
    l5 = n(138298),
    l6 = n(761640),
    l7 = n(536637),
    l9 = n.n(l7),
    l4 = n(606049),
    l8 = n(943815),
    se = n(447215),
    st = n(39470),
    sn = n(832038),
    si = n(318626),
    sl = n(513653);
let ss = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: a, messageId: o, reportedTimestamp: c } = e,
        d = G.default.getUser(t),
        u = s.useMemo(() => (i ? (0, l8.A)((0, im.i$)(l9()(), "LT")) : null), [i]),
        m = (0, se.P)({ user: d, channelId: a.id, guildId: n, messageId: o })((0, tv.m2)(d, a)),
        h = null != d ? d.getAvatarURL(n, (0, tI.FT)(tI._3.SIZE_16)) : sl,
        g =
            null != d
                ? W.intl.format(st.default["+zqXZs"], { username: d.username, onUserClick: m })
                : W.intl.string(st.default.xpRjfS);
    return (0, l.jsxs)("div", {
        className: r()(si.NB, si.JZ, u),
        children: [
            (0, l.jsx)(tE.eu, { src: h, size: tI._3.SIZE_16, className: sn.my, "aria-label": "" }),
            (0, l.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: sn.Xh, children: g }),
            (0, l.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, l.jsx)("span", { className: sn.Ek, children: "\u2022" }),
                    (0, l.jsx)(l4.A, { timestamp: c, className: sn.vE }),
                ],
            }),
        ],
    });
};
var sa = n(942925);
function sr(e) {
    let { message: t, snapshot: n, index: i } = e,
        a = s.useMemo(() => new iA(t, n, i), [t, n, i]),
        r = (0, d.bG)(
            [P.A, G.default, D.A, tl.A, nY.A, ie.A],
            () => a.getForwardInfo(P.A, G.default, D.A, tl.A, nY.A, ie.A).footerInfo,
            [a],
            m.A,
        ),
        o = s.useCallback(() => {
            let e = P.A.getChannel(t.channel_id),
                n = nY.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.Ay.getCurrentlySelectedChannelId(),
                s = l6.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                a = l === i && s === e?.id;
            null == e ||
                null == n ||
                a ||
                null == i ||
                (l5.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l3.iN)(i),
                eJ.default.track(Y.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == r
        ? null
        : (0, l.jsxs)(eD.D, {
              className: sa.xQ,
              onClick: o,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, l.jsx)("img", { className: sa.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  (0, l.jsx)(A.E, {
                      className: sa.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, l.jsx)(n4._, { size: "xxs", color: nH.A.colors.TEXT_MUTED }),
              ],
          });
}
function so(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: a, reportedTimestamp: r } = e,
        o = (0, tv.m2)(t.author, i),
        {
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lk.A)(e.id, lz.Fd),
                { usernameProfile: l, avatarProfile: a } = n,
                r = (0, lL.m)(e, t, l, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, lL.Jo)(a, i),
                onPopoutRequestClose: s.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: a,
            };
        })(t, i);
    return (0, l.jsx)(l0.A, {
        childrenExecutedCommand: (0, l.jsx)(ss, {
            reportingUserId: a,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: r,
            compact: !1,
        }),
        childrenHeader: (0, l.jsx)(l1.Ay, {
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
            renderPopout: l2.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, l.jsx)(il.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: sa.iU,
        author: o,
    });
}
function sc(e) {
    let { message: t, snapshot: n, index: i } = e,
        [a, r] = s.useState(void 0);
    s.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, l$.getUser)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    r(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = s.useMemo(() => {
            let e = (0, iI.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = ic.hD.useSetting(),
        u = ic.rs.useSetting(),
        m = (0, d.bG)([id.A], () => id.A.isDeveloper),
        h = (0, it.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: A,
            hasBailedAst: p,
        } = (0, is.A)(o, {
            hideSimpleEmbedContent: c && u,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        x = (0, d.bG)([P.A], () => P.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, l.jsx)(
              "div",
              {
                  className: sa.kL,
                  children: (0, l.jsxs)("div", {
                      className: sa.Qs,
                      children: [
                          (0, l.jsx)(so, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, ir.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: A,
                              hasBailedAst: p,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: sa.Mf,
                          }),
                          (0, l.jsx)(sr, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sd(e) {
    let { message: t } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, l.jsx)(sc, { message: t, snapshot: e, index: n }, n)),
    });
}
var su = n(302031),
    sm = n(738188),
    sh = n(123292),
    sg = n(239093),
    sA = n(798362);
function sp(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === sg.AT.CLASSIFICATION_ID) ?? void 0,
        s = i?.rawValue ?? void 0,
        a = t.fields?.find((e) => e.rawName === sg.AT.INCIDENT_TIMESTAMP) ?? void 0,
        r = null == a || null == a.rawValue ? void 0 : parseFloat(a.rawValue);
    return null == s || null == r
        ? null
        : (0, l.jsxs)(eD.D, {
              onClick: function () {
                  null != s &&
                      (0, h.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("742978"),
                              n.e("483518"),
                              n.e("51194"),
                              n.e("292030"),
                              n.e("229211"),
                          ]).then(n.bind(n, 385430));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  classificationId: s,
                                  source: sg.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sA.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: sA.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: sA.U1,
                              children: [
                                  (0, l.jsx)(sm.WarningIcon, {
                                      className: sA.QW,
                                      color: nH.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, l.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: W.intl.string(W.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: sA.VU,
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: W.intl.format(W.t.eevFb6, { daysAgo: l9()().diff(l9().unix(r), "days") }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: sA.vv,
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: sA.xQ,
                      children: (0, l.jsx)(sh.Q, { text: W.intl.string(W.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sx = n(28863),
    sf = n(393033),
    sE = n(975430);
function sI(e) {
    let { classificationId: t } = e;
    return (0, l.jsx)(sx.Anchor, {
        onClick: function () {
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("742978"),
                    n.e("483518"),
                    n.e("51194"),
                    n.e("292030"),
                    n.e("229211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, l.jsx)(e, {
                        classificationId: t,
                        source: sg.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sE.zh,
        children: W.intl.string(W.t.QsqdXC),
    });
}
function sC(e) {
    let { learnMoreLink: t } = e;
    return (0, l.jsx)(sx.Anchor, { className: sE.zh, href: t, children: W.intl.string(W.t["8/GdRB"]) });
}
function s_(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sg.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, l.jsx)(sI, { classificationId: n });
        case sg.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, l.jsx)(sC, { learnMoreLink: i });
        default:
            return null;
    }
}
function sv(e) {
    let { iconType: t } = e,
        n = {
            default: (0, l.jsx)(e4.k, { size: "xs", color: nH.A.colors.TEXT_LINK.css }),
            danger: (0, l.jsx)(sm.WarningIcon, { color: nH.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, l.jsx)("div", { className: sE.Kk, children: n[t] }) : null;
}
function sN(e) {
    let { children: t, theme: n } = e,
        i = { default: sE._y, danger: sE.yk };
    return (0, l.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sj(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sf.f4)(e.embed);
    return null == n
        ? null
        : (0, l.jsxs)(eD.D, {
              className: sE.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: sE.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: sE.U1,
                              children: [
                                  (0, l.jsx)(sv, { iconType: n.icon }),
                                  (0, l.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: sE.VU,
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: W.intl.format(W.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l9()().diff(l9().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: sE.vv,
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(sN, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, l.jsx)(
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
    sS = n(50777),
    sy = n(288254),
    sb = n(319060),
    sR = n(812282),
    sM = n(922016),
    sL = n(966245),
    sk = n(240248),
    sO = n(256449),
    sP = n(194004),
    sD = n(148355),
    sU = n(3026),
    sG = n(862482),
    sw = n(847374),
    sH = n(964486),
    sV = n(235986),
    sB = n(624793),
    sF = n(636537),
    sz = n(639245),
    sJ = n(87719),
    sK = n(725807),
    sY = n(750385),
    sW = n(850992),
    sX = n(625494),
    sZ = n(698279),
    sq = n(665055),
    sQ = n(844749);
function s$(e) {
    eJ.default.track(Y.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
        location_section: Y.JJy.STICKER_POPOUT,
    }),
        (0, sJ.e)();
}
function s0(e) {
    let { sticker: t, description: n } = e;
    return (0, l.jsxs)(sV.A, {
        children: [
            (0, l.jsx)(sD.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, l.jsxs)(sV.A, {
                direction: sV.A.Direction.VERTICAL,
                justify: sV.A.Justify.CENTER,
                className: sQ.bM,
                children: [
                    (0, l.jsx)(A.E, { variant: "text-md/semibold", children: (0, l.jsx)(sU.A, { children: t.name }) }),
                    null != n && (0, l.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function s1(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: a } = e,
        [r, o, c] = (0, d.yK)(
            [sY.A],
            () => [sY.A.getStickerPack(n.pack_id), !sY.A.hasLoadedStickerPacks, sY.A.isPremiumPack(n.pack_id)],
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
        })({ sticker: n, stickerPack: r });
    (0, sO.Sr)(n.pack_id);
    let m = (0, sO.pD)(i),
        h = { refreshPositionKey: a, channel: i },
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
        eJ.default.track(Y.HAw.OPEN_POPOUT, {
            type: Y.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nB.dI)(e),
        });
    }, [n.pack_id]),
    o || null == r)
        ? (0, l.jsx)(sL.Y0, { className: sq.v0 })
        : (0, l.jsxs)(sL.Uq, {
              className: sq.Bm,
              children: [
                  (0, l.jsx)(e8.D, { variant: "heading-md/semibold", children: n.name }),
                  (0, l.jsx)(A.E, {
                      variant: "text-sm/normal",
                      children: c
                          ? W.intl.format(W.t.auckXz, { stickerPackName: r.name })
                          : W.intl.format(W.t.OzB6e3, { stickerPackName: r.name }),
                  }),
                  (0, l.jsx)("ul", {
                      className: sq.pQ,
                      children: u.map((e) => (0, l.jsx)(sD.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                  }),
                  c &&
                      (0, l.jsx)("div", {
                          className: sq.j0,
                          children: (0, l.jsx)(
                              ep.$,
                              {
                                  variant: "secondary",
                                  size: "sm",
                                  text: W.intl.string(W.t.GPy3Ar),
                                  onClick: function () {
                                      null != r &&
                                          (c &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sX._.dispatchToLastSubscribed(Y.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sZ.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && sW.bM.setActiveCategoryIndex(i);
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
function s2(e) {
    let t,
        { sticker: n, channel: i, closePopout: a, refreshPositionKey: o } = e,
        [c, u] = s.useState(null),
        [m, h] = s.useState(!1),
        g = G.default.getCurrentUser(),
        p = t0.Ay.canUseCustomStickersEverywhere(g),
        x = (0, d.bG)([nY.A], () => nY.A.getGuild(n.guild_id)),
        f = null != x,
        [E, I] = s.useState(!1),
        [C, _] = s.useState(null),
        v = s.useMemo(
            () => ({
                page: null != i.guild_id ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
                section: Y.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: N } = s.useRef({ guild_id: i.getGuildId(), ...(0, nB.dI)(i) }),
        j = { stickerSourceGuild: x, refreshPositionKey: o },
        T = s.useRef(j);
    s.useEffect(() => {
        T.current = j;
    }),
        s.useEffect(() => {
            let { stickerSourceGuild: e } = T.current;
            !(async function () {
                if (null == e || e.features.has(Y.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    u(
                        await ((t = n.id),
                        sF.Bo.get({ url: Y.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ix.jE)(e.body) : null))
                            .catch(() => null)),
                    );
                }
                h(!0);
            })();
        }, [n.id, f]);
    let S = n.guild_id === i.getGuildId(),
        y = null != c,
        b = !1,
        R = "Custom Sticker Popout";
    p
        ? (t = f
              ? S
                  ? W.intl.string(W.t.fZ0DiG)
                  : W.intl.string(W.t["1f6D9m"])
              : y
                ? W.intl.string(W.t.yHmoR9)
                : W.intl.string(W.t.vZaScH))
        : f
          ? ((t = S ? W.intl.string(W.t.jNphpt) : W.intl.string(W.t.lyD5ZW)),
            (b = !0),
            (R = "Custom Sticker Popout (Upsell)"))
          : y
            ? ((t = W.intl.string(W.t.IuXYch)), (b = !0), (R = "Custom Sticker Popout (Upsell)"))
            : ((t = W.intl.format(W.t.hGWuxU, {
                  openPremiumSettings: () => {
                      s$(i), a();
                  },
              })),
              (R = "Custom Sticker Popout (Soft Upsell)"));
    let M = !b && !f && y && p;
    return (s.useEffect(() => {
        let { refreshPositionKey: e } = T.current;
        e();
    }, [m, c]),
    (0, sH.Ay)(() => {
        eJ.default.track(Y.HAw.OPEN_POPOUT, { type: R, ...N });
    }),
    m)
        ? (0, l.jsxs)(sL.Uq, {
              className: sQ.Bm,
              children: [
                  (function () {
                      async function e() {
                          if (null == c || f) return;
                          a();
                          let e = c.id;
                          try {
                              await ip.A.joinGuild(e), ip.A.transitionToGuildSync(e);
                          } catch {}
                      }
                      return (0, l.jsxs)("div", {
                          className: sQ.gH,
                          children: [
                              (0, l.jsx)(s0, { description: t, sticker: n }),
                              b &&
                                  (0, l.jsx)(sK.A, {
                                      className: sQ.lI,
                                      subscriptionTier: nM.pe.TIER_2,
                                      size: sG.$n.Sizes.SMALL,
                                      fullWidth: !0,
                                      textOptions: { textOverride: W.intl.string(W.t["gl/XHJ"]) },
                                      onSubscribeModalClose: (t) => (t ? e() : a()),
                                      postSuccessGuild: f || null == c ? void 0 : c,
                                      premiumModalAnalyticsLocation: v,
                                  }),
                              M &&
                                  (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: sQ.lI,
                                      children: (0, l.jsx)(ep.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: W.intl.string(W.t.riu2R5),
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
                              t = null != c ? sB.GO.createFromDiscoverableGuild(c) : sB.GO.createFromGuildRecord(x);
                          return (0, l.jsxs)("div", {
                              className: sQ.tl,
                              children: [
                                  (0, l.jsx)(A.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: sQ.YW,
                                      children: f ? W.intl.string(W.t.kx6pEG) : W.intl.string(W.t.pDE7Gb),
                                  }),
                                  (0, l.jsx)(sz.G7, {
                                      expressionSourceGuild: t,
                                      hasJoinedExpressionSourceGuild: f,
                                      isDisplayingJoinGuildButtonInPopout: M,
                                      closePopout: a,
                                  }),
                                  !f &&
                                      (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(eD.D, {
                                                  onClick: function () {
                                                      o(), I(!E);
                                                  },
                                                  className: sQ.wK,
                                                  children: (0, l.jsxs)(sV.A, {
                                                      children: [
                                                          (0, l.jsx)(A.E, {
                                                              className: sQ.__invalid_showMoreEmojisLabel,
                                                              variant: "text-xs/normal",
                                                              color: "none",
                                                              children: W.intl.string(W.t.vtH5hn),
                                                          }),
                                                          (0, l.jsx)(sw.a, {
                                                              size: "md",
                                                              color: "currentColor",
                                                              className: r()(sQ.ZB, { [sQ.cP]: !E }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              E &&
                                                  (0, l.jsx)(sV.A, {
                                                      wrap: sV.A.Wrap.WRAP,
                                                      align: sV.A.Align.START,
                                                      justify: sV.A.Justify.START,
                                                      className: sQ.LX,
                                                      children: e.map((e) =>
                                                          (0, l.jsx)(
                                                              tz.m,
                                                              {
                                                                  text: e.name,
                                                                  ...sL.Uk,
                                                                  children: (0, l.jsx)(
                                                                      "div",
                                                                      {
                                                                          className: r()(sQ.Th, {
                                                                              [sq.vT]: null != C && C !== e.id,
                                                                          }),
                                                                          onMouseEnter: () => {
                                                                              _(e.id);
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              _(null);
                                                                          },
                                                                          children: (0, l.jsx)(sD.A, {
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
        : (0, l.jsx)(sL.Y0, { className: sq.v0 });
}
function s3(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, l.jsx)(sL.Uq, {
        className: sq.Bm,
        children: (0, l.jsx)(s0, {
            sticker: i,
            description: W.intl.format(W.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), s$(t);
                },
            }),
        }),
    });
}
let s5 = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: s } = e,
        [a, r] = (0, sO.Zq)(t, !0);
    return null != a && (0, lW.FD)(a)
        ? (0, l.jsx)(s1, { sticker: a, closePopout: i, channel: n, refreshPositionKey: s })
        : null != a && (0, lW.Xw)(a)
          ? (0, l.jsx)(s2, { sticker: a, channel: n, closePopout: i, refreshPositionKey: s })
          : r
            ? (0, l.jsx)(s3, { channel: n, closePopout: i, sticker: t })
            : (0, l.jsx)(sL.Y0, {});
};
var s6 = n(751686);
let s7 = (0, sk.xI)(sb.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    s9 = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            a = s.useRef(null),
            [r, o] = s.useState(!0),
            [c, d] = s.useState(String(Date.now())),
            [u] = (0, sO.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, l.jsxs)("span", {
                className: s6.Zl,
                children: [(0, l.jsx)(sR.s, { size: "xs", color: "currentColor", className: s6.lA }), (u ?? t).name],
            });
        return (0, l.jsx)(f.f5, {
            value: m,
            children: (0, l.jsx)("div", {
                className: s6.be,
                children: (0, l.jsx)(sM.Y, {
                    align: "center",
                    animation: sM.Y.Animation.TRANSLATE,
                    positionKey: c,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, l.jsx)(s5, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => d(String(Date.now())),
                        }),
                    targetElementRef: a,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, l.jsx)(tz.m, {
                            ...sL.Uk,
                            shouldShow: r,
                            __unsupportedReactNodeAsText: (0, sL.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nB.Ay.trackWithMetadata(Y.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nM.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sP.Tw)(e.format_type),
                                        is_custom: (0, sP.zN)(e.type),
                                    });
                            },
                            children: (0, l.jsx)(eD.D, {
                                innerRef: a,
                                className: s6.q7,
                                onClick: (e) => {
                                    o(!r), n(e);
                                },
                                tag: "span",
                                children: (0, l.jsx)(sD.A, { isInteracting: i, size: s7, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var s4 = n(406704),
    s8 = n(531142),
    ae = n(140735),
    at = n(442433),
    an = n(143413),
    ai = n(935208),
    al = n(321045),
    as = n(456874),
    aa = n(707539),
    ar = n(80682),
    ao = n(521981),
    ac = n(308334),
    ad = n(943220),
    au = n(838541);
function am(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: a } = (0, d.cf)(
            [D.A],
            () => ({ isBlocked: D.A.isBlockedForMessage(t), isIgnored: D.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = s.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, ar.Eq)(r, "ThreadMessageAccessoryMessage");
    let o = s.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, ao.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        c = (0, sy.IL)(n);
    return (0, l.jsxs)("div", {
        className: si.up,
        children: [
            (0, l.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: si.FJ }),
            (0, l.jsx)(ad.A, { message: t, channel: n, compact: !0 }),
            (0, l.jsx)("div", {
                className: si.Au,
                children: c
                    ? (0, l.jsx)("span", { className: si.dp, children: W.intl.string(W.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: s,
                              renderedContent: a,
                              leadingIcon: r,
                              trailingIcon: o,
                          } = (0, ac.o)(e, t, n, i, si.tP, {
                              trailingIconClass: si._v,
                              leadingIconClass: si.a5,
                              iconSize: au.eJ,
                          });
                          return (0, l.jsxs)(l.Fragment, {
                              children: [r, a ?? (0, l.jsx)("span", { className: si.dp, children: s }), o],
                          });
                      })(t, o, i, a),
            }),
        ],
    });
}
var ah = n(747926),
    ag = n(650583),
    aA = n(77462);
function ap(e) {
    let { message: t, compact: n } = e,
        i = (0, d.bG)([P.A], () => P.A.getChannel(ai.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, l.jsx)(ax, { channel: i, compact: n, isSystemMessage: (0, an.A)(t) });
}
function ax(e) {
    var t;
    let i,
        s,
        a,
        { channel: o, compact: c, isSystemMessage: u } = e,
        m = (0, iu.Ay)(o),
        h = (0, d.bG)([as.A], () => as.A.getCount(o.id)),
        g =
            ((t = o),
            (i = (0, d.bG)([as.A], () => as.A.getMostRecentMessage(t.id))),
            (s = (0, d.bG)([as.A], () => as.A.getCount(t.id))),
            (a = (0, aa.JO)(t)),
            t.threadMetadata?.archived
                ? W.intl.string(W.t.ZTo4HS)
                : null == s || 0 === s
                  ? W.intl.string(W.t.HYtNyE)
                  : null == i
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("span", { children: W.intl.string(W.t.ZTo4HS) }),
                              (0, l.jsx)("span", { className: aA.vE, children: (0, aa.aK)(a) }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(am, { message: i, channel: t }),
                              (0, l.jsx)("span", { className: aA.vE, children: (0, aa.aK)(a) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: r()(aA.GI, { [aA.E]: !c, [aA.E_]: u }) }),
            (0, l.jsx)(eD.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, ah.JA)(o, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === ag.dh.SPACE || e.key === ag.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, ah.JA)(o, n));
                },
                onContextMenu: function (e) {
                    (0, at.L3)(e, async () => {
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
                        return (t) => (0, l.jsx)(e, { channel: o, ...t });
                    });
                },
                "aria-roledescription": W.intl.string(W.t["8ipxiY"]),
                className: r()(aA.kL, { [aA.og]: u }),
                children: (0, l.jsxs)(s8.R, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: aA.kq,
                            children: [
                                (0, l.jsx)(ae.A, { children: W.intl.string(W.t["7Xm5QI"]) }),
                                (0, l.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: aA.UU,
                                    children: m,
                                }),
                                (0, l.jsx)("span", {
                                    className: aA.lO,
                                    "aria-hidden": !p,
                                    children: (0, al.ub)(h, o.id),
                                }),
                            ],
                        }),
                        (0, l.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: aA.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var af = n(168543),
    aE = n(215530),
    aI = n(331322),
    aC = n(562153),
    a_ = n(249790),
    av = n(254828),
    aN = n(783123),
    aj = n(213994),
    aT = n(753504);
function aS(e) {
    let { userId: t, guildId: n, channelId: i, onReveal: s } = e,
        a = (0, d.bG)([G.default], () => G.default.getUser(t)),
        r = (0, d.bG)([D.A], () => D.A.isBlocked(t)),
        o = aC.Ay.useName(n, i, a);
    return null == a
        ? null
        : (0, l.jsx)(aj.A, {
              user: a,
              displayProfile: null,
              size: "sm",
              className: aT.k,
              headingText: W.intl.formatToPlainString(W.t["8yRya1"], { name: o }),
              children: (0, l.jsxs)(aI.B, {
                  align: "center",
                  gap: 16,
                  children: [
                      (0, l.jsxs)(aI.B, {
                          align: "center",
                          gap: 8,
                          children: [
                              (0, l.jsx)(a_.A, { user: a, guildId: n }),
                              (0, l.jsx)(e8.D, { variant: "heading-lg/bold", children: W.intl.string(W.t.b33pLD) }),
                              (0, l.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  children: W.intl.format(r ? W.t["8F+WNz"] : W.t["/cZp5s"], { username: o }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(aI.B, {
                          align: "center",
                          gap: 8,
                          children: [
                              (0, l.jsx)(aN.A, { isBlocked: r, onClick: s }),
                              (0, l.jsx)(av.A, { userId: t, onClick: s }),
                          ],
                      }),
                  ],
              }),
          });
}
var ay = n(273147);
function ab(e) {
    let { userId: t, guildId: n, channelId: i } = e,
        [a, r] = (0, aE.A)(t),
        o = s.useRef(!1),
        c = s.useCallback((e) => {
            null != e && o.current && ((o.current = !1), e.focus());
        }, []),
        d = s.useCallback(() => {
            (o.current = !0), r();
        }, [r]);
    return a
        ? (0, l.jsx)(aS, { userId: t, guildId: n, channelId: i, onReveal: d })
        : (0, l.jsx)(ay.G, { userId: t, guildId: n, channelId: i, headingRef: c });
}
class aR extends s.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nr.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function aM(e) {
    let { userId: t, guildId: n, channelId: i } = e;
    return (0, af.c)("UserProfileEmbed")
        ? (0, l.jsx)(aR, { children: (0, l.jsx)(ab, { userId: t, guildId: n, channelId: i }) })
        : null;
}
var aL = n(383233),
    ak = n(834942),
    aO = n(644447),
    aP = n(659674),
    aD = n(998218),
    aU = n(5095),
    aG = n(294520),
    aw = n(320095),
    aH = n(863439),
    aV = n(707985),
    aB = n(730852),
    aF = n(265422),
    az = n(986268);
function aJ(e) {
    let { guild: t, channel: n, message: i } = e,
        a = U.A.getGuildId(),
        r = ed.Ay.getChannelId(a),
        o = s.useCallback(() => {
            eJ.default.track(Y.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: a,
                channel_id: r,
            }),
                (0, aF.i)(t.id, n.id),
                aB.default.selectVoiceChannel(n.id);
        }, [i, t, n, a, r]),
        c = (0, l.jsx)(i7.A.Channel, { channel: n });
    return (0, l.jsx)(i7.A, {
        children: (0, l.jsxs)(i7.A.Body, {
            children: [
                (0, l.jsxs)("div", {
                    className: lh.iH,
                    children: [
                        (0, l.jsx)(i7.A.Icon, { guild: t }),
                        (0, l.jsx)(i7.A.Info, {
                            title: c,
                            onClick: o,
                            children: (0, l.jsxs)("span", {
                                className: lh.FA,
                                children: [
                                    W.intl.format(W.t["2wimj5"], { guildName: t.name }),
                                    (0, l.jsx)("span", {
                                        className: lh.E3,
                                        children: (0, l.jsx)(az.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: lh.UD,
                    children: (0, l.jsx)(ep.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? W.intl.string(W.t["7vb2cc"]) : W.intl.string(W.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function aK(e) {
    let { code: t, message: n } = e,
        [i, s] = t.split("/"),
        a = P.A.getChannel(s),
        r = nY.A.getGuild(i);
    return null != a && a.isGuildVocal() && null != r && tl.A.can(Y.xBc.VIEW_CHANNEL, a) && tl.A.can(Y.xBc.CONNECT, a)
        ? (0, l.jsx)(aJ, { guild: r, channel: a, message: n })
        : null;
}
var aY = n(789645),
    aW = n(298236),
    aX = n(953756),
    aZ = n(564107),
    aq = n(216763),
    aQ = n(359886);
function a$(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: s,
            getOnMediaItemContextMenu: a,
            shouldHideMediaOptions: o,
            enabledContentHarmTypeFlags: c,
            onSuppressEmbed: d,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, aX.zn)();
    return 0 === t.length
        ? null
        : (0, l.jsx)(aZ.N, {
              gifAutoPlay: i,
              getGifFavButton: s,
              getOnMediaItemContextMenu: a,
              shouldHideMediaOptions: o,
              enabledContentHarmTypeFlags: c,
              children: (0, l.jsx)(aW.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, l.jsx)(aX.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, l.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, l.jsx)(aX.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, l.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: r()(aq.O0, aQ.k, aQ.z, { [aq.dK]: u }),
                                      children: [
                                          null != d &&
                                              (0, l.jsx)(eD.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: aq.PP,
                                                  onClick: d,
                                                  "aria-label": W.intl.string(W.t.GT3fNz),
                                                  children: (0, l.jsx)(aY.P, { size: "xs", color: "currentColor" }),
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
var a0 = n(451988),
    a1 = n(261958),
    a2 = n(212245),
    a3 = n(775602),
    a5 = n(62583),
    a6 = n(956549),
    a7 = n(550151),
    a9 = n(392054),
    a4 = n(853390),
    a8 = n(290863),
    re = n(811024),
    rt = n(360469),
    rn = n(555375);
let ri = s.memo((e) => {
    let { start: t } = e,
        [n, i] = s.useState(0),
        l = (0, lU.j)(),
        a = (0, d.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
        r = !1 === l || a;
    return (
        s.useEffect(() => {
            let e = new a0.IX();
            return (
                e.start(r ? 15 * nE.A.Millis.SECOND : nE.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nE.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [r, t]),
        (0, a4.fU)(n)
    );
});
ri.displayName = "ActivityRuntimeCounter";
let rl = s.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: a, message: o } = e,
        { analyticsLocations: c } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        u = (0, a2.p)(),
        m = (0, d.bG)([P.A], () => P.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, d.bG)([O.default], () => O.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: E,
            activityLaunchState: I,
        } = (0, d.cf)(
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
        C = p?.userIds,
        _ = (0, d.yK)(
            [G.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(iz.Vq),
            [C],
        ),
        v = (0, d.bG)([a8.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = a8.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        N = v?.details,
        j = s.useMemo(() => {
            let e = new i9.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rt.Gl), e;
        }, [n]),
        T = (0, a7.vG)({ userId: g, channelId: i, application: j }),
        S = null == p,
        y = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return s.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            a = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? W.intl.string(W.t.RscU7I) : W.intl.string(W.t.sqe0hj),
                                tooltip: void 0,
                            },
                            r = (0, re.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...a, disabled: !0, text: W.intl.string(W.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...a, disabled: !r, tooltip: r ? void 0 : W.intl.string(W.t.f41E1g) };
                        if (null != n && n !== a7.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case a7.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = W.intl.string(W.t.hHGrWz);
                                    break;
                                case a7.Gy.ACTIVITY_AGE_GATED:
                                    e = W.intl.string(W.t["4WuFRE"]);
                                    break;
                                case a7.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = W.intl.string(W.t.uGDCcw);
                                    break;
                                case a7.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = W.intl.string(W.t.UXoQTp);
                                    break;
                                case a7.Gy.CHANNEL_FULL:
                                    e = W.intl.string(W.t.rZfiNq);
                                    break;
                                case a7.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = W.intl.string(W.t.w5SAps);
                                    break;
                                case a7.Gy.NO_CHANNEL:
                                case a7.Gy.NO_GUILD:
                                case a7.Gy.NO_USER:
                                case a7.Gy.IS_AFK_CHANNEL:
                                    e = W.intl.string(W.t.Etp6uI);
                            }
                            return { ...a, disabled: !0, tooltip: e };
                        }
                        return a;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: T, currentEmbeddedActivity: E, channel: m }),
        b = s.useId(),
        R = null != I && I.isLaunching && I.componentId === b;
    async function M() {
        eJ.default.track(Y.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: S,
            cta: "Play",
        }),
            S
                ? await (0, a6.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: u.location,
                      analyticsLocations: c,
                      componentId: b,
                      commandOrigin: a9.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, a5.A)({
                      applicationId: p.applicationId,
                      activityChannelId: i,
                      locationObject: u.location,
                      analyticsLocations: c,
                      componentId: b,
                  });
    }
    let L = y.disabled ? W.intl.string(W.t.JBnc7N) : W.intl.string(W.t.cX9uLZ),
        k = (0, ee.F)(j, () => {
            eJ.default.track(Y.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        D = w.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    y.disabled && (t = y.tooltip);
    let U = _.length,
        H = v?.timestamps?.start ?? v?.created_at,
        V = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case Y.$pd.STREAMING:
                    return { text: W.intl.formatToPlainString(W.t.tyCw2q, { count: n }), Icon: F.o };
                case Y.$pd.LISTENING:
                    return { text: W.intl.formatToPlainString(W.t["2l8yka"], { count: n }), Icon: z.T };
                default:
                    return { text: W.intl.formatToPlainString(W.t.yJj035, { count: n }), Icon: J.GameControllerIcon };
            }
        })({ activity: v, activityUsersCount: U }),
        K = [
            {
                label: y.text,
                trackingArea: q.kY.PLAY,
                onClick: M,
                disabled: y.disabled,
                disabledReason: t,
                submitting: R,
            },
        ];
    return (0, l.jsx)(B.h, {
        header: W.intl.string(W.t.pkq6Vq),
        title: n.name,
        iconSrc: D,
        info: (0, l.jsx)("div", {
            className: rn.QR,
            children: S
                ? (0, l.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: L })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != N &&
                              (0, l.jsxs)("div", {
                                  className: rn.oL,
                                  children: [
                                      null != H &&
                                          (0, l.jsxs)("div", {
                                              className: rn.DT,
                                              children: [
                                                  (0, l.jsx)("div", {
                                                      className: rn.y9,
                                                      children: (0, l.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, l.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, l.jsx)(ri, { start: H }),
                                                  }),
                                              ],
                                          }),
                                      (0, l.jsxs)("div", {
                                          className: r()(rn.DT, rn.PK),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  children: (0, l.jsx)(a1.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, l.jsx)(A.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: N,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          U > 0 && (0, l.jsx)(Z, { activityUsers: _, guildId: a, activityText: V.text }),
                      ],
                  }),
        }),
        actions: K,
        onClickContent: k,
        trackingConfig: {
            id: n.id,
            linkType: et.J.ACTIVITY_INSTANCE,
            guildId: a,
            channelId: i,
            messageId: o.id,
            isDeadEnd: S,
        },
    });
});
var rs = n(164664),
    ra = n(439401),
    rr = n(657044),
    ro = n(863574),
    rc = n(707606),
    rd = n(456412),
    ru = n(429913),
    rm = n(242874),
    rh = n(499454),
    rg = n(165191),
    rA = n(928550),
    rp = n(976860),
    rx = n(871123),
    rf = n(317560),
    rE = n(30793),
    rI = n(189081);
function rC(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, l.jsx)("svg", {
        ...(0, lo.A)(i),
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
var r_ = n(738533),
    rv = n(45938),
    rN = n(615396),
    rj = n(427262),
    rT = n(561028),
    rS = n(820284),
    ry = n(674378),
    rb = n(598429),
    rR = n(979604);
function rM(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: s,
            disabledVariant: a,
            hideNotLaunchable: r,
            tooltipPosition: o,
            onClick: c,
            className: u,
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
            className: u,
            hover: h,
            innerClassName: g,
        },
        p = (0, d.bG)([rI.A], () => rI.A.getActiveLibraryApplication(t.id)),
        x = null != p ? p.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, d.bG)([eF.A], () => null != f && !eF.A.didFetchingSkuFail(f));
    return null != p && (0, ry.XZ)(p)
        ? (0, l.jsx)(rR.A, { ...A, playButtonVariant: s, libraryApplication: p, source: m })
        : E
          ? (0, l.jsx)("div", { children: "deprecated!" })
          : (0, l.jsx)(rb.A, { ...A, variant: s, hideNotLaunchable: r, applicationId: t.id });
}
function rL(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return W.intl.string(W.t.RWouSQ);
    if (e.premium && !n) return W.intl.string(W.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t1.$g)(i.amount, i.currency);
        else return W.intl.string(W.t.QQsaCc);
    return W.intl.string(W.t.RWouSQ);
}
var rk = n(176140),
    rO =
        (((i = rO || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
function rP(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(rk.nM, t),
        children: [
            (0, l.jsx)(rr._, { size: "md", color: "currentColor", className: rk.Kk }),
            W.intl.string(W.t["7eicAO"]),
        ],
    });
}
function rD(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(rk.nM, n),
        children: [(0, l.jsx)(tf.t, { size: "md", color: "currentColor", className: rk.Kk }), rL(t)],
    });
}
function rU(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(rk.EQ, n), children: t.getDisplaySalePercentage() });
}
function rG(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(rk.I8, n), children: rL(t, !1) });
}
function rw(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: n, children: rL(t) });
}
function rH(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(rk.nM, n),
        children: [(0, l.jsx)(rU, { sku: t }), (0, l.jsx)(rG, { sku: t }), (0, l.jsx)(rw, { sku: t })],
    });
}
function rV(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: t, children: W.intl.string(W.t.QQsaCc) });
}
class rB extends s.PureComponent {
    static Types = rO;
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
                return (0, l.jsx)(rV, { className: r()(t, n) });
            case 1:
                return (0, l.jsx)(rP, { className: r()(t, n) });
            case 3:
                return (0, l.jsx)(rD, { sku: i, className: r()(t, n) });
            case 2:
                return (0, l.jsx)(rH, { sku: i, className: r()(t, n) });
            default:
                return (0, l.jsx)(rw, { className: r()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(rV, { className: t });
            case 3:
                return (0, l.jsx)(rD, { sku: n, className: r()(rk.OB, t) });
            case 2:
                return (0, l.jsx)(rH, { sku: n, className: r()(rk.dk, t) });
            default:
                return (0, l.jsx)(rw, { className: r()(rk.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(rV, {});
                break;
            case 2:
                t = (0, l.jsxs)(s.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: rk.nM,
                            children: [(0, l.jsx)(rw, { sku: i }), (0, l.jsx)(rU, { sku: i })],
                        }),
                        (0, l.jsx)(rG, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(rw, { sku: i });
        }
        return (0, l.jsx)("div", { className: r()(rk.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rk.Pl);
            case 3:
                return this.renderGeneric(e, rk.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rk.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var rF = n(301568);
let rz = {
    [Y.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, lo.A)(a),
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
        getLabel: () => W.intl.string(W.t["0/xHFO"]),
    },
    [Y.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, lo.A)(a),
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
        getLabel: () => W.intl.string(W.t.E4u4n5),
    },
    [Y.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, lo.A)(a),
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
        getLabel: () => W.intl.string(W.t.tcawo3),
    },
};
function rJ(e) {
    let { operatingSystem: t, className: n } = e,
        i = rz[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let s = i.icon;
    return (0, l.jsx)(tz.m, { text: i.getLabel(), children: (0, l.jsx)(s, { className: n }) });
}
function rK(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, l.jsx)("div", {
        className: r()(rF.I, n),
        children: t.map((e) => (0, l.jsx)(rJ, { operatingSystem: e, className: r()(rF.A, i) }, e)),
    });
}
var rY = n(198985);
let rW = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: r()(rY.T, t),
        children: (0, l.jsx)("span", { className: rY.Q, children: W.intl.string(W.t["14lP0W"]) }),
    });
};
var rX = n(992856);
let rZ = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: r()(rX.T, t),
        children: (0, l.jsx)("span", { className: rX.Q, children: W.intl.string(W.t["8IfYqa"]) }),
    });
};
var rq = n(615300),
    rQ = n(868285),
    r$ = n(358618),
    r0 = n(983851),
    r1 = n(133296),
    r2 = n(607470),
    r3 = n(856328);
class r5 extends s.Component {
    _animatedValue = new rq.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), rq.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        rq.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, l.jsx)(rq.A.img, {
            className: r()({ [r3.YC]: i }, t),
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
            ? (0, l.jsx)(rq.A.div, { className: r()(r3.gn, e), style: this.getImageStyle(), children: t })
            : (0, l.jsxs)(rq.A.div, {
                  className: r()(s ? r3.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      s
                          ? (0, l.jsx)(tK.y, {
                                className: r3.u1,
                                itemClassName: r3.$N,
                                type: tK.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class r6 extends s.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = s.createRef();
    videoTimeout = new a0.Ep();
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
                playing: a,
                muted: o,
                splashClassName: c,
                splashPlaceholderClassName: d,
                renderMediaOverlay: u,
            } = this.props,
            m = o ? r$._ : r0.H;
        return (0, l.jsxs)(s.Fragment, {
            children: [
                i5.Fr
                    ? null
                    : (0, l.jsx)(r2.A, {
                          className: r()(r3.Yi, c),
                          muted: o,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, l.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, l.jsx)(rQ.F, {
                    children: a && e ? null : (0, l.jsx)(r5, { className: r()(r3.NB, d), src: n, title: i }, 0),
                }),
                (0, l.jsx)(eD.D, {
                    className: r()(r3.b4, { [r3.HY]: a && e, [r3.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: a && e ? (0, l.jsx)(m, { className: r3.i2 }) : null,
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
            { currentIndex: a } = this.state;
        return i
            ? (0, l.jsx)(r5, { className: r()(r3.Yi, s), src: e[a], title: n }, a)
            : (0, l.jsx)(r5, { className: r()(r3.Yi, s), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: s } = this.props;
        return null == t
            ? (0, l.jsx)(r5, { className: r()(r3.Yi, s), src: n, title: i }, "image")
            : (0, l.jsx)(r1.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: r3.mZ,
                  disable: !e,
                  children: (0, l.jsx)(rQ.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: s } = this.props,
            { videoLoadError: a, videoLoaded: o } = this.state;
        return n
            ? (0, l.jsx)("div", { className: t })
            : (0, l.jsxs)("figure", {
                  className: r()(r3.__invalid_tileMedia, t),
                  children: [null == e || a ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(s && o)],
              });
    }
}
var r7 = n(366523),
    r9 = n(371794),
    r4 = n(622413),
    r8 = n(435919);
class oe extends s.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: s } = this.props,
            a = (s || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, l.jsxs)("div", {
                  className: r8.ED,
                  children: [
                      (0, l.jsx)(rB, {
                          type: rB.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: a && i ? r8.ae : r8.Ek,
                      }),
                      (0, l.jsx)(rK, { systems: [Y.uje.WINDOWS], className: r8.iD }),
                      a ? (0, l.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: i,
            sku: a,
            isHorizontal: o,
            storeListing: c,
        } = this.props;
        return (0, rx.bF)(a)
            ? (0, l.jsx)(r7.e, {
                  sku: a,
                  shape: "custom",
                  containerClassName: r8.A$,
                  backgroundImageClassName: r8.iZ,
                  foregroundImageClassName: r8.O7,
              })
            : (0, l.jsxs)(s.Fragment, {
                  children: [
                      (0, l.jsx)(r6, {
                          className: r()(r8.H1, { [r8.ZC]: o }),
                          video: null != c.previewVideo ? (0, r9.YE)(a.applicationId, c.previewVideo) : void 0,
                          image: null != c.thumbnail ? (0, r9.YE)(a.applicationId, c.thumbnail, 600) : void 0,
                          title: a.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: r8.ZI,
                          splashPlaceholderClassName: r8.NB,
                      }),
                      a.exclusive
                          ? (0, l.jsx)(rZ, { className: r()(r8.LJ, { [r8.V9]: e }) })
                          : a.isTheGameAwardsWinner
                            ? (0, l.jsx)(rW, { className: r()(r8.LJ, { [r8.V9]: e }) })
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
                renderCustomTitle: a,
                renderCustomMedia: r,
                isEmbed: o,
            } = this.props,
            c = o ? ro.ug : r4.A;
        return (0, l.jsx)(c, {
            className: i,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != a ? a : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ot = n(587895),
    on = n(976150);
class oi extends s.Component {
    static defaultProps = { renderFallback: Y.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : Y.JJy.APPLICATION_EMBED, object: Y.ZSU.CARD };
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
        return (0, l.jsx)("div", {
            className: on.h,
            children: (0, l.jsx)(ep.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: W.intl.string(W.t["W+NB90"]),
                onClick: () => {
                    (0, rp.pX)(Y.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: s, renderCustomTagline: a, renderCustomMedia: r } = this.props,
            { playing: o, muted: c } = this.state,
            d = i > ro.Tm;
        return (0, l.jsx)(oe, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: c,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: s,
            renderCustomTagline: a,
            renderCustomMedia: r,
            isHorizontal: d,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: s, renderCustomActions: a } = this.props;
        if (null != a) return (0, l.jsx)("div", { className: on.i, children: a() });
        if (null == n) return null;
        let r = null != n && n.primarySkuId === i,
            o = null != s && s.hasFlag(Y.hM6.HIDDEN);
        return (0, l.jsxs)("div", {
            className: on.i,
            children: [
                !r || o
                    ? this.renderViewInStoreButton()
                    : (0, l.jsx)(rM, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: on.h,
                          source: Y.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, l.jsx)(rB, { type: rB.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: s } = this.props,
            a = n > ro.Tm;
        return null == e || null == t
            ? i
                ? s()
                : (0, l.jsx)(ro.Wb, { isHorizontal: a })
            : e.productLine === Y.EZt.PREMIUM
              ? (0, l.jsx)(rS.A, {
                    section: Y.JJy.APPLICATION_EMBED,
                    children: (0, l.jsx)(rT.N_, {
                        onClick: this.handleLinkClick,
                        to: Y.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, l.jsx)(rS.A, { section: Y.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let ol = [eF.A, rI.A, ez.A];
function os(e) {
    let { skuId: t } = e,
        n = eF.A.get(t),
        i = null != n ? ot.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eF.A.didFetchingSkuFail(t),
        inLibrary: null != n && rI.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? ez.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rI.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let oa = (0, rd.A)((0, rc.A)(oi)),
    or = d.Ay.connectStores(ol, os)(oa),
    oo = (0, rc.A)(d.Ay.connectStores(ol, os)(oi));
var oc = n(866022);
function od(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, l.jsxs)(eD.D, {
        className: oc.kP,
        onClick: t,
        children: [
            (0, l.jsx)(rr._, { size: "md", color: "currentColor", className: oc.dy }),
            (0, l.jsx)("div", { children: n.isHidden() ? W.intl.string(W.t.Wi99Ro) : W.intl.string(W.t["+tXad7"]) }),
        ],
    });
}
class ou extends s.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= ro.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === Y.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, e_.openUserSettings)(eC.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? W.intl.string(W.t.mT9B49) : W.intl.string(W.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, l.jsx)(ep.$, {
                  variant: "primary",
                  size: "sm",
                  text: W.intl.string(W.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, l.jsx)(ep.$, { variant: "primary", size: "sm", text: W.intl.string(W.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? W.intl.string(W.t.QXgO5w)
            : this.props.isSelfGift
              ? W.intl.string(W.t.eEM3dq)
              : W.intl.string(W.t.tB8S6u);
    render() {
        return (0, l.jsx)(ro.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class om extends s.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: Y.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, rp.pX)(Y.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rp.pX)(Y.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, e_.openUserSettings)(eC.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eJ.default.track(Y.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: Y.ZSU.BUTTON_CTA },
            });
        let a = l !== Y.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rh.h)({ processedCode: n, channelContext: t, customGiftMessage: a, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eJ.default.track(Y.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            r_.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rx.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, rf.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, e_.openUserSettings)(eC.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(Y.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, l.jsxs)(sV.A, {
            justify: sV.A.Justify.BETWEEN,
            children: [
                (0, l.jsxs)(sV.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, l.jsx)(od, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, l.jsxs)(sV.A, {
                    align: sV.A.Align.END,
                    justify: sV.A.Justify.END,
                    className: oc.yu,
                    direction: sV.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, l.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, l.jsx)("div", {
                                  children: W.intl.format(W.t.nZBvUR, { hours: e.expiresAt.diff(l9()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? W.t["4iHwKT"] : W.t.YeLq88;
        return W.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: s } = this.props;
        if (s)
            return (0, l.jsx)("div", {
                children: (0, l.jsx)(ep.$, {
                    variant: "primary",
                    size: "sm",
                    text: W.intl.string(W.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, t0.TW)(n)),
            r = e.redeemed || a || e.isClaimed || !n.verified,
            o = e.redeemed
                ? W.intl.string(W.t.BTihou)
                : null != e.giftStyle
                  ? W.intl.string(W.t.TiZFqX)
                  : W.intl.string(W.t.bUvv1f);
        return (0, l.jsx)("div", {
            className: (0, t7.hU)(e) ? oc.UQ : void 0,
            children: (0, l.jsx)(ep.$, {
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
        return e === Y.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? W.intl.formatToPlainString(W.t.t1SOId, { recipientDisplayName: rj.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? W.intl.string(W.t["2PJ1NP"])
                    : W.intl.string(W.t.hrnGng)
                : n
                  ? W.intl.string(W.t.QLEMld)
                  : W.intl.string(W.t.W4DBcy);
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
        if (null == i) return W.intl.string(W.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rx.bF)(i) ? this.props.content : void 0;
        let r = i.isPreorder() ? W.intl.formatToPlainString(W.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t7.hU)(e) || (0, rx.bF)(i)
                ? W.intl.string(W.t.mVC3Cv)
                : W.intl.format(W.t["ss/L+/"], { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return W.intl.format(W.t.UdXO8P, { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return W.intl.string(W.t.ARWFQX);
        if (!a.verified) return W.intl.format(W.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? W.intl.string(W.t["lQI+cB"])
                : W.intl.formatToPlainString(W.t["A+etHx"], { skuName: r });
        if (e.isExistingPremiumSubscriptionDisallowed) return W.intl.string(W.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? W.intl.format(W.t.l3VxgG, { username: rj.Ay.getUserTag(l), maxUses: e.maxUses, skuName: r })
                    : W.intl.format(W.t["9cYrw5"], {
                          username: rj.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: r,
                      })
                : e.isSubscription
                  ? W.intl.formatToPlainString(W.t.svrO3W, { maxUses: e.maxUses, skuName: r })
                  : W.intl.formatToPlainString(W.t["3AgAn3"], { totalCopies: e.maxUses, skuName: r });
        if (e.isSubscription) {
            if (null == s) return W.intl.string(W.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nM.WT.MONTH ? W.t["/RDIEA"] : W.t["3CX6Ev"];
                return W.intl.format(e, { username: rj.Ay.getUserTag(l), skuName: r, intervalCount: s.intervalCount });
            }
            let e = s.interval === nM.WT.MONTH ? W.t["2O4lo5"] : W.t["+XjmsR"];
            return W.intl.format(e, { skuName: r, intervalCount: s.intervalCount });
        }
        return null != l ? W.intl.format(W.t["3HsdQ/"], { username: rj.Ay.getUserTag(l) }) : W.intl.string(W.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nM.Wx.includes(e.giftStyle),
            i = r()(oc.gB, { [oc.El]: n, [oc.by]: t >= ro.Tm }),
            s = r()({ [oc.gc]: n, [oc.Ei]: n && t >= ro.Tm, [oc.ww]: !n, [oc.wy]: !n && t >= ro.Tm });
        return (0, l.jsxs)("div", {
            className: i,
            children: [
                n && (0, l.jsx)(rC, { className: oc.nr }),
                null != e.giftStyle &&
                    (0, l.jsx)(rg.A, {
                        defaultAnimationState: e.redeemed ? rm.oA.LOOP : rm.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: s,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, l.jsx)(ep.$, {
            variant: "primary",
            size: "sm",
            text: W.intl.string(W.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rx.bF)(n);
        return (0, l.jsx)(oo, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: Y.JJy.GIFT_CODE_EMBED,
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
            return (0, l.jsx)(oo, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: Y.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => W.intl.string(W.t.X4p5uH),
                renderCustomTagline: () => W.intl.string(W.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, l.jsx)(ou, { isSelfGift: s, width: i, resolveErrorCode: n });
            else return (0, l.jsx)(ro.Wb, { isHorizontal: i >= ro.Tm });
        return (0, t7.hU)(e)
            ? (0, l.jsx)("div", { className: oc.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let oh = (0, rd.A)((0, rc.A)(om)),
    og = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: s,
                resolveErrorCode: a,
            } = (0, d.cf)([rE.A], () => {
                let e = rE.A.getError(t);
                return { giftCode: rE.A.get(t), resolved: rE.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            r = (0, d.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, d.bG)([eF.A], () => (null != i ? eF.A.get(i.skuId) : null)),
            c = (0, d.bG)([rI.A], () =>
                null != o && i?.entitlementBranches != null ? rv.YI(i.entitlementBranches, o, rI.A) : null,
            ),
            u = (0, ru.h)(o?.applicationId),
            m = null != o && (0, rx.bF)(o) && i?.redeemed === !0,
            [h] = (0, rA.L_)(m ? u?.id : null),
            g = (0, rN.zz)(i?.subscriptionPlanId),
            A = (0, d.bG)([O.default], () => (null != i ? O.default.getId() === i.userId : O.default.getId() === n.id));
        return (0, l.jsx)(oh, {
            ...e,
            skuApplication: u,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: s,
            resolveErrorCode: a,
            gifter: r,
            libraryApplication: c,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: A,
        });
    };
var oA = n(376728),
    op = n(107123),
    ox = n(698441),
    of = n(427080),
    oE = n(346542),
    oI = n(665066),
    oC = n(95701),
    o_ = n(299091),
    ov = n(149790);
let oN = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oj(e) {
    let { guildId: t, location: n } = e;
    return oN.getCurrentConfig({ guildId: t, location: n });
}
function oT() {
    return (0, l.jsxs)(i7.A, {
        children: [
            (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t["N/g9Z4"]) }),
            (0, l.jsx)(i7.A.Body, { resolving: !0 }),
        ],
    });
}
var oS = n(172799),
    oy = n(624394);
function ob(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, l.jsxs)(
                    "div",
                    {
                        className: oy.MY,
                        children: [
                            (0, l.jsx)("i", { className: oy.QD }),
                            (0, l.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oy.U9,
                                color: i,
                                children: W.intl.format(W.t["LC+S+m"], { membersOnline: n }),
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
                        className: oy.MY,
                        children: [
                            (0, l.jsx)("i", { className: oy.o6 }),
                            (0, l.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: oy.U9,
                                color: i,
                                children: W.intl.format(W.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, l.jsx)("div", { className: oy.rc, children: s })
    );
}
function oR(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: s } = e,
        a = (0, iu.Ay)(t);
    if (null != t && null != n) {
        let e = (0, n8.gU)(t, n);
        return (0, l.jsxs)("div", {
            className: r()(oy.Ix, { [oy.v6]: i }),
            children: [
                null != e ? (0, l.jsx)(e, { className: oy.p, size: "xs", color: "currentColor" }) : null,
                (0, l.jsx)(sU.A, {
                    children: (0, l.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: s,
                        children: W.intl.format(W.t["dc+LW4"], { channelName: a ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, l.jsx)("div", {
              className: r()(oy.Ix, { [oy.v6]: i }),
              children: (0, l.jsx)(sU.A, {
                  children: (0, l.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: s,
                      children: W.intl.format(W.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oM(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: s, target_application: a } = t;
    ey()(s === oS.yV.EMBEDDED_APPLICATION && null != a, "invalid application invite");
    let r = t.channel?.id,
        o = (0, d.bG)([P.A], () => P.A.getChannel(r), [r]);
    return null == o
        ? null
        : (0, l.jsx)(e5.O, {
              applicationId: a.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, l.jsx)(oL, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oL(e) {
    let t,
        n,
        { invite: i, message: a, getAcceptInviteContext: r, application: o, channel: c } = e,
        { approximate_member_count: u, approximate_presence_count: m, target_application: h } = i;
    ey()(null != h, "invalid application invite");
    let g = s.useCallback(() => {
            eJ.default.track(Y.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        A = (0, d.bG)([nY.A], () => (null != i.guild ? nY.A.getGuild(i.guild.id) : null), [i]),
        p = (0, d.bG)(
            [eu.Ay],
            () => i?.channel != null && eu.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        E = (0, d.bG)([eu.Ay], () =>
            (i.channel?.id != null ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        I = (0, d.bG)([tl.A], () => null != c && tl.A.can(Y.xBc.USE_EMBEDDED_ACTIVITIES, c), [c]),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED),
        _ = (0, d.yK)(
            [eu.Ay],
            () =>
                null != c
                    ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(c.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [c, h.id],
        ),
        v = (0, d.yK)([G.default], () => _.map((e) => G.default.getUser(e)).filter((e) => null != e), [_]),
        N = s.useCallback(() => {
            (0, oA.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: a.author.id,
                    invite_message_id: a.id,
                    invite_instance_id: (0, lA._U)(i.code, a.id),
                },
                C,
            ),
                oA.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: r("Invite Button Embed", i.code),
                    analyticsLocations: C,
                });
        }, [i, a, C, r]),
        j = i.state === Y.elq.ACCEPTING,
        T = null != A;
    if (null == A) {
        if (null == i.guild) return (0, l.jsx)(oT, {});
        A = (0, ov.DY)(i.guild);
    }
    t = T
        ? p
            ? W.intl.string(W.t.DPfdsq)
            : E
              ? W.intl.string(W.t.sqe0hj)
              : W.intl.string(W.t.RscU7I)
        : W.intl.string(W.t["2BP08E"]);
    let S = (T && !I) || (T && p);
    return (I || (n = W.intl.string(W.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, l.jsx)(f.f5, {
              value: C,
              children: (0, l.jsx)(ok, {
                  app: o,
                  activityUsers: v,
                  isMember: T,
                  channel: c,
                  guild: A,
                  message: a,
                  members: u,
                  membersOnline: m,
                  isActivityActive: E,
                  submitting: j,
                  buttonLabel: t,
                  disabled: S,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: g,
              }),
          });
}
function ok(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: a,
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
        I = w.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        C = (0, ee.F)(t),
        _ = (0, $.f)(t),
        v = n.length,
        N = s.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? q.kY.PLAY : q.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != A ? A : void 0,
                    onClick: p,
                },
            ],
            [h, i, m, g, A, p],
        );
    return (0, l.jsx)(B.h, {
        header: t.name,
        title: W.intl.string(W.t["7vb6nw"]),
        iconSrc: I,
        ..._,
        onClickBanner: C,
        info: (0, l.jsxs)("div", {
            className: oy.QR,
            children: [
                (0, l.jsx)(oR, { channel: a, guild: r, hasEnded: !u, textColor: "none" }),
                i
                    ? v > 0 &&
                      (0, l.jsx)(Z, {
                          activityUsers: n,
                          guildId: r.id,
                          activityText: W.intl.formatToPlainString(W.t.yJj035, { count: v }),
                      })
                    : (0, l.jsx)(ob, { members: c, membersOnline: d, textColor: "none" }),
            ],
        }),
        actions: N,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: et.J.ACTIVITY_INVITE,
            onView: x,
            guildId: r.id,
            channelId: a?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var oO = n(4274);
function oP(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, d.bG)([O.default], () => O.default.getId()) === t.id
                ? W.intl.string(W.t.C89OLE)
                : W.intl.string(W.t.YVub5y),
        s = (0, oO.g)(n?.code);
    return (0, l.jsxs)(i7.A, {
        children: [
            (0, l.jsx)(i7.A.Header, { text: i }),
            (0, l.jsxs)(i7.A.Body, {
                children: [
                    (0, l.jsx)(i7.A.Icon, { expired: !0 }),
                    (0, l.jsx)(i7.A.Info, {
                        expired: !0,
                        title: s?.title ?? W.intl.string(W.t["Jhx/ud"]),
                        children: s?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var oD = n(308528),
    oU = n(889227);
function oG(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        r = t.inviter?.id === a,
        o = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: c } = (0, f.Ay)(x.A.INVITE_EMBED),
        u = (0, d.bG)([D.A], () => null != t.inviter && D.A.isFriend(t.inviter?.id)),
        m = s.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != P.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), oD.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, oA.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lA._U)(t.code, n.id),
                    },
                    c,
                );
        }, [t, n, c]),
        h = s.useCallback(() => {
            (0, oA.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lA._U)(t.code, n.id),
                },
                c,
            );
            let e = i("Invite Button Embed", t.code);
            oA.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, c, i]);
    if (null == t.inviter) return null;
    let g = u ? m : h,
        A = W.intl.string(W.t.ib7Ng1),
        p = "active";
    u
        ? ((A = W.intl.string(W.t.xhxnPn)), (p = "secondary"))
        : r && ((A = W.intl.string(W.t.ib7Ng1)), (p = "secondary"));
    let E = r ? W.intl.string(W.t.eQyu1F) : W.intl.string(W.t.PYJHW6),
        I = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? rj.Ay.getUserTag(t.inviter) : "";
    return (0, l.jsxs)(i7.A, {
        children: [
            (0, l.jsx)(i7.A.Header, { text: E }),
            (0, l.jsxs)(i7.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: lh.iH,
                        children: [
                            (0, l.jsx)(i7.A.Icon, { user: new oU.A(t.inviter), onClick: u ? g : void 0 }),
                            (0, l.jsx)(i7.A.Info, { title: I, onClick: u ? g : void 0, children: C }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: g, text: A, loading: o, disabled: r, variant: p }),
                ],
            }),
        ],
    });
}
var ow = n(342952);
function oH(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: r } = e,
        o = i === n.author.id,
        c = t.state === Y.elq.ACCEPTING,
        u = (0, d.bG)([P.A], () => (null != t.channel ? P.A.getChannel(t.channel.id) : null), [t]);
    ey()(null == u || u.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = null != u,
        g = s.useRef(null),
        p = s.useCallback(() => {
            let e = "noop";
            h ? (a(), (e = "transition")) : (r(), (e = "accept")),
                (0, oA.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lA._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, h, a, r]),
        E = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, oC.OY)(e.channel),
                    i = (0, iu.Bi)(t);
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
                let e = (0, iu.Bi)(t),
                    i = G.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, u ?? null);
    if (null == E) return (0, l.jsx)(oT, {});
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
                                    let t = D.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof oU.A ? e : G.default.getUser(e.id);
                                    if (null != n) {
                                        let e = rj.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? W.intl.string(W.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? W.intl.formatToPlainString(W.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? W.intl.formatToPlainString(W.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
                                : W.intl.formatToPlainString(W.t.m5uYso, { first: i[0], second: i[1] }),
                r = W.intl.string(W.t.gVDdRn),
                o = "active";
            return (
                n && ((r = W.intl.string(W.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: a,
                    headerText: t ? W.intl.string(W.t.Fyamu8) : W.intl.string(W.t["2tr5Qz"]),
                    buttonText: r,
                    buttonVariant: o,
                }
            );
        })(E, o, h),
        { channel: N, recipients: j } = E,
        T = j.map((e) =>
            e instanceof oU.A
                ? e
                : (G.default.getUser(e.id) ?? new oU.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        S = null != N.icon,
        y = W.intl.format(W.t.zRl6XR, { count: j.length });
    return (0, l.jsxs)(i7.A, {
        className: lh.TV,
        children: [
            (0, l.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: lh.JO,
                lineClamp: 1,
                children: C,
            }),
            (0, l.jsxs)(i7.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: `${lh.iH} ${lh.mx}`,
                        children: [
                            S &&
                                (0, l.jsx)(i7.A.Icon, {
                                    channel: N,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tI._3.SIZE_48,
                                }),
                            (0, l.jsx)(i7.A.Info, {
                                title: (0, l.jsx)(sU.A, { children: I }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, l.jsx)("div", {
                                    className: lh.er,
                                    children:
                                        T.length > 0
                                            ? (0, l.jsx)(eD.D, {
                                                  className: lh.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: y,
                                              })
                                            : y,
                                }),
                            }),
                            T.length > 0 &&
                                (0, l.jsx)(ow.A, {
                                    ref: g,
                                    className: lh.t2,
                                    users: T,
                                    maxUsers: 3,
                                    size: tI._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: lh.BV,
                                }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: p, loading: c, disabled: h, variant: v, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var oV = n(821418),
    oB = n(340837);
let oF = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, oB.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, oV.Q.IS_GUEST_INVITE)
    );
};
var oz = n(517905);
function oJ(e) {
    let t,
        i,
        a,
        {
            onTransitionToInviteChannel: r,
            onAcceptInstantInvite: o,
            guild: u,
            invite: m,
            message: g,
            currentUserId: p,
        } = e,
        E = p === g.author.id,
        { channel: I, approximate_member_count: C, approximate_presence_count: _ } = m,
        v = m.state === Y.elq.ACCEPTING,
        N = null != I ? (0, oC.OY)(I) : null,
        j = null != u,
        T = null != N,
        S = null != N && N.isGuildStageVoice(),
        y = (0, c.Lt)(m.flags ?? 0, oV.Q.IS_GUEST_INVITE),
        b = N?.isGuildVoiceOrThread() ?? !1,
        R = u?.features.has(Y.GuildFeatures.HUB) ?? !1,
        M = u?.id,
        { analyticsLocations: L } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e7.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: I?.id,
            invite_instance_id: (0, lA._U)(m.code, g.id),
            invite_channel_type: I?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [k, O] = s.useState(!1),
        P = s.useCallback(() => O(!1), []),
        D = s.useRef(null),
        U = (0, d.bG)([lD.Ay], () => oF([lD.Ay], m)),
        G = s.useCallback(() => {
            O(!0), (0, oA.Pq)(M, "show profile", L);
        }, [M, L]),
        w = s.useCallback(() => {
            let e = "noop";
            j ? (r(), (e = "transition")) : (o(), (e = "accept")),
                (0, oA.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: g.author.id,
                        invite_message_id: g.id,
                        invite_instance_id: (0, lA._U)(m.code, g.id),
                    },
                    L,
                );
        }, [m, g, L, j, r, o]);
    if (null == u) {
        if (null == m.guild) return (0, l.jsx)(oT, {});
        (u = ov.DY(m.guild)).premiumTier = m.guild.premium_tier ?? Y.TVA.NONE;
    }
    let H = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: a } = e;
        if (t)
            if (i)
                if (a) return W.intl.string(W.t.N85DCl);
                else if (s) return W.intl.string(W.t.TJQcNv);
                else if (l) return W.intl.string(W.t.mJyBir);
                else return W.intl.string(W.t.lxTgP9);
            else if (a) return W.intl.string(W.t.Mnvc3C);
            else if (s) return W.intl.string(W.t.FdPNr5);
            else if (l) return W.intl.string(W.t.f4gmrf);
            else return W.intl.string(W.t.H39rEY);
        return n
            ? i
                ? W.intl.string(W.t.UxmnHx)
                : W.intl.string(W.t.sigPEf)
            : i
              ? W.intl.string(W.t["oU/lsl"])
              : W.intl.string(W.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: E, isGuest: y, isHubGuild: R, isStage: S, isStream: !1 });
    return (
        (i = (0, l.jsxs)("span", {
            className: lh.FA,
            children: [
                (0, l.jsx)(oz.A, {
                    guildId: u.id,
                    name: u.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, l.jsx)(i7.A.GuildName, { guild: u, ref: D }),
                }),
                (0, l.jsx)("span", {
                    className: lh.E3,
                    children: (0, l.jsx)(az.A, { guild: u, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (a = (0, l.jsx)(tz.m, {
                asContainer: !0,
                text: W.intl.string(W.t["/FeTK6"]),
                children: (0, l.jsx)(n2.CircleInformationIcon, { size: "md", color: "currentColor", className: lh.G }),
            })),
        b
            ? ((i = (0, l.jsx)(i7.A.Channel, { channel: N })),
              (t = (0, l.jsxs)("span", {
                  className: lh.FA,
                  children: [
                      W.intl.format(W.t["2wimj5"], { guildName: u.name }),
                      (0, l.jsx)("span", {
                          className: lh.E3,
                          children: (0, l.jsx)(az.A, { guild: u, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != _ && _ > 0)
              ? (t = (0, l.jsx)(i7.A.Data, { members: C, membersOnline: _ }))
              : T && (t = (0, l.jsx)(i7.A.Channel, { channel: N, guild: u })),
        (0, l.jsxs)(i7.A, {
            children: [
                (0, l.jsx)(i7.A.GuildSplash, { guild: u }),
                (0, l.jsx)(i7.A.Header, { text: H, extra: a }),
                (0, l.jsxs)(i7.A.Body, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: lh.iH,
                            children: [
                                (0, l.jsx)(i7.A.Icon, { guild: u }),
                                (0, l.jsx)(i7.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: lh.UD,
                            children: (0, l.jsx)(ep.$, {
                                onClick: w,
                                loading: v,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? S
                                        ? W.intl.string(W.t["7vb2cc"])
                                        : W.intl.string(W.t.gpqgah)
                                    : j
                                      ? W.intl.string(W.t.cEnaWx)
                                      : W.intl.string(W.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                u.features.has(Y.GuildFeatures.HUB) &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", { className: lh.me }),
                            (0, l.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: W.intl.format(W.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, h.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("722514"),
                                                n.e("197804"),
                                                n.e("807265"),
                                                n.e("797641"),
                                                n.e("890496"),
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
var oK = n(9994),
    oY = n(461888),
    oW = n(422253),
    oX = n(123213),
    oZ = n(963402),
    oq = n(42780),
    oQ = n(897288),
    o$ = n(151101);
function o0(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: o } = e,
        c = s.useRef(null),
        u = s.useId(),
        [m, h] = s.useState(!0),
        [g, A] = s.useState(!1),
        p = t.state === Y.elq.ACCEPTING,
        E = (0, d.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
        { analyticsLocations: I } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e7.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lA._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: I,
        },
    }),
        s.useLayoutEffect(() => {
            A((c.current?.clientHeight ?? 0) > 292);
        }, [A]);
    let C = (0, oK.oO)(t),
        _ = s.useCallback(() => {
            !g || (m && h(!1));
        }, [m, g]),
        v = s.useCallback(() => {
            !g || m || h(!0);
        }, [m, g]),
        N = s.useMemo(
            () =>
                g && c.current?.clientHeight != null
                    ? {
                          height: m ? 292 : c.current.clientHeight + 36 + 48,
                          transition: E ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [m, g, E],
        );
    if (null == C) return (0, l.jsx)(oT, {});
    let j = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: o$.uY,
                ref: c,
                children: [
                    (0, l.jsx)(oq.J$, { profile: C, className: o$.vK }),
                    (0, l.jsx)(oq.CG, { profile: C }),
                    (0, l.jsx)(oZ.A, { profile: C, disableGuildNameClick: !g, guildNameId: u }),
                    (0, l.jsx)(oW.P, { profile: C, className: o$.rb }),
                    (0, l.jsx)(oQ.A, {
                        guild: null != t.guild ? (0, ov.DY)(t.guild) : null,
                        roles: t.roles,
                        className: o$.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, l.jsx)("div", {
                      className: o$.Se,
                      children: (0, l.jsx)(sh.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: v,
                          text: W.intl.string(W.t.xdCLeM),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: r()(o$.qr, { [o$.iK]: g }),
                children: [
                    g && m ? (0, l.jsx)("div", { className: o$.D7 }) : null,
                    (0, l.jsx)("div", {
                        className: r()(o$.z8, { [o$.it]: g && m }),
                        children: (0, l.jsx)("div", {
                            className: o$.UD,
                            children: (0, l.jsx)(o1, {
                                invite: t,
                                profile: C,
                                isMemberOfGuild: n,
                                message: i,
                                submitting: p,
                                onTransitionToInviteChannel: a,
                                onAcceptInstantInvite: o,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
    return g
        ? (0, l.jsx)(tF.s, {
              className: r()(o$.Gg, { [o$.vk]: m }),
              onClick: _,
              style: N,
              "aria-label": W.intl.string(W.t.dcl9MQ),
              children: j,
          })
        : (0, l.jsx)("div", { className: o$.Gg, role: "group", "aria-labelledby": u, children: j });
}
function o1(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: a,
            submitting: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        { guildId: d, ctaType: u } = (0, oY.Ay)(n, oY.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = s.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, oA.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id,
                    invite_instance_id: (0, lA._U)(t.code, a.id),
                },
                m,
            );
        }, [t, a, m, i]);
    return null == u
        ? null
        : (0, l.jsx)(oX.Y, {
              guildId: d,
              ctaType: u,
              submitting: r,
              onGoToGuild: o,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: h,
          });
}
function o2(e) {
    let t,
        n,
        { author: i, banned: a } = e,
        r = s.useId();
    return (
        (0, d.bG)([O.default], () => O.default.getId()) === i.id
            ? ((n = W.intl.string(W.t.HfUzlI)), (t = W.intl.string(W.t.y7uT5j)))
            : a
              ? ((n = W.intl.string(W.t.OMfs8i)), (t = W.intl.string(W.t["57nBty"])))
              : ((n = W.intl.string(W.t.OMfs8i)), (t = W.intl.string(W.t["p/zTYn"]))),
        (0, l.jsxs)(i7.A, {
            className: lh.TV,
            role: "group",
            "aria-labelledby": r,
            children: [
                (0, l.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lh.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, l.jsx)(i7.A.Body, {
                    children: (0, l.jsxs)("div", {
                        className: lh.iH,
                        children: [
                            (0, l.jsx)(i7.A.Icon, { expired: !0 }),
                            (0, l.jsx)(i7.A.Info, {
                                expired: !0,
                                title: W.intl.string(W.t["Jhx/ud"]),
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
var o3 = n(616356);
function o5(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: a,
            message: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        u = a?.id,
        m = (0, d.bG)([U.A], () => U.A.getGuildId()),
        h = (0, d.bG)(
            [o3.A],
            () => (null != n && null != n.target_user ? o3.A.getActiveStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        g = (0, d.bG)(
            [o3.A],
            () => (null != n && null != n.target_user ? o3.A.getStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        { analyticsLocations: A } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e7.A)({
        name: e6.ImpressionNames.INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lA._U)(n.code, r.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: A,
        },
    });
    let p = null != n && n.target_type === oS.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ey()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    ey()(I === oS.yV.STREAM && null != C, "invalid streaming invite");
    let _ = i === C.id,
        v = n.state === Y.elq.ACCEPTING,
        N = s.useCallback(() => {
            let e = "noop";
            p ? (o(), (e = "transition")) : (c(), (e = "accept")),
                (0, oA.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, lA._U)(n.code, r.id),
                    },
                    A,
                );
        }, [n, r, A, p, o, c]),
        j = null != a;
    if (null == a) {
        if (null == n.guild) return (0, l.jsx)(oT, {});
        a = (0, ov.DY)(n.guild);
    }
    let T = null != n.channel ? (0, oC.OY)(n.channel) : null,
        S = rj.Ay.getName(C),
        y = p || (!E && j),
        b = W.intl.string(W.t.I6JG46),
        R = "active";
    j && !E
        ? ((t = _ ? W.intl.string(W.t.oBLoZJ) : W.intl.formatToPlainString(W.t["0QJmA+"], { name: S })),
          (b = W.intl.string(W.t.Wdi5E1)))
        : ((R = "active"),
          p && ((b = W.intl.string(W.t.Q1W99y)), (R = "secondary")),
          (t = _ ? W.intl.string(W.t["4hyaHu"]) : W.intl.formatToPlainString(W.t.QmlLEq, { name: S })));
    let M =
        m === a.id && null != T
            ? (0, l.jsx)(i7.A.Channel, { channel: T })
            : W.intl.formatToPlainString(W.t.u0vaDE, { guildName: a.name });
    return (0, l.jsxs)(i7.A, {
        children: [
            (0, l.jsx)(i7.A.Header, { text: W.intl.string(W.t["wS+5Wb"]) }),
            (0, l.jsxs)(i7.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: lh.iH,
                        children: [
                            (0, l.jsx)(i7.A.Icon, { guild: a, onClick: j && E ? N : void 0 }),
                            (0, l.jsx)(i7.A.Info, { title: t, onClick: j && E ? N : void 0, children: M }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: N, loading: v, disabled: y, variant: R, text: b }),
                ],
            }),
        ],
    });
}
var o6 = n(683063),
    o7 = n(364522),
    o9 = n(952270),
    o4 = n(52074),
    o8 = n(725613),
    ce = n(693879),
    ct = n(145497),
    cn = n(481947),
    ci = n(977997),
    cl = n(607567),
    cs = n(923710);
function ca(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: a } = e,
        r = (0, iu.Ay)(i),
        o = (0, d.bG)([nY.A], () => nY.A.getGuild(i.guild_id), [i.guild_id]),
        c = (0, d.bG)([ci.A], () => ci.A.isInChannel(i.id), [i.id]),
        { voiceStates: u } = (0, d.cf)(
            [cl.Ay],
            () => ({ voiceStates: null != i.guild_id ? cl.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = s.useMemo(
            () => [...u.filter((e) => e.voiceState.selfStream), ...u.filter((e) => !e.voiceState.selfStream)],
            [u],
        ),
        h = (0, d.bG)([o8.A], () => o8.A.getStartTime(i), [i]);
    s.useEffect(() => {
        null != h || null == i.guild_id || o8.A.hasRequestedStartTimes(i.guild_id) || (0, o4.U)(i.guild_id);
    }, [i, h]);
    let g = s.useRef(null),
        p = s.useRef(null),
        E = s.useCallback(() => {
            let e = g.current,
                t = p.current;
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
        _ = (0, lA._U)(t.code, n.id),
        v = u.some((e) => e.voiceState.selfStream);
    (0, e7.A)({
        name: e6.ImpressionNames.VOICE_INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: _,
            has_active_stream: v,
            location_stack: C,
        },
    });
    let N = s.useCallback(() => {
            (0, l3.iN)(i.id);
        }, [i.id]),
        j = s.useCallback(() => {
            a(),
                (0, oA.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: _,
                        number_of_users_in_channel: u.length,
                    },
                    C,
                );
        }, [t, n, C, _, u.length, a]);
    return (0, l.jsxs)("div", {
        className: cs.kL,
        children: [
            (0, l.jsxs)("div", {
                className: cs.nz,
                children: [
                    (0, l.jsxs)("div", {
                        className: cs.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: cs.yW,
                                children: [
                                    (0, l.jsx)(r0.H, {
                                        className: cs.p,
                                        color:
                                            u.length > 0 ? nH.A.colors.TEXT_FEEDBACK_POSITIVE : nH.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, l.jsx)(o6.u, {
                                        title: `${o?.name} / ${r}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, l.jsx)(ct.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, l.jsx)(eD.D, {
                                            className: cs.HA,
                                            onClick: N,
                                            children: (0, l.jsx)(A.E, {
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
                                ? (0, l.jsx)(ce.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, l.jsxs)("div", {
                              className: cs.Ao,
                              children: [
                                  (0, l.jsx)(o7.Ip, {
                                      ref: I,
                                      className: cs.JD,
                                      children: m.map((e) =>
                                          (0, l.jsx)(
                                              cn.Ay,
                                              {
                                                  className: cs.Eq,
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
                                  (0, l.jsx)("div", { ref: p, className: cs.wH }),
                              ],
                          })
                        : (0, l.jsx)("div", {
                              className: cs.p$,
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t.zSqdrS),
                              }),
                          }),
                    (0, l.jsx)("div", {
                        className: cs.TB,
                        children: (0, l.jsx)(ep.$, {
                            onClick: j,
                            icon: r0.H,
                            variant: "active",
                            fullWidth: !0,
                            text: W.intl.string(W.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: cs.qr,
                children: [
                    (0, l.jsx)(o9.EyeSlashIcon, { size: "custom", color: "currentColor", className: cs.Dq }),
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: W.intl.string(W.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function cr(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: s } = e,
        a = t.channel?.id,
        r = (0, d.bG)([P.A, tl.A], () => {
            let e = P.A.getChannel(a);
            return null != e && tl.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [a]),
        o = (0, d.bG)([nY.A], () => null != nY.A.getGuild(t.guild?.id), [t.guild]);
    return null == r
        ? (0, l.jsx)(o0, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: s,
          })
        : (0, l.jsx)(ca, { invite: t, message: n, channel: r, onTransitionToInviteChannel: i });
}
var co = n(652896),
    cc = n(834757),
    cd = n(427358),
    cu = n(323605);
function cm(e) {
    let { className: t, channel: n, guild: i, onClick: s } = e,
        a = (0, n8.gU)(n, i),
        o = (0, iu.Ay)(n);
    return (0, l.jsxs)(eD.D, {
        onClick: s,
        className: r()(cu.UP, t),
        children: [
            null != a &&
                (0, l.jsx)(a, { className: cu.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, l.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, l.jsxs)(sU.A, { children: [i.name, " / ", o] }),
            }),
            (0, l.jsx)(n4._, { className: cu.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var ch = n(221877),
    cg = n(717421),
    cA = n(297413),
    cp = n(528944);
function cx(e) {
    let { user: t, guildId: n, channelId: i, nick: a } = e,
        r = s.useRef(null);
    return (0, l.jsx)(lP.A, {
        targetElementRef: r,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, l.jsxs)(eD.D, {
                ...s,
                innerRef: r,
                className: cp.nM,
                onClick: i,
                children: [
                    (0, l.jsx)(tE.eu, {
                        src: t.getAvatarURL(n, (0, tI.FT)(tI._3.SIZE_24)),
                        className: cp.my,
                        "aria-label": t.username,
                        size: tI._3.SIZE_24,
                    }),
                    (0, l.jsx)(A.E, {
                        className: cp.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, l.jsx)(cA.A, { user: t, nick: a, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var cf = n(480887);
function cE(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: a, ...r } = e,
        o = s.useCallback((e) => (0, l.jsx)(cI, { users: e, guildId: t, channelId: n, onHoverOrFocus: a }), [t, n, a]);
    return (0, l.jsx)(sM.Y, { renderPopout: () => o(i), ...r });
}
function cI(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: a } = e,
        r = s.useRef(null),
        { isHoveringOrFocusing: o } = (0, tW.A)(r);
    return (
        s.useEffect(() => {
            a?.(o);
        }, [a, o]),
        (0, l.jsx)("div", {
            ref: r,
            className: cf.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, l.jsx)(o7.Ip, {
                className: cf.G,
                children: t.map((e) =>
                    (0, l.jsx)(
                        cx,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: aC.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var cC = n(768920);
let c_ = { mass: 1, tension: 170, friction: 26 };
function cv(e) {
    let { className: t, guildId: n, channelId: i, members: a, ref: o, motion: c } = e,
        d = a.length > 4,
        u = d ? a.slice(0, 3) : a,
        m = d ? a.length - 4 + 1 : 0,
        h = Math.min(d ? u.length + 1 : u.length, 4),
        g = (c?.percentX ?? 0) * 6,
        A = (c?.percentY ?? 0) * 6,
        p = 1 + ((c?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, cg.z)(() => ({ x: 0, y: 0, scale: 1, config: c_ }));
    return (
        s.useEffect(() => {
            f({ x: g, y: A, scale: p });
        }, [g, A, p, f]),
        (0, l.jsxs)(ch.animated.div, {
            ref: o,
            className: r()(cC.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, ch.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: cC.my,
                            children: (0, l.jsx)(tz.m, {
                                text: aC.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, l.jsx)(tE.eu, {
                                    src: (function (e, t, n) {
                                        let i = lD.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, w.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tI._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tI._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tI._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tI._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tI._3.SIZE_48
                                                    : h > 2
                                                      ? tI._3.SIZE_40
                                                      : tI._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                d && (0, l.jsx)(cN, { guildId: n, channelId: i, members: a, count: m }, "overflow"),
            ],
        })
    );
}
function cN(e) {
    let { guildId: t, channelId: n, members: i, count: a } = e,
        {
            triggerRef: o,
            shouldShow: c,
            onPopoutHoverOrFocus: d,
        } = (function () {
            let e = s.useRef(null),
                { isHoveringOrFocusing: t } = (0, tW.A)(e),
                [n, i] = s.useState(!1),
                l = t || n,
                [a, r] = s.useState(!1),
                o = s.useRef(null);
            return (
                s.useEffect(
                    () => (l || (o.current = setTimeout(() => r(!1), 300)), () => clearTimeout(o.current)),
                    [l],
                ),
                l && !a && r(!0),
                { triggerRef: e, shouldShow: l || a, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, l.jsx)(cE, {
        targetElementRef: o,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: c,
        onHoverOrFocus: d,
        children: (e) =>
            (0, l.jsx)("div", {
                className: r()(cC.my, cC.k2),
                ref: o,
                ...e,
                children: (0, l.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: a > 99 ? ">99" : `+${a}`,
                }),
            }),
    });
}
var cj = n(183751);
function cT(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: o } = e,
        c = s.useRef(null),
        u = i ?? null;
    null == u && null != t.guild && (u = ov.DY(t.guild));
    let m = null != t.channel ? (0, oC.OY)(t.channel) : null;
    ey()(null != u, "Voice Invite Embed must be used in context of a guild."),
        ey()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, d.bG)([tl.A, P.A], () => {
            let e = P.A.getChannel(m.id);
            return null == e || tl.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, d.bG)([cl.Ay], () => (h ? cl.Ay.getVoiceStatesForChannelAlt(m.id, u.id) : []), [m.id, u.id, h]),
        { label: p, sublabel: E } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                a = i.some((e) => e.user?.id === n.id),
                r = i.length - !!a;
            if (!s)
                return {
                    label: l ? W.intl.string(W.t.DVDvCD) : W.intl.string(W.t.TY77rq),
                    sublabel: W.intl.string(W.t.wM2WTM),
                };
            let o = a ? W.t["2RWMFV"] : W.t.IWXzHV,
                c = a ? W.t.Da7tZx : W.t["3VbQvv"];
            return { label: l ? W.intl.format(o, { othersCount: r }) : W.intl.format(c, { othersCount: r }) };
        })({ currentUserId: (0, d.bG)([O.default], () => O.default.getId()), author: n.author, voiceStates: g }),
        I = (0, d.bG)([nY.A], () => null != nY.A.getGuild(u.id), [u.id]),
        C = (0, d.bG)([ed.Ay], () => ed.Ay.getVoiceChannelId() === m.id, [m.id]),
        _ = (0, d.bG)([lD.Ay], () => oF([lD.Ay], t), [t]),
        v = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: N } = (0, f.Ay)(x.A.INVITE_EMBED),
        j = (0, lA._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, d.bG)([o3.A, cd.A], () => {
                if ((0, oE.G4)(t) && null != t.target_user) {
                    let e = o3.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = o3.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let a = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === a.length) return null;
                for (let e of [...a].sort((e, t) => {
                    let n = cd.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (cd.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = o3.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: u.id, channelId: m.id }),
        S = (0, cc.AO)(T),
        y = null != T,
        b = s.useCallback(() => {
            let e = I ? "transition" : "accept";
            I ? a() : o(),
                (0, oA.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: j,
                        application_id: S?.id ?? void 0,
                        stream_key: null != T ? (0, co._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    N,
                );
        }, [t, n, N, j, I, S, T, g.length, a, o]),
        R = s.useCallback(() => {
            I ? (0, l3.iN)(m.id) : o({ autoJoin: !1 }),
                eJ.default.track(Y.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: u.id,
                    invite_channel_id: m.id,
                    invite_instance_id: j,
                    is_member: I,
                    application_id: S?.id ?? null,
                    stream_key: null != T ? (0, co._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: N,
                });
        }, [m.id, u.id, t.code, j, I, S, T, g.length, N, o]);
    (0, e7.A)({
        name: e6.ImpressionNames.VOICE_INVITE_EMBED,
        type: e6.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: u.id,
            invite_channel_id: m.id,
            invite_instance_id: j,
            has_active_stream: y,
            location_stack: N,
        },
    });
    let M = (0, d.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
        L = s.useRef(null),
        [k, D] = s.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, d.bG)([cd.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = cd.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (cd.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = s.useMemo(() => tp().throttle(D, 20), [D]);
    s.useEffect(() => () => G.cancel(), [G]);
    let w = s.useCallback(
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
        H = s.useCallback(() => {
            G.cancel(), D({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, l.jsxs)("div", {
        className: cj.kL,
        children: [
            (0, l.jsxs)("div", {
                ref: L,
                className: cj.hw,
                onMouseMove: w,
                onMouseLeave: H,
                children: [
                    (0, l.jsx)("div", { className: cj.ys }),
                    (0, l.jsx)("div", { className: cj.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, l.jsxs)("div", {
                        className: cj.rf,
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(cj.Qs, { [cj.tE]: 0 === U.length }),
                                children: [
                                    (0, l.jsx)(cm, { channel: m, guild: u, onClick: R }),
                                    (0, l.jsxs)("div", {
                                        className: cj.WD,
                                        children: [
                                            (0, l.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, l.jsx)(sU.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != E
                                                ? (0, l.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: cj.$B,
                                                      children: (0, l.jsx)(sU.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, l.jsx)("div", {
                                      className: cj.RE,
                                      children: (0, l.jsx)(cv, {
                                          ref: c,
                                          guildId: u.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: k,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: cj.xk,
                        children: (0, l.jsx)(ep.$, {
                            onClick: b,
                            loading: v,
                            variant: C ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !_,
                            text: C ? W.intl.string(W.t["3xjX0U"]) : W.intl.string(W.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: cj.qr,
                children: [
                    (0, l.jsx)(o9.EyeSlashIcon, { size: "custom", color: "currentColor", className: cj.Dq }),
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: W.intl.string(W.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function cS(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: a, inviteError: r } = (0, d.cf)(
            [o_.A],
            () => ({ invite: o_.A.getInvite(t), inviteError: o_.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lA._U)(t, n.id);
    s.useEffect(() => {
        null == a && oA.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let c = a ?? { state: Y.elq.RESOLVING, code: "" },
        { analyticsLocations: u } = (0, f.Ay)(),
        m = (0, d.bG)([nY.A], () => (a?.guild != null ? nY.A.getGuild(a.guild.id) : null), [a]),
        h = (0, d.bG)([P.A, tl.A], () => {
            let e = a?.channel?.id;
            if (null == e) return !1;
            let t = P.A.getChannel(e);
            return null != t && tl.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, t);
        }, [a]),
        g = (0, d.bG)([O.default], () => O.default.getId()),
        A = (0, d.bG)([ox.Ay], () => ox.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]);
    function p() {
        null != c.channel && oA.Ay.transitionToInvite(c, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == m && a?.guild != null ? ov.DY(a.guild) : m;
        (0, oI.g)({ guildId: a?.guild?.id ?? null, guild: n, isMember: null != m, analyticsLocations: u }) ===
            oI.W.PROCEED &&
            oA.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
    }
    let E = (0, l.jsx)(oJ, {
        onTransitionToInviteChannel: p,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: c,
        message: n,
    });
    switch (c.state) {
        case Y.elq.RESOLVING:
            E = (0, l.jsx)(oT, {});
            break;
        case Y.elq.EXPIRED:
        case Y.elq.BANNED:
            E = (0, l.jsx)(o2, { banned: c.state === Y.elq.BANNED, author: n.author });
            break;
        case Y.elq.ERROR:
            E = (0, l.jsx)(oP, { author: n.author, inviteError: r });
            break;
        default:
            switch ((0, oE.On)(c)) {
                case oE.Xd.GROUP_DM:
                    E = (0, l.jsx)(oH, {
                        onTransitionToInviteChannel: p,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: c,
                        message: n,
                    });
                    break;
                case oE.Xd.FRIEND:
                    E = (0, l.jsx)(oG, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, oE.G4)(c)) {
                        if (null != c.channel && (0, oC.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = oj({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (h)
                                if (e.enabled) {
                                    E = (0, l.jsx)(cr, {
                                        onTransitionToInviteChannel: p,
                                        onAcceptInstantInvite: x,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    E = (0, l.jsx)(cT, {
                                        onTransitionToInviteChannel: p,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        E = (0, l.jsx)(o5, {
                            onTransitionToInviteChannel: p,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, oE.ly)(c)) {
                        E = (0, l.jsx)(of.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: p,
                        });
                        break;
                    }
                    if ((0, oE.oK)(c)) {
                        E = (0, l.jsx)(oM, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, oC.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = oj({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (h)
                            if (e.enabled) {
                                E = (0, l.jsx)(cr, {
                                    onTransitionToInviteChannel: p,
                                    onAcceptInstantInvite: x,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                E = (0, l.jsx)(cT, {
                                    onTransitionToInviteChannel: p,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, op.v)(c) &&
                        (E = (0, l.jsx)(o0, {
                            onTransitionToInviteChannel: p,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, l.jsx)(rS.A, { section: Y.JJy.INVITE_LINK, children: E });
}
var cy = n(266620),
    cb = n(860227),
    cR = n(763899),
    cM = n(280621),
    cL = n(123791),
    ck = n(627363);
function cO(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, ck.YY)(t);
    return null == i ? null : (0, l.jsx)(cP, { app: i, guildId: n });
}
function cP(e) {
    let { app: t, guildId: i } = e;
    (0, cL.C)(t.id);
    let a = s.useCallback(() => {
        (0, h.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, l.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, l.jsx)(ep.$, {
        size: "sm",
        onClick: a,
        icon: cM.U,
        text: W.intl.format(W.t.XDRjs5, { appName: t.name }),
    });
}
var cD = n(394839),
    cU = n(96782),
    cG = n(279182),
    cw = n(861986),
    cH = n(87221),
    cV = n(313433);
function cB(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: cV.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, l.jsxs)(
                    "div",
                    {
                        className: cV.Yf,
                        children: [
                            (0, l.jsx)(cH.D, { size: "lg", color: nH.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: W.intl.string(W.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, l.jsxs)("div", {
                className: cV.Fj,
                children: [
                    (0, l.jsx)(n2.CircleInformationIcon, { size: "sm", color: nH.A.colors.TEXT_MUTED }),
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: W.intl.string(W.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var cF = n(343552),
    cz = n(581619),
    cJ = n(803931);
let cK = [Y.Auw.GIFV],
    cY = 15 * nE.A.Millis.MINUTE,
    cW = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cX = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s, flags: a } = e,
            r = (0, c.Lt)(a, l_.e5.IS_ANIMATED);
        return null != i && null != s && (lv.bp.test(n) || (r && (lv.P8.test(n) || lv.p4.test(n))))
            ? (0, l.jsx)(ra.A, { width: i, height: s, src: n, url: t, format: u.TL.IMAGE, className: cJ.jj })
            : null;
    };
class cZ extends s.Component {
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
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cW.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: a } = this.props,
            { channel: r, message: o, poll: c } = e;
        return (
            !(0, m.A)(this.state, t) ||
            !(0, m.A)(this.props, e, ["message", "channel"]) ||
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
            case aU.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, l.jsx)(n9, { messageId: e.id, channelId: t.id });
                break;
            case aU.xC.AGE_VERIFICATION_RETRY:
                i = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eE, { channelId: t.id }),
                        (0, eA.cc)(t.id, e.id) ? (0, l.jsx)(eT, { channelId: t.id }) : null,
                    ],
                });
                break;
            case aU.xC.CONNECT_TO_TEEN:
                i = (0, l.jsx)(ev, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, l.jsx)("div", { className: cJ.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: s, url: a } = n;
            if ((0, tk.Yf)(i)) {
                let n = (0, tk.kK)(i, s, a);
                if (null == n) return null;
                let { applicationId: r } = n;
                return (0, l.jsx)(
                    e5.O,
                    {
                        applicationId: r,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tO.I.APP_DIRECTORY_PROFILE:
                                    return (0, l.jsx)(lt, { code: r, message: e });
                                case tO.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, l.jsx)(eg, { application: t, message: e, params: i });
                                case tO.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, l.jsx)(e1, { application: t, message: e });
                                case tO.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: s } = n;
                                    return (0, l.jsx)(e2, { application: t, message: e, skuId: s });
                                case tO.I.APP_OAUTH2_LINK:
                                    return (0, l.jsx)(e9, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    s,
                );
            }
            switch (i) {
                case tO.I.INVITE:
                    if (!this.shouldRenderInvite(s)) return null;
                    return (0, l.jsx)(
                        cS,
                        { code: s, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        s,
                    );
                case tO.I.TEMPLATE:
                    return (0, l.jsx)(lg, { code: s }, s);
                case tO.I.EVENT:
                    return (0, l.jsx)(lr.A, { code: s }, s);
                case tO.I.CHANNEL_LINK:
                    return (0, l.jsx)(aK, { code: s, message: e }, s);
                case tO.I.GUILD_PRODUCT:
                    return (0, l.jsx)(la, { code: s }, s);
                case tO.I.SERVER_SHOP:
                    return (0, l.jsx)(nQ, { guildId: s }, s);
                case tO.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(
                        sS.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, sT.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        s,
                    );
                }
                case tO.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(sS.I, { applicationId: n, skuId: e, channel: t }, s);
                }
                case tO.I.QUESTS_EMBED:
                    return (0, l.jsx)(lq.A, { questId: s }, s);
                case tO.I.GAME_PROFILE:
                    return (0, l.jsx)(iP, { gameId: s, sourceUserId: e.author.id }, s);
                case tO.I.GAME_SERVER_SHARE:
                    return (0, l.jsx)(i2, { code: s }, s);
                case tO.I.USER_PROFILE:
                    return (0, l.jsx)(aM, { userId: s, guildId: t.guild_id, channelId: t.id }, s);
                case tO.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tD.has(i) ? i : void 0 };
                    })(s);
                    if (null == e) return null;
                    return (0, l.jsx)(nw, { skuId: e.skuId, tab: e.tab, channel: t }, s);
                }
                case tO.I.EXPERIMENT:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: s, content: a, giftInfo: r } = e,
            o = G.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: cJ.zv,
                          children: (0, l.jsx)(og, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: s,
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
            isLurking: s,
            isPendingMember: a,
            channel: r,
        } = this.props;
        return n
            ? null
            : (0, l.jsx)(cG.A, {
                  message: e,
                  channel: r,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: s,
                  isPendingMember: a,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: s,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: r,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || (0, aL._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, Y.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, l_.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, Y.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: A,
                srcToSeekOverride: p,
            } = (0, lY.o)(h, { enabledContentHarmTypeFlags: r, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, c.Lt)(u, Y.pr7.IS_VOICE_MESSAGE);
        function E(e, n) {
            let i = (0, c.Lt)(e.originalItem.flags ?? 0, Y.sbO.IS_SPOILER) || (0, sy.BV)(t);
            return (0, aG.iW)(e.originalItem, n, i);
        }
        let I = m.map((l) => {
            let r = (0, l_.aG)(l),
                o = {
                    message: e,
                    item: (0, cU.rC)(l, s),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: E,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, r);
                              }
                            : void 0,
                    renderAudioComponent: f ? cy.SX : cy.Nj,
                    renderImageComponent: cy.Cr,
                    renderVideoComponent: cy.I1,
                    renderPlaintextFilePreview: cy.R6,
                    renderGenericFileComponent: cy.UB,
                    onPlay: function (n, i, s) {
                        eJ.default.track(Y.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: cX(r),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                c = (0, aO.E)({ proxyURL: l.proxy_url, url: l.url });
            return c in g && x && ((o.onClick = g[c]), (o.handlePreloadImage = A[c]), (o.onSeekRequest = p[c])), o;
        });
        return (0, l.jsx)(cD.A, { items: I });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: s,
                inlineEmbedMedia: a,
                canSuppressEmbeds: r,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: c,
                shouldAgeVerify: d,
            } = this.props,
            u = (0, aG.sC)(e, i, o, c);
        if (e.type === Y.Auw.GIFT) return null;
        let m = cK.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, l.jsx)(
            i3.G.Provider,
            {
                value: (0, cF.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, l.jsx)(tg.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: s,
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
        e.type !== Y.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lC.A.parseEmbedTitleWithoutLinks : lC.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === Y.Auw.RICH
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
        e.shiftKey ? p.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    handleEditAttachment = (e) => {
        let t = e.originalItem;
        (0, h.openModalLazy)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("456506"), n.e("570698")]).then(
                n.bind(n, 427281),
            );
            return (n) =>
                (0, l.jsx)(i, {
                    ...n,
                    item: e,
                    onSubmit: (e) => {
                        let { description: n, spoiler: i } = e,
                            { channel: l, message: s } = this.props,
                            a = s.attachments.map((e) => ({ id: e.id })),
                            r = a.find((e) => e.id === t.id);
                        null != r &&
                            ((r.description = n), (r.is_spoiler = i), p.A.patchMessageAttachments(l.id, s.id, a));
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
                      cz.z.has(t.type) ||
                      (0, aP.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, Y.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lx.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lf.has(t.content_type);
                              })
                          )) ||
                      (0, aP.V)(t) ||
                      (0, aP.G8)(t) ||
                      (0, aP.Xk)(t) ||
                      ((0, aP.nL)(t) && (0, af.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === Y.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var s = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: a,
                              onMediaItemContextMenu: r,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: c,
                          } = this.props,
                          d = (0, aG.sC)(t, e, c, i),
                          u = function () {
                              let c = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, l.jsx)(
                                  a$,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cX,
                                      getOnMediaItemContextMenu:
                                          null == r
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), r?.(t, e);
                                                },
                                      shouldHideMediaOptions: a,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? s.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: c,
                                  },
                                  t.id,
                              );
                          };
                      return null != d
                          ? (0, l.jsx)(
                                su.Ay,
                                {
                                    type: su.Ay.Types.EMBED,
                                    reason: d,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let a = { renderImageComponent: sL.LL, renderVideoComponent: sL.$o, renderLinkComponent: sL.bU };
                  if (
                      t.type === Y.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = aD.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let s = i.pathname.split("/")[3];
                          if (null != s)
                              return (0, l.jsx)(
                                  or,
                                  { skuId: s, renderFallback: () => this.renderEmbed(t, n, a, e) },
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
            disableComponentInteractivity: s,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, l.jsx)(aZ.N, {
            gifAutoPlay: t,
            getGifFavButton: cX,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), a?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, l.jsx)(lE.Ay, { message: e, shouldDisableInteractiveComponents: s }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, l.jsx)(cR.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== Y.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(th, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, aw.ec)(e)
            ? (0, l.jsx)(rs.A, {
                  message: e,
                  onDeleteMessage: () => {
                      p.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lW.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, l.jsx)(s9, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(Y.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(ap, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(Y.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - ai.default.extractTimestamp(e.id) >= cY)
        )
            return (0, l.jsx)("div", { className: cJ.xM, children: W.intl.string(W.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(g.M, {
            dismissable: !0,
            header: W.intl.string(W.t.VL1KOk),
            confirmText: W.intl.string(W.t.YEHppG),
            cancelText: W.intl.string(W.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                p.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: cJ.IX,
                    children: W.intl.string(W.t["vXZ+Fo"]),
                }),
                (0, l.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: W.intl.string(W.t["5j2by3"]),
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
                  header: W.intl.string(W.t.CbTIEo),
                  confirmText: W.intl.string(W.t.kFwAsa),
                  cancelText: W.intl.string(W.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      p.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, l.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: cJ.IX,
                      children: W.intl.string(W.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(cO, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(e5.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, l.jsx)(rl, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== Y.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(lK, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === Y.Auw.SAFETY_POLICY_NOTICE
            ? (0, l.jsx)(sp, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === Y.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, l.jsx)(sj, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, n0.KM)(e)
            ? (0, l.jsx)(n5, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, l.jsx)(lZ.A, { message: e, poll: t, className: cJ.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, l.jsx)(tM, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lQ.Mn)(e, this.props.channel)) return (0, l.jsx)(sd, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lQ.Mn)(e, this.props.channel))
            return (0, l.jsx)(iT, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, l.jsx)(cw.A, { message: e, compact: t, location: cw.O.AFTER_ACCESSORIES });
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
                        if (null != t) return new iA(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lW.o6)(n).length;
        return 0 === i
            ? null
            : (0, l.jsx)("div", {
                  id: (0, cb.XL)(e),
                  className: r()(this.props.className, cJ.kL),
                  children: (0, l.jsx)(cB, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: a } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, l.jsx)("div", { id: (0, cb.XL)(t), className: r()(e, cJ.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let o = this.renderEditedTag(t, i),
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
            : (0, l.jsxs)("div", {
                  id: (0, cb.XL)(t),
                  className: r()(e, cJ.kL),
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
                      o,
                      A,
                      p,
                      x,
                      s && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      j,
                      T,
                  ],
              });
    }
}
function cq(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: s,
            isMessageSnapshot: a,
            hideInviteEmbedBanner: r,
            hideActivityInvite: o,
        } = e,
        u = (0, d.bG)([O.default], () => O.default.getId()),
        m = ic.X6.useSetting(),
        h = ic.hD.useSetting(),
        g = ic.rs.useSetting() && !(0, an.A)(e.message),
        A = ic.jW.useSetting() && !1 !== e.renderReactions,
        p = ic.kt.useSetting(),
        x = (0, d.bG)([ak.A], () => null == n.guild_id || ak.A.canChatInGuild(n.guild_id), [n]),
        f = (0, d.bG)([lI.A], () => null != n.guild_id && lI.A.isLurking(n.guild_id), [n]),
        E = (0, d.bG)([lD.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lD.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: I, canManageMessages: C } = (0, d.cf)(
            [tl.A],
            () => ({
                canAddNewReactions: x && tl.A.can(Y.xBc.ADD_REACTIONS, n),
                canManageMessages: tl.A.can(Y.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        _ = (0, ln.ix)(n.guild_id),
        [, v] = (0, li.c)(n.guild_id),
        N = (0, s4.Id)(n),
        j =
            (u === i.author.id || C) &&
            i.author.id !== Y.oIV &&
            !1 !== s &&
            !(0, c.Lt)(i.flags, Y.pr7.EPHEMERAL) &&
            N &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        T = u === i.author.id && N && !a,
        S = i.author.id === u,
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
        R = (0, it.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        M = (0, lN.A)(n?.id),
        L = (0, lX.A)(i),
        k = (0, n1.P)(i),
        P = (0, aH.z)(n),
        D = (0, aU._f)(i.id, i.channel_id),
        U = (0, n$._R)(),
        w = (0, ii.U)();
    return (0, l.jsx)(cZ, {
        canSuppressEmbeds: j,
        canDeleteAttachments: T,
        ...b,
        disableReactionReads: !!y || b.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && P,
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
        restrictedPreview: w,
    });
}
function cQ(e) {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: s = !1,
            disableReactionCreates: a = !0,
            disableReactionUpdates: r = !0,
            disableComponentInteractivity: o = !0,
            ...c
        } = e,
        d = ic.X6.useSetting(),
        u = ic.hD.useSetting(),
        m = ic.rs.useSetting(),
        h = ic.kt.useSetting(),
        g = (0, ii.U)(),
        A = (0, it.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, lN.A)(n?.id),
        x = (0, n1.P)(t),
        f = (0, aU._f)(t.id, t.channel_id),
        E = (0, lX.A)(t);
    return (0, l.jsx)(cZ, {
        ...c,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: a,
        disableReactionUpdates: r,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: s,
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
