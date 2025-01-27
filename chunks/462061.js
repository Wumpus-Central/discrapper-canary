n.d(t, {
    T: function () {
        return w;
    },
    Z: function () {
        return P;
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
    h = n(928518),
    g = n(518950),
    v = n(470956),
    S = n(314897),
    I = n(271383),
    x = n(131951),
    _ = n(451478),
    C = n(5192),
    b = n(44136),
    E = n(351483),
    y = n(981631),
    Z = n(65154),
    T = n(388032),
    N = n(995544);
let A = o.AvatarSizes.SIZE_80,
    j = o.AvatarSizes.SIZE_40;
function w(e) {
    let { channelId: t, userId: n } = e;
    return (0, v.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: T.intl.string(T.t.HFwRpq),
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
function P(e) {
    let { participant: t, channel: n, inCall: r, width: o, paused: v, selected: E, fit: w, onVideoResize: P, blocked: R, ignored: O, noVideoRender: M = !1, pulseSpeakingIndicator: k = !1, inOverlayPopout: L = !1 } = e,
        D = x.Z.getVideoComponent(),
        U = (0, s.e7)([S.default], () => S.default.getId()),
        { user: V, streamId: F, speaking: z } = t,
        B = V.id === U,
        W = (0, b.ZP)(t),
        G = (0, s.e7)([_.Z], () => _.Z.isFocused()),
        H = (0, s.e7)([h.Z], () => h.Z.getWindowFocused(y.KJ3.CHANNEL_CALL_POPOUT)),
        Y = (0, s.e7)([x.Z], () => null != V.id && x.Z.isLocalVideoDisabled(V.id, (0, m.Z)(t.type)), [V.id, t.type]),
        q = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, V.id)),
        J = C.ZP.getName(n.getGuildId(), n.id, V) + (q ? ' '.concat(T.intl.string(T.t['pFO/Pj'])) : ''),
        X = z && (H || G),
        K = o < 124 ? j : A,
        { avatarSrc: Q, avatarDecorationSrc: $ } = (0, g.Z)({
            user: V,
            guildId: n.guild_id,
            size: K,
            animateOnHover: !X
        }),
        ee = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        et = {
            channel: n,
            selectedParticipant: ee,
            user: V
        },
        en = l.useRef(et);
    return (l.useEffect(() => {
        en.current = et;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = en.current;
        e.isGuildStageVoice() && !W && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
    }, [W]),
    r && !Y && !M && W && !E && null != D && x.Z.supports(Z.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: P,
                  wrapperClassName: N.videoWrapper,
                  className: N.content,
                  mirror: B,
                  streamId: F,
                  videoComponent: D,
                  fit: w,
                  paused: v,
                  videoSpinnerContext: V.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: V.id
              },
              F
          )
        : (0, i.jsx)('div', {
              className: a()(N.content, { [N.blockedAvatar]: R || O }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': J,
                  src: Q,
                  avatarDecoration: $,
                  backgroundSrc: V.getAvatarURL(n.guild_id, 80),
                  size: K,
                  pulseSpeakingIndicator: k,
                  speaking: z,
                  userId: V.id
              })
          });
}
