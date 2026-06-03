n.d(t, { iV: () => o$, OC: () => o1, Ay: () => o0 }), n(938796);
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
    A = n(720149),
    x = n(793574),
    f = n(688810),
    E = n(735991);
n(321073), n(134528), n(947204);
var C = n(485845),
    I = n(379834),
    v = n(836480),
    _ = n(825860),
    j = n(950305),
    N = n(795816),
    T = n(574152),
    y = n(522305),
    S = n(361926),
    b = n(832384),
    L = n(113854),
    R = n(207371),
    k = n(205184),
    M = n(773669),
    P = n(495544),
    D = n(734057),
    w = n(994500),
    O = n(967198),
    U = n(287809),
    G = n(486020),
    V = n(204776),
    B = n(725606),
    H = n(572211),
    F = n(500060),
    Y = n(432017),
    z = n(687966),
    W = n(104171),
    K = n(652215),
    J = n(375708),
    q = n(695320);
function Z(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: q.i,
        children: [
            (0, s.jsx)(W.Ay, { guildId: n, users: t, max: 6, size: W.DN.SIZE_16 }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var X = n(354287),
    Q = n(138175),
    $ = n(112150),
    ee = n(574660),
    et = n(768349),
    en = n(734093);
function ei(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, Q.b)(t)),
        m = c?.id,
        h = (0, E.Ag)(t),
        g = G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: C } = (0, $.f)(t),
        I = (0, u.bG)([P.default], () => l ?? P.default.getId(), [l]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: b, canLaunchInChannel: k } = (0, B.w)(t.id),
        M = (0, T.A)(),
        w = (0, S.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        O = null != m && h && w,
        U = k && h,
        V = (0, R.x)(t),
        F = (0, ee.F)(t),
        Y = (0, ee.t)(t),
        z = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? V
                        ? e.push({
                              label: J.intl.string(J.t.RscU7I),
                              trackingArea: X.kY.PLAY,
                              onClick() {
                                  L.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (U &&
                              e.push({
                                  label:
                                      null == j
                                          ? J.intl.string(J.t.RscU7I)
                                          : b
                                            ? J.intl.string(J.t.DPfdsq)
                                            : J.intl.string(J.t.sqe0hj),
                                  trackingArea: X.kY.PLAY,
                                  onClick() {
                                      (0, N.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          embeddedActivitiesManager: M,
                                          customId: i,
                                          referrerId: I,
                                          analyticsLocations: v,
                                      });
                                  },
                                  disabled: b,
                              }),
                          !U &&
                              O &&
                              e.push({
                                  label: J.intl.string(J.t.JeK1Wg),
                                  trackingArea: X.kY.PLAY,
                                  onClick() {
                                      (0, y.Q)({
                                          appId: t.id,
                                          botId: m,
                                          analyticsLocations: v,
                                          customId: i,
                                          referrerId: I,
                                      });
                                  },
                              }))
                    : null != Y && e.push(Y),
                e
            );
        }, [h, Y, V, t.id, U, O, j, b, _, M, i, I, v, m]),
        W = h ? (0, s.jsx)(es, { app: t }) : (0, s.jsx)(el, { app: t });
    return (0, s.jsx)(H.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: F,
        bannerAspectRatio: C,
        iconSrc: g,
        info: W,
        actions: z,
        onClickContent: F,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: I,
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
            (0, V.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            C.b.GUILD_INSTALL in t.integrationTypesConfig,
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
        l = (0, u.bG)([O.A], () => O.A.getGuildId() ?? void 0, []),
        a = (0, k.s)(t.id),
        o = (0, u.yK)([U.default, w.A], () => {
            let e = [];
            for (let [t, n] of a.entries()) {
                if (t >= 5) break;
                let i = U.default.getUser(n.author_id),
                    l = w.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [a]),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(Z, {
                    activityUsers: o,
                    guildId: l,
                    activityText: J.intl.formatToPlainString(J.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, b.CZ)(e) === I.m.GLOBAL))
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
    getQueryId: K.fic.CUSTOM_ACTIVITY_LINK,
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
        C = (0, T.A)(),
        I = g === eu.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        _ = null != n ? n : i.customId,
        j = [];
    (0, R.x)(t)
        ? j.push({
              label: J.intl.string(J.t.RscU7I),
              trackingArea: X.kY.PLAY,
              onClick() {
                  L.A.launchFrame({ applicationId: t.id });
              },
          })
        : (I &&
              j.push({
                  label:
                      null == p ? J.intl.string(J.t.RscU7I) : v ? J.intl.string(J.t.DPfdsq) : J.intl.string(J.t.sqe0hj),
                  trackingArea: X.kY.PLAY,
                  onClick() {
                      (0, N.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          embeddedActivitiesManager: C,
                          customId: _,
                          referrerId: l,
                          analyticsLocations: m,
                      });
                  },
                  disabled: v,
              }),
          c &&
              !I &&
              j.push({
                  label: J.intl.string(J.t.JeK1Wg),
                  trackingArea: X.kY.PLAY,
                  onClick() {
                      (0, y.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: _, referrerId: l });
                  },
              }));
    let b = (0, ee.F)(t);
    return (0, s.jsx)(H.h, {
        actions: j,
        onClickContent: b,
        header: t.name,
        iconSrc: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
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
    ep = n(139716),
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
    eC = n.n(eE),
    eI = n(192308),
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
    ew = n(67480),
    eO = n(328968),
    eU = n(174459),
    eG = n(957565),
    eV = n(943775),
    eB = n(997997),
    eH = n(658575),
    eF = n(376374),
    eY = n(435220),
    ez = n(352883);
let eW = (0, u.UT)([ew.A, eO.A, eP.A], {
        getQueryId: K.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = ew.A.get(e),
                n = eO.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eP.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            eC()(null != e, "skuId is null"), await (0, eR.QB)(e);
        },
    }),
    eK = (0, u.UT)([ew.A], {
        getQueryId: K.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (ew.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            eC()(null != e && null != t, "appId is null"), await (0, eR.JI)(t);
        },
    });
function eJ(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eH.G)(l),
        [o, d, c, m] = (0, u.yK)([eD.A, D.A], () => {
            let e = (0, eV.A)(t, 45),
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
    let A = () => {
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    };
    return (0, s.jsx)(eZ, {
        appName: t.name,
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: t.name }),
        description: p,
        link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eY.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, eB.K)(l, eB.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: () => {
            A(),
                eU.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: l, area: "app_icon" });
        },
        children: (0, s.jsx)("div", {
            className: ez.mZ,
            children: (0, s.jsx)(eg.$, {
                onClick: () => {
                    A(),
                        eU.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
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
            let { data: n } = eW(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eK(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eV.A)(t, 45), [t]),
        g = (0, eH.G)(t.id),
        { openModal: p, subscriptionPurchaseButtonState: A } = (0, eM.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!g || null == o) return null;
    let x = o.type === K.Puh.SUBSCRIPTION,
        f = !!x && (0, ek.bg)(o.flags),
        E = () => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                    n.bind(n, 719847),
                );
                return (n) =>
                    (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
            });
        },
        C = () => {
            (0, eI.openModalLazy)(async () => {
                let e = x ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    l = x ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let r = () => {
                        n.onClose(), E();
                    };
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
        I = x
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
    "" === I && (I = void 0);
    let v = () => {
        eU.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: t.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, s.jsx)(eZ, {
        appName: t.name,
        title: o.name,
        description: I,
        link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eY.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, eB.K)(t.id, eB.C.SKU_EMBED, i);
        },
        iconSrc: h,
        onIconClick: () => {
            E(),
                eU.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
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
                        C(),
                            eU.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
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
                        : (0, s.jsx)(eg.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: C })
                    : (0, s.jsx)(eF.$P, { appId: t.id, sku: o, icon: e_.U, onHasClicked: v }),
            ],
        }),
    });
}
function eZ(e) {
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
                    eG.p5 &&
                        (0, s.jsx)(ej.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, s.jsx)(eN.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eG.C)(l, () => {
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
var eX = n(627363),
    eQ = n(853811),
    e$ = n(381438),
    e0 =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i);
function e1(e, t, n) {
    return null == e || (0, eQ.U1)({ type: eQ.fS.MINIMAL, data: e }) !== e$.Y.ADULT
        ? "display"
        : !0 !== t
          ? "block_underage"
          : n.isPrivate() || n.nsfw
            ? "display"
            : "block_channel_restriction";
}
var e2 = n(690360);
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
        { data: l } = (0, eX.YY)(t),
        r = (0, u.bG)([U.default], () => U.default.getCurrentUser()?.nsfwAllowed);
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
var e4 = n(562708),
    e5 = n(139286);
function e7(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e5.x)({
                type: e4.ImpressionTypes.VIEW,
                name: e4.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, V.Ie)({
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
var e9 = n(778492),
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
        this.waitFor(P.default, D.A, tl.A, U.default), (ta = new Set(tn.w.get(tr)));
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
            s = U.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === K.rbe.GUILD_ANNOUNCEMENT &&
                (0, ts.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? tl.A.can(K.xBc.SEND_MESSAGES, l)
                    : tl.A.can(K.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), K.pr7.CROSSPOSTED)
            )
        )
            return !1;
        to.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        to.has(t.id) && c.Lt(Number(t.flags), K.pr7.CROSSPOSTED) && to.delete(t.id);
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
    tm = n(676544);
let th = (e) => {
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
                          (0, s.jsx)(e9.k, { size: "xs", color: "currentColor", className: tm.Kk }),
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
var tg = n(392056),
    tp = n(735438),
    tA = n.n(tp),
    tx = n(239947),
    tf = n(403581),
    tE = n(97808),
    tC = n(778712),
    tI = n(520117),
    tv = n(793943),
    t_ = n(763754),
    tj = n(973654),
    tN = n(467135),
    tT = n(644235),
    ty = n(153469),
    tS = n(693227),
    tb = n(312633);
let tL = (e) => e.map((e) => `#${e}`),
    tR = (e) => {
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
                              eU.default.track(K.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
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
    },
    tk = (e) => {
        let t,
            n,
            i,
            { message: l } = e,
            { sharedClientTheme: a } = l,
            o = (0, t_.Ay)(l),
            d = r.useMemo(
                () =>
                    (0, tp.once)(() => {
                        (0, e5.x)({ type: e4.ImpressionTypes.VIEW, name: tx.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            c = (0, tI.A)({
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
    };
var tM = n(892768),
    tP = n(167189),
    tD = n(661531),
    tw = n(289873),
    tO = n(696986),
    tU = n(95561),
    tG = n(548118),
    tV = n(250627),
    tB = n(741231),
    tH = n(749314),
    tF = n(71393),
    tY = n(722888),
    tz = n(43136),
    tW = n(575926),
    tK = n(736132);
function tJ(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([tF.A], () => tF.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, tY.G)(t),
        { listingsLoaded: a } = (0, tV.bb)(t),
        d = (0, tV.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            eU.default.track(K.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, tU.H$)(t) }),
                await (0, tB.A)(K.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e5.A)(
        { type: e4.ImpressionTypes.VIEW, name: e4.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(tK.lm, tK.dc), children: (0, s.jsx)(tw.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: tK.lm,
                children: [
                    (0, s.jsx)(tz.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(tO.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tK.qs,
                        children: [
                            (0, s.jsx)(tW.h, {
                                height: "16px",
                                width: "16px",
                                color: tD.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e8.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: tK.Nl,
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(tO.h, { size: 16 }),
                    (0, s.jsx)(e8.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(tO.h, { size: 4 }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(tO.h, { size: 16 }),
                    (0, s.jsx)(tH.A, {}),
                    (0, s.jsx)(tO.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tK.kS,
                        children: [
                            (0, s.jsx)(tG.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: tK.q6,
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
                                className: tK.$h,
                                children: (0, s.jsx)(eg.$, { onClick: c, icon: tW.A, text: J.intl.string(J.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var tq = n(390248),
    tZ = n(282108),
    tX = n(33358),
    tQ = n(885574),
    t$ = n(987773);
function t0(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eb.D, {
        onClick: () => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: t$.L,
        children: [
            (0, s.jsx)(tQ.m, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: t$.m, children: J.intl.string(J.t["2aXnfa"]) }),
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
    t4 = n(713654),
    t5 = n(958340),
    t7 = n(384231),
    t9 = n(291812),
    t8 = n(375199),
    ne = n(699352),
    nt = n(8455),
    nn = n(885386),
    ni = n(540999),
    nl = n(47167),
    ns = n(58703);
function nr(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: G.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
n(427930);
class na {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tl.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tF.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t5.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, ns.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nr(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, nl.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nr(h, d) };
    }
}
var no = n(66834),
    nd = n(385648);
async function nc(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == tF.A.getGuild(t))
        try {
            await (0, nd.Z2)(t, { object: K.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, no.k)(t),
                (l = D.A.getChannel(n));
        } catch {}
    eU.default.track(K.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, tB.A)(K.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var nu = n(387408),
    nm = n(427209),
    nh = n(249847);
function ng() {
    return (0, s.jsxs)("div", {
        className: nh.N1,
        children: [
            (0, s.jsx)(nm.A, { size: "xs", className: nh.nr, color: tD.A.colors.TEXT_MUTED }),
            (0, s.jsx)(p.E, {
                className: nh.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function np(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new na(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, U.default, w.A, tl.A, tF.A, t5.A],
            () => l.getForwardInfo(D.A, U.default, w.A, tl.A, tF.A, t5.A).footerInfo,
            [l],
            h.A,
        ),
        o = (0, u.bG)([D.A], () => D.A.getChannel(t.messageReference?.channel_id)),
        d = r.useCallback(() => {
            nc(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              className: nh.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: nh.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, s.jsx)(nA, { channel: o }) : null,
                  (0, s.jsx)(p.E, {
                      className: nh.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t6._, { size: "xxs", color: tD.A.colors.TEXT_MUTED }),
              ],
          });
}
function nA(e) {
    let { channel: t } = e,
        n = (0, nt.Vp)({ location: "ForwardFooter" }),
        i = r.useMemo(() => (0, t4.gU)(t), [t]);
    return n.enabled && null != i ? (0, s.jsx)(i, { className: nh.yl, size: "xs", color: "currentColor" }) : null;
}
function nx(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => (0, nu.A)(t, n), [t, n]),
        a = nn.hD.useSetting(),
        o = nn.rs.useSetting(),
        d = (0, u.bG)([ni.A], () => ni.A.isDeveloper),
        c = (0, t7.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        {
            content: m,
            hasSpoilerEmbeds: h,
            hasBailedAst: g,
        } = (0, t8.A)(l, {
            hideSimpleEmbedContent: a && o,
            formatInline: !1,
            allowList: c,
            allowHeading: c,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        p = (0, u.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        A = nn.hH.useSetting();
    return null == p
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: nh.kL,
                  children: [
                      (0, s.jsx)("div", { className: nh.hD }),
                      (0, s.jsxs)("div", {
                          className: nh.Qs,
                          children: [
                              (0, s.jsx)(ng, {}),
                              (0, s.jsx)(t9.Ay, { message: l, content: m, compact: A }),
                              (0, ne.A)({
                                  channelMessageProps: { message: l, channel: p, compact: A },
                                  hasSpoilerEmbeds: h,
                                  hasBailedAst: g,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, s.jsx)(np, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function nf(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(nx, { message: t, snapshot: e, index: n }, n)),
    });
}
var nE = n(643612),
    nC = n(172218),
    nI = n(607399),
    nv = n(702841),
    n_ = n(529200),
    nj = n(395671),
    nN = n(993748),
    nT = n(212534),
    ny = n(64493);
function nS(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, nv.yK)(
            [nT.A],
            () => [nT.A.getApplication(t), nT.A.isInvalidApplication(t), nT.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, nv.bG)([O.A], () => O.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, nC.K)(u),
        h = r.useCallback(() => {
            eU.default.track(K.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: nI.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, nN.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === nT.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eU.default.track(K.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: nI.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(n_.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, s.jsx)(n_.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: ny.k,
                          children: [
                              (0, s.jsx)(n_.A.Icon, { expired: !0 }),
                              (0, s.jsx)(n_.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === nT.e.FETCHING
          ? (0, s.jsxs)(n_.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, s.jsx)(n_.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(ei, { app: nj.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var nb = n(229527),
    nL = n(870136),
    nR = n(330075),
    nk = n(412728);
function nM(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, tV.Qi)(n, i),
        r = (0, nv.bG)([O.A], () => O.A.getGuildId());
    return ((0, e5.A)(
        {
            type: nk.z.VIEW,
            name: e4.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(nR.i, {
              guildProductListing: l,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var nP = n(484724),
    nD = n(953727);
function nw(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, nD.A)(l),
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
var nO = n(122906),
    nU = n(401755),
    nG = n(195580),
    nV = n(344900);
function nB(e) {
    let { code: t } = e,
        i = (0, u.bG)([nO.A], () => nO.A.getGuildTemplate(t));
    if (null == i || i.state === nU.QB.RESOLVING)
        return (0, s.jsxs)(n_.A, {
            children: [
                (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, s.jsx)(n_.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === nU.QB.EXPIRED)
        return (0, s.jsxs)(n_.A, {
            children: [
                (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, s.jsxs)(n_.A.Body, {
                    children: [
                        (0, s.jsx)(n_.A.Icon, { expired: !0 }),
                        (0, s.jsx)(n_.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eg.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, s.jsx)(eg.$, {
              onClick: () => {
                  (0, eI.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("88679"),
                          n.e("10642"),
                          n.e("81927"),
                          n.e("99430"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("19580"),
                          n.e("16198"),
                          n.e("69771"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === nU.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(n_.A, {
        children: [
            (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, s.jsxs)(n_.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nV.iH,
                        children: [
                            (0, s.jsx)(nw, { className: nG.K }),
                            (0, s.jsx)(n_.A.Info, {
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
var nH = n(842241),
    nF = n(681154),
    nY = n(155718);
let nz = new Set([
    nF.ContentInventoryEntryType.TOP_ARTIST,
    nF.ContentInventoryEntryType.TOP_GAME,
    nF.ContentInventoryEntryType.PLAYED_GAME,
    nF.ContentInventoryEntryType.WATCHED_MEDIA,
    nF.ContentInventoryEntryType.LISTENED_SESSION,
    nF.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var nW = n(398817),
    nK = n(857071),
    nJ = n(46054),
    nq = n(731068),
    nZ = n(619517),
    nX = n(207133),
    nQ = n(835245),
    n$ = n(844222),
    n0 = n(463930),
    n1 = n(251391),
    n2 = n(601255),
    n3 = n(562819),
    n6 = n(234914),
    n4 = n(59318),
    n5 = n(837528),
    n7 = n(754459),
    n9 = n(967144),
    n8 = n(342296),
    ie = n(696451),
    it = n(218394);
function ii(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, nD.A)(l),
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
var il = n(717125),
    is = n(376943),
    ir = n(36491),
    ia = n(752755),
    io = n(461715),
    id = n(381941),
    ic = n(38208);
function iu(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, io.CI)(e),
                i = (0, nv.bG)([ie.Ay, P.default], () => {
                    let e = P.default.getId();
                    return ie.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, nv.bG)(
                    [il.A],
                    () => null != n && n?.channelId != null && il.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(K.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, nv.cf)([ia.A, tF.A, D.A, U.default, O.A], () => {
                    let e = ia.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = tF.A.getGuild(n?.guildId),
                        i = D.A.getChannel(n?.channelId),
                        l = U.default.getUser(e?.author_id),
                        s = O.A.getGuildId(),
                        r = null != i && (0, is.nc)(i);
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
                    let e = (0, io.tU)({
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
                        (ia.A.getEmbedFetchState(n.threadId) !== ia.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, ir.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, n7.A)(n.id, id.Fd),
        u = (0, n5.VL)(n, i, c, !0),
        m = nn.kt.useSetting(),
        h = (0, it.j)(),
        [g, A] = r.useState(!1),
        [f, E] = r.useState(d?.coverImage == null),
        C = (0, nv.bG)([ie.Ay, U.default], () => ie.Ay.isMember(d?.guildId, U.default.getCurrentUser()?.id), [d]),
        I = (0, nv.bG)([ie.Ay], () => (d?.authorId != null ? ie.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, n2.A)(I?.avatarDecoration != null ? I?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [I?.colorString ?? "inherit", I?.colorStrings ?? null, I?.colorRoleId], [I]),
        T = (0, n9.gn)(I?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: y } = r.useContext(n$.C),
        [S, b] = r.useState(!1),
        L = r.useCallback(() => {
            A(!0);
        }, [A]),
        R = r.useCallback(() => {
            A(!1);
        }, [A]),
        k = r.useCallback(async () => {
            null != d &&
                ((0, tU.zV)(K.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: C,
                }),
                d.canAccess
                    ? (0, tB.A)(K.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : C
                      ? (0, tB.A)(K.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await nd.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, C]);
    if (null == d) return null;
    let M = (0, G.F_)({ avatarDecoration: v, size: (0, n3.Te)(tC._3.SIZE_40), canAnimate: S }),
        w = d.user?.getAvatarURL(d.guildId, 40, S),
        V = () => {
            y.enabled || b((e) => !e);
        },
        B = d.coverImage,
        H = null != B && (0, n4.ge)(B);
    return (0, s.jsxs)("div", {
        className: ic.wb,
        children: [
            (0, s.jsxs)("div", {
                className: ic.iT,
                onMouseEnter: L,
                onMouseLeave: R,
                children: [
                    !f &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: o()(ic.xn, { [ic.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(n6.A, {
                                  src: !(h && (m || g)) && H ? `${B}?format=png` : B,
                                  backgroundSrc: `${B}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(ic.xn, { [ic.p6]: d.shouldSpoiler }),
                                  imageChildClassName: ic.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eb.D, {
                            onClick: k,
                            children: (0, s.jsx)("div", {
                                className: ic.nx,
                                children: (0, s.jsxs)("div", {
                                    className: ic.BS,
                                    children: [
                                        (0, s.jsx)(ii, { color: tD.A.colors.WHITE.css }),
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
                className: ic.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: ic.OA,
                        children: [
                            (0, s.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ic.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(ic.hF, ic.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: ic._5,
                        children: [
                            null != d.authorId &&
                                null != w &&
                                (0, s.jsx)(n8.A, {
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
                                            onMouseEnter: V,
                                            onMouseLeave: V,
                                            children: (0, s.jsx)(tE.eu, {
                                                ...e,
                                                ref: a,
                                                size: tC._3.SIZE_40,
                                                src: w,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: ic.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: ic.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(n1.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: ic.Xg,
                                                }),
                                            (0, s.jsx)(eb.D, {
                                                onClick: k,
                                                className: ic.HA,
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
                                            className: ic.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: () =>
                                                    null == d.authorId
                                                        ? (0, s.jsx)(n0.V, {
                                                              name: d.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: ic.fh,
                                                          })
                                                        : (0, s.jsx)(
                                                              n8.A,
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
                                                                      (0, s.jsx)(n0.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: d.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: ic.fh,
                                                                      }),
                                                              },
                                                              (0, nQ.A)(),
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
var im = n(492230),
    ih = n(704413);
n(801541);
var ig = n(889137),
    ip = n(744593),
    iA = n(123292),
    ix = n(707554),
    iE = n(962514),
    iC = n(126031),
    iI = n(438437),
    iv = n(306417),
    i_ = n(233271);
function ij(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, s.jsxs)("div", {
        className: i_.AA,
        children: [
            t && (0, s.jsx)(iC.s, { children: J.intl.string(J.t["8DAM+5"]) }),
            (0, s.jsxs)(p.E, { variant: "text-md/semibold", color: "none", children: [i, "%"] }),
            (0, s.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function iN(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: l } = e,
        r = !0 === t.isSelected,
        a = !0 === t.didSelfVote,
        d = !0 === t.isVictor;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(iv.Dt, {
                attachmentClassName: o()(i_.oh, { [i_.Wx]: l }),
                emojiClassName: i_.Zg,
                media: t.pollMedia,
                fallback: (0, s.jsx)("div", { className: o()(i_.oh, i_.nb) }),
            }),
            r && (0, s.jsx)(iv.Vx, { size: 40, isVictor: d, isExpired: n, className: i_.Dt }),
            l &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ij, {
                            didSelfVote: a,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: a ? i : void 0,
                        }),
                        ((!n && a) || d) &&
                            (0, s.jsx)(iv.Vx, { size: 18, isVictor: d, isExpired: n, className: i_.Po }),
                    ],
                }),
        ],
    });
}
function iT(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l, ...r } = e;
    return (0, s.jsx)(iv.Fh, {
        className: i_.ry,
        answerClassName: o()(i_.ZF, { [i_.EK]: i !== iI.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, s.jsx)(iN, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l }),
        ...r,
    });
}
var iy = n(290794),
    iS = n(789646),
    ib = n(922139),
    iL = n(615300),
    iR = n(990078),
    ik = n(717421),
    iM = n(915089),
    iP = n(956703),
    iD = n(969632),
    iw = n(140957);
function iO(e) {
    let { percentage: t, label: n, canShowVoterDetails: i, answerId: l } = e,
        a = (0, iM.GV)(),
        { channelId: o, messageId: d } = (0, iy.Tu)(),
        [c, u] = r.useState(""),
        [m, h] = r.useState(!1),
        g = "" !== c && m,
        A = r.useCallback(() => {
            u((0, iD.$m)(d, o, l));
        }, [d, o, l]),
        x = r.useCallback(() => {
            A(), h(!0);
        }, [A]),
        f = r.useCallback(() => {
            h(!1);
        }, []),
        E = r.useCallback(() => {
            (0, iE.e)({ channelId: o, messageId: d, answerId: l });
        }, [o, d, l]);
    return (
        r.useEffect(() => {
            if (m)
                return (
                    iP.A.addReactChangeListener(A),
                    () => {
                        iP.A.removeReactChangeListener(A);
                    }
                );
        }, [m, A]),
        (0, s.jsxs)("div", {
            className: iw.AA,
            children: [
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              "" !== c
                                  ? (0, s.jsx)(iR.m, {
                                        __unsupportedReactNodeAsText: (0, s.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: c,
                                        }),
                                        forceOpen: g,
                                        "aria-label": !1,
                                        children: (0, s.jsx)(iA.Q, {
                                            onMouseEnter: x,
                                            onMouseLeave: f,
                                            onFocus: x,
                                            onBlur: f,
                                            onClick: E,
                                            "aria-describedby": g ? a : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, s.jsx)(iA.Q, {
                                        onMouseEnter: x,
                                        onMouseLeave: f,
                                        onFocus: x,
                                        onBlur: f,
                                        onClick: E,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              g && (0, s.jsx)(iC.s, { id: a, children: c }),
                          ],
                      })
                    : (0, s.jsx)(p.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, s.jsxs)(p.E, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function iU(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, ik.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: iL.A.Easing.inOut(iL.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, s.jsx)(ib.animated.span, { className: iw.an, style: i, "aria-hidden": !0 });
}
function iG(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: r, className: a } = e;
    return (0, ig.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: iI.CQ.RADIO_BUTTONS }, () =>
            (0, s.jsx)(iv.k$, { isSelected: n, size: 24, className: a }),
        )
        .with({ answersInteraction: iI.CQ.CHECKBOXES }, () =>
            (0, s.jsx)(iv.e5, { isSelected: n, size: 20, className: a }),
        )
        .with({ answersInteraction: iI.CQ.LIST, didSelfVote: !0 }, () =>
            (0, s.jsx)(iv.Vx, { isVictor: l, isExpired: r, size: 24, className: a }),
        )
        .otherwise(() => null);
}
function iV(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: r } = e,
        a = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        c = !0 === t.isVictor,
        u = t.shouldAnimateTransition;
    return (0, s.jsxs)("div", {
        className: o()(iw.Fk, { [iw.EK]: i !== iI.CQ.LIST, [iw.wH]: a }),
        children: [
            l ? (0, s.jsx)(iU, { percentage: t.votesPercentage, shouldAnimate: u }) : null,
            null != t.pollMedia.emoji && (0, s.jsx)(iv.Fb, { className: iw.Zg, emoji: t.pollMedia.emoji }),
            (0, s.jsx)(p.E, {
                className: iw.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, s.jsx)(iC.s, { children: J.intl.string(J.t["8DAM+5"]) }),
            l &&
                (0, s.jsx)(iO, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: r,
                    answerId: t.answerId,
                }),
            (0, s.jsx)(iG, {
                answersInteraction: i,
                isSelected: a,
                didSelfVote: d,
                isVictor: c,
                isExpired: n,
                className: iw.ck,
            }),
        ],
    });
}
function iB(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l, ...r } = e;
    return (0, s.jsx)(iv.Fh, {
        className: iw.ry,
        answerClassName: iw.ZF,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, s.jsx)(iV, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: l,
            }),
        ...r,
    });
}
var iH = n(2445);
function iF(e) {
    let { media: t } = e;
    return (0, s.jsx)(e8.D, {
        variant: "text-md/medium",
        className: iH.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function iY(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: r } = e;
    return (0, s.jsxs)("div", {
        className: o()(iH.ez, r),
        children: [
            l
                ? (0, s.jsx)(iA.Q, { text: t, onClick: i, variant: "secondary", textVariant: "text-sm/medium" })
                : (0, s.jsx)(p.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, s.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function iz(e) {
    let { action: t, channelId: n, messageId: i, isInteractive: l, className: a } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, iS.Mg)(),
        c = r.useCallback(async () => {
            t?.type != null &&
                (await iE.A.handlePollActionTapped({ channelId: n, messageId: i, type: t.type }), d(t.type));
        }, [t?.type, n, i, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, s.jsx)(
                eg.$,
                {
                    buttonRef: o,
                    onClick: c,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, s.jsx)(iA.Q, {
                  buttonRef: o,
                  onClick: c,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, s.jsx)(iY, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: c,
                  isInteractive: l,
                  className: a,
              });
}
function iW(e) {
    let t,
        { message: n, poll: i, className: l } = e,
        r = (0, iy.hd)(i.containerStyle),
        a =
            ((t = {
                answers: i.answers,
                answersInteraction: i.answersInteraction,
                answerTapAccessibilityLabel: i.answerTapAccessibilityLabel,
                isExpired: i.isExpired,
                canTapAnswers: i.canTapAnswers,
                hasSelectedAnyAnswer: i.hasSelectedAnswer,
                myAvatarUrl: i.myAvatarUrl,
                canShowVoteCounts: i.canShowVoteCounts,
            }),
            (0, ig.YW)(i.layoutType)
                .with(ip.Z.DEFAULT, () => (0, s.jsx)(iB, { ...t }))
                .with(ip.Z.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(iT, { ...t }))
                .otherwise(() => null));
    return null == a
        ? null
        : (0, s.jsx)("div", {
              className: o()(iH.kL, r, l),
              children: (0, s.jsxs)(ix.F, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: iH.wx,
                          children: [
                              (0, s.jsx)(iF, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, s.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: iH.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      a,
                      (0, s.jsxs)("div", {
                          className: iH.pR,
                          children: [
                              (0, s.jsx)(iz, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: iH.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, s.jsx)(iz, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: iH.vD,
                              }),
                              (0, s.jsx)(iz, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function iK(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, s.jsx)(iy.y5, {
        message: t,
        poll: n,
        children: (0, s.jsx)(iS.RZ, { children: (0, s.jsx)(iW, { message: t, poll: n, className: i }) }),
    });
}
var iJ = n(711038),
    iq = n(892340),
    iZ = n(803306),
    iX = n(491182),
    iQ = n(639288),
    i$ = n(10364),
    i0 = n(378570),
    i1 = n(138298),
    i2 = n(761640),
    i3 = n(989349),
    i6 = n.n(i3),
    i4 = n(606049),
    i5 = n(943815),
    i7 = n(447215),
    i9 = n(221314),
    i8 = n(237507),
    le = n(334211),
    lt = n(513653);
let ln = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = U.default.getUser(t),
        u = r.useMemo(() => (i ? (0, i5.A)((0, ns.i$)(i6()(), "LT")) : null), [i]),
        m = (0, i7.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, t_.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tC.FT)(tC._3.SIZE_16)) : lt,
        g =
            null != c
                ? J.intl.format(i9.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(i9.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(le.NB, le.JZ, u),
        children: [
            (0, s.jsx)(tE.eu, { src: h, size: tC._3.SIZE_16, className: i8.my, "aria-label": "" }),
            (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: i8.Xh, children: g }),
            (0, s.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: i8.Ek, children: "\u2022" }),
                    (0, s.jsx)(i4.A, { timestamp: d, className: i8.vE }),
                ],
            }),
        ],
    });
};
var li = n(167684);
function ll(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new na(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [D.A, U.default, w.A, tl.A, tF.A, t5.A],
            () => l.getForwardInfo(D.A, U.default, w.A, tl.A, tF.A, t5.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = tF.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ed.A.getCurrentlySelectedChannelId(),
                s = i2.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (i1.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, i0.iN)(i),
                eU.default.track(K.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              className: li.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: li.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: li.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t6._, { size: "xxs", color: tD.A.colors.TEXT_MUTED }),
              ],
          });
}
function ls(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, t_.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, n7.A)(e.id, id.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, n5.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, n5.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(iX.A, {
        childrenExecutedCommand: (0, s.jsx)(ln, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(iQ.Ay, {
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
            renderPopout: i$.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(t9.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: li.iU,
        author: o,
    });
}
function lr(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, iZ.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, nu.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nn.hD.useSetting(),
        c = nn.rs.useSetting(),
        m = (0, u.bG)([ni.A], () => ni.A.isDeveloper),
        h = (0, t7.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, t8.A)(o, {
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
                  className: li.kL,
                  children: (0, s.jsxs)("div", {
                      className: li.Qs,
                      children: [
                          (0, s.jsx)(ls, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, ne.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: li.Mf,
                          }),
                          (0, s.jsx)(ll, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function la(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(lr, { message: t, snapshot: e, index: n }, n)),
    });
}
var lo = n(302031),
    ld = n(738188),
    lc = n(239093),
    lu = n(89453);
function lm(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === lc.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === lc.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eb.D, {
              onClick: () => {
                  (0, eI.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("57352"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, s.jsx)(e, {
                              classificationId: l,
                              source: lc.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lu.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lu.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lu.U1,
                              children: [
                                  (0, s.jsx)(ld.i, { className: lu.QW, color: tD.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lu.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: i6()().diff(i6().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lu.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: lu.xQ,
                      children: (0, s.jsx)(iA.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var lh = n(349288),
    lg = n(393033),
    lp = n(903009);
function lA(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(lh.Anchor, {
        onClick: () => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("57352"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: lc.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lp.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function lx(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(lh.Anchor, { className: lp.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function lf(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case lc.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(lA, { classificationId: n });
        case lc.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(lx, { learnMoreLink: i });
        default:
            return null;
    }
}
function lE(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e9.k, { size: "xs", color: tD.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(ld.i, { color: tD.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: lp.Kk, children: n[t] }) : null;
}
function lC(e) {
    let { children: t, theme: n } = e,
        i = { default: lp._y, danger: lp.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function lI(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lg.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eb.D, {
              className: lp.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lp.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lp.U1,
                              children: [
                                  (0, s.jsx)(lE, { iconType: n.icon }),
                                  (0, s.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lp.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), i6()().diff(i6().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lp.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(lC, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              lf,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lv = n(44724),
    l_ = n(318254),
    lj = n(825484),
    lN = n(587895),
    lT = n(875444),
    ly = n(429913),
    lS = n(723090),
    lb = n(801228),
    lL = n(561794),
    lR = n(871123),
    lk = n(733391),
    lM = n(832163),
    lP = n(317560),
    lD = n(533406),
    lw = n(971146),
    lO = n(300182),
    lU = n(328100),
    lG = n(918374);
function lV(e) {
    let { sku: t, normalPrice: n, discountedPrice: i, discountPercent: l } = e,
        a = r.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, s.jsx)("div", {
                          className: lG.pt,
                          children: (0, s.jsx)(p.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: J.intl.format(J.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, s.jsx)(l_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        d = null != l && null != i;
    return (0, s.jsx)("div", {
        className: o()(lG.PB, { [lG.un]: d }),
        children: d
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      null != n &&
                          (0, s.jsx)(p.E, {
                              className: lG.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, s.jsx)(p.E, { variant: "text-md/bold", lineClamp: 1, children: i }),
                      (0, s.jsxs)(p.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", l, ")"],
                      }),
                      a,
                  ],
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [null != n && (0, s.jsx)(p.E, { variant: "text-md/bold", lineClamp: 1, children: n }), a],
              }),
    });
}
function lB(e) {
    let { applicationId: t, skuId: n, channel: i } = e,
        l = (0, u.bG)([lM.A], () => lM.A.getGuildIdFromApplicationId(t));
    return null == l ? null : (0, s.jsx)(lH, { guildId: l, skuId: n, channel: i });
}
function lH(e) {
    let { guildId: t, skuId: n, channel: i, customNavigateToSocialLayerStorefront: l } = e,
        a = (0, u.bG)([eO.A], () => eO.A.isFetchingForSKU(n)),
        o = (0, lb.A)({ skuId: n }),
        d = o?.applicationId,
        c = (0, u.bG)([lN.A], () => null != d && lN.A.isFetchingApplication(d)),
        m = (0, u.bG)([lN.A], () => null != d && lN.A.didFetchingApplicationFail(d)),
        h = (0, ly.h)(d),
        { analyticsLocations: g } = (0, f.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, lL.pE)();
    let A = (0, u.bG)([U.default], () =>
            i.isDM() && null != i.recipients && 0 !== i.recipients.length ? U.default.getUser(i.recipients[0]) : null,
        ),
        E = (0, u.bG)([lM.A], () => (null != n ? lM.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: C, primaryIconLabel: I } = r.useMemo(() => (0, lR.Cv)(o, d), [o, d]),
        { normalPrice: v, discountedPrice: _, discountPercent: j } = (0, lS.CD)({ sku: o });
    r.useEffect(() => {
        null == t || null == n || eO.A.isFetchingForSKU(n) || (0, lk.qf)(t, n);
    }, [t, n]);
    let N = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    o?.applicationId != null &&
                        (0, lP.R)({
                            customNavigateToSocialLayerStorefront: l,
                            skuId: n,
                            applicationId: o.applicationId,
                            isStorefront: !1,
                            analyticsLocations: g,
                        });
            },
            [n, o, g, l],
        ),
        T = r.useCallback(() => {
            null != o &&
                E &&
                (0, lD.a)(
                    o,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [o, t, E]),
        y = r.useCallback(() => {
            null != o &&
                (0, lD.a)(
                    o,
                    { isGift: !0, giftRecipient: A ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [o, A]),
        S = null != d && null == h && !m;
    if ((a || c || S) && (null == o || null == h))
        return (0, s.jsx)("div", { className: lG.kL, children: (0, s.jsx)(tw.y, { className: lG.u1 }) });
    if (null == o || null == h || !(0, lT.A)(h) || h.guildId !== t) return null;
    let b = _ ?? v;
    return (0, s.jsxs)("div", {
        className: lG.kL,
        children: [
            (0, s.jsx)(lU.A, { className: lG.Nr, skuId: n, variant: lU.s.EMBEDDED, onClick: N, analyticsLocations: g }),
            (0, s.jsxs)("div", {
                className: lG.zH,
                children: [
                    (0, s.jsxs)("div", {
                        className: lG.lI,
                        children: [
                            (0, s.jsx)(lw.V, {}),
                            (0, s.jsxs)("div", {
                                className: lG.PB,
                                children: [
                                    null != C && (0, s.jsx)("img", { src: C.toString(), alt: I, className: lG.ye }),
                                    (0, s.jsx)(p.E, { variant: "text-md/medium", lineClamp: 1, children: o.name }),
                                ],
                            }),
                            (0, s.jsx)(lV, { sku: o, normalPrice: v, discountedPrice: _, discountPercent: j }),
                        ],
                    }),
                    (0, s.jsxs)(lj.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, s.jsx)(iR.m, {
                                text: E ? void 0 : J.intl.string(J.t.IqlPbQ),
                                children: (0, s.jsx)(eg.$, {
                                    variant: E ? "secondary" : "primary",
                                    onClick: N,
                                    text: J.intl.string(J.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            E &&
                                (0, s.jsx)(eg.$, {
                                    variant: "primary",
                                    onClick: T,
                                    text:
                                        null != b ? J.intl.format(J.t.Xp5WTn, { price: b }) : J.intl.string(J.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, s.jsx)(lO.A, { onGift: y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lF = n(68935),
    lY = n(319060),
    lz = n(812282),
    lW = n(922016),
    lK = n(34337),
    lJ = n(240248),
    lq = n(256449),
    lZ = n(194004),
    lX = n(148355),
    lQ = n(780645),
    l$ = n(862482),
    l0 = n(847374),
    l1 = n(964486),
    l2 = n(235986),
    l3 = n(624793),
    l6 = n(636537),
    l4 = n(639245),
    l5 = n(87719),
    l7 = n(725807),
    l9 = n(428262),
    l8 = n(750385),
    se = n(850992),
    st = n(625494),
    sn = n(698279),
    si = n(788868),
    sl = n(631144),
    ss = n(979132);
function sr(e) {
    eU.default.track(K.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? K.liQ.GUILD_CHANNEL : K.liQ.DM_CHANNEL,
        location_section: K.JJy.STICKER_POPOUT,
    }),
        (0, l5.e)();
}
function sa(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(l2.A, {
        children: [
            (0, s.jsx)(lX.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(l2.A, {
                direction: l2.A.Direction.VERTICAL,
                justify: l2.A.Justify.CENTER,
                className: ss.bM,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-md/semibold", children: (0, s.jsx)(lQ.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let so = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [a, o, d] = (0, u.yK)(
                [l8.A],
                () => [l8.A.getStickerPack(n.pack_id), !l8.A.hasLoadedStickerPacks, l8.A.isPremiumPack(n.pack_id)],
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
        (0, lq.Sr)(n.pack_id);
        let m = (0, lq.pD)(i),
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
            eU.default.track(K.HAw.OPEN_POPOUT, {
                type: K.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, tU.dI)(e),
            });
        }, [n.pack_id]),
        o || null == a)
            ? (0, s.jsx)(lK.Y0, { className: sl.v0 })
            : (0, s.jsxs)(lK.Uq, {
                  className: sl.Bm,
                  children: [
                      (0, s.jsx)(e8.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(p.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                              : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: sl.pQ,
                          children: c.map((e) => (0, s.jsx)(lX.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: sl.j0,
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
                                                  st._.dispatchToLastSubscribed(K.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sn.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && se.bM.setActiveCategoryIndex(i);
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
    sd = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
            [d, c] = r.useState(null),
            [m, h] = r.useState(!1),
            g = U.default.getCurrentUser(),
            A = l9.Ay.canUseCustomStickersEverywhere(g),
            x = (0, u.bG)([tF.A], () => tF.A.getGuild(n.guild_id)),
            f = null != x,
            [E, C] = r.useState(!1),
            [I, v] = r.useState(null),
            _ = r.useMemo(
                () => ({
                    page: null != i.guild_id ? K.liQ.GUILD_CHANNEL : K.liQ.DM_CHANNEL,
                    section: K.JJy.STICKER_POPOUT,
                }),
                [i.guild_id],
            ),
            { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, tU.dI)(i) }),
            N = { stickerSourceGuild: x, refreshPositionKey: a },
            T = r.useRef(N);
        r.useEffect(() => {
            T.current = N;
        }),
            r.useEffect(() => {
                let { stickerSourceGuild: e } = T.current;
                (async () => {
                    if (null == e || e.features.has(K.GuildFeatures.DISCOVERABLE)) {
                        let e;
                        c(
                            await ((e = n.id),
                            l6.Bo.get({ url: K.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, nd.jE)(e.body) : null))
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
                          sr(i), l();
                      },
                  })),
                  (L = "Custom Sticker Popout (Soft Upsell)"));
        let R = !b && !f && S && A;
        if (
            (r.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [m, d]),
            (0, l1.Ay)(() => {
                eU.default.track(K.HAw.OPEN_POPOUT, { type: L, ...j });
            }),
            !m)
        )
            return (0, s.jsx)(lK.Y0, { className: sl.v0 });
        {
            let e;
            return (0, s.jsxs)(lK.Uq, {
                className: ss.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || f) return;
                        l();
                        let e = d.id;
                        try {
                            await no.A.joinGuild(e), no.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, s.jsxs)("div", {
                        className: ss.gH,
                        children: [
                            (0, s.jsx)(sa, { description: t, sticker: n }),
                            b &&
                                (0, s.jsx)(l7.A, {
                                    className: ss.lI,
                                    subscriptionTier: si.pe.TIER_2,
                                    size: l$.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            R &&
                                (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ss.lI,
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
                                t = null != d ? l3.GO.createFromDiscoverableGuild(d) : l3.GO.createFromGuildRecord(x);
                            return (0, s.jsxs)("div", {
                                className: ss.tl,
                                children: [
                                    (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: ss.YW,
                                        children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
                                    }),
                                    (0, s.jsx)(l4.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: R,
                                    }),
                                    !f &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(eb.D, {
                                                    onClick: () => {
                                                        a(), C(!E);
                                                    },
                                                    className: ss.wK,
                                                    children: (0, s.jsxs)(l2.A, {
                                                        children: [
                                                            (0, s.jsx)(p.E, {
                                                                className: ss.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: J.intl.string(J.t.vtH5hn),
                                                            }),
                                                            (0, s.jsx)(l0.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: o()(ss.ZB, { [ss.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, s.jsx)(l2.A, {
                                                        wrap: l2.A.Wrap.WRAP,
                                                        align: l2.A.Align.START,
                                                        justify: l2.A.Justify.START,
                                                        className: ss.LX,
                                                        children: e.map((e) =>
                                                            (0, s.jsx)(
                                                                iR.m,
                                                                {
                                                                    text: e.name,
                                                                    ...lK.Uk,
                                                                    children: (0, s.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: o()(ss.Th, {
                                                                                [sl.vT]: null != I && I !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, s.jsx)(lX.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: I === e.id,
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
function sc(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(lK.Uq, {
        className: sl.Bm,
        children: (0, s.jsx)(sa, {
            sticker: i,
            description: J.intl.format(J.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sr(t);
                },
            }),
        }),
    });
}
let su = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, lq.Zq)(t, !0);
    return null != r && (0, lF.FD)(r)
        ? (0, s.jsx)(so, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lF.Xw)(r)
          ? (0, s.jsx)(sd, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == r
                ? (0, s.jsx)(sc, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, s.jsx)(lK.Y0, {});
};
var sm = n(76513);
let sh = (0, lJ.xI)(lY.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sg = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, lq.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: sm.Zl,
                children: [(0, s.jsx)(lz.s, { size: "xs", color: "currentColor", className: sm.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(f.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: sm.be,
                children: (0, s.jsx)(lW.Y, {
                    align: "center",
                    animation: lW.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(su, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(iR.m, {
                            ...lK.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, lK.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    tU.Ay.trackWithMetadata(K.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: si.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, lZ.Tw)(e.format_type),
                                        is_custom: (0, lZ.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eb.D, {
                                innerRef: l,
                                className: sm.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, s.jsx)(lX.A, { isInteracting: i, size: sh, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sp = n(406704),
    sA = n(531142),
    sx = n(140735),
    sf = n(442433),
    sE = n(143413),
    sC = n(935208),
    sI = n(321045),
    sv = n(456874),
    s_ = n(707539),
    sj = n(80682),
    sN = n(465364),
    sT = n(805964),
    sy = n(943220),
    sS = n(838541);
function sb(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [w.A],
            () => ({ isBlocked: w.A.isBlockedForMessage(t), isIgnored: w.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sj.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
        () =>
            null != t.content && "" !== t.content ? (0, sN.Ay)(t, { formatInline: !0, allowLinks: !0 }).content : null,
        [t],
    );
    return (0, s.jsxs)("div", {
        className: le.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: le.FJ }),
            (0, s.jsx)(sy.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: le.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: r,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, sT.o)(e, t, n, i, le.tP, {
                        trailingIconClass: le._v,
                        leadingIconClass: le.a5,
                        iconSize: sS.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, r ?? (0, s.jsx)("span", { className: le.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var sL = n(747926),
    sR = n(650583),
    sk = n(74791);
function sM(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([D.A], () => D.A.getChannel(sC.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(sP, { channel: i, compact: n, isSystemMessage: (0, sE.A)(t) });
}
function sP(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, nl.Ay)(a),
        h = (0, u.bG)([sv.A], () => sv.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([sv.A], () => sv.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([sv.A], () => sv.A.getCount(t.id))),
            (r = (0, s_.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == l || 0 === l
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: sk.vE, children: (0, s_.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(sb, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: sk.vE, children: (0, s_.aK)(r) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(sk.GI, { [sk.E]: !d, [sk.E_]: c }) }),
            (0, s.jsx)(eb.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sL.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sR.dh.SPACE || e.key === sR.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sL.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, sf.L3)(e, async () => {
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
                className: o()(sk.kL, { [sk.og]: c }),
                children: (0, s.jsxs)(sA.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: sk.kq,
                            children: [
                                (0, s.jsx)(sx.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, s.jsx)("span", { className: sk.UU, children: m }),
                                (0, s.jsx)("span", {
                                    className: sk.lO,
                                    "aria-hidden": !A,
                                    children: (0, sI.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sk.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sD = n(383233),
    sw = n(834942),
    sO = n(644447),
    sU = n(927813),
    sG = n(659674),
    sV = n(998218),
    sB = n(5095),
    sH = n(294520),
    sF = n(320095),
    sY = n(863439),
    sz = n(707985),
    sW = n(730852),
    sK = n(265422),
    sJ = n(986268);
function sq(e) {
    let { guild: t, channel: n, message: i } = e,
        l = O.A.getGuildId(),
        a = ed.A.getChannelId(l),
        o = r.useCallback(() => {
            eU.default.track(K.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, sK.i)(t.id, n.id),
                sW.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(n_.A.Channel, { channel: n });
    return (0, s.jsx)(n_.A, {
        children: (0, s.jsxs)(n_.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: nV.iH,
                    children: [
                        (0, s.jsx)(n_.A.Icon, { guild: t }),
                        (0, s.jsx)(n_.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: nV.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: nV.E3,
                                        children: (0, s.jsx)(sJ.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: nV.UD,
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
function sZ(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = D.A.getChannel(l),
        a = tF.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && tl.A.can(K.xBc.VIEW_CHANNEL, r) && tl.A.can(K.xBc.CONNECT, r)
        ? (0, s.jsx)(sq, { guild: a, channel: r, message: n })
        : null;
}
var sX = n(789645),
    sQ = n(298236),
    s$ = n(953756),
    s0 = n(564107),
    s1 = n(503556),
    s2 = n(143517);
function s3(e) {
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
        [m, h] = (0, s$.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(s0.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(sQ.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(s$.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(s$.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(s1.O0, s2.k, s2.z, { [s1.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eb.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: s1.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, s.jsx)(sX.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, nW.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var s6 = n(451988),
    s4 = n(261958),
    s5 = n(212245),
    s7 = n(775602),
    s9 = n(62583),
    s8 = n(956549),
    re = n(550151),
    rt = n(392054),
    rn = n(853390),
    ri = n(290863),
    rl = n(403362),
    rs = n(811024),
    rr = n(360469),
    ra = n(212242);
let ro = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, it.j)(),
        s = (0, u.bG)([s7.A], () => s7.A.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new s6.IX();
            return (
                e.start(a ? 15 * sU.A.Millis.SECOND : sU.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / sU.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, rn.fU)(n)
    );
});
ro.displayName = "ActivityRuntimeCounter";
let rd = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, s5.p)(),
        m = (0, u.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([P.default], () => P.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: E,
            activityLaunchState: C,
        } = (0, u.cf)(
            [ec.Ay],
            () => ({
                embeddedActivity: ec.Ay.getEmbeddedActivitiesForChannel(h ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: ec.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: ec.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        I = A?.userIds,
        v = (0, u.yK)(
            [U.default],
            () =>
                Array.from(I ?? [])
                    .map((e) => U.default.getUser(e))
                    .filter(rl.Vq),
            [I],
        ),
        _ = (0, u.bG)([ri.A], () => {
            if (null == I) return null;
            for (let e of I) {
                let t = ri.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, I]),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new nj.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rr.Gl), e;
        }, [n]),
        T = (0, re.vG)({ userId: g, channelId: i, application: N }),
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
                            a = (0, rs.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== re.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case re.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case re.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case re.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case re.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case re.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case re.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case re.Gy.NO_CHANNEL:
                                case re.Gy.NO_GUILD:
                                case re.Gy.NO_USER:
                                case re.Gy.IS_AFK_CHANNEL:
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
        L = null != C && C.isLaunching && C.componentId === b,
        R = async () => {
            eU.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                is_activity_start: y,
                cta: "Play",
            }),
                y
                    ? await (0, s8.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                          commandOrigin: rt.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, s9.A)({
                          applicationId: A.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                      });
        },
        k = S.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        M = (0, ee.F)(N, () => {
            eU.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        w = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let O = v.length,
        V = _?.timestamps?.start ?? _?.created_at,
        B = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case K.$pd.STREAMING:
                    return { text: J.intl.formatToPlainString(J.t.tyCw2q, { count: n }), Icon: F.o };
                case K.$pd.LISTENING:
                    return { text: J.intl.formatToPlainString(J.t["2l8yka"], { count: n }), Icon: Y.T };
                default:
                    return { text: J.intl.formatToPlainString(J.t.yJj035, { count: n }), Icon: z._ };
            }
        })({ activity: _, activityUsersCount: O }),
        W = [
            {
                label: S.text,
                trackingArea: X.kY.PLAY,
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: L,
            },
        ];
    return (0, s.jsx)(H.h, {
        header: J.intl.string(J.t.pkq6Vq),
        title: n.name,
        iconSrc: w,
        info: (0, s.jsx)("div", {
            className: ra.QR,
            children: y
                ? (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: k })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: ra.oL,
                                  children: [
                                      null != V &&
                                          (0, s.jsxs)("div", {
                                              className: ra.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: ra.y9,
                                                      children: (0, s.jsx)(B.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(ro, { start: V }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(ra.DT, ra.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(s4.u, { size: "xxs", color: "currentColor" }),
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
                          O > 0 && (0, s.jsx)(Z, { activityUsers: v, guildId: l, activityText: B.text }),
                      ],
                  }),
        }),
        actions: W,
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
var rc = n(164664),
    ru = n(439401),
    rm = n(657044),
    rh = n(863574),
    rg = n(707606),
    rp = n(456412),
    rA = n(993408),
    rx = n(242874),
    rf = n(499454),
    rE = n(165191),
    rC = n(928550),
    rI = n(976860),
    rv = n(780964),
    r_ = n(766075),
    rj = n(30793),
    rN = n(189081);
function rT(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, nD.A)(i),
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
var ry = n(738533),
    rS = n(45938),
    rb = n(615396),
    rL = n(427262),
    rR = n(936504),
    rk = n(820284),
    rM = n(674378),
    rP = n(598429),
    rD = n(979604);
function rw(e) {
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
        A = (0, u.bG)([rN.A], () => rN.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([ew.A], () => null != f && !ew.A.didFetchingSkuFail(f));
    return null != A && (0, rM.XZ)(A)
        ? (0, s.jsx)(rD.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(rP.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
var rO = n(580630);
function rU(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, rO.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var rG = n(257727),
    rV =
        (((l = rV || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
let rB = (e) => {
        let { className: t } = e;
        return (0, s.jsxs)("div", {
            className: o()(rG.nM, t),
            children: [
                (0, s.jsx)(rm._, { size: "md", color: "currentColor", className: rG.Kk }),
                J.intl.string(J.t["7eicAO"]),
            ],
        });
    },
    rH = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)("div", {
            className: o()(rG.nM, n),
            children: [(0, s.jsx)(tf.t, { size: "md", color: "currentColor", className: rG.Kk }), rU(t)],
        });
    },
    rF = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: o()(rG.EQ, n), children: t.getDisplaySalePercentage() });
    },
    rY = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: o()(rG.I8, n), children: rU(t, !1) });
    },
    rz = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: n, children: rU(t) });
    },
    rW = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)("div", {
            className: o()(rG.nM, n),
            children: [(0, s.jsx)(rF, { sku: t }), (0, s.jsx)(rY, { sku: t }), (0, s.jsx)(rz, { sku: t })],
        });
    },
    rK = (e) => {
        let { className: t } = e;
        return (0, s.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
    };
class rJ extends r.PureComponent {
    static Types = rV;
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
                return (0, s.jsx)(rK, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(rB, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(rH, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(rW, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(rz, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(rK, { className: t });
            case 3:
                return (0, s.jsx)(rH, { sku: n, className: o()(rG.OB, t) });
            case 2:
                return (0, s.jsx)(rW, { sku: n, className: o()(rG.dk, t) });
            default:
                return (0, s.jsx)(rz, { className: o()(rG.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(rK, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rG.nM,
                            children: [(0, s.jsx)(rz, { sku: i }), (0, s.jsx)(rF, { sku: i })],
                        }),
                        (0, s.jsx)(rY, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(rz, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(rG.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rG.Pl);
            case 3:
                return this.renderGeneric(e, rG.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rG.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var rq = n(842983);
let rZ = {
    [K.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, nD.A)(r),
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
    [K.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, nD.A)(r),
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
    [K.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, nD.A)(r),
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
function rX(e) {
    let { operatingSystem: t, className: n } = e,
        i = rZ[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(iR.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
let rQ = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(rq.I, n),
        children: t.map((e) => (0, s.jsx)(rX, { operatingSystem: e, className: o()(rq.A, i) }, e)),
    });
};
var r$ = n(111758);
let r0 = (e) => {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(r$.T, t),
        children: (0, s.jsx)("span", { className: r$.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var r1 = n(246337);
let r2 = (e) => {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(r1.T, t),
        children: (0, s.jsx)("span", { className: r1.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var r3 = n(868285),
    r6 = n(358618),
    r4 = n(983851),
    r5 = n(133296),
    r7 = n(607470),
    r9 = n(61251);
class r8 extends r.Component {
    _animatedValue = new iL.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), iL.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        iL.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(iL.A.img, {
            className: o()({ [r9.YC]: i }, t),
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
            ? (0, s.jsx)(iL.A.div, { className: o()(r9.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(iL.A.div, {
                  className: o()(l ? r9.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tw.y, {
                                className: r9.u1,
                                itemClassName: r9.$N,
                                type: tw.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ae extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new s6.Ep();
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
            m = a ? r6._ : r4.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                nI.Fr
                    ? null
                    : (0, s.jsx)(r7.A, {
                          className: o()(r9.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(r3.F, {
                    children: l && e ? null : (0, s.jsx)(r8, { className: o()(r9.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eb.D, {
                    className: o()(r9.b4, { [r9.HY]: l && e, [r9.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: r9.i2 }) : null,
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
            ? (0, s.jsx)(r8, { className: o()(r9.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(r8, { className: o()(r9.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(r8, { className: o()(r9.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(r5.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: r9.mZ,
                  disable: !e,
                  children: (0, s.jsx)(r3.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(r9.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var at = n(366523),
    an = n(371794),
    ai = n(622413),
    al = n(174264);
class as extends r.PureComponent {
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
                  className: al.ED,
                  children: [
                      (0, s.jsx)(rJ, {
                          type: rJ.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? al.ae : al.Ek,
                      }),
                      (0, s.jsx)(rQ, { systems: [K.uje.WINDOWS], className: al.iD }),
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
        return (0, lR.bF)(l)
            ? (0, s.jsx)(at.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: al.A$,
                  backgroundImageClassName: al.iZ,
                  foregroundImageClassName: al.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(ae, {
                          className: o()(al.H1, { [al.ZC]: a }),
                          video: null != d.previewVideo ? (0, an.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, an.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: al.ZI,
                          splashPlaceholderClassName: al.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(r2, { className: o()(al.LJ, { [al.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(r0, { className: o()(al.LJ, { [al.V9]: e }) })
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
            d = o ? rh.ug : ai.A;
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
var ar = n(981449);
class aa extends r.Component {
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
            className: ar.h,
            children: (0, s.jsx)(eg.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, rI.pX)(K.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > rh.Tm;
        return (0, s.jsx)(as, {
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
        if (null != r) return (0, s.jsx)("div", { className: ar.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(K.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: ar.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(rw, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ar.h,
                          source: K.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(rJ, { type: rJ.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > rh.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(rh.Wb, { isHorizontal: r })
            : e.productLine === K.EZt.COLLECTIBLES
              ? (0, s.jsx)(rk.A, { section: K.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, s.jsx)(rk.A, {
                    section: K.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(rR.N_, {
                        onClick: this.handleLinkClick,
                        to: K.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let ao = [ew.A, rN.A, eO.A];
function ad(e) {
    let { skuId: t } = e,
        n = ew.A.get(t),
        i = null != n ? lN.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: ew.A.didFetchingSkuFail(t),
        inLibrary: null != n && rN.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eO.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rN.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let ac = (0, rp.A)((0, rg.A)(aa)),
    au = u.Ay.connectStores(ao, ad)(ac),
    am = (0, rg.A)(u.Ay.connectStores(ao, ad)(aa));
var ah = n(576171);
function ag(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eb.D, {
        className: ah.kP,
        onClick: t,
        children: [
            (0, s.jsx)(rm._, { size: "md", color: "currentColor", className: ah.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class ap extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rh.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === K.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, r_.openUserSettings)(rv.X.GIFT_PANEL);
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
        return (0, s.jsx)(rh.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class aA extends r.Component {
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
                ? (0, rI.pX)(K.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rI.pX)(K.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, r_.openUserSettings)(rv.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eU.default.track(K.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: K.ZSU.BUTTON_CTA },
            });
        let r = l !== K.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rf.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eU.default.track(K.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            ry.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, lR.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, lP.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, r_.openUserSettings)(rv.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(K.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(l2.A, {
            justify: l2.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(l2.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(ag, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(l2.A, {
                    align: l2.A.Align.END,
                    justify: l2.A.Justify.END,
                    className: ah.yu,
                    direction: l2.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(i6()(), "h") }),
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
                (e.isExistingPremiumSubscriptionDisallowed && (0, l9.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, rA.hU)(e) ? ah.UQ : void 0,
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
        return e === K.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: rL.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, lR.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, rA.hU)(e) || (0, lR.bF)(i)
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
                    ? J.intl.format(J.t.l3VxgG, { username: rL.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: rL.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === si.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: rL.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === si.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: rL.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = si.Wx.includes(e.giftStyle),
            i = o()(ah.gB, { [ah.El]: n, [ah.by]: t >= rh.Tm }),
            l = o()({ [ah.gc]: n, [ah.Ei]: n && t >= rh.Tm, [ah.ww]: !n, [ah.wy]: !n && t >= rh.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(rT, { className: ah.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(rE.A, {
                        defaultAnimationState: e.redeemed ? rx.oA.LOOP : rx.oA.IDLE,
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
        let i = null != e.giftStyle && !(0, lR.bF)(n);
        return (0, s.jsx)(am, {
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
        let { giftCode: e, resolved: t, resolveErrorCode: n, width: i, isSelfGift: l } = this.props;
        if (null != e && null != e.promotion)
            return (0, s.jsx)(am, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: K.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(ap, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(rh.Wb, { isHorizontal: i >= rh.Tm });
        return (0, rA.hU)(e)
            ? (0, s.jsx)("div", { className: ah.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let ax = (0, rp.A)((0, rg.A)(aA)),
    af = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([rj.A], () => {
                let e = rj.A.getError(t);
                return { giftCode: rj.A.get(t), resolved: rj.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([U.default], () => (null != i && null != i.userId ? U.default.getUser(i.userId) : null)),
            o = (0, u.bG)([ew.A], () => (null != i ? ew.A.get(i.skuId) : null)),
            d = (0, u.bG)([rN.A], () =>
                null != o && i?.entitlementBranches != null ? rS.YI(i.entitlementBranches, o, rN.A) : null,
            ),
            c = (0, ly.h)(o?.applicationId),
            m = null != o && (0, lR.bF)(o) && i?.redeemed === !0,
            [h] = (0, rC.L)(m ? c?.id : null),
            g = (0, rb.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([P.default], () => (null != i ? P.default.getId() === i.userId : P.default.getId() === n.id));
        return (0, s.jsx)(ax, {
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
var aE = n(376728),
    aC = n(107123),
    aI = n(698441),
    av = n(427080),
    a_ = n(346542),
    aj = n(665066),
    aN = n(95701),
    aT = n(299091),
    ay = n(860689);
let aS = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function ab(e) {
    let { guildId: t, location: n } = e;
    return aS.getCurrentConfig({ guildId: t, location: n });
}
function aL() {
    return (0, s.jsxs)(n_.A, {
        children: [
            (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, s.jsx)(n_.A.Body, { resolving: !0 }),
        ],
    });
}
var aR = n(172799),
    ak = n(718223);
function aM(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: ak.MY,
                        children: [
                            (0, s.jsx)("i", { className: ak.QD }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: ak.U9,
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
                        className: ak.MY,
                        children: [
                            (0, s.jsx)("i", { className: ak.o6 }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: ak.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: ak.rc, children: l })
    );
}
function aP(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, nl.Ay)(t);
    if (null != t && null != n) {
        let e = (0, t4.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(ak.Ix, { [ak.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: ak.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(lQ.A, {
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
              className: o()(ak.Ix, { [ak.v6]: i }),
              children: (0, s.jsx)(lQ.A, {
                  children: (0, s.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aD(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a } = e,
        { approximate_member_count: o, approximate_presence_count: d, target_type: c, target_application: m } = i;
    eC()(c === aR.yV.EMBEDDED_APPLICATION && null != m, "invalid application invite");
    let h = r.useCallback(() => {
            eU.default.track(K.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: m.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, m.id]),
        g = (0, u.bG)([tF.A], () => (null != i.guild ? tF.A.getGuild(i.guild.id) : null), [i]),
        p = (0, ly.A)([m.id])[0],
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
        C = D.A.getChannel(i.channel?.id),
        I = (0, u.bG)([tl.A], () => null != C && tl.A.can(K.xBc.USE_EMBEDDED_ACTIVITIES, C), [C]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.INVITE_EMBED),
        _ = (0, u.yK)(
            [ec.Ay],
            () =>
                null != C
                    ? ec.Ay.getEmbeddedActivitiesForChannel(C.id)
                          .filter((e) => e.applicationId === m.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [C, m.id],
        ),
        j = (0, u.yK)([U.default], () => _.map((e) => U.default.getUser(e)).filter((e) => null != e), [_]),
        N = r.useCallback(() => {
            (0, aE.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nH._U)(i.code, l.id),
                },
                v,
            ),
                aE.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, a]),
        T = i.state === K.elq.ACCEPTING,
        y = null != g;
    if (null == g) {
        if (null == i.guild) return (0, s.jsx)(aL, {});
        g = (0, ay.DY)(i.guild);
    }
    t = y
        ? A
            ? J.intl.string(J.t.DPfdsq)
            : E
              ? J.intl.string(J.t.sqe0hj)
              : J.intl.string(J.t.RscU7I)
        : J.intl.string(J.t["2BP08E"]);
    let S = (y && !I) || (y && A);
    return (I || (n = J.intl.string(J.t.hHGrWz)), null == i.code || "" === i.code || null == p)
        ? null
        : (0, s.jsx)(f.f5, {
              value: v,
              children: (0, s.jsx)(aw, {
                  app: p,
                  activityUsers: j,
                  isMember: y,
                  channel: C,
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
function aw(e) {
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
        C = G.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        I = (0, ee.F)(t),
        v = (0, $.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? X.kY.PLAY : X.kY.JOIN_SERVER,
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
        iconSrc: C,
        ...v,
        onClickBanner: I,
        info: (0, s.jsxs)("div", {
            className: ak.QR,
            children: [
                (0, s.jsx)(aP, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(Z, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(aM, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: I,
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
var aO = n(4274);
function aU(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([P.default], () => P.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        l = (0, aO.g)(n?.code);
    return (0, s.jsxs)(n_.A, {
        children: [
            (0, s.jsx)(n_.A.Header, { text: i }),
            (0, s.jsxs)(n_.A.Body, {
                children: [
                    (0, s.jsx)(n_.A.Icon, { expired: !0 }),
                    (0, s.jsx)(n_.A.Info, {
                        expired: !0,
                        title: l?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var aG = n(308528),
    aV = n(889227);
function aB(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([P.default], () => P.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === K.elq.ACCEPTING,
        { analyticsLocations: d } = (0, f.Ay)(x.A.INVITE_EMBED),
        c = (0, u.bG)([w.A], () => null != t.inviter && w.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), aG.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aE.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, nH._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, aE.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, nH._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aE.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = J.intl.string(J.t.ib7Ng1),
        A = "active";
    c
        ? ((p = J.intl.string(J.t.xhxnPn)), (A = "secondary"))
        : a && ((p = J.intl.string(J.t.ib7Ng1)), (A = "secondary"));
    let E = a ? J.intl.string(J.t.eQyu1F) : J.intl.string(J.t.PYJHW6),
        C = null != t.inviter ? `${t.inviter.username}` : "",
        I = null != t.inviter ? rL.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(n_.A, {
        children: [
            (0, s.jsx)(n_.A.Header, { text: E }),
            (0, s.jsxs)(n_.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nV.iH,
                        children: [
                            (0, s.jsx)(n_.A.Icon, { user: new aV.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(n_.A.Info, { title: C, onClick: c ? g : void 0, children: I }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
function aH(e) {
    let t,
        n,
        { invite: i, message: l, currentUserId: a, onTransitionToInviteChannel: o, onAcceptInstantInvite: d } = e,
        c = a === l.author.id,
        m = i.state === K.elq.ACCEPTING,
        h = (0, u.bG)([D.A], () => (null != i.channel ? D.A.getChannel(i.channel.id) : null), [i]);
    eC()(null == h || h.isPrivate(), "must be a private channel");
    let { analyticsLocations: g } = (0, f.Ay)(x.A.INVITE_EMBED),
        p = null != h,
        A = r.useCallback(() => {
            let e = "noop";
            p ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aE.he)(
                    {
                        invite: i,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: (0, nH._U)(i.code, l.id),
                    },
                    g,
                );
        }, [i, l, g, p, o, d]);
    if (null == h) {
        if (null == i.channel) return (0, s.jsx)(aL, {});
        (h = (0, aN.OY)(i.channel)),
            (n = i.channel?.name),
            (t = null != i.channel && null != i.channel.recipients ? i.channel.recipients : []);
    } else {
        (t = h.recipients.reduce((e, t) => {
            let n = U.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, nl.m1)(h, U.default, w.A));
        let e = U.default.getCurrentUser();
        p && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(rl.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : J.intl.string(J.t.LJpTRF));
    let E = J.intl.string(J.t.XpeFYr),
        C = "active";
    p && ((E = J.intl.string(J.t.cEnaWx)), (C = "secondary"));
    let I = J.intl.string(J.t["3p3/BK"]);
    return (
        c && (I = J.intl.string(J.t.qmtuXE)),
        (0, s.jsxs)(n_.A, {
            children: [
                (0, s.jsx)(n_.A.Header, { text: I }),
                (0, s.jsxs)(n_.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nV.iH,
                            children: [
                                (0, s.jsx)(n_.A.Icon, { channel: h, onClick: p ? A : void 0 }),
                                (0, s.jsx)(n_.A.Info, {
                                    title: n,
                                    onClick: p ? A : void 0,
                                    children: (0, s.jsx)(n_.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(eg.$, { onClick: A, loading: m, disabled: p, variant: C, text: E, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
var aF = n(821418),
    aY = n(340837);
let az = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, aY.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, aF.Q.IS_GUEST_INVITE)
    );
};
var aW = n(517905);
function aK(e) {
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
        { channel: E, approximate_member_count: C, approximate_presence_count: I } = m,
        v = m.state === K.elq.ACCEPTING,
        _ = null != E ? (0, aN.OY)(E) : null,
        j = null != d,
        N = null != _,
        T = null != _ && _.isGuildStageVoice(),
        y = (0, c.Lt)(m.flags ?? 0, aF.Q.IS_GUEST_INVITE),
        S = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(K.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e5.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, nH._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [k, M] = r.useState(!1),
        P = r.useCallback(() => M(!1), []),
        D = r.useRef(null),
        w = (0, u.bG)([ie.Ay], () => az([ie.Ay], m)),
        O = r.useCallback(() => {
            M(!0), (0, aE.Pq)(L, "show profile", R);
        }, [L, R]),
        U = r.useCallback(() => {
            let e = "noop";
            j ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, aE.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, nH._U)(m.code, h.id),
                    },
                    R,
                );
        }, [m, h, R, j, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(aL, {});
        (d = ay.DY(m.guild)).premiumTier = m.guild.premium_tier ?? K.TVA.NONE;
    }
    let G = (function (e) {
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
            className: nV.FA,
            children: [
                (0, s.jsx)(aW.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, s.jsx)(n_.A.GuildName, { guild: d, ref: D }),
                }),
                (0, s.jsx)("span", {
                    className: nV.E3,
                    children: (0, s.jsx)(sJ.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (l = (0, s.jsx)(iR.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, s.jsx)(tQ.m, { size: "md", color: "currentColor", className: nV.G }),
            })),
        S
            ? ((i = (0, s.jsx)(n_.A.Channel, { channel: _ })),
              (t = (0, s.jsxs)("span", {
                  className: nV.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: nV.E3,
                          children: (0, s.jsx)(sJ.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != I && I > 0)
              ? (t = (0, s.jsx)(n_.A.Data, { members: C, membersOnline: I }))
              : N && (t = (0, s.jsx)(n_.A.Channel, { channel: _, guild: d })),
        (0, s.jsxs)(n_.A, {
            children: [
                (0, s.jsx)(n_.A.GuildSplash, { guild: d }),
                (0, s.jsx)(n_.A.Header, { text: G, extra: l }),
                (0, s.jsxs)(n_.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nV.iH,
                            children: [
                                (0, s.jsx)(n_.A.Icon, { guild: d }),
                                (0, s.jsx)(n_.A.Info, { title: i, onClick: O, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: nV.UD,
                            children: (0, s.jsx)(eg.$, {
                                onClick: U,
                                loading: v,
                                variant: "active",
                                fullWidth: S,
                                disabled: !w,
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
                d.features.has(K.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: nV.me }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eI.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("39713"),
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
var aJ = n(890856),
    aq = n(9994),
    aZ = n(461888),
    aX = n(179283),
    aQ = n(123213),
    a$ = n(86376),
    a0 = n(42780),
    a1 = n(897288),
    a2 = n(14712);
function a3(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        [c, m] = r.useState(!0),
        [h, g] = r.useState(!1),
        p = t.state === K.elq.ACCEPTING,
        A = (0, u.bG)([s7.A], () => s7.A.useReducedMotion),
        { analyticsLocations: E } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e5.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, nH._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let C = (0, aq.oO)(t),
        I = r.useCallback(() => {
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
    return null == C
        ? (0, s.jsx)(aL, {})
        : (0, s.jsxs)(aJ.s, {
              className: o()(a2.Gg, { [a2.vk]: h && c }),
              onClick: I,
              style: _,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: [
                  (0, s.jsxs)("div", {
                      className: a2.uY,
                      ref: d,
                      children: [
                          (0, s.jsx)(a0.J$, { profile: C, className: a2.vK }),
                          (0, s.jsx)(a0.CG, { profile: C }),
                          (0, s.jsx)(a$.A, { profile: C }),
                          (0, s.jsx)(aX.P, { profile: C, className: a2.rb }),
                          (0, s.jsx)(a1.A, {
                              guild: null != t.guild ? (0, ay.DY)(t.guild) : null,
                              roles: t.roles,
                              className: a2.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, s.jsx)("div", {
                            className: a2.Se,
                            children: (0, s.jsx)(iA.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: J.intl.string(J.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, s.jsxs)("div", {
                      className: o()(a2.qr, { [a2.iK]: h }),
                      children: [
                          h && c ? (0, s.jsx)("div", { className: a2.D7 }) : null,
                          (0, s.jsx)("div", {
                              className: o()(a2.z8, { [a2.it]: h && c }),
                              children: (0, s.jsx)("div", {
                                  className: a2.UD,
                                  children: (0, s.jsx)(a6, {
                                      invite: t,
                                      profile: C,
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
function a6(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, aZ.Ay)(n, aZ.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aE.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nH._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(aQ.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var a4 = n(414798);
function a5(e) {
    let t,
        n,
        i,
        { author: l, banned: r, channelId: a, onMention: o } = e,
        d = (0, u.bG)([P.default], () => P.default.getId()),
        c = rL.Ay.useName(l),
        m = d === l.id,
        h = (0, u.bG)([D.A, tl.A], () => {
            let e = D.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sp.UJ)(e),
                    n = tl.A.can(K.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return tl.A.can(K.xBc.SEND_MESSAGES, e);
        });
    return (
        m
            ? ((t = J.intl.string(J.t["F/OLvL"])), (i = J.intl.string(J.t.C89OLE)))
            : ((i = J.intl.string(J.t.YVub5y)),
              r
                  ? (t = J.intl.string(J.t["57nBty"]))
                  : null != c && h
                    ? ((t = J.intl.formatToPlainString(J.t["9Akp1s"], { username: c })),
                      (n = (0, s.jsx)(eg.$, {
                          onClick: function () {
                              o?.();
                              let { id: e } = l,
                                  t = `@${rL.Ay.getUserTag(l, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              st._.dispatchToLastSubscribed(K.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != a && a4.A.startTyping(a);
                          },
                          text: J.intl.string(J.t.P8tvKG),
                      })))
                    : (t = J.intl.string(J.t["SMJr+a"]))),
        (0, s.jsxs)(n_.A, {
            children: [
                (0, s.jsx)(n_.A.Header, { text: i }),
                (0, s.jsxs)(n_.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nV.iH,
                            children: [
                                (0, s.jsx)(n_.A.Icon, { expired: !0 }),
                                (0, s.jsx)(n_.A.Info, {
                                    expired: !0,
                                    title: J.intl.string(J.t["Jhx/ud"]),
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
var a7 = n(616356);
function a9(e) {
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
        m = (0, u.bG)([O.A], () => O.A.getGuildId()),
        h = (0, u.bG)(
            [a7.A],
            () => (null != n && null != n.target_user ? a7.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [a7.A],
            () => (null != n && null != n.target_user ? a7.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e5.A)({
        name: e4.ImpressionNames.INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, nH._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aR.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eC()(null != n, "Invite cannot be null");
    let { target_type: C, target_user: I } = n;
    eC()(C === aR.yV.STREAM && null != I, "invalid streaming invite");
    let v = i === I.id,
        _ = n.state === K.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aE.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, nH._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(aL, {});
        l = (0, ay.DY)(n.guild);
    }
    let T = null != n.channel ? (0, aN.OY)(n.channel) : null,
        y = rL.Ay.getName(I),
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
            ? (0, s.jsx)(n_.A.Channel, { channel: T })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(n_.A, {
        children: [
            (0, s.jsx)(n_.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, s.jsxs)(n_.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nV.iH,
                        children: [
                            (0, s.jsx)(n_.A.Icon, { guild: l, onClick: N && E ? j : void 0 }),
                            (0, s.jsx)(n_.A.Info, { title: t, onClick: N && E ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: j, loading: _, disabled: S, variant: L, text: b }),
                ],
            }),
        ],
    });
}
var a8 = n(459192),
    oe = n(364522),
    ot = n(952270),
    on = n(52074),
    oi = n(725613),
    ol = n(693879),
    os = n(145497),
    or = n(481947),
    oa = n(977997),
    oo = n(607567),
    od = n(198183);
function oc(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, nl.Ay)(i),
        o = (0, u.bG)([tF.A], () => tF.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([oa.A], () => oa.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [oo.Ay],
            () => ({ voiceStates: null != i.guild_id ? oo.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([oi.A], () => oi.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || oi.A.hasRequestedStartTimes(i.guild_id) || (0, on.U)(i.guild_id);
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
    let C = r.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", E),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", E);
            },
            [E],
        ),
        { analyticsLocations: I } = (0, f.Ay)(x.A.INVITE_EMBED, x.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        v = (0, nH._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, e5.A)({
        name: e4.ImpressionNames.VOICE_INVITE_EMBED,
        type: e4.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: v,
            has_active_stream: _,
            location_stack: I,
        },
    });
    let j = r.useCallback(() => {
            (0, i0.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            l(),
                (0, aE.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: v,
                        number_of_users_in_channel: c.length,
                    },
                    I,
                );
        }, [t, n, I, v, c.length, l]);
    return (0, s.jsxs)("div", {
        className: od.kL,
        children: [
            (0, s.jsxs)("div", {
                className: od.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: od.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: od.yW,
                                children: [
                                    (0, s.jsx)(r4.H, {
                                        className: od.p,
                                        color:
                                            c.length > 0 ? tD.A.colors.TEXT_FEEDBACK_POSITIVE : tD.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(a8.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(os.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eb.D, {
                                            className: od.HA,
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
                                ? (0, s.jsx)(ol.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: od.Ao,
                              children: [
                                  (0, s.jsx)(oe.Ip, {
                                      ref: C,
                                      className: od.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              or.Ay,
                                              {
                                                  className: od.Eq,
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
                                  (0, s.jsx)("div", { ref: A, className: od.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: od.p$,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: od.TB,
                        children: (0, s.jsx)(eg.$, {
                            onClick: N,
                            icon: r4.H,
                            variant: "active",
                            fullWidth: !0,
                            text: J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: od.qr,
                children: [
                    (0, s.jsx)(ot.G, { size: "custom", color: "currentColor", className: od.Dq }),
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
function ou(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)([D.A, tl.A], () => {
            let e = D.A.getChannel(r);
            return null != e && tl.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, u.bG)([tF.A], () => null != tF.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(a3, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(oc, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var om = n(652896),
    oh = n(834757),
    og = n(427358),
    op = n(370714);
function oA(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, t4.gU)(n, i),
        a = (0, nl.Ay)(n);
    return (0, s.jsxs)(eb.D, {
        onClick: l,
        className: o()(op.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: op.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(lQ.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(t6._, { className: op.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var ox = n(562153),
    of = n(713517),
    oE = n(297413),
    oC = n(155775);
function oI(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(n8.A, {
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
                className: oC.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tE.eu, {
                        src: t.getAvatarURL(n, (0, tC.FT)(tC._3.SIZE_24)),
                        className: oC.my,
                        "aria-label": t.username,
                        size: tC._3.SIZE_24,
                    }),
                    (0, s.jsx)(p.E, {
                        className: oC.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(oE.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var ov = n(581448);
function o_(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(oj, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(lW.Y, { renderPopout: () => o(i), ...a });
}
function oj(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, of.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: ov.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(oe.Ip, {
                className: ov.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        oI,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: ox.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oN = n(531657);
let oT = { mass: 1, tension: 170, friction: 26 };
function oy(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, ik.z)(() => ({ x: 0, y: 0, scale: 1, config: oT }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(ib.animated.div, {
            ref: a,
            className: o()(oN.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, ib.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: oN.my,
                            children: (0, s.jsx)(iR.m, {
                                text: ox.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tE.eu, {
                                    src: (function (e, t, n) {
                                        let i = ie.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, G.xT)(i);
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
                c && (0, s.jsx)(oS, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function oS(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, of.A)(e),
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
    return (0, s.jsx)(o_, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(oN.my, oN.k2),
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
var ob = n(692236);
function oL(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = ay.DY(t.guild));
    let m = null != t.channel ? (0, aN.OY)(t.channel) : null;
    eC()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eC()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, u.bG)([tl.A, D.A], () => {
            let e = D.A.getChannel(m.id);
            return null == e || tl.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, u.bG)([oo.Ay], () => (h ? oo.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
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
        C = (0, u.bG)([tF.A], () => null != tF.A.getGuild(c.id), [c.id]),
        I = (0, u.bG)([ed.A], () => ed.A.getVoiceChannelId() === m.id, [m.id]),
        v = (0, u.bG)([ie.Ay], () => az([ie.Ay], t), [t]),
        _ = t.state === K.elq.ACCEPTING,
        { analyticsLocations: j } = (0, f.Ay)(x.A.INVITE_EMBED),
        N = (0, nH._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)([a7.A, og.A], () => {
                if ((0, a_.G4)(t) && null != t.target_user) {
                    let e = a7.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = a7.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = og.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (og.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = a7.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        y = (0, oh.AO)(T),
        S = null != T,
        b = r.useCallback(() => {
            let e = C ? "transition" : "accept";
            C ? l() : a(),
                (0, aE.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, om._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, C, y, T, g.length, l, a]),
        L = r.useCallback(() => {
            C ? (0, i0.iN)(m.id) : a({ autoJoin: !1 }),
                eU.default.track(K.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: C,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, om._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, c.id, t.code, N, C, y, T, g.length, j, a]);
    (0, e5.A)({
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
    let R = (0, u.bG)([s7.A], () => s7.A.useReducedMotion),
        k = r.useRef(null),
        [M, w] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        O = (0, u.bG)([og.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = og.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (og.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        U = r.useMemo(() => tA().throttle(w, 20), [w]);
    r.useEffect(() => () => U.cancel(), [U]);
    let G = r.useCallback(
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
                U({ percentX: n, percentY: i, proximity: l });
            },
            [R, U],
        ),
        V = r.useCallback(() => {
            U.cancel(), w({ percentX: 0, percentY: 0, proximity: 0 });
        }, [U]);
    return (0, s.jsxs)("div", {
        className: ob.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: k,
                className: ob.hw,
                onMouseMove: G,
                onMouseLeave: V,
                children: [
                    (0, s.jsx)("div", { className: ob.ys }),
                    (0, s.jsx)("div", { className: ob.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: ob.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(ob.Qs, { [ob.tE]: 0 === O.length }),
                                children: [
                                    (0, s.jsx)(oA, { channel: m, guild: c, onClick: L }),
                                    (0, s.jsxs)("div", {
                                        className: ob.WD,
                                        children: [
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(lQ.A, { lineClamp: 3, delay: 150, children: A }),
                                            }),
                                            null != E
                                                ? (0, s.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      className: ob.$B,
                                                      children: (0, s.jsx)(lQ.A, { delay: 150, children: E }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            O.length > 0
                                ? (0, s.jsx)("div", {
                                      className: ob.RE,
                                      children: (0, s.jsx)(oy, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: O,
                                          motion: M,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: ob.xk,
                        children: (0, s.jsx)(eg.$, {
                            onClick: b,
                            loading: _,
                            variant: I ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !v,
                            text: I ? J.intl.string(J.t["3xjX0U"]) : J.intl.string(J.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ob.qr,
                children: [
                    (0, s.jsx)(ot.G, { size: "custom", color: "currentColor", className: ob.Dq }),
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
function oR(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [aT.A],
            () => ({ invite: aT.A.getInvite(t), inviteError: aT.A.getInviteError(t) }),
            [t],
        ),
        o = null == l,
        d = (0, nH._U)(t, n.id);
    r.useEffect(() => {
        o && aE.Ay.resolveInvite(t, void 0, { inviteInstanceId: d });
    }, [t, o, d]);
    let c = l ?? { state: K.elq.RESOLVING, code: "" },
        { analyticsLocations: m } = (0, f.Ay)(),
        h = (0, u.bG)([tF.A], () => (l?.guild != null ? tF.A.getGuild(l.guild.id) : null), [l]),
        g = (0, u.bG)([D.A, tl.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = D.A.getChannel(e);
            return null != t && tl.A.canBasicChannel(K.hVb.VIEW_CHANNEL, t);
        }, [l]),
        p = (0, u.bG)([P.default], () => P.default.getId()),
        A = (0, u.bG)([aI.Ay], () => aI.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]),
        x = () => {
            null != c.channel && aE.Ay.transitionToInviteSync(c);
        },
        E = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == h && l?.guild != null ? ay.DY(l.guild) : h;
            (0, aj.g)({ guild: n, isMember: null != h, analyticsLocations: m }) === aj.W.PROCEED &&
                aE.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        C = (0, s.jsx)(aK, {
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: E,
            currentUserId: p,
            guild: h,
            invite: c,
            message: n,
        });
    switch (c.state) {
        case K.elq.RESOLVING:
            C = (0, s.jsx)(aL, {});
            break;
        case K.elq.EXPIRED:
        case K.elq.BANNED:
            C = (0, s.jsx)(a5, {
                banned: c.state === K.elq.BANNED,
                author: n.author,
                channelId: n.channel_id,
                onMention: () =>
                    (0, aE.he)(
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
        case K.elq.ERROR:
            C = (0, s.jsx)(aU, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, a_.On)(c)) {
                case a_.Xd.GROUP_DM:
                    C = (0, s.jsx)(aH, {
                        onTransitionToInviteChannel: x,
                        onAcceptInstantInvite: E,
                        currentUserId: p,
                        invite: c,
                        message: n,
                    });
                    break;
                case a_.Xd.FRIEND:
                    C = (0, s.jsx)(aB, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, a_.G4)(c)) {
                        if (null != c.channel && (0, aN.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = ab({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (g)
                                if (e.enabled) {
                                    C = (0, s.jsx)(ou, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    C = (0, s.jsx)(oL, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        guild: h,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        C = (0, s.jsx)(a9, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            currentUserId: p,
                            message: n,
                            guild: h,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, a_.ly)(c)) {
                        C = (0, s.jsx)(av.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != h,
                            onAcceptInstantInvite: E,
                            onTransitionToInviteChannel: x,
                        });
                        break;
                    }
                    if ((0, a_.oK)(c)) {
                        C = (0, s.jsx)(aD, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, aN.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = ab({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (g)
                            if (e.enabled) {
                                C = (0, s.jsx)(ou, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                C = (0, s.jsx)(oL, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    guild: h,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, aC.v)(c) &&
                        (C = (0, s.jsx)(a3, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            isMemberOfGuild: null != h,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(rk.A, { section: K.JJy.INVITE_LINK, children: C });
}
var ok = n(266620),
    oM = n(860227),
    oP = n(67416),
    oD = n(666176),
    ow = n(272984);
let oO = (e) => {
    let { channel: t, message: n, hideParty: i } = e,
        { analyticsLocations: l } = (0, f.Ay)(x.A.INVITE_EMBED),
        r =
            null != n.application
                ? nj.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, ow.pH)(n.activity.party_id)
                  ? oD.HT
                  : void 0,
        { data: a } = (0, eX.YY)(n.application?.id),
        o = a ?? r,
        d = (0, u.bG)([U.default], () => U.default.getCurrentUser()?.nsfwAllowed),
        c = e1(n.application?.content_classification, d, t);
    switch (c) {
        case e0.DISPLAY:
            if (null == o) return null;
            return (0, s.jsx)(oP.P0, { app: o, channel: t, message: n, hideParty: i, analyticsLocations: l });
        case e0.BLOCK_UNDERAGE:
        case e0.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e3, { visibility: c, variant: "game_invite" });
        default:
            return null;
    }
};
var oU = n(503002),
    oG = n(123791);
function oV(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, eX.YY)(t);
    return null == i ? null : (0, s.jsx)(oB, { app: i, guildId: n });
}
function oB(e) {
    let { app: t, guildId: i } = e;
    (0, oG.C)(t.id);
    let l = r.useCallback(() => {
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(eg.$, {
        size: "sm",
        onClick: l,
        icon: oU.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var oH = n(394839),
    oF = n(96782),
    oY = n(930390),
    oz = n(861986),
    oW = n(343552),
    oK = n(581619),
    oJ = n(416620);
let oq = [K.Auw.GIFV],
    oZ = 15 * sU.A.Millis.MINUTE,
    oX = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    oQ = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, nq.e5.IS_ANIMATED);
        return null != i && null != l && (nZ.bp.test(n) || (a && (nZ.P8.test(n) || nZ.p4.test(n))))
            ? (0, s.jsx)(ru.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: oJ.jj })
            : null;
    };
class o$ extends r.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, nH._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && oX.has(e));
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
            case sB.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(t3, { messageId: e.id, channelId: t.id });
                break;
            case sB.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(ef, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: oJ.od, children: i });
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
                                    return (0, s.jsx)(nS, { code: a, message: e });
                                case tP.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eh, { application: t, message: e, params: i });
                                case tP.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(eJ, { application: t, message: e });
                                case tP.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(eq, { application: t, message: e, skuId: l });
                                case tP.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(e7, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    l,
                );
            }
            if (i === tP.I.INVITE)
                return this.shouldRenderInvite(l)
                    ? (0, s.jsx)(oR, { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext }, l)
                    : null;
            if (i === tP.I.TEMPLATE) return (0, s.jsx)(nB, { code: l }, l);
            if (i === tP.I.EVENT) return (0, s.jsx)(nP.A, { code: l }, l);
            if (i === tP.I.CHANNEL_LINK) return (0, s.jsx)(sZ, { code: l, message: e }, l);
            else if (i === tP.I.GUILD_PRODUCT) return (0, s.jsx)(nM, { code: l }, l);
            else if (i === tP.I.SERVER_SHOP) return (0, s.jsx)(tJ, { guildId: l }, l);
            else if (i === tP.I.SOCIAL_LAYER_STOREFRONT) {
                let [e, n] = l.split("-");
                return (0, s.jsx)(
                    lH,
                    {
                        guildId: n,
                        skuId: e,
                        channel: t,
                        customNavigateToSocialLayerStorefront: () => {
                            (0, lv.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                        },
                    },
                    l,
                );
            } else if (i === tP.I.SOCIAL_LAYER_STOREFRONT_APP) {
                let [e, n] = l.split("-");
                return (0, s.jsx)(lB, { applicationId: n, skuId: e, channel: t }, l);
            } else if (i === tP.I.QUESTS_EMBED) return (0, s.jsx)(iJ.A, { questId: l }, l);
            else if (i === tP.I.COLLECTIBLES_SHOP) return null;
            else if (i === tP.I.EXPERIMENT) return null;
            else throw Error(`Unknown coded link type: ${i}`);
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = U.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: oJ.zv,
                          children: (0, s.jsx)(af, {
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
            : (0, s.jsx)(oY.A, {
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
        if (0 === d.length || e.isPoll() || (0, sD._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, K.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, nq.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, K.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, im.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, K.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sH.iW)(e.originalItem, t);
        }
        let E = m.map((s) => {
            let a = (0, nq.aG)(s),
                o = {
                    message: e,
                    item: (0, oF.rC)(s, l),
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
                    renderAudioComponent: x ? ok.SX : ok.Nj,
                    renderImageComponent: ok.Cr,
                    renderVideoComponent: ok.I1,
                    renderPlaintextFilePreview: ok.R6,
                    renderGenericFileComponent: ok.UB,
                    onPlay: (e, n, i) => {
                        eU.default.track(K.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: s.content_type,
                            flags: s.flags,
                            size: s.size,
                            duration: i,
                        });
                    },
                    gifFavoriteButton: oQ(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sO.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, s.jsx)(oH.A, { items: E });
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
            u = (0, sH.sC)(e, i, o, d);
        if (e.type === K.Auw.GIFT) return null;
        let m = oq.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            nE.G.Provider,
            {
                value: (0, oW.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
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
        e.type !== K.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? nJ.A.parseEmbedTitleWithoutLinks : nJ.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === K.Auw.RICH
            ? nJ.A.parse(t, !0, {
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
                      oK.z.has(t.type) ||
                      (0, sG.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, K.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === nY.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !nz.has(t.content_type);
                              })
                          )) ||
                      (0, sG.V)(t) ||
                      (0, sG.G8)(t)
                  )
                      return null;
                  if (t.type === K.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, sH.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  s3,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: oQ,
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
                                lo.Ay,
                                {
                                    type: lo.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: lK.LL, renderVideoComponent: lK.$o, renderLinkComponent: lK.bU };
                  if (
                      t.type === K.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sV.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  au,
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
        return (0, s.jsx)(s0.N, {
            gifAutoPlay: t,
            getGifFavButton: oQ,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(nW.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, s.jsx)(oO, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== K.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(th, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, sF.ec)(e)
            ? (0, s.jsx)(rc.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lF.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(sg, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(K.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(sM, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(K.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sC.default.extractTimestamp(e.id) >= oZ)
        )
            return (0, s.jsx)("div", { className: oJ.xM, children: J.intl.string(J.t.ma8Rs0) });
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
                    className: oJ.IX,
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
                      className: oJ.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(oV, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(rd, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== K.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(iu, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(lm, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(lI, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, tZ.KM)(e)
            ? (0, s.jsx)(t0, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(iK, { message: e, poll: t, className: oJ.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tR, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, iq.Mn)(e, this.props.channel)) return (0, s.jsx)(la, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, iq.Mn)(e, this.props.channel)) return (0, s.jsx)(nf, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(oz.A, { message: e, compact: t, location: oz.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state,
            a = this.renderEditedTag(t, i),
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
            C = this.renderComponentAccessories(t),
            I = this.renderThreadRoleMentionWarning(t),
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
            null == C &&
            null == v &&
            null == I &&
            null == j &&
            null == N &&
            null != _ &&
            null == S &&
            null == b &&
            null == L &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, oM.XL)(t),
                  className: o()(e, oJ.kL),
                  children: [
                      L,
                      b,
                      I,
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
                      C,
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
function o0(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r } = e,
        a = (0, u.bG)([P.default], () => P.default.getId()),
        o = nn.X6.useSetting(),
        d = nn.hD.useSetting(),
        m = nn.rs.useSetting() && !(0, sE.A)(e.message),
        h = nn.jW.useSetting() && !1 !== e.renderReactions,
        g = nn.kt.useSetting(),
        p = (0, u.bG)([sw.A], () => null == n.guild_id || sw.A.canChatInGuild(n.guild_id), [n]),
        A = (0, u.bG)([nK.A], () => null != n.guild_id && nK.A.isLurking(n.guild_id), [n]),
        x = (0, u.bG)([ie.Ay, U.default], () => {
            let e = U.default.getCurrentUser();
            return (null != n.guild_id && null != e ? ie.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: f, canManageMessages: E } = (0, u.cf)(
            [tl.A],
            () => ({
                canAddNewReactions: p && tl.A.can(K.xBc.ADD_REACTIONS, n),
                canManageMessages: tl.A.can(K.xBc.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        C = (0, nb.ix)(n.guild_id),
        [, I] = (0, nL.c)(n.guild_id),
        v = (0, sp.Id)(n),
        _ =
            (a === i.author.id || E) &&
            i.author.id !== K.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, K.pr7.EPHEMERAL) &&
            v &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        j = a === i.author.id && v && !r,
        N = i.author.id === a,
        T = i.isFirstMessageInForumPost(n),
        y = (0, sz.A)({
            channel: n,
            canChat: p,
            renderReactions: h,
            canAddNewReactions: f,
            isLurking: A,
            communicationDisabled: I,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: C,
        }),
        S = (0, t7.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        b = (0, nX.A)(n?.id),
        L = (0, ih.A)(i),
        R = (0, tX.P)(i),
        k = (0, sY.z)(n),
        M = (0, sB._f)(i.id, i.channel_id),
        D = (0, tq._R)();
    return (0, s.jsx)(o$, {
        canSuppressEmbeds: _,
        canDeleteAttachments: j,
        ...y,
        disableReactionReads: !!T || y.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && k,
        hasBailedAst: e.hasBailedAst,
        isLurking: A && p,
        isPendingMember: x && p,
        isCurrentUser: N,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: d,
        renderEmbeds: m,
        gifAutoPlay: g,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: S,
        showMaskedLinks: S,
        shouldHideMediaOptions: b,
        enabledContentHarmTypeFlags: R,
        ctaButtonType: M,
        shouldAgeVerify: D,
    });
}
let o1 = (e) => {
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
        c = nn.X6.useSetting(),
        u = nn.hD.useSetting(),
        m = nn.rs.useSetting(),
        h = nn.kt.useSetting(),
        g = (0, t7.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, nX.A)(n?.id),
        A = (0, tX.P)(t),
        x = (0, sB._f)(t.id, t.channel_id),
        f = (0, ih.A)(t);
    return (0, s.jsx)(o$, {
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
        poll: f,
        showListsAndHeaders: g,
        showMaskedLinks: g,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: A,
        ctaButtonType: x,
    });
};
