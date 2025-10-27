n.d(t, {
    T: () => M,
    Z: () => k,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(28664),
    s = n(481060),
    u = n(475179),
    d = n(763520),
    f = n(358221),
    p = n(414910),
    _ = n(598006),
    m = n(502053),
    g = n(965048),
    v = n(266910),
    b = n(352978),
    E = n(928518),
    h = n(518950),
    S = n(470956),
    y = n(314897),
    O = n(271383),
    I = n(131951),
    C = n(451478),
    w = n(5192),
    P = n(44136),
    Z = (n(351483), n(249212)),
    j = n(853476),
    T = n(981631),
    A = n(65154),
    R = n(388032),
    x = n(7504);
let N = s.EFr.SIZE_80,
    D = s.EFr.SIZE_40;
function M(e) {
    let { channelId: t, participant: n } = e;
    return (0, S.Eu)(t, n.id)
        ? (0, r.jsx)(c.u, {
              text: R.intl.string(R.t.HFwRpk),
              position: "bottom",
              children: (0, r.jsx)("div", {
                  className: x.interactive,
                  children: (0, r.jsx)(s.Mgn, { color: s.TVs.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, r.jsx)(j.Z, { userId: n.user.id });
}
function k(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: c,
            selected: s,
            popoutType: S,
            fit: j,
            onVideoResize: M,
            blocked: k,
            ignored: L,
            noVideoRender: F = !1,
            pulseSpeakingIndicator: V = !1,
            paused: U = !1,
        } = e,
        W = I.Z.getVideoComponent(),
        H = (0, o.e7)([y.default], () => y.default.getId()),
        { user: B, streamId: q, speaking: z } = t,
        Y = B.id === H,
        K = (0, P.ZP)(t),
        G = (0, o.e7)([C.Z], () => C.Z.isFocused()),
        Q = (0, o.e7)([E.Z], () => E.Z.getWindowFocused(T.KJ3.CHANNEL_CALL_POPOUT)),
        X = (0, o.e7)([I.Z], () => null != B.id && I.Z.isLocalVideoDisabled(B.id, (0, p.Z)(t.type)), [B.id, t.type]),
        J = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, B.id)),
        $ = w.ZP.getName(n.getGuildId(), n.id, B) + (J ? " ".concat(R.intl.string(R.t["pFO/Ph"])) : ""),
        ee = z && (Q || G),
        et = c < 124 ? D : N,
        { avatarSrc: en, avatarDecorationSrc: er } = (0, h.Z)({
            userId: B.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        el = (0, g.Z)(A.Yn.DEFAULT, t.user.id),
        ea = (0, m.Z)(t.user.id),
        eo = {
            channel: n,
            selectedParticipant: ei,
            user: B,
        },
        ec = i.useRef(eo);
    return (i.useEffect(() => {
        ec.current = eo;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = ec.current;
        e.isGuildStageVoice() && !K && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [K]),
    l && !X && !F && K && !s && null != W && I.Z.supports(A.AN.VIDEO))
        ? null != el && null == ea
            ? (0, r.jsx)(Z.Z, {
                  avError: el,
                  userId: t.id,
                  width: c,
                  selected: s,
              })
            : (0, r.jsx)(
                  b.Z,
                  {
                      onResize: M,
                      wrapperClassName: S !== _.P.CALL_TILE ? x.videoWrapper : void 0,
                      className: x.content,
                      mirror: Y,
                      streamId: q,
                      videoComponent: W,
                      fit: j,
                      videoSpinnerContext: B.id === H ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
                      paused: U,
                      userId: B.id,
                  },
                  q,
              )
        : (0, r.jsx)("div", {
              className: a()(x.content, { [x.blockedAvatar]: k || L }),
              children: (0, r.jsx)(v.Z, {
                  "aria-label": $,
                  src: en,
                  avatarDecoration: er,
                  backgroundSrc: B.getAvatarURL(n.guild_id, 80),
                  size: et,
                  pulseSpeakingIndicator: V,
                  speaking: z,
                  userId: B.id,
              }),
          });
}
