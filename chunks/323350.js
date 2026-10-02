(n.d(t, { IQ: () => E, WO: () => g }), n(321073));
var l = n(284009),
    i = n.n(l),
    r = n(47167),
    s = n(379418),
    a = n(209932),
    o = n(734057),
    u = n(317525),
    c = n(994500),
    d = n(967198),
    h = n(287809),
    m = n(427262),
    p = n(820066),
    f = n(827669);
function g(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: l, preventEmojiSurrogates: i } = t ?? {},
        [r, s] = t?.range != null ? p.ZF.edges(t.range) : [void 0, void 0];
    return x(e, { mode: n, start: r, end: s, ignoreTrailingEmptyNodes: l, preventEmojiSurrogates: i });
}
function x(e, t) {
    let {
            mode: n,
            start: l,
            end: i,
            separator: r,
            ignoreEmptyNodes: s,
            ignoreTrailingEmptyNodes: a,
            preventEmojiSurrogates: o,
        } = t ?? {},
        u = e.length > 0 && !p.l5.isText(e[0]);
    null == r && (r = u ? "\n" : "");
    let c = l?.path[0] ?? 0,
        d = i?.path[0] ?? e.length - 1;
    if (a)
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
    let h = c > 0 && p.AS.isType(e[c - 1], "blockQuote"),
        m = p.AS.isType(e[c], "blockQuote"),
        f = p.AS.isType(e[d], "blockQuote"),
        g = [];
    for (let t = c; t <= d; t++) {
        let r = e[t];
        if (s && p.l5.isText(r) && 0 === r.text.length) continue;
        let a = E(r, {
            mode: n,
            start: null != l && t === c ? { path: l.path.slice(1), offset: l.offset } : void 0,
            end: null != i && t === d ? { path: i.path.slice(1), offset: i.offset } : void 0,
            allowBlockQuotePrefix: null == l || null == i || (!h && (!m || f)),
            preventEmojiSurrogates: o,
        });
        (!s || a.length > 0) && g.push(a);
    }
    return g.join(r);
}
function E(e, t) {
    let { mode: n, start: l, allowBlockQuotePrefix: g = !1, preventEmojiSurrogates: E = !1 } = t ?? {};
    if (p.l5.isText(e))
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
            if (!E && null != t.surrogate) return t.surrogate;
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
            return (0, r.m1)(l, h.default, c.A, !0, !0);
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
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return (0, f.KW)(e.gameId);
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
