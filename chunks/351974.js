(t.d(l, { default: () => eV }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(855986),
    r = t(314116),
    s = t(224640),
    u = t(20742),
    d = t(430993),
    o = t(761508),
    c = t(331322),
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
    C = { live: !1, hasPreview: !0 };
var S = t(265872),
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
function z(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: i, projects: s, names: u, failed: d, saved: o, setBuild: g, remove: p } = l;
    return (0, n.jsx)("div", {
        className: L.Mf,
        children: (0, n.jsxs)(c.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(c.B, {
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
                                      R,
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
                                                  void (0, r.A)({
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
                i.length > 0
                    ? (0, n.jsxs)(c.B, {
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
                              i.map((e) =>
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
                    children: d
                        ? (0, n.jsx)(f.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: b.intl.string(j.default.dIEOrl),
                          })
                        : o
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
function R(e) {
    let { caller: l, sides: t, project: i, targetProject: r, onBuildChange: s, onRemove: u } = e,
        d = a.useRef(null),
        o = b.intl.formatToPlainString(j.default.bzMlmh, { name: t.caller }),
        c = (0, I.Sj)(t, l.build),
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
                            callerProject: i,
                            targetProject: r,
                            flow: l.flow ?? null,
                        }),
                    }),
                    (0, n.jsx)(S.Y, {
                        targetElementRef: d,
                        position: "bottom",
                        align: "right",
                        animation: S.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(k.W, {
                                "data-menu-migrated": !0,
                                navId: `conjure-linked-app-${l.project_id}`,
                                "aria-label": o,
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
                                ref: d,
                                className: L.hZ,
                                children: (0, n.jsx)(P.m, {
                                    text: o,
                                    children: (0, n.jsx)(E.K, {
                                        icon: w.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": o,
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
                    null != c
                        ? (0, n.jsxs)("div", {
                              className: L.W0,
                              children: [
                                  null != c.preview ? (0, n.jsx)(F, { setting: c.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(F, { setting: c.live, onBuildChange: s }),
                              ],
                          })
                        : null,
                    c?.note != null
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: c.note })
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
    let { target: l, sides: t, project: a, callerProject: i, onOpen: r } = e,
        s = (0, I.xP)(l.purpose),
        u = (0, I.ft)(t, l.build),
        d = null != a && (0, m.jf)(a);
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
                            callerProject: i,
                            targetProject: a,
                            flow: l.flow ?? null,
                        }),
                    }),
                    d
                        ? (0, n.jsx)(N.$, {
                              size: "sm",
                              variant: "secondary",
                              text: b.intl.formatToPlainString(j.default.DfBXSF, { target: t.target }),
                              onClick: r,
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
    D = t(223347),
    G = t(822313),
    H = t(359589),
    O = t(722701),
    V = t(811587),
    W = t(738604),
    J = t(50181),
    Z = t(534514),
    K = t(44255),
    Q = t(303345),
    X = t(416473);
function $(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, h.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, o] = a.useState(!1),
                [c, f] = a.useState(!1),
                [g, p] = a.useState(null),
                [m, x] = a.useState(null),
                [v, y] = a.useState(0),
                C = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, X.fi)(e)
                        .then((e) => {
                            S.current.value === a && (r(e), o(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (p(b.intl.string(j.default.n25haz)), u(!1));
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
                    if (!l || !d || C.current) return;
                    C.current = !0;
                    let t = ++S.current.value;
                    (f(!0), p(null), x(null));
                    try {
                        let l = await (0, X.MN)(e);
                        if (S.current.value !== t) return;
                        (r(l), x(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && p(e instanceof Q.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((C.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: c, error: g, status: m, retry: k, remove: A };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(c.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(Z.D, { id: u, variant: "heading-sm/semibold", children: b.intl.string(j.default.ptzKKH) }),
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
                                (0, n.jsxs)(c.B, {
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
                                                (0, r.A)({
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
var q = t(44252),
    Y = t(290713),
    ee = t(616334),
    el = t(143129),
    et = t(890497),
    en = t(904363),
    ea = t(540338),
    ei = t(503698),
    er = t.n(ei),
    es = t(750943),
    eu = t(22231),
    ed = t(95477),
    eo = t(103557),
    ec = t(946274),
    ef = t(951178),
    eg = t(535466),
    ep = t(154600);
function eh(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ep.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: er()(ep.Vs, { [ep.A6]: u }),
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
            (0, n.jsx)(ec.Ay, {
                ref: s,
                className: ep.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: eg.En }],
                maxFileSizeBytes: eg.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(b.intl.string(j.default.ZTAAMc)),
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
            iconURL: i,
            onIconChange: r,
            name: s,
            nameError: u,
            onNameChange: d,
            description: o,
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
                let i = new ResizeObserver(() => em(e, n, a));
                return (i.observe(n), i.observe(a), () => i.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: ep.S7,
                        children: [
                            (0, n.jsx)(eh, { iconURL: i, disabled: p, onChange: r, onError: m }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ep.yD,
                                children: (0, n.jsx)(ed.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: d,
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
            (0, n.jsx)(eo.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: o,
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
        [i, r] = a.useState(!1),
        s = a.useCallback((e) => r(!(0, eb.t)(l, e)), [l]);
    return null == t
        ? null
        : (0, n.jsxs)(c.B, {
              gap: 8,
              children: [
                  (0, n.jsx)(el.d, {
                      label: b.intl.string(j.default["Nf+zrD"]),
                      description: b.intl.string(j.default.heoCNf),
                      checked: t.enabled,
                      disabled: t.pending,
                      onChange: s,
                  }),
                  i || null != t.error
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
    eC = t(71393),
    eS = t(256616),
    ek = t(313537),
    eA = t(125372),
    eP = t(831913),
    eE = t(618785);
function ew(e) {
    let { projectId: l } = e,
        t = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        a = (0, ek.fL)(t),
        r = (0, i.bG)([eC.A], () => eC.A.getGuild(a)?.name, [a]),
        s = (0, eA.Y)(l).length > 0;
    if (null == t || !(0, m.PV)(t)) return null;
    let u = "guild" === t.install_scope,
        d = b.intl.string(j.default.n431L5),
        o = () => (0, eE.A)({ projectId: l });
    return (0, n.jsxs)(c.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        gap: 16,
        role: "group",
        "aria-label": d,
        children: [
            (0, n.jsxs)(c.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", color: "text-strong", children: d }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: u
                            ? b.intl.formatToPlainString(j.default["KWBh/Q"], {
                                  server: r ?? b.intl.string(j.default["6bhivN"]),
                              })
                            : b.intl.string(j.default["JQ/7HT"]),
                    }),
                    s
                        ? null
                        : (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: b.intl.string(j.default.NXvmoQ),
                          }),
                ],
            }),
            u
                ? (0, n.jsxs)(c.B, {
                      direction: "horizontal",
                      gap: 8,
                      justify: "end",
                      children: [
                          (0, n.jsx)(N.$, {
                              variant: "secondary",
                              size: "sm",
                              text: b.intl.string(j.default["1E5/ay"]),
                              disabled: !s,
                              onClick: o,
                          }),
                          (0, n.jsx)(N.$, {
                              variant: "secondary",
                              size: "sm",
                              text: b.intl.string(j.default.ErhKil),
                              onClick: () => (0, eP.A)({ project: t }),
                          }),
                          (0, n.jsx)(N.$, {
                              variant: "critical-secondary",
                              size: "sm",
                              text: b.intl.string(j.default.mS61Dm),
                              onClick: () => (0, eS.A)({ project: t }),
                          }),
                      ],
                  })
                : (0, n.jsx)(N.$, {
                      variant: "secondary",
                      size: "sm",
                      text: b.intl.string(j.default["7SD3ul"]),
                      disabled: !s,
                      onClick: o,
                  }),
        ],
    });
}
t(938796);
var e_ = t(862026),
    eN = t(709753),
    eI = t(961553),
    eT = t(944142),
    eB = t(788493),
    eL = t(532247),
    ez = t(233470),
    eR = t(426035),
    eF = t(685033),
    eM = t(641655),
    eU = t(246338),
    eD = t(277085);
let eG = "anyone_with_manage_server";
var eH = t(453430);
let eO = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function eV(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: S,
            scopeKeys: k,
            note: A,
            notifyAgent: P,
            isPreview: E,
            onSaved: w,
            publishOptions: N,
            transitionState: I,
            onClose: T,
        } = e,
        B = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        L = (0, i.bG)([U.A], () => U.A.getModelSettings(l), [l]),
        R = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        F = null != B && (0, m.PV)(B),
        M = null != B && (0, m.jf)(B),
        D = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, en.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: d,
                    liveReload: o,
                    smartContext: g,
                    hostApproval: p,
                    name: h,
                    nameError: x,
                    nameChanged: v,
                    sharingMode: y,
                    sharingOptions: C,
                    canChangeSharing: S,
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
                    selectionError: z,
                    saveError: R,
                    experimentalError: F,
                    canSave: M,
                    handleIconChange: U,
                    handleNameChange: D,
                    handleDescriptionChange: G,
                    handleFlagChange: H,
                    handleSharingModeChange: O,
                    handleUsesPreviewAppChange: V,
                    handleLiveReloadChange: J,
                    handleRoleSelectionChange: Z,
                    handleSmartContextChange: K,
                    handleRequireHostApprovalChange: Q,
                    submit: X,
                } = (function (e, l) {
                    var t;
                    let n,
                        r = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, i.bG)([eT.A], () => eT.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [r, s] = a.useState(null);
                            null != r && l !== r.before && s(null);
                            let u = null != r && l === r.before ? r.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let d = null != l && null != t && t !== u,
                                o = a.useCallback(
                                    () =>
                                        !d ||
                                        null == t ||
                                        (!!(0, eB.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [d, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, eL.oV)(l),
                                changed: d,
                                setChecked: n,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        d = (0, eI.A)(e),
                        { changes: o, commit: c } = d,
                        f = (0, e_.Q)(e),
                        g = f.save,
                        p = (0, eN._t)(e),
                        h = p.save,
                        x = r?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(r?.name ?? ""),
                        [C, S] = a.useState(null),
                        [k, A] = a.useState(v),
                        [P, E] = a.useState(r?.flags ?? 0),
                        [w, _] = a.useState(() => [...x]),
                        N = (0, eF.A)(e),
                        I = a.useMemo(() => (0, eM.R)(), []),
                        [T, B] = a.useState(null),
                        L = r?.install_scope === "guild" ? (r.guild_id ?? null) : null,
                        [z, R] = a.useState(L);
                    L !== z && (R(L), E(r?.flags ?? 0), _([...x]), B(null), S(null));
                    let F = r?.uses_preview_app,
                        [M, U] = a.useState(null);
                    null != M && M === F && U(null);
                    let [D, G] = a.useState(!1),
                        [H, O] = a.useState(null),
                        [V, J] = a.useState(null),
                        [Z, K] = a.useState(null),
                        [Q, X] = a.useState(null),
                        [$, q] = a.useState(!1),
                        Y = a.useRef(null),
                        ee = a.useRef(!1),
                        el = k.trim(),
                        et = null != r && (0, ef.IU)(r),
                        en = null != r && "guild" === r.install_scope,
                        ea = en && null != l && (0, ef.RX)(r),
                        { isPublic: ei, isGuildCollaboration: er } = (0, eU.n5)(P),
                        es = T ?? N.shareLinksEnabled,
                        eu = et && null != T && T !== N.shareLinksEnabled,
                        ed = null != r && el !== v,
                        eo = et && P !== (C?.flags ?? r?.flags ?? 0),
                        ec =
                            ea &&
                            ((t = C?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        eg = null != F,
                        ep = M ?? F ?? !1,
                        eh = eg && null != M,
                        em = ed || eo || eu || ec || eh || d.changed,
                        ex = em || s.changed || f.changed || p.changed,
                        { setIcon: ej, setDescription: eb } = d,
                        ev = s.setChecked,
                        ey = f.setChecked,
                        eC = p.setChecked,
                        eS = a.useCallback(
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
                            (A(e), O(null), K(null));
                        }, []),
                        eP = a.useCallback((e, l) => {
                            (E((t) => (l ? t | e : t & ~e)), J(null), K(null));
                        }, []),
                        eE = a.useCallback((e) => {
                            (E((l) => ("public" === e ? l | ef.Zh.PUBLIC : l & ~ef.Zh.PUBLIC)),
                                B("public" === e ? null : "link" === e),
                                K(null));
                        }, []),
                        ew = a.useCallback((e) => {
                            (U(e), K(null));
                        }, []),
                        eG = a.useCallback(
                            (e) => {
                                (ev(e), K(null));
                            },
                            [ev],
                        ),
                        eH = a.useCallback(async () => {
                            if (null == r || null == l || null == r.preview_application_id || Y.current === l)
                                return !0;
                            if (ee.current) return !1;
                            ((ee.current = !0), q(!0));
                            try {
                                let e = await (0, eR.cC)(r, l);
                                if (!1 !== e) return (!0 === e && (Y.current = l), !0);
                                await (0, W.vL)(r.id, l);
                                let t = (await (0, eR.cC)(r, l)) === !0;
                                return (t && (Y.current = l), t);
                            } finally {
                                ((ee.current = !1), q(!1));
                            }
                        }, [l, r]),
                        eO = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void J(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (_(e), J(null), K(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eH()) && l();
                                } catch {}
                            },
                            [eH, w],
                        ),
                        eV = a.useCallback(
                            (e) => {
                                (ey(e), X(null));
                            },
                            [ey],
                        ),
                        eW = a.useCallback(
                            (e) => {
                                (eC(e), X(null));
                            },
                            [eC],
                        ),
                        eJ = a.useCallback(async () => {
                            if (null == r || !ex || D) return null;
                            let t = ed ? (0, eD.p)(el) : null;
                            if (null != t) return (O(t), "project");
                            let n = { ...o };
                            (ed && (n.name = el),
                                eo && (n.flags = P),
                                eu && (n.share_links_enabled = T),
                                ec && (n.collaborator_role_ids = [...w].sort()),
                                eh && (n.uses_preview_app = ep),
                                null == r.guild_id && null != l && (ec || (eo && er)) && (n.guild_id = l),
                                G(!0),
                                K(null),
                                X(null));
                            try {
                                if (
                                    (em &&
                                        (await (0, ez.CW)(e, n),
                                        y(el),
                                        S({ flags: P, roleIds: [...w] }),
                                        null != T && N.setShareLinksEnabled(T),
                                        B(null),
                                        c()),
                                    !u())
                                )
                                    return (K(b.intl.string(j.default.XzkNBw)), "project");
                                if (!g() || !h()) return (X(b.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (K(b.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                G(!1);
                            }
                        }, [c, P, eo, l, ex, o, er, ed, eh, ep, r, e, em, ec, h, u, g, D, w, N, eu, T, el]);
                    return {
                        iconURL: d.iconURL,
                        description: d.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: p,
                        name: k,
                        nameError: H,
                        nameChanged: ed,
                        sharingMode: ei ? "public" : null == es ? null : es ? "link" : "collaborators",
                        sharingOptions: I,
                        canChangeSharing: et && (null != N.shareLinksEnabled || N.loadFailed),
                        isGuildCollaboration: er,
                        usesPreviewApp: ep,
                        canChangePreviewApp: eg,
                        selectedRoleIds: w,
                        showsManageServerDefault: er && 0 === w.length,
                        supportsVisibility: et,
                        supportsCollaboration: en,
                        supportsCollaboratorRoles: ea,
                        checkingAppInGuild: $,
                        saving: D,
                        selectionError: V,
                        saveError: Z,
                        experimentalError: Q,
                        canSave: ex && "" !== el,
                        handleIconChange: eS,
                        handleNameChange: eA,
                        handleDescriptionChange: ek,
                        handleFlagChange: eP,
                        handleSharingModeChange: eE,
                        handleUsesPreviewAppChange: ew,
                        handleLiveReloadChange: eG,
                        handleRoleSelectionChange: eO,
                        ensureAppInGuild: eH,
                        handleSmartContextChange: eV,
                        handleRequireHostApprovalChange: eW,
                        submit: eJ,
                    };
                })(e, l),
                $ = L || t,
                q = (0, ej.AJ)(e),
                Y = a.useMemo(
                    () => (w ? [{ id: eG, label: b.intl.string(j.default.Ukbq9W), value: eG, disabled: !0 }, ...r] : r),
                    [r, w],
                ),
                ee = a.useCallback(
                    (e) => {
                        let l = e.filter((e) => e !== eG);
                        (w && 0 === l.length) || Z(l);
                    },
                    [Z, w],
                ),
                ei = a.useMemo(
                    () =>
                        C.map((e) => {
                            let { value: l, label: t } = e;
                            return { id: l, value: l, label: t };
                        }),
                    [C],
                );
            return {
                fields: (0, n.jsxs)(c.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        q ? (0, n.jsx)(ey.A, { projectId: e }) : null,
                        (0, n.jsx)(ex, {
                            iconURL: u,
                            onIconChange: U,
                            name: h,
                            nameError: x,
                            onNameChange: D,
                            description: d,
                            onDescriptionChange: G,
                            disabled: $,
                        }),
                        N && !q
                            ? (0, n.jsx)(_.l, {
                                  selectionMode: "single",
                                  label: b.intl.string(j.default.jDBYrs),
                                  options: ei,
                                  value: y ?? void 0,
                                  disabled: $ || !S,
                                  onSelectionChange: O,
                                  layout: "horizontal-responsive",
                                  fullWidth: !0,
                                  fitContent: !0,
                              })
                            : null,
                        t ? null : (0, n.jsx)(ev, { projectId: e }),
                        N && I
                            ? (0, n.jsxs)(c.B, {
                                  gap: 12,
                                  children: [
                                      (0, n.jsx)(el.d, {
                                          label: b.intl.string(j.default.lVvR4E),
                                          description: b.intl.string(j.default.SQZGoV),
                                          checked: k,
                                          disabled: $,
                                          onChange: (e) => H(ef.Zh.GUILD_COLLABORATION, e),
                                      }),
                                      T && k
                                          ? (0, n.jsxs)(c.B, {
                                                gap: 8,
                                                children: [
                                                    (0, n.jsx)(et.Z, {
                                                        selectionMode: "multiple",
                                                        label: b.intl.string(j.default["pO3+p5"]),
                                                        placeholder: b.intl.string(j.default.gvL7QS),
                                                        helperText: b.intl.string(j.default.AXPSq7),
                                                        value: w ? [eG] : E,
                                                        options: Y,
                                                        maxOptionsVisible: 6,
                                                        wrapTags: !0,
                                                        disabled: $ || B,
                                                        "aria-invalid": null != z,
                                                        "aria-errormessage": null != z ? s : void 0,
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
                                                    null != z
                                                        ? (0, n.jsx)(f.E, {
                                                              id: s,
                                                              variant: "body-xs/normal",
                                                              color: "text-feedback-critical",
                                                              role: "alert",
                                                              children: z,
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
                                  disabled: $,
                                  onChange: V,
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)(el.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: $,
                                  onChange: J,
                              })
                            : null,
                        t ? null : (0, n.jsx)(ew, { projectId: e }),
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
                experimentalFields: (0, n.jsxs)(c.B, {
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
                            onChange: Q,
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
                submit: X,
            };
        })(l, B?.guild_id ?? t ?? void 0, { readOnly: !F }),
        G = (function (e, l) {
            let [t, n] = a.useState(e),
                [r, s] = a.useState(v),
                [u, d] = a.useState(y),
                [o, c] = a.useState(C),
                [f, g] = a.useState(!1),
                [p, h] = a.useState(!1);
            t !== e && (n(e), s(v), d(y), c(C), g(!1), h(!1));
            let S = a.useRef(e);
            a.useEffect(() => {
                S.current = e;
            }, [e]);
            let k = (0, i.yK)(
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
                            (s(l.callers), c({ live: !0 === l.live, hasPreview: !1 !== l.has_preview }));
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
                                t && d(l.targets);
                            } catch {}
                        })(),
                        () => {
                            t = !1;
                        }
                    );
                }, [e, l, k]));
            let A = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                P = (0, i.cf)(
                    [m.Ay],
                    () =>
                        Object.fromEntries(
                            [...r, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [l, m.Ay.getProject(l)];
                            }),
                        ),
                    [r, u],
                ),
                E = a.useMemo(
                    () =>
                        Object.fromEntries(
                            [...r, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    P[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [r, P, u],
                ),
                w = a.useCallback(
                    async (l, t) => {
                        (g(!1), h(!1));
                        try {
                            await (0, x.Ol)(e, l, { build: t });
                        } catch {
                            S.current === e && g(!0);
                            return;
                        }
                        S.current === e &&
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
                            S.current === e && g(!0);
                            return;
                        }
                        S.current === e && (h(!0), s((e) => e.filter((e) => e.project_id !== l)));
                    },
                    [e],
                );
            return {
                name: A?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: e }),
                project: A ?? null,
                live: o.live,
                hasPreview: o.hasPreview,
                callers: r,
                targets: u,
                projects: P,
                names: E,
                failed: f,
                saved: p,
                setBuild: w,
                remove: _,
            };
        })(l, M),
        [H, Z] = a.useState(null);
    return (0, n.jsx)(Y.A, {
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
                (G.callers.length > 0 || G.targets.length > 0) && t.push("linked"),
                F && t.push("experimental"));
            let a = [H, S].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                h = !F && !i && !t.includes("app") && !t.includes("secrets"),
                x = (F && D.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && F && D.canSave }),
                y = i ? (0, q.OF)(B?.name) : b.intl.string(j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && Z("app");
                        return;
                    }
                    let s = !i && F && D.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, i] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: i || !F ? null : D.submit });
                    if (u.saved) {
                        (await T(),
                            s &&
                                null != N &&
                                (function (e, l) {
                                    let t = m.Ay.getProject(e);
                                    if (null == t || !(0, W.qF)(t)) return;
                                    let n = O.A.getPublishStatus(e);
                                    null != n &&
                                        (0, V.l)(n.publishState) &&
                                        (0, r.A)({
                                            title: b.intl.string(j.default["48pvCR"]),
                                            subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                            confirmText: b.intl.string(j.default.guoHDk),
                                            cancelText: b.intl.string(j.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, J.K)(e, "name_prompt", l);
                                            },
                                        });
                                })(l, N));
                        return;
                    }
                    "app" !== u.failedTab
                        ? Z(u.failedTab)
                        : "secrets" !== a && Z(t.includes("app") ? "app" : "secrets");
                },
                noValidate: i,
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
                        (0, n.jsxs)(d.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(o.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(o.V.Item, { id: e, children: b.intl.string(eO[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(c.B, {
                                          gap: 24,
                                          className: eH.f,
                                          children: [D.fields, (0, n.jsx)($, { projectId: l, canEdit: M }, l)],
                                      }),
                                i || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(z, {
                                          linkedApps: G,
                                          onOpenSettings: (e) => {
                                              (T(), (0, ee.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                i || "experimental" !== a ? null : D.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || L?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eW, { projectId: l, modelSettings: L, tierSettings: L.tierSettings }),
                                i || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eH.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !i,
                            leading: i
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
                                              text: b.intl.string(i ? j.default.A7dQd9 : b.t["R3BPH+"]),
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
function eW(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, D.X)(l, e), [l]),
        [d, o] = (0, G.A)(r, u);
    return (0, n.jsx)(H.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: o });
}
