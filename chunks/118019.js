"use strict";
n.d(t, { A: () => a });
var l = n(627968),
    i = n(64700),
    s = n(511347);
let a = i.forwardRef(function (e, t) {
    let { muted: n, volume: a, playing: r, playbackRate: o, ...c } = e,
        [u, d] = (0, s.A)(t);
    return (
        i.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== n && (e.muted = n));
        }, [u, n]),
        i.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== a && (e.volume = a));
        }, [u, a]),
        i.useEffect(() => {
            let e = u.current;
            null == e || (null != o && (e.playbackRate = o));
        }, [u, o]),
        i.useEffect(() => {
            let e = u.current;
            null == e || (void 0 !== r && (r ? e.play() : e.pause()));
        }, [u, r]),
        (0, l.jsx)("audio", { ref: d, ...c })
    );
});
