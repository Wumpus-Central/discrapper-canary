var r,
    i = t(998218);
t(652215);
var n = (((r = {}).YOUTUBE = "YouTube"), (r.TIKTOK = "TikTok"), (r.TWITCH = "Twitch"), r);
let s = {
    YouTube: {
        params: { autoplay: "1", auto_play: "1", pageType: "2" },
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
t.d(
    l,
    {},
    {
        PE: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        mt: n,
        x7: function (e, l, t) {
            let r = s[l],
                n = i.A.toURLSafe(e ?? "");
            if (null === n) return "";
            if (null == r) return n.toString();
            if (null != r.stripParams) for (let e of r.stripParams) n.searchParams.delete(e);
            if (null != r.params) for (let e in r.params) n.searchParams.set(e, r.params[e]);
            if (null != r.appendParams)
                for (let e in r.appendParams) for (let l of r.appendParams[e]) n.searchParams.append(e, l);
            if (null != r.dynamicParams) {
                let e = r.dynamicParams(t);
                for (let l in e) {
                    let t = e[l];
                    null != t && n.searchParams.set(l, t);
                }
            }
            return n.toString();
        },
    },
);
