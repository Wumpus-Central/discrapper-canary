(n.d(t, { Ay: () => C, eF: () => E, lE: () => S }), n(321073));
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
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\\\\|\\"|(?!")[^\\])+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
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
    f = new Set(["textMention", "userMention", "roleMention", "channelMention"]),
    g = new Set(["gameMentionInput", "timestampMentionInput"]),
    x = new Set(["line", "blockQuote"]),
    A = new Set(["applicationCommandOption"]);
function C(e, t, n) {
    let { isInline: l, isVoid: i, onChange: s } = e;
    ((e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || g.has(e.type)) || l(e)));
    let r = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = m.VW.richValue(e);
            ((l !== r || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    m.VW.withoutNormalizing(e, () => E(e, t, n));
                }),
                (r = l),
                (a = e.previewMarkdown)),
                s());
        }),
        e
    );
}
function E(e, t, n) {
    let l = m.VW.areStylesDisabled(e);
    for (let i of m.VW.blocks(e))
        if (x.has(i[0].type)) l ? y(e, i, !0, null) : I(e, i, t, n);
        else {
            let [s, r] = i;
            for (let i = s.children.length - 1; i >= 0; i--) {
                let a = s.children[i];
                if (!m.l5.isText(a) && A.has(a.type)) {
                    let s = [a, m.PW.child(r, i)];
                    l ? y(e, s, !0, null) : I(e, s, t, n);
                }
            }
        }
}
function I(e, t, n, l) {
    let s = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        r = m.cv.markdown(t[0], n);
    (y(e, t, s, r) && ((t = m.cv.updateElement(e, t)), (r = m.cv.markdown(t[0], n))),
        !s &&
            ((function (e, t, n, l, s) {
                let [r, o] = t,
                    u = !1,
                    c = N(e, o);
                for (let p = r.children.length - 1; p >= 0; p--) {
                    let f,
                        g = r.children[p];
                    if (!m.l5.isText(g)) continue;
                    let x = m.PW.child(o, p),
                        A = [];
                    for (h.lastIndex = 0; null != (f = h.exec(g.text));) {
                        if (0 !== f.index && null == g.text.charAt(f.index - 1).match(/(\t|\s)/)) {
                            h.lastIndex = f.index + 1;
                            continue;
                        }
                        if (_(c, { path: x, offset: f.index }, s)) continue;
                        let i = (0, a.p)(f[0], n, l);
                        null != i && j(e, l, t[0], i)
                            ? A.push({ index: f.index, length: f[0].length, node: i })
                            : (h.lastIndex = f.index + 1);
                    }
                    for (let t of A.reverse())
                        ((function (e, t, n, l, s) {
                            let [r, a] = t,
                                o = { path: a, offset: n },
                                u = { path: a, offset: n + l };
                            (i()(
                                o.offset >= 0 && o.offset <= r.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                i()(
                                    u.offset >= 0 && u.offset <= r.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, s, { anchor: o, focus: u }));
                        })(e, [g, m.PW.child(o, p)], t.index, t.length, t.node),
                            (u = !0));
                }
                return u;
            })(e, t, n, l, r) && ((t = m.cv.updateElement(e, t)), (r = m.cv.markdown(t[0], n))),
            S(e, t, l, r) && ((t = m.cv.updateElement(e, t)), (r = m.cv.markdown(t[0], n)))));
}
function y(e, t, n, l) {
    let [i, s] = t,
        r = !1,
        a = n || null == l ? null : N(e, s);
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
                (d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (r = !0));
            }
        } else if (m.cv.isElement(o) && e.isVoid(o)) {
            let i = m.PW.child(s, t),
                u = { path: m.PW.child(i, 0), offset: 0 };
            (n || (null != l && _(a, u, l))) &&
                (d.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), i), (r = !0));
        }
    }
    return r;
}
function S(e, t, n, l) {
    let i = t[1],
        s = !1,
        r = [...l.entries].reverse(),
        a = l.serializedChildren.join(""),
        o = a.includes('#"');
    for (let c = 0; c < r.length; c++) {
        let m,
            h = r[c],
            p = r[c + 1];
        if (null != p && p.text.endsWith("\\") && h.start === p.start + p.text.length) continue;
        switch (h.attributes[0]) {
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
                    })(a, h.start)
                )
                    continue;
                m = {
                    type: "emoji",
                    emoji: {
                        name: h.data.name,
                        src: h.data.src,
                        surrogate: h.data.surrogate,
                        jumboable: !0 === h.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                m = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: h.data.emojiId,
                        name: h.data.name,
                        animated: h.data.animated,
                        jumboable: !0 === h.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                m = { type: "textMention", name: h.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                m = { type: "userMention", userId: h.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                m = { type: "roleMention", roleId: h.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                m = { type: "channelMention", channelId: h.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                m = { type: "staticRouteLink", id: h.data.id, itemId: h.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                m = { type: "soundboard", guildId: h.data.guildId, soundId: h.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                m = { type: "timestamp", parsed: h.data, children: [{ text: "" }] };
                break;
            case "gameMention":
                m = { type: "gameMention", gameId: h.data.id, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                m = { type: "timestampMentionInput", children: [{ text: h.data.content }] };
                break;
            default:
                continue;
        }
        if (!j(e, n, t[0], m)) continue;
        let f = (0, u.Q)(e, i, l.serializedChildren, h.start),
            g = (0, u.Q)(e, i, l.serializedChildren, h.start + h.text.length);
        (d.b.textToVoid(e, m, { anchor: f, focus: g }), (s = !0));
    }
    return s;
}
function v(e) {
    return e.join(",");
}
function N(e, t) {
    let n = new Map(),
        l = m.VW.nodes(e, { at: { anchor: m.VW.start(e, t), focus: m.VW.end(e, t) }, mode: "lowest" }),
        i = 0;
    for (let [e, t] of l) (n.set(v(t), i), (i += m.l5.isText(e) ? e.text.length : 1));
    return n;
}
function _(e, t, n) {
    if (null == e) return !1;
    let l = e.get(v(t.path));
    if (null != l) l += t.offset;
    else {
        let n = e.get(v(m.PW.parent(t.path)));
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
function j(e, t, n, l) {
    if (e.chatInputType.markdown?.disableMentions === !0 && f.has(l.type)) return !1;
    if ("applicationCommandOption" !== n.type) return !0;
    switch (n.optionType) {
        case s.n4.CHANNEL:
            return "channelMention" === l.type;
        case s.n4.ROLE:
            return "roleMention" === l.type || ("textMention" === l.type && "@everyone" === l.name);
        case s.n4.USER:
            return "userMention" === l.type;
        case s.n4.MENTIONABLE:
            return (
                "roleMention" === l.type ||
                "userMention" === l.type ||
                ("textMention" === l.type && "@everyone" === l.name)
            );
        case s.n4.STRING: {
            let e = null != t ? r.A.getOption(t, n.optionName) : null;
            return e?.choices == null && e?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
