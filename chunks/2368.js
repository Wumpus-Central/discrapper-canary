"use strict";
n.d(t, { Ay: () => g, eF: () => A, lE: () => S }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(155718),
    a = n(861382),
    o = n(224868),
    l = n(186306),
    u = n(22098),
    c = n(323350),
    d = n(35277),
    _ = n(820066);
let h =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    f = new Set([
        "emoji",
        "customEmoji",
        "textMention",
        "userMention",
        "roleMention",
        "channelMention",
        "staticRouteLink",
        "soundboard",
        "timestamp",
        "gameMention",
    ]),
    E = new Set(["gameMentionInput", "timestampMentionInput"]),
    p = new Set(["line", "blockQuote"]),
    m = new Set(["applicationCommandOption"]);
function g(e, t, n) {
    let { isInline: i, isVoid: r, onChange: s } = e;
    (e.isVoid = (e) => !!f.has(e.type) || r(e)), (e.isInline = (e) => !!(f.has(e.type) || E.has(e.type)) || i(e));
    let a = null,
        o = !0;
    return (
        (e.onChange = () => {
            let i = _.VW.richValue(e);
            (i !== a || e.previewMarkdown !== o) &&
                (l.o.withMergedEntry(e, () => {
                    _.VW.withoutNormalizing(e, () => A(e, t, n));
                }),
                (a = i),
                (o = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function A(e, t, n) {
    let i = _.VW.areStylesDisabled(e);
    for (let r of _.VW.blocks(e))
        if (p.has(r[0].type)) i ? T(e, r, !0, null) : I(e, r, t, n);
        else {
            let [s, a] = r;
            for (let r = s.children.length - 1; r >= 0; r--) {
                let o = s.children[r];
                if (!_.l5.isText(o) && m.has(o.type)) {
                    let s = [o, _.PW.child(a, r)];
                    i ? T(e, s, !0, null) : I(e, s, t, n);
                }
            }
        }
}
function I(e, t, n, i) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        a = _.cv.markdown(t[0], n);
    T(e, t, s, a) && ((t = _.cv.updateElement(e, t)), (a = _.cv.markdown(t[0], n))),
        s ||
            (S(e, t, i, a) && ((t = _.cv.updateElement(e, t)), (a = _.cv.markdown(t[0], n))),
            (function (e, t, n, i, s) {
                let [a, l] = t,
                    u = C(e, l);
                for (let c = a.children.length - 1; c >= 0; c--) {
                    let f,
                        E = a.children[c];
                    if (!_.l5.isText(E)) continue;
                    let p = _.PW.child(l, c),
                        m = [];
                    for (h.lastIndex = 0; null != (f = h.exec(E.text)); ) {
                        if (0 !== f.index && null == E.text.charAt(f.index - 1).match(/(\t|\s)/)) {
                            h.lastIndex = f.index + 1;
                            continue;
                        }
                        if (y(u, { path: p, offset: f.index }, s)) continue;
                        let e = (0, o.p)(f[0], n, i);
                        null != e && O(i, t[0], e)
                            ? m.push({ index: f.index, length: f[0].length, node: e })
                            : (h.lastIndex = f.index + 1);
                    }
                    for (let t of m.reverse())
                        (function (e, t, n, i, s) {
                            let [a, o] = t,
                                l = { path: o, offset: n },
                                u = { path: o, offset: n + i };
                            r()(
                                l.offset >= 0 && l.offset <= a.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                r()(
                                    u.offset >= 0 && u.offset <= a.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, s, { anchor: l, focus: u });
                        })(e, [E, _.PW.child(l, c)], t.index, t.length, t.node);
                }
            })(e, t, n, i, a));
}
function T(e, t, n, i) {
    let [r, s] = t,
        a = !1,
        o = n || null == i ? null : C(e, s);
    for (let t = r.children.length - 1; t >= 0; t--) {
        let l = r.children[t];
        if (_.l5.isText(l) && !n) {
            let n = t < r.children.length - 1 ? r.children[t + 1] : null;
            if (null == n || !_.cv.isElement(n) || !e.isVoid(n)) continue;
            let i = !1,
                o = 0;
            for (;;) {
                let e = l.text.indexOf("\\", o);
                if (-1 === e) break;
                if (e === l.text.length - 1) {
                    i = !0;
                    break;
                }
                o = e + 2;
            }
            if (i) {
                let i = _.PW.child(s, t + 1);
                d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), i), (a = !0);
            }
        } else if (_.cv.isElement(l) && e.isVoid(l)) {
            let r = _.PW.child(s, t),
                u = { path: _.PW.child(r, 0), offset: 0 };
            (n || (null != i && y(o, u, i))) &&
                (d.b.voidToText(e, (0, c.IQ)(l, { mode: "plain", preventEmojiSurrogates: !0 }), r), (a = !0));
        }
    }
    return a;
}
function S(e, t, n, i) {
    let r = t[1],
        s = !1,
        a = [...i.entries].reverse();
    for (let o = 0; o < a.length; o++) {
        let l,
            c = a[o],
            _ = a[o + 1];
        if (null != _ && _.text.endsWith("\\") && c.start === _.start + _.text.length) continue;
        switch (c.attributes[0]) {
            case "emoji":
                l = {
                    type: "emoji",
                    emoji: {
                        name: c.data.name,
                        src: c.data.src,
                        surrogate: c.data.surrogate,
                        jumboable: !0 === c.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                l = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: c.data.emojiId,
                        name: c.data.name,
                        animated: c.data.animated,
                        jumboable: !0 === c.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                l = { type: "textMention", name: c.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                l = { type: "userMention", userId: c.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                l = { type: "roleMention", roleId: c.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                l = { type: "channelMention", channelId: c.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                l = { type: "staticRouteLink", id: c.data.id, itemId: c.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                l = { type: "soundboard", guildId: c.data.guildId, soundId: c.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                l = { type: "timestamp", parsed: c.data, children: [{ text: "" }] };
                break;
            case "gameMention": {
                let t = c.data.id,
                    n = e.mentionGames.get(t);
                l = { type: "gameMention", gameId: t, gameName: n?.name, gameIcon: n?.icon, children: [{ text: "" }] };
                break;
            }
            case "timestampMentionInput":
                l = { type: "timestampMentionInput", children: [{ text: c.data.content }] };
                break;
            default:
                continue;
        }
        if (!O(n, t[0], l)) continue;
        let h = (0, u.Q)(e, r, i.serializedChildren, c.start),
            f = (0, u.Q)(e, r, i.serializedChildren, c.start + c.text.length);
        d.b.textToVoid(e, l, { anchor: h, focus: f }), (s = !0);
    }
    return s;
}
function N(e) {
    return e.join(",");
}
function C(e, t) {
    let n = new Map(),
        i = _.VW.nodes(e, { at: { anchor: _.VW.start(e, t), focus: _.VW.end(e, t) }, mode: "lowest" }),
        r = 0;
    for (let [e, t] of i) n.set(N(t), r), (r += _.l5.isText(e) ? e.text.length : 1);
    return n;
}
function y(e, t, n) {
    if (null == e) return !1;
    let i = e.get(N(t.path));
    if (null != i) i += t.offset;
    else {
        let n = e.get(N(_.PW.parent(t.path)));
        if (null == n) return !1;
        i = n + 1;
    }
    for (let e of n.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function O(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case s.n4.CHANNEL:
            return "channelMention" === n.type;
        case s.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case s.n4.USER:
            return "userMention" === n.type;
        case s.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case s.n4.STRING: {
            let n = null != e ? a.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
