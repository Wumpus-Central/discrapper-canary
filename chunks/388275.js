n.d(t, { n: () => y }), n(388685);
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
    let { message: t, forwardOptions: n, sendLabel: y, canSend: E, selectedDestinations: I, isSending: S, onSend: O } = e,
        C = (0, d.Z)(),
        v = (0, p.nm)(I),
        x = (0, p.y)(I),
        A = (0, h.Ad)(),
        N = (0, l.e7)([m.Z], () => m.Z.getDraft(t.channel_id, m.d.ForwardContextMessage)),
        [T, P] = r.useState(() => (0, c.eK)(N)),
        { textValue: L, richValue: j } = T,
        [w, Z] = r.useState(!1),
        D = r.useCallback(() => Z(!0), []),
        M = r.useCallback(() => Z(!1), []),
        k = r.useCallback(
            (e, n, a) => {
                P({
                    textValue: n,
                    richValue: a
                }),
                    s.Z.saveDraft(t.channel_id, n, m.d.ForwardContextMessage),
                    A(t.channel_id, t.id);
            },
            [A, t]
        ),
        R = r.useCallback(() => {
            s.Z.clearDraft(t.channel_id, m.d.ForwardContextMessage), O(L);
        }, [t.channel_id, O, L]),
        F = r.useCallback(
            () => (
                !E || L.length > C || R(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [R, L, C, E]
        );
    return (0, a.jsxs)(i.mzw, {
        className: b.footerWithMessage,
        children: [
            (0, a.jsx)('div', {
                className: b.forwardPreviewWrapper,
                children: (0, a.jsx)(_.O, {
                    message: t,
                    forwardOptions: n,
                    channel: v
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
                                onChange: k,
                                placeholder: f.NW.string(f.t.ZroO3N),
                                channel: v,
                                textValue: L,
                                richValue: j,
                                type: o.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: M,
                                onFocus: D,
                                focused: w,
                                onSubmit: F,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, a.jsx)(i.zxk, {
                                className: b.sendWithMessage,
                                submitting: S,
                                disabled: !E || L.length > C,
                                onClick: R,
                                children: y
                            })
                        ]
                    }),
                    x.length > 0 &&
                        L.length > 0 &&
                        (0, a.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: f.NW.format(f.t.xJFpio, {
                                count: x.length,
                                channelNames: x.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
