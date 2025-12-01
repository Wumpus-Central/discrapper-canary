n.d(t, {
    A: () => _,
    p: () => m,
}),
    n(388685);
var r = n(473749),
    i = n(410030),
    a = n(359135),
    o = n(4242),
    s = n(231338);
let l = "14",
    c = "1A",
    u = "33",
    d = "4D",
    f = "66",
    p = "80";
function _(e) {
    let t = (0, i.ZP)(),
        [n, a] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null != e &&
                a({
                    "--custom-nameplate": (t === s.BR.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u,
                    "--custom-nameplate-neutral":
                        t !== s.BR.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== s.BR.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function m(e, t, n, o, s) {
    let l = (0, i.ZP)(),
        c = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : h({
                          palette: t.palette,
                          theme: l,
                          hover: n,
                          selected: o,
                          placement: s,
                      }),
            [t, n, o, l, s],
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
                    maskImage: "linear-gradient(to right, rgba(0, 0, 0, .3) "
                        .concat(n, "px, rgba(0, 0, 0, 1) ")
                        .concat(r, "px)"),
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, c, f]),
        u
    );
}
function h(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: _ } = e;
    if (!(0, o.ic)(t)) return;
    let m = n === s.BR.LIGHT,
        h = m ? t.lightBackground : t.darkBackground;
    if (_ === a.i.MEMBER_LIST || _ === a.i.CHANNEL) {
        let e = "".concat(i ? p : r && _ === a.i.MEMBER_LIST ? d : u);
        return "linear-gradient(90deg, transparent 0%, "
            .concat(h)
            .concat(l, " 20%, ")
            .concat(h)
            .concat(l, " 50%, ")
            .concat(h)
            .concat(e, " 100%)");
    }
    let g = _ === a.i.MINI_PREVIEW ? u : c,
        E = m ? d : f;
    return "linear-gradient(90deg, ".concat(h).concat(g, " 0%, ").concat(h).concat(E, " 100%)");
}
