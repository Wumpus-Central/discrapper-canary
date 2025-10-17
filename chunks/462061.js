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
    _ = n(502053),
    m = n(965048),
    g = n(266910),
    E = n(352978),
    b = n(928518),
    v = n(518950),
    h = n(470956),
    S = n(314897),
    y = n(271383),
    O = n(131951),
    I = n(451478),
    C = n(5192),
    w = n(44136),
    j = (n(351483), n(249212)),
    Z = n(853476),
    P = n(981631),
    x = n(65154),
    A = n(388032),
    T = n(7504);
let R = s.EFr.SIZE_80,
    N = s.EFr.SIZE_40;
function D(e) {
    let { channelId: t, participant: n } = e;
    return (0, h.Eu)(t, n.id)
        ? (0, r.jsx)(c.u, {
              text: A.intl.string(A.t.HFwRpq),
              position: "bottom",
              children: (0, r.jsx)("div", {
                  className: T.interactive,
                  children: (0, r.jsx)(s.Mgn, { color: s.TVs.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, r.jsx)(Z.Z, { userId: n.user.id });
}
function M(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: c,
            selected: s,
            fit: h,
            onVideoResize: Z,
            blocked: D,
            ignored: M,
            noVideoRender: k = !1,
            pulseSpeakingIndicator: F = !1,
            inOverlayPopout: L = !1,
            paused: V = !1,
        } = e,
        U = O.Z.getVideoComponent(),
        W = (0, o.e7)([S.default], () => S.default.getId()),
        { user: H, streamId: B, speaking: q } = t,
        Y = H.id === W,
        z = (0, w.ZP)(t),
        K = (0, o.e7)([I.Z], () => I.Z.isFocused()),
        G = (0, o.e7)([b.Z], () => b.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)),
        Q = (0, o.e7)([O.Z], () => null != H.id && O.Z.isLocalVideoDisabled(H.id, (0, p.Z)(t.type)), [H.id, t.type]),
        X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, H.id)),
        J = C.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(A.intl.string(A.t["pFO/Pj"])) : ""),
        $ = q && (G || K),
        ee = c < 124 ? N : R,
        { avatarSrc: et, avatarDecorationSrc: en } = (0, v.Z)({
            userId: H.id,
            guildId: n.guild_id,
            size: ee,
            animateOnHover: !$,
        }),
        er = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        ei = (0, m.Z)(x.Yn.DEFAULT, t.user.id),
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
    l && !Q && !k && z && !s && null != U && O.Z.supports(x.AN.VIDEO))
        ? null != ei && null == el
            ? (0, r.jsx)(j.Z, {
                  avError: ei,
                  userId: t.id,
                  width: c,
                  selected: s,
              })
            : (0, r.jsx)(
                  E.Z,
                  {
                      onResize: Z,
                      wrapperClassName: T.videoWrapper,
                      className: T.content,
                      mirror: Y,
                      streamId: B,
                      videoComponent: U,
                      fit: h,
                      videoSpinnerContext: H.id === W ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
                      paused: V,
                      userId: H.id,
                  },
                  B,
              )
        : (0, r.jsx)("div", {
              className: a()(T.content, { [T.blockedAvatar]: D || M }),
              children: (0, r.jsx)(g.Z, {
                  "aria-label": J,
                  src: et,
                  avatarDecoration: en,
                  backgroundSrc: H.getAvatarURL(n.guild_id, 80),
                  size: ee,
                  pulseSpeakingIndicator: F,
                  speaking: q,
                  userId: H.id,
              }),
          });
}
