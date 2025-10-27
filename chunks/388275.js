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
    g = n(773921);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: _, inputValue: w, setInputValue: p } = e,
        b = (0, o.Z)(),
        v = (0, u.nm)(f),
        x = (0, d.Ad)(),
        { textValue: y, richValue: C } = w,
        [O, P] = l.useState(!1),
        S = l.useCallback(() => P(!0), []),
        j = l.useCallback(() => P(!1), []),
        E = l.useCallback(
            (e, n, a) => {
                p({
                    textValue: n,
                    richValue: a,
                }),
                    r.Z.saveDraft(t.channel_id, n, c.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t, p],
        ),
        T = l.useCallback(() => {
            r.Z.clearDraft(t.channel_id, c.d.ForwardContextMessage), _(y);
        }, [t.channel_id, _, y]),
        I = l.useCallback(
            () => (
                !n || y.length > b || T(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [T, y, b, n],
        );
    return (0, a.jsx)(s.ZP, {
        innerClassName: g.messageInput,
        onChange: E,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: v,
        textValue: y,
        richValue: C,
        type: i.Ie.FORWARD_MESSAGE_INPUT,
        onBlur: j,
        onFocus: S,
        focused: O,
        onSubmit: I,
        parentModalKey: h.so,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
