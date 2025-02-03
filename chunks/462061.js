n.d(t, {
    T: () => w,
    Z: () => P
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
    h = n(928518),
    g = n(518950),
    v = n(470956),
    _ = n(314897),
    I = n(271383),
    S = n(131951),
    x = n(451478),
    E = n(5192),
    C = n(44136),
    Z = (n(351483), n(981631)),
    y = n(65154),
    b = n(388032),
    N = n(995544);
let T = o.EFr.SIZE_80,
    A = o.EFr.SIZE_40;
function w(e) {
    let { channelId: t, userId: n } = e;
    return (0, v.Eu)(t, n)
        ? (0, i.jsx)(o.ua7, {
              text: b.intl.string(b.t.HFwRpq),
              position: 'bottom',
              color: o.FGA.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: N.interactive,
                      children: (0, i.jsx)(o.P4T, { color: o.TVs.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function P(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: v, selected: w, fit: P, onVideoResize: j, blocked: R, ignored: k, noVideoRender: L = !1, pulseSpeakingIndicator: O = !1, inOverlayPopout: M = !1 } = e,
        D = S.Z.getVideoComponent(),
        U = (0, s.e7)([_.default], () => _.default.getId()),
        { user: F, streamId: z, speaking: V } = t,
        W = F.id === U,
        B = (0, C.ZP)(t),
        Y = (0, s.e7)([x.Z], () => x.Z.isFocused()),
        G = (0, s.e7)([h.Z], () => h.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        H = (0, s.e7)([S.Z], () => null != F.id && S.Z.isLocalVideoDisabled(F.id, (0, m.Z)(t.type)), [F.id, t.type]),
        J = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, F.id)),
        q = E.ZP.getName(n.getGuildId(), n.id, F) + (J ? ' '.concat(b.intl.string(b.t['pFO/Pj'])) : ''),
        X = V && (G || Y),
        K = o < 124 ? A : T,
        { avatarSrc: Q, avatarDecorationSrc: $ } = (0, g.Z)({
            user: F,
            guildId: n.guild_id,
            size: K,
            animateOnHover: !X
        }),
        ee = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        et = {
            channel: n,
            selectedParticipant: ee,
            user: F
        },
        en = l.useRef(et);
    return (l.useEffect(() => {
        en.current = et;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = en.current;
        e.isGuildStageVoice() && !B && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
    }, [B]),
    a && !H && !L && B && !w && null != D && S.Z.supports(y.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: j,
                  wrapperClassName: N.videoWrapper,
                  className: N.content,
                  mirror: W,
                  streamId: z,
                  videoComponent: D,
                  fit: P,
                  paused: v,
                  videoSpinnerContext: F.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: F.id
              },
              z
          )
        : (0, i.jsx)('div', {
              className: r()(N.content, { [N.blockedAvatar]: R || k }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': q,
                  src: Q,
                  avatarDecoration: $,
                  backgroundSrc: F.getAvatarURL(n.guild_id, 80),
                  size: K,
                  pulseSpeakingIndicator: O,
                  speaking: V,
                  userId: F.id
              })
          });
}
