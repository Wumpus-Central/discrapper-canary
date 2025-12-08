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
    g = n(773921);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: p, inputValue: v, setInputValue: w } = e,
        b = (0, o.Z)(),
        x = (0, c.nm)(f),
        C = (0, d.Ad)(),
        { textValue: y, richValue: O } = v,
        [j, T] = a.useState(!1),
        _ = a.useCallback(() => T(!0), []),
        E = a.useCallback(() => T(!1), []),
        P = a.useCallback(
            (e, n, l) => {
                w({
                    textValue: n,
                    richValue: l,
                }),
                    null != t && (r.Z.saveDraft(t.channel_id, n, u.d.ForwardContextMessage), C(t.channel_id, t.id));
            },
            [C, t, w],
        ),
        S = a.useCallback(() => {
            null != t && (r.Z.clearDraft(t.channel_id, u.d.ForwardContextMessage), p(y));
        }, [t, p, y]),
        D = a.useCallback(
            () => (
                !n || y.length > b || S(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [S, y, b, n],
        );
    return (0, l.jsx)(s.ZP, {
        innerClassName: g.messageInput,
        onChange: P,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: x,
        textValue: y,
        richValue: O,
        type: i.Ie.FORWARD_MESSAGE_INPUT,
        onBlur: E,
        onFocus: _,
        focused: j,
        onSubmit: D,
        parentModalKey: h.so,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
