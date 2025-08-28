n.d(t, { J: () => p }), n(388685);
var a = n(951288),
    r = n(647438),
    o = n(442837),
    s = n(430742),
    l = n(541716),
    i = n(752305),
    u = n(893718),
    c = n(703558),
    d = n(135102),
    _ = n(388032),
    f = n(784562);
let p = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, d.C$)(),
        p = (0, o.e7)([c.Z], () => c.Z.getDraft(e.channel_id, c.d.ChannelMessage)),
        [h, b] = r.useState(() => (0, i.eK)(p)),
        { textValue: g, richValue: m } = h;
    (0, r.useEffect)(() => {
        n(g);
    }, [n, g]);
    let C = r.useCallback(
            (t, n, a) => {
                b({
                    textValue: n,
                    richValue: a,
                }),
                    s.Z.saveDraft(e.channel_id, n, c.d.ChannelMessage);
            },
            [e],
        ),
        [y, M] = r.useState(!1),
        w = r.useCallback(() => M(!0), []),
        x = r.useCallback(() => M(!1), []);
    (0, r.useEffect)(
        () => () => {
            s.Z.clearDraft(e.channel_id, c.d.ChannelMessage);
        },
        [e],
    );
    let I = async () => ({
        shouldClear: !0,
        shouldRefocus: !1,
    });
    return (0, a.jsx)(u.ZP, {
        innerClassName: f.messageInput,
        onChange: C,
        placeholder: _.intl.string(_.t.ZroO3N),
        channel: t,
        textValue: g,
        richValue: m,
        type: l.Ie.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: x,
        onFocus: w,
        focused: y,
        onSubmit: I,
        parentModalKey: d.tj,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
