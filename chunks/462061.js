n.d(t, {
    T: function () {
        return w;
    },
    Z: function () {
        return j;
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
    g = n(928518),
    h = n(518950),
    v = n(470956),
    S = n(314897),
    I = n(271383),
    _ = n(131951),
    x = n(451478),
    E = n(5192),
    C = n(44136),
    Z = n(981631),
    y = n(65154),
    b = n(388032),
    T = n(995544);
let A = o.AvatarSizes.SIZE_80,
    N = o.AvatarSizes.SIZE_40;
function w(e) {
    let { channelId: t, userId: n } = e;
    return (0, v.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: b.intl.string(b.t.HFwRpq),
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: T.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function j(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: v, selected: w, fit: j, onVideoResize: P, blocked: R, ignored: M, noVideoRender: O = !1, pulseSpeakingIndicator: L = !1 } = e,
        k = _.Z.getVideoComponent(),
        D = (0, s.e7)([S.default], () => S.default.getId()),
        { user: U, streamId: V, speaking: F } = t,
        W = U.id === D,
        B = (0, C.ZP)(t),
        G = (0, s.e7)([x.Z], () => x.Z.isFocused()),
        z = (0, s.e7)([g.Z], () => g.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        H = (0, s.e7)([_.Z], () => null != U.id && _.Z.isLocalVideoDisabled(U.id, (0, m.Z)(t.type)), [U.id, t.type]),
        Y = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, U.id)),
        J = E.ZP.getName(n.getGuildId(), n.id, U) + (Y ? ' '.concat(b.intl.string(b.t['pFO/Pj'])) : ''),
        q = F && (z || G),
        X = o < 124 ? N : A,
        { avatarSrc: K, avatarDecorationSrc: Q } = (0, h.Z)({
            user: U,
            guildId: n.guild_id,
            size: X,
            animateOnHover: !q
        }),
        $ = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        ee = {
            channel: n,
            selectedParticipant: $,
            user: U
        },
        et = l.useRef(ee);
    return (l.useEffect(() => {
        et.current = ee;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = et.current;
        e.isGuildStageVoice() && !B && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
    }, [B]),
    a && !H && !O && B && !w && null != k && _.Z.supports(y.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: P,
                  wrapperClassName: T.videoWrapper,
                  className: T.content,
                  mirror: W,
                  streamId: V,
                  videoComponent: k,
                  fit: j,
                  paused: v,
                  videoSpinnerContext: U.id === D ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: U.id
              },
              V
          )
        : (0, i.jsx)('div', {
              className: r()(T.content, { [T.blockedAvatar]: R || M }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': J,
                  src: K,
                  avatarDecoration: Q,
                  backgroundSrc: U.getAvatarURL(n.guild_id, 80),
                  size: X,
                  pulseSpeakingIndicator: L,
                  speaking: F,
                  userId: U.id
              })
          });
}
