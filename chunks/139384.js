s.d(t, { A: () => a });
var r = s(582128),
    n = s(621466),
    i = s(17928),
    l = s(531685);
let a = function (e) {
    let t = r.useRef(!1),
        s = (0, i.bG)([l.A], () => l.A.isVisible());
    r.useEffect(() => {
        if (s) {
            if (t.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
                try {
                    e.current.load(), (t.current = !1);
                } catch (e) {}
        } else t.current = !0;
    }, [s, e, t]);
};
