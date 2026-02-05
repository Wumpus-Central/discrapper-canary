"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700),
    a = n(511347);
let s = i.forwardRef(function (e, t) {
    let { muted: n, volume: s, playing: o, playbackRate: l, ...u } = e,
        [c, d] = (0, a.A)(t);
    return (
        i.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== n && (e.muted = n));
        }, [c, n]),
        i.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== s && (e.volume = s));
        }, [c, s]),
        i.useEffect(() => {
            let e = c.current;
            null == e || (null != l && (e.playbackRate = l));
        }, [c, l]),
        i.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== o && (o ? e.play() : e.pause()));
        }, [c, o]),
        (0, r.jsx)("audio", { ref: d, ...u })
    );
});
