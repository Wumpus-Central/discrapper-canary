"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(490040),
    o = n(613306),
    l = n(249431),
    u = n(104355),
    c = n(40672),
    d = n(830412);
function _(e, t, n) {
    let { attributes: i, children: l, element: c, decorations: _ } = e,
        h = p(_?.[0] ?? {});
    switch (c.type) {
        case "line":
            if (c.codeBlockState?.isInCodeBlock)
                return (0, r.jsx)("div", {
                    className: u.codeLine,
                    spellCheck: null == c.codeBlockState || null == c.codeBlockState.lang,
                    ...i,
                    children: l,
                });
            return (0, r.jsx)("div", { ...i, children: l });
        case "blockQuote": {
            let e = s()(d.h, d.MN);
            return (0, r.jsxs)("div", {
                ...i,
                className: e,
                children: [
                    (0, r.jsx)("span", { contentEditable: !1, className: d.r }),
                    (0, r.jsx)("blockquote", { children: l }),
                ],
            });
        }
        case "emoji":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.zT, { emoji: c.emoji }), l] });
        case "customEmoji":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.QT, { emoji: c.emoji }), l] });
        case "textMention":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.wN, { text: c.name }), l] });
        case "userMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.M9, { id: c.userId, channelId: n, guildId: t }), l],
            });
        case "roleMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.ti, { id: c.roleId, guildId: t }), l],
            });
        case "channelMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.Cn, { id: c.channelId }), l],
            });
        case "staticRouteLink":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.sQ, { id: c.id, itemId: c.itemId, guildId: t }), l],
            });
        case "soundboard":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(a.LF, { soundId: c.soundId }), l],
            });
        case "commandMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.gn, { text: c.commandName, id: c.commandId }), l],
            });
        case "timestamp":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.Dc, { timestamp: c.parsed }), l],
            });
        case "gameMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.NH, { id: c.applicationId }), l],
            });
        default:
            return null;
    }
}
let f = (e) => {
    let { className: t, attributes: n, children: i } = e,
        a = s()(c.S0, c.Cj, t);
    return (0, r.jsx)("span", { ...n, className: a, contentEditable: !1, children: i });
};
function p(e) {
    return Object.entries(e)
        .filter((e) => {
            let [t] = e;
            return "anchor" !== t && "focus" !== t;
        })
        .map((e) => {
            let [t, n] = e;
            return !0 === n && t in l.Y ? l.Y[t] : null;
        })
        .filter((e) => null != e)
        .join(" ");
}
