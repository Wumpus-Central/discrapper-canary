n.d(t, {
    T: () => A,
    Z: () => C
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
    g = n(352978),
    E = n(928518),
    h = n(518950),
    v = n(470956),
    b = n(314897),
    S = n(271383),
    y = n(131951),
    O = n(451478),
    Z = n(5192),
    I = n(44136),
    j = (n(351483), n(249212)),
    x = n(981631),
    N = n(65154),
    _ = n(388032),
    w = n(519417);
let P = s.EFr.SIZE_80,
    R = s.EFr.SIZE_40;
function A(e) {
    let { channelId: t, participant: n } = e;
    return (0, v.Eu)(t, n.id)
        ? (0, r.jsx)(s.ua7, {
              text: _.NW.string(_.t.HFwRpq),
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
                              className: w.interactive,
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
function C(e) {
    let { participant: t, channel: n, inCall: i, width: s, paused: v, selected: A, fit: C, onVideoResize: T, blocked: D, ignored: M, noVideoRender: k = !1, pulseSpeakingIndicator: L = !1, inOverlayPopout: U = !1 } = e,
        F = y.Z.getVideoComponent(),
        V = (0, o.e7)([b.default], () => b.default.getId()),
        { user: W, streamId: Y, speaking: z } = t,
        H = W.id === V,
        G = (0, I.ZP)(t),
        B = (0, o.e7)([O.Z], () => O.Z.isFocused()),
        K = (0, o.e7)([E.Z], () => E.Z.getWindowFocused(x.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, o.e7)([y.Z], () => null != W.id && y.Z.isLocalVideoDisabled(W.id, (0, f.Z)(t.type)), [W.id, t.type]),
        J = (0, o.e7)([S.ZP], () => S.ZP.isGuestOrLurker(n.guild_id, W.id)),
        X = Z.ZP.getName(n.getGuildId(), n.id, W) + (J ? ' '.concat(_.NW.string(_.t['pFO/Pj'])) : ''),
        Q = z && (K || B),
        $ = s < 124 ? R : P,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, h.Z)({
            user: W,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        er = (0, m.Z)(N.Yn.DEFAULT, t.user.id),
        el = {
            channel: n,
            selectedParticipant: en,
            user: W
        },
        ei = l.useRef(el);
    return (l.useEffect(() => {
        ei.current = el;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = ei.current;
        e.isGuildStageVoice() && !G && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [G]),
    i && !q && !k && G && !A && null != F && y.Z.supports(N.AN.VIDEO))
        ? null != er
            ? (0, r.jsx)(j.Z, {
                  avError: er,
                  userId: t.id,
                  width: s,
                  selected: A
              })
            : (0, r.jsx)(
                  g.Z,
                  {
                      onResize: T,
                      wrapperClassName: w.videoWrapper,
                      className: w.content,
                      mirror: H,
                      streamId: Y,
                      videoComponent: F,
                      fit: C,
                      paused: v,
                      videoSpinnerContext: W.id === V ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      userId: W.id
                  },
                  Y
              )
        : (0, r.jsx)('div', {
              className: a()(w.content, { [w.blockedAvatar]: D || M }),
              children: (0, r.jsx)(p.Z, {
                  'aria-label': X,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: L,
                  speaking: z,
                  userId: W.id
              })
          });
}
