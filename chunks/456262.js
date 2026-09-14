(n.r(t), n.d(t, { default: () => b }), n(321073));
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(342324),
    c = n(834730),
    h = n(9578),
    d = n(694403),
    u = n(540168),
    o = n(176002),
    g = n(165648);
let p = new i.A({ html: !1, linkify: !1, typographer: !1 }),
    m = new Set([
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
function f(e, t) {
    let { tag: n, attrs: s, children: i } = e,
        c = a()(o.p_, { [o.J2]: !0 === e.loose });
    switch (n) {
        case "a": {
            let e = (0, d.W1)(s.href ?? "");
            if (null == e) return (0, r.jsx)("span", { children: i }, t);
            return (0, r.jsx)(h.A, { href: e.target, title: s.title, children: i.length > 0 ? i : e.displayTarget }, t);
        }
        case "blockquote":
            return (0, r.jsxs)(
                "div",
                {
                    className: g.h,
                    children: [(0, r.jsx)("div", { className: g.r }), (0, r.jsx)("blockquote", { children: i })],
                },
                t,
            );
        case "ul":
            return (0, r.jsx)("ul", { className: c, children: i }, t);
        case "ol": {
            let e = null != s.start ? parseInt(s.start) : NaN,
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
            return l.createElement(n, { key: t, style: { cssText: s.style } }, i);
        default:
            if (!m.has(n)) return (0, r.jsx)("span", { children: i }, t);
            return l.createElement(n, { key: t }, i);
    }
}
function x(e, t) {
    let n = e.pop(),
        r = e[e.length - 1];
    n.hidden ? r.children.push(...n.children) : r.children.push(f(n, t));
}
function b(e) {
    let { text: t, notice: n } = e,
        s = l.useMemo(
            () =>
                (function e(t, n) {
                    let l = [{ tag: "", attrs: {}, children: [] }];
                    for (let s = 0; s < t.length && !(n.remaining <= 0); s++) {
                        n.remaining--;
                        let a = t[s],
                            i = l[l.length - 1];
                        if (1 === a.nesting) {
                            ("p" === a.tag &&
                                !a.hidden &&
                                "li" === i.tag &&
                                l.length >= 2 &&
                                (l[l.length - 2].loose = !0),
                                l.push({
                                    tag: a.tag,
                                    attrs: Object.fromEntries(
                                        (a.attrs ?? []).map((e) => {
                                            let [t, n] = e;
                                            return [t, String(n)];
                                        }),
                                    ),
                                    children: [],
                                    hidden: a.hidden,
                                }));
                            continue;
                        }
                        if (-1 === a.nesting) {
                            l.length > 1 && x(l, s);
                            continue;
                        }
                        switch (a.type) {
                            case "inline":
                                i.children.push(...e(a.children ?? [], n));
                                break;
                            case "text":
                            case "text_special":
                                i.children.push(a.content);
                                break;
                            case "code_inline":
                                i.children.push((0, r.jsx)("code", { className: "inline", children: a.content }, s));
                                break;
                            case "fence":
                            case "code_block":
                                i.children.push(
                                    (0, r.jsx)(
                                        u.d,
                                        {
                                            language: (function (e) {
                                                let t = e.trim().split(/\s+/)[0];
                                                return "" !== t ? t : void 0;
                                            })(a.info),
                                            text: a.content,
                                        },
                                        s,
                                    ),
                                );
                                break;
                            case "softbreak":
                                i.children.push(" ");
                                break;
                            case "hardbreak":
                                i.children.push((0, r.jsx)("br", {}, s));
                                break;
                            case "hr":
                                i.children.push((0, r.jsx)("hr", {}, s));
                                break;
                            case "image": {
                                let e = String(a.attrGet("src") ?? ""),
                                    t = "" !== a.content ? a.content : e;
                                i.children.push(
                                    f(
                                        {
                                            tag: "a",
                                            attrs: { href: e, title: String(a.attrGet("title") ?? "") },
                                            children: [t],
                                        },
                                        s,
                                    ),
                                );
                                break;
                            }
                            default:
                                "" !== a.content && i.children.push(a.content);
                        }
                    }
                    for (; l.length > 1;) x(l, t.length + l.length);
                    return (n.remaining <= 0 && l[0].children.push("\u2026"), l[0].children);
                })(p.parse(t, {}), { remaining: 5e3 }),
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(g.PT, o.l_), children: s }),
            "" !== n
                ? (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", className: o.VX, children: n })
                : null,
        ],
    });
}
