n.d(t, {
    $Y: () => l,
    am: () => o,
    e4: () => c,
}),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749);
let a = i.createContext(null),
    o = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                o = i.useMemo(
                    () => ({
                        isParentWidthLimited: !0,
                        parentContainerInnerWidth: t,
                    }),
                    [t],
                );
            return (0, r.jsx)(a.Provider, {
                value: o,
                children: n,
            });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: o } = e,
                { isParentWidthLimited: l, parentContainerInnerWidth: c } = s(),
                u = l && c === t,
                d = i.useMemo(
                    () => ({
                        isParentWidthLimited: u,
                        parentContainerInnerWidth: n,
                    }),
                    [u, n],
                );
            return (0, r.jsx)(a.Provider, {
                value: d,
                children: o,
            });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, i, a] = c(!0);
            return (0, r.jsx)(o.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: a,
                children: t(n),
            });
        },
    };
function s() {
    let e = i.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function l(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = s();
    return t && n === e;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = i.useRef(null),
        [n, r] = i.useState(0),
        [a, o] = i.useState(0);
    return (
        i.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    i = getComputedStyle(t.current);
                r(n + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))),
                    e &&
                        o(
                            n -
                                (parseFloat(i.paddingLeft) +
                                    parseFloat(i.paddingRight) +
                                    parseFloat(i.borderLeftWidth) +
                                    parseFloat(i.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, a]
    );
}
