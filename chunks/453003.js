(n.d(t, { V: () => ei, A: () => el }), n(321073));
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
    E = n(141628),
    v = n(308368),
    C = n(780907),
    _ = n(729937),
    j = n(572211),
    N = n(354287),
    y = n(693879),
    T = n(583846),
    S = n(25451),
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
    V = n(528767),
    H = n(182892),
    F = n(652215),
    z = n(55730),
    Y = n(287613),
    K = n(659051),
    W = n(702631),
    J = n(375708),
    X = n(946255),
    q =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
(F.yTV.DESKTOP,
    F.yTV.ANDROID,
    F.yTV.IOS,
    F.yTV.XBOX,
    F.yTV.PS4,
    F.yTV.PS5,
    F.yTV.SAMSUNG,
    F.yTV.EMBEDDED,
    F.yTV.META_QUEST);
let Z = [];
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
        a = s.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case q.MOBILE:
                                return (0, l.jsx)(u.u, { size: "xxs", color: "currentColor" }, e);
                            case q.ANDROID:
                                return (0, l.jsx)($, { width: m.E.xxs, height: m.E.xxs, color: "currentColor" }, e);
                            case q.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" }, e);
                            case q.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" }, e);
                            case q.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" }, e);
                            case q.VR:
                                return (0, l.jsx)(d.G, { size: "xxs", color: "currentColor" }, e);
                            case q.DESKTOP:
                                return (0, l.jsx)(A.k, { size: "xxs", color: "currentColor" }, e);
                            default:
                                return null;
                        }
                    })
                    .filter(L.Vq),
            [r],
        );
    if (!(null != n || a.length > 0)) return null;
    let o =
        null != n
            ? (function (e) {
                  switch (e) {
                      case F.yTV.DESKTOP:
                          return J.intl.string(J.t.aqN8U9);
                      case F.yTV.IOS:
                          return J.intl.string(J.t.CyQ5ia);
                      case F.yTV.ANDROID:
                          return J.intl.string(J.t.fMs6uW);
                      case F.yTV.XBOX:
                          return J.intl.string(J.t.o0hjdt);
                      case F.yTV.PS4:
                      case F.yTV.PS5:
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
            (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", className: et.kB, children: o }),
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
                  (0, l.jsx)(f.GameControllerIcon, { size: "xxs", color: "currentColor" }),
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
            currentUserId: d,
            isEmbeddedApplication: u,
            tryWithGdnAction: m,
            staticBannerSrc: h,
            onClickContent: g,
            iconSrc: p,
            onView: A,
            presenceActivity: f,
            currentUserPresenceActivity: y,
            hideParty: L,
            hideBanner: q = !1,
            partyStatusElement: Z,
            analyticsLocations: $,
            showAuthButton: el,
            canPromptAuth: es,
            startAuthorization: er,
            accountLinkButtonRef: ea,
            renderAccountLinkUpsell: eo,
        } = e,
        ed = (0, D.v)(t),
        ec = (0, b.s)(n.id),
        eu = s.useMemo(
            () =>
                ec.some((e) => (0, T.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(I.FireIcon, { size: "xxs", color: "currentColor" }),
                              J.intl.string(J.t.TsWCdW),
                          ],
                      })
                    : null,
            [ec],
        ),
        em = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: et.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ed ? (0, M.YC)(t, i, r, d, !1) : (0, l.jsx)(ei, { activity: f }), ed ? null : eu],
                }),
            [ed, t, i, r, d, f, eu],
        ),
        eh = s.useMemo(() => {
            let e = f?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [f?.details]),
        eg = s.useMemo(
            () => (0, l.jsxs)("div", { className: et.pq, children: [eh, em, L || ed ? null : Z] }),
            [em, L, ed, Z, eh],
        ),
        ep = !!(0, k.au)(n.id),
        eA = (0, S.X)(n),
        { canJoin: ex, remoteJoinPlatform: ef } = (function (e) {
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
            if (l.author.id === i || !(0, K.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, U._)(t);
            if (!(0, Y.A)(d) || (0, W.U)(d) || (0, O.w)(n, t) || (0, D.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === F.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, G.Lt)(e.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = V.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, H.e)(n) ||
                        (null != n.application_id &&
                            (B.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, w.m0)() ? t === F.yTV.ANDROID : !!(0, w.un)() && t === F.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, G.Lt)(n.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, z.A)(t, F.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, P.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: f,
            currentUserPresenceActivity: y,
            currentUserId: d,
            message: t,
            application: n,
            isEmbeddedApplication: u,
            isFrameApplication: eA,
            isGameLaunchable: ep,
        }),
        eI = !(
            null == f ||
            !(0, K.A)(f, t, n.id) ||
            !(0, z.A)(f, F.jUm.SYNC) ||
            !P.isPlatformEmbedded ||
            (0, O.w)(y, f)
        ),
        eE = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, K.A)(e, t, n.id) ||
                t.activity?.type !== F.xL.JOIN_REQUEST ||
                !(0, z.A)(e, F.jUm.JOIN)
            )
                return !1;
            let l = (0, U._)(e);
            return !(!(0, Y.A)(l) || (0, W.U)(l));
        })(f, t, n, d),
        ev = (0, O.w)(y, f),
        eC = null != f && (0, z.A)(f, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        e_ = (0, c.bG)(
            [R.A],
            () => null != f && null != f.application_id && R.A.getState(f.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        { actions: ej, hasAccountLinkButton: eN } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ex
                ? (e = {
                      label: J.intl.string(J.t.VJlc0S),
                      trackingArea: N.kY.JOIN,
                      submitting: e_,
                      onClick: () => {
                          (C.Ay.join({
                              userId: t.author.id,
                              sessionId: f.session_id,
                              applicationId: f.application_id,
                              channelId: r.id,
                              messageId: t.id,
                              source: F.ThZ.MESSAGE_EMBED,
                              analyticsLocations: $,
                              embedded: (0, z.A)(f, F.jUm.EMBEDDED),
                              remotePartyId: null != ef ? f.party?.id : void 0,
                          }),
                              (0, X.A)({
                                  type: F.UqL.JOIN,
                                  source: F.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  applicationId: f.application_id,
                                  partyId: f.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: $,
                                  remoteJoinPlatform: ef,
                              }));
                      },
                  })
                : eC && es
                  ? ((e = {
                        label: J.intl.string(J.t.lw71Nf),
                        trackingArea: N.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            er({ analyticsLocations: $ });
                        },
                    }),
                    (n = !1))
                  : eI
                    ? ((e = {
                          label: J.intl.string(J.t.VJlc0S),
                          trackingArea: N.kY.SYNC,
                          onClick: () => {
                              null != f && _.OH(f, t.author.id);
                          },
                      }),
                      (n = !1))
                    : eE
                      ? (e = {
                            label: J.intl.string(J.t["hC/Zey"]),
                            trackingArea: N.kY.INVITE,
                            onClick: () => {
                                null != f &&
                                    v.A.sendActivityInvite({
                                        type: F.xL.JOIN,
                                        channelId: r.id,
                                        activity: f,
                                        location: F.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === d,
                            disabledReason: t.author.id === d ? J.intl.string(J.t.IBl8ID) : void 0,
                        })
                      : ev
                        ? (e = {
                              label: J.intl.string(J.t.KC26NR),
                              trackingArea: N.kY.PLAY,
                              onClick: () => {},
                              disabled: !0,
                          })
                        : null != m && ((e = m), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    el &&
                        n &&
                        (l.push({
                            label: J.intl.string(J.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                er({ analyticsLocations: $ });
                            },
                            icon: E.A,
                            iconButton: !0,
                            buttonRef: ea,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ex, eI, eE, ev, m, t.author.id, t.id, f, r.id, r.guild_id, $, ef, d, e_, el, er, ea, es, eC]),
        ey = ej.some((e) => e.trackingArea === N.kY.CLOUD_PLAY);
    (0, Q.A)(ey, $);
    let eT = s.useMemo(
        () => (ev ? null : (0, l.jsx)(en, { presenceActivity: f, remoteJoinPlatform: ef, isGameLaunchable: ep })),
        [ev, f, ef, ep],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.h, {
                header: a,
                title: i,
                staticBannerSrc: h,
                hideBanner: q,
                onClickBanner: g,
                bannerAspectRatio: j.u.ACTIVITY,
                iconSrc: p ?? void 0,
                info: eg,
                actions: ej,
                primaryActionFirst: !0,
                onClickContent: g,
                trackingConfig: {
                    id: n.id,
                    linkType: ee.J.RICH_PRESENCE_INVITE,
                    onView: A,
                    referrerId: t.author.id,
                    guildId: r.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                    appEmbedState: ee.f.ACTIVE,
                },
                footer: eT,
            }),
            eN ? eo() : null,
        ],
    });
}
