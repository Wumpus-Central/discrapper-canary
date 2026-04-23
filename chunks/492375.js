"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(490040),
    o = n(613306),
    l = n(249431),
    u = n(571898),
    c = n(494715),
    d = n(992595);
function _(e, t, n) {
    let { attributes: i, children: c, element: _, decorations: p } = e,
        h = Object.entries(p?.[0] ?? {})
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
    switch (_.type) {
        case "line":
            if (_.codeBlockState?.isInCodeBlock)
                return (0, r.jsx)("div", {
                    className: u.codeLine,
                    spellCheck: null == _.codeBlockState || null == _.codeBlockState.lang,
                    ...i,
                    children: c,
                });
            return (0, r.jsx)("div", { ...i, children: c });
        case "blockQuote": {
            let e = s()(d.h, d.MN);
            return (0, r.jsxs)("div", {
                ...i,
                className: e,
                children: [
                    (0, r.jsx)("span", { contentEditable: !1, className: d.r }),
                    (0, r.jsx)("blockquote", { children: c }),
                ],
            });
        }
        case "emoji":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.zT, { emoji: _.emoji }), c] });
        case "customEmoji":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.QT, { emoji: _.emoji }), c] });
        case "textMention":
            return (0, r.jsxs)(f, { attributes: i, className: h, children: [(0, r.jsx)(o.wN, { text: _.name }), c] });
        case "userMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.M9, { id: _.userId, channelId: n, guildId: t }), c],
            });
        case "roleMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.ti, { id: _.roleId, guildId: t }), c],
            });
        case "channelMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.Cn, { id: _.channelId }), c],
            });
        case "staticRouteLink":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.sQ, { id: _.id, itemId: _.itemId, guildId: t }), c],
            });
        case "soundboard":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(a.LF, { soundId: _.soundId }), c],
            });
        case "commandMention":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.gn, { text: _.commandName, id: _.commandId }), c],
            });
        case "timestamp":
            return (0, r.jsxs)(f, {
                attributes: i,
                className: h,
                children: [(0, r.jsx)(o.Dc, { timestamp: _.parsed }), c],
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
