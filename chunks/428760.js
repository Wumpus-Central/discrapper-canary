n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(730671),
    c = n(388032),
    u = n(554867);
function d(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: d, subtitleText: g, initialValue: m } = e,
        p = i.useMemo(() => (null != m ? m : []), [m]),
        { value: f, onChange: h, errorMessage: b } = (0, o.Z)(t, m, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(u.keywordsContainer, l),
                children: [
                    (0, r.jsx)(s.lcI, {
                        className: a()(u.keywordsTextArea, d),
                        value: f,
                        onChange: h,
                        placeholder: c.intl.string(c.t.UyaxJy),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: u.keywordsCounter,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: "".concat(p.length, " / ").concat(n),
                    }),
                ],
            }),
            null != b
                ? (0, r.jsx)(s.Text, {
                      className: a()(u.paddingTop, u.errorText),
                      variant: "text-xs/medium",
                      color: "text-feedback-critical",
                      children: b,
                  })
                : (0, r.jsx)(s.Text, {
                      className: u.paddingTop,
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: null != g ? g : c.intl.string(c.t.Gm6G5x),
                  }),
        ],
    });
}
