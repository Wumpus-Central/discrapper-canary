n.d(t, {
    ZP: () => S,
    yw: () => b
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104);
var i = n(392711),
    r = n.n(i),
    a = n(31775),
    s = n.n(a);
n(711739);
var o = n(477660),
    l = n.n(o),
    u = n(830121),
    c = n(823379),
    d = n(172244),
    f = n(571989);
let _ = new (s())({ max: 50 });
function p(e) {
    let t = e,
        n = _.get(t);
    if (null != n) return n;
    let i = (0, f.yx)(e),
        r = (0, f.zq)(i),
        a = {
            whitespaceSanitized: i,
            fullySanitized: r
        };
    return _.set(t, a), a;
}
let h = ['http:', 'https:', 'discord:'],
    m = [d.b.TEXT, d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP],
    g = [...m, d.b.EMOJI, d.b.CUSTOM_EMOJI],
    E = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
    v = [d.b.TEXT],
    y = [d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP, d.b.EMOJI, d.b.CUSTOM_EMOJI, d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT];
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let i of (Array.isArray(e) || (e = [e]), e)) {
        if (void 0 === i || !t.includes(i.type)) return null;
        if (i.type === d.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == I(i.validationChildContent, e)) return null;
        }
        if (Array.isArray(i.content) && null == I(i.content, t)) return null;
    }
    return e;
}
function T(e) {
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
                t += T(n.content);
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
                (0, c.vE)(n.type);
        }
    return t;
}
function b(e) {
    try {
        var t;
        let n = new URL(e),
            i = null !== (t = n.protocol) && void 0 !== t ? t : '';
        if (!h.includes(i.toLowerCase())) throw Error('Provided protocol is not allowed: ' + i);
        if (('http:' === i || 'https:' === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let r = (0, f.MO)(n);
        (n.username = ''), (n.password = '');
        let a = (0, f.MO)(n);
        return {
            target: r,
            displayTarget: a
        };
    } catch (e) {
        return null;
    }
}
let S = {
    ...l().defaultRules.link,
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [i, a, s, o] = e,
            c = () => ({
                type: d.b.TEXT,
                content: i
            }),
            f = p(s),
            _ = p(a),
            h = p(null != o ? o : ''),
            S = f.whitespaceSanitized,
            A = _.fullySanitized,
            N = h.fullySanitized,
            C = A.trim();
        if (0 === S.trim().length || 0 === C.length) return c();
        let R = b(l().unescapeUrl(s)),
            O = null == R,
            D = (0, u.ZP)(a).length > 0 || (0, u.ZP)(o).length > 0;
        if (O || D) return c();
        let x = {
                ...n,
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            },
            L = n.allowEmojiLinks ? g : m,
            P = [...L, ...E],
            w = [...v, ...y],
            M = I(t(A, x), P, [d.b.EMOJI]),
            k = I(t(N, x), w);
        if (null == M || null == k || 0 === T(M).trim().length) return c();
        let U = r().pick(t.rules, L),
            G = l().parserFor(U)(_.whitespaceSanitized, x),
            B = h.whitespaceSanitized,
            { target: Z } = R;
        return {
            content: G,
            target: Z,
            title: B
        };
    }
};
