"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(621466),
    s = n(311907),
    a = n(531685),
    o = n(245853);
let l = (e, t) => {
    let n = r.useRef(!1),
        { enabled: l } = o.m8.useConfig({ location: t }),
        u = (0, s.bG)([a.A], () => a.A.isVisible());
    r.useEffect(() => {
        if (l)
            if (u) {
                if (n.current && e?.current != null && (0, i.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (n.current = !1);
                    } catch (e) {}
            } else n.current = !0;
    }, [l, u, e, n]);
};
