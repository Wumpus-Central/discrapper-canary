(l.r(t), l.d(t, { default: () => ec }));
var i = l(477900),
    n = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    c = l(866665),
    o = l(939249),
    d = l(152367),
    u = l(661531),
    m = l(783791),
    x = l(707554),
    j = l(297264),
    h = l(922016),
    g = l(305866),
    f = l(228366),
    p = l(964486),
    v = l(948230),
    N = l(459514),
    b = l(408278),
    I = l(663341),
    y = l(980707),
    E = l(477782),
    S = l(681952),
    k = l(759967),
    A = l(375708),
    C = l(789752);
function R(e) {
    let { guilds: t, onNavigate: l } = e,
        a = n.useRef(null),
        s = A.intl.string(k.default.qbAREO);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(_, { guilds: t, onNavigate: l, onClose: n });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)("div", {
                ref: a,
                className: C.h,
                children: (0, i.jsx)(c.m, {
                    position: "bottom",
                    text: s,
                    asContainer: !0,
                    children: (0, i.jsx)(b.K, {
                        "aria-label": s,
                        icon: I.PlusLargeIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: t,
                    }),
                }),
            });
        },
    });
}
function _(e) {
    let { guilds: t, onNavigate: l, onClose: n } = e,
        a = A.intl.string(k.default.qbAREO);
    return (0, i.jsx)(y.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-create",
        "aria-label": a,
        onClose: n,
        onSelect: n,
        children: (0, i.jsx)(E.rX, {
            label: a,
            children:
                0 === t.length
                    ? (0, i.jsx)(E.Dr, {
                          id: "vibegrations-create-empty",
                          disabled: !0,
                          label: A.intl.string(k.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, i.jsx)(
                              E.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      ((0, S.X)(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var D = l(834730),
    L = l(323384),
    P = l(289873),
    G = l(821609),
    T = l(364522),
    w = l(627363),
    O = l(145497),
    q = l(967198),
    M = l(486020),
    z = l(972786),
    H = l(321593),
    Q = l(856795),
    $ = l(13699),
    F = l(265498);
function U(e) {
    let { line: t } = e,
        { text: l, phase: n } = (0, Q.Q)(t),
        a = (0, i.jsx)(D.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()($.qo, F.Pf, { [$._q]: "exit" === n, [$.GD]: "enter" === n }),
            children: l,
        });
    return (0, i.jsx)("ol", {
        className: s()(F.Hc, $.pj),
        "data-live": "true",
        children: (0, i.jsx)("li", {
            className: s()($.K1, F.AS),
            "data-live": "true",
            children: (0, i.jsxs)("div", {
                className: s()($.ep, F.nM),
                children: [
                    (0, i.jsx)("span", { className: s()($.$m, F.m0), children: a }),
                    (0, i.jsx)("span", { className: s()($.$m, $.pw, F.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
var X = l(903586),
    Y = l(717447);
let Z = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function K(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function V(e) {
    return (0, r.bG)(
        [m.Ay],
        () => {
            let t = (function (e) {
                let t = m.Ay.getMessages(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let l = t[e];
                    if (l?.role === "assistant") return l;
                }
                return null;
            })(e);
            if (null == t) return Z;
            let l = (0, X.lt)(t.steps) ?? t.todos ?? [],
                i = 0,
                n = null,
                a = null;
            for (let e of l)
                "completed" === e.status
                    ? i++
                    : "in_progress" === e.status && null == n
                      ? (n = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, Y.b)(t.steps), todos: l, completed: i, total: l.length, focus: n ?? a };
        },
        [e],
        K,
    );
}
var B = l(654402);
function W(e) {
    let { projectId: t } = e,
        { completed: l, total: n } = V(t);
    return 0 === n
        ? null
        : (0, i.jsx)(D.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: B.IW,
              "aria-label": A.intl.formatToPlainString(k.default["7Io+dh"], { completed: l, total: n }),
              children: A.intl.formatToPlainString(k.default.JmMDaL, { completed: l, total: n }),
          });
}
function J(e) {
    let { projectId: t } = e,
        { activityLine: l } = V(t);
    return null == l ? null : (0, i.jsx)("div", { className: B.Bs, children: (0, i.jsx)(U, { line: l }) });
}
function ee(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: n } = e,
        a = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.project.preview_application_id ?? t.project.application_id,
        { data: c } = (0, w.YY)(r),
        d = c?.icon == null ? null : M.Ay.getApplicationIconURL({ id: r, icon: c.icon, size: 44 }),
        u = t.guildName ?? A.intl.string(k.default["qqH+iN"]),
        m =
            null == t.guildName
                ? A.intl.formatToPlainString(k.default.aj4bR0, { name: t.name })
                : A.intl.formatToPlainString(k.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, i.jsxs)("li", {
        className: B.dc,
        children: [
            (0, i.jsx)(H.Ay, { projectId: t.projectId }),
            (0, i.jsxs)(o.D, {
                className: B.nM,
                "aria-label": m,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && ((0, S.X)(s, t.projectId), n());
                },
                children: [
                    null == d
                        ? (0, i.jsx)("div", {
                              className: B.Pz,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(L.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: d, className: B.Z2 }),
                    (0, i.jsxs)("div", {
                        className: B.fw,
                        children: [
                            (0, i.jsx)(D.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: B.j1,
                                children: t.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: B.lk,
                                children: [
                                    (0, i.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: B.L5,
                                        children: u,
                                    }),
                                    a
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: B.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(J, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: B.en, children: a && (0, i.jsx)(W, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { id: t, heading: l, entries: n, fallbackGuildId: a, onNavigate: s } = e;
    if (0 === n.length) return null;
    let r = `vibegrations-section-${t}`;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: B.SF, children: l }),
            (0, i.jsx)("ul", {
                className: B.p_,
                "aria-labelledby": r,
                children: n.map((e) => (0, i.jsx)(ee, { entry: e, fallbackGuildId: a, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function el(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, i.jsxs)("div", {
              className: B.wk,
              children: [
                  (0, i.jsx)(D.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: A.intl.string(k.default.qSQH7H),
                  }),
                  (0, i.jsx)(D.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: A.intl.string(k.default.I92Gjf),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: B.p$,
              children: [
                  (0, i.jsx)(D.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: A.intl.string(k.default.qSQH7H),
                  }),
                  (0, i.jsx)(D.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: A.intl.formatToPlainString(k.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, i.jsx)("ul", {
                      className: B.gc,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsxs)(o.D, {
                                      className: B.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          ((0, S.X)(e.id), l());
                                      },
                                      children: [
                                          (0, i.jsx)(O.Ay, { guild: e, iconSize: 32, className: B.$f }),
                                          (0, i.jsx)(D.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: B.qL,
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
function ei(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        n = (0, N.T)("VibegrationsProjectList"),
        a = (0, r.bG)([z.Ay], () => z.Ay.getProjectsFetchState()),
        s = (0, r.bG)([q.A], () => q.A.getGuildId()),
        c = t.find((e) => e.id === s)?.id ?? t[0]?.id ?? null,
        o = n.filter((e) => "idle" !== e.activity),
        d = n.filter((e) => "idle" === e.activity);
    return 0 === n.length
        ? null == a || "loading" === a.type
            ? (0, i.jsxs)("div", {
                  className: B.wk,
                  children: [
                      (0, i.jsx)(P.y, {}),
                      (0, i.jsx)(D.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: A.intl.string(k.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, i.jsxs)("div", {
                    className: B.wk,
                    children: [
                        (0, i.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(k.default["IN/HRP"]),
                        }),
                        (0, i.jsx)(G.$, {
                            variant: "secondary",
                            size: "sm",
                            text: A.intl.string(k.default["42EdIV"]),
                            onClick: () => (0, v.hF)(),
                        }),
                    ],
                })
              : (0, i.jsx)(el, { guilds: t, onNavigate: l })
        : (0, i.jsxs)(T.Ip, {
              fade: !0,
              className: B.XG,
              children: [
                  (0, i.jsx)(et, {
                      id: "active",
                      heading: A.intl.string(k.default["1SDxuI"]),
                      entries: o,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
                  (0, i.jsx)(et, {
                      id: "idle",
                      heading: A.intl.string(k.default.r9EdXu),
                      entries: d,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
              ],
          });
}
var en = l(437170);
function ea(e) {
    let { onNavigate: t } = e,
        l = A.intl.string(k.default.ZnvpQR),
        n = (0, N._)("VibegrationsPopout");
    return (0, i.jsxs)("div", {
        className: en.kL,
        children: [
            (0, i.jsx)("div", { className: en._Q, children: (0, i.jsx)("span", { className: en.Tp }) }),
            (0, i.jsx)("div", {
                className: en.Qs,
                children: (0, i.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, i.jsxs)("header", {
                        className: en.wx,
                        children: [
                            (0, i.jsx)(j.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: en.DD,
                                children: l,
                            }),
                            (0, i.jsx)("div", {
                                className: en.$s,
                                children: (0, i.jsx)(R, { guilds: n, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(ei, { eligibleGuilds: n, onNavigate: t }),
                }),
            }),
        ],
    });
}
function es(e) {
    let { children: t, targetElementRef: l } = e,
        [a, s] = n.useState(!1),
        r = n.useCallback(() => s(!1), []),
        c = n.useCallback(() => {
            s((e) => (e || (0, v.hF)(), !e));
        }, []);
    return (
        (0, p.Ay)(
            () => (f.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => f.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, i.jsx)(h.Y, {
            targetElementRef: l,
            shouldShow: a,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: h.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, i.jsx)(g.l, {
                    "aria-label": A.intl.string(k.default.ZnvpQR),
                    children: (0, i.jsx)(ea, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: i } = l;
                return t(c, i, e);
            },
        })
    );
}
var er = l(483124);
function ec() {
    let e = n.useRef(null),
        [t, l] = n.useState(!1),
        a = (0, r.bG)([m.Ay], () => m.Ay.isAnyThinking()),
        x = A.intl.string(k.default.ZnvpQR);
    return (0, i.jsx)(es, {
        targetElementRef: e,
        children: (n, r, m) =>
            (0, i.jsx)(c.m, {
                asContainer: !0,
                shouldShow: !r,
                text: x,
                children: (0, i.jsxs)(o.D, {
                    innerRef: e,
                    className: er.OV,
                    "aria-label": x,
                    "aria-haspopup": "dialog",
                    ...m,
                    onMouseEnter: () => {
                        l(!0);
                    },
                    onMouseLeave: () => {
                        l(!1);
                    },
                    onClick: () => {
                        (n(), m?.onClick?.());
                    },
                    children: [
                        (0, i.jsx)(d.D, {
                            className: er.Kk,
                            color: t || r ? u.A.colors.ICON_STRONG : u.A.colors.ICON_MUTED,
                            size: "sm",
                        }),
                        a
                            ? (0, i.jsx)(d.D, {
                                  className: s()(er.Kk, er.bI, { [er.lL]: r }),
                                  color: "currentColor",
                                  size: "sm",
                                  "aria-hidden": !0,
                              })
                            : null,
                    ],
                }),
            }),
    });
}
