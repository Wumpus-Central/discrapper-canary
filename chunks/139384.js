r.d(t, { A: () => a });
var s = r(582128),
    n = r(621466),
    i = r(17928),
    l = r(531685);
let a = function (e) {
    let t = s.useRef(!1),
        r = (0, i.bG)([l.A], () => l.A.isVisible());
    s.useEffect(() => {
        if (r) {
            if (t.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
                try {
                    (e.current.load(), (t.current = !1));
                } catch (e) {}
        } else t.current = !0;
    }, [r, e, t]);
};
