"use strict";
n.d(t, { p: () => u });
var r = n(627968);
n(64700);
var i = n(234096),
    s = n(540604),
    a = n(369790),
    o = n(244083);
let l = Object.freeze({
        "voice-conversations": {
            popoutPosition: "right",
            highPriority: !0,
            textAlign: o.YL.CENTER,
            media: () => (0, r.jsx)(s.A, {}),
        },
        "writing-messages": {
            popoutPosition: "top",
            highPriority: !0,
            textAlign: o.YL.CENTER,
            spacing: 10,
            media: () => (0, r.jsx)(a.A, {}),
        },
        "direct-messages": { popoutPosition: "right" },
        "create-first-server": { popoutPosition: "right", highPriority: !0 },
        "organize-by-topic": {
            popoutPosition: "right",
            textAlign: o.YL.CENTER,
            spacing: 8,
            media: () => (0, r.jsx)(i.A, {}),
        },
        "instant-invite": { popoutPosition: "right", spacing: 24, highPriority: !0 },
        "whos-online": { spacing: 16, popoutPosition: "left" },
        "server-settings": { popoutPosition: "bottom", spacing: 10 },
        "friends-list": { spacing: 8, popoutPosition: "right" },
        "create-more-servers": { spacing: 8, popoutPosition: "right" },
    }),
    u = (e) => (e in l ? l[e] : null);
