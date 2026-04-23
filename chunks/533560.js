n.d(t, { L: () => a });
var i = n(64700),
    r = n(73153);
function a() {
    let e = i.useCallback(() => {
            if (null == window || !("navigation" in window)) return { canGoBack: !1, canGoForward: !1 };
            let e = window.navigation;
            return { canGoBack: e.canGoBack ?? !1, canGoForward: e.canGoForward ?? !1 };
        }, []),
        [t, n] = i.useState(e);
    return (
        i.useEffect(() => {
            let t = () => {
                n(e());
            };
            return (
                r.h.subscribe("ROUTE_CHANGED", t),
                r.h.subscribe("LOGOUT", t),
                () => {
                    r.h.unsubscribe("ROUTE_CHANGED", t), r.h.unsubscribe("LOGOUT", t);
                }
            );
        }, [e]),
        t
    );
}
