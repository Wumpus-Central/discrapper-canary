(r.r(t), r.d(t, { default: () => d }));
var u = r(477900),
    n = r(582128),
    s = r(76788);
function d(e) {
    let {
            className: t,
            src: r,
            playing: d,
            preload: a = "",
            onEnded: l,
            onLoadedMetadata: f,
            onError: i,
            muted: c,
            volume: o,
            playbackRate: v,
            ref: E,
        } = e,
        p = n.useRef(null),
        [m] = n.useState(() => {
            let e = new s.A.OGVPlayer();
            return ((e.preload = a), (e.controls = !1), e);
        });
    return (
        n.useImperativeHandle(E, () => m, [m]),
        n.useEffect(() => {
            let e = p.current;
            if (null != m && null != e)
                return (
                    e.appendChild(m),
                    () => {
                        e.removeChild(m);
                    }
                );
        }, [m]),
        n.useEffect(() => {
            m.src = r;
        }, [m, r]),
        n.useEffect(() => {
            m.preload = a;
        }, [m, a]),
        n.useEffect(() => {
            void 0 !== d &&
                (d
                    ? setTimeout(() => {
                          m.play();
                      }, 0)
                    : setTimeout(() => {
                          m.pause();
                      }, 0));
        }, [r, m, d]),
        n.useEffect(() => {
            void 0 !== c && (m.muted = c);
        }, [m, c]),
        n.useEffect(() => {
            void 0 !== o && (m.volume = o);
        }, [m, o]),
        n.useEffect(() => {
            null != v && (m.playbackRate = v);
        }, [m, v]),
        n.useEffect(() => {
            if (null != l)
                return (
                    m.addEventListener("ended", l),
                    () => {
                        m.removeEventListener("ended", l);
                    }
                );
        }, [m, l]),
        n.useEffect(() => {
            if (null != f)
                return (
                    m.addEventListener("loadedmetadata", f),
                    () => {
                        m.removeEventListener("loadedmetadata", f);
                    }
                );
        }, [m, f]),
        n.useEffect(() => {
            if (null != i)
                return (
                    m.addEventListener("error", i),
                    () => {
                        m.removeEventListener("error", i);
                    }
                );
        }, [m, i]),
        (0, u.jsx)("div", { ref: p, className: t })
    );
}
