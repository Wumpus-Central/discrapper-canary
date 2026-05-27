e.d(n, { A: () => tJ });
var i = e(627968),
    l = e(64700),
    a = e(503698),
    r = e.n(a),
    s = e(696292),
    o = e(983851),
    c = e(661531),
    u = e(939249),
    d = e(541806),
    A = e(765379),
    x = e(672979),
    p = e(960076),
    f = e(793574),
    _ = e(688810),
    m = e(47167),
    T = e(939341),
    E = e(662010),
    N = e(623671),
    g = e(365185),
    C = e(915089),
    I = e(932413),
    y = e(345942),
    j = e(82149),
    S = e(92240),
    O = e(257367),
    h = e(160376),
    P = e(53257),
    v = e(975732),
    L = e(939496),
    R = e(964195),
    b = e(17928);
let U = (0, e(945810).mj)({
    name: "2026-05-multi-button-play-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var M = e(55730),
    D = e(682261),
    G = e(874546),
    V = e(141639),
    Y = e(61330),
    k = e(154483),
    W = e(737393),
    H = e(540185),
    B = e(289173),
    w = e(735321),
    z = e(999291),
    $ = e(993401),
    F = e(495544),
    X = e(760751),
    Q = e(518477),
    q = e(375708);
function J(t) {
    let { applicationId: n, onAction: e, onClose: a } = t,
        r = (0, b.bG)([F.default], () => F.default.getId()),
        s = (0, z.Ay)(r, null),
        o = (0, b.bG)([X.A], () => X.A.getDetectableGame(n)),
        c = l.useMemo(
            () =>
                !(
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof B.Yy &&
                            t.type === H.x.CURRENT_GAMES &&
                            t.games?.some((t) => t.applicationId === n),
                    )
                ) && (0, w.XX)(o),
            [n, s?.widgets, o],
        ),
        u = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, w.ew)({ widgetType: H.x.CURRENT_GAMES, game: { applicationId: n }, ignoreMaxGames: !0 }),
                    (0, v.openUserProfileModal)({
                        userId: r,
                        tabSection: Q.RP.WIDGETS,
                        scrollTarget: H.x.CURRENT_GAMES,
                    }),
                    a?.();
            },
            [n, r, e, a],
        );
    return c ? (0, i.jsx)($.FD, { text: q.intl.string(q.t.BjYzmC), onClick: u, fullWidth: !0 }) : null;
}
var K = e(601007),
    Z = e(46225),
    tt = e(308335),
    tn = e(790381),
    te = e(266080),
    ti = e(729937),
    tl = e(123917),
    ta = e(998218),
    tr = e(996988),
    ts = e(514566);
async function to(t) {
    let { activity: n, user: e, index: i } = t;
    try {
        let t = await (0, ti.yb)(n, e.id);
        if (t.button_urls.length <= i) return;
        let l = t.button_urls[i];
        if ("string" != typeof l) return;
        let a = ta.A.safeParseWithQuery(l);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, tl.h)({ href: ta.A.format(a), trusted: !1 });
    } catch (t) {}
}
function tc(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let r = (0, d.A)(e);
    return a === tr.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: ts.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      $.FD,
                      {
                          text: r ? q.intl.string(q.t.I6JG46) : t,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: ts.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      $.FD,
                      {
                          text: r ? q.intl.string(q.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tu = e(990078),
    td = e(323384),
    tA = e(808666),
    tx = e(687966),
    tp = e(780907),
    tf = e(928550),
    t_ = e(102853),
    tm = e(695311);
function tT(t) {
    let { user: n, activity: e, onAction: l, onClose: a } = t,
        { themeType: r } = (0, L.E)(),
        s = (0, tm.A)({ applicationId: e?.application_id, onClose: a }),
        o = (0, t_.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: a }),
        c = (0, tf.d)(e?.application_id);
    if (null == o && null != e && (0, A.A)(e))
        return (0, i.jsx)($.FD, {
            icon: td.k,
            text: q.intl.string(q.t.RscU7I),
            fullWidth: r !== tr.d.MODAL_V2,
            onClick: (t) => {
                t.stopPropagation(),
                    null != c ? tp.Ay.launch({ applicationId: c }) : (l?.({ action: "PRESS_PLAY_BUTTON" }), s());
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: x, tooltip: p, isEnabled: f, isEmbedded: _ } = o,
        m = r !== tr.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? ts.Ij : void 0,
        children: (0, i.jsx)(tu.m, {
            text: p,
            asContainer: !f,
            children: (0, i.jsx)($.FD, {
                icon: _ ? tA.I : tx._,
                text: x,
                disabled: !f,
                loading: u,
                fullWidth: m,
                onClick: (t) => {
                    t.stopPropagation(), l?.({ action: _ ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), d();
                },
            }),
        }),
    });
}
var tE = e(141628);
function tN(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: l } = (0, _.Ay)(),
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, i.jsx)($.FD, {
        icon: () => (0, i.jsx)(tE.A, {}),
        text: q.intl.string(q.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [l] });
        },
    });
}
var tg = e(626584),
    tC = e(652215);
function tI(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, M.A)(e, tC.jUm.INSTANCE)
        ? (0, i.jsx)($.FD, {
              text: q.intl.string(q.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  t.stopPropagation(),
                      l?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tg.A("UserActivityActions").log("notify", n.id, e);
              },
          })
        : null;
}
var ty = e(573648),
    tj = e(968309),
    tS = e(30370);
function tO(t) {
    let { platformType: n, icon: e, onAction: l } = t,
        { newestAnalyticsLocation: a } = (0, _.Ay)(),
        { themeType: r } = (0, L.E)(),
        s = r === tr.d.MODAL_V2;
    return (0, b.bG)([tS.A], () => null != tS.A.getAccount(null, n))
        ? null
        : (0, i.jsx)($.FD, {
              icon: e,
              text: q.intl.formatToPlainString(q.t.XWSHTb, { platform: ty.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tC.fg2.XBOX;
                  l?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tj.A)({ platformType: n, location: a });
              },
          });
}
var th = e(378570),
    tP = e(790535),
    tv = e(233993),
    tL = e(734057),
    tR = e(576705),
    tb = e(977997);
function tU(t) {
    let { activity: n, onAction: e, onClose: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, j.UW)(n) ?? {},
        c = (0, b.bG)([tb.A], () => null != s && tb.A.isInChannel(s), [s]),
        u = (0, b.bG)([tL.A], () => (null != s ? tL.A.getChannel(s) : null), [s]),
        d = (0, b.bG)([tR.A], () => null != u && tR.A.can(tv.Gk, u), [u]);
    return (0, j.Cy)(n) && d && null != o && null != s
        ? (0, i.jsx)($.FD, {
              text: q.intl.string(q.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: (t) => {
                  t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tP.CH(o, s),
                      (0, th.iN)(s),
                      l?.();
              },
          })
        : null;
}
var tM = e(908289);
function tD(t) {
    let { activity: n, onAction: e } = t,
        { themeType: l } = (0, L.E)(),
        a = l === tr.d.MODAL_V2,
        r = (0, tM.A)(n);
    return (0, p.A)(n) && null != r
        ? (0, i.jsx)($.FD, {
              text: q.intl.string(q.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tG = e(985629);
function tV(t) {
    let { user: n, activity: e, onAction: l, onClose: a, application: r, containerClassName: s } = t,
        { themeType: o } = (0, L.E)(),
        c = (0, b.bG)([F.default], () => F.default.getId() === n.id),
        u = (0, W.J)(r),
        d = (0, tt.o)(e?.application_id ?? r?.id) || (0, M.A)(e, tC.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: x } = (0, _.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, k.A)("user_profile_activity_buttons", e?.application_id),
        { enabled: T } = U.useConfig({ location: "user_profile_activity_buttons" }),
        { fetched: E, canStartAuthorization: N, hasAlreadyLinked: g, startAuthorization: C } = (0, Z.RD)(r),
        I = o === tr.d.MODAL || o === tr.d.MODAL_V2,
        y = o === tr.d.POPOUT,
        S = o === tr.d.MODAL_V2 ? ts.g6 : ts.Zu,
        O =
            m.length > 0
                ? (0, i.jsx)(K.A, {
                      distributorCTAConfigs: m,
                      applicationId: e?.application_id ?? "",
                      analyticsLocations: x,
                      buttonVariant: "secondary",
                      fullWidth: o !== tr.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: l,
                      onClose: a,
                  })
                : null,
        h = (() => {
            if (c)
                return y && e?.type === tC.$pd.PLAYING && r?.id != null
                    ? (0, i.jsx)(J, { applicationId: r.id, onAction: l, onClose: a })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return null != O && T
                    ? (0, i.jsxs)("div", {
                          className: S,
                          children: [(0, i.jsx)(tc, { user: n, activity: e, onAction: l }), O],
                      })
                    : (0, i.jsx)(tc, { user: n, activity: e, onAction: l });
            if (!d && u && null != r && !I) {
                let t = (0, i.jsx)(tG.A, { application: r, onAction: l, onClose: a, analyticsLocations: x });
                return null != O && T ? (0, i.jsxs)("div", { className: S, children: [t, O] }) : t;
            }
            if ((0, A.A)(e) || ((0, G.Ay)(e) && d)) {
                let t = (0, i.jsx)(tT, { user: n, activity: e, onAction: l, onClose: a });
                return null != O && T ? (0, i.jsxs)("div", { className: S, children: [t, O] }) : t;
            }
            if (E && N && !g) {
                let t = (0, i.jsx)(tN, { startAuthorization: C, onAction: l });
                return null != O && T ? (0, i.jsxs)("div", { className: S, children: [t, O] }) : t;
            }
            if (null != O) return O;
            if (!(0, D.A)(e)) {
                if ((0, Y.A)(e))
                    return (0, i.jsx)(tO, { platformType: tC.fg2.XBOX, icon: () => (0, i.jsx)(te.A, {}), onAction: l });
                if ((0, V.A)(e))
                    return (0, i.jsx)(tO, {
                        platformType: tC.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(tn.A, {}),
                        onAction: l,
                    });
            }
            return (0, p.A)(e)
                ? (0, i.jsx)(tD, { activity: e, onAction: l })
                : (0, G.Ay)(e)
                  ? (0, i.jsx)(tT, { user: n, activity: e, onAction: l, onClose: a })
                  : (0, M.A)(e, tC.jUm.INSTANCE)
                    ? (0, i.jsx)(tI, { user: n, activity: e, onAction: l })
                    : (0, j.Cy)(e)
                      ? (0, i.jsx)(tU, { activity: e, onAction: l, onClose: a })
                      : null;
        })();
    return null == h ? null : (0, i.jsx)("div", { className: s, children: h });
}
var tY = e(282197),
    tk = e(624951),
    tW = e(584904),
    tH = e(351638),
    tB = e(531648),
    tw = e(910607),
    tz = e(753713),
    t$ = e(269587),
    tF = e(409626),
    tX = e(692969),
    tQ = e(534465),
    tq = e(360469);
function tJ(t) {
    let {
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            voiceGuild: b,
            voiceChannel: U,
            className: M,
            onClose: D,
            appContext: G,
        } = t,
        V = (0, C.GV)(),
        Y = (0, C.GV)(),
        { analyticsLocations: k } = (0, _.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, L.E)(),
        H = (0, g.A)({ activity: l, user: n }),
        B = (0, S.A)({ display: "live", user: n, activity: l, entry: H, analyticsLocations: k }),
        w = (0, O.A)({ userId: n.id, onAction: B }),
        z = (0, m.Ay)(U),
        $ = (0, h.A)(l),
        F = null != $.text && "" !== $.text,
        { largeImage: X, smallImage: J } = (0, T.XN)(l, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: n, user: e, currentUser: i, activity: l, application: a, entry: r, onClose: s } = t,
                o = (0, tX.A)({
                    location: n,
                    source: tF.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, tQ.UE)({ user: e, activity: l, entry: r }),
                }),
                c = (0, tm.A)({ applicationId: a?.id, onClose: s }),
                u = (0, A.A)(l);
            return u && null != a
                ? c
                : !u && (0, x.A)(l)
                  ? o
                  : (0, d.A)(l) && e.id !== i.id
                    ? () => to({ activity: l, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            entry: H,
            onClose: D,
        }),
        Z = () =>
            (0, p.A)(l) && null != U
                ? (0, i.jsxs)("div", {
                      className: ts.FH,
                      children: [
                          (0, i.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: ts.Ow }),
                          (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: z, id: V }),
                      ],
                  })
                : (0, x.A)(l) || (0, j.Cy)(l)
                  ? (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V })
                  : null != l.details
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.details, id: V }),
                      })
                    : (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V }),
        tt = () =>
            l.type === tC.$pd.HANG_STATUS
                ? null
                : (0, p.A)(l) && null != b
                  ? (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: q.intl.formatToPlainString(q.t["hq/Qze"], { guildName: b.name }),
                        onClick: () => {
                            (0, y.u)(b.id), B({ action: "OPEN_VOICE_GUILD" }), D?.();
                        },
                    })
                  : (0, x.A)(l)
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.details }),
                      })
                    : (0, j.Cy)(l)
                      ? (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l?.assets?.small_text })
                      : (0, i.jsx)(E.O, {
                            href: l.state_url,
                            children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                        }),
        tn = () => {
            if (l.type === tC.$pd.WATCHING) return null;
            if ((0, x.A)(l)) return te();
            if ((0, j.Cy)(l) && l.party?.size != null && l.party?.size.length >= 2) {
                let t = q.intl.formatToPlainString(q.t["JC/3xw"], {
                    numSpeakers: l.party?.size[0],
                    numListeners: l.party?.size[1] - l.party?.size[0],
                });
                return (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: t });
            }
            return l.assets?.large_text != null
                ? (0, i.jsx)(E.O, {
                      href: l.assets?.large_url,
                      children: (0, i.jsx)(tB.A, { text: l.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        te = () =>
            l.party?.size == null && l.application_id === tq.I4
                ? (0, i.jsxs)("div", {
                      className: ts.CI,
                      children: [
                          (0, i.jsx)(E.O, {
                              href: l.state_url,
                              children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                          }),
                          (0, i.jsx)(tB.A, {
                              variant: "text-xs/normal",
                              text: q.intl.formatToPlainString(q.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(l) && l.party?.size != null && l.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: ts.CI,
                        children: [
                            (0, i.jsx)(E.O, {
                                href: l.state_url,
                                children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                            }),
                            (0, i.jsx)(tB.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === l.party.size[1]
                                        ? q.intl.formatToPlainString(q.t.IM4J4e, { count: l.party.size[0] })
                                        : q.intl.formatToPlainString(q.t["u//9By"], {
                                              count: l.party.size[0],
                                              max: l.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == l.party
                    ? (0, i.jsx)(E.O, {
                          href: l.state_url,
                          children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                      })
                    : null,
        ti = () =>
            (0, i.jsx)(tV, {
                containerClassName: ts.o1,
                activity: l,
                user: n,
                onAction: B,
                onClose: D,
                application: a,
            });
    return (0, i.jsx)(_.f5, {
        value: k,
        children: (0, i.jsxs)(tW.A, {
            ref: w,
            className: r()(ts.Nr, M),
            onAction: B,
            onClose: D,
            "aria-labelledby": F ? `${Y} ${V}` : V,
            children: [
                (0, i.jsx)(tH.A, {
                    textId: Y,
                    ...$,
                    contextMenu: (0, i.jsx)(t$.A, {
                        display: "live",
                        user: n,
                        activity: l,
                        entry: H,
                        onClose: D,
                        appContext: G,
                    }),
                }),
                (0, i.jsx)(I.A, {
                    applicationId: a?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, a;
                        return (0, i.jsxs)("div", {
                            className: ts.rf,
                            ref: t,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ts.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, d.A)(l) ? "crunchyroll" : "default"),
                                            (a = W === tr.d.MODAL_V2 ? N.w.SIZE_100 : N.w.SIZE_60),
                                            null == K
                                                ? (0, i.jsx)(N.d, {
                                                      image: X,
                                                      smallImage: J,
                                                      size: a,
                                                      aspectRatio: e,
                                                      className: ts.Sl,
                                                  })
                                                : (0, i.jsx)(N.d, {
                                                      image: X,
                                                      smallImage: J,
                                                      size: a,
                                                      className: ts.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          B({ action: "PRESS_IMAGE" }), K(t);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: ts.zH,
                                            children: [
                                                null == K
                                                    ? (0, i.jsxs)("div", { children: [Z(), tt(), tn()] })
                                                    : (0, i.jsxs)(u.D, {
                                                          className: ts.sd,
                                                          onClick: (t) => {
                                                              B({ action: "PRESS_TEXT" }), K(t);
                                                          },
                                                          children: [Z(), tt(), tn()],
                                                      }),
                                                !n.bot && (0, i.jsx)(tY.A, { user: n, activity: l, className: ts.jp }),
                                                (() => {
                                                    if (!(0, P.A)(l)) return null;
                                                    let { start: t, end: n } = l.timestamps;
                                                    return (0, i.jsx)(tz.A, { start: t, end: n });
                                                })(),
                                                W === tr.d.MODAL_V2 && ti(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && ti(),
                                    ],
                                }),
                                null == b || null == U
                                    ? null
                                    : (0, i.jsx)(tw.A, { user: n, guild: b, channel: U, onAction: B, onClose: D }),
                            ],
                        });
                    },
                }),
                W !== tr.d.MODAL &&
                    W !== tr.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ti(),
                            (0, i.jsx)(R.A, {
                                className: ts.AB,
                                userId: n.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    t.stopPropagation(),
                                        B({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, v.openUserProfileModal)({ userId: n.id, tabSection: Q.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(tk.A, { applicationId: a?.id, onAction: B, onClose: D, activity: l }),
            ],
        }),
    });
}
