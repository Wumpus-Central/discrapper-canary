"use strict";
n.d(t, { Ay: () => A, eF: () => C, lE: () => _ }), n(321073);
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(861382),
    a = n(224868),
    o = n(186306),
    u = n(22098),
    c = n(323350),
    d = n(35277),
    m = n(820066);
let h =
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
    f = new Set(["gameMentionInput", "timestampMentionInput"]),
    g = new Set(["line", "blockQuote"]),
    E = new Set(["applicationCommandOption"]);
function A(e, t, n) {
    let { isInline: l, isVoid: i, onChange: r } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || f.has(e.type)) || l(e));
    let s = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = m.VW.richValue(e);
            (l !== s || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    m.VW.withoutNormalizing(e, () => C(e, t, n));
                }),
                (s = l),
                (a = e.previewMarkdown)),
                r();
        }),
        e
    );
}
function C(e, t, n) {
    let l = m.VW.areStylesDisabled(e);
    for (let i of m.VW.blocks(e))
        if (g.has(i[0].type)) l ? I(e, i, !0, null) : x(e, i, t, n);
        else {
            let [r, s] = i;
            for (let i = r.children.length - 1; i >= 0; i--) {
                let a = r.children[i];
                if (!m.l5.isText(a) && E.has(a.type)) {
                    let r = [a, m.PW.child(s, i)];
                    l ? I(e, r, !0, null) : x(e, r, t, n);
                }
            }
        }
}
function x(e, t, n, l) {
    let r = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = m.cv.markdown(t[0], n);
    I(e, t, r, s) && ((t = m.cv.updateElement(e, t)), (s = m.cv.markdown(t[0], n))),
        r ||
            (_(e, t, l, s) && ((t = m.cv.updateElement(e, t)), (s = m.cv.markdown(t[0], n))),
            (function (e, t, n, l, r) {
                let [s, o] = t;
                for (let u = s.children.length - 1; u >= 0; u--) {
                    let c,
                        p = s.children[u];
                    if (!m.l5.isText(p)) continue;
                    let f = m.PW.child(o, u),
                        g = [];
                    for (h.lastIndex = 0; null != (c = h.exec(p.text)); ) {
                        if (0 !== c.index && null == p.text.charAt(c.index - 1).match(/(\t|\s)/)) {
                            h.lastIndex = c.index + 1;
                            continue;
                        }
                        if (S(e, o, { path: f, offset: c.index }, r)) continue;
                        let i = (0, a.p)(c[0], n, l);
                        null != i && y(l, t[0], i)
                            ? g.push({ index: c.index, length: c[0].length, node: i })
                            : (h.lastIndex = c.index + 1);
                    }
                    for (let t of g.reverse())
                        (function (e, t, n, l, r) {
                            let [s, a] = t,
                                o = { path: a, offset: n },
                                u = { path: a, offset: n + l };
                            i()(
                                o.offset >= 0 && o.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                i()(
                                    u.offset >= 0 && u.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, r, { anchor: o, focus: u });
                        })(e, [p, m.PW.child(o, u)], t.index, t.length, t.node);
                }
            })(e, t, n, l, s));
}
function I(e, t, n, l) {
    let [i, r] = t,
        s = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let a = i.children[t];
        if (m.l5.isText(a) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !m.cv.isElement(n) || !e.isVoid(n)) continue;
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
                let l = m.PW.child(r, t + 1);
                d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (s = !0);
            }
        } else if (m.cv.isElement(a) && e.isVoid(a)) {
            let i = m.PW.child(r, t),
                o = { path: m.PW.child(i, 0), offset: 0 };
            (n || (null != l && S(e, r, o, l))) &&
                (d.b.voidToText(e, (0, c.IQ)(a, { mode: "plain", preventEmojiSurrogates: !0 }), i), (s = !0));
        }
    }
    return s;
}
function _(e, t, n, l) {
    let i = t[1],
        r = !1,
        s = [...l.entries].reverse();
    for (let a = 0; a < s.length; a++) {
        let o,
            c = s[a],
            m = s[a + 1];
        if (null != m && m.text.endsWith("\\") && c.start === m.start + m.text.length) continue;
        switch (c.attributes[0]) {
            case "emoji":
                o = {
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
                o = {
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
                o = { type: "textMention", name: c.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                o = { type: "userMention", userId: c.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                o = { type: "roleMention", roleId: c.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                o = { type: "channelMention", channelId: c.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                o = { type: "staticRouteLink", id: c.data.id, itemId: c.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                o = { type: "soundboard", guildId: c.data.guildId, soundId: c.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                o = { type: "timestamp", parsed: c.data, children: [{ text: "" }] };
                break;
            case "gameMention": {
                let t = c.data.id,
                    n = e.mentionGames.get(t);
                o = {
                    type: "gameMention",
                    gameId: t,
                    gameName: n?.name,
                    gameIconHash: n?.icon_hash,
                    children: [{ text: "" }],
                };
                break;
            }
            case "timestampMentionInput":
                o = { type: "timestampMentionInput", children: [{ text: c.data.content }] };
                break;
            default:
                continue;
        }
        if (!y(n, t[0], o)) continue;
        let h = (0, u.Q)(e, i, l.serializedChildren, c.start),
            p = (0, u.Q)(e, i, l.serializedChildren, c.start + c.text.length);
        d.b.textToVoid(e, o, { anchor: h, focus: p }), (r = !0);
    }
    return r;
}
function S(e, t, n, l) {
    let i = 0;
    for (let [l, r] of m.VW.nodes(e, { at: { anchor: m.VW.start(e, t), focus: n }, mode: "lowest" }))
        m.l5.isText(l) ? (m.PW.equals(r, n.path) ? (i += n.offset) : (i += l.text.length)) : (i += 1);
    for (let e of l.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function y(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case r.n4.CHANNEL:
            return "channelMention" === n.type;
        case r.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case r.n4.USER:
            return "userMention" === n.type;
        case r.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case r.n4.STRING: {
            let n = null != e ? s.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
