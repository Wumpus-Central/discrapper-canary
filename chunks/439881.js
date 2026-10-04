(l.r(t), l.d(t, { default: () => es }));
var a = l(477900),
    i = l(582128),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    d = l(152367),
    c = l(189252),
    o = l(783791),
    u = l(707554),
    m = l(297264),
    x = l(922016),
    j = l(305866),
    g = l(73153),
    h = l(964486),
    f = l(948230),
    p = l(459514),
    v = l(866665),
    N = l(408278),
    b = l(663341),
    y = l(980707),
    I = l(477782),
    E = l(681952),
    S = l(50617),
    k = l(375708),
    A = l(789752);
function C(e) {
    let { guilds: t, onNavigate: l } = e,
        n = i.useRef(null),
        s = k.intl.string(S.default.qbAREO);
    return (0, a.jsx)(x.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(P, { guilds: t, onNavigate: l, onClose: i });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)("div", {
                ref: n,
                className: A.h,
                children: (0, a.jsx)(v.m, {
                    position: "bottom",
                    text: s,
                    asContainer: !0,
                    children: (0, a.jsx)(N.K, {
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
function P(e) {
    let { guilds: t, onNavigate: l, onClose: i } = e,
        n = k.intl.string(S.default.qbAREO);
    return (0, a.jsx)(y.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-create",
        "aria-label": n,
        onClose: i,
        onSelect: i,
        children: (0, a.jsx)(I.rX, {
            label: n,
            children:
                0 === t.length
                    ? (0, a.jsx)(I.Dr, {
                          id: "vibegrations-create-empty",
                          disabled: !0,
                          label: k.intl.string(S.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, a.jsx)(
                              I.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      ((0, E.X)(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var R = l(834730),
    D = l(939249),
    L = l(289873),
    G = l(821609),
    _ = l(364522),
    T = l(145497),
    q = l(967198),
    w = l(972786),
    H = l(477908),
    O = l(321593),
    Q = l(856795),
    $ = l(13699),
    F = l(265498);
function z(e) {
    let { line: t } = e,
        { text: l, phase: i } = (0, Q.Q)(t),
        n = (0, a.jsx)(R.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()($.qo, F.Pf, { [$._q]: "exit" === i, [$.GD]: "enter" === i }),
            children: l,
        });
    return (0, a.jsx)("ol", {
        className: s()(F.Hc, $.pj),
        "data-live": "true",
        children: (0, a.jsx)("li", {
            className: s()($.K1, F.AS),
            "data-live": "true",
            children: (0, a.jsxs)("div", {
                className: s()($.ep, F.nM),
                children: [
                    (0, a.jsx)("span", { className: s()($.$m, F.m0), children: n }),
                    (0, a.jsx)("span", { className: s()($.$m, $.pw, F.m0), "aria-hidden": !0, children: n }),
                ],
            }),
        }),
    });
}
var M = l(903586),
    X = l(717447);
let U = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function Y(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function Z(e) {
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
            if (null == t) return U;
            let l = (0, M.lt)(t.steps) ?? t.todos ?? [],
                a = 0,
                i = null,
                n = null;
            for (let e of l)
                "completed" === e.status
                    ? a++
                    : "in_progress" === e.status && null == i
                      ? (i = e)
                      : "pending" === e.status && null == n && (n = e);
            return { activityLine: (0, X.b)(t.steps), todos: l, completed: a, total: l.length, focus: i ?? n };
        },
        [e],
        Y,
    );
}
var V = l(654402);
function B(e) {
    let { projectId: t } = e,
        { completed: l, total: i } = Z(t);
    return 0 === i
        ? null
        : (0, a.jsx)(R.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: V.IW,
              "aria-label": k.intl.formatToPlainString(S.default["7Io+dh"], { completed: l, total: i }),
              children: k.intl.formatToPlainString(S.default.JmMDaL, { completed: l, total: i }),
          });
}
function K(e) {
    let { projectId: t } = e,
        { activityLine: l } = Z(t);
    return null == l ? null : (0, a.jsx)("div", { className: V.Bs, children: (0, a.jsx)(z, { line: l }) });
}
function W(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: i } = e,
        n = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.guildName ?? k.intl.string(S.default["qqH+iN"]),
        d =
            null == t.guildName
                ? k.intl.formatToPlainString(S.default.aj4bR0, { name: t.name })
                : k.intl.formatToPlainString(S.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, a.jsxs)("li", {
        className: V.dc,
        children: [
            (0, a.jsx)(O.Ay, { projectId: t.projectId }),
            (0, a.jsxs)(D.D, {
                className: V.nM,
                "aria-label": d,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && ((0, E.X)(s, t.projectId), i());
                },
                children: [
                    (0, a.jsx)(H.A, { project: t.project, size: "lg", placeholderClassName: V.Pz }),
                    (0, a.jsxs)("div", {
                        className: V.fw,
                        children: [
                            (0, a.jsx)(R.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: V.j1,
                                children: t.name,
                            }),
                            (0, a.jsxs)("div", {
                                className: V.lk,
                                children: [
                                    (0, a.jsx)(R.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: V.L5,
                                        children: r,
                                    }),
                                    n
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: V.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(K, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: V.en, children: n && (0, a.jsx)(B, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { id: t, heading: l, entries: i, fallbackGuildId: n, onNavigate: s } = e;
    if (0 === i.length) return null;
    let r = `vibegrations-section-${t}`;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: V.SF, children: l }),
            (0, a.jsx)("ul", {
                className: V.p_,
                "aria-labelledby": r,
                children: i.map((e) => (0, a.jsx)(W, { entry: e, fallbackGuildId: n, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function ee(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, a.jsxs)("div", {
              className: V.wk,
              children: [
                  (0, a.jsx)(R.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(S.default.qSQH7H),
                  }),
                  (0, a.jsx)(R.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: k.intl.string(S.default.I92Gjf),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: V.p$,
              children: [
                  (0, a.jsx)(R.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(S.default.qSQH7H),
                  }),
                  (0, a.jsx)(R.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: k.intl.formatToPlainString(S.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, a.jsx)("ul", {
                      className: V.gc,
                      children: t.map((e) =>
                          (0, a.jsx)(
                              "li",
                              {
                                  children: (0, a.jsxs)(D.D, {
                                      className: V.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          ((0, E.X)(e.id), l());
                                      },
                                      children: [
                                          (0, a.jsx)(T.Ay, { guild: e, iconSize: 32, className: V.$f }),
                                          (0, a.jsx)(R.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: V.qL,
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
        i = (0, p.T)("VibegrationsProjectList"),
        n = (0, r.bG)([w.Ay], () => w.Ay.getProjectsFetchState()),
        s = (0, r.bG)([q.A], () => q.A.getGuildId()),
        d = t.find((e) => e.id === s)?.id ?? t[0]?.id ?? null,
        c = i.filter((e) => "idle" !== e.activity),
        o = i.filter((e) => "idle" === e.activity);
    return 0 === i.length
        ? null == n || "loading" === n.type
            ? (0, a.jsxs)("div", {
                  className: V.wk,
                  children: [
                      (0, a.jsx)(L.y, {}),
                      (0, a.jsx)(R.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: k.intl.string(S.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === n.type
              ? (0, a.jsxs)("div", {
                    className: V.wk,
                    children: [
                        (0, a.jsx)(R.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: k.intl.string(S.default["IN/HRP"]),
                        }),
                        (0, a.jsx)(G.$, {
                            variant: "secondary",
                            size: "sm",
                            text: k.intl.string(S.default["42EdIV"]),
                            onClick: () => (0, f.hF)(),
                        }),
                    ],
                })
              : (0, a.jsx)(ee, { guilds: t, onNavigate: l })
        : (0, a.jsxs)(_.Ip, {
              fade: !0,
              className: V.XG,
              children: [
                  (0, a.jsx)(J, {
                      id: "active",
                      heading: k.intl.string(S.default["1SDxuI"]),
                      entries: c,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
                  (0, a.jsx)(J, {
                      id: "idle",
                      heading: k.intl.string(S.default.r9EdXu),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
              ],
          });
}
var el = l(437170);
function ea(e) {
    let { onNavigate: t } = e,
        l = k.intl.string(S.default.ZnvpQR),
        i = (0, p._)("VibegrationsPopout");
    return (0, a.jsxs)("div", {
        className: el.kL,
        children: [
            (0, a.jsx)("div", { className: el._Q, children: (0, a.jsx)("span", { className: el.Tp }) }),
            (0, a.jsx)("div", {
                className: el.Qs,
                children: (0, a.jsx)(u.F, {
                    forceLevel: 1,
                    component: (0, a.jsxs)("header", {
                        className: el.wx,
                        children: [
                            (0, a.jsx)(m.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: el.DD,
                                children: l,
                            }),
                            (0, a.jsx)("div", {
                                className: el.$s,
                                children: (0, a.jsx)(C, { guilds: i, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, a.jsx)(et, { eligibleGuilds: i, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ei(e) {
    let { children: t, targetElementRef: l } = e,
        [n, s] = i.useState(!1),
        r = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => {
            s((e) => (e || (0, f.hF)(), !e));
        }, []);
    return (
        (0, h.Ay)(
            () => (g.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => g.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, a.jsx)(x.Y, {
            targetElementRef: l,
            shouldShow: n,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: x.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, a.jsx)(j.l, {
                    "aria-label": k.intl.string(S.default.ZnvpQR),
                    children: (0, a.jsx)(ea, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: a } = l;
                return t(d, a, e);
            },
        })
    );
}
var en = l(483124);
function es() {
    let e = i.useRef(null),
        t = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        l = k.intl.string(S.default.ZnvpQR);
    return (0, a.jsx)(ei, {
        targetElementRef: e,
        children: (i, n) =>
            (0, a.jsx)(c.A, {
                ref: e,
                icon: d.D,
                tooltip: l,
                "aria-haspopup": "dialog",
                "aria-expanded": n,
                selected: n,
                onClick: i,
                overlay: t
                    ? (0, a.jsx)(d.D, {
                          className: s()(en.bI, { [en.lL]: n }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
