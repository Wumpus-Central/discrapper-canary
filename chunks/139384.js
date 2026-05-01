s.d(t, { A: () => c });
var r = s(64700),
    n = s(621466),
    l = s(17928),
    i = s(531685),
    a = s(245853);
let c = (e, t) => {
    let s = r.useRef(!1),
        { enabled: c } = a.m8.useConfig({ location: t }),
        u = (0, l.bG)([i.A], () => i.A.isVisible());
    r.useEffect(() => {
        if (c)
            if (u) {
                if (s.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (s.current = !1);
                    } catch (e) {}
            } else s.current = !0;
    }, [c, u, e, s]);
};
