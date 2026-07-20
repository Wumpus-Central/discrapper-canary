"use strict";
n.d(t, { X$: () => s, pT: () => l });
var i = n(627968),
    r = n(64700);
let a = r.createContext(null);
function s() {
    let e = r.useContext(a);
    if (null == e) throw Error("useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider");
    return e;
}
function l(e) {
    let { children: t, activeLayer: n, isFullscreen: s, videoRef: l } = e,
        o = r.useMemo(() => ({ activeLayer: n, isFullscreen: s, videoRef: l }), [n, s, l]);
    return (0, i.jsx)(a.Provider, { value: o, children: t });
}
