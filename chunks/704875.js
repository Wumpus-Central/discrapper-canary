r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(628692),
    u = r(845537),
    c = r(653309),
    d = r(982862),
    f = r(223979),
    _ = r(665162);
function h(e, n, r) {
    var i, s;
    let { attributes: c, children: f, element: h, decorations: g } = e,
        E = m(null !== (i = null == g ? void 0 : g[0]) && void 0 !== i ? i : {});
    switch (h.type) {
        case 'line':
            if (null === (s = h.codeBlockState) || void 0 === s ? void 0 : s.isInCodeBlock)
                return (0, a.jsx)('div', {
                    className: d.codeLine,
                    spellCheck: null == h.codeBlockState || null == h.codeBlockState.lang,
                    ...c,
                    children: f
                });
            return (0, a.jsx)('div', {
                ...c,
                children: f
            });
        case 'blockQuote': {
            let e = o()(_.blockquoteContainer, _.slateBlockquoteContainer);
            return (0, a.jsxs)('div', {
                ...c,
                className: e,
                children: [
                    (0, a.jsx)('span', {
                        contentEditable: !1,
                        className: _.blockquoteDivider
                    }),
                    (0, a.jsx)('blockquote', { children: f })
                ]
            });
        }
        case 'emoji':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [(0, a.jsx)(u.dy, { emoji: h.emoji }), f]
            });
        case 'customEmoji':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [(0, a.jsx)(u.wP, { emoji: h.emoji }), f]
            });
        case 'textMention':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [
                    (0, a.jsx)(u.Ox, {
                        text: h.name,
                        channelId: r,
                        guildId: n
                    }),
                    f
                ]
            });
        case 'userMention':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [
                    (0, a.jsx)(u.cB, {
                        id: h.userId,
                        channelId: r,
                        guildId: n
                    }),
                    f
                ]
            });
        case 'roleMention':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [
                    (0, a.jsx)(u.Vq, {
                        id: h.roleId,
                        guildId: n
                    }),
                    f
                ]
            });
        case 'channelMention':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [(0, a.jsx)(u.Io, { id: h.channelId }), f]
            });
        case 'staticRouteLink':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [
                    (0, a.jsx)(u.NY, {
                        id: h.id,
                        itemId: h.itemId,
                        guildId: n
                    }),
                    f
                ]
            });
        case 'soundboard':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [(0, a.jsx)(l.ku, { soundId: h.soundId }), f]
            });
        case 'commandMention':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [
                    (0, a.jsx)(u.Wf, {
                        text: h.commandName,
                        id: h.commandId
                    }),
                    f
                ]
            });
        case 'timestamp':
            return (0, a.jsxs)(p, {
                attributes: c,
                className: E,
                children: [(0, a.jsx)(u.EK, { timestamp: h.parsed }), f]
            });
        default:
            return null;
    }
}
let p = (e) => {
    let { className: n, attributes: r, children: i } = e,
        s = o()(f.inlineElement, f.inlineVoid, n);
    return (0, a.jsx)('span', {
        ...r,
        className: s,
        contentEditable: !1,
        children: i
    });
};
function m(e) {
    return Object.entries(e)
        .filter((e) => {
            let [n] = e;
            return 'anchor' !== n && 'focus' !== n;
        })
        .map((e) => {
            let [n, r] = e;
            return !0 === r && n in c.U ? c.U[n] : null;
        })
        .filter((e) => null != e)
        .join(' ');
}
