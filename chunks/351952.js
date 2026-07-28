"use strict";
n.d(t, { K: () => o, _: () => d });
var i = n(582128),
    r = n(736653),
    a = n(88686),
    s = n(780898),
    l = n(818348);
function o(e) {
    let t = (0, r.Ay)(),
        [n, a] = (0, i.useState)({});
    return (
        (0, i.useEffect)(() => {
            null == e ||
                a({
                    "--custom-nameplate":
                        (t === l.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + "33",
                    "--custom-nameplate-neutral":
                        t !== l.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== l.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}
function d(e, t, n, o, d) {
    let c = (0, r.Ay)(),
        u = (0, i.useMemo)(
            () =>
                null == t
                    ? null
                    : (function (e) {
                          let { palette: t, theme: n, hover: i, selected: r, placement: o } = e;
                          if (!(0, s.wT)(t)) return;
                          let d = n === l.NJ.LIGHT,
                              c = d ? t.lightBackground : t.darkBackground;
                          if (o === a.u.MEMBER_LIST || o === a.u.CHANNEL) {
                              let e = `${r ? "80" : i && o === a.u.MEMBER_LIST ? "4D" : "33"}`;
                              return `linear-gradient(90deg, transparent 0%, ${c}14 20%, ${c}14 50%, ${c}${e} 100%)`;
                          }
                          let u = o === a.u.MINI_PREVIEW ? "33" : "1A";
                          return `linear-gradient(90deg, ${c}${u} 0%, ${c}${d ? "4D" : "66"} 100%)`;
                      })({ palette: t.palette, theme: c, hover: n, selected: o, placement: d }),
            [t, n, o, c, d],
        ),
        [_, E] = (0, i.useState)(null != u ? { background: u } : {}),
        A = d === a.u.MEMBER_LIST;
    return (
        (0, i.useEffect)(() => {
            if (null == u) return;
            if (null == e || null == e.current) return void E({ background: u });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (A ? 10 : -5);
                E({
                    background: u,
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, u, A]),
        _
    );
}
