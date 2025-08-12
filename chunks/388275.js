n.d(t, { n: () => v }), n(388685);
var l = n(255367),
    r = n(73800),
    a = n(442837),
    i = n(755721),
    s = n(481060),
    o = n(430742),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    h = n(849522),
    f = n(703558),
    m = n(784384),
    g = n(822869),
    _ = n(912332),
    p = n(646746),
    b = n(388032),
    y = n(790505);
function v(e) {
    let {
            message: t,
            forwardOptions: n,
            sendLabel: v,
            canSend: x,
            selectedDestinations: E,
            isSending: C,
            onSend: S,
        } = e,
        O = (0, h.Z)(),
        P = (0, m.nm)(E),
        w = (0, m.y)(E),
        Z = (0, g.Ad)(),
        N = (0, a.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)),
        [j, I] = r.useState(() => (0, u.eK)(N)),
        { textValue: T, richValue: L } = j,
        [R, A] = r.useState(!1),
        D = r.useCallback(() => A(!0), []),
        M = r.useCallback(() => A(!1), []),
        k = r.useCallback(
            (e, n, l) => {
                I({
                    textValue: n,
                    richValue: l,
                }),
                    o.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage),
                    Z(t.channel_id, t.id);
            },
            [Z, t],
        ),
        U = r.useCallback(() => {
            o.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), S(T);
        }, [t.channel_id, S, T]),
        W = r.useCallback(
            () => (
                !x || T.length > O || U(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [U, T, O, x],
        );
    return (0, l.jsxs)(s.mzw, {
        className: y.footerWithMessage,
        children: [
            (0, l.jsx)("div", {
                className: y.forwardPreviewWrapper,
                children: (0, l.jsx)(p.O, {
                    message: t,
                    forwardOptions: n,
                    channel: P,
                }),
            }),
            (0, l.jsxs)("div", {
                className: y.footerWarningWrapper,
                children: [
                    (0, l.jsxs)("div", {
                        className: y.footerButtons,
                        children: [
                            (0, l.jsx)(d.ZP, {
                                innerClassName: y.messageInput,
                                onChange: k,
                                placeholder: b.intl.string(b.t.ZroO3N),
                                channel: P,
                                textValue: T,
                                richValue: L,
                                type: c.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: M,
                                onFocus: D,
                                focused: R,
                                onSubmit: W,
                                parentModalKey: _.so,
                                autoCompletePosition: "bottom",
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0,
                            }),
                            (0, l.jsx)(i.zx, {
                                className: y.sendWithMessage,
                                submitting: C,
                                disabled: !x || T.length > O,
                                onClick: U,
                                children: v,
                            }),
                        ],
                    }),
                    w.length > 0 &&
                        T.length > 0 &&
                        (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: b.intl.format(b.t.xJFpio, {
                                count: w.length,
                                channelNames: w.join(", "),
                            }),
                        }),
                ],
            }),
        ],
    });
}
