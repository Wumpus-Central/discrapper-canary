"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(621466),
    s = n(17928),
    a = n(531685),
    o = n(245853);
let l = (e, t) => {
    let n = i.useRef(!1),
        { enabled: l } = o.m8.useConfig({ location: t }),
        u = (0, s.bG)([a.A], () => a.A.isVisible());
    i.useEffect(() => {
        if (l)
            if (u) {
                if (n.current && e?.current != null && (0, r.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (n.current = !1);
                    } catch (e) {}
            } else n.current = !0;
    }, [l, u, e, n]);
};
