n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(873263),
    o = n(825638),
    d = n(535185),
    c = n(397927),
    u = n(927813),
    A = n(341915),
    h = n(710969),
    _ = n(439075),
    m = n(985018),
    g = n(121480);
let p = 4 * u.A.Millis.SECOND;
function E(e) {
    let { children: t } = e,
        n = l.useRef(null),
        [a, r] = l.useState(null),
        s = l.useCallback(() => {
            r(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(n.current),
            );
        }, [r]);
    return (
        (0, d.g)(n, s, [], { fireOnMount: !0 }),
        (0, i.jsx)("div", {
            className: g.kL,
            ref: n,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let I = l.forwardRef(function (e, t) {
    let {
            quests: n,
            excludedQuests: a,
            isFetching: d,
            hasFetched: u,
            hasFiltersApplied: I = !1,
            onClearFilters: f,
        } = e,
        C = (0, s.zy)(),
        T = l.useRef(""),
        [N, S] = l.useState(null),
        [x, v] = l.useState(0),
        [{ highlightAnimationProgress: b }, y] = (0, c.zhh)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: p },
        })),
        O = l.useCallback(
            (e) => {
                let t = (0, h.vc)(e, n, a);
                return null != t && (S(t.id), v((e) => e + 1), !0);
            },
            [n, a],
        );
    return (l.useImperativeHandle(t, () => ({ scrollToQuest: O }), [O]),
    l.useLayoutEffect(() => {
        if (0 === C.hash.length) {
            T.current = "";
            return;
        }
        d || !u || (C.hash !== T.current && O(C.hash.slice(1)) && (T.current = C.hash));
    }, [C.hash, d, u, O]),
    l.useLayoutEffect(() => {
        if (null == N) return;
        let e = document.getElementById(`quest-tile-${N}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            y({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || S(null);
                },
            }));
    }, [N, x, y]),
    d && 0 === n.length)
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
          : (0, i.jsx)(E, {
                children: (e) =>
                    n.map((t, n) => {
                        let l = Math.floor(n / e),
                            a = N === t.id,
                            s = null != N && !a;
                        return (0, i.jsxs)(
                            o.animated.div,
                            {
                                className: r()({ [g.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, o.to)(
                                              [b.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : s
                                      ? {
                                            opacity: (0, o.to)(
                                                [b.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, i.jsx)("div", { className: g.E4 }, x),
                                    (0, i.jsx)(_.A, {
                                        quest: t,
                                        questContent: A.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: n,
                                        rowIndex: l,
                                        className: g.d,
                                        sourceQuestContent: A.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
