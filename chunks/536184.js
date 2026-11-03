t.d(n, { A: () => l });
var s = t(76788);
let i = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
async function l(e) {
    return i || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
        ? Audio
        : s.A.OGVPlayer;
}
