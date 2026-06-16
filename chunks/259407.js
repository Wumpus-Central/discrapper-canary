"use strict";
n.d(t, { A: () => h, m: () => c });
var i,
    r = n(627968),
    s = n(64700),
    a = n(998218),
    o = n(652215),
    l = n(472840);
let u = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
var c = (((i = {}).YOUTUBE = "YouTube"), (i.TIKTOK = "TikTok"), (i.TWITCH = "Twitch"), i);
let d = {
        YouTube: {
            params: { autoplay: "1", auto_play: "1", pageType: o.NzX },
            dynamicParams: (e) => {
                let { autoMute: t } = e;
                return { mute: t ? "1" : void 0 };
            },
        },
        TikTok: { params: { utm_source: "discord.gg" } },
        Twitch: {
            stripParams: ["parent"],
            appendParams: {
                parent: [
                    "discord.co",
                    "discord.com",
                    "discordapp.com",
                    "ptb.discord.com",
                    "canary.discord.com",
                    "localhost",
                ],
            },
            params: { autoplay: "true" },
            dynamicParams: (e) => {
                let { autoMute: t } = e;
                return { muted: t ? "true" : void 0 };
            },
        },
    },
    _ = s.forwardRef(function (e, t) {
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
function h(e) {
    var t;
    let n,
        { provider: i, src: o, autoMute: l, ...u } = e,
        c = d[i],
        h = s.useRef(null);
    (t = "TikTok" === i),
        (n = s.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (l && h.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    h.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [l, h],
        )),
        s.useEffect(() => {
            if (t) return window.addEventListener("message", n), () => window.removeEventListener("message", n);
        }, [t, n]);
    let f = (function (e, t, n) {
        let i = a.A.toURLSafe(e ?? "");
        if (null === i) return "";
        if (null == t) return i.toString();
        if (null != t.stripParams) for (let e of t.stripParams) i.searchParams.delete(e);
        if (null != t.params) for (let e in t.params) i.searchParams.set(e, t.params[e]);
        if (null != t.appendParams)
            for (let e in t.appendParams) for (let n of t.appendParams[e]) i.searchParams.append(e, n);
        if (null != t.dynamicParams) {
            let e = t.dynamicParams(n);
            for (let t in e) {
                let n = e[t];
                null != n && i.searchParams.set(t, n);
            }
        }
        return i.toString();
    })(o, c, { autoMute: l });
    return (0, r.jsx)(_, { ref: h, src: f, ...u });
}
