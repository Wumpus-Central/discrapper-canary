"use strict";
n.d(t, { m: () => E });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(844222),
    u = n(451988),
    d = n(10185),
    c = (((r = c || {})[(r.TRANSLATE = 1)] = "TRANSLATE"), (r[(r.SCALE = 2)] = "SCALE"), (r[(r.FADE = 3)] = "FADE"), r);
let _ = Object.freeze({ 1: d.Tl, 2: d.hs, 3: d.Rv }),
    f = Object.freeze({ top: d.ZR, bottom: d.XI, left: d.Hn, right: d.sS, center: d.pm, window_center: d.pm });
function E(e) {
    let { position: t, type: n, children: r } = e,
        { reducedMotion: a } = s.useContext(l.C),
        c = a.enabled ? 3 : n,
        [E, h] = s.useState(null != t),
        [p] = s.useState(() => new u.Ep()),
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
        s.useEffect(() => () => p.stop(), [p]),
        s.useEffect(() => {
            null != t && p.start(10, () => h(!0));
        }, [t, p]),
        (0, i.jsx)("div", {
            "data-popout-animating": m,
            className: o()(null != t ? f[t] : null, { [_[c]]: null != t, [d.Wr]: E }),
            children: r,
        })
    );
}
E.Types = c;
