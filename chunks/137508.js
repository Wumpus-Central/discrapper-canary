a.d(t, { t: () => h });
var s = a(627968),
    n = a(64700),
    l = a(311907),
    r = a(465532),
    i = a(355622),
    _ = a(408018),
    A = a(133343),
    o = a(31717),
    u = a(457417),
    c = a(985018),
    d = a(785479);
let h = () => {
    let { message: e, channel: t, updateMessageText: a } = (0, u.Vw)(),
        h = (0, l.bG)([o.A], () => o.A.getDraft(e.channel_id, o.C.ChannelMessage)),
        [I, E] = n.useState(() => (0, _.ur)(h)),
        { textValue: C, richValue: L } = I;
    (0, n.useEffect)(() => {
        a(C);
    }, [a, C]);
    let N = n.useCallback(
            (t, a, s) => {
                E({ textValue: a, richValue: s }), r.A.saveDraft(e.channel_id, a, o.C.ChannelMessage);
            },
            [e],
        ),
        [b, f] = n.useState(!1),
        g = n.useCallback(() => f(!0), []),
        P = n.useCallback(() => f(!1), []);
    (0, n.useEffect)(
        () => () => {
            r.A.clearDraft(e.channel_id, o.C.ChannelMessage);
        },
        [e],
    );
    let p = async () => ({ shouldClear: !0, shouldRefocus: !1 });
    return (0, s.jsx)(A.Ay, {
        innerClassName: d.O,
        onChange: N,
        placeholder: c.intl.string(c.t.ZroO3G),
        channel: t,
        textValue: C,
        richValue: L,
        type: i.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: P,
        onFocus: g,
        focused: b,
        onSubmit: p,
        parentModalKey: u.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
