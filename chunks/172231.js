i.d(t, { default: () => b }), i(321073);
var s = i(627968);
i(64700);
var n = i(772707),
    a = i(509536),
    l = i(71393),
    r = i(576705),
    o = i(954571),
    d = i(63995),
    c = i(69407),
    _ = i(233993),
    u = i(652215),
    h = i(788868),
    p = i(985018),
    g = i(98209);
function b(e) {
    let t,
        { channel: i, transitionState: b, onClose: m } = e,
        v = l.A.getGuild(i.guild_id),
        f = v?.maxStageVideoChannelUsers ?? 0,
        A = null != v && v.features.has(u.GuildFeatures.COMMUNITY),
        w = p.intl.string(p.t.pqPQL0),
        x = A ? f < u.p2C : v?.premiumTier !== u.TVA.TIER_3 && f <= u.nyz,
        C = r.A.can(_.QY, i);
    t =
        A && v?.premiumTier === u.TVA.TIER_3
            ? f <= u.p2C
                ? p.intl.string(p.t.tJmOuw)
                : p.intl.string(p.t["7FHbPG"])
            : x
              ? p.intl.string(p.t["8/uDSF"])
              : p.intl.string(p.t["7FHbPG"]);
    let I = () => {
            m(),
                o.default.track(u.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: i.guild_id,
                    type: h.e.VIDEO_STAGE_LIMIT,
                    is_moderator: C,
                    action: h.pd.DISMISS,
                });
        },
        y = d.A.getMutableParticipants(i.id, c.ip.SPEAKER).filter((e) => e.type === c.wY.VOICE).length,
        E = d.A.getParticipantCount(i.id, c.ip.AUDIENCE);
    o.default.track(u.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: i.guild_id,
        type: h.e.VIDEO_STAGE_LIMIT,
        is_moderator: C,
        listener_count: y + E,
    });
    let S = [];
    return (
        x
            ? S.push(
                  { text: p.intl.string(p.t.f3Pet9), variant: "secondary", onClick: I },
                  {
                      text: p.intl.string(p.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          m(),
                              (0, a.K4)({ guildId: i.guild_id, location: { section: u.JJy.STAGE_VIDEO_LIMIT } }),
                              o.default.track(u.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: i.guild_id,
                                  type: h.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: C,
                                  action: h.pd.BOOST,
                              });
                      },
                  },
              )
            : S.push({ text: p.intl.string(p.t["NX+WJN"]), variant: "primary", onClick: I }),
        (0, s.jsx)(n.k, {
            transitionState: b,
            onClose: m,
            title: w,
            subtitle: t,
            graphic: { type: "image", src: g },
            actions: S,
        })
    );
}
