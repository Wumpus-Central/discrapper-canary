var l = n(582128),
    i = n(164636),
    r = n(71393),
    s = n(121681),
    a = n(770335),
    o = n(624793),
    u = n(652215);
n.d(
    t,
    {},
    {
        y: function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: d = !1 } = e,
                { joinedEmojiSourceGuildRecord: c, emoji: m } = (0, i.cf)([s.Ay, r.A], () => {
                    var e, n;
                    let l;
                    return (
                        (e = s.Ay),
                        (n = r.A),
                        (l = null != t ? e.getCustomEmojiById(t) : null),
                        l?.type === a.i.GUILD
                            ? { emoji: l, joinedEmojiSourceGuildRecord: n.getGuild(l?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                h = null != c,
                f = null != c && c.features.has(u.GuildFeatures.DISCOVERABLE),
                p = null != t && !(d && null != m) && (!h || f),
                [A, E] = l.useState(p),
                [g, v] = l.useState(null),
                j = null != c ? o.GO.createFromGuildRecord(c) : null,
                [x, _] = l.useState(j),
                [I, b] = l.useState(null),
                [S, T] = l.useState(null),
                y = l.useRef(n);
            return (
                l.useEffect(() => {
                    y.current = n;
                }),
                l.useEffect(() => {
                    (y.current?.(), p)
                        ? (async function () {
                              let e = null != t ? await (0, o.g_)(t) : null;
                              if (null != e)
                                  switch ((v(e.type), e.type)) {
                                      case o.rV.APPLICATION:
                                          b(e.application);
                                          break;
                                      case o.rV.GUILD:
                                          _(e.guild);
                                          break;
                                      case o.rV.PACK:
                                          T(e.pack);
                                  }
                              (E(!1), y.current?.());
                          })()
                        : y.current?.();
                }, [t, p]),
                {
                    expressionSourceGuild: x,
                    expressionSourceApplication: I,
                    expressionSourcePack: S,
                    sourceType: g,
                    joinedEmojiSourceGuildRecord: c,
                    hasJoinedEmojiSourceGuild: h,
                    emoji: m,
                    isFetching: A,
                }
            );
        },
    },
);
