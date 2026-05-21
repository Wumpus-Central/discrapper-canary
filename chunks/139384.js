s.d(t, { A: () => u });
var r = s(64700),
    l = s(621466),
    n = s(17928),
    i = s(531685),
    a = s(192444);
let u = (e, t) => {
    let s = r.useRef(!1),
        { enabled: u } = a.m8.useConfig({ location: t }),
        o = (0, n.bG)([i.A], () => i.A.isVisible());
    r.useEffect(() => {
        if (u)
            if (o) {
                if (s.current && e?.current != null && (0, l.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (s.current = !1);
                    } catch (e) {}
            } else s.current = !0;
    }, [u, o, e, s]);
};
