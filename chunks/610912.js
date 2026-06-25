n.d(t, { iV: () => oI, OC: () => ov, Ay: () => oC }), n(938796);
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
    L = n(113854),
    R = n(207371),
    k = n(205184),
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
    q = n(578904);
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
    en = n(136397);
function ei(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, $.b)(t)),
        m = c?.id,
        h = (0, E.Ag)(t),
        g = w.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: I } = (0, Q.f)(t),
        C = (0, u.bG)([P.default], () => l ?? P.default.getId(), [l]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: b, canLaunchInChannel: k } = (0, V.w)(t.id),
        M = (0, T.A)(),
        O = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        U = null != m && h && O,
        G = k && h,
        B = (0, R.x)(t),
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
                                  L.A.launchFrame({ applicationId: t.id });
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
        a = (0, k.s)(t.id),
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
    (0, R.x)(t)
        ? j.push({
              label: J.intl.string(J.t.RscU7I),
              trackingArea: Z.kY.PLAY,
              onClick() {
                  L.A.launchFrame({ applicationId: t.id });
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
var eE = n(284009),
    eI = n.n(eE),
    eC = n(192308),
    ev = n(664121),
    e_ = n(34188),
    ej = n(408278),
    eN = n(173936),
    eT = n(691540),
    ey = n(857250),
    eS = n(97483),
    eb = n(939249),
    eL = n(996759),
    eR = n(800342),
    ek = n(163437),
    eM = n(185438),
    eP = n(97352),
    eD = n(652676),
    eO = n(67480),
    eU = n(328968),
    eG = n(174459),
    ew = n(957565),
    eB = n(943775),
    eV = n(997997),
    eH = n(658575),
    eF = n(376374),
    eY = n(435220),
    ez = n(495219);
let eK = (0, u.UT)([eO.A, eU.A, eP.A], {
        getQueryId: W.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eO.A.get(e),
                n = eU.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eP.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            eI()(null != e, "skuId is null"), await (0, eR.QB)(e);
        },
    }),
    eW = (0, u.UT)([eO.A], {
        getQueryId: W.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eO.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            eI()(null != e && null != t, "appId is null"), await (0, eR.JI)(t);
        },
    });
function eJ(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eH.G)(l),
        [o, d, c, m] = (0, u.yK)([eD.A, D.A], () => {
            let e = (0, eB.A)(t, 45),
                n = D.A.getBasicChannel(i.channel_id)?.guild_id;
            return [eD.A.getStoreLayout(l), eD.A.getFetchStatus(l), n, e];
        }, [t, l, i.channel_id]);
    r.useEffect(() => {
        d === eD.N.NONE && (0, eL.V)(l);
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
        (0, eC.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("48305"),
                n.e("96126"),
                n.e("26311"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(eX, {
        appName: t.name,
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: t.name }),
        description: p,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eY.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eV.K)(l, eV.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            A(),
                eG.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: l, area: "app_icon" });
        },
        children: (0, s.jsx)("div", {
            className: ez.mZ,
            children: (0, s.jsx)(eg.$, {
                onClick: function () {
                    A(),
                        eG.default.track(W.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        });
                },
                text: J.intl.string(J.t.kRvlKJ),
            }),
        }),
    });
}
function eq(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eK(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eW(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eB.A)(t, 45), [t]),
        g = (0, eH.G)(t.id),
        { openModal: p, subscriptionPurchaseButtonState: A } = (0, eM.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!g || null == o) return null;
    let x = o.type === W.Puh.SUBSCRIPTION,
        f = !!x && (0, ek.bg)(o.flags);
    function E() {
        (0, eC.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("48305"),
                n.e("96126"),
                n.e("26311"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let I = () => {
            (0, eC.openModalLazy)(async () => {
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
                          (0, s.jsx)(ev.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === C && (C = void 0);
    let v = () => {
        eG.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: t.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, s.jsx)(eX, {
        appName: t.name,
        title: o.name,
        description: C,
        link: `${location.protocol}//${location.host}${W.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eY.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eV.K)(t.id, eV.C.SKU_EMBED, i);
        },
        iconSrc: h,
        onIconClick: () => {
            E(),
                eG.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: t.id,
                    sku_id: o.id,
                    area: "app_icon",
                });
        },
        children: (0, s.jsxs)("div", {
            className: ez.w,
            children: [
                (0, s.jsx)(eg.$, {
                    variant: "secondary",
                    onClick: () => {
                        I(),
                            eG.default.track(W.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: t.id,
                                sku_id: o.id,
                                area: "view_details",
                            });
                    },
                    text: J.intl.string(J.t.DXYfjO),
                }),
                x
                    ? null != d
                        ? (0, s.jsx)(eF.rc, {
                              onClick: p,
                              appId: t.id,
                              subscriptionType: f ? "user" : "guild",
                              skuId: o.id,
                              icon: e_.U,
                              onHasClicked: v,
                              subscriptionPlan: d,
                              state: A,
                          })
                        : (0, s.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: I })
                    : (0, s.jsx)(eF.$P, { appId: t.id, sku: o, icon: e_.U, onHasClicked: v }),
            ],
        }),
    });
}
function eX(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: ez.iE,
        children: [
            (0, s.jsxs)("div", {
                className: ez.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: ez.qd,
                        children: [
                            (0, s.jsx)(e_.U, { size: "xxs" }),
                            (0, s.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    ew.p5 &&
                        (0, s.jsx)(ej.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, s.jsx)(eN.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, ew.C)(l, () => {
                                    (0, eT.P0)((0, ey.o)(J.intl.string(J.t["L/PwZf"]), eS.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ez.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: ez.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eb.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: ez.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: ez.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(p.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(p.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: ez.h_,
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
var eZ = n(627363),
    e$ = n(853811),
    eQ = n(381438),
    e0 =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i);
function e1(e, t, n) {
    return null == e || (0, e$.U1)({ type: e$.fS.MINIMAL, data: e }) !== eQ.Y.ADULT
        ? "display"
        : !0 !== t
          ? "block_underage"
          : n.isPrivate() || n.nsfw
            ? "display"
            : "block_channel_restriction";
}
var e2 = n(327992);
function e3(e) {
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
                            return t === e0.BLOCK_UNDERAGE ? J.intl.string(J.t.GhU4yl) : J.intl.string(J.t.B99UMJ);
                        case "app_embed":
                            return t === e0.BLOCK_UNDERAGE ? J.intl.string(J.t.LPOzxB) : J.intl.string(J.t.NIZyKq);
                        default:
                            return "";
                    }
                })(n, t),
            [n, t],
        );
    return (0, s.jsxs)("div", {
        className: e2.E,
        children: [
            (0, s.jsx)(p.E, { variant: "text-xs/semibold", color: "text-default", children: i }),
            (0, s.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
        ],
    });
}
function e6(e) {
    let { applicationId: t, channel: n, children: i } = e,
        { data: l } = (0, eZ.YY)(t),
        r = (0, u.bG)([G.default], () => G.default.getCurrentUser()?.nsfwAllowed);
    if (null == l) return null;
    let a = e1(l.contentClassification, r, n);
    switch (a) {
        case e0.DISPLAY:
            return (0, s.jsx)(s.Fragment, { children: i(l) });
        case e0.BLOCK_UNDERAGE:
        case e0.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e3, { visibility: a, variant: "app_embed" });
        default:
            return null;
    }
}
var e5 = n(562708),
    e4 = n(139286);
function e9(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e4.x)({
                type: e5.ImpressionTypes.VIEW,
                name: e5.ImpressionNames.APP_OAUTH2_LINK_EMBED,
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
var e7 = n(778492),
    e8 = n(534514),
    te = n(285796),
    tt = n(857182),
    tn = n(506774),
    ti = n(228366),
    tl = n(576705),
    ts = n(812930);
let tr = "ChannelFollowingBumpChannels",
    ta = new Set(),
    to = new Set();
class td extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(P.default, D.A, tl.A, G.default), (ta = new Set(tn.w.get(tr)));
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
            s = G.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === W.rbe.GUILD_ANNOUNCEMENT &&
                (0, ts.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? tl.A.can(W.xBc.SEND_MESSAGES, l)
                    : tl.A.can(W.xBc.MANAGE_MESSAGES, l)) &&
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
        ta.add(t), tn.w.set(tr, ta), to.clear();
    },
});
var tu = n(419056),
    tm = n(266304);
let th = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tc], () => tc.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            tt.A.dismissPublishBump(n), (0, tu.A)(t, n);
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
                          (0, s.jsx)(e7.k, { size: "xs", color: "currentColor", className: tm.Kk }),
                          (0, s.jsx)(e8.D, {
                              variant: "heading-sm/normal",
                              className: tm.dS,
                              children: J.intl.string(J.t.hasZoU),
                          }),
                          (0, s.jsx)(p.E, {
                              color: "text-brand",
                              className: tm.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eb.D, { onClick: l, children: J.intl.string(J.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eb.D, {
                              onClick: a,
                              children: (0, s.jsx)(te.a, { size: "xs", color: "currentColor", className: tm.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(p.E, {
                      color: "text-muted",
                      className: tm.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eb.D, { onClick: o, children: J.intl.string(J.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tg = n(175671),
    tp = n(735438),
    tA = n.n(tp),
    tx = n(239947),
    tf = n(403581),
    tE = n(97808),
    tI = n(778712),
    tC = n(520117),
    tv = n(793943),
    t_ = n(763754),
    tj = n(973654),
    tN = n(467135),
    tT = n(644235),
    ty = n(153469),
    tS = n(491404),
    tb = n(254393);
function tL(e) {
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
                  (0, s.jsx)(tk, { message: t }),
                  (0, s.jsx)(eg.$, {
                      text: J.intl.string(J.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eG.default.track(W.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tv.nf)(tv.HP.CUSTOM_THEME, { from: tv.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tL(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tj.GQ)((0, tT.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tk(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: a } = l,
        o = (0, t_.Ay)(l),
        d = r.useMemo(
            () =>
                (0, tp.once)(() => {
                    (0, e4.x)({ type: e5.ImpressionTypes.VIEW, name: tx.I.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        c = (0, tC.A)({
            onVisible: () => {
                d();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        u = r.useMemo(() => (void 0 === a ? "" : (0, ty.V9)(tL(a.colors), a.gradient_angle ?? 0)), [a]);
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
                          (0, s.jsxs)(e8.D, {
                              variant: "heading-md/semibold",
                              className: tb.qP,
                              children: [J.intl.string(tS.default.KSBBpC), " ", (0, s.jsx)(tf.t, {})],
                          }),
                          (0, s.jsx)(p.E, {
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
                                                            (0, s.jsx)(tE.eu, {
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
var tM = n(892768),
    tP = n(167189),
    tD = n(661531),
    tO = n(289873),
    tU = n(696986),
    tG = n(95561),
    tw = n(548118),
    tB = n(250627),
    tV = n(741231),
    tH = n(749314),
    tF = n(71393),
    tY = n(722888),
    tz = n(43136),
    tK = n(575926),
    tW = n(842052);
function tJ(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([tF.A], () => tF.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, tY.G)(t),
        { listingsLoaded: a } = (0, tB.bb)(t),
        d = (0, tB.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            eG.default.track(W.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, tG.H$)(t) }),
                await (0, tV.A)(W.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e4.A)(
        { type: e5.ImpressionTypes.VIEW, name: e5.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(tW.lm, tW.dc), children: (0, s.jsx)(tO.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: tW.lm,
                children: [
                    (0, s.jsx)(tz.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(tU.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tW.qs,
                        children: [
                            (0, s.jsx)(tK.h, {
                                height: "16px",
                                width: "16px",
                                color: tD.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e8.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: tW.Nl,
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(tU.h, { size: 16 }),
                    (0, s.jsx)(e8.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(tU.h, { size: 4 }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(tU.h, { size: 16 }),
                    (0, s.jsx)(tH.A, {}),
                    (0, s.jsx)(tU.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tW.kS,
                        children: [
                            (0, s.jsx)(tw.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: tW.q6,
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
                                className: tW.$h,
                                children: (0, s.jsx)(eg.$, { onClick: c, icon: tK.A, text: J.intl.string(J.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var tq = n(390248),
    tX = n(282108),
    tZ = n(33358),
    t$ = n(885574),
    tQ = n(61181);
function t0(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eb.D, {
        onClick: function () {
            (0, eC.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: tQ.L,
        children: [
            (0, s.jsx)(t$.m, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: tQ.m, children: J.intl.string(J.t["2aXnfa"]) }),
        ],
    });
}
var t1 = n(974875),
    t2 = n(900019);
function t3(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([t2.A], () => t2.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, t1.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(eg.$, { variant: "secondary", text: J.intl.string(J.t["4q1Elf"]), onClick: l, disabled: !i });
}
var t6 = n(320448),
    t5 = n(713654),
    t4 = n(958340),
    t9 = n(384231),
    t7 = n(959698),
    t8 = n(438729),
    ne = n(375199),
    nt = n(886737),
    nn = n(699352),
    ni = n(8455),
    nl = n(885386),
    ns = n(540999),
    nr = n(47167),
    na = n(58703),
    no = n(427930);
function nd(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: w.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class nc {
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
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tl.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tF.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t4.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, na.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nd(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, nr.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nd(h, d) };
    }
}
var nu = n(66834),
    nm = n(385648);
async function nh(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == tF.A.getGuild(t))
        try {
            await (0, nm.Z2)(t, { object: W.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, nu.k)(t),
                (l = D.A.getChannel(n));
        } catch {}
    eG.default.track(W.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, tV.A)(W.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var ng = n(387408),
    np = n(427209),
    nA = n(24759);
function nx() {
    return (0, s.jsxs)("div", {
        className: nA.N1,
        children: [
            (0, s.jsx)(np.A, { size: "xs", className: nA.nr, color: tD.A.colors.TEXT_MUTED }),
            (0, s.jsx)(p.E, {
                className: nA.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function nf(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new nc(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, tl.A, tF.A, t4.A],
            () => l.getForwardInfo(D.A, G.default, O.A, tl.A, tF.A, t4.A).footerInfo,
            [l],
            h.A,
        ),
        o = (0, u.bG)([D.A], () => D.A.getChannel(t.messageReference?.channel_id)),
        d = r.useCallback(() => {
            nh(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              className: nA.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: nA.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, s.jsx)(nE, { channel: o }) : null,
                  (0, s.jsx)(p.E, {
                      className: nA.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t6._, { size: "xxs", color: tD.A.colors.TEXT_MUTED }),
              ],
          });
}
function nE(e) {
    let { channel: t } = e,
        n = (0, ni.Vp)({ location: "ForwardFooter" }),
        i = r.useMemo(() => (0, t5.gU)(t), [t]);
    return n.enabled && null != i ? (0, s.jsx)(i, { className: nA.yl, size: "xs", color: "currentColor" }) : null;
}
function nI(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: l } = e,
        a = r.useMemo(() => (0, ng.A)(t, n), [t, n]),
        o = nl.hD.useSetting(),
        d = nl.rs.useSetting(),
        c = (0, u.bG)([ns.A], () => ns.A.isDeveloper),
        m = (0, t7.U)(),
        h = (0, t9.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, ne.A)(a, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
            postProcessor: m ? nt.A : void 0,
        }),
        x = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        f = nl.hH.useSetting();
    return null == x
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: nA.kL,
                  children: [
                      (0, s.jsx)("div", { className: nA.hD }),
                      (0, s.jsxs)("div", {
                          className: nA.Qs,
                          children: [
                              (0, s.jsx)(nx, {}),
                              (0, s.jsx)(t8.Ay, { message: a, content: g, compact: f }),
                              (0, nn.A)({
                                  channelMessageProps: { message: a, channel: x, compact: f },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: l,
                              }),
                              !m && (0, s.jsx)(nf, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function nC(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(nI, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var nv = n(643612),
    n_ = n(172218),
    nj = n(607399),
    nN = n(702841),
    nT = n(529200),
    ny = n(395671),
    nS = n(993748),
    nb = n(212534),
    nL = n(489709);
function nR(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, nN.yK)(
            [nb.A],
            () => [nb.A.getApplication(t), nb.A.isInvalidApplication(t), nb.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, nN.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, n_.K)(u),
        h = r.useCallback(() => {
            eG.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: nj.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, nS.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === nb.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eG.default.track(W.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: nj.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(nT.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, s.jsx)(nT.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: nL.k,
                          children: [
                              (0, s.jsx)(nT.A.Icon, { expired: !0 }),
                              (0, s.jsx)(nT.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === nb.e.FETCHING
          ? (0, s.jsxs)(nT.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, s.jsx)(nT.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(ei, { app: ny.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var nk = n(229527),
    nM = n(870136),
    nP = n(330075),
    nD = n(412728);
function nO(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, tB.Qi)(n, i),
        r = (0, nN.bG)([U.A], () => U.A.getGuildId());
    return ((0, e4.A)(
        {
            type: nD.z.VIEW,
            name: e5.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(nP.i, {
              guildProductListing: l,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var nU = n(484724),
    nG = n(953727);
function nw(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, nG.A)(l),
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
var nB = n(122906),
    nV = n(401755),
    nH = n(943804),
    nF = n(602052);
function nY(e) {
    let { code: t } = e,
        i = (0, u.bG)([nB.A], () => nB.A.getGuildTemplate(t));
    if (null == i || i.state === nV.QB.RESOLVING)
        return (0, s.jsxs)(nT.A, {
            children: [
                (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, s.jsx)(nT.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === nV.QB.EXPIRED)
        return (0, s.jsxs)(nT.A, {
            children: [
                (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, s.jsxs)(nT.A.Body, {
                    children: [
                        (0, s.jsx)(nT.A.Icon, { expired: !0 }),
                        (0, s.jsx)(nT.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eg.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, s.jsx)(eg.$, {
              onClick: () => {
                  (0, eC.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("43363"),
                          n.e("56697"),
                          n.e("35273"),
                          n.e("79624"),
                          n.e("74342"),
                          n.e("68280"),
                          n.e("35697"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("97199"),
                          n.e("16198"),
                          n.e("92152"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === nV.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(nT.A, {
        children: [
            (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, s.jsxs)(nT.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nF.iH,
                        children: [
                            (0, s.jsx)(nw, { className: nH.K }),
                            (0, s.jsx)(nT.A.Info, {
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
var nz = n(842241),
    nK = n(681154),
    nW = n(155718);
let nJ = new Set([
    nK.ContentInventoryEntryType.TOP_ARTIST,
    nK.ContentInventoryEntryType.TOP_GAME,
    nK.ContentInventoryEntryType.PLAYED_GAME,
    nK.ContentInventoryEntryType.WATCHED_MEDIA,
    nK.ContentInventoryEntryType.LISTENED_SESSION,
    nK.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var nq = n(398817),
    nX = n(857071),
    nZ = n(46054),
    n$ = n(731068),
    nQ = n(619517),
    n0 = n(207133),
    n1 = n(835245),
    n2 = n(844222),
    n3 = n(463930),
    n6 = n(251391),
    n5 = n(601255),
    n4 = n(562819),
    n9 = n(234914),
    n7 = n(59318),
    n8 = n(837528),
    ie = n(754459),
    it = n(967144),
    ii = n(342296),
    il = n(696451),
    is = n(218394);
function ir(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, nG.A)(l),
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
var ia = n(717125),
    io = n(376943),
    id = n(36491),
    ic = n(752755),
    iu = n(461715),
    im = n(381941),
    ih = n(295360);
function ig(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, iu.CI)(e),
                i = (0, nN.bG)([il.Ay, P.default], () => {
                    let e = P.default.getId();
                    return il.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, nN.bG)(
                    [ia.A],
                    () => null != n && n?.channelId != null && ia.A.isChannelGated(n.guildId, n.channelId),
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
                } = (0, nN.cf)([ic.A, tF.A, D.A, G.default, U.A], () => {
                    let e = ic.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = tF.A.getGuild(n?.guildId),
                        i = D.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        r = null != i && (0, io.nc)(i);
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
                    let e = (0, iu.tU)({
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
                        (ic.A.getEmbedFetchState(n.threadId) !== ic.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, id.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, ie.A)(n.id, im.Fd),
        u = (0, n8.VL)(n, i, c, !0),
        m = nl.kt.useSetting(),
        h = (0, is.j)(),
        [g, A] = r.useState(!1),
        [f, E] = r.useState(d?.coverImage == null),
        I = (0, nN.bG)([il.Ay, G.default], () => il.Ay.isMember(d?.guildId, G.default.getCurrentUser()?.id), [d]),
        C = (0, nN.bG)([il.Ay], () => (d?.authorId != null ? il.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, n5.A)(C?.avatarDecoration != null ? C?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, it.gn)(C?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: y } = r.useContext(n2.C),
        [S, b] = r.useState(!1),
        L = r.useCallback(() => {
            A(!0);
        }, [A]),
        R = r.useCallback(() => {
            A(!1);
        }, [A]),
        k = r.useCallback(async () => {
            null != d &&
                ((0, tG.zV)(W.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: I,
                }),
                d.canAccess
                    ? (0, tV.A)(W.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : I
                      ? (0, tV.A)(W.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await nm.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, I]);
    if (null == d) return null;
    let M = (0, w.F_)({ avatarDecoration: v, size: (0, n4.Te)(tI._3.SIZE_40), canAnimate: S }),
        O = d.user?.getAvatarURL(d.guildId, 40, S);
    function B() {
        y.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, n7.ge)(V);
    return (0, s.jsxs)("div", {
        className: ih.wb,
        children: [
            (0, s.jsxs)("div", {
                className: ih.iT,
                onMouseEnter: L,
                onMouseLeave: R,
                children: [
                    !f &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: o()(ih.xn, { [ih.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(n9.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(ih.xn, { [ih.p6]: d.shouldSpoiler }),
                                  imageChildClassName: ih.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eb.D, {
                            onClick: k,
                            children: (0, s.jsx)("div", {
                                className: ih.nx,
                                children: (0, s.jsxs)("div", {
                                    className: ih.BS,
                                    children: [
                                        (0, s.jsx)(ir, { color: tD.A.colors.WHITE.css }),
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
                className: ih.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: ih.OA,
                        children: [
                            (0, s.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ih.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(ih.hF, ih.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: ih._5,
                        children: [
                            null != d.authorId &&
                                null != O &&
                                (0, s.jsx)(ii.A, {
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
                                            children: (0, s.jsx)(tE.eu, {
                                                ...e,
                                                ref: a,
                                                size: tI._3.SIZE_40,
                                                src: O,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: ih.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: ih.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(n6.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: ih.Xg,
                                                }),
                                            (0, s.jsx)(eb.D, {
                                                onClick: k,
                                                className: ih.HA,
                                                children: (0, s.jsx)(e8.D, {
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
                                            className: ih.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: () =>
                                                    null == d.authorId
                                                        ? (0, s.jsx)(n3.V, {
                                                              name: d.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: ih.fh,
                                                          })
                                                        : (0, s.jsx)(
                                                              ii.A,
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
                                                                      (0, s.jsx)(n3.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: d.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: ih.fh,
                                                                      }),
                                                              },
                                                              (0, n1.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(eg.$, { variant: "primary", onClick: k, text: d.ctaText })
                                : (0, s.jsx)(eg.$, { onClick: k, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ip = n(492230),
    iA = n(68935),
    ix = n(704413),
    iE = n(537039),
    iI = n(711038),
    iC = n(892340),
    iv = n(803306),
    i_ = n(491182),
    ij = n(639288),
    iN = n(10364),
    iT = n(378570),
    iy = n(138298),
    iS = n(761640),
    ib = n(989349),
    iL = n.n(ib),
    iR = n(606049),
    ik = n(943815),
    iM = n(447215),
    iP = n(297897),
    iD = n(985731),
    iO = n(484163),
    iU = n(513653);
let iG = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = G.default.getUser(t),
        u = r.useMemo(() => (i ? (0, ik.A)((0, na.i$)(iL()(), "LT")) : null), [i]),
        m = (0, iM.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, t_.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tI.FT)(tI._3.SIZE_16)) : iU,
        g =
            null != c
                ? J.intl.format(iP.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(iP.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(iO.NB, iO.JZ, u),
        children: [
            (0, s.jsx)(tE.eu, { src: h, size: tI._3.SIZE_16, className: iD.my, "aria-label": "" }),
            (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: iD.Xh, children: g }),
            (0, s.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: iD.Ek, children: "\u2022" }),
                    (0, s.jsx)(iR.A, { timestamp: d, className: iD.vE }),
                ],
            }),
        ],
    });
};
var iw = n(872452);
function iB(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new nc(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, G.default, O.A, tl.A, tF.A, t4.A],
            () => l.getForwardInfo(D.A, G.default, O.A, tl.A, tF.A, t4.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = tF.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.A.getCurrentlySelectedChannelId(),
                s = iS.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (iy.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, iT.iN)(i),
                eG.default.track(W.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              className: iw.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: iw.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: iw.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t6._, { size: "xxs", color: tD.A.colors.TEXT_MUTED }),
              ],
          });
}
function iV(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, t_.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, ie.A)(e.id, im.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, n8.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, n8.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(i_.A, {
        childrenExecutedCommand: (0, s.jsx)(iG, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(ij.Ay, {
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
            renderPopout: iN.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(t8.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: iw.iU,
        author: o,
    });
}
function iH(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, iv.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, ng.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nl.hD.useSetting(),
        c = nl.rs.useSetting(),
        m = (0, u.bG)([ns.A], () => ns.A.isDeveloper),
        h = (0, t9.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, ne.A)(o, {
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
                  className: iw.kL,
                  children: (0, s.jsxs)("div", {
                      className: iw.Qs,
                      children: [
                          (0, s.jsx)(iV, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nn.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: iw.Mf,
                          }),
                          (0, s.jsx)(iB, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function iF(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(iH, { message: t, snapshot: e, index: n }, n)),
    });
}
var iY = n(302031),
    iz = n(738188),
    iK = n(123292),
    iW = n(239093),
    iJ = n(387757);
function iq(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === iW.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === iW.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              onClick: () => {
                  (0, eC.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("52703"),
                          n.e("13515"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, s.jsx)(e, {
                              classificationId: l,
                              source: iW.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: iJ.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: iJ.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: iJ.U1,
                              children: [
                                  (0, s.jsx)(iz.i, { className: iJ.QW, color: tD.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: iJ.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: iL()().diff(iL().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: iJ.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: iJ.xQ,
                      children: (0, s.jsx)(iK.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var iX = n(349288),
    iZ = n(393033),
    i$ = n(82593);
function iQ(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(iX.Anchor, {
        onClick: function () {
            (0, eC.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("52703"),
                    n.e("13515"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: iW.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: i$.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function i0(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(iX.Anchor, { className: i$.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function i1(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case iW.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(iQ, { classificationId: n });
        case iW.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(i0, { learnMoreLink: i });
        default:
            return null;
    }
}
function i2(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e7.k, { size: "xs", color: tD.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(iz.i, { color: tD.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: i$.Kk, children: n[t] }) : null;
}
function i3(e) {
    let { children: t, theme: n } = e,
        i = { default: i$._y, danger: i$.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function i6(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, iZ.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eb.D, {
              className: i$.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: i$.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: i$.U1,
                              children: [
                                  (0, s.jsx)(i2, { iconType: n.icon }),
                                  (0, s.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: i$.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), iL()().diff(iL().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: i$.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(i3, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              i1,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var i5 = n(44724),
    i4 = n(50777),
    i9 = n(990078),
    i7 = n(319060),
    i8 = n(812282),
    le = n(922016),
    lt = n(34337),
    ln = n(240248),
    li = n(256449),
    ll = n(194004),
    ls = n(148355),
    lr = n(780645),
    la = n(862482),
    lo = n(847374),
    ld = n(964486),
    lc = n(235986),
    lu = n(624793),
    lm = n(636537),
    lh = n(639245),
    lg = n(87719),
    lp = n(725807),
    lA = n(428262),
    lx = n(750385),
    lf = n(850992),
    lE = n(625494),
    lI = n(698279),
    lC = n(788868),
    lv = n(413096),
    l_ = n(719932);
function lj(e) {
    eG.default.track(W.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? W.liQ.GUILD_CHANNEL : W.liQ.DM_CHANNEL,
        location_section: W.JJy.STICKER_POPOUT,
    }),
        (0, lg.e)();
}
function lN(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(lc.A, {
        children: [
            (0, s.jsx)(ls.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(lc.A, {
                direction: lc.A.Direction.VERTICAL,
                justify: lc.A.Justify.CENTER,
                className: l_.bM,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-md/semibold", children: (0, s.jsx)(lr.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let lT = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [a, o, d] = (0, u.yK)(
                [lx.A],
                () => [lx.A.getStickerPack(n.pack_id), !lx.A.hasLoadedStickerPacks, lx.A.isPremiumPack(n.pack_id)],
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
        (0, li.Sr)(n.pack_id);
        let m = (0, li.pD)(i),
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
            eG.default.track(W.HAw.OPEN_POPOUT, {
                type: W.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, tG.dI)(e),
            });
        }, [n.pack_id]),
        o || null == a)
            ? (0, s.jsx)(lt.Y0, { className: lv.v0 })
            : (0, s.jsxs)(lt.Uq, {
                  className: lv.Bm,
                  children: [
                      (0, s.jsx)(e8.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(p.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                              : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: lv.pQ,
                          children: c.map((e) => (0, s.jsx)(ls.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: lv.j0,
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
                                                  lE._.dispatchToLastSubscribed(W.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: lI.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && lf.bM.setActiveCategoryIndex(i);
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
    ly = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
            [d, c] = r.useState(null),
            [m, h] = r.useState(!1),
            g = G.default.getCurrentUser(),
            A = lA.Ay.canUseCustomStickersEverywhere(g),
            x = (0, u.bG)([tF.A], () => tF.A.getGuild(n.guild_id)),
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
            { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, tG.dI)(i) }),
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
                            lm.Bo.get({ url: W.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, nm.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    h(!0);
                })();
            }, [n.id, f]);
        let y = n.guild_id === i.getGuildId(),
            S = null != d,
            b = !1,
            L = "Custom Sticker Popout";
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
                (L = "Custom Sticker Popout (Upsell)"))
              : S
                ? ((t = J.intl.string(J.t.IuXYch)), (b = !0), (L = "Custom Sticker Popout (Upsell)"))
                : ((t = J.intl.format(J.t.hGWuxU, {
                      openPremiumSettings: () => {
                          lj(i), l();
                      },
                  })),
                  (L = "Custom Sticker Popout (Soft Upsell)"));
        let R = !b && !f && S && A;
        if (
            (r.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [m, d]),
            (0, ld.Ay)(() => {
                eG.default.track(W.HAw.OPEN_POPOUT, { type: L, ...j });
            }),
            !m)
        )
            return (0, s.jsx)(lt.Y0, { className: lv.v0 });
        {
            let e;
            return (0, s.jsxs)(lt.Uq, {
                className: l_.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || f) return;
                        l();
                        let e = d.id;
                        try {
                            await nu.A.joinGuild(e), nu.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, s.jsxs)("div", {
                        className: l_.gH,
                        children: [
                            (0, s.jsx)(lN, { description: t, sticker: n }),
                            b &&
                                (0, s.jsx)(lp.A, {
                                    className: l_.lI,
                                    subscriptionTier: lC.pe.TIER_2,
                                    size: la.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            R &&
                                (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: l_.lI,
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
                                t = null != d ? lu.GO.createFromDiscoverableGuild(d) : lu.GO.createFromGuildRecord(x);
                            return (0, s.jsxs)("div", {
                                className: l_.tl,
                                children: [
                                    (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: l_.YW,
                                        children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
                                    }),
                                    (0, s.jsx)(lh.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: R,
                                    }),
                                    !f &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(eb.D, {
                                                    onClick: function () {
                                                        a(), I(!E);
                                                    },
                                                    className: l_.wK,
                                                    children: (0, s.jsxs)(lc.A, {
                                                        children: [
                                                            (0, s.jsx)(p.E, {
                                                                className: l_.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: J.intl.string(J.t.vtH5hn),
                                                            }),
                                                            (0, s.jsx)(lo.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: o()(l_.ZB, { [l_.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, s.jsx)(lc.A, {
                                                        wrap: lc.A.Wrap.WRAP,
                                                        align: lc.A.Align.START,
                                                        justify: lc.A.Justify.START,
                                                        className: l_.LX,
                                                        children: e.map((e) =>
                                                            (0, s.jsx)(
                                                                i9.m,
                                                                {
                                                                    text: e.name,
                                                                    ...lt.Uk,
                                                                    children: (0, s.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: o()(l_.Th, {
                                                                                [lv.vT]: null != C && C !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, s.jsx)(ls.A, {
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
function lS(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(lt.Uq, {
        className: lv.Bm,
        children: (0, s.jsx)(lN, {
            sticker: i,
            description: J.intl.format(J.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), lj(t);
                },
            }),
        }),
    });
}
let lb = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, li.Zq)(t, !0);
    return null != r && (0, iA.FD)(r)
        ? (0, s.jsx)(lT, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, iA.Xw)(r)
          ? (0, s.jsx)(ly, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == r
                ? (0, s.jsx)(lS, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, s.jsx)(lt.Y0, {});
};
var lL = n(182497);
let lR = (0, ln.xI)(i7.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    lk = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, li.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: lL.Zl,
                children: [(0, s.jsx)(i8.s, { size: "xs", color: "currentColor", className: lL.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(f.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: lL.be,
                children: (0, s.jsx)(le.Y, {
                    align: "center",
                    animation: le.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(lb, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(i9.m, {
                            ...lt.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, lt.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    tG.Ay.trackWithMetadata(W.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: lC.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, ll.Tw)(e.format_type),
                                        is_custom: (0, ll.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eb.D, {
                                innerRef: l,
                                className: lL.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, s.jsx)(ls.A, { isInteracting: i, size: lR, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var lM = n(406704),
    lP = n(531142),
    lD = n(140735),
    lO = n(442433),
    lU = n(143413),
    lG = n(935208),
    lw = n(321045),
    lB = n(456874),
    lV = n(707539),
    lH = n(80682),
    lF = n(465364),
    lY = n(805964),
    lz = n(943220),
    lK = n(838541);
function lW(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [O.A],
            () => ({ isBlocked: O.A.isBlockedForMessage(t), isIgnored: O.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, lH.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
        () =>
            null != t.content && "" !== t.content
                ? (0, lF.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                : null,
        [t],
    );
    return (0, s.jsxs)("div", {
        className: iO.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: iO.FJ }),
            (0, s.jsx)(lz.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: iO.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: r,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, lY.o)(e, t, n, i, iO.tP, {
                        trailingIconClass: iO._v,
                        leadingIconClass: iO.a5,
                        iconSize: lK.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, r ?? (0, s.jsx)("span", { className: iO.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var lJ = n(747926),
    lq = n(650583),
    lX = n(964135);
function lZ(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([D.A], () => D.A.getChannel(lG.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(l$, { channel: i, compact: n, isSystemMessage: (0, lU.A)(t) });
}
function l$(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, nr.Ay)(a),
        h = (0, u.bG)([lB.A], () => lB.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([lB.A], () => lB.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([lB.A], () => lB.A.getCount(t.id))),
            (r = (0, lV.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == l || 0 === l
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: lX.vE, children: (0, lV.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(lW, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: lX.vE, children: (0, lV.aK)(r) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(lX.GI, { [lX.E]: !d, [lX.E_]: c }) }),
            (0, s.jsx)(eb.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, lJ.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === lq.dh.SPACE || e.key === lq.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, lJ.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, lO.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("91763"),
                            n.e("38730"),
                            n.e("34971"),
                            n.e("3998"),
                            n.e("43266"),
                            n.e("91671"),
                            n.e("12255"),
                            n.e("63340"),
                            n.e("96804"),
                            n.e("21060"),
                            n.e("21106"),
                            n.e("40175"),
                            n.e("42613"),
                            n.e("90554"),
                            n.e("99011"),
                            n.e("85802"),
                            n.e("65200"),
                            n.e("3869"),
                            n.e("51212"),
                            n.e("84615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": J.intl.string(J.t["8ipxiY"]),
                className: o()(lX.kL, { [lX.og]: c }),
                children: (0, s.jsxs)(lP.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lX.kq,
                            children: [
                                (0, s.jsx)(lD.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, s.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: lX.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: lX.lO,
                                    "aria-hidden": !A,
                                    children: (0, lw.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: lX.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var lQ = n(383233),
    l0 = n(834942),
    l1 = n(644447),
    l2 = n(927813),
    l3 = n(659674),
    l6 = n(998218),
    l5 = n(5095),
    l4 = n(294520),
    l9 = n(320095),
    l7 = n(863439),
    l8 = n(707985),
    se = n(730852),
    st = n(265422),
    sn = n(986268);
function si(e) {
    let { guild: t, channel: n, message: i } = e,
        l = U.A.getGuildId(),
        a = ed.A.getChannelId(l),
        o = r.useCallback(() => {
            eG.default.track(W.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, st.i)(t.id, n.id),
                se.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(nT.A.Channel, { channel: n });
    return (0, s.jsx)(nT.A, {
        children: (0, s.jsxs)(nT.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: nF.iH,
                    children: [
                        (0, s.jsx)(nT.A.Icon, { guild: t }),
                        (0, s.jsx)(nT.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: nF.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: nF.E3,
                                        children: (0, s.jsx)(sn.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: nF.UD,
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
function sl(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = D.A.getChannel(l),
        a = tF.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && tl.A.can(W.xBc.VIEW_CHANNEL, r) && tl.A.can(W.xBc.CONNECT, r)
        ? (0, s.jsx)(si, { guild: a, channel: r, message: n })
        : null;
}
var ss = n(789645),
    sr = n(298236),
    sa = n(953756),
    so = n(564107),
    sd = n(836),
    sc = n(62045);
function su(e) {
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
        [m, h] = (0, sa.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(so.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(sr.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(sa.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(sa.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(sd.O0, sc.k, sc.z, { [sd.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eb.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: sd.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, s.jsx)(ss.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, nq.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var sm = n(451988),
    sh = n(261958),
    sg = n(212245),
    sp = n(775602),
    sA = n(62583),
    sx = n(956549),
    sf = n(550151),
    sE = n(392054),
    sI = n(853390),
    sC = n(290863),
    sv = n(403362),
    s_ = n(811024),
    sj = n(360469),
    sN = n(400658);
let sT = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, is.j)(),
        s = (0, u.bG)([sp.Ay], () => sp.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new sm.IX();
            return (
                e.start(a ? 15 * l2.A.Millis.SECOND : l2.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / l2.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, sI.fU)(n)
    );
});
sT.displayName = "ActivityRuntimeCounter";
let sy = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, sg.p)(),
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
                    .filter(sv.Vq),
            [C],
        ),
        _ = (0, u.bG)([sC.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = sC.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new ny.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = sj.Gl), e;
        }, [n]),
        T = (0, sf.vG)({ userId: g, channelId: i, application: N }),
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
                            a = (0, s_.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== sf.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case sf.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case sf.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case sf.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case sf.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case sf.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case sf.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case sf.Gy.NO_CHANNEL:
                                case sf.Gy.NO_GUILD:
                                case sf.Gy.NO_USER:
                                case sf.Gy.IS_AFK_CHANNEL:
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
        L = null != I && I.isLaunching && I.componentId === b,
        R = async () => {
            eG.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                is_activity_start: y,
                cta: "Play",
            }),
                y
                    ? await (0, sx.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                          commandOrigin: sE.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, sA.A)({
                          applicationId: A.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                      });
        },
        k = S.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        M = (0, ee.F)(N, () => {
            eG.default.track(W.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
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
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: L,
            },
        ];
    return (0, s.jsx)(H.h, {
        header: J.intl.string(J.t.pkq6Vq),
        title: n.name,
        iconSrc: O,
        info: (0, s.jsx)("div", {
            className: sN.QR,
            children: y
                ? (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: k })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: sN.oL,
                                  children: [
                                      null != B &&
                                          (0, s.jsxs)("div", {
                                              className: sN.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: sN.y9,
                                                      children: (0, s.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(sT, { start: B }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(sN.DT, sN.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(sh.u, { size: "xxs", color: "currentColor" }),
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
var sS = n(164664),
    sb = n(439401),
    sL = n(657044),
    sR = n(863574),
    sk = n(707606),
    sM = n(456412),
    sP = n(429913),
    sD = n(993408),
    sO = n(242874),
    sU = n(499454),
    sG = n(165191),
    sw = n(928550),
    sB = n(976860),
    sV = n(871123),
    sH = n(317560),
    sF = n(780964),
    sY = n(766075),
    sz = n(30793),
    sK = n(189081);
function sW(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, nG.A)(i),
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
var sJ = n(738533),
    sq = n(45938),
    sX = n(615396),
    sZ = n(427262),
    s$ = n(936504),
    sQ = n(820284),
    s0 = n(674378),
    s1 = n(598429),
    s2 = n(979604);
function s3(e) {
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
        A = (0, u.bG)([sK.A], () => sK.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([eO.A], () => null != f && !eO.A.didFetchingSkuFail(f));
    return null != A && (0, s0.XZ)(A)
        ? (0, s.jsx)(s2.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(s1.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
var s6 = n(580630);
function s5(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, s6.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var s4 = n(235583),
    s9 =
        (((l = s9 || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function s7(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(s4.nM, t),
        children: [
            (0, s.jsx)(sL._, { size: "md", color: "currentColor", className: s4.Kk }),
            J.intl.string(J.t["7eicAO"]),
        ],
    });
}
function s8(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(s4.nM, n),
        children: [(0, s.jsx)(tf.t, { size: "md", color: "currentColor", className: s4.Kk }), s5(t)],
    });
}
function re(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(s4.EQ, n), children: t.getDisplaySalePercentage() });
}
function rt(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(s4.I8, n), children: s5(t, !1) });
}
function rn(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: s5(t) });
}
function ri(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(s4.nM, n),
        children: [(0, s.jsx)(re, { sku: t }), (0, s.jsx)(rt, { sku: t }), (0, s.jsx)(rn, { sku: t })],
    });
}
function rl(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
}
class rs extends r.PureComponent {
    static Types = s9;
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
                return (0, s.jsx)(rl, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(s7, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(s8, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(ri, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(rn, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(rl, { className: t });
            case 3:
                return (0, s.jsx)(s8, { sku: n, className: o()(s4.OB, t) });
            case 2:
                return (0, s.jsx)(ri, { sku: n, className: o()(s4.dk, t) });
            default:
                return (0, s.jsx)(rn, { className: o()(s4.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(rl, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: s4.nM,
                            children: [(0, s.jsx)(rn, { sku: i }), (0, s.jsx)(re, { sku: i })],
                        }),
                        (0, s.jsx)(rt, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(rn, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(s4.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, s4.Pl);
            case 3:
                return this.renderGeneric(e, s4.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, s4.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var rr = n(340263);
let ra = {
    [W.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, nG.A)(r),
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
                ...(0, nG.A)(r),
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
                ...(0, nG.A)(r),
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
function ro(e) {
    let { operatingSystem: t, className: n } = e,
        i = ra[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(i9.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function rd(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(rr.I, n),
        children: t.map((e) => (0, s.jsx)(ro, { operatingSystem: e, className: o()(rr.A, i) }, e)),
    });
}
var rc = n(924750);
let ru = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rc.T, t),
        children: (0, s.jsx)("span", { className: rc.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var rm = n(619329);
let rh = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rm.T, t),
        children: (0, s.jsx)("span", { className: rm.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var rg = n(615300),
    rp = n(868285),
    rA = n(358618),
    rx = n(983851),
    rf = n(133296),
    rE = n(607470),
    rI = n(720451);
class rC extends r.Component {
    _animatedValue = new rg.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), rg.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        rg.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(rg.A.img, {
            className: o()({ [rI.YC]: i }, t),
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
            ? (0, s.jsx)(rg.A.div, { className: o()(rI.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(rg.A.div, {
                  className: o()(l ? rI.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tO.y, {
                                className: rI.u1,
                                itemClassName: rI.$N,
                                type: tO.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class rv extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new sm.Ep();
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
            m = a ? rA._ : rx.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                nj.Fr
                    ? null
                    : (0, s.jsx)(rE.A, {
                          className: o()(rI.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(rp.F, {
                    children: l && e ? null : (0, s.jsx)(rC, { className: o()(rI.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eb.D, {
                    className: o()(rI.b4, { [rI.HY]: l && e, [rI.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: rI.i2 }) : null,
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
            ? (0, s.jsx)(rC, { className: o()(rI.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(rC, { className: o()(rI.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(rC, { className: o()(rI.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(rf.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: rI.mZ,
                  disable: !e,
                  children: (0, s.jsx)(rp.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(rI.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var r_ = n(366523),
    rj = n(371794),
    rN = n(622413),
    rT = n(295672);
class ry extends r.PureComponent {
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
                  className: rT.ED,
                  children: [
                      (0, s.jsx)(rs, {
                          type: rs.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? rT.ae : rT.Ek,
                      }),
                      (0, s.jsx)(rd, { systems: [W.uje.WINDOWS], className: rT.iD }),
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
        return (0, sV.bF)(l)
            ? (0, s.jsx)(r_.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: rT.A$,
                  backgroundImageClassName: rT.iZ,
                  foregroundImageClassName: rT.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(rv, {
                          className: o()(rT.H1, { [rT.ZC]: a }),
                          video: null != d.previewVideo ? (0, rj.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, rj.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: rT.ZI,
                          splashPlaceholderClassName: rT.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(rh, { className: o()(rT.LJ, { [rT.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(ru, { className: o()(rT.LJ, { [rT.V9]: e }) })
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
            d = o ? sR.ug : rN.A;
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
var rS = n(587895),
    rb = n(309001);
class rL extends r.Component {
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
        (null == e || null == n) && (0, eR.QB)(t);
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
            className: rb.h,
            children: (0, s.jsx)(eg.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, sB.pX)(W.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > sR.Tm;
        return (0, s.jsx)(ry, {
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
        if (null != r) return (0, s.jsx)("div", { className: rb.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(W.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: rb.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(s3, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: rb.h,
                          source: W.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(rs, { type: rs.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > sR.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(sR.Wb, { isHorizontal: r })
            : e.productLine === W.EZt.COLLECTIBLES
              ? (0, s.jsx)(sQ.A, { section: W.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, s.jsx)(sQ.A, {
                    section: W.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(s$.N_, {
                        onClick: this.handleLinkClick,
                        to: W.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let rR = [eO.A, sK.A, eU.A];
function rk(e) {
    let { skuId: t } = e,
        n = eO.A.get(t),
        i = null != n ? rS.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eO.A.didFetchingSkuFail(t),
        inLibrary: null != n && sK.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eU.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? sK.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let rM = (0, sM.A)((0, sk.A)(rL)),
    rP = u.Ay.connectStores(rR, rk)(rM),
    rD = (0, sk.A)(u.Ay.connectStores(rR, rk)(rL));
var rO = n(724459);
function rU(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eb.D, {
        className: rO.kP,
        onClick: t,
        children: [
            (0, s.jsx)(sL._, { size: "md", color: "currentColor", className: rO.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class rG extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= sR.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === W.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, sY.openUserSettings)(sF.X.GIFT_PANEL);
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
        return (0, s.jsx)(sR.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class rw extends r.Component {
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
                ? (0, sB.pX)(W.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, sB.pX)(W.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, sY.openUserSettings)(sF.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eG.default.track(W.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: W.ZSU.BUTTON_CTA },
            });
        let r = l !== W.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, sU.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eG.default.track(W.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            sJ.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, sV.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, sH.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, sY.openUserSettings)(sF.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(W.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(lc.A, {
            justify: lc.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(lc.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(rU, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(lc.A, {
                    align: lc.A.Align.END,
                    justify: lc.A.Justify.END,
                    className: rO.yu,
                    direction: lc.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(iL()(), "h") }),
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
                (e.isExistingPremiumSubscriptionDisallowed && (0, lA.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, sD.hU)(e) ? rO.UQ : void 0,
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
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: sZ.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, sV.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, sD.hU)(e) || (0, sV.bF)(i)
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
                    ? J.intl.format(J.t.l3VxgG, { username: sZ.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: sZ.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === lC.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: sZ.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === lC.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: sZ.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = lC.Wx.includes(e.giftStyle),
            i = o()(rO.gB, { [rO.El]: n, [rO.by]: t >= sR.Tm }),
            l = o()({ [rO.gc]: n, [rO.Ei]: n && t >= sR.Tm, [rO.ww]: !n, [rO.wy]: !n && t >= sR.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(sW, { className: rO.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(sG.A, {
                        defaultAnimationState: e.redeemed ? sO.oA.LOOP : sO.oA.IDLE,
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
        let i = null != e.giftStyle && !(0, sV.bF)(n);
        return (0, s.jsx)(rD, {
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
            return (0, s.jsx)(rD, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: W.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(rG, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(sR.Wb, { isHorizontal: i >= sR.Tm });
        return (0, sD.hU)(e)
            ? (0, s.jsx)("div", { className: rO.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let rB = (0, sM.A)((0, sk.A)(rw)),
    rV = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([sz.A], () => {
                let e = sz.A.getError(t);
                return { giftCode: sz.A.get(t), resolved: sz.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eO.A], () => (null != i ? eO.A.get(i.skuId) : null)),
            d = (0, u.bG)([sK.A], () =>
                null != o && i?.entitlementBranches != null ? sq.YI(i.entitlementBranches, o, sK.A) : null,
            ),
            c = (0, sP.h)(o?.applicationId),
            m = null != o && (0, sV.bF)(o) && i?.redeemed === !0,
            [h] = (0, sw.L)(m ? c?.id : null),
            g = (0, sX.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([P.default], () => (null != i ? P.default.getId() === i.userId : P.default.getId() === n.id));
        return (0, s.jsx)(rB, {
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
var rH = n(376728),
    rF = n(107123),
    rY = n(698441),
    rz = n(427080),
    rK = n(346542),
    rW = n(665066),
    rJ = n(95701),
    rq = n(299091),
    rX = n(860689);
let rZ = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function r$(e) {
    let { guildId: t, location: n } = e;
    return rZ.getCurrentConfig({ guildId: t, location: n });
}
function rQ() {
    return (0, s.jsxs)(nT.A, {
        children: [
            (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, s.jsx)(nT.A.Body, { resolving: !0 }),
        ],
    });
}
var r0 = n(172799),
    r1 = n(120527);
function r2(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: r1.MY,
                        children: [
                            (0, s.jsx)("i", { className: r1.QD }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: r1.U9,
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
                        className: r1.MY,
                        children: [
                            (0, s.jsx)("i", { className: r1.o6 }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: r1.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: r1.rc, children: l })
    );
}
function r3(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, nr.Ay)(t);
    if (null != t && null != n) {
        let e = (0, t5.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(r1.Ix, { [r1.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: r1.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(lr.A, {
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
              className: o()(r1.Ix, { [r1.v6]: i }),
              children: (0, s.jsx)(lr.A, {
                  children: (0, s.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function r6(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a } = e,
        { approximate_member_count: o, approximate_presence_count: d, target_type: c, target_application: m } = i;
    eI()(c === r0.yV.EMBEDDED_APPLICATION && null != m, "invalid application invite");
    let h = r.useCallback(() => {
            eG.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: m.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, m.id]),
        g = (0, u.bG)([tF.A], () => (null != i.guild ? tF.A.getGuild(i.guild.id) : null), [i]),
        p = (0, sP.A)([m.id])[0],
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
        C = (0, u.bG)([tl.A], () => null != I && tl.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, I), [I]),
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
            (0, rH.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nz._U)(i.code, l.id),
                },
                v,
            ),
                rH.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, a]),
        T = i.state === W.elq.ACCEPTING,
        y = null != g;
    if (null == g) {
        if (null == i.guild) return (0, s.jsx)(rQ, {});
        g = (0, rX.DY)(i.guild);
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
              children: (0, s.jsx)(r5, {
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
function r5(e) {
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
            className: r1.QR,
            children: [
                (0, s.jsx)(r3, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(X, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(r2, { members: d, membersOnline: c, textColor: "none" }),
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
var r4 = n(4274);
function r9(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([P.default], () => P.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        l = (0, r4.g)(n?.code);
    return (0, s.jsxs)(nT.A, {
        children: [
            (0, s.jsx)(nT.A.Header, { text: i }),
            (0, s.jsxs)(nT.A.Body, {
                children: [
                    (0, s.jsx)(nT.A.Icon, { expired: !0 }),
                    (0, s.jsx)(nT.A.Info, {
                        expired: !0,
                        title: l?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var r7 = n(308528),
    r8 = n(889227);
function ae(e) {
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
                ((e = "transition"), r7.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, rH.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, nz._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, rH.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, nz._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            rH.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
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
        C = null != t.inviter ? sZ.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(nT.A, {
        children: [
            (0, s.jsx)(nT.A.Header, { text: E }),
            (0, s.jsxs)(nT.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nF.iH,
                        children: [
                            (0, s.jsx)(nT.A.Icon, { user: new r8.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(nT.A.Info, { title: I, onClick: c ? g : void 0, children: C }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var at = n(342952);
let an = (0, n(945810).mj)({
    name: "2026-06-gdm-invite-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ai(e) {
    let { location: t } = e;
    return an.useConfig({ location: t });
}
function al(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === W.elq.ACCEPTING,
        c = (0, u.bG)([D.A], () => (null != t.channel ? D.A.getChannel(t.channel.id) : null), [t]);
    eI()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        { enabled: h } = ai({ location: "GroupDMInvite" }),
        g = null != c,
        A = r.useRef(null),
        E = r.useCallback(() => {
            let e = "noop";
            g ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, rH.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, nz._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, g, l, a]),
        I = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, rJ.OY)(e.channel),
                    i = (0, nr.Bi)(t);
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
                let e = (0, nr.Bi)(t),
                    i = G.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, c ?? null);
    if (null == I) return (0, s.jsx)(rQ, {});
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
                                          let n = e instanceof r8.A ? e : G.default.getUser(e.id);
                                          if (null != n) {
                                              let e = sZ.Ay.getName(n);
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
                      : (null == (i = (0, nr.m1)(l, G.default, O.A)) || "" === i) &&
                        (i =
                            s.length > 0
                                ? s
                                      .filter(sv.Vq)
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
                  e instanceof r8.A
                      ? e
                      : (G.default.getUser(e.id) ??
                        new r8.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
              )
            : [],
        S = null != N.icon,
        b = J.intl.format(J.t.zRl6XR, { count: T.length });
    return (0, s.jsxs)(nT.A, {
        className: h ? nF.TV : void 0,
        children: [
            h
                ? (0, s.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: nF.JO,
                      lineClamp: 1,
                      children: v,
                  })
                : (0, s.jsx)(nT.A.Header, { text: v }),
            (0, s.jsxs)(nT.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: h ? `${nF.iH} ${nF.mx}` : nF.iH,
                        children: [
                            (!h || S) &&
                                (0, s.jsx)(nT.A.Icon, {
                                    channel: N,
                                    onClick: g ? E : void 0,
                                    channelIconSize: h ? tI._3.SIZE_48 : void 0,
                                }),
                            (0, s.jsx)(nT.A.Info, {
                                title: h ? (0, s.jsx)(lr.A, { children: C }) : C,
                                onClick: g ? E : void 0,
                                titleVariant: h ? "heading-md/medium" : void 0,
                                detailVariant: h ? "text-sm/medium" : void 0,
                                children: h
                                    ? (0, s.jsx)("div", {
                                          className: nF.er,
                                          children:
                                              y.length > 0
                                                  ? (0, s.jsx)(eb.D, {
                                                        className: nF.N_,
                                                        onClick: (e) => {
                                                            A.current?.openUserList(e.currentTarget);
                                                        },
                                                        children: b,
                                                    })
                                                  : b,
                                      })
                                    : (0, s.jsx)(nT.A.Data, { members: T.length }),
                            }),
                            h &&
                                y.length > 0 &&
                                (0, s.jsx)(at.A, {
                                    ref: A,
                                    className: nF.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tI._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: nF.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: E, loading: d, disabled: g, variant: j, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var as = n(821418),
    ar = n(340837);
let aa = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, ar.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, as.Q.IS_GUEST_INVITE)
    );
};
var ao = n(517905);
function ad(e) {
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
        _ = null != E ? (0, rJ.OY)(E) : null,
        j = null != d,
        N = null != _,
        T = null != _ && _.isGuildStageVoice(),
        y = (0, c.Lt)(m.flags ?? 0, as.Q.IS_GUEST_INVITE),
        S = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(W.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e5.ImpressionNames.INVITE_EMBED,
        type: e5.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, nz._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [k, M] = r.useState(!1),
        P = r.useCallback(() => M(!1), []),
        D = r.useRef(null),
        O = (0, u.bG)([il.Ay], () => aa([il.Ay], m)),
        U = r.useCallback(() => {
            M(!0), (0, rH.Pq)(L, "show profile", R);
        }, [L, R]),
        G = r.useCallback(() => {
            let e = "noop";
            j ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, rH.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, nz._U)(m.code, h.id),
                    },
                    R,
                );
        }, [m, h, R, j, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(rQ, {});
        (d = rX.DY(m.guild)).premiumTier = m.guild.premium_tier ?? W.TVA.NONE;
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
            className: nF.FA,
            children: [
                (0, s.jsx)(ao.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, s.jsx)(nT.A.GuildName, { guild: d, ref: D }),
                }),
                (0, s.jsx)("span", {
                    className: nF.E3,
                    children: (0, s.jsx)(sn.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (l = (0, s.jsx)(i9.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, s.jsx)(t$.m, { size: "md", color: "currentColor", className: nF.G }),
            })),
        S
            ? ((i = (0, s.jsx)(nT.A.Channel, { channel: _ })),
              (t = (0, s.jsxs)("span", {
                  className: nF.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: nF.E3,
                          children: (0, s.jsx)(sn.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != I && I >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(nT.A.Data, { members: I, membersOnline: C }))
              : N && (t = (0, s.jsx)(nT.A.Channel, { channel: _, guild: d })),
        (0, s.jsxs)(nT.A, {
            children: [
                (0, s.jsx)(nT.A.GuildSplash, { guild: d }),
                (0, s.jsx)(nT.A.Header, { text: w, extra: l }),
                (0, s.jsxs)(nT.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nF.iH,
                            children: [
                                (0, s.jsx)(nT.A.Icon, { guild: d }),
                                (0, s.jsx)(nT.A.Info, { title: i, onClick: U, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: nF.UD,
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
                            (0, s.jsx)("div", { className: nF.me }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eC.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("71455"),
                                                n.e("75423"),
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
var ac = n(890856),
    au = n(9994),
    am = n(461888),
    ah = n(422253),
    ag = n(123213),
    ap = n(86376),
    aA = n(42780),
    ax = n(897288),
    af = n(778424);
function aE(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        [c, m] = r.useState(!0),
        [h, g] = r.useState(!1),
        p = t.state === W.elq.ACCEPTING,
        A = (0, u.bG)([sp.Ay], () => sp.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e5.ImpressionNames.INVITE_EMBED,
        type: e5.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, nz._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let I = (0, au.oO)(t),
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
        ? (0, s.jsx)(rQ, {})
        : (0, s.jsxs)(ac.s, {
              className: o()(af.Gg, { [af.vk]: h && c }),
              onClick: C,
              style: _,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: [
                  (0, s.jsxs)("div", {
                      className: af.uY,
                      ref: d,
                      children: [
                          (0, s.jsx)(aA.J$, { profile: I, className: af.vK }),
                          (0, s.jsx)(aA.CG, { profile: I }),
                          (0, s.jsx)(ap.A, { profile: I }),
                          (0, s.jsx)(ah.P, { profile: I, className: af.rb }),
                          (0, s.jsx)(ax.A, {
                              guild: null != t.guild ? (0, rX.DY)(t.guild) : null,
                              roles: t.roles,
                              className: af.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, s.jsx)("div", {
                            className: af.Se,
                            children: (0, s.jsx)(iK.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: J.intl.string(J.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, s.jsxs)("div", {
                      className: o()(af.qr, { [af.iK]: h }),
                      children: [
                          h && c ? (0, s.jsx)("div", { className: af.D7 }) : null,
                          (0, s.jsx)("div", {
                              className: o()(af.z8, { [af.it]: h && c }),
                              children: (0, s.jsx)("div", {
                                  className: af.UD,
                                  children: (0, s.jsx)(aI, {
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
function aI(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, am.Ay)(n, am.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, rH.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nz._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(ag.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var aC = n(414798);
function av(e) {
    let t,
        n,
        i,
        { author: l, banned: r, channelId: a, onMention: o } = e,
        d = (0, u.bG)([P.default], () => P.default.getId()),
        c = sZ.Ay.useName(l),
        m = d === l.id,
        { enabled: h } = ai({ location: "InvalidInvite" }),
        g = (0, u.bG)([D.A, tl.A], () => {
            let e = D.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, lM.UJ)(e),
                    n = tl.A.can(W.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return tl.A.can(W.xBc.SEND_MESSAGES, e);
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
                                      t = `@${sZ.Ay.getUserTag(l, { decoration: "never" })}`,
                                      n = `<@${e}>`;
                                  lE._.dispatchToLastSubscribed(W.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                      null != a && aC.A.startTyping(a);
                              },
                              text: J.intl.string(J.t.P8tvKG),
                          })
                        : void 0)),
        (0, s.jsxs)(nT.A, {
            className: h ? nF.TV : void 0,
            children: [
                h
                    ? (0, s.jsx)(p.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: nF.JO,
                          lineClamp: 1,
                          children: i,
                      })
                    : (0, s.jsx)(nT.A.Header, { text: i }),
                (0, s.jsxs)(nT.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nF.iH,
                            children: [
                                (0, s.jsx)(nT.A.Icon, { expired: !0 }),
                                (0, s.jsx)(nT.A.Info, {
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
var a_ = n(616356);
function aj(e) {
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
            [a_.A],
            () => (null != n && null != n.target_user ? a_.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [a_.A],
            () => (null != n && null != n.target_user ? a_.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e5.ImpressionNames.INVITE_EMBED,
        type: e5.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, nz._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === r0.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eI()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    eI()(I === r0.yV.STREAM && null != C, "invalid streaming invite");
    let v = i === C.id,
        _ = n.state === W.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, rH.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, nz._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(rQ, {});
        l = (0, rX.DY)(n.guild);
    }
    let T = null != n.channel ? (0, rJ.OY)(n.channel) : null,
        y = sZ.Ay.getName(C),
        S = A || (!E && N),
        b = J.intl.string(J.t.I6JG46),
        L = "active";
    N && !E
        ? ((t = v ? J.intl.string(J.t.oBLoZJ) : J.intl.formatToPlainString(J.t["0QJmA+"], { name: y })),
          (b = J.intl.string(J.t.Wdi5E1)))
        : ((L = "active"),
          A && ((b = J.intl.string(J.t.Q1W99y)), (L = "secondary")),
          (t = v ? J.intl.string(J.t["4hyaHu"]) : J.intl.formatToPlainString(J.t.QmlLEq, { name: y })));
    let R =
        m === l.id && null != T
            ? (0, s.jsx)(nT.A.Channel, { channel: T })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(nT.A, {
        children: [
            (0, s.jsx)(nT.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, s.jsxs)(nT.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nF.iH,
                        children: [
                            (0, s.jsx)(nT.A.Icon, { guild: l, onClick: N && E ? j : void 0 }),
                            (0, s.jsx)(nT.A.Info, { title: t, onClick: N && E ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: j, loading: _, disabled: S, variant: L, text: b }),
                ],
            }),
        ],
    });
}
var aN = n(459192),
    aT = n(364522),
    ay = n(952270),
    aS = n(52074),
    ab = n(725613),
    aL = n(693879),
    aR = n(145497),
    ak = n(481947),
    aM = n(977997),
    aP = n(607567),
    aD = n(893607);
function aO(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, nr.Ay)(i),
        o = (0, u.bG)([tF.A], () => tF.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([aM.A], () => aM.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [aP.Ay],
            () => ({ voiceStates: null != i.guild_id ? aP.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([ab.A], () => ab.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || ab.A.hasRequestedStartTimes(i.guild_id) || (0, aS.U)(i.guild_id);
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
        v = (0, nz._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, e4.A)({
        name: e5.ImpressionNames.VOICE_INVITE_EMBED,
        type: e5.ImpressionTypes.VIEW,
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
            (0, iT.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            l(),
                (0, rH.he)(
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
        className: aD.kL,
        children: [
            (0, s.jsxs)("div", {
                className: aD.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: aD.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: aD.yW,
                                children: [
                                    (0, s.jsx)(rx.H, {
                                        className: aD.p,
                                        color:
                                            c.length > 0 ? tD.A.colors.TEXT_FEEDBACK_POSITIVE : tD.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(aN.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(aR.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eb.D, {
                                            className: aD.HA,
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
                                ? (0, s.jsx)(aL.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: aD.Ao,
                              children: [
                                  (0, s.jsx)(aT.Ip, {
                                      ref: I,
                                      className: aD.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              ak.Ay,
                                              {
                                                  className: aD.Eq,
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
                                  (0, s.jsx)("div", { ref: A, className: aD.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: aD.p$,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: aD.TB,
                        children: (0, s.jsx)(eg.$, {
                            onClick: N,
                            icon: rx.H,
                            variant: "active",
                            fullWidth: !0,
                            text: J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: aD.qr,
                children: [
                    (0, s.jsx)(ay.G, { size: "custom", color: "currentColor", className: aD.Dq }),
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
function aU(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)([D.A, tl.A], () => {
            let e = D.A.getChannel(r);
            return null != e && tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, u.bG)([tF.A], () => null != tF.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(aE, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(aO, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var aG = n(652896),
    aw = n(834757),
    aB = n(427358),
    aV = n(155418);
function aH(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, t5.gU)(n, i),
        a = (0, nr.Ay)(n);
    return (0, s.jsxs)(eb.D, {
        onClick: l,
        className: o()(aV.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: aV.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(lr.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(t6._, { className: aV.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var aF = n(308186),
    aY = n(717421),
    az = n(562153),
    aK = n(713517),
    aW = n(297413),
    aJ = n(525951);
function aq(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(ii.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eb.D, {
                ...r,
                innerRef: a,
                className: aJ.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tE.eu, {
                        src: t.getAvatarURL(n, (0, tI.FT)(tI._3.SIZE_24)),
                        className: aJ.my,
                        "aria-label": t.username,
                        size: tI._3.SIZE_24,
                    }),
                    (0, s.jsx)(p.E, {
                        className: aJ.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(aW.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var aX = n(366152);
function aZ(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(a$, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(le.Y, { renderPopout: () => o(i), ...a });
}
function a$(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, aK.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: aX.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(aT.Ip, {
                className: aX.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        aq,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: az.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var aQ = n(233161);
let a0 = { mass: 1, tension: 170, friction: 26 };
function a1(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, aY.z)(() => ({ x: 0, y: 0, scale: 1, config: a0 }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(aF.animated.div, {
            ref: a,
            className: o()(aQ.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, aF.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: aQ.my,
                            children: (0, s.jsx)(i9.m, {
                                text: az.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tE.eu, {
                                    src: (function (e, t, n) {
                                        let i = il.Ay.getMember(t, e.id);
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
                c && (0, s.jsx)(a2, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function a2(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, aK.A)(e),
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
    return (0, s.jsx)(aZ, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(aQ.my, aQ.k2),
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
var a3 = n(749708);
function a6(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = rX.DY(t.guild));
    let m = null != t.channel ? (0, rJ.OY)(t.channel) : null;
    eI()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eI()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, u.bG)([tl.A, D.A], () => {
            let e = D.A.getChannel(m.id);
            return null == e || tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, u.bG)([aP.Ay], () => (h ? aP.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
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
        I = (0, u.bG)([tF.A], () => null != tF.A.getGuild(c.id), [c.id]),
        C = (0, u.bG)([ed.A], () => ed.A.getVoiceChannelId() === m.id, [m.id]),
        v = (0, u.bG)([il.Ay], () => aa([il.Ay], t), [t]),
        _ = t.state === W.elq.ACCEPTING,
        { analyticsLocations: j } = (0, f.Ay)(x.A.INVITE_EMBED),
        N = (0, nz._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)([a_.A, aB.A], () => {
                if ((0, rK.G4)(t) && null != t.target_user) {
                    let e = a_.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = a_.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = aB.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (aB.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = a_.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        y = (0, aw.AO)(T),
        S = null != T,
        b = r.useCallback(() => {
            let e = I ? "transition" : "accept";
            I ? l() : a(),
                (0, rH.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, aG._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, I, y, T, g.length, l, a]),
        L = r.useCallback(() => {
            I ? (0, iT.iN)(m.id) : a({ autoJoin: !1 }),
                eG.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: I,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, aG._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, c.id, t.code, N, I, y, T, g.length, j, a]);
    (0, e4.A)({
        name: e5.ImpressionNames.VOICE_INVITE_EMBED,
        type: e5.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([sp.Ay], () => sp.Ay.useReducedMotion),
        k = r.useRef(null),
        [M, O] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)([aB.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = aB.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (aB.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = r.useMemo(() => tA().throttle(O, 20), [O]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
            (e) => {
                if (R) return;
                let t = k.current?.getBoundingClientRect();
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
            G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, s.jsxs)("div", {
        className: a3.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: k,
                className: a3.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: a3.ys }),
                    (0, s.jsx)("div", { className: a3.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: a3.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(a3.Qs, { [a3.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(aH, { channel: m, guild: c, onClick: L }),
                                    (0, s.jsxs)("div", {
                                        className: a3.WD,
                                        children: [
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(lr.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != E
                                                ? (0, s.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: a3.$B,
                                                      children: (0, s.jsx)(lr.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: a3.RE,
                                      children: (0, s.jsx)(a1, {
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
                        className: a3.xk,
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
                className: a3.qr,
                children: [
                    (0, s.jsx)(ay.G, { size: "custom", color: "currentColor", className: a3.Dq }),
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
function a5(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [rq.A],
            () => ({ invite: rq.A.getInvite(t), inviteError: rq.A.getInviteError(t) }),
            [t],
        ),
        o = null == l,
        d = (0, nz._U)(t, n.id);
    r.useEffect(() => {
        o && rH.Ay.resolveInvite(t, void 0, { inviteInstanceId: d });
    }, [t, o, d]);
    let c = l ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: m } = (0, f.Ay)(),
        h = (0, u.bG)([tF.A], () => (l?.guild != null ? tF.A.getGuild(l.guild.id) : null), [l]),
        g = (0, u.bG)([D.A, tl.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = D.A.getChannel(e);
            return null != t && tl.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
        }, [l]),
        p = (0, u.bG)([P.default], () => P.default.getId()),
        A = (0, u.bG)([rY.Ay], () => rY.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]);
    function x() {
        null != c.channel && rH.Ay.transitionToInviteSync(c);
    }
    let E = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == h && l?.guild != null ? rX.DY(l.guild) : h;
            (0, rW.g)({ guild: n, isMember: null != h, analyticsLocations: m }) === rW.W.PROCEED &&
                rH.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        I = (0, s.jsx)(ad, {
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: E,
            currentUserId: p,
            guild: h,
            invite: c,
            message: n,
        });
    switch (c.state) {
        case W.elq.RESOLVING:
            I = (0, s.jsx)(rQ, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            I = (0, s.jsx)(av, {
                banned: c.state === W.elq.BANNED,
                author: n.author,
                channelId: n.channel_id,
                onMention: () =>
                    (0, rH.he)(
                        {
                            invite: c,
                            action: "mention",
                            inviter_id: n.author.id,
                            invite_message_id: n.id,
                            invite_instance_id: d,
                        },
                        m,
                    ),
            });
            break;
        case W.elq.ERROR:
            I = (0, s.jsx)(r9, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, rK.On)(c)) {
                case rK.Xd.GROUP_DM:
                    I = (0, s.jsx)(al, {
                        onTransitionToInviteChannel: x,
                        onAcceptInstantInvite: E,
                        currentUserId: p,
                        invite: c,
                        message: n,
                    });
                    break;
                case rK.Xd.FRIEND:
                    I = (0, s.jsx)(ae, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, rK.G4)(c)) {
                        if (null != c.channel && (0, rJ.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = r$({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (g)
                                if (e.enabled) {
                                    I = (0, s.jsx)(aU, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    I = (0, s.jsx)(a6, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        guild: h,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        I = (0, s.jsx)(aj, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            currentUserId: p,
                            message: n,
                            guild: h,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, rK.ly)(c)) {
                        I = (0, s.jsx)(rz.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != h,
                            onAcceptInstantInvite: E,
                            onTransitionToInviteChannel: x,
                        });
                        break;
                    }
                    if ((0, rK.oK)(c)) {
                        I = (0, s.jsx)(r6, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, rJ.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = r$({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (g)
                            if (e.enabled) {
                                I = (0, s.jsx)(aU, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                I = (0, s.jsx)(a6, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    guild: h,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, rF.v)(c) &&
                        (I = (0, s.jsx)(aE, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            isMemberOfGuild: null != h,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(sQ.A, { section: W.JJy.INVITE_LINK, children: I });
}
var a4 = n(266620),
    a9 = n(860227),
    a7 = n(568006),
    a8 = n(666176),
    oe = n(272984);
let ot = function (e) {
    let { channel: t, message: n, hideParty: i, hideInviteEmbedBanner: l } = e,
        { analyticsLocations: r } = (0, f.Ay)(x.A.INVITE_EMBED),
        a =
            null != n.application
                ? ny.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, oe.pH)(n.activity.party_id)
                  ? a8.HT
                  : void 0,
        { data: o } = (0, eZ.YY)(n.application?.id),
        d = o ?? a,
        c = (0, u.bG)([G.default], () => G.default.getCurrentUser()?.nsfwAllowed),
        m = e1(n.application?.content_classification, c, t);
    switch (m) {
        case e0.DISPLAY:
            if (null == d) return null;
            return (0, s.jsx)(a7.P0, {
                app: d,
                channel: t,
                message: n,
                hideParty: i,
                hideBanner: l,
                analyticsLocations: r,
            });
        case e0.BLOCK_UNDERAGE:
        case e0.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e3, { visibility: m, variant: "game_invite" });
        default:
            return null;
    }
};
var on = n(503002),
    oi = n(123791);
function ol(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, eZ.YY)(t);
    return null == i ? null : (0, s.jsx)(os, { app: i, guildId: n });
}
function os(e) {
    let { app: t, guildId: i } = e;
    (0, oi.C)(t.id);
    let l = r.useCallback(() => {
        (0, eC.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("48305"),
                n.e("96126"),
                n.e("26311"),
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
        icon: on.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var or = n(394839),
    oa = n(96782),
    oo = n(930390),
    od = n(861986),
    oc = n(87221),
    ou = n(691536);
function om(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: ou.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: ou.Yf,
                        children: [
                            (0, s.jsx)(oc.D, { size: "lg", color: tD.A.colors.TEXT_MUTED }),
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
                className: ou.Fj,
                children: [
                    (0, s.jsx)(t$.m, { size: "sm", color: tD.A.colors.TEXT_MUTED }),
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
var oh = n(343552),
    og = n(581619),
    op = n(229612);
let oA = [W.Auw.GIFV],
    ox = 15 * l2.A.Millis.MINUTE,
    of = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    oE = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, n$.e5.IS_ANIMATED);
        return null != i && null != l && (nQ.bp.test(n) || (a && (nQ.P8.test(n) || nQ.p4.test(n))))
            ? (0, s.jsx)(sb.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: op.jj })
            : null;
    };
class oI extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, nz._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && of.has(e));
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
            case l5.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(t3, { messageId: e.id, channelId: t.id });
                break;
            case l5.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(ef, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: op.od, children: i });
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
                    e6,
                    {
                        applicationId: a,
                        channel: t,
                        children: (t) => {
                            switch (n.type) {
                                case tP.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(nR, { code: a, message: e });
                                case tP.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eh, { application: t, message: e, params: i });
                                case tP.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(eJ, { application: t, message: e });
                                case tP.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(eq, { application: t, message: e, skuId: l });
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
                        a5,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tP.I.TEMPLATE:
                    return (0, s.jsx)(nY, { code: l }, l);
                case tP.I.EVENT:
                    return (0, s.jsx)(nU.A, { code: l }, l);
                case tP.I.CHANNEL_LINK:
                    return (0, s.jsx)(sl, { code: l, message: e }, l);
                case tP.I.GUILD_PRODUCT:
                    return (0, s.jsx)(nO, { code: l }, l);
                case tP.I.SERVER_SHOP:
                    return (0, s.jsx)(tJ, { guildId: l }, l);
                case tP.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(
                        i4.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, i5.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        l,
                    );
                }
                case tP.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(i4.I, { applicationId: n, skuId: e, channel: t }, l);
                }
                case tP.I.QUESTS_EMBED:
                    return (0, s.jsx)(iI.A, { questId: l }, l);
                case tP.I.COLLECTIBLES_SHOP:
                case tP.I.EXPERIMENT:
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
                          className: op.zv,
                          children: (0, s.jsx)(rV, {
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
            : (0, s.jsx)(oo.A, {
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
        if (0 === d.length || e.isPoll() || (0, lQ._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, W.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, n$.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, W.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, ip.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, W.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, l4.iW)(e.originalItem, t);
        }
        let E = m.map((s) => {
            let a = (0, n$.aG)(s),
                o = {
                    message: e,
                    item: (0, oa.rC)(s, l),
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
                    renderAudioComponent: x ? a4.SX : a4.Nj,
                    renderImageComponent: a4.Cr,
                    renderVideoComponent: a4.I1,
                    renderPlaintextFilePreview: a4.R6,
                    renderGenericFileComponent: a4.UB,
                    onPlay: function (n, i, l) {
                        eG.default.track(W.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: oE(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, l1.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, s.jsx)(or.A, { items: E });
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
            u = (0, l4.sC)(e, i, o, d);
        if (e.type === W.Auw.GIFT) return null;
        let m = oA.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            nv.G.Provider,
            {
                value: (0, oh.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
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
            : (null != e.url && "" !== e.url ? nZ.A.parseEmbedTitleWithoutLinks : nZ.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === W.Auw.RICH
            ? nZ.A.parse(t, !0, {
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
                      og.z.has(t.type) ||
                      (0, l3.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, W.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === nW.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !nJ.has(t.content_type);
                              })
                          )) ||
                      (0, l3.V)(t) ||
                      (0, l3.G8)(t)
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
                          c = (0, l4.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  su,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: oE,
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
                                iY.Ay,
                                {
                                    type: iY.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: lt.LL, renderVideoComponent: lt.$o, renderLinkComponent: lt.bU };
                  if (
                      t.type === W.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = l6.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  rP,
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
        return (0, s.jsx)(so.N, {
            gifAutoPlay: t,
            getGifFavButton: oE,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(nq.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n } = this.props;
        return (0, s.jsx)(ot, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== W.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(th, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, l9.ec)(e)
            ? (0, s.jsx)(sS.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, iA.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(lk, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(W.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(lZ, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(W.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - lG.default.extractTimestamp(e.id) >= ox)
        )
            return (0, s.jsx)("div", { className: op.xM, children: J.intl.string(J.t.ma8Rs0) });
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
                    className: op.IX,
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
                      className: op.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(ol, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(sy, {
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
                : (0, s.jsx)(ig, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(iq, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === W.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(i6, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, tX.KM)(e)
            ? (0, s.jsx)(t0, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(iE.A, { message: e, poll: t, className: op.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tR, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, iC.Mn)(e, this.props.channel)) return (0, s.jsx)(iF, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, iC.Mn)(e, this.props.channel))
            return (0, s.jsx)(nC, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(od.A, { message: e, compact: t, location: od.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, no.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new nc(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, iA.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, a9.XL)(e),
                  className: o()(this.props.className, op.kL),
                  children: (0, s.jsx)(om, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, a9.XL)(t), className: o()(e, op.kL), children: n })
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
            L = this.renderReportedMessage(t),
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
            null == E &&
            null == I &&
            null == v &&
            null == C &&
            null == j &&
            null == N &&
            null != _ &&
            null == S &&
            null == b &&
            null == L &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, a9.XL)(t),
                  className: o()(e, op.kL),
                  children: [
                      L,
                      b,
                      C,
                      S,
                      R,
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
function oC(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r, hideInviteEmbedBanner: a } = e,
        o = (0, u.bG)([P.default], () => P.default.getId()),
        d = nl.X6.useSetting(),
        m = nl.hD.useSetting(),
        h = nl.rs.useSetting() && !(0, lU.A)(e.message),
        g = nl.jW.useSetting() && !1 !== e.renderReactions,
        p = nl.kt.useSetting(),
        A = (0, u.bG)([l0.A], () => null == n.guild_id || l0.A.canChatInGuild(n.guild_id), [n]),
        x = (0, u.bG)([nX.A], () => null != n.guild_id && nX.A.isLurking(n.guild_id), [n]),
        f = (0, u.bG)([il.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? il.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: I } = (0, u.cf)(
            [tl.A],
            () => ({
                canAddNewReactions: A && tl.A.can(W.xBc.ADD_REACTIONS, n),
                canManageMessages: tl.A.can(W.xBc.MANAGE_MESSAGES, n),
            }),
            [A, n],
        ),
        C = (0, nk.ix)(n.guild_id),
        [, v] = (0, nM.c)(n.guild_id),
        _ = (0, lM.Id)(n),
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
        S = (0, l8.A)({
            channel: n,
            canChat: A,
            renderReactions: g,
            canAddNewReactions: E,
            isLurking: x,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: C,
        }),
        b = (0, t9.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        L = (0, n0.A)(n?.id),
        R = (0, ix.A)(i),
        k = (0, tZ.P)(i),
        M = (0, l7.z)(n),
        D = (0, l5._f)(i.id, i.channel_id),
        O = (0, tq._R)(),
        U = (0, t7.U)();
    return (0, s.jsx)(oI, {
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
        poll: R,
        showListsAndHeaders: b,
        showMaskedLinks: b,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: k,
        ctaButtonType: D,
        shouldAgeVerify: O,
        hideInviteEmbedBanner: a,
        restrictedPreview: U,
    });
}
function ov(e) {
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
        c = nl.X6.useSetting(),
        u = nl.hD.useSetting(),
        m = nl.rs.useSetting(),
        h = nl.kt.useSetting(),
        g = (0, t7.U)(),
        p = (0, t9.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, n0.A)(n?.id),
        x = (0, tZ.P)(t),
        f = (0, l5._f)(t.id, t.channel_id),
        E = (0, ix.A)(t);
    return (0, s.jsx)(oI, {
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
