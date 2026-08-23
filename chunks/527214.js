"use strict";
n.d(t, { Ay: () => O, W1: () => R }), n(323874), n(14289), n(35956);
var i,
    r = n(435558),
    a = n.n(r),
    s = n(635377),
    l = n.n(s);
n(228785);
var o = n(478676),
    d = n.n(o),
    c = n(833291),
    u = n(403362),
    _ = n(998218),
    E =
        (((i = {}).TEXT = "text"),
        (i.STRIKETHROUGH = "s"),
        (i.UNDERLINE = "u"),
        (i.STRONG = "strong"),
        (i.ITALICS = "em"),
        (i.IMAGE = "image"),
        (i.EMOJI = "emoji"),
        (i.CUSTOM_EMOJI = "customEmoji"),
        (i.LINK = "link"),
        (i.URL = "url"),
        (i.AUTOLINK = "autolink"),
        (i.HIGHLIGHT = "highlight"),
        (i.PARAGRAPH = "paragraph"),
        (i.LINE_BREAK = "br"),
        (i.NEWLINE = "newline"),
        (i.ESCAPE = "escape"),
        (i.SPOILER = "spoiler"),
        (i.BLOCK_QUOTE = "blockQuote"),
        (i.INLINE_CODE = "inlineCode"),
        (i.CODE_BLOCK = "codeBlock"),
        (i.MENTION = "mention"),
        (i.CHANNEL_MENTION = "channelMention"),
        (i.CHANNEL = "channel"),
        (i.GUILD = "guild"),
        (i.ATTACHMENT_LINK = "attachmentLink"),
        (i.SOUNDBOARD = "soundboard"),
        (i.STATIC_ROUTE_LINK = "staticRouteLink"),
        (i.ROLE_MENTION = "roleMention"),
        (i.COMMAND_MENTION = "commandMention"),
        (i.TIMESTAMP = "timestamp"),
        (i.LIST = "list"),
        (i.HEADING = "heading"),
        (i.SUBTEXT = "subtext"),
        (i.SILENT_PREFIX = "silentPrefix"),
        (i.GAME_MENTION = "gameMention"),
        i),
    A = n(417964);
let h = new (l())({ max: 50 });
function I(e) {
    let t = h.get(e);
    if (null != t) return t;
    let n = (0, A.Fd)(e),
        i = (0, A.El)(n),
        r = { whitespaceSanitized: n, fullySanitized: i };
    return h.set(e, r), r;
}
let f = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    p = [
        E.TEXT,
        E.UNDERLINE,
        E.STRONG,
        E.ITALICS,
        E.STRIKETHROUGH,
        E.INLINE_CODE,
        E.SPOILER,
        E.LINE_BREAK,
        E.TIMESTAMP,
    ],
    T = [...p, E.EMOJI, E.CUSTOM_EMOJI],
    m = [E.LIST, E.HEADING, E.BLOCK_QUOTE, E.SUBTEXT],
    g = [E.TEXT],
    S = [
        E.UNDERLINE,
        E.STRONG,
        E.ITALICS,
        E.STRIKETHROUGH,
        E.INLINE_CODE,
        E.SPOILER,
        E.LINE_BREAK,
        E.TIMESTAMP,
        E.EMOJI,
        E.CUSTOM_EMOJI,
        E.LIST,
        E.HEADING,
        E.BLOCK_QUOTE,
        E.SUBTEXT,
    ];
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let i of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === i || !t.includes(i.type)) return null;
        if (i.type === E.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == N(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == N(i.content, t)) return null;
    }
    return e;
}
function C(e) {
    if ((0, c.rL)(e) || I(e).whitespaceSanitized !== e) return !0;
    let t = _.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || _.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function R(e) {
    try {
        if (C(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!f.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
        if (("http:" === n || "https:" === n) && (null == t.hostname || 0 === t.hostname.length))
            throw Error("no hostname");
        let i = (0, A.nK)(t);
        (t.username = ""), (t.password = "");
        let r = (0, A.nK)(t);
        return { target: i, displayTarget: r };
    } catch (e) {
        return null;
    }
}
let O = {
    ...d().defaultRules.link,
    match(e, t, n) {
        if (!t.allowLinks || -1 === e.indexOf("](")) return null;
        let i = 0,
            r = 0,
            a = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if (i >= 2) {
                if (++a > 100) return null;
            } else a = 0;
            if (")" === n) {
                r = 0;
                continue;
            }
            if ("[" === n) {
                if (++i > 10) return null;
            } else if ("]" === n) i > 0 && i--;
            else if ("(" !== n) continue;
            if (++r > 200) return null;
        }
        return d().defaultRules.link.match(e, t, n);
    },
    parse(e, t, n) {
        let [i, r, s, l] = e;
        function o() {
            return { type: E.TEXT, content: i };
        }
        if (C(s)) return o();
        let _ = I(s),
            A = I(r),
            h = I(null != l ? l : ""),
            f = _.whitespaceSanitized,
            O = A.fullySanitized,
            L = h.fullySanitized,
            y = O.trim();
        if (0 === f.trim().length || 0 === y.length) return o();
        let D = R(d().unescapeUrl(s)),
            v = (0, c.Ay)(r).length > 0 || (0, c.Ay)(l).length > 0;
        if (null == D || v) return o();
        let b = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            M = n.allowEmojiLinks ? T : p,
            P = [...M, ...m],
            U = [...g, ...S],
            w = N(t(O, b), P, [E.EMOJI]),
            G = N(t(L, b), U);
        if (
            null == w ||
            null == G ||
            0 ===
                (function e(t) {
                    let n = "";
                    for (let i of t)
                        switch (i.type) {
                            case E.TEXT:
                            case E.INLINE_CODE:
                                n += i.content;
                                break;
                            case E.CUSTOM_EMOJI:
                                n += i.name;
                                break;
                            case E.EMOJI:
                                n += i.surrogate;
                                break;
                            case E.LINE_BREAK:
                                n += "\n";
                                break;
                            case E.STRONG:
                            case E.ITALICS:
                            case E.UNDERLINE:
                            case E.STRIKETHROUGH:
                            case E.SPOILER:
                                n += e(i.content);
                                break;
                            case E.TIMESTAMP:
                                n += "<timestamp>";
                                break;
                            case E.BLOCK_QUOTE:
                            case E.LIST:
                            case E.HEADING:
                            case E.SUBTEXT:
                                n += `<${i.type}Content>`;
                                break;
                            default:
                                (0, u.xb)(i.type);
                        }
                    return n;
                })(w).trim().length
        )
            return o();
        let x = a().pick(t.rules, M),
            k = d().parserFor(x)(A.whitespaceSanitized, b),
            F = h.whitespaceSanitized,
            { target: V } = D;
        return { content: k, target: V, title: F };
    },
};
