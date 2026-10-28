(t.r(s), t.d(s, { sponsoredQuestCollection: () => f, playgroundConfig: () => x }));
var o = t(477900),
    a = t(582128),
    n = t(17928),
    l = t(834730),
    r = t(859703),
    i = t(738822),
    u = t(77870),
    d = t(653819),
    m = t(814793),
    c = t(194267),
    p = t(652215),
    h = t(685144);
function g(e) {
    let { quest: s, gameIds: t } = e,
        { applications: n } = (0, u.fc)(s),
        r = a.useMemo(
            () =>
                t
                    .split(",")
                    .map((e) => e.trim())
                    .filter((e) => "" !== e),
            [t],
        ),
        g = r.length > 0 ? r : (n ?? []),
        f = a.useRef(null),
        x = a.useRef(null);
    return (0, o.jsxs)("div", {
        className: h.Z,
        children: [
            (0, o.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: `Quest: ${s.config.messages.gameTitle}${(0, m.ui)(s) ? "" : " (not a sponsored play quest, so enter game IDs)"}`,
            }),
            (0, o.jsx)("div", {
                className: h.y,
                children: (0, o.jsx)(d.n.Provider, {
                    value: f,
                    children: (0, o.jsx)(
                        c.N,
                        {
                            quest: s,
                            applications: g,
                            onClose: p.tEg,
                            sourceQuestContent: i.uF.QUEST_BAR_V2,
                            impressionRef: x,
                            onGameProfileModalOpen: p.tEg,
                            onGameProfileModalClose: p.tEg,
                        },
                        g.join(","),
                    ),
                }),
            }),
            (0, o.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children:
                    "Clicking a game opens its profile and sends quest click analytics for this quest. Games that fail to load open the game sheet error modal.",
            }),
        ],
    });
}
let f = {
        id: "sponsored-quest",
        name: "Sponsored Quests",
        groups: [
            {
                title: "Sponsored Quest Game Sheet",
                stories: [
                    {
                        name: "Game Sheet",
                        id: "game-sheet",
                        component: function (e) {
                            let { gameIds: s } = e,
                                t = (0, n.bG)([r.A], () => {
                                    let e = Array.from(r.A.quests.values());
                                    return e.find(m.ui) ?? e[0] ?? null;
                                });
                            return null == t
                                ? (0, o.jsx)(l.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No quests are loaded yet. Open Quest Home once, then come back.",
                                  })
                                : (0, o.jsx)(g, { quest: t, gameIds: s });
                        },
                        controls: {
                            gameIds: { label: "Game IDs (comma-separated, optional)", type: "text", defaultValue: "" },
                        },
                    },
                ],
            },
        ],
        tags: ["Quests", "Sponsored Quests", "Game Sheet"],
    },
    x = { playgroundBaseUrl: "sponsored-quest", collections: [f] };
