t.d(l, { A: () => m, m: () => d });
var r,
    i = t(477900),
    s = t(582128),
    n = t(998218),
    a = t(652215),
    o = t(411517);
let u = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
var d = (((r = {}).YOUTUBE = "YouTube"), (r.TIKTOK = "TikTok"), (r.TWITCH = "Twitch"), r);
let h = {
    YouTube: {
        params: { autoplay: "1", auto_play: "1", pageType: a.NzX },
        dynamicParams: (e) => {
            let { autoMute: l } = e;
            return { mute: l ? "1" : void 0 };
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
            let { autoMute: l } = e;
            return { muted: l ? "true" : void 0 };
        },
    },
};
function c(e) {
    let { allowFullScreen: l, ref: t, ...r } = e,
        s = l ? `${u} allow-fullscreen` : u;
    return (0, i.jsx)("iframe", {
        ref: t,
        className: o.Qu,
        allow: l ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: s,
        allowFullScreen: l,
        ...r,
    });
}
function m(e) {
    var l;
    let t,
        { provider: r, src: a, autoMute: o, ...u } = e,
        d = h[r],
        m = s.useRef(null);
    ((l = "TikTok" === r),
        (t = s.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (o && m.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    m.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [o, m],
        )),
        s.useEffect(() => {
            if (l) return (window.addEventListener("message", t), () => window.removeEventListener("message", t));
        }, [l, t]));
    let p = (function (e, l, t) {
        let r = n.A.toURLSafe(e ?? "");
        if (null === r) return "";
        if (null == l) return r.toString();
        if (null != l.stripParams) for (let e of l.stripParams) r.searchParams.delete(e);
        if (null != l.params) for (let e in l.params) r.searchParams.set(e, l.params[e]);
        if (null != l.appendParams)
            for (let e in l.appendParams) for (let t of l.appendParams[e]) r.searchParams.append(e, t);
        if (null != l.dynamicParams) {
            let e = l.dynamicParams(t);
            for (let l in e) {
                let t = e[l];
                null != t && r.searchParams.set(l, t);
            }
        }
        return r.toString();
    })(a, d, { autoMute: o });
    return (0, i.jsx)(c, { ref: m, src: p, ...u });
}
