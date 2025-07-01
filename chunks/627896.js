(n.d(t, { x: () => s }), n(388685));
var r = n(73800);
function s(e, t, n) {
    let s = r.useRef(null),
        [l, a] = r.useState(!1),
        i = r.useCallback(() => {
            if (e && null !== s.current) {
                var n;
                a((null == (n = s.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [a, e, t]);
    return (
        r.useLayoutEffect(() => {
            i();
        }, [i, e, n]),
        {
            postTitleRef: s,
            isNewBadgeOverflow: l
        }
    );
}
