n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(497505),
    c = n(415104),
    u = n(388032),
    d = n(334525);
function p(e) {
    let { quests: t, isFetching: n } = e,
        l = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let n of t)
            if (n.id === e) {
                l = e;
                break;
            }
    }
    i.useEffect(() => {
        for (let e of t)
            if (e.id === l) {
                let e = document.getElementById("quest-tile-".concat(l));
                null == e ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                break;
            }
    }, [t, l]);
    let p = null != l,
        [f, h] = i.useState(window.innerWidth);
    i.useEffect(() => {
        let e = () => {
            h(window.innerWidth);
        };
        return (
            window.addEventListener("resize", e),
            () => {
                window.removeEventListener("resize", e);
            }
        );
    }, []);
    let g = f >= 1610 ? 3 : f >= 1340 ? 2 : 1;
    return n && 0 === t.length
        ? (0, r.jsx)(o.$jN, { className: d.spinner })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: d.emptyStateContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["NqFP6+"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: u.intl.string(u.t.LhD4yM),
                    }),
                ],
            })
          : (0, r.jsx)(
                "div",
                {
                    className: d.container,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / g);
                        return (0, r.jsx)(
                            c.Z,
                            {
                                quest: e,
                                questContent: s.jn.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(d.questTile, {
                                    [d.selected]: p && e.id === l,
                                    [d.unselected]: p && e.id !== l,
                                }),
                                sourceQuestContent: s.jn.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                l,
            );
}
