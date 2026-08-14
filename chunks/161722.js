n.d(t, { A: () => eO });
var s,
    i = n(477900),
    l = n(582128),
    a = n(948230),
    r = n(998939),
    o = n(289873),
    c = n(821609),
    d = n(323384),
    u = n(834730),
    h = n(580954),
    m = n(672929),
    p = n(297264),
    g = n(812901),
    f = n(609636),
    x = n(17928),
    v = n(956518),
    k = n(627363),
    j = n(869146),
    b = n(625180),
    _ = n(91242),
    E = n(207371),
    N = n(165610),
    A = n(652215),
    S =
        (((s = {}).Loading = "loading"),
        (s.AwaitingLaunch = "awaiting-launch"),
        (s.Launched = "launched"),
        (s.RenderingElsewhere = "rendering-elsewhere"),
        (s.NoApplication = "no-application"),
        (s.DoesNotSupportSurface = "does-not-support-surface"),
        (s.Error = "error"),
        s),
    w = n(503698),
    y = n.n(w),
    T = n(612749);
function C(e) {
    let { title: t, body: n, wide: s = !1, children: l } = e;
    return (0, i.jsxs)("div", {
        className: y()(T.Bf, s && T.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
var R = n(818085),
    I = n(375708),
    M = n(616694);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: s, state: a } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: s,
                    setFailed: i,
                    lifecycle: a,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        s = l.useMemo(() => (0, N.VA)(t, n), [t, n]),
                        i = l.useMemo(() => n, [s]),
                        a = (0, x.bG)([_.A], () => _.A.getFrame(s), [s]),
                        r = (0, x.bG)(
                            [j.A, _.A],
                            () => j.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && _.A.getMainFrame()?.id === s,
                            [s],
                        ),
                        { data: o, isLoading: c } = (0, k.YY)(t),
                        d = (0, E.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = l.useState(null),
                        p = h === s;
                    return {
                        surface: i,
                        setFailed: l.useCallback(() => m(s), [s]),
                        lifecycle: (0, N.x1)(a)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: a }
                            : p
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
                l.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await b.A.launchFrame({ applicationId: t, surface: s });
                        } catch {
                            i();
                        }
                    }
                }, [r, t, s, i]),
                a
            );
        })({ applicationId: t, surface: n }),
        r = l.useMemo(() => (0, N.VA)(t, n), [t, n]);
    switch (
        (l.useEffect(() => {
            if ((0, N.Yf)(n) === N.sV.MAIN) return () => (0, h.A)().leaveFrame(r);
        }, [r, n]),
        a)
    ) {
        case S.Launched:
            return (0, i.jsx)(f.A, { frameId: s.id, level: g.A.WithinAppContent, className: M.Z7 });
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
                    (0, i.jsx)(p.D, {
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
var P = n(668917);
function L(e) {
    let { applicationId: t, surface: n, previewReady: s, previewGate: a } = e,
        r = (0, m.A)(t, n);
    return (l.useEffect(() => {
        a?.type === "permissions" && null != r && (0, h.A)().leaveFrame(r.id);
    }, [r, a?.type]),
    a?.type === "checking")
        ? (0, i.jsx)("div", { className: P.q, children: (0, i.jsx)(o.y, {}) })
        : a?.type === "permissions"
          ? (0, i.jsx)("div", {
                className: P.q,
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
          : s
            ? null != t
                ? (0, i.jsx)(O, { applicationId: t, surface: n })
                : null
            : (0, i.jsxs)("div", {
                  className: P.q,
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
var G = n(689175),
    D = n(783791),
    H = n(826745),
    B = n(559647),
    V = n(17117);
function F(e) {
    let { canSend: t, onSend: n, onApprove: s } = e,
        [a, r] = l.useState(""),
        o = l.useCallback(() => {
            "" !== a.trim() && t && (n(a), r(""));
        }, [a, t, n]),
        c = l.useCallback(
            (e) => {
                e.preventDefault(), o();
            },
            [o],
        ),
        d = l.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != s && (e.preventDefault(), s());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), o());
            },
            [o, s],
        );
    return (0, i.jsxs)("form", {
        onSubmit: c,
        className: V.DA,
        children: [
            (0, i.jsx)(H.y, {
                value: a,
                onChange: (e) => r(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? I.intl.string(R.default.ahRdoJ) : I.intl.string(R.default.nm4w9P),
                disabled: !t,
                "aria-label": I.intl.string(R.default.OPr66w),
                rows: 1,
                className: V.jp,
            }),
            (0, i.jsxs)("div", {
                className: V.fF,
                children: [
                    (0, i.jsx)("div", { className: V.MT }),
                    (0, i.jsx)("button", {
                        type: "submit",
                        className: V.rt,
                        disabled: !t || "" === a.trim(),
                        "aria-label": I.intl.string(R.default["22GHMt"]),
                        children: (0, i.jsx)(B.l, { size: "xs", color: "currentColor", className: V.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073), n(134528), n(947204);
var W = n(847374),
    U = n(320448),
    z = n(939249),
    Z = n(46054),
    q = n(84206);
function K(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("section", {
              className: q.hb,
              children: [
                  (0, i.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, i.jsx)("div", {
                      className: q.Hu,
                      children: n.map((e) =>
                          (0, i.jsx)(
                              "span",
                              {
                                  className: q.uR,
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
function X(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, i.jsxs)("article", {
        className: q.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, i.jsxs)("header", {
                className: q.pu,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, i.jsx)("span", {
                              className: q.dr,
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
                      className: q.hb,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(R.default.KLyB8Y),
                          }),
                          (0, i.jsx)("ul", {
                              className: q.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, i.jsxs)(
                                      "li",
                                      {
                                          className: q.H6,
                                          children: [
                                              (0, i.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: q.UZ,
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
                      className: q.hb,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(I.t["0hKkS+"]),
                          }),
                          (0, i.jsx)("ul", {
                              className: q.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, i.jsxs)(
                                      "li",
                                      {
                                          className: q.Xs,
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
            (0, i.jsx)(K, { label: I.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, i.jsx)(K, { label: I.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, i.jsxs)("div", {
                      className: q.nc,
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
                              className: q.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var Y = n(700766),
    $ = n(692228),
    J = n(742715);
let Q = new Set(["thinking", "assistant_delta", "reply", "plan_proposed", "announcement"]);
function ee(e) {
    let { steps: t, announcement: n, content: s, proposal: a, onApprove: r } = e,
        o = l.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = [],
                        s = null,
                        i = null;
                    for (let [l, a] of e.entries()) {
                        if ("thinking" === a.kind) {
                            i = null;
                            continue;
                        }
                        if ("assistant_delta" === a.kind) {
                            let e = a.message ?? "";
                            "" !== e &&
                                (null == i
                                    ? ((i = { type: "message", key: `message-${l}`, content: e }), t.push(i))
                                    : (i.content = e)),
                                !0 === a.message_finished && (i = null);
                            continue;
                        }
                        Q.has(a.kind) ||
                            ((i = null),
                            n.push(a),
                            null == s && ((s = { type: "steps", key: `steps-${l}`, groups: [] }), t.push(s)));
                    }
                    return (
                        null != s &&
                            (s.groups = (function (e) {
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
                                    if (
                                        "writing_command" === n.kind &&
                                        (null == n.friendly || "" === n.friendly) &&
                                        null != s
                                    ) {
                                        s.technical.push(...e);
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
                                        l = e.filter((e) => e !== i);
                                    if (null != s && s.summary === i) {
                                        s.technical.push(...l);
                                        continue;
                                    }
                                    t.push({ step: n, summary: i, technical: l });
                                }
                                return t;
                            })(n)),
                        t
                    );
                })(t),
            [t],
        ),
        c = o.at(-1),
        d = c?.type === "message" && c.content.trim() === s.trim();
    return (0, i.jsxs)("div", {
        className: Y.ue,
        children: [
            null != n && "" !== n
                ? (0, i.jsx)(u.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: y()(Y.ky, Y.Xt, $.XR),
                      children: n,
                  })
                : null,
            o.length > 0
                ? (0, i.jsx)("ol", {
                      className: Y.dO,
                      children: o.map((e) =>
                          "message" === e.type
                              ? (0, i.jsx)(
                                    "li",
                                    {
                                        className: y()(Y.ky, $.XR),
                                        children: (0, i.jsx)("div", {
                                            className: y()(J.PT, Y.cW),
                                            children: Z.A.parse(e.content, !0, {
                                                allowList: !0,
                                                allowHeading: !0,
                                                allowLinks: !0,
                                            }),
                                        }),
                                    },
                                    e.key,
                                )
                              : (0, i.jsx)(
                                    "li",
                                    {
                                        className: y()(Y.ky, $.XR),
                                        children: (0, i.jsx)("ol", {
                                            className: Y.dO,
                                            children: e.groups.map((e, t) => (0, i.jsx)(et, { group: e }, t)),
                                        }),
                                    },
                                    e.key,
                                ),
                      ),
                  })
                : null,
            null != a
                ? (0, i.jsx)("div", {
                      className: y()(Y.ky, $.XR),
                      children: (0, i.jsx)(X, { proposal: a, onApprove: r }),
                  })
                : "" === s || d
                  ? null
                  : (0, i.jsx)("div", {
                        className: y()(Y.ky, $.XR),
                        children: (0, i.jsx)("div", {
                            className: y()(J.PT, Y.cW),
                            children: Z.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    }),
        ],
    });
}
function et(e) {
    var t;
    let { group: n } = e,
        [s, a] = l.useState(!1),
        r = l.useId(),
        o = l.useCallback(() => a((e) => !e), []),
        c =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, i.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: Y.Dx,
            children: (0, i.jsx)(u.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: c,
                selectable: !0,
                className: Y.iq,
                children: n.summary,
            }),
        });
    let d = s ? W.a : U._;
    return (0, i.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: Y.Dx,
        children: [
            (0, i.jsxs)(z.D, {
                tag: "div",
                className: Y.kG,
                "aria-expanded": s,
                "aria-controls": r,
                "aria-label": I.intl.formatToPlainString(R.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, i.jsx)(u.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: c,
                        className: Y.iq,
                        children: n.summary,
                    }),
                    (0, i.jsx)(d, { size: "xs", color: "currentColor", className: Y.Ue }),
                ],
            }),
            (0, i.jsx)("div", {
                id: r,
                hidden: !s,
                className: Y.yJ,
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
var en = n(289149);
function es(e) {
    let { messages: t, onApprove: n } = e,
        s = t[t.length - 1];
    return (0, i.jsx)("ol", {
        className: en.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, i.jsx)(
                    ei,
                    {
                        role: "user",
                        children: (0, i.jsx)("div", {
                            className: y()(en.B2, $.XR),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.render_id,
                );
            let t = e.steps.filter((e) => !Q.has(e.kind)).length > 0,
                l = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message);
            return "" !== e.content || null != e.proposal || t || l || null != e.announcement
                ? (0, i.jsx)(
                      ei,
                      {
                          role: "assistant",
                          children: (0, i.jsx)(ee, {
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === s ? n : void 0,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function ei(e) {
    let { role: t, children: n } = e;
    return (0, i.jsx)("li", { "data-role": t, className: en.xk, children: n });
}
var el = n(863610),
    ea = n(673724),
    er = n(379307),
    eo = n(922016),
    ec = n(885574),
    ed = n(677175);
function eu(e) {
    return e.toLocaleString();
}
function eh(e) {
    let { label: t, usage: n } = e;
    return (0, i.jsxs)("div", {
        className: ed.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: ed.mf,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eu((0, ea.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    eu(n.input_tokens),
                    " in \xb7 ",
                    eu(n.output_tokens),
                    " out \xb7 ",
                    eu(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    eu(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function em(e) {
    let { project: t } = e,
        n = (0, ea.wV)(t.orchestrator, t.codegen);
    return (0, i.jsxs)("div", {
        className: ed.si,
        role: "dialog",
        "aria-label": I.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, i.jsx)("div", {
                className: ed.Q$,
                children: (0, i.jsxs)("div", {
                    className: ed.mf,
                    children: [
                        (0, i.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eu((0, ea.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(eh, { label: I.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, i.jsx)(eh, { label: I.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, i.jsxs)("div", {
                className: ed.mf,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["kILb+R"]),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ea.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ea.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, i.jsx)(eo.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(em, { project: t }),
        children: (e) =>
            (0, i.jsx)(z.D, {
                innerRef: n,
                className: ed.Y$,
                "aria-label": I.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, i.jsx)(ec.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var eg = n(154861);
function ef(e) {
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
function ex(e) {
    let { thinking: t, projectUsage: n, connState: s, modelSettings: l, onModelSettingsChange: a } = e;
    return (0, i.jsxs)("div", {
        className: eg.jf,
        children: [
            (0, i.jsx)("div", {
                className: eg.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, i.jsxs)("div", {
                          className: eg.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": I.intl.string(R.default.C0t6bp),
                          children: [
                              (0, i.jsx)(el.n, { dotRadius: 3.5, themed: !0 }),
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
            null == l
                ? null
                : (0, i.jsx)(er.A, { settings: l.settings, choices: l.choices, disabled: "open" !== s, onChange: a }),
            null == n
                ? null
                : (0, i.jsxs)("span", {
                      className: eg.BP,
                      children: [
                          (0, i.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": I.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, ea.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: I.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, ea.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, i.jsx)(ep, { project: n }),
                      ],
                  }),
            (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === s ? "text-feedback-positive" : "failed" === s ? "text-feedback-critical" : "text-muted",
                "aria-label": I.intl.formatToPlainString(R.default.eDDdhB, { status: ef(s) }),
                "data-vibegrations-conn": !0,
                "data-state": s,
                className: eg.XF,
                children: ef(s),
            }),
        ],
    });
}
var ev = n(506774),
    ek = n(192308),
    ej = n(651649),
    eb = n(670455);
let e_ = "shownVibegrationsFeedbackProjectIds";
var eE = n(104071);
function eN(e) {
    let { projectId: t } = e,
        s = (0, x.bG)([D.A], () => D.A.getMessages(t), [t]),
        a = (0, x.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        o = (0, x.bG)([D.A], () => D.A.getProjectUsage(t), [t]),
        c = (0, x.bG)([r.Ay], () => r.Ay.getModelSettings(t), [t]),
        d = l.useRef(null),
        u = l.useRef(null),
        h = l.useRef(!0);
    l.useEffect(() => {
        h.current && u.current?.scrollToBottom();
    }, [s]);
    let m = l.useCallback(() => {
        let e = u.current;
        null != e && (h.current = 32 > e.getDistanceFromBottom());
    }, []);
    l.useLayoutEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            s = new ResizeObserver((s) => {
                let [i] = s,
                    l = i?.contentRect.width ?? e.getBoundingClientRect().width;
                l === t ||
                    ((t = l),
                    h.current &&
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
        l.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]),
        l.useEffect(
            () => () =>
                (function (e) {
                    let t = D.A.getMessages(e).filter((e) => "assistant" === e.role && (0, D.B)(e)).length;
                    !(t < 3) &&
                        ((ev.w.get(e_) ?? []).includes(e) ||
                            ej.A.possiblyShowFeedbackModal(eb.MW.VIBEGRATIONS, () => {
                                let s;
                                (s = ev.w.get(e_) ?? []).includes(e) || ev.w.set(e_, [...s, e]),
                                    (0, ek.openModalLazy)(async () => {
                                        let { default: s } = await Promise.all([
                                            n.e("4079"),
                                            n.e("22255"),
                                            n.e("55925"),
                                            n.e("40794"),
                                            n.e("37381"),
                                            n.e("47004"),
                                            n.e("41676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, i.jsx)(s, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let p = l.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        g = l.useCallback((e) => (0, r.XZ)(t, e), [t]),
        f = l.useCallback(() => p(I.intl.string(R.default.Jj8Ftb)), [p]),
        v = "open" === a,
        k = s[s.length - 1],
        j = null != k && "assistant" === k.role && null != k.proposal,
        b = null != k && "assistant" === k.role && !(0, D.B)(k),
        _ = j && v ? f : void 0;
    return (0, i.jsxs)("section", {
        ref: d,
        "data-vibegrations-chat": !0,
        className: eE.T,
        children: [
            (0, i.jsx)(G.Ch, {
                ref: u,
                onScroll: m,
                "data-vibegrations-chat-log": !0,
                className: eE.N,
                children: (0, i.jsx)(es, { messages: s, onApprove: _ }),
            }),
            (0, i.jsx)(ex, { thinking: b, projectUsage: o, connState: a, modelSettings: c, onModelSettingsChange: g }),
            (0, i.jsx)(F, { canSend: v, onSend: p, onApprove: _ }),
        ],
    });
}
var eA = n(435558),
    eS = n(661531),
    ew = n(602853),
    ey = n(517461),
    eT = n(761929),
    eC = n(552067);
function eR(e) {
    let { open: t, maxWidth: n, onWidthChange: s, children: a } = e,
        r = (0, ew.r)(eS.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = l.useRef(null),
        [c, d] = (0, ey.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = l.useState(c ?? 460),
        m = (0, eA.clamp)(u, 360, n);
    l.useLayoutEffect(() => {
        s(t ? m + r : 0);
    }, [m, t, r, s]);
    let p = (0, eT.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: eT.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = l.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, i.jsxs)("div", {
        className: eC.pz,
        hidden: !t,
        children: [
            (0, i.jsx)("div", { className: eC.Di, onPointerDown: g }),
            (0, i.jsx)("div", { ref: o, className: eC.kL, style: { width: m }, children: a }),
        ],
    });
}
function eI(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([D.A], () => D.A.isThinking(t), [t]);
    return (0, i.jsx)("div", { className: $.MP, "data-active": n, "aria-hidden": !0 });
}
var eM = n(291815);
function eO(e) {
    let { projectId: t, applicationId: n, surface: s, chatOpen: o, previewReady: c, previewGate: d } = e,
        u = l.useRef(null),
        [h, m] = l.useState(0);
    l.useLayoutEffect(() => {
        if (s.type === N.U4.MAIN) return (0, a.HV)(n), () => (0, a.HV)(null);
    }, [n, s.type]),
        l.useEffect(() => {
            null != t && (0, r.Hc)(t);
        }, [t]),
        l.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && m(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        l.useEffect(() => () => (0, a.Zq)(0), []);
    let p = Math.max(360, h - 320),
        g = o || s.type === N.U4.MAIN;
    return (0, i.jsxs)("div", {
        ref: u,
        className: eM.LB,
        children: [
            (0, i.jsx)("div", {
                className: eM.fm,
                children: (0, i.jsx)(L, { applicationId: n, surface: s, previewReady: c, previewGate: d }),
            }),
            null != t && g
                ? (0, i.jsx)(eR, {
                      open: o,
                      maxWidth: p,
                      onWidthChange: a.Zq,
                      children: (0, i.jsxs)("div", {
                          className: eM.cO,
                          children: [(0, i.jsx)(eI, { projectId: t }), (0, i.jsx)(eN, { projectId: t }, t)],
                      }),
                  })
                : null,
        ],
    });
}
