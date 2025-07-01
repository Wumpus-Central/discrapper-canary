(n.d(t, {
    A: () => p,
    p: () => h
}),
    n(388685));
var r = n(73800),
    i = n(410030),
    a = n(359135),
    o = n(4242),
    s = n(231338);
let l = '14',
    c = '1A',
    u = '33',
    d = '4D',
    f = '66',
    _ = '80';
function p(e) {
    let t = (0, i.ZP)(),
        [n, a] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null != e &&
                a({
                    '--custom-nameplate': (t === s.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u,
                    '--custom-nameplate-neutral': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function h(e, t, n, o, s) {
    let l = (0, i.ZP)(),
        c = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : m({
                          palette: t.palette,
                          theme: l,
                          hover: n,
                          selected: o,
                          placement: s
                      }),
            [t, n, o, l, s]
        ),
        [u, d] = (0, r.useState)(null != c ? { background: c } : {}),
        f = s === a.i.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == c) return;
            if (null == e || null == e.current) return void d({ background: c });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (f ? 10 : -5),
                    n = t,
                    r = t + 50;
                d({
                    background: c,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .3) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return (t.observe(e.current), () => t.disconnect());
        }, [e, c, f]),
        u
    );
}
function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: p } = e;
    if (!(0, o.ic)(t)) return;
    let h = n === s.BR.LIGHT,
        m = h ? t.lightBackground : t.darkBackground;
    if (p === a.i.MEMBER_LIST || p === a.i.CHANNEL) {
        let e = ''.concat(i ? _ : r && p === a.i.MEMBER_LIST ? d : u);
        return 'linear-gradient(90deg, transparent 0%, '.concat(m).concat(l, ' 20%, ').concat(m).concat(l, ' 50%, ').concat(m).concat(e, ' 100%)');
    }
    let g = p === a.i.MINI_PREVIEW ? u : c,
        E = h ? d : f;
    return 'linear-gradient(90deg, '.concat(m).concat(g, ' 0%, ').concat(m).concat(E, ' 100%)');
}
