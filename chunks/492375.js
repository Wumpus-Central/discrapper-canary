"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(490040),
    a = n(613306),
    o = n(249431),
    c = n(571898),
    u = n(494715),
    d = n(992595);
function h(e, t, n) {
    let { attributes: l, children: u, element: h, decorations: p } = e,
        f = Object.entries(p?.[0] ?? {})
            .filter((e) => {
                let [t] = e;
                return "anchor" !== t && "focus" !== t;
            })
            .map((e) => {
                let [t, n] = e;
                return !0 === n && t in o.Y ? o.Y[t] : null;
            })
            .filter((e) => null != e)
            .join(" ");
    switch (h.type) {
        case "line":
            if (h.codeBlockState?.isInCodeBlock)
                return (0, i.jsx)("div", {
                    className: c.codeLine,
                    spellCheck: null == h.codeBlockState || null == h.codeBlockState.lang,
                    ...l,
                    children: u,
                });
            return (0, i.jsx)("div", { ...l, children: u });
        case "blockQuote": {
            let e = s()(d.h, d.MN);
            return (0, i.jsxs)("div", {
                ...l,
                className: e,
                children: [
                    (0, i.jsx)("span", { contentEditable: !1, className: d.r }),
                    (0, i.jsx)("blockquote", { children: u }),
                ],
            });
        }
        case "emoji":
            return (0, i.jsxs)(m, { attributes: l, className: f, children: [(0, i.jsx)(a.zT, { emoji: h.emoji }), u] });
        case "customEmoji":
            return (0, i.jsxs)(m, { attributes: l, className: f, children: [(0, i.jsx)(a.QT, { emoji: h.emoji }), u] });
        case "textMention":
            return (0, i.jsxs)(m, { attributes: l, className: f, children: [(0, i.jsx)(a.wN, { text: h.name }), u] });
        case "userMention":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.M9, { id: h.userId, channelId: n, guildId: t }), u],
            });
        case "roleMention":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.ti, { id: h.roleId, guildId: t }), u],
            });
        case "channelMention":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.Cn, { id: h.channelId }), u],
            });
        case "staticRouteLink":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.sQ, { id: h.id, itemId: h.itemId, guildId: t }), u],
            });
        case "soundboard":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(r.LF, { soundId: h.soundId }), u],
            });
        case "commandMention":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.gn, { text: h.commandName, id: h.commandId }), u],
            });
        case "timestamp":
            return (0, i.jsxs)(m, {
                attributes: l,
                className: f,
                children: [(0, i.jsx)(a.Dc, { timestamp: h.parsed }), u],
            });
        default:
            return null;
    }
}
let m = (e) => {
    let { className: t, attributes: n, children: l } = e,
        r = s()(u.S0, u.Cj, t);
    return (0, i.jsx)("span", { ...n, className: r, contentEditable: !1, children: l });
};
