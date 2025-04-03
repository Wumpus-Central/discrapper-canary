r.d(t, {
    $Y: () => c,
    am: () => o,
    e4: () => s
}),
    r(47120),
    r(411104);
var n = r(200651),
    l = r(192379);
let i = l.createContext(null),
    o = {
        Root(e) {
            let { containerInnerWidth: t, children: r } = e,
                o = l.useMemo(
                    () => ({
                        isParentWidthLimited: !0,
                        parentContainerInnerWidth: t
                    }),
                    [t]
                );
            return (0, n.jsx)(i.Provider, {
                value: o,
                children: r
            });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: r, children: o } = e,
                { isParentWidthLimited: c, parentContainerInnerWidth: s } = a(),
                u = c && s === t,
                p = l.useMemo(
                    () => ({
                        isParentWidthLimited: u,
                        parentContainerInnerWidth: r
                    }),
                    [u, r]
                );
            return (0, n.jsx)(i.Provider, {
                value: p,
                children: o
            });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [r, l, i] = s(!0);
            return (0, n.jsx)(o.NestedContainer, {
                containerOuterWidth: l,
                containerInnerWidth: i,
                children: t(r)
            });
        }
    };
function a() {
    let e = l.useContext(i);
    if (null == e) throw Error('Cannot use the ComponentLayoutLimitContext system when not within the context');
    return e;
}
function c(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: r } = a();
    return t && r === e;
}
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = l.useRef(null),
        [r, n] = l.useState(0),
        [i, o] = l.useState(0);
    return (
        l.useLayoutEffect(() => {
            if (null == t.current) return;
            let r = new ResizeObserver(() => {
                let r = t.current.getBoundingClientRect().width,
                    l = getComputedStyle(t.current);
                n(r + (parseFloat(l.marginLeft) + parseFloat(l.marginRight))), e && o(r - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight) + parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth)));
            });
            return r.observe(t.current), () => r.disconnect();
        }, [e]),
        [t, r, i]
    );
}
