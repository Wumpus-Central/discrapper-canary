var s = t(76788);
let i = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
t.d(
    n,
    {},
    {
        A: async function (e) {
            return i || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
                ? Audio
                : s.A.OGVPlayer;
        },
    },
);
