"use strict";
n.d(t, { Ay: () => A, eF: () => C, lE: () => y }), n(321073);
var l = n(284009),
    i = n.n(l),
    s = n(155718),
    r = n(861382),
    a = n(224868),
    o = n(186306),
    c = n(22098),
    u = n(323350),
    d = n(35277),
    h = n(820066);
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
    x = new Set(["applicationCommandOption"]);
function A(e, t, n) {
    let { isInline: l, isVoid: i, onChange: s } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || f.has(e.type)) || l(e));
    let r = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = h.VW.richValue(e);
            (l !== r || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    h.VW.withoutNormalizing(e, () => C(e, t, n));
                }),
                (r = l),
                (a = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function C(e, t, n) {
    let l = h.VW.areStylesDisabled(e);
    for (let i of h.VW.blocks(e))
        if (g.has(i[0].type)) l ? I(e, i, !0, null) : E(e, i, t, n);
        else {
            let [s, r] = i;
            for (let i = s.children.length - 1; i >= 0; i--) {
                let a = s.children[i];
                if (!h.l5.isText(a) && x.has(a.type)) {
                    let s = [a, h.PW.child(r, i)];
                    l ? I(e, s, !0, null) : E(e, s, t, n);
                }
            }
        }
}
function E(e, t, n, l) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        r = h.cv.markdown(t[0], n);
    I(e, t, s, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
        s ||
            (y(e, t, l, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
            (function (e, t, n, l, s) {
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
                        if (S(e, o, { path: f, offset: u.index }, s)) continue;
                        let i = (0, a.p)(u[0], n, l);
                        null != i && v(l, t[0], i)
                            ? g.push({ index: u.index, length: u[0].length, node: i })
                            : (m.lastIndex = u.index + 1);
                    }
                    for (let t of g.reverse())
                        (function (e, t, n, l, s) {
                            let [r, a] = t,
                                o = { path: a, offset: n },
                                c = { path: a, offset: n + l };
                            i()(
                                o.offset >= 0 && o.offset <= r.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                i()(
                                    c.offset >= 0 && c.offset <= r.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, s, { anchor: o, focus: c });
                        })(e, [p, h.PW.child(o, c)], t.index, t.length, t.node);
                }
            })(e, t, n, l, r));
}
function I(e, t, n, l) {
    let [i, s] = t,
        r = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let a = i.children[t];
        if (h.l5.isText(a) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !h.cv.isElement(n) || !e.isVoid(n)) continue;
            let l = !1,
                o = 0;
            for (;;) {
                let e = a.text.indexOf("\\", o);
                if (-1 === e) break;
                if (e === a.text.length - 1) {
                    l = !0;
                    break;
                }
                o = e + 2;
            }
            if (l) {
                let l = h.PW.child(s, t + 1);
                d.b.voidToText(e, (0, u.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (r = !0);
            }
        } else if (h.cv.isElement(a) && e.isVoid(a)) {
            let i = h.PW.child(s, t),
                o = { path: h.PW.child(i, 0), offset: 0 };
            (n || (null != l && S(e, s, o, l))) &&
                (d.b.voidToText(e, (0, u.IQ)(a, { mode: "plain", preventEmojiSurrogates: !0 }), i), (r = !0));
        }
    }
    return r;
}
function y(e, t, n, l) {
    let i = t[1],
        s = !1,
        r = [...l.entries].reverse();
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
        if (!v(n, t[0], o)) continue;
        let m = (0, c.Q)(e, i, l.serializedChildren, u.start),
            p = (0, c.Q)(e, i, l.serializedChildren, u.start + u.text.length);
        d.b.textToVoid(e, o, { anchor: m, focus: p }), (s = !0);
    }
    return s;
}
function S(e, t, n, l) {
    let i = 0;
    for (let [l, s] of h.VW.nodes(e, { at: { anchor: h.VW.start(e, t), focus: n }, mode: "lowest" }))
        h.l5.isText(l) ? (h.PW.equals(s, n.path) ? (i += n.offset) : (i += l.text.length)) : (i += 1);
    for (let e of l.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function v(e, t, n) {
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
