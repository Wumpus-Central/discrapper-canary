n.d(t, { S: () => c });
var i = n(951288);
n(647438);
var r = n(113570),
    l = n(482641),
    a = n(613725),
    o = n(350707);
let s = Object.freeze({
        "voice-conversations": {
            popoutPosition: "right",
            highPriority: !0,
            textAlign: o.iu.CENTER,
            media: () => (0, i.jsx)(l.Z, {}),
        },
        "writing-messages": {
            popoutPosition: "top",
            highPriority: !0,
            textAlign: o.iu.CENTER,
            spacing: 10,
            media: () => (0, i.jsx)(a.Z, {}),
        },
        "direct-messages": { popoutPosition: "right" },
        "create-first-server": {
            popoutPosition: "right",
            highPriority: !0,
        },
        "organize-by-topic": {
            popoutPosition: "right",
            textAlign: o.iu.CENTER,
            spacing: 8,
            media: () => (0, i.jsx)(r.Z, {}),
        },
        "instant-invite": {
            popoutPosition: "right",
            spacing: 24,
            highPriority: !0,
        },
        "whos-online": {
            spacing: 16,
            popoutPosition: "left",
        },
        "server-settings": {
            popoutPosition: "bottom",
            spacing: 10,
        },
        "friends-list": {
            spacing: 8,
            popoutPosition: "right",
        },
        "create-more-servers": {
            spacing: 8,
            popoutPosition: "right",
        },
    }),
    c = (e) => (e in s ? s[e] : null);
