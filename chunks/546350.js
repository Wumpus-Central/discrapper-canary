n.d(t, { w: () => o });
var a = n(64700),
    s = n(311907),
    i = n(397927),
    l = n(775602),
    r = n(654487);
function o(e) {
    let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: o, unfurlEnabled: d } = e,
        c = d && !t,
        [u, m] = a.useState(c ? "unfurledWithTimeout" : "none"),
        h = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [x, p] = a.useState(c),
        [g, _] = a.useState(!x),
        [f, v] = a.useState(!0),
        b = a.useRef(o),
        j = a.useCallback(
            (e) => {
                n || (_(!1), p(e));
            },
            [n],
        ),
        A = a.useCallback(() => {
            j(!0);
        }, [j]),
        C = a.useCallback(() => {
            j(!1);
        }, [j]),
        S = t ? r.ZV : r.Ko,
        [{ expansionSpring: T }, y] = (0, i.zhh)(() => ({
            from: { expansionSpring: 0 },
            config: S,
            onRest: (e) => {
                _(!0), 0 === e.value && m("none");
            },
            onStart: () => {
                _(!1);
            },
        }));
    a.useEffect(() => {
        y({ expansionSpring: +!!x, immediate: h });
    }, [x, y, h]);
    let { visibilitySpring: N } = (0, i.zhh)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!o },
        config: { tension: 250, friction: 10, clamp: !0 },
        onRest: () => {
            v(!0);
        },
        onStart: () => {
            v(!1);
        },
    });
    a.useLayoutEffect(() => {
        o !== b.current && v(!1), (b.current = o);
    }, [o]);
    let E = a.useCallback(() => {
            m((e) => ("unfurledWithTimeout" === e ? "unfurledWithTimeoutCanceled" : e));
        }, []),
        I = a.useCallback(() => {
            j(!1);
        }, [j]);
    return {
        isExpanded: x,
        setIsExpanded: j,
        expandQuestBar: A,
        collapseQuestBar: C,
        isExpansionAnimationComplete: g,
        isVisibilityAnimationAtRest: f,
        expansionSpring: T,
        visibilitySpring: N,
        springConfig: S,
        onQuestBarFocus: E,
        onUnfurlTimeoutComplete: I,
        isUnfurl: "none" !== u,
        isUnfurlTimeoutActive: "unfurledWithTimeout" === u,
    };
}
