n.d(t, { default: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(980707),
    r = n(477782),
    s = n(442433),
    c = n(847767),
    o = n(358367),
    u = n(793574),
    d = n(50268),
    A = n(17928),
    m = n(414798),
    p = n(734057),
    E = n(576705),
    g = n(309010),
    h = n(625494),
    S = n(652215),
    T = n(827669),
    b = n(375708),
    f = n(409626),
    j = n(692969);
let _ = (0, o.A)(
    (0, c.A)(
        function (e) {
            let t,
                { gameId: n, gameName: c, guildId: o, authorId: u, context: _, onSelect: C } = e,
                G =
                    ((t = (0, j.A)(
                        {
                            location: "useOpenGameProfileItem",
                            gameId: n,
                            source: f.GameProfileSources.GameMention,
                            trackEntryPointImpression: !0,
                            sourceUserId: u,
                        },
                        {},
                    )),
                    (0, i.jsx)(r.Dr, { id: "game-profile-item", label: b.intl.string(b.t.f7aVGn), action: t })),
                P = (function (e, t, n, a) {
                    let [s, c] = (0, A.yK)([g.A, p.A, E.A], () => {
                            let e = g.A.getChannelId(n),
                                t = p.A.getChannel(e);
                            return [e, null != t && (t.isPrivate() || E.A.can(S.xBc.SEND_MESSAGES, t))];
                        }, [n]),
                        o = a === S.BRT.POPOUT,
                        u = l.useCallback(() => {
                            if (null != s) {
                                let n, i;
                                (n = `@${t}`),
                                    (i = (0, T.KW)(e)),
                                    h._.dispatchToLastSubscribed(S.jej.INSERT_TEXT, { plainText: n, rawText: i }),
                                    null != s && m.A.startTyping(s);
                            }
                        }, [s, e, t]);
                    return !c || o
                        ? null
                        : (0, i.jsx)(r.Dr, { id: "mention", label: b.intl.string(b.t.P8tvKG), action: u });
                })(n, c, o, _),
                x = (0, d.A)({ id: n, label: b.intl.string(b.t.SHQGPj) });
            return (0, i.jsxs)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: "game-context",
                onClose: s.Z_,
                "aria-label": b.intl.string(b.t.Hf9fuS),
                onSelect: C,
                children: [(0, i.jsxs)(r.rX, { children: [G, P] }), (0, i.jsx)(r.rX, { children: x })],
            });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GAME_MENU],
);
