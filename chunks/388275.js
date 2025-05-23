n.d(t, { n: () => b }), n(388685);
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(481060),
    s = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    f = n(703558),
    h = n(784384),
    _ = n(822869),
    g = n(912332),
    m = n(646746),
    p = n(388032),
    E = n(691176);
function b(e) {
    let { message: t, forwardOptions: n, sendLabel: b, canSend: y, selectedDestinations: I, isSending: S, onSend: O } = e,
        A = (0, d.Z)(),
        v = (0, h.nm)(I),
        C = (0, h.y)(I),
        x = (0, _.Ad)(),
        P = (0, i.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)),
        [L, T] = r.useState(() => (0, c.eK)(P)),
        { textValue: N, richValue: j } = L,
        [Z, w] = r.useState(!1),
        D = r.useCallback(() => w(!0), []),
        R = r.useCallback(() => w(!1), []),
        k = r.useCallback(
            (e, n, l) => {
                T({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t]
        ),
        F = r.useCallback(() => {
            s.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), O(N);
        }, [t.channel_id, O, N]),
        M = r.useCallback(
            () => (
                !y || N.length > A || F(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [F, N, A, y]
        );
    return (0, l.jsxs)(a.mzw, {
        className: E.footerWithMessage,
        children: [
            (0, l.jsx)('div', {
                className: E.forwardPreviewWrapper,
                children: (0, l.jsx)(m.O, {
                    message: t,
                    forwardOptions: n,
                    channel: v
                })
            }),
            (0, l.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: E.messageInput,
                                onChange: k,
                                placeholder: p.intl.string(p.t.ZroO3N),
                                channel: v,
                                textValue: N,
                                richValue: j,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: R,
                                onFocus: D,
                                focused: Z,
                                onSubmit: M,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(a.zxk, {
                                className: E.sendWithMessage,
                                submitting: S,
                                disabled: !y || N.length > A,
                                onClick: F,
                                children: b
                            })
                        ]
                    }),
                    C.length > 0 &&
                        N.length > 0 &&
                        (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: p.intl.format(p.t.xJFpio, {
                                count: C.length,
                                channelNames: C.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
