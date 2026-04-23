e.d(i, { default: () => E }), e(321073);
var a = e(627968);
e(64700);
var n = e(772707),
    r = e(509536),
    s = e(71393),
    d = e(576705),
    l = e(954571),
    u = e(63995),
    _ = e(69407),
    p = e(233993),
    c = e(652215),
    o = e(788868),
    I = e(985018),
    g = e(98209);
function E(t) {
    let i,
        { channel: e, transitionState: E, onClose: T } = t,
        S = s.A.getGuild(e.guild_id),
        C = S?.maxStageVideoChannelUsers ?? 0,
        A = null != S && S.features.has(c.GuildFeatures.COMMUNITY),
        O = I.intl.string(I.t.pqPQL0),
        L = A ? C < c.p2C : S?.premiumTier !== c.TVA.TIER_3 && C <= c.nyz,
        m = d.A.can(p.QY, e);
    i =
        A && S?.premiumTier === c.TVA.TIER_3
            ? C <= c.p2C
                ? I.intl.string(I.t.tJmOuw)
                : I.intl.string(I.t["7FHbPG"])
            : L
              ? I.intl.string(I.t["8/uDSF"])
              : I.intl.string(I.t["7FHbPG"]);
    let h = () => {
            T(),
                l.default.track(c.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: e.guild_id,
                    type: o.e.VIDEO_STAGE_LIMIT,
                    is_moderator: m,
                    action: o.pd.DISMISS,
                });
        },
        k = u.A.getMutableParticipants(e.id, _.ip.SPEAKER).filter((t) => t.type === _.wY.VOICE).length,
        G = u.A.getParticipantCount(e.id, _.ip.AUDIENCE);
    l.default.track(c.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: e.guild_id,
        type: o.e.VIDEO_STAGE_LIMIT,
        is_moderator: m,
        listener_count: k + G,
    });
    let f = [];
    return (
        L
            ? f.push(
                  { text: I.intl.string(I.t.f3Pet9), variant: "secondary", onClick: h },
                  {
                      text: I.intl.string(I.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          T(),
                              (0, r.K4)({ guildId: e.guild_id, location: { section: c.JJy.STAGE_VIDEO_LIMIT } }),
                              l.default.track(c.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: e.guild_id,
                                  type: o.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: m,
                                  action: o.pd.BOOST,
                              });
                      },
                  },
              )
            : f.push({ text: I.intl.string(I.t["NX+WJN"]), variant: "primary", onClick: h }),
        (0, a.jsx)(n.k, {
            transitionState: E,
            onClose: T,
            title: O,
            subtitle: i,
            graphic: { type: "image", src: g },
            actions: f,
        })
    );
}
