n.d(t, {
    x: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379);
function o(e, t, n) {
    let o = i.useRef(null),
        [a, l] = i.useState(!1),
        s = i.useCallback(() => {
            if (e && null !== o.current) {
                var n;
                l((null === (n = o.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [l, e, t]);
    return (
        i.useLayoutEffect(() => {
            s();
        }, [s, e, n]),
        {
            postTitleRef: o,
            isNewBadgeOverflow: a
        }
    );
}
