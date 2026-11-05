var i = n(582128),
    r = n(164636),
    l = n(71393),
    s = n(121681),
    o = n(770335),
    a = n(624793),
    u = n(652215);
n.d(
    e,
    {},
    {
        y: function (t) {
            let { emojiId: e, refreshPositionKey: n, skipKnownGuildEmojiFetch: d = !1 } = t,
                { joinedEmojiSourceGuildRecord: c, emoji: p } = (0, r.cf)([s.Ay, l.A], () => {
                    var t, n;
                    let i;
                    return (
                        (t = s.Ay),
                        (n = l.A),
                        (i = null != e ? t.getCustomEmojiById(e) : null),
                        i?.type === o.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                m = null != c,
                f = null != c && c.features.has(u.GuildFeatures.DISCOVERABLE),
                A = null != e && !(d && null != p) && (!m || f),
                [E, I] = i.useState(A),
                [g, j] = i.useState(null),
                v = null != c ? a.GO.createFromGuildRecord(c) : null,
                [U, x] = i.useState(v),
                [N, P] = i.useState(null),
                [S, y] = i.useState(null),
                C = i.useRef(n);
            return (
                i.useEffect(() => {
                    C.current = n;
                }),
                i.useEffect(() => {
                    (C.current?.(), A)
                        ? (async function () {
                              let t = null != e ? await (0, a.g_)(e) : null;
                              if (null != t)
                                  switch ((j(t.type), t.type)) {
                                      case a.rV.APPLICATION:
                                          P(t.application);
                                          break;
                                      case a.rV.GUILD:
                                          x(t.guild);
                                          break;
                                      case a.rV.PACK:
                                          y(t.pack);
                                  }
                              (I(!1), C.current?.());
                          })()
                        : C.current?.();
                }, [e, A]),
                {
                    expressionSourceGuild: U,
                    expressionSourceApplication: N,
                    expressionSourcePack: S,
                    sourceType: g,
                    joinedEmojiSourceGuildRecord: c,
                    hasJoinedEmojiSourceGuild: m,
                    emoji: p,
                    isFetching: E,
                }
            );
        },
    },
);
