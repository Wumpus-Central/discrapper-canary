(l.d(t, { default: () => T }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(855986),
    r = l(189213),
    u = l(331322),
    d = l(103557),
    o = l(95477),
    s = l(890497),
    c = l(682163),
    p = l(71393),
    f = l(711014);
l(951178);
var m = l(246338),
    h = l(73153),
    v = l(195880),
    g = l(540665),
    k = l(382541),
    b = l(233470),
    x = l(525530),
    _ = l(191850),
    C = l(792996);
let w = " (Copy)",
    j = new Map();
h.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: l, wsTicket: n } = e;
    j.get(t)?.(l, n);
});
var y = l(625180),
    A = l(457827),
    S = l(373677),
    E = l(754027),
    I = l(939398),
    R = l(165610);
function M(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, S.PH)(null, (0, S.hR)(e.preview_supported_surfaces)),
        n = (0, I.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        i = (0, E.Op)((0, E.jS)(e), l);
    return (
        y.A.launchFrame({
            applicationId: t,
            surface: i,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, A.r)((0, R.VA)(t, i))
    );
}
var G = l(858899),
    P = l(381991);
function T(e) {
    let { project: t, mode: l, currentGuildId: h, transitionState: y, onClose: A } = e,
        [S, E] = i.useState(h),
        [I, R] = i.useState(""),
        [T, z] = i.useState(() => {
            var e;
            return ((e = t.name), `${e.slice(0, 128 - w.length)}${w}`);
        }),
        [B, F] = i.useState(!1),
        N = i.useMemo(() => {
            let e, l;
            return (
                (e = null),
                (l = !1),
                {
                    confirm: async function (n, i) {
                        let { name: a, prompt: r, copy: u } = i;
                        if (l) return null;
                        l = !0;
                        let d = a.trim();
                        try {
                            (e?.guildId !== n || e.name !== d) &&
                                (e?.abandon(),
                                (e = (function (e, t, l, n) {
                                    let i,
                                        a = C.intl.string(_.default.Cn8H0Y),
                                        r = (0, k.gA)(e.id);
                                    r.catch(() => void 0);
                                    let u = null,
                                        d = null,
                                        o = !1,
                                        s = !1;
                                    function c(e) {
                                        return (
                                            (0, g.ensureConnection)(e), (u ??= (0, x.Io)(r, e).catch(() => "rejected"))
                                        );
                                    }
                                    let p = (0, v.m)();
                                    j.set(p, (e, t) => {
                                        (j.delete(p), (d = e), (0, k.vG)(e, t), c(e));
                                    });
                                    let f = (0, b.iR)({
                                        name: l,
                                        guild_id: t,
                                        install_scope: e.install_scope ?? "guild",
                                        remix_source_project_id: e.id,
                                        nonce: p,
                                    }).then(
                                        (e) => (
                                            j.delete(p),
                                            null != e.remix_preview &&
                                                ((0, b.A5)(e.id, e.remix_preview), s || (i = n?.(e))),
                                            c(e.id),
                                            e
                                        ),
                                        () => (j.delete(p), null != d && (0, g.Bn)(d), null),
                                    );
                                    return {
                                        guildId: t,
                                        name: l,
                                        open: async function () {
                                            o = !0;
                                            let e = await f;
                                            if (null == e) return { ok: !1, message: a, kept: !1 };
                                            let l = await c(e.id);
                                            return "unreachable" === l
                                                ? ((u = null), (o = !1), { ok: !1, message: a, kept: !0 })
                                                : "rejected" === l
                                                  ? (i?.(),
                                                    (0, g.Bn)(e.id),
                                                    await (0, b.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: a, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: t };
                                        },
                                        abandon: function () {
                                            o ||
                                                s ||
                                                ((s = !0),
                                                f.then((e) => {
                                                    (i?.(), null != e && (0, g.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(t, n, d, M)));
                            let l = await e.open();
                            return (
                                l.ok
                                    ? (0, g.dv)(l.projectId, r, void 0, !0 === u ? { copy: u } : { remix: !0 })
                                    : l.kept || (e = null),
                                l
                            );
                        } finally {
                            l = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t]);
    i.useEffect(() => () => N.dismiss(), [N]);
    let O = (0, a.yK)([f.Ay, p.A], () => {
            let e = [];
            for (let t of f.Ay.getFlattenedGuildIds()) {
                let l = p.A.getGuild(t);
                null != l && (0, m.dd)(l, "ConjureRemixModal") && e.push(l);
            }
            return e;
        }),
        W = i.useMemo(
            () =>
                O.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            [O],
        ),
        U = null != S && O.some((e) => e.id === S) ? S : (O[0]?.id ?? null),
        H = "copy" === l,
        J = H || T.trim().length >= 2,
        Q = H ? _.default["UsUa/c"] : _.default["276ll6"],
        V = i.useCallback(async () => {
            if (!J || null == U) return;
            F(!0);
            let e = await (async function (e, t, l) {
                let n = await e.confirm(t, l);
                return null == n
                    ? null
                    : (n.ok ? (0, P.A)(n.projectId, "remix") : (0, G.P0)({ text: n.message, variant: "critical" }), n);
            })(N, U, H ? { name: t.name, prompt: "", copy: !0 } : { name: T, prompt: I });
            if (null != e) {
                if (e.ok) return void (await A());
                F(!1);
            }
        }, [N, U, H, t.name, T, J, I, A]);
    return (0, n.jsx)(r.a, {
        transitionState: y,
        onClose: A,
        title: C.intl.string(Q),
        subtitle: C.intl.formatToPlainString(H ? _.default.GzGb2w : _.default["QN8T+C"], { projectName: t.name }),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: A, disabled: B },
            { text: C.intl.string(Q), variant: "primary", onClick: V, loading: B, disabled: !J || null == U },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                H
                    ? null
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.f, {
                                  label: C.intl.string(_.default.cvvDlE),
                                  placeholder: C.intl.string(_.default.u3W0k0),
                                  value: I,
                                  onChange: R,
                                  autoFocus: !0,
                                  disabled: B,
                              }),
                              (0, n.jsx)(o.k, {
                                  label: C.intl.string(_.default.PuVQeX),
                                  value: T,
                                  onChange: z,
                                  maxLength: 128,
                                  disabled: B,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                (0, n.jsx)(s.Z, {
                    selectionMode: "single",
                    label: C.intl.string(_.default.cIWtCk),
                    options: W,
                    value: U,
                    onSelectionChange: E,
                    disabled: B,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
