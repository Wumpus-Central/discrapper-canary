n.d(t, { _: () => f }), n(388685);
var l = n(54381),
    a = n(473749),
    r = n(430742),
    i = n(541716),
    s = n(893718),
    o = n(849522),
    u = n(703558),
    c = n(784384),
    d = n(822869),
    h = n(912332),
    m = n(388032),
    g = n(614934);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: p, inputValue: v, setInputValue: x } = e,
        b = (0, o.Z)(),
        w = (0, c.nm)(f),
        j = (0, d.Ad)(),
        { textValue: C, richValue: y } = v,
        [P, O] = a.useState(!1),
        S = a.useCallback(() => O(!0), []),
        T = a.useCallback(() => O(!1), []),
        k = a.useCallback(
            (e, n, l) => {
                x({
                    textValue: n,
                    richValue: l,
                }),
                    null != t && (r.Z.saveDraft(t.channel_id, n, u.d.ForwardContextMessage), j(t.channel_id, t.id));
            },
            [j, t, x],
        ),
        Z = a.useCallback(() => {
            null != t && (r.Z.clearDraft(t.channel_id, u.d.ForwardContextMessage), p(C));
        }, [t, p, C]),
        D = a.useCallback(
            () => (
                !n || C.length > b || Z(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [Z, C, b, n],
        );
    return (0, l.jsx)(s.ZP, {
        innerClassName: g.messageInput,
        onChange: k,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: w,
        textValue: C,
        richValue: y,
        type: i.Ie.FORWARD_MESSAGE_INPUT,
        onBlur: T,
        onFocus: S,
        focused: P,
        onSubmit: D,
        parentModalKey: h.so,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
