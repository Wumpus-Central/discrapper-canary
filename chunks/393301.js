l.d(t, { default: () => ee });
var n = l(477900),
    a = l(582128),
    i = l(189213),
    r = l(323384),
    s = l(834730),
    d = l(331322),
    u = l(103557),
    o = l(866665),
    c = l(559106),
    g = l(885574),
    p = l(143129),
    m = l(95477),
    h = l(890497),
    f = l(682163),
    v = l(71393);
l(951178);
var x = l(845079),
    j = l(959956),
    b = l(661106),
    y = l(191850),
    I = l(792996);
let w = /[\uD800-\uDBFF]$/;
function A(e) {
    return I.intl.formatToPlainString(y.default.F6fHag, { projectName: e });
}
l(321073);
var C = l(855986),
    _ = l(945810),
    S = l(576705),
    k = l(711014),
    E = l(246338);
let N = "library";
var P = l(625180),
    L = l(457827),
    M = l(373677),
    z = l(754027),
    H = l(939398),
    R = l(165610);
function T(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, M.PH)(null, (0, M.hR)(e.preview_supported_surfaces)),
        n = (0, H.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        a = (0, z.Op)((0, z.jS)(e), l);
    return (
        P.A.launchFrame({
            applicationId: t,
            surface: a,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, L.r)((0, R.VA)(t, a))
    );
}
var B = l(858899),
    O = l(976860),
    Z = l(751841),
    F = l(381991),
    U = l(540665),
    V = l(73153),
    X = l(345942),
    G = l(238490),
    W = l(260498),
    q = l(664619),
    D = l(962998),
    J = l(868193),
    K = l(738604),
    Q = l(652215);
function $(e) {
    let t = W.Ay.getIntegrationStatus(e);
    return (0, G.Qg)({
        installScope: W.Ay.getProject(e)?.install_scope ?? null,
        previewReady: t?.preview_ready === !0,
        integrationInstalled: t?.integration_installed ?? null,
        botPermissionsChanged: t?.bot_permissions_changed === !0,
    });
}
var Y = l(561580);
function ee(e) {
    let { project: t, currentGuildId: l, shareTicket: P, transitionState: L, onClose: M } = e,
        z = "guild" === t.install_scope,
        {
            guilds: H,
            destination: R,
            destinationGuild: G,
            changesType: ee,
            setDestination: et,
        } = (function (e, t, l) {
            let [n, i] = a.useState(null),
                r = (0, C.yK)(
                    [k.Ay, v.A, S.A, _.Bt],
                    () => {
                        let e = [];
                        for (let t of k.Ay.getFlattenedGuildIds()) {
                            let n = v.A.getGuild(t);
                            null != n && (0, E.sM)(n, l) && e.push(n);
                        }
                        return e;
                    },
                    [l],
                ),
                s = null != n ? r.find((e) => e.id === n) : void 0,
                d = "guild" === e.install_scope ? (r.find((e) => e.id === t) ?? r[0] ?? null) : null,
                u = n === N ? null : (s ?? d),
                o = u?.id ?? null;
            return {
                guilds: r,
                destination: o ?? N,
                destinationGuild: u,
                changesType: (0, b.Zz)(e, o),
                setDestination: i,
            };
        })(t, l, "ConjureRemixModal"),
        el = G?.id ?? null,
        [en, ea] = a.useState(""),
        [ei, er] = a.useState(!0),
        [es, ed] = a.useState(() => {
            var e;
            let l;
            return (
                (e = t.name),
                (l = Math.max(0, 128 - A("").length)),
                e.length <= l ? A(e) : A(e.slice(0, l).replace(w, "").trimEnd())
            );
        }),
        [eu, eo] = a.useState(!1),
        [ec, eg] = a.useState(null),
        ep = a.useMemo(() => (0, b.yG)(t, T, P), [t, P]);
    a.useEffect(() => () => ep.dismiss(), [ep]);
    let em = a.useMemo(
            () => [
                {
                    label: I.intl.string(y.default.Bz4S5B),
                    options: [{ id: N, label: I.intl.string(y.default["0Vceid"]), value: N, leading: r.AppsIcon }],
                },
                {
                    label: I.intl.string(y.default.Uugfhl),
                    options: H.map((e) => ({
                        id: e.id,
                        label: e.name,
                        value: e.id,
                        leading: (0, n.jsx)(f.Ay, { guild: e, size: f.Ay.Sizes.MINI, active: !0 }),
                    })),
                },
            ],
            [H],
        ),
        eh = ee
            ? I.intl.format(z ? y.default["e4/NHU"] : y.default.Olyu9M, {
                  projectName: t.name,
                  warningHook: (e, t) =>
                      (0, n.jsx)(
                          s.E,
                          { tag: "span", variant: "body-xs/normal", color: "text-feedback-warning", children: e },
                          t,
                      ),
              })
            : void 0,
        ef = "" !== en.trim() || ee,
        ev = (0, b.$c)(es),
        ex = a.useMemo(() => (0, j.IS)(), []),
        ej = a.useCallback(async () => {
            if (!ev) return;
            eo(!0);
            let e = await (async function (e, t, l, n, a) {
                var i, r, s;
                let { source: d, name: u, changes: o, autoUpdates: c } = l,
                    g = (function (e, t, l) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return l && "" === n.trim() && !(0, b.Zz)(e, t);
                    })(d, t, c, o),
                    p = null,
                    m = await e.confirm(t, g ? { name: u, copy: !0 } : { name: u }, (e, t) => {
                        (g && null != t) ||
                            ((p = e),
                            (0, O.pX)(null != t ? (0, Z.Oj)(t, e) : (0, Z.hU)(e), {
                                state: { conjureEntryPoint: "remix" },
                            }),
                            n());
                    });
                if (null == m) return null;
                if (!m.ok) {
                    return (
                        (0, B.P0)({ text: m.message, variant: "critical" }),
                        m.kept || null == p || ((i = p), (0, Z.Xj)((0, O.JK)().location.pathname) !== i) || (0, O.aX)(),
                        m
                    );
                }
                if (
                    (!(function (e, t, l) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            a = n.trim();
                        (0, b.Zz)(e, l)
                            ? (0, j.KA)(t, (0, j.Is)(null != l ? "added" : "removed", a))
                            : "" !== a && (0, U.dv)(t, a);
                    })(d, m.projectId, t, o),
                    null != p)
                )
                    return m;
                if (g && null != m.guildId) {
                    a?.(m.guildId);
                    let e = await (async function (e, t) {
                        let l;
                        if (W.Ay.getIntegrationStatus(e)?.preview_ready !== !0) return null;
                        if ($(e)) {
                            try {
                                if ((await (0, K.vL)(e, t)) !== "approved") return null;
                            } catch {
                                return null;
                            }
                            if ($(e)) return null;
                        }
                        try {
                            let t = await (0, D.TV)(e);
                            l = !0 === t.ok ? null : (0, J.A)(t);
                        } catch (e) {
                            l = e instanceof Error ? e.message : I.intl.string(y.default.gMWZeG);
                        }
                        if (null != l)
                            return (
                                V.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: e, message: l }), null
                            );
                        try {
                            await (0, q.tZ)(e, { isPreview: !1 });
                        } catch {}
                        return { appChannelId: await (0, K.T3)(e, t) };
                    })(m.projectId, m.guildId);
                    if (null != e) {
                        return (
                            (r = m.guildId),
                            null != (s = e.appChannelId) ? (0, O.pX)(Q.BVt.CHANNEL(r, s)) : (0, X.u)(r),
                            n(),
                            m
                        );
                    }
                }
                return ((0, F.A)(m.projectId, "remix"), n(), m);
            })(ep, el, { source: t, name: es, changes: en, autoUpdates: ei }, M, (e) =>
                eg(v.A.getGuild(e)?.name ?? ""),
            );
            e?.ok === !1 && eo(!1);
        }, [ep, el, t, es, en, ei, ev, M]),
        eb = I.intl.string(y.default.XWgAfc),
        ey = I.intl.string(y.default.LhVLqL),
        eI = I.intl.string(y.default["6qjRAz"]);
    return (0, n.jsx)(i.a, {
        transitionState: L,
        onClose: M,
        title: eb,
        size: "md",
        actions: [
            { text: I.intl.string(I.t["ETE/oC"]), variant: "secondary", onClick: M, disabled: eu },
            { text: eb, variant: "primary", onClick: ej, loading: eu, disabled: !ev },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 24,
            children: [
                (0, n.jsx)(s.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: I.intl.format(y.default["aR/jb7"], {
                        projectName: t.name,
                        projectHook: (e, l) =>
                            (0, n.jsxs)(
                                "span",
                                {
                                    className: Y.sP,
                                    children: [
                                        (0, n.jsx)(x.A, { project: t, size: "header", className: Y.pI }),
                                        (0, n.jsx)(s.E, {
                                            tag: "span",
                                            variant: "body-md/medium",
                                            color: "text-strong",
                                            className: Y.VZ,
                                            children: e,
                                        }),
                                    ],
                                },
                                l,
                            ),
                    }),
                }),
                (0, n.jsx)(u.f, {
                    label: I.intl.string(y.default["deAv/Y"]),
                    placeholder: I.intl.string(y.default["vhUp/8"]),
                    value: en,
                    onChange: ea,
                    maxLength: ex,
                    rows: 3,
                    disabled: eu,
                }),
                (0, n.jsxs)("div", {
                    className: Y.wP,
                    children: [
                        (0, n.jsxs)("div", {
                            className: Y.QI,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    "aria-hidden": !0,
                                    children: ey,
                                }),
                                (0, n.jsx)(o.m, {
                                    text: eI,
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(c.vN, {
                                        children: (0, n.jsx)("span", {
                                            className: Y.pq,
                                            role: "img",
                                            "aria-label": eI,
                                            tabIndex: 0,
                                            children: (0, n.jsx)(g.CircleInformationIcon, {
                                                size: "xxs",
                                                color: "currentColor",
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: Y.gx,
                            children: (0, n.jsx)(p.d, {
                                label: ey,
                                hideLabel: !0,
                                checked: ei && !ef,
                                disabled: eu || ef,
                                onChange: er,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(m.k, {
                    label: I.intl.string(y.default["7gI+sw"]),
                    value: es,
                    onChange: ed,
                    maxLength: 128,
                    disabled: eu,
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.Z, {
                    selectionMode: "single",
                    label: I.intl.string(y.default["maL0+X"]),
                    description: I.intl.string(y.default.R2uxWO),
                    helperText: eh,
                    options: em,
                    value: R,
                    onSelectionChange: et,
                    disabled: eu,
                    fullWidth: !0,
                }),
                null != ec
                    ? (0, n.jsx)("div", {
                          role: "status",
                          children: (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: I.intl.formatToPlainString(y.default.O25g5n, {
                                  projectName: es.trim(),
                                  server: ec,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
