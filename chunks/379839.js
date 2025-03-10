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
            let n = (t === a.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + '80';
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
function l(e, t, n, o) {
    let a = (0, i.ZP)(),
        [s, l] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = c(e.palette, a, t, n);
            if (null == o) {
                l({ background: r });
                return;
            }
            let i = new ResizeObserver((e) => {
                let t = e[0].contentRect.width;
                l({
                    background: r,
                    maskImage: 'linear-gradient(to right, transparent '.concat(0.9 * t, 'px, black ').concat(1.1 * t, 'px)')
                });
            });
            return i.observe(o), () => i.disconnect();
        }, [e, t, n, a, o]),
        s
    );
}
function c(e, t, n, r) {
    if (!(0, o.ic)(e)) return;
    let i = t === a.BR.LIGHT ? e.lightBackground : e.darkBackground,
        s = n || r,
        l = n ? 'var(--background-modifier-hover)' : r ? 'var(--background-modifier-selected)' : ''.concat(i, '00'),
        c = ''.concat(i).concat(s ? '80' : '4D');
    if (t !== a.BR.LIGHT) return 'linear-gradient(90deg, '.concat(l, ' 0%, ').concat(c, ' 100%)');
    let u = 'linear-gradient(90deg, transparent, white)',
        d = 'linear-gradient(90deg, '.concat(l, ' 0%, ').concat(c, ' 100%)');
    return ''.concat(u, ', ').concat(d);
}
