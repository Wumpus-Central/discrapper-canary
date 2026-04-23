"use strict";
n.d(t, { q: () => M }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(635377),
    a = n.n(s),
    o = n(791332),
    l = n(436857),
    u = n(626584),
    c = n(694403),
    d = n(542664),
    _ = n(704726),
    f = n(551965),
    p = n(927813),
    h = n(752238),
    E = n(144667);
let m = new u.A("MarkdownToSlate"),
    g = {
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
    A = new Set(["*", "_", "\\"]),
    I = {},
    T = {};
for (let e in d.A.RULES) {
    if (!(e in g))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = g[e];
    "skip" !== t.type && (I[e] = S(d.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (T[e] = S("text" === e ? _.Ay : d.A.RULES[e]));
}
function S(e) {
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
function y(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let N = {
        url: {
            parse: (e) =>
                null == (0, c.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, c.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : y(e)),
        },
        mailto: { parse: y },
        tel: { parse: y },
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
    v = /(-# +)/,
    C = (0, f.A)([I, N]),
    O = (0, f.A)([T, N]),
    R = l.X(C),
    b = l.X(O),
    D = { max: 1 / 0, maxAge: +p.A.Millis.MINUTE, updateAgeOnGet: !0 },
    L = new (a())(D),
    w = new (a())(D);
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = E.H(e);
    if ((i.push(e.length), 1 === i.length && n)) return [];
    let s = 0,
        a = n,
        o = [];
    for (let n of i) {
        if (a) o.push({ text: e.substring(s, n), start: s, attributes: ["codeBlockText"], data: void 0 });
        else {
            let a = n === i[i.length - 2] ? e.substring(n + 3) : "";
            n += 3 + (null != a.match(E.b) ? a : "").length;
            let l = e.substring(s, n);
            "" !== l &&
                (function (e, t, n) {
                    let r = [],
                        i = n ? w : L,
                        s = i.get(e);
                    if (null != s) return s;
                    let a =
                            e
                                .replace(/\r\n/g, " \n")
                                .replace(/[\r\f]/g, " ")
                                .replace(/\t/g, " ") + "\n\n",
                        o = {
                            originalMatch: { index: 0, 0: "" },
                            type: "paragraph",
                            content: (n ? b : R)(a, !0, {
                                returnMentionIds: !0,
                                disableAutoBlockNewlines: !0,
                                guildId: t,
                                isSlate: !0,
                                allowTimeMentionInput: !0,
                            }),
                        };
                    P(r, a, o, 0, []);
                    let l = (function (e) {
                        if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
                        let t = [e[0]];
                        for (let n = 1; n < e.length; n++) {
                            let r = t[t.length - 1],
                                i = r.start + r.text.length,
                                s = e[n];
                            s.start === i &&
                            null == r.data &&
                            null == s.data &&
                            r.attributes.join("-") === s.attributes.join("-")
                                ? (r.text += s.text)
                                : t.push(s);
                        }
                        return t;
                    })(r);
                    return i.set(e, l), l;
                })(l, t, r).forEach((e) => {
                    o.push({ ...e, start: e.start + s });
                });
        }
        (a = !a), (s = n);
    }
    return o;
}
function P(e, t, n, r, s) {
    let { content: a, type: o, originalMatch: l } = n;
    switch ((i()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return x(e, t, a || "", r, s);
        case "emoji":
        case "customEmoji": {
            let i = t.substring(r);
            if ((i.startsWith(l[0]) || ((r = V(e, t, r, t.length)), (i = t.substring(r))), i.startsWith(l[0])))
                return U({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${r}`);
        }
        case "soundboard":
            return U({
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
            let { text: s, id: a } = n;
            if (null != s)
                return (
                    i()(s === l[0], "Slate: text mentions must exactly match the regex match"),
                    U({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: r,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return U({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: u, itemId: c } = n;
            return U({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [o],
                data: { id: u, itemId: c },
            });
        case "timestamp":
        case "timestampMentionInput":
            return U({ result: e, sourceText: t, text: l[0], originalStart: r, attributes: [o], data: n });
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
            r = G(t, r);
            let { before: n, after: i } = (function (e, t, n, r) {
                if ("inlineCode" === t) return { before: r[1], after: r[1] };
                if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                if ("subtext" === t) return { before: v.exec(r.input)[1], after: "" };
                let i = g["link" === t ? "url" : t];
                if ("inlineStyle" === i.type) return i;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, o, r, l);
            return (
                (r = k(e, t, n, r, "syntaxBefore")),
                s.push(o),
                (r = x(e, t, a ?? "", r, s)),
                s.pop(),
                (r = k(e, t, i, r, "syntaxAfter")),
                G(t, r)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function x(e, t, n, r, i) {
    return (
        "string" == typeof n
            ? (r = U({ result: e, sourceText: t, text: n, originalStart: r, attributes: i, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  r = P(e, t, n, r, i);
              })),
        G(t, r)
    );
}
function k(e, t, n, r, i) {
    if (n.length > 0) {
        let s = t.indexOf(n, r);
        if (-1 === s) return F(`Slate: Unable to find syntax characters "${n}" at position ${r}`, n, r);
        let a = t.substring(r, s + n.length);
        e.push({ text: a, attributes: [i], start: r, data: null }), (r = s + n.length);
    }
    return r;
}
function U(e) {
    let { result: t, sourceText: n, text: r, originalStart: i, attributes: s, data: a } = e,
        o = G(n, i);
    for (; "\n" === r.charAt(0) || " " === r.charAt(0); ) r = r.substring(1);
    let l = n.indexOf(r, o);
    if ((l !== o ? (o = i = V(t, n, o, l)) : "\\" === r && "\\" === n.charAt(l + 1) && (l++, (i = ++o)), l !== o))
        return F(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, r, i);
    let u = o + r.length,
        c = n.substring(i, u);
    return t.push({ text: c, attributes: s.slice(), start: i, data: a }), u;
}
function G(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function F(e, t, n) {
    if (t.split("").some((e) => A.has(e))) return m.error(e), n;
    throw Error(e);
}
function V(e, t, n, r) {
    for (; n < r; )
        if (A.has(t[n])) (n = k(e, t, t[n], n, "syntaxBefore")), (n = G(t, n));
        else break;
    return n;
}
