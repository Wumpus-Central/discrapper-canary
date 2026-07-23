t.d(l, { default: () => eM });
var n = t(627968),
    a = t(64700),
    i = t(17928),
    s = t(661531),
    r = t(521489),
    d = t(297264),
    c = t(834730),
    o = t(821609),
    u = t(289873),
    m = t(430392),
    x = t(517461),
    g = t(948230),
    j = t(972786),
    h = t(292666),
    f = t(818085),
    v = t(375708),
    p = t(816442),
    b = t(692228);
function N(e) {
    let { onCreate: l, onCancel: t } = e,
        [i, s] = a.useState(""),
        [r, d] = a.useState(!1),
        [u, m] = a.useState(null),
        x = i.trim(),
        g = a.useCallback(async () => {
            if ("" === x) return void m(v.intl.string(f.default.I2hgEB));
            d(!0), m(null);
            try {
                await l(x);
            } catch (e) {
                d(!1), m(e instanceof Error ? e.message : v.intl.string(f.default.KKkp5Y));
            }
        }, [x, l]);
    return (0, n.jsxs)("div", {
        className: b.DG,
        children: [
            (0, n.jsxs)("div", {
                className: p.F,
                children: [
                    (0, n.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: v.intl.string(f.default.T8bq8a),
                    }),
                    (0, n.jsx)(h.k, {
                        autoFocus: !0,
                        value: i,
                        onChange: s,
                        placeholder: v.intl.string(f.default.onCPw6),
                        "aria-label": v.intl.string(f.default.u9UpIx),
                    }),
                ],
            }),
            null == u
                ? null
                : (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: u }),
            (0, n.jsxs)("div", {
                className: b.Ej,
                children: [
                    null == t
                        ? null
                        : (0, n.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: t,
                              text: v.intl.string(v.t["ETE/oC"]),
                              disabled: r,
                          }),
                    (0, n.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: g,
                        loading: r,
                        text: v.intl.string(v.t.CumH4u),
                    }),
                ],
            }),
        ],
    });
}
var C = t(503698),
    A = t.n(C),
    y = t(866665),
    S = t(625903),
    E = t(548118),
    k = t(71393),
    I = t(896886);
function T(e) {
    let { selectedProjectId: l, onSelectProject: t, onOpenSettings: a, settingsProjectId: s, onCreateProject: r } = e,
        u = (0, i.yK)([j.A], () => j.A.getAllProjects()),
        m = (0, i.bG)([k.A], () => k.A.getGuilds());
    return (0, n.jsxs)("aside", {
        "data-vibegrations-sidebar": !0,
        className: I.pz,
        children: [
            (0, n.jsxs)("header", {
                className: I.aN,
                children: [
                    (0, n.jsx)(d.D, {
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: v.intl.string(f.default.psMGvL),
                    }),
                    (0, n.jsx)(o.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: r,
                        text: v.intl.string(f.default["KD/8I2"]),
                    }),
                ],
            }),
            0 === u.length
                ? null
                : (0, n.jsx)("ul", {
                      className: I.th,
                      children: u.map((e) => {
                          let i = e.id === l,
                              r = null == e.guild_id ? void 0 : m[e.guild_id];
                          return (0, n.jsxs)(
                              "li",
                              {
                                  className: A()(I.I1, { [I.t8]: i }),
                                  children: [
                                      (0, n.jsx)("button", {
                                          type: "button",
                                          onClick: () => t(e.id),
                                          "aria-current": i,
                                          className: I.UT,
                                          children: (0, n.jsxs)("span", {
                                              className: I.JZ,
                                              children: [
                                                  (0, n.jsx)(c.E, {
                                                      variant: "text-sm/medium",
                                                      color: i ? "text-default" : "text-muted",
                                                      children: e.name,
                                                  }),
                                                  null == r
                                                      ? null
                                                      : (0, n.jsxs)("span", {
                                                            className: I.JT,
                                                            children: [
                                                                (0, n.jsx)(E.Ay, {
                                                                    guild: r,
                                                                    size: E.Ay.Sizes.SMOL,
                                                                    "aria-hidden": !0,
                                                                    tabIndex: -1,
                                                                }),
                                                                (0, n.jsx)(c.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-muted",
                                                                    className: I.K6,
                                                                    children: r.name,
                                                                }),
                                                            ],
                                                        }),
                                              ],
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: A()(I.h3, { [I.Tq]: s === e.id }),
                                          children: (0, n.jsx)(y.m, {
                                              text: v.intl.string(v.t["3D5yo/"]),
                                              ariaHidden: !0,
                                              children: (0, n.jsx)("button", {
                                                  type: "button",
                                                  onClick: () => a(e.id),
                                                  "aria-label": v.intl.formatToPlainString(f.default.V8EI91, {
                                                      name: e.name,
                                                  }),
                                                  "aria-pressed": s === e.id,
                                                  className: I.Qg,
                                                  children: (0, n.jsx)(S.Z, { size: "xs", color: "currentColor" }),
                                              }),
                                          }),
                                      }),
                                  ],
                              },
                              e.id,
                          );
                      }),
                  }),
        ],
    });
}
var w = t(656485),
    G = t(689175),
    D = t(33770);
function L(e) {
    let { projectId: l } = e,
        t = (0, i.bG)([j.A], () => j.A.getLogs(l), [l]),
        s = a.useRef(null),
        r = a.useRef(!0);
    a.useEffect(() => {
        r.current && s.current?.scrollToBottom();
    }, [t]);
    let d = a.useCallback(() => {
        let e = s.current;
        null != e && (r.current = 32 > e.getDistanceFromBottom());
    }, []);
    return (0, n.jsx)(G.Ch, {
        ref: s,
        onScroll: d,
        overflow: "auto",
        "data-vibegrations-log-panel": !0,
        className: A()(D.sx, D.jJ),
        children:
            0 === t.length
                ? (0, n.jsxs)(c.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: [
                          v.intl.string(f.default.oNz6CB),
                          " ",
                          (0, n.jsx)("code", { className: D.eV, children: "console.log" }),
                          " ",
                          v.intl.string(f.default.QSyAeh),
                      ],
                  })
                : t.map((e, l) => {
                      var t;
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: D.vK,
                              children: [
                                  (0, n.jsx)(c.E, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      className: D.Mt,
                                      selectable: !0,
                                      children: (function (e) {
                                          let l = new Date(e);
                                          if (Number.isNaN(l.getTime())) return e;
                                          let t = String(l.getHours()).padStart(2, "0"),
                                              n = String(l.getMinutes()).padStart(2, "0"),
                                              a = String(l.getSeconds()).padStart(2, "0");
                                          return `${t}:${n}:${a}`;
                                      })(e.ts),
                                  }),
                                  (0, n.jsx)(c.E, {
                                      tag: "span",
                                      variant: "text-xxs/semibold",
                                      color:
                                          "error" === (t = e.level)
                                              ? "text-feedback-critical"
                                              : "warn" === t
                                                ? "text-feedback-warning"
                                                : "text-muted",
                                      className: D.dm,
                                      children: e.level,
                                  }),
                                  (0, n.jsx)(c.E, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "error" === e.level ? "text-feedback-critical" : "text-default",
                                      selectable: !0,
                                      children: e.message,
                                  }),
                              ],
                          },
                          l,
                      );
                  }),
    });
}
var P = t(868285),
    _ = t(36525),
    B = t(314116),
    F = t(871682),
    M = t(485845),
    z = t(136722),
    K = t(783878),
    O = t(738188),
    Z = t(27232),
    Y = t(505930),
    R = t(663341),
    U = t(803306),
    H = t(627363),
    q = t(20015),
    $ = t(47167),
    J = t(321191),
    V = t(903209),
    Q = t(808728),
    X = t(317525),
    W = t(576705),
    ee = t(994500),
    el = t(287809),
    et = t(373606),
    en = t(179771),
    ea = t(887909),
    ei = t(711014),
    es = t(652215),
    er = t(805298);
let ed = [en.F.BOT, en.F.APPLICATIONS_COMMANDS];
function ec(e) {
    let { applicationId: l, excludeGuildIds: t, onInstalled: s, onCancel: r, isPreview: d = !1 } = e,
        c = d ? v.intl.string(f.default.fpqCQD) : v.intl.string(f.default["c2Hoc+"]),
        [u, m] = a.useState(null),
        { data: x } = (0, H.YY)(l),
        g = x?.integrationTypesConfig?.[M.b.GUILD_INSTALL]?.oauth2InstallParams ?? x?.installParams,
        j = (0, i.cf)(
            [k.A, ei.Ay, W.A],
            () =>
                ei.Ay.getFlattenedGuildIds()
                    .map((e) => k.A.getGuild(e))
                    .filter((e) => null != e && !t.has(e.id) && W.A.can(es.xBc.MANAGE_GUILD, e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [t],
        ),
        h = a.useCallback(() => {
            null != u &&
                ((0, ea.openOAuth2Modal)(
                    {
                        clientId: l,
                        guildId: u,
                        disableGuildSelect: !0,
                        integrationType: M.b.GUILD_INSTALL,
                        scopes: g?.scopes ?? ed,
                        permissions: g?.permissions != null ? z.iu(g.permissions) : void 0,
                    },
                    () => s(u),
                ),
                r());
        }, [l, u, g, s, r]);
    return (0, n.jsxs)("div", {
        className: b.DG,
        children: [
            (0, n.jsx)("div", {
                className: er.Jg,
                children: (0, n.jsx)(K.Z, {
                    label: d ? "Preview Server" : "Server",
                    helperText: `${d ? "Preview servers" : "Servers"} where you can add apps (requires Manage Server).`,
                    selectionMode: "single",
                    placeholder: v.intl.formatToPlainString(f.default.ZZBGJk, { serverNoun: c }),
                    options: j,
                    value: u ?? void 0,
                    onSelectionChange: m,
                }),
            }),
            (0, n.jsxs)("div", {
                className: b.Ej,
                children: [
                    (0, n.jsx)(o.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: r,
                        text: v.intl.string(v.t["ETE/oC"]),
                    }),
                    (0, n.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: h,
                        disabled: null == u,
                        text: d ? v.intl.string(f.default.ZYlNAm) : v.intl.string(f.default.tPH0L7),
                    }),
                ],
            }),
        ],
    });
}
var eo = t(435183);
async function eu(e, l, t) {
    for (let { channel: n } of Q.Ay.getChannels(e)[Q.I6].filter((e) => {
        let { channel: l } = e;
        return l.type === es.rbe.GUILD_TEXT;
    }))
        (0, et.B9)(n.topic) === t && n.id !== l && (await (0, eo.RT)(n.id, { topic: "" }));
    null != l && (await (0, eo.RT)(l, { topic: (0, et.$A)(t) }));
}
var em = t(919251);
function ex(e) {
    let { guild: l, appId: t } = e,
        s = (0, i.bG)([W.A], () => W.A.can(es.xBc.MANAGE_CHANNELS, l), [l]),
        r = (0, i.cf)(
            [Q.Ay, el.default, ee.A],
            () =>
                Q.Ay.getChannels(l.id)
                    [Q.I6].filter((e) => {
                        let { channel: l } = e;
                        return l.type === es.rbe.GUILD_TEXT;
                    })
                    .map((e) => {
                        let { channel: l } = e;
                        return { id: l.id, value: l.id, label: `#${(0, $.m1)(l, el.default, ee.A)}` };
                    }),
            [l.id],
        ),
        d = (0, i.bG)(
            [Q.Ay],
            () =>
                Q.Ay.getChannels(l.id)[Q.I6].find((e) => {
                    let { channel: l } = e;
                    return l.type === es.rbe.GUILD_TEXT && (0, et.B9)(l.topic) === t;
                })?.channel.id ?? null,
            [l.id, t],
        ),
        [o, u] = a.useState(!1),
        [m, x] = a.useState(null),
        g = a.useCallback(
            (e) => {
                null != e &&
                    e !== d &&
                    (u(!0),
                    x(null),
                    eu(l.id, e, t)
                        .catch((e) => x(e instanceof Error ? e.message : "failed to set the vibe channel"))
                        .finally(() => u(!1)));
            },
            [l.id, t, d],
        );
    return (0, n.jsxs)("div", {
        className: em.kb,
        children: [
            (0, n.jsx)(K.Z, {
                selectionMode: "single",
                placeholder: s ? v.intl.string(f.default.ZwMXxL) : v.intl.string(f.default["8KOCsL"]),
                options: r,
                value: d ?? void 0,
                onSelectionChange: g,
                disabled: !s || o,
            }),
            null == m
                ? null
                : (0, n.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: m }),
        ],
    });
}
function eg(e) {
    let { guild: l, appId: t, requiredPermissions: a } = e,
        s = (0, i.cf)(
            [X.A],
            () =>
                (function (e, l, t, n) {
                    if (null == n) return z.BY;
                    let a = z.iu(n);
                    if (z.aI(a, z.BY)) return z.BY;
                    let i = z.BY;
                    for (let n of e) (n.id === l || n.tags?.bot_id === t) && (i = z.kg(i, n.permissions));
                    return z.zy(i, es.xBc.ADMINISTRATOR) ? z.BY : z.TF(a, i);
                })(X.A.getSortedRoles(l.id), l.id, t, a),
            [l, t, a],
        );
    return z.aI(s, z.BY)
        ? null
        : (0, n.jsx)(y.m, {
              text: v.intl.string(f.default["H/1a4G"]),
              position: "top",
              children: (0, n.jsx)("span", {
                  className: em.dj,
                  "aria-label": v.intl.string(f.default.BrIO8n),
                  children: (0, n.jsx)(O.i, { size: "xs", color: "currentColor" }),
              }),
          });
}
function ej(e) {
    let { applicationId: l, preferredGuildId: t, onSetPreferred: s, addLabel: r, isPreview: d = !1 } = e,
        o = (0, i.bG)([J.A], () => J.A.getMutualGuilds(l), [l]),
        { data: m } = (0, H.YY)(l),
        x = (0, q.n)(m, es.gfo.EMBEDDED),
        g = m?.integrationTypesConfig?.[M.b.GUILD_INSTALL]?.oauth2InstallParams ?? m?.installParams,
        j = g?.permissions ?? null,
        h = a.useMemo(
            () =>
                new Set(
                    (o ?? []).map((e) => {
                        let { guild: l } = e;
                        return l.id;
                    }),
                ),
            [o],
        ),
        p = a.useCallback(() => {
            (0, V.A)(l, void 0, { withMutualGuilds: !0 });
        }, [l]);
    a.useEffect(p, [p]);
    let [b, N] = a.useState(null),
        [C, S] = a.useState(null),
        k = a.useCallback(
            async (e) => {
                N(e), S(null);
                try {
                    await s(e);
                } catch (e) {
                    S(e instanceof Error ? e.message : "failed to update preferred server");
                } finally {
                    N(null);
                }
            },
            [s],
        ),
        [I, T] = a.useState("closed"),
        w = a.useCallback(() => {
            T((e) => ("closed" === e ? "pre" : "closing" === e ? "open" : "closing"));
        }, []),
        G = a.useCallback(() => {
            T((e) => ("closed" === e ? e : "closing"));
        }, []);
    a.useEffect(() => {
        let e;
        if ("pre" !== I) return;
        let l = requestAnimationFrame(() => {
            e = requestAnimationFrame(() => T("open"));
        });
        return () => {
            cancelAnimationFrame(l), null != e && cancelAnimationFrame(e);
        };
    }, [I]);
    let D = a.useCallback((e) => {
            e.target === e.currentTarget &&
                "grid-template-rows" === e.propertyName &&
                T((e) => ("closing" === e ? "closed" : "open" === e ? "settled" : e));
        }, []),
        L = a.useCallback(() => {
            G(), (0, U.eO)(l, { withMutualGuilds: !0 });
        }, [G, l]);
    return null == o
        ? (0, n.jsx)(u.y, {})
        : (0, n.jsxs)("div", {
              className: em.D_,
              children: [
                  0 === o.length
                      ? (0, n.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: v.intl.string(f.default["+jR47e"]),
                        })
                      : o.map((e) => {
                            let { guild: a } = e,
                                i = a.id === t;
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: em.Rq,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: em.pp,
                                            children: [
                                                (0, n.jsx)(E.Ay, { guild: a, size: E.Ay.Sizes.SMALL }),
                                                (0, n.jsx)(c.E, {
                                                    className: em.Ck,
                                                    variant: "text-sm/medium",
                                                    color: "text-default",
                                                    children: a.name,
                                                }),
                                            ],
                                        }),
                                        x ? (0, n.jsx)(ex, { guild: a, appId: l }) : null,
                                        (0, n.jsx)(eg, { guild: a, appId: l, requiredPermissions: j }),
                                        (0, n.jsx)(y.m, {
                                            text: i
                                                ? v.intl.string(f.default["wJB+A3"])
                                                : v.intl.string(f.default.ebUKvD),
                                            position: "top",
                                            children: (0, n.jsx)("button", {
                                                type: "button",
                                                className: i ? em.FX : em.Pn,
                                                "aria-label": i
                                                    ? v.intl.string(f.default["wJB+A3"])
                                                    : v.intl.string(f.default.ebUKvD),
                                                "aria-pressed": i,
                                                disabled: null != b && b !== a.id,
                                                onClick: () => k(i ? null : a.id),
                                                children: i
                                                    ? (0, n.jsx)(Z.G, { size: "xs", color: "currentColor" })
                                                    : (0, n.jsx)(Y.y, { size: "xs", color: "currentColor" }),
                                            }),
                                        }),
                                    ],
                                },
                                a.id,
                            );
                        }),
                  "closed" === I
                      ? (0, n.jsx)(y.m, {
                            text: r,
                            position: "top",
                            children: (0, n.jsxs)("button", {
                                type: "button",
                                className: em.qT,
                                "aria-label": r,
                                "aria-expanded": !1,
                                onClick: w,
                                children: [
                                    (0, n.jsx)(R.p, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: r }),
                                ],
                            }),
                        })
                      : (0, n.jsx)("div", {
                            className: A()(em.a7, { [em.KL]: "open" === I || "settled" === I }),
                            onTransitionEnd: D,
                            children: (0, n.jsx)("div", {
                                className: A()(em.M6, { [em.Hg]: "settled" === I }),
                                children: (0, n.jsx)(ec, {
                                    applicationId: l,
                                    excludeGuildIds: h,
                                    onInstalled: L,
                                    onCancel: G,
                                    isPreview: d,
                                }),
                            }),
                        }),
                  null == C
                      ? null
                      : (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: C }),
              ],
          });
}
var eh = t(757817);
function ef(e) {
    let { projectId: l } = e,
        t = (0, i.bG)([j.A], () => j.A.getProject(l), [l]),
        [s, r] = a.useState(t?.name ?? ""),
        [u, m] = a.useState(!1),
        [x, p] = a.useState(null),
        [b, N] = a.useState(!1),
        [C, A] = a.useState(null),
        y = s.trim(),
        S = null != t && y !== t.name,
        E = "" !== y,
        k = a.useCallback(async () => {
            if (S && E) {
                m(!0), p(null);
                try {
                    await (0, g.oB)(l, y);
                } catch (e) {
                    p(e instanceof Error ? e.message : "save failed");
                } finally {
                    m(!1);
                }
            }
        }, [S, E, l, y]),
        I = a.useCallback(() => {
            r(t?.name ?? ""), p(null);
        }, [t?.name]),
        T = a.useCallback(
            async (e) => {
                await (0, g.M7)(l, { guild_id: e });
            },
            [l],
        ),
        w = a.useCallback(
            async (e) => {
                await (0, g.M7)(l, { preview_guild_id: e });
            },
            [l],
        ),
        G = a.useCallback(() => {
            (0, B.A)({
                title: v.intl.formatToPlainString(f.default.ZokHVz, {
                    name: t?.name ?? v.intl.string(f.default.jN6gfK),
                }),
                subtitle: v.intl.string(f.default.NmF939),
                confirmText: v.intl.string(v.t.oyYWHE),
                variant: "critical",
                onConfirm: async () => {
                    N(!0), A(null);
                    try {
                        await (0, g.xx)(l);
                    } catch (e) {
                        throw (N(!1), A(e instanceof Error ? e.message : "delete failed"), e);
                    }
                },
            });
        }, [t?.name, l]);
    return null == t
        ? (0, n.jsx)("div", {
              className: eh.W0,
              children: (0, n.jsx)(c.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: v.intl.string(f.default.GY6B0N),
              }),
          })
        : (0, n.jsxs)("div", {
              className: eh.OR,
              children: [
                  (0, n.jsxs)("div", {
                      "data-vibegrations-settings": !0,
                      className: eh.W0,
                      children: [
                          (0, n.jsxs)("section", {
                              className: eh.pL,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: eh.uT,
                                      children: (0, n.jsx)(d.D, {
                                          variant: "heading-md/semibold",
                                          children: v.intl.string(f.default.T8bq8a),
                                      }),
                                  }),
                                  (0, n.jsx)(h.k, {
                                      value: s,
                                      onChange: r,
                                      "aria-label": v.intl.string(f.default.u9UpIx),
                                      placeholder: v.intl.string(f.default.onCPw6),
                                  }),
                              ],
                          }),
                          null == t.preview_application_id
                              ? null
                              : (0, n.jsxs)("section", {
                                    className: eh.pL,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: eh.uT,
                                            children: [
                                                (0, n.jsx)(d.D, {
                                                    variant: "heading-md/semibold",
                                                    children: v.intl.string(f.default["nn/LnK"]),
                                                }),
                                                (0, n.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: v.intl.string(f.default.DsbhJh),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(ej, {
                                            applicationId: t.preview_application_id,
                                            preferredGuildId: t.preview_guild_id ?? null,
                                            onSetPreferred: w,
                                            addLabel: v.intl.string(f.default.ZYlNAm),
                                            isPreview: !0,
                                        }),
                                    ],
                                }),
                          (0, n.jsxs)("section", {
                              className: eh.pL,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eh.uT,
                                      children: [
                                          (0, n.jsx)(d.D, {
                                              variant: "heading-md/semibold",
                                              children: v.intl.string(v.t["7hB4kg"]),
                                          }),
                                          (0, n.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: v.intl.string(f.default.qnmuac),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(ej, {
                                      applicationId: t.application_id,
                                      preferredGuildId: t.guild_id ?? null,
                                      onSetPreferred: T,
                                      addLabel: v.intl.string(f.default.LxcxOn),
                                  }),
                              ],
                          }),
                          (0, n.jsxs)("section", {
                              className: eh.pL,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: eh.uT,
                                      children: (0, n.jsx)(d.D, {
                                          variant: "heading-md/semibold",
                                          children: v.intl.string(f.default["bs+vW4"]),
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: eh.dr,
                                      children: (0, n.jsx)(o.$, {
                                          variant: "critical-primary",
                                          size: "sm",
                                          onClick: G,
                                          loading: b,
                                          text: v.intl.string(f.default.cqbvos),
                                      }),
                                  }),
                                  null == C
                                      ? null
                                      : (0, n.jsx)(c.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            children: C,
                                        }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsx)(P.F, {
                      component: "div",
                      children:
                          S &&
                          (0, n.jsx)(
                              F.F,
                              {
                                  className: eh._e,
                                  children: (0, n.jsx)(_.A, {
                                      submitting: u,
                                      onSave: k,
                                      onReset: I,
                                      disabled: !E,
                                      errorMessage: x ?? void 0,
                                  }),
                              },
                              "unsaved-changes",
                          ),
                  }),
              ],
          });
}
var ev = t(321593),
    ep = t(408278),
    eb = t(972213),
    eN = t(948137);
function eC(e) {
    let { title: l, actions: t, onClose: a } = e;
    return (0, n.jsxs)("header", {
        className: eN.wx,
        children: [
            (0, n.jsx)(d.D, { variant: "heading-md/semibold", className: eN.qd, children: l }),
            (0, n.jsxs)("div", {
                className: eN.$s,
                children: [
                    null == t
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [t, (0, n.jsx)("div", { className: eN.zN, "aria-hidden": !0 })],
                          }),
                    (0, n.jsx)(ep.K, {
                        "aria-label": v.intl.string(v.t.cpT0Cq),
                        icon: eb.d,
                        onClick: a,
                        variant: "icon-only",
                        size: "sm",
                    }),
                ],
            }),
        ],
    });
}
var eA = t(691540),
    ey = t(857250),
    eS = t(97483),
    eE = t(876798),
    ek = t(998445),
    eI = t(39623),
    eT = t(664121),
    ew = t(643278),
    eG = t(113854),
    eD = t(345942),
    eL = t(208137);
function eP(e) {
    var l, t, s;
    let r,
        { projectId: d, activeTool: c, onSelectTool: o, onClose: u } = e,
        m = (0, i.bG)([j.A], () => j.A.getProject(d)?.preview_guild_id ?? null, [d]),
        x = (0, i.bG)([j.A], () => j.A.getProject(d)?.preview_application_id ?? null, [d]),
        { data: h } = (0, H.YY)(x ?? void 0),
        p = null != x && (0, q.n)(h, es.gfo.EMBEDDED),
        [b, N] = a.useState(!1),
        C = a.useCallback(async () => {
            N(!0);
            try {
                await (0, g.TV)(d), (0, eA.P0)((0, ey.o)(v.intl.string(f.default.MKjK9r), eS.Ck.SUCCESS));
            } catch (e) {
                (0, eA.P0)((0, ey.o)(e instanceof Error ? e.message : v.intl.string(f.default.fNP6Cd), eS.Ck.FAILURE));
            } finally {
                N(!1);
            }
        }, [d]),
        A = a.useCallback(() => {
            null != m && (u(), (0, eD.u)(m));
        }, [m, u]),
        S = a.useCallback(() => {
            null == x || (null == (0, eL.V)() && (u(), eG.A.launchFrame({ applicationId: x })));
        }, [x, u]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(y.m, {
                text: v.intl.string(f.default.pb94Ix),
                ariaHidden: !0,
                children: (0, n.jsx)(ep.K, {
                    "aria-label": v.intl.string(f.default.pb94Ix),
                    icon: ek.L,
                    variant: "icon-only",
                    size: "sm",
                    loading: b,
                    onClick: C,
                }),
            }),
            p
                ? (0, n.jsx)(y.m, {
                      text: v.intl.string(f.default.kxgA0e),
                      ariaHidden: !0,
                      children: (0, n.jsx)(ep.K, {
                          "aria-label": v.intl.string(f.default.kxgA0e),
                          icon: eI.b,
                          variant: "icon-only",
                          size: "sm",
                          onClick: S,
                      }),
                  })
                : null,
            (0, n.jsx)(y.m, {
                text: null == m ? v.intl.string(f.default.SJUldG) : v.intl.string(f.default.wJR7Dy),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(ep.K, {
                    "aria-label": v.intl.string(f.default["2spNBg"]),
                    icon: eT.R,
                    variant: "icon-only",
                    size: "sm",
                    disabled: null == m,
                    onClick: A,
                }),
            }),
            ((l = "logs"),
            (t = v.intl.string(f.default["h/telp"])),
            (s = ew.s),
            (r = c === l),
            (0, n.jsx)(y.m, {
                text: t,
                ariaHidden: !0,
                children: (0, n.jsx)(eE.k, {
                    icon: s,
                    pressed: r,
                    variant: "tertiary",
                    size: "sm",
                    "aria-label": t,
                    onClick: () => o(r ? null : l),
                }),
            })),
        ],
    });
}
var e_ = t(862079);
function eB(e) {
    let { projectId: l, activeTool: t, onSelectTool: a, showSettings: s, onClose: r } = e,
        d = (0, i.bG)([j.A], () => j.A.getProject(l), [l]);
    if (null == d)
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eC, { title: v.intl.string(f.default["s/ZOdr"]), onClose: r }),
                (0, n.jsx)("main", {
                    className: b.Gl,
                    children: (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: v.intl.string(f.default.GY6B0N),
                    }),
                }),
            ],
        });
    let o = null != t;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eC, {
                title: d.name,
                actions: (0, n.jsx)(eP, { projectId: l, activeTool: t, onSelectTool: a, onClose: r }),
                onClose: r,
            }),
            (0, n.jsxs)("main", {
                "data-vibegrations-project-id": l,
                className: e_.y,
                children: [
                    (0, n.jsxs)("div", {
                        className: b.OB,
                        hidden: o || s,
                        children: [
                            (0, n.jsx)(ev.A, { projectId: l }),
                            (0, n.jsx)(w.A, { projectId: l, open: !o && !s }, l),
                        ],
                    }),
                    s ? (0, n.jsx)(ef, { projectId: l }, l) : "logs" === t ? (0, n.jsx)(L, { projectId: l }) : null,
                ],
            }),
        ],
    });
}
var eF = t(282296);
function eM(e) {
    let { transitionState: l, onClose: t, initialProjectId: h = null, initialSettings: p = !1 } = e,
        C = (0, i.yK)([j.A], () => j.A.getAllProjects()),
        A = (0, i.bG)([j.A], () => j.A.getProjectsFetchState()),
        y = A?.type === "success",
        S = A?.type === "error",
        [E, k] = (0, x.V)("vibegrations-selected-project-id", null),
        [I, w] = a.useState(!1),
        [G, D] = a.useState(null),
        [L, P] = a.useState(p),
        _ = null != E && C.some((e) => e.id === E) ? E : null,
        B = a.useRef(!1);
    a.useEffect(() => {
        B.current || ((B.current = !0), null != h && k(h));
    }, [h, k]),
        a.useEffect(() => {
            (0, g.hF)();
        }, []);
    let F = a.useCallback(
            async (e) => {
                k(await (0, g.gA)({ name: e })), w(!1), D(null), P(!1);
            },
            [k],
        ),
        M = (0, n.jsx)(T, {
            selectedProjectId: _,
            onSelectProject: (e) => {
                w(!1), k(e), D(null), P(!1);
            },
            onOpenSettings: (e) => {
                w(!1);
                let l = L && _ === e;
                k(e), D(null), P(!l);
            },
            settingsProjectId: L ? _ : null,
            onCreateProject: () => {
                w(!0), D(null), P(!1);
            },
        });
    return (0, n.jsx)(r.N, {
        transitionState: l,
        onClose: t,
        "aria-label": v.intl.string(f.default["s/ZOdr"]),
        children: (0, n.jsx)("div", {
            className: eF.CR,
            children:
                0 === C.length && S
                    ? (0, n.jsxs)("div", {
                          className: eF.Qs,
                          children: [
                              (0, n.jsx)(eC, { title: v.intl.string(f.default["s/ZOdr"]), onClose: t }),
                              (0, n.jsxs)("div", {
                                  className: eF.AZ,
                                  children: [
                                      (0, n.jsx)(d.D, {
                                          variant: "heading-lg/semibold",
                                          children: v.intl.string(f.default["l7+3Cp"]),
                                      }),
                                      (0, n.jsx)(c.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          className: eF.LE,
                                          children: v.intl.string(f.default["IN/HRP"]),
                                      }),
                                      (0, n.jsx)(o.$, {
                                          variant: "primary",
                                          size: "sm",
                                          onClick: () => void (0, g.hF)(),
                                          text: v.intl.string(f.default["42EdIV"]),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : 0 !== C.length || y
                      ? 0 === C.length
                          ? (0, n.jsxs)("div", {
                                className: eF.Qs,
                                children: [
                                    (0, n.jsx)(eC, { title: v.intl.string(f.default["s/ZOdr"]), onClose: t }),
                                    (0, n.jsxs)("div", {
                                        className: eF.AZ,
                                        children: [
                                            (0, n.jsx)(m.C, {
                                                size: "custom",
                                                width: 64,
                                                height: 64,
                                                color: s.A.colors.TEXT_MUTED,
                                            }),
                                            (0, n.jsx)(d.D, {
                                                variant: "heading-lg/semibold",
                                                children: v.intl.string(f.default.ViaTTs),
                                            }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/normal",
                                                color: "text-muted",
                                                className: eF.LE,
                                                children: v.intl.string(f.default["1tpgZj"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: eF.t_,
                                                children: (0, n.jsx)(N, { onCreate: F }),
                                            }),
                                        ],
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    M,
                                    (0, n.jsx)("div", {
                                        className: eF.Qs,
                                        children: I
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eC, {
                                                          title: v.intl.string(f.default.blwjBG),
                                                          onClose: t,
                                                      }),
                                                      (0, n.jsx)("main", {
                                                          className: eF.O8,
                                                          children: (0, n.jsx)("div", {
                                                              className: eF.t_,
                                                              children: (0, n.jsx)(N, {
                                                                  onCreate: F,
                                                                  onCancel: () => w(!1),
                                                              }),
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : null == _
                                              ? (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(eC, {
                                                            title: v.intl.string(f.default["s/ZOdr"]),
                                                            onClose: t,
                                                        }),
                                                        (0, n.jsx)("main", {
                                                            className: b.Gl,
                                                            children: (0, n.jsx)(c.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: v.intl.string(f.default.jImIeK),
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : (0, n.jsx)(eB, {
                                                    projectId: _,
                                                    activeTool: G,
                                                    onSelectTool: (e) => {
                                                        P(!1), D(e);
                                                    },
                                                    showSettings: L,
                                                    onClose: t,
                                                }),
                                    }),
                                ],
                            })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                M,
                                (0, n.jsxs)("div", {
                                    className: eF.Qs,
                                    children: [
                                        (0, n.jsx)(eC, { title: v.intl.string(f.default["s/ZOdr"]), onClose: t }),
                                        (0, n.jsx)("main", { className: eF.Mu, children: (0, n.jsx)(u.y, {}) }),
                                    ],
                                }),
                            ],
                        }),
        }),
    });
}
