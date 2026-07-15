"use strict";
n.d(t, { IQ: () => p, WO: () => I }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(47167),
    s = n(379418),
    l = n(209932),
    o = n(734057),
    d = n(317525),
    c = n(994500),
    u = n(967198),
    _ = n(287809),
    E = n(427262),
    A = n(820066),
    h = n(827669);
function I(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r } = t ?? {},
        [a, s] = t?.range != null ? A.ZF.edges(t.range) : [void 0, void 0];
    return f(e, { mode: n, start: a, end: s, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r });
}
function f(e, t) {
    let {
            mode: n,
            start: i,
            end: r,
            separator: a,
            ignoreEmptyNodes: s,
            ignoreTrailingEmptyNodes: l,
            preventEmojiSurrogates: o,
        } = t ?? {},
        d = e.length > 0 && !A.l5.isText(e[0]);
    null == a && (a = d ? "\n" : "");
    let c = i?.path[0] ?? 0,
        u = r?.path[0] ?? e.length - 1;
    if (l)
        for (let t = u; t >= c; t--) {
            let n = e[t];
            if (A.l5.isText(n)) {
                if (n.text.length > 0) {
                    u = t;
                    break;
                }
            } else if (!A.cv.isEmpty(n)) {
                u = t;
                break;
            }
            if (t === c) return "";
        }
    let _ = c > 0 && A.AS.isType(e[c - 1], "blockQuote"),
        E = A.AS.isType(e[c], "blockQuote"),
        h = A.AS.isType(e[u], "blockQuote"),
        I = [];
    for (let t = c; t <= u; t++) {
        let a = e[t];
        if (s && A.l5.isText(a) && 0 === a.text.length) continue;
        let l = p(a, {
            mode: n,
            start: null != i && t === c ? { path: i.path.slice(1), offset: i.offset } : void 0,
            end: null != r && t === u ? { path: r.path.slice(1), offset: r.offset } : void 0,
            allowBlockQuotePrefix: null == i || null == r || (!_ && (!E || h)),
            preventEmojiSurrogates: o,
        });
        (!s || l.length > 0) && I.push(l);
    }
    return I.join(a);
}
function p(e, t) {
    let { mode: n, start: i, allowBlockQuotePrefix: I = !1, preventEmojiSurrogates: p = !1 } = t ?? {};
    if (A.l5.isText(e))
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
            return f(e.children, t);
        case "testInlineVoid":
            return "";
        case "blockQuote": {
            let n = f(e.children, t),
                r = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (I && (null == i || r)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!p && null != t.surrogate) return t.surrogate;
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
            return (0, a.m1)(i, _.default, c.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let i = l.A.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let i = u.A.getGuildId(),
                r = null != i ? d.A.getRole(i, e.roleId) : void 0;
            if (null == r) return t;
            return `@${r.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let i = _.default.getUser(e.userId);
            if (null == i) return t;
            return `@${E.Ay.getUserTag(i, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return (0, h.KW)(e.gameId);
        case "timestampMentionInput": {
            let n = f(e.children, t);
            if (null == i) return `<@time:${n}>`;
            return n;
        }
        case "gameMentionInput": {
            let n = f(e.children, t);
            if (null == i) return `@${n}`;
            return n;
        }
        case "applicationCommand":
            return f(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = f(e.children, t);
            if (null == i) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
