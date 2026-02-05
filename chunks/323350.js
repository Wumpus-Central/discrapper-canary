"use strict";
n.d(t, { IQ: () => g, WO: () => h }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(47167),
    s = n(379418),
    o = n(209932),
    l = n(734057),
    u = n(317525),
    c = n(994500),
    d = n(967198),
    _ = n(287809),
    f = n(427262),
    p = n(711371);
function h(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = t ?? {},
        [a, s] = t?.range != null ? p.ZF.edges(t.range) : [void 0, void 0];
    return m(e, { mode: n, start: a, end: s, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i });
}
function m(e, t) {
    let {
            mode: n,
            start: r,
            end: i,
            separator: a,
            ignoreEmptyNodes: s,
            ignoreTrailingEmptyNodes: o,
            preventEmojiSurrogates: l,
        } = t ?? {},
        u = e.length > 0 && !p.l5.isText(e[0]);
    null == a && (a = u ? "\n" : "");
    let c = r?.path[0] ?? 0,
        d = i?.path[0] ?? e.length - 1;
    if (o)
        for (let t = d; t >= c; t--) {
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
            if (t === c) return "";
        }
    let _ = c > 0 && p.AS.isType(e[c - 1], "blockQuote"),
        f = p.AS.isType(e[c], "blockQuote"),
        h = p.AS.isType(e[d], "blockQuote"),
        m = [];
    for (let t = c; t <= d; t++) {
        let a = e[t];
        if (s && p.l5.isText(a) && 0 === a.text.length) continue;
        let o = g(a, {
            mode: n,
            start: null != r && t === c ? { path: r.path.slice(1), offset: r.offset } : void 0,
            end: null != i && t === d ? { path: i.path.slice(1), offset: i.offset } : void 0,
            allowBlockQuotePrefix: null == r || null == i || (!_ && (!f || h)),
            preventEmojiSurrogates: l,
        });
        (!s || o.length > 0) && m.push(o);
    }
    return m.join(a);
}
function g(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: i = !1, preventEmojiSurrogates: h = !1 } = t ?? {};
    if (p.l5.isText(e)) return E(e.text, t);
    switch (e.type) {
        case "gameMentionInput":
        case "testInlineVoid":
            return "";
        case "line":
        case "testInline":
            return m(e.children, t);
        case "blockQuote": {
            let n = m(e.children, t),
                a = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (i && (null == r || a)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!h && null != t.surrogate) return t.surrogate;
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
            let r = l.A.getChannel(e.channelId);
            if (null == r) return t;
            return (0, a.m1)(r, _.default, c.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let r = o.A.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let r = d.A.getGuildId(),
                i = null != r ? u.A.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return `@${i.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let r = _.default.getUser(e.userId);
            if (null == r) return t;
            return `@${f.Ay.getUserTag(r, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return `<@$${e.applicationId}>`;
        case "timestampMentionInput": {
            let n = m(e.children, t);
            if (null == r) return `<@time:${n}>`;
            return n;
        }
        case "applicationCommand":
            return m(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = m(e.children, t);
            if (null == r) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
function E(e, t) {
    let { start: n, end: r } = t ?? {};
    return (
        i()(null == n || 0 === n.path.length, "Invalid start provided to serializeText"),
        i()(null == r || 0 === r.path.length, "Invalid end provided to serializeText"),
        e.substring(n?.offset ?? 0, r?.offset ?? e.length)
    );
}
