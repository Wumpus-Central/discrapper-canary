n.d(t, {
    A: () => _,
    p: () => p
}),
    n(388685);
var r = n(192379),
    i = n(410030),
    o = n(359135),
    a = n(4242),
    s = n(231338);
let l = '1A',
    c = '33',
    u = '4D',
    d = '66',
    f = '80';
function _(e) {
    let t = (0, i.ZP)(),
        [n, o] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null != e &&
                o({
                    '--custom-nameplate': (t === s.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + c,
                    '--custom-nameplate-neutral': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function p(e, t, n, o, a) {
    let s = (0, i.ZP)(),
        l = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : h({
                          palette: t.palette,
                          theme: s,
                          hover: n,
                          selected: o,
                          placement: a
                      }),
            [t, n, o, s, a]
        ),
        [c, u] = (0, r.useState)(null != l ? { background: l } : {});
    return (
        (0, r.useEffect)(() => {
            if (null == l) return;
            if (null == e || null == e.current) return void u({ background: l });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width,
                    n = 0.8 * t,
                    r = 1.1 * t;
                u({
                    background: l,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, l]),
        c
    );
}
function h(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: _ } = e;
    if (!(0, a.ic)(t)) return;
    let p = n === s.BR.LIGHT ? t.lightBackground : t.darkBackground,
        h = r || i;
    if (_ === o.i.ACCOUNT) return n === s.BR.LIGHT ? 'linear-gradient(90deg, '.concat(p).concat(l, ' 0%, ').concat(p).concat(u, ' 100%)') : 'linear-gradient(90deg, '.concat(p).concat(l, ' 0%, ').concat(p).concat(d, ' 100%)');
    if (_ === o.i.PREVIEW) return 'linear-gradient(90deg, '.concat(p).concat(l, ' 0%, ').concat(p).concat(u, ' 100%)');
    let m = ''.concat(p).concat(h ? (n !== s.BR.LIGHT ? f : u) : c);
    return 'linear-gradient(90deg, transparent 0%, '.concat(m, ' 100%)');
}
