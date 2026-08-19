s.d(t, { A: () => o });
var r = s(582128),
    n = s(621466),
    i = s(17928),
    l = s(531685),
    a = s(192444);
let o = function (e, t) {
    let s = r.useRef(!1),
        { enabled: o } = a.m8.useConfig({ location: t }),
        u = (0, i.bG)([l.A], () => l.A.isVisible());
    r.useEffect(() => {
        if (o)
            if (u) {
                if (s.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (s.current = !1);
                    } catch (e) {}
            } else s.current = !0;
    }, [o, u, e, s]);
};
