n.d(t, {
    T: () => w,
    Z: () => A
});
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(475179),
    c = n(763520),
    d = n(358221),
    m = n(414910),
    f = n(266910),
    h = n(352978),
    p = n(928518),
    v = n(518950),
    g = n(470956),
    E = n(314897),
    x = n(271383),
    Z = n(131951),
    S = n(451478),
    C = n(5192),
    b = n(44136),
    I = (n(351483), n(981631)),
    _ = n(65154),
    R = n(388032),
    y = n(707945);
let j = o.EFr.SIZE_80,
    N = o.EFr.SIZE_40;
function w(e) {
    let { channelId: t, userId: n } = e;
    return (0, g.Eu)(t, n)
        ? (0, l.jsx)(o.ua7, {
              text: R.intl.string(R.t.HFwRpq),
              position: 'bottom',
              color: o.FGA.GREY,
              children: (e) =>
                  (0, l.jsx)('div', {
                      ...e,
                      className: y.interactive,
                      children: (0, l.jsx)(o.P4T, { color: o.TVs.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function A(e) {
    let { participant: t, channel: n, inCall: r, width: o, paused: g, selected: w, fit: A, onVideoResize: T, blocked: k, ignored: O, noVideoRender: P = !1, pulseSpeakingIndicator: M = !1, inOverlayPopout: D = !1 } = e,
        L = Z.Z.getVideoComponent(),
        F = (0, s.e7)([E.default], () => E.default.getId()),
        { user: U, streamId: z, speaking: V } = t,
        W = U.id === F,
        Y = (0, b.ZP)(t),
        H = (0, s.e7)([S.Z], () => S.Z.isFocused()),
        B = (0, s.e7)([p.Z], () => p.Z.getWindowFocused(I.KJ3.CHANNEL_CALL_POPOUT)),
        K = (0, s.e7)([Z.Z], () => null != U.id && Z.Z.isLocalVideoDisabled(U.id, (0, m.Z)(t.type)), [U.id, t.type]),
        q = (0, s.e7)([x.ZP], () => x.ZP.isGuestOrLurker(n.guild_id, U.id)),
        G = C.ZP.getName(n.getGuildId(), n.id, U) + (q ? ' '.concat(R.intl.string(R.t['pFO/Pj'])) : ''),
        J = V && (B || H),
        Q = o < 124 ? N : j,
        { avatarSrc: X, avatarDecorationSrc: $ } = (0, v.Z)({
            user: U,
            guildId: n.guild_id,
            size: Q,
            animateOnHover: !J
        }),
        ee = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        et = {
            channel: n,
            selectedParticipant: ee,
            user: U
        },
        en = i.useRef(et);
    return (i.useEffect(() => {
        en.current = et;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = en.current;
        e.isGuildStageVoice() && !Y && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [Y]),
    r && !K && !P && Y && !w && null != L && Z.Z.supports(_.AN.VIDEO))
        ? (0, l.jsx)(
              h.Z,
              {
                  onResize: T,
                  wrapperClassName: y.videoWrapper,
                  className: y.content,
                  mirror: W,
                  streamId: z,
                  videoComponent: L,
                  fit: A,
                  paused: g,
                  videoSpinnerContext: U.id === F ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                  userId: U.id
              },
              z
          )
        : (0, l.jsx)('div', {
              className: a()(y.content, { [y.blockedAvatar]: k || O }),
              children: (0, l.jsx)(f.Z, {
                  'aria-label': G,
                  src: X,
                  avatarDecoration: $,
                  backgroundSrc: U.getAvatarURL(n.guild_id, 80),
                  size: Q,
                  pulseSpeakingIndicator: M,
                  speaking: V,
                  userId: U.id
              })
          });
}
