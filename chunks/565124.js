n.d(t, { A: () => eu });
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
    j = n(783791),
    _ = n(826745),
    E = n(559647),
    k = n(17117);
function b(e) {
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
            (0, s.jsx)(_.y, {
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
var N = n(503698),
    y = n.n(N),
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
    P = n(692228),
    I = n(742715);
let O = new Set(["thinking", "reply", "plan_proposed"]);
function G(e) {
    let { steps: t, content: n, proposal: l, onApprove: a } = e;
    return (0, s.jsxs)("div", {
        className: y()(R.ue, P.XR),
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
                            className: y()(I.PT, R.cW),
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
function V(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: B.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    L,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: y()(B.B2, P.XR),
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
                              onApprove: e === l ? n : void 0,
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
var M = n(863610);
function F(e) {
    return Math.floor(100 * e);
}
function D(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
var U = n(922016),
    q = n(939249),
    W = n(885574),
    $ = n(677175);
function J(e) {
    return e.toLocaleString();
}
function Z(e) {
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
function Y(e) {
    var t, n;
    let l,
        { project: a } = e,
        r =
            ((t = a.orchestrator),
            (n = a.codegen),
            {
                input_tokens: t.input_tokens + n.input_tokens,
                output_tokens: t.output_tokens + n.output_tokens,
                cache_creation_input_tokens: t.cache_creation_input_tokens + n.cache_creation_input_tokens,
                cache_read_input_tokens: t.cache_read_input_tokens + n.cache_read_input_tokens,
            });
    return (0, s.jsxs)("div", {
        className: $.si,
        role: "dialog",
        "aria-label": m.intl.string(d.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: $.Q$,
                children: (0, s.jsxs)("div", {
                    className: $.mf,
                    children: [
                        (0, s.jsxs)(c.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [J(F(a.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [a.turns, " turn", 1 === a.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(Z, { label: m.intl.string(d.default.hk4jJr), usage: a.orchestrator }),
            (0, s.jsx)(Z, { label: m.intl.string(d.default.R9aduM), usage: a.codegen }),
            (0, s.jsxs)("div", {
                className: $.mf,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(d.default["kILb+R"]),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children:
                            0 === D(r)
                                ? "\u2014"
                                : `${Math.round(100 * (0 === (l = D(r)) ? 0 : r.cache_read_input_tokens / l))}%`,
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(U.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(Y, { project: t }),
        children: (e) =>
            (0, s.jsx)(q.D, {
                innerRef: n,
                className: $.Y$,
                "aria-label": m.intl.string(d.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(W.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var X = n(154861);
function z(e) {
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
                              (0, s.jsx)(M.n, { dotRadius: 3.5, themed: !0 }),
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
                                  runes: F(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: m.intl.formatToPlainString(d.default["4PFO2p"], {
                                  runes: F(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(Q, { project: n }),
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
function ee(e) {
    let { projectId: t, open: n } = e,
        a = (0, g.bG)([j.A], () => j.A.getMessages(t), [t]),
        i = (0, g.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        c = (0, g.bG)([j.A], () => j.A.getProjectUsage(t), [t]),
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
        _ = l.useCallback(() => x(m.intl.string(d.default.Jj8Ftb)), [x]),
        E = "open" === i,
        k = a[a.length - 1],
        N = null != k && "assistant" === k.role && null != k.proposal,
        y = null != k && "assistant" === k.role && !(0, j.B)(k),
        A = N && E ? _ : void 0;
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
                        children: (0, s.jsx)(V, { messages: a, onApprove: A }),
                    }),
                    (0, s.jsx)("div", { className: K.l2, "data-visible": !p, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsx)(z, { thinking: y, projectUsage: c, connState: i }),
            (0, s.jsx)(b, { canSend: E, connState: i, onSend: x, onApprove: A }),
        ],
    });
}
function et(e) {
    let { projectId: t } = e,
        n = (0, g.bG)([j.A], () => j.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: P.MP, "data-active": n, "aria-hidden": !0 });
}
var en = n(956518),
    es = n(627363),
    el = n(113854),
    ea = n(91242),
    er = n(207371),
    ei = n(208137),
    ec = n(972786),
    eo = n(291815);
function eu(e) {
    let { projectId: t, appId: n, channelId: i, chatOpen: c, onActivityStatusChange: o } = e,
        u = (function (e, t, n) {
            let { data: s, isLoading: a } = (0, es.YY)(e ?? void 0),
                r = (0, g.bG)([ec.A], () => {
                    if (null == e || null == (0, ei.V)()) return null;
                    let t = ec.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    return null != t ? (0, ei.s)(t, e) : null;
                }, [e]),
                i = (0, g.bG)([ea.A], () => ea.A.getConnectedFrame()?.applicationId ?? null),
                c = (0, g.bG)([ea.A], () => null != e && ea.A.isLaunchingFrame(e), [e]),
                o = null != e && i === e,
                [u, d] = l.useState(null),
                m = null != e && u === e,
                p = (0, er.x)(s),
                f = null != e && null != (0, en.Ay)(e),
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
                            ea.A.getConnectedFrame()?.channelId !== n && el.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != i ||
                            c ||
                            h.current ||
                            m ||
                            ((h.current = !0),
                            el.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = ea.A.getConnectedFrame();
                                    x.current && t?.applicationId === e && el.A.stopFrame({ applicationId: e });
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
                    null != e && el.A.stopFrame({ applicationId: e });
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
            className: eo.LB,
            children: [
                (0, s.jsx)("div", { className: eo.fm, children: (0, s.jsx)(x, { state: u }) }),
                null != t &&
                    c &&
                    (0, s.jsx)("div", {
                        ref: d,
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
