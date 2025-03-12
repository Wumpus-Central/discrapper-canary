n.d(t, {
    A: () => p,
    p: () => h
}),
    n(47120);
var r = n(192379),
    i = n(410030),
    o = n(540059),
    a = n(359135),
    s = n(4242),
    l = n(231338);
let c = '1A',
    u = '33',
    d = '4D',
    f = '66',
    _ = '80';
function p(e) {
    let t = (0, i.ZP)(),
        [n, o] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let n = (t === l.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u;
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
function h(e, t, n, a, s) {
    let l = (0, i.ZP)(),
        [c, u] = (0, r.useState)({}),
        d = (0, o.Q3)('useNameplateStyle');
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = m({
                palette: e.palette,
                theme: l,
                hover: t,
                selected: n,
                placement: s,
                isVisualRefreshEnabled: d
            });
            if (null == a) {
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
            return i.observe(a), () => i.disconnect();
        }, [e, t, n, l, a, s, d]),
        c
    );
}
function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: o, isVisualRefreshEnabled: u } = e;
    if (!(0, s.ic)(t)) return;
    let p = n === l.BR.LIGHT ? t.lightBackground : t.darkBackground,
        h = r || i;
    if (o === a.i.ACCOUNT) return n === l.BR.LIGHT ? 'linear-gradient(90deg, '.concat(p).concat(c, ' 0%, ').concat(p).concat(d, ' 100%)') : 'linear-gradient(90deg, '.concat(p).concat(c, ' 0%, ').concat(p).concat(f, ' 100%)');
    let m = u && o === a.i.CHANNEL ? 'var(--bg-overlay-selected, var(--background-mod-subtle))' : 'var(--background-modifier-selected)',
        g = r ? 'var(--background-modifier-hover)' : i ? m : ''.concat(p, '00'),
        E = ''.concat(p).concat(h ? (n !== l.BR.LIGHT ? _ : d) : c);
    return 'linear-gradient(90deg, '.concat(g, ' 0%, ').concat(E, ' 100%)');
}
