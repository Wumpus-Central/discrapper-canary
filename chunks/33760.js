let i = n(652215).BVt.FRIENDS;
function r(e, t) {
    return "route" === e.kind
        ? "route" === t.kind && e.routePath === t.routePath
        : "channel" === t.kind && e.channelId === t.channelId;
}
n.d(
    t,
    {},
    {
        ES: function (e) {
            return "route" === e.kind
                ? e.routePath === i
                    ? { kind: "dms" }
                    : null
                : null != e.guildId
                  ? { kind: "guild", guildId: e.guildId }
                  : { kind: "dms" };
        },
        Pp: r,
        Ss: function (e, t) {
            var n;
            return (
                !(!e.pinned || r(e, t)) &&
                (null == e.pinScope ||
                    ((n = e.pinScope),
                    "dms" === n.kind
                        ? "route" === t.kind
                            ? t.routePath !== i
                            : null != t.guildId
                        : "channel" !== t.kind || t.guildId !== n.guildId))
            );
        },
        _9: function (e, t) {
            return null == e || null == t
                ? null == e && null == t
                : "guild" === e.kind
                  ? "guild" === t.kind && e.guildId === t.guildId
                  : "dms" === t.kind;
        },
    },
);
