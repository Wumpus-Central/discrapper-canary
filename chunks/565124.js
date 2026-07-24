n.d(t, { A: () => ed });
var s = n(627968),
    a = n(64700),
    l = n(948230),
    r = n(998939),
    i = n(323384),
    c = n(834730),
    o = n(297264),
    d = n(289873),
    u = n(818085),
    m = n(375708),
    p = n(407663);
function h(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: m.intl.string(u.default["bTjP+Y"]),
        className: p.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var f = n(616694);
function x(e) {
    let { state: t } = e;
    return "local" === t.status
        ? (0, s.jsx)(h, { src: t.src }, t.src)
        : "no-app" === t.status
          ? (0, s.jsxs)("div", {
                className: f.q,
                children: [
                    (0, s.jsx)(i.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(u.default["6xTawd"]),
                    }),
                ],
            })
          : "error" === t.status
            ? (0, s.jsxs)("div", {
                  className: f.q,
                  children: [
                      (0, s.jsx)(o.D, {
                          variant: "heading-md/semibold",
                          color: "text-default",
                          children: m.intl.string(u.default.MeLWCr),
                      }),
                      (0, s.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          className: f.t,
                          children: m.intl.string(u.default["1RCbQT"]),
                      }),
                  ],
              })
            : "blocked" === t.status
              ? (0, s.jsxs)("div", {
                    className: f.q,
                    children: [
                        (0, s.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: m.intl.string(u.default.MHvjVv),
                        }),
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: f.t,
                            children: m.intl.string(u.default.TIbJ5p),
                        }),
                    ],
                })
              : "active" === t.status
                ? null
                : (0, s.jsx)("div", { className: f.q, children: (0, s.jsx)(d.y, {}) });
}
var g = n(17928),
    v = n(689175),
    j = n(783791),
    _ = n(826745),
    E = n(559647),
    k = n(17117);
function N(e) {
    let { canSend: t, connState: n, onSend: l, onApprove: r } = e,
        [i, c] = a.useState(""),
        o = a.useCallback(() => {
            "" !== i.trim() && t && (l(i), c(""));
        }, [i, t, l]),
        d = a.useCallback(
            (e) => {
                e.preventDefault(), o();
            },
            [o],
        ),
        p = a.useCallback(
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
        onSubmit: d,
        className: k.DA,
        children: [
            (0, s.jsx)(_.y, {
                value: i,
                onChange: (e) => c(e.currentTarget.value),
                onKeyDown: p,
                placeholder: t
                    ? m.intl.string(u.default.ahRdoJ)
                    : m.intl.formatToPlainString(u.default.QtdNbb, { connState: n }),
                disabled: !t,
                "aria-label": m.intl.string(u.default.OPr66w),
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
                        "aria-label": m.intl.string(u.default["22GHMt"]),
                        children: (0, s.jsx)(E.l, { size: "xs", color: "currentColor", className: k.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var b = n(503698),
    y = n.n(b),
    A = n(46054),
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
                        children: m.intl.string(u.default["60htw+"]),
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
                              children: m.intl.string(u.default.KLyB8Y),
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
            (0, s.jsx)(w, { label: m.intl.string(u.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(w, { label: m.intl.string(u.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: T.nc,
                      children: [
                          (0, s.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: m.intl.string(u.default.GYoWRk),
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
var P = n(700766),
    R = n(692228),
    I = n(742715);
let O = new Set(["thinking", "reply", "plan_proposed"]);
function G(e) {
    let { steps: t, content: n, proposal: a, onApprove: l } = e;
    return (0, s.jsxs)("div", {
        className: y()(P.ue, R.XR),
        children: [
            t.length > 0
                ? (0, s.jsx)("ol", { className: P.dO, children: t.map((e, t) => (0, s.jsx)(H, { step: e }, t)) })
                : null,
            null != a
                ? (0, s.jsx)(C, { proposal: a, onApprove: l })
                : "" !== n
                  ? (0, s.jsx)("div", {
                        className: P.ky,
                        children: (0, s.jsx)("div", {
                            className: y()(I.PT, P.cW),
                            children: A.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function H(e) {
    var t;
    let { step: n } = e,
        { summary: a, detail: l } = (function (e) {
            switch (e.kind) {
                case "planning":
                    return { summary: m.intl.string(u.default["0ce6LB"]) };
                case "planned":
                    return {
                        summary: m.intl.formatToPlainString(u.default["h6H4+U"], { count: e.commands?.length ?? 0 }),
                        detail: (e.commands ?? []).map((e) => "/" + e.name).join(", "),
                    };
                case "thinking":
                    return { summary: m.intl.string(u.default.K7TkAL) };
                case "writing_command":
                    return { summary: e.name ?? m.intl.string(u.default.nv6pUM), detail: e.detail };
                case "assembling":
                    return { summary: m.intl.string(u.default["9G3ZmA"]) };
                case "installing_deps":
                    return { summary: m.intl.string(u.default.VZuRug) };
                case "building":
                    return { summary: m.intl.string(u.default["s+ylXP"]) };
                case "bundling":
                    return { summary: m.intl.string(u.default.rEQlMx) };
                case "committing":
                    return { summary: m.intl.string(u.default.Yvyw1H) };
                case "built":
                    return { summary: m.intl.string(u.default.hOcVAj) };
                case "build_error":
                    return {
                        summary: m.intl.formatToPlainString(u.default["6L9Vwt"], {
                            message: e.message ?? m.intl.string(u.default.HOR2G6),
                        }),
                        detail: e.stderr_tail,
                    };
                case "healthchecking":
                    return { summary: m.intl.string(u.default.sz8yAj) };
                case "healthcheck_passed":
                    return { summary: m.intl.string(u.default["x+sqTG"]) };
                case "healthcheck_failed":
                    return {
                        summary: m.intl.formatToPlainString(u.default.FUWbq1, {
                            message: e.message ?? m.intl.string(u.default.HOR2G6),
                        }),
                    };
                case "deploying":
                    return { summary: m.intl.string(u.default.wcXX8Z) };
                case "preview_ready":
                    return { summary: m.intl.string(u.default["78YNh7"]) };
                case "error":
                    return {
                        summary: m.intl.formatToPlainString(u.default.j3hBoA, {
                            message: e.message ?? m.intl.string(u.default.HOR2G6),
                        }),
                    };
                default:
                    return { summary: JSON.stringify(e) };
            }
        })(n);
    return (0, s.jsxs)("li", {
        "data-step-kind": n.kind,
        className: P.Dx,
        children: [
            (0, s.jsx)(c.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: "error" === (t = n.kind) || "build_error" === t ? "text-feedback-critical" : "text-default",
                selectable: !0,
                className: P.iq,
                children: a,
            }),
            null != l && "" !== l
                ? (0, s.jsx)(c.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      selectable: !0,
                      className: P.yJ,
                      children: l,
                  })
                : null,
        ],
    });
}
var B = n(289149);
function V(e) {
    let { messages: t, onApprove: n } = e,
        a = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: B.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    L,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: y()(B.B2, R.XR),
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
                      L,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(G, {
                              steps: t,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === a ? n : void 0,
                          }),
                      },
                      e.id,
                  );
        }),
    });
}
function L(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: B.xk, children: n });
}
var D = n(863610);
function M(e) {
    return Math.floor(100 * e);
}
function F(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
var U = n(922016),
    q = n(939249),
    W = n(885574),
    $ = n(677175);
function J(e) {
    return e.toLocaleString();
}
function Y(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: $.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: $.mf,
                children: [
                    (0, s.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [
                            J(
                                n.input_tokens +
                                    n.output_tokens +
                                    n.cache_creation_input_tokens +
                                    n.cache_read_input_tokens,
                            ),
                            " tokens",
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(c.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    J(n.input_tokens),
                    " in \xb7 ",
                    J(n.output_tokens),
                    " out \xb7 ",
                    J(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    J(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function Z(e) {
    var t, n;
    let a,
        { project: l } = e,
        r =
            ((t = l.orchestrator),
            (n = l.codegen),
            {
                input_tokens: t.input_tokens + n.input_tokens,
                output_tokens: t.output_tokens + n.output_tokens,
                cache_creation_input_tokens: t.cache_creation_input_tokens + n.cache_creation_input_tokens,
                cache_read_input_tokens: t.cache_read_input_tokens + n.cache_read_input_tokens,
            });
    return (0, s.jsxs)("div", {
        className: $.si,
        role: "dialog",
        "aria-label": m.intl.string(u.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: $.Q$,
                children: (0, s.jsxs)("div", {
                    className: $.mf,
                    children: [
                        (0, s.jsxs)(c.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [J(M(l.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [l.turns, " turn", 1 === l.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(Y, { label: m.intl.string(u.default.hk4jJr), usage: l.orchestrator }),
            (0, s.jsx)(Y, { label: m.intl.string(u.default.R9aduM), usage: l.codegen }),
            (0, s.jsxs)("div", {
                className: $.mf,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(u.default["kILb+R"]),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children:
                            0 === F(r)
                                ? "\u2014"
                                : `${Math.round(100 * (0 === (a = F(r)) ? 0 : r.cache_read_input_tokens / a))}%`,
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, s.jsx)(U.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(Z, { project: t }),
        children: (e) =>
            (0, s.jsx)(q.D, {
                innerRef: n,
                className: $.Y$,
                "aria-label": m.intl.string(u.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(W.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var z = n(154861);
function K(e) {
    let { thinking: t, projectUsage: n, connState: a } = e;
    return (0, s.jsxs)("div", {
        className: z.jf,
        children: [
            (0, s.jsx)("div", {
                className: z.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: z.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": m.intl.string(u.default.C0t6bp),
                          children: [
                              (0, s.jsx)(D.n, { dotRadius: 3.5, themed: !0 }),
                              (0, s.jsx)(c.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: m.intl.string(u.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, s.jsxs)("span", {
                      className: z.BP,
                      children: [
                          (0, s.jsx)(c.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": m.intl.formatToPlainString(u.default["7SZZvj"], {
                                  runes: M(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: m.intl.formatToPlainString(u.default["4PFO2p"], {
                                  runes: M(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(Q, { project: n }),
                      ],
                  }),
            (0, s.jsxs)(c.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === a ? "text-feedback-positive" : "failed" === a ? "text-feedback-critical" : "text-muted",
                "data-vibegrations-conn": !0,
                "data-state": a,
                className: z.XF,
                children: ["WS: ", a],
            }),
        ],
    });
}
var X = n(104071);
function ee(e) {
    let { projectId: t, open: n } = e,
        l = (0, g.bG)([j.A], () => j.A.getMessages(t), [t]),
        i = (0, g.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        c = (0, g.bG)([j.A], () => j.A.getProjectUsage(t), [t]),
        o = a.useRef(null),
        d = a.useRef(!0),
        [p, h] = a.useState(!0);
    a.useEffect(() => {
        d.current && o.current?.scrollToBottom();
    }, [l]);
    let f = a.useCallback(() => {
        let e = o.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        (d.current = t < 32), h(t < 4);
    }, []);
    a.useEffect(() => {
        n && d.current && o.current?.scrollToBottom();
    }, [n]),
        a.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]);
    let x = a.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        _ = a.useCallback(() => x(m.intl.string(u.default.Jj8Ftb)), [x]),
        E = "open" === i,
        k = l[l.length - 1],
        b = null != k && "assistant" === k.role && null != k.proposal,
        y = null != k && "assistant" === k.role && !(0, j.B)(k),
        A = b && E ? _ : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: X.TE,
        children: [
            (0, s.jsxs)("div", {
                className: X.Nx,
                children: [
                    (0, s.jsx)(v.Ch, {
                        ref: o,
                        onScroll: f,
                        "data-vibegrations-chat-log": !0,
                        className: X.N$,
                        children: (0, s.jsx)(V, { messages: l, onApprove: A }),
                    }),
                    (0, s.jsx)("div", { className: X.l2, "data-visible": !p, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsx)(K, { thinking: y, projectUsage: c, connState: i }),
            (0, s.jsx)(N, { canSend: E, connState: i, onSend: x, onApprove: A }),
        ],
    });
}
function et(e) {
    let { projectId: t } = e,
        n = (0, g.bG)([j.A], () => j.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: R.MP, "data-active": n, "aria-hidden": !0 });
}
var en = n(956518),
    es = n(627363),
    ea = n(113854),
    el = n(91242),
    er = n(207371),
    ei = n(208137),
    ec = n(972786),
    eo = n(291815);
function ed(e) {
    let { projectId: t, appId: n, channelId: i, chatOpen: c, onActivityStatusChange: o } = e,
        d = (function (e, t, n) {
            let { data: s, isLoading: l } = (0, es.YY)(e ?? void 0),
                r = (0, g.bG)([ec.A], () => {
                    if (null == e || null == (0, ei.V)()) return null;
                    let t = ec.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    return null != t ? (0, ei.s)(t, e) : null;
                }, [e]),
                i = (0, g.bG)([el.A], () => el.A.getConnectedFrame()?.applicationId ?? null),
                c = (0, g.bG)([el.A], () => null != e && el.A.isLaunchingFrame(e), [e]),
                o = null != e && i === e,
                [d, u] = a.useState(null),
                m = null != e && d === e,
                p = (0, er.x)(s),
                h = null != e && null != (0, en.Ay)(e),
                f = a.useRef(!1),
                x = a.useRef(!1);
            a.useEffect(
                () => () => {
                    x.current = !0;
                },
                [],
            ),
                a.useEffect(() => {
                    if (t && null != e && null == r && p && h) {
                        if (o) {
                            el.A.getConnectedFrame()?.channelId !== n && ea.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != i ||
                            c ||
                            f.current ||
                            m ||
                            ((f.current = !0),
                            ea.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = el.A.getConnectedFrame();
                                    x.current && t?.applicationId === e && ea.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => u(e))
                                .finally(() => {
                                    f.current = !1;
                                }));
                    }
                }, [t, e, r, p, h, o, i, c, m, n]);
            let v = a.useRef(null);
            return (a.useEffect(() => {
                v.current = o ? e : null;
            }, [o, e]),
            a.useEffect(
                () => () => {
                    let e = v.current;
                    null != e && ea.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != r
                  ? { status: "local", src: r }
                  : o
                    ? { status: "active" }
                    : l || (p && h)
                      ? m
                          ? { status: "error" }
                          : null != i
                            ? { status: "blocked" }
                            : { status: "launching" }
                      : { status: "no-app" };
        })(n, !0, i),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            if (null == i) return (0, l.HV)(n), () => (0, l.HV)(null);
        }, [n, i]),
        a.useEffect(() => {
            o?.(d.status);
        }, [d.status, o]),
        a.useEffect(() => {
            null != t && (0, r.Hc)(t);
        }, [t]),
        a.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return void (0, l.Zq)(0);
            function t() {
                (0, l.Zq)(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, [t, c]),
        (0, s.jsxs)("div", {
            className: eo.LB,
            children: [
                (0, s.jsx)("div", { className: eo.fm, children: (0, s.jsx)(x, { state: d }) }),
                null != t &&
                    c &&
                    (0, s.jsx)("div", {
                        ref: u,
                        className: eo.AF,
                        children: (0, s.jsxs)("div", {
                            className: eo.cO,
                            children: [(0, s.jsx)(et, { projectId: t }), (0, s.jsx)(ee, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
