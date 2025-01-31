n.d(t, { x: () => a }), n(47120);
var i = n(192379);
function a(e, t, n) {
    let a = i.useRef(null),
        [o, s] = i.useState(!1),
        l = i.useCallback(() => {
            if (e && null !== a.current) {
                var n;
                s((null === (n = a.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [s, e, t]);
    return (
        i.useLayoutEffect(() => {
            l();
        }, [l, e, n]),
        {
            postTitleRef: a,
            isNewBadgeOverflow: o
        }
    );
}
