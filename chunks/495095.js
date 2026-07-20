n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(305866),
    r = n(775602),
    o = n(355622),
    c = n(408018),
    d = n(138617),
    u = n(7584),
    p = n(446243),
    h = n(189090),
    m = n(375708),
    A = n(927066);
function x(e) {
    let { channel: t, position: n, setEditorRef: x } = e,
        f = (0, a.bG)([r.Ay], () => r.Ay.keyboardModeEnabled),
        [g, C] = (0, l.useState)(""),
        [y, j] = (0, l.useState)(""),
        [v, E] = (0, l.useState)((0, c.x7)("")),
        [N, I] = (0, l.useState)(f),
        T = (0, l.useRef)(!1);
    return (0, i.jsx)(s.l, {
        className: A.kL,
        children: (0, i.jsx)(d.Ay, {
            className: A.Kf,
            innerClassName: A.Kf,
            maxCharacterCount: 512,
            showRemainingCharsAfterCount: 10,
            onChange: function (e, t, n) {
                j(t), E(n), C(u.Ay.translateInlineEmojiToSurrogates(t));
            },
            placeholder: m.intl.string(h.default.IAcEEn),
            channel: t,
            textValue: y,
            richValue: v,
            type: o.oU.GUILD_ROOM,
            onFocus: () => {
                I(!0);
            },
            onBlur: () => {
                I(!1);
            },
            focused: N,
            onSubmit: () => {
                let e = t.guild_id;
                return 0 === g.trim().length || null == e
                    ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                    : T.current
                      ? Promise.resolve({ shouldClear: !1, shouldRefocus: !1 })
                      : ((T.current = !0),
                        (0, p.zK)(e, t.id, g, n),
                        Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
            },
            setEditorRef: x,
            disableThemedBackground: !0,
            showValueWhenDisabled: !0,
        }),
    });
}
