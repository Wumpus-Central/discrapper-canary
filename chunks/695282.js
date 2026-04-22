"use strict";
n.d(t, { y: () => u });
var i = n(64700),
    l = n(417597),
    s = n(71393),
    r = n(508675),
    a = n(770335),
    o = n(624793),
    c = n(652215);
let u = (e) => {
    let { emojiId: t, refreshPositionKey: n } = e,
        { joinedEmojiSourceGuildRecord: u, emoji: d } = (0, l.cf)([r.Ay, s.A], () => {
            var e, n;
            let i;
            return (
                (e = r.Ay),
                (n = s.A),
                (i = null != t ? e.getCustomEmojiById(t) : null),
                i?.type === a.i.GUILD
                    ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                    : { emoji: null, joinedEmojiSourceGuildRecord: null }
            );
        }),
        h = null != u,
        m = null != u && u.features.has(c.GuildFeatures.DISCOVERABLE),
        p = (!h || m) && null != t,
        [f, g] = i.useState(p),
        [_, x] = i.useState(null),
        A = null != u ? o.GO.createFromGuildRecord(u) : null,
        [C, E] = i.useState(A),
        [I, v] = i.useState(null),
        y = i.useRef(n);
    return (
        i.useEffect(() => {
            y.current = n;
        }),
        i.useEffect(() => {
            y.current?.();
            let e = async () => {
                let e = null != t ? await (0, o.g_)(t) : null;
                if (null != e)
                    switch ((x(e.type), e.type)) {
                        case o.rV.APPLICATION:
                            v(e.application);
                            break;
                        case o.rV.GUILD:
                            E(e.guild);
                    }
                g(!1), y.current?.();
            };
            p ? e() : y.current?.();
        }, [t, p]),
        {
            expressionSourceGuild: C,
            expressionSourceApplication: I,
            sourceType: _,
            joinedEmojiSourceGuildRecord: u,
            hasJoinedEmojiSourceGuild: h,
            emoji: d,
            isFetching: f,
        }
    );
};
