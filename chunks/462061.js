n.d(t, {
    T: () => A,
    Z: () => T
});
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(475179),
    c = n(763520),
    d = n(358221),
    f = n(414910),
    m = n(965048),
    p = n(266910),
    E = n(352978),
    g = n(928518),
    h = n(518950),
    v = n(470956),
    S = n(314897),
    b = n(271383),
    y = n(131951),
    O = n(451478),
    I = n(5192),
    _ = n(44136),
    j = (n(351483), n(249212)),
    Z = n(981631),
    x = n(65154),
    N = n(388032),
    P = n(519417);
let w = s.EFr.SIZE_80,
    R = s.EFr.SIZE_40;
function A(e) {
    let { channelId: t, participant: n } = e;
    return (0, v.Eu)(t, n.id)
        ? (0, r.jsx)(s.ua7, {
              text: N.NW.string(N.t.HFwRpq),
              position: 'bottom',
              color: s.FGA.GREY,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      'div',
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (n = n =
                          {
                              className: P.interactive,
                              children: (0, r.jsx)(s.P4T, { color: s.TVs.colors.STATUS_WARNING_BACKGROUND })
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
                      t)
                  );
              }
          })
        : null;
}
function T(e) {
    let { participant: t, channel: n, inCall: i, width: s, paused: v, selected: A, fit: T, onVideoResize: C, blocked: D, ignored: M, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: U = !1 } = e,
        W = y.Z.getVideoComponent(),
        F = (0, o.e7)([S.default], () => S.default.getId()),
        { user: V, streamId: Y, speaking: H } = t,
        z = V.id === F,
        G = (0, _.ZP)(t),
        K = (0, o.e7)([O.Z], () => O.Z.isFocused()),
        B = (0, o.e7)([g.Z], () => g.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, o.e7)([y.Z], () => null != V.id && y.Z.isLocalVideoDisabled(V.id, (0, f.Z)(t.type)), [V.id, t.type]),
        J = (0, o.e7)([b.ZP], () => b.ZP.isGuestOrLurker(n.guild_id, V.id)),
        X = I.ZP.getName(n.getGuildId(), n.id, V) + (J ? ' '.concat(N.NW.string(N.t['pFO/Pj'])) : ''),
        Q = H && (B || K),
        $ = s < 124 ? R : w,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, h.Z)({
            user: V,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        er = (0, m.Z)(x.Yn.DEFAULT, t.user.id),
        el = {
            channel: n,
            selectedParticipant: en,
            user: V
        },
        ei = l.useRef(el);
    return (l.useEffect(() => {
        ei.current = el;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = ei.current;
        e.isGuildStageVoice() && !G && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [G]),
    i && !q && !L && G && !A && null != W && y.Z.supports(x.AN.VIDEO))
        ? null != er
            ? (0, r.jsx)(j.Z, {
                  avError: er,
                  userId: t.id,
                  width: s,
                  selected: A
              })
            : (0, r.jsx)(
                  E.Z,
                  {
                      onResize: C,
                      wrapperClassName: P.videoWrapper,
                      className: P.content,
                      mirror: z,
                      streamId: Y,
                      videoComponent: W,
                      fit: T,
                      paused: v,
                      videoSpinnerContext: V.id === F ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      userId: V.id
                  },
                  Y
              )
        : (0, r.jsx)('div', {
              className: a()(P.content, { [P.blockedAvatar]: D || M }),
              children: (0, r.jsx)(p.Z, {
                  'aria-label': X,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: V.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: k,
                  speaking: H,
                  userId: V.id
              })
          });
}
