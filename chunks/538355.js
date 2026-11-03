t.d(n, { A: () => c });
var s = t(477900),
    l = t(582128),
    d = t(997141),
    a = t(39672),
    i = t(886609),
    u = t(903369),
    o = t(884129);
let r = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function c(e, n) {
    let t = (0, o.p3)(n),
        c = (0, o.ld)(t, "useMessageRenderedContent"),
        p = e?.content ?? null,
        h = (0, d.j)({ excluded: t.formatInline ? d.Z : 0 }),
        m = (0, a.N)(p, { enabled: c, syntax: h }),
        b = null != m && "ast" in m ? (0, i.KE)(m.ast) : (p?.includes("||") ?? !1),
        k = e?.id,
        A = e?.channel_id,
        C = null != e ? (0, u.U)(e) : void 0,
        f = e?.author?.id;
    return l.useMemo(() => {
        if (null == e) return r;
        let n = (0, o.$J)(e);
        return null != n
            ? n
            : c
              ? {
                    content: (0, s.jsx)(o.Ay, { message: e, options: t, parsed: m }),
                    hasSpoilerEmbeds: b,
                    hasBailedAst: !1,
                }
              : (0, o.Wz)(e, t);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, t, c, m, b, k, A, C, f]);
}
