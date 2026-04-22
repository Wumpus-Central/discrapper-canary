"use strict";
n.d(t, { q: () => M }), n(321073);
var i = n(284009),
    l = n.n(i),
    s = n(635377),
    r = n.n(s),
    a = n(791332),
    o = n(436857),
    c = n(626584),
    u = n(694403),
    d = n(542664),
    h = n(704726),
    m = n(551965),
    p = n(927813),
    f = n(752238),
    g = n(144667);
let _ = new c.A("MarkdownToSlate"),
    x = {
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
    C = {},
    E = {};
for (let e in d.A.RULES) {
    if (!(e in x))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = x[e];
    "skip" !== t.type && (C[e] = I(d.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (E[e] = I("text" === e ? h.Ay : d.A.RULES[e]));
}
function I(e) {
    l()(null != e.parse, "Slate: rule must have a parse function");
    let t = e.parse;
    return {
        ...e,
        parse(e, n, i) {
            let l = t.call(this, e, n, i);
            return l instanceof Array || (l.originalMatch = e), l;
        },
    };
}
function v(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let y = {
        url: {
            parse: (e) =>
                null == (0, u.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, u.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : v(e)),
        },
        mailto: { parse: v },
        tel: { parse: v },
        codeBlockSyntax: {
            order: a.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && f.default.isKnownLanguage(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    S = /(-# +)/,
    b = (0, m.A)([C, y]),
    N = (0, m.A)([E, y]),
    T = o.X(b),
    j = o.X(N),
    R = { max: 1 / 0, maxAge: +p.A.Millis.MINUTE, updateAgeOnGet: !0 },
    w = new (r())(R),
    L = new (r())(R);
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = g.H(e);
    if ((l.push(e.length), 1 === l.length && n)) return [];
    let s = 0,
        r = n,
        a = [];
    for (let n of l) {
        if (r) a.push({ text: e.substring(s, n), start: s, attributes: ["codeBlockText"], data: void 0 });
        else {
            let r = n === l[l.length - 2] ? e.substring(n + 3) : "";
            n += 3 + (null != r.match(g.b) ? r : "").length;
            let o = e.substring(s, n);
            "" !== o &&
                (function (e, t, n) {
                    let i = [],
                        l = n ? L : w,
                        s = l.get(e);
                    if (null != s) return s;
                    let r =
                            e
                                .replace(/\r\n/g, " \n")
                                .replace(/[\r\f]/g, " ")
                                .replace(/\t/g, " ") + "\n\n",
                        a = {
                            originalMatch: { index: 0, 0: "" },
                            type: "paragraph",
                            content: (n ? j : T)(r, !0, {
                                returnMentionIds: !0,
                                disableAutoBlockNewlines: !0,
                                guildId: t,
                                isSlate: !0,
                                allowTimeMentionInput: !0,
                            }),
                        };
                    k(i, r, a, 0, []);
                    let o = (function (e) {
                        if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
                        let t = [e[0]];
                        for (let n = 1; n < e.length; n++) {
                            let i = t[t.length - 1],
                                l = i.start + i.text.length,
                                s = e[n];
                            s.start === l &&
                            null == i.data &&
                            null == s.data &&
                            i.attributes.join("-") === s.attributes.join("-")
                                ? (i.text += s.text)
                                : t.push(s);
                        }
                        return t;
                    })(i);
                    return l.set(e, o), o;
                })(o, t, i).forEach((e) => {
                    a.push({ ...e, start: e.start + s });
                });
        }
        (r = !r), (s = n);
    }
    return a;
}
function k(e, t, n, i, s) {
    let { content: r, type: a, originalMatch: o } = n;
    switch ((l()(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), a)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return O(e, t, r || "", i, s);
        case "emoji":
        case "customEmoji": {
            let l = t.substring(i);
            if ((l.startsWith(o[0]) || ((i = G(e, t, i, t.length)), (l = t.substring(i))), l.startsWith(o[0])))
                return D({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [a], data: n });
            throw Error(`Slate: Unable to find emoji: ${o[0]} in ${t} at ${i}`);
        }
        case "soundboard":
            return D({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: i,
                attributes: [a],
                data: { guildId: n.guildId, soundId: n.soundId },
            });
        case "mention":
        case "roleMention":
        case "channelMention":
        case "commandMention":
        case "silentPrefix":
        case "channel": {
            let { text: s, id: r } = n;
            if (null != s)
                return (
                    l()(s === o[0], "Slate: text mentions must exactly match the regex match"),
                    D({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return D({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [a], data: { id: r } });
        }
        case "staticRouteLink":
            let { id: c, itemId: u } = n;
            return D({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: i,
                attributes: [a],
                data: { id: c, itemId: u },
            });
        case "timestamp":
        case "timestampMentionInput":
            return D({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [a], data: n });
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
            i = U(t, i);
            let { before: n, after: l } = (function (e, t, n, i) {
                if ("inlineCode" === t) return { before: i[1], after: i[1] };
                if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                if ("subtext" === t) return { before: S.exec(i.input)[1], after: "" };
                let l = x["link" === t ? "url" : t];
                if ("inlineStyle" === l.type) return l;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, a, i, o);
            return (
                (i = P(e, t, n, i, "syntaxBefore")),
                s.push(a),
                (i = O(e, t, r ?? "", i, s)),
                s.pop(),
                (i = P(e, t, l, i, "syntaxAfter")),
                U(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${a}`);
    }
}
function O(e, t, n, i, l) {
    return (
        "string" == typeof n
            ? (i = D({ result: e, sourceText: t, text: n, originalStart: i, attributes: l, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = k(e, t, n, i, l);
              })),
        U(t, i)
    );
}
function P(e, t, n, i, l) {
    if (n.length > 0) {
        let s = t.indexOf(n, i);
        if (-1 === s) return V(`Slate: Unable to find syntax characters "${n}" at position ${i}`, n, i);
        let r = t.substring(i, s + n.length);
        e.push({ text: r, attributes: [l], start: i, data: null }), (i = s + n.length);
    }
    return i;
}
function D(e) {
    let { result: t, sourceText: n, text: i, originalStart: l, attributes: s, data: r } = e,
        a = U(n, l);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let o = n.indexOf(i, a);
    if ((o !== a ? (a = l = G(t, n, a, o)) : "\\" === i && "\\" === n.charAt(o + 1) && (o++, (l = ++a)), o !== a))
        return V(`Slate: Unable to find content in source text at start position ${a} for text position ${o}`, i, l);
    let c = a + i.length,
        u = n.substring(l, c);
    return t.push({ text: u, attributes: s.slice(), start: l, data: r }), c;
}
function U(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function V(e, t, n) {
    if (t.split("").some((e) => A.has(e))) return _.error(e), n;
    throw Error(e);
}
function G(e, t, n, i) {
    for (; n < i; )
        if (A.has(t[n])) (n = P(e, t, t[n], n, "syntaxBefore")), (n = U(t, n));
        else break;
    return n;
}
