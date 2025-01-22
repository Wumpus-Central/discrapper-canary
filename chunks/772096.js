r.d(n, {
    yw: function () {
        return L;
    }
});
var i = r(47120);
var a = r(315314);
var o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(411104);
var d = r(392711),
    f = r.n(d),
    p = r(31775),
    h = r.n(p),
    _ = r(711739);
var m = r(477660),
    g = r.n(m),
    E = r(830121),
    v = r(823379),
    y = r(172244),
    b = r(571989);
let I = new (h())({ max: 50 });
function T(e) {
    let n = e,
        r = I.get(n);
    if (null != r) return r;
    let i = (0, b.yx)(e),
        a = (0, b.zq)(i),
        o = {
            whitespaceSanitized: i,
            fullySanitized: a
        };
    return I.set(n, o), o;
}
let S = ['http:', 'https:', 'discord:'],
    A = [y.b.TEXT, y.b.UNDERLINE, y.b.STRONG, y.b.ITALICS, y.b.STRIKETHROUGH, y.b.INLINE_CODE, y.b.SPOILER, y.b.LINE_BREAK, y.b.TIMESTAMP],
    C = [...A, y.b.EMOJI, y.b.CUSTOM_EMOJI],
    N = [y.b.LIST, y.b.HEADING, y.b.BLOCK_QUOTE, y.b.SUBTEXT],
    R = [y.b.TEXT],
    O = [y.b.UNDERLINE, y.b.STRONG, y.b.ITALICS, y.b.STRIKETHROUGH, y.b.INLINE_CODE, y.b.SPOILER, y.b.LINE_BREAK, y.b.TIMESTAMP, y.b.EMOJI, y.b.CUSTOM_EMOJI, y.b.LIST, y.b.HEADING, y.b.BLOCK_QUOTE, y.b.SUBTEXT];
function D(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let i of (!Array.isArray(e) && (e = [e]), e)) {
        if (void 0 === i || !n.includes(i.type)) return null;
        if (i.type === y.b.INLINE_CODE) {
            let e = [...n, ...r];
            if (null == D(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == D(i.content, n)) return null;
    }
    return e;
}
function x(e) {
    let n = '';
    for (let r of e)
        switch (r.type) {
            case y.b.TEXT:
            case y.b.INLINE_CODE:
                n += r.content;
                break;
            case y.b.CUSTOM_EMOJI:
                n += r.name;
                break;
            case y.b.EMOJI:
                n += r.surrogate;
                break;
            case y.b.LINE_BREAK:
                n += '\n';
                break;
            case y.b.STRONG:
            case y.b.ITALICS:
            case y.b.UNDERLINE:
            case y.b.STRIKETHROUGH:
            case y.b.SPOILER:
                n += x(r.content);
                break;
            case y.b.TIMESTAMP:
                n += '<timestamp>';
                break;
            case y.b.BLOCK_QUOTE:
            case y.b.LIST:
            case y.b.HEADING:
            case y.b.SUBTEXT:
                n += '<'.concat(r.type, 'Content>');
                break;
            default:
                (0, v.vE)(r.type);
        }
    return n;
}
function L(e) {
    try {
        var n;
        let r = new URL(e),
            i = null !== (n = r.protocol) && void 0 !== n ? n : '';
        if (!S.includes(i.toLowerCase())) throw Error('Provided protocol is not allowed: ' + i);
        if (('http:' === i || 'https:' === i) && (null == r.hostname || 0 === r.hostname.length)) throw Error('no hostname');
        let a = (0, b.MO)(r);
        (r.username = ''), (r.password = '');
        let o = (0, b.MO)(r);
        return {
            target: a,
            displayTarget: o
        };
    } catch (e) {
        return null;
    }
}
n.ZP = {
    ...g().defaultRules.link,
    match: (e, n, r) => (n.allowLinks ? g().defaultRules.link.match(e, n, r) : null),
    parse(e, n, r) {
        let [i, a, o, s] = e,
            l = () => ({
                type: y.b.TEXT,
                content: i
            }),
            u = T(o),
            c = T(a),
            d = T(null != s ? s : ''),
            p = u.whitespaceSanitized,
            h = c.fullySanitized,
            _ = d.fullySanitized,
            m = h.trim();
        if (0 === p.trim().length || 0 === m.length) return l();
        let v = L(g().unescapeUrl(o)),
            b = null == v,
            I = (0, E.ZP)(a).length > 0 || (0, E.ZP)(s).length > 0;
        if (b || I) return l();
        let S = {
                ...r,
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            },
            w = r.allowEmojiLinks ? C : A,
            P = [...w, ...N],
            M = [...R, ...O],
            k = D(n(h, S), P, [y.b.EMOJI]),
            U = D(n(_, S), M);
        if (null == k || null == U || 0 === x(k).trim().length) return l();
        let B = f().pick(n.rules, w),
            G = g().parserFor(B)(c.whitespaceSanitized, S),
            Z = d.whitespaceSanitized,
            { target: F } = v;
        return {
            content: G,
            target: F,
            title: Z
        };
    }
};
