n.d(t, { A: () => ev });
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
    p = n(834730),
    f = n(289873),
    h = n(821609),
    g = n(323384),
    x = n(818085),
    _ = n(375708),
    j = n(407663);
function v(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: _.intl.string(x.default["bTjP+Y"]),
        className: j.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var E = n(616694);
function A(e) {
    let { title: t, body: n, wide: l = !1, children: a } = e;
    return (0, s.jsxs)("div", {
        className: u()(E.Bf, l && E.Qx),
        children: [
            (0, s.jsxs)("div", {
                className: E.Ux,
                children: [
                    (0, s.jsx)(m.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, s.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { state: t, gate: n } = e;
    return n?.type === "checking"
        ? (0, s.jsx)("div", { className: E.qs, children: (0, s.jsx)(f.y, {}) })
        : n?.type === "permissions"
          ? (0, s.jsx)("div", {
                className: E.qs,
                children: (0, s.jsx)(A, {
                    wide: !0,
                    title: _.intl.string(x.default.DYwf2n),
                    body: _.intl.string(x.default.WWj3pN),
                    children: (0, s.jsx)(h.$, {
                        variant: "primary",
                        size: "md",
                        text: _.intl.string(x.default["CRfE/E"]),
                        onClick: n.onReviewPermissions,
                        loading: n.loading,
                    }),
                }),
            })
          : "commands-only" === t.status
            ? (0, s.jsx)("div", {
                  className: E.qs,
                  children: (0, s.jsx)(A, {
                      title: _.intl.string(x.default.FHOJiH),
                      body: _.intl.string(x.default["1yLQoV"]),
                  }),
              })
            : "local" === t.status
              ? (0, s.jsx)(v, { src: t.src }, t.src)
              : "no-app" === t.status
                ? (0, s.jsxs)("div", {
                      className: E.qs,
                      children: [
                          (0, s.jsx)(g.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                          (0, s.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: _.intl.string(x.default["6xTawd"]),
                          }),
                      ],
                  })
                : "error" === t.status
                  ? (0, s.jsxs)("div", {
                        className: E.qs,
                        children: [
                            (0, s.jsx)(m.D, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: _.intl.string(x.default.MeLWCr),
                            }),
                            (0, s.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: E.tj,
                                children: _.intl.string(x.default["1RCbQT"]),
                            }),
                        ],
                    })
                  : "blocked" === t.status
                    ? (0, s.jsxs)("div", {
                          className: E.qs,
                          children: [
                              (0, s.jsx)(m.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: _.intl.string(x.default.MHvjVv),
                              }),
                              (0, s.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: E.tj,
                                  children: _.intl.string(x.default.TIbJ5p),
                              }),
                          ],
                      })
                    : "active" === t.status
                      ? null
                      : (0, s.jsx)("div", { className: E.qs, children: (0, s.jsx)(f.y, {}) });
}
var N = n(689175),
    b = n(783791),
    y = n(826745),
    S = n(559647),
    T = n(17117);
function w(e) {
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
        className: T.DA,
        children: [
            (0, s.jsx)(y.y, {
                value: r,
                onChange: (e) => i(e.currentTarget.value),
                onKeyDown: d,
                placeholder: t ? _.intl.string(x.default.ahRdoJ) : _.intl.string(x.default.nm4w9P),
                disabled: !t,
                "aria-label": _.intl.string(x.default.OPr66w),
                rows: 1,
                className: T.jp,
            }),
            (0, s.jsxs)("div", {
                className: T.fF,
                children: [
                    (0, s.jsx)("div", { className: T.MT }),
                    (0, s.jsx)("button", {
                        type: "submit",
                        className: T.rt,
                        disabled: !t || "" === r.trim(),
                        "aria-label": _.intl.string(x.default["22GHMt"]),
                        children: (0, s.jsx)(S.l, { size: "xs", color: "currentColor", className: T.Mx }),
                    }),
                ],
            }),
        ],
    });
}
n(321073);
var R = n(847374),
    I = n(320448),
    C = n(939249),
    P = n(46054),
    O = n(84206);
function G(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, s.jsxs)("section", {
              className: O.hb,
              children: [
                  (0, s.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, s.jsx)("div", {
                      className: O.Hu,
                      children: n.map((e) =>
                          (0, s.jsx)(
                              "span",
                              {
                                  className: O.uR,
                                  children: (0, s.jsx)(p.E, {
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
function D(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, s.jsxs)("article", {
        className: O.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, s.jsxs)("header", {
                className: O.pu,
                children: [
                    (0, s.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: _.intl.string(x.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, s.jsx)("span", {
                              className: O.dr,
                              children: (0, s.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: _.intl.string(_.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(p.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, s.jsxs)("section", {
                      className: O.hb,
                      children: [
                          (0, s.jsx)(p.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: _.intl.string(x.default.KLyB8Y),
                          }),
                          (0, s.jsx)("ul", {
                              className: O.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: O.H6,
                                          children: [
                                              (0, s.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: O.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, s.jsx)(p.E, {
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
                      className: O.hb,
                      children: [
                          (0, s.jsx)(p.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: _.intl.string(_.t["0hKkS+"]),
                          }),
                          (0, s.jsx)("ul", {
                              className: O.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: O.Xs,
                                          children: [
                                              (0, s.jsxs)(p.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, s.jsx)(p.E, {
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
            (0, s.jsx)(G, { label: _.intl.string(x.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, s.jsx)(G, { label: _.intl.string(x.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, s.jsxs)("div", {
                      className: O.nc,
                      children: [
                          (0, s.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: _.intl.string(x.default.GYoWRk),
                          }),
                          (0, s.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: O.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var B = n(700766),
    H = n(692228),
    V = n(742715);
let L = new Set(["thinking", "reply", "plan_proposed", "announcement"]);
function M(e) {
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
                                        return _.intl.string(x.default["0ce6LB"]);
                                    case "planned":
                                        return _.intl.formatToPlainString(x.default["h6H4+U"], {
                                            count: e.commands?.length ?? 0,
                                        });
                                    case "thinking":
                                        return _.intl.string(x.default.K7TkAL);
                                    case "writing_command":
                                        return e.friendly ?? e.name ?? _.intl.string(x.default.nv6pUM);
                                    case "assembling":
                                        return _.intl.string(x.default["9G3ZmA"]);
                                    case "installing_deps":
                                        return _.intl.string(x.default.VZuRug);
                                    case "building":
                                        return _.intl.string(x.default["s+ylXP"]);
                                    case "bundling":
                                        return _.intl.string(x.default.rEQlMx);
                                    case "committing":
                                        return _.intl.string(x.default.Yvyw1H);
                                    case "built":
                                        return _.intl.string(x.default.hOcVAj);
                                    case "build_error":
                                        return _.intl.string(x.default["6L9Vwt"]);
                                    case "healthchecking":
                                        return _.intl.string(x.default.sz8yAj);
                                    case "preview_connecting":
                                        return _.intl.string(x.default.pOYDEc);
                                    case "awaiting_auth":
                                        return _.intl.string(x.default["orD+xo"]);
                                    case "healthcheck_passed":
                                        return _.intl.string(x.default["x+sqTG"]);
                                    case "healthcheck_failed":
                                        return _.intl.string(x.default.FUWbq1);
                                    case "deploying":
                                        return _.intl.string(x.default.wcXX8Z);
                                    case "preview_ready":
                                        return _.intl.string(x.default["78YNh7"]);
                                    case "error":
                                    case "terminal_error":
                                        return _.intl.string(x.default.j3hBoA);
                                    default:
                                        return _.intl.string(x.default.nv6pUM);
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
        className: u()(B.ue, H.XR),
        children: [
            null != n && "" !== n
                ? (0, s.jsx)(p.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: B.Xt,
                      children: n,
                  })
                : null,
            c.length > 0
                ? (0, s.jsx)("ol", { className: B.dO, children: c.map((e, t) => (0, s.jsx)(F, { group: e }, t)) })
                : null,
            null != r
                ? (0, s.jsx)(D, { proposal: r, onApprove: i })
                : "" !== a
                  ? (0, s.jsx)("div", {
                        className: B.ky,
                        children: (0, s.jsx)("div", {
                            className: u()(V.PT, B.cW),
                            children: P.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    })
                  : null,
        ],
    });
}
function F(e) {
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
            children: (0, s.jsx)(p.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: o,
                selectable: !0,
                className: B.iq,
                children: n.summary,
            }),
        });
    let d = a ? R.a : I._;
    return (0, s.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: B.Dx,
        children: [
            (0, s.jsxs)(C.D, {
                tag: "div",
                className: B.kG,
                "aria-expanded": a,
                "aria-controls": i,
                "aria-label": _.intl.formatToPlainString(x.default.z4KWsN, { step: n.summary }),
                onClick: c,
                children: [
                    (0, s.jsx)(p.E, {
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
                        p.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var U = n(289149);
function W(e) {
    let { messages: t, onApprove: n } = e,
        l = t[t.length - 1];
    return (0, s.jsx)("ol", {
        className: U.x7,
        children: t.map((e) => {
            if ("user" === e.role)
                return (0, s.jsx)(
                    q,
                    {
                        role: "user",
                        children: (0, s.jsx)("div", {
                            className: u()(U.B2, H.XR),
                            children: (0, s.jsx)(p.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: e.content,
                            }),
                        }),
                    },
                    e.id,
                );
            let t = e.steps.filter((e) => !L.has(e.kind));
            return "" === e.content && null == e.proposal && 0 === t.length && null == e.announcement
                ? null
                : (0, s.jsx)(
                      q,
                      {
                          role: "assistant",
                          children: (0, s.jsx)(M, {
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
function q(e) {
    let { role: t, children: n } = e;
    return (0, s.jsx)("li", { "data-role": t, className: U.xk, children: n });
}
var z = n(863610),
    $ = n(673724),
    Z = n(922016),
    Y = n(885574),
    J = n(677175);
function K(e) {
    return e.toLocaleString();
}
function X(e) {
    let { label: t, usage: n } = e;
    return (0, s.jsxs)("div", {
        className: J.Q$,
        children: [
            (0, s.jsxs)("div", {
                className: J.mf,
                children: [
                    (0, s.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, s.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [K((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, s.jsxs)(p.E, {
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
function Q(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, s.jsxs)("div", {
        className: J.si,
        role: "dialog",
        "aria-label": _.intl.string(x.default["9yoLWZ"]),
        children: [
            (0, s.jsx)("div", {
                className: J.Q$,
                children: (0, s.jsxs)("div", {
                    className: J.mf,
                    children: [
                        (0, s.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [K((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, s.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(X, { label: _.intl.string(x.default.hk4jJr), usage: t.orchestrator }),
            (0, s.jsx)(X, { label: _.intl.string(x.default.R9aduM), usage: t.codegen }),
            (0, s.jsxs)("div", {
                className: J.mf,
                children: [
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.string(x.default["kILb+R"]),
                    }),
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, $.sj)(n) ? "\u2014" : `${Math.round(100 * (0, $.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { project: t } = e,
        n = l.useRef(null);
    return (0, s.jsx)(Z.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, s.jsx)(Q, { project: t }),
        children: (e) =>
            (0, s.jsx)(C.D, {
                innerRef: n,
                className: J.Y$,
                "aria-label": _.intl.string(x.default.AWQ2ZV),
                ...e,
                children: (0, s.jsx)(Y.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var et = n(154861);
function en(e) {
    switch (e) {
        case "open":
            return _.intl.string(x.default.cLhFMi);
        case "connecting":
            return _.intl.string(x.default.W7oyuf);
        case "failed":
            return _.intl.string(x.default.eE60xI);
        case "closed":
            return _.intl.string(x.default["yBmS+I"]);
    }
}
function es(e) {
    let { thinking: t, projectUsage: n, connState: l } = e;
    return (0, s.jsxs)("div", {
        className: et.jf,
        children: [
            (0, s.jsx)("div", {
                className: et.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, s.jsxs)("div", {
                          className: et.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": _.intl.string(x.default.C0t6bp),
                          children: [
                              (0, s.jsx)(z.n, { dotRadius: 3.5, themed: !0 }),
                              (0, s.jsx)(p.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: _.intl.string(x.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == n
                ? null
                : (0, s.jsxs)("span", {
                      className: et.BP,
                      children: [
                          (0, s.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": _.intl.formatToPlainString(x.default["7SZZvj"], {
                                  runes: (0, $.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: _.intl.formatToPlainString(x.default["4PFO2p"], {
                                  runes: (0, $.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, s.jsx)(ee, { project: n }),
                      ],
                  }),
            (0, s.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": _.intl.formatToPlainString(x.default.eDDdhB, { status: en(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: et.XF,
                children: en(l),
            }),
        ],
    });
}
var el = n(506774),
    ea = n(192308),
    er = n(651649),
    ei = n(670455);
let ec = "shownVibegrationsFeedbackProjectIds";
var eo = n(104071);
function ed(e) {
    let { projectId: t, open: r } = e,
        i = (0, a.bG)([b.A], () => b.A.getMessages(t), [t]),
        c = (0, a.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        d = (0, a.bG)([b.A], () => b.A.getProjectUsage(t), [t]),
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
                    let t = b.A.getMessages(e).filter((e) => "assistant" === e.role && (0, b.B)(e)).length;
                    !(t < 3) &&
                        ((el.w.get(ec) ?? []).includes(e) ||
                            er.A.possiblyShowFeedbackModal(ei.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = el.w.get(ec) ?? []).includes(e) || el.w.set(ec, [...l, e]),
                                    (0, ea.openModalLazy)(async () => {
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
        h = l.useCallback(() => f(_.intl.string(x.default.Jj8Ftb)), [f]),
        g = "open" === c,
        j = i[i.length - 1],
        v = null != j && "assistant" === j.role && null != j.proposal,
        E = null != j && "assistant" === j.role && !(0, b.B)(j),
        A = v && g ? h : void 0;
    return (0, s.jsxs)("section", {
        "data-vibegrations-chat": !0,
        className: eo.T,
        children: [
            (0, s.jsx)(N.Ch, {
                ref: u,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: eo.N,
                children: (0, s.jsx)(W, { messages: i, onApprove: A }),
            }),
            (0, s.jsx)(es, { thinking: E, projectUsage: d, connState: c }),
            (0, s.jsx)(w, { canSend: g, onSend: f, onApprove: A }),
        ],
    });
}
function eu(e) {
    let { projectId: t } = e,
        n = (0, a.bG)([b.A], () => b.A.isThinking(t), [t]);
    return (0, s.jsx)("div", { className: H.MP, "data-active": n, "aria-hidden": !0 });
}
var em = n(956518),
    ep = n(627363),
    ef = n(20015),
    eh = n(207371),
    eg = n(208137),
    ex = n(972786),
    e_ = n(652215),
    ej = n(291815);
function ev(e) {
    let { projectId: t, appId: n, channelId: d, chatOpen: u, previewReady: m, previewGate: p } = e,
        f = (function (e, t, n, s) {
            let { data: c, isLoading: d } = (0, ep.YY)(e ?? void 0),
                u = (0, a.bG)([ex.A, o.Ay], () => {
                    if (null == e || null == (0, eg.V)()) return null;
                    let t = ex.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    if (null == t) return null;
                    let n = o.Ay.getPreviewTs(t.id);
                    return (0, eg.s)(t, e, n);
                }, [e]),
                m = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null),
                p = (0, a.bG)([i.A], () => null != e && i.A.isLaunchingFrame(e), [e]),
                f = null != e && m === e,
                [h, g] = l.useState(null),
                x = null != e && h === e,
                _ = (0, eh.x)(c),
                j = null != e && null != (0, em.Ay)(e),
                v = n && !d && null != c && !(0, ef.n)(c, e_.gfo.EMBEDDED),
                E = l.useRef(!1),
                A = l.useRef(!1);
            l.useEffect(
                () => () => {
                    A.current = !0;
                },
                [],
            ),
                l.useEffect(() => {
                    if (t && null != e) {
                        if (!n || v) {
                            f && r.A.stopFrame({ applicationId: e });
                            return;
                        }
                        if (null == u && _ && j) {
                            if (f) {
                                i.A.getConnectedFrame()?.channelId !== s && r.A.stopFrame({ applicationId: e });
                                return;
                            }
                            null != m ||
                                p ||
                                E.current ||
                                x ||
                                ((E.current = !0),
                                r.A.launchFrame({ applicationId: e, channelId: s })
                                    .then(() => {
                                        let t = i.A.getConnectedFrame();
                                        A.current && t?.applicationId === e && r.A.stopFrame({ applicationId: e });
                                    })
                                    .catch(() => g(e))
                                    .finally(() => {
                                        E.current = !1;
                                    }));
                        }
                    }
                }, [t, e, n, v, u, _, j, f, m, p, x, s]);
            let k = l.useRef(null);
            return (l.useEffect(() => {
                k.current = f ? e : null;
            }, [f, e]),
            l.useEffect(
                () => () => {
                    let e = k.current;
                    null != e && r.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null != e && n)
                ? v
                    ? { status: "commands-only" }
                    : null != u
                      ? { status: "local", src: u }
                      : f
                        ? { status: "active" }
                        : d || (_ && j)
                          ? x
                              ? { status: "error" }
                              : null != m
                                ? { status: "blocked" }
                                : { status: "launching" }
                          : { status: "no-app" }
                : { status: "no-app" };
        })(n, null == p, m, d),
        h = l.useRef(null),
        g = (0, a.bG)([i.A], () => i.A.getConnectedFrame()?.applicationId ?? null);
    return (
        l.useLayoutEffect(() => {
            if (null == d) return (0, c.HV)(n), () => (0, c.HV)(null);
        }, [n, d]),
        l.useEffect(() => {
            p?.type === "permissions" && null != n && g === n && r.A.stopFrame({ applicationId: n });
        }, [n, g, p?.type]),
        l.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        l.useLayoutEffect(() => {
            let e = h.current;
            if (null == e) return void (0, c.Zq)(0);
            function t() {
                (0, c.Zq)(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, [t, u]),
        (0, s.jsxs)("div", {
            className: ej.LB,
            children: [
                (0, s.jsx)("div", { className: ej.fm, children: (0, s.jsx)(k, { state: f, gate: p }) }),
                null != t &&
                    u &&
                    (0, s.jsx)("div", {
                        ref: h,
                        className: ej.AF,
                        children: (0, s.jsxs)("div", {
                            className: ej.cO,
                            children: [(0, s.jsx)(eu, { projectId: t }), (0, s.jsx)(ed, { projectId: t, open: !0 }, t)],
                        }),
                    }),
            ],
        })
    );
}
