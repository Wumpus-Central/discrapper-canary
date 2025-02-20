n.d(t, { S: () => c });
var r = n(200651);
n(192379);
var i = n(997638),
    l = n(113570),
    o = n(482641),
    a = n(613725);
let s = Object.freeze({
        'voice-conversations': {
            popoutPosition: 'right',
            highPriority: !0,
            textAlign: i.iu.CENTER,
            media: () => (0, r.jsx)(o.Z, {})
        },
        'writing-messages': {
            popoutPosition: 'top',
            highPriority: !0,
            textAlign: i.iu.CENTER,
            spacing: 10,
            media: () => (0, r.jsx)(a.Z, {})
        },
        'direct-messages': { popoutPosition: 'right' },
        'create-first-server': {
            popoutPosition: 'right',
            highPriority: !0
        },
        'organize-by-topic': {
            popoutPosition: 'right',
            textAlign: i.iu.CENTER,
            spacing: 8,
            media: () => (0, r.jsx)(l.Z, {})
        },
        'instant-invite': {
            popoutPosition: 'right',
            spacing: 24,
            highPriority: !0
        },
        'whos-online': {
            spacing: 16,
            popoutPosition: 'left'
        },
        'server-settings': {
            popoutPosition: 'bottom',
            spacing: 10
        },
        'friends-list': {
            spacing: 8,
            popoutPosition: 'right'
        },
        'create-more-servers': {
            spacing: 8,
            popoutPosition: 'right'
        }
    }),
    c = (e) => (e in s ? s[e] : null);
