"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(883885),
    o = n.n(s),
    l = n(667050),
    u = n(194486),
    c = n(196305);
let d = async (e) => {
    let { animationType: t, animationId: n, url: r, shouldResize: i } = e,
        s = l.Bf[t] ?? l.Bf[u.B.BASIC],
        o = JSON.parse(JSON.stringify(null != n && n < s.length ? s[n] : (0, a.sample)(s)));
    return (o.assets[0].p = i ? await (0, l.tm)(r) : r), o;
};
function _(e) {
    let { containerDimensions: t, effect: n, onComplete: a } = e,
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != s.current) {
                        let t = await d(n);
                        (e = o().loadAnimation({
                            container: s.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                        })),
                            n.animationType === u.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => a?.(n.id));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [a, n]),
        (0, r.jsx)("div", { className: c.Q, style: { height: t.height, width: t.width }, ref: s })
    );
}
