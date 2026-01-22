n.d(t, { m: () => g }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(465532),
    i = n(355622),
    s = n(133343),
    o = n(135621),
    u = n(31717),
    c = n(513480),
    d = n(530912),
    h = n(294454),
    m = n(985018),
    f = n(967789);
function g(e) {
    let { message: t, canSend: n, selectedDestinations: g, onSend: p, inputValue: b, setInputValue: x } = e,
        y = (0, o.A)(),
        v = (0, c.QK)(g),
        C = (0, d.VF)(),
        { textValue: j, richValue: w } = b,
        [O, A] = r.useState(!1),
        S = r.useCallback(() => A(!0), []),
        T = r.useCallback(() => A(!1), []),
        P = r.useCallback(
            (e, n, l) => {
                x({
                    textValue: n,
                    richValue: l,
                }),
                    null != t && (a.A.saveDraft(t.channel_id, n, u.C.ForwardContextMessage), C(t.channel_id, t.id));
            },
            [C, t, x],
        ),
        k = r.useCallback(() => {
            null != t && (a.A.clearDraft(t.channel_id, u.C.ForwardContextMessage), p(j));
        }, [t, p, j]),
        R = r.useCallback(
            () => (
                !n || j.length > y || k(),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [k, j, y, n],
        );
    return (0, l.jsx)(s.Ay, {
        innerClassName: f.OG,
        onChange: P,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: v,
        textValue: j,
        richValue: w,
        type: i.oU.FORWARD_MESSAGE_INPUT,
        onBlur: T,
        onFocus: S,
        focused: O,
        onSubmit: R,
        parentModalKey: h.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
