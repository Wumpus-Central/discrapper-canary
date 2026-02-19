n.d(t, { w: () => o });
var a = n(64700),
    i = n(311907),
    s = n(397927),
    l = n(775602),
    r = n(654487);
function o(e) {
    let {
            isQuestAccepted: t,
            isQuestCompleted: n,
            isQuestBarVisible: o,
            unfurlEnabled: d,
            hasSeenUnfurl: c,
            onUnfurlDismissed: u,
        } = e,
        m = d && !t && !c,
        [h, x] = a.useState(m ? "unfurledWithTimeout" : "none"),
        p = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        [g, _] = a.useState(m),
        [f, b] = a.useState(!g),
        [v, j] = a.useState(!0),
        C = a.useRef(o),
        A = a.useCallback(
            (e) => {
                n || (b(!1), _(e));
            },
            [n],
        ),
        T = a.useCallback(() => {
            A(!0);
        }, [A]),
        y = a.useCallback(() => {
            A(!1);
        }, [A]),
        S = t ? r.ZV : r.Ko,
        [{ expansionSpring: E }, N] = (0, s.zhh)(() => ({
            from: { expansionSpring: 0 },
            config: S,
            onRest: (e) => {
                b(!0), 0 === e.value && x("none");
            },
            onStart: () => {
                b(!1);
            },
        }));
    a.useEffect(() => {
        N({ expansionSpring: +!!g, immediate: p });
    }, [g, N, p]);
    let { visibilitySpring: I } = (0, s.zhh)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: +!!o },
        config: { tension: 250, friction: 10, clamp: !0 },
        onRest: () => {
            j(!0);
        },
        onStart: () => {
            j(!1);
        },
    });
    a.useLayoutEffect(() => {
        o !== C.current && j(!1), (C.current = o);
    }, [o]);
    let k = a.useCallback(() => {
            "unfurledWithTimeout" === h && (x("unfurledWithTimeoutCanceled"), u());
        }, [u, h]),
        R = a.useCallback(() => {
            A(!1), u();
        }, [A, u]);
    return {
        isExpanded: g,
        setIsExpanded: A,
        expandQuestBar: T,
        collapseQuestBar: y,
        isExpansionAnimationComplete: f,
        isVisibilityAnimationAtRest: v,
        expansionSpring: E,
        visibilitySpring: I,
        springConfig: S,
        onQuestBarFocus: k,
        onUnfurlTimeoutComplete: R,
        isUnfurl: "none" !== h,
        isUnfurlTimeoutActive: "unfurledWithTimeout" === h,
    };
}
n(272111);
