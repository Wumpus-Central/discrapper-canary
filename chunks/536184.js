var l = t(76788);
let s = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
t.d(
    n,
    {},
    {
        A: async function (e) {
            return s || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
                ? Audio
                : l.A.OGVPlayer;
        },
    },
);
