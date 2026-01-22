n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(727904),
    o = n(985018),
    d = n(973184);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: f, initialValue: g } = e,
        b = i.useMemo(() => (null != g ? g : []), [g]),
        { value: m, onChange: p, errorMessage: x } = (0, c.A)(t, g, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(d.Qn, l),
                children: [
                    (0, r.jsx)(a.d4u, {
                        className: s()(d.To, u),
                        value: m,
                        onChange: p,
                        placeholder: o.intl.string(o.t.UyaxJy),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: d.fE,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: "".concat(b.length, " / ").concat(n),
                    }),
                ],
            }),
            null != x
                ? (0, r.jsx)(a.Text, {
                      className: s()(d.dG, d.kc),
                      variant: "text-xs/medium",
                      color: "text-feedback-critical",
                      children: x,
                  })
                : (0, r.jsx)(a.Text, {
                      className: d.dG,
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: null != f ? f : o.intl.string(o.t.Gm6G5x),
                  }),
        ],
    });
}
