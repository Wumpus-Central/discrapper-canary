l.d(t, { default: () => H });
var n = l(477900),
    i = l(582128),
    a = l(189213),
    r = l(323384),
    d = l(331322),
    s = l(95477),
    u = l(890497),
    o = l(834730),
    c = l(682163),
    p = l(71393);
l(951178);
var f = l(661106);
l(321073);
var g = l(855986),
    h = l(711014),
    v = l(246338);
let m = "library";
var y = l(624479),
    b = l(152367),
    x = l(452027),
    j = l(559106),
    I = l(771871),
    w = l(191850),
    A = l(792996),
    C = l(242666);
let _ = [
    { value: "copy", icon: y.CopyIcon, title: w.default.sx5jYE, description: w.default["S+Fcvd"] },
    { value: "remix", icon: b.MagicWandIcon, title: w.default.ZdvGpk, description: w.default.EIh4da },
];
function k(e) {
    let { value: t, onChange: l, disabled: a } = e,
        r = i.useId(),
        d = i.useRef([]);
    return (0, n.jsx)(x.D, {
        label: A.intl.string(w.default["pgbZu+"]),
        children: (e) =>
            (0, n.jsx)("div", {
                id: e.controlId,
                className: C.fF,
                role: "radiogroup",
                "aria-labelledby": e.labelId,
                "aria-disabled": a,
                children: _.map((e, i) => {
                    let s = e.value === t,
                        u = e.icon,
                        c = `${r}-${i}-title`,
                        p = `${r}-${i}-description`;
                    return (0, n.jsx)(
                        j.vN,
                        {
                            children: (0, n.jsxs)("button", {
                                ref: (e) => {
                                    d.current[i] = e;
                                },
                                type: "button",
                                role: "radio",
                                className: C.uK,
                                "aria-checked": s,
                                "aria-labelledby": c,
                                "aria-describedby": p,
                                disabled: a,
                                tabIndex: s ? 0 : -1,
                                onClick: () => l(e.value),
                                onKeyDown: (e) =>
                                    (function (e, t) {
                                        let n = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
                                        if (a || null == n) return;
                                        e.preventDefault();
                                        let i = (t + n + _.length) % _.length;
                                        (d.current[i]?.focus(), l(_[i].value));
                                    })(e, i),
                                children: [
                                    (0, n.jsx)(u, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        "aria-hidden": !0,
                                        focusable: !1,
                                    }),
                                    (0, n.jsxs)("span", {
                                        className: C.Qs,
                                        children: [
                                            (0, n.jsx)(o.E, {
                                                id: c,
                                                tag: "span",
                                                variant: "body-md/normal",
                                                color: "none",
                                                children: A.intl.string(e.title),
                                            }),
                                            (0, n.jsx)(o.E, {
                                                id: p,
                                                tag: "span",
                                                variant: "body-xs/normal",
                                                color: "none",
                                                children: A.intl.string(e.description),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(I.T, { disabled: a, checked: s }),
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
var S = l(625180),
    E = l(457827),
    P = l(373677),
    N = l(754027),
    M = l(939398),
    L = l(165610);
function R(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, P.PH)(null, (0, P.hR)(e.preview_supported_surfaces)),
        n = (0, M.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        i = (0, N.Op)((0, N.jS)(e), l);
    return (
        S.A.launchFrame({
            applicationId: t,
            surface: i,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, E.r)((0, L.VA)(t, i))
    );
}
var T = l(858899),
    D = l(976860),
    G = l(751841),
    X = l(381991),
    F = l(73153),
    O = l(345942),
    U = l(238490),
    V = l(260498),
    W = l(664619),
    Z = l(962998),
    $ = l(868193),
    z = l(738604),
    B = l(652215);
function K(e) {
    let t = V.Ay.getIntegrationStatus(e);
    return (0, U.Qg)({
        installScope: V.Ay.getProject(e)?.install_scope ?? null,
        previewReady: t?.preview_ready === !0,
        integrationInstalled: t?.integration_installed ?? null,
        botPermissionsChanged: t?.bot_permissions_changed === !0,
    });
}
function H(e) {
    let { project: t, mode: l, currentGuildId: y, shareTicket: b, transitionState: x, onClose: j } = e,
        {
            guilds: I,
            destination: C,
            destinationGuild: _,
            setDestination: S,
        } = (function (e, t) {
            let [l, n] = i.useState(e),
                a = (0, g.yK)(
                    [h.Ay, p.A],
                    () => {
                        let e = [];
                        for (let l of h.Ay.getFlattenedGuildIds()) {
                            let n = p.A.getGuild(l);
                            null != n && (0, v.dd)(n, t) && e.push(n);
                        }
                        return e;
                    },
                    [t],
                ),
                r = l === m ? null : (a.find((e) => e.id === l) ?? a[0] ?? null);
            return { guilds: a, destination: r?.id ?? m, destinationGuild: r, setDestination: n };
        })(y, "ConjureRemixModal"),
        [E, P] = i.useState(l),
        [N, M] = i.useState(t.name),
        [L, U] = i.useState(!1),
        [H, J] = i.useState(null),
        Q = i.useMemo(() => (0, f.yG)(t, R, b), [t, b]);
    i.useEffect(() => () => Q.dismiss(), [Q]);
    let Y = i.useMemo(
            () => [
                { id: m, label: A.intl.string(w.default["0Vceid"]), value: m, leading: r.AppsIcon },
                ...I.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            ],
            [I],
        ),
        q = _?.id ?? null,
        ee = "copy" === E,
        et = (0, f.$c)(N),
        el = i.useCallback(async () => {
            if (!et) return;
            U(!0);
            let e = await (async function (e, t, l, n, i) {
                var a, r, d;
                let s = null,
                    u = await e.confirm(t, l, (e, t) => {
                        (!0 !== l.copy || null == t) &&
                            ((s = e),
                            (0, D.pX)(null != t ? (0, G.Oj)(t, e) : (0, G.hU)(e), {
                                state: { conjureEntryPoint: "remix" },
                            }),
                            n());
                    });
                if (null == u) return null;
                if (!u.ok) {
                    return (
                        (0, T.P0)({ text: u.message, variant: "critical" }),
                        u.kept || null == s || ((a = s), (0, G.Xj)((0, D.JK)().location.pathname) !== a) || (0, D.aX)(),
                        u
                    );
                }
                if (null != s) return u;
                if (!0 === l.copy && null != u.guildId) {
                    i?.(u.guildId);
                    let e = await (async function (e, t) {
                        let l;
                        if (V.Ay.getIntegrationStatus(e)?.preview_ready !== !0) return null;
                        if (K(e)) {
                            try {
                                if ((await (0, z.vL)(e, t)) !== "approved") return null;
                            } catch {
                                return null;
                            }
                            if (K(e)) return null;
                        }
                        try {
                            let t = await (0, Z.TV)(e);
                            l = !0 === t.ok ? null : (0, $.A)(t);
                        } catch (e) {
                            l = e instanceof Error ? e.message : A.intl.string(w.default.gMWZeG);
                        }
                        if (null != l)
                            return (
                                F.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: e, message: l }), null
                            );
                        try {
                            await (0, W.tZ)(e, { isPreview: !1 });
                        } catch {}
                        return { appChannelId: await (0, z.T3)(e, t) };
                    })(u.projectId, u.guildId);
                    if (null != e) {
                        return (
                            (r = u.guildId),
                            null != (d = e.appChannelId) ? (0, D.pX)(B.BVt.CHANNEL(r, d)) : (0, O.u)(r),
                            n(),
                            u
                        );
                    }
                }
                return ((0, X.A)(u.projectId, "remix"), n(), u);
            })(Q, q, ee ? { name: N, copy: !0 } : { name: N }, j, (e) => J(p.A.getGuild(e)?.name ?? ""));
            e?.ok === !1 && U(!1);
        }, [Q, q, ee, N, et, j]),
        en = A.intl.string(w.default.XWgAfc);
    return (0, n.jsx)(a.a, {
        transitionState: x,
        onClose: j,
        title: A.intl.formatToPlainString(w.default.vU1gB6, { projectName: t.name }),
        subtitle: A.intl.string(w.default.PrV2rD),
        size: "md",
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: L },
            { text: en, variant: "primary", onClick: el, loading: L, disabled: !et },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 16,
            children: [
                (0, n.jsx)(s.k, {
                    label: A.intl.string(w.default["7gI+sw"]),
                    value: N,
                    onChange: M,
                    maxLength: 128,
                    disabled: L,
                    fullWidth: !0,
                }),
                (0, n.jsx)(u.Z, {
                    selectionMode: "single",
                    label: A.intl.string(w.default["maL0+X"]),
                    options: Y,
                    value: C,
                    onSelectionChange: S,
                    disabled: L,
                    fullWidth: !0,
                }),
                (0, n.jsx)(k, { value: E, onChange: P, disabled: L }),
                null != H
                    ? (0, n.jsx)("div", {
                          role: "status",
                          children: (0, n.jsx)(o.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: A.intl.formatToPlainString(w.default.O25g5n, {
                                  projectName: N.trim(),
                                  server: H,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
