n.d(t, { J: () => p }), n(388685);
var r = n(54381),
    a = n(473749),
    o = n(442837),
    l = n(430742),
    c = n(541716),
    s = n(752305),
    i = n(893718),
    u = n(703558),
    d = n(135102),
    b = n(388032),
    f = n(31877);
let p = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, d.C$)(),
        p = (0, o.e7)([u.Z], () => u.Z.getDraft(e.channel_id, u.d.ChannelMessage)),
        [g, h] = a.useState(() => (0, s.eK)(p)),
        { textValue: m, richValue: y } = g;
    (0, a.useEffect)(() => {
        n(m);
    }, [n, m]);
    let O = a.useCallback(
            (t, n, r) => {
                h({
                    textValue: n,
                    richValue: r,
                }),
                    l.Z.saveDraft(e.channel_id, n, u.d.ChannelMessage);
            },
            [e],
        ),
        [C, j] = a.useState(!1),
        _ = a.useCallback(() => j(!0), []),
        w = a.useCallback(() => j(!1), []);
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
    return (0, r.jsx)(i.ZP, {
        innerClassName: f.messageInput,
        onChange: O,
        placeholder: b.intl.string(b.t.ZroO3G),
        channel: t,
        textValue: m,
        richValue: y,
        type: c.Ie.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: w,
        onFocus: _,
        focused: C,
        onSubmit: v,
        parentModalKey: d.tj,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
