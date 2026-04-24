n.d(t, { IQ: () => x, WO: () => p }), n(321073);
var r = n(284009),
    i = n.n(r),
    l = n(47167),
    s = n(379418),
    u = n(209932),
    a = n(734057),
    c = n(317525),
    o = n(994500),
    m = n(967198),
    d = n(287809),
    f = n(427262),
    h = n(820066);
function p(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = t ?? {},
        [l, s] = t?.range != null ? h.ZF.edges(t.range) : [void 0, void 0];
    return g(e, { mode: n, start: l, end: s, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i });
}
function g(e, t) {
    let {
            mode: n,
            start: r,
            end: i,
            separator: l,
            ignoreEmptyNodes: s,
            ignoreTrailingEmptyNodes: u,
            preventEmojiSurrogates: a,
        } = t ?? {},
        c = e.length > 0 && !h.l5.isText(e[0]);
    null == l && (l = c ? "\n" : "");
    let o = r?.path[0] ?? 0,
        m = i?.path[0] ?? e.length - 1;
    if (u)
        for (let t = m; t >= o; t--) {
            let n = e[t];
            if (h.l5.isText(n)) {
                if (n.text.length > 0) {
                    m = t;
                    break;
                }
            } else if (!h.cv.isEmpty(n)) {
                m = t;
                break;
            }
            if (t === o) return "";
        }
    let d = o > 0 && h.AS.isType(e[o - 1], "blockQuote"),
        f = h.AS.isType(e[o], "blockQuote"),
        p = h.AS.isType(e[m], "blockQuote"),
        g = [];
    for (let t = o; t <= m; t++) {
        let l = e[t];
        if (s && h.l5.isText(l) && 0 === l.text.length) continue;
        let u = x(l, {
            mode: n,
            start: null != r && t === o ? { path: r.path.slice(1), offset: r.offset } : void 0,
            end: null != i && t === m ? { path: i.path.slice(1), offset: i.offset } : void 0,
            allowBlockQuotePrefix: null == r || null == i || (!d && (!f || p)),
            preventEmojiSurrogates: a,
        });
        (!s || u.length > 0) && g.push(u);
    }
    return g.join(l);
}
function x(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: p = !1, preventEmojiSurrogates: x = !1 } = t ?? {};
    if (h.l5.isText(e))
        return (function (e, t) {
            let { start: n, end: r } = t ?? {};
            return (
                i()(null == n || 0 === n.path.length, "Invalid start provided to serializeText"),
                i()(null == r || 0 === r.path.length, "Invalid end provided to serializeText"),
                e.substring(n?.offset ?? 0, r?.offset ?? e.length)
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
                i = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (p && (null == r || i)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!x && null != t.surrogate) return t.surrogate;
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
            let r = a.A.getChannel(e.channelId);
            if (null == r) return t;
            return (0, l.m1)(r, d.default, o.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let r = u.A.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let r = m.A.getGuildId(),
                i = null != r ? c.A.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return `@${i.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let r = d.default.getUser(e.userId);
            if (null == r) return t;
            return `@${f.Ay.getUserTag(r, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
        case "timestampMentionInput": {
            let n = g(e.children, t);
            if (null == r) return `<@time:${n}>`;
            return n;
        }
        case "applicationCommand":
            return g(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = g(e.children, t);
            if (null == r) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
