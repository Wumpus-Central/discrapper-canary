n.d(t, {
    $: function () {
        return r;
    },
    W: function () {
        return d;
    }
});
var i = n(192379),
    a = n(442837),
    l = n(592125),
    s = n(944486),
    c = n(914010),
    o = n(771845);
function r() {
    var e;
    let { allowGdmActivityChannelSuggestion: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowGdmActivityChannelSuggestion: !1 },
        n = s.Z.getVoiceChannelId(),
        i = l.Z.getChannel(n);
    if (null != i && null != i.guild_id) return i.guild_id;
    if (null == i || !t) return null !== (e = c.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0];
}
function d() {
    let e = (0, a.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
    return i.useMemo(
        () =>
            e.map((e) => ({
                label: e,
                value: e
            })),
        [e]
    );
}
