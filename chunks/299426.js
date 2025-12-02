n.d(e, {
    j: () => a,
    u: () => u,
}),
    n(415506);
var i = n(54381),
    l = n(473749),
    s = n(460181);
let r = l.createContext(void 0);
function u(t) {
    let { children: e } = t,
        n = l.useRef(null),
        u = l.useCallback((t) => {
            null != n.current && n.current.stop(), (n.current = (0, s.GN)(t));
        }, []);
    l.useEffect(
        () => () => {
            var t;
            null == (t = n.current) || t.stop();
        },
        [],
    );
    let a = l.useMemo(() => ({ handlePreviewSound: u }), [u]);
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
