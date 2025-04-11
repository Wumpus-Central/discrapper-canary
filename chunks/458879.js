n.d(t, { Z: () => a });
var s = n(990547),
    i = n(881052),
    r = n(573261),
    l = n(981631);
let a = {
    createGuildFromTemplate: async function (e, t, n, a, o) {
        try {
            return (
                await r.Z.post({
                    url: l.ANM.GUILDS,
                    body: {
                        name: e,
                        icon: t,
                        channels: n.channels,
                        system_channel_id: n.system_channel_id,
                        roles: n.roles,
                        guild_template_code: n.code,
                        staff_only: !!o || void 0
                    },
                    trackedActionData: {
                        event: s.NetworkActionNames.GUILD_CREATE,
                        properties: {
                            template_name: n.id,
                            is_community_intent: a
                        }
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    }
};
