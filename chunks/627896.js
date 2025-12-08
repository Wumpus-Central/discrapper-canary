n.d(t, { x: () => l }), n(388685);
var s = n(473749);
function l(e, t, n) {
    let l = s.useRef(null),
        [a, r] = s.useState(!1),
        i = s.useCallback(() => {
            if (e && null !== l.current) {
                var n;
                r((null == (n = l.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [r, e, t]);
    return (
        s.useLayoutEffect(() => {
            i();
        }, [i, e, n]),
        {
            postTitleRef: l,
            isNewBadgeOverflow: a,
        }
    );
}
