"use strict";
n.d(t, { A: () => s });
var i = n(627968),
    r = n(64700);
function s(e) {
    let { paddingFix: t = !0, orientation: n = "vertical", dir: s, className: a, scrollerRef: o, specs: l } = e,
        u = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            let { current: e } = o;
            if (null == e || "auto" === n || !t) return;
            let i = e.ownerDocument?.defaultView;
            if (null == i) return;
            (e.style.paddingTop = ""),
                (e.style.paddingBottom = ""),
                (e.style.paddingLeft = ""),
                (e.style.paddingRight = "");
            let r = i.getComputedStyle(e);
            if ("vertical" === n) {
                if ("rtl" === s) {
                    let t = parseInt(r.getPropertyValue("padding-left"), 10);
                    (e.style.paddingLeft = `${Math.max(0, t - l.width)}px`), (e.style.paddingRight = "");
                } else {
                    let t = parseInt(r.getPropertyValue("padding-right"), 10);
                    (e.style.paddingRight = `${Math.max(0, t - l.width)}px`), (e.style.paddingLeft = "");
                }
                let { current: t } = u;
                null != t && (t.style.height = r.getPropertyValue("padding-bottom"));
            } else {
                let t = parseInt(r.getPropertyValue("padding-bottom"), 10);
                e.style.paddingBottom = `${Math.max(0, t - l.height)}px`;
                let { current: n } = u;
                null != n && (n.style.width = r.getPropertyValue("padding-left"));
            }
        }, [n, s, a, o, t, l]),
        (0, r.useMemo)(
            () =>
                "auto" !== n
                    ? (0, i.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                              position: "vertical" === n ? "absolute" : "relative",
                              pointerEvents: "none",
                              minHeight: +("vertical" !== n),
                              minWidth: +("horizontal" !== n),
                              flex: "0 0 auto",
                          },
                          ref: u,
                      })
                    : null,
            [n],
        )
    );
}
