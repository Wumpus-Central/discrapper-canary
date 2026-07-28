"use strict";
n.d(t, { $: () => u });
let r = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    o = new Set(["dir", "lang", "hidden", "inert", "translate"]),
    s = new Set([
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
    let { labelable: n, isLink: c, global: d, events: f = d, propNames: p } = t,
        h = {};
    for (let t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            (r.has(t) ||
                (n && i.has(t)) ||
                (c && a.has(t)) ||
                (d && o.has(t)) ||
                (f && s.has(t)) ||
                (t.endsWith("Capture") && s.has(t.slice(0, -7))) ||
                (null == p ? void 0 : p.has(t)) ||
                l.test(t)) &&
            (h[t] = e[t]);
    return h;
}
