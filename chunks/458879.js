i.d(t, { Z: () => r });
var n = i(990547),
    s = i(881052),
    l = i(573261),
    a = i(981631);
let r = {
    createGuildFromTemplate: async function (e, t, i, r, o) {
        try {
            return (
                await l.Z.post({
                    url: a.ANM.GUILDS,
                    body: {
                        name: e,
                        icon: t,
                        channels: i.channels,
                        system_channel_id: i.system_channel_id,
                        roles: i.roles,
                        guild_template_code: i.code,
                        staff_only: !!o || void 0
                    },
                    trackedActionData: {
                        event: n.NetworkActionNames.GUILD_CREATE,
                        properties: {
                            template_name: i.id,
                            is_community_intent: r
                        }
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new s.Hx(e);
        }
    }
};
