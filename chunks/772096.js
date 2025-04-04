n.d(t, {
    ZP: () => C,
    yw: () => A
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(301563),
    n(566702);
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o);
n(711739);
var s = n(477660),
    l = n.n(s),
    c = n(830121),
    u = n(823379),
    d = n(172244),
    f = n(571989);
function _(e, t, n) {
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
let g = new (a())({ max: 50 });
function E(e) {
    let t = e,
        n = g.get(t);
    if (null != n) return n;
    let r = (0, f.yx)(e),
        i = (0, f.zq)(r),
        o = {
            whitespaceSanitized: r,
            fullySanitized: i
        };
    return g.set(t, o), o;
}
let b = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'],
    y = [d.b.TEXT, d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP],
    v = [...y, d.b.EMOJI, d.b.CUSTOM_EMOJI],
    O = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
    I = [d.b.TEXT],
    S = [d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP, d.b.EMOJI, d.b.CUSTOM_EMOJI, d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT];
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === d.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == T(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == T(r.content, t)) return null;
    }
    return e;
}
function N(e) {
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
                t += N(n.content);
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
function A(e) {
    try {
        var t;
        let n = new URL(e),
            r = null != (t = n.protocol) ? t : '';
        if (!b.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
        if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let i = (0, f.MO)(n);
        (n.username = ''), (n.password = '');
        let o = (0, f.MO)(n);
        return {
            target: i,
            displayTarget: o
        };
    } catch (e) {
        return null;
    }
}
let C = m(p({}, l().defaultRules.link), {
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, o, a, s] = e,
            u = () => ({
                type: d.b.TEXT,
                content: r
            }),
            f = E(a),
            _ = E(o),
            h = E(null != s ? s : ''),
            g = f.whitespaceSanitized,
            b = _.fullySanitized,
            C = h.fullySanitized,
            R = b.trim();
        if (0 === g.trim().length || 0 === R.length) return u();
        let P = A(l().unescapeUrl(a)),
            w = null == P,
            D = (0, c.ZP)(o).length > 0 || (0, c.ZP)(s).length > 0;
        if (w || D) return u();
        let L = m(p({}, n), {
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            }),
            x = n.allowEmojiLinks ? v : y,
            M = [...x, ...O],
            k = [...I, ...S],
            j = T(t(b, L), M, [d.b.EMOJI]),
            U = T(t(C, L), k);
        if (null == j || null == U || 0 === N(j).trim().length) return u();
        let G = i().pick(t.rules, x),
            B = l().parserFor(G)(_.whitespaceSanitized, L),
            F = h.whitespaceSanitized,
            { target: V } = P;
        return {
            content: B,
            target: V,
            title: F
        };
    }
});
