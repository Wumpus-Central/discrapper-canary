l.d(t, { e: () => o });
var n = l(627968),
    i = l(64700),
    a = l(292666),
    r = l(690521),
    s = l(985018);
let o = (e) => {
    let { name: t, onNameChange: l, label: o } = e,
        u = i.useRef(null),
        c = i.useRef(null),
        [d, h] = i.useState(!1),
        m = i.useCallback(
            (e) => {
                (c.current = u.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : r.Ay.sanitizeEmojiName(e)));
            },
            [l],
        );
    i.useEffect(() => {
        null != c.current && (u.current?.setSelectionRange(c.current, c.current), (c.current = null));
    });
    let g = i.useCallback(() => {
            h(!1);
        }, []),
        x = i.useCallback(() => {
            h(!0);
        }, []);
    return (0, n.jsx)(a.k, {
        inputRef: u,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: m,
        placeholder: s.intl.string(s.t.U2JFHZ),
        name: "emoji_name",
        onBlur: g,
        onFocus: x,
        label: o,
        clearable: !0,
        required: !0,
    });
};
