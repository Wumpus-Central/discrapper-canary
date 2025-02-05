i.d(t, { x: () => a }), i(47120);
var n = i(192379);
function a(e, t, i) {
    let a = n.useRef(null),
        [o, s] = n.useState(!1),
        l = n.useCallback(() => {
            if (e && null !== a.current) {
                var i;
                s((null === (i = a.current) || void 0 === i ? void 0 : i.offsetHeight) > 2.5 * t);
            }
        }, [s, e, t]);
    return (
        n.useLayoutEffect(() => {
            l();
        }, [l, e, i]),
        {
            postTitleRef: a,
            isNewBadgeOverflow: o
        }
    );
}
