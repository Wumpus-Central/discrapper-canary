e.d(i, { default: () => g }), e(539854);
var n = e(951288);
e(647438);
var r = e(793030),
    a = e(623624),
    l = e(430824),
    d = e(496675),
    s = e(626135),
    u = e(565799),
    o = e(501655),
    c = e(146085),
    _ = e(981631),
    E = e(474936),
    p = e(388032),
    I = e(259442);
function g(t) {
    var i;
    let e,
        { channel: g, transitionState: T, onClose: S } = t,
        C = l.Z.getGuild(g.guild_id),
        O = null != (i = null == C ? void 0 : C.maxStageVideoChannelUsers) ? i : 0,
        f = null != C && C.features.has(_.oNc.COMMUNITY),
        L = p.intl.string(p.t.pqPQLy),
        m = f ? O < _.TU7 : (null == C ? void 0 : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
        v = d.Z.can(c.yP, g);
    e =
        f && (null == C ? void 0 : C.premiumTier) === _.Eu4.TIER_3
            ? O <= _.TU7
                ? p.intl.string(p.t.tJmOu7)
                : p.intl.string(p.t["7FHbPD"])
            : m
              ? p.intl.string(p.t["8/uDSE"])
              : p.intl.string(p.t["7FHbPD"]);
    let D = () => {
            S(),
                s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: g.guild_id,
                    type: E.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: v,
                    action: E.T7.DISMISS,
                });
        },
        M = u.Z.getMutableParticipants(g.id, o.pV.SPEAKER).filter((t) => t.type === o.Ui.VOICE).length,
        h = u.Z.getParticipantCount(g.id, o.pV.AUDIENCE);
    s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
        guild_id: g.guild_id,
        type: E.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        listener_count: M + h,
    });
    let x = [];
    return (
        m
            ? x.push(
                  {
                      text: p.intl.string(p.t.f3Pet7),
                      variant: "secondary",
                      onClick: D,
                  },
                  {
                      text: p.intl.string(p.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          S(),
                              (0, a.f)({
                                  guildId: g.guild_id,
                                  location: { section: _.jXE.STAGE_VIDEO_LIMIT },
                              }),
                              s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: g.guild_id,
                                  type: E.cd.VIDEO_STAGE_LIMIT,
                                  is_moderator: v,
                                  action: E.T7.BOOST,
                              });
                      },
                  },
              )
            : x.push({
                  text: p.intl.string(p.t["NX+WJC"]),
                  variant: "primary",
                  onClick: D,
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
            actions: x,
        })
    );
}
