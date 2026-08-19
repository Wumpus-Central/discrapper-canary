n.d(t, { A: () => x });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(305866),
    r = n(775602),
    o = n(355622),
    c = n(408018),
    d = n(273754),
    u = n(7584),
    h = n(446243),
    p = n(538638),
    m = n(662731),
    f = n(375708),
    A = n(696034);
function x(e) {
    let { channel: t, position: n, setEditorRef: x } = e,
        g = (0, a.bG)([r.Ay], () => r.Ay.keyboardModeEnabled),
        [C, y] = (0, l.useState)(""),
        [j, I] = (0, l.useState)(""),
        [v, N] = (0, l.useState)((0, c.x7)("")),
        [E, b] = (0, l.useState)(g),
        _ = (0, l.useRef)(!1);
    return (0, i.jsx)(s.l, {
        className: A.kL,
        children: (0, i.jsx)(d.Ay, {
            className: A.Kf,
            innerClassName: A.Kf,
            maxCharacterCount: 512,
            showRemainingCharsAfterCount: 10,
            onChange: function (e, t, n) {
                I(t), N(n), y(u.Ay.translateInlineEmojiToSurrogates(t));
            },
            placeholder: f.intl.string(m.default.IAcEEn),
            channel: t,
            textValue: j,
            richValue: v,
            type: o.oU.GUILD_ROOM,
            onFocus: () => {
                b(!0);
            },
            onBlur: () => {
                b(!1);
            },
            focused: E,
            onSubmit: function () {
                let e = t.guild_id;
                return 0 === C.trim().length || null == e
                    ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                    : _.current
                      ? Promise.resolve({ shouldClear: !1, shouldRefocus: !1 })
                      : ((_.current = !0),
                        (0, h.zK)(e, t.id, C, n).catch((e) => (0, p.b)()),
                        Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
            },
            setEditorRef: x,
            disableThemedBackground: !0,
            showValueWhenDisabled: !0,
        }),
    });
}
