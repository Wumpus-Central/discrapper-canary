n.d(t, {
    A: () => p,
    p: () => h
}),
    n(388685);
var r = n(192379),
    i = n(410030),
    o = n(359135),
    a = n(4242),
    s = n(231338);
let l = '14',
    c = '1A',
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
                    '--custom-nameplate': (t === s.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u,
                    '--custom-nameplate-neutral': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function h(e, t, n, a, s, l) {
    let c = (0, i.ZP)(),
        u = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : m({
                          palette: t.palette,
                          theme: c,
                          hover: n,
                          selected: a,
                          placement: s,
                          updatedOpacity: l
                      }),
            [t, n, a, c, s, l]
        ),
        [d, f] = (0, r.useState)(null != u ? { background: u } : {}),
        _ = s === o.i.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == u) return;
            if (null == e || null == e.current) return void f({ background: u });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (_ ? 10 : -5),
                    n = t,
                    r = t + 50;
                f({
                    background: u,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .3) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, u, _]),
        d
    );
}
function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: p, updatedOpacity: h } = e;
    if (!(0, a.ic)(t)) return;
    let m = n === s.BR.LIGHT ? t.lightBackground : t.darkBackground;
    if (p === o.i.ACCOUNT) return n === s.BR.LIGHT ? 'linear-gradient(90deg, '.concat(m).concat(c, ' 0%, ').concat(m).concat(d, ' 100%)') : 'linear-gradient(90deg, '.concat(m).concat(c, ' 0%, ').concat(m).concat(f, ' 100%)');
    if (p === o.i.PREVIEW) return 'linear-gradient(90deg, '.concat(m).concat(c, ' 0%, ').concat(m).concat(d, ' 100%)');
    let g = !0 === h ? ''.concat(m).concat(i ? _ : r && p === o.i.MEMBER_LIST ? d : u) : ''.concat(m).concat(r || i ? (n !== s.BR.LIGHT ? _ : d) : u);
    return 'linear-gradient(90deg, transparent 0%, '.concat(m).concat(l, ' 20%, ').concat(m).concat(l, ' 50%, ').concat(g, ' 100%)');
}
