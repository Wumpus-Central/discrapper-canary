function r(e, t) {
    if (!e) return !1;
    let n = window.getComputedStyle(e),
        r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
    return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
n.d(t, { o: () => r });
