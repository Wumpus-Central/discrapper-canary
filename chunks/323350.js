n.d(t, { IQ: () => A, WO: () => g }), n(321073);
var l = n(284009),
    i = n.n(l),
    s = n(47167),
    r = n(379418),
    a = n(209932),
    o = n(734057),
    u = n(317525),
    c = n(994500),
    d = n(967198),
    h = n(287809),
    m = n(427262),
    f = n(820066),
    p = n(827669);
function g(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: l, preventEmojiSurrogates: i } = t ?? {},
        [s, r] = t?.range != null ? f.ZF.edges(t.range) : [void 0, void 0];
    return x(e, { mode: n, start: s, end: r, ignoreTrailingEmptyNodes: l, preventEmojiSurrogates: i });
}
function x(e, t) {
    let {
            mode: n,
            start: l,
            end: i,
            separator: s,
            ignoreEmptyNodes: r,
            ignoreTrailingEmptyNodes: a,
            preventEmojiSurrogates: o,
        } = t ?? {},
        u = e.length > 0 && !f.l5.isText(e[0]);
    null == s && (s = u ? "\n" : "");
    let c = l?.path[0] ?? 0,
        d = i?.path[0] ?? e.length - 1;
    if (a)
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
    let h = c > 0 && f.AS.isType(e[c - 1], "blockQuote"),
        m = f.AS.isType(e[c], "blockQuote"),
        p = f.AS.isType(e[d], "blockQuote"),
        g = [];
    for (let t = c; t <= d; t++) {
        let s = e[t];
        if (r && f.l5.isText(s) && 0 === s.text.length) continue;
        let a = A(s, {
            mode: n,
            start: null != l && t === c ? { path: l.path.slice(1), offset: l.offset } : void 0,
            end: null != i && t === d ? { path: i.path.slice(1), offset: i.offset } : void 0,
            allowBlockQuotePrefix: null == l || null == i || (!h && (!m || p)),
            preventEmojiSurrogates: o,
        });
        (!r || a.length > 0) && g.push(a);
    }
    return g.join(s);
}
function A(e, t) {
    let { mode: n, start: l, allowBlockQuotePrefix: g = !1, preventEmojiSurrogates: A = !1 } = t ?? {};
    if (f.l5.isText(e))
        return (function (e, t) {
            let { start: n, end: l } = t ?? {};
            return (
                i()(null == n || 0 === n.path.length, "Invalid start provided to serializeText"),
                i()(null == l || 0 === l.path.length, "Invalid end provided to serializeText"),
                e.substring(n?.offset ?? 0, l?.offset ?? e.length)
            );
        })(e.text, t);
    switch (e.type) {
        case "line":
        case "testInline":
            return x(e.children, t);
        case "testInlineVoid":
            return "";
        case "blockQuote": {
            let n = x(e.children, t),
                i = null != l && 1 === l.path.length && 0 === l.path[0] && 0 === l.offset;
            if (g && (null == l || i)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!A && null != t.surrogate) return t.surrogate;
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
            let l = o.A.getChannel(e.channelId);
            if (null == l) return t;
            return (0, s.m1)(l, h.default, c.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let l = a.A.getSoundById(e.soundId);
            if (null == l) return t;
            return l.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let l = d.A.getGuildId(),
                i = null != l ? u.A.getRole(l, e.roleId) : void 0;
            if (null == i) return t;
            return `@${i.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let l = h.default.getUser(e.userId);
            if (null == l) return t;
            return `@${m.Ay.getUserTag(l, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, r.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return (0, p.KW)(e.gameId);
        case "timestampMentionInput": {
            let n = x(e.children, t);
            if (null == l) return `<@time:${n}>`;
            return n;
        }
        case "gameMentionInput": {
            let n = x(e.children, t);
            if (null == l) return `@${n}`;
            return n;
        }
        case "applicationCommand":
            return x(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = x(e.children, t);
            if (null == l) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
