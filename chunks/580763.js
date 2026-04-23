e.d(n, { A: () => tq });
var i = e(627968),
    l = e(64700),
    r = e(503698),
    a = e.n(r),
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
    g = e(939341),
    E = e(662010),
    T = e(623671),
    N = e(365185),
    C = e(915089),
    I = e(932413),
    S = e(345942),
    O = e(82149),
    h = e(92240),
    j = e(257367),
    y = e(248302),
    P = e(53257),
    v = e(975732),
    L = e(939496),
    R = e(964195),
    b = e(17928),
    D = e(833349),
    U = e(682261),
    M = e(874546),
    G = e(141639),
    V = e(61330),
    Y = e(709309),
    k = e(737393),
    W = e(540185),
    B = e(289173),
    w = e(735321),
    F = e(999291),
    H = e(993401),
    z = e(495544),
    X = e(760751),
    $ = e(518477),
    Q = e(985018);
function q(t) {
    let { applicationId: n, onAction: e, onClose: r } = t,
        a = (0, b.bG)([z.default], () => z.default.getId()),
        s = (0, F.Ay)(a, null),
        o = (0, b.bG)([X.A], () => X.A.getDetectableGame(n)),
        c = l.useMemo(
            () =>
                !(
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof B.Yy &&
                            t.type === W.x.CURRENT_GAMES &&
                            t.games?.some((t) => t.applicationId === n),
                    )
                ) && (0, w.XX)(o),
            [n, s?.widgets, o],
        ),
        u = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, w.ew)({ widgetType: W.x.CURRENT_GAMES, game: { applicationId: n }, ignoreMaxGames: !0 }),
                    (0, v.openUserProfileModal)({
                        userId: a,
                        tabSection: $.RP.WIDGETS,
                        scrollTarget: W.x.CURRENT_GAMES,
                    }),
                    r?.();
            },
            [n, a, e, r],
        );
    return c ? (0, i.jsx)(H.FD, { text: Q.intl.string(Q.t.BjYzmC), onClick: u, fullWidth: !0 }) : null;
}
var J = e(913948),
    K = e(46225),
    Z = e(308335),
    tt = e(790381),
    tn = e(266080),
    te = e(729937),
    ti = e(76843),
    tl = e(998218),
    tr = e(996988),
    ta = e(514566);
async function ts(t) {
    let { activity: n, user: e, index: i } = t;
    try {
        let t = await (0, te.yb)(n, e.id);
        if (t.button_urls.length <= i) return;
        let l = t.button_urls[i];
        if ("string" != typeof l) return;
        let r = tl.A.safeParseWithQuery(l);
        if (r?.protocol == null || r?.hostname == null) return;
        (0, ti.h)({ href: tl.A.format(r), trusted: !1 });
    } catch (t) {}
}
function to(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: r } = (0, L.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let a = (0, d.A)(e);
    return r === tr.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: ta.fO,
              children: e.buttons.map((t, r) =>
                  (0, i.jsx)(
                      H.FD,
                      {
                          text: a ? Q.intl.string(Q.t.I6JG46) : t,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: r });
                          },
                      },
                      r,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: ta.fO,
              children: e.buttons.map((t, r) =>
                  (0, i.jsx)(
                      H.FD,
                      {
                          text: a ? Q.intl.string(Q.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: r });
                          },
                      },
                      r,
                  ),
              ),
          });
}
var tc = e(990078),
    tu = e(323384),
    td = e(808666),
    tA = e(687966),
    tx = e(780907),
    tp = e(928550),
    tf = e(594262),
    t_ = e(695311);
function tm(t) {
    let { user: n, activity: e, onAction: l, onClose: r } = t,
        { themeType: a } = (0, L.E)(),
        s = (0, t_.A)({ applicationId: e?.application_id, onClose: r }),
        o = (0, tf.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: r }),
        c = (0, tp.d)(e?.application_id);
    if (null == o && null != e && (0, A.A)(e))
        return (0, i.jsx)(H.FD, {
            icon: tu.k,
            text: Q.intl.string(Q.t.RscU7I),
            fullWidth: a !== tr.d.MODAL_V2,
            onClick: (t) => {
                t.stopPropagation(),
                    null != c ? tx.Ay.launch({ applicationId: c }) : (l?.({ action: "PRESS_PLAY_BUTTON" }), s());
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: x, tooltip: p, isEnabled: f, isEmbedded: _ } = o,
        m = a !== tr.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? ta.Ij : void 0,
        children: (0, i.jsx)(tc.m, {
            text: p,
            asContainer: !f,
            children: (0, i.jsx)(H.FD, {
                icon: _ ? td.I : tA._,
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
var tg = e(141628);
function tE(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: l } = (0, _.Ay)(),
        { themeType: r } = (0, L.E)(),
        a = r === tr.d.MODAL_V2;
    return (0, i.jsx)(H.FD, {
        icon: () => (0, i.jsx)(tg.A, {}),
        text: Q.intl.string(Q.t.sbdnpw),
        fullWidth: !a,
        onClick: (t) => {
            t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [l] });
        },
    });
}
var tT = e(626584),
    tN = e(652215);
function tC(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: r } = (0, L.E)(),
        a = r === tr.d.MODAL_V2;
    return (0, D.A)(e, tN.jUm.INSTANCE)
        ? (0, i.jsx)(H.FD, {
              text: Q.intl.string(Q.t.vwl1PK),
              fullWidth: !a,
              onClick: (t) => {
                  t.stopPropagation(),
                      l?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tT.A("UserActivityActions").log("notify", n.id, e);
              },
          })
        : null;
}
var tI = e(573648),
    tS = e(773952),
    tO = e(30370);
function th(t) {
    let { platformType: n, icon: e, onAction: l } = t,
        { newestAnalyticsLocation: r } = (0, _.Ay)(),
        { themeType: a } = (0, L.E)(),
        s = a === tr.d.MODAL_V2;
    return (0, b.bG)([tO.A], () => null != tO.A.getAccount(null, n))
        ? null
        : (0, i.jsx)(H.FD, {
              icon: e,
              text: Q.intl.formatToPlainString(Q.t.XWSHTb, { platform: tI.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tN.fg2.XBOX;
                  l?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tS.A)({ platformType: n, location: r });
              },
          });
}
var tj = e(378570),
    ty = e(790535),
    tP = e(233993),
    tv = e(734057),
    tL = e(576705),
    tR = e(977997);
function tb(t) {
    let { activity: n, onAction: e, onClose: l } = t,
        { themeType: r } = (0, L.E)(),
        a = r === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, O.UW)(n) ?? {},
        c = (0, b.bG)([tR.A], () => null != s && tR.A.isInChannel(s), [s]),
        u = (0, b.bG)([tv.A], () => (null != s ? tv.A.getChannel(s) : null), [s]),
        d = (0, b.bG)([tL.A], () => null != u && tL.A.can(tP.Gk, u), [u]);
    return (0, O.Cy)(n) && d && null != o && null != s
        ? (0, i.jsx)(H.FD, {
              text: Q.intl.string(Q.t.ZYO5OK),
              fullWidth: !a,
              disabled: c,
              onClick: (t) => {
                  t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      ty.CH(o, s),
                      (0, tj.iN)(s),
                      l?.();
              },
          })
        : null;
}
var tD = e(908289);
function tU(t) {
    let { activity: n, onAction: e } = t,
        { themeType: l } = (0, L.E)(),
        r = l === tr.d.MODAL_V2,
        a = (0, tD.A)(n);
    return (0, p.A)(n) && null != a
        ? (0, i.jsx)(H.FD, {
              text: Q.intl.string(Q.t.I6JG46),
              fullWidth: !r,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(a)),
          })
        : null;
}
var tM = e(985629);
function tG(t) {
    let { user: n, activity: e, onAction: l, onClose: r, application: a, containerClassName: s } = t,
        { themeType: o } = (0, L.E)(),
        c = (0, b.bG)([z.default], () => z.default.getId() === n.id),
        u = (0, k.J)(a),
        d = (0, Z.o)(e?.application_id ?? a?.id),
        { analyticsLocations: x } = (0, _.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, Y.A)("user_profile_activity_buttons", e?.application_id),
        { fetched: g, canStartAuthorization: E, hasAlreadyLinked: T, startAuthorization: N } = (0, K.RD)(a),
        C = o === tr.d.MODAL || o === tr.d.MODAL_V2,
        I = o === tr.d.POPOUT,
        S = (() => {
            if (c)
                return I && e?.type === tN.$pd.PLAYING && a?.id != null
                    ? (0, i.jsx)(q, { applicationId: a.id, onAction: l, onClose: r })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return (0, i.jsx)(to, { user: n, activity: e, onAction: l });
            if (!d && u && null != a && !C)
                return (0, i.jsx)(tM.A, { application: a, onAction: l, onClose: r, analyticsLocations: x });
            if ((0, A.A)(e) || ((0, M.Ay)(e) && d))
                return (0, i.jsx)(tm, { user: n, activity: e, onAction: l, onClose: r });
            if (g && E && !T) return (0, i.jsx)(tE, { startAuthorization: N, onAction: l });
            if (m.length > 0)
                return (0, i.jsx)(J.A, {
                    distributorCTAConfigs: m,
                    fullWidth: o !== tr.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: l,
                    onClose: r,
                });
            if (!(0, U.A)(e)) {
                if ((0, V.A)(e))
                    return (0, i.jsx)(th, { platformType: tN.fg2.XBOX, icon: () => (0, i.jsx)(tn.A, {}), onAction: l });
                if ((0, G.A)(e))
                    return (0, i.jsx)(th, {
                        platformType: tN.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(tt.A, {}),
                        onAction: l,
                    });
            }
            return (0, p.A)(e)
                ? (0, i.jsx)(tU, { activity: e, onAction: l })
                : (0, M._C)(e)
                  ? (0, i.jsx)(tm, { user: n, activity: e, onAction: l, onClose: r })
                  : (0, D.A)(e, tN.jUm.INSTANCE)
                    ? (0, i.jsx)(tC, { user: n, activity: e, onAction: l })
                    : (0, O.Cy)(e)
                      ? (0, i.jsx)(tb, { activity: e, onAction: l, onClose: r })
                      : null;
        })();
    return null == S ? null : (0, i.jsx)("div", { className: s, children: S });
}
var tV = e(282197),
    tY = e(624951),
    tk = e(584904),
    tW = e(351638),
    tB = e(531648),
    tw = e(910607),
    tF = e(753713),
    tH = e(269587),
    tz = e(409626),
    tX = e(692969),
    t$ = e(534465),
    tQ = e(360469);
function tq(t) {
    let {
            user: n,
            currentUser: e,
            activity: l,
            application: r,
            voiceGuild: b,
            voiceChannel: D,
            className: U,
            onClose: M,
            appContext: G,
        } = t,
        V = (0, C.GV)(),
        Y = (0, C.GV)(),
        { analyticsLocations: k } = (0, _.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, L.E)(),
        B = (0, N.A)({ activity: l, user: n }),
        w = (0, h.A)({ display: "live", user: n, activity: l, entry: B, analyticsLocations: k }),
        F = (0, j.A)({ userId: n.id, onAction: w }),
        H = (0, m.Ay)(D),
        z = (0, y.A)(l),
        X = null != z.text && "" !== z.text,
        { largeImage: q, smallImage: J } = (0, g.XN)(l, r),
        K = (function (t) {
            let { location: n, user: e, currentUser: i, activity: l, application: r, entry: a, onClose: s } = t,
                o = (0, tX.A)({
                    location: n,
                    source: tz.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, t$.UE)({ user: e, activity: l, entry: a }),
                }),
                c = (0, t_.A)({ applicationId: r?.id, onClose: s }),
                u = (0, A.A)(l);
            return u && null != r
                ? c
                : !u && (0, x.A)(l)
                  ? o
                  : (0, d.A)(l) && e.id !== i.id
                    ? () => ts({ activity: l, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: r,
            entry: B,
            onClose: M,
        }),
        Z = () =>
            (0, p.A)(l) && null != D
                ? (0, i.jsxs)("div", {
                      className: ta.FH,
                      children: [
                          (0, i.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: ta.Ow }),
                          (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: H, id: V }),
                      ],
                  })
                : (0, x.A)(l) || (0, O.Cy)(l)
                  ? (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V })
                  : null != l.details
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.details, id: V }),
                      })
                    : (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V }),
        tt = () =>
            l.type === tN.$pd.HANG_STATUS
                ? null
                : (0, p.A)(l) && null != b
                  ? (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: Q.intl.formatToPlainString(Q.t["hq/Qze"], { guildName: b.name }),
                        onClick: () => {
                            (0, S.u)(b.id), w({ action: "OPEN_VOICE_GUILD" }), M?.();
                        },
                    })
                  : (0, x.A)(l)
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.details }),
                      })
                    : (0, O.Cy)(l)
                      ? (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l?.assets?.small_text })
                      : (0, i.jsx)(E.O, {
                            href: l.state_url,
                            children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                        }),
        tn = () => {
            if (l.type === tN.$pd.WATCHING) return null;
            if ((0, x.A)(l)) return te();
            if ((0, O.Cy)(l) && l.party?.size != null && l.party?.size.length >= 2) {
                let t = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
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
            l.party?.size == null && l.application_id === tQ.I4
                ? (0, i.jsxs)("div", {
                      className: ta.CI,
                      children: [
                          (0, i.jsx)(E.O, {
                              href: l.state_url,
                              children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                          }),
                          (0, i.jsx)(tB.A, {
                              variant: "text-xs/normal",
                              text: Q.intl.formatToPlainString(Q.t["u//9By"], {
                                  count: "0",
                                  max: r?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(l) && l.party?.size != null && l.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: ta.CI,
                        children: [
                            (0, i.jsx)(E.O, {
                                href: l.state_url,
                                children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                            }),
                            (0, i.jsx)(tB.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === l.party.size[1]
                                        ? Q.intl.formatToPlainString(Q.t.IM4J4e, { count: l.party.size[0] })
                                        : Q.intl.formatToPlainString(Q.t["u//9By"], {
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
            (0, i.jsx)(tG, {
                containerClassName: ta.o1,
                activity: l,
                user: n,
                onAction: w,
                onClose: M,
                application: r,
            });
    return (0, i.jsx)(_.f5, {
        value: k,
        children: (0, i.jsxs)(tk.A, {
            ref: F,
            className: a()(ta.Nr, U),
            onAction: w,
            onClose: M,
            "aria-labelledby": X ? `${Y} ${V}` : V,
            children: [
                (0, i.jsx)(tW.A, {
                    textId: Y,
                    ...z,
                    contextMenu: (0, i.jsx)(tH.A, {
                        display: "live",
                        user: n,
                        activity: l,
                        entry: B,
                        onClose: M,
                        appContext: G,
                    }),
                }),
                (0, i.jsx)(I.A, {
                    applicationId: r?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, r;
                        return (0, i.jsxs)("div", {
                            className: ta.rf,
                            ref: t,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ta.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, d.A)(l) ? "crunchyroll" : "default"),
                                            (r = W === tr.d.MODAL_V2 ? T.w.SIZE_100 : T.w.SIZE_60),
                                            null == K
                                                ? (0, i.jsx)(T.d, {
                                                      image: q,
                                                      smallImage: J,
                                                      size: r,
                                                      aspectRatio: e,
                                                      className: ta.Sl,
                                                  })
                                                : (0, i.jsx)(T.d, {
                                                      image: q,
                                                      smallImage: J,
                                                      size: r,
                                                      className: ta.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          w({ action: "PRESS_IMAGE" }), K(t);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: ta.zH,
                                            children: [
                                                null == K
                                                    ? (0, i.jsxs)("div", { children: [Z(), tt(), tn()] })
                                                    : (0, i.jsxs)(u.D, {
                                                          className: ta.sd,
                                                          onClick: (t) => {
                                                              w({ action: "PRESS_TEXT" }), K(t);
                                                          },
                                                          children: [Z(), tt(), tn()],
                                                      }),
                                                !n.bot && (0, i.jsx)(tV.A, { user: n, activity: l, className: ta.jp }),
                                                (() => {
                                                    if (!(0, P.A)(l)) return null;
                                                    let { start: t, end: n } = l.timestamps;
                                                    return (0, i.jsx)(tF.A, { start: t, end: n });
                                                })(),
                                                W === tr.d.MODAL_V2 && ti(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && ti(),
                                    ],
                                }),
                                null == b || null == D
                                    ? null
                                    : (0, i.jsx)(tw.A, { user: n, guild: b, channel: D, onAction: w, onClose: M }),
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
                                className: ta.AB,
                                userId: n.id,
                                activityApplication: r,
                                onClickViewMore: (t) => {
                                    t.stopPropagation(),
                                        w({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        M?.(),
                                        (0, v.openUserProfileModal)({ userId: n.id, tabSection: $.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(tY.A, { applicationId: r?.id, onAction: w, onClose: M, activity: l }),
            ],
        }),
    });
}
