"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(104142),
    o = n(194486),
    l = n(628202);
let u = async (e) => {
    let { animationType: t, animationId: n, url: i, shouldResize: r } = e,
        l = a.Bf[t] ?? a.Bf[o.B.BASIC],
        u = JSON.parse(JSON.stringify(null != n && n < l.length ? l[n] : (0, s.sample)(l)));
    return (u.assets[0].p = r ? await (0, a.tm)(i) : i), u;
};
function c(e) {
    let { containerDimensions: t, effect: s, onComplete: a } = e,
        c = r.useRef(null);
    return (
        r.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != c.current) {
                        let t = await u(s),
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
                            s.animationType === o.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => a?.(s.id)));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [a, s]),
        (0, i.jsx)("div", { className: l.Q, style: { height: t.height, width: t.width }, ref: c })
    );
}
