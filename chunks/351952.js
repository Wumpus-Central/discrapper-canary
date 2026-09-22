n.d(t, { K: () => c, _: () => i });
var r = n(582128),
    l = n(736653),
    u = n(88686),
    a = n(780898),
    s = n(818348);
function c(e) {
    let t = (0, l.Ay)(),
        [n, u] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null == e ||
                u({
                    "--custom-nameplate":
                        (t === s.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + "33",
                    "--custom-nameplate-neutral":
                        t !== s.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== s.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function i(e, t, n, c, i) {
    let o = (0, l.Ay)(),
        d = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: n, hover: r, selected: l, placement: c } = e;
                          if (!(0, a.wT)(t)) return;
                          let i = n === s.NJ.LIGHT,
                              o = i ? t.lightBackground : t.darkBackground;
                          if (c === u.u.MEMBER_LIST || c === u.u.CHANNEL) {
                              let e = `${l ? "80" : r && c === u.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${o}14 20%, ${o}14 50%, ${o}${e} 100%)`;
                          }
                          let d = c === u.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${o}${d} 0%, ${o}${i ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: o, hover: n, selected: c, placement: i }),
            [t, n, c, o, i],
        ),
        [m, p] = (0, r.useState)(null != d ? { background: d } : {}),
        f = i === u.u.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == d) return;
            if (null == e || null == e.current) return void p({ background: d });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (f ? 10 : -5);
                p({
                    background: d,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return (t.observe(e.current), () => t.disconnect());
        }, [e, d, f]),
        m
    );
}
