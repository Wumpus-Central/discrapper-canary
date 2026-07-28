"use strict";
n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(104142),
    l = n(194486),
    o = n(762450);
async function d(e) {
    let { animationType: t, animationId: n, url: i, shouldResize: r } = e,
        o = s.Bf[t] ?? s.Bf[l.B.BASIC],
        d = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, a.sample)(o)));
    return (d.assets[0].p = r ? await (0, s.tm)(i) : i), d;
}
function c(e) {
    let { containerDimensions: t, effect: a, onComplete: s } = e,
        c = r.useRef(null);
    return (
        r.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != c.current) {
                        let t = await d(a),
                            { default: i } = await n.e("96382").then(n.t.bind(n, 883885, 23));
                        null != c.current &&
                            ((e = i.loadAnimation({
                                container: c.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t,
                                rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                            })),
                            a.animationType === l.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => s?.(a.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [s, a]),
        (0, i.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: c })
    );
}
