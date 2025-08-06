e.d(i, { default: () => p }), e(539854);
var n = e(255367);
e(73800);
var r = e(667202),
    a = e(623624),
    l = e(430824),
    d = e(496675),
    s = e(626135),
    u = e(565799),
    c = e(501655),
    o = e(146085),
    _ = e(981631),
    I = e(474936),
    E = e(388032),
    g = e(259442);
function p(t) {
    var i;
    let e,
        { channel: p, transitionState: T, onClose: S } = t,
        C = l.Z.getGuild(p.guild_id),
        O = null != (i = null == C ? void 0 : C.maxStageVideoChannelUsers) ? i : 0,
        f = null != C && C.features.has(_.oNc.COMMUNITY),
        L = E.intl.string(E.t.pqPQLy),
        m = f ? O < _.TU7 : (null == C ? void 0 : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
        D = d.Z.can(o.yP, p);
    e =
        f && (null == C ? void 0 : C.premiumTier) === _.Eu4.TIER_3
            ? O <= _.TU7
                ? E.intl.string(E.t.tJmOu7)
                : E.intl.string(E.t["7FHbPD"])
            : m
              ? E.intl.string(E.t["8/uDSE"])
              : E.intl.string(E.t["7FHbPD"]);
    let h = () => {
            S(),
                s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: p.guild_id,
                    type: I.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: D,
                    action: I.T7.DISMISS,
                });
        },
        v = u.Z.getMutableParticipants(p.id, c.pV.SPEAKER).filter((t) => t.type === c.Ui.VOICE).length,
        M = u.Z.getParticipantCount(p.id, c.pV.AUDIENCE);
    s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
        guild_id: p.guild_id,
        type: I.cd.VIDEO_STAGE_LIMIT,
        is_moderator: D,
        listener_count: v + M,
    });
    let P = [];
    return (
        m
            ? P.push(
                  {
                      text: E.intl.string(E.t.f3Pet7),
                      variant: "secondary",
                      onClick: h,
                  },
                  {
                      text: E.intl.string(E.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          S(),
                              (0, a.f)({
                                  guildId: p.guild_id,
                                  location: { section: _.jXE.STAGE_VIDEO_LIMIT },
                              }),
                              s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: p.guild_id,
                                  type: I.cd.VIDEO_STAGE_LIMIT,
                                  is_moderator: D,
                                  action: I.T7.BOOST,
                              });
                      },
                  },
              )
            : P.push({
                  text: E.intl.string(E.t["NX+WJC"]),
                  variant: "primary",
                  onClick: h,
              }),
        (0, n.jsx)(r.I, {
            transitionState: T,
            onClose: S,
            title: L,
            subtitle: e,
            graphic: {
                type: "image",
                src: g,
            },
            actions: P,
        })
    );
}
