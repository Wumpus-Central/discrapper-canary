"use strict";
n.d(t, { A: () => s });
var i = n(76788);
let r = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
async function s(e) {
    return r || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
        ? Audio
        : i.A.OGVPlayer;
}
