n.d(t, {
    A: () => h,
    p: () => m
}),
    n(47120);
var r = n(192379),
    i = n(410030),
    o = n(540059),
    a = n(614185),
    s = n(359135),
    l = n(4242),
    c = n(231338);
let u = '1A',
    d = '33',
    f = '4D',
    _ = '66',
    p = '80';
function h(e) {
    let t = (0, i.ZP)(),
        [n, o] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let n = (t === c.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + d;
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
function m(e, t, n, s, l) {
    let c = (0, i.ZP)(),
        [u, d] = (0, r.useState)({}),
        f = (0, o.Q3)('useNameplateStyle'),
        _ = (0, a.C7)('useNameplateStyle');
    return (
        (0, r.useEffect)(() => {
            if (null == e) return;
            let r = g({
                palette: e.palette,
                theme: c,
                hover: t,
                selected: n,
                placement: l,
                isVisualRefreshEnabled: f,
                defaultPaletteOpacity: _
            });
            if (null == s) {
                d({ background: r });
                return;
            }
            let i = new ResizeObserver((e) => {
                let t = e[0].contentRect.width,
                    n = Math.max(t - 50, 0);
                d({
                    background: r,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(t, 'px)')
                });
            });
            return i.observe(s), () => i.disconnect();
        }, [e, t, n, c, s, l, f, _]),
        u
    );
}
function g(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: o, isVisualRefreshEnabled: a, defaultPaletteOpacity: d } = e;
    if (!(0, l.ic)(t)) return;
    let h = n === c.BR.LIGHT ? t.lightBackground : t.darkBackground,
        m = r || i;
    if (o === s.i.ACCOUNT) return n === c.BR.LIGHT ? 'linear-gradient(90deg, '.concat(h).concat(u, ' 0%, ').concat(h).concat(f, ' 100%)') : 'linear-gradient(90deg, '.concat(h).concat(u, ' 0%, ').concat(h).concat(_, ' 100%)');
    let g = a && o === s.i.CHANNEL ? 'var(--bg-overlay-selected, var(--background-mod-subtle))' : 'var(--background-modifier-selected)',
        E = r ? 'var(--background-modifier-hover)' : i ? g : ''.concat(h, '00'),
        v = ''.concat(h).concat(m ? (n !== c.BR.LIGHT ? p : f) : d);
    return 'linear-gradient(90deg, '.concat(E, ' 0%, ').concat(v, ' 100%)');
}
