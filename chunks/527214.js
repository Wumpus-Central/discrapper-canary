"use strict";
n.d(t, { Ay: () => O, W1: () => R }), n(323874), n(14289), n(35956);
var i,
    r = n(735438),
    s = n.n(r),
    a = n(635377),
    o = n.n(a);
n(228785);
var l = n(791332),
    d = n.n(l),
    _ = n(833291),
    u = n(403362),
    c = n(998218),
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
        i),
    h = n(417964);
let m = new (o())({ max: 50 });
function f(e) {
    let t = m.get(e);
    if (null != t) return t;
    let n = (0, h.Fd)(e),
        i = (0, h.El)(n),
        r = { whitespaceSanitized: n, fullySanitized: i };
    return m.set(e, r), r;
}
let g = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
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
    A = [...p, E.EMOJI, E.CUSTOM_EMOJI],
    I = [E.LIST, E.HEADING, E.BLOCK_QUOTE, E.SUBTEXT],
    T = [E.TEXT],
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
    if ((0, _.rL)(e) || f(e).whitespaceSanitized !== e) return !0;
    let t = c.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || c.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function R(e) {
    try {
        if (C(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!g.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
        if (("http:" === n || "https:" === n) && (null == t.hostname || 0 === t.hostname.length))
            throw Error("no hostname");
        let i = (0, h.nK)(t);
        (t.username = ""), (t.password = "");
        let r = (0, h.nK)(t);
        return { target: i, displayTarget: r };
    } catch (e) {
        return null;
    }
}
let O = {
    ...d().defaultRules.link,
    match(e, t, n) {
        if (!t.allowLinks || -1 === e.indexOf("](")) return null;
        let i = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("[" === n) {
                if (++i > 10) return null;
            } else "]" === n && i > 0 && i--;
        }
        return d().defaultRules.link.match(e, t, n);
    },
    parse(e, t, n) {
        let [i, r, a, o] = e,
            l = () => ({ type: E.TEXT, content: i });
        if (C(a)) return l();
        let c = f(a),
            h = f(r),
            m = f(null != o ? o : ""),
            g = c.whitespaceSanitized,
            O = h.fullySanitized,
            y = m.fullySanitized,
            v = O.trim();
        if (0 === g.trim().length || 0 === v.length) return l();
        let D = R(d().unescapeUrl(a)),
            L = (0, _.Ay)(r).length > 0 || (0, _.Ay)(o).length > 0;
        if (null == D || L) return l();
        let b = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            w = n.allowEmojiLinks ? A : p,
            P = [...w, ...I],
            k = [...T, ...S],
            M = N(t(O, b), P, [E.EMOJI]),
            U = N(t(y, b), k);
        if (
            null == M ||
            null == U ||
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
                })(M).trim().length
        )
            return l();
        let x = s().pick(t.rules, w),
            G = d().parserFor(x)(h.whitespaceSanitized, b),
            V = m.whitespaceSanitized,
            { target: F } = D;
        return { content: G, target: F, title: V };
    },
};
