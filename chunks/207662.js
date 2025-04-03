function r(e) {
    let t = e;
    for (; null != t && t !== document.body; ) {
        if ((null == t ? void 0 : t.getAttribute('aria-hidden')) === 'true') return !0;
        t = t.parentElement;
    }
    return !1;
}
n.d(t, {
    J8: () => l,
    Uu: () => r,
    cg: () => a
}),
    n(47120);
let a = Array.from(n(485589).aria.keys()),
    l = a.map((e) => '['.concat(e, ']')).join(', ');
