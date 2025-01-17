r.d(n, {
    yw: function () {
        return x;
    }
});
var i = r(47120);
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(411104);
var d = r(392711),
    f = r.n(d),
    _ = r(31775),
    h = r.n(_),
    p = r(711739);
var m = r(477660),
    g = r.n(m),
    E = r(830121),
    v = r(823379),
    I = r(172244),
    T = r(571989);
let b = new (h())({ max: 50 });
function y(e) {
    let n = e,
        r = b.get(n);
    if (null != r) return r;
    let i = (0, T.yx)(e),
        a = (0, T.zq)(i),
        s = {
            whitespaceSanitized: i,
            fullySanitized: a
        };
    return b.set(n, s), s;
}
let S = ['http:', 'https:', 'discord:'],
    A = [I.b.TEXT, I.b.UNDERLINE, I.b.STRONG, I.b.ITALICS, I.b.STRIKETHROUGH, I.b.INLINE_CODE, I.b.SPOILER, I.b.LINE_BREAK, I.b.TIMESTAMP],
    N = [...A, I.b.EMOJI, I.b.CUSTOM_EMOJI],
    C = [I.b.LIST, I.b.HEADING, I.b.BLOCK_QUOTE, I.b.SUBTEXT],
    R = [I.b.TEXT],
    O = [I.b.UNDERLINE, I.b.STRONG, I.b.ITALICS, I.b.STRIKETHROUGH, I.b.INLINE_CODE, I.b.SPOILER, I.b.LINE_BREAK, I.b.TIMESTAMP, I.b.EMOJI, I.b.CUSTOM_EMOJI, I.b.LIST, I.b.HEADING, I.b.BLOCK_QUOTE, I.b.SUBTEXT];
function D(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let i of (!Array.isArray(e) && (e = [e]), e)) {
        if (void 0 === i || !n.includes(i.type)) return null;
        if (i.type === I.b.INLINE_CODE) {
            let e = [...n, ...r];
            if (null == D(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == D(i.content, n)) return null;
    }
    return e;
}
function L(e) {
    let n = '';
    for (let r of e)
        switch (r.type) {
            case I.b.TEXT:
            case I.b.INLINE_CODE:
                n += r.content;
                break;
            case I.b.CUSTOM_EMOJI:
                n += r.name;
                break;
            case I.b.EMOJI:
                n += r.surrogate;
                break;
            case I.b.LINE_BREAK:
                n += '\n';
                break;
            case I.b.STRONG:
            case I.b.ITALICS:
            case I.b.UNDERLINE:
            case I.b.STRIKETHROUGH:
            case I.b.SPOILER:
                n += L(r.content);
                break;
            case I.b.TIMESTAMP:
                n += '<timestamp>';
                break;
            case I.b.BLOCK_QUOTE:
            case I.b.LIST:
            case I.b.HEADING:
            case I.b.SUBTEXT:
                n += '<'.concat(r.type, 'Content>');
                break;
            default:
                (0, v.vE)(r.type);
        }
    return n;
}
function x(e) {
    try {
        var n;
        let r = new URL(e),
            i = null !== (n = r.protocol) && void 0 !== n ? n : '';
        if (!S.includes(i.toLowerCase())) throw Error('Provided protocol is not allowed: ' + i);
        if (('http:' === i || 'https:' === i) && (null == r.hostname || 0 === r.hostname.length)) throw Error('no hostname');
        let a = (0, T.MO)(r);
        (r.username = ''), (r.password = '');
        let s = (0, T.MO)(r);
        return {
            target: a,
            displayTarget: s
        };
    } catch (e) {
        return null;
    }
}
n.ZP = {
    ...g().defaultRules.link,
    match: (e, n, r) => (n.allowLinks ? g().defaultRules.link.match(e, n, r) : null),
    parse(e, n, r) {
        let [i, a, s, o] = e,
            l = () => ({
                type: I.b.TEXT,
                content: i
            }),
            u = y(s),
            c = y(a),
            d = y(null != o ? o : ''),
            _ = u.whitespaceSanitized,
            h = c.fullySanitized,
            p = d.fullySanitized,
            m = h.trim();
        if (0 === _.trim().length || 0 === m.length) return l();
        let v = x(g().unescapeUrl(s)),
            T = null == v,
            b = (0, E.ZP)(a).length > 0 || (0, E.ZP)(o).length > 0;
        if (T || b) return l();
        let S = {
                ...r,
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            },
            w = r.allowEmojiLinks ? N : A,
            P = [...w, ...C],
            M = [...R, ...O],
            k = D(n(h, S), P, [I.b.EMOJI]),
            U = D(n(p, S), M);
        if (null == k || null == U || 0 === L(k).trim().length) return l();
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
