e.d(i, { default: () => E }), e(321073);
var n = e(627968);
e(64700);
var a = e(158954),
    l = e(509536),
    r = e(71393),
    d = e(576705),
    s = e(954571),
    u = e(63995),
    o = e(69407),
    p = e(233993),
    _ = e(652215),
    c = e(788868),
    I = e(985018),
    g = e(98209);
function E(t) {
    var i;
    let e,
        { channel: E, transitionState: T, onClose: S } = t,
        C = r.A.getGuild(E.guild_id),
        A = null != (i = null == C ? void 0 : C.maxStageVideoChannelUsers) ? i : 0,
        O = null != C && C.features.has(_.GuildFeatures.COMMUNITY),
        L = I.intl.string(I.t.pqPQL0),
        m = O ? A < _.p2C : (null == C ? void 0 : C.premiumTier) !== _.TVA.TIER_3 && A <= _.nyz,
        v = d.A.can(p.QY, E);
    e =
        O && (null == C ? void 0 : C.premiumTier) === _.TVA.TIER_3
            ? A <= _.p2C
                ? I.intl.string(I.t.tJmOuw)
                : I.intl.string(I.t["7FHbPG"])
            : m
              ? I.intl.string(I.t["8/uDSF"])
              : I.intl.string(I.t["7FHbPG"]);
    let h = () => {
            S(),
                s.default.track(_.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: E.guild_id,
                    type: c.e.VIDEO_STAGE_LIMIT,
                    is_moderator: v,
                    action: c.pd.DISMISS,
                });
        },
        G = u.A.getMutableParticipants(E.id, o.ip.SPEAKER).filter((t) => t.type === o.wY.VOICE).length,
        f = u.A.getParticipantCount(E.id, o.ip.AUDIENCE);
    s.default.track(_.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: E.guild_id,
        type: c.e.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        listener_count: G + f,
    });
    let k = [];
    return (
        m
            ? k.push(
                  {
                      text: I.intl.string(I.t.f3Pet9),
                      variant: "secondary",
                      onClick: h,
                  },
                  {
                      text: I.intl.string(I.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          S(),
                              (0, l.K)({
                                  guildId: E.guild_id,
                                  location: { section: _.JJy.STAGE_VIDEO_LIMIT },
                              }),
                              s.default.track(_.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: E.guild_id,
                                  type: c.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: v,
                                  action: c.pd.BOOST,
                              });
                      },
                  },
              )
            : k.push({
                  text: I.intl.string(I.t["NX+WJN"]),
                  variant: "primary",
                  onClick: h,
              }),
        (0, n.jsx)(a.ExpressiveModal, {
            transitionState: T,
            onClose: S,
            title: L,
            subtitle: e,
            graphic: {
                type: "image",
                src: g,
            },
            actions: k,
        })
    );
}
