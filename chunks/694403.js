"use strict";
n.d(t, { Ay: () => O, W1: () => N }), n(323874), n(14289), n(35956);
var r = n(735438),
    i = n.n(r),
    s = n(635377),
    a = n.n(s);
n(228785);
var o = n(791332),
    l = n.n(o),
    u = n(833291),
    d = n(403362),
    c = n(998218),
    _ = n(182490),
    f = n(417964);
let E = new (a())({ max: 50 });
function h(e) {
    let t = E.get(e);
    if (null != t) return t;
    let n = (0, f.Fd)(e),
        r = (0, f.El)(n),
        i = { whitespaceSanitized: n, fullySanitized: r };
    return E.set(e, i), i;
}
let p = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    m = [
        _.D.TEXT,
        _.D.UNDERLINE,
        _.D.STRONG,
        _.D.ITALICS,
        _.D.STRIKETHROUGH,
        _.D.INLINE_CODE,
        _.D.SPOILER,
        _.D.LINE_BREAK,
        _.D.TIMESTAMP,
    ],
    g = [...m, _.D.EMOJI, _.D.CUSTOM_EMOJI],
    A = [_.D.LIST, _.D.HEADING, _.D.BLOCK_QUOTE, _.D.SUBTEXT],
    I = [_.D.TEXT],
    T = [
        _.D.UNDERLINE,
        _.D.STRONG,
        _.D.ITALICS,
        _.D.STRIKETHROUGH,
        _.D.INLINE_CODE,
        _.D.SPOILER,
        _.D.LINE_BREAK,
        _.D.TIMESTAMP,
        _.D.EMOJI,
        _.D.CUSTOM_EMOJI,
        _.D.LIST,
        _.D.HEADING,
        _.D.BLOCK_QUOTE,
        _.D.SUBTEXT,
    ];
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === _.D.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == S(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == S(r.content, t)) return null;
    }
    return e;
}
function y(e) {
    if ((0, u.rL)(e) || h(e).whitespaceSanitized !== e) return !0;
    let t = c.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || c.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function N(e) {
    try {
        if (y(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!p.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
        if (("http:" === n || "https:" === n) && (null == t.hostname || 0 === t.hostname.length))
            throw Error("no hostname");
        let r = (0, f.nK)(t);
        (t.username = ""), (t.password = "");
        let i = (0, f.nK)(t);
        return { target: r, displayTarget: i };
    } catch (e) {
        return null;
    }
}
let O = {
    ...l().defaultRules.link,
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, s, a, o] = e,
            c = () => ({ type: _.D.TEXT, content: r });
        if (y(a)) return c();
        let f = h(a),
            E = h(s),
            p = h(null != o ? o : ""),
            O = f.whitespaceSanitized,
            R = E.fullySanitized,
            v = p.fullySanitized,
            C = R.trim();
        if (0 === O.trim().length || 0 === C.length) return c();
        let b = N(l().unescapeUrl(a)),
            D = (0, u.Ay)(s).length > 0 || (0, u.Ay)(o).length > 0;
        if (null == b || D) return c();
        let L = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            w = n.allowEmojiLinks ? g : m,
            M = [...w, ...A],
            P = [...I, ...T],
            U = S(t(R, L), M, [_.D.EMOJI]),
            k = S(t(v, L), P);
        if (
            null == U ||
            null == k ||
            0 ===
                (function e(t) {
                    let n = "";
                    for (let r of t)
                        switch (r.type) {
                            case _.D.TEXT:
                            case _.D.INLINE_CODE:
                                n += r.content;
                                break;
                            case _.D.CUSTOM_EMOJI:
                                n += r.name;
                                break;
                            case _.D.EMOJI:
                                n += r.surrogate;
                                break;
                            case _.D.LINE_BREAK:
                                n += "\n";
                                break;
                            case _.D.STRONG:
                            case _.D.ITALICS:
                            case _.D.UNDERLINE:
                            case _.D.STRIKETHROUGH:
                            case _.D.SPOILER:
                                n += e(r.content);
                                break;
                            case _.D.TIMESTAMP:
                                n += "<timestamp>";
                                break;
                            case _.D.BLOCK_QUOTE:
                            case _.D.LIST:
                            case _.D.HEADING:
                            case _.D.SUBTEXT:
                                n += `<${r.type}Content>`;
                                break;
                            default:
                                (0, d.xb)(r.type);
                        }
                    return n;
                })(U).trim().length
        )
            return c();
        let x = i().pick(t.rules, w),
            G = l().parserFor(x)(E.whitespaceSanitized, L),
            V = p.whitespaceSanitized,
            { target: F } = b;
        return { content: G, target: F, title: V };
    },
};
