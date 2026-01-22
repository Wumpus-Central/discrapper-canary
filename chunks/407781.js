n.d(t, {
    A: () => f,
}),
    n(457529);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(883885),
    o = n.n(s),
    l = n(667050),
    c = n(194486),
    u = n(196305);
let d = async (e) => {
    var t;
    let { animationType: n, animationId: r, url: i, shouldResize: s } = e,
        o = null != (t = l.Bf[n]) ? t : l.Bf[c.B.BASIC],
        u = JSON.parse(JSON.stringify(null != r && r < o.length ? o[r] : (0, a.sample)(o)));
    return (u.assets[0].p = s ? await (0, l.tm)(i) : i), u;
};

function f(e) {
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
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMax slice",
                            },
                        })),
                            n.animationType === c.B.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener("complete", () => (null == a ? void 0 : a(n.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [a, n]),
        (0, r.jsx)("div", {
            className: u.Q,
            style: {
                height: t.height,
                width: t.width,
            },
            ref: s,
        })
    );
}
