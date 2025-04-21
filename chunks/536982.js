n.d(t, { Z: () => c }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(428760),
    a = n(388032),
    o = n(283902);
function c(e) {
    let { onChange: t, initialValue: n, maxWordCount: c, collapsed: d = !1 } = e,
        [u, m] = i.useState(!d);
    return (0, r.jsx)(l.zF9, {
        isExpanded: u,
        collapsibleContent: (0, r.jsx)(s.Z, {
            onChangeText: t,
            maxWordCount: c,
            className: o.keywordTextAreaContainer,
            textAreaClassName: o.keywordTextArea,
            subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ2, {}),
            initialValue: n
        }),
        className: o.collapseable,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(l.P3F, {
                onClick: (e) => {
                    m(!u), t(e);
                },
                children: (0, r.jsxs)('div', {
                    className: o.header,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'text-sm/medium',
                            children: a.intl.string(a.t.lbE2Nj)
                        }),
                        u
                            ? (0, r.jsx)(l.u04, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.arrow
                              })
                            : (0, r.jsx)(l.CJ0, {
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
