e.d(i, { default: () => E }), e(321073);
var a = e(627968);
e(64700);
var n = e(158954),
    r = e(509536),
    s = e(71393),
    d = e(576705),
    l = e(954571),
    u = e(63995),
    p = e(69407),
    _ = e(233993),
    o = e(652215),
    c = e(788868),
    I = e(985018),
    g = e(98209);
function E(t) {
    let i,
        { channel: e, transitionState: E, onClose: T } = t,
        S = s.A.getGuild(e.guild_id),
        C = S?.maxStageVideoChannelUsers ?? 0,
        A = null != S && S.features.has(o.GuildFeatures.COMMUNITY),
        O = I.intl.string(I.t.pqPQL0),
        L = A ? C < o.p2C : S?.premiumTier !== o.TVA.TIER_3 && C <= o.nyz,
        m = d.A.can(_.QY, e);
    i =
        A && S?.premiumTier === o.TVA.TIER_3
            ? C <= o.p2C
                ? I.intl.string(I.t.tJmOuw)
                : I.intl.string(I.t["7FHbPG"])
            : L
              ? I.intl.string(I.t["8/uDSF"])
              : I.intl.string(I.t["7FHbPG"]);
    let h = () => {
            T(),
                l.default.track(o.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: e.guild_id,
                    type: c.e.VIDEO_STAGE_LIMIT,
                    is_moderator: m,
                    action: c.pd.DISMISS,
                });
        },
        G = u.A.getMutableParticipants(e.id, p.ip.SPEAKER).filter((t) => t.type === p.wY.VOICE).length,
        f = u.A.getParticipantCount(e.id, p.ip.AUDIENCE);
    l.default.track(o.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: e.guild_id,
        type: c.e.VIDEO_STAGE_LIMIT,
        is_moderator: m,
        listener_count: G + f,
    });
    let k = [];
    return (
        L
            ? k.push(
                  { text: I.intl.string(I.t.f3Pet9), variant: "secondary", onClick: h },
                  {
                      text: I.intl.string(I.t.Uj0md3),
                      variant: "expressive",
                      onClick: () => {
                          T(),
                              (0, r.K4)({ guildId: e.guild_id, location: { section: o.JJy.STAGE_VIDEO_LIMIT } }),
                              l.default.track(o.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: e.guild_id,
                                  type: c.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: m,
                                  action: c.pd.BOOST,
                              });
                      },
                  },
              )
            : k.push({ text: I.intl.string(I.t["NX+WJN"]), variant: "primary", onClick: h }),
        (0, a.jsx)(n.ExpressiveModal, {
            transitionState: E,
            onClose: T,
            title: O,
            subtitle: i,
            graphic: { type: "image", src: g },
            actions: k,
        })
    );
}
