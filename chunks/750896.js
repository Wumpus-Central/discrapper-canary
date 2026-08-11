n.d(t, { A: () => eD });
var l,
    i = n(477900),
    s = n(582128),
    a = n(948230),
    r = n(998939),
    o = n(289873),
    c = n(821609),
    d = n(323384),
    u = n(834730),
    h = n(580954),
    p = n(672929),
    m = n(297264),
    g = n(812901),
    f = n(609636),
    x = n(17928),
    v = n(956518),
    j = n(627363),
    _ = n(869146),
    b = n(625180),
    E = n(91242),
    k = n(207371),
    A = n(165610),
    N = n(652215),
    S =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    w = n(503698),
    y = n.n(w),
    T = n(612749);
function C(e) {
    let { title: t, body: n, wide: l = !1, children: s } = e;
    return (0, i.jsxs)("div", {
        className: y()(T.Bf, l && T.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            s,
        ],
    });
}
var R = n(818085),
    I = n(375708),
    M = n(616694);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: a } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: i,
                    lifecycle: a,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = s.useMemo(() => (0, A.VA)(t, n), [t, n]),
                        i = s.useMemo(() => n, [l]),
                        a = (0, x.bG)([E.A], () => E.A.getFrame(l), [l]),
                        r = (0, x.bG)(
                            [_.A, E.A],
                            () => _.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) && E.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, j.YY)(t),
                        d = (0, k.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, p] = s.useState(null),
                        m = h === l;
                    return {
                        surface: i,
                        setFailed: s.useCallback(() => p(l), [l]),
                        lifecycle: (0, A.x1)(a)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: a }
                            : m
                              ? { state: "error" }
                              : a?.state === "loading"
                                ? { state: "loading", frame: a }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: r } = a;
            return (
                s.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await b.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            i();
                        }
                    }
                }, [r, t, l, i]),
                a
            );
        })({ applicationId: t, surface: n }),
        r = s.useMemo(() => (0, A.VA)(t, n), [t, n]);
    switch (
        (s.useEffect(() => {
            if ((0, A.Yf)(n) === A.sV.MAIN) return () => (0, h.A)().leaveFrame(r);
        }, [r, n]),
        a)
    ) {
        case S.Launched:
            return (0, i.jsx)(f.A, { frameId: l.id, level: g.A.WithinAppContent, className: M.Z7 });
        case S.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: M.qs,
                children: (0, i.jsx)(C, {
                    title: I.intl.string(R.default["4f6Vkr"]),
                    body: I.intl.string(R.default.LJ2q1H),
                }),
            });
        case S.NoApplication:
            return (0, i.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, i.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["6xTawd"]),
                    }),
                ],
            });
        case S.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: M.qs,
                children: (0, i.jsx)(C, {
                    title: I.intl.string(R.default.FHOJiH),
                    body: I.intl.string(R.default["1yLQoV"]),
                }),
            });
        case S.Error:
            return (0, i.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, i.jsx)(m.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.string(R.default.MeLWCr),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: M.tj,
                        children: I.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case S.AwaitingLaunch:
        case S.Loading:
            return (0, i.jsx)("div", { className: M.qs, children: (0, i.jsx)(o.y, {}) });
    }
}
var P = n(407663);
function G(e) {
    let { src: t } = e;
    return (0, i.jsx)("iframe", {
        src: t,
        title: I.intl.string(R.default["bTjP+Y"]),
        className: P.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var L = n(208137),
    D = n(972786),
    B = n(668917);
function H(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: a } = e,
        m = (0, x.bG)([D.A, r.Ay], () => {
            if (null == t || null == (0, L.V)()) return null;
            let e = D.A.getAllProjects().find((e) => e.application_id === t || e.preview_application_id === t);
            if (null == e) return null;
            let n = r.Ay.getPreviewTs(e.id);
            return (0, L.s)(e, t, n);
        }, [t]),
        g = (0, p.A)(t, n);
    return (s.useEffect(() => {
        a?.type === "permissions" && null != g && (0, h.A)().leaveFrame(g.id);
    }, [g, a?.type]),
    a?.type === "checking")
        ? (0, i.jsx)("div", { className: B.q, children: (0, i.jsx)(o.y, {}) })
        : a?.type === "permissions"
          ? (0, i.jsx)("div", {
                className: B.q,
                children: (0, i.jsx)(C, {
                    wide: !0,
                    title: I.intl.string(R.default.DYwf2n),
                    body: I.intl.string(R.default.WWj3pN),
                    children: (0, i.jsx)(c.$, {
                        variant: "primary",
                        size: "md",
                        text: I.intl.string(R.default["CRfE/E"]),
                        onClick: a.onReviewPermissions,
                        loading: a.loading,
                    }),
                }),
            })
          : l
            ? null != m
                ? (0, i.jsx)(G, { src: m }, m)
                : null != t
                  ? (0, i.jsx)(O, { applicationId: t, surface: n })
                  : null
            : (0, i.jsxs)("div", {
                  className: B.q,
                  children: [
                      (0, i.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, i.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(R.default["6xTawd"]),
                      }),
                  ],
              });
}
var V = n(689175),
    W = n(783791),
    F = n(826745),
    U = n(559647),
    z = n(17117);
function Z(e) {
    let { canSend: t, onSend: n, onApprove: l } = e,
        [a, r] = s.useState(""),
        o = s.useCallback(() => {
            "" !== a.trim() && t && (n(a), r(""));
        }, [a, t, n]),
        c = s.useCallback(
            (e) => {
                e.preventDefault(), o();
            },
            [o],
        ),
        d = s.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != l && (e.preventDefault(), l());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), o());
            },
            [o, l],
        );
    return (0, i.jsxs)("form", {
        onSubmit: c,
        className: z.DA,
        children: [
            (0, i.jsx)(F.y, {
                value: a,
                onChange: (e) => r(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? I.intl.string(R.default.ahRdoJ) : I.intl.string(R.default.nm4w9P),
                disabled: !t,
                "aria-label": I.intl.string(R.default.OPr66w),
                rows: 1,
                className: z.jp,
            }),
            (0, i.jsxs)("div", {
                className: z.fF,
                children: [
                    (0, i.jsx)("div", { className: z.MT }),
                    (0, i.jsx)("button", {
                        type: "submit",
                        className: z.rt,
                        disabled: !t || "" === a.trim(),
                        "aria-label": I.intl.string(R.default["22GHMt"]),
                        children: (0, i.jsx)(U.l, { size: "xs", color: "currentColor", className: z.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073);
var q = n(847374),
    Y = n(320448),
    $ = n(939249),
    K = n(46054),
    J = n(84206);
function X(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("section", {
              className: J.hb,
              children: [
                  (0, i.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, i.jsx)("div", {
                      className: J.Hu,
                      children: n.map((e) =>
                          (0, i.jsx)(
                              "span",
                              {
                                  className: J.uR,
                                  children: (0, i.jsx)(u.E, {
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
function Q(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, i.jsxs)("article", {
        className: J.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, i.jsxs)("header", {
                className: J.pu,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, i.jsx)("span", {
                              className: J.dr,
                              children: (0, i.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: I.intl.string(I.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, i.jsxs)("section", {
                      className: J.hb,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(R.default.KLyB8Y),
                          }),
                          (0, i.jsx)("ul", {
                              className: J.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, i.jsxs)(
                                      "li",
                                      {
                                          className: J.H6,
                                          children: [
                                              (0, i.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: J.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, i.jsx)(u.E, {
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
                ? (0, i.jsxs)("section", {
                      className: J.hb,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(I.t["0hKkS+"]),
                          }),
                          (0, i.jsx)("ul", {
                              className: J.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, i.jsxs)(
                                      "li",
                                      {
                                          className: J.Xs,
                                          children: [
                                              (0, i.jsxs)(u.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, i.jsx)(u.E, {
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
            (0, i.jsx)(X, { label: I.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, i.jsx)(X, { label: I.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, i.jsxs)("div", {
                      className: J.nc,
                      children: [
                          (0, i.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: I.intl.string(R.default.GYoWRk),
                          }),
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: J.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ee = n(700766),
    et = n(742715);
let en = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function el(e) {
    let { steps: t, announcement: n, content: l, proposal: a, onApprove: r } = e,
        o = s.useMemo(
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
                            l = t[t.length - 1];
                        if ("writing_command" === n.kind && (null == n.friendly || "" === n.friendly) && null != l) {
                            l.technical.push(...e);
                            continue;
                        }
                        let i = (function (e) {
                                switch (e.kind) {
                                    case "planning":
                                        return I.intl.string(R.default["0ce6LB"]);
                                    case "planned":
                                        return I.intl.formatToPlainString(R.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return I.intl.string(R.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? I.intl.string(R.default.nv6pUM);
                                    case "assembling":
                                        return I.intl.string(R.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return I.intl.string(R.default.VZuRug);
                                    case "building":
                                        return I.intl.string(R.default["s+ylXP"]);
                                    case "bundling":
                                        return I.intl.string(R.default.rEQlMx);
                                    case "committing":
                                        return I.intl.string(R.default.Yvyw1H);
                                    case "built":
                                        return I.intl.string(R.default.hOcVAj);
                                    case "build_error":
                                        return I.intl.string(R.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return I.intl.string(R.default.sz8yAj);
                                    case "preview_connecting":
                                        return I.intl.string(R.default.pOYDEc);
                                    case "awaiting_auth":
                                        return I.intl.string(R.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return I.intl.string(R.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return I.intl.string(R.default.FUWbq1);
                                    case "deploying":
                                        return I.intl.string(R.default.wcXX8Z);
                                    case "preview_ready":
                                        return I.intl.string(R.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return I.intl.string(R.default.j3hBoA);
                                    default:
                                        return I.intl.string(R.default.nv6pUM);
                                }
                            })(n),
                            s = e.filter((e) => e !== i);
                        if (null != l && l.summary === i) {
                            l.technical.push(...s);
                            continue;
                        }
                        t.push({ step: n, summary: i, technical: s });
                    }
                    return t;
                })(t),
            [t],
        );
    return (0, i.jsxs)("div", {
        className: ee.ue,
        children: [
            null != n && "" !== n
                ? (0, i.jsx)(u.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: ee.Xt,
                      children: n,
                  })
                : null,
            o.length > 0
                ? (0, i.jsx)("ol", { className: ee.dO, children: o.map((e, t) => (0, i.jsx)(ei, { group: e }, t)) })
                : null,
            null != a
                ? (0, i.jsx)(Q, { proposal: a, onApprove: r })
                : "" !== l
                  ? (0, i.jsx)("div", {
                        className: ee.ky,
                        children: (0, i.jsx)("div", {
                            className: y()(et.PT, ee.cW),
                            children: K.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function ei(e) {
    var t;
    let { group: n } = e,
        [l, a] = s.useState(!1),
        r = s.useId(),
        o = s.useCallback(() => a((e) => !e), []),
        c =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, i.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: ee.Dx,
            children: (0, i.jsx)(u.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: c,
                selectable: !0,
                className: ee.iq,
                children: n.summary,
            }),
        });
    let d = l ? q.a : Y._;
    return (0, i.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: ee.Dx,
        children: [
            (0, i.jsxs)($.D, {
                tag: "div",
                className: ee.kG,
                "aria-expanded": l,
                "aria-controls": r,
                "aria-label": I.intl.formatToPlainString(R.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, i.jsx)(u.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: c,
                        className: ee.iq,
                        children: n.summary,
                    }),
                    (0, i.jsx)(d, { size: "xs", color: "currentColor", className: ee.Ue }),
                ],
            }),
            (0, i.jsx)("div", {
                id: r,
                hidden: !l,
                className: ee.yJ,
                children: n.technical.map((e, t) =>
                    (0, i.jsx)(
                        u.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var es = n(289149),
    ea = n(692228);
function er(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, i.jsx)("ol", {
        className: es.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, i.jsx)(
                    eo,
                    {
                        role: "user",
                        children: (0, i.jsx)("div", {
                            className: y()(es.B2, ea.XR),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !en.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, i.jsx)(
                      eo,
                      {
                          role: "assistant",
                          children: (0, i.jsx)(el, {
                              steps: t,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === l ? n : void 0,
                          }),
                      },
                      e.id,
                  );
        }),
    });
}
function eo(e) {
    let { role: t, children: n } = e;
    return (0, i.jsx)("li", { "data-role": t, className: es.xk, children: n });
}
var ec = n(863610),
    ed = n(673724),
    eu = n(379307),
    eh = n(922016),
    ep = n(885574),
    em = n(677175);
function eg(e) {
    return e.toLocaleString();
}
function ef(e) {
    let { label: t, usage: n } = e;
    return (0, i.jsxs)("div", {
        className: em.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: em.mf,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eg((0, ed.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    eg(n.input_tokens),
                    " in \xb7 ",
                    eg(n.output_tokens),
                    " out \xb7 ",
                    eg(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    eg(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function ex(e) {
    let { project: t } = e,
        n = (0, ed.wV)(t.orchestrator, t.codegen);
    return (0, i.jsxs)("div", {
        className: em.si,
        role: "dialog",
        "aria-label": I.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, i.jsx)("div", {
                className: em.Q$,
                children: (0, i.jsxs)("div", {
                    className: em.mf,
                    children: [
                        (0, i.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eg((0, ed.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(ef, { label: I.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, i.jsx)(ef, { label: I.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, i.jsxs)("div", {
                className: em.mf,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["kILb+R"]),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ed.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ed.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, i.jsx)(eh.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(ex, { project: t }),
        children: (e) =>
            (0, i.jsx)($.D, {
                innerRef: n,
                className: em.Y$,
                "aria-label": I.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, i.jsx)(ep.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var ej = n(154861);
function e_(e) {
    switch (e) {
        case "open":
            return I.intl.string(R.default.cLhFMi);
        case "connecting":
            return I.intl.string(R.default.W7oyuf);
        case "failed":
            return I.intl.string(R.default.eE60xI);
        case "closed":
            return I.intl.string(R.default["yBmS+I"]);
    }
}
function eb(e) {
    let { thinking: t, projectUsage: n, connState: l, modelSettings: s, onModelSettingsChange: a } = e;
    return (0, i.jsxs)("div", {
        className: ej.jf,
        children: [
            (0, i.jsx)("div", {
                className: ej.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, i.jsxs)("div", {
                          className: ej.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": I.intl.string(R.default.C0t6bp),
                          children: [
                              (0, i.jsx)(ec.n, { dotRadius: 3.5, themed: !0 }),
                              (0, i.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: I.intl.string(R.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == s
                ? null
                : (0, i.jsx)(eu.A, { settings: s.settings, choices: s.choices, disabled: "open" !== l, onChange: a }),
            null == n
                ? null
                : (0, i.jsxs)("span", {
                      className: ej.BP,
                      children: [
                          (0, i.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": I.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, ed.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: I.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, ed.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, i.jsx)(ev, { project: n }),
                      ],
                  }),
            (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": I.intl.formatToPlainString(R.default.eDDdhB, { status: e_(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: ej.XF,
                children: e_(l),
            }),
        ],
    });
}
var eE = n(506774),
    ek = n(192308),
    eA = n(651649),
    eN = n(670455);
let eS = "shownVibegrationsFeedbackProjectIds";
var ew = n(104071);
function ey(e) {
    let { projectId: t } = e,
        l = (0, x.bG)([W.A], () => W.A.getMessages(t), [t]),
        a = (0, x.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        o = (0, x.bG)([W.A], () => W.A.getProjectUsage(t), [t]),
        c = (0, x.bG)([r.Ay], () => r.Ay.getModelSettings(t), [t]),
        d = s.useRef(null),
        u = s.useRef(null),
        h = s.useRef(!0);
    s.useEffect(() => {
        h.current && u.current?.scrollToBottom();
    }, [l]);
    let p = s.useCallback(() => {
        let e = u.current;
        null != e && (h.current = 32 > e.getDistanceFromBottom());
    }, []);
    s.useLayoutEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [i] = l,
                    s = i?.contentRect.width ?? e.getBoundingClientRect().width;
                s === t ||
                    ((t = s),
                    h.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => u.current?.scrollToBottom()))));
            });
        return (
            l.observe(e),
            () => {
                l.disconnect(), null != n && cancelAnimationFrame(n);
            }
        );
    }, []),
        s.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]),
        s.useEffect(
            () => () =>
                (function (e) {
                    let t = W.A.getMessages(e).filter((e) => "assistant" === e.role && (0, W.B)(e)).length;
                    !(t < 3) &&
                        ((eE.w.get(eS) ?? []).includes(e) ||
                            eA.A.possiblyShowFeedbackModal(eN.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = eE.w.get(eS) ?? []).includes(e) || eE.w.set(eS, [...l, e]),
                                    (0, ek.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("4079"),
                                            n.e("22255"),
                                            n.e("55925"),
                                            n.e("40794"),
                                            n.e("37381"),
                                            n.e("47004"),
                                            n.e("41676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, i.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let m = s.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        g = s.useCallback((e) => (0, r.XZ)(t, e), [t]),
        f = s.useCallback(() => m(I.intl.string(R.default.Jj8Ftb)), [m]),
        v = "open" === a,
        j = l[l.length - 1],
        _ = null != j && "assistant" === j.role && null != j.proposal,
        b = null != j && "assistant" === j.role && !(0, W.B)(j),
        E = _ && v ? f : void 0;
    return (0, i.jsxs)("section", {
        ref: d,
        "data-vibegrations-chat": !0,
        className: ew.T,
        children: [
            (0, i.jsx)(V.Ch, {
                ref: u,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: ew.N,
                children: (0, i.jsx)(er, { messages: l, onApprove: E }),
            }),
            (0, i.jsx)(eb, { thinking: b, projectUsage: o, connState: a, modelSettings: c, onModelSettingsChange: g }),
            (0, i.jsx)(Z, { canSend: v, onSend: m, onApprove: E }),
        ],
    });
}
var eT = n(435558),
    eC = n(661531),
    eR = n(602853),
    eI = n(517461),
    eM = n(761929),
    eO = n(552067);
function eP(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: a } = e,
        r = (0, eR.r)(eC.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [c, d] = (0, eI.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = s.useState(c ?? 460),
        p = (0, eT.clamp)(u, 360, n);
    s.useLayoutEffect(() => {
        l(t ? p + r : 0);
    }, [p, t, r, l]);
    let m = (0, eM.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: eM.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), m(e));
            },
            [m],
        );
    return (0, i.jsxs)("div", {
        className: eO.pz,
        hidden: !t,
        children: [
            (0, i.jsx)("div", { className: eO.Di, onPointerDown: g }),
            (0, i.jsx)("div", { ref: o, className: eO.kL, style: { width: p }, children: a }),
        ],
    });
}
function eG(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([W.A], () => W.A.isThinking(t), [t]);
    return (0, i.jsx)("div", { className: ea.MP, "data-active": n, "aria-hidden": !0 });
}
var eL = n(291815);
function eD(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: o, previewReady: c, previewGate: d } = e,
        u = s.useRef(null),
        [h, p] = s.useState(0);
    s.useLayoutEffect(() => {
        if (l.type === A.U4.MAIN) return (0, a.HV)(n), () => (0, a.HV)(null);
    }, [n, l.type]),
        s.useEffect(() => {
            null != t && (0, r.Hc)(t);
        }, [t]),
        s.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && p(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        s.useEffect(() => () => (0, a.Zq)(0), []);
    let m = Math.max(360, h - 320),
        g = o || l.type === A.U4.MAIN;
    return (0, i.jsxs)("div", {
        ref: u,
        className: eL.LB,
        children: [
            (0, i.jsx)("div", {
                className: eL.fm,
                children: (0, i.jsx)(H, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            }),
            null != t && g
                ? (0, i.jsx)(eP, {
                      open: o,
                      maxWidth: m,
                      onWidthChange: a.Zq,
                      children: (0, i.jsxs)("div", {
                          className: eL.cO,
                          children: [(0, i.jsx)(eG, { projectId: t }), (0, i.jsx)(ey, { projectId: t }, t)],
                      }),
                  })
                : null,
        ],
    });
}
