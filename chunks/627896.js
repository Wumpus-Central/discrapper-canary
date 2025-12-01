t.d(n, { x: () => l }), t(388685);
var s = t(473749);
function l(e, n, t) {
    let l = s.useRef(null),
        [a, r] = s.useState(!1),
        i = s.useCallback(() => {
            if (e && null !== l.current) {
                var t;
                r((null == (t = l.current) ? void 0 : t.offsetHeight) > 2.5 * n);
            }
        }, [r, e, n]);
    return (
        s.useLayoutEffect(() => {
            i();
        }, [i, e, t]),
        {
            postTitleRef: l,
            isNewBadgeOverflow: a,
        }
    );
}
