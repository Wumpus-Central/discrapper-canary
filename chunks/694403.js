"use strict";
n.d(t, { Ay: () => N, W1: () => C }), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    s = n(635377),
    a = n.n(s);
n(228785);
var o = n(791332),
    l = n.n(o),
    u = n(833291),
    c = n(403362),
    d = n(998218),
    _ = n(182490),
    h = n(417964);
let f = new (a())({ max: 50 });
function p(e) {
    let t = f.get(e);
    if (null != t) return t;
    let n = (0, h.Fd)(e),
        i = (0, h.El)(n),
        r = { whitespaceSanitized: n, fullySanitized: i };
    return f.set(e, r), r;
}
let E = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
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
    for (let i of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === i || !t.includes(i.type)) return null;
        if (i.type === _.D.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == S(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == S(i.content, t)) return null;
    }
    return e;
}
function y(e) {
    if ((0, u.rL)(e) || p(e).whitespaceSanitized !== e) return !0;
    let t = d.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || d.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function C(e) {
    try {
        if (y(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!E.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
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
let N = {
    ...l().defaultRules.link,
    match(e, t, n) {
        if (!t.allowLinks || -1 === e.indexOf("](")) return null;
        let i = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("[" === n) {
                if (++i > 10) return null;
            } else "]" === n && i > 0 && i--;
        }
        return l().defaultRules.link.match(e, t, n);
    },
    parse(e, t, n) {
        let [i, s, a, o] = e;
        function d() {
            return { type: _.D.TEXT, content: i };
        }
        if (y(a)) return d();
        let h = p(a),
            f = p(s),
            E = p(null != o ? o : ""),
            N = h.whitespaceSanitized,
            v = f.fullySanitized,
            R = E.fullySanitized,
            O = v.trim();
        if (0 === N.trim().length || 0 === O.length) return d();
        let b = C(l().unescapeUrl(a)),
            D = (0, u.Ay)(s).length > 0 || (0, u.Ay)(o).length > 0;
        if (null == b || D) return d();
        let L = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            w = n.allowEmojiLinks ? g : m,
            M = [...w, ...A],
            P = [...I, ...T],
            x = S(t(v, L), M, [_.D.EMOJI]),
            k = S(t(R, L), P);
        if (
            null == x ||
            null == k ||
            0 ===
                (function e(t) {
                    let n = "";
                    for (let i of t)
                        switch (i.type) {
                            case _.D.TEXT:
                            case _.D.INLINE_CODE:
                                n += i.content;
                                break;
                            case _.D.CUSTOM_EMOJI:
                                n += i.name;
                                break;
                            case _.D.EMOJI:
                                n += i.surrogate;
                                break;
                            case _.D.LINE_BREAK:
                                n += "\n";
                                break;
                            case _.D.STRONG:
                            case _.D.ITALICS:
                            case _.D.UNDERLINE:
                            case _.D.STRIKETHROUGH:
                            case _.D.SPOILER:
                                n += e(i.content);
                                break;
                            case _.D.TIMESTAMP:
                                n += "<timestamp>";
                                break;
                            case _.D.BLOCK_QUOTE:
                            case _.D.LIST:
                            case _.D.HEADING:
                            case _.D.SUBTEXT:
                                n += `<${i.type}Content>`;
                                break;
                            default:
                                (0, c.xb)(i.type);
                        }
                    return n;
                })(x).trim().length
        )
            return d();
        let U = r().pick(t.rules, w),
            G = l().parserFor(U)(f.whitespaceSanitized, L),
            F = E.whitespaceSanitized,
            { target: V } = b;
        return { content: G, target: V, title: F };
    },
};
