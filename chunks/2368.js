"use strict";
n.d(t, { Ay: () => p, eF: () => T, lE: () => S }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(155718),
    s = n(861382),
    l = n(224868),
    o = n(186306),
    d = n(22098),
    c = n(323350),
    u = n(35277),
    _ = n(820066);
let E =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\\\\|\\"|(?!")[^\\])+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    A = new Set([
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
    h = new Set(["gameMentionInput", "timestampMentionInput"]),
    I = new Set(["line", "blockQuote"]),
    f = new Set(["applicationCommandOption"]);
function p(e, t, n) {
    let { isInline: i, isVoid: r, onChange: a } = e;
    (e.isVoid = (e) => !!A.has(e.type) || r(e)), (e.isInline = (e) => !!(A.has(e.type) || h.has(e.type)) || i(e));
    let s = null,
        l = !0;
    return (
        (e.onChange = () => {
            let i = _.VW.richValue(e);
            (i !== s || e.previewMarkdown !== l) &&
                (o.o.withMergedEntry(e, () => {
                    _.VW.withoutNormalizing(e, () => T(e, t, n));
                }),
                (s = i),
                (l = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function T(e, t, n) {
    let i = _.VW.areStylesDisabled(e);
    for (let r of _.VW.blocks(e))
        if (I.has(r[0].type)) i ? g(e, r, !0, null) : m(e, r, t, n);
        else {
            let [a, s] = r;
            for (let r = a.children.length - 1; r >= 0; r--) {
                let l = a.children[r];
                if (!_.l5.isText(l) && f.has(l.type)) {
                    let a = [l, _.PW.child(s, r)];
                    i ? g(e, a, !0, null) : m(e, a, t, n);
                }
            }
        }
}
function m(e, t, n, i) {
    let a = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = _.cv.markdown(t[0], n);
    g(e, t, a, s) && ((t = _.cv.updateElement(e, t)), (s = _.cv.markdown(t[0], n))),
        !a &&
            ((function (e, t, n, i, a) {
                let [s, o] = t,
                    d = !1,
                    c = C(e, o);
                for (let A = s.children.length - 1; A >= 0; A--) {
                    let h,
                        I = s.children[A];
                    if (!_.l5.isText(I)) continue;
                    let f = _.PW.child(o, A),
                        p = [];
                    for (E.lastIndex = 0; null != (h = E.exec(I.text)); ) {
                        if (0 !== h.index && null == I.text.charAt(h.index - 1).match(/(\t|\s)/)) {
                            E.lastIndex = h.index + 1;
                            continue;
                        }
                        if (O(c, { path: f, offset: h.index }, a)) continue;
                        let e = (0, l.p)(h[0], n, i);
                        null != e && R(i, t[0], e)
                            ? p.push({ index: h.index, length: h[0].length, node: e })
                            : (E.lastIndex = h.index + 1);
                    }
                    for (let t of p.reverse())
                        (function (e, t, n, i, a) {
                            let [s, l] = t,
                                o = { path: l, offset: n },
                                d = { path: l, offset: n + i };
                            r()(
                                o.offset >= 0 && o.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                r()(
                                    d.offset >= 0 && d.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                u.b.textToVoid(e, a, { anchor: o, focus: d });
                        })(e, [I, _.PW.child(o, A)], t.index, t.length, t.node),
                            (d = !0);
                }
                return d;
            })(e, t, n, i, s) && ((t = _.cv.updateElement(e, t)), (s = _.cv.markdown(t[0], n))),
            S(e, t, i, s) && ((t = _.cv.updateElement(e, t)), (s = _.cv.markdown(t[0], n))));
}
function g(e, t, n, i) {
    let [r, a] = t,
        s = !1,
        l = n || null == i ? null : C(e, a);
    for (let t = r.children.length - 1; t >= 0; t--) {
        let o = r.children[t];
        if (_.l5.isText(o) && !n) {
            let n = t < r.children.length - 1 ? r.children[t + 1] : null;
            if (null == n || !_.cv.isElement(n) || !e.isVoid(n)) continue;
            let i = !1,
                l = 0;
            for (;;) {
                let e = o.text.indexOf("\\", l);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    i = !0;
                    break;
                }
                l = e + 2;
            }
            if (i) {
                let i = _.PW.child(a, t + 1);
                u.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), i), (s = !0);
            }
        } else if (_.cv.isElement(o) && e.isVoid(o)) {
            let r = _.PW.child(a, t),
                d = { path: _.PW.child(r, 0), offset: 0 };
            (n || (null != i && O(l, d, i))) &&
                (u.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), r), (s = !0));
        }
    }
    return s;
}
function S(e, t, n, i) {
    let r = t[1],
        a = !1,
        s = [...i.entries].reverse(),
        l = i.serializedChildren.join(""),
        o = l.includes('#"');
    for (let c = 0; c < s.length; c++) {
        let _,
            E = s[c],
            A = s[c + 1];
        if (null != A && A.text.endsWith("\\") && E.start === A.start + A.text.length) continue;
        switch (E.attributes[0]) {
            case "emoji":
                if (
                    o &&
                    (function (e, t) {
                        let n = e.substring(0, t),
                            i = n.lastIndexOf('#"');
                        if (-1 === i) return !1;
                        let r = n.substring(i + 2);
                        for (let e = 0; e < r.length; e++)
                            if ("\\" === r[e]) e++;
                            else if ('"' === r[e]) return !1;
                        return !0;
                    })(l, E.start)
                )
                    continue;
                _ = {
                    type: "emoji",
                    emoji: {
                        name: E.data.name,
                        src: E.data.src,
                        surrogate: E.data.surrogate,
                        jumboable: !0 === E.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                _ = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: E.data.emojiId,
                        name: E.data.name,
                        animated: E.data.animated,
                        jumboable: !0 === E.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                _ = { type: "textMention", name: E.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                _ = { type: "userMention", userId: E.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                _ = { type: "roleMention", roleId: E.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                _ = { type: "channelMention", channelId: E.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                _ = { type: "staticRouteLink", id: E.data.id, itemId: E.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                _ = { type: "soundboard", guildId: E.data.guildId, soundId: E.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                _ = { type: "timestamp", parsed: E.data, children: [{ text: "" }] };
                break;
            case "gameMention":
                _ = { type: "gameMention", gameId: E.data.id, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                _ = { type: "timestampMentionInput", children: [{ text: E.data.content }] };
                break;
            default:
                continue;
        }
        if (!R(n, t[0], _)) continue;
        let h = (0, d.Q)(e, r, i.serializedChildren, E.start),
            I = (0, d.Q)(e, r, i.serializedChildren, E.start + E.text.length);
        u.b.textToVoid(e, _, { anchor: h, focus: I }), (a = !0);
    }
    return a;
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
function O(e, t, n) {
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
function R(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case a.n4.CHANNEL:
            return "channelMention" === n.type;
        case a.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case a.n4.USER:
            return "userMention" === n.type;
        case a.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case a.n4.STRING: {
            let n = null != e ? s.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
