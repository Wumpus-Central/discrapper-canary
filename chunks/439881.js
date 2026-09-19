(l.r(t), l.d(t, { default: () => eu }));
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
    N = l(948230),
    v = l(408278),
    b = l(663341),
    I = l(980707),
    E = l(477782),
    y = l(834730),
    S = l(323384),
    A = l(289873),
    k = l(821609),
    C = l(364522),
    R = l(627363),
    L = l(145497),
    _ = l(976860),
    D = l(967198),
    G = l(486020),
    P = l(972786),
    T = l(321593),
    O = l(856795),
    w = l(13699),
    V = l(265498);
function q(e) {
    let { line: t } = e,
        { text: l, phase: n } = (0, O.Q)(t),
        a = (0, i.jsx)(y.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()(w.qo, V.Pf, { [w._q]: "exit" === n, [w.GD]: "enter" === n }),
            children: l,
        });
    return (0, i.jsx)("ol", {
        className: s()(V.Hc, w.pj),
        "data-live": "true",
        children: (0, i.jsx)("li", {
            className: s()(w.K1, V.AS),
            "data-live": "true",
            children: (0, i.jsxs)("div", {
                className: s()(w.ep, V.nM),
                children: [
                    (0, i.jsx)("span", { className: s()(w.$m, V.m0), children: a }),
                    (0, i.jsx)("span", { className: s()(w.$m, w.pw, V.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
var H = l(536820),
    M = l(903586),
    z = l(717447);
let Q = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function $(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function F(e) {
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
            if (null == t) return Q;
            let l = (0, M.lt)(t.steps) ?? t.todos ?? [],
                i = 0,
                n = null,
                a = null;
            for (let e of l)
                "completed" === e.status
                    ? i++
                    : "in_progress" === e.status && null == n
                      ? (n = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, z.b)(t.steps), todos: l, completed: i, total: l.length, focus: n ?? a };
        },
        [e],
        $,
    );
}
var B = l(652215),
    U = l(746080),
    Y = l(50617),
    Z = l(375708),
    K = l(654402);
function X(e, t) {
    (0, _.pX)(null == t ? B.BVt.CHANNEL(e, U.VV.VIBEGRATIONS) : B.BVt.CHANNEL(e, U.VV.VIBEGRATIONS, t));
}
function W(e) {
    let { projectId: t } = e,
        { completed: l, total: n } = F(t);
    return 0 === n
        ? null
        : (0, i.jsx)(y.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: K.IW,
              "aria-label": Z.intl.formatToPlainString(Y.default["7Io+dh"], { completed: l, total: n }),
              children: Z.intl.formatToPlainString(Y.default.JmMDaL, { completed: l, total: n }),
          });
}
function J(e) {
    let { projectId: t } = e,
        { activityLine: l } = F(t);
    return null == l ? null : (0, i.jsx)("div", { className: K.Bs, children: (0, i.jsx)(q, { line: l }) });
}
function ee(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: n } = e,
        a = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.project.preview_application_id ?? t.project.application_id,
        { data: c } = (0, R.YY)(r),
        d = c?.icon == null ? null : G.Ay.getApplicationIconURL({ id: r, icon: c.icon, size: 44 }),
        u = t.guildName ?? Z.intl.string(Y.default["qqH+iN"]),
        m =
            null == t.guildName
                ? Z.intl.formatToPlainString(Y.default.aj4bR0, { name: t.name })
                : Z.intl.formatToPlainString(Y.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, i.jsxs)("li", {
        className: K.dc,
        children: [
            (0, i.jsx)(T.Ay, { projectId: t.projectId }),
            (0, i.jsxs)(o.D, {
                className: K.nM,
                "aria-label": m,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && (X(s, t.projectId), n());
                },
                children: [
                    null == d
                        ? (0, i.jsx)("div", {
                              className: K.Pz,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(S.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: d, className: K.Z2 }),
                    (0, i.jsxs)("div", {
                        className: K.fw,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: K.j1,
                                children: t.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: K.lk,
                                children: [
                                    (0, i.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: K.L5,
                                        children: u,
                                    }),
                                    a
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: K.Yy,
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
                    (0, i.jsx)("div", { className: K.en, children: a && (0, i.jsx)(W, { projectId: t.projectId }) }),
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
            (0, i.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: K.SF, children: l }),
            (0, i.jsx)("ul", {
                className: K.p_,
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
              className: K.wk,
              children: [
                  (0, i.jsx)(y.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: Z.intl.string(Y.default.qSQH7H),
                  }),
                  (0, i.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: Z.intl.string(Y.default.I92Gjf),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: K.p$,
              children: [
                  (0, i.jsx)(y.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: Z.intl.string(Y.default.qSQH7H),
                  }),
                  (0, i.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: Z.intl.formatToPlainString(Y.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, i.jsx)("ul", {
                      className: K.gc,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsxs)(o.D, {
                                      className: K.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          (X(e.id), l());
                                      },
                                      children: [
                                          (0, i.jsx)(L.Ay, { guild: e, iconSize: 32, className: K.$f }),
                                          (0, i.jsx)(y.E, {
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
function ei(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        n = (0, H.T)("VibegrationsProjectList"),
        a = (0, r.bG)([P.Ay], () => P.Ay.getProjectsFetchState()),
        s = (0, r.bG)([D.A], () => D.A.getGuildId()),
        c = t.find((e) => e.id === s)?.id ?? t[0]?.id ?? null,
        o = n.filter((e) => "idle" !== e.activity),
        d = n.filter((e) => "idle" === e.activity);
    return 0 === n.length
        ? null == a || "loading" === a.type
            ? (0, i.jsxs)("div", {
                  className: K.wk,
                  children: [
                      (0, i.jsx)(A.y, {}),
                      (0, i.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: Z.intl.string(Y.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, i.jsxs)("div", {
                    className: K.wk,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Y.default["IN/HRP"]),
                        }),
                        (0, i.jsx)(k.$, {
                            variant: "secondary",
                            size: "sm",
                            text: Z.intl.string(Y.default["42EdIV"]),
                            onClick: () => (0, N.hF)(),
                        }),
                    ],
                })
              : (0, i.jsx)(el, { guilds: t, onNavigate: l })
        : (0, i.jsxs)(C.Ip, {
              fade: !0,
              className: K.XG,
              children: [
                  (0, i.jsx)(et, {
                      id: "active",
                      heading: Z.intl.string(Y.default["1SDxuI"]),
                      entries: o,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
                  (0, i.jsx)(et, {
                      id: "idle",
                      heading: Z.intl.string(Y.default.r9EdXu),
                      entries: d,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
              ],
          });
}
var en = l(789752);
function ea(e) {
    let { guilds: t, onNavigate: l } = e,
        a = n.useRef(null),
        s = Z.intl.string(Y.default.qbAREO);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(es, { guilds: t, onNavigate: l, onClose: n });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)("div", {
                ref: a,
                className: en.h,
                children: (0, i.jsx)(c.m, {
                    position: "bottom",
                    text: s,
                    asContainer: !0,
                    children: (0, i.jsx)(v.K, {
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
function es(e) {
    let { guilds: t, onNavigate: l, onClose: n } = e,
        a = Z.intl.string(Y.default.qbAREO);
    return (0, i.jsx)(I.W, {
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
                          label: Z.intl.string(Y.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, i.jsx)(
                              E.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      (X(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var er = l(437170);
function ec(e) {
    let { onNavigate: t } = e,
        l = Z.intl.string(Y.default.ZnvpQR),
        n = (0, H._)("VibegrationsPopout");
    return (0, i.jsxs)("div", {
        className: er.kL,
        children: [
            (0, i.jsx)("div", { className: er._Q, children: (0, i.jsx)("span", { className: er.Tp }) }),
            (0, i.jsx)("div", {
                className: er.Qs,
                children: (0, i.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, i.jsxs)("header", {
                        className: er.wx,
                        children: [
                            (0, i.jsx)(j.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: er.DD,
                                children: l,
                            }),
                            (0, i.jsx)("div", {
                                className: er.$s,
                                children: (0, i.jsx)(ea, { guilds: n, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(ei, { eligibleGuilds: n, onNavigate: t }),
                }),
            }),
        ],
    });
}
function eo(e) {
    let { children: t, targetElementRef: l } = e,
        [a, s] = n.useState(!1),
        r = n.useCallback(() => s(!1), []),
        c = n.useCallback(() => {
            s((e) => (e || (0, N.hF)(), !e));
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
                    "aria-label": Z.intl.string(Y.default.ZnvpQR),
                    children: (0, i.jsx)(ec, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: i } = l;
                return t(c, i, e);
            },
        })
    );
}
var ed = l(483124);
function eu() {
    let e = n.useRef(null),
        [t, l] = n.useState(!1),
        a = (0, r.bG)([m.Ay], () => m.Ay.isAnyThinking()),
        x = Z.intl.string(Y.default.ZnvpQR);
    return (0, i.jsx)(eo, {
        targetElementRef: e,
        children: (n, r, m) =>
            (0, i.jsx)(c.m, {
                asContainer: !0,
                shouldShow: !r,
                text: x,
                children: (0, i.jsxs)(o.D, {
                    innerRef: e,
                    className: ed.OV,
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
                            className: ed.Kk,
                            color: t || r ? u.A.colors.ICON_STRONG : u.A.colors.ICON_MUTED,
                            size: "sm",
                        }),
                        a
                            ? (0, i.jsx)(d.D, {
                                  className: s()(ed.Kk, ed.bI, { [ed.lL]: r }),
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
