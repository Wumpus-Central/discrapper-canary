n.d(t, {
    A: () => h,
    p: () => m
}),
    n(47120);
var r = n(192379),
    i = n(410030),
    o = n(540059),
    a = n(598062),
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
            null != e &&
                o({
                    '--custom-nameplate': (t === c.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + d,
                    '--custom-nameplate-neutral': t !== c.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== c.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function m(e, t, n, s, l) {
    let c = (0, i.ZP)(),
        u = (0, o.Q3)('useNameplateStyle'),
        d = (0, a.C7)('useNameplateStyle'),
        f = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : g({
                          palette: t.palette,
                          theme: c,
                          hover: n,
                          selected: s,
                          placement: l,
                          isVisualRefreshEnabled: u,
                          defaultPaletteOpacity: d
                      }),
            [t, n, s, c, l, u, d]
        ),
        [_, p] = (0, r.useState)(null != f ? { background: f } : {});
    return (
        (0, r.useEffect)(() => {
            if (null == f) return;
            if (null == e || null == e.current) return void p({ background: f });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width,
                    n = 0.8 * t,
                    r = 1.1 * t;
                p({
                    background: f,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, f]),
        _
    );
}
function g(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: o, isVisualRefreshEnabled: a, defaultPaletteOpacity: d } = e;
    if (!(0, l.ic)(t)) return;
    let h = n === c.BR.LIGHT ? t.lightBackground : t.darkBackground,
        m = r || i;
    if (o === s.i.ACCOUNT) return n === c.BR.LIGHT ? 'linear-gradient(90deg, '.concat(h).concat(u, ' 0%, ').concat(h).concat(f, ' 100%)') : 'linear-gradient(90deg, '.concat(h).concat(u, ' 0%, ').concat(h).concat(_, ' 100%)');
    if (o === s.i.PREVIEW) return 'linear-gradient(90deg, '.concat(h).concat(u, ' 0%, ').concat(h).concat(f, ' 100%)');
    let g = a && o === s.i.CHANNEL ? 'var(--bg-overlay-selected, var(--background-mod-subtle))' : 'var(--background-modifier-selected)',
        E = r ? 'var(--background-modifier-hover)' : i ? g : ''.concat(h, '00'),
        b = ''.concat(h).concat(m ? (n !== c.BR.LIGHT ? p : f) : d);
    return 'linear-gradient(90deg, '.concat(E, ' 0%, ').concat(b, ' 100%)');
}
