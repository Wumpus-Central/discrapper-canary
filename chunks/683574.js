n.d(t, { X$: () => i, pT: () => s });
var r = n(477900),
    l = n(582128);
let a = l.createContext(null);
function i() {
    let e = l.useContext(a);
    if (null == e) throw Error("useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider");
    return e;
}
function s(e) {
    let { children: t, activeLayer: n, isFullscreen: i, isActive: s, isControlBarExpanded: u, videoRef: o } = e,
        c = l.useMemo(
            () => ({ activeLayer: n, isFullscreen: i, isActive: s, isControlBarExpanded: u, videoRef: o }),
            [n, i, s, u, o],
        );
    return (0, r.jsx)(a.Provider, { value: c, children: t });
}
