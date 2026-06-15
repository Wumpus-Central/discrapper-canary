s.d(t, { A: () => u });
var r = s(64700),
    n = s(621466),
    i = s(17928),
    l = s(531685),
    a = s(192444);
let u = (e, t) => {
    let s = r.useRef(!1),
        { enabled: u } = a.m8.useConfig({ location: t }),
        o = (0, i.bG)([l.A], () => l.A.isVisible());
    r.useEffect(() => {
        if (u)
            if (o) {
                if (s.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (s.current = !1);
                    } catch (e) {}
            } else s.current = !0;
    }, [u, o, e, s]);
};
