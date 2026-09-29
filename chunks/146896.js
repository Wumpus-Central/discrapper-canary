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
    v = l(459514),
    b = l(408278),
    I = l(663341),
    E = l(980707),
    y = l(477782),
    S = l(976860),
    A = l(652215),
    k = l(746080);
function C(e, t) {
    (0, S.pX)(null == t ? A.BVt.CHANNEL(e, k.VV.VIBEGRATIONS) : A.BVt.CHANNEL(e, k.VV.VIBEGRATIONS, t));
}
var R = l(759967),
    L = l(375708),
    _ = l(789752);
function D(e) {
    let { guilds: t, onNavigate: l } = e,
        a = n.useRef(null),
        s = L.intl.string(R.default.qbAREO);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(G, { guilds: t, onNavigate: l, onClose: n });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)("div", {
                ref: a,
                className: _.h,
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
function G(e) {
    let { guilds: t, onNavigate: l, onClose: n } = e,
        a = L.intl.string(R.default.qbAREO);
    return (0, i.jsx)(E.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-create",
        "aria-label": a,
        onClose: n,
        onSelect: n,
        children: (0, i.jsx)(y.rX, {
            label: a,
            children:
                0 === t.length
                    ? (0, i.jsx)(y.Dr, {
                          id: "vibegrations-create-empty",
                          disabled: !0,
                          label: L.intl.string(R.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, i.jsx)(
                              y.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      (C(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var P = l(834730),
    T = l(323384),
    O = l(289873),
    w = l(821609),
    V = l(364522),
    q = l(627363),
    H = l(145497),
    M = l(967198),
    z = l(486020),
    Q = l(972786),
    $ = l(321593),
    F = l(856795),
    B = l(13699),
    U = l(265498);
function Y(e) {
    let { line: t } = e,
        { text: l, phase: n } = (0, F.Q)(t),
        a = (0, i.jsx)(P.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()(B.qo, U.Pf, { [B._q]: "exit" === n, [B.GD]: "enter" === n }),
            children: l,
        });
    return (0, i.jsx)("ol", {
        className: s()(U.Hc, B.pj),
        "data-live": "true",
        children: (0, i.jsx)("li", {
            className: s()(B.K1, U.AS),
            "data-live": "true",
            children: (0, i.jsxs)("div", {
                className: s()(B.ep, U.nM),
                children: [
                    (0, i.jsx)("span", { className: s()(B.$m, U.m0), children: a }),
                    (0, i.jsx)("span", { className: s()(B.$m, B.pw, U.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
var Z = l(903586),
    K = l(717447);
let X = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function W(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function J(e) {
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
            if (null == t) return X;
            let l = (0, Z.lt)(t.steps) ?? t.todos ?? [],
                i = 0,
                n = null,
                a = null;
            for (let e of l)
                "completed" === e.status
                    ? i++
                    : "in_progress" === e.status && null == n
                      ? (n = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, K.b)(t.steps), todos: l, completed: i, total: l.length, focus: n ?? a };
        },
        [e],
        W,
    );
}
var ee = l(654402);
function et(e) {
    let { projectId: t } = e,
        { completed: l, total: n } = J(t);
    return 0 === n
        ? null
        : (0, i.jsx)(P.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: ee.IW,
              "aria-label": L.intl.formatToPlainString(R.default["7Io+dh"], { completed: l, total: n }),
              children: L.intl.formatToPlainString(R.default.JmMDaL, { completed: l, total: n }),
          });
}
function el(e) {
    let { projectId: t } = e,
        { activityLine: l } = J(t);
    return null == l ? null : (0, i.jsx)("div", { className: ee.Bs, children: (0, i.jsx)(Y, { line: l }) });
}
function ei(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: n } = e,
        a = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.project.preview_application_id ?? t.project.application_id,
        { data: c } = (0, q.YY)(r),
        d = c?.icon == null ? null : z.Ay.getApplicationIconURL({ id: r, icon: c.icon, size: 44 }),
        u = t.guildName ?? L.intl.string(R.default["qqH+iN"]),
        m =
            null == t.guildName
                ? L.intl.formatToPlainString(R.default.aj4bR0, { name: t.name })
                : L.intl.formatToPlainString(R.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, i.jsxs)("li", {
        className: ee.dc,
        children: [
            (0, i.jsx)($.Ay, { projectId: t.projectId }),
            (0, i.jsxs)(o.D, {
                className: ee.nM,
                "aria-label": m,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && (C(s, t.projectId), n());
                },
                children: [
                    null == d
                        ? (0, i.jsx)("div", {
                              className: ee.Pz,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(T.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: d, className: ee.Z2 }),
                    (0, i.jsxs)("div", {
                        className: ee.fw,
                        children: [
                            (0, i.jsx)(P.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: ee.j1,
                                children: t.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: ee.lk,
                                children: [
                                    (0, i.jsx)(P.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ee.L5,
                                        children: u,
                                    }),
                                    a
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: ee.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(el, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ee.en, children: a && (0, i.jsx)(et, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { id: t, heading: l, entries: n, fallbackGuildId: a, onNavigate: s } = e;
    if (0 === n.length) return null;
    let r = `vibegrations-section-${t}`;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: ee.SF, children: l }),
            (0, i.jsx)("ul", {
                className: ee.p_,
                "aria-labelledby": r,
                children: n.map((e) => (0, i.jsx)(ei, { entry: e, fallbackGuildId: a, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function ea(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, i.jsxs)("div", {
              className: ee.wk,
              children: [
                  (0, i.jsx)(P.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: L.intl.string(R.default.qSQH7H),
                  }),
                  (0, i.jsx)(P.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: L.intl.string(R.default.I92Gjf),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: ee.p$,
              children: [
                  (0, i.jsx)(P.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: L.intl.string(R.default.qSQH7H),
                  }),
                  (0, i.jsx)(P.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: L.intl.formatToPlainString(R.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, i.jsx)("ul", {
                      className: ee.gc,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsxs)(o.D, {
                                      className: ee.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          (C(e.id), l());
                                      },
                                      children: [
                                          (0, i.jsx)(H.Ay, { guild: e, iconSize: 32, className: ee.$f }),
                                          (0, i.jsx)(P.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: ee.qL,
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
function es(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        n = (0, v.T)("VibegrationsProjectList"),
        a = (0, r.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        s = (0, r.bG)([M.A], () => M.A.getGuildId()),
        c = t.find((e) => e.id === s)?.id ?? t[0]?.id ?? null,
        o = n.filter((e) => "idle" !== e.activity),
        d = n.filter((e) => "idle" === e.activity);
    return 0 === n.length
        ? null == a || "loading" === a.type
            ? (0, i.jsxs)("div", {
                  className: ee.wk,
                  children: [
                      (0, i.jsx)(O.y, {}),
                      (0, i.jsx)(P.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: L.intl.string(R.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, i.jsxs)("div", {
                    className: ee.wk,
                    children: [
                        (0, i.jsx)(P.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: L.intl.string(R.default["IN/HRP"]),
                        }),
                        (0, i.jsx)(w.$, {
                            variant: "secondary",
                            size: "sm",
                            text: L.intl.string(R.default["42EdIV"]),
                            onClick: () => (0, N.hF)(),
                        }),
                    ],
                })
              : (0, i.jsx)(ea, { guilds: t, onNavigate: l })
        : (0, i.jsxs)(V.Ip, {
              fade: !0,
              className: ee.XG,
              children: [
                  (0, i.jsx)(en, {
                      id: "active",
                      heading: L.intl.string(R.default["1SDxuI"]),
                      entries: o,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
                  (0, i.jsx)(en, {
                      id: "idle",
                      heading: L.intl.string(R.default.r9EdXu),
                      entries: d,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
              ],
          });
}
var er = l(437170);
function ec(e) {
    let { onNavigate: t } = e,
        l = L.intl.string(R.default.ZnvpQR),
        n = (0, v._)("VibegrationsPopout");
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
                                children: (0, i.jsx)(D, { guilds: n, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(es, { eligibleGuilds: n, onNavigate: t }),
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
                    "aria-label": L.intl.string(R.default.ZnvpQR),
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
        x = L.intl.string(R.default.ZnvpQR);
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
