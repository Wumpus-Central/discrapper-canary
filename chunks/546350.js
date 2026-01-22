n.d(t, {
    w: () => o,
}),
    n(896048);
var a = n(64700),
    l = n(311907),
    i = n(397927),
    r = n(775602),
    s = n(654487);

function o(e) {
    let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: o } = e,
        c = (0, l.bG)([r.A], () => r.A.useReducedMotion),
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
        j = t ? s.ZV : s.Ko,
        [{ expansionSpring: y }, _] = (0, i.zhh)(() => ({
            from: {
                expansionSpring: 0,
            },
            config: j,
            onRest: () => {
                p(!0);
            },
            onStart: () => {
                p(!1);
            },
        }));
    a.useEffect(() => {
        _({
            expansionSpring: +!!d,
            immediate: c,
        });
    }, [d, _, c]);
    let { visibilitySpring: A } = (0, i.zhh)({
        from: {
            visibilitySpring: 0,
        },
        to: {
            visibilitySpring: +!!o,
        },
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
            visibilitySpring: A,
            springConfig: j,
        }
    );
}
