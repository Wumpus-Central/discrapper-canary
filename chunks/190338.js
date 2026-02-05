n.d(t, { m: () => f });
var l = n(627968),
    a = n(64700),
    s = n(465532),
    i = n(355622),
    r = n(133343),
    o = n(135621),
    u = n(31717),
    c = n(513480),
    d = n(530912),
    h = n(294454),
    m = n(985018),
    g = n(967789);
function f(e) {
    let { message: t, canSend: n, selectedDestinations: f, onSend: x, inputValue: p, setInputValue: C } = e,
        A = (0, o.A)(),
        b = (0, c.QK)(f),
        v = (0, d.VF)(),
        { textValue: w, richValue: T } = p,
        [j, k] = a.useState(!1),
        y = a.useCallback(() => k(!0), []),
        R = a.useCallback(() => k(!1), []),
        S = a.useCallback(
            (e, n, l) => {
                C({ textValue: n, richValue: l }),
                    null != t && (s.A.saveDraft(t.channel_id, n, u.C.ForwardContextMessage), v(t.channel_id, t.id));
            },
            [v, t, C],
        ),
        M = a.useCallback(() => {
            null != t && (s.A.clearDraft(t.channel_id, u.C.ForwardContextMessage), x(w));
        }, [t, x, w]),
        N = a.useCallback(
            () => (!n || w.length > A || M(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [M, w, A, n],
        );
    return (0, l.jsx)(r.Ay, {
        innerClassName: g.OG,
        onChange: S,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: b,
        textValue: w,
        richValue: T,
        type: i.oU.FORWARD_MESSAGE_INPUT,
        onBlur: R,
        onFocus: y,
        focused: j,
        onSubmit: N,
        parentModalKey: h.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
