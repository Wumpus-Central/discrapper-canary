n.d(t, { n: () => E }), n(388685);
var l = n(200651),
    r = n(192379),
    a = n(442837),
    i = n(481060),
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
    b = n(691176);
function E(e) {
    let { message: t, forwardOptions: n, sendLabel: E, canSend: y, selectedDestinations: I, isSending: S, onSend: A } = e,
        O = (0, d.Z)(),
        N = (0, h.nm)(I),
        v = (0, h.y)(I),
        x = (0, _.Ad)(),
        C = (0, a.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)),
        [P, L] = r.useState(() => (0, c.eK)(C)),
        { textValue: T, richValue: j } = P,
        [Z, w] = r.useState(!1),
        D = r.useCallback(() => w(!0), []),
        R = r.useCallback(() => w(!1), []),
        k = r.useCallback(
            (e, n, l) => {
                L({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t]
        ),
        F = r.useCallback(() => {
            s.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), A(T);
        }, [t.channel_id, A, T]),
        M = r.useCallback(
            () => (
                !y || T.length > O || F(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [F, T, O, y]
        );
    return (0, l.jsxs)(i.mzw, {
        className: b.footerWithMessage,
        children: [
            (0, l.jsx)('div', {
                className: b.forwardPreviewWrapper,
                children: (0, l.jsx)(m.O, {
                    message: t,
                    forwardOptions: n,
                    channel: N
                })
            }),
            (0, l.jsxs)('div', {
                className: b.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: b.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: b.messageInput,
                                onChange: k,
                                placeholder: p.NW.string(p.t.ZroO3N),
                                channel: N,
                                textValue: T,
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
                            (0, l.jsx)(i.zxk, {
                                className: b.sendWithMessage,
                                submitting: S,
                                disabled: !y || T.length > O,
                                onClick: F,
                                children: E
                            })
                        ]
                    }),
                    v.length > 0 &&
                        T.length > 0 &&
                        (0, l.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: p.NW.format(p.t.xJFpio, {
                                count: v.length,
                                channelNames: v.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
