(e.d(i, { default: () => g }), e(321073));
var n = e(477900);
e(582128);
var a = e(772707),
    r = e(233824),
    s = e(71393),
    d = e(576705),
    l = e(129230),
    u = e(63995),
    _ = e(597886),
    c = e(233993),
    o = e(652215),
    p = e(682901),
    I = e(792996);
function g(t) {
    let i,
        { channel: e, transitionState: g, onClose: E } = t,
        T = s.A.getGuild(e.guild_id),
        S = T?.maxStageVideoChannelUsers ?? 0,
        A = null != T && T.features.has(o.GuildFeatures.COMMUNITY),
        C = I.intl.string(I.t.pqPQL0),
        O = A ? S < 1e4 : T?.premiumTier !== o.TVA.TIER_3 && S <= 150,
        L = d.A.can(c.QY, e);
    function f() {
        (E(),
            l.default.track(o.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: e.guild_id,
                type: p.e.VIDEO_STAGE_LIMIT,
                is_moderator: L,
                action: p.pd.DISMISS,
            }));
    }
    i =
        A && T?.premiumTier === o.TVA.TIER_3
            ? S <= 1e4
                ? I.intl.string(I.t.tJmOuw)
                : I.intl.string(I.t["7FHbPG"])
            : O
              ? I.intl.string(I.t["8/uDSF"])
              : I.intl.string(I.t["7FHbPG"]);
    let m = u.A.getMutableParticipants(e.id, _.ip.SPEAKER).filter((t) => t.type === _.wY.VOICE).length,
        h = u.A.getParticipantCount(e.id, _.ip.AUDIENCE);
    l.default.track(o.HAw.BOOSTING_UPSELL_VIEWED, {
        guild_id: e.guild_id,
        type: p.e.VIDEO_STAGE_LIMIT,
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
                          (E(),
                              (0, r.K4)({ guildId: e.guild_id, location: { section: o.JJy.STAGE_VIDEO_LIMIT } }),
                              l.default.track(o.HAw.BOOSTING_UPSELL_CLICKED, {
                                  guild_id: e.guild_id,
                                  type: p.e.VIDEO_STAGE_LIMIT,
                                  is_moderator: L,
                                  action: p.pd.BOOST,
                              }));
                      },
                  },
              )
            : k.push({ text: I.intl.string(I.t["NX+WJN"]), variant: "primary", onClick: f }),
        (0, n.jsx)(a.k, {
            transitionState: g,
            onClose: E,
            title: C,
            subtitle: i,
            graphic: { type: "image", src: "/assets/3ca8e729f3fc7da5.svg" },
            actions: k,
        })
    );
}
