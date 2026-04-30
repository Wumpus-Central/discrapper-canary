"use strict";
n.d(t, { K: () => l, _: () => u });
var i = n(64700),
    r = n(736653),
    s = n(88686),
    a = n(780898),
    o = n(818348);
function l(e) {
    let t = (0, r.Ay)(),
        [n, s] = (0, i.useState)({});
    return (
        (0, i.useEffect)(() => {
            null == e ||
                s({
                    "--custom-nameplate":
                        (t === o.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + "33",
                    "--custom-nameplate-neutral":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function u(e, t, n, l, u) {
    let c = (0, r.Ay)(),
        d = (0, i.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: n, hover: i, selected: r, placement: l } = e;
                          if (!(0, a.wT)(t)) return;
                          let u = n === o.NJ.LIGHT,
                              c = u ? t.lightBackground : t.darkBackground;
                          if (l === s.u.MEMBER_LIST || l === s.u.CHANNEL) {
                              let e = `${r ? "80" : i && l === s.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${c}14 20%, ${c}14 50%, ${c}${e} 100%)`;
                          }
                          let d = l === s.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${c}${d} 0%, ${c}${u ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: c, hover: n, selected: l, placement: u }),
            [t, n, l, c, u],
        ),
        [_, f] = (0, i.useState)(null != d ? { background: d } : {}),
        h = u === s.u.MEMBER_LIST;
    return (
        (0, i.useEffect)(() => {
            if (null == d) return;
            if (null == e || null == e.current) return void f({ background: d });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (h ? 10 : -5);
                f({
                    background: d,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, d, h]),
        _
    );
}
