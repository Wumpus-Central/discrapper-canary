(l.d(t, { default: () => T }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(855986),
    r = l(189213),
    u = l(331322),
    d = l(103557),
    s = l(95477),
    o = l(890497),
    c = l(682163),
    p = l(71393),
    f = l(711014);
l(951178);
var m = l(246338),
    h = l(73153),
    v = l(195880),
    g = l(540665),
    k = l(382541),
    _ = l(233470),
    x = l(525530),
    b = l(191850),
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
    let { project: t, mode: l, currentGuildId: h, shareTicket: y, transitionState: A, onClose: S } = e,
        [E, I] = i.useState(h),
        [R, T] = i.useState(""),
        [z, B] = i.useState(() => {
            var e;
            return ((e = t.name), `${e.slice(0, 128 - w.length)}${w}`);
        }),
        [F, N] = i.useState(!1),
        O = i.useMemo(() => {
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
                                (e = (function (e, t, l, n, i) {
                                    let a,
                                        r = C.intl.string(b.default.Cn8H0Y),
                                        u = (0, k.gA)(e.id, null != i ? { share_ticket: i } : void 0);
                                    u.catch(() => void 0);
                                    let d = null,
                                        s = null,
                                        o = !1,
                                        c = !1;
                                    function p(e) {
                                        return (
                                            (0, g.ensureConnection)(e), (d ??= (0, x.Io)(u, e).catch(() => "rejected"))
                                        );
                                    }
                                    let f = (0, v.m)();
                                    j.set(f, (e, t) => {
                                        (j.delete(f), (s = e), (0, k.vG)(e, t), p(e));
                                    });
                                    let m = (0, _.iR)({
                                        name: l,
                                        guild_id: t,
                                        install_scope: e.install_scope ?? "guild",
                                        remix_source_project_id: e.id,
                                        remix_share_ticket: i,
                                        nonce: f,
                                    }).then(
                                        (e) => (
                                            j.delete(f),
                                            null != e.remix_preview &&
                                                ((0, _.A5)(e.id, e.remix_preview), c || (a = n?.(e))),
                                            p(e.id),
                                            e
                                        ),
                                        () => (j.delete(f), null != s && (0, g.Bn)(s), null),
                                    );
                                    return {
                                        guildId: t,
                                        name: l,
                                        open: async function () {
                                            o = !0;
                                            let e = await m;
                                            if (null == e) return { ok: !1, message: r, kept: !1 };
                                            let l = await p(e.id);
                                            return "unreachable" === l
                                                ? ((d = null), (o = !1), { ok: !1, message: r, kept: !0 })
                                                : "rejected" === l
                                                  ? (a?.(),
                                                    (0, g.Bn)(e.id),
                                                    await (0, _.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: r, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: t };
                                        },
                                        abandon: function () {
                                            o ||
                                                c ||
                                                ((c = !0),
                                                m.then((e) => {
                                                    (a?.(), null != e && (0, g.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(t, n, d, M, y)));
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
        }, [t, y]);
    i.useEffect(() => () => O.dismiss(), [O]);
    let W = (0, a.yK)([f.Ay, p.A], () => {
            let e = [];
            for (let t of f.Ay.getFlattenedGuildIds()) {
                let l = p.A.getGuild(t);
                null != l && (0, m.dd)(l, "ConjureRemixModal") && e.push(l);
            }
            return e;
        }),
        U = i.useMemo(
            () =>
                W.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            [W],
        ),
        H = null != E && W.some((e) => e.id === E) ? E : (W[0]?.id ?? null),
        J = "copy" === l,
        Q = J || z.trim().length >= 2,
        V = J ? b.default["UsUa/c"] : b.default["276ll6"],
        $ = i.useCallback(async () => {
            if (!Q || null == H) return;
            N(!0);
            let e = await (async function (e, t, l) {
                let n = await e.confirm(t, l);
                return null == n
                    ? null
                    : (n.ok ? (0, P.A)(n.projectId, "remix") : (0, G.P0)({ text: n.message, variant: "critical" }), n);
            })(O, H, J ? { name: t.name, prompt: "", copy: !0 } : { name: z, prompt: R });
            if (null != e) {
                if (e.ok) return void (await S());
                N(!1);
            }
        }, [O, H, J, t.name, z, Q, R, S]);
    return (0, n.jsx)(r.a, {
        transitionState: A,
        onClose: S,
        title: C.intl.string(V),
        subtitle: C.intl.formatToPlainString(J ? b.default.GzGb2w : b.default["QN8T+C"], { projectName: t.name }),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: F },
            { text: C.intl.string(V), variant: "primary", onClick: $, loading: F, disabled: !Q || null == H },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                J
                    ? null
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.f, {
                                  label: C.intl.string(b.default.cvvDlE),
                                  placeholder: C.intl.string(b.default.u3W0k0),
                                  value: R,
                                  onChange: T,
                                  autoFocus: !0,
                                  disabled: F,
                              }),
                              (0, n.jsx)(s.k, {
                                  label: C.intl.string(b.default.PuVQeX),
                                  value: z,
                                  onChange: B,
                                  maxLength: 128,
                                  disabled: F,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                (0, n.jsx)(o.Z, {
                    selectionMode: "single",
                    label: C.intl.string(b.default.cIWtCk),
                    options: U,
                    value: H,
                    onSelectionChange: I,
                    disabled: F,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
