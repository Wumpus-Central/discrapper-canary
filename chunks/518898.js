"use strict";
n.d(t, { A: () => a });
var i = n(477900),
    r = n(582128);
function a(e) {
    let { paddingFix: t = !0, orientation: n = "vertical", dir: a, className: s, scrollerRef: l, specs: o } = e,
        d = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            let { current: e } = l;
            if (null == e || "auto" === n || !t) return;
            let i = e.ownerDocument?.defaultView;
            if (null == i) return;
            (e.style.paddingTop = ""),
                (e.style.paddingBottom = ""),
                (e.style.paddingLeft = ""),
                (e.style.paddingRight = "");
            let r = i.getComputedStyle(e);
            if ("vertical" === n) {
                if ("rtl" === a) {
                    let t = parseInt(r.getPropertyValue("padding-left"), 10);
                    (e.style.paddingLeft = `${Math.max(0, t - o.width)}px`), (e.style.paddingRight = "");
                } else {
                    let t = parseInt(r.getPropertyValue("padding-right"), 10);
                    (e.style.paddingRight = `${Math.max(0, t - o.width)}px`), (e.style.paddingLeft = "");
                }
                let { current: t } = d;
                null != t && (t.style.height = r.getPropertyValue("padding-bottom"));
            } else {
                let t = parseInt(r.getPropertyValue("padding-bottom"), 10);
                e.style.paddingBottom = `${Math.max(0, t - o.height)}px`;
                let { current: n } = d;
                null != n && (n.style.width = r.getPropertyValue("padding-left"));
            }
        }, [n, a, s, l, t, o]),
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
                          ref: d,
                      })
                    : null,
            [n],
        )
    );
}
