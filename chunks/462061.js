n.d(t, {
    T: () => x,
    Z: () => D
});
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    u = n(442837),
    o = n(481060),
    s = n(475179),
    c = n(763520),
    d = n(358221),
    f = n(414910),
    m = n(502053),
    p = n(965048),
    E = n(266910),
    g = n(352978),
    h = n(928518),
    S = n(518950),
    O = n(470956),
    v = n(314897),
    b = n(271383),
    I = n(131951),
    _ = n(451478),
    y = n(5192),
    Z = n(44136),
    A = (n(351483), n(249212)),
    N = n(853476),
    R = n(981631),
    P = n(65154),
    T = n(388032),
    j = n(519417);
let C = o.EFr.SIZE_80,
    w = o.EFr.SIZE_40;
function x(e) {
    let { channelId: t, participant: n } = e;
    return (0, O.Eu)(t, n.id)
        ? (0, r.jsx)(o.ua7, {
              text: T.intl.string(T.t.HFwRpq),
              position: 'bottom',
              color: o.FGA.GREY,
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
                              className: j.interactive,
                              children: (0, r.jsx)(o.P4T, { color: o.TVs.colors.STATUS_WARNING_BACKGROUND })
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
        : (0, r.jsx)(N.Z, { userId: n.user.id });
}
function D(e) {
    let { participant: t, channel: n, inCall: i, width: o, selected: O, fit: N, onVideoResize: x, blocked: D, ignored: M, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: U = !1, paused: V = !1 } = e,
        F = I.Z.getVideoComponent(),
        G = (0, u.e7)([v.default], () => v.default.getId()),
        { user: H, streamId: W, speaking: B } = t,
        Y = H.id === G,
        z = (0, Z.ZP)(t),
        K = (0, u.e7)([_.Z], () => _.Z.isFocused()),
        q = (0, u.e7)([h.Z], () => h.Z.getWindowFocused(R.KJ3.CHANNEL_CALL_POPOUT)),
        J = (0, u.e7)([I.Z], () => null != H.id && I.Z.isLocalVideoDisabled(H.id, (0, f.Z)(t.type)), [H.id, t.type]),
        X = (0, u.e7)([b.ZP], () => b.ZP.isGuestOrLurker(n.guild_id, H.id)),
        Q = y.ZP.getName(n.getGuildId(), n.id, H) + (X ? ' '.concat(T.intl.string(T.t['pFO/Pj'])) : ''),
        $ = B && (q || K),
        ee = o < 124 ? w : C,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, S.Z)({
            user: H,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$
        }),
        er = (0, u.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        el = (0, p.Z)(P.Yn.DEFAULT, t.user.id),
        ei = (0, m.Z)(t.user.id),
        ea = {
            channel: n,
            selectedParticipant: er,
            user: H
        },
        eu = l.useRef(ea);
    return (l.useEffect(() => {
        eu.current = ea;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eu.current;
        e.isGuildStageVoice() && !z && (null == t ? void 0 : t.id) === n.id && s.Z.selectParticipant(e.id, null);
    }, [z]),
    i && !J && !L && z && !O && null != F && I.Z.supports(P.AN.VIDEO))
        ? null != el && null == ei
            ? (0, r.jsx)(A.Z, {
                  avError: el,
                  userId: t.id,
                  width: o,
                  selected: O
              })
            : (0, r.jsx)(
                  g.Z,
                  {
                      onResize: x,
                      wrapperClassName: j.videoWrapper,
                      className: j.content,
                      mirror: Y,
                      streamId: W,
                      videoComponent: F,
                      fit: N,
                      videoSpinnerContext: H.id === G ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      paused: V,
                      userId: H.id
                  },
                  W
              )
        : (0, r.jsx)('div', {
              className: a()(j.content, { [j.blockedAvatar]: D || M }),
              children: (0, r.jsx)(E.Z, {
                  'aria-label': Q,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: k,
                  speaking: B,
                  userId: H.id
              })
          });
}
