n.d(t, { A: () => eT });
var s = n(477900),
    l = n(582128),
    a = n(17928),
    r = n(113854),
    i = n(91242),
    c = n(948230),
    o = n(998939),
    d = n(503698),
    u = n.n(d),
    m = n(297264),
    h = n(834730),
    f = n(289873),
    p = n(821609),
    g = n(323384),
    x = n(869146),
    v = n(818085),
    _ = n(375708),
    j = n(407663);
function E(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: _.intl.string(v.default["bTjP+Y"]),
        className: j.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var A = n(652215),
    N = n(616694);
function b(e) {
    let { title: t, body: n, wide: l = !1, children: a } = e;
    return (0, s.jsxs)("div", {
        className: u()(N.Bf, l && N.Qx),
        children: [
            (0, s.jsxs)("div", {
                className: N.Ux,
                children: [
                    (0, s.jsx)(m.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, s.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { state: t, gate: n } = e,
        l = (0, a.bG)([x.A], () => x.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT));
    return n?.type === "checking"
        ? (0, s.jsx)("div", { className: N.qs, children: (0, s.jsx)(f.y, {}) })
        : n?.type === "permissions"
          ? (0, s.jsx)("div", {
                className: N.qs,
                children: (0, s.jsx)(b, {
                    wide: !0,
                    title: _.intl.string(v.default.DYwf2n),
                    body: _.intl.string(v.default.WWj3pN),
                    children: (0, s.jsx)(p.$, {
                        variant: "primary",
                        size: "md",
                        text: _.intl.string(v.default["CRfE/E"]),
                        onClick: n.onReviewPermissions,
                        loading: n.loading,
                    }),
                }),
            })
          : "commands-only" === t.status
            ? (0, s.jsx)("div", {
                  className: N.qs,
                  children: (0, s.jsx)(b, {
                      title: _.intl.string(v.default.FHOJiH),
                      body: _.intl.string(v.default["1yLQoV"]),
                  }),
              })
            : "local" === t.status
              ? (0, s.jsx)(E, { src: t.src }, t.src)
              : "no-app" === t.status
                ? (0, s.jsxs)("div", {
                      className: N.qs,
                      children: [
                          (0, s.jsx)(g.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                          (0, s.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: _.intl.string(v.default["6xTawd"]),
                          }),
                      ],
                  })
                : "error" === t.status
                  ? (0, s.jsxs)("div", {
                        className: N.qs,
                        children: [
                            (0, s.jsx)(m.D, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: _.intl.string(v.default.MeLWCr),
                            }),
                            (0, s.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: N.tj,
                                children: _.intl.string(v.default["1RCbQT"]),
                            }),
                        ],
                    })
                  : "blocked" === t.status
                    ? (0, s.jsxs)("div", {
                          className: N.qs,
                          children: [
                              (0, s.jsx)(m.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: _.intl.string(v.default.MHvjVv),
                              }),
                              (0, s.jsx)(h.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: N.tj,
                                  children: _.intl.string(v.default.TIbJ5p),
                              }),
                          ],
                      })
                    : "active" === t.status && l
                      ? (0, s.jsx)("div", {
                            className: N.qs,
                            children: (0, s.jsx)(b, {
                                title: _.intl.string(v.default["4f6Vkr"]),
                                body: _.intl.string(v.default.LJ2q1H),
                            }),
                        })
                      : "active" === t.status
                        ? null
                        : (0, s.jsx)("div", { className: N.qs, children: (0, s.jsx)(f.y, {}) });
}
var y = n(689175),
    S = n(783791),
    T = n(826745),
    w = n(559647),
    R = n(17117);
function I(e) {
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
        className: R.DA,
        children: [
            (0, s.jsx)(T.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? _.intl.string(v.default.ahRdoJ) : _.intl.string(v.default.nm4w9P),
                disabled: !t,
                "aria-label": _.intl.string(v.default.OPr66w),
                rows: 1,
                className: R.jp,
            }),
            (0, s.jsxs)("div", {
                className: R.fF,
                children: [
                    (0, s.jsx)("div", { className: R.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: R.rt,
                        disabled: !t || "" === r.trim(),
                        "aria-label": _.intl.string(v.default["22GHMt"]),
                        children: (0, s.jsx)(w.l, { size: "xs", color: "currentColor", className: R.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073);
var C = n(847374),
    P = n(320448),
    O = n(939249),
    D = n(46054),
    H = n(84206);
function L(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: H.hb,
              children: [
                  (0, s.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: H.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: H.uR,
                                  children: (0, s.jsx)(h.E, {
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
        className: H.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: H.pu,
                children: [
                    (0, s.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: _.intl.string(v.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: H.dr,
                              children: (0, s.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: _.intl.string(_.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, s.jsxs)("section", {
                      className: H.hb,
                      children: [
                          (0, s.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: _.intl.string(v.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: H.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: H.H6,
                                          children: [
                                              (0, s.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: H.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, s.jsx)(h.E, {
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
                      className: H.hb,
                      children: [
                          (0, s.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: _.intl.string(_.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: H.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: H.Xs,
                                          children: [
                                              (0, s.jsxs)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, s.jsx)(h.E, {
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
            (0, s.jsx)(L, { label: _.intl.string(v.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(L, { label: _.intl.string(v.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: H.nc,
                      children: [
                          (0, s.jsx)(p.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: _.intl.string(v.default.GYoWRk),
                          }),
                          (0, s.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: H.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var B = n(700766),
    V = n(742715);
let M = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function F(e) {
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
                                        return _.intl.string(v.default["0ce6LB"]);
                                    case "planned":
                                        return _.intl.formatToPlainString(v.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return _.intl.string(v.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? _.intl.string(v.default.nv6pUM);
                                    case "assembling":
                                        return _.intl.string(v.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return _.intl.string(v.default.VZuRug);
                                    case "building":
                                        return _.intl.string(v.default["s+ylXP"]);
                                    case "bundling":
                                        return _.intl.string(v.default.rEQlMx);
                                    case "committing":
                                        return _.intl.string(v.default.Yvyw1H);
                                    case "built":
                                        return _.intl.string(v.default.hOcVAj);
                                    case "build_error":
                                        return _.intl.string(v.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return _.intl.string(v.default.sz8yAj);
                                    case "preview_connecting":
                                        return _.intl.string(v.default.pOYDEc);
                                    case "awaiting_auth":
                                        return _.intl.string(v.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return _.intl.string(v.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return _.intl.string(v.default.FUWbq1);
                                    case "deploying":
                                        return _.intl.string(v.default.wcXX8Z);
                                    case "preview_ready":
                                        return _.intl.string(v.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return _.intl.string(v.default.j3hBoA);
                                    default:
                                        return _.intl.string(v.default.nv6pUM);
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
        className: B.ue,
        children: [
            null != n && "" !== n
                ? (0, s.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: B.Xt,
                      children: n,
                  })
                : null,
            c.length > 0
                ? (0, s.jsx)("ol", { className: B.dO, children: c.map((e, t) => (0, s.jsx)(U, { group: e }, t)) })
                : null,
            null != r
                ? (0, s.jsx)(G, { proposal: r, onApprove: i })
                : "" !== a
                  ? (0, s.jsx)("div", {
                        className: B.ky,
                        children: (0, s.jsx)("div", {
                            className: u()(V.PT, B.cW),
                            children: D.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function U(e) {
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
            children: (0, s.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: o,
                selectable: !0,
                className: B.iq,
                children: n.summary,
            }),
        });
    let d = a ? C.a : P._;
    return (0, s.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: B.Dx,
        children: [
            (0, s.jsxs)(O.D, {
                tag: "div",
                className: B.kG,
                "aria-expanded": a,
                "aria-controls": i,
                "aria-label": _.intl.formatToPlainString(v.default.z4KWsN, { step: n.summary }),
                onClick: c,
                children: [
                    (0, s.jsx)(h.E, {
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
                        h.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var W = n(289149),
    z = n(692228);
function q(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: W.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    Z,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: u()(W.B2, z.XR),
                            children: (0, s.jsx)(h.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !M.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, s.jsx)(
                      Z,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(F, {
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
function Z(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: W.xk, children: n });
}
var $ = n(863610),
    Y = n(673724),
    J = n(922016),
    K = n(885574),
    Q = n(677175);
function X(e) {
    return e.toLocaleString();
}
function ee(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: Q.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: Q.mf,
                children: [
                    (0, s.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [X((0, Y.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, s.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    X(n.input_tokens),
                    " in \xb7 ",
                    X(n.output_tokens),
                    " out \xb7 ",
                    X(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    X(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function et(e) {
    let { project: t } = e,
        n = (0, Y.wV)(t.orchestrator, t.codegen);
    return (0, s.jsxs)("div", {
        className: Q.si,
        role: "dialog",
        "aria-label": _.intl.string(v.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: Q.Q$,
                children: (0, s.jsxs)("div", {
                    className: Q.mf,
                    children: [
                        (0, s.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [X((0, Y.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(ee, { label: _.intl.string(v.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)(ee, { label: _.intl.string(v.default.R9aduM), usage: t.codegen }),
            (0, s.jsxs)("div", {
                className: Q.mf,
                children: [
                    (0, s.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.string(v.default["kILb+R"]),
                    }),
                    (0, s.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Y.sj)(n) ? "\u2014" : `${Math.round(100 * (0, Y.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(J.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(et, { project: t }),
        children: (e) =>
            (0, s.jsx)(O.D, {
                innerRef: n,
                className: Q.Y$,
                "aria-label": _.intl.string(v.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(K.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var es = n(154861);
function el(e) {
    switch (e) {
        case "open":
            return _.intl.string(v.default.cLhFMi);
        case "connecting":
            return _.intl.string(v.default.W7oyuf);
        case "failed":
            return _.intl.string(v.default.eE60xI);
        case "closed":
            return _.intl.string(v.default["yBmS+I"]);
    }
}
function ea(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: es.jf,
        children: [
            (0, s.jsx)("div", {
                className: es.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: es.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": _.intl.string(v.default.C0t6bp),
                          children: [
                              (0, s.jsx)($.n, { dotRadius: 3.5, themed: !0 }),
                              (0, s.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: _.intl.string(v.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, s.jsxs)("span", {
                      className: es.BP,
                      children: [
                          (0, s.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": _.intl.formatToPlainString(v.default["7SZZvj"], {
                                  runes: (0, Y.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: _.intl.formatToPlainString(v.default["4PFO2p"], {
                                  runes: (0, Y.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(en, { project: n }),
                      ],
                  }),
            (0, s.jsx)(h.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": _.intl.formatToPlainString(v.default.eDDdhB, { status: el(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: es.XF,
                children: el(l),
            }),
        ],
    });
}
var er = n(506774),
    ei = n(192308),
    ec = n(651649),
    eo = n(670455);
let ed = "shownVibegrationsFeedbackProjectIds";
var eu = n(104071);
function em(e) {
    let { projectId: t } = e,
        r = (0, a.bG)([S.A], () => S.A.getMessages(t), [t]),
        i = (0, a.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, a.bG)([S.A], () => S.A.getProjectUsage(t), [t]),
        d = l.useRef(null),
        u = l.useRef(null),
        m = l.useRef(!0);
    l.useEffect(() => {
        m.current && u.current?.scrollToBottom();
    }, [r]);
    let h = l.useCallback(() => {
        let e = u.current;
        null != e && (m.current = 32 > e.getDistanceFromBottom());
    }, []);
    l.useLayoutEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            s = new ResizeObserver((s) => {
                let [l] = s,
                    a = l?.contentRect.width ?? e.getBoundingClientRect().width;
                a === t ||
                    ((t = a),
                    m.current &&
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
            (0, o.Hc)(t);
        }, [t]),
        l.useEffect(
            () => () =>
                (function (e) {
                    let t = S.A.getMessages(e).filter((e) => "assistant" === e.role && (0, S.B)(e)).length;
                    !(t < 3) &&
                        ((er.w.get(ed) ?? []).includes(e) ||
                            ec.A.possiblyShowFeedbackModal(eo.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = er.w.get(ed) ?? []).includes(e) || er.w.set(ed, [...l, e]),
                                    (0, ei.openModalLazy)(async () => {
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
                (0, o.dv)(t, e);
            },
            [t],
        ),
        p = l.useCallback(() => f(_.intl.string(v.default.Jj8Ftb)), [f]),
        g = "open" === i,
        x = r[r.length - 1],
        j = null != x && "assistant" === x.role && null != x.proposal,
        E = null != x && "assistant" === x.role && !(0, S.B)(x),
        A = j && g ? p : void 0;
    return (0, s.jsxs)("section", {
        ref: d,
        "data-vibegrations-chat": !0,
        className: eu.T,
        children: [
            (0, s.jsx)(y.Ch, {
                ref: u,
                onScroll: h,
                "data-vibegrations-chat-log": !0,
                className: eu.N,
                children: (0, s.jsx)(q, { messages: r, onApprove: A }),
            }),
            (0, s.jsx)(ea, { thinking: E, projectUsage: c, connState: i }),
            (0, s.jsx)(I, { canSend: g, onSend: f, onApprove: A }),
        ],
    });
}
var eh = n(435558),
    ef = n(661531),
    ep = n(602853),
    eg = n(517461),
    ex = n(761929),
    ev = n(552067);
function e_(e) {
    let { open: t, maxWidth: n, onWidthChange: a, children: r } = e,
        i = (0, ep.r)(ef.A.modules.chat.RESIZE_HANDLE_WIDTH),
        c = l.useRef(null),
        [o, d] = (0, eg.V)("VibegrationsChatSidebarWidth", 460),
        [u, m] = l.useState(o ?? 460),
        h = (0, eh.clamp)(u, 360, n);
    l.useLayoutEffect(() => {
        a(t ? h + i : 0);
    }, [h, t, i, a]);
    let f = (0, ex.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: c,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: ex.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = l.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, s.jsxs)("div", {
        className: ev.pz,
        hidden: !t,
        children: [
            (0, s.jsx)("div", { className: ev.Di, onPointerDown: p }),
            (0, s.jsx)("div", { ref: c, className: ev.kL, style: { width: h }, children: r }),
        ],
    });
}
function ej(e) {
    let { projectId: t } = e,
        n = (0, a.bG)([S.A], () => S.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: z.MP, "data-active": n, "aria-hidden": !0 });
}
var eE = n(956518),
    eA = n(627363),
    eN = n(20015),
    eb = n(207371),
    ek = n(208137),
    ey = n(972786),
    eS = n(291815);
function eT(e) {
    let { projectId: t, appId: n, channelId: d, chatOpen: u, previewReady: m, previewGate: h } = e,
        f = (function (e, t, n, s) {
            let { data: c, isLoading: d } = (0, eA.YY)(e ?? void 0),
                u = (0, a.bG)([ey.A, o.Ay], () => {
                    if (null == e || null == (0, ek.V)()) return null;
                    let t = ey.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    if (null == t) return null;
                    let n = o.Ay.getPreviewTs(t.id);
                    return (0, ek.s)(t, e, n);
                }, [e]),
                m = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null),
                h = (0, a.bG)([i.A], () => null != e && i.A.isLaunchingFrame(e), [e]),
                f = null != e && m === e,
                [p, g] = l.useState(null),
                x = null != e && p === e,
                v = (0, eb.x)(c),
                _ = null != e && null != (0, eE.Ay)(e),
                j = n && !d && null != c && !(0, eN.n)(c, A.gfo.EMBEDDED),
                E = l.useRef(!1),
                N = l.useRef(!1);
            l.useEffect(
                () => () => {
                    N.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e) {
                        if (!n || j) {
                            f && r.A.stopFrame({ applicationId: e });
                            return;
                        }
                        if (null == u && v && _) {
                            if (f) {
                                i.A.getConnectedFrame()?.channelId !== s && r.A.stopFrame({ applicationId: e });
                                return;
                            }
                            null != m ||
                                h ||
                                E.current ||
                                x ||
                                ((E.current = !0),
                                r.A.launchFrame({ applicationId: e, channelId: s })
                                    .then(() => {
                                        let t = i.A.getConnectedFrame();
                                        N.current && t?.applicationId === e && r.A.stopFrame({ applicationId: e });
                                    })
                                    .catch(() => g(e))
                                    .finally(() => {
                                        E.current = !1;
                                    }));
                        }
                    }
                }, [t, e, n, j, u, v, _, f, m, h, x, s]);
            let b = l.useRef(null);
            return (l.useEffect(() => {
                b.current = f ? e : null;
            }, [f, e]),
            l.useEffect(
                () => () => {
                    let e = b.current;
                    null != e && r.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null != e && n)
                ? j
                    ? { status: "commands-only" }
                    : null != u
                      ? { status: "local", src: u }
                      : f
                        ? { status: "active" }
                        : d || (v && _)
                          ? x
                              ? { status: "error" }
                              : null != m
                                ? { status: "blocked" }
                                : { status: "launching" }
                          : { status: "no-app" }
                : { status: "no-app" };
        })(n, null == h, m, d),
        p = l.useRef(null),
        [g, x] = l.useState(0),
        v = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null);
    l.useLayoutEffect(() => {
        if (null == d) return (0, c.HV)(n), () => (0, c.HV)(null);
    }, [n, d]),
        l.useEffect(() => {
            h?.type === "permissions" && null != n && v === n && r.A.stopFrame({ applicationId: n });
        }, [n, v, h?.type]),
        l.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        l.useLayoutEffect(() => {
            let e = p.current;
            if (null == e) return;
            function t() {
                if (null != e) return x(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        l.useEffect(() => () => (0, c.Zq)(0), []);
    let _ = Math.max(360, g - 320),
        j = u || null == d;
    return (0, s.jsxs)("div", {
        ref: p,
        className: eS.LB,
        children: [
            (0, s.jsx)("div", { className: eS.fm, children: (0, s.jsx)(k, { state: f, gate: h }) }),
            null != t &&
                j &&
                (0, s.jsx)(e_, {
                    open: u,
                    maxWidth: _,
                    onWidthChange: c.Zq,
                    children: (0, s.jsxs)("div", {
                        className: eS.cO,
                        children: [(0, s.jsx)(ej, { projectId: t }), (0, s.jsx)(em, { projectId: t }, t)],
                    }),
                }),
        ],
    });
}
