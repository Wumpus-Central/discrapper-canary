n.d(t, {
    T: () => T,
    Z: () => D
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
    m = n(502053),
    p = n(965048),
    E = n(266910),
    g = n(352978),
    v = n(928518),
    h = n(518950),
    S = n(470956),
    b = n(314897),
    y = n(271383),
    O = n(131951),
    Z = n(451478),
    j = n(5192),
    I = n(44136),
    _ = (n(351483), n(249212)),
    P = n(853476),
    w = n(981631),
    x = n(65154),
    A = n(388032),
    R = n(519417);
let N = s.EFr.SIZE_80,
    C = s.EFr.SIZE_40;
function T(e) {
    let { channelId: t, participant: n } = e;
    return (0, S.Eu)(t, n.id)
        ? (0, r.jsx)(s.ua7, {
              text: A.intl.string(A.t.HFwRpq),
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
                              className: R.interactive,
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
        : (0, r.jsx)(P.Z, { userId: n.user.id });
}
function D(e) {
    let { participant: t, channel: n, inCall: i, width: s, selected: S, fit: P, onVideoResize: T, blocked: D, ignored: M, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: U = !1, paused: F = !1 } = e,
        V = O.Z.getVideoComponent(),
        W = (0, o.e7)([b.default], () => b.default.getId()),
        { user: Y, streamId: H, speaking: z } = t,
        G = Y.id === W,
        K = (0, I.ZP)(t),
        B = (0, o.e7)([Z.Z], () => Z.Z.isFocused()),
        q = (0, o.e7)([v.Z], () => v.Z.getWindowFocused(w.KJ3.CHANNEL_CALL_POPOUT)),
        J = (0, o.e7)([O.Z], () => null != Y.id && O.Z.isLocalVideoDisabled(Y.id, (0, f.Z)(t.type)), [Y.id, t.type]),
        X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, Y.id)),
        Q = j.ZP.getName(n.getGuildId(), n.id, Y) + (X ? ' '.concat(A.intl.string(A.t['pFO/Pj'])) : ''),
        $ = z && (q || B),
        ee = s < 124 ? C : N,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, h.Z)({
            user: Y,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$
        }),
        er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        el = (0, p.Z)(x.Yn.DEFAULT, t.user.id),
        ei = (0, m.Z)(t.user.id),
        ea = {
            channel: n,
            selectedParticipant: er,
            user: Y
        },
        eo = l.useRef(ea);
    return (l.useEffect(() => {
        eo.current = ea;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !K && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [K]),
    i && !J && !L && K && !S && null != V && O.Z.supports(x.AN.VIDEO))
        ? null != el && null == ei
            ? (0, r.jsx)(_.Z, {
                  avError: el,
                  userId: t.id,
                  width: s,
                  selected: S
              })
            : (0, r.jsx)(
                  g.Z,
                  {
                      onResize: T,
                      wrapperClassName: R.videoWrapper,
                      className: R.content,
                      mirror: G,
                      streamId: H,
                      videoComponent: V,
                      fit: P,
                      videoSpinnerContext: Y.id === W ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      paused: F,
                      userId: Y.id
                  },
                  H
              )
        : (0, r.jsx)('div', {
              className: a()(R.content, { [R.blockedAvatar]: D || M }),
              children: (0, r.jsx)(E.Z, {
                  'aria-label': Q,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: k,
                  speaking: z,
                  userId: Y.id
              })
          });
}
