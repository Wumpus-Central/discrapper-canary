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
    r = n(120356),
    a = n.n(r),
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
    Z = n(44136),
    y = n(351483),
    b = n(981631),
    T = n(65154),
    A = n(388032),
    N = n(474316);
let w = o.AvatarSizes.SIZE_80,
    j = o.AvatarSizes.SIZE_40;
function P(e) {
    let { channelId: t, userId: n } = e;
    return (0, S.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: A.intl.string(A.t.HFwRpq),
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: N.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function R(e) {
    let { participant: t, channel: n, inCall: r, width: o, paused: S, selected: P, fit: R, onVideoResize: M, blocked: O, ignored: L, noVideoRender: k = !1, pulseSpeakingIndicator: D = !1, inOverlayPopout: U = !1 } = e,
        V = x.Z.getVideoComponent(),
        F = (0, s.e7)([I.default], () => I.default.getId()),
        { user: W, streamId: G, speaking: B } = t,
        z = W.id === F,
        H = (0, Z.ZP)(t),
        Y = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        J = (0, s.e7)([g.Z], () => g.Z.getWindowFocused(b.KJ3.CHANNEL_CALL_POPOUT)),
        q = (0, s.e7)([x.Z], () => null != W.id && x.Z.isLocalVideoDisabled(W.id, (0, m.Z)(t.type)), [W.id, t.type]),
        X = (0, s.e7)([_.ZP], () => _.ZP.isGuestOrLurker(n.guild_id, W.id)),
        K = C.ZP.getName(n.getGuildId(), n.id, W) + (X ? ' '.concat(A.intl.string(A.t['pFO/Pj'])) : ''),
        Q = B && (J || Y),
        $ = o < 124 ? j : w,
        { avatarSrc: ee, avatarDecorationSrc: et } = (0, v.Z)({
            user: W,
            guildId: n.guild_id,
            size: $,
            animateOnHover: !Q
        }),
        en = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        ei = {
            channel: n,
            selectedParticipant: en,
            user: W
        },
        el = l.useRef(ei);
    l.useEffect(() => {
        el.current = ei;
    }),
        l.useEffect(() => {
            let { channel: e, selectedParticipant: t, user: n } = el.current;
            e.isGuildStageVoice() && !H && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
        }, [H]);
    let er = (0, h.x0)();
    return r && !q && !k && H && !P && null != V && x.Z.supports(T.AN.VIDEO)
        ? er && !U
            ? (0, i.jsx)(y.Z, {
                  selected: P,
                  width: o
              })
            : (0, i.jsx)(
                  p.Z,
                  {
                      onResize: M,
                      wrapperClassName: N.videoWrapper,
                      className: N.content,
                      mirror: z,
                      streamId: G,
                      videoComponent: V,
                      fit: R,
                      paused: S,
                      videoSpinnerContext: W.id === F ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                      userId: W.id
                  },
                  G
              )
        : (0, i.jsx)('div', {
              className: a()(N.content, { [N.blockedAvatar]: O || L }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': K,
                  src: ee,
                  avatarDecoration: et,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  size: $,
                  pulseSpeakingIndicator: D,
                  speaking: B,
                  userId: W.id
              })
          });
}
