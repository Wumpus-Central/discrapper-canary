"use strict";
n.d(t, { Ay: () => E, eF: () => A, lE: () => y }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(861382),
    o = n(224868),
    l = n(186306),
    u = n(22098),
    c = n(323350),
    d = n(35277),
    _ = n(711371);
let f =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    p = new Set([
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
    m = new Set(["line", "blockQuote"]),
    g = new Set(["applicationCommandOption"]);
function E(e, t, n) {
    let { isInline: r, isVoid: i, onChange: a } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || h.has(e.type)) || r(e));
    let s = null,
        o = !0;
    return (
        (e.onChange = () => {
            let r = _.VW.richValue(e);
            (r !== s || e.previewMarkdown !== o) &&
                (l.o.withMergedEntry(e, () => {
                    _.VW.withoutNormalizing(e, () => A(e, t, n));
                }),
                (s = r),
                (o = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function A(e, t, n) {
    let r = _.VW.areStylesDisabled(e);
    for (let i of _.VW.blocks(e))
        if (m.has(i[0].type)) r ? T(e, i, !0, null) : I(e, i, t, n);
        else {
            let [a, s] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let o = a.children[i];
                if (!_.l5.isText(o) && g.has(o.type)) {
                    let a = [o, _.PW.child(s, i)];
                    r ? T(e, a, !0, null) : I(e, a, t, n);
                }
            }
        }
}
function I(e, t, n, r) {
    let i = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        a = _.cv.markdown(t[0], n);
    T(e, t, i, a) && ((t = _.cv.updateElement(e, t)), (a = _.cv.markdown(t[0], n))),
        i || (y(e, t, r, a) && ((t = _.cv.updateElement(e, t)), (a = _.cv.markdown(t[0], n))), S(e, t, n, r, a));
}
function T(e, t, n, r) {
    let [i, a] = t,
        s = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let o = i.children[t];
        if (_.l5.isText(o) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !_.cv.isElement(n) || !e.isVoid(n)) continue;
            let r = !1,
                l = 0;
            for (;;) {
                let e = o.text.indexOf("\\", l);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    r = !0;
                    break;
                }
                l = e + 2;
            }
            if (r) {
                let r = _.PW.child(a, t + 1);
                d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), r), (s = !0);
            }
        } else if (_.cv.isElement(o) && e.isVoid(o)) {
            let i = _.PW.child(a, t),
                l = { path: _.PW.child(i, 0), offset: 0 };
            (n || (null != r && C(e, a, l, r))) &&
                (d.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), i), (s = !0));
        }
    }
    return s;
}
function y(e, t, n, r) {
    let i = t[1],
        a = !1,
        s = [...r.entries].reverse();
    for (let o = 0; o < s.length; o++) {
        let l,
            c = s[o],
            _ = s[o + 1];
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
            case "gameMention":
                l = { type: "gameMention", applicationId: c.data.id, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                l = { type: "timestampMentionInput", children: [{ text: c.data.content }] };
                break;
            default:
                continue;
        }
        if (!b(n, t[0], l)) continue;
        let f = (0, u.Q)(e, i, r.serializedChildren, c.start),
            p = (0, u.Q)(e, i, r.serializedChildren, c.start + c.text.length);
        d.b.textToVoid(e, l, { anchor: f, focus: p }), (a = !0);
    }
    return a;
}
function S(e, t, n, r, i) {
    let [a, s] = t,
        l = !1;
    for (let u = a.children.length - 1; u >= 0; u--) {
        let c,
            d = a.children[u];
        if (!_.l5.isText(d)) continue;
        let p = _.PW.child(s, u),
            h = [];
        for (f.lastIndex = 0; null != (c = f.exec(d.text)); ) {
            if (0 !== c.index && null == d.text.charAt(c.index - 1).match(/(\t|\s)/)) {
                f.lastIndex = c.index + 1;
                continue;
            }
            if (C(e, s, { path: p, offset: c.index }, i)) continue;
            let a = (0, o.p)(c[0], n, r);
            null != a && b(r, t[0], a)
                ? h.push({ index: c.index, length: c[0].length, node: a })
                : (f.lastIndex = c.index + 1);
        }
        for (let t of h.reverse()) v(e, [d, _.PW.child(s, u)], t.index, t.length, t.node), (l = !0);
    }
    return l;
}
function v(e, t, n, r, a) {
    let [s, o] = t,
        l = { path: o, offset: n },
        u = { path: o, offset: n + r };
    i()(l.offset >= 0 && l.offset <= s.text.length, "Failed to find valid start position for raw mention replace"),
        i()(u.offset >= 0 && u.offset <= s.text.length, "Failed to find valid end position for raw mention replace"),
        d.b.textToVoid(e, a, { anchor: l, focus: u });
}
function C(e, t, n, r) {
    let i = 0;
    for (let [r, a] of _.VW.nodes(e, { at: { anchor: _.VW.start(e, t), focus: n }, mode: "lowest" }))
        _.l5.isText(r) ? (_.PW.equals(a, n.path) ? (i += n.offset) : (i += r.text.length)) : (i += 1);
    for (let e of r.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function b(e, t, n) {
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
