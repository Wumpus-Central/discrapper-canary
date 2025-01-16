n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(428760),
    a = n(388032),
    o = n(200127);
function c(e) {
    let { onChange: t, initialValue: n, maxWordCount: c, collapsed: d = !1 } = e,
        [u, m] = r.useState(!d);
    return (0, i.jsx)(l.Collapsible, {
        isExpanded: u,
        collapsibleContent: (0, i.jsx)(s.Z, {
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
            return (0, i.jsx)(l.Clickable, {
                onClick: (e) => {
                    m(!u), t(e);
                },
                children: (0, i.jsxs)('div', {
                    className: o.header,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'text-sm/medium',
                            children: a.intl.string(a.t.lbE2Nj)
                        }),
                        u
                            ? (0, i.jsx)(l.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.arrow
                              })
                            : (0, i.jsx)(l.ChevronSmallDownIcon, {
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
