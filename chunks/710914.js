n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(828700),
    c = n(481060),
    u = n(49436),
    d = n(509212),
    p = n(415104),
    f = n(388032),
    h = n(334525);
function g(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: l,
            hasFetched: g,
            hasFiltersApplied: m = !1,
            onClearFilters: _,
        } = e,
        b = i.useRef(!1),
        E = (0, o.TH)(),
        O = i.useMemo(() => {
            if (E.hash.length > 0) {
                let e = E.hash.slice(1),
                    r = (0, d._x)(e, t, n);
                if (null != r) return r.id;
            }
            return null;
        }, [t, n, E.hash]);
    i.useEffect(() => {
        b.current = !1;
    }, [E.hash]),
        i.useEffect(() => {
            if (null == O || b.current || l || !g) return;
            let e = document.getElementById("quest-tile-".concat(O));
            null == e ||
                e.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                }),
                (b.current = !0);
        }, [t, O, E, l, g]);
    let v = null != O,
        [y, I] = i.useState(window.innerWidth);
    i.useEffect(() => {
        let e = (0, s.debounce)(() => {
            I(window.innerWidth);
        }, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                window.removeEventListener("resize", e);
            }
        );
    }, []);
    let C = y >= 1610 ? 3 : y >= 1340 ? 2 : 1;
    return l && 0 === t.length
        ? (0, r.jsx)(c.$jN, { className: h.spinner })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: h.emptyStateContainer,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.intl.string(m ? f.t.PBfFnx : f.t.NqFP6z),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: m ? f.intl.format(f.t.LdYS1H, { onClick: _ }) : f.intl.string(f.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(
                "div",
                {
                    className: h.container,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / C);
                        return (0, r.jsx)(
                            p.Z,
                            {
                                quest: e,
                                questContent: u.jn.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(h.questTile, {
                                    [h.selected]: v && e.id === O,
                                    [h.unselected]: v && e.id !== O,
                                }),
                                sourceQuestContent: u.jn.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                O,
            );
}
