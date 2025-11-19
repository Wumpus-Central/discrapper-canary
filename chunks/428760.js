n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(730671),
    c = n(388032),
    d = n(554867);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: g, initialValue: m } = e,
        p = i.useMemo(() => (null != m ? m : []), [m]),
        { value: f, onChange: h, errorMessage: b } = (0, o.Z)(t, m, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(d.keywordsContainer, l),
                children: [
                    (0, r.jsx)(s.lcI, {
                        className: a()(d.keywordsTextArea, u),
                        value: f,
                        onChange: h,
                        placeholder: c.intl.string(c.t.UyaxJy),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: d.keywordsCounter,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: "".concat(p.length, " / ").concat(n),
                    }),
                ],
            }),
            null != b
                ? (0, r.jsx)(s.Text, {
                      className: a()(d.paddingTop, d.errorText),
                      variant: "text-xs/medium",
                      color: "text-danger",
                      children: b,
                  })
                : (0, r.jsx)(s.Text, {
                      className: d.paddingTop,
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: null != g ? g : c.intl.string(c.t.Gm6G5x),
                  }),
        ],
    });
}
