n.d(t, { A: () => c });
var l = n(477900),
    s = n(582128),
    i = n(435558),
    a = n(104142),
    r = n(194486),
    o = n(777511);
async function u(e) {
    let { animationType: t, animationId: n, url: l, shouldResize: s } = e,
        o = a.Bf[t] ?? a.Bf[r.B.BASIC],
        u = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, i.sample)(o)));
    return ((u.assets[0].p = s ? await (0, a.tm)(l) : l), u);
}
function c(e) {
    let { containerDimensions: t, effect: i, onComplete: a } = e,
        c = s.useRef(null);
    return (
        s.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != c.current) {
                        let t = await u(i),
                            { default: l } = await n.e("996382").then(n.t.bind(n, 883885, 23));
                        null != c.current &&
                            ((e = l.loadAnimation({
                                container: c.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                                rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                            })),
                            i.animationType === r.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => a?.(i.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [a, i]),
        (0, l.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: c })
    );
}
