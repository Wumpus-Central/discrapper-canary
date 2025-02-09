n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(628692),
    o = n(845537),
    l = n(653309),
    u = n(303689),
    c = n(780908),
    d = n(642367);
function f(e, t, n) {
    var r, l;
    let { attributes: c, children: f, element: h, decorations: m } = e,
        g = p(null !== (r = null == m ? void 0 : m[0]) && void 0 !== r ? r : {});
    switch (h.type) {
        case 'line':
            if (null === (l = h.codeBlockState) || void 0 === l ? void 0 : l.isInCodeBlock)
                return (0, i.jsx)('div', {
                    className: u.codeLine,
                    spellCheck: null == h.codeBlockState || null == h.codeBlockState.lang,
                    ...c,
                    children: f
                });
            return (0, i.jsx)('div', {
                ...c,
                children: f
            });
        case 'blockQuote': {
            let e = a()(d.blockquoteContainer, d.slateBlockquoteContainer);
            return (0, i.jsxs)('div', {
                ...c,
                className: e,
                children: [
                    (0, i.jsx)('span', {
                        contentEditable: !1,
                        className: d.blockquoteDivider
                    }),
                    (0, i.jsx)('blockquote', { children: f })
                ]
            });
        }
        case 'emoji':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [(0, i.jsx)(o.dy, { emoji: h.emoji }), f]
            });
        case 'customEmoji':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [(0, i.jsx)(o.wP, { emoji: h.emoji }), f]
            });
        case 'textMention':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [
                    (0, i.jsx)(o.Ox, {
                        text: h.name,
                        channelId: n,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'userMention':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [
                    (0, i.jsx)(o.cB, {
                        id: h.userId,
                        channelId: n,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'roleMention':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [
                    (0, i.jsx)(o.Vq, {
                        id: h.roleId,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'channelMention':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [(0, i.jsx)(o.Io, { id: h.channelId }), f]
            });
        case 'staticRouteLink':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [
                    (0, i.jsx)(o.NY, {
                        id: h.id,
                        itemId: h.itemId,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'soundboard':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [(0, i.jsx)(s.ku, { soundId: h.soundId }), f]
            });
        case 'commandMention':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [
                    (0, i.jsx)(o.Wf, {
                        text: h.commandName,
                        id: h.commandId
                    }),
                    f
                ]
            });
        case 'timestamp':
            return (0, i.jsxs)(_, {
                attributes: c,
                className: g,
                children: [(0, i.jsx)(o.EK, { timestamp: h.parsed }), f]
            });
        default:
            return null;
    }
}
let _ = (e) => {
    let { className: t, attributes: n, children: r } = e,
        s = a()(c.inlineElement, c.inlineVoid, t);
    return (0, i.jsx)('span', {
        ...n,
        className: s,
        contentEditable: !1,
        children: r
    });
};
function p(e) {
    return Object.entries(e)
        .filter((e) => {
            let [t] = e;
            return 'anchor' !== t && 'focus' !== t;
        })
        .map((e) => {
            let [t, n] = e;
            return !0 === n && t in l.U ? l.U[t] : null;
        })
        .filter((e) => null != e)
        .join(' ');
}
