n.d(t, { A: () => ex });
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
function h(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: m.intl.string(d.default["bTjP+Y"]),
        className: p.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var f = n(616694);
function g(e) {
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
                        children: m.intl.string(d.default["6xTawd"]),
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
                          children: m.intl.string(d.default.MeLWCr),
                      }),
                      (0, s.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          className: f.t,
                          children: m.intl.string(d.default["1RCbQT"]),
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
                            children: m.intl.string(d.default.MHvjVv),
                        }),
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: f.t,
                            children: m.intl.string(d.default.TIbJ5p),
                        }),
                    ],
                })
              : "active" === t.status
                ? null
                : (0, s.jsx)("div", { className: f.q, children: (0, s.jsx)(u.y, {}) });
}
var x = n(17928),
    _ = n(689175),
    v = n(783791),
    j = n(826745),
    E = n(559647),
    A = n(17117);
function k(e) {
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
        u = l.useCallback(
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
        className: A.DA,
        children: [
            (0, s.jsx)(j.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: u,
                placeholder: t ? m.intl.string(d.default.ahRdoJ) : m.intl.string(d.default.nm4w9P),
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
                        disabled: !t || "" === r.trim(),
                        "aria-label": m.intl.string(d.default["22GHMt"]),
                        children: (0, s.jsx)(E.l, { size: "xs", color: "currentColor", className: A.Mx }),
                    }),
                ],
            }),
        ],
    });
}
var N = n(503698),
    b = n.n(N);
n(321073);
var y = n(847374),
    S = n(320448),
    T = n(939249),
    w = n(46054),
    R = n(821609),
    I = n(84206);
function C(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: I.hb,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: I.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: I.uR,
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
function P(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, s.jsxs)("article", {
        className: I.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: I.pu,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: m.intl.string(d.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: I.dr,
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
                      className: I.hb,
                      children: [
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(d.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: I.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: I.H6,
                                          children: [
                                              (0, s.jsx)(c.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: I.UZ,
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
                      className: I.hb,
                      children: [
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: m.intl.string(m.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: I.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: I.Xs,
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
            (0, s.jsx)(C, { label: m.intl.string(d.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(C, { label: m.intl.string(d.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: I.nc,
                      children: [
                          (0, s.jsx)(R.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: m.intl.string(d.default.GYoWRk),
                          }),
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: I.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var O = n(700766),
    G = n(692228),
    B = n(742715);
let H = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function D(e) {
    let { steps: t, announcement: n, content: a, proposal: r, onApprove: i } = e,
        o = l.useMemo(
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
                                        return m.intl.string(d.default["0ce6LB"]);
                                    case "planned":
                                        return m.intl.formatToPlainString(d.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return m.intl.string(d.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? m.intl.string(d.default.nv6pUM);
                                    case "assembling":
                                        return m.intl.string(d.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return m.intl.string(d.default.VZuRug);
                                    case "building":
                                        return m.intl.string(d.default["s+ylXP"]);
                                    case "bundling":
                                        return m.intl.string(d.default.rEQlMx);
                                    case "committing":
                                        return m.intl.string(d.default.Yvyw1H);
                                    case "built":
                                        return m.intl.string(d.default.hOcVAj);
                                    case "build_error":
                                        return m.intl.string(d.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return m.intl.string(d.default.sz8yAj);
                                    case "preview_connecting":
                                        return m.intl.string(d.default.pOYDEc);
                                    case "awaiting_auth":
                                        return m.intl.string(d.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return m.intl.string(d.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return m.intl.string(d.default.FUWbq1);
                                    case "deploying":
                                        return m.intl.string(d.default.wcXX8Z);
                                    case "preview_ready":
                                        return m.intl.string(d.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return m.intl.string(d.default.j3hBoA);
                                    default:
                                        return m.intl.string(d.default.nv6pUM);
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
        className: b()(O.ue, G.XR),
        children: [
            null != n && "" !== n
                ? (0, s.jsx)(c.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: O.Xt,
                      children: n,
                  })
                : null,
            o.length > 0
                ? (0, s.jsx)("ol", { className: O.dO, children: o.map((e, t) => (0, s.jsx)(V, { group: e }, t)) })
                : null,
            null != r
                ? (0, s.jsx)(P, { proposal: r, onApprove: i })
                : "" !== a
                  ? (0, s.jsx)("div", {
                        className: O.ky,
                        children: (0, s.jsx)("div", {
                            className: b()(B.PT, O.cW),
                            children: w.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function V(e) {
    var t;
    let { group: n } = e,
        [a, r] = l.useState(!1),
        i = l.useId(),
        o = l.useCallback(() => r((e) => !e), []),
        u =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, s.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: O.Dx,
            children: (0, s.jsx)(c.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: u,
                selectable: !0,
                className: O.iq,
                children: n.summary,
            }),
        });
    let p = a ? y.a : S._;
    return (0, s.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: O.Dx,
        children: [
            (0, s.jsxs)(T.D, {
                tag: "div",
                className: O.kG,
                "aria-expanded": a,
                "aria-controls": i,
                "aria-label": m.intl.formatToPlainString(d.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, s.jsx)(c.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: u,
                        className: O.iq,
                        children: n.summary,
                    }),
                    (0, s.jsx)(p, { size: "xs", color: "currentColor", className: O.Ue }),
                ],
            }),
            (0, s.jsx)("div", {
                id: i,
                hidden: !a,
                className: O.yJ,
                children: n.technical.map((e, t) =>
                    (0, s.jsx)(
                        c.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var L = n(289149);
function M(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: L.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    F,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: b()(L.B2, G.XR),
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
            let t = e.steps.filter((e) => !H.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, s.jsx)(
                      F,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(D, {
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
function F(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: L.xk, children: n });
}
var U = n(863610),
    W = n(673724),
    z = n(922016),
    Z = n(885574),
    $ = n(677175);
function q(e) {
    return e.toLocaleString();
}
function K(e) {
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
                        children: [q((0, W.aM)(n)), " tokens"],
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
function X(e) {
    let { project: t } = e,
        n = (0, W.wV)(t.orchestrator, t.codegen);
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
                            children: [q((0, W.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(K, { label: m.intl.string(d.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)(K, { label: m.intl.string(d.default.R9aduM), usage: t.codegen }),
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
                        children: 0 === (0, W.sj)(n) ? "\u2014" : `${Math.round(100 * (0, W.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(z.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(X, { project: t }),
        children: (e) =>
            (0, s.jsx)(T.D, {
                innerRef: n,
                className: $.Y$,
                "aria-label": m.intl.string(d.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(Z.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var J = n(154861);
function Q(e) {
    switch (e) {
        case "open":
            return m.intl.string(d.default.cLhFMi);
        case "connecting":
            return m.intl.string(d.default.W7oyuf);
        case "failed":
            return m.intl.string(d.default.eE60xI);
        case "closed":
            return m.intl.string(d.default["yBmS+I"]);
    }
}
function ee(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: J.jf,
        children: [
            (0, s.jsx)("div", {
                className: J.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: J.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": m.intl.string(d.default.C0t6bp),
                          children: [
                              (0, s.jsx)(U.n, { dotRadius: 3.5, themed: !0 }),
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
                      className: J.BP,
                      children: [
                          (0, s.jsx)(c.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": m.intl.formatToPlainString(d.default["7SZZvj"], {
                                  runes: (0, W.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: m.intl.formatToPlainString(d.default["4PFO2p"], {
                                  runes: (0, W.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(Y, { project: n }),
                      ],
                  }),
            (0, s.jsx)(c.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": m.intl.formatToPlainString(d.default.eDDdhB, { status: Q(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: J.XF,
                children: Q(l),
            }),
        ],
    });
}
var et = n(506774),
    en = n(192308),
    es = n(651649),
    el = n(670455);
let ea = "shownVibegrationsFeedbackProjectIds";
var er = n(104071);
function ei(e) {
    let { projectId: t, open: a } = e,
        i = (0, x.bG)([v.A], () => v.A.getMessages(t), [t]),
        c = (0, x.bG)([r.Ay], () => r.Ay.getConnState(t), [t]),
        o = (0, x.bG)([v.A], () => v.A.getProjectUsage(t), [t]),
        u = l.useRef(null),
        p = l.useRef(!0);
    l.useEffect(() => {
        p.current && u.current?.scrollToBottom();
    }, [i]);
    let h = l.useCallback(() => {
        let e = u.current;
        null != e && (p.current = 32 > e.getDistanceFromBottom());
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
                        ((et.w.get(ea) ?? []).includes(e) ||
                            es.A.possiblyShowFeedbackModal(el.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = et.w.get(ea) ?? []).includes(e) || et.w.set(ea, [...l, e]),
                                    (0, en.openModalLazy)(async () => {
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
    let f = l.useCallback(
            (e) => {
                (0, r.dv)(t, e);
            },
            [t],
        ),
        g = l.useCallback(() => f(m.intl.string(d.default.Jj8Ftb)), [f]),
        j = "open" === c,
        E = i[i.length - 1],
        A = null != E && "assistant" === E.role && null != E.proposal,
        N = null != E && "assistant" === E.role && !(0, v.B)(E),
        b = A && j ? g : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: er.T,
        children: [
            (0, s.jsx)(_.Ch, {
                ref: u,
                onScroll: h,
                "data-vibegrations-chat-log": !0,
                className: er.N,
                children: (0, s.jsx)(M, { messages: i, onApprove: b }),
            }),
            (0, s.jsx)(ee, { thinking: N, projectUsage: o, connState: c }),
            (0, s.jsx)(k, { canSend: j, onSend: f, onApprove: b }),
        ],
    });
}
function ec(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([v.A], () => v.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: G.MP, "data-active": n, "aria-hidden": !0 });
}
var eo = n(956518),
    eu = n(627363),
    ed = n(113854),
    em = n(91242),
    ep = n(207371),
    eh = n(208137),
    ef = n(972786),
    eg = n(291815);
function ex(e) {
    let { projectId: t, appId: n, channelId: i, chatOpen: c, onActivityStatusChange: o } = e,
        u = (function (e, t, n) {
            let { data: s, isLoading: a } = (0, eu.YY)(e ?? void 0),
                i = (0, x.bG)([ef.A, r.Ay], () => {
                    if (null == e || null == (0, eh.V)()) return null;
                    let t = ef.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    if (null == t) return null;
                    let n = r.Ay.getPreviewTs(t.id);
                    return (0, eh.s)(t, e, n);
                }, [e]),
                c = (0, x.bG)([em.A], () => em.A.getConnectedFrame()?.applicationId ?? null),
                o = (0, x.bG)([em.A], () => null != e && em.A.isLaunchingFrame(e), [e]),
                u = null != e && c === e,
                [d, m] = l.useState(null),
                p = null != e && d === e,
                h = (0, ep.x)(s),
                f = null != e && null != (0, eo.Ay)(e),
                g = l.useRef(!1),
                _ = l.useRef(!1);
            l.useEffect(
                () => () => {
                    _.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e && null == i && h && f) {
                        if (u) {
                            em.A.getConnectedFrame()?.channelId !== n && ed.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != c ||
                            o ||
                            g.current ||
                            p ||
                            ((g.current = !0),
                            ed.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    let t = em.A.getConnectedFrame();
                                    _.current && t?.applicationId === e && ed.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => m(e))
                                .finally(() => {
                                    g.current = !1;
                                }));
                    }
                }, [t, e, i, h, f, u, c, o, p, n]);
            let v = l.useRef(null);
            return (l.useEffect(() => {
                v.current = u ? e : null;
            }, [u, e]),
            l.useEffect(
                () => () => {
                    let e = v.current;
                    null != e && ed.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != i
                  ? { status: "local", src: i }
                  : u
                    ? { status: "active" }
                    : a || (h && f)
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
            className: eg.LB,
            children: [
                (0, s.jsx)("div", { className: eg.fm, children: (0, s.jsx)(g, { state: u }) }),
                null != t &&
                    c &&
                    (0, s.jsx)("div", {
                        ref: d,
                        className: eg.AF,
                        children: (0, s.jsxs)("div", {
                            className: eg.cO,
                            children: [(0, s.jsx)(ec, { projectId: t }), (0, s.jsx)(ei, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
