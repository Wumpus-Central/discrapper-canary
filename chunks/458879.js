e.d(n, { Z: () => r });
var i = e(990547),
    l = e(881052),
    s = e(573261),
    a = e(981631);
let r = {
    createGuildFromTemplate: async function (t, n, e, r, d) {
        try {
            return (
                await s.Z.post({
                    url: a.ANM.GUILDS,
                    body: {
                        name: t,
                        icon: n,
                        channels: e.channels,
                        system_channel_id: e.system_channel_id,
                        roles: e.roles,
                        guild_template_code: e.code,
                        staff_only: !!d || void 0
                    },
                    trackedActionData: {
                        event: i.NetworkActionNames.GUILD_CREATE,
                        properties: {
                            template_name: e.id,
                            is_community_intent: r
                        }
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new l.Hx(t);
        }
    }
};
