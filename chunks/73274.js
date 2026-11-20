(l.d(t, { default: () => Q }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(855986),
    r = l(189213),
    d = l(331322),
    u = l(95477),
    o = l(890497),
    s = l(834730),
    c = l(682163),
    p = l(71393),
    f = l(711014);
l(951178);
var g = l(246338),
    h = l(73153),
    m = l(195880),
    v = l(540665),
    y = l(382541),
    b = l(233470),
    x = l(525530),
    w = l(191850),
    _ = l(792996);
let j = new Map();
h.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: l, wsTicket: n } = e;
    j.get(t)?.(l, n);
});
var I = l(624479),
    k = l(152367),
    C = l(452027),
    A = l(559106),
    E = l(771871),
    S = l(242666);
let R = [
    { value: "copy", icon: I.CopyIcon, title: w.default.sx5jYE, description: w.default["S+Fcvd"] },
    { value: "remix", icon: k.MagicWandIcon, title: w.default.ZdvGpk, description: w.default.EIh4da },
];
function P(e) {
    let { value: t, onChange: l, disabled: a } = e,
        r = i.useId(),
        d = i.useRef([]);
    return (0, n.jsx)(C.D, {
        label: _.intl.string(w.default["pgbZu+"]),
        children: (e) =>
            (0, n.jsx)("div", {
                id: e.controlId,
                className: S.fF,
                role: "radiogroup",
                "aria-labelledby": e.labelId,
                "aria-disabled": a,
                children: R.map((e, i) => {
                    let u = e.value === t,
                        o = e.icon,
                        c = `${r}-${i}-title`,
                        p = `${r}-${i}-description`;
                    return (0, n.jsx)(
                        A.vN,
                        {
                            children: (0, n.jsxs)("button", {
                                ref: (e) => {
                                    d.current[i] = e;
                                },
                                type: "button",
                                role: "radio",
                                className: S.uK,
                                "aria-checked": u,
                                "aria-labelledby": c,
                                "aria-describedby": p,
                                disabled: a,
                                tabIndex: u ? 0 : -1,
                                onClick: () => l(e.value),
                                onKeyDown: (e) =>
                                    (function (e, t) {
                                        let n = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
                                        if (a || null == n) return;
                                        e.preventDefault();
                                        let i = (t + n + R.length) % R.length;
                                        (d.current[i]?.focus(), l(R[i].value));
                                    })(e, i),
                                children: [
                                    (0, n.jsx)(o, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        "aria-hidden": !0,
                                        focusable: !1,
                                    }),
                                    (0, n.jsxs)("span", {
                                        className: S.Qs,
                                        children: [
                                            (0, n.jsx)(s.E, {
                                                id: c,
                                                tag: "span",
                                                variant: "body-md/normal",
                                                color: "none",
                                                children: _.intl.string(e.title),
                                            }),
                                            (0, n.jsx)(s.E, {
                                                id: p,
                                                tag: "span",
                                                variant: "body-xs/normal",
                                                color: "none",
                                                children: _.intl.string(e.description),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(E.T, { disabled: a, checked: u }),
                                    }),
                                ],
                            }),
                        },
                        e.value,
                    );
                }),
            }),
    });
}
var N = l(625180),
    M = l(457827),
    T = l(373677),
    G = l(754027),
    B = l(939398),
    L = l(165610);
function O(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, T.PH)(null, (0, T.hR)(e.preview_supported_surfaces)),
        n = (0, B.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        i = (0, G.Op)((0, G.jS)(e), l);
    return (
        N.A.launchFrame({
            applicationId: t,
            surface: i,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, M.r)((0, L.VA)(t, i))
    );
}
var D = l(858899),
    F = l(381991),
    U = l(976860),
    W = l(345942),
    Z = l(238490),
    z = l(260498),
    H = l(664619),
    J = l(962998),
    V = l(868193),
    $ = l(738604),
    K = l(652215);
function X(e) {
    let t = z.Ay.getIntegrationStatus(e);
    return (0, Z.Qg)({
        installScope: z.Ay.getProject(e)?.install_scope ?? null,
        previewReady: t?.preview_ready === !0,
        integrationInstalled: t?.integration_installed ?? null,
        botPermissionsChanged: t?.bot_permissions_changed === !0,
    });
}
function Q(e) {
    let { project: t, mode: l, currentGuildId: I, shareTicket: k, transitionState: C, onClose: A } = e,
        [E, S] = i.useState(I),
        [R, N] = i.useState(l),
        [M, T] = i.useState(t.name),
        [G, B] = i.useState(!1),
        [L, Z] = i.useState(null),
        Q = i.useMemo(() => {
            let e, l;
            return (
                (e = null),
                (l = !1),
                {
                    confirm: async function (n, i) {
                        let { name: a, copy: r } = i;
                        if (l) return null;
                        l = !0;
                        let d = a.trim(),
                            u = !0 === r;
                        try {
                            (e?.guildId !== n || e.name !== d || e.copy !== u) &&
                                (e?.abandon(),
                                (e = (function (e, t, l, n, i) {
                                    let a,
                                        r,
                                        { name: d, copy: u } = l,
                                        o = _.intl.string(w.default.Cn8H0Y),
                                        s = (0, y.gA)(e.id, null != i ? { share_ticket: i } : void 0);
                                    s.catch(() => void 0);
                                    let c = null,
                                        f = null,
                                        h = !1,
                                        I = !1;
                                    function k(e) {
                                        return (
                                            (0, v.ensureConnection)(e),
                                            (c ??= (0, x.Io)(s, e, u).catch(() => "rejected"))
                                        );
                                    }
                                    let C =
                                            ((a = p.A.getGuild(t)),
                                            "guild" === e.install_scope && null != a && (0, g.sM)(a, "ConjureRemix")),
                                        A = (0, m.m)();
                                    j.set(A, (e, t) => {
                                        (j.delete(A), (f = e), (0, y.vG)(e, t), k(e));
                                    });
                                    let E = (0, b.iR)({
                                        name: d,
                                        ...(C ? { guild_id: t } : {}),
                                        remix_source_project_id: e.id,
                                        remix_share_ticket: i,
                                        nonce: A,
                                    }).then(
                                        (e) => (
                                            j.delete(A),
                                            null != e.remix_preview &&
                                                ((0, b.A5)(e.id, e.remix_preview), I || (r = n?.(e))),
                                            k(e.id),
                                            e
                                        ),
                                        () => (j.delete(A), null != f && (0, v.Bn)(f), null),
                                    );
                                    return {
                                        guildId: t,
                                        name: d,
                                        copy: u,
                                        open: async function () {
                                            h = !0;
                                            let e = await E;
                                            if (null == e) return { ok: !1, message: o, kept: !1 };
                                            let l = await k(e.id);
                                            return "unreachable" === l
                                                ? ((c = null), (h = !1), { ok: !1, message: o, kept: !0 })
                                                : "rejected" === l
                                                  ? (r?.(),
                                                    (0, v.Bn)(e.id),
                                                    await (0, b.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: o, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: C ? t : null };
                                        },
                                        abandon: function () {
                                            h ||
                                                I ||
                                                ((I = !0),
                                                E.then((e) => {
                                                    (r?.(), null != e && (0, v.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(t, n, { name: d, copy: u }, O, k)));
                            let l = await e.open();
                            return (l.ok || l.kept || (e = null), l);
                        } finally {
                            l = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t, k]);
    i.useEffect(() => () => Q.dismiss(), [Q]);
    let Y = (0, a.yK)([f.Ay, p.A], () => {
            let e = [];
            for (let t of f.Ay.getFlattenedGuildIds()) {
                let l = p.A.getGuild(t);
                null != l && (0, g.dd)(l, "ConjureRemixModal") && e.push(l);
            }
            return e;
        }),
        q = i.useMemo(
            () =>
                Y.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            [Y],
        ),
        ee = null != E && Y.some((e) => e.id === E) ? E : (Y[0]?.id ?? null),
        et = "copy" === R,
        el = M.trim().length >= 2,
        en = i.useCallback(async () => {
            if (!el || null == ee) return;
            B(!0);
            let e = await (async function (e, t, l, n) {
                let i = await e.confirm(t, l);
                if (null == i) return null;
                if (!i.ok) return ((0, D.P0)({ text: i.message, variant: "critical" }), i);
                if (!0 === l.copy && null != i.guildId) {
                    n?.(i.guildId);
                    let e = await (async function (e, t) {
                        let l;
                        if (z.Ay.getIntegrationStatus(e)?.preview_ready !== !0) return null;
                        if (X(e)) {
                            try {
                                await (0, $.vL)(e, t);
                            } catch {
                                return null;
                            }
                            if (X(e)) return null;
                        }
                        try {
                            let t = await (0, J.TV)(e);
                            l = !0 === t.ok ? null : (0, V.A)(t);
                        } catch (e) {
                            l = e instanceof Error ? e.message : _.intl.string(w.default.gMWZeG);
                        }
                        if (null != l)
                            return (
                                h.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: e, message: l }), null
                            );
                        try {
                            await (0, H.tZ)(e, { isPreview: !1 });
                        } catch {}
                        return { appChannelId: await (0, $.T3)(e, t) };
                    })(i.projectId, i.guildId);
                    if (null != e) {
                        var a, r;
                        return (
                            (a = i.guildId),
                            null != (r = e.appChannelId) ? (0, U.pX)(K.BVt.CHANNEL(a, r)) : (0, W.u)(a),
                            i
                        );
                    }
                }
                return ((0, F.A)(i.projectId, "remix"), i);
            })(Q, ee, et ? { name: M, copy: !0 } : { name: M }, (e) => Z(p.A.getGuild(e)?.name ?? ""));
            if (null != e) {
                if (e.ok) return void (await A());
                B(!1);
            }
        }, [Q, ee, et, M, el, A]),
        ei = _.intl.string(w.default.XWgAfc);
    return (0, n.jsx)(r.a, {
        transitionState: C,
        onClose: A,
        title: _.intl.formatToPlainString(w.default.vU1gB6, { projectName: t.name }),
        subtitle: _.intl.string(w.default.PrV2rD),
        size: "md",
        actions: [
            { text: _.intl.string(_.t["ETE/oC"]), variant: "secondary", onClick: A, disabled: G },
            { text: ei, variant: "primary", onClick: en, loading: G, disabled: !el || null == ee },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 16,
            children: [
                (0, n.jsx)(u.k, {
                    label: _.intl.string(w.default["7gI+sw"]),
                    value: M,
                    onChange: T,
                    maxLength: 128,
                    disabled: G,
                    fullWidth: !0,
                }),
                (0, n.jsx)(o.Z, {
                    selectionMode: "single",
                    label: _.intl.string(w.default["maL0+X"]),
                    options: q,
                    value: ee,
                    onSelectionChange: S,
                    disabled: G,
                    fullWidth: !0,
                }),
                (0, n.jsx)(P, { value: R, onChange: N, disabled: G }),
                null != L
                    ? (0, n.jsx)("div", {
                          role: "status",
                          children: (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: _.intl.formatToPlainString(w.default.O25g5n, {
                                  projectName: M.trim(),
                                  server: L,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
