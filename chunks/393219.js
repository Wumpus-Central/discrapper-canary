n.d(t, { iV: () => oQ, OC: () => o0, Ay: () => o$ }), n(938796);
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
    S = n(522305),
    y = n(361926),
    b = n(832384),
    L = n(113854),
    R = n(207371),
    M = n(205184),
    P = n(773669),
    k = n(495544),
    w = n(734057),
    D = n(994500),
    O = n(967198),
    U = n(287809),
    G = n(486020),
    V = n(204776),
    B = n(725606),
    H = n(572211),
    F = n(500060),
    z = n(432017),
    Y = n(687966),
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
        I = (0, u.bG)([k.default], () => l ?? k.default.getId(), [l]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: b, canLaunchInChannel: M } = (0, B.w)(t.id),
        P = (0, T.A)(),
        D = (0, y.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        O = null != m && h && D,
        U = M && h,
        V = (0, R.x)(t),
        F = (0, ee.F)(t),
        z = (0, ee.t)(t),
        Y = r.useMemo(() => {
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
                                          embeddedActivitiesManager: P,
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
                                      (0, S.Q)({
                                          appId: t.id,
                                          botId: m,
                                          analyticsLocations: v,
                                          customId: i,
                                          referrerId: I,
                                      });
                                  },
                              }))
                    : null != z && e.push(z),
                e
            );
        }, [h, z, V, t.id, U, O, j, b, _, P, i, I, v, m]),
        W = h ? (0, s.jsx)(es, { app: t }) : (0, s.jsx)(el, { app: t });
    return (0, s.jsx)(H.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: F,
        bannerAspectRatio: C,
        iconSrc: g,
        info: W,
        actions: Y,
        onClickContent: F,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: I,
            activityCustomId: i,
            onView: o,
            guildId: w.A.getChannel(a.channel_id)?.guild_id,
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
        a = (0, M.s)(t.id),
        o = (0, u.yK)([U.default, D.A], () => {
            let e = [];
            for (let [t, n] of a.entries()) {
                if (t >= 5) break;
                let i = U.default.getUser(n.author_id),
                    l = D.A.isFriend(n.author_id);
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
var er = n(429913),
    ea = n(582388),
    eo = n(257269);
let ed = (0, u.UT)(ea.A, {
    getQueryId: K.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : ea.A.getOne(e, t)),
    load: (e, t) => (0, eo.Py)(e, t),
});
var ec = n(309010),
    eu = n(933958),
    em = n(782091);
function eh(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, y.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, E.Ag)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, f.Ay)(x.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ec.A], () => ec.A.getChannelId()),
        g = (0, em.et)(h),
        p = (0, u.bG)([eu.Ay], () => {
            if (null == h) return;
            let e = eu.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([eu.Ay], () => eu.Ay.getCurrentEmbeddedActivity()),
        C = (0, T.A)(),
        I = g === em.xy.CAN_LAUNCH,
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
                      (0, S.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: _, referrerId: l });
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
            guildId: w.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eg(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: l, message: r } = e,
        { analyticsLocations: a } = (0, f.Ay)(x.A.ACTIVITY_BOOKMARK),
        [o] = (0, er.A)([t]),
        d = null != o && (0, E.Ag)(o),
        { data: c, error: u } = ed(o?.id, l);
    return null == o || !1 === d
        ? null
        : null != l && null == u && null != c
          ? (0, s.jsx)(f.f5, {
                value: a,
                children: (0, s.jsx)(eh, { application: o, customId: n, customLink: c, referrerId: i, message: r }),
            })
          : (0, s.jsx)(f.f5, {
                value: a,
                children: (0, s.jsx)(ei, {
                    app: o,
                    linkType: et.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: i,
                    message: r,
                }),
            });
}
var ep = n(821609),
    eA = n(139716),
    ex = n(847599),
    ef = n(36149);
function eE(e) {
    let { channelId: t } = e,
        n = (0, ef.b8)(),
        i = (0, ef.i2)(),
        l = J.intl.string(J.t["9KiIz6"]),
        a = J.intl.string(J.t["/nicWo"]),
        o = r.useCallback(() => {
            eA.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ex.UT)(ex.Im.RETRY, t);
        }, [t]);
    return (0, s.jsx)(ep.$, { variant: "primary", text: n ? l : a, onClick: o, disabled: !i });
}
var eC = n(121401),
    eI = n(284009),
    ev = n.n(eI),
    e_ = n(192308),
    ej = n(664121),
    eN = n(34188),
    eT = n(408278),
    eS = n(173936),
    ey = n(691540),
    eb = n(857250),
    eL = n(97483),
    eR = n(939249),
    eM = n(996759),
    eP = n(800342),
    ek = n(627363),
    ew = n(587895),
    eD = n(163437),
    eO = n(185438),
    eU = n(97352),
    eG = n(652676),
    eV = n(67480),
    eB = n(328968),
    eH = n(174459),
    eF = n(957565),
    ez = n(943775),
    eY = n(997997),
    eW = n(658575),
    eK = n(376374),
    eJ = n(435220),
    eq = n(352883);
let eZ = (0, u.UT)([eV.A, eB.A, eU.A], {
        getQueryId: K.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eV.A.get(e),
                n = eB.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eU.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            ev()(null != e, "skuId is null"), await (0, eP.QB)(e);
        },
    }),
    eX = (0, u.UT)([eV.A], {
        getQueryId: K.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eV.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            ev()(null != e && null != t, "appId is null"), await (0, eP.JI)(t);
        },
    });
function eQ(e) {
    let { appId: t, message: i } = e,
        l = (0, eW.G)(t),
        { data: a } = (0, ek.YY)(t),
        [o, d, c, m] = (0, u.yK)([ew.A, eG.A, w.A], () => {
            let e = ew.A.getApplication(t),
                n = null != e ? (0, ez.A)(e, 45) : void 0,
                l = w.A.getBasicChannel(i.channel_id)?.guild_id;
            return [eG.A.getStoreLayout(t), eG.A.getFetchStatus(t), l, n];
        }, [t, i.channel_id]);
    r.useEffect(() => {
        d === eG.N.NONE && (0, eM.V)(t);
    }, [t, d]);
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
    if (!l || null == a) return null;
    let A = () => {
        (0, e_.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("22946"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: c });
        });
    };
    return (0, s.jsx)(e0, {
        appName: a.name,
        title: J.intl.formatToPlainString(J.t.XDRjs5, { appName: a.name }),
        description: p,
        link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(a.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, eY.K)(t, eY.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: () => {
            A(),
                eH.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, s.jsx)("div", {
            className: eq.mZ,
            children: (0, s.jsx)(ep.$, {
                onClick: () => {
                    A(),
                        eH.default.track(K.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: J.intl.string(J.t.kRvlKJ),
            }),
        }),
    });
}
function e$(e) {
    let { appId: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eZ(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eX(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t),
        { data: m } = (0, ek.YY)(o?.applicationId),
        h = (0, u.bG)([w.A], () => w.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        g = r.useMemo(() => (null != m ? (0, ez.A)(m, 45) : void 0), [m]),
        p = (0, eW.G)(m?.id ?? ""),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eO.A)({ skuId: i, initialSubscribeForGuild: h });
    if (!p || null == m || null == o) return null;
    let f = o.type === K.Puh.SUBSCRIPTION,
        E = !!f && (0, eD.bg)(o.flags),
        C = () => {
            (0, e_.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("22946"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                    n.bind(n, 719847),
                );
                return (t) =>
                    (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: m.id, guildId: h });
            });
        },
        I = () => {
            (0, e_.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), C();
                    };
                    return null != e && null != a
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: m.id,
                              skuId: o.id,
                              guildId: h,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, s.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: m.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: l,
                            })
                          : null;
                };
            });
        },
        v = f
            ? E
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(ej.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          J.intl.string(J.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === v && (v = void 0);
    let _ = () => {
        eH.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: m.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, s.jsx)(e0, {
        appName: m.name,
        title: o.name,
        description: v,
        link: `${location.protocol}//${location.host}${K.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, eY.K)(m.id, eY.C.SKU_EMBED, i);
        },
        iconSrc: g,
        onIconClick: () => {
            C(),
                eH.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: m.id,
                    sku_id: o.id,
                    area: "app_icon",
                });
        },
        children: (0, s.jsxs)("div", {
            className: eq.w,
            children: [
                (0, s.jsx)(ep.$, {
                    variant: "secondary",
                    onClick: () => {
                        I(),
                            eH.default.track(K.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: m.id,
                                sku_id: o.id,
                                area: "view_details",
                            });
                    },
                    text: J.intl.string(J.t.DXYfjO),
                }),
                f
                    ? null != d
                        ? (0, s.jsx)(eK.rc, {
                              onClick: A,
                              appId: m.id,
                              subscriptionType: E ? "user" : "guild",
                              skuId: o.id,
                              icon: eN.U,
                              onHasClicked: _,
                              subscriptionPlan: d,
                              state: x,
                          })
                        : (0, s.jsx)(ep.$, { variant: "primary", text: J.intl.string(J.t.uuzaAK), onClick: I })
                    : (0, s.jsx)(eK.$P, { appId: m.id, sku: o, icon: eN.U, onHasClicked: _ }),
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
                            (0, s.jsx)(eN.U, { size: "xxs" }),
                            (0, s.jsx)(p.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eF.p5 &&
                        (0, s.jsx)(eT.K, {
                            "aria-label": J.intl.string(J.t.WqhZss),
                            icon: () => (0, s.jsx)(eS.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eF.C)(l, () => {
                                    (0, ey.P0)((0, eb.o)(J.intl.string(J.t["L/PwZf"]), eL.Ck.SUCCESS)), o();
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
                                (0, s.jsx)(eR.D, {
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
var e1 = n(909338),
    e2 = n(562708),
    e3 = n(702841),
    e4 = n(139286);
function e6(e) {
    let { applicationId: t, message: n } = e,
        [i, l, a] = (0, e3.yK)(
            [ew.A],
            () => [ew.A.getApplication(t), ew.A.isFetchingApplication(t), ew.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (r.useEffect(() => {
        null != i || l || a || ek.Ay.fetchApplication(t);
    }, [i, l, a, t]),
    null != i &&
        (0, V.Ie)({
            customInstallUrl: i.customInstallUrl,
            installParams: i.installParams,
            integrationTypesConfig: i.integrationTypesConfig,
        }))
        ? (0, s.jsx)(e5, { application: i, message: n })
        : null;
}
function e5(e) {
    let { application: t, message: n } = e,
        i = r.useCallback(() => {
            (0, e4.x)({
                type: e2.ImpressionTypes.VIEW,
                name: e2.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: l } = (0, f.Ay)(x.A.APP_OAUTH2_LINK_EMBED);
    return (0, s.jsx)(f.f5, {
        value: l,
        children: (0, s.jsx)(ei, { app: t, linkType: et.J.OAUTH, onView: i, message: n }),
    });
}
var e7 = n(778492),
    e9 = n(534514),
    e8 = n(285796),
    te = n(857182),
    tt = n(506774),
    tn = n(228366),
    ti = n(576705),
    tl = n(812930);
let ts = "ChannelFollowingBumpChannels",
    tr = new Set(),
    ta = new Set();
class to extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(k.default, w.A, ti.A, U.default), (tr = new Set(tt.w.get(ts)));
    }
    shouldShowBump(e) {
        return ta.has(e);
    }
}
let td = new to(tn.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tr.has(t)) return !1;
        let l = w.A.getChannel(t),
            s = U.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === K.rbe.GUILD_ANNOUNCEMENT &&
                (0, tl.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? ti.A.can(K.xBc.SEND_MESSAGES, l)
                    : ti.A.can(K.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), K.pr7.CROSSPOSTED)
            )
        )
            return !1;
        ta.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        ta.has(t.id) && c.Lt(Number(t.flags), K.pr7.CROSSPOSTED) && ta.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        ta.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        ta.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        tr.add(t), tt.w.set(ts, tr), ta.clear();
    },
});
var tc = n(419056),
    tu = n(676544);
let tm = (e) => {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([td], () => td.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            te.A.dismissPublishBump(n), (0, tc.A)(t, n);
        }, [t, n]),
        a = r.useCallback(() => {
            te.A.dismissPublishBump(n);
        }, [n]),
        o = r.useCallback(() => {
            te.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: tu.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: tu.mp,
                      children: [
                          (0, s.jsx)(e7.k, { size: "xs", color: "currentColor", className: tu.Kk }),
                          (0, s.jsx)(e9.D, {
                              variant: "heading-sm/normal",
                              className: tu.dS,
                              children: J.intl.string(J.t.hasZoU),
                          }),
                          (0, s.jsx)(p.E, {
                              color: "text-brand",
                              className: tu.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eR.D, { onClick: l, children: J.intl.string(J.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eR.D, {
                              onClick: a,
                              children: (0, s.jsx)(e8.a, { size: "xs", color: "currentColor", className: tu.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(p.E, {
                      color: "text-muted",
                      className: tu.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eR.D, { onClick: o, children: J.intl.string(J.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var th = n(175671),
    tg = n(735438),
    tp = n.n(tg),
    tA = n(239947),
    tx = n(403581),
    tf = n(97808),
    tE = n(778712),
    tC = n(520117),
    tI = n(793943),
    tv = n(763754),
    t_ = n(973654),
    tj = n(467135),
    tN = n(644235),
    tT = n(153469),
    tS = n(693227),
    ty = n(312633);
let tb = (e) => e.map((e) => `#${e}`),
    tL = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, tj.ko)();
        return void 0 === n
            ? null
            : (0, s.jsxs)("div", {
                  className: ty.kL,
                  children: [
                      (0, s.jsx)(tR, { message: t }),
                      (0, s.jsx)(ep.$, {
                          text: J.intl.string(J.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              eH.default.track(K.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, tI.nf)(tI.HP.CUSTOM_THEME, { from: tI.xv.SHARE_MESSAGE }),
                                  i({
                                      colors: tb(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, t_.GQ)((0, tN.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    tR = (e) => {
        let t,
            n,
            i,
            { message: l } = e,
            { sharedClientTheme: a } = l,
            o = (0, tv.Ay)(l),
            d = r.useMemo(
                () =>
                    (0, tg.once)(() => {
                        (0, e4.x)({ type: e2.ImpressionTypes.VIEW, name: tA.I.CUSTOM_THEME_SHARE, properties: {} });
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
            u = r.useMemo(() => (void 0 === a ? "" : (0, tT.V9)(tb(a.colors), a.gradient_angle ?? 0)), [a]);
        return void 0 === a
            ? null
            : (0, s.jsxs)("div", {
                  className: ty.pS,
                  ref: c,
                  children: [
                      (0, s.jsx)("div", { className: ty.sl, style: { background: `${u}` } }),
                      (0, s.jsxs)("div", {
                          className: ty.Ix,
                          children: [
                              (0, s.jsxs)(e9.D, {
                                  variant: "heading-md/semibold",
                                  className: ty.qP,
                                  children: [J.intl.string(tS.default.KSBBpC), " ", (0, s.jsx)(tx.t, {})],
                              }),
                              (0, s.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: ty.Tb,
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
                                                            className: ty.H,
                                                            children: [
                                                                (0, s.jsx)(tf.eu, {
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
    };
var tM = n(167189),
    tP = n(661531),
    tk = n(289873),
    tw = n(696986),
    tD = n(95561),
    tO = n(548118),
    tU = n(250627),
    tG = n(741231),
    tV = n(749314),
    tB = n(71393),
    tH = n(722888),
    tF = n(43136),
    tz = n(575926),
    tY = n(736132);
function tW(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([tB.A], () => tB.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, tH.G)(t),
        { listingsLoaded: a } = (0, tU.bb)(t),
        d = (0, tU.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            eH.default.track(K.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, tD.H$)(t) }),
                await (0, tG.A)(K.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, e4.A)(
        { type: e2.ImpressionTypes.VIEW, name: e2.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(tY.lm, tY.dc), children: (0, s.jsx)(tk.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: tY.lm,
                children: [
                    (0, s.jsx)(tF.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(tw.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tY.qs,
                        children: [
                            (0, s.jsx)(tz.h, {
                                height: "16px",
                                width: "16px",
                                color: tP.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e9.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: tY.Nl,
                                children: J.intl.string(J.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(tw.h, { size: 16 }),
                    (0, s.jsx)(e9.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: J.intl.format(J.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(tw.h, { size: 4 }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(tw.h, { size: 16 }),
                    (0, s.jsx)(tV.A, {}),
                    (0, s.jsx)(tw.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: tY.kS,
                        children: [
                            (0, s.jsx)(tO.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: tY.q6,
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
                                className: tY.$h,
                                children: (0, s.jsx)(ep.$, { onClick: c, icon: tz.A, text: J.intl.string(J.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var tK = n(390248),
    tJ = n(282108),
    tq = n(33358),
    tZ = n(885574),
    tX = n(987773);
function tQ(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eR.D, {
        onClick: () => {
            (0, e_.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: tX.L,
        children: [
            (0, s.jsx)(tZ.m, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(p.E, { variant: "text-xs/normal", className: tX.m, children: J.intl.string(J.t["2aXnfa"]) }),
        ],
    });
}
var t$ = n(974875),
    t0 = n(900019);
function t1(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([t0.A], () => t0.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, t$.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(ep.$, { variant: "secondary", text: J.intl.string(J.t["4q1Elf"]), onClick: l, disabled: !i });
}
var t2 = n(320448),
    t3 = n(713654),
    t4 = n(958340),
    t6 = n(384231),
    t5 = n(291812),
    t7 = n(375199),
    t9 = n(699352),
    t8 = n(8455),
    ne = n(885386),
    nt = n(540999),
    nn = n(47167),
    ni = n(58703);
function nl(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: G.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
n(427930);
class ns {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ti.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tB.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t4.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, ni.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nl(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, nn.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: J.intl.formatToPlainString(J.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nl(h, d) };
    }
}
var nr = n(66834),
    na = n(449054);
async function no(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = w.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == tB.A.getGuild(t))
        try {
            await (0, na.Z2)(t, { object: K.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, nr.k)(t),
                (l = w.A.getChannel(n));
        } catch {}
    eH.default.track(K.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: w.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, tG.A)(K.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var nd = n(387408),
    nc = n(427209),
    nu = n(249847);
function nm() {
    return (0, s.jsxs)("div", {
        className: nu.N1,
        children: [
            (0, s.jsx)(nc.A, { size: "xs", className: nu.nr, color: tP.A.colors.TEXT_MUTED }),
            (0, s.jsx)(p.E, {
                className: nu.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J.intl.string(J.t.ToyvLk),
            }),
        ],
    });
}
function nh(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ns(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [w.A, U.default, D.A, ti.A, tB.A, t4.A],
            () => l.getForwardInfo(w.A, U.default, D.A, ti.A, tB.A, t4.A).footerInfo,
            [l],
            h.A,
        ),
        o = (0, u.bG)([w.A], () => w.A.getChannel(t.messageReference?.channel_id)),
        d = r.useCallback(() => {
            no(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eR.D, {
              className: nu.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: nu.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, s.jsx)(ng, { channel: o }) : null,
                  (0, s.jsx)(p.E, {
                      className: nu.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t2._, { size: "xxs", color: tP.A.colors.TEXT_MUTED }),
              ],
          });
}
function ng(e) {
    let { channel: t } = e,
        n = (0, t8.Vp)({ location: "ForwardFooter" }),
        i = r.useMemo(() => (0, t3.gU)(t), [t]);
    return n.enabled && null != i ? (0, s.jsx)(i, { className: nu.yl, size: "xs", color: "currentColor" }) : null;
}
function np(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => (0, nd.A)(t, n), [t, n]),
        a = ne.hD.useSetting(),
        o = ne.rs.useSetting(),
        d = (0, u.bG)([nt.A], () => nt.A.isDeveloper),
        c = (0, t6.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        {
            content: m,
            hasSpoilerEmbeds: h,
            hasBailedAst: g,
        } = (0, t7.A)(l, {
            hideSimpleEmbedContent: a && o,
            formatInline: !1,
            allowList: c,
            allowHeading: c,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        p = (0, u.bG)([w.A], () => w.A.getChannel(t.channel_id)),
        A = ne.hH.useSetting();
    return null == p
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: nu.kL,
                  children: [
                      (0, s.jsx)("div", { className: nu.hD }),
                      (0, s.jsxs)("div", {
                          className: nu.Qs,
                          children: [
                              (0, s.jsx)(nm, {}),
                              (0, s.jsx)(t5.Ay, { message: l, content: m, compact: A }),
                              (0, t9.A)({
                                  channelMessageProps: { message: l, channel: p, compact: A },
                                  hasSpoilerEmbeds: h,
                                  hasBailedAst: g,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, s.jsx)(nh, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function nA(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(np, { message: t, snapshot: e, index: n }, n)),
    });
}
var nx = n(643612),
    nf = n(172218),
    nE = n(607399),
    nC = n(529200),
    nI = n(395671),
    nv = n(993748),
    n_ = n(212534),
    nj = n(64493);
function nN(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, e3.yK)(
            [n_.A],
            () => [n_.A.getApplication(t), n_.A.isInvalidApplication(t), n_.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, e3.bG)([O.A], () => O.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, nf.K)(u),
        h = r.useCallback(() => {
            eH.default.track(K.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: nE.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, nv.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === n_.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eH.default.track(K.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: nE.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(nC.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t.j4KtLa) }),
                  (0, s.jsx)(nC.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: nj.k,
                          children: [
                              (0, s.jsx)(nC.A.Icon, { expired: !0 }),
                              (0, s.jsx)(nC.A.Info, {
                                  expired: !0,
                                  title: J.intl.string(J.t.NaQLEx),
                                  children: J.intl.string(J.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === n_.e.FETCHING
          ? (0, s.jsxs)(nC.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t.m9hXGR) }),
                    (0, s.jsx)(nC.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(ei, { app: nI.Ay.createFromServer(i), linkType: et.J.APP_DISCOVERY, onView: h, message: n });
}
var nT = n(229527),
    nS = n(870136),
    ny = n(330075),
    nb = n(412728);
function nL(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, tU.Qi)(n, i),
        r = (0, e3.bG)([O.A], () => O.A.getGuildId());
    return ((0, e4.A)(
        {
            type: nb.z.VIEW,
            name: e2.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(ny.i, {
              guildProductListing: l,
              guildId: n,
              location: x.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var nR = n(484724),
    nM = n(953727);
function nP(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, nM.A)(l),
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
var nk = n(122906),
    nw = n(401755),
    nD = n(195580),
    nO = n(344900);
function nU(e) {
    let { code: t } = e,
        i = (0, u.bG)([nk.A], () => nk.A.getGuildTemplate(t));
    if (null == i || i.state === nw.QB.RESOLVING)
        return (0, s.jsxs)(nC.A, {
            children: [
                (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t.Xj87Yf) }),
                (0, s.jsx)(nC.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === nw.QB.EXPIRED)
        return (0, s.jsxs)(nC.A, {
            children: [
                (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t.C7ZRNw) }),
                (0, s.jsxs)(nC.A.Body, {
                    children: [
                        (0, s.jsx)(nC.A.Icon, { expired: !0 }),
                        (0, s.jsx)(nC.A.Info, { expired: !0, title: J.intl.string(J.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(ep.$, { disabled: !0, variant: "secondary", text: J.intl.string(J.t.W7NTWm) })
        : (0, s.jsx)(ep.$, {
              onClick: () => {
                  (0, e_.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("4042"),
                          n.e("90665"),
                          n.e("47412"),
                          n.e("99430"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("19580"),
                          n.e("16198"),
                          n.e("92152"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === nw.QB.ACCEPTING,
              variant: "active",
              text: J.intl.string(J.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(nC.A, {
        children: [
            (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t.kAvFkO) }),
            (0, s.jsxs)(nC.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nO.iH,
                        children: [
                            (0, s.jsx)(nP, { className: nD.K }),
                            (0, s.jsx)(nC.A.Info, {
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
var nG = n(842241),
    nV = n(681154),
    nB = n(155718);
let nH = new Set([
    nV.ContentInventoryEntryType.TOP_ARTIST,
    nV.ContentInventoryEntryType.TOP_GAME,
    nV.ContentInventoryEntryType.PLAYED_GAME,
    nV.ContentInventoryEntryType.WATCHED_MEDIA,
    nV.ContentInventoryEntryType.LISTENED_SESSION,
    nV.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var nF = n(398817),
    nz = n(857071),
    nY = n(46054),
    nW = n(731068),
    nK = n(619517),
    nJ = n(207133),
    nq = n(835245),
    nZ = n(844222),
    nX = n(463930),
    nQ = n(251391),
    n$ = n(601255),
    n0 = n(562819),
    n1 = n(234914),
    n2 = n(59318),
    n3 = n(112758),
    n4 = n(754459),
    n6 = n(967144),
    n5 = n(342296),
    n7 = n(696451),
    n9 = n(218394);
function n8(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, nM.A)(l),
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
var ie = n(717125),
    it = n(376943),
    ii = n(36491),
    il = n(752755),
    is = n(461715),
    ir = n(381941),
    ia = n(38208);
function io(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, is.CI)(e),
                i = (0, e3.bG)([n7.Ay, k.default], () => {
                    let e = k.default.getId();
                    return n7.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, e3.bG)(
                    [ie.A],
                    () => null != n && n?.channelId != null && ie.A.isChannelGated(n.guildId, n.channelId),
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
                } = (0, e3.cf)([il.A, tB.A, w.A, U.default, O.A], () => {
                    let e = il.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = tB.A.getGuild(n?.guildId),
                        i = w.A.getChannel(n?.channelId),
                        l = U.default.getUser(e?.author_id),
                        s = O.A.getGuildId(),
                        r = null != i && (0, it.nc)(i);
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
                    let e = (0, is.tU)({
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
                        (il.A.getEmbedFetchState(n.threadId) !== il.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, ii.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, n4.A)(n.id, ir.Fd),
        u = (0, n3.VL)(n, i, c, !0),
        m = ne.kt.useSetting(),
        h = (0, n9.j)(),
        [g, A] = r.useState(!1),
        [f, E] = r.useState(d?.coverImage == null),
        C = (0, e3.bG)([n7.Ay, U.default], () => n7.Ay.isMember(d?.guildId, U.default.getCurrentUser()?.id), [d]),
        I = (0, e3.bG)([n7.Ay], () => (d?.authorId != null ? n7.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, n$.A)(I?.avatarDecoration != null ? I?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [I?.colorString ?? "inherit", I?.colorStrings ?? null, I?.colorRoleId], [I]),
        T = (0, n6.gn)(I?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: S } = r.useContext(nZ.C),
        [y, b] = r.useState(!1),
        L = r.useCallback(() => {
            A(!0);
        }, [A]),
        R = r.useCallback(() => {
            A(!1);
        }, [A]),
        M = r.useCallback(async () => {
            null != d &&
                ((0, tD.zV)(K.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: C,
                }),
                d.canAccess
                    ? (0, tG.A)(K.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : C
                      ? (0, tG.A)(K.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await na.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, C]);
    if (null == d) return null;
    let P = (0, G.F_)({ avatarDecoration: v, size: (0, n0.Te)(tE._3.SIZE_40), canAnimate: y }),
        D = d.user?.getAvatarURL(d.guildId, 40, y),
        V = () => {
            S.enabled || b((e) => !e);
        },
        B = d.coverImage,
        H = null != B && (0, n2.ge)(B);
    return (0, s.jsxs)("div", {
        className: ia.wb,
        children: [
            (0, s.jsxs)("div", {
                className: ia.iT,
                onMouseEnter: L,
                onMouseLeave: R,
                children: [
                    !f &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: J.intl.string(J.t.rIbh8H),
                                  className: o()(ia.xn, { [ia.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(n1.A, {
                                  src: !(h && (m || g)) && H ? `${B}?format=png` : B,
                                  backgroundSrc: `${B}?format=png`,
                                  alt: J.intl.string(J.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(ia.xn, { [ia.p6]: d.shouldSpoiler }),
                                  imageChildClassName: ia.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eR.D, {
                            onClick: M,
                            children: (0, s.jsx)("div", {
                                className: ia.nx,
                                children: (0, s.jsxs)("div", {
                                    className: ia.BS,
                                    children: [
                                        (0, s.jsx)(n8, { color: tP.A.colors.WHITE.css }),
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
                className: ia.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: ia.OA,
                        children: [
                            (0, s.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ia.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(ia.hF, ia.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: ia._5,
                        children: [
                            null != d.authorId &&
                                null != D &&
                                (0, s.jsx)(n5.A, {
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
                                            children: (0, s.jsx)(tf.eu, {
                                                ...e,
                                                ref: a,
                                                size: tE._3.SIZE_40,
                                                src: D,
                                                "aria-label": J.intl.string(J.t.KXz3XB),
                                                avatarDecoration: P,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: ia.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: ia.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(nQ.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: ia.Xg,
                                                }),
                                            (0, s.jsx)(eR.D, {
                                                onClick: M,
                                                className: ia.HA,
                                                children: (0, s.jsx)(e9.D, {
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
                                            className: ia.wn,
                                            children: J.intl.format(J.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: () =>
                                                    null == d.authorId
                                                        ? (0, s.jsx)(nX.V, {
                                                              name: d.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: ia.fh,
                                                          })
                                                        : (0, s.jsx)(
                                                              n5.A,
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
                                                                      (0, s.jsx)(nX.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: d.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: ia.fh,
                                                                      }),
                                                              },
                                                              (0, nq.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(ep.$, { variant: "primary", onClick: M, text: d.ctaText })
                                : (0, s.jsx)(ep.$, { onClick: M, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var id = n(492230),
    ic = n(704413);
n(801541);
var iu = n(889137),
    im = n(744593),
    ih = n(123292),
    ig = n(707554),
    ip = n(962514),
    iA = n(126031),
    ix = n(438437),
    iE = n(306417),
    iC = n(233271);
function iI(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, s.jsxs)("div", {
        className: iC.AA,
        children: [
            t && (0, s.jsx)(iA.s, { children: J.intl.string(J.t["8DAM+5"]) }),
            (0, s.jsxs)(p.E, { variant: "text-md/semibold", color: "none", children: [i, "%"] }),
            (0, s.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function iv(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: l } = e,
        r = !0 === t.isSelected,
        a = !0 === t.didSelfVote,
        d = !0 === t.isVictor;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(iE.Dt, {
                attachmentClassName: o()(iC.oh, { [iC.Wx]: l }),
                emojiClassName: iC.Zg,
                media: t.pollMedia,
                fallback: (0, s.jsx)("div", { className: o()(iC.oh, iC.nb) }),
            }),
            r && (0, s.jsx)(iE.Vx, { size: 40, isVictor: d, isExpired: n, className: iC.Dt }),
            l &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(iI, {
                            didSelfVote: a,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: a ? i : void 0,
                        }),
                        ((!n && a) || d) &&
                            (0, s.jsx)(iE.Vx, { size: 18, isVictor: d, isExpired: n, className: iC.Po }),
                    ],
                }),
        ],
    });
}
function i_(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l, ...r } = e;
    return (0, s.jsx)(iE.Fh, {
        className: iC.ry,
        answerClassName: o()(iC.ZF, { [iC.EK]: i !== ix.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, s.jsx)(iv, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l }),
        ...r,
    });
}
var ij = n(290794),
    iN = n(789646),
    iT = n(873174),
    iS = n(615300),
    iy = n(990078),
    ib = n(717421),
    iL = n(915089),
    iR = n(956703),
    iM = n(969632),
    iP = n(140957);
function ik(e) {
    let { percentage: t, label: n, canShowVoterDetails: i, answerId: l } = e,
        a = (0, iL.GV)(),
        { channelId: o, messageId: d } = (0, ij.Tu)(),
        [c, u] = r.useState(""),
        [m, h] = r.useState(!1),
        g = "" !== c && m,
        A = r.useCallback(() => {
            u((0, iM.$m)(d, o, l));
        }, [d, o, l]),
        x = r.useCallback(() => {
            A(), h(!0);
        }, [A]),
        f = r.useCallback(() => {
            h(!1);
        }, []),
        E = r.useCallback(() => {
            (0, ip.e)({ channelId: o, messageId: d, answerId: l });
        }, [o, d, l]);
    return (
        r.useEffect(() => {
            if (m)
                return (
                    iR.A.addReactChangeListener(A),
                    () => {
                        iR.A.removeReactChangeListener(A);
                    }
                );
        }, [m, A]),
        (0, s.jsxs)("div", {
            className: iP.AA,
            children: [
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              "" !== c
                                  ? (0, s.jsx)(iy.m, {
                                        __unsupportedReactNodeAsText: (0, s.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: c,
                                        }),
                                        forceOpen: g,
                                        "aria-label": !1,
                                        children: (0, s.jsx)(ih.Q, {
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
                                  : (0, s.jsx)(ih.Q, {
                                        onMouseEnter: x,
                                        onMouseLeave: f,
                                        onFocus: x,
                                        onBlur: f,
                                        onClick: E,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              g && (0, s.jsx)(iA.s, { id: a, children: c }),
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
function iw(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, ib.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: iS.A.Easing.inOut(iS.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, s.jsx)(iT.animated.span, { className: iP.an, style: i, "aria-hidden": !0 });
}
function iD(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: r, className: a } = e;
    return (0, iu.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: ix.CQ.RADIO_BUTTONS }, () =>
            (0, s.jsx)(iE.k$, { isSelected: n, size: 24, className: a }),
        )
        .with({ answersInteraction: ix.CQ.CHECKBOXES }, () =>
            (0, s.jsx)(iE.e5, { isSelected: n, size: 20, className: a }),
        )
        .with({ answersInteraction: ix.CQ.LIST, didSelfVote: !0 }, () =>
            (0, s.jsx)(iE.Vx, { isVictor: l, isExpired: r, size: 24, className: a }),
        )
        .otherwise(() => null);
}
function iO(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: r } = e,
        a = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        c = !0 === t.isVictor,
        u = t.shouldAnimateTransition;
    return (0, s.jsxs)("div", {
        className: o()(iP.Fk, { [iP.EK]: i !== ix.CQ.LIST, [iP.wH]: a }),
        children: [
            l ? (0, s.jsx)(iw, { percentage: t.votesPercentage, shouldAnimate: u }) : null,
            null != t.pollMedia.emoji && (0, s.jsx)(iE.Fb, { className: iP.Zg, emoji: t.pollMedia.emoji }),
            (0, s.jsx)(p.E, {
                className: iP.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, s.jsx)(iA.s, { children: J.intl.string(J.t["8DAM+5"]) }),
            l &&
                (0, s.jsx)(ik, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: r,
                    answerId: t.answerId,
                }),
            (0, s.jsx)(iD, {
                answersInteraction: i,
                isSelected: a,
                didSelfVote: d,
                isVictor: c,
                isExpired: n,
                className: iP.ck,
            }),
        ],
    });
}
function iU(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l, ...r } = e;
    return (0, s.jsx)(iE.Fh, {
        className: iP.ry,
        answerClassName: iP.ZF,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, s.jsx)(iO, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: l,
            }),
        ...r,
    });
}
var iG = n(2445);
function iV(e) {
    let { media: t } = e;
    return (0, s.jsx)(e9.D, {
        variant: "text-md/medium",
        className: iG.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function iB(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: r } = e;
    return (0, s.jsxs)("div", {
        className: o()(iG.ez, r),
        children: [
            l
                ? (0, s.jsx)(ih.Q, { text: t, onClick: i, variant: "secondary", textVariant: "text-sm/medium" })
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
function iH(e) {
    let { action: t, channelId: n, messageId: i, isInteractive: l, className: a } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, iN.Mg)(),
        c = r.useCallback(async () => {
            t?.type != null &&
                (await ip.A.handlePollActionTapped({ channelId: n, messageId: i, type: t.type }), d(t.type));
        }, [t?.type, n, i, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, s.jsx)(
                ep.$,
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
            ? (0, s.jsx)(ih.Q, {
                  buttonRef: o,
                  onClick: c,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, s.jsx)(iB, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: c,
                  isInteractive: l,
                  className: a,
              });
}
function iF(e) {
    let t,
        { message: n, poll: i, className: l } = e,
        r = (0, ij.hd)(i.containerStyle),
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
            (0, iu.YW)(i.layoutType)
                .with(im.Z.DEFAULT, () => (0, s.jsx)(iU, { ...t }))
                .with(im.Z.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(i_, { ...t }))
                .otherwise(() => null));
    return null == a
        ? null
        : (0, s.jsx)("div", {
              className: o()(iG.kL, r, l),
              children: (0, s.jsxs)(ig.F, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: iG.wx,
                          children: [
                              (0, s.jsx)(iV, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, s.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: iG.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      a,
                      (0, s.jsxs)("div", {
                          className: iG.pR,
                          children: [
                              (0, s.jsx)(iH, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: iG.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, s.jsx)(iH, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: iG.vD,
                              }),
                              (0, s.jsx)(iH, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function iz(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, s.jsx)(ij.y5, {
        message: t,
        poll: n,
        children: (0, s.jsx)(iN.RZ, { children: (0, s.jsx)(iF, { message: t, poll: n, className: i }) }),
    });
}
var iY = n(711038),
    iW = n(892340),
    iK = n(803306),
    iJ = n(491182),
    iq = n(639288),
    iZ = n(10364),
    iX = n(378570),
    iQ = n(138298),
    i$ = n(761640),
    i0 = n(989349),
    i1 = n.n(i0),
    i2 = n(606049),
    i3 = n(943815),
    i4 = n(447215),
    i6 = n(221314),
    i5 = n(237507),
    i7 = n(334211),
    i9 = n(513653);
let i8 = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = U.default.getUser(t),
        u = r.useMemo(() => (i ? (0, i3.A)((0, ni.i$)(i1()(), "LT")) : null), [i]),
        m = (0, i4.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, tv.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tE.FT)(tE._3.SIZE_16)) : i9,
        g =
            null != c
                ? J.intl.format(i6.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(i6.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(i7.NB, i7.JZ, u),
        children: [
            (0, s.jsx)(tf.eu, { src: h, size: tE._3.SIZE_16, className: i5.my, "aria-label": "" }),
            (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", className: i5.Xh, children: g }),
            (0, s.jsxs)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: i5.Ek, children: "\u2022" }),
                    (0, s.jsx)(i2.A, { timestamp: d, className: i5.vE }),
                ],
            }),
        ],
    });
};
var le = n(167684);
function lt(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ns(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [w.A, U.default, D.A, ti.A, tB.A, t4.A],
            () => l.getForwardInfo(w.A, U.default, D.A, ti.A, tB.A, t4.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = w.A.getChannel(t.channel_id),
                n = tB.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ec.A.getCurrentlySelectedChannelId(),
                s = i$.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (iQ.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, iX.iN)(i),
                eH.default.track(K.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eR.D, {
              className: le.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: le.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(p.E, {
                      className: le.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(t2._, { size: "xxs", color: tP.A.colors.TEXT_MUTED }),
              ],
          });
}
function ln(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, tv.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, n4.A)(e.id, ir.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, n3.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, n3.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(iJ.A, {
        childrenExecutedCommand: (0, s.jsx)(i8, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(iq.Ay, {
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
            renderPopout: iZ.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(t5.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: le.iU,
        author: o,
    });
}
function li(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, iK.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, nd.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = ne.hD.useSetting(),
        c = ne.rs.useSetting(),
        m = (0, u.bG)([nt.A], () => nt.A.isDeveloper),
        h = (0, t6.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, t7.A)(o, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        x = (0, u.bG)([w.A], () => w.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: le.kL,
                  children: (0, s.jsxs)("div", {
                      className: le.Qs,
                      children: [
                          (0, s.jsx)(ln, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, t9.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: le.Mf,
                          }),
                          (0, s.jsx)(lt, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function ll(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(li, { message: t, snapshot: e, index: n }, n)),
    });
}
var ls = n(302031),
    lr = n(738188),
    la = n(239093),
    lo = n(89453);
function ld(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === la.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === la.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eR.D, {
              onClick: () => {
                  (0, e_.openModalLazy)(async () => {
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
                              source: la.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lo.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lo.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lo.U1,
                              children: [
                                  (0, s.jsx)(lr.i, { className: lo.QW, color: tP.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      children: J.intl.string(J.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lo.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, { daysAgo: i1()().diff(i1().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lo.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: J.intl.string(J.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: lo.xQ,
                      children: (0, s.jsx)(ih.Q, { text: J.intl.string(J.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var lc = n(349288),
    lu = n(393033),
    lm = n(903009);
function lh(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(lc.Anchor, {
        onClick: () => {
            (0, e_.openModalLazy)(async () => {
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
                        source: la.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lm.zh,
        children: J.intl.string(J.t.QsqdXC),
    });
}
function lg(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(lc.Anchor, { className: lm.zh, href: t, children: J.intl.string(J.t["8/GdRB"]) });
}
function lp(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case la.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(lh, { classificationId: n });
        case la.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(lg, { learnMoreLink: i });
        default:
            return null;
    }
}
function lA(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e7.k, { size: "xs", color: tP.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(lr.i, { color: tP.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: lm.Kk, children: n[t] }) : null;
}
function lx(e) {
    let { children: t, theme: n } = e,
        i = { default: lm._y, danger: lm.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function lf(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lu.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eR.D, {
              className: lm.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lm.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lm.U1,
                              children: [
                                  (0, s.jsx)(lA, { iconType: n.icon }),
                                  (0, s.jsx)(p.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lm.VU,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  children: J.intl.format(J.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), i1()().diff(i1().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lm.vv,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(lx, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              lp,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lE = n(44724),
    lC = n(318254),
    lI = n(825484),
    lv = n(875444),
    l_ = n(723090),
    lj = n(801228),
    lN = n(561794),
    lT = n(871123),
    lS = n(733391),
    ly = n(832163),
    lb = n(317560),
    lL = n(533406),
    lR = n(971146),
    lM = n(300182),
    lP = n(328100),
    lk = n(918374);
function lw(e) {
    let { sku: t, normalPrice: n, discountedPrice: i, discountPercent: l } = e,
        a = r.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, s.jsx)("div", {
                          className: lk.pt,
                          children: (0, s.jsx)(p.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: J.intl.format(J.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, s.jsx)(lC.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        d = null != l && null != i;
    return (0, s.jsx)("div", {
        className: o()(lk.PB, { [lk.un]: d }),
        children: d
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      null != n &&
                          (0, s.jsx)(p.E, {
                              className: lk.of,
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
function lD(e) {
    let { applicationId: t, skuId: n, channel: i } = e,
        l = (0, u.bG)([ly.A], () => ly.A.getGuildIdFromApplicationId(t));
    return null == l ? null : (0, s.jsx)(lO, { guildId: l, skuId: n, channel: i });
}
function lO(e) {
    let { guildId: t, skuId: n, channel: i, customNavigateToSocialLayerStorefront: l } = e,
        a = (0, u.bG)([eB.A], () => eB.A.isFetchingForSKU(n)),
        o = (0, lj.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        d = o?.applicationId,
        c = (0, u.bG)([ew.A], () => null != d && ew.A.isFetchingApplication(d)),
        m = (0, u.bG)([ew.A], () => null != d && ew.A.didFetchingApplicationFail(d)),
        h = (0, er.h)(d),
        { analyticsLocations: g } = (0, f.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, lN.pE)();
    let A = (0, u.bG)([U.default], () =>
            i.isDM() && null != i.recipients && 0 !== i.recipients.length ? U.default.getUser(i.recipients[0]) : null,
        ),
        E = (0, u.bG)([ly.A], () => (null != n ? ly.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: C, primaryIconLabel: I } = r.useMemo(() => (0, lT.Cv)(o, d), [o, d]),
        { normalPrice: v, discountedPrice: _, discountPercent: j } = (0, l_.CD)({ sku: o });
    r.useEffect(() => {
        null == t || null == n || eB.A.isFetchingForSKU(n) || (0, lS.qf)(t, n);
    }, [t, n]);
    let N = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    o?.applicationId != null &&
                        (0, lb.R)({
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
                (0, lL.a)(
                    o,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [o, t, E]),
        S = r.useCallback(() => {
            null != o &&
                (0, lL.a)(
                    o,
                    { isGift: !0, giftRecipient: A ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [o, A]),
        y = null != d && null == h && !m;
    if ((a || c || y) && (null == o || null == h))
        return (0, s.jsx)("div", { className: lk.kL, children: (0, s.jsx)(tk.y, { className: lk.u1 }) });
    if (null == o || null == h || !(0, lv.A)(h) || h.guildId !== t) return null;
    let b = _ ?? v;
    return (0, s.jsxs)("div", {
        className: lk.kL,
        children: [
            (0, s.jsx)(lP.A, { className: lk.Nr, skuId: n, variant: lP.s.EMBEDDED, onClick: N, analyticsLocations: g }),
            (0, s.jsxs)("div", {
                className: lk.zH,
                children: [
                    (0, s.jsxs)("div", {
                        className: lk.lI,
                        children: [
                            (0, s.jsx)(lR.V, {}),
                            (0, s.jsxs)("div", {
                                className: lk.PB,
                                children: [
                                    null != C && (0, s.jsx)("img", { src: C.toString(), alt: I, className: lk.ye }),
                                    (0, s.jsx)(p.E, { variant: "text-md/medium", lineClamp: 1, children: o.name }),
                                ],
                            }),
                            (0, s.jsx)(lw, { sku: o, normalPrice: v, discountedPrice: _, discountPercent: j }),
                        ],
                    }),
                    (0, s.jsxs)(lI.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, s.jsx)(iy.m, {
                                text: E ? void 0 : J.intl.string(J.t.IqlPbQ),
                                children: (0, s.jsx)(ep.$, {
                                    variant: E ? "secondary" : "primary",
                                    onClick: N,
                                    text: J.intl.string(J.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            E &&
                                (0, s.jsx)(ep.$, {
                                    variant: "primary",
                                    onClick: T,
                                    text:
                                        null != b ? J.intl.format(J.t.Xp5WTn, { price: b }) : J.intl.string(J.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, s.jsx)(lM.A, { onGift: S }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lU = n(68935),
    lG = n(319060),
    lV = n(812282),
    lB = n(922016),
    lH = n(34337),
    lF = n(240248),
    lz = n(256449),
    lY = n(194004),
    lW = n(148355),
    lK = n(780645),
    lJ = n(862482),
    lq = n(847374),
    lZ = n(964486),
    lX = n(235986),
    lQ = n(624793),
    l$ = n(636537),
    l0 = n(639245),
    l1 = n(87719),
    l2 = n(725807),
    l3 = n(428262),
    l4 = n(750385),
    l6 = n(850992),
    l5 = n(625494),
    l7 = n(698279),
    l9 = n(788868),
    l8 = n(631144),
    se = n(979132);
function st(e) {
    eH.default.track(K.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? K.liQ.GUILD_CHANNEL : K.liQ.DM_CHANNEL,
        location_section: K.JJy.STICKER_POPOUT,
    }),
        (0, l1.e)();
}
function sn(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(lX.A, {
        children: [
            (0, s.jsx)(lW.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(lX.A, {
                direction: lX.A.Direction.VERTICAL,
                justify: lX.A.Justify.CENTER,
                className: se.bM,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-md/semibold", children: (0, s.jsx)(lK.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(p.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let si = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [a, o, d] = (0, u.yK)(
                [l4.A],
                () => [l4.A.getStickerPack(n.pack_id), !l4.A.hasLoadedStickerPacks, l4.A.isPremiumPack(n.pack_id)],
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
        (0, lz.Sr)(n.pack_id);
        let m = (0, lz.pD)(i),
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
            eH.default.track(K.HAw.OPEN_POPOUT, {
                type: K.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, tD.dI)(e),
            });
        }, [n.pack_id]),
        o || null == a)
            ? (0, s.jsx)(lH.Y0, { className: l8.v0 })
            : (0, s.jsxs)(lH.Uq, {
                  className: l8.Bm,
                  children: [
                      (0, s.jsx)(e9.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(p.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? J.intl.format(J.t.auckXz, { stickerPackName: a.name })
                              : J.intl.format(J.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: l8.pQ,
                          children: c.map((e) => (0, s.jsx)(lW.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: l8.j0,
                              children: (0, s.jsx)(
                                  ep.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: J.intl.string(J.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  l5._.dispatchToLastSubscribed(K.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: l7.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && l6.bM.setActiveCategoryIndex(i);
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
    sl = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
            [d, c] = r.useState(null),
            [m, h] = r.useState(!1),
            g = U.default.getCurrentUser(),
            A = l3.Ay.canUseCustomStickersEverywhere(g),
            x = (0, u.bG)([tB.A], () => tB.A.getGuild(n.guild_id)),
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
            { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, tD.dI)(i) }),
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
                            l$.Bo.get({ url: K.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, na.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    h(!0);
                })();
            }, [n.id, f]);
        let S = n.guild_id === i.getGuildId(),
            y = null != d,
            b = !1,
            L = "Custom Sticker Popout";
        A
            ? (t = f
                  ? S
                      ? J.intl.string(J.t.fZ0DiG)
                      : J.intl.string(J.t["1f6D9m"])
                  : y
                    ? J.intl.string(J.t.yHmoR9)
                    : J.intl.string(J.t.vZaScH))
            : f
              ? ((t = S ? J.intl.string(J.t.jNphpt) : J.intl.string(J.t.lyD5ZW)),
                (b = !0),
                (L = "Custom Sticker Popout (Upsell)"))
              : y
                ? ((t = J.intl.string(J.t.IuXYch)), (b = !0), (L = "Custom Sticker Popout (Upsell)"))
                : ((t = J.intl.format(J.t.hGWuxU, {
                      openPremiumSettings: () => {
                          st(i), l();
                      },
                  })),
                  (L = "Custom Sticker Popout (Soft Upsell)"));
        let R = !b && !f && y && A;
        if (
            (r.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [m, d]),
            (0, lZ.Ay)(() => {
                eH.default.track(K.HAw.OPEN_POPOUT, { type: L, ...j });
            }),
            !m)
        )
            return (0, s.jsx)(lH.Y0, { className: l8.v0 });
        {
            let e;
            return (0, s.jsxs)(lH.Uq, {
                className: se.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || f) return;
                        l();
                        let e = d.id;
                        try {
                            await nr.A.joinGuild(e), nr.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, s.jsxs)("div", {
                        className: se.gH,
                        children: [
                            (0, s.jsx)(sn, { description: t, sticker: n }),
                            b &&
                                (0, s.jsx)(l2.A, {
                                    className: se.lI,
                                    subscriptionTier: l9.pe.TIER_2,
                                    size: lJ.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: J.intl.string(J.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            R &&
                                (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: se.lI,
                                    children: (0, s.jsx)(ep.$, {
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
                            if (!y && !f) return;
                            let e = (d?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != d ? lQ.GO.createFromDiscoverableGuild(d) : lQ.GO.createFromGuildRecord(x);
                            return (0, s.jsxs)("div", {
                                className: se.tl,
                                children: [
                                    (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: se.YW,
                                        children: f ? J.intl.string(J.t.kx6pEG) : J.intl.string(J.t.pDE7Gb),
                                    }),
                                    (0, s.jsx)(l0.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: R,
                                    }),
                                    !f &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(eR.D, {
                                                    onClick: () => {
                                                        a(), C(!E);
                                                    },
                                                    className: se.wK,
                                                    children: (0, s.jsxs)(lX.A, {
                                                        children: [
                                                            (0, s.jsx)(p.E, {
                                                                className: se.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: J.intl.string(J.t.vtH5hn),
                                                            }),
                                                            (0, s.jsx)(lq.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: o()(se.ZB, { [se.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, s.jsx)(lX.A, {
                                                        wrap: lX.A.Wrap.WRAP,
                                                        align: lX.A.Align.START,
                                                        justify: lX.A.Justify.START,
                                                        className: se.LX,
                                                        children: e.map((e) =>
                                                            (0, s.jsx)(
                                                                iy.m,
                                                                {
                                                                    text: e.name,
                                                                    ...lH.Uk,
                                                                    children: (0, s.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: o()(se.Th, {
                                                                                [l8.vT]: null != I && I !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, s.jsx)(lW.A, {
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
function ss(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(lH.Uq, {
        className: l8.Bm,
        children: (0, s.jsx)(sn, {
            sticker: i,
            description: J.intl.format(J.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), st(t);
                },
            }),
        }),
    });
}
let sr = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, lz.Zq)(t, !0);
    return null != r && (0, lU.FD)(r)
        ? (0, s.jsx)(si, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lU.Xw)(r)
          ? (0, s.jsx)(sl, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == r
                ? (0, s.jsx)(ss, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, s.jsx)(lH.Y0, {});
};
var sa = n(76513);
let so = (0, lF.xI)(lG.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sd = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, lz.Zq)(t, i),
            { analyticsLocations: m } = (0, f.Ay)(x.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: sa.Zl,
                children: [(0, s.jsx)(lV.s, { size: "xs", color: "currentColor", className: sa.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(f.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: sa.be,
                children: (0, s.jsx)(lB.Y, {
                    align: "center",
                    animation: lB.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(sr, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(iy.m, {
                            ...lH.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, lH.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    tD.Ay.trackWithMetadata(K.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: l9.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, lY.Tw)(e.format_type),
                                        is_custom: (0, lY.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eR.D, {
                                innerRef: l,
                                className: sa.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, s.jsx)(lW.A, { isInteracting: i, size: so, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sc = n(406704),
    su = n(531142),
    sm = n(140735),
    sh = n(442433),
    sg = n(143413),
    sp = n(935208),
    sA = n(321045),
    sx = n(456874),
    sf = n(707539),
    sE = n(80682),
    sC = n(465364),
    sI = n(805964),
    sv = n(943220),
    s_ = n(838541);
function sj(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [D.A],
            () => ({ isBlocked: D.A.isBlockedForMessage(t), isIgnored: D.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sE.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
        () => (null != t.content && "" !== t.content ? (0, sC.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, s.jsxs)("div", {
        className: i7.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: i7.FJ }),
            (0, s.jsx)(sv.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: i7.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: r,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, sI.o)(e, t, n, i, i7.tP, {
                        trailingIconClass: i7._v,
                        leadingIconClass: i7.a5,
                        iconSize: s_.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, r ?? (0, s.jsx)("span", { className: i7.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var sN = n(747926),
    sT = n(650583),
    sS = n(74791);
function sy(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([w.A], () => w.A.getChannel(sp.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(sb, { channel: i, compact: n, isSystemMessage: (0, sg.A)(t) });
}
function sb(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, nn.Ay)(a),
        h = (0, u.bG)([sx.A], () => sx.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([sx.A], () => sx.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([sx.A], () => sx.A.getCount(t.id))),
            (r = (0, sf.JO)(t)),
            t.threadMetadata?.archived
                ? J.intl.string(J.t.ZTo4HS)
                : null == l || 0 === l
                  ? J.intl.string(J.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: J.intl.string(J.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: sS.vE, children: (0, sf.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(sj, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: sS.vE, children: (0, sf.aK)(r) }),
                          ],
                      })),
        A = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(sS.GI, { [sS.E]: !d, [sS.E_]: c }) }),
            (0, s.jsx)(eR.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sN.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sT.dh.SPACE || e.key === sT.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sN.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, sh.L3)(e, async () => {
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
                className: o()(sS.kL, { [sS.og]: c }),
                children: (0, s.jsxs)(su.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: sS.kq,
                            children: [
                                (0, s.jsx)(sm.A, { children: J.intl.string(J.t["7Xm5QI"]) }),
                                (0, s.jsx)("span", { className: sS.UU, children: m }),
                                (0, s.jsx)("span", {
                                    className: sS.lO,
                                    "aria-hidden": !A,
                                    children: (0, sA.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sS.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sL = n(383233),
    sR = n(834942),
    sM = n(644447),
    sP = n(927813),
    sk = n(659674),
    sw = n(998218),
    sD = n(5095),
    sO = n(294520),
    sU = n(320095),
    sG = n(863439),
    sV = n(707985),
    sB = n(730852),
    sH = n(265422),
    sF = n(986268);
function sz(e) {
    let { guild: t, channel: n, message: i } = e,
        l = O.A.getGuildId(),
        a = ec.A.getChannelId(l),
        o = r.useCallback(() => {
            eH.default.track(K.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, sH.i)(t.id, n.id),
                sB.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(nC.A.Channel, { channel: n });
    return (0, s.jsx)(nC.A, {
        children: (0, s.jsxs)(nC.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: nO.iH,
                    children: [
                        (0, s.jsx)(nC.A.Icon, { guild: t }),
                        (0, s.jsx)(nC.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: nO.FA,
                                children: [
                                    J.intl.format(J.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: nO.E3,
                                        children: (0, s.jsx)(sF.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: nO.UD,
                    children: (0, s.jsx)(ep.$, {
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
function sY(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = w.A.getChannel(l),
        a = tB.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && ti.A.can(K.xBc.VIEW_CHANNEL, r) && ti.A.can(K.xBc.CONNECT, r)
        ? (0, s.jsx)(sz, { guild: a, channel: r, message: n })
        : null;
}
var sW = n(789645),
    sK = n(298236),
    sJ = n(953756),
    sq = n(564107),
    sZ = n(503556),
    sX = n(143517);
function sQ(e) {
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
        [m, h] = (0, sJ.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(sq.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(sK.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(sJ.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(sJ.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(sZ.O0, sX.k, sX.z, { [sZ.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eR.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: sZ.PP,
                                                  onClick: c,
                                                  "aria-label": J.intl.string(J.t.GT3fNz),
                                                  children: (0, s.jsx)(sW.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, nF.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var s$ = n(451988),
    s0 = n(261958),
    s1 = n(212245),
    s2 = n(775602),
    s3 = n(62583),
    s4 = n(956549),
    s6 = n(550151),
    s5 = n(392054),
    s7 = n(853390),
    s9 = n(290863),
    s8 = n(403362),
    re = n(811024),
    rt = n(360469),
    rn = n(212242);
let ri = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, n9.j)(),
        s = (0, u.bG)([s2.A], () => s2.A.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new s$.IX();
            return (
                e.start(a ? 15 * sP.A.Millis.SECOND : sP.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / sP.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, s7.fU)(n)
    );
});
ri.displayName = "ActivityRuntimeCounter";
let rl = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, s1.p)(),
        m = (0, u.bG)([w.A], () => w.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([k.default], () => k.default.getId()),
        {
            embeddedActivity: A,
            currentEmbeddedActivity: E,
            activityLaunchState: C,
        } = (0, u.cf)(
            [eu.Ay],
            () => ({
                embeddedActivity: eu.Ay.getEmbeddedActivitiesForChannel(h ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: eu.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eu.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        I = A?.userIds,
        v = (0, u.yK)(
            [U.default],
            () =>
                Array.from(I ?? [])
                    .map((e) => U.default.getUser(e))
                    .filter(s8.Vq),
            [I],
        ),
        _ = (0, u.bG)([s9.A], () => {
            if (null == I) return null;
            for (let e of I) {
                let t = s9.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, I]),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new nI.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rt.Gl), e;
        }, [n]),
        T = (0, s6.vG)({ userId: g, channelId: i, application: N }),
        S = null == A,
        y = (function (e) {
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
                            a = (0, re.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: J.intl.string(J.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : J.intl.string(J.t.f41E1g) };
                        if (null != n && n !== s6.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case s6.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = J.intl.string(J.t.hHGrWz);
                                    break;
                                case s6.Gy.ACTIVITY_AGE_GATED:
                                    e = J.intl.string(J.t["4WuFRE"]);
                                    break;
                                case s6.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = J.intl.string(J.t.uGDCcw);
                                    break;
                                case s6.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = J.intl.string(J.t.UXoQTp);
                                    break;
                                case s6.Gy.CHANNEL_FULL:
                                    e = J.intl.string(J.t.rZfiNq);
                                    break;
                                case s6.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = J.intl.string(J.t.w5SAps);
                                    break;
                                case s6.Gy.NO_CHANNEL:
                                case s6.Gy.NO_GUILD:
                                case s6.Gy.NO_USER:
                                case s6.Gy.IS_AFK_CHANNEL:
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
            eH.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                is_activity_start: S,
                cta: "Play",
            }),
                S
                    ? await (0, s4.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                          commandOrigin: s5.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, s3.A)({
                          applicationId: A.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                      });
        },
        M = y.disabled ? J.intl.string(J.t.JBnc7N) : J.intl.string(J.t.cX9uLZ),
        P = (0, ee.F)(N, () => {
            eH.default.track(K.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        D = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    y.disabled && (t = y.tooltip);
    let O = v.length,
        V = _?.timestamps?.start ?? _?.created_at,
        B = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case K.$pd.STREAMING:
                    return { text: J.intl.formatToPlainString(J.t.tyCw2q, { count: n }), Icon: F.o };
                case K.$pd.LISTENING:
                    return { text: J.intl.formatToPlainString(J.t["2l8yka"], { count: n }), Icon: z.T };
                default:
                    return { text: J.intl.formatToPlainString(J.t.yJj035, { count: n }), Icon: Y._ };
            }
        })({ activity: _, activityUsersCount: O }),
        W = [
            {
                label: y.text,
                trackingArea: X.kY.PLAY,
                onClick: R,
                disabled: y.disabled,
                disabledReason: t,
                submitting: L,
            },
        ];
    return (0, s.jsx)(H.h, {
        header: J.intl.string(J.t.pkq6Vq),
        title: n.name,
        iconSrc: D,
        info: (0, s.jsx)("div", {
            className: rn.QR,
            children: S
                ? (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: M })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: rn.oL,
                                  children: [
                                      null != V &&
                                          (0, s.jsxs)("div", {
                                              className: rn.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: rn.y9,
                                                      children: (0, s.jsx)(B.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(p.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(ri, { start: V }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(rn.DT, rn.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(s0.u, { size: "xxs", color: "currentColor" }),
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
        onClickContent: P,
        trackingConfig: {
            id: n.id,
            linkType: et.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: S,
        },
    });
});
var rs = n(164664),
    rr = n(439401),
    ra = n(657044),
    ro = n(863574),
    rd = n(707606),
    rc = n(456412),
    ru = n(993408),
    rm = n(242874),
    rh = n(499454),
    rg = n(75825),
    rp = n(928550),
    rA = n(976860),
    rx = n(780964),
    rf = n(766075),
    rE = n(30793),
    rC = n(189081);
function rI(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, nM.A)(i),
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
var rv = n(738533),
    r_ = n(45938),
    rj = n(615396),
    rN = n(427262),
    rT = n(936504),
    rS = n(820284),
    ry = n(674378),
    rb = n(598429),
    rL = n(979604);
function rR(e) {
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
        A = (0, u.bG)([rC.A], () => rC.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([eV.A], () => null != f && !eV.A.didFetchingSkuFail(f));
    return null != A && (0, ry.XZ)(A)
        ? (0, s.jsx)(rL.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(rb.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
var rM = n(580630);
function rP(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return J.intl.string(J.t.RWouSQ);
    if (e.premium && !n) return J.intl.string(J.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, rM.$g)(i.amount, i.currency);
        else return J.intl.string(J.t.QQsaCc);
    return J.intl.string(J.t.RWouSQ);
}
var rk = n(257727),
    rw =
        (((i = rw || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
let rD = (e) => {
        let { className: t } = e;
        return (0, s.jsxs)("div", {
            className: o()(rk.nM, t),
            children: [
                (0, s.jsx)(ra._, { size: "md", color: "currentColor", className: rk.Kk }),
                J.intl.string(J.t["7eicAO"]),
            ],
        });
    },
    rO = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)("div", {
            className: o()(rk.nM, n),
            children: [(0, s.jsx)(tx.t, { size: "md", color: "currentColor", className: rk.Kk }), rP(t)],
        });
    },
    rU = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: o()(rk.EQ, n), children: t.getDisplaySalePercentage() });
    },
    rG = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: o()(rk.I8, n), children: rP(t, !1) });
    },
    rV = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)("div", { className: n, children: rP(t) });
    },
    rB = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)("div", {
            className: o()(rk.nM, n),
            children: [(0, s.jsx)(rU, { sku: t }), (0, s.jsx)(rG, { sku: t }), (0, s.jsx)(rV, { sku: t })],
        });
    },
    rH = (e) => {
        let { className: t } = e;
        return (0, s.jsx)("div", { className: t, children: J.intl.string(J.t.QQsaCc) });
    };
class rF extends r.PureComponent {
    static Types = rw;
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
                return (0, s.jsx)(rH, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(rD, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(rO, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(rB, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(rV, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(rH, { className: t });
            case 3:
                return (0, s.jsx)(rO, { sku: n, className: o()(rk.OB, t) });
            case 2:
                return (0, s.jsx)(rB, { sku: n, className: o()(rk.dk, t) });
            default:
                return (0, s.jsx)(rV, { className: o()(rk.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(rH, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rk.nM,
                            children: [(0, s.jsx)(rV, { sku: i }), (0, s.jsx)(rU, { sku: i })],
                        }),
                        (0, s.jsx)(rG, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(rV, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(rk.IH, n), children: t });
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
var rz = n(842983);
let rY = {
    [K.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, nM.A)(r),
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
                ...(0, nM.A)(r),
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
                ...(0, nM.A)(r),
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
function rW(e) {
    let { operatingSystem: t, className: n } = e,
        i = rY[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(iy.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
let rK = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(rz.I, n),
        children: t.map((e) => (0, s.jsx)(rW, { operatingSystem: e, className: o()(rz.A, i) }, e)),
    });
};
var rJ = n(111758);
let rq = (e) => {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rJ.T, t),
        children: (0, s.jsx)("span", { className: rJ.Q, children: J.intl.string(J.t["14lP0W"]) }),
    });
};
var rZ = n(246337);
let rX = (e) => {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(rZ.T, t),
        children: (0, s.jsx)("span", { className: rZ.Q, children: J.intl.string(J.t["8IfYqa"]) }),
    });
};
var rQ = n(868285),
    r$ = n(358618),
    r0 = n(983851),
    r1 = n(133296),
    r2 = n(607470),
    r3 = n(61251);
class r4 extends r.Component {
    _animatedValue = new iS.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), iS.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        iS.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(iS.A.img, {
            className: o()({ [r3.YC]: i }, t),
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
            ? (0, s.jsx)(iS.A.div, { className: o()(r3.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(iS.A.div, {
                  className: o()(l ? r3.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tk.y, {
                                className: r3.u1,
                                itemClassName: r3.$N,
                                type: tk.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class r6 extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new s$.Ep();
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
            m = a ? r$._ : r0.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                nE.Fr
                    ? null
                    : (0, s.jsx)(r2.A, {
                          className: o()(r3.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(rQ.F, {
                    children: l && e ? null : (0, s.jsx)(r4, { className: o()(r3.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eR.D, {
                    className: o()(r3.b4, { [r3.HY]: l && e, [r3.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: r3.i2 }) : null,
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
            ? (0, s.jsx)(r4, { className: o()(r3.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(r4, { className: o()(r3.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(r4, { className: o()(r3.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(r1.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: r3.mZ,
                  disable: !e,
                  children: (0, s.jsx)(rQ.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(r3.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var r5 = n(366523),
    r7 = n(371794),
    r9 = n(622413),
    r8 = n(174264);
class ae extends r.PureComponent {
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
                  className: r8.ED,
                  children: [
                      (0, s.jsx)(rF, {
                          type: rF.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? r8.ae : r8.Ek,
                      }),
                      (0, s.jsx)(rK, { systems: [K.uje.WINDOWS], className: r8.iD }),
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
        return (0, lT.bF)(l)
            ? (0, s.jsx)(r5.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: r8.A$,
                  backgroundImageClassName: r8.iZ,
                  foregroundImageClassName: r8.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(r6, {
                          className: o()(r8.H1, { [r8.ZC]: a }),
                          video: null != d.previewVideo ? (0, r7.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, r7.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: r8.ZI,
                          splashPlaceholderClassName: r8.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(rX, { className: o()(r8.LJ, { [r8.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(rq, { className: o()(r8.LJ, { [r8.V9]: e }) })
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
            d = o ? ro.ug : r9.A;
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
var at = n(981449);
class an extends r.Component {
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
        return (0, s.jsx)("div", {
            className: at.h,
            children: (0, s.jsx)(ep.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: J.intl.string(J.t["W+NB90"]),
                onClick: () => {
                    (0, rA.pX)(K.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > ro.Tm;
        return (0, s.jsx)(ae, {
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
        if (null != r) return (0, s.jsx)("div", { className: at.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(K.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: at.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(rR, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: at.h,
                          source: K.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(rF, { type: rF.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > ro.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(ro.Wb, { isHorizontal: r })
            : e.productLine === K.EZt.COLLECTIBLES
              ? (0, s.jsx)(rS.A, { section: K.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, s.jsx)(rS.A, {
                    section: K.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(rT.N_, {
                        onClick: this.handleLinkClick,
                        to: K.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let ai = [eV.A, rC.A, eB.A];
function al(e) {
    let { skuId: t } = e,
        n = eV.A.get(t),
        i = null != n ? ew.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eV.A.didFetchingSkuFail(t),
        inLibrary: null != n && rC.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eB.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rC.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let as = (0, rc.A)((0, rd.A)(an)),
    ar = u.Ay.connectStores(ai, al)(as),
    aa = (0, rd.A)(u.Ay.connectStores(ai, al)(an));
var ao = n(576171);
function ad(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eR.D, {
        className: ao.kP,
        onClick: t,
        children: [
            (0, s.jsx)(ra._, { size: "md", color: "currentColor", className: ao.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? J.intl.string(J.t.Wi99Ro) : J.intl.string(J.t["+tXad7"]) }),
        ],
    });
}
class ac extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= ro.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === K.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, rf.openUserSettings)(rx.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? J.intl.string(J.t.mT9B49) : J.intl.string(J.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(ep.$, {
                  variant: "primary",
                  size: "sm",
                  text: J.intl.string(J.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(ep.$, { variant: "primary", size: "sm", text: J.intl.string(J.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? J.intl.string(J.t.QXgO5w)
            : this.props.isSelfGift
              ? J.intl.string(J.t.eEM3dq)
              : J.intl.string(J.t.tB8S6u);
    render() {
        return (0, s.jsx)(ro.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class au extends r.Component {
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
                ? (0, rA.pX)(K.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rA.pX)(K.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, rf.openUserSettings)(rx.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eH.default.track(K.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: K.ZSU.BUTTON_CTA },
            });
        let r = l !== K.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rh.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eH.default.track(K.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [x.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rv.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, lT.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, lb.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [x.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, rf.openUserSettings)(rx.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(K.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(lX.A, {
            justify: lX.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(lX.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(ad, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(lX.A, {
                    align: lX.A.Align.END,
                    justify: lX.A.Justify.END,
                    className: ao.yu,
                    direction: lX.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: J.intl.format(J.t.nZBvUR, { hours: e.expiresAt.diff(i1()(), "h") }),
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
                children: (0, s.jsx)(ep.$, {
                    variant: "primary",
                    size: "sm",
                    text: J.intl.string(J.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, l3.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? J.intl.string(J.t.BTihou)
                : null != e.giftStyle
                  ? J.intl.string(J.t.TiZFqX)
                  : J.intl.string(J.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, ru.hU)(e) ? ao.UQ : void 0,
            children: (0, s.jsx)(ep.$, {
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
            ? J.intl.formatToPlainString(J.t.t1SOId, { recipientDisplayName: rN.Ay.getName(t) })
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
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, lT.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? J.intl.formatToPlainString(J.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, ru.hU)(e) || (0, lT.bF)(i)
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
                    ? J.intl.format(J.t.l3VxgG, { username: rN.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : J.intl.format(J.t["9cYrw5"], {
                          username: rN.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? J.intl.formatToPlainString(J.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : J.intl.formatToPlainString(J.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return J.intl.string(J.t.ZTNur7);
            if (null != l) {
                let e = s.interval === l9.WT.MONTH ? J.t["/RDIEA"] : J.t["3CX6Ev"];
                return J.intl.format(e, { username: rN.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === l9.WT.MONTH ? J.t["2O4lo5"] : J.t["+XjmsR"];
            return J.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? J.intl.format(J.t["3HsdQ/"], { username: rN.Ay.getUserTag(l) }) : J.intl.string(J.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = l9.Wx.includes(e.giftStyle),
            i = o()(ao.gB, { [ao.El]: n, [ao.by]: t >= ro.Tm }),
            l = o()({ [ao.gc]: n, [ao.Ei]: n && t >= ro.Tm, [ao.ww]: !n, [ao.wy]: !n && t >= ro.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(rI, { className: ao.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(rg.A, {
                        defaultAnimationState: e.redeemed ? rm.oA.LOOP : rm.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(ep.$, {
            variant: "primary",
            size: "sm",
            text: J.intl.string(J.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, lT.bF)(n);
        return (0, s.jsx)(aa, {
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
            return (0, s.jsx)(aa, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: K.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => J.intl.string(J.t.X4p5uH),
                renderCustomTagline: () => J.intl.string(J.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(ac, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(ro.Wb, { isHorizontal: i >= ro.Tm });
        return (0, ru.hU)(e)
            ? (0, s.jsx)("div", { className: ao.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let am = (0, rc.A)((0, rd.A)(au)),
    ah = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([rE.A], () => {
                let e = rE.A.getError(t);
                return { giftCode: rE.A.get(t), resolved: rE.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([U.default], () => (null != i && null != i.userId ? U.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eV.A], () => (null != i ? eV.A.get(i.skuId) : null)),
            d = (0, u.bG)([rC.A], () =>
                null != o && i?.entitlementBranches != null ? r_.YI(i.entitlementBranches, o, rC.A) : null,
            ),
            c = (0, er.h)(o?.applicationId),
            m = null != o && (0, lT.bF)(o) && i?.redeemed === !0,
            [h] = (0, rp.L)(m ? c?.id : null),
            g = (0, rj.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([k.default], () => (null != i ? k.default.getId() === i.userId : k.default.getId() === n.id));
        return (0, s.jsx)(am, {
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
var ag = n(376728),
    ap = n(107123),
    aA = n(698441),
    ax = n(427080),
    af = n(346542),
    aE = n(665066),
    aC = n(95701),
    aI = n(299091),
    av = n(860689);
let a_ = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aj(e) {
    let { guildId: t, location: n } = e;
    return a_.getCurrentConfig({ guildId: t, location: n });
}
function aN() {
    return (0, s.jsxs)(nC.A, {
        children: [
            (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t["N/g9Z4"]) }),
            (0, s.jsx)(nC.A.Body, { resolving: !0 }),
        ],
    });
}
var aT = n(172799),
    aS = n(718223);
function ay(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: aS.MY,
                        children: [
                            (0, s.jsx)("i", { className: aS.QD }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aS.U9,
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
                        className: aS.MY,
                        children: [
                            (0, s.jsx)("i", { className: aS.o6 }),
                            (0, s.jsx)(p.E, {
                                variant: "text-xs/normal",
                                className: aS.U9,
                                color: i,
                                children: J.intl.format(J.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: aS.rc, children: l })
    );
}
function ab(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, nn.Ay)(t);
    if (null != t && null != n) {
        let e = (0, t3.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(aS.Ix, { [aS.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: aS.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(lK.A, {
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
              className: o()(aS.Ix, { [aS.v6]: i }),
              children: (0, s.jsx)(lK.A, {
                  children: (0, s.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: J.intl.format(J.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aL(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a } = e,
        { approximate_member_count: o, approximate_presence_count: d, target_type: c, target_application: m } = i;
    ev()(c === aT.yV.EMBEDDED_APPLICATION && null != m, "invalid application invite");
    let h = r.useCallback(() => {
            eH.default.track(K.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: m.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, m.id]),
        g = (0, u.bG)([tB.A], () => (null != i.guild ? tB.A.getGuild(i.guild.id) : null), [i]),
        p = (0, er.A)([m.id])[0],
        A = (0, u.bG)(
            [eu.Ay],
            () => i?.channel != null && eu.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === m.id,
        ),
        E = (0, u.bG)([eu.Ay], () =>
            (i.channel?.id != null ? eu.Ay.getEmbeddedActivitiesForChannel(i.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return m.id === t;
            }),
        ),
        C = w.A.getChannel(i.channel?.id),
        I = (0, u.bG)([ti.A], () => null != C && ti.A.can(K.xBc.USE_EMBEDDED_ACTIVITIES, C), [C]),
        { analyticsLocations: v } = (0, f.Ay)(x.A.INVITE_EMBED),
        _ = (0, u.yK)(
            [eu.Ay],
            () =>
                null != C
                    ? eu.Ay.getEmbeddedActivitiesForChannel(C.id)
                          .filter((e) => e.applicationId === m.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [C, m.id],
        ),
        j = (0, u.yK)([U.default], () => _.map((e) => U.default.getUser(e)).filter((e) => null != e), [_]),
        N = r.useCallback(() => {
            (0, ag.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nG._U)(i.code, l.id),
                },
                v,
            ),
                ag.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, a]),
        T = i.state === K.elq.ACCEPTING,
        S = null != g;
    if (null == g) {
        if (null == i.guild) return (0, s.jsx)(aN, {});
        g = (0, av.DY)(i.guild);
    }
    t = S
        ? A
            ? J.intl.string(J.t.DPfdsq)
            : E
              ? J.intl.string(J.t.sqe0hj)
              : J.intl.string(J.t.RscU7I)
        : J.intl.string(J.t["2BP08E"]);
    let y = (S && !I) || (S && A);
    return (I || (n = J.intl.string(J.t.hHGrWz)), null == i.code || "" === i.code || null == p)
        ? null
        : (0, s.jsx)(f.f5, {
              value: v,
              children: (0, s.jsx)(aR, {
                  app: p,
                  activityUsers: j,
                  isMember: S,
                  channel: C,
                  guild: g,
                  message: l,
                  members: o,
                  membersOnline: d,
                  isActivityActive: E,
                  submitting: T,
                  buttonLabel: t,
                  disabled: y,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: h,
              }),
          });
}
function aR(e) {
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
            className: aS.QR,
            children: [
                (0, s.jsx)(ab, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(Z, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: J.intl.formatToPlainString(J.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(ay, { members: d, membersOnline: c, textColor: "none" }),
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
var aM = n(4274);
function aP(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([k.default], () => k.default.getId()) === t.id
                ? J.intl.string(J.t.C89OLE)
                : J.intl.string(J.t.YVub5y),
        l = (0, aM.g)(n?.code);
    return (0, s.jsxs)(nC.A, {
        children: [
            (0, s.jsx)(nC.A.Header, { text: i }),
            (0, s.jsxs)(nC.A.Body, {
                children: [
                    (0, s.jsx)(nC.A.Icon, { expired: !0 }),
                    (0, s.jsx)(nC.A.Info, {
                        expired: !0,
                        title: l?.title ?? J.intl.string(J.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var ak = n(308528),
    aw = n(889227);
function aD(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([k.default], () => k.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === K.elq.ACCEPTING,
        { analyticsLocations: d } = (0, f.Ay)(x.A.INVITE_EMBED),
        c = (0, u.bG)([D.A], () => null != t.inviter && D.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != w.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), ak.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, ag.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, nG._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, ag.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, nG._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            ag.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
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
        I = null != t.inviter ? rN.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(nC.A, {
        children: [
            (0, s.jsx)(nC.A.Header, { text: E }),
            (0, s.jsxs)(nC.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nO.iH,
                        children: [
                            (0, s.jsx)(nC.A.Icon, { user: new aw.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(nC.A.Info, { title: C, onClick: c ? g : void 0, children: I }),
                        ],
                    }),
                    (0, s.jsx)(ep.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
function aO(e) {
    let t,
        n,
        { invite: i, message: l, currentUserId: a, onTransitionToInviteChannel: o, onAcceptInstantInvite: d } = e,
        c = a === l.author.id,
        m = i.state === K.elq.ACCEPTING,
        h = (0, u.bG)([w.A], () => (null != i.channel ? w.A.getChannel(i.channel.id) : null), [i]);
    ev()(null == h || h.isPrivate(), "must be a private channel");
    let { analyticsLocations: g } = (0, f.Ay)(x.A.INVITE_EMBED),
        p = null != h,
        A = r.useCallback(() => {
            let e = "noop";
            p ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, ag.he)(
                    {
                        invite: i,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: (0, nG._U)(i.code, l.id),
                    },
                    g,
                );
        }, [i, l, g, p, o, d]);
    if (null == h) {
        if (null == i.channel) return (0, s.jsx)(aN, {});
        (h = (0, aC.OY)(i.channel)),
            (n = i.channel?.name),
            (t = null != i.channel && null != i.channel.recipients ? i.channel.recipients : []);
    } else {
        (t = h.recipients.reduce((e, t) => {
            let n = U.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, nn.m1)(h, U.default, D.A));
        let e = U.default.getCurrentUser();
        p && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(s8.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : J.intl.string(J.t.LJpTRF));
    let E = J.intl.string(J.t.XpeFYr),
        C = "active";
    p && ((E = J.intl.string(J.t.cEnaWx)), (C = "secondary"));
    let I = J.intl.string(J.t["3p3/BK"]);
    return (
        c && (I = J.intl.string(J.t.qmtuXE)),
        (0, s.jsxs)(nC.A, {
            children: [
                (0, s.jsx)(nC.A.Header, { text: I }),
                (0, s.jsxs)(nC.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nO.iH,
                            children: [
                                (0, s.jsx)(nC.A.Icon, { channel: h, onClick: p ? A : void 0 }),
                                (0, s.jsx)(nC.A.Info, {
                                    title: n,
                                    onClick: p ? A : void 0,
                                    children: (0, s.jsx)(nC.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(ep.$, { onClick: A, loading: m, disabled: p, variant: C, text: E, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
var aU = n(821418),
    aG = n(340837);
let aV = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, aG.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, aU.Q.IS_GUEST_INVITE)
    );
};
var aB = n(517905);
function aH(e) {
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
        _ = null != E ? (0, aC.OY)(E) : null,
        j = null != d,
        N = null != _,
        T = null != _ && _.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, aU.Q.IS_GUEST_INVITE),
        y = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(K.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, nG._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [M, P] = r.useState(!1),
        k = r.useCallback(() => P(!1), []),
        w = r.useRef(null),
        D = (0, u.bG)([n7.Ay], () => aV([n7.Ay], m)),
        O = r.useCallback(() => {
            P(!0), (0, ag.Pq)(L, "show profile", R);
        }, [L, R]),
        U = r.useCallback(() => {
            let e = "noop";
            j ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, ag.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, nG._U)(m.code, h.id),
                    },
                    R,
                );
        }, [m, h, R, j, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(aN, {});
        (d = av.DY(m.guild)).premiumTier = m.guild.premium_tier ?? K.TVA.NONE;
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
    })({ isVoiceChannel: y, isOwnInvite: A, isGuest: S, isHubGuild: b, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: nO.FA,
            children: [
                (0, s.jsx)(aB.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: M,
                    onRequestClose: k,
                    targetElementRef: w,
                    children: () => (0, s.jsx)(nC.A.GuildName, { guild: d, ref: w }),
                }),
                (0, s.jsx)("span", {
                    className: nO.E3,
                    children: (0, s.jsx)(sF.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(iy.m, {
                asContainer: !0,
                text: J.intl.string(J.t["/FeTK6"]),
                children: (0, s.jsx)(tZ.m, { size: "md", color: "currentColor", className: nO.G }),
            })),
        y
            ? ((i = (0, s.jsx)(nC.A.Channel, { channel: _ })),
              (t = (0, s.jsxs)("span", {
                  className: nO.FA,
                  children: [
                      J.intl.format(J.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: nO.E3,
                          children: (0, s.jsx)(sF.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != I && I > 0)
              ? (t = (0, s.jsx)(nC.A.Data, { members: C, membersOnline: I }))
              : N && (t = (0, s.jsx)(nC.A.Channel, { channel: _, guild: d })),
        (0, s.jsxs)(nC.A, {
            children: [
                (0, s.jsx)(nC.A.GuildSplash, { guild: d }),
                (0, s.jsx)(nC.A.Header, { text: G, extra: l }),
                (0, s.jsxs)(nC.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nO.iH,
                            children: [
                                (0, s.jsx)(nC.A.Icon, { guild: d }),
                                (0, s.jsx)(nC.A.Info, { title: i, onClick: O, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: nO.UD,
                            children: (0, s.jsx)(ep.$, {
                                onClick: U,
                                loading: v,
                                variant: "active",
                                fullWidth: y,
                                disabled: !D,
                                text: y
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
                            (0, s.jsx)("div", { className: nO.me }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: J.intl.format(J.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, e_.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("56377"),
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
var aF = n(890856),
    az = n(9994),
    aY = n(461888),
    aW = n(179283),
    aK = n(123213),
    aJ = n(86376),
    aq = n(42780),
    aZ = n(897288),
    aX = n(14712);
function aQ(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        [c, m] = r.useState(!0),
        [h, g] = r.useState(!1),
        p = t.state === K.elq.ACCEPTING,
        A = (0, u.bG)([s2.A], () => s2.A.useReducedMotion),
        { analyticsLocations: E } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, nG._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let C = (0, az.oO)(t),
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
        ? (0, s.jsx)(aN, {})
        : (0, s.jsxs)(aF.s, {
              className: o()(aX.Gg, { [aX.vk]: h && c }),
              onClick: I,
              style: _,
              "aria-label": J.intl.string(J.t.dcl9MQ),
              children: [
                  (0, s.jsxs)("div", {
                      className: aX.uY,
                      ref: d,
                      children: [
                          (0, s.jsx)(aq.J$, { profile: C, className: aX.vK }),
                          (0, s.jsx)(aq.CG, { profile: C }),
                          (0, s.jsx)(aJ.A, { profile: C }),
                          (0, s.jsx)(aW.P, { profile: C, className: aX.rb }),
                          (0, s.jsx)(aZ.A, {
                              guild: null != t.guild ? (0, av.DY)(t.guild) : null,
                              roles: t.roles,
                              className: aX.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, s.jsx)("div", {
                            className: aX.Se,
                            children: (0, s.jsx)(ih.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: J.intl.string(J.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, s.jsxs)("div", {
                      className: o()(aX.qr, { [aX.iK]: h }),
                      children: [
                          h && c ? (0, s.jsx)("div", { className: aX.D7 }) : null,
                          (0, s.jsx)("div", {
                              className: o()(aX.z8, { [aX.it]: h && c }),
                              children: (0, s.jsx)("div", {
                                  className: aX.UD,
                                  children: (0, s.jsx)(a$, {
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
function a$(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, aY.Ay)(n, aY.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, f.Ay)(x.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, ag.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, nG._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(aK.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var a0 = n(414798);
function a1(e) {
    let t,
        n,
        i,
        { author: l, banned: r, channelId: a } = e,
        o = (0, u.bG)([k.default], () => k.default.getId()),
        d = rN.Ay.useName(l),
        c = o === l.id,
        m = (0, u.bG)([w.A, ti.A], () => {
            let e = w.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sc.UJ)(e),
                    n = ti.A.can(K.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return ti.A.can(K.xBc.SEND_MESSAGES, e);
        });
    return (
        c
            ? ((t = J.intl.string(J.t["F/OLvL"])), (i = J.intl.string(J.t.C89OLE)))
            : ((i = J.intl.string(J.t.YVub5y)),
              r
                  ? (t = J.intl.string(J.t["57nBty"]))
                  : null != d && m
                    ? ((t = J.intl.formatToPlainString(J.t["9Akp1s"], { username: d })),
                      (n = (0, s.jsx)(ep.$, {
                          onClick: function () {
                              let { id: e } = l,
                                  t = `@${rN.Ay.getUserTag(l, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              l5._.dispatchToLastSubscribed(K.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != a && a0.A.startTyping(a);
                          },
                          text: J.intl.string(J.t.P8tvKG),
                      })))
                    : (t = J.intl.string(J.t["SMJr+a"]))),
        (0, s.jsxs)(nC.A, {
            children: [
                (0, s.jsx)(nC.A.Header, { text: i }),
                (0, s.jsxs)(nC.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: nO.iH,
                            children: [
                                (0, s.jsx)(nC.A.Icon, { expired: !0 }),
                                (0, s.jsx)(nC.A.Info, {
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
var a2 = n(616356);
function a3(e) {
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
            [a2.A],
            () => (null != n && null != n.target_user ? a2.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [a2.A],
            () => (null != n && null != n.target_user ? a2.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, f.Ay)(x.A.INVITE_EMBED);
    (0, e4.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, nG._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aT.yV.STREAM && null != n.target_user && null != h,
        E =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ev()(null != n, "Invite cannot be null");
    let { target_type: C, target_user: I } = n;
    ev()(C === aT.yV.STREAM && null != I, "invalid streaming invite");
    let v = i === I.id,
        _ = n.state === K.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, ag.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, nG._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(aN, {});
        l = (0, av.DY)(n.guild);
    }
    let T = null != n.channel ? (0, aC.OY)(n.channel) : null,
        S = rN.Ay.getName(I),
        y = A || (!E && N),
        b = J.intl.string(J.t.I6JG46),
        L = "active";
    N && !E
        ? ((t = v ? J.intl.string(J.t.oBLoZJ) : J.intl.formatToPlainString(J.t["0QJmA+"], { name: S })),
          (b = J.intl.string(J.t.Wdi5E1)))
        : ((L = "active"),
          A && ((b = J.intl.string(J.t.Q1W99y)), (L = "secondary")),
          (t = v ? J.intl.string(J.t["4hyaHu"]) : J.intl.formatToPlainString(J.t.QmlLEq, { name: S })));
    let R =
        m === l.id && null != T
            ? (0, s.jsx)(nC.A.Channel, { channel: T })
            : J.intl.formatToPlainString(J.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(nC.A, {
        children: [
            (0, s.jsx)(nC.A.Header, { text: J.intl.string(J.t["wS+5Wb"]) }),
            (0, s.jsxs)(nC.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: nO.iH,
                        children: [
                            (0, s.jsx)(nC.A.Icon, { guild: l, onClick: N && E ? j : void 0 }),
                            (0, s.jsx)(nC.A.Info, { title: t, onClick: N && E ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(ep.$, { onClick: j, loading: _, disabled: y, variant: L, text: b }),
                ],
            }),
        ],
    });
}
var a4 = n(459192),
    a6 = n(364522),
    a5 = n(52074),
    a7 = n(725613),
    a9 = n(85451),
    a8 = n(145497),
    oe = n(481947),
    ot = n(607567),
    on = n(198183);
function oi(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, nn.Ay)(i),
        o = (0, u.bG)([tB.A], () => tB.A.getGuild(i.guild_id), [i.guild_id]),
        { voiceStates: d } = (0, u.cf)(
            [ot.Ay],
            () => ({ voiceStates: null != i.guild_id ? ot.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        c = r.useMemo(
            () => [...d.filter((e) => e.voiceState.selfStream), ...d.filter((e) => !e.voiceState.selfStream)],
            [d],
        ),
        m = (0, u.bG)([a7.A], () => a7.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != m || null == i.guild_id || a7.A.hasRequestedStartTimes(i.guild_id) || (0, a5.U)(i.guild_id);
    }, [i, m]);
    let h = r.useRef(null),
        g = r.useRef(null),
        A = r.useCallback(() => {
            let e = h.current,
                t = g.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    r.useLayoutEffect(() => {
        A();
    }, [c, A]);
    let E = r.useCallback(
            (e) => {
                null != h.current && h.current.removeEventListener("scroll", A),
                    (h.current = e),
                    null != e && e.addEventListener("scroll", A);
            },
            [A],
        ),
        { analyticsLocations: C } = (0, f.Ay)(x.A.INVITE_EMBED, x.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        I = (0, nG._U)(t.code, n.id),
        v = d.some((e) => e.voiceState.selfStream);
    (0, e4.A)({
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
    let _ = r.useCallback(() => {
            (0, iX.iN)(i.id);
        }, [i.id]),
        j = r.useCallback(() => {
            l(),
                (0, ag.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: I,
                        number_of_users_in_channel: d.length,
                    },
                    C,
                );
        }, [t, n, C, I, d.length, l]);
    return (0, s.jsxs)("div", {
        className: on.kL,
        children: [
            (0, s.jsxs)("div", {
                className: on.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: on.yW,
                        children: [
                            (0, s.jsx)(r0.H, {
                                className: on.p,
                                color: d.length > 0 ? tP.A.colors.TEXT_FEEDBACK_POSITIVE : tP.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, s.jsx)(a4.u, {
                                title: `${o?.name} / ${a}`,
                                body: "",
                                assetSize: 24,
                                asset: null != o ? (0, s.jsx)(a8.Ay, { guild: o, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, s.jsx)(eR.D, {
                                    className: on.HA,
                                    onClick: _,
                                    children: (0, s.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != m ? (0, s.jsx)(a9.z, { entry: { start: m }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            c.length > 0
                ? (0, s.jsxs)("div", {
                      className: on.Ao,
                      children: [
                          (0, s.jsx)(a6.Ip, {
                              ref: E,
                              className: on.JD,
                              children: c.map((e) =>
                                  (0, s.jsx)(
                                      oe.Ay,
                                      {
                                          className: on.Eq,
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
                          (0, s.jsx)("div", { ref: g, className: on.wH }),
                      ],
                  })
                : (0, s.jsx)("div", {
                      className: on.p$,
                      children: (0, s.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: J.intl.string(J.t.zSqdrS),
                      }),
                  }),
            (0, s.jsx)("div", {
                className: on.TB,
                children: (0, s.jsx)(ep.$, {
                    onClick: j,
                    icon: r0.H,
                    variant: "active",
                    fullWidth: !0,
                    text: J.intl.string(J.t.gpqgah),
                }),
            }),
        ],
    });
}
function ol(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)([w.A, ti.A], () => {
            let e = w.A.getChannel(r);
            return null != e && ti.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, u.bG)([tB.A], () => null != tB.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(aQ, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(oi, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var os = n(652896),
    or = n(834757),
    oa = n(427358),
    oo = n(370714);
function od(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, t3.gU)(n, i),
        a = (0, nn.Ay)(n);
    return (0, s.jsxs)(eR.D, {
        onClick: l,
        className: o()(oo.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: oo.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(p.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(lK.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(t2._, { className: oo.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var oc = n(562153),
    ou = n(713517),
    om = n(297413),
    oh = n(155775);
function og(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(n5.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eR.D, {
                ...r,
                innerRef: a,
                className: oh.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tf.eu, {
                        src: t.getAvatarURL(n, (0, tE.FT)(tE._3.SIZE_24)),
                        className: oh.my,
                        "aria-label": t.username,
                        size: tE._3.SIZE_24,
                    }),
                    (0, s.jsx)(p.E, {
                        className: oh.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(om.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var op = n(581448),
    oA = n(824078);
function ox(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(of, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(lB.Y, { renderPopout: () => o(i), ...a });
}
function of(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, ou.A)(a);
    return (
        r.useEffect(() => {
            l?.(d);
        }, [l, d]),
        (0, s.jsx)("div", {
            ref: a,
            className: o()(oA.popover, op.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(a6.Ip, {
                className: op.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        og,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: oc.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oE = n(531657);
let oC = { mass: 1, tension: 170, friction: 26 };
function oI(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, ib.z)(() => ({ x: 0, y: 0, scale: 1, config: oC }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(iT.animated.div, {
            ref: a,
            className: o()(oE.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, iT.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: oE.my,
                            children: (0, s.jsx)(iy.m, {
                                text: oc.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tf.eu, {
                                    src: (function (e, t, n) {
                                        let i = n7.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, G.xT)(i);
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
                c && (0, s.jsx)(ov, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function ov(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, ou.A)(e),
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
    return (0, s.jsx)(ox, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(oE.my, oE.k2),
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
var o_ = n(692236);
function oj(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = av.DY(t.guild));
    let m = null != t.channel ? (0, aC.OY)(t.channel) : null;
    ev()(null != c, "Voice Invite Embed must be used in context of a guild."),
        ev()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, u.bG)([ti.A, w.A], () => {
            let e = w.A.getChannel(m.id);
            return null == e || ti.A.canBasicChannel(K.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, u.bG)([ot.Ay], () => (h ? ot.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
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
        })({ currentUserId: (0, u.bG)([k.default], () => k.default.getId()), author: n.author, voiceStates: g }),
        C = (0, u.bG)([tB.A], () => null != tB.A.getGuild(c.id), [c.id]),
        I = (0, u.bG)([ec.A], () => ec.A.getVoiceChannelId() === m.id, [m.id]),
        v = (0, u.bG)([n7.Ay], () => aV([n7.Ay], t), [t]),
        _ = t.state === K.elq.ACCEPTING,
        { analyticsLocations: j } = (0, f.Ay)(x.A.INVITE_EMBED),
        N = (0, nG._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)([a2.A, oa.A], () => {
                if ((0, af.G4)(t) && null != t.target_user) {
                    let e = a2.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = a2.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = oa.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (oa.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = a2.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        S = (0, or.AO)(T),
        y = null != T,
        b = r.useCallback(() => {
            let e = C ? "transition" : "accept";
            C ? l() : a(),
                (0, ag.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: S?.id ?? void 0,
                        stream_key: null != T ? (0, os._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, C, S, T, g.length, l, a]),
        L = r.useCallback(() => {
            C ? (0, iX.iN)(m.id) : a({ autoJoin: !1 }),
                eH.default.track(K.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: C,
                    application_id: S?.id ?? null,
                    stream_key: null != T ? (0, os._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, c.id, t.code, N, C, S, T, g.length, j, a]);
    (0, e4.A)({
        name: e2.ImpressionNames.VOICE_INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: y,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([s2.A], () => s2.A.useReducedMotion),
        M = r.useRef(null),
        [P, D] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        O = (0, u.bG)([oa.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = oa.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (oa.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        U = r.useMemo(() => tp().throttle(D, 20), [D]);
    r.useEffect(() => () => U.cancel(), [U]);
    let G = r.useCallback(
            (e) => {
                if (R) return;
                let t = M.current?.getBoundingClientRect();
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
            U.cancel(), D({ percentX: 0, percentY: 0, proximity: 0 });
        }, [U]);
    return (0, s.jsxs)("div", {
        ref: M,
        className: o_.kL,
        onMouseMove: G,
        onMouseLeave: V,
        children: [
            (0, s.jsx)("div", { className: o_.ys }),
            (0, s.jsx)("div", { className: o_.r$, style: { "--custom-number-of-dots": 20 } }),
            (0, s.jsxs)("div", {
                className: o_.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: o()(o_.Qs, { [o_.tE]: 0 === O.length }),
                        children: [
                            (0, s.jsx)(od, { channel: m, guild: c, onClick: L }),
                            (0, s.jsxs)("div", {
                                className: o_.WD,
                                children: [
                                    (0, s.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: (0, s.jsx)(lK.A, { lineClamp: 3, delay: 150, children: A }),
                                    }),
                                    null != E
                                        ? (0, s.jsx)(p.E, {
                                              variant: "text-sm/normal",
                                              className: o_.$B,
                                              children: (0, s.jsx)(lK.A, { delay: 150, children: E }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    O.length > 0
                        ? (0, s.jsx)("div", {
                              className: o_.RE,
                              children: (0, s.jsx)(oI, {
                                  ref: d,
                                  guildId: c.id,
                                  channelId: m.id,
                                  members: O,
                                  motion: P,
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)("div", {
                className: o_.xk,
                children: (0, s.jsx)(ep.$, {
                    onClick: b,
                    loading: _,
                    variant: I ? "secondary" : "active",
                    fullWidth: !0,
                    disabled: !v,
                    text: I ? J.intl.string(J.t["3xjX0U"]) : J.intl.string(J.t.gpqgah),
                }),
            }),
        ],
    });
}
function oN(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [aI.A],
            () => ({ invite: aI.A.getInvite(t), inviteError: aI.A.getInviteError(t) }),
            [t],
        ),
        o = null == l,
        d = (0, nG._U)(t, n.id);
    r.useEffect(() => {
        o && ag.Ay.resolveInvite(t, void 0, { inviteInstanceId: d });
    }, [t, o, d]);
    let c = l ?? { state: K.elq.RESOLVING, code: "" },
        { analyticsLocations: m } = (0, f.Ay)(),
        h = (0, u.bG)([tB.A], () => (l?.guild != null ? tB.A.getGuild(l.guild.id) : null), [l]),
        g = (0, u.bG)([w.A, ti.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = w.A.getChannel(e);
            return null != t && ti.A.canBasicChannel(K.hVb.VIEW_CHANNEL, t);
        }, [l]),
        p = (0, u.bG)([k.default], () => k.default.getId()),
        A = (0, u.bG)([aA.Ay], () => aA.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]),
        x = () => {
            null != c.channel && ag.Ay.transitionToInviteSync(c);
        },
        E = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == h && l?.guild != null ? av.DY(l.guild) : h;
            (0, aE.g)({ guild: n, isMember: null != h, analyticsLocations: m }) === aE.W.PROCEED &&
                ag.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        C = (0, s.jsx)(aH, {
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: E,
            currentUserId: p,
            guild: h,
            invite: c,
            message: n,
        });
    switch (c.state) {
        case K.elq.RESOLVING:
            C = (0, s.jsx)(aN, {});
            break;
        case K.elq.EXPIRED:
        case K.elq.BANNED:
            C = (0, s.jsx)(a1, { banned: c.state === K.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case K.elq.ERROR:
            C = (0, s.jsx)(aP, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, af.On)(c)) {
                case af.Xd.GROUP_DM:
                    C = (0, s.jsx)(aO, {
                        onTransitionToInviteChannel: x,
                        onAcceptInstantInvite: E,
                        currentUserId: p,
                        invite: c,
                        message: n,
                    });
                    break;
                case af.Xd.FRIEND:
                    C = (0, s.jsx)(aD, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, af.G4)(c)) {
                        if (null != c.channel && (0, aC.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = aj({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (g)
                                if (e.enabled) {
                                    C = (0, s.jsx)(ol, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    C = (0, s.jsx)(oj, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: E,
                                        guild: h,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        C = (0, s.jsx)(a3, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            currentUserId: p,
                            message: n,
                            guild: h,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, af.ly)(c)) {
                        C = (0, s.jsx)(ax.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != h,
                            onAcceptInstantInvite: E,
                            onTransitionToInviteChannel: x,
                        });
                        break;
                    }
                    if ((0, af.oK)(c)) {
                        C = (0, s.jsx)(aL, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, aC.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = aj({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (g)
                            if (e.enabled) {
                                C = (0, s.jsx)(ol, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                C = (0, s.jsx)(oj, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: E,
                                    guild: h,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, ap.v)(c) &&
                        (C = (0, s.jsx)(aQ, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: E,
                            isMemberOfGuild: null != h,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(rS.A, { section: K.JJy.INVITE_LINK, children: C });
}
var oT = n(266620),
    oS = n(860227),
    oy = n(853811),
    ob = n(381438),
    oL =
        (((l = {}).DISPLAY = "display"),
        (l.BLOCK_UNDERAGE = "block_underage"),
        (l.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        l),
    oR = n(351405),
    oM = n(193018);
function oP(e) {
    let { visibility: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(oM.Xy, oM.cp),
        children: [
            (0, s.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                children: J.intl.string(J.t.pkq6Vq),
            }),
            (0, s.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: (function (e) {
                    switch (e) {
                        case oL.BLOCK_UNDERAGE:
                            return J.intl.string(J.t.GhU4yl);
                        case oL.BLOCK_CHANNEL_RESTRICTION:
                            return J.intl.string(J.t.B99UMJ);
                        default:
                            return J.intl.string(J.t.GhU4yl);
                    }
                })(t),
            }),
        ],
    });
}
var ok = n(666176),
    ow = n(272984);
let oD = (e) => {
    var t;
    let { channel: n, message: i, hideParty: l } = e,
        { analyticsLocations: r } = (0, f.Ay)(x.A.INVITE_EMBED),
        a =
            null != i.application
                ? nI.Ay.createFromServer(i.application)
                : null != i.activity && null != i.activity.party_id && (0, ow.pH)(i.activity.party_id)
                  ? ok.HT
                  : void 0,
        { data: o } = (0, ek.YY)(i.application?.id),
        d = o ?? a,
        c = (0, u.bG)([U.default], () => U.default.getCurrentUser()?.nsfwAllowed),
        m =
            ((t = i.application?.content_classification),
            null == t || (0, oy.U1)({ type: oy.fS.MINIMAL, data: t }) !== ob.Y.ADULT
                ? "display"
                : !0 !== c
                  ? "block_underage"
                  : n.isPrivate() || n.nsfw
                    ? "display"
                    : "block_channel_restriction");
    switch (m) {
        case oL.DISPLAY:
            if (null == d) return null;
            return (0, s.jsx)(oR.P0, { app: d, channel: n, message: i, hideParty: l, analyticsLocations: r });
        case oL.BLOCK_UNDERAGE:
        case oL.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(oP, { visibility: m });
        default:
            return null;
    }
};
var oO = n(503002),
    oU = n(123791);
function oG(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, ek.YY)(t);
    return null == i ? null : (0, s.jsx)(oV, { app: i, guildId: n });
}
function oV(e) {
    let { app: t, guildId: i } = e;
    (0, oU.C)(t.id);
    let l = r.useCallback(() => {
        (0, e_.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("22946"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(ep.$, {
        size: "sm",
        onClick: l,
        icon: oO.U,
        text: J.intl.format(J.t.XDRjs5, { appName: t.name }),
    });
}
var oB = n(394839),
    oH = n(96782),
    oF = n(930390),
    oz = n(861986),
    oY = n(343552),
    oW = n(581619),
    oK = n(416620);
let oJ = [K.Auw.GIFV],
    oq = 15 * sP.A.Millis.MINUTE,
    oZ = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    oX = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, nW.e5.IS_ANIMATED);
        return null != i && null != l && (nK.bp.test(n) || (a && (nK.P8.test(n) || nK.p4.test(n))))
            ? (0, s.jsx)(rr.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: oK.jj })
            : null;
    };
class oQ extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, nG._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && oZ.has(e));
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
            case sD.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(t1, { messageId: e.id, channelId: t.id });
                break;
            case sD.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(eE, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: oK.od, children: i });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: l } = t;
                  if (n === tM.I.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, s.jsx)(
                                oN,
                                { code: i, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                i,
                            )
                          : null;
                  if (n === tM.I.TEMPLATE) return (0, s.jsx)(nU, { code: i }, i);
                  if (n === tM.I.EVENT) return (0, s.jsx)(nR.A, { code: i }, i);
                  if (n === tM.I.CHANNEL_LINK) return (0, s.jsx)(sY, { code: i, message: e }, i);
                  if (n === tM.I.APP_DIRECTORY_PROFILE) return (0, s.jsx)(nN, { code: i, message: e }, i);
                  else if (n === tM.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: r } = (0, e1.N)(l);
                      return (0, s.jsx)(eg, { applicationId: i, message: e, referrerId: t, customId: n, linkId: r }, i);
                  } else if (n === tM.I.GUILD_PRODUCT) return (0, s.jsx)(nL, { code: i }, i);
                  else if (n === tM.I.SERVER_SHOP) return (0, s.jsx)(tW, { guildId: i }, i);
                  else if (n === tM.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, s.jsx)(
                          lO,
                          {
                              guildId: t,
                              skuId: e,
                              channel: n,
                              customNavigateToSocialLayerStorefront: () => {
                                  (0, lE.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: t });
                              },
                          },
                          i,
                      );
                  } else if (n === tM.I.SOCIAL_LAYER_STOREFRONT_APP) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, s.jsx)(lD, { applicationId: t, skuId: e, channel: n }, i);
                  } else if (n === tM.I.QUESTS_EMBED) return (0, s.jsx)(iY.A, { questId: i }, i);
                  else if (n === tM.I.APP_DIRECTORY_STOREFRONT) return (0, s.jsx)(eQ, { appId: i, message: e }, i);
                  else if (n === tM.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, eC.u)(i);
                      return null == t
                          ? null
                          : (0, s.jsx)(e$, { appId: t.applicationId, skuId: t.skuId, message: e }, i);
                  } else if (n === tM.I.APP_OAUTH2_LINK) return (0, s.jsx)(e6, { applicationId: i, message: e }, i);
                  else if (n === tM.I.COLLECTIBLES_SHOP) return null;
                  else if (n === tM.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
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
                          className: oK.zv,
                          children: (0, s.jsx)(ah, {
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
            : (0, s.jsx)(oF.A, {
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
        if (0 === d.length || e.isPoll() || (0, sL._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, K.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, nW.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, K.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, id.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, K.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sO.iW)(e.originalItem, t);
        }
        let E = m.map((s) => {
            let a = (0, nW.aG)(s),
                o = {
                    message: e,
                    item: (0, oH.rC)(s, l),
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
                    renderAudioComponent: x ? oT.SX : oT.Nj,
                    renderImageComponent: oT.Cr,
                    renderVideoComponent: oT.I1,
                    renderPlaintextFilePreview: oT.R6,
                    renderGenericFileComponent: oT.UB,
                    onPlay: (e, n, i) => {
                        eH.default.track(K.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: s.content_type,
                            flags: s.flags,
                            size: s.size,
                            duration: i,
                        });
                    },
                    gifFavoriteButton: oX(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sM.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, s.jsx)(oB.A, { items: E });
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
            u = (0, sO.sC)(e, i, o, d);
        if (e.type === K.Auw.GIFT) return null;
        let m = oJ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            nx.G.Provider,
            {
                value: (0, oY.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, s.jsx)(th.Ay, {
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
            : (null != e.url && "" !== e.url ? nY.A.parseEmbedTitleWithoutLinks : nY.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === K.Auw.RICH
            ? nY.A.parse(t, !0, {
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
                      oW.z.has(t.type) ||
                      (0, sk.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, K.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === nB.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !nH.has(t.content_type);
                              })
                          )) ||
                      (0, sk.V)(t) ||
                      (0, sk.G8)(t)
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
                          c = (0, sO.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  sQ,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: oX,
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
                                ls.Ay,
                                {
                                    type: ls.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: lH.LL, renderVideoComponent: lH.$o, renderLinkComponent: lH.bU };
                  if (
                      t.type === K.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sw.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  ar,
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
        return (0, s.jsx)(sq.N, {
            gifAutoPlay: t,
            getGifFavButton: oX,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(nF.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, s.jsx)(oD, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== K.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tm, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, sU.ec)(e)
            ? (0, s.jsx)(rs.A, {
                  message: e,
                  onDeleteMessage: () => {
                      A.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lU.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(sd, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(K.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(sy, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(K.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sp.default.extractTimestamp(e.id) >= oq)
        )
            return (0, s.jsx)("div", { className: oK.xM, children: J.intl.string(J.t.ma8Rs0) });
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
                    className: oK.IX,
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
                      className: oK.IX,
                      children: J.intl.string(J.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(oG, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(rl, {
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
                : (0, s.jsx)(io, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(ld, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === K.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(lf, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, tJ.KM)(e)
            ? (0, s.jsx)(tQ, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(iz, { message: e, poll: t, className: oK.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tL, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, iW.Mn)(e, this.props.channel)) return (0, s.jsx)(ll, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, iW.Mn)(e, this.props.channel)) return (0, s.jsx)(nA, { message: e });
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
            S = this.renderMediaObscureNotice(t),
            y = this.renderPoll(t, n),
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
            null == y &&
            null == b &&
            null == L &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, oS.XL)(t),
                  className: o()(e, oK.kL),
                  children: [
                      L,
                      b,
                      I,
                      y,
                      R,
                      d,
                      c,
                      j,
                      u,
                      m,
                      h,
                      S,
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
function o$(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r } = e,
        a = (0, u.bG)([k.default], () => k.default.getId()),
        o = ne.X6.useSetting(),
        d = ne.hD.useSetting(),
        m = ne.rs.useSetting() && !(0, sg.A)(e.message),
        h = ne.jW.useSetting() && !1 !== e.renderReactions,
        g = ne.kt.useSetting(),
        p = (0, u.bG)([sR.A], () => null == n.guild_id || sR.A.canChatInGuild(n.guild_id), [n]),
        A = (0, u.bG)([nz.A], () => null != n.guild_id && nz.A.isLurking(n.guild_id), [n]),
        x = (0, u.bG)([n7.Ay, U.default], () => {
            let e = U.default.getCurrentUser();
            return (null != n.guild_id && null != e ? n7.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: f, canManageMessages: E } = (0, u.cf)(
            [ti.A],
            () => ({
                canAddNewReactions: p && ti.A.can(K.xBc.ADD_REACTIONS, n),
                canManageMessages: ti.A.can(K.xBc.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        C = (0, nT.ix)(n.guild_id),
        [, I] = (0, nS.c)(n.guild_id),
        v = (0, sc.Id)(n),
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
        S = (0, sV.A)({
            channel: n,
            canChat: p,
            renderReactions: h,
            canAddNewReactions: f,
            isLurking: A,
            communicationDisabled: I,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: C,
        }),
        y = (0, t6.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        b = (0, nJ.A)(n?.id),
        L = (0, ic.A)(i),
        R = (0, tq.P)(i),
        M = (0, sG.z)(n),
        P = (0, sD._f)(i.id, i.channel_id),
        w = (0, tK._R)();
    return (0, s.jsx)(oQ, {
        canSuppressEmbeds: _,
        canDeleteAttachments: j,
        ...S,
        disableReactionReads: !!T || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && M,
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
        showListsAndHeaders: y,
        showMaskedLinks: y,
        shouldHideMediaOptions: b,
        enabledContentHarmTypeFlags: R,
        ctaButtonType: P,
        shouldAgeVerify: w,
    });
}
let o0 = (e) => {
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
        c = ne.X6.useSetting(),
        u = ne.hD.useSetting(),
        m = ne.rs.useSetting(),
        h = ne.kt.useSetting(),
        g = (0, t6.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, nJ.A)(n?.id),
        A = (0, tq.P)(t),
        x = (0, sD._f)(t.id, t.channel_id),
        f = (0, ic.A)(t);
    return (0, s.jsx)(oQ, {
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
