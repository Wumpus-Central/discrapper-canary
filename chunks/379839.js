n.d(t, {
    A: () => s,
    p: () => l
}),
    n(47120);
var r = n(192379),
    i = n(410030),
    o = n(4242),
    a = n(231338);
function s(e) {
    let t = (0, i.ZP)(),
        [n, o] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let n = (t === a.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + (t === a.BR.LIGHT ? '33' : '80');
            o({
                '--background-modifier-selected': n,
                '--button-secondary-background-hover': n,
                '--bg-mod-faint': n,
                '--bg-mod-normal': n,
                '--background-mod-normal': n
            });
        }, [e, t]),
        n
    );
}
function l(e, t, n, o, a) {
    let s = (0, i.ZP)(),
        [l, u] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = c(e.palette, s, t, n, a);
            if (null == o) {
                u({ background: r });
                return;
            }
            let i = new ResizeObserver((e) => {
                let t = e[0].contentRect.width;
                u({
                    background: r,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(0.9 * t, 'px, rgba(0, 0, 0, 1) ').concat(1.5 * t, 'px)')
                });
            });
            return i.observe(o), () => i.disconnect();
        }, [e, t, n, s, o, a]),
        l
    );
}
function c(e, t, n, r, i) {
    if (!(0, o.ic)(e)) return;
    let s = t === a.BR.LIGHT ? e.lightBackground : e.darkBackground,
        l = n || r;
    if (i) return t === a.BR.LIGHT ? 'linear-gradient(90deg, '.concat(s, '1A 0%, ').concat(s, '4D 100%)') : 'linear-gradient(90deg, '.concat(s, '1A 0%, ').concat(s, '66 100%)');
    let c = n ? 'var(--background-modifier-hover)' : r ? 'var(--background-modifier-selected)' : ''.concat(s, '00'),
        u = ''.concat(s).concat(l ? '80' : '33');
    return 'linear-gradient(90deg, '.concat(c, ' 0%, ').concat(u, ' 100%)');
}
