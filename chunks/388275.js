n.d(t, { _: () => f }), n(388685);
var l = n(951288),
    a = n(647438),
    r = n(430742),
    i = n(541716),
    s = n(893718),
    o = n(849522),
    c = n(703558),
    u = n(784384),
    d = n(822869),
    h = n(912332),
    m = n(388032),
    g = n(773921);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: w, inputValue: p, setInputValue: b } = e,
        _ = (0, o.Z)(),
        v = (0, u.nm)(f),
        x = (0, d.Ad)(),
        { textValue: y, richValue: P } = p,
        [C, O] = a.useState(!1),
        j = a.useCallback(() => O(!0), []),
        S = a.useCallback(() => O(!1), []),
        Z = a.useCallback(
            (e, n, l) => {
                b({
                    textValue: n,
                    richValue: l,
                }),
                    r.Z.saveDraft(t.channel_id, n, c.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t, b],
        ),
        I = a.useCallback(() => {
            r.Z.clearDraft(t.channel_id, c.d.ForwardContextMessage), w(y);
        }, [t.channel_id, w, y]),
        R = a.useCallback(
            () => (
                !n || y.length > _ || I(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [I, y, _, n],
        );
    return (0, l.jsx)(s.ZP, {
        innerClassName: g.messageInput,
        onChange: Z,
        placeholder: m.intl.string(m.t.ZroO3N),
        channel: v,
        textValue: y,
        richValue: P,
        type: i.Ie.FORWARD_MESSAGE_INPUT,
        onBlur: S,
        onFocus: j,
        focused: C,
        onSubmit: R,
        parentModalKey: h.so,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
