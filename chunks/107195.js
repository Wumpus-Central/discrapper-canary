var i = n(323889);
let r = 6 * n(927813).A.Millis.HOUR;
n.d(
    t,
    {},
    {
        Ce: function (e) {
            if (null == e) return r;
            let t = 1e3 * e;
            return t < r && t > 0 ? t : r;
        },
        Hc: function (e) {
            return e?.type === i.p.PLAYABLE ? e.playable : null;
        },
        I4: function (e) {
            return e?.type === i.p.BOUNTY ? e.bounty : null;
        },
        K2: function (e) {
            if (null == e) return null;
            switch (e.type) {
                case i.p.QUEST:
                    return e.questId;
                case i.p.BOUNTY:
                    return e.bounty.id;
                case i.p.PLAYABLE:
                    return e.playable.id;
                case i.p.QUEST_HOME_HERO:
                    return e.questHomeHero.id;
            }
        },
        Yz: function (e) {
            return e?.type === i.p.QUEST ? e.questId : null;
        },
    },
);
