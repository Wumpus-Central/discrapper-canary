"use strict";
n.d(t, { y: () => d });
var r = n(64700),
    i = n(417597),
    a = n(71393),
    s = n(508675),
    o = n(770335),
    l = n(624793),
    u = n(652215);
let c = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        return r?.type === o.i.GUILD
            ? { emoji: r, joinedEmojiSourceGuildRecord: t.getGuild(r?.guildId) }
            : { emoji: null, joinedEmojiSourceGuildRecord: null };
    },
    d = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: o, emoji: d } = (0, i.cf)([s.Ay, a.A], () => c(s.Ay, a.A, t)),
            _ = null != o,
            f = null != o && o.features.has(u.GuildFeatures.DISCOVERABLE),
            p = (!_ || f) && null != t,
            [h, m] = r.useState(p),
            [g, E] = r.useState(null),
            A = null != o ? l.GO.createFromGuildRecord(o) : null,
            [I, T] = r.useState(A),
            [y, S] = r.useState(null),
            v = r.useRef(n);
        return (
            r.useEffect(() => {
                v.current = n;
            }),
            r.useEffect(() => {
                v.current?.();
                let e = async () => {
                    let e = null != t ? await (0, l.g_)(t) : null;
                    if (null != e)
                        switch ((E(e.type), e.type)) {
                            case l.rV.APPLICATION:
                                S(e.application);
                                break;
                            case l.rV.GUILD:
                                T(e.guild);
                        }
                    m(!1), v.current?.();
                };
                p ? e() : v.current?.();
            }, [t, p]),
            {
                expressionSourceGuild: I,
                expressionSourceApplication: y,
                sourceType: g,
                joinedEmojiSourceGuildRecord: o,
                hasJoinedEmojiSourceGuild: _,
                emoji: d,
                isFetching: h,
            }
        );
    };
