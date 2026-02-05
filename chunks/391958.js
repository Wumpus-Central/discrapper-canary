"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(727904),
    d = n(985018),
    c = n(973184);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: m, initialValue: g } = e,
        x = s.useMemo(() => g ?? [], [g]),
        { value: h, onChange: _, errorMessage: A } = (0, o.A)(t, g, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(c.Qn, l),
                children: [
                    (0, i.jsx)(a.d4u, {
                        className: r()(c.To, u),
                        value: h,
                        onChange: _,
                        placeholder: d.intl.string(d.t.UyaxJy),
                    }),
                    (0, i.jsx)(a.Text, {
                        className: c.fE,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: `${x.length} / ${n}`,
                    }),
                ],
            }),
            null != A
                ? (0, i.jsx)(a.Text, {
                      className: r()(c.dG, c.kc),
                      variant: "text-xs/medium",
                      color: "text-feedback-critical",
                      children: A,
                  })
                : (0, i.jsx)(a.Text, {
                      className: c.dG,
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: null != m ? m : d.intl.string(d.t.Gm6G5x),
                  }),
        ],
    });
}
