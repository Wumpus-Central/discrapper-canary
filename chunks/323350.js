n.d(t, {
    IQ: () => O,
    WO: () => b,
}),
    n(896048),
    n(321073),
    n(747238),
    n(812715);
var r = n(284009),
    i = n.n(r),
    a = n(47167),
    s = n(379418),
    o = n(209932),
    l = n(734057),
    c = n(317525),
    u = n(994500),
    d = n(967198),
    f = n(287809),
    p = n(427262),
    _ = n(711371);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = null != t ? t : {},
        [a, s] = (null == t ? void 0 : t.range) != null ? _.ZF.edges(t.range) : [void 0, void 0];
    return y(e, {
        mode: n,
        start: a,
        end: s,
        ignoreTrailingEmptyNodes: r,
        preventEmojiSurrogates: i,
    });
}
function y(e, t) {
    var n, r;
    let {
            mode: i,
            start: a,
            end: s,
            separator: o,
            ignoreEmptyNodes: l,
            ignoreTrailingEmptyNodes: c,
            preventEmojiSurrogates: u,
        } = null != t ? t : {},
        d = e.length > 0 && !_.l5.isText(e[0]);
    null == o && (o = d ? "\n" : "");
    let f = null != (n = null == a ? void 0 : a.path[0]) ? n : 0,
        p = null != (r = null == s ? void 0 : s.path[0]) ? r : e.length - 1;
    if (c)
        for (let t = p; t >= f; t--) {
            let n = e[t];
            if (_.l5.isText(n)) {
                if (n.text.length > 0) {
                    p = t;
                    break;
                }
            } else if (!_.cv.isEmpty(n)) {
                p = t;
                break;
            }
            if (t === f) return "";
        }
    let h = f > 0 && _.AS.isType(e[f - 1], "blockQuote"),
        m = _.AS.isType(e[f], "blockQuote"),
        g = _.AS.isType(e[p], "blockQuote"),
        E = [];
    for (let t = f; t <= p; t++) {
        let n = e[t];
        if (l && _.l5.isText(n) && 0 === n.text.length) continue;
        let r = O(n, {
            mode: i,
            start:
                null != a && t === f
                    ? {
                          path: a.path.slice(1),
                          offset: a.offset,
                      }
                    : void 0,
            end:
                null != s && t === p
                    ? {
                          path: s.path.slice(1),
                          offset: s.offset,
                      }
                    : void 0,
            allowBlockQuotePrefix: null == a || null == s || (!h && (!m || g)),
            preventEmojiSurrogates: u,
        });
        (!l || r.length > 0) && E.push(r);
    }
    return E.join(o);
}
function O(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: i = !1, preventEmojiSurrogates: h = !1 } = null != t ? t : {};
    if (_.l5.isText(e)) return A(e.text, t);
    switch (e.type) {
        case "gameMentionInput":
        case "testInlineVoid":
            return "";
        case "line":
        case "testInline":
            return y(e.children, t);
        case "blockQuote": {
            let n = y(e.children, t),
                a = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (i && (null == r || a)) return "> ".concat(n);
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
                return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">");
            }
            return t.name;
        }
        case "textMention":
            return e.name;
        case "channelMention": {
            let t = "<#".concat(e.channelId, ">");
            if ("raw" === n) return t;
            let r = l.A.getChannel(e.channelId);
            if (null == r) return t;
            return (0, a.m1)(r, f.default, u.A, !0, !0);
        }
        case "soundboard": {
            let t = "<sound:".concat(e.guildId, ":").concat(e.soundId, ">");
            if ("raw" === n) return t;
            let r = o.A.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case "staticRouteLink":
            return null != e.itemId ? "<id:".concat(e.id, ":").concat(e.itemId, ">") : "<id:".concat(e.id, ">");
        case "roleMention": {
            let t = "<@&".concat(e.roleId, ">");
            if ("raw" === n) return t;
            let r = d.A.getGuildId(),
                i = null != r ? c.A.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return "@".concat(i.name);
        }
        case "userMention": {
            let t = "<@".concat(e.userId, ">");
            if ("raw" === n) return t;
            let r = f.default.getUser(e.userId);
            if (null == r) return t;
            return "@".concat(p.Ay.getUserTag(r, { decoration: "never" }));
        }
        case "commandMention":
            return "</".concat(e.commandName, ":").concat(e.commandId, ">");
        case "timestamp":
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
        case "gameMention":
            return "<@$".concat(e.applicationId, ">");
        case "timestampMentionInput": {
            let n = y(e.children, t);
            if (null == r) return "<@time:".concat(n, ">");
            return n;
        }
        case "applicationCommand":
            return y(
                e.children,
                E(m({}, t), {
                    separator: " ",
                    ignoreEmptyNodes: !0,
                }),
            );
        case "applicationCommandOption": {
            let n = y(e.children, t);
            if (null == r) return "".concat(e.optionDisplayName, ":").concat(n);
            return n;
        }
    }
}
function A(e, t) {
    var n, r;
    let { start: a, end: s } = null != t ? t : {};
    return (
        i()(null == a || 0 === a.path.length, "Invalid start provided to serializeText"),
        i()(null == s || 0 === s.path.length, "Invalid end provided to serializeText"),
        e.substring(
            null != (n = null == a ? void 0 : a.offset) ? n : 0,
            null != (r = null == s ? void 0 : s.offset) ? r : e.length,
        )
    );
}
