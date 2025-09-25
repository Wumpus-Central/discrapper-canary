n.d(t, { _: () => f }), n(388685);
var a = n(951288),
    l = n(647438),
    r = n(430742),
    i = n(541716),
    s = n(893718),
    o = n(849522),
    c = n(703558),
    u = n(784384),
    d = n(822869),
    h = n(912332),
    m = n(388032),
    g = n(132358);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: _, inputValue: p, setInputValue: b } = e,
        w = (0, o.Z)(),
        v = (0, u.nm)(f),
        x = (0, d.Ad)(),
        { textValue: y, richValue: P } = p,
        [C, j] = l.useState(!1),
        O = l.useCallback(() => j(!0), []),
        I = l.useCallback(() => j(!1), []),
        S = l.useCallback(
            (e, n, a) => {
                b({
                    textValue: n,
                    richValue: a,
                }),
                    r.Z.saveDraft(t.channel_id, n, c.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t, b],
        ),
        Z = l.useCallback(() => {
            r.Z.clearDraft(t.channel_id, c.d.ForwardContextMessage), _(y);
        }, [t.channel_id, _, y]),
        R = l.useCallback(
            () => (
                !n || y.length > w || Z(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [Z, y, w, n],
        );
    return (0, a.jsx)(s.ZP, {
        innerClassName: g.messageInput,
        onChange: S,
        placeholder: m.intl.string(m.t.ZroO3N),
        channel: v,
        textValue: y,
        richValue: P,
        type: i.Ie.FORWARD_MESSAGE_INPUT,
        onBlur: I,
        onFocus: O,
        focused: C,
        onSubmit: R,
        parentModalKey: h.so,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
