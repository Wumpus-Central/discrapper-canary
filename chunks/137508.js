r.d(t, {
    t: () => p,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    l = r(311907),
    o = r(465532),
    s = r(355622),
    c = r(408018),
    i = r(133343),
    u = r(31717),
    d = r(457417),
    f = r(985018),
    b = r(316582);
let p = () => {
    let { message: e, channel: t, updateMessageText: r } = (0, d.Vw)(),
        p = (0, l.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)),
        [g, y] = a.useState(() => (0, c.ur)(p)),
        { textValue: h, richValue: O } = g;
    (0, a.useEffect)(() => {
        r(h);
    }, [r, h]);
    let m = a.useCallback(
            (t, r, n) => {
                y({
                    textValue: r,
                    richValue: n,
                }),
                    o.A.saveDraft(e.channel_id, r, u.C.ChannelMessage);
            },
            [e],
        ),
        [j, w] = a.useState(!1),
        C = a.useCallback(() => w(!0), []),
        v = a.useCallback(() => w(!1), []);
    (0, a.useEffect)(
        () => () => {
            o.A.clearDraft(e.channel_id, u.C.ChannelMessage);
        },
        [e],
    );
    let P = async () => ({
        shouldClear: !0,
        shouldRefocus: !1,
    });
    return (0, n.jsx)(i.Ay, {
        innerClassName: b.O,
        onChange: m,
        placeholder: f.intl.string(f.t.ZroO3G),
        channel: t,
        textValue: h,
        richValue: O,
        type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: v,
        onFocus: C,
        focused: j,
        onSubmit: P,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
