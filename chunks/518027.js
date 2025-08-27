n.d(t, { J: () => p }), n(388685);
var a = n(951288),
    o = n(647438),
    r = n(442837),
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
        p = (0, r.e7)([c.Z], () => c.Z.getDraft(e.channel_id, c.d.ChannelMessage)),
        [b, h] = o.useState(() => (0, i.eK)(p)),
        { textValue: g, richValue: m } = b;
    (0, o.useEffect)(() => {
        n(g);
    }, [n, g]);
    let C = o.useCallback(
            (t, n, a) => {
                h({
                    textValue: n,
                    richValue: a,
                }),
                    s.Z.saveDraft(e.channel_id, n, c.d.ChannelMessage);
            },
            [e],
        ),
        [y, w] = o.useState(!1),
        M = o.useCallback(() => w(!0), []),
        x = o.useCallback(() => w(!1), []),
        I = async () => ({
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
        onFocus: M,
        focused: y,
        onSubmit: I,
        parentModalKey: d.tj,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
