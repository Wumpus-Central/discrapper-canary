"use strict";
n.d(t, { Ay: () => v, W1: () => N }), n(323874), n(14289), n(35956);
var i,
    r = n(735438),
    s = n.n(r),
    a = n(635377),
    o = n.n(a);
n(228785);
var l = n(791332),
    u = n.n(l),
    c = n(833291),
    d = n(403362),
    _ = n(998218),
    h =
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
    f = n(417964);
let p = new (o())({ max: 50 });
function E(e) {
    let t = p.get(e);
    if (null != t) return t;
    let n = (0, f.Fd)(e),
        i = (0, f.El)(n),
        r = { whitespaceSanitized: n, fullySanitized: i };
    return p.set(e, r), r;
}
let m = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    g = [
        h.TEXT,
        h.UNDERLINE,
        h.STRONG,
        h.ITALICS,
        h.STRIKETHROUGH,
        h.INLINE_CODE,
        h.SPOILER,
        h.LINE_BREAK,
        h.TIMESTAMP,
    ],
    A = [...g, h.EMOJI, h.CUSTOM_EMOJI],
    I = [h.LIST, h.HEADING, h.BLOCK_QUOTE, h.SUBTEXT],
    T = [h.TEXT],
    S = [
        h.UNDERLINE,
        h.STRONG,
        h.ITALICS,
        h.STRIKETHROUGH,
        h.INLINE_CODE,
        h.SPOILER,
        h.LINE_BREAK,
        h.TIMESTAMP,
        h.EMOJI,
        h.CUSTOM_EMOJI,
        h.LIST,
        h.HEADING,
        h.BLOCK_QUOTE,
        h.SUBTEXT,
    ];
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let i of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === i || !t.includes(i.type)) return null;
        if (i.type === h.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == y(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == y(i.content, t)) return null;
    }
    return e;
}
function C(e) {
    if ((0, c.rL)(e) || E(e).whitespaceSanitized !== e) return !0;
    let t = _.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || _.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function N(e) {
    try {
        if (C(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!m.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
        if (("http:" === n || "https:" === n) && (null == t.hostname || 0 === t.hostname.length))
            throw Error("no hostname");
        let i = (0, f.nK)(t);
        (t.username = ""), (t.password = "");
        let r = (0, f.nK)(t);
        return { target: i, displayTarget: r };
    } catch (e) {
        return null;
    }
}
let v = {
    ...u().defaultRules.link,
    match(e, t, n) {
        if (!t.allowLinks || -1 === e.indexOf("](")) return null;
        let i = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("[" === n) {
                if (++i > 10) return null;
            } else "]" === n && i > 0 && i--;
        }
        return u().defaultRules.link.match(e, t, n);
    },
    parse(e, t, n) {
        let [i, r, a, o] = e,
            l = () => ({ type: h.TEXT, content: i });
        if (C(a)) return l();
        let _ = E(a),
            f = E(r),
            p = E(null != o ? o : ""),
            m = _.whitespaceSanitized,
            v = f.fullySanitized,
            R = p.fullySanitized,
            O = v.trim();
        if (0 === m.trim().length || 0 === O.length) return l();
        let b = N(u().unescapeUrl(a)),
            D = (0, c.Ay)(r).length > 0 || (0, c.Ay)(o).length > 0;
        if (null == b || D) return l();
        let L = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            w = n.allowEmojiLinks ? A : g,
            M = [...w, ...I],
            P = [...T, ...S],
            x = y(t(v, L), M, [h.EMOJI]),
            k = y(t(R, L), P);
        if (
            null == x ||
            null == k ||
            0 ===
                (function e(t) {
                    let n = "";
                    for (let i of t)
                        switch (i.type) {
                            case h.TEXT:
                            case h.INLINE_CODE:
                                n += i.content;
                                break;
                            case h.CUSTOM_EMOJI:
                                n += i.name;
                                break;
                            case h.EMOJI:
                                n += i.surrogate;
                                break;
                            case h.LINE_BREAK:
                                n += "\n";
                                break;
                            case h.STRONG:
                            case h.ITALICS:
                            case h.UNDERLINE:
                            case h.STRIKETHROUGH:
                            case h.SPOILER:
                                n += e(i.content);
                                break;
                            case h.TIMESTAMP:
                                n += "<timestamp>";
                                break;
                            case h.BLOCK_QUOTE:
                            case h.LIST:
                            case h.HEADING:
                            case h.SUBTEXT:
                                n += `<${i.type}Content>`;
                                break;
                            default:
                                (0, d.xb)(i.type);
                        }
                    return n;
                })(x).trim().length
        )
            return l();
        let U = s().pick(t.rules, w),
            G = u().parserFor(U)(f.whitespaceSanitized, L),
            F = p.whitespaceSanitized,
            { target: V } = b;
        return { content: G, target: V, title: F };
    },
};
