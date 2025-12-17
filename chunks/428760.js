n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(730671),
    c = n(388032),
    d = n(773655);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: g, initialValue: f } = e,
        m = i.useMemo(() => (null != f ? f : []), [f]),
        { value: b, onChange: p, errorMessage: h } = (0, o.Z)(t, f, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(d.keywordsContainer, l),
                children: [
                    (0, r.jsx)(s.lcI, {
                        className: a()(d.keywordsTextArea, u),
                        value: b,
                        onChange: p,
                        placeholder: c.intl.string(c.t.UyaxJy),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: d.keywordsCounter,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: "".concat(m.length, " / ").concat(n),
                    }),
                ],
            }),
            null != h
                ? (0, r.jsx)(s.Text, {
                      className: a()(d.paddingTop, d.errorText),
                      variant: "text-xs/medium",
                      color: "text-feedback-critical",
                      children: h,
                  })
                : (0, r.jsx)(s.Text, {
                      className: d.paddingTop,
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: null != g ? g : c.intl.string(c.t.Gm6G5x),
                  }),
        ],
    });
}
