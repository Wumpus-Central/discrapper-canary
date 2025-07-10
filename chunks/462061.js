n.d(t, {
    T: () => T,
    Z: () => D
});
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    u = n(481060),
    s = n(475179),
    c = n(763520),
    d = n(358221),
    f = n(414910),
    p = n(502053),
    m = n(965048),
    g = n(266910),
    E = n(352978),
    h = n(928518),
    v = n(518950),
    S = n(470956),
    b = n(314897),
    O = n(271383),
    y = n(131951),
    Z = n(451478),
    j = n(5192),
    _ = n(44136),
    I = (n(351483), n(249212)),
    w = n(853476),
    P = n(981631),
    A = n(65154),
    x = n(388032),
    R = n(519417);
let N = u.EFr.SIZE_80,
    C = u.EFr.SIZE_40;
function T(e) {
    let { channelId: t, participant: n } = e;
    return (0, S.Eu)(t, n.id)
        ? (0, r.jsx)(u.ua7, {
              text: x.intl.string(x.t.HFwRpq),
              position: 'bottom',
              color: u.FGA.GREY,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      'div',
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      ((r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r));
                                  }));
                          }
                          return e;
                      })({}, e)),
                      (n = n =
                          {
                              className: R.interactive,
                              children: (0, r.jsx)(u.P4T, { color: u.TVs.colors.STATUS_WARNING_BACKGROUND })
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
        : (0, r.jsx)(w.Z, { userId: n.user.id });
}
function D(e) {
    let { participant: t, channel: n, inCall: i, width: u, selected: S, fit: w, onVideoResize: T, blocked: D, ignored: M, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: U = !1, paused: F = !1 } = e,
        V = y.Z.getVideoComponent(),
        W = (0, o.e7)([b.default], () => b.default.getId()),
        { user: H, streamId: Y, speaking: z } = t,
        G = H.id === W,
        K = (0, _.ZP)(t),
        B = (0, o.e7)([Z.Z], () => Z.Z.isFocused()),
        q = (0, o.e7)([h.Z], () => h.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)),
        J = (0, o.e7)([y.Z], () => null != H.id && y.Z.isLocalVideoDisabled(H.id, (0, f.Z)(t.type)), [H.id, t.type]),
        X = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, H.id)),
        Q = j.ZP.getName(n.getGuildId(), n.id, H) + (X ? ' '.concat(x.intl.string(x.t['pFO/Pj'])) : ''),
        $ = z && (q || B),
        ee = u < 124 ? C : N,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, v.Z)({
            userId: H.id,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$
        }),
        er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        el = (0, m.Z)(A.Yn.DEFAULT, t.user.id),
        ei = (0, p.Z)(t.user.id),
        ea = {
            channel: n,
            selectedParticipant: er,
            user: H
        },
        eo = l.useRef(ea);
    return (l.useEffect(() => {
        eo.current = ea;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !K && (null == t ? void 0 : t.id) === n.id && s.Z.selectParticipant(e.id, null);
    }, [K]),
    i && !J && !L && K && !S && null != V && y.Z.supports(A.AN.VIDEO))
        ? null != el && null == ei
            ? (0, r.jsx)(I.Z, {
                  avError: el,
                  userId: t.id,
                  width: u,
                  selected: S
              })
            : (0, r.jsx)(
                  E.Z,
                  {
                      onResize: T,
                      wrapperClassName: R.videoWrapper,
                      className: R.content,
                      mirror: G,
                      streamId: Y,
                      videoComponent: V,
                      fit: w,
                      videoSpinnerContext: H.id === W ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                      paused: F,
                      userId: H.id
                  },
                  Y
              )
        : (0, r.jsx)('div', {
              className: a()(R.content, { [R.blockedAvatar]: D || M }),
              children: (0, r.jsx)(g.Z, {
                  'aria-label': Q,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: k,
                  speaking: z,
                  userId: H.id
              })
          });
}
