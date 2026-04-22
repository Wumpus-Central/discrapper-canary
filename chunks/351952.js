n.d(t, { K: () => o, _: () => u });
var r = n(64700),
    l = n(736653),
    i = n(88686),
    a = n(780898),
    s = n(818348);
function o(e) {
    let t = (0, l.Ay)(),
        [n, i] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null == e ||
                i({
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
function u(e, t, n, o, u) {
    let c = (0, l.Ay)(),
        d = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: n, hover: r, selected: l, placement: o } = e;
                          if (!(0, a.wT)(t)) return;
                          let u = n === s.NJ.LIGHT,
                              c = u ? t.lightBackground : t.darkBackground;
                          if (o === i.u.MEMBER_LIST || o === i.u.CHANNEL) {
                              let e = `${l ? "80" : r && o === i.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${c}14 20%, ${c}14 50%, ${c}${e} 100%)`;
                          }
                          let d = o === i.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${c}${d} 0%, ${c}${u ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: c, hover: n, selected: o, placement: u }),
            [t, n, o, c, u],
        ),
        [_, p] = (0, r.useState)(null != d ? { background: d } : {}),
        h = u === i.u.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == d) return;
            if (null == e || null == e.current) return void p({ background: d });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (h ? 10 : -5);
                p({
                    background: d,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, d, h]),
        _
    );
}
