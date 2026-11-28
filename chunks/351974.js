(t.d(l, { default: () => eD }), t(321073));
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
    g = t(289873),
    p = t(696208),
    h = t(540665),
    m = t(260498),
    x = t(360047),
    j = t(258576),
    b = t(792996);
let v = [],
    y = [],
    S = { live: !1, hasPreview: !0 };
var C = t(265872),
    k = t(165862),
    A = t(477782),
    P = t(866665),
    E = t(408278),
    w = t(365199),
    _ = t(691885),
    N = t(821609),
    I = t(762026),
    T = t(700915),
    B = t(985965),
    L = t(843313);
function R(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: r, projects: s, names: u, failed: c, saved: d, setBuild: g, remove: p } = l;
    return (0, n.jsx)("div", {
        className: L.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: L.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: b.intl.formatToPlainString(j.default.uLPdNT, { name: l.name }),
                                  }),
                              }),
                              a.map((e) =>
                                  (0, n.jsx)(
                                      z,
                                      {
                                          caller: e,
                                          sides: (0, I.cL)(l, e),
                                          project: s[e.project_id],
                                          targetProject: l.project,
                                          onBuildChange: (l) => g(e.project_id, l),
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
                                                      onConfirm: () => p(l),
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
                                  className: L.Gf,
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
                                          sides: (0, I.cs)(l, e),
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
function z(e) {
    let { caller: l, sides: t, project: r, targetProject: i, onBuildChange: s, onRemove: u } = e,
        c = a.useRef(null),
        d = b.intl.formatToPlainString(j.default.bzMlmh, { name: t.caller }),
        o = (0, I.Sj)(t, l.build),
        g = (0, I.xP)(l.purpose);
    return (0, n.jsxs)("div", {
        className: L.nf,
        children: [
            (0, n.jsxs)("div", {
                className: L.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: L.UU,
                        children: (0, n.jsx)(T.A, {
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
                                children: (0, n.jsx)(A.rX, {
                                    children: (0, n.jsx)(A.Dr, {
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
                                className: L.hZ,
                                children: (0, n.jsx)(P.m, {
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
                className: L.zH,
                children: [
                    null != g ? (0, n.jsx)(B.A, { purpose: g }) : null,
                    null != o
                        ? (0, n.jsxs)("div", {
                              className: L.W0,
                              children: [
                                  null != o.preview ? (0, n.jsx)(F, { setting: o.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(F, { setting: o.live, onBuildChange: s }),
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
function F(e) {
    let { setting: l, onBuildChange: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-default", className: L.px, children: l.label }),
            (0, n.jsx)("div", {
                className: L.Lt,
                children: (0, n.jsx)(_.l, {
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
        s = (0, I.xP)(l.purpose),
        u = (0, I.ft)(t, l.build),
        c = null != a && (0, m.jf)(a);
    return (0, n.jsxs)("div", {
        className: L.nf,
        children: [
            (0, n.jsxs)("div", {
                className: L.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: L.UU,
                        children: (0, n.jsx)(T.A, {
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
                className: L.zH,
                children: [
                    null != s ? (0, n.jsx)(B.A, { purpose: s }) : null,
                    null != u
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: u })
                        : null,
                ],
            }),
        ],
    });
}
var U = t(557744),
    G = t(223347),
    D = t(822313),
    O = t(359589),
    H = t(722701),
    V = t(811587),
    W = t(738604),
    Z = t(585412),
    J = t(534514),
    K = t(44255),
    X = t(303345),
    Q = t(416473);
function q(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, h.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [g, p] = a.useState(null),
                [m, x] = a.useState(null),
                [v, y] = a.useState(0),
                S = a.useRef(!1),
                C = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = C.current,
                    a = ++n.value;
                return (
                    (0, Q.fi)(e)
                        .then((e) => {
                            C.current.value === a && (i(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            C.current.value === a && (p(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), p(null), y((e) => e + 1));
                }, []),
                A = a.useCallback(async () => {
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++C.current.value;
                    (f(!0), p(null), x(null));
                    try {
                        let l = await (0, Q.MN)(e);
                        if (C.current.value !== t) return;
                        (i(l), x(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        C.current.value === t && p(e instanceof X.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), C.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: g, status: m, retry: k, remove: A };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(J.D, { id: u, variant: "heading-sm/semibold", children: b.intl.string(j.default.ptzKKH) }),
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
                                        (0, K.Dt)(s.saved).map((e, l) =>
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
var Y = t(44252),
    $ = t(290713),
    ee = t(616334),
    el = t(143129),
    et = t(890497),
    en = t(904363),
    ea = t(540338),
    er = t(503698),
    ei = t.n(er),
    es = t(750943),
    eu = t(22231),
    ec = t(95477),
    ed = t(103557),
    eo = t(946274),
    ef = t(951178),
    eg = t(535466),
    ep = t(154600);
function eh(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ep.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ei()(ep.Vs, { [ep.A6]: u }),
                "aria-label": b.intl.string(u ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(es.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ep.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ep.Jx,
                                  children: (0, n.jsx)(eu.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(eo.Ay, {
                ref: s,
                className: ep.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: eg.En }],
                maxFileSizeBytes: eg.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(b.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function em(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function ex(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: g,
            disabled: p = !1,
        } = e,
        [h, m] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                em(e, n, a);
                let r = new ResizeObserver(() => em(e, n, a));
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
                        className: ep.S7,
                        children: [
                            (0, n.jsx)(eh, { iconURL: r, disabled: p, onChange: i, onError: m }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ep.yD,
                                children: (0, n.jsx)(ec.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: 128,
                                    disabled: p,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != h
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: h,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(ed.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: g,
                maxLength: 400,
                disabled: p,
            }),
        ],
    });
}
var ej = t(838117),
    eb = t(821759);
function ev(e) {
    let { projectId: l } = e,
        t = (0, ej.GB)(l),
        [r, i] = a.useState(!1),
        s = a.useCallback((e) => i(!(0, eb.t)(l, e)), [l]);
    return null == t
        ? null
        : (0, n.jsxs)(o.B, {
              gap: 8,
              children: [
                  (0, n.jsx)(el.d, {
                      label: b.intl.string(j.default["Nf+zrD"]),
                      description: b.intl.string(j.default.heoCNf),
                      checked: t.enabled,
                      disabled: t.pending,
                      onChange: s,
                  }),
                  r || null != t.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: b.intl.string(j.default["UU+oef"]),
                        })
                      : null,
              ],
          });
}
var ey = t(407431),
    eS = t(71393),
    eC = t(256616),
    ek = t(313537);
function eA(e) {
    let { projectId: l } = e,
        t = (0, r.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        a = (0, ek.fL)(t),
        i = (0, r.bG)([eS.A], () => eS.A.getGuild(a)?.name, [a]);
    if (null == t || !(0, m.PV)(t) || "guild" !== t.install_scope) return null;
    let s = b.intl.string(j.default.n431L5);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        gap: 16,
        role: "group",
        "aria-label": s,
        children: [
            (0, n.jsxs)(o.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", color: "text-strong", children: s }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: b.intl.formatToPlainString(j.default["KWBh/Q"], {
                            server: i ?? b.intl.string(j.default["6bhivN"]),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(N.$, {
                variant: "critical-secondary",
                size: "sm",
                text: b.intl.string(j.default.mS61Dm),
                onClick: () => (0, eC.A)({ project: t }),
            }),
        ],
    });
}
t(938796);
var eP = t(862026),
    eE = t(709753),
    ew = t(961553),
    e_ = t(944142),
    eN = t(788493),
    eI = t(532247),
    eT = t(233470),
    eB = t(426035),
    eL = t(685033),
    eR = t(641655),
    ez = t(246338),
    eF = t(277085);
let eM = "anyone_with_manage_server";
var eU = t(453430);
let eG = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function eD(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: k,
            note: A,
            notifyAgent: P,
            isPreview: E,
            onSaved: w,
            publishOptions: N,
            transitionState: I,
            onClose: T,
        } = e,
        B = (0, r.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        L = (0, r.bG)([U.A], () => U.A.getModelSettings(l), [l]),
        z = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        F = null != B && (0, m.PV)(B),
        M = null != B && (0, m.jf)(B),
        G = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, en.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: g,
                    hostApproval: p,
                    name: h,
                    nameError: x,
                    nameChanged: v,
                    sharingMode: y,
                    sharingOptions: S,
                    canChangeSharing: C,
                    isGuildCollaboration: k,
                    usesPreviewApp: A,
                    canChangePreviewApp: P,
                    selectedRoleIds: E,
                    showsManageServerDefault: w,
                    supportsVisibility: N,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: T,
                    checkingAppInGuild: B,
                    saving: L,
                    selectionError: R,
                    saveError: z,
                    experimentalError: F,
                    canSave: M,
                    handleIconChange: U,
                    handleNameChange: G,
                    handleDescriptionChange: D,
                    handleFlagChange: O,
                    handleSharingModeChange: H,
                    handleUsesPreviewAppChange: V,
                    handleLiveReloadChange: Z,
                    handleRoleSelectionChange: J,
                    handleSmartContextChange: K,
                    handleRequireHostApprovalChange: X,
                    submit: Q,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([e_.A], () => e_.A.getLiveReload(e), [e]),
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
                                        (!!(0, eN.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [c, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, eI.oV)(l),
                                changed: c,
                                setChecked: n,
                                save: d,
                            };
                        })(e),
                        u = s.save,
                        c = (0, ew.A)(e),
                        { changes: d, commit: o } = c,
                        f = (0, eP.Q)(e),
                        g = f.save,
                        p = (0, eE._t)(e),
                        h = p.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [S, C] = a.useState(null),
                        [k, A] = a.useState(v),
                        [P, E] = a.useState(i?.flags ?? 0),
                        [w, _] = a.useState(() => [...x]),
                        N = (0, eL.A)(e),
                        I = a.useMemo(() => (0, eR.R)(), []),
                        [T, B] = a.useState(null),
                        L = i?.install_scope === "guild" ? (i.guild_id ?? null) : null,
                        [R, z] = a.useState(L);
                    L !== R && (z(L), E(i?.flags ?? 0), _([...x]), B(null), C(null));
                    let F = i?.uses_preview_app,
                        [M, U] = a.useState(null);
                    null != M && M === F && U(null);
                    let [G, D] = a.useState(!1),
                        [O, H] = a.useState(null),
                        [V, Z] = a.useState(null),
                        [J, K] = a.useState(null),
                        [X, Q] = a.useState(null),
                        [q, Y] = a.useState(!1),
                        $ = a.useRef(null),
                        ee = a.useRef(!1),
                        el = k.trim(),
                        et = null != i && (0, ef.IU)(i),
                        en = null != i && "guild" === i.install_scope,
                        ea = en && null != l && (0, ef.RX)(i),
                        { isPublic: er, isGuildCollaboration: ei } = (0, ez.n5)(P),
                        es = T ?? N.shareLinksEnabled,
                        eu = et && null != T && T !== N.shareLinksEnabled,
                        ec = null != i && el !== v,
                        ed = et && P !== (S?.flags ?? i?.flags ?? 0),
                        eo =
                            ea &&
                            ((t = S?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        eg = null != F,
                        ep = M ?? F ?? !1,
                        eh = eg && null != M,
                        em = ec || ed || eu || eo || eh || c.changed,
                        ex = em || s.changed || f.changed || p.changed,
                        { setIcon: ej, setDescription: eb } = c,
                        ev = s.setChecked,
                        ey = f.setChecked,
                        eS = p.setChecked,
                        eC = a.useCallback(
                            (e) => {
                                (ej(e), K(null));
                            },
                            [ej],
                        ),
                        ek = a.useCallback(
                            (e) => {
                                (eb(e), K(null));
                            },
                            [eb],
                        ),
                        eA = a.useCallback((e) => {
                            (A(e), H(null), K(null));
                        }, []),
                        eM = a.useCallback((e, l) => {
                            (E((t) => (l ? t | e : t & ~e)), Z(null), K(null));
                        }, []),
                        eU = a.useCallback((e) => {
                            (E((l) => ("public" === e ? l | ef.Zh.PUBLIC : l & ~ef.Zh.PUBLIC)),
                                B("public" === e ? null : "link" === e),
                                K(null));
                        }, []),
                        eG = a.useCallback((e) => {
                            (U(e), K(null));
                        }, []),
                        eD = a.useCallback(
                            (e) => {
                                (ev(e), K(null));
                            },
                            [ev],
                        ),
                        eO = a.useCallback(async () => {
                            if (null == i || null == l || null == i.preview_application_id || $.current === l)
                                return !0;
                            if (ee.current) return !1;
                            ((ee.current = !0), Y(!0));
                            try {
                                let e = await (0, eB.cC)(i, l);
                                if (!1 !== e) return (!0 === e && ($.current = l), !0);
                                await (0, W.vL)(i.id, l);
                                let t = (await (0, eB.cC)(i, l)) === !0;
                                return (t && ($.current = l), t);
                            } finally {
                                ((ee.current = !1), Y(!1));
                            }
                        }, [l, i]),
                        eH = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void Z(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (_(e), Z(null), K(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eO()) && l();
                                } catch {}
                            },
                            [eO, w],
                        ),
                        eV = a.useCallback(
                            (e) => {
                                (ey(e), Q(null));
                            },
                            [ey],
                        ),
                        eW = a.useCallback(
                            (e) => {
                                (eS(e), Q(null));
                            },
                            [eS],
                        ),
                        eZ = a.useCallback(async () => {
                            if (null == i || !ex || G) return null;
                            let t = ec ? (0, eF.p)(el) : null;
                            if (null != t) return (H(t), "project");
                            let n = { ...d };
                            (ec && (n.name = el),
                                ed && (n.flags = P),
                                eu && (n.share_links_enabled = T),
                                eo && (n.collaborator_role_ids = [...w].sort()),
                                eh && (n.uses_preview_app = ep),
                                null == i.guild_id && null != l && (eo || (ed && ei)) && (n.guild_id = l),
                                D(!0),
                                K(null),
                                Q(null));
                            try {
                                if (
                                    (em &&
                                        (await (0, eT.CW)(e, n),
                                        y(el),
                                        C({ flags: P, roleIds: [...w] }),
                                        null != T && N.setShareLinksEnabled(T),
                                        B(null),
                                        o()),
                                    !u())
                                )
                                    return (K(b.intl.string(j.default.XzkNBw)), "project");
                                if (!g() || !h()) return (Q(b.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (K(b.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                D(!1);
                            }
                        }, [o, P, ed, l, ex, d, ei, ec, eh, ep, i, e, em, eo, h, u, g, G, w, N, eu, T, el]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: p,
                        name: k,
                        nameError: O,
                        nameChanged: ec,
                        sharingMode: er ? "public" : null == es ? null : es ? "link" : "collaborators",
                        sharingOptions: I,
                        canChangeSharing: et && (null != N.shareLinksEnabled || N.loadFailed),
                        isGuildCollaboration: ei,
                        usesPreviewApp: ep,
                        canChangePreviewApp: eg,
                        selectedRoleIds: w,
                        showsManageServerDefault: ei && 0 === w.length,
                        supportsVisibility: et,
                        supportsCollaboration: en,
                        supportsCollaboratorRoles: ea,
                        checkingAppInGuild: q,
                        saving: G,
                        selectionError: V,
                        saveError: J,
                        experimentalError: X,
                        canSave: ex && "" !== el,
                        handleIconChange: eC,
                        handleNameChange: eA,
                        handleDescriptionChange: ek,
                        handleFlagChange: eM,
                        handleSharingModeChange: eU,
                        handleUsesPreviewAppChange: eG,
                        handleLiveReloadChange: eD,
                        handleRoleSelectionChange: eH,
                        ensureAppInGuild: eO,
                        handleSmartContextChange: eV,
                        handleRequireHostApprovalChange: eW,
                        submit: eZ,
                    };
                })(e, l),
                q = L || t,
                Y = (0, ej.AJ)(e),
                $ = a.useMemo(
                    () => (w ? [{ id: eM, label: b.intl.string(j.default.Ukbq9W), value: eM, disabled: !0 }, ...i] : i),
                    [i, w],
                ),
                ee = a.useCallback(
                    (e) => {
                        let l = e.filter((e) => e !== eM);
                        (w && 0 === l.length) || J(l);
                    },
                    [J, w],
                ),
                er = a.useMemo(
                    () =>
                        S.map((e) => {
                            let { value: l, label: t } = e;
                            return { id: l, value: l, label: t };
                        }),
                    [S],
                );
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
                        Y ? (0, n.jsx)(ey.A, { projectId: e }) : null,
                        (0, n.jsx)(ex, {
                            iconURL: u,
                            onIconChange: U,
                            name: h,
                            nameError: x,
                            onNameChange: G,
                            description: c,
                            onDescriptionChange: D,
                            disabled: q,
                        }),
                        N && !Y
                            ? (0, n.jsx)(_.l, {
                                  selectionMode: "single",
                                  label: b.intl.string(j.default.jDBYrs),
                                  options: er,
                                  value: y ?? void 0,
                                  disabled: q || !C,
                                  onSelectionChange: H,
                                  layout: "horizontal-responsive",
                                  fullWidth: !0,
                                  fitContent: !0,
                              })
                            : null,
                        t ? null : (0, n.jsx)(ev, { projectId: e }),
                        N && I
                            ? (0, n.jsxs)(o.B, {
                                  gap: 12,
                                  children: [
                                      (0, n.jsx)(el.d, {
                                          label: b.intl.string(j.default.lVvR4E),
                                          description: b.intl.string(j.default.SQZGoV),
                                          checked: k,
                                          disabled: q,
                                          onChange: (e) => O(ef.Zh.GUILD_COLLABORATION, e),
                                      }),
                                      T && k
                                          ? (0, n.jsxs)(o.B, {
                                                gap: 8,
                                                children: [
                                                    (0, n.jsx)(et.Z, {
                                                        selectionMode: "multiple",
                                                        label: b.intl.string(j.default["pO3+p5"]),
                                                        placeholder: b.intl.string(j.default.gvL7QS),
                                                        helperText: b.intl.string(j.default.AXPSq7),
                                                        value: w ? [eM] : E,
                                                        options: $,
                                                        maxOptionsVisible: 6,
                                                        wrapTags: !0,
                                                        disabled: q || B,
                                                        "aria-invalid": null != R,
                                                        "aria-errormessage": null != R ? s : void 0,
                                                        onSelectionChange: ee,
                                                    }),
                                                    E.length > 0
                                                        ? (0, n.jsx)(f.E, {
                                                              variant: "body-xs/normal",
                                                              color: "text-muted",
                                                              children: b.intl.formatToPlainString(j.default.g5I05P, {
                                                                  count: E.length,
                                                                  max: 25,
                                                              }),
                                                          })
                                                        : null,
                                                    null != R
                                                        ? (0, n.jsx)(f.E, {
                                                              id: s,
                                                              variant: "body-xs/normal",
                                                              color: "text-feedback-critical",
                                                              role: "alert",
                                                              children: R,
                                                          })
                                                        : null,
                                                ],
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        P
                            ? (0, n.jsx)(el.d, {
                                  label: b.intl.string(j.default.DV2hcV),
                                  description: b.intl.string(j.default.yjWIzb),
                                  checked: A,
                                  disabled: q,
                                  onChange: V,
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(el.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: q,
                                  onChange: Z,
                              })
                            : null,
                        t ? null : (0, n.jsx)(eA, { projectId: e }),
                        null != z
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: z,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(el.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: g.checked,
                            disabled: L,
                            onChange: K,
                        }),
                        (0, n.jsx)(el.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: p.checked,
                            disabled: L,
                            onChange: X,
                        }),
                        (0, n.jsx)(ea.u, { projectId: e }),
                        null != F
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: F,
                              })
                            : null,
                    ],
                }),
                canSave: M,
                saving: L,
                nameChanged: v,
                submit: Q,
            };
        })(l, B?.guild_id ?? t ?? void 0, { readOnly: !F }),
        D = (function (e, l) {
            let [t, n] = a.useState(e),
                [i, s] = a.useState(v),
                [u, c] = a.useState(y),
                [d, o] = a.useState(S),
                [f, g] = a.useState(!1),
                [p, h] = a.useState(!1);
            t !== e && (n(e), s(v), c(y), o(S), g(!1), h(!1));
            let C = a.useRef(e);
            a.useEffect(() => {
                C.current = e;
            }, [e]);
            let k = (0, r.yK)(
                [m.Ay],
                () =>
                    [
                        ...new Set(
                            [
                                ...m.Ay.getOwnedProjects(),
                                ...m.Ay.getSharedWithMeProjects(),
                                ...m.Ay.getRailProjects(),
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
            let A = (0, r.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                P = (0, r.cf)(
                    [m.Ay],
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [l, m.Ay.getProject(l)];
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
                                    P[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [i, P, u],
                ),
                w = a.useCallback(
                    async (l, t) => {
                        (g(!1), h(!1));
                        try {
                            await (0, x.Ol)(e, l, { build: t });
                        } catch {
                            C.current === e && g(!0);
                            return;
                        }
                        C.current === e &&
                            (h(!0), s((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e))));
                    },
                    [e],
                ),
                _ = a.useCallback(
                    async (l) => {
                        (g(!1), h(!1));
                        try {
                            await (0, x.pc)(e, l);
                        } catch {
                            C.current === e && g(!0);
                            return;
                        }
                        C.current === e && (h(!0), s((e) => e.filter((e) => e.project_id !== l)));
                    },
                    [e],
                );
            return {
                name: A?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: e }),
                project: A ?? null,
                live: d.live,
                hasPreview: d.hasPreview,
                callers: i,
                targets: u,
                projects: P,
                names: E,
                failed: f,
                saved: p,
                setBuild: w,
                remove: _,
            };
        })(l, M),
        [O, J] = a.useState(null);
    return (0, n.jsx)($.A, {
        projectId: l,
        scopeKeys: k,
        note: A,
        notifyAgent: P,
        isPreview: E,
        onSaved: w,
        children: (e) => {
            let t = [];
            ((F || M) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                L?.tierSettings != null && t.push("model"),
                (D.callers.length > 0 || D.targets.length > 0) && t.push("linked"),
                F && t.push("experimental"));
            let a = [O, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                h = !F && !r && !t.includes("app") && !t.includes("secrets"),
                x = (F && G.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && G.canSave }),
                y = r ? (0, Y.OF)(B?.name) : b.intl.string(j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && J("app");
                        return;
                    }
                    let s = !r && F && G.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !F ? null : G.submit });
                    if (u.saved) {
                        (await T(),
                            s &&
                                null != N &&
                                (function (e, l) {
                                    let t = m.Ay.getProject(e);
                                    if (null == t || !(0, W.qF)(t)) return;
                                    let n = H.A.getPublishStatus(e);
                                    null != n &&
                                        (0, V.l)(n.publishState) &&
                                        (0, i.A)({
                                            title: b.intl.string(j.default["48pvCR"]),
                                            subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                            confirmText: b.intl.string(j.default.guoHDk),
                                            cancelText: b.intl.string(j.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, Z.K)(e, "name_prompt", l);
                                            },
                                        });
                                })(l, N));
                        return;
                    }
                    "app" !== u.failedTab
                        ? J(u.failedTab)
                        : "secrets" !== a && J(t.includes("app") ? "app" : "secrets");
                },
                noValidate: r,
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: T,
                    "aria-label": y,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, {
                            title: y,
                            subtitle:
                                null == e.progress ? void 0 : b.intl.formatToPlainString(j.default.hoevP8, e.progress),
                        }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => J(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: b.intl.string(eG[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eU.f,
                                          children: [G.fields, (0, n.jsx)(q, { projectId: l, canEdit: M }, l)],
                                      }),
                                r || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(R, {
                                          linkedApps: D,
                                          onOpenSettings: (e) => {
                                              (T(), (0, ee.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                r || "experimental" !== a ? null : G.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || L?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eO, { projectId: l, modelSettings: L, tierSettings: L.tierSettings }),
                                r || null != a
                                    ? null
                                    : z
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eU.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !r,
                            leading: r
                                ? (0, n.jsx)(f.E, {
                                      variant: "body-sm/normal",
                                      color: e.statusIsError ? "text-feedback-critical" : "text-muted",
                                      role: "status",
                                      lineClamp: 2,
                                      children: e.status,
                                  })
                                : void 0,
                            actions:
                                h || ("linked" === a && !v)
                                    ? [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: T }]
                                    : [
                                          {
                                              text: b.intl.string(b.t["ETE/oC"]),
                                              variant: "secondary",
                                              onClick: T,
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
function eO(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, G.X)(l, e), [l]),
        [c, d] = (0, D.A)(i, u);
    return (0, n.jsx)(O.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
