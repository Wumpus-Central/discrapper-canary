n.d(t, {
    T: function () {
        return P;
    },
    Z: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    m = n(414910),
    f = n(266910),
    p = n(352978),
    h = n(388627),
    g = n(928518),
    v = n(518950),
    S = n(470956),
    I = n(314897),
    _ = n(271383),
    x = n(131951),
    E = n(451478),
    C = n(5192),
    y = n(44136),
    Z = n(351483),
    b = n(981631),
    T = n(65154),
    N = n(388032),
    A = n(995544);
let j = o.AvatarSizes.SIZE_80,
    w = o.AvatarSizes.SIZE_40;
function P(e) {
    let { channelId: t, userId: n } = e;
    return (0, S.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: N.intl.string(N.t.HFwRpq),
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: A.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function R(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: S, selected: P, fit: R, onVideoResize: M, blocked: O, ignored: L, noVideoRender: k = !1, pulseSpeakingIndicator: D = !1, inOverlayPopout: U = !1 } = e,
        V = x.Z.getVideoComponent(),
        F = (0, s.e7)([I.default], () => I.default.getId()),
        { user: B, streamId: W, speaking: z } = t,
        G = B.id === F,
        H = (0, y.ZP)(t),
        Y = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        J = (0, s.e7)([g.Z], () => g.Z.getWindowFocused(b.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, s.e7)([x.Z], () => null != B.id && x.Z.isLocalVideoDisabled(B.id, (0, m.Z)(t.type)), [B.id, t.type]),
        X = (0, s.e7)([_.ZP], () => _.ZP.isGuestOrLurker(n.guild_id, B.id)),
        K = C.ZP.getName(n.getGuildId(), n.id, B) + (X ? ' '.concat(N.intl.string(N.t['pFO/Pj'])) : ''),
        Q = z && (J || Y),
        $ = o < 124 ? w : j,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, v.Z)({
            user: B,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        ei = {
            channel: n,
            selectedParticipant: en,
            user: B
        },
        el = l.useRef(ei);
    l.useEffect(() => {
        el.current = ei;
    }),
        l.useEffect(() => {
            let { channel: e, selectedParticipant: t, user: n } = el.current;
            e.isGuildStageVoice() && !H && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
        }, [H]);
    let ea = (0, h.x0)();
    return a && !q && !k && H && !P && null != V && x.Z.supports(T.AN.VIDEO)
        ? ea && !U
            ? (0, i.jsx)(Z.Z, {
                  selected: P,
                  width: o
              })
            : (0, i.jsx)(
                  p.Z,
                  {
                      onResize: M,
                      wrapperClassName: A.videoWrapper,
                      className: A.content,
                      mirror: G,
                      streamId: W,
                      videoComponent: V,
                      fit: R,
                      paused: S,
                      videoSpinnerContext: B.id === F ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                      userId: B.id
                  },
                  W
              )
        : (0, i.jsx)('div', {
              className: r()(A.content, { [A.blockedAvatar]: O || L }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': K,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: B.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: D,
                  speaking: z,
                  userId: B.id
              })
          });
}
