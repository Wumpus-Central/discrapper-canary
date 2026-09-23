(n.r(t), n.d(t, { default: () => v }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(965744),
    c = n(920184),
    h = n(834730),
    u = n(9578),
    d = n(721779),
    o = n(694403),
    g = n(417964),
    p = n(123917),
    m = n(540168),
    x = n(176002),
    f = n(165648);
let k = new i.A({ html: !1, linkify: !1, typographer: !1 }).use(c.h, {
        allow_space: !1,
        allow_digits: !1,
        allow_labels: !1,
    }),
    b = new Set([
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
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
    ]),
    j = /(?:https?|steam):\/\/[^\s<]/i;
function _(e) {
    return j.test((0, g.El)(e));
}
function N(e, t) {
    let { attrs: n, children: l, markup: a } = e;
    if ("autolink" === a) return (0, r.jsxs)("span", { children: ["<", l, ">"] }, t);
    let s = null != n.title && "" !== n.title ? ` "${n.title}"` : "",
        i = `](${n.href ?? ""}${s})`;
    return (0, r.jsxs)("span", { children: ["image" === a ? "![" : "[", l, i] }, t);
}
function y(e, t) {
    let { tag: n, attrs: a, children: i } = e,
        c = s()(x.p_, { [x.J2]: !0 === e.loose });
    switch (n) {
        case "a": {
            let n = (0, o.W1)(a.href ?? "");
            if ("autolink" === e.markup) {
                if (null == n) return N(e, t);
                let l = n.displayTarget;
                return (0, r.jsx)(
                    u.A,
                    { href: n.target, title: l, trusted: () => (0, p.m)(n.target, l), children: l },
                    t,
                );
            }
            let l = (0, g.Fd)(e.text).trim(),
                s = (0, g.Fd)(a.title ?? "").trim();
            if (null == n || (i.length > 0 && "" === l) || _(l) || _(s) || (0, d.F9)(l) || (0, d.F9)(s)) return N(e, t);
            let c = "" !== s ? s : "" !== l ? l : n.displayTarget;
            return (0, r.jsx)(
                u.A,
                {
                    href: n.target,
                    title: c,
                    trusted: () => (0, p.m)(n.target, c),
                    children: i.length > 0 ? i : n.displayTarget,
                },
                t,
            );
        }
        case "blockquote":
            return (0, r.jsxs)(
                "div",
                {
                    className: s()(f.h, x.aV),
                    children: [(0, r.jsx)("div", { className: f.r }), (0, r.jsx)("blockquote", { children: i })],
                },
                t,
            );
        case "ul":
            return (0, r.jsx)("ul", { className: c, children: i }, t);
        case "ol": {
            let e = null != a.start ? parseInt(a.start) : NaN,
                n = Number.isNaN(e) ? 1 : e,
                l = String(n + Math.max(i.length - 1, 0)).length;
            return (0, r.jsx)(
                "ol",
                { className: c, start: 1 === n ? void 0 : n, style: { "--totalCharacters": l }, children: i },
                t,
            );
        }
        case "th":
        case "td":
            return l.createElement(n, { key: t, style: { cssText: a.style } }, i);
        default:
            if (!b.has(n)) return (0, r.jsx)("span", { children: i }, t);
            return l.createElement(n, { key: t }, i);
    }
}
function w(e, t) {
    let n = e.pop(),
        r = e[e.length - 1];
    ((r.text += n.text), n.hidden ? r.children.push(...n.children) : r.children.push(y(n, t)));
}
function v(e) {
    let { text: t, notice: n } = e,
        a = l.useMemo(
            () =>
                (function e(t, n) {
                    let l = [{ tag: "", attrs: {}, children: [], text: "", markup: "" }];
                    for (let a = 0; a < t.length && !(n.remaining <= 0); a++) {
                        n.remaining--;
                        let s = t[a],
                            i = l[l.length - 1];
                        if (1 === s.nesting) {
                            ("p" === s.tag &&
                                !s.hidden &&
                                "li" === i.tag &&
                                l.length >= 2 &&
                                (l[l.length - 2].loose = !0),
                                l.push({
                                    tag: s.tag,
                                    attrs: Object.fromEntries(
                                        (s.attrs ?? []).map((e) => {
                                            let [t, n] = e;
                                            return [t, String(n)];
                                        }),
                                    ),
                                    children: [],
                                    text: "",
                                    markup: s.markup,
                                    hidden: s.hidden,
                                }));
                            continue;
                        }
                        if (-1 === s.nesting) {
                            l.length > 1 && w(l, a);
                            continue;
                        }
                        switch (s.type) {
                            case "inline":
                                i.children.push(...e(s.children ?? [], n));
                                break;
                            case "text":
                            case "text_special":
                                (i.children.push(s.content), (i.text += s.content));
                                break;
                            case "code_inline":
                            case "math_inline":
                            case "math_inline_double":
                                (i.children.push((0, r.jsx)("code", { className: "inline", children: s.content }, a)),
                                    (i.text += s.content));
                                break;
                            case "fence":
                            case "code_block":
                                i.children.push(
                                    (0, r.jsx)(
                                        m.d,
                                        {
                                            language: (function (e) {
                                                let t = e.trim().split(/\s+/)[0];
                                                return "" !== t ? t : void 0;
                                            })(s.info),
                                            text: s.content,
                                        },
                                        a,
                                    ),
                                );
                                break;
                            case "math_block":
                                i.children.push((0, r.jsx)(m.d, { language: "latex", text: s.content }, a));
                                break;
                            case "softbreak":
                                (i.children.push(" "), (i.text += " "));
                                break;
                            case "hardbreak":
                                (i.children.push((0, r.jsx)("br", {}, a)), (i.text += " "));
                                break;
                            case "hr":
                                i.children.push((0, r.jsx)("hr", {}, a));
                                break;
                            case "image": {
                                let e = s.content;
                                if (l.some((e) => "a" === e.tag)) {
                                    (i.children.push(e), (i.text += e));
                                    break;
                                }
                                i.children.push(
                                    y(
                                        {
                                            tag: "a",
                                            attrs: {
                                                href: String(s.attrGet("src") ?? ""),
                                                title: String(s.attrGet("title") ?? ""),
                                            },
                                            children: "" !== e ? [e] : [],
                                            text: e,
                                            markup: "image",
                                        },
                                        a,
                                    ),
                                );
                                break;
                            }
                            default:
                                "" !== s.content && (i.children.push(s.content), (i.text += s.content));
                        }
                    }
                    for (; l.length > 1;) w(l, t.length + l.length);
                    return (n.remaining <= 0 && l[0].children.push("\u2026"), l[0].children);
                })(k.parse(t, {}), { remaining: 5e3 }),
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: s()(f.PT, x.l_), children: a }),
            "" !== n
                ? (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", className: x.VX, children: n })
                : null,
        ],
    });
}
