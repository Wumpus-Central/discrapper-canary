n.d(e, {
    j: () => a,
    u: () => s,
}),
    n(415506);
var i = n(951288),
    l = n(647438),
    r = n(460181);
let u = l.createContext(void 0);
function s(t) {
    let { children: e } = t,
        n = l.useRef(null),
        s = l.useCallback((t) => {
            null != n.current && n.current.stop(), (n.current = (0, r.GN)(t));
        }, []);
    l.useEffect(
        () => () => {
            var t;
            null == (t = n.current) || t.stop();
        },
        [],
    );
    let a = l.useMemo(() => ({ handlePreviewSound: s }), [s]);
    return (0, i.jsx)(u.Provider, {
        value: a,
        children: e,
    });
}
function a() {
    let t = l.useContext(u);
    if (null == t) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return t;
}
