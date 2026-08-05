n.d(t, { A: () => eP });
var s,
    l = n(477900),
    a = n(582128),
    r = n(948230),
    i = n(998939),
    c = n(17928),
    o = n(289873),
    d = n(821609),
    u = n(323384),
    m = n(834730),
    h = n(113854),
    p = n(91242),
    f = n(297264),
    g = n(956518),
    x = n(627363),
    v = n(869146),
    j = n(165610),
    _ = n(207371),
    E = n(652215),
    A =
        (((s = {}).Loading = "loading"),
        (s.AwaitingLaunch = "awaiting-launch"),
        (s.Launched = "launched"),
        (s.RenderingElsewhere = "rendering-elsewhere"),
        (s.Blocked = "blocked"),
        (s.NoApplication = "no-application"),
        (s.DoesNotSupportSurface = "does-not-support-surface"),
        (s.Error = "error"),
        s),
    N = n(503698),
    k = n.n(N),
    b = n(612749);
function y(e) {
    let { title: t, body: n, wide: s = !1, children: a } = e;
    return (0, l.jsxs)("div", {
        className: k()(b.Bf, s && b.Qx),
        children: [
            (0, l.jsxs)("div", {
                className: b.Ux,
                children: [
                    (0, l.jsx)(f.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, l.jsx)(m.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var w = n(818085),
    S = n(375708),
    T = n(616694);
function R(e) {
    let { applicationId: t, surface: n } = e,
        s = (0, c.bG)([p.A], () => p.A.getMainFrame()),
        r = null != s && s.applicationId !== t,
        { state: i } = (function (e) {
            let { applicationId: t, surface: n, blockLaunch: s = !1 } = e,
                {
                    frameId: l,
                    surface: r,
                    frame: i,
                    state: o,
                    setFailed: d,
                } = (function (e) {
                    let t,
                        { applicationId: n, surface: s, blockLaunch: l } = e,
                        r = a.useMemo(() => (0, j.VA)(n, s), [n, s]),
                        i = a.useMemo(() => s, [r]),
                        o = (0, c.bG)([p.A], () => p.A.getFrame(r), [r]),
                        d = (0, c.bG)(
                            [v.A, p.A],
                            () => v.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && p.A.getMainFrame()?.id === r,
                            [r],
                        ),
                        { data: u, isLoading: m } = (0, x.YY)(n),
                        h = (0, _.x)(u),
                        f = null != (0, g.Ay)(n),
                        [A, N] = a.useState(null),
                        k = A === r,
                        b = a.useCallback(() => N(r), [r]);
                    return (
                        (t = (0, j.x1)(o)
                            ? d
                                ? "rendering-elsewhere"
                                : "launched"
                            : k
                              ? "error"
                              : o?.state === "loading" || m
                                ? "loading"
                                : null != u && f
                                  ? h
                                      ? l
                                          ? "blocked"
                                          : "awaiting-launch"
                                      : "does-not-support-surface"
                                  : "no-application"),
                        { frameId: r, surface: i, frame: o, state: t, setFailed: b }
                    );
                })({ applicationId: t, surface: n, blockLaunch: s });
            return (
                a.useEffect(() => {
                    "awaiting-launch" === o && e();
                    async function e() {
                        try {
                            await h.A.launchFrame({ applicationId: t, surface: r });
                        } catch {
                            d();
                        }
                    }
                }, [o, t, r, d]),
                a.useEffect(
                    () => () => {
                        h.A.stopFrame(l);
                    },
                    [l],
                ),
                { frame: i, state: o }
            );
        })({ applicationId: t, surface: n, blockLaunch: r });
    switch (i) {
        case A.Launched:
            return null;
        case A.RenderingElsewhere:
            return (0, l.jsx)("div", {
                className: T.q,
                children: (0, l.jsx)(y, {
                    title: S.intl.string(w.default["4f6Vkr"]),
                    body: S.intl.string(w.default.LJ2q1H),
                }),
            });
        case A.NoApplication:
            return (0, l.jsxs)("div", {
                className: T.q,
                children: [
                    (0, l.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.intl.string(w.default["6xTawd"]),
                    }),
                ],
            });
        case A.DoesNotSupportSurface:
            return (0, l.jsx)("div", {
                className: T.q,
                children: (0, l.jsx)(y, {
                    title: S.intl.string(w.default.FHOJiH),
                    body: S.intl.string(w.default["1yLQoV"]),
                }),
            });
        case A.Error:
            return (0, l.jsxs)("div", {
                className: T.q,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.string(w.default.MeLWCr),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: T.t,
                        children: S.intl.string(w.default["1RCbQT"]),
                    }),
                ],
            });
        case A.Blocked:
            return (0, l.jsxs)("div", {
                className: T.q,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.string(w.default.MHvjVv),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: T.t,
                        children: S.intl.string(w.default.TIbJ5p),
                    }),
                ],
            });
        case A.AwaitingLaunch:
        case A.Loading:
            return (0, l.jsx)("div", { className: T.q, children: (0, l.jsx)(o.y, {}) });
    }
}
var I = n(407663);
function C(e) {
    let { src: t } = e;
    return (0, l.jsx)("iframe", {
        src: t,
        title: S.intl.string(w.default["bTjP+Y"]),
        className: I.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var P = n(208137),
    O = n(972786),
    L = n(668917);
function D(e) {
    let { applicationId: t, surface: n, previewReady: s, previewGate: r } = e,
        f = (0, c.bG)([O.A, i.Ay], () => {
            if (null == t || null == (0, P.V)()) return null;
            let e = O.A.getAllProjects().find((e) => e.application_id === t || e.preview_application_id === t);
            if (null == e) return null;
            let n = i.Ay.getPreviewTs(e.id);
            return (0, P.s)(e, t, n);
        }, [t]),
        g = (0, c.bG)([p.A], () => (null == t ? void 0 : p.A.getFrameBySurface(t, n)), [t, n]);
    return (a.useEffect(() => {
        r?.type === "permissions" && null != g && h.A.stopFrame(g.id);
    }, [g, r?.type]),
    r?.type === "checking")
        ? (0, l.jsx)("div", { className: L.q, children: (0, l.jsx)(o.y, {}) })
        : r?.type === "permissions"
          ? (0, l.jsx)("div", {
                className: L.q,
                children: (0, l.jsx)(y, {
                    wide: !0,
                    title: S.intl.string(w.default.DYwf2n),
                    body: S.intl.string(w.default.WWj3pN),
                    children: (0, l.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: S.intl.string(w.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null != f
                ? (0, l.jsx)(C, { src: f }, f)
                : null != t
                  ? (0, l.jsx)(R, { applicationId: t, surface: n })
                  : null
            : (0, l.jsxs)("div", {
                  className: L.q,
                  children: [
                      (0, l.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, l.jsx)(m.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(w.default["6xTawd"]),
                      }),
                  ],
              });
}
var B = n(689175),
    G = n(783791),
    H = n(826745),
    M = n(559647),
    V = n(17117);
function F(e) {
    let { canSend: t, onSend: n, onApprove: s } = e,
        [r, i] = a.useState(""),
        c = a.useCallback(() => {
            "" !== r.trim() && t && (n(r), i(""));
        }, [r, t, n]),
        o = a.useCallback(
            (e) => {
                e.preventDefault(), c();
            },
            [c],
        ),
        d = a.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != s && (e.preventDefault(), s());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), c());
            },
            [c, s],
        );
    return (0, l.jsxs)("form", {
        onSubmit: o,
        className: V.DA,
        children: [
            (0, l.jsx)(H.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? S.intl.string(w.default.ahRdoJ) : S.intl.string(w.default.nm4w9P),
                disabled: !t,
                "aria-label": S.intl.string(w.default.OPr66w),
                rows: 1,
                className: V.jp,
            }),
            (0, l.jsxs)("div", {
                className: V.fF,
                children: [
                    (0, l.jsx)("div", { className: V.MT }),
                    (0, l.jsx)("button", {
                        type: "submit",
                        className: V.rt,
                        disabled: !t || "" === r.trim(),
                        "aria-label": S.intl.string(w.default["22GHMt"]),
                        children: (0, l.jsx)(M.l, { size: "xs", color: "currentColor", className: V.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073);
var U = n(847374),
    W = n(320448),
    z = n(939249),
    q = n(46054),
    Z = n(84206);
function $(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("section", {
              className: Z.hb,
              children: [
                  (0, l.jsx)(m.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, l.jsx)("div", {
                      className: Z.Hu,
                      children: n.map((e) =>
                          (0, l.jsx)(
                              "span",
                              {
                                  className: Z.uR,
                                  children: (0, l.jsx)(m.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e
                                          .split("_")
                                          .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                          .join(" "),
                                  }),
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
function Y(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, l.jsxs)("article", {
        className: Z.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, l.jsxs)("header", {
                className: Z.pu,
                children: [
                    (0, l.jsx)(m.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: S.intl.string(w.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, l.jsx)("span", {
                              className: Z.dr,
                              children: (0, l.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: S.intl.string(S.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, l.jsxs)("section", {
                      className: Z.hb,
                      children: [
                          (0, l.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: S.intl.string(w.default.KLyB8Y),
                          }),
                          (0, l.jsx)("ul", {
                              className: Z.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: Z.H6,
                                          children: [
                                              (0, l.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: Z.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, l.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            t.commands.length > 0
                ? (0, l.jsxs)("section", {
                      className: Z.hb,
                      children: [
                          (0, l.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: S.intl.string(S.t["0hKkS+"]),
                          }),
                          (0, l.jsx)("ul", {
                              className: Z.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: Z.Xs,
                                          children: [
                                              (0, l.jsxs)(m.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, l.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            (0, l.jsx)($, { label: S.intl.string(w.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, l.jsx)($, { label: S.intl.string(w.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, l.jsxs)("div", {
                      className: Z.nc,
                      children: [
                          (0, l.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: S.intl.string(w.default.GYoWRk),
                          }),
                          (0, l.jsx)(m.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: Z.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var J = n(700766),
    K = n(742715);
let Q = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function X(e) {
    let { steps: t, announcement: n, content: s, proposal: r, onApprove: i } = e,
        c = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let n of e) {
                        let e = (function (e) {
                                let t = [];
                                if ("planned" === e.kind) {
                                    let n = (e.commands ?? []).map((e) => "/" + e.name).join(", ");
                                    "" !== n && t.push(n);
                                }
                                return (
                                    null != e.name && "" !== e.name && t.push(e.name),
                                    null != e.detail && "" !== e.detail && t.push(e.detail),
                                    null != e.message && "" !== e.message && t.push(e.message),
                                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                                    t
                                );
                            })(n),
                            s = t[t.length - 1];
                        if ("writing_command" === n.kind && (null == n.friendly || "" === n.friendly) && null != s) {
                            s.technical.push(...e);
                            continue;
                        }
                        let l = (function (e) {
                                switch (e.kind) {
                                    case "planning":
                                        return S.intl.string(w.default["0ce6LB"]);
                                    case "planned":
                                        return S.intl.formatToPlainString(w.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return S.intl.string(w.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? S.intl.string(w.default.nv6pUM);
                                    case "assembling":
                                        return S.intl.string(w.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return S.intl.string(w.default.VZuRug);
                                    case "building":
                                        return S.intl.string(w.default["s+ylXP"]);
                                    case "bundling":
                                        return S.intl.string(w.default.rEQlMx);
                                    case "committing":
                                        return S.intl.string(w.default.Yvyw1H);
                                    case "built":
                                        return S.intl.string(w.default.hOcVAj);
                                    case "build_error":
                                        return S.intl.string(w.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return S.intl.string(w.default.sz8yAj);
                                    case "preview_connecting":
                                        return S.intl.string(w.default.pOYDEc);
                                    case "awaiting_auth":
                                        return S.intl.string(w.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return S.intl.string(w.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return S.intl.string(w.default.FUWbq1);
                                    case "deploying":
                                        return S.intl.string(w.default.wcXX8Z);
                                    case "preview_ready":
                                        return S.intl.string(w.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return S.intl.string(w.default.j3hBoA);
                                    default:
                                        return S.intl.string(w.default.nv6pUM);
                                }
                            })(n),
                            a = e.filter((e) => e !== l);
                        if (null != s && s.summary === l) {
                            s.technical.push(...a);
                            continue;
                        }
                        t.push({ step: n, summary: l, technical: a });
                    }
                    return t;
                })(t),
            [t],
        );
    return (0, l.jsxs)("div", {
        className: J.ue,
        children: [
            null != n && "" !== n
                ? (0, l.jsx)(m.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: J.Xt,
                      children: n,
                  })
                : null,
            c.length > 0
                ? (0, l.jsx)("ol", { className: J.dO, children: c.map((e, t) => (0, l.jsx)(ee, { group: e }, t)) })
                : null,
            null != r
                ? (0, l.jsx)(Y, { proposal: r, onApprove: i })
                : "" !== s
                  ? (0, l.jsx)("div", {
                        className: J.ky,
                        children: (0, l.jsx)("div", {
                            className: k()(K.PT, J.cW),
                            children: q.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function ee(e) {
    var t;
    let { group: n } = e,
        [s, r] = a.useState(!1),
        i = a.useId(),
        c = a.useCallback(() => r((e) => !e), []),
        o =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: J.Dx,
            children: (0, l.jsx)(m.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: o,
                selectable: !0,
                className: J.iq,
                children: n.summary,
            }),
        });
    let d = s ? U.a : W._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: J.Dx,
        children: [
            (0, l.jsxs)(z.D, {
                tag: "div",
                className: J.kG,
                "aria-expanded": s,
                "aria-controls": i,
                "aria-label": S.intl.formatToPlainString(w.default.z4KWsN, { step: n.summary }),
                onClick: c,
                children: [
                    (0, l.jsx)(m.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: o,
                        className: J.iq,
                        children: n.summary,
                    }),
                    (0, l.jsx)(d, { size: "xs", color: "currentColor", className: J.Ue }),
                ],
            }),
            (0, l.jsx)("div", {
                id: i,
                hidden: !s,
                className: J.yJ,
                children: n.technical.map((e, t) =>
                    (0, l.jsx)(
                        m.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var et = n(289149),
    en = n(692228);
function es(e) {
    let { messages: t, onApprove: n } = e,
        s = t[t.length - 1];
    return (0, l.jsx)("ol", {
        className: et.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, l.jsx)(
                    el,
                    {
                        role: "user",
                        children: (0, l.jsx)("div", {
                            className: k()(et.B2, en.XR),
                            children: (0, l.jsx)(m.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !Q.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, l.jsx)(
                      el,
                      {
                          role: "assistant",
                          children: (0, l.jsx)(X, {
                              steps: t,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === s ? n : void 0,
                          }),
                      },
                      e.id,
                  );
        }),
    });
}
function el(e) {
    let { role: t, children: n } = e;
    return (0, l.jsx)("li", { "data-role": t, className: et.xk, children: n });
}
var ea = n(863610),
    er = n(673724),
    ei = n(922016),
    ec = n(885574),
    eo = n(677175);
function ed(e) {
    return e.toLocaleString();
}
function eu(e) {
    let { label: t, usage: n } = e;
    return (0, l.jsxs)("div", {
        className: eo.Q$,
        children: [
            (0, l.jsxs)("div", {
                className: eo.mf,
                children: [
                    (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, l.jsxs)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ed((0, er.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, l.jsxs)(m.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ed(n.input_tokens),
                    " in \xb7 ",
                    ed(n.output_tokens),
                    " out \xb7 ",
                    ed(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    ed(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function em(e) {
    let { project: t } = e,
        n = (0, er.wV)(t.orchestrator, t.codegen);
    return (0, l.jsxs)("div", {
        className: eo.si,
        role: "dialog",
        "aria-label": S.intl.string(w.default["9yoLWZ"]),
        children: [
            (0, l.jsx)("div", {
                className: eo.Q$,
                children: (0, l.jsxs)("div", {
                    className: eo.mf,
                    children: [
                        (0, l.jsxs)(m.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ed((0, er.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, l.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(eu, { label: S.intl.string(w.default.hk4jJr), usage: t.orchestrator }),
            (0, l.jsx)(eu, { label: S.intl.string(w.default.R9aduM), usage: t.codegen }),
            (0, l.jsxs)("div", {
                className: eo.mf,
                children: [
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.intl.string(w.default["kILb+R"]),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, er.sj)(n) ? "\u2014" : `${Math.round(100 * (0, er.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, l.jsx)(ei.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, l.jsx)(em, { project: t }),
        children: (e) =>
            (0, l.jsx)(z.D, {
                innerRef: n,
                className: eo.Y$,
                "aria-label": S.intl.string(w.default.AWQ2ZV),
                ...e,
                children: (0, l.jsx)(ec.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var ep = n(154861);
function ef(e) {
    switch (e) {
        case "open":
            return S.intl.string(w.default.cLhFMi);
        case "connecting":
            return S.intl.string(w.default.W7oyuf);
        case "failed":
            return S.intl.string(w.default.eE60xI);
        case "closed":
            return S.intl.string(w.default["yBmS+I"]);
    }
}
function eg(e) {
    let { thinking: t, projectUsage: n, connState: s } = e;
    return (0, l.jsxs)("div", {
        className: ep.jf,
        children: [
            (0, l.jsx)("div", {
                className: ep.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, l.jsxs)("div", {
                          className: ep.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": S.intl.string(w.default.C0t6bp),
                          children: [
                              (0, l.jsx)(ea.n, { dotRadius: 3.5, themed: !0 }),
                              (0, l.jsx)(m.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: S.intl.string(w.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, l.jsxs)("span", {
                      className: ep.BP,
                      children: [
                          (0, l.jsx)(m.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": S.intl.formatToPlainString(w.default["7SZZvj"], {
                                  runes: (0, er.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: S.intl.formatToPlainString(w.default["4PFO2p"], {
                                  runes: (0, er.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, l.jsx)(eh, { project: n }),
                      ],
                  }),
            (0, l.jsx)(m.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === s ? "text-feedback-positive" : "failed" === s ? "text-feedback-critical" : "text-muted",
                "aria-label": S.intl.formatToPlainString(w.default.eDDdhB, { status: ef(s) }),
                "data-vibegrations-conn": !0,
                "data-state": s,
                className: ep.XF,
                children: ef(s),
            }),
        ],
    });
}
var ex = n(506774),
    ev = n(192308),
    ej = n(651649),
    e_ = n(670455);
let eE = "shownVibegrationsFeedbackProjectIds";
var eA = n(104071);
function eN(e) {
    let { projectId: t } = e,
        s = (0, c.bG)([G.A], () => G.A.getMessages(t), [t]),
        r = (0, c.bG)([i.Ay], () => i.Ay.getConnState(t), [t]),
        o = (0, c.bG)([G.A], () => G.A.getProjectUsage(t), [t]),
        d = a.useRef(null),
        u = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && u.current?.scrollToBottom();
    }, [s]);
    let h = a.useCallback(() => {
        let e = u.current;
        null != e && (m.current = 32 > e.getDistanceFromBottom());
    }, []);
    a.useLayoutEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            s = new ResizeObserver((s) => {
                let [l] = s,
                    a = l?.contentRect.width ?? e.getBoundingClientRect().width;
                a === t ||
                    ((t = a),
                    m.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => u.current?.scrollToBottom()))));
            });
        return (
            s.observe(e),
            () => {
                s.disconnect(), null != n && cancelAnimationFrame(n);
            }
        );
    }, []),
        a.useEffect(() => {
            (0, i.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () =>
                (function (e) {
                    let t = G.A.getMessages(e).filter((e) => "assistant" === e.role && (0, G.B)(e)).length;
                    !(t < 3) &&
                        ((ex.w.get(eE) ?? []).includes(e) ||
                            ej.A.possiblyShowFeedbackModal(e_.MW.VIBEGRATIONS, () => {
                                let s;
                                (s = ex.w.get(eE) ?? []).includes(e) || ex.w.set(eE, [...s, e]),
                                    (0, ev.openModalLazy)(async () => {
                                        let { default: s } = await Promise.all([
                                            n.e("4079"),
                                            n.e("22255"),
                                            n.e("55925"),
                                            n.e("40794"),
                                            n.e("37381"),
                                            n.e("47004"),
                                            n.e("41676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, l.jsx)(s, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let p = a.useCallback(
            (e) => {
                (0, i.dv)(t, e);
            },
            [t],
        ),
        f = a.useCallback(() => p(S.intl.string(w.default.Jj8Ftb)), [p]),
        g = "open" === r,
        x = s[s.length - 1],
        v = null != x && "assistant" === x.role && null != x.proposal,
        j = null != x && "assistant" === x.role && !(0, G.B)(x),
        _ = v && g ? f : void 0;
    return (0, l.jsxs)("section", {
        ref: d,
        "data-vibegrations-chat": !0,
        className: eA.T,
        children: [
            (0, l.jsx)(B.Ch, {
                ref: u,
                onScroll: h,
                "data-vibegrations-chat-log": !0,
                className: eA.N,
                children: (0, l.jsx)(es, { messages: s, onApprove: _ }),
            }),
            (0, l.jsx)(eg, { thinking: j, projectUsage: o, connState: r }),
            (0, l.jsx)(F, { canSend: g, onSend: p, onApprove: _ }),
        ],
    });
}
var ek = n(435558),
    eb = n(661531),
    ey = n(602853),
    ew = n(517461),
    eS = n(761929),
    eT = n(552067);
function eR(e) {
    let { open: t, maxWidth: n, onWidthChange: s, children: r } = e,
        i = (0, ey.r)(eb.A.modules.chat.RESIZE_HANDLE_WIDTH),
        c = a.useRef(null),
        [o, d] = (0, ew.V)("VibegrationsChatSidebarWidth", 460),
        [u, m] = a.useState(o ?? 460),
        h = (0, ek.clamp)(u, 360, n);
    a.useLayoutEffect(() => {
        s(t ? h + i : 0);
    }, [h, t, i, s]);
    let p = (0, eS.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: c,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: eS.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, l.jsxs)("div", {
        className: eT.pz,
        hidden: !t,
        children: [
            (0, l.jsx)("div", { className: eT.Di, onPointerDown: f }),
            (0, l.jsx)("div", { ref: c, className: eT.kL, style: { width: h }, children: r }),
        ],
    });
}
function eI(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([G.A], () => G.A.isThinking(t), [t]);
    return (0, l.jsx)("div", { className: en.MP, "data-active": n, "aria-hidden": !0 });
}
var eC = n(291815);
function eP(e) {
    let { projectId: t, applicationId: n, surface: s, chatOpen: c, previewReady: o, previewGate: d } = e,
        u = a.useRef(null),
        [m, h] = a.useState(0);
    a.useLayoutEffect(() => {
        if (s.type === j.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, s.type]),
        a.useEffect(() => {
            null != t && (0, i.Hc)(t);
        }, [t]),
        a.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && h(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        a.useEffect(() => () => (0, r.Zq)(0), []);
    let p = Math.max(360, m - 320),
        f = c || s.type === j.U4.MAIN;
    return (0, l.jsxs)("div", {
        ref: u,
        className: eC.LB,
        children: [
            (0, l.jsx)("div", {
                className: eC.fm,
                children: (0, l.jsx)(D, { applicationId: n, surface: s, previewReady: o, previewGate: d }),
            }),
            null != t && f
                ? (0, l.jsx)(eR, {
                      open: c,
                      maxWidth: p,
                      onWidthChange: r.Zq,
                      children: (0, l.jsxs)("div", {
                          className: eC.cO,
                          children: [(0, l.jsx)(eI, { projectId: t }), (0, l.jsx)(eN, { projectId: t }, t)],
                      }),
                  })
                : null,
        ],
    });
}
