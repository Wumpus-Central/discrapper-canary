n.d(t, { x: () => r }), n(388685);
var i = n(73800);
function r(e, t, n) {
    let r = i.useRef(null),
        [l, o] = i.useState(!1),
        s = i.useCallback(() => {
            if (e && null !== r.current) {
                var n;
                o((null == (n = r.current) ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [o, e, t]);
    return (
        i.useLayoutEffect(() => {
            s();
        }, [s, e, n]),
        {
            postTitleRef: r,
            isNewBadgeOverflow: l
        }
    );
}
