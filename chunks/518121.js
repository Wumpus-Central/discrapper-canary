n.d(t, {
    G6: () => d,
    O5: () => p,
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(664915),
    a = n(543936),
    s = n(432792);
let c = "bottom",
    u = (e) => {
        let { targetElementRef: t, isGuildBarScrolling: n, children: a, innerCoachmarkProps: u } = e,
            { positionControlRef: d } = ((e) => {
                let { isGuildBarScrolling: t } = e,
                    n = i.useRef(null),
                    r = (0, l.e7)([o.Z], () => o.Z.getExpandedFolders().size);
                return (
                    i.useEffect(() => {
                        null !== n.current && n.current.updateElementPositionWithPolling();
                    }, [r]),
                    i.useEffect(() => {
                        null !== n.current && n.current.updateElementPosition();
                    }, [t]),
                    { positionControlRef: n }
                );
            })({ isGuildBarScrolling: n }),
            p = i.useCallback((e) => {
                let t = window.innerHeight - ((0, s.t4)() + 10);
                return e.top <= t;
            }, []);
        return (0, r.jsx)(s.WS, {
            positionControlRef: d,
            calculateVisibility: p,
            defaultCoachmarkAlign: c,
            spacing: 8,
            position: "right",
            align: c,
            targetElementRef: t,
            popoutElement: (0, r.jsx)(
                s.M4,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, u),
            ),
            children: a,
        });
    },
    d = (e) => {
        let {
                renderDiscoveryButton: t,
                showingCoachmark: n,
                errorBoundarySource: l,
                onDiscoveryButtonClick: o,
                targetQuestId: s,
                isGuildBarScrolling: c,
                targetElementRef: d,
                innerCoachmarkProps: p,
            } = e,
            f = i.useMemo(
                () =>
                    t({
                        onClick: n ? o : void 0,
                        questId: n ? s : void 0,
                    }),
                [t, o, n, s],
            );
        return n
            ? (0, r.jsx)(a.x, {
                  errorSource: l,
                  renderCustomErrorComponent: () => f,
                  children: (0, r.jsx)(u, {
                      targetElementRef: d,
                      isGuildBarScrolling: c,
                      innerCoachmarkProps: p,
                      children: f,
                  }),
              })
            : f;
    },
    p = (e) => {
        let { targetElementRef: t, scrollToBottom: n } = e;
        return i.useCallback(() => {
            if (null !== t.current) {
                let e = (0, s.t4)();
                t.current.getBoundingClientRect().bottom > window.innerHeight - e && n();
            }
        }, [t, n]);
    };
