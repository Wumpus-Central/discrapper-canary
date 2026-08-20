n.d(t, { V: () => en, A: () => ei }), n(321073);
var i,
    l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(379834),
    c = n(738678),
    d = n(27989),
    u = n(17928),
    m = n(646270),
    h = n(610509),
    g = n(22363),
    p = n(802516),
    A = n(31300),
    x = n(834730),
    f = n(687966),
    E = n(825860),
    I = n(141628),
    C = n(308368),
    _ = n(183208),
    v = n(729937),
    N = n(572211),
    j = n(354287),
    T = n(693879),
    S = n(583846),
    y = n(207371),
    b = n(205184),
    R = n(689168),
    L = n(403362),
    M = n(456060),
    k = n(723702),
    O = n(850670),
    P = n(206589),
    D = n(125017);
n(938796);
var U = n(665260),
    G = n(574381),
    w = n(134861),
    H = n(528767),
    V = n(182892),
    F = n(652215),
    B = n(55730),
    z = n(287613),
    J = n(659051),
    Y = n(702631),
    K = n(375708),
    W = n(946255),
    X =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
F.yTV.DESKTOP,
    F.yTV.ANDROID,
    F.yTV.IOS,
    F.yTV.XBOX,
    F.yTV.PS4,
    F.yTV.PS5,
    F.yTV.SAMSUNG,
    F.yTV.EMBEDDED,
    F.yTV.META_QUEST;
let Z = [];
function q(e) {
    let { width: t, height: n, color: i } = e;
    return (0, l.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: n,
        viewBox: "0 0 15 9",
        fill: "none",
        children: [
            (0, l.jsx)("path", {
                fill: i,
                d: "M14.41 7.85a6.97 6.97 0 0 0-1.983-3.898 7.003 7.003 0 0 0-1.234-.98l.008-.013.421-.727.412-.71.295-.51a.64.64 0 0 0-1.105-.643l-.296.51-.411.71-.422.728-.046.08-.063-.025a6.969 6.969 0 0 0-2.562-.457 6.972 6.972 0 0 0-2.47.477l-.042-.075-.421-.727-.412-.71-.296-.51a.638.638 0 1 0-1.105.642l.295.51.412.71.421.728.003.006a7.027 7.027 0 0 0-2.52 2.718 6.972 6.972 0 0 0-.748 2.473h13.908a7.015 7.015 0 0 0-.04-.307Z",
            }),
            (0, l.jsx)("path", {
                fill: "#202124",
                d: "M11.113 6.232c.278-.185.319-.614.09-.958-.228-.344-.639-.472-.917-.286-.278.185-.319.614-.09.957.228.344.639.472.917.287Zm-6.306-.286c.228-.343.188-.772-.09-.957-.279-.186-.69-.057-.918.286-.228.344-.188.773.09.958.279.185.69.057.918-.287Z",
            }),
        ],
    });
}
var Q = n(878831),
    $ = n(768349),
    ee = n(657167);
function et(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        a = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return s.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            s = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? Z
                            : (l.has(F.yTV.ANDROID) && l.has(F.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(F.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(F.yTV.IOS) && s.push("ios"),
                              (l.has(F.yTV.PS4) || l.has(F.yTV.PS5)) && s.push("playstation"),
                              l.has(F.yTV.XBOX) && s.push("xbox"),
                              l.has(F.yTV.DESKTOP) && s.push("desktop"),
                              l.has(F.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: F.yTV.DESKTOP, isGameLaunchable: i }),
        r = s.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case X.MOBILE:
                                return (0, l.jsx)(m.u, { size: "xxs", color: "currentColor" }, e);
                            case X.ANDROID:
                                return (0, l.jsx)(q, { width: d.E.xxs, height: d.E.xxs, color: "currentColor" }, e);
                            case X.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" }, e);
                            case X.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" }, e);
                            case X.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" }, e);
                            case X.VR:
                                return (0, l.jsx)(c.G, { size: "xxs", color: "currentColor" }, e);
                            case X.DESKTOP:
                                return (0, l.jsx)(A.k, { size: "xxs", color: "currentColor" }, e);
                            default:
                                return null;
                        }
                    })
                    .filter(L.Vq),
            [a],
        );
    if (!(null != n || r.length > 0)) return null;
    let o =
        null != n
            ? (function (e) {
                  switch (e) {
                      case F.yTV.DESKTOP:
                          return K.intl.string(K.t.aqN8U9);
                      case F.yTV.IOS:
                          return K.intl.string(K.t.CyQ5ia);
                      case F.yTV.ANDROID:
                          return K.intl.string(K.t.fMs6uW);
                      case F.yTV.XBOX:
                          return K.intl.string(K.t.o0hjdt);
                      case F.yTV.PS4:
                      case F.yTV.PS5:
                          return K.intl.string(K.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : K.intl.string(K.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: ee.qr,
        children: [
            (0, l.jsx)("div", {
                className: ee.E6,
                children: r.map((e, t) => (0, l.jsx)("div", { className: ee.F2, children: e }, t)),
            }),
            (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", className: ee.kB, children: o }),
        ],
    });
}
function en(e) {
    let { activity: t, className: n } = e,
        i = t?.timestamps?.start ?? t?.created_at;
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: r()(ee.Ym, n),
              children: [
                  (0, l.jsx)(f.GameControllerIcon, { size: "xxs", color: "currentColor" }),
                  (0, l.jsx)(T.z, {
                      entry: { start: i, end: t?.timestamps?.end },
                      textColor: "currentColor",
                      textTabularNumbers: !1,
                  }),
              ],
          });
}
function ei(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: a,
            header: r,
            currentUserId: c,
            launchableAppId: d,
            isEmbeddedApplication: m,
            tryWithGdnAction: h,
            staticBannerSrc: g,
            onClickContent: p,
            iconSrc: A,
            onView: f,
            presenceActivity: T,
            currentUserPresenceActivity: L,
            hideParty: X,
            hideBanner: Z = !1,
            partyStatusElement: q,
            analyticsLocations: ei,
            showAuthButton: el,
            canPromptAuth: es,
            startAuthorization: ea,
            accountLinkButtonRef: er,
            renderAccountLinkUpsell: eo,
        } = e,
        ec = (0, O.v)(t),
        ed = (0, b.s)(n.id),
        eu = s.useMemo(
            () =>
                ed.some((e) => (0, S.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.FireIcon, { size: "xxs", color: "currentColor" }),
                              K.intl.string(K.t.TsWCdW),
                          ],
                      })
                    : null,
            [ed],
        ),
        em = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: ee.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ec ? (0, M.YC)(t, i, a, c, !1) : (0, l.jsx)(en, { activity: T }), ec ? null : eu],
                }),
            [ec, t, i, a, c, T, eu],
        ),
        eh = s.useMemo(() => {
            let e = T?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [T?.details]),
        eg = s.useMemo(
            () => (0, l.jsxs)("div", { className: ee.pq, children: [eh, em, X || ec ? null : q] }),
            [em, X, ec, q, eh],
        ),
        ep = !!d,
        eA = (0, y.x)(n),
        { canJoin: ex, remoteJoinPlatform: ef } = (function (e) {
            let {
                presenceActivity: t,
                currentUserPresenceActivity: n,
                currentUserId: i,
                message: l,
                application: s,
                isEmbeddedApplication: a,
                isFrameApplication: r,
                isGameLaunchable: o,
            } = e;
            if (l.author.id === i || !(0, J.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let c = (0, D._)(t);
            if (!(0, z.A)(c) || (0, Y.U)(c) || (0, P.w)(n, t) || (0, O.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (a && r) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === F.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, U.Lt)(e.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = H.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, V.e)(n) ||
                        (null != n.application_id &&
                            (w.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, G.m0)() ? t === F.yTV.ANDROID : !!(0, G.un)() && t === F.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, U.Lt)(n.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, B.A)(t, F.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, k.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: T,
            currentUserPresenceActivity: L,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: m,
            isFrameApplication: eA,
            isGameLaunchable: ep,
        }),
        eE = !(
            null == T ||
            !(0, J.A)(T, t, n.id) ||
            !(0, B.A)(T, F.jUm.SYNC) ||
            !k.isPlatformEmbedded ||
            (0, P.w)(L, T)
        ),
        eI = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, J.A)(e, t, n.id) ||
                t.activity?.type !== F.xL.JOIN_REQUEST ||
                !(0, B.A)(e, F.jUm.JOIN)
            )
                return !1;
            let l = (0, D._)(e);
            return !(!(0, z.A)(l) || (0, Y.U)(l));
        })(T, t, n, c),
        eC = (0, P.w)(L, T),
        e_ = null != T && (0, B.A)(T, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ev = (0, u.bG)(
            [R.A],
            () => null != T && null != T.application_id && R.A.getState(T.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        { actions: eN, hasAccountLinkButton: ej } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ex
                ? (e = {
                      label: K.intl.string(K.t.VJlc0S),
                      trackingArea: j.kY.JOIN,
                      submitting: ev,
                      onClick: () => {
                          _.Ay.join({
                              userId: t.author.id,
                              sessionId: T.session_id,
                              applicationId: T.application_id,
                              channelId: a.id,
                              messageId: t.id,
                              source: F.ThZ.MESSAGE_EMBED,
                              analyticsLocations: ei,
                              embedded: (0, B.A)(T, F.jUm.EMBEDDED),
                              remotePartyId: null != ef ? T.party?.id : void 0,
                          }),
                              (0, W.A)({
                                  type: F.UqL.JOIN,
                                  source: F.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  applicationId: T.application_id,
                                  partyId: T.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: ei,
                                  remoteJoinPlatform: ef,
                              });
                      },
                  })
                : e_ && es
                  ? ((e = {
                        label: K.intl.string(K.t.lw71Nf),
                        trackingArea: j.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            ea({ analyticsLocations: ei });
                        },
                    }),
                    (n = !1))
                  : eE
                    ? ((e = {
                          label: K.intl.string(K.t.VJlc0S),
                          trackingArea: j.kY.SYNC,
                          onClick: () => {
                              null != T && v.OH(T, t.author.id);
                          },
                      }),
                      (n = !1))
                    : eI
                      ? (e = {
                            label: K.intl.string(K.t["hC/Zey"]),
                            trackingArea: j.kY.INVITE,
                            onClick: () => {
                                null != T &&
                                    C.A.sendActivityInvite({
                                        type: F.xL.JOIN,
                                        channelId: a.id,
                                        activity: T,
                                        location: F.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === c,
                            disabledReason: t.author.id === c ? K.intl.string(K.t.IBl8ID) : void 0,
                        })
                      : eC
                        ? (e = {
                              label: K.intl.string(K.t.KC26NR),
                              trackingArea: j.kY.PLAY,
                              onClick: () => {},
                              disabled: !0,
                          })
                        : null != h && ((e = h), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    el &&
                        n &&
                        (l.push({
                            label: K.intl.string(K.t.lw71Nf),
                            trackingArea: j.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ea({ analyticsLocations: ei });
                            },
                            icon: I.A,
                            iconButton: !0,
                            buttonRef: er,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ex, eE, eI, eC, h, t.author.id, t.id, T, a.id, a.guild_id, ei, ef, c, ev, el, ea, er, es, e_]),
        eT = eN.some((e) => e.trackingArea === j.kY.CLOUD_PLAY);
    (0, Q.A)(eT, ei);
    let eS = s.useMemo(
        () => (eC ? null : (0, l.jsx)(et, { presenceActivity: T, remoteJoinPlatform: ef, isGameLaunchable: ep })),
        [eC, T, ef, ep],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.h, {
                header: r,
                title: i,
                staticBannerSrc: g,
                hideBanner: Z,
                onClickBanner: p,
                bannerAspectRatio: N.u.ACTIVITY,
                iconSrc: A ?? void 0,
                info: eg,
                actions: eN,
                primaryActionFirst: !0,
                onClickContent: p,
                trackingConfig: {
                    id: n.id,
                    linkType: $.J.RICH_PRESENCE_INVITE,
                    onView: f,
                    referrerId: t.author.id,
                    guildId: a.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                    appEmbedState: $.f.ACTIVE,
                },
                footer: eS,
            }),
            ej ? eo() : null,
        ],
    });
}
