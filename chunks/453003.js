n.d(t, { V: () => ei, A: () => el });
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(570138),
    d = n(379834),
    c = n(738678),
    u = n(17928),
    m = n(646270),
    h = n(27989),
    g = n(610509),
    p = n(22363),
    A = n(802516),
    x = n(31300),
    f = n(834730),
    I = n(687966),
    E = n(825860),
    v = n(308368),
    C = n(452295),
    _ = n(729937),
    j = n(572211),
    N = n(354287),
    y = n(693879),
    T = n(583846),
    S = n(366430),
    b = n(205184),
    k = n(928550),
    R = n(689168),
    L = n(403362),
    M = n(456060),
    P = n(723702),
    D = n(850670),
    O = n(206589),
    U = n(125017);
n(938796);
var G = n(665260),
    w = n(574381),
    B = n(134861),
    H = n(528767),
    V = n(182892),
    F = n(652215),
    z = n(55730),
    Y = n(287613),
    K = n(659051),
    W = n(702631),
    J = n(105292),
    X = n(946255);
n(321073);
var Z =
    (((i = {}).DESKTOP = "desktop"),
    (i.MOBILE = "mobile"),
    (i.ANDROID = "android"),
    (i.IOS = "ios"),
    (i.PLAYSTATION = "playstation"),
    (i.XBOX = "xbox"),
    (i.VR = "vr"),
    i);
(o.y.DESKTOP,
    o.y.ANDROID,
    o.y.IOS,
    o.y.XBOX,
    o.y.PLAYSTATION_4,
    o.y.PLAYSTATION_5,
    o.y.SAMSUNG,
    o.y.EMBEDDED,
    o.y.META_QUEST);
let q = [];
function $(e) {
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
    ee = n(768349),
    et = n(657167);
function en(e) {
    let { presenceActivity: t, remoteJoinPlatform: n, isGameLaunchable: i } = e,
        r = (function (e) {
            let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
            return s.useMemo(
                () =>
                    (function (e) {
                        let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                            l = new Set(t),
                            s = [];
                        return null == t || 0 === t.length || (null != n && l.has(n) && i)
                            ? q
                            : (l.has(o.y.ANDROID) && l.has(o.y.IOS)
                                  ? s.push("mobile")
                                  : l.has(o.y.ANDROID)
                                    ? s.push("android")
                                    : l.has(o.y.IOS) && s.push("ios"),
                              (l.has(o.y.PLAYSTATION_4) || l.has(o.y.PLAYSTATION_5)) && s.push("playstation"),
                              l.has(o.y.XBOX) && s.push("xbox"),
                              l.has(o.y.DESKTOP) && s.push("desktop"),
                              l.has(o.y.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: o.y.DESKTOP, isGameLaunchable: i }),
        a = s.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case Z.MOBILE:
                                return (0, l.jsx)(m.u, { size: "xxs", color: "currentColor" }, e);
                            case Z.ANDROID:
                                return (0, l.jsx)($, { width: h.E.xxs, height: h.E.xxs, color: "currentColor" }, e);
                            case Z.IOS:
                                return (0, l.jsx)(g.z, { size: "xxs", color: "currentColor" }, e);
                            case Z.PLAYSTATION:
                                return (0, l.jsx)(p.X, { size: "xxs", color: "currentColor" }, e);
                            case Z.XBOX:
                                return (0, l.jsx)(A.Y, { size: "xxs", color: "currentColor" }, e);
                            case Z.VR:
                                return (0, l.jsx)(c.G, { size: "xxs", color: "currentColor" }, e);
                            case Z.DESKTOP:
                                return (0, l.jsx)(x.k, { size: "xxs", color: "currentColor" }, e);
                            default:
                                return null;
                        }
                    })
                    .filter(L.Vq),
            [r],
        );
    if (!(null != n || a.length > 0)) return null;
    let d =
        null != n
            ? (function (e) {
                  switch (e) {
                      case o.y.DESKTOP:
                          return J.intl.string(J.t.aqN8U9);
                      case o.y.IOS:
                          return J.intl.string(J.t.CyQ5ia);
                      case o.y.ANDROID:
                          return J.intl.string(J.t.fMs6uW);
                      case o.y.XBOX:
                          return J.intl.string(J.t.o0hjdt);
                      case o.y.PLAYSTATION_4:
                      case o.y.PLAYSTATION_5:
                          return J.intl.string(J.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : J.intl.string(J.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: et.qr,
        children: [
            (0, l.jsx)("div", {
                className: et.E6,
                children: a.map((e, t) => (0, l.jsx)("div", { className: et.F2, children: e }, t)),
            }),
            (0, l.jsx)(f.E, { variant: "text-sm/medium", color: "currentColor", className: et.kB, children: d }),
        ],
    });
}
function ei(e) {
    let { activity: t, className: n } = e,
        i = t?.timestamps?.start ?? t?.created_at;
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: a()(et.Ym, n),
              children: [
                  (0, l.jsx)(I.GameControllerIcon, { size: "xxs", color: "currentColor" }),
                  (0, l.jsx)(y.z, {
                      entry: { start: i, end: t?.timestamps?.end },
                      textColor: "currentColor",
                      textTabularNumbers: !1,
                  }),
              ],
          });
}
function el(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: r,
            header: a,
            currentUserId: c,
            isEmbeddedApplication: m,
            tryWithGdnAction: h,
            staticBannerSrc: g,
            onClickContent: p,
            iconSrc: A,
            onView: x,
            presenceActivity: I,
            currentUserPresenceActivity: y,
            hideParty: L,
            hideBanner: Z = !1,
            partyStatusElement: q,
            analyticsLocations: $,
            canPromptAuth: el,
            startAuthorization: es,
        } = e,
        er = (0, D.v)(t),
        ea = (0, b.s)(n.id),
        eo = s.useMemo(
            () =>
                ea.some((e) => (0, T.CZ)(e) === d.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.FireIcon, { size: "xxs", color: "currentColor" }),
                              J.intl.string(J.t.TsWCdW),
                          ],
                      })
                    : null,
            [ea],
        ),
        ed = s.useMemo(
            () =>
                (0, l.jsxs)(f.E, {
                    variant: "text-xs/normal",
                    className: et.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [er ? (0, M.YC)(t, i, r, c, !1) : (0, l.jsx)(ei, { activity: I }), er ? null : eo],
                }),
            [er, t, i, r, c, I, eo],
        ),
        ec = s.useMemo(() => {
            let e = I?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(f.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [I?.details]),
        eu = s.useMemo(
            () => (0, l.jsxs)("div", { className: et.pq, children: [ec, ed, L || er ? null : q] }),
            [ed, L, er, q, ec],
        ),
        em = !!(0, k.au)(n.id),
        eh = (0, S.VS)(n),
        { canJoin: eg, remoteJoinPlatform: ep } = (function (e) {
            let {
                presenceActivity: t,
                currentUserPresenceActivity: n,
                currentUserId: i,
                message: l,
                application: s,
                isEmbeddedApplication: r,
                isFrameApplication: a,
                isGameLaunchable: d,
            } = e;
            if (l.author.id === i || !(0, K.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let c = (0, U._)(t);
            if (!(0, Y.A)(c) || (0, W.U)(c) || (0, O.w)(n, t) || (0, D.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === F.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, G.Lt)(e.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = H.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, V.e)(n) ||
                        (null != n.application_id &&
                            (B.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, w.m0)() ? t === o.y.ANDROID : !!(0, w.un)() && t === o.y.IOS;
                                })(n)))
                        ? null
                        : (0, G.Lt)(n.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, z.A)(t, F.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, P.platformSupportsActivityJoin)() && d
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: I,
            currentUserPresenceActivity: y,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: m,
            isFrameApplication: eh,
            isGameLaunchable: em,
        }),
        eA = !(
            null == I ||
            !(0, K.A)(I, t, n.id) ||
            !(0, z.A)(I, F.jUm.SYNC) ||
            !P.isPlatformEmbedded ||
            (0, O.w)(y, I)
        ),
        ex = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, K.A)(e, t, n.id) ||
                t.activity?.type !== F.xL.JOIN_REQUEST ||
                !(0, z.A)(e, F.jUm.JOIN)
            )
                return !1;
            let l = (0, U._)(e);
            return !(!(0, Y.A)(l) || (0, W.U)(l));
        })(I, t, n, c),
        ef = (0, O.w)(y, I),
        eI = null != I && (0, z.A)(I, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        eE = (0, u.bG)(
            [R.A],
            () => null != I && null != I.application_id && R.A.getState(I.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        ev = s.useMemo(() => {
            let e = null;
            return (
                eg
                    ? (e = {
                          label: J.intl.string(J.t.VJlc0S),
                          trackingArea: N.kY.JOIN,
                          submitting: eE,
                          onClick: () => {
                              (C.A.join({
                                  userId: t.author.id,
                                  sessionId: I.session_id,
                                  applicationId: I.application_id,
                                  channelId: r.id,
                                  messageId: t.id,
                                  source: F.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: $,
                                  embedded: (0, z.A)(I, F.jUm.EMBEDDED),
                                  remotePartyId: null != ep ? I.party?.id : void 0,
                              }),
                                  (0, X.A)({
                                      type: F.UqL.JOIN,
                                      source: F.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      applicationId: I.application_id,
                                      partyId: I.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: $,
                                      remoteJoinPlatform: ep,
                                  }));
                          },
                      })
                    : eI && el
                      ? (e = {
                            label: J.intl.string(J.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                es({ analyticsLocations: $ });
                            },
                        })
                      : eA
                        ? (e = {
                              label: J.intl.string(J.t.VJlc0S),
                              trackingArea: N.kY.SYNC,
                              onClick: () => {
                                  null != I && _.OH(I, t.author.id);
                              },
                          })
                        : ex
                          ? (e = {
                                label: J.intl.string(J.t["hC/Zey"]),
                                trackingArea: N.kY.INVITE,
                                onClick: () => {
                                    null != I &&
                                        v.A.sendActivityInvite({
                                            type: F.xL.JOIN,
                                            channelId: r.id,
                                            activity: I,
                                            location: F.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === c,
                                disabledReason: t.author.id === c ? J.intl.string(J.t.IBl8ID) : void 0,
                            })
                          : ef
                            ? (e = {
                                  label: J.intl.string(J.t.KC26NR),
                                  trackingArea: N.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != h && (e = h),
                null != e ? [e] : []
            );
        }, [eg, eA, ex, ef, h, t.author.id, t.id, I, r.id, r.guild_id, $, ep, c, eE, es, el, eI]),
        eC = ev.some((e) => e.trackingArea === N.kY.CLOUD_PLAY);
    (0, Q.A)(eC, $);
    let e_ = s.useMemo(
        () => (ef ? null : (0, l.jsx)(en, { presenceActivity: I, remoteJoinPlatform: ep, isGameLaunchable: em })),
        [ef, I, ep, em],
    );
    return (0, l.jsx)(j.h, {
        header: a,
        title: i,
        staticBannerSrc: g,
        hideBanner: Z,
        onClickBanner: p,
        bannerAspectRatio: j.u.ACTIVITY,
        iconSrc: A ?? void 0,
        info: eu,
        actions: ev,
        primaryActionFirst: !0,
        onClickContent: p,
        trackingConfig: {
            id: n.id,
            linkType: ee.J.RICH_PRESENCE_INVITE,
            onView: x,
            referrerId: t.author.id,
            guildId: r.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            appEmbedState: ee.f.ACTIVE,
        },
        footer: e_,
    });
}
