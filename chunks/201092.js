"use strict";
r.d(t, { $: () => u });
let n = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    o = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
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
    let { labelable: r, isLink: c, global: f, events: d = f, propNames: p } = t,
        h = {};
    for (let t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            (n.has(t) ||
                (r && i.has(t)) ||
                (c && o.has(t)) ||
                (f && a.has(t)) ||
                (d && s.has(t)) ||
                (t.endsWith("Capture") && s.has(t.slice(0, -7))) ||
                (null == p ? void 0 : p.has(t)) ||
                l.test(t)) &&
            (h[t] = e[t]);
    return h;
}
