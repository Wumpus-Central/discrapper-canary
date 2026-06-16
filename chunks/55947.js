n.d(e, { default: () => _ });
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
    p = n(414798),
    E = n(734057),
    b = n(576705),
    g = n(309010),
    h = n(625494),
    m = n(652215),
    T = n(827669),
    S = n(375708),
    f = n(409626),
    j = n(692969);
let _ = (0, o.A)(
    (0, c.A)(
        function (t) {
            let e,
                { gameId: n, gameName: c, guildId: o, authorId: u, context: _, onSelect: C } = t,
                x =
                    ((e = (0, j.A)(
                        {
                            location: "useOpenGameProfileItem",
                            gameId: n,
                            source: f.Ob.GameMention,
                            trackEntryPointImpression: !0,
                            sourceUserId: u,
                        },
                        {},
                    )),
                    (0, i.jsx)(r.Dr, { id: "game-profile-item", label: S.intl.string(S.t.f7aVGn), action: e })),
                G = (function (t, e, n, a) {
                    let [s, c] = (0, A.yK)([g.A, E.A, b.A], () => {
                            let t = g.A.getChannelId(n),
                                e = E.A.getChannel(t);
                            return [t, null != e && (e.isPrivate() || b.A.can(m.xBc.SEND_MESSAGES, e))];
                        }, [n]),
                        o = a === m.BRT.POPOUT,
                        u = l.useCallback(() => {
                            if (null != s) {
                                let n, i;
                                (n = `@${e}`),
                                    (i = (0, T.K)(t)),
                                    h._.dispatchToLastSubscribed(m.jej.INSERT_TEXT, { plainText: n, rawText: i }),
                                    null != s && p.A.startTyping(s);
                            }
                        }, [s, t, e]);
                    return !c || o
                        ? null
                        : (0, i.jsx)(r.Dr, { id: "mention", label: S.intl.string(S.t.P8tvKG), action: u });
                })(n, c, o, _),
                I = (0, d.A)({ id: n, label: S.intl.string(S.t.SHQGPj) });
            return (0, i.jsxs)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: "game-context",
                onClose: s.Z_,
                "aria-label": S.intl.string(S.t.Hf9fuS),
                onSelect: C,
                children: [(0, i.jsxs)(r.rX, { children: [x, G] }), (0, i.jsx)(r.rX, { children: I })],
            });
        },
        { object: m.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GAME_MENU],
);
