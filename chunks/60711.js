(n.r(t), n.d(t, { default: () => C }));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(95362),
    c = n(834730),
    h = n(9578),
    u = n(889558);
n(321073);
var o = n(376347),
    d = n(905032),
    p = n(486889),
    g = n(694403),
    m = n(417964);
let x = new o.A({ html: !1, linkify: !1, typographer: !1 }).use(d.h, {
        allow_space: !1,
        allow_digits: !1,
        allow_labels: !1,
    }),
    f = new Set([
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
    return k.test((0, m.El)(e));
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
        r = (0, g.W1)(t.href ?? "");
    if ("autolink" === e.markup)
        return null == r ? j(e) : { type: "link", href: r.target, title: r.displayTarget, children: [r.displayTarget] };
    let l = (0, m.Fd)(e.text).trim(),
        a = (0, m.Fd)(t.title ?? "").trim();
    if (null == r || !0 === e.hasMath || (n.length > 0 && "" === l) || y(l) || y(a) || (0, p.F9)(l) || (0, p.F9)(a))
        return j(e);
    let i = "" !== a ? a : "" !== l ? l : r.displayTarget;
    return { type: "link", href: r.target, title: i, children: n.length > 0 ? n : [r.displayTarget] };
}
function N(e) {
    let t = e.pop(),
        n = e[e.length - 1];
    if (((n.text += t.text), !0 === t.hasMath && (n.hasMath = !0), t.hidden)) n.children.push(...t.children);
    else
        n.children.push(
            "a" === t.tag
                ? _(t)
                : f.has(t.tag)
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
function v(e, t, n) {
    if (e.length > 2048 || n.expressions <= 0 || e.length > n.characters) return null;
    (n.expressions--, (n.characters -= e.length));
    let r = 0;
    for (let t of e) {
        if ("{" === t && ++r > 64) return null;
        "}" === t && (r = Math.max(0, r - 1));
    }
    try {
        let n = M.Ay.renderToString(e, {
            displayMode: t,
            throwOnError: !1,
            trust: !1,
            strict: "error",
            output: "htmlAndMathml",
            maxSize: 20,
            maxExpand: 1e3,
        });
        return n.includes('class="katex-error"') ? null : n;
    } catch {
        return null;
    }
}
var w = n(540168),
    S = n(176002),
    T = n(165648);
function E(e) {
    let { content: t, html: n } = e;
    return null == n
        ? (0, r.jsx)("code", { className: "inline", children: t })
        : (0, r.jsx)("span", { className: S.Dy, dangerouslySetInnerHTML: { __html: n } });
}
function A(e) {
    let { content: t, html: n } = e;
    return null == n
        ? (0, r.jsx)(w.d, { language: "latex", text: t })
        : (0, r.jsx)(s.Ip, {
              className: i()(S.Dy, S.$S),
              orientation: "auto",
              tabIndex: 0,
              children: (0, r.jsx)("span", { className: S.uM, dangerouslySetInnerHTML: { __html: n } }),
          });
}
function C(e) {
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
                                            u = i()(S.p_, { [S.J2]: !0 === t.loose });
                                        switch (s) {
                                            case "blockquote":
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        className: i()(T.h, S.aV),
                                                        children: [
                                                            (0, r.jsx)("div", { className: T.r }),
                                                            (0, r.jsx)("blockquote", { children: h }),
                                                        ],
                                                    },
                                                    n,
                                                );
                                            case "ul":
                                                return (0, r.jsx)("ul", { className: u, children: h }, n);
                                            case "ol": {
                                                let e = null != c.start ? parseInt(c.start) : 0 / 0,
                                                    t = Number.isNaN(e) ? 1 : e,
                                                    l = String(t + Math.max(h.length - 1, 0)).length;
                                                return (0, r.jsx)(
                                                    "ol",
                                                    {
                                                        className: u,
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
                                            trusted: () => (0, u.m)(t.href, t.title),
                                            children: e(t.children, a),
                                        },
                                        n,
                                    );
                                case "inlineCode":
                                    return (0, r.jsx)("code", { className: "inline", children: t.content }, n);
                                case "inlineMath":
                                    return (0, r.jsx)(E, { content: t.content, html: v(t.content, t.display, a) }, n);
                                case "mathBlock":
                                    return (0, r.jsx)(A, { content: t.content, html: v(t.content, !0, a) }, n);
                                case "codeBlock":
                                    return (0, r.jsx)(w.d, { language: t.language, text: t.content }, n);
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
                                r.length > 1 && N(r);
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
                        for (; r.length > 1;) N(r);
                        return (n.remaining <= 0 && r[0].children.push("\u2026"), r[0].children);
                    })(x.parse(t, {}), { remaining: 5e3 }),
                    { expressions: 128, characters: 16384 },
                ),
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: i()(T.PT, S.l_), children: a }),
            "" !== n
                ? (0, r.jsx)(c.E, { variant: "body-sm/normal", color: "text-subtle", className: S.VX, children: n })
                : null,
        ],
    });
}
