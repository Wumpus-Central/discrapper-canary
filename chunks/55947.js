n.d(t, { default: () => _ });
var i = n(477900),
    l = n(582128),
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
                { gameId: n, gameName: c, authorId: o, context: u, onSelect: _ } = e,
                C =
                    ((t = (0, j.A)(
                        {
                            location: "useOpenGameProfileItem",
                            gameId: n,
                            source: f.GameProfileSources.GameMention,
                            trackEntryPointImpression: !0,
                            sourceUserId: o,
                        },
                        {},
                    )),
                    (0, i.jsx)(r.Dr, { id: "game-profile-item", label: b.intl.string(b.t.f7aVGn), action: t })),
                G = (function (e, t, n) {
                    let [a, s] = (0, A.yK)([g.Ay, p.A, E.A], () => {
                            let e = g.Ay.getChannelId(),
                                t = p.A.getChannel(e);
                            return [e, null != t && (t.isPrivate() || E.A.can(S.xBc.SEND_MESSAGES, t))];
                        }),
                        c = n === S.BRT.POPOUT,
                        o = l.useCallback(() => {
                            if (null != a) {
                                let n, i;
                                (n = `@${t}`),
                                    (i = (0, T.KW)(e)),
                                    h._.dispatchToLastSubscribed(S.jej.INSERT_TEXT, { plainText: n, rawText: i }),
                                    null != a && m.A.startTyping(a);
                            }
                        }, [a, e, t]);
                    return !s || c
                        ? null
                        : (0, i.jsx)(r.Dr, { id: "mention", label: b.intl.string(b.t.P8tvKG), action: o });
                })(n, c, u),
                P = (0, d.A)({ id: n, label: b.intl.string(b.t.SHQGPj) });
            return (0, i.jsxs)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: "game-context",
                onClose: s.Z_,
                "aria-label": b.intl.string(b.t.Hf9fuS),
                onSelect: _,
                children: [(0, i.jsxs)(r.rX, { children: [C, G] }), (0, i.jsx)(r.rX, { children: P })],
            });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GAME_MENU],
);
