n.d(t, { A: () => ef });
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
function g(e) {
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
var x = n(17928),
    _ = n(689175),
    v = n(783791),
    j = n(826745),
    E = n(559647),
    A = n(17117);
function N(e) {
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
        className: A.DA,
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
                className: A.jp,
            }),
            (0, s.jsxs)("div", {
                className: A.fF,
                children: [
                    (0, s.jsx)("div", { className: A.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: A.rt,
                        disabled: !t || "" === i.trim(),
                        "aria-label": m.intl.string(d.default["22GHMt"]),
                        children: (0, s.jsx)(E.l, { size: "xs", color: "currentColor", className: A.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var b = n(503698),
    k = n.n(b),
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
function R(e) {
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
var I = n(700766),
    C = n(692228),
    P = n(742715);
let O = new Set(["thinking", "reply", "plan_proposed"]);
function G(e) {
    let { steps: t, content: n, proposal: l, onApprove: a } = e;
    return (0, s.jsxs)("div", {
        className: k()(I.ue, C.XR),
        children: [
            t.length > 0
                ? (0, s.jsx)("ol", { className: I.dO, children: t.map((e, t) => (0, s.jsx)(H, { step: e }, t)) })
                : null,
            null != l
                ? (0, s.jsx)(R, { proposal: l, onApprove: a })
                : "" !== n
                  ? (0, s.jsx)("div", {
                        className: I.ky,
                        children: (0, s.jsx)("div", {
                            className: k()(P.PT, I.cW),
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
        className: I.Dx,
        children: [
            (0, s.jsx)(c.E, {
                tag: "div",
                variant: "text-sm/normal",
                color:
                    "error" === (t = n.kind) || "terminal_error" === t || "build_error" === t
                        ? "text-feedback-critical"
                        : "text-default",
                selectable: !0,
                className: I.iq,
                children: l,
            }),
            null != a && "" !== a
                ? (0, s.jsx)(c.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      selectable: !0,
                      className: I.yJ,
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
                            className: k()(B.B2, C.XR),
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
var M = n(863610),
    D = n(673724),
    F = n(922016),
    U = n(939249),
    W = n(885574),
    $ = n(677175);
function Z(e) {
    return e.toLocaleString();
}
function z(e) {
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
                        children: [Z((0, D.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, s.jsxs)(c.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    Z(n.input_tokens),
                    " in \xb7 ",
                    Z(n.output_tokens),
                    " out \xb7 ",
                    Z(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    Z(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function q(e) {
    let { project: t } = e,
        n = (0, D.wV)(t.orchestrator, t.codegen);
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
                            children: [Z((0, D.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(z, { label: m.intl.string(d.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)(z, { label: m.intl.string(d.default.R9aduM), usage: t.codegen }),
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
                        children: 0 === (0, D.sj)(n) ? "\u2014" : `${Math.round(100 * (0, D.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(F.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(q, { project: t }),
        children: (e) =>
            (0, s.jsx)(U.D, {
                innerRef: n,
                className: $.Y$,
                "aria-label": m.intl.string(d.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(W.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var K = n(154861);
function X(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: K.jf,
        children: [
            (0, s.jsx)("div", {
                className: K.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: K.e_,
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
                      className: K.BP,
                      children: [
                          (0, s.jsx)(c.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": m.intl.formatToPlainString(d.default["7SZZvj"], {
                                  runes: (0, D.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: m.intl.formatToPlainString(d.default["4PFO2p"], {
                                  runes: (0, D.a7)(n.cost_usd).toLocaleString(),
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
                className: K.XF,
                children: ["WS: ", l],
            }),
        ],
    });
}
var Y = n(506774),
    Q = n(192308),
    ee = n(651649),
    et = n(670455);
let en = "shownVibegrationsFeedbackProjectIds";
var es = n(104071);
function el(e) {
    let { projectId: t, open: a } = e,
        i = (0, x.bG)([v.A], () => v.A.getMessages(t), [t]),
        c = (0, x.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        o = (0, x.bG)([v.A], () => v.A.getProjectUsage(t), [t]),
        u = l.useRef(null),
        p = l.useRef(!0),
        [f, h] = l.useState(!0);
    l.useEffect(() => {
        p.current && u.current?.scrollToBottom();
    }, [i]);
    let g = l.useCallback(() => {
        let e = u.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        (p.current = t < 32), h(t < 4);
    }, []);
    l.useEffect(() => {
        a && p.current && u.current?.scrollToBottom();
    }, [a]),
        l.useEffect(() => {
            (0, r.Hc)(t);
        }, [t]),
        l.useEffect(
            () => () =>
                (function (e) {
                    let t = v.A.getMessages(e).filter((e) => "assistant" === e.role && (0, v.B)(e)).length;
                    !(t < 3) &&
                        ((Y.w.get(en) ?? []).includes(e) ||
                            ee.A.possiblyShowFeedbackModal(et.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = Y.w.get(en) ?? []).includes(e) || Y.w.set(en, [...l, e]),
                                    (0, Q.openModalLazy)(async () => {
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
    let j = l.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        E = l.useCallback(() => j(m.intl.string(d.default.Jj8Ftb)), [j]),
        A = "open" === c,
        b = i[i.length - 1],
        k = null != b && "assistant" === b.role && null != b.proposal,
        y = null != b && "assistant" === b.role && !(0, v.B)(b),
        S = k && A ? E : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: es.TE,
        children: [
            (0, s.jsxs)("div", {
                className: es.Nx,
                children: [
                    (0, s.jsx)(_.Ch, {
                        ref: u,
                        onScroll: g,
                        "data-vibegrations-chat-log": !0,
                        className: es.N$,
                        children: (0, s.jsx)(V, { messages: i, onApprove: S }),
                    }),
                    (0, s.jsx)("div", { className: es.l2, "data-visible": !f, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsx)(X, { thinking: y, projectUsage: o, connState: c }),
            (0, s.jsx)(N, { canSend: A, connState: c, onSend: j, onApprove: S }),
        ],
    });
}
function ea(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([v.A], () => v.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: C.MP, "data-active": n, "aria-hidden": !0 });
}
var er = n(956518),
    ei = n(627363),
    ec = n(113854),
    eo = n(91242),
    eu = n(207371),
    ed = n(208137),
    em = n(972786),
    ep = n(291815);
function ef(e) {
    let { projectId: t, appId: n, channelId: i, chatOpen: c, onActivityStatusChange: o } = e,
        u = (function (e, t, n) {
            let { data: s, isLoading: a } = (0, ei.YY)(e ?? void 0),
                i = (0, x.bG)([em.A, r.Ay], () => {
                    if (null == e || null == (0, ed.V)()) return null;
                    let t = em.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    if (null == t) return null;
                    let n = r.Ay.getPreviewTs(t.id);
                    return (0, ed.s)(t, e, n);
                }, [e]),
                c = (0, x.bG)([eo.A], () => eo.A.getConnectedFrame()?.applicationId ?? null),
                o = (0, x.bG)([eo.A], () => null != e && eo.A.isLaunchingFrame(e), [e]),
                u = null != e && c === e,
                [d, m] = l.useState(null),
                p = null != e && d === e,
                f = (0, eu.x)(s),
                h = null != e && null != (0, er.Ay)(e),
                g = l.useRef(!1),
                _ = l.useRef(!1);
            l.useEffect(
                () => () => {
                    _.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e && null == i && f && h) {
                        if (u) {
                            eo.A.getConnectedFrame()?.channelId !== n && ec.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != c ||
                            o ||
                            g.current ||
                            p ||
                            ((g.current = !0),
                            ec.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = eo.A.getConnectedFrame();
                                    _.current && t?.applicationId === e && ec.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => m(e))
                                .finally(() => {
                                    g.current = !1;
                                }));
                    }
                }, [t, e, i, f, h, u, c, o, p, n]);
            let v = l.useRef(null);
            return (l.useEffect(() => {
                v.current = u ? e : null;
            }, [u, e]),
            l.useEffect(
                () => () => {
                    let e = v.current;
                    null != e && ec.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != i
                  ? { status: "local", src: i }
                  : u
                    ? { status: "active" }
                    : a || (f && h)
                      ? p
                          ? { status: "error" }
                          : null != c
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
            className: ep.LB,
            children: [
                (0, s.jsx)("div", { className: ep.fm, children: (0, s.jsx)(g, { state: u }) }),
                null != t &&
                    c &&
                    (0, s.jsx)("div", {
                        ref: d,
                        className: ep.AF,
                        children: (0, s.jsxs)("div", {
                            className: ep.cO,
                            children: [(0, s.jsx)(ea, { projectId: t }), (0, s.jsx)(el, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
