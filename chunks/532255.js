n.d(t, { A: () => _, N: () => P });
var r = n(477900),
    l = n(582128),
    i = n(733004),
    o = n(465632),
    s = n(292442),
    u = n(834730),
    a = n(791606),
    c = n(38405),
    d = n(997141),
    h = n(715764),
    p = n(614740),
    f = n(440801),
    m = n(4837),
    g = n(750854),
    x = n(131765),
    b = n(224729),
    A = n(908347),
    j = n(406605),
    y = n(558447),
    E = n(886609),
    C = n(580019),
    v = n(152959),
    w = n(817292),
    k = n(197531),
    M = n(105292),
    S = n(254221);
let N = [];
function P(e, t) {
    let { enabled: n, formatInline: r } = t,
        i = (0, v.n9)(n),
        s = (0, d.j)({ formatInline: r });
    return l.useMemo(() => {
        if (!n || !i || null == e) return null;
        try {
            return { ast: (0, o.qg)(e, s) };
        } catch (e) {
            return { error: e };
        }
    }, [n, i, e, s]);
}
let R = {
    text: h.EY,
    paragraph: h.fz,
    empty: h.Sv,
    emoji: m.z,
    link: b.N,
    list: A.B,
    listItem: A.c,
    code: p.C,
    code_block: f.N,
    quote: y.P,
    bold: g.yN,
    italic: g.J2,
    underline: g.z2,
    strikethrough: g.Gk,
    mention: j.P,
    heading: x.D,
    small: x.O,
    spoiler: E.dC,
    timestamp: C.D,
};
function _(e) {
    let {
        content: t,
        parsed: n,
        allowJumboEmoji: l = !0,
        hideSingleLinkContent: i = !1,
        redactRestrictedContent: o = !1,
    } = e;
    return (0, r.jsx)(s.tH, {
        fallbackRender: (e) => {
            let { error: n } = e;
            return (0, r.jsx)(G, { content: t, error: n });
        },
        children: (0, r.jsx)(I, {
            content: t,
            parsed: n,
            allowJumboEmoji: l,
            hideSingleLinkContent: i,
            redactRestrictedContent: o,
        }),
    });
}
function I(e) {
    let { content: t, parsed: n, allowJumboEmoji: o, hideSingleLinkContent: s, redactRestrictedContent: u } = e;
    if (((0, v.bf)(null == n), null != n && "error" in n)) throw n.error;
    let a = n?.ast ?? N,
        c = l.useMemo(() => o && (0, k.ID)(a), [o, a]),
        d = l.useMemo(() => (0, w.q)(a, { hideSingleLinkContent: s, redactRestrictedContent: u }), [a, s, u]);
    return (0, r.jsx)(k.NA.Provider, {
        value: c,
        children: (0, r.jsx)(E.L1, { children: (0, r.jsx)(i.$, { nodes: d, renderers: R }) }, t),
    });
}
function G(e) {
    let { content: t, error: n } = e;
    return (
        l.useEffect(() => {
            c.A.captureException(n);
        }, [n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("span", { children: t }),
                (0, r.jsxs)(u.E, {
                    variant: "body-md/normal",
                    color: "text-feedback-critical",
                    className: S.g,
                    children: [(0, r.jsx)(a.A, { width: 16, height: 16 }), M.intl.string(M.t.dpFK4M)],
                }),
            ],
        })
    );
}
