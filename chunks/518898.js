n.d(t, { A: () => s });
var i = n(477900),
    r = n(582128);
let a = {
    boxSizing: "content-box",
    position: "relative",
    pointerEvents: "none",
    minWidth: 0,
    minHeight: 1,
    flex: "0 0 auto",
};
function s(e) {
    let { scrollbarGutter: t = "stable", orientation: n = "vertical", className: s, scrollerRef: l } = e,
        o = (0, r.useRef)(null),
        d = !1 !== t && "horizontal" === n;
    return (
        (0, r.useLayoutEffect)(() => {
            if (!d) return;
            let { current: e } = l,
                { current: t } = o;
            if (null == e || null == t) return;
            let n = e.ownerDocument?.defaultView;
            if (null == n) return;
            let i = n.getComputedStyle(e);
            t.style.width = i.getPropertyValue("padding-left");
        }, [d, s, l]),
        (0, r.useMemo)(() => (d ? (0, i.jsx)("div", { "aria-hidden": !0, style: a, ref: o }) : null), [d])
    );
}
