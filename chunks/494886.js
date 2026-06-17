a.d(e, { default: () => l });
var c = a(627968);
a(64700);
var d = a(772707),
    s = a(975571),
    i = a(652215),
    n = a(41959),
    p = a(375708);
let l = (t) => {
    let { onClose: e, ...a } = t,
        l = [
            {
                text: p.intl.string(p.t.aRIFWD),
                onClick: () => {
                    e(), window.open(s.A.getArticleURL(i.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (0, c.jsx)(d.k, {
        ...a,
        title: p.intl.string(n.default.ublzTG),
        subtitle: p.intl.string(n.default.JgM2xu),
        graphic: {
            type: "video",
            src: "https://cdn.discordapp.com/assets/content/7846ed9988a35ad1652efd6d874dca6a1acc257ae4715195a70de5a2ee3a7fa3.webm",
            fallbackImageSrc:
                "https://cdn.discordapp.com/assets/content/28e5c22fa4c8fbc4d8d8930eb3024dd0e7f139300f567efbd3ce5fcdfb0fcf51.png",
            aspectRatio: "21/9",
            loop: !0,
        },
        onClose: e,
        size: "sm",
        actions: l,
    });
};
