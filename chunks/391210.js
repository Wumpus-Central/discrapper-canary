n.d(t, { A: () => s });
var i = n(582128),
    l = n(172218);
function s() {
    let [e, t] = i.useState(!1),
        n = i.useRef(null),
        s = i.useCallback((e) => {
            e
                ? null == n.current &&
                  (n.current = setTimeout(() => {
                      ((n.current = null), t(!0));
                  }, 1e3))
                : null != n.current && (clearTimeout(n.current), (n.current = null));
        }, []);
    i.useEffect(
        () => () => {
            null != n.current && (clearTimeout(n.current), (n.current = null));
        },
        [],
    );
    let a = (0, l.K)(s, 0.5, !e);
    return [e, a];
}
