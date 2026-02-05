"use strict";
n.d(t, { q: () => k }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(791332),
    l = n(436857),
    u = n(626584),
    c = n(694403),
    d = n(542664),
    _ = n(704726),
    f = n(551965),
    p = n(927813),
    h = n(752238),
    m = n(857157),
    g = n(900090),
    E = n(144667);
let A = new u.A("MarkdownToSlate"),
    I = {
        link: { type: "skip" },
        highlight: { type: "skip" },
        blockQuote: { type: "skip" },
        codeBlock: { type: "skip" },
        list: { type: "skip" },
        heading: { type: "skip" },
        channelOrMessageUrl: { type: "skip" },
        mediaPostLink: { type: "skip" },
        attachmentLink: { type: "skip" },
        newline: { type: "verbatim" },
        br: { type: "verbatim" },
        paragraph: { type: "verbatim" },
        text: { type: "verbatim" },
        emoticon: { type: "verbatim" },
        mention: { type: "inlineObject" },
        roleMention: { type: "inlineObject" },
        commandMention: { type: "inlineObject" },
        channelMention: { type: "inlineObject" },
        gameMention: { type: "inlineObject" },
        silentPrefix: { type: "inlineStyle", before: "@silent", after: " " },
        emoji: { type: "inlineObject" },
        customEmoji: { type: "inlineObject" },
        looseEm: { type: "inlineStyle", before: "*", after: " *" },
        autolink: { type: "inlineStyle", before: "<", after: ">" },
        mailto: { type: "inlineStyle", before: "<", after: ">" },
        tel: { type: "inlineStyle", before: "<", after: ">" },
        strong: { type: "inlineStyle", before: "**", after: "**" },
        u: { type: "inlineStyle", before: "__", after: "__" },
        s: { type: "inlineStyle", before: "~~", after: "~~" },
        escape: { type: "inlineStyle", before: "\\", after: "" },
        staticRouteLink: { type: "inlineStyle", before: "<id:", after: ">" },
        soundboard: { type: "inlineStyle", before: "<sound:", after: ">" },
        spoiler: { type: "inlineStyle", before: "||", after: "||" },
        url: { type: "inlineStyle", before: "", after: "" },
        codeBlockText: { type: "inlineStyle", before: "", after: "" },
        codeBlockSyntax: { type: "inlineStyle", before: "", after: "" },
        codeBlockLang: { type: "inlineStyle", before: "", after: "" },
        timestamp: { type: "inlineObject" },
        timestampMentionInput: { type: "inlineObject" },
        em: { type: "inlineStyle", before: "*", after: "*" },
        inlineCode: { type: "inlineStyle", before: "`", after: "`" },
        subtext: { type: "inlineStyle", before: "-# ", after: "" },
    },
    T = new Set(["*", "_", "\\"]),
    y = {},
    S = {};
for (let e in d.A.RULES) {
    if (!(e in I))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = I[e];
    "skip" !== t.type && (y[e] = v(d.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (S[e] = v("text" === e ? _.Ay : d.A.RULES[e]));
}
function v(e) {
    i()(null != e.parse, "Slate: rule must have a parse function");
    let t = e.parse;
    return {
        ...e,
        parse(e, n, r) {
            let i = t.call(this, e, n, r);
            return i instanceof Array || (i.originalMatch = e), i;
        },
    };
}
function C(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let b = {
        url: {
            parse: (e) =>
                null == (0, c.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, c.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : C(e)),
        },
        mailto: { parse: C },
        tel: { parse: C },
        codeBlockSyntax: {
            order: o.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && h.default.isKnownLanguage(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    N = /(-# +)/,
    R = (0, f.A)([y, b]),
    O = (0, f.A)([S, b]),
    D = l.X(R),
    L = l.X(O),
    w = { max: 1 / 0, maxAge: +p.A.Millis.MINUTE, updateAgeOnGet: !0 },
    x = new (s())(w),
    P = new (s())(w);
function M(e, t, n) {
    let r = [],
        i = {
            returnMentionIds: !0,
            disableAutoBlockNewlines: !0,
            guildId: t,
            isSlate: !0,
            allowGameMentions: !0,
            allowTimeMentionInput: !0,
        },
        a = n ? L : D,
        s = n ? P : x,
        o = s.get(e);
    if (null != o) return o;
    let l =
            e
                .replace(/\r\n/g, " \n")
                .replace(/[\r\f]/g, " ")
                .replace(/\t/g, " ") + "\n\n",
        u = { originalMatch: { index: 0, 0: "" }, type: "paragraph", content: a(l, !0, i) };
    G(r, l, u, 0, []);
    let c = U(r);
    return s.set(e, c), c;
}
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = E.H(e);
    if ((i.push(e.length), 1 === i.length && n)) return [];
    let a = 0,
        s = n,
        o = [];
    for (let n of i) {
        if (s) o.push({ text: e.substring(a, n), start: a, attributes: ["codeBlockText"], data: void 0 });
        else {
            let s = n === i[i.length - 2] ? e.substring(n + 3) : "";
            n += 3 + (null != s.match(E.b) ? s : "").length;
            let l = e.substring(a, n);
            "" !== l &&
                M(l, t, r).forEach((e) => {
                    o.push({ ...e, start: e.start + a });
                });
        }
        (s = !s), (a = n);
    }
    return o;
}
function U(e) {
    if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
    let t = [e[0]];
    for (let n = 1; n < e.length; n++) {
        let r = t[t.length - 1],
            i = r.start + r.text.length,
            a = e[n];
        a.start === i && null == r.data && null == a.data && r.attributes.join("-") === a.attributes.join("-")
            ? (r.text += a.text)
            : t.push(a);
    }
    return t;
}
function G(e, t, n, r, a) {
    let { content: s, type: o, originalMatch: l } = n;
    switch ((i()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return F(e, t, s || "", r, a);
        case "emoji":
        case "customEmoji": {
            let i = t.substring(r);
            if ((i.startsWith(l[0]) || ((r = W(e, t, r, t.length)), (i = t.substring(r))), i.startsWith(l[0])))
                return j({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${r}`);
        }
        case "soundboard":
            return j({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [o],
                data: { guildId: n.guildId, soundId: n.soundId },
            });
        case "mention":
        case "roleMention":
        case "channelMention":
        case "commandMention":
        case "silentPrefix":
        case "channel": {
            let { text: a, id: s } = n;
            if (null != a)
                return (
                    i()(a === l[0], "Slate: text mentions must exactly match the regex match"),
                    j({
                        result: e,
                        sourceText: t,
                        text: a,
                        originalStart: r,
                        attributes: ["textMention"],
                        data: { text: a },
                    })
                );
            return j({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: { id: s } });
        }
        case "gameMention": {
            let { applicationId: i } = n;
            return j({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: { id: i } });
        }
        case "staticRouteLink":
            let { id: u, itemId: c } = n;
            return j({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [o],
                data: { id: u, itemId: c },
            });
        case "timestamp":
            let d = m.A.getConfig({ location: "flattenMarkdown" }).enabled;
            if (g.A.getCurrentConfig({ location: "c70cbb_1" }, { autoTrackExposure: !1 }).enabled || d)
                return j({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: n });
            return F(e, t, l[0], r, a);
        case "timestampMentionInput":
            if (m.A.getConfig({ location: "flattenMarkdown-input" }).enabled)
                return j({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: n });
            return F(e, t, l[0], r, a);
        case "em":
        case "autolink":
        case "mailto":
        case "tel":
        case "strong":
        case "u":
        case "s":
        case "escape":
        case "inlineCode":
        case "codeBlockSyntax":
        case "codeBlockLang":
        case "spoiler":
        case "url":
        case "link":
        case "subtext": {
            r = H(t, r);
            let { before: n, after: i } = V(t, o, r, l);
            return (
                (r = B(e, t, n, r, "syntaxBefore")),
                a.push(o),
                (r = F(e, t, s ?? "", r, a)),
                a.pop(),
                (r = B(e, t, i, r, "syntaxAfter")),
                H(t, r)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function V(e, t, n, r) {
    if ("inlineCode" === t) return { before: r[1], after: r[1] };
    if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
    if ("subtext" === t) return { before: N.exec(r.input)[1], after: "" };
    let i = I["link" === t ? "url" : t];
    if ("inlineStyle" === i.type) return i;
    throw Error("Slate: rule must be an inlineStyle");
}
function F(e, t, n, r, i) {
    return (
        "string" == typeof n
            ? (r = j({ result: e, sourceText: t, text: n, originalStart: r, attributes: i, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  r = G(e, t, n, r, i);
              })),
        H(t, r)
    );
}
function B(e, t, n, r, i) {
    if (n.length > 0) {
        let a = t.indexOf(n, r);
        if (-1 === a) return Y(`Slate: Unable to find syntax characters "${n}" at position ${r}`, n, r);
        let s = t.substring(r, a + n.length);
        e.push({ text: s, attributes: [i], start: r, data: null }), (r = a + n.length);
    }
    return r;
}
function j(e) {
    let { result: t, sourceText: n, text: r, originalStart: i, attributes: a, data: s } = e,
        o = H(n, i);
    for (; "\n" === r.charAt(0) || " " === r.charAt(0); ) r = r.substring(1);
    let l = n.indexOf(r, o);
    if ((l !== o ? (o = i = W(t, n, o, l)) : "\\" === r && "\\" === n.charAt(l + 1) && (l++, (i = ++o)), l !== o))
        return Y(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, r, i);
    let u = o + r.length,
        c = n.substring(i, u);
    return t.push({ text: c, attributes: a.slice(), start: i, data: s }), u;
}
function H(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function Y(e, t, n) {
    if (t.split("").some((e) => T.has(e))) return A.error(e), n;
    throw Error(e);
}
function W(e, t, n, r) {
    for (; n < r; )
        if (T.has(t[n])) (n = B(e, t, t[n], n, "syntaxBefore")), (n = H(t, n));
        else break;
    return n;
}
