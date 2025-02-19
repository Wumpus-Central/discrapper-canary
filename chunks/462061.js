n.d(t, {
    T: () => I,
    Z: () => R
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    f = n(414910),
    m = n(266910),
    p = n(352978),
    h = n(928518),
    v = n(518950),
    g = n(470956),
    b = n(314897),
    y = n(271383),
    E = n(131951),
    O = n(451478),
    S = n(5192),
    j = n(44136),
    x = (n(351483), n(981631)),
    Z = n(65154),
    w = n(388032),
    C = n(668595);
let P = s.EFr.SIZE_80,
    N = s.EFr.SIZE_40;
function I(e) {
    let { channelId: t, userId: n } = e;
    return (0, g.Eu)(t, n)
        ? (0, r.jsx)(s.ua7, {
              text: w.NW.string(w.t.HFwRpq),
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
                              className: C.interactive,
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
function R(e) {
    let { participant: t, channel: n, inCall: l, width: s, paused: g, selected: I, fit: R, onVideoResize: _, blocked: k, ignored: A, noVideoRender: T = !1, pulseSpeakingIndicator: D = !1, inOverlayPopout: M = !1 } = e,
        L = E.Z.getVideoComponent(),
        F = (0, o.e7)([b.default], () => b.default.getId()),
        { user: W, streamId: U, speaking: z } = t,
        V = W.id === F,
        H = (0, j.ZP)(t),
        Y = (0, o.e7)([O.Z], () => O.Z.isFocused()),
        B = (0, o.e7)([h.Z], () => h.Z.getWindowFocused(x.KJ3.CHANNEL_CALL_POPOUT)),
        K = (0, o.e7)([E.Z], () => null != W.id && E.Z.isLocalVideoDisabled(W.id, (0, f.Z)(t.type)), [W.id, t.type]),
        q = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, W.id)),
        G = S.ZP.getName(n.getGuildId(), n.id, W) + (q ? ' '.concat(w.NW.string(w.t['pFO/Pj'])) : ''),
        J = z && (B || Y),
        Q = s < 124 ? N : P,
        { avatarSrc: X, avatarDecorationSrc: $ } = (0, v.Z)({
            user: W,
            guildId: n.guild_id,
            size: Q,
            animateOnHover: !J
        }),
        ee = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        et = {
            channel: n,
            selectedParticipant: ee,
            user: W
        },
        en = i.useRef(et);
    return (i.useEffect(() => {
        en.current = et;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = en.current;
        e.isGuildStageVoice() && !H && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
    }, [H]),
    l && !K && !T && H && !I && null != L && E.Z.supports(Z.AN.VIDEO))
        ? (0, r.jsx)(
              p.Z,
              {
                  onResize: _,
                  wrapperClassName: C.videoWrapper,
                  className: C.content,
                  mirror: V,
                  streamId: U,
                  videoComponent: L,
                  fit: R,
                  paused: g,
                  videoSpinnerContext: W.id === F ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: W.id
              },
              U
          )
        : (0, r.jsx)('div', {
              className: a()(C.content, { [C.blockedAvatar]: k || A }),
              children: (0, r.jsx)(m.Z, {
                  'aria-label': G,
                  src: X,
                  avatarDecoration: $,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  size: Q,
                  pulseSpeakingIndicator: D,
                  speaking: z,
                  userId: W.id
              })
          });
}
