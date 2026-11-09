var l = n(582128),
    i = n(164636),
    r = n(71393),
    s = n(121681),
    a = n(770335),
    u = n(624793),
    o = n(652215);
n.d(
    t,
    {},
    {
        y: function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: d = !1 } = e,
                { joinedEmojiSourceGuildRecord: c, emoji: h } = (0, i.cf)([s.Ay, r.A], () => {
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
                m = null != c,
                f = null != c && c.features.has(o.GuildFeatures.DISCOVERABLE),
                p = null != t && !(d && null != h) && (!m || f),
                [g, A] = l.useState(p),
                [v, j] = l.useState(null),
                x = null != c ? u.GO.createFromGuildRecord(c) : null,
                [b, E] = l.useState(x),
                [N, S] = l.useState(null),
                [y, I] = l.useState(null),
                C = l.useRef(n);
            return (
                l.useEffect(() => {
                    C.current = n;
                }),
                l.useEffect(() => {
                    (C.current?.(), p)
                        ? (async function () {
                              let e = null != t ? await (0, u.g_)(t) : null;
                              if (null != e)
                                  switch ((j(e.type), e.type)) {
                                      case u.rV.APPLICATION:
                                          S(e.application);
                                          break;
                                      case u.rV.GUILD:
                                          E(e.guild);
                                          break;
                                      case u.rV.PACK:
                                          I(e.pack);
                                  }
                              (A(!1), C.current?.());
                          })()
                        : C.current?.();
                }, [t, p]),
                {
                    expressionSourceGuild: b,
                    expressionSourceApplication: N,
                    expressionSourcePack: y,
                    sourceType: v,
                    joinedEmojiSourceGuildRecord: c,
                    hasJoinedEmojiSourceGuild: m,
                    emoji: h,
                    isFetching: g,
                }
            );
        },
    },
);
