n.d(t, { A: () => eG });
var s,
    l = n(477900),
    a = n(582128),
    r = n(948230),
    i = n(998939),
    c = n(289873),
    o = n(821609),
    d = n(323384),
    u = n(834730),
    m = n(580954),
    h = n(672929),
    f = n(297264),
    p = n(812901),
    g = n(609636),
    x = n(17928),
    v = n(956518),
    _ = n(627363),
    j = n(869146),
    E = n(625180),
    A = n(91242),
    N = n(207371),
    k = n(165610),
    b = n(652215),
    y =
        (((s = {}).Loading = "loading"),
        (s.AwaitingLaunch = "awaiting-launch"),
        (s.Launched = "launched"),
        (s.RenderingElsewhere = "rendering-elsewhere"),
        (s.NoApplication = "no-application"),
        (s.DoesNotSupportSurface = "does-not-support-surface"),
        (s.Error = "error"),
        s),
    w = n(503698),
    S = n.n(w),
    T = n(612749);
function R(e) {
    let { title: t, body: n, wide: s = !1, children: a } = e;
    return (0, l.jsxs)("div", {
        className: S()(T.Bf, s && T.Qx),
        children: [
            (0, l.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, l.jsx)(f.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var I = n(818085),
    C = n(375708),
    P = n(616694);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: s, state: r } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: s,
                    setFailed: l,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        s = a.useMemo(() => (0, k.VA)(t, n), [t, n]),
                        l = a.useMemo(() => n, [s]),
                        r = (0, x.bG)([A.A], () => A.A.getFrame(s), [s]),
                        i = (0, x.bG)(
                            [j.A, A.A],
                            () => j.A.getWindowOpen(b.MLl.ACTIVITY_POPOUT) && A.A.getMainFrame()?.id === s,
                            [s],
                        ),
                        { data: c, isLoading: o } = (0, _.YY)(t),
                        d = (0, N.x)(c),
                        u = null != (0, v.Ay)(t),
                        [m, h] = a.useState(null),
                        f = m === s;
                    return {
                        surface: l,
                        setFailed: a.useCallback(() => h(s), [s]),
                        lifecycle: (0, k.x1)(r)
                            ? i
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : f
                              ? { state: "error" }
                              : r?.state === "loading"
                                ? { state: "loading", frame: r }
                                : o
                                  ? { state: "loading", frame: void 0 }
                                  : null != c && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: i } = r;
            return (
                a.useEffect(() => {
                    "awaiting-launch" === i && e();
                    async function e() {
                        try {
                            await E.A.launchFrame({ applicationId: t, surface: s });
                        } catch {
                            l();
                        }
                    }
                }, [i, t, s, l]),
                r
            );
        })({ applicationId: t, surface: n }),
        i = a.useMemo(() => (0, k.VA)(t, n), [t, n]);
    switch (
        (a.useEffect(() => {
            if ((0, k.Yf)(n) === k.sV.MAIN) return () => (0, m.A)().leaveFrame(i);
        }, [i, n]),
        r)
    ) {
        case y.Launched:
            return (0, l.jsx)(g.A, { frameId: s.id, level: p.A.WithinAppContent, className: P.Z7 });
        case y.RenderingElsewhere:
            return (0, l.jsx)("div", {
                className: P.qs,
                children: (0, l.jsx)(R, {
                    title: C.intl.string(I.default["4f6Vkr"]),
                    body: C.intl.string(I.default.LJ2q1H),
                }),
            });
        case y.NoApplication:
            return (0, l.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, l.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(I.default["6xTawd"]),
                    }),
                ],
            });
        case y.DoesNotSupportSurface:
            return (0, l.jsx)("div", {
                className: P.qs,
                children: (0, l.jsx)(R, {
                    title: C.intl.string(I.default.FHOJiH),
                    body: C.intl.string(I.default["1yLQoV"]),
                }),
            });
        case y.Error:
            return (0, l.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, l.jsx)(f.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(I.default.MeLWCr),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: C.intl.string(I.default["1RCbQT"]),
                    }),
                ],
            });
        case y.AwaitingLaunch:
        case y.Loading:
            return (0, l.jsx)("div", { className: P.qs, children: (0, l.jsx)(c.y, {}) });
    }
}
var L = n(407663);
function D(e) {
    let { src: t } = e;
    return (0, l.jsx)("iframe", {
        src: t,
        title: C.intl.string(I.default["bTjP+Y"]),
        className: L.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var G = n(208137),
    H = n(972786),
    M = n(668917);
function V(e) {
    let { applicationId: t, surface: n, previewReady: s, previewGate: r } = e,
        f = (0, x.bG)([H.A, i.Ay], () => {
            if (null == t || null == (0, G.V)()) return null;
            let e = H.A.getAllProjects().find((e) => e.application_id === t || e.preview_application_id === t);
            if (null == e) return null;
            let n = i.Ay.getPreviewTs(e.id);
            return (0, G.s)(e, t, n);
        }, [t]),
        p = (0, h.A)(t, n);
    return (a.useEffect(() => {
        r?.type === "permissions" && null != p && (0, m.A)().leaveFrame(p.id);
    }, [p, r?.type]),
    r?.type === "checking")
        ? (0, l.jsx)("div", { className: M.q, children: (0, l.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, l.jsx)("div", {
                className: M.q,
                children: (0, l.jsx)(R, {
                    wide: !0,
                    title: C.intl.string(I.default.DYwf2n),
                    body: C.intl.string(I.default.WWj3pN),
                    children: (0, l.jsx)(o.$, {
                        variant: "primary",
                        size: "md",
                        text: C.intl.string(I.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null != f
                ? (0, l.jsx)(D, { src: f }, f)
                : null != t
                  ? (0, l.jsx)(O, { applicationId: t, surface: n })
                  : null
            : (0, l.jsxs)("div", {
                  className: M.q,
                  children: [
                      (0, l.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, l.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(I.default["6xTawd"]),
                      }),
                  ],
              });
}
var B = n(689175),
    F = n(783791),
    U = n(826745),
    W = n(559647),
    z = n(17117);
function q(e) {
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
        className: z.DA,
        children: [
            (0, l.jsx)(U.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? C.intl.string(I.default.ahRdoJ) : C.intl.string(I.default.nm4w9P),
                disabled: !t,
                "aria-label": C.intl.string(I.default.OPr66w),
                rows: 1,
                className: z.jp,
            }),
            (0, l.jsxs)("div", {
                className: z.fF,
                children: [
                    (0, l.jsx)("div", { className: z.MT }),
                    (0, l.jsx)("button", {
                        type: "submit",
                        className: z.rt,
                        disabled: !t || "" === r.trim(),
                        "aria-label": C.intl.string(I.default["22GHMt"]),
                        children: (0, l.jsx)(W.l, { size: "xs", color: "currentColor", className: z.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073);
var Z = n(847374),
    $ = n(320448),
    Y = n(939249),
    J = n(46054),
    K = n(84206);
function Q(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("section", {
              className: K.hb,
              children: [
                  (0, l.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, l.jsx)("div", {
                      className: K.Hu,
                      children: n.map((e) =>
                          (0, l.jsx)(
                              "span",
                              {
                                  className: K.uR,
                                  children: (0, l.jsx)(u.E, {
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
function X(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, l.jsxs)("article", {
        className: K.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, l.jsxs)("header", {
                className: K.pu,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: C.intl.string(I.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, l.jsx)("span", {
                              className: K.dr,
                              children: (0, l.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: C.intl.string(C.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, l.jsxs)("section", {
                      className: K.hb,
                      children: [
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: C.intl.string(I.default.KLyB8Y),
                          }),
                          (0, l.jsx)("ul", {
                              className: K.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: K.H6,
                                          children: [
                                              (0, l.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: K.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, l.jsx)(u.E, {
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
                      className: K.hb,
                      children: [
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: C.intl.string(C.t["0hKkS+"]),
                          }),
                          (0, l.jsx)("ul", {
                              className: K.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: K.Xs,
                                          children: [
                                              (0, l.jsxs)(u.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, l.jsx)(u.E, {
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
            (0, l.jsx)(Q, { label: C.intl.string(I.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, l.jsx)(Q, { label: C.intl.string(I.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, l.jsxs)("div", {
                      className: K.nc,
                      children: [
                          (0, l.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: C.intl.string(I.default.GYoWRk),
                          }),
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: K.sw,
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
function es(e) {
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
                                        return C.intl.string(I.default["0ce6LB"]);
                                    case "planned":
                                        return C.intl.formatToPlainString(I.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return C.intl.string(I.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? C.intl.string(I.default.nv6pUM);
                                    case "assembling":
                                        return C.intl.string(I.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return C.intl.string(I.default.VZuRug);
                                    case "building":
                                        return C.intl.string(I.default["s+ylXP"]);
                                    case "bundling":
                                        return C.intl.string(I.default.rEQlMx);
                                    case "committing":
                                        return C.intl.string(I.default.Yvyw1H);
                                    case "built":
                                        return C.intl.string(I.default.hOcVAj);
                                    case "build_error":
                                        return C.intl.string(I.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return C.intl.string(I.default.sz8yAj);
                                    case "preview_connecting":
                                        return C.intl.string(I.default.pOYDEc);
                                    case "awaiting_auth":
                                        return C.intl.string(I.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return C.intl.string(I.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return C.intl.string(I.default.FUWbq1);
                                    case "deploying":
                                        return C.intl.string(I.default.wcXX8Z);
                                    case "preview_ready":
                                        return C.intl.string(I.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return C.intl.string(I.default.j3hBoA);
                                    default:
                                        return C.intl.string(I.default.nv6pUM);
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
        className: ee.ue,
        children: [
            null != n && "" !== n
                ? (0, l.jsx)(u.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: ee.Xt,
                      children: n,
                  })
                : null,
            c.length > 0
                ? (0, l.jsx)("ol", { className: ee.dO, children: c.map((e, t) => (0, l.jsx)(el, { group: e }, t)) })
                : null,
            null != r
                ? (0, l.jsx)(X, { proposal: r, onApprove: i })
                : "" !== s
                  ? (0, l.jsx)("div", {
                        className: ee.ky,
                        children: (0, l.jsx)("div", {
                            className: S()(et.PT, ee.cW),
                            children: J.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function el(e) {
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
            className: ee.Dx,
            children: (0, l.jsx)(u.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: o,
                selectable: !0,
                className: ee.iq,
                children: n.summary,
            }),
        });
    let d = s ? Z.a : $._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: ee.Dx,
        children: [
            (0, l.jsxs)(Y.D, {
                tag: "div",
                className: ee.kG,
                "aria-expanded": s,
                "aria-controls": i,
                "aria-label": C.intl.formatToPlainString(I.default.z4KWsN, { step: n.summary }),
                onClick: c,
                children: [
                    (0, l.jsx)(u.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: o,
                        className: ee.iq,
                        children: n.summary,
                    }),
                    (0, l.jsx)(d, { size: "xs", color: "currentColor", className: ee.Ue }),
                ],
            }),
            (0, l.jsx)("div", {
                id: i,
                hidden: !s,
                className: ee.yJ,
                children: n.technical.map((e, t) =>
                    (0, l.jsx)(
                        u.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var ea = n(289149),
    er = n(692228);
function ei(e) {
    let { messages: t, onApprove: n } = e,
        s = t[t.length - 1];
    return (0, l.jsx)("ol", {
        className: ea.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, l.jsx)(
                    ec,
                    {
                        role: "user",
                        children: (0, l.jsx)("div", {
                            className: S()(ea.B2, er.XR),
                            children: (0, l.jsx)(u.E, {
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
                : (0, l.jsx)(
                      ec,
                      {
                          role: "assistant",
                          children: (0, l.jsx)(es, {
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
function ec(e) {
    let { role: t, children: n } = e;
    return (0, l.jsx)("li", { "data-role": t, className: ea.xk, children: n });
}
var eo = n(863610),
    ed = n(673724),
    eu = n(922016),
    em = n(885574),
    eh = n(677175);
function ef(e) {
    return e.toLocaleString();
}
function ep(e) {
    let { label: t, usage: n } = e;
    return (0, l.jsxs)("div", {
        className: eh.Q$,
        children: [
            (0, l.jsxs)("div", {
                className: eh.mf,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, l.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ef((0, ed.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, l.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ef(n.input_tokens),
                    " in \xb7 ",
                    ef(n.output_tokens),
                    " out \xb7 ",
                    ef(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    ef(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function eg(e) {
    let { project: t } = e,
        n = (0, ed.wV)(t.orchestrator, t.codegen);
    return (0, l.jsxs)("div", {
        className: eh.si,
        role: "dialog",
        "aria-label": C.intl.string(I.default["9yoLWZ"]),
        children: [
            (0, l.jsx)("div", {
                className: eh.Q$,
                children: (0, l.jsxs)("div", {
                    className: eh.mf,
                    children: [
                        (0, l.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ef((0, ed.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, l.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(ep, { label: C.intl.string(I.default.hk4jJr), usage: t.orchestrator }),
            (0, l.jsx)(ep, { label: C.intl.string(I.default.R9aduM), usage: t.codegen }),
            (0, l.jsxs)("div", {
                className: eh.mf,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(I.default["kILb+R"]),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ed.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ed.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ex(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, l.jsx)(eu.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, l.jsx)(eg, { project: t }),
        children: (e) =>
            (0, l.jsx)(Y.D, {
                innerRef: n,
                className: eh.Y$,
                "aria-label": C.intl.string(I.default.AWQ2ZV),
                ...e,
                children: (0, l.jsx)(em.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var ev = n(154861);
function e_(e) {
    switch (e) {
        case "open":
            return C.intl.string(I.default.cLhFMi);
        case "connecting":
            return C.intl.string(I.default.W7oyuf);
        case "failed":
            return C.intl.string(I.default.eE60xI);
        case "closed":
            return C.intl.string(I.default["yBmS+I"]);
    }
}
function ej(e) {
    let { thinking: t, projectUsage: n, connState: s } = e;
    return (0, l.jsxs)("div", {
        className: ev.jf,
        children: [
            (0, l.jsx)("div", {
                className: ev.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, l.jsxs)("div", {
                          className: ev.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": C.intl.string(I.default.C0t6bp),
                          children: [
                              (0, l.jsx)(eo.n, { dotRadius: 3.5, themed: !0 }),
                              (0, l.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: C.intl.string(I.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, l.jsxs)("span", {
                      className: ev.BP,
                      children: [
                          (0, l.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": C.intl.formatToPlainString(I.default["7SZZvj"], {
                                  runes: (0, ed.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: C.intl.formatToPlainString(I.default["4PFO2p"], {
                                  runes: (0, ed.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, l.jsx)(ex, { project: n }),
                      ],
                  }),
            (0, l.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === s ? "text-feedback-positive" : "failed" === s ? "text-feedback-critical" : "text-muted",
                "aria-label": C.intl.formatToPlainString(I.default.eDDdhB, { status: e_(s) }),
                "data-vibegrations-conn": !0,
                "data-state": s,
                className: ev.XF,
                children: e_(s),
            }),
        ],
    });
}
var eE = n(506774),
    eA = n(192308),
    eN = n(651649),
    ek = n(670455);
let eb = "shownVibegrationsFeedbackProjectIds";
var ey = n(104071);
function ew(e) {
    let { projectId: t } = e,
        s = (0, x.bG)([F.A], () => F.A.getMessages(t), [t]),
        r = (0, x.bG)([i.Ay], () => i.Ay.getConnState(t), [t]),
        c = (0, x.bG)([F.A], () => F.A.getProjectUsage(t), [t]),
        o = a.useRef(null),
        d = a.useRef(null),
        u = a.useRef(!0);
    a.useEffect(() => {
        u.current && d.current?.scrollToBottom();
    }, [s]);
    let m = a.useCallback(() => {
        let e = d.current;
        null != e && (u.current = 32 > e.getDistanceFromBottom());
    }, []);
    a.useLayoutEffect(() => {
        let e = o.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            s = new ResizeObserver((s) => {
                let [l] = s,
                    a = l?.contentRect.width ?? e.getBoundingClientRect().width;
                a === t ||
                    ((t = a),
                    u.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => d.current?.scrollToBottom()))));
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
                    let t = F.A.getMessages(e).filter((e) => "assistant" === e.role && (0, F.B)(e)).length;
                    !(t < 3) &&
                        ((eE.w.get(eb) ?? []).includes(e) ||
                            eN.A.possiblyShowFeedbackModal(ek.MW.VIBEGRATIONS, () => {
                                let s;
                                (s = eE.w.get(eb) ?? []).includes(e) || eE.w.set(eb, [...s, e]),
                                    (0, eA.openModalLazy)(async () => {
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
    let h = a.useCallback(
            (e) => {
                (0, i.dv)(t, e);
            },
            [t],
        ),
        f = a.useCallback(() => h(C.intl.string(I.default.Jj8Ftb)), [h]),
        p = "open" === r,
        g = s[s.length - 1],
        v = null != g && "assistant" === g.role && null != g.proposal,
        _ = null != g && "assistant" === g.role && !(0, F.B)(g),
        j = v && p ? f : void 0;
    return (0, l.jsxs)("section", {
        ref: o,
        "data-vibegrations-chat": !0,
        className: ey.T,
        children: [
            (0, l.jsx)(B.Ch, {
                ref: d,
                onScroll: m,
                "data-vibegrations-chat-log": !0,
                className: ey.N,
                children: (0, l.jsx)(ei, { messages: s, onApprove: j }),
            }),
            (0, l.jsx)(ej, { thinking: _, projectUsage: c, connState: r }),
            (0, l.jsx)(q, { canSend: p, onSend: h, onApprove: j }),
        ],
    });
}
var eS = n(435558),
    eT = n(661531),
    eR = n(602853),
    eI = n(517461),
    eC = n(761929),
    eP = n(552067);
function eO(e) {
    let { open: t, maxWidth: n, onWidthChange: s, children: r } = e,
        i = (0, eR.r)(eT.A.modules.chat.RESIZE_HANDLE_WIDTH),
        c = a.useRef(null),
        [o, d] = (0, eI.V)("VibegrationsChatSidebarWidth", 460),
        [u, m] = a.useState(o ?? 460),
        h = (0, eS.clamp)(u, 360, n);
    a.useLayoutEffect(() => {
        s(t ? h + i : 0);
    }, [h, t, i, s]);
    let f = (0, eC.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: c,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: eC.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, l.jsxs)("div", {
        className: eP.pz,
        hidden: !t,
        children: [
            (0, l.jsx)("div", { className: eP.Di, onPointerDown: p }),
            (0, l.jsx)("div", { ref: c, className: eP.kL, style: { width: h }, children: r }),
        ],
    });
}
function eL(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([F.A], () => F.A.isThinking(t), [t]);
    return (0, l.jsx)("div", { className: er.MP, "data-active": n, "aria-hidden": !0 });
}
var eD = n(291815);
function eG(e) {
    let { projectId: t, applicationId: n, surface: s, chatOpen: c, previewReady: o, previewGate: d } = e,
        u = a.useRef(null),
        [m, h] = a.useState(0);
    a.useLayoutEffect(() => {
        if (s.type === k.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
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
    let f = Math.max(360, m - 320),
        p = c || s.type === k.U4.MAIN;
    return (0, l.jsxs)("div", {
        ref: u,
        className: eD.LB,
        children: [
            (0, l.jsx)("div", {
                className: eD.fm,
                children: (0, l.jsx)(V, { applicationId: n, surface: s, previewReady: o, previewGate: d }),
            }),
            null != t && p
                ? (0, l.jsx)(eO, {
                      open: c,
                      maxWidth: f,
                      onWidthChange: r.Zq,
                      children: (0, l.jsxs)("div", {
                          className: eD.cO,
                          children: [(0, l.jsx)(eL, { projectId: t }), (0, l.jsx)(ew, { projectId: t }, t)],
                      }),
                  })
                : null,
        ],
    });
}
