(n.r(t), n.d(t, { default: () => F }));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(95362),
    c = n(834730),
    h = n(9578),
    o = n(889558);
n(321073);
var u = n(376347),
    d = n(905032),
    m = n(486889),
    p = n(694403),
    g = n(417964);
let f = new u.A({ html: !1, linkify: !1, typographer: !1 }).use(d.h, {
        allow_space: !1,
        allow_digits: !1,
        allow_labels: !1,
    }),
    x = new Set([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "li",
        "em",
        "strong",
        "s",
        "blockquote",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
    ]),
    k = /(?:https?|steam):\/\/[^\s<]/i;
function y(e) {
    return k.test((0, g.El)(e));
}
function b(e) {
    return { type: "element", tag: "span", attrs: {}, children: e };
}
function j(e) {
    let { attrs: t, children: n, markup: r } = e;
    if ("autolink" === r) return b(["<", ...n, ">"]);
    let l = null != t.title && "" !== t.title ? ` "${t.title}"` : "",
        a = `](${t.href ?? ""}${l})`;
    return b(["image" === r ? "![" : "[", ...n, a]);
}
function _(e) {
    let { attrs: t, children: n } = e,
        r = (0, p.W1)(t.href ?? "");
    if ("autolink" === e.markup)
        return null == r ? j(e) : { type: "link", href: r.target, title: r.displayTarget, children: [r.displayTarget] };
    let l = (0, g.Fd)(e.text).trim(),
        a = (0, g.Fd)(t.title ?? "").trim();
    if (null == r || !0 === e.hasMath || (n.length > 0 && "" === l) || y(l) || y(a) || (0, m.F9)(l) || (0, m.F9)(a))
        return j(e);
    let i = "" !== a ? a : "" !== l ? l : r.displayTarget;
    return { type: "link", href: r.target, title: i, children: n.length > 0 ? n : [r.displayTarget] };
}
function w(e) {
    let t = e.pop(),
        n = e[e.length - 1];
    if (((n.text += t.text), !0 === t.hasMath && (n.hasMath = !0), t.hidden)) n.children.push(...t.children);
    else
        n.children.push(
            "a" === t.tag
                ? _(t)
                : x.has(t.tag)
                  ? {
                        type: "element",
                        tag: t.tag,
                        attrs: t.attrs,
                        children: t.children,
                        loose: t.loose,
                        align: t.align,
                    }
                  : b(t.children),
        );
}
var M = n(13746);
let N = [
    "\\def",
    "\\gdef",
    "\\edef",
    "\\xdef",
    "\\global",
    "\\long",
    "\\let",
    "\\futurelet",
    "\\newcommand",
    "\\renewcommand",
    "\\providecommand",
    "\\show",
    "\\message",
    "\\errmessage",
];
function v(e, t, n) {
    if (e.length > 2048 || n.expressions <= 0 || e.length > n.characters || n.elements <= 0 || n.milliseconds <= 0)
        return null;
    (n.expressions--, (n.characters -= e.length));
    let r = 0;
    for (let t of e) {
        if ("{" === t && ++r > 64) return null;
        "}" === t && (r = Math.max(0, r - 1));
    }
    let l = performance.now();
    try {
        let r = M.Ay.renderToString(e, {
            displayMode: t,
            throwOnError: !1,
            trust: !1,
            strict: "error",
            output: "htmlAndMathml",
            maxSize: 20,
            maxExpand: 1e3,
            macros: (function () {
                let e = {};
                for (let t of N)
                    e[t] = () => {
                        throw new M.Ay.ParseError(`${t} is disabled`);
                    };
                return e;
            })(),
        });
        if (r.includes('class="katex-error"')) return null;
        let l = (function (e, t) {
            let n = 0,
                r = 0,
                l = 0;
            for (let a = e.indexOf("<"); -1 !== a; a = e.indexOf("<", a + 1)) {
                if ("/" === e[a + 1]) {
                    r--;
                    continue;
                }
                if (
                    (n++,
                    (l = Math.max(l, r + 1)),
                    "/" !== e[e.indexOf(">", a) - 1] && r++,
                    n > t.elements || l > t.depth)
                )
                    return null;
            }
            return { elements: n, depth: l };
        })(r, { elements: Math.min(1e4, n.elements), depth: 256 });
        if (null == l) return null;
        return ((n.elements -= l.elements), r);
    } catch {
        return null;
    } finally {
        n.milliseconds -= performance.now() - l;
    }
}
var S = n(540168),
    E = n(176002),
    T = n(165648);
function A(e) {
    let { content: t, html: n } = e;
    return null == n
        ? (0, r.jsx)("code", { className: "inline", children: t })
        : (0, r.jsx)("span", { className: E.Dy, dangerouslySetInnerHTML: { __html: n } });
}
function C(e) {
    let { content: t, html: n } = e;
    return null == n
        ? (0, r.jsx)(S.d, { language: "latex", text: t })
        : (0, r.jsx)(s.Ip, {
              className: i()(E.Dy, E.$S),
              orientation: "auto",
              tabIndex: 0,
              children: (0, r.jsx)("span", { className: E.uM, dangerouslySetInnerHTML: { __html: n } }),
          });
}
function F(e) {
    let { text: t, notice: n } = e,
        a = l.useMemo(
            () =>
                (function e(t, n) {
                    return t.map((t, a) =>
                        (function (t, n, a) {
                            if ("string" == typeof t) return t;
                            switch (t.type) {
                                case "element":
                                    return (function (t, n, a) {
                                        let { tag: s, attrs: c } = t,
                                            h = e(t.children, a),
                                            o = i()(E.p_, { [E.J2]: !0 === t.loose });
                                        switch (s) {
                                            case "blockquote":
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        className: i()(T.h, E.aV),
                                                        children: [
                                                            (0, r.jsx)("div", { className: T.r }),
                                                            (0, r.jsx)("blockquote", { children: h }),
                                                        ],
                                                    },
                                                    n,
                                                );
                                            case "ul":
                                                return (0, r.jsx)("ul", { className: o, children: h }, n);
                                            case "ol": {
                                                let e = null != c.start ? parseInt(c.start) : 0 / 0,
                                                    t = Number.isNaN(e) ? 1 : e,
                                                    l = String(t + Math.max(h.length - 1, 0)).length;
                                                return (0, r.jsx)(
                                                    "ol",
                                                    {
                                                        className: o,
                                                        start: 1 === t ? void 0 : t,
                                                        style: { "--totalCharacters": l },
                                                        children: h,
                                                    },
                                                    n,
                                                );
                                            }
                                            case "th":
                                            case "td":
                                                return l.createElement(
                                                    s,
                                                    {
                                                        key: n,
                                                        style: null != t.align ? { textAlign: t.align } : void 0,
                                                    },
                                                    h,
                                                );
                                            default:
                                                return l.createElement(s, { key: n }, h);
                                        }
                                    })(t, n, a);
                                case "link":
                                    return (0, r.jsx)(
                                        h.A,
                                        {
                                            href: t.href,
                                            title: t.title,
                                            trusted: () => (0, o.m)(t.href, t.title),
                                            children: e(t.children, a),
                                        },
                                        n,
                                    );
                                case "inlineCode":
                                    return (0, r.jsx)("code", { className: "inline", children: t.content }, n);
                                case "inlineMath":
                                    return (0, r.jsx)(A, { content: t.content, html: v(t.content, t.display, a) }, n);
                                case "mathBlock":
                                    return (0, r.jsx)(C, { content: t.content, html: v(t.content, !0, a) }, n);
                                case "codeBlock":
                                    return (0, r.jsx)(S.d, { language: t.language, text: t.content }, n);
                                case "br":
                                    return (0, r.jsx)("br", {}, n);
                                case "hr":
                                    return (0, r.jsx)("hr", {}, n);
                            }
                        })(t, a, n),
                    );
                })(
                    (function e(t, n) {
                        let r = [{ tag: "", attrs: {}, children: [], text: "", markup: "" }];
                        for (let l = 0; l < t.length && !(n.remaining <= 0); l++) {
                            n.remaining--;
                            let a = t[l],
                                i = r[r.length - 1];
                            if (1 === a.nesting) {
                                ("p" === a.tag &&
                                    !a.hidden &&
                                    "li" === i.tag &&
                                    r.length >= 2 &&
                                    (r[r.length - 2].loose = !0),
                                    r.push({
                                        tag: a.tag,
                                        attrs: Object.fromEntries(
                                            (a.attrs ?? []).map((e) => {
                                                let [t, n] = e;
                                                return [t, String(n)];
                                            }),
                                        ),
                                        children: [],
                                        text: "",
                                        markup: a.markup,
                                        align: (function (e) {
                                            if ("th" !== e.tag && "td" !== e.tag) return;
                                            let t = e.attrGet("style"),
                                                n =
                                                    "string" == typeof t
                                                        ? t.match(/text-align:\s*(left|center|right)/)
                                                        : null;
                                            return null != n ? n[1] : void 0;
                                        })(a),
                                        hidden: a.hidden,
                                    }));
                                continue;
                            }
                            if (-1 === a.nesting) {
                                r.length > 1 && w(r);
                                continue;
                            }
                            switch (a.type) {
                                case "inline":
                                    i.children.push(...e(a.children ?? [], n));
                                    break;
                                case "text":
                                case "text_special":
                                    (i.children.push(a.content), (i.text += a.content));
                                    break;
                                case "code_inline":
                                    (i.children.push({ type: "inlineCode", content: a.content }),
                                        (i.text += a.content));
                                    break;
                                case "math_inline":
                                case "math_inline_double":
                                    (i.children.push({
                                        type: "inlineMath",
                                        content: a.content,
                                        display: "math_inline_double" === a.type,
                                    }),
                                        (i.text += a.content),
                                        (i.hasMath = !0));
                                    break;
                                case "fence":
                                case "code_block":
                                    i.children.push({
                                        type: "codeBlock",
                                        language: (function (e) {
                                            let t = e.trim().split(/\s+/)[0];
                                            return "" !== t ? t : void 0;
                                        })(a.info),
                                        content: a.content,
                                    });
                                    break;
                                case "math_block":
                                    i.children.push({ type: "mathBlock", content: a.content });
                                    break;
                                case "softbreak":
                                    (i.children.push(" "), (i.text += " "));
                                    break;
                                case "hardbreak":
                                    (i.children.push({ type: "br" }), (i.text += " "));
                                    break;
                                case "hr":
                                    i.children.push({ type: "hr" });
                                    break;
                                case "image": {
                                    let e = a.content;
                                    if (r.some((e) => "a" === e.tag)) {
                                        (i.children.push(e), (i.text += e));
                                        break;
                                    }
                                    i.children.push(
                                        _({
                                            tag: "a",
                                            attrs: {
                                                href: String(a.attrGet("src") ?? ""),
                                                title: String(a.attrGet("title") ?? ""),
                                            },
                                            children: "" !== e ? [e] : [],
                                            text: e,
                                            markup: "image",
                                        }),
                                    );
                                    break;
                                }
                                default:
                                    "" !== a.content && (i.children.push(a.content), (i.text += a.content));
                            }
                        }
                        for (; r.length > 1;) w(r);
                        return (n.remaining <= 0 && r[0].children.push("\u2026"), r[0].children);
                    })(f.parse(t, {}), { remaining: 5e3 }),
                    { expressions: 128, characters: 16384, elements: 5e4, milliseconds: 250 },
                ),
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: i()(T.PT, E.l_), children: a }),
            "" !== n
                ? (0, r.jsx)(c.E, { variant: "body-sm/normal", color: "text-subtle", className: E.VX, children: n })
                : null,
        ],
    });
}
