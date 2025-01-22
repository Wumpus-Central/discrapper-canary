var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
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
            childrenHeader: p,
            childrenSystemMessage: h,
            childrenButtons: _,
            childrenMessageContent: m,
            childrenAccessories: g,
            messageRef: E,
            focusProps: v = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: y,
            isSystemMessage: b,
            hasReply: I,
            ...T
        } = e,
        S = (0, i.jsx)(s.FocusRing, {
            ...v,
            children: (0, i.jsxs)('div', {
                className: o()(n, {
                    [l.wrapper]: !0,
                    [l.contentOnly]: a,
                    [l.compact]: r,
                    [l.cozy]: !r,
                    [l.zalgo]: u,
                    [l.hasThread]: y,
                    [l.isSystemMessage]: b,
                    [l.hasReply]: I
                }),
                ref: E,
                ...T,
                role: 'article',
                children: [
                    d,
                    f,
                    (0, i.jsxs)('div', {
                        className: l.contents,
                        children: [h, p, null == h && m]
                    }),
                    g,
                    null != _
                        ? (0, i.jsx)('div', {
                              className: l.buttonContainer,
                              children: _
                          })
                        : null
                ]
            })
        });
    return c ? (0, i.jsx)(s.FocusBlock, { children: S }) : S;
}
n.Z = u;
