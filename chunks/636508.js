n.d(t, {
    $: () => r,
    W: () => d
});
var a = n(192379),
    i = n(442837),
    l = n(592125),
    s = n(944486),
    c = n(914010),
    o = n(771845);
function r() {
    var e;
    let { allowGdmActivityChannelSuggestion: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowGdmActivityChannelSuggestion: !1 },
        n = s.Z.getVoiceChannelId(),
        a = l.Z.getChannel(n);
    return null != a && null != a.guild_id ? a.guild_id : null != a && t ? void 0 : null !== (e = c.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0];
}
function d() {
    let e = (0, i.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
    return a.useMemo(
        () =>
            e.map((e) => ({
                label: e,
                value: e
            })),
        [e]
    );
}
