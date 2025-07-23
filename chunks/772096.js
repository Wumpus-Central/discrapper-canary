(n.d(t, {
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
    n(781311));
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
    _ = n(172244),
    f = n(571989);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let E = new (o())({ max: 50 });
function b(e) {
    let t = e,
        n = E.get(t);
    if (null != n) return n;
    let r = (0, f.yx)(e),
        i = (0, f.zq)(r),
        a = {
            whitespaceSanitized: r,
            fullySanitized: i
        };
    return (E.set(t, a), a);
}
let y = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'],
    O = [_.b.TEXT, _.b.UNDERLINE, _.b.STRONG, _.b.ITALICS, _.b.STRIKETHROUGH, _.b.INLINE_CODE, _.b.SPOILER, _.b.LINE_BREAK, _.b.TIMESTAMP],
    v = [...O, _.b.EMOJI, _.b.CUSTOM_EMOJI],
    I = [_.b.LIST, _.b.HEADING, _.b.BLOCK_QUOTE, _.b.SUBTEXT],
    T = [_.b.TEXT],
    S = [_.b.UNDERLINE, _.b.STRONG, _.b.ITALICS, _.b.STRIKETHROUGH, _.b.INLINE_CODE, _.b.SPOILER, _.b.LINE_BREAK, _.b.TIMESTAMP, _.b.EMOJI, _.b.CUSTOM_EMOJI, _.b.LIST, _.b.HEADING, _.b.BLOCK_QUOTE, _.b.SUBTEXT];
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === _.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == A(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == A(r.content, t)) return null;
    }
    return e;
}
function N(e) {
    let t = '';
    for (let n of e)
        switch (n.type) {
            case _.b.TEXT:
            case _.b.INLINE_CODE:
                t += n.content;
                break;
            case _.b.CUSTOM_EMOJI:
                t += n.name;
                break;
            case _.b.EMOJI:
                t += n.surrogate;
                break;
            case _.b.LINE_BREAK:
                t += '\n';
                break;
            case _.b.STRONG:
            case _.b.ITALICS:
            case _.b.UNDERLINE:
            case _.b.STRIKETHROUGH:
            case _.b.SPOILER:
                t += N(n.content);
                break;
            case _.b.TIMESTAMP:
                t += '<timestamp>';
                break;
            case _.b.BLOCK_QUOTE:
            case _.b.LIST:
            case _.b.HEADING:
            case _.b.SUBTEXT:
                t += '<'.concat(n.type, 'Content>');
                break;
            default:
                (0, u.vE)(n.type);
        }
    return t;
}
function C(e) {
    if (b(e).whitespaceSanitized !== e) return !0;
    let t = d.Z.toURLSafe(e);
    if (null == t) return !0;
    if ('http:' !== t.protocol && 'https:' !== t.protocol) return !1;
    let n = e.split('/');
    return n.length < 3 || '' !== n[1] || d.Z.safeDecodeURIComponent(n[2]) !== n[2];
}
function R(e) {
    try {
        var t;
        if (C(e)) throw Error('Rejected due to suspicious characters in URL: ' + JSON.stringify(e));
        let n = new URL(e),
            r = null != (t = n.protocol) ? t : '';
        if (!y.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
        if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let i = (0, f.MO)(n);
        ((n.username = ''), (n.password = ''));
        let a = (0, f.MO)(n);
        return {
            target: i,
            displayTarget: a
        };
    } catch (e) {
        return null;
    }
}
let P = g(h({}, l().defaultRules.link), {
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, o, s] = e,
            u = () => ({
                type: _.b.TEXT,
                content: r
            });
        if (C(o)) return u();
        let d = b(o),
            f = b(a),
            p = b(null != s ? s : ''),
            m = d.whitespaceSanitized,
            E = f.fullySanitized,
            y = p.fullySanitized,
            P = E.trim();
        if (0 === m.trim().length || 0 === P.length) return u();
        let w = R(l().unescapeUrl(o)),
            D = null == w,
            L = (0, c.ZP)(a).length > 0 || (0, c.ZP)(s).length > 0;
        if (D || L) return u();
        let x = g(h({}, n), {
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            }),
            M = n.allowEmojiLinks ? v : O,
            k = [...M, ...I],
            j = [...T, ...S],
            U = A(t(E, x), k, [_.b.EMOJI]),
            G = A(t(y, x), j);
        if (null == U || null == G || 0 === N(U).trim().length) return u();
        let B = i().pick(t.rules, M),
            V = l().parserFor(B)(f.whitespaceSanitized, x),
            F = p.whitespaceSanitized,
            { target: Z } = w;
        return {
            content: V,
            target: Z,
            title: F
        };
    }
});
