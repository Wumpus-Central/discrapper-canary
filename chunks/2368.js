"use strict";
n.d(t, { Ay: () => x, eF: () => A, lE: () => I }), n(321073);
var i = n(284009),
    l = n.n(i),
    s = n(155718),
    r = n(861382),
    a = n(224868),
    o = n(186306),
    c = n(22098),
    u = n(323350),
    d = n(35277),
    h = n(711371);
let m =
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
    ]),
    f = new Set(["timestampMentionInput"]),
    g = new Set(["line", "blockQuote"]),
    _ = new Set(["applicationCommandOption"]);
function x(e, t, n) {
    let { isInline: i, isVoid: l, onChange: s } = e;
    (e.isVoid = (e) => !!p.has(e.type) || l(e)), (e.isInline = (e) => !!(p.has(e.type) || f.has(e.type)) || i(e));
    let r = null,
        a = !0;
    return (
        (e.onChange = () => {
            let i = h.VW.richValue(e);
            (i !== r || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    h.VW.withoutNormalizing(e, () => A(e, t, n));
                }),
                (r = i),
                (a = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function A(e, t, n) {
    let i = h.VW.areStylesDisabled(e);
    for (let l of h.VW.blocks(e))
        if (g.has(l[0].type)) i ? E(e, l, !0, null) : C(e, l, t, n);
        else {
            let [s, r] = l;
            for (let l = s.children.length - 1; l >= 0; l--) {
                let a = s.children[l];
                if (!h.l5.isText(a) && _.has(a.type)) {
                    let s = [a, h.PW.child(r, l)];
                    i ? E(e, s, !0, null) : C(e, s, t, n);
                }
            }
        }
}
function C(e, t, n, i) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        r = h.cv.markdown(t[0], n);
    E(e, t, s, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
        s ||
            (I(e, t, i, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
            (function (e, t, n, i, s) {
                let [r, o] = t;
                for (let c = r.children.length - 1; c >= 0; c--) {
                    let u,
                        p = r.children[c];
                    if (!h.l5.isText(p)) continue;
                    let f = h.PW.child(o, c),
                        g = [];
                    for (m.lastIndex = 0; null != (u = m.exec(p.text)); ) {
                        if (0 !== u.index && null == p.text.charAt(u.index - 1).match(/(\t|\s)/)) {
                            m.lastIndex = u.index + 1;
                            continue;
                        }
                        if (v(e, o, { path: f, offset: u.index }, s)) continue;
                        let l = (0, a.p)(u[0], n, i);
                        null != l && y(i, t[0], l)
                            ? g.push({ index: u.index, length: u[0].length, node: l })
                            : (m.lastIndex = u.index + 1);
                    }
                    for (let t of g.reverse())
                        (function (e, t, n, i, s) {
                            let [r, a] = t,
                                o = { path: a, offset: n },
                                c = { path: a, offset: n + i };
                            l()(
                                o.offset >= 0 && o.offset <= r.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                l()(
                                    c.offset >= 0 && c.offset <= r.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, s, { anchor: o, focus: c });
                        })(e, [p, h.PW.child(o, c)], t.index, t.length, t.node);
                }
            })(e, t, n, i, r));
}
function E(e, t, n, i) {
    let [l, s] = t,
        r = !1;
    for (let t = l.children.length - 1; t >= 0; t--) {
        let a = l.children[t];
        if (h.l5.isText(a) && !n) {
            let n = t < l.children.length - 1 ? l.children[t + 1] : null;
            if (null == n || !h.cv.isElement(n) || !e.isVoid(n)) continue;
            let i = !1,
                o = 0;
            for (;;) {
                let e = a.text.indexOf("\\", o);
                if (-1 === e) break;
                if (e === a.text.length - 1) {
                    i = !0;
                    break;
                }
                o = e + 2;
            }
            if (i) {
                let i = h.PW.child(s, t + 1);
                d.b.voidToText(e, (0, u.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), i), (r = !0);
            }
        } else if (h.cv.isElement(a) && e.isVoid(a)) {
            let l = h.PW.child(s, t),
                o = { path: h.PW.child(l, 0), offset: 0 };
            (n || (null != i && v(e, s, o, i))) &&
                (d.b.voidToText(e, (0, u.IQ)(a, { mode: "plain", preventEmojiSurrogates: !0 }), l), (r = !0));
        }
    }
    return r;
}
function I(e, t, n, i) {
    let l = t[1],
        s = !1,
        r = [...i.entries].reverse();
    for (let a = 0; a < r.length; a++) {
        let o,
            u = r[a],
            h = r[a + 1];
        if (null != h && h.text.endsWith("\\") && u.start === h.start + h.text.length) continue;
        switch (u.attributes[0]) {
            case "emoji":
                o = {
                    type: "emoji",
                    emoji: {
                        name: u.data.name,
                        src: u.data.src,
                        surrogate: u.data.surrogate,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                o = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: u.data.emojiId,
                        name: u.data.name,
                        animated: u.data.animated,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                o = { type: "textMention", name: u.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                o = { type: "userMention", userId: u.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                o = { type: "roleMention", roleId: u.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                o = { type: "channelMention", channelId: u.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                o = { type: "staticRouteLink", id: u.data.id, itemId: u.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                o = { type: "soundboard", guildId: u.data.guildId, soundId: u.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                o = { type: "timestamp", parsed: u.data, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                o = { type: "timestampMentionInput", children: [{ text: u.data.content }] };
                break;
            default:
                continue;
        }
        if (!y(n, t[0], o)) continue;
        let m = (0, c.Q)(e, l, i.serializedChildren, u.start),
            p = (0, c.Q)(e, l, i.serializedChildren, u.start + u.text.length);
        d.b.textToVoid(e, o, { anchor: m, focus: p }), (s = !0);
    }
    return s;
}
function v(e, t, n, i) {
    let l = 0;
    for (let [i, s] of h.VW.nodes(e, { at: { anchor: h.VW.start(e, t), focus: n }, mode: "lowest" }))
        h.l5.isText(i) ? (h.PW.equals(s, n.path) ? (l += n.offset) : (l += i.text.length)) : (l += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= l && n >= l) return !0;
    }
    return !1;
}
function y(e, t, n) {
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
            let n = null != e ? r.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
