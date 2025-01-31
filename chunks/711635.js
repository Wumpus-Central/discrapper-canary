r.r(t), r.d(t, { default: () => a }), r(47120);
var n = r(200651),
    u = r(192379),
    d = r(855095);
let s = window.GLOBAL_ENV.PUBLIC_PATH;
s.endsWith('/') && (s = s.substring(0, s.length - 1)), (d.OGVLoader.base = s);
let a = u.forwardRef(function (e, t) {
    let { className: r, src: s, playing: a, preload: l = '', onEnded: f, onLoadedMetadata: i, onError: o, muted: c, volume: v } = e,
        E = u.useRef(null),
        [p] = u.useState(() => {
            let e = new d.OGVPlayer();
            return (e.preload = l), (e.controls = !1), e;
        });
    return (
        u.useImperativeHandle(t, () => p, [p]),
        u.useEffect(() => {
            let e = E.current;
            if (null != p && null != e)
                return (
                    e.appendChild(p),
                    () => {
                        e.removeChild(p);
                    }
                );
        }, [p]),
        u.useEffect(() => {
            p.src = s;
        }, [p, s]),
        u.useEffect(() => {
            p.preload = l;
        }, [p, l]),
        u.useEffect(() => {
            void 0 !== a &&
                (a
                    ? setTimeout(() => {
                          p.play();
                      }, 0)
                    : setTimeout(() => {
                          p.pause();
                      }, 0));
        }, [s, p, a]),
        u.useEffect(() => {
            void 0 !== c && (p.muted = c);
        }, [p, c]),
        u.useEffect(() => {
            void 0 !== v && (p.volume = v);
        }, [p, v]),
        u.useEffect(() => {
            if (null != f)
                return (
                    p.addEventListener('ended', f),
                    () => {
                        p.removeEventListener('ended', f);
                    }
                );
        }, [p, f]),
        u.useEffect(() => {
            if (null != i)
                return (
                    p.addEventListener('loadedmetadata', i),
                    () => {
                        p.removeEventListener('loadedmetadata', i);
                    }
                );
        }, [p, i]),
        u.useEffect(() => {
            if (null != o)
                return (
                    p.addEventListener('error', o),
                    () => {
                        p.removeEventListener('error', o);
                    }
                );
        }, [p, o]),
        (0, n.jsx)('div', {
            ref: E,
            className: r
        })
    );
});
