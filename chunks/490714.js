n.d(t, { iV: () => dm, OC: () => dg, Ay: () => dh }), n(938796);
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
    g = n(192308),
    p = n(640238),
    A = n(834730),
    x = n(493336),
    f = n(793574),
    E = n(688810),
    I = n(735991);
n(321073), n(134528), n(947204);
var C = n(485845),
    v = n(379834),
    _ = n(836480),
    j = n(825860),
    N = n(950305),
    T = n(795816),
    y = n(574152),
    S = n(522305),
    b = n(361926),
    k = n(751765),
    L = n(113854),
    R = n(207371),
    P = n(205184),
    M = n(773669),
    D = n(495544),
    O = n(734057),
    U = n(994500),
    G = n(967198),
    w = n(287809),
    B = n(486020),
    V = n(204776),
    H = n(725606),
    F = n(572211),
    z = n(500060),
    Y = n(432017),
    K = n(687966),
    W = n(104171),
    J = n(652215),
    q = n(375708),
    X = n(695320);
function Z(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: X.i,
        children: [
            (0, s.jsx)(W.Ay, { guildId: n, users: t, max: 6, size: W.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var $ = n(354287),
    Q = n(138175),
    ee = n(112150),
    et = n(574660),
    en = n(768349),
    ei = n(734093);
function el(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: a, onView: o } = e,
        { name: d, bot: c } = (t = (0, Q.b)(t)),
        m = c?.id,
        h = (0, I.Ag)(t),
        g = B.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = (0, ee.f)(t),
        C = (0, u.bG)([D.default], () => l ?? D.default.getId(), [l]),
        { analyticsLocations: v } = (0, E.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: k } = (0, H.w)(t.id),
        P = (0, y.A)(),
        M = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        U = null != m && h && M,
        G = k && h,
        w = (0, R.x)(t),
        V = (0, et.F)(t),
        z = (0, et.t)(t),
        Y = r.useMemo(() => {
            let e = [];
            return (
                h
                    ? w
                        ? e.push({
                              label: q.intl.string(q.t.RscU7I),
                              trackingArea: $.kY.PLAY,
                              onClick() {
                                  L.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (G &&
                              e.push({
                                  label:
                                      null == j
                                          ? q.intl.string(q.t.RscU7I)
                                          : N
                                            ? q.intl.string(q.t.DPfdsq)
                                            : q.intl.string(q.t.sqe0hj),
                                  trackingArea: $.kY.PLAY,
                                  onClick() {
                                      (0, T.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          embeddedActivitiesManager: P,
                                          customId: i,
                                          referrerId: C,
                                          analyticsLocations: v,
                                      });
                                  },
                                  disabled: N,
                              }),
                          !G &&
                              U &&
                              e.push({
                                  label: q.intl.string(q.t.JeK1Wg),
                                  trackingArea: $.kY.PLAY,
                                  onClick() {
                                      (0, S.Q)({
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
        }, [h, z, w, t.id, G, U, j, N, _, P, i, C, v, m]),
        K = h ? (0, s.jsx)(er, { app: t }) : (0, s.jsx)(es, { app: t });
    return (0, s.jsx)(F.h, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: V,
        bannerAspectRatio: x,
        iconSrc: g,
        info: K,
        actions: Y,
        onClickContent: V,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: o,
            guildId: O.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function es(e) {
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
            return 0 === l ? null : q.intl.format(q.t["6IW6Wi"], { guildCount: e.format(l) });
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
                    children: [(0, s.jsx)(_.Q, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function er(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([G.A], () => G.A.getGuildId() ?? void 0, []),
        a = (0, P.s)(t.id),
        o = (0, u.yK)([w.default, U.A], () => {
            let e = [];
            for (let [t, n] of a.entries()) {
                if (t >= 5) break;
                let i = w.default.getUser(n.author_id),
                    l = U.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [a]),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(Z, {
                    activityUsers: o,
                    guildId: l,
                    activityText: q.intl.formatToPlainString(q.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, k.CZ)(e) === v.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(j.Y, { size: "xxs", color: "currentColor" }), q.intl.string(q.t.TsWCdW)],
                });
            let e = i > 0 ? q.intl.format(q.t.z8EAJW, { count: i }) : q.intl.string(q.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(N.n, { size: "xxs", color: "currentColor" }), e] });
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
    getQueryId: J.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : ea.A.getOne(e, t)),
    load: (e, t) => (0, eo.Py)(e, t),
});
var ec = n(309010),
    eu = n(933958),
    em = n(782091);
function eh(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: r } = e,
        a = t?.bot?.id,
        o = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, I.Ag)(t),
        c = null != a && d && o,
        { analyticsLocations: m } = (0, E.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ec.A], () => ec.A.getChannelId()),
        g = (0, em.et)(h),
        p = (0, u.bG)([eu.Ay], () => {
            if (null == h) return;
            let e = eu.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([eu.Ay], () => eu.Ay.getCurrentEmbeddedActivity()),
        x = (0, y.A)(),
        C = g === em.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        _ = null != n ? n : i.customId,
        j = [];
    (0, R.x)(t)
        ? j.push({
              label: q.intl.string(q.t.RscU7I),
              trackingArea: $.kY.PLAY,
              onClick() {
                  L.A.launchFrame({ applicationId: t.id });
              },
          })
        : (C &&
              j.push({
                  label:
                      null == p ? q.intl.string(q.t.RscU7I) : v ? q.intl.string(q.t.DPfdsq) : q.intl.string(q.t.sqe0hj),
                  trackingArea: $.kY.PLAY,
                  onClick() {
                      (0, T.su)({
                          channelId: h ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          embeddedActivitiesManager: x,
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
                  label: q.intl.string(q.t.JeK1Wg),
                  trackingArea: $.kY.PLAY,
                  onClick() {
                      (0, S.Q)({ appId: t.id, botId: a, analyticsLocations: m, customId: _, referrerId: l });
                  },
              }));
    let N = (0, et.F)(t);
    return (0, s.jsx)(F.h, {
        actions: j,
        onClickContent: N,
        header: t.name,
        iconSrc: B.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: en.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: _,
            guildId: O.A.getChannel(r.channel_id)?.guild_id,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function eg(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a } = i,
        { analyticsLocations: o } = (0, E.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: d, error: c } = ed(t.id, r);
    return (0, I.Ag)(t)
        ? null != r && null == c && null != d
            ? (0, s.jsx)(E.f5, {
                  value: o,
                  children: (0, s.jsx)(eh, { application: t, customId: a, customLink: d, referrerId: l, message: n }),
              })
            : (0, s.jsx)(E.f5, {
                  value: o,
                  children: (0, s.jsx)(el, {
                      app: t,
                      linkType: en.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      message: n,
                  }),
              })
        : null;
}
var ep = n(821609),
    eA = n(379257),
    ex = n(847599),
    ef = n(36149);
function eE(e) {
    let { channelId: t } = e,
        n = (0, ef.b8)(),
        i = (0, ef.i2)(),
        l = q.intl.string(q.t["9KiIz6"]),
        a = q.intl.string(q.t["/nicWo"]),
        o = r.useCallback(() => {
            eA.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ex.UT)(ex.Im.RETRY, t);
        }, [t]);
    return (0, s.jsx)(ep.$, { variant: "primary", text: n ? l : a, onClick: o, disabled: !i });
}
var eI = n(107766),
    eC = n(780964),
    ev = n(766075);
function e_(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            (0, eI.nk)() || (0, ev.openUserSettings)(eC.X.FAMILY_CENTER_PANEL), (0, ex.UT)(ex.Im.CONNECT_TO_TEEN, t);
        }, [t]);
    return (0, s.jsx)(ep.$, { variant: "primary", text: q.intl.string(q.t.n8a49k), onClick: n });
}
var ej = n(284009),
    eN = n.n(ej),
    eT = n(664121),
    ey = n(34188),
    eS = n(408278),
    eb = n(173936),
    ek = n(691540),
    eL = n(857250),
    eR = n(97483),
    eP = n(939249),
    eM = n(996759),
    eD = n(800342),
    eO = n(163437),
    eU = n(185438),
    eG = n(97352),
    ew = n(652676),
    eB = n(67480),
    eV = n(328968),
    eH = n(174459),
    eF = n(957565),
    ez = n(943775),
    eY = n(997997),
    eK = n(658575),
    eW = n(376374),
    eJ = n(435220),
    eq = n(352883);
let eX = (0, u.UT)([eB.A, eV.A, eG.A], {
        getQueryId: J.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eB.A.get(e),
                n = eV.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eG.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            eN()(null != e, "skuId is null"), await (0, eD.QB)(e);
        },
    }),
    eZ = (0, u.UT)([eB.A], {
        getQueryId: J.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eB.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            eN()(null != e && null != t, "appId is null"), await (0, eD.JI)(t);
        },
    });
function e$(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eK.G)(l),
        [o, d, c, m] = (0, u.yK)([ew.A, O.A], () => {
            let e = (0, ez.A)(t, 45),
                n = O.A.getBasicChannel(i.channel_id)?.guild_id;
            return [ew.A.getStoreLayout(l), ew.A.getFetchStatus(l), n, e];
        }, [t, l, i.channel_id]);
    r.useEffect(() => {
        d === ew.N.NONE && (0, eM.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        p = o.otps.length,
        A = r.useMemo(
            () =>
                h > 0 && p > 0
                    ? q.intl.formatToPlainString(q.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? q.intl.formatToPlainString(q.t.GSfibA, { count: h })
                      : p > 0
                        ? q.intl.formatToPlainString(q.t.j7Go5A, { count: p })
                        : q.intl.string(q.t.rMA98g),
            [p, h],
        );
    if (!a) return null;
    function x() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(e0, {
        appName: t.name,
        title: q.intl.formatToPlainString(q.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${J.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eY.K)(l, eY.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            x(),
                eH.default.track(J.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: l, area: "app_icon" });
        },
        children: (0, s.jsx)("div", {
            className: eq.mZ,
            children: (0, s.jsx)(ep.$, {
                onClick: function () {
                    x(),
                        eH.default.track(J.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        });
                },
                text: q.intl.string(q.t.kRvlKJ),
            }),
        }),
    });
}
function eQ(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eX(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eZ(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([O.A], () => O.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, ez.A)(t, 45), [t]),
        p = (0, eK.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eU.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === J.Puh.SUBSCRIPTION,
        E = !!f && (0, eO.bg)(o.flags);
    function I() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
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
                    function r() {
                        n.onClose(), I();
                    }
                    return null != e && null != a
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: E ? "user" : "guild",
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
        v = f
            ? E
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(N.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          q.intl.string(q.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eT.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          q.intl.string(q.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === v && (v = void 0);
    let _ = () => {
        eH.default.track(J.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: t.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, s.jsx)(e0, {
        appName: t.name,
        title: o.name,
        description: v,
        link: `${location.protocol}//${location.host}${J.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, eY.K)(t.id, eY.C.SKU_EMBED, i);
        },
        iconSrc: h,
        onIconClick: () => {
            I(),
                eH.default.track(J.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: t.id,
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
                        C(),
                            eH.default.track(J.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: t.id,
                                sku_id: o.id,
                                area: "view_details",
                            });
                    },
                    text: q.intl.string(q.t.DXYfjO),
                }),
                f
                    ? null != d
                        ? (0, s.jsx)(eW.rc, {
                              onClick: A,
                              appId: t.id,
                              subscriptionType: E ? "user" : "guild",
                              skuId: o.id,
                              icon: ey.U,
                              onHasClicked: _,
                              subscriptionPlan: d,
                              state: x,
                          })
                        : (0, s.jsx)(ep.$, { variant: "primary", text: q.intl.string(q.t.uuzaAK), onClick: C })
                    : (0, s.jsx)(eW.$P, { appId: t.id, sku: o, icon: ey.U, onHasClicked: _ }),
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
                            (0, s.jsx)(ey.U, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eF.p5 &&
                        (0, s.jsx)(eS.K, {
                            "aria-label": q.intl.string(q.t.WqhZss),
                            icon: () => (0, s.jsx)(eb.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eF.C)(l, () => {
                                    (0, ek.P0)((0, eL.o)(q.intl.string(q.t["L/PwZf"]), eR.Ck.SUCCESS)), o();
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
                                (0, s.jsx)(eP.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: eq.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: eq.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(A.E, {
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
var e1 = n(853811),
    e2 = n(381438),
    e3 =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i),
    e6 = n(627363),
    e5 = n(130951);
function e4(e) {
    let { visibility: t, variant: n } = e,
        i = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "game_invite":
                            return q.intl.string(q.t.pkq6Vq);
                        case "app_embed":
                            return q.intl.string(q.t.bZBN64);
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
                            return t === e3.BLOCK_UNDERAGE ? q.intl.string(q.t.GhU4yl) : q.intl.string(q.t.B99UMJ);
                        case "app_embed":
                            return t === e3.BLOCK_UNDERAGE ? q.intl.string(q.t.LPOzxB) : q.intl.string(q.t.NIZyKq);
                        default:
                            return "";
                    }
                })(n, t),
            [n, t],
        );
    return (0, s.jsxs)("div", {
        className: e5.E,
        children: [
            (0, s.jsx)(A.E, { variant: "text-xs/semibold", color: "text-default", children: i }),
            (0, s.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
        ],
    });
}
function e9(e) {
    let { applicationId: t, channel: n, variant: i, children: l } = e,
        { data: r } = (0, e6.YY)(t);
    return null == r
        ? null
        : (0, s.jsx)(e7, { contentClassification: r?.contentClassification, channel: n, variant: i, children: l(r) });
}
function e7(e) {
    let t,
        { contentClassification: n, channel: i, variant: l, children: r } = e,
        a =
            ((t = (0, u.bG)([w.default], () => w.default.getCurrentUser()?.nsfwAllowed)),
            null == n || (0, e1.U1)({ type: e1.fS.MINIMAL, data: n }) !== e2.Y.ADULT
                ? "display"
                : !0 !== t
                  ? "block_underage"
                  : i.isPrivate() || i.nsfw
                    ? "display"
                    : "block_channel_restriction");
    switch (a) {
        case e3.DISPLAY:
            return r;
        case e3.BLOCK_UNDERAGE:
        case e3.BLOCK_CHANNEL_RESTRICTION:
            return (0, s.jsx)(e4, { visibility: a, variant: l });
        default:
            return null;
    }
}
var e8 = n(562708),
    te = n(139286);
function tt(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, te.x)({
                type: e8.ImpressionTypes.VIEW,
                name: e8.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, V.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(E.f5, {
              value: i,
              children: (0, s.jsx)(el, { app: t, linkType: en.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var tn = n(778492),
    ti = n(534514),
    tl = n(285796),
    ts = n(857182),
    tr = n(506774),
    ta = n(228366),
    to = n(576705),
    td = n(812930);
let tc = "ChannelFollowingBumpChannels",
    tu = new Set(),
    tm = new Set();
class th extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(D.default, O.A, to.A, w.default), (tu = new Set(tr.w.get(tc)));
    }
    shouldShowBump(e) {
        return tm.has(e);
    }
}
let tg = new th(ta.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tu.has(t)) return !1;
        let l = O.A.getChannel(t),
            s = w.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === J.rbe.GUILD_ANNOUNCEMENT &&
                (0, td.A)(n) &&
                to.A.can(J.xBc.SEND_MESSAGES, l) &&
                (r || to.A.can(J.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), J.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tm.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tm.has(t.id) && c.Lt(Number(t.flags), J.pr7.CROSSPOSTED) && tm.delete(t.id);
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
        tu.add(t), tr.w.set(tc, tu), tm.clear();
    },
});
var tp = n(419056),
    tA = n(676544);
let tx = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tg], () => tg.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            ts.A.dismissPublishBump(n), (0, tp.A)(t, n);
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
                              children: q.intl.string(q.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: tA.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eP.D, { onClick: l, children: q.intl.string(q.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eP.D, {
                              onClick: a,
                              children: (0, s.jsx)(tl.a, { size: "xs", color: "currentColor", className: tA.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(A.E, {
                      color: "text-muted",
                      className: tA.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eP.D, { onClick: o, children: q.intl.string(q.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tf = n(175671),
    tE = n(735438),
    tI = n.n(tE),
    tC = n(239947),
    tv = n(403581),
    t_ = n(97808),
    tj = n(778712),
    tN = n(520117),
    tT = n(793943),
    ty = n(763754),
    tS = n(973654),
    tb = n(467135),
    tk = n(644235),
    tL = n(153469),
    tR = n(693227),
    tP = n(312633);
function tM(e) {
    return e.map((e) => `#${e}`);
}
function tD(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tb.ko)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: tP.kL,
              children: [
                  (0, s.jsx)(tO, { message: t }),
                  (0, s.jsx)(ep.$, {
                      text: q.intl.string(q.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          eH.default.track(J.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tT.nf)(tT.HP.CUSTOM_THEME, { from: tT.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tM(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tS.GQ)((0, tk.PC)(n.base_theme));
                      },
                  }),
              ],
          });
}
function tO(e) {
    var t, n, i;
    let { message: l } = e,
        { sharedClientTheme: a } = l,
        o = (0, ty.Ay)(l),
        d = r.useMemo(
            () =>
                (0, tE.once)(() => {
                    (0, te.x)({ type: e8.ImpressionTypes.VIEW, name: tC.I.CUSTOM_THEME_SHARE, properties: {} });
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
        u = r.useMemo(() => (void 0 === a ? "" : (0, tL.V9)(tM(a.colors), a.gradient_angle ?? 0)), [a]);
    return void 0 === a
        ? null
        : (0, s.jsxs)("div", {
              className: tP.pS,
              ref: c,
              children: [
                  (0, s.jsx)("div", { className: tP.sl, style: { background: `${u}` } }),
                  (0, s.jsxs)("div", {
                      className: tP.Ix,
                      children: [
                          (0, s.jsxs)(ti.D, {
                              variant: "heading-md/semibold",
                              className: tP.qP,
                              children: [q.intl.string(tR.default.KSBBpC), " ", (0, s.jsx)(tv.t, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tP.Tb,
                              children:
                                  ((t = `${q.intl.format(tR.default.fQPSEf, { username: "__USERNAME__" })}`),
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
                                                        className: tP.H,
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
var tV = n(172218),
    tH = n(575593),
    tF = n(318254),
    tz = n(825484),
    tY = n(289873),
    tK = n(44120),
    tW = n(821925),
    tJ = n(652165),
    tq = n(428262),
    tX = n(580630),
    tZ = n(427262),
    t$ = n(662388),
    tQ = n(4227),
    t0 = n(298072),
    t1 = n(993408),
    t2 = n(646101),
    t3 = n(642160),
    t6 = n(841702),
    t5 = n(466459),
    t4 = n(623373),
    t9 = n(38405);
class t7 extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        t9.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var t8 = n(878112),
    ne = n(722258),
    nt = n(828614),
    nn = n(561769),
    ni = n(540737),
    nl = n(927813);
let ns = 10 * nl.A.Millis.MINUTE,
    nr = new (class {
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
    na = new Set(),
    no = new Map(),
    nd = null;
function nc(e) {
    let t = no.get(e);
    return null != t && Date.now() - t < ns;
}
var nu = n(347722),
    nm = n(61750),
    nh = n(202541),
    ng = n(591445);
function np() {
    return (0, t6.b5)(), null;
}
function nA(e) {
    let { product: t, skuId: n, tab: i, channel: l, largeGiftButton: a } = e,
        { analyticsLocations: o } = (0, E.Ay)(),
        d = (0, u.bG)([w.default], () => w.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = r.useRef(!1);
    r.useEffect(() => {
        if (m.current || !(0, t4.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        e > -1 && (0, t0.n)(t, e), (m.current = !0);
    }, [t, n]);
    let h = (0, t0.Q)(t),
        g = (0, t4.B1)(t) ? (t.variants[h] ?? t) : t,
        p = g.skuId,
        { isPurchased: A } = (0, t5.h)(g),
        x = (0, u.bG)([tQ.A], () => tQ.A.hasPreviouslyFetched || null != tQ.A.fetchError),
        f = !c || x,
        I = c && A,
        C = (0, u.bG)([w.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = w.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (w.default.getUser(t) ?? void 0) : void 0;
        }),
        v = (0, nu.X)(g),
        _ = r.useCallback(() => {
            (0, ne.B)({ skuId: p, tab: i, analyticsLocations: o, showGoToShop: !0 });
        }, [p, i, o]),
        j = (0, t4.Ab)(g),
        N = r.useCallback(() => {
            j
                ? (0, tJ.B4)({
                      skuId: p,
                      analyticsLocations: o,
                      onComplete: (e) => {
                          (0, t$.gB)(),
                              (0, nm.A)({
                                  product: g,
                                  analyticsLocations: o,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tw.gs.ORB,
                              });
                      },
                  })
                : (0, tK.A)({
                      skuId: p,
                      analyticsLocations: o,
                      onClose: (e) => {
                          e && (0, t$.gB)();
                      },
                  });
        }, [g, p, j, o]),
        T = null != d && tq.Ay.canUseShopDiscounts(d),
        y = (0, t1.G0)(g),
        S = (0, t4.$K)({ product: g, hasShopDiscount: T }),
        b = (0, t4.CW)({ product: g, hasShopDiscount: T }),
        k = f && !I && !y && (j ? null != b : null != S),
        L =
            k && j && null != b
                ? q.intl.format(q.t.JC15qj, {
                      orbPrice: b.amount,
                      orbIconHook: () => (0, s.jsx)(tF.C, { className: ng.fN, size: "sm", color: "currentColor" }),
                  })
                : k && null != S
                  ? q.intl.formatToPlainString(q.t["cNSL/j"], { price: (0, tX.$g)(S.amount, S.currency) })
                  : void 0,
        R = (0, s.jsx)(ep.$, { variant: "secondary", onClick: _, text: q.intl.string(q.t.KLBTgF), fullWidth: !0 }),
        P = k ? (0, s.jsx)(ep.$, { variant: a ? "secondary" : "primary", onClick: N, text: L, fullWidth: !0 }) : null,
        M =
            l.isDM() && null != C
                ? q.intl.formatToPlainString(q.t.YwV901, { username: tZ.Ay.getName(C) })
                : l.isGroupDM()
                  ? q.intl.string(q.t.qCmNFr)
                  : void 0,
        D = v
            ? (0, s.jsx)(t8.A, {
                  primary: !0,
                  fullWidth: a,
                  fullWidthLabel: M,
                  product: t,
                  selectedVariantIndex: h,
                  giftRecipient: C,
                  giftingOrigin: nh.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        className: ng.kL,
        children: [
            c && (0, s.jsx)(np, {}),
            (0, s.jsx)("div", {
                className: ng.VH,
                children: (0, s.jsx)(nn.v3.Provider, {
                    value: {
                        productOverride: t,
                        flattenProductVariants: !0,
                        prioritizedCurrency: j ? nn.Hi.ORBS : nn.Hi.FIAT,
                    },
                    children: (0, s.jsx)(nt.A, {
                        skuId: n,
                        cardClassName: ng.Nr,
                        hideWishlistButton: !0,
                        hidePrimaryCTA: !0,
                        hideSecondaryCTA: !0,
                        onClickCard: _,
                    }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: ng.zH,
                children: [(0, s.jsxs)(tz.e, { wrap: !1, fullWidth: !0, children: [R, P, !a && D] }), a && D],
            }),
        ],
    });
}
let nx = { rootMargin: "200px" };
function nf(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t3.I)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tW.A], () => tW.A.getFetchStateForSku(e.skuId)),
        [a, o] = r.useState(!1),
        d = (0, tV.B)(
            r.useCallback((e) => {
                e.isIntersecting && o(!0);
            }, []),
            nx,
            "loading" === i && !a,
        );
    return (r.useEffect(() => {
        var t;
        a &&
            "loading" === i &&
            !("" === (t = e.skuId) || na.has(t) || nc(t)) &&
            !(na.size >= 50) &&
            (0, ni.jn)(t) &&
            (na.add(t),
            (function e(t) {
                null == nd &&
                    (nd = setTimeout(() => {
                        (nd = null),
                            (function () {
                                for (let e of [...na]) (nc(e) || !(0, ni.jn)(e)) && na.delete(e);
                                if (0 === na.size) return;
                                let t = [];
                                for (let e of na) {
                                    if (t.length >= 50 || !nr.tryTake()) break;
                                    t.push(e),
                                        na.delete(e),
                                        (function (e) {
                                            if ((no.set(e, Date.now()), no.size > 2e3)) {
                                                let e = no.keys().next().value;
                                                null != e && no.delete(e);
                                            }
                                        })(e);
                                }
                                t.length > 0 && (0, ni.tu)({ skuIds: t }),
                                    na.size > 0 && e(Math.max(nr.getMsUntilAvailable(), 300));
                            })();
                    }, t));
            })(300));
    }, [a, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nc(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: d,
                  className: ng.kL,
                  children: (0, s.jsx)("div", { className: ng.dc, children: (0, s.jsx)(tY.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            (0, t4.YW)(t) !== tH.R.PROFILE_FRAME &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(nA, { ...e, product: t })
          : null;
}
function nE(e) {
    let { enabled: t, largeGiftButton: n } = (0, t2.i)("CollectiblesShopProductDetailsEmbed");
    return t ? (0, s.jsx)(nf, { ...e, largeGiftButton: n }) : null;
}
function nI(e) {
    return (0, s.jsx)(t7, { children: (0, s.jsx)(nE, { ...e }) });
}
var nC = n(661531),
    nv = n(696986),
    n_ = n(95561),
    nj = n(548118),
    nN = n(250627),
    nT = n(741231),
    ny = n(749314),
    nS = n(71393),
    nb = n(722888),
    nk = n(43136),
    nL = n(575926),
    nR = n(736132);
function nP(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nS.A], () => nS.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nb.G)(t),
        { listingsLoaded: a } = (0, nN.bb)(t),
        d = (0, nN.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            eH.default.track(J.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, n_.H$)(t) }),
                await (0, nT.A)(J.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, te.A)(
        { type: e8.ImpressionTypes.VIEW, name: e8.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(nR.lm, nR.dc), children: (0, s.jsx)(tY.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nR.lm,
                children: [
                    (0, s.jsx)(nk.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nR.qs,
                        children: [
                            (0, s.jsx)(nL.h, {
                                height: "16px",
                                width: "16px",
                                color: nC.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(ti.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nR.Nl,
                                children: q.intl.string(q.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsx)(ti.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: q.intl.format(q.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nv.h, { size: 4 }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsx)(ny.A, {}),
                    (0, s.jsx)(nv.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nR.kS,
                        children: [
                            (0, s.jsx)(nj.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nR.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: q.intl.format(q.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: q.intl.format(q.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nR.$h,
                                children: (0, s.jsx)(ep.$, { onClick: c, icon: nL.A, text: q.intl.string(q.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nM = n(390248),
    nD = n(282108),
    nO = n(33358),
    nU = n(885574),
    nG = n(987773);
function nw(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eP.D, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: nG.L,
        children: [
            (0, s.jsx)(nU.m, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: nG.m, children: q.intl.string(q.t["2aXnfa"]) }),
        ],
    });
}
var nB = n(974875),
    nV = n(900019);
function nH(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([nV.A], () => nV.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, nB.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(ep.$, { variant: "secondary", text: q.intl.string(q.t["4q1Elf"]), onClick: l, disabled: !i });
}
var nF = n(320448),
    nz = n(713654),
    nY = n(958340),
    nK = n(384231),
    nW = n(959698),
    nJ = n(438729),
    nq = n(375199),
    nX = n(886737),
    nZ = n(699352),
    n$ = n(8455),
    nQ = n(885386),
    n0 = n(540999),
    n1 = n(47167),
    n2 = n(58703),
    n3 = n(427930);
function n6(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: B.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: q.intl.formatToPlainString(q.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class n5 {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : to.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nS.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nY.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, n2.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: n6(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, n1.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: q.intl.formatToPlainString(q.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: n6(h, d) };
    }
}
var n4 = n(66834),
    n9 = n(385648);
async function n7(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = O.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nS.A.getGuild(t))
        try {
            await (0, n9.Z2)(t, { object: J.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, n4.k)(t),
                (l = O.A.getChannel(n));
        } catch {}
    eH.default.track(J.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: O.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nT.A)(J.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var n8 = n(387408),
    ie = n(427209),
    it = n(249847);
function ii() {
    return (0, s.jsxs)("div", {
        className: it.N1,
        children: [
            (0, s.jsx)(ie.A, { size: "xs", className: it.nr, color: nC.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: it.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: q.intl.string(q.t.ToyvLk),
            }),
        ],
    });
}
function il(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new n5(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [O.A, w.default, U.A, to.A, nS.A, nY.A],
            () => l.getForwardInfo(O.A, w.default, U.A, to.A, nS.A, nY.A).footerInfo,
            [l],
            h.A,
        ),
        o = (0, u.bG)([O.A], () => O.A.getChannel(t.messageReference?.channel_id)),
        d = r.useCallback(() => {
            n7(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eP.D, {
              className: it.xQ,
              onClick: d,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: it.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  null == a.originIconUrl && o?.isThread() ? (0, s.jsx)(is, { channel: o }) : null,
                  (0, s.jsx)(A.E, {
                      className: it.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(nF._, { size: "xxs", color: nC.A.colors.TEXT_MUTED }),
              ],
          });
}
function is(e) {
    let { channel: t } = e,
        n = (0, n$.Vp)({ location: "ForwardFooter" }),
        i = r.useMemo(() => (0, nz.gU)(t), [t]);
    return n.enabled && null != i ? (0, s.jsx)(i, { className: it.yl, size: "xs", color: "currentColor" }) : null;
}
function ir(e) {
    let { message: t, snapshot: n, index: i, disableComponentInteractivity: l } = e,
        a = r.useMemo(() => (0, n8.A)(t, n), [t, n]),
        o = nQ.hD.useSetting(),
        d = nQ.rs.useSetting(),
        c = (0, u.bG)([n0.A], () => n0.A.isDeveloper),
        m = (0, nW.U)(),
        h = (0, nK.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nq.A)(a, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
            postProcessor: m ? nX.A : void 0,
        }),
        x = (0, u.bG)([O.A], () => O.A.getChannel(t.channel_id)),
        f = nQ.hH.useSetting();
    return null == x
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: it.kL,
                  children: [
                      (0, s.jsx)("div", { className: it.hD }),
                      (0, s.jsxs)("div", {
                          className: it.Qs,
                          children: [
                              (0, s.jsx)(ii, {}),
                              (0, s.jsx)(nJ.Ay, { message: a, content: g, compact: f }),
                              (0, nZ.A)({
                                  channelMessageProps: { message: a, channel: x, compact: f },
                                  hasSpoilerEmbeds: p,
                                  hasBailedAst: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: l,
                              }),
                              !m && (0, s.jsx)(il, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function ia(e) {
    let { message: t, disableComponentInteractivity: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(ir, { message: t, snapshot: e, index: i, disableComponentInteractivity: n }, i),
        ),
    });
}
var io = n(341662),
    id = n(990078),
    ic = n(890856),
    iu = n(109112),
    im = n(508770),
    ih = n(369606),
    ig = n(409626),
    ip = n(49491),
    iA = n(692969),
    ix = n(738250);
function iE(e) {
    let { gameId: t, sourceUserId: n } = e,
        { gameId: i, gameRecord: l, isLoading: s } = (0, ix.A)({ gameId: t }),
        r = (0, iA.A)({ gameId: t, source: ig.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
        a = (0, ip.A)(l),
        o = null != l && null != r && !s && !a,
        d = l?.getIconURL(80) ?? null,
        c =
            l?.bannerHash != null
                ? (B.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 512, keepAspectRatio: !0 }) ?? null)
                : l?.screenshotUrls != null && l.screenshotUrls.length > 0
                  ? (l.screenshotUrls[0] ?? null)
                  : null;
    return { game: l ?? null, resolvedGameId: i, iconUrl: d, bannerUrl: c, openGameProfile: r, shouldRender: o };
}
var iI = n(880716);
function iC(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            resolvedGameId: l,
            iconUrl: a,
            bannerUrl: d,
            openGameProfile: c,
            shouldRender: u,
        } = iE({ gameId: t, sourceUserId: n }),
        m = r.useCallback(
            (e) => {
                if ((e.stopPropagation(), null == l || null == i)) return;
                (0, ig.trackGameProfileEmbedAction)({
                    gameName: i.name,
                    gameId: l,
                    action: ig.GameProfileEmbedAction.CopyLink,
                });
                let t = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${J.BVt.GAME_PROFILE(l)}`;
                (0, eF.C)(t, () => (0, ek.P0)((0, eL.o)(q.intl.string(q.t["+5kSoW"]), eR.Ck.SUCCESS)));
            },
            [l, i],
        );
    if (!u || null == i || null == c) return null;
    let h = null != d;
    return (0, s.jsxs)(ic.s, {
        className: iI.E6,
        onClick: c,
        "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: i.name }),
        children: [
            h &&
                (0, s.jsxs)("div", {
                    "aria-hidden": !0,
                    className: iI.q5,
                    children: [
                        (0, s.jsx)("div", { className: iI._e, style: { backgroundImage: `url("${d}")` } }),
                        (0, s.jsx)("div", { className: iI.nY }),
                    ],
                }),
            (0, s.jsxs)("div", {
                className: o()(iI.rf, { [iI.F7]: h }),
                children: [
                    null != a
                        ? (0, s.jsx)("img", { src: a, alt: "", className: iI.Kk, draggable: !1 })
                        : (0, s.jsx)("div", {
                              "aria-hidden": !0,
                              className: iI.EU,
                              children: (0, s.jsx)(iu._, { size: "lg", color: "currentColor" }),
                          }),
                    (0, s.jsxs)("div", {
                        className: iI.pq,
                        children: [
                            (0, s.jsx)(ti.D, {
                                variant: "heading-lg/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: i.name,
                            }),
                            null != i.l30Rank &&
                                (0, s.jsx)("div", {
                                    className: iI.k3,
                                    children: (0, s.jsx)(im.E, {
                                        variant: "default",
                                        type: { text: q.intl.formatToPlainString(q.t.ehZXlZ, { rank: i.l30Rank }) },
                                        icon: ih.O,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: iI.o1,
                children: [
                    (0, s.jsx)(id.m, {
                        text: q.intl.string(q.t.WqhZss),
                        ariaHidden: !0,
                        children: (0, s.jsx)(eS.K, {
                            icon: eb.q,
                            variant: "secondary",
                            size: "md",
                            "aria-label": q.intl.string(q.t.WqhZss),
                            onClick: m,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: iI.jR,
                        children: (0, s.jsx)(ep.$, {
                            text: q.intl.string(q.t.ajHoOr),
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            onClick: c,
                            "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: i.name }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var iv = n(743832);
function i_(e) {
    let { gameId: t, sourceUserId: n } = e,
        { game: i, iconUrl: l, bannerUrl: r, openGameProfile: a, shouldRender: o } = iE({ gameId: t, sourceUserId: n });
    return o && null != i && null != a
        ? (0, s.jsxs)(ic.s, {
              className: iv.E6,
              onClick: a,
              "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iv.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: iv.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: iv.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: iv.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: iv.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iv.EU,
                                    children: (0, s.jsx)(iu._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: iv.Qs,
                              children: [
                                  (0, s.jsx)(ti.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: iv.k3,
                                          children: (0, s.jsx)(im.E, {
                                              variant: "default",
                                              type: {
                                                  text: q.intl.formatToPlainString(q.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: ih.O,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eS.K, {
                              icon: nF._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
function ij(e) {
    let { gameId: t, sourceUserId: n } = e,
        { enabled: i, showSmallEmbed: l } = io.A.useConfig({ location: "game_profile_embed" });
    return i
        ? l
            ? (0, s.jsx)(i_, { gameId: t, sourceUserId: n })
            : (0, s.jsx)(iC, { gameId: t, sourceUserId: n })
        : null;
}
var iN = n(643612),
    iT = n(607399),
    iy = n(702841),
    iS = n(529200),
    ib = n(395671),
    ik = n(993748),
    iL = n(212534),
    iR = n(64493);
function iP(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, iy.yK)(
            [iL.A],
            () => [iL.A.getApplication(t), iL.A.isInvalidApplication(t), iL.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, iy.bG)([G.A], () => G.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tV.K)(u),
        h = r.useCallback(() => {
            eH.default.track(J.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: iT.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, ik.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === iL.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eH.default.track(J.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: iT.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(iS.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t.j4KtLa) }),
                  (0, s.jsx)(iS.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: iR.k,
                          children: [
                              (0, s.jsx)(iS.A.Icon, { expired: !0 }),
                              (0, s.jsx)(iS.A.Info, {
                                  expired: !0,
                                  title: q.intl.string(q.t.NaQLEx),
                                  children: q.intl.string(q.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === iL.e.FETCHING
          ? (0, s.jsxs)(iS.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t.m9hXGR) }),
                    (0, s.jsx)(iS.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(el, { app: ib.Ay.createFromServer(i), linkType: en.J.APP_DISCOVERY, onView: h, message: n });
}
var iM = n(229527),
    iD = n(870136),
    iO = n(330075),
    iU = n(412728);
function iG(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nN.Qi)(n, i),
        r = (0, iy.bG)([G.A], () => G.A.getGuildId());
    return ((0, te.A)(
        {
            type: iU.z.VIEW,
            name: e8.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(iO.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var iw = n(484724),
    iB = n(953727);
function iV(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, iB.A)(l),
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
var iH = n(122906),
    iF = n(401755),
    iz = n(195580),
    iY = n(344900);
function iK(e) {
    let { code: t } = e,
        i = (0, u.bG)([iH.A], () => iH.A.getGuildTemplate(t));
    if (null == i || i.state === iF.QB.RESOLVING)
        return (0, s.jsxs)(iS.A, {
            children: [
                (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t.Xj87Yf) }),
                (0, s.jsx)(iS.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === iF.QB.EXPIRED)
        return (0, s.jsxs)(iS.A, {
            children: [
                (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t.C7ZRNw) }),
                (0, s.jsxs)(iS.A.Body, {
                    children: [
                        (0, s.jsx)(iS.A.Icon, { expired: !0 }),
                        (0, s.jsx)(iS.A.Info, { expired: !0, title: q.intl.string(q.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(ep.$, { disabled: !0, variant: "secondary", text: q.intl.string(q.t.W7NTWm) })
        : (0, s.jsx)(ep.$, {
              onClick: () => {
                  (0, g.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("16227"),
                          n.e("78841"),
                          n.e("60361"),
                          n.e("32048"),
                          n.e("99430"),
                          n.e("79864"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("97199"),
                          n.e("16198"),
                          n.e("69771"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === iF.QB.ACCEPTING,
              variant: "active",
              text: q.intl.string(q.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(iS.A, {
        children: [
            (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t.kAvFkO) }),
            (0, s.jsxs)(iS.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iY.iH,
                        children: [
                            (0, s.jsx)(iV, { className: iz.K }),
                            (0, s.jsx)(iS.A.Info, {
                                title: i.name,
                                children: q.intl.format(q.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var iW = n(842241),
    iJ = n(681154),
    iq = n(155718);
let iX = new Set([
    iJ.ContentInventoryEntryType.TOP_ARTIST,
    iJ.ContentInventoryEntryType.TOP_GAME,
    iJ.ContentInventoryEntryType.PLAYED_GAME,
    iJ.ContentInventoryEntryType.WATCHED_MEDIA,
    iJ.ContentInventoryEntryType.LISTENED_SESSION,
    iJ.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var iZ = n(844789),
    i$ = n(857071),
    iQ = n(46054),
    i0 = n(731068),
    i1 = n(619517),
    i2 = n(207133),
    i3 = n(835245),
    i6 = n(844222),
    i5 = n(463930),
    i4 = n(251391),
    i9 = n(601255),
    i7 = n(562819),
    i8 = n(234914),
    le = n(59318),
    lt = n(837528),
    ln = n(754459),
    li = n(967144),
    ll = n(342296),
    ls = n(696451),
    lr = n(218394);
function la(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, iB.A)(l),
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
var lo = n(717125),
    ld = n(376943),
    lc = n(36491),
    lu = n(752755),
    lm = n(461715),
    lh = n(381941),
    lg = n(38208);
function lp(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lm.CI)(e),
                i = (0, iy.bG)([ls.Ay, D.default], () => {
                    let e = D.default.getId();
                    return ls.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, iy.bG)(
                    [lo.A],
                    () => null != n && n?.channelId != null && lo.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(J.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, iy.cf)([lu.A, nS.A, O.A, w.default, G.A], () => {
                    let e = lu.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = nS.A.getGuild(n?.guildId),
                        i = O.A.getChannel(n?.channelId),
                        l = w.default.getUser(e?.author_id),
                        s = G.A.getGuildId(),
                        r = null != i && (0, ld.nc)(i);
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
                    let e = (0, lm.tU)({
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
                        (lu.A.getEmbedFetchState(n.threadId) !== lu.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lc.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, ln.A)(n.id, lh.Fd),
        u = (0, lt.VL)(n, i, c, !0),
        m = nQ.kt.useSetting(),
        h = (0, lr.j)(),
        [g, p] = r.useState(!1),
        [x, E] = r.useState(d?.coverImage == null),
        I = (0, iy.bG)([ls.Ay, w.default], () => ls.Ay.isMember(d?.guildId, w.default.getCurrentUser()?.id), [d]),
        C = (0, iy.bG)([ls.Ay], () => (d?.authorId != null ? ls.Ay.getMember(d.guildId, d.authorId) : null)),
        v = (0, i9.A)(C?.avatarDecoration != null ? C?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [C?.colorString ?? "inherit", C?.colorStrings ?? null, C?.colorRoleId], [C]),
        T = (0, li.gn)(C?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: y } = r.useContext(i6.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        L = r.useCallback(() => {
            p(!1);
        }, [p]),
        R = r.useCallback(async () => {
            null != d &&
                ((0, n_.zV)(J.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: I,
                }),
                d.canAccess
                    ? (0, nT.A)(J.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : I
                      ? (0, nT.A)(J.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await n9.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, I]);
    if (null == d) return null;
    let P = (0, B.F_)({ avatarDecoration: v, size: (0, i7.Te)(tj._3.SIZE_40), canAnimate: S }),
        M = d.user?.getAvatarURL(d.guildId, 40, S);
    function U() {
        y.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, le.ge)(V);
    return (0, s.jsxs)("div", {
        className: lg.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lg.iT,
                onMouseEnter: k,
                onMouseLeave: L,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: q.intl.string(q.t.rIbh8H),
                                  className: o()(lg.xn, { [lg.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, s.jsx)(i8.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: q.intl.string(q.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lg.xn, { [lg.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lg.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eP.D, {
                            onClick: R,
                            children: (0, s.jsx)("div", {
                                className: lg.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lg.BS,
                                    children: [
                                        (0, s.jsx)(la, { color: nC.A.colors.WHITE.css }),
                                        (0, s.jsx)(A.E, {
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
                className: lg.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lg.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lg.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lg.hF, lg.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lg._5,
                        children: [
                            null != d.authorId &&
                                null != M &&
                                (0, s.jsx)(ll.A, {
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
                                            onMouseEnter: U,
                                            onMouseLeave: U,
                                            children: (0, s.jsx)(t_.eu, {
                                                ...e,
                                                ref: a,
                                                size: tj._3.SIZE_40,
                                                src: M,
                                                "aria-label": q.intl.string(q.t.KXz3XB),
                                                avatarDecoration: P,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lg.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lg.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(i4.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lg.Xg,
                                                }),
                                            (0, s.jsx)(eP.D, {
                                                onClick: R,
                                                className: lg.HA,
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
                                            className: lg.wn,
                                            children: q.intl.format(q.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: () =>
                                                    null == d.authorId
                                                        ? (0, s.jsx)(i5.V, {
                                                              name: d.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: lg.fh,
                                                          })
                                                        : (0, s.jsx)(
                                                              ll.A,
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
                                                                      (0, s.jsx)(i5.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: d.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: lg.fh,
                                                                      }),
                                                              },
                                                              (0, i3.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(ep.$, { variant: "primary", onClick: R, text: d.ctaText })
                                : (0, s.jsx)(ep.$, { onClick: R, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lA = n(492230),
    lx = n(68935),
    lf = n(704413),
    lE = n(537039),
    lI = n(711038),
    lC = n(892340),
    lv = n(803306),
    l_ = n(491182),
    lj = n(639288),
    lN = n(10364),
    lT = n(378570),
    ly = n(138298),
    lS = n(761640),
    lb = n(989349),
    lk = n.n(lb),
    lL = n(606049),
    lR = n(943815),
    lP = n(447215),
    lM = n(221314),
    lD = n(237507),
    lO = n(334211),
    lU = n(513653);
let lG = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = w.default.getUser(t),
        u = r.useMemo(() => (i ? (0, lR.A)((0, n2.i$)(lk()(), "LT")) : null), [i]),
        m = (0, lP.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, ty.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_16)) : lU,
        g =
            null != c
                ? q.intl.format(lM.default["+zqXZs"], { username: c.username, onUserClick: m })
                : q.intl.string(lM.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(lO.NB, lO.JZ, u),
        children: [
            (0, s.jsx)(t_.eu, { src: h, size: tj._3.SIZE_16, className: lD.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: lD.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: lD.Ek, children: "\u2022" }),
                    (0, s.jsx)(lL.A, { timestamp: d, className: lD.vE }),
                ],
            }),
        ],
    });
};
var lw = n(167684);
function lB(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new n5(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [O.A, w.default, U.A, to.A, nS.A, nY.A],
            () => l.getForwardInfo(O.A, w.default, U.A, to.A, nS.A, nY.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = O.A.getChannel(t.channel_id),
                n = nS.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ec.A.getCurrentlySelectedChannelId(),
                s = lS.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (ly.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, lT.iN)(i),
                eH.default.track(J.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eP.D, {
              className: lw.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: lw.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: lw.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(nF._, { size: "xxs", color: nC.A.colors.TEXT_MUTED }),
              ],
          });
}
function lV(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, ty.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, ln.A)(e.id, lh.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, lt.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, lt.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(l_.A, {
        childrenExecutedCommand: (0, s.jsx)(lG, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(lj.Ay, {
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
            renderPopout: lN.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(nJ.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: lw.iU,
        author: o,
    });
}
function lH(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, a] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lv.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    a(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = r.useMemo(() => {
            let e = (0, n8.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nQ.hD.useSetting(),
        c = nQ.rs.useSetting(),
        m = (0, u.bG)([n0.A], () => n0.A.isDeveloper),
        h = (0, nK.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nq.A)(o, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        x = (0, u.bG)([O.A], () => O.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: lw.kL,
                  children: (0, s.jsxs)("div", {
                      className: lw.Qs,
                      children: [
                          (0, s.jsx)(lV, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nZ.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: lw.Mf,
                          }),
                          (0, s.jsx)(lB, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function lF(e) {
    let { message: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, s.jsx)(lH, { message: t, snapshot: e, index: n }, n)),
    });
}
var lz = n(302031),
    lY = n(738188),
    lK = n(123292),
    lW = n(239093),
    lJ = n(89453);
function lq(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === lW.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === lW.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eP.D, {
              onClick: () => {
                  (0, g.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("17207"),
                          n.e("75339"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, s.jsx)(e, {
                              classificationId: l,
                              source: lW.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lJ.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: lJ.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: lJ.U1,
                              children: [
                                  (0, s.jsx)(lY.i, { className: lJ.QW, color: nC.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: q.intl.string(q.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: lJ.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: q.intl.format(q.t.eevFb6, { daysAgo: lk()().diff(lk().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: lJ.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: q.intl.string(q.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: lJ.xQ,
                      children: (0, s.jsx)(lK.Q, { text: q.intl.string(q.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var lX = n(349288),
    lZ = n(393033),
    l$ = n(903009);
function lQ(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(lX.Anchor, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("17207"),
                    n.e("75339"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: lW.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: l$.zh,
        children: q.intl.string(q.t.QsqdXC),
    });
}
function l0(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(lX.Anchor, { className: l$.zh, href: t, children: q.intl.string(q.t["8/GdRB"]) });
}
function l1(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case lW.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(lQ, { classificationId: n });
        case lW.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(l0, { learnMoreLink: i });
        default:
            return null;
    }
}
function l2(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(tn.k, { size: "xs", color: nC.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(lY.i, { color: nC.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: l$.Kk, children: n[t] }) : null;
}
function l3(e) {
    let { children: t, theme: n } = e,
        i = { default: l$._y, danger: l$.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function l6(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lZ.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eP.D, {
              className: l$.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: l$.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: l$.U1,
                              children: [
                                  (0, s.jsx)(l2, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: l$.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: q.intl.format(q.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), lk()().diff(lk().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: l$.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(l3, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              l1,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var l5 = n(44724),
    l4 = n(50777),
    l9 = n(319060),
    l7 = n(812282),
    l8 = n(922016),
    se = n(34337),
    st = n(240248),
    sn = n(256449),
    si = n(194004),
    sl = n(148355),
    ss = n(3026),
    sr = n(862482),
    sa = n(847374),
    so = n(964486),
    sd = n(235986),
    sc = n(624793),
    su = n(636537),
    sm = n(639245),
    sh = n(87719),
    sg = n(725807),
    sp = n(750385),
    sA = n(850992),
    sx = n(625494),
    sf = n(698279),
    sE = n(631144),
    sI = n(979132);
function sC(e) {
    eH.default.track(J.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
        location_section: J.JJy.STICKER_POPOUT,
    }),
        (0, sh.e)();
}
function sv(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(sd.A, {
        children: [
            (0, s.jsx)(sl.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(sd.A, {
                direction: sd.A.Direction.VERTICAL,
                justify: sd.A.Justify.CENTER,
                className: sI.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "text-md/semibold", children: (0, s.jsx)(ss.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let s_ = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [a, o, d] = (0, u.yK)(
                [sp.A],
                () => [sp.A.getStickerPack(n.pack_id), !sp.A.hasLoadedStickerPacks, sp.A.isPremiumPack(n.pack_id)],
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
        (0, sn.Sr)(n.pack_id);
        let m = (0, sn.pD)(i),
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
            eH.default.track(J.HAw.OPEN_POPOUT, {
                type: J.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, n_.dI)(e),
            });
        }, [n.pack_id]),
        o || null == a)
            ? (0, s.jsx)(se.Y0, { className: sE.v0 })
            : (0, s.jsxs)(se.Uq, {
                  className: sE.Bm,
                  children: [
                      (0, s.jsx)(ti.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? q.intl.format(q.t.auckXz, { stickerPackName: a.name })
                              : q.intl.format(q.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: sE.pQ,
                          children: c.map((e) => (0, s.jsx)(sl.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: sE.j0,
                              children: (0, s.jsx)(
                                  ep.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: q.intl.string(q.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sx._.dispatchToLastSubscribed(J.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sf.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && sA.bM.setActiveCategoryIndex(i);
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
    sj = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
            [d, c] = r.useState(null),
            [m, h] = r.useState(!1),
            g = w.default.getCurrentUser(),
            p = tq.Ay.canUseCustomStickersEverywhere(g),
            x = (0, u.bG)([nS.A], () => nS.A.getGuild(n.guild_id)),
            f = null != x,
            [E, I] = r.useState(!1),
            [C, v] = r.useState(null),
            _ = r.useMemo(
                () => ({
                    page: null != i.guild_id ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                    section: J.JJy.STICKER_POPOUT,
                }),
                [i.guild_id],
            ),
            { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, n_.dI)(i) }),
            N = { stickerSourceGuild: x, refreshPositionKey: a },
            T = r.useRef(N);
        r.useEffect(() => {
            T.current = N;
        }),
            r.useEffect(() => {
                let { stickerSourceGuild: e } = T.current;
                (async () => {
                    if (null == e || e.features.has(J.GuildFeatures.DISCOVERABLE)) {
                        var t;
                        c(
                            await ((t = n.id),
                            su.Bo.get({ url: J.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, n9.jE)(e.body) : null))
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
        p
            ? (t = f
                  ? y
                      ? q.intl.string(q.t.fZ0DiG)
                      : q.intl.string(q.t["1f6D9m"])
                  : S
                    ? q.intl.string(q.t.yHmoR9)
                    : q.intl.string(q.t.vZaScH))
            : f
              ? ((t = y ? q.intl.string(q.t.jNphpt) : q.intl.string(q.t.lyD5ZW)),
                (b = !0),
                (k = "Custom Sticker Popout (Upsell)"))
              : S
                ? ((t = q.intl.string(q.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
                : ((t = q.intl.format(q.t.hGWuxU, {
                      openPremiumSettings: () => {
                          sC(i), l();
                      },
                  })),
                  (k = "Custom Sticker Popout (Soft Upsell)"));
        let L = !b && !f && S && p;
        if (
            (r.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [m, d]),
            (0, so.Ay)(() => {
                eH.default.track(J.HAw.OPEN_POPOUT, { type: k, ...j });
            }),
            !m)
        )
            return (0, s.jsx)(se.Y0, { className: sE.v0 });
        {
            let e;
            return (0, s.jsxs)(se.Uq, {
                className: sI.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || f) return;
                        l();
                        let e = d.id;
                        try {
                            await n4.A.joinGuild(e), n4.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, s.jsxs)("div", {
                        className: sI.gH,
                        children: [
                            (0, s.jsx)(sv, { description: t, sticker: n }),
                            b &&
                                (0, s.jsx)(sg.A, {
                                    className: sI.lI,
                                    subscriptionTier: nh.pe.TIER_2,
                                    size: sr.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: q.intl.string(q.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            L &&
                                (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: sI.lI,
                                    children: (0, s.jsx)(ep.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: q.intl.string(q.t.riu2R5),
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
                                t = null != d ? sc.GO.createFromDiscoverableGuild(d) : sc.GO.createFromGuildRecord(x);
                            return (0, s.jsxs)("div", {
                                className: sI.tl,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: sI.YW,
                                        children: f ? q.intl.string(q.t.kx6pEG) : q.intl.string(q.t.pDE7Gb),
                                    }),
                                    (0, s.jsx)(sm.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: L,
                                    }),
                                    !f &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(eP.D, {
                                                    onClick: function () {
                                                        a(), I(!E);
                                                    },
                                                    className: sI.wK,
                                                    children: (0, s.jsxs)(sd.A, {
                                                        children: [
                                                            (0, s.jsx)(A.E, {
                                                                className: sI.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: q.intl.string(q.t.vtH5hn),
                                                            }),
                                                            (0, s.jsx)(sa.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: o()(sI.ZB, { [sI.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, s.jsx)(sd.A, {
                                                        wrap: sd.A.Wrap.WRAP,
                                                        align: sd.A.Align.START,
                                                        justify: sd.A.Justify.START,
                                                        className: sI.LX,
                                                        children: e.map((e) =>
                                                            (0, s.jsx)(
                                                                id.m,
                                                                {
                                                                    text: e.name,
                                                                    ...se.Uk,
                                                                    children: (0, s.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: o()(sI.Th, {
                                                                                [sE.vT]: null != C && C !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, s.jsx)(sl.A, {
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
function sN(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(se.Uq, {
        className: sE.Bm,
        children: (0, s.jsx)(sv, {
            sticker: i,
            description: q.intl.format(q.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sC(t);
                },
            }),
        }),
    });
}
let sT = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, sn.Zq)(t, !0);
    return null != r && (0, lx.FD)(r)
        ? (0, s.jsx)(s_, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lx.Xw)(r)
          ? (0, s.jsx)(sj, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == r
                ? (0, s.jsx)(sN, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, s.jsx)(se.Y0, {});
};
var sy = n(76513);
let sS = (0, st.xI)(l9.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sb = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, sn.Zq)(t, i),
            { analyticsLocations: m } = (0, E.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: sy.Zl,
                children: [(0, s.jsx)(l7.s, { size: "xs", color: "currentColor", className: sy.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(E.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: sy.be,
                children: (0, s.jsx)(l8.Y, {
                    align: "center",
                    animation: l8.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(sT, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(id.m, {
                            ...se.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, se.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    n_.Ay.trackWithMetadata(J.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nh.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, si.Tw)(e.format_type),
                                        is_custom: (0, si.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eP.D, {
                                innerRef: l,
                                className: sy.q7,
                                onClick: (e) => {
                                    o(!a), n(e);
                                },
                                tag: "span",
                                children: (0, s.jsx)(sl.A, { isInteracting: i, size: sS, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sk = n(406704),
    sL = n(531142),
    sR = n(140735),
    sP = n(442433),
    sM = n(143413),
    sD = n(935208),
    sO = n(321045),
    sU = n(456874),
    sG = n(707539),
    sw = n(80682),
    sB = n(465364),
    sV = n(805964),
    sH = n(943220),
    sF = n(838541);
function sz(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [U.A],
            () => ({ isBlocked: U.A.isBlockedForMessage(t), isIgnored: U.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sw.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
        () =>
            null != t.content && "" !== t.content
                ? (0, sB.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                : null,
        [t],
    );
    return (0, s.jsxs)("div", {
        className: lO.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: lO.FJ }),
            (0, s.jsx)(sH.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: lO.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: r,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, sV.o)(e, t, n, i, lO.tP, {
                        trailingIconClass: lO._v,
                        leadingIconClass: lO.a5,
                        iconSize: sF.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [a, r ?? (0, s.jsx)("span", { className: lO.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var sY = n(747926),
    sK = n(650583),
    sW = n(74791);
function sJ(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([O.A], () => O.A.getChannel(sD.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(sq, { channel: i, compact: n, isSystemMessage: (0, sM.A)(t) });
}
function sq(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, n1.Ay)(a),
        h = (0, u.bG)([sU.A], () => sU.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([sU.A], () => sU.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([sU.A], () => sU.A.getCount(t.id))),
            (r = (0, sG.JO)(t)),
            t.threadMetadata?.archived
                ? q.intl.string(q.t.ZTo4HS)
                : null == l || 0 === l
                  ? q.intl.string(q.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: q.intl.string(q.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: sW.vE, children: (0, sG.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(sz, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: sW.vE, children: (0, sG.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(sW.GI, { [sW.E]: !d, [sW.E_]: c }) }),
            (0, s.jsx)(eP.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sY.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sK.dh.SPACE || e.key === sK.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sY.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, sP.L3)(e, async () => {
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
                "aria-roledescription": q.intl.string(q.t["8ipxiY"]),
                className: o()(sW.kL, { [sW.og]: c }),
                children: (0, s.jsxs)(sL.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: sW.kq,
                            children: [
                                (0, s.jsx)(sR.A, { children: q.intl.string(q.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: sW.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: sW.lO,
                                    "aria-hidden": !p,
                                    children: (0, sO.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sW.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sX = n(383233),
    sZ = n(834942),
    s$ = n(644447),
    sQ = n(659674),
    s0 = n(998218),
    s1 = n(5095),
    s2 = n(294520),
    s3 = n(320095),
    s6 = n(863439),
    s5 = n(707985),
    s4 = n(730852),
    s9 = n(265422),
    s7 = n(986268);
function s8(e) {
    let { guild: t, channel: n, message: i } = e,
        l = G.A.getGuildId(),
        a = ec.A.getChannelId(l),
        o = r.useCallback(() => {
            eH.default.track(J.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, s9.i)(t.id, n.id),
                s4.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(iS.A.Channel, { channel: n });
    return (0, s.jsx)(iS.A, {
        children: (0, s.jsxs)(iS.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: iY.iH,
                    children: [
                        (0, s.jsx)(iS.A.Icon, { guild: t }),
                        (0, s.jsx)(iS.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: iY.FA,
                                children: [
                                    q.intl.format(q.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: iY.E3,
                                        children: (0, s.jsx)(s7.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: iY.UD,
                    children: (0, s.jsx)(ep.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? q.intl.string(q.t["7vb2cc"]) : q.intl.string(q.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function re(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = O.A.getChannel(l),
        a = nS.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && to.A.can(J.xBc.VIEW_CHANNEL, r) && to.A.can(J.xBc.CONNECT, r)
        ? (0, s.jsx)(s8, { guild: a, channel: r, message: n })
        : null;
}
var rt = n(789645),
    rn = n(298236),
    ri = n(953756),
    rl = n(564107),
    rs = n(503556),
    rr = n(143517);
function ra(e) {
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
        [m, h] = (0, ri.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(rl.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(rn.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(ri.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(ri.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(rs.O0, rr.k, rr.z, { [rs.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eP.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: rs.PP,
                                                  onClick: c,
                                                  "aria-label": q.intl.string(q.t.GT3fNz),
                                                  children: (0, s.jsx)(rt.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, iZ.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ro = n(451988),
    rd = n(261958),
    rc = n(212245),
    ru = n(775602),
    rm = n(62583),
    rh = n(956549),
    rg = n(550151),
    rp = n(392054),
    rA = n(853390),
    rx = n(290863),
    rf = n(403362),
    rE = n(811024),
    rI = n(360469),
    rC = n(212242);
let rv = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, lr.j)(),
        s = (0, u.bG)([ru.Ay], () => ru.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new ro.IX();
            return (
                e.start(a ? 15 * nl.A.Millis.SECOND : nl.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nl.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, rA.fU)(n)
    );
});
rv.displayName = "ActivityRuntimeCounter";
let r_ = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, E.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, rc.p)(),
        m = (0, u.bG)([O.A], () => O.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([D.default], () => D.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: I,
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
        C = p?.userIds,
        v = (0, u.yK)(
            [w.default],
            () =>
                Array.from(C ?? [])
                    .map((e) => w.default.getUser(e))
                    .filter(rf.Vq),
            [C],
        ),
        _ = (0, u.bG)([rx.A], () => {
            if (null == C) return null;
            for (let e of C) {
                let t = rx.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, C]),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new ib.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rI.Gl), e;
        }, [n]),
        T = (0, rg.vG)({ userId: g, channelId: i, application: N }),
        y = null == p,
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
                                text: s ? q.intl.string(q.t.RscU7I) : q.intl.string(q.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, rE.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: q.intl.string(q.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : q.intl.string(q.t.f41E1g) };
                        if (null != n && n !== rg.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case rg.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = q.intl.string(q.t.hHGrWz);
                                    break;
                                case rg.Gy.ACTIVITY_AGE_GATED:
                                    e = q.intl.string(q.t["4WuFRE"]);
                                    break;
                                case rg.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = q.intl.string(q.t.uGDCcw);
                                    break;
                                case rg.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = q.intl.string(q.t.UXoQTp);
                                    break;
                                case rg.Gy.CHANNEL_FULL:
                                    e = q.intl.string(q.t.rZfiNq);
                                    break;
                                case rg.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = q.intl.string(q.t.w5SAps);
                                    break;
                                case rg.Gy.NO_CHANNEL:
                                case rg.Gy.NO_GUILD:
                                case rg.Gy.NO_USER:
                                case rg.Gy.IS_AFK_CHANNEL:
                                    e = q.intl.string(q.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: T, currentEmbeddedActivity: x, channel: m }),
        b = r.useId(),
        k = null != I && I.isLaunching && I.componentId === b,
        L = async () => {
            eH.default.track(J.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                is_activity_start: y,
                cta: "Play",
            }),
                y
                    ? await (0, rh.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                          commandOrigin: rp.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, rm.A)({
                          applicationId: p.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: d,
                          componentId: b,
                      });
        },
        R = S.disabled ? q.intl.string(q.t.JBnc7N) : q.intl.string(q.t.cX9uLZ),
        P = (0, et.F)(N, () => {
            eH.default.track(J.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        M = B.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let U = v.length,
        G = _?.timestamps?.start ?? _?.created_at,
        V = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case J.$pd.STREAMING:
                    return { text: q.intl.formatToPlainString(q.t.tyCw2q, { count: n }), Icon: z.o };
                case J.$pd.LISTENING:
                    return { text: q.intl.formatToPlainString(q.t["2l8yka"], { count: n }), Icon: Y.T };
                default:
                    return { text: q.intl.formatToPlainString(q.t.yJj035, { count: n }), Icon: K._ };
            }
        })({ activity: _, activityUsersCount: U }),
        H = [
            {
                label: S.text,
                trackingArea: $.kY.PLAY,
                onClick: L,
                disabled: S.disabled,
                disabledReason: t,
                submitting: k,
            },
        ];
    return (0, s.jsx)(F.h, {
        header: q.intl.string(q.t.pkq6Vq),
        title: n.name,
        iconSrc: M,
        info: (0, s.jsx)("div", {
            className: rC.QR,
            children: y
                ? (0, s.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: R })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: rC.oL,
                                  children: [
                                      null != G &&
                                          (0, s.jsxs)("div", {
                                              className: rC.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: rC.y9,
                                                      children: (0, s.jsx)(V.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(rv, { start: G }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(rC.DT, rC.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(rd.u, { size: "xxs", color: "currentColor" }),
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
                          U > 0 && (0, s.jsx)(Z, { activityUsers: v, guildId: l, activityText: V.text }),
                      ],
                  }),
        }),
        actions: H,
        onClickContent: P,
        trackingConfig: {
            id: n.id,
            linkType: en.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: y,
        },
    });
});
var rj = n(164664),
    rN = n(439401),
    rT = n(657044),
    ry = n(863574),
    rS = n(707606),
    rb = n(456412),
    rk = n(429913),
    rL = n(242874),
    rR = n(499454),
    rP = n(165191),
    rM = n(928550),
    rD = n(976860),
    rO = n(871123),
    rU = n(317560),
    rG = n(30793),
    rw = n(189081);
function rB(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, iB.A)(i),
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
var rV = n(738533),
    rH = n(45938),
    rF = n(615396),
    rz = n(936504),
    rY = n(820284),
    rK = n(674378),
    rW = n(598429),
    rJ = n(979604);
function rq(e) {
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
        A = (0, u.bG)([rw.A], () => rw.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, u.bG)([eB.A], () => null != f && !eB.A.didFetchingSkuFail(f));
    return null != A && (0, rK.XZ)(A)
        ? (0, s.jsx)(rJ.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : E
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(rW.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function rX(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return q.intl.string(q.t.RWouSQ);
    if (e.premium && !n) return q.intl.string(q.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, tX.$g)(i.amount, i.currency);
        else return q.intl.string(q.t.QQsaCc);
    return q.intl.string(q.t.RWouSQ);
}
var rZ = n(257727),
    r$ =
        (((l = r$ || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function rQ(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(rZ.nM, t),
        children: [
            (0, s.jsx)(rT._, { size: "md", color: "currentColor", className: rZ.Kk }),
            q.intl.string(q.t["7eicAO"]),
        ],
    });
}
function r0(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rZ.nM, n),
        children: [(0, s.jsx)(tv.t, { size: "md", color: "currentColor", className: rZ.Kk }), rX(t)],
    });
}
function r1(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rZ.EQ, n), children: t.getDisplaySalePercentage() });
}
function r2(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(rZ.I8, n), children: rX(t, !1) });
}
function r3(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: rX(t) });
}
function r6(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(rZ.nM, n),
        children: [(0, s.jsx)(r1, { sku: t }), (0, s.jsx)(r2, { sku: t }), (0, s.jsx)(r3, { sku: t })],
    });
}
function r5(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: q.intl.string(q.t.QQsaCc) });
}
class r4 extends r.PureComponent {
    static Types = r$;
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
                return (0, s.jsx)(r5, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(rQ, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(r0, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(r6, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(r3, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(r5, { className: t });
            case 3:
                return (0, s.jsx)(r0, { sku: n, className: o()(rZ.OB, t) });
            case 2:
                return (0, s.jsx)(r6, { sku: n, className: o()(rZ.dk, t) });
            default:
                return (0, s.jsx)(r3, { className: o()(rZ.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(r5, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rZ.nM,
                            children: [(0, s.jsx)(r3, { sku: i }), (0, s.jsx)(r1, { sku: i })],
                        }),
                        (0, s.jsx)(r2, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(r3, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(rZ.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rZ.Pl);
            case 3:
                return this.renderGeneric(e, rZ.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rZ.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var r9 = n(842983);
let r7 = {
    [J.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iB.A)(r),
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
        getLabel: () => q.intl.string(q.t["0/xHFO"]),
    },
    [J.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iB.A)(r),
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
        getLabel: () => q.intl.string(q.t.E4u4n5),
    },
    [J.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, iB.A)(r),
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
        getLabel: () => q.intl.string(q.t.tcawo3),
    },
};
function r8(e) {
    let { operatingSystem: t, className: n } = e,
        i = r7[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(id.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function ae(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(r9.I, n),
        children: t.map((e) => (0, s.jsx)(r8, { operatingSystem: e, className: o()(r9.A, i) }, e)),
    });
}
var at = n(111758);
let an = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(at.T, t),
        children: (0, s.jsx)("span", { className: at.Q, children: q.intl.string(q.t["14lP0W"]) }),
    });
};
var ai = n(246337);
let al = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(ai.T, t),
        children: (0, s.jsx)("span", { className: ai.Q, children: q.intl.string(q.t["8IfYqa"]) }),
    });
};
var as = n(615300),
    ar = n(868285),
    aa = n(358618),
    ao = n(983851),
    ad = n(133296),
    ac = n(607470),
    au = n(61251);
class am extends r.Component {
    _animatedValue = new as.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), as.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        as.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(as.A.img, {
            className: o()({ [au.YC]: i }, t),
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
            ? (0, s.jsx)(as.A.div, { className: o()(au.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(as.A.div, {
                  className: o()(l ? au.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tY.y, {
                                className: au.u1,
                                itemClassName: au.$N,
                                type: tY.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ah extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new ro.Ep();
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
            m = a ? aa._ : ao.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                iT.Fr
                    ? null
                    : (0, s.jsx)(ac.A, {
                          className: o()(au.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(ar.F, {
                    children: l && e ? null : (0, s.jsx)(am, { className: o()(au.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eP.D, {
                    className: o()(au.b4, { [au.HY]: l && e, [au.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: au.i2 }) : null,
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
            ? (0, s.jsx)(am, { className: o()(au.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(am, { className: o()(au.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(am, { className: o()(au.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(ad.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: au.mZ,
                  disable: !e,
                  children: (0, s.jsx)(ar.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(au.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var ag = n(366523),
    ap = n(371794),
    aA = n(622413),
    ax = n(174264);
class af extends r.PureComponent {
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
                  className: ax.ED,
                  children: [
                      (0, s.jsx)(r4, {
                          type: r4.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? ax.ae : ax.Ek,
                      }),
                      (0, s.jsx)(ae, { systems: [J.uje.WINDOWS], className: ax.iD }),
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
        return (0, rO.bF)(l)
            ? (0, s.jsx)(ag.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: ax.A$,
                  backgroundImageClassName: ax.iZ,
                  foregroundImageClassName: ax.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(ah, {
                          className: o()(ax.H1, { [ax.ZC]: a }),
                          video: null != d.previewVideo ? (0, ap.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, ap.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ax.ZI,
                          splashPlaceholderClassName: ax.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(al, { className: o()(ax.LJ, { [ax.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(an, { className: o()(ax.LJ, { [ax.V9]: e }) })
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
            d = o ? ry.ug : aA.A;
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
var aE = n(587895),
    aI = n(981449);
class aC extends r.Component {
    static defaultProps = { renderFallback: J.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : J.JJy.APPLICATION_EMBED, object: J.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eD.QB)(t);
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
            className: aI.h,
            children: (0, s.jsx)(ep.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: q.intl.string(q.t["W+NB90"]),
                onClick: () => {
                    (0, rD.pX)(J.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > ry.Tm;
        return (0, s.jsx)(af, {
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
        if (null != r) return (0, s.jsx)("div", { className: aI.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(J.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: aI.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(rq, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: aI.h,
                          source: J.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(r4, { type: r4.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > ry.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(ry.Wb, { isHorizontal: r })
            : e.productLine === J.EZt.COLLECTIBLES
              ? (0, s.jsx)(rY.A, { section: J.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, s.jsx)(rY.A, {
                    section: J.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(rz.N_, {
                        onClick: this.handleLinkClick,
                        to: J.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let av = [eB.A, rw.A, eV.A];
function a_(e) {
    let { skuId: t } = e,
        n = eB.A.get(t),
        i = null != n ? aE.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eB.A.didFetchingSkuFail(t),
        inLibrary: null != n && rw.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eV.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rw.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let aj = (0, rb.A)((0, rS.A)(aC)),
    aN = u.Ay.connectStores(av, a_)(aj),
    aT = (0, rS.A)(u.Ay.connectStores(av, a_)(aC));
var ay = n(576171);
function aS(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eP.D, {
        className: ay.kP,
        onClick: t,
        children: [
            (0, s.jsx)(rT._, { size: "md", color: "currentColor", className: ay.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? q.intl.string(q.t.Wi99Ro) : q.intl.string(q.t["+tXad7"]) }),
        ],
    });
}
class ab extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= ry.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === J.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, ev.openUserSettings)(eC.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? q.intl.string(q.t.mT9B49) : q.intl.string(q.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(ep.$, {
                  variant: "primary",
                  size: "sm",
                  text: q.intl.string(q.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(ep.$, { variant: "primary", size: "sm", text: q.intl.string(q.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? q.intl.string(q.t.QXgO5w)
            : this.props.isSelfGift
              ? q.intl.string(q.t.eEM3dq)
              : q.intl.string(q.t.tB8S6u);
    render() {
        return (0, s.jsx)(ry.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class ak extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: J.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, rD.pX)(J.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rD.pX)(J.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, ev.openUserSettings)(eC.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            eH.default.track(J.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: J.ZSU.BUTTON_CTA },
            });
        let r = l !== J.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, rR.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eH.default.track(J.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rV.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rO.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, rU.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, ev.openUserSettings)(eC.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(J.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(sd.A, {
            justify: sd.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(sd.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(aS, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(sd.A, {
                    align: sd.A.Align.END,
                    justify: sd.A.Justify.END,
                    className: ay.yu,
                    direction: sd.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: q.intl.format(q.t.nZBvUR, { hours: e.expiresAt.diff(lk()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? q.t["4iHwKT"] : q.t.YeLq88;
        return q.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ep.$, {
                    variant: "primary",
                    size: "sm",
                    text: q.intl.string(q.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tq.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? q.intl.string(q.t.BTihou)
                : null != e.giftStyle
                  ? q.intl.string(q.t.TiZFqX)
                  : q.intl.string(q.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t1.hU)(e) ? ay.UQ : void 0,
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
        return e === J.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? q.intl.formatToPlainString(q.t.t1SOId, { recipientDisplayName: tZ.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? q.intl.string(q.t["2PJ1NP"])
                    : q.intl.string(q.t.hrnGng)
                : n
                  ? q.intl.string(q.t.QLEMld)
                  : q.intl.string(q.t.W4DBcy);
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
        if (null == i) return q.intl.string(q.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rO.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? q.intl.formatToPlainString(q.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t1.hU)(e) || (0, rO.bF)(i)
                ? q.intl.string(q.t.mVC3Cv)
                : q.intl.format(q.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return q.intl.format(q.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return q.intl.string(q.t.ARWFQX);
        if (!r.verified) return q.intl.format(q.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? q.intl.string(q.t["lQI+cB"])
                : q.intl.formatToPlainString(q.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return q.intl.string(q.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? q.intl.format(q.t.l3VxgG, { username: tZ.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : q.intl.format(q.t["9cYrw5"], {
                          username: tZ.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? q.intl.formatToPlainString(q.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : q.intl.formatToPlainString(q.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return q.intl.string(q.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nh.WT.MONTH ? q.t["/RDIEA"] : q.t["3CX6Ev"];
                return q.intl.format(e, { username: tZ.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nh.WT.MONTH ? q.t["2O4lo5"] : q.t["+XjmsR"];
            return q.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? q.intl.format(q.t["3HsdQ/"], { username: tZ.Ay.getUserTag(l) }) : q.intl.string(q.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nh.Wx.includes(e.giftStyle),
            i = o()(ay.gB, { [ay.El]: n, [ay.by]: t >= ry.Tm }),
            l = o()({ [ay.gc]: n, [ay.Ei]: n && t >= ry.Tm, [ay.ww]: !n, [ay.wy]: !n && t >= ry.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(rB, { className: ay.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(rP.A, {
                        defaultAnimationState: e.redeemed ? rL.oA.LOOP : rL.oA.IDLE,
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
            text: q.intl.string(q.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rO.bF)(n);
        return (0, s.jsx)(aT, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: J.JJy.GIFT_CODE_EMBED,
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
            return (0, s.jsx)(aT, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: J.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => q.intl.string(q.t.X4p5uH),
                renderCustomTagline: () => q.intl.string(q.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(ab, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(ry.Wb, { isHorizontal: i >= ry.Tm });
        return (0, t1.hU)(e)
            ? (0, s.jsx)("div", { className: ay.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let aL = (0, rb.A)((0, rS.A)(ak)),
    aR = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([rG.A], () => {
                let e = rG.A.getError(t);
                return { giftCode: rG.A.get(t), resolved: rG.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([w.default], () => (null != i && null != i.userId ? w.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eB.A], () => (null != i ? eB.A.get(i.skuId) : null)),
            d = (0, u.bG)([rw.A], () =>
                null != o && i?.entitlementBranches != null ? rH.YI(i.entitlementBranches, o, rw.A) : null,
            ),
            c = (0, rk.h)(o?.applicationId),
            m = null != o && (0, rO.bF)(o) && i?.redeemed === !0,
            [h] = (0, rM.L)(m ? c?.id : null),
            g = (0, rF.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([D.default], () => (null != i ? D.default.getId() === i.userId : D.default.getId() === n.id));
        return (0, s.jsx)(aL, {
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
var aP = n(376728),
    aM = n(107123),
    aD = n(698441),
    aO = n(427080),
    aU = n(346542),
    aG = n(665066),
    aw = n(95701),
    aB = n(299091),
    aV = n(860689);
let aH = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aF(e) {
    let { guildId: t, location: n } = e;
    return aH.getCurrentConfig({ guildId: t, location: n });
}
function az() {
    return (0, s.jsxs)(iS.A, {
        children: [
            (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t["N/g9Z4"]) }),
            (0, s.jsx)(iS.A.Body, { resolving: !0 }),
        ],
    });
}
var aY = n(172799),
    aK = n(718223);
function aW(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: aK.MY,
                        children: [
                            (0, s.jsx)("i", { className: aK.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: aK.U9,
                                color: i,
                                children: q.intl.format(q.t["LC+S+m"], { membersOnline: n }),
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
                        className: aK.MY,
                        children: [
                            (0, s.jsx)("i", { className: aK.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: aK.U9,
                                color: i,
                                children: q.intl.format(q.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: aK.rc, children: l })
    );
}
function aJ(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, n1.Ay)(t);
    if (null != t && null != n) {
        let e = (0, nz.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(aK.Ix, { [aK.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: aK.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(ss.A, {
                    children: (0, s.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: q.intl.format(q.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(aK.Ix, { [aK.v6]: i }),
              children: (0, s.jsx)(ss.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: q.intl.format(q.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aq(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    eN()(l === aY.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([O.A], () => O.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e9, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(aX, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function aX(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    eN()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eH.default.track(J.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([nS.A], () => (null != i.guild ? nS.A.getGuild(i.guild.id) : null), [i]),
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
        I = (0, u.bG)([to.A], () => null != d && to.A.can(J.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: C } = (0, E.Ay)(f.A.INVITE_EMBED),
        v = (0, u.yK)(
            [eu.Ay],
            () =>
                null != d
                    ? eu.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([w.default], () => v.map((e) => w.default.getUser(e)).filter((e) => null != e), [v]),
        j = r.useCallback(() => {
            (0, aP.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, iW._U)(i.code, l.id),
                },
                C,
            ),
                aP.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: C,
                });
        }, [i, l, C, a]),
        N = i.state === J.elq.ACCEPTING,
        T = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(az, {});
        p = (0, aV.DY)(i.guild);
    }
    t = T
        ? A
            ? q.intl.string(q.t.DPfdsq)
            : x
              ? q.intl.string(q.t.sqe0hj)
              : q.intl.string(q.t.RscU7I)
        : q.intl.string(q.t["2BP08E"]);
    let y = (T && !I) || (T && A);
    return (I || (n = q.intl.string(q.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(E.f5, {
              value: C,
              children: (0, s.jsx)(aZ, {
                  app: o,
                  activityUsers: _,
                  isMember: T,
                  channel: d,
                  guild: p,
                  message: l,
                  members: c,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: N,
                  buttonLabel: t,
                  disabled: y,
                  disabledReason: n,
                  handleAcceptInvite: j,
                  onView: g,
              }),
          });
}
function aZ(e) {
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
        I = B.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        C = (0, et.F)(t),
        v = (0, ee.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? $.kY.PLAY : $.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, s.jsx)(F.h, {
        header: t.name,
        title: q.intl.string(q.t["7vb6nw"]),
        iconSrc: I,
        ...v,
        onClickBanner: C,
        info: (0, s.jsxs)("div", {
            className: aK.QR,
            children: [
                (0, s.jsx)(aJ, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(Z, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: q.intl.formatToPlainString(q.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(aW, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: en.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var a$ = n(4274);
function aQ(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([D.default], () => D.default.getId()) === t.id
                ? q.intl.string(q.t.C89OLE)
                : q.intl.string(q.t.YVub5y),
        l = (0, a$.g)(n?.code);
    return (0, s.jsxs)(iS.A, {
        children: [
            (0, s.jsx)(iS.A.Header, { text: i }),
            (0, s.jsxs)(iS.A.Body, {
                children: [
                    (0, s.jsx)(iS.A.Icon, { expired: !0 }),
                    (0, s.jsx)(iS.A.Info, {
                        expired: !0,
                        title: l?.title ?? q.intl.string(q.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var a0 = n(308528),
    a1 = n(889227);
function a2(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([D.default], () => D.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === J.elq.ACCEPTING,
        { analyticsLocations: d } = (0, E.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([U.A], () => null != t.inviter && U.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != O.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), a0.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aP.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iW._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, aP.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, iW._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aP.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = q.intl.string(q.t.ib7Ng1),
        A = "active";
    c
        ? ((p = q.intl.string(q.t.xhxnPn)), (A = "secondary"))
        : a && ((p = q.intl.string(q.t.ib7Ng1)), (A = "secondary"));
    let x = a ? q.intl.string(q.t.eQyu1F) : q.intl.string(q.t.PYJHW6),
        I = null != t.inviter ? `${t.inviter.username}` : "",
        C = null != t.inviter ? tZ.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(iS.A, {
        children: [
            (0, s.jsx)(iS.A.Header, { text: x }),
            (0, s.jsxs)(iS.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iY.iH,
                        children: [
                            (0, s.jsx)(iS.A.Icon, { user: new a1.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(iS.A.Info, { title: I, onClick: c ? g : void 0, children: C }),
                        ],
                    }),
                    (0, s.jsx)(ep.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var a3 = n(342952);
let a6 = (0, n(945810).mj)({
    name: "2026-06-gdm-invite-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function a5(e) {
    let { location: t } = e;
    return a6.useConfig({ location: t });
}
function a4(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === J.elq.ACCEPTING,
        c = (0, u.bG)([O.A], () => (null != t.channel ? O.A.getChannel(t.channel.id) : null), [t]);
    eN()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, E.Ay)(f.A.INVITE_EMBED),
        { enabled: h } = a5({ location: "GroupDMInvite" }),
        g = null != c,
        p = r.useRef(null),
        x = r.useCallback(() => {
            let e = "noop";
            g ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, aP.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, iW._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m, g, l, a]),
        I = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, aw.OY)(e.channel),
                    i = (0, n1.Bi)(t);
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
                        return null != n && e.push(n), e;
                    }, []) ?? [];
                let e = (0, n1.Bi)(t),
                    i = w.default.getCurrentUser();
                return null != i && n.push(i), { channel: t, recipients: n, customGroupName: e };
            }
            return null;
        })(t, c ?? null);
    if (null == I) return (0, s.jsx)(az, {});
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
                                          let t = U.A.getNickname(e.id);
                                          if (null != t && "" !== t) return t;
                                          let n = e instanceof a1.A ? e : w.default.getUser(e.id);
                                          if (null != n) {
                                              let e = tZ.Ay.getName(n);
                                              if (null != e) return e;
                                          }
                                          return e.username;
                                      })
                                      .filter((e) => "" !== e)).length
                                ? q.intl.string(q.t.LJpTRF)
                                : 1 === i.length
                                  ? i[0]
                                  : 2 === i.length
                                    ? q.intl.formatToPlainString(q.t.gwRP0Y, { first: i[0], second: i[1] })
                                    : 3 === i.length
                                      ? q.intl.formatToPlainString(q.t["/KSOKY"], {
                                            first: i[0],
                                            second: i[1],
                                            third: i[2],
                                        })
                                      : q.intl.formatToPlainString(q.t.m5uYso, { first: i[0], second: i[1] }),
                      a = q.intl.string(q.t.gVDdRn),
                      o = "active";
                  return (
                      n && ((a = q.intl.string(q.t.cEnaWx)), (o = "secondary")),
                      {
                          bodyTitle: r,
                          headerText: t ? q.intl.string(q.t.Fyamu8) : q.intl.string(q.t["2tr5Qz"]),
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
                      : (null == (i = (0, n1.m1)(l, w.default, U.A)) || "" === i) &&
                        (i =
                            s.length > 0
                                ? s
                                      .filter(rf.Vq)
                                      .map((e) => e.username)
                                      .join(", ")
                                : q.intl.string(q.t.LJpTRF));
                  let a = q.intl.string(q.t.XpeFYr),
                      o = "active";
                  n && ((a = q.intl.string(q.t.cEnaWx)), (o = "secondary"));
                  let d = q.intl.string(q.t["3p3/BK"]);
                  return (
                      t && (d = q.intl.string(q.t.qmtuXE)),
                      { bodyTitle: i, headerText: d, buttonText: a, buttonVariant: o }
                  );
              })(I, o, g),
        { channel: N, recipients: T } = I,
        y = h
            ? T.map((e) =>
                  e instanceof a1.A
                      ? e
                      : (w.default.getUser(e.id) ??
                        new a1.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
              )
            : [],
        S = null != N.icon,
        b = q.intl.format(q.t.zRl6XR, { count: T.length });
    return (0, s.jsxs)(iS.A, {
        className: h ? iY.TV : void 0,
        children: [
            h
                ? (0, s.jsx)(A.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: iY.JO,
                      lineClamp: 1,
                      children: v,
                  })
                : (0, s.jsx)(iS.A.Header, { text: v }),
            (0, s.jsxs)(iS.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: h ? `${iY.iH} ${iY.mx}` : iY.iH,
                        children: [
                            (!h || S) &&
                                (0, s.jsx)(iS.A.Icon, {
                                    channel: N,
                                    onClick: g ? x : void 0,
                                    channelIconSize: h ? tj._3.SIZE_48 : void 0,
                                }),
                            (0, s.jsx)(iS.A.Info, {
                                title: h ? (0, s.jsx)(ss.A, { children: C }) : C,
                                onClick: g ? x : void 0,
                                titleVariant: h ? "heading-md/medium" : void 0,
                                detailVariant: h ? "text-sm/medium" : void 0,
                                children: h
                                    ? (0, s.jsx)("div", {
                                          className: iY.er,
                                          children:
                                              y.length > 0
                                                  ? (0, s.jsx)(eP.D, {
                                                        className: iY.N_,
                                                        onClick: (e) => {
                                                            p.current?.openUserList(e.currentTarget);
                                                        },
                                                        children: b,
                                                    })
                                                  : b,
                                      })
                                    : (0, s.jsx)(iS.A.Data, { members: T.length }),
                            }),
                            h &&
                                y.length > 0 &&
                                (0, s.jsx)(a3.A, {
                                    ref: p,
                                    className: iY.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tj._3.SIZE_32,
                                    channelId: N.id,
                                    popoutClassName: iY.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(ep.$, { onClick: x, loading: d, disabled: g, variant: j, text: _, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var a9 = n(821418),
    a7 = n(340837);
let a8 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, a7.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, a9.Q.IS_GUEST_INVITE)
    );
};
var oe = n(517905);
function ot(e) {
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
        { channel: I, approximate_member_count: C, approximate_presence_count: v } = m,
        _ = m.state === J.elq.ACCEPTING,
        j = null != I ? (0, aw.OY)(I) : null,
        N = null != d,
        T = null != j,
        y = null != j && j.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, a9.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(J.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: I?.id,
            invite_instance_id: (0, iW._U)(m.code, h.id),
            invite_channel_type: I?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [P, M] = r.useState(!1),
        D = r.useCallback(() => M(!1), []),
        O = r.useRef(null),
        U = (0, u.bG)([ls.Ay], () => a8([ls.Ay], m)),
        G = r.useCallback(() => {
            M(!0), (0, aP.Pq)(L, "show profile", R);
        }, [L, R]),
        w = r.useCallback(() => {
            let e = "noop";
            N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, aP.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, iW._U)(m.code, h.id),
                    },
                    R,
                );
        }, [m, h, R, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(az, {});
        (d = aV.DY(m.guild)).premiumTier = m.guild.premium_tier ?? J.TVA.NONE;
    }
    let B = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return q.intl.string(q.t.N85DCl);
                else if (s) return q.intl.string(q.t.TJQcNv);
                else if (l) return q.intl.string(q.t.mJyBir);
                else return q.intl.string(q.t.lxTgP9);
            else if (r) return q.intl.string(q.t.Mnvc3C);
            else if (s) return q.intl.string(q.t.FdPNr5);
            else if (l) return q.intl.string(q.t.f4gmrf);
            else return q.intl.string(q.t.H39rEY);
        return n
            ? i
                ? q.intl.string(q.t.UxmnHx)
                : q.intl.string(q.t.sigPEf)
            : i
              ? q.intl.string(q.t["oU/lsl"])
              : q.intl.string(q.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: S, isHubGuild: k, isStage: y, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: iY.FA,
            children: [
                (0, s.jsx)(oe.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: P,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, s.jsx)(iS.A.GuildName, { guild: d, ref: O }),
                }),
                (0, s.jsx)("span", {
                    className: iY.E3,
                    children: (0, s.jsx)(s7.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(id.m, {
                asContainer: !0,
                text: q.intl.string(q.t["/FeTK6"]),
                children: (0, s.jsx)(nU.m, { size: "md", color: "currentColor", className: iY.G }),
            })),
        b
            ? ((i = (0, s.jsx)(iS.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: iY.FA,
                  children: [
                      q.intl.format(q.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: iY.E3,
                          children: (0, s.jsx)(s7.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != v && v > 0)
              ? (t = (0, s.jsx)(iS.A.Data, { members: C, membersOnline: v }))
              : T && (t = (0, s.jsx)(iS.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(iS.A, {
            children: [
                (0, s.jsx)(iS.A.GuildSplash, { guild: d }),
                (0, s.jsx)(iS.A.Header, { text: B, extra: l }),
                (0, s.jsxs)(iS.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: iY.iH,
                            children: [
                                (0, s.jsx)(iS.A.Icon, { guild: d }),
                                (0, s.jsx)(iS.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: iY.UD,
                            children: (0, s.jsx)(ep.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? y
                                        ? q.intl.string(q.t["7vb2cc"])
                                        : q.intl.string(q.t.gpqgah)
                                    : N
                                      ? q.intl.string(q.t.cEnaWx)
                                      : q.intl.string(q.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(J.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: iY.me }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: q.intl.format(q.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, g.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("7206"),
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
var on = n(9994),
    oi = n(461888),
    ol = n(422253),
    os = n(123213),
    or = n(86376),
    oa = n(42780),
    oo = n(897288),
    od = n(14712);
function oc(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        [c, m] = r.useState(!0),
        [h, g] = r.useState(!1),
        p = t.state === J.elq.ACCEPTING,
        A = (0, u.bG)([ru.Ay], () => ru.Ay.useReducedMotion),
        { analyticsLocations: x } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, iW._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: x,
        },
    }),
        r.useLayoutEffect(() => {
            g((d.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let I = (0, on.oO)(t),
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
        ? (0, s.jsx)(az, {})
        : (0, s.jsxs)(ic.s, {
              className: o()(od.Gg, { [od.vk]: h && c }),
              onClick: C,
              style: _,
              "aria-label": q.intl.string(q.t.dcl9MQ),
              children: [
                  (0, s.jsxs)("div", {
                      className: od.uY,
                      ref: d,
                      children: [
                          (0, s.jsx)(oa.J$, { profile: I, className: od.vK }),
                          (0, s.jsx)(oa.CG, { profile: I }),
                          (0, s.jsx)(or.A, { profile: I }),
                          (0, s.jsx)(ol.P, { profile: I, className: od.rb }),
                          (0, s.jsx)(oo.A, {
                              guild: null != t.guild ? (0, aV.DY)(t.guild) : null,
                              roles: t.roles,
                              className: od.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, s.jsx)("div", {
                            className: od.Se,
                            children: (0, s.jsx)(lK.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: q.intl.string(q.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, s.jsxs)("div", {
                      className: o()(od.qr, { [od.iK]: h }),
                      children: [
                          h && c ? (0, s.jsx)("div", { className: od.D7 }) : null,
                          (0, s.jsx)("div", {
                              className: o()(od.z8, { [od.it]: h && c }),
                              children: (0, s.jsx)("div", {
                                  className: od.UD,
                                  children: (0, s.jsx)(ou, {
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
function ou(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, oi.Ay)(n, oi.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, E.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aP.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, iW._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(os.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var om = n(414798);
function oh(e) {
    let t,
        n,
        i,
        { author: l, banned: r, channelId: a, onMention: o } = e,
        d = (0, u.bG)([D.default], () => D.default.getId()),
        c = tZ.Ay.useName(l),
        m = d === l.id,
        { enabled: h } = a5({ location: "InvalidInvite" }),
        g = (0, u.bG)([O.A, to.A], () => {
            let e = O.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sk.UJ)(e),
                    n = to.A.can(J.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return to.A.can(J.xBc.SEND_MESSAGES, e);
        });
    return (
        m
            ? ((i = h ? q.intl.string(q.t.HfUzlI) : q.intl.string(q.t.C89OLE)),
              (t = h ? q.intl.string(q.t.y7uT5j) : q.intl.string(q.t["F/OLvL"])))
            : r
              ? ((i = h ? q.intl.string(q.t.OMfs8i) : q.intl.string(q.t.YVub5y)), (t = q.intl.string(q.t["57nBty"])))
              : ((i = h ? q.intl.string(q.t.OMfs8i) : q.intl.string(q.t.YVub5y)),
                (t = h
                    ? q.intl.string(q.t["p/zTYn"])
                    : null != c && g
                      ? q.intl.formatToPlainString(q.t["9Akp1s"], { username: c })
                      : q.intl.string(q.t["SMJr+a"])),
                (n =
                    null != c && g && !h
                        ? (0, s.jsx)(ep.$, {
                              onClick: function () {
                                  o?.();
                                  let { id: e } = l,
                                      t = `@${tZ.Ay.getUserTag(l, { decoration: "never" })}`,
                                      n = `<@${e}>`;
                                  sx._.dispatchToLastSubscribed(J.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                      null != a && om.A.startTyping(a);
                              },
                              text: q.intl.string(q.t.P8tvKG),
                          })
                        : void 0)),
        (0, s.jsxs)(iS.A, {
            className: h ? iY.TV : void 0,
            children: [
                h
                    ? (0, s.jsx)(A.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: iY.JO,
                          lineClamp: 1,
                          children: i,
                      })
                    : (0, s.jsx)(iS.A.Header, { text: i }),
                (0, s.jsxs)(iS.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: iY.iH,
                            children: [
                                (0, s.jsx)(iS.A.Icon, { expired: !0 }),
                                (0, s.jsx)(iS.A.Info, {
                                    expired: !0,
                                    title: q.intl.string(q.t["Jhx/ud"]),
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
var og = n(616356);
function op(e) {
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
        m = (0, u.bG)([G.A], () => G.A.getGuildId()),
        h = (0, u.bG)(
            [og.A],
            () => (null != n && null != n.target_user ? og.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [og.A],
            () => (null != n && null != n.target_user ? og.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, te.A)({
        name: e8.ImpressionNames.INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, iW._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aY.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eN()(null != n, "Invite cannot be null");
    let { target_type: I, target_user: C } = n;
    eN()(I === aY.yV.STREAM && null != C, "invalid streaming invite");
    let v = i === C.id,
        _ = n.state === J.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aP.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, iW._U)(n.code, a.id),
                    },
                    p,
                );
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(az, {});
        l = (0, aV.DY)(n.guild);
    }
    let T = null != n.channel ? (0, aw.OY)(n.channel) : null,
        y = tZ.Ay.getName(C),
        S = A || (!x && N),
        b = q.intl.string(q.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = v ? q.intl.string(q.t.oBLoZJ) : q.intl.formatToPlainString(q.t["0QJmA+"], { name: y })),
          (b = q.intl.string(q.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = q.intl.string(q.t.Q1W99y)), (k = "secondary")),
          (t = v ? q.intl.string(q.t["4hyaHu"]) : q.intl.formatToPlainString(q.t.QmlLEq, { name: y })));
    let L =
        m === l.id && null != T
            ? (0, s.jsx)(iS.A.Channel, { channel: T })
            : q.intl.formatToPlainString(q.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(iS.A, {
        children: [
            (0, s.jsx)(iS.A.Header, { text: q.intl.string(q.t["wS+5Wb"]) }),
            (0, s.jsxs)(iS.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: iY.iH,
                        children: [
                            (0, s.jsx)(iS.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(iS.A.Info, { title: t, onClick: N && x ? j : void 0, children: L }),
                        ],
                    }),
                    (0, s.jsx)(ep.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var oA = n(459192),
    ox = n(364522),
    of = n(952270),
    oE = n(52074),
    oI = n(725613),
    oC = n(693879),
    ov = n(145497),
    o_ = n(481947),
    oj = n(977997),
    oN = n(607567),
    oT = n(198183);
function oy(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, n1.Ay)(i),
        o = (0, u.bG)([nS.A], () => nS.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([oj.A], () => oj.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [oN.Ay],
            () => ({ voiceStates: null != i.guild_id ? oN.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([oI.A], () => oI.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || oI.A.hasRequestedStartTimes(i.guild_id) || (0, oE.U)(i.guild_id);
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
    let I = r.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", x),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", x);
            },
            [x],
        ),
        { analyticsLocations: C } = (0, E.Ay)(f.A.INVITE_EMBED, f.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        v = (0, iW._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, te.A)({
        name: e8.ImpressionNames.VOICE_INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
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
            (0, lT.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            l(),
                (0, aP.he)(
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
        className: oT.kL,
        children: [
            (0, s.jsxs)("div", {
                className: oT.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: oT.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: oT.yW,
                                children: [
                                    (0, s.jsx)(ao.H, {
                                        className: oT.p,
                                        color:
                                            c.length > 0 ? nC.A.colors.TEXT_FEEDBACK_POSITIVE : nC.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(oA.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(ov.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eP.D, {
                                            className: oT.HA,
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
                                ? (0, s.jsx)(oC.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: oT.Ao,
                              children: [
                                  (0, s.jsx)(ox.Ip, {
                                      ref: I,
                                      className: oT.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              o_.Ay,
                                              {
                                                  className: oT.Eq,
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
                                  (0, s.jsx)("div", { ref: p, className: oT.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: oT.p$,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: q.intl.string(q.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: oT.TB,
                        children: (0, s.jsx)(ep.$, {
                            onClick: N,
                            icon: ao.H,
                            variant: "active",
                            fullWidth: !0,
                            text: q.intl.string(q.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: oT.qr,
                children: [
                    (0, s.jsx)(of.G, { size: "custom", color: "currentColor", className: oT.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: q.intl.string(q.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function oS(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)([O.A, to.A], () => {
            let e = O.A.getChannel(r);
            return null != e && to.A.canBasicChannel(J.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        o = (0, u.bG)([nS.A], () => null != nS.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(oc, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(oy, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var ob = n(652896),
    ok = n(834757),
    oL = n(427358),
    oR = n(370714);
function oP(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, nz.gU)(n, i),
        a = (0, n1.Ay)(n);
    return (0, s.jsxs)(eP.D, {
        onClick: l,
        className: o()(oR.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: oR.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(ss.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(nF._, { className: oR.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var oM = n(18005),
    oD = n(717421),
    oO = n(562153),
    oU = n(713517),
    oG = n(297413),
    ow = n(155775);
function oB(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(ll.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eP.D, {
                ...r,
                innerRef: a,
                className: ow.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(t_.eu, {
                        src: t.getAvatarURL(n, (0, tj.FT)(tj._3.SIZE_24)),
                        className: ow.my,
                        "aria-label": t.username,
                        size: tj._3.SIZE_24,
                    }),
                    (0, s.jsx)(A.E, {
                        className: ow.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(oG.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var oV = n(581448);
function oH(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(oF, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(l8.Y, { renderPopout: () => o(i), ...a });
}
function oF(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, oU.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: oV.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(ox.Ip, {
                className: oV.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        oB,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: oO.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oz = n(531657);
let oY = { mass: 1, tension: 170, friction: 26 };
function oK(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, oD.z)(() => ({ x: 0, y: 0, scale: 1, config: oY }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(oM.animated.div, {
            ref: a,
            className: o()(oz.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, oM.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: oz.my,
                            children: (0, s.jsx)(id.m, {
                                text: oO.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(t_.eu, {
                                    src: (function (e, t, n) {
                                        let i = ls.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, B.xT)(i);
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
                c && (0, s.jsx)(oW, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function oW(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, oU.A)(e),
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
    return (0, s.jsx)(oH, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(oz.my, oz.k2),
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
var oJ = n(692236);
function oq(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = aV.DY(t.guild));
    let m = null != t.channel ? (0, aw.OY)(t.channel) : null;
    eN()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eN()(null != m, "Voice Invite Embed must be able to resolve an invite channel.");
    let h = (0, u.bG)([to.A, O.A], () => {
            let e = O.A.getChannel(m.id);
            return null == e || to.A.canBasicChannel(J.hVb.VIEW_CHANNEL, e);
        }, [m.id]),
        g = (0, u.bG)([oN.Ay], () => (h ? oN.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? q.intl.string(q.t.DVDvCD) : q.intl.string(q.t.TY77rq),
                    sublabel: q.intl.string(q.t.wM2WTM),
                };
            let o = r ? q.t["2RWMFV"] : q.t.IWXzHV,
                d = r ? q.t.Da7tZx : q.t["3VbQvv"];
            return { label: l ? q.intl.format(o, { othersCount: a }) : q.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([D.default], () => D.default.getId()), author: n.author, voiceStates: g }),
        I = (0, u.bG)([nS.A], () => null != nS.A.getGuild(c.id), [c.id]),
        C = (0, u.bG)([ec.A], () => ec.A.getVoiceChannelId() === m.id, [m.id]),
        v = (0, u.bG)([ls.Ay], () => a8([ls.Ay], t), [t]),
        _ = t.state === J.elq.ACCEPTING,
        { analyticsLocations: j } = (0, E.Ay)(f.A.INVITE_EMBED),
        N = (0, iW._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)([og.A, oL.A], () => {
                if ((0, aU.G4)(t) && null != t.target_user) {
                    let e = og.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = og.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = oL.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (oL.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = og.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        y = (0, ok.AO)(T),
        S = null != T,
        b = r.useCallback(() => {
            let e = I ? "transition" : "accept";
            I ? l() : a(),
                (0, aP.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, ob._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, I, y, T, g.length, l, a]),
        k = r.useCallback(() => {
            I ? (0, lT.iN)(m.id) : a({ autoJoin: !1 }),
                eH.default.track(J.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: I,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, ob._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [m.id, c.id, t.code, N, I, y, T, g.length, j, a]);
    (0, te.A)({
        name: e8.ImpressionNames.VOICE_INVITE_EMBED,
        type: e8.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let L = (0, u.bG)([ru.Ay], () => ru.Ay.useReducedMotion),
        R = r.useRef(null),
        [P, M] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)([oL.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = oL.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (oL.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        G = r.useMemo(() => tI().throttle(M, 20), [M]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
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
        B = r.useCallback(() => {
            G.cancel(), M({ percentX: 0, percentY: 0, proximity: 0 });
        }, [G]);
    return (0, s.jsxs)("div", {
        className: oJ.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: R,
                className: oJ.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: oJ.ys }),
                    (0, s.jsx)("div", { className: oJ.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: oJ.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(oJ.Qs, { [oJ.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(oP, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: oJ.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(ss.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: oJ.$B,
                                                      children: (0, s.jsx)(ss.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: oJ.RE,
                                      children: (0, s.jsx)(oK, {
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
                        className: oJ.xk,
                        children: (0, s.jsx)(ep.$, {
                            onClick: b,
                            loading: _,
                            variant: C ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !v,
                            text: C ? q.intl.string(q.t["3xjX0U"]) : q.intl.string(q.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: oJ.qr,
                children: [
                    (0, s.jsx)(of.G, { size: "custom", color: "currentColor", className: oJ.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: q.intl.string(q.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function oX(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [aB.A],
            () => ({ invite: aB.A.getInvite(t), inviteError: aB.A.getInviteError(t) }),
            [t],
        ),
        o = (0, iW._U)(t, n.id);
    r.useEffect(() => {
        null == l && aP.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: J.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, E.Ay)(),
        m = (0, u.bG)([nS.A], () => (l?.guild != null ? nS.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)([O.A, to.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = O.A.getChannel(e);
            return null != t && to.A.canBasicChannel(J.hVb.VIEW_CHANNEL, t);
        }, [l]),
        g = (0, u.bG)([D.default], () => D.default.getId()),
        p = (0, u.bG)([aD.Ay], () => aD.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && aP.Ay.transitionToInviteSync(d);
    }
    let x = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == m && l?.guild != null ? aV.DY(l.guild) : m;
            (0, aG.g)({ guild: n, isMember: null != m, analyticsLocations: c }) === aG.W.PROCEED &&
                aP.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        f = (0, s.jsx)(ot, {
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: x,
            currentUserId: g,
            guild: m,
            invite: d,
            message: n,
        });
    switch (d.state) {
        case J.elq.RESOLVING:
            f = (0, s.jsx)(az, {});
            break;
        case J.elq.EXPIRED:
        case J.elq.BANNED:
            f = (0, s.jsx)(oh, {
                banned: d.state === J.elq.BANNED,
                author: n.author,
                channelId: n.channel_id,
                onMention: () =>
                    (0, aP.he)(
                        {
                            invite: d,
                            action: "mention",
                            inviter_id: n.author.id,
                            invite_message_id: n.id,
                            invite_instance_id: o,
                        },
                        c,
                    ),
            });
            break;
        case J.elq.ERROR:
            f = (0, s.jsx)(aQ, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, aU.On)(d)) {
                case aU.Xd.GROUP_DM:
                    f = (0, s.jsx)(a4, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case aU.Xd.FRIEND:
                    f = (0, s.jsx)(a2, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, aU.G4)(d)) {
                        if (null != d.channel && (0, aw.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = aF({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(oS, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(oq, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(op, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, aU.ly)(d)) {
                        f = (0, s.jsx)(aO.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, aU.oK)(d)) {
                        f = (0, s.jsx)(aq, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, aw.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = aF({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(oS, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(oq, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, aM.v)(d) &&
                        (f = (0, s.jsx)(oc, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(rY.A, { section: J.JJy.INVITE_LINK, children: f });
}
var oZ = n(266620),
    o$ = n(860227),
    oQ = n(568006),
    o0 = n(666176),
    o1 = n(272984);
let o2 = function (e) {
    let { channel: t, message: n, hideParty: i, hideInviteEmbedBanner: l } = e,
        { analyticsLocations: r } = (0, E.Ay)(f.A.INVITE_EMBED),
        a =
            null != n.application
                ? ib.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, o1.pH)(n.activity.party_id)
                  ? o0.HT
                  : void 0,
        { data: o } = (0, e6.YY)(n.application?.id),
        d = o ?? a;
    return null == d
        ? null
        : (0, s.jsx)(e7, {
              contentClassification: d.contentClassification,
              channel: t,
              variant: "game_invite",
              children: (0, s.jsx)(oQ.P0, {
                  app: d,
                  channel: t,
                  message: n,
                  hideParty: i,
                  hideBanner: l,
                  analyticsLocations: r,
              }),
          });
};
var o3 = n(503002),
    o6 = n(123791);
function o5(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, e6.YY)(t);
    return null == i ? null : (0, s.jsx)(o4, { app: i, guildId: n });
}
function o4(e) {
    let { app: t, guildId: i } = e;
    (0, o6.C)(t.id);
    let l = r.useCallback(() => {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("82885"),
                n.e("99099"),
                n.e("24007"),
                n.e("68031"),
                n.e("85384"),
                n.e("20428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(ep.$, {
        size: "sm",
        onClick: l,
        icon: o3.U,
        text: q.intl.format(q.t.XDRjs5, { appName: t.name }),
    });
}
var o9 = n(394839),
    o7 = n(96782),
    o8 = n(930390),
    de = n(861986),
    dt = n(87221),
    dn = n(411472);
function di(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: dn.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: dn.Yf,
                        children: [
                            (0, s.jsx)(dt.D, { size: "lg", color: nC.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: q.intl.string(q.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: dn.Fj,
                children: [
                    (0, s.jsx)(nU.m, { size: "sm", color: nC.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: q.intl.string(q.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var dl = n(343552),
    ds = n(581619),
    dr = n(416620);
let da = [J.Auw.GIFV],
    dd = 15 * nl.A.Millis.MINUTE,
    dc = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    du = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, i0.e5.IS_ANIMATED);
        return null != i && null != l && (i1.bp.test(n) || (a && (i1.P8.test(n) || i1.p4.test(n))))
            ? (0, s.jsx)(rN.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: dr.jj })
            : null;
    };
class dm extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, iW._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && dc.has(e));
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
            case s1.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(nH, { messageId: e.id, channelId: t.id });
                break;
            case s1.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(eE, { channelId: t.id });
                break;
            case s1.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(e_, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: dr.od, children: i });
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
                    e9,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tG.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(iP, { code: a, message: e });
                                case tG.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eg, { application: t, message: e, params: i });
                                case tG.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e$, { application: t, message: e });
                                case tG.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(eQ, { application: t, message: e, skuId: l });
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
                        oX,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tG.I.TEMPLATE:
                    return (0, s.jsx)(iK, { code: l }, l);
                case tG.I.EVENT:
                    return (0, s.jsx)(iw.A, { code: l }, l);
                case tG.I.CHANNEL_LINK:
                    return (0, s.jsx)(re, { code: l, message: e }, l);
                case tG.I.GUILD_PRODUCT:
                    return (0, s.jsx)(iG, { code: l }, l);
                case tG.I.SERVER_SHOP:
                    return (0, s.jsx)(nP, { guildId: l }, l);
                case tG.I.SOCIAL_LAYER_STOREFRONT: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(
                        l4.A,
                        {
                            guildId: n,
                            skuId: e,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, l5.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: n });
                            },
                        },
                        l,
                    );
                }
                case tG.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let [e, n] = l.split("-");
                    return (0, s.jsx)(l4.I, { applicationId: n, skuId: e, channel: t }, l);
                }
                case tG.I.QUESTS_EMBED:
                    return (0, s.jsx)(lI.A, { questId: l }, l);
                case tG.I.GAME_PROFILE:
                    return (0, s.jsx)(ij, { gameId: l, sourceUserId: e.author.id }, l);
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
                    return (0, s.jsx)(nI, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tG.I.EXPERIMENT:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = w.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: dr.zv,
                          children: (0, s.jsx)(aR, {
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
            : (0, s.jsx)(o8.A, {
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
        if (0 === d.length || e.isPoll() || (0, sX._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, J.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, i0.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, J.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, lA.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, c.Lt)(u, J.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, s2.iW)(e.originalItem, t);
        }
        let E = m.map((s) => {
            let a = (0, i0.aG)(s),
                o = {
                    message: e,
                    item: (0, o7.rC)(s, l),
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
                    renderAudioComponent: x ? oZ.SX : oZ.Nj,
                    renderImageComponent: oZ.Cr,
                    renderVideoComponent: oZ.I1,
                    renderPlaintextFilePreview: oZ.R6,
                    renderGenericFileComponent: oZ.UB,
                    onPlay: function (n, i, l) {
                        eH.default.track(J.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    gifFavoriteButton: du(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, s$.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, s.jsx)(o9.A, { items: E });
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
            u = (0, s2.sC)(e, i, o, d);
        if (e.type === J.Auw.GIFT) return null;
        let m = da.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            iN.G.Provider,
            {
                value: (0, dl.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
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
        e.type !== J.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? iQ.A.parseEmbedTitleWithoutLinks : iQ.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === J.Auw.RICH
            ? iQ.A.parse(t, !0, {
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
        e.shiftKey ? x.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    handleEditAttachment = (e) => {
        let t = e.originalItem;
        (0, g.openModalLazy)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("57328"), n.e("70698")]).then(
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
                      ds.z.has(t.type) ||
                      (0, sQ.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, J.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === iq.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !iX.has(t.content_type);
                              })
                          )) ||
                      (0, sQ.V)(t) ||
                      (0, sQ.G8)(t) ||
                      ((0, sQ.Xk)(t) && io.A.getConfig({ location: "MessageAccessories.renderEmbeds" }).enabled)
                  )
                      return null;
                  if (t.type === J.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, s2.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  ra,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: du,
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
                                lz.Ay,
                                {
                                    type: lz.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: se.LL, renderVideoComponent: se.$o, renderLinkComponent: se.bU };
                  if (
                      t.type === J.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = s0.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  aN,
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
        return (0, s.jsx)(rl.N, {
            gifAutoPlay: t,
            getGifFavButton: du,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(iZ.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n } = this.props;
        return (0, s.jsx)(o2, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== J.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tx, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, s3.ec)(e)
            ? (0, s.jsx)(rj.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lx.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(sb, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(J.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(sJ, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(J.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sD.default.extractTimestamp(e.id) >= dd)
        )
            return (0, s.jsx)("div", { className: dr.xM, children: q.intl.string(q.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: q.intl.string(q.t.VL1KOk),
            confirmText: q.intl.string(q.t.YEHppG),
            cancelText: q.intl.string(q.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: dr.IX,
                    children: q.intl.string(q.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: q.intl.string(q.t["5j2by3"]),
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
                  header: q.intl.string(q.t.CbTIEo),
                  confirmText: q.intl.string(q.t.kFwAsa),
                  cancelText: q.intl.string(q.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: dr.IX,
                      children: q.intl.string(q.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(o5, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e7, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(r_, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== J.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(lp, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === J.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(lq, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === J.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(l6, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nD.KM)(e)
            ? (0, s.jsx)(nw, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lE.A, { message: e, poll: t, className: dr.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tD, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lC.Mn)(e, this.props.channel)) return (0, s.jsx)(lF, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lC.Mn)(e, this.props.channel))
            return (0, s.jsx)(ia, {
                message: e,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(de.A, { message: e, compact: t, location: de.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, n3.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new n5(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lx.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, o$.XL)(e),
                  className: o()(this.props.className, dr.kL),
                  children: (0, s.jsx)(di, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, o$.XL)(t), className: o()(e, dr.kL), children: n })
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
            : (0, s.jsxs)("div", {
                  id: (0, o$.XL)(t),
                  className: o()(e, dr.kL),
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
function dh(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r, hideInviteEmbedBanner: a } = e,
        o = (0, u.bG)([D.default], () => D.default.getId()),
        d = nQ.X6.useSetting(),
        m = nQ.hD.useSetting(),
        h = nQ.rs.useSetting() && !(0, sM.A)(e.message),
        g = nQ.jW.useSetting() && !1 !== e.renderReactions,
        p = nQ.kt.useSetting(),
        A = (0, u.bG)([sZ.A], () => null == n.guild_id || sZ.A.canChatInGuild(n.guild_id), [n]),
        x = (0, u.bG)([i$.A], () => null != n.guild_id && i$.A.isLurking(n.guild_id), [n]),
        f = (0, u.bG)([ls.Ay, w.default], () => {
            let e = w.default.getCurrentUser();
            return (null != n.guild_id && null != e ? ls.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: I } = (0, u.cf)(
            [to.A],
            () => ({
                canAddNewReactions: A && to.A.can(J.xBc.ADD_REACTIONS, n),
                canManageMessages: to.A.can(J.xBc.MANAGE_MESSAGES, n),
            }),
            [A, n],
        ),
        C = (0, iM.ix)(n.guild_id),
        [, v] = (0, iD.c)(n.guild_id),
        _ = (0, sk.Id)(n),
        j =
            (o === i.author.id || I) &&
            i.author.id !== J.oIV &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, J.pr7.EPHEMERAL) &&
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
        S = (0, s5.A)({
            channel: n,
            canChat: A,
            renderReactions: g,
            canAddNewReactions: E,
            isLurking: x,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: C,
        }),
        b = (0, nK.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        k = (0, i2.A)(n?.id),
        L = (0, lf.A)(i),
        R = (0, nO.P)(i),
        P = (0, s6.z)(n),
        M = (0, s1._f)(i.id, i.channel_id),
        O = (0, nM._R)(),
        U = (0, nW.U)();
    return (0, s.jsx)(dm, {
        canSuppressEmbeds: j,
        canDeleteAttachments: N,
        ...S,
        disableReactionReads: !!y || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && P,
        hasBailedAst: e.hasBailedAst,
        isLurking: x && A,
        isPendingMember: f && A,
        isCurrentUser: T,
        inlineAttachmentMedia: d,
        inlineEmbedMedia: m,
        renderEmbeds: h,
        gifAutoPlay: p,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: b,
        showMaskedLinks: b,
        shouldHideMediaOptions: k,
        enabledContentHarmTypeFlags: R,
        ctaButtonType: M,
        shouldAgeVerify: O,
        hideInviteEmbedBanner: a,
        restrictedPreview: U,
    });
}
function dg(e) {
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
        c = nQ.X6.useSetting(),
        u = nQ.hD.useSetting(),
        m = nQ.rs.useSetting(),
        h = nQ.kt.useSetting(),
        g = (0, nW.U)(),
        p = (0, nK.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, i2.A)(n?.id),
        x = (0, nO.P)(t),
        f = (0, s1._f)(t.id, t.channel_id),
        E = (0, lf.A)(t);
    return (0, s.jsx)(dm, {
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
