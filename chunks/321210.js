n.d(t, { A: () => ex });
var s = n(477900),
    l = n(582128),
    a = n(17928),
    r = n(113854),
    i = n(91242),
    c = n(948230),
    o = n(998939),
    d = n(289873),
    u = n(297264),
    m = n(834730),
    p = n(821609),
    h = n(323384),
    f = n(818085),
    g = n(375708),
    x = n(407663);
function _(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: g.intl.string(f.default["bTjP+Y"]),
        className: x.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var v = n(616694);
function j(e) {
    let { state: t, gate: n } = e;
    return n?.type === "checking"
        ? (0, s.jsx)("div", { className: v.qs, children: (0, s.jsx)(d.y, {}) })
        : n?.type === "permissions"
          ? (0, s.jsx)("div", {
                className: v.qs,
                children: (0, s.jsxs)("div", {
                    className: v.z5,
                    children: [
                        (0, s.jsxs)("div", {
                            className: v.sQ,
                            children: [
                                (0, s.jsx)(u.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: g.intl.string(f.default.DYwf2n),
                                }),
                                (0, s.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: g.intl.string(f.default.WWj3pN),
                                }),
                            ],
                        }),
                        (0, s.jsx)(p.$, {
                            variant: "primary",
                            size: "md",
                            text: g.intl.string(f.default["CRfE/E"]),
                            onClick: n.onReviewPermissions,
                            loading: n.loading,
                        }),
                    ],
                }),
            })
          : "local" === t.status
            ? (0, s.jsx)(_, { src: t.src }, t.src)
            : "no-app" === t.status
              ? (0, s.jsxs)("div", {
                    className: v.qs,
                    children: [
                        (0, s.jsx)(h.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                        (0, s.jsx)(m.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.string(f.default["6xTawd"]),
                        }),
                    ],
                })
              : "error" === t.status
                ? (0, s.jsxs)("div", {
                      className: v.qs,
                      children: [
                          (0, s.jsx)(u.D, {
                              variant: "heading-md/semibold",
                              color: "text-default",
                              children: g.intl.string(f.default.MeLWCr),
                          }),
                          (0, s.jsx)(m.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              className: v.tj,
                              children: g.intl.string(f.default["1RCbQT"]),
                          }),
                      ],
                  })
                : "blocked" === t.status
                  ? (0, s.jsxs)("div", {
                        className: v.qs,
                        children: [
                            (0, s.jsx)(u.D, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: g.intl.string(f.default.MHvjVv),
                            }),
                            (0, s.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: v.tj,
                                children: g.intl.string(f.default.TIbJ5p),
                            }),
                        ],
                    })
                  : "active" === t.status
                    ? null
                    : (0, s.jsx)("div", { className: v.qs, children: (0, s.jsx)(d.y, {}) });
}
var E = n(689175),
    A = n(783791),
    k = n(826745),
    N = n(559647),
    b = n(17117);
function y(e) {
    let { canSend: t, onSend: n, onApprove: a } = e,
        [r, i] = l.useState(""),
        c = l.useCallback(() => {
            "" !== r.trim() && t && (n(r), i(""));
        }, [r, t, n]),
        o = l.useCallback(
            (e) => {
                e.preventDefault(), c();
            },
            [c],
        ),
        d = l.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != a && (e.preventDefault(), a());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), c());
            },
            [c, a],
        );
    return (0, s.jsxs)("form", {
        onSubmit: o,
        className: b.DA,
        children: [
            (0, s.jsx)(k.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? g.intl.string(f.default.ahRdoJ) : g.intl.string(f.default.nm4w9P),
                disabled: !t,
                "aria-label": g.intl.string(f.default.OPr66w),
                rows: 1,
                className: b.jp,
            }),
            (0, s.jsxs)("div", {
                className: b.fF,
                children: [
                    (0, s.jsx)("div", { className: b.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: b.rt,
                        disabled: !t || "" === r.trim(),
                        "aria-label": g.intl.string(f.default["22GHMt"]),
                        children: (0, s.jsx)(N.l, { size: "xs", color: "currentColor", className: b.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var S = n(503698),
    T = n.n(S);
n(321073);
var w = n(847374),
    R = n(320448),
    I = n(939249),
    C = n(46054),
    P = n(84206);
function O(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: P.hb,
              children: [
                  (0, s.jsx)(m.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: P.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: P.uR,
                                  children: (0, s.jsx)(m.E, {
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
function G(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, s.jsxs)("article", {
        className: P.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: P.pu,
                children: [
                    (0, s.jsx)(m.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: g.intl.string(f.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: P.dr,
                              children: (0, s.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: g.intl.string(g.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, s.jsxs)("section", {
                      className: P.hb,
                      children: [
                          (0, s.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: g.intl.string(f.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: P.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: P.H6,
                                          children: [
                                              (0, s.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: P.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, s.jsx)(m.E, {
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
                ? (0, s.jsxs)("section", {
                      className: P.hb,
                      children: [
                          (0, s.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: g.intl.string(g.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: P.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: P.Xs,
                                          children: [
                                              (0, s.jsxs)(m.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, s.jsx)(m.E, {
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
            (0, s.jsx)(O, { label: g.intl.string(f.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(O, { label: g.intl.string(f.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: P.nc,
                      children: [
                          (0, s.jsx)(p.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: g.intl.string(f.default.GYoWRk),
                          }),
                          (0, s.jsx)(m.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: P.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var B = n(700766),
    D = n(692228),
    H = n(742715);
let V = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function L(e) {
    let { steps: t, announcement: n, content: a, proposal: r, onApprove: i } = e,
        c = l.useMemo(
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
                                        return g.intl.string(f.default["0ce6LB"]);
                                    case "planned":
                                        return g.intl.formatToPlainString(f.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return g.intl.string(f.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? g.intl.string(f.default.nv6pUM);
                                    case "assembling":
                                        return g.intl.string(f.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return g.intl.string(f.default.VZuRug);
                                    case "building":
                                        return g.intl.string(f.default["s+ylXP"]);
                                    case "bundling":
                                        return g.intl.string(f.default.rEQlMx);
                                    case "committing":
                                        return g.intl.string(f.default.Yvyw1H);
                                    case "built":
                                        return g.intl.string(f.default.hOcVAj);
                                    case "build_error":
                                        return g.intl.string(f.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return g.intl.string(f.default.sz8yAj);
                                    case "preview_connecting":
                                        return g.intl.string(f.default.pOYDEc);
                                    case "awaiting_auth":
                                        return g.intl.string(f.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return g.intl.string(f.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return g.intl.string(f.default.FUWbq1);
                                    case "deploying":
                                        return g.intl.string(f.default.wcXX8Z);
                                    case "preview_ready":
                                        return g.intl.string(f.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return g.intl.string(f.default.j3hBoA);
                                    default:
                                        return g.intl.string(f.default.nv6pUM);
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
    return (0, s.jsxs)("div", {
        className: T()(B.ue, D.XR),
        children: [
            null != n && "" !== n
                ? (0, s.jsx)(m.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: B.Xt,
                      children: n,
                  })
                : null,
            c.length > 0
                ? (0, s.jsx)("ol", { className: B.dO, children: c.map((e, t) => (0, s.jsx)(M, { group: e }, t)) })
                : null,
            null != r
                ? (0, s.jsx)(G, { proposal: r, onApprove: i })
                : "" !== a
                  ? (0, s.jsx)("div", {
                        className: B.ky,
                        children: (0, s.jsx)("div", {
                            className: T()(H.PT, B.cW),
                            children: C.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function M(e) {
    var t;
    let { group: n } = e,
        [a, r] = l.useState(!1),
        i = l.useId(),
        c = l.useCallback(() => r((e) => !e), []),
        o =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, s.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: B.Dx,
            children: (0, s.jsx)(m.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: o,
                selectable: !0,
                className: B.iq,
                children: n.summary,
            }),
        });
    let d = a ? w.a : R._;
    return (0, s.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: B.Dx,
        children: [
            (0, s.jsxs)(I.D, {
                tag: "div",
                className: B.kG,
                "aria-expanded": a,
                "aria-controls": i,
                "aria-label": g.intl.formatToPlainString(f.default.z4KWsN, { step: n.summary }),
                onClick: c,
                children: [
                    (0, s.jsx)(m.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: o,
                        className: B.iq,
                        children: n.summary,
                    }),
                    (0, s.jsx)(d, { size: "xs", color: "currentColor", className: B.Ue }),
                ],
            }),
            (0, s.jsx)("div", {
                id: i,
                hidden: !a,
                className: B.yJ,
                children: n.technical.map((e, t) =>
                    (0, s.jsx)(
                        m.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var F = n(289149);
function U(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: F.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    W,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: T()(F.B2, D.XR),
                            children: (0, s.jsx)(m.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !V.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, s.jsx)(
                      W,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(L, {
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
function W(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: F.xk, children: n });
}
var z = n(863610),
    $ = n(673724),
    q = n(922016),
    Z = n(885574),
    Y = n(677175);
function K(e) {
    return e.toLocaleString();
}
function X(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: Y.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: Y.mf,
                children: [
                    (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [K((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, s.jsxs)(m.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    K(n.input_tokens),
                    " in \xb7 ",
                    K(n.output_tokens),
                    " out \xb7 ",
                    K(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    K(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function J(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, s.jsxs)("div", {
        className: Y.si,
        role: "dialog",
        "aria-label": g.intl.string(f.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: Y.Q$,
                children: (0, s.jsxs)("div", {
                    className: Y.mf,
                    children: [
                        (0, s.jsxs)(m.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [K((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(X, { label: g.intl.string(f.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)(X, { label: g.intl.string(f.default.R9aduM), usage: t.codegen }),
            (0, s.jsxs)("div", {
                className: Y.mf,
                children: [
                    (0, s.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.string(f.default["kILb+R"]),
                    }),
                    (0, s.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, $.sj)(n) ? "\u2014" : `${Math.round(100 * (0, $.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(q.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(J, { project: t }),
        children: (e) =>
            (0, s.jsx)(I.D, {
                innerRef: n,
                className: Y.Y$,
                "aria-label": g.intl.string(f.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(Z.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var ee = n(154861);
function et(e) {
    switch (e) {
        case "open":
            return g.intl.string(f.default.cLhFMi);
        case "connecting":
            return g.intl.string(f.default.W7oyuf);
        case "failed":
            return g.intl.string(f.default.eE60xI);
        case "closed":
            return g.intl.string(f.default["yBmS+I"]);
    }
}
function en(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: ee.jf,
        children: [
            (0, s.jsx)("div", {
                className: ee.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: ee.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": g.intl.string(f.default.C0t6bp),
                          children: [
                              (0, s.jsx)(z.n, { dotRadius: 3.5, themed: !0 }),
                              (0, s.jsx)(m.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: g.intl.string(f.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, s.jsxs)("span", {
                      className: ee.BP,
                      children: [
                          (0, s.jsx)(m.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": g.intl.formatToPlainString(f.default["7SZZvj"], {
                                  runes: (0, $.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: g.intl.formatToPlainString(f.default["4PFO2p"], {
                                  runes: (0, $.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(Q, { project: n }),
                      ],
                  }),
            (0, s.jsx)(m.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": g.intl.formatToPlainString(f.default.eDDdhB, { status: et(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: ee.XF,
                children: et(l),
            }),
        ],
    });
}
var es = n(506774),
    el = n(192308),
    ea = n(651649),
    er = n(670455);
let ei = "shownVibegrationsFeedbackProjectIds";
var ec = n(104071);
function eo(e) {
    let { projectId: t, open: r } = e,
        i = (0, a.bG)([A.A], () => A.A.getMessages(t), [t]),
        c = (0, a.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        d = (0, a.bG)([A.A], () => A.A.getProjectUsage(t), [t]),
        u = l.useRef(null),
        m = l.useRef(!0);
    l.useEffect(() => {
        m.current && u.current?.scrollToBottom();
    }, [i]);
    let p = l.useCallback(() => {
        let e = u.current;
        null != e && (m.current = 32 > e.getDistanceFromBottom());
    }, []);
    l.useEffect(() => {
        r && m.current && u.current?.scrollToBottom();
    }, [r]),
        l.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        l.useEffect(
            () => () =>
                (function (e) {
                    let t = A.A.getMessages(e).filter((e) => "assistant" === e.role && (0, A.B)(e)).length;
                    !(t < 3) &&
                        ((es.w.get(ei) ?? []).includes(e) ||
                            ea.A.possiblyShowFeedbackModal(er.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = es.w.get(ei) ?? []).includes(e) || es.w.set(ei, [...l, e]),
                                    (0, el.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("4079"),
                                            n.e("22255"),
                                            n.e("55925"),
                                            n.e("40794"),
                                            n.e("37381"),
                                            n.e("47004"),
                                            n.e("41676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, s.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let h = l.useCallback(
            (e) => {
                (0, o.dv)(t, e);
            },
            [t],
        ),
        x = l.useCallback(() => h(g.intl.string(f.default.Jj8Ftb)), [h]),
        _ = "open" === c,
        v = i[i.length - 1],
        j = null != v && "assistant" === v.role && null != v.proposal,
        k = null != v && "assistant" === v.role && !(0, A.B)(v),
        N = j && _ ? x : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: ec.T,
        children: [
            (0, s.jsx)(E.Ch, {
                ref: u,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: ec.N,
                children: (0, s.jsx)(U, { messages: i, onApprove: N }),
            }),
            (0, s.jsx)(en, { thinking: k, projectUsage: d, connState: c }),
            (0, s.jsx)(y, { canSend: _, onSend: h, onApprove: N }),
        ],
    });
}
function ed(e) {
    let { projectId: t } = e,
        n = (0, a.bG)([A.A], () => A.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: D.MP, "data-active": n, "aria-hidden": !0 });
}
var eu = n(956518),
    em = n(627363),
    ep = n(207371),
    eh = n(208137),
    ef = n(972786),
    eg = n(291815);
function ex(e) {
    let { projectId: t, appId: n, channelId: d, chatOpen: u, onActivityStatusChange: m, previewGate: p } = e,
        h = (function (e, t, n) {
            let { data: s, isLoading: c } = (0, em.YY)(e ?? void 0),
                d = (0, a.bG)([ef.A, o.Ay], () => {
                    if (null == e || null == (0, eh.V)()) return null;
                    let t = ef.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    if (null == t) return null;
                    let n = o.Ay.getPreviewTs(t.id);
                    return (0, eh.s)(t, e, n);
                }, [e]),
                u = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null),
                m = (0, a.bG)([i.A], () => null != e && i.A.isLaunchingFrame(e), [e]),
                p = null != e && u === e,
                [h, f] = l.useState(null),
                g = null != e && h === e,
                x = (0, ep.x)(s),
                _ = null != e && null != (0, eu.Ay)(e),
                v = l.useRef(!1),
                j = l.useRef(!1);
            l.useEffect(
                () => () => {
                    j.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e && null == d && x && _) {
                        if (p) {
                            i.A.getConnectedFrame()?.channelId !== n && r.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != u ||
                            m ||
                            v.current ||
                            g ||
                            ((v.current = !0),
                            r.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = i.A.getConnectedFrame();
                                    j.current && t?.applicationId === e && r.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => f(e))
                                .finally(() => {
                                    v.current = !1;
                                }));
                    }
                }, [t, e, d, x, _, p, u, m, g, n]);
            let E = l.useRef(null);
            return (l.useEffect(() => {
                E.current = p ? e : null;
            }, [p, e]),
            l.useEffect(
                () => () => {
                    let e = E.current;
                    null != e && r.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != d
                  ? { status: "local", src: d }
                  : p
                    ? { status: "active" }
                    : c || (x && _)
                      ? g
                          ? { status: "error" }
                          : null != u
                            ? { status: "blocked" }
                            : { status: "launching" }
                      : { status: "no-app" };
        })(n, null == p, d),
        f = l.useRef(null),
        g = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null);
    return (
        l.useLayoutEffect(() => {
            if (null == d) return (0, c.HV)(n), () => (0, c.HV)(null);
        }, [n, d]),
        l.useEffect(() => {
            m?.(h.status);
        }, [h.status, m]),
        l.useEffect(() => {
            p?.type === "permissions" && null != n && g === n && r.A.stopFrame({ applicationId: n });
        }, [n, g, p?.type]),
        l.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        l.useLayoutEffect(() => {
            let e = f.current;
            if (null == e) return void (0, c.Zq)(0);
            function t() {
                (0, c.Zq)(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, [t, u]),
        (0, s.jsxs)("div", {
            className: eg.LB,
            children: [
                (0, s.jsx)("div", { className: eg.fm, children: (0, s.jsx)(j, { state: h, gate: p }) }),
                null != t &&
                    u &&
                    (0, s.jsx)("div", {
                        ref: f,
                        className: eg.AF,
                        children: (0, s.jsxs)("div", {
                            className: eg.cO,
                            children: [(0, s.jsx)(ed, { projectId: t }), (0, s.jsx)(eo, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
