n.d(t, { iV: () => cp, OC: () => cx, Ay: () => cA }), n(938796);
var i,
    l,
    s,
    r = n(627968),
    a = n(64700),
    o = n(503698),
    d = n.n(o),
    c = n(448761),
    u = n(665260),
    m = n(17928),
    h = n(803805),
    g = n(52133),
    p = n(640238),
    A = n(834730),
    x = n(720149),
    f = n(793574),
    E = n(688810),
    C = n(735991);
n(321073), n(134528), n(947204);
var I = n(485845),
    v = n(379834),
    _ = n(836480),
    j = n(825860),
    N = n(950305),
    y = n(795816),
    T = n(574152),
    S = n(522305),
    b = n(361926),
    L = n(832384),
    R = n(113854),
    k = n(207371),
    M = n(205184),
    P = n(773669),
    w = n(495544),
    D = n(734057),
    O = n(994500),
    U = n(967198),
    G = n(287809),
    V = n(486020),
    B = n(204776),
    H = n(725606);
n(323874), n(14289), n(35956);
var F = n(299619),
    Y = n(172218),
    z = n(939249),
    W = n(408278),
    K = n(821609),
    J = n(990078),
    q = n(775602),
    X = n(140651),
    Z = n(354287),
    Q = n(768349),
    $ = n(838541),
    ee = n(351280),
    et = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function en(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, r.jsx)(z.D, { onClick: t, className: d()({ [ee.or]: null != t }, i), children: n })
        : (0, r.jsx)("div", { className: i, children: n });
}
function ei(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: l,
        info: s,
        staticBannerSrc: o,
        videoBannerSrc: c,
        bannerAspectRatio: u = 0,
        iconSrc: h,
        actions: g = [],
        primaryActionFirst: p = !1,
        trackingConfig: x,
        onClickContent: f,
        onClickBanner: E,
    } = e;
    (t = x),
        (x = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? Q.J.UNKNOWN,
            referrerId: t?.referrerId ?? w.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: C, secondaryColor: I } = (0, X.A)(h ?? o),
        v = `linear-gradient(45deg, ${C}, ${I})`,
        _ = (0, m.bG)([q.A], () => q.A.useReducedMotion),
        j = a.useRef(!1),
        N = (0, Y.K)(
            (e) => {
                !1 === j.current &&
                    e &&
                    (x?.onView?.(),
                    (0, Z.wV)({
                        appId: x.id,
                        linkType: x.linkType,
                        referrerId: x.referrerId,
                        customId: x.activityCustomId,
                        guildId: x.guildId,
                        channelId: x.channelId,
                        messageId: x.messageId,
                    }),
                    (j.current = !0));
            },
            void 0,
        ),
        y = null != o,
        T = null != c && !1 === _,
        S = y || T,
        b = 0 === u ? ee.pv : ee.$g,
        L = a.useRef(null),
        R = a.useCallback(() => {
            let e = L.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        k = a.useMemo(() => !!T && new URL(c).pathname.endsWith(".gif"), [T, c]),
        M = a.useMemo(() => {
            if (null != f)
                return (e) => {
                    f(e),
                        (0, Z.gx)({
                            applicationId: x.id,
                            linkType: x.linkType,
                            area: Z.kY.CONTENT,
                            referrerId: x.referrerId,
                            customId: x.activityCustomId,
                            isDeadEnd: x.isDeadEnd,
                        });
                };
        }, [f, x]),
        P = a.useMemo(() => {
            if (null != E)
                return (e) => {
                    E(e),
                        (0, Z.gx)({
                            applicationId: x.id,
                            linkType: x.linkType,
                            area: Z.kY.BANNER,
                            referrerId: x.referrerId,
                            customId: x.activityCustomId,
                            isDeadEnd: x.isDeadEnd,
                        });
                };
        }, [E, x]);
    return (0, r.jsxs)("div", {
        ref: N,
        className: ee.E6,
        children: [
            S &&
                (0, r.jsxs)(en, {
                    onClick: P,
                    className: d()(ee.cy, b, { [ee.wk]: T }),
                    children: [
                        T &&
                            (k
                                ? (0, r.jsx)("div", { className: ee.O9, style: { backgroundImage: `url(${c})` } })
                                : (0, r.jsx)(F.A, {
                                      ref: L,
                                      src: c,
                                      mediaLayoutType: $.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: ee.O9,
                                  })),
                        y &&
                            (0, r.jsx)("div", {
                                className: ee.LR,
                                style: { backgroundImage: `url(${o})` },
                                onTransitionEnd: R,
                            }),
                    ],
                }),
            (0, r.jsxs)("div", {
                style: { background: v },
                children: [
                    (0, r.jsxs)("div", {
                        className: ee.hQ,
                        children: [
                            null != i &&
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: ee.wx,
                                    children: i,
                                }),
                            (0, r.jsxs)(en, {
                                onClick: M,
                                className: d()(ee.FG, { [ee.ry]: null != M }),
                                children: [
                                    null != h &&
                                        (0, r.jsx)("div", {
                                            className: ee._8,
                                            style: { backgroundImage: `url(${h})` },
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: ee.Qs,
                                        children: [
                                            (0, r.jsx)(A.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: ee.eu,
                                                children: n,
                                            }),
                                            (0, r.jsx)("div", { className: ee.rj, children: s }),
                                        ],
                                    }),
                                ],
                            }),
                            g.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: d()(ee.AC, p ? ee.ad : null),
                                    children: g.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: l,
                                                disabled: s,
                                                disabledReason: a,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: u,
                                                buttonRef: m,
                                            } = e,
                                            h = 0 === t;
                                        return u
                                            ? (0, r.jsx)(
                                                  J.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: m,
                                                      children: (0, r.jsx)(W.K, {
                                                          variant: h ? "overlay-primary" : "overlay-secondary",
                                                          disabled: s || null != a,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: m,
                                                          onClick: (e) => {
                                                              l(e),
                                                                  (0, Z.gx)({
                                                                      applicationId: x.id,
                                                                      linkType: x.linkType,
                                                                      area: d,
                                                                      referrerId: x.referrerId,
                                                                      customId: x.activityCustomId,
                                                                      isDeadEnd: c,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      className: ee.uc,
                                                      children: [
                                                          (0, r.jsx)(K.$, {
                                                              variant: h ? "overlay-primary" : "overlay-secondary",
                                                              disabled: s || null != a,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: m,
                                                              onClick: (e) => {
                                                                  l(e),
                                                                      (0, Z.gx)({
                                                                          applicationId: x.id,
                                                                          linkType: x.linkType,
                                                                          area: d,
                                                                          referrerId: x.referrerId,
                                                                          customId: x.activityCustomId,
                                                                          isDeadEnd: c,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != a &&
                                                              (0, r.jsx)(A.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: ee.H$,
                                                                  children: a,
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
var el = n(500060),
    es = n(432017),
    er = n(687966),
    ea = n(104171),
    eo = n(652215),
    ed = n(375708),
    ec = n(695320);
function eu(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, r.jsxs)("div", {
        className: ec.i,
        children: [
            (0, r.jsx)(ea.Ay, { guildId: n, users: t, max: 6, size: ea.DN.SIZE_16 }),
            (0, r.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var em = n(993748),
    eh = n(212534),
    eg = n(395671);
function ep(e) {
    let { id: t, isDiscoverable: n } = e,
        [i, l, s] = (0, m.yK)(
            [eh.A],
            () => [eh.A.getApplication(t), eh.A.isInvalidApplication(t), eh.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        a.useEffect(() => {
            !1 === n || l || s === eh.e.FETCHED || s === eh.e.FETCHING || (0, em.eP)(t);
        }, [t, s, n, l]),
        a.useMemo(() => (null != i ? e.mergeFromApplicationUpdate(eg.Ay.createFromServer(i)) : e), [e, i])
    );
}
var eA = n(435582),
    ex = n(283488);
function ef(e) {
    let { bot: t } = e,
        n = (0, C.Ag)(e),
        { url: i } = (0, ex.A)({ applicationId: n ? e.id : void 0, size: 600, names: ["embedded_cover"] });
    return a.useMemo(() => {
        let l,
            s,
            r = et.BOT;
        if (null != t) {
            let { banner: e } = t;
            (l = (0, V.z)({ id: t.id, banner: e, size: 512, canAnimate: !1 })),
                (0, V.VI)(e) && null == i && (s = (0, V.z)({ id: t.id, banner: e, size: 512, canAnimate: !0 }));
        }
        if (n) {
            let t = (0, C.Cx)(e);
            null != i && ((l = i), (r = et.ACTIVITY));
            let n = t?.activity_preview_video_asset_id;
            null != n && ((s = (0, eA.A)(e.id, n)), (r = et.ACTIVITY));
        }
        return { staticBannerSrc: l, videoBannerSrc: s, bannerAspectRatio: r };
    }, [i, t, n, e]);
}
var eE = n(482030),
    eC = n(837057),
    eI = n(310419),
    ev = n(576705),
    e_ = n(309010),
    ej = n(692848),
    eN = n(488995);
function ey(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: l } = e,
        s = (0, B.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: l }),
        r = (0, m.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        a = (0, m.bG)([D.A, ev.A, e_.A], () => {
            let e = D.A.getChannel(e_.A.getChannelId());
            return null != e && (e.isPrivate() || ev.A.can(eo.xBc.SEND_MESSAGES, e));
        }, []),
        o = (0, C.V1)(e, r) && a;
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
function eT(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: i,
        isInstallable: l,
        customInstallUrl: s,
        installParams: r,
        integrationTypesConfig: o,
        selectedGuildId: d,
    } = ey(e);
    return a.useMemo(
        () =>
            n
                ? () => {
                      (t?.(), i)
                          ? (0, eE.hg)(e.id)
                          : (0, eC.transitionToGlobalDiscovery)({
                                tab: eN.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: eI.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : l
                  ? () => {
                        t?.(),
                            (0, ej.o)({
                                applicationId: e.id,
                                customInstallUrl: s,
                                installParams: r,
                                integrationTypesConfig: o,
                                guildId: d,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, i, n, s, r, o, l, t, d],
    );
}
var eS = n(734093);
function eb(e) {
    let { app: t, linkType: n, activityCustomId: i, activityReferrerId: l, message: s, onView: o } = e,
        { name: d, bot: c } = (t = ep(t)),
        u = c?.id,
        h = (0, C.Ag)(t),
        g = V.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: c }),
        { staticBannerSrc: p, videoBannerSrc: A, bannerAspectRatio: x } = ef(t),
        I = (0, m.bG)([w.default], () => l ?? w.default.getId(), [l]),
        { analyticsLocations: v } = (0, E.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: _, instanceId: j, isCurrentlyInInstance: N, canLaunchInChannel: L } = (0, H.w)(t.id),
        M = (0, T.A)(),
        P = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: c?.id }),
        O = null != u && h && P,
        U = L && h,
        G = (0, k.x)(t),
        B = eT(t),
        F = (function (e) {
            let { canViewApp: t, isInstallable: n } = ey(e),
                i = eT(e);
            return a.useMemo(
                () =>
                    t && null != i
                        ? {
                              label: ed.intl.string(ed.t.hvVgAZ),
                              trackingArea: Z.kY.VIEW,
                              onClick() {
                                  i();
                              },
                          }
                        : n && null != i
                          ? {
                                label: ed.intl.string(ed.t.NgXl3C),
                                trackingArea: Z.kY.ADD_APP,
                                onClick() {
                                    i();
                                },
                            }
                          : void 0,
                [t, n, i],
            );
        })(t),
        Y = a.useMemo(() => {
            let e = [];
            return (
                h
                    ? G
                        ? e.push({
                              label: ed.intl.string(ed.t.RscU7I),
                              trackingArea: Z.kY.PLAY,
                              onClick() {
                                  R.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (U &&
                              e.push({
                                  label:
                                      null == j
                                          ? ed.intl.string(ed.t.RscU7I)
                                          : N
                                            ? ed.intl.string(ed.t.DPfdsq)
                                            : ed.intl.string(ed.t.sqe0hj),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      (0, y.su)({
                                          channelId: _ ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == j,
                                          embeddedActivitiesManager: M,
                                          customId: i,
                                          referrerId: I,
                                          analyticsLocations: v,
                                      });
                                  },
                                  disabled: N,
                              }),
                          !U &&
                              O &&
                              e.push({
                                  label: ed.intl.string(ed.t.JeK1Wg),
                                  trackingArea: Z.kY.PLAY,
                                  onClick() {
                                      (0, S.Q)({
                                          appId: t.id,
                                          botId: u,
                                          analyticsLocations: v,
                                          customId: i,
                                          referrerId: I,
                                      });
                                  },
                              }))
                    : null != F && e.push(F),
                e
            );
        }, [h, F, G, t.id, U, O, j, N, _, M, i, I, v, u]),
        z = h ? (0, r.jsx)(eR, { app: t }) : (0, r.jsx)(eL, { app: t });
    return (0, r.jsx)(ei, {
        title: d,
        staticBannerSrc: p,
        videoBannerSrc: A,
        onClickBanner: B,
        bannerAspectRatio: x,
        iconSrc: g,
        info: z,
        actions: Y,
        onClickContent: B,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: I,
            activityCustomId: i,
            onView: o,
            guildId: D.A.getChannel(s.channel_id)?.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eL(e) {
    let { app: t } = e,
        n =
            (0, B.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            I.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, m.bG)([P.default], () => P.default.locale, []),
        l = a.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : ed.intl.format(ed.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        s = t.categories?.at(0)?.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s && (0, r.jsx)(A.E, { variant: "text-xs/medium", className: eS.h_, color: "none", children: s }),
            null != l &&
                (0, r.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: eS.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, r.jsx)(_.Q, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function eR(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, m.bG)([U.A], () => U.A.getGuildId() ?? void 0, []),
        s = (0, M.s)(t.id),
        o = (0, m.yK)([G.default, O.A], () => {
            let e = [];
            for (let [t, n] of s.entries()) {
                if (t >= 5) break;
                let i = G.default.getUser(n.author_id),
                    l = O.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [s]),
        d = a.useMemo(() => {
            if (o.length > 0)
                return (0, r.jsx)(eu, {
                    activityUsers: o,
                    guildId: l,
                    activityText: ed.intl.formatToPlainString(ed.t["IJa+46"], { count: o.length }),
                });
            if (s.some((e) => (0, L.CZ)(e) === v.m.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(j.Y, { size: "xxs", color: "currentColor" }), ed.intl.string(ed.t.TsWCdW)],
                });
            let e = i > 0 ? ed.intl.format(ed.t.z8EAJW, { count: i }) : ed.intl.string(ed.t.RjceQU);
            return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(N.n, { size: "xxs", color: "currentColor" }), e] });
        }, [s, o, l, i]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: eS.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, r.jsx)("span", { className: eS.Tc, children: e }, t)),
                }),
            (0, r.jsx)(A.E, { variant: "text-xs/normal", className: eS.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var ek = n(429913),
    eM = n(582388),
    eP = n(257269);
let ew = (0, m.UT)(eM.A, {
    getQueryId: eo.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : eM.A.getOne(e, t)),
    load: (e, t) => (0, eP.Py)(e, t),
});
var eD = n(933958),
    eO = n(782091);
function eU(e) {
    let { application: t, customId: n, customLink: i, referrerId: l, message: s } = e,
        a = t?.bot?.id,
        o = (0, b.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        d = null != t && (0, C.Ag)(t),
        c = null != a && d && o,
        { analyticsLocations: u } = (0, E.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, m.bG)([e_.A], () => e_.A.getChannelId()),
        g = (0, eO.et)(h),
        p = (0, m.bG)([eD.Ay], () => {
            if (null == h) return;
            let e = eD.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, m.bG)([eD.Ay], () => eD.Ay.getCurrentEmbeddedActivity()),
        x = (0, T.A)(),
        I = g === eO.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        _ = null != n ? n : i.customId,
        j = [];
    (0, k.x)(t)
        ? j.push({
              label: ed.intl.string(ed.t.RscU7I),
              trackingArea: Z.kY.PLAY,
              onClick() {
                  R.A.launchFrame({ applicationId: t.id });
              },
          })
        : (I &&
              j.push({
                  label:
                      null == p
                          ? ed.intl.string(ed.t.RscU7I)
                          : v
                            ? ed.intl.string(ed.t.DPfdsq)
                            : ed.intl.string(ed.t.sqe0hj),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      (0, y.su)({
                          channelId: h ?? void 0,
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
              !I &&
              j.push({
                  label: ed.intl.string(ed.t.JeK1Wg),
                  trackingArea: Z.kY.PLAY,
                  onClick() {
                      (0, S.Q)({ appId: t.id, botId: a, analyticsLocations: u, customId: _, referrerId: l });
                  },
              }));
    let N = eT(t);
    return (0, r.jsx)(ei, {
        actions: j,
        onClickContent: N,
        header: t.name,
        iconSrc: V.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, r.jsx)("div", { children: i.description }),
        staticBannerSrc: i.getAssetURL(),
        title: i.title,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.CUSTOM_ACTIVITY_LINK,
            referrerId: l,
            activityCustomId: _,
            guildId: D.A.getChannel(s.channel_id)?.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eG(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: l, message: s } = e,
        { analyticsLocations: a } = (0, E.Ay)(f.A.ACTIVITY_BOOKMARK),
        [o] = (0, ek.A)([t]),
        d = null != o && (0, C.Ag)(o),
        { data: c, error: u } = ew(o?.id, l);
    return null == o || !1 === d
        ? null
        : null != l && null == u && null != c
          ? (0, r.jsx)(E.f5, {
                value: a,
                children: (0, r.jsx)(eU, { application: o, customId: n, customLink: c, referrerId: i, message: s }),
            })
          : (0, r.jsx)(E.f5, {
                value: a,
                children: (0, r.jsx)(eb, {
                    app: o,
                    linkType: Q.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: i,
                    message: s,
                }),
            });
}
var eV = n(139716),
    eB = n(847599),
    eH = n(36149);
function eF(e) {
    let { channelId: t } = e,
        n = (0, eH.b8)(),
        i = (0, eH.i2)(),
        l = ed.intl.string(ed.t["9KiIz6"]),
        s = ed.intl.string(ed.t["/nicWo"]),
        o = a.useCallback(() => {
            eV.A.showAgeVerificationGetStartedModal({ entryPoint: eB.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, eB.UT)(eB.Im.RETRY, t);
        }, [t]);
    return (0, r.jsx)(K.$, { variant: "primary", text: n ? l : s, onClick: o, disabled: !i });
}
var eY = n(121401),
    ez = n(284009),
    eW = n.n(ez),
    eK = n(192308),
    eJ = n(664121),
    eq = n(34188),
    eX = n(173936),
    eZ = n(691540),
    eQ = n(857250),
    e$ = n(97483),
    e0 = n(996759),
    e1 = n(800342),
    e2 = n(627363),
    e3 = n(587895),
    e4 = n(163437),
    e6 = n(185438),
    e5 = n(97352),
    e7 = n(652676),
    e9 = n(67480),
    e8 = n(328968),
    te = n(174459),
    tt = n(957565),
    tn = n(943775),
    ti = n(997997),
    tl = n(658575),
    ts = n(376374),
    tr = n(435220),
    ta = n(352883);
let to = (0, m.UT)([e9.A, e8.A, e5.A], {
        getQueryId: eo.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = e9.A.get(e),
                n = e8.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = e5.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            eW()(null != e, "skuId is null"), await (0, e1.QB)(e);
        },
    }),
    td = (0, m.UT)([e9.A], {
        getQueryId: eo.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (e9.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            eW()(null != e && null != t, "appId is null"), await (0, e1.JI)(t);
        },
    });
function tc(e) {
    let { appId: t, message: i } = e,
        l = (0, tl.G)(t),
        { data: s } = (0, e2.YY)(t),
        [o, d, c, u] = (0, m.yK)([e3.A, e7.A, D.A], () => {
            let e = e3.A.getApplication(t),
                n = null != e ? (0, tn.A)(e, 45) : void 0,
                l = D.A.getBasicChannel(i.channel_id)?.guild_id;
            return [e7.A.getStoreLayout(t), e7.A.getFetchStatus(t), l, n];
        }, [t, i.channel_id]);
    a.useEffect(() => {
        d === e7.N.NONE && (0, e0.V)(t);
    }, [t, d]);
    let h = o.subscriptions.length,
        g = o.otps.length,
        p = a.useMemo(
            () =>
                h > 0 && g > 0
                    ? ed.intl.formatToPlainString(ed.t["jA648+"], { subCount: h, itemCount: g })
                    : h > 0
                      ? ed.intl.formatToPlainString(ed.t.GSfibA, { count: h })
                      : g > 0
                        ? ed.intl.formatToPlainString(ed.t.j7Go5A, { count: g })
                        : ed.intl.string(ed.t.rMA98g),
            [g, h],
        );
    if (!l || null == s) return null;
    let A = () => {
        (0, eK.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) =>
                (0, r.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: c });
        });
    };
    return (0, r.jsx)(tm, {
        appName: s.name,
        title: ed.intl.formatToPlainString(ed.t.XDRjs5, { appName: s.name }),
        description: p,
        link: `${location.protocol}//${location.host}${eo.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(s.id, tr.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, ti.K)(t, ti.C.STORE_EMBED);
        },
        iconSrc: u,
        onIconClick: () => {
            A(),
                te.default.track(eo.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        children: (0, r.jsx)("div", {
            className: ta.mZ,
            children: (0, r.jsx)(K.$, {
                onClick: () => {
                    A(),
                        te.default.track(eo.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: ed.intl.string(ed.t.kRvlKJ),
            }),
        }),
    });
}
function tu(e) {
    let { appId: t, skuId: i, message: l } = e,
        {
            parentSku: s,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = to(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = td(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t),
        { data: u } = (0, e2.YY)(o?.applicationId),
        h = (0, m.bG)([D.A], () => D.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        g = a.useMemo(() => (null != u ? (0, tn.A)(u, 45) : void 0), [u]),
        p = (0, tl.G)(u?.id ?? ""),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, e6.A)({ skuId: i, initialSubscribeForGuild: h });
    if (!p || null == u || null == o) return null;
    let f = o.type === eo.Puh.SUBSCRIPTION,
        E = !!f && (0, e4.bg)(o.flags),
        C = () => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                    n.bind(n, 719847),
                );
                return (t) =>
                    (0, r.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: u.id, guildId: h });
            });
        },
        I = () => {
            (0, eK.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), C();
                    };
                    return null != e && null != s
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: u.id,
                              skuId: o.id,
                              guildId: h,
                              subscriptionType: E ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
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
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(N.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          ed.intl.string(ed.t.wnifjC),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eJ.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          ed.intl.string(ed.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    "" === v && (v = void 0);
    let _ = () => {
        te.default.track(eo.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: u.id,
            sku_id: o.id,
            area: "purchase_button",
        });
    };
    return (0, r.jsx)(tm, {
        appName: u.name,
        title: o.name,
        description: v,
        link: `${location.protocol}//${location.host}${eo.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, tr.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, ti.K)(u.id, ti.C.SKU_EMBED, i);
        },
        iconSrc: g,
        onIconClick: () => {
            C(),
                te.default.track(eo.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: u.id,
                    sku_id: o.id,
                    area: "app_icon",
                });
        },
        children: (0, r.jsxs)("div", {
            className: ta.w,
            children: [
                (0, r.jsx)(K.$, {
                    variant: "secondary",
                    onClick: () => {
                        I(),
                            te.default.track(eo.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: u.id,
                                sku_id: o.id,
                                area: "view_details",
                            });
                    },
                    text: ed.intl.string(ed.t.DXYfjO),
                }),
                f
                    ? null != d
                        ? (0, r.jsx)(ts.rc, {
                              onClick: A,
                              appId: u.id,
                              subscriptionType: E ? "user" : "guild",
                              skuId: o.id,
                              icon: eq.U,
                              onHasClicked: _,
                              subscriptionPlan: d,
                              state: x,
                          })
                        : (0, r.jsx)(K.$, { variant: "primary", text: ed.intl.string(ed.t.uuzaAK), onClick: I })
                    : (0, r.jsx)(ts.$P, { appId: u.id, sku: o, icon: eq.U, onHasClicked: _ }),
            ],
        }),
    });
}
function tm(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: s, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, r.jsxs)("div", {
        className: ta.iE,
        children: [
            (0, r.jsxs)("div", {
                className: ta.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: ta.qd,
                        children: [
                            (0, r.jsx)(eq.U, { size: "xxs" }),
                            (0, r.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    tt.p5 &&
                        (0, r.jsx)(W.K, {
                            "aria-label": ed.intl.string(ed.t.WqhZss),
                            icon: () => (0, r.jsx)(eX.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, tt.C)(l, () => {
                                    (0, eZ.P0)((0, eQ.o)(ed.intl.string(ed.t["L/PwZf"]), e$.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ta.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: ta.oB,
                        children: [
                            null != s &&
                                (0, r.jsx)(z.D, {
                                    onClick: a,
                                    children: (0, r.jsx)("img", { src: s.href, alt: "", className: ta.Z2 }),
                                }),
                            (0, r.jsxs)("div", {
                                className: ta.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, r.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, r.jsx)(A.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: ta.h_,
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
var th = n(909338),
    tg = n(562708),
    tp = n(702841),
    tA = n(139286);
function tx(e) {
    let { applicationId: t, message: n } = e,
        [i, l, s] = (0, tp.yK)(
            [e3.A],
            () => [e3.A.getApplication(t), e3.A.isFetchingApplication(t), e3.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (a.useEffect(() => {
        null != i || l || s || e2.Ay.fetchApplication(t);
    }, [i, l, s, t]),
    null != i &&
        (0, B.Ie)({
            customInstallUrl: i.customInstallUrl,
            installParams: i.installParams,
            integrationTypesConfig: i.integrationTypesConfig,
        }))
        ? (0, r.jsx)(tf, { application: i, message: n })
        : null;
}
function tf(e) {
    let { application: t, message: n } = e,
        i = a.useCallback(() => {
            (0, tA.x)({
                type: tg.ImpressionTypes.VIEW,
                name: tg.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: l } = (0, E.Ay)(f.A.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(E.f5, {
        value: l,
        children: (0, r.jsx)(eb, { app: t, linkType: Q.J.OAUTH, onView: i, message: n }),
    });
}
var tE = n(778492),
    tC = n(534514),
    tI = n(285796),
    tv = n(857182),
    t_ = n(506774),
    tj = n(228366),
    tN = n(812930);
let ty = "ChannelFollowingBumpChannels",
    tT = new Set(),
    tS = new Set();
class tb extends m.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(w.default, D.A, ev.A, G.default), (tT = new Set(t_.w.get(ty)));
    }
    shouldShowBump(e) {
        return tS.has(e);
    }
}
let tL = new tb(tj.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || tT.has(t)) return !1;
        let l = D.A.getChannel(t),
            s = G.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === eo.rbe.GUILD_ANNOUNCEMENT &&
                (0, tN.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? ev.A.can(eo.xBc.SEND_MESSAGES, l)
                    : ev.A.can(eo.xBc.MANAGE_MESSAGES, l)) &&
                !u.Lt(Number(n.flags), eo.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tS.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tS.has(t.id) && u.Lt(Number(t.flags), eo.pr7.CROSSPOSTED) && tS.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tS.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tS.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        tT.add(t), t_.w.set(ty, tT), tS.clear();
    },
});
var tR = n(419056),
    tk = n(676544);
let tM = (e) => {
    let { channelId: t, messageId: n } = e,
        i = (0, m.bG)([tL], () => tL.shouldShowBump(n), [n]),
        l = a.useCallback(() => {
            tv.A.dismissPublishBump(n), (0, tR.A)(t, n);
        }, [t, n]),
        s = a.useCallback(() => {
            tv.A.dismissPublishBump(n);
        }, [n]),
        o = a.useCallback(() => {
            tv.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, r.jsxs)("div", {
              className: tk.kL,
              children: [
                  (0, r.jsxs)("div", {
                      className: tk.mp,
                      children: [
                          (0, r.jsx)(tE.k, { size: "xs", color: "currentColor", className: tk.Kk }),
                          (0, r.jsx)(tC.D, {
                              variant: "heading-sm/normal",
                              className: tk.dS,
                              children: ed.intl.string(ed.t.hasZoU),
                          }),
                          (0, r.jsx)(A.E, {
                              color: "text-brand",
                              className: tk.mk,
                              variant: "text-sm/normal",
                              children: (0, r.jsx)(z.D, { onClick: l, children: ed.intl.string(ed.t.MFGE51) }),
                          }),
                          (0, r.jsx)(z.D, {
                              onClick: s,
                              children: (0, r.jsx)(tI.a, { size: "xs", color: "currentColor", className: tk.ut }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(A.E, {
                      color: "text-muted",
                      className: tk.qx,
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(z.D, { onClick: o, children: ed.intl.string(ed.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tP = n(175671),
    tw = n(735438),
    tD = n.n(tw),
    tO = n(239947),
    tU = n(403581),
    tG = n(97808),
    tV = n(778712),
    tB = n(520117),
    tH = n(793943),
    tF = n(763754),
    tY = n(973654),
    tz = n(467135),
    tW = n(644235),
    tK = n(153469),
    tJ = n(693227),
    tq = n(312633);
let tX = (e) => e.map((e) => `#${e}`),
    tZ = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, tz.ko)();
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: tq.kL,
                  children: [
                      (0, r.jsx)(tQ, { message: t }),
                      (0, r.jsx)(K.$, {
                          text: ed.intl.string(ed.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              te.default.track(eo.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, tH.nf)(tH.HP.CUSTOM_THEME, { from: tH.xv.SHARE_MESSAGE }),
                                  i({
                                      colors: tX(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, tY.GQ)((0, tW.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    tQ = (e) => {
        let t,
            n,
            i,
            { message: l } = e,
            { sharedClientTheme: s } = l,
            o = (0, tF.Ay)(l),
            d = a.useMemo(
                () =>
                    (0, tw.once)(() => {
                        (0, tA.x)({ type: tg.ImpressionTypes.VIEW, name: tO.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            c = (0, tB.A)({
                onVisible: () => {
                    d();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            u = a.useMemo(() => (void 0 === s ? "" : (0, tK.V9)(tX(s.colors), s.gradient_angle ?? 0)), [s]);
        return void 0 === s
            ? null
            : (0, r.jsxs)("div", {
                  className: tq.pS,
                  ref: c,
                  children: [
                      (0, r.jsx)("div", { className: tq.sl, style: { background: `${u}` } }),
                      (0, r.jsxs)("div", {
                          className: tq.Ix,
                          children: [
                              (0, r.jsxs)(tC.D, {
                                  variant: "heading-md/semibold",
                                  className: tq.qP,
                                  children: [ed.intl.string(tJ.default.KSBBpC), " ", (0, r.jsx)(tU.t, {})],
                              }),
                              (0, r.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: tq.Tb,
                                  children:
                                      ((t = `${ed.intl.format(tJ.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = l.author),
                                      (i = o.nick),
                                      t
                                          .split(" ")
                                          .map((e, t) =>
                                              "__USERNAME__" !== e
                                                  ? (0, r.jsxs)(a.Fragment, { children: [e, " "] }, t)
                                                  : (0, r.jsxs)(
                                                        "span",
                                                        {
                                                            className: tq.H,
                                                            children: [
                                                                (0, r.jsx)(tG.eu, {
                                                                    "aria-label": i,
                                                                    src: n.getAvatarURL(null, 20),
                                                                    size: tV._3.SIZE_20,
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
var t$ = n(167189),
    t0 = n(661531),
    t1 = n(289873),
    t2 = n(696986),
    t3 = n(95561),
    t4 = n(548118),
    t6 = n(250627),
    t5 = n(741231),
    t7 = n(749314),
    t9 = n(71393),
    t8 = n(722888),
    ne = n(43136),
    nt = n(575926),
    nn = n(736132);
function ni(e) {
    let { guildId: t } = e,
        n = (0, m.bG)([t9.A], () => t9.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, t8.G)(t),
        { listingsLoaded: s } = (0, t6.bb)(t),
        o = (0, t6.fZ)(t, { publishedOnly: !0 }),
        c = a.useCallback(async () => {
            te.default.track(eo.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, t3.H$)(t) }),
                await (0, t5.A)(eo.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, tA.A)(
        { type: tg.ImpressionTypes.VIEW, name: tg.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let u = o.length > 0 ? new Date(Math.min(...o.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !s
        ? (0, r.jsx)("div", { className: d()(nn.lm, nn.dc), children: (0, r.jsx)(t1.y, {}) })
        : null == n || null == l
          ? null
          : (0, r.jsxs)("div", {
                className: nn.lm,
                children: [
                    (0, r.jsx)(ne.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, r.jsx)(t2.h, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: nn.qs,
                        children: [
                            (0, r.jsx)(nt.h, {
                                height: "16px",
                                width: "16px",
                                color: t0.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, r.jsx)(tC.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nn.Nl,
                                children: ed.intl.string(ed.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, r.jsx)(t2.h, { size: 16 }),
                    (0, r.jsx)(tC.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.format(ed.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, r.jsx)(t2.h, { size: 4 }),
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, r.jsx)(t2.h, { size: 16 }),
                    (0, r.jsx)(t7.A, {}),
                    (0, r.jsx)(t2.h, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: nn.kS,
                        children: [
                            (0, r.jsx)(t4.Ay, { guild: n }),
                            (0, r.jsxs)("ul", {
                                className: nn.q6,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: ed.intl.format(ed.t.tKZNlb, { listingCount: o.length }),
                                        }),
                                    }),
                                    null != u &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: ed.intl.format(ed.t["kXr8+b"], {
                                                    createdYear: u.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: nn.$h,
                                children: (0, r.jsx)(K.$, {
                                    onClick: c,
                                    icon: nt.A,
                                    text: ed.intl.string(ed.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
var nl = n(390248),
    ns = n(282108),
    nr = n(33358),
    na = n(885574),
    no = n(987773);
function nd(e) {
    let { message: t } = e;
    return (0, r.jsxs)(z.D, {
        onClick: () => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("49629"), n.e("86381"), n.e("35270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, r.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: no.L,
        children: [
            (0, r.jsx)(na.m, { size: "xs", color: "currentColor" }),
            (0, r.jsx)(A.E, { variant: "text-xs/normal", className: no.m, children: ed.intl.string(ed.t["2aXnfa"]) }),
        ],
    });
}
var nc = n(974875),
    nu = n(900019);
function nm(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, m.bG)([nu.A], () => nu.A.canSubmitFpReport(t)),
        l = a.useCallback(() => {
            (0, nc.Q)(n, t);
        }, [n, t]);
    return (0, r.jsx)(K.$, { variant: "secondary", text: ed.intl.string(ed.t["4q1Elf"]), onClick: l, disabled: !i });
}
var nh = n(320448),
    ng = n(713654),
    np = n(958340),
    nA = n(384231),
    nx = n(291812),
    nf = n(375199),
    nE = n(699352),
    nC = n(8455),
    nI = n(885386),
    nv = n(540999),
    n_ = n(47167),
    nj = n(58703);
function nN(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: V.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: ed.intl.formatToPlainString(ed.t["+l04BN"], { origin: e.name, timestamp: t }),
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ev.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t9.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : np.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, nj.Fe)(o.message.timestamp),
            c = e.getChannel(this.parentMessage.channel_id);
        if (null != c && c.guild_id === a.messageReference?.guild_id) {
            var u;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(c.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nN(e, d) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (u = (0, n_.m1)(s, t, n, !0)),
                          timestampLabel: d,
                          accessibilityLabel: ed.intl.formatToPlainString(ed.t["+l04BN"], { origin: u, timestamp: d }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let m = a.messageReference?.guild_id;
        if (null == m) return { snapshotIndex: r };
        let h = l.getGuild(m) ?? s.getGuild(m);
        return null == h ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: nN(h, d) };
    }
}
var nT = n(66834),
    nS = n(449054);
async function nb(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = D.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == t9.A.getGuild(t))
        try {
            await (0, nS.Z2)(t, { object: eo.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, nT.k)(t),
                (l = D.A.getChannel(n));
        } catch {}
    te.default.track(eo.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: D.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, t5.A)(eo.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var nL = n(387408),
    nR = n(427209),
    nk = n(249847);
function nM() {
    return (0, r.jsxs)("div", {
        className: nk.N1,
        children: [
            (0, r.jsx)(nR.A, { size: "xs", className: nk.nr, color: t0.A.colors.TEXT_MUTED }),
            (0, r.jsx)(A.E, {
                className: nk.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: ed.intl.string(ed.t.ToyvLk),
            }),
        ],
    });
}
function nP(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = a.useMemo(() => new ny(t, n, i), [t, n, i]),
        s = (0, m.bG)(
            [D.A, G.default, O.A, ev.A, t9.A, np.A],
            () => l.getForwardInfo(D.A, G.default, O.A, ev.A, t9.A, np.A).footerInfo,
            [l],
            g.A,
        ),
        o = (0, m.bG)([D.A], () => D.A.getChannel(t.messageReference?.channel_id)),
        d = a.useCallback(() => {
            nb(t);
        }, [t]);
    return null == s
        ? null
        : (0, r.jsxs)(z.D, {
              className: nk.xQ,
              onClick: d,
              "aria-label": s.accessibilityLabel,
              children: [
                  null != s.originIconUrl
                      ? (0, r.jsx)("img", { className: nk.yl, src: s.originIconUrl, alt: "" })
                      : null,
                  null == s.originIconUrl && o?.isThread() ? (0, r.jsx)(nw, { channel: o }) : null,
                  (0, r.jsx)(A.E, {
                      className: nk.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${s.originLabel}  \u{2022}  ${s.timestampLabel}`,
                  }),
                  (0, r.jsx)(nh._, { size: "xxs", color: t0.A.colors.TEXT_MUTED }),
              ],
          });
}
function nw(e) {
    let { channel: t } = e,
        n = (0, nC.Vp)({ location: "ForwardFooter" }),
        i = a.useMemo(() => (0, ng.gU)(t), [t]);
    return n.enabled && null != i ? (0, r.jsx)(i, { className: nk.yl, size: "xs", color: "currentColor" }) : null;
}
function nD(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = a.useMemo(() => (0, nL.A)(t, n), [t, n]),
        s = nI.hD.useSetting(),
        o = nI.rs.useSetting(),
        d = (0, m.bG)([nv.A], () => nv.A.isDeveloper),
        c = (0, nA.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        {
            content: u,
            hasSpoilerEmbeds: h,
            hasBailedAst: g,
        } = (0, nf.A)(l, {
            hideSimpleEmbedContent: s && o,
            formatInline: !1,
            allowList: c,
            allowHeading: c,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        p = (0, m.bG)([D.A], () => D.A.getChannel(t.channel_id)),
        A = nI.hH.useSetting();
    return null == p
        ? null
        : (0, r.jsxs)(
              "div",
              {
                  className: nk.kL,
                  children: [
                      (0, r.jsx)("div", { className: nk.hD }),
                      (0, r.jsxs)("div", {
                          className: nk.Qs,
                          children: [
                              (0, r.jsx)(nM, {}),
                              (0, r.jsx)(nx.Ay, { message: l, content: u, compact: A }),
                              (0, nE.A)({
                                  channelMessageProps: { message: l, channel: p, compact: A },
                                  hasSpoilerEmbeds: h,
                                  hasBailedAst: g,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(nP, { message: t, snapshot: n, index: i }),
                          ],
                      }),
                  ],
              },
              i,
          );
}
function nO(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, r.jsx)(nD, { message: t, snapshot: e, index: n }, n)),
    });
}
var nU = n(643612),
    nG = n(607399),
    nV = n(529200),
    nB = n(64493);
function nH(e) {
    let { code: t, message: n } = e,
        [i, l, s] = (0, tp.yK)(
            [eh.A],
            () => [eh.A.getApplication(t), eh.A.isInvalidApplication(t), eh.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, tp.bG)([U.A], () => U.A.getGuildId() ?? void 0),
        [d, c] = a.useState(!1),
        u = a.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, Y.K)(u),
        h = a.useCallback(() => {
            te.default.track(eo.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: nG.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (a.useEffect(() => {
        (0, em.eP)(t);
    }, [t]),
    a.useEffect(() => {
        d && s === eh.e.FETCHED && h();
    }, [d, s, h]),
    a.useEffect(() => {
        d &&
            l &&
            te.default.track(eo.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: nG.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, r.jsxs)(nV.A, {
              containerRef: m,
              children: [
                  (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t.j4KtLa) }),
                  (0, r.jsx)(nV.A.Body, {
                      children: (0, r.jsxs)("div", {
                          className: nB.k,
                          children: [
                              (0, r.jsx)(nV.A.Icon, { expired: !0 }),
                              (0, r.jsx)(nV.A.Info, {
                                  expired: !0,
                                  title: ed.intl.string(ed.t.NaQLEx),
                                  children: ed.intl.string(ed.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || s === eh.e.FETCHING
          ? (0, r.jsxs)(nV.A, {
                containerRef: m,
                children: [
                    (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t.m9hXGR) }),
                    (0, r.jsx)(nV.A.Body, { resolving: !0 }),
                ],
            })
          : (0, r.jsx)(eb, { app: eg.Ay.createFromServer(i), linkType: Q.J.APP_DISCOVERY, onView: h, message: n });
}
var nF = n(229527),
    nY = n(870136),
    nz = n(330075),
    nW = n(412728);
function nK(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, t6.Qi)(n, i),
        s = (0, tp.bG)([U.A], () => U.A.getGuildId());
    return ((0, tA.A)(
        {
            type: nW.z.VIEW,
            name: tg.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || s !== n)
        ? null
        : (0, r.jsx)(nz.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var nJ = n(484724),
    nq = n(953727);
function nX(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, r.jsxs)("svg", {
        ...(0, nq.A)(l),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: i,
            }),
            (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: i,
            }),
        ],
    });
}
var nZ = n(122906),
    nQ = n(401755),
    n$ = n(195580),
    n0 = n(344900);
function n1(e) {
    let { code: t } = e,
        i = (0, m.bG)([nZ.A], () => nZ.A.getGuildTemplate(t));
    if (null == i || i.state === nQ.QB.RESOLVING)
        return (0, r.jsxs)(nV.A, {
            children: [
                (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t.Xj87Yf) }),
                (0, r.jsx)(nV.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === nQ.QB.EXPIRED)
        return (0, r.jsxs)(nV.A, {
            children: [
                (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t.C7ZRNw) }),
                (0, r.jsxs)(nV.A.Body, {
                    children: [
                        (0, r.jsx)(nV.A.Icon, { expired: !0 }),
                        (0, r.jsx)(nV.A.Info, { expired: !0, title: ed.intl.string(ed.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, r.jsx)(K.$, { disabled: !0, variant: "secondary", text: ed.intl.string(ed.t.W7NTWm) })
        : (0, r.jsx)(K.$, {
              onClick: () => {
                  (0, eK.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("29690"),
                          n.e("79924"),
                          n.e("60361"),
                          n.e("54266"),
                          n.e("99430"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("19580"),
                          n.e("16198"),
                          n.e("92152"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, r.jsx)(e, { ...t, guildTemplate: i });
                  });
              },
              loading: i.state === nQ.QB.ACCEPTING,
              variant: "active",
              text: ed.intl.string(ed.t["a3Gl+e"]),
          });
    return (0, r.jsxs)(nV.A, {
        children: [
            (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t.kAvFkO) }),
            (0, r.jsxs)(nV.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: n0.iH,
                        children: [
                            (0, r.jsx)(nX, { className: n$.K }),
                            (0, r.jsx)(nV.A.Info, {
                                title: i.name,
                                children: ed.intl.format(ed.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var n2 = n(842241),
    n3 = n(681154),
    n4 = n(155718);
let n6 = new Set([
    n3.ContentInventoryEntryType.TOP_ARTIST,
    n3.ContentInventoryEntryType.TOP_GAME,
    n3.ContentInventoryEntryType.PLAYED_GAME,
    n3.ContentInventoryEntryType.WATCHED_MEDIA,
    n3.ContentInventoryEntryType.LISTENED_SESSION,
    n3.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var n5 = n(398817),
    n7 = n(857071),
    n9 = n(46054),
    n8 = n(731068),
    ie = n(619517),
    it = n(207133),
    ii = n(835245),
    il = n(844222),
    is = n(463930),
    ir = n(251391),
    ia = n(601255),
    io = n(562819),
    id = n(234914),
    ic = n(59318),
    iu = n(112758),
    im = n(754459),
    ih = n(967144),
    ig = n(342296),
    ip = n(696451),
    iA = n(218394);
function ix(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, r.jsx)("svg", {
        ...(0, nq.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, r.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: i,
        }),
    });
}
var iE = n(717125),
    iC = n(376943),
    iI = n(36491),
    iv = n(752755),
    i_ = n(461715),
    ij = n(381941),
    iN = n(38208);
function iy(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (function (e, t) {
            let n = (0, i_.CI)(e),
                i = (0, tp.bG)([ip.Ay, w.default], () => {
                    let e = w.default.getId();
                    return ip.Ay.isMember(n?.guildId, e);
                }, [n]),
                l = (0, tp.bG)(
                    [iE.A],
                    () => null != n && n?.channelId != null && iE.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(eo.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, tp.cf)([iv.A, t9.A, D.A, G.default, U.A], () => {
                    let e = iv.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = t9.A.getGuild(n?.guildId),
                        i = D.A.getChannel(n?.channelId),
                        l = G.default.getUser(e?.author_id),
                        s = U.A.getGuildId(),
                        r = null != i && (0, iC.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: r,
                    };
                }, [n]),
                h = a.useMemo(() => {
                    let e = (0, i_.tU)({
                        mediaPostEmbedData: r,
                        guild: o,
                        parentChannel: d,
                        user: c,
                        selectedGuildId: u,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: c };
                }, [r, o, d, c, u, m]);
            return (
                a.useEffect(() => {
                    n?.threadId != null &&
                        (iv.A.getEmbedFetchState(n.threadId) !== iv.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, iI.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, im.A)(n.id, ij.Fd),
        u = (0, iu.VL)(n, i, c, !0),
        m = nI.kt.useSetting(),
        h = (0, iA.j)(),
        [g, p] = a.useState(!1),
        [x, E] = a.useState(o?.coverImage == null),
        C = (0, tp.bG)([ip.Ay, G.default], () => ip.Ay.isMember(o?.guildId, G.default.getCurrentUser()?.id), [o]),
        I = (0, tp.bG)([ip.Ay], () => (o?.authorId != null ? ip.Ay.getMember(o.guildId, o.authorId) : null)),
        v = (0, ia.A)(I?.avatarDecoration != null ? I?.avatarDecoration : o?.user?.avatarDecoration),
        [_, j, N] = a.useMemo(() => [I?.colorString ?? "inherit", I?.colorStrings ?? null, I?.colorRoleId], [I]),
        y = (0, ih.gn)(I?.guildId, o?.authorId ?? void 0, j),
        { reducedMotion: T } = a.useContext(il.C),
        [S, b] = a.useState(!1),
        L = a.useCallback(() => {
            p(!0);
        }, [p]),
        R = a.useCallback(() => {
            p(!1);
        }, [p]),
        k = a.useCallback(async () => {
            null != o &&
                ((0, t3.zV)(eo.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: o.threadId,
                    channel_id: i.id,
                    can_access: o.canAccess,
                    is_member: C,
                }),
                o.canAccess
                    ? (0, t5.A)(eo.BVt.CHANNEL(o.guildId, o.threadId, o.messageId))
                    : C
                      ? (0, t5.A)(eo.BVt.CHANNEL(o.guildId, o.parentChannelId))
                      : await nS.Z2(o.guildId, {}, { channelId: o.parentChannelId }));
        }, [o, i, C]);
    if (null == o) return null;
    let M = (0, V.F_)({ avatarDecoration: v, size: (0, io.Te)(tV._3.SIZE_40), canAnimate: S }),
        P = o.user?.getAvatarURL(o.guildId, 40, S),
        O = () => {
            T.enabled || b((e) => !e);
        },
        B = o.coverImage,
        H = null != B && (0, ic.ge)(B);
    return (0, r.jsxs)("div", {
        className: iN.wb,
        children: [
            (0, r.jsxs)("div", {
                className: iN.iT,
                onMouseEnter: L,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === o.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: ed.intl.string(ed.t.rIbh8H),
                                  className: d()(iN.xn, { [iN.p6]: o.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })
                            : (0, r.jsx)(id.A, {
                                  src: !(h && (m || g)) && H ? `${B}?format=png` : B,
                                  backgroundSrc: `${B}?format=png`,
                                  alt: ed.intl.string(ed.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: d()(iN.xn, { [iN.p6]: o.shouldSpoiler }),
                                  imageChildClassName: iN.q_,
                                  onContextMenu: u,
                                  onError: () => E(!0),
                              })),
                    null != o.coverImageOverlayText &&
                        (0, r.jsx)(z.D, {
                            onClick: k,
                            children: (0, r.jsx)("div", {
                                className: iN.nx,
                                children: (0, r.jsxs)("div", {
                                    className: iN.BS,
                                    children: [
                                        (0, r.jsx)(ix, { color: t0.A.colors.WHITE.css }),
                                        (0, r.jsx)(A.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: o.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: iN.iQ,
                children: [
                    (0, r.jsxs)("div", {
                        className: iN.OA,
                        children: [
                            (0, r.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: iN.hF,
                                children: o.title,
                            }),
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: d()(iN.hF, iN.Fq),
                                children: o.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: iN._5,
                        children: [
                            null != o.authorId &&
                                null != P &&
                                (0, r.jsx)(ig.A, {
                                    targetElementRef: s,
                                    userId: o.authorId,
                                    guildId: o.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: o.avatarUrl,
                                    newAnalyticsLocations: [f.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: O,
                                            onMouseLeave: O,
                                            children: (0, r.jsx)(tG.eu, {
                                                ...e,
                                                ref: s,
                                                size: tV._3.SIZE_40,
                                                src: P,
                                                "aria-label": ed.intl.string(ed.t.KXz3XB),
                                                avatarDecoration: M,
                                            }),
                                        }),
                                }),
                            (0, r.jsxs)("div", {
                                className: iN.Ny,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: iN.O9,
                                        children: [
                                            null != o.channelName &&
                                                (0, r.jsx)(ir.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: iN.Xg,
                                                }),
                                            (0, r.jsx)(z.D, {
                                                onClick: k,
                                                className: iN.HA,
                                                children: (0, r.jsx)(tC.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: o.channelName ?? o.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != o.authorName &&
                                        (0, r.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: iN.wn,
                                            children: ed.intl.format(ed.t.voIDKa, {
                                                authorName: o.authorName,
                                                authorNameHook: () =>
                                                    null == o.authorId
                                                        ? (0, r.jsx)(is.V, {
                                                              name: o.authorName,
                                                              colorString: _,
                                                              colorStrings: y,
                                                              className: iN.fh,
                                                          })
                                                        : (0, r.jsx)(
                                                              ig.A,
                                                              {
                                                                  targetElementRef: l,
                                                                  userId: o.authorId,
                                                                  guildId: o.guildId,
                                                                  channelId: i.id,
                                                                  messageId: n.id,
                                                                  roleId: N,
                                                                  avatarUrl: o.avatarUrl,
                                                                  newAnalyticsLocations: [f.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(is.V, {
                                                                          ...e,
                                                                          ref: l,
                                                                          name: o.authorName,
                                                                          colorString: _,
                                                                          colorStrings: y,
                                                                          className: iN.fh,
                                                                      }),
                                                              },
                                                              (0, ii.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            o.canAccess
                                ? (0, r.jsx)(K.$, { variant: "primary", onClick: k, text: o.ctaText })
                                : (0, r.jsx)(K.$, { onClick: k, variant: "primary", text: o.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var iT = n(492230),
    iS = n(704413);
n(801541);
var ib = n(889137),
    iL = n(744593),
    iR = n(123292),
    ik = n(707554),
    iM = n(962514),
    iP = n(126031),
    iw = n(438437),
    iD = n(306417),
    iO = n(233271);
function iU(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)("div", {
        className: iO.AA,
        children: [
            t && (0, r.jsx)(iP.s, { children: ed.intl.string(ed.t["8DAM+5"]) }),
            (0, r.jsxs)(A.E, { variant: "text-md/semibold", color: "none", children: [i, "%"] }),
            (0, r.jsx)(A.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function iG(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: l } = e,
        s = !0 === t.isSelected,
        a = !0 === t.didSelfVote,
        o = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(iD.Dt, {
                attachmentClassName: d()(iO.oh, { [iO.Wx]: l }),
                emojiClassName: iO.Zg,
                media: t.pollMedia,
                fallback: (0, r.jsx)("div", { className: d()(iO.oh, iO.nb) }),
            }),
            s && (0, r.jsx)(iD.Vx, { size: 40, isVictor: o, isExpired: n, className: iO.Dt }),
            l &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(iU, {
                            didSelfVote: a,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: a ? i : void 0,
                        }),
                        ((!n && a) || o) &&
                            (0, r.jsx)(iD.Vx, { size: 18, isVictor: o, isExpired: n, className: iO.Po }),
                    ],
                }),
        ],
    });
}
function iV(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l, ...s } = e;
    return (0, r.jsx)(iD.Fh, {
        className: iO.ry,
        answerClassName: d()(iO.ZF, { [iO.EK]: i !== iw.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, r.jsx)(iG, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l }),
        ...s,
    });
}
var iB = n(290794),
    iH = n(789646),
    iF = n(873174),
    iY = n(615300),
    iz = n(717421),
    iW = n(915089),
    iK = n(956703),
    iJ = n(969632),
    iq = n(140957);
function iX(e) {
    let { percentage: t, label: n, canShowVoterDetails: i, answerId: l } = e,
        s = (0, iW.GV)(),
        { channelId: o, messageId: d } = (0, iB.Tu)(),
        [c, u] = a.useState(""),
        [m, h] = a.useState(!1),
        g = "" !== c && m,
        p = a.useCallback(() => {
            u((0, iJ.$m)(d, o, l));
        }, [d, o, l]),
        x = a.useCallback(() => {
            p(), h(!0);
        }, [p]),
        f = a.useCallback(() => {
            h(!1);
        }, []),
        E = a.useCallback(() => {
            (0, iM.e)({ channelId: o, messageId: d, answerId: l });
        }, [o, d, l]);
    return (
        a.useEffect(() => {
            if (m)
                return (
                    iK.A.addReactChangeListener(p),
                    () => {
                        iK.A.removeReactChangeListener(p);
                    }
                );
        }, [m, p]),
        (0, r.jsxs)("div", {
            className: iq.AA,
            children: [
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              "" !== c
                                  ? (0, r.jsx)(J.m, {
                                        __unsupportedReactNodeAsText: (0, r.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: c,
                                        }),
                                        forceOpen: g,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(iR.Q, {
                                            onMouseEnter: x,
                                            onMouseLeave: f,
                                            onFocus: x,
                                            onBlur: f,
                                            onClick: E,
                                            "aria-describedby": g ? s : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, r.jsx)(iR.Q, {
                                        onMouseEnter: x,
                                        onMouseLeave: f,
                                        onFocus: x,
                                        onBlur: f,
                                        onClick: E,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              g && (0, r.jsx)(iP.s, { id: s, children: c }),
                          ],
                      })
                    : (0, r.jsx)(A.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, r.jsxs)(A.E, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function iZ(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, iz.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: iY.A.Easing.inOut(iY.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, r.jsx)(iF.animated.span, { className: iq.an, style: i, "aria-hidden": !0 });
}
function iQ(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: s, className: a } = e;
    return (0, ib.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: iw.CQ.RADIO_BUTTONS }, () =>
            (0, r.jsx)(iD.k$, { isSelected: n, size: 24, className: a }),
        )
        .with({ answersInteraction: iw.CQ.CHECKBOXES }, () =>
            (0, r.jsx)(iD.e5, { isSelected: n, size: 20, className: a }),
        )
        .with({ answersInteraction: iw.CQ.LIST, didSelfVote: !0 }, () =>
            (0, r.jsx)(iD.Vx, { isVictor: l, isExpired: s, size: 24, className: a }),
        )
        .otherwise(() => null);
}
function i$(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: s } = e,
        a = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        c = !0 === t.isVictor,
        u = t.shouldAnimateTransition;
    return (0, r.jsxs)("div", {
        className: d()(iq.Fk, { [iq.EK]: i !== iw.CQ.LIST, [iq.wH]: a }),
        children: [
            l ? (0, r.jsx)(iZ, { percentage: t.votesPercentage, shouldAnimate: u }) : null,
            null != t.pollMedia.emoji && (0, r.jsx)(iD.Fb, { className: iq.Zg, emoji: t.pollMedia.emoji }),
            (0, r.jsx)(A.E, {
                className: iq.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, r.jsx)(iP.s, { children: ed.intl.string(ed.t["8DAM+5"]) }),
            l &&
                (0, r.jsx)(iX, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId,
                }),
            (0, r.jsx)(iQ, {
                answersInteraction: i,
                isSelected: a,
                didSelfVote: o,
                isVictor: c,
                isExpired: n,
                className: iq.ck,
            }),
        ],
    });
}
function i0(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l, ...s } = e;
    return (0, r.jsx)(iD.Fh, {
        className: iq.ry,
        answerClassName: iq.ZF,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, r.jsx)(i$, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: l,
            }),
        ...s,
    });
}
var i1 = n(2445);
function i2(e) {
    let { media: t } = e;
    return (0, r.jsx)(tC.D, {
        variant: "text-md/medium",
        className: i1.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function i3(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: s } = e;
    return (0, r.jsxs)("div", {
        className: d()(i1.ez, s),
        children: [
            l
                ? (0, r.jsx)(iR.Q, { text: t, onClick: i, variant: "secondary", textVariant: "text-sm/medium" })
                : (0, r.jsx)(A.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function i4(e) {
    let { action: t, channelId: n, messageId: i, isInteractive: l, className: s } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, iH.Mg)(),
        c = a.useCallback(async () => {
            t?.type != null &&
                (await iM.A.handlePollActionTapped({ channelId: n, messageId: i, type: t.type }), d(t.type));
        }, [t?.type, n, i, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, r.jsx)(
                K.$,
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
            ? (0, r.jsx)(iR.Q, {
                  buttonRef: o,
                  onClick: c,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, r.jsx)(i3, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: c,
                  isInteractive: l,
                  className: s,
              });
}
function i6(e) {
    let t,
        { message: n, poll: i, className: l } = e,
        s = (0, iB.hd)(i.containerStyle),
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
            (0, ib.YW)(i.layoutType)
                .with(iL.Z.DEFAULT, () => (0, r.jsx)(i0, { ...t }))
                .with(iL.Z.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(iV, { ...t }))
                .otherwise(() => null));
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: d()(i1.kL, s, l),
              children: (0, r.jsxs)(ik.F, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: i1.wx,
                          children: [
                              (0, r.jsx)(i2, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, r.jsx)(A.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: i1.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      a,
                      (0, r.jsxs)("div", {
                          className: i1.pR,
                          children: [
                              (0, r.jsx)(i4, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: i1.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, r.jsx)(i4, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: i1.vD,
                              }),
                              (0, r.jsx)(i4, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function i5(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(iB.y5, {
        message: t,
        poll: n,
        children: (0, r.jsx)(iH.RZ, { children: (0, r.jsx)(i6, { message: t, poll: n, className: i }) }),
    });
}
var i7 = n(711038),
    i9 = n(892340),
    i8 = n(803306),
    le = n(491182),
    lt = n(639288),
    ln = n(10364),
    li = n(378570),
    ll = n(138298),
    ls = n(761640),
    lr = n(989349),
    la = n.n(lr),
    lo = n(606049),
    ld = n(943815),
    lc = n(447215),
    lu = n(221314),
    lm = n(237507),
    lh = n(334211),
    lg = n(513653);
let lp = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: s, reportedTimestamp: o } = e,
        c = G.default.getUser(t),
        u = a.useMemo(() => (i ? (0, ld.A)((0, nj.i$)(la()(), "LT")) : null), [i]),
        m = (0, lc.P)({ user: c, channelId: l.id, guildId: n, messageId: s })((0, tF.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tV.FT)(tV._3.SIZE_16)) : lg,
        g =
            null != c
                ? ed.intl.format(lu.default["+zqXZs"], { username: c.username, onUserClick: m })
                : ed.intl.string(lu.default.xpRjfS);
    return (0, r.jsxs)("div", {
        className: d()(lh.NB, lh.JZ, u),
        children: [
            (0, r.jsx)(tG.eu, { src: h, size: tV._3.SIZE_16, className: lm.my, "aria-label": "" }),
            (0, r.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: lm.Xh, children: g }),
            (0, r.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, r.jsx)("span", { className: lm.Ek, children: "\u2022" }),
                    (0, r.jsx)(lo.A, { timestamp: o, className: lm.vE }),
                ],
            }),
        ],
    });
};
var lA = n(167684);
function lx(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = a.useMemo(() => new ny(t, n, i), [t, n, i]),
        s = (0, m.bG)(
            [D.A, G.default, O.A, ev.A, t9.A, np.A],
            () => l.getForwardInfo(D.A, G.default, O.A, ev.A, t9.A, np.A).footerInfo,
            [l],
            g.A,
        ),
        o = a.useCallback(() => {
            let e = D.A.getChannel(t.channel_id),
                n = t9.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = e_.A.getCurrentlySelectedChannelId(),
                s = ls.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (ll.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, li.iN)(i),
                te.default.track(eo.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == s
        ? null
        : (0, r.jsxs)(z.D, {
              className: lA.xQ,
              onClick: o,
              "aria-label": s.accessibilityLabel,
              children: [
                  null != s.originIconUrl
                      ? (0, r.jsx)("img", { className: lA.yl, src: s.originIconUrl, alt: "" })
                      : null,
                  (0, r.jsx)(A.E, {
                      className: lA.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${s.originLabel}  \u{2022}  ${s.timestampLabel}`,
                  }),
                  (0, r.jsx)(nh._, { size: "xxs", color: t0.A.colors.TEXT_MUTED }),
              ],
          });
}
function lf(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: s } = e,
        o = (0, tF.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, im.A)(e.id, ij.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                r = (0, iu.m)(e, t, l, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, iu.Jo)(s, i),
                onPopoutRequestClose: a.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, r.jsx)(le.A, {
        childrenExecutedCommand: (0, r.jsx)(lp, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, r.jsx)(lt.Ay, {
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
            renderPopout: ln.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, r.jsx)(nx.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: lA.iU,
        author: o,
    });
}
function lE(e) {
    let { message: t, snapshot: n, index: i } = e,
        [l, s] = a.useState(void 0);
    a.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, i8.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    s(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let o = a.useMemo(() => {
            let e = (0, nL.A)(t, n);
            return null != l && n?.moderatorReport?.reported_user_id != null ? e.set("author", l) : e;
        }, [t, n, l]),
        d = nI.hD.useSetting(),
        c = nI.rs.useSetting(),
        u = (0, m.bG)([nv.A], () => nv.A.isDeveloper),
        h = (0, nA.S)((o.editedTimestamp ?? o.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: p,
            hasBailedAst: A,
        } = (0, nf.A)(o, {
            hideSimpleEmbedContent: d && c,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: u,
            previewLinkTarget: !0,
        }),
        x = (0, m.bG)([D.A], () => D.A.getChannel(t.channel_id));
    return null == x
        ? null
        : (0, r.jsx)(
              "div",
              {
                  className: lA.kL,
                  children: (0, r.jsxs)("div", {
                      className: lA.Qs,
                      children: [
                          (0, r.jsx)(lf, {
                              mergedMessageRecord: o,
                              content: g,
                              channel: x,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, nE.A)({
                              channelMessageProps: { message: o, channel: x, compact: !1 },
                              hasSpoilerEmbeds: p,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: lA.Mf,
                          }),
                          (0, r.jsx)(lx, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function lC(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, r.jsx)(lE, { message: t, snapshot: e, index: n }, n)),
    });
}
var lI = n(302031),
    lv = n(738188),
    l_ = n(239093),
    lj = n(89453);
function lN(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === l_.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        s = t.fields?.find((e) => e.rawName === l_.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == s || null == s.rawValue ? void 0 : parseFloat(s.rawValue);
    return null == l || null == a
        ? null
        : (0, r.jsxs)(z.D, {
              onClick: () => {
                  (0, eK.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("57352"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: l,
                              source: l_.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: lj.o3,
              children: [
                  (0, r.jsxs)("div", {
                      className: lj.qZ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: lj.U1,
                              children: [
                                  (0, r.jsx)(lv.i, { className: lj.QW, color: t0.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, r.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: ed.intl.string(ed.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: lj.VU,
                              children: (0, r.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: ed.intl.format(ed.t.eevFb6, { daysAgo: la()().diff(la().unix(a), "days") }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: lj.vv,
                              children: (0, r.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ed.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: lj.xQ,
                      children: (0, r.jsx)(iR.Q, { text: ed.intl.string(ed.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var ly = n(349288),
    lT = n(393033),
    lS = n(903009);
function lb(e) {
    let { classificationId: t } = e;
    return (0, r.jsx)(ly.Anchor, {
        onClick: () => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("57352"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: l_.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: lS.zh,
        children: ed.intl.string(ed.t.QsqdXC),
    });
}
function lL(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(ly.Anchor, { className: lS.zh, href: t, children: ed.intl.string(ed.t["8/GdRB"]) });
}
function lR(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case l_.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(lb, { classificationId: n });
        case l_.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(lL, { learnMoreLink: i });
        default:
            return null;
    }
}
function lk(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(tE.k, { size: "xs", color: t0.A.colors.TEXT_LINK.css }),
            danger: (0, r.jsx)(lv.i, { color: t0.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, r.jsx)("div", { className: lS.Kk, children: n[t] }) : null;
}
function lM(e) {
    let { children: t, theme: n } = e,
        i = { default: lS._y, danger: lS.yk };
    return (0, r.jsx)("div", { className: i[n ?? "default"], children: t });
}
function lP(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, lT.f4)(e.embed);
    return null == n
        ? null
        : (0, r.jsxs)(z.D, {
              className: lS.o3,
              children: [
                  (0, r.jsxs)("div", {
                      className: lS.qZ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: lS.U1,
                              children: [
                                  (0, r.jsx)(lk, { iconType: n.icon }),
                                  (0, r.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: lS.VU,
                              children: (0, r.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: ed.intl.format(ed.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), la()().diff(la().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: lS.vv,
                              children: (0, r.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(lM, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, r.jsx)(
                              lR,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var lw = n(318254),
    lD = n(825484),
    lO = n(875444),
    lU = n(723090),
    lG = n(801228),
    lV = n(561794),
    lB = n(871123),
    lH = n(733391),
    lF = n(832163),
    lY = n(317560),
    lz = n(533406),
    lW = n(971146),
    lK = n(300182),
    lJ = n(467884),
    lq = n(918374);
function lX(e) {
    let { sku: t, normalPrice: n, discountedPrice: i, discountPercent: l } = e,
        s = a.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, r.jsx)("div", {
                          className: lq.pt,
                          children: (0, r.jsx)(A.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: ed.intl.format(ed.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, r.jsx)(lw.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        o = null != l && null != i;
    return (0, r.jsx)("div", {
        className: d()(lq.PB, { [lq.un]: o }),
        children: o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      null != n &&
                          (0, r.jsx)(A.E, {
                              className: lq.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, r.jsx)(A.E, { variant: "text-md/bold", lineClamp: 1, children: i }),
                      (0, r.jsxs)(A.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", l, ")"],
                      }),
                      s,
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [null != n && (0, r.jsx)(A.E, { variant: "text-md/bold", lineClamp: 1, children: n }), s],
              }),
    });
}
function lZ(e) {
    let { applicationId: t, skuId: n, channel: i } = e,
        l = (0, m.bG)([lF.A], () => lF.A.getGuildIdFromApplicationId(t));
    return null == l ? null : (0, r.jsx)(lQ, { guildId: l, skuId: n, channel: i });
}
function lQ(e) {
    let { guildId: t, skuId: n, channel: i } = e,
        l = (0, m.bG)([e8.A], () => e8.A.isFetchingForSKU(n)),
        s = (0, lG.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        o = s?.applicationId,
        d = (0, m.bG)([e3.A], () => null != o && e3.A.isFetchingApplication(o)),
        c = (0, m.bG)([e3.A], () => null != o && e3.A.didFetchingApplicationFail(o)),
        u = (0, ek.h)(o),
        { analyticsLocations: h } = (0, E.Ay)(f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, lV.pE)();
    let g = (0, m.bG)([G.default], () =>
            i.isDM() && null != i.recipients && 0 !== i.recipients.length ? G.default.getUser(i.recipients[0]) : null,
        ),
        p = (0, m.bG)([lF.A], () => (null != n ? lF.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: x, primaryIconLabel: C } = a.useMemo(() => (0, lB.Cv)(s, o), [s, o]),
        { normalPrice: I, discountedPrice: v, discountPercent: _ } = (0, lU.CD)({ sku: s });
    a.useEffect(() => {
        null == t || null == n || e8.A.isFetchingForSKU(n) || (0, lH.qf)(t, n);
    }, [t, n]);
    let j = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    s?.applicationId != null &&
                        (0, lY.R)({
                            skuId: n,
                            applicationId: s.applicationId,
                            isStorefront: !1,
                            analyticsLocations: h,
                        });
            },
            [n, s, h],
        ),
        N = a.useCallback(() => {
            null != s &&
                p &&
                (0, lz.a)(
                    s,
                    { isGift: !1 },
                    { analyticsLocations: [f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [s, t, p]),
        y = a.useCallback(() => {
            null != s &&
                (0, lz.a)(
                    s,
                    { isGift: !0, giftRecipient: g ?? void 0 },
                    { analyticsLocations: [f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [s, g]),
        T = null != o && null == u && !c;
    if ((l || d || T) && (null == s || null == u))
        return (0, r.jsx)("div", { className: lq.kL, children: (0, r.jsx)(t1.y, { className: lq.u1 }) });
    if (null == s || null == u || !(0, lO.A)(u) || u.guildId !== t) return null;
    let S = v ?? I;
    return (0, r.jsxs)("div", {
        className: lq.kL,
        children: [
            (0, r.jsx)(lJ.A, { className: lq.Nr, skuId: n, variant: lJ.s.EMBEDDED, onClick: j, analyticsLocations: h }),
            (0, r.jsxs)("div", {
                className: lq.zH,
                children: [
                    (0, r.jsxs)("div", {
                        className: lq.lI,
                        children: [
                            (0, r.jsx)(lW.V, {}),
                            (0, r.jsxs)("div", {
                                className: lq.PB,
                                children: [
                                    null != x && (0, r.jsx)("img", { src: x.toString(), alt: C, className: lq.ye }),
                                    (0, r.jsx)(A.E, { variant: "text-md/medium", lineClamp: 1, children: s.name }),
                                ],
                            }),
                            (0, r.jsx)(lX, { sku: s, normalPrice: I, discountedPrice: v, discountPercent: _ }),
                        ],
                    }),
                    (0, r.jsxs)(lD.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(J.m, {
                                text: p ? void 0 : ed.intl.string(ed.t.IqlPbQ),
                                children: (0, r.jsx)(K.$, {
                                    variant: p ? "secondary" : "primary",
                                    onClick: j,
                                    text: ed.intl.string(ed.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            p &&
                                (0, r.jsx)(K.$, {
                                    variant: "primary",
                                    onClick: N,
                                    text:
                                        null != S
                                            ? ed.intl.format(ed.t.Xp5WTn, { price: S })
                                            : ed.intl.string(ed.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, r.jsx)(lK.A, { onGift: y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var l$ = n(68935),
    l0 = n(319060),
    l1 = n(812282),
    l2 = n(922016),
    l3 = n(34337),
    l4 = n(240248),
    l6 = n(256449),
    l5 = n(194004),
    l7 = n(148355),
    l9 = n(780645),
    l8 = n(862482),
    se = n(847374),
    st = n(964486),
    sn = n(235986),
    si = n(624793),
    sl = n(636537),
    ss = n(639245),
    sr = n(87719),
    sa = n(725807),
    so = n(428262),
    sd = n(750385),
    sc = n(850992),
    su = n(625494),
    sm = n(698279),
    sh = n(788868),
    sg = n(631144),
    sp = n(979132);
function sA(e) {
    te.default.track(eo.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? eo.liQ.GUILD_CHANNEL : eo.liQ.DM_CHANNEL,
        location_section: eo.JJy.STICKER_POPOUT,
    }),
        (0, sr.e)();
}
function sx(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(sn.A, {
        children: [
            (0, r.jsx)(l7.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, r.jsxs)(sn.A, {
                direction: sn.A.Direction.VERTICAL,
                justify: sn.A.Justify.CENTER,
                className: sp.bM,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: (0, r.jsx)(l9.A, { children: t.name }) }),
                    null != n && (0, r.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let sf = (e) => {
        let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
            [s, o, d] = (0, m.yK)(
                [sd.A],
                () => [sd.A.getStickerPack(n.pack_id), !sd.A.hasLoadedStickerPacks, sd.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            c = ((e) => {
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
            })({ sticker: n, stickerPack: s });
        (0, l6.Sr)(n.pack_id);
        let u = (0, l6.pD)(i),
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
            te.default.track(eo.HAw.OPEN_POPOUT, {
                type: eo.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, t3.dI)(e),
            });
        }, [n.pack_id]),
        o || null == s)
            ? (0, r.jsx)(l3.Y0, { className: sg.v0 })
            : (0, r.jsxs)(l3.Uq, {
                  className: sg.Bm,
                  children: [
                      (0, r.jsx)(tC.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, r.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? ed.intl.format(ed.t.auckXz, { stickerPackName: s.name })
                              : ed.intl.format(ed.t.OzB6e3, { stickerPackName: s.name }),
                      }),
                      (0, r.jsx)("ul", {
                          className: sg.pQ,
                          children: c.map((e) => (0, r.jsx)(l7.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, r.jsx)("div", {
                              className: sg.j0,
                              children: (0, r.jsx)(
                                  K.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ed.intl.string(ed.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  su._.dispatchToLastSubscribed(eo.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: sm.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && sc.bM.setActiveCategoryIndex(i);
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
    sE = (e) => {
        let t,
            { sticker: n, channel: i, closePopout: l, refreshPositionKey: s } = e,
            [o, c] = a.useState(null),
            [u, h] = a.useState(!1),
            g = G.default.getCurrentUser(),
            p = so.Ay.canUseCustomStickersEverywhere(g),
            x = (0, m.bG)([t9.A], () => t9.A.getGuild(n.guild_id)),
            f = null != x,
            [E, C] = a.useState(!1),
            [I, v] = a.useState(null),
            _ = a.useMemo(
                () => ({
                    page: null != i.guild_id ? eo.liQ.GUILD_CHANNEL : eo.liQ.DM_CHANNEL,
                    section: eo.JJy.STICKER_POPOUT,
                }),
                [i.guild_id],
            ),
            { current: j } = a.useRef({ guild_id: i.getGuildId(), ...(0, t3.dI)(i) }),
            N = { stickerSourceGuild: x, refreshPositionKey: s },
            y = a.useRef(N);
        a.useEffect(() => {
            y.current = N;
        }),
            a.useEffect(() => {
                let { stickerSourceGuild: e } = y.current;
                (async () => {
                    if (null == e || e.features.has(eo.GuildFeatures.DISCOVERABLE)) {
                        let e;
                        c(
                            await ((e = n.id),
                            sl.Bo.get({ url: eo.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, nS.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    h(!0);
                })();
            }, [n.id, f]);
        let T = n.guild_id === i.getGuildId(),
            S = null != o,
            b = !1,
            L = "Custom Sticker Popout";
        p
            ? (t = f
                  ? T
                      ? ed.intl.string(ed.t.fZ0DiG)
                      : ed.intl.string(ed.t["1f6D9m"])
                  : S
                    ? ed.intl.string(ed.t.yHmoR9)
                    : ed.intl.string(ed.t.vZaScH))
            : f
              ? ((t = T ? ed.intl.string(ed.t.jNphpt) : ed.intl.string(ed.t.lyD5ZW)),
                (b = !0),
                (L = "Custom Sticker Popout (Upsell)"))
              : S
                ? ((t = ed.intl.string(ed.t.IuXYch)), (b = !0), (L = "Custom Sticker Popout (Upsell)"))
                : ((t = ed.intl.format(ed.t.hGWuxU, {
                      openPremiumSettings: () => {
                          sA(i), l();
                      },
                  })),
                  (L = "Custom Sticker Popout (Soft Upsell)"));
        let R = !b && !f && S && p;
        if (
            (a.useEffect(() => {
                let { refreshPositionKey: e } = y.current;
                e();
            }, [u, o]),
            (0, st.Ay)(() => {
                te.default.track(eo.HAw.OPEN_POPOUT, { type: L, ...j });
            }),
            !u)
        )
            return (0, r.jsx)(l3.Y0, { className: sg.v0 });
        {
            let e;
            return (0, r.jsxs)(l3.Uq, {
                className: sp.Bm,
                children: [
                    ((e = async () => {
                        if (null == o || f) return;
                        l();
                        let e = o.id;
                        try {
                            await nT.A.joinGuild(e), nT.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, r.jsxs)("div", {
                        className: sp.gH,
                        children: [
                            (0, r.jsx)(sx, { description: t, sticker: n }),
                            b &&
                                (0, r.jsx)(sa.A, {
                                    className: sp.lI,
                                    subscriptionTier: sh.pe.TIER_2,
                                    size: l8.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: ed.intl.string(ed.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: f || null == o ? void 0 : o,
                                    premiumModalAnalyticsLocation: _,
                                }),
                            R &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: sp.lI,
                                    children: (0, r.jsx)(K.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ed.intl.string(ed.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != x || null != o) &&
                        (() => {
                            if (!S && !f) return;
                            let e = (o?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != o ? si.GO.createFromDiscoverableGuild(o) : si.GO.createFromGuildRecord(x);
                            return (0, r.jsxs)("div", {
                                className: sp.tl,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: sp.YW,
                                        children: f ? ed.intl.string(ed.t.kx6pEG) : ed.intl.string(ed.t.pDE7Gb),
                                    }),
                                    (0, r.jsx)(ss.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: f,
                                        isDisplayingJoinGuildButtonInPopout: R,
                                    }),
                                    !f &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(z.D, {
                                                    onClick: () => {
                                                        s(), C(!E);
                                                    },
                                                    className: sp.wK,
                                                    children: (0, r.jsxs)(sn.A, {
                                                        children: [
                                                            (0, r.jsx)(A.E, {
                                                                className: sp.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: ed.intl.string(ed.t.vtH5hn),
                                                            }),
                                                            (0, r.jsx)(se.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: d()(sp.ZB, { [sp.cP]: !E }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                E &&
                                                    (0, r.jsx)(sn.A, {
                                                        wrap: sn.A.Wrap.WRAP,
                                                        align: sn.A.Align.START,
                                                        justify: sn.A.Justify.START,
                                                        className: sp.LX,
                                                        children: e.map((e) =>
                                                            (0, r.jsx)(
                                                                J.m,
                                                                {
                                                                    text: e.name,
                                                                    ...l3.Uk,
                                                                    children: (0, r.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: d()(sp.Th, {
                                                                                [sg.vT]: null != I && I !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                v(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                v(null);
                                                                            },
                                                                            children: (0, r.jsx)(l7.A, {
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
function sC(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(l3.Uq, {
        className: sg.Bm,
        children: (0, r.jsx)(sx, {
            sticker: i,
            description: ed.intl.format(ed.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), sA(t);
                },
            }),
        }),
    });
}
let sI = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [s, a] = (0, l6.Zq)(t, !0);
    return null != s && (0, l$.FD)(s)
        ? (0, r.jsx)(sf, { sticker: s, closePopout: i, channel: n, refreshPositionKey: l })
        : null != s && (0, l$.Xw)(s)
          ? (0, r.jsx)(sE, { sticker: s, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? null == s
                ? (0, r.jsx)(sC, { channel: n, closePopout: i, sticker: t })
                : (i(), null)
            : (0, r.jsx)(l3.Y0, {});
};
var sv = n(76513);
let s_ = (0, l4.xI)(l0.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    sj = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = a.useRef(null),
            [s, o] = a.useState(!0),
            [d, c] = a.useState(String(Date.now())),
            [u] = (0, l6.Zq)(t, i),
            { analyticsLocations: m } = (0, E.Ay)(f.A.STICKER_MESSAGE),
            h = (0, r.jsxs)("span", {
                className: sv.Zl,
                children: [(0, r.jsx)(l1.s, { size: "xs", color: "currentColor", className: sv.lA }), (u ?? t).name],
            });
        return (0, r.jsx)(E.f5, {
            value: m,
            children: (0, r.jsx)("div", {
                className: sv.be,
                children: (0, r.jsx)(l2.Y, {
                    align: "center",
                    animation: l2.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, r.jsx)(sI, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, r.jsx)(J.m, {
                            ...l3.Uk,
                            shouldShow: s,
                            __unsupportedReactNodeAsText: (0, l3.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    t3.Ay.trackWithMetadata(eo.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: sh.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, l5.Tw)(e.format_type),
                                        is_custom: (0, l5.zN)(e.type),
                                    });
                            },
                            children: (0, r.jsx)(z.D, {
                                innerRef: l,
                                className: sv.q7,
                                onClick: (e) => {
                                    o(!s), n(e);
                                },
                                tag: "span",
                                children: (0, r.jsx)(l7.A, { isInteracting: i, size: s_, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var sN = n(406704),
    sy = n(531142),
    sT = n(140735),
    sS = n(442433),
    sb = n(143413),
    sL = n(935208),
    sR = n(321045),
    sk = n(456874),
    sM = n(707539),
    sP = n(80682),
    sw = n(465364),
    sD = n(805964),
    sO = n(943220);
function sU(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, m.cf)(
            [O.A],
            () => ({ isBlocked: O.A.isBlockedForMessage(t), isIgnored: O.A.isIgnoredForMessage(t) }),
            [t],
        ),
        s = a.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, sP.Eq)(s, "ThreadMessageAccessoryMessage");
    let o = a.useMemo(
        () => (null != t.content && "" !== t.content ? (0, sw.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, r.jsxs)("div", {
        className: lh.up,
        children: [
            (0, r.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: lh.FJ }),
            (0, r.jsx)(sO.A, { message: t, channel: n, compact: !0 }),
            (0, r.jsx)("div", {
                className: lh.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: s,
                        leadingIcon: a,
                        trailingIcon: o,
                    } = (0, sD.o)(e, t, n, i, lh.tP, {
                        trailingIconClass: lh._v,
                        leadingIconClass: lh.a5,
                        iconSize: $.eJ,
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [a, s ?? (0, r.jsx)("span", { className: lh.dp, children: l }), o],
                    });
                })(t, o, i, l),
            }),
        ],
    });
}
var sG = n(747926),
    sV = n(650583),
    sB = n(74791);
function sH(e) {
    let { message: t, compact: n } = e,
        i = (0, m.bG)([D.A], () => D.A.getChannel(sL.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, r.jsx)(sF, { channel: i, compact: n, isSystemMessage: (0, sb.A)(t) });
}
function sF(e) {
    var t;
    let i,
        l,
        s,
        { channel: a, compact: o, isSystemMessage: c } = e,
        u = (0, n_.Ay)(a),
        h = (0, m.bG)([sk.A], () => sk.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, m.bG)([sk.A], () => sk.A.getMostRecentMessage(t.id))),
            (l = (0, m.bG)([sk.A], () => sk.A.getCount(t.id))),
            (s = (0, sM.JO)(t)),
            t.threadMetadata?.archived
                ? ed.intl.string(ed.t.ZTo4HS)
                : null == l || 0 === l
                  ? ed.intl.string(ed.t.HYtNyE)
                  : null == i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("span", { children: ed.intl.string(ed.t.ZTo4HS) }),
                              (0, r.jsx)("span", { className: sB.vE, children: (0, sM.aK)(s) }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(sU, { message: i, channel: t }),
                              (0, r.jsx)("span", { className: sB.vE, children: (0, sM.aK)(s) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: d()(sB.GI, { [sB.E]: !o, [sB.E_]: c }) }),
            (0, r.jsx)(z.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, sG.JA)(a, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === sV.dh.SPACE || e.key === sV.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, sG.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, sS.L3)(e, async () => {
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
                        return (t) => (0, r.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": ed.intl.string(ed.t["8ipxiY"]),
                className: d()(sB.kL, { [sB.og]: c }),
                children: (0, r.jsxs)(sy.R, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: sB.kq,
                            children: [
                                (0, r.jsx)(sT.A, { children: ed.intl.string(ed.t["7Xm5QI"]) }),
                                (0, r.jsx)("span", { className: sB.UU, children: u }),
                                (0, r.jsx)("span", {
                                    className: sB.lO,
                                    "aria-hidden": !p,
                                    children: (0, sR.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: sB.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var sY = n(383233),
    sz = n(834942),
    sW = n(644447),
    sK = n(927813),
    sJ = n(659674),
    sq = n(998218),
    sX = n(5095),
    sZ = n(294520),
    sQ = n(320095),
    s$ = n(863439),
    s0 = n(707985),
    s1 = n(730852),
    s2 = n(265422),
    s3 = n(986268);
function s4(e) {
    let { guild: t, channel: n, message: i } = e,
        l = U.A.getGuildId(),
        s = e_.A.getChannelId(l),
        o = a.useCallback(() => {
            te.default.track(eo.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: s,
            }),
                (0, s2.i)(t.id, n.id),
                s1.default.selectVoiceChannel(n.id);
        }, [i, t, n, l, s]),
        d = (0, r.jsx)(nV.A.Channel, { channel: n });
    return (0, r.jsx)(nV.A, {
        children: (0, r.jsxs)(nV.A.Body, {
            children: [
                (0, r.jsxs)("div", {
                    className: n0.iH,
                    children: [
                        (0, r.jsx)(nV.A.Icon, { guild: t }),
                        (0, r.jsx)(nV.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, r.jsxs)("span", {
                                className: n0.FA,
                                children: [
                                    ed.intl.format(ed.t["2wimj5"], { guildName: t.name }),
                                    (0, r.jsx)("span", {
                                        className: n0.E3,
                                        children: (0, r.jsx)(s3.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: n0.UD,
                    children: (0, r.jsx)(K.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? ed.intl.string(ed.t["7vb2cc"]) : ed.intl.string(ed.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function s6(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        s = D.A.getChannel(l),
        a = t9.A.getGuild(i);
    return null != s && s.isGuildVocal() && null != a && ev.A.can(eo.xBc.VIEW_CHANNEL, s) && ev.A.can(eo.xBc.CONNECT, s)
        ? (0, r.jsx)(s4, { guild: a, channel: s, message: n })
        : null;
}
var s5 = n(789645),
    s7 = n(298236),
    s9 = n(953756),
    s8 = n(564107),
    re = n(503556),
    rt = n(143517);
function rn(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: l,
            getOnMediaItemContextMenu: s,
            shouldHideMediaOptions: a,
            enabledContentHarmTypeFlags: o,
            onSuppressEmbed: c,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, s9.zn)();
    return 0 === t.length
        ? null
        : (0, r.jsx)(s8.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: s,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: o,
              children: (0, r.jsx)(s7.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, r.jsx)(s9.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, r.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, r.jsx)(s9.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, r.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: d()(re.O0, rt.k, rt.z, { [re.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, r.jsx)(z.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: re.PP,
                                                  onClick: c,
                                                  "aria-label": ed.intl.string(ed.t.GT3fNz),
                                                  children: (0, r.jsx)(s5.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, n5.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ri = n(451988),
    rl = n(261958),
    rs = n(212245),
    rr = n(62583),
    ra = n(956549),
    ro = n(550151),
    rd = n(392054),
    rc = n(853390),
    ru = n(290863),
    rm = n(403362),
    rh = n(811024),
    rg = n(360469),
    rp = n(212242);
let rA = a.memo((e) => {
    let { start: t } = e,
        [n, i] = a.useState(0),
        l = (0, iA.j)(),
        s = (0, m.bG)([q.A], () => q.A.useReducedMotion),
        r = !1 === l || s;
    return (
        a.useEffect(() => {
            let e = new ri.IX();
            return (
                e.start(r ? 15 * sK.A.Millis.SECOND : sK.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / sK.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [r, t]),
        (0, rc.fU)(n)
    );
});
rA.displayName = "ActivityRuntimeCounter";
let rx = a.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: s } = e,
        { analyticsLocations: o } = (0, E.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, rs.p)(),
        u = (0, m.bG)([D.A], () => D.A.getChannel(i), [i]),
        h = u?.isThread?.() ? u?.parent_id : i,
        g = (0, m.bG)([w.default], () => w.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: C,
        } = (0, m.cf)(
            [eD.Ay],
            () => ({
                embeddedActivity: eD.Ay.getEmbeddedActivitiesForChannel(h ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: eD.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eD.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        I = p?.userIds,
        v = (0, m.yK)(
            [G.default],
            () =>
                Array.from(I ?? [])
                    .map((e) => G.default.getUser(e))
                    .filter(rm.Vq),
            [I],
        ),
        _ = (0, m.bG)([ru.A], () => {
            if (null == I) return null;
            for (let e of I) {
                let t = ru.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, I]),
        j = _?.details,
        N = a.useMemo(() => {
            let e = new eg.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = rg.Gl), e;
        }, [n]),
        y = (0, ro.vG)({ userId: g, channelId: i, application: N }),
        T = null == p,
        S = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return a.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            r = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? ed.intl.string(ed.t.RscU7I) : ed.intl.string(ed.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, rh.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: ed.intl.string(ed.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : ed.intl.string(ed.t.f41E1g) };
                        if (null != n && n !== ro.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case ro.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = ed.intl.string(ed.t.hHGrWz);
                                    break;
                                case ro.Gy.ACTIVITY_AGE_GATED:
                                    e = ed.intl.string(ed.t["4WuFRE"]);
                                    break;
                                case ro.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = ed.intl.string(ed.t.uGDCcw);
                                    break;
                                case ro.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = ed.intl.string(ed.t.UXoQTp);
                                    break;
                                case ro.Gy.CHANNEL_FULL:
                                    e = ed.intl.string(ed.t.rZfiNq);
                                    break;
                                case ro.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = ed.intl.string(ed.t.w5SAps);
                                    break;
                                case ro.Gy.NO_CHANNEL:
                                case ro.Gy.NO_GUILD:
                                case ro.Gy.NO_USER:
                                case ro.Gy.IS_AFK_CHANNEL:
                                    e = ed.intl.string(ed.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: y, currentEmbeddedActivity: x, channel: u }),
        b = a.useId(),
        L = null != C && C.isLaunching && C.componentId === b,
        R = async () => {
            te.default.track(eo.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: u?.type,
                is_activity_start: T,
                cta: "Play",
            }),
                T
                    ? await (0, ra.A)({
                          targetApplicationId: n.id,
                          channelId: i,
                          locationObject: c.location,
                          analyticsLocations: o,
                          componentId: b,
                          commandOrigin: rd.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, rr.A)({
                          applicationId: p.applicationId,
                          activityChannelId: i,
                          locationObject: c.location,
                          analyticsLocations: o,
                          componentId: b,
                      });
        },
        k = S.disabled ? ed.intl.string(ed.t.JBnc7N) : ed.intl.string(ed.t.cX9uLZ),
        M = eT(N, () => {
            te.default.track(eo.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: u?.type,
                cta: "View",
            });
        }),
        P = V.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    S.disabled && (t = S.tooltip);
    let O = v.length,
        U = _?.timestamps?.start ?? _?.created_at,
        B = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case eo.$pd.STREAMING:
                    return { text: ed.intl.formatToPlainString(ed.t.tyCw2q, { count: n }), Icon: el.o };
                case eo.$pd.LISTENING:
                    return { text: ed.intl.formatToPlainString(ed.t["2l8yka"], { count: n }), Icon: es.T };
                default:
                    return { text: ed.intl.formatToPlainString(ed.t.yJj035, { count: n }), Icon: er._ };
            }
        })({ activity: _, activityUsersCount: O }),
        H = [
            {
                label: S.text,
                trackingArea: Z.kY.PLAY,
                onClick: R,
                disabled: S.disabled,
                disabledReason: t,
                submitting: L,
            },
        ];
    return (0, r.jsx)(ei, {
        header: ed.intl.string(ed.t.pkq6Vq),
        title: n.name,
        iconSrc: P,
        info: (0, r.jsx)("div", {
            className: rp.QR,
            children: T
                ? (0, r.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: k })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != j &&
                              (0, r.jsxs)("div", {
                                  className: rp.oL,
                                  children: [
                                      null != U &&
                                          (0, r.jsxs)("div", {
                                              className: rp.DT,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: rp.y9,
                                                      children: (0, r.jsx)(B.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, r.jsx)(rA, { start: U }),
                                                  }),
                                              ],
                                          }),
                                      (0, r.jsxs)("div", {
                                          className: d()(rp.DT, rp.PK),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  children: (0, r.jsx)(rl.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          O > 0 && (0, r.jsx)(eu, { activityUsers: v, guildId: l, activityText: B.text }),
                      ],
                  }),
        }),
        actions: H,
        onClickContent: M,
        trackingConfig: {
            id: n.id,
            linkType: Q.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: s.id,
            isDeadEnd: T,
        },
    });
});
var rf = n(164664),
    rE = n(439401),
    rC = n(657044),
    rI = n(863574),
    rv = n(707606),
    r_ = n(456412),
    rj = n(993408),
    rN = n(242874),
    ry = n(499454),
    rT = n(75825),
    rS = n(928550),
    rb = n(976860),
    rL = n(780964),
    rR = n(766075),
    rk = n(30793),
    rM = n(189081);
function rP(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, r.jsx)("svg", {
        ...(0, nq.A)(i),
        viewBox: "0 0 136 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsxs)("g", {
            className: n,
            fill: t,
            children: [
                (0, r.jsx)("path", {
                    d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
                    fill: t,
                }),
                (0, r.jsx)("path", {
                    d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
                    fill: t,
                }),
            ],
        }),
    });
}
var rw = n(738533),
    rD = n(45938),
    rO = n(615396),
    rU = n(427262),
    rG = n(936504),
    rV = n(820284),
    rB = n(674378),
    rH = n(598429),
    rF = n(979604);
function rY(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: l,
            disabledVariant: s,
            hideNotLaunchable: a,
            tooltipPosition: o,
            onClick: d,
            className: c,
            source: u,
            hover: h,
            innerClassName: g,
        } = e,
        p = {
            fullWidth: n,
            size: i,
            disabledVariant: s,
            tooltipPosition: o,
            onClick: d,
            className: c,
            hover: h,
            innerClassName: g,
        },
        A = (0, m.bG)([rM.A], () => rM.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        E = (0, m.bG)([e9.A], () => null != f && !e9.A.didFetchingSkuFail(f));
    return null != A && (0, rB.XZ)(A)
        ? (0, r.jsx)(rF.A, { ...p, playButtonVariant: l, libraryApplication: A, source: u })
        : E
          ? (0, r.jsx)("div", { children: "deprecated!" })
          : (0, r.jsx)(rH.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
var rz = n(580630);
function rW(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return ed.intl.string(ed.t.RWouSQ);
    if (e.premium && !n) return ed.intl.string(ed.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, rz.$g)(i.amount, i.currency);
        else return ed.intl.string(ed.t.QQsaCc);
    return ed.intl.string(ed.t.RWouSQ);
}
var rK = n(257727),
    rJ =
        (((l = rJ || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
let rq = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)("div", {
            className: d()(rK.nM, t),
            children: [
                (0, r.jsx)(rC._, { size: "md", color: "currentColor", className: rK.Kk }),
                ed.intl.string(ed.t["7eicAO"]),
            ],
        });
    },
    rX = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsxs)("div", {
            className: d()(rK.nM, n),
            children: [(0, r.jsx)(tU.t, { size: "md", color: "currentColor", className: rK.Kk }), rW(t)],
        });
    },
    rZ = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)("div", { className: d()(rK.EQ, n), children: t.getDisplaySalePercentage() });
    },
    rQ = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)("div", { className: d()(rK.I8, n), children: rW(t, !1) });
    },
    r$ = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: rW(t) });
    },
    r0 = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsxs)("div", {
            className: d()(rK.nM, n),
            children: [(0, r.jsx)(rZ, { sku: t }), (0, r.jsx)(rQ, { sku: t }), (0, r.jsx)(r$, { sku: t })],
        });
    },
    r1 = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", { className: t, children: ed.intl.string(ed.t.QQsaCc) });
    };
class r2 extends a.PureComponent {
    static Types = rJ;
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
                return (0, r.jsx)(r1, { className: d()(t, n) });
            case 1:
                return (0, r.jsx)(rq, { className: d()(t, n) });
            case 3:
                return (0, r.jsx)(rX, { sku: i, className: d()(t, n) });
            case 2:
                return (0, r.jsx)(r0, { sku: i, className: d()(t, n) });
            default:
                return (0, r.jsx)(r$, { className: d()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, r.jsx)(r1, { className: t });
            case 3:
                return (0, r.jsx)(rX, { sku: n, className: d()(rK.OB, t) });
            case 2:
                return (0, r.jsx)(r0, { sku: n, className: d()(rK.dk, t) });
            default:
                return (0, r.jsx)(r$, { className: d()(rK.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, r.jsx)(r1, {});
                break;
            case 2:
                t = (0, r.jsxs)(a.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: rK.nM,
                            children: [(0, r.jsx)(r$, { sku: i }), (0, r.jsx)(rZ, { sku: i })],
                        }),
                        (0, r.jsx)(rQ, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, r.jsx)(r$, { sku: i });
        }
        return (0, r.jsx)("div", { className: d()(rK.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, rK.Pl);
            case 3:
                return this.renderGeneric(e, rK.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, rK.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var r3 = n(842983);
let r4 = {
    [eo.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, r.jsx)("svg", {
                ...(0, nq.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, r.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, r.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ed.intl.string(ed.t["0/xHFO"]),
    },
    [eo.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, r.jsx)("svg", {
                ...(0, nq.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, r.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, r.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ed.intl.string(ed.t.E4u4n5),
    },
    [eo.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...s } = e;
            return (0, r.jsx)("svg", {
                ...(0, nq.A)(s),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, r.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, r.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => ed.intl.string(ed.t.tcawo3),
    },
};
function r6(e) {
    let { operatingSystem: t, className: n } = e,
        i = r4[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, r.jsx)(J.m, { text: i.getLabel(), children: (0, r.jsx)(l, { className: n }) });
}
let r5 = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, r.jsx)("div", {
        className: d()(r3.I, n),
        children: t.map((e) => (0, r.jsx)(r6, { operatingSystem: e, className: d()(r3.A, i) }, e)),
    });
};
var r7 = n(111758);
let r9 = (e) => {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: d()(r7.T, t),
        children: (0, r.jsx)("span", { className: r7.Q, children: ed.intl.string(ed.t["14lP0W"]) }),
    });
};
var r8 = n(246337);
let ae = (e) => {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: d()(r8.T, t),
        children: (0, r.jsx)("span", { className: r8.Q, children: ed.intl.string(ed.t["8IfYqa"]) }),
    });
};
var at = n(868285),
    an = n(358618),
    ai = n(983851),
    al = n(133296),
    as = n(607470),
    ar = n(61251);
class aa extends a.Component {
    _animatedValue = new iY.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), iY.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        iY.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, r.jsx)(iY.A.img, {
            className: d()({ [ar.YC]: i }, t),
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
            ? (0, r.jsx)(iY.A.div, { className: d()(ar.gn, e), style: this.getImageStyle(), children: t })
            : (0, r.jsxs)(iY.A.div, {
                  className: d()(l ? ar.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, r.jsx)(t1.y, {
                                className: ar.u1,
                                itemClassName: ar.$N,
                                type: t1.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ao extends a.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = a.createRef();
    videoTimeout = new ri.Ep();
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
                splashClassName: o,
                splashPlaceholderClassName: c,
                renderMediaOverlay: u,
            } = this.props,
            m = s ? an._ : ai.H;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                nG.Fr
                    ? null
                    : (0, r.jsx)(as.A, {
                          className: d()(ar.Yi, o),
                          muted: s,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, r.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, r.jsx)(at.F, {
                    children: l && e ? null : (0, r.jsx)(aa, { className: d()(ar.NB, c), src: n, title: i }, 0),
                }),
                (0, r.jsx)(z.D, {
                    className: d()(ar.b4, { [ar.HY]: l && e, [ar.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, r.jsx)(m, { className: ar.i2 }) : null,
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
            ? (0, r.jsx)(aa, { className: d()(ar.Yi, l), src: e[s], title: n }, s)
            : (0, r.jsx)(aa, { className: d()(ar.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, r.jsx)(aa, { className: d()(ar.Yi, l), src: n, title: i }, "image")
            : (0, r.jsx)(al.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: ar.mZ,
                  disable: !e,
                  children: (0, r.jsx)(at.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: s, videoLoaded: a } = this.state;
        return n
            ? (0, r.jsx)("div", { className: t })
            : (0, r.jsxs)("figure", {
                  className: d()(ar.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var ad = n(366523),
    ac = n(371794),
    au = n(622413),
    am = n(174264);
class ah extends a.PureComponent {
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
            : (0, r.jsxs)("div", {
                  className: am.ED,
                  children: [
                      (0, r.jsx)(r2, {
                          type: r2.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: s && i ? am.ae : am.Ek,
                      }),
                      (0, r.jsx)(r5, { systems: [eo.uje.WINDOWS], className: am.iD }),
                      s ? (0, r.jsx)("div", { children: "deprecated!" }) : null,
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
            storeListing: o,
        } = this.props;
        return (0, lB.bF)(l)
            ? (0, r.jsx)(ad.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: am.A$,
                  backgroundImageClassName: am.iZ,
                  foregroundImageClassName: am.O7,
              })
            : (0, r.jsxs)(a.Fragment, {
                  children: [
                      (0, r.jsx)(ao, {
                          className: d()(am.H1, { [am.ZC]: s }),
                          video: null != o.previewVideo ? (0, ac.YE)(l.applicationId, o.previewVideo) : void 0,
                          image: null != o.thumbnail ? (0, ac.YE)(l.applicationId, o.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: am.ZI,
                          splashPlaceholderClassName: am.NB,
                      }),
                      l.exclusive
                          ? (0, r.jsx)(ae, { className: d()(am.LJ, { [am.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, r.jsx)(r9, { className: d()(am.LJ, { [am.V9]: e }) })
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
                renderCustomMedia: a,
                isEmbed: o,
            } = this.props,
            d = o ? rI.ug : au.A;
        return (0, r.jsx)(d, {
            className: i,
            renderMedia: null != a ? a : this.renderMedia,
            renderTitle: null != s ? s : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ag = n(981449);
class ap extends a.Component {
    static defaultProps = { renderFallback: eo.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : eo.JJy.APPLICATION_EMBED, object: eo.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, e1.QB)(t);
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
        return (0, r.jsx)("div", {
            className: ag.h,
            children: (0, r.jsx)(K.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: ed.intl.string(ed.t["W+NB90"]),
                onClick: () => {
                    (0, rb.pX)(eo.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: s, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > rI.Tm;
        return (0, r.jsx)(ah, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: l,
            renderCustomTagline: s,
            renderCustomMedia: a,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: s } = this.props;
        if (null != s) return (0, r.jsx)("div", { className: ag.i, children: s() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(eo.hM6.HIDDEN);
        return (0, r.jsxs)("div", {
            className: ag.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, r.jsx)(rY, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: ag.h,
                          source: eo.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, r.jsx)(r2, { type: r2.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            s = n > rI.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, r.jsx)(rI.Wb, { isHorizontal: s })
            : e.productLine === eo.EZt.COLLECTIBLES
              ? (0, r.jsx)(rV.A, { section: eo.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, r.jsx)(rV.A, {
                    section: eo.JJy.APPLICATION_EMBED,
                    children: (0, r.jsx)(rG.N_, {
                        onClick: this.handleLinkClick,
                        to: eo.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let aA = [e9.A, rM.A, e8.A];
function ax(e) {
    let { skuId: t } = e,
        n = e9.A.get(t),
        i = null != n ? e3.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: e9.A.didFetchingSkuFail(t),
        inLibrary: null != n && rM.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? e8.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? rM.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let af = (0, r_.A)((0, rv.A)(ap)),
    aE = m.Ay.connectStores(aA, ax)(af),
    aC = (0, rv.A)(m.Ay.connectStores(aA, ax)(ap));
var aI = n(576171);
function av(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(z.D, {
        className: aI.kP,
        onClick: t,
        children: [
            (0, r.jsx)(rC._, { size: "md", color: "currentColor", className: aI.dy }),
            (0, r.jsx)("div", {
                children: n.isHidden() ? ed.intl.string(ed.t.Wi99Ro) : ed.intl.string(ed.t["+tXad7"]),
            }),
        ],
    });
}
class a_ extends a.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= rI.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === eo.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, rR.openUserSettings)(rL.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? ed.intl.string(ed.t.mT9B49) : ed.intl.string(ed.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, r.jsx)(K.$, {
                  variant: "primary",
                  size: "sm",
                  text: ed.intl.string(ed.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, r.jsx)(K.$, { variant: "primary", size: "sm", text: ed.intl.string(ed.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? ed.intl.string(ed.t.QXgO5w)
            : this.props.isSelfGift
              ? ed.intl.string(ed.t.eEM3dq)
              : ed.intl.string(ed.t.tB8S6u);
    render() {
        return (0, r.jsx)(rI.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class aj extends a.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: eo.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, rb.pX)(eo.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, rb.pX)(eo.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, rR.openUserSettings)(rL.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            te.default.track(eo.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: eo.ZSU.BUTTON_CTA },
            });
        let r = l !== eo.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, ry.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (te.default.track(eo.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            rw.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, lB.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, lY.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, rR.openUserSettings)(rL.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(eo.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(sn.A, {
            justify: sn.A.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(sn.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, r.jsx)(av, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, r.jsxs)(sn.A, {
                    align: sn.A.Align.END,
                    justify: sn.A.Justify.END,
                    className: aI.yu,
                    direction: sn.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: ed.intl.format(ed.t.nZBvUR, { hours: e.expiresAt.diff(la()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? ed.t["4iHwKT"] : ed.t.YeLq88;
        return ed.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, r.jsx)("div", {
                children: (0, r.jsx)(K.$, {
                    variant: "primary",
                    size: "sm",
                    text: ed.intl.string(ed.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let s =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, so.TW)(n)),
            a = e.redeemed || s || e.isClaimed || !n.verified,
            o = e.redeemed
                ? ed.intl.string(ed.t.BTihou)
                : null != e.giftStyle
                  ? ed.intl.string(ed.t.TiZFqX)
                  : ed.intl.string(ed.t.bUvv1f);
        return (0, r.jsx)("div", {
            className: (0, rj.hU)(e) ? aI.UQ : void 0,
            children: (0, r.jsx)(K.$, {
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
        return e === eo.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? ed.intl.formatToPlainString(ed.t.t1SOId, { recipientDisplayName: rU.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? ed.intl.string(ed.t["2PJ1NP"])
                    : ed.intl.string(ed.t.hrnGng)
                : n
                  ? ed.intl.string(ed.t.QLEMld)
                  : ed.intl.string(ed.t.W4DBcy);
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
        if (null == i) return ed.intl.string(ed.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, lB.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? ed.intl.formatToPlainString(ed.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, rj.hU)(e) || (0, lB.bF)(i)
                ? ed.intl.string(ed.t.mVC3Cv)
                : ed.intl.format(ed.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return ed.intl.format(ed.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return ed.intl.string(ed.t.ARWFQX);
        if (!r.verified) return ed.intl.format(ed.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? ed.intl.string(ed.t["lQI+cB"])
                : ed.intl.formatToPlainString(ed.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return ed.intl.string(ed.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? ed.intl.format(ed.t.l3VxgG, { username: rU.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : ed.intl.format(ed.t["9cYrw5"], {
                          username: rU.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? ed.intl.formatToPlainString(ed.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : ed.intl.formatToPlainString(ed.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return ed.intl.string(ed.t.ZTNur7);
            if (null != l) {
                let e = s.interval === sh.WT.MONTH ? ed.t["/RDIEA"] : ed.t["3CX6Ev"];
                return ed.intl.format(e, { username: rU.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === sh.WT.MONTH ? ed.t["2O4lo5"] : ed.t["+XjmsR"];
            return ed.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l
            ? ed.intl.format(ed.t["3HsdQ/"], { username: rU.Ay.getUserTag(l) })
            : ed.intl.string(ed.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = sh.Wx.includes(e.giftStyle),
            i = d()(aI.gB, { [aI.El]: n, [aI.by]: t >= rI.Tm }),
            l = d()({ [aI.gc]: n, [aI.Ei]: n && t >= rI.Tm, [aI.ww]: !n, [aI.wy]: !n && t >= rI.Tm });
        return (0, r.jsxs)("div", {
            className: i,
            children: [
                n && (0, r.jsx)(rP, { className: aI.nr }),
                null != e.giftStyle &&
                    (0, r.jsx)(rT.A, {
                        defaultAnimationState: e.redeemed ? rN.oA.LOOP : rN.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, r.jsx)(K.$, {
            variant: "primary",
            size: "sm",
            text: ed.intl.string(ed.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, lB.bF)(n);
        return (0, r.jsx)(aC, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: eo.JJy.GIFT_CODE_EMBED,
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
            return (0, r.jsx)(aC, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: eo.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => ed.intl.string(ed.t.X4p5uH),
                renderCustomTagline: () => ed.intl.string(ed.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, r.jsx)(a_, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, r.jsx)(rI.Wb, { isHorizontal: i >= rI.Tm });
        return (0, rj.hU)(e)
            ? (0, r.jsx)("div", { className: aI.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let aN = (0, r_.A)((0, rv.A)(aj)),
    ay = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: s,
            } = (0, m.cf)([rk.A], () => {
                let e = rk.A.getError(t);
                return { giftCode: rk.A.get(t), resolved: rk.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, m.bG)([G.default], () => (null != i && null != i.userId ? G.default.getUser(i.userId) : null)),
            o = (0, m.bG)([e9.A], () => (null != i ? e9.A.get(i.skuId) : null)),
            d = (0, m.bG)([rM.A], () =>
                null != o && i?.entitlementBranches != null ? rD.YI(i.entitlementBranches, o, rM.A) : null,
            ),
            c = (0, ek.h)(o?.applicationId),
            u = null != o && (0, lB.bF)(o) && i?.redeemed === !0,
            [h] = (0, rS.L)(u ? c?.id : null),
            g = (0, rO.zz)(i?.subscriptionPlanId),
            p = (0, m.bG)([w.default], () => (null != i ? w.default.getId() === i.userId : w.default.getId() === n.id));
        return (0, r.jsx)(aN, {
            ...e,
            skuApplication: c,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: l,
            resolveErrorCode: s,
            gifter: a,
            libraryApplication: d,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: p,
        });
    };
var aT = n(376728),
    aS = n(107123),
    ab = n(698441),
    aL = n(427080),
    aR = n(346542),
    ak = n(665066),
    aM = n(95701),
    aP = n(299091),
    aw = n(860689);
let aD = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function aO(e) {
    let { guildId: t, location: n } = e;
    return aD.getCurrentConfig({ guildId: t, location: n });
}
function aU() {
    return (0, r.jsxs)(nV.A, {
        children: [
            (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t["N/g9Z4"]) }),
            (0, r.jsx)(nV.A.Body, { resolving: !0 }),
        ],
    });
}
var aG = n(172799),
    aV = n(718223);
function aB(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: aV.MY,
                        children: [
                            (0, r.jsx)("i", { className: aV.QD }),
                            (0, r.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: aV.U9,
                                color: i,
                                children: ed.intl.format(ed.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            l.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: aV.MY,
                        children: [
                            (0, r.jsx)("i", { className: aV.o6 }),
                            (0, r.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: aV.U9,
                                color: i,
                                children: ed.intl.format(ed.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", { className: aV.rc, children: l })
    );
}
function aH(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        s = (0, n_.Ay)(t);
    if (null != t && null != n) {
        let e = (0, ng.gU)(t, n);
        return (0, r.jsxs)("div", {
            className: d()(aV.Ix, { [aV.v6]: i }),
            children: [
                null != e ? (0, r.jsx)(e, { className: aV.p, size: "xs", color: "currentColor" }) : null,
                (0, r.jsx)(l9.A, {
                    children: (0, r.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: ed.intl.format(ed.t["dc+LW4"], { channelName: s ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, r.jsx)("div", {
              className: d()(aV.Ix, { [aV.v6]: i }),
              children: (0, r.jsx)(l9.A, {
                  children: (0, r.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: ed.intl.format(ed.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function aF(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: s } = e,
        { approximate_member_count: o, approximate_presence_count: d, target_type: c, target_application: u } = i;
    eW()(c === aG.yV.EMBEDDED_APPLICATION && null != u, "invalid application invite");
    let h = a.useCallback(() => {
            te.default.track(eo.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: u.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, u.id]),
        g = (0, m.bG)([t9.A], () => (null != i.guild ? t9.A.getGuild(i.guild.id) : null), [i]),
        p = (0, ek.A)([u.id])[0],
        A = (0, m.bG)(
            [eD.Ay],
            () => i?.channel != null && eD.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === u.id,
        ),
        x = (0, m.bG)([eD.Ay], () =>
            (i.channel?.id != null ? eD.Ay.getEmbeddedActivitiesForChannel(i.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return u.id === t;
            }),
        ),
        C = D.A.getChannel(i.channel?.id),
        I = (0, m.bG)([ev.A], () => null != C && ev.A.can(eo.xBc.USE_EMBEDDED_ACTIVITIES, C), [C]),
        { analyticsLocations: v } = (0, E.Ay)(f.A.INVITE_EMBED),
        _ = (0, m.yK)(
            [eD.Ay],
            () =>
                null != C
                    ? eD.Ay.getEmbeddedActivitiesForChannel(C.id)
                          .filter((e) => e.applicationId === u.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [C, u.id],
        ),
        j = (0, m.yK)([G.default], () => _.map((e) => G.default.getUser(e)).filter((e) => null != e), [_]),
        N = a.useCallback(() => {
            (0, aT.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, n2._U)(i.code, l.id),
                },
                v,
            ),
                aT.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: s("Invite Button Embed", i.code),
                    analyticsLocations: v,
                });
        }, [i, l, v, s]),
        y = i.state === eo.elq.ACCEPTING,
        T = null != g;
    if (null == g) {
        if (null == i.guild) return (0, r.jsx)(aU, {});
        g = (0, aw.DY)(i.guild);
    }
    t = T
        ? A
            ? ed.intl.string(ed.t.DPfdsq)
            : x
              ? ed.intl.string(ed.t.sqe0hj)
              : ed.intl.string(ed.t.RscU7I)
        : ed.intl.string(ed.t["2BP08E"]);
    let S = (T && !I) || (T && A);
    return (I || (n = ed.intl.string(ed.t.hHGrWz)), null == i.code || "" === i.code || null == p)
        ? null
        : (0, r.jsx)(E.f5, {
              value: v,
              children: (0, r.jsx)(aY, {
                  app: p,
                  activityUsers: j,
                  isMember: T,
                  channel: C,
                  guild: g,
                  message: l,
                  members: o,
                  membersOnline: d,
                  isActivityActive: x,
                  submitting: y,
                  buttonLabel: t,
                  disabled: S,
                  disabledReason: n,
                  handleAcceptInvite: N,
                  onView: h,
              }),
          });
}
function aY(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: l,
            guild: s,
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
        C = V.Ay.getApplicationIconURL({ id: t.id, icon: E, bot: f }),
        I = eT(t),
        v = ef(t),
        _ = n.length,
        j = a.useMemo(
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
    return (0, r.jsx)(ei, {
        header: t.name,
        title: ed.intl.string(ed.t["7vb6nw"]),
        iconSrc: C,
        ...v,
        onClickBanner: I,
        info: (0, r.jsxs)("div", {
            className: aV.QR,
            children: [
                (0, r.jsx)(aH, { channel: l, guild: s, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, r.jsx)(eu, {
                          activityUsers: n,
                          guildId: s.id,
                          activityText: ed.intl.formatToPlainString(ed.t.yJj035, { count: _ }),
                      })
                    : (0, r.jsx)(aB, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: I,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.ACTIVITY_INVITE,
            onView: x,
            guildId: s.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var az = n(4274);
function aW(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, m.bG)([w.default], () => w.default.getId()) === t.id
                ? ed.intl.string(ed.t.C89OLE)
                : ed.intl.string(ed.t.YVub5y),
        l = (0, az.g)(n?.code);
    return (0, r.jsxs)(nV.A, {
        children: [
            (0, r.jsx)(nV.A.Header, { text: i }),
            (0, r.jsxs)(nV.A.Body, {
                children: [
                    (0, r.jsx)(nV.A.Icon, { expired: !0 }),
                    (0, r.jsx)(nV.A.Info, {
                        expired: !0,
                        title: l?.title ?? ed.intl.string(ed.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var aK = n(308528),
    aJ = n(889227);
function aq(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, m.bG)([w.default], () => w.default.getId()),
        s = t.inviter?.id === l,
        o = t.state === eo.elq.ACCEPTING,
        { analyticsLocations: d } = (0, E.Ay)(f.A.INVITE_EMBED),
        c = (0, m.bG)([O.A], () => null != t.inviter && O.A.isFriend(t.inviter?.id)),
        u = a.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != D.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), aK.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, aT.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, n2._U)(t.code, n.id),
                    },
                    d,
                );
        }, [t, n, d]),
        h = a.useCallback(() => {
            (0, aT.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, n2._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            aT.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? u : h,
        p = ed.intl.string(ed.t.ib7Ng1),
        A = "active";
    c
        ? ((p = ed.intl.string(ed.t.xhxnPn)), (A = "secondary"))
        : s && ((p = ed.intl.string(ed.t.ib7Ng1)), (A = "secondary"));
    let x = s ? ed.intl.string(ed.t.eQyu1F) : ed.intl.string(ed.t.PYJHW6),
        C = null != t.inviter ? `${t.inviter.username}` : "",
        I = null != t.inviter ? rU.Ay.getUserTag(t.inviter) : "";
    return (0, r.jsxs)(nV.A, {
        children: [
            (0, r.jsx)(nV.A.Header, { text: x }),
            (0, r.jsxs)(nV.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: n0.iH,
                        children: [
                            (0, r.jsx)(nV.A.Icon, { user: new aJ.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, r.jsx)(nV.A.Info, { title: C, onClick: c ? g : void 0, children: I }),
                        ],
                    }),
                    (0, r.jsx)(K.$, { onClick: g, text: p, loading: o, disabled: s, variant: A }),
                ],
            }),
        ],
    });
}
function aX(e) {
    let t,
        n,
        { invite: i, message: l, currentUserId: s, onTransitionToInviteChannel: o, onAcceptInstantInvite: d } = e,
        c = s === l.author.id,
        u = i.state === eo.elq.ACCEPTING,
        h = (0, m.bG)([D.A], () => (null != i.channel ? D.A.getChannel(i.channel.id) : null), [i]);
    eW()(null == h || h.isPrivate(), "must be a private channel");
    let { analyticsLocations: g } = (0, E.Ay)(f.A.INVITE_EMBED),
        p = null != h,
        A = a.useCallback(() => {
            let e = "noop";
            p ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aT.he)(
                    {
                        invite: i,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: (0, n2._U)(i.code, l.id),
                    },
                    g,
                );
        }, [i, l, g, p, o, d]);
    if (null == h) {
        if (null == i.channel) return (0, r.jsx)(aU, {});
        (h = (0, aM.OY)(i.channel)),
            (n = i.channel?.name),
            (t = null != i.channel && null != i.channel.recipients ? i.channel.recipients : []);
    } else {
        (t = h.recipients.reduce((e, t) => {
            let n = G.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, n_.m1)(h, G.default, O.A));
        let e = G.default.getCurrentUser();
        p && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(rm.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : ed.intl.string(ed.t.LJpTRF));
    let x = ed.intl.string(ed.t.XpeFYr),
        C = "active";
    p && ((x = ed.intl.string(ed.t.cEnaWx)), (C = "secondary"));
    let I = ed.intl.string(ed.t["3p3/BK"]);
    return (
        c && (I = ed.intl.string(ed.t.qmtuXE)),
        (0, r.jsxs)(nV.A, {
            children: [
                (0, r.jsx)(nV.A.Header, { text: I }),
                (0, r.jsxs)(nV.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: n0.iH,
                            children: [
                                (0, r.jsx)(nV.A.Icon, { channel: h, onClick: p ? A : void 0 }),
                                (0, r.jsx)(nV.A.Info, {
                                    title: n,
                                    onClick: p ? A : void 0,
                                    children: (0, r.jsx)(nV.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(K.$, { onClick: A, loading: u, disabled: p, variant: C, text: x, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
var aZ = n(821418),
    aQ = n(340837);
let a$ = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, u.Lt)(n.getSelfMember(i.id)?.flags ?? 0, aQ.D.IS_GUEST)) ||
        (0, u.Lt)(t.flags ?? 0, aZ.Q.IS_GUEST_INVITE)
    );
};
var a0 = n(517905);
function a1(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: s,
            onAcceptInstantInvite: o,
            guild: d,
            invite: c,
            message: h,
            currentUserId: g,
        } = e,
        p = g === h.author.id,
        { channel: x, approximate_member_count: C, approximate_presence_count: I } = c,
        v = c.state === eo.elq.ACCEPTING,
        _ = null != x ? (0, aM.OY)(x) : null,
        j = null != d,
        N = null != _,
        y = null != _ && _.isGuildStageVoice(),
        T = (0, u.Lt)(c.flags ?? 0, aZ.Q.IS_GUEST_INVITE),
        S = _?.isGuildVoiceOrThread() ?? !1,
        b = d?.features.has(eo.GuildFeatures.HUB) ?? !1,
        L = d?.id,
        { analyticsLocations: R } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, tA.A)({
        name: tg.ImpressionNames.INVITE_EMBED,
        type: tg.ImpressionTypes.VIEW,
        properties: {
            invite_code: c.code,
            invite_guild_id: c.guild?.id,
            invite_channel_id: x?.id,
            invite_instance_id: (0, n2._U)(c.code, h.id),
            invite_channel_type: x?.type,
            embed_type: "guild_invite",
            location_stack: R,
        },
    });
    let [k, M] = a.useState(!1),
        P = a.useCallback(() => M(!1), []),
        w = a.useRef(null),
        D = (0, m.bG)([ip.Ay], () => a$([ip.Ay], c)),
        O = a.useCallback(() => {
            M(!0), (0, aT.Pq)(L, "show profile", R);
        }, [L, R]),
        U = a.useCallback(() => {
            let e = "noop";
            j ? (s(), (e = "transition")) : (o(), (e = "accept")),
                (0, aT.he)(
                    {
                        invite: c,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, n2._U)(c.code, h.id),
                    },
                    R,
                );
        }, [c, h, R, j, s, o]);
    if (null == d) {
        if (null == c.guild) return (0, r.jsx)(aU, {});
        (d = aw.DY(c.guild)).premiumTier = c.guild.premium_tier ?? eo.TVA.NONE;
    }
    let G = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return ed.intl.string(ed.t.N85DCl);
                else if (s) return ed.intl.string(ed.t.TJQcNv);
                else if (l) return ed.intl.string(ed.t.mJyBir);
                else return ed.intl.string(ed.t.lxTgP9);
            else if (r) return ed.intl.string(ed.t.Mnvc3C);
            else if (s) return ed.intl.string(ed.t.FdPNr5);
            else if (l) return ed.intl.string(ed.t.f4gmrf);
            else return ed.intl.string(ed.t.H39rEY);
        return n
            ? i
                ? ed.intl.string(ed.t.UxmnHx)
                : ed.intl.string(ed.t.sigPEf)
            : i
              ? ed.intl.string(ed.t["oU/lsl"])
              : ed.intl.string(ed.t.BoQUFf);
    })({ isVoiceChannel: S, isOwnInvite: p, isGuest: T, isHubGuild: b, isStage: y, isStream: !1 });
    return (
        (i = (0, r.jsxs)("span", {
            className: n0.FA,
            children: [
                (0, r.jsx)(a0.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: k,
                    onRequestClose: P,
                    targetElementRef: w,
                    children: () => (0, r.jsx)(nV.A.GuildName, { guild: d, ref: w }),
                }),
                (0, r.jsx)("span", {
                    className: n0.E3,
                    children: (0, r.jsx)(s3.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        T &&
            (l = (0, r.jsx)(J.m, {
                asContainer: !0,
                text: ed.intl.string(ed.t["/FeTK6"]),
                children: (0, r.jsx)(na.m, { size: "md", color: "currentColor", className: n0.G }),
            })),
        S
            ? ((i = (0, r.jsx)(nV.A.Channel, { channel: _ })),
              (t = (0, r.jsxs)("span", {
                  className: n0.FA,
                  children: [
                      ed.intl.format(ed.t["2wimj5"], { guildName: d.name }),
                      (0, r.jsx)("span", {
                          className: n0.E3,
                          children: (0, r.jsx)(s3.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != I && I > 0)
              ? (t = (0, r.jsx)(nV.A.Data, { members: C, membersOnline: I }))
              : N && (t = (0, r.jsx)(nV.A.Channel, { channel: _, guild: d })),
        (0, r.jsxs)(nV.A, {
            children: [
                (0, r.jsx)(nV.A.GuildSplash, { guild: d }),
                (0, r.jsx)(nV.A.Header, { text: G, extra: l }),
                (0, r.jsxs)(nV.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: n0.iH,
                            children: [
                                (0, r.jsx)(nV.A.Icon, { guild: d }),
                                (0, r.jsx)(nV.A.Info, { title: i, onClick: O, children: t }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: n0.UD,
                            children: (0, r.jsx)(K.$, {
                                onClick: U,
                                loading: v,
                                variant: "active",
                                fullWidth: S,
                                disabled: !D,
                                text: S
                                    ? y
                                        ? ed.intl.string(ed.t["7vb2cc"])
                                        : ed.intl.string(ed.t.gpqgah)
                                    : j
                                      ? ed.intl.string(ed.t.cEnaWx)
                                      : ed.intl.string(ed.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(eo.GuildFeatures.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: n0.me }),
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ed.intl.format(ed.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eK.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("80203"),
                                                n.e("97804"),
                                                n.e("7265"),
                                                n.e("97641"),
                                                n.e("90496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, r.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var a2 = n(890856),
    a3 = n(9994),
    a4 = n(461888),
    a6 = n(179283),
    a5 = n(123213),
    a7 = n(86376),
    a9 = n(42780),
    a8 = n(897288),
    oe = n(14712);
function ot(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: s } = e,
        o = a.useRef(null),
        [c, u] = a.useState(!0),
        [h, g] = a.useState(!1),
        p = t.state === eo.elq.ACCEPTING,
        A = (0, m.bG)([q.A], () => q.A.useReducedMotion),
        { analyticsLocations: x } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, tA.A)({
        name: tg.ImpressionNames.INVITE_EMBED,
        type: tg.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, n2._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: x,
        },
    }),
        a.useLayoutEffect(() => {
            g((o.current?.clientHeight ?? 0) > 292);
        }, [g]);
    let C = (0, a3.oO)(t),
        I = a.useCallback(() => {
            !h || (c && u(!1));
        }, [c, h]),
        v = a.useCallback(() => {
            !h || c || u(!0);
        }, [c, h]),
        _ = a.useMemo(
            () =>
                h && o.current?.clientHeight != null
                    ? {
                          height: c ? 292 : o.current.clientHeight + 36 + 48,
                          transition: A ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [c, h, A],
        );
    return null == C
        ? (0, r.jsx)(aU, {})
        : (0, r.jsxs)(a2.s, {
              className: d()(oe.Gg, { [oe.vk]: h && c }),
              onClick: I,
              style: _,
              "aria-label": ed.intl.string(ed.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: oe.uY,
                      ref: o,
                      children: [
                          (0, r.jsx)(a9.J$, { profile: C, className: oe.vK }),
                          (0, r.jsx)(a9.CG, { profile: C }),
                          (0, r.jsx)(a7.A, { profile: C }),
                          (0, r.jsx)(a6.P, { profile: C, className: oe.rb }),
                          (0, r.jsx)(a8.A, {
                              guild: null != t.guild ? (0, aw.DY)(t.guild) : null,
                              roles: t.roles,
                              className: oe.Ei,
                          }),
                      ],
                  }),
                  h && !c
                      ? (0, r.jsx)("div", {
                            className: oe.Se,
                            children: (0, r.jsx)(iR.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: v,
                                text: ed.intl.string(ed.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: d()(oe.qr, { [oe.iK]: h }),
                      children: [
                          h && c ? (0, r.jsx)("div", { className: oe.D7 }) : null,
                          (0, r.jsx)("div", {
                              className: d()(oe.z8, { [oe.it]: h && c }),
                              children: (0, r.jsx)("div", {
                                  className: oe.UD,
                                  children: (0, r.jsx)(on, {
                                      invite: t,
                                      profile: C,
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
function on(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: s,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, a4.Ay)(n, a4.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, E.Ay)(f.A.INVITE_EMBED),
        h = a.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, aT.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, n2._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, r.jsx)(a5.Y, {
              guildId: c,
              ctaType: u,
              submitting: s,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
var oi = n(414798);
function ol(e) {
    let t,
        n,
        i,
        { author: l, banned: s, channelId: a } = e,
        o = (0, m.bG)([w.default], () => w.default.getId()),
        d = rU.Ay.useName(l),
        c = o === l.id,
        u = (0, m.bG)([D.A, ev.A], () => {
            let e = D.A.getChannel(a);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, sN.UJ)(e),
                    n = ev.A.can(eo.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return ev.A.can(eo.xBc.SEND_MESSAGES, e);
        });
    return (
        c
            ? ((t = ed.intl.string(ed.t["F/OLvL"])), (i = ed.intl.string(ed.t.C89OLE)))
            : ((i = ed.intl.string(ed.t.YVub5y)),
              s
                  ? (t = ed.intl.string(ed.t["57nBty"]))
                  : null != d && u
                    ? ((t = ed.intl.formatToPlainString(ed.t["9Akp1s"], { username: d })),
                      (n = (0, r.jsx)(K.$, {
                          onClick: function () {
                              let { id: e } = l,
                                  t = `@${rU.Ay.getUserTag(l, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              su._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != a && oi.A.startTyping(a);
                          },
                          text: ed.intl.string(ed.t.P8tvKG),
                      })))
                    : (t = ed.intl.string(ed.t["SMJr+a"]))),
        (0, r.jsxs)(nV.A, {
            children: [
                (0, r.jsx)(nV.A.Header, { text: i }),
                (0, r.jsxs)(nV.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: n0.iH,
                            children: [
                                (0, r.jsx)(nV.A.Icon, { expired: !0 }),
                                (0, r.jsx)(nV.A.Info, {
                                    expired: !0,
                                    title: ed.intl.string(ed.t["Jhx/ud"]),
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
var os = n(616356);
function or(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: l,
            message: s,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        c = l?.id,
        u = (0, m.bG)([U.A], () => U.A.getGuildId()),
        h = (0, m.bG)(
            [os.A],
            () => (null != n && null != n.target_user ? os.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, m.bG)(
            [os.A],
            () => (null != n && null != n.target_user ? os.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, E.Ay)(f.A.INVITE_EMBED);
    (0, tA.A)({
        name: tg.ImpressionNames.INVITE_EMBED,
        type: tg.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, n2._U)(n.code, s.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === aG.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    eW()(null != n, "Invite cannot be null");
    let { target_type: C, target_user: I } = n;
    eW()(C === aG.yV.STREAM && null != I, "invalid streaming invite");
    let v = i === I.id,
        _ = n.state === eo.elq.ACCEPTING,
        j = a.useCallback(() => {
            let e = "noop";
            A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, aT.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: (0, n2._U)(n.code, s.id),
                    },
                    p,
                );
        }, [n, s, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, r.jsx)(aU, {});
        l = (0, aw.DY)(n.guild);
    }
    let y = null != n.channel ? (0, aM.OY)(n.channel) : null,
        T = rU.Ay.getName(I),
        S = A || (!x && N),
        b = ed.intl.string(ed.t.I6JG46),
        L = "active";
    N && !x
        ? ((t = v ? ed.intl.string(ed.t.oBLoZJ) : ed.intl.formatToPlainString(ed.t["0QJmA+"], { name: T })),
          (b = ed.intl.string(ed.t.Wdi5E1)))
        : ((L = "active"),
          A && ((b = ed.intl.string(ed.t.Q1W99y)), (L = "secondary")),
          (t = v ? ed.intl.string(ed.t["4hyaHu"]) : ed.intl.formatToPlainString(ed.t.QmlLEq, { name: T })));
    let R =
        u === l.id && null != y
            ? (0, r.jsx)(nV.A.Channel, { channel: y })
            : ed.intl.formatToPlainString(ed.t.u0vaDE, { guildName: l.name });
    return (0, r.jsxs)(nV.A, {
        children: [
            (0, r.jsx)(nV.A.Header, { text: ed.intl.string(ed.t["wS+5Wb"]) }),
            (0, r.jsxs)(nV.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: n0.iH,
                        children: [
                            (0, r.jsx)(nV.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, r.jsx)(nV.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, r.jsx)(K.$, { onClick: j, loading: _, disabled: S, variant: L, text: b }),
                ],
            }),
        ],
    });
}
var oa = n(459192),
    oo = n(364522),
    od = n(52074),
    oc = n(725613),
    ou = n(85451),
    om = n(145497),
    oh = n(481947),
    og = n(607567),
    op = n(198183);
function oA(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        s = (0, n_.Ay)(i),
        o = (0, m.bG)([t9.A], () => t9.A.getGuild(i.guild_id), [i.guild_id]),
        { voiceStates: d } = (0, m.cf)(
            [og.Ay],
            () => ({ voiceStates: null != i.guild_id ? og.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        c = a.useMemo(
            () => [...d.filter((e) => e.voiceState.selfStream), ...d.filter((e) => !e.voiceState.selfStream)],
            [d],
        ),
        u = (0, m.bG)([oc.A], () => oc.A.getStartTime(i), [i]);
    a.useEffect(() => {
        null != u || null == i.guild_id || oc.A.hasRequestedStartTimes(i.guild_id) || (0, od.U)(i.guild_id);
    }, [i, u]);
    let h = a.useRef(null),
        g = a.useRef(null),
        p = a.useCallback(() => {
            let e = h.current,
                t = g.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.display = n ? "block" : "none";
        }, []);
    a.useLayoutEffect(() => {
        p();
    }, [c, p]);
    let x = a.useCallback(
            (e) => {
                null != h.current && h.current.removeEventListener("scroll", p),
                    (h.current = e),
                    null != e && e.addEventListener("scroll", p);
            },
            [p],
        ),
        { analyticsLocations: C } = (0, E.Ay)(f.A.INVITE_EMBED),
        I = (0, n2._U)(t.code, n.id),
        v = d.some((e) => e.voiceState.selfStream);
    (0, tA.A)({
        name: tg.ImpressionNames.VOICE_INVITE_EMBED,
        type: tg.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: I,
            has_active_stream: v,
            location_stack: C,
        },
    });
    let _ = a.useCallback(() => {
            (0, li.iN)(i.id);
        }, [i.id]),
        j = a.useCallback(() => {
            l(),
                (0, aT.he)(
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
    return (0, r.jsxs)("div", {
        className: op.kL,
        children: [
            (0, r.jsxs)("div", {
                className: op.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: op.yW,
                        children: [
                            (0, r.jsx)(ai.H, {
                                className: op.p,
                                color: d.length > 0 ? t0.A.colors.TEXT_FEEDBACK_POSITIVE : t0.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, r.jsx)(oa.u, {
                                title: `${o?.name} / ${s}`,
                                body: "",
                                assetSize: 24,
                                asset: null != o ? (0, r.jsx)(om.Ay, { guild: o, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, r.jsx)(z.D, {
                                    className: op.HA,
                                    onClick: _,
                                    children: (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != u ? (0, r.jsx)(ou.z, { entry: { start: u }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            c.length > 0
                ? (0, r.jsxs)("div", {
                      className: op.Ao,
                      children: [
                          (0, r.jsx)(oo.Ip, {
                              ref: x,
                              className: op.JD,
                              children: c.map((e) =>
                                  (0, r.jsx)(
                                      oh.Ay,
                                      {
                                          className: op.Eq,
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
                          (0, r.jsx)("div", { ref: g, className: op.wH, style: { display: "none" } }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: op.p$,
                      children: (0, r.jsx)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ed.intl.string(ed.t.zSqdrS),
                      }),
                  }),
            (0, r.jsx)("div", {
                className: op.TB,
                children: (0, r.jsx)(K.$, {
                    onClick: j,
                    icon: ai.H,
                    variant: "active",
                    fullWidth: !0,
                    text: ed.intl.string(ed.t.gpqgah),
                }),
            }),
        ],
    });
}
function ox(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        s = t.channel?.id,
        a = (0, m.bG)([D.A, ev.A], () => {
            let e = D.A.getChannel(s);
            return null != e && ev.A.canBasicChannel(eo.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [s]),
        o = (0, m.bG)([t9.A], () => null != t9.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, r.jsx)(ot, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, r.jsx)(oA, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var of = n(652896),
    oE = n(834757),
    oC = n(427358),
    oI = n(370714);
function ov(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        s = (0, ng.gU)(n, i),
        a = (0, n_.Ay)(n);
    return (0, r.jsxs)(z.D, {
        onClick: l,
        className: d()(oI.UP, t),
        children: [
            null != s &&
                (0, r.jsx)(s, { className: oI.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, r.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, r.jsxs)(l9.A, { children: [i.name, " / ", a] }),
            }),
            (0, r.jsx)(nh._, { className: oI.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var o_ = n(562153),
    oj = n(713517),
    oN = n(538451),
    oy = n(581448),
    oT = n(824078);
function oS(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...s } = e,
        o = a.useCallback((e) => (0, r.jsx)(ob, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, r.jsx)(l2.Y, { renderPopout: () => o(i), ...s });
}
function ob(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        s = a.useRef(null),
        { isHoveringOrFocusing: o } = (0, oj.A)(s);
    return (
        a.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, r.jsx)(oo.Ip, {
            ref: s,
            className: d()(oT.popover, oy.oO),
            style: { "--custom-popover-width": "200px" },
            children: (0, r.jsx)("div", {
                children: t.map((e) =>
                    (0, r.jsx)(
                        oN.A,
                        {
                            user: e,
                            guildId: n ?? void 0,
                            channelId: i,
                            nick: o_.Ay.getNickname(n, i, e),
                            className: oy.DV,
                            textClassName: oy.wk,
                        },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var oL = n(531657);
let oR = { mass: 1, tension: 170, friction: 26 };
function ok(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: s, motion: o } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (o?.percentX ?? 0) * 6,
        p = (o?.percentY ?? 0) * 6,
        A = 1 + ((o?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, iz.z)(() => ({ x: 0, y: 0, scale: 1, config: oR }));
    return (
        a.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, r.jsxs)(iF.animated.div, {
            ref: s,
            className: d()(oL.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, iF.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: oL.my,
                            children: (0, r.jsx)(J.m, {
                                text: o_.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, r.jsx)(tG.eu, {
                                    src: (function (e, t, n) {
                                        let i = ip.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, V.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tV._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tV._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tV._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tV._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tV._3.SIZE_48
                                                    : h > 2
                                                      ? tV._3.SIZE_40
                                                      : tV._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, r.jsx)(oM, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function oM(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: s,
            shouldShow: o,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = a.useRef(null),
                { isHoveringOrFocusing: t } = (0, oj.A)(e),
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
    return (0, r.jsx)(oS, {
        targetElementRef: s,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: o,
        onHoverOrFocus: c,
        children: (e) =>
            (0, r.jsx)("div", {
                className: d()(oL.my, oL.k2),
                ref: s,
                ...e,
                children: (0, r.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var oP = n(692236);
function ow(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: s } = e,
        o = a.useRef(null),
        d = i ?? null;
    null == d && null != t.guild && (d = aw.DY(t.guild));
    let c = null != t.channel ? (0, aM.OY)(t.channel) : null;
    eW()(null != d, "Voice Invite Embed must be used in context of a guild."),
        eW()(null != c, "Voice Invite Embed must be able to resolve an invite channel.");
    let u = (0, m.bG)([ev.A, D.A], () => {
            let e = D.A.getChannel(c.id);
            return null == e || ev.A.canBasicChannel(eo.hVb.VIEW_CHANNEL, e);
        }, [c.id]),
        h = (0, m.bG)([og.Ay], () => (u ? og.Ay.getVoiceStatesForChannelAlt(c.id, d.id) : []), [c.id, d.id, u]),
        { label: g, sublabel: p } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            return s
                ? {
                      label: l
                          ? ed.intl.format(ed.t["2RWMFV"], { othersCount: a })
                          : ed.intl.format(ed.t.Da7tZx, { othersCount: a }),
                  }
                : {
                      label: l ? ed.intl.string(ed.t.DVDvCD) : ed.intl.string(ed.t.TY77rq),
                      sublabel: ed.intl.string(ed.t.wM2WTM),
                  };
        })({ currentUserId: (0, m.bG)([w.default], () => w.default.getId()), author: n.author, voiceStates: h }),
        x = (0, m.bG)([t9.A], () => null != t9.A.getGuild(d.id), [d.id]),
        C = (0, m.bG)([e_.A], () => e_.A.getVoiceChannelId() === c.id, [c.id]),
        I = (0, m.bG)([ip.Ay], () => a$([ip.Ay], t), [t]),
        v = t.state === eo.elq.ACCEPTING,
        { analyticsLocations: _ } = (0, E.Ay)(f.A.INVITE_EMBED),
        j = (0, n2._U)(t.code, n.id),
        N = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, m.bG)([os.A, oC.A], () => {
                if ((0, aR.G4)(t) && null != t.target_user) {
                    let e = os.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === s) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = os.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                let r = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === r.length) return null;
                for (let e of [...r].sort((e, t) => {
                    let n = oC.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (oC.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = os.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === s) return t;
                }
                return null;
            }, [t, n, i, l, s]);
        })({ invite: t, message: n, voiceStates: h, guildId: d.id, channelId: c.id }),
        y = (0, oE.AO)(N),
        T = null != N,
        S = a.useCallback(() => {
            let e = x ? "transition" : "accept";
            x ? l() : s(),
                (0, aT.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: j,
                        application_id: y?.id ?? void 0,
                        stream_key: null != N ? (0, of._z)(N) : void 0,
                        number_of_users_in_channel: h.length,
                    },
                    _,
                );
        }, [t, n, _, j, x, y, N, h.length, l, s]),
        b = a.useCallback(() => {
            x ? (0, li.iN)(c.id) : s({ autoJoin: !1 }),
                te.default.track(eo.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: d.id,
                    invite_channel_id: c.id,
                    invite_instance_id: j,
                    is_member: x,
                    application_id: y?.id ?? null,
                    stream_key: null != N ? (0, of._z)(N) : null,
                    number_of_users_in_channel: h.length,
                    location_stack: _,
                });
        }, [c.id, d.id, t.code, j, x, y, N, h.length, _, s]);
    (0, tA.A)({
        name: tg.ImpressionNames.VOICE_INVITE_EMBED,
        type: tg.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: d.id,
            invite_channel_id: c.id,
            invite_instance_id: j,
            has_active_stream: T,
            location_stack: _,
        },
    });
    let L = (0, m.bG)([q.A], () => q.A.useReducedMotion),
        R = a.useRef(null),
        [k, M] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        P = (0, m.bG)([oC.A], () => {
            let e = h.map((e) => e.user),
                t = e.find((e) => e.id === n.author.id),
                i = e
                    .filter((e) => e.id !== n.author.id)
                    .sort((e, t) => {
                        let n = oC.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (oC.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...i] : i;
        }, [h, n.author.id]),
        O = a.useMemo(() => tD().throttle(M, 20), [M]);
    a.useEffect(() => () => O.cancel(), [O]);
    let U = a.useCallback(
            (e) => {
                if (L) return;
                let t = R.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = o.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        r = e.clientX - n,
                        a = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(r * r + a * a) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                O({ percentX: n, percentY: i, proximity: l });
            },
            [L, O],
        ),
        G = a.useCallback(() => {
            O.cancel(), M({ percentX: 0, percentY: 0, proximity: 0 });
        }, [O]);
    return (0, r.jsxs)("div", {
        ref: R,
        className: oP.kL,
        onMouseMove: U,
        onMouseLeave: G,
        children: [
            (0, r.jsx)("div", { className: oP.ys }),
            (0, r.jsx)("div", { className: oP.r$, style: { "--custom-number-of-dots": 20 } }),
            (0, r.jsxs)("div", {
                className: oP.rf,
                children: [
                    (0, r.jsxs)("div", {
                        className: oP.Qs,
                        children: [
                            (0, r.jsx)(ov, { channel: c, guild: d, onClick: b }),
                            (0, r.jsxs)("div", {
                                className: oP.WD,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: (0, r.jsx)(l9.A, { lineClamp: 3, delay: 150, children: g }),
                                    }),
                                    null != p
                                        ? (0, r.jsx)(A.E, {
                                              variant: "text-sm/normal",
                                              className: oP.$B,
                                              children: (0, r.jsx)(l9.A, { delay: 150, children: p }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: oP.RE,
                        children: (0, r.jsx)(ok, { ref: o, guildId: d.id, channelId: c.id, members: P, motion: k }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: oP.xk,
                children: (0, r.jsx)(K.$, {
                    onClick: S,
                    loading: v,
                    variant: C ? "secondary" : "active",
                    fullWidth: !0,
                    disabled: !I,
                    text: C ? ed.intl.string(ed.t["3xjX0U"]) : ed.intl.string(ed.t.gpqgah),
                }),
            }),
        ],
    });
}
function oD(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: s } = (0, m.cf)(
            [aP.A],
            () => ({ invite: aP.A.getInvite(t), inviteError: aP.A.getInviteError(t) }),
            [t],
        ),
        o = null == l,
        d = (0, n2._U)(t, n.id);
    a.useEffect(() => {
        o && aT.Ay.resolveInvite(t, void 0, { inviteInstanceId: d });
    }, [t, o, d]);
    let c = l ?? { state: eo.elq.RESOLVING, code: "" },
        { analyticsLocations: u } = (0, E.Ay)(),
        h = (0, m.bG)([t9.A], () => (l?.guild != null ? t9.A.getGuild(l.guild.id) : null), [l]),
        g = (0, m.bG)([D.A, ev.A], () => {
            let e = l?.channel?.id;
            if (null == e) return !1;
            let t = D.A.getChannel(e);
            return null != t && ev.A.canBasicChannel(eo.hVb.VIEW_CHANNEL, t);
        }, [l]),
        p = (0, m.bG)([w.default], () => w.default.getId()),
        A = (0, m.bG)([ab.Ay], () => ab.Ay.getGuildScheduledEvent(c.guild_scheduled_event?.id), [c]),
        x = () => {
            null != c.channel && aT.Ay.transitionToInviteSync(c);
        },
        f = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == h && l?.guild != null ? aw.DY(l.guild) : h;
            (0, ak.g)({ guild: n, isMember: null != h, analyticsLocations: u }) === ak.W.PROCEED &&
                aT.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: i("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        C = (0, r.jsx)(a1, {
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: f,
            currentUserId: p,
            guild: h,
            invite: c,
            message: n,
        });
    switch (c.state) {
        case eo.elq.RESOLVING:
            C = (0, r.jsx)(aU, {});
            break;
        case eo.elq.EXPIRED:
        case eo.elq.BANNED:
            C = (0, r.jsx)(ol, { banned: c.state === eo.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case eo.elq.ERROR:
            C = (0, r.jsx)(aW, { author: n.author, inviteError: s });
            break;
        default:
            switch ((0, aR.On)(c)) {
                case aR.Xd.GROUP_DM:
                    C = (0, r.jsx)(aX, {
                        onTransitionToInviteChannel: x,
                        onAcceptInstantInvite: f,
                        currentUserId: p,
                        invite: c,
                        message: n,
                    });
                    break;
                case aR.Xd.FRIEND:
                    C = (0, r.jsx)(aq, { invite: c, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, aR.G4)(c)) {
                        if (null != c.channel && (0, aM.OY)(c.channel).isGuildVoice()) {
                            if (
                                null != c.guild &&
                                aO({ location: "InviteEmbed.isStreamInvite", guildId: c.guild.id }).enabled &&
                                g
                            ) {
                                C = (0, r.jsx)(ox, {
                                    onTransitionToInviteChannel: x,
                                    onAcceptInstantInvite: f,
                                    invite: c,
                                    message: n,
                                });
                                break;
                            }
                            C = (0, r.jsx)(ow, {
                                onTransitionToInviteChannel: x,
                                onAcceptInstantInvite: f,
                                guild: h,
                                invite: c,
                                message: n,
                            });
                            break;
                        }
                        C = (0, r.jsx)(or, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: f,
                            currentUserId: p,
                            message: n,
                            guild: h,
                            invite: c,
                        });
                        break;
                    }
                    if ((0, aR.ly)(c)) {
                        C = (0, r.jsx)(aL.Ay, {
                            guildScheduledEvent: A,
                            guild: c.guild,
                            channel: c.channel,
                            isMember: null != h,
                            onAcceptInstantInvite: f,
                            onTransitionToInviteChannel: x,
                        });
                        break;
                    }
                    if ((0, aR.oK)(c)) {
                        C = (0, r.jsx)(aF, { invite: c, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != c.channel && (0, aM.OY)(c.channel).isGuildVoice()) {
                        if (
                            null != c.guild &&
                            aO({ location: "InviteEmbed.isGuildVoice", guildId: c.guild.id }).enabled &&
                            g
                        ) {
                            C = (0, r.jsx)(ox, {
                                onTransitionToInviteChannel: x,
                                onAcceptInstantInvite: f,
                                invite: c,
                                message: n,
                            });
                            break;
                        }
                        C = (0, r.jsx)(ow, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: f,
                            guild: h,
                            invite: c,
                            message: n,
                        });
                        break;
                    }
                    (0, aS.v)(c) &&
                        (C = (0, r.jsx)(ot, {
                            onTransitionToInviteChannel: x,
                            onAcceptInstantInvite: f,
                            isMemberOfGuild: null != h,
                            invite: c,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(rV.A, { section: eo.JJy.INVITE_LINK, children: C });
}
var oO = n(266620),
    oU = n(860227),
    oG = n(783198);
function oV(e, t, n) {
    switch (t) {
        case eo.xL.LISTEN:
            return ed.intl.formatToPlainString(ed.t["/8czH4"], { name: e });
        case eo.xL.WATCH:
            return ed.intl.formatToPlainString(ed.t.BBJXVk, { name: e });
        case eo.xL.JOIN:
            return n ? void 0 : ed.intl.string(ed.t.pkq6Vq);
        case eo.xL.STREAM_REQUEST:
            return ed.intl.string(oG.default.DKHhec);
        case eo.xL.JOIN_REQUEST:
        default:
            return ed.intl.string(ed.t.Ckxb6j);
    }
}
function oB(e, t, n) {
    return e.author.id === n
        ? ed.intl.string(oG.default["8B3U5O"])
        : ed.intl.formatToPlainString(oG.default["d/qbC0"], { username: (0, o_.mG)(t.guild_id, t.id, e.author) });
}
function oH(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = G.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? ed.intl.formatToPlainString(ed.t.JddpN2, { username: e.globalName, appName: t })
                    : ed.intl.formatToPlainString(ed.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return l
            ? ed.intl.formatToPlainString(ed.t["2N1kNS"], { appName: t })
            : ed.intl.formatToPlainString(ed.t.IA6uDV, { appName: t });
    }
    return l
        ? ed.intl.formatToPlainString(ed.t.XE8axA, { username: e.author.globalName, appName: t })
        : ed.intl.formatToPlainString(ed.t.hgcjOn, { username: e.author.globalName, appName: t });
}
var oF = n(952818),
    oY = n(560595),
    oz = n(760751),
    oW = n(763827),
    oK = n(723702),
    oJ = n(820672);
function oq(e) {
    let { currentUserId: t, message: i, application: l, channel: s, analyticsLocations: a, onView: o } = e,
        { staticBannerSrc: d, videoBannerSrc: c, bannerAspectRatio: u } = ef(l),
        h = V.Ay.getApplicationIconURL({ id: l.id, icon: l.icon }),
        g = (0, m.bG)([oF.Ay, oz.A], () =>
            oF.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === l.id) return !0;
                let n = oz.A.getGameByApplication(l);
                return null != n && t === n.id;
            }),
        ),
        p = (0, m.bG)([os.A], () => os.A.getCurrentUserActiveStream()),
        A = (0, m.bG)([oW.A], () => oW.A.getChannelId()),
        x = sL.default.extractTimestamp(i.id) + oJ.M < Date.now(),
        C = (0, r.jsx)(r.Fragment, { children: oB(i, s, t) }),
        { analyticsLocations: I } = (0, E.Ay)(a, f.A.REQUEST_TO_STREAM_INVITE_EMBED),
        v = ed.intl.string(oG.default["5+172e"]),
        _ = !1;
    return (
        x
            ? ((v = ed.intl.string(oG.default.u4QmWl)), (_ = !0))
            : null != p
              ? ((v = ed.intl.string(oG.default.P0wwmM)), (_ = !0))
              : A !== s.id
                ? ((v = ed.intl.string(oG.default.qRXats)), (_ = !0))
                : null == g && ((v = ed.intl.string(oG.default["43zohO"])), (_ = !0)),
        (0, r.jsx)(ei, {
            header: ed.intl.string(oG.default.nAyuPp),
            title: l.name,
            staticBannerSrc: d,
            videoBannerSrc: c,
            bannerAspectRatio: u,
            iconSrc: h ?? void 0,
            info: C,
            actions:
                i.author.id === t
                    ? []
                    : [
                          {
                              label: v,
                              trackingArea: Z.kY.STREAM,
                              disabled: _,
                              onClick: () => {
                                  null != g &&
                                      ((0, oK.isWindows)()
                                          ? (0, oY.A)(g.pid)
                                          : (0, eK.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("80203"),
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
                                                return (t) => (0, r.jsx)(e, { ...t, analyticsLocations: I });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: l.id,
                linkType: Q.J.REQUEST_TO_STREAM,
                guildId: s.guild_id,
                channelId: s.id,
                messageId: i.id,
                onView: o,
                isDeadEnd: x,
            },
        })
    );
}
var oX = n(666176),
    oZ = n(629016),
    oQ = n(480595),
    o$ = n(461213),
    o0 = n(454292);
function o1(e) {
    return e.activity?.type === eo.xL.JOIN_REQUEST;
}
var o2 = n(125017),
    o3 = n(554146),
    o4 = n(43105),
    o6 = n(414499),
    o5 = n(116833),
    o7 = n(945810);
let o9 = (0, o7.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o8 = new Set(["1443349464290168976", "1443350165678198935", "1443033465766281327"]),
    de = (0, o7.mj)({
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
var dt = n(475743),
    dn = n(942370),
    di = n(311350);
let dl = "in-game-auth-check-modal";
var ds = n(46225),
    dr = n(379848),
    da = n(409626),
    dd = n(692969),
    dc = n(232835),
    du = n(970928);
let dm = 2 * sK.A.Millis.HOUR;
function dh(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        l = null != i && e.party?.id !== i,
        s = sL.default.extractTimestamp(t.id) + dm < Date.now(),
        r = null != e.application_id && e.application_id !== n;
    return !l && !s && !r;
}
var dg = n(737393),
    dp = n(835517),
    dA = n(635377);
let dx = new (n.n(dA)())({ max: 500 });
class df extends m.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return dx.get(t);
    }
}
let dE = new df(tj.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (dx.get(t) === n) return !1;
        dx.set(t, n);
    },
});
var dC = n(141628),
    dI = n(780907),
    dv = n(137177),
    d_ = n(888675);
function dj(e, t) {
    (0, tA.A)(
        { name: tg.ImpressionNames.CLOUD_PLAY_CTA, type: tg.ImpressionTypes.VIEW, properties: { location_stack: t } },
        { disableTrack: !e },
    );
}
var dN = n(193018),
    dy = n(444282);
function dT(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: l, currentUserId: s, viewAction: a } = e,
        o = (0, tF.Ay)(t),
        c = (0, lc.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id })(o);
    return (0, r.jsx)(d_.A, {
        compact: !1,
        children: ed.intl.format(s === t.author.id ? ed.t.anvg2q : ed.t.AxVbYF, {
            username: o.nick,
            usernameHook: c,
            applicationHook: () => {
                let e = null != a ? ly.Anchor : "div";
                return (0, r.jsxs)(e, {
                    onClick: a,
                    className: dN.Lf,
                    children: [
                        (0, r.jsx)("img", {
                            alt: ed.intl.string(ed.t["2B/phM"]),
                            src: i,
                            className: d()(dy.Gt, dv.M.XSMALL),
                        }),
                        (0, r.jsx)(A.E, { variant: "text-sm/semibold", color: "text-muted", children: n }),
                    ],
                });
            },
        }),
    });
}
function dS(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: l,
            header: s,
            currentUserId: o,
            launchableAppId: d,
            isEmbeddedApplication: c,
            tryWithGdnAction: u,
            staticBannerSrc: h,
            onClickContent: g,
            iconSrc: p,
            onView: x,
            presenceActivity: f,
            analyticsLocations: E,
            showAuthButton: C,
            requireAccountLink: I,
            startAuthorization: v,
            accountLinkButtonRef: _,
            renderAccountLinkUpsell: j,
        } = e,
        N = (0, m.bG)([dc.A], () => dc.A.getMessages(l.id)),
        { actions: y, hasAccountLinkButton: T } = a.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (I && null != d
                    ? ((e = [
                          {
                              label: ed.intl.string(ed.t.lw71Nf),
                              trackingArea: Z.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  v({ analyticsLocations: E });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != d
                      ? (e = [
                            {
                                label: ed.intl.string(ed.t["s+J8Dl"]),
                                trackingArea: Z.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    dI.Ay.launch({ applicationId: d, embedded: c });
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
                            e.activity.type === eo.xL.JOIN &&
                            !dh(f, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                C &&
                    i &&
                    (e.push({
                        label: ed.intl.string(ed.t.lw71Nf),
                        trackingArea: Z.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            v({ analyticsLocations: E });
                        },
                        icon: dC.A,
                        iconButton: !0,
                        buttonRef: _,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [I, c, d, u, N, f, n.id, t.id, C, v, E, _]);
    dj(
        y.some((e) => e.trackingArea === Z.kY.CLOUD_PLAY),
        E,
    );
    let S = y.length > 0,
        b = a.useMemo(
            () =>
                (0, r.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: dN.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (function (e, t, n, i, l) {
                        switch (e.activity?.type) {
                            case eo.xL.LISTEN:
                            case eo.xL.WATCH:
                            case eo.xL.JOIN:
                                return ed.intl.string(l ? ed.t.x1UXGR : ed.t["Ek+51n"]);
                            case eo.xL.STREAM_REQUEST:
                                return oB(e, n, i);
                            case eo.xL.JOIN_REQUEST:
                            default:
                                return oH(e, t, n, i, !0);
                        }
                    })(t, i, l, o, S),
                }),
            [t, i, l, o, S],
        );
    return 0 === y.length
        ? (0, r.jsx)(dT, { message: t, applicationName: i, iconSrc: p, channel: l, currentUserId: o, viewAction: g })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(ei, {
                      header: s,
                      title: i,
                      staticBannerSrc: h,
                      onClickBanner: g,
                      bannerAspectRatio: et.ACTIVITY,
                      iconSrc: p ?? void 0,
                      info: b,
                      actions: y,
                      primaryActionFirst: !0,
                      onClickContent: g,
                      trackingConfig: {
                          id: n.id,
                          linkType: Q.J.RICH_PRESENCE_INVITE,
                          onView: x,
                          referrerId: t.author.id,
                          guildId: l.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  T ? j() : null,
              ],
          });
}
var db = n(738678),
    dL = n(27989),
    dR = n(646270),
    dk = n(610509),
    dM = n(22363),
    dP = n(802516),
    dw = n(31300),
    dD = n(308368),
    dO = n(729937),
    dU = n(689168),
    dG = n(206589),
    dV = n(574381),
    dB = n(134861),
    dH = n(528767),
    dF = n(182892),
    dY = n(55730),
    dz = n(287613),
    dW = n(702631),
    dK = n(946255),
    dJ =
        (((s = {}).DESKTOP = "desktop"),
        (s.MOBILE = "mobile"),
        (s.ANDROID = "android"),
        (s.IOS = "ios"),
        (s.PLAYSTATION = "playstation"),
        (s.XBOX = "xbox"),
        (s.VR = "vr"),
        s);
eo.yTV.DESKTOP,
    eo.yTV.ANDROID,
    eo.yTV.IOS,
    eo.yTV.XBOX,
    eo.yTV.PS4,
    eo.yTV.PS5,
    eo.yTV.SAMSUNG,
    eo.yTV.EMBEDDED,
    eo.yTV.META_QUEST;
let dq = [],
    dX = (e) => {
        let { width: t, height: n, color: i } = e;
        return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            viewBox: "0 0 15 9",
            fill: "none",
            children: [
                (0, r.jsx)("path", {
                    fill: i,
                    d: "M14.41 7.85a6.97 6.97 0 0 0-1.983-3.898 7.003 7.003 0 0 0-1.234-.98l.008-.013.421-.727.412-.71.295-.51a.64.64 0 0 0-1.105-.643l-.296.51-.411.71-.422.728-.046.08-.063-.025a6.969 6.969 0 0 0-2.562-.457 6.972 6.972 0 0 0-2.47.477l-.042-.075-.421-.727-.412-.71-.296-.51a.638.638 0 1 0-1.105.642l.295.51.412.71.421.728.003.006a7.027 7.027 0 0 0-2.52 2.718 6.972 6.972 0 0 0-.748 2.473h13.908a7.015 7.015 0 0 0-.04-.307Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#202124",
                    d: "M11.113 6.232c.278-.185.319-.614.09-.958-.228-.344-.639-.472-.917-.286-.278.185-.319.614-.09.957.228.344.639.472.917.287Zm-6.306-.286c.228-.343.188-.772-.09-.957-.279-.186-.69-.057-.918.286-.228.344-.188.773.09.958.279.185.69.057.918-.287Z",
                }),
            ],
        });
    };
function dZ(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        l = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return a.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            s = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? dq
                            : (l.has(eo.yTV.ANDROID) && l.has(eo.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(eo.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(eo.yTV.IOS) && s.push("ios"),
                              (l.has(eo.yTV.PS4) || l.has(eo.yTV.PS5)) && s.push("playstation"),
                              l.has(eo.yTV.XBOX) && s.push("xbox"),
                              l.has(eo.yTV.DESKTOP) && s.push("desktop"),
                              l.has(eo.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: eo.yTV.DESKTOP, isGameLaunchable: i }),
        s = a.useMemo(
            () =>
                l
                    .map((e) => {
                        switch (e) {
                            case dJ.MOBILE:
                                return (0, r.jsx)(dR.u, { size: "xxs", color: "currentColor" });
                            case dJ.ANDROID:
                                return (0, r.jsx)(dX, { width: dL.E.xxs, height: dL.E.xxs, color: "currentColor" });
                            case dJ.IOS:
                                return (0, r.jsx)(dk.z, { size: "xxs", color: "currentColor" });
                            case dJ.PLAYSTATION:
                                return (0, r.jsx)(dM.X, { size: "xxs", color: "currentColor" });
                            case dJ.XBOX:
                                return (0, r.jsx)(dP.Y, { size: "xxs", color: "currentColor" });
                            case dJ.VR:
                                return (0, r.jsx)(db.G, { size: "xxs", color: "currentColor" });
                            case dJ.DESKTOP:
                                return (0, r.jsx)(dw.k, { size: "xxs", color: "currentColor" });
                            default:
                                return null;
                        }
                    })
                    .filter(rm.Vq),
            [l],
        );
    if (!(null != n || s.length > 0)) return null;
    let o =
        null != n
            ? (function (e) {
                  switch (e) {
                      case eo.yTV.DESKTOP:
                          return ed.intl.string(ed.t.aqN8U9);
                      case eo.yTV.IOS:
                          return ed.intl.string(ed.t.CyQ5ia);
                      case eo.yTV.ANDROID:
                          return ed.intl.string(ed.t.fMs6uW);
                      case eo.yTV.XBOX:
                          return ed.intl.string(ed.t.o0hjdt);
                      case eo.yTV.PS4:
                      case eo.yTV.PS5:
                          return ed.intl.string(ed.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : ed.intl.string(ed.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: dN.qr,
        children: [
            (0, r.jsx)("div", {
                className: dN.E6,
                children: s.map((e, t) => (0, r.jsx)("div", { className: dN.F2, children: e }, t)),
            }),
            (0, r.jsx)(A.E, { variant: "text-sm/medium", color: "currentColor", className: dN.kB, children: o }),
        ],
    });
}
function dQ(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: l,
            header: s,
            currentUserId: o,
            launchableAppId: d,
            isEmbeddedApplication: c,
            tryWithGdnAction: h,
            staticBannerSrc: g,
            onClickContent: p,
            iconSrc: x,
            onView: f,
            presenceActivity: E,
            currentUserPresenceActivity: C,
            hideParty: I,
            partyStatusElement: _,
            analyticsLocations: N,
            showAuthButton: y,
            requireAccountLink: T,
            requireGameLaunch: S,
            canPromptAuth: b,
            startAuthorization: R,
            accountLinkButtonRef: P,
            renderAccountLinkUpsell: w,
        } = e,
        D = E?.timestamps?.start ?? E?.created_at,
        O = a.useMemo(
            () =>
                null != D
                    ? (0, r.jsxs)("div", {
                          className: dN.Ym,
                          children: [
                              (0, r.jsx)(er._, { size: "xxs", color: "currentColor" }),
                              (0, r.jsx)(ou.z, {
                                  entry: { start: D, end: E?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [D, E?.timestamps?.end],
        ),
        U = o1(t),
        G = (0, M.s)(n.id),
        V = a.useMemo(
            () =>
                G.some((e) => (0, L.CZ)(e) === v.m.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(j.Y, { size: "xxs", color: "currentColor" }),
                              ed.intl.string(ed.t.TsWCdW),
                          ],
                      })
                    : null,
            [G],
        ),
        B = a.useMemo(
            () =>
                (0, r.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: dN.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [U ? oH(t, i, l, o, !1) : O, U ? null : V],
                }),
            [U, t, i, l, o, O, V],
        ),
        H = a.useMemo(() => {
            let e = E?.details;
            return null == e || "" === e
                ? null
                : (0, r.jsx)(A.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [E?.details]),
        F = a.useMemo(
            () => (0, r.jsxs)("div", { className: dN.pq, children: [H, B, I || U ? null : _] }),
            [B, I, U, _, H],
        ),
        Y = !!d,
        z = (0, k.x)(n),
        { canJoin: W, remoteJoinPlatform: K } = (function (e) {
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
            if (l.author.id === i || !dh(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, o2._)(t);
            if (!(0, dz.A)(d) || (0, dW.U)(d) || (0, dG.w)(n, t) || o1(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === eo.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, u.Lt)(e.flags ?? 0, eo.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = dH.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, dF.e)(n) ||
                        (null != n.application_id &&
                            (dB.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, dV.m0)() ? t === eo.yTV.ANDROID : !!(0, dV.un)() && t === eo.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, u.Lt)(n.flags ?? 0, eo.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, dY.A)(t, eo.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, oK.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: E,
            currentUserPresenceActivity: C,
            currentUserId: o,
            message: t,
            application: n,
            isEmbeddedApplication: c,
            isFrameApplication: z,
            isGameLaunchable: Y,
        }),
        J = !(null == E || !dh(E, t, n.id) || !(0, dY.A)(E, eo.jUm.SYNC) || !oK.isPlatformEmbedded || (0, dG.w)(C, E)),
        q = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !dh(e, t, n.id) ||
                t.activity?.type !== eo.xL.JOIN_REQUEST ||
                !(0, dY.A)(e, eo.jUm.JOIN)
            )
                return !1;
            let l = (0, o2._)(e);
            return !(!(0, dz.A)(l) || (0, dW.U)(l));
        })(E, t, n, o),
        X = (0, dG.w)(C, E),
        $ = null != E && (0, dY.A)(E, eo.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ee = (0, m.bG)(
            [dU.A],
            () =>
                null != E && null != E.application_id && dU.A.getState(E.application_id, eo.xL.JOIN) === eo.eAD.LOADING,
        ),
        { actions: en, hasAccountLinkButton: el } = a.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            W && T
                ? ((e = {
                      label: ed.intl.string(ed.t.lw71Nf),
                      trackingArea: Z.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          R({ analyticsLocations: N });
                      },
                  }),
                  (n = !1))
                : W && S
                  ? ((e = {
                        label: ed.intl.string(ed.t["nIG+xx"]),
                        trackingArea: Z.kY.PLAY,
                        onClick: () => {},
                        disabled: !0,
                    }),
                    (n = !1))
                  : W
                    ? (e = {
                          label: ed.intl.string(ed.t.VJlc0S),
                          trackingArea: Z.kY.JOIN,
                          submitting: ee,
                          onClick: () => {
                              dI.Ay.join({
                                  userId: t.author.id,
                                  sessionId: E.session_id,
                                  applicationId: E.application_id,
                                  channelId: l.id,
                                  messageId: t.id,
                                  source: eo.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: N,
                                  embedded: (0, dY.A)(E, eo.jUm.EMBEDDED),
                                  remotePartyId: null != K ? E.party?.id : void 0,
                              }),
                                  (0, dK.A)({
                                      type: eo.UqL.JOIN,
                                      source: eo.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: l.guild_id,
                                      channelId: l.id,
                                      applicationId: E.application_id,
                                      partyId: E.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: N,
                                      remoteJoinPlatform: K,
                                  });
                          },
                      })
                    : $ && b
                      ? ((e = {
                            label: ed.intl.string(ed.t.lw71Nf),
                            trackingArea: Z.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                R({ analyticsLocations: N });
                            },
                        }),
                        (n = !1))
                      : J
                        ? ((e = {
                              label: ed.intl.string(ed.t.VJlc0S),
                              trackingArea: Z.kY.SYNC,
                              onClick: () => {
                                  null != E && dO.OH(E, t.author.id);
                              },
                          }),
                          (n = !1))
                        : q
                          ? (e = {
                                label: ed.intl.string(ed.t["hC/Zey"]),
                                trackingArea: Z.kY.INVITE,
                                onClick: () => {
                                    null != E &&
                                        dD.A.sendActivityInvite({
                                            type: eo.xL.JOIN,
                                            channelId: l.id,
                                            activity: E,
                                            location: eo.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === o,
                                disabledReason: t.author.id === o ? ed.intl.string(ed.t.IBl8ID) : void 0,
                            })
                          : X
                            ? (e = {
                                  label: ed.intl.string(ed.t.KC26NR),
                                  trackingArea: Z.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != h && ((e = h), (n = !1));
            let s = [];
            return (
                null != e &&
                    (s.push(e),
                    y &&
                        n &&
                        (s.push({
                            label: ed.intl.string(ed.t.lw71Nf),
                            trackingArea: Z.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                R({ analyticsLocations: N });
                            },
                            icon: dC.A,
                            iconButton: !0,
                            buttonRef: P,
                        }),
                        (i = !0))),
                { actions: s, hasAccountLinkButton: i }
            );
        }, [W, T, S, J, q, X, h, t.author.id, t.id, E, l.id, l.guild_id, N, K, o, ee, y, R, P, b, $]);
    dj(
        en.some((e) => e.trackingArea === Z.kY.CLOUD_PLAY),
        N,
    );
    let es = a.useMemo(
        () => (X ? null : (0, r.jsx)(dZ, { presenceActivity: E, remoteJoinPlatform: K, isGameLaunchable: Y })),
        [X, E, K, Y],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei, {
                header: s,
                title: i,
                staticBannerSrc: g,
                onClickBanner: p,
                bannerAspectRatio: et.ACTIVITY,
                iconSrc: x ?? void 0,
                info: F,
                actions: en,
                primaryActionFirst: !0,
                onClickContent: p,
                trackingConfig: {
                    id: n.id,
                    linkType: Q.J.RICH_PRESENCE_INVITE,
                    onView: f,
                    referrerId: t.author.id,
                    guildId: l.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: es,
            }),
            el ? w() : null,
        ],
    });
}
var d$ = n(49999);
function d0(e) {
    var t, i;
    let l,
        s,
        {
            analyticsLocations: o,
            application: d,
            channel: c,
            currentUserId: u,
            currentUserPresenceActivity: h,
            hideParty: g,
            message: p,
            onView: A,
            partyStatusElement: x,
            presenceActivity: f,
        } = e,
        E = (0, C.Ag)(d),
        { iconSrc: I, name: v } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, du.uD)(t.id, e.activity?.icon_override) : null) ??
                    V.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(p, d),
        _ =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: l, imageURL: s } = (0, m.cf)(
                        [dE],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = dE.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, dp.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, du.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: r };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    a.useEffect(() => {
                        l !== s &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                tj.h.dispatch({
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
            (l = (0, rS.d)(t)),
            (s = (0, m.bG)([e3.A, oz.A], () => {
                let e = e3.A.getApplication(t);
                return null != e ? oz.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, dd.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: s?.id ?? void 0,
                    source: da.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: i,
                }),
                launchableAppId: l,
            }),
        y = (0, dg.A)({ application: d, analyticsLocations: o }),
        T = a.useMemo(() => {
            if (null != y)
                return { label: ed.intl.string(ed.t["jaYS/h"]), icon: o6.h, trackingArea: Z.kY.CLOUD_PLAY, onClick: y };
        }, [y]),
        S = eT(d),
        b = a.useMemo(() => (null != j ? j : null != S && E ? S : void 0), [E, j, S]),
        L = o9.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        R = de.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: k, hasAlreadyLinked: M, startAuthorization: P } = (0, ds.RD)(d),
        w = (function (e, t) {
            let { showInGameModal: i = !0, showToastOnSuccess: l = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                [s, o] = a.useState(!1),
                d = a.useCallback(
                    function () {
                        for (var t = arguments.length, l = Array(t), s = 0; s < t; s++) l[s] = arguments[s];
                        o(!0);
                        let a = e(...l);
                        return (
                            a === dn._M.RPC &&
                                i &&
                                (0, eK.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { modalKey: dl },
                                ),
                            a
                        );
                    },
                    [e, o, i],
                ),
                c = (0, dt.A)(t);
            return (
                a.useEffect(() => {
                    if (s && !1 === c && !0 === t) {
                        if (((0, eK.closeModal)(dl), o(!1), !l)) return;
                        let e = () => {
                            (0, eZ.P0)({
                                id: "account-linked-toast",
                                message: ed.intl.string(di.default.uG6teD),
                                type: e$.Ck.SUCCESS,
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
        D = (0, m.bG)([oF.Ay, oz.A], () => {
            let e = oz.A.getGameByApplication(d);
            return oF.Ay.getRunningGames().some((t) => t.id === d.id || (null != e && t.id === e.id));
        }, [d]),
        O = (0, m.bG)([oz.A], () => {
            if (o8.has(d.id) || (null != d.parentId && o8.has(d.parentId))) return !0;
            let e = oz.A.getGameByApplication(d);
            return null != e && o8.has(e.id);
        }, [d]),
        U = oK.isPlatformEmbedded && !O && R.requireAccountLink && k && !M,
        G = oK.isPlatformEmbedded && !O && R.requireGameLaunch && !D,
        B = !dh(f, p, d.id),
        H = oV(v, p.activity?.type, B),
        F = a.useRef(null),
        Y = (0, m.bG)([dc.A], () => dc.A.getMessages(c.id)),
        z = () => {
            var e;
            let t = [];
            return (
                (e = p.id),
                !Y.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === eo.xL.JOIN, 25) &&
                    k &&
                    !M &&
                    L.enabled &&
                    t.push(o3.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, r.jsx)(dr.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === o3.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, r.jsx)(o4.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: o5.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: d },
                                },
                                title: ed.intl.formatToPlainString(ed.t["lo6H6+"], { gameName: d.name }),
                                body: ed.intl.string(ed.t.qYAzOp),
                                targetElementRef: F,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(d$.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return B
        ? (0, r.jsx)(dS, {
              message: p,
              application: d,
              applicationName: v,
              channel: c,
              header: H,
              currentUserId: u,
              launchableAppId: N,
              isEmbeddedApplication: E,
              tryWithGdnAction: T,
              staticBannerSrc: _,
              onClickContent: b,
              iconSrc: I,
              onView: A,
              presenceActivity: f,
              analyticsLocations: o,
              showAuthButton: k && !M && L.enabled,
              requireAccountLink: U,
              startAuthorization: w,
              accountLinkButtonRef: F,
              renderAccountLinkUpsell: z,
          })
        : (0, r.jsx)(dQ, {
              message: p,
              application: d,
              applicationName: v,
              channel: c,
              header: H,
              currentUserId: u,
              launchableAppId: N,
              isEmbeddedApplication: E,
              tryWithGdnAction: T,
              staticBannerSrc: _,
              onClickContent: b,
              iconSrc: I,
              onView: A,
              presenceActivity: f,
              currentUserPresenceActivity: h,
              hideParty: g,
              partyStatusElement: x,
              analyticsLocations: o,
              showAuthButton: k && !M && L.enabled,
              requireAccountLink: U,
              requireGameLaunch: G,
              canPromptAuth: k && !M,
              startAuthorization: w,
              accountLinkButtonRef: F,
              renderAccountLinkUpsell: z,
          });
}
var d1 = n(172710);
function d2(e) {
    let { application: t, message: n, header: i, onClickContent: l, onView: s, guildId: o } = e,
        d = a.useMemo(
            () =>
                (0, r.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: dN.h_,
                    color: "none",
                    lineClamp: 1,
                    children: ed.intl.string(ed.t["84qx9r"]),
                }),
            [],
        );
    return (0, r.jsx)(ei, {
        header: i,
        title: t.name,
        iconSrc: oX.HT.getWhiteIconURL(),
        info: d,
        onClickContent: l,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.RICH_PRESENCE_INVITE,
            onView: s,
            referrerId: n.author.id,
            guildId: o,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var d3 = n(353411);
function d4(e) {
    var t;
    let {
            application: n,
            message: i,
            header: l,
            presenceActivity: s,
            hideParty: o,
            partyStatusElement: d,
            currentUserPresenceActivity: c,
            onClickContent: u,
            onView: m,
            guildId: h,
        } = e,
        g = (0, dG.w)(c, s),
        p = (0, d3.Gq)(s, i.author, "Invite Embed"),
        x = a.useMemo(() => {
            let e = [];
            return (
                g ||
                    e.push({
                        label: p.label ?? ed.intl.string(ed.t.VJlc0S),
                        trackingArea: Z.kY.SYNC,
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
                ? ed.intl.formatToPlainString(ed.t.JCvHtx, { track: s.details, artist: s.state })
                : n.name,
        E = s?.timestamps?.start ?? s?.created_at,
        C = a.useMemo(
            () =>
                null != E
                    ? (0, r.jsxs)("div", {
                          className: dN.Ym,
                          children: [
                              (0, r.jsx)(es.T, { size: "xxs", color: "currentColor" }),
                              (0, r.jsx)(ou.z, {
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
        I = a.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: dN.pq,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "text-xs/normal",
                            className: dN.dS,
                            color: "none",
                            lineClamp: 1,
                            children: C,
                        }),
                        o ? null : d,
                    ],
                }),
            [C, o, d],
        );
    return (0, r.jsx)(ei, {
        header: l,
        title: f,
        iconSrc:
            ((t = n.id),
            (null == s || null == s.assets || null == s.assets.large_image
                ? null
                : (0, du.uD)(t, s.assets.large_image, [rg.Ig, rg.Ig])) ?? void 0),
        info: I,
        actions: x,
        onClickContent: u,
        trackingConfig: {
            id: n.id,
            linkType: Q.J.RICH_PRESENCE_INVITE,
            onView: m,
            referrerId: i.author.id,
            guildId: h,
            channelId: i.channel_id,
            messageId: i.id,
        },
    });
}
function d6(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: i,
            message: l,
            onView: s,
            partyStatusElement: o,
            presenceActivity: d,
            guildId: c,
        } = e,
        u = !dh(d, l, t.id),
        m = oV(t.name, l.activity?.type, u),
        h = a.useMemo(() => {
            if (null != d) return () => (0, d1.Mp)(d);
        }, [d]);
    return u
        ? (0, r.jsx)(d2, { application: t, message: l, header: m, onClickContent: h, onView: s, guildId: c })
        : (0, r.jsx)(d4, {
              application: t,
              message: l,
              header: m,
              presenceActivity: d,
              hideParty: i,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: h,
              onView: s,
              guildId: c,
          });
}
var d5 = n(272984);
function d7(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: s } = e,
        a = (function (e) {
            let { activityActionType: t, maxPartySize: n, partySize: i } = e;
            return t === eo.xL.STREAM_REQUEST
                ? ""
                : t === eo.xL.LISTEN
                  ? n > 0
                      ? ed.intl.formatToPlainString(ed.t.Zogoou, { partySize: i, maxPartySize: n })
                      : ed.intl.formatToPlainString(ed.t.UGei0j, { partySize: i })
                  : n > 0
                    ? ed.intl.formatToPlainString(ed.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : ed.intl.formatToPlainString(ed.t["65JnWC"], { partySize: i });
        })({ maxPartySize: i, partySize: Math.max(n, t.length), activityActionType: s }),
        o = [...t];
    for (; o.length < n && o.length < 8; ) o.push(ea.mt);
    for (; o.length < i && o.length < 8; ) o.push(null);
    return (0, r.jsxs)("div", {
        className: dN.UF,
        children: [
            o.length > 0 &&
                (0, r.jsx)(ea.Ay, {
                    guildId: l,
                    users: o,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: ea.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: a }),
        ],
    });
}
function d9(e) {
    let { analyticsLocations: t, app: n, channel: i, message: l, hideParty: s, onView: o } = e,
        d = ep(n),
        c = (0, m.bG)([w.default], () => w.default.getId()),
        u = (0, m.bG)([ru.A], () => {
            if (null == l.application) return ru.A.findActivity(l.author.id, (e) => e.type === eo.$pd.LISTENING);
            {
                let e = l.author.id;
                return (
                    o1(l) && (e = e === c && i.isPrivate() ? i.getRecipientId() : c),
                    ru.A.getApplicationActivity(e, l.application.id)
                );
            }
        }, [l, i, c]),
        h = (0, m.bG)([oQ.A, o$.A], () => (0, o0.A)(oQ.A, o$.A, d.id), [d.id]),
        g = (0, m.yK)([oZ.A], () => (null == u || null == u.party ? [] : Array.from(oZ.A.getParty(u.party.id) ?? [])), [
            u,
        ]),
        { partySize: p, maxPartySize: A } = (0, o2._)(u),
        x = a.useMemo(
            () =>
                g.map((e) => {
                    let t = G.default.getUser(e);
                    return null != t ? t : ea.mt;
                }),
            [g],
        ),
        f = a.useMemo(
            () =>
                (0, r.jsx)(d7, {
                    partyMembers: x,
                    partySize: p,
                    maxPartySize: A,
                    guildId: i.guild_id,
                    activityActionType: l.activity?.type,
                }),
            [x, p, A, i.guild_id, l.activity?.type],
        );
    return (0, d5.pH)(u?.party?.id) || d.id === oX.HT.id
        ? (0, r.jsx)(d6, {
              application: d,
              currentUserPresenceActivity: h,
              hideParty: s,
              message: l,
              onView: o,
              partyStatusElement: f,
              presenceActivity: u,
              guildId: i.guild_id,
          })
        : l.activity?.type === eo.xL.STREAM_REQUEST
          ? (0, r.jsx)(oq, { analyticsLocations: t, application: d, channel: i, currentUserId: c, message: l })
          : (0, r.jsx)(d0, {
                analyticsLocations: t,
                application: d,
                channel: i,
                currentUserId: c,
                currentUserPresenceActivity: h,
                hideParty: s,
                message: l,
                onView: o,
                partyStatusElement: f,
                presenceActivity: u,
            });
}
let d8 = (e) => {
    let { channel: t, message: n, hideParty: i } = e,
        { analyticsLocations: l } = (0, E.Ay)(f.A.INVITE_EMBED),
        s =
            null != n.application
                ? eg.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, d5.pH)(n.activity.party_id)
                  ? oX.HT
                  : void 0,
        { data: a } = (0, e2.YY)(n.application?.id),
        o = a ?? s;
    return null == o ? null : (0, r.jsx)(d9, { app: o, channel: t, message: n, hideParty: i, analyticsLocations: l });
};
var ce = n(503002),
    ct = n(123791);
function cn(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, e2.YY)(t);
    return null == i ? null : (0, r.jsx)(ci, { app: i, guildId: n });
}
function ci(e) {
    let { app: t, guildId: i } = e;
    (0, ct.C)(t.id);
    let l = a.useCallback(() => {
        (0, eK.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81586"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) => (0, r.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, r.jsx)(K.$, {
        size: "sm",
        onClick: l,
        icon: ce.U,
        text: ed.intl.format(ed.t.XDRjs5, { appName: t.name }),
    });
}
var cl = n(394839),
    cs = n(96782),
    cr = n(930390),
    ca = n(861986),
    co = n(343552),
    cd = n(581619),
    cc = n(416620);
let cu = [eo.Auw.GIFV],
    cm = 15 * sK.A.Millis.MINUTE,
    ch = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    cg = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: s } = e,
            a = (0, u.Lt)(s, n8.e5.IS_ANIMATED);
        return null != i && null != l && (ie.bp.test(n) || (a && (ie.P8.test(n) || ie.p4.test(n))))
            ? (0, r.jsx)(rE.A, { width: i, height: l, src: n, url: t, format: h.TL.IMAGE, className: cc.jj })
            : null;
    };
class cp extends a.Component {
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
            ...(null != t ? { invite_instance_id: (0, n2._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && ch.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, g.A)(this.state, t) ||
            !(0, g.A)(this.props, e, ["message", "channel"]) ||
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
            case sX.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, r.jsx)(nm, { messageId: e.id, channelId: t.id });
                break;
            case sX.xC.AGE_VERIFICATION_RETRY:
                i = (0, r.jsx)(eF, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, r.jsx)("div", { className: cc.od, children: i });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: l } = t;
                  if (n === t$.I.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, r.jsx)(
                                oD,
                                { code: i, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                i,
                            )
                          : null;
                  if (n === t$.I.TEMPLATE) return (0, r.jsx)(n1, { code: i }, i);
                  if (n === t$.I.EVENT) return (0, r.jsx)(nJ.A, { code: i }, i);
                  if (n === t$.I.CHANNEL_LINK) return (0, r.jsx)(s6, { code: i, message: e }, i);
                  if (n === t$.I.APP_DIRECTORY_PROFILE) return (0, r.jsx)(nH, { code: i, message: e }, i);
                  else if (n === t$.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: s } = (0, th.N)(l);
                      return (0, r.jsx)(eG, { applicationId: i, message: e, referrerId: t, customId: n, linkId: s }, i);
                  } else if (n === t$.I.GUILD_PRODUCT) return (0, r.jsx)(nK, { code: i }, i);
                  else if (n === t$.I.SERVER_SHOP) return (0, r.jsx)(ni, { guildId: i }, i);
                  else if (n === t$.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, r.jsx)(lQ, { guildId: t, skuId: e, channel: n }, i);
                  } else if (n === t$.I.SOCIAL_LAYER_STOREFRONT_APP) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, r.jsx)(lZ, { applicationId: t, skuId: e, channel: n }, i);
                  } else if (n === t$.I.QUESTS_EMBED) return (0, r.jsx)(i7.A, { questId: i }, i);
                  else if (n === t$.I.APP_DIRECTORY_STOREFRONT) return (0, r.jsx)(tc, { appId: i, message: e }, i);
                  else if (n === t$.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, eY.u)(i);
                      return null == t
                          ? null
                          : (0, r.jsx)(tu, { appId: t.applicationId, skuId: t.skuId, message: e }, i);
                  } else if (n === t$.I.APP_OAUTH2_LINK) return (0, r.jsx)(tx, { applicationId: i, message: e }, i);
                  else if (n === t$.I.COLLECTIBLES_SHOP) return null;
                  else if (n === t$.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: s, giftInfo: a } = e,
            o = G.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, r.jsx)(
                      "div",
                      {
                          className: cc.zv,
                          children: (0, r.jsx)(ay, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: s,
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
            isPendingMember: s,
            channel: a,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, r.jsx)(cr.A, {
                  message: e,
                  channel: a,
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
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: d, flags: c } = e;
        if (0 === d.length || e.isPoll() || (0, sY._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, u.Lt)(e.flags, eo.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, n8.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, u.Lt)(t.flags ?? 0, eo.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: p } = (0, iT.o)(
                h,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = h.length > 1,
            x = (0, u.Lt)(c, eo.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, sZ.iW)(e.originalItem, t);
        }
        let E = m.map((r) => {
            let a = (0, n8.aG)(r),
                o = {
                    message: e,
                    item: (0, cs.rC)(r, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != s
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), s(e, a);
                              }
                            : void 0,
                    renderAudioComponent: x ? oO.SX : oO.Nj,
                    renderImageComponent: oO.Cr,
                    renderVideoComponent: oO.I1,
                    renderPlaintextFilePreview: oO.R6,
                    renderGenericFileComponent: oO.UB,
                    onPlay: (e, n, i) => {
                        te.default.track(eo.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: r.content_type,
                            flags: r.flags,
                            size: r.size,
                            duration: i,
                        });
                    },
                    gifFavoriteButton: cg(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, sW.E)({ proxyURL: r.proxy_url, url: r.url });
            return d in g && A && ((o.onClick = g[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, r.jsx)(cl.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: s,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, sZ.sC)(e, i, o, d);
        if (e.type === eo.Auw.GIFT) return null;
        let m = cu.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, r.jsx)(
            nU.G.Provider,
            {
                value: (0, co.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, r.jsx)(tP.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !s,
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
        e.type !== eo.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? n9.A.parseEmbedTitleWithoutLinks : n9.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eo.Auw.RICH
            ? n9.A.parse(t, !0, {
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
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  let i;
                  if (
                      cd.z.has(t.type) ||
                      (0, sJ.p6)(t) ||
                      ((0, u.Lt)(t.flags ?? 0, eo.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === n4.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !n6.has(t.content_type);
                              })
                          )) ||
                      (0, sJ.V)(t) ||
                      (0, sJ.G8)(t)
                  )
                      return null;
                  if (t.type === eo.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: s,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, sZ.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, r.jsx)(
                                  rn,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: cg,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), a?.(t, e);
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
                          ? (0, r.jsx)(
                                lI.Ay,
                                {
                                    type: lI.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let s = { renderImageComponent: l3.LL, renderVideoComponent: l3.$o, renderLinkComponent: l3.bU };
                  if (
                      t.type === eo.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = sq.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, r.jsx)(
                                  aE,
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
        return (0, r.jsx)(s8.N, {
            gifAutoPlay: t,
            getGifFavButton: cg,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), s?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, r.jsx)(n5.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, r.jsx)(d8, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eo.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, r.jsx)(tM, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, sQ.ec)(e)
            ? (0, r.jsx)(rf.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, l$.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, r.jsx)(sj, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eo.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, r.jsx)(sH, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eo.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - sL.default.extractTimestamp(e.id) >= cm)
        )
            return (0, r.jsx)("div", { className: cc.xM, children: ed.intl.string(ed.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, r.jsxs)(p.M, {
            dismissable: !0,
            header: ed.intl.string(ed.t.VL1KOk),
            confirmText: ed.intl.string(ed.t.YEHppG),
            cancelText: ed.intl.string(ed.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, r.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: cc.IX,
                    children: ed.intl.string(ed.t["vXZ+Fo"]),
                }),
                (0, r.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ed.intl.string(ed.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, r.jsx)(p.M, {
                  dismissable: !0,
                  header: ed.intl.string(ed.t.CbTIEo),
                  confirmText: ed.intl.string(ed.t.kFwAsa),
                  cancelText: ed.intl.string(ed.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, r.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: cc.IX,
                      children: ed.intl.string(ed.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== c.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, r.jsx)(cn, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, r.jsx)(rx, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eo.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, r.jsx)(iy, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eo.Auw.SAFETY_POLICY_NOTICE
            ? (0, r.jsx)(lN, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eo.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, r.jsx)(lP, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, ns.KM)(e)
            ? (0, r.jsx)(nd, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, r.jsx)(i5, { message: e, poll: t, className: cc.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, r.jsx)(tZ, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, i9.Mn)(e, this.props.channel)) return (0, r.jsx)(lC, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, i9.Mn)(e, this.props.channel)) return (0, r.jsx)(nO, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, r.jsx)(ca.A, { message: e, compact: t, location: ca.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: s } = this.state,
            a = this.renderEditedTag(t, i),
            o = this.renderCodedLinks(t),
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
            y = this.renderSafetySystemNotification(t),
            T = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == o &&
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
            : (0, r.jsxs)("div", {
                  id: (0, oU.XL)(t),
                  className: d()(e, cc.kL),
                  children: [
                      L,
                      b,
                      I,
                      S,
                      R,
                      o,
                      c,
                      j,
                      u,
                      m,
                      h,
                      T,
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
                      s && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      N,
                      y,
                  ],
              });
    }
}
function cA(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: s } = e,
        a = (0, m.bG)([w.default], () => w.default.getId()),
        o = nI.X6.useSetting(),
        d = nI.hD.useSetting(),
        c = nI.rs.useSetting() && !(0, sb.A)(e.message),
        h = nI.jW.useSetting() && !1 !== e.renderReactions,
        g = nI.kt.useSetting(),
        p = (0, m.bG)([sz.A], () => null == n.guild_id || sz.A.canChatInGuild(n.guild_id), [n]),
        A = (0, m.bG)([n7.A], () => null != n.guild_id && n7.A.isLurking(n.guild_id), [n]),
        x = (0, m.bG)([ip.Ay, G.default], () => {
            let e = G.default.getCurrentUser();
            return (null != n.guild_id && null != e ? ip.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: f, canManageMessages: E } = (0, m.cf)(
            [ev.A],
            () => ({
                canAddNewReactions: p && ev.A.can(eo.xBc.ADD_REACTIONS, n),
                canManageMessages: ev.A.can(eo.xBc.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        C = (0, nF.ix)(n.guild_id),
        [, I] = (0, nY.c)(n.guild_id),
        v = (0, sN.Id)(n),
        _ =
            (a === i.author.id || E) &&
            i.author.id !== eo.oIV &&
            !1 !== l &&
            !(0, u.Lt)(i.flags, eo.pr7.EPHEMERAL) &&
            v &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        j = a === i.author.id && v && !s,
        N = i.author.id === a,
        y = i.isFirstMessageInForumPost(n),
        T = (0, s0.A)({
            channel: n,
            canChat: p,
            renderReactions: h,
            canAddNewReactions: f,
            isLurking: A,
            communicationDisabled: I,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: C,
        }),
        S = (0, nA.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        b = (0, it.A)(n?.id),
        L = (0, iS.A)(i),
        R = (0, nr.P)(i),
        k = (0, s$.z)(n),
        M = (0, sX._f)(i.id, i.channel_id),
        P = (0, nl._R)();
    return (0, r.jsx)(cp, {
        canSuppressEmbeds: _,
        canDeleteAttachments: j,
        ...T,
        disableReactionReads: !!y || T.disableReactionReads,
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
let cx = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = nI.X6.useSetting(),
        u = nI.hD.useSetting(),
        m = nI.rs.useSetting(),
        h = nI.kt.useSetting(),
        g = (0, nA.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, it.A)(n?.id),
        A = (0, nr.P)(t),
        x = (0, sX._f)(t.id, t.channel_id),
        f = (0, iS.A)(t);
    return (0, r.jsx)(cp, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: s,
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
