var A = r(855986),
    a = r(229527),
    d = r(696451),
    L = r(71393),
    G = r(287809),
    _ = r(743981),
    O = r(652215);
function S(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
r.d(
    E,
    {},
    {
        Rg: function (e) {
            return e.features.has(O.GuildFeatures.GUILD_TAGS);
        },
        Wb: function (e, E, r) {
            let L = (0, A.bG)([G.default], () => G.default.getUser(e), [e]),
                _ = (0, A.bG)(
                    [d.Ay],
                    () => {
                        if (null == E || null == e) return null;
                        let r = d.Ay.getMember(E, e);
                        return (0, a.TR)(r);
                    },
                    [E, e],
                ),
                { tag: O, guildId: f } = S(void 0 !== r ? r : L?.primaryGuild);
            return null != f && null != O && !_;
        },
        Zo: S,
        gC: function (e, E) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Sl.SIZE_12;
            if (null == E) return;
            let { CDN_HOST: A } = window.GLOBAL_ENV;
            if (null == A) return;
            let a = _.lv[r];
            return `https://${A}/clan-badges/${e}/${E}.png?size=${a}`;
        },
        gS: function (e) {
            let E = (0, A.bG)([L.A], () => L.A.getGuild(e), [e]);
            return null == e
                ? e
                : null == E
                  ? E
                  : {
                        identityGuildId: E.id,
                        identityEnabled: !0,
                        tag: E.profile?.tag ?? void 0,
                        badge: E.profile?.badge ?? void 0,
                    };
        },
        q0: function (e) {
            return e?.profile?.tag != null;
        },
    },
);
