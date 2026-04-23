s.d(t, { A: () => b });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(873263),
    o = s(419354),
    c = s(535185),
    u = s(717421),
    d = s(289873),
    _ = s(534514),
    m = s(834730),
    h = s(927813),
    x = s(341915),
    f = s(710969),
    E = s(439075),
    p = s(985018),
    g = s(121480);
let A = 4 * h.A.Millis.SECOND;
function C(e) {
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
            className: g.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== a && t(a),
        })
    );
}
let b = l.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: a,
            isFetching: c,
            hasFetched: h,
            hasFiltersApplied: b = !1,
            onClearFilters: j,
        } = e,
        v = (0, i.zy)(),
        N = l.useRef(""),
        [T, S] = l.useState(null),
        [O, L] = l.useState(0),
        [{ highlightAnimationProgress: I }, y] = (0, u.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: A },
        })),
        R = l.useCallback(
            (e) => {
                let t = (0, f.vc)(e, s, a);
                return null != t && (S(t.id), L((e) => e + 1), !0);
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
            y({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || S(null);
                },
            }));
    }, [T, O, y]),
    c && 0 === s.length)
        ? (0, n.jsx)(d.y, { className: g.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: g.y7,
                children: [
                    (0, n.jsx)(_.D, {
                        variant: "heading-xl/semibold",
                        children: p.intl.string(b ? p.t.PBfFnx : p.t.NqFP6z),
                    }),
                    (0, n.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: b ? p.intl.format(p.t.LdYS1H, { onClick: j }) : p.intl.string(p.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(C, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            a = T === t.id,
                            i = null != T && !a;
                        return (0, n.jsxs)(
                            o.animated.div,
                            {
                                className: r()({ [g.XB]: a }),
                                style: a
                                    ? {
                                          boxShadow: (0, o.to)(
                                              [I.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, o.to)(
                                                [I.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    a && (0, n.jsx)("div", { className: g.E4 }, O),
                                    (0, n.jsx)(E.A, {
                                        quest: t,
                                        questContent: x.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: g.d,
                                        sourceQuestContent: x.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
