n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(843611),
    c = n(481060),
    u = n(497505),
    d = n(415104),
    p = n(388032),
    f = n(334525);
function m(e) {
    let { quests: t, isFetching: n, hasFetched: l, hasFiltersApplied: m = !1, onClearFilters: h } = e,
        g = i.useRef(!1),
        _ = (0, o.TH)(),
        b = i.useMemo(() => {
            if (_.hash.length > 0) {
                let e = _.hash.slice(1);
                for (let n of t) if (n.id === e) return e;
            }
            return null;
        }, [t, _.hash]);
    i.useEffect(() => {
        g.current = !1;
    }, [_.hash]),
        i.useEffect(() => {
            if (null == b || g.current || n || !l) return;
            let e = document.getElementById("quest-tile-".concat(b));
            null == e ||
                e.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                }),
                (g.current = !0);
        }, [t, b, _, n, l]);
    let E = null != b,
        [O, I] = i.useState(window.innerWidth);
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
    let y = O >= 1610 ? 3 : O >= 1340 ? 2 : 1;
    return n && 0 === t.length
        ? (0, r.jsx)(c.$jN, { className: f.spinner })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: f.emptyStateContainer,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        children: p.intl.string(m ? p.t.PBfFnx : p.t.NqFP6z),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: m ? p.intl.format(p.t.LdYS1H, { onClick: h }) : p.intl.string(p.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(
                "div",
                {
                    className: f.container,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / y);
                        return (0, r.jsx)(
                            d.Z,
                            {
                                quest: e,
                                questContent: u.jn.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(f.questTile, {
                                    [f.selected]: E && e.id === b,
                                    [f.unselected]: E && e.id !== b,
                                }),
                                sourceQuestContent: u.jn.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                b,
            );
}
