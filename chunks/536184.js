n.d(t, { A: () => l });
var i = n(76788);
let s = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
async function l(e) {
    return s || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
        ? Audio
        : i.A.OGVPlayer;
}
