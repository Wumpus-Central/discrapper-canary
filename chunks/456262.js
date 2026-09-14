(n.r(t), n.d(t, { default: () => k }), n(321073));
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(342324),
    c = n(905799),
    h = n(834730),
    d = n(9578),
    u = n(694403),
    o = n(540168),
    g = n(176002),
    p = n(165648);
let m = new i.A({ html: !1, linkify: !1, typographer: !1 }).use(c.h, {
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
    ]);
function x(e, t) {
    let { tag: n, attrs: a, children: i } = e,
        c = s()(g.p_, { [g.J2]: !0 === e.loose });
    switch (n) {
        case "a": {
            let e = (0, u.W1)(a.href ?? "");
            if (null == e) return (0, l.jsx)("span", { children: i }, t);
            return (0, l.jsx)(d.A, { href: e.target, title: a.title, children: i.length > 0 ? i : e.displayTarget }, t);
        }
        case "blockquote":
            return (0, l.jsxs)(
                "div",
                {
                    className: p.h,
                    children: [(0, l.jsx)("div", { className: p.r }), (0, l.jsx)("blockquote", { children: i })],
                },
                t,
            );
        case "ul":
            return (0, l.jsx)("ul", { className: c, children: i }, t);
        case "ol": {
            let e = null != a.start ? parseInt(a.start) : NaN,
                n = Number.isNaN(e) ? 1 : e,
                r = String(n + Math.max(i.length - 1, 0)).length;
            return (0, l.jsx)(
                "ol",
                { className: c, start: 1 === n ? void 0 : n, style: { "--totalCharacters": r }, children: i },
                t,
            );
        }
        case "th":
        case "td":
            return r.createElement(n, { key: t, style: { cssText: a.style } }, i);
        default:
            if (!b.has(n)) return (0, l.jsx)("span", { children: i }, t);
            return r.createElement(n, { key: t }, i);
    }
}
function f(e, t) {
    let n = e.pop(),
        l = e[e.length - 1];
    n.hidden ? l.children.push(...n.children) : l.children.push(x(n, t));
}
function k(e) {
    let { text: t, notice: n } = e,
        a = r.useMemo(
            () =>
                (function e(t, n) {
                    let r = [{ tag: "", attrs: {}, children: [] }];
                    for (let a = 0; a < t.length && !(n.remaining <= 0); a++) {
                        n.remaining--;
                        let s = t[a],
                            i = r[r.length - 1];
                        if (1 === s.nesting) {
                            ("p" === s.tag &&
                                !s.hidden &&
                                "li" === i.tag &&
                                r.length >= 2 &&
                                (r[r.length - 2].loose = !0),
                                r.push({
                                    tag: s.tag,
                                    attrs: Object.fromEntries(
                                        (s.attrs ?? []).map((e) => {
                                            let [t, n] = e;
                                            return [t, String(n)];
                                        }),
                                    ),
                                    children: [],
                                    hidden: s.hidden,
                                }));
                            continue;
                        }
                        if (-1 === s.nesting) {
                            r.length > 1 && f(r, a);
                            continue;
                        }
                        switch (s.type) {
                            case "inline":
                                i.children.push(...e(s.children ?? [], n));
                                break;
                            case "text":
                            case "text_special":
                                i.children.push(s.content);
                                break;
                            case "code_inline":
                            case "math_inline":
                            case "math_inline_double":
                                i.children.push((0, l.jsx)("code", { className: "inline", children: s.content }, a));
                                break;
                            case "fence":
                            case "code_block":
                                i.children.push(
                                    (0, l.jsx)(
                                        o.d,
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
                                i.children.push((0, l.jsx)(o.d, { language: "latex", text: s.content }, a));
                                break;
                            case "softbreak":
                                i.children.push(" ");
                                break;
                            case "hardbreak":
                                i.children.push((0, l.jsx)("br", {}, a));
                                break;
                            case "hr":
                                i.children.push((0, l.jsx)("hr", {}, a));
                                break;
                            case "image": {
                                let e = String(s.attrGet("src") ?? ""),
                                    t = "" !== s.content ? s.content : e;
                                i.children.push(
                                    x(
                                        {
                                            tag: "a",
                                            attrs: { href: e, title: String(s.attrGet("title") ?? "") },
                                            children: [t],
                                        },
                                        a,
                                    ),
                                );
                                break;
                            }
                            default:
                                "" !== s.content && i.children.push(s.content);
                        }
                    }
                    for (; r.length > 1;) f(r, t.length + r.length);
                    return (n.remaining <= 0 && r[0].children.push("\u2026"), r[0].children);
                })(m.parse(t, {}), { remaining: 5e3 }),
            [t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: s()(p.PT, g.l_), children: a }),
            "" !== n
                ? (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", className: g.VX, children: n })
                : null,
        ],
    });
}
