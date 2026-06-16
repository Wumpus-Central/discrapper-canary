"use strict";
function i(e, t) {
    if (!e) return !1;
    let n = window.getComputedStyle(e),
        i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
    return i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
n.d(t, { o: () => i });
