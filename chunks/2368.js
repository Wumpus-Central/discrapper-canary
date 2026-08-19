"use strict";
n.d(t, { Ay: () => A, eF: () => E, lE: () => y }), n(321073);
var l = n(284009),
    i = n.n(l),
    s = n(155718),
    r = n(861382),
    a = n(224868),
    o = n(186306),
    u = n(22098),
    c = n(323350),
    d = n(35277),
    h = n(820066);
let m =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\\\\|\\"|(?!")[^\\])+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
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
    p = new Set(["gameMentionInput", "timestampMentionInput"]),
    g = new Set(["line", "blockQuote"]),
    x = new Set(["applicationCommandOption"]);
function A(e, t, n) {
    let { isInline: l, isVoid: i, onChange: s } = e;
    (e.isVoid = (e) => !!f.has(e.type) || i(e)), (e.isInline = (e) => !!(f.has(e.type) || p.has(e.type)) || l(e));
    let r = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = h.VW.richValue(e);
            (l !== r || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    h.VW.withoutNormalizing(e, () => E(e, t, n));
                }),
                (r = l),
                (a = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function E(e, t, n) {
    let l = h.VW.areStylesDisabled(e);
    for (let i of h.VW.blocks(e))
        if (g.has(i[0].type)) l ? I(e, i, !0, null) : C(e, i, t, n);
        else {
            let [s, r] = i;
            for (let i = s.children.length - 1; i >= 0; i--) {
                let a = s.children[i];
                if (!h.l5.isText(a) && x.has(a.type)) {
                    let s = [a, h.PW.child(r, i)];
                    l ? I(e, s, !0, null) : C(e, s, t, n);
                }
            }
        }
}
function C(e, t, n, l) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        r = h.cv.markdown(t[0], n);
    I(e, t, s, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
        !s &&
            ((function (e, t, n, l, s) {
                let [r, o] = t,
                    u = !1,
                    c = v(e, o);
                for (let f = r.children.length - 1; f >= 0; f--) {
                    let p,
                        g = r.children[f];
                    if (!h.l5.isText(g)) continue;
                    let x = h.PW.child(o, f),
                        A = [];
                    for (m.lastIndex = 0; null != (p = m.exec(g.text)); ) {
                        if (0 !== p.index && null == g.text.charAt(p.index - 1).match(/(\t|\s)/)) {
                            m.lastIndex = p.index + 1;
                            continue;
                        }
                        if (_(c, { path: x, offset: p.index }, s)) continue;
                        let e = (0, a.p)(p[0], n, l);
                        null != e && N(l, t[0], e)
                            ? A.push({ index: p.index, length: p[0].length, node: e })
                            : (m.lastIndex = p.index + 1);
                    }
                    for (let t of A.reverse())
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
                        })(e, [g, h.PW.child(o, f)], t.index, t.length, t.node),
                            (u = !0);
                }
                return u;
            })(e, t, n, l, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))),
            y(e, t, l, r) && ((t = h.cv.updateElement(e, t)), (r = h.cv.markdown(t[0], n))));
}
function I(e, t, n, l) {
    let [i, s] = t,
        r = !1,
        a = n || null == l ? null : v(e, s);
    for (let t = i.children.length - 1; t >= 0; t--) {
        let o = i.children[t];
        if (h.l5.isText(o) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !h.cv.isElement(n) || !e.isVoid(n)) continue;
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
                let l = h.PW.child(s, t + 1);
                d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (r = !0);
            }
        } else if (h.cv.isElement(o) && e.isVoid(o)) {
            let i = h.PW.child(s, t),
                u = { path: h.PW.child(i, 0), offset: 0 };
            (n || (null != l && _(a, u, l))) &&
                (d.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), i), (r = !0));
        }
    }
    return r;
}
function y(e, t, n, l) {
    let i = t[1],
        s = !1,
        r = [...l.entries].reverse(),
        a = l.serializedChildren.join(""),
        o = a.includes('#"');
    for (let c = 0; c < r.length; c++) {
        let h,
            m = r[c],
            f = r[c + 1];
        if (null != f && f.text.endsWith("\\") && m.start === f.start + f.text.length) continue;
        switch (m.attributes[0]) {
            case "emoji":
                if (
                    o &&
                    (function (e, t) {
                        let n = e.substring(0, t),
                            l = n.lastIndexOf('#"');
                        if (-1 === l) return !1;
                        let i = n.substring(l + 2);
                        for (let e = 0; e < i.length; e++)
                            if ("\\" === i[e]) e++;
                            else if ('"' === i[e]) return !1;
                        return !0;
                    })(a, m.start)
                )
                    continue;
                h = {
                    type: "emoji",
                    emoji: {
                        name: m.data.name,
                        src: m.data.src,
                        surrogate: m.data.surrogate,
                        jumboable: !0 === m.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                h = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: m.data.emojiId,
                        name: m.data.name,
                        animated: m.data.animated,
                        jumboable: !0 === m.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                h = { type: "textMention", name: m.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                h = { type: "userMention", userId: m.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                h = { type: "roleMention", roleId: m.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                h = { type: "channelMention", channelId: m.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                h = { type: "staticRouteLink", id: m.data.id, itemId: m.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                h = { type: "soundboard", guildId: m.data.guildId, soundId: m.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                h = { type: "timestamp", parsed: m.data, children: [{ text: "" }] };
                break;
            case "gameMention":
                h = { type: "gameMention", gameId: m.data.id, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                h = { type: "timestampMentionInput", children: [{ text: m.data.content }] };
                break;
            default:
                continue;
        }
        if (!N(n, t[0], h)) continue;
        let p = (0, u.Q)(e, i, l.serializedChildren, m.start),
            g = (0, u.Q)(e, i, l.serializedChildren, m.start + m.text.length);
        d.b.textToVoid(e, h, { anchor: p, focus: g }), (s = !0);
    }
    return s;
}
function S(e) {
    return e.join(",");
}
function v(e, t) {
    let n = new Map(),
        l = h.VW.nodes(e, { at: { anchor: h.VW.start(e, t), focus: h.VW.end(e, t) }, mode: "lowest" }),
        i = 0;
    for (let [e, t] of l) n.set(S(t), i), (i += h.l5.isText(e) ? e.text.length : 1);
    return n;
}
function _(e, t, n) {
    if (null == e) return !1;
    let l = e.get(S(t.path));
    if (null != l) l += t.offset;
    else {
        let n = e.get(S(h.PW.parent(t.path)));
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
function N(e, t, n) {
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
