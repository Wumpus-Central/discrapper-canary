t.d(l, { Ay: () => g, mt: () => p });
var r,
    s = t(627968),
    i = t(64700),
    n = t(998218),
    a = t(652215),
    o = t(472840);
let u = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
function d(e, l) {
    let t = n.A.toURLSafe(e ?? "");
    if (null === t) return "";
    if (null == l) return t.toString();
    for (let e in l) {
        let r = l[e];
        null != r && t.searchParams.set(e, r);
    }
    return t.toString();
}
function h(e) {
    let { src: l, autoMute: t, ...r } = e,
        n = i.useRef(null),
        a = i.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (t && n.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    n.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [t],
        );
    i.useEffect(() => (window.addEventListener("message", a), () => window.removeEventListener("message", a)), [a]);
    let o = d(l, { utm_source: "discord.gg" });
    return (0, s.jsx)(m, { src: o, ref: n, ...r });
}
function c(e) {
    let { src: l, autoMute: t, ...r } = e,
        i = d(l, { autoplay: "1", auto_play: "1", mute: t ? "1" : void 0, pageType: a.NzX });
    return (0, s.jsx)(m, { src: i, ...r });
}
let m = i.forwardRef(function (e, l) {
    let { allowFullScreen: t, ...r } = e,
        i = t ? `${u} allow-fullscreen` : u;
    return (0, s.jsx)("iframe", {
        ref: l,
        className: o.Qu,
        allow: t ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: i,
        allowFullScreen: t,
        ...r,
    });
});
var p = (((r = {}).YOUTUBE = "YouTube"), (r.TIKTOK = "TikTok"), r);
function g(e) {
    switch (e.provider) {
        case "YouTube":
            return (0, s.jsx)(c, { ...e });
        case "TikTok":
            return (0, s.jsx)(h, { ...e });
        default:
            return (0, s.jsx)(m, { ...e });
    }
}
