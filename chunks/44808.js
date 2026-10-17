n.d(t, { m: () => A });
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(844222),
    d = n(451988),
    c = n(638120),
    u = (((i = u || {})[(i.TRANSLATE = 1)] = "TRANSLATE"), (i[(i.SCALE = 2)] = "SCALE"), (i[(i.FADE = 3)] = "FADE"), i);
let _ = Object.freeze({ 1: c.Tl, 2: c.hs, 3: c.Rv }),
    E = Object.freeze({ top: c.ZR, bottom: c.XI, left: c.Hn, right: c.sS, center: c.pm, window_center: c.pm });
function A(e) {
    let { position: t, type: n, children: i } = e,
        { reducedMotion: s } = a.useContext(o.C),
        u = s.enabled ? 3 : n,
        [A, h] = a.useState(null != t),
        [f] = a.useState(() => new d.Ep()),
        [I, p] = a.useState(!0),
        T = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            (T.current?.addEventListener("transitionend", () => {
                p(!1);
            }),
                setTimeout(() => {
                    p(!1);
                }, 200));
        }, []),
        a.useEffect(() => () => f.stop(), [f]),
        a.useEffect(() => {
            null != t && f.start(10, () => h(!0));
        }, [t, f]),
        (0, r.jsx)("div", {
            "data-popout-animating": I,
            className: l()(null != t ? E[t] : null, { [_[u]]: null != t, [c.Wr]: A }),
            children: i,
        })
    );
}
A.Types = u;
