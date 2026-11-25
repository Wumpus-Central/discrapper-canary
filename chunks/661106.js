var t = n(73153),
    u = n(195880),
    i = n(71393),
    a = n(540665),
    r = n(382541),
    d = n(233470);
n(951178);
var o = n(246338),
    c = n(525530),
    s = n(191850),
    f = n(792996);
let m = new Map(),
    p = new Set();
(t.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: l, projectId: n, wsTicket: t } = e;
    m.get(l)?.(n, t);
}),
    n.d(
        l,
        {},
        {
            $c: function (e) {
                return e.trim().length >= 2;
            },
            Du: function (e) {
                return p.has(e);
            },
            yG: function (e, l, n) {
                let t = null,
                    h = !1;
                return {
                    confirm: async function (_, v, g) {
                        let { name: k, copy: b } = v;
                        if (h) return null;
                        h = !0;
                        let w = k.trim(),
                            y = !0 === b;
                        try {
                            (t?.guildId !== _ || t.name !== w || t.copy !== y) &&
                                (t?.abandon(),
                                (t = (function (e, l, n, t) {
                                    let h,
                                        { name: _, copy: v } = n,
                                        { preloadPreview: g, shareTicket: k, onReserved: b } = t,
                                        w = f.intl.string(s.default.Cn8H0Y),
                                        y = (0, r.gA)(e.id, null != k ? { share_ticket: k } : void 0);
                                    y.catch(() => void 0);
                                    let I = null,
                                        R = null,
                                        C = !1,
                                        E = !1;
                                    function M(e) {
                                        return (
                                            (0, a.ensureConnection)(e),
                                            (I ??= (0, c.Io)(y, e, v).catch(() => "rejected"))
                                        );
                                    }
                                    let P = (function (e, l) {
                                            if (null == l || "guild" !== e.install_scope) return null;
                                            let n = i.A.getGuild(l);
                                            return null != n && (0, o.sM)(n, "ConjureRemix") ? l : null;
                                        })(e, l),
                                        S = (0, u.m)();
                                    m.set(S, (e, l) => {
                                        (m.delete(S), (R = e), p.add(e), (0, r.vG)(e, l), M(e), b?.(e, P));
                                    });
                                    let x = (0, d.iR)({
                                        name: _,
                                        ...(null != P ? { guild_id: P } : {}),
                                        remix_source_project_id: e.id,
                                        remix_share_ticket: k,
                                        nonce: S,
                                    }).then(
                                        (e) => (
                                            m.delete(S),
                                            p.delete(e.id),
                                            null != e.remix_preview &&
                                                ((0, d.A5)(e.id, e.remix_preview), E || (h = g?.(e))),
                                            M(e.id),
                                            e
                                        ),
                                        () => (m.delete(S), null != R && (p.delete(R), (0, a.Bn)(R)), null),
                                    );
                                    return {
                                        guildId: l,
                                        name: _,
                                        copy: v,
                                        open: async function () {
                                            C = !0;
                                            let e = await x;
                                            if (null == e) return { ok: !1, message: w, kept: !1 };
                                            let l = await M(e.id);
                                            return "unreachable" === l
                                                ? ((I = null), (C = !1), { ok: !1, message: w, kept: !0 })
                                                : "rejected" === l
                                                  ? (h?.(),
                                                    (0, a.Bn)(e.id),
                                                    await (0, d.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: w, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: P };
                                        },
                                        abandon: function () {
                                            C ||
                                                E ||
                                                ((E = !0),
                                                x.then((e) => {
                                                    (h?.(), null != e && (0, a.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(e, _, { name: w, copy: y }, { preloadPreview: l, shareTicket: n, onReserved: g })));
                            let h = await t.open();
                            return (h.ok || h.kept || (t = null), h);
                        } finally {
                            h = !1;
                        }
                    },
                    dismiss: () => t?.abandon(),
                };
            },
        },
    ));
