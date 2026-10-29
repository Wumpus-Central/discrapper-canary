(n.d(t, { Ay: () => R, W1: () => O }), n(323874), n(14289), n(35956));
var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a);
n(228785);
var l = n(478676),
    o = n.n(l),
    d = n(721779),
    c = n(403362),
    u = n(998218),
    _ = n(182490),
    E = n(417964);
let A = new (s())({ max: 50 });
function h(e) {
    let t = A.get(e);
    if (null != t) return t;
    let n = (0, E.Fd)(e),
        i = (0, E.El)(n),
        r = { whitespaceSanitized: n, fullySanitized: i };
    return (A.set(e, r), r);
}
let f = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
    I = [
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
    p = [...I, _.D.EMOJI, _.D.CUSTOM_EMOJI],
    T = [_.D.LIST, _.D.HEADING, _.D.BLOCK_QUOTE, _.D.SUBTEXT],
    m = [_.D.TEXT],
    g = [
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
function S(e) {
    return e.foundNestedMaskedLink;
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = Array.isArray(e) ? e : [e];
    for (let e of i) {
        if (void 0 === e || !t.includes(e.type)) return null;
        if (e.type === _.D.INLINE_CODE) {
            let i = [...t, ...n];
            if (null == N(e.validationChildContent, i)) return null;
        }
        if (Array.isArray(e.content) && null == N(e.content, t)) return null;
    }
    return i;
}
function C(e) {
    if ((0, d.rL)(e) || h(e).whitespaceSanitized !== e) return !0;
    let t = u.A.toURLSafe(e);
    if (null == t) return !0;
    if ("http:" !== t.protocol && "https:" !== t.protocol) return !1;
    let n = e.split("/");
    return n.length < 3 || "" !== n[1] || u.A.safeDecodeURIComponent(n[2]) !== n[2];
}
function O(e) {
    try {
        if (C(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
        let t = new URL(e),
            n = t.protocol ?? "";
        if (!f.includes(n.toLowerCase())) throw Error("Provided protocol is not allowed: " + n);
        if (("http:" === n || "https:" === n) && (null == t.hostname || 0 === t.hostname.length))
            throw Error("no hostname");
        let i = (0, E.nK)(t);
        ((t.username = ""), (t.password = ""));
        let r = (0, E.nK)(t);
        return { target: i, displayTarget: r };
    } catch (e) {
        return null;
    }
}
let R = {
    ...o().defaultRules.link,
    match(e, t, n) {
        if (!t.allowLinks || -1 === e.indexOf("](")) return null;
        let i = 0,
            r = 0,
            a = 0;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if (i >= 2) {
                if (++a > 100) return null;
            } else a = 0;
            if (")" === n) {
                r = 0;
                continue;
            }
            if ("[" === n) {
                if (++i > 10) return null;
            } else if ("]" === n) i > 0 && i--;
            else if ("(" !== n) continue;
            if (++r > 200) return null;
        }
        return o().defaultRules.link.match(e, t, n);
    },
    parse(e, t, n) {
        let [i, a, s, l] = e;
        function u() {
            return { type: _.D.TEXT, content: i };
        }
        if (null != n.maskedLinkValidation) return ((n.maskedLinkValidation.foundNestedMaskedLink = !0), u());
        if (C(s)) return u();
        let E = h(s),
            A = h(a),
            f = h(null != l ? l : ""),
            R = E.whitespaceSanitized,
            L = A.fullySanitized,
            y = f.fullySanitized,
            D = L.trim();
        if (0 === R.trim().length || 0 === D.length) return u();
        let v = O(o().unescapeUrl(s));
        if (null == v || (0, d.F9)(l)) return u();
        let b = { ...n, allowEscape: !1, parseInlineCodeChildContent: !0 },
            M = { foundNestedMaskedLink: !1 },
            P = { ...b, maskedLinkValidation: M },
            U = n.allowEmojiLinks ? p : I,
            w = [...U, ...T],
            G = [...m, ...g],
            x = t(L, P);
        if (S(M)) return u();
        let k = N(x, w, [_.D.EMOJI]),
            F = t(y, P);
        if (S(M)) return u();
        let B = N(F, G);
        if (null == k || null == B) return u();
        let V = (function e(t) {
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
        })(k);
        if (0 === V.trim().length || (0, d.Ay)(V).length > 0) return u();
        if (V !== L) {
            if ((0, d.Ay)(L).length > 0) return u();
            let e = t(V, P);
            if (S(M) || null == N(e, [...w, _.D.EMOJI])) return u();
        }
        let H = r().pick(t.rules, U),
            j = o().parserFor(H)(A.whitespaceSanitized, b),
            W = f.whitespaceSanitized,
            { target: Y } = v;
        return { content: j, target: Y, title: W };
    },
};
