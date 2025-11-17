e.d(i, { default: () => g }), e(539854);
var n = e(54381);
e(473749);
var r = e(793030),
    a = e(623624),
    l = e(430824),
    d = e(496675),
    s = e(626135),
    u = e(565799),
    o = e(501655),
    c = e(146085),
    _ = e(981631),
    p = e(474936),
    E = e(388032),
    I = e(259442);
function g(t) {
    var i;
    let e,
        { channel: g, transitionState: T, onClose: S } = t,
        C = l.Z.getGuild(g.guild_id),
        O = null != (i = null == C ? void 0 : C.maxStageVideoChannelUsers) ? i : 0,
        f = null != C && C.features.has(_.GuildFeatures.COMMUNITY),
        L = E.intl.string(E.t.pqPQL0),
        m = f ? O < _.TU7 : (null == C ? void 0 : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
        v = d.Z.can(c.yP, g);
    e =
        f && (null == C ? void 0 : C.premiumTier) === _.Eu4.TIER_3
            ? O <= _.TU7
                ? E.intl.string(E.t.tJmOuw)
                : E.intl.string(E.t["7FHbPG"])
            : m
              ? E.intl.string(E.t["8/uDSF"])
              : E.intl.string(E.t["7FHbPG"]);
    let M = () => {
            S(),
                s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: g.guild_id,
                    type: p.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: v,
                    action: p.T7.DISMISS,
                });
        },
        h = u.Z.getMutableParticipants(g.id, o.pV.SPEAKER).filter((t) => t.type === o.Ui.VOICE).length,
        x = u.Z.getParticipantCount(g.id, o.pV.AUDIENCE);
    s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
        guild_id: g.guild_id,
        type: p.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        listener_count: h + x,
    });
    let G = [];
    return (
        m
            ? G.push(
                  {
                      text: E.intl.string(E.t.f3Pet9),
                      variant: "secondary",
                      onClick: M,
                  },
                  {
                      text: E.intl.string(E.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          S(),
                              (0, a.f)({
                                  guildId: g.guild_id,
                                  location: { section: _.jXE.STAGE_VIDEO_LIMIT },
                              }),
                              s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: g.guild_id,
                                  type: p.cd.VIDEO_STAGE_LIMIT,
                                  is_moderator: v,
                                  action: p.T7.BOOST,
                              });
                      },
                  },
              )
            : G.push({
                  text: E.intl.string(E.t["NX+WJN"]),
                  variant: "primary",
                  onClick: M,
              }),
        (0, n.jsx)(r.ExpressiveModal, {
            transitionState: T,
            onClose: S,
            title: L,
            subtitle: e,
            graphic: {
                type: "image",
                src: I,
            },
            actions: G,
        })
    );
}
