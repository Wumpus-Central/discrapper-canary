l.d(t, { default: () => q });
var n = l(477900),
    i = l(582128),
    a = l(189213),
    r = l(323384),
    u = l(331322),
    d = l(95477),
    o = l(890497),
    s = l(834730),
    c = l(682163),
    p = l(71393);
l(951178);
var f = l(73153),
    g = l(195880),
    h = l(540665),
    m = l(382541),
    v = l(233470),
    b = l(246338),
    y = l(525530),
    x = l(191850),
    w = l(792996);
let _ = new Map();
(f.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: l, wsTicket: n } = e;
    _.get(t)?.(l, n);
}),
    l(321073));
var j = l(855986),
    I = l(711014);
let k = "library";
var A = l(624479),
    C = l(152367),
    E = l(452027),
    S = l(559106),
    R = l(771871),
    P = l(242666);
let N = [
    { value: "copy", icon: A.CopyIcon, title: x.default.sx5jYE, description: x.default["S+Fcvd"] },
    { value: "remix", icon: C.MagicWandIcon, title: x.default.ZdvGpk, description: x.default.EIh4da },
];
function M(e) {
    let { value: t, onChange: l, disabled: a } = e,
        r = i.useId(),
        u = i.useRef([]);
    return (0, n.jsx)(E.D, {
        label: w.intl.string(x.default["pgbZu+"]),
        children: (e) =>
            (0, n.jsx)("div", {
                id: e.controlId,
                className: P.fF,
                role: "radiogroup",
                "aria-labelledby": e.labelId,
                "aria-disabled": a,
                children: N.map((e, i) => {
                    let d = e.value === t,
                        o = e.icon,
                        c = `${r}-${i}-title`,
                        p = `${r}-${i}-description`;
                    return (0, n.jsx)(
                        S.vN,
                        {
                            children: (0, n.jsxs)("button", {
                                ref: (e) => {
                                    u.current[i] = e;
                                },
                                type: "button",
                                role: "radio",
                                className: P.uK,
                                "aria-checked": d,
                                "aria-labelledby": c,
                                "aria-describedby": p,
                                disabled: a,
                                tabIndex: d ? 0 : -1,
                                onClick: () => l(e.value),
                                onKeyDown: (e) =>
                                    (function (e, t) {
                                        let n = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
                                        if (a || null == n) return;
                                        e.preventDefault();
                                        let i = (t + n + N.length) % N.length;
                                        (u.current[i]?.focus(), l(N[i].value));
                                    })(e, i),
                                children: [
                                    (0, n.jsx)(o, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        "aria-hidden": !0,
                                        focusable: !1,
                                    }),
                                    (0, n.jsxs)("span", {
                                        className: P.Qs,
                                        children: [
                                            (0, n.jsx)(s.E, {
                                                id: c,
                                                tag: "span",
                                                variant: "body-md/normal",
                                                color: "none",
                                                children: w.intl.string(e.title),
                                            }),
                                            (0, n.jsx)(s.E, {
                                                id: p,
                                                tag: "span",
                                                variant: "body-xs/normal",
                                                color: "none",
                                                children: w.intl.string(e.description),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(R.T, { disabled: a, checked: d }),
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
var T = l(625180),
    G = l(457827),
    B = l(373677),
    L = l(754027),
    O = l(939398),
    D = l(165610);
function F(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, B.PH)(null, (0, B.hR)(e.preview_supported_surfaces)),
        n = (0, O.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        i = (0, L.Op)((0, L.jS)(e), l);
    return (
        T.A.launchFrame({
            applicationId: t,
            surface: i,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, G.r)((0, D.VA)(t, i))
    );
}
var U = l(858899),
    V = l(381991),
    W = l(976860),
    Z = l(345942),
    z = l(238490),
    H = l(260498),
    J = l(664619),
    $ = l(962998),
    K = l(868193),
    X = l(738604),
    Q = l(652215);
function Y(e) {
    let t = H.Ay.getIntegrationStatus(e);
    return (0, z.Qg)({
        installScope: H.Ay.getProject(e)?.install_scope ?? null,
        previewReady: t?.preview_ready === !0,
        integrationInstalled: t?.integration_installed ?? null,
        botPermissionsChanged: t?.bot_permissions_changed === !0,
    });
}
function q(e) {
    let { project: t, mode: l, currentGuildId: A, shareTicket: C, transitionState: E, onClose: S } = e,
        {
            guilds: R,
            destination: P,
            destinationGuild: N,
            setDestination: T,
        } = (function (e, t) {
            let [l, n] = i.useState(e),
                a = (0, j.yK)(
                    [I.Ay, p.A],
                    () => {
                        let e = [];
                        for (let l of I.Ay.getFlattenedGuildIds()) {
                            let n = p.A.getGuild(l);
                            null != n && (0, b.dd)(n, t) && e.push(n);
                        }
                        return e;
                    },
                    [t],
                ),
                r = l === k ? null : (a.find((e) => e.id === l) ?? a[0] ?? null);
            return { guilds: a, destination: r?.id ?? k, destinationGuild: r, setDestination: n };
        })(A, "ConjureRemixModal"),
        [G, B] = i.useState(l),
        [L, O] = i.useState(t.name),
        [D, z] = i.useState(!1),
        [q, ee] = i.useState(null),
        et = i.useMemo(() => {
            let e, l;
            return (
                (e = null),
                (l = !1),
                {
                    confirm: async function (n, i) {
                        let { name: a, copy: r } = i;
                        if (l) return null;
                        l = !0;
                        let u = a.trim(),
                            d = !0 === r;
                        try {
                            (e?.guildId !== n || e.name !== u || e.copy !== d) &&
                                (e?.abandon(),
                                (e = (function (e, t, l, n, i) {
                                    let a,
                                        { name: r, copy: u } = l,
                                        d = w.intl.string(x.default.Cn8H0Y),
                                        o = (0, m.gA)(e.id, null != i ? { share_ticket: i } : void 0);
                                    o.catch(() => void 0);
                                    let s = null,
                                        c = null,
                                        f = !1,
                                        j = !1;
                                    function I(e) {
                                        return (
                                            (0, h.ensureConnection)(e),
                                            (s ??= (0, y.Io)(o, e, u).catch(() => "rejected"))
                                        );
                                    }
                                    let k = (function (e, t) {
                                            if (null == t || "guild" !== e.install_scope) return null;
                                            let l = p.A.getGuild(t);
                                            return null != l && (0, b.sM)(l, "ConjureRemix") ? t : null;
                                        })(e, t),
                                        A = (0, g.m)();
                                    _.set(A, (e, t) => {
                                        (_.delete(A), (c = e), (0, m.vG)(e, t), I(e));
                                    });
                                    let C = (0, v.iR)({
                                        name: r,
                                        ...(null != k ? { guild_id: k } : {}),
                                        remix_source_project_id: e.id,
                                        remix_share_ticket: i,
                                        nonce: A,
                                    }).then(
                                        (e) => (
                                            _.delete(A),
                                            null != e.remix_preview &&
                                                ((0, v.A5)(e.id, e.remix_preview), j || (a = n?.(e))),
                                            I(e.id),
                                            e
                                        ),
                                        () => (_.delete(A), null != c && (0, h.Bn)(c), null),
                                    );
                                    return {
                                        guildId: t,
                                        name: r,
                                        copy: u,
                                        open: async function () {
                                            f = !0;
                                            let e = await C;
                                            if (null == e) return { ok: !1, message: d, kept: !1 };
                                            let t = await I(e.id);
                                            return "unreachable" === t
                                                ? ((s = null), (f = !1), { ok: !1, message: d, kept: !0 })
                                                : "rejected" === t
                                                  ? (a?.(),
                                                    (0, h.Bn)(e.id),
                                                    await (0, v.xx)(e.id).catch(() => void 0),
                                                    { ok: !1, message: d, kept: !1 })
                                                  : { ok: !0, projectId: e.id, guildId: k };
                                        },
                                        abandon: function () {
                                            f ||
                                                j ||
                                                ((j = !0),
                                                C.then((e) => {
                                                    (a?.(), null != e && (0, h.Bn)(e.id));
                                                }));
                                        },
                                    };
                                })(t, n, { name: u, copy: d }, F, C)));
                            let l = await e.open();
                            return (l.ok || l.kept || (e = null), l);
                        } finally {
                            l = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t, C]);
    i.useEffect(() => () => et.dismiss(), [et]);
    let el = i.useMemo(
            () => [
                { id: k, label: w.intl.string(x.default["0Vceid"]), value: k, leading: r.AppsIcon },
                ...R.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            ],
            [R],
        ),
        en = N?.id ?? null,
        ei = "copy" === G,
        ea = L.trim().length >= 2,
        er = i.useCallback(async () => {
            if (!ea) return;
            z(!0);
            let e = await (async function (e, t, l, n) {
                let i = await e.confirm(t, l);
                if (null == i) return null;
                if (!i.ok) return ((0, U.P0)({ text: i.message, variant: "critical" }), i);
                if (!0 === l.copy && null != i.guildId) {
                    n?.(i.guildId);
                    let e = await (async function (e, t) {
                        let l;
                        if (H.Ay.getIntegrationStatus(e)?.preview_ready !== !0) return null;
                        if (Y(e)) {
                            try {
                                await (0, X.vL)(e, t);
                            } catch {
                                return null;
                            }
                            if (Y(e)) return null;
                        }
                        try {
                            let t = await (0, $.TV)(e);
                            l = !0 === t.ok ? null : (0, K.A)(t);
                        } catch (e) {
                            l = e instanceof Error ? e.message : w.intl.string(x.default.gMWZeG);
                        }
                        if (null != l)
                            return (
                                f.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: e, message: l }), null
                            );
                        try {
                            await (0, J.tZ)(e, { isPreview: !1 });
                        } catch {}
                        return { appChannelId: await (0, X.T3)(e, t) };
                    })(i.projectId, i.guildId);
                    if (null != e) {
                        var a, r;
                        return (
                            (a = i.guildId),
                            null != (r = e.appChannelId) ? (0, W.pX)(Q.BVt.CHANNEL(a, r)) : (0, Z.u)(a),
                            i
                        );
                    }
                }
                return ((0, V.A)(i.projectId, "remix"), i);
            })(et, en, ei ? { name: L, copy: !0 } : { name: L }, (e) => ee(p.A.getGuild(e)?.name ?? ""));
            if (null != e) {
                if (e.ok) return void (await S());
                z(!1);
            }
        }, [et, en, ei, L, ea, S]),
        eu = w.intl.string(x.default.XWgAfc);
    return (0, n.jsx)(a.a, {
        transitionState: E,
        onClose: S,
        title: w.intl.formatToPlainString(x.default.vU1gB6, { projectName: t.name }),
        subtitle: w.intl.string(x.default.PrV2rD),
        size: "md",
        actions: [
            { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: D },
            { text: eu, variant: "primary", onClick: er, loading: D, disabled: !ea },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(d.k, {
                    label: w.intl.string(x.default["7gI+sw"]),
                    value: L,
                    onChange: O,
                    maxLength: 128,
                    disabled: D,
                    fullWidth: !0,
                }),
                (0, n.jsx)(o.Z, {
                    selectionMode: "single",
                    label: w.intl.string(x.default["maL0+X"]),
                    options: el,
                    value: P,
                    onSelectionChange: T,
                    disabled: D,
                    fullWidth: !0,
                }),
                (0, n.jsx)(M, { value: G, onChange: B, disabled: D }),
                null != q
                    ? (0, n.jsx)("div", {
                          role: "status",
                          children: (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: w.intl.formatToPlainString(x.default.O25g5n, {
                                  projectName: L.trim(),
                                  server: q,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
