n.d(t, {
    T: () => D,
    Z: () => M,
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
    _ = (n(598006), n(502053)),
    m = n(965048),
    g = n(266910),
    v = n(352978),
    b = n(928518),
    E = n(518950),
    h = n(470956),
    S = n(314897),
    y = n(271383),
    O = n(131951),
    I = n(451478),
    C = n(5192),
    w = n(44136),
    P = (n(351483), n(249212)),
    j = n(853476),
    Z = n(981631),
    R = n(65154),
    x = n(388032),
    A = n(400872);
let T = s.EFr.SIZE_80,
    N = s.EFr.SIZE_40;
function D(e) {
    let { channelId: t, participant: n } = e;
    return (0, h.Eu)(t, n.id)
        ? (0, r.jsx)(c.u, {
              text: x.intl.string(x.t.HFwRpk),
              position: "bottom",
              children: (0, r.jsx)("div", {
                  className: A.interactive,
                  children: (0, r.jsx)(s.Mgn, { color: s.TVs.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, r.jsx)(j.Z, { userId: n.user.id });
}
function M(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: c,
            selected: s,
            popoutType: h,
            fit: j,
            onVideoResize: D,
            blocked: M,
            ignored: k,
            noVideoRender: F = !1,
            pulseSpeakingIndicator: L = !1,
            paused: V = !1,
        } = e,
        U = O.Z.getVideoComponent(),
        W = (0, o.e7)([S.default], () => S.default.getId()),
        { user: H, streamId: B, speaking: q } = t,
        Y = H.id === W,
        z = (0, w.ZP)(t),
        K = (0, o.e7)([I.Z], () => I.Z.isFocused()),
        G = (0, o.e7)([b.Z], () => b.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        Q = (0, o.e7)([O.Z], () => null != H.id && O.Z.isLocalVideoDisabled(H.id, (0, p.Z)(t.type)), [H.id, t.type]),
        X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, H.id)),
        J = C.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(x.intl.string(x.t["pFO/Ph"])) : ""),
        $ = q && (G || K),
        ee = c < 124 ? N : T,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, E.Z)({
            userId: H.id,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$,
        }),
        er = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        ei = (0, m.Z)(R.Yn.DEFAULT, t.user.id),
        el = (0, _.Z)(t.user.id),
        ea = {
            channel: n,
            selectedParticipant: er,
            user: H,
        },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !z && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [z]),
    l && !Q && !F && z && !s && null != U && O.Z.supports(R.AN.VIDEO))
        ? null != ei && null == el
            ? (0, r.jsx)(P.Z, {
                  avError: ei,
                  userId: t.id,
                  width: c,
                  selected: s,
              })
            : (0, r.jsx)(
                  v.Z,
                  {
                      onResize: D,
                      wrapperClassName: A.videoWrapper,
                      className: A.content,
                      mirror: Y,
                      streamId: B,
                      videoComponent: U,
                      fit: j,
                      videoSpinnerContext: H.id === W ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
                      paused: V,
                      userId: H.id,
                  },
                  B,
              )
        : (0, r.jsx)("div", {
              className: a()(A.content, { [A.blockedAvatar]: M || k }),
              children: (0, r.jsx)(g.Z, {
                  "aria-label": J,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: L,
                  speaking: q,
                  userId: H.id,
              }),
          });
}
