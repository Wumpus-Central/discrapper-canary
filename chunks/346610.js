r.d(n, {
    WT: function () {
        return u;
    },
    yk: function () {
        return c;
    }
});
var i = r(818083);
let a = (0, i.B)({
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
    o = (0, i.B)({
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
    l = (0, i.B)({
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
function u(e, n) {
    let r = a.getCurrentConfig(e, n),
        i = o.getCurrentConfig(e, n),
        u = s.getCurrentConfig(e, n),
        c = l.getCurrentConfig(e, n);
    return {
        ...r,
        ...i,
        ...u,
        ...c
    };
}
function c(e, n) {
    let r = a.useExperiment(e, n),
        i = o.useExperiment(e, n),
        u = s.useExperiment(e, n),
        c = l.useExperiment(e, n);
    return {
        ...r,
        ...i,
        ...u,
        ...c
    };
}
