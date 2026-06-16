"use strict";
n.d(t, { A: () => s });
var i = n(627968),
    r = n(64700);
let s = r.forwardRef(function (e, t) {
    let n,
        s,
        { muted: a, volume: o, playing: l, playbackRate: u, ...c } = e,
        [d, _] =
            ((n = r.useRef(null)),
            (s = r.useCallback(
                (e) => {
                    null != t && ("function" == typeof t ? t(e) : (t.current = e), (n.current = e));
                },
                [t],
            )),
            [n, s]);
    return (
        r.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== a && (e.muted = a));
        }, [d, a]),
        r.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== o && (e.volume = o));
        }, [d, o]),
        r.useEffect(() => {
            let e = d.current;
            null == e || (null != u && (e.playbackRate = u));
        }, [d, u]),
        r.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== l && (l ? e.play() : e.pause()));
        }, [d, l]),
        (0, i.jsx)("audio", { ref: _, ...c })
    );
});
