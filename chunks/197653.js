t.d(n, {
    $Y: function () {
        return s;
    },
    am: function () {
        return a;
    },
    e4: function () {
        return c;
    }
}),
    t(47120),
    t(411104);
var l = t(200651),
    i = t(192379);
let r = i.createContext(null),
    a = {
        Root(e) {
            let { containerInnerWidth: n, children: t } = e,
                a = i.useMemo(
                    () => ({
                        isParentWidthLimited: !0,
                        parentContainerInnerWidth: n
                    }),
                    [n]
                );
            return (0, l.jsx)(r.Provider, {
                value: a,
                children: t
            });
        },
        NestedContainer(e) {
            let { containerOuterWidth: n, containerInnerWidth: t, children: a } = e,
                { isParentWidthLimited: s, parentContainerInnerWidth: c } = o(),
                u = s && c === n,
                d = i.useMemo(
                    () => ({
                        isParentWidthLimited: u,
                        parentContainerInnerWidth: t
                    }),
                    [u, t]
                );
            return (0, l.jsx)(r.Provider, {
                value: d,
                children: a
            });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: n } = e,
                [t, i, r] = c(!0);
            return (0, l.jsx)(a.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: r,
                children: n(t)
            });
        }
    };
function o() {
    let e = i.useContext(r);
    if (null == e) throw Error('Cannot use the ComponentLayoutLimitContext system when not within the context');
    return e;
}
function s(e) {
    let { isParentWidthLimited: n, parentContainerInnerWidth: t } = o();
    return n && t === e;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = i.useRef(null),
        [t, l] = i.useState(0),
        [r, a] = i.useState(0);
    return (
        i.useLayoutEffect(() => {
            if (null == n.current) return;
            let t = new ResizeObserver(() => {
                let t = n.current.getBoundingClientRect().width,
                    i = getComputedStyle(n.current);
                l(t + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && a(t - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)));
            });
            return t.observe(n.current), () => t.disconnect();
        }, [e]),
        [n, t, r]
    );
}
