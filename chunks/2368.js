n.d(t, {
    Ay: () => E,
    eF: () => b,
    lE: () => A,
}),
    n(896048),
    n(264879),
    n(747238),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(861382),
    o = n(224868),
    l = n(186306),
    c = n(22098),
    u = n(323350),
    d = n(35277),
    f = n(711371);
let p =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    _ = new Set([
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
    (e.isVoid = (e) => !!_.has(e.type) || i(e)), (e.isInline = (e) => !!(_.has(e.type) || h.has(e.type)) || r(e));
    let s = null,
        o = !0;
    return (
        (e.onChange = () => {
            let r = f.VW.richValue(e);
            (r !== s || e.previewMarkdown !== o) &&
                (l.o.withMergedEntry(e, () => {
                    f.VW.withoutNormalizing(e, () => b(e, t, n));
                }),
                (s = r),
                (o = e.previewMarkdown)),
                a();
        }),
        e
    );
}

function b(e, t, n) {
    let r = f.VW.areStylesDisabled(e);
    for (let i of f.VW.blocks(e))
        if (m.has(i[0].type)) r ? O(e, i, !0, null) : y(e, i, t, n);
        else {
            let [a, s] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let o = a.children[i];
                if (!f.l5.isText(o) && g.has(o.type)) {
                    let a = [o, f.PW.child(s, i)];
                    r ? O(e, a, !0, null) : y(e, a, t, n);
                }
            }
        }
}

function y(e, t, n, r) {
    var i;
    let a = "line" === t[0].type && (null == (i = t[0].codeBlockState) ? void 0 : i.isInCodeBlock) === !0,
        s = f.cv.markdown(t[0], n);
    O(e, t, a, s) && ((t = f.cv.updateElement(e, t)), (s = f.cv.markdown(t[0], n))),
        a || (A(e, t, r, s) && ((t = f.cv.updateElement(e, t)), (s = f.cv.markdown(t[0], n))), v(e, t, n, r, s));
}

function O(e, t, n, r) {
    let [i, a] = t,
        s = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let o = i.children[t];
        if (f.l5.isText(o) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !f.cv.isElement(n) || !e.isVoid(n)) continue;
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
                let r = f.PW.child(a, t + 1);
                d.b.voidToText(
                    e,
                    (0, u.IQ)(n, {
                        mode: "plain",
                        preventEmojiSurrogates: !0,
                    }),
                    r,
                ),
                    (s = !0);
            }
        } else if (f.cv.isElement(o) && e.isVoid(o)) {
            let i = f.PW.child(a, t),
                l = {
                    path: f.PW.child(i, 0),
                    offset: 0,
                };
            (n || (null != r && I(e, a, l, r))) &&
                (d.b.voidToText(
                    e,
                    (0, u.IQ)(o, {
                        mode: "plain",
                        preventEmojiSurrogates: !0,
                    }),
                    i,
                ),
                (s = !0));
        }
    }
    return s;
}

function A(e, t, n, r) {
    let i = t[1],
        a = !1,
        s = [...r.entries].reverse();
    for (let o = 0; o < s.length; o++) {
        let l,
            u = s[o],
            f = s[o + 1];
        if (null != f && f.text.endsWith("\\") && u.start === f.start + f.text.length) continue;
        switch (u.attributes[0]) {
            case "emoji":
                l = {
                    type: "emoji",
                    emoji: {
                        name: u.data.name,
                        src: u.data.src,
                        surrogate: u.data.surrogate,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "customEmoji":
                l = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: u.data.emojiId,
                        name: u.data.name,
                        animated: u.data.animated,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "textMention":
                l = {
                    type: "textMention",
                    name: u.data.text,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "mention":
                l = {
                    type: "userMention",
                    userId: u.data.id,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "roleMention":
                l = {
                    type: "roleMention",
                    roleId: u.data.id,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "channelMention":
                l = {
                    type: "channelMention",
                    channelId: u.data.id,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "staticRouteLink":
                l = {
                    type: "staticRouteLink",
                    id: u.data.id,
                    itemId: u.data.itemId,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "soundboard":
                l = {
                    type: "soundboard",
                    guildId: u.data.guildId,
                    soundId: u.data.soundId,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "timestamp":
                l = {
                    type: "timestamp",
                    parsed: u.data,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "gameMention":
                l = {
                    type: "gameMention",
                    applicationId: u.data.id,
                    children: [
                        {
                            text: "",
                        },
                    ],
                };
                break;
            case "timestampMentionInput":
                l = {
                    type: "timestampMentionInput",
                    children: [
                        {
                            text: u.data.content,
                        },
                    ],
                };
                break;
            default:
                continue;
        }
        if (!T(n, t[0], l)) continue;
        let p = (0, c.Q)(e, i, r.serializedChildren, u.start),
            _ = (0, c.Q)(e, i, r.serializedChildren, u.start + u.text.length);
        d.b.textToVoid(e, l, {
            anchor: p,
            focus: _,
        }),
            (a = !0);
    }
    return a;
}

function v(e, t, n, r, i) {
    let [a, s] = t,
        l = !1;
    for (let c = a.children.length - 1; c >= 0; c--) {
        let u,
            d = a.children[c];
        if (!f.l5.isText(d)) continue;
        let _ = f.PW.child(s, c),
            h = [];
        for (p.lastIndex = 0; null != (u = p.exec(d.text)); ) {
            if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
                p.lastIndex = u.index + 1;
                continue;
            }
            if (
                I(
                    e,
                    s,
                    {
                        path: _,
                        offset: u.index,
                    },
                    i,
                )
            )
                continue;
            let a = (0, o.p)(u[0], n, r);
            null != a && T(r, t[0], a)
                ? h.push({
                      index: u.index,
                      length: u[0].length,
                      node: a,
                  })
                : (p.lastIndex = u.index + 1);
        }
        for (let t of h.reverse()) S(e, [d, f.PW.child(s, c)], t.index, t.length, t.node), (l = !0);
    }
    return l;
}

function S(e, t, n, r, a) {
    let [s, o] = t,
        l = {
            path: o,
            offset: n,
        },
        c = {
            path: o,
            offset: n + r,
        };
    i()(l.offset >= 0 && l.offset <= s.text.length, "Failed to find valid start position for raw mention replace"),
        i()(c.offset >= 0 && c.offset <= s.text.length, "Failed to find valid end position for raw mention replace"),
        d.b.textToVoid(e, a, {
            anchor: l,
            focus: c,
        });
}

function I(e, t, n, r) {
    let i = 0;
    for (let [r, a] of f.VW.nodes(e, {
        at: {
            anchor: f.VW.start(e, t),
            focus: n,
        },
        mode: "lowest",
    }))
        f.l5.isText(r) ? (f.PW.equals(a, n.path) ? (i += n.offset) : (i += r.text.length)) : (i += 1);
    for (let e of r.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}

function T(e, t, n) {
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
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
