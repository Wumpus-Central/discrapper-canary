e.d(r, { X$: () => o, pT: () => a, qb: () => u });
var n = e(477900),
    i = e(582128);
let u = i.createContext(null);
function o() {
    let t = i.useContext(u);
    if (null == t) throw Error("useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider");
    return t;
}
function a(t) {
    let {
            children: r,
            activeLayer: e,
            isFullscreen: o,
            isActive: a,
            isControlBarExpanded: s,
            controlBarConfig: d,
            videoRef: l,
        } = t,
        c = i.useMemo(
            () => ({
                activeLayer: e,
                isFullscreen: o,
                isActive: a,
                isControlBarExpanded: s,
                controlBarConfig: d,
                videoRef: l,
            }),
            [e, o, a, s, d, l],
        );
    return (0, n.jsx)(u.Provider, { value: c, children: r });
}
