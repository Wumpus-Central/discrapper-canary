"use strict";
n.d(t, { A: () => c });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n(104142),
    a = n(194486),
    o = n(762450);
async function u(e) {
    let { animationType: t, animationId: n, url: l, shouldResize: i } = e,
        o = r.Bf[t] ?? r.Bf[a.B.BASIC],
        u = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, s.sample)(o)));
    return (u.assets[0].p = i ? await (0, r.tm)(l) : l), u;
}
function c(e) {
    let { containerDimensions: t, effect: s, onComplete: r } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != c.current) {
                        let t = await u(s),
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
                            s.animationType === a.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => r?.(s.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [r, s]),
        (0, l.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: c })
    );
}
