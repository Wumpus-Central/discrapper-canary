"use strict";
n.d(t, { m: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(451988),
    u = n(487166);
let c = 200;
var d = (function (e) {
    return (e[(e.TRANSLATE = 1)] = "TRANSLATE"), (e[(e.SCALE = 2)] = "SCALE"), (e[(e.FADE = 3)] = "FADE"), e;
})(d || {});
let _ = Object.freeze({ 1: u.Tl, 2: u.hs, 3: u.Rv }),
    f = Object.freeze({ top: u.ZR, bottom: u.XI, left: u.Hn, right: u.sS, center: u.pm, window_center: u.pm });
function p(e) {
    let { position: t, type: n, children: a } = e,
        { reducedMotion: d } = i.useContext(o.CZY),
        p = d.enabled ? 3 : n,
        [h, m] = i.useState(null != t),
        [g] = i.useState(() => new l.Ep()),
        [E, A] = i.useState(!0),
        I = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            I.current?.addEventListener("transitionend", () => {
                A(!1);
            }),
                setTimeout(() => {
                    A(!1);
                }, c);
        }, []),
        i.useEffect(() => () => g.stop(), [g]),
        i.useEffect(() => {
            null != t && g.start(10, () => m(!0));
        }, [t, g]),
        (0, r.jsx)("div", {
            "data-popout-animating": E,
            className: s()(null != t ? f[t] : null, { [_[p]]: null != t, [u.Wr]: h }),
            children: a,
        })
    );
}
p.Types = d;
