n.d(t, { n: () => I }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    _ = n(703558),
    h = n(784384),
    f = n(822869),
    g = n(912332),
    m = n(646746),
    E = n(388032),
    p = n(190417);
function I(e) {
    let { message: t, forwardOptions: n, sendLabel: I, canSend: A, selectedDestinations: S, isSending: C, onSend: x, showPreview: b } = e,
        L = (0, d.Z)(),
        v = (0, h.nm)(S),
        N = (0, h.y)(S),
        T = (0, f.Ad)(),
        y = (0, a.e7)([_.Z], () => _.Z.getDraft(t.channel_id, _.d.ForwardContextMessage)),
        [P, Z] = i.useState(() => (0, c.eK)(y)),
        { textValue: w, richValue: R } = P,
        [O, k] = i.useState(!1),
        D = i.useCallback(() => k(!0), []),
        j = i.useCallback(() => k(!1), []),
        F = i.useCallback(
            (e, n, l) => {
                Z({
                    textValue: n,
                    richValue: l
                }),
                    r.Z.saveDraft(t.channel_id, n, _.d.ForwardContextMessage),
                    T(t.channel_id, t.id);
            },
            [T, t]
        ),
        M = i.useCallback(() => {
            r.Z.clearDraft(t.channel_id, _.d.ForwardContextMessage), x(w);
        }, [t.channel_id, x, w]),
        G = i.useCallback(
            () => (
                !A || w.length > L || M(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [M, w, L, A]
        );
    return (0, l.jsxs)(s.mzw, {
        className: p.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: p.forwardPreviewWrapper,
                    children: (0, l.jsx)(m.O, {
                        message: t,
                        forwardOptions: n,
                        channel: v
                    })
                }),
            (0, l.jsxs)('div', {
                className: p.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: p.messageInput,
                                onChange: F,
                                placeholder: E.intl.string(E.t.ZroO3N),
                                channel: v,
                                textValue: w,
                                richValue: R,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: j,
                                onFocus: D,
                                focused: O,
                                onSubmit: G,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(s.zxk, {
                                className: p.sendWithMessage,
                                submitting: C,
                                disabled: !A || w.length > L,
                                onClick: M,
                                children: I
                            })
                        ]
                    }),
                    N.length > 0 &&
                        w.length > 0 &&
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: E.intl.format(E.t.xJFpio, {
                                count: N.length,
                                channelNames: N.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
