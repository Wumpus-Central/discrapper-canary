(n.d(t, { iV: () => cR, OC: () => cM, Ay: () => cL }), n(938796));
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    d = n(448761),
    c = n(665260),
    u = n(855986),
    m = n(803805),
    h = n(52133),
    g = n(192308),
    p = n(640238),
    A = n(834730),
    x = n(138399),
    f = n(793574),
    I = n(688810),
    E = n(735991);
(n(321073), n(134528), n(947204));
var v = n(485845),
    C = n(379834),
    _ = n(836480),
    j = n(825860),
    N = n(950305),
    y = n(273626),
    b = n(361926),
    T = n(583846),
    S = n(366430),
    k = n(205184),
    R = n(773669),
    L = n(46653),
    M = n(734057),
    P = n(994500),
    D = n(967198),
    O = n(287809),
    U = n(486020),
    G = n(48726),
    w = n(725606),
    B = n(572211),
    H = n(350835),
    V = n(500060),
    F = n(432017),
    Y = n(687966),
    z = n(104171),
    K = n(792996),
    W = n(852575);
function J(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: W.i,
        children: [
            (0, s.jsx)(z.Ay, { guildId: n, users: t, max: 6, size: z.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "body-xs/normal", color: "none", children: i }),
        ],
    });
}
var Z = n(354287),
    X = n(138175),
    q = n(112150),
    $ = n(574660),
    Q = n(768349),
    ee = n(113732);
function et(e) {
    let {
            app: t,
            linkType: n,
            activityCustomId: i,
            activityReferrerId: l,
            activityChannelId: a,
            message: o,
            onView: d,
        } = e,
        { name: c, bot: m } = (t = (0, X.b)(t)),
        h = m?.id,
        g = (0, E.Z$)(t),
        p = U.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: m }),
        { staticBannerSrc: A, videoBannerSrc: x, bannerAspectRatio: v } = (0, q.f)(t),
        C = (0, u.bG)([L.default], () => l ?? L.default.getId(), [l]),
        { analyticsLocations: _ } = (0, I.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: j, instanceId: N, isCurrentlyInInstance: T, canLaunchInChannel: k } = (0, w.w)(t.id),
        R = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: m?.id }),
        P = null != h && g && R,
        D = k && g,
        O = (0, S.U4)(t),
        G = (0, $.F)(t),
        H = (0, $.t)(t),
        V = r.useMemo(() => {
            let e = [];
            function n(e) {
                y.A.launch({
                    applicationId: t.id,
                    channelId: e,
                    fromLink: !0,
                    linkChannelId: a,
                    customId: i,
                    referrerId: C,
                    analyticsLocations: _,
                });
            }
            return (
                g || O
                    ? O
                        ? e.push({
                              label: K.intl.string(K.t.RscU7I),
                              trackingArea: Z.kY.PLAY,
                              onClick() {
                                  n(null);
                              },
                          })
                        : (D &&
                              e.push({
                                  label:
                                      null == N
                                          ? K.intl.string(K.t.RscU7I)
                                          : T
                                            ? K.intl.string(K.t.DPfdsq)
                                            : K.intl.string(K.t.sqe0hj),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      n(j);
                                  },
                                  disabled: T,
                              }),
                          !D &&
                              P &&
                              e.push({
                                  label: K.intl.string(K.t.JeK1Wg),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      n(null);
                                  },
                              }))
                    : null != H && e.push(H),
                e
            );
        }, [g, H, O, t, D, P, N, T, j, i, a, C, _]),
        F = g ? (0, s.jsx)(ei, { app: t }) : (0, s.jsx)(en, { app: t });
    return (0, s.jsx)(B.h, {
        title: c,
        staticBannerSrc: A,
        videoBannerSrc: x,
        onClickBanner: G,
        bannerAspectRatio: v,
        iconSrc: p,
        info: F,
        actions: V,
        onClickContent: G,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: d,
            guildId: M.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function en(e) {
    let { app: t } = e,
        n = (0, G.A)(t) && null != t.integrationTypesConfig && v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([R.default], () => R.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : K.intl.format(K.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(A.E, { variant: "body-xs/medium", className: ee.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(A.E, {
                    variant: "body-xs/normal",
                    className: ee.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function ei(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([D.A], () => D.A.getGuildId() ?? void 0, []),
        a = (0, k.s)(t.id),
        o = (0, u.yK)(
            [O.default, P.A],
            () => {
                let e = [];
                for (let [t, n] of a.entries()) {
                    if (t >= 5) break;
                    let i = O.default.getUser(n.author_id),
                        l = P.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [a],
        ),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(J, {
                    activityUsers: o,
                    guildId: l,
                    activityText: K.intl.formatToPlainString(K.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, T.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j.FireIcon, { size: "xxs", color: "currentColor" }),
                        K.intl.string(K.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? K.intl.format(K.t.z8EAJW, { count: i }) : K.intl.string(K.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(A.E, {
                    variant: "body-xs/medium",
                    className: ee.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: ee.Tc, children: e }, t)),
                }),
            (0, s.jsx)(A.E, { variant: "body-xs/normal", className: ee.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var el = n(281581),
    es = n(257269),
    er = n(652215);
let ea = (0, u.UT)(el.A, {
    getQueryId: er.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : el.A.getOne(e, t)),
    load: (e, t) => (0, es.Py)(e, t),
});
var eo = n(309010),
    ed = n(933958),
    ec = n(782091);
function eu(e) {
    let { application: t, customId: n, channelId: i, customLink: l, referrerId: r, message: a } = e,
        o = t?.bot?.id,
        d = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        c = null != t && (0, E.Z$)(t),
        { analyticsLocations: m } = (0, I.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([eo.Ay], () => eo.Ay.getChannelId()),
        g = (0, ec.et)(h),
        p = (0, u.bG)([ed.Ay], () => {
            if (null == h) return;
            let e = ed.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([ed.Ay], () => ed.Ay.getCurrentEmbeddedActivity()),
        x = g === ec.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        C = null != n ? n : l.customId;
    function _(e) {
        y.A.launch({
            applicationId: t.id,
            channelId: e,
            fromLink: !0,
            linkChannelId: i,
            customId: C,
            referrerId: r,
            analyticsLocations: m,
        });
    }
    let j = [];
    (0, S.U4)(t)
        ? j.push({
              label: K.intl.string(K.t.RscU7I),
              trackingArea: Z.kY.PLAY,
              onClick() {
                  _(h);
              },
          })
        : (x &&
              j.push({
                  label:
                      null == p ? K.intl.string(K.t.RscU7I) : v ? K.intl.string(K.t.DPfdsq) : K.intl.string(K.t.sqe0hj),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      _(h);
                  },
                  disabled: v,
              }),
          null != o &&
              c &&
              d &&
              !x &&
              j.push({
                  label: K.intl.string(K.t.JeK1Wg),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      _(null);
                  },
              }));
    let N = (0, $.F)(t);
    return (0, s.jsx)(B.h, {
        actions: j,
        onClickContent: N,
        header: t.name,
        iconSrc: U.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: l.description }),
        staticBannerSrc: l.getAssetURL(),
        title: l.title,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.CUSTOM_ACTIVITY_LINK,
            referrerId: r,
            activityCustomId: C,
            guildId: M.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function em(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a, channelId: o } = i,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: c, error: u } = ea(t.id, r);
    return (0, E.Z$)(t)
        ? null != r && null == u && null != c
            ? (0, s.jsx)(I.f5, {
                  value: d,
                  children: (0, s.jsx)(eu, {
                      application: t,
                      customId: a,
                      channelId: o,
                      customLink: c,
                      referrerId: l,
                      message: n,
                  }),
              })
            : (0, s.jsx)(I.f5, {
                  value: d,
                  children: (0, s.jsx)(et, {
                      app: t,
                      linkType: Q.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      activityChannelId: o,
                      message: n,
                  }),
              })
        : null;
}
var eh = n(424743),
    eg = n(821609),
    ep = n(871309),
    eA = n(171576),
    ex = n(36149);
function ef(e) {
    let { channelId: t, messageId: n } = e,
        i = (0, ex.n2)(),
        l = r.useCallback(() => {
            (ep.A.showAgeVerificationGetStartedModal({ entryPoint: eA.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eA.UT)(eA.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(eg.$, {
        variant: "primary",
        text: K.intl.string((0, eh.FQ)(t, n) ? K.t.DVywUB : K.t["/nicWo"]),
        onClick: l,
        disabled: !i,
    });
}
var eI = n(107766),
    eE = n(780964),
    ev = n(766075);
function eC(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            ((0, eI.nk)() || (0, ev.openUserSettings)(eE.X.FAMILY_CENTER_PANEL), (0, eA.UT)(eA.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(eg.$, { variant: "primary", text: K.intl.string(K.t.n8a49k), onClick: n });
}
var e_ = n(277861),
    ej = n(221858);
function eN(e) {
    let { channelId: t } = e,
        n = (0, ex.n2)(),
        i = r.useCallback(() => {
            ((0, e_.Vq)(), (0, eA.UT)(eA.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(eg.$, { variant: "secondary", text: K.intl.string(ej.default.Z61nkt), onClick: i, disabled: !n });
}
var ey = n(284009),
    eb = n.n(ey),
    eT = n(664121),
    eS = n(34188),
    ek = n(408278),
    eR = n(173936),
    eL = n(858899),
    eM = n(939249),
    eP = n(996759),
    eD = n(800342),
    eO = n(163437),
    eU = n(185438),
    eG = n(97352),
    ew = n(791878),
    eB = n(67480),
    eH = n(328968),
    eV = n(129230),
    eF = n(957565),
    eY = n(943775),
    ez = n(997997),
    eK = n(658575),
    eW = n(376374),
    eJ = n(435220),
    eZ = n(140046);
let eX = (0, u.UT)([eB.A, eH.A, eG.A], {
        getQueryId: er.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = eB.A.get(e),
                n = eH.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eG.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (eb()(null != e, "skuId is null"), await (0, eD.QB)(e));
        },
    }),
    eq = (0, u.UT)([eB.A], {
        getQueryId: er.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (eB.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (eb()(null != e && null != t, "appId is null"), await (0, eD.JI)(t));
        },
    });
function e$(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eK.G)(l),
        [o, d, c, m] = (0, u.yK)(
            [ew.A, M.A],
            () => {
                let e = (0, eY.A)(t, 45),
                    n = M.A.getBasicChannel(i.channel_id)?.guild_id;
                return [ew.A.getStoreLayout(l), ew.A.getFetchStatus(l), n, e];
            },
            [t, l, i.channel_id],
        );
    r.useEffect(() => {
        d === ew.N.NONE && (0, eP.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        p = o.otps.length,
        A = r.useMemo(
            () =>
                h > 0 && p > 0
                    ? K.intl.formatToPlainString(K.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? K.intl.formatToPlainString(K.t.GSfibA, { count: h })
                      : p > 0
                        ? K.intl.formatToPlainString(K.t.j7Go5A, { count: p })
                        : K.intl.string(K.t.rMA98g),
            [p, h],
        );
    if (!a) return null;
    function x() {
        (0, g.mM)(async () => {
            let { default: e } = await Promise.all([
                n.e(538855),
                n.e(406322),
                n.e(309702),
                n.e(168031),
                n.e(99534),
                n.e(320428),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(e0, {
        appName: t.name,
        title: K.intl.formatToPlainString(K.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${er.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, ez.K)(l, ez.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eV.default.track(er.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: eZ.mZ,
            children: (0, s.jsx)(eg.$, {
                onClick: function () {
                    (x(),
                        eV.default.track(er.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: K.intl.string(K.t.kRvlKJ),
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
                { data: r } = eq(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([M.A], () => M.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eY.A)(t, 45), [t]),
        p = (0, eK.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eU.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === er.Puh.SUBSCRIPTION,
        I = !!f && (0, eO.bg)(o.flags);
    function E() {
        (0, g.mM)(async () => {
            let { default: e } = await Promise.all([
                n.e(538855),
                n.e(406322),
                n.e(309702),
                n.e(168031),
                n.e(99534),
                n.e(320428),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let v = () => {
            (0, g.mM)(async () => {
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
                          K.intl.string(K.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eT.ServerIcon, { size: "custom", width: 12, height: 12 }),
                          " ",
                          K.intl.string(K.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    function _() {
        null != o &&
            eV.default.track(er.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === C && (C = void 0),
        (0, s.jsx)(e0, {
            appName: t.name,
            title: o.name,
            description: C,
            link: `${location.protocol}//${location.host}${er.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eJ.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, ez.K)(t.id, ez.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (E(),
                    eV.default.track(er.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, s.jsxs)("div", {
                className: eZ.w,
                children: [
                    (0, s.jsx)(eg.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (v(),
                                eV.default.track(er.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: K.intl.string(K.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, s.jsx)(eW.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: I ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eS.ShopIcon,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, s.jsx)(eg.$, { variant: "primary", text: K.intl.string(K.t.uuzaAK), onClick: v })
                        : (0, s.jsx)(eW.$P, { appId: t.id, sku: o, icon: eS.ShopIcon, onHasClicked: _ }),
                ],
            }),
        })
    );
}
function e0(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: eZ.iE,
        children: [
            (0, s.jsxs)("div", {
                className: eZ.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: eZ.qd,
                        children: [
                            (0, s.jsx)(eS.ShopIcon, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "body-sm/medium", color: "text-muted", children: t }),
                        ],
                    }),
                    eF.p5 &&
                        (0, s.jsx)(ek.K, {
                            "aria-label": K.intl.string(K.t.WqhZss),
                            icon: () => (0, s.jsx)(eR.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eF.C)(l, () => {
                                    ((0, eL.P0)({ text: K.intl.string(K.t["L/PwZf"]), variant: "success" }), o());
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eZ.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eZ.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eM.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: eZ.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: eZ.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(A.E, { variant: "heading-sm/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(A.E, {
                                            variant: "heading-sm/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eZ.h_,
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
var e1 = n(116653),
    e2 = n(613412),
    e3 = n(139286);
function e5(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e3.x)({
                type: e2.ImpressionTypes.VIEW,
                name: e2.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, G.A)(t)
        ? (0, s.jsx)(I.f5, {
              value: i,
              children: (0, s.jsx)(et, { app: t, linkType: Q.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var e6 = n(778492),
    e9 = n(534514),
    e4 = n(285796),
    e8 = n(857182),
    e7 = n(506774),
    te = n(73153),
    tt = n(576705),
    tn = n(812930);
let ti = "ChannelFollowingBumpChannels",
    tl = new Set(),
    ts = new Set();
class tr extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        (this.waitFor(L.default, M.A, tt.A, O.default), (tl = new Set(e7.w.get(ti))));
    }
    shouldShowBump(e) {
        return ts.has(e);
    }
}
let ta = new tr(te.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tl.has(t)) return !1;
        let l = M.A.getChannel(t),
            s = O.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === er.rbe.GUILD_ANNOUNCEMENT &&
                (0, tn.A)(n) &&
                tt.A.can(er.xBc.SEND_MESSAGES, l) &&
                (r || tt.A.can(er.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), er.pr7.CROSSPOSTED)
            )
        )
            return !1;
        ts.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        ts.has(t.id) && c.Lt(Number(t.flags), er.pr7.CROSSPOSTED) && ts.delete(t.id);
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
        (tl.add(t), e7.w.set(ti, tl), ts.clear());
    },
});
var to = n(419056),
    td = n(732929);
let tc = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([ta], () => ta.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            (e8.A.dismissPublishBump(n), (0, to.A)(t, n));
        }, [t, n]),
        a = r.useCallback(() => {
            e8.A.dismissPublishBump(n);
        }, [n]),
        o = r.useCallback(() => {
            e8.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: td.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: td.mp,
                      children: [
                          (0, s.jsx)(e6.AnnouncementsIcon, { size: "xs", color: "currentColor", className: td.Kk }),
                          (0, s.jsx)(e9.D, {
                              variant: "heading-xs/medium",
                              className: td.dS,
                              children: K.intl.string(K.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: td.mk,
                              variant: "body-sm/normal",
                              children: (0, s.jsx)(eM.D, { onClick: l, children: K.intl.string(K.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eM.D, {
                              onClick: a,
                              children: (0, s.jsx)(e4.CircleXIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: td.ut,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(A.E, {
                      color: "text-muted",
                      className: td.qx,
                      variant: "body-sm/normal",
                      children: (0, s.jsx)(eM.D, { onClick: o, children: K.intl.string(K.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tu = n(265705),
    tm = n(435558),
    th = n.n(tm),
    tg = n(239947),
    tp = n(403581),
    tA = n(97808),
    tx = n(778712),
    tf = n(520117),
    tI = n(793943),
    tE = n(763754),
    tv = n(973654),
    tC = n(467135),
    t_ = n(644235),
    tj = n(162772),
    tN = n(958904),
    ty = n(988986);
function tb(e) {
    return e.map((e) => `#${e}`);
}
function tT(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tC.k)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: ty.kL,
              children: [
                  (0, s.jsx)(tS, { message: t }),
                  (0, s.jsx)(eg.$, {
                      text: K.intl.string(K.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eV.default.track(er.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tI.nf)(tI.HP.CUSTOM_THEME, { from: tI.xv.SHARE_MESSAGE }),
                              i({
                                  colors: tb(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tv.GQ)((0, t_.PC)(n.base_theme)));
                      },
                  }),
              ],
          });
}
function tS(e) {
    var t, n, i, l;
    let { message: a } = e,
        { sharedClientTheme: o } = a,
        d = (0, tE.Ay)(a),
        c = r.useMemo(
            () =>
                (0, tm.once)(() => {
                    (0, e3.x)({ type: e2.ImpressionTypes.VIEW, name: tg.IJ.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        u = (0, tf.A)({
            onVisible: () => {
                c();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        m = r.useMemo(() => (void 0 === o ? "" : (0, tj.V9)(tb(o.colors), o.gradient_angle ?? 0)), [o]);
    return void 0 === o
        ? null
        : (0, s.jsxs)("div", {
              className: ty.pS,
              ref: u,
              children: [
                  (0, s.jsx)("div", { className: ty.sl, style: { background: `${m}` } }),
                  (0, s.jsxs)("div", {
                      className: ty.Ix,
                      children: [
                          (0, s.jsxs)(e9.D, {
                              variant: "heading-sm/semibold",
                              className: ty.qP,
                              children: [K.intl.string(tN.default.KSBBpC), " ", (0, s.jsx)(tp.NitroWheelIcon, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              className: ty.Tb,
                              children:
                                  ((t = `${K.intl.format(tN.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = a.author),
                                  (i = d.nick),
                                  (l = d.guildId),
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
                                                            (0, s.jsx)(tA.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(l, 20),
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
var tk = n(76349),
    tR = n(167189),
    tL = n(758836);
let tM = new Set(Object.values(tL.G2).filter((e) => e !== tL.G2.COLLECTION_INDEX));
var tP = n(115560),
    tD = n(172218),
    tO = n(612324),
    tU = n(575593),
    tG = n(318254),
    tw = n(890856),
    tB = n(866665),
    tH = n(825484),
    tV = n(289873),
    tF = n(444927),
    tY = n(713517),
    tz = n(427209),
    tK = n(44120),
    tW = n(821925),
    tJ = n(744082),
    tZ = n(309954),
    tX = n(652165),
    tq = n(448645),
    t$ = n(580630),
    tQ = n(969935),
    t0 = n(857512),
    t1 = n(4227),
    t2 = n(298072),
    t3 = n(993408),
    t5 = n(313217),
    t6 = n(682301),
    t9 = n(841702),
    t4 = n(466459),
    t8 = n(777829),
    t7 = n(859587),
    ne = n(918838),
    nt = n(623373),
    nn = n(536572),
    ni = n(60831),
    nl = n(856383);
class ns extends r.Component {
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
var nr = n(878112),
    na = n(722258),
    no = n(470085),
    nd = n(387945),
    nc = n(601938),
    nu = n(140877),
    nm = n(561769),
    nh = n(784054),
    ng = n(301198),
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
    nI = new Set(),
    nE = new Map(),
    nv = null;
function nC(e) {
    let t = nE.get(e);
    return null != t && Date.now() - t < nx;
}
var n_ = n(347722),
    nj = n(935094),
    nN = n(57020),
    ny = n(61750),
    nb = n(521e3),
    nT = n(682901),
    nS = n(278324);
function nk() {
    return ((0, t9.b5)(), null);
}
function nR(e) {
    let { disableFetch: t } = e;
    return ((0, tZ.W)({ disableFetch: t }), null);
}
function nL(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: l, checkoutEligiblePrices: a } = (0, nN.F)({ product: t, hasShopDiscount: n }),
        o = a[0],
        d = t.skuId,
        c = r.useCallback(() => {
            l
                ? (0, tX.B4)({
                      skuId: d,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          ((0, tQ.gB)(),
                              (0, ny.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tL.gs.ORB,
                              }));
                      },
                  })
                : (0, tK.A)({
                      skuId: d,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, tQ.gB)();
                      },
                  });
        }, [t, d, l, i]);
    if (null == o) return null;
    let u = l
        ? K.intl.format(K.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tG.OrbsIcon, { className: nS.fN, size: "sm", color: "currentColor" }),
          })
        : K.intl.formatToPlainString(K.t["cNSL/j"], { price: (0, t$.$g)(o.amount, o.currency) });
    return (0, s.jsx)(eg.$, { variant: "primary", onClick: c, text: u, fullWidth: !0 });
}
function nM(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        d = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = (0, t5.s)("collectibles_shop_product_details_embed");
    (0, tJ.A)(m ? er.FYj : void 0);
    let h = r.useRef(null),
        { isHoveringOrFocusing: g } = (0, tY.A)(h),
        p = r.useRef(null),
        A = (0, ne.U)(t),
        x = (0, tO.A)(p, A);
    (0, t7.x)(g, t);
    let { previewingVariantIndex: f, handleEntering: E, handleLeaving: v } = (0, nj.f)(t),
        C = r.useRef(!1);
    r.useEffect(() => {
        if (C.current || !(0, nt.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        (e > -1 && (0, t2.n)(t, e), (C.current = !0));
    }, [t, n]);
    let _ = (0, t2.Q)(t),
        j = (0, nt.B1)(t) ? (t.variants[_] ?? t) : t,
        N = j.skuId,
        { isPurchased: y } = (0, t4.h)(j),
        b = (0, u.bG)([t1.A], () => t1.A.hasPreviouslyFetched || null != t1.A.fetchError),
        T = !c || b,
        S = c && y,
        k = (0, u.bG)([O.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = O.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (O.default.getUser(t) ?? void 0) : void 0;
        }),
        R = (0, n_.X)(j),
        L = (0, t8.f)({ product: t, analyticsLocations: a }),
        M = (0, ni.G)({
            skuId: N,
            product: j,
            productName: (0, nn.VG)(j),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: L,
        }),
        P = r.useCallback(
            (e) => {
                (e.stopPropagation(), M());
            },
            [M],
        ),
        D = r.useCallback(() => {
            (0, na.B)({ skuId: N, tab: i, analyticsLocations: a });
        }, [N, i, a]),
        U = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: D }), [D]),
        G = r.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        w = null != d && tq.Ay.canUseShopDiscounts(d),
        B = T && !S && !(0, t3.G0)(j),
        H = (0, s.jsx)(eg.$, { variant: "secondary", onClick: D, text: K.intl.string(K.t.KLBTgF), fullWidth: !0 }),
        V = B ? (0, s.jsx)(nL, { product: j, hasShopDiscount: w, analyticsLocations: a }) : null,
        F = R
            ? (0, s.jsx)(nr.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: _,
                  giftRecipient: k,
                  giftingOrigin: nT.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        ref: h,
        className: nS.kL,
        children: [
            c && (0, s.jsx)(nk, {}),
            (0, s.jsx)(nR, { disableFetch: !(0, nt.Vx)(j) }),
            (0, s.jsxs)(nm.v3.Provider, {
                value: G,
                children: [
                    (0, s.jsx)(nb.vf.Provider, {
                        value: (0, nb.$c)(t.skuId) ? p : null,
                        children: (0, s.jsxs)(tw.s, {
                            ref: x,
                            onClick: D,
                            "aria-label": (0, nn.s7)(j),
                            className: nS.xX,
                            children: [
                                t.type === tU.R.BUNDLE &&
                                    t.previewAssets?.bgStatic != null &&
                                    (0, s.jsx)("img", { className: nS.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: nS.VH,
                                    children: (0, s.jsx)(nc.A, { skuId: n, isCardHovered: g, overrideVariantIndex: f }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: nS.GJ,
                                    children: [
                                        (0, s.jsx)(no.A, { skuId: n }),
                                        (0, s.jsxs)("div", {
                                            className: nS.gj,
                                            children: [
                                                (0, s.jsx)(tB.m, {
                                                    text: K.intl.string(K.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eM.D, {
                                                        "aria-label": K.intl.string(K.t.Ej3B3Y),
                                                        onClick: P,
                                                        className: o()(nS.VD, { [nS.Hk]: !g }),
                                                        children: (0, s.jsx)(tz.A, {
                                                            size: "refresh_sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(ng.R, {
                                                    product: t,
                                                    selectedVariantIndex: _,
                                                    isCardHovered: g,
                                                    onTrackClick: L,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: nS.zH,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nS.pq,
                                children: [
                                    (0, s.jsx)(nd.A, { skuId: n }),
                                    (0, s.jsxs)("div", {
                                        className: nS.y3,
                                        children: [
                                            (0, s.jsx)(nu.A, { skuId: n }),
                                            (0, s.jsx)(nh.A, {
                                                skuId: n,
                                                isCollapsed: !g,
                                                onVariantEnter: E,
                                                onVariantExit: v,
                                                overflowProps: U,
                                                onTrackClick: L,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(tH.e, { wrap: !1, fullWidth: !0, children: [H, V, F] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nP = { rootMargin: "200px" };
function nD(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t6.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tW.A], () => tW.A.getFetchStateForSku(e.skuId)),
        a = (0, tF.A)(() => ({ cardId: (0, tP.A)() })),
        [o, d] = r.useState(!1),
        c = (0, tD.B)(
            r.useCallback((e) => {
                e.isIntersecting && d(!0);
            }, []),
            nP,
            "loading" === i && !o,
        );
    return (r.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nI.has(t) || nC(t)) &&
            !(nI.size >= 50) &&
            (0, np.jn)(t) &&
            (nI.add(t),
            (function e(t) {
                null == nv &&
                    (nv = setTimeout(() => {
                        ((nv = null),
                            (function () {
                                for (let e of [...nI]) (nC(e) || !(0, np.jn)(e)) && nI.delete(e);
                                if (0 === nI.size) return;
                                let t = [];
                                for (let e of nI) {
                                    if (t.length >= 50 || !nf.tryTake()) break;
                                    (t.push(e),
                                        nI.delete(e),
                                        (function (e) {
                                            if ((nE.set(e, Date.now()), nE.size > 2e3)) {
                                                let e = nE.keys().next().value;
                                                null != e && nE.delete(e);
                                            }
                                        })(e));
                                }
                                (t.length > 0 && (0, np.tu)({ skuIds: t }),
                                    nI.size > 0 && e(Math.max(nf.getMsUntilAvailable(), 300)));
                            })());
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nC(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: c,
                  className: nS.kL,
                  children: (0, s.jsx)("div", { className: nS.dc, children: (0, s.jsx)(tV.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(t0.R9, { newValue: a, children: (0, s.jsx)(nM, { ...e, product: t }) })
          : null;
}
function nO(e) {
    return (0, s.jsx)(ns, { children: (0, s.jsx)(nD, { ...e }) });
}
var nU = n(729160);
(n(323874), n(14289), n(35956));
var nG = n(194261),
    nw = n(323384),
    nB = n(757789),
    nH = n(26137),
    nV = n(430392),
    nF = n(231483),
    nY = n(95264),
    nz = n(694185),
    nK = n(529424),
    nW = n(412667),
    nJ = n(395009),
    nZ = n(207602),
    nX = n(77135),
    nq = n(191850),
    n$ = n(471066);
function nQ(e) {
    let { applicationId: t, guildId: n, channelId: i, ticket: l = null } = e,
        a = (0, nK.A)(t, l),
        o = r.useMemo(() => ({ guildId: n, channelId: i }), [n, i]);
    switch (a.type) {
        case "loading":
        case "unavailable":
            return null;
        case "no_access":
        case "expired":
            return (0, s.jsx)("div", {
                className: n$.Nr,
                children: (0, s.jsxs)("div", {
                    className: n$.lm,
                    children: [
                        (0, s.jsx)(nG.LockIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, s.jsx)(A.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: K.intl.string("expired" === a.type ? nq.default.wahvH2 : nq.default.mQma36),
                        }),
                    ],
                }),
            });
        case "info_only":
            return (0, s.jsxs)("div", {
                className: n$.Nr,
                children: [
                    (0, s.jsx)(nZ.go, { application: a.application, className: n$.Iv }),
                    (0, s.jsxs)("div", {
                        className: n$.rf,
                        children: [
                            (0, s.jsx)(n3, { application: a.application, source: o, ticket: l }),
                            (0, s.jsx)(A.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: K.intl.string(nq.default["2DSRxV"]),
                            }),
                        ],
                    }),
                ],
            });
        case "ready":
            return (0, s.jsx)(n0, {
                application: a.application,
                project: a.project,
                canRemix: a.canRemix,
                source: o,
                ticket: l,
            });
    }
}
function n0(e) {
    let { application: t, project: n, canRemix: i, source: l, ticket: r } = e,
        { type: a, launching: o, launchFailed: d, run: c } = (0, nW.A)(t.id, n, l),
        u = null != a || null != (0, nZ.zM)(t),
        m = (0, s.jsx)(n2, { project: n, onCover: u });
    return (0, s.jsxs)("div", {
        className: n$.Nr,
        children: [
            null != a
                ? (0, s.jsx)(nJ.A, {
                      application: t,
                      type: a,
                      launching: o,
                      onAction: c,
                      revealActionOnHover: !0,
                      className: n$.Iv,
                      children: m,
                  })
                : u
                  ? (0, s.jsxs)("div", {
                        className: n$.Nq,
                        children: [(0, s.jsx)(nZ.go, { application: t, className: n$.Iv }), m],
                    })
                  : null,
            (0, s.jsxs)("div", {
                className: n$.rf,
                children: [
                    u ? null : m,
                    (0, s.jsx)(n3, { application: t, source: l, ticket: r }),
                    d
                        ? (0, s.jsx)(A.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: K.intl.string(nq.default.hh2nuX),
                          })
                        : null,
                ],
            }),
            (0, s.jsxs)("div", {
                className: n$.qr,
                children: [
                    (0, s.jsx)(nZ.HP, { project: n, guildId: l.guildId }),
                    i ? (0, s.jsx)(n5, { project: n, guildId: l.guildId, ticket: r }) : null,
                ],
            }),
        ],
    });
}
let n1 = {
    app: nw.AppsIcon,
    overlay: nB.WindowTopIcon,
    profile_widget: nH.UserCircleIcon,
    bot: nV.RobotIcon,
    automod: nF.ShieldIcon,
};
function n2(e) {
    let { project: t, onCover: n } = e,
        i = (0, nz.Y$)(t.supported_surfaces ?? []);
    return 0 === i.length
        ? null
        : (0, s.jsx)("ul", {
              className: n ? n$.AZ : n$._A,
              children: i.map((e) => {
                  let t = n1[e];
                  return (0, s.jsxs)(
                      "li",
                      {
                          className: n ? n$.Z_ : n$.Tc,
                          children: [
                              (0, s.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                              (0, s.jsx)(A.E, { variant: "body-xs/medium", color: "none", children: (0, nz.T8)(e) }),
                          ],
                      },
                      e,
                  );
              }),
          });
}
function n3(e) {
    let { application: t, source: n, ticket: i } = e;
    return (0, s.jsx)(eM.D, {
        className: n$.Rt,
        "aria-label": K.intl.formatToPlainString(nq.default.c8DqSD, { name: t.name }),
        onClick: () => (0, nX.default)(t.id, n, i),
        children: (0, s.jsx)(nZ.PJ, { application: t, descriptionLineClamp: 2 }),
    });
}
function n5(e) {
    let { project: t, guildId: n, ticket: i } = e,
        l = i ?? void 0;
    return (0, s.jsx)(tH.e, {
        size: "sm",
        className: n$.o1,
        children: (0, s.jsx)(eg.$, {
            variant: "primary",
            text: K.intl.string(nq.default.XWgAfc),
            onClick: () => (0, nY.A)(t, n, "copy", l),
        }),
    });
}
var n6 = n(646514),
    n9 = n(696986),
    n4 = n(149468),
    n8 = n(682163),
    n7 = n(250627),
    ie = n(362280),
    it = n(202501),
    ii = n(71393),
    il = n(722888),
    is = n(43136),
    ir = n(575926),
    ia = n(775429);
function io(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([ii.A], () => ii.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, il.G)(t),
        { listingsLoaded: a } = (0, n7.bb)(t),
        d = (0, n7.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            (eV.default.track(er.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, n4.H$)(t) }),
                await (0, ie.A)(er.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, e3.A)(
        { type: e2.ImpressionTypes.VIEW, name: e2.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(ia.lm, ia.dc), children: (0, s.jsx)(tV.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: ia.lm,
                children: [
                    (0, s.jsx)(is.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(n9.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: ia.qs,
                        children: [
                            (0, s.jsx)(ir.h, {
                                height: "16px",
                                width: "16px",
                                color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e9.D, {
                                variant: "heading-xs/semibold",
                                color: "interactive-text-default",
                                className: ia.Nl,
                                children: K.intl.string(K.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(n9.h, { size: 16 }),
                    (0, s.jsx)(e9.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: K.intl.format(K.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(n9.h, { size: 4 }),
                    (0, s.jsx)(A.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(n9.h, { size: 16 }),
                    (0, s.jsx)(it.A, {}),
                    (0, s.jsx)(n9.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: ia.kS,
                        children: [
                            (0, s.jsx)(n8.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: ia.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(A.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: K.intl.format(K.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
                                                variant: "body-sm/normal",
                                                color: "text-muted",
                                                children: K.intl.format(K.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: ia.$h,
                                children: (0, s.jsx)(eg.$, { onClick: c, icon: ir.A, text: K.intl.string(K.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var id = n(390248),
    ic = n(282108),
    iu = n(33358),
    im = n(885574),
    ih = n(874840);
function ig(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eM.D, {
        onClick: function () {
            (0, g.mM)(async () => {
                let { default: e } = await Promise.all([n.e(377804), n.e(486381), n.e(635270)]).then(n.bind(n, 743461));
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: ih.L,
        children: [
            (0, s.jsx)(im.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(A.E, { variant: "body-xs/normal", className: ih.m, children: K.intl.string(K.t["2aXnfa"]) }),
        ],
    });
}
var ip = n(974875),
    iA = n(705833);
function ix(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([iA.A], () => iA.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, ip.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(eg.$, { variant: "secondary", text: K.intl.string(K.t["4q1Elf"]), onClick: l, disabled: !i });
}
var iI = n(320448),
    iE = n(958340),
    iv = n(384231),
    iC = n(959698),
    i_ = n(74096),
    ij = n(538355),
    iN = n(253932),
    iy = n(47167),
    ib = n(5377),
    iT = n(661191),
    iS = n(427930);
function ik(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: U.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: K.intl.formatToPlainString(K.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class iR {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        ((this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ii.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : iE.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, iS.A)(a) ? a.messageReference?.message_id : void 0,
            c = (0, ib.Fe)(null != d ? new Date(iT.default.extractTimestamp(d)) : o.message.timestamp),
            u = e.getChannel(this.parentMessage.channel_id);
        if (null != u && u.guild_id === a.messageReference?.guild_id) {
            var m;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(u.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ik(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (m = (0, iy.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: K.intl.formatToPlainString(K.t["+l04BN"], { origin: m, timestamp: c }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let h = a.messageReference?.guild_id;
        if (null == h) return { snapshotIndex: r };
        let g = l.getGuild(h) ?? s.getGuild(h);
        return null == g ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ik(g, c) };
    }
}
var iL = n(778858),
    iM = n(448741),
    iP = n(449054),
    iD = n(387408),
    iO = n(352106);
function iU() {
    return (0, s.jsxs)("div", {
        className: iO.N1,
        children: [
            (0, s.jsx)(tz.A, { size: "xs", className: iO.nr, color: n6.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: iO.TK,
                variant: "body-sm/semibold",
                color: "text-muted",
                children: K.intl.string(K.t.ToyvLk),
            }),
        ],
    });
}
function iG(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new iR(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [M.A, O.default, P.A, tt.A, ii.A, iE.A],
            () => l.getForwardInfo(M.A, O.default, P.A, tt.A, ii.A, iE.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            !(async function (e) {
                if (null == e.messageReference) return;
                let t = e.messageReference.guild_id,
                    n = e.messageReference.channel_id,
                    i = e.messageReference.message_id,
                    l = M.A.getChannel(n),
                    s = !1,
                    r = !1;
                if (null == l && null != t && null == ii.A.getGuild(t))
                    try {
                        (await (0, iP.Z2)(t, { object: er.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                            (s = !0),
                            await (0, iL.k)(t),
                            (l = M.A.getChannel(n)));
                    } catch (e) {
                        r = e instanceof iM.w;
                    }
                if (
                    (eV.default.track(er.HAw.FORWARD_BREADCRUMB_CLICKED, {
                        guild_id: M.A.getBasicChannel(e.channel_id)?.guild_id,
                        channel_id: e.channel_id,
                        message_id: e.id,
                        breadcrumb_guild_id: t,
                        breadcrumb_channel_id: n,
                        breadcrumb_message_id: i,
                        did_lurk: s,
                    }),
                    r)
                )
                    return;
                let a = s ? n : void 0;
                (0, ie.A)(er.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: a });
            })(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eM.D, {
              className: iO.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: iO.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: iO.PJ,
                      variant: "body-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(iI.ChevronSmallRightIcon, { size: "xxs", color: n6.A.colors.TEXT_MUTED }),
              ],
          });
}
function iw(e) {
    let {
            message: t,
            renderAccessories: n,
            snapshot: i,
            index: l,
            disableComponentInteractivity: a,
            allowFullScreen: o,
            onMediaItemContextMenu: d,
        } = e,
        c = r.useMemo(() => (0, iD.A)(t, i), [t, i]),
        m = iN.hD.useSetting(),
        h = iN.rs.useSetting(),
        g = (0, iC.U)(),
        p = (0, iv.S)((c.editedTimestamp ?? c.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: x,
            hasBailedAst: f,
        } = (0, ij.A)(c, {
            hideSimpleEmbedContent: m && h,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, u.bG)([M.A], () => M.A.getChannel(t.channel_id)),
        E = iN.hH.useSetting();
    return null == I
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: iO.kL,
                  children: [
                      (0, s.jsx)("div", { className: iO.hD }),
                      (0, s.jsxs)("div", {
                          className: iO.Qs,
                          children: [
                              (0, s.jsx)(iU, {}),
                              (0, s.jsx)(i_.Ay, { message: c, content: A, compact: E }),
                              n({
                                  channelMessageProps: { message: c, channel: I, compact: E },
                                  hasSpoilerEmbeds: x,
                                  hasBailedAst: f,
                                  handleContextMenu: d,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: a,
                                  allowFullScreen: o,
                              }),
                              !g && (0, s.jsx)(iG, { message: t, snapshot: i, index: l }),
                          ],
                      }),
                  ],
              },
              l,
          );
}
function iB(e) {
    let {
        message: t,
        renderAccessories: n,
        disableComponentInteractivity: i,
        allowFullScreen: l,
        onMediaItemContextMenu: r,
    } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, a) =>
            (0, s.jsx)(
                iw,
                {
                    message: t,
                    snapshot: e,
                    index: a,
                    renderAccessories: n,
                    disableComponentInteractivity: i,
                    allowFullScreen: l,
                    onMediaItemContextMenu: r,
                },
                a,
            ),
        ),
    });
}
var iH = n(315629),
    iV = n(331322),
    iF = n(177953),
    iY = n(839516),
    iz = n(529200);
function iK() {
    return (0, s.jsxs)(iz.A, {
        children: [
            (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t["N/g9Z4"]) }),
            (0, s.jsx)(iz.A.Body, { resolving: !0 }),
        ],
    });
}
var iW = n(345942),
    iJ = n(580583),
    iZ = n(372058),
    iX = n(752222),
    iq = n(892672),
    i$ = n(591022),
    iQ = n(673383),
    i0 = n(222951),
    i1 = n(276228);
function i2() {
    let e = r.useId();
    return (0, s.jsxs)(iz.A, {
        role: "group",
        "aria-labelledby": e,
        children: [
            (0, s.jsx)(iz.A.Header, {
                text: K.intl.formatToPlainString(iX.default["jKi+kc"], { displayNoun: "other" }),
            }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsx)(iz.A.Icon, { expired: !0 }),
                    (0, s.jsx)(iz.A.Info, {
                        expired: !0,
                        title: K.intl.string(iX.default["2/aTr2"]),
                        titleId: e,
                        titleVariant: "heading-sm/medium",
                        children: K.intl.formatToPlainString(iX.default["L/fHgw"], { displayNoun: "other" }),
                    }),
                ],
            }),
        ],
    });
}
function i3(e) {
    let { invite: t } = e,
        i = r.useId(),
        l = (0, u.bG)([L.default], () => L.default.getId()),
        a = (0, u.bG)([ii.A], () => null != ii.A.getGuild(t.guildId)),
        o = t.accepted && t.inviterId !== l && a,
        { code: d, organization: c, application: m, displayNoun: h, accepted: p, inviterId: x, guildId: I } = t,
        { memberCount: E, maxMembers: v, description: C } = c,
        _ = null != E && null != v,
        j = null != C && "" !== C,
        N = (function (e) {
            let { accepted: t, isInviter: n, canGoToGuild: i, displayNoun: l, isGameOrganizationFull: s } = e;
            return t
                ? i
                    ? { kind: "go_to_server", label: K.intl.string(iX.default.H1wMHV), actionable: !0 }
                    : { kind: "joined", label: K.intl.string(K.t.cEnaWx), actionable: !1 }
                : s
                  ? {
                        kind: "full",
                        label: K.intl.formatToPlainString(iX.default.rMimTG, { displayNoun: l ?? "other" }),
                        actionable: !1,
                    }
                  : n
                    ? { kind: "awaiting", label: K.intl.string(iX.default.OkMPbI), actionable: !1 }
                    : {
                          kind: "join",
                          label: K.intl.formatToPlainString(iX.default["Cz/ZUM"], { displayNoun: l ?? "other" }),
                          actionable: !0,
                      };
        })({ accepted: p, isInviter: l === x, canGoToGuild: o, displayNoun: h, isGameOrganizationFull: (0, iY.A)(c) }),
        y = (0, u.bG)([iJ.A], () => iJ.A.isJoinFlowPending(d));
    return (0, s.jsx)(iH.h, {
        color: "purple",
        className: i1.Nr,
        role: "group",
        "aria-labelledby": i,
        children: (0, s.jsxs)(iV.B, {
            gap: 12,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "body-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: K.intl.formatToPlainString(iX.default["jKi+kc"], { displayNoun: h ?? "other" }),
                }),
                (0, s.jsxs)(iV.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 12,
                    children: [
                        (0, s.jsx)(iq.A, { iconUrl: c.iconUrl, size: 64, fallback: "guild" }),
                        (0, s.jsxs)(iV.B, {
                            gap: 4,
                            className: i1.Ky,
                            children: [
                                (0, s.jsx)(e9.D, {
                                    id: i,
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: c.name,
                                }),
                                (0, s.jsxs)(iV.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(iV.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 4,
                                            fullWidth: !1,
                                            className: i1.Nz,
                                            children: [
                                                null != m.iconUrl
                                                    ? (0, s.jsx)("img", { src: m.iconUrl, alt: "", className: i1.Gt })
                                                    : null,
                                                (0, s.jsx)(A.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    children: m.name,
                                                }),
                                            ],
                                        }),
                                        _
                                            ? (0, s.jsxs)(iV.B, {
                                                  direction: "horizontal",
                                                  align: "center",
                                                  gap: 4,
                                                  fullWidth: !1,
                                                  className: i1.Nz,
                                                  children: [
                                                      (0, s.jsx)(iF.GroupIcon, {
                                                          size: "xs",
                                                          color: n6.A.colors.ICON_MUTED,
                                                      }),
                                                      (0, s.jsx)(A.E, {
                                                          variant: "body-xs/normal",
                                                          color: "text-strong",
                                                          children: K.intl.formatToPlainString(iX.default.VuENGl, {
                                                              count: E,
                                                              max: v,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                j
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("div", { className: i1.yF }),
                              (0, s.jsx)(A.E, {
                                  variant: "body-sm/normal",
                                  color: "text-default",
                                  lineClamp: 3,
                                  children: C,
                              }),
                          ],
                      })
                    : null,
                (0, s.jsx)(eg.$, {
                    variant: "overlay-primary",
                    fullWidth: !0,
                    text: N.label,
                    disabled: !N.actionable,
                    loading: y,
                    onClick: function () {
                        switch (N.kind) {
                            case "go_to_server":
                                (0, iW.u)(I);
                                return;
                            case "join":
                                !(function (e) {
                                    let t = iJ.A.getInvite(e);
                                    if (t?.state === iQ.Zb.RESOLVED) {
                                        var i;
                                        if ("linked" === (0, i$.n)(t.application.id)) return (0, i0.A)(e);
                                        ((i = [f.A.INVITE_EMBED]),
                                            (0, g.mM)(
                                                async () => {
                                                    let { default: t } = await Promise.all([
                                                        n.e(817670),
                                                        n.e(358082),
                                                        n.e(75893),
                                                    ]).then(n.bind(n, 137556));
                                                    return (n) =>
                                                        (0, s.jsx)(t, { code: e, analyticsLocations: i, ...n });
                                                },
                                                { modalKey: iQ.MC },
                                            ));
                                    }
                                })(d);
                                return;
                        }
                    },
                }),
            ],
        }),
    });
}
function i5(e) {
    let { code: t } = e,
        n = (0, iZ.E9)("web_coded_link_embed"),
        i = (0, u.bG)([iJ.A], () => iJ.A.getInvite(t));
    if (!n) return null;
    if (null == i) return (0, s.jsx)(iK, {});
    switch (i.state) {
        case iQ.Zb.RESOLVING:
            return (0, s.jsx)(iK, {});
        case iQ.Zb.ERROR:
            return (0, s.jsx)(i2, {});
        case iQ.Zb.RESOLVED:
            return (0, s.jsx)(i3, { invite: i });
    }
}
var i6 = n(109112),
    i9 = n(805251),
    i4 = n(369606),
    i8 = n(980822),
    i7 = n(409626),
    le = n(49491),
    lt = n(692969),
    ln = n(575568);
function li(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: r,
            openGameProfile: a,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, i8.A)({ gameId: t }),
                r = (0, lt.A)({ gameId: t, source: i7.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                a = (0, le.A)(l),
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
        ? (0, s.jsxs)(tw.s, {
              className: ln.E6,
              onClick: a,
              "aria-label": K.intl.formatToPlainString(K.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: ln.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: ln.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: ln.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: ln.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: ln.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: ln.EU,
                                    children: (0, s.jsx)(i6.UnknownGameIcon, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: ln.Qs,
                              children: [
                                  (0, s.jsx)(e9.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: ln.k3,
                                          children: (0, s.jsx)(i9.E, {
                                              variant: "secondary",
                                              type: {
                                                  text: K.intl.formatToPlainString(K.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: i4.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(ek.K, {
                              icon: iI.ChevronSmallRightIcon,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": K.intl.formatToPlainString(K.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ll = n(281445),
    ls = n(554146),
    lr = n(933832),
    la = n(624479),
    lo = n(263775),
    ld = n(454908),
    lc = n(95035),
    lu = n(403362),
    lm = n(196736),
    lh = n(614393),
    lg = n(143407),
    lp = n(685743),
    lA = n(349085),
    lx = n(581453),
    lf = n(342942),
    lI = n(174861),
    lE = n(49999),
    lv = n(105518),
    lC = n(116947);
function l_(e) {
    let { code: t } = e,
        n = r.useMemo(() => (0, lI.GF)(t), [t]);
    r.useEffect(() => {
        y.A.getDetectableGames();
    }, []);
    let i = (0, lA.A)(n?.game_id, "cover"),
        { data: l } = (0, ld.I)(n?.game_id),
        a = (0, lm.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [d, c] = (0, lo.kn)([ls.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = d !== ls.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? ll.X.SHOCKBYTE,
        h = L.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: x } = (0, lp.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
        I = r.useCallback(() => {
            (0, tQ.Cz)({
                tab: tL.G2.GAME_SERVERS,
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
                    ? (0, lx.A)(h, E)
                    : (0, lf.A)({
                          provider: m,
                          onAccept: () => {
                              (c(lE.i.TAKE_ACTION), (0, lx.A)(h, E));
                          },
                      }));
        }, [E, u, m, c, h]),
        C = r.useCallback(() => {
            (0, lf.A)({
                provider: m,
                onAccept: () => {
                    (c(lE.i.TAKE_ACTION), p());
                },
            });
        }, [m, c, p]);
    if (null == n) return null;
    let _ = [l?.name, n.plan_name].filter(lu.Vq).join("  \u2022  ");
    return (0, s.jsxs)("div", {
        className: lC.E6,
        children: [
            (0, s.jsxs)("div", {
                className: lC.FG,
                children: [
                    (0, s.jsxs)("div", {
                        className: lC.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: lC.oL,
                                children: [
                                    "" !== o
                                        ? (0, s.jsx)("img", { className: lC.vT, src: o, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: lC.iv,
                                              children: (0, s.jsx)(A.E, {
                                                  variant: "body-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: lC.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: lC.TK,
                                children: [
                                    (0, s.jsx)(e9.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== _ &&
                                        (0, s.jsx)(A.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                ],
                            }),
                            a &&
                                (0, s.jsx)("div", {
                                    className: lC.xG,
                                    children: (0, s.jsx)(ek.K, {
                                        variant: "secondary",
                                        icon: eS.ShopIcon,
                                        "aria-label": K.intl.string(lv.default.F5W36W),
                                        onClick: I,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lC.$D,
                        children: [
                            (0, s.jsxs)("div", {
                                className: lC.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-muted",
                                        children: K.intl.string(lv.default.mJlz3T),
                                    }),
                                    (0, s.jsx)(A.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        children:
                                            null != n.region_name && "" !== n.region_name ? n.region_name : "\u2014",
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: lC.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-muted",
                                        children: K.intl.string(lv.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(A.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: lC.qy,
                                                children: [
                                                    (0, s.jsx)(A.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eM.D, {
                                                        className: lC.cL,
                                                        "aria-label": K.intl.string(K.t.OpuAlK),
                                                        onClick: p,
                                                        children: x
                                                            ? (0, s.jsx)(lr.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(la.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(lc.A, {
                                                onClick: C,
                                                children: K.intl.string(lv.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, s.jsx)("div", { className: lC.PD, children: (0, s.jsx)(lg.l5, { onClick: v }) }),
                ],
            }),
            (0, s.jsx)("div", { className: lC.uV, children: (0, s.jsx)(lh.T, { imageUrl: o }) }),
        ],
    });
}
class lj extends r.Component {
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
function lN(e) {
    let { code: t } = e;
    return (0, s.jsx)(lj, { children: (0, s.jsx)(l_, { code: t }) });
}
var ly = n(643612),
    lb = n(607399),
    lT = n(164636),
    lS = n(327891),
    lk = n(503406),
    lR = n(212534),
    lL = n(820496);
function lM(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, lT.yK)(
            [lR.A],
            () => [lR.A.getApplication(t), lR.A.isInvalidApplication(t), lR.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, lT.bG)([D.A], () => D.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tD.K)(u),
        h = r.useCallback(() => {
            eV.default.track(er.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: lb.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, lk.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === lR.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eV.default.track(er.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: lb.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(iz.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t.j4KtLa) }),
                  (0, s.jsx)(iz.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: lL.k,
                          children: [
                              (0, s.jsx)(iz.A.Icon, { expired: !0 }),
                              (0, s.jsx)(iz.A.Info, {
                                  expired: !0,
                                  title: K.intl.string(K.t.NaQLEx),
                                  children: K.intl.string(K.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === lR.e.FETCHING
          ? (0, s.jsxs)(iz.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t.m9hXGR) }),
                    (0, s.jsx)(iz.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(et, { app: lS.Ay.createFromServer(i), linkType: Q.J.APP_DISCOVERY, onView: h, message: n });
}
var lP = n(229527),
    lD = n(870136),
    lO = n(232296),
    lU = n(412728);
function lG(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, n7.Qi)(n, i),
        r = (0, lT.bG)([D.A], () => D.A.getGuildId());
    return ((0, e3.A)(
        {
            type: lU.z.VIEW,
            name: e2.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(lO.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var lw = n(484724),
    lB = n(953727);
function lH(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, lB.A)(l),
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
var lV = n(122906),
    lF = n(401755),
    lY = n(313977),
    lz = n(508557);
function lK(e) {
    let { code: t } = e,
        i = (0, u.bG)([lV.A], () => lV.A.getGuildTemplate(t));
    if (null == i || i.state === lF.QB.RESOLVING)
        return (0, s.jsxs)(iz.A, {
            children: [
                (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t.Xj87Yf) }),
                (0, s.jsx)(iz.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === lF.QB.EXPIRED)
        return (0, s.jsxs)(iz.A, {
            children: [
                (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t.C7ZRNw) }),
                (0, s.jsxs)(iz.A.Body, {
                    children: [
                        (0, s.jsx)(iz.A.Icon, { expired: !0 }),
                        (0, s.jsx)(iz.A.Info, { expired: !0, title: K.intl.string(K.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eg.$, { disabled: !0, variant: "secondary", text: K.intl.string(K.t.W7NTWm) })
        : (0, s.jsx)(eg.$, {
              onClick: function () {
                  null != i &&
                      i.state !== lF.QB.RESOLVING &&
                      (0, g.mM)(async () => {
                          let { default: e } = await Promise.all([
                              n.e(860350),
                              n.e(122326),
                              n.e(562772),
                              n.e(461123),
                              n.e(734187),
                              n.e(978953),
                              n.e(324866),
                              n.e(144472),
                              n.e(848625),
                              n.e(883952),
                              n.e(582486),
                              n.e(419580),
                              n.e(681009),
                              n.e(592152),
                          ]).then(n.bind(n, 72715));
                          return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                      });
              },
              loading: i.state === lF.QB.ACCEPTING,
              variant: "active",
              text: K.intl.string(K.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(iz.A, {
        children: [
            (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t.kAvFkO) }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lz.iH,
                        children: [
                            (0, s.jsx)(lH, { className: lY.K }),
                            (0, s.jsx)(iz.A.Info, {
                                title: i.name,
                                children: K.intl.format(K.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var lW = n(21599),
    lJ = n(681154),
    lZ = n(155718);
let lX = new Set([
    lJ.ContentInventoryEntryType.TOP_ARTIST,
    lJ.ContentInventoryEntryType.TOP_GAME,
    lJ.ContentInventoryEntryType.PLAYED_GAME,
    lJ.ContentInventoryEntryType.WATCHED_MEDIA,
    lJ.ContentInventoryEntryType.LISTENED_SESSION,
    lJ.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lq = n(713235),
    l$ = n(857071),
    lQ = n(46054),
    l0 = n(731068),
    l1 = n(619517),
    l2 = n(207133),
    l3 = n(844222),
    l5 = n(463930),
    l6 = n(251391),
    l9 = n(601255),
    l4 = n(562819),
    l8 = n(234914),
    l7 = n(658760),
    se = n(273185),
    st = n(21299),
    sn = n(754459),
    si = n(967144),
    sl = n(342296),
    ss = n(696451),
    sr = n(218394);
function sa(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, lB.A)(l),
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
var so = n(717125),
    sd = n(376943),
    sc = n(36491),
    su = n(752755),
    sm = n(461715),
    sh = n(381941),
    sg = n(966101);
function sp(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, sm.CI)(e),
                i = (0, lT.bG)(
                    [ss.Ay, L.default],
                    () => {
                        let e = L.default.getId();
                        return ss.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, lT.bG)(
                    [so.A],
                    () => null != n && n?.channelId != null && so.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(er.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, lT.cf)(
                    [su.A, ii.A, M.A, O.default, D.A],
                    () => {
                        let e = su.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = ii.A.getGuild(n?.guildId),
                            i = M.A.getChannel(n?.channelId),
                            l = O.default.getUser(e?.author_id),
                            s = D.A.getGuildId(),
                            r = null != i && (0, sd.nc)(i);
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
                    let e = (0, sm.tU)({
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
                        (su.A.getEmbedFetchState(n.threadId) !== su.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, sc.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, sn.A)(n.id, sh.Fd),
        u = (0, st.VL)(n, i, c, !0),
        m = iN.kt.useSetting(),
        h = (0, sr.j)(),
        [g, p] = r.useState(!1),
        [x, I] = r.useState(d?.coverImage == null),
        E = (0, lT.bG)([ss.Ay, O.default], () => ss.Ay.isMember(d?.guildId, O.default.getCurrentUser()?.id), [d]),
        v = (0, lT.bG)([ss.Ay], () => (d?.authorId != null ? ss.Ay.getMember(d.guildId, d.authorId) : null)),
        C = (0, l9.A)(v?.avatarDecoration != null ? v?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [v?.colorString ?? "inherit", v?.colorStrings ?? null, v?.colorRoleId], [v]),
        y = (0, si.gn)(v?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: b } = r.useContext(l3.C),
        [T, S] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        R = r.useCallback(() => {
            p(!1);
        }, [p]),
        P = r.useCallback(async () => {
            null != d &&
                ((0, n4.zV)(er.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: E,
                }),
                d.canAccess
                    ? (0, ie.A)(er.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : E
                      ? (0, ie.A)(er.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await iP.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, E]);
    if (null == d) return null;
    let G = (0, U.F_)({ avatarDecoration: C, size: (0, l4.Te)(tx._3.SIZE_40), canAnimate: T }),
        w = d.user?.getAvatarURL(d.guildId, 40, T);
    function B() {
        b.enabled || S((e) => !e);
    }
    let H = d.coverImage,
        V = null != H ? (0, l7.K)(H, "png") : void 0,
        F = null != H && (0, se.ge)(H);
    return (0, s.jsxs)("div", {
        className: sg.wb,
        children: [
            (0, s.jsxs)("div", {
                className: sg.iT,
                onMouseEnter: k,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: K.intl.string(K.t.rIbh8H),
                                  className: o()(sg.xn, { [sg.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })
                            : (0, s.jsx)(l8.A, {
                                  src: !(h && (m || g)) && F ? V : H,
                                  backgroundSrc: V,
                                  alt: K.intl.string(K.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(sg.xn, { [sg.p6]: d.shouldSpoiler }),
                                  imageChildClassName: sg.q_,
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eM.D, {
                            onClick: P,
                            children: (0, s.jsx)("div", {
                                className: sg.nx,
                                children: (0, s.jsxs)("div", {
                                    className: sg.BS,
                                    children: [
                                        (0, s.jsx)(sa, { color: n6.A.colors.WHITE.css }),
                                        (0, s.jsx)(A.E, {
                                            variant: "body-sm/semibold",
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
                className: sg.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: sg.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: sg.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                className: o()(sg.hF, sg.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: sg._5,
                        children: [
                            null != d.authorId &&
                                null != w &&
                                (0, s.jsx)(sl.A, {
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
                                            children: (0, s.jsx)(tA.eu, {
                                                ...e,
                                                ref: a,
                                                size: tx._3.SIZE_40,
                                                src: w,
                                                "aria-label": K.intl.string(K.t.KXz3XB),
                                                avatarDecoration: G,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: sg.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: sg.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(l6.ImageSparkleIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: sg.Xg,
                                                }),
                                            (0, s.jsx)(eM.D, {
                                                onClick: P,
                                                className: sg.HA,
                                                children: (0, s.jsx)(e9.D, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-strong",
                                                    children: d.channelName ?? d.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != d.authorName &&
                                        (0, s.jsx)(A.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: sg.wn,
                                            children: K.intl.format(K.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, s.jsx)(l5.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: y,
                                                                className: sg.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                sl.A,
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
                                                                        (0, s.jsx)(l5.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: y,
                                                                            className: sg.fh,
                                                                        }),
                                                                },
                                                                (0, tP.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(eg.$, { variant: "primary", onClick: P, text: d.ctaText })
                                : (0, s.jsx)(eg.$, { onClick: P, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var sA = n(378058),
    sx = n(704413),
    sf = n(119591),
    sI = n(632623),
    sE = n(374710),
    sv = n(803306),
    sC = n(491182),
    s_ = n(549587),
    sj = n(54391),
    sN = n(378570),
    sy = n(138298),
    sb = n(799704),
    sT = n(536637),
    sS = n.n(sT),
    sk = n(776579),
    sR = n(943815),
    sL = n(447215),
    sM = n(307805),
    sP = n(832038),
    sD = n(318626),
    sO = n(513653);
let sU = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = O.default.getUser(t),
        u = r.useMemo(() => (i ? (0, sR.A)((0, ib.i$)(sS()(), "LT")) : null), [i]),
        m = (0, sL.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, tE.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tx.FT)(tx._3.SIZE_16)) : sO,
        g =
            null != c
                ? K.intl.format(sM.default["+zqXZs"], { username: c.username, onUserClick: m })
                : K.intl.string(sM.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(sD.NB, sD.JZ, u),
        children: [
            (0, s.jsx)(tA.eu, { src: h, size: tx._3.SIZE_16, className: sP.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "body-sm/medium", color: "text-subtle", className: sP.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "body-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: sP.Ek, children: "\u2022" }),
                    (0, s.jsx)(sk.A, { timestamp: d, className: sP.vE }),
                ],
            }),
        ],
    });
};
var sG = n(942925);
function sw(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new iR(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [M.A, O.default, P.A, tt.A, ii.A, iE.A],
            () => l.getForwardInfo(M.A, O.default, P.A, tt.A, ii.A, iE.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = M.A.getChannel(t.channel_id),
                n = ii.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = eo.Ay.getCurrentlySelectedChannelId(),
                s = sb.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (sy.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, sN.iN)(i),
                eV.default.track(er.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eM.D, {
              className: sG.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: sG.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: sG.PJ,
                      variant: "body-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(iI.ChevronSmallRightIcon, { size: "xxs", color: n6.A.colors.TEXT_MUTED }),
              ],
          });
}
function sB(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, tE.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, sn.A)(e.id, sh.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, st.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, st.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(sC.A, {
        childrenExecutedCommand: (0, s.jsx)(sU, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(s_.Ay, {
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
            renderPopout: sj.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(i_.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: sG.iU,
        author: o,
    });
}
function sH(e) {
    let { message: t, snapshot: n, index: i, renderAccessories: l } = e,
        [a, o] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, sv.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = r.useMemo(() => {
            let e = (0, iD.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = iN.hD.useSetting(),
        m = iN.rs.useSetting(),
        h = (0, iv.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, ij.A)(d, {
            hideSimpleEmbedContent: c && m,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        x = (0, u.bG)([M.A], () => M.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: sG.kL,
                  children: (0, s.jsxs)("div", {
                      className: sG.Qs,
                      children: [
                          (0, s.jsx)(sB, {
                              mergedMessageRecord: d,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          l({
                              channelMessageProps: { message: d, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: sG.Mf,
                          }),
                          (0, s.jsx)(sw, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sV(e) {
    let { message: t, renderAccessories: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(sH, { message: t, snapshot: e, index: i, renderAccessories: n }, i),
        ),
    });
}
var sF = n(302031),
    sY = n(738188),
    sz = n(123292);
function sK(e) {
    return sS()().diff(sS().unix(e), "days");
}
function sW(e, t) {
    return t && e > 30 ? K.intl.string(K.t["8qYr4l"]) : K.intl.formatToPlainString(K.t.eevFb6, { daysAgo: e });
}
let sJ = (0, n(945810).mj)({
    name: "2026-09-safety-warning-age-text",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function sZ(e) {
    return sJ.useConfig({ location: e }).enabled;
}
var sX = n(239093),
    sq = n(798362);
function s$(e) {
    let t = sZ("safety_warning_system_message");
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let i = e.message.embeds[0],
        l = i.fields?.find((e) => e.rawName === sX.AT.CLASSIFICATION_ID) ?? void 0,
        r = l?.rawValue ?? void 0,
        a = i.fields?.find((e) => e.rawName === sX.AT.INCIDENT_TIMESTAMP) ?? void 0,
        o = null == a || null == a.rawValue ? void 0 : parseFloat(a.rawValue);
    return null == r || null == o
        ? null
        : (0, s.jsxs)(eM.D, {
              onClick: function () {
                  null != r &&
                      (0, g.mM)(async () => {
                          let { default: e } = await Promise.all([
                              n.e(252964),
                              n.e(726464),
                              n.e(483518),
                              n.e(51194),
                              n.e(637867),
                              n.e(668615),
                          ]).then(n.bind(n, 163002));
                          return (t) =>
                              (0, s.jsx)(e, {
                                  classificationId: r,
                                  source: sX.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sq.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sq.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sq.U1,
                              children: [
                                  (0, s.jsx)(sY.WarningIcon, {
                                      className: sq.QW,
                                      color: n6.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(A.E, {
                                      variant: "body-md/semibold",
                                      children: K.intl.string(K.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sq.VU,
                              children: (0, s.jsx)(A.E, { variant: "body-xs/medium", children: sW(sK(o), t) }),
                          }),
                          (0, s.jsx)("div", {
                              className: sq.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: K.intl.string(K.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: sq.xQ,
                      children: (0, s.jsx)(sz.Q, { text: K.intl.string(K.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sQ = n(28863),
    s0 = n(393033),
    s1 = n(975430);
function s2(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sQ.Anchor, {
        onClick: function () {
            (0, g.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(252964),
                    n.e(726464),
                    n.e(483518),
                    n.e(51194),
                    n.e(637867),
                    n.e(668615),
                ]).then(n.bind(n, 163002));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: sX.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: s1.zh,
        children: K.intl.string(K.t.QsqdXC),
    });
}
function s3(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sQ.Anchor, { className: s1.zh, href: t, children: K.intl.string(K.t["8/GdRB"]) });
}
function s5(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sX.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(s2, { classificationId: n });
        case sX.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(s3, { learnMoreLink: i });
        default:
            return null;
    }
}
function s6(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e6.AnnouncementsIcon, { size: "xs", color: n6.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(sY.WarningIcon, { color: n6.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: s1.Kk, children: n[t] }) : null;
}
function s9(e) {
    let { children: t, theme: n } = e,
        i = { default: s1._y, danger: s1.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function s4(e) {
    let t = sZ("safety_warning_system_message");
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, s0.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eM.D, {
              className: s1.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: s1.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: s1.U1,
                              children: [
                                  (0, s.jsx)(s6, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "body-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: s1.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "body-xs/medium",
                                  children: sW(sK(n.timestamp ?? 0), t),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: s1.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(s9, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              s5,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var s8 = n(44724),
    s7 = n(227327),
    re = n(638495),
    rt = n(43990),
    rn = n(429913),
    ri = n(976860),
    rl = n(371794),
    rs = n(871123),
    rr = n(439303),
    ra = n(353281),
    ro = n(832163),
    rd = n(637893),
    rc = n(376680),
    ru = n(317560),
    rm = n(869099),
    rh = n(661070);
function rg(e) {
    let { guildOrApplication: t, skuIds: n, destinationGuildId: i, channelId: l, messageId: a } = e,
        d = (0, re.k)(),
        c = (0, rd._)("SocialLayerStorefrontEmbed"),
        m = "guild" === t.type ? t.guildId : void 0,
        h = "application" === t.type ? t.applicationId : void 0,
        g = (0, rc.A)({ applicationId: h, guildId: m }),
        p = g?.storefront,
        A = h ?? p?.applicationId,
        x = (0, rn.h)(A),
        E = p?.application?.name ?? x?.name ?? null,
        v = "guild" === t.type ? t.guildId : ((0, rs.n5)(A) ?? null),
        C = (0, u.yK)([eB.A], () => (null == A ? [] : n.filter((e) => eB.A.get(e)?.applicationId === A)), [n, A]),
        { analyticsLocations: _ } = (0, I.Ay)(f.A.SLAYER_STOREFRONT_EMBED),
        j = r.useMemo(() => ({ pageSection: "storefront_embed", placement: rr.Ye.MULTI_SKU_EMBED }), []),
        N = r.useCallback(() => {
            (null != A &&
                eV.default.track(er.HAw.SLAYER_STOREFRONT_EMBED_SHOP_ALL_CLICKED, {
                    application_id: A,
                    application_name: E,
                    guild_id: v,
                    destination_guild_id: i,
                    channel_id: l,
                    message_id: a,
                    sku_ids: C,
                    sku_count: C.length,
                }),
                (0, s8.default)("guild" === t.type ? { guildId: t.guildId } : { applicationId: t.applicationId }));
        }, [A, E, l, i, t, a, v, C]),
        y = r.useCallback(
            (e, t) => {
                let { skuId: n, applicationId: i } = t;
                (0, ru.R)({ skuId: n, applicationId: i, isStorefront: !1, analyticsLocations: _, contextKey: d });
            },
            [_, d],
        ),
        b = r.useCallback(
            (e, t, n) => {
                if (null == A) return;
                let i = ro.A.getStorefrontState(A)?.activePage ?? 0;
                (0, ri.bG)(er.BVt.COLLECTIBLES_SHOP_GAME_SHOP(A, i, e, n));
            },
            [A],
        );
    if (!c) return null;
    if (g?.state === "loading")
        return (0, s.jsx)("div", { className: o()(rh.kL, rh.g4), children: (0, s.jsx)(tV.y, {}) });
    if (null == p || null == A || 0 === C.length) return null;
    let T = (0, rs.NH)(p),
        S = p.logoAssetId ?? p.lightThemeLogoAssetId,
        k = null != S ? (0, rl.YE)(A, S, 128) : null;
    return (0, s.jsx)(rt.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: o()(rh.kL, e),
                children: [
                    (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: rh.Tp,
                        children:
                            null != T &&
                            (0, s.jsx)("div", { className: rh.iL, style: { backgroundImage: `url(${T})` } }),
                    }),
                    (0, s.jsx)("div", {
                        className: rh.wx,
                        children: (0, s.jsxs)("div", {
                            className: rh.VW,
                            children: [
                                null != k && (0, s.jsx)("img", { className: rh.wm, src: k, alt: "" }),
                                (0, s.jsx)(e9.D, {
                                    className: rh.DD,
                                    variant: "heading-sm/semibold",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: p.title,
                                }),
                                (0, s.jsx)(eg.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    icon: eS.ShopIcon,
                                    text: K.intl.string(K.t.RSyoZu),
                                    onClick: N,
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(rr.E9, {
                        newValue: j,
                        children: (0, s.jsx)(ra.J, {
                            viewProductDetails: b,
                            children: (0, s.jsx)("div", {
                                className: o()(rh.Vg, { [rh.Me]: C.length % 2 == 1 }),
                                children: C.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: o()(rh.ux, { [rh.Xv]: 0 === t && C.length % 2 == 1 }),
                                            children: (0, s.jsx)(rm.Ay, {
                                                className: rh.Nr,
                                                skuId: e,
                                                positionInSection: t,
                                                variant: rm.s6.SMALL,
                                                onClick: y,
                                                analyticsLocations: _,
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
var rp = n(50777),
    rA = n(288254),
    rx = n(319060),
    rf = n(812282),
    rI = n(265872),
    rE = n(383055),
    rv = n(188645),
    rC = n(240248),
    r_ = n(256449),
    rj = n(832628),
    rN = n(148355),
    ry = n(3026),
    rb = n(862482),
    rT = n(305866),
    rS = n(847374),
    rk = n(964486),
    rR = n(235986),
    rL = n(624793),
    rM = n(620632),
    rP = n(767143),
    rD = n(87719),
    rO = n(725807),
    rU = n(898578),
    rG = n(850992),
    rw = n(188567),
    rB = n(698279),
    rH = n(665055),
    rV = n(844749);
function rF(e) {
    (eV.default.track(er.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? er.liQ.GUILD_CHANNEL : er.liQ.DM_CHANNEL,
        location_section: er.JJy.STICKER_POPOUT,
    }),
        (0, rD.e)());
}
function rY(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(rR.A, {
        children: [
            (0, s.jsx)(rN.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(rR.A, {
                direction: rR.A.Direction.VERTICAL,
                justify: rR.A.Justify.CENTER,
                className: rV.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "body-md/semibold", children: (0, s.jsx)(ry.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function rz(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [a, o, d] = (0, u.yK)(
            [rU.A],
            () => [rU.A.getStickerPack(n.pack_id), !rU.A.hasLoadedStickerPacks, rU.A.isPremiumPack(n.pack_id)],
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
    (0, r_.Sr)(n.pack_id);
    let m = (0, r_.pD)(i),
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
        eV.default.track(er.HAw.OPEN_POPOUT, {
            type: er.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, n4.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, s.jsx)(rv.Y0, { className: rH.v0 })
        : (0, s.jsx)(rT.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(rv.Uq, {
                  className: rH.Bm,
                  children: [
                      (0, s.jsx)(e9.D, { variant: "heading-sm/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "body-sm/normal",
                          children: d
                              ? K.intl.format(K.t.auckXz, { stickerPackName: a.name })
                              : K.intl.format(K.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: rH.pQ,
                          children: c.map((e) => (0, s.jsx)(rN.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: rH.j0,
                              children: (0, s.jsx)(
                                  eg.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: K.intl.string(K.t.GPy3Ar),
                                      autoFocus: !0,
                                      onClick: function () {
                                          null != a &&
                                              (d &&
                                                  (function (e) {
                                                      let { stickerPack: t, stickerPickerCategories: n } = e;
                                                      rw._.dispatchToLastSubscribed(er.jej.OPEN_EXPRESSION_PICKER, {
                                                          activeView: rB.kx.STICKER,
                                                      });
                                                      let i = n.findIndex((e) => e.id === t.id);
                                                      -1 !== i && rG.bM.setActiveCategoryIndex(i);
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
function rK(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
        [d, c] = r.useState(null),
        [m, h] = r.useState(!1),
        g = O.default.getCurrentUser(),
        p = tq.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([ii.A], () => ii.A.getGuild(n.guild_id)),
        f = null != x,
        [I, E] = r.useState(!1),
        [v, C] = r.useState(null),
        _ = r.useMemo(
            () => ({
                page: null != i.guild_id ? er.liQ.GUILD_CHANNEL : er.liQ.DM_CHANNEL,
                section: er.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, n4.dI)(i) }),
        N = { stickerSourceGuild: x, refreshPositionKey: a },
        y = r.useRef(N);
    (r.useEffect(() => {
        y.current = N;
    }),
        r.useEffect(() => {
            let { stickerSourceGuild: e } = y.current;
            !(async function () {
                if (null == e || e.features.has(er.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    c(
                        await ((t = n.id),
                        rM.Bo.get({ url: er.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, iP.jE)(e.body) : null))
                            .catch(() => null)),
                    );
                }
                h(!0);
            })();
        }, [n.id, f]));
    let b = n.guild_id === i.getGuildId(),
        T = null != d,
        S = !1,
        k = "Custom Sticker Popout";
    p
        ? (t = f
              ? b
                  ? K.intl.string(K.t.fZ0DiG)
                  : K.intl.string(K.t["1f6D9m"])
              : T
                ? K.intl.string(K.t.yHmoR9)
                : K.intl.string(K.t.vZaScH))
        : f
          ? ((t = b ? K.intl.string(K.t.jNphpt) : K.intl.string(K.t.lyD5ZW)),
            (S = !0),
            (k = "Custom Sticker Popout (Upsell)"))
          : T
            ? ((t = K.intl.string(K.t.IuXYch)), (S = !0), (k = "Custom Sticker Popout (Upsell)"))
            : ((t = K.intl.format(K.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (rF(i), l());
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let R = !S && !f && T && p;
    return (r.useEffect(() => {
        let { refreshPositionKey: e } = y.current;
        e();
    }, [m, d]),
    (0, rk.Ay)(() => {
        eV.default.track(er.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, s.jsx)(rT.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(rv.Uq, {
                  className: rV.Bm,
                  children: [
                      (function () {
                          async function e() {
                              if (null == d || f) return;
                              l();
                              let e = d.id;
                              try {
                                  (await iL.A.joinGuild(e), iL.A.transitionToGuildSync(e));
                              } catch {}
                          }
                          return (0, s.jsxs)("div", {
                              className: rV.gH,
                              children: [
                                  (0, s.jsx)(rY, { description: t, sticker: n }),
                                  S &&
                                      (0, s.jsx)(rO.A, {
                                          className: rV.lI,
                                          subscriptionTier: nT.pe.TIER_2,
                                          size: rb.$n.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: K.intl.string(K.t["gl/XHJ"]) },
                                          onSubscribeModalClose: (t) => (t ? e() : l()),
                                          postSuccessGuild: f || null == d ? void 0 : d,
                                          premiumModalAnalyticsLocation: _,
                                      }),
                                  R &&
                                      (0, s.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: rV.lI,
                                          children: (0, s.jsx)(eg.$, {
                                              variant: "primary",
                                              size: "sm",
                                              text: K.intl.string(K.t.riu2R5),
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
                              if (!T && !f) return;
                              let e = (d?.stickers ?? [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  t = null != d ? rL.GO.createFromDiscoverableGuild(d) : rL.GO.createFromGuildRecord(x);
                              return (0, s.jsxs)("div", {
                                  className: rV.tl,
                                  children: [
                                      (0, s.jsx)(A.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          className: rV.YW,
                                          children: f ? K.intl.string(K.t.kx6pEG) : K.intl.string(K.t.pDE7Gb),
                                      }),
                                      (0, s.jsx)(rP.G7, {
                                          expressionSourceGuild: t,
                                          hasJoinedExpressionSourceGuild: f,
                                          isDisplayingJoinGuildButtonInPopout: R,
                                          closePopout: l,
                                      }),
                                      !f &&
                                          (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(eM.D, {
                                                      onClick: function () {
                                                          (a(), E(!I));
                                                      },
                                                      className: rV.wK,
                                                      children: (0, s.jsxs)(rR.A, {
                                                          children: [
                                                              (0, s.jsx)(A.E, {
                                                                  className: rV.__invalid_showMoreEmojisLabel,
                                                                  variant: "body-xs/normal",
                                                                  color: "none",
                                                                  children: K.intl.string(K.t.vtH5hn),
                                                              }),
                                                              (0, s.jsx)(rS.ChevronSmallDownIcon, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: o()(rV.ZB, { [rV.cP]: !I }),
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  I &&
                                                      (0, s.jsx)(rR.A, {
                                                          wrap: rR.A.Wrap.WRAP,
                                                          align: rR.A.Align.START,
                                                          justify: rR.A.Justify.START,
                                                          className: rV.LX,
                                                          children: e.map((e) =>
                                                              (0, s.jsx)(
                                                                  tB.m,
                                                                  {
                                                                      text: e.name,
                                                                      ...rv.Uk,
                                                                      children: (0, s.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: o()(rV.Th, {
                                                                                  [rH.vT]: null != v && v !== e.id,
                                                                              }),
                                                                              onMouseEnter: () => {
                                                                                  C(e.id);
                                                                              },
                                                                              onMouseLeave: () => {
                                                                                  C(null);
                                                                              },
                                                                              children: (0, s.jsx)(rN.A, {
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
        : (0, s.jsx)(rv.Y0, { className: rH.v0 });
}
function rW(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(rT.l, {
        "aria-label": i.name,
        children: (0, s.jsx)(rv.Uq, {
            className: rH.Bm,
            children: (0, s.jsx)(rY, {
                sticker: i,
                description: K.intl.format(K.t.hGWuxU, {
                    openPremiumSettings: () => {
                        (n(), rF(t));
                    },
                }),
            }),
        }),
    });
}
let rJ = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, r_.Zq)(t, !0);
    return null != r && (0, sA.FD)(r)
        ? (0, s.jsx)(rz, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, sA.Xw)(r)
          ? (0, s.jsx)(rK, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? (0, s.jsx)(rW, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(rv.Y0, {});
};
var rZ = n(751686);
let rX = (0, rC.xI)(rx.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    rq = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, r_.Zq)(t, i),
            { analyticsLocations: m } = (0, I.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: rZ.Zl,
                children: [
                    (0, s.jsx)(rf.StickerSmallIcon, { size: "xs", color: "currentColor", className: rZ.lA }),
                    (u ?? t).name,
                ],
            });
        return (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: rZ.be,
                children: (0, s.jsx)(rI.Y, {
                    align: "center",
                    animation: rI.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(rJ, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tB.m, {
                            ...rv.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, rE.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    n4.Ay.trackWithMetadata(er.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nT.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, rj.Tw)(e.format_type),
                                        is_custom: (0, rj.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eM.D, {
                                innerRef: l,
                                className: rZ.q7,
                                onClick: (e) => {
                                    (o(!a), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(rN.A, { isInteracting: i, size: rX, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var r$ = n(406704),
    rQ = n(531142),
    r0 = n(140735),
    r1 = n(442433),
    r2 = n(143413),
    r3 = n(321045),
    r5 = n(456874),
    r6 = n(707539),
    r9 = n(80682),
    r4 = n(448368),
    r8 = n(943220);
n(838541);
let r7 = { formatInline: !0, allowLinks: !0 };
function ae(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [P.A],
            () => ({ isBlocked: P.A.isBlockedForMessage(t), isIgnored: P.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, r9.Eq)(a, "ThreadMessageAccessoryMessage");
    let { content: o } = (0, ij.A)(t, r7),
        d = null != t.content && "" !== t.content ? o : null,
        c = (0, rA.IL)(n);
    return (0, s.jsxs)("div", {
        className: sD.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: sD.FJ }),
            (0, s.jsx)(r8.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: sD.Au,
                children: c
                    ? (0, s.jsx)("span", { className: sD.dp, children: K.intl.string(K.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, r4.o)(e, t, n, i, sD.tP, {
                              trailingIconClass: sD._v,
                              leadingIconClass: sD.a5,
                              iconSize: 20,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [a, r ?? (0, s.jsx)("span", { className: sD.dp, children: l }), o],
                          });
                      })(t, d, i, l),
            }),
        ],
    });
}
var at = n(747926),
    an = n(650583),
    ai = n(77462);
function al(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([M.A], () => M.A.getChannel(iT.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(as, { channel: i, compact: n, isSystemMessage: (0, r2.A)(t) });
}
function as(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, iy.Ay)(a),
        h = (0, u.bG)([r5.A], () => r5.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([r5.A], () => r5.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([r5.A], () => r5.A.getCount(t.id))),
            (r = (0, r6.JO)(t)),
            t.threadMetadata?.archived
                ? K.intl.string(K.t.ZTo4HS)
                : null == l || 0 === l
                  ? K.intl.string(K.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: K.intl.string(K.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: ai.vE, children: (0, r6.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(ae, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: ai.vE, children: (0, r6.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(ai.GI, { [ai.E]: !d, [ai.E_]: c }) }),
            (0, s.jsx)(eM.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, at.JA)(a, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === an.dh.SPACE || e.key === an.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, at.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, r1.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(391763),
                            n.e(491001),
                            n.e(382563),
                            n.e(603998),
                            n.e(947502),
                            n.e(691671),
                            n.e(343266),
                            n.e(965789),
                            n.e(412255),
                            n.e(63340),
                            n.e(896804),
                            n.e(421060),
                            n.e(275289),
                            n.e(697367),
                            n.e(699011),
                            n.e(536478),
                            n.e(250249),
                            n.e(703869),
                            n.e(426760),
                            n.e(420105),
                        ]).then(n.bind(n, 949488));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": K.intl.string(K.t["8ipxiY"]),
                className: o()(ai.kL, { [ai.og]: c }),
                children: (0, s.jsxs)(rQ.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: ai.kq,
                            children: [
                                (0, s.jsx)(r0.A, { children: K.intl.string(K.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: ai.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: ai.lO,
                                    "aria-hidden": !p,
                                    children: (0, r3.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "body-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: ai.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ar = n(168543),
    aa = n(851767),
    ao = n(215530),
    ad = n(562153),
    ac = n(183555),
    au = n(527212),
    am = n(391210),
    ah = n(249790),
    ag = n(254828),
    ap = n(783123),
    aA = n(213994),
    ax = n(753504);
function af(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: r } = e,
        a = (0, u.bG)([O.default], () => O.default.getUser(t)),
        o = (0, u.bG)([P.A], () => P.A.isBlocked(t)),
        d = ad.Ay.useName(n, i, a),
        c = (0, au.Ay)(t, n),
        [m, h] = (0, am.A)(),
        { analyticsLocations: g } = (0, I.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        p = (0, ac.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == a
        ? null
        : (0, s.jsx)(I.f5, {
              value: g,
              children: (0, s.jsx)(ac.of, {
                  value: p,
                  fetchStartedAt: c?.fetchStartedAt,
                  fetchEndedAt: c?.fetchEndedAt,
                  isLoaded: c?.isLoaded === !0 && m,
                  children: (0, s.jsx)(aA.A, {
                      user: a,
                      displayProfile: null,
                      size: "sm",
                      className: ax.k,
                      containerRef: h,
                      headingText: K.intl.formatToPlainString(K.t["8yRya1"], { name: d }),
                      children: (0, s.jsxs)(iV.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(iV.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(ah.A, { user: a, guildId: n }),
                                      (0, s.jsx)(e9.D, {
                                          variant: "heading-lg/semibold",
                                          children: K.intl.string(K.t.b33pLD),
                                      }),
                                      (0, s.jsx)(A.E, {
                                          variant: "body-sm/medium",
                                          children: K.intl.format(o ? K.t["8F+WNz"] : K.t["/cZp5s"], { username: d }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(iV.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(ap.A, { isBlocked: o, onClick: r }),
                                      (0, s.jsx)(ag.A, { userId: t, onClick: r }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var aI = n(702422),
    aE = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function av(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    n4.Ay.trackWithMetadata(er.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function aC(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [a, o] = (0, ao.A)(t),
        d = r.useRef(!1),
        c = (0, u.bG)(
            [O.default, aa.A],
            () => {
                if (aa.A.isFetchingProfile(t, n ?? void 0) || null != O.default.getUser(t)) return null;
                let e = aa.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? aE.NO_USER_RECORD : null;
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
                av({
                    userId: t,
                    reason: c,
                    guildId: n,
                    channelId: i,
                    errorStatus: aa.A.getUserProfile(t)?.fetchError?.status,
                }));
        }, [c, t, n, i]));
    let h = r.useCallback((e) => {
            null != e && d.current && ((d.current = !1), e.focus());
        }, []),
        g = r.useCallback(() => {
            ((d.current = !0), o());
        }, [o]);
    return a
        ? (0, s.jsx)(af, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(aI.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class a_ extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (nl.A.captureException(e),
            av({
                userId: this.props.userId,
                reason: aE.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function aj(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, ar.c)("UserProfileEmbed")
        ? (0, s.jsx)(a_, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(aC, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var aN = n(383233),
    ay = n(834942),
    ab = n(644447),
    aT = n(659674),
    aS = n(998218),
    ak = n(320889),
    aR = n(294520),
    aL = n(432005),
    aM = n(863439),
    aP = n(707985),
    aD = n(597798),
    aO = n(265422),
    aU = n(877126);
function aG(e) {
    let { guild: t, channel: n, message: i } = e,
        l = D.A.getGuildId(),
        a = eo.Ay.getChannelId(l),
        o = r.useCallback(() => {
            (eV.default.track(er.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, aO.i)(t.id, n.id),
                aD.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(iz.A.Channel, { channel: n });
    return (0, s.jsx)(iz.A, {
        children: (0, s.jsxs)(iz.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: lz.iH,
                    children: [
                        (0, s.jsx)(iz.A.Icon, { guild: t }),
                        (0, s.jsx)(iz.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: lz.FA,
                                children: [
                                    K.intl.format(K.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: lz.E3,
                                        children: (0, s.jsx)(aU.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: lz.UD,
                    children: (0, s.jsx)(eg.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? K.intl.string(K.t["7vb2cc"]) : K.intl.string(K.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function aw(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = M.A.getChannel(l),
        a = ii.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && tt.A.can(er.xBc.VIEW_CHANNEL, r) && tt.A.can(er.xBc.CONNECT, r)
        ? (0, s.jsx)(aG, { guild: a, channel: r, message: n })
        : null;
}
var aB = n(789645),
    aH = n(911408),
    aV = n(953756),
    aF = n(564107),
    aY = n(216763),
    az = n(359886);
function aK(e) {
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
        [m, h] = (0, aV.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(aF.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(aH.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(aV.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(aV.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(aY.O0, az.k, az.z, { [aY.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eM.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: aY.PP,
                                                  onClick: c,
                                                  "aria-label": K.intl.string(K.t.GT3fNz),
                                                  children: (0, s.jsx)(aB.XSmallIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                          (0, lq.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var aW = n(451988),
    aJ = n(261958),
    aZ = n(212245),
    aX = n(775602),
    aq = n(211449),
    a$ = n(550151),
    aQ = n(392054),
    a0 = n(853390),
    a1 = n(290863),
    a2 = n(811024),
    a3 = n(487887),
    a5 = n(555375);
let a6 = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, sr.j)(),
        s = (0, u.bG)([aX.Ay], () => aX.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new aW.IX();
            return (
                e.start(a ? 15 * nA.A.Millis.SECOND : nA.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nA.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, a0.fU)(n)
    );
});
a6.displayName = "ActivityRuntimeCounter";
let a9 = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, aZ.p)(),
        m = (0, u.bG)([M.A], () => M.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([L.default], () => L.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: E,
        } = (0, u.cf)(
            [ed.Ay],
            () => ({
                embeddedActivity: ed.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: ed.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: ed.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        v = p?.userIds,
        C = (0, u.yK)(
            [O.default],
            () =>
                Array.from(v ?? [])
                    .map((e) => O.default.getUser(e))
                    .filter(lu.Vq),
            [v],
        ),
        _ = (0, u.bG)(
            [a1.A],
            () => {
                if (null == v) return null;
                for (let e of v) {
                    let t = a1.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, v],
        ),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new lS.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = a3.Gl), e);
        }, [n]),
        b = (0, a$.vG)({ userId: g, channelId: i, application: N }),
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
                                text: s ? K.intl.string(K.t.RscU7I) : K.intl.string(K.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, a2.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: K.intl.string(K.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : K.intl.string(K.t.f41E1g) };
                        if (null != n && n !== a$.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case a$.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = K.intl.string(K.t.hHGrWz);
                                    break;
                                case a$.Gy.ACTIVITY_AGE_GATED:
                                    e = K.intl.string(K.t["4WuFRE"]);
                                    break;
                                case a$.Gy.CHANNEL_CONTENT_GATED:
                                    e = K.intl.string(K.t.pKLV22);
                                    break;
                                case a$.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = K.intl.string(K.t.uGDCcw);
                                    break;
                                case a$.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = K.intl.string(K.t.UXoQTp);
                                    break;
                                case a$.Gy.CHANNEL_FULL:
                                    e = K.intl.string(K.t.rZfiNq);
                                    break;
                                case a$.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = K.intl.string(K.t.w5SAps);
                                    break;
                                case a$.Gy.NO_CHANNEL:
                                case a$.Gy.NO_GUILD:
                                case a$.Gy.NO_USER:
                                case a$.Gy.IS_AFK_CHANNEL:
                                    e = K.intl.string(K.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: b, currentEmbeddedActivity: x, channel: m }),
        k = r.useId(),
        R = null != E && E.isLaunching && E.componentId === k,
        P = S.disabled ? K.intl.string(K.t.JBnc7N) : K.intl.string(K.t.cX9uLZ),
        D = (0, $.F)(N, () => {
            eV.default.track(er.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        G = U.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let w = C.length,
        z = _?.timestamps?.start ?? _?.created_at,
        W = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case H.$.STREAMING:
                    return { text: K.intl.formatToPlainString(K.t.tyCw2q, { count: n }), Icon: V.ScreenStreamIcon };
                case H.$.LISTENING:
                    return { text: K.intl.formatToPlainString(K.t["2l8yka"], { count: n }), Icon: F.MusicIcon };
                default:
                    return { text: K.intl.formatToPlainString(K.t.yJj035, { count: n }), Icon: Y.GameControllerIcon };
            }
        })({ activity: _, activityUsersCount: w }),
        X = [
            {
                label: S.text,
                trackingArea: Z.kY.PLAY,
                onClick: async function () {
                    (eV.default.track(er.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                        application_id: n.id,
                        channel_id: i,
                        channel_type: m?.type,
                        is_activity_start: T,
                        cta: "Play",
                    }),
                        T
                            ? await y.A.launch({
                                  applicationId: n.id,
                                  channelId: i,
                                  locationObject: c.location,
                                  analyticsLocations: d,
                                  componentId: k,
                                  commandOrigin: aQ.iw.ACTIVITY_INSTANCE_EMBED,
                              })
                            : await (0, aq.A)({
                                  applicationId: p.applicationId,
                                  activityChannelId: i,
                                  locationObject: c.location,
                                  analyticsLocations: d,
                                  componentId: k,
                              }));
                },
                disabled: S.disabled,
                disabledReason: t,
                submitting: R,
            },
        ];
    return (0, s.jsx)(B.h, {
        header: K.intl.string(K.t.pkq6Vq),
        title: n.name,
        iconSrc: G,
        info: (0, s.jsx)("div", {
            className: a5.QR,
            children: T
                ? (0, s.jsx)(A.E, { variant: "body-xs/medium", color: "none", children: P })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: a5.oL,
                                  children: [
                                      null != z &&
                                          (0, s.jsxs)("div", {
                                              className: a5.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: a5.y9,
                                                      children: (0, s.jsx)(W.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "body-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(a6, { start: z }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(a5.DT, a5.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(aJ.PaperIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                              (0, s.jsx)(A.E, {
                                                  variant: "body-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          w > 0 && (0, s.jsx)(J, { activityUsers: C, guildId: l, activityText: W.text }),
                      ],
                  }),
        }),
        actions: X,
        onClickContent: D,
        trackingConfig: {
            id: n.id,
            linkType: Q.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: T,
        },
    });
});
var a4 = n(376767),
    a8 = n(439401),
    a7 = n(657044),
    oe = n(863574),
    ot = n(707606),
    on = n(456412),
    oi = n(242874),
    ol = n(153626),
    os = n(499454),
    or = n(446263),
    oa = n(928550),
    oo = n(30793),
    od = n(189081);
function oc(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, lB.A)(i),
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
var ou = n(292702),
    om = n(45938),
    oh = n(615396),
    og = n(427262),
    op = n(561028),
    oA = n(820284),
    ox = n(674378),
    of = n(598429),
    oI = n(979604);
function oE(e) {
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
        A = (0, u.bG)([od.A], () => od.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        I = (0, u.bG)([eB.A], () => null != f && !eB.A.didFetchingSkuFail(f));
    return null != A && (0, ox.XZ)(A)
        ? (0, s.jsx)(oI.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : I
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(of.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function ov(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return K.intl.string(K.t.RWouSQ);
    if (e.premium && !n) return K.intl.string(K.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, t$.$g)(i.amount, i.currency);
        else return K.intl.string(K.t.QQsaCc);
    return K.intl.string(K.t.RWouSQ);
}
var oC = n(176140),
    o_ =
        (((l = o_ || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function oj(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(oC.nM, t),
        children: [
            (0, s.jsx)(a7.InventoryIcon, { size: "md", color: "currentColor", className: oC.Kk }),
            K.intl.string(K.t["7eicAO"]),
        ],
    });
}
function oN(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(oC.nM, n),
        children: [(0, s.jsx)(tp.NitroWheelIcon, { size: "md", color: "currentColor", className: oC.Kk }), ov(t)],
    });
}
function oy(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(oC.EQ, n), children: t.getDisplaySalePercentage() });
}
function ob(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(oC.I8, n), children: ov(t, !1) });
}
function oT(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: ov(t) });
}
function oS(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(oC.nM, n),
        children: [(0, s.jsx)(oy, { sku: t }), (0, s.jsx)(ob, { sku: t }), (0, s.jsx)(oT, { sku: t })],
    });
}
function ok(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: K.intl.string(K.t.QQsaCc) });
}
class oR extends r.PureComponent {
    static Types = o_;
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
                return (0, s.jsx)(ok, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(oj, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(oN, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(oS, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(oT, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(ok, { className: t });
            case 3:
                return (0, s.jsx)(oN, { sku: n, className: o()(oC.OB, t) });
            case 2:
                return (0, s.jsx)(oS, { sku: n, className: o()(oC.dk, t) });
            default:
                return (0, s.jsx)(oT, { className: o()(oC.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(ok, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: oC.nM,
                            children: [(0, s.jsx)(oT, { sku: i }), (0, s.jsx)(oy, { sku: i })],
                        }),
                        (0, s.jsx)(ob, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(oT, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(oC.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, oC.Pl);
            case 3:
                return this.renderGeneric(e, oC.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, oC.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var oL = n(301568);
let oM = {
    [er.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, lB.A)(r),
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
        getLabel: () => K.intl.string(K.t["0/xHFO"]),
    },
    [er.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, lB.A)(r),
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
        getLabel: () => K.intl.string(K.t.E4u4n5),
    },
    [er.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, lB.A)(r),
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
        getLabel: () => K.intl.string(K.t.tcawo3),
    },
};
function oP(e) {
    let { operatingSystem: t, className: n } = e,
        i = oM[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tB.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function oD(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(oL.I, n),
        children: t.map((e) => (0, s.jsx)(oP, { operatingSystem: e, className: o()(oL.A, i) }, e)),
    });
}
var oO = n(198985);
let oU = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(oO.T, t),
        children: (0, s.jsx)("span", { className: oO.Q, children: K.intl.string(K.t["14lP0W"]) }),
    });
};
var oG = n(992856);
let ow = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(oG.T, t),
        children: (0, s.jsx)("span", { className: oG.Q, children: K.intl.string(K.t["8IfYqa"]) }),
    });
};
var oB = n(615300),
    oH = n(628274),
    oV = n(358618),
    oF = n(983851),
    oY = n(133296),
    oz = n(607470),
    oK = n(856328);
class oW extends r.Component {
    _animatedValue = new oB.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), oB.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        oB.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, s.jsx)(oB.A.img, {
            className: o()({ [oK.YC]: i }, t),
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
            ? (0, s.jsx)(oB.A.div, { className: o()(oK.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(oB.A.div, {
                  className: o()(l ? oK.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tV.y, {
                                className: oK.u1,
                                itemClassName: oK.$N,
                                type: tV.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class oJ extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new aW.Ep();
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
            m = a ? oV.VoiceXIcon : oF.VoiceNormalIcon;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                lb.Fr
                    ? null
                    : (0, s.jsx)(oz.A, {
                          className: o()(oK.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(oH.F, {
                    children: l && e ? null : (0, s.jsx)(oW, { className: o()(oK.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eM.D, {
                    className: o()(oK.b4, { [oK.HY]: l && e, [oK.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: oK.i2 }) : null,
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
            ? (0, s.jsx)(oW, { className: o()(oK.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(oW, { className: o()(oK.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(oW, { className: o()(oK.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(oY.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: oK.mZ,
                  disable: !e,
                  children: (0, s.jsx)(oH.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(oK.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var oZ = n(366523),
    oX = n(622413),
    oq = n(435919);
class o$ extends r.PureComponent {
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
                  className: oq.ED,
                  children: [
                      (0, s.jsx)(oR, {
                          type: oR.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? oq.ae : oq.Ek,
                      }),
                      (0, s.jsx)(oD, { systems: [er.uje.WINDOWS], className: oq.iD }),
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
        return (0, rs.bF)(l)
            ? (0, s.jsx)(oZ.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: oq.A$,
                  backgroundImageClassName: oq.iZ,
                  foregroundImageClassName: oq.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(oJ, {
                          className: o()(oq.H1, { [oq.ZC]: a }),
                          video: null != d.previewVideo ? (0, rl.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, rl.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: oq.ZI,
                          splashPlaceholderClassName: oq.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(ow, { className: o()(oq.LJ, { [oq.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(oU, { className: o()(oq.LJ, { [oq.V9]: e }) })
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
            d = o ? oe.u : oX.A;
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
var oQ = n(587895),
    o0 = n(976150);
class o1 extends r.Component {
    static defaultProps = { renderFallback: er.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : er.JJy.APPLICATION_EMBED, object: er.ZSU.CARD };
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
            className: o0.h,
            children: (0, s.jsx)(eg.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: K.intl.string(K.t["W+NB90"]),
                onClick: () => {
                    (0, ri.pX)(er.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state;
        return (0, s.jsx)(o$, {
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
            isHorizontal: i > 660,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: r } = this.props;
        if (null != r) return (0, s.jsx)("div", { className: o0.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(er.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: o0.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(oE, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: o0.h,
                          source: er.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(oR, { type: oR.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(oe.W, { isHorizontal: n > 660 })
            : e.productLine === er.EZt.PREMIUM
              ? (0, s.jsx)(oA.A, {
                    section: er.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(op.N_, {
                        onClick: this.handleLinkClick,
                        to: er.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(oA.A, { section: er.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let o2 = [eB.A, od.A, eH.A];
function o3(e) {
    let { skuId: t } = e,
        n = eB.A.get(t),
        i = null != n ? oQ.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: eB.A.didFetchingSkuFail(t),
        inLibrary: null != n && od.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eH.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? od.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let o5 = (0, on.A)((0, ot.A)(o1)),
    o6 = u.Ay.connectStores(o2, o3)(o5),
    o9 = (0, ot.A)(u.Ay.connectStores(o2, o3)(o1));
var o4 = n(50302),
    o8 = n(866022);
function o7(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eM.D, {
        className: o8.kP,
        onClick: t,
        children: [
            (0, s.jsx)(a7.InventoryIcon, { size: "md", color: "currentColor", className: o8.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? K.intl.string(K.t.Wi99Ro) : K.intl.string(K.t["+tXad7"]) }),
        ],
    });
}
class de extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= 660;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === er.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, ev.openUserSettings)(eE.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? K.intl.string(K.t.mT9B49) : K.intl.string(K.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(eg.$, {
                  variant: "primary",
                  size: "sm",
                  text: K.intl.string(K.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(eg.$, { variant: "primary", size: "sm", text: K.intl.string(K.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? K.intl.string(K.t.QXgO5w)
            : this.props.isSelfGift
              ? K.intl.string(K.t.eEM3dq)
              : K.intl.string(K.t.tB8S6u);
    render() {
        return (0, s.jsx)(oe.u, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class dt extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: er.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        (e.preventDefault(),
            null != t && t.isHidden()
                ? (0, ri.pX)(er.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, ri.pX)(er.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, ev.openUserSettings)(eE.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eV.default.track(er.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: er.ZSU.BUTTON_CTA },
            }));
        let r = l !== er.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, os.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eV.default.track(er.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            ou.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, rs.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, ru.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, ev.openUserSettings)(eE.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(er.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t, isSelfGift: n } = this.props,
            i = n && (0, ol.m)(e) ? o4.default.P9ZU7b : K.t.nZBvUR;
        return (0, s.jsxs)(rR.A, {
            justify: rR.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(rR.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(o7, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(rR.A, {
                    align: rR.A.Align.END,
                    justify: rR.A.Justify.END,
                    className: o8.yu,
                    direction: rR.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: K.intl.format(i, { hours: e.expiresAt.diff(sS()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? K.t["4iHwKT"] : K.t.YeLq88;
        return K.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(eg.$, {
                    variant: "primary",
                    size: "sm",
                    text: K.intl.string(K.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tq.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? K.intl.string(K.t.BTihou)
                : null != e.giftStyle
                  ? K.intl.string(K.t.TiZFqX)
                  : K.intl.string(K.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t3.hU)(e) ? o8.UQ : void 0,
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
        return e === er.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? K.intl.formatToPlainString(K.t.t1SOId, { recipientDisplayName: og.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? K.intl.string(K.t["2PJ1NP"])
                    : K.intl.string(K.t.hrnGng)
                : n
                  ? K.intl.string(K.t.QLEMld)
                  : K.intl.string(K.t.W4DBcy);
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
        if (null == i) return K.intl.string(K.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, rs.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? K.intl.formatToPlainString(K.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t3.hU)(e) || (0, rs.bF)(i)
                ? K.intl.string(K.t.mVC3Cv)
                : K.intl.format(K.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return K.intl.format(K.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return K.intl.string(K.t.ARWFQX);
        if (!r.verified) return K.intl.format(K.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? K.intl.string(K.t["lQI+cB"])
                : K.intl.formatToPlainString(K.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return K.intl.string(K.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? K.intl.format(K.t.l3VxgG, { username: og.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : K.intl.format(K.t["9cYrw5"], {
                          username: og.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? K.intl.formatToPlainString(K.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : K.intl.formatToPlainString(K.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return K.intl.string(K.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nT.WT.MONTH ? K.t["/RDIEA"] : K.t["3CX6Ev"];
                return K.intl.format(e, { username: og.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nT.WT.MONTH ? K.t["2O4lo5"] : K.t["+XjmsR"];
            return K.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? K.intl.format(K.t["3HsdQ/"], { username: og.Ay.getUserTag(l) }) : K.intl.string(K.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nT.Wx.includes(e.giftStyle),
            i = o()(o8.gB, { [o8.El]: n, [o8.by]: t >= 660 }),
            l = o()({ [o8.gc]: n, [o8.Ei]: n && t >= 660, [o8.ww]: !n, [o8.wy]: !n && t >= 660 });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(oc, { className: o8.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(or.A, {
                        defaultAnimationState: e.redeemed ? oi.oA.LOOP : oi.oA.IDLE,
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
            text: K.intl.string(K.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, rs.bF)(n);
        return (0, s.jsx)(o9, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: er.JJy.GIFT_CODE_EMBED,
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
            return (0, s.jsx)(o9, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: er.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => K.intl.string(K.t.X4p5uH),
                renderCustomTagline: () => K.intl.string(K.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(de, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(oe.W, { isHorizontal: i >= 660 });
        return (0, t3.hU)(e)
            ? (0, s.jsx)("div", { className: o8.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let dn = (0, on.A)((0, ot.A)(dt)),
    di = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([oo.A], () => {
                let e = oo.A.getError(t);
                return { giftCode: oo.A.get(t), resolved: oo.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([O.default], () => (null != i && null != i.userId ? O.default.getUser(i.userId) : null)),
            o = (0, u.bG)([eB.A], () => (null != i ? eB.A.get(i.skuId) : null)),
            d = (0, u.bG)([od.A], () =>
                null != o && i?.entitlementBranches != null ? om.YI(i.entitlementBranches, o, od.A) : null,
            ),
            c = (0, rn.h)(o?.applicationId),
            m = null != o && (0, rs.bF)(o) && i?.redeemed === !0,
            [h] = (0, oa.L_)(m ? c?.id : null),
            g = (0, oh.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([L.default], () => (null != i ? L.default.getId() === i.userId : L.default.getId() === n.id));
        return (0, s.jsx)(dn, {
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
var dl = n(574332),
    ds = n(107123),
    dr = n(698441),
    da = n(427080),
    dd = n(346542),
    dc = n(963055),
    du = n(95701),
    dm = n(299091),
    dh = n(537975),
    dg = n(294630),
    dp = n(713654),
    dA = n(624394);
function dx(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: dA.MY,
                        children: [
                            (0, s.jsx)("i", { className: dA.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "body-xs/normal",
                                className: dA.U9,
                                color: i,
                                children: K.intl.format(K.t["LC+S+m"], { membersOnline: n }),
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
                        className: dA.MY,
                        children: [
                            (0, s.jsx)("i", { className: dA.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "body-xs/normal",
                                className: dA.U9,
                                color: i,
                                children: K.intl.format(K.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: dA.rc, children: l })
    );
}
function df(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, iy.Ay)(t);
    if (null != t && null != n) {
        let e = (0, dp.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(dA.Ix, { [dA.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: dA.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(ry.A, {
                    children: (0, s.jsx)(A.E, {
                        variant: "body-xs/normal",
                        color: l,
                        children: K.intl.format(K.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(dA.Ix, { [dA.v6]: i }),
              children: (0, s.jsx)(ry.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "body-xs/normal",
                      color: l,
                      children: K.intl.format(K.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function dI(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    eb()(l === dg.y.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([M.A], () => M.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e1.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(dE, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function dE(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    eb()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eV.default.track(er.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([ii.A], () => (null != i.guild ? ii.A.getGuild(i.guild.id) : null), [i]),
        A = (0, u.bG)(
            [ed.Ay],
            () => i?.channel != null && ed.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        x = (0, u.bG)([ed.Ay], () =>
            (i.channel?.id != null ? ed.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        E = (0, u.bG)([tt.A], () => null != d && tt.A.can(er.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED),
        C = (0, u.yK)(
            [ed.Ay],
            () =>
                null != d
                    ? ed.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([O.default], () => C.map((e) => O.default.getUser(e)).filter((e) => null != e), [C]),
        j = r.useCallback(() => {
            ((0, dl.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lW._U)(i.code, l.id),
                },
                v,
            ),
                dl.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                }));
        }, [i, l, v, a]),
        N = i.state === er.elq.ACCEPTING,
        y = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(iK, {});
        p = (0, dh.DY)(i.guild);
    }
    t = y
        ? A
            ? K.intl.string(K.t.DPfdsq)
            : x
              ? K.intl.string(K.t.sqe0hj)
              : K.intl.string(K.t.RscU7I)
        : K.intl.string(K.t["2BP08E"]);
    let b = (y && !E) || (y && A);
    return (E || (n = K.intl.string(K.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(I.f5, {
              value: v,
              children: (0, s.jsx)(dv, {
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
                  disabled: b,
                  disabledReason: n,
                  handleAcceptInvite: j,
                  onView: g,
              }),
          });
}
function dv(e) {
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
        E = U.Ay.getApplicationIconURL({ id: t.id, icon: I, bot: f }),
        v = (0, $.F)(t),
        C = (0, q.f)(t),
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
    return (0, s.jsx)(B.h, {
        header: t.name,
        title: K.intl.string(K.t["7vb6nw"]),
        iconSrc: E,
        ...C,
        onClickBanner: v,
        info: (0, s.jsxs)("div", {
            className: dA.QR,
            children: [
                (0, s.jsx)(df, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(J, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: K.intl.formatToPlainString(K.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(dx, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var dC = n(4274);
function d_(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([L.default], () => L.default.getId()) === t.id
                ? K.intl.string(K.t.C89OLE)
                : K.intl.string(K.t.YVub5y),
        l = (0, dC.g)(n?.code);
    return (0, s.jsxs)(iz.A, {
        children: [
            (0, s.jsx)(iz.A.Header, { text: i }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsx)(iz.A.Icon, { expired: !0 }),
                    (0, s.jsx)(iz.A.Info, {
                        expired: !0,
                        title: l?.title ?? K.intl.string(K.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var dj = n(308528),
    dN = n(619019);
function dy(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([L.default], () => L.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === er.elq.ACCEPTING,
        { analyticsLocations: d } = (0, I.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([P.A], () => null != t.inviter && P.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != M.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), dj.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, dl.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lW._U)(t.code, n.id),
                    },
                    d,
                ));
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, dl.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, lW._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            dl.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = K.intl.string(K.t.ib7Ng1),
        A = "active";
    c
        ? ((p = K.intl.string(K.t.xhxnPn)), (A = "secondary"))
        : a && ((p = K.intl.string(K.t.ib7Ng1)), (A = "secondary"));
    let x = a ? K.intl.string(K.t.eQyu1F) : K.intl.string(K.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        v = null != t.inviter ? og.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(iz.A, {
        children: [
            (0, s.jsx)(iz.A.Header, { text: x }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lz.iH,
                        children: [
                            (0, s.jsx)(iz.A.Icon, { user: new dN.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(iz.A.Info, { title: E, onClick: c ? g : void 0, children: v }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var db = n(342952);
function dT(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === er.elq.ACCEPTING,
        c = (0, u.bG)([M.A], () => (null != t.channel ? M.A.getChannel(t.channel.id) : null), [t]);
    eb()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = null != c,
        g = r.useRef(null),
        p = r.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, dl.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, lW._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, a]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, du.OY)(e.channel),
                    i = (0, iy.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = O.default.getUser(t);
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, iy.Bi)(t),
                    i = O.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, c ?? null);
    if (null == x) return (0, s.jsx)(iK, {});
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
                                    let t = P.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof dN.A ? e : O.default.getUser(e.id);
                                    if (null != n) {
                                        let e = og.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? K.intl.string(K.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? K.intl.formatToPlainString(K.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? K.intl.formatToPlainString(K.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
                                : K.intl.formatToPlainString(K.t.m5uYso, { first: i[0], second: i[1] }),
                a = K.intl.string(K.t.gVDdRn),
                o = "active";
            return (
                n && ((a = K.intl.string(K.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: r,
                    headerText: t ? K.intl.string(K.t.Fyamu8) : K.intl.string(K.t["2tr5Qz"]),
                    buttonText: a,
                    buttonVariant: o,
                }
            );
        })(x, o, h),
        { channel: j, recipients: N } = x,
        y = N.map((e) =>
            e instanceof dN.A
                ? e
                : (O.default.getUser(e.id) ?? new dN.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        b = null != j.icon,
        T = K.intl.format(K.t.zRl6XR, { count: N.length });
    return (0, s.jsxs)(iz.A, {
        className: lz.TV,
        children: [
            (0, s.jsx)(A.E, {
                variant: "body-sm/medium",
                color: "text-muted",
                className: lz.JO,
                lineClamp: 1,
                children: v,
            }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${lz.iH} ${lz.mx}`,
                        children: [
                            b &&
                                (0, s.jsx)(iz.A.Icon, {
                                    channel: j,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tx._3.SIZE_48,
                                }),
                            (0, s.jsx)(iz.A.Info, {
                                title: (0, s.jsx)(ry.A, { children: E }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-sm/medium",
                                detailVariant: "body-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: lz.er,
                                    children:
                                        y.length > 0
                                            ? (0, s.jsx)(eM.D, {
                                                  className: lz.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: T,
                                              })
                                            : T,
                                }),
                            }),
                            y.length > 0 &&
                                (0, s.jsx)(db.A, {
                                    ref: g,
                                    className: lz.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tx._3.SIZE_32,
                                    channelId: j.id,
                                    popoutClassName: lz.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: p, loading: d, disabled: h, variant: _, text: C, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var dS = n(821418),
    dk = n(340837);
let dR = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, dk.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, dS.Q.IS_GUEST_INVITE)
    );
};
var dL = n(517905);
function dM(e) {
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
        _ = m.state === er.elq.ACCEPTING,
        j = null != E ? (0, du.OY)(E) : null,
        N = null != d,
        y = null != j,
        b = null != j && j.isGuildStageVoice(),
        T = (0, c.Lt)(m.flags ?? 0, dS.Q.IS_GUEST_INVITE),
        S = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(er.GuildFeatures.HUB) ?? !1,
        R = d?.id,
        { analyticsLocations: L } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, lW._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [M, P] = r.useState(!1),
        D = r.useCallback(() => P(!1), []),
        O = r.useRef(null),
        U = (0, u.bG)([ss.Ay], () => dR([ss.Ay], m)),
        G = r.useCallback(() => {
            (P(!0), (0, dl.Pq)(R, "show profile", L));
        }, [R, L]),
        w = r.useCallback(() => {
            let e = "noop";
            (N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, dl.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, lW._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(iK, {});
        (d = dh.DY(m.guild)).premiumTier = m.guild.premium_tier ?? er.TVA.NONE;
    }
    let B = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return K.intl.string(K.t.N85DCl);
                else if (s) return K.intl.string(K.t.TJQcNv);
                else if (l) return K.intl.string(K.t.mJyBir);
                else return K.intl.string(K.t.lxTgP9);
            else if (r) return K.intl.string(K.t.Mnvc3C);
            else if (s) return K.intl.string(K.t.FdPNr5);
            else if (l) return K.intl.string(K.t.f4gmrf);
            else return K.intl.string(K.t.H39rEY);
        return n
            ? i
                ? K.intl.string(K.t.UxmnHx)
                : K.intl.string(K.t.sigPEf)
            : i
              ? K.intl.string(K.t["oU/lsl"])
              : K.intl.string(K.t.BoQUFf);
    })({ isVoiceChannel: S, isOwnInvite: x, isGuest: T, isHubGuild: k, isStage: b, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: lz.FA,
            children: [
                (0, s.jsx)(dL.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: M,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, s.jsx)(iz.A.GuildName, { guild: d, ref: O }),
                }),
                (0, s.jsx)("span", {
                    className: lz.E3,
                    children: (0, s.jsx)(aU.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        T &&
            (l = (0, s.jsx)(tB.m, {
                asContainer: !0,
                text: K.intl.string(K.t["/FeTK6"]),
                children: (0, s.jsx)(im.CircleInformationIcon, { size: "md", color: "currentColor", className: lz.G }),
            })),
        S
            ? ((i = (0, s.jsx)(iz.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: lz.FA,
                  children: [
                      K.intl.format(K.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: lz.E3,
                          children: (0, s.jsx)(aU.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != v && v >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(iz.A.Data, { members: v, membersOnline: C }))
              : y && (t = (0, s.jsx)(iz.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(iz.A, {
            children: [
                (0, s.jsx)(iz.A.GuildSplash, { guild: d }),
                (0, s.jsx)(iz.A.Header, { text: B, extra: l }),
                (0, s.jsxs)(iz.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: lz.iH,
                            children: [
                                (0, s.jsx)(iz.A.Icon, { guild: d }),
                                (0, s.jsx)(iz.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: lz.UD,
                            children: (0, s.jsx)(eg.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: S,
                                disabled: !U,
                                text: S
                                    ? b
                                        ? K.intl.string(K.t["7vb2cc"])
                                        : K.intl.string(K.t.gpqgah)
                                    : N
                                      ? K.intl.string(K.t.cEnaWx)
                                      : K.intl.string(K.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(er.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: lz.me }),
                            (0, s.jsx)(A.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: K.intl.format(K.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, g.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(589302),
                                                n.e(197804),
                                                n.e(807265),
                                                n.e(797641),
                                                n.e(169555),
                                            ]).then(n.bind(n, 500126));
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
var dP = n(9994),
    dD = n(461888),
    dO = n(136696),
    dU = n(123213),
    dG = n(86376),
    dw = n(42780),
    dB = n(897288),
    dH = n(151101);
function dV(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = r.useId(),
        [m, h] = r.useState(!0),
        [g, p] = r.useState(!1),
        A = t.state === er.elq.ACCEPTING,
        x = (0, u.bG)([aX.Ay], () => aX.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, I.Ay)(f.A.INVITE_EMBED);
    ((0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, lW._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]));
    let v = (0, dP.oO)(t),
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
    if (null == v) return (0, s.jsx)(iK, {});
    let N = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: dH.uY,
                ref: d,
                children: [
                    (0, s.jsx)(dw.J$, { profile: v, className: dH.vK }),
                    (0, s.jsx)(dw.CG, { profile: v }),
                    (0, s.jsx)(dG.A, { profile: v, disableGuildNameClick: !g, guildNameId: c }),
                    (0, s.jsx)(dO.P, { profile: v, className: dH.rb }),
                    (0, s.jsx)(dB.A, {
                        guild: null != t.guild ? (0, dh.DY)(t.guild) : null,
                        roles: t.roles,
                        className: dH.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: dH.Se,
                      children: (0, s.jsx)(sz.Q, {
                          textVariant: "body-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: _,
                          text: K.intl.string(K.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(dH.qr, { [dH.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: dH.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(dH.z8, { [dH.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: dH.UD,
                            children: (0, s.jsx)(dF, {
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
        ? (0, s.jsx)(tw.s, {
              className: o()(dH.Gg, { [dH.vk]: m }),
              onClick: C,
              style: j,
              "aria-label": K.intl.string(K.t.dcl9MQ),
              children: N,
          })
        : (0, s.jsx)("div", { className: dH.Gg, role: "group", "aria-labelledby": c, children: N });
}
function dF(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, dD.Ay)(n, dD.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, dl.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, lW._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(dU.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
function dY(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        a = r.useId();
    return (
        (0, u.bG)([L.default], () => L.default.getId()) === i.id
            ? ((n = K.intl.string(K.t.HfUzlI)), (t = K.intl.string(K.t.y7uT5j)))
            : l
              ? ((n = K.intl.string(K.t.OMfs8i)), (t = K.intl.string(K.t["57nBty"])))
              : ((n = K.intl.string(K.t.OMfs8i)), (t = K.intl.string(K.t["p/zTYn"]))),
        (0, s.jsxs)(iz.A, {
            className: lz.TV,
            role: "group",
            "aria-labelledby": a,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: lz.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(iz.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: lz.iH,
                        children: [
                            (0, s.jsx)(iz.A.Icon, { expired: !0 }),
                            (0, s.jsx)(iz.A.Info, {
                                expired: !0,
                                title: K.intl.string(K.t["Jhx/ud"]),
                                titleId: a,
                                titleVariant: "heading-sm/medium",
                                children: t,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var dz = n(616356);
function dK(e) {
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
        m = (0, u.bG)([D.A], () => D.A.getGuildId()),
        h = (0, u.bG)(
            [dz.A],
            () => (null != n && null != n.target_user ? dz.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [dz.A],
            () => (null != n && null != n.target_user ? dz.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e3.A)({
        name: e2.ImpressionNames.INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, lW._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === dg.y.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eb()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: v } = n;
    eb()(E === dg.y.STREAM && null != v, "invalid streaming invite");
    let C = i === v.id,
        _ = n.state === er.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            (A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, dl.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, lW._U)(n.code, a.id),
                    },
                    p,
                ));
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(iK, {});
        l = (0, dh.DY)(n.guild);
    }
    let y = null != n.channel ? (0, du.OY)(n.channel) : null,
        b = og.Ay.getName(v),
        T = A || (!x && N),
        S = K.intl.string(K.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = C ? K.intl.string(K.t.oBLoZJ) : K.intl.formatToPlainString(K.t["0QJmA+"], { name: b })),
          (S = K.intl.string(K.t.Wdi5E1)))
        : ((k = "active"),
          A && ((S = K.intl.string(K.t.Q1W99y)), (k = "secondary")),
          (t = C ? K.intl.string(K.t["4hyaHu"]) : K.intl.formatToPlainString(K.t.QmlLEq, { name: b })));
    let R =
        m === l.id && null != y
            ? (0, s.jsx)(iz.A.Channel, { channel: y })
            : K.intl.formatToPlainString(K.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(iz.A, {
        children: [
            (0, s.jsx)(iz.A.Header, { text: K.intl.string(K.t["wS+5Wb"]) }),
            (0, s.jsxs)(iz.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: lz.iH,
                        children: [
                            (0, s.jsx)(iz.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(iz.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(eg.$, { onClick: j, loading: _, disabled: T, variant: k, text: S }),
                ],
            }),
        ],
    });
}
var dW = n(952270),
    dJ = n(652896),
    dZ = n(834757),
    dX = n(812020),
    dq = n(607567),
    d$ = n(323605);
function dQ(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, dp.gU)(n, i),
        a = (0, iy.Ay)(n);
    return (0, s.jsxs)(eM.D, {
        onClick: l,
        className: o()(d$.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: d$.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "body-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(ry.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(iI.ChevronSmallRightIcon, {
                className: d$.t4,
                color: "currentColor",
                size: "custom",
                width: 12,
                height: 12,
            }),
        ],
    });
}
var d0 = n(156150),
    d1 = n(717421),
    d2 = n(95362),
    d3 = n(297413),
    d5 = n(528944);
function d6(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(sl.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eM.D, {
                ...r,
                innerRef: a,
                className: d5.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tA.eu, {
                        src: t.getAvatarURL(n, (0, tx.FT)(tx._3.SIZE_24)),
                        className: d5.my,
                        "aria-label": t.username,
                        size: tx._3.SIZE_24,
                    }),
                    (0, s.jsx)(A.E, {
                        className: d5.Tc,
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(d3.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var d9 = n(480887);
function d4(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(d8, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(rI.Y, { renderPopout: () => o(i), ...a });
}
function d8(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, tY.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: d9.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(d2.Ip, {
                className: d9.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        d6,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: ad.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var d7 = n(768920);
let ce = { mass: 1, tension: 170, friction: 26 };
function ct(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, d1.z)(() => ({ x: 0, y: 0, scale: 1, config: ce }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(d0.animated.div, {
            ref: a,
            className: o()(d7.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, d0.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: d7.my,
                            children: (0, s.jsx)(tB.m, {
                                text: ad.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tA.eu, {
                                    src: (function (e, t, n) {
                                        let i = ss.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, U.xT)(i);
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
                c && (0, s.jsx)(cn, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function cn(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, tY.A)(e),
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
    return (0, s.jsx)(d4, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(d7.my, d7.k2),
                ref: a,
                ...e,
                children: (0, s.jsx)(A.E, {
                    variant: "body-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var ci = n(183751);
function cl(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = dh.DY(t.guild));
    let m = null != t.channel ? (0, du.OY)(t.channel) : null;
    (eb()(null != c, "Voice Invite Embed must be used in context of a guild."),
        eb()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [tt.A, M.A],
            () => {
                let e = M.A.getChannel(m.id);
                return null == e || tt.A.canBasicChannel(er.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([dq.Ay], () => (h ? dq.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? K.intl.string(K.t.DVDvCD) : K.intl.string(K.t.TY77rq),
                    sublabel: K.intl.string(K.t.wM2WTM),
                };
            let o = r ? K.t["2RWMFV"] : K.t.IWXzHV,
                d = r ? K.t.Da7tZx : K.t["3VbQvv"];
            return { label: l ? K.intl.format(o, { othersCount: a }) : K.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([L.default], () => L.default.getId()), author: n.author, voiceStates: g }),
        E = (0, u.bG)([ii.A], () => null != ii.A.getGuild(c.id), [c.id]),
        v = (0, u.bG)([eo.Ay], () => eo.Ay.getVoiceChannelId() === m.id, [m.id]),
        C = (0, u.bG)([ss.Ay], () => dR([ss.Ay], t), [t]),
        _ = t.state === er.elq.ACCEPTING,
        { analyticsLocations: j } = (0, I.Ay)(f.A.INVITE_EMBED),
        N = (0, lW._U)(t.code, n.id),
        y = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [dz.A, dX.A],
                () => {
                    if ((0, dd.G4)(t) && null != t.target_user) {
                        let e = dz.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = dz.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let r = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === r.length) return null;
                    for (let e of [...r].sort((e, t) => {
                        let n = dX.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (dX.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = dz.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        b = (0, dZ.AO)(y),
        T = null != y,
        S = r.useCallback(() => {
            let e = E ? "transition" : "accept";
            (E ? l() : a(),
                (0, dl.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: b?.id ?? void 0,
                        stream_key: null != y ? (0, dJ._z)(y) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                ));
        }, [t, n, j, N, E, b, y, g.length, l, a]),
        k = r.useCallback(() => {
            (E ? (0, sN.iN)(m.id) : a({ autoJoin: !1 }),
                eV.default.track(er.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: E,
                    application_id: b?.id ?? null,
                    stream_key: null != y ? (0, dJ._z)(y) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                }));
        }, [m.id, c.id, t.code, N, E, b, y, g.length, j, a]);
    (0, e3.A)({
        name: e2.ImpressionNames.VOICE_INVITE_EMBED,
        type: e2.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: T,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([aX.Ay], () => aX.Ay.useReducedMotion),
        P = r.useRef(null),
        [D, O] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)(
            [dX.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = dX.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (dX.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        G = r.useMemo(() => th().throttle(O, 20), [O]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
            (e) => {
                if (R) return;
                let t = P.current?.getBoundingClientRect();
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
        className: ci.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: P,
                className: ci.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: ci.ys }),
                    (0, s.jsx)("div", { className: ci.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: ci.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(ci.Qs, { [ci.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(dQ, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: ci.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "body-md/medium",
                                                children: (0, s.jsx)(ry.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "body-sm/normal",
                                                      className: ci.$B,
                                                      children: (0, s.jsx)(ry.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: ci.RE,
                                      children: (0, s.jsx)(ct, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: D,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: ci.xk,
                        children: (0, s.jsx)(eg.$, {
                            onClick: S,
                            loading: _,
                            variant: v ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !C,
                            text: v ? K.intl.string(K.t["3xjX0U"]) : K.intl.string(K.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ci.qr,
                children: [
                    (0, s.jsx)(dW.EyeSlashIcon, { size: "custom", color: "currentColor", className: ci.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "body-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: K.intl.string(K.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function cs(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [dm.A],
            () => ({ invite: dm.A.getInvite(t), inviteError: dm.A.getInviteError(t) }),
            [t],
        ),
        o = (0, lW._U)(t, n.id);
    r.useEffect(() => {
        null == l && dl.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: er.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, I.Ay)(),
        m = (0, u.bG)([ii.A], () => (l?.guild != null ? ii.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [M.A, tt.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = M.A.getChannel(e);
                return null != t && tt.A.canBasicChannel(er.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([L.default], () => L.default.getId()),
        p = (0, u.bG)([dr.Ay], () => dr.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && dl.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            dl.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? dh.DY(l.guild) : m;
        (0, dc.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: c,
            onGateConfirm: n,
        }) === dc.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(dM, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case er.elq.RESOLVING:
            f = (0, s.jsx)(iK, {});
            break;
        case er.elq.EXPIRED:
        case er.elq.BANNED:
            f = (0, s.jsx)(dY, { banned: d.state === er.elq.BANNED, author: n.author });
            break;
        case er.elq.ERROR:
            f = (0, s.jsx)(d_, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, dd.On)(d)) {
                case dd.Xd.GROUP_DM:
                    f = (0, s.jsx)(dT, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case dd.Xd.FRIEND:
                    f = (0, s.jsx)(dy, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, dd.G4)(d)) {
                        if (null != d.channel && (0, du.OY)(d.channel).isGuildVoice() && null != d.guild && h) {
                            f = (0, s.jsx)(cl, {
                                onTransitionToInviteChannel: A,
                                onAcceptInstantInvite: x,
                                guild: m,
                                invite: d,
                                message: n,
                            });
                            break;
                        }
                        f = (0, s.jsx)(dK, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, dd.ly)(d)) {
                        f = (0, s.jsx)(da.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, dd.oK)(d)) {
                        f = (0, s.jsx)(dI, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, du.OY)(d.channel).isGuildVoice() && null != d.guild && h) {
                        f = (0, s.jsx)(cl, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            guild: m,
                            invite: d,
                            message: n,
                        });
                        break;
                    }
                    (0, ds.v)(d) &&
                        (f = (0, s.jsx)(dV, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(oA.A, { section: er.JJy.INVITE_LINK, children: f });
}
var cr = n(450568),
    ca = n(860227),
    co = n(656941),
    cd = n(503002),
    cc = n(123791),
    cu = n(627363);
function cm(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, cu.YY)(t);
    return null == i ? null : (0, s.jsx)(ch, { app: i, guildId: n });
}
function ch(e) {
    let { app: t, guildId: i } = e;
    (0, cc.C)(t.id);
    let l = r.useCallback(() => {
        (0, g.mM)(async () => {
            let { default: e } = await Promise.all([
                n.e(538855),
                n.e(406322),
                n.e(309702),
                n.e(168031),
                n.e(99534),
                n.e(320428),
            ]).then(n.bind(n, 719847));
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(eg.$, {
        size: "sm",
        onClick: l,
        icon: cd.ShopSparkleIcon,
        text: K.intl.format(K.t.XDRjs5, { appName: t.name }),
    });
}
var cg = n(349878),
    cp = n(96782),
    cA = n(367790),
    cx = n(861986),
    cf = n(87221),
    cI = n(313433);
function cE(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: cI.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: cI.Yf,
                        children: [
                            (0, s.jsx)(cf.ImageWarningIcon, { size: "lg", color: n6.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                children: K.intl.string(K.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: cI.Fj,
                children: [
                    (0, s.jsx)(im.CircleInformationIcon, { size: "sm", color: n6.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: K.intl.string(K.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var cv = n(492230),
    cC = n(343552),
    c_ = n(581619),
    cj = n(803931);
function cN(e) {
    return (0, rE.$o)({ ...e, showPlaybackSpeedControl: !0 });
}
let cy = [er.Auw.GIFV],
    cb = 15 * nA.A.Millis.MINUTE,
    cT = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cS = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, l0.e5.IS_ANIMATED);
        return null != i && null != l && (l1.bp.test(n) || (a && (l1.P8.test(n) || l1.p4.test(n))))
            ? (0, s.jsx)(a8.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: cj.jj })
            : null;
    };
function ck(e) {
    let { url: t, image: n, video: i, thumbnail: l, providerName: a, children: o } = e,
        d = r.useMemo(() => (0, cC.b)(t, n, i, l, a), [t, n, i, l, a]);
    return (0, s.jsx)(ly.G.Provider, { value: d, children: o });
}
class cR extends r.Component {
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
            ...(null != t ? { invite_instance_id: (0, lW._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cT.has(e));
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
            case ak.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(ix, { messageId: e.id, channelId: t.id });
                break;
            case ak.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ef, { channelId: t.id, messageId: e.id }),
                        (0, eh.cc)(t.id, e.id) ? (0, s.jsx)(eN, { channelId: t.id }) : null,
                    ],
                });
                break;
            case ak.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(eC, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: cj.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: r } = n;
            if ((0, tk.Yf)(i)) {
                let n = (0, tk.kK)(i, l, r);
                if (null == n) return null;
                let { applicationId: a } = n;
                return (0, s.jsx)(
                    e1.O,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tR.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(lM, { code: a, message: e });
                                case tR.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(em, { application: t, message: e, params: i });
                                case tR.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(e$, { application: t, message: e });
                                case tR.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(eQ, { application: t, message: e, skuId: l });
                                case tR.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(e5, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    l,
                );
            }
            switch (i) {
                case tR.I.INVITE:
                    if (!this.shouldRenderInvite(l)) return null;
                    return (0, s.jsx)(
                        cs,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tR.I.TEMPLATE:
                    return (0, s.jsx)(lK, { code: l }, l);
                case tR.I.EVENT:
                    return (0, s.jsx)(lw.A, { code: l }, l);
                case tR.I.CHANNEL_LINK:
                    return (0, s.jsx)(aw, { code: l, message: e }, l);
                case tR.I.GUILD_PRODUCT:
                    return (0, s.jsx)(lG, { code: l }, l);
                case tR.I.SERVER_SHOP:
                    return (0, s.jsx)(io, { guildId: l }, l);
                case tR.I.SOCIAL_LAYER_STOREFRONT: {
                    let n = (0, s7.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            rg,
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
                        rp.A,
                        {
                            guildId: i,
                            skuId: r,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, s8.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: i });
                            },
                        },
                        l,
                    );
                }
                case tR.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let n = (0, s7.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            rg,
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
                    return (0, s.jsx)(rp.I, { applicationId: i, skuId: r, channel: t }, l);
                }
                case tR.I.QUESTS_EMBED:
                    return (0, s.jsx)(sI.A, { questId: l }, l);
                case tR.I.GAME_PROFILE:
                    return (0, s.jsx)(li, { gameId: l, sourceUserId: e.author.id }, l);
                case tR.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(lN, { code: l }, l);
                case tR.I.USER_PROFILE:
                    return (0, s.jsx)(aj, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
                case tR.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tM.has(i) ? i : void 0 };
                    })(l);
                    if (null == e) return null;
                    return (0, s.jsx)(nO, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tR.I.EXPERIMENT:
                case tR.I.USER_WISHLIST:
                    return null;
                case tR.I.GAME_ORGANIZATION_INVITE:
                    return (0, s.jsx)(i5, { code: l }, l);
                case tR.I.CONJURE_PROJECT:
                    return (0, s.jsx)(
                        nQ,
                        { applicationId: l, guildId: t.guild_id ?? null, ticket: (0, nU.iW)(r), channelId: t.id },
                        l,
                    );
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = O.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: cj.zv,
                          children: (0, s.jsx)(di, {
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
            : (0, s.jsx)(cA.A, {
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
        var t;
        let n,
            i,
            {
                channel: l,
                gifAutoPlay: r,
                canDeleteAttachments: a,
                inlineAttachmentMedia: o,
                onMediaItemContextMenu: d,
                enabledContentHarmTypeFlags: u,
                shouldHideMediaOptions: m,
            } = this.props,
            { attachments: h, flags: g } = e;
        if (0 === h.length || e.isPoll() || (0, aN._c)(e)) return null;
        let p = h.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, er.sbO.IS_THUMBNAIL));
        if (0 === p.length) return null;
        let {
                srcToOnClickOverride: A,
                srcToHandlePreloadImage: x,
                srcToSeekOverride: f,
                srcToOpenAtTime: I,
            } = ((t = { enabledContentHarmTypeFlags: u, shouldHideMediaOptions: m }),
            (n = p
                .map((t) => ({
                    ...(0, l0.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, er.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type)),
            (i = (0, cv.o)(n, t, "Media Mosaic")),
            { ...(n.length > 1 ? i : (0, cv.o)([], t, "Media Mosaic")), srcToOpenAtTime: i.srcToSeekOverride }),
            E = (0, c.Lt)(g, er.pr7.IS_VOICE_MESSAGE);
        function v(e, t) {
            let n = (0, c.Lt)(e.originalItem.flags ?? 0, er.sbO.IS_SPOILER) || (0, rA.BV)(l);
            return (0, aR.iW)(e.originalItem, t, n);
        }
        let C = p.map((t) => {
            let n = (0, l0.aG)(t),
                i = {
                    message: e,
                    item: (0, cp.rC)(t, o),
                    autoPlayGif: r,
                    canRemoveItem: a && (p.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: a,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: v,
                    onContextMenu:
                        null != d
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), d(e, n));
                              }
                            : void 0,
                    renderAudioComponent: E ? cr.SX : cr.Nj,
                    renderImageComponent: cr.Cr,
                    renderVideoComponent: cr.I1,
                    renderPlaintextFilePreview: cr.R6,
                    renderGenericFileComponent: cr.UB,
                    onPlay: function (n, i, s) {
                        eV.default.track(er.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: l.guild_id,
                            channel_id: l.id,
                            channel_type: l.type,
                            type: t.content_type,
                            flags: t.flags,
                            size: t.size,
                            attachment_id: t.id,
                            message_id: e.id,
                            duration: s,
                        });
                    },
                    gifFavoriteButton: cS(n),
                    allowFullScreen: this.props.allowFullScreen ?? !this.props.disableComponentInteractivity,
                },
                s = (0, ab.E)({ proxyURL: t.proxy_url, url: t.url });
            return (
                (i.onOpenInMediaViewer = I[s]),
                s in A && ((i.onClick = A[s]), (i.handlePreloadImage = x[s]), (i.onSeekRequest = f[s])),
                i
            );
        });
        return (0, s.jsx)(cg.A, { items: C });
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
            u = (0, aR.sC)(e, i, o, d);
        if (e.type === er.Auw.GIFT) return null;
        let m = cy.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            ck,
            {
                url: m,
                image: e.image,
                video: e.video,
                thumbnail: e.thumbnail,
                providerName: e.provider?.name,
                children: (0, s.jsx)(tu.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !r,
                    allowFullScreen: this.props.allowFullScreen ?? !this.props.disableComponentInteractivity,
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
        e.type !== er.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lQ.A.parseEmbedTitleWithoutLinks : lQ.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === er.Auw.RICH
            ? lQ.A.parseRichEmbedText(t, !0, {
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
        (0, g.mM)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e(865429), n.e(669865)]).then(
                n.bind(n, 507536),
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
                      c_.zx.has(t.type) ||
                      (0, aT.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, er.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === lZ.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lX.has(t.content_type);
                              })
                          )) ||
                      (0, aT.V)(t) ||
                      (0, aT.G8)(t) ||
                      (0, aT.Xk)(t) ||
                      (function (e) {
                          let { type: t, url: n } = e;
                          if (t === er.Auw.RICH || null == n) return !1;
                          try {
                              return null != (0, nU.tY)(new URL(n));
                          } catch {
                              return !1;
                          }
                      })(t) ||
                      ((0, aT.nL)(t) && (0, ar.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === er.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, aR.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  aK,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cS,
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
                                sF.Ay,
                                {
                                    type: sF.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: rE.LL, renderVideoComponent: cN, renderLinkComponent: rE.bU };
                  if (
                      t.type === er.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = aS.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  o6,
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
        return (0, s.jsx)(aF.N, {
            gifAutoPlay: t,
            getGifFavButton: cS,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), r?.(t, e));
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(lq.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(co.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== er.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(tc, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, aL.ec)(e)
            ? (0, s.jsx)(a4.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, sA.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(rq, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(er.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(al, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(er.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - iT.default.extractTimestamp(e.id) >= cb)
        )
            return (0, s.jsx)("div", { className: cj.xM, children: K.intl.string(K.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: K.intl.string(K.t.VL1KOk),
            confirmText: K.intl.string(K.t.YEHppG),
            cancelText: K.intl.string(K.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    className: cj.IX,
                    children: K.intl.string(K.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
                    variant: "body-md/normal",
                    color: "text-muted",
                    children: K.intl.string(K.t["5j2by3"]),
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
                  header: K.intl.string(K.t.CbTIEo),
                  confirmText: K.intl.string(K.t.kFwAsa),
                  cancelText: K.intl.string(K.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      className: cj.IX,
                      children: K.intl.string(K.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(cm, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e1.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(a9, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== er.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(sp, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === er.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(s$, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === er.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(s4, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, ic.KM)(e)
            ? (0, s.jsx)(ig, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(sf.A, { message: e, poll: t, className: cj.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tT, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, sE.Mn)(e, this.props.channel))
            return (0, s.jsx)(sV, { message: e, renderAccessories: this.props.renderAccessories });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, sE.Mn)(e, this.props.channel))
            return (0, s.jsx)(iB, {
                message: e,
                renderAccessories: this.props.renderAccessories,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                allowFullScreen: this.props.allowFullScreen,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(cx.A, { message: e, compact: t, location: cx.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, iS.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new iR(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, sA.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, ca.XL)(e),
                  className: o()(this.props.className, cj.kL),
                  children: (0, s.jsx)(cE, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, ca.XL)(t), className: o()(e, cj.kL), children: n })
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
            b = this.renderMediaObscureNotice(t),
            T = this.renderPoll(t, n),
            S = this.renderForwardedMessage(t),
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
            null == T &&
            null == S &&
            null == k &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, ca.XL)(t),
                  className: o()(e, cj.kL),
                  children: [
                      k,
                      S,
                      v,
                      T,
                      R,
                      d,
                      c,
                      j,
                      u,
                      m,
                      h,
                      b,
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
function cL(e) {
    let t,
        {
            channel: n,
            message: i,
            renderSuppressEmbeds: l,
            isMessageSnapshot: r,
            hideInviteEmbedBanner: a,
            hideActivityInvite: o,
        } = e,
        d = (0, u.bG)([L.default], () => L.default.getId()),
        m = iN.X6.useSetting(),
        h = iN.hD.useSetting(),
        g = iN.rs.useSetting() && !(0, r2.A)(e.message),
        p = iN.jW.useSetting() && !1 !== e.renderReactions,
        A = iN.kt.useSetting(),
        x = (0, u.bG)([ay.A], () => null == n.guild_id || ay.A.canChatInGuild(n.guild_id), [n]),
        f = (0, u.bG)([l$.A], () => null != n.guild_id && l$.A.isLurking(n.guild_id), [n]),
        I = (0, u.bG)([ss.Ay, O.default], () => {
            let e = O.default.getCurrentUser();
            return (null != n.guild_id && null != e ? ss.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: E, canManageMessages: v } = (0, u.cf)(
            [tt.A],
            () => ({
                canAddNewReactions: x && tt.A.can(er.xBc.ADD_REACTIONS, n),
                canManageMessages: tt.A.can(er.xBc.MANAGE_MESSAGES, n),
            }),
            [x, n],
        ),
        C = (0, lP.ix)(n.guild_id),
        [, _] = (0, lD.c)(n.guild_id),
        j = (0, r$.Id)(n),
        N =
            (d === i.author.id || v) &&
            "1" !== i.author.id &&
            !1 !== l &&
            !(0, c.Lt)(i.flags, er.pr7.EPHEMERAL) &&
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
        b = i.author.id === d,
        T = i.isFirstMessageInForumPost(n),
        S = (0, aP.A)({
            channel: n,
            canChat: x,
            renderReactions: p,
            canAddNewReactions: E,
            isLurking: f,
            communicationDisabled: _,
            isActiveChannelOrUnarchivableThread: j,
            isAutomodQuarantined: C,
        }),
        k = (0, iv.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        R = (0, l2.A)(n?.id),
        M = (0, sx.A)(i),
        P = (0, iu.P)(i),
        D = (0, aM.z)(n),
        U = (0, ak._f)(i.id, i.channel_id),
        G = (0, id._R)(),
        w = (0, iC.U)();
    return (0, s.jsx)(cR, {
        canSuppressEmbeds: N,
        canDeleteAttachments: y,
        ...S,
        disableReactionReads: !!T || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
        hasBailedAst: e.hasBailedAst,
        isLurking: f && x,
        isPendingMember: I && x,
        isCurrentUser: b,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: g,
        gifAutoPlay: A,
        canRenderReferralEmbed: n.isDM(),
        poll: M,
        showListsAndHeaders: k,
        showMaskedLinks: k,
        shouldHideMediaOptions: R,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: U,
        shouldAgeVerify: G,
        hideInviteEmbedBanner: a,
        hideActivityInvite: o,
        restrictedPreview: w,
    });
}
function cM(e) {
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
        c = iN.X6.useSetting(),
        u = iN.hD.useSetting(),
        m = iN.rs.useSetting(),
        h = iN.kt.useSetting(),
        g = (0, iC.U)(),
        p = (0, iv.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, l2.A)(n?.id),
        x = (0, iu.P)(t),
        f = (0, ak._f)(t.id, t.channel_id),
        I = (0, sx.A)(t);
    return (0, s.jsx)(cR, {
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
