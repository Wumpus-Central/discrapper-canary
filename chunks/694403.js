"use strict";
n.d(t, { Ay: () => b, W1: () => C }), n(323874), n(14289), n(35956);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a);
n(228785);
var o = n(791332),
    l = n.n(o),
    u = n(833291),
    c = n(403362),
    d = n(998218),
    _ = n(182490),
    f = n(417964);
let p = new (s())({ max: 50 });
function h(e) {
    let t = e,
        n = p.get(t);
    if (null != n) return n;
    let r = (0, f.Fd)(e),
        i = (0, f.El)(r),
        a = { whitespaceSanitized: r, fullySanitized: i };
    return p.set(t, a), a;
}
let m = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    g = [
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
    E = [...g, _.D.EMOJI, _.D.CUSTOM_EMOJI],
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
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === _.D.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == y(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == y(r.content, t)) return null;
    }
    return e;
}
function S(e) {
    let t = "";
    for (let n of e)
        switch (n.type) {
            case _.D.TEXT:
            case _.D.INLINE_CODE:
                t += n.content;
                break;
            case _.D.CUSTOM_EMOJI:
                t += n.name;
                break;
            case _.D.EMOJI:
                t += n.surrogate;
                break;
            case _.D.LINE_BREAK:
                t += "\n";
                break;
            case _.D.STRONG:
            case _.D.ITALICS:
            case _.D.UNDERLINE:
            case _.D.STRIKETHROUGH:
            case _.D.SPOILER:
                t += S(n.content);
                break;
            case _.D.TIMESTAMP:
                t += "<timestamp>";
                break;
            case _.D.BLOCK_QUOTE:
            case _.D.LIST:
            case _.D.HEADING:
            case _.D.SUBTEXT:
                t += `<${n.type}Content>`;
                break;
            default:
                (0, c.xb)(n.type);
        }
    return t;
}
function v(e) {
    if ((0, u.rL)(e) || h(e).whitespaceSanitized !== e) return !0;
    let t = d.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || d.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function C(e) {
    try {
        if (v(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!m.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
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
let b = {
    ...l().defaultRules.link,
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, s, o] = e,
            c = () => ({ type: _.D.TEXT, content: r });
        if (v(s)) return c();
        let d = h(s),
            f = h(a),
            p = h(null != o ? o : ""),
            m = d.whitespaceSanitized,
            b = f.fullySanitized,
            N = p.fullySanitized,
            R = b.trim();
        if (0 === m.trim().length || 0 === R.length) return c();
        let O = C(l().unescapeUrl(s)),
            D = null == O,
            L = (0, u.Ay)(a).length > 0 || (0, u.Ay)(o).length > 0;
        if (D || L) return c();
        let w = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            x = n.allowEmojiLinks ? E : g,
            P = [...x, ...A],
            M = [...I, ...T],
            k = y(t(b, w), P, [_.D.EMOJI]),
            U = y(t(N, w), M);
        if (null == k || null == U || 0 === S(k).trim().length) return c();
        let G = i().pick(t.rules, x),
            V = l().parserFor(G)(f.whitespaceSanitized, w),
            F = p.whitespaceSanitized,
            { target: B } = O;
        return { content: V, target: B, title: F };
    },
};
