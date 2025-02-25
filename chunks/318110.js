n.d(t, { p: () => s }), n(47120);
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
function s(e, t, n, o) {
    let s = (0, i.ZP)(),
        [l, c] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = a(e.palette, s, t, n);
            if (null == o) {
                c({ background: r });
                return;
            }
            let i = new ResizeObserver((e) => {
                let t = e[0].contentRect.width;
                c({
                    background: r,
                    maskImage: 'linear-gradient(to right, transparent '.concat(0.9 * t, 'px, black ').concat(1.1 * t, 'px)')
                });
            });
            return i.observe(o), () => i.disconnect();
        }, [e, t, n, s, o]),
        l
    );
}
