n.d(t, { K: () => l, _: () => o });
var i = n(64700),
    r = n(736653),
    a = n(88686),
    s = n(780898),
    _ = n(818348);
function l(e) {
    let t = (0, r.Ay)(),
        [n, a] = (0, i.useState)({});
    return (
        (0, i.useEffect)(() => {
            null == e ||
                a({
                    "--custom-nameplate":
                        (t === _.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + "33",
                    "--custom-nameplate-neutral":
                        t !== _.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== _.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function o(e, t, n, l, o) {
    let E = (0, r.Ay)(),
        d = (0, i.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: n, hover: i, selected: r, placement: l } = e;
                          if (!(0, s.wT)(t)) return;
                          let o = n === _.NJ.LIGHT,
                              E = o ? t.lightBackground : t.darkBackground;
                          if (l === a.u.MEMBER_LIST || l === a.u.CHANNEL) {
                              let e = `${r ? "80" : i && l === a.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${E}14 20%, ${E}14 50%, ${E}${e} 100%)`;
                          }
                          let d = l === a.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${E}${d} 0%, ${E}${o ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: E, hover: n, selected: l, placement: o }),
            [t, n, l, E, o],
        ),
        [c, u] = (0, i.useState)(null != d ? { background: d } : {}),
        I = o === a.u.MEMBER_LIST;
    return (
        (0, i.useEffect)(() => {
            if (null == d) return;
            if (null == e || null == e.current) return void u({ background: d });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (I ? 10 : -5);
                u({
                    background: d,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, d, I]),
        c
    );
}
