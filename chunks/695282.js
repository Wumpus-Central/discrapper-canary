"use strict";
n.d(t, { y: () => c });
var r = n(64700),
    i = n(417597),
    s = n(71393),
    a = n(508675),
    o = n(770335),
    l = n(624793),
    u = n(652215);
let c = (e) => {
    let { emojiId: t, refreshPositionKey: n } = e,
        { joinedEmojiSourceGuildRecord: c, emoji: d } = (0, i.cf)([a.Ay, s.A], () => {
            var e, n;
            let r;
            return (
                (e = a.Ay),
                (n = s.A),
                (r = null != t ? e.getCustomEmojiById(t) : null),
                r?.type === o.i.GUILD
                    ? { emoji: r, joinedEmojiSourceGuildRecord: n.getGuild(r?.guildId) }
                    : { emoji: null, joinedEmojiSourceGuildRecord: null }
            );
        }),
        _ = null != c,
        f = null != c && c.features.has(u.GuildFeatures.DISCOVERABLE),
        p = (!_ || f) && null != t,
        [h, E] = r.useState(p),
        [m, g] = r.useState(null),
        A = null != c ? l.GO.createFromGuildRecord(c) : null,
        [I, T] = r.useState(A),
        [S, y] = r.useState(null),
        N = r.useRef(n);
    return (
        r.useEffect(() => {
            N.current = n;
        }),
        r.useEffect(() => {
            N.current?.();
            let e = async () => {
                let e = null != t ? await (0, l.g_)(t) : null;
                if (null != e)
                    switch ((g(e.type), e.type)) {
                        case l.rV.APPLICATION:
                            y(e.application);
                            break;
                        case l.rV.GUILD:
                            T(e.guild);
                    }
                E(!1), N.current?.();
            };
            p ? e() : N.current?.();
        }, [t, p]),
        {
            expressionSourceGuild: I,
            expressionSourceApplication: S,
            sourceType: m,
            joinedEmojiSourceGuildRecord: c,
            hasJoinedEmojiSourceGuild: _,
            emoji: d,
            isFetching: h,
        }
    );
};
