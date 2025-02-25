n.d(t, { p: () => s });
var r = n(192379),
    i = n(410030),
    o = n(231338);
function a(e, t, n, r) {
    if (null == e) return;
    let i = t === o.BR.LIGHT ? e.lightBackground : e.darkBackground,
        a = n || r,
        s = n ? 'var(--background-modifier-hover)' : r ? 'var(--background-modifier-selected)' : ''.concat(i, '00'),
        l = ''.concat(i).concat(a ? '80' : '4D');
    if (t !== o.BR.LIGHT) return 'linear-gradient(90deg, '.concat(s, ' 0%, ').concat(l, ' 100%)');
    let c = 'linear-gradient(90deg, transparent, white)',
        u = 'linear-gradient(90deg, '.concat(s, ' 0%, ').concat(l, ' 100%)');
    return ''.concat(c, ', ').concat(u);
}
function s(e, t, n) {
    let o = (0, i.ZP)();
    return (0, r.useMemo)(() => (null == e ? {} : { background: a(e.palette, o, t, n) }), [e, t, n, o]);
}
