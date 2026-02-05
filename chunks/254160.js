"use strict";
n.d(t, { f: () => s });
var r = n(887924);
let i = new (n(626584).A)("codedLinkQueue"),
    a = new r.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
function s(e) {
    a.add(e);
}
a.on("add", () => {
    a.size > 0 && i.warn("Message link fetch queue backlog:", a.size);
});
