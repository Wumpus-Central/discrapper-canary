"use strict";
n.d(t, { A: () => a });
var i = n(477900),
    r = n(582128);
let a = r.forwardRef(function (e, t) {
    let n,
        a,
        { muted: s, volume: l, playing: o, playbackRate: d, ...c } = e,
        [u, _] =
            ((n = r.useRef(null)),
            (a = r.useCallback(
                (e) => {
                    null != t && ("function" == typeof t ? t(e) : (t.current = e), (n.current = e));
                },
                [t],
            )),
            [n, a]);
    return (
        r.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== s && (e.muted = s));
        }, [u, s]),
        r.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== l && (e.volume = l));
        }, [u, l]),
        r.useEffect(() => {
            let e = u.current;
            null == e || (null != d && (e.playbackRate = d));
        }, [u, d]),
        r.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== o && (o ? e.play() : e.pause()));
        }, [u, o]),
        (0, i.jsx)("audio", { ref: _, ...c })
    );
});
