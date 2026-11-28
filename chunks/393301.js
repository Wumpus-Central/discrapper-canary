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
    p = l(885574),
    g = l(143129),
    m = l(95477),
    h = l(890497),
    f = l(71393);
l(951178);
var v = l(845079),
    x = l(947275),
    j = l(782545),
    y = l(661106),
    b = l(258576),
    I = l(792996);
let w = /[\uD800-\uDBFF]$/;
function A(e) {
    return I.intl.formatToPlainString(b.default.F6fHag, { projectName: e });
}
l(321073);
var C = l(855986),
    _ = l(945810),
    k = l(576705),
    E = l(711014),
    S = l(246338);
let N = "library";
var P = l(625180),
    L = l(457827),
    M = l(373677),
    H = l(754027),
    R = l(939398),
    T = l(165610);
function z(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, M.PH)(null, (0, M.hR)(e.preview_supported_surfaces)),
        n = (0, R.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        a = (0, H.Op)((0, H.jS)(e), l);
    return (
        P.A.launchFrame({
            applicationId: t,
            surface: a,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, L.r)((0, T.VA)(t, a))
    );
}
var O = l(858899),
    Z = l(976860),
    F = l(751841),
    V = l(381991),
    X = l(540665),
    B = l(73153),
    G = l(345942),
    U = l(238490),
    W = l(260498),
    q = l(664619),
    D = l(962998),
    J = l(868193),
    K = l(738604),
    Q = l(652215);
function $(e) {
    let t = W.Ay.getIntegrationStatus(e);
    return (0, U.Qg)({
        installScope: W.Ay.getProject(e)?.install_scope ?? null,
        previewReady: t?.preview_ready === !0,
        integrationInstalled: t?.integration_installed ?? null,
        botPermissionsChanged: t?.bot_permissions_changed === !0,
    });
}
var Y = l(561580);
function ee(e) {
    let { project: t, currentGuildId: l, shareTicket: P, transitionState: L, onClose: M } = e,
        H = "guild" === t.install_scope,
        {
            guilds: R,
            destination: T,
            destinationGuild: U,
            changesType: ee,
            setDestination: et,
        } = (function (e, t, l) {
            let [n, i] = a.useState(null),
                r = (0, C.yK)(
                    [E.Ay, f.A, k.A, _.Bt],
                    () => {
                        let e = [];
                        for (let t of E.Ay.getFlattenedGuildIds()) {
                            let n = f.A.getGuild(t);
                            null != n && (0, S.sM)(n, l) && e.push(n);
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
                changesType: (0, y.Zz)(e, o),
                setDestination: i,
            };
        })(t, l, "ConjureRemixModal"),
        el = U?.id ?? null,
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
        [ec, ep] = a.useState(null),
        eg = a.useMemo(() => (0, y.yG)(t, z, P), [t, P]);
    a.useEffect(() => () => eg.dismiss(), [eg]);
    let em = a.useMemo(
            () => (0, j.A)({ value: N, label: I.intl.string(b.default["0Vceid"]), leading: r.AppsIcon }, R),
            [R],
        ),
        eh = ee
            ? I.intl.format(H ? b.default["e4/NHU"] : b.default.Olyu9M, {
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
        ev = (0, y.$c)(es),
        ex = a.useMemo(() => (0, x.IS)(), []),
        ej = a.useCallback(async () => {
            if (!ev) return;
            eo(!0);
            let e = await (async function (e, t, l, n, a) {
                var i, r, s;
                let { source: d, name: u, changes: o, autoUpdates: c } = l,
                    p = (function (e, t, l) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return l && "" === n.trim() && !(0, y.Zz)(e, t);
                    })(d, t, c, o),
                    g = null,
                    m = await e.confirm(t, p ? { name: u, copy: !0 } : { name: u }, (e, t) => {
                        (p && null != t) ||
                            ((g = e),
                            (0, Z.pX)(null != t ? (0, F.Oj)(t, e) : (0, F.hU)(e), {
                                state: { conjureEntryPoint: "remix" },
                            }),
                            n());
                    });
                if (null == m) return null;
                if (!m.ok) {
                    return (
                        (0, O.P0)({ text: m.message, variant: "critical" }),
                        m.kept || null == g || ((i = g), (0, F.Xj)((0, Z.JK)().location.pathname) !== i) || (0, Z.aX)(),
                        m
                    );
                }
                if (
                    (!(function (e, t, l) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            a = n.trim();
                        (0, y.Zz)(e, l)
                            ? (0, x.KA)(t, (0, x.Is)(null != l ? "added" : "removed", a))
                            : "" !== a && (0, X.dv)(t, a);
                    })(d, m.projectId, t, o),
                    null != g)
                )
                    return m;
                if (p && null != m.guildId) {
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
                            l = e instanceof Error ? e.message : I.intl.string(b.default.gMWZeG);
                        }
                        if (null != l)
                            return (
                                B.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: e, message: l }), null
                            );
                        try {
                            await (0, q.tZ)(e, { isPreview: !1 });
                        } catch {}
                        return { appChannelId: await (0, K.T3)(e, t) };
                    })(m.projectId, m.guildId);
                    if (null != e) {
                        return (
                            (r = m.guildId),
                            null != (s = e.appChannelId) ? (0, Z.pX)(Q.BVt.CHANNEL(r, s)) : (0, G.u)(r),
                            n(),
                            m
                        );
                    }
                }
                return ((0, V.A)(m.projectId, "remix"), n(), m);
            })(eg, el, { source: t, name: es, changes: en, autoUpdates: ei }, M, (e) =>
                ep(f.A.getGuild(e)?.name ?? ""),
            );
            e?.ok === !1 && eo(!1);
        }, [eg, el, t, es, en, ei, ev, M]),
        ey = I.intl.string(b.default.XWgAfc),
        eb = I.intl.string(b.default.LhVLqL),
        eI = I.intl.string(b.default["6qjRAz"]);
    return (0, n.jsx)(i.a, {
        transitionState: L,
        onClose: M,
        title: ey,
        size: "md",
        actions: [
            { text: I.intl.string(I.t["ETE/oC"]), variant: "secondary", onClick: M, disabled: eu },
            { text: ey, variant: "primary", onClick: ej, loading: eu, disabled: !ev },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 24,
            children: [
                (0, n.jsx)(s.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: I.intl.format(b.default["aR/jb7"], {
                        projectName: t.name,
                        projectHook: (e, l) =>
                            (0, n.jsxs)(
                                "span",
                                {
                                    className: Y.sP,
                                    children: [
                                        (0, n.jsx)(v.A, { project: t, size: "header", className: Y.pI }),
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
                    label: I.intl.string(b.default["deAv/Y"]),
                    placeholder: I.intl.string(b.default["vhUp/8"]),
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
                                    children: eb,
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
                                            children: (0, n.jsx)(p.CircleInformationIcon, {
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
                            children: (0, n.jsx)(g.d, {
                                label: eb,
                                hideLabel: !0,
                                checked: ei && !ef,
                                disabled: eu || ef,
                                onChange: er,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(m.k, {
                    label: I.intl.string(b.default["7gI+sw"]),
                    value: es,
                    onChange: ed,
                    maxLength: 128,
                    disabled: eu,
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.Z, {
                    selectionMode: "single",
                    label: I.intl.string(b.default["maL0+X"]),
                    description: I.intl.string(b.default.R2uxWO),
                    helperText: eh,
                    options: em,
                    value: T,
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
                              children: I.intl.formatToPlainString(b.default.O25g5n, {
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
