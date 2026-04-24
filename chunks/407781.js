"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(104142),
    r = n(194486),
    o = n(628202);
let c = async (e) => {
    let { animationType: t, animationId: n, url: l, shouldResize: i } = e,
        o = a.Bf[t] ?? a.Bf[r.B.BASIC],
        c = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, s.sample)(o)));
    return (c.assets[0].p = i ? await (0, a.tm)(l) : l), c;
};
function u(e) {
    let { containerDimensions: t, effect: s, onComplete: a } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != u.current) {
                        let t = await c(s),
                            { default: l } = await n.e("96382").then(n.t.bind(n, 883885, 23));
                        null != u.current &&
                            ((e = l.loadAnimation({
                                container: u.current,
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
        (0, l.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: u })
    );
}
