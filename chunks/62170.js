var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(623113);
n.Z = o.forwardRef(function (e, n) {
    let { muted: r, volume: i, playing: l, ...u } = e,
        [c, d] = (0, s.Z)(n);
    return (
        o.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== r && (e.muted = r);
        }, [c, r]),
        o.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== i && (e.volume = i);
        }, [c, i]),
        o.useEffect(() => {
            let e = c.current;
            if (null != e) void 0 !== l && (l ? e.play() : e.pause());
        }, [c, l]),
        (0, a.jsx)('audio', {
            ref: d,
            ...u
        })
    );
});
