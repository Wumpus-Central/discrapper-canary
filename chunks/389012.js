n.d(t, { a: () => o }), n(388685);
var a = n(473749),
    r = n(442837),
    i = n(481060),
    l = n(607070),
    s = n(324805);
function o(e) {
    let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: o } = e,
        c = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
        [d, u] = a.useState(!1),
        [m, p] = a.useState(!0),
        [h, f] = a.useState(!0),
        x = a.useRef(o),
        b = a.useCallback(
            (e) => {
                n || (p(!1), u(e));
            },
            [n],
        ),
        g = a.useCallback(() => {
            b(!0);
        }, [b]),
        v = a.useCallback(() => {
            b(!1);
        }, [b]),
        j = t ? s.XZ : s.R4,
        [{ expansionSpring: y }, C] = (0, i.q_F)(() => ({
            from: { expansionSpring: 0 },
            config: j,
            onRest: () => {
                p(!0);
            },
            onStart: () => {
                p(!1);
            },
        }));
    a.useEffect(() => {
        C({
            expansionSpring: +!!d,
            immediate: c,
        });
    }, [d, C, c]);
    let { visibilitySpring: _ } = (0, i.q_F)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!o },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0,
        },
        onRest: () => {
            f(!0);
        },
        onStart: () => {
            f(!1);
        },
    });
    return (
        a.useLayoutEffect(() => {
            o !== x.current && f(!1), (x.current = o);
        }, [o]),
        {
            isExpanded: d,
            setIsExpanded: b,
            expandQuestBar: g,
            collapseQuestBar: v,
            isExpansionAnimationComplete: m,
            isVisibilityAnimationAtRest: h,
            expansionSpring: y,
            visibilitySpring: _,
            springConfig: j,
        }
    );
}
