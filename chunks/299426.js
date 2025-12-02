n.d(e, {
    j: () => a,
    u: () => u,
}),
    n(415506);
var i = n(54381),
    r = n(473749),
    l = n(460181);
let s = r.createContext(void 0);
function u(t) {
    let { children: e } = t,
        n = r.useRef(null),
        u = r.useCallback((t) => {
            null != n.current && n.current.stop(), (n.current = (0, l.GN)(t));
        }, []);
    r.useEffect(
        () => () => {
            var t;
            null == (t = n.current) || t.stop();
        },
        [],
    );
    let a = r.useMemo(() => ({ handlePreviewSound: u }), [u]);
    return (0, i.jsx)(s.Provider, {
        value: a,
        children: e,
    });
}
function a() {
    let t = r.useContext(s);
    if (null == t) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return t;
}
