n.d(t, { A: () => u });
var i = n(477900),
    s = n(582128),
    l = n(435558),
    a = n(104142),
    r = n(194486),
    o = n(777511);
async function d(e) {
    let { animationType: t, animationId: n, url: i, shouldResize: s } = e,
        o = a.Bf[t] ?? a.Bf[r.B.BASIC],
        d = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, l.sample)(o)));
    return ((d.assets[0].p = s ? await (0, a.tm)(i) : i), d);
}
function u(e) {
    let { containerDimensions: t, effect: l, onComplete: a } = e,
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != u.current) {
                        let t = await d(l),
                            { default: i } = await n.e("996382").then(n.t.bind(n, 883885, 23));
                        null != u.current &&
                            ((e = i.loadAnimation({
                                container: u.current,
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
        (0, i.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: u })
    );
}
