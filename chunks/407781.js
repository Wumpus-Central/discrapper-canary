"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(667050),
    a = n(194486),
    o = n(628202);
let c = async (e) => {
    let { animationType: t, animationId: n, url: i, shouldResize: l } = e,
        o = r.Bf[t] ?? r.Bf[a.B.BASIC],
        c = JSON.parse(JSON.stringify(null != n && n < o.length ? o[n] : (0, s.sample)(o)));
    return (c.assets[0].p = l ? await (0, r.tm)(i) : i), c;
};
function u(e) {
    let { containerDimensions: t, effect: s, onComplete: r } = e,
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != u.current) {
                        let t = await c(s),
                            { default: i } = await n.e("96382").then(n.t.bind(n, 883885, 23));
                        null != u.current &&
                            ((e = i.loadAnimation({
                                container: u.current,
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
        (0, i.jsx)("div", { className: o.Q, style: { height: t.height, width: t.width }, ref: u })
    );
}
