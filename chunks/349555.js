n.d(t, { A: () => E });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    o = n(873263),
    d = n(497766),
    c = n(397927),
    u = n(927813),
    A = n(341915),
    h = n(710969),
    _ = n(439075),
    m = n(985018),
    g = n(142011);
let p = 4 * u.A.Millis.SECOND,
    E = a.forwardRef(function (e, t) {
        let {
                quests: n,
                excludedQuests: l,
                isFetching: u,
                hasFetched: E,
                hasFiltersApplied: I = !1,
                onClearFilters: f,
            } = e,
            C = (0, o.zy)(),
            T = a.useRef(""),
            [N, S] = a.useState(null),
            [x, v] = a.useState(0),
            [{ highlightAnimationProgress: y }, b] = (0, c.zhh)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: p },
            })),
            O = a.useCallback(
                (e) => {
                    let t = (0, h.vc)(e, n, l);
                    return null != t && (S(t.id), v((e) => e + 1), !0);
                },
                [n, l],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: O }), [O]),
            a.useLayoutEffect(() => {
                if (0 === C.hash.length) {
                    T.current = "";
                    return;
                }
                u || !E || (C.hash !== T.current && O(C.hash.slice(1)) && (T.current = C.hash));
            }, [C.hash, u, E, O]),
            a.useLayoutEffect(() => {
                if (null == N) return;
                let e = document.getElementById(`quest-tile-${N}`);
                null != e &&
                    (e.scrollIntoView({ behavior: "smooth", block: "center" }),
                    b({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || S(null);
                        },
                    }));
            }, [N, x, b]);
        let [L, R] = a.useState(window.innerWidth);
        a.useEffect(() => {
            let e = (0, s.debounce)(() => {
                R(window.innerWidth);
            }, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e);
                }
            );
        }, []);
        let P = L >= 1610 ? 3 : L >= 1340 ? 2 : 1;
        return u && 0 === n.length
            ? (0, i.jsx)(c.y$y, { className: g.u1 })
            : 0 === n.length
              ? (0, i.jsxs)("div", {
                    className: g.y7,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.intl.string(I ? m.t.PBfFnx : m.t.NqFP6z),
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            children: I ? m.intl.format(m.t.LdYS1H, { onClick: f }) : m.intl.string(m.t.LhD4yH),
                        }),
                    ],
                })
              : (0, i.jsx)("div", {
                    className: g.kL,
                    children: n.map((e, t) => {
                        let n = Math.floor(t / P),
                            a = N === e.id,
                            l = null != N && !a;
                        return (0, i.jsxs)(
                            d.animated.div,
                            {
                                className: r()({ [g.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, d.to)(
                                              [y.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : l
                                      ? {
                                            opacity: (0, d.to)(
                                                [y.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, i.jsx)("div", { className: g.E4 }, x),
                                    (0, i.jsx)(_.A, {
                                        quest: e,
                                        questContent: A.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: t,
                                        rowIndex: n,
                                        className: g.d,
                                        sourceQuestContent: A.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            e.id,
                        );
                    }),
                });
    });
