n.d(t, { A: () => i });
var r = n(76788);
async function i(e) {
    return "Safari" !== platform.name ||
        "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
        ? Audio
        : r.A.OGVPlayer;
}
