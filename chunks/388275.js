(n.d(t, { n: () => y }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(430742),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    f = n(849522),
    h = n(703558),
    _ = n(784384),
    g = n(822869),
    m = n(912332),
    p = n(646746),
    b = n(388032),
    E = n(691176);
function y(e) {
    let { message: t, forwardOptions: n, sendLabel: y, canSend: I, selectedDestinations: S, isSending: O, onSend: A } = e,
        v = (0, f.Z)(),
        C = (0, _.nm)(S),
        x = (0, _.y)(S),
        P = (0, g.Ad)(),
        T = (0, i.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [L, N] = r.useState(() => (0, u.eK)(T)),
        { textValue: j, richValue: Z } = L,
        [w, D] = r.useState(!1),
        R = r.useCallback(() => D(!0), []),
        k = r.useCallback(() => D(!1), []),
        F = r.useCallback(
            (e, n, l) => {
                (N({
                    textValue: n,
                    richValue: l
                }),
                    o.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    P(t.channel_id, t.id));
            },
            [P, t]
        ),
        G = r.useCallback(() => {
            (o.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), A(j));
        }, [t.channel_id, A, j]),
        M = r.useCallback(
            () => (
                !I || j.length > v || G(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [G, j, v, I]
        );
    return (0, l.jsxs)(s.mzw, {
        className: E.footerWithMessage,
        children: [
            (0, l.jsx)('div', {
                className: E.forwardPreviewWrapper,
                children: (0, l.jsx)(p.O, {
                    message: t,
                    forwardOptions: n,
                    channel: C
                })
            }),
            (0, l.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, l.jsx)(d.ZP, {
                                innerClassName: E.messageInput,
                                onChange: F,
                                placeholder: b.intl.string(b.t.ZroO3N),
                                channel: C,
                                textValue: j,
                                richValue: Z,
                                type: c.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: k,
                                onFocus: R,
                                focused: w,
                                onSubmit: M,
                                parentModalKey: m.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(a.zx, {
                                className: E.sendWithMessage,
                                submitting: O,
                                disabled: !I || j.length > v,
                                onClick: G,
                                children: y
                            })
                        ]
                    }),
                    x.length > 0 &&
                        j.length > 0 &&
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-feedback-warning',
                            children: b.intl.format(b.t.xJFpio, {
                                count: x.length,
                                channelNames: x.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
