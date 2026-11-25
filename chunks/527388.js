s.d(t, { A: () => n });
var a = s(477900),
    i = s(582128);
function n(e) {
    let t,
        s,
        { muted: n, volume: l, playing: r, playbackRate: o, ref: u, ...h } = e,
        [d, c] =
            ((t = i.useRef(null)),
            (s = i.useCallback(
                (e) => {
                    null != u && ("function" == typeof u ? u(e) : (u.current = e), (t.current = e));
                },
                [u],
            )),
            [t, s]);
    return (
        i.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== n && (e.muted = n));
        }, [d, n]),
        i.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== l && (e.volume = l));
        }, [d, l]),
        i.useEffect(() => {
            let e = d.current;
            null == e || (null != o && (e.playbackRate = o));
        }, [d, o]),
        i.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== r && (r ? e.play() : e.pause()));
        }, [d, r]),
        (0, a.jsx)("audio", { ref: c, ...h })
    );
}
