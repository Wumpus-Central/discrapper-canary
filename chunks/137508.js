a.d(t, { t: () => A });
var i = a(627968),
    r = a(64700),
    l = a(311907),
    n = a(465532),
    s = a(355622),
    o = a(408018),
    c = a(133343),
    d = a(31717),
    _ = a(457417),
    u = a(985018),
    h = a(50631);
let A = () => {
    let { message: e, channel: t, updateMessageText: a } = (0, _.Vw)(),
        A = (0, l.bG)([d.A], () => d.A.getDraft(e.channel_id, d.C.ChannelMessage)),
        [p, g] = r.useState(() => (0, o.ur)(A)),
        { textValue: E, richValue: I } = p;
    (0, r.useEffect)(() => {
        a(E);
    }, [a, E]);
    let f = r.useCallback(
            (t, a, i) => {
                g({ textValue: a, richValue: i }), n.A.saveDraft(e.channel_id, a, d.C.ChannelMessage);
            },
            [e],
        ),
        [m, C] = r.useState(!1),
        b = r.useCallback(() => C(!0), []),
        T = r.useCallback(() => C(!1), []);
    (0, r.useEffect)(
        () => () => {
            n.A.clearDraft(e.channel_id, d.C.ChannelMessage);
        },
        [e],
    );
    let v = async () => ({ shouldClear: !0, shouldRefocus: !1 });
    return (0, i.jsx)(c.Ay, {
        innerClassName: h.O,
        onChange: f,
        placeholder: u.intl.string(u.t.ZroO3G),
        channel: t,
        textValue: E,
        richValue: I,
        type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: T,
        onFocus: b,
        focused: m,
        onSubmit: v,
        parentModalKey: _.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
