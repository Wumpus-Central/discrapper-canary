n.d(t, { n: () => x }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(442837),
    s = n(755721),
    i = n(481060),
    o = n(430742),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    h = n(849522),
    f = n(703558),
    m = n(784384),
    g = n(822869),
    p = n(912332),
    b = n(646746),
    _ = n(388032),
    v = n(773921);
function x(e) {
    let {
            message: t,
            forwardOptions: n,
            sendLabel: x,
            canSend: y,
            selectedDestinations: w,
            isSending: j,
            onSend: O,
        } = e,
        P = (0, h.Z)(),
        S = (0, m.nm)(w),
        E = (0, m.y)(w),
        C = (0, g.Ad)(),
        Z = (0, a.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)),
        [N, L] = r.useState(() => (0, c.eK)(Z)),
        { textValue: M, richValue: T } = N,
        [R, D] = r.useState(!1),
        I = r.useCallback(() => D(!0), []),
        A = r.useCallback(() => D(!1), []),
        k = r.useCallback(
            (e, n, l) => {
                L({
                    textValue: n,
                    richValue: l,
                }),
                    o.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage),
                    C(t.channel_id, t.id);
            },
            [C, t],
        ),
        F = r.useCallback(() => {
            o.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), O(M);
        }, [t.channel_id, O, M]),
        W = r.useCallback(
            () => (
                !y || M.length > P || F(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [F, M, P, y],
        );
    return (0, l.jsxs)(i.mzw, {
        className: v.footerWithMessage,
        children: [
            (0, l.jsx)("div", {
                className: v.forwardPreviewWrapper,
                children: (0, l.jsx)(b.O, {
                    message: t,
                    forwardOptions: n,
                    channel: S,
                }),
            }),
            (0, l.jsxs)("div", {
                className: v.footerWarningWrapper,
                children: [
                    (0, l.jsxs)("div", {
                        className: v.footerButtons,
                        children: [
                            (0, l.jsx)(d.ZP, {
                                innerClassName: v.messageInput,
                                onChange: k,
                                placeholder: _.intl.string(_.t.ZroO3N),
                                channel: S,
                                textValue: M,
                                richValue: T,
                                type: u.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: A,
                                onFocus: I,
                                focused: R,
                                onSubmit: W,
                                parentModalKey: p.so,
                                autoCompletePosition: "bottom",
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0,
                            }),
                            (0, l.jsx)(s.zx, {
                                className: v.sendWithMessage,
                                submitting: j,
                                disabled: !y || M.length > P,
                                onClick: F,
                                children: x,
                            }),
                        ],
                    }),
                    E.length > 0 &&
                        M.length > 0 &&
                        (0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: _.intl.format(_.t.xJFpio, {
                                count: E.length,
                                channelNames: E.join(", "),
                            }),
                        }),
                ],
            }),
        ],
    });
}
