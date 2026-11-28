var t = n(73153),
    u = n(195880),
    i = n(71393),
    a = n(540665),
    r = n(382541),
    d = n(233470);
n(951178);
var o = n(246338),
    c = n(525530),
    s = n(258576),
    f = n(792996);
let p = new Map(),
    h = new Set();
(t.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: l, projectId: n, wsTicket: t } = e;
    p.get(l)?.(n, t);
}),
    n.d(
        l,
        {},
        {
            $c: function (e) {
                return e.trim().length >= 2;
            },
            Du: function (e) {
                return h.has(e);
            },
            Zz: function (e, l) {
                return ("guild" === e.install_scope) != (null != l);
            },
            yG: function (e, l, n) {
                let t = null,
                    m = !1;
                return {
                    confirm: async function (_, v, g) {
                        let { name: k, copy: w } = v;
                        if (m) return null;
                        m = !0;
                        let b = k.trim(),
                            y = !0 === w;
                        try {
                            (t?.guildId !== _ || t.name !== b || t.copy !== y) &&
                                (t?.abandon(),
                                (t = (function (e, l, n, t) {
                                    let m,
                                        { name: _, copy: v } = n,
                                        { preloadPreview: g, shareTicket: k, onReserved: w } = t,
                                        b = f.intl.string(s.default.Cn8H0Y),
                                        y = (0, r.gA)(e.id, null != k ? { share_ticket: k } : void 0);
                                    y.catch(() => void 0);
                                    let C = null,
                                        E = null,
                                        R = !1,
                                        I = !1;
                                    function P(e) {
                                        return (
                                            (0, a.ensureConnection)(e),
                                            (C ??= (0, c.Io)(y, e, v).catch(() => "rejected"))
                                        );
                                    }
                                    let A = (function (e) {
                                            if (null == e) return null;
                                            let l = i.A.getGuild(e);
                                            return null != l && (0, o.sM)(l, "ConjureRemix") ? e : null;
                                        })(l),
                                        S = (0, u.m)();
                                    p.set(S, (e, l) => {
                                        (p.delete(S), (E = e), h.add(e), (0, r.vG)(e, l), P(e), w?.(e, A));
                                    });
                                    let M = (0, d.iR)({
                                        name: _,
                                        ...(null != A ? { guild_id: A } : {}),
                                        remix_source_project_id: e.id,
                                        remix_share_ticket: k,
                                        nonce: S,
                                    }).then(
                                        (e) => (
                                            p.delete(S),
                                            h.delete(e.id),
                                            null != e.remix_preview &&
                                                ((0, d.A5)(e.id, e.remix_preview), I || (m = g?.(e))),
                                            P(e.id),
                                            e
                                        ),
                                        () => (p.delete(S), null != E && (h.delete(E), (0, a.Bn)(E)), null),
                                    );
                                    return {
                                        guildId: l,
                                        name: _,
                                        copy: v,
                                        open: async function () {
                                            R = !0;
                                            let e = await M;
                                            if (null == e) return { ok: !1, message: b, kept: !1 };
                                            let l = await P(e.id);
                                            return "unreachable" === l
                                                ? ((C = null), (R = !1), { ok: !1, message: b, kept: !0 })
                                                : "rejected" === l
                                                  ? (m?.(),
                                                    (0, a.Bn)(e.id),
                                                    await (0, d.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: b, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: A };
                                        },
                                        abandon: function () {
                                            R ||
                                                I ||
                                                ((I = !0),
                                                M.then((e) => {
                                                    (m?.(), null != e && (0, a.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(e, _, { name: b, copy: y }, { preloadPreview: l, shareTicket: n, onReserved: g })));
                            let m = await t.open();
                            return (m.ok || m.kept || (t = null), m);
                        } finally {
                            m = !1;
                        }
                    },
                    dismiss: () => t?.abandon(),
                };
            },
        },
    ));
