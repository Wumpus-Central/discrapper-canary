n.d(t, {
    T: () => C,
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
    w = n(388032),
    P = n(519417);
let R = s.EFr.SIZE_80,
    A = s.EFr.SIZE_40;
function C(e) {
    let { channelId: t, participant: n } = e;
    return (0, v.Eu)(t, n.id)
        ? (0, r.jsx)(s.ua7, {
              text: w.intl.string(w.t.HFwRpq),
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
    let { participant: t, channel: n, inCall: i, width: s, paused: v, selected: C, fit: T, onVideoResize: N, blocked: D, ignored: M, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: U = !1 } = e,
        F = y.Z.getVideoComponent(),
        V = (0, o.e7)([S.default], () => S.default.getId()),
        { user: Y, streamId: W, speaking: H } = t,
        z = Y.id === V,
        G = (0, _.ZP)(t),
        K = (0, o.e7)([O.Z], () => O.Z.isFocused()),
        B = (0, o.e7)([g.Z], () => g.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, o.e7)([y.Z], () => null != Y.id && y.Z.isLocalVideoDisabled(Y.id, (0, f.Z)(t.type)), [Y.id, t.type]),
        J = (0, o.e7)([b.ZP], () => b.ZP.isGuestOrLurker(n.guild_id, Y.id)),
        X = I.ZP.getName(n.getGuildId(), n.id, Y) + (J ? ' '.concat(w.intl.string(w.t['pFO/Pj'])) : ''),
        Q = H && (B || K),
        $ = s < 124 ? A : R,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, h.Z)({
            user: Y,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        er = (0, m.Z)(x.Yn.DEFAULT, t.user.id),
        el = {
            channel: n,
            selectedParticipant: en,
            user: Y
        },
        ei = l.useRef(el);
    return (l.useEffect(() => {
        ei.current = el;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = ei.current;
        e.isGuildStageVoice() && !G && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [G]),
    i && !q && !L && G && !C && null != F && y.Z.supports(x.AN.VIDEO))
        ? null != er
            ? (0, r.jsx)(j.Z, {
                  avError: er,
                  userId: t.id,
                  width: s,
                  selected: C
              })
            : (0, r.jsx)(
                  E.Z,
                  {
                      onResize: N,
                      wrapperClassName: P.videoWrapper,
                      className: P.content,
                      mirror: z,
                      streamId: W,
                      videoComponent: F,
                      fit: T,
                      paused: v,
                      videoSpinnerContext: Y.id === V ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      userId: Y.id
                  },
                  W
              )
        : (0, r.jsx)('div', {
              className: a()(P.content, { [P.blockedAvatar]: D || M }),
              children: (0, r.jsx)(p.Z, {
                  'aria-label': X,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: k,
                  speaking: H,
                  userId: Y.id
              })
          });
}
