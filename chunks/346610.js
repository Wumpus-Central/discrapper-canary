n.d(t, {
    WT: () => u,
    yk: () => d
});
var r = n(818083);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
let a = (0, r.B)({
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
    s = (0, r.B)({
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
    l = (0, r.B)({
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
    c = (0, r.B)({
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
function u(e, t) {
    let n = a.getCurrentConfig(e, t),
        r = s.getCurrentConfig(e, t);
    return o({}, n, r, l.getCurrentConfig(e, t), c.getCurrentConfig(e, t));
}
function d(e, t) {
    let n = a.useExperiment(e, t),
        r = s.useExperiment(e, t);
    return o({}, n, r, l.useExperiment(e, t), c.useExperiment(e, t));
}
