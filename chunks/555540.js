n.d(t, { $: () => l });
var s = n(64700);
function l(e, t, n) {
    let l = s.useRef(null),
        [a, i] = s.useState(!1),
        r = s.useCallback(() => {
            e && null !== l.current && i(l.current?.offsetHeight > 2.5 * t);
        }, [i, e, t]);
    return (
        s.useLayoutEffect(() => {
            r();
        }, [r, e, n]),
        { postTitleRef: l, isNewBadgeOverflow: a }
    );
}
