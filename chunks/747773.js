"use strict";
function n(e, t) {
    if (!e) return !1;
    let r = window.getComputedStyle(e),
        n = document.scrollingElement || document.documentElement,
        i = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
    return (
        e === n && "hidden" !== r.overflow && (i = !0),
        i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
        i
    );
}
r.d(t, { o: () => n });
