n.d(t, { w: () => o });
var i = n(64700),
    s = n(311907),
    l = n(717421),
    a = n(775602),
    r = n(654487);
function o(e) {
    let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: o } = e,
        d = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        [c, u] = i.useState(!1),
        [p, h] = i.useState(!0),
        [m, _] = i.useState(!0),
        A = i.useRef(o),
        f = i.useCallback(
            (e) => {
                n || (h(!1), u(e));
            },
            [n],
        ),
        g = i.useCallback(() => {
            f(!0);
        }, [f]),
        x = i.useCallback(() => {
            f(!1);
        }, [f]),
        E = t ? r.ZV : r.Ko,
        [{ expansionSpring: C }, T] = (0, l.z)(() => ({
            from: { expansionSpring: 0 },
            config: E,
            onRest: () => {
                h(!0);
            },
            onStart: () => {
                h(!1);
            },
        }));
    i.useEffect(() => {
        T({ expansionSpring: +!!c, immediate: d });
    }, [c, T, d]);
    let { visibilitySpring: v } = (0, l.z)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!o },
        config: { tension: 250, friction: 10, clamp: !0 },
        onRest: () => {
            _(!0);
        },
        onStart: () => {
            _(!1);
        },
    });
    return (
        i.useLayoutEffect(() => {
            o !== A.current && _(!1), (A.current = o);
        }, [o]),
        {
            isExpanded: c,
            setIsExpanded: f,
            expandQuestBar: g,
            collapseQuestBar: x,
            isExpansionAnimationComplete: p,
            isVisibilityAnimationAtRest: m,
            expansionSpring: C,
            visibilitySpring: v,
            springConfig: E,
        }
    );
}
n(272111);
