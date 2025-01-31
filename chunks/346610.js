n.d(t, {
    WT: () => l,
    yk: () => u
});
var i = n(818083);
let r = (0, i.B)({
        kind: 'user',
        id: '2024-05_message_forwarding',
        label: 'Message forwarding',
        defaultConfig: {
            canForwardMessages: !1,
            hasInlineForwardButton: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !1
                }
            },
            {
                id: 2,
                label: 'Enabled + inline forward button',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !0
                }
            }
        ]
    }),
    a = (0, i.B)({
        kind: 'user',
        id: '2024-07_message_forwarding_iterations',
        label: 'Message forwarding iterations',
        defaultConfig: {
            hasOneTapSendButton: !1,
            hasMessageInput: !1,
            hasPreview: !1
        },
        treatments: [
            {
                id: 1,
                label: 'T2 only (inline forward button)',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !0,
                    hasOneTapSendButton: !1,
                    hasMessageInput: !1,
                    hasPreview: !1
                }
            },
            {
                id: 2,
                label: 'T2 + One tap send + preview',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !0,
                    hasOneTapSendButton: !0,
                    hasMessageInput: !1,
                    hasPreview: !0
                }
            },
            {
                id: 3,
                label: 'T2 + Context message + preview',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !0,
                    hasOneTapSendButton: !1,
                    hasMessageInput: !0,
                    hasPreview: !0
                }
            }
        ]
    }),
    s = (0, i.B)({
        kind: 'user',
        id: '2024-08_message_forwarding_icon',
        label: 'Message forwarding icon change',
        defaultConfig: { useOldIcon: !1 },
        treatments: [
            {
                id: 1,
                label: 'Icon: upper right arrow',
                config: {
                    canForwardMessages: !0,
                    useOldIcon: !0
                }
            },
            {
                id: 2,
                label: 'Icon: chat bubble',
                config: {
                    canForwardMessages: !0,
                    useOldIcon: !1
                }
            }
        ]
    }),
    o = (0, i.B)({
        kind: 'user',
        id: '2024-09_message_forwarding_gtm',
        label: 'Message forwarding GTM',
        defaultConfig: {},
        treatments: [
            {
                id: 1,
                label: 'GTM',
                config: {
                    canForwardMessages: !0,
                    hasInlineForwardButton: !1,
                    hasOneTapSendButton: !1,
                    hasMessageInput: !0,
                    hasPreview: !0,
                    useOldIcon: !0
                }
            }
        ]
    });
function l(e, t) {
    let n = r.getCurrentConfig(e, t),
        i = a.getCurrentConfig(e, t),
        l = s.getCurrentConfig(e, t),
        u = o.getCurrentConfig(e, t);
    return {
        ...n,
        ...i,
        ...l,
        ...u
    };
}
function u(e, t) {
    let n = r.useExperiment(e, t),
        i = a.useExperiment(e, t),
        l = s.useExperiment(e, t),
        u = o.useExperiment(e, t);
    return {
        ...n,
        ...i,
        ...l,
        ...u
    };
}
