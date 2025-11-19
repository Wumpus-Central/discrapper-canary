n.d(t, { x: () => l }), n(388685);
var a = n(473749);
function l(e, t, n) {
    let l = a.useRef(null),
        [s, r] = a.useState(!1),
        i = a.useCallback(() => {
            if (e && null !== l.current) {
                var n;
                r((null == (n = l.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [r, e, t]);
    return (
        a.useLayoutEffect(() => {
            i();
        }, [i, e, n]),
        {
            postTitleRef: l,
            isNewBadgeOverflow: s,
        }
    );
}
