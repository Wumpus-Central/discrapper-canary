n.d(t, { A: () => eo });
var s = n(477900),
    l = n(582128),
    a = n(948230),
    r = n(998939),
    i = n(323384),
    c = n(834730),
    o = n(297264),
    u = n(289873),
    d = n(818085),
    m = n(375708),
    p = n(407663);
function f(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: m.intl.string(d.default["bTjP+Y"]),
        className: p.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var h = n(616694);
function x(e) {
    let { state: t } = e;
    return "local" === t.status
        ? (0, s.jsx)(f, { src: t.src }, t.src)
        : "no-app" === t.status
          ? (0, s.jsxs)("div", {
                className: h.q,
                children: [
                    (0, s.jsx)(i.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(d.default["6xTawd"]),
                    }),
                ],
            })
          : "error" === t.status
            ? (0, s.jsxs)("div", {
                  className: h.q,
                  children: [
                      (0, s.jsx)(o.D, {
                          variant: "heading-md/semibold",
                          color: "text-default",
                          children: m.intl.string(d.default.MeLWCr),
                      }),
                      (0, s.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          className: h.t,
                          children: m.intl.string(d.default["1RCbQT"]),
                      }),
                  ],
              })
            : "blocked" === t.status
              ? (0, s.jsxs)("div", {
                    className: h.q,
                    children: [
                        (0, s.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: m.intl.string(d.default.MHvjVv),
                        }),
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: h.t,
                            children: m.intl.string(d.default.TIbJ5p),
                        }),
                    ],
                })
              : "active" === t.status
                ? null
                : (0, s.jsx)("div", { className: h.q, children: (0, s.jsx)(u.y, {}) });
}
var g = n(17928),
    v = n(689175),
    _ = n(783791),
    j = n(826745),
    E = n(559647),
    k = n(17117);
function A(e) {
    let { canSend: t, connState: n, onSend: a, onApprove: r } = e,
        [i, c] = l.useState(""),
        o = l.useCallback(() => {
            "" !== i.trim() && t && (a(i), c(""));
        }, [i, t, a]),
        u = l.useCallback(
            (e) => {
                e.preventDefault(), o();
            },
            [o],
        ),
        p = l.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != r && (e.preventDefault(), r());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), o());
            },
            [o, r],
        );
    return (0, s.jsxs)("form", {
        onSubmit: u,
        className: k.DA,
        children: [
            (0, s.jsx)(j.y, {
                value: i,
                onChange: (e) => c(e.currentTarget.value),
                onKeyDown: p,
                placeholder: t
                    ? m.intl.string(d.default.ahRdoJ)
                    : m.intl.formatToPlainString(d.default.QtdNbb, { connState: n }),
                disabled: !t,
                "aria-label": m.intl.string(d.default.OPr66w),
                rows: 1,
                className: k.jp,
            }),
            (0, s.jsxs)("div", {
                className: k.fF,
                children: [
                    (0, s.jsx)("div", { className: k.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: k.rt,
                        disabled: !t || "" === i.trim(),
                        "aria-label": m.intl.string(d.default["22GHMt"]),
                        children: (0, s.jsx)(E.l, { size: "xs", color: "currentColor", className: k.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var b = n(503698),
    N = n.n(b),
    y = n(46054),
    S = n(821609),
    T = n(84206);
function w(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: T.hb,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: T.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: T.uR,
                                  children: (0, s.jsx)(c.E, {
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
function C(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, s.jsxs)("article", {
        className: T.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: T.pu,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: m.intl.string(d.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: T.dr,
                              children: (0, s.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: m.intl.string(m.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, s.jsxs)("section", {
                      className: T.hb,
                      children: [
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(d.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: T.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: T.H6,
                                          children: [
                                              (0, s.jsx)(c.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: T.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, s.jsx)(c.E, {
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
                      className: T.hb,
                      children: [
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(m.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: T.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: T.Xs,
                                          children: [
                                              (0, s.jsxs)(c.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, s.jsx)(c.E, {
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
            (0, s.jsx)(w, { label: m.intl.string(d.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(w, { label: m.intl.string(d.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: T.nc,
                      children: [
                          (0, s.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: m.intl.string(d.default.GYoWRk),
                          }),
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: T.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var R = n(700766),
    I = n(692228),
    P = n(742715);
let O = new Set(["thinking", "reply", "plan_proposed"]);
function G(e) {
    let { steps: t, content: n, proposal: l, onApprove: a } = e;
    return (0, s.jsxs)("div", {
        className: N()(R.ue, I.XR),
        children: [
            t.length > 0
                ? (0, s.jsx)("ol", { className: R.dO, children: t.map((e, t) => (0, s.jsx)(H, { step: e }, t)) })
                : null,
            null != l
                ? (0, s.jsx)(C, { proposal: l, onApprove: a })
                : "" !== n
                  ? (0, s.jsx)("div", {
                        className: R.ky,
                        children: (0, s.jsx)("div", {
                            className: N()(P.PT, R.cW),
                            children: y.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function H(e) {
    var t;
    let { step: n } = e,
        { summary: l, detail: a } = (function (e) {
            switch (e.kind) {
                case "planning":
                    return { summary: m.intl.string(d.default["0ce6LB"]) };
                case "planned":
                    return {
                        summary: m.intl.formatToPlainString(d.default["h6H4+U"], { count: e.commands?.length ?? 0 }),
                        detail: (e.commands ?? []).map((e) => "/" + e.name).join(", "),
                    };
                case "thinking":
                    return { summary: m.intl.string(d.default.K7TkAL) };
                case "writing_command":
                    return { summary: e.name ?? m.intl.string(d.default.nv6pUM), detail: e.detail };
                case "assembling":
                    return { summary: m.intl.string(d.default["9G3ZmA"]) };
                case "installing_deps":
                    return { summary: m.intl.string(d.default.VZuRug) };
                case "building":
                    return { summary: m.intl.string(d.default["s+ylXP"]) };
                case "bundling":
                    return { summary: m.intl.string(d.default.rEQlMx) };
                case "committing":
                    return { summary: m.intl.string(d.default.Yvyw1H) };
                case "built":
                    return { summary: m.intl.string(d.default.hOcVAj) };
                case "build_error":
                    return {
                        summary: m.intl.formatToPlainString(d.default["6L9Vwt"], {
                            message: e.message ?? m.intl.string(d.default.HOR2G6),
                        }),
                        detail: e.stderr_tail,
                    };
                case "healthchecking":
                    return { summary: m.intl.string(d.default.sz8yAj) };
                case "healthcheck_passed":
                    return { summary: m.intl.string(d.default["x+sqTG"]) };
                case "healthcheck_failed":
                    return {
                        summary: m.intl.formatToPlainString(d.default.FUWbq1, {
                            message: e.message ?? m.intl.string(d.default.HOR2G6),
                        }),
                    };
                case "deploying":
                    return { summary: m.intl.string(d.default.wcXX8Z) };
                case "preview_ready":
                    return { summary: m.intl.string(d.default["78YNh7"]) };
                case "error":
                case "terminal_error":
                    return {
                        summary: m.intl.formatToPlainString(d.default.j3hBoA, {
                            message: e.message ?? m.intl.string(d.default.HOR2G6),
                        }),
                    };
                default:
                    return { summary: JSON.stringify(e) };
            }
        })(n);
    return (0, s.jsxs)("li", {
        "data-step-kind": n.kind,
        className: R.Dx,
        children: [
            (0, s.jsx)(c.E, {
                tag: "div",
                variant: "text-sm/normal",
                color:
                    "error" === (t = n.kind) || "terminal_error" === t || "build_error" === t
                        ? "text-feedback-critical"
                        : "text-default",
                selectable: !0,
                className: R.iq,
                children: l,
            }),
            null != a && "" !== a
                ? (0, s.jsx)(c.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      selectable: !0,
                      className: R.yJ,
                      children: a,
                  })
                : null,
        ],
    });
}
var B = n(289149);
function L(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: B.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    V,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: N()(B.B2, I.XR),
                            children: (0, s.jsx)(c.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !O.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length
                ? null
                : (0, s.jsx)(
                      V,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(G, {
                              steps: t,
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
function V(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: B.xk, children: n });
}
var D = n(863610),
    F = n(673724),
    M = n(922016),
    U = n(939249),
    Z = n(885574),
    W = n(677175);
function q(e) {
    return e.toLocaleString();
}
function $(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: W.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: W.mf,
                children: [
                    (0, s.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [q((0, F.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, s.jsxs)(c.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    q(n.input_tokens),
                    " in \xb7 ",
                    q(n.output_tokens),
                    " out \xb7 ",
                    q(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    q(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function z(e) {
    let { project: t } = e,
        n = (0, F.wV)(t.orchestrator, t.codegen);
    return (0, s.jsxs)("div", {
        className: W.si,
        role: "dialog",
        "aria-label": m.intl.string(d.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: W.Q$,
                children: (0, s.jsxs)("div", {
                    className: W.mf,
                    children: [
                        (0, s.jsxs)(c.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [q((0, F.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)($, { label: m.intl.string(d.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)($, { label: m.intl.string(d.default.R9aduM), usage: t.codegen }),
            (0, s.jsxs)("div", {
                className: W.mf,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(d.default["kILb+R"]),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, F.sj)(n) ? "\u2014" : `${Math.round(100 * (0, F.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(M.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(z, { project: t }),
        children: (e) =>
            (0, s.jsx)(U.D, {
                innerRef: n,
                className: W.Y$,
                "aria-label": m.intl.string(d.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(Z.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var X = n(154861);
function Y(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: X.jf,
        children: [
            (0, s.jsx)("div", {
                className: X.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: X.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": m.intl.string(d.default.C0t6bp),
                          children: [
                              (0, s.jsx)(D.n, { dotRadius: 3.5, themed: !0 }),
                              (0, s.jsx)(c.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: m.intl.string(d.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, s.jsxs)("span", {
                      className: X.BP,
                      children: [
                          (0, s.jsx)(c.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": m.intl.formatToPlainString(d.default["7SZZvj"], {
                                  runes: (0, F.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: m.intl.formatToPlainString(d.default["4PFO2p"], {
                                  runes: (0, F.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(J, { project: n }),
                      ],
                  }),
            (0, s.jsxs)(c.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: X.XF,
                children: ["WS: ", l],
            }),
        ],
    });
}
var K = n(104071);
function Q(e) {
    let { projectId: t, open: n } = e,
        a = (0, g.bG)([_.A], () => _.A.getMessages(t), [t]),
        i = (0, g.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        c = (0, g.bG)([_.A], () => _.A.getProjectUsage(t), [t]),
        o = l.useRef(null),
        u = l.useRef(!0),
        [p, f] = l.useState(!0);
    l.useEffect(() => {
        u.current && o.current?.scrollToBottom();
    }, [a]);
    let h = l.useCallback(() => {
        let e = o.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        (u.current = t < 32), f(t < 4);
    }, []);
    l.useEffect(() => {
        n && u.current && o.current?.scrollToBottom();
    }, [n]),
        l.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]);
    let x = l.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        j = l.useCallback(() => x(m.intl.string(d.default.Jj8Ftb)), [x]),
        E = "open" === i,
        k = a[a.length - 1],
        b = null != k && "assistant" === k.role && null != k.proposal,
        N = null != k && "assistant" === k.role && !(0, _.B)(k),
        y = b && E ? j : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: K.TE,
        children: [
            (0, s.jsxs)("div", {
                className: K.Nx,
                children: [
                    (0, s.jsx)(v.Ch, {
                        ref: o,
                        onScroll: h,
                        "data-vibegrations-chat-log": !0,
                        className: K.N$,
                        children: (0, s.jsx)(L, { messages: a, onApprove: y }),
                    }),
                    (0, s.jsx)("div", { className: K.l2, "data-visible": !p, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsx)(Y, { thinking: N, projectUsage: c, connState: i }),
            (0, s.jsx)(A, { canSend: E, connState: i, onSend: x, onApprove: y }),
        ],
    });
}
function ee(e) {
    let { projectId: t } = e,
        n = (0, g.bG)([_.A], () => _.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: I.MP, "data-active": n, "aria-hidden": !0 });
}
var et = n(956518),
    en = n(627363),
    es = n(113854),
    el = n(91242),
    ea = n(207371),
    er = n(208137),
    ei = n(972786),
    ec = n(291815);
function eo(e) {
    let { projectId: t, appId: n, channelId: i, chatOpen: c, onActivityStatusChange: o } = e,
        u = (function (e, t, n) {
            let { data: s, isLoading: a } = (0, en.YY)(e ?? void 0),
                r = (0, g.bG)([ei.A], () => {
                    if (null == e || null == (0, er.V)()) return null;
                    let t = ei.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    return null != t ? (0, er.s)(t, e) : null;
                }, [e]),
                i = (0, g.bG)([el.A], () => el.A.getConnectedFrame()?.applicationId ?? null),
                c = (0, g.bG)([el.A], () => null != e && el.A.isLaunchingFrame(e), [e]),
                o = null != e && i === e,
                [u, d] = l.useState(null),
                m = null != e && u === e,
                p = (0, ea.x)(s),
                f = null != e && null != (0, et.Ay)(e),
                h = l.useRef(!1),
                x = l.useRef(!1);
            l.useEffect(
                () => () => {
                    x.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e && null == r && p && f) {
                        if (o) {
                            el.A.getConnectedFrame()?.channelId !== n && es.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != i ||
                            c ||
                            h.current ||
                            m ||
                            ((h.current = !0),
                            es.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = el.A.getConnectedFrame();
                                    x.current && t?.applicationId === e && es.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => d(e))
                                .finally(() => {
                                    h.current = !1;
                                }));
                    }
                }, [t, e, r, p, f, o, i, c, m, n]);
            let v = l.useRef(null);
            return (l.useEffect(() => {
                v.current = o ? e : null;
            }, [o, e]),
            l.useEffect(
                () => () => {
                    let e = v.current;
                    null != e && es.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != r
                  ? { status: "local", src: r }
                  : o
                    ? { status: "active" }
                    : a || (p && f)
                      ? m
                          ? { status: "error" }
                          : null != i
                            ? { status: "blocked" }
                            : { status: "launching" }
                      : { status: "no-app" };
        })(n, !0, i),
        d = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            if (null == i) return (0, a.HV)(n), () => (0, a.HV)(null);
        }, [n, i]),
        l.useEffect(() => {
            o?.(u.status);
        }, [u.status, o]),
        l.useEffect(() => {
            null != t && (0, r.Hc)(t);
        }, [t]),
        l.useLayoutEffect(() => {
            let e = d.current;
            if (null == e) return void (0, a.Zq)(0);
            function t() {
                (0, a.Zq)(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, [t, c]),
        (0, s.jsxs)("div", {
            className: ec.LB,
            children: [
                (0, s.jsx)("div", { className: ec.fm, children: (0, s.jsx)(x, { state: u }) }),
                null != t &&
                    c &&
                    (0, s.jsx)("div", {
                        ref: d,
                        className: ec.AF,
                        children: (0, s.jsxs)("div", {
                            className: ec.cO,
                            children: [(0, s.jsx)(ee, { projectId: t }), (0, s.jsx)(Q, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
