n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(428760),
    l = n(388032),
    o = n(283902);
function c(e) {
    let { onChange: t, initialValue: n, maxWordCount: c, collapsed: d = !1 } = e,
        [u, m] = i.useState(!d);
    return (0, r.jsx)(s.zF9, {
        isExpanded: u,
        collapsibleContent: (0, r.jsx)(a.Z, {
            onChangeText: t,
            maxWordCount: c,
            className: o.keywordTextAreaContainer,
            textAreaClassName: o.keywordTextArea,
            subtitleText: l.NW.formatToMarkdownString(l.t.qm7UZ2, {}),
            initialValue: n
        }),
        className: o.collapseable,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(s.P3F, {
                onClick: (e) => {
                    m(!u), t(e);
                },
                children: (0, r.jsxs)('div', {
                    className: o.header,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'text-sm/medium',
                            children: l.NW.string(l.t.lbE2Nj)
                        }),
                        u
                            ? (0, r.jsx)(s.u04, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.arrow
                              })
                            : (0, r.jsx)(s.CJ0, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.arrow
                              })
                    ]
                })
            });
        }
    });
}
