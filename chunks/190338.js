n.d(t, { m: () => C });
var a = n(627968),
    r = n(64700),
    l = n(465532),
    s = n(355622),
    o = n(133343),
    i = n(135621),
    c = n(31717),
    d = n(513480),
    _ = n(530912),
    u = n(294454),
    A = n(985018),
    E = n(745812);
function C(e) {
    let { message: t, canSend: n, selectedDestinations: C, onSend: h, inputValue: m, setInputValue: I } = e,
        N = (0, i.A)(),
        p = (0, d.QK)(C),
        f = (0, _.VF)(),
        { textValue: g, richValue: O } = m,
        [T, P] = r.useState(!1),
        b = r.useCallback(() => P(!0), []),
        R = r.useCallback(() => P(!1), []),
        S = r.useCallback(
            (e, n, a) => {
                I({ textValue: n, richValue: a }),
                    null != t && (l.A.saveDraft(t.channel_id, n, c.C.ForwardContextMessage), f(t.channel_id, t.id));
            },
            [f, t, I],
        ),
        L = r.useCallback(() => {
            null != t && (l.A.clearDraft(t.channel_id, c.C.ForwardContextMessage), h(g));
        }, [t, h, g]),
        y = r.useCallback(
            () => (!n || g.length > N || L(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [L, g, N, n],
        );
    return (0, a.jsx)(o.Ay, {
        innerClassName: E.OG,
        onChange: S,
        placeholder: A.intl.string(A.t.ZroO3G),
        channel: p,
        textValue: g,
        richValue: O,
        type: s.oU.FORWARD_MESSAGE_INPUT,
        onBlur: R,
        onFocus: b,
        focused: T,
        onSubmit: y,
        parentModalKey: u.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
