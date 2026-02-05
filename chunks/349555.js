n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n(960488),
    d = n(397927),
    c = n(341915),
    u = n(710969),
    A = n(439075),
    h = n(985018),
    _ = n(142011);
function m(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: a,
            hasFetched: m,
            hasFiltersApplied: p = !1,
            onClearFilters: g,
        } = e,
        E = r.useRef(!1),
        f = (0, o.zy)(),
        I = r.useMemo(() => {
            if (f.hash.length > 0) {
                let e = f.hash.slice(1),
                    i = (0, u.vc)(e, t, n);
                if (null != i) return i.id;
            }
            return null;
        }, [t, n, f.hash]);
    r.useEffect(() => {
        E.current = !1;
    }, [f.hash]),
        r.useEffect(() => {
            if (null == I || E.current || a || !m) return;
            let e = document.getElementById(`quest-tile-${I}`);
            e?.scrollIntoView({ behavior: "smooth", block: "center" }), (E.current = !0);
        }, [t, I, f, a, m]);
    let C = null != I,
        [N, T] = r.useState(window.innerWidth);
    r.useEffect(() => {
        let e = (0, s.debounce)(() => {
            T(window.innerWidth);
        }, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                window.removeEventListener("resize", e);
            }
        );
    }, []);
    let S = N >= 1610 ? 3 : N >= 1340 ? 2 : 1;
    return a && 0 === t.length
        ? (0, i.jsx)(d.y$y, { className: _.u1 })
        : 0 === t.length
          ? (0, i.jsxs)("div", {
                className: _.y7,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-xl/semibold",
                        children: h.intl.string(p ? h.t.PBfFnx : h.t.NqFP6z),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: p ? h.intl.format(h.t.LdYS1H, { onClick: g }) : h.intl.string(h.t.LhD4yH),
                    }),
                ],
            })
          : (0, i.jsx)(
                "div",
                {
                    className: _.kL,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / S);
                        return (0, i.jsx)(
                            A.A,
                            {
                                quest: e,
                                questContent: c.uF.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: l()(_.d, { [_.wH]: C && e.id === I, [_.tP]: C && e.id !== I }),
                                sourceQuestContent: c.uF.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                I,
            );
}
