n.d(t, { A: () => q });
var s = n(627968),
    a = n(64700),
    l = n(17928),
    r = n(689175),
    i = n(783791),
    c = n(998939),
    o = n(826745),
    d = n(559647),
    u = n(818085),
    m = n(375708),
    p = n(17117);
function h(e) {
    let { canSend: t, connState: n, onSend: l, onApprove: r } = e,
        [i, c] = a.useState(""),
        h = a.useCallback(() => {
            "" !== i.trim() && t && (l(i), c(""));
        }, [i, t, l]),
        f = a.useCallback(
            (e) => {
                e.preventDefault(), h();
            },
            [h],
        ),
        x = a.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != r && (e.preventDefault(), r());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), h());
            },
            [h, r],
        );
    return (0, s.jsxs)("form", {
        onSubmit: f,
        className: p.DA,
        children: [
            (0, s.jsx)(o.y, {
                value: i,
                onChange: (e) => c(e.currentTarget.value),
                onKeyDown: x,
                placeholder: t
                    ? m.intl.string(u.default.ahRdoJ)
                    : m.intl.formatToPlainString(u.default.QtdNbb, { connState: n }),
                disabled: !t,
                "aria-label": m.intl.string(u.default.OPr66w),
                rows: 1,
                className: p.jp,
            }),
            (0, s.jsxs)("div", {
                className: p.fF,
                children: [
                    (0, s.jsx)("div", { className: p.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: p.rt,
                        disabled: !t || "" === i.trim(),
                        "aria-label": m.intl.string(u.default["22GHMt"]),
                        children: (0, s.jsx)(d.l, { size: "xs", color: "currentColor", className: p.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var f = n(834730),
    x = n(503698),
    g = n.n(x),
    j = n(46054),
    v = n(821609),
    _ = n(84206);
function k(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: _.hb,
              children: [
                  (0, s.jsx)(f.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: _.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: _.uR,
                                  children: (0, s.jsx)(f.E, {
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
function b(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, s.jsxs)("article", {
        className: _.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: _.pu,
                children: [
                    (0, s.jsx)(f.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: m.intl.string(u.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: _.dr,
                              children: (0, s.jsx)(f.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: m.intl.string(m.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(f.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, s.jsxs)("section", {
                      className: _.hb,
                      children: [
                          (0, s.jsx)(f.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(u.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: _.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: _.H6,
                                          children: [
                                              (0, s.jsx)(f.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: _.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, s.jsx)(f.E, {
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
                      className: _.hb,
                      children: [
                          (0, s.jsx)(f.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(m.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: _.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: _.Xs,
                                          children: [
                                              (0, s.jsxs)(f.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, s.jsx)(f.E, {
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
            (0, s.jsx)(k, { label: m.intl.string(u.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(k, { label: m.intl.string(u.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: _.nc,
                      children: [
                          (0, s.jsx)(v.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: m.intl.string(u.default.GYoWRk),
                          }),
                          (0, s.jsx)(f.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: _.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var N = n(700766),
    y = n(742715);
let A = new Set(["thinking", "reply", "plan_proposed"]);
function E(e) {
    let { steps: t, content: n, proposal: a, onApprove: l } = e;
    return (0, s.jsxs)("div", {
        className: N.ue,
        children: [
            t.length > 0
                ? (0, s.jsx)("ol", { className: N.dO, children: t.map((e, t) => (0, s.jsx)(S, { step: e }, t)) })
                : null,
            null != a
                ? (0, s.jsx)(b, { proposal: a, onApprove: l })
                : "" !== n
                  ? (0, s.jsx)("div", {
                        className: N.ky,
                        children: (0, s.jsx)("div", {
                            className: g()(y.PT, N.cW),
                            children: j.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function S(e) {
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
        className: N.Dx,
        children: [
            (0, s.jsx)(f.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: "error" === (t = n.kind) || "build_error" === t ? "text-feedback-critical" : "text-default",
                selectable: !0,
                className: N.iq,
                children: a,
            }),
            null != l && "" !== l
                ? (0, s.jsx)(f.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      selectable: !0,
                      className: N.yJ,
                      children: l,
                  })
                : null,
        ],
    });
}
var T = n(289149);
function w(e) {
    let { messages: t, onApprove: n } = e,
        a = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: T.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    C,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: T.B2,
                            children: (0, s.jsx)(f.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !A.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length
                ? null
                : (0, s.jsx)(
                      C,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(E, {
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
function C(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: T.xk, children: n });
}
var I = n(863610),
    P = n(396583);
function R(e) {
    return Math.floor(100 * e);
}
function G(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
var O = n(922016),
    B = n(408278),
    H = n(885574),
    V = n(677175);
function M(e) {
    return e.toLocaleString();
}
function L(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: V.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: V.mf,
                children: [
                    (0, s.jsx)(f.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(f.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [
                            M(
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
            (0, s.jsxs)(f.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    M(n.input_tokens),
                    " in \xb7 ",
                    M(n.output_tokens),
                    " out \xb7 ",
                    M(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    M(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function D(e) {
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
        className: V.si,
        role: "dialog",
        "aria-label": m.intl.string(u.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: V.Q$,
                children: (0, s.jsxs)("div", {
                    className: V.mf,
                    children: [
                        (0, s.jsxs)(f.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [M(R(l.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(f.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [l.turns, " turn", 1 === l.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(L, { label: m.intl.string(u.default.hk4jJr), usage: l.orchestrator }),
            (0, s.jsx)(L, { label: m.intl.string(u.default.R9aduM), usage: l.codegen }),
            (0, s.jsxs)("div", {
                className: V.mf,
                children: [
                    (0, s.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.string(u.default["kILb+R"]),
                    }),
                    (0, s.jsx)(f.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children:
                            0 === G(r)
                                ? "\u2014"
                                : `${Math.round(100 * (0 === (a = G(r)) ? 0 : r.cache_read_input_tokens / a))}%`,
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, s.jsx)(O.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(D, { project: t }),
        children: (e) =>
            (0, s.jsx)(B.K, {
                buttonRef: n,
                "aria-label": m.intl.string(u.default.AWQ2ZV),
                icon: H.m,
                variant: "icon-only",
                size: "sm",
                ...e,
            }),
    });
}
var U = n(154861);
function $(e) {
    let t = Math.floor(e / 1e3),
        n = Math.floor(t / 60),
        s = t % 60;
    return n > 0 ? `${n}m ${s}s` : `${s}s`;
}
function J(e) {
    let { thinking: t, turnStartedAt: n, projectUsage: l, connState: r } = e,
        [i, c] = a.useState(0),
        [o, d] = a.useState(null),
        [p, h] = a.useState(t);
    return (
        p !== t && (h(t), t ? (d(null), c(0)) : d(i)),
        (0, P.A)(
            () => {
                null != n && c(Date.now() - n);
            },
            t ? 250 : null,
        ),
        (0, s.jsxs)("div", {
            className: U.jf,
            children: [
                (0, s.jsx)(K, { thinking: t, elapsedMs: i, thoughtMs: o }),
                null == l
                    ? null
                    : (0, s.jsxs)("span", {
                          className: U.BP,
                          children: [
                              (0, s.jsx)(f.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  "aria-label": m.intl.formatToPlainString(u.default["7SZZvj"], {
                                      runes: R(l.cost_usd),
                                      turns: l.turns,
                                  }),
                                  children: m.intl.formatToPlainString(u.default["4PFO2p"], {
                                      runes: R(l.cost_usd).toLocaleString(),
                                  }),
                              }),
                              (0, s.jsx)(F, { project: l }),
                          ],
                      }),
                (0, s.jsxs)(f.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color:
                        "open" === r
                            ? "text-feedback-positive"
                            : "failed" === r
                              ? "text-feedback-critical"
                              : "text-muted",
                    "data-vibegrations-conn": !0,
                    "data-state": r,
                    className: U.XF,
                    children: ["WS: ", r],
                }),
            ],
        })
    );
}
function K(e) {
    let { thinking: t, elapsedMs: n, thoughtMs: a } = e;
    return t || null != a
        ? (0, s.jsx)("div", {
              className: U.Xx,
              "data-vibegrations-activity": !0,
              children: (0, s.jsxs)("div", {
                  className: U.e_,
                  role: "status",
                  "aria-live": "polite",
                  "aria-label": t ? m.intl.string(u.default.C0t6bp) : void 0,
                  children: [
                      (0, s.jsx)(I.n, { dotRadius: 3.5, themed: !0, hide: !t }),
                      (0, s.jsx)(f.E, {
                          tag: "span",
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: t
                              ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        m.intl.string(u.default.XS0kOx),
                                        " ",
                                        (0, s.jsx)("span", { "aria-hidden": !0, children: $(n) }),
                                    ],
                                })
                              : m.intl.format(u.default["w0V0e+"], { duration: $(a ?? 0) }),
                      }),
                  ],
              }),
          })
        : null;
}
var W = n(104071);
function q(e) {
    let { projectId: t, open: n } = e,
        o = (0, l.bG)([i.A], () => i.A.getMessages(t), [t]),
        d = (0, l.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        p = (0, l.bG)([i.A], () => i.A.getProjectUsage(t), [t]),
        f = a.useRef(null),
        x = a.useRef(!0),
        [g, j] = a.useState(!0);
    a.useEffect(() => {
        x.current && f.current?.scrollToBottom();
    }, [o]);
    let v = a.useCallback(() => {
        let e = f.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        (x.current = t < 32), j(t < 4);
    }, []);
    a.useEffect(() => {
        n && x.current && f.current?.scrollToBottom();
    }, [n]),
        a.useEffect(() => {
            (0, c.Hc)(t);
        }, [t]);
    let _ = a.useCallback(
            (e) => {
                (0, c.dv)(t, e);
            },
            [t],
        ),
        k = a.useCallback(() => _(m.intl.string(u.default.Jj8Ftb)), [_]),
        b = "open" === d,
        N = o[o.length - 1],
        y = null != N && "assistant" === N.role && null != N.proposal,
        A = null != N && "assistant" === N.role && !(0, i.B)(N),
        E = y && b ? k : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: W.TE,
        children: [
            (0, s.jsxs)("div", {
                className: W.Nx,
                children: [
                    (0, s.jsx)(r.Ch, {
                        ref: f,
                        onScroll: v,
                        "data-vibegrations-chat-log": !0,
                        className: W.N$,
                        children: (0, s.jsx)(w, { messages: o, onApprove: E }),
                    }),
                    (0, s.jsx)("div", { className: W.l2, "data-visible": !g, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsx)(J, { thinking: A, turnStartedAt: N?.created_at ?? null, projectUsage: p, connState: d }),
            (0, s.jsx)(h, { canSend: b, connState: d, onSend: _, onApprove: E }),
        ],
    });
}
