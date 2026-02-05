"use strict";
n.d(t, { $: () => u });
let r = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    s = new Set(["dir", "lang", "hidden", "inert", "translate"]),
    o = new Set([
        "onClick",
        "onAuxClick",
        "onContextMenu",
        "onDoubleClick",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseOut",
        "onMouseOver",
        "onMouseUp",
        "onTouchCancel",
        "onTouchEnd",
        "onTouchMove",
        "onTouchStart",
        "onPointerDown",
        "onPointerMove",
        "onPointerUp",
        "onPointerCancel",
        "onPointerEnter",
        "onPointerLeave",
        "onPointerOver",
        "onPointerOut",
        "onGotPointerCapture",
        "onLostPointerCapture",
        "onScroll",
        "onWheel",
        "onAnimationStart",
        "onAnimationEnd",
        "onAnimationIteration",
        "onTransitionCancel",
        "onTransitionEnd",
        "onTransitionRun",
        "onTransitionStart",
    ]),
    l = /^(data-.*)$/;
function u(e, t = {}) {
    let { labelable: n, isLink: c, global: d, events: _ = d, propNames: f } = t,
        p = {};
    for (let t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            (r.has(t) ||
                (n && i.has(t)) ||
                (c && a.has(t)) ||
                (d && s.has(t)) ||
                (_ && o.has(t)) ||
                (t.endsWith("Capture") && o.has(t.slice(0, -7))) ||
                (null == f ? void 0 : f.has(t)) ||
                l.test(t)) &&
            (p[t] = e[t]);
    return p;
}
