n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    a = n(104142),
    r = n(194486),
    o = n(777511);
async function u(e) {
    let { animationType: t, animationId: n, url: l, shouldResize: i } = e,
        o = a.Bf[t] ?? a.Bf[r.B.BASIC],
        u = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, s.sample)(o)));
    return ((u.assets[0].p = i ? await (0, a.tm)(l) : l), u);
}
function d(e) {
    let { containerDimensions: t, effect: s, onComplete: a } = e,
        d = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != d.current) {
                        let t = await u(s),
                            { default: l } = await n.e("996382").then(n.t.bind(n, 883885, 23));
                        null != d.current &&
                            ((e = l.loadAnimation({
                                container: d.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                                rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                            })),
                            s.animationType === r.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => a?.(s.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [a, s]),
        (0, l.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: d })
    );
}
