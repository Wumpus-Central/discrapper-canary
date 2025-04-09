n.d(t, {
    A: () => p,
    p: () => h
}),
    n(388685);
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
            null != e &&
                o({
                    '--custom-nameplate': (t === l.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u,
                    '--custom-nameplate-neutral': t !== l.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== l.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function h(e, t, n, a, s) {
    let l = (0, i.ZP)(),
        c = (0, o.Q3)('useNameplateStyle'),
        u = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : m({
                          palette: t.palette,
                          theme: l,
                          hover: n,
                          selected: a,
                          placement: s,
                          isVisualRefreshEnabled: c
                      }),
            [t, n, a, l, s, c]
        ),
        [d, f] = (0, r.useState)(null != u ? { background: u } : {});
    return (
        (0, r.useEffect)(() => {
            if (null == u) return;
            if (null == e || null == e.current) return void f({ background: u });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width,
                    n = 0.8 * t,
                    r = 1.1 * t;
                f({
                    background: u,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, u]),
        d
    );
}
function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: o, isVisualRefreshEnabled: p } = e;
    if (!(0, s.ic)(t)) return;
    let h = n === l.BR.LIGHT ? t.lightBackground : t.darkBackground,
        m = r || i;
    if (o === a.i.ACCOUNT) return n === l.BR.LIGHT ? 'linear-gradient(90deg, '.concat(h).concat(c, ' 0%, ').concat(h).concat(d, ' 100%)') : 'linear-gradient(90deg, '.concat(h).concat(c, ' 0%, ').concat(h).concat(f, ' 100%)');
    if (o === a.i.PREVIEW) return 'linear-gradient(90deg, '.concat(h).concat(c, ' 0%, ').concat(h).concat(d, ' 100%)');
    let g = p && o === a.i.CHANNEL ? 'var(--bg-overlay-selected, var(--background-mod-subtle))' : 'var(--background-modifier-selected)',
        E = r ? 'var(--background-modifier-hover)' : i ? g : ''.concat(h, '00'),
        b = ''.concat(h).concat(m ? (n !== l.BR.LIGHT ? _ : d) : u);
    return 'linear-gradient(90deg, '.concat(E, ' 0%, ').concat(b, ' 100%)');
}
