t.d(n, {
    D: function () {
        return a;
    }
});
var i = t(192379),
    l = t(430824);
function a(e) {
    return i.useMemo(() => {
        var n;
        return 'contextless' === (n = e).type
            ? {
                  channel: void 0,
                  guild: void 0
              }
            : {
                  channel: n.channel,
                  guild: l.Z.getGuild(n.channel.guild_id)
              };
    }, [e]);
}
