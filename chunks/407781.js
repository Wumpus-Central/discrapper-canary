t.d(n, { A: () => c });
var s = t(477900),
    i = t(582128),
    l = t(435558),
    a = t(104142),
    r = t(194486),
    o = t(777511);
async function d(e) {
    let { animationType: n, animationId: t, url: s, shouldResize: i } = e,
        o = a.Bf[n] ?? a.Bf[r.B.BASIC],
        d = JSON.parse(JSON.stringify(null != t && t < o.length ? o[t] : (0, l.sample)(o)));
    return ((d.assets[0].p = i ? await (0, a.tm)(s) : s), d);
}
function c(e) {
    let { containerDimensions: n, effect: l, onComplete: a } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != c.current) {
                        let n = await d(l),
                            { default: s } = await t.e("996382").then(t.t.bind(t, 883885, 23));
                        null != c.current &&
                            ((e = s.loadAnimation({
                                container: c.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: n,
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
        (0, s.jsx)("div", { className: o.Q, style: { height: n.height, width: n.width }, ref: c })
    );
}
