n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(481060),
    c = n(497505),
    u = n(415104),
    d = n(388032),
    p = n(334525);
function f(e) {
    let { quests: t, isFetching: n, hasFiltersApplied: l = !1, onClearFilters: f } = e,
        h = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let n of t)
            if (n.id === e) {
                h = e;
                break;
            }
    }
    i.useEffect(() => {
        for (let e of t)
            if (e.id === h) {
                let e = document.getElementById("quest-tile-".concat(h));
                null == e ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                break;
            }
    }, [t, h]);
    let g = null != h,
        [m, b] = i.useState(window.innerWidth);
    i.useEffect(() => {
        let e = (0, o.debounce)(() => {
            b(window.innerWidth);
        }, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                window.removeEventListener("resize", e);
            }
        );
    }, []);
    let _ = m >= 1610 ? 3 : m >= 1340 ? 2 : 1;
    return n && 0 === t.length
        ? (0, r.jsx)(s.$jN, { className: p.spinner })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: p.emptyStateContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-xl/semibold",
                        children: d.intl.string(l ? d.t.PBfFn5 : d.t["NqFP6+"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: l ? d.intl.format(d.t.LdYS1N, { onClick: f }) : d.intl.string(d.t.LhD4yM),
                    }),
                ],
            })
          : (0, r.jsx)(
                "div",
                {
                    className: p.container,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / _);
                        return (0, r.jsx)(
                            u.Z,
                            {
                                quest: e,
                                questContent: c.jn.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(p.questTile, {
                                    [p.selected]: g && e.id === h,
                                    [p.unselected]: g && e.id !== h,
                                }),
                                sourceQuestContent: c.jn.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                h,
            );
}
