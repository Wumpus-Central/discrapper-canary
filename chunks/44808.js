"use strict";
n.d(t, { m: () => p });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(844222),
    u = n(451988),
    c = n(10185),
    d = (((r = d || {})[(r.TRANSLATE = 1)] = "TRANSLATE"), (r[(r.SCALE = 2)] = "SCALE"), (r[(r.FADE = 3)] = "FADE"), r);
let _ = Object.freeze({ 1: c.Tl, 2: c.hs, 3: c.Rv }),
    f = Object.freeze({ top: c.ZR, bottom: c.XI, left: c.Hn, right: c.sS, center: c.pm, window_center: c.pm });
function p(e) {
    let { position: t, type: n, children: r } = e,
        { reducedMotion: a } = s.useContext(l.C),
        d = a.enabled ? 3 : n,
        [p, h] = s.useState(null != t),
        [E] = s.useState(() => new u.Ep()),
        [m, g] = s.useState(!0),
        A = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            A.current?.addEventListener("transitionend", () => {
                g(!1);
            }),
                setTimeout(() => {
                    g(!1);
                }, 200);
        }, []),
        s.useEffect(() => () => E.stop(), [E]),
        s.useEffect(() => {
            null != t && E.start(10, () => h(!0));
        }, [t, E]),
        (0, i.jsx)("div", {
            "data-popout-animating": m,
            className: o()(null != t ? f[t] : null, { [_[d]]: null != t, [c.Wr]: p }),
            children: r,
        })
    );
}
p.Types = d;
