n.d(t, {
    ZP: () => P,
    yw: () => R
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
    d = n(172244),
    _ = n(571989);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
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
function m(e, t) {
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
let g = new (o())({ max: 50 });
function E(e) {
    let t = e,
        n = g.get(t);
    if (null != n) return n;
    let r = (0, _.yx)(e),
        i = (0, _.zq)(r),
        a = {
            whitespaceSanitized: r,
            fullySanitized: i
        };
    return g.set(t, a), a;
}
let b = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'],
    y = [d.b.TEXT, d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP],
    O = [...y, d.b.EMOJI, d.b.CUSTOM_EMOJI],
    v = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
    I = [d.b.TEXT],
    T = [d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP, d.b.EMOJI, d.b.CUSTOM_EMOJI, d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT];
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === d.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == S(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == S(r.content, t)) return null;
    }
    return e;
}
function A(e) {
    let t = '';
    for (let n of e)
        switch (n.type) {
            case d.b.TEXT:
            case d.b.INLINE_CODE:
                t += n.content;
                break;
            case d.b.CUSTOM_EMOJI:
                t += n.name;
                break;
            case d.b.EMOJI:
                t += n.surrogate;
                break;
            case d.b.LINE_BREAK:
                t += '\n';
                break;
            case d.b.STRONG:
            case d.b.ITALICS:
            case d.b.UNDERLINE:
            case d.b.STRIKETHROUGH:
            case d.b.SPOILER:
                t += A(n.content);
                break;
            case d.b.TIMESTAMP:
                t += '<timestamp>';
                break;
            case d.b.BLOCK_QUOTE:
            case d.b.LIST:
            case d.b.HEADING:
            case d.b.SUBTEXT:
                t += '<'.concat(n.type, 'Content>');
                break;
            default:
                (0, u.vE)(n.type);
        }
    return t;
}
let N = [/\\/, /[\x00-\x08\x0A-\x1F\x7F]/, /[\u200B-\u200D\u2060\u2062-\u2064\u202A-\u202E\uFEFF]/, /%25[0-9A-Fa-f]/];
function C(e) {
    return N.some((t) => t.test(e));
}
function R(e) {
    try {
        var t;
        if (C(e)) throw Error('Rejected due to suspicious characters in URL: ' + JSON.stringify(e));
        let n = new URL(e),
            r = null != (t = n.protocol) ? t : '';
        if (!b.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
        if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let i = (0, _.MO)(n);
        (n.username = ''), (n.password = '');
        let a = (0, _.MO)(n);
        return {
            target: i,
            displayTarget: a
        };
    } catch (e) {
        return null;
    }
}
let P = m(p({}, l().defaultRules.link), {
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, o, s] = e,
            u = () => ({
                type: d.b.TEXT,
                content: r
            });
        if (C(o)) return u();
        let _ = E(o),
            f = E(a),
            h = E(null != s ? s : ''),
            g = _.whitespaceSanitized,
            b = f.fullySanitized,
            N = h.fullySanitized,
            P = b.trim();
        if (0 === g.trim().length || 0 === P.length) return u();
        let w = R(l().unescapeUrl(o)),
            D = null == w,
            L = (0, c.ZP)(a).length > 0 || (0, c.ZP)(s).length > 0;
        if (D || L) return u();
        let x = m(p({}, n), {
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            }),
            M = n.allowEmojiLinks ? O : y,
            k = [...M, ...v],
            j = [...I, ...T],
            U = S(t(b, x), k, [d.b.EMOJI]),
            G = S(t(N, x), j);
        if (null == U || null == G || 0 === A(U).trim().length) return u();
        let B = i().pick(t.rules, M),
            V = l().parserFor(B)(f.whitespaceSanitized, x),
            F = h.whitespaceSanitized,
            { target: Z } = w;
        return {
            content: V,
            target: Z,
            title: F
        };
    }
});
