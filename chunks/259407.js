"use strict";
n.d(t, { Ay: () => p, mt: () => h });
var i,
    r = n(627968),
    s = n(64700),
    a = n(998218),
    o = n(652215),
    l = n(472840);
let u = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
function c(e, t) {
    let n = a.A.toURLSafe(e ?? "");
    if (null === n) return "";
    if (null == t) return n.toString();
    for (let e in t) {
        let i = t[e];
        null != i && n.searchParams.set(e, i);
    }
    return n.toString();
}
function d(e) {
    let { src: t, autoMute: n, ...i } = e,
        a = s.useRef(null),
        o = s.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (n && a.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    a.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [n],
        );
    s.useEffect(() => (window.addEventListener("message", o), () => window.removeEventListener("message", o)), [o]);
    let l = c(t, { utm_source: "discord.gg" });
    return (0, r.jsx)(f, { src: l, ref: a, ...i });
}
function _(e) {
    let { src: t, autoMute: n, ...i } = e,
        s = c(t, { autoplay: "1", auto_play: "1", mute: n ? "1" : void 0, pageType: o.NzX });
    return (0, r.jsx)(f, { src: s, ...i });
}
let f = s.forwardRef(function (e, t) {
    let { allowFullScreen: n, ...i } = e,
        s = n ? `${u} allow-fullscreen` : u;
    return (0, r.jsx)("iframe", {
        ref: t,
        className: l.Qu,
        allow: n ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: s,
        allowFullScreen: n,
        ...i,
    });
});
var h = (((i = {}).YOUTUBE = "YouTube"), (i.TIKTOK = "TikTok"), i);
function p(e) {
    switch (e.provider) {
        case "YouTube":
            return (0, r.jsx)(_, { ...e });
        case "TikTok":
            return (0, r.jsx)(d, { ...e });
        default:
            return (0, r.jsx)(f, { ...e });
    }
}
