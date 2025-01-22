n.d(t, {
    n: function () {
        return p;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(703558),
    f = n(784384),
    _ = n(822869),
    g = n(912332),
    m = n(646746),
    E = n(388032),
    I = n(190417);
function p(e) {
    let { message: t, forwardOptions: n, sendLabel: p, canSend: S, selectedDestinations: A, isSending: C, onSend: v, showPreview: L } = e,
        b = (0, d.Z)(),
        N = (0, f.nm)(A),
        T = (0, f.y)(A),
        x = (0, _.Ad)(),
        y = (0, a.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [P, Z] = i.useState(() => (0, c.eK)(y)),
        { textValue: O, richValue: w } = P,
        [R, D] = i.useState(!1),
        M = i.useCallback(() => D(!0), []),
        j = i.useCallback(() => D(!1), []),
        k = i.useCallback(
            (e, n, l) => {
                Z({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t]
        ),
        F = i.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(O);
        }, [t.channel_id, v, O]),
        G = i.useCallback(
            () =>
                !S || O.length > b
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (F(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [F, O, b, S]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: I.footerWithMessage,
        children: [
            L &&
                (0, l.jsx)('div', {
                    className: I.forwardPreviewWrapper,
                    children: (0, l.jsx)(m.O, {
                        message: t,
                        forwardOptions: n,
                        channel: N
                    })
                }),
            (0, l.jsxs)('div', {
                className: I.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: I.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: I.messageInput,
                                onChange: k,
                                placeholder: E.intl.string(E.t.ZroO3N),
                                channel: N,
                                textValue: O,
                                richValue: w,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: j,
                                onFocus: M,
                                focused: R,
                                onSubmit: G,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(r.Button, {
                                className: I.sendWithMessage,
                                submitting: C,
                                disabled: !S || O.length > b,
                                onClick: F,
                                children: p
                            })
                        ]
                    }),
                    T.length > 0 &&
                        O.length > 0 &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: E.intl.format(E.t.xJFpio, {
                                count: T.length,
                                channelNames: T.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
