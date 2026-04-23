"use strict";
n.d(t, { f: () => a });
var r = n(887924);
let i = new (n(626584).A)("codedLinkQueue"),
    s = new r.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
function a(e) {
    s.add(e);
}
s.on("add", () => {
    s.size > 0 && i.warn("Message link fetch queue backlog:", s.size);
});
