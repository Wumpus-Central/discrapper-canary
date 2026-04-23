n.d(t, { A: () => l });
var i = n(64700),
    r = n(621466),
    a = n(17928),
    s = n(531685),
    _ = n(245853);
let l = (e, t) => {
    let n = i.useRef(!1),
        { enabled: l } = _.m8.useConfig({ location: t }),
        o = (0, a.bG)([s.A], () => s.A.isVisible());
    i.useEffect(() => {
        if (l)
            if (o) {
                if (n.current && e?.current != null && (0, r.vq)(e.current, HTMLVideoElement))
                    try {
                        e.current.load(), (n.current = !1);
                    } catch (e) {}
            } else n.current = !0;
    }, [l, o, e, n]);
};
