(l.r(t), l.d(t, { default: () => es }));
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(17928),
    c = l(152367),
    d = l(189252),
    o = l(485163),
    u = l(707554),
    m = l(297264),
    x = l(922016),
    j = l(305866),
    h = l(73153),
    g = l(964486),
    f = l(477818),
    p = l(58430),
    v = l(866665),
    N = l(408278),
    b = l(663341),
    y = l(980707),
    E = l(477782),
    I = l(39360),
    k = l(248675),
    A = l(375708),
    S = l(325780);
function C(e) {
    let { guilds: t, onNavigate: l } = e,
        i = a.useRef(null),
        s = A.intl.string(k.default.sFiGNz);
    return (0, n.jsx)(x.Y, {
        targetElementRef: i,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)(G, { guilds: t, onNavigate: l, onClose: a });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: i,
                className: S.h,
                children: (0, n.jsx)(v.m, {
                    position: "bottom",
                    text: s,
                    asContainer: !0,
                    children: (0, n.jsx)(N.K, {
                        "aria-label": s,
                        icon: b.PlusLargeIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: t,
                    }),
                }),
            });
        },
    });
}
function G(e) {
    let { guilds: t, onNavigate: l, onClose: a } = e,
        i = A.intl.string(k.default.sFiGNz);
    return (0, n.jsx)(y.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": i,
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(E.rX, {
            label: i,
            children:
                0 === t.length
                    ? (0, n.jsx)(E.Dr, {
                          id: "conjure-create-empty",
                          disabled: !0,
                          label: A.intl.string(k.default["6aLvW5"]),
                      })
                    : t.map((e) =>
                          (0, n.jsx)(
                              E.Dr,
                              {
                                  id: `conjure-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      ((0, I.g)(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var P = l(834730),
    D = l(939249),
    L = l(289873),
    F = l(821609),
    _ = l(364522),
    T = l(145497),
    w = l(967198),
    z = l(26278),
    R = l(542938),
    $ = l(594211),
    O = l(88205),
    J = l(508769),
    M = l(770318);
function X(e) {
    let { line: t } = e,
        { text: l, phase: a } = (0, O.Q)(t),
        i = (0, n.jsx)(P.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()(J.qo, M.Pf, { [J._q]: "exit" === a, [J.GD]: "enter" === a }),
            children: l,
        });
    return (0, n.jsx)("ol", {
        className: s()(M.Hc, J.pj),
        "data-live": "true",
        children: (0, n.jsx)("li", {
            className: s()(J.K1, M.AS),
            "data-live": "true",
            children: (0, n.jsxs)("div", {
                className: s()(J.ep, M.nM),
                children: [
                    (0, n.jsx)("span", { className: s()(J.$m, M.m0), children: i }),
                    (0, n.jsx)("span", { className: s()(J.$m, J.pw, M.m0), "aria-hidden": !0, children: i }),
                ],
            }),
        }),
    });
}
var Y = l(177446),
    q = l(571685);
let Q = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function H(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function W(e) {
    return (0, r.bG)(
        [o.Ay],
        () => {
            let t = (function (e) {
                let t = o.Ay.getMessages(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let l = t[e];
                    if (l?.role === "assistant") return l;
                }
                return null;
            })(e);
            if (null == t) return Q;
            let l = (0, Y.lt)(t.steps) ?? t.todos ?? [],
                n = 0,
                a = null,
                i = null;
            for (let e of l)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == a
                      ? (a = e)
                      : "pending" === e.status && null == i && (i = e);
            return { activityLine: (0, q.b)(t.steps), todos: l, completed: n, total: l.length, focus: a ?? i };
        },
        [e],
        H,
    );
}
var K = l(276374);
function B(e) {
    let { projectId: t } = e,
        { completed: l, total: a } = W(t);
    return 0 === a
        ? null
        : (0, n.jsx)(P.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: K.IW,
              "aria-label": A.intl.formatToPlainString(k.default.tuoa5I, { completed: l, total: a }),
              children: A.intl.formatToPlainString(k.default.baQ62I, { completed: l, total: a }),
          });
}
function U(e) {
    let { projectId: t } = e,
        { activityLine: l } = W(t);
    return null == l ? null : (0, n.jsx)("div", { className: K.Bs, children: (0, n.jsx)(X, { line: l }) });
}
function V(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: a } = e,
        i = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.guildName ?? A.intl.string(k.default["3QFps8"]),
        c =
            null == t.guildName
                ? A.intl.formatToPlainString(k.default["2sBOnp"], { name: t.name })
                : A.intl.formatToPlainString(k.default["hd+GF1"], { name: t.name, server: t.guildName });
    return (0, n.jsxs)("li", {
        className: K.dc,
        children: [
            (0, n.jsx)($.Ay, { projectId: t.projectId }),
            (0, n.jsxs)(D.D, {
                className: K.nM,
                "aria-label": c,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && ((0, I.g)(s, t.projectId), a());
                },
                children: [
                    (0, n.jsx)(R.A, { project: t.project, size: "lg", placeholderClassName: K.Pz }),
                    (0, n.jsxs)("div", {
                        className: K.fw,
                        children: [
                            (0, n.jsx)(P.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: K.j1,
                                children: t.name,
                            }),
                            (0, n.jsxs)("div", {
                                className: K.lk,
                                children: [
                                    (0, n.jsx)(P.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: K.L5,
                                        children: r,
                                    }),
                                    i
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: K.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(U, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: K.en, children: i && (0, n.jsx)(B, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { id: t, heading: l, entries: a, fallbackGuildId: i, onNavigate: s } = e;
    if (0 === a.length) return null;
    let r = `conjure-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: K.SF, children: l }),
            (0, n.jsx)("ul", {
                className: K.p_,
                "aria-labelledby": r,
                children: a.map((e) => (0, n.jsx)(V, { entry: e, fallbackGuildId: i, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function ee(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, n.jsxs)("div", {
              className: K.wk,
              children: [
                  (0, n.jsx)(P.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: A.intl.string(k.default.snY8uu),
                  }),
                  (0, n.jsx)(P.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: A.intl.string(k.default.f5o5pk),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: K.p$,
              children: [
                  (0, n.jsx)(P.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: A.intl.string(k.default.snY8uu),
                  }),
                  (0, n.jsx)(P.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: A.intl.formatToPlainString(k.default.NiXcSi, { count: t.length }),
                  }),
                  (0, n.jsx)("ul", {
                      className: K.gc,
                      children: t.map((e) =>
                          (0, n.jsx)(
                              "li",
                              {
                                  children: (0, n.jsxs)(D.D, {
                                      className: K.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          ((0, I.g)(e.id), l());
                                      },
                                      children: [
                                          (0, n.jsx)(T.Ay, { guild: e, iconSize: 32, className: K.$f }),
                                          (0, n.jsx)(P.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: K.qL,
                                              children: e.name,
                                          }),
                                      ],
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function et(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        a = (0, p.q)("VibegrationsProjectList"),
        i = (0, r.bG)([z.Ay], () => z.Ay.getProjectsFetchState()),
        s = (0, r.bG)([w.A], () => w.A.getGuildId()),
        c = t.find((e) => e.id === s)?.id ?? t[0]?.id ?? null,
        d = a.filter((e) => "idle" !== e.activity),
        o = a.filter((e) => "idle" === e.activity);
    return 0 === a.length
        ? null == i || "loading" === i.type
            ? (0, n.jsxs)("div", {
                  className: K.wk,
                  children: [
                      (0, n.jsx)(L.y, {}),
                      (0, n.jsx)(P.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: A.intl.string(k.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === i.type
              ? (0, n.jsxs)("div", {
                    className: K.wk,
                    children: [
                        (0, n.jsx)(P.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(k.default.DJAPMO),
                        }),
                        (0, n.jsx)(F.$, {
                            variant: "secondary",
                            size: "sm",
                            text: A.intl.string(k.default["WFJ/vb"]),
                            onClick: () => (0, f.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(ee, { guilds: t, onNavigate: l })
        : (0, n.jsxs)(_.Ip, {
              fade: !0,
              className: K.XG,
              children: [
                  (0, n.jsx)(Z, {
                      id: "active",
                      heading: A.intl.string(k.default.DnsyEc),
                      entries: d,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
                  (0, n.jsx)(Z, {
                      id: "idle",
                      heading: A.intl.string(k.default.p8lFfK),
                      entries: o,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
              ],
          });
}
var el = l(241590);
function en(e) {
    let { onNavigate: t } = e,
        l = A.intl.string(k.default.bHcJoe),
        a = (0, p.z)("VibegrationsPopout");
    return (0, n.jsxs)("div", {
        className: el.kL,
        children: [
            (0, n.jsx)("div", { className: el._Q, children: (0, n.jsx)("span", { className: el.Tp }) }),
            (0, n.jsx)("div", {
                className: el.Qs,
                children: (0, n.jsx)(u.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: el.wx,
                        children: [
                            (0, n.jsx)(m.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: el.DD,
                                children: l,
                            }),
                            (0, n.jsx)("div", {
                                className: el.$s,
                                children: (0, n.jsx)(C, { guilds: a, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(et, { eligibleGuilds: a, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ea(e) {
    let { children: t, targetElementRef: l } = e,
        [i, s] = a.useState(!1),
        r = a.useCallback(() => s(!1), []),
        c = a.useCallback(() => {
            s((e) => (e || (0, f.hF)(), !e));
        }, []);
    return (
        (0, g.Ay)(
            () => (h.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => h.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, n.jsx)(x.Y, {
            targetElementRef: l,
            shouldShow: i,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: x.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, n.jsx)(j.l, {
                    "aria-label": A.intl.string(k.default.bHcJoe),
                    children: (0, n.jsx)(en, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: n } = l;
                return t(c, n, e);
            },
        })
    );
}
var ei = l(385920);
function es() {
    let e = a.useRef(null),
        t = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        l = A.intl.string(k.default.bHcJoe);
    return (0, n.jsx)(ea, {
        targetElementRef: e,
        children: (a, i) =>
            (0, n.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: l,
                "aria-haspopup": "dialog",
                "aria-expanded": i,
                selected: i,
                onClick: a,
                overlay: t
                    ? (0, n.jsx)(c.D, {
                          className: s()(ei.bI, { [ei.lL]: i }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
