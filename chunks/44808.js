n.d(t, { m: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(451988),
    c = n(487166);
let u = 200;
var d = (function (e) {
    return (e[(e.TRANSLATE = 1)] = "TRANSLATE"), (e[(e.SCALE = 2)] = "SCALE"), (e[(e.FADE = 3)] = "FADE"), e;
})(d || {});
let f = Object.freeze({
        1: c.Tl,
        2: c.hs,
        3: c.Rv,
    }),
    p = Object.freeze({
        top: c.ZR,
        bottom: c.XI,
        left: c.Hn,
        right: c.sS,
        center: c.pm,
        window_center: c.pm,
    });
function _(e) {
    let { position: t, type: n, children: a } = e,
        { reducedMotion: d } = i.useContext(o.CZY),
        _ = d.enabled ? 3 : n,
        [h, m] = i.useState(null != t),
        [g] = i.useState(() => new l.Ep()),
        [E, b] = i.useState(!0),
        y = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            null == (e = y.current) ||
                e.addEventListener("transitionend", () => {
                    b(!1);
                }),
                setTimeout(() => {
                    b(!1);
                }, u);
        }, []),
        i.useEffect(() => () => g.stop(), [g]),
        i.useEffect(() => {
            null != t && g.start(10, () => m(!0));
        }, [t, g]),
        (0, r.jsx)("div", {
            "data-popout-animating": E,
            className: s()(null != t ? p[t] : null, {
                [f[_]]: null != t,
                [c.Wr]: h,
            }),
            children: a,
        })
    );
}
_.Types = d;
