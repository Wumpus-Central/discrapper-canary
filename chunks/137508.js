n.d(t, { t: () => f });
var a = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(465532),
    o = n(355622),
    i = n(408018),
    c = n(133343),
    u = n(31717),
    d = n(457417),
    _ = n(985018),
    h = n(316582);
let f = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, d.Vw)(),
        f = (0, r.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)),
        [p, m] = l.useState(() => (0, i.ur)(f)),
        { textValue: g, richValue: C } = p;
    (0, l.useEffect)(() => {
        n(g);
    }, [n, g]);
    let b = l.useCallback(
            (t, n, a) => {
                m({ textValue: n, richValue: a }), s.A.saveDraft(e.channel_id, n, u.C.ChannelMessage);
            },
            [e],
        ),
        [k, A] = l.useState(!1),
        w = l.useCallback(() => A(!0), []),
        x = l.useCallback(() => A(!1), []);
    (0, l.useEffect)(
        () => () => {
            s.A.clearDraft(e.channel_id, u.C.ChannelMessage);
        },
        [e],
    );
    let E = async () => ({ shouldClear: !0, shouldRefocus: !1 });
    return (0, a.jsx)(c.Ay, {
        innerClassName: h.O,
        onChange: b,
        placeholder: _.intl.string(_.t.ZroO3G),
        channel: t,
        textValue: g,
        richValue: C,
        type: o.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: x,
        onFocus: w,
        focused: k,
        onSubmit: E,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
