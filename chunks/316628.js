n.d(t, { e: () => u }), n(896048), n(747238), n(812715);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(690521),
    s = n(985018);
let u = (e) => {
    let { name: t, onNameChange: n, label: u } = e,
        o = r.useRef(null),
        c = r.useRef(null),
        [d, m] = r.useState(!1),
        h = r.useCallback(
            (e) => {
                var t;
                (c.current = null == (t = o.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.Ay.sanitizeEmojiName(e)));
            },
            [n],
        );
    r.useEffect(() => {
        if (null != c.current) {
            var e;
            null == (e = o.current) || e.setSelectionRange(c.current, c.current), (c.current = null);
        }
    });
    let g = r.useCallback(() => {
            m(!1);
        }, []),
        f = r.useCallback(() => {
            m(!0);
        }, []);
    return (0, l.jsx)(i.ksK, {
        inputRef: o,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: s.intl.string(s.t.U2JFHZ),
        name: "emoji_name",
        onBlur: g,
        onFocus: f,
        label: u,
        clearable: !0,
        required: !0,
    });
};
