n.d(t, { V: () => en, A: () => ei });
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(379834),
    d = n(738678),
    c = n(17928),
    u = n(646270),
    m = n(27989),
    h = n(610509),
    g = n(22363),
    p = n(802516),
    A = n(31300),
    x = n(834730),
    f = n(687966),
    I = n(825860),
    E = n(308368),
    v = n(452295),
    C = n(729937),
    _ = n(572211),
    j = n(354287),
    N = n(693879),
    y = n(583846),
    T = n(25451),
    S = n(205184),
    b = n(928550),
    k = n(689168),
    R = n(403362),
    L = n(456060),
    M = n(723702),
    P = n(850670),
    D = n(206589),
    O = n(125017);
n(938796);
var U = n(665260),
    G = n(574381),
    w = n(134861),
    B = n(528767),
    V = n(182892),
    H = n(652215),
    F = n(55730),
    z = n(287613),
    Y = n(659051),
    K = n(702631),
    W = n(105292),
    J = n(946255);
n(321073);
var X =
    (((i = {}).DESKTOP = "desktop"),
    (i.MOBILE = "mobile"),
    (i.ANDROID = "android"),
    (i.IOS = "ios"),
    (i.PLAYSTATION = "playstation"),
    (i.XBOX = "xbox"),
    (i.VR = "vr"),
    i);
(H.yTV.DESKTOP,
    H.yTV.ANDROID,
    H.yTV.IOS,
    H.yTV.XBOX,
    H.yTV.PS4,
    H.yTV.PS5,
    H.yTV.SAMSUNG,
    H.yTV.EMBEDDED,
    H.yTV.META_QUEST);
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
var $ = n(878831),
    Q = n(768349),
    ee = n(657167);
function et(e) {
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
                            ? Z
                            : (l.has(H.yTV.ANDROID) && l.has(H.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(H.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(H.yTV.IOS) && s.push("ios"),
                              (l.has(H.yTV.PS4) || l.has(H.yTV.PS5)) && s.push("playstation"),
                              l.has(H.yTV.XBOX) && s.push("xbox"),
                              l.has(H.yTV.DESKTOP) && s.push("desktop"),
                              l.has(H.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: H.yTV.DESKTOP, isGameLaunchable: i }),
        a = s.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case X.MOBILE:
                                return (0, l.jsx)(u.u, { size: "xxs", color: "currentColor" }, e);
                            case X.ANDROID:
                                return (0, l.jsx)(q, { width: m.E.xxs, height: m.E.xxs, color: "currentColor" }, e);
                            case X.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" }, e);
                            case X.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" }, e);
                            case X.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" }, e);
                            case X.VR:
                                return (0, l.jsx)(d.G, { size: "xxs", color: "currentColor" }, e);
                            case X.DESKTOP:
                                return (0, l.jsx)(A.k, { size: "xxs", color: "currentColor" }, e);
                            default:
                                return null;
                        }
                    })
                    .filter(R.Vq),
            [r],
        );
    if (!(null != n || a.length > 0)) return null;
    let o =
        null != n
            ? (function (e) {
                  switch (e) {
                      case H.yTV.DESKTOP:
                          return W.intl.string(W.t.aqN8U9);
                      case H.yTV.IOS:
                          return W.intl.string(W.t.CyQ5ia);
                      case H.yTV.ANDROID:
                          return W.intl.string(W.t.fMs6uW);
                      case H.yTV.XBOX:
                          return W.intl.string(W.t.o0hjdt);
                      case H.yTV.PS4:
                      case H.yTV.PS5:
                          return W.intl.string(W.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : W.intl.string(W.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: ee.qr,
        children: [
            (0, l.jsx)("div", {
                className: ee.E6,
                children: a.map((e, t) => (0, l.jsx)("div", { className: ee.F2, children: e }, t)),
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
              className: a()(ee.Ym, n),
              children: [
                  (0, l.jsx)(f.GameControllerIcon, { size: "xxs", color: "currentColor" }),
                  (0, l.jsx)(N.z, {
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
            channel: r,
            header: a,
            currentUserId: d,
            isEmbeddedApplication: u,
            tryWithGdnAction: m,
            staticBannerSrc: h,
            onClickContent: g,
            iconSrc: p,
            onView: A,
            presenceActivity: f,
            currentUserPresenceActivity: N,
            hideParty: R,
            hideBanner: X = !1,
            partyStatusElement: Z,
            analyticsLocations: q,
            canPromptAuth: ei,
            startAuthorization: el,
        } = e,
        es = (0, P.v)(t),
        er = (0, S.s)(n.id),
        ea = s.useMemo(
            () =>
                er.some((e) => (0, y.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(I.FireIcon, { size: "xxs", color: "currentColor" }),
                              W.intl.string(W.t.TsWCdW),
                          ],
                      })
                    : null,
            [er],
        ),
        eo = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: ee.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [es ? (0, L.YC)(t, i, r, d, !1) : (0, l.jsx)(en, { activity: f }), es ? null : ea],
                }),
            [es, t, i, r, d, f, ea],
        ),
        ed = s.useMemo(() => {
            let e = f?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [f?.details]),
        ec = s.useMemo(
            () => (0, l.jsxs)("div", { className: ee.pq, children: [ed, eo, R || es ? null : Z] }),
            [eo, R, es, Z, ed],
        ),
        eu = !!(0, b.au)(n.id),
        em = (0, T.X)(n),
        { canJoin: eh, remoteJoinPlatform: eg } = (function (e) {
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
            if (l.author.id === i || !(0, Y.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, O._)(t);
            if (!(0, z.A)(d) || (0, K.U)(d) || (0, D.w)(n, t) || (0, P.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === H.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, U.Lt)(e.flags ?? 0, H.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = B.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, V.e)(n) ||
                        (null != n.application_id &&
                            (w.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, G.m0)() ? t === H.yTV.ANDROID : !!(0, G.un)() && t === H.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, U.Lt)(n.flags ?? 0, H.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, F.A)(t, H.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, M.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: f,
            currentUserPresenceActivity: N,
            currentUserId: d,
            message: t,
            application: n,
            isEmbeddedApplication: u,
            isFrameApplication: em,
            isGameLaunchable: eu,
        }),
        ep = !(
            null == f ||
            !(0, Y.A)(f, t, n.id) ||
            !(0, F.A)(f, H.jUm.SYNC) ||
            !M.isPlatformEmbedded ||
            (0, D.w)(N, f)
        ),
        eA = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, Y.A)(e, t, n.id) ||
                t.activity?.type !== H.xL.JOIN_REQUEST ||
                !(0, F.A)(e, H.jUm.JOIN)
            )
                return !1;
            let l = (0, O._)(e);
            return !(!(0, z.A)(l) || (0, K.U)(l));
        })(f, t, n, d),
        ex = (0, D.w)(N, f),
        ef = null != f && (0, F.A)(f, H.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        eI = (0, c.bG)(
            [k.A],
            () => null != f && null != f.application_id && k.A.getState(f.application_id, H.xL.JOIN) === H.eAD.LOADING,
        ),
        eE = s.useMemo(() => {
            let e = null;
            return (
                eh
                    ? (e = {
                          label: W.intl.string(W.t.VJlc0S),
                          trackingArea: j.kY.JOIN,
                          submitting: eI,
                          onClick: () => {
                              (v.A.join({
                                  userId: t.author.id,
                                  sessionId: f.session_id,
                                  applicationId: f.application_id,
                                  channelId: r.id,
                                  messageId: t.id,
                                  source: H.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: q,
                                  embedded: (0, F.A)(f, H.jUm.EMBEDDED),
                                  remotePartyId: null != eg ? f.party?.id : void 0,
                              }),
                                  (0, J.A)({
                                      type: H.UqL.JOIN,
                                      source: H.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      applicationId: f.application_id,
                                      partyId: f.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: q,
                                      remoteJoinPlatform: eg,
                                  }));
                          },
                      })
                    : ef && ei
                      ? (e = {
                            label: W.intl.string(W.t.lw71Nf),
                            trackingArea: j.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                el({ analyticsLocations: q });
                            },
                        })
                      : ep
                        ? (e = {
                              label: W.intl.string(W.t.VJlc0S),
                              trackingArea: j.kY.SYNC,
                              onClick: () => {
                                  null != f && C.OH(f, t.author.id);
                              },
                          })
                        : eA
                          ? (e = {
                                label: W.intl.string(W.t["hC/Zey"]),
                                trackingArea: j.kY.INVITE,
                                onClick: () => {
                                    null != f &&
                                        E.A.sendActivityInvite({
                                            type: H.xL.JOIN,
                                            channelId: r.id,
                                            activity: f,
                                            location: H.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === d,
                                disabledReason: t.author.id === d ? W.intl.string(W.t.IBl8ID) : void 0,
                            })
                          : ex
                            ? (e = {
                                  label: W.intl.string(W.t.KC26NR),
                                  trackingArea: j.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != m && (e = m),
                null != e ? [e] : []
            );
        }, [eh, ep, eA, ex, m, t.author.id, t.id, f, r.id, r.guild_id, q, eg, d, eI, el, ei, ef]),
        ev = eE.some((e) => e.trackingArea === j.kY.CLOUD_PLAY);
    (0, $.A)(ev, q);
    let eC = s.useMemo(
        () => (ex ? null : (0, l.jsx)(et, { presenceActivity: f, remoteJoinPlatform: eg, isGameLaunchable: eu })),
        [ex, f, eg, eu],
    );
    return (0, l.jsx)(_.h, {
        header: a,
        title: i,
        staticBannerSrc: h,
        hideBanner: X,
        onClickBanner: g,
        bannerAspectRatio: _.u.ACTIVITY,
        iconSrc: p ?? void 0,
        info: ec,
        actions: eE,
        primaryActionFirst: !0,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: Q.J.RICH_PRESENCE_INVITE,
            onView: A,
            referrerId: t.author.id,
            guildId: r.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            appEmbedState: Q.f.ACTIVE,
        },
        footer: eC,
    });
}
