n.d(t, {
    $: () => s,
}),
    n(896048);
var i = n(64700);

function s(e, t, n) {
    let s = i.useRef(null),
        [r, l] = i.useState(!1),
        a = i.useCallback(() => {
            if (e && null !== s.current) {
                var n;
                l((null == (n = s.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [l, e, t]);
    return (
        i.useLayoutEffect(() => {
            a();
        }, [a, e, n]),
        {
            postTitleRef: s,
            isNewBadgeOverflow: r,
        }
    );
}
