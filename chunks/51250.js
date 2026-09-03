n.d(t, { A: () => r });
var i = n(873727);
function r(e, t) {
    let n = {
        instance_id: e.compositeInstanceId ?? e.launchId ?? "",
        location_id: e.location?.id,
        launch_id: e.launchId,
        referrer_id: e.referrerId,
        custom_id: e.customId,
        ...(0, i._n)(),
    };
    return (
        null != e.proxyTicket && (n.discord_proxy_ticket = e.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (n.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (n.channel_id = t.id),
        n
    );
}
