e.d(n, { A: () => t3 });
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
    g = e(662010),
    E = e(623671),
    N = e(365185),
    C = e(915089),
    I = e(932413),
    j = e(345942),
    S = e(82149),
    y = e(92240),
    O = e(257367),
    h = e(160376),
    P = e(53257),
    v = e(975732),
    L = e(939496),
    R = e(432585),
    U = e(598748),
    b = e(17928),
    M = e(554830),
    D = e(975460),
    G = e(531913),
    V = e(633075),
    Y = e(321191),
    k = e(903209),
    W = e(375708),
    w = e(532786);
function H(t) {
    let n = (0, D.g)(t.activityApplication);
    return null == n ? null : (0, i.jsx)(B, { ...t, widgetApplication: n });
}
function B(t) {
    var n, e;
    let a,
        s = (0, G.A)(t.userId, t.widgetApplication.id),
        o = s.surfaceConfigs[U.m.ACTIVITY_ACCESSORY],
        { hasWidget: c, isLoadingProfile: d } =
            ((n = t.userId),
            (e = t.widgetApplication),
            (a = (0, b.bG)([Y.A], () => Y.A.getUserProfile(n))),
            l.useEffect(() => {
                let t = new AbortController();
                return (0, k.A)(n, void 0, { abortSignal: t.signal }), () => t.abort();
            }, [n]),
            l.useMemo(
                () => ({
                    hasWidget:
                        null != a &&
                        null != a.widgets &&
                        a.widgets.some((t) => t instanceof V.R && t.applicationId === e?.id),
                    isLoadingProfile: null == a,
                }),
                [a, e],
            ));
    return null == o || d || !s.hasIdentity
        ? null
        : (0, i.jsxs)("div", {
              className: r()(w.kL, t.className),
              children: [
                  (0, i.jsx)("div", {
                      className: w.Qs,
                      children: (0, i.jsx)(R.kH, { ...s, surface: U.m.ACTIVITY_ACCESSORY, surfaceConfig: o }),
                  }),
                  c &&
                      (0, i.jsx)(u.D, {
                          "aria-label": W.intl.string(W.t["OBCR+p"]),
                          className: w.NO,
                          onClick: t.onClickViewMore,
                          children: (0, i.jsx)(M.K, { size: "xxs" }),
                      }),
              ],
          });
}
var z = e(55730),
    $ = e(682261),
    F = e(874546),
    X = e(141639),
    Q = e(61330),
    q = e(544441),
    K = e(737393),
    J = e(540185),
    Z = e(289173),
    tt = e(735321),
    tn = e(999291),
    te = e(993401),
    ti = e(495544),
    tl = e(760751),
    ta = e(518477);
function tr(t) {
    let { applicationId: n, onAction: e, onClose: a } = t,
        r = (0, b.bG)([ti.default], () => ti.default.getId()),
        s = (0, tn.Ay)(r, null),
        o = (0, b.bG)([tl.A], () => tl.A.getDetectableGame(n)),
        c = l.useMemo(
            () =>
                !(
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof Z.Yy &&
                            t.type === J.x.CURRENT_GAMES &&
                            t.games?.some((t) => t.applicationId === n),
                    )
                ) && (0, tt.XX)(o),
            [n, s?.widgets, o],
        ),
        u = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, tt.ew)({ widgetType: J.x.CURRENT_GAMES, game: { applicationId: n }, ignoreMaxGames: !0 }),
                    (0, v.openUserProfileModal)({
                        userId: r,
                        tabSection: ta.RP.WIDGETS,
                        scrollTarget: J.x.CURRENT_GAMES,
                    }),
                    a?.();
            },
            [n, r, e, a],
        );
    return c ? (0, i.jsx)(te.FD, { text: W.intl.string(W.t.BjYzmC), onClick: u, fullWidth: !0 }) : null;
}
var ts = e(601007),
    to = e(206828),
    tc = e(308335),
    tu = e(790381),
    td = e(266080),
    tA = e(729937),
    tx = e(123917),
    tp = e(998218),
    tf = e(996988),
    t_ = e(514566);
async function tm(t) {
    let { activity: n, user: e, index: i } = t;
    try {
        let t = await (0, tA.yb)(n, e.id);
        if (t.button_urls.length <= i) return;
        let l = t.button_urls[i];
        if ("string" != typeof l) return;
        let a = tp.A.safeParseWithQuery(l);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, tx.h)({ href: tp.A.format(a), trusted: !1 });
    } catch (t) {}
}
function tT(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let r = (0, d.A)(e);
    return a === tf.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: t_.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      te.FD,
                      {
                          text: r ? W.intl.string(W.t.I6JG46) : t,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  tm({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: t_.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      te.FD,
                      {
                          text: r ? W.intl.string(W.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  tm({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tg = e(990078),
    tE = e(323384),
    tN = e(808666),
    tC = e(687966),
    tI = e(780907),
    tj = e(928550),
    tS = e(102853),
    ty = e(695311);
function tO(t) {
    let { user: n, activity: e, onAction: l, onClose: a } = t,
        { themeType: r } = (0, L.E)(),
        s = (0, ty.A)({ applicationId: e?.application_id, onClose: a }),
        o = (0, tS.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: a }),
        c = (0, tj.d)(e?.application_id);
    if (null == o && null != e && (0, A.A)(e))
        return (0, i.jsx)(te.FD, {
            icon: tE.k,
            text: W.intl.string(W.t.RscU7I),
            fullWidth: r !== tf.d.MODAL_V2,
            onClick: (t) => {
                t.stopPropagation(),
                    null != c ? tI.Ay.launch({ applicationId: c }) : (l?.({ action: "PRESS_PLAY_BUTTON" }), s());
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: x, tooltip: p, isEnabled: f, isEmbedded: _ } = o,
        m = r !== tf.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? t_.Ij : void 0,
        children: (0, i.jsx)(tg.m, {
            text: p,
            asContainer: !f,
            children: (0, i.jsx)(te.FD, {
                icon: _ ? tN.I : tC._,
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
var th = e(141628);
function tP(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: l } = (0, _.Ay)(),
        { themeType: a } = (0, L.E)(),
        r = a === tf.d.MODAL_V2;
    return (0, i.jsx)(te.FD, {
        icon: () => (0, i.jsx)(th.A, {}),
        text: W.intl.string(W.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [l] });
        },
    });
}
var tv = e(626584),
    tL = e(652215);
function tR(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tf.d.MODAL_V2;
    return (0, z.A)(e, tL.jUm.INSTANCE)
        ? (0, i.jsx)(te.FD, {
              text: W.intl.string(W.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  t.stopPropagation(),
                      l?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tv.A("UserActivityActions").log("notify", n.id, e);
              },
          })
        : null;
}
var tU = e(573648),
    tb = e(968309),
    tM = e(30370);
function tD(t) {
    let { platformType: n, icon: e, onAction: l } = t,
        { newestAnalyticsLocation: a } = (0, _.Ay)(),
        { themeType: r } = (0, L.E)(),
        s = r === tf.d.MODAL_V2;
    return (0, b.bG)([tM.A], () => null != tM.A.getAccount(null, n))
        ? null
        : (0, i.jsx)(te.FD, {
              icon: e,
              text: W.intl.formatToPlainString(W.t.XWSHTb, { platform: tU.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tL.fg2.XBOX;
                  l?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tb.A)({ platformType: n, location: a });
              },
          });
}
var tG = e(378570),
    tV = e(790535),
    tY = e(233993),
    tk = e(734057),
    tW = e(576705),
    tw = e(977997);
function tH(t) {
    let { activity: n, onAction: e, onClose: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === tf.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, S.UW)(n) ?? {},
        c = (0, b.bG)([tw.A], () => null != s && tw.A.isInChannel(s), [s]),
        u = (0, b.bG)([tk.A], () => (null != s ? tk.A.getChannel(s) : null), [s]),
        d = (0, b.bG)([tW.A], () => null != u && tW.A.can(tY.Gk, u), [u]);
    return (0, S.Cy)(n) && d && null != o && null != s
        ? (0, i.jsx)(te.FD, {
              text: W.intl.string(W.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: (t) => {
                  t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tV.CH(o, s),
                      (0, tG.iN)(s),
                      l?.();
              },
          })
        : null;
}
var tB = e(908289);
function tz(t) {
    let { activity: n, onAction: e } = t,
        { themeType: l } = (0, L.E)(),
        a = l === tf.d.MODAL_V2,
        r = (0, tB.A)(n);
    return (0, p.A)(n) && null != r
        ? (0, i.jsx)(te.FD, {
              text: W.intl.string(W.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var t$ = e(985629);
function tF(t) {
    let { user: n, activity: e, onAction: l, onClose: a, application: r, containerClassName: s } = t,
        { themeType: o } = (0, L.E)(),
        c = (0, b.bG)([ti.default], () => ti.default.getId() === n.id),
        u = (0, K.JC)(r),
        d = (0, tc.o)(e?.application_id ?? r?.id) || (0, z.A)(e, tL.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: x } = (0, _.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, q.A)(e?.application_id),
        { fetched: T, canStartAuthorization: g, hasAlreadyLinked: E, startAuthorization: N } = (0, to.RD)(r),
        C = o === tf.d.MODAL || o === tf.d.MODAL_V2,
        I = o === tf.d.POPOUT,
        j = o === tf.d.MODAL_V2 ? t_.g6 : t_.Zu,
        y =
            m.length > 0
                ? (0, i.jsx)(ts.A, {
                      distributorCTAConfigs: m,
                      applicationId: e?.application_id ?? "",
                      analyticsLocations: x,
                      buttonVariant: "secondary",
                      fullWidth: o !== tf.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: l,
                      onClose: a,
                  })
                : null,
        O = (() => {
            if (c)
                return I && e?.type === tL.$pd.PLAYING && r?.id != null
                    ? (0, i.jsx)(tr, { applicationId: r.id, onAction: l, onClose: a })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return null != y
                    ? (0, i.jsxs)("div", {
                          className: j,
                          children: [(0, i.jsx)(tT, { user: n, activity: e, onAction: l }), y],
                      })
                    : (0, i.jsx)(tT, { user: n, activity: e, onAction: l });
            if (!d && u && null != r && !C) {
                let t = (0, i.jsx)(t$.A, { application: r, onAction: l, onClose: a, analyticsLocations: x });
                return null != y ? (0, i.jsxs)("div", { className: j, children: [t, y] }) : t;
            }
            if ((0, A.A)(e) || ((0, F.Ay)(e) && d)) {
                let t = (0, i.jsx)(tO, { user: n, activity: e, onAction: l, onClose: a });
                return null != y ? (0, i.jsxs)("div", { className: j, children: [t, y] }) : t;
            }
            if (T && g && !E) {
                let t = (0, i.jsx)(tP, { startAuthorization: N, onAction: l });
                return null != y ? (0, i.jsxs)("div", { className: j, children: [t, y] }) : t;
            }
            if (null != y) return y;
            if (!(0, $.A)(e)) {
                if ((0, Q.A)(e))
                    return (0, i.jsx)(tD, { platformType: tL.fg2.XBOX, icon: () => (0, i.jsx)(td.A, {}), onAction: l });
                if ((0, X.A)(e))
                    return (0, i.jsx)(tD, {
                        platformType: tL.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(tu.A, {}),
                        onAction: l,
                    });
            }
            return (0, p.A)(e)
                ? (0, i.jsx)(tz, { activity: e, onAction: l })
                : (0, F.Ay)(e)
                  ? (0, i.jsx)(tO, { user: n, activity: e, onAction: l, onClose: a })
                  : (0, z.A)(e, tL.jUm.INSTANCE)
                    ? (0, i.jsx)(tR, { user: n, activity: e, onAction: l })
                    : (0, S.Cy)(e)
                      ? (0, i.jsx)(tH, { activity: e, onAction: l, onClose: a })
                      : null;
        })();
    return null == O ? null : (0, i.jsx)("div", { className: s, children: O });
}
var tX = e(282197),
    tQ = e(624951),
    tq = e(584904),
    tK = e(351638),
    tJ = e(531648),
    tZ = e(910607),
    t0 = e(753713),
    t9 = e(269587),
    t7 = e(409626),
    t6 = e(692969),
    t8 = e(534465),
    t1 = e(360469);
function t3(t) {
    let {
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            voiceGuild: R,
            voiceChannel: U,
            className: b,
            onClose: M,
            appContext: D,
        } = t,
        G = (0, C.GV)(),
        V = (0, C.GV)(),
        { analyticsLocations: Y } = (0, _.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: k } = (0, L.E)(),
        w = (0, N.A)({ activity: l, user: n }),
        B = (0, y.A)({ display: "live", user: n, activity: l, entry: w, analyticsLocations: Y }),
        z = (0, O.A)({ userId: n.id, onAction: B }),
        $ = (0, m.Ay)(U),
        F = (0, h.A)(l),
        X = null != F.text && "" !== F.text,
        { largeImage: Q, smallImage: q } = (0, T.XN)(l, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: n, user: e, currentUser: i, activity: l, application: a, entry: r, onClose: s } = t,
                o = (0, t6.A)({
                    location: n,
                    source: t7.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, t8.UE)({ user: e, activity: l, entry: r }),
                }),
                c = (0, ty.A)({ applicationId: a?.id, onClose: s }),
                u = (0, A.A)(l);
            return u && null != a
                ? c
                : !u && (0, x.A)(l)
                  ? o
                  : (0, d.A)(l) && e.id !== i.id
                    ? () => tm({ activity: l, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            entry: w,
            onClose: M,
        });
    function J() {
        return (0, p.A)(l) && null != U
            ? (0, i.jsxs)("div", {
                  className: t_.FH,
                  children: [
                      (0, i.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: t_.Ow }),
                      (0, i.jsx)(tJ.Q, { variant: "heading-sm/semibold", text: $, id: G }),
                  ],
              })
            : (0, x.A)(l) || (0, S.Cy)(l)
              ? (0, i.jsx)(tJ.Q, { variant: "heading-sm/semibold", text: l.name, id: G })
              : null != l.details
                ? (0, i.jsx)(g.O, {
                      href: l.details_url,
                      children: (0, i.jsx)(tJ.Q, { variant: "heading-sm/semibold", text: l.details, id: G }),
                  })
                : (0, i.jsx)(tJ.Q, { variant: "heading-sm/semibold", text: l.name, id: G });
    }
    let Z = () =>
        l.type === tL.$pd.HANG_STATUS
            ? null
            : (0, p.A)(l) && null != R
              ? (0, i.jsx)(tJ.A, {
                    variant: "text-xs/normal",
                    text: W.intl.formatToPlainString(W.t["hq/Qze"], { guildName: R.name }),
                    onClick: () => {
                        (0, j.u)(R.id), B({ action: "OPEN_VOICE_GUILD" }), M?.();
                    },
                })
              : (0, x.A)(l)
                ? (0, i.jsx)(g.O, {
                      href: l.details_url,
                      children: (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l.details }),
                  })
                : (0, S.Cy)(l)
                  ? (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l?.assets?.small_text })
                  : (0, i.jsx)(g.O, {
                        href: l.state_url,
                        children: (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l.state }),
                    });
    function tt() {
        if (l.type === tL.$pd.WATCHING) return null;
        if ((0, x.A)(l))
            return l.party?.size == null && l.application_id === t1.I4
                ? (0, i.jsxs)("div", {
                      className: t_.CI,
                      children: [
                          (0, i.jsx)(g.O, {
                              href: l.state_url,
                              children: (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l.state }),
                          }),
                          (0, i.jsx)(tJ.A, {
                              variant: "text-xs/normal",
                              text: W.intl.formatToPlainString(W.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(l) && l.party?.size != null && l.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: t_.CI,
                        children: [
                            (0, i.jsx)(g.O, {
                                href: l.state_url,
                                children: (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l.state }),
                            }),
                            (0, i.jsx)(tJ.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === l.party.size[1]
                                        ? W.intl.formatToPlainString(W.t.IM4J4e, { count: l.party.size[0] })
                                        : W.intl.formatToPlainString(W.t["u//9By"], {
                                              count: l.party.size[0],
                                              max: l.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == l.party
                    ? (0, i.jsx)(g.O, {
                          href: l.state_url,
                          children: (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: l.state }),
                      })
                    : null;
        if ((0, S.Cy)(l) && l.party?.size != null && l.party?.size.length >= 2) {
            let t = W.intl.formatToPlainString(W.t["JC/3xw"], {
                numSpeakers: l.party?.size[0],
                numListeners: l.party?.size[1] - l.party?.size[0],
            });
            return (0, i.jsx)(tJ.A, { variant: "text-xs/normal", text: t });
        }
        return l.assets?.large_text != null
            ? (0, i.jsx)(g.O, {
                  href: l.assets?.large_url,
                  children: (0, i.jsx)(tJ.A, { text: l.assets?.large_text, variant: "text-xs/normal" }),
              })
            : null;
    }
    function tn() {
        return (0, i.jsx)(tF, {
            containerClassName: t_.o1,
            activity: l,
            user: n,
            onAction: B,
            onClose: M,
            application: a,
        });
    }
    return (0, i.jsx)(_.f5, {
        value: Y,
        children: (0, i.jsxs)(tq.A, {
            ref: z,
            className: r()(t_.Nr, b),
            onAction: B,
            onClose: M,
            "aria-labelledby": X ? `${V} ${G}` : G,
            children: [
                (0, i.jsx)(tK.A, {
                    textId: V,
                    ...F,
                    contextMenu: (0, i.jsx)(t9.A, {
                        display: "live",
                        user: n,
                        activity: l,
                        entry: w,
                        onClose: M,
                        appContext: D,
                    }),
                }),
                (0, i.jsx)(I.A, {
                    applicationId: a?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, a;
                        return (0, i.jsxs)("div", {
                            className: t_.rf,
                            ref: t,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: t_.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, d.A)(l) ? "crunchyroll" : "default"),
                                            (a = k === tf.d.MODAL_V2 ? E.w.SIZE_100 : E.w.SIZE_60),
                                            null == K
                                                ? (0, i.jsx)(E.d, {
                                                      image: Q,
                                                      smallImage: q,
                                                      size: a,
                                                      aspectRatio: e,
                                                      className: t_.Sl,
                                                  })
                                                : (0, i.jsx)(E.d, {
                                                      image: Q,
                                                      smallImage: q,
                                                      size: a,
                                                      className: t_.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          B({ action: "PRESS_IMAGE" }), K(t);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: t_.zH,
                                            children: [
                                                null == K
                                                    ? (0, i.jsxs)("div", { children: [J(), Z(), tt()] })
                                                    : (0, i.jsxs)(u.D, {
                                                          className: t_.sd,
                                                          onClick: (t) => {
                                                              B({ action: "PRESS_TEXT" }), K(t);
                                                          },
                                                          children: [J(), Z(), tt()],
                                                      }),
                                                !n.bot && (0, i.jsx)(tX.A, { user: n, activity: l, className: t_.jp }),
                                                (() => {
                                                    if (!(0, P.A)(l)) return null;
                                                    let { start: t, end: n } = l.timestamps;
                                                    return (0, i.jsx)(t0.A, { start: t, end: n });
                                                })(),
                                                k === tf.d.MODAL_V2 && tn(),
                                            ],
                                        }),
                                        k === tf.d.MODAL && tn(),
                                    ],
                                }),
                                null == R || null == U
                                    ? null
                                    : (0, i.jsx)(tZ.A, { user: n, guild: R, channel: U, onAction: B, onClose: M }),
                            ],
                        });
                    },
                }),
                k !== tf.d.MODAL &&
                    k !== tf.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            tn(),
                            (0, i.jsx)(H, {
                                className: t_.AB,
                                userId: n.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    t.stopPropagation(),
                                        B({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        M?.(),
                                        (0, v.openUserProfileModal)({ userId: n.id, tabSection: ta.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(tQ.A, { applicationId: a?.id, onAction: B, onClose: M, activity: l }),
            ],
        }),
    });
}
