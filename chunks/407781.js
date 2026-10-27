n.d(t, { A: () => d });
var i = n(477900),
    s = n(582128),
    l = n(435558),
    a = n(104142),
    r = n(194486),
    o = n(777511);
async function c(e) {
    let { animationType: t, animationId: n, url: i, shouldResize: s } = e,
        o = a.Bf[t] ?? a.Bf[r.B.BASIC],
        c = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, l.sample)(o)));
    return ((c.assets[0].p = s ? await (0, a.tm)(i) : i), c);
}
function d(e) {
    let { containerDimensions: t, effect: l, onComplete: a } = e,
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != d.current) {
                        let t = await c(l),
                            { default: i } = await n.e("996382").then(n.t.bind(n, 883885, 23));
                        null != d.current &&
                            ((e = i.loadAnimation({
                                container: d.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                                rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                            })),
                            l.animationType === r.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => a?.(l.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [a, l]),
        (0, i.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: d })
    );
}
