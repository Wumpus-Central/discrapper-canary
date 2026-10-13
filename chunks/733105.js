(n.d(t, { A: () => t8 }), n(321073));
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
    w = n(298702),
    R = n(266990),
    M = n(468689),
    _ = n(633018),
    P = n(503698),
    W = n.n(P),
    D = n(178686);
function G(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: D.wx,
        children: [
            (0, l.jsxs)("div", {
                className: D.UU,
                children: [
                    s.cloneElement(n, { className: W()(n.props.className, D.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: D.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var U = n(542580),
    B = n(803378),
    H = n(825453),
    z = n(683438),
    V = n(485845),
    K = n(155718),
    F = n(633334);
function Y(e) {
    return { id: e.id, names: [e.displayName] };
}
var q = n(261958),
    Q = n(939249),
    J = n(885574),
    Z = n(442433),
    X = n(200662),
    $ = n(660183),
    ee = n(634968);
function et(e) {
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
                (0, Z.L3)(e, async () => {
                    let { default: e } = await n.e("715687").then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: $.intl.string($.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === K.kc.CHAT ? _.k : q.u,
        g = (0, X.p6)(r.type, r.displayName);
    return (0, l.jsxs)(Q.D, {
        onClick: d,
        className: ee.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: ee.Cv,
                children: [
                    (0, l.jsx)(m, { className: ee.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(I.E, { variant: "text-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ee.II,
                children: c
                    ? (0, l.jsxs)("div", {
                          className: ee.Bs,
                          children: [
                              (0, l.jsx)(I.E, { variant: "text-md/normal", children: $.intl.string($.t.jH4B9O) }),
                              (0, l.jsx)(J.CircleInformationIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: ee.I8,
                              }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
var en = n(636547),
    ei = n(747414);
function el(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: i, guildId: a } = e,
        {
            results: r,
            query: c,
            setQuery: d,
            unfilteredCount: u,
        } = (function () {
            let e = (0, o.cf)([B.A], () => Object.values(B.A.getCommands() ?? {})),
                [t, n] = s.useState(""),
                i = s.useMemo(
                    () =>
                        e.filter(
                            (e) =>
                                (null == e.integration_types || e.integration_types.includes(V.b.GUILD_INSTALL)) &&
                                (null == e.contexts || e.contexts?.includes(K.OL.GUILD)),
                        ),
                    [e],
                ),
                l = s.useMemo(
                    () =>
                        [...i].sort((e, t) => {
                            let n = K.kc.CHAT + 1,
                                i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                            return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                        }),
                    [i],
                ),
                a = s.useMemo(() => (t.startsWith("/") ? l.filter((e) => e.type === K.kc.CHAT) : l), [t, l]),
                r = s.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
            return {
                query: t,
                results: s.useMemo(() => (0, F.I)(a, Y, r), [a, r]),
                setQuery: n,
                unfilteredCount: e.length,
            };
        })();
    return null != r && u > 0
        ? (0, l.jsx)(en.A, {
              bar: (0, l.jsx)(z.I, { size: "sm", query: c, onChange: d, onClear: () => d("") }),
              inModal: !1,
              title: $.intl.string($.t["0hKkS+"]),
              children: r.map((e, o) =>
                  (0, l.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, l.jsx)(et, {
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
              className: ei.a,
              editable: !0,
              children: (0, l.jsx)(I.E, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: $.intl.string($.t["x78c+J"]),
              }),
          });
}
var es = n(534148),
    ea = n(16101);
function er(e) {
    let { application: t, canNavigate: n, guildId: i } = e,
        a = (0, o.bG)([B.A], () => B.A.isUnavailable());
    return (s.useEffect(() => (U.hu(t.id), U.AL), [t.id]),
    s.useEffect(() => {
        (U.gV(t.id, i, t.id), U.Jw(i, t.id));
    }, [t.id, i]),
    a)
        ? null
        : (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(G, {
                      icon: (0, l.jsx)(_.k, { size: "md", color: "currentColor" }),
                      title: $.intl.string($.t.RGoJNN),
                  }),
                  (0, l.jsx)(I.E, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: $.intl.string($.t.sCkD3Z),
                  }),
                  (0, l.jsx)(eo, { guildId: i, applicationId: t.id }),
                  (0, l.jsx)(el, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: i }),
              ],
          });
}
function eo(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: i, editedTargetPermissions: s, selectedPermissionCount: a } = (0, H.A)(n, t);
    return (0, l.jsx)("div", {
        className: ea.zi,
        children: (0, l.jsx)(es.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: i,
            selectedPermissionCount: a,
        }),
    });
}
var ec = n(308244),
    ed = n(486020),
    eu = n(935208),
    em = n(427262),
    eg = n(331322),
    eh = n(866665),
    ex = n(638916),
    ep = n(783734);
function eA(e) {
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
    return (0, l.jsxs)(eg.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != i || null != s
                ? (function (e, t, n, i, s) {
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: W()(ep.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: W()(ep.Kk, i) })
                                      : (0, l.jsx)(e, { className: W()(ep.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: W()(ep.P0, s), children: a })
                      );
                  })(i, s, a, r, o)
                : null,
            (0, l.jsxs)(eg.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: i, detailsClassName: s, isHeader: a, isPremium: r } = e,
                            o = i?.map((e, t) => {
                                let { icon: n, text: i } = e;
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: W()(ep.yM, a ? ep.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: ep.Ul })
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
                        return (0, l.jsxs)(eg.B, {
                            gap: 0,
                            children: [
                                (0, l.jsxs)(c.D, {
                                    variant: a ? "heading-xl/semibold" : "heading-md/medium",
                                    className: a ? ep.wx : ep.K8,
                                    children: [
                                        t,
                                        r &&
                                            (0, l.jsx)(eh.m, {
                                                text: $.intl.string($.t.VFuFum),
                                                children: (0, l.jsx)(ex.q, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: ep.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, l.jsx)(I.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eg.B, { direction: "horizontal", children: o }),
                            ],
                        });
                    })({ name: t, description: n, details: d, detailsClassName: u, isHeader: m, isPremium: g }),
                    h,
                ],
            }),
        ],
    });
}
var ef = n(136722),
    eb = n(452027),
    ej = n(66834),
    eN = n(417454),
    eE = n(595738),
    eC = n(709066),
    ev = n(376092),
    eT = n(889227),
    eI = n(696451),
    eS = n(317525),
    ey = n(70353);
function ek(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = null != i.bot ? new eT.A(i.bot) : null,
        r = (0, o.bG)([eI.Ay], () => (null != a ? eI.Ay.getMember(t.id, a.id) : null), [a, t]),
        c = (0, o.bG)([eS.A], () => eS.A.getEveryoneRole(t)),
        d = (0, o.yK)([eS.A], () => eS.A.getManyRoles(t.id, r?.roles ?? [])),
        u = a?.id;
    s.useEffect(() => {
        null != u && ej.A.requestMembersById(t.id, u);
    }, [t.id, u]);
    let m = s.useMemo(() => ef.kg(c.permissions, ...d.map((e) => e.permissions)), [d, c]);
    if (null == a) return null;
    let h = ed.Ay.getApplicationIconURL({ id: i.id, guildMember: r, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(T.Z, {
        editable: !0,
        className: ey.Nr,
        children: (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(g.A, {
                    align: g.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: h, className: ey.P0 }),
                        (0, l.jsx)(I.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: $.intl.format($.t.GyhzGw, { user: a.toString() }),
                        }),
                        (0, l.jsx)(eC.A, { className: ey.Tc, verified: a.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, i) {
                    let s = [],
                        a = [];
                    for (let e of ev.Q) ef.zy(i, e) ? s.push(e) : a.push(e);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(S.c, { className: ey.yF }),
                            n.length > 0
                                ? (0, l.jsx)(eb.D, {
                                      label: $.intl.format($.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, l.jsx)(eN.Ay, {
                                          className: ey.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            s.length > 0 || a.length > 0
                                ? (0, l.jsx)(eE.A, {
                                      grantedPermissions: s,
                                      grantedPermissionsHeader: $.intl.string($.t["hA4+su"]),
                                      disabledPermissions: a,
                                      disabledPermissionsHeader: $.intl.string($.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(a, t, r?.roles ?? [], m),
            ],
        }),
    });
}
var eO = n(47167),
    eL = n(994500),
    ew = n(287809),
    eR = n(314116),
    eM = n(778492),
    e_ = n(95477),
    eP = n(691885),
    eW = n(123292),
    eD = n(824953),
    eG = n(147925),
    eU = n(652215),
    eB = n(440193);
function eH(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        c = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, ed.ku)({ id: t.id, avatar: e, discriminator: eU.h3J });
        }, [t]),
        d = s.useCallback(() => {
            (0, eR.A)({
                title: $.intl.formatToPlainString($.t.gBKqZ0, { name: t.name }),
                subtitle: $.intl.string($.t.zO9jrD),
                confirmText: $.intl.string($.t.CMy0Cj),
                onConfirm: () => {
                    eD.A.delete(t.guild_id, t.id).catch(() => {
                        L.A.show({ title: $.intl.string($.t.LpbaFV), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        m = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (m.push({ icon: eM.k, text: t.source_channel.name }),
        m.push({
            text: (0, l.jsx)(
                "span",
                {
                    className: eB.lM,
                    children: $.intl.format($.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: eB.VZ, children: t.source_guild.name }, t.id),
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
                className: eB.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eB.fV }),
                    (0, l.jsxs)(eg.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eg.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(e_.k, {
                                        label: $.intl.string($.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(eP.l, {
                                        label: $.intl.string($.t["4TuWfc"]),
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
                            (0, l.jsx)(S.c, { className: eB.Bd }),
                            (0, l.jsx)(eW.Q, {
                                onClick: d,
                                size: "sm",
                                variant: "critical",
                                text: $.intl.string($.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(T.Z, {
            editable: !0,
            className: eB.Nr,
            children: (0, l.jsxs)(eg.B, {
                children: [
                    (0, l.jsx)(Q.D, {
                        className: eB.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eg.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(eA, { name: t.name, imageSrc: c, details: m }),
                                (0, l.jsx)(eG.A, { className: eB.eO, expanded: a, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    g,
                ],
            }),
        })
    );
}
var ez = n(935399),
    eV = n(636537),
    eK = n(451988),
    eF = n(890497),
    eY = n(765178),
    eq = n(342298),
    eQ = n(957565),
    eJ = n(423959);
function eZ(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, ed.ku)({ id: e.id, avatar: t, discriminator: eU.h3J });
}
function eX(e) {
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
        [x] = s.useState(new eK.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let p = s.useRef(null);
    (0, ez.Ay)(() => {
        !0 === o && (u.A.startEditingWebhook(n.id), p.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
    });
    let A = s.useMemo(() => eZ(n, n.avatar), [n]),
        f = s.useCallback(() => {
            let e = `${(0, eV.TP)(!1)}${eU.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eQ.C)(e);
        }, [n]),
        b = s.useCallback(() => {
            (0, eR.A)({
                title: $.intl.formatToPlainString($.t.QVFjHh, { name: n.name }),
                subtitle: $.intl.format($.t["rIWe+5"], { name: n.name }),
                confirmText: $.intl.string($.t["W+K1Fs"]),
                cancelText: $.intl.string($.t.xNhj0O),
                onConfirm: () => {
                    eD.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? L.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t.eAxcCc) })
                            : L.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        j = [];
    null != n.user
        ? j.push({
              icon: C.ClockIcon,
              text: $.intl.formatToPlainString($.t["7EcUbr"], {
                  user: (function (e) {
                      if (null == e) return null;
                      let t = new eT.A(e);
                      return em.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: eu.default.extractTimestamp(n.id),
              }),
          })
        : j.push({
              icon: C.ClockIcon,
              text: $.intl.formatToPlainString($.t["7mv59O"], { timestamp: eu.default.extractTimestamp(n.id) }),
          });
    let N = null;
    return (
        r &&
            null != i &&
            (N = (0, l.jsxs)("div", {
                className: eJ.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eJ.fV }),
                    (0, l.jsxs)(g.A, {
                        children: [
                            (0, l.jsx)(g.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(g.A, {
                                    className: eJ.R3,
                                    direction: g.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eq.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => eZ(n, e),
                                            imageClassName: eJ.mr,
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
                                                children: (0, l.jsx)(e_.k, {
                                                    label: $.intl.string($.t.ukdxuo),
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
                                                    children: (0, l.jsx)(eF.Z, {
                                                        label: $.intl.string($.t.GK18KJ),
                                                        value: i.channel_id,
                                                        options: a,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            u.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: $.intl.string($.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(S.c, { className: eJ.Bd }),
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(eh.m, {
                                                text: $.intl.string($.t.wwdb3g),
                                                shouldShow: m,
                                                hideOnClick: !1,
                                                forceOpen: m,
                                                children: (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: eJ.cL,
                                                    children: (0, l.jsx)(O.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: $.intl.string($.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            (h(!0),
                                                                eY.O.announce($.intl.string($.t.wwdb3g)),
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
                                                text: $.intl.string($.t.jVrUnC),
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
            className: W()(eJ.Nr, o ? eJ.U6 : null),
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(Q.D, {
                        className: eJ.wx,
                        "aria-expanded": r,
                        onClick: d,
                        children: (0, l.jsxs)(g.A, {
                            align: g.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(eA, { name: n.name, imageSrc: A, details: j }),
                                (0, l.jsx)(eG.A, { className: eJ.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    N,
                ],
            }),
        })
    );
}
var e$ = n(140659);
function e0(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: i,
            editedWebhook: a,
            errors: r,
            canNavigate: o,
        } = e,
        c = s.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, eO.m1)(e, ew.default, eL.A, !0) })),
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
        className: e$.__invalid_list,
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
                                className: e$.x,
                                children: $.intl.format($.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: e$.H, children: (0, eO.m1)(t, ew.default, eL.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) =>
                                e.type === eU.NH1.CHANNEL_FOLLOWER
                                    ? (0, l.jsx)(
                                          eH,
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
                                          eX,
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
var e2 = n(248675),
    e1 = n(710135);
function e3(e) {
    let { application: t, guild: n, integration: i, ...s } = e,
        a = (0, w.iD)(n.id, t.id);
    function r() {
        M.A.disableIntegration(n.id, i.id).catch(() => {
            L.A.show({ title: $.intl.string($.t.wYqMmI), body: $.intl.string($.t.A4Mnst) });
        });
    }
    return null != a
        ? (0, l.jsx)(R.BU, { ...s, app: a, confirmText: $.intl.string(e2.default.BGF8VT), onPlainConfirm: r })
        : (0, l.jsx)(N.u, {
              ...s,
              title: $.intl.formatToPlainString($.t["rL9d/1"], { applicationName: t.name }),
              subtitle: $.intl.format($.t.FGE8ya, { applicationName: t.name }),
              confirmText: $.intl.string($.t.ebGf4m),
              onConfirm: r,
          });
}
function e8(e) {
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
                A.A.can(eU.xBc.MANAGE_ROLES, t),
                null == d.bot || A.A.canManageUser(eU.xBc.MANAGE_GUILD, d.bot.id, t),
            ],
            [d.bot, t],
        ),
        p = (0, o.bG)([A.A], () => A.A.can(eU.xBc.MANAGE_WEBHOOKS, t), [t]),
        f = s.useCallback(() => {
            c() && (0, E.openModal)((e) => (0, l.jsx)(e3, { guild: t, application: d, integration: u, ...e }));
        }, [d, c, t, u]),
        b = s.useMemo(() => {
            let e = [
                {
                    icon: C.ClockIcon,
                    text: $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: eu.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: v.UserIcon,
                        text: $.intl.formatToPlainString($.t.qE7oqs, { user: em.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        N = s.useMemo(
            () =>
                null != d.bot && u.scopes?.includes(j.F.BOT)
                    ? (0, l.jsx)(ek, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(T.Z, {
                          className: e1.aM,
                          editable: !0,
                          children: (0, l.jsx)(I.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: $.intl.string($.t.pfLnza),
                          }),
                      }),
            [d.bot, n, t, u.scopes],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA, {
                name: d.name,
                imageSrc: ed.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 }),
                details: b,
                isHeader: !0,
            }),
            d?.description != null ? (0, l.jsx)(ec.A, { userBio: d.description, className: e1.ux }) : null,
            h ? (0, l.jsx)(er, { application: d, canNavigate: c, guildId: t.id }) : null,
            (0, l.jsx)(S.c, { className: e1.zN }),
            null != d.bot
                ? (0, l.jsxs)("div", {
                      className: e1.uW,
                      children: [
                          (0, l.jsx)(G, {
                              icon: (0, l.jsx)(y.RobotIcon, { size: "xs", color: "currentColor" }),
                              title: $.intl.string($.t.AOdOYr),
                          }),
                          N,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: e1.uW,
                children: [
                    (0, l.jsx)(G, {
                        icon: (0, l.jsx)(k.X, { size: "md", color: "currentColor" }),
                        title: $.intl.string($.t["t9ZX/I"]),
                    }),
                    m.length > 0
                        ? (0, l.jsx)(e0, {
                              webhooks: m,
                              editedWebhook: a,
                              selectableWebhookChannels: i,
                              errors: r,
                              canNavigate: c,
                          })
                        : (0, l.jsx)(T.Z, {
                              className: e1.aM,
                              editable: !0,
                              children: (0, l.jsx)(I.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: p ? $.intl.string($.t.ahPd2Y) : $.intl.string($.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(S.c, { className: e1.zN }),
            (0, l.jsxs)(g.A, {
                className: e1.uW,
                justify: g.A.Justify.BETWEEN,
                align: g.A.Align.CENTER,
                children: [
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: x ? $.intl.string($.t.hdneL4) : $.intl.string($.t.xRCMqx),
                    }),
                    (0, l.jsx)(g.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(O.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: $.intl.string($.t.ebGf4m),
                            disabled: !x,
                            onClick: f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e6 = n(573648);
(n(323874), n(14289), n(35956));
var e7 = n(536637),
    e4 = n.n(e7),
    e5 = n(788373),
    e9 =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    te = n(125744),
    tt = n(139033),
    tn = n(408278),
    ti = n(663417),
    tl = n(150934),
    ts = n(28863),
    ta = n(236285),
    tr = n(351906),
    to = n(445884),
    tc = n(221851);
function td(e) {
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
        f = (0, o.bG)([tr.A], () => tr.A.hidePersonalInformation),
        b = (0, o.bG)([A.A], () => A.A.can(eU.xBc.KICK_MEMBERS, n)),
        j = s.useCallback(() => {
            (p(!0), h(i));
        }, [i, h]),
        N = s.useCallback(() => {
            if (!i.syncing)
                if (b || i.expire_behavior !== e5.F.KICK) {
                    let e =
                        i.expire_behavior === e5.F.REMOVE_ROLE
                            ? $.intl.string($.t["6kpw4i"])
                            : $.intl.string($.t.fQUQIJ);
                    (0, eR.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === te.s.YOUTUBE ? $.intl.string($.t.anKQWU) : $.intl.string($.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, tt.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === te.s.YOUTUBE ? $.intl.string($.t.pDCiEf) : $.intl.string($.t.sQqHFk),
                    });
        }, [i, m, b]),
        E = s.useCallback(() => {
            M.A.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        v = s.useCallback(() => {
            null != i.role_id && (M.A.setSection(eU.BEX.ROLES), M.A.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: y,
            channelURL: k,
            expireBehaviorLabel: L,
            syncLabel: w,
            subscribersText: R,
        } = s.useMemo(() => {
            let e = e6.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case te.s.YOUTUBE:
                    return {
                        serviceName: $.intl.string($.t.aS6cK4),
                        expireBehaviorLabel: $.intl.string($.t.A5MiqO),
                        syncLabel: $.intl.string($.t["7vHKVe"]),
                        subscribersText: $.intl.formatToPlainString($.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case te.s.TWITCH:
                default:
                    return {
                        serviceName: $.intl.string($.t.q4pBG3),
                        expireBehaviorLabel: $.intl.string($.t["S/WCrG"]),
                        syncLabel: $.intl.string($.t["0jbPK4"]),
                        subscribersText: $.intl.formatToPlainString($.t.RdUTrl, {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [i.account, i.subscriber_count, i.type]),
        _ = (0, o.bG)([eS.A], () => (null != i.role_id ? eS.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: P, syncDescriptionText: D } = s.useMemo(() => {
            let e;
            e = null != _ ? (0, l.jsx)(ts.Anchor, { onClick: v, children: _.name }) : $.intl.string($.t.PoWNfe);
            let t = e6.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? $.intl.formatToPlainString($.t.G16Wji, { user: i.user, platformName: t.name })
                        : $.intl.formatToPlainString($.t.unl3AP, { datetime: e4()(i.synced_at).calendar() }),
            };
        }, [_, v, i.revoked, i.synced_at, i.type, i.user]),
        G = (0, o.bG)([eS.A], () => eS.A.getSortedRoles(n.id)),
        U = s.useMemo(() => {
            let e = ta.Ay.getGuildEmoji(n.id),
                t = G.filter((e) => null != e.tags && e.tags.integration_id === i.id).map((e) => e.id);
            return i.enable_emoticons
                ? e
                      .filter((e) => null != i.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, G, i.enable_emoticons, i.id, i.role_id]);
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
                    ? $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: eu.default.extractTimestamp(i.id) })
                    : $.intl.formatToPlainString($.t.Nu9sat, {
                          user: null != i.user ? new eT.A(i.user).tag : null,
                          timestamp: eu.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(k);
        t = [
            {
                text: $.intl.format($.t.BegylZ, {
                    serviceName: y,
                    accountUrl: k,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let B = (0, l.jsxs)(g.A, {
            className: to.wx,
            align: g.A.Align.CENTER,
            children: [
                (0, l.jsx)(eA, { name: `${i.name}`, detailsClassName: to.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eG.A, { className: to.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(tn.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: ti.RefreshIcon,
                                    "aria-label": $.intl.string($.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(O.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: j,
                                    text: $.intl.string($.t["7sCN8m"]),
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
                className: to.rf,
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(S.c, { className: to.fV }),
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
                                            className: tc.QB,
                                            children: $.intl.string($.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(I.E, {
                                            className: to.RZ,
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
                                            className: tc.QB,
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
                                                    ? (0, l.jsx)(tn.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: ti.RefreshIcon,
                                                          "aria-label": $.intl.string($.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(O.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: $.intl.string($.t.BkuOO6),
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
                        labelText: w,
                        subscribersText: R,
                        descriptionText: D,
                        roleLink: P,
                        onSync: E,
                    }),
                    (0, l.jsx)(S.c, { className: to.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eP.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: e5.F.REMOVE_ROLE.toString(),
                                                label: $.intl.string($.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: e5.F.KICK.toString(),
                                                label: $.intl.string($.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eP.l, {
                                        selectionMode: "single",
                                        label: $.intl.string($.t.uiXMow),
                                        placeholder: $.intl.string($.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(e9)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: $.intl.formatToPlainString($.t.eGjmy5, { days: e }),
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
                        a.expire_behavior === e5.F.KICK &&
                        (0, l.jsx)(I.E, {
                            className: to.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: $.intl.string($.t.mThMlB),
                        }),
                    i.type === te.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(g.A, {
                                  direction: g.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: W()(tc.QX, tc.QB),
                                          children: (0, l.jsx)(tl.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => i(e),
                                              label: $.intl.string($.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, l.jsx)(g.A, {
                                          wrap: g.A.Wrap.WRAP,
                                          className: to.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, l.jsx)(
                                                  eh.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, l.jsx)(
                                                          "img",
                                                          {
                                                              alt: $.intl.formatToPlainString($.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: W()(to.Zg, "emoji", "jumboable"),
                                                              src: ed.Ay.getEmojiURL({
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
                    (0, l.jsx)(S.c, { className: to.Bd }),
                    (0, l.jsx)(g.A, {
                        children: (0, l.jsx)(O.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: $.intl.string($.t.M6q6eX),
                            onClick: N,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(T.Z, {
            editable: !0,
            className: to.Nr,
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    i.enabled
                        ? (0, l.jsx)(Q.D, { className: to._S, "aria-expanded": r && !x, onClick: d, children: B })
                        : B,
                    H,
                ],
            }),
        })
    );
}
var tu = n(260294);
function tm(e) {
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
        g = e6.A.get(a),
        h = s.useCallback(
            async (e) => {
                m() && (await M.A.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), M.A.disableIntegration(i.id, e.id));
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
            (0, l.jsx)(eA, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: tu.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(S.c, { className: tu.zN }),
            "message" in d &&
                (0, l.jsx)(I.E, {
                    className: tu.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: d.message,
                }),
            t.map((e) =>
                (0, l.jsx)(
                    td,
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
            (0, l.jsx)(I.E, { className: tu.BK, color: "text-muted", variant: "text-sm/normal", children: c }),
        ],
    });
}
var tg = n(462887),
    th = n(736653),
    tx = n(945235);
function tp(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        d = (0, th.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t["5u+aV1"], {
                    helpdeskArticle: b.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING),
                }),
            }),
            (0, l.jsx)(S.c, { className: tx.zN }),
            i.length > 0
                ? (0, l.jsx)(e0, {
                      webhooks: i,
                      editedWebhook: s,
                      selectableWebhookChannels: a,
                      errors: r,
                      canNavigate: o,
                  })
                : ((t = () => open(b.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, tg.M)(d) ? "/assets/a29cabf3e1357986.svg" : "/assets/c733a28e6fcba3ef.svg"),
                  (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tx.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: $.intl.string($.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tx.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: $.intl.string($.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var tA = n(22231),
    tf = n(429913),
    tb = n(713654),
    tj = n(769015),
    tN = n(887501),
    tE = n(514810),
    tC = n(43105),
    tv = n(872162),
    tT = n(320448),
    tI = n(666860),
    tS = n(264322),
    ty = n(174459),
    tk = n(320426),
    tO = n(187679);
function tL(e) {
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
                  ? (0, l.jsxs)(eg.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: L,
                        children: [
                            (0, l.jsx)(I.E, { variant: "text-sm/normal", children: m }),
                            (0, l.jsx)(tT._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: tO.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(O.$, { size: "sm", buttonRef: S, disabled: g, onClick: p, text: m });
    s.useEffect(() => {
        v &&
            ty.default.track(eU.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tI.H$)(A),
                application_id: u?.application.id,
                location: "overview",
            });
    }, [A, u?.application.id, v]);
    let R =
            v && (null != L.current || null != S.current)
                ? (0, l.jsx)(tC.A, {
                      targetElementRef: h ? L : S,
                      title: $.intl.string($.t.ufFDiC),
                      body: $.intl.string($.t.TyMJwC),
                      onRequestClose: () => {
                          (C(!0), tk.A.dismissOverviewTooltip(A, u.integration));
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        M = (0, o.yK)([x.A], () =>
            null != u && null != A ? (x.A.getApplicationEntitlementsForGuild(u.application.id, A) ?? []) : [],
        ),
        P = (0, tS.ON)(A, !0),
        D = u?.application != null && Object.keys(P.result?.sections[u.application.id]?.commands ?? {}).length > 0,
        G = (0, l.jsxs)(eg.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(eA, {
                    name: t,
                    icon: n,
                    imageSrc: i,
                    iconBackgroundColor: a,
                    iconClassName: r,
                    iconWrapperClassName: c,
                    details: d,
                    isPremium: M.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            null != i.bot &&
                                s?.scopes?.includes(j.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new eT.A(i.bot).isVerifiedBot()
                                        ? $.intl.string($.t.xxcTGy)
                                        : $.intl.string($.t.AOdOYr),
                                    icon: y.RobotIcon,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: $.intl.formatToPlainString($.t["6HqDfT"], { count: a.length }),
                                    icon: k.X,
                                }),
                            s?.scopes?.includes(j.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: $.intl.string($.t["0hKkS+"]), icon: _.k }),
                            (0, l.jsx)(eg.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tv.C, {
                                    label: $.intl.string($.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(u, D),
                }),
                R,
                w,
                N,
            ],
        });
    return h
        ? (0, l.jsx)(Q.D, {
              onClick: () => {
                  (b && null != A && null != u && tk.A.dismissOverviewTooltip(A, u.integration), p?.());
              },
              children: (0, l.jsx)(T.Z, { editable: !0, className: W()(tO.Nr, tO.vk), children: G }),
          })
        : (0, l.jsx)(T.Z, { editable: !0, className: tO.Nr, children: G });
}
function tw(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tE.N)(t),
        c = s.useCallback(
            () =>
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("243486"), n.e("673380")]).then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        d = a ? (i.getIconURL(48) ?? ed.vI["0"]) : void 0;
    return (0, l.jsx)(tL, { imageSrc: d, onButtonClick: c, details: null != o ? [{ text: o }] : void 0, ...r });
}
var tR = n(577020);
function tM(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tf.h)(t);
    return 0 === n.length || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: tR.kF,
              children: [
                  (0, l.jsxs)("div", {
                      className: tR.wx,
                      children: [
                          (0, l.jsx)(tj.A, { game: i, size: tj.M.XSMALL }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: i?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          tw,
                          {
                              channel: e,
                              application: i,
                              name: (0, eO.m1)(e, ew.default, eL.A),
                              icon: (0, tb.gU)(e) ?? void 0,
                              iconWrapperClassName: tR.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(tA.PencilIcon, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function t_(e) {
    let { guild: t } = e,
        n = (0, tN.A)(t.id),
        i = r().groupBy(n, (e) => e.linkedLobby?.application_id),
        a = Object.keys(i);
    return (
        s.useEffect(() => {
            0 === n.length && u.A.setSection(eU.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(I.E, {
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["9gsSLu"], {
                        helpdeskArticle: b.A.getArticleURL(eU.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(S.c, { className: tR.zN }),
                a.map((e) => (0, l.jsx)(tM, { applicationId: e, channels: i[e] }, e)),
            ],
        })
    );
}
var tP = n(91871),
    tW = n.n(tP),
    tD = n(881636),
    tG = n(184940),
    tU = n(289873),
    tB = n(398590),
    tH = n(837057),
    tz = n(310419),
    tV = n(526132),
    tK = n(95701),
    tF = n(30370),
    tY = n(381616),
    tq = n(488995),
    tQ = n(638594);
function tJ(e, t) {
    return t.includes(e);
}
function tZ(e) {
    let { query: t, setQuery: n } = e,
        i = s.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, l.jsx)("div", {
        className: tQ.MT,
        children: (0, l.jsx)(z.I, {
            query: t,
            onChange: i,
            onClear: function () {
                return n("");
            },
            placeholder: $.intl.string($.t["5prvKe"]),
            "aria-label": $.intl.string($.t["5prvKe"]),
        }),
    });
}
function tX(e) {
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
            isLoadingWebhooks: D,
            canCreateWebhook: G,
            onManageBuiltIn: U,
            onManageCustomWebhooks: B,
            onManageFollowedChannels: H,
            onManageApplication: z,
            onManageLobbiesLinked: V,
        } = e,
        K = (0, th.Ay)(),
        [F, Y] = s.useState(""),
        { isFetchingConnections: q, accounts: Q } = (0, o.cf)(
            [tF.A],
            () => ({ isFetchingConnections: tF.A.isFetching(), accounts: tF.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: J, canManageGuild: Z } = (0, o.cf)(
            [A.A],
            () => ({
                canManageWebhooks:
                    (null != w && A.A.can(eU.xBc.MANAGE_WEBHOOKS, w)) ||
                    (null != R && A.A.can(eU.xBc.MANAGE_WEBHOOKS, R)),
                canManageGuild: null != w && null == R && A.A.can(eU.xBc.MANAGE_GUILD, w),
            }),
            [w, R],
        ),
        X = (0, tV.e)(R),
        ee = (0, tf.h)(R?.linkedLobby?.application_id),
        et = (0, tN.A)(w?.id),
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
            if (q || !Z) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = w?.features.has(eU.GuildFeatures.COMMUNITY),
                t = Q.filter((e) => e.type === eU.fg2.TWITCH).length > 0,
                n = Q.filter((e) => e.type === eU.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: en > 0 || (!t && e), showYoutubeCard: ei > 0 || (!n && e) };
        }, [q, Z, w, Q, en, ei]),
        eo = Object.values(M).length,
        ec = s.useMemo(() => {
            let e = eo > 100 ? tJ : tW();
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
        }, [M, eo, F]),
        eg = (0, o.bG)(
            [tY.A],
            () => {
                if (null != w) return ec.find((e) => tY.A.canShowOverviewTooltip(w.id, e.integration.id));
            },
            [ec, w],
        ),
        eh = s.useMemo(
            () => (void 0 !== eg ? [eg, ...ec.filter((e) => e.integration.id !== eg.integration.id)] : ec),
            [ec, eg],
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
                              text: $.intl.formatToPlainString($.t.Nu9sat, {
                                  timestamp: eu.default.extractTimestamp(r.id),
                                  user: em.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: C.ClockIcon,
                              text: $.intl.formatToPlainString($.t.gcdJ8J, {
                                  timestamp: eu.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, l.jsx)(
                        tL,
                        {
                            name: a.name,
                            imageSrc: ed.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: $.intl.string($.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                (n(a.id),
                                    ty.default.track(eU.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? A.A.can(eU.xBc.ADMINISTRATOR, e) : void 0,
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
        }),
        eN = ej;
    0 === ej.length &&
        Z &&
        ((t = w?.id),
        (r = (0, tg.M)(K) ? "/assets/35c8990288849b40.svg" : "/assets/9d2bd46b521600c7.svg"),
        (d = (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            align: g.A.Align.CENTER,
            className: tQ.Kl,
            children: [
                (0, l.jsx)("img", { alt: "", src: r, className: tQ.s1 }),
                (0, l.jsx)(T.Z, {
                    editable: !0,
                    className: tQ.$N,
                    children: (0, l.jsx)(I.E, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: $.intl.string($.t.EVWFNr),
                    }),
                }),
            ],
        })),
        (u = (0, l.jsx)(T.Z, {
            editable: !0,
            className: tQ.$N,
            children: (0, l.jsxs)("div", {
                className: tQ.q6,
                children: [
                    (0, l.jsx)("img", { alt: "", src: "/assets/48b60325911c81e0.svg", className: tQ.QT }),
                    (0, l.jsx)(c.D, {
                        color: "text-default",
                        variant: "heading-xl/bold",
                        children: $.intl.string($.t.nQQeFM),
                    }),
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: $.intl.format($.t.snvKU3, {
                            handleGoToAppDirectory: function () {
                                ((0, tH.transitionToGlobalDiscovery)({
                                    tab: tq.GlobalDiscoveryTab.APPS,
                                    newSessionState: {
                                        entrypoint: { name: tz.sW.GUILD_INTEGRATION_SETTINGS },
                                        guildId: t,
                                    },
                                }),
                                    (0, tB.jH)());
                            },
                        }),
                    }),
                ],
            }),
        })),
        (eN = eo > 0 ? d : u));
    let eE = b.A.getArticleURL(eU.MVz.INTEGRATIONS),
        eC = null != R ? $.t.YV0vh6 : $.t.FnZEJs,
        ev = [];
    if (J) {
        let e, t, s, a, r;
        (ev.push(
            ((n = P.length),
            n > 0 ? (t = (0, l.jsx)(tD.u, { size: "xs" })) : (e = $.intl.string($.t.lOQqJK)),
            (0, l.jsx)(
                tL,
                {
                    name: $.intl.string($.t.xOg4SP),
                    icon: k.X,
                    buttonText: e,
                    buttonDisabled: !G,
                    trailing: t,
                    onButtonClick: B,
                    hasNextSection: n > 0,
                    details: [{ text: $.intl.formatToPlainString($.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            (null == R || tK.XD.has(R.type) || W.length > 0) &&
                ev.push(
                    ((i = W.length),
                    i > 0
                        ? ((r = (0, l.jsx)(tD.u, { size: "xs" })), (a = H))
                        : ((s = $.intl.string($.t["ZwSt+T"])),
                          (a = () => open(b.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        tL,
                        {
                            name: $.intl.string($.t.OrV60r),
                            icon: tG._,
                            buttonText: s,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: i > 0,
                            details: [{ text: $.intl.formatToPlainString($.t.JUNGIZ, { count: i }) }],
                        },
                        "channels-followed",
                    )),
                ));
    }
    (null == R &&
        et.length > 0 &&
        ev.push(
            ((a = et.length),
            (0, l.jsx)(
                tL,
                {
                    name: $.intl.string($.t.tqtDXC),
                    icon: ti.RefreshIcon,
                    trailing: (0, l.jsx)(tD.u, { size: "xs" }),
                    onButtonClick: V,
                    hasNextSection: !0,
                    details: [{ text: $.intl.formatToPlainString($.t["puxS4+"], { count: a }) }],
                },
                "channels-syncing",
            )),
        ),
        ea &&
            ev.push(
                ((j = e6.A.get(eU.fg2.TWITCH)),
                en > 0
                    ? ((f = (0, l.jsx)(tD.u, { size: "xs" })),
                      (x = $.intl.formatToPlainString($.t.FFpnT8, { count: el })),
                      (p = () => U(eU.fg2.TWITCH)))
                    : ((h = $.intl.string($.t.bkvGkn)),
                      (x = $.intl.string($.t.Qq3X2M)),
                      (p = () => (0, m.A)({ platformType: eU.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tL,
                    {
                        name: $.intl.string($.t.q4pBG3),
                        icon: j.icon.whiteSVG,
                        iconBackgroundColor: j.color,
                        iconClassName: tQ.tV,
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
            ev.push(
                ((L = e6.A.get(eU.fg2.YOUTUBE)),
                ei > 0
                    ? ((O = (0, l.jsx)(tD.u, { size: "xs" })),
                      (v = $.intl.formatToPlainString($.t.b2g5vC, { count: es })),
                      (y = () => U(eU.fg2.YOUTUBE)))
                    : ((N = $.intl.string($.t.xEyQ3X)),
                      (v = $.intl.string($.t.T0ivgQ)),
                      (y = () => (0, m.A)({ platformType: eU.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tL,
                    {
                        name: $.intl.string($.t.aS6cK4),
                        icon: L.icon.whiteSVG,
                        iconBackgroundColor: L.color,
                        iconClassName: tQ.tV,
                        buttonText: N,
                        onButtonClick: y,
                        trailing: O,
                        hasNextSection: ei > 0,
                        details: [{ text: v }],
                    },
                    "integrations-youtube",
                )),
            ));
    let eT = null != R && X && null != ee;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.E, { variant: "text-sm/normal", children: $.intl.format(eC, { helpdeskArticle: eE }) }),
            (0, l.jsx)(S.c, { className: tQ.yF }),
            D || q || null == w
                ? (0, l.jsx)(tU.y, { className: tQ.__invalid_spinner, type: tU.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          ev,
                          eT &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      ev.length > 0 ? (0, l.jsx)(S.c, { className: tQ.yF }) : null,
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-md/semibold",
                                          className: tQ.bV,
                                          children: $.intl.string($.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tw, {
                                          channel: R,
                                          application: ee,
                                          showApplicationImage: !0,
                                          name: ee.name,
                                          hasNextSection: !0,
                                          iconClassName: tQ.d0,
                                          trailing: (0, l.jsx)(tA.PencilIcon, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          Z
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        ev.length > 0 || eT ? (0, l.jsx)(S.c, { className: tQ.yF }) : null,
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: tQ.bV,
                                            children: $.intl.string($.t.pUBKht),
                                        }),
                                        eo > 4 ? (0, l.jsx)(tZ, { query: F, setQuery: Y }) : null,
                                        eN,
                                    ],
                                })
                              : null,
                      ],
                  }),
        ],
    });
}
var t$ = n(964486),
    t0 = n(580807);
function t2(e) {
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
            let e = await eD.A.create(n.id, t.id);
            null != e && x(e);
        }
    }, [m, t, n]);
    (0, t$.Ay)(() => {
        0 === a.length && p();
    });
    let A = null !== t;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t.WL0d0e, {
                    helpdeskArticle: b.A.getArticleURL(eU.MVz.WEBHOOKS),
                    developersArticle: eU.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, l.jsx)(S.c, { className: t0.zN }),
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.Tf,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: $.intl.string($.t["nrO/HH"]),
                                  disabled: !A,
                                  onClick: p,
                              }),
                          }),
                          (0, l.jsx)(e0, {
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
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: $.intl.string($.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: $.intl.string($.t.lOQqJK),
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
var t1 = n(494192);
function t3(e, t) {
    switch (e) {
        case eU.wLn.APPLICATION:
            return t?.application.name ?? "";
        case eU.wLn.OVERVIEW:
            return $.intl.string($.t.s69NLF);
        case eU.wLn.CHANNEL_FOLLOWING:
            return $.intl.string($.t.OrV60r);
        case eU.wLn.TWITCH:
            return $.intl.string($.t.q4pBG3);
        case eU.wLn.WEBHOOKS:
            return $.intl.string($.t.xOg4SP);
        case eU.wLn.YOUTUBE:
            return $.intl.string($.t.aS6cK4);
        case eU.wLn.LOBBIES_LINKED:
            return $.intl.string($.t.tqtDXC);
        default:
            return "";
    }
}
let t8 = s.memo(function (e) {
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
                k.SELECTABLE.map((e) => e.channel).filter((e) => A.A.can(eU.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        L = (0, o.cf)([A.A], () =>
            r().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && A.A.can(eU.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        w = a ?? y,
        R = t === eU.wLn.APPLICATION ? n : null,
        [M, _] = s.useState(1.4),
        P = s.useCallback(
            () =>
                S()
                    ? (f._.dispatch(eU.jej.SHAKE_APP, { duration: 300, intensity: M }),
                      _(Math.min(M + 2, 15)),
                      f._.dispatch(eU.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (_(1.4), !0),
            [S, M],
        ),
        W = s.useCallback((e) => !!P() && (u.A.setSection(e), !0), [P]),
        {
            applicationIntegrations: D,
            applicationBotIds: G,
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
                        : t.type === eU.NH1.CHANNEL_FOLLOWER
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
                case eU.wLn.TWITCH:
                    null == U[eU.fg2.TWITCH] && u.A.setSection(eU.wLn.OVERVIEW);
                    break;
                case eU.wLn.YOUTUBE:
                    null == U[eU.fg2.YOUTUBE] && u.A.setSection(eU.wLn.OVERVIEW);
                    break;
                case eU.wLn.APPLICATION:
                    (null != R && (R in G || R in D)) || u.A.setSection(eU.wLn.OVERVIEW);
            }
    }, [D, G, U, R, t, v]),
        s.useEffect(() => {
            i?.id == null || (x.A.getEntitlementsForGuildFetchState(i.id) === x.e.NOT_FETCHED && h.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(eU.wLn.OVERVIEW, null);
            },
            [],
        ));
    let z = null;
    switch (t) {
        case eU.wLn.TWITCH:
            null != U[eU.fg2.TWITCH] &&
                (z = (0, l.jsx)(tm, {
                    guild: i,
                    integrations: U[eU.fg2.TWITCH],
                    editedIntegration: N,
                    labelText: $.intl.string($.t.q4pBG3),
                    platformType: eU.fg2.TWITCH,
                    descriptionText: $.intl.string($.t.V9kNqt),
                    helpText: $.intl.format($.t.ro1jEN, {
                        connectAction: () =>
                            (0, m.A)({ platformType: eU.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: b.A.getArticleURL(eU.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.YOUTUBE:
            null != U[eU.fg2.YOUTUBE] &&
                (z = (0, l.jsx)(tm, {
                    guild: i,
                    integrations: U[eU.fg2.YOUTUBE],
                    editedIntegration: N,
                    labelText: $.intl.string($.t.aS6cK4),
                    platformType: eU.fg2.YOUTUBE,
                    descriptionText: $.intl.string($.t["7Tv7JK"]),
                    helpText: $.intl.format($.t["4OSAQ9"], {
                        connectAction: () => (0, m.A)({ platformType: eU.fg2.YOUTUBE }),
                        helpdeskArticle: b.A.getArticleURL(eU.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.APPLICATION:
            let V = null != R ? (D[G[R]] ?? D[R]) : null;
            null != V &&
                (z = (0, l.jsx)(e8, {
                    guild: i,
                    applicationIntegration: V,
                    editedWebhook: C,
                    selectableWebhookChannels: O,
                    errors: I,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.CHANNEL_FOLLOWING:
            z = (0, l.jsx)(tp, {
                followedChannelWebhooks: H,
                editedWebhook: C,
                selectableWebhookChannels: O,
                canNavigate: P,
                errors: I,
            });
            break;
        case eU.wLn.WEBHOOKS:
            z = (0, l.jsx)(t2, {
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
        case eU.wLn.LOBBIES_LINKED:
            z = (0, l.jsx)(t_, { guild: i });
            break;
        default:
            z = (0, l.jsx)(tX, {
                guild: i,
                channel: a,
                applicationIntegrations: D,
                builtInIntegrations: U,
                customWebhooks: B,
                followedChannelWebhooks: H,
                isLoadingWebhooks: v || null == i,
                canCreateWebhook: null != w,
                onManageCustomWebhooks: () => {
                    u.A.setSection(eU.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(eU.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(eU.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case eU.fg2.TWITCH:
                            u.A.setSection(eU.wLn.TWITCH);
                            break;
                        case eU.fg2.YOUTUBE:
                            u.A.setSection(eU.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(eU.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.A, {
                align: g.A.Align.CENTER,
                className: t1.jD,
                children:
                    t === eU.wLn.OVERVIEW
                        ? (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t3(eU.wLn.OVERVIEW) })
                        : (0, l.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [eU.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: t3(e, D[R]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && W(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(c.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? t1.q3 : t1.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            z,
        ],
    });
});
