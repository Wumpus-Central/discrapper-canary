"use strict";
n.d(t, { IQ: () => _, WO: () => f }), n(321073);
var i = n(284009),
    l = n.n(i),
    s = n(47167),
    r = n(379418),
    a = n(209932),
    o = n(734057),
    c = n(317525),
    u = n(994500),
    d = n(967198),
    h = n(287809),
    m = n(427262),
    p = n(711371);
function f(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: l } = t ?? {},
        [s, r] = t?.range != null ? p.ZF.edges(t.range) : [void 0, void 0];
    return g(e, { mode: n, start: s, end: r, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: l });
}
function g(e, t) {
    let {
            mode: n,
            start: i,
            end: l,
            separator: s,
            ignoreEmptyNodes: r,
            ignoreTrailingEmptyNodes: a,
            preventEmojiSurrogates: o,
        } = t ?? {},
        c = e.length > 0 && !p.l5.isText(e[0]);
    null == s && (s = c ? "\n" : "");
    let u = i?.path[0] ?? 0,
        d = l?.path[0] ?? e.length - 1;
    if (a)
        for (let t = d; t >= u; t--) {
            let n = e[t];
            if (p.l5.isText(n)) {
                if (n.text.length > 0) {
                    d = t;
                    break;
                }
            } else if (!p.cv.isEmpty(n)) {
                d = t;
                break;
            }
            if (t === u) return "";
        }
    let h = u > 0 && p.AS.isType(e[u - 1], "blockQuote"),
        m = p.AS.isType(e[u], "blockQuote"),
        f = p.AS.isType(e[d], "blockQuote"),
        g = [];
    for (let t = u; t <= d; t++) {
        let s = e[t];
        if (r && p.l5.isText(s) && 0 === s.text.length) continue;
        let a = _(s, {
            mode: n,
            start: null != i && t === u ? { path: i.path.slice(1), offset: i.offset } : void 0,
            end: null != l && t === d ? { path: l.path.slice(1), offset: l.offset } : void 0,
            allowBlockQuotePrefix: null == i || null == l || (!h && (!m || f)),
            preventEmojiSurrogates: o,
        });
        (!r || a.length > 0) && g.push(a);
    }
    return g.join(s);
}
function _(e, t) {
    let { mode: n, start: i, allowBlockQuotePrefix: f = !1, preventEmojiSurrogates: _ = !1 } = t ?? {};
    if (p.l5.isText(e))
        return (function (e, t) {
            let { start: n, end: i } = t ?? {};
            return (
                l()(null == n || 0 === n.path.length, "Invalid start provided to serializeText"),
                l()(null == i || 0 === i.path.length, "Invalid end provided to serializeText"),
                e.substring(n?.offset ?? 0, i?.offset ?? e.length)
            );
        })(e.text, t);
    switch (e.type) {
        case "line":
        case "testInline":
            return g(e.children, t);
        case "testInlineVoid":
            return "";
        case "blockQuote": {
            let n = g(e.children, t),
                l = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (f && (null == i || l)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!_ && null != t.surrogate) return t.surrogate;
            return t.name;
        }
        case "customEmoji": {
            let t = e.emoji;
            if ("raw" === n) {
                let e = t.animated ? "a" : "",
                    n = t.name.replace(/:/g, "").split("~")[0];
                return `<${e}:${n}:${t.emojiId}>`;
            }
            return t.name;
        }
        case "textMention":
            return e.name;
        case "channelMention": {
            let t = `<#${e.channelId}>`;
            if ("raw" === n) return t;
            let i = o.A.getChannel(e.channelId);
            if (null == i) return t;
            return (0, s.m1)(i, h.default, u.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let i = a.A.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let i = d.A.getGuildId(),
                l = null != i ? c.A.getRole(i, e.roleId) : void 0;
            if (null == l) return t;
            return `@${l.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let i = h.default.getUser(e.userId);
            if (null == i) return t;
            return `@${m.Ay.getUserTag(i, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, r.tf)(e.parsed.timestamp, e.parsed.format);
        case "timestampMentionInput": {
            let n = g(e.children, t);
            if (null == i) return `<@time:${n}>`;
            return n;
        }
        case "applicationCommand":
            return g(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = g(e.children, t);
            if (null == i) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
