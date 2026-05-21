l.d(t, { K: () => o, _: () => c });
var a = l(64700),
    s = l(736653),
    r = l(88686),
    n = l(780898),
    u = l(818348);
function o(e) {
    let t = (0, s.Ay)(),
        [l, r] = (0, a.useState)({});
    return (
        (0, a.useEffect)(() => {
            null == e ||
                r({
                    "--custom-nameplate":
                        (t === u.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + "33",
                    "--custom-nameplate-neutral":
                        t !== u.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== u.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        l
    );
}
function c(e, t, l, o, c) {
    let i = (0, s.Ay)(),
        m = (0, a.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: l, hover: a, selected: s, placement: o } = e;
                          if (!(0, n.wT)(t)) return;
                          let c = l === u.NJ.LIGHT,
                              i = c ? t.lightBackground : t.darkBackground;
                          if (o === r.u.MEMBER_LIST || o === r.u.CHANNEL) {
                              let e = `${s ? "80" : a && o === r.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${i}14 20%, ${i}14 50%, ${i}${e} 100%)`;
                          }
                          let m = o === r.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${i}${m} 0%, ${i}${c ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: i, hover: l, selected: o, placement: c }),
            [t, l, o, i, c],
        ),
        [d, g] = (0, a.useState)(null != m ? { background: m } : {}),
        I = c === r.u.MEMBER_LIST;
    return (
        (0, a.useEffect)(() => {
            if (null == m) return;
            if (null == e || null == e.current) return void g({ background: m });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (I ? 10 : -5);
                g({
                    background: m,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, m, I]),
        d
    );
}
