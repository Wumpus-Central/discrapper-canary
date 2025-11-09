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
    m = n(598006),
    _ = n(502053),
    g = n(965048),
    v = n(266910),
    b = n(352978),
    E = n(928518),
    h = n(518950),
    y = n(470956),
    S = n(314897),
    O = n(271383),
    C = n(131951),
    I = n(451478),
    w = n(5192),
    P = n(44136),
    j = (n(351483), n(249212)),
    x = n(853476),
    Z = n(981631),
    R = n(65154),
    T = n(388032),
    A = n(400872);
let N = s.EFr.SIZE_80,
    D = s.EFr.SIZE_40;
function M(e) {
    let { channelId: t, participant: n } = e;
    return (0, y.Eu)(t, n.id)
        ? (0, r.jsx)(c.u, {
              text: T.intl.string(T.t.HFwRpk),
              position: "bottom",
              children: (0, r.jsx)("div", {
                  className: A.interactive,
                  children: (0, r.jsx)(s.Mgn, { color: s.TVs.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, r.jsx)(x.Z, { userId: n.user.id });
}
function k(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: c,
            selected: s,
            popoutType: y,
            fit: x,
            onVideoResize: M,
            blocked: k,
            ignored: L,
            noVideoRender: F = !1,
            pulseSpeakingIndicator: V = !1,
            paused: U = !1,
        } = e,
        z = C.Z.getVideoComponent(),
        W = (0, o.e7)([S.default], () => S.default.getId()),
        { user: H, streamId: B, speaking: Y } = t,
        q = H.id === W,
        G = (0, P.ZP)(t),
        K = (0, o.e7)([I.Z], () => I.Z.isFocused()),
        Q = (0, o.e7)([E.Z], () => E.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        X = (0, o.e7)([C.Z], () => null != H.id && C.Z.isLocalVideoDisabled(H.id, (0, p.Z)(t.type)), [H.id, t.type]),
        J = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, H.id)),
        $ = w.ZP.getName(n.getGuildId(), n.id, H) + (J ? " ".concat(T.intl.string(T.t["pFO/Ph"])) : ""),
        ee = Y && (Q || K),
        et = c < 124 ? D : N,
        { avatarSrc: en, avatarDecorationSrc: er } = (0, h.Z)({
            userId: H.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        el = (0, g.Z)(R.Yn.DEFAULT, t.user.id),
        ea = (0, _.Z)(t.user.id),
        eo = {
            channel: n,
            selectedParticipant: ei,
            user: H,
        },
        ec = i.useRef(eo);
    return (i.useEffect(() => {
        ec.current = eo;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = ec.current;
        e.isGuildStageVoice() && !G && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [G]),
    l && !X && !F && G && !s && null != z && C.Z.supports(R.AN.VIDEO))
        ? null != el && null == ea
            ? (0, r.jsx)(j.Z, {
                  avError: el,
                  userId: t.id,
                  width: c,
                  selected: s,
              })
            : (0, r.jsx)(
                  b.Z,
                  {
                      onResize: M,
                      wrapperClassName: y !== m.P.CALL_TILE ? A.videoWrapper : void 0,
                      className: A.content,
                      mirror: q,
                      streamId: B,
                      videoComponent: z,
                      fit: x,
                      videoSpinnerContext: H.id === W ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
                      paused: U,
                      userId: H.id,
                  },
                  B,
              )
        : (0, r.jsx)("div", {
              className: a()(A.content, { [A.blockedAvatar]: k || L }),
              children: (0, r.jsx)(v.Z, {
                  "aria-label": $,
                  src: en,
                  avatarDecoration: er,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: et,
                  pulseSpeakingIndicator: V,
                  speaking: Y,
                  userId: H.id,
              }),
          });
}
