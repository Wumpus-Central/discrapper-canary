(t.d(l, { default: () => eJ }), t(321073));
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
    b = t(191850),
    j = t(792996);
let v = [],
    y = [],
    S = { live: !1, hasPreview: !0 };
var C = t(265872),
    k = t(165862),
    P = t(477782),
    A = t(866665),
    E = t(408278),
    w = t(365199),
    _ = t(691885),
    I = t(821609),
    N = t(762026),
    T = t(700915),
    B = t(985965),
    L = t(843313);
function M(e) {
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
                                      children: j.intl.formatToPlainString(b.default.uLPdNT, { name: l.name }),
                                  }),
                              }),
                              a.map((e) =>
                                  (0, n.jsx)(
                                      z,
                                      {
                                          caller: e,
                                          sides: (0, N.cL)(l, e),
                                          project: s[e.project_id],
                                          targetProject: l.project,
                                          onBuildChange: (l) => g(e.project_id, l),
                                          onRemove: () => {
                                              var l, t;
                                              return (
                                                  (l = e.project_id),
                                                  (t = u[e.project_id]),
                                                  void (0, r.A)({
                                                      title: j.intl.formatToPlainString(b.default.zSfIvv, { name: t }),
                                                      subtitle: j.intl.formatToPlainString(b.default["7TX+mR"], {
                                                          name: t,
                                                      }),
                                                      confirmText: j.intl.string(b.default.vDZEGQ),
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
                                      children: j.intl.formatToPlainString(b.default.L3Bf1s, { name: l.name }),
                                  }),
                              }),
                              i.map((e) =>
                                  (0, n.jsx)(
                                      R,
                                      {
                                          target: e,
                                          sides: (0, N.cs)(l, e),
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
                              children: j.intl.string(b.default.dIEOrl),
                          })
                        : o
                          ? (0, n.jsx)(f.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: j.intl.string(b.default["/d6saK"]),
                            })
                          : null,
                }),
            ],
        }),
    });
}
function z(e) {
    let { caller: l, sides: t, project: i, targetProject: r, onBuildChange: s, onRemove: u } = e,
        d = a.useRef(null),
        o = j.intl.formatToPlainString(b.default.bzMlmh, { name: t.caller }),
        c = (0, N.Sj)(t, l.build),
        g = (0, N.xP)(l.purpose);
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
                    (0, n.jsx)(C.Y, {
                        targetElementRef: d,
                        position: "bottom",
                        align: "right",
                        animation: C.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(k.W, {
                                "data-menu-migrated": !0,
                                navId: `conjure-linked-app-${l.project_id}`,
                                "aria-label": o,
                                onClose: t,
                                onSelect: t,
                                children: (0, n.jsx)(P.rX, {
                                    children: (0, n.jsx)(P.Dr, {
                                        id: "remove",
                                        color: "danger",
                                        label: j.intl.string(b.default.bN1S9T),
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
                                children: (0, n.jsx)(A.m, {
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
                                  null != c.preview ? (0, n.jsx)(G, { setting: c.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(G, { setting: c.live, onBuildChange: s }),
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
function G(e) {
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
function R(e) {
    let { target: l, sides: t, project: a, callerProject: i, onOpen: r } = e,
        s = (0, N.xP)(l.purpose),
        u = (0, N.ft)(t, l.build),
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
                        ? (0, n.jsx)(I.$, {
                              size: "sm",
                              variant: "secondary",
                              text: j.intl.formatToPlainString(b.default.DfBXSF, { target: t.target }),
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
    F = t(223347),
    H = t(822313),
    D = t(359589),
    Z = t(722701),
    O = t(811587),
    q = t(826058),
    V = t(534514),
    Q = t(44255),
    W = t(303345),
    X = t(416473);
function J(e) {
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
                S = a.useRef(!1),
                C = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = C.current,
                    a = ++n.value;
                return (
                    (0, X.fi)(e)
                        .then((e) => {
                            C.current.value === a && (r(e), o(!0), u(!1));
                        })
                        .catch(() => {
                            C.current.value === a && (p(j.intl.string(b.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), p(null), y((e) => e + 1));
                }, []),
                P = a.useCallback(async () => {
                    if (!l || !d || S.current) return;
                    S.current = !0;
                    let t = ++C.current.value;
                    (f(!0), p(null), x(null));
                    try {
                        let l = await (0, X.MN)(e);
                        if (C.current.value !== t) return;
                        (r(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        C.current.value === t && p(e instanceof W.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), C.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: c, error: g, status: m, retry: k, remove: P };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(c.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(V.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(b.default.ptzKKH) }),
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
                                (0, n.jsxs)(c.B, {
                                    gap: 8,
                                    children: [
                                        (0, Q.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(I.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: j.intl.string(b.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, r.A)({
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
                      : (0, n.jsx)(I.$, {
                            type: "button",
                            variant: "secondary",
                            text: j.intl.string(b.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var K = t(290713),
    $ = t(616334),
    Y = t(143129),
    ee = t(890497),
    el = t(904363),
    et = t(540338),
    en = t(503698),
    ea = t.n(en),
    ei = t(750943),
    er = t(22231),
    es = t(95477),
    eu = t(103557),
    ed = t(946274),
    eo = t(951178),
    ec = t(535466),
    ef = t(154600);
function eg(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ef.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ea()(ef.Vs, { [ef.A6]: u }),
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(ei.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ef.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ef.Jx,
                                  children: (0, n.jsx)(er.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(ed.Ay, {
                ref: s,
                className: ef.Fg,
                multiple: !1,
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: ec.En }],
                maxFileSizeBytes: ec.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(j.intl.string(b.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ep(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function eh(e) {
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
                ep(e, n, a);
                let i = new ResizeObserver(() => ep(e, n, a));
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
                        className: ef.S7,
                        children: [
                            (0, n.jsx)(eg, { iconURL: i, disabled: p, onChange: r, onError: m }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ef.yD,
                                children: (0, n.jsx)(es.k, {
                                    label: j.intl.string(b.default.GWBCF9),
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
            (0, n.jsx)(eu.f, {
                label: j.intl.string(b.default.ynaGa1),
                placeholder: j.intl.string(b.default["I+3UTL"]),
                value: o,
                onChange: g,
                maxLength: 400,
                disabled: p,
            }),
        ],
    });
}
var em = t(60498),
    ex = t(821759);
function eb(e) {
    let { projectId: l } = e,
        t = (0, em.GB)(l),
        [i, r] = a.useState(!1),
        s = a.useCallback((e) => r(!(0, ex.t)(l, e)), [l]);
    return null == t
        ? null
        : (0, n.jsxs)(c.B, {
              gap: 8,
              children: [
                  (0, n.jsx)(Y.d, {
                      label: j.intl.string(b.default["Nf+zrD"]),
                      description: j.intl.string(b.default.heoCNf),
                      checked: t.enabled,
                      disabled: t.pending,
                      onChange: s,
                  }),
                  i || null != t.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: j.intl.string(b.default["UU+oef"]),
                        })
                      : null,
              ],
          });
}
var ej = t(5377);
function ev(e) {
    let { projectId: l } = e,
        t = (0, em.Ay)(l),
        a = (0, em.cg)(l);
    if (null == t) return null;
    let i = t.updatesPaused;
    return (0, n.jsxs)(c.B, {
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
                })(t, i),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: i || a?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (e, l) {
                    if (l) return j.intl.string(b.default["uV/luq"]);
                    if (null == e || null == e.atMs) return j.intl.string(b.default.gHndTq);
                    let t = (0, ej.i$)(new Date(e.atMs), "LLL");
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
                })(a, i),
            }),
        ],
    });
}
var ey = t(71393),
    eS = t(233470),
    eC = t(434279),
    ek = t(733791),
    eP = t(16619),
    eA = t(680032);
function eE(e) {
    return e?.install_scope === "guild" ? (0, eC.wu)(e) : null;
}
function ew(e) {
    let l = (0, eP.z9)("ConjureProjectServerChange"),
        t = (0, i.bG)([m.Ay], () => eE(m.Ay.getProject(e)), [e]);
    return a.useMemo(() => l.filter((e) => e.id !== t), [l, t]);
}
var e_ = t(135603),
    eI = t(189213),
    eN = t(858899),
    eT = t(192308),
    eB = t(682163),
    eL = t(653036);
function eM(e) {
    let { projectId: l, transitionState: t, onClose: r } = e,
        s = (function (e) {
            let l = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                t = ew(e),
                [n] = a.useState(() => l?.install_scope === "guild"),
                [r] = a.useState(t);
            a.useEffect(() => {
                n && (0, eS.GO)(e);
            }, [n, e]);
            let s = (0, ek.Bs)(n ? e : null),
                [u, d] = a.useState(null),
                o = null == u ? s : u.target,
                [c, f] = a.useState(null),
                g = r.find((e) => e.id === c) ?? r[0] ?? null,
                [p, h] = a.useState(!1),
                [x, v] = a.useState(null),
                y = l?.name ?? "",
                S = a.useMemo(
                    () => (null == l || null == g ? [] : n ? (0, eA.by)(l, o, g.name) : (0, eA.dv)(l)),
                    [l, g, n, o],
                ),
                C = a.useCallback((e) => {
                    (f(e), v(null));
                }, []),
                k = a.useCallback(async () => {
                    if (null == g) return null;
                    (h(!0), v(null), d({ target: s }));
                    try {
                        await (0, eS.xo)(e, g.id);
                    } catch (l) {
                        let e = l?.body?.message;
                        return (
                            v("string" == typeof e ? e : j.intl.string(n ? b.default.mdrXGt : b.default.qDjkvv)),
                            d(null),
                            h(!1),
                            null
                        );
                    }
                    return (
                        h(!1),
                        j.intl.formatToPlainString(n ? b.default["B+Xtjy"] : b.default.yHhjsi, {
                            app: y,
                            server: g.name,
                        })
                    );
                }, [y, g, s, n, e]);
            return {
                appName: y,
                moving: n,
                guilds: r,
                guild: g,
                pickGuild: C,
                rows: S,
                pending: p,
                error: x,
                submit: k,
            };
        })(l),
        { appName: u, moving: d, guilds: o, guild: f, rows: g, pending: p, error: h } = s,
        x = a.useMemo(
            () =>
                o.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                })),
            [o],
        );
    return (0, n.jsx)(eI.a, {
        transitionState: t,
        onClose: r,
        title: j.intl.formatToPlainString(d ? b.default.M4jq44 : b.default.PE4egI, { app: u }),
        size: "sm",
        notice: null != h ? { type: "critical", message: h, role: "alert" } : void 0,
        actions: [
            { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: r, disabled: p },
            {
                text: j.intl.string(d ? b.default.MHSKBb : b.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await s.submit();
                    null != e && ((0, eN.P0)({ text: e, variant: "success" }), r());
                },
                loading: p,
                disabled: null == f || p,
            },
        ],
        children: (0, n.jsxs)(c.B, {
            gap: 16,
            children: [
                null != f
                    ? (0, n.jsx)(_.l, {
                          label: j.intl.string(b.default.Uq5hU9),
                          options: x,
                          value: f.id,
                          onSelectionChange: s.pickGuild,
                          selectionMode: "single",
                          disabled: p,
                          fullWidth: !0,
                      })
                    : null,
                g.length > 0 ? (0, n.jsx)(eL.A, { rows: g }) : null,
            ],
        }),
    });
}
function ez(e) {
    let { projectId: l } = e,
        t = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        a = eE(t),
        r = (0, i.bG)([ey.A], () => ey.A.getGuild(a)?.name, [a]),
        s = ew(l).length > 0;
    if (null == t || !(0, m.PV)(t)) return null;
    let u = "guild" === t.install_scope,
        d = j.intl.string(b.default.n431L5),
        o = () => {
            var e;
            return ((e = { projectId: l }), void (0, eT.qf)((l) => (0, n.jsx)(eM, { ...l, ...e })));
        };
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
                            ? j.intl.formatToPlainString(b.default["KWBh/Q"], {
                                  server: r ?? j.intl.string(b.default["6bhivN"]),
                              })
                            : j.intl.string(b.default["JQ/7HT"]),
                    }),
                    s
                        ? null
                        : (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: j.intl.string(b.default.NXvmoQ),
                          }),
                ],
            }),
            u
                ? (0, n.jsxs)(c.B, {
                      direction: "horizontal",
                      gap: 8,
                      justify: "end",
                      children: [
                          (0, n.jsx)(I.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(b.default["1E5/ay"]),
                              disabled: !s,
                              onClick: o,
                          }),
                          (0, n.jsx)(I.$, {
                              variant: "critical-secondary",
                              size: "sm",
                              text: j.intl.string(b.default.j1NMdG),
                              onClick: () => (0, e_.A)({ project: t }),
                          }),
                      ],
                  })
                : (0, n.jsx)(I.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(b.default["7SD3ul"]),
                      disabled: !s,
                      onClick: o,
                  }),
        ],
    });
}
t(938796);
var eG = t(862026),
    eR = t(709753),
    eU = t(961553),
    eF = t(944142),
    eH = t(788493),
    eD = t(532247),
    eZ = t(426035),
    eO = t(685033),
    eq = t(641655),
    eV = t(246338),
    eQ = t(277085),
    eW = t(453430);
let eX = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function eJ(e) {
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
        T = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        B = (0, i.bG)([U.A], () => U.A.getModelSettings(l), [l]),
        L = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        z = null != T && (0, m.PV)(T),
        G = null != T && (0, m.jf)(T),
        R = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, el.A)(l),
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
                    sharingOptions: S,
                    canChangeSharing: C,
                    isGuildCollaboration: k,
                    usesPreviewApp: P,
                    canChangePreviewApp: A,
                    selectedRoleIds: E,
                    supportsVisibility: w,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: N,
                    checkingAppInGuild: T,
                    saving: B,
                    selectionError: L,
                    saveError: M,
                    experimentalError: z,
                    canSave: G,
                    handleIconChange: R,
                    handleNameChange: U,
                    handleDescriptionChange: F,
                    handleFlagChange: H,
                    handleSharingModeChange: D,
                    handleUsesPreviewAppChange: Z,
                    handleLiveReloadChange: O,
                    handleRoleSelectionChange: V,
                    handleSmartContextChange: Q,
                    handleRequireHostApprovalChange: W,
                    submit: X,
                } = (function (e, l) {
                    var t;
                    let n,
                        r = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, i.bG)([eF.A], () => eF.A.getLiveReload(e), [e]),
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
                                        (!!(0, eH.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [d, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, eD.oV)(l),
                                changed: d,
                                setChecked: n,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        d = (0, eU.A)(e),
                        { changes: o, commit: c } = d,
                        f = (0, eG.Q)(e),
                        g = f.save,
                        p = (0, eR._t)(e),
                        h = p.save,
                        x = r?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(r?.name ?? ""),
                        [S, C] = a.useState(null),
                        [k, P] = a.useState(v),
                        [A, E] = a.useState(r?.flags ?? 0),
                        [w, _] = a.useState(() => [...x]),
                        I = (0, eO.A)(e),
                        N = a.useMemo(() => (0, eq.R)(), []),
                        [T, B] = a.useState(null),
                        L = r?.install_scope === "guild" ? (r.guild_id ?? null) : null,
                        [M, z] = a.useState(L);
                    L !== M && (z(L), E(r?.flags ?? 0), _([...x]), B(null), C(null));
                    let G = r?.uses_preview_app,
                        [R, U] = a.useState(null);
                    null != R && R === G && U(null);
                    let [F, H] = a.useState(!1),
                        [D, Z] = a.useState(null),
                        [O, V] = a.useState(null),
                        [Q, W] = a.useState(null),
                        [X, J] = a.useState(null),
                        [K, $] = a.useState(!1),
                        Y = a.useRef(null),
                        ee = a.useRef(!1),
                        el = k.trim(),
                        et = null != r && (0, eo.IU)(r),
                        en = null != r && "guild" === r.install_scope,
                        ea = en && null != l && (0, eo.RX)(r),
                        { isPublic: ei, isGuildCollaboration: er } = (0, eV.n5)(A),
                        es = T ?? I.shareLinksEnabled,
                        eu = et && null != T && T !== I.shareLinksEnabled,
                        ed = null != r && el !== v,
                        ec = et && A !== (S?.flags ?? r?.flags ?? 0),
                        ef =
                            ea &&
                            ((t = S?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        eg = null != G,
                        ep = R ?? G ?? !1,
                        eh = eg && null != R,
                        em = ed || ec || eu || ef || eh || d.changed,
                        ex = em || s.changed || f.changed || p.changed,
                        { setIcon: eb, setDescription: ej } = d,
                        ev = s.setChecked,
                        ey = f.setChecked,
                        eC = p.setChecked,
                        ek = a.useCallback(
                            (e) => {
                                (eb(e), W(null));
                            },
                            [eb],
                        ),
                        eP = a.useCallback(
                            (e) => {
                                (ej(e), W(null));
                            },
                            [ej],
                        ),
                        eA = a.useCallback((e) => {
                            (P(e), Z(null), W(null));
                        }, []),
                        eE = a.useCallback((e, l) => {
                            (E((t) => (l ? t | e : t & ~e)), V(null), W(null));
                        }, []),
                        ew = a.useCallback((e) => {
                            (E((l) => ("public" === e ? l | eo.Zh.PUBLIC : l & ~eo.Zh.PUBLIC)),
                                B("public" === e ? null : "link" === e),
                                W(null));
                        }, []),
                        e_ = a.useCallback((e) => {
                            (U(e), W(null));
                        }, []),
                        eI = a.useCallback(
                            (e) => {
                                (ev(e), W(null));
                            },
                            [ev],
                        ),
                        eN = a.useCallback(async () => {
                            if (null == r || null == l || null == r.preview_application_id || Y.current === l)
                                return !0;
                            if (ee.current) return !1;
                            ((ee.current = !0), $(!0));
                            try {
                                let e = await (0, eZ.cC)(r, l);
                                if (!1 !== e) return (!0 === e && (Y.current = l), !0);
                                await (0, q.vL)(r.id, l);
                                let t = (await (0, eZ.cC)(r, l)) === !0;
                                return (t && (Y.current = l), t);
                            } finally {
                                ((ee.current = !1), $(!1));
                            }
                        }, [l, r]),
                        eT = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void V(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (_(e), V(null), W(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eN()) && l();
                                } catch {}
                            },
                            [eN, w],
                        ),
                        eB = a.useCallback(
                            (e) => {
                                (ey(e), J(null));
                            },
                            [ey],
                        ),
                        eL = a.useCallback(
                            (e) => {
                                (eC(e), J(null));
                            },
                            [eC],
                        ),
                        eM = a.useCallback(async () => {
                            if (null == r || !ex || F) return null;
                            let t = ed ? (0, eQ.p)(el) : null;
                            if (null != t) return (Z(t), "project");
                            let n = { ...o };
                            (ed && (n.name = el),
                                ec && (n.flags = A),
                                eu && (n.share_links_enabled = T),
                                ef && (n.collaborator_role_ids = [...w].sort()),
                                eh && (n.uses_preview_app = ep),
                                null == r.guild_id && null != l && (ef || (ec && er)) && (n.guild_id = l),
                                H(!0),
                                W(null),
                                J(null));
                            try {
                                if (
                                    (em &&
                                        (await (0, eS.CW)(e, n),
                                        y(el),
                                        C({ flags: A, roleIds: [...w] }),
                                        null != T && I.setShareLinksEnabled(T),
                                        B(null),
                                        c()),
                                    !u())
                                )
                                    return (W(j.intl.string(b.default.XzkNBw)), "project");
                                if (!g() || !h()) return (J(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (W(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                H(!1);
                            }
                        }, [c, A, ec, l, ex, o, er, ed, eh, ep, r, e, em, ef, h, u, g, F, w, I, eu, T, el]);
                    return {
                        iconURL: d.iconURL,
                        description: d.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: p,
                        name: k,
                        nameError: D,
                        nameChanged: ed,
                        sharingMode: ei ? "public" : null == es ? null : es ? "link" : "collaborators",
                        sharingOptions: N,
                        canChangeSharing: et && (null != I.shareLinksEnabled || I.loadFailed),
                        isGuildCollaboration: er,
                        usesPreviewApp: ep,
                        canChangePreviewApp: eg,
                        selectedRoleIds: w,
                        supportsVisibility: et,
                        supportsCollaboration: en,
                        supportsCollaboratorRoles: ea,
                        checkingAppInGuild: K,
                        saving: F,
                        selectionError: O,
                        saveError: Q,
                        experimentalError: X,
                        canSave: ex && "" !== el,
                        handleIconChange: ek,
                        handleNameChange: eA,
                        handleDescriptionChange: eP,
                        handleFlagChange: eE,
                        handleSharingModeChange: ew,
                        handleUsesPreviewAppChange: e_,
                        handleLiveReloadChange: eI,
                        handleRoleSelectionChange: eT,
                        ensureAppInGuild: eN,
                        handleSmartContextChange: eB,
                        handleRequireHostApprovalChange: eL,
                        submit: eM,
                    };
                })(e, l),
                J = B || t,
                K = (0, em.AJ)(e),
                $ = a.useMemo(
                    () =>
                        S.map((e) => {
                            let { value: l, label: t } = e;
                            return { id: l, value: l, label: t };
                        }),
                    [S],
                );
            return {
                fields: (0, n.jsxs)(c.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: j.intl.string(b.default.s7VnVF),
                              })
                            : null,
                        K
                            ? (0, n.jsx)(ev, { projectId: e })
                            : (0, n.jsx)(eh, {
                                  iconURL: u,
                                  onIconChange: R,
                                  name: h,
                                  nameError: x,
                                  onNameChange: U,
                                  description: d,
                                  onDescriptionChange: F,
                                  disabled: J,
                              }),
                        w && !K
                            ? (0, n.jsx)(_.l, {
                                  selectionMode: "single",
                                  label: j.intl.string(b.default.jDBYrs),
                                  options: $,
                                  value: y ?? void 0,
                                  disabled: J || !C,
                                  onSelectionChange: D,
                                  layout: "horizontal-responsive",
                                  fullWidth: !0,
                                  fitContent: !0,
                              })
                            : null,
                        t ? null : (0, n.jsx)(eb, { projectId: e }),
                        w && I
                            ? (0, n.jsx)(Y.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: k,
                                  disabled: J,
                                  onChange: (e) => H(eo.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        A
                            ? (0, n.jsx)(Y.d, {
                                  label: j.intl.string(b.default.DV2hcV),
                                  description: j.intl.string(b.default.yjWIzb),
                                  checked: P,
                                  disabled: J,
                                  onChange: Z,
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)(Y.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: J,
                                  onChange: O,
                              })
                            : null,
                        N
                            ? (0, n.jsxs)(c.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(b.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(ee.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(b.default["pO3+p5"]),
                                          placeholder: j.intl.string(b.default.gvL7QS),
                                          value: E,
                                          options: r,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: J || !k || T,
                                          "aria-invalid": null != L,
                                          "aria-errormessage": null != L ? s : void 0,
                                          onSelectionChange: V,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: E.length,
                                              max: 25,
                                          }),
                                      }),
                                      k
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(b.default.nZw5r9),
                                            }),
                                      null != L
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: L,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        t ? null : (0, n.jsx)(ez, { projectId: e }),
                        null != M
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: M,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(c.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(Y.d, {
                            label: j.intl.string(b.default["4liZ45"]),
                            description: j.intl.string(b.default.I5cl7p),
                            checked: g.checked,
                            disabled: B,
                            onChange: Q,
                        }),
                        (0, n.jsx)(Y.d, {
                            label: j.intl.string(b.default.mpjaVm),
                            description: j.intl.string(b.default["2PxChh"]),
                            checked: p.checked,
                            disabled: B,
                            onChange: W,
                        }),
                        (0, n.jsx)(et.u, { projectId: e }),
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
                canSave: G,
                saving: B,
                nameChanged: v,
                submit: X,
            };
        })(l, T?.guild_id ?? t ?? void 0, { readOnly: !z }),
        F = (function (e, l) {
            let [t, n] = a.useState(e),
                [r, s] = a.useState(v),
                [u, d] = a.useState(y),
                [o, c] = a.useState(S),
                [f, g] = a.useState(!1),
                [p, h] = a.useState(!1);
            t !== e && (n(e), s(v), d(y), c(S), g(!1), h(!1));
            let C = a.useRef(e);
            a.useEffect(() => {
                C.current = e;
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
            let P = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                A = (0, i.cf)(
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
                                    A[l]?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [r, A, u],
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
                name: P?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: e }),
                project: P ?? null,
                live: o.live,
                hasPreview: o.hasPreview,
                callers: r,
                targets: u,
                projects: A,
                names: E,
                failed: f,
                saved: p,
                setBuild: w,
                remove: _,
            };
        })(l, G),
        [H, D] = a.useState(null);
    return (0, n.jsx)(K.A, {
        projectId: l,
        scopeKeys: k,
        note: P,
        notifyAgent: A,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((z || G) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                B?.tierSettings != null && t.push("model"),
                (F.callers.length > 0 || F.targets.length > 0) && t.push("linked"),
                z && t.push("experimental"));
            let a = [H, C].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                h = !z && !i && !t.includes("app") && !t.includes("secrets"),
                x = (z && R.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && z && R.canSave }),
                y = j.intl.string(i ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && D("app");
                        return;
                    }
                    let s = !i && z && R.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, i] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: i || !z ? null : R.submit });
                    if (u.saved) {
                        (await N(),
                            s &&
                                null != w &&
                                (function (e, l) {
                                    let t = m.Ay.getProject(e);
                                    if (null == t || !(0, q.qF)(t)) return;
                                    let n = Z.A.getPublishStatus(e);
                                    null != n &&
                                        (0, O.lE)(n.publishState) &&
                                        (0, r.A)({
                                            title: j.intl.string(b.default["48pvCR"]),
                                            subtitle: j.intl.string(b.default["Xk+JsJ"]),
                                            confirmText: j.intl.string(b.default.guoHDk),
                                            cancelText: j.intl.string(b.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, q.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, w));
                        return;
                    }
                    "app" !== u.failedTab
                        ? D(u.failedTab)
                        : "secrets" !== a && D(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: N,
                    "aria-label": y,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: y }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(o.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => D(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(o.V.Item, { id: e, children: j.intl.string(eX[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(c.B, {
                                          gap: 24,
                                          className: eW.f,
                                          children: [R.fields, (0, n.jsx)(J, { projectId: l, canEdit: G }, l)],
                                      }),
                                i || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(M, {
                                          linkedApps: F,
                                          onOpenSettings: (e) => {
                                              (N(), (0, $.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                i || "experimental" !== a ? null : R.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || B?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eK, { projectId: l, modelSettings: B, tierSettings: B.tierSettings }),
                                i || null != a
                                    ? null
                                    : L
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(b.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eW.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions:
                                h || ("linked" === a && !v)
                                    ? [{ text: j.intl.string(j.t.cpT0Cq), variant: "secondary", onClick: N }]
                                    : [
                                          {
                                              text: j.intl.string(j.t["ETE/oC"]),
                                              variant: "secondary",
                                              onClick: N,
                                              disabled: x,
                                          },
                                          {
                                              text: j.intl.string(i ? b.default.A7dQd9 : j.t["R3BPH+"]),
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
function eK(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, F.X)(l, e), [l]),
        [d, o] = (0, H.A)(r, u);
    return (0, n.jsx)(D.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: o });
}
