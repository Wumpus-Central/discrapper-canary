"use strict";
n.d(t, { A: () => s });
var l = n(76788);
let i = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
async function s(e) {
    return i || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
        ? Audio
        : l.A.OGVPlayer;
}
