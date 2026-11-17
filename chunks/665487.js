(t.d(l, { default: () => ez }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(855986),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    o = t(761508),
    d = t(331322),
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
    E = t(866665),
    A = t(408278),
    w = t(365199),
    _ = t(691885),
    I = t(821609),
    N = t(762026),
    T = t(700915),
    B = t(985965),
    L = t(843313);
function R(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: r, projects: s, names: u, failed: c, saved: o, setBuild: g, remove: p } = l;
    return (0, n.jsx)("div", {
        className: L.Mf,
        children: (0, n.jsxs)(d.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(d.B, {
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
                                      F,
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
                                                  void (0, i.A)({
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
                r.length > 0
                    ? (0, n.jsxs)(d.B, {
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
                              r.map((e) =>
                                  (0, n.jsx)(
                                      z,
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
                    children: c
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
function F(e) {
    let { caller: l, sides: t, project: r, targetProject: i, onBuildChange: s, onRemove: u } = e,
        c = a.useRef(null),
        o = j.intl.formatToPlainString(b.default.bzMlmh, { name: t.caller }),
        d = (0, N.Sj)(t, l.build),
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
                                ref: c,
                                className: L.hZ,
                                children: (0, n.jsx)(E.m, {
                                    text: o,
                                    children: (0, n.jsx)(A.K, {
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
                    null != d
                        ? (0, n.jsxs)("div", {
                              className: L.W0,
                              children: [
                                  null != d.preview ? (0, n.jsx)(M, { setting: d.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(M, { setting: d.live, onBuildChange: s }),
                              ],
                          })
                        : null,
                    d?.note != null
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: d.note })
                        : null,
                ],
            }),
        ],
    });
}
function M(e) {
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
function z(e) {
    let { target: l, sides: t, project: a, callerProject: r, onOpen: i } = e,
        s = (0, N.xP)(l.purpose),
        u = (0, N.ft)(t, l.build),
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
                        ? (0, n.jsx)(I.$, {
                              size: "sm",
                              variant: "secondary",
                              text: j.intl.formatToPlainString(b.default.DfBXSF, { target: t.target }),
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
    H = t(223347),
    D = t(822313),
    G = t(359589),
    Z = t(722701),
    O = t(811587),
    V = t(826058),
    J = t(534514),
    W = t(44255),
    q = t(303345),
    Q = t(416473);
function X(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, h.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, o] = a.useState(!1),
                [d, f] = a.useState(!1),
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
                            C.current.value === a && (i(e), o(!0), u(!1));
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
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++C.current.value;
                    (f(!0), p(null), x(null));
                    try {
                        let l = await (0, Q.MN)(e);
                        if (C.current.value !== t) return;
                        (i(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        C.current.value === t && p(e instanceof q.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), C.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: d, error: g, status: m, retry: k, remove: P };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(d.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(J.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(b.default.ptzKKH) }),
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
                                (0, n.jsxs)(d.B, {
                                    gap: 8,
                                    children: [
                                        (0, W.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(I.$, {
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
    Y = t(616334),
    $ = t(143129),
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
    eo = t(951178),
    ed = t(535466),
    ef = t(154600);
function eg(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
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
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: ed.En }],
                maxFileSizeBytes: ed.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(j.intl.string(b.default.ZTAAMc)),
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
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
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
                let r = new ResizeObserver(() => ep(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: ef.S7,
                        children: [
                            (0, n.jsx)(eg, { iconURL: r, disabled: p, onChange: i, onError: m }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ef.yD,
                                children: (0, n.jsx)(es.k, {
                                    label: j.intl.string(b.default.GWBCF9),
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
        [r, i] = a.useState(!1),
        s = a.useCallback((e) => i(!(0, ex.t)(l, e)), [l]);
    return null == t
        ? null
        : (0, n.jsxs)(d.B, {
              gap: 8,
              children: [
                  (0, n.jsx)($.d, {
                      label: j.intl.string(b.default["Nf+zrD"]),
                      description: j.intl.string(b.default.heoCNf),
                      checked: t.enabled,
                      disabled: t.pending,
                      onChange: s,
                  }),
                  r || null != t.error
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
    let r = t.updatesPaused;
    return (0, n.jsxs)(d.B, {
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
                })(a, r),
            }),
        ],
    });
}
var ey = t(733791),
    eS = t(167483);
function eC(e) {
    let { projectId: l } = e,
        t = (0, ey.rU)(l);
    if (0 === t.length) return null;
    let a = j.intl.string(b.default.yAZWTm);
    return (0, n.jsxs)(d.B, {
        gap: 8,
        role: "group",
        "aria-label": a,
        children: [
            (0, n.jsx)(f.E, { variant: "body-md/medium", color: "text-strong", children: a }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: j.intl.string(b.default.HlSg2P),
            }),
            t.map((e) => {
                let { guildId: t, guildName: a, isTestServer: r, removeTarget: i } = e;
                return (0, n.jsxs)(
                    d.B,
                    {
                        direction: "horizontal",
                        justify: "space-between",
                        align: "center",
                        role: "group",
                        "aria-label": a,
                        children: [
                            (0, n.jsxs)(d.B, {
                                gap: 0,
                                children: [
                                    (0, n.jsx)(f.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                    r
                                        ? (0, n.jsx)(f.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: j.intl.string(b.default.QyYJ4O),
                                          })
                                        : null,
                                ],
                            }),
                            null != i
                                ? (0, n.jsx)(I.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(b.default.BGF8VT),
                                      onClick: () => {
                                          let e = m.Ay.getProject(l);
                                          null != e && (0, eS.A)({ project: e, target: i, action: "remove" });
                                      },
                                  })
                                : null,
                        ],
                    },
                    t,
                );
            }),
        ],
    });
}
t(938796);
var ek = t(862026),
    eP = t(709753),
    eE = t(961553),
    eA = t(944142),
    ew = t(788493),
    e_ = t(532247),
    eI = t(233470),
    eN = t(426035),
    eT = t(685033),
    eB = t(641655),
    eL = t(246338),
    eR = t(277085),
    eF = t(453430);
let eM = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function ez(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: k,
            note: P,
            notifyAgent: E,
            isPreview: A,
            publishOptions: w,
            transitionState: I,
            onClose: N,
        } = e,
        T = (0, r.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        B = (0, r.bG)([U.A], () => U.A.getModelSettings(l), [l]),
        L = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        F = null != T && (0, m.PV)(T),
        M = null != T && (0, m.jf)(T),
        z = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, el.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
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
                    canChangePreviewApp: E,
                    selectedRoleIds: A,
                    supportsVisibility: w,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: N,
                    checkingAppInGuild: T,
                    saving: B,
                    selectionError: L,
                    saveError: R,
                    experimentalError: F,
                    canSave: M,
                    handleIconChange: z,
                    handleNameChange: U,
                    handleDescriptionChange: H,
                    handleFlagChange: D,
                    handleSharingModeChange: G,
                    handleUsesPreviewAppChange: Z,
                    handleLiveReloadChange: O,
                    handleRoleSelectionChange: J,
                    handleSmartContextChange: W,
                    handleRequireHostApprovalChange: q,
                    submit: Q,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([eA.A], () => eA.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [i, s] = a.useState(null);
                            null != i && l !== i.before && s(null);
                            let u = null != i && l === i.before ? i.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let c = null != l && null != t && t !== u,
                                o = a.useCallback(
                                    () =>
                                        !c ||
                                        null == t ||
                                        (!!(0, ew.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [c, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, e_.oV)(l),
                                changed: c,
                                setChecked: n,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        c = (0, eE.A)(e),
                        { changes: o, commit: d } = c,
                        f = (0, ek.Q)(e),
                        g = f.save,
                        p = (0, eP._t)(e),
                        h = p.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [S, C] = a.useState(null),
                        [k, P] = a.useState(v),
                        [E, A] = a.useState(i?.flags ?? 0),
                        [w, _] = a.useState(() => [...x]),
                        I = (0, eT.A)(e),
                        N = a.useMemo(() => (0, eB.R)(), []),
                        [T, B] = a.useState(null),
                        L = i?.install_scope === "guild" ? (i.guild_id ?? null) : null,
                        [R, F] = a.useState(L);
                    L !== R && (F(L), A(i?.flags ?? 0), _([...x]), B(null), C(null));
                    let M = i?.uses_preview_app,
                        [z, U] = a.useState(null);
                    null != z && z === M && U(null);
                    let [H, D] = a.useState(!1),
                        [G, Z] = a.useState(null),
                        [O, J] = a.useState(null),
                        [W, q] = a.useState(null),
                        [Q, X] = a.useState(null),
                        [K, Y] = a.useState(!1),
                        $ = a.useRef(null),
                        ee = a.useRef(!1),
                        el = k.trim(),
                        et = null != i && (0, eo.IU)(i),
                        en = null != i && "guild" === i.install_scope,
                        ea = en && null != l && (0, eo.RX)(i),
                        { isPublic: er, isGuildCollaboration: ei } = (0, eL.n5)(E),
                        es = T ?? I.shareLinksEnabled,
                        eu = et && null != T && T !== I.shareLinksEnabled,
                        ec = null != i && el !== v,
                        ed = et && E !== (S?.flags ?? i?.flags ?? 0),
                        ef =
                            ea &&
                            ((t = S?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        eg = null != M,
                        ep = z ?? M ?? !1,
                        eh = eg && null != z,
                        em = ec || ed || eu || ef || eh || c.changed,
                        ex = em || s.changed || f.changed || p.changed,
                        { setIcon: eb, setDescription: ej } = c,
                        ev = s.setChecked,
                        ey = f.setChecked,
                        eS = p.setChecked,
                        eC = a.useCallback(
                            (e) => {
                                (eb(e), q(null));
                            },
                            [eb],
                        ),
                        eF = a.useCallback(
                            (e) => {
                                (ej(e), q(null));
                            },
                            [ej],
                        ),
                        eM = a.useCallback((e) => {
                            (P(e), Z(null), q(null));
                        }, []),
                        ez = a.useCallback((e, l) => {
                            (A((t) => (l ? t | e : t & ~e)), J(null), q(null));
                        }, []),
                        eU = a.useCallback((e) => {
                            (A((l) => ("public" === e ? l | eo.Zh.PUBLIC : l & ~eo.Zh.PUBLIC)),
                                B("public" === e ? null : "link" === e),
                                q(null));
                        }, []),
                        eH = a.useCallback((e) => {
                            (U(e), q(null));
                        }, []),
                        eD = a.useCallback(
                            (e) => {
                                (ev(e), q(null));
                            },
                            [ev],
                        ),
                        eG = a.useCallback(async () => {
                            if (null == i || null == l || null == i.preview_application_id || $.current === l)
                                return !0;
                            if (ee.current) return !1;
                            ((ee.current = !0), Y(!0));
                            try {
                                let e = await (0, eN.cC)(i, l);
                                if (!1 !== e) return (!0 === e && ($.current = l), !0);
                                await (0, V.vL)(i.id, l);
                                let t = (await (0, eN.cC)(i, l)) === !0;
                                return (t && ($.current = l), t);
                            } finally {
                                ((ee.current = !1), Y(!1));
                            }
                        }, [l, i]),
                        eZ = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void J(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (_(e), J(null), q(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eG()) && l();
                                } catch {}
                            },
                            [eG, w],
                        ),
                        eO = a.useCallback(
                            (e) => {
                                (ey(e), X(null));
                            },
                            [ey],
                        ),
                        eV = a.useCallback(
                            (e) => {
                                (eS(e), X(null));
                            },
                            [eS],
                        ),
                        eJ = a.useCallback(async () => {
                            if (null == i || !ex || H) return null;
                            let t = ec ? (0, eR.p)(el) : null;
                            if (null != t) return (Z(t), "project");
                            let n = { ...o };
                            (ec && (n.name = el),
                                ed && (n.flags = E),
                                eu && (n.share_links_enabled = T),
                                ef && (n.collaborator_role_ids = [...w].sort()),
                                eh && (n.uses_preview_app = ep),
                                null == i.guild_id && null != l && (ef || (ed && ei)) && (n.guild_id = l),
                                D(!0),
                                q(null),
                                X(null));
                            try {
                                if (
                                    (em &&
                                        (await (0, eI.CW)(e, n),
                                        y(el),
                                        C({ flags: E, roleIds: [...w] }),
                                        null != T && I.setShareLinksEnabled(T),
                                        B(null),
                                        d()),
                                    !u())
                                )
                                    return (q(j.intl.string(b.default.XzkNBw)), "project");
                                if (!g() || !h()) return (X(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (q(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                D(!1);
                            }
                        }, [d, E, ed, l, ex, o, ei, ec, eh, ep, i, e, em, ef, h, u, g, H, w, I, eu, T, el]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: p,
                        name: k,
                        nameError: G,
                        nameChanged: ec,
                        sharingMode: er ? "public" : null == es ? null : es ? "link" : "collaborators",
                        sharingOptions: N,
                        canChangeSharing: et && (null != I.shareLinksEnabled || I.loadFailed),
                        isGuildCollaboration: ei,
                        usesPreviewApp: ep,
                        canChangePreviewApp: eg,
                        selectedRoleIds: w,
                        supportsVisibility: et,
                        supportsCollaboration: en,
                        supportsCollaboratorRoles: ea,
                        checkingAppInGuild: K,
                        saving: H,
                        selectionError: O,
                        saveError: W,
                        experimentalError: Q,
                        canSave: ex && "" !== el,
                        handleIconChange: eC,
                        handleNameChange: eM,
                        handleDescriptionChange: eF,
                        handleFlagChange: ez,
                        handleSharingModeChange: eU,
                        handleUsesPreviewAppChange: eH,
                        handleLiveReloadChange: eD,
                        handleRoleSelectionChange: eZ,
                        ensureAppInGuild: eG,
                        handleSmartContextChange: eO,
                        handleRequireHostApprovalChange: eV,
                        submit: eJ,
                    };
                })(e, l),
                X = B || t,
                K = (0, em.AJ)(e),
                Y = a.useMemo(
                    () =>
                        S.map((e) => {
                            let { value: l, label: t } = e;
                            return { id: l, value: l, label: t };
                        }),
                    [S],
                );
            return {
                fields: (0, n.jsxs)(d.B, {
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
                                  onIconChange: z,
                                  name: h,
                                  nameError: x,
                                  onNameChange: U,
                                  description: c,
                                  onDescriptionChange: H,
                                  disabled: X,
                              }),
                        w && !K
                            ? (0, n.jsx)(_.l, {
                                  selectionMode: "single",
                                  label: j.intl.string(b.default.jDBYrs),
                                  options: Y,
                                  value: y ?? void 0,
                                  disabled: X || !C,
                                  onSelectionChange: G,
                                  layout: "horizontal-responsive",
                                  fullWidth: !0,
                                  fitContent: !0,
                              })
                            : null,
                        t ? null : (0, n.jsx)(eb, { projectId: e }),
                        w && I
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: k,
                                  disabled: X,
                                  onChange: (e) => D(eo.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        E
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.DV2hcV),
                                  description: j.intl.string(b.default.yjWIzb),
                                  checked: P,
                                  disabled: X,
                                  onChange: Z,
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: X,
                                  onChange: O,
                              })
                            : null,
                        N
                            ? (0, n.jsxs)(d.B, {
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
                                          value: A,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: X || !k || T,
                                          "aria-invalid": null != L,
                                          "aria-errormessage": null != L ? s : void 0,
                                          onSelectionChange: J,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: A.length,
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
                        t ? null : (0, n.jsx)(eC, { projectId: e }),
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
                experimentalFields: (0, n.jsxs)(d.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)($.d, {
                            label: j.intl.string(b.default["4liZ45"]),
                            description: j.intl.string(b.default.I5cl7p),
                            checked: g.checked,
                            disabled: B,
                            onChange: W,
                        }),
                        (0, n.jsx)($.d, {
                            label: j.intl.string(b.default.mpjaVm),
                            description: j.intl.string(b.default["2PxChh"]),
                            checked: p.checked,
                            disabled: B,
                            onChange: q,
                        }),
                        (0, n.jsx)(et.u, { projectId: e }),
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
                saving: B,
                nameChanged: v,
                submit: Q,
            };
        })(l, T?.guild_id ?? t ?? void 0, { readOnly: !F }),
        H = (function (e, l) {
            let [t, n] = a.useState(e),
                [i, s] = a.useState(v),
                [u, c] = a.useState(y),
                [o, d] = a.useState(S),
                [f, g] = a.useState(!1),
                [p, h] = a.useState(!1);
            t !== e && (n(e), s(v), c(y), d(S), g(!1), h(!1));
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
                            (s(l.callers), d({ live: !0 === l.live, hasPreview: !1 !== l.has_preview }));
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
            let P = (0, r.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                E = (0, r.cf)(
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
                A = a.useMemo(
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    E[l]?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [i, E, u],
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
                callers: i,
                targets: u,
                projects: E,
                names: A,
                failed: f,
                saved: p,
                setBuild: w,
                remove: _,
            };
        })(l, M),
        [D, G] = a.useState(null);
    return (0, n.jsx)(K.A, {
        projectId: l,
        scopeKeys: k,
        note: P,
        notifyAgent: E,
        isPreview: A,
        children: (e) => {
            let t = [];
            ((F || M) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                B?.tierSettings != null && t.push("model"),
                (H.callers.length > 0 || H.targets.length > 0) && t.push("linked"),
                F && t.push("experimental"));
            let a = [D, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                h = !F && !r && !t.includes("app") && !t.includes("secrets"),
                x = (F && z.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && z.canSave }),
                y = j.intl.string(r ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && G("app");
                        return;
                    }
                    let s = !r && F && z.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !F ? null : z.submit });
                    if (u.saved) {
                        (await N(),
                            s &&
                                null != w &&
                                (function (e, l) {
                                    let t = m.Ay.getProject(e);
                                    if (null == t || !(0, V.qF)(t)) return;
                                    let n = Z.A.getPublishStatus(e);
                                    null != n &&
                                        (0, O.lE)(n.publishState) &&
                                        (0, i.A)({
                                            title: j.intl.string(b.default["48pvCR"]),
                                            subtitle: j.intl.string(b.default["Xk+JsJ"]),
                                            confirmText: j.intl.string(b.default.guoHDk),
                                            cancelText: j.intl.string(b.default.HSyPrY),
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
                                    : (0, n.jsx)(o.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => G(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(o.V.Item, { id: e, children: j.intl.string(eM[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(d.B, {
                                          gap: 24,
                                          className: eF.f,
                                          children: [z.fields, (0, n.jsx)(X, { projectId: l, canEdit: M }, l)],
                                      }),
                                r || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(R, {
                                          linkedApps: H,
                                          onOpenSettings: (e) => {
                                              (N(), (0, Y.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                r || "experimental" !== a ? null : z.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || B?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eU, { projectId: l, modelSettings: B, tierSettings: B.tierSettings }),
                                r || null != a
                                    ? null
                                    : L
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(b.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eF.L, children: (0, n.jsx)(g.y, {}) }),
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
function eU(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, H.X)(l, e), [l]),
        [c, o] = (0, D.A)(i, u);
    return (0, n.jsx)(G.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: o });
}
