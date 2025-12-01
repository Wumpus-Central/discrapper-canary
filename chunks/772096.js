n.d(t, {
    ZP: () => R,
    yw: () => P,
}),
    n(388685),
    n(35282),
    n(415506),
    n(49124),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    o = n.n(a);
n(711739);
var s = n(159635),
    l = n.n(s),
    c = n(830121),
    u = n(823379),
    d = n(591759),
    f = n(172244),
    p = n(571989);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new (o())({ max: 50 });
function b(e) {
    let t = e,
        n = E.get(t);
    if (null != n) return n;
    let r = (0, p.yx)(e),
        i = (0, p.zq)(r),
        a = {
            whitespaceSanitized: r,
            fullySanitized: i,
        };
    return E.set(t, a), a;
}
let y = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    O = [
        f.b.TEXT,
        f.b.UNDERLINE,
        f.b.STRONG,
        f.b.ITALICS,
        f.b.STRIKETHROUGH,
        f.b.INLINE_CODE,
        f.b.SPOILER,
        f.b.LINE_BREAK,
        f.b.TIMESTAMP,
    ],
    v = [...O, f.b.EMOJI, f.b.CUSTOM_EMOJI],
    S = [f.b.LIST, f.b.HEADING, f.b.BLOCK_QUOTE, f.b.SUBTEXT],
    I = [f.b.TEXT],
    T = [
        f.b.UNDERLINE,
        f.b.STRONG,
        f.b.ITALICS,
        f.b.STRIKETHROUGH,
        f.b.INLINE_CODE,
        f.b.SPOILER,
        f.b.LINE_BREAK,
        f.b.TIMESTAMP,
        f.b.EMOJI,
        f.b.CUSTOM_EMOJI,
        f.b.LIST,
        f.b.HEADING,
        f.b.BLOCK_QUOTE,
        f.b.SUBTEXT,
    ];
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === f.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == A(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == A(r.content, t)) return null;
    }
    return e;
}
function C(e) {
    let t = "";
    for (let n of e)
        switch (n.type) {
            case f.b.TEXT:
            case f.b.INLINE_CODE:
                t += n.content;
                break;
            case f.b.CUSTOM_EMOJI:
                t += n.name;
                break;
            case f.b.EMOJI:
                t += n.surrogate;
                break;
            case f.b.LINE_BREAK:
                t += "\n";
                break;
            case f.b.STRONG:
            case f.b.ITALICS:
            case f.b.UNDERLINE:
            case f.b.STRIKETHROUGH:
            case f.b.SPOILER:
                t += C(n.content);
                break;
            case f.b.TIMESTAMP:
                t += "<timestamp>";
                break;
            case f.b.BLOCK_QUOTE:
            case f.b.LIST:
            case f.b.HEADING:
            case f.b.SUBTEXT:
                t += "<".concat(n.type, "Content>");
                break;
            default:
                (0, u.vE)(n.type);
        }
    return t;
}
function N(e) {
    if ((0, c.wT)(e) || b(e).whitespaceSanitized !== e) return !0;
    let t = d.Z.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || d.Z.safeDecodeURIComponent(n[2]) !== n[2];
}
function P(e) {
    try {
        var t;
        if (N(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let n = new URL(e),
            r = null != (t = n.protocol) ? t : "";
        if (!y.includes(r.toLowerCase())) throw Error("Provided protocol is not allowed: " + r);
        if (("http:" === r || "https:" === r) && (null == n.hostname || 0 === n.hostname.length))
            throw Error("no hostname");
        let i = (0, p.MO)(n);
        (n.username = ""), (n.password = "");
        let a = (0, p.MO)(n);
        return {
            target: i,
            displayTarget: a,
        };
    } catch (e) {
        return null;
    }
}
let R = g(m({}, l().defaultRules.link), {
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, o, s] = e,
            u = () => ({
                type: f.b.TEXT,
                content: r,
            });
        if (N(o)) return u();
        let d = b(o),
            p = b(a),
            _ = b(null != s ? s : ""),
            h = d.whitespaceSanitized,
            E = p.fullySanitized,
            y = _.fullySanitized,
            R = E.trim();
        if (0 === h.trim().length || 0 === R.length) return u();
        let w = P(l().unescapeUrl(o)),
            D = null == w,
            x = (0, c.ZP)(a).length > 0 || (0, c.ZP)(s).length > 0;
        if (D || x) return u();
        let L = g(m({}, n), {
                allowEscape: !1,
                parseInlineCodeChildContent: !0,
            }),
            j = n.allowEmojiLinks ? v : O,
            M = [...j, ...S],
            k = [...I, ...T],
            U = A(t(E, L), M, [f.b.EMOJI]),
            G = A(t(y, L), k);
        if (null == U || null == G || 0 === C(U).trim().length) return u();
        let Z = i().pick(t.rules, j),
            B = l().parserFor(Z)(p.whitespaceSanitized, L),
            F = _.whitespaceSanitized,
            { target: V } = w;
        return {
            content: B,
            target: V,
            title: F,
        };
    },
});
