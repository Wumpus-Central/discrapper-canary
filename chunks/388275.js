n.d(t, { n: () => y }), n(388685);
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
    E = n(388032),
    b = n(773921);
function y(e) {
    let {
            message: t,
            forwardOptions: n,
            sendLabel: y,
            canSend: I,
            selectedDestinations: S,
            isSending: A,
            onSend: O,
        } = e,
        v = (0, f.Z)(),
        C = (0, _.nm)(S),
        x = (0, _.y)(S),
        P = (0, g.Ad)(),
        N = (0, i.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [T, L] = r.useState(() => (0, u.eK)(N)),
        { textValue: j, richValue: Z } = T,
        [w, D] = r.useState(!1),
        R = r.useCallback(() => D(!0), []),
        F = r.useCallback(() => D(!1), []),
        k = r.useCallback(
            (e, n, l) => {
                L({
                    textValue: n,
                    richValue: l,
                }),
                    o.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    P(t.channel_id, t.id);
            },
            [P, t],
        ),
        G = r.useCallback(() => {
            o.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), O(j);
        }, [t.channel_id, O, j]),
        M = r.useCallback(
            () => (
                !I || j.length > v || G(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [G, j, v, I],
        );
    return (0, l.jsxs)(s.mzw, {
        className: b.footerWithMessage,
        children: [
            (0, l.jsx)("div", {
                className: b.forwardPreviewWrapper,
                children: (0, l.jsx)(p.O, {
                    message: t,
                    forwardOptions: n,
                    channel: C,
                }),
            }),
            (0, l.jsxs)("div", {
                className: b.footerWarningWrapper,
                children: [
                    (0, l.jsxs)("div", {
                        className: b.footerButtons,
                        children: [
                            (0, l.jsx)(d.ZP, {
                                innerClassName: b.messageInput,
                                onChange: k,
                                placeholder: E.intl.string(E.t.ZroO3N),
                                channel: C,
                                textValue: j,
                                richValue: Z,
                                type: c.Ie.FORWARD_MESSAGE_INPUT,
                                onBlur: F,
                                onFocus: R,
                                focused: w,
                                onSubmit: M,
                                parentModalKey: m.so,
                                autoCompletePosition: "bottom",
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0,
                            }),
                            (0, l.jsx)(a.zx, {
                                className: b.sendWithMessage,
                                submitting: A,
                                disabled: !I || j.length > v,
                                onClick: G,
                                children: y,
                            }),
                        ],
                    }),
                    x.length > 0 &&
                        j.length > 0 &&
                        (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: E.intl.format(E.t.xJFpio, {
                                count: x.length,
                                channelNames: x.join(", "),
                            }),
                        }),
                ],
            }),
        ],
    });
}
