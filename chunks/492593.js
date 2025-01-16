var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(507304);
function u(e) {
    let {
            className: n,
            compact: r = !1,
            contentOnly: a = !1,
            zalgo: u = !0,
            disableInteraction: c = !1,
            childrenRepliedMessage: d,
            childrenExecutedCommand: f,
            childrenHeader: _,
            childrenSystemMessage: h,
            childrenButtons: p,
            childrenMessageContent: m,
            childrenAccessories: g,
            messageRef: E,
            focusProps: v = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: I,
            isSystemMessage: T,
            hasReply: b,
            ...y
        } = e,
        S = (0, i.jsx)(o.FocusRing, {
            ...v,
            children: (0, i.jsxs)('div', {
                className: s()(n, {
                    [l.wrapper]: !0,
                    [l.contentOnly]: a,
                    [l.compact]: r,
                    [l.cozy]: !r,
                    [l.zalgo]: u,
                    [l.hasThread]: I,
                    [l.isSystemMessage]: T,
                    [l.hasReply]: b
                }),
                ref: E,
                ...y,
                role: 'article',
                children: [
                    d,
                    f,
                    (0, i.jsxs)('div', {
                        className: l.contents,
                        children: [h, _, null == h && m]
                    }),
                    g,
                    null != p
                        ? (0, i.jsx)('div', {
                              className: l.buttonContainer,
                              children: p
                          })
                        : null
                ]
            })
        });
    return c ? (0, i.jsx)(o.FocusBlock, { children: S }) : S;
}
n.Z = u;
