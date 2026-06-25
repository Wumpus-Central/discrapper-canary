n.d(t, { V: () => en, A: () => ei }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(379834),
    d = n(738678),
    c = n(27989),
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
    v = n(780907),
    _ = n(729937),
    j = n(572211),
    N = n(354287),
    T = n(693879),
    y = n(751765),
    S = n(207371),
    b = n(205184),
    L = n(689168),
    R = n(403362),
    k = n(456060),
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
    Y = n(287613),
    z = n(659051),
    K = n(702631),
    W = n(375708),
    J = n(946255),
    q =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
H.yTV.DESKTOP,
    H.yTV.ANDROID,
    H.yTV.IOS,
    H.yTV.XBOX,
    H.yTV.PS4,
    H.yTV.PS5,
    H.yTV.SAMSUNG,
    H.yTV.EMBEDDED,
    H.yTV.META_QUEST;
let X = [];
function Z(e) {
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
    ee = n(378);
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
                            ? X
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
                            case q.MOBILE:
                                return (0, l.jsx)(m.u, { size: "xxs", color: "currentColor" });
                            case q.ANDROID:
                                return (0, l.jsx)(Z, { width: c.E.xxs, height: c.E.xxs, color: "currentColor" });
                            case q.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" });
                            case q.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" });
                            case q.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" });
                            case q.VR:
                                return (0, l.jsx)(d.G, { size: "xxs", color: "currentColor" });
                            case q.DESKTOP:
                                return (0, l.jsx)(A.k, { size: "xxs", color: "currentColor" });
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
                  (0, l.jsx)(f._, { size: "xxs", color: "currentColor" }),
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
            channel: r,
            header: a,
            currentUserId: d,
            launchableAppId: c,
            isEmbeddedApplication: m,
            tryWithGdnAction: h,
            staticBannerSrc: g,
            onClickContent: p,
            iconSrc: A,
            onView: f,
            presenceActivity: T,
            currentUserPresenceActivity: R,
            hideParty: q,
            hideBanner: X = !1,
            partyStatusElement: Z,
            analyticsLocations: ei,
            showAuthButton: el,
            canPromptAuth: es,
            startAuthorization: er,
            accountLinkButtonRef: ea,
            renderAccountLinkUpsell: eo,
        } = e,
        ed = (0, P.v)(t),
        ec = (0, b.s)(n.id),
        eu = s.useMemo(
            () =>
                ec.some((e) => (0, y.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Y, { size: "xxs", color: "currentColor" }),
                              W.intl.string(W.t.TsWCdW),
                          ],
                      })
                    : null,
            [ec],
        ),
        em = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: ee.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [ed ? (0, k.YC)(t, i, r, d, !1) : (0, l.jsx)(en, { activity: T }), ed ? null : eu],
                }),
            [ed, t, i, r, d, T, eu],
        ),
        eh = s.useMemo(() => {
            let e = T?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [T?.details]),
        eg = s.useMemo(
            () => (0, l.jsxs)("div", { className: ee.pq, children: [eh, em, q || ed ? null : Z] }),
            [em, q, ed, Z, eh],
        ),
        ep = !!c,
        eA = (0, S.x)(n),
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
            if (l.author.id === i || !(0, z.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, O._)(t);
            if (!(0, Y.A)(d) || (0, K.U)(d) || (0, D.w)(n, t) || (0, P.v)(l))
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
            presenceActivity: T,
            currentUserPresenceActivity: R,
            currentUserId: d,
            message: t,
            application: n,
            isEmbeddedApplication: m,
            isFrameApplication: eA,
            isGameLaunchable: ep,
        }),
        eE = !(
            null == T ||
            !(0, z.A)(T, t, n.id) ||
            !(0, F.A)(T, H.jUm.SYNC) ||
            !M.isPlatformEmbedded ||
            (0, D.w)(R, T)
        ),
        eI = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, z.A)(e, t, n.id) ||
                t.activity?.type !== H.xL.JOIN_REQUEST ||
                !(0, F.A)(e, H.jUm.JOIN)
            )
                return !1;
            let l = (0, O._)(e);
            return !(!(0, Y.A)(l) || (0, K.U)(l));
        })(T, t, n, d),
        eC = (0, D.w)(R, T),
        ev = null != T && (0, F.A)(T, H.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        e_ = (0, u.bG)(
            [L.A],
            () => null != T && null != T.application_id && L.A.getState(T.application_id, H.xL.JOIN) === H.eAD.LOADING,
        ),
        { actions: ej, hasAccountLinkButton: eN } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            ex
                ? (e = {
                      label: W.intl.string(W.t.VJlc0S),
                      trackingArea: N.kY.JOIN,
                      submitting: e_,
                      onClick: () => {
                          v.Ay.join({
                              userId: t.author.id,
                              sessionId: T.session_id,
                              applicationId: T.application_id,
                              channelId: r.id,
                              messageId: t.id,
                              source: H.ThZ.MESSAGE_EMBED,
                              analyticsLocations: ei,
                              embedded: (0, F.A)(T, H.jUm.EMBEDDED),
                              remotePartyId: null != ef ? T.party?.id : void 0,
                          }),
                              (0, J.A)({
                                  type: H.UqL.JOIN,
                                  source: H.ThZ.MESSAGE_EMBED,
                                  userId: t.author.id,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  applicationId: T.application_id,
                                  partyId: T.party?.id,
                                  messageId: t.id,
                                  analyticsLocations: ei,
                                  remoteJoinPlatform: ef,
                              });
                      },
                  })
                : ev && es
                  ? ((e = {
                        label: W.intl.string(W.t.lw71Nf),
                        trackingArea: N.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            er({ analyticsLocations: ei });
                        },
                    }),
                    (n = !1))
                  : eE
                    ? ((e = {
                          label: W.intl.string(W.t.VJlc0S),
                          trackingArea: N.kY.SYNC,
                          onClick: () => {
                              null != T && _.OH(T, t.author.id);
                          },
                      }),
                      (n = !1))
                    : eI
                      ? (e = {
                            label: W.intl.string(W.t["hC/Zey"]),
                            trackingArea: N.kY.INVITE,
                            onClick: () => {
                                null != T &&
                                    C.A.sendActivityInvite({
                                        type: H.xL.JOIN,
                                        channelId: r.id,
                                        activity: T,
                                        location: H.ThZ.MESSAGE_EMBED,
                                    });
                            },
                            disabled: t.author.id === d,
                            disabledReason: t.author.id === d ? W.intl.string(W.t.IBl8ID) : void 0,
                        })
                      : eC
                        ? (e = {
                              label: W.intl.string(W.t.KC26NR),
                              trackingArea: N.kY.PLAY,
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
                            label: W.intl.string(W.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                er({ analyticsLocations: ei });
                            },
                            icon: I.A,
                            iconButton: !0,
                            buttonRef: ea,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [ex, eE, eI, eC, h, t.author.id, t.id, T, r.id, r.guild_id, ei, ef, d, e_, el, er, ea, es, ev]),
        eT = ej.some((e) => e.trackingArea === N.kY.CLOUD_PLAY);
    (0, $.A)(eT, ei);
    let ey = s.useMemo(
        () => (eC ? null : (0, l.jsx)(et, { presenceActivity: T, remoteJoinPlatform: ef, isGameLaunchable: ep })),
        [eC, T, ef, ep],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.h, {
                header: a,
                title: i,
                staticBannerSrc: g,
                hideBanner: X,
                onClickBanner: p,
                bannerAspectRatio: j.u.ACTIVITY,
                iconSrc: A ?? void 0,
                info: eg,
                actions: ej,
                primaryActionFirst: !0,
                onClickContent: p,
                trackingConfig: {
                    id: n.id,
                    linkType: Q.J.RICH_PRESENCE_INVITE,
                    onView: f,
                    referrerId: t.author.id,
                    guildId: r.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                    appEmbedState: Q.f.ACTIVE,
                },
                footer: ey,
            }),
            eN ? eo() : null,
        ],
    });
}
