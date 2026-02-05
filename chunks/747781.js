"use strict";
n.d(t, { D: () => u });
var r = n(64700),
    i = n(39184),
    a = n(683489),
    s = n(642733),
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
        { isVisible: h, triggerProps: m } = (0, s.f)({ targetElementRef: f.targetElementRef, ..._ }),
        g = d ? void 0 : p,
        E = (0, i.o)(r.isValidElement(t) ? t : l, m, g, f.triggerRef),
        A = (0, a.w)(u, t, m, f.triggerRef, p, d, c) ?? E;
    return { tooltipId: p, isVisible: h, targetElementRef: f.targetElementRef, trigger: A, describedById: g };
}
