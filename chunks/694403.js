n.d(t, {
    Ay: () => w,
    W1: () => R,
}),
    n(896048),
    n(747238),
    n(65821),
    n(457529),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(733351);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a);
n(228785);
var o = n(280230),
    l = n.n(o),
    c = n(833291),
    u = n(403362),
    d = n(998218),
    f = n(182490),
    p = n(417964);
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
function h(e) {
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
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new (s())({ max: 50 });
function b(e) {
    let t = e,
        n = E.get(t);
    if (null != n) return n;
    let r = (0, p.Fd)(e),
        i = (0, p.El)(r),
        a = {
            whitespaceSanitized: r,
            fullySanitized: i,
        };
    return E.set(t, a), a;
}
let y = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    O = [
        f.D.TEXT,
        f.D.UNDERLINE,
        f.D.STRONG,
        f.D.ITALICS,
        f.D.STRIKETHROUGH,
        f.D.INLINE_CODE,
        f.D.SPOILER,
        f.D.LINE_BREAK,
        f.D.TIMESTAMP,
    ],
    A = [...O, f.D.EMOJI, f.D.CUSTOM_EMOJI],
    v = [f.D.LIST, f.D.HEADING, f.D.BLOCK_QUOTE, f.D.SUBTEXT],
    S = [f.D.TEXT],
    I = [
        f.D.UNDERLINE,
        f.D.STRONG,
        f.D.ITALICS,
        f.D.STRIKETHROUGH,
        f.D.INLINE_CODE,
        f.D.SPOILER,
        f.D.LINE_BREAK,
        f.D.TIMESTAMP,
        f.D.EMOJI,
        f.D.CUSTOM_EMOJI,
        f.D.LIST,
        f.D.HEADING,
        f.D.BLOCK_QUOTE,
        f.D.SUBTEXT,
    ];
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === f.D.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == T(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == T(r.content, t)) return null;
    }
    return e;
}
function C(e) {
    let t = "";
    for (let n of e)
        switch (n.type) {
            case f.D.TEXT:
            case f.D.INLINE_CODE:
                t += n.content;
                break;
            case f.D.CUSTOM_EMOJI:
                t += n.name;
                break;
            case f.D.EMOJI:
                t += n.surrogate;
                break;
            case f.D.LINE_BREAK:
                t += "\n";
                break;
            case f.D.STRONG:
            case f.D.ITALICS:
            case f.D.UNDERLINE:
            case f.D.STRIKETHROUGH:
            case f.D.SPOILER:
                t += C(n.content);
                break;
            case f.D.TIMESTAMP:
                t += "<timestamp>";
                break;
            case f.D.BLOCK_QUOTE:
            case f.D.LIST:
            case f.D.HEADING:
            case f.D.SUBTEXT:
                t += "<".concat(n.type, "Content>");
                break;
            default:
                (0, u.xb)(n.type);
        }
    return t;
}
function N(e) {
    if ((0, c.rL)(e) || b(e).whitespaceSanitized !== e) return !0;
    let t = d.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || d.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function R(e) {
    try {
        var t;
        if (N(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let n = new URL(e),
            r = null != (t = n.protocol) ? t : "";
        if (!y.includes(r.toLowerCase())) throw Error("Provided protocol is not allowed: " + r);
        if (("http:" === r || "https:" === r) && (null == n.hostname || 0 === n.hostname.length))
            throw Error("no hostname");
        let i = (0, p.nK)(n);
        (n.username = ""), (n.password = "");
        let a = (0, p.nK)(n);
        return {
            target: i,
            displayTarget: a,
        };
    } catch (e) {
        return null;
    }
}
let w = g(h({}, l().defaultRules.link), {
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, s, o] = e,
            u = () => ({
                type: f.D.TEXT,
                content: r,
            });
        if (N(s)) return u();
        let d = b(s),
            p = b(a),
            _ = b(null != o ? o : ""),
            m = d.whitespaceSanitized,
            E = p.fullySanitized,
            y = _.fullySanitized,
            w = E.trim();
        if (0 === m.trim().length || 0 === w.length) return u();
        let P = R(l().unescapeUrl(s)),
            D = null == P,
            x = (0, c.Ay)(a).length > 0 || (0, c.Ay)(o).length > 0;
        if (D || x) return u();
        let L = g(h({}, n), {
                allowEscape: !1,
                parseInlineCodeChildContent: !0,
            }),
            j = n.allowEmojiLinks ? A : O,
            M = [...j, ...v],
            k = [...S, ...I],
            U = T(t(E, L), M, [f.D.EMOJI]),
            G = T(t(y, L), k);
        if (null == U || null == G || 0 === C(U).trim().length) return u();
        let V = i().pick(t.rules, j),
            F = l().parserFor(V)(p.whitespaceSanitized, L),
            B = _.whitespaceSanitized,
            { target: H } = P;
        return {
            content: F,
            target: H,
            title: B,
        };
    },
});
