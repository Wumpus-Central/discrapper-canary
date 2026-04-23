"use strict";
n.d(t, { D: () => u });
var r = n(64700),
    i = n(39184),
    s = n(683489),
    a = n(642733),
    o = n(875230);
let l = r.createElement("span");
function u(e) {
    let {
            children: t,
            targetElementRef: n,
            asContainer: u = !1,
            containerTag: c = "span",
            ariaHidden: d = !1,
            ..._
        } = e,
        f = (0, o._)(n),
        p = r.useId(),
        { isVisible: h, triggerProps: E } = (0, a.f)({ targetElementRef: f.targetElementRef, ..._ }),
        m = d ? void 0 : p,
        g = (0, i.o)(r.isValidElement(t) ? t : l, E, m, f.triggerRef),
        A = (0, s.w)(u, t, E, f.triggerRef, p, d, c);
    return { tooltipId: p, isVisible: h, targetElementRef: f.targetElementRef, trigger: A ?? g, describedById: m };
}
