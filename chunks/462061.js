n.d(t, {
    T: () => j,
    Z: () => w
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
    Z = n(271383),
    x = n(131951),
    S = n(451478),
    C = n(5192),
    b = n(44136),
    I = (n(351483), n(981631)),
    _ = n(65154),
    N = n(388032),
    R = n(995544);
let y = o.EFr.SIZE_80,
    T = o.EFr.SIZE_40;
function j(e) {
    let { channelId: t, userId: n } = e;
    return (0, g.Eu)(t, n)
        ? (0, l.jsx)(o.ua7, {
              text: N.intl.string(N.t.HFwRpq),
              position: 'bottom',
              color: o.FGA.GREY,
              children: (e) =>
                  (0, l.jsx)('div', {
                      ...e,
                      className: R.interactive,
                      children: (0, l.jsx)(o.P4T, { color: o.TVs.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function w(e) {
    let { participant: t, channel: n, inCall: r, width: o, paused: g, selected: j, fit: w, onVideoResize: A, blocked: O, ignored: P, noVideoRender: k = !1, pulseSpeakingIndicator: M = !1, inOverlayPopout: D = !1 } = e,
        L = x.Z.getVideoComponent(),
        F = (0, s.e7)([E.default], () => E.default.getId()),
        { user: U, streamId: V, speaking: z } = t,
        W = U.id === F,
        Y = (0, b.ZP)(t),
        H = (0, s.e7)([S.Z], () => S.Z.isFocused()),
        B = (0, s.e7)([p.Z], () => p.Z.getWindowFocused(I.KJ3.CHANNEL_CALL_POPOUT)),
        K = (0, s.e7)([x.Z], () => null != U.id && x.Z.isLocalVideoDisabled(U.id, (0, m.Z)(t.type)), [U.id, t.type]),
        G = (0, s.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n.guild_id, U.id)),
        q = C.ZP.getName(n.getGuildId(), n.id, U) + (G ? ' '.concat(N.intl.string(N.t['pFO/Pj'])) : ''),
        J = z && (B || H),
        Q = o < 124 ? T : y,
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
    r && !K && !k && Y && !j && null != L && x.Z.supports(_.AN.VIDEO))
        ? (0, l.jsx)(
              h.Z,
              {
                  onResize: A,
                  wrapperClassName: R.videoWrapper,
                  className: R.content,
                  mirror: W,
                  streamId: V,
                  videoComponent: L,
                  fit: w,
                  paused: g,
                  videoSpinnerContext: U.id === F ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
                  userId: U.id
              },
              V
          )
        : (0, l.jsx)('div', {
              className: a()(R.content, { [R.blockedAvatar]: O || P }),
              children: (0, l.jsx)(f.Z, {
                  'aria-label': q,
                  src: X,
                  avatarDecoration: $,
                  backgroundSrc: U.getAvatarURL(n.guild_id, 80),
                  size: Q,
                  pulseSpeakingIndicator: M,
                  speaking: z,
                  userId: U.id
              })
          });
}
