"use strict";
n.d(t, { IQ: () => g, WO: () => E }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(47167),
    a = n(379418),
    o = n(209932),
    l = n(734057),
    u = n(317525),
    c = n(994500),
    d = n(967198),
    _ = n(287809),
    h = n(427262),
    f = n(820066),
    p = n(827669);
function E(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r } = t ?? {},
        [s, a] = t?.range != null ? f.ZF.edges(t.range) : [void 0, void 0];
    return m(e, { mode: n, start: s, end: a, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r });
}
function m(e, t) {
    let {
            mode: n,
            start: i,
            end: r,
            separator: s,
            ignoreEmptyNodes: a,
            ignoreTrailingEmptyNodes: o,
            preventEmojiSurrogates: l,
        } = t ?? {},
        u = e.length > 0 && !f.l5.isText(e[0]);
    null == s && (s = u ? "\n" : "");
    let c = i?.path[0] ?? 0,
        d = r?.path[0] ?? e.length - 1;
    if (o)
        for (let t = d; t >= c; t--) {
            let n = e[t];
            if (f.l5.isText(n)) {
                if (n.text.length > 0) {
                    d = t;
                    break;
                }
            } else if (!f.cv.isEmpty(n)) {
                d = t;
                break;
            }
            if (t === c) return "";
        }
    let _ = c > 0 && f.AS.isType(e[c - 1], "blockQuote"),
        h = f.AS.isType(e[c], "blockQuote"),
        p = f.AS.isType(e[d], "blockQuote"),
        E = [];
    for (let t = c; t <= d; t++) {
        let s = e[t];
        if (a && f.l5.isText(s) && 0 === s.text.length) continue;
        let o = g(s, {
            mode: n,
            start: null != i && t === c ? { path: i.path.slice(1), offset: i.offset } : void 0,
            end: null != r && t === d ? { path: r.path.slice(1), offset: r.offset } : void 0,
            allowBlockQuotePrefix: null == i || null == r || (!_ && (!h || p)),
            preventEmojiSurrogates: l,
        });
        (!a || o.length > 0) && E.push(o);
    }
    return E.join(s);
}
function g(e, t) {
    let { mode: n, start: i, allowBlockQuotePrefix: E = !1, preventEmojiSurrogates: g = !1 } = t ?? {};
    if (f.l5.isText(e))
        return (function (e, t) {
            let { start: n, end: i } = t ?? {};
            return (
                r()(null == n || 0 === n.path.length, "Invalid start provided to serializeText"),
                r()(null == i || 0 === i.path.length, "Invalid end provided to serializeText"),
                e.substring(n?.offset ?? 0, i?.offset ?? e.length)
            );
        })(e.text, t);
    switch (e.type) {
        case "line":
        case "testInline":
            return m(e.children, t);
        case "testInlineVoid":
            return "";
        case "blockQuote": {
            let n = m(e.children, t),
                r = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (E && (null == i || r)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!g && null != t.surrogate) return t.surrogate;
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
            let i = l.A.getChannel(e.channelId);
            if (null == i) return t;
            return (0, s.m1)(i, _.default, c.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let i = o.A.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let i = d.A.getGuildId(),
                r = null != i ? u.A.getRole(i, e.roleId) : void 0;
            if (null == r) return t;
            return `@${r.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let i = _.default.getUser(e.userId);
            if (null == i) return t;
            return `@${h.Ay.getUserTag(i, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, a.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return (0, p.K)(e.gameId);
        case "timestampMentionInput": {
            let n = m(e.children, t);
            if (null == i) return `<@time:${n}>`;
            return n;
        }
        case "gameMentionInput": {
            let n = m(e.children, t);
            if (null == i) return `@${n}`;
            return n;
        }
        case "applicationCommand":
            return m(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = m(e.children, t);
            if (null == i) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
