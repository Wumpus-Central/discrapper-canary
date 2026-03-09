"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(883885),
    o = n.n(a),
    l = n(667050),
    u = n(194486),
    c = n(196305);
let d = async (e) => {
    let { animationType: t, animationId: n, url: r, shouldResize: i } = e,
        a = l.Bf[t] ?? l.Bf[u.B.BASIC],
        o = JSON.parse(JSON.stringify(null != n && n < a.length ? a[n] : (0, s.sample)(a)));
    return (o.assets[0].p = i ? await (0, l.tm)(r) : r), o;
};
function _(e) {
    let { containerDimensions: t, effect: n, onComplete: s } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != a.current) {
                        let t = await d(n);
                        (e = o().loadAnimation({
                            container: a.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                        })),
                            n.animationType === u.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => s?.(n.id));
                    }
                })(),
                () => {
                    e?.destroy();
                }
            );
        }, [s, n]),
        (0, r.jsx)("div", { className: c.Q, style: { height: t.height, width: t.width }, ref: a })
    );
}
