"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700);
function a(e) {
    return {
        position: "vertical" === e ? "absolute" : "relative",
        pointerEvents: "none",
        minHeight: +("vertical" !== e),
        minWidth: +("horizontal" !== e),
        flex: "0 0 auto",
    };
}
function s(e) {
    let { paddingFix: t = !0, orientation: n = "vertical", dir: s, className: o, scrollerRef: l, specs: u } = e,
        c = (0, i.useRef)(null);
    return (
        (0, i.useLayoutEffect)(() => {
            let { current: e } = l;
            if (null == e || "auto" === n || !t) return;
            let r = e.ownerDocument?.defaultView;
            if (null == r) return;
            (e.style.paddingTop = ""),
                (e.style.paddingBottom = ""),
                (e.style.paddingLeft = ""),
                (e.style.paddingRight = "");
            let i = r.getComputedStyle(e);
            if ("vertical" === n) {
                if ("rtl" === s) {
                    let t = parseInt(i.getPropertyValue("padding-left"), 10);
                    (e.style.paddingLeft = `${Math.max(0, t - u.width)}px`), (e.style.paddingRight = "");
                } else {
                    let t = parseInt(i.getPropertyValue("padding-right"), 10);
                    (e.style.paddingRight = `${Math.max(0, t - u.width)}px`), (e.style.paddingLeft = "");
                }
                let { current: t } = c;
                null != t && (t.style.height = i.getPropertyValue("padding-bottom"));
            } else {
                let t = parseInt(i.getPropertyValue("padding-bottom"), 10);
                e.style.paddingBottom = `${Math.max(0, t - u.height)}px`;
                let { current: n } = c;
                null != n && (n.style.width = i.getPropertyValue("padding-left"));
            }
        }, [n, s, o, l, t, u]),
        (0, i.useMemo)(() => ("auto" !== n ? (0, r.jsx)("div", { "aria-hidden": !0, style: a(n), ref: c }) : null), [n])
    );
}
