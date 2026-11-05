var s = t(477900),
    i = t(582128),
    l = t(435558),
    a = t(716365),
    r = t(194486),
    o = t(777511);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { containerDimensions: n, effect: c, onComplete: d } = e,
                u = i.useRef(null);
            return (
                i.useEffect(() => {
                    let e;
                    return (
                        !(async function () {
                            if (null != u.current) {
                                let n = await (async function (e) {
                                        let { animationType: n, animationId: t, url: s, shouldResize: i } = e,
                                            o = a.Bf[n] ?? a.Bf[r.B.BASIC],
                                            c = JSON.parse(
                                                JSON.stringify(null != t && t < o.length ? o[t] : (0, l.sample)(o)),
                                            );
                                        return ((c.assets[0].p = i ? await (0, a.tm)(s) : s), c);
                                    })(c),
                                    { default: s } = await t.e(996382).then(t.t.bind(t, 883885, 23));
                                null != u.current &&
                                    ((e = s.loadAnimation({
                                        container: u.current,
                                        renderer: "svg",
                                        loop: !1,
                                        autoplay: !0,
                                        animationData: n,
                                        rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                                    })),
                                    c.animationType === r.B.PREMIUM && e.setSpeed(0.8),
                                    e.addEventListener("complete", () => d?.(c.id)));
                            }
                        })(),
                        () => {
                            e?.destroy();
                        }
                    );
                }, [d, c]),
                (0, s.jsx)("div", { className: o.Q, style: { height: n.height, width: n.width }, ref: u })
            );
        },
    },
);
