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
            containerTag: d = "span",
            ariaHidden: c = !1,
            ..._
        } = e,
        f = (0, o._)(n),
        E = r.useId(),
        { isVisible: h, triggerProps: p } = (0, a.f)({ targetElementRef: f.targetElementRef, ..._ }),
        m = c ? void 0 : E,
        g = (0, i.o)(r.isValidElement(t) ? t : l, p, m, f.triggerRef),
        A = (0, s.w)(u, t, p, f.triggerRef, E, c, d);
    return { tooltipId: E, isVisible: h, targetElementRef: f.targetElementRef, trigger: A ?? g, describedById: m };
}
