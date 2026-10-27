r.d(t, { A: () => i });
var n = r(582128),
    l = r(621466),
    u = r(17928),
    s = r(531685);
let i = function (e) {
    let t = n.useRef(!1),
        r = (0, u.bG)([s.A], () => s.A.isVisible());
    n.useEffect(() => {
        if (r) {
            if (t.current && e?.current != null && (0, l.vq)(e.current, HTMLVideoElement))
                try {
                    (e.current.load(), (t.current = !1));
                } catch (e) {}
        } else t.current = !0;
    }, [r, e, t]);
};
