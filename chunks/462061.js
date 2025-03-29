n.d(t, {
    T: () => R,
    Z: () => T
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    f = n(414910),
    m = n(501640),
    p = n(266910),
    h = n(352978),
    v = n(928518),
    b = n(518950),
    g = n(470956),
    E = n(314897),
    y = n(271383),
    O = n(131951),
    S = n(451478),
    x = n(5192),
    j = n(44136),
    w = (n(351483), n(249212)),
    Z = n(981631),
    C = n(65154),
    P = n(388032),
    N = n(454698);
let I = s.EFr.SIZE_80,
    _ = s.EFr.SIZE_40;
function R(e) {
    let { channelId: t, participant: n } = e;
    return (0, g.Eu)(t, n.id)
        ? (0, r.jsx)(s.ua7, {
              text: P.NW.string(P.t.HFwRpq),
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
                              className: N.interactive,
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
    let { participant: t, channel: n, inCall: l, width: s, paused: g, selected: R, fit: T, onVideoResize: A, blocked: D, ignored: k, noVideoRender: M = !1, pulseSpeakingIndicator: L = !1, inOverlayPopout: W = !1 } = e,
        U = O.Z.getVideoComponent(),
        F = (0, a.e7)([E.default], () => E.default.getId()),
        { user: z, streamId: V, speaking: Y } = t,
        H = z.id === F,
        K = (0, j.ZP)(t),
        G = (0, a.e7)([S.Z], () => S.Z.isFocused()),
        B = (0, a.e7)([v.Z], () => v.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, a.e7)([O.Z], () => null != z.id && O.Z.isLocalVideoDisabled(z.id, (0, f.Z)(t.type)), [z.id, t.type]),
        J = (0, a.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, z.id)),
        X = x.ZP.getName(n.getGuildId(), n.id, z) + (J ? ' '.concat(P.NW.string(P.t['pFO/Pj'])) : ''),
        Q = Y && (B || G),
        $ = s < 124 ? _ : I,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, b.Z)({
            user: z,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, a.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        er = (0, m.Z)(t),
        ei = {
            channel: n,
            selectedParticipant: en,
            user: z
        },
        el = i.useRef(ei);
    return (i.useEffect(() => {
        el.current = ei;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = el.current;
        e.isGuildStageVoice() && !K && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
    }, [K]),
    l && !q && !M && K && !R && null != U && O.Z.supports(C.AN.VIDEO))
        ? null != er
            ? (0, r.jsx)(w.Z, {
                  avError: er,
                  userId: t.id,
                  width: s,
                  selected: R
              })
            : (0, r.jsx)(
                  h.Z,
                  {
                      onResize: A,
                      wrapperClassName: N.videoWrapper,
                      className: N.content,
                      mirror: H,
                      streamId: V,
                      videoComponent: U,
                      fit: T,
                      paused: g,
                      videoSpinnerContext: z.id === F ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                      userId: z.id
                  },
                  V
              )
        : (0, r.jsx)('div', {
              className: o()(N.content, { [N.blockedAvatar]: D || k }),
              children: (0, r.jsx)(p.Z, {
                  'aria-label': X,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: z.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: L,
                  speaking: Y,
                  userId: z.id
              })
          });
}
