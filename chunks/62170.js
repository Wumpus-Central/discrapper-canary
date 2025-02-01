n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(623113);
let s = r.forwardRef(function (e, t) {
    let { muted: n, volume: s, playing: o, ...l } = e,
        [u, c] = (0, a.Z)(t);
    return (
        r.useEffect(() => {
            let e = u.current;
            null != e && void 0 !== n && (e.muted = n);
        }, [u, n]),
        r.useEffect(() => {
            let e = u.current;
            null != e && void 0 !== s && (e.volume = s);
        }, [u, s]),
        r.useEffect(() => {
            let e = u.current;
            null != e && void 0 !== o && (o ? e.play() : e.pause());
        }, [u, o]),
        (0, i.jsx)('audio', {
            ref: c,
            ...l
        })
    );
});
