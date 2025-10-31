n.d(t, {
    T: () => D,
    Z: () => L,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(475179),
    d = n(763520),
    p = n(358221),
    f = n(414910),
    h = n(598006),
    m = n(502053),
    g = n(965048),
    b = n(266910),
    _ = n(352978),
    y = n(928518),
    C = n(518950),
    v = n(470956),
    O = n(314897),
    x = n(271383),
    E = n(131951),
    j = n(451478),
    S = n(5192),
    P = n(44136),
    I = (n(351483), n(249212)),
    Z = n(853476),
    T = n(981631),
    N = n(65154),
    A = n(388032),
    w = n(7504);
let M = c.EFr.SIZE_80,
    R = c.EFr.SIZE_40;
function D(e) {
    let { channelId: t, participant: n } = e;
    return (0, v.Eu)(t, n.id)
        ? (0, r.jsx)(s.u, {
              text: A.intl.string(A.t.HFwRpk),
              position: "bottom",
              children: (0, r.jsx)("div", {
                  className: w.interactive,
                  children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, r.jsx)(Z.Z, { userId: n.user.id });
}
function L(e) {
    let {
            participant: t,
            channel: n,
            inCall: l,
            width: s,
            selected: c,
            popoutType: v,
            fit: Z,
            onVideoResize: D,
            blocked: L,
            ignored: k,
            noVideoRender: U = !1,
            pulseSpeakingIndicator: B = !1,
            paused: F = !1,
        } = e,
        V = E.Z.getVideoComponent(),
        H = (0, o.e7)([O.default], () => O.default.getId()),
        { user: G, streamId: W, speaking: z } = t,
        q = G.id === H,
        Y = (0, P.ZP)(t),
        K = (0, o.e7)([j.Z], () => j.Z.isFocused()),
        X = (0, o.e7)([y.Z], () => y.Z.getWindowFocused(T.KJ3.CHANNEL_CALL_POPOUT)),
        J = (0, o.e7)([E.Z], () => null != G.id && E.Z.isLocalVideoDisabled(G.id, (0, f.Z)(t.type)), [G.id, t.type]),
        Q = (0, o.e7)([x.ZP], () => x.ZP.isGuestOrLurker(n.guild_id, G.id)),
        $ = S.ZP.getName(n.getGuildId(), n.id, G) + (Q ? " ".concat(A.intl.string(A.t["pFO/Ph"])) : ""),
        ee = z && (X || K),
        et = s < 124 ? R : M,
        { avatarSrc: en, avatarDecorationSrc: er } = (0, C.Z)({
            userId: G.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, o.e7)([p.Z], () => p.Z.getSelectedParticipant(n.id)),
        el = (0, g.Z)(N.Yn.DEFAULT, t.user.id),
        ea = (0, m.Z)(t.user.id),
        eo = {
            channel: n,
            selectedParticipant: ei,
            user: G,
        },
        es = i.useRef(eo);
    return (i.useEffect(() => {
        es.current = eo;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = es.current;
        e.isGuildStageVoice() && !Y && (null == t ? void 0 : t.id) === n.id && u.Z.selectParticipant(e.id, null);
    }, [Y]),
    l && !J && !U && Y && !c && null != V && E.Z.supports(N.AN.VIDEO))
        ? null != el && null == ea
            ? (0, r.jsx)(I.Z, {
                  avError: el,
                  userId: t.id,
                  width: s,
                  selected: c,
              })
            : (0, r.jsx)(
                  _.Z,
                  {
                      onResize: D,
                      wrapperClassName: v !== h.P.CALL_TILE ? w.videoWrapper : void 0,
                      className: w.content,
                      mirror: q,
                      streamId: W,
                      videoComponent: V,
                      fit: Z,
                      videoSpinnerContext: G.id === H ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
                      paused: F,
                      userId: G.id,
                  },
                  W,
              )
        : (0, r.jsx)("div", {
              className: a()(w.content, { [w.blockedAvatar]: L || k }),
              children: (0, r.jsx)(b.Z, {
                  "aria-label": $,
                  src: en,
                  avatarDecoration: er,
                  backgroundSrc: G.getAvatarURL(n.guild_id, 80),
                  size: et,
                  pulseSpeakingIndicator: B,
                  speaking: z,
                  userId: G.id,
              }),
          });
}
