l.d(n, {
    $Y: () => o,
    am: () => a,
    e4: () => u
}),
    l(47120),
    l(411104);
var t = l(200651),
    i = l(192379);
let r = i.createContext(null),
    a = {
        Root(e) {
            let { containerInnerWidth: n, children: l } = e,
                a = i.useMemo(
                    () => ({
                        isParentWidthLimited: !0,
                        parentContainerInnerWidth: n
                    }),
                    [n]
                );
            return (0, t.jsx)(r.Provider, {
                value: a,
                children: l
            });
        },
        NestedContainer(e) {
            let { containerOuterWidth: n, containerInnerWidth: l, children: a } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: u } = s(),
                c = o && u === n,
                d = i.useMemo(
                    () => ({
                        isParentWidthLimited: c,
                        parentContainerInnerWidth: l
                    }),
                    [c, l]
                );
            return (0, t.jsx)(r.Provider, {
                value: d,
                children: a
            });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: n } = e,
                [l, i, r] = u(!0);
            return (0, t.jsx)(a.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: r,
                children: n(l)
            });
        }
    };
function s() {
    let e = i.useContext(r);
    if (null == e) throw Error('Cannot use the ComponentLayoutLimitContext system when not within the context');
    return e;
}
function o(e) {
    let { isParentWidthLimited: n, parentContainerInnerWidth: l } = s();
    return n && l === e;
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = i.useRef(null),
        [l, t] = i.useState(0),
        [r, a] = i.useState(0);
    return (
        i.useLayoutEffect(() => {
            if (null == n.current) return;
            let l = new ResizeObserver(() => {
                let l = n.current.getBoundingClientRect().width,
                    i = getComputedStyle(n.current);
                t(l + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && a(l - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)));
            });
            return l.observe(n.current), () => l.disconnect();
        }, [e]),
        [n, l, r]
    );
}
