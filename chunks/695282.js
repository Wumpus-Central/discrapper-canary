n.d(t, {
    y: () => d,
}),
    n(896048);
var r = n(64700),
    i = n(417597),
    a = n(71393),
    s = n(508675),
    o = n(770335),
    l = n(624793),
    c = n(652215);
let u = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        return (null == r ? void 0 : r.type) === o.i.GUILD
            ? {
                  emoji: r,
                  joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId),
              }
            : {
                  emoji: null,
                  joinedEmojiSourceGuildRecord: null,
              };
    },
    d = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: o, emoji: d } = (0, i.cf)([s.Ay, a.A], () => u(s.Ay, a.A, t)),
            f = null != o,
            p = null != o && o.features.has(c.GuildFeatures.DISCOVERABLE),
            _ = (!f || p) && null != t,
            [h, m] = r.useState(_),
            [g, E] = r.useState(null),
            b = null != o ? l.GO.createFromGuildRecord(o) : null,
            [y, O] = r.useState(b),
            [A, v] = r.useState(null),
            S = r.useRef(n);
        return (
            r.useEffect(() => {
                S.current = n;
            }),
            r.useEffect(() => {
                var e, n;
                null == (e = S.current) || e.call(S);
                let r = async () => {
                    var e;
                    let n = null != t ? await (0, l.g_)(t) : null;
                    if (null != n)
                        switch ((E(n.type), n.type)) {
                            case l.rV.APPLICATION:
                                v(n.application);
                                break;
                            case l.rV.GUILD:
                                O(n.guild);
                        }
                    m(!1), null == (e = S.current) || e.call(S);
                };
                _ ? r() : null == (n = S.current) || n.call(S);
            }, [t, _]),
            {
                expressionSourceGuild: y,
                expressionSourceApplication: A,
                sourceType: g,
                joinedEmojiSourceGuildRecord: o,
                hasJoinedEmojiSourceGuild: f,
                emoji: d,
                isFetching: h,
            }
        );
    };
