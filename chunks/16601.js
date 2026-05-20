n.d(t, { iV: () => cC, OC: () => cv, Ay: () => cI }), n(938796);
var i,
    l,
    s,
    r,
    a = n(627968),
    o = n(64700),
    d = n(503698),
    c = n.n(d),
    u = n(448761),
    m = n(665260),
    h = n(17928),
    g = n(803805),
    p = n(52133),
    A = n(640238),
    x = n(834730),
    f = n(720149),
    E = n(793574),
    C = n(688810),
    I = n(735991);
n(321073), n(134528), n(947204);
var v = n(485845),
    _ = n(379834),
    j = n(836480),
    N = n(825860),
    T = n(950305),
    y = n(795816),
    S = n(574152),
    b = n(522305),
    L = n(361926),
    R = n(832384),
    k = n(113854),
    M = n(207371),
    P = n(205184),
    D = n(773669),
    w = n(495544),
    O = n(734057),
    U = n(994500),
    G = n(967198),
    V = n(287809),
    B = n(486020),
    H = n(204776),
    F = n(725606);
n(323874), n(14289), n(35956);
var Y = n(299619),
    z = n(172218),
    W = n(939249),
    K = n(408278),
    J = n(821609),
    q = n(990078),
    X = n(775602),
    Z = n(140651),
    Q = n(354287),
    $ = n(768349),
    ee = n(838541),
    et = n(351280),
    en = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function ei(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, a.jsx)(W.D, { onClick: t, className: c()({ [et.or]: null != t }, i), children: n })
        : (0, a.jsx)("div", { className: i, children: n });
}
function el(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: l,
        info: s,
        staticBannerSrc: r,
        videoBannerSrc: d,
        bannerAspectRatio: u = 0,
        iconSrc: m,
        actions: g = [],
        primaryActionFirst: p = !1,
        trackingConfig: A,
        onClickContent: f,
        onClickBanner: E,
    } = e;
    (t = A),
        (A = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? $.J.UNKNOWN,
            referrerId: t?.referrerId ?? w.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: C, secondaryColor: I } = (0, Z.A)(m ?? r),
        v = `linear-gradient(45deg, ${C}, ${I})`,
        _ = (0, h.bG)([X.A], () => X.A.useReducedMotion),
        j = o.useRef(!1),
        N = (0, z.K)(
            (e) => {
                !1 === j.current &&
                    e &&
                    (A?.onView?.(),
                    (0, Q.wV)({
                        appId: A.id,
                        linkType: A.linkType,
                        referrerId: A.referrerId,
                        customId: A.activityCustomId,
                        guildId: A.guildId,
                        channelId: A.channelId,
                        messageId: A.messageId,
                    }),
                    (j.current = !0));
            },
            void 0,
        ),
        T = null != r,
        y = null != d && !1 === _,
        S = T || y,
        b = 0 === u ? et.pv : et.$g,
        L = o.useRef(null),
        R = o.useCallback(() => {
            let e = L.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        k = o.useMemo(() => !!y && new URL(d).pathname.endsWith(".gif"), [y, d]),
        M = o.useMemo(() => {
            if (null != f)
                return (e) => {
                    f(e),
                        (0, Q.gx)({
                            applicationId: A.id,
                            linkType: A.linkType,
                            area: Q.kY.CONTENT,
                            referrerId: A.referrerId,
                            customId: A.activityCustomId,
                            isDeadEnd: A.isDeadEnd,
                        });
                };
        }, [f, A]),
        P = o.useMemo(() => {
            if (null != E)
                return (e) => {
                    E(e),
                        (0, Q.gx)({
                            applicationId: A.id,
                            linkType: A.linkType,
                            area: Q.kY.BANNER,
                            referrerId: A.referrerId,
                            customId: A.activityCustomId,
                            isDeadEnd: A.isDeadEnd,
                        });
                };
        }, [E, A]);
    return (0, a.jsxs)("div", {
        ref: N,
        className: et.E6,
        children: [
            S &&
                (0, a.jsxs)(ei, {
                    onClick: P,
                    className: c()(et.cy, b, { [et.wk]: y }),
                    children: [
                        y &&
                            (k
                                ? (0, a.jsx)("div", { className: et.O9, style: { backgroundImage: `url(${d})` } })
                                : (0, a.jsx)(Y.A, {
                                      ref: L,
                                      src: d,
                                      mediaLayoutType: ee.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: et.O9,
                                  })),
                        T &&
                            (0, a.jsx)("div", {
                                className: et.LR,
                                style: { backgroundImage: `url(${r})` },
                                onTransitionEnd: R,
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                style: { background: v },
                children: [
                    (0, a.jsxs)("div", {
                        className: et.hQ,
                        children: [
                            null != i &&
                                (0, a.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: et.wx,
                                    children: i,
                                }),
                            (0, a.jsxs)(ei, {
                                onClick: M,
                                className: c()(et.FG, { [et.ry]: null != M }),
                                children: [
                                    null != m &&
                                        (0, a.jsx)("div", {
                                            className: et._8,
                                            style: { backgroundImage: `url(${m})` },
                                        }),
                                    (0, a.jsxs)("div", {
                                        className: et.Qs,
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: et.eu,
                                                children: n,
                                            }),
                                            (0, a.jsx)("div", { className: et.rj, children: s }),
                                        ],
                                    }),
                                ],
                            }),
                            g.length > 0 &&
                                (0, a.jsx)("div", {
                                    className: c()(et.AC, p ? et.ad : null),
                                    children: g.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: l,
                                                disabled: s,
                                                disabledReason: r,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: u,
                                                buttonRef: m,
                                            } = e,
                                            h = 0 === t;
                                        return u
                                            ? (0, a.jsx)(
                                                  q.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: m,
                                                      children: (0, a.jsx)(K.K, {
                                                          variant: h ? "overlay-primary" : "overlay-secondary",
                                                          disabled: s || null != r,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: m,
                                                          onClick: (e) => {
                                                              l(e),
                                                                  (0, Q.gx)({
                                                                      applicationId: A.id,
                                                                      linkType: A.linkType,
                                                                      area: d,
                                                                      referrerId: A.referrerId,
                                                                      customId: A.activityCustomId,
                                                                      isDeadEnd: c,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, a.jsxs)(
                                                  "div",
                                                  {
                                                      className: et.uc,
                                                      children: [
                                                          (0, a.jsx)(J.$, {
                                                              variant: h ? "overlay-primary" : "overlay-secondary",
                                                              disabled: s || null != r,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: m,
                                                              onClick: (e) => {
                                                                  l(e),
                                                                      (0, Q.gx)({
                                                                          applicationId: A.id,
                                                                          linkType: A.linkType,
                                                                          area: d,
                                                                          referrerId: A.referrerId,
                                                                          customId: A.activityCustomId,
                                                                          isDeadEnd: c,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != r &&
                                                              (0, a.jsx)(x.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: et.H$,
                                                                  children: r,
                                                              }),
                                                      ],
                                                  },
                                                  n,
                                              );
                                    }),
                                }),
                        ],
                    }),
                    null != l && l,
                ],
            }),
        ],
    });
}
var es = n(500060),
    er = n(432017),
    ea = n(687966),
    eo = n(104171),
    ed = n(652215),
    ec = n(375708),
    eu = n(695320);
function em(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, a.jsxs)("div", {
        className: eu.i,
        children: [
            (0, a.jsx)(eo.Ay, { guildId: n, users: t, max: 6, size: eo.DN.SIZE_16 }),
            (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var eh = n(993748),
    eg = n(212534),
    ep = n(395671);
function eA(e) {
    let { id: t, isDiscoverable: n } = e,
        [i, l, s] = (0, h.yK)(
            [eg.A],
            () => [eg.A.getApplication(t), eg.A.isInvalidApplication(t), eg.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        o.useEffect(() => {
            !1 === n || l || s === eg.e.FETCHED || s === eg.e.FETCHING || (0, eh.eP)(t);
        }, [t, s, n, l]),
        o.useMemo(() => (null != i ? e.mergeFromApplicationUpdate(ep.Ay.createFromServer(i)) : e), [e, i])
    );
}
var ex = n(435582),
    ef = n(283488);
function eE(e) {
    let { bot: t } = e,
        n = (0, I.Ag)(e),
        { url: i } = (0, ef.A)({ applicationId: n ? e.id : void 0, size: 600, names: ["embedded_cover"] });
    return o.useMemo(() => {
        let l,
            s,
            r = en.BOT;
        if (null != t) {
            let { banner: e } = t;
            (l = (0, B.z)({ id: t.id, banner: e, size: 512, canAnimate: !1 })),
                (0, B.VI)(e) && null == i && (s = (0, B.z)({ id: t.id, banner: e, size: 512, canAnimate: !0 }));
        }
        if (n) {
            let t = (0, I.Cx)(e);
            null != i && ((l = i), (r = en.ACTIVITY));
            let n = t?.activity_preview_video_asset_id;
            null != n && ((s = (0, ex.A)(e.id, n)), (r = en.ACTIVITY));
        }
        return { staticBannerSrc: l, videoBannerSrc: s, bannerAspectRatio: r };
    }, [i, t, n, e]);
}
var eC = n(482030),
    eI = n(837057),
    ev = n(310419),
    e_ = n(576705),
    ej = n(309010),
    eN = n(692848),
    eT = n(488995);
function ey(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: l } = e,
        s = (0, H.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: l }),
        r = (0, h.bG)([G.A], () => G.A.getGuildId() ?? void 0),
        a = (0, h.bG)([O.A, e_.A, ej.A], () => {
            let e = O.A.getChannel(ej.A.getChannelId());
            return null != e && (e.isPrivate() || e_.A.can(ed.xBc.SEND_MESSAGES, e));
        }, []),
        o = (0, I.V1)(e, r) && a;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: l,
        canViewApp: t || o,
        canOpenAppLauncher: o,
        isInstallable: s,
        selectedGuildId: r,
    };
}
function eS(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: i,
        isInstallable: l,
        customInstallUrl: s,
        installParams: r,
        integrationTypesConfig: a,
        selectedGuildId: d,
    } = ey(e);
    return o.useMemo(
        () =>
            n
                ? () => {
                      (t?.(), i)
                          ? (0, eC.hg)(e.id)
                          : (0, eI.transitionToGlobalDiscovery)({
                                tab: eT.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: ev.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : l
                  ? () => {
                        t?.(),
                            (0, eN.o)({
                                applicationId: e.id,
                                customInstallUrl: s,
                                installParams: r,
                                integrationTypesConfig: a,
                                guildId: d,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, i, n, s, r, a, l, t, d],
    );
}
var eb = n(734093);
function eL(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: s, onView: r } = e,
        { name: d, bot: c } = (t = eA(t)),
        u = c?.id,
        m = (0, I.Ag)(t),
        g = B.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = eE(t),
        f = (0, h.bG)([w.default], () => l ?? w.default.getId(), [l]),
        { analyticsLocations: v } = (0, C.Ay)(E.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: T } = (0, F.w)(t.id),
        R = (0, S.A)(),
        P = (0, L.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        D = null != u && m && P,
        U = T && m,
        G = (0, M.x)(t),
        V = eS(t),
        H = (function (e) {
            let { canViewApp: t, isInstallable: n } = ey(e),
                i = eS(e);
            return o.useMemo(
                () =>
                    t && null != i
                        ? {
                              label: ec.intl.string(ec.t.hvVgAZ),
                              trackingArea: Q.kY.VIEW,
                              onClick() {
                                  i();
                              },
                          }
                        : n && null != i
                          ? {
                                label: ec.intl.string(ec.t.NgXl3C),
                                trackingArea: Q.kY.ADD_APP,
                                onClick() {
                                    i();
                                },
                            }
                          : void 0,
                [t, n, i],
            );
        })(t),
        Y = o.useMemo(() => {
            let e = [];
            return (
                m
                    ? G
                        ? e.push({
                              label: ec.intl.string(ec.t.RscU7I),
                              trackingArea: Q.kY.PLAY,
                              onClick() {
                                  k.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (U &&
                              e.push({
                                  label:
                                      null == j
                                          ? ec.intl.string(ec.t.RscU7I)
                                          : N
                                            ? ec.intl.string(ec.t.DPfdsq)
                                            : ec.intl.string(ec.t.sqe0hj),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, y.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          embeddedActivitiesManager: R,
                                          customId: i,
                                          referrerId: f,
                                          analyticsLocations: v,
                                      });
                                  },
                                  disabled: N,
                              }),
                          !U &&
                              D &&
                              e.push({
                                  label: ec.intl.string(ec.t.JeK1Wg),
                                  trackingArea: Q.kY.PLAY,
                                  onClick() {
                                      (0, b.Q)({
                                          appId: t.id,
                                          botId: u,
                                          analyticsLocations: v,
                                          customId: i,
                                          referrerId: f,
                                      });
                                  },
                              }))
                    : null != H && e.push(H),
                e
            );
        }, [m, H, G, t.id, U, D, j, N, _, R, i, f, v, u]),
        z = m ? (0, a.jsx)(ek, { app: t }) : (0, a.jsx)(eR, { app: t });
    return (0, a.jsx)(el, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: V,
        bannerAspectRatio: x,
        iconSrc: g,
        info: z,
        actions: Y,
        onClickContent: V,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: f,
            activityCustomId: i,
            onView: r,
            guildId: O.A.getChannel(s.channel_id)?.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eR(e) {
    let { app: t } = e,
        n =
            (0, H.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, h.bG)([D.default], () => D.default.locale, []),
        l = o.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : ec.intl.format(ec.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        s = t.categories?.at(0)?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != s && (0, a.jsx)(x.E, { variant: "text-xs/medium", className: eb.h_, color: "none", children: s }),
            null != l &&
                (0, a.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: eb.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, a.jsx)(j.Q, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function ek(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, h.bG)([G.A], () => G.A.getGuildId() ?? void 0, []),
        s = (0, P.s)(t.id),
        r = (0, h.yK)([V.default, U.A], () => {
            let e = [];
            for (let [t, n] of s.entries()) {
                if (t >= 5) break;
                let i = V.default.getUser(n.author_id),
                    l = U.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [s]),
        d = o.useMemo(() => {
            if (r.length > 0)
                return (0, a.jsx)(em, {
                    activityUsers: r,
                    guildId: l,
                    activityText: ec.intl.formatToPlainString(ec.t["IJa+46"], { count: r.length }),
                });
            if (s.some((e) => (0, R.CZ)(e) === _.m.GLOBAL))
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(N.Y, { size: "xxs", color: "currentColor" }), ec.intl.string(ec.t.TsWCdW)],
                });
            let e = i > 0 ? ec.intl.format(ec.t.z8EAJW, { count: i }) : ec.intl.string(ec.t.RjceQU);
            return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(T.n, { size: "xxs", color: "currentColor" }), e] });
        }, [s, r, l, i]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n.length > 0 &&
                (0, a.jsx)(x.E, {
                    variant: "text-xs/medium",
                    className: eb.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, a.jsx)("span", { className: eb.Tc, children: e }, t)),
                }),
            (0, a.jsx)(x.E, { variant: "text-xs/normal", className: eb.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var eM = n(429913),
    eP = n(582388),
    eD = n(257269);
let ew = (0, h.UT)(eP.A, {
    getQueryId: ed.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : eP.A.getOne(e, t)),
    load: (e, t) => (0, eD.Py)(e, t),
});
var eO = n(933958),
    eU = n(782091);
function eG(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: s } = e,
        r = t?.bot?.id,
        o = (0, L.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, I.Ag)(t),
        c = null != r && d && o,
        { analyticsLocations: u } = (0, C.Ay)(E.A.ACTIVITY_CUSTOM_LINK),
        m = (0, h.bG)([ej.A], () => ej.A.getChannelId()),
        g = (0, eU.et)(m),
        p = (0, h.bG)([eO.Ay], () => {
            if (null == m) return;
            let e = eO.Ay.getEmbeddedActivitiesForChannel(m).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, h.bG)([eO.Ay], () => eO.Ay.getCurrentEmbeddedActivity()),
        x = (0, S.A)(),
        f = g === eU.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        _ = null != n ? n : i.customId,
        j = [];
    (0, M.x)(t)
        ? j.push({
              label: ec.intl.string(ec.t.RscU7I),
              trackingArea: Q.kY.PLAY,
              onClick() {
                  k.A.launchFrame({ applicationId: t.id });
              },
          })
        : (f &&
              j.push({
                  label:
                      null == p
                          ? ec.intl.string(ec.t.RscU7I)
                          : v
                            ? ec.intl.string(ec.t.DPfdsq)
                            : ec.intl.string(ec.t.sqe0hj),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, y.su)({
                          channelId: m ?? void 0,
                          applicationId: t.id,
                          isStart: null == p,
                          embeddedActivitiesManager: x,
                          customId: _,
                          referrerId: l,
                          analyticsLocations: u,
                      });
                  },
                  disabled: v,
              }),
          c &&
              !f &&
              j.push({
                  label: ec.intl.string(ec.t.JeK1Wg),
                  trackingArea: Q.kY.PLAY,
                  onClick() {
                      (0, b.Q)({ appId: t.id, botId: r, analyticsLocations: u, customId: _, referrerId: l });
                  },
              }));
    let N = eS(t);
    return (0, a.jsx)(el, {
        actions: j,
        onClickContent: N,
        header: t.name,
        iconSrc: B.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, a.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: $.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: _,
            guildId: O.A.getChannel(s.channel_id)?.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eV(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: l, message: s } = e,
        { analyticsLocations: r } = (0, C.Ay)(E.A.ACTIVITY_BOOKMARK),
        [o] = (0, eM.A)([t]),
        d = null != o && (0, I.Ag)(o),
        { data: c, error: u } = ew(o?.id, l);
    return null == o || !1 === d
        ? null
        : null != l && null == u && null != c
          ? (0, a.jsx)(C.f5, {
                value: r,
                children: (0, a.jsx)(eG, { application: o, customId: n, customLink: c, referrerId: i, message: s }),
            })
          : (0, a.jsx)(C.f5, {
                value: r,
                children: (0, a.jsx)(eL, {
                    app: o,
                    linkType: $.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: i,
                    message: s,
                }),
            });
}
var eB = n(139716),
    eH = n(847599),
    eF = n(36149);
function eY(e) {
    let { channelId: t } = e,
        n = (0, eF.b8)(),
        i = (0, eF.i2)(),
        l = ec.intl.string(ec.t["9KiIz6"]),
        s = ec.intl.string(ec.t["/nicWo"]),
        r = o.useCallback(() => {
            eB.A.showAgeVerificationGetStartedModal({ entryPoint: eH.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eH.UT)(eH.Im.RETRY, t);
        }, [t]);
    return (0, a.jsx)(J.$, { variant: "primary", text: n ? l : s, onClick: r, disabled: !i });
}
var ez = n(121401),
    eW = n(284009),
    eK = n.n(eW),
    eJ = n(192308),
    eq = n(664121),
    eX = n(34188),
    eZ = n(173936),
    eQ = n(691540),
    e$ = n(857250),
    e0 = n(97483),
    e1 = n(996759),
    e2 = n(800342),
    e3 = n(627363),
    e4 = n(587895),
    e6 = n(163437),
    e5 = n(185438),
    e7 = n(97352),
    e9 = n(652676),
    e8 = n(67480),
    te = n(328968),
    tt = n(174459),
    tn = n(957565),
    ti = n(943775),
    tl = n(997997),
    ts = n(658575),
    tr = n(376374),
    ta = n(435220),
    to = n(352883);
let td = (0, h.UT)([e8.A, te.A, e7.A], {
        getQueryId: ed.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = e8.A.get(e),
                n = te.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = e7.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            eK()(null != e, "skuId is null"), await (0, e2.QB)(e);
        },
    }),
    tc = (0, h.UT)([e8.A], {
        getQueryId: ed.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (e8.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            eK()(null != e && null != t, "appId is null"), await (0, e2.JI)(t);
        },
    });
function tu(e) {
    let { appId: t, message: i } = e,
        l = (0, ts.G)(t),
        { data: s } = (0, e3.YY)(t),
        [r, d, c, u] = (0, h.yK)([e4.A, e9.A, O.A], () => {
            let e = e4.A.getApplication(t),
                n = null != e ? (0, ti.A)(e, 45) : void 0,
                l = O.A.getBasicChannel(i.channel_id)?.guild_id;
            return [e9.A.getStoreLayout(t), e9.A.getFetchStatus(t), l, n];
        }, [t, i.channel_id]);
    o.useEffect(() => {
        d === e9.N.NONE && (0, e1.V)(t);
    }, [t, d]);
    let m = r.subscriptions.length,
        g = r.otps.length,
        p = o.useMemo(
            () =>
                m > 0 && g > 0
                    ? ec.intl.formatToPlainString(ec.t["jA648+"], { subCount: m, itemCount: g })
                    : m > 0
                      ? ec.intl.formatToPlainString(ec.t.GSfibA, { count: m })
                      : g > 0
                        ? ec.intl.formatToPlainString(ec.t.j7Go5A, { count: g })
                        : ec.intl.string(ec.t.rMA98g),
            [g, m],
        );
    if (!l || null == s) return null;
    let A = () => {
        (0, eJ.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("84541"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) =>
                (0, a.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: c });
        });
    };
    return (0, a.jsx)(th, {
        appName: s.name,
        title: ec.intl.formatToPlainString(ec.t.XDRjs5, { appName: s.name }),
        description: p,
        link: `${location.protocol}//${location.host}${ed.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(s.id, ta.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, tl.K)(t, tl.C.STORE_EMBED);
        },
        iconSrc: u,
        onIconClick: () => {
            A(),
                tt.default.track(ed.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        children: (0, a.jsx)("div", {
            className: to.mZ,
            children: (0, a.jsx)(J.$, {
                onClick: () => {
                    A(),
                        tt.default.track(ed.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: ec.intl.string(ec.t.kRvlKJ),
            }),
        }),
    });
}
function tm(e) {
    let { appId: t, skuId: i, message: l } = e,
        {
            parentSku: s,
            sku: r,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = td(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = tc(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t),
        { data: u } = (0, e3.YY)(r?.applicationId),
        m = (0, h.bG)([O.A], () => O.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        g = o.useMemo(() => (null != u ? (0, ti.A)(u, 45) : void 0), [u]),
        p = (0, ts.G)(u?.id ?? ""),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, e5.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == u || null == r) return null;
    let f = r.type === ed.Puh.SUBSCRIPTION,
        E = !!f && (0, e6.bg)(r.flags),
        C = () => {
            (0, eJ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("84541"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                    n.bind(n, 719847),
                );
                return (t) =>
                    (0, a.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: u.id, guildId: m });
            });
        },
        I = () => {
            (0, eJ.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), C();
                    };
                    return null != e && null != s
                        ? (0, a.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: u.id,
                              skuId: r.id,
                              guildId: m,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, a.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: u.id,
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
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(T.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          ec.intl.string(ec.t.wnifjC),
                      ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(eq.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          ec.intl.string(ec.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === v && (v = void 0);
    let _ = () => {
        tt.default.track(ed.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: u.id,
            sku_id: r.id,
            area: "purchase_button",
        });
    };
    return (0, a.jsx)(th, {
        appName: u.name,
        title: r.name,
        description: v,
        link: `${location.protocol}//${location.host}${ed.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, ta.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, tl.K)(u.id, tl.C.SKU_EMBED, i);
        },
        iconSrc: g,
        onIconClick: () => {
            C(),
                tt.default.track(ed.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: u.id,
                    sku_id: r.id,
                    area: "app_icon",
                });
        },
        children: (0, a.jsxs)("div", {
            className: to.w,
            children: [
                (0, a.jsx)(J.$, {
                    variant: "secondary",
                    onClick: () => {
                        I(),
                            tt.default.track(ed.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: u.id,
                                sku_id: r.id,
                                area: "view_details",
                            });
                    },
                    text: ec.intl.string(ec.t.DXYfjO),
                }),
                f
                    ? null != d
                        ? (0, a.jsx)(tr.rc, {
                              onClick: A,
                              appId: u.id,
                              subscriptionType: E ? "user" : "guild",
                              skuId: r.id,
                              icon: eX.U,
                              onHasClicked: _,
                              subscriptionPlan: d,
                              state: x,
                          })
                        : (0, a.jsx)(J.$, { variant: "primary", text: ec.intl.string(ec.t.uuzaAK), onClick: I })
                    : (0, a.jsx)(tr.$P, { appId: u.id, sku: r, icon: eX.U, onHasClicked: _ }),
            ],
        }),
    });
}
function th(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: s, onIconClick: r, onLinkCopy: o, children: d } = e;
    return (0, a.jsxs)("div", {
        className: to.iE,
        children: [
            (0, a.jsxs)("div", {
                className: to.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: to.qd,
                        children: [
                            (0, a.jsx)(eX.U, { size: "xxs" }),
                            (0, a.jsx)(x.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    tn.p5 &&
                        (0, a.jsx)(K.K, {
                            "aria-label": ec.intl.string(ec.t.WqhZss),
                            icon: () => (0, a.jsx)(eZ.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, tn.C)(l, () => {
                                    (0, eQ.P0)((0, e$.o)(ec.intl.string(ec.t["L/PwZf"]), e0.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: to.Qs,
                children: [
                    (0, a.jsxs)("div", {
                        className: to.oB,
                        children: [
                            null != s &&
                                (0, a.jsx)(W.D, {
                                    onClick: r,
                                    children: (0, a.jsx)("img", { src: s.href, alt: "", className: to.Z2 }),
                                }),
                            (0, a.jsxs)("div", {
                                className: to.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, a.jsx)(x.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, a.jsx)(x.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: to.h_,
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
var tg = n(909338),
    tp = n(562708),
    tA = n(702841),
    tx = n(139286);
function tf(e) {
    let { applicationId: t, message: n } = e,
        [i, l, s] = (0, tA.yK)(
            [e4.A],
            () => [e4.A.getApplication(t), e4.A.isFetchingApplication(t), e4.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (o.useEffect(() => {
        null != i || l || s || e3.Ay.fetchApplication(t);
    }, [i, l, s, t]),
    null != i &&
        (0, H.Ie)({
            customInstallUrl: i.customInstallUrl,
            installParams: i.installParams,
            integrationTypesConfig: i.integrationTypesConfig,
        }))
        ? (0, a.jsx)(tE, { application: i, message: n })
        : null;
}
function tE(e) {
    let { application: t, message: n } = e,
        i = o.useCallback(() => {
            (0, tx.x)({
                type: tp.ImpressionTypes.VIEW,
                name: tp.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: l } = (0, C.Ay)(E.A.APP_OAUTH2_LINK_EMBED);
    return (0, a.jsx)(C.f5, {
        value: l,
        children: (0, a.jsx)(eL, { app: t, linkType: $.J.OAUTH, onView: i, message: n }),
    });
}
var tC = n(778492),
    tI = n(534514),
    tv = n(285796),
    t_ = n(857182),
    tj = n(506774),
    tN = n(228366),
    tT = n(812930);
let ty = "ChannelFollowingBumpChannels",
    tS = new Set(),
    tb = new Set();
class tL extends h.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(w.default, O.A, e_.A, V.default), (tS = new Set(tj.w.get(ty)));
    }
    shouldShowBump(e) {
        return tb.has(e);
    }
}
let tR = new tL(tN.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tS.has(t)) return !1;
        let l = O.A.getChannel(t),
            s = V.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === ed.rbe.GUILD_ANNOUNCEMENT &&
                (0, tT.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? e_.A.can(ed.xBc.SEND_MESSAGES, l)
                    : e_.A.can(ed.xBc.MANAGE_MESSAGES, l)) &&
                !m.Lt(Number(n.flags), ed.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tb.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tb.has(t.id) && m.Lt(Number(t.flags), ed.pr7.CROSSPOSTED) && tb.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tb.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tb.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        tS.add(t), tj.w.set(ty, tS), tb.clear();
    },
});
var tk = n(419056),
    tM = n(676544);
let tP = (e) => {
    let { channelId: t, messageId: n } = e,
        i = (0, h.bG)([tR], () => tR.shouldShowBump(n), [n]),
        l = o.useCallback(() => {
            t_.A.dismissPublishBump(n), (0, tk.A)(t, n);
        }, [t, n]),
        s = o.useCallback(() => {
            t_.A.dismissPublishBump(n);
        }, [n]),
        r = o.useCallback(() => {
            t_.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, a.jsxs)("div", {
              className: tM.kL,
              children: [
                  (0, a.jsxs)("div", {
                      className: tM.mp,
                      children: [
                          (0, a.jsx)(tC.k, { size: "xs", color: "currentColor", className: tM.Kk }),
                          (0, a.jsx)(tI.D, {
                              variant: "heading-sm/normal",
                              className: tM.dS,
                              children: ec.intl.string(ec.t.hasZoU),
                          }),
                          (0, a.jsx)(x.E, {
                              color: "text-brand",
                              className: tM.mk,
                              variant: "text-sm/normal",
                              children: (0, a.jsx)(W.D, { onClick: l, children: ec.intl.string(ec.t.MFGE51) }),
                          }),
                          (0, a.jsx)(W.D, {
                              onClick: s,
                              children: (0, a.jsx)(tv.a, { size: "xs", color: "currentColor", className: tM.ut }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(x.E, {
                      color: "text-muted",
                      className: tM.qx,
                      variant: "text-sm/normal",
                      children: (0, a.jsx)(W.D, { onClick: r, children: ec.intl.string(ec.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tD = n(175671),
    tw = n(735438),
    tO = n.n(tw),
    tU = n(239947),
    tG = n(403581),
    tV = n(97808),
    tB = n(778712),
    tH = n(520117),
    tF = n(793943),
    tY = n(763754),
    tz = n(973654),
    tW = n(467135),
    tK = n(644235),
    tJ = n(153469),
    tq = n(693227),
    tX = n(312633);
let tZ = (e) => e.map((e) => `#${e}`),
    tQ = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, tW.ko)();
        return void 0 === n
            ? null
            : (0, a.jsxs)("div", {
                  className: tX.kL,
                  children: [
                      (0, a.jsx)(t$, { message: t }),
                      (0, a.jsx)(J.$, {
                          text: ec.intl.string(ec.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              tt.default.track(ed.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, tF.nf)(tF.HP.CUSTOM_THEME, { from: tF.xv.SHARE_MESSAGE }),
                                  i({
                                      colors: tZ(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, tz.GQ)((0, tK.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    t$ = (e) => {
        let t,
            n,
            i,
            { message: l } = e,
            { sharedClientTheme: s } = l,
            r = (0, tY.Ay)(l),
            d = o.useMemo(
                () =>
                    (0, tw.once)(() => {
                        (0, tx.x)({ type: tp.ImpressionTypes.VIEW, name: tU.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            c = (0, tH.A)({
                onVisible: () => {
                    d();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            u = o.useMemo(() => (void 0 === s ? "" : (0, tJ.V9)(tZ(s.colors), s.gradient_angle ?? 0)), [s]);
        return void 0 === s
            ? null
            : (0, a.jsxs)("div", {
                  className: tX.pS,
                  ref: c,
                  children: [
                      (0, a.jsx)("div", { className: tX.sl, style: { background: `${u}` } }),
                      (0, a.jsxs)("div", {
                          className: tX.Ix,
                          children: [
                              (0, a.jsxs)(tI.D, {
                                  variant: "heading-md/semibold",
                                  className: tX.qP,
                                  children: [ec.intl.string(tq.default.KSBBpC), " ", (0, a.jsx)(tG.t, {})],
                              }),
                              (0, a.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: tX.Tb,
                                  children:
                                      ((t = `${ec.intl.format(tq.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = l.author),
                                      (i = r.nick),
                                      t
                                          .split(" ")
                                          .map((e, t) =>
                                              "__USERNAME__" !== e
                                                  ? (0, a.jsxs)(o.Fragment, { children: [e, " "] }, t)
                                                  : (0, a.jsxs)(
                                                        "span",
                                                        {
                                                            className: tX.H,
                                                            children: [
                                                                (0, a.jsx)(tV.eu, {
                                                                    "aria-label": i,
                                                                    src: n.getAvatarURL(null, 20),
                                                                    size: tB._3.SIZE_20,
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
var t0 = n(167189),
    t1 = n(661531),
    t2 = n(289873),
    t3 = n(696986),
    t4 = n(95561),
    t6 = n(548118),
    t5 = n(250627),
    t7 = n(741231),
    t9 = n(749314),
    t8 = n(71393),
    ne = n(722888),
    nt = n(43136),
    nn = n(575926),
    ni = n(736132);
function nl(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([t8.A], () => t8.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, ne.G)(t),
        { listingsLoaded: s } = (0, t5.bb)(t),
        r = (0, t5.fZ)(t, { publishedOnly: !0 }),
        d = o.useCallback(async () => {
            tt.default.track(ed.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, t4.H$)(t) }),
                await (0, t7.A)(ed.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, tx.A)(
        { type: tp.ImpressionTypes.VIEW, name: tp.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let u = r.length > 0 ? new Date(Math.min(...r.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !s
        ? (0, a.jsx)("div", { className: c()(ni.lm, ni.dc), children: (0, a.jsx)(t2.y, {}) })
        : null == n || null == l
          ? null
          : (0, a.jsxs)("div", {
                className: ni.lm,
                children: [
                    (0, a.jsx)(nt.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, a.jsx)(t3.h, { size: 16 }),
                    (0, a.jsxs)("div", {
                        className: ni.qs,
                        children: [
                            (0, a.jsx)(nn.h, {
                                height: "16px",
                                width: "16px",
                                color: t1.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, a.jsx)(tI.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: ni.Nl,
                                children: ec.intl.string(ec.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, a.jsx)(t3.h, { size: 16 }),
                    (0, a.jsx)(tI.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ec.intl.format(ec.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, a.jsx)(t3.h, { size: 4 }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, a.jsx)(t3.h, { size: 16 }),
                    (0, a.jsx)(t9.A, {}),
                    (0, a.jsx)(t3.h, { size: 16 }),
                    (0, a.jsxs)("div", {
                        className: ni.kS,
                        children: [
                            (0, a.jsx)(t6.Ay, { guild: n }),
                            (0, a.jsxs)("ul", {
                                className: ni.q6,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: ec.intl.format(ec.t.tKZNlb, { listingCount: r.length }),
                                        }),
                                    }),
                                    null != u &&
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: ec.intl.format(ec.t["kXr8+b"], {
                                                    createdYear: u.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: ni.$h,
                                children: (0, a.jsx)(J.$, {
                                    onClick: d,
                                    icon: nn.A,
                                    text: ec.intl.string(ec.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
var ns = n(390248),
    nr = n(282108),
    na = n(33358),
    no = n(885574),
    nd = n(987773);
function nc(e) {
    let { message: t } = e;
    return (0, a.jsxs)(W.D, {
        onClick: () => {
            (0, eJ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, a.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: nd.L,
        children: [
            (0, a.jsx)(no.m, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(x.E, { variant: "text-xs/normal", className: nd.m, children: ec.intl.string(ec.t["2aXnfa"]) }),
        ],
    });
}
var nu = n(974875),
    nm = n(900019);
function nh(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, h.bG)([nm.A], () => nm.A.canSubmitFpReport(t)),
        l = o.useCallback(() => {
            (0, nu.Q)(n, t);
        }, [n, t]);
    return (0, a.jsx)(J.$, { variant: "secondary", text: ec.intl.string(ec.t["4q1Elf"]), onClick: l, disabled: !i });
}
var ng = n(320448),
    np = n(713654),
    nA = n(958340),
    nx = n(384231),
    nf = n(291812),
    nE = n(375199),
    nC = n(699352),
    nI = n(8455),
    nv = n(885386),
    n_ = n(540999),
    nj = n(47167),
    nN = n(58703);
function nT(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: B.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: ec.intl.formatToPlainString(ec.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
n(427930);
class ny {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e_.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t8.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nA.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, nN.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nT(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, nj.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: ec.intl.formatToPlainString(ec.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nT(h, d) };
    }
}
var nS = n(66834),
    nb = n(449054);
async function nL(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = O.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == t8.A.getGuild(t))
        try {
            await (0, nb.Z2)(t, { object: ed.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, nS.k)(t),
                (l = O.A.getChannel(n));
        } catch {}
    tt.default.track(ed.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: O.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, t7.A)(ed.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var nR = n(387408),
    nk = n(427209),
    nM = n(249847);
function nP() {
    return (0, a.jsxs)("div", {
        className: nM.N1,
        children: [
            (0, a.jsx)(nk.A, { size: "xs", className: nM.nr, color: t1.A.colors.TEXT_MUTED }),
            (0, a.jsx)(x.E, {
                className: nM.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: ec.intl.string(ec.t.ToyvLk),
            }),
        ],
    });
}
function nD(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = o.useMemo(() => new ny(t, n, i), [t, n, i]),
        s = (0, h.bG)(
            [O.A, V.default, U.A, e_.A, t8.A, nA.A],
            () => l.getForwardInfo(O.A, V.default, U.A, e_.A, t8.A, nA.A).footerInfo,
            [l],
            p.A,
        ),
        r = (0, h.bG)([O.A], () => O.A.getChannel(t.messageReference?.channel_id)),
        d = o.useCallback(() => {
            nL(t);
        }, [t]);
    return null == s
        ? null
        : (0, a.jsxs)(W.D, {
              className: nM.xQ,
              onClick: d,
              "aria-label": s.accessibilityLabel,
              children: [
                  null != s.originIconUrl
                      ? (0, a.jsx)("img", { className: nM.yl, src: s.originIconUrl, alt: "" })
                      : null,
                  null == s.originIconUrl && r?.isThread() ? (0, a.jsx)(nw, { channel: r }) : null,
                  (0, a.jsx)(x.E, {
                      className: nM.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${s.originLabel}  \u{2022}  ${s.timestampLabel}`,
                  }),
                  (0, a.jsx)(ng._, { size: "xxs", color: t1.A.colors.TEXT_MUTED }),
              ],
          });
}
function nw(e) {
    let { channel: t } = e,
        n = (0, nI.Vp)({ location: "ForwardFooter" }),
        i = o.useMemo(() => (0, np.gU)(t), [t]);
    return n.enabled && null != i ? (0, a.jsx)(i, { className: nM.yl, size: "xs", color: "currentColor" }) : null;
}
function nO(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = o.useMemo(() => (0, nR.A)(t, n), [t, n]),
        s = nv.hD.useSetting(),
        r = nv.rs.useSetting(),
        d = (0, h.bG)([n_.A], () => n_.A.isDeveloper),
        c = (0, nx.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        {
            content: u,
            hasSpoilerEmbeds: m,
            hasBailedAst: g,
        } = (0, nE.A)(l, {
            hideSimpleEmbedContent: s && r,
            formatInline: !1,
            allowList: c,
            allowHeading: c,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        p = (0, h.bG)([O.A], () => O.A.getChannel(t.channel_id)),
        A = nv.hH.useSetting();
    return null == p
        ? null
        : (0, a.jsxs)(
              "div",
              {
                  className: nM.kL,
                  children: [
                      (0, a.jsx)("div", { className: nM.hD }),
                      (0, a.jsxs)("div", {
                          className: nM.Qs,
                          children: [
                              (0, a.jsx)(nP, {}),
                              (0, a.jsx)(nf.Ay, { message: l, content: u, compact: A }),
                              (0, nC.A)({
                                  channelMessageProps: { message: l, channel: p, compact: A },
                                  hasSpoilerEmbeds: m,
                                  hasBailedAst: g,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, a.jsx)(nD, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function nU(e) {
    let { message: t } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, a.jsx)(nO, { message: t, snapshot: e, index: n }, n)),
    });
}
var nG = n(643612),
    nV = n(607399),
    nB = n(529200),
    nH = n(64493);
function nF(e) {
    let { code: t, message: n } = e,
        [i, l, s] = (0, tA.yK)(
            [eg.A],
            () => [eg.A.getApplication(t), eg.A.isInvalidApplication(t), eg.A.getApplicationFetchState(t)],
            [t],
        ),
        r = (0, tA.bG)([G.A], () => G.A.getGuildId() ?? void 0),
        [d, c] = o.useState(!1),
        u = o.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, z.K)(u),
        h = o.useCallback(() => {
            tt.default.track(ed.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: nV.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: r,
                channel_id: n.channel_id,
            });
        }, [t, r, n.author.id, n.channel_id]);
    return (o.useEffect(() => {
        (0, eh.eP)(t);
    }, [t]),
    o.useEffect(() => {
        d && s === eg.e.FETCHED && h();
    }, [d, s, h]),
    o.useEffect(() => {
        d &&
            l &&
            tt.default.track(ed.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: nV.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: r,
                channel_id: n.channel_id,
            });
    }, [d, r, l, n.author.id, n.channel_id]),
    l)
        ? (0, a.jsxs)(nB.A, {
              containerRef: m,
              children: [
                  (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t.j4KtLa) }),
                  (0, a.jsx)(nB.A.Body, {
                      children: (0, a.jsxs)("div", {
                          className: nH.k,
                          children: [
                              (0, a.jsx)(nB.A.Icon, { expired: !0 }),
                              (0, a.jsx)(nB.A.Info, {
                                  expired: !0,
                                  title: ec.intl.string(ec.t.NaQLEx),
                                  children: ec.intl.string(ec.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || s === eg.e.FETCHING
          ? (0, a.jsxs)(nB.A, {
                containerRef: m,
                children: [
                    (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t.m9hXGR) }),
                    (0, a.jsx)(nB.A.Body, { resolving: !0 }),
                ],
            })
          : (0, a.jsx)(eL, { app: ep.Ay.createFromServer(i), linkType: $.J.APP_DISCOVERY, onView: h, message: n });
}
var nY = n(229527),
    nz = n(870136),
    nW = n(330075),
    nK = n(412728);
function nJ(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, t5.Qi)(n, i),
        s = (0, tA.bG)([G.A], () => G.A.getGuildId());
    return ((0, tx.A)(
        {
            type: nK.z.VIEW,
            name: tp.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || s !== n)
        ? null
        : (0, a.jsx)(nW.i, {
              guildProductListing: l,
              guildId: n,
              location: E.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var nq = n(484724),
    nX = n(953727);
function nZ(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, nX.A)(l),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: i,
            }),
            (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: i,
            }),
        ],
    });
}
var nQ = n(122906),
    n$ = n(401755),
    n0 = n(195580),
    n1 = n(344900);
function n2(e) {
    let { code: t } = e,
        i = (0, h.bG)([nQ.A], () => nQ.A.getGuildTemplate(t));
    if (null == i || i.state === n$.QB.RESOLVING)
        return (0, a.jsxs)(nB.A, {
            children: [
                (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t.Xj87Yf) }),
                (0, a.jsx)(nB.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === n$.QB.EXPIRED)
        return (0, a.jsxs)(nB.A, {
            children: [
                (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t.C7ZRNw) }),
                (0, a.jsxs)(nB.A.Body, {
                    children: [
                        (0, a.jsx)(nB.A.Icon, { expired: !0 }),
                        (0, a.jsx)(nB.A.Info, { expired: !0, title: ec.intl.string(ec.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, a.jsx)(J.$, { disabled: !0, variant: "secondary", text: ec.intl.string(ec.t.W7NTWm) })
        : (0, a.jsx)(J.$, {
              onClick: () => {
                  (0, eJ.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("57303"),
                          n.e("63897"),
                          n.e("60361"),
                          n.e("11377"),
                          n.e("99430"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("19580"),
                          n.e("16198"),
                          n.e("92152"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, a.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === n$.QB.ACCEPTING,
              variant: "active",
              text: ec.intl.string(ec.t["a3Gl+e"]),
          });
    return (0, a.jsxs)(nB.A, {
        children: [
            (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t.kAvFkO) }),
            (0, a.jsxs)(nB.A.Body, {
                children: [
                    (0, a.jsxs)("div", {
                        className: n1.iH,
                        children: [
                            (0, a.jsx)(nZ, { className: n0.K }),
                            (0, a.jsx)(nB.A.Info, {
                                title: i.name,
                                children: ec.intl.format(ec.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var n3 = n(842241),
    n4 = n(681154),
    n6 = n(155718);
let n5 = new Set([
    n4.ContentInventoryEntryType.TOP_ARTIST,
    n4.ContentInventoryEntryType.TOP_GAME,
    n4.ContentInventoryEntryType.PLAYED_GAME,
    n4.ContentInventoryEntryType.WATCHED_MEDIA,
    n4.ContentInventoryEntryType.LISTENED_SESSION,
    n4.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var n7 = n(398817),
    n9 = n(857071),
    n8 = n(46054),
    ie = n(731068),
    it = n(619517),
    ii = n(207133),
    il = n(835245),
    is = n(844222),
    ir = n(463930),
    ia = n(251391),
    io = n(601255),
    id = n(562819),
    ic = n(234914),
    iu = n(59318),
    im = n(112758),
    ih = n(754459),
    ig = n(967144),
    ip = n(342296),
    iA = n(696451),
    ix = n(218394);
function iE(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, a.jsx)("svg", {
        ...(0, nX.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, a.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: i,
        }),
    });
}
var iC = n(717125),
    iI = n(376943),
    iv = n(36491),
    i_ = n(752755),
    ij = n(461715),
    iN = n(381941),
    iT = n(38208);
function iy(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = o.useRef(null),
        s = o.useRef(null),
        r = (function (e, t) {
            let n = (0, ij.CI)(e),
                i = (0, tA.bG)([iA.Ay, w.default], () => {
                    let e = w.default.getId();
                    return iA.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, tA.bG)(
                    [iC.A],
                    () => null != n && n?.channelId != null && iC.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(ed.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: a,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, tA.cf)([i_.A, t8.A, O.A, V.default, G.A], () => {
                    let e = i_.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = t8.A.getGuild(n?.guildId),
                        i = O.A.getChannel(n?.channelId),
                        l = V.default.getUser(e?.author_id),
                        s = G.A.getGuildId(),
                        r = null != i && (0, iI.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: r,
                    };
                }, [n]),
                h = o.useMemo(() => {
                    let e = (0, ij.tU)({
                        mediaPostEmbedData: r,
                        guild: a,
                        parentChannel: d,
                        user: c,
                        selectedGuildId: u,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: c };
                }, [r, a, d, c, u, m]);
            return (
                o.useEffect(() => {
                    n?.threadId != null &&
                        (i_.A.getEmbedFetchState(n.threadId) !== i_.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, iv.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: d } = (0, ih.A)(n.id, iN.Fd),
        u = (0, im.VL)(n, i, d, !0),
        m = nv.kt.useSetting(),
        h = (0, ix.j)(),
        [g, p] = o.useState(!1),
        [A, f] = o.useState(r?.coverImage == null),
        C = (0, tA.bG)([iA.Ay, V.default], () => iA.Ay.isMember(r?.guildId, V.default.getCurrentUser()?.id), [r]),
        I = (0, tA.bG)([iA.Ay], () => (r?.authorId != null ? iA.Ay.getMember(r.guildId, r.authorId) : null)),
        v = (0, io.A)(I?.avatarDecoration != null ? I?.avatarDecoration : r?.user?.avatarDecoration),
        [_, j, N] = o.useMemo(() => [I?.colorString ?? "inherit", I?.colorStrings ?? null, I?.colorRoleId], [I]),
        T = (0, ig.gn)(I?.guildId, r?.authorId ?? void 0, j),
        { reducedMotion: y } = o.useContext(is.C),
        [S, b] = o.useState(!1),
        L = o.useCallback(() => {
            p(!0);
        }, [p]),
        R = o.useCallback(() => {
            p(!1);
        }, [p]),
        k = o.useCallback(async () => {
            null != r &&
                ((0, t4.zV)(ed.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: r.threadId,
                    channel_id: i.id,
                    can_access: r.canAccess,
                    is_member: C,
                }),
                r.canAccess
                    ? (0, t7.A)(ed.BVt.CHANNEL(r.guildId, r.threadId, r.messageId))
                    : C
                      ? (0, t7.A)(ed.BVt.CHANNEL(r.guildId, r.parentChannelId))
                      : await nb.Z2(r.guildId, {}, { channelId: r.parentChannelId }));
        }, [r, i, C]);
    if (null == r) return null;
    let M = (0, B.F_)({ avatarDecoration: v, size: (0, id.Te)(tB._3.SIZE_40), canAnimate: S }),
        P = r.user?.getAvatarURL(r.guildId, 40, S),
        D = () => {
            y.enabled || b((e) => !e);
        },
        U = r.coverImage,
        H = null != U && (0, iu.ge)(U);
    return (0, a.jsxs)("div", {
        className: iT.wb,
        children: [
            (0, a.jsxs)("div", {
                className: iT.iT,
                onMouseEnter: L,
                onMouseLeave: R,
                children: [
                    !A &&
                        (!0 === r.shouldShowBlurredThumbnailImage
                            ? (0, a.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: ec.intl.string(ec.t.rIbh8H),
                                  className: c()(iT.xn, { [iT.p6]: r.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => f(!0),
                              })
                            : (0, a.jsx)(ic.A, {
                                  src: !(h && (m || g)) && H ? `${U}?format=png` : U,
                                  backgroundSrc: `${U}?format=png`,
                                  alt: ec.intl.string(ec.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: c()(iT.xn, { [iT.p6]: r.shouldSpoiler }),
                                  imageChildClassName: iT.q_,
                                  onContextMenu: u,
                                  onError: () => f(!0),
                              })),
                    null != r.coverImageOverlayText &&
                        (0, a.jsx)(W.D, {
                            onClick: k,
                            children: (0, a.jsx)("div", {
                                className: iT.nx,
                                children: (0, a.jsxs)("div", {
                                    className: iT.BS,
                                    children: [
                                        (0, a.jsx)(iE, { color: t1.A.colors.WHITE.css }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: r.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: iT.iQ,
                children: [
                    (0, a.jsxs)("div", {
                        className: iT.OA,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: iT.hF,
                                children: r.title,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: c()(iT.hF, iT.Fq),
                                children: r.subtitle,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: iT._5,
                        children: [
                            null != r.authorId &&
                                null != P &&
                                (0, a.jsx)(ip.A, {
                                    targetElementRef: s,
                                    userId: r.authorId,
                                    guildId: r.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: r.avatarUrl,
                                    newAnalyticsLocations: [E.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, a.jsx)("div", {
                                            onMouseEnter: D,
                                            onMouseLeave: D,
                                            children: (0, a.jsx)(tV.eu, {
                                                ...e,
                                                ref: s,
                                                size: tB._3.SIZE_40,
                                                src: P,
                                                "aria-label": ec.intl.string(ec.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, a.jsxs)("div", {
                                className: iT.Ny,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: iT.O9,
                                        children: [
                                            null != r.channelName &&
                                                (0, a.jsx)(ia.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: iT.Xg,
                                                }),
                                            (0, a.jsx)(W.D, {
                                                onClick: k,
                                                className: iT.HA,
                                                children: (0, a.jsx)(tI.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: r.channelName ?? r.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != r.authorName &&
                                        (0, a.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: iT.wn,
                                            children: ec.intl.format(ec.t.voIDKa, {
                                                authorName: r.authorName,
                                                authorNameHook: () =>
                                                    null == r.authorId
                                                        ? (0, a.jsx)(ir.V, {
                                                              name: r.authorName,
                                                              colorString: _,
                                                              colorStrings: T,
                                                              className: iT.fh,
                                                          })
                                                        : (0, a.jsx)(
                                                              ip.A,
                                                              {
                                                                  targetElementRef: l,
                                                                  userId: r.authorId,
                                                                  guildId: r.guildId,
                                                                  channelId: i.id,
                                                                  messageId: n.id,
                                                                  roleId: N,
                                                                  avatarUrl: r.avatarUrl,
                                                                  newAnalyticsLocations: [E.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, a.jsx)(ir.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: r.authorName,
                                                                          colorString: _,
                                                                          colorStrings: T,
                                                                          className: iT.fh,
                                                                      }),
                                                              },
                                                              (0, il.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            r.canAccess
                                ? (0, a.jsx)(J.$, { variant: "primary", onClick: k, text: r.ctaText })
                                : (0, a.jsx)(J.$, { onClick: k, variant: "primary", text: r.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var iS = n(492230),
    ib = n(704413);
n(801541);
var iL = n(889137),
    iR = n(744593),
    ik = n(123292),
    iM = n(707554),
    iP = n(962514),
    iD = n(126031),
    iw = n(438437),
    iO = n(306417),
    iU = n(233271);
function iG(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, a.jsxs)("div", {
        className: iU.AA,
        children: [
            t && (0, a.jsx)(iD.s, { children: ec.intl.string(ec.t["8DAM+5"]) }),
            (0, a.jsxs)(x.E, { variant: "text-md/semibold", color: "none", children: [i, "%"] }),
            (0, a.jsx)(x.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function iV(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: l } = e,
        s = !0 === t.isSelected,
        r = !0 === t.didSelfVote,
        o = !0 === t.isVictor;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(iO.Dt, {
                attachmentClassName: c()(iU.oh, { [iU.Wx]: l }),
                emojiClassName: iU.Zg,
                media: t.pollMedia,
                fallback: (0, a.jsx)("div", { className: c()(iU.oh, iU.nb) }),
            }),
            s && (0, a.jsx)(iO.Vx, { size: 40, isVictor: o, isExpired: n, className: iU.Dt }),
            l &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(iG, {
                            didSelfVote: r,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: r ? i : void 0,
                        }),
                        ((!n && r) || o) &&
                            (0, a.jsx)(iO.Vx, { size: 18, isVictor: o, isExpired: n, className: iU.Po }),
                    ],
                }),
        ],
    });
}
function iB(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l, ...s } = e;
    return (0, a.jsx)(iO.Fh, {
        className: iU.ry,
        answerClassName: c()(iU.ZF, { [iU.EK]: i !== iw.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, a.jsx)(iV, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l }),
        ...s,
    });
}
var iH = n(290794),
    iF = n(789646),
    iY = n(873174),
    iz = n(615300),
    iW = n(717421),
    iK = n(915089),
    iJ = n(956703),
    iq = n(969632),
    iX = n(140957);
function iZ(e) {
    let { percentage: t, label: n, canShowVoterDetails: i, answerId: l } = e,
        s = (0, iK.GV)(),
        { channelId: r, messageId: d } = (0, iH.Tu)(),
        [c, u] = o.useState(""),
        [m, h] = o.useState(!1),
        g = "" !== c && m,
        p = o.useCallback(() => {
            u((0, iq.$m)(d, r, l));
        }, [d, r, l]),
        A = o.useCallback(() => {
            p(), h(!0);
        }, [p]),
        f = o.useCallback(() => {
            h(!1);
        }, []),
        E = o.useCallback(() => {
            (0, iP.e)({ channelId: r, messageId: d, answerId: l });
        }, [r, d, l]);
    return (
        o.useEffect(() => {
            if (m)
                return (
                    iJ.A.addReactChangeListener(p),
                    () => {
                        iJ.A.removeReactChangeListener(p);
                    }
                );
        }, [m, p]),
        (0, a.jsxs)("div", {
            className: iX.AA,
            children: [
                i
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              "" !== c
                                  ? (0, a.jsx)(q.m, {
                                        __unsupportedReactNodeAsText: (0, a.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: c,
                                        }),
                                        forceOpen: g,
                                        "aria-label": !1,
                                        children: (0, a.jsx)(ik.Q, {
                                            onMouseEnter: A,
                                            onMouseLeave: f,
                                            onFocus: A,
                                            onBlur: f,
                                            onClick: E,
                                            "aria-describedby": g ? s : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, a.jsx)(ik.Q, {
                                        onMouseEnter: A,
                                        onMouseLeave: f,
                                        onFocus: A,
                                        onBlur: f,
                                        onClick: E,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              g && (0, a.jsx)(iD.s, { id: s, children: c }),
                          ],
                      })
                    : (0, a.jsx)(x.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, a.jsxs)(x.E, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function iQ(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, iW.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: iz.A.Easing.inOut(iz.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, a.jsx)(iY.animated.span, { className: iX.an, style: i, "aria-hidden": !0 });
}
function i$(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: s, className: r } = e;
    return (0, iL.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: iw.CQ.RADIO_BUTTONS }, () =>
            (0, a.jsx)(iO.k$, { isSelected: n, size: 24, className: r }),
        )
        .with({ answersInteraction: iw.CQ.CHECKBOXES }, () =>
            (0, a.jsx)(iO.e5, { isSelected: n, size: 20, className: r }),
        )
        .with({ answersInteraction: iw.CQ.LIST, didSelfVote: !0 }, () =>
            (0, a.jsx)(iO.Vx, { isVictor: l, isExpired: s, size: 24, className: r }),
        )
        .otherwise(() => null);
}
function i0(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: s } = e,
        r = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        u = t.shouldAnimateTransition;
    return (0, a.jsxs)("div", {
        className: c()(iX.Fk, { [iX.EK]: i !== iw.CQ.LIST, [iX.wH]: r }),
        children: [
            l ? (0, a.jsx)(iQ, { percentage: t.votesPercentage, shouldAnimate: u }) : null,
            null != t.pollMedia.emoji && (0, a.jsx)(iO.Fb, { className: iX.Zg, emoji: t.pollMedia.emoji }),
            (0, a.jsx)(x.E, {
                className: iX.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, a.jsx)(iD.s, { children: ec.intl.string(ec.t["8DAM+5"]) }),
            l &&
                (0, a.jsx)(iZ, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId,
                }),
            (0, a.jsx)(i$, {
                answersInteraction: i,
                isSelected: r,
                didSelfVote: o,
                isVictor: d,
                isExpired: n,
                className: iX.ck,
            }),
        ],
    });
}
function i1(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l, ...s } = e;
    return (0, a.jsx)(iO.Fh, {
        className: iX.ry,
        answerClassName: iX.ZF,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, a.jsx)(i0, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: l,
            }),
        ...s,
    });
}
var i2 = n(2445);
function i3(e) {
    let { media: t } = e;
    return (0, a.jsx)(tI.D, {
        variant: "text-md/medium",
        className: i2.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function i4(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: s } = e;
    return (0, a.jsxs)("div", {
        className: c()(i2.ez, s),
        children: [
            l
                ? (0, a.jsx)(ik.Q, { text: t, onClick: i, variant: "secondary", textVariant: "text-sm/medium" })
                : (0, a.jsx)(x.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, a.jsx)(x.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function i6(e) {
    let { action: t, channelId: n, messageId: i, isInteractive: l, className: s } = e,
        { actionButtonRef: r, manageFocusOnAction: d } = (0, iF.Mg)(),
        c = o.useCallback(async () => {
            t?.type != null &&
                (await iP.A.handlePollActionTapped({ channelId: n, messageId: i, type: t.type }), d(t.type));
        }, [t?.type, n, i, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, a.jsx)(
                J.$,
                {
                    buttonRef: r,
                    onClick: c,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, a.jsx)(ik.Q, {
                  buttonRef: r,
                  onClick: c,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, a.jsx)(i4, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: c,
                  isInteractive: l,
                  className: s,
              });
}
function i5(e) {
    let t,
        { message: n, poll: i, className: l } = e,
        s = (0, iH.hd)(i.containerStyle),
        r =
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
            (0, iL.YW)(i.layoutType)
                .with(iR.Z.DEFAULT, () => (0, a.jsx)(i1, { ...t }))
                .with(iR.Z.IMAGE_ONLY_ANSWERS, () => (0, a.jsx)(iB, { ...t }))
                .otherwise(() => null));
    return null == r
        ? null
        : (0, a.jsx)("div", {
              className: c()(i2.kL, s, l),
              children: (0, a.jsxs)(iM.F, {
                  children: [
                      (0, a.jsxs)("div", {
                          className: i2.wx,
                          children: [
                              (0, a.jsx)(i3, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: i2.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      r,
                      (0, a.jsxs)("div", {
                          className: i2.pR,
                          children: [
                              (0, a.jsx)(i6, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: i2.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, a.jsx)(i6, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: i2.vD,
                              }),
                              (0, a.jsx)(i6, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function i7(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, a.jsx)(iH.y5, {
        message: t,
        poll: n,
        children: (0, a.jsx)(iF.RZ, { children: (0, a.jsx)(i5, { message: t, poll: n, className: i }) }),
    });
}
var i9 = n(711038),
    i8 = n(892340),
    le = n(803306),
    lt = n(491182),
    ln = n(639288),
    li = n(10364),
    ll = n(378570),
    ls = n(138298),
    lr = n(761640),
    la = n(989349),
    lo = n.n(la),
    ld = n(606049),
    lc = n(943815),
    lu = n(447215),
    lm = n(221314),
    lh = n(237507),
    lg = n(334211),
    lp = n(513653);
let lA = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: s, reportedTimestamp: r } = e,
        d = V.default.getUser(t),
        u = o.useMemo(() => (i ? (0, lc.A)((0, nN.i$)(lo()(), "LT")) : null), [i]),
        m = (0, lu.P)({ user: d, channelId: l.id, guildId: n, messageId: s })((0, tY.m2)(d, l)),
        h = null != d ? d.getAvatarURL(n, (0, tB.FT)(tB._3.SIZE_16)) : lp,
        g =
            null != d
                ? ec.intl.format(lm.default["+zqXZs"], { username: d.username, onUserClick: m })
                : ec.intl.string(lm.default.xpRjfS);
    return (0, a.jsxs)("div", {
        className: c()(lg.NB, lg.JZ, u),
        children: [
            (0, a.jsx)(tV.eu, { src: h, size: tB._3.SIZE_16, className: lh.my, "aria-label": "" }),
            (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", className: lh.Xh, children: g }),
            (0, a.jsxs)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, a.jsx)("span", { className: lh.Ek, children: "\u2022" }),
                    (0, a.jsx)(ld.A, { timestamp: r, className: lh.vE }),
                ],
            }),
        ],
    });
};
var lx = n(167684);
function lf(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = o.useMemo(() => new ny(t, n, i), [t, n, i]),
        s = (0, h.bG)(
            [O.A, V.default, U.A, e_.A, t8.A, nA.A],
            () => l.getForwardInfo(O.A, V.default, U.A, e_.A, t8.A, nA.A).footerInfo,
            [l],
            p.A,
        ),
        r = o.useCallback(() => {
            let e = O.A.getChannel(t.channel_id),
                n = t8.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ej.A.getCurrentlySelectedChannelId(),
                s = lr.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (ls.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, ll.iN)(i),
                tt.default.track(ed.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == s
        ? null
        : (0, a.jsxs)(W.D, {
              className: lx.xQ,
              onClick: r,
              "aria-label": s.accessibilityLabel,
              children: [
                  null != s.originIconUrl
                      ? (0, a.jsx)("img", { className: lx.yl, src: s.originIconUrl, alt: "" })
                      : null,
                  (0, a.jsx)(x.E, {
                      className: lx.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${s.originLabel}  \u{2022}  ${s.timestampLabel}`,
                  }),
                  (0, a.jsx)(ng._, { size: "xxs", color: t1.A.colors.TEXT_MUTED }),
              ],
          });
}
function lE(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: s } = e,
        r = (0, tY.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, ih.A)(e.id, iN.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                r = (0, im.m)(e, t, l, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, im.Jo)(s, i),
                onPopoutRequestClose: o.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, a.jsx)(lt.A, {
        childrenExecutedCommand: (0, a.jsx)(lA, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, a.jsx)(ln.Ay, {
            message: t,
            channel: i,
            author: r,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
            renderPopout: li.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, a.jsx)(nf.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: lx.iU,
        author: r,
    });
}
function lC(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, s] = o.useState(void 0);
    o.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, le.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    s(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let r = o.useMemo(() => {
            let e = (0, nR.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nv.hD.useSetting(),
        c = nv.rs.useSetting(),
        u = (0, h.bG)([n_.A], () => n_.A.isDeveloper),
        m = (0, nx.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nE.A)(r, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            allowDevLinks: u,
            previewLinkTarget: !0,
        }),
        x = (0, h.bG)([O.A], () => O.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, a.jsx)(
              "div",
              {
                  className: lx.kL,
                  children: (0, a.jsxs)("div", {
                      className: lx.Qs,
                      children: [
                          (0, a.jsx)(lE, {
                              mergedMessageRecord: r,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nC.A)({
                              channelMessageProps: { message: r, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: lx.Mf,
                          }),
                          (0, a.jsx)(lf, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function lI(e) {
    let { message: t } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, a.jsx)(lC, { message: t, snapshot: e, index: n }, n)),
    });
}
var lv = n(302031),
    l_ = n(738188),
    lj = n(239093),
    lN = n(89453);
function lT(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === lj.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        s = t.fields?.find((e) => e.rawName === lj.AT.INCIDENT_TIMESTAMP) ?? void 0,
        r = null == s || null == s.rawValue ? void 0 : parseFloat(s.rawValue);
    return null == l || null == r
        ? null
        : (0, a.jsxs)(W.D, {
              onClick: () => {
                  (0, eJ.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("57352"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, a.jsx)(e, {
                              classificationId: l,
                              source: lj.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lN.o3,
              children: [
                  (0, a.jsxs)("div", {
                      className: lN.qZ,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lN.U1,
                              children: [
                                  (0, a.jsx)(l_.i, { className: lN.QW, color: t1.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, a.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      children: ec.intl.string(ec.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: lN.VU,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  children: ec.intl.format(ec.t.eevFb6, { daysAgo: lo()().diff(lo().unix(r), "days") }),
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: lN.vv,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ec.intl.string(ec.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)("div", {
                      className: lN.xQ,
                      children: (0, a.jsx)(ik.Q, { text: ec.intl.string(ec.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var ly = n(349288),
    lS = n(393033),
    lb = n(903009);
function lL(e) {
    let { classificationId: t } = e;
    return (0, a.jsx)(ly.Anchor, {
        onClick: () => {
            (0, eJ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("57352"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, a.jsx)(e, {
                        classificationId: t,
                        source: lj.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lb.zh,
        children: ec.intl.string(ec.t.QsqdXC),
    });
}
function lR(e) {
    let { learnMoreLink: t } = e;
    return (0, a.jsx)(ly.Anchor, { className: lb.zh, href: t, children: ec.intl.string(ec.t["8/GdRB"]) });
}
function lk(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case lj.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, a.jsx)(lL, { classificationId: n });
        case lj.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, a.jsx)(lR, { learnMoreLink: i });
        default:
            return null;
    }
}
function lM(e) {
    let { iconType: t } = e,
        n = {
            default: (0, a.jsx)(tC.k, { size: "xs", color: t1.A.colors.TEXT_LINK.css }),
            danger: (0, a.jsx)(l_.i, { color: t1.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, a.jsx)("div", { className: lb.Kk, children: n[t] }) : null;
}
function lP(e) {
    let { children: t, theme: n } = e,
        i = { default: lb._y, danger: lb.yk };
    return (0, a.jsx)("div", { className: i[n ?? "default"], children: t });
}
function lD(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lS.f4)(e.embed);
    return null == n
        ? null
        : (0, a.jsxs)(W.D, {
              className: lb.o3,
              children: [
                  (0, a.jsxs)("div", {
                      className: lb.qZ,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lb.U1,
                              children: [
                                  (0, a.jsx)(lM, { iconType: n.icon }),
                                  (0, a.jsx)(x.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: lb.VU,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  children: ec.intl.format(ec.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), lo()().diff(lo().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: lb.vv,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(lP, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, a.jsx)(
                              lk,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lw = n(318254),
    lO = n(825484),
    lU = n(875444),
    lG = n(723090),
    lV = n(801228),
    lB = n(561794),
    lH = n(871123),
    lF = n(733391),
    lY = n(832163),
    lz = n(317560),
    lW = n(533406),
    lK = n(971146),
    lJ = n(300182),
    lq = n(467884),
    lX = n(918374);
function lZ(e) {
    let { sku: t, normalPrice: n, discountedPrice: i, discountPercent: l } = e,
        s = o.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, a.jsx)("div", {
                          className: lX.pt,
                          children: (0, a.jsx)(x.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: ec.intl.format(ec.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, a.jsx)(lw.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        r = null != l && null != i;
    return (0, a.jsx)("div", {
        className: c()(lX.PB, { [lX.un]: r }),
        children: r
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      null != n &&
                          (0, a.jsx)(x.E, {
                              className: lX.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, a.jsx)(x.E, { variant: "text-md/bold", lineClamp: 1, children: i }),
                      (0, a.jsxs)(x.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", l, ")"],
                      }),
                      s,
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [null != n && (0, a.jsx)(x.E, { variant: "text-md/bold", lineClamp: 1, children: n }), s],
              }),
    });
}
function lQ(e) {
    let { applicationId: t, skuId: n, channel: i } = e,
        l = (0, h.bG)([lY.A], () => lY.A.getGuildIdFromApplicationId(t));
    return null == l ? null : (0, a.jsx)(l$, { guildId: l, skuId: n, channel: i });
}
function l$(e) {
    let { guildId: t, skuId: n, channel: i } = e,
        l = (0, h.bG)([te.A], () => te.A.isFetchingForSKU(n)),
        s = (0, lV.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        r = s?.applicationId,
        d = (0, h.bG)([e4.A], () => null != r && e4.A.isFetchingApplication(r)),
        c = (0, h.bG)([e4.A], () => null != r && e4.A.didFetchingApplicationFail(r)),
        u = (0, eM.h)(r),
        { analyticsLocations: m } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, lB.pE)();
    let g = (0, h.bG)([V.default], () =>
            i.isDM() && null != i.recipients && 0 !== i.recipients.length ? V.default.getUser(i.recipients[0]) : null,
        ),
        p = (0, h.bG)([lY.A], () => (null != n ? lY.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: A, primaryIconLabel: f } = o.useMemo(() => (0, lH.Cv)(s, r), [s, r]),
        { normalPrice: I, discountedPrice: v, discountPercent: _ } = (0, lG.CD)({ sku: s });
    o.useEffect(() => {
        null == t || null == n || te.A.isFetchingForSKU(n) || (0, lF.qf)(t, n);
    }, [t, n]);
    let j = o.useCallback(
            (e) => {
                e.stopPropagation(),
                    s?.applicationId != null &&
                        (0, lz.R)({
                            skuId: n,
                            applicationId: s.applicationId,
                            isStorefront: !1,
                            analyticsLocations: m,
                        });
            },
            [n, s, m],
        ),
        N = o.useCallback(() => {
            null != s &&
                p &&
                (0, lW.a)(
                    s,
                    { isGift: !1 },
                    { analyticsLocations: [E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [s, t, p]),
        T = o.useCallback(() => {
            null != s &&
                (0, lW.a)(
                    s,
                    { isGift: !0, giftRecipient: g ?? void 0 },
                    { analyticsLocations: [E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [s, g]),
        y = null != r && null == u && !c;
    if ((l || d || y) && (null == s || null == u))
        return (0, a.jsx)("div", { className: lX.kL, children: (0, a.jsx)(t2.y, { className: lX.u1 }) });
    if (null == s || null == u || !(0, lU.A)(u) || u.guildId !== t) return null;
    let S = v ?? I;
    return (0, a.jsxs)("div", {
        className: lX.kL,
        children: [
            (0, a.jsx)(lq.A, { className: lX.Nr, skuId: n, variant: lq.s.EMBEDDED, onClick: j, analyticsLocations: m }),
            (0, a.jsxs)("div", {
                className: lX.zH,
                children: [
                    (0, a.jsxs)("div", {
                        className: lX.lI,
                        children: [
                            (0, a.jsx)(lK.V, {}),
                            (0, a.jsxs)("div", {
                                className: lX.PB,
                                children: [
                                    null != A && (0, a.jsx)("img", { src: A.toString(), alt: f, className: lX.ye }),
                                    (0, a.jsx)(x.E, { variant: "text-md/medium", lineClamp: 1, children: s.name }),
                                ],
                            }),
                            (0, a.jsx)(lZ, { sku: s, normalPrice: I, discountedPrice: v, discountPercent: _ }),
                        ],
                    }),
                    (0, a.jsxs)(lO.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(q.m, {
                                text: p ? void 0 : ec.intl.string(ec.t.IqlPbQ),
                                children: (0, a.jsx)(J.$, {
                                    variant: p ? "secondary" : "primary",
                                    onClick: j,
                                    text: ec.intl.string(ec.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            p &&
                                (0, a.jsx)(J.$, {
                                    variant: "primary",
                                    onClick: N,
                                    text:
                                        null != S
                                            ? ec.intl.format(ec.t.Xp5WTn, { price: S })
                                            : ec.intl.string(ec.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, a.jsx)(lJ.A, { onGift: T }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var l0 = n(68935),
    l1 = n(319060),
    l2 = n(812282),
    l3 = n(922016),
    l4 = n(34337),
    l6 = n(240248),
    l5 = n(256449),
    l7 = n(194004),
    l9 = n(148355),
    l8 = n(780645),
    se = n(862482),
    st = n(847374),
    sn = n(964486),
    si = n(235986),
    sl = n(624793),
    ss = n(636537),
    sr = n(639245),
    sa = n(87719),
    so = n(725807),
    sd = n(428262),
    sc = n(750385),
    su = n(850992),
    sm = n(625494),
    sh = n(698279),
    sg = n(788868),
    sp = n(631144),
    sA = n(979132);
function sx(e) {
    tt.default.track(ed.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? ed.liQ.GUILD_CHANNEL : ed.liQ.DM_CHANNEL,
        location_section: ed.JJy.STICKER_POPOUT,
    }),
        (0, sa.e)();
}
function sf(e) {
    let { sticker: t, description: n } = e;
    return (0, a.jsxs)(si.A, {
        children: [
            (0, a.jsx)(l9.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, a.jsxs)(si.A, {
                direction: si.A.Direction.VERTICAL,
                justify: si.A.Justify.CENTER,
                className: sA.bM,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-md/semibold", children: (0, a.jsx)(l8.A, { children: t.name }) }),
                    null != n && (0, a.jsx)(x.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let sE = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [s, r, d] = (0, h.yK)(
                [sc.A],
                () => [sc.A.getStickerPack(n.pack_id), !sc.A.hasLoadedStickerPacks, sc.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            c = ((e) => {
                let { sticker: t, stickerPack: n } = e;
                return o.useMemo(
                    () =>
                        null == n
                            ? []
                            : n.stickers
                                  .slice(0, 4)
                                  .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                    [t, n],
                );
            })({ sticker: n, stickerPack: s });
        (0, l5.Sr)(n.pack_id);
        let u = (0, l5.pD)(i),
            m = { refreshPositionKey: l, channel: i },
            g = o.useRef(m);
        return (o.useEffect(() => {
            g.current = m;
        }),
        o.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [r]),
        o.useEffect(() => {
            let { channel: e } = g.current;
            tt.default.track(ed.HAw.OPEN_POPOUT, {
                type: ed.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, t4.dI)(e),
            });
        }, [n.pack_id]),
        r || null == s)
            ? (0, a.jsx)(l4.Y0, { className: sp.v0 })
            : (0, a.jsxs)(l4.Uq, {
                  className: sp.Bm,
                  children: [
                      (0, a.jsx)(tI.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? ec.intl.format(ec.t.auckXz, { stickerPackName: s.name })
                              : ec.intl.format(ec.t.OzB6e3, { stickerPackName: s.name }),
                      }),
                      (0, a.jsx)("ul", {
                          className: sp.pQ,
                          children: c.map((e) => (0, a.jsx)(l9.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, a.jsx)("div", {
                              className: sp.j0,
                              children: (0, a.jsx)(
                                  J.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ec.intl.string(ec.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  sm._.dispatchToLastSubscribed(ed.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sh.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && su.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: s, stickerPickerCategories: u }),
                                              t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    sC = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: s } = e,
            [r, d] = o.useState(null),
            [u, m] = o.useState(!1),
            g = V.default.getCurrentUser(),
            p = sd.Ay.canUseCustomStickersEverywhere(g),
            A = (0, h.bG)([t8.A], () => t8.A.getGuild(n.guild_id)),
            f = null != A,
            [E, C] = o.useState(!1),
            [I, v] = o.useState(null),
            _ = o.useMemo(
                () => ({
                    page: null != i.guild_id ? ed.liQ.GUILD_CHANNEL : ed.liQ.DM_CHANNEL,
                    section: ed.JJy.STICKER_POPOUT,
                }),
                [i.guild_id],
            ),
            { current: j } = o.useRef({ guild_id: i.getGuildId(), ...(0, t4.dI)(i) }),
            N = { stickerSourceGuild: A, refreshPositionKey: s },
            T = o.useRef(N);
        o.useEffect(() => {
            T.current = N;
        }),
            o.useEffect(() => {
                let { stickerSourceGuild: e } = T.current;
                (async () => {
                    if (null == e || e.features.has(ed.GuildFeatures.DISCOVERABLE)) {
                        let e;
                        d(
                            await ((e = n.id),
                            ss.Bo.get({ url: ed.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, nb.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    m(!0);
                })();
            }, [n.id, f]);
        let y = n.guild_id === i.getGuildId(),
            S = null != r,
            b = !1,
            L = "Custom Sticker Popout";
        p
            ? (t = f
                  ? y
                      ? ec.intl.string(ec.t.fZ0DiG)
                      : ec.intl.string(ec.t["1f6D9m"])
                  : S
                    ? ec.intl.string(ec.t.yHmoR9)
                    : ec.intl.string(ec.t.vZaScH))
            : f
              ? ((t = y ? ec.intl.string(ec.t.jNphpt) : ec.intl.string(ec.t.lyD5ZW)),
                (b = !0),
                (L = "Custom Sticker Popout (Upsell)"))
              : S
                ? ((t = ec.intl.string(ec.t.IuXYch)), (b = !0), (L = "Custom Sticker Popout (Upsell)"))
                : ((t = ec.intl.format(ec.t.hGWuxU, {
                      openPremiumSettings: () => {
                          sx(i), l();
                      },
                  })),
                  (L = "Custom Sticker Popout (Soft Upsell)"));
        let R = !b && !f && S && p;
        if (
            (o.useEffect(() => {
                let { refreshPositionKey: e } = T.current;
                e();
            }, [u, r]),
            (0, sn.Ay)(() => {
                tt.default.track(ed.HAw.OPEN_POPOUT, { type: L, ...j });
            }),
            !u)
        )
            return (0, a.jsx)(l4.Y0, { className: sp.v0 });
        {
            let e;
            return (0, a.jsxs)(l4.Uq, {
                className: sA.Bm,
                children: [
                    ((e = async () => {
                        if (null == r || f) return;
                        l();
                        let e = r.id;
                        try {
                            await nS.A.joinGuild(e), nS.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, a.jsxs)("div", {
                        className: sA.gH,
                        children: [
                            (0, a.jsx)(sf, { description: t, sticker: n }),
                            b &&
                                (0, a.jsx)(so.A, {
                                    className: sA.lI,
                                    subscriptionTier: sg.pe.TIER_2,
                                    size: se.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: ec.intl.string(ec.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == r ? void 0 : r,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            R &&
                                (0, a.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: sA.lI,
                                    children: (0, a.jsx)(J.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ec.intl.string(ec.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != A || null != r) &&
                        (() => {
                            if (!S && !f) return;
                            let e = (r?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != r ? sl.GO.createFromDiscoverableGuild(r) : sl.GO.createFromGuildRecord(A);
                            return (0, a.jsxs)("div", {
                                className: sA.tl,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: sA.YW,
                                        children: f ? ec.intl.string(ec.t.kx6pEG) : ec.intl.string(ec.t.pDE7Gb),
                                    }),
                                    (0, a.jsx)(sr.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: R,
                                    }),
                                    !f &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(W.D, {
                                                    onClick: () => {
                                                        s(), C(!E);
                                                    },
                                                    className: sA.wK,
                                                    children: (0, a.jsxs)(si.A, {
                                                        children: [
                                                            (0, a.jsx)(x.E, {
                                                                className: sA.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: ec.intl.string(ec.t.vtH5hn),
                                                            }),
                                                            (0, a.jsx)(st.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: c()(sA.ZB, { [sA.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, a.jsx)(si.A, {
                                                        wrap: si.A.Wrap.WRAP,
                                                        align: si.A.Align.START,
                                                        justify: si.A.Justify.START,
                                                        className: sA.LX,
                                                        children: e.map((e) =>
                                                            (0, a.jsx)(
                                                                q.m,
                                                                {
                                                                    text: e.name,
                                                                    ...l4.Uk,
                                                                    children: (0, a.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: c()(sA.Th, {
                                                                                [sp.vT]: null != I && I !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, a.jsx)(l9.A, {
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
function sI(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, a.jsx)(l4.Uq, {
        className: sp.Bm,
        children: (0, a.jsx)(sf, {
            sticker: i,
            description: ec.intl.format(ec.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sx(t);
                },
            }),
        }),
    });
}
let sv = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [s, r] = (0, l5.Zq)(t, !0);
    return null != s && (0, l0.FD)(s)
        ? (0, a.jsx)(sE, { sticker: s, closePopout: i, channel: n, refreshPositionKey: l })
        : null != s && (0, l0.Xw)(s)
          ? (0, a.jsx)(sC, { sticker: s, channel: n, closePopout: i, refreshPositionKey: l })
          : r
            ? null == s
                ? (0, a.jsx)(sI, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, a.jsx)(l4.Y0, {});
};
var s_ = n(76513);
let sj = (0, l6.xI)(l1.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sN = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = o.useRef(null),
            [s, r] = o.useState(!0),
            [d, c] = o.useState(String(Date.now())),
            [u] = (0, l5.Zq)(t, i),
            { analyticsLocations: m } = (0, C.Ay)(E.A.STICKER_MESSAGE),
            h = (0, a.jsxs)("span", {
                className: s_.Zl,
                children: [(0, a.jsx)(l2.s, { size: "xs", color: "currentColor", className: s_.lA }), (u ?? t).name],
            });
        return (0, a.jsx)(C.f5, {
            value: m,
            children: (0, a.jsx)("div", {
                className: s_.be,
                children: (0, a.jsx)(l3.Y, {
                    align: "center",
                    animation: l3.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        r(!0);
                    },
                    renderPopout: (e) =>
                        (0, a.jsx)(sv, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, a.jsx)(q.m, {
                            ...l4.Uk,
                            shouldShow: s,
                            __unsupportedReactNodeAsText: (0, l4.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    t4.Ay.trackWithMetadata(ed.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: sg.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, l7.Tw)(e.format_type),
                                        is_custom: (0, l7.zN)(e.type),
                                    });
                            },
                            children: (0, a.jsx)(W.D, {
                                innerRef: l,
                                className: s_.q7,
                                onClick: (e) => {
                                    r(!s), n(e);
                                },
                                tag: "span",
                                children: (0, a.jsx)(l9.A, { isInteracting: i, size: sj, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sT = n(406704),
    sy = n(531142),
    sS = n(140735),
    sb = n(442433),
    sL = n(143413),
    sR = n(935208),
    sk = n(321045),
    sM = n(456874),
    sP = n(707539),
    sD = n(80682),
    sw = n(465364),
    sO = n(805964),
    sU = n(943220);
function sG(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, h.cf)(
            [U.A],
            () => ({ isBlocked: U.A.isBlockedForMessage(t), isIgnored: U.A.isIgnoredForMessage(t) }),
            [t],
        ),
        s = o.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sD.Eq)(s, "ThreadMessageAccessoryMessage");
    let r = o.useMemo(
        () => (null != t.content && "" !== t.content ? (0, sw.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, a.jsxs)("div", {
        className: lg.up,
        children: [
            (0, a.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: lg.FJ }),
            (0, a.jsx)(sU.A, { message: t, channel: n, compact: !0 }),
            (0, a.jsx)("div", {
                className: lg.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: s,
                        leadingIcon: r,
                        trailingIcon: o,
                    } = (0, sO.o)(e, t, n, i, lg.tP, {
                        trailingIconClass: lg._v,
                        leadingIconClass: lg.a5,
                        iconSize: ee.eJ,
                    });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [r, s ?? (0, a.jsx)("span", { className: lg.dp, children: l }), o],
                    });
                })(t, r, i, l),
            }),
        ],
    });
}
var sV = n(747926),
    sB = n(650583),
    sH = n(74791);
function sF(e) {
    let { message: t, compact: n } = e,
        i = (0, h.bG)([O.A], () => O.A.getChannel(sR.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, a.jsx)(sY, { channel: i, compact: n, isSystemMessage: (0, sL.A)(t) });
}
function sY(e) {
    var t;
    let i,
        l,
        s,
        { channel: r, compact: o, isSystemMessage: d } = e,
        u = (0, nj.Ay)(r),
        m = (0, h.bG)([sM.A], () => sM.A.getCount(r.id)),
        g =
            ((t = r),
            (i = (0, h.bG)([sM.A], () => sM.A.getMostRecentMessage(t.id))),
            (l = (0, h.bG)([sM.A], () => sM.A.getCount(t.id))),
            (s = (0, sP.JO)(t)),
            t.threadMetadata?.archived
                ? ec.intl.string(ec.t.ZTo4HS)
                : null == l || 0 === l
                  ? ec.intl.string(ec.t.HYtNyE)
                  : null == i
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("span", { children: ec.intl.string(ec.t.ZTo4HS) }),
                              (0, a.jsx)("span", { className: sH.vE, children: (0, sP.aK)(s) }),
                          ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(sG, { message: i, channel: t }),
                              (0, a.jsx)("span", { className: sH.vE, children: (0, sP.aK)(s) }),
                          ],
                      })),
        p = null != m && m > 0;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: c()(sH.GI, { [sH.E]: !o, [sH.E_]: d }) }),
            (0, a.jsx)(W.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sV.JA)(r, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sB.dh.SPACE || e.key === sB.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sV.JA)(r, n));
                },
                onContextMenu: function (e) {
                    (0, sb.L3)(e, async () => {
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
                        return (t) => (0, a.jsx)(e, { channel: r, ...t });
                    });
                },
                "aria-roledescription": ec.intl.string(ec.t["8ipxiY"]),
                className: c()(sH.kL, { [sH.og]: d }),
                children: (0, a.jsxs)(sy.R, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: sH.kq,
                            children: [
                                (0, a.jsx)(sS.A, { children: ec.intl.string(ec.t["7Xm5QI"]) }),
                                (0, a.jsx)("span", { className: sH.UU, children: u }),
                                (0, a.jsx)("span", {
                                    className: sH.lO,
                                    "aria-hidden": !p,
                                    children: (0, sk.ub)(m, r.id),
                                }),
                            ],
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sH.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sz = n(383233),
    sW = n(834942),
    sK = n(644447),
    sJ = n(927813),
    sq = n(659674),
    sX = n(998218),
    sZ = n(5095),
    sQ = n(294520),
    s$ = n(320095),
    s0 = n(863439),
    s1 = n(707985),
    s2 = n(730852),
    s3 = n(265422),
    s4 = n(986268);
function s6(e) {
    let { guild: t, channel: n, message: i } = e,
        l = G.A.getGuildId(),
        s = ej.A.getChannelId(l),
        r = o.useCallback(() => {
            tt.default.track(ed.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: s,
            }),
                (0, s3.i)(t.id, n.id),
                s2.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, s]),
        d = (0, a.jsx)(nB.A.Channel, { channel: n });
    return (0, a.jsx)(nB.A, {
        children: (0, a.jsxs)(nB.A.Body, {
            children: [
                (0, a.jsxs)("div", {
                    className: n1.iH,
                    children: [
                        (0, a.jsx)(nB.A.Icon, { guild: t }),
                        (0, a.jsx)(nB.A.Info, {
                            title: d,
                            onClick: r,
                            children: (0, a.jsxs)("span", {
                                className: n1.FA,
                                children: [
                                    ec.intl.format(ec.t["2wimj5"], { guildName: t.name }),
                                    (0, a.jsx)("span", {
                                        className: n1.E3,
                                        children: (0, a.jsx)(s4.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: n1.UD,
                    children: (0, a.jsx)(J.$, {
                        fullWidth: !0,
                        onClick: r,
                        variant: "active",
                        text: n.isGuildStageVoice() ? ec.intl.string(ec.t["7vb2cc"]) : ec.intl.string(ec.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function s5(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        s = O.A.getChannel(l),
        r = t8.A.getGuild(i);
    return null != s && s.isGuildVocal() && null != r && e_.A.can(ed.xBc.VIEW_CHANNEL, s) && e_.A.can(ed.xBc.CONNECT, s)
        ? (0, a.jsx)(s6, { guild: r, channel: s, message: n })
        : null;
}
var s7 = n(789645),
    s9 = n(298236),
    s8 = n(953756),
    re = n(564107),
    rt = n(503556),
    rn = n(143517);
function ri(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: l,
            getOnMediaItemContextMenu: s,
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: o,
            onSuppressEmbed: d,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, s8.zn)();
    return 0 === t.length
        ? null
        : (0, a.jsx)(re.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: s,
              shouldHideMediaOptions: r,
              enabledContentHarmTypeFlags: o,
              children: (0, a.jsx)(s9.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, a.jsx)(s8.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, a.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, a.jsx)(s8.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, a.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: c()(rt.O0, rn.k, rn.z, { [rt.dK]: u }),
                                      children: [
                                          null != d &&
                                              (0, a.jsx)(W.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: rt.PP,
                                                  onClick: d,
                                                  "aria-label": ec.intl.string(ec.t.GT3fNz),
                                                  children: (0, a.jsx)(s7.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, n7.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var rl = n(451988),
    rs = n(261958),
    rr = n(212245),
    ra = n(62583),
    ro = n(956549),
    rd = n(550151),
    rc = n(392054),
    ru = n(853390),
    rm = n(290863),
    rh = n(403362),
    rg = n(811024),
    rp = n(360469),
    rA = n(212242);
let rx = o.memo((e) => {
    let { start: t } = e,
        [n, i] = o.useState(0),
        l = (0, ix.j)(),
        s = (0, h.bG)([X.A], () => X.A.useReducedMotion),
        r = !1 === l || s;
    return (
        o.useEffect(() => {
            let e = new rl.IX();
            return (
                e.start(r ? 15 * sJ.A.Millis.SECOND : sJ.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / sJ.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [r, t]),
        (0, ru.fU)(n)
    );
});
rx.displayName = "ActivityRuntimeCounter";
let rf = o.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: s } = e,
        { analyticsLocations: r } = (0, C.Ay)(E.A.ACTIVITY_INSTANCE_EMBED),
        d = (0, rr.p)(),
        u = (0, h.bG)([O.A], () => O.A.getChannel(i), [i]),
        m = u?.isThread?.() ? u?.parent_id : i,
        g = (0, h.bG)([w.default], () => w.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: A,
            activityLaunchState: f,
        } = (0, h.cf)(
            [eO.Ay],
            () => ({
                embeddedActivity: eO.Ay.getEmbeddedActivitiesForChannel(m ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: eO.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eO.Ay.getLaunchState(n.id, m ?? void 0),
            }),
            [m, n.id],
        ),
        I = p?.userIds,
        v = (0, h.yK)(
            [V.default],
            () =>
                Array.from(I ?? [])
                    .map((e) => V.default.getUser(e))
                    .filter(rh.Vq),
            [I],
        ),
        _ = (0, h.bG)([rm.A], () => {
            if (null == I) return null;
            for (let e of I) {
                let t = rm.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, I]),
        j = _?.details,
        N = o.useMemo(() => {
            let e = new ep.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rp.Gl), e;
        }, [n]),
        T = (0, rd.vG)({ userId: g, channelId: i, application: N }),
        y = null == p,
        S = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return o.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            r = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? ec.intl.string(ec.t.RscU7I) : ec.intl.string(ec.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, rg.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: ec.intl.string(ec.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : ec.intl.string(ec.t.f41E1g) };
                        if (null != n && n !== rd.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case rd.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = ec.intl.string(ec.t.hHGrWz);
                                    break;
                                case rd.Gy.ACTIVITY_AGE_GATED:
                                    e = ec.intl.string(ec.t["4WuFRE"]);
                                    break;
                                case rd.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = ec.intl.string(ec.t.uGDCcw);
                                    break;
                                case rd.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = ec.intl.string(ec.t.UXoQTp);
                                    break;
                                case rd.Gy.CHANNEL_FULL:
                                    e = ec.intl.string(ec.t.rZfiNq);
                                    break;
                                case rd.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = ec.intl.string(ec.t.w5SAps);
                                    break;
                                case rd.Gy.NO_CHANNEL:
                                case rd.Gy.NO_GUILD:
                                case rd.Gy.NO_USER:
                                case rd.Gy.IS_AFK_CHANNEL:
                                    e = ec.intl.string(ec.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: T, currentEmbeddedActivity: A, channel: u }),
        b = o.useId(),
        L = null != f && f.isLaunching && f.componentId === b,
        R = async () => {
            tt.default.track(ed.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: u?.type,
                is_activity_start: y,
                cta: "Play",
            }),
                y
                    ? await (0, ro.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: d.location,
                          analyticsLocations: r,
                          componentId: b,
                          commandOrigin: rc.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, ra.A)({
                          applicationId: p.applicationId,
                          activityChannelId: i,
                          locationObject: d.location,
                          analyticsLocations: r,
                          componentId: b,
                      });
        },
        k = S.disabled ? ec.intl.string(ec.t.JBnc7N) : ec.intl.string(ec.t.cX9uLZ),
        M = eS(N, () => {
            tt.default.track(ed.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: u?.type,
                cta: "View",
            });
        }),
        P = B.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let D = v.length,
        U = _?.timestamps?.start ?? _?.created_at,
        G = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case ed.$pd.STREAMING:
                    return { text: ec.intl.formatToPlainString(ec.t.tyCw2q, { count: n }), Icon: es.o };
                case ed.$pd.LISTENING:
                    return { text: ec.intl.formatToPlainString(ec.t["2l8yka"], { count: n }), Icon: er.T };
                default:
                    return { text: ec.intl.formatToPlainString(ec.t.yJj035, { count: n }), Icon: ea._ };
            }
        })({ activity: _, activityUsersCount: D }),
        H = [
            {
                label: S.text,
                trackingArea: Q.kY.PLAY,
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: L,
            },
        ];
    return (0, a.jsx)(el, {
        header: ec.intl.string(ec.t.pkq6Vq),
        title: n.name,
        iconSrc: P,
        info: (0, a.jsx)("div", {
            className: rA.QR,
            children: y
                ? (0, a.jsx)(x.E, { variant: "text-xs/medium", color: "none", children: k })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != j &&
                              (0, a.jsxs)("div", {
                                  className: rA.oL,
                                  children: [
                                      null != U &&
                                          (0, a.jsxs)("div", {
                                              className: rA.DT,
                                              children: [
                                                  (0, a.jsx)("div", {
                                                      className: rA.y9,
                                                      children: (0, a.jsx)(G.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, a.jsx)(x.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, a.jsx)(rx, { start: U }),
                                                  }),
                                              ],
                                          }),
                                      (0, a.jsxs)("div", {
                                          className: c()(rA.DT, rA.PK),
                                          children: [
                                              (0, a.jsx)("div", {
                                                  children: (0, a.jsx)(rs.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, a.jsx)(x.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          D > 0 && (0, a.jsx)(em, { activityUsers: v, guildId: l, activityText: G.text }),
                      ],
                  }),
        }),
        actions: H,
        onClickContent: M,
        trackingConfig: {
            id: n.id,
            linkType: $.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: s.id,
            isDeadEnd: y,
        },
    });
});
var rE = n(164664),
    rC = n(439401),
    rI = n(657044),
    rv = n(863574),
    r_ = n(707606),
    rj = n(456412),
    rN = n(993408),
    rT = n(242874),
    ry = n(499454),
    rS = n(75825),
    rb = n(928550),
    rL = n(976860),
    rR = n(780964),
    rk = n(766075),
    rM = n(30793),
    rP = n(189081);
function rD(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, a.jsx)("svg", {
        ...(0, nX.A)(i),
        viewBox: "0 0 136 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsxs)("g", {
            className: n,
            fill: t,
            children: [
                (0, a.jsx)("path", {
                    d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
                    fill: t,
                }),
                (0, a.jsx)("path", {
                    d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
                    fill: t,
                }),
            ],
        }),
    });
}
var rw = n(738533),
    rO = n(45938),
    rU = n(615396),
    rG = n(427262),
    rV = n(936504),
    rB = n(820284),
    rH = n(674378),
    rF = n(598429),
    rY = n(979604);
function rz(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: l,
            disabledVariant: s,
            hideNotLaunchable: r,
            tooltipPosition: o,
            onClick: d,
            className: c,
            source: u,
            hover: m,
            innerClassName: g,
        } = e,
        p = {
            fullWidth: n,
            size: i,
            disabledVariant: s,
            tooltipPosition: o,
            onClick: d,
            className: c,
            hover: m,
            innerClassName: g,
        },
        A = (0, h.bG)([rP.A], () => rP.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, h.bG)([e8.A], () => null != f && !e8.A.didFetchingSkuFail(f));
    return null != A && (0, rH.XZ)(A)
        ? (0, a.jsx)(rY.A, { ...p, playButtonVariant: l, libraryApplication: A, source: u })
        : E
          ? (0, a.jsx)("div", { children: "deprecated!" })
          : (0, a.jsx)(rF.A, { ...p, variant: l, hideNotLaunchable: r, applicationId: t.id });
}
var rW = n(580630);
function rK(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return ec.intl.string(ec.t.RWouSQ);
    if (e.premium && !n) return ec.intl.string(ec.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, rW.$g)(i.amount, i.currency);
        else return ec.intl.string(ec.t.QQsaCc);
    return ec.intl.string(ec.t.RWouSQ);
}
var rJ = n(257727),
    rq =
        (((l = rq || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
let rX = (e) => {
        let { className: t } = e;
        return (0, a.jsxs)("div", {
            className: c()(rJ.nM, t),
            children: [
                (0, a.jsx)(rI._, { size: "md", color: "currentColor", className: rJ.Kk }),
                ec.intl.string(ec.t["7eicAO"]),
            ],
        });
    },
    rZ = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsxs)("div", {
            className: c()(rJ.nM, n),
            children: [(0, a.jsx)(tG.t, { size: "md", color: "currentColor", className: rJ.Kk }), rK(t)],
        });
    },
    rQ = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", { className: c()(rJ.EQ, n), children: t.getDisplaySalePercentage() });
    },
    r$ = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", { className: c()(rJ.I8, n), children: rK(t, !1) });
    },
    r0 = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", { className: n, children: rK(t) });
    },
    r1 = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsxs)("div", {
            className: c()(rJ.nM, n),
            children: [(0, a.jsx)(rQ, { sku: t }), (0, a.jsx)(r$, { sku: t }), (0, a.jsx)(r0, { sku: t })],
        });
    },
    r2 = (e) => {
        let { className: t } = e;
        return (0, a.jsx)("div", { className: t, children: ec.intl.string(ec.t.QQsaCc) });
    };
class r3 extends o.PureComponent {
    static Types = rq;
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
                return (0, a.jsx)(r2, { className: c()(t, n) });
            case 1:
                return (0, a.jsx)(rX, { className: c()(t, n) });
            case 3:
                return (0, a.jsx)(rZ, { sku: i, className: c()(t, n) });
            case 2:
                return (0, a.jsx)(r1, { sku: i, className: c()(t, n) });
            default:
                return (0, a.jsx)(r0, { className: c()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, a.jsx)(r2, { className: t });
            case 3:
                return (0, a.jsx)(rZ, { sku: n, className: c()(rJ.OB, t) });
            case 2:
                return (0, a.jsx)(r1, { sku: n, className: c()(rJ.dk, t) });
            default:
                return (0, a.jsx)(r0, { className: c()(rJ.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, a.jsx)(r2, {});
                break;
            case 2:
                t = (0, a.jsxs)(o.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: rJ.nM,
                            children: [(0, a.jsx)(r0, { sku: i }), (0, a.jsx)(rQ, { sku: i })],
                        }),
                        (0, a.jsx)(r$, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, a.jsx)(r0, { sku: i });
        }
        return (0, a.jsx)("div", { className: c()(rJ.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rJ.Pl);
            case 3:
                return this.renderGeneric(e, rJ.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rJ.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var r4 = n(842983);
let r6 = {
    [ed.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, a.jsx)("svg", {
                ...(0, nX.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, a.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, a.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ec.intl.string(ec.t["0/xHFO"]),
    },
    [ed.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, a.jsx)("svg", {
                ...(0, nX.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, a.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, a.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ec.intl.string(ec.t.E4u4n5),
    },
    [ed.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, a.jsx)("svg", {
                ...(0, nX.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, a.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, a.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ec.intl.string(ec.t.tcawo3),
    },
};
function r5(e) {
    let { operatingSystem: t, className: n } = e,
        i = r6[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, a.jsx)(q.m, { text: i.getLabel(), children: (0, a.jsx)(l, { className: n }) });
}
let r7 = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, a.jsx)("div", {
        className: c()(r4.I, n),
        children: t.map((e) => (0, a.jsx)(r5, { operatingSystem: e, className: c()(r4.A, i) }, e)),
    });
};
var r9 = n(111758);
let r8 = (e) => {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: c()(r9.T, t),
        children: (0, a.jsx)("span", { className: r9.Q, children: ec.intl.string(ec.t["14lP0W"]) }),
    });
};
var ae = n(246337);
let at = (e) => {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: c()(ae.T, t),
        children: (0, a.jsx)("span", { className: ae.Q, children: ec.intl.string(ec.t["8IfYqa"]) }),
    });
};
var an = n(868285),
    ai = n(358618),
    al = n(983851),
    as = n(133296),
    ar = n(607470),
    aa = n(61251);
class ao extends o.Component {
    _animatedValue = new iz.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), iz.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        iz.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, a.jsx)(iz.A.img, {
            className: c()({ [aa.YC]: i }, t),
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
            ? (0, a.jsx)(iz.A.div, { className: c()(aa.gn, e), style: this.getImageStyle(), children: t })
            : (0, a.jsxs)(iz.A.div, {
                  className: c()(l ? aa.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, a.jsx)(t2.y, {
                                className: aa.u1,
                                itemClassName: aa.$N,
                                type: t2.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ad extends o.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = o.createRef();
    videoTimeout = new rl.Ep();
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
                muted: s,
                splashClassName: r,
                splashPlaceholderClassName: d,
                renderMediaOverlay: u,
            } = this.props,
            m = s ? ai._ : al.H;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                nV.Fr
                    ? null
                    : (0, a.jsx)(ar.A, {
                          className: c()(aa.Yi, r),
                          muted: s,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, a.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, a.jsx)(an.F, {
                    children: l && e ? null : (0, a.jsx)(ao, { className: c()(aa.NB, d), src: n, title: i }, 0),
                }),
                (0, a.jsx)(W.D, {
                    className: c()(aa.b4, { [aa.HY]: l && e, [aa.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, a.jsx)(m, { className: aa.i2 }) : null,
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
            { currentIndex: s } = this.state;
        return i
            ? (0, a.jsx)(ao, { className: c()(aa.Yi, l), src: e[s], title: n }, s)
            : (0, a.jsx)(ao, { className: c()(aa.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, a.jsx)(ao, { className: c()(aa.Yi, l), src: n, title: i }, "image")
            : (0, a.jsx)(as.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: aa.mZ,
                  disable: !e,
                  children: (0, a.jsx)(an.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: s, videoLoaded: r } = this.state;
        return n
            ? (0, a.jsx)("div", { className: t })
            : (0, a.jsxs)("figure", {
                  className: c()(aa.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && r)],
              });
    }
}
var ac = n(366523),
    au = n(371794),
    am = n(622413),
    ah = n(174264);
class ag extends o.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: l } = this.props,
            s = (l || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, a.jsxs)("div", {
                  className: ah.ED,
                  children: [
                      (0, a.jsx)(r3, {
                          type: r3.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: s && i ? ah.ae : ah.Ek,
                      }),
                      (0, a.jsx)(r7, { systems: [ed.uje.WINDOWS], className: ah.iD }),
                      s ? (0, a.jsx)("div", { children: "deprecated!" }) : null,
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
            isHorizontal: s,
            storeListing: r,
        } = this.props;
        return (0, lH.bF)(l)
            ? (0, a.jsx)(ac.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: ah.A$,
                  backgroundImageClassName: ah.iZ,
                  foregroundImageClassName: ah.O7,
              })
            : (0, a.jsxs)(o.Fragment, {
                  children: [
                      (0, a.jsx)(ad, {
                          className: c()(ah.H1, { [ah.ZC]: s }),
                          video: null != r.previewVideo ? (0, au.YE)(l.applicationId, r.previewVideo) : void 0,
                          image: null != r.thumbnail ? (0, au.YE)(l.applicationId, r.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ah.ZI,
                          splashPlaceholderClassName: ah.NB,
                      }),
                      l.exclusive
                          ? (0, a.jsx)(at, { className: c()(ah.LJ, { [ah.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, a.jsx)(r8, { className: c()(ah.LJ, { [ah.V9]: e }) })
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
                renderCustomTitle: s,
                renderCustomMedia: r,
                isEmbed: o,
            } = this.props,
            d = o ? rv.ug : am.A;
        return (0, a.jsx)(d, {
            className: i,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != s ? s : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ap = n(981449);
class aA extends o.Component {
    static defaultProps = { renderFallback: ed.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : ed.JJy.APPLICATION_EMBED, object: ed.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, e2.QB)(t);
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
        return (0, a.jsx)("div", {
            className: ap.h,
            children: (0, a.jsx)(J.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: ec.intl.string(ec.t["W+NB90"]),
                onClick: () => {
                    (0, rL.pX)(ed.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: s, renderCustomMedia: r } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > rv.Tm;
        return (0, a.jsx)(ag, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: l,
            renderCustomTagline: s,
            renderCustomMedia: r,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: s } = this.props;
        if (null != s) return (0, a.jsx)("div", { className: ap.i, children: s() });
        if (null == n) return null;
        let r = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(ed.hM6.HIDDEN);
        return (0, a.jsxs)("div", {
            className: ap.i,
            children: [
                !r || o
                    ? this.renderViewInStoreButton()
                    : (0, a.jsx)(rz, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ap.h,
                          source: ed.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, a.jsx)(r3, { type: r3.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            s = n > rv.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, a.jsx)(rv.Wb, { isHorizontal: s })
            : e.productLine === ed.EZt.COLLECTIBLES
              ? (0, a.jsx)(rB.A, { section: ed.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, a.jsx)(rB.A, {
                    section: ed.JJy.APPLICATION_EMBED,
                    children: (0, a.jsx)(rV.N_, {
                        onClick: this.handleLinkClick,
                        to: ed.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let ax = [e8.A, rP.A, te.A];
function af(e) {
    let { skuId: t } = e,
        n = e8.A.get(t),
        i = null != n ? e4.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: e8.A.didFetchingSkuFail(t),
        inLibrary: null != n && rP.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? te.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rP.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let aE = (0, rj.A)((0, r_.A)(aA)),
    aC = h.Ay.connectStores(ax, af)(aE),
    aI = (0, r_.A)(h.Ay.connectStores(ax, af)(aA));
var av = n(576171);
function a_(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, a.jsxs)(W.D, {
        className: av.kP,
        onClick: t,
        children: [
            (0, a.jsx)(rI._, { size: "md", color: "currentColor", className: av.dy }),
            (0, a.jsx)("div", {
                children: n.isHidden() ? ec.intl.string(ec.t.Wi99Ro) : ec.intl.string(ec.t["+tXad7"]),
            }),
        ],
    });
}
class aj extends o.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rv.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === ed.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, rk.openUserSettings)(rR.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? ec.intl.string(ec.t.mT9B49) : ec.intl.string(ec.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, a.jsx)(J.$, {
                  variant: "primary",
                  size: "sm",
                  text: ec.intl.string(ec.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, a.jsx)(J.$, { variant: "primary", size: "sm", text: ec.intl.string(ec.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? ec.intl.string(ec.t.QXgO5w)
            : this.props.isSelfGift
              ? ec.intl.string(ec.t.eEM3dq)
              : ec.intl.string(ec.t.tB8S6u);
    render() {
        return (0, a.jsx)(rv.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class aN extends o.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: ed.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, rL.pX)(ed.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rL.pX)(ed.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, rk.openUserSettings)(rR.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            tt.default.track(ed.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: ed.ZSU.BUTTON_CTA },
            });
        let r = l !== ed.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, ry.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (tt.default.track(ed.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [E.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rw.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, lH.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, lz.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [E.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, rk.openUserSettings)(rR.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(ed.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, a.jsxs)(si.A, {
            justify: si.A.Justify.BETWEEN,
            children: [
                (0, a.jsxs)(si.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, a.jsx)(a_, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, a.jsxs)(si.A, {
                    align: si.A.Align.END,
                    justify: si.A.Justify.END,
                    className: av.yu,
                    direction: si.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, a.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, a.jsx)("div", {
                                  children: ec.intl.format(ec.t.nZBvUR, { hours: e.expiresAt.diff(lo()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? ec.t["4iHwKT"] : ec.t.YeLq88;
        return ec.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(J.$, {
                    variant: "primary",
                    size: "sm",
                    text: ec.intl.string(ec.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let s =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, sd.TW)(n)),
            r = e.redeemed || s || e.isClaimed || !n.verified,
            o = e.redeemed
                ? ec.intl.string(ec.t.BTihou)
                : null != e.giftStyle
                  ? ec.intl.string(ec.t.TiZFqX)
                  : ec.intl.string(ec.t.bUvv1f);
        return (0, a.jsx)("div", {
            className: (0, rN.hU)(e) ? av.UQ : void 0,
            children: (0, a.jsx)(J.$, {
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
        return e === ed.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? ec.intl.formatToPlainString(ec.t.t1SOId, { recipientDisplayName: rG.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? ec.intl.string(ec.t["2PJ1NP"])
                    : ec.intl.string(ec.t.hrnGng)
                : n
                  ? ec.intl.string(ec.t.QLEMld)
                  : ec.intl.string(ec.t.W4DBcy);
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
        if (null == i) return ec.intl.string(ec.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, lH.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? ec.intl.formatToPlainString(ec.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, rN.hU)(e) || (0, lH.bF)(i)
                ? ec.intl.string(ec.t.mVC3Cv)
                : ec.intl.format(ec.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return ec.intl.format(ec.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return ec.intl.string(ec.t.ARWFQX);
        if (!r.verified) return ec.intl.format(ec.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? ec.intl.string(ec.t["lQI+cB"])
                : ec.intl.formatToPlainString(ec.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return ec.intl.string(ec.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? ec.intl.format(ec.t.l3VxgG, { username: rG.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : ec.intl.format(ec.t["9cYrw5"], {
                          username: rG.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? ec.intl.formatToPlainString(ec.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : ec.intl.formatToPlainString(ec.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return ec.intl.string(ec.t.ZTNur7);
            if (null != l) {
                let e = s.interval === sg.WT.MONTH ? ec.t["/RDIEA"] : ec.t["3CX6Ev"];
                return ec.intl.format(e, { username: rG.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === sg.WT.MONTH ? ec.t["2O4lo5"] : ec.t["+XjmsR"];
            return ec.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l
            ? ec.intl.format(ec.t["3HsdQ/"], { username: rG.Ay.getUserTag(l) })
            : ec.intl.string(ec.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = sg.Wx.includes(e.giftStyle),
            i = c()(av.gB, { [av.El]: n, [av.by]: t >= rv.Tm }),
            l = c()({ [av.gc]: n, [av.Ei]: n && t >= rv.Tm, [av.ww]: !n, [av.wy]: !n && t >= rv.Tm });
        return (0, a.jsxs)("div", {
            className: i,
            children: [
                n && (0, a.jsx)(rD, { className: av.nr }),
                null != e.giftStyle &&
                    (0, a.jsx)(rS.A, {
                        defaultAnimationState: e.redeemed ? rT.oA.LOOP : rT.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, a.jsx)(J.$, {
            variant: "primary",
            size: "sm",
            text: ec.intl.string(ec.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, lH.bF)(n);
        return (0, a.jsx)(aI, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: ed.JJy.GIFT_CODE_EMBED,
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
            return (0, a.jsx)(aI, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: ed.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => ec.intl.string(ec.t.X4p5uH),
                renderCustomTagline: () => ec.intl.string(ec.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, a.jsx)(aj, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, a.jsx)(rv.Wb, { isHorizontal: i >= rv.Tm });
        return (0, rN.hU)(e)
            ? (0, a.jsx)("div", { className: av.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let aT = (0, rj.A)((0, r_.A)(aN)),
    ay = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: s,
            } = (0, h.cf)([rM.A], () => {
                let e = rM.A.getError(t);
                return { giftCode: rM.A.get(t), resolved: rM.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            r = (0, h.bG)([V.default], () => (null != i && null != i.userId ? V.default.getUser(i.userId) : null)),
            o = (0, h.bG)([e8.A], () => (null != i ? e8.A.get(i.skuId) : null)),
            d = (0, h.bG)([rP.A], () =>
                null != o && i?.entitlementBranches != null ? rO.YI(i.entitlementBranches, o, rP.A) : null,
            ),
            c = (0, eM.h)(o?.applicationId),
            u = null != o && (0, lH.bF)(o) && i?.redeemed === !0,
            [m] = (0, rb.L)(u ? c?.id : null),
            g = (0, rU.zz)(i?.subscriptionPlanId),
            p = (0, h.bG)([w.default], () => (null != i ? w.default.getId() === i.userId : w.default.getId() === n.id));
        return (0, a.jsx)(aT, {
            ...e,
            skuApplication: c,
            canLaunchRedeemedSlayerGameItem: m,
            giftCode: i,
            resolved: l,
            resolveErrorCode: s,
            gifter: r,
            libraryApplication: d,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: p,
        });
    };
var aS = n(376728),
    ab = n(107123),
    aL = n(698441),
    aR = n(427080),
    ak = n(346542),
    aM = n(665066),
    aP = n(95701),
    aD = n(299091),
    aw = n(860689);
let aO = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aU(e) {
    let { guildId: t, location: n } = e;
    return aO.getCurrentConfig({ guildId: t, location: n });
}
function aG() {
    return (0, a.jsxs)(nB.A, {
        children: [
            (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t["N/g9Z4"]) }),
            (0, a.jsx)(nB.A.Body, { resolving: !0 }),
        ],
    });
}
var aV = n(172799),
    aB = n(718223);
function aH(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, a.jsxs)(
                    "div",
                    {
                        className: aB.MY,
                        children: [
                            (0, a.jsx)("i", { className: aB.QD }),
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                className: aB.U9,
                                color: i,
                                children: ec.intl.format(ec.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            l.push(
                (0, a.jsxs)(
                    "div",
                    {
                        className: aB.MY,
                        children: [
                            (0, a.jsx)("i", { className: aB.o6 }),
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                className: aB.U9,
                                color: i,
                                children: ec.intl.format(ec.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, a.jsx)("div", { className: aB.rc, children: l })
    );
}
function aF(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        s = (0, nj.Ay)(t);
    if (null != t && null != n) {
        let e = (0, np.gU)(t, n);
        return (0, a.jsxs)("div", {
            className: c()(aB.Ix, { [aB.v6]: i }),
            children: [
                null != e ? (0, a.jsx)(e, { className: aB.p, size: "xs", color: "currentColor" }) : null,
                (0, a.jsx)(l8.A, {
                    children: (0, a.jsx)(x.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: ec.intl.format(ec.t["dc+LW4"], { channelName: s ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, a.jsx)("div", {
              className: c()(aB.Ix, { [aB.v6]: i }),
              children: (0, a.jsx)(l8.A, {
                  children: (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: ec.intl.format(ec.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aY(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: s } = e,
        { approximate_member_count: r, approximate_presence_count: d, target_type: c, target_application: u } = i;
    eK()(c === aV.yV.EMBEDDED_APPLICATION && null != u, "invalid application invite");
    let m = o.useCallback(() => {
            tt.default.track(ed.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: u.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, u.id]),
        g = (0, h.bG)([t8.A], () => (null != i.guild ? t8.A.getGuild(i.guild.id) : null), [i]),
        p = (0, eM.A)([u.id])[0],
        A = (0, h.bG)(
            [eO.Ay],
            () => i?.channel != null && eO.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === u.id,
        ),
        x = (0, h.bG)([eO.Ay], () =>
            (i.channel?.id != null ? eO.Ay.getEmbeddedActivitiesForChannel(i.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return u.id === t;
            }),
        ),
        f = O.A.getChannel(i.channel?.id),
        I = (0, h.bG)([e_.A], () => null != f && e_.A.can(ed.xBc.USE_EMBEDDED_ACTIVITIES, f), [f]),
        { analyticsLocations: v } = (0, C.Ay)(E.A.INVITE_EMBED),
        _ = (0, h.yK)(
            [eO.Ay],
            () =>
                null != f
                    ? eO.Ay.getEmbeddedActivitiesForChannel(f.id)
                          .filter((e) => e.applicationId === u.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [f, u.id],
        ),
        j = (0, h.yK)([V.default], () => _.map((e) => V.default.getUser(e)).filter((e) => null != e), [_]),
        N = o.useCallback(() => {
            (0, aS.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, n3._U)(i.code, l.id),
                },
                v,
            ),
                aS.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: s("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, s]),
        T = i.state === ed.elq.ACCEPTING,
        y = null != g;
    if (null == g) {
        if (null == i.guild) return (0, a.jsx)(aG, {});
        g = (0, aw.DY)(i.guild);
    }
    t = y
        ? A
            ? ec.intl.string(ec.t.DPfdsq)
            : x
              ? ec.intl.string(ec.t.sqe0hj)
              : ec.intl.string(ec.t.RscU7I)
        : ec.intl.string(ec.t["2BP08E"]);
    let S = (y && !I) || (y && A);
    return (I || (n = ec.intl.string(ec.t.hHGrWz)), null == i.code || "" === i.code || null == p)
        ? null
        : (0, a.jsx)(C.f5, {
              value: v,
              children: (0, a.jsx)(az, {
                  app: p,
                  activityUsers: j,
                  isMember: y,
                  channel: f,
                  guild: g,
                  message: l,
                  members: r,
                  membersOnline: d,
                  isActivityActive: x,
                  submitting: T,
                  buttonLabel: t,
                  disabled: S,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: m,
              }),
          });
}
function az(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: l,
            guild: s,
            message: r,
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
        C = B.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        I = eS(t),
        v = eE(t),
        _ = n.length,
        j = o.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? Q.kY.PLAY : Q.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, a.jsx)(el, {
        header: t.name,
        title: ec.intl.string(ec.t["7vb6nw"]),
        iconSrc: C,
        ...v,
        onClickBanner: I,
        info: (0, a.jsxs)("div", {
            className: aB.QR,
            children: [
                (0, a.jsx)(aF, { channel: l, guild: s, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, a.jsx)(em, {
                          activityUsers: n,
                          guildId: s.id,
                          activityText: ec.intl.formatToPlainString(ec.t.yJj035, { count: _ }),
                      })
                    : (0, a.jsx)(aH, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: I,
        trackingConfig: {
            id: t.id,
            linkType: $.J.ACTIVITY_INVITE,
            onView: x,
            guildId: s.id,
            channelId: l?.id,
            messageId: r.id,
            isDeadEnd: !u,
        },
    });
}
var aW = n(4274);
function aK(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, h.bG)([w.default], () => w.default.getId()) === t.id
                ? ec.intl.string(ec.t.C89OLE)
                : ec.intl.string(ec.t.YVub5y),
        l = (0, aW.g)(n?.code);
    return (0, a.jsxs)(nB.A, {
        children: [
            (0, a.jsx)(nB.A.Header, { text: i }),
            (0, a.jsxs)(nB.A.Body, {
                children: [
                    (0, a.jsx)(nB.A.Icon, { expired: !0 }),
                    (0, a.jsx)(nB.A.Info, {
                        expired: !0,
                        title: l?.title ?? ec.intl.string(ec.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var aJ = n(308528),
    aq = n(889227);
function aX(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, h.bG)([w.default], () => w.default.getId()),
        s = t.inviter?.id === l,
        r = t.state === ed.elq.ACCEPTING,
        { analyticsLocations: d } = (0, C.Ay)(E.A.INVITE_EMBED),
        c = (0, h.bG)([U.A], () => null != t.inviter && U.A.isFriend(t.inviter?.id)),
        u = o.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != O.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), aJ.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aS.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, n3._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        m = o.useCallback(() => {
            (0, aS.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, n3._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aS.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? u : m,
        p = ec.intl.string(ec.t.ib7Ng1),
        A = "active";
    c
        ? ((p = ec.intl.string(ec.t.xhxnPn)), (A = "secondary"))
        : s && ((p = ec.intl.string(ec.t.ib7Ng1)), (A = "secondary"));
    let x = s ? ec.intl.string(ec.t.eQyu1F) : ec.intl.string(ec.t.PYJHW6),
        f = null != t.inviter ? `${t.inviter.username}` : "",
        I = null != t.inviter ? rG.Ay.getUserTag(t.inviter) : "";
    return (0, a.jsxs)(nB.A, {
        children: [
            (0, a.jsx)(nB.A.Header, { text: x }),
            (0, a.jsxs)(nB.A.Body, {
                children: [
                    (0, a.jsxs)("div", {
                        className: n1.iH,
                        children: [
                            (0, a.jsx)(nB.A.Icon, { user: new aq.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, a.jsx)(nB.A.Info, { title: f, onClick: c ? g : void 0, children: I }),
                        ],
                    }),
                    (0, a.jsx)(J.$, { onClick: g, text: p, loading: r, disabled: s, variant: A }),
                ],
            }),
        ],
    });
}
function aZ(e) {
    let t,
        n,
        { invite: i, message: l, currentUserId: s, onTransitionToInviteChannel: r, onAcceptInstantInvite: d } = e,
        c = s === l.author.id,
        u = i.state === ed.elq.ACCEPTING,
        m = (0, h.bG)([O.A], () => (null != i.channel ? O.A.getChannel(i.channel.id) : null), [i]);
    eK()(null == m || m.isPrivate(), "must be a private channel");
    let { analyticsLocations: g } = (0, C.Ay)(E.A.INVITE_EMBED),
        p = null != m,
        A = o.useCallback(() => {
            let e = "noop";
            p ? (r(), (e = "transition")) : (d(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: i,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: (0, n3._U)(i.code, l.id),
                    },
                    g,
                );
        }, [i, l, g, p, r, d]);
    if (null == m) {
        if (null == i.channel) return (0, a.jsx)(aG, {});
        (m = (0, aP.OY)(i.channel)),
            (n = i.channel?.name),
            (t = null != i.channel && null != i.channel.recipients ? i.channel.recipients : []);
    } else {
        (t = m.recipients.reduce((e, t) => {
            let n = V.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, nj.m1)(m, V.default, U.A));
        let e = V.default.getCurrentUser();
        p && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(rh.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : ec.intl.string(ec.t.LJpTRF));
    let x = ec.intl.string(ec.t.XpeFYr),
        f = "active";
    p && ((x = ec.intl.string(ec.t.cEnaWx)), (f = "secondary"));
    let I = ec.intl.string(ec.t["3p3/BK"]);
    return (
        c && (I = ec.intl.string(ec.t.qmtuXE)),
        (0, a.jsxs)(nB.A, {
            children: [
                (0, a.jsx)(nB.A.Header, { text: I }),
                (0, a.jsxs)(nB.A.Body, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: n1.iH,
                            children: [
                                (0, a.jsx)(nB.A.Icon, { channel: m, onClick: p ? A : void 0 }),
                                (0, a.jsx)(nB.A.Info, {
                                    title: n,
                                    onClick: p ? A : void 0,
                                    children: (0, a.jsx)(nB.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(J.$, { onClick: A, loading: u, disabled: p, variant: f, text: x, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
var aQ = n(821418),
    a$ = n(340837);
let a0 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, m.Lt)(n.getSelfMember(i.id)?.flags ?? 0, a$.D.IS_GUEST)) ||
        (0, m.Lt)(t.flags ?? 0, aQ.Q.IS_GUEST_INVITE)
    );
};
var a1 = n(517905);
function a2(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: s,
            onAcceptInstantInvite: r,
            guild: d,
            invite: c,
            message: u,
            currentUserId: g,
        } = e,
        p = g === u.author.id,
        { channel: A, approximate_member_count: f, approximate_presence_count: I } = c,
        v = c.state === ed.elq.ACCEPTING,
        _ = null != A ? (0, aP.OY)(A) : null,
        j = null != d,
        N = null != _,
        T = null != _ && _.isGuildStageVoice(),
        y = (0, m.Lt)(c.flags ?? 0, aQ.Q.IS_GUEST_INVITE),
        S = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(ed.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, C.Ay)(E.A.INVITE_EMBED);
    (0, tx.A)({
        name: tp.ImpressionNames.INVITE_EMBED,
        type: tp.ImpressionTypes.VIEW,
        properties: {
            invite_code: c.code,
            invite_guild_id: c.guild?.id,
            invite_channel_id: A?.id,
            invite_instance_id: (0, n3._U)(c.code, u.id),
            invite_channel_type: A?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [k, M] = o.useState(!1),
        P = o.useCallback(() => M(!1), []),
        D = o.useRef(null),
        w = (0, h.bG)([iA.Ay], () => a0([iA.Ay], c)),
        O = o.useCallback(() => {
            M(!0), (0, aS.Pq)(L, "show profile", R);
        }, [L, R]),
        U = o.useCallback(() => {
            let e = "noop";
            j ? (s(), (e = "transition")) : (r(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: c,
                        action: e,
                        inviter_id: u.author.id,
                        invite_message_id: u.id,
                        invite_instance_id: (0, n3._U)(c.code, u.id),
                    },
                    R,
                );
        }, [c, u, R, j, s, r]);
    if (null == d) {
        if (null == c.guild) return (0, a.jsx)(aG, {});
        (d = aw.DY(c.guild)).premiumTier = c.guild.premium_tier ?? ed.TVA.NONE;
    }
    let G = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return ec.intl.string(ec.t.N85DCl);
                else if (s) return ec.intl.string(ec.t.TJQcNv);
                else if (l) return ec.intl.string(ec.t.mJyBir);
                else return ec.intl.string(ec.t.lxTgP9);
            else if (r) return ec.intl.string(ec.t.Mnvc3C);
            else if (s) return ec.intl.string(ec.t.FdPNr5);
            else if (l) return ec.intl.string(ec.t.f4gmrf);
            else return ec.intl.string(ec.t.H39rEY);
        return n
            ? i
                ? ec.intl.string(ec.t.UxmnHx)
                : ec.intl.string(ec.t.sigPEf)
            : i
              ? ec.intl.string(ec.t["oU/lsl"])
              : ec.intl.string(ec.t.BoQUFf);
    })({ isVoiceChannel: S, isOwnInvite: p, isGuest: y, isHubGuild: b, isStage: T, isStream: !1 });
    return (
        (i = (0, a.jsxs)("span", {
            className: n1.FA,
            children: [
                (0, a.jsx)(a1.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: D,
                    children: () => (0, a.jsx)(nB.A.GuildName, { guild: d, ref: D }),
                }),
                (0, a.jsx)("span", {
                    className: n1.E3,
                    children: (0, a.jsx)(s4.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        y &&
            (l = (0, a.jsx)(q.m, {
                asContainer: !0,
                text: ec.intl.string(ec.t["/FeTK6"]),
                children: (0, a.jsx)(no.m, { size: "md", color: "currentColor", className: n1.G }),
            })),
        S
            ? ((i = (0, a.jsx)(nB.A.Channel, { channel: _ })),
              (t = (0, a.jsxs)("span", {
                  className: n1.FA,
                  children: [
                      ec.intl.format(ec.t["2wimj5"], { guildName: d.name }),
                      (0, a.jsx)("span", {
                          className: n1.E3,
                          children: (0, a.jsx)(s4.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != f && f >= 5) || (null != I && I > 0)
              ? (t = (0, a.jsx)(nB.A.Data, { members: f, membersOnline: I }))
              : N && (t = (0, a.jsx)(nB.A.Channel, { channel: _, guild: d })),
        (0, a.jsxs)(nB.A, {
            children: [
                (0, a.jsx)(nB.A.GuildSplash, { guild: d }),
                (0, a.jsx)(nB.A.Header, { text: G, extra: l }),
                (0, a.jsxs)(nB.A.Body, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: n1.iH,
                            children: [
                                (0, a.jsx)(nB.A.Icon, { guild: d }),
                                (0, a.jsx)(nB.A.Info, { title: i, onClick: O, children: t }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: n1.UD,
                            children: (0, a.jsx)(J.$, {
                                onClick: U,
                                loading: v,
                                variant: "active",
                                fullWidth: S,
                                disabled: !w,
                                text: S
                                    ? T
                                        ? ec.intl.string(ec.t["7vb2cc"])
                                        : ec.intl.string(ec.t.gpqgah)
                                    : j
                                      ? ec.intl.string(ec.t.cEnaWx)
                                      : ec.intl.string(ec.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(ed.GuildFeatures.HUB) &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { className: n1.me }),
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ec.intl.format(ec.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eJ.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("8516"),
                                                n.e("97804"),
                                                n.e("7265"),
                                                n.e("97641"),
                                                n.e("90496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, a.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var a3 = n(890856),
    a4 = n(9994),
    a6 = n(461888),
    a5 = n(179283),
    a7 = n(123213),
    a9 = n(86376),
    a8 = n(42780),
    oe = n(897288),
    ot = n(14712);
function on(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: s } = e,
        r = o.useRef(null),
        [d, u] = o.useState(!0),
        [m, g] = o.useState(!1),
        p = t.state === ed.elq.ACCEPTING,
        A = (0, h.bG)([X.A], () => X.A.useReducedMotion),
        { analyticsLocations: x } = (0, C.Ay)(E.A.INVITE_EMBED);
    (0, tx.A)({
        name: tp.ImpressionNames.INVITE_EMBED,
        type: tp.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, n3._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: x,
        },
    }),
        o.useLayoutEffect(() => {
            g((r.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let f = (0, a4.oO)(t),
        I = o.useCallback(() => {
            !m || (d && u(!1));
        }, [d, m]),
        v = o.useCallback(() => {
            !m || d || u(!0);
        }, [d, m]),
        _ = o.useMemo(
            () =>
                m && r.current?.clientHeight != null
                    ? {
                          height: d ? 292 : r.current.clientHeight + 36 + 48,
                          transition: A ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [d, m, A],
        );
    return null == f
        ? (0, a.jsx)(aG, {})
        : (0, a.jsxs)(a3.s, {
              className: c()(ot.Gg, { [ot.vk]: m && d }),
              onClick: I,
              style: _,
              "aria-label": ec.intl.string(ec.t.dcl9MQ),
              children: [
                  (0, a.jsxs)("div", {
                      className: ot.uY,
                      ref: r,
                      children: [
                          (0, a.jsx)(a8.J$, { profile: f, className: ot.vK }),
                          (0, a.jsx)(a8.CG, { profile: f }),
                          (0, a.jsx)(a9.A, { profile: f }),
                          (0, a.jsx)(a5.P, { profile: f, className: ot.rb }),
                          (0, a.jsx)(oe.A, {
                              guild: null != t.guild ? (0, aw.DY)(t.guild) : null,
                              roles: t.roles,
                              className: ot.Ei,
                          }),
                      ],
                  }),
                  m && !d
                      ? (0, a.jsx)("div", {
                            className: ot.Se,
                            children: (0, a.jsx)(ik.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: ec.intl.string(ec.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: c()(ot.qr, { [ot.iK]: m }),
                      children: [
                          m && d ? (0, a.jsx)("div", { className: ot.D7 }) : null,
                          (0, a.jsx)("div", {
                              className: c()(ot.z8, { [ot.it]: m && d }),
                              children: (0, a.jsx)("div", {
                                  className: ot.UD,
                                  children: (0, a.jsx)(oi, {
                                      invite: t,
                                      profile: f,
                                      isMemberOfGuild: n,
                                      message: i,
                                      submitting: p,
                                      onTransitionToInviteChannel: l,
                                      onAcceptInstantInvite: s,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function oi(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: s,
            onTransitionToInviteChannel: r,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, a6.Ay)(n, a6.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, C.Ay)(E.A.INVITE_EMBED),
        h = o.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aS.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, n3._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, a.jsx)(a7.Y, {
              guildId: c,
              ctaType: u,
              submitting: s,
              onGoToGuild: r,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var ol = n(414798);
function os(e) {
    let t,
        n,
        i,
        { author: l, banned: s, channelId: r } = e,
        o = (0, h.bG)([w.default], () => w.default.getId()),
        d = rG.Ay.useName(l),
        c = o === l.id,
        u = (0, h.bG)([O.A, e_.A], () => {
            let e = O.A.getChannel(r);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sT.UJ)(e),
                    n = e_.A.can(ed.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return e_.A.can(ed.xBc.SEND_MESSAGES, e);
        });
    return (
        c
            ? ((t = ec.intl.string(ec.t["F/OLvL"])), (i = ec.intl.string(ec.t.C89OLE)))
            : ((i = ec.intl.string(ec.t.YVub5y)),
              s
                  ? (t = ec.intl.string(ec.t["57nBty"]))
                  : null != d && u
                    ? ((t = ec.intl.formatToPlainString(ec.t["9Akp1s"], { username: d })),
                      (n = (0, a.jsx)(J.$, {
                          onClick: function () {
                              let { id: e } = l,
                                  t = `@${rG.Ay.getUserTag(l, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              sm._.dispatchToLastSubscribed(ed.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != r && ol.A.startTyping(r);
                          },
                          text: ec.intl.string(ec.t.P8tvKG),
                      })))
                    : (t = ec.intl.string(ec.t["SMJr+a"]))),
        (0, a.jsxs)(nB.A, {
            children: [
                (0, a.jsx)(nB.A.Header, { text: i }),
                (0, a.jsxs)(nB.A.Body, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: n1.iH,
                            children: [
                                (0, a.jsx)(nB.A.Icon, { expired: !0 }),
                                (0, a.jsx)(nB.A.Info, {
                                    expired: !0,
                                    title: ec.intl.string(ec.t["Jhx/ud"]),
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
var or = n(616356);
function oa(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: l,
            message: s,
            onTransitionToInviteChannel: r,
            onAcceptInstantInvite: d,
        } = e,
        c = l?.id,
        u = (0, h.bG)([G.A], () => G.A.getGuildId()),
        m = (0, h.bG)(
            [or.A],
            () => (null != n && null != n.target_user ? or.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, h.bG)(
            [or.A],
            () => (null != n && null != n.target_user ? or.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, C.Ay)(E.A.INVITE_EMBED);
    (0, tx.A)({
        name: tp.ImpressionNames.INVITE_EMBED,
        type: tp.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, n3._U)(n.code, s.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aV.yV.STREAM && null != n.target_user && null != m,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eK()(null != n, "Invite cannot be null");
    let { target_type: f, target_user: I } = n;
    eK()(f === aV.yV.STREAM && null != I, "invalid streaming invite");
    let v = i === I.id,
        _ = n.state === ed.elq.ACCEPTING,
        j = o.useCallback(() => {
            let e = "noop";
            A ? (r(), (e = "transition")) : (d(), (e = "accept")),
                (0, aS.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: (0, n3._U)(n.code, s.id),
                    },
                    p,
                );
        }, [n, s, p, A, r, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, a.jsx)(aG, {});
        l = (0, aw.DY)(n.guild);
    }
    let T = null != n.channel ? (0, aP.OY)(n.channel) : null,
        y = rG.Ay.getName(I),
        S = A || (!x && N),
        b = ec.intl.string(ec.t.I6JG46),
        L = "active";
    N && !x
        ? ((t = v ? ec.intl.string(ec.t.oBLoZJ) : ec.intl.formatToPlainString(ec.t["0QJmA+"], { name: y })),
          (b = ec.intl.string(ec.t.Wdi5E1)))
        : ((L = "active"),
          A && ((b = ec.intl.string(ec.t.Q1W99y)), (L = "secondary")),
          (t = v ? ec.intl.string(ec.t["4hyaHu"]) : ec.intl.formatToPlainString(ec.t.QmlLEq, { name: y })));
    let R =
        u === l.id && null != T
            ? (0, a.jsx)(nB.A.Channel, { channel: T })
            : ec.intl.formatToPlainString(ec.t.u0vaDE, { guildName: l.name });
    return (0, a.jsxs)(nB.A, {
        children: [
            (0, a.jsx)(nB.A.Header, { text: ec.intl.string(ec.t["wS+5Wb"]) }),
            (0, a.jsxs)(nB.A.Body, {
                children: [
                    (0, a.jsxs)("div", {
                        className: n1.iH,
                        children: [
                            (0, a.jsx)(nB.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, a.jsx)(nB.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, a.jsx)(J.$, { onClick: j, loading: _, disabled: S, variant: L, text: b }),
                ],
            }),
        ],
    });
}
var oo = n(459192),
    od = n(364522),
    oc = n(52074),
    ou = n(725613),
    om = n(85451),
    oh = n(145497),
    og = n(481947),
    op = n(607567),
    oA = n(198183);
function ox(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        s = (0, nj.Ay)(i),
        r = (0, h.bG)([t8.A], () => t8.A.getGuild(i.guild_id), [i.guild_id]),
        { voiceStates: d } = (0, h.cf)(
            [op.Ay],
            () => ({ voiceStates: null != i.guild_id ? op.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        c = o.useMemo(
            () => [...d.filter((e) => e.voiceState.selfStream), ...d.filter((e) => !e.voiceState.selfStream)],
            [d],
        ),
        u = (0, h.bG)([ou.A], () => ou.A.getStartTime(i), [i]);
    o.useEffect(() => {
        null != u || null == i.guild_id || ou.A.hasRequestedStartTimes(i.guild_id) || (0, oc.U)(i.guild_id);
    }, [i, u]);
    let m = o.useRef(null),
        g = o.useRef(null),
        p = o.useCallback(() => {
            let e = m.current,
                t = g.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    o.useLayoutEffect(() => {
        p();
    }, [c, p]);
    let A = o.useCallback(
            (e) => {
                null != m.current && m.current.removeEventListener("scroll", p),
                    (m.current = e),
                    null != e && e.addEventListener("scroll", p);
            },
            [p],
        ),
        { analyticsLocations: f } = (0, C.Ay)(E.A.INVITE_EMBED, E.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        I = (0, n3._U)(t.code, n.id),
        v = d.some((e) => e.voiceState.selfStream);
    (0, tx.A)({
        name: tp.ImpressionNames.VOICE_INVITE_EMBED,
        type: tp.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: I,
            has_active_stream: v,
            location_stack: f,
        },
    });
    let _ = o.useCallback(() => {
            (0, ll.iN)(i.id);
        }, [i.id]),
        j = o.useCallback(() => {
            l(),
                (0, aS.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: I,
                        number_of_users_in_channel: d.length,
                    },
                    f,
                );
        }, [t, n, f, I, d.length, l]);
    return (0, a.jsxs)("div", {
        className: oA.kL,
        children: [
            (0, a.jsxs)("div", {
                className: oA.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: oA.yW,
                        children: [
                            (0, a.jsx)(al.H, {
                                className: oA.p,
                                color: d.length > 0 ? t1.A.colors.TEXT_FEEDBACK_POSITIVE : t1.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, a.jsx)(oo.u, {
                                title: `${r?.name} / ${s}`,
                                body: "",
                                assetSize: 24,
                                asset: null != r ? (0, a.jsx)(oh.Ay, { guild: r, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, a.jsx)(W.D, {
                                    className: oA.HA,
                                    onClick: _,
                                    children: (0, a.jsx)(x.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != u ? (0, a.jsx)(om.z, { entry: { start: u }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            c.length > 0
                ? (0, a.jsxs)("div", {
                      className: oA.Ao,
                      children: [
                          (0, a.jsx)(od.Ip, {
                              ref: A,
                              className: oA.JD,
                              children: c.map((e) =>
                                  (0, a.jsx)(
                                      og.Ay,
                                      {
                                          className: oA.Eq,
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
                          (0, a.jsx)("div", { ref: g, className: oA.wH }),
                      ],
                  })
                : (0, a.jsx)("div", {
                      className: oA.p$,
                      children: (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ec.intl.string(ec.t.zSqdrS),
                      }),
                  }),
            (0, a.jsx)("div", {
                className: oA.TB,
                children: (0, a.jsx)(J.$, {
                    onClick: j,
                    icon: al.H,
                    variant: "active",
                    fullWidth: !0,
                    text: ec.intl.string(ec.t.gpqgah),
                }),
            }),
        ],
    });
}
function of(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        s = t.channel?.id,
        r = (0, h.bG)([O.A, e_.A], () => {
            let e = O.A.getChannel(s);
            return null != e && e_.A.canBasicChannel(ed.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [s]),
        o = (0, h.bG)([t8.A], () => null != t8.A.getGuild(t.guild?.id), [t.guild]);
    return null == r
        ? (0, a.jsx)(on, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, a.jsx)(ox, { invite: t, message: n, channel: r, onTransitionToInviteChannel: i });
}
var oE = n(652896),
    oC = n(834757),
    oI = n(427358),
    ov = n(370714);
function o_(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        s = (0, np.gU)(n, i),
        r = (0, nj.Ay)(n);
    return (0, a.jsxs)(W.D, {
        onClick: l,
        className: c()(ov.UP, t),
        children: [
            null != s &&
                (0, a.jsx)(s, { className: ov.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, a.jsxs)(l8.A, { children: [i.name, " / ", r] }),
            }),
            (0, a.jsx)(ng._, { className: ov.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var oj = n(562153),
    oN = n(713517),
    oT = n(297413),
    oy = n(155775);
function oS(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        s = o.useRef(null);
    return (0, a.jsx)(ip.A, {
        targetElementRef: s,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, a.jsxs)(W.D, {
                ...r,
                innerRef: s,
                className: oy.nM,
                onClick: i,
                children: [
                    (0, a.jsx)(tV.eu, {
                        src: t.getAvatarURL(n, (0, tB.FT)(tB._3.SIZE_24)),
                        className: oy.my,
                        "aria-label": t.username,
                        size: tB._3.SIZE_24,
                    }),
                    (0, a.jsx)(x.E, {
                        className: oy.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, a.jsx)(oT.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var ob = n(581448),
    oL = n(824078);
function oR(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...s } = e,
        r = o.useCallback((e) => (0, a.jsx)(ok, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, a.jsx)(l3.Y, { renderPopout: () => r(i), ...s });
}
function ok(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        s = o.useRef(null),
        { isHoveringOrFocusing: r } = (0, oN.A)(s);
    return (
        o.useEffect(() => {
            l?.(r);
        }, [l, r]),
        (0, a.jsx)("div", {
            ref: s,
            className: c()(oL.popover, ob.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, a.jsx)(od.Ip, {
                className: ob.G,
                children: t.map((e) =>
                    (0, a.jsx)(
                        oS,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: oj.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oM = n(531657);
let oP = { mass: 1, tension: 170, friction: 26 };
function oD(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: s, motion: r } = e,
        d = l.length > 4,
        u = d ? l.slice(0, 3) : l,
        m = d ? l.length - 4 + 1 : 0,
        h = Math.min(d ? u.length + 1 : u.length, 4),
        g = (r?.percentX ?? 0) * 6,
        p = (r?.percentY ?? 0) * 6,
        A = 1 + ((r?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, iW.z)(() => ({ x: 0, y: 0, scale: 1, config: oP }));
    return (
        o.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, a.jsxs)(iY.animated.div, {
            ref: s,
            className: c()(oM.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, iY.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: oM.my,
                            children: (0, a.jsx)(q.m, {
                                text: oj.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, a.jsx)(tV.eu, {
                                    src: (function (e, t, n) {
                                        let i = iA.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, B.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tB._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tB._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tB._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tB._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tB._3.SIZE_48
                                                    : h > 2
                                                      ? tB._3.SIZE_40
                                                      : tB._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                d && (0, a.jsx)(ow, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function ow(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: s,
            shouldShow: r,
            onPopoutHoverOrFocus: d,
        } = (function () {
            let e = o.useRef(null),
                { isHoveringOrFocusing: t } = (0, oN.A)(e),
                [n, i] = o.useState(!1),
                l = t || n,
                [s, r] = o.useState(!1),
                a = o.useRef(null);
            return (
                o.useEffect(
                    () => (l || (a.current = setTimeout(() => r(!1), 300)), () => clearTimeout(a.current)),
                    [l],
                ),
                l && !s && r(!0),
                { triggerRef: e, shouldShow: l || s, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, a.jsx)(oR, {
        targetElementRef: s,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: r,
        onHoverOrFocus: d,
        children: (e) =>
            (0, a.jsx)("div", {
                className: c()(oM.my, oM.k2),
                ref: s,
                ...e,
                children: (0, a.jsx)(x.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var oO = n(692236);
function oU(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: s } = e,
        r = o.useRef(null),
        d = i ?? null;
    null == d && null != t.guild && (d = aw.DY(t.guild));
    let u = null != t.channel ? (0, aP.OY)(t.channel) : null;
    eK()(null != d, "Voice Invite Embed must be used in context of a guild."),
        eK()(null != u, "Voice Invite Embed must be able to resolve an invite channel.");
    let m = (0, h.bG)([e_.A, O.A], () => {
            let e = O.A.getChannel(u.id);
            return null == e || e_.A.canBasicChannel(ed.hVb.VIEW_CHANNEL, e);
        }, [u.id]),
        g = (0, h.bG)([op.Ay], () => (m ? op.Ay.getVoiceStatesForChannelAlt(u.id, d.id) : []), [u.id, d.id, m]),
        { label: p, sublabel: A } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? ec.intl.string(ec.t.DVDvCD) : ec.intl.string(ec.t.TY77rq),
                    sublabel: ec.intl.string(ec.t.wM2WTM),
                };
            let o = r ? ec.t["2RWMFV"] : ec.t.IWXzHV,
                d = r ? ec.t.Da7tZx : ec.t["3VbQvv"];
            return { label: l ? ec.intl.format(o, { othersCount: a }) : ec.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, h.bG)([w.default], () => w.default.getId()), author: n.author, voiceStates: g }),
        f = (0, h.bG)([t8.A], () => null != t8.A.getGuild(d.id), [d.id]),
        I = (0, h.bG)([ej.A], () => ej.A.getVoiceChannelId() === u.id, [u.id]),
        v = (0, h.bG)([iA.Ay], () => a0([iA.Ay], t), [t]),
        _ = t.state === ed.elq.ACCEPTING,
        { analyticsLocations: j } = (0, C.Ay)(E.A.INVITE_EMBED),
        N = (0, n3._U)(t.code, n.id),
        T = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, h.bG)([or.A, oI.A], () => {
                if ((0, ak.G4)(t) && null != t.target_user) {
                    let e = or.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = or.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = oI.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (oI.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = or.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: g, guildId: d.id, channelId: u.id }),
        y = (0, oC.AO)(T),
        S = null != T,
        b = o.useCallback(() => {
            let e = f ? "transition" : "accept";
            f ? l() : s(),
                (0, aS.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: y?.id ?? void 0,
                        stream_key: null != T ? (0, oE._z)(T) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                );
        }, [t, n, j, N, f, y, T, g.length, l, s]),
        L = o.useCallback(() => {
            f ? (0, ll.iN)(u.id) : s({ autoJoin: !1 }),
                tt.default.track(ed.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: d.id,
                    invite_channel_id: u.id,
                    invite_instance_id: N,
                    is_member: f,
                    application_id: y?.id ?? null,
                    stream_key: null != T ? (0, oE._z)(T) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                });
        }, [u.id, d.id, t.code, N, f, y, T, g.length, j, s]);
    (0, tx.A)({
        name: tp.ImpressionNames.VOICE_INVITE_EMBED,
        type: tp.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: d.id,
            invite_channel_id: u.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, h.bG)([X.A], () => X.A.useReducedMotion),
        k = o.useRef(null),
        [M, P] = o.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        D = (0, h.bG)([oI.A], () => {
            let e = g.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = oI.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (oI.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [g, n.author.id]),
        U = o.useMemo(() => tO().throttle(P, 20), [P]);
    o.useEffect(() => () => U.cancel(), [U]);
    let G = o.useCallback(
            (e) => {
                if (R) return;
                let t = k.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = r.current?.getBoundingClientRect();
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
        V = o.useCallback(() => {
            U.cancel(), P({ percentX: 0, percentY: 0, proximity: 0 });
        }, [U]);
    return (0, a.jsxs)("div", {
        ref: k,
        className: oO.kL,
        onMouseMove: G,
        onMouseLeave: V,
        children: [
            (0, a.jsx)("div", { className: oO.ys }),
            (0, a.jsx)("div", { className: oO.r$, style: { "--custom-number-of-dots": 20 } }),
            (0, a.jsxs)("div", {
                className: oO.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: c()(oO.Qs, { [oO.tE]: 0 === D.length }),
                        children: [
                            (0, a.jsx)(o_, { channel: u, guild: d, onClick: L }),
                            (0, a.jsxs)("div", {
                                className: oO.WD,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "text-md/medium",
                                        children: (0, a.jsx)(l8.A, { lineClamp: 3, delay: 150, children: p }),
                                    }),
                                    null != A
                                        ? (0, a.jsx)(x.E, {
                                              variant: "text-sm/normal",
                                              className: oO.$B,
                                              children: (0, a.jsx)(l8.A, { delay: 150, children: A }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    D.length > 0
                        ? (0, a.jsx)("div", {
                              className: oO.RE,
                              children: (0, a.jsx)(oD, {
                                  ref: r,
                                  guildId: d.id,
                                  channelId: u.id,
                                  members: D,
                                  motion: M,
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: oO.xk,
                children: (0, a.jsx)(J.$, {
                    onClick: b,
                    loading: _,
                    variant: I ? "secondary" : "active",
                    fullWidth: !0,
                    disabled: !v,
                    text: I ? ec.intl.string(ec.t["3xjX0U"]) : ec.intl.string(ec.t.gpqgah),
                }),
            }),
        ],
    });
}
function oG(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: s } = (0, h.cf)(
            [aD.A],
            () => ({ invite: aD.A.getInvite(t), inviteError: aD.A.getInviteError(t) }),
            [t],
        ),
        r = null == l,
        d = (0, n3._U)(t, n.id);
    o.useEffect(() => {
        r && aS.Ay.resolveInvite(t, void 0, { inviteInstanceId: d });
    }, [t, r, d]);
    let c = l ?? { state: ed.elq.RESOLVING, code: "" },
        { analyticsLocations: u } = (0, C.Ay)(),
        m = (0, h.bG)([t8.A], () => (l?.guild != null ? t8.A.getGuild(l.guild.id) : null), [l]),
        g = (0, h.bG)([O.A, e_.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = O.A.getChannel(e);
            return null != t && e_.A.canBasicChannel(ed.hVb.VIEW_CHANNEL, t);
        }, [l]),
        p = (0, h.bG)([w.default], () => w.default.getId()),
        A = (0, h.bG)([aL.Ay], () => aL.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]),
        x = () => {
            null != c.channel && aS.Ay.transitionToInviteSync(c);
        },
        f = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == m && l?.guild != null ? aw.DY(l.guild) : m;
            (0, aM.g)({ guild: n, isMember: null != m, analyticsLocations: u }) === aM.W.PROCEED &&
                aS.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        E = (0, a.jsx)(a2, {
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: f,
            currentUserId: p,
            guild: m,
            invite: c,
            message: n,
        });
    switch (c.state) {
        case ed.elq.RESOLVING:
            E = (0, a.jsx)(aG, {});
            break;
        case ed.elq.EXPIRED:
        case ed.elq.BANNED:
            E = (0, a.jsx)(os, { banned: c.state === ed.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case ed.elq.ERROR:
            E = (0, a.jsx)(aK, { author: n.author, inviteError: s });
            break;
        default:
            switch ((0, ak.On)(c)) {
                case ak.Xd.GROUP_DM:
                    E = (0, a.jsx)(aZ, {
                        onTransitionToInviteChannel: x,
                        onAcceptInstantInvite: f,
                        currentUserId: p,
                        invite: c,
                        message: n,
                    });
                    break;
                case ak.Xd.FRIEND:
                    E = (0, a.jsx)(aX, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, ak.G4)(c)) {
                        if (null != c.channel && (0, aP.OY)(c.channel).isGuildVoice() && null != c.guild) {
                            let e = aU({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id });
                            if (g)
                                if (e.enabled) {
                                    E = (0, a.jsx)(of, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: f,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    E = (0, a.jsx)(oU, {
                                        onTransitionToInviteChannel: x,
                                        onAcceptInstantInvite: f,
                                        guild: m,
                                        invite: c,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        E = (0, a.jsx)(oa, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: f,
                            currentUserId: p,
                            message: n,
                            guild: m,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, ak.ly)(c)) {
                        E = (0, a.jsx)(aR.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: f,
                            onTransitionToInviteChannel: x,
                        });
                        break;
                    }
                    if ((0, ak.oK)(c)) {
                        E = (0, a.jsx)(aY, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, aP.OY)(c.channel).isGuildVoice() && null != c.guild) {
                        let e = aU({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id });
                        if (g)
                            if (e.enabled) {
                                E = (0, a.jsx)(of, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: f,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            } else {
                                E = (0, a.jsx)(oU, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: f,
                                    guild: m,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, ab.v)(c) &&
                        (E = (0, a.jsx)(on, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: f,
                            isMemberOfGuild: null != m,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, a.jsx)(rB.A, { section: ed.JJy.INVITE_LINK, children: E });
}
var oV = n(266620),
    oB = n(860227),
    oH = n(853811),
    oF = n(381438),
    oY =
        (((s = {}).DISPLAY = "display"),
        (s.BLOCK_UNDERAGE = "block_underage"),
        (s.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        s),
    oz = n(783198);
function oW(e, t, n) {
    switch (t) {
        case ed.xL.LISTEN:
            return ec.intl.formatToPlainString(ec.t["/8czH4"], { name: e });
        case ed.xL.WATCH:
            return ec.intl.formatToPlainString(ec.t.BBJXVk, { name: e });
        case ed.xL.JOIN:
            return n ? void 0 : ec.intl.string(ec.t.pkq6Vq);
        case ed.xL.STREAM_REQUEST:
            return ec.intl.string(oz.default.DKHhec);
        case ed.xL.JOIN_REQUEST:
        default:
            return ec.intl.string(ec.t.Ckxb6j);
    }
}
function oK(e, t, n) {
    return e.author.id === n
        ? ec.intl.string(oz.default["8B3U5O"])
        : ec.intl.formatToPlainString(oz.default["d/qbC0"], { username: (0, oj.mG)(t.guild_id, t.id, e.author) });
}
function oJ(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = V.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? ec.intl.formatToPlainString(ec.t.JddpN2, { username: e.globalName, appName: t })
                    : ec.intl.formatToPlainString(ec.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return l
            ? ec.intl.formatToPlainString(ec.t["2N1kNS"], { appName: t })
            : ec.intl.formatToPlainString(ec.t.IA6uDV, { appName: t });
    }
    return l
        ? ec.intl.formatToPlainString(ec.t.XE8axA, { username: e.author.globalName, appName: t })
        : ec.intl.formatToPlainString(ec.t.hgcjOn, { username: e.author.globalName, appName: t });
}
var oq = n(952818),
    oX = n(560595),
    oZ = n(760751),
    oQ = n(763827),
    o$ = n(723702),
    o0 = n(820672);
function o1(e) {
    let { currentUserId: t, message: i, application: l, channel: s, analyticsLocations: r, onView: o } = e,
        { staticBannerSrc: d, videoBannerSrc: c, bannerAspectRatio: u } = eE(l),
        m = B.Ay.getApplicationIconURL({ id: l.id, icon: l.icon }),
        g = (0, h.bG)([oq.Ay, oZ.A], () =>
            oq.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === l.id) return !0;
                let n = oZ.A.getGameByApplication(l);
                return null != n && t === n.id;
            }),
        ),
        p = (0, h.bG)([or.A], () => or.A.getCurrentUserActiveStream()),
        A = (0, h.bG)([oQ.A], () => oQ.A.getChannelId()),
        x = sR.default.extractTimestamp(i.id) + o0.M < Date.now(),
        f = (0, a.jsx)(a.Fragment, { children: oK(i, s, t) }),
        { analyticsLocations: I } = (0, C.Ay)(r, E.A.REQUEST_TO_STREAM_INVITE_EMBED),
        v = ec.intl.string(oz.default["5+172e"]),
        _ = !1;
    return (
        x
            ? ((v = ec.intl.string(oz.default.u4QmWl)), (_ = !0))
            : null != p
              ? ((v = ec.intl.string(oz.default.P0wwmM)), (_ = !0))
              : A !== s.id
                ? ((v = ec.intl.string(oz.default.qRXats)), (_ = !0))
                : null == g && ((v = ec.intl.string(oz.default["43zohO"])), (_ = !0)),
        (0, a.jsx)(el, {
            header: ec.intl.string(oz.default.nAyuPp),
            title: l.name,
            staticBannerSrc: d,
            videoBannerSrc: c,
            bannerAspectRatio: u,
            iconSrc: m ?? void 0,
            info: f,
            actions:
                i.author.id === t
                    ? []
                    : [
                          {
                              label: v,
                              trackingArea: Q.kY.STREAM,
                              disabled: _,
                              onClick: () => {
                                  null != g &&
                                      ((0, o$.isWindows)()
                                          ? (0, oX.A)(g.pid)
                                          : (0, eJ.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("8516"),
                                                    n.e("17918"),
                                                    n.e("76171"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("6809"),
                                                    n.e("44801"),
                                                    n.e("44727"),
                                                    n.e("25241"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("82001"),
                                                    n.e("91782"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 266536));
                                                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: I });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: l.id,
                linkType: $.J.REQUEST_TO_STREAM,
                guildId: s.guild_id,
                channelId: s.id,
                messageId: i.id,
                onView: o,
                isDeadEnd: x,
            },
        })
    );
}
var o2 = n(666176),
    o3 = n(629016),
    o4 = n(480595),
    o6 = n(461213),
    o5 = n(454292);
function o7(e) {
    return e.activity?.type === ed.xL.JOIN_REQUEST;
}
var o9 = n(125017),
    o8 = n(554146),
    de = n(43105),
    dt = n(414499),
    dn = n(116833),
    di = n(945810);
let dl = (0, di.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    ds = new Set(["1443349464290168976", "1443350165678198935", "1443033465766281327"]),
    dr = (0, di.mj)({
        name: "2026-04-require-account-link-game-invite",
        kind: "user",
        defaultConfig: { requireAccountLink: !1, requireGameLaunch: !1 },
        variations: {
            0: { requireAccountLink: !1, requireGameLaunch: !1 },
            1: { requireAccountLink: !0, requireGameLaunch: !1 },
            2: { requireAccountLink: !1, requireGameLaunch: !0 },
            3: { requireAccountLink: !0, requireGameLaunch: !0 },
        },
    });
var da = n(475743),
    dd = n(942370),
    dc = n(311350);
let du = "in-game-auth-check-modal";
var dm = n(46225),
    dh = n(379848),
    dg = n(409626),
    dp = n(692969),
    dA = n(232835),
    dx = n(970928),
    df = n(134861),
    dE = n(528767),
    dC = n(574381),
    dI = n(182892);
function dv(e) {
    if (null == e) return null;
    let t = e.application_id;
    if (null == t || !(0, m.Lt)(e.flags ?? 0, ed.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
    let n = dE.A.getRemoteApplicationActivity(t);
    return null == n ||
        (0, dI.e)(n) ||
        (null != n.application_id &&
            (df.A.isConnected(n.application_id) ||
                (function (e) {
                    let { platform: t } = e;
                    return (0, dC.m0)() ? t === ed.yTV.ANDROID : !!(0, dC.un)() && t === ed.yTV.IOS;
                })(n)))
        ? null
        : (0, m.Lt)(n.flags ?? 0, ed.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
          ? (n.platform ?? null)
          : null;
}
let d_ = 2 * sJ.A.Millis.HOUR;
function dj(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        l = null != i && e.party?.id !== i,
        s = sR.default.extractTimestamp(t.id) + d_ < Date.now(),
        r = null != e.application_id && e.application_id !== n;
    return !l && !s && !r;
}
var dN = n(737393),
    dT = n(835517),
    dy = n(635377);
let dS = new (n.n(dy)())({ max: 500 });
class db extends h.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return dS.get(t);
    }
}
let dL = new db(tN.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (dS.get(t) === n) return !1;
        dS.set(t, n);
    },
});
var dR = n(141628),
    dk = n(780907);
function dM(e, t) {
    (0, tx.A)(
        { name: tp.ImpressionNames.CLOUD_PLAY_CTA, type: tp.ImpressionTypes.VIEW, properties: { location_stack: t } },
        { disableTrack: !e },
    );
}
var dP = n(193018);
function dD(e) {
    let { applicationName: t, iconSrc: n, viewAction: i } = e,
        { primaryColor: l, secondaryColor: s } = (0, Z.A)(n),
        r = `linear-gradient(45deg, ${l}, ${s})`,
        o = (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "none", children: t }),
        d = null == i ? o : (0, a.jsx)(W.D, { onClick: i, className: dP.Qi, children: o });
    return (0, a.jsxs)("div", {
        className: dP.Xy,
        style: { background: r },
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: dP.xn,
                children: ec.intl.string(ec.t.pkq6Vq),
            }),
            (0, a.jsxs)("div", {
                className: dP.fi,
                children: [
                    null != n ? (0, a.jsx)("img", { className: dP.V$, src: n, alt: "" }) : null,
                    (0, a.jsxs)("div", {
                        className: dP.Cr,
                        children: [
                            d,
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: dP.Jl,
                                children: ec.intl.string(ec.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function dw(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: l,
            header: s,
            currentUserId: r,
            launchableAppId: d,
            isEmbeddedApplication: c,
            tryWithGdnAction: u,
            staticBannerSrc: m,
            onClickContent: g,
            iconSrc: p,
            onView: A,
            presenceActivity: f,
            analyticsLocations: E,
            showAuthButton: C,
            requireAccountLink: I,
            startAuthorization: v,
            accountLinkButtonRef: _,
            renderAccountLinkUpsell: j,
        } = e,
        N = (0, h.bG)([dA.A], () => dA.A.getMessages(l.id)),
        { actions: T, hasAccountLinkButton: y } = o.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (I && null != d
                    ? ((e = [
                          {
                              label: ec.intl.string(ec.t.lw71Nf),
                              trackingArea: Q.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  v({ analyticsLocations: E });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != d
                      ? (e = [
                            {
                                label: ec.intl.string(ec.t["s+J8Dl"]),
                                trackingArea: Q.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    dk.Ay.launch({ applicationId: d, embedded: c });
                                },
                            },
                        ])
                      : null != u && ((e = [u]), (i = !1)),
                e.length > 0)
            ) {
                var s, r;
                if (
                    ((s = t.id),
                    (r = n.id),
                    N.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === r &&
                            e.activity.type === ed.xL.JOIN &&
                            !dj(f, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                C &&
                    i &&
                    (e.push({
                        label: ec.intl.string(ec.t.lw71Nf),
                        trackingArea: Q.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            v({ analyticsLocations: E });
                        },
                        icon: dR.A,
                        iconButton: !0,
                        buttonRef: _,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [I, c, d, u, N, f, n.id, t.id, C, v, E, _]);
    dM(
        T.some((e) => e.trackingArea === Q.kY.CLOUD_PLAY),
        E,
    );
    let S = T.length > 0,
        b = o.useMemo(
            () =>
                (0, a.jsx)(x.E, {
                    variant: "text-xs/medium",
                    className: dP.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (function (e, t, n, i, l) {
                        switch (e.activity?.type) {
                            case ed.xL.LISTEN:
                            case ed.xL.WATCH:
                            case ed.xL.JOIN:
                                return ec.intl.string(l ? ec.t.x1UXGR : ec.t["Ek+51n"]);
                            case ed.xL.STREAM_REQUEST:
                                return oK(e, n, i);
                            case ed.xL.JOIN_REQUEST:
                            default:
                                return oJ(e, t, n, i, !0);
                        }
                    })(t, i, l, r, S),
                }),
            [t, i, l, r, S],
        );
    return 0 === T.length
        ? (0, a.jsx)(dD, { applicationName: i, iconSrc: p, viewAction: g })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(el, {
                      header: s,
                      title: i,
                      staticBannerSrc: m,
                      onClickBanner: g,
                      bannerAspectRatio: en.ACTIVITY,
                      iconSrc: p ?? void 0,
                      info: b,
                      actions: T,
                      primaryActionFirst: !0,
                      onClickContent: g,
                      trackingConfig: {
                          id: n.id,
                          linkType: $.J.RICH_PRESENCE_INVITE,
                          onView: A,
                          referrerId: t.author.id,
                          guildId: l.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  y ? j() : null,
              ],
          });
}
var dO = n(738678),
    dU = n(27989),
    dG = n(646270),
    dV = n(610509),
    dB = n(22363),
    dH = n(802516),
    dF = n(31300),
    dY = n(308368),
    dz = n(729937),
    dW = n(689168),
    dK = n(206589),
    dJ = n(55730),
    dq = n(287613),
    dX = n(702631),
    dZ = n(946255),
    dQ =
        (((r = {}).DESKTOP = "desktop"),
        (r.MOBILE = "mobile"),
        (r.ANDROID = "android"),
        (r.IOS = "ios"),
        (r.PLAYSTATION = "playstation"),
        (r.XBOX = "xbox"),
        (r.VR = "vr"),
        r);
ed.yTV.DESKTOP,
    ed.yTV.ANDROID,
    ed.yTV.IOS,
    ed.yTV.XBOX,
    ed.yTV.PS4,
    ed.yTV.PS5,
    ed.yTV.SAMSUNG,
    ed.yTV.EMBEDDED,
    ed.yTV.META_QUEST;
let d$ = [],
    d0 = (e) => {
        let { width: t, height: n, color: i } = e;
        return (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            viewBox: "0 0 15 9",
            fill: "none",
            children: [
                (0, a.jsx)("path", {
                    fill: i,
                    d: "M14.41 7.85a6.97 6.97 0 0 0-1.983-3.898 7.003 7.003 0 0 0-1.234-.98l.008-.013.421-.727.412-.71.295-.51a.64.64 0 0 0-1.105-.643l-.296.51-.411.71-.422.728-.046.08-.063-.025a6.969 6.969 0 0 0-2.562-.457 6.972 6.972 0 0 0-2.47.477l-.042-.075-.421-.727-.412-.71-.296-.51a.638.638 0 1 0-1.105.642l.295.51.412.71.421.728.003.006a7.027 7.027 0 0 0-2.52 2.718 6.972 6.972 0 0 0-.748 2.473h13.908a7.015 7.015 0 0 0-.04-.307Z",
                }),
                (0, a.jsx)("path", {
                    fill: "#202124",
                    d: "M11.113 6.232c.278-.185.319-.614.09-.958-.228-.344-.639-.472-.917-.286-.278.185-.319.614-.09.957.228.344.639.472.917.287Zm-6.306-.286c.228-.343.188-.772-.09-.957-.279-.186-.69-.057-.918.286-.228.344-.188.773.09.958.279.185.69.057.918-.287Z",
                }),
            ],
        });
    };
function d1(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        l = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return o.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            s = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? d$
                            : (l.has(ed.yTV.ANDROID) && l.has(ed.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(ed.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(ed.yTV.IOS) && s.push("ios"),
                              (l.has(ed.yTV.PS4) || l.has(ed.yTV.PS5)) && s.push("playstation"),
                              l.has(ed.yTV.XBOX) && s.push("xbox"),
                              l.has(ed.yTV.DESKTOP) && s.push("desktop"),
                              l.has(ed.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: ed.yTV.DESKTOP, isGameLaunchable: i }),
        s = o.useMemo(
            () =>
                l
                    .map((e) => {
                        switch (e) {
                            case dQ.MOBILE:
                                return (0, a.jsx)(dG.u, { size: "xxs", color: "currentColor" });
                            case dQ.ANDROID:
                                return (0, a.jsx)(d0, { width: dU.E.xxs, height: dU.E.xxs, color: "currentColor" });
                            case dQ.IOS:
                                return (0, a.jsx)(dV.z, { size: "xxs", color: "currentColor" });
                            case dQ.PLAYSTATION:
                                return (0, a.jsx)(dB.X, { size: "xxs", color: "currentColor" });
                            case dQ.XBOX:
                                return (0, a.jsx)(dH.Y, { size: "xxs", color: "currentColor" });
                            case dQ.VR:
                                return (0, a.jsx)(dO.G, { size: "xxs", color: "currentColor" });
                            case dQ.DESKTOP:
                                return (0, a.jsx)(dF.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(rh.Vq),
            [l],
        );
    if (!(null != n || s.length > 0)) return null;
    let r =
        null != n
            ? (function (e) {
                  switch (e) {
                      case ed.yTV.DESKTOP:
                          return ec.intl.string(ec.t.aqN8U9);
                      case ed.yTV.IOS:
                          return ec.intl.string(ec.t.CyQ5ia);
                      case ed.yTV.ANDROID:
                          return ec.intl.string(ec.t.fMs6uW);
                      case ed.yTV.XBOX:
                          return ec.intl.string(ec.t.o0hjdt);
                      case ed.yTV.PS4:
                      case ed.yTV.PS5:
                          return ec.intl.string(ec.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : ec.intl.string(ec.t["4dGUP0"]);
    return (0, a.jsxs)("div", {
        className: dP.qr,
        children: [
            (0, a.jsx)("div", {
                className: dP.E6,
                children: s.map((e, t) => (0, a.jsx)("div", { className: dP.F2, children: e }, t)),
            }),
            (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", className: dP.kB, children: r }),
        ],
    });
}
function d2(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: l,
            header: s,
            currentUserId: r,
            launchableAppId: d,
            isEmbeddedApplication: c,
            tryWithGdnAction: u,
            staticBannerSrc: m,
            onClickContent: g,
            iconSrc: p,
            onView: A,
            presenceActivity: f,
            currentUserPresenceActivity: E,
            hideParty: C,
            partyStatusElement: I,
            analyticsLocations: v,
            showAuthButton: j,
            requireAccountLink: T,
            requireGameLaunch: y,
            canPromptAuth: S,
            startAuthorization: b,
            accountLinkButtonRef: L,
            renderAccountLinkUpsell: k,
        } = e,
        D = f?.timestamps?.start ?? f?.created_at,
        w = o.useMemo(
            () =>
                null != D
                    ? (0, a.jsxs)("div", {
                          className: dP.Ym,
                          children: [
                              (0, a.jsx)(ea._, { size: "xxs", color: "currentColor" }),
                              (0, a.jsx)(om.z, {
                                  entry: { start: D, end: f?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [D, f?.timestamps?.end],
        ),
        O = o7(t),
        U = (0, P.s)(n.id),
        G = o.useMemo(
            () =>
                U.some((e) => (0, R.CZ)(e) === _.m.GLOBAL)
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(N.Y, { size: "xxs", color: "currentColor" }),
                              ec.intl.string(ec.t.TsWCdW),
                          ],
                      })
                    : null,
            [U],
        ),
        V = o.useMemo(
            () =>
                (0, a.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: dP.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [O ? oJ(t, i, l, r, !1) : w, O ? null : G],
                }),
            [O, t, i, l, r, w, G],
        ),
        B = o.useMemo(() => {
            let e = f?.details;
            return null == e || "" === e
                ? null
                : (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [f?.details]),
        H = o.useMemo(
            () => (0, a.jsxs)("div", { className: dP.pq, children: [B, V, C || O ? null : I] }),
            [V, C, O, I, B],
        ),
        F = !!d,
        Y = (0, M.x)(n),
        { canJoin: z, remoteJoinPlatform: W } = (function (e) {
            let {
                presenceActivity: t,
                currentUserPresenceActivity: n,
                currentUserId: i,
                message: l,
                application: s,
                isEmbeddedApplication: r,
                isFrameApplication: a,
                isGameLaunchable: o,
            } = e;
            if (l.author.id === i || !dj(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, o9._)(t);
            if (!(0, dq.A)(d) || (0, dX.U)(d) || (0, dK.w)(n, t) || o7(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === ed.xL.JOIN && null != t) {
                let e = dv(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, dJ.A)(t, ed.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, o$.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: f,
            currentUserPresenceActivity: E,
            currentUserId: r,
            message: t,
            application: n,
            isEmbeddedApplication: c,
            isFrameApplication: Y,
            isGameLaunchable: F,
        }),
        K = !(null == f || !dj(f, t, n.id) || !(0, dJ.A)(f, ed.jUm.SYNC) || !o$.isPlatformEmbedded || (0, dK.w)(E, f)),
        J = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !dj(e, t, n.id) ||
                t.activity?.type !== ed.xL.JOIN_REQUEST ||
                !(0, dJ.A)(e, ed.jUm.JOIN)
            )
                return !1;
            let l = (0, o9._)(e);
            return !(!(0, dq.A)(l) || (0, dX.U)(l));
        })(f, t, n, r),
        q = (0, dK.w)(E, f),
        X = null != f && (0, dJ.A)(f, ed.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        Z = (0, h.bG)(
            [dW.A],
            () =>
                null != f && null != f.application_id && dW.A.getState(f.application_id, ed.xL.JOIN) === ed.eAD.LOADING,
        ),
        { actions: ee, hasAccountLinkButton: et } = o.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            z && T
                ? ((e = {
                      label: ec.intl.string(ec.t.lw71Nf),
                      trackingArea: Q.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          b({ analyticsLocations: v });
                      },
                  }),
                  (n = !1))
                : z && y
                  ? ((e = {
                        label: ec.intl.string(ec.t["nIG+xx"]),
                        trackingArea: Q.kY.PLAY,
                        onClick: () => {},
                        disabled: !0,
                    }),
                    (n = !1))
                  : z
                    ? (e = {
                          label: ec.intl.string(ec.t.VJlc0S),
                          trackingArea: Q.kY.JOIN,
                          submitting: Z,
                          onClick: () => {
                              dk.Ay.join({
                                  userId: t.author.id,
                                  sessionId: f.session_id,
                                  applicationId: f.application_id,
                                  channelId: l.id,
                                  messageId: t.id,
                                  source: ed.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: v,
                                  embedded: (0, dJ.A)(f, ed.jUm.EMBEDDED),
                                  remotePartyId: null != W ? f.party?.id : void 0,
                              }),
                                  (0, dZ.A)({
                                      type: ed.UqL.JOIN,
                                      source: ed.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: l.guild_id,
                                      channelId: l.id,
                                      applicationId: f.application_id,
                                      partyId: f.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: v,
                                      remoteJoinPlatform: W,
                                  });
                          },
                      })
                    : X && S
                      ? ((e = {
                            label: ec.intl.string(ec.t.lw71Nf),
                            trackingArea: Q.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                b({ analyticsLocations: v });
                            },
                        }),
                        (n = !1))
                      : K
                        ? ((e = {
                              label: ec.intl.string(ec.t.VJlc0S),
                              trackingArea: Q.kY.SYNC,
                              onClick: () => {
                                  null != f && dz.OH(f, t.author.id);
                              },
                          }),
                          (n = !1))
                        : J
                          ? (e = {
                                label: ec.intl.string(ec.t["hC/Zey"]),
                                trackingArea: Q.kY.INVITE,
                                onClick: () => {
                                    null != f &&
                                        dY.A.sendActivityInvite({
                                            type: ed.xL.JOIN,
                                            channelId: l.id,
                                            activity: f,
                                            location: ed.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === r,
                                disabledReason: t.author.id === r ? ec.intl.string(ec.t.IBl8ID) : void 0,
                            })
                          : q
                            ? (e = {
                                  label: ec.intl.string(ec.t.KC26NR),
                                  trackingArea: Q.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != u && ((e = u), (n = !1));
            let s = [];
            return (
                null != e &&
                    (s.push(e),
                    j &&
                        n &&
                        (s.push({
                            label: ec.intl.string(ec.t.lw71Nf),
                            trackingArea: Q.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                b({ analyticsLocations: v });
                            },
                            icon: dR.A,
                            iconButton: !0,
                            buttonRef: L,
                        }),
                        (i = !0))),
                { actions: s, hasAccountLinkButton: i }
            );
        }, [z, T, y, K, J, q, u, t.author.id, t.id, f, l.id, l.guild_id, v, W, r, Z, j, b, L, S, X]);
    dM(
        ee.some((e) => e.trackingArea === Q.kY.CLOUD_PLAY),
        v,
    );
    let ei = o.useMemo(
        () => (q ? null : (0, a.jsx)(d1, { presenceActivity: f, remoteJoinPlatform: W, isGameLaunchable: F })),
        [q, f, W, F],
    );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(el, {
                header: s,
                title: i,
                staticBannerSrc: m,
                onClickBanner: g,
                bannerAspectRatio: en.ACTIVITY,
                iconSrc: p ?? void 0,
                info: H,
                actions: ee,
                primaryActionFirst: !0,
                onClickContent: g,
                trackingConfig: {
                    id: n.id,
                    linkType: $.J.RICH_PRESENCE_INVITE,
                    onView: A,
                    referrerId: t.author.id,
                    guildId: l.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ei,
            }),
            et ? k() : null,
        ],
    });
}
var d3 = n(49999);
function d4(e) {
    var t, i;
    let l,
        s,
        {
            analyticsLocations: r,
            application: d,
            channel: c,
            currentUserId: u,
            currentUserPresenceActivity: m,
            hideParty: g,
            message: p,
            onView: A,
            partyStatusElement: x,
            presenceActivity: f,
        } = e,
        E = (0, I.Ag)(d),
        { iconSrc: C, name: v } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, dx.uD)(t.id, e.activity?.icon_override) : null) ??
                    B.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(p, d),
        _ =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: l, imageURL: s } = (0, h.cf)(
                        [dL],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = dL.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, dT.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, dx.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: r };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    o.useEffect(() => {
                        l !== s &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                tN.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: s });
                    }, [l, s, t]),
                    s
                );
            })({ messageId: p.id, presenceActivity: f, application: d }) ?? void 0,
        { openGameProfileModal: j, launchableAppId: N } =
            ((t = d.id),
            (i = p.author.id),
            (l = (0, rb.d)(t)),
            (s = (0, h.bG)([e4.A, oZ.A], () => {
                let e = e4.A.getApplication(t);
                return null != e ? oZ.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, dp.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: s?.id ?? void 0,
                    source: dg.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: i,
                }),
                launchableAppId: l,
            }),
        T = (0, dN.A)({ application: d, analyticsLocations: r }),
        y = o.useMemo(() => {
            if (null != T)
                return { label: ec.intl.string(ec.t["jaYS/h"]), icon: dt.h, trackingArea: Q.kY.CLOUD_PLAY, onClick: T };
        }, [T]),
        S = eS(d),
        b = o.useMemo(() => (null != j ? j : null != S && E ? S : void 0), [E, j, S]),
        L = dl.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        R = dr.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: k, hasAlreadyLinked: M, startAuthorization: P } = (0, dm.RD)(d),
        D = (function (e, t) {
            let { showInGameModal: i = !0, showToastOnSuccess: l = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                [s, r] = o.useState(!1),
                d = o.useCallback(
                    function () {
                        for (var t = arguments.length, l = Array(t), s = 0; s < t; s++) l[s] = arguments[s];
                        r(!0);
                        let o = e(...l);
                        return (
                            o === dd._M.RPC &&
                                i &&
                                (0, eJ.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                        return (t) => (0, a.jsx)(e, { ...t });
                                    },
                                    { modalKey: du },
                                ),
                            o
                        );
                    },
                    [e, r, i],
                ),
                c = (0, da.A)(t);
            return (
                o.useEffect(() => {
                    if (s && !1 === c && !0 === t) {
                        if (((0, eJ.closeModal)(du), r(!1), !l)) return;
                        let e = () => {
                            (0, eQ.P0)({
                                id: "account-linked-toast",
                                message: ec.intl.string(dc.default.uG6teD),
                                type: e0.Ck.SUCCESS,
                            });
                        };
                        if ("visible" === document.visibilityState) e();
                        else {
                            let t = () => {
                                "visible" === document.visibilityState &&
                                    (e(), document.removeEventListener("visibilitychange", t));
                            };
                            document.addEventListener("visibilitychange", t);
                        }
                    }
                }, [s, t, c, l]),
                d
            );
        })(P, M),
        w = (0, h.bG)([df.A, dE.A], () => !!df.A.isConnected(d.id) || null != dv(f), [d, f]),
        O = ds.has(d.id) || (null != d.parentId && ds.has(d.parentId)),
        U = o$.isPlatformEmbedded && !O && R.requireAccountLink && k && !M,
        G = o$.isPlatformEmbedded && !O && R.requireGameLaunch && !w,
        V = !dj(f, p, d.id),
        H = oW(v, p.activity?.type, V),
        F = o.useRef(null),
        Y = (0, h.bG)([dA.A], () => dA.A.getMessages(c.id)),
        z = () => {
            var e;
            let t = [];
            return (
                (e = p.id),
                !Y.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === ed.xL.JOIN, 25) &&
                    k &&
                    !M &&
                    L.enabled &&
                    t.push(o8.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, a.jsx)(dh.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === o8.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, a.jsx)(de.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: dn.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: d },
                                },
                                title: ec.intl.formatToPlainString(ec.t["lo6H6+"], { gameName: d.name }),
                                body: ec.intl.string(ec.t.qYAzOp),
                                targetElementRef: F,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(d3.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return V
        ? (0, a.jsx)(dw, {
              message: p,
              application: d,
              applicationName: v,
              channel: c,
              header: H,
              currentUserId: u,
              launchableAppId: N,
              isEmbeddedApplication: E,
              tryWithGdnAction: y,
              staticBannerSrc: _,
              onClickContent: b,
              iconSrc: C,
              onView: A,
              presenceActivity: f,
              analyticsLocations: r,
              showAuthButton: k && !M && L.enabled,
              requireAccountLink: U,
              startAuthorization: D,
              accountLinkButtonRef: F,
              renderAccountLinkUpsell: z,
          })
        : (0, a.jsx)(d2, {
              message: p,
              application: d,
              applicationName: v,
              channel: c,
              header: H,
              currentUserId: u,
              launchableAppId: N,
              isEmbeddedApplication: E,
              tryWithGdnAction: y,
              staticBannerSrc: _,
              onClickContent: b,
              iconSrc: C,
              onView: A,
              presenceActivity: f,
              currentUserPresenceActivity: m,
              hideParty: g,
              partyStatusElement: x,
              analyticsLocations: r,
              showAuthButton: k && !M && L.enabled,
              requireAccountLink: U,
              requireGameLaunch: G,
              canPromptAuth: k && !M,
              startAuthorization: D,
              accountLinkButtonRef: F,
              renderAccountLinkUpsell: z,
          });
}
var d6 = n(172710);
function d5(e) {
    let { application: t, message: n, header: i, onClickContent: l, onView: s, guildId: r } = e,
        d = o.useMemo(
            () =>
                (0, a.jsx)(x.E, {
                    variant: "text-xs/medium",
                    className: dP.h_,
                    color: "none",
                    lineClamp: 1,
                    children: ec.intl.string(ec.t["84qx9r"]),
                }),
            [],
        );
    return (0, a.jsx)(el, {
        header: i,
        title: t.name,
        iconSrc: o2.HT.getWhiteIconURL(),
        info: d,
        onClickContent: l,
        trackingConfig: {
            id: t.id,
            linkType: $.J.RICH_PRESENCE_INVITE,
            onView: s,
            referrerId: n.author.id,
            guildId: r,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var d7 = n(353411);
function d9(e) {
    var t;
    let {
            application: n,
            message: i,
            header: l,
            presenceActivity: s,
            hideParty: r,
            partyStatusElement: d,
            currentUserPresenceActivity: c,
            onClickContent: u,
            onView: m,
            guildId: h,
        } = e,
        g = (0, dK.w)(c, s),
        p = (0, d7.Gq)(s, i.author, "Invite Embed"),
        A = o.useMemo(() => {
            let e = [];
            return (
                g ||
                    e.push({
                        label: p.label ?? ec.intl.string(ec.t.VJlc0S),
                        trackingArea: Q.kY.SYNC,
                        onClick: () => {
                            p.onClick();
                        },
                        disabled: p.disabled,
                        disabledReason: p.disabled ? p.tooltip : void 0,
                    }),
                e
            );
        }, [g, p]),
        f =
            null != s && null != s.details && null != s.state
                ? ec.intl.formatToPlainString(ec.t.JCvHtx, { track: s.details, artist: s.state })
                : n.name,
        E = s?.timestamps?.start ?? s?.created_at,
        C = o.useMemo(
            () =>
                null != E
                    ? (0, a.jsxs)("div", {
                          className: dP.Ym,
                          children: [
                              (0, a.jsx)(er.T, { size: "xxs", color: "currentColor" }),
                              (0, a.jsx)(om.z, {
                                  entry: { start: E, end: s?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [E, s?.timestamps?.end],
        ),
        I = o.useMemo(
            () =>
                (0, a.jsxs)("div", {
                    className: dP.pq,
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/normal",
                            className: dP.dS,
                            color: "none",
                            lineClamp: 1,
                            children: C,
                        }),
                        r ? null : d,
                    ],
                }),
            [C, r, d],
        );
    return (0, a.jsx)(el, {
        header: l,
        title: f,
        iconSrc:
            ((t = n.id),
            (null == s || null == s.assets || null == s.assets.large_image
                ? null
                : (0, dx.uD)(t, s.assets.large_image, [rp.Ig, rp.Ig])) ?? void 0),
        info: I,
        actions: A,
        onClickContent: u,
        trackingConfig: {
            id: n.id,
            linkType: $.J.RICH_PRESENCE_INVITE,
            onView: m,
            referrerId: i.author.id,
            guildId: h,
            channelId: i.channel_id,
            messageId: i.id,
        },
    });
}
function d8(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: i,
            message: l,
            onView: s,
            partyStatusElement: r,
            presenceActivity: d,
            guildId: c,
        } = e,
        u = !dj(d, l, t.id),
        m = oW(t.name, l.activity?.type, u),
        h = o.useMemo(() => {
            if (null != d) return () => (0, d6.Mp)(d);
        }, [d]);
    return u
        ? (0, a.jsx)(d5, { application: t, message: l, header: m, onClickContent: h, onView: s, guildId: c })
        : (0, a.jsx)(d9, {
              application: t,
              message: l,
              header: m,
              presenceActivity: d,
              hideParty: i,
              partyStatusElement: r,
              currentUserPresenceActivity: n,
              onClickContent: h,
              onView: s,
              guildId: c,
          });
}
var ce = n(272984);
function ct(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: s } = e,
        r = (function (e) {
            let { activityActionType: t, maxPartySize: n, partySize: i } = e;
            return t === ed.xL.STREAM_REQUEST
                ? ""
                : t === ed.xL.LISTEN
                  ? n > 0
                      ? ec.intl.formatToPlainString(ec.t.Zogoou, { partySize: i, maxPartySize: n })
                      : ec.intl.formatToPlainString(ec.t.UGei0j, { partySize: i })
                  : n > 0
                    ? ec.intl.formatToPlainString(ec.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : ec.intl.formatToPlainString(ec.t["65JnWC"], { partySize: i });
        })({ maxPartySize: i, partySize: Math.max(n, t.length), activityActionType: s }),
        o = [...t];
    for (; o.length < n && o.length < 8; ) o.push(eo.mt);
    for (; o.length < i && o.length < 8; ) o.push(null);
    return (0, a.jsxs)("div", {
        className: dP.UF,
        children: [
            o.length > 0 &&
                (0, a.jsx)(eo.Ay, {
                    guildId: l,
                    users: o,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: eo.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, a.jsx)(x.E, { variant: "text-xs/medium", color: "none", children: r }),
        ],
    });
}
function cn(e) {
    let { analyticsLocations: t, app: n, channel: i, message: l, hideParty: s, onView: r } = e,
        d = eA(n),
        c = (0, h.bG)([w.default], () => w.default.getId()),
        u = (0, h.bG)([rm.A], () => {
            if (null == l.application) return rm.A.findActivity(l.author.id, (e) => e.type === ed.$pd.LISTENING);
            {
                let e = l.author.id;
                return (
                    o7(l) && (e = e === c && i.isPrivate() ? i.getRecipientId() : c),
                    rm.A.getApplicationActivity(e, l.application.id)
                );
            }
        }, [l, i, c]),
        m = (0, h.bG)([o4.A, o6.A], () => (0, o5.A)(o4.A, o6.A, d.id), [d.id]),
        g = (0, h.yK)([o3.A], () => (null == u || null == u.party ? [] : Array.from(o3.A.getParty(u.party.id) ?? [])), [
            u,
        ]),
        { partySize: p, maxPartySize: A } = (0, o9._)(u),
        x = o.useMemo(
            () =>
                g.map((e) => {
                    let t = V.default.getUser(e);
                    return null != t ? t : eo.mt;
                }),
            [g],
        ),
        f = o.useMemo(
            () =>
                (0, a.jsx)(ct, {
                    partyMembers: x,
                    partySize: p,
                    maxPartySize: A,
                    guildId: i.guild_id,
                    activityActionType: l.activity?.type,
                }),
            [x, p, A, i.guild_id, l.activity?.type],
        );
    return (0, ce.pH)(u?.party?.id) || d.id === o2.HT.id
        ? (0, a.jsx)(d8, {
              application: d,
              currentUserPresenceActivity: m,
              hideParty: s,
              message: l,
              onView: r,
              partyStatusElement: f,
              presenceActivity: u,
              guildId: i.guild_id,
          })
        : l.activity?.type === ed.xL.STREAM_REQUEST
          ? (0, a.jsx)(o1, { analyticsLocations: t, application: d, channel: i, currentUserId: c, message: l })
          : (0, a.jsx)(d4, {
                analyticsLocations: t,
                application: d,
                channel: i,
                currentUserId: c,
                currentUserPresenceActivity: m,
                hideParty: s,
                message: l,
                onView: r,
                partyStatusElement: f,
                presenceActivity: u,
            });
}
function ci(e) {
    let { visibility: t } = e;
    return (0, a.jsxs)("div", {
        className: c()(dP.Xy, dP.cp),
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                children: ec.intl.string(ec.t.pkq6Vq),
            }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: (function (e) {
                    switch (e) {
                        case oY.BLOCK_UNDERAGE:
                            return ec.intl.string(ec.t.GhU4yl);
                        case oY.BLOCK_CHANNEL_RESTRICTION:
                            return ec.intl.string(ec.t.B99UMJ);
                        default:
                            return ec.intl.string(ec.t.GhU4yl);
                    }
                })(t),
            }),
        ],
    });
}
let cl = (e) => {
    var t;
    let { channel: n, message: i, hideParty: l } = e,
        { analyticsLocations: s } = (0, C.Ay)(E.A.INVITE_EMBED),
        r =
            null != i.application
                ? ep.Ay.createFromServer(i.application)
                : null != i.activity && null != i.activity.party_id && (0, ce.pH)(i.activity.party_id)
                  ? o2.HT
                  : void 0,
        { data: o } = (0, e3.YY)(i.application?.id),
        d = o ?? r,
        c = (0, h.bG)([V.default], () => V.default.getCurrentUser()?.nsfwAllowed),
        u =
            ((t = i.application?.content_classification),
            null == t || (0, oH.U1)({ type: oH.fS.MINIMAL, data: t }) !== oF.Y.ADULT
                ? "display"
                : !0 !== c
                  ? "block_underage"
                  : n.isPrivate() || n.nsfw
                    ? "display"
                    : "block_channel_restriction");
    switch (u) {
        case oY.DISPLAY:
            if (null == d) return null;
            return (0, a.jsx)(cn, { app: d, channel: n, message: i, hideParty: l, analyticsLocations: s });
        case oY.BLOCK_UNDERAGE:
        case oY.BLOCK_CHANNEL_RESTRICTION:
            return (0, a.jsx)(ci, { visibility: u });
        default:
            return null;
    }
};
var cs = n(503002),
    cr = n(123791);
function ca(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, e3.YY)(t);
    return null == i ? null : (0, a.jsx)(co, { app: i, guildId: n });
}
function co(e) {
    let { app: t, guildId: i } = e;
    (0, cr.C)(t.id);
    let l = o.useCallback(() => {
        (0, eJ.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("84541"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) => (0, a.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, a.jsx)(J.$, {
        size: "sm",
        onClick: l,
        icon: cs.U,
        text: ec.intl.format(ec.t.XDRjs5, { appName: t.name }),
    });
}
var cd = n(394839),
    cc = n(96782),
    cu = n(930390),
    cm = n(861986),
    ch = n(343552),
    cg = n(581619),
    cp = n(416620);
let cA = [ed.Auw.GIFV],
    cx = 15 * sJ.A.Millis.MINUTE,
    cf = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cE = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: s } = e,
            r = (0, m.Lt)(s, ie.e5.IS_ANIMATED);
        return null != i && null != l && (it.bp.test(n) || (r && (it.P8.test(n) || it.p4.test(n))))
            ? (0, a.jsx)(rC.A, { width: i, height: l, src: n, url: t, format: g.TL.IMAGE, className: cp.jj })
            : null;
    };
class cC extends o.Component {
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
            ...(null != t ? { invite_instance_id: (0, n3._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && cf.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, p.A)(this.state, t) ||
            !(0, p.A)(this.props, e, ["message", "channel"]) ||
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
            case sZ.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, a.jsx)(nh, { messageId: e.id, channelId: t.id });
                break;
            case sZ.xC.AGE_VERIFICATION_RETRY:
                i = (0, a.jsx)(eY, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, a.jsx)("div", { className: cp.od, children: i });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: l } = t;
                  if (n === t0.I.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, a.jsx)(
                                oG,
                                { code: i, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                i,
                            )
                          : null;
                  if (n === t0.I.TEMPLATE) return (0, a.jsx)(n2, { code: i }, i);
                  if (n === t0.I.EVENT) return (0, a.jsx)(nq.A, { code: i }, i);
                  if (n === t0.I.CHANNEL_LINK) return (0, a.jsx)(s5, { code: i, message: e }, i);
                  if (n === t0.I.APP_DIRECTORY_PROFILE) return (0, a.jsx)(nF, { code: i, message: e }, i);
                  else if (n === t0.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: s } = (0, tg.N)(l);
                      return (0, a.jsx)(eV, { applicationId: i, message: e, referrerId: t, customId: n, linkId: s }, i);
                  } else if (n === t0.I.GUILD_PRODUCT) return (0, a.jsx)(nJ, { code: i }, i);
                  else if (n === t0.I.SERVER_SHOP) return (0, a.jsx)(nl, { guildId: i }, i);
                  else if (n === t0.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, a.jsx)(l$, { guildId: t, skuId: e, channel: n }, i);
                  } else if (n === t0.I.SOCIAL_LAYER_STOREFRONT_APP) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, a.jsx)(lQ, { applicationId: t, skuId: e, channel: n }, i);
                  } else if (n === t0.I.QUESTS_EMBED) return (0, a.jsx)(i9.A, { questId: i }, i);
                  else if (n === t0.I.APP_DIRECTORY_STOREFRONT) return (0, a.jsx)(tu, { appId: i, message: e }, i);
                  else if (n === t0.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, ez.u)(i);
                      return null == t
                          ? null
                          : (0, a.jsx)(tm, { appId: t.applicationId, skuId: t.skuId, message: e }, i);
                  } else if (n === t0.I.APP_OAUTH2_LINK) return (0, a.jsx)(tf, { applicationId: i, message: e }, i);
                  else if (n === t0.I.COLLECTIBLES_SHOP) return null;
                  else if (n === t0.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: s, giftInfo: r } = e,
            o = V.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, a.jsx)(
                      "div",
                      {
                          className: cp.zv,
                          children: (0, a.jsx)(ay, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: s,
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
            isPendingMember: s,
            channel: r,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, a.jsx)(cu.A, {
                  message: e,
                  channel: r,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: s,
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
                onMediaItemContextMenu: s,
                enabledContentHarmTypeFlags: r,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: d, flags: c } = e;
        if (0 === d.length || e.isPoll() || (0, sz._c)(e)) return null;
        let u = d.filter((e) => null == e.flags || !(0, m.Lt)(e.flags, ed.sbO.IS_THUMBNAIL));
        if (0 === u.length) return null;
        let h = u
                .map((t) => ({
                    ...(0, ie.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, m.Lt)(t.flags ?? 0, ed.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, iS.o)(
                h,
                { enabledContentHarmTypeFlags: r, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, m.Lt)(c, ed.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sQ.iW)(e.originalItem, t);
        }
        let E = u.map((r) => {
            let a = (0, ie.aG)(r),
                o = {
                    message: e,
                    item: (0, cc.rC)(r, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (u.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != s
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), s(e, a);
                              }
                            : void 0,
                    renderAudioComponent: x ? oV.SX : oV.Nj,
                    renderImageComponent: oV.Cr,
                    renderVideoComponent: oV.I1,
                    renderPlaintextFilePreview: oV.R6,
                    renderGenericFileComponent: oV.UB,
                    onPlay: (e, n, i) => {
                        tt.default.track(ed.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: r.content_type,
                            flags: r.flags,
                            size: r.size,
                            duration: i,
                        });
                    },
                    gifFavoriteButton: cE(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sK.E)({ proxyURL: r.proxy_url, url: r.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, a.jsx)(cd.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: s,
                canSuppressEmbeds: r,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, sQ.sC)(e, i, o, d);
        if (e.type === ed.Auw.GIFT) return null;
        let m = cA.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, a.jsx)(
            nG.G.Provider,
            {
                value: (0, ch.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, a.jsx)(tD.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !s,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
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
        e.type !== ed.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? n8.A.parseEmbedTitleWithoutLinks : n8.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === ed.Auw.RICH
            ? n8.A.parse(t, !0, {
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
        e.shiftKey ? f.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
                      cg.z.has(t.type) ||
                      (0, sq.p6)(t) ||
                      ((0, m.Lt)(t.flags ?? 0, ed.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === n6.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !n5.has(t.content_type);
                              })
                          )) ||
                      (0, sq.V)(t) ||
                      (0, sq.G8)(t)
                  )
                      return null;
                  if (t.type === ed.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: s,
                              onMediaItemContextMenu: r,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, sQ.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, a.jsx)(
                                  ri,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cE,
                                      getOnMediaItemContextMenu:
                                          null == r
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), r?.(t, e);
                                                },
                                      shouldHideMediaOptions: s,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, a.jsx)(
                                lv.Ay,
                                {
                                    type: lv.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let s = { renderImageComponent: l4.LL, renderVideoComponent: l4.$o, renderLinkComponent: l4.bU };
                  if (
                      t.type === ed.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sX.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, a.jsx)(
                                  aC,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, s, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, s, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: s,
        } = this.props;
        return (0, a.jsx)(re.N, {
            gifAutoPlay: t,
            getGifFavButton: cE,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), s?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, a.jsx)(n7.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, a.jsx)(cl, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ed.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, a.jsx)(tP, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, s$.ec)(e)
            ? (0, a.jsx)(rE.A, {
                  message: e,
                  onDeleteMessage: () => {
                      f.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, l0.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, a.jsx)(sN, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(ed.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(sF, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(ed.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sR.default.extractTimestamp(e.id) >= cx)
        )
            return (0, a.jsx)("div", { className: cp.xM, children: ec.intl.string(ec.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, a.jsxs)(A.M, {
            dismissable: !0,
            header: ec.intl.string(ec.t.VL1KOk),
            confirmText: ec.intl.string(ec.t.YEHppG),
            cancelText: ec.intl.string(ec.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                f.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(x.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: cp.IX,
                    children: ec.intl.string(ec.t["vXZ+Fo"]),
                }),
                (0, a.jsx)(x.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ec.intl.string(ec.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, a.jsx)(A.M, {
                  dismissable: !0,
                  header: ec.intl.string(ec.t.CbTIEo),
                  confirmText: ec.intl.string(ec.t.kFwAsa),
                  cancelText: ec.intl.string(ec.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      f.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, a.jsx)(x.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: cp.IX,
                      children: ec.intl.string(ec.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== u.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, a.jsx)(ca, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, a.jsx)(rf, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ed.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, a.jsx)(iy, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ed.Auw.SAFETY_POLICY_NOTICE
            ? (0, a.jsx)(lT, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ed.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, a.jsx)(lD, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nr.KM)(e)
            ? (0, a.jsx)(nc, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, a.jsx)(i7, { message: e, poll: t, className: cp.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, a.jsx)(tQ, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, i8.Mn)(e, this.props.channel)) return (0, a.jsx)(lI, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, i8.Mn)(e, this.props.channel)) return (0, a.jsx)(nU, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, a.jsx)(cm.A, { message: e, compact: t, location: cm.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: s } = this.state,
            r = this.renderEditedTag(t, i),
            o = this.renderCodedLinks(t),
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
        return null == o &&
            null == u &&
            null == h &&
            null == g &&
            null == p &&
            null == d &&
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
            : (0, a.jsxs)("div", {
                  id: (0, oB.XL)(t),
                  className: c()(e, cp.kL),
                  children: [
                      L,
                      b,
                      I,
                      S,
                      R,
                      o,
                      d,
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
                      r,
                      p,
                      A,
                      x,
                      l && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      N,
                      T,
                  ],
              });
    }
}
function cI(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: s } = e,
        r = (0, h.bG)([w.default], () => w.default.getId()),
        o = nv.X6.useSetting(),
        d = nv.hD.useSetting(),
        c = nv.rs.useSetting() && !(0, sL.A)(e.message),
        u = nv.jW.useSetting() && !1 !== e.renderReactions,
        g = nv.kt.useSetting(),
        p = (0, h.bG)([sW.A], () => null == n.guild_id || sW.A.canChatInGuild(n.guild_id), [n]),
        A = (0, h.bG)([n9.A], () => null != n.guild_id && n9.A.isLurking(n.guild_id), [n]),
        x = (0, h.bG)([iA.Ay, V.default], () => {
            let e = V.default.getCurrentUser();
            return (null != n.guild_id && null != e ? iA.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: f, canManageMessages: E } = (0, h.cf)(
            [e_.A],
            () => ({
                canAddNewReactions: p && e_.A.can(ed.xBc.ADD_REACTIONS, n),
                canManageMessages: e_.A.can(ed.xBc.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        C = (0, nY.ix)(n.guild_id),
        [, I] = (0, nz.c)(n.guild_id),
        v = (0, sT.Id)(n),
        _ =
            (r === i.author.id || E) &&
            i.author.id !== ed.oIV &&
            !1 !== l &&
            !(0, m.Lt)(i.flags, ed.pr7.EPHEMERAL) &&
            v &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        j = r === i.author.id && v && !s,
        N = i.author.id === r,
        T = i.isFirstMessageInForumPost(n),
        y = (0, s1.A)({
            channel: n,
            canChat: p,
            renderReactions: u,
            canAddNewReactions: f,
            isLurking: A,
            communicationDisabled: I,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: C,
        }),
        S = (0, nx.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        b = (0, ii.A)(n?.id),
        L = (0, ib.A)(i),
        R = (0, na.P)(i),
        k = (0, s0.z)(n),
        M = (0, sZ._f)(i.id, i.channel_id),
        P = (0, ns._R)();
    return (0, a.jsx)(cC, {
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
        renderEmbeds: c,
        gifAutoPlay: g,
        canRenderReferralEmbed: n.isDM(),
        poll: L,
        showListsAndHeaders: S,
        showMaskedLinks: S,
        shouldHideMediaOptions: b,
        enabledContentHarmTypeFlags: R,
        ctaButtonType: M,
        shouldAgeVerify: P,
    });
}
let cv = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: r = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = nv.X6.useSetting(),
        u = nv.hD.useSetting(),
        m = nv.rs.useSetting(),
        h = nv.kt.useSetting(),
        g = (0, nx.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, ii.A)(n?.id),
        A = (0, na.P)(t),
        x = (0, sZ._f)(t.id, t.channel_id),
        f = (0, ib.A)(t);
    return (0, a.jsx)(cC, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: s,
        disableReactionUpdates: r,
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
