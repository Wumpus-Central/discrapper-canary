n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(507304);
let l = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: r = !1,
            zalgo: l = !0,
            disableInteraction: u = !1,
            childrenRepliedMessage: c,
            childrenExecutedCommand: d,
            childrenHeader: f,
            childrenSystemMessage: _,
            childrenButtons: p,
            childrenMessageContent: h,
            childrenAccessories: m,
            messageRef: g,
            focusProps: E = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: v,
            isSystemMessage: y,
            hasReply: I,
            ...T
        } = e,
        b = (0, i.jsx)(s.tEY, {
            ...E,
            children: (0, i.jsxs)('div', {
                className: a()(t, {
                    [o.wrapper]: !0,
                    [o.contentOnly]: r,
                    [o.compact]: n,
                    [o.cozy]: !n,
                    [o.zalgo]: l,
                    [o.hasThread]: v,
                    [o.isSystemMessage]: y,
                    [o.hasReply]: I
                }),
                ref: g,
                ...T,
                role: 'article',
                children: [
                    c,
                    d,
                    (0, i.jsxs)('div', {
                        className: o.contents,
                        children: [_, f, null == _ && h]
                    }),
                    m,
                    null != p
                        ? (0, i.jsx)('div', {
                              className: o.buttonContainer,
                              children: p
                          })
                        : null
                ]
            })
        });
    return u ? (0, i.jsx)(s.Rny, { children: b }) : b;
};
