(t.d(l, { default: () => eE }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(855986),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    d = t(430993),
    c = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    m = t(696208),
    g = t(540665),
    h = t(260498),
    x = t(360047),
    b = t(191850),
    j = t(792996);
let v = [];
var y = t(323384),
    C = t(646514),
    S = t(265872),
    k = t(165862),
    A = t(477782),
    E = t(866665),
    I = t(408278),
    P = t(365199),
    T = t(845079),
    _ = t(843313);
function w(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: r, failed: s, setBuild: u, remove: d } = l;
    return (0, n.jsx)("div", {
        className: _.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: j.intl.string(b.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: t.map((e) => {
                        let l = r[e.project_id];
                        return (0, n.jsx)(
                            N,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: l,
                                onBuildChange: (l) => u(e.project_id, l),
                                onRemove: () => {
                                    var t;
                                    return (
                                        (t = e.project_id),
                                        void (0, i.A)({
                                            title: j.intl.formatToPlainString(b.default.zSfIvv, { name: l }),
                                            subtitle: j.intl.formatToPlainString(b.default["7TX+mR"], { name: l }),
                                            confirmText: j.intl.string(b.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => d(t),
                                        })
                                    );
                                },
                            },
                            e.project_id,
                        );
                    }),
                }),
                s
                    ? (0, n.jsx)(f.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: j.intl.string(b.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function N(e) {
    let { caller: l, project: t, name: r, onBuildChange: i, onRemove: s } = e,
        u = a.useRef(null),
        d = j.intl.formatToPlainString(b.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: _.nM,
        children: [
            null != t
                ? (0, n.jsx)(T.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: _.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(y.AppsIcon, { size: "md", color: C.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: _.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", lineClamp: 1, children: r }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, x.hU)(l.build),
                    }),
                ],
            }),
            (0, n.jsx)(S.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: S.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsxs)(k.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${l.project_id}`,
                        "aria-label": d,
                        onClose: t,
                        onSelect: t,
                        children: [
                            (0, n.jsx)(A.rX, {
                                label: j.intl.string(b.default.Odrcmq),
                                children: x.Hi.map((e) =>
                                    (0, n.jsx)(
                                        A.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, x.hU)(e),
                                            subtext: (0, x.Vq)(e),
                                            checked: e === l.build,
                                            action: () => {
                                                (i(e), t());
                                            },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, n.jsx)(A.bX, {}),
                            (0, n.jsx)(A.rX, {
                                children: (0, n.jsx)(A.Dr, {
                                    id: "remove",
                                    color: "danger",
                                    label: j.intl.string(b.default.bN1S9T),
                                    action: s,
                                }),
                            }),
                        ],
                    });
                },
                children: (e, l) => {
                    let { onClick: t } = e,
                        { isShown: a } = l;
                    return (0, n.jsx)("div", {
                        ref: u,
                        className: _.hZ,
                        children: (0, n.jsx)(E.m, {
                            text: d,
                            children: (0, n.jsx)(I.K, {
                                icon: P.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": d,
                                "aria-haspopup": "menu",
                                "aria-expanded": a,
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
        ],
    });
}
var R = t(557744),
    B = t(223347),
    z = t(822313),
    L = t(359589),
    F = t(722701),
    D = t(811587),
    M = t(826058),
    H = t(534514),
    U = t(821609),
    V = t(44255),
    Z = t(303345),
    G = t(416473);
function O(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, g.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, c] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [h, x] = a.useState(null),
                [v, y] = a.useState(0),
                C = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, G.fi)(e)
                        .then((e) => {
                            S.current.value === a && (i(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (m(j.intl.string(b.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), m(null), y((e) => e + 1));
                }, []),
                A = a.useCallback(async () => {
                    if (!l || !d || C.current) return;
                    C.current = !0;
                    let t = ++S.current.value;
                    (f(!0), m(null), x(null));
                    try {
                        let l = await (0, G.MN)(e);
                        if (S.current.value !== t) return;
                        (i(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && m(e instanceof Z.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((C.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: o, error: p, status: h, retry: k, remove: A };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(H.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(b.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: j.intl.string(b.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: j.intl.string(b.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, V.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(U.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: j.intl.string(b.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, i.A)({
                                                    title: j.intl.string(b.default["Tw/KaB"]),
                                                    subtitle: j.intl.string(b.default.qr1iIe),
                                                    confirmText: j.intl.string(b.default.J7ZMMf),
                                                    variant: "critical",
                                                    onConfirm: s.remove,
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "body-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(U.$, {
                            type: "button",
                            variant: "secondary",
                            text: j.intl.string(b.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var q = t(290713),
    J = t(143129),
    Q = t(890497),
    X = t(904363),
    K = t(540338),
    W = t(503698),
    $ = t.n(W),
    Y = t(750943),
    ee = t(22231),
    el = t(95477),
    et = t(103557),
    en = t(946274),
    ea = t(951178),
    er = t(535466),
    ei = t(154600);
function es(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ei.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: $()(ei.Vs, { [ei.A6]: u }),
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(Y.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ei.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ei.Jx,
                                  children: (0, n.jsx)(ee.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(en.Ay, {
                ref: s,
                className: ei.Fg,
                multiple: !1,
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: er.En }],
                maxFileSizeBytes: er.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(j.intl.string(b.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function eu(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function ed(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: d,
            description: c,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [g, h] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                eu(e, n, a);
                let r = new ResizeObserver(() => eu(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: ei.S7,
                        children: [
                            (0, n.jsx)(es, { iconURL: r, disabled: m, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ei.yD,
                                children: (0, n.jsx)(el.k, {
                                    label: j.intl.string(b.default.GWBCF9),
                                    value: s,
                                    onChange: d,
                                    error: u,
                                    maxLength: 128,
                                    disabled: m,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != g
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: g,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(et.f, {
                label: j.intl.string(b.default.ynaGa1),
                placeholder: j.intl.string(b.default["I+3UTL"]),
                value: c,
                onChange: p,
                maxLength: 400,
                disabled: m,
            }),
        ],
    });
}
var ec = t(60498),
    eo = t(420036),
    ef = t(5377);
function ep(e) {
    let { projectId: l } = e,
        t = (0, ec.Ay)(l),
        a = (0, ec.cg)(l);
    if (null == t) return null;
    let r = t.updatesPaused;
    return (0, n.jsxs)(o.B, {
        gap: 4,
        children: [
            (0, n.jsx)(f.E, {
                variant: "body-md/medium",
                color: "text-default",
                children: j.intl.string(b.default["+QBNDE"]),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (function (e, l) {
                    let { sourceName: t } = e;
                    return null == t
                        ? j.intl.string(l ? b.default["5wuDGB"] : b.default.rxvuqx)
                        : j.intl.formatToPlainString(l ? b.default.HHthpS : b.default.qpGg7d, { name: t });
                })(t, r),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: r || a?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (e, l) {
                    if (l) return j.intl.string(b.default["uV/luq"]);
                    if (null == e || null == e.atMs) return j.intl.string(b.default.gHndTq);
                    let t = (0, ef.i$)(new Date(e.atMs), "LLL");
                    switch (e.status) {
                        case "updated":
                            return j.intl.formatToPlainString(b.default["6rQ8So"], { time: t });
                        case "failed":
                            return j.intl.formatToPlainString(b.default.HZnsMq, { time: t });
                        case "held":
                            return j.intl.string(b.default.AwPHix);
                        case "current":
                        case "paused":
                            return j.intl.formatToPlainString(b.default.yc0AaP, { time: t });
                    }
                })(a, r),
            }),
        ],
    });
}
t(938796);
var em = t(862026),
    eg = t(709753),
    eh = t(961553),
    ex = t(944142),
    eb = t(788493),
    ej = t(532247),
    ev = t(233470),
    ey = t(426035),
    eC = t(246338),
    eS = t(277085),
    ek = t(453430);
let eA = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function eE(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: y,
            scopeKeys: C,
            note: S,
            notifyAgent: k,
            isPreview: A,
            publishOptions: E,
            transitionState: I,
            onClose: P,
        } = e,
        T = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        _ = (0, r.bG)([R.A], () => R.A.getModelSettings(l), [l]),
        N = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        B = null != T && (0, h.PV)(T),
        z = null != T && (0, h.jf)(T),
        L = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, X.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: d,
                    liveReload: c,
                    smartContext: p,
                    hostApproval: m,
                    name: g,
                    nameError: x,
                    nameChanged: v,
                    isPublic: y,
                    isGuildCollaboration: C,
                    usesPreviewApp: S,
                    canChangePreviewApp: k,
                    selectedRoleIds: A,
                    supportsVisibility: E,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: P,
                    checkingAppInGuild: T,
                    saving: _,
                    selectionError: w,
                    saveError: N,
                    experimentalError: R,
                    canSave: B,
                    handleIconChange: z,
                    handleNameChange: L,
                    handleDescriptionChange: F,
                    handleFlagChange: D,
                    handleUsesPreviewAppChange: H,
                    handleLiveReloadChange: U,
                    handleRoleSelectionChange: V,
                    handleSmartContextChange: Z,
                    handleRequireHostApprovalChange: G,
                    submit: O,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([ex.A], () => ex.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [i, s] = a.useState(null);
                            null != i && l !== i.before && s(null);
                            let u = null != i && l === i.before ? i.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let d = null != l && null != t && t !== u,
                                c = a.useCallback(
                                    () =>
                                        !d ||
                                        null == t ||
                                        (!!(0, eb.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [d, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, ej.oV)(l),
                                changed: d,
                                setChecked: n,
                                save: c,
                            };
                        })(e),
                        u = s.save,
                        d = (0, eh.A)(e),
                        { changes: c, commit: o } = d,
                        f = (0, em.Q)(e),
                        p = f.save,
                        m = (0, eg._t)(e),
                        g = m.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [C, S] = a.useState(null),
                        [k, A] = a.useState(v),
                        [E, I] = a.useState(i?.flags ?? 0),
                        [P, T] = a.useState(() => [...x]),
                        _ = i?.uses_preview_app,
                        [w, N] = a.useState(null);
                    null != w && w === _ && N(null);
                    let [R, B] = a.useState(!1),
                        [z, L] = a.useState(null),
                        [F, D] = a.useState(null),
                        [H, U] = a.useState(null),
                        [V, Z] = a.useState(null),
                        [G, O] = a.useState(!1),
                        q = a.useRef(null),
                        J = a.useRef(!1),
                        Q = k.trim(),
                        X = null != i && (0, ea.IU)(i),
                        K = null != i && "guild" === i.install_scope,
                        W = K && null != l && (0, ea.RX)(i),
                        { isPublic: $, isGuildCollaboration: Y } = (0, eC.n5)(E),
                        ee = null != i && Q !== v,
                        el = X && E !== (C?.flags ?? i?.flags ?? 0),
                        et =
                            W &&
                            ((t = C?.roleIds ?? x), !((n = new Set(P)).size === t.length && t.every((e) => n.has(e)))),
                        en = null != _,
                        er = w ?? _ ?? !1,
                        ei = en && null != w,
                        es = ee || el || et || ei || d.changed,
                        eu = es || s.changed || f.changed || m.changed,
                        { setIcon: ed, setDescription: ec } = d,
                        eo = s.setChecked,
                        ef = f.setChecked,
                        ep = m.setChecked,
                        ek = a.useCallback(
                            (e) => {
                                (ed(e), U(null));
                            },
                            [ed],
                        ),
                        eA = a.useCallback(
                            (e) => {
                                (ec(e), U(null));
                            },
                            [ec],
                        ),
                        eE = a.useCallback((e) => {
                            (A(e), L(null), U(null));
                        }, []),
                        eI = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), D(null), U(null));
                        }, []),
                        eP = a.useCallback((e) => {
                            (N(e), U(null));
                        }, []),
                        eT = a.useCallback(
                            (e) => {
                                (eo(e), U(null));
                            },
                            [eo],
                        ),
                        e_ = a.useCallback(async () => {
                            if (null == i || null == l || null == i.preview_application_id || q.current === l)
                                return !0;
                            if (J.current) return !1;
                            ((J.current = !0), O(!0));
                            try {
                                let e = await (0, ey.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (q.current = l), !0);
                                await (0, M.vL)(i.id, l);
                                let t = (await (0, ey.cC)(i, l)) === !0;
                                return (t && (q.current = l), t);
                            } finally {
                                ((J.current = !1), O(!1));
                            }
                        }, [l, i]),
                        ew = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void D(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (T(e), D(null), U(null));
                                };
                                if (!e.some((e) => !P.includes(e))) return void l();
                                try {
                                    (await e_()) && l();
                                } catch {}
                            },
                            [e_, P],
                        ),
                        eN = a.useCallback(
                            (e) => {
                                (ef(e), Z(null));
                            },
                            [ef],
                        ),
                        eR = a.useCallback(
                            (e) => {
                                (ep(e), Z(null));
                            },
                            [ep],
                        ),
                        eB = a.useCallback(async () => {
                            if (null == i || !eu || R) return null;
                            let t = ee ? (0, eS.p)(Q) : null;
                            if (null != t) return (L(t), "project");
                            let n = { ...c };
                            (ee && (n.name = Q),
                                el && (n.flags = E),
                                et && (n.collaborator_role_ids = [...P].sort()),
                                ei && (n.uses_preview_app = er),
                                null == i.guild_id && null != l && (et || (el && Y)) && (n.guild_id = l),
                                B(!0),
                                U(null),
                                Z(null));
                            try {
                                if ((es && (await (0, ev.CW)(e, n), y(Q), S({ flags: E, roleIds: [...P] }), o()), !u()))
                                    return (U(j.intl.string(b.default.XzkNBw)), "project");
                                if (!p() || !g()) return (Z(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (U(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                B(!1);
                            }
                        }, [o, E, el, l, eu, c, Y, ee, ei, er, i, e, es, et, g, u, p, R, P, Q]);
                    return {
                        iconURL: d.iconURL,
                        description: d.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: k,
                        nameError: z,
                        nameChanged: ee,
                        isPublic: $,
                        isGuildCollaboration: Y,
                        usesPreviewApp: er,
                        canChangePreviewApp: en,
                        selectedRoleIds: P,
                        supportsVisibility: X,
                        supportsCollaboration: K,
                        supportsCollaboratorRoles: W,
                        checkingAppInGuild: G,
                        saving: R,
                        selectionError: F,
                        saveError: H,
                        experimentalError: V,
                        canSave: eu && "" !== Q,
                        handleIconChange: ek,
                        handleNameChange: eE,
                        handleDescriptionChange: eA,
                        handleFlagChange: eI,
                        handleUsesPreviewAppChange: eP,
                        handleLiveReloadChange: eT,
                        handleRoleSelectionChange: ew,
                        ensureAppInGuild: e_,
                        handleSmartContextChange: eN,
                        handleRequireHostApprovalChange: eR,
                        submit: eB,
                    };
                })(e, l),
                q = _ || t,
                W = (0, ec.AJ)(e);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: j.intl.string(b.default.s7VnVF),
                              })
                            : null,
                        W
                            ? (0, n.jsx)(ep, { projectId: e })
                            : (0, n.jsx)(ed, {
                                  iconURL: u,
                                  onIconChange: z,
                                  name: g,
                                  nameError: x,
                                  onNameChange: L,
                                  description: d,
                                  onDescriptionChange: F,
                                  disabled: q,
                              }),
                        E && !W
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.ujIxRm),
                                  description: j.intl.string(b.default.gT8zk1),
                                  checked: y,
                                  disabled: q,
                                  onChange: (e) => D(ea.Zh.PUBLIC, e),
                              })
                            : null,
                        t ? null : (0, n.jsx)(eo.A, { projectId: e }),
                        E && I
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: C,
                                  disabled: q,
                                  onChange: (e) => D(ea.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        k
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.DV2hcV),
                                  description: j.intl.string(b.default.yjWIzb),
                                  checked: S,
                                  disabled: q,
                                  onChange: H,
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: q,
                                  onChange: U,
                              })
                            : null,
                        P
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(b.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(Q.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(b.default["pO3+p5"]),
                                          placeholder: j.intl.string(b.default.gvL7QS),
                                          value: A,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: q || !C || T,
                                          "aria-invalid": null != w,
                                          "aria-errormessage": null != w ? s : void 0,
                                          onSelectionChange: V,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: A.length,
                                              max: 25,
                                          }),
                                      }),
                                      C
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(b.default.nZw5r9),
                                            }),
                                      null != w
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: w,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != N
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(J.d, {
                            label: j.intl.string(b.default["4liZ45"]),
                            description: j.intl.string(b.default.I5cl7p),
                            checked: p.checked,
                            disabled: _,
                            onChange: Z,
                        }),
                        (0, n.jsx)(J.d, {
                            label: j.intl.string(b.default.mpjaVm),
                            description: j.intl.string(b.default["2PxChh"]),
                            checked: m.checked,
                            disabled: _,
                            onChange: G,
                        }),
                        (0, n.jsx)(K.u, { projectId: e }),
                        null != R
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: R,
                              })
                            : null,
                    ],
                }),
                canSave: B,
                saving: _,
                nameChanged: v,
                submit: O,
            };
        })(l, T?.guild_id ?? t ?? void 0, { readOnly: !B }),
        H = (function (e, l) {
            let [t, n] = a.useState(v),
                [i, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    !(async function () {
                        try {
                            let l = await (0, x.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, r.cf)(
                    [h.Ay],
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [l, h.Ay.getProject(l)];
                            }),
                        ),
                    [t],
                ),
                d = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    u[l]?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: d,
                failed: i,
                setBuild: a.useCallback(
                    async (l, t) => {
                        s(!1);
                        try {
                            await (0, x.Ol)(e, l, t);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e)));
                    },
                    [e],
                ),
                remove: a.useCallback(
                    async (l) => {
                        s(!1);
                        try {
                            await (0, x.pc)(e, l);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.filter((e) => e.project_id !== l));
                    },
                    [e],
                ),
            };
        })(l, z),
        [U, V] = a.useState(null);
    return (0, n.jsx)(q.A, {
        projectId: l,
        scopeKeys: C,
        note: S,
        notifyAgent: k,
        isPreview: A,
        children: (e) => {
            let t = [];
            ((B || z) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                _?.tierSettings != null && t.push("model"),
                H.callers.length > 0 && t.push("linked"),
                B && t.push("experimental"));
            let a = [U, y].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                g = !B && !r && !t.includes("app") && !t.includes("secrets"),
                x = (B && L.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && B && L.canSave }),
                C = j.intl.string(r ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && V("app");
                        return;
                    }
                    let s = !r && B && L.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !B ? null : L.submit });
                    if (u.saved) {
                        (await P(),
                            s &&
                                null != E &&
                                (function (e, l) {
                                    let t = h.Ay.getProject(e);
                                    if (null == t || !(0, M.qF)(t)) return;
                                    let n = F.A.getPublishStatus(e);
                                    null != n &&
                                        (0, D.lE)(n.publishState) &&
                                        (0, i.A)({
                                            title: j.intl.string(b.default["48pvCR"]),
                                            subtitle: j.intl.string(b.default["Xk+JsJ"]),
                                            confirmText: j.intl.string(b.default.guoHDk),
                                            cancelText: j.intl.string(b.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, M.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, E));
                        return;
                    }
                    "app" !== u.failedTab
                        ? V(u.failedTab)
                        : "secrets" !== a && V(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": C,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: C }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => V(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: j.intl.string(eA[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: ek.f,
                                          children: [L.fields, (0, n.jsx)(O, { projectId: l, canEdit: z }, l)],
                                      }),
                                r || "linked" !== a ? null : (0, n.jsx)(w, { linkedApps: H }),
                                r || "experimental" !== a ? null : L.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || _?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eI, { projectId: l, modelSettings: _, tierSettings: _.tierSettings }),
                                r || null != a
                                    ? null
                                    : N
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(b.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: ek.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: g
                                ? [{ text: j.intl.string(j.t.cpT0Cq), variant: "secondary", onClick: P }]
                                : [
                                      {
                                          text: j.intl.string(j.t["ETE/oC"]),
                                          variant: "secondary",
                                          onClick: P,
                                          disabled: x,
                                      },
                                      {
                                          text: j.intl.string(r ? b.default.A7dQd9 : j.t["R3BPH+"]),
                                          variant: "primary",
                                          type: "submit",
                                          loading: x,
                                          disabled: !v,
                                      },
                                  ],
                        }),
                    ],
                }),
            });
        },
    });
}
function eI(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, B.X)(l, e), [l]),
        [d, c] = (0, z.A)(i, u);
    return (0, n.jsx)(L.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
