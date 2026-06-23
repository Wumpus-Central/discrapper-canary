e.d(i, { default: () => g }), e(321073);
var n = e(627968);
e(64700);
var a = e(772707),
    r = e(85829),
    s = e(71393),
    d = e(576705),
    l = e(174459),
    u = e(63995),
    _ = e(518769),
    c = e(233993),
    p = e(652215),
    o = e(788868),
    I = e(375708);
function g(t) {
    let i,
        { channel: e, transitionState: g, onClose: E } = t,
        T = s.A.getGuild(e.guild_id),
        S = T?.maxStageVideoChannelUsers ?? 0,
        C = null != T && T.features.has(p.GuildFeatures.COMMUNITY),
        A = I.intl.string(I.t.pqPQL0),
        O = C ? S < p.p2C : T?.premiumTier !== p.TVA.TIER_3 && S <= p.nyz,
        L = d.A.can(c.QY, e);
    function f() {
        E(),
            l.default.track(p.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: e.guild_id,
                type: o.e.VIDEO_STAGE_LIMIT,
                is_moderator: L,
                action: o.pd.DISMISS,
            });
    }
    i =
        C && T?.premiumTier === p.TVA.TIER_3
            ? S <= p.p2C
                ? I.intl.string(I.t.tJmOuw)
                : I.intl.string(I.t["7FHbPG"])
            : O
              ? I.intl.string(I.t["8/uDSF"])
              : I.intl.string(I.t["7FHbPG"]);
    let m = u.A.getMutableParticipants(e.id, _.ip.SPEAKER).filter((t) => t.type === _.wY.VOICE).length,
        h = u.A.getParticipantCount(e.id, _.ip.AUDIENCE);
    l.default.track(p.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: e.guild_id,
        type: o.e.VIDEO_STAGE_LIMIT,
        is_moderator: L,
        listener_count: m + h,
    });
    let k = [];
    return (
        O
            ? k.push(
                  { text: I.intl.string(I.t.f3Pet9), variant: "secondary", onClick: f },
                  {
                      text: I.intl.string(I.t.Uj0md3),
                      variant: "expressive",
                      onClick: function () {
                          E(),
                              (0, r.K4)({ guildId: e.guild_id, location: { section: p.JJy.STAGE_VIDEO_LIMIT } }),
                              l.default.track(p.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: e.guild_id,
                                  type: o.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: L,
                                  action: o.pd.BOOST,
                              });
                      },
                  },
              )
            : k.push({ text: I.intl.string(I.t["NX+WJN"]), variant: "primary", onClick: f }),
        (0, n.jsx)(a.k, {
            transitionState: g,
            onClose: E,
            title: A,
            subtitle: i,
            graphic: { type: "image", src: "/assets/3ca8e729f3fc7da5.svg" },
            actions: k,
        })
    );
}
