var s = t(477900),
    l = t(582128),
    a = t(997141),
    d = t(146849),
    i = t(647660),
    o = t(886609),
    u = t(903369),
    r = t(88484);
let c = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let t = (0, r.p3)(n),
                p = (0, d.I2)({ location: "useMessageRenderedContent" }).enabled,
                h = e?.content ?? null,
                b = (0, a.j)({ excluded: t.formatInline ? a.Z : 0 }),
                m = (0, i.N)(h, { enabled: p, syntax: b }),
                k = null != m && "ast" in m ? (0, o.KE)(m.ast) : (h?.includes("||") ?? !1),
                A = e?.id,
                C = e?.channel_id,
                f = null != e ? (0, u.U)(e) : void 0,
                E = e?.author?.id;
            return l.useMemo(() => {
                if (null == e) return c;
                let n = (0, r.$J)(e);
                return null != n
                    ? n
                    : p
                      ? {
                            content: (0, s.jsx)(r.Ay, { message: e, options: t, parsed: m }),
                            hasSpoilerEmbeds: k,
                            hasBailedAst: !1,
                        }
                      : (0, r.Wz)(e, t);
            }, [
                e?.content,
                e?.customRenderedContent,
                e?.embeds,
                e?.interaction,
                e?.state,
                e?.type,
                t,
                p,
                m,
                k,
                A,
                C,
                f,
                E,
            ]);
        },
    },
);
