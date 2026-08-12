n.d(t, { A: () => eO });
var s,
    l = n(477900),
    i = n(582128),
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
    j = n(627363),
    k = n(869146),
    _ = n(625180),
    b = n(91242),
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
    let { title: t, body: n, wide: s = !1, children: i } = e;
    return (0, l.jsxs)("div", {
        className: y()(T.Bf, s && T.Qx),
        children: [
            (0, l.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, l.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
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
                    setFailed: l,
                    lifecycle: a,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        s = i.useMemo(() => (0, N.VA)(t, n), [t, n]),
                        l = i.useMemo(() => n, [s]),
                        a = (0, x.bG)([b.A], () => b.A.getFrame(s), [s]),
                        r = (0, x.bG)(
                            [k.A, b.A],
                            () => k.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === s,
                            [s],
                        ),
                        { data: o, isLoading: c } = (0, j.YY)(t),
                        d = (0, E.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = i.useState(null),
                        p = h === s;
                    return {
                        surface: l,
                        setFailed: i.useCallback(() => m(s), [s]),
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
                i.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await _.A.launchFrame({ applicationId: t, surface: s });
                        } catch {
                            l();
                        }
                    }
                }, [r, t, s, l]),
                a
            );
        })({ applicationId: t, surface: n }),
        r = i.useMemo(() => (0, N.VA)(t, n), [t, n]);
    switch (
        (i.useEffect(() => {
            if ((0, N.Yf)(n) === N.sV.MAIN) return () => (0, h.A)().leaveFrame(r);
        }, [r, n]),
        a)
    ) {
        case S.Launched:
            return (0, l.jsx)(f.A, { frameId: s.id, level: g.A.WithinAppContent, className: M.Z7 });
        case S.RenderingElsewhere:
            return (0, l.jsx)("div", {
                className: M.qs,
                children: (0, l.jsx)(C, {
                    title: I.intl.string(R.default["4f6Vkr"]),
                    body: I.intl.string(R.default.LJ2q1H),
                }),
            });
        case S.NoApplication:
            return (0, l.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, l.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["6xTawd"]),
                    }),
                ],
            });
        case S.DoesNotSupportSurface:
            return (0, l.jsx)("div", {
                className: M.qs,
                children: (0, l.jsx)(C, {
                    title: I.intl.string(R.default.FHOJiH),
                    body: I.intl.string(R.default["1yLQoV"]),
                }),
            });
        case S.Error:
            return (0, l.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, l.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.string(R.default.MeLWCr),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: M.tj,
                        children: I.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case S.AwaitingLaunch:
        case S.Loading:
            return (0, l.jsx)("div", { className: M.qs, children: (0, l.jsx)(o.y, {}) });
    }
}
var P = n(668917);
function L(e) {
    let { applicationId: t, surface: n, previewReady: s, previewGate: a } = e,
        r = (0, m.A)(t, n);
    return (i.useEffect(() => {
        a?.type === "permissions" && null != r && (0, h.A)().leaveFrame(r.id);
    }, [r, a?.type]),
    a?.type === "checking")
        ? (0, l.jsx)("div", { className: P.q, children: (0, l.jsx)(o.y, {}) })
        : a?.type === "permissions"
          ? (0, l.jsx)("div", {
                className: P.q,
                children: (0, l.jsx)(C, {
                    wide: !0,
                    title: I.intl.string(R.default.DYwf2n),
                    body: I.intl.string(R.default.WWj3pN),
                    children: (0, l.jsx)(c.$, {
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
                ? (0, l.jsx)(O, { applicationId: t, surface: n })
                : null
            : (0, l.jsxs)("div", {
                  className: P.q,
                  children: [
                      (0, l.jsx)(d.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, l.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(R.default["6xTawd"]),
                      }),
                  ],
              });
}
var G = n(689175),
    H = n(783791),
    D = n(826745),
    B = n(559647),
    V = n(17117);
function F(e) {
    let { canSend: t, onSend: n, onApprove: s } = e,
        [a, r] = i.useState(""),
        o = i.useCallback(() => {
            "" !== a.trim() && t && (n(a), r(""));
        }, [a, t, n]),
        c = i.useCallback(
            (e) => {
                e.preventDefault(), o();
            },
            [o],
        ),
        d = i.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != s && (e.preventDefault(), s());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), o());
            },
            [o, s],
        );
    return (0, l.jsxs)("form", {
        onSubmit: c,
        className: V.DA,
        children: [
            (0, l.jsx)(D.y, {
                value: a,
                onChange: (e) => r(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? I.intl.string(R.default.ahRdoJ) : I.intl.string(R.default.nm4w9P),
                disabled: !t,
                "aria-label": I.intl.string(R.default.OPr66w),
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
                        disabled: !t || "" === a.trim(),
                        "aria-label": I.intl.string(R.default["22GHMt"]),
                        children: (0, l.jsx)(B.l, { size: "xs", color: "currentColor", className: V.Mx }),
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
function X(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("section", {
              className: q.hb,
              children: [
                  (0, l.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, l.jsx)("div", {
                      className: q.Hu,
                      children: n.map((e) =>
                          (0, l.jsx)(
                              "span",
                              {
                                  className: q.uR,
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
function Y(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, l.jsxs)("article", {
        className: q.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, l.jsxs)("header", {
                className: q.pu,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, l.jsx)("span", {
                              className: q.dr,
                              children: (0, l.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: I.intl.string(I.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, l.jsxs)("section", {
                      className: q.hb,
                      children: [
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(R.default.KLyB8Y),
                          }),
                          (0, l.jsx)("ul", {
                              className: q.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: q.H6,
                                          children: [
                                              (0, l.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: q.UZ,
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
                      className: q.hb,
                      children: [
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(I.t["0hKkS+"]),
                          }),
                          (0, l.jsx)("ul", {
                              className: q.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: q.Xs,
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
            (0, l.jsx)(X, { label: I.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, l.jsx)(X, { label: I.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, l.jsxs)("div", {
                      className: q.nc,
                      children: [
                          (0, l.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: I.intl.string(R.default.GYoWRk),
                          }),
                          (0, l.jsx)(u.E, {
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
var K = n(700766),
    J = n(692228),
    $ = n(742715);
let Q = new Set(["thinking", "assistant_delta", "reply", "plan_proposed", "announcement"]);
function ee(e) {
    let { steps: t, announcement: n, content: s, proposal: a, onApprove: r } = e,
        o = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = [],
                        s = null,
                        l = null;
                    for (let [i, a] of e.entries()) {
                        if ("thinking" === a.kind) {
                            l = null;
                            continue;
                        }
                        if ("assistant_delta" === a.kind) {
                            let e = a.message ?? "";
                            "" !== e &&
                                (null == l
                                    ? ((l = { type: "message", key: `message-${i}`, content: e }), t.push(l))
                                    : (l.content = e)),
                                !0 === a.message_finished && (l = null);
                            continue;
                        }
                        Q.has(a.kind) ||
                            ((l = null),
                            n.push(a),
                            null == s && ((s = { type: "steps", key: `steps-${i}`, groups: [] }), t.push(s)));
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
                                    let l = (function (e) {
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
                                        i = e.filter((e) => e !== l);
                                    if (null != s && s.summary === l) {
                                        s.technical.push(...i);
                                        continue;
                                    }
                                    t.push({ step: n, summary: l, technical: i });
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
    return (0, l.jsxs)("div", {
        className: K.ue,
        children: [
            null != n && "" !== n
                ? (0, l.jsx)(u.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: y()(K.ky, K.Xt, J.XR),
                      children: n,
                  })
                : null,
            o.length > 0
                ? (0, l.jsx)("ol", {
                      className: K.dO,
                      children: o.map((e) =>
                          "message" === e.type
                              ? (0, l.jsx)(
                                    "li",
                                    {
                                        className: y()(K.ky, J.XR),
                                        children: (0, l.jsx)("div", {
                                            className: y()($.PT, K.cW),
                                            children: Z.A.parse(e.content, !0, {
                                                allowList: !0,
                                                allowHeading: !0,
                                                allowLinks: !0,
                                            }),
                                        }),
                                    },
                                    e.key,
                                )
                              : (0, l.jsx)(
                                    "li",
                                    {
                                        className: y()(K.ky, J.XR),
                                        children: (0, l.jsx)("ol", {
                                            className: K.dO,
                                            children: e.groups.map((e, t) => (0, l.jsx)(et, { group: e }, t)),
                                        }),
                                    },
                                    e.key,
                                ),
                      ),
                  })
                : null,
            null != a
                ? (0, l.jsx)("div", {
                      className: y()(K.ky, J.XR),
                      children: (0, l.jsx)(Y, { proposal: a, onApprove: r }),
                  })
                : "" === s || d
                  ? null
                  : (0, l.jsx)("div", {
                        className: y()(K.ky, J.XR),
                        children: (0, l.jsx)("div", {
                            className: y()($.PT, K.cW),
                            children: Z.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    }),
        ],
    });
}
function et(e) {
    var t;
    let { group: n } = e,
        [s, a] = i.useState(!1),
        r = i.useId(),
        o = i.useCallback(() => a((e) => !e), []),
        c =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: K.Dx,
            children: (0, l.jsx)(u.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: c,
                selectable: !0,
                className: K.iq,
                children: n.summary,
            }),
        });
    let d = s ? W.a : U._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: K.Dx,
        children: [
            (0, l.jsxs)(z.D, {
                tag: "div",
                className: K.kG,
                "aria-expanded": s,
                "aria-controls": r,
                "aria-label": I.intl.formatToPlainString(R.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, l.jsx)(u.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: c,
                        className: K.iq,
                        children: n.summary,
                    }),
                    (0, l.jsx)(d, { size: "xs", color: "currentColor", className: K.Ue }),
                ],
            }),
            (0, l.jsx)("div", {
                id: r,
                hidden: !s,
                className: K.yJ,
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
var en = n(289149);
function es(e) {
    let { messages: t, onApprove: n } = e,
        s = t[t.length - 1];
    return (0, l.jsx)("ol", {
        className: en.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, l.jsx)(
                    el,
                    {
                        role: "user",
                        children: (0, l.jsx)("div", {
                            className: y()(en.B2, J.XR),
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
            let t = e.steps.filter((e) => !Q.has(e.kind)).length > 0,
                i = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message);
            return "" !== e.content || null != e.proposal || t || i || null != e.announcement
                ? (0, l.jsx)(
                      el,
                      {
                          role: "assistant",
                          children: (0, l.jsx)(ee, {
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === s ? n : void 0,
                          }),
                      },
                      e.id,
                  )
                : null;
        }),
    });
}
function el(e) {
    let { role: t, children: n } = e;
    return (0, l.jsx)("li", { "data-role": t, className: en.xk, children: n });
}
var ei = n(863610),
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
    return (0, l.jsxs)("div", {
        className: ed.Q$,
        children: [
            (0, l.jsxs)("div", {
                className: ed.mf,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, l.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eu((0, ea.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, l.jsxs)(u.E, {
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
    return (0, l.jsxs)("div", {
        className: ed.si,
        role: "dialog",
        "aria-label": I.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, l.jsx)("div", {
                className: ed.Q$,
                children: (0, l.jsxs)("div", {
                    className: ed.mf,
                    children: [
                        (0, l.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eu((0, ea.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, l.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(eh, { label: I.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, l.jsx)(eh, { label: I.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, l.jsxs)("div", {
                className: ed.mf,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["kILb+R"]),
                    }),
                    (0, l.jsx)(u.E, {
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
        n = i.useRef(null);
    return (0, l.jsx)(eo.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, l.jsx)(em, { project: t }),
        children: (e) =>
            (0, l.jsx)(z.D, {
                innerRef: n,
                className: ed.Y$,
                "aria-label": I.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, l.jsx)(ec.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
    let { thinking: t, projectUsage: n, connState: s, modelSettings: i, onModelSettingsChange: a } = e;
    return (0, l.jsxs)("div", {
        className: eg.jf,
        children: [
            (0, l.jsx)("div", {
                className: eg.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, l.jsxs)("div", {
                          className: eg.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": I.intl.string(R.default.C0t6bp),
                          children: [
                              (0, l.jsx)(ei.n, { dotRadius: 3.5, themed: !0 }),
                              (0, l.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: I.intl.string(R.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == i
                ? null
                : (0, l.jsx)(er.A, { settings: i.settings, choices: i.choices, disabled: "open" !== s, onChange: a }),
            null == n
                ? null
                : (0, l.jsxs)("span", {
                      className: eg.BP,
                      children: [
                          (0, l.jsx)(u.E, {
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
                          (0, l.jsx)(ep, { project: n }),
                      ],
                  }),
            (0, l.jsx)(u.E, {
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
    ej = n(192308),
    ek = n(651649),
    e_ = n(670455);
let eb = "shownVibegrationsFeedbackProjectIds";
var eE = n(104071);
function eN(e) {
    let { projectId: t } = e,
        s = (0, x.bG)([H.A], () => H.A.getMessages(t), [t]),
        a = (0, x.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        o = (0, x.bG)([H.A], () => H.A.getProjectUsage(t), [t]),
        c = (0, x.bG)([r.Ay], () => r.Ay.getModelSettings(t), [t]),
        d = i.useRef(null),
        u = i.useRef(null),
        h = i.useRef(!0);
    i.useEffect(() => {
        h.current && u.current?.scrollToBottom();
    }, [s]);
    let m = i.useCallback(() => {
        let e = u.current;
        null != e && (h.current = 32 > e.getDistanceFromBottom());
    }, []);
    i.useLayoutEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            s = new ResizeObserver((s) => {
                let [l] = s,
                    i = l?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
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
        i.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = H.A.getMessages(e).filter((e) => "assistant" === e.role && (0, H.B)(e)).length;
                    !(t < 3) &&
                        ((ev.w.get(eb) ?? []).includes(e) ||
                            ek.A.possiblyShowFeedbackModal(e_.MW.VIBEGRATIONS, () => {
                                let s;
                                (s = ev.w.get(eb) ?? []).includes(e) || ev.w.set(eb, [...s, e]),
                                    (0, ej.openModalLazy)(async () => {
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
    let p = i.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        g = i.useCallback((e) => (0, r.XZ)(t, e), [t]),
        f = i.useCallback(() => p(I.intl.string(R.default.Jj8Ftb)), [p]),
        v = "open" === a,
        j = s[s.length - 1],
        k = null != j && "assistant" === j.role && null != j.proposal,
        _ = null != j && "assistant" === j.role && !(0, H.B)(j),
        b = k && v ? f : void 0;
    return (0, l.jsxs)("section", {
        ref: d,
        "data-vibegrations-chat": !0,
        className: eE.T,
        children: [
            (0, l.jsx)(G.Ch, {
                ref: u,
                onScroll: m,
                "data-vibegrations-chat-log": !0,
                className: eE.N,
                children: (0, l.jsx)(es, { messages: s, onApprove: b }),
            }),
            (0, l.jsx)(ex, { thinking: _, projectUsage: o, connState: a, modelSettings: c, onModelSettingsChange: g }),
            (0, l.jsx)(F, { canSend: v, onSend: p, onApprove: b }),
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
        o = i.useRef(null),
        [c, d] = (0, ey.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, eA.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
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
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, l.jsxs)("div", {
        className: eC.pz,
        hidden: !t,
        children: [
            (0, l.jsx)("div", { className: eC.Di, onPointerDown: g }),
            (0, l.jsx)("div", { ref: o, className: eC.kL, style: { width: m }, children: a }),
        ],
    });
}
function eI(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([H.A], () => H.A.isThinking(t), [t]);
    return (0, l.jsx)("div", { className: J.MP, "data-active": n, "aria-hidden": !0 });
}
var eM = n(291815);
function eO(e) {
    let { projectId: t, applicationId: n, surface: s, chatOpen: o, previewReady: c, previewGate: d } = e,
        u = i.useRef(null),
        [h, m] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === N.U4.MAIN) return (0, a.HV)(n), () => (0, a.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, r.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && m(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, a.Zq)(0), []);
    let p = Math.max(360, h - 320),
        g = o || s.type === N.U4.MAIN;
    return (0, l.jsxs)("div", {
        ref: u,
        className: eM.LB,
        children: [
            (0, l.jsx)("div", {
                className: eM.fm,
                children: (0, l.jsx)(L, { applicationId: n, surface: s, previewReady: c, previewGate: d }),
            }),
            null != t && g
                ? (0, l.jsx)(eR, {
                      open: o,
                      maxWidth: p,
                      onWidthChange: a.Zq,
                      children: (0, l.jsxs)("div", {
                          className: eM.cO,
                          children: [(0, l.jsx)(eI, { projectId: t }), (0, l.jsx)(eN, { projectId: t }, t)],
                      }),
                  })
                : null,
        ],
    });
}
