"use strict";
n.d(t, { Ay: () => A, eF: () => C, lE: () => _ }), n(321073);
var l = n(284009),
    i = n.n(l),
    s = n(155718),
    r = n(861382),
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
    let { isInline: l, isVoid: i, onChange: s } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || f.has(e.type)) || l(e));
    let r = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = m.VW.richValue(e);
            (l !== r || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    m.VW.withoutNormalizing(e, () => C(e, t, n));
                }),
                (r = l),
                (a = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function C(e, t, n) {
    let l = m.VW.areStylesDisabled(e);
    for (let i of m.VW.blocks(e))
        if (g.has(i[0].type)) l ? I(e, i, !0, null) : x(e, i, t, n);
        else {
            let [s, r] = i;
            for (let i = s.children.length - 1; i >= 0; i--) {
                let a = s.children[i];
                if (!m.l5.isText(a) && E.has(a.type)) {
                    let s = [a, m.PW.child(r, i)];
                    l ? I(e, s, !0, null) : x(e, s, t, n);
                }
            }
        }
}
function x(e, t, n, l) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        r = m.cv.markdown(t[0], n);
    I(e, t, s, r) && ((t = m.cv.updateElement(e, t)), (r = m.cv.markdown(t[0], n))),
        s ||
            (_(e, t, l, r) && ((t = m.cv.updateElement(e, t)), (r = m.cv.markdown(t[0], n))),
            (function (e, t, n, l, s) {
                let [r, o] = t,
                    u = y(e, o);
                for (let c = r.children.length - 1; c >= 0; c--) {
                    let p,
                        f = r.children[c];
                    if (!m.l5.isText(f)) continue;
                    let g = m.PW.child(o, c),
                        E = [];
                    for (h.lastIndex = 0; null != (p = h.exec(f.text)); ) {
                        if (0 !== p.index && null == f.text.charAt(p.index - 1).match(/(\t|\s)/)) {
                            h.lastIndex = p.index + 1;
                            continue;
                        }
                        if (v(u, { path: g, offset: p.index }, s)) continue;
                        let e = (0, a.p)(p[0], n, l);
                        null != e && T(l, t[0], e)
                            ? E.push({ index: p.index, length: p[0].length, node: e })
                            : (h.lastIndex = p.index + 1);
                    }
                    for (let t of E.reverse())
                        (function (e, t, n, l, s) {
                            let [r, a] = t,
                                o = { path: a, offset: n },
                                u = { path: a, offset: n + l };
                            i()(
                                o.offset >= 0 && o.offset <= r.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                i()(
                                    u.offset >= 0 && u.offset <= r.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, s, { anchor: o, focus: u });
                        })(e, [f, m.PW.child(o, c)], t.index, t.length, t.node);
                }
            })(e, t, n, l, r));
}
function I(e, t, n, l) {
    let [i, s] = t,
        r = !1,
        a = n || null == l ? null : y(e, s);
    for (let t = i.children.length - 1; t >= 0; t--) {
        let o = i.children[t];
        if (m.l5.isText(o) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !m.cv.isElement(n) || !e.isVoid(n)) continue;
            let l = !1,
                a = 0;
            for (;;) {
                let e = o.text.indexOf("\\", a);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    l = !0;
                    break;
                }
                a = e + 2;
            }
            if (l) {
                let l = m.PW.child(s, t + 1);
                d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (r = !0);
            }
        } else if (m.cv.isElement(o) && e.isVoid(o)) {
            let i = m.PW.child(s, t),
                u = { path: m.PW.child(i, 0), offset: 0 };
            (n || (null != l && v(a, u, l))) &&
                (d.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), i), (r = !0));
        }
    }
    return r;
}
function _(e, t, n, l) {
    let i = t[1],
        s = !1,
        r = [...l.entries].reverse();
    for (let a = 0; a < r.length; a++) {
        let o,
            c = r[a],
            m = r[a + 1];
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
        if (!T(n, t[0], o)) continue;
        let h = (0, u.Q)(e, i, l.serializedChildren, c.start),
            p = (0, u.Q)(e, i, l.serializedChildren, c.start + c.text.length);
        d.b.textToVoid(e, o, { anchor: h, focus: p }), (s = !0);
    }
    return s;
}
function S(e) {
    return e.join(",");
}
function y(e, t) {
    let n = new Map(),
        l = m.VW.nodes(e, { at: { anchor: m.VW.start(e, t), focus: m.VW.end(e, t) }, mode: "lowest" }),
        i = 0;
    for (let [e, t] of l) n.set(S(t), i), (i += m.l5.isText(e) ? e.text.length : 1);
    return n;
}
function v(e, t, n) {
    if (null == e) return !1;
    let l = e.get(S(t.path));
    if (null != l) l += t.offset;
    else {
        let n = e.get(S(m.PW.parent(t.path)));
        if (null == n) return !1;
        l = n + 1;
    }
    for (let e of n.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= l && n >= l) return !0;
    }
    return !1;
}
function T(e, t, n) {
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
