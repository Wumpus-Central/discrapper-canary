n.d(t, {
    T: () => N,
    Z: () => D,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(475179),
    u = n(763520),
    d = n(358221),
    f = n(414910),
    p = n(502053),
    m = n(965048),
    _ = n(266910),
    g = n(352978),
    b = n(928518),
    v = n(518950),
    E = n(470956),
    h = n(314897),
    y = n(271383),
    S = n(131951),
    O = n(451478),
    I = n(5192),
    w = n(44136),
    j = (n(351483), n(249212)),
    C = n(853476),
    P = n(981631),
    Z = n(65154),
    x = n(388032),
    A = n(400872);
let T = c.EFr.SIZE_80,
    R = c.EFr.SIZE_40;
function N(e) {
    let { channelId: t, participant: n } = e;
    return (0, E.Eu)(t, n.id)
        ? (0, r.jsx)(c.ua7, {
              text: x.intl.string(x.t.HFwRpq),
              position: "bottom",
              color: c.FGA.GREY,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      "div",
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (n = n =
                          {
                              className: A.interactive,
                              children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.STATUS_WARNING_BACKGROUND }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t),
                  );
              },
          })
        : (0, r.jsx)(C.Z, { userId: n.user.id });
}
function D(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: c,
            selected: E,
            fit: C,
            onVideoResize: N,
            blocked: D,
            ignored: M,
            noVideoRender: k = !1,
            pulseSpeakingIndicator: F = !1,
            inOverlayPopout: L = !1,
            paused: V = !1,
        } = e,
        U = S.Z.getVideoComponent(),
        W = (0, o.e7)([h.default], () => h.default.getId()),
        { user: H, streamId: B, speaking: z } = t,
        Y = H.id === W,
        q = (0, w.ZP)(t),
        G = (0, o.e7)([O.Z], () => O.Z.isFocused()),
        K = (0, o.e7)([b.Z], () => b.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)),
        Q = (0, o.e7)([S.Z], () => null != H.id && S.Z.isLocalVideoDisabled(H.id, (0, f.Z)(t.type)), [H.id, t.type]),
        X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, H.id)),
        J = I.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(x.intl.string(x.t["pFO/Pj"])) : ""),
        $ = z && (K || G),
        ee = c < 124 ? R : T,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, v.Z)({
            userId: H.id,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$,
        }),
        er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        ei = (0, m.Z)(Z.Yn.DEFAULT, t.user.id),
        el = (0, p.Z)(t.user.id),
        ea = {
            channel: n,
            selectedParticipant: er,
            user: H,
        },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !q && (null == t ? void 0 : t.id) === n.id && s.Z.selectParticipant(e.id, null);
    }, [q]),
    l && !Q && !k && q && !E && null != U && S.Z.supports(Z.AN.VIDEO))
        ? null != ei && null == el
            ? (0, r.jsx)(j.Z, {
                  avError: ei,
                  userId: t.id,
                  width: c,
                  selected: E,
              })
            : (0, r.jsx)(
                  g.Z,
                  {
                      onResize: N,
                      wrapperClassName: A.videoWrapper,
                      className: A.content,
                      mirror: Y,
                      streamId: B,
                      videoComponent: U,
                      fit: C,
                      videoSpinnerContext: H.id === W ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                      paused: V,
                      userId: H.id,
                  },
                  B,
              )
        : (0, r.jsx)("div", {
              className: a()(A.content, { [A.blockedAvatar]: D || M }),
              children: (0, r.jsx)(_.Z, {
                  "aria-label": J,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: F,
                  speaking: z,
                  userId: H.id,
              }),
          });
}
