n.d(t, { n: () => y }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(442837),
    i = n(481060),
    s = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    m = n(703558),
    p = n(784384),
    h = n(822869),
    g = n(912332),
    _ = n(646746),
    f = n(388032),
    b = n(691176);
function y(e) {
    let { message: t, forwardOptions: n, sendLabel: y, canSend: E, selectedDestinations: I, isSending: S, onSend: C, showPreview: O } = e,
        v = (0, d.Z)(),
        x = (0, p.nm)(I),
        A = (0, p.y)(I),
        N = (0, h.Ad)(),
        T = (0, l.e7)([m.Z], () => m.Z.getDraft(t.channel_id, m.d.ForwardContextMessage)),
        [P, L] = r.useState(() => (0, c.eK)(T)),
        { textValue: j, richValue: w } = P,
        [Z, D] = r.useState(!1),
        k = r.useCallback(() => D(!0), []),
        M = r.useCallback(() => D(!1), []),
        R = r.useCallback(
            (e, n, a) => {
                L({
                    textValue: n,
                    richValue: a
                }),
                    s.Z.saveDraft(t.channel_id, n, m.d.ForwardContextMessage),
                    N(t.channel_id, t.id);
            },
            [N, t]
        ),
        F = r.useCallback(() => {
            s.Z.clearDraft(t.channel_id, m.d.ForwardContextMessage), C(j);
        }, [t.channel_id, C, j]),
        W = r.useCallback(
            () => (
                !E || j.length > v || F(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [F, j, v, E]
        );
    return (0, a.jsxs)(i.mzw, {
        className: b.footerWithMessage,
        children: [
            O &&
                (0, a.jsx)('div', {
                    className: b.forwardPreviewWrapper,
                    children: (0, a.jsx)(_.O, {
                        message: t,
                        forwardOptions: n,
                        channel: x
                    })
                }),
            (0, a.jsxs)('div', {
                className: b.footerWarningWrapper,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.footerButtons,
                        children: [
                            (0, a.jsx)(u.Z, {
                                innerClassName: b.messageInput,
                                onChange: R,
                                placeholder: f.NW.string(f.t.ZroO3N),
                                channel: x,
                                textValue: j,
                                richValue: w,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: M,
                                onFocus: k,
                                focused: Z,
                                onSubmit: W,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, a.jsx)(i.zxk, {
                                className: b.sendWithMessage,
                                submitting: S,
                                disabled: !E || j.length > v,
                                onClick: F,
                                children: y
                            })
                        ]
                    }),
                    A.length > 0 &&
                        j.length > 0 &&
                        (0, a.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: f.NW.format(f.t.xJFpio, {
                                count: A.length,
                                channelNames: A.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
