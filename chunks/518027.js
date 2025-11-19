n.d(t, { J: () => p }), n(388685);
var r = n(54381),
    a = n(473749),
    o = n(442837),
    l = n(430742),
    s = n(541716),
    i = n(752305),
    c = n(893718),
    u = n(703558),
    d = n(135102),
    f = n(388032),
    b = n(337269);
let p = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, d.C$)(),
        p = (0, o.e7)([u.Z], () => u.Z.getDraft(e.channel_id, u.d.ChannelMessage)),
        [g, h] = a.useState(() => (0, i.eK)(p)),
        { textValue: _, richValue: m } = g;
    (0, a.useEffect)(() => {
        n(_);
    }, [n, _]);
    let y = a.useCallback(
            (t, n, r) => {
                h({
                    textValue: n,
                    richValue: r,
                }),
                    l.Z.saveDraft(e.channel_id, n, u.d.ChannelMessage);
            },
            [e],
        ),
        [O, C] = a.useState(!1),
        j = a.useCallback(() => C(!0), []),
        w = a.useCallback(() => C(!1), []);
    (0, a.useEffect)(
        () => () => {
            l.Z.clearDraft(e.channel_id, u.d.ChannelMessage);
        },
        [e],
    );
    let v = async () => ({
        shouldClear: !0,
        shouldRefocus: !1,
    });
    return (0, r.jsx)(c.ZP, {
        innerClassName: b.messageInput,
        onChange: y,
        placeholder: f.intl.string(f.t.ZroO3G),
        channel: t,
        textValue: _,
        richValue: m,
        type: s.Ie.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: w,
        onFocus: j,
        focused: O,
        onSubmit: v,
        parentModalKey: d.tj,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
