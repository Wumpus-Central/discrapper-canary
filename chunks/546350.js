n.d(t, { w: () => o });
var a = n(64700),
    s = n(311907),
    i = n(397927),
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
        p = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [g, f] = a.useState(m),
        [_, v] = a.useState(!g),
        [b, j] = a.useState(!0),
        A = a.useRef(o),
        C = a.useCallback(
            (e) => {
                n || (v(!1), f(e));
            },
            [n],
        ),
        S = a.useCallback(() => {
            C(!0);
        }, [C]),
        T = a.useCallback(() => {
            C(!1);
        }, [C]),
        y = t ? r.ZV : r.Ko,
        [{ expansionSpring: N }, E] = (0, i.zhh)(() => ({
            from: { expansionSpring: 0 },
            config: y,
            onRest: (e) => {
                v(!0), 0 === e.value && x("none");
            },
            onStart: () => {
                v(!1);
            },
        }));
    a.useEffect(() => {
        E({ expansionSpring: +!!g, immediate: p });
    }, [g, E, p]);
    let { visibilitySpring: I } = (0, i.zhh)({
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
        o !== A.current && j(!1), (A.current = o);
    }, [o]);
    let k = a.useCallback(() => {
            "unfurledWithTimeout" === h && (x("unfurledWithTimeoutCanceled"), u());
        }, [u, h]),
        R = a.useCallback(() => {
            C(!1), u();
        }, [C, u]);
    return {
        isExpanded: g,
        setIsExpanded: C,
        expandQuestBar: S,
        collapseQuestBar: T,
        isExpansionAnimationComplete: _,
        isVisibilityAnimationAtRest: b,
        expansionSpring: N,
        visibilitySpring: I,
        springConfig: y,
        onQuestBarFocus: k,
        onUnfurlTimeoutComplete: R,
        isUnfurl: "none" !== h,
        isUnfurlTimeoutActive: "unfurledWithTimeout" === h,
    };
}
