s.d(t, { A: () => C });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(873263),
    o = s(517738),
    c = s(535185),
    u = s(717421),
    d = s(289873),
    m = s(534514),
    _ = s(834730),
    h = s(927813),
    x = s(341915),
    f = s(710969),
    b = s(439075),
    p = s(985018),
    A = s(121480);
let g = 4 * h.A.Millis.SECOND;
function E(e) {
    let { children: t } = e,
        s = l.useRef(null),
        [a, r] = l.useState(null),
        i = l.useCallback(() => {
            r(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [r]);
    return (
        (0, c.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: A.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let C = l.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: a,
            isFetching: c,
            hasFetched: h,
            hasFiltersApplied: C = !1,
            onClearFilters: j,
        } = e,
        v = (0, i.zy)(),
        N = l.useRef(""),
        [T, S] = l.useState(null),
        [L, I] = l.useState(0),
        [{ highlightAnimationProgress: y }, O] = (0, u.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: g },
        })),
        R = l.useCallback(
            (e) => {
                let t = (0, f.vc)(e, s, a);
                return null != t && (S(t.id), I((e) => e + 1), !0);
            },
            [s, a],
        );
    return (l.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
    l.useLayoutEffect(() => {
        if (0 === v.hash.length) {
            N.current = "";
            return;
        }
        c || !h || (v.hash !== N.current && R(v.hash.slice(1)) && (N.current = v.hash));
    }, [v.hash, c, h, R]),
    l.useLayoutEffect(() => {
        if (null == T) return;
        let e = document.getElementById(`quest-tile-${T}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            O({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || S(null);
                },
            }));
    }, [T, L, O]),
    c && 0 === s.length)
        ? (0, n.jsx)(d.y, { className: A.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: A.y7,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-xl/semibold",
                        children: p.intl.string(C ? p.t.PBfFnx : p.t.NqFP6z),
                    }),
                    (0, n.jsx)(_.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: C ? p.intl.format(p.t.LdYS1H, { onClick: j }) : p.intl.string(p.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(E, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            a = T === t.id,
                            i = null != T && !a;
                        return (0, n.jsxs)(
                            o.animated.div,
                            {
                                className: r()({ [A.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, o.to)(
                                              [y.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, o.to)(
                                                [y.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, n.jsx)("div", { className: A.E4 }, L),
                                    (0, n.jsx)(b.A, {
                                        quest: t,
                                        questContent: x.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: A.d,
                                        sourceQuestContent: x.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
