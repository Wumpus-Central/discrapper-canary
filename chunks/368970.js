i.d(n, { default: () => j });
var t = i(477900);
i(582128);
var a = i(165862),
    r = i(477782),
    s = i(442433),
    o = i(847767),
    l = i(358367),
    c = i(793574),
    d = i(374846),
    u = i(50268),
    p = i(173936),
    m = i(859574),
    A = i(957565),
    g = i(792996),
    h = i(120747),
    f = i(827669),
    k = i(409626),
    I = i(692969),
    b = i(652215);
let j = (0, l.A)(
    (0, o.A)(
        function (e) {
            var n;
            let i,
                { gameId: o, gameName: l, authorId: c, onSelect: b, composerChannelId: j } = e,
                E =
                    ((i = (0, I.A)(
                        {
                            location: "useOpenGameProfileItem",
                            gameId: o,
                            source: k.GameProfileSources.GameMention,
                            trackEntryPointImpression: !0,
                            sourceUserId: c,
                        },
                        {},
                    )),
                    (0, t.jsx)(r.Dr, { id: "game-profile-item", label: g.intl.string(g.t.f7aVGn), action: i })),
                x =
                    ((n = (0, d.I)(j)),
                    (0, h.A)({ targetChannelId: n, mention: { display: `@${l}`, raw: (0, f.KW)(o) } })),
                C = A.p5
                    ? (0, t.jsx)(r.Dr, {
                          id: "copy-link",
                          label: g.intl.string(g.t.WqhZss),
                          icon: p.LinkIcon,
                          leadingAccessory: { type: "icon", icon: p.LinkIcon },
                          action: () => (0, A.C)((0, m.A)(o)),
                      })
                    : null,
                G = (0, u.A)({ id: o, label: g.intl.string(g.t.SHQGPj) });
            return (0, t.jsxs)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: "game-context",
                onClose: s.Z_,
                "aria-label": g.intl.string(g.t.Hf9fuS),
                onSelect: b,
                children: [(0, t.jsxs)(r.rX, { children: [E, x] }), (0, t.jsxs)(r.rX, { children: [C, G] })],
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GAME_MENU],
);
