n.d(t, { W: () => s });
var r = n(73800),
    a = n(22382),
    l = n(747071),
    i = n(469121);
function s(e) {
    let { isPlaying: t, playSound: n, preloadSound: s } = (0, i.Z)(null != e ? (0, a.Z)(e.soundId) : null);
    return (
        r.useEffect(() => {
            null != e && s();
        }, [e, s]),
        {
            isPlaying: t,
            playSound: r.useCallback(() => {
                var t;
                return !!n({ volume: (0, l.Z)(null != (t = null == e ? void 0 : e.volume) ? t : 1) });
            }, [n, null == e ? void 0 : e.volume])
        }
    );
}
