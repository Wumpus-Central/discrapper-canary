n.d(t, { x: () => a }), n(388685);
var l = n(647438);
function a(e, t, n) {
    let a = l.useRef(null),
        [s, r] = l.useState(!1),
        i = l.useCallback(() => {
            if (e && null !== a.current) {
                var n;
                r((null == (n = a.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [r, e, t]);
    return (
        l.useLayoutEffect(() => {
            i();
        }, [i, e, n]),
        {
            postTitleRef: a,
            isNewBadgeOverflow: s,
        }
    );
}
