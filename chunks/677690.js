n.d(t, { O_: () => c, pk: () => u, tg: () => d });
var r = n(73153),
    s = n(435183),
    o = n(734057),
    i = n(576705),
    l = n(975189),
    a = n(652215);
function c(e) {
    if (null == e || "object" != typeof e) return;
    let { status: t, channel_id: n } = e;
    return "skipped" === t
        ? { status: t }
        : "pinned" === t && "string" == typeof n
          ? { status: t, channelId: n }
          : void 0;
}
function d(e, t) {
    r.h.dispatch({ type: "CONJURE_VOICE_CHANNEL_PIN_RESOLVED", projectId: e, outcome: t });
    try {
        let n = (0, l.KY)(e);
        if (null == n) throw Error("Not connected");
        n.sendVoiceChannelPinOutcome(t);
    } catch (t) {
        console.warn("[conjure] could not record the voice channel pin", e, t);
    }
}
async function u(e, t) {
    let n;
    if (!(null != (n = o.A.getChannel(e)) && n.type === a.rbe.GUILD_VOICE && i.A.can(a.xBc.MANAGE_CHANNELS, n)))
        return !1;
    if (o.A.getChannel(e)?.application_id === t) return !0;
    try {
        let n = await (0, s.RT)(e, { applicationId: t });
        return !0 === n.ok;
    } catch {
        return !1;
    }
}
