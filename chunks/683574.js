"use strict";
n.d(t, { X$: () => s, pT: () => l });
var i = n(477900),
    r = n(582128);
let a = r.createContext(null);
function s() {
    let e = r.useContext(a);
    if (null == e) throw Error("useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider");
    return e;
}
function l(e) {
    let { children: t, activeLayer: n, isFullscreen: s, isActive: l, isControlBarExpanded: o, videoRef: d } = e,
        c = r.useMemo(
            () => ({ activeLayer: n, isFullscreen: s, isActive: l, isControlBarExpanded: o, videoRef: d }),
            [n, s, l, o, d],
        );
    return (0, i.jsx)(a.Provider, { value: c, children: t });
}
