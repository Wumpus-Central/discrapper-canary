(t.r(n), t.d(n, { default: () => l }));
var u = t(255367),
    r = t(73800);
function l(e) {
    let { src: n, loopAt: t, playbackRate: l } = e,
        a = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = a.current;
            if (null != e)
                return (
                    null != l && (e.playbackRate = l),
                    e.addEventListener('ended', n),
                    () => {
                        e.removeEventListener('ended', n);
                    }
                );
            function n() {
                null != e && ((e.currentTime = t), e.play());
            }
        }, [t, l]),
        (0, u.jsx)('video', {
            ref: a,
            src: n,
            autoPlay: !0,
            muted: !0,
            playsInline: !0
        })
    );
}
