n.d(t, { iV: () => cO, OC: () => cD, Ay: () => cP }), n(938796);
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
    p = n(834730),
    A = n(148494),
    x = n(793574),
    f = n(688810),
    E = n(735991);
n(321073), n(134528), n(947204);
var _ = n(485845),
    C = n(379834),
    I = n(836480),
    v = n(825860),
    N = n(950305),
    j = n(795816),
    T = n(574152),
    S = n(522305),
    y = n(361926),
    b = n(583846),
    R = n(625180),
    L = n(207371),
    M = n(205184),
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
    Y = n(104171),
    K = n(652215),
    W = n(375708),
    X = n(154960);
function Z(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, l.jsxs)("div", {
        className: X.i,
        children: [
            (0, l.jsx)(Y.Ay, { guildId: n, users: t, max: 6, size: Y.DN.SIZE_16 }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var q = n(354287),
    Q = n(138175),
    $ = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(165610),
    ei = n(422533);
function el(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: a, message: r, onView: o } = e,
        { name: c, bot: u } = (t = (0, Q.b)(t)),
        m = u?.id,
        h = (0, E.Ag)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: _ } = (0, $.f)(t),
        C = (0, d.bG)([O.default], () => a ?? O.default.getId(), [a]),
        { analyticsLocations: I } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: v, instanceId: N, isCurrentlyInInstance: b, canLaunchInChannel: M } = (0, V.w)(t.id),
        k = (0, T.A)(),
        D = (0, y.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        U = null != m && h && D,
        G = M && h,
        H = (0, L.x)(t),
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
                                          analyticsLocations: I,
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
                                          analyticsLocations: I,
                                          customId: i,
                                          referrerId: C,
                                      });
                                  },
                              }))
                    : null != z && e.push(z),
                e
            );
        }, [h, z, H, t.id, G, U, N, b, v, k, i, C, I, m]),
        Y = h ? (0, l.jsx)(ea, { app: t }) : (0, l.jsx)(es, { app: t });
    return (0, l.jsx)(B.h, {
        title: c,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: F,
        bannerAspectRatio: _,
        iconSrc: g,
        info: Y,
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
            _.b.GUILD_INSTALL in t.integrationTypesConfig,
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
            null != r && (0, l.jsx)(p.E, { variant: "text-xs/medium", className: ei.h_, color: "none", children: r }),
            null != a &&
                (0, l.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    className: ei.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, l.jsx)(I.Q, { size: "xxs", color: "currentColor" }), a],
                }),
        ],
    });
}
function ea(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        a = (0, d.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        r = (0, M.s)(t.id),
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
                    children: [(0, l.jsx)(v.Y, { size: "xxs", color: "currentColor" }), W.intl.string(W.t.TsWCdW)],
                });
            let e = i > 0 ? W.intl.format(W.t.z8EAJW, { count: i }) : W.intl.string(W.t.RjceQU);
            return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(N.n, { size: "xxs", color: "currentColor" }), e] });
        }, [r, o, a, i]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.length > 0 &&
                (0, l.jsx)(p.E, {
                    variant: "text-xs/medium",
                    className: ei.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, l.jsx)("span", { className: ei.Tc, children: e }, t)),
                }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", className: ei.dS, color: "none", lineClamp: 1, children: c }),
        ],
    });
}
var er = n(582388),
    eo = n(257269);
let ec = (0, d.UT)(er.A, {
    getQueryId: K.fic.CUSTOM_ACTIVITY_LINK,
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
        p = (0, d.bG)([eu.Ay], () => {
            if (null == h) return;
            let e = eu.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, d.bG)([eu.Ay], () => eu.Ay.getCurrentEmbeddedActivity()),
        _ = (0, T.A)(),
        C = g === em.xy.CAN_LAUNCH,
        I = null != p && A?.compositeInstanceId === p,
        v = null != n ? n : i.customId,
        N = [];
    (0, L.x)(t)
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
                      null == p ? W.intl.string(W.t.RscU7I) : I ? W.intl.string(W.t.DPfdsq) : W.intl.string(W.t.sqe0hj),
                  trackingArea: q.kY.PLAY,
                  onClick() {
                      (0, j.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          embeddedActivitiesManager: _,
                          customId: v,
                          referrerId: s,
                          analyticsLocations: m,
                      });
                  },
                  disabled: I,
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
var ep = n(821609),
    eA = n(31720),
    ex = n(847599),
    ef = n(36149);
function eE(e) {
    let { channelId: t } = e,
        n = (0, ef.b8)(),
        i = (0, ef.i2)(),
        a = W.intl.string(W.t["9KiIz6"]),
        r = W.intl.string(W.t["/nicWo"]),
        o = s.useCallback(() => {
            eA.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ex.UT)(ex.Im.RETRY, t);
        }, [t]);
    return (0, l.jsx)(ep.$, { variant: "primary", text: n ? a : r, onClick: o, disabled: !i });
}
var e_ = n(107766),
    eC = n(780964),
    eI = n(766075);
function ev(e) {
    let { channelId: t } = e,
        n = s.useCallback(() => {
            (0, e_.nk)() || (0, eI.openUserSettings)(eC.X.FAMILY_CENTER_PANEL), (0, ex.UT)(ex.Im.CONNECT_TO_TEEN, t);
        }, [t]);
    return (0, l.jsx)(ep.$, { variant: "primary", text: W.intl.string(W.t.n8a49k), onClick: n });
}
var eN = n(284009),
    ej = n.n(eN),
    eT = n(664121),
    eS = n(34188),
    ey = n(408278),
    eb = n(173936),
    eR = n(691540),
    eL = n(857250),
    eM = n(97483),
    ek = n(939249),
    eO = n(996759),
    eP = n(800342),
    eD = n(163437),
    eU = n(185438),
    eG = n(97352),
    ew = n(652676),
    eH = n(67480),
    eV = n(328968),
    eB = n(174459),
    eF = n(957565),
    ez = n(943775),
    eJ = n(997997),
    eY = n(658575),
    eK = n(376374),
    eW = n(435220),
    eX = n(457147);
let eZ = (0, d.UT)([eH.A, eV.A, eG.A], {
        getQueryId: K.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eH.A.get(e),
                n = eV.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eG.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            ej()(null != e, "skuId is null"), await (0, eP.QB)(e);
        },
    }),
    eq = (0, d.UT)([eH.A], {
        getQueryId: K.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eH.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            ej()(null != e && null != t, "appId is null"), await (0, eP.JI)(t);
        },
    });
function eQ(e) {
    let { application: t, message: i } = e,
        a = t.id,
        r = (0, eY.G)(a),
        [o, c, u, m] = (0, d.yK)([ew.A, P.A], () => {
            let e = (0, ez.A)(t, 45),
                n = P.A.getBasicChannel(i.channel_id)?.guild_id;
            return [ew.A.getStoreLayout(a), ew.A.getFetchStatus(a), n, e];
        }, [t, a, i.channel_id]);
    s.useEffect(() => {
        c === ew.N.NONE && (0, eO.V)(a);
    }, [a, c]);
    let g = o.subscriptions.length,
        p = o.otps.length,
        A = s.useMemo(
            () =>
                g > 0 && p > 0
                    ? W.intl.formatToPlainString(W.t["jA648+"], { subCount: g, itemCount: p })
                    : g > 0
                      ? W.intl.formatToPlainString(W.t.GSfibA, { count: g })
                      : p > 0
                        ? W.intl.formatToPlainString(W.t.j7Go5A, { count: p })
                        : W.intl.string(W.t.rMA98g),
            [p, g],
        );
    if (!r) return null;
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
                (0, l.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: a, guildId: u });
        });
    }
    return (0, l.jsx)(e0, {
        appName: t.name,
        title: W.intl.formatToPlainString(W.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eJ.K)(a, eJ.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            x(),
                eB.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: a, area: "app_icon" });
        },
        children: (0, l.jsx)("div", {
            className: eX.mZ,
            children: (0, l.jsx)(ep.$, {
                onClick: function () {
                    x(),
                        eB.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: a,
                            area: "open_store_button",
                        });
                },
                text: W.intl.string(W.t.kRvlKJ),
            }),
        }),
    });
}
function e$(e) {
    let { application: t, skuId: i, message: a } = e,
        {
            parentSku: r,
            sku: o,
            subscriptionPlan: c,
            storeListing: u,
        } = (function (e, t) {
            let { data: n } = eZ(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: a } = eq(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: a, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, d.bG)([P.A], () => P.A.getBasicChannel(a.channel_id)?.guild_id, [a]),
        g = s.useMemo(() => (0, ez.A)(t, 45), [t]),
        p = (0, eY.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eU.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === K.Puh.SUBSCRIPTION,
        E = !!f && (0, eD.bg)(o.flags);
    function _() {
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
                    function a() {
                        n.onClose(), _();
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
        I = f
            ? E
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(N.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          W.intl.string(W.t.wnifjC),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eT.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          W.intl.string(W.t.NRC3ar),
                      ],
                  })
            : u?.description?.trim();
    function v() {
        null != o &&
            eB.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === I && (I = void 0),
        (0, l.jsx)(e0, {
            appName: t.name,
            title: o.name,
            description: I,
            link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, eJ.K)(t.id, eJ.C.SKU_EMBED, i);
            },
            iconSrc: g,
            onIconClick: function () {
                null != o &&
                    (_(),
                    eB.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, l.jsxs)("div", {
                className: eX.w,
                children: [
                    (0, l.jsx)(ep.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (C(),
                                eB.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: W.intl.string(W.t.DXYfjO),
                    }),
                    f
                        ? null != c
                            ? (0, l.jsx)(eK.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: E ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eS.U,
                                  onHasClicked: v,
                                  subscriptionPlan: c,
                                  state: x,
                              })
                            : (0, l.jsx)(ep.$, { variant: "primary", text: W.intl.string(W.t.uuzaAK), onClick: C })
                        : (0, l.jsx)(eK.$P, { appId: t.id, sku: o, icon: eS.U, onHasClicked: v }),
                ],
            }),
        })
    );
}
function e0(e) {
    let { appName: t, title: n, description: i, link: s, iconSrc: a, onIconClick: r, onLinkCopy: o, children: c } = e;
    return (0, l.jsxs)("div", {
        className: eX.iE,
        children: [
            (0, l.jsxs)("div", {
                className: eX.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: eX.qd,
                        children: [
                            (0, l.jsx)(eS.U, { size: "xxs" }),
                            (0, l.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eF.p5 &&
                        (0, l.jsx)(ey.K, {
                            "aria-label": W.intl.string(W.t.WqhZss),
                            icon: () => (0, l.jsx)(eb.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eF.C)(s, () => {
                                    (0, eR.P0)((0, eL.o)(W.intl.string(W.t["L/PwZf"]), eM.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: eX.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eX.oB,
                        children: [
                            null != a &&
                                (0, l.jsx)(ek.D, {
                                    onClick: r,
                                    children: (0, l.jsx)("img", { src: a.href, alt: "", className: eX.Z2 }),
                                }),
                            (0, l.jsxs)("div", {
                                className: eX.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, l.jsx)(p.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, l.jsx)(p.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eX.h_,
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
var e1 = n(401374),
    e2 = n(562708),
    e3 = n(139286);
function e5(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        a = s.useCallback(() => {
            (0, e3.x)({
                type: e2.ImpressionTypes.VIEW,
                name: e2.ImpressionNames.APP_OAUTH2_LINK_EMBED,
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
var e6 = n(778492),
    e4 = n(297264),
    e9 = n(285796),
    e7 = n(857182),
    e8 = n(506774),
    te = n(228366),
    tt = n(576705),
    tn = n(812930);
let ti = "ChannelFollowingBumpChannels",
    tl = new Set(),
    ts = new Set();
class ta extends d.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(O.default, P.A, tt.A, G.default), (tl = new Set(e8.w.get(ti)));
    }
    shouldShowBump(e) {
        return ts.has(e);
    }
}
let tr = new ta(te.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tl.has(t)) return !1;
        let l = P.A.getChannel(t),
            s = G.default.getCurrentUser(),
            a = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === K.rbe.GUILD_ANNOUNCEMENT &&
                (0, tn.A)(n) &&
                tt.A.can(K.xBc.SEND_MESSAGES, l) &&
                (a || tt.A.can(K.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), K.pr7.CROSSPOSTED)
            )
        )
            return !1;
        ts.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        ts.has(t.id) && c.Lt(Number(t.flags), K.pr7.CROSSPOSTED) && ts.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        ts.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        ts.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        tl.add(t), e8.w.set(ti, tl), ts.clear();
    },
});
var to = n(419056),
    tc = n(8216);
let td = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, d.bG)([tr], () => tr.shouldShowBump(n), [n]),
        a = s.useCallback(() => {
            e7.A.dismissPublishBump(n), (0, to.A)(t, n);
        }, [t, n]),
        r = s.useCallback(() => {
            e7.A.dismissPublishBump(n);
        }, [n]),
        o = s.useCallback(() => {
            e7.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, l.jsxs)("div", {
              className: tc.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: tc.mp,
                      children: [
                          (0, l.jsx)(e6.k, { size: "xs", color: "currentColor", className: tc.Kk }),
                          (0, l.jsx)(e4.D, {
                              variant: "heading-sm/normal",
                              className: tc.dS,
                              children: W.intl.string(W.t.hasZoU),
                          }),
                          (0, l.jsx)(p.E, {
                              color: "text-brand",
                              className: tc.mk,
                              variant: "text-sm/normal",
                              children: (0, l.jsx)(ek.D, { onClick: a, children: W.intl.string(W.t.MFGE51) }),
                          }),
                          (0, l.jsx)(ek.D, {
                              onClick: r,
                              children: (0, l.jsx)(e9.a, { size: "xs", color: "currentColor", className: tc.ut }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(p.E, {
                      color: "text-muted",
                      className: tc.qx,
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(ek.D, { onClick: o, children: W.intl.string(W.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tu = n(175671),
    tm = n(435558),
    th = n.n(tm),
    tg = n(239947),
    tp = n(403581),
    tA = n(97808),
    tx = n(778712),
    tf = n(520117),
    tE = n(793943),
    t_ = n(763754),
    tC = n(973654),
    tI = n(467135),
    tv = n(644235),
    tN = n(153469),
    tj = n(693227),
    tT = n(369025);
function tS(e) {
    return e.map((e) => `#${e}`);
}
function ty(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tI.ko)();
    return void 0 === n
        ? null
        : (0, l.jsxs)("div", {
              className: tT.kL,
              children: [
                  (0, l.jsx)(tb, { message: t }),
                  (0, l.jsx)(ep.$, {
                      text: W.intl.string(W.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eB.default.track(K.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tE.nf)(tE.HP.CUSTOM_THEME, { from: tE.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tS(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tC.GQ)((0, tv.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tb(e) {
    var t, n, i;
    let { message: a } = e,
        { sharedClientTheme: r } = a,
        o = (0, t_.Ay)(a),
        c = s.useMemo(
            () =>
                (0, tm.once)(() => {
                    (0, e3.x)({ type: e2.ImpressionTypes.VIEW, name: tg.I.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        d = (0, tf.A)({
            onVisible: () => {
                c();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = s.useMemo(() => (void 0 === r ? "" : (0, tN.V9)(tS(r.colors), r.gradient_angle ?? 0)), [r]);
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: tT.pS,
              ref: d,
              children: [
                  (0, l.jsx)("div", { className: tT.sl, style: { background: `${u}` } }),
                  (0, l.jsxs)("div", {
                      className: tT.Ix,
                      children: [
                          (0, l.jsxs)(e4.D, {
                              variant: "heading-md/semibold",
                              className: tT.qP,
                              children: [W.intl.string(tj.default.KSBBpC), " ", (0, l.jsx)(tp.t, {})],
                          }),
                          (0, l.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tT.Tb,
                              children:
                                  ((t = `${W.intl.format(tj.default.fQPSEf, { username: "__USERNAME__" })}`),
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
                                                        className: tT.H,
                                                        children: [
                                                            (0, l.jsx)(tA.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: tx._3.SIZE_20,
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
var tR = n(892768),
    tL = n(167189),
    tM = n(758836);
let tk = new Set(Object.values(tM.G2).filter((e) => e !== tM.G2.COLLECTION_INDEX));
var tO = n(132500),
    tP = n(172218),
    tD = n(612324),
    tU = n(575593),
    tG = n(269115),
    tw = n(318254),
    tH = n(890856),
    tV = n(866665),
    tB = n(825484),
    tF = n(289873),
    tz = n(444927),
    tJ = n(713517),
    tY = n(427209),
    tK = n(44120),
    tW = n(821925),
    tX = n(309954),
    tZ = n(652165),
    tq = n(158045),
    tQ = n(580630),
    t$ = n(839534),
    t0 = n(440938),
    t1 = n(4227),
    t2 = n(298072),
    t3 = n(993408),
    t5 = n(650959),
    t6 = n(841702),
    t4 = n(466459),
    t9 = n(597783),
    t7 = n(777829),
    t8 = n(859587),
    ne = n(918838),
    nt = n(623373),
    nn = n(536572),
    ni = n(156248),
    nl = n(38405);
class ns extends s.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nl.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var na = n(878112),
    nr = n(722258),
    no = n(268959),
    nc = n(387945),
    nd = n(618317),
    nu = n(140877),
    nm = n(561769),
    nh = n(661847),
    ng = n(139146),
    np = n(540737),
    nA = n(927813);
let nx = 10 * nA.A.Millis.MINUTE,
    nf = new (class {
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
    nE = new Set(),
    n_ = new Map(),
    nC = null;
function nI(e) {
    let t = n_.get(e);
    return null != t && Date.now() - t < nx;
}
var nv = n(347722),
    nN = n(935094),
    nj = n(57020),
    nT = n(61750),
    nS = n(521e3),
    ny = n(202541),
    nb = n(274237);
function nR() {
    return (0, t6.b5)(), null;
}
function nL(e) {
    let { disableFetch: t } = e;
    return (0, tX.W)({ disableFetch: t }), null;
}
function nM(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: a, checkoutEligiblePrices: r } = (0, nj.F)({ product: t, hasShopDiscount: n }),
        o = r[0],
        c = t.skuId,
        d = s.useCallback(() => {
            a
                ? (0, tZ.B4)({
                      skuId: c,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          (0, t$.gB)(),
                              (0, nT.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tM.gs.ORB,
                              });
                      },
                  })
                : (0, tK.A)({
                      skuId: c,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, t$.gB)();
                      },
                  });
        }, [t, c, a, i]);
    if (null == o) return null;
    let u = a
        ? W.intl.format(W.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, l.jsx)(tw.C, { className: nb.fN, size: "sm", color: "currentColor" }),
          })
        : W.intl.formatToPlainString(W.t["cNSL/j"], { price: (0, tQ.$g)(o.amount, o.currency) });
    return (0, l.jsx)(ep.$, { variant: "primary", onClick: d, text: u, fullWidth: !0 });
}
function nk(e) {
    let { product: t, skuId: n, tab: i, channel: a } = e,
        { analyticsLocations: o } = (0, f.Ay)(),
        c = (0, d.bG)([G.default], () => G.default.getCurrentUser()),
        u = a.isDM() || a.isGroupDM(),
        m = s.useRef(null),
        { isHoveringOrFocusing: h } = (0, tJ.A)(m),
        g = s.useRef(null),
        p = (0, ne.U)(t),
        A = (0, tD.A)(g, p),
        { handleCardVisibilityChange: x } = (0, t9.Z)(n, i === tM.G2.CATALOG ? "full" : i);
    (0, t8.x)(h, t);
    let { previewingVariantIndex: E, handleEntering: _, handleLeaving: C } = (0, nN.f)(t),
        I = s.useRef(!1);
    s.useEffect(() => {
        if (I.current || !(0, nt.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        e > -1 && (0, t2.n)(t, e), (I.current = !0);
    }, [t, n]);
    let v = (0, t2.Q)(t),
        N = (0, nt.B1)(t) ? (t.variants[v] ?? t) : t,
        j = N.skuId,
        { isPurchased: T } = (0, t4.h)(N),
        S = (0, d.bG)([t1.A], () => t1.A.hasPreviouslyFetched || null != t1.A.fetchError),
        y = !u || S,
        b = u && T,
        R = (0, d.bG)([G.default], () => {
            if (!a.isDM() || null == a.recipients) return;
            let e = G.default.getCurrentUser()?.id,
                t = a.recipients.find((t) => t !== e) ?? a.recipients[0];
            return null != t ? (G.default.getUser(t) ?? void 0) : void 0;
        }),
        L = (0, nv.X)(N),
        M = (0, t7.f)({ product: t, analyticsLocations: o }),
        k = (0, ni.G)({
            skuId: j,
            product: N,
            productName: (0, nn.VG)(N),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: M,
        }),
        O = s.useCallback(
            (e) => {
                e.stopPropagation(), k();
            },
            [k],
        ),
        P = s.useCallback(() => {
            (0, nr.B)({ skuId: j, tab: i, analyticsLocations: o });
        }, [j, i, o]),
        D = s.useMemo(() => ({ maxVariantsToShow: 4, onClick: P }), [P]),
        U = s.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        w = null != c && tq.Ay.canUseShopDiscounts(c),
        H = y && !b && !(0, t3.G0)(N),
        V = (0, l.jsx)(ep.$, { variant: "secondary", onClick: P, text: W.intl.string(W.t.KLBTgF), fullWidth: !0 }),
        B = H ? (0, l.jsx)(nM, { product: N, hasShopDiscount: w, analyticsLocations: o }) : null,
        F = L
            ? (0, l.jsx)(na.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: v,
                  giftRecipient: R,
                  giftingOrigin: ny.vQ.SHOP_PAGE,
              })
            : null;
    return (0, l.jsxs)("div", {
        ref: m,
        className: nb.kL,
        children: [
            u && (0, l.jsx)(nR, {}),
            (0, l.jsx)(nL, { disableFetch: !(0, nt.Vx)(N) }),
            (0, l.jsxs)(nm.v3.Provider, {
                value: U,
                children: [
                    (0, l.jsx)(tG.L, {
                        innerRef: g,
                        onChange: x,
                        threshold: 0,
                        children: (0, l.jsx)(nS.vf.Provider, {
                            value: (0, nS.$c)(t.skuId) ? g : null,
                            children: (0, l.jsxs)(tH.s, {
                                ref: A,
                                onClick: P,
                                "aria-label": (0, nn.s7)(N),
                                className: nb.xX,
                                children: [
                                    t.type === tU.R.BUNDLE &&
                                        t.previewAssets?.bgStatic != null &&
                                        (0, l.jsx)("img", { className: nb.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                    (0, l.jsx)("div", {
                                        className: nb.VH,
                                        children: (0, l.jsx)(nd.A, {
                                            skuId: n,
                                            isCardHovered: h,
                                            overrideVariantIndex: E,
                                        }),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: nb.GJ,
                                        children: [
                                            (0, l.jsx)(no.A, { skuId: n }),
                                            (0, l.jsxs)("div", {
                                                className: nb.gj,
                                                children: [
                                                    (0, l.jsx)(tV.m, {
                                                        text: W.intl.string(W.t.RDE0Sc),
                                                        ariaHidden: !0,
                                                        children: (0, l.jsx)(ek.D, {
                                                            "aria-label": W.intl.string(W.t.Ej3B3Y),
                                                            onClick: O,
                                                            className: r()(nb.VD, { [nb.Hk]: !h }),
                                                            children: (0, l.jsx)(tY.A, {
                                                                size: "refresh_sm",
                                                                color: "currentColor",
                                                            }),
                                                        }),
                                                    }),
                                                    (0, l.jsx)(ng.R, {
                                                        product: t,
                                                        selectedVariantIndex: v,
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
                    }),
                    (0, l.jsxs)("div", {
                        className: nb.zH,
                        children: [
                            (0, l.jsxs)("div", {
                                className: nb.pq,
                                children: [
                                    (0, l.jsx)(nc.A, { skuId: n }),
                                    (0, l.jsxs)("div", {
                                        className: nb.y3,
                                        children: [
                                            (0, l.jsx)(nu.A, { skuId: n }),
                                            (0, l.jsx)(nh.A, {
                                                skuId: n,
                                                isCollapsed: !h,
                                                onVariantEnter: _,
                                                onVariantExit: C,
                                                overflowProps: D,
                                                onTrackClick: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(tB.e, { wrap: !1, fullWidth: !0, children: [V, B, F] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nO = { rootMargin: "200px" };
function nP(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t5.I)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        a = (0, d.bG)([tW.A], () => tW.A.getFetchStateForSku(e.skuId)),
        r = (0, tz.A)(() => ({ cardId: (0, tO.A)() })),
        [o, c] = s.useState(!1),
        u = (0, tP.B)(
            s.useCallback((e) => {
                e.isIntersecting && c(!0);
            }, []),
            nO,
            "loading" === i && !o,
        );
    return (s.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nE.has(t) || nI(t)) &&
            !(nE.size >= 50) &&
            (0, np.jn)(t) &&
            (nE.add(t),
            (function e(t) {
                null == nC &&
                    (nC = setTimeout(() => {
                        (nC = null),
                            (function () {
                                for (let e of [...nE]) (nI(e) || !(0, np.jn)(e)) && nE.delete(e);
                                if (0 === nE.size) return;
                                let t = [];
                                for (let e of nE) {
                                    if (t.length >= 50 || !nf.tryTake()) break;
                                    t.push(e),
                                        nE.delete(e),
                                        (function (e) {
                                            if ((n_.set(e, Date.now()), n_.size > 2e3)) {
                                                let e = n_.keys().next().value;
                                                null != e && n_.delete(e);
                                            }
                                        })(e);
                                }
                                t.length > 0 && (0, np.tu)({ skuIds: t }),
                                    nE.size > 0 && e(Math.max(nf.getMsUntilAvailable(), 300));
                            })();
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== a && nI(e.skuId)
            ? null
            : (0, l.jsx)("div", {
                  ref: u,
                  className: nb.kL,
                  children: (0, l.jsx)("div", { className: nb.dc, children: (0, l.jsx)(tF.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, l.jsx)(t0.R9, { newValue: r, children: (0, l.jsx)(nk, { ...e, product: t }) })
          : null;
}
function nD(e) {
    return (0, l.jsx)(ns, { children: (0, l.jsx)(nP, { ...e }) });
}
var nU = n(661531),
    nG = n(696986),
    nw = n(95561),
    nH = n(548118),
    nV = n(250627),
    nB = n(741231),
    nF = n(749314),
    nz = n(71393),
    nJ = n(722888),
    nY = n(43136),
    nK = n(575926),
    nW = n(824764);
function nX(e) {
    let { guildId: t } = e,
        n = (0, d.bG)([nz.A], () => nz.A.getGuild(t)),
        { loading: i, subscriptionsSettings: a } = (0, nJ.G)(t),
        { listingsLoaded: o } = (0, nV.bb)(t),
        c = (0, nV.fZ)(t, { publishedOnly: !0 }),
        u = s.useCallback(async () => {
            eB.default.track(K.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nw.H$)(t) }),
                await (0, nB.A)(K.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e3.A)(
        { type: e2.ImpressionTypes.VIEW, name: e2.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = c.length > 0 ? new Date(Math.min(...c.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !o
        ? (0, l.jsx)("div", { className: r()(nW.lm, nW.dc), children: (0, l.jsx)(tF.y, {}) })
        : null == n || null == a
          ? null
          : (0, l.jsxs)("div", {
                className: nW.lm,
                children: [
                    (0, l.jsx)(nY.C, { coverImageAsset: a.cover_image_asset ?? null }),
                    (0, l.jsx)(nG.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nW.qs,
                        children: [
                            (0, l.jsx)(nK.h, {
                                height: "16px",
                                width: "16px",
                                color: nU.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, l.jsx)(e4.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nW.Nl,
                                children: W.intl.string(W.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nG.h, { size: 16 }),
                    (0, l.jsx)(e4.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: W.intl.format(W.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, l.jsx)(nG.h, { size: 4 }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: a.description,
                    }),
                    (0, l.jsx)(nG.h, { size: 16 }),
                    (0, l.jsx)(nF.A, {}),
                    (0, l.jsx)(nG.h, { size: 16 }),
                    (0, l.jsxs)("div", {
                        className: nW.kS,
                        children: [
                            (0, l.jsx)(nH.Ay, { guild: n }),
                            (0, l.jsxs)("ul", {
                                className: nW.q6,
                                children: [
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: W.intl.format(W.t.tKZNlb, { listingCount: c.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(p.E, {
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
                                className: nW.$h,
                                children: (0, l.jsx)(ep.$, { onClick: u, icon: nK.A, text: W.intl.string(W.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nZ = n(390248),
    nq = n(282108),
    nQ = n(33358),
    n$ = n(885574),
    n0 = n(743093);
function n1(e) {
    let { message: t } = e;
    return (0, l.jsxs)(ek.D, {
        onClick: function () {
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, l.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: n0.L,
        children: [
            (0, l.jsx)(n$.m, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(p.E, { variant: "text-xs/normal", className: n0.m, children: W.intl.string(W.t["2aXnfa"]) }),
        ],
    });
}
var n2 = n(974875),
    n3 = n(900019);
function n5(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, d.bG)([n3.A], () => n3.A.canSubmitFpReport(t)),
        a = s.useCallback(() => {
            (0, n2.Q)(n, t);
        }, [n, t]);
    return (0, l.jsx)(ep.$, { variant: "secondary", text: W.intl.string(W.t["4q1Elf"]), onClick: a, disabled: !i });
}
var n6 = n(320448),
    n4 = n(713654),
    n9 = n(958340),
    n7 = n(384231),
    n8 = n(959698),
    ie = n(438729),
    it = n(375199),
    ii = n(886737),
    il = n(699352),
    is = n(8455),
    ia = n(885386),
    ir = n(540999),
    io = n(47167),
    ic = n(58703),
    id = n(427930);
function iu(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: W.intl.formatToPlainString(W.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class im {
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
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nz.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : n9.A,
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
                          accessibilityLabel: W.intl.formatToPlainString(W.t["+l04BN"], { origin: u, timestamp: c }),
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
async function ip(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = P.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nz.A.getGuild(t))
        try {
            await (0, ig.Z2)(t, { object: K.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, ih.k)(t),
                (l = P.A.getChannel(n));
        } catch {}
    eB.default.track(K.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: P.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let a = s ? n : void 0;
    (0, nB.A)(K.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: a });
}
var iA = n(387408),
    ix = n(513679);
function iE() {
    return (0, l.jsxs)("div", {
        className: ix.N1,
        children: [
            (0, l.jsx)(tY.A, { size: "xs", className: ix.nr, color: nU.A.colors.TEXT_MUTED }),
            (0, l.jsx)(p.E, {
                className: ix.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: W.intl.string(W.t.ToyvLk),
            }),
        ],
    });
}
function i_(e) {
    let { message: t, snapshot: n, index: i } = e,
        a = s.useMemo(() => new im(t, n, i), [t, n, i]),
        r = (0, d.bG)(
            [P.A, G.default, D.A, tt.A, nz.A, n9.A],
            () => a.getForwardInfo(P.A, G.default, D.A, tt.A, nz.A, n9.A).footerInfo,
            [a],
            m.A,
        ),
        o = (0, d.bG)([P.A], () => P.A.getChannel(t.messageReference?.channel_id)),
        c = s.useCallback(() => {
            ip(t);
        }, [t]);
    return null == r
        ? null
        : (0, l.jsxs)(ek.D, {
              className: ix.xQ,
              onClick: c,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, l.jsx)("img", { className: ix.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  null == r.originIconUrl && o?.isThread() ? (0, l.jsx)(iC, { channel: o }) : null,
                  (0, l.jsx)(p.E, {
                      className: ix.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, l.jsx)(n6._, { size: "xxs", color: nU.A.colors.TEXT_MUTED }),
              ],
          });
}
function iC(e) {
    let { channel: t } = e,
        n = (0, is.Vp)({ location: "ForwardFooter" }),
        i = s.useMemo(() => (0, n4.gU)(t), [t]);
    return n.enabled && null != i ? (0, l.jsx)(i, { className: ix.yl, size: "xs", color: "currentColor" }) : null;
}
function iI(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: a } = e,
        r = s.useMemo(() => (0, iA.A)(t, n), [t, n]),
        o = ia.hD.useSetting(),
        c = ia.rs.useSetting(),
        u = (0, d.bG)([ir.A], () => ir.A.isDeveloper),
        m = (0, n8.U)(),
        h = (0, n7.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, it.A)(r, {
            hideSimpleEmbedContent: o && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: u,
            previewLinkTarget: !0,
            postProcessor: m ? ii.A : void 0,
        }),
        x = (0, d.bG)([P.A], () => P.A.getChannel(t.channel_id)),
        f = ia.hH.useSetting();
    return null == x
        ? null
        : (0, l.jsxs)(
              "div",
              {
                  className: ix.kL,
                  children: [
                      (0, l.jsx)("div", { className: ix.hD }),
                      (0, l.jsxs)("div", {
                          className: ix.Qs,
                          children: [
                              (0, l.jsx)(iE, {}),
                              (0, l.jsx)(ie.Ay, { message: r, content: g, compact: f }),
                              (0, il.A)({
                                  channelMessageProps: { message: r, channel: x, compact: f },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: a,
                              }),
                              !m && (0, l.jsx)(i_, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function iv(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, l.jsx)(iI, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var iN = n(109112),
    ij = n(508770),
    iT = n(369606),
    iS = n(409626),
    iy = n(49491),
    ib = n(692969),
    iR = n(738250),
    iL = n(542151);
function iM(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: s,
            bannerUrl: a,
            openGameProfile: r,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, iR.A)({ gameId: t }),
                a = (0, ib.A)({ gameId: t, source: iS.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                r = (0, iy.A)(l),
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
        ? (0, l.jsxs)(tH.s, {
              className: iL.E6,
              onClick: r,
              "aria-label": W.intl.formatToPlainString(W.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, l.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iL.yl,
                      children: [
                          null != a &&
                              (0, l.jsx)("div", { className: iL.Tp, style: { backgroundImage: `url("${a}")` } }),
                          (0, l.jsx)("div", { className: iL.N4 }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: iL.rf,
                      children: [
                          null != s
                              ? (0, l.jsx)("img", { src: s, alt: "", className: iL.Kk, draggable: !1 })
                              : (0, l.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iL.EU,
                                    children: (0, l.jsx)(iN._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, l.jsxs)("div", {
                              className: iL.Qs,
                              children: [
                                  (0, l.jsx)(e4.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, l.jsx)("div", {
                                          className: iL.k3,
                                          children: (0, l.jsx)(ij.E, {
                                              variant: "default",
                                              type: {
                                                  text: W.intl.formatToPlainString(W.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: iT.O,
                                          }),
                                      }),
                              ],
                          }),
                          (0, l.jsx)(ey.K, {
                              icon: n6._,
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
var ik = n(281445),
    iO = n(554146),
    iP = n(933832),
    iD = n(624479),
    iU = n(780907),
    iG = n(131607),
    iw = n(569926),
    iH = n(95035),
    iV = n(403362),
    iB = n(196736),
    iF = n(614393),
    iz = n(143407),
    iJ = n(685743),
    iY = n(349085),
    iK = n(581453),
    iW = n(342942),
    iX = n(174861),
    iZ = n(49999),
    iq = n(275695),
    iQ = n(694220);
function i$(e) {
    let { code: t } = e,
        n = s.useMemo(() => (0, iX.GF)(t), [t]);
    s.useEffect(() => {
        iU.Ay.getDetectableGames();
    }, []);
    let i = (0, iY.A)(n?.game_id, "cover"),
        { data: a } = (0, iw.I)(n?.game_id),
        r = (0, iB.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [c, d] = (0, iG.kn)([iO.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = c !== iO.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? ik.X.SHOCKBYTE,
        h = O.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: A, animateCopyIcon: f } = (0, iJ.A)(h, "0", x.A.GAME_SERVER_PAGE, g ?? ""),
        E = s.useCallback(() => {
            (0, t$.Cz)({
                tab: tM.G2.GAME_SERVERS,
                analyticsLocations: [x.A.GAME_SERVER_PAGE],
                analyticsSource: x.A.GAME_SERVER_PAGE,
            });
        }, []),
        _ = s.useMemo(
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
            null != _ &&
                (u
                    ? (0, iK.A)(h, _)
                    : (0, iW.A)({
                          provider: m,
                          onAccept: () => {
                              d(iZ.i.TAKE_ACTION), (0, iK.A)(h, _);
                          },
                      }));
        }, [_, u, m, d, h]),
        I = s.useCallback(() => {
            (0, iW.A)({
                provider: m,
                onAccept: () => {
                    d(iZ.i.TAKE_ACTION), A();
                },
            });
        }, [m, d, A]);
    if (null == n) return null;
    let v = [a?.name, n.plan_name].filter(iV.Vq).join("  \u2022  ");
    return (0, l.jsxs)("div", {
        className: iQ.E6,
        children: [
            (0, l.jsxs)("div", {
                className: iQ.FG,
                children: [
                    (0, l.jsxs)("div", {
                        className: iQ.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: iQ.oL,
                                children: [
                                    "" !== o
                                        ? (0, l.jsx)("img", { className: iQ.vT, src: o, alt: "" })
                                        : (0, l.jsx)("div", {
                                              className: iQ.iv,
                                              children: (0, l.jsx)(p.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, l.jsx)("div", { className: iQ.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: iQ.TK,
                                children: [
                                    (0, l.jsx)(e4.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== v &&
                                        (0, l.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: v,
                                        }),
                                ],
                            }),
                            r &&
                                (0, l.jsx)("div", {
                                    className: iQ.xG,
                                    children: (0, l.jsx)(ey.K, {
                                        variant: "secondary",
                                        icon: eS.U,
                                        "aria-label": W.intl.string(iq.default.F5W36W),
                                        onClick: E,
                                    }),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: iQ.$D,
                        children: [
                            (0, l.jsxs)("div", {
                                className: iQ.lj,
                                children: [
                                    (0, l.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: W.intl.string(iq.default.mJlz3T),
                                    }),
                                    (0, l.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children:
                                            null != n.region_name && "" !== n.region_name ? n.region_name : "\u2014",
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: iQ.lj,
                                children: [
                                    (0, l.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: W.intl.string(iq.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, l.jsx)(p.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, l.jsxs)("div", {
                                                className: iQ.qy,
                                                children: [
                                                    (0, l.jsx)(p.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, l.jsx)(ek.D, {
                                                        className: iQ.cL,
                                                        "aria-label": W.intl.string(W.t.OpuAlK),
                                                        onClick: A,
                                                        children: f
                                                            ? (0, l.jsx)(iP.A, { size: "sm" })
                                                            : (0, l.jsx)(iD.T, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, l.jsx)(iH.A, {
                                                onClick: I,
                                                children: W.intl.string(iq.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != _ && (0, l.jsx)("div", { className: iQ.PD, children: (0, l.jsx)(iz.l5, { onClick: C }) }),
                ],
            }),
            (0, l.jsx)("div", { className: iQ.uV, children: (0, l.jsx)(iF.T, { imageUrl: o }) }),
        ],
    });
}
var i0 = n(643612),
    i1 = n(607399),
    i2 = n(702841),
    i3 = n(529200),
    i5 = n(395671),
    i6 = n(993748),
    i4 = n(212534),
    i9 = n(665845);
function i7(e) {
    let { code: t, message: n } = e,
        [i, a, r] = (0, i2.yK)(
            [i4.A],
            () => [i4.A.getApplication(t), i4.A.isInvalidApplication(t), i4.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, i2.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [c, d] = s.useState(!1),
        u = s.useCallback((e) => {
            e && d(!0);
        }, []),
        m = (0, tP.K)(u),
        h = s.useCallback(() => {
            eB.default.track(K.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: i1.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (s.useEffect(() => {
        (0, i6.eP)(t);
    }, [t]),
    s.useEffect(() => {
        c && r === i4.e.FETCHED && h();
    }, [c, r, h]),
    s.useEffect(() => {
        c &&
            a &&
            eB.default.track(K.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: i1.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [c, o, a, n.author.id, n.channel_id]),
    a)
        ? (0, l.jsxs)(i3.A, {
              containerRef: m,
              children: [
                  (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t.j4KtLa) }),
                  (0, l.jsx)(i3.A.Body, {
                      children: (0, l.jsxs)("div", {
                          className: i9.k,
                          children: [
                              (0, l.jsx)(i3.A.Icon, { expired: !0 }),
                              (0, l.jsx)(i3.A.Info, {
                                  expired: !0,
                                  title: W.intl.string(W.t.NaQLEx),
                                  children: W.intl.string(W.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || r === i4.e.FETCHING
          ? (0, l.jsxs)(i3.A, {
                containerRef: m,
                children: [
                    (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t.m9hXGR) }),
                    (0, l.jsx)(i3.A.Body, { resolving: !0 }),
                ],
            })
          : (0, l.jsx)(el, { app: i5.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var i8 = n(229527),
    le = n(870136),
    lt = n(330075),
    ln = n(412728);
function li(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        s = (0, nV.Qi)(n, i),
        a = (0, i2.bG)([U.A], () => U.A.getGuildId());
    return ((0, e3.A)(
        {
            type: ln.z.VIEW,
            name: e2.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: s?.has_entitlement === !0 },
        },
        { disableTrack: null == s },
    ),
    null == s || a !== n)
        ? null
        : (0, l.jsx)(lt.i, {
              guildProductListing: s,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var ll = n(484724),
    ls = n(953727);
function la(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, ls.A)(s),
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
var lr = n(122906),
    lo = n(401755),
    lc = n(702948),
    ld = n(941836);
function lu(e) {
    let { code: t } = e,
        i = (0, d.bG)([lr.A], () => lr.A.getGuildTemplate(t));
    if (null == i || i.state === lo.QB.RESOLVING)
        return (0, l.jsxs)(i3.A, {
            children: [
                (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t.Xj87Yf) }),
                (0, l.jsx)(i3.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lo.QB.EXPIRED)
        return (0, l.jsxs)(i3.A, {
            children: [
                (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t.C7ZRNw) }),
                (0, l.jsxs)(i3.A.Body, {
                    children: [
                        (0, l.jsx)(i3.A.Icon, { expired: !0 }),
                        (0, l.jsx)(i3.A.Info, { expired: !0, title: W.intl.string(W.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let s = __OVERLAY__
        ? (0, l.jsx)(ep.$, { disabled: !0, variant: "secondary", text: W.intl.string(W.t.W7NTWm) })
        : (0, l.jsx)(ep.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lo.QB.RESOLVING &&
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
              loading: i.state === lo.QB.ACCEPTING,
              variant: "active",
              text: W.intl.string(W.t["a3Gl+e"]),
          });
    return (0, l.jsxs)(i3.A, {
        children: [
            (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t.kAvFkO) }),
            (0, l.jsxs)(i3.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: ld.iH,
                        children: [
                            (0, l.jsx)(la, { className: lc.K }),
                            (0, l.jsx)(i3.A.Info, {
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
var lm = n(842241),
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
var lA = n(844789),
    lx = n(857071),
    lf = n(46054),
    lE = n(731068),
    l_ = n(619517),
    lC = n(207133),
    lI = n(844222),
    lv = n(463930),
    lN = n(251391),
    lj = n(601255),
    lT = n(562819),
    lS = n(234914),
    ly = n(59318),
    lb = n(837528),
    lR = n(754459),
    lL = n(967144),
    lM = n(342296),
    lk = n(696451),
    lO = n(218394);
function lP(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...s } = e;
    return (0, l.jsx)("svg", {
        ...(0, ls.A)(s),
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
var lD = n(717125),
    lU = n(376943),
    lG = n(36491),
    lw = n(752755),
    lH = n(461715),
    lV = n(381941),
    lB = n(531128);
function lF(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        a = s.useRef(null),
        o = s.useRef(null),
        c = (function (e, t) {
            let n = (0, lH.CI)(e),
                i = (0, i2.bG)([lk.Ay, O.default], () => {
                    let e = O.default.getId();
                    return lk.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, i2.bG)(
                    [lD.A],
                    () => null != n && n?.channelId != null && lD.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                a = t.hasFlag(K.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: o,
                    parentChannel: c,
                    user: d,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, i2.cf)([lw.A, nz.A, P.A, G.default, U.A], () => {
                    let e = lw.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = nz.A.getGuild(n?.guildId),
                        i = P.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        a = null != i && (0, lU.nc)(i);
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
                    let e = (0, lH.tU)({
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
                        (lw.A.getEmbedFetchState(n.threadId) !== lw.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && a) ||
                            (0, lG.O0)(n?.threadId));
                }, [n, i, l, a]),
                h
            );
        })(t, n),
        { setPopout: d } = (0, lR.A)(n.id, lV.Fd),
        u = (0, lb.VL)(n, i, d, !0),
        m = ia.kt.useSetting(),
        h = (0, lO.j)(),
        [g, A] = s.useState(!1),
        [f, E] = s.useState(c?.coverImage == null),
        _ = (0, i2.bG)([lk.Ay, G.default], () => lk.Ay.isMember(c?.guildId, G.default.getCurrentUser()?.id), [c]),
        C = (0, i2.bG)([lk.Ay], () => (c?.authorId != null ? lk.Ay.getMember(c.guildId, c.authorId) : null)),
        I = (0, lj.A)(C?.avatarDecoration != null ? C?.avatarDecoration : c?.user?.avatarDecoration),
        [v, N, j] = s.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, lL.gn)(C?.guildId, c?.authorId ?? void 0, N),
        { reducedMotion: S } = s.useContext(lI.C),
        [y, b] = s.useState(!1),
        R = s.useCallback(() => {
            A(!0);
        }, [A]),
        L = s.useCallback(() => {
            A(!1);
        }, [A]),
        M = s.useCallback(async () => {
            null != c &&
                ((0, nw.zV)(K.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: c.threadId,
                    channel_id: i.id,
                    can_access: c.canAccess,
                    is_member: _,
                }),
                c.canAccess
                    ? (0, nB.A)(K.BVt.CHANNEL(c.guildId, c.threadId, c.messageId))
                    : _
                      ? (0, nB.A)(K.BVt.CHANNEL(c.guildId, c.parentChannelId))
                      : await ig.Z2(c.guildId, {}, { channelId: c.parentChannelId }));
        }, [c, i, _]);
    if (null == c) return null;
    let k = (0, w.F_)({ avatarDecoration: I, size: (0, lT.Te)(tx._3.SIZE_40), canAnimate: y }),
        D = c.user?.getAvatarURL(c.guildId, 40, y);
    function H() {
        S.enabled || b((e) => !e);
    }
    let V = c.coverImage,
        B = null != V && (0, ly.ge)(V);
    return (0, l.jsxs)("div", {
        className: lB.wb,
        children: [
            (0, l.jsxs)("div", {
                className: lB.iT,
                onMouseEnter: R,
                onMouseLeave: L,
                children: [
                    !f &&
                        (!0 === c.shouldShowBlurredThumbnailImage
                            ? (0, l.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: W.intl.string(W.t.rIbh8H),
                                  className: r()(lB.xn, { [lB.p6]: c.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, l.jsx)(lS.A, {
                                  src: !(h && (m || g)) && B ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: W.intl.string(W.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(lB.xn, { [lB.p6]: c.shouldSpoiler }),
                                  imageChildClassName: lB.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != c.coverImageOverlayText &&
                        (0, l.jsx)(ek.D, {
                            onClick: M,
                            children: (0, l.jsx)("div", {
                                className: lB.nx,
                                children: (0, l.jsxs)("div", {
                                    className: lB.BS,
                                    children: [
                                        (0, l.jsx)(lP, { color: nU.A.colors.WHITE.css }),
                                        (0, l.jsx)(p.E, {
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
                className: lB.iQ,
                children: [
                    (0, l.jsxs)("div", {
                        className: lB.OA,
                        children: [
                            (0, l.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lB.hF,
                                children: c.title,
                            }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(lB.hF, lB.Fq),
                                children: c.subtitle,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: lB._5,
                        children: [
                            null != c.authorId &&
                                null != D &&
                                (0, l.jsx)(lM.A, {
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
                                            children: (0, l.jsx)(tA.eu, {
                                                ...e,
                                                ref: o,
                                                size: tx._3.SIZE_40,
                                                src: D,
                                                "aria-label": W.intl.string(W.t.KXz3XB),
                                                avatarDecoration: k,
                                            }),
                                        }),
                                }),
                            (0, l.jsxs)("div", {
                                className: lB.Ny,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: lB.O9,
                                        children: [
                                            null != c.channelName &&
                                                (0, l.jsx)(lN.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lB.Xg,
                                                }),
                                            (0, l.jsx)(ek.D, {
                                                onClick: M,
                                                className: lB.HA,
                                                children: (0, l.jsx)(e4.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: c.channelName ?? c.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != c.authorName &&
                                        (0, l.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lB.wn,
                                            children: W.intl.format(W.t.voIDKa, {
                                                authorName: c.authorName,
                                                authorNameHook: function () {
                                                    return null == c
                                                        ? null
                                                        : null == c.authorId
                                                          ? (0, l.jsx)(lv.V, {
                                                                name: c.authorName,
                                                                colorString: v,
                                                                colorStrings: T,
                                                                className: lB.fh,
                                                            })
                                                          : (0, l.jsx)(
                                                                lM.A,
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
                                                                        (0, l.jsx)(lv.V, {
                                                                            ...e,
                                                                            ref: a,
                                                                            name: c.authorName,
                                                                            colorString: v,
                                                                            colorStrings: T,
                                                                            className: lB.fh,
                                                                        }),
                                                                },
                                                                (0, tO.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            c.canAccess
                                ? (0, l.jsx)(ep.$, { variant: "primary", onClick: M, text: c.ctaText })
                                : (0, l.jsx)(ep.$, { onClick: M, variant: "primary", text: c.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lz = n(492230),
    lJ = n(68935),
    lY = n(704413),
    lK = n(537039),
    lW = n(711038),
    lX = n(892340),
    lZ = n(803306),
    lq = n(491182),
    lQ = n(622868),
    l$ = n(10364),
    l0 = n(378570),
    l1 = n(138298),
    l2 = n(761640),
    l3 = n(989349),
    l5 = n.n(l3),
    l6 = n(606049),
    l4 = n(943815),
    l9 = n(447215),
    l7 = n(221314),
    l8 = n(676043),
    se = n(281867),
    st = n(513653);
let sn = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: a, messageId: o, reportedTimestamp: c } = e,
        d = G.default.getUser(t),
        u = s.useMemo(() => (i ? (0, l4.A)((0, ic.i$)(l5()(), "LT")) : null), [i]),
        m = (0, l9.P)({ user: d, channelId: a.id, guildId: n, messageId: o })((0, t_.m2)(d, a)),
        h = null != d ? d.getAvatarURL(n, (0, tx.FT)(tx._3.SIZE_16)) : st,
        g =
            null != d
                ? W.intl.format(l7.default["+zqXZs"], { username: d.username, onUserClick: m })
                : W.intl.string(l7.default.xpRjfS);
    return (0, l.jsxs)("div", {
        className: r()(se.NB, se.JZ, u),
        children: [
            (0, l.jsx)(tA.eu, { src: h, size: tx._3.SIZE_16, className: l8.my, "aria-label": "" }),
            (0, l.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: l8.Xh, children: g }),
            (0, l.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, l.jsx)("span", { className: l8.Ek, children: "\u2022" }),
                    (0, l.jsx)(l6.A, { timestamp: c, className: l8.vE }),
                ],
            }),
        ],
    });
};
var si = n(204940);
function sl(e) {
    let { message: t, snapshot: n, index: i } = e,
        a = s.useMemo(() => new im(t, n, i), [t, n, i]),
        r = (0, d.bG)(
            [P.A, G.default, D.A, tt.A, nz.A, n9.A],
            () => a.getForwardInfo(P.A, G.default, D.A, tt.A, nz.A, n9.A).footerInfo,
            [a],
            m.A,
        ),
        o = s.useCallback(() => {
            let e = P.A.getChannel(t.channel_id),
                n = nz.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.Ay.getCurrentlySelectedChannelId(),
                s = l2.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                a = l === i && s === e?.id;
            null == e ||
                null == n ||
                a ||
                null == i ||
                (l1.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, l0.iN)(i),
                eB.default.track(K.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == r
        ? null
        : (0, l.jsxs)(ek.D, {
              className: si.xQ,
              onClick: o,
              "aria-label": r.accessibilityLabel,
              children: [
                  null != r.originIconUrl
                      ? (0, l.jsx)("img", { className: si.yl, src: r.originIconUrl, alt: "" })
                      : null,
                  (0, l.jsx)(p.E, {
                      className: si.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${r.originLabel}  \u{2022}  ${r.timestampLabel}`,
                  }),
                  (0, l.jsx)(n6._, { size: "xxs", color: nU.A.colors.TEXT_MUTED }),
              ],
          });
}
function ss(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: a, reportedTimestamp: r } = e,
        o = (0, t_.m2)(t.author, i),
        {
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lR.A)(e.id, lV.Fd),
                { usernameProfile: l, avatarProfile: a } = n,
                r = (0, lb.m)(e, t, l, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, lb.Jo)(a, i),
                onPopoutRequestClose: s.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: a,
            };
        })(t, i);
    return (0, l.jsx)(lq.A, {
        childrenExecutedCommand: (0, l.jsx)(sn, {
            reportingUserId: a,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: r,
            compact: !1,
        }),
        childrenHeader: (0, l.jsx)(lQ.Ay, {
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
            renderPopout: l$.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, l.jsx)(ie.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: si.iU,
        author: o,
    });
}
function sa(e) {
    let { message: t, snapshot: n, index: i } = e,
        [a, r] = s.useState(void 0);
    s.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lZ.getUser)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    r(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = s.useMemo(() => {
            let e = (0, iA.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = ia.hD.useSetting(),
        u = ia.rs.useSetting(),
        m = (0, d.bG)([ir.A], () => ir.A.isDeveloper),
        h = (0, n7.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, it.A)(o, {
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
                  className: si.kL,
                  children: (0, l.jsxs)("div", {
                      className: si.Qs,
                      children: [
                          (0, l.jsx)(ss, {
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
                              className: si.Mf,
                          }),
                          (0, l.jsx)(sl, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sr(e) {
    let { message: t } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, l.jsx)(sa, { message: t, snapshot: e, index: n }, n)),
    });
}
var so = n(302031),
    sc = n(738188),
    sd = n(123292),
    su = n(239093),
    sm = n(230709);
function sh(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === su.AT.CLASSIFICATION_ID) ?? void 0,
        s = i?.rawValue ?? void 0,
        a = t.fields?.find((e) => e.rawName === su.AT.INCIDENT_TIMESTAMP) ?? void 0,
        r = null == a || null == a.rawValue ? void 0 : parseFloat(a.rawValue);
    return null == s || null == r
        ? null
        : (0, l.jsxs)(ek.D, {
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
                                  source: su.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sm.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: sm.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: sm.U1,
                              children: [
                                  (0, l.jsx)(sc.i, { className: sm.QW, color: nU.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, l.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: W.intl.string(W.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: sm.VU,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: W.intl.format(W.t.eevFb6, { daysAgo: l5()().diff(l5().unix(r), "days") }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: sm.vv,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: sm.xQ,
                      children: (0, l.jsx)(sd.Q, { text: W.intl.string(W.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sg = n(349288),
    sp = n(393033),
    sA = n(445673);
function sx(e) {
    let { classificationId: t } = e;
    return (0, l.jsx)(sg.Anchor, {
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
                        source: su.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: sA.zh,
        children: W.intl.string(W.t.QsqdXC),
    });
}
function sf(e) {
    let { learnMoreLink: t } = e;
    return (0, l.jsx)(sg.Anchor, { className: sA.zh, href: t, children: W.intl.string(W.t["8/GdRB"]) });
}
function sE(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case su.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, l.jsx)(sx, { classificationId: n });
        case su.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, l.jsx)(sf, { learnMoreLink: i });
        default:
            return null;
    }
}
function s_(e) {
    let { iconType: t } = e,
        n = {
            default: (0, l.jsx)(e6.k, { size: "xs", color: nU.A.colors.TEXT_LINK.css }),
            danger: (0, l.jsx)(sc.i, { color: nU.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, l.jsx)("div", { className: sA.Kk, children: n[t] }) : null;
}
function sC(e) {
    let { children: t, theme: n } = e,
        i = { default: sA._y, danger: sA.yk };
    return (0, l.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sI(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sp.f4)(e.embed);
    return null == n
        ? null
        : (0, l.jsxs)(ek.D, {
              className: sA.o3,
              children: [
                  (0, l.jsxs)("div", {
                      className: sA.qZ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: sA.U1,
                              children: [
                                  (0, l.jsx)(s_, { iconType: n.icon }),
                                  (0, l.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: sA.VU,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: W.intl.format(W.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l5()().diff(l5().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: sA.vv,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(sC, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, l.jsx)(
                              sE,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var sv = n(44724),
    sN = n(50777),
    sj = n(319060),
    sT = n(812282),
    sS = n(922016),
    sy = n(966245),
    sb = n(240248),
    sR = n(256449),
    sL = n(194004),
    sM = n(148355),
    sk = n(3026),
    sO = n(862482),
    sP = n(847374),
    sD = n(964486),
    sU = n(235986),
    sG = n(624793),
    sw = n(562465),
    sH = n(639245),
    sV = n(87719),
    sB = n(725807),
    sF = n(750385),
    sz = n(850992),
    sJ = n(625494),
    sY = n(698279),
    sK = n(764112),
    sW = n(241860);
function sX(e) {
    eB.default.track(K.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? K.liQ.GUILD_CHANNEL : K.liQ.DM_CHANNEL,
        location_section: K.JJy.STICKER_POPOUT,
    }),
        (0, sV.e)();
}
function sZ(e) {
    let { sticker: t, description: n } = e;
    return (0, l.jsxs)(sU.A, {
        children: [
            (0, l.jsx)(sM.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, l.jsxs)(sU.A, {
                direction: sU.A.Direction.VERTICAL,
                justify: sU.A.Justify.CENTER,
                className: sW.bM,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-md/semibold", children: (0, l.jsx)(sk.A, { children: t.name }) }),
                    null != n && (0, l.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function sq(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: a } = e,
        [r, o, c] = (0, d.yK)(
            [sF.A],
            () => [sF.A.getStickerPack(n.pack_id), !sF.A.hasLoadedStickerPacks, sF.A.isPremiumPack(n.pack_id)],
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
    (0, sR.Sr)(n.pack_id);
    let m = (0, sR.pD)(i),
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
        eB.default.track(K.HAw.OPEN_POPOUT, {
            type: K.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nw.dI)(e),
        });
    }, [n.pack_id]),
    o || null == r)
        ? (0, l.jsx)(sy.Y0, { className: sK.v0 })
        : (0, l.jsxs)(sy.Uq, {
              className: sK.Bm,
              children: [
                  (0, l.jsx)(e4.D, { variant: "heading-md/semibold", children: n.name }),
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/normal",
                      children: c
                          ? W.intl.format(W.t.auckXz, { stickerPackName: r.name })
                          : W.intl.format(W.t.OzB6e3, { stickerPackName: r.name }),
                  }),
                  (0, l.jsx)("ul", {
                      className: sK.pQ,
                      children: u.map((e) => (0, l.jsx)(sM.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                  }),
                  c &&
                      (0, l.jsx)("div", {
                          className: sK.j0,
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
                                                  sJ._.dispatchToLastSubscribed(K.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sY.kx.STICKER,
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
        { sticker: n, channel: i, closePopout: a, refreshPositionKey: o } = e,
        [c, u] = s.useState(null),
        [m, h] = s.useState(!1),
        g = G.default.getCurrentUser(),
        A = tq.Ay.canUseCustomStickersEverywhere(g),
        x = (0, d.bG)([nz.A], () => nz.A.getGuild(n.guild_id)),
        f = null != x,
        [E, _] = s.useState(!1),
        [C, I] = s.useState(null),
        v = s.useMemo(
            () => ({
                page: null != i.guild_id ? K.liQ.GUILD_CHANNEL : K.liQ.DM_CHANNEL,
                section: K.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: N } = s.useRef({ guild_id: i.getGuildId(), ...(0, nw.dI)(i) }),
        j = { stickerSourceGuild: x, refreshPositionKey: o },
        T = s.useRef(j);
    s.useEffect(() => {
        T.current = j;
    }),
        s.useEffect(() => {
            let { stickerSourceGuild: e } = T.current;
            !(async function () {
                if (null == e || e.features.has(K.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    u(
                        await ((t = n.id),
                        sw.Bo.get({ url: K.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, ig.jE)(e.body) : null))
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
    A
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
                      sX(i), a();
                  },
              })),
              (R = "Custom Sticker Popout (Soft Upsell)"));
    let L = !b && !f && y && A;
    return (s.useEffect(() => {
        let { refreshPositionKey: e } = T.current;
        e();
    }, [m, c]),
    (0, sD.Ay)(() => {
        eB.default.track(K.HAw.OPEN_POPOUT, { type: R, ...N });
    }),
    m)
        ? (0, l.jsxs)(sy.Uq, {
              className: sW.Bm,
              children: [
                  (function () {
                      async function e() {
                          if (null == c || f) return;
                          a();
                          let e = c.id;
                          try {
                              await ih.A.joinGuild(e), ih.A.transitionToGuildSync(e);
                          } catch {}
                      }
                      return (0, l.jsxs)("div", {
                          className: sW.gH,
                          children: [
                              (0, l.jsx)(sZ, { description: t, sticker: n }),
                              b &&
                                  (0, l.jsx)(sB.A, {
                                      className: sW.lI,
                                      subscriptionTier: ny.pe.TIER_2,
                                      size: sO.$n.Sizes.SMALL,
                                      fullWidth: !0,
                                      textOptions: { textOverride: W.intl.string(W.t["gl/XHJ"]) },
                                      onSubscribeModalClose: (t) => (t ? e() : a()),
                                      postSuccessGuild: f || null == c ? void 0 : c,
                                      premiumModalAnalyticsLocation: v,
                                  }),
                              L &&
                                  (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: sW.lI,
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
                              t = null != c ? sG.GO.createFromDiscoverableGuild(c) : sG.GO.createFromGuildRecord(x);
                          return (0, l.jsxs)("div", {
                              className: sW.tl,
                              children: [
                                  (0, l.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: sW.YW,
                                      children: f ? W.intl.string(W.t.kx6pEG) : W.intl.string(W.t.pDE7Gb),
                                  }),
                                  (0, l.jsx)(sH.G7, {
                                      expressionSourceGuild: t,
                                      hasJoinedExpressionSourceGuild: f,
                                      isDisplayingJoinGuildButtonInPopout: L,
                                      closePopout: a,
                                  }),
                                  !f &&
                                      (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(ek.D, {
                                                  onClick: function () {
                                                      o(), _(!E);
                                                  },
                                                  className: sW.wK,
                                                  children: (0, l.jsxs)(sU.A, {
                                                      children: [
                                                          (0, l.jsx)(p.E, {
                                                              className: sW.__invalid_showMoreEmojisLabel,
                                                              variant: "text-xs/normal",
                                                              color: "none",
                                                              children: W.intl.string(W.t.vtH5hn),
                                                          }),
                                                          (0, l.jsx)(sP.a, {
                                                              size: "md",
                                                              color: "currentColor",
                                                              className: r()(sW.ZB, { [sW.cP]: !E }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              E &&
                                                  (0, l.jsx)(sU.A, {
                                                      wrap: sU.A.Wrap.WRAP,
                                                      align: sU.A.Align.START,
                                                      justify: sU.A.Justify.START,
                                                      className: sW.LX,
                                                      children: e.map((e) =>
                                                          (0, l.jsx)(
                                                              tV.m,
                                                              {
                                                                  text: e.name,
                                                                  ...sy.Uk,
                                                                  children: (0, l.jsx)(
                                                                      "div",
                                                                      {
                                                                          className: r()(sW.Th, {
                                                                              [sK.vT]: null != C && C !== e.id,
                                                                          }),
                                                                          onMouseEnter: () => {
                                                                              I(e.id);
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              I(null);
                                                                          },
                                                                          children: (0, l.jsx)(sM.A, {
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
        : (0, l.jsx)(sy.Y0, { className: sK.v0 });
}
function s$(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, l.jsx)(sy.Uq, {
        className: sK.Bm,
        children: (0, l.jsx)(sZ, {
            sticker: i,
            description: W.intl.format(W.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sX(t);
                },
            }),
        }),
    });
}
let s0 = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: s } = e,
        [a, r] = (0, sR.Zq)(t, !0);
    return null != a && (0, lJ.FD)(a)
        ? (0, l.jsx)(sq, { sticker: a, closePopout: i, channel: n, refreshPositionKey: s })
        : null != a && (0, lJ.Xw)(a)
          ? (0, l.jsx)(sQ, { sticker: a, channel: n, closePopout: i, refreshPositionKey: s })
          : r
            ? (0, l.jsx)(s$, { channel: n, closePopout: i, sticker: t })
            : (0, l.jsx)(sy.Y0, {});
};
var s1 = n(677385);
let s2 = (0, sb.xI)(sj.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    s3 = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            a = s.useRef(null),
            [r, o] = s.useState(!0),
            [c, d] = s.useState(String(Date.now())),
            [u] = (0, sR.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, l.jsxs)("span", {
                className: s1.Zl,
                children: [(0, l.jsx)(sT.s, { size: "xs", color: "currentColor", className: s1.lA }), (u ?? t).name],
            });
        return (0, l.jsx)(f.f5, {
            value: m,
            children: (0, l.jsx)("div", {
                className: s1.be,
                children: (0, l.jsx)(sS.Y, {
                    align: "center",
                    animation: sS.Y.Animation.TRANSLATE,
                    positionKey: c,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, l.jsx)(s0, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => d(String(Date.now())),
                        }),
                    targetElementRef: a,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, l.jsx)(tV.m, {
                            ...sy.Uk,
                            shouldShow: r,
                            __unsupportedReactNodeAsText: (0, sy.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nw.Ay.trackWithMetadata(K.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: ny.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sL.Tw)(e.format_type),
                                        is_custom: (0, sL.zN)(e.type),
                                    });
                            },
                            children: (0, l.jsx)(ek.D, {
                                innerRef: a,
                                className: s1.q7,
                                onClick: (e) => {
                                    o(!r), n(e);
                                },
                                tag: "span",
                                children: (0, l.jsx)(sM.A, { isInteracting: i, size: s2, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var s5 = n(406704),
    s6 = n(531142),
    s4 = n(140735),
    s9 = n(442433),
    s7 = n(143413),
    s8 = n(935208),
    ae = n(321045),
    at = n(456874),
    an = n(707539),
    ai = n(80682),
    al = n(521981),
    as = n(308334),
    aa = n(943220),
    ar = n(288254),
    ao = n(838541);
function ac(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: a } = (0, d.cf)(
            [D.A],
            () => ({ isBlocked: D.A.isBlockedForMessage(t), isIgnored: D.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = s.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, ai.Eq)(r, "ThreadMessageAccessoryMessage");
    let o = s.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, al.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        c = (0, ar.IL)(n);
    return (0, l.jsxs)("div", {
        className: se.up,
        children: [
            (0, l.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: se.FJ }),
            (0, l.jsx)(aa.A, { message: t, channel: n, compact: !0 }),
            (0, l.jsx)("div", {
                className: se.Au,
                children: c
                    ? (0, l.jsx)("span", { className: se.dp, children: W.intl.string(W.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: s,
                              renderedContent: a,
                              leadingIcon: r,
                              trailingIcon: o,
                          } = (0, as.o)(e, t, n, i, se.tP, {
                              trailingIconClass: se._v,
                              leadingIconClass: se.a5,
                              iconSize: ao.eJ,
                          });
                          return (0, l.jsxs)(l.Fragment, {
                              children: [r, a ?? (0, l.jsx)("span", { className: se.dp, children: s }), o],
                          });
                      })(t, o, i, a),
            }),
        ],
    });
}
var ad = n(747926),
    au = n(650583),
    am = n(519807);
function ah(e) {
    let { message: t, compact: n } = e,
        i = (0, d.bG)([P.A], () => P.A.getChannel(s8.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, l.jsx)(ag, { channel: i, compact: n, isSystemMessage: (0, s7.A)(t) });
}
function ag(e) {
    var t;
    let i,
        s,
        a,
        { channel: o, compact: c, isSystemMessage: u } = e,
        m = (0, io.Ay)(o),
        h = (0, d.bG)([at.A], () => at.A.getCount(o.id)),
        g =
            ((t = o),
            (i = (0, d.bG)([at.A], () => at.A.getMostRecentMessage(t.id))),
            (s = (0, d.bG)([at.A], () => at.A.getCount(t.id))),
            (a = (0, an.JO)(t)),
            t.threadMetadata?.archived
                ? W.intl.string(W.t.ZTo4HS)
                : null == s || 0 === s
                  ? W.intl.string(W.t.HYtNyE)
                  : null == i
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("span", { children: W.intl.string(W.t.ZTo4HS) }),
                              (0, l.jsx)("span", { className: am.vE, children: (0, an.aK)(a) }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(ac, { message: i, channel: t }),
                              (0, l.jsx)("span", { className: am.vE, children: (0, an.aK)(a) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: r()(am.GI, { [am.E]: !c, [am.E_]: u }) }),
            (0, l.jsx)(ek.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, ad.JA)(o, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === au.dh.SPACE || e.key === au.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, ad.JA)(o, n));
                },
                onContextMenu: function (e) {
                    (0, s9.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("91763"),
                            n.e("38730"),
                            n.e("47502"),
                            n.e("3998"),
                            n.e("43266"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("96804"),
                            n.e("21106"),
                            n.e("90434"),
                            n.e("21060"),
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
                "aria-roledescription": W.intl.string(W.t["8ipxiY"]),
                className: r()(am.kL, { [am.og]: u }),
                children: (0, l.jsxs)(s6.R, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: am.kq,
                            children: [
                                (0, l.jsx)(s4.A, { children: W.intl.string(W.t["7Xm5QI"]) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: am.UU,
                                    children: m,
                                }),
                                (0, l.jsx)("span", {
                                    className: am.lO,
                                    "aria-hidden": !A,
                                    children: (0, ae.ub)(h, o.id),
                                }),
                            ],
                        }),
                        (0, l.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: am.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ap = n(383233),
    aA = n(834942),
    ax = n(644447),
    af = n(659674),
    aE = n(998218),
    a_ = n(5095),
    aC = n(294520),
    aI = n(320095),
    av = n(863439),
    aN = n(707985),
    aj = n(730852),
    aT = n(265422),
    aS = n(986268);
function ay(e) {
    let { guild: t, channel: n, message: i } = e,
        a = U.A.getGuildId(),
        r = ed.Ay.getChannelId(a),
        o = s.useCallback(() => {
            eB.default.track(K.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: a,
                channel_id: r,
            }),
                (0, aT.i)(t.id, n.id),
                aj.default.selectVoiceChannel(n.id);
        }, [i, t, n, a, r]),
        c = (0, l.jsx)(i3.A.Channel, { channel: n });
    return (0, l.jsx)(i3.A, {
        children: (0, l.jsxs)(i3.A.Body, {
            children: [
                (0, l.jsxs)("div", {
                    className: ld.iH,
                    children: [
                        (0, l.jsx)(i3.A.Icon, { guild: t }),
                        (0, l.jsx)(i3.A.Info, {
                            title: c,
                            onClick: o,
                            children: (0, l.jsxs)("span", {
                                className: ld.FA,
                                children: [
                                    W.intl.format(W.t["2wimj5"], { guildName: t.name }),
                                    (0, l.jsx)("span", {
                                        className: ld.E3,
                                        children: (0, l.jsx)(aS.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: ld.UD,
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
function ab(e) {
    let { code: t, message: n } = e,
        [i, s] = t.split("/"),
        a = P.A.getChannel(s),
        r = nz.A.getGuild(i);
    return null != a && a.isGuildVocal() && null != r && tt.A.can(K.xBc.VIEW_CHANNEL, a) && tt.A.can(K.xBc.CONNECT, a)
        ? (0, l.jsx)(ay, { guild: r, channel: a, message: n })
        : null;
}
var aR = n(789645),
    aL = n(298236),
    aM = n(953756),
    ak = n(564107),
    aO = n(257212),
    aP = n(616245);
function aD(e) {
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
        [m, h] = (0, aM.zn)();
    return 0 === t.length
        ? null
        : (0, l.jsx)(ak.N, {
              gifAutoPlay: i,
              getGifFavButton: s,
              getOnMediaItemContextMenu: a,
              shouldHideMediaOptions: o,
              enabledContentHarmTypeFlags: c,
              children: (0, l.jsx)(aL.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, l.jsx)(aM.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, l.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, l.jsx)(aM.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, l.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: r()(aO.O0, aP.k, aP.z, { [aO.dK]: u }),
                                      children: [
                                          null != d &&
                                              (0, l.jsx)(ek.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: aO.PP,
                                                  onClick: d,
                                                  "aria-label": W.intl.string(W.t.GT3fNz),
                                                  children: (0, l.jsx)(aR.P, { size: "xs", color: "currentColor" }),
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
var aU = n(451988),
    aG = n(261958),
    aw = n(212245),
    aH = n(775602),
    aV = n(62583),
    aB = n(956549),
    aF = n(550151),
    az = n(392054),
    aJ = n(853390),
    aY = n(290863),
    aK = n(811024),
    aW = n(360469),
    aX = n(522698);
let aZ = s.memo((e) => {
    let { start: t } = e,
        [n, i] = s.useState(0),
        l = (0, lO.j)(),
        a = (0, d.bG)([aH.Ay], () => aH.Ay.useReducedMotion),
        r = !1 === l || a;
    return (
        s.useEffect(() => {
            let e = new aU.IX();
            return (
                e.start(r ? 15 * nA.A.Millis.SECOND : nA.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nA.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [r, t]),
        (0, aJ.fU)(n)
    );
});
aZ.displayName = "ActivityRuntimeCounter";
let aq = s.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: a, message: o } = e,
        { analyticsLocations: c } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        u = (0, aw.p)(),
        m = (0, d.bG)([P.A], () => P.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, d.bG)([O.default], () => O.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: E,
            activityLaunchState: _,
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
        C = A?.userIds,
        I = (0, d.yK)(
            [G.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(iV.Vq),
            [C],
        ),
        v = (0, d.bG)([aY.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = aY.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        N = v?.details,
        j = s.useMemo(() => {
            let e = new i5.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = aW.Gl), e;
        }, [n]),
        T = (0, aF.vG)({ userId: g, channelId: i, application: j }),
        S = null == A,
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
                            r = (0, aK.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...a, disabled: !0, text: W.intl.string(W.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...a, disabled: !r, tooltip: r ? void 0 : W.intl.string(W.t.f41E1g) };
                        if (null != n && n !== aF.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case aF.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = W.intl.string(W.t.hHGrWz);
                                    break;
                                case aF.Gy.ACTIVITY_AGE_GATED:
                                    e = W.intl.string(W.t["4WuFRE"]);
                                    break;
                                case aF.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = W.intl.string(W.t.uGDCcw);
                                    break;
                                case aF.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = W.intl.string(W.t.UXoQTp);
                                    break;
                                case aF.Gy.CHANNEL_FULL:
                                    e = W.intl.string(W.t.rZfiNq);
                                    break;
                                case aF.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = W.intl.string(W.t.w5SAps);
                                    break;
                                case aF.Gy.NO_CHANNEL:
                                case aF.Gy.NO_GUILD:
                                case aF.Gy.NO_USER:
                                case aF.Gy.IS_AFK_CHANNEL:
                                    e = W.intl.string(W.t.Etp6uI);
                            }
                            return { ...a, disabled: !0, tooltip: e };
                        }
                        return a;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: A, joinability: T, currentEmbeddedActivity: E, channel: m }),
        b = s.useId(),
        R = null != _ && _.isLaunching && _.componentId === b;
    async function L() {
        eB.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: S,
            cta: "Play",
        }),
            S
                ? await (0, aB.A)({
                      targetApplicationId: n.id,
                      channelId: i,
                      locationObject: u.location,
                      analyticsLocations: c,
                      componentId: b,
                      commandOrigin: az.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, aV.A)({
                      applicationId: A.applicationId,
                      activityChannelId: i,
                      locationObject: u.location,
                      analyticsLocations: c,
                      componentId: b,
                  });
    }
    let M = y.disabled ? W.intl.string(W.t.JBnc7N) : W.intl.string(W.t.cX9uLZ),
        k = (0, ee.F)(j, () => {
            eB.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        D = w.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    y.disabled && (t = y.tooltip);
    let U = I.length,
        H = v?.timestamps?.start ?? v?.created_at,
        V = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case K.$pd.STREAMING:
                    return { text: W.intl.formatToPlainString(W.t.tyCw2q, { count: n }), Icon: F.o };
                case K.$pd.LISTENING:
                    return { text: W.intl.formatToPlainString(W.t["2l8yka"], { count: n }), Icon: z.T };
                default:
                    return { text: W.intl.formatToPlainString(W.t.yJj035, { count: n }), Icon: J._ };
            }
        })({ activity: v, activityUsersCount: U }),
        Y = [
            {
                label: y.text,
                trackingArea: q.kY.PLAY,
                onClick: L,
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
            className: aX.QR,
            children: S
                ? (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: M })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != N &&
                              (0, l.jsxs)("div", {
                                  className: aX.oL,
                                  children: [
                                      null != H &&
                                          (0, l.jsxs)("div", {
                                              className: aX.DT,
                                              children: [
                                                  (0, l.jsx)("div", {
                                                      className: aX.y9,
                                                      children: (0, l.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, l.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, l.jsx)(aZ, { start: H }),
                                                  }),
                                              ],
                                          }),
                                      (0, l.jsxs)("div", {
                                          className: r()(aX.DT, aX.PK),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  children: (0, l.jsx)(aG.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, l.jsx)(p.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: N,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          U > 0 && (0, l.jsx)(Z, { activityUsers: I, guildId: a, activityText: V.text }),
                      ],
                  }),
        }),
        actions: Y,
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
var aQ = n(164664),
    a$ = n(439401),
    a0 = n(657044),
    a1 = n(863574),
    a2 = n(707606),
    a3 = n(456412),
    a5 = n(429913),
    a6 = n(242874),
    a4 = n(499454),
    a9 = n(165191),
    a7 = n(928550),
    a8 = n(976860),
    re = n(871123),
    rt = n(317560),
    rn = n(30793),
    ri = n(189081);
function rl(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, l.jsx)("svg", {
        ...(0, ls.A)(i),
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
var rs = n(738533),
    ra = n(45938),
    rr = n(615396),
    ro = n(427262),
    rc = n(561028),
    rd = n(820284),
    ru = n(674378),
    rm = n(598429),
    rh = n(979604);
function rg(e) {
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
        p = {
            fullWidth: n,
            size: i,
            disabledVariant: a,
            tooltipPosition: o,
            onClick: c,
            className: u,
            hover: h,
            innerClassName: g,
        },
        A = (0, d.bG)([ri.A], () => ri.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, d.bG)([eH.A], () => null != f && !eH.A.didFetchingSkuFail(f));
    return null != A && (0, ru.XZ)(A)
        ? (0, l.jsx)(rh.A, { ...p, playButtonVariant: s, libraryApplication: A, source: m })
        : E
          ? (0, l.jsx)("div", { children: "deprecated!" })
          : (0, l.jsx)(rm.A, { ...p, variant: s, hideNotLaunchable: r, applicationId: t.id });
}
function rp(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return W.intl.string(W.t.RWouSQ);
    if (e.premium && !n) return W.intl.string(W.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, tQ.$g)(i.amount, i.currency);
        else return W.intl.string(W.t.QQsaCc);
    return W.intl.string(W.t.RWouSQ);
}
var rA = n(558215),
    rx =
        (((i = rx || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
function rf(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(rA.nM, t),
        children: [
            (0, l.jsx)(a0._, { size: "md", color: "currentColor", className: rA.Kk }),
            W.intl.string(W.t["7eicAO"]),
        ],
    });
}
function rE(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(rA.nM, n),
        children: [(0, l.jsx)(tp.t, { size: "md", color: "currentColor", className: rA.Kk }), rp(t)],
    });
}
function r_(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(rA.EQ, n), children: t.getDisplaySalePercentage() });
}
function rC(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: r()(rA.I8, n), children: rp(t, !1) });
}
function rI(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsx)("div", { className: n, children: rp(t) });
}
function rv(e) {
    let { sku: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(rA.nM, n),
        children: [(0, l.jsx)(r_, { sku: t }), (0, l.jsx)(rC, { sku: t }), (0, l.jsx)(rI, { sku: t })],
    });
}
function rN(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: t, children: W.intl.string(W.t.QQsaCc) });
}
class rj extends s.PureComponent {
    static Types = rx;
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
                return (0, l.jsx)(rN, { className: r()(t, n) });
            case 1:
                return (0, l.jsx)(rf, { className: r()(t, n) });
            case 3:
                return (0, l.jsx)(rE, { sku: i, className: r()(t, n) });
            case 2:
                return (0, l.jsx)(rv, { sku: i, className: r()(t, n) });
            default:
                return (0, l.jsx)(rI, { className: r()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(rN, { className: t });
            case 3:
                return (0, l.jsx)(rE, { sku: n, className: r()(rA.OB, t) });
            case 2:
                return (0, l.jsx)(rv, { sku: n, className: r()(rA.dk, t) });
            default:
                return (0, l.jsx)(rI, { className: r()(rA.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(rN, {});
                break;
            case 2:
                t = (0, l.jsxs)(s.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: rA.nM,
                            children: [(0, l.jsx)(rI, { sku: i }), (0, l.jsx)(r_, { sku: i })],
                        }),
                        (0, l.jsx)(rC, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(rI, { sku: i });
        }
        return (0, l.jsx)("div", { className: r()(rA.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rA.Pl);
            case 3:
                return this.renderGeneric(e, rA.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rA.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var rT = n(79231);
let rS = {
    [K.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, ls.A)(a),
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
    [K.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, ls.A)(a),
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
    [K.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...a } = e;
            return (0, l.jsx)("svg", {
                ...(0, ls.A)(a),
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
function ry(e) {
    let { operatingSystem: t, className: n } = e,
        i = rS[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let s = i.icon;
    return (0, l.jsx)(tV.m, { text: i.getLabel(), children: (0, l.jsx)(s, { className: n }) });
}
function rb(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, l.jsx)("div", {
        className: r()(rT.I, n),
        children: t.map((e) => (0, l.jsx)(ry, { operatingSystem: e, className: r()(rT.A, i) }, e)),
    });
}
var rR = n(916214);
let rL = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: r()(rR.T, t),
        children: (0, l.jsx)("span", { className: rR.Q, children: W.intl.string(W.t["14lP0W"]) }),
    });
};
var rM = n(752073);
let rk = function (e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: r()(rM.T, t),
        children: (0, l.jsx)("span", { className: rM.Q, children: W.intl.string(W.t["8IfYqa"]) }),
    });
};
var rO = n(615300),
    rP = n(868285),
    rD = n(358618),
    rU = n(983851),
    rG = n(133296),
    rw = n(607470),
    rH = n(581147);
class rV extends s.Component {
    _animatedValue = new rO.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), rO.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        rO.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, l.jsx)(rO.A.img, {
            className: r()({ [rH.YC]: i }, t),
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
            ? (0, l.jsx)(rO.A.div, { className: r()(rH.gn, e), style: this.getImageStyle(), children: t })
            : (0, l.jsxs)(rO.A.div, {
                  className: r()(s ? rH.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      s
                          ? (0, l.jsx)(tF.y, {
                                className: rH.u1,
                                itemClassName: rH.$N,
                                type: tF.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class rB extends s.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = s.createRef();
    videoTimeout = new aU.Ep();
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
            m = o ? rD._ : rU.H;
        return (0, l.jsxs)(s.Fragment, {
            children: [
                i1.Fr
                    ? null
                    : (0, l.jsx)(rw.A, {
                          className: r()(rH.Yi, c),
                          muted: o,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, l.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, l.jsx)(rP.F, {
                    children: a && e ? null : (0, l.jsx)(rV, { className: r()(rH.NB, d), src: n, title: i }, 0),
                }),
                (0, l.jsx)(ek.D, {
                    className: r()(rH.b4, { [rH.HY]: a && e, [rH.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: a && e ? (0, l.jsx)(m, { className: rH.i2 }) : null,
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
            ? (0, l.jsx)(rV, { className: r()(rH.Yi, s), src: e[a], title: n }, a)
            : (0, l.jsx)(rV, { className: r()(rH.Yi, s), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: s } = this.props;
        return null == t
            ? (0, l.jsx)(rV, { className: r()(rH.Yi, s), src: n, title: i }, "image")
            : (0, l.jsx)(rG.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: rH.mZ,
                  disable: !e,
                  children: (0, l.jsx)(rP.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: s } = this.props,
            { videoLoadError: a, videoLoaded: o } = this.state;
        return n
            ? (0, l.jsx)("div", { className: t })
            : (0, l.jsxs)("figure", {
                  className: r()(rH.__invalid_tileMedia, t),
                  children: [null == e || a ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(s && o)],
              });
    }
}
var rF = n(366523),
    rz = n(371794),
    rJ = n(622413),
    rY = n(107120);
class rK extends s.PureComponent {
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
                  className: rY.ED,
                  children: [
                      (0, l.jsx)(rj, {
                          type: rj.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: a && i ? rY.ae : rY.Ek,
                      }),
                      (0, l.jsx)(rb, { systems: [K.uje.WINDOWS], className: rY.iD }),
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
        return (0, re.bF)(a)
            ? (0, l.jsx)(rF.e, {
                  sku: a,
                  shape: "custom",
                  containerClassName: rY.A$,
                  backgroundImageClassName: rY.iZ,
                  foregroundImageClassName: rY.O7,
              })
            : (0, l.jsxs)(s.Fragment, {
                  children: [
                      (0, l.jsx)(rB, {
                          className: r()(rY.H1, { [rY.ZC]: o }),
                          video: null != c.previewVideo ? (0, rz.YE)(a.applicationId, c.previewVideo) : void 0,
                          image: null != c.thumbnail ? (0, rz.YE)(a.applicationId, c.thumbnail, 600) : void 0,
                          title: a.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: rY.ZI,
                          splashPlaceholderClassName: rY.NB,
                      }),
                      a.exclusive
                          ? (0, l.jsx)(rk, { className: r()(rY.LJ, { [rY.V9]: e }) })
                          : a.isTheGameAwardsWinner
                            ? (0, l.jsx)(rL, { className: r()(rY.LJ, { [rY.V9]: e }) })
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
            c = o ? a1.ug : rJ.A;
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
var rW = n(587895),
    rX = n(549681);
class rZ extends s.Component {
    static defaultProps = { renderFallback: K.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : K.JJy.APPLICATION_EMBED, object: K.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eP.QB)(t);
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
            className: rX.h,
            children: (0, l.jsx)(ep.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: W.intl.string(W.t["W+NB90"]),
                onClick: () => {
                    (0, a8.pX)(K.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: s, renderCustomTagline: a, renderCustomMedia: r } = this.props,
            { playing: o, muted: c } = this.state,
            d = i > a1.Tm;
        return (0, l.jsx)(rK, {
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
        if (null != a) return (0, l.jsx)("div", { className: rX.i, children: a() });
        if (null == n) return null;
        let r = null != n && n.primarySkuId === i,
            o = null != s && s.hasFlag(K.hM6.HIDDEN);
        return (0, l.jsxs)("div", {
            className: rX.i,
            children: [
                !r || o
                    ? this.renderViewInStoreButton()
                    : (0, l.jsx)(rg, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: rX.h,
                          source: K.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, l.jsx)(rj, { type: rj.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: s } = this.props,
            a = n > a1.Tm;
        return null == e || null == t
            ? i
                ? s()
                : (0, l.jsx)(a1.Wb, { isHorizontal: a })
            : e.productLine === K.EZt.PREMIUM
              ? (0, l.jsx)(rd.A, {
                    section: K.JJy.APPLICATION_EMBED,
                    children: (0, l.jsx)(rc.N_, {
                        onClick: this.handleLinkClick,
                        to: K.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, l.jsx)(rd.A, { section: K.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let rq = [eH.A, ri.A, eV.A];
function rQ(e) {
    let { skuId: t } = e,
        n = eH.A.get(t),
        i = null != n ? rW.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eH.A.didFetchingSkuFail(t),
        inLibrary: null != n && ri.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eV.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? ri.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let r$ = (0, a3.A)((0, a2.A)(rZ)),
    r0 = d.Ay.connectStores(rq, rQ)(r$),
    r1 = (0, a2.A)(d.Ay.connectStores(rq, rQ)(rZ));
var r2 = n(362483);
function r3(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, l.jsxs)(ek.D, {
        className: r2.kP,
        onClick: t,
        children: [
            (0, l.jsx)(a0._, { size: "md", color: "currentColor", className: r2.dy }),
            (0, l.jsx)("div", { children: n.isHidden() ? W.intl.string(W.t.Wi99Ro) : W.intl.string(W.t["+tXad7"]) }),
        ],
    });
}
class r5 extends s.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= a1.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === K.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, eI.openUserSettings)(eC.X.GIFT_PANEL);
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
        return (0, l.jsx)(a1.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class r6 extends s.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: K.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, a8.pX)(K.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, a8.pX)(K.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, eI.openUserSettings)(eC.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eB.default.track(K.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: K.ZSU.BUTTON_CTA },
            });
        let a = l !== K.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, a4.h)({ processedCode: n, channelContext: t, customGiftMessage: a, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eB.default.track(K.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rs.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, re.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, rt.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, eI.openUserSettings)(eC.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(K.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, l.jsxs)(sU.A, {
            justify: sU.A.Justify.BETWEEN,
            children: [
                (0, l.jsxs)(sU.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, l.jsx)(r3, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, l.jsxs)(sU.A, {
                    align: sU.A.Align.END,
                    justify: sU.A.Justify.END,
                    className: r2.yu,
                    direction: sU.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, l.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, l.jsx)("div", {
                                  children: W.intl.format(W.t.nZBvUR, { hours: e.expiresAt.diff(l5()(), "h") }),
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
                (e.isExistingPremiumSubscriptionDisallowed && (0, tq.TW)(n)),
            r = e.redeemed || a || e.isClaimed || !n.verified,
            o = e.redeemed
                ? W.intl.string(W.t.BTihou)
                : null != e.giftStyle
                  ? W.intl.string(W.t.TiZFqX)
                  : W.intl.string(W.t.bUvv1f);
        return (0, l.jsx)("div", {
            className: (0, t3.hU)(e) ? r2.UQ : void 0,
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
        return e === K.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? W.intl.formatToPlainString(W.t.t1SOId, { recipientDisplayName: ro.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, re.bF)(i) ? this.props.content : void 0;
        let r = i.isPreorder() ? W.intl.formatToPlainString(W.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t3.hU)(e) || (0, re.bF)(i)
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
                    ? W.intl.format(W.t.l3VxgG, { username: ro.Ay.getUserTag(l), maxUses: e.maxUses, skuName: r })
                    : W.intl.format(W.t["9cYrw5"], {
                          username: ro.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: r,
                      })
                : e.isSubscription
                  ? W.intl.formatToPlainString(W.t.svrO3W, { maxUses: e.maxUses, skuName: r })
                  : W.intl.formatToPlainString(W.t["3AgAn3"], { totalCopies: e.maxUses, skuName: r });
        if (e.isSubscription) {
            if (null == s) return W.intl.string(W.t.ZTNur7);
            if (null != l) {
                let e = s.interval === ny.WT.MONTH ? W.t["/RDIEA"] : W.t["3CX6Ev"];
                return W.intl.format(e, { username: ro.Ay.getUserTag(l), skuName: r, intervalCount: s.intervalCount });
            }
            let e = s.interval === ny.WT.MONTH ? W.t["2O4lo5"] : W.t["+XjmsR"];
            return W.intl.format(e, { skuName: r, intervalCount: s.intervalCount });
        }
        return null != l ? W.intl.format(W.t["3HsdQ/"], { username: ro.Ay.getUserTag(l) }) : W.intl.string(W.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = ny.Wx.includes(e.giftStyle),
            i = r()(r2.gB, { [r2.El]: n, [r2.by]: t >= a1.Tm }),
            s = r()({ [r2.gc]: n, [r2.Ei]: n && t >= a1.Tm, [r2.ww]: !n, [r2.wy]: !n && t >= a1.Tm });
        return (0, l.jsxs)("div", {
            className: i,
            children: [
                n && (0, l.jsx)(rl, { className: r2.nr }),
                null != e.giftStyle &&
                    (0, l.jsx)(a9.A, {
                        defaultAnimationState: e.redeemed ? a6.oA.LOOP : a6.oA.IDLE,
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
        let i = null != e.giftStyle && !(0, re.bF)(n);
        return (0, l.jsx)(r1, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: K.JJy.GIFT_CODE_EMBED,
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
            return (0, l.jsx)(r1, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: K.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => W.intl.string(W.t.X4p5uH),
                renderCustomTagline: () => W.intl.string(W.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, l.jsx)(r5, { isSelfGift: s, width: i, resolveErrorCode: n });
            else return (0, l.jsx)(a1.Wb, { isHorizontal: i >= a1.Tm });
        return (0, t3.hU)(e)
            ? (0, l.jsx)("div", { className: r2.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let r4 = (0, a3.A)((0, a2.A)(r6)),
    r9 = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: s,
                resolveErrorCode: a,
            } = (0, d.cf)([rn.A], () => {
                let e = rn.A.getError(t);
                return { giftCode: rn.A.get(t), resolved: rn.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            r = (0, d.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, d.bG)([eH.A], () => (null != i ? eH.A.get(i.skuId) : null)),
            c = (0, d.bG)([ri.A], () =>
                null != o && i?.entitlementBranches != null ? ra.YI(i.entitlementBranches, o, ri.A) : null,
            ),
            u = (0, a5.h)(o?.applicationId),
            m = null != o && (0, re.bF)(o) && i?.redeemed === !0,
            [h] = (0, a7.L)(m ? u?.id : null),
            g = (0, rr.zz)(i?.subscriptionPlanId),
            p = (0, d.bG)([O.default], () => (null != i ? O.default.getId() === i.userId : O.default.getId() === n.id));
        return (0, l.jsx)(r4, {
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
            isSelfGift: p,
        });
    };
var r7 = n(376728),
    r8 = n(107123),
    oe = n(698441),
    ot = n(427080),
    on = n(346542),
    oi = n(665066),
    ol = n(95701),
    os = n(299091),
    oa = n(149790);
let or = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oo(e) {
    let { guildId: t, location: n } = e;
    return or.getCurrentConfig({ guildId: t, location: n });
}
function oc() {
    return (0, l.jsxs)(i3.A, {
        children: [
            (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t["N/g9Z4"]) }),
            (0, l.jsx)(i3.A.Body, { resolving: !0 }),
        ],
    });
}
var od = n(172799),
    ou = n(666327);
function om(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, l.jsxs)(
                    "div",
                    {
                        className: ou.MY,
                        children: [
                            (0, l.jsx)("i", { className: ou.QD }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: ou.U9,
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
                        className: ou.MY,
                        children: [
                            (0, l.jsx)("i", { className: ou.o6 }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: ou.U9,
                                color: i,
                                children: W.intl.format(W.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, l.jsx)("div", { className: ou.rc, children: s })
    );
}
function oh(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: s } = e,
        a = (0, io.Ay)(t);
    if (null != t && null != n) {
        let e = (0, n4.gU)(t, n);
        return (0, l.jsxs)("div", {
            className: r()(ou.Ix, { [ou.v6]: i }),
            children: [
                null != e ? (0, l.jsx)(e, { className: ou.p, size: "xs", color: "currentColor" }) : null,
                (0, l.jsx)(sk.A, {
                    children: (0, l.jsx)(p.E, {
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
              className: r()(ou.Ix, { [ou.v6]: i }),
              children: (0, l.jsx)(sk.A, {
                  children: (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: s,
                      children: W.intl.format(W.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function og(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: s, target_application: a } = t;
    ej()(s === od.yV.EMBEDDED_APPLICATION && null != a, "invalid application invite");
    let r = t.channel?.id,
        o = (0, d.bG)([P.A], () => P.A.getChannel(r), [r]);
    return null == o
        ? null
        : (0, l.jsx)(e1.O, {
              applicationId: a.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, l.jsx)(op, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function op(e) {
    let t,
        n,
        { invite: i, message: a, getAcceptInviteContext: r, application: o, channel: c } = e,
        { approximate_member_count: u, approximate_presence_count: m, target_application: h } = i;
    ej()(null != h, "invalid application invite");
    let g = s.useCallback(() => {
            eB.default.track(K.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, d.bG)([nz.A], () => (null != i.guild ? nz.A.getGuild(i.guild.id) : null), [i]),
        A = (0, d.bG)(
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
        _ = (0, d.bG)([tt.A], () => null != c && tt.A.can(K.xBc.USE_EMBEDDED_ACTIVITIES, c), [c]),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED),
        I = (0, d.yK)(
            [eu.Ay],
            () =>
                null != c
                    ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(c.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [c, h.id],
        ),
        v = (0, d.yK)([G.default], () => I.map((e) => G.default.getUser(e)).filter((e) => null != e), [I]),
        N = s.useCallback(() => {
            (0, r7.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: a.author.id,
                    invite_message_id: a.id,
                    invite_instance_id: (0, lm._U)(i.code, a.id),
                },
                C,
            ),
                r7.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: r("Invite Button Embed", i.code),
                    analyticsLocations: C,
                });
        }, [i, a, C, r]),
        j = i.state === K.elq.ACCEPTING,
        T = null != p;
    if (null == p) {
        if (null == i.guild) return (0, l.jsx)(oc, {});
        p = (0, oa.DY)(i.guild);
    }
    t = T
        ? A
            ? W.intl.string(W.t.DPfdsq)
            : E
              ? W.intl.string(W.t.sqe0hj)
              : W.intl.string(W.t.RscU7I)
        : W.intl.string(W.t["2BP08E"]);
    let S = (T && !_) || (T && A);
    return (_ || (n = W.intl.string(W.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, l.jsx)(f.f5, {
              value: C,
              children: (0, l.jsx)(oA, {
                  app: o,
                  activityUsers: v,
                  isMember: T,
                  channel: c,
                  guild: p,
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
function oA(e) {
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
            disabledReason: p,
            handleAcceptInvite: A,
            onView: x,
        } = e,
        { bot: f, icon: E } = t,
        _ = w.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        C = (0, ee.F)(t),
        I = (0, $.f)(t),
        v = n.length,
        N = s.useMemo(
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
    return (0, l.jsx)(B.h, {
        header: t.name,
        title: W.intl.string(W.t["7vb6nw"]),
        iconSrc: _,
        ...I,
        onClickBanner: C,
        info: (0, l.jsxs)("div", {
            className: ou.QR,
            children: [
                (0, l.jsx)(oh, { channel: a, guild: r, hasEnded: !u, textColor: "none" }),
                i
                    ? v > 0 &&
                      (0, l.jsx)(Z, {
                          activityUsers: n,
                          guildId: r.id,
                          activityText: W.intl.formatToPlainString(W.t.yJj035, { count: v }),
                      })
                    : (0, l.jsx)(om, { members: c, membersOnline: d, textColor: "none" }),
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
var ox = n(4274);
function of(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, d.bG)([O.default], () => O.default.getId()) === t.id
                ? W.intl.string(W.t.C89OLE)
                : W.intl.string(W.t.YVub5y),
        s = (0, ox.g)(n?.code);
    return (0, l.jsxs)(i3.A, {
        children: [
            (0, l.jsx)(i3.A.Header, { text: i }),
            (0, l.jsxs)(i3.A.Body, {
                children: [
                    (0, l.jsx)(i3.A.Icon, { expired: !0 }),
                    (0, l.jsx)(i3.A.Info, {
                        expired: !0,
                        title: s?.title ?? W.intl.string(W.t["Jhx/ud"]),
                        children: s?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var oE = n(308528),
    o_ = n(889227);
function oC(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        r = t.inviter?.id === a,
        o = t.state === K.elq.ACCEPTING,
        { analyticsLocations: c } = (0, f.Ay)(x.A.INVITE_EMBED),
        u = (0, d.bG)([D.A], () => null != t.inviter && D.A.isFriend(t.inviter?.id)),
        m = s.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != P.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), oE.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, r7.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lm._U)(t.code, n.id),
                    },
                    c,
                );
        }, [t, n, c]),
        h = s.useCallback(() => {
            (0, r7.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lm._U)(t.code, n.id),
                },
                c,
            );
            let e = i("Invite Button Embed", t.code);
            r7.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, c, i]);
    if (null == t.inviter) return null;
    let g = u ? m : h,
        p = W.intl.string(W.t.ib7Ng1),
        A = "active";
    u
        ? ((p = W.intl.string(W.t.xhxnPn)), (A = "secondary"))
        : r && ((p = W.intl.string(W.t.ib7Ng1)), (A = "secondary"));
    let E = r ? W.intl.string(W.t.eQyu1F) : W.intl.string(W.t.PYJHW6),
        _ = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? ro.Ay.getUserTag(t.inviter) : "";
    return (0, l.jsxs)(i3.A, {
        children: [
            (0, l.jsx)(i3.A.Header, { text: E }),
            (0, l.jsxs)(i3.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: ld.iH,
                        children: [
                            (0, l.jsx)(i3.A.Icon, { user: new o_.A(t.inviter), onClick: u ? g : void 0 }),
                            (0, l.jsx)(i3.A.Info, { title: _, onClick: u ? g : void 0, children: C }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: g, text: p, loading: o, disabled: r, variant: A }),
                ],
            }),
        ],
    });
}
var oI = n(342952);
function ov(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: r } = e,
        o = i === n.author.id,
        c = t.state === K.elq.ACCEPTING,
        u = (0, d.bG)([P.A], () => (null != t.channel ? P.A.getChannel(t.channel.id) : null), [t]);
    ej()(null == u || u.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = null != u,
        g = s.useRef(null),
        A = s.useCallback(() => {
            let e = "noop";
            h ? (a(), (e = "transition")) : (r(), (e = "accept")),
                (0, r7.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lm._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, h, a, r]),
        E = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, ol.OY)(e.channel),
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
                        let n = G.default.getUser(t);
                        return null != n && e.push(n), e;
                    }, []) ?? [];
                let e = (0, io.Bi)(t),
                    i = G.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, u ?? null);
    if (null == E) return (0, l.jsx)(oc, {});
    let {
            bodyTitle: _,
            headerText: C,
            buttonText: I,
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
                                    let n = e instanceof o_.A ? e : G.default.getUser(e.id);
                                    if (null != n) {
                                        let e = ro.Ay.getName(n);
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
            e instanceof o_.A
                ? e
                : (G.default.getUser(e.id) ?? new o_.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        S = null != N.icon,
        y = W.intl.format(W.t.zRl6XR, { count: j.length });
    return (0, l.jsxs)(i3.A, {
        className: ld.TV,
        children: [
            (0, l.jsx)(p.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: ld.JO,
                lineClamp: 1,
                children: C,
            }),
            (0, l.jsxs)(i3.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: `${ld.iH} ${ld.mx}`,
                        children: [
                            S &&
                                (0, l.jsx)(i3.A.Icon, {
                                    channel: N,
                                    onClick: h ? A : void 0,
                                    channelIconSize: tx._3.SIZE_48,
                                }),
                            (0, l.jsx)(i3.A.Info, {
                                title: (0, l.jsx)(sk.A, { children: _ }),
                                onClick: h ? A : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, l.jsx)("div", {
                                    className: ld.er,
                                    children:
                                        T.length > 0
                                            ? (0, l.jsx)(ek.D, {
                                                  className: ld.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: y,
                                              })
                                            : y,
                                }),
                            }),
                            T.length > 0 &&
                                (0, l.jsx)(oI.A, {
                                    ref: g,
                                    className: ld.t2,
                                    users: T,
                                    maxUsers: 3,
                                    size: tx._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: ld.BV,
                                }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: A, loading: c, disabled: h, variant: v, text: I, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var oN = n(821418),
    oj = n(340837);
let oT = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, oj.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, oN.Q.IS_GUEST_INVITE)
    );
};
var oS = n(517905);
function oy(e) {
    let t,
        i,
        a,
        {
            onTransitionToInviteChannel: r,
            onAcceptInstantInvite: o,
            guild: u,
            invite: m,
            message: g,
            currentUserId: A,
        } = e,
        E = A === g.author.id,
        { channel: _, approximate_member_count: C, approximate_presence_count: I } = m,
        v = m.state === K.elq.ACCEPTING,
        N = null != _ ? (0, ol.OY)(_) : null,
        j = null != u,
        T = null != N,
        S = null != N && N.isGuildStageVoice(),
        y = (0, c.Lt)(m.flags ?? 0, oN.Q.IS_GUEST_INVITE),
        b = N?.isGuildVoiceOrThread() ?? !1,
        R = u?.features.has(K.GuildFeatures.HUB) ?? !1,
        L = u?.id,
        { analyticsLocations: M } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: _?.id,
            invite_instance_id: (0, lm._U)(m.code, g.id),
            invite_channel_type: _?.type,
            embed_type: "guild_invite",
            location_stack: M,
        },
    });
    let [k, O] = s.useState(!1),
        P = s.useCallback(() => O(!1), []),
        D = s.useRef(null),
        U = (0, d.bG)([lk.Ay], () => oT([lk.Ay], m)),
        G = s.useCallback(() => {
            O(!0), (0, r7.Pq)(L, "show profile", M);
        }, [L, M]),
        w = s.useCallback(() => {
            let e = "noop";
            j ? (r(), (e = "transition")) : (o(), (e = "accept")),
                (0, r7.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: g.author.id,
                        invite_message_id: g.id,
                        invite_instance_id: (0, lm._U)(m.code, g.id),
                    },
                    M,
                );
        }, [m, g, M, j, r, o]);
    if (null == u) {
        if (null == m.guild) return (0, l.jsx)(oc, {});
        (u = oa.DY(m.guild)).premiumTier = m.guild.premium_tier ?? K.TVA.NONE;
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
            className: ld.FA,
            children: [
                (0, l.jsx)(oS.A, {
                    guildId: u.id,
                    name: u.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, l.jsx)(i3.A.GuildName, { guild: u, ref: D }),
                }),
                (0, l.jsx)("span", {
                    className: ld.E3,
                    children: (0, l.jsx)(aS.A, { guild: u, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (a = (0, l.jsx)(tV.m, {
                asContainer: !0,
                text: W.intl.string(W.t["/FeTK6"]),
                children: (0, l.jsx)(n$.m, { size: "md", color: "currentColor", className: ld.G }),
            })),
        b
            ? ((i = (0, l.jsx)(i3.A.Channel, { channel: N })),
              (t = (0, l.jsxs)("span", {
                  className: ld.FA,
                  children: [
                      W.intl.format(W.t["2wimj5"], { guildName: u.name }),
                      (0, l.jsx)("span", {
                          className: ld.E3,
                          children: (0, l.jsx)(aS.A, { guild: u, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != I && I > 0)
              ? (t = (0, l.jsx)(i3.A.Data, { members: C, membersOnline: I }))
              : T && (t = (0, l.jsx)(i3.A.Channel, { channel: N, guild: u })),
        (0, l.jsxs)(i3.A, {
            children: [
                (0, l.jsx)(i3.A.GuildSplash, { guild: u }),
                (0, l.jsx)(i3.A.Header, { text: H, extra: a }),
                (0, l.jsxs)(i3.A.Body, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: ld.iH,
                            children: [
                                (0, l.jsx)(i3.A.Icon, { guild: u }),
                                (0, l.jsx)(i3.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: ld.UD,
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
                u.features.has(K.GuildFeatures.HUB) &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", { className: ld.me }),
                            (0, l.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: W.intl.format(W.t["/o1IfA"], {
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
var ob = n(9994),
    oR = n(461888),
    oL = n(422253),
    oM = n(123213),
    ok = n(963402),
    oO = n(42780),
    oP = n(897288),
    oD = n(34368);
function oU(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: o } = e,
        c = s.useRef(null),
        u = s.useId(),
        [m, h] = s.useState(!0),
        [g, p] = s.useState(!1),
        A = t.state === K.elq.ACCEPTING,
        E = (0, d.bG)([aH.Ay], () => aH.Ay.useReducedMotion),
        { analyticsLocations: _ } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lm._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: _,
        },
    }),
        s.useLayoutEffect(() => {
            p((c.current?.clientHeight ?? 0) > 292);
        }, [p]);
    let C = (0, ob.oO)(t),
        I = s.useCallback(() => {
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
    if (null == C) return (0, l.jsx)(oc, {});
    let j = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: oD.uY,
                ref: c,
                children: [
                    (0, l.jsx)(oO.J$, { profile: C, className: oD.vK }),
                    (0, l.jsx)(oO.CG, { profile: C }),
                    (0, l.jsx)(ok.A, { profile: C, disableGuildNameClick: !g, guildNameId: u }),
                    (0, l.jsx)(oL.P, { profile: C, className: oD.rb }),
                    (0, l.jsx)(oP.A, {
                        guild: null != t.guild ? (0, oa.DY)(t.guild) : null,
                        roles: t.roles,
                        className: oD.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, l.jsx)("div", {
                      className: oD.Se,
                      children: (0, l.jsx)(sd.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: v,
                          text: W.intl.string(W.t.xdCLeM),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: r()(oD.qr, { [oD.iK]: g }),
                children: [
                    g && m ? (0, l.jsx)("div", { className: oD.D7 }) : null,
                    (0, l.jsx)("div", {
                        className: r()(oD.z8, { [oD.it]: g && m }),
                        children: (0, l.jsx)("div", {
                            className: oD.UD,
                            children: (0, l.jsx)(oG, {
                                invite: t,
                                profile: C,
                                isMemberOfGuild: n,
                                message: i,
                                submitting: A,
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
        ? (0, l.jsx)(tH.s, {
              className: r()(oD.Gg, { [oD.vk]: m }),
              onClick: I,
              style: N,
              "aria-label": W.intl.string(W.t.dcl9MQ),
              children: j,
          })
        : (0, l.jsx)("div", { className: oD.Gg, role: "group", "aria-labelledby": u, children: j });
}
function oG(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: a,
            submitting: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        { guildId: d, ctaType: u } = (0, oR.Ay)(n, oR.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = s.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, r7.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id,
                    invite_instance_id: (0, lm._U)(t.code, a.id),
                },
                m,
            );
        }, [t, a, m, i]);
    return null == u
        ? null
        : (0, l.jsx)(oM.Y, {
              guildId: d,
              ctaType: u,
              submitting: r,
              onGoToGuild: o,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: h,
          });
}
function ow(e) {
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
        (0, l.jsxs)(i3.A, {
            className: ld.TV,
            role: "group",
            "aria-labelledby": r,
            children: [
                (0, l.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ld.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, l.jsx)(i3.A.Body, {
                    children: (0, l.jsxs)("div", {
                        className: ld.iH,
                        children: [
                            (0, l.jsx)(i3.A.Icon, { expired: !0 }),
                            (0, l.jsx)(i3.A.Info, {
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
var oH = n(616356);
function oV(e) {
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
            [oH.A],
            () => (null != n && null != n.target_user ? oH.A.getActiveStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        g = (0, d.bG)(
            [oH.A],
            () => (null != n && null != n.target_user ? oH.A.getStreamForUser(n.target_user.id, u) : null),
            [n, u],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lm._U)(n.code, r.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === od.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ej()(null != n, "Invite cannot be null");
    let { target_type: _, target_user: C } = n;
    ej()(_ === od.yV.STREAM && null != C, "invalid streaming invite");
    let I = i === C.id,
        v = n.state === K.elq.ACCEPTING,
        N = s.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (c(), (e = "accept")),
                (0, r7.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, lm._U)(n.code, r.id),
                    },
                    p,
                );
        }, [n, r, p, A, o, c]),
        j = null != a;
    if (null == a) {
        if (null == n.guild) return (0, l.jsx)(oc, {});
        a = (0, oa.DY)(n.guild);
    }
    let T = null != n.channel ? (0, ol.OY)(n.channel) : null,
        S = ro.Ay.getName(C),
        y = A || (!E && j),
        b = W.intl.string(W.t.I6JG46),
        R = "active";
    j && !E
        ? ((t = I ? W.intl.string(W.t.oBLoZJ) : W.intl.formatToPlainString(W.t["0QJmA+"], { name: S })),
          (b = W.intl.string(W.t.Wdi5E1)))
        : ((R = "active"),
          A && ((b = W.intl.string(W.t.Q1W99y)), (R = "secondary")),
          (t = I ? W.intl.string(W.t["4hyaHu"]) : W.intl.formatToPlainString(W.t.QmlLEq, { name: S })));
    let L =
        m === a.id && null != T
            ? (0, l.jsx)(i3.A.Channel, { channel: T })
            : W.intl.formatToPlainString(W.t.u0vaDE, { guildName: a.name });
    return (0, l.jsxs)(i3.A, {
        children: [
            (0, l.jsx)(i3.A.Header, { text: W.intl.string(W.t["wS+5Wb"]) }),
            (0, l.jsxs)(i3.A.Body, {
                children: [
                    (0, l.jsxs)("div", {
                        className: ld.iH,
                        children: [
                            (0, l.jsx)(i3.A.Icon, { guild: a, onClick: j && E ? N : void 0 }),
                            (0, l.jsx)(i3.A.Info, { title: t, onClick: j && E ? N : void 0, children: L }),
                        ],
                    }),
                    (0, l.jsx)(ep.$, { onClick: N, loading: v, disabled: y, variant: R, text: b }),
                ],
            }),
        ],
    });
}
var oB = n(459192),
    oF = n(364522),
    oz = n(952270),
    oJ = n(52074),
    oY = n(725613),
    oK = n(693879),
    oW = n(145497),
    oX = n(481947),
    oZ = n(977997),
    oq = n(607567),
    oQ = n(516111);
function o$(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: a } = e,
        r = (0, io.Ay)(i),
        o = (0, d.bG)([nz.A], () => nz.A.getGuild(i.guild_id), [i.guild_id]),
        c = (0, d.bG)([oZ.A], () => oZ.A.isInChannel(i.id), [i.id]),
        { voiceStates: u } = (0, d.cf)(
            [oq.Ay],
            () => ({ voiceStates: null != i.guild_id ? oq.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = s.useMemo(
            () => [...u.filter((e) => e.voiceState.selfStream), ...u.filter((e) => !e.voiceState.selfStream)],
            [u],
        ),
        h = (0, d.bG)([oY.A], () => oY.A.getStartTime(i), [i]);
    s.useEffect(() => {
        null != h || null == i.guild_id || oY.A.hasRequestedStartTimes(i.guild_id) || (0, oJ.U)(i.guild_id);
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
    let _ = s.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", E),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", E);
            },
            [E],
        ),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED, x.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        I = (0, lm._U)(t.code, n.id),
        v = u.some((e) => e.voiceState.selfStream);
    (0, e3.A)({
        name: e2.ImpressionNames.VOICE_INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: I,
            has_active_stream: v,
            location_stack: C,
        },
    });
    let N = s.useCallback(() => {
            (0, l0.iN)(i.id);
        }, [i.id]),
        j = s.useCallback(() => {
            a(),
                (0, r7.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: I,
                        number_of_users_in_channel: u.length,
                    },
                    C,
                );
        }, [t, n, C, I, u.length, a]);
    return (0, l.jsxs)("div", {
        className: oQ.kL,
        children: [
            (0, l.jsxs)("div", {
                className: oQ.nz,
                children: [
                    (0, l.jsxs)("div", {
                        className: oQ.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: oQ.yW,
                                children: [
                                    (0, l.jsx)(rU.H, {
                                        className: oQ.p,
                                        color:
                                            u.length > 0 ? nU.A.colors.TEXT_FEEDBACK_POSITIVE : nU.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, l.jsx)(oB.u, {
                                        title: `${o?.name} / ${r}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, l.jsx)(oW.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, l.jsx)(ek.D, {
                                            className: oQ.HA,
                                            onClick: N,
                                            children: (0, l.jsx)(p.E, {
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
                                ? (0, l.jsx)(oK.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, l.jsxs)("div", {
                              className: oQ.Ao,
                              children: [
                                  (0, l.jsx)(oF.Ip, {
                                      ref: _,
                                      className: oQ.JD,
                                      children: m.map((e) =>
                                          (0, l.jsx)(
                                              oX.Ay,
                                              {
                                                  className: oQ.Eq,
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
                                  (0, l.jsx)("div", { ref: A, className: oQ.wH }),
                              ],
                          })
                        : (0, l.jsx)("div", {
                              className: oQ.p$,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t.zSqdrS),
                              }),
                          }),
                    (0, l.jsx)("div", {
                        className: oQ.TB,
                        children: (0, l.jsx)(ep.$, {
                            onClick: j,
                            icon: rU.H,
                            variant: "active",
                            fullWidth: !0,
                            text: W.intl.string(W.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: oQ.qr,
                children: [
                    (0, l.jsx)(oz.G, { size: "custom", color: "currentColor", className: oQ.Dq }),
                    (0, l.jsx)(p.E, {
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
function o0(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: s } = e,
        a = t.channel?.id,
        r = (0, d.bG)([P.A, tt.A], () => {
            let e = P.A.getChannel(a);
            return null != e && tt.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [a]),
        o = (0, d.bG)([nz.A], () => null != nz.A.getGuild(t.guild?.id), [t.guild]);
    return null == r
        ? (0, l.jsx)(oU, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: s,
          })
        : (0, l.jsx)(o$, { invite: t, message: n, channel: r, onTransitionToInviteChannel: i });
}
var o1 = n(652896),
    o2 = n(834757),
    o3 = n(427358),
    o5 = n(711682);
function o6(e) {
    let { className: t, channel: n, guild: i, onClick: s } = e,
        a = (0, n4.gU)(n, i),
        o = (0, io.Ay)(n);
    return (0, l.jsxs)(ek.D, {
        onClick: s,
        className: r()(o5.UP, t),
        children: [
            null != a &&
                (0, l.jsx)(a, { className: o5.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, l.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, l.jsxs)(sk.A, { children: [i.name, " / ", o] }),
            }),
            (0, l.jsx)(n6._, { className: o5.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var o4 = n(682577),
    o9 = n(717421),
    o7 = n(562153),
    o8 = n(297413),
    ce = n(325943);
function ct(e) {
    let { user: t, guildId: n, channelId: i, nick: a } = e,
        r = s.useRef(null);
    return (0, l.jsx)(lM.A, {
        targetElementRef: r,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, l.jsxs)(ek.D, {
                ...s,
                innerRef: r,
                className: ce.nM,
                onClick: i,
                children: [
                    (0, l.jsx)(tA.eu, {
                        src: t.getAvatarURL(n, (0, tx.FT)(tx._3.SIZE_24)),
                        className: ce.my,
                        "aria-label": t.username,
                        size: tx._3.SIZE_24,
                    }),
                    (0, l.jsx)(p.E, {
                        className: ce.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, l.jsx)(o8.A, { user: t, nick: a, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var cn = n(334240);
function ci(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: a, ...r } = e,
        o = s.useCallback((e) => (0, l.jsx)(cl, { users: e, guildId: t, channelId: n, onHoverOrFocus: a }), [t, n, a]);
    return (0, l.jsx)(sS.Y, { renderPopout: () => o(i), ...r });
}
function cl(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: a } = e,
        r = s.useRef(null),
        { isHoveringOrFocusing: o } = (0, tJ.A)(r);
    return (
        s.useEffect(() => {
            a?.(o);
        }, [a, o]),
        (0, l.jsx)("div", {
            ref: r,
            className: cn.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, l.jsx)(oF.Ip, {
                className: cn.G,
                children: t.map((e) =>
                    (0, l.jsx)(
                        ct,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: o7.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var cs = n(360801);
let ca = { mass: 1, tension: 170, friction: 26 };
function cr(e) {
    let { className: t, guildId: n, channelId: i, members: a, ref: o, motion: c } = e,
        d = a.length > 4,
        u = d ? a.slice(0, 3) : a,
        m = d ? a.length - 4 + 1 : 0,
        h = Math.min(d ? u.length + 1 : u.length, 4),
        g = (c?.percentX ?? 0) * 6,
        p = (c?.percentY ?? 0) * 6,
        A = 1 + ((c?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, o9.z)(() => ({ x: 0, y: 0, scale: 1, config: ca }));
    return (
        s.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, l.jsxs)(o4.animated.div, {
            ref: o,
            className: r()(cs.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, o4.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: cs.my,
                            children: (0, l.jsx)(tV.m, {
                                text: o7.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, l.jsx)(tA.eu, {
                                    src: (function (e, t, n) {
                                        let i = lk.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, w.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tx._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tx._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tx._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tx._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tx._3.SIZE_48
                                                    : h > 2
                                                      ? tx._3.SIZE_40
                                                      : tx._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                d && (0, l.jsx)(co, { guildId: n, channelId: i, members: a, count: m }, "overflow"),
            ],
        })
    );
}
function co(e) {
    let { guildId: t, channelId: n, members: i, count: a } = e,
        {
            triggerRef: o,
            shouldShow: c,
            onPopoutHoverOrFocus: d,
        } = (function () {
            let e = s.useRef(null),
                { isHoveringOrFocusing: t } = (0, tJ.A)(e),
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
    return (0, l.jsx)(ci, {
        targetElementRef: o,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: c,
        onHoverOrFocus: d,
        children: (e) =>
            (0, l.jsx)("div", {
                className: r()(cs.my, cs.k2),
                ref: o,
                ...e,
                children: (0, l.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: a > 99 ? ">99" : `+${a}`,
                }),
            }),
    });
}
var cc = n(816196);
function cd(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: a, onAcceptInstantInvite: o } = e,
        c = s.useRef(null),
        u = i ?? null;
    null == u && null != t.guild && (u = oa.DY(t.guild));
    let m = null != t.channel ? (0, ol.OY)(t.channel) : null;
    ej()(null != u, "Voice Invite Embed must be used in context of a guild."),
        ej()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, d.bG)([tt.A, P.A], () => {
            let e = P.A.getChannel(m.id);
            return null == e || tt.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, d.bG)([oq.Ay], () => (h ? oq.Ay.getVoiceStatesForChannelAlt(m.id, u.id) : []), [m.id, u.id, h]),
        { label: A, sublabel: E } = (function (e) {
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
        _ = (0, d.bG)([nz.A], () => null != nz.A.getGuild(u.id), [u.id]),
        C = (0, d.bG)([ed.Ay], () => ed.Ay.getVoiceChannelId() === m.id, [m.id]),
        I = (0, d.bG)([lk.Ay], () => oT([lk.Ay], t), [t]),
        v = t.state === K.elq.ACCEPTING,
        { analyticsLocations: N } = (0, f.Ay)(x.A.INVITE_EMBED),
        j = (0, lm._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, d.bG)([oH.A, o3.A], () => {
                if ((0, on.G4)(t) && null != t.target_user) {
                    let e = oH.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = oH.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let a = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === a.length) return null;
                for (let e of [...a].sort((e, t) => {
                    let n = o3.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (o3.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = oH.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: u.id, channelId: m.id }),
        S = (0, o2.AO)(T),
        y = null != T,
        b = s.useCallback(() => {
            let e = _ ? "transition" : "accept";
            _ ? a() : o(),
                (0, r7.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: j,
                        application_id: S?.id ?? void 0,
                        stream_key: null != T ? (0, o1._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    N,
                );
        }, [t, n, N, j, _, S, T, g.length, a, o]),
        R = s.useCallback(() => {
            _ ? (0, l0.iN)(m.id) : o({ autoJoin: !1 }),
                eB.default.track(K.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: u.id,
                    invite_channel_id: m.id,
                    invite_instance_id: j,
                    is_member: _,
                    application_id: S?.id ?? null,
                    stream_key: null != T ? (0, o1._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: N,
                });
        }, [m.id, u.id, t.code, j, _, S, T, g.length, N, o]);
    (0, e3.A)({
        name: e2.ImpressionNames.VOICE_INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: u.id,
            invite_channel_id: m.id,
            invite_instance_id: j,
            has_active_stream: y,
            location_stack: N,
        },
    });
    let L = (0, d.bG)([aH.Ay], () => aH.Ay.useReducedMotion),
        M = s.useRef(null),
        [k, D] = s.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, d.bG)([o3.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = o3.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (o3.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = s.useMemo(() => th().throttle(D, 20), [D]);
    s.useEffect(() => () => G.cancel(), [G]);
    let w = s.useCallback(
            (e) => {
                if (L) return;
                let t = M.current?.getBoundingClientRect();
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
            [L, G],
        ),
        H = s.useCallback(() => {
            G.cancel(), D({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, l.jsxs)("div", {
        className: cc.kL,
        children: [
            (0, l.jsxs)("div", {
                ref: M,
                className: cc.hw,
                onMouseMove: w,
                onMouseLeave: H,
                children: [
                    (0, l.jsx)("div", { className: cc.ys }),
                    (0, l.jsx)("div", { className: cc.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, l.jsxs)("div", {
                        className: cc.rf,
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(cc.Qs, { [cc.tE]: 0 === U.length }),
                                children: [
                                    (0, l.jsx)(o6, { channel: m, guild: u, onClick: R }),
                                    (0, l.jsxs)("div", {
                                        className: cc.WD,
                                        children: [
                                            (0, l.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, l.jsx)(sk.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != E
                                                ? (0, l.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: cc.$B,
                                                      children: (0, l.jsx)(sk.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, l.jsx)("div", {
                                      className: cc.RE,
                                      children: (0, l.jsx)(cr, {
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
                        className: cc.xk,
                        children: (0, l.jsx)(ep.$, {
                            onClick: b,
                            loading: v,
                            variant: C ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !I,
                            text: C ? W.intl.string(W.t["3xjX0U"]) : W.intl.string(W.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: cc.qr,
                children: [
                    (0, l.jsx)(oz.G, { size: "custom", color: "currentColor", className: cc.Dq }),
                    (0, l.jsx)(p.E, {
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
function cu(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: a, inviteError: r } = (0, d.cf)(
            [os.A],
            () => ({ invite: os.A.getInvite(t), inviteError: os.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lm._U)(t, n.id);
    s.useEffect(() => {
        null == a && r7.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let c = a ?? { state: K.elq.RESOLVING, code: "" },
        { analyticsLocations: u } = (0, f.Ay)(),
        m = (0, d.bG)([nz.A], () => (a?.guild != null ? nz.A.getGuild(a.guild.id) : null), [a]),
        h = (0, d.bG)([P.A, tt.A], () => {
            let e = a?.channel?.id;
            if (null == e) return !1;
            let t = P.A.getChannel(e);
            return null != t && tt.A.canBasicChannel(K.hVb.VIEW_CHANNEL, t);
        }, [a]),
        g = (0, d.bG)([O.default], () => O.default.getId()),
        p = (0, d.bG)([oe.Ay], () => oe.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]);
    function A() {
        null != c.channel && r7.Ay.transitionToInvite(c, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == m && a?.guild != null ? oa.DY(a.guild) : m;
        (0, oi.g)({ guild: n, isMember: null != m, analyticsLocations: u }) === oi.W.PROCEED &&
            r7.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
    }
    let E = (0, l.jsx)(oy, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: c,
        message: n,
    });
    switch (c.state) {
        case K.elq.RESOLVING:
            E = (0, l.jsx)(oc, {});
            break;
        case K.elq.EXPIRED:
        case K.elq.BANNED:
            E = (0, l.jsx)(ow, { banned: c.state === K.elq.BANNED, author: n.author });
            break;
        case K.elq.ERROR:
            E = (0, l.jsx)(of, { author: n.author, inviteError: r });
            break;
        default:
            switch ((0, on.On)(c)) {
                case on.Xd.GROUP_DM:
                    E = (0, l.jsx)(ov, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: c,
                        message: n,
                    });
                    break;
                case on.Xd.FRIEND:
                    E = (0, l.jsx)(oC, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, on.G4)(c)) {
                        if (null != c.channel && (0, ol.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = oo({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (h)
                                if (e.enabled) {
                                    E = (0, l.jsx)(o0, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    E = (0, l.jsx)(cd, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        E = (0, l.jsx)(oV, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, on.ly)(c)) {
                        E = (0, l.jsx)(ot.Ay, {
                            guildScheduledEvent: p,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, on.oK)(c)) {
                        E = (0, l.jsx)(og, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, ol.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = oo({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (h)
                            if (e.enabled) {
                                E = (0, l.jsx)(o0, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                E = (0, l.jsx)(cd, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, r8.v)(c) &&
                        (E = (0, l.jsx)(oU, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, l.jsx)(rd.A, { section: K.JJy.INVITE_LINK, children: E });
}
var cm = n(266620),
    ch = n(860227),
    cg = n(763899),
    cp = n(503002),
    cA = n(123791),
    cx = n(627363);
function cf(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, cx.YY)(t);
    return null == i ? null : (0, l.jsx)(cE, { app: i, guildId: n });
}
function cE(e) {
    let { app: t, guildId: i } = e;
    (0, cA.C)(t.id);
    let a = s.useCallback(() => {
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
    return (0, l.jsx)(ep.$, {
        size: "sm",
        onClick: a,
        icon: cp.U,
        text: W.intl.format(W.t.XDRjs5, { appName: t.name }),
    });
}
var c_ = n(394839),
    cC = n(96782),
    cI = n(279182),
    cv = n(861986),
    cN = n(87221),
    cj = n(576872);
function cT(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: cj.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, l.jsxs)(
                    "div",
                    {
                        className: cj.Yf,
                        children: [
                            (0, l.jsx)(cN.D, { size: "lg", color: nU.A.colors.TEXT_MUTED }),
                            (0, l.jsx)(p.E, {
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
                className: cj.Fj,
                children: [
                    (0, l.jsx)(n$.m, { size: "sm", color: nU.A.colors.TEXT_MUTED }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: W.intl.string(W.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var cS = n(343552),
    cy = n(581619),
    cb = n(406244);
let cR = [K.Auw.GIFV],
    cL = 15 * nA.A.Millis.MINUTE,
    cM = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    ck = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s, flags: a } = e,
            r = (0, c.Lt)(a, lE.e5.IS_ANIMATED);
        return null != i && null != s && (l_.bp.test(n) || (r && (l_.P8.test(n) || l_.p4.test(n))))
            ? (0, l.jsx)(a$.A, { width: i, height: s, src: n, url: t, format: u.TL.IMAGE, className: cb.jj })
            : null;
    };
class cO extends s.Component {
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
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cM.has(e));
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
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case a_.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, l.jsx)(n5, { messageId: e.id, channelId: t.id });
                break;
            case a_.xC.AGE_VERIFICATION_RETRY:
                i = (0, l.jsx)(eE, { channelId: t.id });
                break;
            case a_.xC.CONNECT_TO_TEEN:
                i = (0, l.jsx)(ev, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, l.jsx)("div", { className: cb.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: s, url: a } = n;
            if ((0, tR.Yf)(i)) {
                let n = (0, tR.kK)(i, s, a);
                if (null == n) return null;
                let { applicationId: r } = n;
                return (0, l.jsx)(
                    e1.O,
                    {
                        applicationId: r,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tL.I.APP_DIRECTORY_PROFILE:
                                    return (0, l.jsx)(i7, { code: r, message: e });
                                case tL.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, l.jsx)(eg, { application: t, message: e, params: i });
                                case tL.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, l.jsx)(eQ, { application: t, message: e });
                                case tL.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: s } = n;
                                    return (0, l.jsx)(e$, { application: t, message: e, skuId: s });
                                case tL.I.APP_OAUTH2_LINK:
                                    return (0, l.jsx)(e5, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    s,
                );
            }
            switch (i) {
                case tL.I.INVITE:
                    if (!this.shouldRenderInvite(s)) return null;
                    return (0, l.jsx)(
                        cu,
                        { code: s, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        s,
                    );
                case tL.I.TEMPLATE:
                    return (0, l.jsx)(lu, { code: s }, s);
                case tL.I.EVENT:
                    return (0, l.jsx)(ll.A, { code: s }, s);
                case tL.I.CHANNEL_LINK:
                    return (0, l.jsx)(ab, { code: s, message: e }, s);
                case tL.I.GUILD_PRODUCT:
                    return (0, l.jsx)(li, { code: s }, s);
                case tL.I.SERVER_SHOP:
                    return (0, l.jsx)(nX, { guildId: s }, s);
                case tL.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(
                        sN.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, sv.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        s,
                    );
                }
                case tL.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = s.split("-");
                    return (0, l.jsx)(sN.I, { applicationId: n, skuId: e, channel: t }, s);
                }
                case tL.I.QUESTS_EMBED:
                    return (0, l.jsx)(lW.A, { questId: s }, s);
                case tL.I.GAME_PROFILE:
                    return (0, l.jsx)(iM, { gameId: s, sourceUserId: e.author.id }, s);
                case tL.I.GAME_SERVER_SHARE:
                    return (0, l.jsx)(i$, { code: s }, s);
                case tL.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tk.has(i) ? i : void 0 };
                    })(s);
                    if (null == e) return null;
                    return (0, l.jsx)(nD, { skuId: e.skuId, tab: e.tab, channel: t }, s);
                }
                case tL.I.EXPERIMENT:
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
                          className: cb.zv,
                          children: (0, l.jsx)(r9, {
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
            : (0, l.jsx)(cI.A, {
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
        if (0 === d.length || e.isPoll() || (0, ap._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, K.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, lE.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, K.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, lz.o)(
                h,
                { enabledContentHarmTypeFlags: r, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, K.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, aC.iW)(e.originalItem, t);
        }
        let E = m.map((l) => {
            let r = (0, lE.aG)(l),
                o = {
                    message: e,
                    item: (0, cC.rC)(l, s),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, r);
                              }
                            : void 0,
                    renderAudioComponent: x ? cm.SX : cm.Nj,
                    renderImageComponent: cm.Cr,
                    renderVideoComponent: cm.I1,
                    renderPlaintextFilePreview: cm.R6,
                    renderGenericFileComponent: cm.UB,
                    onPlay: function (n, i, s) {
                        eB.default.track(K.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: ck(r),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                c = (0, ax.E)({ proxyURL: l.proxy_url, url: l.url });
            return c in g && A && ((o.onClick = g[c]), (o.handlePreloadImage = p[c])), o;
        });
        return (0, l.jsx)(c_.A, { items: E });
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
            u = (0, aC.sC)(e, i, o, c);
        if (e.type === K.Auw.GIFT) return null;
        let m = cR.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, l.jsx)(
            i0.G.Provider,
            {
                value: (0, cS.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, l.jsx)(tu.Ay, {
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
        e.type !== K.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lf.A.parseEmbedTitleWithoutLinks : lf.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === K.Auw.RICH
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
                            a = s.attachments.map((e) => ({ id: e.id })),
                            r = a.find((e) => e.id === t.id);
                        null != r &&
                            ((r.description = n), (r.is_spoiler = i), A.A.patchMessageAttachments(l.id, s.id, a));
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
                      cy.z.has(t.type) ||
                      (0, af.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, K.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lg.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lp.has(t.content_type);
                              })
                          )) ||
                      (0, af.V)(t) ||
                      (0, af.G8)(t) ||
                      (0, af.Xk)(t)
                  )
                      return null;
                  if (t.type === K.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var s = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: a,
                              onMediaItemContextMenu: r,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: c,
                          } = this.props,
                          d = (0, aC.sC)(t, e, c, i),
                          u = function () {
                              let c = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, l.jsx)(
                                  aD,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: ck,
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
                                so.Ay,
                                {
                                    type: so.Ay.Types.EMBED,
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
                      t.type === K.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = aE.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let s = i.pathname.split("/")[3];
                          if (null != s)
                              return (0, l.jsx)(
                                  r0,
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
        return (0, l.jsx)(ak.N, {
            gifAutoPlay: t,
            getGifFavButton: ck,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), a?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, l.jsx)(lA.Ay, { message: e, shouldDisableInteractiveComponents: s }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, l.jsx)(cg.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== K.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(td, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, aI.ec)(e)
            ? (0, l.jsx)(aQ.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lJ.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, l.jsx)(s3, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(K.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(ah, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(K.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - s8.default.extractTimestamp(e.id) >= cL)
        )
            return (0, l.jsx)("div", { className: cb.xM, children: W.intl.string(W.t.ma8Rs0) });
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
                A.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: cb.IX,
                    children: W.intl.string(W.t["vXZ+Fo"]),
                }),
                (0, l.jsx)(p.E, {
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
                      A.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, l.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: cb.IX,
                      children: W.intl.string(W.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(cf, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(e1.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, l.jsx)(aq, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== K.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(lF, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_POLICY_NOTICE
            ? (0, l.jsx)(sh, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, l.jsx)(sI, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nq.KM)(e)
            ? (0, l.jsx)(n1, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, l.jsx)(lK.A, { message: e, poll: t, className: cb.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, l.jsx)(ty, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lX.Mn)(e, this.props.channel)) return (0, l.jsx)(sr, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lX.Mn)(e, this.props.channel))
            return (0, l.jsx)(iv, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, l.jsx)(cv.A, { message: e, compact: t, location: cv.O.AFTER_ACCESSORIES });
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
                (0, lJ.o6)(n).length;
        return 0 === i
            ? null
            : (0, l.jsx)("div", {
                  id: (0, ch.XL)(e),
                  className: r()(this.props.className, cb.kL),
                  children: (0, l.jsx)(cT, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: a } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, l.jsx)("div", { id: (0, ch.XL)(t), className: r()(e, cb.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let o = this.renderEditedTag(t, i),
            c = this.renderCodedLinks(t),
            d = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            h = this.renderEmbeds(t),
            g = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            A = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            E = this.renderThreadAccessories(t),
            _ = this.renderComponentAccessories(t),
            C = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            N = this.renderMediaPostEmbeds(t),
            j = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            S = this.renderMediaObscureNotice(t),
            y = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            R = this.renderReportedMessage(t),
            L = this.renderShareClientTheme(t);
        return null == c &&
            null == u &&
            null == h &&
            null == g &&
            null == p &&
            null == d &&
            null == A &&
            null == x &&
            null == f &&
            null == E &&
            null == _ &&
            null == I &&
            null == C &&
            null == N &&
            null == j &&
            null != v &&
            null == y &&
            null == b &&
            null == R &&
            null == L
            ? null
            : (0, l.jsxs)("div", {
                  id: (0, ch.XL)(t),
                  className: r()(e, cb.kL),
                  children: [
                      R,
                      b,
                      C,
                      y,
                      L,
                      c,
                      d,
                      N,
                      u,
                      m,
                      h,
                      S,
                      g,
                      f,
                      _,
                      I,
                      v,
                      o,
                      p,
                      A,
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
function cP(e) {
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
        m = ia.X6.useSetting(),
        h = ia.hD.useSetting(),
        g = ia.rs.useSetting() && !(0, s7.A)(e.message),
        p = ia.jW.useSetting() && !1 !== e.renderReactions,
        A = ia.kt.useSetting(),
        x = (0, d.bG)([aA.A], () => null == n.guild_id || aA.A.canChatInGuild(n.guild_id), [n]),
        f = (0, d.bG)([lx.A], () => null != n.guild_id && lx.A.isLurking(n.guild_id), [n]),
        E = (0, d.bG)([lk.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? lk.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: _, canManageMessages: C } = (0, d.cf)(
            [tt.A],
            () => ({
                canAddNewReactions: x && tt.A.can(K.xBc.ADD_REACTIONS, n),
                canManageMessages: tt.A.can(K.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        I = (0, i8.ix)(n.guild_id),
        [, v] = (0, le.c)(n.guild_id),
        N = (0, s5.Id)(n),
        j =
            (u === i.author.id || C) &&
            i.author.id !== K.oIV &&
            !1 !== s &&
            !(0, c.Lt)(i.flags, K.pr7.EPHEMERAL) &&
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
        b = (0, aN.A)({
            channel: n,
            canChat: x,
            renderReactions: p,
            canAddNewReactions: _,
            isLurking: f,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: N,
            isAutomodQuarantined: I,
        }),
        R = (0, n7.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        L = (0, lC.A)(n?.id),
        M = (0, lY.A)(i),
        k = (0, nQ.P)(i),
        P = (0, av.z)(n),
        D = (0, a_._f)(i.id, i.channel_id),
        U = (0, nZ._R)(),
        w = (0, n8.U)();
    return (0, l.jsx)(cO, {
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
        gifAutoPlay: A,
        canRenderReferralEmbed: n.isDM(),
        poll: M,
        showListsAndHeaders: R,
        showMaskedLinks: R,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: k,
        ctaButtonType: D,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: r,
        hideActivityInvite: o,
        restrictedPreview: w,
    });
}
function cD(e) {
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
        d = ia.X6.useSetting(),
        u = ia.hD.useSetting(),
        m = ia.rs.useSetting(),
        h = ia.kt.useSetting(),
        g = (0, n8.U)(),
        p = (0, n7.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, lC.A)(n?.id),
        x = (0, nQ.P)(t),
        f = (0, a_._f)(t.id, t.channel_id),
        E = (0, lY.A)(t);
    return (0, l.jsx)(cO, {
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
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: A,
        enabledContentHarmTypeFlags: x,
        ctaButtonType: f,
        restrictedPreview: g,
    });
}
