(n.d(t, { Ay: () => E, eF: () => y, lE: () => b }), n(321073));
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(861382),
    a = n(224868),
    o = n(186306),
    u = n(22098),
    c = n(323350),
    d = n(35277),
    h = n(820066);
let m =
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
    S = new Set(["applicationCommandOption"]);
function E(e, t, n) {
    let { isInline: l, isVoid: i, onChange: r } = e;
    ((e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!(p.has(e.type) || g.has(e.type)) || l(e)));
    let s = null,
        a = !0;
    return (
        (e.onChange = () => {
            let l = h.VW.richValue(e);
            ((l !== s || e.previewMarkdown !== a) &&
                (o.o.withMergedEntry(e, () => {
                    h.VW.withoutNormalizing(e, () => y(e, t, n));
                }),
                (s = l),
                (a = e.previewMarkdown)),
                r());
        }),
        e
    );
}
function y(e, t, n) {
    let l = h.VW.areStylesDisabled(e);
    for (let i of h.VW.blocks(e))
        if (x.has(i[0].type)) l ? A(e, i, !0, null) : C(e, i, t, n);
        else {
            let [r, s] = i;
            for (let i = r.children.length - 1; i >= 0; i--) {
                let a = r.children[i];
                if (!h.l5.isText(a) && S.has(a.type)) {
                    let r = [a, h.PW.child(s, i)];
                    l ? A(e, r, !0, null) : C(e, r, t, n);
                }
            }
        }
}
function C(e, t, n, l) {
    let r = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = h.cv.markdown(t[0], n);
    (A(e, t, r, s) && ((t = h.cv.updateElement(e, t)), (s = h.cv.markdown(t[0], n))),
        !r &&
            ((function (e, t, n, l, r) {
                let [s, o] = t,
                    u = !1,
                    c = v(e, o);
                for (let p = s.children.length - 1; p >= 0; p--) {
                    let f,
                        g = s.children[p];
                    if (!h.l5.isText(g)) continue;
                    let x = h.PW.child(o, p),
                        S = [];
                    for (m.lastIndex = 0; null != (f = m.exec(g.text));) {
                        if (0 !== f.index && null == g.text.charAt(f.index - 1).match(/(\t|\s)/)) {
                            m.lastIndex = f.index + 1;
                            continue;
                        }
                        if (N(c, { path: x, offset: f.index }, r)) continue;
                        let i = (0, a.p)(f[0], n, l);
                        null != i && T(e, l, t[0], i)
                            ? S.push({ index: f.index, length: f[0].length, node: i })
                            : (m.lastIndex = f.index + 1);
                    }
                    for (let t of S.reverse())
                        ((function (e, t, n, l, r) {
                            let [s, a] = t,
                                o = { path: a, offset: n },
                                u = { path: a, offset: n + l };
                            (i()(
                                o.offset >= 0 && o.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                i()(
                                    u.offset >= 0 && u.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                d.b.textToVoid(e, r, { anchor: o, focus: u }));
                        })(e, [g, h.PW.child(o, p)], t.index, t.length, t.node),
                            (u = !0));
                }
                return u;
            })(e, t, n, l, s) && ((t = h.cv.updateElement(e, t)), (s = h.cv.markdown(t[0], n))),
            b(e, t, l, s) && ((t = h.cv.updateElement(e, t)), (s = h.cv.markdown(t[0], n)))));
}
function A(e, t, n, l) {
    let [i, r] = t,
        s = !1,
        a = n || null == l ? null : v(e, r);
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
                let l = h.PW.child(r, t + 1);
                (d.b.voidToText(e, (0, c.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (s = !0));
            }
        } else if (h.cv.isElement(o) && e.isVoid(o)) {
            let i = h.PW.child(r, t),
                u = { path: h.PW.child(i, 0), offset: 0 };
            (n || (null != l && N(a, u, l))) &&
                (d.b.voidToText(e, (0, c.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), i), (s = !0));
        }
    }
    return s;
}
function b(e, t, n, l) {
    let i = t[1],
        r = !1,
        s = [...l.entries].reverse(),
        a = l.serializedChildren.join(""),
        o = a.includes('#"');
    for (let c = 0; c < s.length; c++) {
        let h,
            m = s[c],
            p = s[c + 1];
        if (null != p && p.text.endsWith("\\") && m.start === p.start + p.text.length) continue;
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
        if (!T(e, n, t[0], h)) continue;
        let f = (0, u.Q)(e, i, l.serializedChildren, m.start),
            g = (0, u.Q)(e, i, l.serializedChildren, m.start + m.text.length);
        (d.b.textToVoid(e, h, { anchor: f, focus: g }), (r = !0));
    }
    return r;
}
function I(e) {
    return e.join(",");
}
function v(e, t) {
    let n = new Map(),
        l = h.VW.nodes(e, { at: { anchor: h.VW.start(e, t), focus: h.VW.end(e, t) }, mode: "lowest" }),
        i = 0;
    for (let [e, t] of l) (n.set(I(t), i), (i += h.l5.isText(e) ? e.text.length : 1));
    return n;
}
function N(e, t, n) {
    if (null == e) return !1;
    let l = e.get(I(t.path));
    if (null != l) l += t.offset;
    else {
        let n = e.get(I(h.PW.parent(t.path)));
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
function T(e, t, n, l) {
    if (e.chatInputType.markdown?.disableMentions === !0 && f.has(l.type)) return !1;
    if ("applicationCommandOption" !== n.type) return !0;
    switch (n.optionType) {
        case r.n4.CHANNEL:
            return "channelMention" === l.type;
        case r.n4.ROLE:
            return "roleMention" === l.type || ("textMention" === l.type && "@everyone" === l.name);
        case r.n4.USER:
            return "userMention" === l.type;
        case r.n4.MENTIONABLE:
            return (
                "roleMention" === l.type ||
                "userMention" === l.type ||
                ("textMention" === l.type && "@everyone" === l.name)
            );
        case r.n4.STRING: {
            let e = null != t ? s.A.getOption(t, n.optionName) : null;
            return e?.choices == null && e?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
