t.d(l, { PE: () => n, mt: () => a, x7: () => u });
var r,
    i = t(998218),
    s = t(652215);
let n = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
var a = (((r = {}).YOUTUBE = "YouTube"), (r.TIKTOK = "TikTok"), (r.TWITCH = "Twitch"), r);
let o = {
    YouTube: {
        params: { autoplay: "1", auto_play: "1", pageType: s.NzX },
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
function u(e, l, t) {
    let r = o[l],
        s = i.A.toURLSafe(e ?? "");
    if (null === s) return "";
    if (null == r) return s.toString();
    if (null != r.stripParams) for (let e of r.stripParams) s.searchParams.delete(e);
    if (null != r.params) for (let e in r.params) s.searchParams.set(e, r.params[e]);
    if (null != r.appendParams)
        for (let e in r.appendParams) for (let l of r.appendParams[e]) s.searchParams.append(e, l);
    if (null != r.dynamicParams) {
        let e = r.dynamicParams(t);
        for (let l in e) {
            let t = e[l];
            null != t && s.searchParams.set(l, t);
        }
    }
    return s.toString();
}
