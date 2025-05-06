n.d(t, { Z: () => a });
var i = n(990547),
    s = n(881052),
    l = n(573261),
    r = n(981631);
let a = {
    createGuildFromTemplate: async function (e, t, n, a, o) {
        try {
            return (
                await l.Z.post({
                    url: r.ANM.GUILDS,
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
                        event: i.NetworkActionNames.GUILD_CREATE,
                        properties: {
                            template_name: n.id,
                            is_community_intent: a
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
