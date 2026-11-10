var i,
    r,
    a = n(76573),
    s = n(948325),
    l = n(448645),
    o =
        (((i = {}).UPSELL = "UPSELL"),
        (i.NITRO = "NITRO"),
        (i.XBOX_GAME_PASS = "XBOX_GAME_PASS"),
        (i.INELIGIBLE = "INELIGIBLE"),
        i),
    d = (((r = {}).NITRO = "nitro"), (r.XBOX_GAME_PASS = "xbox_game_pass"), r);
let c = ["XBOX_GAME_PASS", "NITRO"];
n.d(
    t,
    {},
    {
        B9: function (e) {
            return c.includes(e);
        },
        Et: d,
        MA: o,
        _z: function (e) {
            if (!l.Ay.canUseMoreQuestOrbs(e)) return null;
            let t = (0, s.kQ)(e?.perks, a.bb.MORE_QUEST_ORBS);
            return t?.includes(a.g$.SOURCE_NITRO) || l.Ay.canUseQuestOrbMultiplier(e)
                ? "nitro"
                : t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
                  ? "xbox_game_pass"
                  : null;
        },
    },
);
