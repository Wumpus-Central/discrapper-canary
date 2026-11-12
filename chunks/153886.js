(t.d(l, { default: () => e_ }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(855986),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    d = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    g = t(696208),
    m = t(540665),
    h = t(260498),
    x = t(360047),
    j = t(191850),
    b = t(792996);
let v = [],
    y = [],
    S = { live: !1, hasPreview: !0 };
var C = t(265872),
    k = t(165862),
    P = t(477782),
    A = t(866665),
    E = t(408278),
    w = t(365199),
    I = t(691885),
    N = t(821609),
    T = t(762026),
    _ = t(700915),
    R = t(985965),
    B = t(843313);
function L(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: r, projects: s, names: u, failed: c, saved: d, setBuild: p, remove: g } = l;
    return (0, n.jsx)("div", {
        className: B.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: B.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: b.intl.formatToPlainString(j.default.uLPdNT, { name: l.name }),
                                  }),
                              }),
                              a.map((e) =>
                                  (0, n.jsx)(
                                      F,
                                      {
                                          caller: e,
                                          sides: (0, T.cL)(l, e),
                                          project: s[e.project_id],
                                          targetProject: l.project,
                                          onBuildChange: (l) => p(e.project_id, l),
                                          onRemove: () => {
                                              var l, t;
                                              return (
                                                  (l = e.project_id),
                                                  (t = u[e.project_id]),
                                                  void (0, i.A)({
                                                      title: b.intl.formatToPlainString(j.default.zSfIvv, { name: t }),
                                                      subtitle: b.intl.formatToPlainString(j.default["7TX+mR"], {
                                                          name: t,
                                                      }),
                                                      confirmText: b.intl.string(j.default.vDZEGQ),
                                                      variant: "critical",
                                                      onConfirm: () => g(l),
                                                  })
                                              );
                                          },
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                r.length > 0
                    ? (0, n.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: B.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: b.intl.formatToPlainString(j.default.L3Bf1s, { name: l.name }),
                                  }),
                              }),
                              r.map((e) =>
                                  (0, n.jsx)(
                                      M,
                                      {
                                          target: e,
                                          sides: (0, T.cs)(l, e),
                                          project: s[e.project_id],
                                          callerProject: l.project,
                                          onOpen: () => t(e.project_id),
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                (0, n.jsx)("div", {
                    role: "status",
                    children: c
                        ? (0, n.jsx)(f.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: b.intl.string(j.default.dIEOrl),
                          })
                        : d
                          ? (0, n.jsx)(f.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: b.intl.string(j.default["/d6saK"]),
                            })
                          : null,
                }),
            ],
        }),
    });
}
function F(e) {
    let { caller: l, sides: t, project: r, targetProject: i, onBuildChange: s, onRemove: u } = e,
        c = a.useRef(null),
        d = b.intl.formatToPlainString(j.default.bzMlmh, { name: t.caller }),
        o = (0, T.Sj)(t, l.build),
        p = (0, T.xP)(l.purpose);
    return (0, n.jsxs)("div", {
        className: B.nf,
        children: [
            (0, n.jsxs)("div", {
                className: B.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: B.UU,
                        children: (0, n.jsx)(_.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: r,
                            targetProject: i,
                            flow: l.flow ?? null,
                        }),
                    }),
                    (0, n.jsx)(C.Y, {
                        targetElementRef: c,
                        position: "bottom",
                        align: "right",
                        animation: C.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(k.W, {
                                "data-menu-migrated": !0,
                                navId: `conjure-linked-app-${l.project_id}`,
                                "aria-label": d,
                                onClose: t,
                                onSelect: t,
                                children: (0, n.jsx)(P.rX, {
                                    children: (0, n.jsx)(P.Dr, {
                                        id: "remove",
                                        color: "danger",
                                        label: b.intl.string(j.default.bN1S9T),
                                        action: u,
                                    }),
                                }),
                            });
                        },
                        children: (e, l) => {
                            let { onClick: t } = e,
                                { isShown: a } = l;
                            return (0, n.jsx)("div", {
                                ref: c,
                                className: B.hZ,
                                children: (0, n.jsx)(A.m, {
                                    text: d,
                                    children: (0, n.jsx)(E.K, {
                                        icon: w.MoreHorizontalIcon,
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
            }),
            (0, n.jsxs)("div", {
                className: B.zH,
                children: [
                    null != p ? (0, n.jsx)(R.A, { purpose: p }) : null,
                    null != o
                        ? (0, n.jsxs)("div", {
                              className: B.W0,
                              children: [
                                  null != o.preview ? (0, n.jsx)(z, { setting: o.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(z, { setting: o.live, onBuildChange: s }),
                              ],
                          })
                        : null,
                    o?.note != null
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: o.note })
                        : null,
                ],
            }),
        ],
    });
}
function z(e) {
    let { setting: l, onBuildChange: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-default", className: B.px, children: l.label }),
            (0, n.jsx)("div", {
                className: B.Lt,
                children: (0, n.jsx)(I.l, {
                    label: l.label,
                    hideLabel: !0,
                    options: l.options.map((e) => ({
                        id: e.data,
                        value: e.data,
                        label: e.label,
                        description: e.description,
                        disabled: e.disabled,
                    })),
                    value: l.value,
                    selectionMode: "single",
                    fullWidth: !0,
                    disabled: l.locked,
                    onSelectionChange: (e) => {
                        e !== l.value && t(l.buildFor(e));
                    },
                }),
            }),
        ],
    });
}
function M(e) {
    let { target: l, sides: t, project: a, callerProject: r, onOpen: i } = e,
        s = (0, T.xP)(l.purpose),
        u = (0, T.ft)(t, l.build),
        c = null != a && (0, h.jf)(a);
    return (0, n.jsxs)("div", {
        className: B.nf,
        children: [
            (0, n.jsxs)("div", {
                className: B.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: B.UU,
                        children: (0, n.jsx)(_.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: r,
                            targetProject: a,
                            flow: l.flow ?? null,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(N.$, {
                              size: "sm",
                              variant: "secondary",
                              text: b.intl.formatToPlainString(j.default.DfBXSF, { target: t.target }),
                              onClick: i,
                          })
                        : null,
                ],
            }),
            (0, n.jsxs)("div", {
                className: B.zH,
                children: [
                    null != s ? (0, n.jsx)(R.A, { purpose: s }) : null,
                    null != u
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: u })
                        : null,
                ],
            }),
        ],
    });
}
var H = t(557744),
    D = t(223347),
    G = t(822313),
    U = t(359589),
    O = t(722701),
    Z = t(811587),
    V = t(826058),
    q = t(534514),
    J = t(44255),
    Q = t(303345),
    W = t(416473);
function K(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, m.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, g] = a.useState(null),
                [h, x] = a.useState(null),
                [v, y] = a.useState(0),
                S = a.useRef(!1),
                C = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = C.current,
                    a = ++n.value;
                return (
                    (0, W.fi)(e)
                        .then((e) => {
                            C.current.value === a && (i(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            C.current.value === a && (g(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), g(null), y((e) => e + 1));
                }, []),
                P = a.useCallback(async () => {
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++C.current.value;
                    (f(!0), g(null), x(null));
                    try {
                        let l = await (0, W.MN)(e);
                        if (C.current.value !== t) return;
                        (i(l), x(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        C.current.value === t && g(e instanceof Q.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), C.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: p, status: h, retry: k, remove: P };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(q.D, { id: u, variant: "heading-sm/semibold", children: b.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: b.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(j.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, J.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(N.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: b.intl.string(j.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, i.A)({
                                                    title: b.intl.string(j.default["Tw/KaB"]),
                                                    subtitle: b.intl.string(j.default.qr1iIe),
                                                    confirmText: b.intl.string(j.default.J7ZMMf),
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
                      : (0, n.jsx)(N.$, {
                            type: "button",
                            variant: "secondary",
                            text: b.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var X = t(290713),
    $ = t(616334),
    Y = t(143129),
    ee = t(890497),
    el = t(904363),
    et = t(540338),
    en = t(503698),
    ea = t.n(en),
    er = t(750943),
    ei = t(22231),
    es = t(95477),
    eu = t(103557),
    ec = t(946274),
    ed = t(951178),
    eo = t(535466),
    ef = t(154600);
function ep(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ef.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ea()(ef.Vs, { [ef.A6]: u }),
                "aria-label": b.intl.string(u ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(er.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ef.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ef.Jx,
                                  children: (0, n.jsx)(ei.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(ec.Ay, {
                ref: s,
                className: ef.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: eo.En }],
                maxFileSizeBytes: eo.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(b.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function eg(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function em(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: g = !1,
        } = e,
        [m, h] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                eg(e, n, a);
                let r = new ResizeObserver(() => eg(e, n, a));
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
                        className: ef.S7,
                        children: [
                            (0, n.jsx)(ep, { iconURL: r, disabled: g, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ef.yD,
                                children: (0, n.jsx)(es.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: 128,
                                    disabled: g,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != m
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: m,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(eu.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: 400,
                disabled: g,
            }),
        ],
    });
}
var eh = t(60498),
    ex = t(420036),
    ej = t(5377);
function eb(e) {
    let { projectId: l } = e,
        t = (0, eh.Ay)(l),
        a = (0, eh.cg)(l);
    if (null == t) return null;
    let r = t.updatesPaused;
    return (0, n.jsxs)(o.B, {
        gap: 4,
        children: [
            (0, n.jsx)(f.E, {
                variant: "body-md/medium",
                color: "text-default",
                children: b.intl.string(j.default["+QBNDE"]),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (function (e, l) {
                    let { sourceName: t } = e;
                    return null == t
                        ? b.intl.string(l ? j.default["5wuDGB"] : j.default.rxvuqx)
                        : b.intl.formatToPlainString(l ? j.default.HHthpS : j.default.qpGg7d, { name: t });
                })(t, r),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: r || a?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (e, l) {
                    if (l) return b.intl.string(j.default["uV/luq"]);
                    if (null == e || null == e.atMs) return b.intl.string(j.default.gHndTq);
                    let t = (0, ej.i$)(new Date(e.atMs), "LLL");
                    switch (e.status) {
                        case "updated":
                            return b.intl.formatToPlainString(j.default["6rQ8So"], { time: t });
                        case "failed":
                            return b.intl.formatToPlainString(j.default.HZnsMq, { time: t });
                        case "held":
                            return b.intl.string(j.default.AwPHix);
                        case "current":
                        case "paused":
                            return b.intl.formatToPlainString(j.default.yc0AaP, { time: t });
                    }
                })(a, r),
            }),
        ],
    });
}
t(938796);
var ev = t(862026),
    ey = t(709753),
    eS = t(961553),
    eC = t(944142),
    ek = t(788493),
    eP = t(532247),
    eA = t(233470),
    eE = t(426035),
    ew = t(246338),
    eI = t(277085),
    eN = t(453430);
let eT = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function e_(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: k,
            note: P,
            notifyAgent: A,
            isPreview: E,
            publishOptions: w,
            transitionState: I,
            onClose: N,
        } = e,
        T = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        _ = (0, r.bG)([H.A], () => H.A.getModelSettings(l), [l]),
        R = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(l), [l]),
        B = null != T && (0, h.PV)(T),
        F = null != T && (0, h.jf)(T),
        z = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, el.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: g,
                    name: m,
                    nameError: x,
                    nameChanged: v,
                    isPublic: y,
                    isGuildCollaboration: S,
                    usesPreviewApp: C,
                    canChangePreviewApp: k,
                    selectedRoleIds: P,
                    supportsVisibility: A,
                    supportsCollaboration: E,
                    supportsCollaboratorRoles: w,
                    checkingAppInGuild: I,
                    saving: N,
                    selectionError: T,
                    saveError: _,
                    experimentalError: R,
                    canSave: B,
                    handleIconChange: L,
                    handleNameChange: F,
                    handleDescriptionChange: z,
                    handleFlagChange: M,
                    handleUsesPreviewAppChange: H,
                    handleLiveReloadChange: D,
                    handleRoleSelectionChange: G,
                    handleSmartContextChange: U,
                    handleRequireHostApprovalChange: O,
                    submit: Z,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([eC.A], () => eC.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [i, s] = a.useState(null);
                            null != i && l !== i.before && s(null);
                            let u = null != i && l === i.before ? i.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let c = null != l && null != t && t !== u,
                                d = a.useCallback(
                                    () =>
                                        !c ||
                                        null == t ||
                                        (!!(0, ek.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [c, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, eP.oV)(l),
                                changed: c,
                                setChecked: n,
                                save: d,
                            };
                        })(e),
                        u = s.save,
                        c = (0, eS.A)(e),
                        { changes: d, commit: o } = c,
                        f = (0, ev.Q)(e),
                        p = f.save,
                        g = (0, ey._t)(e),
                        m = g.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [S, C] = a.useState(null),
                        [k, P] = a.useState(v),
                        [A, E] = a.useState(i?.flags ?? 0),
                        [w, I] = a.useState(() => [...x]),
                        N = i?.uses_preview_app,
                        [T, _] = a.useState(null);
                    null != T && T === N && _(null);
                    let [R, B] = a.useState(!1),
                        [L, F] = a.useState(null),
                        [z, M] = a.useState(null),
                        [H, D] = a.useState(null),
                        [G, U] = a.useState(null),
                        [O, Z] = a.useState(!1),
                        q = a.useRef(null),
                        J = a.useRef(!1),
                        Q = k.trim(),
                        W = null != i && (0, ed.IU)(i),
                        K = null != i && "guild" === i.install_scope,
                        X = K && null != l && (0, ed.RX)(i),
                        { isPublic: $, isGuildCollaboration: Y } = (0, ew.n5)(A),
                        ee = null != i && Q !== v,
                        el = W && A !== (S?.flags ?? i?.flags ?? 0),
                        et =
                            X &&
                            ((t = S?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        en = null != N,
                        ea = T ?? N ?? !1,
                        er = en && null != T,
                        ei = ee || el || et || er || c.changed,
                        es = ei || s.changed || f.changed || g.changed,
                        { setIcon: eu, setDescription: ec } = c,
                        eo = s.setChecked,
                        ef = f.setChecked,
                        ep = g.setChecked,
                        eg = a.useCallback(
                            (e) => {
                                (eu(e), D(null));
                            },
                            [eu],
                        ),
                        em = a.useCallback(
                            (e) => {
                                (ec(e), D(null));
                            },
                            [ec],
                        ),
                        eh = a.useCallback((e) => {
                            (P(e), F(null), D(null));
                        }, []),
                        ex = a.useCallback((e, l) => {
                            (E((t) => (l ? t | e : t & ~e)), M(null), D(null));
                        }, []),
                        ej = a.useCallback((e) => {
                            (_(e), D(null));
                        }, []),
                        eb = a.useCallback(
                            (e) => {
                                (eo(e), D(null));
                            },
                            [eo],
                        ),
                        eN = a.useCallback(async () => {
                            if (null == i || null == l || null == i.preview_application_id || q.current === l)
                                return !0;
                            if (J.current) return !1;
                            ((J.current = !0), Z(!0));
                            try {
                                let e = await (0, eE.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (q.current = l), !0);
                                await (0, V.vL)(i.id, l);
                                let t = (await (0, eE.cC)(i, l)) === !0;
                                return (t && (q.current = l), t);
                            } finally {
                                ((J.current = !1), Z(!1));
                            }
                        }, [l, i]),
                        eT = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void M(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (I(e), M(null), D(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eN()) && l();
                                } catch {}
                            },
                            [eN, w],
                        ),
                        e_ = a.useCallback(
                            (e) => {
                                (ef(e), U(null));
                            },
                            [ef],
                        ),
                        eR = a.useCallback(
                            (e) => {
                                (ep(e), U(null));
                            },
                            [ep],
                        ),
                        eB = a.useCallback(async () => {
                            if (null == i || !es || R) return null;
                            let t = ee ? (0, eI.p)(Q) : null;
                            if (null != t) return (F(t), "project");
                            let n = { ...d };
                            (ee && (n.name = Q),
                                el && (n.flags = A),
                                et && (n.collaborator_role_ids = [...w].sort()),
                                er && (n.uses_preview_app = ea),
                                null == i.guild_id && null != l && (et || (el && Y)) && (n.guild_id = l),
                                B(!0),
                                D(null),
                                U(null));
                            try {
                                if ((ei && (await (0, eA.CW)(e, n), y(Q), C({ flags: A, roleIds: [...w] }), o()), !u()))
                                    return (D(b.intl.string(j.default.XzkNBw)), "project");
                                if (!p() || !m()) return (U(b.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (D(b.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                B(!1);
                            }
                        }, [o, A, el, l, es, d, Y, ee, er, ea, i, e, ei, et, m, u, p, R, w, Q]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: g,
                        name: k,
                        nameError: L,
                        nameChanged: ee,
                        isPublic: $,
                        isGuildCollaboration: Y,
                        usesPreviewApp: ea,
                        canChangePreviewApp: en,
                        selectedRoleIds: w,
                        supportsVisibility: W,
                        supportsCollaboration: K,
                        supportsCollaboratorRoles: X,
                        checkingAppInGuild: O,
                        saving: R,
                        selectionError: z,
                        saveError: H,
                        experimentalError: G,
                        canSave: es && "" !== Q,
                        handleIconChange: eg,
                        handleNameChange: eh,
                        handleDescriptionChange: em,
                        handleFlagChange: ex,
                        handleUsesPreviewAppChange: ej,
                        handleLiveReloadChange: eb,
                        handleRoleSelectionChange: eT,
                        ensureAppInGuild: eN,
                        handleSmartContextChange: e_,
                        handleRequireHostApprovalChange: eR,
                        submit: eB,
                    };
                })(e, l),
                q = N || t,
                J = (0, eh.AJ)(e);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        J
                            ? (0, n.jsx)(eb, { projectId: e })
                            : (0, n.jsx)(em, {
                                  iconURL: u,
                                  onIconChange: L,
                                  name: m,
                                  nameError: x,
                                  onNameChange: F,
                                  description: c,
                                  onDescriptionChange: z,
                                  disabled: q,
                              }),
                        A && !J
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.ujIxRm),
                                  description: b.intl.string(j.default.gT8zk1),
                                  checked: y,
                                  disabled: q,
                                  onChange: (e) => M(ed.Zh.PUBLIC, e),
                              })
                            : null,
                        t ? null : (0, n.jsx)(ex.A, { projectId: e }),
                        A && E
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.lVvR4E),
                                  description: b.intl.string(j.default.SQZGoV),
                                  checked: S,
                                  disabled: q,
                                  onChange: (e) => M(ed.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        k
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.DV2hcV),
                                  description: b.intl.string(j.default.yjWIzb),
                                  checked: C,
                                  disabled: q,
                                  onChange: H,
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: q,
                                  onChange: D,
                              })
                            : null,
                        w
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(ee.Z, {
                                          selectionMode: "multiple",
                                          label: b.intl.string(j.default["pO3+p5"]),
                                          placeholder: b.intl.string(j.default.gvL7QS),
                                          value: P,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: q || !S || I,
                                          "aria-invalid": null != T,
                                          "aria-errormessage": null != T ? s : void 0,
                                          onSelectionChange: G,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: b.intl.formatToPlainString(j.default.g5I05P, {
                                              count: P.length,
                                              max: 25,
                                          }),
                                      }),
                                      S
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: b.intl.string(j.default.nZw5r9),
                                            }),
                                      null != T
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: T,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != _
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: _,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(Y.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: p.checked,
                            disabled: N,
                            onChange: U,
                        }),
                        (0, n.jsx)(Y.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: g.checked,
                            disabled: N,
                            onChange: O,
                        }),
                        (0, n.jsx)(et.u, { projectId: e }),
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
                saving: N,
                nameChanged: v,
                submit: Z,
            };
        })(l, T?.guild_id ?? t ?? void 0, { readOnly: !B }),
        M = (function (e, l) {
            let [t, n] = a.useState(e),
                [i, s] = a.useState(v),
                [u, c] = a.useState(y),
                [d, o] = a.useState(S),
                [f, p] = a.useState(!1),
                [g, m] = a.useState(!1);
            t !== e && (n(e), s(v), c(y), o(S), p(!1), m(!1));
            let C = a.useRef(e);
            a.useEffect(() => {
                C.current = e;
            }, [e]);
            let k = (0, r.yK)(
                [h.Ay],
                () =>
                    [
                        ...new Set(
                            [
                                ...h.Ay.getOwnedProjects(),
                                ...h.Ay.getSharedWithMeProjects(),
                                ...h.Ay.getRailProjects(),
                            ].map((e) => e.id),
                        ),
                    ]
                        .filter((l) => l !== e)
                        .sort(),
                [e],
            );
            (a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    !(async function () {
                        try {
                            let l = await (0, x.k_)(e);
                            if (!t) return;
                            (s(l.callers), o({ live: !0 === l.live, hasPreview: !1 !== l.has_preview }));
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]),
                a.useEffect(() => {
                    if (!l || 0 === k.length) return;
                    let t = !0;
                    return (
                        !(async function () {
                            try {
                                let l = await (0, x.n9)(e, k);
                                t && c(l.targets);
                            } catch {}
                        })(),
                        () => {
                            t = !1;
                        }
                    );
                }, [e, l, k]));
            let P = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                A = (0, r.cf)(
                    [h.Ay],
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [l, h.Ay.getProject(l)];
                            }),
                        ),
                    [i, u],
                ),
                E = a.useMemo(
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    A[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [i, A, u],
                ),
                w = a.useCallback(
                    async (l, t) => {
                        (p(!1), m(!1));
                        try {
                            await (0, x.Ol)(e, l, { build: t });
                        } catch {
                            C.current === e && p(!0);
                            return;
                        }
                        C.current === e &&
                            (m(!0), s((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e))));
                    },
                    [e],
                ),
                I = a.useCallback(
                    async (l) => {
                        (p(!1), m(!1));
                        try {
                            await (0, x.pc)(e, l);
                        } catch {
                            C.current === e && p(!0);
                            return;
                        }
                        C.current === e && (m(!0), s((e) => e.filter((e) => e.project_id !== l)));
                    },
                    [e],
                );
            return {
                name: P?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: e }),
                project: P ?? null,
                live: d.live,
                hasPreview: d.hasPreview,
                callers: i,
                targets: u,
                projects: A,
                names: E,
                failed: f,
                saved: g,
                setBuild: w,
                remove: I,
            };
        })(l, F),
        [D, G] = a.useState(null);
    return (0, n.jsx)(X.A, {
        projectId: l,
        scopeKeys: k,
        note: P,
        notifyAgent: A,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((B || F) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                _?.tierSettings != null && t.push("model"),
                (M.callers.length > 0 || M.targets.length > 0) && t.push("linked"),
                B && t.push("experimental"));
            let a = [D, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                m = !B && !r && !t.includes("app") && !t.includes("secrets"),
                x = (B && z.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && B && z.canSave }),
                y = b.intl.string(r ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && G("app");
                        return;
                    }
                    let s = !r && B && z.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !B ? null : z.submit });
                    if (u.saved) {
                        (await N(),
                            s &&
                                null != w &&
                                (function (e, l) {
                                    let t = h.Ay.getProject(e);
                                    if (null == t || !(0, V.qF)(t)) return;
                                    let n = O.A.getPublishStatus(e);
                                    null != n &&
                                        (0, Z.lE)(n.publishState) &&
                                        (0, i.A)({
                                            title: b.intl.string(j.default["48pvCR"]),
                                            subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                            confirmText: b.intl.string(j.default.guoHDk),
                                            cancelText: b.intl.string(j.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, V.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, w));
                        return;
                    }
                    "app" !== u.failedTab
                        ? G(u.failedTab)
                        : "secrets" !== a && G(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: N,
                    "aria-label": y,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: y }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => G(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: b.intl.string(eT[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eN.f,
                                          children: [z.fields, (0, n.jsx)(K, { projectId: l, canEdit: F }, l)],
                                      }),
                                r || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(L, {
                                          linkedApps: M,
                                          onOpenSettings: (e) => {
                                              (N(), (0, $.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                r || "experimental" !== a ? null : z.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || _?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eR, { projectId: l, modelSettings: _, tierSettings: _.tierSettings }),
                                r || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eN.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(g.H, {
                            actionsFullWidth: !0,
                            actions:
                                m || ("linked" === a && !v)
                                    ? [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: N }]
                                    : [
                                          {
                                              text: b.intl.string(b.t["ETE/oC"]),
                                              variant: "secondary",
                                              onClick: N,
                                              disabled: x,
                                          },
                                          {
                                              text: b.intl.string(r ? j.default.A7dQd9 : b.t["R3BPH+"]),
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
function eR(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, D.X)(l, e), [l]),
        [c, d] = (0, G.A)(i, u);
    return (0, n.jsx)(U.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
