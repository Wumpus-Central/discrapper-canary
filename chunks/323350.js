n.d(t, { IQ: () => f, WO: () => p }), n(321073);
var i = n(284009),
    r = n.n(i),
    l = n(47167),
    a = n(379418),
    s = n(209932),
    o = n(734057),
    d = n(317525),
    u = n(994500),
    c = n(967198),
    h = n(287809),
    E = n(427262),
    _ = n(820066);
function p(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r } = t ?? {},
        [l, a] = t?.range != null ? _.ZF.edges(t.range) : [void 0, void 0];
    return A(e, { mode: n, start: l, end: a, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r });
}
function A(e, t) {
    let {
            mode: n,
            start: i,
            end: r,
            separator: l,
            ignoreEmptyNodes: a,
            ignoreTrailingEmptyNodes: s,
            preventEmojiSurrogates: o,
        } = t ?? {},
        d = e.length > 0 && !_.l5.isText(e[0]);
    null == l && (l = d ? "\n" : "");
    let u = i?.path[0] ?? 0,
        c = r?.path[0] ?? e.length - 1;
    if (s)
        for (let t = c; t >= u; t--) {
            let n = e[t];
            if (_.l5.isText(n)) {
                if (n.text.length > 0) {
                    c = t;
                    break;
                }
            } else if (!_.cv.isEmpty(n)) {
                c = t;
                break;
            }
            if (t === u) return "";
        }
    let h = u > 0 && _.AS.isType(e[u - 1], "blockQuote"),
        E = _.AS.isType(e[u], "blockQuote"),
        p = _.AS.isType(e[c], "blockQuote"),
        A = [];
    for (let t = u; t <= c; t++) {
        let l = e[t];
        if (a && _.l5.isText(l) && 0 === l.text.length) continue;
        let s = f(l, {
            mode: n,
            start: null != i && t === u ? { path: i.path.slice(1), offset: i.offset } : void 0,
            end: null != r && t === c ? { path: r.path.slice(1), offset: r.offset } : void 0,
            allowBlockQuotePrefix: null == i || null == r || (!h && (!E || p)),
            preventEmojiSurrogates: o,
        });
        (!a || s.length > 0) && A.push(s);
    }
    return A.join(l);
}
function f(e, t) {
    let { mode: n, start: i, allowBlockQuotePrefix: p = !1, preventEmojiSurrogates: f = !1 } = t ?? {};
    if (_.l5.isText(e))
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
            return A(e.children, t);
        case "testInlineVoid":
            return "";
        case "blockQuote": {
            let n = A(e.children, t),
                r = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (p && (null == i || r)) return `> ${n}`;
            return n;
        }
        case "emoji": {
            let t = e.emoji;
            if (!f && null != t.surrogate) return t.surrogate;
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
            return (0, l.m1)(i, h.default, u.A, !0, !0);
        }
        case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let i = s.A.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? `<id:${e.id}:${e.itemId}>` : `<id:${e.id}>`;
        case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let i = c.A.getGuildId(),
                r = null != i ? d.A.getRole(i, e.roleId) : void 0;
            if (null == r) return t;
            return `@${r.name}`;
        }
        case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let i = h.default.getUser(e.userId);
            if (null == i) return t;
            return `@${E.Ay.getUserTag(i, { decoration: "never" })}`;
        }
        case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
        case "timestamp":
            return (0, a.tf)(e.parsed.timestamp, e.parsed.format);
        case "timestampMentionInput": {
            let n = A(e.children, t);
            if (null == i) return `<@time:${n}>`;
            return n;
        }
        case "applicationCommand":
            return A(e.children, { ...t, separator: " ", ignoreEmptyNodes: !0 });
        case "applicationCommandOption": {
            let n = A(e.children, t);
            if (null == i) return `${e.optionDisplayName}:${n}`;
            return n;
        }
    }
}
