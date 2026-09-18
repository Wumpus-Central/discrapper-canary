(l.r(t), l.d(t, { default: () => ep }));
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    d = l(866665),
    o = l(939249),
    c = l(152367),
    u = l(661531),
    m = l(783791),
    x = l(707554),
    g = l(297264),
    h = l(922016),
    j = l(305866),
    f = l(228366),
    p = l(964486),
    v = l(948230),
    N = l(408278),
    b = l(663341),
    y = l(980707),
    A = l(477782),
    I = l(834730),
    E = l(323384),
    S = l(289873),
    k = l(821609),
    C = l(364522),
    G = l(627363),
    R = l(145497),
    D = l(976860),
    L = l(967198),
    P = l(486020),
    T = l(972786),
    _ = l(321593),
    w = l(856795),
    O = l(13699),
    M = l(265498);
function V(e) {
    let { line: t } = e,
        { text: l, phase: i } = (0, w.Q)(t),
        a = (0, n.jsx)(I.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()(O.qo, M.Pf, { [O._q]: "exit" === i, [O.GD]: "enter" === i }),
            children: l,
        });
    return (0, n.jsx)("ol", {
        className: s()(M.Hc, O.pj),
        "data-live": "true",
        children: (0, n.jsx)("li", {
            className: s()(O.K1, M.AS),
            "data-live": "true",
            children: (0, n.jsxs)("div", {
                className: s()(O.ep, M.nM),
                children: [
                    (0, n.jsx)("span", { className: s()(O.$m, M.m0), children: a }),
                    (0, n.jsx)("span", { className: s()(O.$m, O.pw, M.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
l(321073);
var q = l(945810),
    H = l(71393),
    F = l(576705),
    z = l(906786),
    B = l(637708),
    Q = l(683180);
function $(e, t) {
    return (
        e.nextExpiry === t.nextExpiry &&
        e.entries.length === t.entries.length &&
        e.entries.every((e, l) => {
            let n = t.entries[l];
            return (
                null != n &&
                e.projectId === n.projectId &&
                e.activity === n.activity &&
                e.name === n.name &&
                e.guildId === n.guildId &&
                e.guildName === n.guildName &&
                e.guild === n.guild
            );
        })
    );
}
function U(e, t) {
    return e.length === t.length && e.every((e, l) => e === t[l]);
}
var Y = l(903586),
    Z = l(717447);
let K = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function X(e, t) {
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
            if (null == t) return K;
            let l = (0, Y.lt)(t.steps) ?? t.todos ?? [],
                n = 0,
                i = null,
                a = null;
            for (let e of l)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == i
                      ? (i = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, Z.b)(t.steps), todos: l, completed: n, total: l.length, focus: i ?? a };
        },
        [e],
        X,
    );
}
var J = l(652215),
    ee = l(746080),
    et = l(50617),
    el = l(375708),
    en = l(654402);
function ei(e, t) {
    (0, D.pX)(null == t ? J.BVt.CHANNEL(e, ee.VV.VIBEGRATIONS) : J.BVt.CHANNEL(e, ee.VV.VIBEGRATIONS, t));
}
function ea(e) {
    let { projectId: t } = e,
        { completed: l, total: i } = W(t);
    return 0 === i
        ? null
        : (0, n.jsx)(I.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: en.IW,
              "aria-label": el.intl.formatToPlainString(et.default["7Io+dh"], { completed: l, total: i }),
              children: el.intl.formatToPlainString(et.default.JmMDaL, { completed: l, total: i }),
          });
}
function es(e) {
    let { projectId: t } = e,
        { activityLine: l } = W(t);
    return null == l ? null : (0, n.jsx)("div", { className: en.Bs, children: (0, n.jsx)(V, { line: l }) });
}
function er(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: i } = e,
        a = "building" === t.activity,
        s = t.guildId ?? l,
        r = t.project.preview_application_id ?? t.project.application_id,
        { data: d } = (0, G.YY)(r),
        c = d?.icon == null ? null : P.Ay.getApplicationIconURL({ id: r, icon: d.icon, size: 44 }),
        u = t.guildName ?? el.intl.string(et.default["qqH+iN"]),
        m =
            null == t.guildName
                ? el.intl.formatToPlainString(et.default.aj4bR0, { name: t.name })
                : el.intl.formatToPlainString(et.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, n.jsxs)("li", {
        className: en.dc,
        children: [
            (0, n.jsx)(_.Ay, { projectId: t.projectId }),
            (0, n.jsxs)(o.D, {
                className: en.nM,
                "aria-label": m,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && (ei(s, t.projectId), i());
                },
                children: [
                    null == c
                        ? (0, n.jsx)("div", {
                              className: en.Pz,
                              "aria-hidden": !0,
                              children: (0, n.jsx)(E.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, n.jsx)("img", { alt: "", src: c, className: en.Z2 }),
                    (0, n.jsxs)("div", {
                        className: en.fw,
                        children: [
                            (0, n.jsx)(I.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: en.j1,
                                children: t.name,
                            }),
                            (0, n.jsxs)("div", {
                                className: en.lk,
                                children: [
                                    (0, n.jsx)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: en.L5,
                                        children: u,
                                    }),
                                    a
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: en.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(es, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: en.en, children: a && (0, n.jsx)(ea, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { id: t, heading: l, entries: i, fallbackGuildId: a, onNavigate: s } = e;
    if (0 === i.length) return null;
    let r = `vibegrations-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(g.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: en.SF, children: l }),
            (0, n.jsx)("ul", {
                className: en.p_,
                "aria-labelledby": r,
                children: i.map((e) => (0, n.jsx)(er, { entry: e, fallbackGuildId: a, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function eo(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, n.jsxs)("div", {
              className: en.wk,
              children: [
                  (0, n.jsx)(I.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: el.intl.string(et.default.qSQH7H),
                  }),
                  (0, n.jsx)(I.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: el.intl.string(et.default.I92Gjf),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: en.p$,
              children: [
                  (0, n.jsx)(I.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: el.intl.string(et.default.qSQH7H),
                  }),
                  (0, n.jsx)(I.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: el.intl.formatToPlainString(et.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, n.jsx)("ul", {
                      className: en.gc,
                      children: t.map((e) =>
                          (0, n.jsx)(
                              "li",
                              {
                                  children: (0, n.jsxs)(o.D, {
                                      className: en.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          (ei(e.id), l());
                                      },
                                      children: [
                                          (0, n.jsx)(R.Ay, { guild: e, iconSize: 32, className: en.$f }),
                                          (0, n.jsx)(I.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: en.qL,
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
function ec(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        a = (function (e) {
            let [t, l] = i.useState(0),
                { entries: n, nextExpiry: a } = (0, r.bG)(
                    [T.Ay, m.Ay, H.A, q.Bt],
                    () =>
                        (function (e) {
                            let t = Date.now(),
                                l = new Map();
                            function n(t) {
                                let n = l.get(t);
                                if (null != n) return n;
                                let i = (0, z.ix)({ guildId: t, location: e });
                                return (l.set(t, i), i);
                            }
                            let i = new Set(),
                                a = [],
                                s = null;
                            function r(e) {
                                if (i.has(e.id)) return;
                                let l = (0, B.HC)(e);
                                if (null != l && !n(l)) return;
                                i.add(e.id);
                                let r = m.Ay.isThinking(e.id),
                                    d = m.Ay.getFinishedAt(e.id),
                                    o = (0, B.rs)({ thinking: r, finishedAt: d, now: t });
                                if ("done" === o && null != d) {
                                    let e = d + 6e4;
                                    s = null == s ? e : Math.min(s, e);
                                }
                                let c = (null == l ? null : H.A.getGuild(l)) ?? null;
                                a.push({
                                    project: e,
                                    projectId: e.id,
                                    name: e.name,
                                    guildId: l,
                                    guild: c,
                                    guildName: c?.name ?? null,
                                    activity: o,
                                    sortTime: (function (e, t) {
                                        if (null != t) return t;
                                        if (null == e.updated_at) return 0;
                                        let l = Date.parse(e.updated_at);
                                        return Number.isNaN(l) ? 0 : l;
                                    })(e, d),
                                });
                            }
                            for (let e of T.Ay.getOwnedProjects()) r(e);
                            for (let e of Object.values(H.A.getGuilds()))
                                if (T.Ay.hasFetchedGuildProjects(e.id) && n(e.id))
                                    for (let t of T.Ay.getSharedProjects(e.id)) r(t);
                            return { entries: (0, B.io)(a), nextExpiry: s };
                        })(e),
                    [e, t],
                    $,
                );
            return (
                i.useEffect(() => {
                    if (null == a) return;
                    let e = setTimeout(() => l((e) => e + 1), Math.max(0, a - Date.now()));
                    return () => clearTimeout(e);
                }, [a, l]),
                n
            );
        })("VibegrationsProjectList"),
        s = (0, r.bG)([T.Ay], () => T.Ay.getProjectsFetchState()),
        d = (0, r.bG)([L.A], () => L.A.getGuildId()),
        o = t.find((e) => e.id === d)?.id ?? t[0]?.id ?? null,
        c = a.filter((e) => "idle" !== e.activity),
        u = a.filter((e) => "idle" === e.activity);
    return 0 === a.length
        ? null == s || "loading" === s.type
            ? (0, n.jsxs)("div", {
                  className: en.wk,
                  children: [
                      (0, n.jsx)(S.y, {}),
                      (0, n.jsx)(I.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: el.intl.string(et.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === s.type
              ? (0, n.jsxs)("div", {
                    className: en.wk,
                    children: [
                        (0, n.jsx)(I.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: el.intl.string(et.default["IN/HRP"]),
                        }),
                        (0, n.jsx)(k.$, {
                            variant: "secondary",
                            size: "sm",
                            text: el.intl.string(et.default["42EdIV"]),
                            onClick: () => (0, v.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(eo, { guilds: t, onNavigate: l })
        : (0, n.jsxs)(C.Ip, {
              fade: !0,
              className: en.XG,
              children: [
                  (0, n.jsx)(ed, {
                      id: "active",
                      heading: el.intl.string(et.default["1SDxuI"]),
                      entries: c,
                      fallbackGuildId: o,
                      onNavigate: l,
                  }),
                  (0, n.jsx)(ed, {
                      id: "idle",
                      heading: el.intl.string(et.default.r9EdXu),
                      entries: u,
                      fallbackGuildId: o,
                      onNavigate: l,
                  }),
              ],
          });
}
var eu = l(789752);
function em(e) {
    let { guilds: t, onNavigate: l } = e,
        a = i.useRef(null),
        s = el.intl.string(et.default.qbAREO);
    return (0, n.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(ex, { guilds: t, onNavigate: l, onClose: i });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: a,
                className: eu.h,
                children: (0, n.jsx)(d.m, {
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
function ex(e) {
    let { guilds: t, onNavigate: l, onClose: i } = e,
        a = el.intl.string(et.default.qbAREO);
    return (0, n.jsx)(y.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-create",
        "aria-label": a,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(A.rX, {
            label: a,
            children:
                0 === t.length
                    ? (0, n.jsx)(A.Dr, {
                          id: "vibegrations-create-empty",
                          disabled: !0,
                          label: el.intl.string(et.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, n.jsx)(
                              A.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      (ei(e.id), l());
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var eg = l(437170);
function eh(e) {
    var t;
    let { onNavigate: l } = e,
        i = el.intl.string(et.default.ZnvpQR),
        a =
            ((t = "VibegrationsPopout"),
            (0, r.bG)(
                [H.A, q.Bt, F.A],
                () =>
                    Object.values(H.A.getGuilds())
                        .filter((e) => (0, Q.pG)(e, t))
                        .sort((e, t) => e.name.localeCompare(t.name)),
                [t],
                U,
            ));
    return (0, n.jsxs)("div", {
        className: eg.kL,
        children: [
            (0, n.jsx)("div", { className: eg._Q, children: (0, n.jsx)("span", { className: eg.Tp }) }),
            (0, n.jsx)("div", {
                className: eg.Qs,
                children: (0, n.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: eg.wx,
                        children: [
                            (0, n.jsx)(g.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: eg.DD,
                                children: i,
                            }),
                            (0, n.jsx)("div", {
                                className: eg.$s,
                                children: (0, n.jsx)(em, { guilds: a, onNavigate: l }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(ec, { eligibleGuilds: a, onNavigate: l }),
                }),
            }),
        ],
    });
}
function ej(e) {
    let { children: t, targetElementRef: l } = e,
        [a, s] = i.useState(!1),
        r = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => {
            s((e) => (e || (0, v.hF)(), !e));
        }, []);
    return (
        (0, p.Ay)(
            () => (f.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => f.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, n.jsx)(h.Y, {
            targetElementRef: l,
            shouldShow: a,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: h.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, n.jsx)(j.l, {
                    "aria-label": el.intl.string(et.default.ZnvpQR),
                    children: (0, n.jsx)(eh, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: n } = l;
                return t(d, n, e);
            },
        })
    );
}
var ef = l(483124);
function ep() {
    let e = i.useRef(null),
        [t, l] = i.useState(!1),
        a = (0, r.bG)([m.Ay], () => m.Ay.isAnyThinking()),
        x = el.intl.string(et.default.ZnvpQR);
    return (0, n.jsx)(ej, {
        targetElementRef: e,
        children: (i, r, m) =>
            (0, n.jsx)(d.m, {
                asContainer: !0,
                shouldShow: !r,
                text: x,
                children: (0, n.jsxs)(o.D, {
                    innerRef: e,
                    className: ef.OV,
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
                        (i(), m?.onClick?.());
                    },
                    children: [
                        (0, n.jsx)(c.D, {
                            className: ef.Kk,
                            color: t || r ? u.A.colors.ICON_STRONG : u.A.colors.ICON_MUTED,
                            size: "sm",
                        }),
                        a
                            ? (0, n.jsx)(c.D, {
                                  className: s()(ef.Kk, ef.bI, { [ef.lL]: r }),
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
