l.r(t), l.d(t, { default: () => ej });
var n = l(477900),
    i = l(582128),
    a = l(866665),
    s = l(939249),
    r = l(152367),
    d = l(661531),
    o = l(707554),
    c = l(297264),
    u = l(922016),
    m = l(305866),
    x = l(228366),
    g = l(964486),
    f = l(948230),
    j = l(408278),
    h = l(663341),
    p = l(980707),
    v = l(477782),
    N = l(17928),
    b = l(834730),
    A = l(289873),
    I = l(821609),
    E = l(364522),
    y = l(145497),
    S = l(976860),
    C = l(967198),
    T = l(972786),
    G = l(321593),
    k = l(503698),
    R = l.n(k),
    P = l(191521),
    D = l(856795),
    _ = l(13699),
    L = l(265498);
function w(e) {
    let { line: t } = e,
        { text: l, phase: i } = (0, D.Q)(t),
        a = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("span", { className: L.Kk, children: (0, n.jsx)(P.A, { size: 14 }) }),
                (0, n.jsx)(b.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "currentColor",
                    className: R()(_.qo, L.Pf, { [_._q]: "exit" === i, [_.GD]: "enter" === i }),
                    children: l,
                }),
            ],
        });
    return (0, n.jsx)("ol", {
        className: R()(L.Hc, _.pj),
        "data-live": "true",
        children: (0, n.jsx)("li", {
            className: R()(_.K1, L.AS),
            "data-live": "true",
            children: (0, n.jsxs)("div", {
                className: R()(_.ep, L.nM),
                children: [
                    (0, n.jsx)("span", { className: R()(_.$m, L.m0), children: a }),
                    (0, n.jsx)("span", { className: R()(_.$m, _.pw, L.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
l(321073);
var O = l(945810),
    M = l(71393),
    q = l(576705),
    V = l(906786);
let H = { building: 0, done: 1, idle: 2 };
var F = l(683180),
    $ = l(783791);
function B(e, t) {
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
function Q(e, t) {
    return e.length === t.length && e.every((e, l) => e === t[l]);
}
var z = l(903586),
    U = l(717447);
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
function Z(e) {
    return (0, N.bG)(
        [$.Ay],
        () => {
            let t = (function (e) {
                let t = $.Ay.getMessages(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let l = t[e];
                    if (l?.role === "assistant") return l;
                }
                return null;
            })(e);
            if (null == t) return K;
            let l = (0, z.lt)(t.steps) ?? t.todos ?? [],
                n = 0,
                i = null,
                a = null;
            for (let e of l)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == i
                      ? (i = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, U.b9)(t.steps), todos: l, completed: n, total: l.length, focus: i ?? a };
        },
        [e],
        X,
    );
}
var Y = l(652215),
    J = l(746080),
    W = l(295813),
    ee = l(375708),
    et = l(654402);
function el(e, t) {
    (0, S.pX)(null == t ? Y.BVt.CHANNEL(e, J.VV.VIBEGRATIONS) : Y.BVt.CHANNEL(e, J.VV.VIBEGRATIONS, t));
}
function en(e) {
    let { projectId: t } = e,
        { completed: l, total: i } = Z(t);
    return 0 === i
        ? null
        : (0, n.jsx)(b.E, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: et.nc,
              "aria-label": ee.intl.formatToPlainString(W.default["7Io+dh"], { completed: l, total: i }),
              children: ee.intl.formatToPlainString(W.default.JmMDaL, { completed: l, total: i }),
          });
}
function ei(e) {
    let { projectId: t } = e,
        { activityLine: l } = Z(t);
    return null == l ? null : (0, n.jsx)("div", { className: et.Bs, children: (0, n.jsx)(w, { line: l }) });
}
function ea(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: i } = e,
        a = "building" === t.activity,
        r = t.guildId ?? l,
        d = t.guildName ?? ee.intl.string(W.default["qqH+iN"]),
        o =
            null == t.guildName
                ? ee.intl.formatToPlainString(W.default.aj4bR0, { name: t.name })
                : ee.intl.formatToPlainString(W.default["+Lq5Ha"], { name: t.name, server: t.guildName });
    return (0, n.jsxs)("li", {
        className: et.dc,
        children: [
            (0, n.jsx)(G.Ay, { projectId: t.projectId }),
            (0, n.jsxs)(s.D, {
                className: et.nM,
                "aria-label": o,
                "aria-disabled": null == r,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != r && (el(r, t.projectId), i());
                },
                children: [
                    null == t.guild
                        ? (0, n.jsx)("div", { className: et.Pz, "aria-hidden": !0 })
                        : (0, n.jsx)(y.Ay, { guild: t.guild, iconSize: 32, className: et.$f }),
                    (0, n.jsxs)("div", {
                        className: et.fw,
                        children: [
                            (0, n.jsx)(b.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                className: et.j1,
                                children: t.name,
                            }),
                            (0, n.jsx)(b.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: et.L5,
                                children: d,
                            }),
                            a && (0, n.jsx)(ei, { projectId: t.projectId }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: et.en, children: a && (0, n.jsx)(en, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { id: t, heading: l, entries: i, fallbackGuildId: a, onNavigate: s } = e;
    if (0 === i.length) return null;
    let r = `vibegrations-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: et.SF, children: l }),
            (0, n.jsx)("ul", {
                className: et.p_,
                "aria-labelledby": r,
                children: i.map((e) => (0, n.jsx)(ea, { entry: e, fallbackGuildId: a, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function er(e) {
    let { guilds: t, onNavigate: l } = e;
    return 0 === t.length
        ? (0, n.jsxs)("div", {
              className: et.wk,
              children: [
                  (0, n.jsx)(b.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: ee.intl.string(W.default.qSQH7H),
                  }),
                  (0, n.jsx)(b.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: ee.intl.string(W.default.I92Gjf),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: et.p$,
              children: [
                  (0, n.jsx)(b.E, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: ee.intl.string(W.default.qSQH7H),
                  }),
                  (0, n.jsx)(b.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: ee.intl.formatToPlainString(W.default["8NmOZ5"], { count: t.length }),
                  }),
                  (0, n.jsx)("ul", {
                      className: et.gc,
                      children: t.map((e) =>
                          (0, n.jsx)(
                              "li",
                              {
                                  children: (0, n.jsxs)(s.D, {
                                      className: et.b6,
                                      "aria-label": e.name,
                                      onClick: () => {
                                          el(e.id), l();
                                      },
                                      children: [
                                          (0, n.jsx)(y.Ay, { guild: e, iconSize: 32, className: et.$f }),
                                          (0, n.jsx)(b.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              className: et.qL,
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
function ed(e) {
    let { eligibleGuilds: t, onNavigate: l } = e,
        a = (function (e) {
            let [t, l] = i.useState(0),
                { entries: n, nextExpiry: a } = (0, N.bG)(
                    [T.A, $.Ay, M.A, O.Bt],
                    () =>
                        (function (e) {
                            let t = Date.now(),
                                l = new Map();
                            function n(t) {
                                let n = l.get(t);
                                if (null != n) return n;
                                let i = (0, V.ix)({ guildId: t, location: e });
                                return l.set(t, i), i;
                            }
                            let i = new Set(),
                                a = [],
                                s = null;
                            function r(e) {
                                if (i.has(e.id)) return;
                                let l = e.guild_id ?? e.preview_guild_id ?? null;
                                if (null != l && !n(l)) return;
                                i.add(e.id);
                                let r = $.Ay.isThinking(e.id),
                                    d = $.Ay.getFinishedAt(e.id),
                                    o = (function (e) {
                                        let { thinking: t, finishedAt: l, now: n } = e;
                                        return t ? "building" : null != l && n - l < 6e4 ? "done" : "idle";
                                    })({ thinking: r, finishedAt: d, now: t });
                                if ("done" === o && null != d) {
                                    let e = d + 6e4;
                                    s = null == s ? e : Math.min(s, e);
                                }
                                let c = (null == l ? null : M.A.getGuild(l)) ?? null;
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
                            for (let e of T.A.getOwnedProjects()) r(e);
                            for (let e of Object.values(M.A.getGuilds()))
                                if (T.A.hasFetchedGuildProjects(e.id) && n(e.id))
                                    for (let t of T.A.getSharedProjects(e.id)) r(t);
                            return {
                                entries: [...a].sort((e, t) => {
                                    let l = H[e.activity] - H[t.activity];
                                    if (0 !== l) return l;
                                    if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
                                    let n = e.name.localeCompare(t.name);
                                    return 0 !== n ? n : e.projectId.localeCompare(t.projectId);
                                }),
                                nextExpiry: s,
                            };
                        })(e),
                    [e, t],
                    B,
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
        s = (0, N.bG)([T.A], () => T.A.getProjectsFetchState()),
        r = (0, N.bG)([C.A], () => C.A.getGuildId()),
        d = t.find((e) => e.id === r)?.id ?? t[0]?.id ?? null,
        o = a.filter((e) => "idle" !== e.activity),
        c = a.filter((e) => "idle" === e.activity);
    return 0 === a.length
        ? null == s || "loading" === s.type
            ? (0, n.jsxs)("div", {
                  className: et.wk,
                  children: [
                      (0, n.jsx)(A.y, {}),
                      (0, n.jsx)(b.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: ee.intl.string(W.default["/aUeR9"]),
                      }),
                  ],
              })
            : "error" === s.type
              ? (0, n.jsxs)("div", {
                    className: et.wk,
                    children: [
                        (0, n.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ee.intl.string(W.default["IN/HRP"]),
                        }),
                        (0, n.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ee.intl.string(W.default["42EdIV"]),
                            onClick: () => (0, f.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(er, { guilds: t, onNavigate: l })
        : (0, n.jsxs)(E.Ip, {
              fade: !0,
              className: et.XG,
              children: [
                  (0, n.jsx)(es, {
                      id: "active",
                      heading: ee.intl.string(W.default["1SDxuI"]),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
                  (0, n.jsx)(es, {
                      id: "idle",
                      heading: ee.intl.string(W.default.r9EdXu),
                      entries: c,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
              ],
          });
}
var eo = l(789752);
function ec(e) {
    let { guilds: t, onNavigate: l } = e,
        s = i.useRef(null),
        r = ee.intl.string(W.default.qbAREO);
    return (0, n.jsx)(u.Y, {
        targetElementRef: s,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(eu, { guilds: t, onNavigate: l, onClose: i });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: s,
                className: eo.h,
                children: (0, n.jsx)(a.m, {
                    position: "bottom",
                    text: r,
                    asContainer: !0,
                    children: (0, n.jsx)(j.K, {
                        "aria-label": r,
                        icon: h.PlusLargeIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: t,
                    }),
                }),
            });
        },
    });
}
function eu(e) {
    let { guilds: t, onNavigate: l, onClose: i } = e,
        a = ee.intl.string(W.default.qbAREO);
    return (0, n.jsx)(p.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-create",
        "aria-label": a,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(v.rX, {
            label: a,
            children:
                0 === t.length
                    ? (0, n.jsx)(v.Dr, {
                          id: "vibegrations-create-empty",
                          disabled: !0,
                          label: ee.intl.string(W.default["g/BU5S"]),
                      })
                    : t.map((e) =>
                          (0, n.jsx)(
                              v.Dr,
                              {
                                  id: `vibegrations-create-${e.id}`,
                                  label: e.name,
                                  action: () => {
                                      el(e.id), l();
                                  },
                              },
                              e.id,
                          ),
                      ),
        }),
    });
}
var em = l(437170);
function ex(e) {
    var t;
    let { onNavigate: l } = e,
        i = ee.intl.string(W.default.ZnvpQR),
        a =
            ((t = "VibegrationsPopout"),
            (0, N.bG)(
                [M.A, O.Bt, q.A],
                () =>
                    Object.values(M.A.getGuilds())
                        .filter((e) => (0, F.pG)(e, t))
                        .sort((e, t) => e.name.localeCompare(t.name)),
                [t],
                Q,
            ));
    return (0, n.jsxs)("div", {
        className: em.kL,
        children: [
            (0, n.jsx)("div", { className: em._Q, children: (0, n.jsx)("span", { className: em.Tp }) }),
            (0, n.jsx)("div", {
                className: em.Qs,
                children: (0, n.jsx)(o.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: em.wx,
                        children: [
                            (0, n.jsx)(c.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: em.DD,
                                children: i,
                            }),
                            (0, n.jsx)("div", {
                                className: em.$s,
                                children: (0, n.jsx)(ec, { guilds: a, onNavigate: l }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(ed, { eligibleGuilds: a, onNavigate: l }),
                }),
            }),
        ],
    });
}
function eg(e) {
    let { children: t, targetElementRef: l } = e,
        [a, s] = i.useState(!1),
        r = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => {
            s((e) => (e || (0, f.hF)(), !e));
        }, []);
    return (
        (0, g.Ay)(
            () => (x.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => x.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, n.jsx)(u.Y, {
            targetElementRef: l,
            shouldShow: a,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: u.Y.Animation.TRANSLATE,
            animationPosition: "bottom",
            onRequestClose: r,
            renderPopout: () =>
                (0, n.jsx)(m.l, {
                    "aria-label": ee.intl.string(W.default.ZnvpQR),
                    children: (0, n.jsx)(ex, { onNavigate: r }),
                }),
            children: (e, l) => {
                let { isShown: n } = l;
                return t(d, n, e);
            },
        })
    );
}
var ef = l(483124);
function ej() {
    let e = i.useRef(null),
        [t, l] = i.useState(!1),
        o = ee.intl.string(W.default.ZnvpQR);
    return (0, n.jsx)(eg, {
        targetElementRef: e,
        children: (i, c, u) =>
            (0, n.jsx)(a.m, {
                asContainer: !0,
                shouldShow: !c,
                text: o,
                children: (0, n.jsx)(s.D, {
                    innerRef: e,
                    className: ef.O,
                    "aria-label": o,
                    "aria-haspopup": "dialog",
                    ...u,
                    onMouseEnter: () => {
                        l(!0);
                    },
                    onMouseLeave: () => {
                        l(!1);
                    },
                    onClick: () => {
                        i(), u?.onClick?.();
                    },
                    children: (0, n.jsx)(r.D, {
                        className: ef.K,
                        color: t || c ? d.A.colors.ICON_STRONG : d.A.colors.ICON_MUTED,
                        size: "sm",
                    }),
                }),
            }),
    });
}
