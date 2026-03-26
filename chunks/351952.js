"use strict";
n.d(t, { K: () => p, _: () => h });
var r = n(64700),
    i = n(736653),
    s = n(88686),
    a = n(780898),
    o = n(818348);
let l = "14",
    u = "1A",
    c = "33",
    d = "4D",
    _ = "66",
    f = "80";
function p(e) {
    let t = (0, i.Ay)(),
        [n, s] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null == e ||
                s({
                    "--custom-nameplate": (t === o.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + c,
                    "--custom-nameplate-neutral":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function h(e, t, n, a, o) {
    let l = (0, i.Ay)(),
        u = (0, r.useMemo)(
            () => (null == t ? null : m({ palette: t.palette, theme: l, hover: n, selected: a, placement: o })),
            [t, n, a, l, o],
        ),
        [c, d] = (0, r.useState)(null != u ? { background: u } : {}),
        _ = o === s.u.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == u) return;
            if (null == e || null == e.current) return void d({ background: u });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (_ ? 10 : -5),
                    n = t,
                    r = t + 50;
                d({
                    background: u,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${n}px, rgba(0, 0, 0, 1) ${r}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, u, _]),
        c
    );
}
function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: p } = e;
    if (!(0, a.wT)(t)) return;
    let h = n === o.NJ.LIGHT,
        m = h ? t.lightBackground : t.darkBackground;
    if (p === s.u.MEMBER_LIST || p === s.u.CHANNEL) {
        let e = `${i ? f : r && p === s.u.MEMBER_LIST ? d : c}`;
        return `linear-gradient(90deg, transparent 0%, ${m}${l} 20%, ${m}${l} 50%, ${m}${e} 100%)`;
    }
    let E = p === s.u.MINI_PREVIEW ? c : u,
        g = h ? d : _;
    return `linear-gradient(90deg, ${m}${E} 0%, ${m}${g} 100%)`;
}
