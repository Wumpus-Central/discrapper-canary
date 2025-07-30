(n.d(t, { x: () => a }), n(388685));
var r = n(73800);
function a(e, t, n) {
    let a = r.useRef(null),
        [s, l] = r.useState(!1),
        i = r.useCallback(() => {
            if (e && null !== a.current) {
                var n;
                l((null == (n = a.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [l, e, t]);
    return (
        r.useLayoutEffect(() => {
            i();
        }, [i, e, n]),
        {
            postTitleRef: a,
            isNewBadgeOverflow: s
        }
    );
}
