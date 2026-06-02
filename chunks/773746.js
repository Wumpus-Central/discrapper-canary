n.d(t, { V: () => Q, A: () => $ }), n(321073);
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
    C = n(141628),
    I = n(308368),
    v = n(780907),
    _ = n(729937),
    j = n(572211),
    N = n(354287),
    T = n(693879),
    y = n(832384),
    S = n(207371),
    b = n(205184),
    L = n(689168),
    R = n(403362),
    k = n(456060),
    M = n(723702),
    P = n(850670),
    D = n(206589),
    w = n(125017),
    O = n(625248),
    U = n(55730),
    G = n(287613),
    V = n(659051),
    B = n(702631),
    H = n(652215),
    F = n(375708),
    Y = n(946255),
    z =
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
let W = [],
    K = (e) => {
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
    };
var J = n(878831),
    q = n(768349),
    Z = n(193018);
function X(e) {
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
                            ? W
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
                            case z.MOBILE:
                                return (0, l.jsx)(m.u, { size: "xxs", color: "currentColor" });
                            case z.ANDROID:
                                return (0, l.jsx)(K, { width: c.E.xxs, height: c.E.xxs, color: "currentColor" });
                            case z.IOS:
                                return (0, l.jsx)(h.z, { size: "xxs", color: "currentColor" });
                            case z.PLAYSTATION:
                                return (0, l.jsx)(g.X, { size: "xxs", color: "currentColor" });
                            case z.XBOX:
                                return (0, l.jsx)(p.Y, { size: "xxs", color: "currentColor" });
                            case z.VR:
                                return (0, l.jsx)(d.G, { size: "xxs", color: "currentColor" });
                            case z.DESKTOP:
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
                          return F.intl.string(F.t.aqN8U9);
                      case H.yTV.IOS:
                          return F.intl.string(F.t.CyQ5ia);
                      case H.yTV.ANDROID:
                          return F.intl.string(F.t.fMs6uW);
                      case H.yTV.XBOX:
                          return F.intl.string(F.t.o0hjdt);
                      case H.yTV.PS4:
                      case H.yTV.PS5:
                          return F.intl.string(F.t["R/1GpG"]);
                      default:
                          return;
                  }
              })(n)
            : F.intl.string(F.t["4dGUP0"]);
    return (0, l.jsxs)("div", {
        className: Z.qr,
        children: [
            (0, l.jsx)("div", {
                className: Z.E6,
                children: a.map((e, t) => (0, l.jsx)("div", { className: Z.F2, children: e }, t)),
            }),
            (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", className: Z.kB, children: o }),
        ],
    });
}
function Q(e) {
    let { activity: t, className: n } = e,
        i = t?.timestamps?.start ?? t?.created_at;
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: a()(Z.Ym, n),
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
function $(e) {
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
            hideParty: z,
            partyStatusElement: W,
            analyticsLocations: K,
            showAuthButton: $,
            requireAccountLink: ee,
            requireGameLaunch: et,
            canPromptAuth: en,
            startAuthorization: ei,
            accountLinkButtonRef: el,
            renderAccountLinkUpsell: es,
        } = e,
        er = (0, P.v)(t),
        ea = (0, b.s)(n.id),
        eo = s.useMemo(
            () =>
                ea.some((e) => (0, y.CZ)(e) === o.m.GLOBAL)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Y, { size: "xxs", color: "currentColor" }),
                              F.intl.string(F.t.TsWCdW),
                          ],
                      })
                    : null,
            [ea],
        ),
        ed = s.useMemo(
            () =>
                (0, l.jsxs)(x.E, {
                    variant: "text-xs/normal",
                    className: Z.dS,
                    color: "none",
                    lineClamp: 2,
                    children: [er ? (0, k.YC)(t, i, r, d, !1) : (0, l.jsx)(Q, { activity: T }), er ? null : eo],
                }),
            [er, t, i, r, d, T, eo],
        ),
        ec = s.useMemo(() => {
            let e = T?.details;
            return null == e || "" === e
                ? null
                : (0, l.jsx)(x.E, { variant: "text-xs/normal", color: "none", lineClamp: 1, children: e });
        }, [T?.details]),
        eu = s.useMemo(
            () => (0, l.jsxs)("div", { className: Z.pq, children: [ec, ed, z || er ? null : W] }),
            [ed, z, er, W, ec],
        ),
        em = !!c,
        eh = (0, S.x)(n),
        { canJoin: eg, remoteJoinPlatform: ep } = (function (e) {
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
            if (l.author.id === i || !(0, V.A)(t, l, s.id)) return { canJoin: !1, remoteJoinPlatform: null };
            let d = (0, w._)(t);
            if (!(0, G.A)(d) || (0, B.U)(d) || (0, D.w)(n, t) || (0, P.v)(l))
                return { canJoin: !1, remoteJoinPlatform: null };
            if (r && a) return { canJoin: !0, remoteJoinPlatform: null };
            if (l.activity?.type === H.xL.JOIN && null != t) {
                let e = (0, O.l)(t);
                if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
                if ((0, U.A)(t, H.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
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
            isFrameApplication: eh,
            isGameLaunchable: em,
        }),
        eA = !(
            null == T ||
            !(0, V.A)(T, t, n.id) ||
            !(0, U.A)(T, H.jUm.SYNC) ||
            !M.isPlatformEmbedded ||
            (0, D.w)(R, T)
        ),
        ex = (function (e, t, n, i) {
            if (
                t.author.id === i ||
                !(0, V.A)(e, t, n.id) ||
                t.activity?.type !== H.xL.JOIN_REQUEST ||
                !(0, U.A)(e, H.jUm.JOIN)
            )
                return !1;
            let l = (0, w._)(e);
            return !(!(0, G.A)(l) || (0, B.U)(l));
        })(T, t, n, d),
        ef = (0, D.w)(R, T),
        eE = null != T && (0, U.A)(T, H.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN),
        eC = (0, u.bG)(
            [L.A],
            () => null != T && null != T.application_id && L.A.getState(T.application_id, H.xL.JOIN) === H.eAD.LOADING,
        ),
        { actions: eI, hasAccountLinkButton: ev } = s.useMemo(() => {
            let e = null,
                n = !0,
                i = !1;
            eg && ee
                ? ((e = {
                      label: F.intl.string(F.t.lw71Nf),
                      trackingArea: N.kY.CONNECT_ACCOUNT,
                      onClick: () => {
                          ei({ analyticsLocations: K });
                      },
                  }),
                  (n = !1))
                : eg && et
                  ? ((e = {
                        label: F.intl.string(F.t["nIG+xx"]),
                        trackingArea: N.kY.PLAY,
                        onClick: () => {},
                        disabled: !0,
                    }),
                    (n = !1))
                  : eg
                    ? (e = {
                          label: F.intl.string(F.t.VJlc0S),
                          trackingArea: N.kY.JOIN,
                          submitting: eC,
                          onClick: () => {
                              v.Ay.join({
                                  userId: t.author.id,
                                  sessionId: T.session_id,
                                  applicationId: T.application_id,
                                  channelId: r.id,
                                  messageId: t.id,
                                  source: H.ThZ.MESSAGE_EMBED,
                                  analyticsLocations: K,
                                  embedded: (0, U.A)(T, H.jUm.EMBEDDED),
                                  remotePartyId: null != ep ? T.party?.id : void 0,
                              }),
                                  (0, Y.A)({
                                      type: H.UqL.JOIN,
                                      source: H.ThZ.MESSAGE_EMBED,
                                      userId: t.author.id,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      applicationId: T.application_id,
                                      partyId: T.party?.id,
                                      messageId: t.id,
                                      analyticsLocations: K,
                                      remoteJoinPlatform: ep,
                                  });
                          },
                      })
                    : eE && en
                      ? ((e = {
                            label: F.intl.string(F.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ei({ analyticsLocations: K });
                            },
                        }),
                        (n = !1))
                      : eA
                        ? ((e = {
                              label: F.intl.string(F.t.VJlc0S),
                              trackingArea: N.kY.SYNC,
                              onClick: () => {
                                  null != T && _.OH(T, t.author.id);
                              },
                          }),
                          (n = !1))
                        : ex
                          ? (e = {
                                label: F.intl.string(F.t["hC/Zey"]),
                                trackingArea: N.kY.INVITE,
                                onClick: () => {
                                    null != T &&
                                        I.A.sendActivityInvite({
                                            type: H.xL.JOIN,
                                            channelId: r.id,
                                            activity: T,
                                            location: H.ThZ.MESSAGE_EMBED,
                                        });
                                },
                                disabled: t.author.id === d,
                                disabledReason: t.author.id === d ? F.intl.string(F.t.IBl8ID) : void 0,
                            })
                          : ef
                            ? (e = {
                                  label: F.intl.string(F.t.KC26NR),
                                  trackingArea: N.kY.PLAY,
                                  onClick: () => {},
                                  disabled: !0,
                              })
                            : null != h && ((e = h), (n = !1));
            let l = [];
            return (
                null != e &&
                    (l.push(e),
                    $ &&
                        n &&
                        (l.push({
                            label: F.intl.string(F.t.lw71Nf),
                            trackingArea: N.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                ei({ analyticsLocations: K });
                            },
                            icon: C.A,
                            iconButton: !0,
                            buttonRef: el,
                        }),
                        (i = !0))),
                { actions: l, hasAccountLinkButton: i }
            );
        }, [eg, ee, et, eA, ex, ef, h, t.author.id, t.id, T, r.id, r.guild_id, K, ep, d, eC, $, ei, el, en, eE]),
        e_ = eI.some((e) => e.trackingArea === N.kY.CLOUD_PLAY);
    (0, J.A)(e_, K);
    let ej = s.useMemo(
        () => (ef ? null : (0, l.jsx)(X, { presenceActivity: T, remoteJoinPlatform: ep, isGameLaunchable: em })),
        [ef, T, ep, em],
    );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.h, {
                header: a,
                title: i,
                staticBannerSrc: g,
                onClickBanner: p,
                bannerAspectRatio: j.u.ACTIVITY,
                iconSrc: A ?? void 0,
                info: eu,
                actions: eI,
                primaryActionFirst: !0,
                onClickContent: p,
                trackingConfig: {
                    id: n.id,
                    linkType: q.J.RICH_PRESENCE_INVITE,
                    onView: f,
                    referrerId: t.author.id,
                    guildId: r.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                },
                footer: ej,
            }),
            ev ? es() : null,
        ],
    });
}
