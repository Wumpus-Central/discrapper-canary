(n.d(t, { V: () => el, A: () => es }), n(321073));
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
    P = n(796306),
    D = n(723702),
    O = n(850670),
    U = n(206589),
    G = n(125017);
n(938796);
var w = n(665260),
    B = n(574381),
    V = n(134861),
    H = n(528767),
    F = n(182892),
    z = n(652215),
    Y = n(55730),
    K = n(287613),
    W = n(659051),
    J = n(702631),
    X = n(375708),
    q = n(946255),
    Z =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
(z.yTV.DESKTOP,
    z.yTV.ANDROID,
    z.yTV.IOS,
    z.yTV.XBOX,
    z.yTV.PS4,
    z.yTV.PS5,
    z.yTV.SAMSUNG,
    z.yTV.EMBEDDED,
    z.yTV.META_QUEST);
let $ = [];
function Q(e) {
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
var ee = n(878831),
    et = n(768349),
    en = n(657167);
function ei(e) {
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
                            ? $
                            : (l.has(z.yTV.ANDROID) && l.has(z.yTV.IOS)
                                  ? s.push("mobile")
                                  : l.has(z.yTV.ANDROID)
                                    ? s.push("android")
                                    : l.has(z.yTV.IOS) && s.push("ios"),
                              (l.has(z.yTV.PS4) || l.has(z.yTV.PS5)) && s.push("playstation"),
                              l.has(z.yTV.XBOX) && s.push("xbox"),
                              l.has(z.yTV.DESKTOP) && s.push("desktop"),
                              l.has(z.yTV.META_QUEST) && s.push("vr"),
                              s);
                    })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
                [n, t, i],
            );
        })({ platforms: t?.supported_platforms, currentPlatform: z.yTV.DESKTOP, isGameLaunchable: i }),
        a = s.useMemo(
            () =>
                r
                    .map((e) => {
                        switch (e) {
                            case Z.MOBILE:
                                return (0, l.jsx)(u.u, { size: "xxs", color: "currentColor" }, e);
                            case Z.ANDROID:
                                return (0, l.jsx)(Q, { width: m.E.xxs, height: m.E.xxs, color: "currentColor" }, e);
                            case Z.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" }, e);
                            case Z.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" }, e);
                            case Z.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" }, e);
                            case Z.VR:
                                return (0, l.jsx)(d.G, { size: "xxs", color: "currentColor" }, e);
                            case Z.DESKTOP:
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
                      case z.yTV.DESKTOP:
                          return X.intl.string(X.t.aqN8U9);
                      case z.yTV.IOS:
                          return X.intl.string(X.t.CyQ5ia);
                      case z.yTV.ANDROID:
                          return X.intl.string(X.t.fMs6uW);
                      case z.yTV.XBOX:
                          return X.intl.string(X.t.o0hjdt);
                      case z.yTV.PS4:
                      case z.yTV.PS5:
                          return X.intl.string(X.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : X.intl.string(X.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: en.qr,
        children: [
            (0, l.jsx)("div", {
                className: en.E6,
                children: a.map((e, t) => (0, l.jsx)("div", { className: en.F2, children: e }, t)),
            }),
            (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", className: en.kB, children: o }),
        ],
    });
}
function el(e) {
    let { activity: t, className: n } = e,
        i = t?.timestamps?.start ?? t?.created_at;
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: a()(en.Ym, n),
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
function es(e) {
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
            hideBanner: Z = !1,
            partyStatusElement: $,
            analyticsLocations: Q,
            showAuthButton: es,
            canPromptAuth: er,
            startAuthorization: ea,
            accountLinkButtonRef: eo,
            renderAccountLinkUpsell: ed,
        } = e,
        ec = (0, O.v)(t),
        eu = (0, b.s)(n.id),
        em = s.useMemo(
            () =>
                eu.some((e) => (0, T.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(I.FireIcon, { size: "xxs", color: "currentColor" }),
                              X.intl.string(X.t.TsWCdW),
                          ],
                      })
                    : null,
            [eu],
        ),
        eh = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: en.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ec ? (0, M.YC)(t, i, r, d, !1) : (0, l.jsx)(el, { activity: f }), ec ? null : em],
                }),
            [ec, t, i, r, d, f, em],
        ),
        eg = s.useMemo(() => {
            let e = f?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [f?.details]),
        ep = s.useMemo(
            () => (0, l.jsxs)("div", { className: en.pq, children: [eg, eh, L || ec ? null : $] }),
            [eh, L, ec, $, eg],
        ),
        eA = !!(0, k.au)(n.id),
        ex = (0, S.X)(n),
        { canJoin: ef, remoteJoinPlatform: eI } = (function (e) {
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
            if (l.author.id === i || !(0, W.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, G._)(t);
            if (!(0, K.A)(d) || (0, J.U)(d) || (0, U.w)(n, t) || (0, O.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && (0, P.Lj)(s.id))
                return { canJoin: null != (0, P.j1)(s.id, l.author.id), remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === z.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, w.Lt)(e.flags ?? 0, z.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = H.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, F.e)(n) ||
                        (null != n.application_id &&
                            (V.A.isConnected(n.application_id) ||
                                (function (e) {
                                    let { platform: t } = e;
                                    return (0, B.m0)() ? t === z.yTV.ANDROID : !!(0, B.un)() && t === z.yTV.IOS;
                                })(n)))
                        ? null
                        : (0, w.Lt)(n.flags ?? 0, z.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
                          ? (n.platform ?? null)
                          : null;
                })(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, Y.A)(t, z.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
            }
            return (0, D.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: f,
            currentUserPresenceActivity: y,
            currentUserId: d,
            message: t,
            application: n,
            isEmbeddedApplication: u,
            isFrameApplication: ex,
            isGameLaunchable: eA,
        }),
        eE = !(
            null == f ||
            !(0, W.A)(f, t, n.id) ||
            !(0, Y.A)(f, z.jUm.SYNC) ||
            !D.isPlatformEmbedded ||
            (0, U.w)(y, f)
        ),
        ev = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, W.A)(e, t, n.id) ||
                t.activity?.type !== z.xL.JOIN_REQUEST ||
                !(0, Y.A)(e, z.jUm.JOIN)
            )
                return !1;
            let l = (0, G._)(e);
            return !(!(0, K.A)(l) || (0, J.U)(l));
        })(f, t, n, d),
        eC = (0, U.w)(y, f),
        e_ = null != f && (0, Y.A)(f, z.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ej = (0, c.bG)(
            [R.A],
            () => null != f && null != f.application_id && R.A.getState(f.application_id, z.xL.JOIN) === z.eAD.LOADING,
        ),
        { actions: eN, hasAccountLinkButton: ey } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ef
                ? (e = {
                      label: X.intl.string(X.t.VJlc0S),
                      trackingArea: N.kY.JOIN,
                      submitting: ej,
                      onClick: () => {
                          (C.Ay.join({
                              userId: t.author.id,
                              sessionId: f.session_id,
                              applicationId: f.application_id,
                              channelId: r.id,
                              messageId: t.id,
                              source: z.ThZ.MESSAGE_EMBED,
                              analyticsLocations: Q,
                              embedded: (0, Y.A)(f, z.jUm.EMBEDDED),
                              remotePartyId: null != eI ? f.party?.id : void 0,
                          }),
                              (0, q.A)({
                                  type: z.UqL.JOIN,
                                  source: z.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  applicationId: f.application_id,
                                  partyId: f.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: Q,
                                  remoteJoinPlatform: eI,
                              }));
                      },
                  })
                : e_ && er
                  ? ((e = {
                        label: X.intl.string(X.t.lw71Nf),
                        trackingArea: N.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            ea({ analyticsLocations: Q });
                        },
                    }),
                    (n = !1))
                  : eE
                    ? ((e = {
                          label: X.intl.string(X.t.VJlc0S),
                          trackingArea: N.kY.SYNC,
                          onClick: () => {
                              null != f && _.OH(f, t.author.id);
                          },
                      }),
                      (n = !1))
                    : ev
                      ? (e = {
                            label: X.intl.string(X.t["hC/Zey"]),
                            trackingArea: N.kY.INVITE,
                            onClick: () => {
                                null != f &&
                                    v.A.sendActivityInvite({
                                        type: z.xL.JOIN,
                                        channelId: r.id,
                                        activity: f,
                                        location: z.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === d,
                            disabledReason: t.author.id === d ? X.intl.string(X.t.IBl8ID) : void 0,
                        })
                      : eC
                        ? (e = {
                              label: X.intl.string(X.t.KC26NR),
                              trackingArea: N.kY.PLAY,
                              onClick: () => {},
                              disabled: !0,
                          })
                        : null != m && ((e = m), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    es &&
                        n &&
                        (l.push({
                            label: X.intl.string(X.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ea({ analyticsLocations: Q });
                            },
                            icon: E.A,
                            iconButton: !0,
                            buttonRef: eo,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ef, eE, ev, eC, m, t.author.id, t.id, f, r.id, r.guild_id, Q, eI, d, ej, es, ea, eo, er, e_]),
        eT = eN.some((e) => e.trackingArea === N.kY.CLOUD_PLAY);
    (0, ee.A)(eT, Q);
    let eS = s.useMemo(
        () => (eC ? null : (0, l.jsx)(ei, { presenceActivity: f, remoteJoinPlatform: eI, isGameLaunchable: eA })),
        [eC, f, eI, eA],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.h, {
                header: a,
                title: i,
                staticBannerSrc: h,
                hideBanner: Z,
                onClickBanner: g,
                bannerAspectRatio: j.u.ACTIVITY,
                iconSrc: p ?? void 0,
                info: ep,
                actions: eN,
                primaryActionFirst: !0,
                onClickContent: g,
                trackingConfig: {
                    id: n.id,
                    linkType: et.J.RICH_PRESENCE_INVITE,
                    onView: A,
                    referrerId: t.author.id,
                    guildId: r.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                    appEmbedState: et.f.ACTIVE,
                },
                footer: eS,
            }),
            ey ? ed() : null,
        ],
    });
}
