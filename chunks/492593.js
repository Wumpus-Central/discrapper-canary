n.d(t, { Z: () => l });
var a = n(200651);
n(192379);
var o = n(120356),
    i = n.n(o),
    r = n(481060),
    s = n(732175);
let l = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: l = !0,
            disableInteraction: c = !1,
            childrenRepliedMessage: u,
            childrenExecutedCommand: d,
            childrenHeader: p,
            childrenSystemMessage: m,
            childrenButtons: g,
            childrenMessageContent: _,
            childrenAccessories: h,
            messageRef: f,
            focusProps: C = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: x,
            isSystemMessage: v,
            hasReply: b,
            ...T
        } = e,
        I = (0, a.jsx)(r.tEY, {
            ...C,
            children: (0, a.jsxs)('div', {
                className: i()(t, {
                    [s.wrapper]: !0,
                    [s.contentOnly]: o,
                    [s.compact]: n,
                    [s.cozy]: !n,
                    [s.zalgo]: l,
                    [s.hasThread]: x,
                    [s.isSystemMessage]: v,
                    [s.hasReply]: b
                }),
                ref: f,
                ...T,
                role: 'article',
                children: [
                    u,
                    d,
                    (0, a.jsxs)('div', {
                        className: s.contents,
                        children: [m, p, null == m && _]
                    }),
                    h,
                    null != g
                        ? (0, a.jsx)('div', {
                              className: s.buttonContainer,
                              children: g
                          })
                        : null
                ]
            })
        });
    return c ? (0, a.jsx)(r.Rny, { children: I }) : I;
};
