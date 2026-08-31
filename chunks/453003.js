n.d(t, { V: () => ei, A: () => el }), n(321073);
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
    R = n(928550),
    L = n(689168),
    k = n(403362),
    M = n(456060),
    O = n(723702),
    P = n(850670),
    D = n(206589),
    U = n(125017);
n(938796);
var G = n(665260),
    w = n(574381),
    H = n(134861),
    V = n(528767),
    B = n(182892),
    F = n(652215),
    z = n(55730),
    J = n(287613),
    K = n(659051),
    Y = n(702631),
    W = n(375708),
    Z = n(946255),
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
let q = [];
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
var $ = n(878831),
    ee = n(768349),
    et = n(657167);
function en(e) {
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
                            ? q
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
                                return (0, l.jsx)(Q, { width: d.E.xxs, height: d.E.xxs, color: "currentColor" }, e);
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
                    .filter(k.Vq),
            [a],
        );
    if (!(null != n || r.length > 0)) return null;
    let o =
        null != n
            ? (function (e) {
                  switch (e) {
                      case F.yTV.DESKTOP:
                          return W.intl.string(W.t.aqN8U9);
                      case F.yTV.IOS:
                          return W.intl.string(W.t.CyQ5ia);
                      case F.yTV.ANDROID:
                          return W.intl.string(W.t.fMs6uW);
                      case F.yTV.XBOX:
                          return W.intl.string(W.t.o0hjdt);
                      case F.yTV.PS4:
                      case F.yTV.PS5:
                          return W.intl.string(W.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : W.intl.string(W.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: et.qr,
        children: [
            (0, l.jsx)("div", {
                className: et.E6,
                children: r.map((e, t) => (0, l.jsx)("div", { className: et.F2, children: e }, t)),
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
              className: r()(et.Ym, n),
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
function el(e) {
    let {
            message: t,
            application: n,
            applicationName: i,
            channel: a,
            header: r,
            currentUserId: c,
            isEmbeddedApplication: d,
            tryWithGdnAction: m,
            staticBannerSrc: h,
            onClickContent: g,
            iconSrc: p,
            onView: A,
            presenceActivity: f,
            currentUserPresenceActivity: T,
            hideParty: k,
            hideBanner: X = !1,
            partyStatusElement: q,
            analyticsLocations: Q,
            showAuthButton: el,
            canPromptAuth: es,
            startAuthorization: ea,
            accountLinkButtonRef: er,
            renderAccountLinkUpsell: eo,
        } = e,
        ec = (0, P.v)(t),
        ed = (0, b.s)(n.id),
        eu = s.useMemo(
            () =>
                ed.some((e) => (0, S.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.FireIcon, { size: "xxs", color: "currentColor" }),
                              W.intl.string(W.t.TsWCdW),
                          ],
                      })
                    : null,
            [ed],
        ),
        em = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: et.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ec ? (0, M.YC)(t, i, a, c, !1) : (0, l.jsx)(ei, { activity: f }), ec ? null : eu],
                }),
            [ec, t, i, a, c, f, eu],
        ),
        eh = s.useMemo(() => {
            let e = f?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [f?.details]),
        eg = s.useMemo(
            () => (0, l.jsxs)("div", { className: et.pq, children: [eh, em, k || ec ? null : q] }),
            [em, k, ec, q, eh],
        ),
        ep = !!(0, R.au)(n.id),
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
            if (l.author.id === i || !(0, K.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let c = (0, U._)(t);
            if (!(0, J.A)(c) || (0, Y.U)(c) || (0, D.w)(n, t) || (0, P.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (a && r) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === F.xL.JOIN && null != t) {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.application_id;
                    if (null == t || !(0, G.Lt)(e.flags ?? 0, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
                    let n = V.A.getRemoteApplicationActivity(t);
                    return null == n ||
                        (0, B.e)(n) ||
                        (null != n.application_id &&
                            (H.A.isConnected(n.application_id) ||
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
            return (0, O.platformSupportsActivityJoin)() && o
                ? { canJoin: !0, remoteJoinPlatform: null }
                : { canJoin: !1, remoteJoinPlatform: null };
        })({
            presenceActivity: f,
            currentUserPresenceActivity: T,
            currentUserId: c,
            message: t,
            application: n,
            isEmbeddedApplication: d,
            isFrameApplication: eA,
            isGameLaunchable: ep,
        }),
        eE = !(
            null == f ||
            !(0, K.A)(f, t, n.id) ||
            !(0, z.A)(f, F.jUm.SYNC) ||
            !O.isPlatformEmbedded ||
            (0, D.w)(T, f)
        ),
        eI = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, K.A)(e, t, n.id) ||
                t.activity?.type !== F.xL.JOIN_REQUEST ||
                !(0, z.A)(e, F.jUm.JOIN)
            )
                return !1;
            let l = (0, U._)(e);
            return !(!(0, J.A)(l) || (0, Y.U)(l));
        })(f, t, n, c),
        eC = (0, D.w)(T, f),
        e_ = null != f && (0, z.A)(f, F.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        ev = (0, u.bG)(
            [L.A],
            () => null != f && null != f.application_id && L.A.getState(f.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        { actions: eN, hasAccountLinkButton: ej } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ex
                ? (e = {
                      label: W.intl.string(W.t.VJlc0S),
                      trackingArea: j.kY.JOIN,
                      submitting: ev,
                      onClick: () => {
                          _.Ay.join({
                              userId: t.author.id,
                              sessionId: f.session_id,
                              applicationId: f.application_id,
                              channelId: a.id,
                              messageId: t.id,
                              source: F.ThZ.MESSAGE_EMBED,
                              analyticsLocations: Q,
                              embedded: (0, z.A)(f, F.jUm.EMBEDDED),
                              remotePartyId: null != ef ? f.party?.id : void 0,
                          }),
                              (0, Z.A)({
                                  type: F.UqL.JOIN,
                                  source: F.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  applicationId: f.application_id,
                                  partyId: f.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: Q,
                                  remoteJoinPlatform: ef,
                              });
                      },
                  })
                : e_ && es
                  ? ((e = {
                        label: W.intl.string(W.t.lw71Nf),
                        trackingArea: j.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            ea({ analyticsLocations: Q });
                        },
                    }),
                    (n = !1))
                  : eE
                    ? ((e = {
                          label: W.intl.string(W.t.VJlc0S),
                          trackingArea: j.kY.SYNC,
                          onClick: () => {
                              null != f && v.OH(f, t.author.id);
                          },
                      }),
                      (n = !1))
                    : eI
                      ? (e = {
                            label: W.intl.string(W.t["hC/Zey"]),
                            trackingArea: j.kY.INVITE,
                            onClick: () => {
                                null != f &&
                                    C.A.sendActivityInvite({
                                        type: F.xL.JOIN,
                                        channelId: a.id,
                                        activity: f,
                                        location: F.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === c,
                            disabledReason: t.author.id === c ? W.intl.string(W.t.IBl8ID) : void 0,
                        })
                      : eC
                        ? (e = {
                              label: W.intl.string(W.t.KC26NR),
                              trackingArea: j.kY.PLAY,
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
                            label: W.intl.string(W.t.lw71Nf),
                            trackingArea: j.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ea({ analyticsLocations: Q });
                            },
                            icon: I.A,
                            iconButton: !0,
                            buttonRef: er,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ex, eE, eI, eC, m, t.author.id, t.id, f, a.id, a.guild_id, Q, ef, c, ev, el, ea, er, es, e_]),
        eT = eN.some((e) => e.trackingArea === j.kY.CLOUD_PLAY);
    (0, $.A)(eT, Q);
    let eS = s.useMemo(
        () => (eC ? null : (0, l.jsx)(en, { presenceActivity: f, remoteJoinPlatform: ef, isGameLaunchable: ep })),
        [eC, f, ef, ep],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.h, {
                header: r,
                title: i,
                staticBannerSrc: h,
                hideBanner: X,
                onClickBanner: g,
                bannerAspectRatio: N.u.ACTIVITY,
                iconSrc: p ?? void 0,
                info: eg,
                actions: eN,
                primaryActionFirst: !0,
                onClickContent: g,
                trackingConfig: {
                    id: n.id,
                    linkType: ee.J.RICH_PRESENCE_INVITE,
                    onView: A,
                    referrerId: t.author.id,
                    guildId: a.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                    appEmbedState: ee.f.ACTIVE,
                },
                footer: eS,
            }),
            ej ? eo() : null,
        ],
    });
}
