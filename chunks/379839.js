n.d(t, {
    A: () => f,
    p: () => _
}),
    n(47120);
var r = n(192379),
    i = n(410030),
    o = n(4242),
    a = n(231338);
let s = '1A',
    l = '33',
    c = '4D',
    u = '66',
    d = '80';
function f(e) {
    let t = (0, i.ZP)(),
        [n, o] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let n = (t === a.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + l;
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
function _(e, t, n, o, a) {
    let s = (0, i.ZP)(),
        [l, c] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = p(e.palette, s, t, n, a);
            if (null == o) {
                c({ background: r });
                return;
            }
            let i = new ResizeObserver((e) => {
                let t = e[0].contentRect.width;
                c({
                    background: r,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(0.9 * t, 'px, rgba(0, 0, 0, 1) ').concat(1.5 * t, 'px)')
                });
            });
            return i.observe(o), () => i.disconnect();
        }, [e, t, n, s, o, a]),
        l
    );
}
function p(e, t, n, r, i) {
    if (!(0, o.ic)(e)) return;
    let l = t === a.BR.LIGHT ? e.lightBackground : e.darkBackground,
        f = n || r;
    if (i) return t === a.BR.LIGHT ? 'linear-gradient(90deg, '.concat(l).concat(s, ' 0%, ').concat(l).concat(c, ' 100%)') : 'linear-gradient(90deg, '.concat(l).concat(s, ' 0%, ').concat(l).concat(u, ' 100%)');
    let _ = n ? 'var(--background-modifier-hover)' : r ? 'var(--background-modifier-selected)' : ''.concat(l, '00'),
        p = ''.concat(l).concat(f ? (t !== a.BR.LIGHT ? d : c) : s);
    return 'linear-gradient(90deg, '.concat(_, ' 0%, ').concat(p, ' 100%)');
}
