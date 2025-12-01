n.d(e, {
    j: () => a,
    u: () => s,
}),
    n(415506);
var i = n(54381),
    r = n(473749),
    l = n(460181);
let u = r.createContext(void 0);
function s(t) {
    let { children: e } = t,
        n = r.useRef(null),
        s = r.useCallback((t) => {
            null != n.current && n.current.stop(), (n.current = (0, l.GN)(t));
        }, []);
    r.useEffect(
        () => () => {
            var t;
            null == (t = n.current) || t.stop();
        },
        [],
    );
    let a = r.useMemo(() => ({ handlePreviewSound: s }), [s]);
    return (0, i.jsx)(u.Provider, {
        value: a,
        children: e,
    });
}
function a() {
    let t = r.useContext(u);
    if (null == t) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return t;
}
