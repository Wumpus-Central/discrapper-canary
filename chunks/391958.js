n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(826745),
    o = n(834730),
    d = n(727904),
    c = n(985018),
    u = n(155953);
function m(e) {
    let { onChangeText: t, maxWordCount: n, className: s, textAreaClassName: m, subtitleText: g, initialValue: h } = e,
        x = l.useMemo(() => h ?? [], [h]),
        { value: _, onChange: p, errorMessage: A } = (0, d.A)(t, h, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(u.Qn, s),
                children: [
                    (0, i.jsx)(a.y, {
                        className: r()(u.To, m),
                        value: _,
                        onChange: p,
                        placeholder: c.intl.string(c.t.UyaxJy),
                    }),
                    (0, i.jsx)(o.E, {
                        className: u.fE,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: `${x.length} / ${n}`,
                    }),
                ],
            }),
            null != A
                ? (0, i.jsx)(o.E, {
                      className: r()(u.dG, u.kc),
                      variant: "text-xs/medium",
                      color: "text-feedback-critical",
                      children: A,
                  })
                : (0, i.jsx)(o.E, {
                      className: u.dG,
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: null != g ? g : c.intl.string(c.t.Gm6G5x),
                  }),
        ],
    });
}
