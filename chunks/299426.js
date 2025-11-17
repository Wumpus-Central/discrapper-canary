n.d(e, {
    j: () => a,
    u: () => s,
}),
    n(415506);
var i = n(54381),
    l = n(473749),
    u = n(460181);
let r = l.createContext(void 0);
function s(t) {
    let { children: e } = t,
        n = l.useRef(null),
        s = l.useCallback((t) => {
            null != n.current && n.current.stop(), (n.current = (0, u.GN)(t));
        }, []);
    l.useEffect(
        () => () => {
            var t;
            null == (t = n.current) || t.stop();
        },
        [],
    );
    let a = l.useMemo(() => ({ handlePreviewSound: s }), [s]);
    return (0, i.jsx)(r.Provider, {
        value: a,
        children: e,
    });
}
function a() {
    let t = l.useContext(r);
    if (null == t) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return t;
}
