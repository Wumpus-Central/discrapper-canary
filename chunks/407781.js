var l = t(477900),
    s = t(582128),
    a = t(435558),
    i = t(716365),
    r = t(194486),
    o = t(777511);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { containerDimensions: n, effect: u, onComplete: c } = e,
                d = s.useRef(null);
            return (
                s.useEffect(() => {
                    let e;
                    return (
                        !(async function () {
                            if (null != d.current) {
                                let n = await (async function (e) {
                                        let { animationType: n, animationId: t, url: l, shouldResize: s } = e,
                                            o = i.Bf[n] ?? i.Bf[r.B.BASIC],
                                            u = JSON.parse(
                                                JSON.stringify(null != t && t < o.length ? o[t] : (0, a.sample)(o)),
                                            );
                                        return ((u.assets[0].p = s ? await (0, i.tm)(l) : l), u);
                                    })(u),
                                    { default: l } = await t.e(996382).then(t.t.bind(t, 883885, 23));
                                null != d.current &&
                                    ((e = l.loadAnimation({
                                        container: d.current,
                                        renderer: "svg",
                                        loop: !1,
                                        autoplay: !0,
                                        animationData: n,
                                        rendererSettings: { preserveAspectRatio: "xMidYMax slice" },
                                    })),
                                    u.animationType === r.B.PREMIUM && e.setSpeed(0.8),
                                    e.addEventListener("complete", () => c?.(u.id)));
                            }
                        })(),
                        () => {
                            e?.destroy();
                        }
                    );
                }, [c, u]),
                (0, l.jsx)("div", { className: o.Q, style: { height: n.height, width: n.width }, ref: d })
            );
        },
    },
);
