n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(960488),
    c = n(397927),
    u = n(341915),
    d = n(710969),
    p = n(439075),
    f = n(985018),
    h = n(142011);

function A(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: l,
            hasFetched: A,
            hasFiltersApplied: g = !1,
            onClearFilters: m,
        } = e,
        b = i.useRef(!1),
        _ = (0, o.zy)(),
        E = i.useMemo(() => {
            if (_.hash.length > 0) {
                let e = _.hash.slice(1),
                    r = (0, d.vc)(e, t, n);
                if (null != r) return r.id;
            }
            return null;
        }, [t, n, _.hash]);
    i.useEffect(() => {
        b.current = !1;
    }, [_.hash]),
        i.useEffect(() => {
            if (null == E || b.current || l || !A) return;
            let e = document.getElementById("quest-tile-".concat(E));
            null == e ||
                e.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                }),
                (b.current = !0);
        }, [t, E, _, l, A]);
    let O = null != E,
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
    let v = y >= 1610 ? 3 : y >= 1340 ? 2 : 1;
    return l && 0 === t.length
        ? (0, r.jsx)(c.y$y, {
              className: h.u1,
          })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: h.y7,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.intl.string(g ? f.t.PBfFnx : f.t.NqFP6z),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: g
                            ? f.intl.format(f.t.LdYS1H, {
                                  onClick: m,
                              })
                            : f.intl.string(f.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(
                "div",
                {
                    className: h.kL,
                    children: t.map((e, t) => {
                        let n = Math.floor(t / v);
                        return (0, r.jsx)(
                            p.A,
                            {
                                quest: e,
                                questContent: u.uF.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(h.d, {
                                    [h.wH]: O && e.id === E,
                                    [h.tP]: O && e.id !== E,
                                }),
                                sourceQuestContent: u.uF.QUEST_HOME_DESKTOP,
                            },
                            e.id,
                        );
                    }),
                },
                E,
            );
}
