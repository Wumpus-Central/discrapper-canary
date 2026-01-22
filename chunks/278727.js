n.d(t, {
    q: () => r,
});
let r = Object.freeze({
    EMBED: (e, t, n) =>
        "https://embed.music.apple.com/"
            .concat(e, "?theme=")
            .concat(t, "&i=")
            .concat(null != n ? encodeURIComponent(n) : ""),
});
