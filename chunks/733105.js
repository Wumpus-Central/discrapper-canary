(n.d(t, { A: () => t2 }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    a = n(435558),
    r = n.n(a),
    o = n(17928),
    c = n(297264),
    d = n(40474),
    u = n(282956),
    m = n(968309),
    g = n(235986),
    h = n(143582),
    x = n(607940),
    p = n(808728),
    A = n(576705),
    f = n(625494),
    b = n(975571),
    j = n(179771),
    N = n(732159),
    E = n(192308),
    C = n(406810),
    v = n(950305),
    T = n(993077),
    I = n(834730),
    S = n(404778),
    y = n(430392),
    k = n(39619),
    O = n(821609),
    L = n(157559),
    w = n(468689),
    R = n(633018),
    M = n(503698),
    _ = n.n(M),
    P = n(178686);
function W(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: P.wx,
        children: [
            (0, l.jsxs)("div", {
                className: P.UU,
                children: [
                    s.cloneElement(n, { className: _()(n.props.className, P.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: P.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var G = n(542580),
    D = n(803378),
    U = n(825453),
    B = n(683438),
    H = n(485845),
    z = n(155718),
    V = n(633334);
function K(e) {
    return { id: e.id, names: [e.displayName] };
}
var F = n(261958),
    Y = n(939249),
    q = n(885574),
    Q = n(442433),
    J = n(200662),
    Z = n(660183),
    X = n(634968);
function $(e) {
    let { applicationIcon: t, applicationName: i, canNavigate: a, command: r, guildId: o } = e,
        c = s.useMemo(() => 0 !== Object.keys(r.permissions ?? {}).length, [r.permissions]),
        d = s.useCallback(() => {
            null != r &&
                a() &&
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await n.e("615946").then(n.bind(n, 326993));
                    return (n) =>
                        (0, l.jsx)(e, {
                            applicationIcon: t,
                            applicationId: r.applicationId,
                            applicationName: i,
                            command: r,
                            guildId: o,
                            ...n,
                        });
                });
        }, [t, i, a, r, o]),
        u = s.useCallback(
            (e) => {
                (0, Q.L3)(e, async () => {
                    let { default: e } = await n.e("715687").then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: Z.intl.string(Z.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === z.kc.CHAT ? R.k : F.u,
        g = (0, J.p6)(r.type, r.displayName);
    return (0, l.jsxs)(Y.D, {
        onClick: d,
        className: X.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: X.Cv,
                children: [
                    (0, l.jsx)(m, { className: X.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(I.E, { variant: "text-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: X.II,
                children: c
                    ? (0, l.jsxs)("div", {
                          className: X.Bs,
                          children: [
                              (0, l.jsx)(I.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.jH4B9O) }),
                              (0, l.jsx)(q.CircleInformationIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: X.I8,
                              }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
var ee = n(636547),
    et = n(747414);
function en(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: i, guildId: a } = e,
        {
            results: r,
            query: c,
            setQuery: d,
            unfilteredCount: u,
        } = (function () {
            let e = (0, o.cf)([D.A], () => Object.values(D.A.getCommands() ?? {})),
                [t, n] = s.useState(""),
                i = s.useMemo(
                    () =>
                        e.filter(
                            (e) =>
                                (null == e.integration_types || e.integration_types.includes(H.b.GUILD_INSTALL)) &&
                                (null == e.contexts || e.contexts?.includes(z.OL.GUILD)),
                        ),
                    [e],
                ),
                l = s.useMemo(
                    () =>
                        [...i].sort((e, t) => {
                            let n = z.kc.CHAT + 1,
                                i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                            return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                        }),
                    [i],
                ),
                a = s.useMemo(() => (t.startsWith("/") ? l.filter((e) => e.type === z.kc.CHAT) : l), [t, l]),
                r = s.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
            return {
                query: t,
                results: s.useMemo(() => (0, V.I)(a, K, r), [a, r]),
                setQuery: n,
                unfilteredCount: e.length,
            };
        })();
    return null != r && u > 0
        ? (0, l.jsx)(ee.A, {
              bar: (0, l.jsx)(B.I, { size: "sm", query: c, onChange: d, onClear: () => d("") }),
              inModal: !1,
              title: Z.intl.string(Z.t["0hKkS+"]),
              children: r.map((e, o) =>
                  (0, l.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, l.jsx)($, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: i,
                                  command: e,
                                  guildId: a,
                              }),
                              o < r.length - 1 ? (0, l.jsx)(S.c, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, l.jsx)(T.Z, {
              className: et.a,
              editable: !0,
              children: (0, l.jsx)(I.E, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: Z.intl.string(Z.t["x78c+J"]),
              }),
          });
}
var ei = n(534148),
    el = n(16101);
function es(e) {
    let { application: t, canNavigate: n, guildId: i } = e,
        a = (0, o.bG)([D.A], () => D.A.isUnavailable());
    return (s.useEffect(() => (G.hu(t.id), G.AL), [t.id]),
    s.useEffect(() => {
        (G.gV(t.id, i, t.id), G.Jw(i, t.id));
    }, [t.id, i]),
    a)
        ? null
        : (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(W, {
                      icon: (0, l.jsx)(R.k, { size: "md", color: "currentColor" }),
                      title: Z.intl.string(Z.t.RGoJNN),
                  }),
                  (0, l.jsx)(I.E, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: Z.intl.string(Z.t.sCkD3Z),
                  }),
                  (0, l.jsx)(ea, { guildId: i, applicationId: t.id }),
                  (0, l.jsx)(en, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: i }),
              ],
          });
}
function ea(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: i, editedTargetPermissions: s, selectedPermissionCount: a } = (0, U.A)(n, t);
    return (0, l.jsx)("div", {
        className: el.zi,
        children: (0, l.jsx)(ei.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: i,
            selectedPermissionCount: a,
        }),
    });
}
var er = n(308244),
    eo = n(486020),
    ec = n(935208),
    ed = n(427262),
    eu = n(331322),
    em = n(866665),
    eg = n(638916),
    eh = n(783734);
function ex(e) {
    let {
        name: t,
        description: n,
        icon: i,
        imageSrc: s,
        iconBackgroundColor: a,
        iconClassName: r,
        iconWrapperClassName: o,
        details: d,
        detailsClassName: u,
        isHeader: m,
        isPremium: g,
        children: h,
    } = e;
    return (0, l.jsxs)(eu.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != i || null != s
                ? (function (e, t, n, i, s) {
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: _()(eh.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: _()(eh.Kk, i) })
                                      : (0, l.jsx)(e, { className: _()(eh.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: _()(eh.P0, s), children: a })
                      );
                  })(i, s, a, r, o)
                : null,
            (0, l.jsxs)(eu.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: i, detailsClassName: s, isHeader: a, isPremium: r } = e,
                            o = i?.map((e, t) => {
                                let { icon: n, text: i } = e;
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: _()(eh.yM, a ? eh.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: eh.Ul })
                                                : null,
                                            (0, l.jsx)(I.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: s,
                                                children: i,
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            });
                        return (0, l.jsxs)(eu.B, {
                            gap: 0,
                            children: [
                                (0, l.jsxs)(c.D, {
                                    variant: a ? "heading-xl/semibold" : "heading-md/medium",
                                    className: a ? eh.wx : eh.K8,
                                    children: [
                                        t,
                                        r &&
                                            (0, l.jsx)(em.m, {
                                                text: Z.intl.string(Z.t.VFuFum),
                                                children: (0, l.jsx)(eg.q, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eh.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, l.jsx)(I.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eu.B, { direction: "horizontal", children: o }),
                            ],
                        });
                    })({ name: t, description: n, details: d, detailsClassName: u, isHeader: m, isPremium: g }),
                    h,
                ],
            }),
        ],
    });
}
var ep = n(136722),
    eA = n(452027),
    ef = n(66834),
    eb = n(417454),
    ej = n(595738),
    eN = n(709066),
    eE = n(376092),
    eC = n(889227),
    ev = n(696451),
    eT = n(317525),
    eI = n(737496);
function eS(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = null != i.bot ? new eC.A(i.bot) : null,
        r = (0, o.bG)([ev.Ay], () => (null != a ? ev.Ay.getMember(t.id, a.id) : null), [a, t]),
        c = (0, o.bG)([eT.A], () => eT.A.getEveryoneRole(t)),
        d = (0, o.yK)([eT.A], () => eT.A.getManyRoles(t.id, r?.roles ?? [])),
        u = a?.id;
    s.useEffect(() => {
        null != u && ef.A.requestMembersById(t.id, u);
    }, [t.id, u]);
    let m = s.useMemo(() => ep.kg(c.permissions, ...d.map((e) => e.permissions)), [d, c]);
    if (null == a) return null;
    let h = eo.Ay.getApplicationIconURL({ id: i.id, guildMember: r, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(T.Z, {
        editable: !0,
        className: eI.Nr,
        children: (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(g.A, {
                    align: g.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: h, className: eI.P0 }),
                        (0, l.jsx)(I.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: Z.intl.format(Z.t.GyhzGw, { user: a.toString() }),
                        }),
                        (0, l.jsx)(eN.A, { className: eI.Tc, verified: a.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, i) {
                    let s = [],
                        a = [];
                    for (let e of eE.Q) ep.zy(i, e) ? s.push(e) : a.push(e);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(S.c, { className: eI.yF }),
                            n.length > 0
                                ? (0, l.jsx)(eA.D, {
                                      label: Z.intl.format(Z.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, l.jsx)(eb.Ay, {
                                          className: eI.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            s.length > 0 || a.length > 0
                                ? (0, l.jsx)(ej.A, {
                                      grantedPermissions: s,
                                      grantedPermissionsHeader: Z.intl.string(Z.t["hA4+su"]),
                                      disabledPermissions: a,
                                      disabledPermissionsHeader: Z.intl.string(Z.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(a, t, r?.roles ?? [], m),
            ],
        }),
    });
}
var ey = n(47167),
    ek = n(994500),
    eO = n(287809),
    eL = n(314116),
    ew = n(778492),
    eR = n(95477),
    eM = n(691885),
    e_ = n(123292),
    eP = n(824953),
    eW = n(147925),
    eG = n(652215),
    eD = n(440193);
function eU(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        c = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, eo.ku)({ id: t.id, avatar: e, discriminator: eG.h3J });
        }, [t]),
        d = s.useCallback(() => {
            (0, eL.A)({
                title: Z.intl.formatToPlainString(Z.t.gBKqZ0, { name: t.name }),
                subtitle: Z.intl.string(Z.t.zO9jrD),
                confirmText: Z.intl.string(Z.t.CMy0Cj),
                onConfirm: () => {
                    eP.A.delete(t.guild_id, t.id).catch(() => {
                        L.A.show({ title: Z.intl.string(Z.t.LpbaFV), body: Z.intl.string(Z.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        m = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (m.push({ icon: ew.k, text: t.source_channel.name }),
        m.push({
            text: (0, l.jsx)(
                "span",
                {
                    className: eD.lM,
                    children: Z.intl.format(Z.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: eD.VZ, children: t.source_guild.name }, t.id),
                    }),
                },
                "guild-source",
            ),
        }));
    let g = null;
    return (
        a &&
            null != n &&
            (g = (0, l.jsxs)("div", {
                className: eD.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eD.fV }),
                    (0, l.jsxs)(eu.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eu.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(eR.k, {
                                        label: Z.intl.string(Z.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(eM.l, {
                                        label: Z.intl.string(Z.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: i,
                                        onSelectionChange: (e) => {
                                            u.A.updateWebhook({ channelId: e });
                                        },
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(S.c, { className: eD.Bd }),
                            (0, l.jsx)(e_.Q, {
                                onClick: d,
                                size: "sm",
                                variant: "critical",
                                text: Z.intl.string(Z.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(T.Z, {
            editable: !0,
            className: eD.Nr,
            children: (0, l.jsxs)(eu.B, {
                children: [
                    (0, l.jsx)(Y.D, {
                        className: eD.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eu.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(ex, { name: t.name, imageSrc: c, details: m }),
                                (0, l.jsx)(eW.A, { className: eD.eO, expanded: a, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    g,
                ],
            }),
        })
    );
}
var eB = n(935399),
    eH = n(636537),
    ez = n(451988),
    eV = n(890497),
    eK = n(765178),
    eF = n(342298),
    eY = n(957565),
    eq = n(423959);
function eQ(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, eo.ku)({ id: e.id, avatar: t, discriminator: eG.h3J });
}
function eJ(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: i,
            channelOptions: a,
            isExpanded: r,
            isNew: o,
            errors: c,
            onToggleExpand: d,
        } = e,
        [m, h] = s.useState(!1),
        [x] = s.useState(new ez.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let p = s.useRef(null);
    (0, eB.Ay)(() => {
        !0 === o && (u.A.startEditingWebhook(n.id), p.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
    });
    let A = s.useMemo(() => eQ(n, n.avatar), [n]),
        f = s.useCallback(() => {
            let e = `${(0, eH.TP)(!1)}${eG.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eY.C)(e);
        }, [n]),
        b = s.useCallback(() => {
            (0, eL.A)({
                title: Z.intl.formatToPlainString(Z.t.QVFjHh, { name: n.name }),
                subtitle: Z.intl.format(Z.t["rIWe+5"], { name: n.name }),
                confirmText: Z.intl.string(Z.t["W+K1Fs"]),
                cancelText: Z.intl.string(Z.t.xNhj0O),
                onConfirm: () => {
                    eP.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? L.A.show({ title: Z.intl.string(Z.t.N5riYn), body: Z.intl.string(Z.t.eAxcCc) })
                            : L.A.show({ title: Z.intl.string(Z.t.N5riYn), body: Z.intl.string(Z.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        j = [];
    null != n.user
        ? j.push({
              icon: C.ClockIcon,
              text: Z.intl.formatToPlainString(Z.t["7EcUbr"], {
                  user: (function (e) {
                      if (null == e) return null;
                      let t = new eC.A(e);
                      return ed.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: ec.default.extractTimestamp(n.id),
              }),
          })
        : j.push({
              icon: C.ClockIcon,
              text: Z.intl.formatToPlainString(Z.t["7mv59O"], { timestamp: ec.default.extractTimestamp(n.id) }),
          });
    let N = null;
    return (
        r &&
            null != i &&
            (N = (0, l.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eq.fV }),
                    (0, l.jsxs)(g.A, {
                        children: [
                            (0, l.jsx)(g.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(g.A, {
                                    className: eq.R3,
                                    direction: g.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eF.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => eQ(n, e),
                                            imageClassName: eq.mr,
                                            showIcon: !0,
                                        }),
                                        null != c.avatar && "" !== c.avatar
                                            ? (0, l.jsx)(I.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: c.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, l.jsxs)(g.A, {
                                direction: g.A.Direction.VERTICAL,
                                children: [
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(g.A.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, l.jsx)(eR.k, {
                                                    label: Z.intl.string(Z.t.ukdxuo),
                                                    value: i.name,
                                                    onChange: (e) => {
                                                        u.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: c.name,
                                                }),
                                            }),
                                            (0, l.jsx)(g.A.Child, {
                                                basis: "50%",
                                                children: (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(eV.Z, {
                                                        label: Z.intl.string(Z.t.GK18KJ),
                                                        value: i.channel_id,
                                                        options: a,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            u.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: Z.intl.string(Z.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(S.c, { className: eq.Bd }),
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(em.m, {
                                                text: Z.intl.string(Z.t.wwdb3g),
                                                shouldShow: m,
                                                hideOnClick: !1,
                                                forceOpen: m,
                                                children: (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: eq.cL,
                                                    children: (0, l.jsx)(O.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Z.intl.string(Z.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            (h(!0),
                                                                eK.O.announce(Z.intl.string(Z.t.wwdb3g)),
                                                                x.start(1e3, () => h(!1)),
                                                                f());
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)(O.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: Z.intl.string(Z.t.jVrUnC),
                                                onClick: b,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(T.Z, {
            ref: p,
            editable: !0,
            id: t,
            className: _()(eq.Nr, o ? eq.U6 : null),
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(Y.D, {
                        className: eq.wx,
                        "aria-expanded": r,
                        onClick: d,
                        children: (0, l.jsxs)(g.A, {
                            align: g.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(ex, { name: n.name, imageSrc: A, details: j }),
                                (0, l.jsx)(eW.A, { className: eq.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    N,
                ],
            }),
        })
    );
}
var eZ = n(140659);
function eX(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: i,
            editedWebhook: a,
            errors: r,
            canNavigate: o,
        } = e,
        c = s.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, ey.m1)(e, eO.default, ek.A, !0) })),
            [n],
        ),
        d = s.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t && (e[i.channel_id] = { channel: t, webhooks: [i] });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        m = s.useCallback(
            (e) => {
                o() && (e === a?.id ? u.A.stopEditingWebhook() : u.A.startEditingWebhook(e));
            },
            [o, a],
        );
    return (0, l.jsx)("div", {
        className: eZ.__invalid_list,
        children: d.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: i,
                    lastCreatedWebhookId: s,
                    editedWebhook: a,
                    errors: r,
                    toggleWebhookExpand: o,
                } = e;
                return (0, l.jsxs)(
                    "div",
                    {
                        children: [
                            (0, l.jsx)(I.E, {
                                variant: "text-md/medium",
                                className: eZ.x,
                                children: Z.intl.format(Z.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: eZ.H, children: (0, ey.m1)(t, eO.default, ek.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) =>
                                e.type === eG.NH1.CHANNEL_FOLLOWER
                                    ? (0, l.jsx)(
                                          eU,
                                          {
                                              webhook: e,
                                              editedWebhook: a,
                                              channelOptions: i,
                                              isExpanded: a?.id === e.id,
                                              onToggleExpand: () => o(e.id),
                                              errors: r,
                                          },
                                          e.id,
                                      )
                                    : (0, l.jsx)(
                                          eJ,
                                          {
                                              webhook: e,
                                              editedWebhook: a,
                                              channelOptions: i,
                                              isExpanded: a?.id === e.id,
                                              isNew: s === e.id,
                                              onToggleExpand: () => o(e.id),
                                              errors: r,
                                          },
                                          e.id,
                                      ),
                            ),
                        ],
                    },
                    t.id,
                );
            })({
                channel: t,
                webhooks: n,
                channelOptions: c,
                lastCreatedWebhookId: i,
                editedWebhook: a,
                errors: r,
                toggleWebhookExpand: m,
            });
        }),
    });
}
var e$ = n(710135);
function e0(e) {
    let { application: t, guild: n, integration: i, ...s } = e;
    return (0, l.jsx)(N.u, {
        ...s,
        title: Z.intl.formatToPlainString(Z.t["rL9d/1"], { applicationName: t.name }),
        subtitle: Z.intl.format(Z.t.FGE8ya, { applicationName: t.name }),
        confirmText: Z.intl.string(Z.t.ebGf4m),
        onConfirm: () => {
            w.default.disableIntegration(n.id, i.id).catch(() => {
                L.A.show({ title: Z.intl.string(Z.t.wYqMmI), body: Z.intl.string(Z.t.A4Mnst) });
            });
        },
    });
}
function e2(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: i,
            editedWebhook: a,
            errors: r,
            canNavigate: c,
        } = e,
        { application: d, integration: u, webhooks: m } = n,
        [h, x] = (0, o.yK)(
            [A.A],
            () => [
                A.A.can(eG.xBc.MANAGE_ROLES, t),
                null == d.bot || A.A.canManageUser(eG.xBc.MANAGE_GUILD, d.bot.id, t),
            ],
            [d.bot, t],
        ),
        p = (0, o.bG)([A.A], () => A.A.can(eG.xBc.MANAGE_WEBHOOKS, t), [t]),
        f = s.useCallback(() => {
            c() && (0, E.openModal)((e) => (0, l.jsx)(e0, { guild: t, application: d, integration: u, ...e }));
        }, [d, c, t, u]),
        b = s.useMemo(() => {
            let e = [
                {
                    icon: C.ClockIcon,
                    text: Z.intl.formatToPlainString(Z.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: v.UserIcon,
                        text: Z.intl.formatToPlainString(Z.t.qE7oqs, { user: ed.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        N = s.useMemo(
            () =>
                null != d.bot && u.scopes?.includes(j.F.BOT)
                    ? (0, l.jsx)(eS, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(T.Z, {
                          className: e$.aM,
                          editable: !0,
                          children: (0, l.jsx)(I.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: Z.intl.string(Z.t.pfLnza),
                          }),
                      }),
            [d.bot, n, t, u.scopes],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex, {
                name: d.name,
                imageSrc: eo.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 }),
                details: b,
                isHeader: !0,
            }),
            d?.description != null ? (0, l.jsx)(er.A, { userBio: d.description, className: e$.ux }) : null,
            h ? (0, l.jsx)(es, { application: d, canNavigate: c, guildId: t.id }) : null,
            (0, l.jsx)(S.c, { className: e$.zN }),
            null != d.bot
                ? (0, l.jsxs)("div", {
                      className: e$.uW,
                      children: [
                          (0, l.jsx)(W, {
                              icon: (0, l.jsx)(y.RobotIcon, { size: "xs", color: "currentColor" }),
                              title: Z.intl.string(Z.t.AOdOYr),
                          }),
                          N,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: e$.uW,
                children: [
                    (0, l.jsx)(W, {
                        icon: (0, l.jsx)(k.X, { size: "md", color: "currentColor" }),
                        title: Z.intl.string(Z.t["t9ZX/I"]),
                    }),
                    m.length > 0
                        ? (0, l.jsx)(eX, {
                              webhooks: m,
                              editedWebhook: a,
                              selectableWebhookChannels: i,
                              errors: r,
                              canNavigate: c,
                          })
                        : (0, l.jsx)(T.Z, {
                              className: e$.aM,
                              editable: !0,
                              children: (0, l.jsx)(I.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: p ? Z.intl.string(Z.t.ahPd2Y) : Z.intl.string(Z.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(S.c, { className: e$.zN }),
            (0, l.jsxs)(g.A, {
                className: e$.uW,
                justify: g.A.Justify.BETWEEN,
                align: g.A.Align.CENTER,
                children: [
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: x ? Z.intl.string(Z.t.hdneL4) : Z.intl.string(Z.t.xRCMqx),
                    }),
                    (0, l.jsx)(g.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(O.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: Z.intl.string(Z.t.ebGf4m),
                            disabled: !x,
                            onClick: f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e1 = n(573648);
(n(323874), n(14289), n(35956));
var e3 = n(536637),
    e8 = n.n(e3),
    e6 = n(788373),
    e7 =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    e4 = n(125744),
    e5 = n(139033),
    e9 = n(408278),
    te = n(663417),
    tt = n(150934),
    tn = n(28863),
    ti = n(236285),
    tl = n(351906),
    ts = n(445884),
    ta = n(221851);
function tr(e) {
    let t,
        {
            guild: n,
            integration: i,
            editedIntegration: a,
            isExpanded: r,
            onToggleExpand: d,
            onDisable: m,
            onEnable: h,
        } = e,
        [x, p] = s.useState(!1),
        f = (0, o.bG)([tl.A], () => tl.A.hidePersonalInformation),
        b = (0, o.bG)([A.A], () => A.A.can(eG.xBc.KICK_MEMBERS, n)),
        j = s.useCallback(() => {
            (p(!0), h(i));
        }, [i, h]),
        N = s.useCallback(() => {
            if (!i.syncing)
                if (b || i.expire_behavior !== e6.F.KICK) {
                    let e =
                        i.expire_behavior === e6.F.REMOVE_ROLE
                            ? Z.intl.string(Z.t["6kpw4i"])
                            : Z.intl.string(Z.t.fQUQIJ);
                    (0, eL.A)({
                        title: Z.intl.string(Z.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? Z.intl.string(Z.t.anKQWU) : Z.intl.string(Z.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, e5.A)({
                        title: Z.intl.string(Z.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? Z.intl.string(Z.t.pDCiEf) : Z.intl.string(Z.t.sQqHFk),
                    });
        }, [i, m, b]),
        E = s.useCallback(() => {
            w.default.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        v = s.useCallback(() => {
            null != i.role_id && (w.default.setSection(eG.BEX.ROLES), w.default.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: y,
            channelURL: k,
            expireBehaviorLabel: L,
            syncLabel: R,
            subscribersText: M,
        } = s.useMemo(() => {
            let e = e1.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case e4.s.YOUTUBE:
                    return {
                        serviceName: Z.intl.string(Z.t.aS6cK4),
                        expireBehaviorLabel: Z.intl.string(Z.t.A5MiqO),
                        syncLabel: Z.intl.string(Z.t["7vHKVe"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case e4.s.TWITCH:
                default:
                    return {
                        serviceName: Z.intl.string(Z.t.q4pBG3),
                        expireBehaviorLabel: Z.intl.string(Z.t["S/WCrG"]),
                        syncLabel: Z.intl.string(Z.t["0jbPK4"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t.RdUTrl, {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [i.account, i.subscriber_count, i.type]),
        P = (0, o.bG)([eT.A], () => (null != i.role_id ? eT.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: W, syncDescriptionText: G } = s.useMemo(() => {
            let e;
            e = null != P ? (0, l.jsx)(tn.Anchor, { onClick: v, children: P.name }) : Z.intl.string(Z.t.PoWNfe);
            let t = e1.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? Z.intl.formatToPlainString(Z.t.G16Wji, { user: i.user, platformName: t.name })
                        : Z.intl.formatToPlainString(Z.t.unl3AP, { datetime: e8()(i.synced_at).calendar() }),
            };
        }, [P, v, i.revoked, i.synced_at, i.type, i.user]),
        D = (0, o.bG)([eT.A], () => eT.A.getSortedRoles(n.id)),
        U = s.useMemo(() => {
            let e = ti.Ay.getGuildEmoji(n.id),
                t = D.filter((e) => null != e.tags && e.tags.integration_id === i.id).map((e) => e.id);
            return i.enable_emoticons
                ? e
                      .filter((e) => null != i.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, D, i.enable_emoticons, i.id, i.role_id]);
    if (
        (s.useEffect(() => {
            a?.id === i.id && a?.enabled === !0 && p(!1);
        }, [a, i.id]),
        i.enabled && null != i.user)
    )
        t = [
            {
                icon: C.ClockIcon,
                text: f
                    ? Z.intl.formatToPlainString(Z.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(i.id) })
                    : Z.intl.formatToPlainString(Z.t.Nu9sat, {
                          user: null != i.user ? new eC.A(i.user).tag : null,
                          timestamp: ec.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(k);
        t = [
            {
                text: Z.intl.format(Z.t.BegylZ, {
                    serviceName: y,
                    accountUrl: k,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let B = (0, l.jsxs)(g.A, {
            className: ts.wx,
            align: g.A.Align.CENTER,
            children: [
                (0, l.jsx)(ex, { name: `${i.name}`, detailsClassName: ts.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eW.A, { className: ts.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(e9.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: te.RefreshIcon,
                                    "aria-label": Z.intl.string(Z.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(O.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: j,
                                    text: Z.intl.string(Z.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        H = null;
    return (
        r &&
            !x &&
            null != a &&
            (H = (0, l.jsxs)(g.A, {
                className: ts.rf,
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(S.c, { className: ts.fV }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: i,
                            descriptionText: s,
                            roleLink: a,
                            onSync: r,
                        } = e;
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsxs)(g.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: ta.QB,
                                            children: Z.intl.string(Z.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(I.E, {
                                            className: ts.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(g.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-sm/semibold",
                                            className: ta.QB,
                                            children: n,
                                        }),
                                        (0, l.jsxs)(g.A, {
                                            justify: g.A.Justify.BETWEEN,
                                            children: [
                                                (0, l.jsxs)(g.A, {
                                                    direction: g.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, l.jsx)(I.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: i,
                                                        }),
                                                        (0, l.jsx)(I.E, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, l.jsx)(e9.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: te.RefreshIcon,
                                                          "aria-label": Z.intl.string(Z.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(O.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: Z.intl.string(Z.t.BkuOO6),
                                                          disabled: t.revoked,
                                                          onClick: r,
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: R,
                        subscribersText: M,
                        descriptionText: G,
                        roleLink: W,
                        onSync: E,
                    }),
                    (0, l.jsx)(S.c, { className: ts.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eM.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: e6.F.REMOVE_ROLE.toString(),
                                                label: Z.intl.string(Z.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: e6.F.KICK.toString(),
                                                label: Z.intl.string(Z.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eM.l, {
                                        selectionMode: "single",
                                        label: Z.intl.string(Z.t.uiXMow),
                                        placeholder: Z.intl.string(Z.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(e7)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: Z.intl.formatToPlainString(Z.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: L,
                        onBehaviorChange: function (e) {
                            u.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !b &&
                        a.expire_behavior === e6.F.KICK &&
                        (0, l.jsx)(I.E, {
                            className: ts.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.mThMlB),
                        }),
                    i.type === e4.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(g.A, {
                                  direction: g.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: _()(ta.QX, ta.QB),
                                          children: (0, l.jsx)(tt.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => i(e),
                                              label: Z.intl.string(Z.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, l.jsx)(g.A, {
                                          wrap: g.A.Wrap.WRAP,
                                          className: ts.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, l.jsx)(
                                                  em.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, l.jsx)(
                                                          "img",
                                                          {
                                                              alt: Z.intl.formatToPlainString(Z.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: _()(ts.Zg, "emoji", "jumboable"),
                                                              src: eo.Ay.getEmojiURL({
                                                                  id: e.id,
                                                                  animated: e.animated,
                                                                  size: 28,
                                                              }),
                                                          },
                                                          e.name,
                                                      ),
                                                  },
                                                  t,
                                              ),
                                          ),
                                      }),
                                  ],
                              });
                          })({
                              integration: a,
                              emojis: U,
                              onToggle: function (e) {
                                  u.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, l.jsx)(S.c, { className: ts.Bd }),
                    (0, l.jsx)(g.A, {
                        children: (0, l.jsx)(O.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: Z.intl.string(Z.t.M6q6eX),
                            onClick: N,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(T.Z, {
            editable: !0,
            className: ts.Nr,
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    i.enabled
                        ? (0, l.jsx)(Y.D, { className: ts._S, "aria-expanded": r && !x, onClick: d, children: B })
                        : B,
                    H,
                ],
            }),
        })
    );
}
var to = n(260294);
function tc(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: i,
            platformType: a,
            labelText: r,
            descriptionText: o,
            helpText: c,
            errors: d,
            canNavigate: m,
        } = e,
        g = e1.A.get(a),
        h = s.useCallback(
            async (e) => {
                m() && (await w.default.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), w.default.disableIntegration(i.id, e.id));
            },
            [m, n, i.id],
        ),
        p = s.useCallback(
            (e) => {
                m() && (e === n?.id ? u.A.stopEditingIntegration() : u.A.startEditingIntegration(e));
            },
            [m, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: to.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(S.c, { className: to.zN }),
            "message" in d &&
                (0, l.jsx)(I.E, {
                    className: to.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: d.message,
                }),
            t.map((e) =>
                (0, l.jsx)(
                    tr,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: i,
                        isExpanded: n?.id === e.id,
                        onEnable: h,
                        onDisable: x,
                        onToggleExpand: () => p(e.id),
                    },
                    e.id,
                ),
            ),
            (0, l.jsx)(I.E, { className: to.BK, color: "text-muted", variant: "text-sm/normal", children: c }),
        ],
    });
}
var td = n(462887),
    tu = n(736653),
    tm = n(945235);
function tg(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        d = (0, tu.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-sm/normal",
                children: Z.intl.format(Z.t["5u+aV1"], {
                    helpdeskArticle: b.A.getArticleURL(eG.MVz.CHANNEL_FOLLOWING),
                }),
            }),
            (0, l.jsx)(S.c, { className: tm.zN }),
            i.length > 0
                ? (0, l.jsx)(eX, {
                      webhooks: i,
                      editedWebhook: s,
                      selectableWebhookChannels: a,
                      errors: r,
                      canNavigate: o,
                  })
                : ((t = () => open(b.A.getArticleURL(eG.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, td.M)(d) ? "/assets/a29cabf3e1357986.svg" : "/assets/c733a28e6fcba3ef.svg"),
                  (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tm.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: Z.intl.string(Z.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tm.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: Z.intl.string(Z.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var th = n(22231),
    tx = n(429913),
    tp = n(713654),
    tA = n(769015),
    tf = n(887501),
    tb = n(514810),
    tj = n(43105),
    tN = n(872162),
    tE = n(320448),
    tC = n(666860),
    tv = n(264322),
    tT = n(174459),
    tI = n(320426),
    tS = n(187679);
function ty(e) {
    let {
            name: t,
            icon: n,
            imageSrc: i,
            iconBackgroundColor: a,
            iconClassName: r,
            iconWrapperClassName: c,
            details: d,
            integration: u,
            buttonText: m,
            buttonDisabled: g,
            hasNextSection: h,
            onButtonClick: p,
            guildId: A,
            isScrolling: f,
            canShowMigrationTooltip: b,
            trailing: N,
        } = e,
        [E, C] = s.useState(!1),
        v = b && !f && !E && void 0 !== A && null != u,
        S = s.useRef(null),
        L = s.useRef(null),
        w =
            null == m || null == p
                ? null
                : h
                  ? (0, l.jsxs)(eu.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: L,
                        children: [
                            (0, l.jsx)(I.E, { variant: "text-sm/normal", children: m }),
                            (0, l.jsx)(tE._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: tS.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(O.$, { size: "sm", buttonRef: S, disabled: g, onClick: p, text: m });
    s.useEffect(() => {
        v &&
            tT.default.track(eG.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tC.H$)(A),
                application_id: u?.application.id,
                location: "overview",
            });
    }, [A, u?.application.id, v]);
    let M =
            v && (null != L.current || null != S.current)
                ? (0, l.jsx)(tj.A, {
                      targetElementRef: h ? L : S,
                      title: Z.intl.string(Z.t.ufFDiC),
                      body: Z.intl.string(Z.t.TyMJwC),
                      onRequestClose: () => {
                          (C(!0), tI.A.dismissOverviewTooltip(A, u.integration));
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        P = (0, o.yK)([x.A], () =>
            null != u && null != A ? (x.A.getApplicationEntitlementsForGuild(u.application.id, A) ?? []) : [],
        ),
        W = (0, tv.ON)(A, !0),
        G = u?.application != null && Object.keys(W.result?.sections[u.application.id]?.commands ?? {}).length > 0,
        D = (0, l.jsxs)(eu.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(ex, {
                    name: t,
                    icon: n,
                    imageSrc: i,
                    iconBackgroundColor: a,
                    iconClassName: r,
                    iconWrapperClassName: c,
                    details: d,
                    isPremium: P.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            null != i.bot &&
                                s?.scopes?.includes(j.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new eC.A(i.bot).isVerifiedBot()
                                        ? Z.intl.string(Z.t.xxcTGy)
                                        : Z.intl.string(Z.t.AOdOYr),
                                    icon: y.RobotIcon,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: Z.intl.formatToPlainString(Z.t["6HqDfT"], { count: a.length }),
                                    icon: k.X,
                                }),
                            s?.scopes?.includes(j.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: Z.intl.string(Z.t["0hKkS+"]), icon: R.k }),
                            (0, l.jsx)(eu.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tN.C, {
                                    label: Z.intl.string(Z.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(u, G),
                }),
                M,
                w,
                N,
            ],
        });
    return h
        ? (0, l.jsx)(Y.D, {
              onClick: () => {
                  (b && null != A && null != u && tI.A.dismissOverviewTooltip(A, u.integration), p?.());
              },
              children: (0, l.jsx)(T.Z, { editable: !0, className: _()(tS.Nr, tS.vk), children: D }),
          })
        : (0, l.jsx)(T.Z, { editable: !0, className: tS.Nr, children: D });
}
function tk(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tb.N)(t),
        c = s.useCallback(
            () =>
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("243486"), n.e("673380")]).then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        d = a ? (i.getIconURL(48) ?? eo.vI["0"]) : void 0;
    return (0, l.jsx)(ty, { imageSrc: d, onButtonClick: c, details: null != o ? [{ text: o }] : void 0, ...r });
}
var tO = n(577020);
function tL(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tx.h)(t);
    return 0 === n.length || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: tO.kF,
              children: [
                  (0, l.jsxs)("div", {
                      className: tO.wx,
                      children: [
                          (0, l.jsx)(tA.A, { game: i, size: tA.M.XSMALL }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: i?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          tk,
                          {
                              channel: e,
                              application: i,
                              name: (0, ey.m1)(e, eO.default, ek.A),
                              icon: (0, tp.gU)(e) ?? void 0,
                              iconWrapperClassName: tO.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(th.PencilIcon, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function tw(e) {
    let { guild: t } = e,
        n = (0, tf.A)(t.id),
        i = r().groupBy(n, (e) => e.linkedLobby?.application_id),
        a = Object.keys(i);
    return (
        s.useEffect(() => {
            0 === n.length && u.A.setSection(eG.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(I.E, {
                    variant: "text-sm/normal",
                    children: Z.intl.format(Z.t["9gsSLu"], {
                        helpdeskArticle: b.A.getArticleURL(eG.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(S.c, { className: tO.zN }),
                a.map((e) => (0, l.jsx)(tL, { applicationId: e, channels: i[e] }, e)),
            ],
        })
    );
}
var tR = n(91871),
    tM = n.n(tR),
    t_ = n(881636),
    tP = n(184940),
    tW = n(289873),
    tG = n(398590),
    tD = n(837057),
    tU = n(310419),
    tB = n(526132),
    tH = n(95701),
    tz = n(30370),
    tV = n(381616),
    tK = n(488995),
    tF = n(638594);
function tY(e, t) {
    return t.includes(e);
}
function tq(e) {
    let { query: t, setQuery: n } = e,
        i = s.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, l.jsx)("div", {
        className: tF.MT,
        children: (0, l.jsx)(B.I, {
            query: t,
            onChange: i,
            onClear: function () {
                return n("");
            },
            placeholder: Z.intl.string(Z.t["5prvKe"]),
            "aria-label": Z.intl.string(Z.t["5prvKe"]),
        }),
    });
}
function tQ(e) {
    var t, n, i, a;
    let r,
        d,
        u,
        h,
        x,
        p,
        f,
        j,
        N,
        v,
        y,
        O,
        L,
        {
            guild: w,
            channel: R,
            applicationIntegrations: M,
            builtInIntegrations: _,
            customWebhooks: P,
            followedChannelWebhooks: W,
            isLoadingWebhooks: G,
            canCreateWebhook: D,
            onManageBuiltIn: U,
            onManageCustomWebhooks: B,
            onManageFollowedChannels: H,
            onManageApplication: z,
            onManageLobbiesLinked: V,
        } = e,
        K = (0, tu.Ay)(),
        [F, Y] = s.useState(""),
        { isFetchingConnections: q, accounts: Q } = (0, o.cf)(
            [tz.A],
            () => ({ isFetchingConnections: tz.A.isFetching(), accounts: tz.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: J, canManageGuild: X } = (0, o.cf)(
            [A.A],
            () => ({
                canManageWebhooks:
                    (null != w && A.A.can(eG.xBc.MANAGE_WEBHOOKS, w)) ||
                    (null != R && A.A.can(eG.xBc.MANAGE_WEBHOOKS, R)),
                canManageGuild: null != w && null == R && A.A.can(eG.xBc.MANAGE_GUILD, w),
            }),
            [w, R],
        ),
        $ = (0, tB.e)(R),
        ee = (0, tx.h)(R?.linkedLobby?.application_id),
        et = (0, tf.A)(w?.id),
        {
            availableTwitchIntegrations: en,
            availableYoutubeIntegrations: ei,
            guildTwitchIntegrations: el,
            guildYoutubeIntegrations: es,
        } = s.useMemo(
            () => ({
                availableTwitchIntegrations: _.twitch?.length ?? 0,
                availableYoutubeIntegrations: _.youtube?.length ?? 0,
                guildTwitchIntegrations: _.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: _.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [_.twitch, _.youtube],
        ),
        { showTwitchCard: ea, showYoutubeCard: er } = s.useMemo(() => {
            if (q || !X) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = w?.features.has(eG.GuildFeatures.COMMUNITY),
                t = Q.filter((e) => e.type === eG.fg2.TWITCH).length > 0,
                n = Q.filter((e) => e.type === eG.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: en > 0 || (!t && e), showYoutubeCard: ei > 0 || (!n && e) };
        }, [q, X, w, Q, en, ei]),
        eu = Object.values(M).length,
        em = s.useMemo(() => {
            let e = eu > 100 ? tY : tM();
            return Object.values(M).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = F).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [M, eu, F]),
        eg = (0, o.bG)(
            [tV.A],
            () => {
                if (null != w) return em.find((e) => tV.A.canShowOverviewTooltip(w.id, e.integration.id));
            },
            [em, w],
        ),
        eh = s.useMemo(
            () => (void 0 !== eg ? [eg, ...em.filter((e) => e.integration.id !== eg.integration.id)] : em),
            [em, eg],
        ),
        ex = (0, E.useModalsStore)(E.hasAnyModalOpenSelector),
        [ep, eA] = s.useState(!1),
        ef = s.useRef(0);
    function eb() {
        (eA(!0),
            clearTimeout(ef.current),
            (ef.current = setTimeout(() => {
                eA(!1);
            }, 200)));
    }
    s.useEffect(() => (window.addEventListener("scroll", eb, !0), () => window.removeEventListener("scroll", eb)));
    let ej = eh.map((e) => {
        let t = !ex && e.integration.id === eg?.integration.id;
        return (function (e, t, n, i, s) {
            let { application: a, integration: r } = t,
                o = [];
            return (
                null != r.user
                    ? o.push({
                          icon: C.ClockIcon,
                          text: Z.intl.formatToPlainString(Z.t.Nu9sat, {
                              timestamp: ec.default.extractTimestamp(r.id),
                              user: ed.Ay.getUserTag(r.user),
                          }),
                      })
                    : o.push({
                          icon: C.ClockIcon,
                          text: Z.intl.formatToPlainString(Z.t.gcdJ8J, {
                              timestamp: ec.default.extractTimestamp(r.id),
                          }),
                      }),
                (0, l.jsx)(
                    ty,
                    {
                        name: a.name,
                        imageSrc: eo.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                        integration: t,
                        buttonText: Z.intl.string(Z.t["Z/qRnM"]),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            (n(a.id),
                                tT.default.track(eG.HAw.APP_MANAGE_CTA_CLICKED, {
                                    application_id: a.id,
                                    guild_id: e?.id,
                                    is_admin: null != e ? A.A.can(eG.xBc.ADMINISTRATOR, e) : void 0,
                                }));
                        },
                        details: o,
                        guildId: e?.id,
                        isScrolling: i,
                        canShowMigrationTooltip: s,
                    },
                    `integration-${r.id}`,
                )
            );
        })(w, e, z, ep, t);
    });
    0 === ej.length &&
        X &&
        ((t = w?.id),
        (r = (0, td.M)(K) ? "/assets/35c8990288849b40.svg" : "/assets/9d2bd46b521600c7.svg"),
        (d = (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            align: g.A.Align.CENTER,
            className: tF.Kl,
            children: [
                (0, l.jsx)("img", { alt: "", src: r, className: tF.s1 }),
                (0, l.jsx)(T.Z, {
                    editable: !0,
                    className: tF.$N,
                    children: (0, l.jsx)(I.E, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: Z.intl.string(Z.t.EVWFNr),
                    }),
                }),
            ],
        })),
        (u = (0, l.jsx)(T.Z, {
            editable: !0,
            className: tF.$N,
            children: (0, l.jsxs)("div", {
                className: tF.q6,
                children: [
                    (0, l.jsx)("img", { alt: "", src: "/assets/48b60325911c81e0.svg", className: tF.QT }),
                    (0, l.jsx)(c.D, {
                        color: "text-default",
                        variant: "heading-xl/bold",
                        children: Z.intl.string(Z.t.nQQeFM),
                    }),
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: Z.intl.format(Z.t.snvKU3, {
                            handleGoToAppDirectory: function () {
                                ((0, tD.transitionToGlobalDiscovery)({
                                    tab: tK.GlobalDiscoveryTab.APPS,
                                    newSessionState: {
                                        entrypoint: { name: tU.sW.GUILD_INTEGRATION_SETTINGS },
                                        guildId: t,
                                    },
                                }),
                                    (0, tG.jH)());
                            },
                        }),
                    }),
                ],
            }),
        })),
        (ej = eu > 0 ? d : u));
    let eN = b.A.getArticleURL(eG.MVz.INTEGRATIONS),
        eE = null != R ? Z.t.YV0vh6 : Z.t.FnZEJs,
        eC = [];
    if (J) {
        let e, t, s, a, r;
        (eC.push(
            ((n = P.length),
            n > 0 ? (t = (0, l.jsx)(t_.u, { size: "xs" })) : (e = Z.intl.string(Z.t.lOQqJK)),
            (0, l.jsx)(
                ty,
                {
                    name: Z.intl.string(Z.t.xOg4SP),
                    icon: k.X,
                    buttonText: e,
                    buttonDisabled: !D,
                    trailing: t,
                    onButtonClick: B,
                    hasNextSection: n > 0,
                    details: [{ text: Z.intl.formatToPlainString(Z.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            (null == R || tH.XD.has(R.type) || W.length > 0) &&
                eC.push(
                    ((i = W.length),
                    i > 0
                        ? ((r = (0, l.jsx)(t_.u, { size: "xs" })), (a = H))
                        : ((s = Z.intl.string(Z.t["ZwSt+T"])),
                          (a = () => open(b.A.getArticleURL(eG.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        ty,
                        {
                            name: Z.intl.string(Z.t.OrV60r),
                            icon: tP._,
                            buttonText: s,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: i > 0,
                            details: [{ text: Z.intl.formatToPlainString(Z.t.JUNGIZ, { count: i }) }],
                        },
                        "channels-followed",
                    )),
                ));
    }
    (null == R &&
        et.length > 0 &&
        eC.push(
            ((a = et.length),
            (0, l.jsx)(
                ty,
                {
                    name: Z.intl.string(Z.t.tqtDXC),
                    icon: te.RefreshIcon,
                    trailing: (0, l.jsx)(t_.u, { size: "xs" }),
                    onButtonClick: V,
                    hasNextSection: !0,
                    details: [{ text: Z.intl.formatToPlainString(Z.t["puxS4+"], { count: a }) }],
                },
                "channels-syncing",
            )),
        ),
        ea &&
            eC.push(
                ((j = e1.A.get(eG.fg2.TWITCH)),
                en > 0
                    ? ((f = (0, l.jsx)(t_.u, { size: "xs" })),
                      (x = Z.intl.formatToPlainString(Z.t.FFpnT8, { count: el })),
                      (p = () => U(eG.fg2.TWITCH)))
                    : ((h = Z.intl.string(Z.t.bkvGkn)),
                      (x = Z.intl.string(Z.t.Qq3X2M)),
                      (p = () => (0, m.A)({ platformType: eG.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    ty,
                    {
                        name: Z.intl.string(Z.t.q4pBG3),
                        icon: j.icon.whiteSVG,
                        iconBackgroundColor: j.color,
                        iconClassName: tF.tV,
                        buttonText: h,
                        onButtonClick: p,
                        trailing: f,
                        hasNextSection: en > 0,
                        details: [{ text: x }],
                    },
                    "integrations-twitch",
                )),
            ),
        er &&
            eC.push(
                ((L = e1.A.get(eG.fg2.YOUTUBE)),
                ei > 0
                    ? ((O = (0, l.jsx)(t_.u, { size: "xs" })),
                      (v = Z.intl.formatToPlainString(Z.t.b2g5vC, { count: es })),
                      (y = () => U(eG.fg2.YOUTUBE)))
                    : ((N = Z.intl.string(Z.t.xEyQ3X)),
                      (v = Z.intl.string(Z.t.T0ivgQ)),
                      (y = () => (0, m.A)({ platformType: eG.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    ty,
                    {
                        name: Z.intl.string(Z.t.aS6cK4),
                        icon: L.icon.whiteSVG,
                        iconBackgroundColor: L.color,
                        iconClassName: tF.tV,
                        buttonText: N,
                        onButtonClick: y,
                        trailing: O,
                        hasNextSection: ei > 0,
                        details: [{ text: v }],
                    },
                    "integrations-youtube",
                )),
            ));
    let ev = null != R && $ && null != ee;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.E, { variant: "text-sm/normal", children: Z.intl.format(eE, { helpdeskArticle: eN }) }),
            (0, l.jsx)(S.c, { className: tF.yF }),
            G || q || null == w
                ? (0, l.jsx)(tW.y, { className: tF.__invalid_spinner, type: tW.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          eC,
                          ev &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      eC.length > 0 ? (0, l.jsx)(S.c, { className: tF.yF }) : null,
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-md/semibold",
                                          className: tF.bV,
                                          children: Z.intl.string(Z.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tk, {
                                          channel: R,
                                          application: ee,
                                          showApplicationImage: !0,
                                          name: ee.name,
                                          hasNextSection: !0,
                                          iconClassName: tF.d0,
                                          trailing: (0, l.jsx)(th.PencilIcon, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        eC.length > 0 || ev ? (0, l.jsx)(S.c, { className: tF.yF }) : null,
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: tF.bV,
                                            children: Z.intl.string(Z.t.pUBKht),
                                        }),
                                        eu > 4 ? (0, l.jsx)(tq, { query: F, setQuery: Y }) : null,
                                        ej,
                                    ],
                                })
                              : null,
                      ],
                  }),
        ],
    });
}
var tJ = n(964486),
    tZ = n(580807);
function tX(e) {
    let t,
        {
            guild: n,
            channel: i,
            customWebhooks: a,
            editedWebhook: r,
            selectableWebhookChannels: o,
            refToScroller: d,
            errors: u,
            canNavigate: m,
        } = e,
        [h, x] = s.useState(null);
    if (null != i) t = i;
    else {
        let e = Object.values(o);
        t = e.length > 0 ? e[0] : null;
    }
    let p = s.useCallback(async () => {
        if (m() && null !== t) {
            let e = await eP.A.create(n.id, t.id);
            null != e && x(e);
        }
    }, [m, t, n]);
    (0, tJ.Ay)(() => {
        0 === a.length && p();
    });
    let A = null !== t;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-sm/normal",
                children: Z.intl.format(Z.t.WL0d0e, {
                    helpdeskArticle: b.A.getArticleURL(eG.MVz.WEBHOOKS),
                    developersArticle: eG.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, l.jsx)(S.c, { className: tZ.zN }),
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tZ.Tf,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: Z.intl.string(Z.t["nrO/HH"]),
                                  disabled: !A,
                                  onClick: p,
                              }),
                          }),
                          (0, l.jsx)(eX, {
                              webhooks: a,
                              editedWebhook: r,
                              selectableWebhookChannels: o,
                              lastCreatedWebhookId: h?.id,
                              errors: u,
                              canNavigate: m,
                          }),
                      ],
                  })
                : (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: Z.intl.string(Z.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tZ.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: Z.intl.string(Z.t.lOQqJK),
                                  disabled: !A,
                                  onClick: p,
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
n(46121);
var t$ = n(494192);
function t0(e, t) {
    switch (e) {
        case eG.wLn.APPLICATION:
            return t?.application.name ?? "";
        case eG.wLn.OVERVIEW:
            return Z.intl.string(Z.t.s69NLF);
        case eG.wLn.CHANNEL_FOLLOWING:
            return Z.intl.string(Z.t.OrV60r);
        case eG.wLn.TWITCH:
            return Z.intl.string(Z.t.q4pBG3);
        case eG.wLn.WEBHOOKS:
            return Z.intl.string(Z.t.xOg4SP);
        case eG.wLn.YOUTUBE:
            return Z.intl.string(Z.t.aS6cK4);
        case eG.wLn.LOBBIES_LINKED:
            return Z.intl.string(Z.t.tqtDXC);
        default:
            return "";
    }
}
let t2 = s.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: i,
            channel: a,
            integrations: j,
            editedIntegration: N,
            webhooks: E,
            editedWebhook: C,
            isFetchingWebhooks: v,
            refToScroller: T,
            errors: I,
            hasChanges: S,
        } = e,
        y = (0, o.bG)([p.Ay], () => (null != i ? p.Ay.getDefaultChannel(i.id) : null)),
        k = (0, o.cf)([p.Ay], () => p.Ay.getChannels(i?.id)),
        O = (0, o.cf)([A.A], () =>
            r().keyBy(
                k.SELECTABLE.map((e) => e.channel).filter((e) => A.A.can(eG.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        L = (0, o.cf)([A.A], () =>
            r().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && A.A.can(eG.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        w = a ?? y,
        R = t === eG.wLn.APPLICATION ? n : null,
        [M, _] = s.useState(1.4),
        P = s.useCallback(
            () =>
                S()
                    ? (f._.dispatch(eG.jej.SHAKE_APP, { duration: 300, intensity: M }),
                      _(Math.min(M + 2, 15)),
                      f._.dispatch(eG.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (_(1.4), !0),
            [S, M],
        ),
        W = s.useCallback((e) => !!P() && (u.A.setSection(e), !0), [P]),
        {
            applicationIntegrations: G,
            applicationBotIds: D,
            builtInIntegrations: U,
            customWebhooks: B,
            followedChannelWebhooks: H,
        } = s.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                l = [];
            if (null != j)
                for (let i of j)
                    "discord" === i.type
                        ? null != i.application &&
                          ((e[i.application.id] = { application: i.application, integration: i, webhooks: [] }),
                          i.application.bot?.id !== void 0 && (t[i.application.bot.id] = i.application.id))
                        : (i.type in n || (n[i.type] = []), n[i.type].push(i));
            for (let t of E)
                (t.channel_id in O || t.channel_id in L) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === eG.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [j, O, L, E]);
    (s.useEffect(() => {
        if (!v)
            switch (t) {
                case eG.wLn.TWITCH:
                    null == U[eG.fg2.TWITCH] && u.A.setSection(eG.wLn.OVERVIEW);
                    break;
                case eG.wLn.YOUTUBE:
                    null == U[eG.fg2.YOUTUBE] && u.A.setSection(eG.wLn.OVERVIEW);
                    break;
                case eG.wLn.APPLICATION:
                    (null != R && (R in D || R in G)) || u.A.setSection(eG.wLn.OVERVIEW);
            }
    }, [G, D, U, R, t, v]),
        s.useEffect(() => {
            i?.id == null || (x.A.getEntitlementsForGuildFetchState(i.id) === x.e.NOT_FETCHED && h.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(eG.wLn.OVERVIEW, null);
            },
            [],
        ));
    let z = null;
    switch (t) {
        case eG.wLn.TWITCH:
            null != U[eG.fg2.TWITCH] &&
                (z = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: U[eG.fg2.TWITCH],
                    editedIntegration: N,
                    labelText: Z.intl.string(Z.t.q4pBG3),
                    platformType: eG.fg2.TWITCH,
                    descriptionText: Z.intl.string(Z.t.V9kNqt),
                    helpText: Z.intl.format(Z.t.ro1jEN, {
                        connectAction: () =>
                            (0, m.A)({ platformType: eG.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: b.A.getArticleURL(eG.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eG.wLn.YOUTUBE:
            null != U[eG.fg2.YOUTUBE] &&
                (z = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: U[eG.fg2.YOUTUBE],
                    editedIntegration: N,
                    labelText: Z.intl.string(Z.t.aS6cK4),
                    platformType: eG.fg2.YOUTUBE,
                    descriptionText: Z.intl.string(Z.t["7Tv7JK"]),
                    helpText: Z.intl.format(Z.t["4OSAQ9"], {
                        connectAction: () => (0, m.A)({ platformType: eG.fg2.YOUTUBE }),
                        helpdeskArticle: b.A.getArticleURL(eG.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eG.wLn.APPLICATION:
            let V = null != R ? (G[D[R]] ?? G[R]) : null;
            null != V &&
                (z = (0, l.jsx)(e2, {
                    guild: i,
                    applicationIntegration: V,
                    editedWebhook: C,
                    selectableWebhookChannels: O,
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eG.wLn.CHANNEL_FOLLOWING:
            z = (0, l.jsx)(tg, {
                followedChannelWebhooks: H,
                editedWebhook: C,
                selectableWebhookChannels: O,
                canNavigate: P,
                errors: I,
            });
            break;
        case eG.wLn.WEBHOOKS:
            z = (0, l.jsx)(tX, {
                guild: i,
                channel: a,
                customWebhooks: B,
                editedWebhook: C,
                selectableWebhookChannels: { ...O, ...L },
                canNavigate: P,
                refToScroller: T,
                errors: I,
            });
            break;
        case eG.wLn.LOBBIES_LINKED:
            z = (0, l.jsx)(tw, { guild: i });
            break;
        default:
            z = (0, l.jsx)(tQ, {
                guild: i,
                channel: a,
                applicationIntegrations: G,
                builtInIntegrations: U,
                customWebhooks: B,
                followedChannelWebhooks: H,
                isLoadingWebhooks: v || null == i,
                canCreateWebhook: null != w,
                onManageCustomWebhooks: () => {
                    u.A.setSection(eG.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(eG.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(eG.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case eG.fg2.TWITCH:
                            u.A.setSection(eG.wLn.TWITCH);
                            break;
                        case eG.fg2.YOUTUBE:
                            u.A.setSection(eG.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(eG.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.A, {
                align: g.A.Align.CENTER,
                className: t$.jD,
                children:
                    t === eG.wLn.OVERVIEW
                        ? (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t0(eG.wLn.OVERVIEW) })
                        : (0, l.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [eG.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: t0(e, G[R]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && W(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(c.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? t$.q3 : t$.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            z,
        ],
    });
});
