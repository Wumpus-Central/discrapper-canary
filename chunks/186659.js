"use strict";
function e(e, t) {
    let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return n ? parseFloat(n.replace("px", "")) : 0;
}
(() => {
    let e = 0,
        t = () => `0000${((1679616 * Math.random()) | 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${t()}${e}`);
})();
