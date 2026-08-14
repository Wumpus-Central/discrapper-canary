n.d(t, { X$: () => i, pT: () => u });
var r = n(477900),
    l = n(582128);
let a = l.createContext(null);
function i() {
    let e = l.useContext(a);
    if (null == e) throw Error("useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider");
    return e;
}
function u(e) {
    let { children: t, activeLayer: n, isFullscreen: i, isActive: u, isControlBarExpanded: s, videoRef: o } = e,
        c = l.useMemo(
            () => ({ activeLayer: n, isFullscreen: i, isActive: u, isControlBarExpanded: s, videoRef: o }),
            [n, i, u, s, o],
        );
    return (0, r.jsx)(a.Provider, { value: c, children: t });
}
