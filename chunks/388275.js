n.d(t, { n: () => I }), n(47120);
var a = n(200651),
    l = n(192379),
    i = n(442837),
    s = n(481060),
    r = n(430742),
    o = n(541716),
    c = n(752305),
    d = n(893718),
    u = n(849522),
    m = n(703558),
    _ = n(784384),
    h = n(822869),
    g = n(912332),
    p = n(646746),
    f = n(388032),
    E = n(121059);
function I(e) {
    let { message: t, forwardOptions: n, sendLabel: I, canSend: C, selectedDestinations: x, isSending: A, onSend: S, showPreview: T } = e,
        v = (0, u.Z)(),
        b = (0, _.nm)(x),
        L = (0, _.y)(x),
        y = (0, h.Ad)(),
        N = (0, i.e7)([m.Z], () => m.Z.getDraft(t.channel_id, m.d.ForwardContextMessage)),
        [P, Z] = l.useState(() => (0, c.eK)(N)),
        { textValue: M, richValue: w } = P,
        [D, R] = l.useState(!1),
        O = l.useCallback(() => R(!0), []),
        j = l.useCallback(() => R(!1), []),
        k = l.useCallback(
            (e, n, a) => {
                Z({
                    textValue: n,
                    richValue: a
                }),
                    r.Z.saveDraft(t.channel_id, n, m.d.ForwardContextMessage),
                    y(t.channel_id, t.id);
            },
            [y, t]
        ),
        F = l.useCallback(() => {
            r.Z.clearDraft(t.channel_id, m.d.ForwardContextMessage), S(M);
        }, [t.channel_id, S, M]),
        G = l.useCallback(
            () => (
                !C || M.length > v || F(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [F, M, v, C]
        );
    return (0, a.jsxs)(s.mzw, {
        className: E.footerWithMessage,
        children: [
            T &&
                (0, a.jsx)('div', {
                    className: E.forwardPreviewWrapper,
                    children: (0, a.jsx)(p.O, {
                        message: t,
                        forwardOptions: n,
                        channel: b
                    })
                }),
            (0, a.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, a.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, a.jsx)(d.Z, {
                                innerClassName: E.messageInput,
                                onChange: k,
                                placeholder: f.intl.string(f.t.ZroO3N),
                                channel: b,
                                textValue: M,
                                richValue: w,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: j,
                                onFocus: O,
                                focused: D,
                                onSubmit: G,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, a.jsx)(s.zxk, {
                                className: E.sendWithMessage,
                                submitting: A,
                                disabled: !C || M.length > v,
                                onClick: F,
                                children: I
                            })
                        ]
                    }),
                    L.length > 0 &&
                        M.length > 0 &&
                        (0, a.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: f.intl.format(f.t.xJFpio, {
                                count: L.length,
                                channelNames: L.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
