(l.d(t, { default: () => B }), l(321073));
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
var h = l(246338),
    v = l(73153),
    m = l(195880),
    g = l(540665),
    k = l(472119),
    _ = l(233470),
    b = l(525530),
    x = l(191850),
    C = l(792996);
let w = " (Copy)",
    j = new Map();
v.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
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
var P = l(858899),
    T = l(381991);
function B(e) {
    let { project: t, currentGuildId: l, transitionState: v, onClose: y } = e,
        [A, S] = i.useState(l),
        [E, I] = i.useState(""),
        [R, B] = i.useState(() => {
            var e;
            return ((e = t.name), `${e.slice(0, 128 - w.length)}${w}`);
        }),
        [G, N] = i.useState(!1),
        O = i.useMemo(() => {
            let e, l;
            return (
                (e = null),
                (l = !1),
                {
                    confirm: async function (n, i) {
                        let { name: a, prompt: r } = i;
                        if (l) return null;
                        l = !0;
                        let u = a.trim();
                        try {
                            (e?.guildId !== n || e.name !== u) &&
                                (e?.abandon(),
                                (e = (function (e, t, l, n) {
                                    let i,
                                        a = C.intl.string(x.default.Cn8H0Y),
                                        r = (0, k.gA)(e.id);
                                    r.catch(() => void 0);
                                    let u = null,
                                        d = null,
                                        o = !1,
                                        s = !1;
                                    function c(e) {
                                        return (
                                            (0, g.ensureConnection)(e), (u ??= (0, b.Io)(r, e).catch(() => "rejected"))
                                        );
                                    }
                                    let p = (0, m.m)();
                                    j.set(p, (e, t) => {
                                        (j.delete(p), (d = e), (0, k.vG)(e, t), c(e));
                                    });
                                    let f = (0, _.iR)({
                                        name: l,
                                        guild_id: t,
                                        install_scope: e.install_scope ?? "guild",
                                        remix_source_project_id: e.id,
                                        nonce: p,
                                    }).then(
                                        (e) => (
                                            j.delete(p),
                                            null != e.remix_preview &&
                                                ((0, _.A5)(e.id, e.remix_preview), s || (i = n?.(e))),
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
                                                    await (0, _.xx)(e.id).catch(() => void 0),
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
                                })(t, n, u, M)));
                            let l = await e.open();
                            return (l.ok ? (0, g.dv)(l.projectId, r, void 0, { remix: !0 }) : l.kept || (e = null), l);
                        } finally {
                            l = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t]);
    i.useEffect(() => () => O.dismiss(), [O]);
    let W = (0, a.yK)([f.Ay, p.A], () => {
            let e = [];
            for (let t of f.Ay.getFlattenedGuildIds()) {
                let l = p.A.getGuild(t);
                null != l && (0, h.dd)(l, "ConjureRemixModal") && e.push(l);
            }
            return e;
        }),
        z = i.useMemo(
            () =>
                W.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            [W],
        ),
        F = R.trim().length >= 2,
        H = i.useCallback(async () => {
            if (!F) return;
            N(!0);
            let e = await (async function (e, t, l) {
                let n = await e.confirm(t, l);
                return null == n
                    ? null
                    : (n.ok ? (0, T.A)(n.projectId, "remix") : (0, P.P0)({ text: n.message, variant: "critical" }), n);
            })(O, A, { name: R, prompt: E });
            if (null != e) {
                if (e.ok) return void (await y());
                N(!1);
            }
        }, [O, A, R, F, E, y]);
    return (0, n.jsx)(r.a, {
        transitionState: v,
        onClose: y,
        title: C.intl.string(x.default["276ll6"]),
        subtitle: C.intl.formatToPlainString(x.default["QN8T+C"], { projectName: t.name }),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: y, disabled: G },
            { text: C.intl.string(x.default["276ll6"]), variant: "primary", onClick: H, loading: G, disabled: !F },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(d.f, {
                    label: C.intl.string(x.default.cvvDlE),
                    placeholder: C.intl.string(x.default.u3W0k0),
                    value: E,
                    onChange: I,
                    autoFocus: !0,
                    disabled: G,
                }),
                (0, n.jsx)(o.k, {
                    label: C.intl.string(x.default.PuVQeX),
                    value: R,
                    onChange: B,
                    maxLength: 128,
                    disabled: G,
                    fullWidth: !0,
                }),
                (0, n.jsx)(s.Z, {
                    selectionMode: "single",
                    label: C.intl.string(x.default.cIWtCk),
                    options: z,
                    value: A,
                    onSelectionChange: S,
                    disabled: G,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
