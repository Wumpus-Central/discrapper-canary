n.d(t, { W: () => s });
var a = n(473749),
    r = n(22382),
    i = n(747071),
    l = n(469121);
function s(e) {
    let { isPlaying: t, playSound: n, preloadSound: s } = (0, l.Z)(null != e ? (0, r.Z)(e.soundId) : null);
    return (
        a.useEffect(() => {
            null != e && s();
        }, [e, s]),
        {
            isPlaying: t,
            playSound: a.useCallback(() => {
                var t;
                return !!n({ volume: (0, i.Z)(null != (t = null == e ? void 0 : e.volume) ? t : 1) });
            }, [n, null == e ? void 0 : e.volume]),
        }
    );
}
