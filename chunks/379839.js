n.d(t, {
    A: () => _,
    p: () => p
}),
    n(388685);
var r = n(192379),
    i = n(410030),
    a = n(359135),
    o = n(4242),
    s = n(231338);
let l = '1A',
    c = '33',
    u = '4D',
    d = '66',
    f = '80';
function _(e) {
    let t = (0, i.ZP)(),
        [n, a] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null != e &&
                a({
                    '--custom-nameplate': (t === s.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + c,
                    '--custom-nameplate-neutral': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.22)' : 'rgba(255, 255, 255  , 0.22)',
                    '--custom-nameplate-neutral-hovered': t !== s.BR.LIGHT ? 'rgba(0, 0, 0, 0.33)' : 'rgba(255, 255, 255  , 0.33)'
                });
        }, [e, t]),
        n
    );
}
function p(e, t, n, a, o, s) {
    let l = (0, i.ZP)(),
        c = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : h({
                          palette: t.palette,
                          theme: l,
                          hover: n,
                          selected: a,
                          placement: o,
                          updatedOpacity: s
                      }),
            [t, n, a, l, o, s]
        ),
        [u, d] = (0, r.useState)(null != c ? { background: c } : {});
    return (
        (0, r.useEffect)(() => {
            if (null == c) return;
            if (null == e || null == e.current) return void d({ background: c });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width,
                    n = 0.8 * t,
                    r = 1.1 * t;
                d({
                    background: c,
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, .2) '.concat(n, 'px, rgba(0, 0, 0, 1) ').concat(r, 'px)')
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, c]),
        u
    );
}
function h(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: _, updatedOpacity: p } = e;
    if (!(0, o.ic)(t)) return;
    let h = n === s.BR.LIGHT ? t.lightBackground : t.darkBackground;
    if (_ === a.i.ACCOUNT) return n === s.BR.LIGHT ? 'linear-gradient(90deg, '.concat(h).concat(l, ' 0%, ').concat(h).concat(u, ' 100%)') : 'linear-gradient(90deg, '.concat(h).concat(l, ' 0%, ').concat(h).concat(d, ' 100%)');
    if (_ === a.i.PREVIEW) return 'linear-gradient(90deg, '.concat(h).concat(l, ' 0%, ').concat(h).concat(u, ' 100%)');
    let m = !0 === p ? ''.concat(h).concat(i ? f : r && _ === a.i.MEMBER_LIST ? u : c) : ''.concat(h).concat(r || i ? (n !== s.BR.LIGHT ? f : u) : c);
    return 'linear-gradient(90deg, transparent 0%, '.concat(m, ' 100%)');
}
