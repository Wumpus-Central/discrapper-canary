n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(428760),
    s = n(388032),
    o = n(469716);
function c(e) {
    let { onChange: t, initialValue: n, maxWordCount: c, collapsed: d = !1 } = e,
        [u, g] = i.useState(!d);
    return (0, r.jsx)(l.zF9, {
        isExpanded: u,
        collapsibleContent: (0, r.jsx)(a.Z, {
            onChangeText: t,
            maxWordCount: c,
            className: o.keywordTextAreaContainer,
            textAreaClassName: o.keywordTextArea,
            subtitleText: s.intl.formatToMarkdownString(s.t.qm7UZ8, {}),
            initialValue: n,
        }),
        className: o.collapseable,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(l.P3F, {
                onClick: (e) => {
                    g(!u), t(e);
                },
                children: (0, r.jsxs)("div", {
                    className: o.header,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "text-sm/medium",
                            children: s.intl.string(s.t.lbE2Nm),
                        }),
                        u
                            ? (0, r.jsx)(l.u04, {
                                  size: "md",
                                  color: "currentColor",
                                  className: o.arrow,
                              })
                            : (0, r.jsx)(l.CJ0, {
                                  size: "md",
                                  color: "currentColor",
                                  className: o.arrow,
                              }),
                    ],
                }),
            });
        },
    });
}
