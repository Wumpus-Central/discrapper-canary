s.d(t, { $: () => l });
var n = s(64700);
function l(e, t, s) {
    let l = n.useRef(null),
        [a, i] = n.useState(!1),
        r = n.useCallback(() => {
            e && null !== l.current && i(l.current?.offsetHeight > 2.5 * t);
        }, [i, e, t]);
    return (
        n.useLayoutEffect(() => {
            r();
        }, [r, e, s]),
        { postTitleRef: l, isNewBadgeOverflow: a }
    );
}
