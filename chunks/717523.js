e.d(i, { default: () => o }), e(321073);
var a = e(627968);
e(64700);
var n = e(772707),
    r = e(509536),
    s = e(71393),
    d = e(576705),
    l = e(174459),
    u = e(63995),
    _ = e(518769),
    p = e(233993),
    c = e(652215),
    I = e(788868),
    g = e(375708);
function o(t) {
    let i,
        { channel: e, transitionState: o, onClose: E } = t,
        T = s.A.getGuild(e.guild_id),
        S = T?.maxStageVideoChannelUsers ?? 0,
        C = null != T && T.features.has(c.GuildFeatures.COMMUNITY),
        A = g.intl.string(g.t.pqPQL0),
        O = C ? S < c.p2C : T?.premiumTier !== c.TVA.TIER_3 && S <= c.nyz,
        L = d.A.can(p.QY, e);
    i =
        C && T?.premiumTier === c.TVA.TIER_3
            ? S <= c.p2C
                ? g.intl.string(g.t.tJmOuw)
                : g.intl.string(g.t["7FHbPG"])
            : O
              ? g.intl.string(g.t["8/uDSF"])
              : g.intl.string(g.t["7FHbPG"]);
    let m = () => {
            E(),
                l.default.track(c.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: e.guild_id,
                    type: I.e.VIDEO_STAGE_LIMIT,
                    is_moderator: L,
                    action: I.pd.DISMISS,
                });
        },
        h = u.A.getMutableParticipants(e.id, _.ip.SPEAKER).filter((t) => t.type === _.wY.VOICE).length,
        k = u.A.getParticipantCount(e.id, _.ip.AUDIENCE);
    l.default.track(c.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: e.guild_id,
        type: I.e.VIDEO_STAGE_LIMIT,
        is_moderator: L,
        listener_count: h + k,
    });
    let G = [];
    return (
        O
            ? G.push(
                  { text: g.intl.string(g.t.f3Pet9), variant: "secondary", onClick: m },
                  {
                      text: g.intl.string(g.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          E(),
                              (0, r.K4)({ guildId: e.guild_id, location: { section: c.JJy.STAGE_VIDEO_LIMIT } }),
                              l.default.track(c.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: e.guild_id,
                                  type: I.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: L,
                                  action: I.pd.BOOST,
                              });
                      },
                  },
              )
            : G.push({ text: g.intl.string(g.t["NX+WJN"]), variant: "primary", onClick: m }),
        (0, a.jsx)(n.k, {
            transitionState: o,
            onClose: E,
            title: A,
            subtitle: i,
            graphic: { type: "image", src: "/assets/3ca8e729f3fc7da5.svg" },
            actions: G,
        })
    );
}
